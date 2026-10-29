// api/proxy-ai.js – Vercel Serverless Function (Node.js runtime)
// Unterstützt: Invite-Code Prüfung, KI-Proxy, Tavily-Proxy & Automatische GitHub Fehler-Tickets

const GITHUB_REPO = process.env.GITHUB_REPO || 'krautbaron/sellmate-ai';

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
async function createAutoGitHubTicket({
  title,
  category = 'Server-Error',
  message = '',
  details = {},
  clientPat = '',
  isUserReport = false,
  userNotes = '',
  contact = ''
}) {
  const pat = (process.env.GITHUB_PAT || process.env.SERVER_GITHUB_PAT || clientPat || '').trim();
  const repoName = (process.env.GITHUB_REPO || GITHUB_REPO).trim();

  const isExplicitUser = Boolean(isUserReport || details.isUserReport);
  const notes = String(userNotes || details.userNotes || '').trim();
  const userContact = String(contact || details.contact || '').trim();
  const cleanTitle = String(title || message || 'Fehler').slice(0, 75);
  const issueTitle = isExplicitUser
    ? `🚨 [User Report] ${category}: ${cleanTitle}`
    : `🤖 [Auto-Ticket] ${category}: ${cleanTitle}`;

  const bodySections = [];
  if (isExplicitUser) {
    bodySections.push('### 🚨 Nutzer-Fehlermeldung (SellMate AI)');
    bodySections.push(`> 💬 **Nutzer-Beschreibung:**\n> ${notes ? notes.replace(/\n/g, '\n> ') : '_Keine zusätzliche Beschreibung angegeben._'}`);
    bodySections.push('');
    if (userContact) bodySections.push(`- **Kontakt:** \`${userContact}\``);
  } else {
    bodySections.push('### 🤖 Automatisch erfasstes Fehler-Ticket');
  }

  bodySections.push(`- **Zeitpunkt:** \`${new Date().toISOString()}\``);
  bodySections.push(`- **Kategorie:** \`${category}\``);
  bodySections.push(`- **Fehlermeldung:** \`${message}\``);
  if (details.inviteCode) bodySections.push(`- **Invite-Code:** \`${details.inviteCode}\``);
  if (details.device) bodySections.push(`- **Gerät / Browser:** ${details.device}`);
  if (details.url) bodySections.push(`- **URL:** \`${details.url}\``);
  if (details.activeModel) bodySections.push(`- **Aktives Modell:** \`${details.activeModel}\``);

  bodySections.push('');
  bodySections.push('<details>');
  bodySections.push('<summary>🔍 Technische Diagnose-Daten & Logs aufklappen</summary>');
  bodySections.push('');
  bodySections.push('```json');
  bodySections.push(JSON.stringify(details, null, 2).slice(0, 3800));
  bodySections.push('```');
  bodySections.push('</details>');

  const bodyText = bodySections.join('\n');

  // Fallback-Link für Nutzer, falls auf Vercel kein PAT konfiguriert ist
  const fallbackUrl = `https://github.com/${repoName}/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(bodyText.slice(0, 1600))}&labels=bug,user-report`;

  if (!pat) {
    return {
      created: false,
      reason: 'Kein GITHUB_PAT in Vercel oder Client hinterlegt',
      fallbackUrl,
      issueTitle
    };
  }

  const ghHeaders = {
    Authorization: `Bearer ${pat}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    'User-Agent': 'SellMate-AI-ErrorBot'
  };

  try {
    // 1. Prüfe, ob bereits ein offenes Ticket mit diesem Titel existiert (Deduplizierung)
    const listRes = await fetch(`https://api.github.com/repos/${repoName}/issues?state=open&per_page=30`, {
      headers: ghHeaders
    });
    if (listRes.ok) {
      const issues = await listRes.json();
      const existing = (issues || []).find((i) => i.title === issueTitle);
      if (existing?.number) {
        const commentRes = await fetch(
          `https://api.github.com/repos/${repoName}/issues/${existing.number}/comments`,
          {
            method: 'POST',
            headers: ghHeaders,
            body: JSON.stringify({ body: bodyText })
          }
        );
        const commentData = await commentRes.json().catch(() => ({}));
        return {
          created: true,
          deduplicated: true,
          issueNumber: existing.number,
          url: commentData.html_url || existing.html_url,
          fallbackUrl
        };
      }
    }

    // 2. Neues Issue anlegen
    const labels = isExplicitUser ? ['bug', 'user-report'] : ['bug', 'auto-telemetry'];
    const createRes = await fetch(`https://api.github.com/repos/${repoName}/issues`, {
      method: 'POST',
      headers: ghHeaders,
      body: JSON.stringify({
        title: issueTitle,
        body: bodyText,
        labels
      })
    });
    const created = await createRes.json().catch(() => ({}));
    if (!createRes.ok) {
      return {
        created: false,
        reason: created?.message || `GitHub HTTP ${createRes.status}`,
        fallbackUrl,
        issueTitle
      };
    }
    return {
      created: true,
      issueNumber: created.number,
      url: created.html_url,
      fallbackUrl
    };
  } catch (err) {
    return {
      created: false,
      reason: err.message,
      fallbackUrl,
      issueTitle
    };
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

  const serverAdminPassword = (process.env.ADMIN_PASSWORD || 'KrautMate!2026').trim();
  function isAdminAuthorized(body) {
    const entered = String(body?.adminPassword || body?.payload?.adminPassword || body?.payload?.password || '').trim();
    return entered === serverAdminPassword;
  }

  // ---------------------------------------------------------------------------
  // AKTION 0: Direktes Fehler-Ticket vom Client melden (action === 'report_error')
  // ---------------------------------------------------------------------------
  if (action === 'report_error') {
    const ticket = await createAutoGitHubTicket({
      title: payload.title || payload.message || 'Client-Fehler',
      category: payload.category || 'Client-Error',
      message: payload.message || 'Unbekannter Fehler',
      details: payload,
      clientPat: clientGithubPat,
      isUserReport: Boolean(payload.isUserReport),
      userNotes: payload.userNotes || '',
      contact: payload.contact || ''
    });
    return res.status(200).json({ ok: true, ticket });
  }

  if (action === 'verify_admin') {
    if (isAdminAuthorized(req.body)) {
      return res.status(200).json({ valid: true, message: 'Admin autorisiert.' });
    }
    return res.status(401).json({ valid: false, error: 'Falsches Admin-Passwort.' });
  }

  const supabaseUrl = (process.env.SUPABASE_URL || '').trim().replace(/\/+$/, '');
  const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

  // ---------------------------------------------------------------------------
  // OWNER-COCKPIT ADMIN-AKTIONEN (Supabase Invite-Codes & Server-Status)
  // ---------------------------------------------------------------------------
  if (action === 'admin_list_codes') {
    if (!isAdminAuthorized(req.body)) {
      return res.status(401).json({ error: 'Nicht autorisiert. Falsches Admin-Passwort.' });
    }
    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: 'Supabase ist auf dem Server nicht konfiguriert.' });
    }
    const listRes = await fetch(`${supabaseUrl}/rest/v1/invite_codes?select=*&order=created_at.desc`, {
      method: 'GET',
      headers: buildSupabaseHeaders(supabaseServiceKey)
    });
    const codes = await listRes.json().catch(() => []);
    if (!listRes.ok) {
      return res.status(listRes.status).json({ error: codes?.message || 'Fehler beim Laden der Codes aus Supabase.' });
    }
    return res.status(200).json({
      ok: true,
      codes: Array.isArray(codes) ? codes : [],
      serverConfig: {
        provider: process.env.SERVER_AI_PROVIDER || 'neuralwatt',
        model: process.env.SERVER_AI_MODEL || 'glm-5.3-flash',
        hasAiKey: Boolean(process.env.SERVER_AI_API_KEY),
        aiKeyPreview: process.env.SERVER_AI_API_KEY ? `${process.env.SERVER_AI_API_KEY.slice(0, 5)}...${process.env.SERVER_AI_API_KEY.slice(-4)}` : 'nicht hinterlegt',
        hasTavily: Boolean(process.env.SERVER_TAVILY_API_KEY),
        hasSupabase: Boolean(supabaseUrl && supabaseServiceKey)
      }
    });
  }

  if (action === 'admin_upsert_code') {
    if (!isAdminAuthorized(req.body)) {
      return res.status(401).json({ error: 'Nicht autorisiert. Falsches Admin-Passwort.' });
    }
    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: 'Supabase ist auf dem Server nicht konfiguriert.' });
    }
    const rawCode = String(payload.code || '').trim().toUpperCase();
    if (!rawCode) {
      return res.status(400).json({ error: 'Bitte einen gültigen Code angeben.' });
    }
    const label = String(payload.label || 'Freunde-Beta').trim();
    const creditsTotal = Math.max(1, Number(payload.creditsTotal ?? payload.credits_total) || 50);
    const creditsUsed = Math.max(0, Number(payload.creditsUsed ?? payload.credits_used) || 0);
    const isActive = payload.isActive !== false && payload.is_active !== false;

    const upsertRes = await fetch(`${supabaseUrl}/rest/v1/invite_codes`, {
      method: 'POST',
      headers: buildSupabaseHeaders(supabaseServiceKey, {
        Prefer: 'resolution=merge-duplicates,return=representation'
      }),
      body: JSON.stringify({
        code: rawCode,
        label,
        credits_total: creditsTotal,
        credits_used: creditsUsed,
        is_active: isActive
      })
    });
    const upsertData = await upsertRes.json().catch(() => null);
    if (!upsertRes.ok) {
      return res.status(upsertRes.status).json({ error: upsertData?.message || 'Fehler beim Speichern in Supabase.' });
    }
    return res.status(200).json({ ok: true, item: Array.isArray(upsertData) ? upsertData[0] : upsertData });
  }

  if (action === 'admin_delete_code') {
    if (!isAdminAuthorized(req.body)) {
      return res.status(401).json({ error: 'Nicht autorisiert. Falsches Admin-Passwort.' });
    }
    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: 'Supabase ist auf dem Server nicht konfiguriert.' });
    }
    const targetCode = String(payload.code || '').trim().toUpperCase();
    if (!targetCode) {
      return res.status(400).json({ error: 'Code fehlt.' });
    }
    const delRes = await fetch(`${supabaseUrl}/rest/v1/invite_codes?code=eq.${encodeURIComponent(targetCode)}`, {
      method: 'DELETE',
      headers: buildSupabaseHeaders(supabaseServiceKey)
    });
    if (!delRes.ok) {
      return res.status(delRes.status).json({ error: 'Fehler beim Löschen des Codes.' });
    }
    return res.status(200).json({ ok: true, deleted: targetCode });
  }

  if (action === 'list_models') {
    const apiKey = (process.env.SERVER_AI_API_KEY || '').trim();
    const mRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
    const mData = await mRes.json().catch(() => ({}));
    return res.status(200).json(mData);
  }

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
      const provider = (process.env.SERVER_AI_PROVIDER || 'neuralwatt').toLowerCase().trim();
      const apiKey = (process.env.SERVER_AI_API_KEY || payload.clientApiKey || '').trim();
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

        // Standardmäßig gemini-2.0-flash / gemini-1.5-flash nutzen
        if (!targetModel || targetModel.includes('2.5') || targetModel.includes('lite')) {
          targetModel = 'gemini-2.0-flash';
        }

        const parts = [
          ...(images || []).slice(0, 10).map((img) => ({
            inline_data: { mime_type: img.mimeType || 'image/jpeg', data: img.base64 }
          })),
          { text: userPrompt }
        ];

        const candidateModels = [
          targetModel,
          'gemini-2.0-flash',
          'gemini-1.5-flash',
          'gemini-flash-latest'
        ].filter((v, i, a) => Boolean(v) && a.indexOf(v) === i);

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

          let gemRes;
          let gemData;
          try {
            gemRes = await fetch(
              `https://generativelanguage.googleapis.com/v1beta/models/${candidateModel}:generateContent?key=${encodeURIComponent(apiKey)}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                signal: AbortSignal.timeout(30000)
              }
            );
            gemData = await gemRes.json().catch(() => ({}));
          } catch (fetchErr) {
            lastGemStatus = 504;
            lastGemError = `Timeout bei Modell ${candidateModel}: ${fetchErr.message}`;
            continue;
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
        const baseUrl = (process.env.SERVER_AI_BASE_URL || defaultUrls[provider] || 'https://api.neuralwatt.com/v1').replace(/\/+$/, '');
        const model = (payload.modelOverride || process.env.SERVER_AI_MODEL || (provider === 'neuralwatt' ? 'glm-5.3-flash' : 'gemma-4-31b')).trim();

        let userContent = userPrompt;
        if (images && images.length > 0) {
          userContent = [
            ...images.slice(0, 10).map((img) => ({
              type: 'image_url',
              image_url: { url: `data:${img.mimeType || 'image/jpeg'};base64,${img.base64}` }
            })),
            { type: 'text', text: userPrompt }
          ];
        }

        const reqBody = {
          model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userContent }
          ],
          temperature: 0.2,
          max_tokens: Math.max(1500, Math.min(4000, Number(maxTokens) || 2500))
        };
        if (model.includes('glm-5') || model.includes('r1')) {
          reqBody.reasoning_effort = 'low';
        }

        const oaiRes = await fetch(`${baseUrl}/chat/completions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://sellmate-ai.vercel.app',
            'X-Title': 'SellMate AI'
          },
          body: JSON.stringify(reqBody),
          signal: AbortSignal.timeout(45000)
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

        const firstChoice = oaiData?.choices?.[0];
        const rawContent = (firstChoice?.message?.content || '').trim();
        const rawReasoning = (firstChoice?.message?.reasoning_content || '').trim();

        // Wenn content leer ist, prüfe ob das Modell das Ergebnis in reasoning_content ausgegeben hat
        let candidateText = rawContent || rawReasoning;

        // Bereinige etwaige <think>...</think> Tags
        rawText = candidateText.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
        if (!rawText && candidateText) {
          // Falls <think> noch offen war (z.B. wegen Tokenbegrenzung vor </think>)
          rawText = candidateText.replace(/<think>[\s\S]*/gi, '').trim();
          if (!rawText) {
            rawText = candidateText.replace(/<\/?think>/gi, '').trim();
          }
        }
        if (!rawText && rawReasoning) {
          rawText = rawReasoning.replace(/<\/?think>/gi, '').trim();
        }

        usedModel = `${provider === 'neuralwatt' ? 'Neuralwatt' : 'Cloud'} (${model})`;
      }

      if (!rawText) {
        return res.status(500).json({
          error: 'Leere Antwort vom KI-Modell.',
          debug: {
            finishReason: oaiData?.choices?.[0]?.finish_reason,
            hasContent: Boolean(oaiData?.choices?.[0]?.message?.content),
            hasReasoning: Boolean(oaiData?.choices?.[0]?.message?.reasoning_content),
            usage: oaiData?.usage
          }
        });
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
