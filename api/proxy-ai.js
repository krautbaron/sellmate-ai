// api/proxy-ai.js – Vercel Serverless Function (Node.js runtime)
// Unterstützt: Invite-Code Prüfung, KI-Proxy, Tavily-Proxy & Automatische GitHub Fehler-Tickets

const GITHUB_REPO = 'krautbaron/sellmate-ai';

function buildSupabaseHeaders(supabaseKey, extra = {}) {
  const cleanKey = String(supabaseKey || '').trim();
  const headers = {
    'Content-Type': 'application/json',
    apikey: cleanKey,
    ...extra
  };
  // Klassische JWT-Keys beginnen mit "eyJ" -> Authorization Bearer mitsenden.
  // Neue Supabase Keys ("sb_secret_..." / "sb_publishable_...") werden über "apikey" authentifiziert.
  if (cleanKey.startsWith('eyJ')) {
    headers.Authorization = `Bearer ${cleanKey}`;
  }
  return headers;
}

// Erstellt automatisch ein GitHub Issue (oder kommentiert ein bestehendes offenes Issue gleichen Titels)
async function createAutoGitHubTicket({ title, category = 'Server-Error', message = '', details = {}, clientPat = '' }) {
  const pat = (process.env.GITHUB_PAT || process.env.SERVER_GITHUB_PAT || clientPat || '').trim();
  if (!pat) {
    return { created: false, reason: 'Kein GITHUB_PAT in Vercel oder Client hinterlegt' };
  }

  const issueTitle = `🚨 [Auto-Ticket] ${category}: ${String(title || message).slice(0, 75)}`;
  const bodyText = [
    `### 🚨 Automatisch erfasstes Fehler-Ticket`,
    `- **Zeitpunkt:** \`${new Date().toISOString()}\``,
    `- **Kategorie:** \`${category}\``,
    `- **Fehlermeldung:** \`${message}\``,
    details.inviteCode ? `- **Verwendeter Invite-Code:** \`${details.inviteCode}\`` : '',
    details.device ? `- **Gerät / Browser:** ${details.device}` : '',
    details.url ? `- **URL:** \`${details.url}\`` : '',
    '',
    '#### Technische Diagnose-Daten',
    '```json',
    JSON.stringify(details, null, 2).slice(0, 3500),
    '```'
  ]
    .filter(Boolean)
    .join('\n');

  const ghHeaders = {
    Authorization: `Bearer ${pat}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'SellMate-AI-ErrorBot'
  };

  try {
    // 1. Prüfe, ob bereits ein offenes Ticket mit diesem Titel existiert (Deduplizierung)
    const listRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues?state=open&per_page=30`, {
      headers: ghHeaders
    });
    if (listRes.ok) {
      const issues = await listRes.json();
      const existing = (issues || []).find((i) => i.title === issueTitle);
      if (existing?.number) {
        const commentRes = await fetch(
          `https://api.github.com/repos/${GITHUB_REPO}/issues/${existing.number}/comments`,
          {
            method: 'POST',
            headers: ghHeaders,
            body: JSON.stringify({ body: bodyText })
          }
        );
        const commentData = await commentRes.json().catch(() => ({}));
        return { created: true, deduplicated: true, issueNumber: existing.number, url: commentData.html_url || existing.html_url };
      }
    }

    // 2. Neues Issue anlegen
    const createRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({
        title: issueTitle,
        body: bodyText,
        labels: ['bug']
      })
    });
    const created = await createRes.json().catch(() => ({}));
    if (!createRes.ok) {
      return { created: false, reason: created?.message || `GitHub HTTP ${createRes.status}` };
    }
    return { created: true, issueNumber: created.number, url: created.html_url };
  } catch (err) {
    return { created: false, reason: err.message };
  }
}

export default async function handler(req, res) {
  // CORS Headers (damit auch Aufrufe von krautbaron.github.io funktionieren)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    inviteCode,
    action = 'status',
    deductCredit = false,
    payload = {},
    clientGithubPat = ''
  } = req.body || {};

  // ---------------------------------------------------------------------------
  // AKTION 0: Direktes Fehler-Ticket vom Client melden (action === 'report_error')
  // ---------------------------------------------------------------------------
  if (action === 'report_error') {
    const ticket = await createAutoGitHubTicket({
      title: payload.title || payload.message || 'Client-Fehler',
      category: payload.category || 'Client-Error',
      message: payload.message || 'Unbekannter Fehler',
      details: payload,
      clientPat: clientGithubPat
    });
    return res.status(200).json({ ok: true, ticket });
  }

  if (action === 'list_models') {
    const apiKey = (process.env.SERVER_AI_API_KEY || '').trim();
    const mRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
    const mData = await mRes.json().catch(() => ({}));
    return res.status(200).json(mData);
  }

  const supabaseUrl = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '');
  const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

  if (!supabaseUrl || !supabaseServiceKey) {
    const errMsg = 'Server-Konfiguration unvollständig: SUPABASE_URL oder SUPABASE_SERVICE_ROLE_KEY fehlt in Vercel (oder Redeploy nötig).';
    const ticket = await createAutoGitHubTicket({
      title: 'Supabase Env-Variablen fehlen in Vercel',
      category: 'Config-Error',
      message: errMsg,
      details: { hasUrl: Boolean(supabaseUrl), hasKey: Boolean(supabaseServiceKey), action },
      clientPat: clientGithubPat
    });
    return res.status(500).json({ error: errMsg, ticket });
  }

  const cleanCode = String(inviteCode || '').trim().toUpperCase();
  if (!cleanCode) {
    return res.status(401).json({ error: 'Bitte gib zuerst einen gültigen Einladungscode ein.' });
  }

  // Hilfsfunktion: Prüft & bucht Credits ab (Versucht erst RPC, fällt bei Bedarf automatisch auf direkten Tabellen-Zugriff zurück!)
  async function checkOrConsumeCredit(amount) {
    // 1. Versuch: Über RPC-Funktion consume_invite_credit
    const rpcRes = await fetch(`${supabaseUrl}/rest/v1/rpc/consume_invite_credit`, {
      method: 'POST',
      headers: buildSupabaseHeaders(supabaseServiceKey),
      body: JSON.stringify({ p_code: cleanCode, p_amount: amount })
    });

    if (rpcRes.ok) {
      const rpcData = await rpcRes.json().catch(() => ({}));
      if (rpcData && typeof rpcData.valid === 'boolean') {
        return rpcData;
      }
    }

    // 2. Fallback: Direkte Abfrage der Tabelle public.invite_codes über REST
    // (Funktioniert selbst dann, wenn die RPC-Funktion in Supabase fehlt oder sb_secret_ Key genutzt wird)
    const tableUrl = `${supabaseUrl}/rest/v1/invite_codes?select=*`;
    const listRes = await fetch(tableUrl, {
      method: 'GET',
      headers: buildSupabaseHeaders(supabaseServiceKey)
    });

    const listData = await listRes.json().catch(() => null);
    if (!listRes.ok) {
      const detailMsg = listData?.message || listData?.error || listData?.hint || `HTTP ${listRes.status}`;
      throw new Error(`Supabase Zugriff fehlgeschlagen (${detailMsg}). Prüfe SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY.`);
    }

    const rows = Array.isArray(listData) ? listData : [];
    const matched = rows.find((r) => String(r.code || '').trim().toUpperCase() === cleanCode);

    if (!matched) {
      return {
        valid: false,
        error: `Einladungscode "${cleanCode}" wurde in der Supabase-Tabelle invite_codes nicht gefunden (Vorhandene Codes: ${rows.length}).`
      };
    }

    if (matched.is_active === false) {
      return { valid: false, error: 'Dieser Einladungscode wurde deaktiviert.' };
    }

    const total = Number(matched.credits_total ?? 50);
    const used = Number(matched.credits_used ?? 0);

    if (used + amount > total) {
      return {
        valid: false,
        error: `Test-Guthaben (${total} Analysen) für Code "${cleanCode}" ist aufgebraucht.`,
        remainingCredits: Math.max(0, total - used),
        totalCredits: total
      };
    }

    let newUsed = used;
    if (amount > 0) {
      newUsed = used + amount;
      await fetch(`${supabaseUrl}/rest/v1/invite_codes?code=eq.${encodeURIComponent(matched.code)}`, {
        method: 'PATCH',
        headers: buildSupabaseHeaders(supabaseServiceKey, { Prefer: 'return=minimal' }),
        body: JSON.stringify({
          credits_used: newUsed,
          last_used_at: new Date().toISOString()
        })
      });
    }

    return {
      valid: true,
      code: matched.code,
      label: matched.label || 'Freunde-Beta',
      remainingCredits: Math.max(0, total - newUsed),
      totalCredits: total
    };
  }

  try {
    // -------------------------------------------------------------------------
    // AKTION 1: Status & Rest-Credits abfragen
    // -------------------------------------------------------------------------
    if (action === 'status') {
      const statusData = await checkOrConsumeCredit(0);
      if (!statusData.valid) {
        const ticket = await createAutoGitHubTicket({
          title: `Invite-Code abgelehnt (${cleanCode})`,
          category: 'Invite-Code',
          message: statusData.error || 'Ungültiger Code',
          details: { inviteCode: cleanCode, statusData },
          clientPat: clientGithubPat
        });
        return res.status(403).json({ ...statusData, ticket });
      }
      return res.status(200).json({
        ...statusData,
        hasServerTavily: Boolean(process.env.SERVER_TAVILY_API_KEY)
      });
    }

    // -------------------------------------------------------------------------
    // AKTION 2: Tavily Live-Websuche
    // -------------------------------------------------------------------------
    if (action === 'tavily') {
      const tavilyKey = (process.env.SERVER_TAVILY_API_KEY || '').trim();
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
    // AKTION 3: Vision / KI-Analyse über Server-Key
    // -------------------------------------------------------------------------
    if (action === 'vision') {
      const provider = (process.env.SERVER_AI_PROVIDER || 'gemini').toLowerCase().trim();
      const apiKey = (process.env.SERVER_AI_API_KEY || '').trim();
      if (!apiKey) {
        const msg = 'SERVER_AI_API_KEY fehlt in den Vercel Environment Variables.';
        const ticket = await createAutoGitHubTicket({
          title: msg,
          category: 'Config-Error',
          message: msg,
          details: { provider, inviteCode: cleanCode },
          clientPat: clientGithubPat
        });
        return res.status(500).json({ error: msg, ticket });
      }

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
        let targetModel = (process.env.SERVER_AI_MODEL || '').trim();

        // Standardmäßig gemini-3.8-flash nutzen (von Google für neue Keys gefordert)
        if (!targetModel || targetModel.includes('2.5') || targetModel.includes('lite') || targetModel.includes('2.0')) {
          targetModel = 'gemini-3.8-flash';
        }

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

        const candidateModels = [
          targetModel,
          'gemini-1.5-flash',
          'gemini-flash-latest',
          'gemma-3-27b-it'
        ].filter((m, idx, arr) => m && arr.indexOf(m) === idx);

        let lastGemError = '';
        let lastGemStatus = 500;

        for (const candidateModel of candidateModels) {
          const isGemma = candidateModel.toLowerCase().startsWith('gemma');
          const body = {
            contents: [{ role: 'user', parts: isGemma ? [{ text: systemPrompt + '\n\n' }, ...parts] : parts }],
            generationConfig: { temperature: 0.2 }
          };
          if (!isGemma) {
            body.system_instruction = { parts: [{ text: systemPrompt }] };
            if (allowGeminiSearch) {
              body.tools = [{ google_search: {} }];
            } else {
              body.generationConfig.responseMimeType = 'application/json';
            }
          }

          let gemRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${candidateModel}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body)
            }
          );
          let gemData = await gemRes.json().catch(() => ({}));

          // Falls Search oder JSON 400/429/503 liefert, sofort nochmals einfacher probieren
          if (!gemRes.ok && !isGemma && (allowGeminiSearch || gemRes.status === 400 || gemRes.status === 429)) {
            const bodyPlain = {
              contents: [{ role: 'user', parts: [{ text: systemPrompt + '\n\n' }, ...parts] }],
              generationConfig: { temperature: 0.2 }
            };
            const retryRes = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${candidateModel}:generateContent?key=${encodeURIComponent(apiKey)}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyPlain)
              }
            );
            const retryData = await retryRes.json().catch(() => ({}));
            if (retryRes.ok) {
              gemRes = retryRes;
              gemData = retryData;
            }
          }

          if (gemRes.ok) {
            const cand = gemData?.candidates?.[0];
            rawText = (cand?.content?.parts || []).map((p) => p.text || '').join('\n').trim();
            if (rawText) {
              usedModel = `Cloud (${candidateModel})`;
              usedSearch = Boolean(allowGeminiSearch && gemRes.ok);
              groundingMetadata = cand?.groundingMetadata || null;
              break;
            }
          }

          lastGemStatus = gemRes.status;
          lastGemError = gemData?.error?.message || `Gemini Fehler (${gemRes.status})`;
        }

        if (!rawText) {
          const finalErrMsg = lastGemError || `Gemini Fehler (${lastGemStatus})`;
          const ticket = await createAutoGitHubTicket({
            title: `Gemini API Fehler (${lastGemStatus})`,
            category: 'AI-Provider',
            message: finalErrMsg,
            details: { targetModel, status: lastGemStatus, inviteCode: cleanCode },
            clientPat: clientGithubPat
          });
          return res.status(lastGemStatus).json({ error: finalErrMsg, ticket });
        }
      } else {
        const defaultUrls = {
          neuralwatt: 'https://api.neuralwatt.com/v1',
          openrouter: 'https://openrouter.ai/api/v1',
          groq: 'https://api.groq.com/openai/v1'
        };
        const baseUrl = (process.env.SERVER_AI_BASE_URL || defaultUrls[provider] || 'https://openrouter.ai/api/v1').replace(/\/+$/, '');
        const model = (process.env.SERVER_AI_MODEL || (provider === 'openrouter' ? 'google/gemini-2.5-flash' : 'gemma-4-31b')).trim();

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
          const errMsg = oaiData?.error?.message || `KI-Server-Fehler (${oaiRes.status})`;
          const ticket = await createAutoGitHubTicket({
            title: `OpenAI-Compatible API Fehler (${oaiRes.status})`,
            category: 'AI-Provider',
            message: errMsg,
            details: { provider, model, status: oaiRes.status, inviteCode: cleanCode },
            clientPat: clientGithubPat
          });
          return res.status(oaiRes.status).json({ error: errMsg, ticket });
        }

        rawText = oaiData?.choices?.[0]?.message?.content || '';
        usedModel = `Cloud (${model})`;
      }

      if (!rawText) {
        return res.status(500).json({ error: 'Leere Antwort vom KI-Modell.' });
      }

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
    const ticket = await createAutoGitHubTicket({
      title: err.message || 'Unbehandelte Proxy-Exception',
      category: 'Backend-Exception',
      message: err.message || 'Interner Serverfehler',
      details: { action, inviteCode: cleanCode, stack: err.stack },
      clientPat: clientGithubPat
    });
    return res.status(500).json({ error: err.message || 'Interner Serverfehler', ticket });
  }
}
