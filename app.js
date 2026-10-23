// Standard-System-Prompts pro Plattform
const DEFAULT_PROMPTS = {
  kleinanzeigen: `Du bist ein erfahrener Verkaufs-Assistent für Kleinanzeigen (kleinanzeigen.de). Deine Aufgabe ist es, aus Fotos oder Textangaben Artikel präzise zu identifizieren, marktgerechte Gebrauchtpreise inklusive strenger Raritäten-Prüfung zu ermitteln und eine saubere, sofort kopierbare Artikelbeschreibung ohne Formatierungsmüll zu erstellen.

WORKFLOW:
ARTIKEL IDENTIFIZIEREN:
- Erkenne exakte Modelle, Hersteller, Typenschilder, Modellnummern und sichtbare Gebrauchsspuren auf den Fotos.
- Achte auf eindeutige Merkmale: Logos, Aufdrucke, Etiketten, Sockel/Standfüße, Verpackung, Seriennummern. Bei Figuren und Spielzeug prüfe, zu welchem System sie gehören (z. B. Hörspielfiguren wie Tonies mit Sockel, Lego, Playmobil, Schleich), bevor du dich festlegst.
- Erfinde keine konkreten Namen, Editionen oder Seriennummern. Wenn du dir bei der genauen Variante nicht sicher bist, nenne die wahrscheinlichste Variante, kennzeichne sie als Vermutung und sage, welches Foto (z. B. Unterseite, Etikett) Klarheit bringen würde.

PREISRECHERCHE & RARITÄTEN-CHECK (SEHR WICHTIG):
Prüfe bei jedem einzelnen Artikel – insbesondere bei Sammelobjekten, Spielzeug (z. B. Tonies, Lego) oder Vintage-Artikeln –, ob es sich um eine seltene, gesuchte oder nicht mehr hergestellte Variante (End-of-Life / EOL) handelt.
Behaupte einen Raritäten- oder EOL-Status nur, wenn du ihn begründen kannst. Ohne Live-Websuche sind deine Preise Schätzungen – kennzeichne sie entsprechend.
Wende bei Sammlerstücken NIEMALS einen pauschalen Durchschnittspreis an.
Falls ein wertvolles Einzelstück in einem Konvolut/Set enthalten ist: Warne davor, schlage vor, es separat einzustellen, und nenne den separaten Sammlerpreis.
Nenne ansonsten realistische Einzelpreise und einen fairen Set-Gesamtpreis mit Mengenrabatt (Festpreis oder VB).

VERKAUFSTEXT ERSTELLEN:
Formuliere einen suchmaschinenoptimierten Titel.
Schreibe eine ehrliche, prägnante Beschreibung basierend auf den sichtbaren Fakten und dem Zustand.

STRIKTE FORMATIERUNGS- UND INHALTSREGELN FÜR DIE BESCHREIBUNG:
ABSOLUT KEIN MARKDOWN IN DER BESCHREIBUNG: Kleinanzeigen unterstützt kein Markdown! Verwende niemals Sternchen (kein **, kein *), keine Rauten (###) und keine Formatierungs-Tags.
Für Aufzählungen ausschließlich einfache Bindestriche (-) verwenden.
Zwischenüberschriften ausschließlich als normales Wort mit Doppelpunkt (z. B. "Preise:", "Zustand:", "Technische Daten:").
KEINE Floskeln zu Abholung, Versand oder Bezahlmethoden (außer der Nutzer verlangt dies ausdrücklich).
KEINE rechtlichen Disclaimer ("Privatverkauf, Ausschluss jeglicher Sachmangelhaftung...", etc.) – diese weglassen.`,

  vinted: `Du bist ein erfahrener Verkaufs-Assistent für Vinted (Kleidung, Schuhe, Accessoires, Spielzeug & Lifestyle). Deine Aufgabe ist es, aus Fotos oder Textangaben Artikel, Marken, Größen, Materialien, Schnitte und den genauen Zustand zu erkennen, einen realistischen Marktpreis (inkl. Vintage-/Raritäten-Prüfung bei seltenen Stücken oder Marken) zu ermitteln und eine sofort kopierbare Beschreibung ohne Markdown-Formatierungsmüll zu erstellen.

WORKFLOW:
ARTIKEL & ETIKETTEN IDENTIFIZIEREN:
Erkenne Marke, Größe (laut Etikett), Materialzusammensetzung, Farbe, Passform/Schnitt und eventuelle Mängel/Flecken/Pilling auf den Fotos.

PREISRECHERCHE & VINTAGE-/RARITÄTEN-CHECK:
Prüfe, ob es sich um ein gesuchtes Marken-, Designer- oder Vintage-Stück bzw. ein seltenes Spielzeug/Sammlerstück handelt.
Gib einen realistischen Einzelpreis sowie einen empfohlenen Paket-/Verhandlungspreis an.

VERKAUFSTEXT ERSTELLEN:
Formuliere einen präzisen Vinted-Titel (Marke + Artikelart + Größe + wichtigstes Merkmal/Farbe).
Erstelle eine übersichtliche, ehrliche Beschreibung im reinen Textformat (Plaintext ohne ** oder ###).
Nutze einfache Bindestriche (-) für Details (Größe, Zustand, Material, Maße falls erkennbar).
Füge am Ende der Beschreibung 5 bis 8 relevante Suchbegriffe/Hashtags (z. B. #vintage #streetwear) hinzu, damit der Artikel auf Vinted besser gefunden wird.
KEINE Floskeln zu Versand/Bezahlung und KEINE rechtlichen Disclaimer.`,

  willhaben: `Du bist ein erfahrener Verkaufs-Assistent für Willhaben (willhaben.at - Marktplatz für Österreich). Deine Aufgabe ist es, aus Fotos oder Textangaben Artikel präzise zu identifizieren, marktgerechte Gebrauchtpreise inklusive strenger Raritäten-Prüfung (EOL, Sammlerwert) zu ermitteln und eine saubere, sofort kopierbare Artikelbeschreibung ohne Markdown-Formatierungsmüll zu erstellen.

WORKFLOW:
ARTIKEL IDENTIFIZIEREN:
Erkenne exakte Modelle, Hersteller, Typenschilder, Modellnummern und sichtbare Gebrauchsspuren auf den Fotos.

PREISRECHERCHE & RARITÄTEN-CHECK:
Prüfe bei jedem Artikel (insb. Sammlerstücke, Lego, Tonies, Elektronik, Vintage), ob es eine seltene oder nicht mehr erhältliche (EOL) Variante ist.
Warne ausdrücklich, wenn in einem Set ein wertvolles Einzelstück steckt, das einzeln verkauft werden sollte.
Nenne realistische Einzelpreise und ggf. einen fairen Setpreis in Euro.

STRIKTE FORMATIERUNGSREGELN FÜR DIE BESCHREIBUNG:
ABSOLUT KEIN MARKDOWN IN DER BESCHREIBUNG: Verwende niemals Sternchen (** oder *) und keine Rauten (###).
Für Aufzählungen ausschließlich einfache Bindestriche (-) verwenden.
Zwischenüberschriften ausschließlich als normales Wort mit Doppelpunkt (z. B. "Details:", "Zustand:", "Preis:").
KEINE Floskeln zu Abholung, PayLivery, Versand oder rechtlichen Disclaimern (außer ausdrücklich gewünscht).`,

  ricardo_shpock: `Du bist ein erfahrener Verkaufs-Assistent für Ricardo.ch und Shpock. Deine Aufgabe ist es, aus Fotos oder Textangaben Artikel präzise zu identifizieren (Hersteller, Modellnummer, Zustand), eine strenge Raritäten- & Preisprüfung (in EUR und CHF-Richtwert) für Startpreis/Auktion sowie Sofortkauf-Preis durchzuführen und eine saubere, sofort kopierbare Artikelbeschreibung im reinen Textformat ohne Markdown zu erstellen.

WORKFLOW:
ARTIKEL IDENTIFIZIEREN:
Erkenne exakte Modelle, Hersteller, Typenschilder, Modellnummern und sichtbare Gebrauchsspuren auf den Fotos.

PREISRECHERCHE & RARITÄTEN-CHECK:
Prüfe auf Sammlerwert, Raritäten und End-of-Life (EOL) Status. Warne bei Konvoluten, falls wertvolle Einzelstücke separat verkauft werden sollten.
Empfiehl sowohl einen attraktiven Auktions-Startpreis als auch einen realistischen Sofortkauf-/Fixpreis.

STRIKTE FORMATIERUNGSREGELN FÜR DIE BESCHREIBUNG:
ABSOLUT KEIN MARKDOWN IN DER BESCHREIBUNG (keine **, keine ###).
Für Aufzählungen ausschließlich einfache Bindestriche (-) verwenden.
Zwischenüberschriften als normales Wort mit Doppelpunkt (z. B. "Technische Daten:", "Zustand:", "Lieferumfang:").
KEINE Floskeln zu Versand/Bezahlung und KEINE rechtlichen Disclaimer.`
};

const PLATFORM_META = {
  kleinanzeigen: {
    name: 'Kleinanzeigen',
    badge: 'Reiner Text ohne Markdown • Strenger Raritäten-Check',
    createUrl: 'https://www.kleinanzeigen.de/p-anzeige-aufgeben-schritt2.html',
    androidPackage: 'com.ebay.kleinanzeigen'
  },
  vinted: {
    name: 'Vinted',
    badge: 'Marke, Größe, Zustand & relevante Such-Tags',
    createUrl: 'https://www.vinted.de/items/new',
    androidPackage: 'fr.vinted'
  },
  willhaben: {
    name: 'Willhaben',
    badge: 'AT-Marktplatz • Klare Fakten & Raritäten-Check',
    createUrl: 'https://www.willhaben.at/iad/anzeige-aufgeben',
    androidPackage: 'at.willhaben'
  },
  ricardo_shpock: {
    name: 'Ricardo / Shpock',
    badge: 'Auktions-Startpreis & Sofortkauf • Plaintext',
    createUrl: 'https://www.ricardo.ch/de/s/inserieren',
    androidPackage: 'ch.ricardo.mobile'
  }
};

// State
let currentPlatform = 'kleinanzeigen';
let uploadedImages = []; // Array of { dataUrl, mimeType, base64 }

// DOM Elements
const platformSelector = document.getElementById('platformSelector');
const platformBadge = document.getElementById('platformBadge');
const cameraInput = document.getElementById('cameraInput');
const galleryInput = document.getElementById('galleryInput');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');
const imageGrid = document.getElementById('imageGrid');
const btnClearImages = document.getElementById('btnClearImages');
const userNotes = document.getElementById('userNotes');
const toggleGoogleSearch = document.getElementById('toggleGoogleSearch');
const btnGenerate = document.getElementById('btnGenerate');

const loadingSection = document.getElementById('loadingSection');
const errorSection = document.getElementById('errorSection');
const errorText = document.getElementById('errorText');
const resultSection = document.getElementById('resultSection');

const priceAnalysisContent = document.getElementById('priceAnalysisContent');
const rarityWarningBadge = document.getElementById('rarityWarningBadge');
const outputTitle = document.getElementById('outputTitle');
const outputDescription = document.getElementById('outputDescription');
const extraFieldsCard = document.getElementById('extraFieldsCard');
const extraFieldsGrid = document.getElementById('extraFieldsGrid');
const groundingSourcesCard = document.getElementById('groundingSourcesCard');
const groundingLinks = document.getElementById('groundingLinks');

const btnCopyTitle = document.getElementById('btnCopyTitle');
const btnCopyDescription = document.getElementById('btnCopyDescription');

// Modals & Admin Panel Configuration
const settingsModal = document.getElementById('settingsModal');
const btnAdminPanel = document.getElementById('btnAdminPanel');
const btnUnlockOrStatus = document.getElementById('btnUnlockOrStatus');
const btnCloseSettings = document.getElementById('btnCloseSettings');
const btnSaveSettings = document.getElementById('btnSaveSettings');
const providerSelect = document.getElementById('providerSelect');
const providerHelperText = document.getElementById('providerHelperText');
const baseUrlWrapper = document.getElementById('baseUrlWrapper');
const baseUrlInput = document.getElementById('baseUrlInput');
const apiKeyLabel = document.getElementById('apiKeyLabel');
const apiKeyHelpLink = document.getElementById('apiKeyHelpLink');
const apiKeyInput = document.getElementById('apiKeyInput');
const modelSelect = document.getElementById('modelSelect');
const customModelInput = document.getElementById('customModelInput');
const btnFetchModels = document.getElementById('btnFetchModels');
const modelStatusHint = document.getElementById('modelStatusHint');
const toggleProviderFallback = document.getElementById('toggleProviderFallback');
const tavilyApiKeyInput = document.getElementById('tavilyApiKeyInput');
const apiKeyStatusDot = document.getElementById('apiKeyStatusDot');
const activeProviderHeaderLabel = document.getElementById('activeProviderHeaderLabel');

// Optionaler verschlüsselter Tresor-String (AES-256-GCM). Wenn befüllt, fragt das Handy beim Start nur nach der kurzen PIN!
const DEFAULT_ENCRYPTED_VAULT = '';

const PROVIDERS = {
  neuralwatt: {
    name: 'Neuralwatt',
    type: 'openai',
    defaultBaseUrl: 'https://api.neuralwatt.com/v1',
    keyPlaceholder: 'sk-...',
    helpUrl: 'https://neuralwatt.com',
    helperText: 'Neuralwatt bietet extrem günstige, schnelle Vision-Modelle (OpenAI-kompatibel unter https://api.neuralwatt.com/v1) ohne strenge Free-Tier Rate-Limits.',
    defaultModels: [
      { id: 'auto', label: '⚡ Automatisch (bestes verfügbares Neuralwatt Vision-Modell)' },
      { id: 'gemma-4-31b', label: 'Gemma 4 31B (Multimodal Vision – Sehr günstig)' },
      { id: 'qwen3.6-35b', label: 'Qwen 3.6 35B (Vision – Starke Bilderkennung)' },
      { id: 'kimi-k2.5', label: 'Kimi K2.5 / K3 (Multimodal Vision)' },
      { id: 'deepseek-v4.1-flash', label: 'DeepSeek V4.1 Flash (Schnell & Günstig)' }
    ]
  },
  gemini: {
    name: 'Gemini',
    type: 'gemini',
    defaultBaseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    keyPlaceholder: 'AIzaSy...',
    helpUrl: 'https://aistudio.google.com/app/apikey',
    helperText: 'Google Gemini API mit optionalem Google-Search-Preischeck. Im kostenlosen Tarif gibt es teils enge Minuten-Limits (429).',
    defaultModels: [
      { id: 'auto', label: '✨ Automatisch (sucht freies Gemini-Modell)' },
      { id: 'gemini-3.8-flash', label: 'gemini-3.8-flash' },
      { id: 'gemini-2.5-flash-lite', label: 'gemini-2.5-flash-lite' },
      { id: 'gemini-2.0-flash', label: 'gemini-2.0-flash' }
    ]
  },
  openrouter: {
    name: 'OpenRouter',
    type: 'openai',
    defaultBaseUrl: 'https://openrouter.ai/api/v1',
    keyPlaceholder: 'sk-or-v1-...',
    helpUrl: 'https://openrouter.ai/keys',
    helperText: 'OpenRouter bündelt alle günstigen Vision-Modelle (Qwen-VL, Gemini Flash, Llama Vision, Pixtral) über einen einzigen Account.',
    defaultModels: [
      { id: 'google/gemini-2.5-flash', label: 'Google Gemini 2.5 Flash (über OpenRouter – kein 429!)' },
      { id: 'qwen/qwen-2.5-vl-72b-instruct', label: 'Qwen 2.5 VL 72B (Top Vision, extrem günstig)' },
      { id: 'openai/gpt-4o-mini', label: 'GPT-4o Mini (Schnell & sehr günstig)' },
      { id: 'meta-llama/llama-3.2-11b-vision-instruct:free', label: 'Llama 3.2 11B Vision (Gratis)' }
    ]
  },
  groq: {
    name: 'Groq',
    type: 'openai',
    defaultBaseUrl: 'https://api.groq.com/openai/v1',
    keyPlaceholder: 'gsk_...',
    helpUrl: 'https://console.groq.com/keys',
    helperText: 'Groq LPU liefert Antworten in unter 1 Sekunde bei minimalen Kosten.',
    defaultModels: [
      { id: 'meta-llama/llama-4-scout-17b-16e-instruct', label: 'Llama 4 Scout 17B Vision (Schnell & Günstig)' },
      { id: 'meta-llama/llama-4-maverick-17b-128e-instruct', label: 'Llama 4 Maverick 17B Vision' },
      { id: 'llama-3.2-90b-vision-preview', label: 'Llama 3.2 90B Vision' }
    ]
  },
  custom_openai: {
    name: 'Custom API',
    type: 'openai',
    defaultBaseUrl: 'https://api.neuralwatt.com/v1',
    keyPlaceholder: 'sk-...',
    helpUrl: '#',
    helperText: 'Beliebiger OpenAI-kompatibler Endpunkt (/v1/chat/completions), z.B. lokales Ollama, vLLM oder eigener Proxy.',
    defaultModels: [
      { id: 'auto', label: 'Erstes verfügbares Modell nutzen' }
    ]
  }
};

const adminPromptPlatformSelect = document.getElementById('adminPromptPlatformSelect');
const systemPromptTextarea = document.getElementById('systemPromptTextarea');
const btnResetPrompt = document.getElementById('btnResetPrompt');
const btnSavePrompt = document.getElementById('btnSavePrompt');

// Admin Sub-Tabs & Sync Elements
const adminTabProviders = document.getElementById('adminTabProviders');
const adminTabSync = document.getElementById('adminTabSync');
const adminTabPrompts = document.getElementById('adminTabPrompts');
const btnGenerateSyncQr = document.getElementById('btnGenerateSyncQr');
const btnCopyMagicLink = document.getElementById('btnCopyMagicLink');
const syncQrImage = document.getElementById('syncQrImage');
const syncQrPlaceholder = document.getElementById('syncQrPlaceholder');
const vaultPinCreateInput = document.getElementById('vaultPinCreateInput');
const btnCreateVaultBlob = document.getElementById('btnCreateVaultBlob');
const vaultOutputBox = document.getElementById('vaultOutputBox');
const vaultBlobTextarea = document.getElementById('vaultBlobTextarea');

const pinUnlockModal = document.getElementById('pinUnlockModal');
const pinUnlockInput = document.getElementById('pinUnlockInput');
const pinUnlockError = document.getElementById('pinUnlockError');
const btnCancelPinUnlock = document.getElementById('btnCancelPinUnlock');
const btnSubmitPinUnlock = document.getElementById('btnSubmitPinUnlock');

// Initialize Icons, Magic-Link Sync & Settings
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  checkAndImportUrlHashSync();
  loadSettings();
  registerServiceWorker();
});

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// Settings Management (Multi-Provider: Neuralwatt, Gemini, OpenRouter, Groq, Custom)
function getActiveProvider() {
  return localStorage.getItem('sellmate_active_provider') || 'neuralwatt';
}

function getProviderApiKey(provider = getActiveProvider()) {
  if (provider === 'gemini') {
    return (localStorage.getItem('sellmate_key_gemini') || localStorage.getItem('sellmate_gemini_api_key') || '').trim();
  }
  return (localStorage.getItem(`sellmate_key_${provider}`) || '').trim();
}

function getApiKey() {
  const activeKey = getProviderApiKey(getActiveProvider());
  if (activeKey) return activeKey;
  // Falls aktiver Provider noch keinen Key hat, prüfe ob irgendein anderer Provider einen Key hat
  for (const p of Object.keys(PROVIDERS)) {
    const k = getProviderApiKey(p);
    if (k) return k;
  }
  return '';
}

function getProviderBaseUrl(provider = getActiveProvider()) {
  const saved = (localStorage.getItem(`sellmate_baseurl_${provider}`) || '').trim();
  return (saved || PROVIDERS[provider]?.defaultBaseUrl || 'https://api.neuralwatt.com/v1').replace(/\/+$/, '');
}

function getProviderModel(provider = getActiveProvider()) {
  if (provider === 'gemini') {
    return localStorage.getItem('sellmate_model_gemini') || localStorage.getItem('sellmate_gemini_model') || 'auto';
  }
  return localStorage.getItem(`sellmate_model_${provider}`) || PROVIDERS[provider]?.defaultModels?.[0]?.id || 'auto';
}

function getModel() {
  return getProviderModel(getActiveProvider());
}

function isFallbackEnabled() {
  const val = localStorage.getItem('sellmate_provider_fallback');
  return val === null ? true : val === 'true';
}

function getTavilyApiKey() {
  return (localStorage.getItem('sellmate_tavily_api_key') || '').trim();
}

function getSystemPrompt(platform) {
  const custom = localStorage.getItem(`sellmate_prompt_${platform}`);
  return custom || DEFAULT_PROMPTS[platform];
}

function populateProviderModelsDropdown(provider, selectedModelId) {
  const meta = PROVIDERS[provider] || PROVIDERS.neuralwatt;
  const cachedModelsRaw = localStorage.getItem(`sellmate_cached_models_${provider}`);
  let modelOptions = [...meta.defaultModels];

  if (cachedModelsRaw) {
    try {
      const parsed = JSON.parse(cachedModelsRaw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        modelOptions = [
          { id: 'auto', label: `⚡ Automatisch (bestes ${meta.name}-Modell wählen)` },
          ...parsed.map((id) => ({ id, label: id }))
        ];
      }
    } catch (_) {}
  }

  modelSelect.innerHTML =
    modelOptions.map((m) => `<option value="${escapeHtml(m.id)}">${escapeHtml(m.label)}</option>`).join('') +
    `<option value="custom">Eigenen Modellnamen eingeben...</option>`;

  const optionIds = modelOptions.map((m) => m.id);
  if (optionIds.includes(selectedModelId)) {
    modelSelect.value = selectedModelId;
    customModelInput.classList.add('hidden');
  } else if (selectedModelId) {
    modelSelect.value = 'custom';
    customModelInput.value = selectedModelId;
    customModelInput.classList.remove('hidden');
  } else {
    modelSelect.value = modelOptions[0]?.id || 'auto';
    customModelInput.classList.add('hidden');
  }
}

function syncSettingsModalForProvider(provider) {
  const meta = PROVIDERS[provider] || PROVIDERS.neuralwatt;
  if (providerSelect) providerSelect.value = provider;
  if (providerHelperText) providerHelperText.textContent = meta.helperText;
  if (apiKeyLabel) apiKeyLabel.textContent = `${meta.name} API-Key`;
  if (apiKeyInput) {
    apiKeyInput.placeholder = meta.keyPlaceholder;
    apiKeyInput.value = getProviderApiKey(provider);
  }
  if (apiKeyHelpLink) {
    apiKeyHelpLink.href = meta.helpUrl;
    apiKeyHelpLink.style.display = meta.helpUrl === '#' ? 'none' : 'inline';
  }
  if (baseUrlWrapper && baseUrlInput) {
    if (provider === 'custom_openai' || provider === 'neuralwatt') {
      baseUrlWrapper.classList.remove('hidden');
      baseUrlInput.value = getProviderBaseUrl(provider);
    } else {
      baseUrlWrapper.classList.add('hidden');
    }
  }
  populateProviderModelsDropdown(provider, getProviderModel(provider));
  if (modelStatusHint) modelStatusHint.textContent = '';
}

if (providerSelect) {
  providerSelect.addEventListener('change', () => {
    syncSettingsModalForProvider(providerSelect.value);
  });
}

// Fragt die echte Modell-Liste für Gemini ab
async function fetchAvailableModelsForKey(apiKey) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `Fehler beim Abrufen der Modell-Liste (${res.status})`);
  }

  const allModels = (data.models || [])
    .filter((m) => (m.supportedGenerationMethods || []).includes('generateContent'))
    .map((m) => m.name.replace(/^models\//, ''))
    .filter((name) => {
      const lower = name.toLowerCase();
      return (
        (lower.startsWith('gemini-') || lower.startsWith('gemma-')) &&
        !lower.includes('tts') &&
        !lower.includes('image') &&
        !lower.includes('embedding') &&
        !lower.includes('vision-latest') &&
        !lower.includes('computer-use') &&
        !lower.includes('robotics') &&
        !lower.includes('thinking') &&
        !lower.includes('1.0') &&
        !lower.includes('1.5')
      );
    });

  const scoreModel = (name) => {
    const n = name.toLowerCase();
    if (n === 'gemini-3.8-flash' || n === 'gemini-3.0-flash' || n === 'gemini-2.5-flash') return 110;
    if (n.includes('flash') && !n.includes('lite') && !n.includes('exp') && !n.includes('preview') && !n.includes('8b')) return 100;
    if (n.includes('pro') && !n.includes('exp') && !n.includes('preview')) return 95;
    if (n.includes('flash') && !n.includes('lite') && !n.includes('8b')) return 90;
    if (n.includes('flash-lite')) return 50;
    if (n.startsWith('gemma-3')) return 20;
    return 40;
  };

  allModels.sort((a, b) => scoreModel(b) - scoreModel(a));
  return allModels;
}

// Fragt die Modell-Liste eines OpenAI-kompatiblen Anbieters (Neuralwatt, OpenRouter, Groq) ab
async function fetchOpenAICompatibleModels(baseUrl, apiKey) {
  const res = await fetch(`${baseUrl}/models`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `HTTP ${res.status} beim Laden von ${baseUrl}/models`);
  }
  const list = Array.isArray(data?.data) ? data.data : Array.isArray(data?.models) ? data.models : [];
  const ids = list.map((m) => m.id || m.name).filter(Boolean);

  // Priorisiere bekannte Vision-/Multimodal-Modelle bei Neuralwatt & Co. oben
  const scoreVision = (id) => {
    const l = id.toLowerCase();
    if (l.includes('vision') || l.includes('vl') || l.includes('gemma-4') || l.includes('qwen3') || l.includes('kimi') || l.includes('gemini') || l.includes('gpt-4o') || l.includes('llama-4') || l.includes('pixtral')) return 100;
    if (l.includes('flash') || l.includes('claude-3')) return 80;
    if (l.includes('embed') || l.includes('whisper') || l.includes('tts') || l.includes('rerank')) return -100;
    return 40;
  };
  return ids.filter((id) => scoreVision(id) > 0).sort((a, b) => scoreVision(b) - scoreVision(a));
}

if (btnFetchModels) {
  btnFetchModels.addEventListener('click', async () => {
    const provider = providerSelect ? providerSelect.value : getActiveProvider();
    const key = apiKeyInput.value.trim();
    if (!key) {
      modelStatusHint.textContent = 'Bitte zuerst oben den API-Key für diesen Anbieter eintragen.';
      return;
    }

    const baseUrl = baseUrlInput && !baseUrlWrapper.classList.contains('hidden')
      ? baseUrlInput.value.trim().replace(/\/+$/, '')
      : getProviderBaseUrl(provider);

    modelStatusHint.textContent = `Frage ${PROVIDERS[provider].name} nach verfügbaren Modellen...`;
    try {
      let models = [];
      if (provider === 'gemini') {
        models = await fetchAvailableModelsForKey(key);
      } else {
        models = await fetchOpenAICompatibleModels(baseUrl, key);
      }

      if (models.length === 0) {
        modelStatusHint.textContent = 'Keine Modelle über /models gefunden – du kannst den Modellnamen direkt eingeben.';
        return;
      }

      localStorage.setItem(`sellmate_cached_models_${provider}`, JSON.stringify(models));
      populateProviderModelsDropdown(provider, models[0]);
      modelStatusHint.innerHTML = `<span class="text-emerald-400 font-semibold">✓ ${models.length} Modelle von ${PROVIDERS[provider].name} geladen! ("${models[0]}" ausgewählt)</span>`;
    } catch (e) {
      modelStatusHint.textContent = `Hinweis: ${e.message}`;
    }
  });
}

modelSelect.addEventListener('change', () => {
  if (modelSelect.value === 'custom') {
    customModelInput.classList.remove('hidden');
    customModelInput.focus();
  } else {
    customModelInput.classList.add('hidden');
  }
});

function loadSettings() {
  // Falls der Nutzer schon einen Gemini-Key aus vorherigen Schritten hat, aber noch keinen Provider gewählt hat:
  if (!localStorage.getItem('sellmate_active_provider') && localStorage.getItem('sellmate_gemini_api_key')) {
    localStorage.setItem('sellmate_active_provider', 'gemini');
    localStorage.setItem('sellmate_key_gemini', localStorage.getItem('sellmate_gemini_api_key'));
  }
  const activeProv = getActiveProvider();
  syncSettingsModalForProvider(activeProv);
  if (toggleProviderFallback) {
    toggleProviderFallback.checked = isFallbackEnabled();
  }
  updateApiKeyIndicator();
}

function updateApiKeyIndicator() {
  const activeProv = getActiveProvider();
  const hasKey = Boolean(getProviderApiKey(activeProv));
  const hasTavily = Boolean(getTavilyApiKey());
  const meta = PROVIDERS[activeProv] || PROVIDERS.neuralwatt;
  if (activeProviderHeaderLabel) {
    activeProviderHeaderLabel.textContent = hasKey
      ? `${meta.name}${hasTavily ? ' + Tavily' : ''}`
      : 'Key fehlt (Admin)';
  }
  if (hasKey) {
    apiKeyStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-400';
  } else {
    apiKeyStatusDot.className = 'w-2 h-2 rounded-full bg-amber-400 animate-pulse';
  }
}

function getVaultString() {
  return (localStorage.getItem('sellmate_encrypted_vault') || DEFAULT_ENCRYPTED_VAULT || '').trim();
}

function openAdminModal(initialTab = 'providers') {
  const activeProv = getActiveProvider();
  syncSettingsModalForProvider(activeProv);
  if (toggleProviderFallback) {
    toggleProviderFallback.checked = isFallbackEnabled();
  }
  if (tavilyApiKeyInput) {
    tavilyApiKeyInput.value = getTavilyApiKey();
  }
  if (adminPromptPlatformSelect && systemPromptTextarea) {
    adminPromptPlatformSelect.value = currentPlatform;
    systemPromptTextarea.value = getSystemPrompt(currentPlatform);
  }
  switchAdminTab(initialTab);
  settingsModal.classList.remove('hidden');
}

function switchAdminTab(tabName) {
  const map = {
    providers: adminTabProviders,
    sync: adminTabSync,
    prompts: adminTabPrompts
  };
  Object.entries(map).forEach(([k, el]) => {
    if (!el) return;
    if (k === tabName) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });
  document.querySelectorAll('.admin-tab-btn').forEach((btn) => {
    const isAct = btn.dataset.admintab === tabName;
    btn.className = isAct
      ? 'admin-tab-btn py-2 px-2 rounded-lg bg-emerald-500 text-slate-950 font-bold transition flex items-center justify-center gap-1.5'
      : 'admin-tab-btn py-2 px-2 rounded-lg text-slate-300 hover:text-white transition flex items-center justify-center gap-1.5';
  });
}

document.querySelectorAll('.admin-tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => switchAdminTab(btn.dataset.admintab));
});

if (btnAdminPanel) {
  btnAdminPanel.addEventListener('click', () => openAdminModal('providers'));
}

if (btnUnlockOrStatus) {
  btnUnlockOrStatus.addEventListener('click', () => {
    if (!getApiKey() && getVaultString() && pinUnlockModal) {
      pinUnlockModal.classList.remove('hidden');
      pinUnlockInput.focus();
    } else {
      openAdminModal('providers');
    }
  });
}

btnCloseSettings.addEventListener('click', () => {
  settingsModal.classList.add('hidden');
});

// Auto-Save bei Eingabe im Admin-Panel (damit Keys auch ohne Klick auf "Speichern" sofort aktiv sind)
if (tavilyApiKeyInput) {
  tavilyApiKeyInput.addEventListener('input', () => {
    localStorage.setItem('sellmate_tavily_api_key', tavilyApiKeyInput.value.trim());
    updateApiKeyIndicator();
  });
}

if (apiKeyInput) {
  apiKeyInput.addEventListener('input', () => {
    const prov = providerSelect ? providerSelect.value : getActiveProvider();
    const k = apiKeyInput.value.trim();
    localStorage.setItem(`sellmate_key_${prov}`, k);
    localStorage.setItem('sellmate_active_provider', prov);
    if (prov === 'gemini') localStorage.setItem('sellmate_gemini_api_key', k);
    updateApiKeyIndicator();
  });
}

btnSaveSettings.addEventListener('click', () => {
  const prov = providerSelect ? providerSelect.value : 'neuralwatt';
  const key = apiKeyInput.value.trim();
  const chosenModel = modelSelect.value === 'custom'
    ? (customModelInput.value.trim() || 'auto')
    : modelSelect.value;

  localStorage.setItem('sellmate_active_provider', prov);
  localStorage.setItem(`sellmate_key_${prov}`, key);
  if (prov === 'gemini') {
    localStorage.setItem('sellmate_gemini_api_key', key);
  }
  if (baseUrlInput && !baseUrlWrapper.classList.contains('hidden') && baseUrlInput.value.trim()) {
    localStorage.setItem(`sellmate_baseurl_${prov}`, baseUrlInput.value.trim().replace(/\/+$/, ''));
  }
  localStorage.setItem(`sellmate_model_${prov}`, chosenModel);
  if (toggleProviderFallback) {
    localStorage.setItem('sellmate_provider_fallback', String(toggleProviderFallback.checked));
  }
  if (tavilyApiKeyInput) {
    localStorage.setItem('sellmate_tavily_api_key', tavilyApiKeyInput.value.trim());
  }

  updateApiKeyIndicator();
  showToast(`${PROVIDERS[prov].name} gespeichert!`);

  if (typeof runBatchAgentQueue === 'function') {
    runBatchAgentQueue();
  }
});

// System-Prompt Editor (im Admin-Tab 3)
if (adminPromptPlatformSelect) {
  adminPromptPlatformSelect.addEventListener('change', () => {
    const p = adminPromptPlatformSelect.value;
    systemPromptTextarea.value = getSystemPrompt(p);
  });
}

if (btnResetPrompt) {
  btnResetPrompt.addEventListener('click', () => {
    const p = adminPromptPlatformSelect ? adminPromptPlatformSelect.value : currentPlatform;
    localStorage.removeItem(`sellmate_prompt_${p}`);
    systemPromptTextarea.value = DEFAULT_PROMPTS[p];
    showToast('Auf Standard-Prompt zurückgesetzt');
  });
}

if (btnSavePrompt) {
  btnSavePrompt.addEventListener('click', () => {
    const p = adminPromptPlatformSelect ? adminPromptPlatformSelect.value : currentPlatform;
    const val = systemPromptTextarea.value.trim();
    if (val) {
      localStorage.setItem(`sellmate_prompt_${p}`, val);
    }
    showToast(`System-Prompt für ${PLATFORM_META[p].name} gespeichert`);
  });
}

// ============================================================================
// HANDY-SYNC (QR-CODE / MAGIC-LINK & AES-256 PIN-TRESOR)
// ============================================================================

function collectConfigBundle() {
  const bundle = {
    activeProvider: getActiveProvider(),
    fallback: isFallbackEnabled(),
    tavilyKey: getTavilyApiKey(),
    keys: {},
    models: {},
    baseUrls: {},
    prompts: {}
  };
  Object.keys(PROVIDERS).forEach((p) => {
    const k = getProviderApiKey(p);
    if (k) bundle.keys[p] = k;
    const m = localStorage.getItem(`sellmate_model_${p}`);
    if (m) bundle.models[p] = m;
    const b = localStorage.getItem(`sellmate_baseurl_${p}`);
    if (b) bundle.baseUrls[p] = b;
  });
  Object.keys(DEFAULT_PROMPTS).forEach((pl) => {
    const pr = localStorage.getItem(`sellmate_prompt_${pl}`);
    if (pr) bundle.prompts[pl] = pr;
  });
  return bundle;
}

function applyConfigBundle(bundle) {
  if (!bundle || typeof bundle !== 'object') return;
  if (bundle.activeProvider) localStorage.setItem('sellmate_active_provider', bundle.activeProvider);
  if (typeof bundle.fallback === 'boolean') localStorage.setItem('sellmate_provider_fallback', String(bundle.fallback));
  if (bundle.tavilyKey) localStorage.setItem('sellmate_tavily_api_key', bundle.tavilyKey);
  if (bundle.keys) {
    Object.entries(bundle.keys).forEach(([p, k]) => {
      if (k) {
        localStorage.setItem(`sellmate_key_${p}`, k);
        if (p === 'gemini') localStorage.setItem('sellmate_gemini_api_key', k);
      }
    });
  }
  if (bundle.models) {
    Object.entries(bundle.models).forEach(([p, m]) => {
      if (m) localStorage.setItem(`sellmate_model_${p}`, m);
    });
  }
  if (bundle.baseUrls) {
    Object.entries(bundle.baseUrls).forEach(([p, b]) => {
      if (b) localStorage.setItem(`sellmate_baseurl_${p}`, b);
    });
  }
  if (bundle.prompts) {
    Object.entries(bundle.prompts).forEach(([pl, pr]) => {
      if (pr) localStorage.setItem(`sellmate_prompt_${pl}`, pr);
    });
  }
  updateApiKeyIndicator();
}

function buildMagicSyncUrl() {
  // Speichere zuerst das aktuell im Formular Eingetippte, falls der Nutzer noch nicht auf "Speichern" geklickt hat
  if (apiKeyInput && apiKeyInput.value.trim() && providerSelect) {
    localStorage.setItem(`sellmate_key_${providerSelect.value}`, apiKeyInput.value.trim());
    localStorage.setItem('sellmate_active_provider', providerSelect.value);
  }
  if (tavilyApiKeyInput && tavilyApiKeyInput.value.trim()) {
    localStorage.setItem('sellmate_tavily_api_key', tavilyApiKeyInput.value.trim());
  }
  const bundle = collectConfigBundle();
  const jsonStr = JSON.stringify(bundle);
  const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
  const base = window.location.href.split('#')[0];
  return `${base}#sync=${encoded}`;
}

function checkAndImportUrlHashSync() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#sync=')) {
    try {
      const encoded = hash.slice(6);
      const jsonStr = decodeURIComponent(escape(atob(encoded)));
      const bundle = JSON.parse(jsonStr);
      applyConfigBundle(bundle);
      history.replaceState(null, '', window.location.pathname + window.location.search);
      setTimeout(() => {
        showToast('✓ Handy erfolgreich gekoppelt! Alle API-Keys & Einstellungen übernommen.');
      }, 400);
    } catch (e) {
      showToast('Fehler beim Lesen des Sync-Links');
    }
  } else if (hash === '#admin') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setTimeout(() => openAdminModal('providers'), 200);
  } else {
    // Falls kein Key auf dem Gerät ist, aber ein verschlüsselter PIN-Tresor existiert -> PIN-Abfrage öffnen
    setTimeout(() => {
      if (!getApiKey() && getVaultString() && pinUnlockModal) {
        pinUnlockModal.classList.remove('hidden');
      }
    }, 300);
  }
}

if (btnGenerateSyncQr) {
  btnGenerateSyncQr.addEventListener('click', () => {
    const syncUrl = buildMagicSyncUrl();
    if (!getApiKey()) {
      showToast('Bitte zuerst unter "1. KI & API-Keys" mindestens einen API-Key eintragen!');
      return;
    }
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=8&data=${encodeURIComponent(syncUrl)}`;
    if (syncQrImage && syncQrPlaceholder) {
      syncQrImage.src = qrApiUrl;
      syncQrImage.classList.remove('hidden');
      syncQrPlaceholder.classList.add('hidden');
    }
    showToast('QR-Code erzeugt! Einfach mit dem Handy scannen.');
  });
}

if (btnCopyMagicLink) {
  btnCopyMagicLink.addEventListener('click', () => {
    const syncUrl = buildMagicSyncUrl();
    if (!getApiKey()) {
      showToast('Bitte zuerst unter "1. KI & API-Keys" mindestens einen API-Key eintragen!');
      return;
    }
    copyToClipboard(syncUrl, 'Magic-Link kopiert! Auf dem Handy öffnen -> sofort gekoppelt.');
  });
}

// AES-256-GCM PIN-Tresor Verschlüsselung & Entschlüsselung (Web Crypto API)
async function deriveAesKeyFromPin(pin, saltBytes) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(pin), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: saltBytes, iterations: 100000, hash: 'SHA-256' },
    baseKey,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptBundleWithPin(bundleObj, pin) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveAesKeyFromPin(pin, salt);
  const encodedData = new TextEncoder().encode(JSON.stringify(bundleObj));
  const cipherBuf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encodedData);

  const combined = new Uint8Array(salt.byteLength + iv.byteLength + cipherBuf.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.byteLength);
  combined.set(new Uint8Array(cipherBuf), salt.byteLength + iv.byteLength);
  return btoa(String.fromCharCode(...combined));
}

async function decryptBundleWithPin(vaultB64, pin) {
  const raw = Uint8Array.from(atob(vaultB64), (c) => c.charCodeAt(0));
  const salt = raw.slice(0, 16);
  const iv = raw.slice(16, 28);
  const cipher = raw.slice(28);
  const key = await deriveAesKeyFromPin(pin, salt);
  const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipher);
  return JSON.parse(new TextDecoder().decode(plainBuf));
}

if (btnCreateVaultBlob) {
  btnCreateVaultBlob.addEventListener('click', async () => {
    const pin = (vaultPinCreateInput?.value || '').trim();
    if (!pin) {
      showToast('Bitte eine PIN oder ein Passwort für den Tresor eingeben');
      return;
    }
    if (apiKeyInput && apiKeyInput.value.trim() && providerSelect) {
      localStorage.setItem(`sellmate_key_${providerSelect.value}`, apiKeyInput.value.trim());
    }
    if (!getApiKey()) {
      showToast('Bitte zuerst mindestens einen API-Key speichern');
      return;
    }
    const bundle = collectConfigBundle();
    const encrypted = await encryptBundleWithPin(bundle, pin);
    localStorage.setItem('sellmate_encrypted_vault', encrypted);
    if (vaultBlobTextarea && vaultOutputBox) {
      vaultBlobTextarea.value = encrypted;
      vaultOutputBox.classList.remove('hidden');
    }
    copyToClipboard(encrypted, 'Verschlüsselter Tresor-Code erzeugt & kopiert!');
  });
}

if (btnCancelPinUnlock) {
  btnCancelPinUnlock.addEventListener('click', () => {
    pinUnlockModal.classList.add('hidden');
    openAdminModal('providers');
  });
}

if (btnSubmitPinUnlock) {
  btnSubmitPinUnlock.addEventListener('click', async () => {
    const pin = (pinUnlockInput?.value || '').trim();
    const vault = getVaultString();
    if (!pin || !vault) return;
    try {
      const bundle = await decryptBundleWithPin(vault, pin);
      applyConfigBundle(bundle);
      pinUnlockModal.classList.add('hidden');
      pinUnlockError.classList.add('hidden');
      showToast('✓ Tresor entsperrt! Alle API-Keys aktiv.');
      if (typeof runBatchAgentQueue === 'function') runBatchAgentQueue();
    } catch (_) {
      pinUnlockError.textContent = 'Falsche PIN – bitte erneut versuchen.';
      pinUnlockError.classList.remove('hidden');
    }
  });
}

// Platform Selection
platformSelector.addEventListener('click', (e) => {
  const btn = e.target.closest('.platform-btn');
  if (!btn) return;

  currentPlatform = btn.dataset.platform;
  platformBadge.textContent = PLATFORM_META[currentPlatform].badge;
  const launchPlatformBtnText = document.getElementById('launchPlatformBtnText');
  if (launchPlatformBtnText) {
    launchPlatformBtnText.textContent = `Alles kopieren & ${PLATFORM_META[currentPlatform].name} öffnen`;
  }

  document.querySelectorAll('.platform-btn').forEach((b) => {
    const isSelected = b.dataset.platform === currentPlatform;
    if (isSelected) {
      b.className = 'platform-btn active flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all bg-emerald-500/15 border-emerald-500 text-white';
    } else {
      b.className = 'platform-btn flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
    }
  });
});

// Image Handling & Compression (resizes mobile photos to max 800px / ~55 KB for instant vision upload)
async function handleFiles(files) {
  const fileArray = Array.from(files).filter((f) => f.type.startsWith('image/'));
  if (!fileArray.length) return;

  for (const file of fileArray) {
    const compressed = await compressImage(file, 800, 0.76);
    uploadedImages.push(compressed);
  }
  renderImagePreviews();
}

function compressImage(file, maxDimension = 800, quality = 0.76) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        const base64 = dataUrl.split(',')[1];
        const sizeKb = Math.round((base64.length * 3) / 4 / 1024);
        resolve({
          dataUrl,
          mimeType: 'image/jpeg',
          base64,
          sizeKb,
          width,
          height
        });
      };
      img.onerror = reject;
      img.src = event.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderImagePreviews() {
  imageGrid.innerHTML = '';
  if (uploadedImages.length === 0) {
    imagePreviewContainer.classList.add('hidden');
    btnClearImages.classList.add('hidden');
    return;
  }

  imagePreviewContainer.classList.remove('hidden');
  btnClearImages.classList.remove('hidden');

  uploadedImages.forEach((img, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'relative w-20 h-20 rounded-xl overflow-hidden border border-slate-700 shrink-0 group';
    wrapper.innerHTML = `
      <img src="${img.dataUrl}" class="w-full h-full object-cover" alt="Foto ${idx + 1}" />
      <button type="button" data-idx="${idx}" class="remove-img-btn absolute top-1 right-1 w-6 h-6 rounded-full bg-black/75 text-white flex items-center justify-center text-xs hover:bg-rose-600 transition">
        ✕
      </button>
    `;
    imageGrid.appendChild(wrapper);
  });
}

imageGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.remove-img-btn');
  if (!btn) return;
  const idx = parseInt(btn.dataset.idx, 10);
  uploadedImages.splice(idx, 1);
  renderImagePreviews();
});

btnClearImages.addEventListener('click', () => {
  uploadedImages = [];
  renderImagePreviews();
});

cameraInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
  cameraInput.value = '';
});

galleryInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
  galleryInput.value = '';
});

// Paste from Clipboard support
document.addEventListener('paste', (e) => {
  if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
    handleFiles(e.clipboardData.files);
  }
});

// Sanitize description strictly so NO Markdown (** or ###) and NO forbidden shipping/legal boilerplate ever slips through
function sanitizePlainTextDescription(text) {
  if (!text) return '';
  const notesRaw = (typeof userNotes !== 'undefined' && userNotes?.value ? userNotes.value : '').toLowerCase();
  const userWantsShipping = /versand|abholung|paypal|überweisung/.test(notesRaw);

  let cleaned = text
    .replace(/^```[a-zA-Z]*\n?/gm, '')
    .replace(/```$/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[\*\•]\s+/gm, '- ');

  // Entferne verbotene Standard-Floskeln (Versand/Abholung/Privatverkauf/Garantie), die kleine Modelle trotz Verbot anhängen
  const lines = cleaned.split('\n').filter((line) => {
    const trimmed = line.trim();
    if (!trimmed) return true;
    // Rechtliche Disclaimer immer entfernen
    if (/privatverkauf|sachmangelhaftung|keine garantie|keine gew[äa]hrleistung|keine r[üu]cknahme|umtausch ausgeschlossen/i.test(trimmed)) {
      return false;
    }
    // Versand- & Abholfloskeln entfernen, sofern der Nutzer sie nicht selbst in die Notizen geschrieben hat
    if (!userWantsShipping && /^(versand\b|abholung\b|versand und abholung|versand m[öo]glich|abholung vor ort|bezahlung per|zahlung per|tierfreier nichtraucherhaushalt)/i.test(trimmed)) {
      return false;
    }
    return true;
  });

  return lines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// ============================================================================
// LIVE DIAGNOSE-LOGS & STOPPUHR (Zeigt jeden Schritt & jede Latenz in Echtzeit)
// ============================================================================

let diagSessionStart = 0;
let diagTimerInterval = null;
let diagLogEntries = [];

function startDiagSession() {
  diagSessionStart = performance.now();
  diagLogEntries = [];
  const liveBox = document.getElementById('loadingLiveLogBox');
  const diagPanel = document.getElementById('diagnosticsPanel');
  const timerBadge = document.getElementById('loadingTimerBadge');
  if (liveBox) liveBox.innerHTML = '';
  if (diagPanel) diagPanel.classList.add('hidden');
  if (timerBadge) timerBadge.textContent = '0.0s';

  if (diagTimerInterval) clearInterval(diagTimerInterval);
  diagTimerInterval = setInterval(() => {
    const elapsed = ((performance.now() - diagSessionStart) / 1000).toFixed(1);
    if (timerBadge) timerBadge.textContent = `${elapsed}s`;
  }, 100);
}

function addDiagLog(message, type = 'info') {
  const elapsed = diagSessionStart ? ((performance.now() - diagSessionStart) / 1000).toFixed(2) : '0.00';
  const entry = { elapsed, message, type };
  diagLogEntries.push(entry);
  console.log(`[SellMate +${elapsed}s] ${message}`);

  const colorClass =
    type === 'success'
      ? 'text-emerald-400'
      : type === 'warn'
      ? 'text-amber-300'
      : type === 'error'
      ? 'text-rose-400'
      : 'text-slate-300';

  const htmlLine = `<div class="${colorClass}"><span class="text-slate-500">[+${elapsed}s]</span> ${escapeHtml(message)}</div>`;

  const liveBox = document.getElementById('loadingLiveLogBox');
  if (liveBox) {
    liveBox.insertAdjacentHTML('beforeend', htmlLine);
    liveBox.scrollTop = liveBox.scrollHeight;
  }

  const diagContent = document.getElementById('diagnosticsLogContent');
  if (diagContent) {
    diagContent.insertAdjacentHTML('beforeend', htmlLine);
  }
}

function finishDiagSession(statusLabel = '') {
  if (diagTimerInterval) {
    clearInterval(diagTimerInterval);
    diagTimerInterval = null;
  }
  const totalSec = diagSessionStart ? ((performance.now() - diagSessionStart) / 1000).toFixed(1) : '0.0';
  const diagPanel = document.getElementById('diagnosticsPanel');
  const diagBadge = document.getElementById('diagnosticsSummaryBadge');
  const diagContent = document.getElementById('diagnosticsLogContent');
  if (diagContent) {
    diagContent.innerHTML = diagLogEntries
      .map((e) => {
        const c =
          e.type === 'success'
            ? 'text-emerald-400'
            : e.type === 'warn'
            ? 'text-amber-300'
            : e.type === 'error'
            ? 'text-rose-400'
            : 'text-slate-300';
        return `<div class="${c}"><span class="text-slate-500">[+${e.elapsed}s]</span> ${escapeHtml(e.message)}</div>`;
      })
      .join('');
  }
  if (diagBadge) {
    diagBadge.textContent = statusLabel ? `${totalSec}s • ${statusLabel}` : `Gesamt: ${totalSec}s`;
  }
  if (diagPanel && diagLogEntries.length > 0) {
    diagPanel.classList.remove('hidden');
  }
}

const btnCopyLogs = document.getElementById('btnCopyLogs');
if (btnCopyLogs) {
  btnCopyLogs.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const raw = diagLogEntries.map((x) => `[+${x.elapsed}s] [${x.type.toUpperCase()}] ${x.message}`).join('\n');
    copyToClipboard(raw || 'Keine Logs vorhanden', 'Diagnose-Logs in Zwischenablage kopiert!');
  });
}

// ============================================================================
// UNIFIED MULTI-PROVIDER AI CLIENT (Neuralwatt, OpenRouter, Groq, Gemini)
// ============================================================================

async function resolveProviderCandidates() {
  const active = getActiveProvider();
  const order = [active];
  if (isFallbackEnabled()) {
    for (const p of Object.keys(PROVIDERS)) {
      if (p !== active && getProviderApiKey(p)) {
        order.push(p);
      }
    }
  }
  return order.filter((p) => Boolean(getProviderApiKey(p)));
}

// Liest die vom Server gewünschte Wartezeit (Retry-After Header oder Gemini "retryDelay": "13s")
function extractRetryAfterSec(res, data) {
  const header = res.headers.get('retry-after');
  if (header && !isNaN(Number(header))) return Number(header);
  const details = data?.error?.details || [];
  for (const d of details) {
    if (d?.retryDelay) {
      const sec = parseFloat(String(d.retryDelay));
      if (!isNaN(sec)) return Math.ceil(sec);
    }
  }
  return null;
}

// Schneller Fetch mit hartem Timeout (AbortController) und sofortigem Failover ohne 20s-Blockade
async function fetchWithRateLimitRetry(url, options, onStatusUpdate, label, timeoutMs = 24000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const t0 = performance.now();
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    const data = await res.json().catch(() => ({}));
    const dur = ((performance.now() - t0) / 1000).toFixed(2);
    const retryAfterSec = extractRetryAfterSec(res, data);
    if (!res.ok) {
      addDiagLog(`${label}: HTTP ${res.status} nach ${dur}s (${(data?.error?.message || data?.detail || '').slice(0, 80)})`, 'warn');
    } else {
      addDiagLog(`${label}: OK (HTTP 200 in ${dur}s)`, 'success');
    }
    return { res, data, retryAfterSec };
  } catch (err) {
    const dur = ((performance.now() - t0) / 1000).toFixed(2);
    if (err.name === 'AbortError') {
      addDiagLog(`${label}: Timeout nach ${dur}s abgebrochen – wechsle Modell/Anbieter`, 'warn');
      throw buildApiError(`Zeitüberschreitung (${Math.round(timeoutMs / 1000)}s) bei ${label}`, 408);
    }
    addDiagLog(`${label}: Netzwerkfehler nach ${dur}s (${err.message})`, 'error');
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

function buildApiError(message, status, retryAfterSec = null) {
  const err = new Error(message);
  err.status = status;
  err.isRateLimit = status === 429;
  err.retryAfterSec = retryAfterSec;
  return err;
}

// Gemini-Modellliste nur alle 10 Minuten neu abfragen (spart Requests & Zeit)
let geminiModelCache = { key: null, models: null, ts: 0 };
async function getGeminiModelsCached(apiKey) {
  if (geminiModelCache.key === apiKey && geminiModelCache.models && Date.now() - geminiModelCache.ts < 10 * 60 * 1000) {
    return geminiModelCache.models;
  }
  const models = await fetchAvailableModelsForKey(apiKey);
  geminiModelCache = { key: apiKey, models, ts: Date.now() };
  return models;
}

async function callOpenAICompatibleVision({ provider, baseUrl, apiKey, model, systemPrompt, userPrompt, images = [], maxTokens = 1400, timeoutMs = 24000, onStatusUpdate }) {
  let userContent;
  if (images && images.length > 0) {
    const contentArray = [];
    images.forEach((img) => {
      contentArray.push({
        type: 'image_url',
        image_url: {
          url: `data:${img.mimeType};base64,${img.base64}`
        }
      });
    });
    contentArray.push({
      type: 'text',
      text: userPrompt
    });
    userContent = contentArray;
  } else {
    // Reiner Text-Call (z.B. in Stufe 3 nach erfolgter Bild-Extraktion + Tavily-Suche) -> 4x schneller!
    userContent = userPrompt;
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
  };
  if (provider === 'openrouter') {
    headers['HTTP-Referer'] = window.location.origin || 'http://localhost:8080';
    headers['X-Title'] = 'SellMate AI';
  }

  const modeTag = images && images.length > 0 ? 'Vision' : 'Turbo-Text';
  const { res, data, retryAfterSec } = await fetchWithRateLimitRetry(
    `${baseUrl}/chat/completions`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent }
        ],
        temperature: 0.2,
        max_tokens: maxTokens
      })
    },
    onStatusUpdate,
    `${PROVIDERS[provider]?.name || provider} [${modeTag}] (${model})`,
    timeoutMs
  );

  if (!res.ok) {
    const errMsg = data?.error?.message || data?.detail || `HTTP ${res.status}`;
    throw buildApiError(String(errMsg), res.status, retryAfterSec);
  }

  const text = data?.choices?.[0]?.message?.content || '';
  if (!text.trim()) {
    throw buildApiError('Leere Modell-Antwort', 500);
  }
  return {
    rawText: text,
    usedModel: `${PROVIDERS[provider]?.name || provider}: ${model}`,
    usedSearch: false,
    groundingMetadata: null
  };
}

async function executeUnifiedVisionRequest({ systemPrompt, userPrompt, images = [], maxTokens = 1400, timeoutMs = 24000, allowGeminiSearch = false, onStatusUpdate = null }) {
  const providersToTry = await resolveProviderCandidates();
  if (providersToTry.length === 0) {
    throw new Error('Kein API-Key hinterlegt. Bitte oben rechts auf den Admin-Button (⚙️) klicken und deinen API-Key (z.B. für Neuralwatt oder Gemini) speichern.');
  }

  const errorLog = [];
  let allFailuresWereRateLimits = true;
  let maxRetryAfterSec = null;

  const noteFailure = (label, err) => {
    errorLog.push(`• ${label}: ${String(err.message || '').slice(0, 90)}`);
    if (!err.isRateLimit) allFailuresWereRateLimits = false;
    if (err.retryAfterSec) maxRetryAfterSec = Math.max(maxRetryAfterSec || 0, err.retryAfterSec);
  };

  for (const prov of providersToTry) {
    const apiKey = getProviderApiKey(prov);
    const chosenModel = getProviderModel(prov);
    const meta = PROVIDERS[prov];

    if (meta.type === 'openai') {
      const baseUrl = getProviderBaseUrl(prov);
      let modelsToTry = [];

      if (chosenModel && chosenModel !== 'auto') {
        modelsToTry.push(chosenModel);
      } else {
        // Nutze zuerst das zuletzt erfolgreich getestete Modell dieses Anbieters (spart Fehlversuche!)
        const lastGood = localStorage.getItem(`sellmate_last_good_model_${prov}`);
        if (lastGood) modelsToTry.push(lastGood);
      }

      // Lade gecachte oder Live-Modelle von Neuralwatt / OpenRouter / Groq
      const cachedRaw = localStorage.getItem(`sellmate_cached_models_${prov}`);
      if (cachedRaw) {
        try {
          const parsed = JSON.parse(cachedRaw);
          parsed.forEach((m) => {
            if (!modelsToTry.includes(m)) modelsToTry.push(m);
          });
        } catch (_) {}
      }

      if (modelsToTry.length === 0) {
        try {
          addDiagLog(`Lade verfügbare Modelle von ${meta.name} (${baseUrl}/models)...`);
          const liveModels = await fetchOpenAICompatibleModels(baseUrl, apiKey);
          if (liveModels.length > 0) {
            localStorage.setItem(`sellmate_cached_models_${prov}`, JSON.stringify(liveModels));
            liveModels.forEach((m) => {
              if (!modelsToTry.includes(m)) modelsToTry.push(m);
            });
          }
        } catch (e) {
          addDiagLog(`Modell-Abruf Hinweis (${meta.name}): ${e.message}`, 'warn');
        }
      }

      meta.defaultModels.forEach((dm) => {
        if (dm.id !== 'auto' && !modelsToTry.includes(dm.id)) {
          modelsToTry.push(dm.id);
        }
      });

      // Max. 3 Modelle pro Anbieter; bei Rate-Limit direkt zum nächsten Anbieter
      for (const candidateModel of modelsToTry.slice(0, 3)) {
        if (onStatusUpdate) {
          onStatusUpdate(`Analysiere über ${meta.name} (${candidateModel})...`);
        }
        addDiagLog(`Sende Anfrage an ${meta.name} (${candidateModel}, Bilder: ${images.length})...`);
        try {
          const result = await callOpenAICompatibleVision({
            provider: prov,
            baseUrl,
            apiKey,
            model: candidateModel,
            systemPrompt,
            userPrompt,
            images,
            maxTokens,
            timeoutMs,
            onStatusUpdate
          });
          localStorage.setItem(`sellmate_last_good_model_${prov}`, candidateModel);
          return result;
        } catch (err) {
          noteFailure(`${meta.name} (${candidateModel})`, err);
          if (err.isRateLimit) break;
        }
      }
    } else if (meta.type === 'gemini') {
      let geminiModels = [];
      const lastGoodGem = localStorage.getItem('sellmate_last_good_model_gemini');
      try {
        const real = await getGeminiModelsCached(apiKey);
        if (chosenModel && chosenModel !== 'auto' && real.includes(chosenModel)) {
          geminiModels.push(chosenModel);
        } else if (lastGoodGem && real.includes(lastGoodGem)) {
          geminiModels.push(lastGoodGem);
        }
        real.forEach((m) => {
          if (!geminiModels.includes(m)) geminiModels.push(m);
        });
      } catch (_) {
        geminiModels = chosenModel !== 'auto' ? [chosenModel] : ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'];
      }

      const parts = [
        ...(images || []).map((img) => ({
          inline_data: { mime_type: img.mimeType, data: img.base64 }
        })),
        { text: userPrompt }
      ];

      // Bei Gemini gelten Limits pro Modell – daher bis zu 3 Modelle probieren (ohne langes Warten!)
      for (const candidateModel of geminiModels.slice(0, 3)) {
        if (onStatusUpdate) {
          onStatusUpdate(`Analysiere über Gemini (${candidateModel})...`);
        }
        addDiagLog(`Sende Anfrage an Gemini (${candidateModel}, Bilder: ${images.length})...`);
        const isGemma = candidateModel.toLowerCase().startsWith('gemma');
        const tryGeminiCall = async (withSearch) => {
          const body = {
            contents: [{ role: 'user', parts: isGemma ? [{ text: systemPrompt + '\n\n' }, ...parts] : parts }],
            generationConfig: { temperature: 0.2 }
          };
          if (!isGemma) {
            body.system_instruction = { parts: [{ text: systemPrompt }] };
          }
          if (withSearch && !isGemma) {
            body.tools = [{ google_search: {} }];
          } else if (!isGemma) {
            body.generationConfig.responseMimeType = 'application/json';
          }
          const { res, data, retryAfterSec } = await fetchWithRateLimitRetry(
            `https://generativelanguage.googleapis.com/v1beta/models/${candidateModel}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body)
            },
            onStatusUpdate,
            `Gemini (${candidateModel})`,
            timeoutMs
          );
          return { ok: res.ok, status: res.status, data, usedSearch: withSearch, retryAfterSec };
        };

        try {
          let resCall = await tryGeminiCall(allowGeminiSearch && errorLog.length === 0);
          if (!resCall.ok && allowGeminiSearch && (resCall.status === 429 || resCall.status === 400)) {
            resCall = await tryGeminiCall(false);
          }

          if (resCall.ok) {
            const cand = resCall.data?.candidates?.[0];
            const rawText = (cand?.content?.parts || []).map((p) => p.text || '').join('\n').trim();
            if (rawText) {
              localStorage.setItem('sellmate_last_good_model_gemini', candidateModel);
              return {
                rawText,
                usedModel: `Gemini: ${candidateModel}`,
                usedSearch: resCall.usedSearch,
                groundingMetadata: cand?.groundingMetadata
              };
            }
            noteFailure(`Gemini (${candidateModel})`, buildApiError('Leere Antwort', 200));
          } else {
            const msg = resCall.data?.error?.message || `HTTP ${resCall.status}`;
            noteFailure(`Gemini (${candidateModel})`, buildApiError(`${resCall.status} ${msg}`, resCall.status, resCall.retryAfterSec));
          }
        } catch (err) {
          noteFailure(`Gemini (${candidateModel})`, err);
        }
      }
    }
  }

  const finalErr = buildApiError(
    `Alle konfigurierten Anbieter/Modelle meldeten einen Fehler:\n${errorLog.join('\n')}` +
      (allFailuresWereRateLimits
        ? '\n\nAlle Fehler waren Rate-Limits (429). Warte kurz oder hinterlege einen zweiten Anbieter als Fallback.'
        : ''),
    allFailuresWereRateLimits ? 429 : 0,
    maxRetryAfterSec
  );
  throw finalErr;
}

// ============================================================================
// TAVILY TURBO LIVE-WEB-RECHERCHE PIPELINE (Schnelle Basic-Suche + 1x Vision)
// ============================================================================

async function runTavilySearch(query, tavilyKey, maxResults = 5) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7500);
  const t0 = performance.now();
  try {
    // search_depth: 'basic' antwortet in ~0.6s statt 6-10s bei 'advanced'!
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        api_key: tavilyKey,
        query,
        search_depth: 'basic',
        include_answer: true,
        max_results: maxResults
      })
    });
    const data = await res.json().catch(() => ({}));
    const dur = ((performance.now() - t0) / 1000).toFixed(2);
    if (!res.ok) {
      const msg = data?.detail || data?.error || `Tavily HTTP ${res.status}`;
      addDiagLog(`Tavily Fehler (${dur}s): ${msg}`, 'warn');
      throw new Error(msg);
    }
    addDiagLog(`Tavily Suche "${query.slice(0, 42)}..." -> ${(data.results || []).length} Treffer in ${dur}s`, 'success');
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      addDiagLog(`Tavily Timeout (>7.5s) für "${query.slice(0, 35)}..."`, 'warn');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

// Stufe 1 + 2: Extrahiert NUR reine optische Merkmale (OHNE Namens-Halluzination!) und sucht damit bei Tavily nach dem echten Produkt
async function performTavilyVisualResearch({ images, notes = '', onStatusUpdate = null }) {
  const tavilyKey = getTavilyApiKey();
  if (!tavilyKey) return null;

  try {
    if (onStatusUpdate) {
      onStatusUpdate('Stufe 1/3: Reine Optik-Analyse für Websuche...');
    }
    addDiagLog('Stufe 1/3: Extrahiere reine Bild-Merkmale (ohne Namens-Raten)...');

    const queryGenPrompt = `Analysiere das Foto (und ggf. die Notiz: "${notes}") rein optisch, um Suchbegriffe für eine Websuche zu bilden.

STRENGE REGEL GEGEN HALLUZINATIONEN:
- RATE NIEMALS EINEN CHARAKTERNAMEN, SERIENNAMEN ODER HÖRSPIELTITEL (wie "Leo Lausemaus", "Sendung mit der Maus", "Benjamin Blümchen" o.ä.), wenn dieser Name NICHT buchstäblich als lesbarer Text auf dem Artikel abgedruckt ist!
- Wenn du ein Tier siehst, nenne NUR die Tierart (z.B. "Löwe", "Elefant", "Bär") – niemals einen geratenen Eigennamen!
- Beschreibe Gegenstände nüchtern nach ihrer Form (z.B. wenn eine Figur auf Büchern steht und etwas Flaches/Rechteckiges oder längliches hält -> "Buch Brief Stift", NICHT "Mikrofon" raten!).

Antworte AUSSCHLIESSLICH als kurzes, valides JSON-Objekt mit diesen rein optischen Feldern:
{
  "systemOrBrand": "System oder Marke (z.B. 'Tonie Figur', 'Lego', 'Playmobil', 'Schleich' oder ablesbare Marke)",
  "mainSubject": "Was stellt die Figur / das Objekt rein optisch dar? (NUR 1-3 Wörter ohne Eigennamen, z.B. 'Löwe' oder 'Ritter')",
  "poseAndProps": "Worauf steht es und welche Gegenstände sind klar erkennbar? (Max. 5-7 Wörter, z.B. 'steht auf Stapel Bücher hält Buch Brief')",
  "readableText": "Nur Text/Nummern, die buchstäblich auf einem Etikett/Gehäuse lesbar sind (leer lassen '', wenn kein Text sichtbar ist!)",
  "conditionNotes": "Sichtbarer optischer Zustand / Gebrauchsspuren auf dem Foto"
}`;

    const step1 = await executeUnifiedVisionRequest({
      systemPrompt: 'Du bist ein rein optischer Bild-Analyst. Du rätst NIEMALS Eigennamen oder Titel, sondern beschreibst nur, was physisch zu sehen ist, als kurzes JSON.',
      userPrompt: queryGenPrompt,
      images,
      maxTokens: 220,
      timeoutMs: 18000,
      allowGeminiSearch: false,
      onStatusUpdate
    });

    const match = (step1.rawText || '').match(/\{[\s\S]*\}/);
    if (!match) {
      addDiagLog('Stufe 1 lieferte kein JSON – fahre ohne Tavily fort', 'warn');
      return null;
    }
    const qObj = JSON.parse(match[0]);

    const sys = (qObj.systemOrBrand || '').trim();
    const subj = (qObj.mainSubject || '').trim();
    const props = (qObj.poseAndProps || '').trim();
    const readTxt = (qObj.readableText || '').trim();
    const cond = (qObj.conditionNotes || '').trim();

    // Baue saubere, halluzinationsfreie Suchanfragen aus den rein visuellen Bausteinen
    const idQuery = [sys, subj, props, readTxt, notes].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
    const shortProps = props.split(/\s+/).slice(0, 3).join(' ');
    const priceQuery = [sys, subj, shortProps, readTxt, 'gebraucht Preis Kleinanzeigen Rarität'].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();

    if (!idQuery) return null;

    addDiagLog(`Optik erkannt: System="${sys}", Motiv="${subj}", Details="${props}"`, 'info');
    addDiagLog(`Tavily Query 1: "${idQuery}"`, 'info');

    if (onStatusUpdate) {
      onStatusUpdate(`Stufe 2/3: Tavily Schnell-Suche nach "${idQuery.slice(0, 44)}..."`);
    }

    const [idSearch, priceSearch] = await Promise.all([
      runTavilySearch(idQuery, tavilyKey, 5),
      runTavilySearch(priceQuery, tavilyKey, 4).catch(() => ({ results: [] }))
    ]);

    const allResults = [...(idSearch.results || []), ...(priceSearch.results || [])];
    const seenUrls = new Set();
    const uniqueResults = [];
    for (const r of allResults) {
      if (r?.url && !seenUrls.has(r.url)) {
        seenUrls.add(r.url);
        uniqueResults.push(r);
      }
    }

    if (uniqueResults.length > 0) {
      const topTitles = uniqueResults.slice(0, 3).map((r) => `"${(r.title || '').slice(0, 55)}"`).join(' | ');
      addDiagLog(`Tavily Top-Treffer: ${topTitles}`, 'success');
    }

    const snippets = uniqueResults
      .slice(0, 6)
      .map((r, idx) => `[Quelle ${idx + 1}] Titel: ${r.title}\nURL: ${r.url}\nInhalt: ${(r.content || '').slice(0, 380)}`)
      .join('\n\n');

    const visualSummary = `System/Marke: ${sys} | Hauptmotiv: ${subj} | Pose & Merkmale: ${props}${readTxt ? ` | Ablesbarer Text: ${readTxt}` : ''}${cond ? ` | Optischer Zustand: ${cond}` : ''}`;

    const contextText = `
=== OPTISCHE BILD-ANALYSE DES FOTOS ===
${visualSummary}

=== ECHTE LIVE-WEBRECHERCHE (TAVILY SEARCH ERGEBNISSE) ===
Suchanfrage 1 (Optische Produkt-Suche): "${idQuery}"
Tavily Kurzantwort 1: ${idSearch.answer || 'Siehe Quellen'}

Suchanfrage 2 (Marktpreis & Raritäten-Check): "${priceQuery}"
Tavily Kurzantwort 2: ${priceSearch.answer || 'Siehe Quellen'}

Gefundene Web-Quellen & Produktdetails:
${snippets}

STRENGE ANWEISUNG FÜR DEN ABGLEICH VON FOTO & WEB-QUELLEN:
1. Vergleiche das Foto direkt mit den oben gelieferten Tavily-Web-Quellen!
2. Bestimme aus den Web-Quellen genau denjenigen offiziellen Produktnamen / Hörspiel-Titel, dessen optische Beschreibung zum Foto passt!
   - Beispiel: Wenn auf dem Foto ein Löwe auf einem Stapel Bücher steht und ein Buch/Brief hält, dann wähle aus den Web-Quellen den Löwen-Tonie ("Die Geschichte vom Löwen, der nicht schreiben konnte" / "Der Löwe, der nicht schreiben konnte") – und erfinde NIEMALS eine Maus wie "Leo Lausemaus"!
3. Nenne in Titel und Beschreibung den EXAKTEN offiziellen Produktnamen aus den Web-Treffern und ergänze echte Details aus den Quellen (z.B. worum es bei dem Hörspiel/Artikel geht).
4. Übernimm den echten Raritäten-/EOL-Status und realistische Gebrauchtpreise aus den Quellen.
=========================================================`;

    const groundingMetadata = {
      groundingChunks: uniqueResults.slice(0, 6).map((r) => ({
        web: { uri: r.url, title: r.title || r.url }
      }))
    };

    return {
      contextText,
      groundingMetadata,
      idQuery,
      visualClues: visualSummary,
      step1Model: step1.usedModel
    };
  } catch (err) {
    addDiagLog(`Tavily-Pipeline Hinweis: ${err.message}`, 'warn');
    return null;
  }
}

// Main AI Generation Call (Single Item View)
btnGenerate.addEventListener('click', async () => {
  const apiKey = getApiKey();
  if (!apiKey) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst deinen API-Key (z.B. Neuralwatt oder Gemini) eingeben');
    return;
  }

  const notes = userNotes.value.trim();
  if (uploadedImages.length === 0 && !notes) {
    showToast('Bitte mindestens ein Foto aufnehmen oder eine Notiz eingeben');
    return;
  }

  errorSection.classList.add('hidden');
  resultSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');
  btnGenerate.disabled = true;
  startDiagSession();

  try {
    const totalKb = uploadedImages.reduce((acc, i) => acc + (i.sizeKb || Math.round((i.base64.length * 3) / 4 / 1024)), 0);
    const hasTavilyKey = Boolean(getTavilyApiKey());
    addDiagLog(`Start: ${uploadedImages.length} Foto(s) (${totalKb} KB), Plattform: ${PLATFORM_META[currentPlatform].name}, Tavily-Key: ${hasTavilyKey ? 'aktiv ✓' : 'NICHT hinterlegt!'}`);

    const systemPrompt = getSystemPrompt(currentPlatform);
    const useSearch = toggleGoogleSearch.checked;
    const loadingSubtext = document.getElementById('loadingSubtext');

    // Falls Tavily API-Key vorhanden und Web-Recherche aktiv: 2-Stufen Live-Recherche ausführen!
    let tavilyData = null;
    if (useSearch && hasTavilyKey) {
      tavilyData = await performTavilyVisualResearch({
        images: uploadedImages,
        notes,
        onStatusUpdate: (msg) => {
          if (loadingSubtext) loadingSubtext.textContent = msg;
        }
      });
    } else if (useSearch && !hasTavilyKey) {
      addDiagLog('WARNUNG: Kein Tavily API-Key im Admin-Menü (⚙️) gespeichert! Ohne Tavily rät das Modell ohne Websuche.', 'warn');
    }

    const outputFormatInstructions = `
SCHRITT-FÜR-SCHRITT BILD- & FAKTENANALYSE VOR DER ANTWORT:
1. Schau dir das Foto genau an und gleiche es mit den oben gelieferten LIVE-WEBRECHERCHE-Ergebnissen ab.
2. Wähle den EXAKTEN offiziellen Produktnamen aus den Web-Quellen, der optisch zum Foto passt (z.B. bei einem Löwen auf einem Bücherstapel: Tonies Hörfigur "Die Geschichte vom Löwen, der nicht schreiben konnte" / "Der Löwe, der nicht schreiben konnte"). Erfinde NIEMALS Figuren, die optisch gar nicht zum Tier/Objekt auf dem Foto passen (ein Löwe ist KEINE Maus wie Leo Lausemaus!).
3. Schreibe eine spezifische, verkaufsstarke Beschreibung mit echten Details zum Produkt/Inhalt und Zustand.
4. VERBOTEN IN DER BESCHREIBUNG: Schreibe KEINE Sätze wie "Versand möglich oder Abholung vor Ort", KEINE Bezahlfloskeln und KEINEN Privatverkauf-Disclaimer!

WICHTIG FÜR DIE AUSGABE-STRUKTUR:
Antworte ausschließlich als valides JSON-Objekt (ohne umschließenden Markdown-Text außerhalb des JSON) mit exakt diesen Feldern:
{
  "visualReasoning": "Kurze visuelle Begründung + Abgleich mit den gefundenen Web-Quellen",
  "identificationConfidence": "hoch" | "mittel" | "niedrig",
  "identifiedItem": "Exakter offizieller Produktname aus den Web-Quellen",
  "priceAndRarityAnalysis": "Ausführliche Preis- & Markteinschätzung inkl. Raritäten-Check, EOL-Prüfung, Einzelpreisen und Setpreis (falls mehrere Artikel).",
  "hasRarityWarning": true/false (true, wenn ein seltenes Sammlerstück / EOL erkannt wurde oder separat verkauft werden sollte),
  "title": "Optimierter, treffender Verkaufstitel mit exaktem Modell/Titel",
  "description": "Die sofort kopierfertige, spezifische Beschreibung. STRIKT REINER TEXT OHNE MARKDOWN (keine **, keine ###, Aufzählungen nur mit -, Zwischenüberschriften mit Doppelpunkt, ABSOLUT KEINE Versand-/Abholfloskeln, kein Disclaimer).",
  "attributes": {
    "Empfohlener Preis": "z.B. 14 € VB",
    "Zustand": "z.B. Guter gebrauchter Zustand",
    "Kategorie / Marke": "Hersteller & Serie"
  }
}`;

    const baseUserRequest = notes
      ? `Zusätzliche Angaben vom Verkäufer: "${notes}"\n\nBitte führe jetzt die Identifikation, den Raritäten-/Preis-Check und die Texterstellung für die Plattform ${PLATFORM_META[currentPlatform].name} durch.`
      : `Bitte identifiziere alle Artikel auf den Fotos anhand der Web-Quellen exakt, führe den strengen Raritäten- & Preis-Check durch und erstelle den Verkaufstext für ${PLATFORM_META[currentPlatform].name}.`;

    const fullUserPrompt = tavilyData
      ? `${baseUserRequest}\n\n${tavilyData.contextText}\n\n${outputFormatInstructions}`
      : `${baseUserRequest}\n\n${outputFormatInstructions}`;

    // Stufe 3 bekommt das schlanke 800px-Foto (~55 KB) + die Tavily-Ergebnisse, damit das Vision-Modell Foto & Web-Treffer visuell abgleichen kann!
    addDiagLog('Stufe 3/3: Visueller Abgleich von Foto + Web-Quellen & Texterstellung...');
    const aiResponse = await executeUnifiedVisionRequest({
      systemPrompt,
      userPrompt: fullUserPrompt,
      images: uploadedImages,
      maxTokens: 1300,
      timeoutMs: 24000,
      allowGeminiSearch: useSearch && !tavilyData,
      onStatusUpdate: (msg) => {
        if (loadingSubtext) {
          loadingSubtext.textContent = tavilyData ? `Stufe 3/3: Erstelle Verkaufstext (${msg})...` : msg;
        }
      }
    });

    const parsed = parseModelResponse(aiResponse.rawText);
    const finalGrounding = tavilyData?.groundingMetadata || aiResponse.groundingMetadata;
    const usedWeb = Boolean(tavilyData) || aiResponse.usedSearch;
    const badgeModel = tavilyData ? `${aiResponse.usedModel} + Tavily` : aiResponse.usedModel;
    addDiagLog(`Fertig! Erkannt: "${parsed.title || 'Artikel'}" über ${badgeModel}`, 'success');
    finishDiagSession(badgeModel);
    renderResult(parsed, finalGrounding, badgeModel, usedWeb);
  } catch (err) {
    addDiagLog(`Abbruch mit Fehler: ${err.message}`, 'error');
    finishDiagSession('Fehler');
    errorText.textContent = err.message || 'Unbekannter Fehler bei der Anfrage.';
    errorSection.classList.remove('hidden');
  } finally {
    loadingSection.classList.add('hidden');
    btnGenerate.disabled = false;
  }
});

function parseModelResponse(rawText) {
  // Extract JSON block if wrapped in ```json ... ```
  const jsonMatch = rawText.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      const obj = JSON.parse(jsonMatch[0]);
      return {
        priceAndRarityAnalysis: obj.priceAndRarityAnalysis || 'Keine Preisdetails gefunden.',
        hasRarityWarning: Boolean(obj.hasRarityWarning),
        title: obj.title || '',
        description: sanitizePlainTextDescription(obj.description || ''),
        attributes: obj.attributes || {}
      };
    } catch (_) {
      // Fallback if JSON parsing fails
    }
  }

  return {
    priceAndRarityAnalysis: 'Siehe generierte Ausgabe unten.',
    hasRarityWarning: false,
    title: '',
    description: sanitizePlainTextDescription(rawText),
    attributes: {}
  };
}

function renderResult(result, groundingMetadata, usedModel = '', usedSearch = false) {
  priceAnalysisContent.textContent = result.priceAndRarityAnalysis;

  const usedModelBadge = document.getElementById('usedModelBadge');
  if (usedModelBadge && usedModel) {
    usedModelBadge.textContent = `${usedModel}${usedSearch ? ' + Web' : ''}`;
  }

  if (result.hasRarityWarning) {
    rarityWarningBadge.classList.remove('hidden');
  } else {
    rarityWarningBadge.classList.add('hidden');
  }

  outputTitle.value = result.title;
  outputDescription.value = result.description;

  const launchPlatformBtnText = document.getElementById('launchPlatformBtnText');
  if (launchPlatformBtnText) {
    launchPlatformBtnText.textContent = `Alles kopieren & ${PLATFORM_META[currentPlatform].name} öffnen`;
  }

  // Speichere den empfohlenen Preis für den Multi-Copy / Auto-Fill Workflow
  window.lastRecommendedPrice = result.attributes?.['Empfohlener Preis'] || '';

  // Render extra attributes
  const attrs = result.attributes || {};
  const entries = Object.entries(attrs).filter(([_, v]) => v);
  if (entries.length > 0) {
    extraFieldsGrid.innerHTML = entries
      .map(
        ([k, v]) => `
        <div class="bg-slate-950 border border-slate-800/80 rounded-xl p-2.5">
          <div class="text-[10px] uppercase tracking-wider text-slate-400">${escapeHtml(k)}</div>
          <div class="font-semibold text-slate-200 mt-0.5">${escapeHtml(String(v))}</div>
        </div>
      `
      )
      .join('');
    extraFieldsCard.classList.remove('hidden');
  } else {
    extraFieldsCard.classList.add('hidden');
  }

  // Render Grounding Sources if present
  const chunks = groundingMetadata?.groundingChunks || [];
  const webLinks = chunks
    .map((c) => c.web)
    .filter((w) => w && w.uri);

  if (webLinks.length > 0) {
    groundingLinks.innerHTML = webLinks
      .slice(0, 6)
      .map(
        (w) => `
        <a href="${escapeHtml(w.uri)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition">
          <span class="truncate max-w-[180px]">${escapeHtml(w.title || w.uri)}</span>
        </a>
      `
      )
      .join('');
    groundingSourcesCard.classList.remove('hidden');
  } else {
    groundingSourcesCard.classList.add('hidden');
  }

  resultSection.classList.remove('hidden');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 1-Click Copy Helpers
async function copyToClipboard(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (_) {
    // Fallback for older mobile webviews
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast(message);
  }
}

btnCopyTitle.addEventListener('click', () => {
  copyToClipboard(outputTitle.value, 'Titel in die Zwischenablage kopiert!');
});

btnCopyDescription.addEventListener('click', () => {
  copyToClipboard(outputDescription.value, 'Beschreibung exakt (ohne Markdown) kopiert!');
});

// Schnell-Korrektur Button direkt in der Ergebniskarte
const btnQuickCorrection = document.getElementById('btnQuickCorrection');
const quickCorrectionInput = document.getElementById('quickCorrectionInput');
if (btnQuickCorrection && quickCorrectionInput) {
  btnQuickCorrection.addEventListener('click', () => {
    const corr = quickCorrectionInput.value.trim();
    if (!corr) {
      showToast('Bitte kurzen Korrektur-Hinweis eingeben');
      return;
    }
    userNotes.value = userNotes.value.trim()
      ? `${userNotes.value.trim()} | Korrektur: ${corr}`
      : corr;
    quickCorrectionInput.value = '';
    btnGenerate.click();
  });
}

// ============================================================================
// ANDROID DIREKT-INSERAT & AUTO-FILL WORKFLOW
// ============================================================================

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Kopiert Preis, Beschreibung und Titel nacheinander in die Android-Zwischenablage (Gboard/Samsung Clipboard-Verlauf)
async function copyAllToAndroidClipboardHistory() {
  const title = outputTitle.value.trim();
  const desc = outputDescription.value.trim();
  const rawPrice = (window.lastRecommendedPrice || '').replace(/[^\d]/g, '');

  // 1. Preis kopieren (falls vorhanden)
  if (rawPrice) {
    await copyToClipboard(rawPrice, '1/3 Preis kopiert...');
    await sleep(320);
  }
  // 2. Beschreibung kopieren
  if (desc) {
    await copyToClipboard(desc, '2/3 Beschreibung kopiert...');
    await sleep(320);
  }
  // 3. Titel als letztes kopieren (damit er ganz oben für das erste Feld "Titel" liegt!)
  if (title) {
    await copyToClipboard(title, '✓ Titel, Beschreibung & Preis im Klemmbrett! Öffne App...');
  }
}

const btnLaunchPlatformApp = document.getElementById('btnLaunchPlatformApp');
if (btnLaunchPlatformApp) {
  btnLaunchPlatformApp.addEventListener('click', async () => {
    await copyAllToAndroidClipboardHistory();
    const meta = PLATFORM_META[currentPlatform];
    const isAndroid = /android/i.test(navigator.userAgent);

    setTimeout(() => {
      if (isAndroid && currentPlatform === 'kleinanzeigen') {
        // Öffnet direkt die Kleinanzeigen-App bzw. den Anzeigen-Erstellen-Screen
        window.location.href = meta.createUrl;
      } else {
        window.open(meta.createUrl, '_blank');
      }
    }, 450);
  });
}

// Nativer Android Share-Dialog (Teilt aufgenommene Fotos + Titel + Beschreibung direkt an andere Apps)
const btnNativeShare = document.getElementById('btnNativeShare');
if (btnNativeShare) {
  btnNativeShare.addEventListener('click', async () => {
    const title = outputTitle.value.trim();
    const desc = outputDescription.value.trim();

    await copyAllToAndroidClipboardHistory();

    if (!navigator.share) {
      showToast('Teilen-Menü auf diesem Browser nicht verfügbar – Text wurde kopiert!');
      return;
    }

    try {
      // Konvertiere hochgeladene Base64-Bilder zurück in echte Datei-Objekte für Android Share
      const files = [];
      for (let i = 0; i < uploadedImages.length; i++) {
        const res = await fetch(uploadedImages[i].dataUrl);
        const blob = await res.blob();
        files.push(new File([blob], `artikel-foto-${i + 1}.jpg`, { type: 'image/jpeg' }));
      }

      const shareData = {
        title: title,
        text: `${title}\n\n${desc}`
      };

      if (files.length > 0 && navigator.canShare && navigator.canShare({ files })) {
        shareData.files = files;
      }

      await navigator.share(shareData);
    } catch (err) {
      if (err.name !== 'AbortError') {
        showToast('Text & Titel sind in deiner Zwischenablage bereit!');
      }
    }
  });
}

// Web-Auto-Fill Modal & Bookmarklet-Generator (füllt Kleinanzeigen/Vinted/Willhaben im Browser automatisch aus)
const autofillModal = document.getElementById('autofillModal');
const btnOpenAutofillModal = document.getElementById('btnOpenAutofillModal');
const btnCloseAutofillModal = document.getElementById('btnCloseAutofillModal');
const btnCopyCurrentAutofill = document.getElementById('btnCopyCurrentAutofill');

if (btnOpenAutofillModal && autofillModal) {
  btnOpenAutofillModal.addEventListener('click', () => {
    autofillModal.classList.remove('hidden');
  });
}
if (btnCloseAutofillModal && autofillModal) {
  btnCloseAutofillModal.addEventListener('click', () => {
    autofillModal.classList.add('hidden');
  });
}

if (btnCopyCurrentAutofill) {
  btnCopyCurrentAutofill.addEventListener('click', async () => {
    const payload = {
      title: outputTitle.value.trim(),
      description: outputDescription.value.trim(),
      price: (window.lastRecommendedPrice || '').replace(/[^\d]/g, ''),
      isVB: /vb|verhandlungsbasis/i.test(window.lastRecommendedPrice || '')
    };

    const autofillScript = `(function(){const d=${JSON.stringify(payload)};const setVal=(sel,val)=>{const el=document.querySelector(sel);if(el&&val){const setter=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,'value')?.set||Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value')?.set;if(setter){setter.call(el,val);}else{el.value=val;}el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));}};setVal('#postad-title, input[name="title"], input[id*="title"]',d.title);setVal('#pstad-descrptn, textarea[name="description"], textarea[id*="descr"]',d.description);setVal('#pstad-price, #micro-frontend-price, input[name*="price"], input[id*="price"]',d.price);alert('SellMate AI: Titel, Beschreibung & Preis wurden eingetragen!');})();`;

    await copyToClipboard(autofillScript, 'Auto-Fill-Skript kopiert! Öffne Inserats-Seite...');
    const meta = PLATFORM_META[currentPlatform];
    setTimeout(() => {
      window.open(meta.createUrl, '_blank');
    }, 500);
  });
}

let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  toastText.textContent = msg;
  toast.classList.remove('hidden');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2600);
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}


// ============================================================================
// BATCH-AGENT & VERKAUFS-DASHBOARD (HINTERGRUND-WARTESCHLANGE)
// ============================================================================

const tabBtnBatch = document.getElementById('tabBtnBatch');
const tabBtnSingle = document.getElementById('tabBtnSingle');
const batchDashboardView = document.getElementById('batchDashboardView');
const singleItemView = document.getElementById('singleItemView');
const batchCountBadge = document.getElementById('batchCountBadge');

const batchCameraInput = document.getElementById('batchCameraInput');
const batchGalleryInput = document.getElementById('batchGalleryInput');
const btnClearBatchAll = document.getElementById('btnClearBatchAll');

const batchAgentStatusBox = document.getElementById('batchAgentStatusBox');
const batchAgentStatusText = document.getElementById('batchAgentStatusText');
const batchAgentProgressNumbers = document.getElementById('batchAgentProgressNumbers');
const batchAgentProgressBar = document.getElementById('batchAgentProgressBar');

const statTotalValue = document.getElementById('statTotalValue');
const statPriceRange = document.getElementById('statPriceRange');
const statHighDemand = document.getElementById('statHighDemand');
const statRarities = document.getElementById('statRarities');
const statLowDemand = document.getElementById('statLowDemand');

const batchFilterBar = document.getElementById('batchFilterBar');
const batchSortSelect = document.getElementById('batchSortSelect');
const batchEmptyState = document.getElementById('batchEmptyState');
const batchItemsList = document.getElementById('batchItemsList');

let batchItems = []; // Array of { id, createdAt, status: 'queued'|'analyzing'|'done'|'error', image, data, errorMsg }
let isBatchWorkerRunning = false;
let currentBatchFilter = 'all';

// Tab Switching
function switchMainTab(mode) {
  if (mode === 'batch') {
    batchDashboardView.classList.remove('hidden');
    singleItemView.classList.add('hidden');
    tabBtnBatch.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
    tabBtnSingle.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition bg-slate-800 text-slate-300 hover:bg-slate-700';
  } else {
    batchDashboardView.classList.add('hidden');
    singleItemView.classList.remove('hidden');
    tabBtnSingle.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
    tabBtnBatch.className = 'flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition bg-slate-800 text-slate-300 hover:bg-slate-700';
  }
}

if (tabBtnBatch && tabBtnSingle) {
  tabBtnBatch.addEventListener('click', () => switchMainTab('batch'));
  tabBtnSingle.addEventListener('click', () => switchMainTab('single'));
}

// Persistenz in IndexedDB (localStorage fasst nur ~5 MB – zu wenig für viele Fotos)
const IDB_NAME = 'sellmate-db';
const IDB_STORE = 'batchItems';
let idbPromise = null;

function openBatchDb() {
  if (!idbPromise) {
    idbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = () => {
        if (!req.result.objectStoreNames.contains(IDB_STORE)) {
          req.result.createObjectStore(IDB_STORE, { keyPath: 'id' });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  return idbPromise;
}

function idbRequest(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// Ohne Argument: kompletter Abgleich (inkl. Löschen entfernter Artikel). Mit Artikel: nur diesen speichern.
async function saveBatchToStorage(changedItem = null) {
  try {
    const db = await openBatchDb();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    if (changedItem) {
      store.put(changedItem);
    } else {
      const existingKeys = await idbRequest(store.getAllKeys());
      const currentIds = new Set(batchItems.map((i) => i.id));
      existingKeys.forEach((key) => {
        if (!currentIds.has(key)) store.delete(key);
      });
      batchItems.forEach((item) => store.put(item));
    }
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } catch (err) {
    showToast(`Speichern fehlgeschlagen: ${err?.message || err}`);
  }
}

async function loadBatchFromStorage() {
  try {
    const db = await openBatchDb();

    // Einmalige Übernahme der alten localStorage-Daten
    const legacyRaw = localStorage.getItem('sellmate_batch_items_v1');
    if (legacyRaw) {
      try {
        const legacyItems = JSON.parse(legacyRaw) || [];
        const tx = db.transaction(IDB_STORE, 'readwrite');
        legacyItems.forEach((item) => tx.objectStore(IDB_STORE).put(item));
        await new Promise((resolve) => { tx.oncomplete = resolve; tx.onerror = resolve; });
      } catch (_) {}
      localStorage.removeItem('sellmate_batch_items_v1');
    }

    const all = await idbRequest(db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).getAll());
    batchItems = (all || []).sort((a, b) => b.createdAt - a.createdAt);
    // Falls beim letzten Schließen noch was auf 'analyzing' stand -> zurück auf 'queued'
    batchItems.forEach((item) => {
      if (item.status === 'analyzing') item.status = 'queued';
    });
    renderBatchDashboard();
    if (batchItems.some((i) => i.status === 'queued')) {
      runBatchAgentQueue();
    }
  } catch (err) {
    batchItems = [];
    showToast(`Dashboard konnte nicht geladen werden: ${err?.message || err}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Bittet den Browser, die Daten nicht automatisch zu löschen, wenn der Speicher knapp wird
  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }
  loadBatchFromStorage();
});

// Neue Fotos in die Hintergrund-Queue werfen
async function enqueueBatchFiles(files) {
  const apiKey = getApiKey();
  if (!apiKey) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst einen API-Key hinterlegen');
    return;
  }

  const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
  if (!imageFiles.length) return;

  showToast(`${imageFiles.length} Foto(s) zur Agenten-Warteschlange hinzugefügt!`);

  for (const file of imageFiles) {
    // Komprimiere auf 1024px für schnelle Hintergrund-Verarbeitung & Storage
    const compressed = await compressImage(file, 1024, 0.78);
    batchItems.unshift({
      id: 'item_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      createdAt: Date.now(),
      status: 'queued',
      image: compressed,
      data: null,
      errorMsg: null
    });
  }

  saveBatchToStorage();
  renderBatchDashboard();
  runBatchAgentQueue();
}

if (batchCameraInput) {
  batchCameraInput.addEventListener('change', (e) => {
    enqueueBatchFiles(e.target.files);
    batchCameraInput.value = '';
  });
}

if (batchGalleryInput) {
  batchGalleryInput.addEventListener('change', (e) => {
    enqueueBatchFiles(e.target.files);
    batchGalleryInput.value = '';
  });
}

if (btnClearBatchAll) {
  btnClearBatchAll.addEventListener('click', () => {
    batchItems = [];
    saveBatchToStorage();
    renderBatchDashboard();
    showToast('Dashboard geleert');
  });
}

// Hintergrund-Agent: Arbeitet alle 'queued' Artikel der Reihe nach ab (mit Multi-Provider Support & Rate-Limit Schutz)
async function runBatchAgentQueue() {
  if (isBatchWorkerRunning) return;
  const apiKey = getApiKey();
  if (!apiKey) return;

  isBatchWorkerRunning = true;

  try {
    while (true) {
      const nextItem = batchItems.find((i) => i.status === 'queued');
      if (!nextItem) break;

      nextItem.status = 'analyzing';
      renderBatchDashboard();

      try {
        const analysis = await analyzeSingleBatchItemWithAgent(nextItem.image);
        nextItem.status = 'done';
        nextItem.data = analysis;
      } catch (err) {
        nextItem.rateLimitRetries = (nextItem.rateLimitRetries || 0) + 1;
        if (err.isRateLimit && nextItem.rateLimitRetries <= 3) {
          // Rate-Limit: Artikel zurück in die Warteschlange und die ganze Queue pausieren, statt weiter zu hämmern
          nextItem.status = 'queued';
          const waitSec = Math.min(90, err.retryAfterSec || 30 * nextItem.rateLimitRetries);
          await saveBatchToStorage(nextItem);
          for (let s = waitSec; s > 0; s--) {
            batchAgentStatusText.textContent = `Rate-Limit erreicht – Agent pausiert noch ${s} s...`;
            await sleep(1000);
          }
          continue;
        }
        nextItem.status = 'error';
        nextItem.errorMsg = err.message || 'Analyse fehlgeschlagen';
      }

      await saveBatchToStorage(nextItem);
      renderBatchDashboard();
      // Kurze Pause zwischen zwei Hintergrund-Requests
      await sleep(1000);
    }
  } finally {
    isBatchWorkerRunning = false;
    renderBatchDashboard();
  }
}

async function analyzeSingleBatchItemWithAgent(imgObj) {
  const systemPrompt = getSystemPrompt(currentPlatform);

  // Wenn Tavily API-Key hinterlegt ist, macht auch der Hintergrund-Agent für jedes Foto die 2-Stufen-Webrecherche!
  let tavilyData = null;
  if (getTavilyApiKey()) {
    tavilyData = await performTavilyVisualResearch({
      images: [imgObj],
      notes: '',
      onStatusUpdate: (msg) => {
        if (batchAgentStatusText) batchAgentStatusText.textContent = msg;
      }
    });
  }

  const batchPrompt = `
Du bist ein präziser Verkaufs- und Bewertungs-Agent für Gebrauchtwaren (${PLATFORM_META[currentPlatform].name}).
Analysiere das Foto und die beigefügten Web-Recherche-Ergebnisse exakt:
1. Identifiziere den genauen Artikel mit seinem EXAKTEN offiziellen Produktnamen/Titel (Hersteller, Modell, Serie/Hörspieltitel).
2. Bewerte die VERKÄUFLICHKEIT (Nachfrage am Gebrauchtmarkt):
   - "high" (Sehr gut verkäuflich / Schnelldreher, z.B. beliebte Tonies, Marken-Elektronik, Lego, gefragte Markenkleidung)
   - "medium" (Normal verkäuflich, braucht etwas Geduld oder guten Preis)
   - "low" (Schwer einzeln verkäuflich / Massenware, besser im Konvolut/Set oder zu verschenken)
3. Ermittle den realistischen Gebrauchtpreis in Euro (minPrice, maxPrice, recommendedPrice als Zahl) und prüfe auf RARITÄT / EOL (End-of-Life).
4. Erstelle direkt den fertigen Verkaufstitel und eine spezifische, verkaufsstarke Beschreibung mit echten Produktdetails (100% reiner Text OHNE Markdown, keine **, keine ###, Aufzählungen mit -, keine Versandfloskeln, kein Disclaimer).
${tavilyData ? '\n' + tavilyData.contextText + '\n' : ''}
Antworte AUSSCHLIESSLICH als valides JSON-Objekt mit diesen Feldern:
{
  "itemName": "Exakter offizieller Name des erkannten Artikels",
  "identificationConfidence": "hoch" | "mittel" | "niedrig",
  "category": "Kategorie / Marke (z.B. Tonies / Spielzeug)",
  "sellability": "high" | "medium" | "low",
  "sellabilityScore": 1 bis 10 (10 = reißt man dir sofort aus den Händen, 1 = kaum verkäuflich),
  "sellabilityReason": "Kurze Begründung (1-2 Sätze), warum sich das Teil gut oder schlecht verkauft und wie schnell man es loswird",
  "sellingStrategy": "Einzeln inserieren" | "Als Konvolut / Paket bündeln" | "Sammlerstück / Rarität",
  "isRarity": true | false,
  "minPrice": 10,
  "maxPrice": 18,
  "recommendedPrice": 14,
  "bestPlatform": "Kleinanzeigen" | "Vinted" | "Willhaben",
  "title": "Fertiger SEO-Verkaufstitel",
  "description": "Kopierfertige Plaintext-Beschreibung ohne Markdown"
}`;

  const aiRes = await executeUnifiedVisionRequest({
    systemPrompt,
    userPrompt: batchPrompt,
    images: [imgObj],
    maxTokens: 1300,
    timeoutMs: 22000,
    allowGeminiSearch: false
  });

  const match = (aiRes.rawText || '').match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error('Ungültige JSON-Antwort vom Modell.');
  }

  const parsed = JSON.parse(match[0]);
  return {
    itemName: parsed.itemName || 'Unbekannter Artikel',
    identificationConfidence: ['hoch', 'mittel', 'niedrig'].includes(parsed.identificationConfidence) ? parsed.identificationConfidence : 'mittel',
    priceFromWebSearch: Boolean(tavilyData) || Boolean(aiRes.usedSearch),
    category: parsed.category || 'Allgemein',
    sellability: ['high', 'medium', 'low'].includes(parsed.sellability) ? parsed.sellability : 'medium',
    sellabilityScore: Number(parsed.sellabilityScore) || 5,
    sellabilityReason: parsed.sellabilityReason || '',
    sellingStrategy: parsed.sellingStrategy || 'Einzeln inserieren',
    isRarity: Boolean(parsed.isRarity),
    minPrice: Number(parsed.minPrice) || 0,
    maxPrice: Number(parsed.maxPrice) || 0,
    recommendedPrice: Number(parsed.recommendedPrice) || 0,
    bestPlatform: parsed.bestPlatform || PLATFORM_META[currentPlatform].name,
    title: parsed.title || parsed.itemName || '',
    description: sanitizePlainTextDescription(parsed.description || ''),
    usedModel: tavilyData ? `${aiRes.usedModel} + Tavily` : aiRes.usedModel
  };
}

// Filter & Sort Events
document.querySelectorAll('.batch-filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentBatchFilter = btn.dataset.filter;
    document.querySelectorAll('.batch-filter-btn').forEach((b) => {
      if (b.dataset.filter === currentBatchFilter) {
        b.className = 'batch-filter-btn active px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      } else {
        b.className = 'batch-filter-btn px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700';
      }
    });
    renderBatchDashboard();
  });
});

if (batchSortSelect) {
  batchSortSelect.addEventListener('change', () => renderBatchDashboard());
}

function renderBatchDashboard() {
  if (!batchItemsList) return;

  const totalCount = batchItems.length;
  const doneItems = batchItems.filter((i) => i.status === 'done' && i.data);
  const pendingCount = batchItems.filter((i) => i.status === 'queued' || i.status === 'analyzing').length;

  if (batchCountBadge) {
    batchCountBadge.textContent = String(totalCount);
  }

  // Progress Bar Update
  if (pendingCount > 0) {
    const finishedCount = totalCount - pendingCount;
    const pct = totalCount > 0 ? Math.round((finishedCount / totalCount) * 100) : 0;
    batchAgentStatusBox.classList.remove('hidden');
    batchAgentStatusText.textContent = `Hintergrund-Agent analysiert Artikel (${finishedCount + 1} von ${totalCount})...`;
    batchAgentProgressNumbers.textContent = `${finishedCount} / ${totalCount}`;
    batchAgentProgressBar.style.width = `${pct}%`;
  } else {
    batchAgentStatusBox.classList.add('hidden');
  }

  // KPIs berechnen
  let sumRec = 0;
  let sumMin = 0;
  let sumMax = 0;
  let highCount = 0;
  let rarityCount = 0;
  let lowCount = 0;

  doneItems.forEach((item) => {
    const d = item.data;
    sumRec += d.recommendedPrice || 0;
    sumMin += d.minPrice || d.recommendedPrice || 0;
    sumMax += d.maxPrice || d.recommendedPrice || 0;
    if (d.sellability === 'high') highCount++;
    if (d.isRarity) rarityCount++;
    if (d.sellability === 'low') lowCount++;
  });

  if (statTotalValue) statTotalValue.textContent = `${sumRec} €`;
  if (statPriceRange) statPriceRange.textContent = `Spanne: ${sumMin} – ${sumMax} €`;
  if (statHighDemand) statHighDemand.textContent = String(highCount);
  if (statRarities) statRarities.textContent = String(rarityCount);
  if (statLowDemand) statLowDemand.textContent = String(lowCount);

  if (totalCount === 0) {
    batchEmptyState.classList.remove('hidden');
    batchFilterBar.classList.add('hidden');
    btnClearBatchAll.classList.add('hidden');
    batchItemsList.innerHTML = '';
    return;
  }

  batchEmptyState.classList.add('hidden');
  batchFilterBar.classList.remove('hidden');
  btnClearBatchAll.classList.remove('hidden');

  // Filtern
  let filtered = [...batchItems];
  if (currentBatchFilter === 'high') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.sellability === 'high');
  } else if (currentBatchFilter === 'rarity') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.isRarity);
  } else if (currentBatchFilter === 'low') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.sellability === 'low');
  }

  // Sortieren
  const sortMode = batchSortSelect ? batchSortSelect.value : 'score_desc';
  filtered.sort((a, b) => {
    // Laufende/Queued immer oben zeigen
    if (a.status !== 'done' && b.status === 'done') return -1;
    if (a.status === 'done' && b.status !== 'done') return 1;
    if (a.status !== 'done' && b.status !== 'done') return b.createdAt - a.createdAt;

    const da = a.data;
    const db = b.data;
    if (sortMode === 'score_desc') {
      return (db.sellabilityScore || 0) - (da.sellabilityScore || 0) || (db.recommendedPrice || 0) - (da.recommendedPrice || 0);
    }
    if (sortMode === 'price_desc') {
      return (db.recommendedPrice || 0) - (da.recommendedPrice || 0);
    }
    if (sortMode === 'price_asc') {
      return (da.recommendedPrice || 0) - (db.recommendedPrice || 0);
    }
    return b.createdAt - a.createdAt;
  });

  batchItemsList.innerHTML = filtered
    .map((item) => {
      if (item.status === 'queued' || item.status === 'analyzing') {
        return `
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3.5 animate-pulse">
            <img src="${item.image.dataUrl}" class="w-16 h-16 rounded-xl object-cover border border-slate-700 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="text-xs font-bold text-emerald-400">
                ${item.status === 'analyzing' ? '🔍 KI-Agent prüft Artikel, Nachfrage & Preis...' : '⏳ In Warteschlange...'}
              </div>
              <div class="text-[11px] text-slate-400 mt-1">Wird automatisch im Hintergrund verarbeitet</div>
            </div>
          </div>
        `;
      }

      if (item.status === 'error') {
        return `
          <div class="bg-rose-950/30 border border-rose-800/60 rounded-2xl p-3.5 flex items-center gap-3.5">
            <img src="${item.image.dataUrl}" class="w-16 h-16 rounded-xl object-cover border border-rose-800 shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="text-xs font-bold text-rose-300">Analyse fehlgeschlagen</div>
              <div class="text-[11px] text-rose-400 truncate mt-0.5">${escapeHtml(item.errorMsg || '')}</div>
            </div>
            <button type="button" data-action="retry" data-id="${item.id}" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white">
              Neu versuchen
            </button>
            <button type="button" data-action="delete" data-id="${item.id}" class="p-1.5 text-slate-400 hover:text-rose-400">✕</button>
          </div>
        `;
      }

      const d = item.data;
      const badgeHtml =
        d.sellability === 'high'
          ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🔥 Sehr gefragt (${d.sellabilityScore}/10)</span>`
          : d.sellability === 'medium'
          ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">👍 Solide (${d.sellabilityScore}/10)</span>`
          : `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">🐢 Schwer verkäuflich (${d.sellabilityScore}/10)</span>`;

      const rarityHtml = d.isRarity
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/25 text-purple-300 border border-purple-500/40">💎 RARITÄT / SAMMLER</span>`
        : '';

      const confidenceHtml = d.identificationConfidence === 'niedrig'
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30" title="Die KI ist sich bei der Identifikation unsicher – bitte prüfen oder ein Foto vom Etikett/der Unterseite nachreichen">⚠️ Erkennung unsicher</span>`
        : d.identificationConfidence === 'mittel'
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-400">Erkennung: mittel</span>`
        : '';

      return `
        <div class="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 space-y-3 transition">
          <div class="flex items-start gap-3.5">
            <img src="${item.image.dataUrl}" class="w-20 h-20 rounded-xl object-cover border border-slate-700 shrink-0" />
            <div class="flex-1 min-w-0 space-y-1">
              <div class="flex flex-wrap items-center gap-1.5">
                ${badgeHtml}
                ${rarityHtml}
                ${confidenceHtml}
                <span class="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">${escapeHtml(d.sellingStrategy)}</span>
              </div>
              <h3 class="font-bold text-sm text-white leading-snug">${escapeHtml(d.itemName)}</h3>
              <p class="text-xs text-slate-400 leading-relaxed">${escapeHtml(d.sellabilityReason)}</p>
            </div>
            <div class="text-right shrink-0">
              <div class="text-base sm:text-lg font-extrabold text-emerald-400">${d.recommendedPrice} €</div>
              <div class="text-[10px] text-slate-400">${d.minPrice}–${d.maxPrice} €</div>
              <div class="text-[10px] ${d.priceFromWebSearch ? 'text-emerald-500' : 'text-slate-500'}" title="${d.priceFromWebSearch ? 'Preis mit Live-Websuche ermittelt' : 'Preis von der KI geschätzt – ohne Live-Marktdaten'}">${d.priceFromWebSearch ? 'Web-geprüft' : 'KI-Schätzung'}</div>
              <div class="text-[10px] text-teal-400 font-medium mt-0.5">${escapeHtml(d.bestPlatform)}</div>
            </div>
          </div>

          <!-- Direkt-Aktionen pro Karte -->
          <div class="pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <div class="flex items-center gap-1.5">
              <button
                type="button"
                data-action="launch"
                data-id="${item.id}"
                class="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition"
              >
                <span>📲 Kopieren & Inserieren</span>
              </button>
              <button
                type="button"
                data-action="open-detail"
                data-id="${item.id}"
                class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition"
              >
                <span>Text / Details ansehen</span>
              </button>
            </div>
            <button
              type="button"
              data-action="delete"
              data-id="${item.id}"
              class="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 text-xs transition"
              title="Aus Dashboard entfernen"
            >
              Löschen
            </button>
          </div>
        </div>
      `;
    })
    .join('');
}

// Klick-Aktionen auf den Dashboard-Karten
if (batchItemsList) {
  batchItemsList.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    const item = batchItems.find((i) => i.id === id);
    if (!item) return;

    if (action === 'delete') {
      batchItems = batchItems.filter((i) => i.id !== id);
      saveBatchToStorage();
      renderBatchDashboard();
      return;
    }

    if (action === 'retry') {
      item.status = 'queued';
      item.errorMsg = null;
      saveBatchToStorage();
      renderBatchDashboard();
      runBatchAgentQueue();
      return;
    }

    if (action === 'open-detail' && item.data) {
      // Übertrage Artikel in die Detail-Ansicht zum Bearbeiten / 1-Klick-Kopieren
      const d = item.data;
      uploadedImages = [item.image];
      renderImagePreviews();
      renderResult(
        {
          priceAndRarityAnalysis: `${d.sellabilityReason}\n\nEmpfohlene Strategie: ${d.sellingStrategy}\nPreisspanne: ${d.minPrice} € bis ${d.maxPrice} € (Empfehlung: ${d.recommendedPrice} €)`,
          hasRarityWarning: d.isRarity,
          title: d.title,
          description: d.description,
          attributes: {
            'Empfohlener Preis': `${d.recommendedPrice} € VB`,
            'Verkaufschance': `${d.sellabilityScore} / 10 (${d.sellingStrategy})`,
            'Kategorie / Marke': d.category
          }
        },
        null,
        d.usedModel,
        false
      );
      switchMainTab('single');
      return;
    }

    if (action === 'launch' && item.data) {
      const d = item.data;
      outputTitle.value = d.title;
      outputDescription.value = d.description;
      window.lastRecommendedPrice = String(d.recommendedPrice || '');
      await copyAllToAndroidClipboardHistory();
      const meta = PLATFORM_META[currentPlatform];
      setTimeout(() => {
        window.open(meta.createUrl, '_blank');
      }, 450);
    }
  });
}
