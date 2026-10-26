// api/proxy-ai.js – Vercel Serverless Function (Node.js runtime)

export default async function handler(req, res) {
  // CORS Headers für PWA-Aufrufe
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabaseUrl = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({
      error: 'Server-Konfiguration unvollständig (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY fehlt in Vercel).'
    });
  }

  const { inviteCode, action = 'status', deductCredit = false, payload = {} } = req.body || {};
  const cleanCode = String(inviteCode || '').trim().toUpperCase();

  if (!cleanCode) {
    return res.status(401).json({ error: 'Bitte gib zuerst einen gültigen Einladungscode ein.' });
  }

  // Hilfsfunktion: Supabase RPC consume_invite_credit aufrufen
  async function checkOrConsumeCredit(amount) {
    const rpcRes = await fetch(`${supabaseUrl}/rest/v1/rpc/consume_invite_credit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`
      },
      body: JSON.stringify({ p_code: cleanCode, p_amount: amount })
    });

    const data = await rpcRes.json().catch(() => ({}));
    if (!rpcRes.ok) {
      throw new Error(data?.message || `Supabase RPC Fehler (${rpcRes.status})`);
    }
    return data;
  }

  try {
    // -------------------------------------------------------------------------
    // AKTION 1: Nur Status & Rest-Credits abfragen (0 Credits Abzug)
    // -------------------------------------------------------------------------
    if (action === 'status') {
      const statusData = await checkOrConsumeCredit(0);
      if (!statusData.valid) {
        return res.status(403).json(statusData);
      }
      return res.status(200).json({
        ...statusData,
        hasServerTavily: Boolean(process.env.SERVER_TAVILY_API_KEY)
      });
    }

    // -------------------------------------------------------------------------
    // AKTION 2: Tavily Live-Websuche über Server-Key (0 Credits Abzug, prüft aber Gültigkeit)
    // -------------------------------------------------------------------------
    if (action === 'tavily') {
      const tavilyKey = process.env.SERVER_TAVILY_API_KEY || '';
      if (!tavilyKey) {
        return res.status(400).json({ error: 'Kein SERVER_TAVILY_API_KEY auf dem Server hinterlegt.' });
      }

      const creditCheck = await checkOrConsumeCredit(0);
      if (!creditCheck.valid) {
        return res.status(403).json(creditCheck);
      }

      const query = String(payload.query || '').trim().slice(0, 300);
      const maxResults = Math.min(6, Math.max(1, Number(payload.maxResults) || 4));
      if (!query) {
        return res.status(400).json({ error: 'Leere Suchanfrage.' });
      }

      const tavRes = await fetch('https://api.tavily.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: tavilyKey,
          query,
          search_depth: 'basic',
          include_answer: false,
          max_results: maxResults
        })
      });

      const tavData = await tavRes.json().catch(() => ({}));
      if (!tavRes.ok) {
        return res.status(tavRes.status).json({ error: tavData?.detail || tavData?.error || 'Tavily Fehler' });
      }
      return res.status(200).json(tavData);
    }

    // -------------------------------------------------------------------------
    // AKTION 3: Vision / KI-Analyse über Server-Key (1 Credit Abzug bei deductCredit=true)
    // -------------------------------------------------------------------------
    if (action === 'vision') {
      const provider = (process.env.SERVER_AI_PROVIDER || 'gemini').toLowerCase();
      const apiKey = process.env.SERVER_AI_API_KEY || '';
      if (!apiKey) {
        return res.status(500).json({ error: 'SERVER_AI_API_KEY fehlt in den Vercel Environment Variables.' });
      }

      // Erst prüfen, ob noch Guthaben da ist (0 Abzug vor dem Call, damit bei KI-Fehler kein Credit verloren geht!)
      const preCheck = await checkOrConsumeCredit(0);
      if (!preCheck.valid) {
        return res.status(403).json(preCheck);
      }

      const {
        systemPrompt = '',
        userPrompt = '',
        images = [],
        maxTokens = 1300,
        allowGeminiSearch = false
      } = payload;

      let rawText = '';
      let usedModel = '';
      let usedSearch = false;
      let groundingMetadata = null;

      if (provider === 'gemini') {
        const model = process.env.SERVER_AI_MODEL || 'gemini-2.5-flash-lite';
        const parts = [
          ...(images || []).slice(0, 4).map((img) => ({
            inline_data: { mime_type: img.mimeType || 'image/jpeg', data: img.base64 }
          })),
          { text: userPrompt }
        ];

        const body = {
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts }],
          generationConfig: { temperature: 0.2 }
        };

        if (allowGeminiSearch) {
          body.tools = [{ google_search: {} }];
        } else {
          body.generationConfig.responseMimeType = 'application/json';
        }

        const gemRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          }
        );
        const gemData = await gemRes.json().catch(() => ({}));
        if (!gemRes.ok) {
          return res.status(gemRes.status).json({
            error: gemData?.error?.message || `Gemini Server-Fehler (${gemRes.status})`
          });
        }

        const cand = gemData?.candidates?.[0];
        rawText = (cand?.content?.parts || []).map((p) => p.text || '').join('\n').trim();
        usedModel = `Cloud (${model})`;
        usedSearch = Boolean(allowGeminiSearch);
        groundingMetadata = cand?.groundingMetadata || null;
      } else {
        // OpenAI-kompatibler Server-Provider (Neuralwatt, OpenRouter, Groq)
        const defaultUrls = {
          neuralwatt: 'https://api.neuralwatt.com/v1',
          openrouter: 'https://openrouter.ai/api/v1',
          groq: 'https://api.groq.com/openai/v1'
        };
        const baseUrl = (process.env.SERVER_AI_BASE_URL || defaultUrls[provider] || 'https://openrouter.ai/api/v1').replace(/\/+$/, '');
        const model = process.env.SERVER_AI_MODEL || (provider === 'openrouter' ? 'google/gemini-2.5-flash' : 'gemma-4-31b');

        let userContent = userPrompt;
        if (images && images.length > 0) {
          userContent = [
            ...images.slice(0, 4).map((img) => ({
              type: 'image_url',
              image_url: { url: `data:${img.mimeType || 'image/jpeg'};base64,${img.base64}` }
            })),
            { type: 'text', text: userPrompt }
          ];
        }

        const oaiRes = await fetch(`${baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://sellmate-ai.vercel.app',
            'X-Title': 'SellMate AI'
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userContent }
            ],
            temperature: 0.2,
            max_tokens: Math.min(1600, Number(maxTokens) || 1300)
          })
        });

        const oaiData = await oaiRes.json().catch(() => ({}));
        if (!oaiRes.ok) {
          return res.status(oaiRes.status).json({
            error: oaiData?.error?.message || `KI-Server-Fehler (${oaiRes.status})`
          });
        }

        rawText = oaiData?.choices?.[0]?.message?.content || '';
        usedModel = `Cloud (${model})`;
      }

      if (!rawText) {
        return res.status(500).json({ error: 'Leere Antwort vom KI-Modell.' });
      }

      // Nach erfolgreicher KI-Antwort Credit abziehen (wenn Hauptanalyse)
      const afterCredit = await checkOrConsumeCredit(deductCredit ? 1 : 0);

      return res.status(200).json({
        rawText,
        usedModel,
        usedSearch,
        groundingMetadata,
        creditStatus: afterCredit
      });
    }

    return res.status(400).json({ error: `Unbekannte Aktion: ${action}` });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Interner Serverfehler' });
  }
}
