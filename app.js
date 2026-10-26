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
const githubPatInput = document.getElementById('githubPatInput');
const btnTestGithubPat = document.getElementById('btnTestGithubPat');
const githubPatStatusHint = document.getElementById('githubPatStatusHint');
const apiKeyStatusDot = document.getElementById('apiKeyStatusDot');
const activeProviderHeaderLabel = document.getElementById('activeProviderHeaderLabel');
const btnLockAdmin = document.getElementById('btnLockAdmin');
const adminAuthModal = document.getElementById('adminAuthModal');
const adminAuthForm = document.getElementById('adminAuthForm');
const adminAuthPasswordInput = document.getElementById('adminAuthPasswordInput');
const adminAuthError = document.getElementById('adminAuthError');
const btnCancelAdminAuth = document.getElementById('btnCancelAdminAuth');
const btnSubmitAdminAuth = document.getElementById('btnSubmitAdminAuth');

// Einladungscode & Friends-Beta DOM-Elemente
const inviteCodeInput = document.getElementById('inviteCodeInput');
const btnActivateInviteCode = document.getElementById('btnActivateInviteCode');
const btnClearInviteCode = document.getElementById('btnClearInviteCode');
const inviteCodeStatusBadge = document.getElementById('inviteCodeStatusBadge');
const inviteShareBox = document.getElementById('inviteShareBox');
const inviteRemainingHint = document.getElementById('inviteRemainingHint');
const btnCopyInviteShareLink = document.getElementById('btnCopyInviteShareLink');

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
      { id: 'auto', label: '✨ Automatisch (schnellstes freies Gemini-Modell)' },
      { id: 'gemini-2.5-flash-lite', label: 'gemini-2.5-flash-lite (Ultra-schnell & stabil)' },
      { id: 'gemini-flash-lite-latest', label: 'gemini-flash-lite-latest' },
      { id: 'gemma-3-27b-it', label: 'gemma-3-27b-it (Separates Kontingent, kein 503)' }
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

// Initialize Icons, Magic-Link Sync, Auth & Settings
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  checkAndImportUrlHashSync();
  checkAndImportOAuthRedirect();
  initAuthSystem();
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

function getGithubPat() {
  return (localStorage.getItem('sellmate_github_pat') || '').trim();
}

function getInviteCode() {
  return (localStorage.getItem('sellmate_invite_code') || '').trim().toUpperCase();
}

function isInviteModeActive() {
  return Boolean(getInviteCode());
}

function hasAiAccess() {
  return Boolean(getApiKey()) || isInviteModeActive();
}

function hasSearchAccess() {
  return Boolean(getTavilyApiKey()) || (isInviteModeActive() && localStorage.getItem('sellmate_invite_has_tavily') === 'true');
}

function saveInviteStatus({ code, remainingCredits, totalCredits, label, hasServerTavily = true }) {
  if (code) localStorage.setItem('sellmate_invite_code', String(code).trim().toUpperCase());
  if (typeof remainingCredits === 'number') localStorage.setItem('sellmate_invite_remaining', String(remainingCredits));
  if (typeof totalCredits === 'number') localStorage.setItem('sellmate_invite_total', String(totalCredits));
  if (label) localStorage.setItem('sellmate_invite_label', label);
  localStorage.setItem('sellmate_invite_has_tavily', String(Boolean(hasServerTavily)));
  updateApiKeyIndicator();
  renderInviteCodeUI();
}

function clearInviteStatus() {
  localStorage.removeItem('sellmate_invite_code');
  localStorage.removeItem('sellmate_invite_remaining');
  localStorage.removeItem('sellmate_invite_total');
  localStorage.removeItem('sellmate_invite_label');
  localStorage.removeItem('sellmate_invite_has_tavily');
  updateApiKeyIndicator();
  renderInviteCodeUI();
}

const FALLBACK_VERCEL_PROXY_URL = 'https://sellmate-ai.vercel.app/api/proxy-ai';

async function callProxyApi(bodyObj, signal = undefined) {
  const payloadWithPat = {
    ...bodyObj,
    clientGithubPat: getGithubPat() || undefined
  };

  // Wenn auf github.io gehostet, direkt die Vercel-Proxy-URL ansprechen
  const isGithubPages = window.location.hostname.endsWith('github.io');
  const primaryUrl = isGithubPages ? FALLBACK_VERCEL_PROXY_URL : '/api/proxy-ai';

  let res;
  try {
    res = await fetch(primaryUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify(payloadWithPat)
    });
  } catch (netErr) {
    // Falls relativer Aufruf scheitert (z.B. lokale Dev-Umgebung oder Domain-Mismatch), Fallback auf Vercel
    if (primaryUrl !== FALLBACK_VERCEL_PROXY_URL) {
      res = await fetch(FALLBACK_VERCEL_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal,
        body: JSON.stringify(payloadWithPat)
      });
    } else {
      throw netErr;
    }
  }

  // Falls relativer Pfad 404 liefert (z.B. lokaler statischer Server), Fallback auf Vercel
  if (res.status === 404 && primaryUrl !== FALLBACK_VERCEL_PROXY_URL) {
    res = await fetch(FALLBACK_VERCEL_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: JSON.stringify(payloadWithPat)
    });
  }

  return res;
}

// Meldet jeden Fehler automatisch als Ticket (über Server-Proxy an GitHub Issues & Vercel)
async function reportErrorTicket({ category = 'App-Error', title = '', message = '', extra = {} }) {
  const details = {
    category,
    title: title || message,
    message,
    inviteCode: getInviteCode() || null,
    device: typeof getDeviceShortName === 'function' ? getDeviceShortName() : navigator.userAgent,
    url: window.location.href,
    timestamp: new Date().toISOString(),
    ...extra
  };

  console.error('[SellMate Auto-Ticket]', details);

  // 1. Falls lokales GitHub PAT vorhanden -> auch direkt an GitHub Diagnose-Issue melden
  if (getGithubPat() && typeof sendGitHubTelemetryReport === 'function') {
    sendGitHubTelemetryReport({
      mode: `Auto-Ticket (${category})`,
      status: 'ERROR',
      summary: `**${title || category}:** \`${message}\``
    }).catch(() => {});
  }

  // 2. An den Server-Proxy melden (nutzt GITHUB_PAT aus Vercel Env für alle Nutzer/Freunde)
  try {
    const res = await callProxyApi({
      action: 'report_error',
      payload: details
    });
    const data = await res.json().catch(() => ({}));
    if (data?.ticket?.url) {
      console.log('[SellMate Auto-Ticket erstellt]', data.ticket.url);
    }
    return data?.ticket || null;
  } catch (_) {
    return null;
  }
}

async function verifyInviteCodeWithServer(code, showToastMsg = false) {
  const clean = String(code || '').trim().toUpperCase();
  if (!clean) return { valid: false, error: 'Bitte gib einen Code ein.' };

  try {
    const res = await callProxyApi({ inviteCode: clean, action: 'status' });
    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.valid) {
      const err = data.error || `Code-Prüfung fehlgeschlagen (HTTP ${res.status})`;
      if (inviteCodeStatusBadge) {
        inviteCodeStatusBadge.textContent = '⚠️ Fehler (Ticket erstellt)';
        inviteCodeStatusBadge.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40';
      }
      if (showToastMsg) showToast(`Fehler: ${err}`);
      await reportErrorTicket({
        category: 'Invite-Code',
        title: `Invite-Code Fehler (${clean})`,
        message: err,
        extra: { httpStatus: res.status, serverResponse: data }
      });
      return { valid: false, error: err };
    }

    saveInviteStatus({
      code: clean,
      remainingCredits: data.remainingCredits,
      totalCredits: data.totalCredits,
      label: data.label,
      hasServerTavily: data.hasServerTavily
    });

    if (showToastMsg) {
      showToast(`✓ Einladungscode "${clean}" aktiv (${data.remainingCredits} / ${data.totalCredits} Analysen)!`);
    }
    return { valid: true, data };
  } catch (err) {
    const msg = `Verbindungsfehler zum Server-Proxy: ${err.message}`;
    if (showToastMsg) showToast(msg);
    await reportErrorTicket({
      category: 'Invite-Network',
      title: `Proxy nicht erreichbar (${clean})`,
      message: msg
    });
    return { valid: false, error: msg };
  }
}

function renderInviteCodeUI() {
  const code = getInviteCode();
  const remaining = localStorage.getItem('sellmate_invite_remaining');
  const total = localStorage.getItem('sellmate_invite_total');
  const label = localStorage.getItem('sellmate_invite_label') || '';

  if (inviteCodeInput) {
    inviteCodeInput.value = code;
  }

  if (code) {
    if (inviteCodeStatusBadge) {
      inviteCodeStatusBadge.textContent = remaining ? `🟢 Aktiv: ${remaining} / ${total || 50} frei` : `🟢 Aktiv (${code})`;
      inviteCodeStatusBadge.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
    }
    if (btnClearInviteCode) btnClearInviteCode.classList.remove('hidden');
    if (inviteShareBox) inviteShareBox.classList.remove('hidden');
    if (inviteRemainingHint) {
      inviteRemainingHint.textContent = `🎟️ ${remaining || '?'} von ${total || '?'} Analysen übrig${label ? ` (${label})` : ''}`;
    }
  } else {
    if (inviteCodeStatusBadge) {
      inviteCodeStatusBadge.textContent = 'Kein Code aktiv';
      inviteCodeStatusBadge.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-900 border border-white/10 text-slate-400';
    }
    if (btnClearInviteCode) btnClearInviteCode.classList.add('hidden');
    if (inviteShareBox) inviteShareBox.classList.add('hidden');
  }
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

// Merkt sich abgekündigte Modelle (HTTP 404), damit sie nie wieder Zeit kosten
function getDeadGeminiModels() {
  try {
    return new Set(JSON.parse(localStorage.getItem('sellmate_dead_gemini_models') || '["gemini-2.5-flash","gemini-2.0-flash-exp"]'));
  } catch (_) {
    return new Set(['gemini-2.5-flash', 'gemini-2.0-flash-exp']);
  }
}

function markGeminiModelDead(modelName) {
  const dead = getDeadGeminiModels();
  dead.add(modelName);
  localStorage.setItem('sellmate_dead_gemini_models', JSON.stringify([...dead]));
  if (localStorage.getItem('sellmate_last_good_model_gemini') === modelName) {
    localStorage.removeItem('sellmate_last_good_model_gemini');
  }
}

// Fragt die echte Modell-Liste für Gemini ab
async function fetchAvailableModelsForKey(apiKey) {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || `Fehler beim Abrufen der Modell-Liste (${res.status})`);
  }

  const deadModels = getDeadGeminiModels();

  const allModels = (data.models || [])
    .filter((m) => (m.supportedGenerationMethods || []).includes('generateContent'))
    .map((m) => m.name.replace(/^models\//, ''))
    .filter((name) => {
      const lower = name.toLowerCase();
      if (deadModels.has(name)) return false;
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
        !lower.includes('1.5') &&
        lower !== 'gemini-2.5-flash'
      );
    });

  // Priorisiere schnelle, hochverfügbare Flash-Lite & Gemma-Vision Modelle (1-2s Antwortzeit statt 503/Timeout!)
  const scoreModel = (name) => {
    const n = name.toLowerCase();
    if (n === 'gemini-2.5-flash-lite' || n === 'gemini-3.1-flash-lite-preview' || n === 'gemini-flash-lite-latest') return 120;
    if (n.includes('flash-lite') && !n.includes('8b')) return 115;
    if (n.startsWith('gemma-4') || n === 'gemma-3-27b-it') return 108;
    if (n.includes('2.0-flash') && !n.includes('exp') && !n.includes('lite')) return 102;
    if (n.includes('flash') && !n.includes('lite') && !n.includes('latest') && !n.includes('3.8') && !n.includes('8b')) return 95;
    if (n === 'gemini-flash-latest' || n === 'gemini-3.8-flash') return 75;
    if (n.includes('pro') && !n.includes('exp') && !n.includes('preview')) return 70;
    if (n.startsWith('gemma-3')) return 60;
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
  renderInviteCodeUI();
  updateApiKeyIndicator();

  // Bei vorhandenem Einladungscode im Hintergrund Status/Credits prüfen
  if (getInviteCode()) {
    verifyInviteCodeWithServer(getInviteCode(), false).catch(() => {});
  }
}

function updateApiKeyIndicator() {
  const inviteCode = getInviteCode();
  const activeProv = getActiveProvider();
  const hasKey = Boolean(getProviderApiKey(activeProv));
  const hasTavily = Boolean(getTavilyApiKey());
  const meta = PROVIDERS[activeProv] || PROVIDERS.neuralwatt;
  const btnTavilyQuickStatus = document.getElementById('btnTavilyQuickStatus');

  if (inviteCode && !hasKey) {
    const remaining = localStorage.getItem('sellmate_invite_remaining');
    if (activeProviderHeaderLabel) {
      activeProviderHeaderLabel.textContent = remaining ? `🎟️ ${remaining} Credits` : '🎟️ Invite aktiv';
    }
    apiKeyStatusDot.className = 'w-2 h-2 rounded-full bg-emerald-400';
    if (btnTavilyQuickStatus) {
      btnTavilyQuickStatus.textContent = '🟢 Cloud-Websuche aktiv';
      btnTavilyQuickStatus.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition';
    }
    return;
  }

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

  if (btnTavilyQuickStatus) {
    if (hasTavily) {
      btnTavilyQuickStatus.textContent = '🟢 Tavily-Key aktiv';
      btnTavilyQuickStatus.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 transition';
    } else {
      btnTavilyQuickStatus.textContent = '🟠 Tavily-Key fehlt (Hier eintragen)';
      btnTavilyQuickStatus.className = 'px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 animate-pulse transition';
    }
  }
}

// Event Listeners für Einladungscodes (Freunde-Beta)
if (btnActivateInviteCode) {
  btnActivateInviteCode.addEventListener('click', async () => {
    const val = (inviteCodeInput?.value || '').trim().toUpperCase();
    if (!val) {
      showToast('Bitte einen Code eingeben');
      return;
    }
    btnActivateInviteCode.disabled = true;
    btnActivateInviteCode.textContent = 'Prüfe...';
    try {
      await verifyInviteCodeWithServer(val, true);
    } finally {
      btnActivateInviteCode.disabled = false;
      btnActivateInviteCode.textContent = 'Aktivieren';
    }
  });
}

if (btnClearInviteCode) {
  btnClearInviteCode.addEventListener('click', () => {
    clearInviteStatus();
    if (inviteCodeInput) inviteCodeInput.value = '';
    showToast('Einladungscode entfernt');
  });
}

if (btnCopyInviteShareLink) {
  btnCopyInviteShareLink.addEventListener('click', () => {
    const code = getInviteCode() || (inviteCodeInput?.value || '').trim();
    if (!code) {
      showToast('Bitte zuerst einen Code aktivieren');
      return;
    }
    const base = window.location.href.split('#')[0].split('?')[0];
    const link = `${base}#invite=${encodeURIComponent(code)}`;
    copyToClipboard(link, `Einladungs-Link für "${code}" kopiert!`);
  });
}

const btnTavilyQuickStatusEl = document.getElementById('btnTavilyQuickStatus');
if (btnTavilyQuickStatusEl) {
  btnTavilyQuickStatusEl.addEventListener('click', () => {
    openAdminModal('providers');
    setTimeout(() => {
      if (tavilyApiKeyInput) tavilyApiKeyInput.focus();
    }, 150);
  });
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
  if (githubPatInput) {
    githubPatInput.value = getGithubPat();
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

let pendingAdminTargetTab = 'providers';

function isAdminUnlocked() {
  return sessionStorage.getItem('sellmate_admin_unlocked') === 'true';
}

function lockAdmin() {
  sessionStorage.removeItem('sellmate_admin_unlocked');
  if (settingsModal) settingsModal.classList.add('hidden');
  if (adminAuthModal) adminAuthModal.classList.add('hidden');
  showToast('🔒 Admin-Bereich gesperrt.');
}

function requestAdminAccess(targetTab = 'providers') {
  pendingAdminTargetTab = targetTab || 'providers';
  if (isAdminUnlocked()) {
    openAdminModal(pendingAdminTargetTab);
  } else {
    openAdminAuthModal();
  }
}

function openAdminAuthModal() {
  if (!adminAuthModal) {
    openAdminModal(pendingAdminTargetTab);
    return;
  }
  if (adminAuthPasswordInput) {
    adminAuthPasswordInput.value = '';
  }
  if (adminAuthError) {
    adminAuthError.classList.add('hidden');
    adminAuthError.textContent = '';
  }
  adminAuthModal.classList.remove('hidden');
  setTimeout(() => {
    if (adminAuthPasswordInput) adminAuthPasswordInput.focus();
  }, 100);
}

async function verifyAndUnlockAdmin(password) {
  if (!password) {
    if (adminAuthError) {
      adminAuthError.textContent = 'Bitte gib das Admin-Passwort ein.';
      adminAuthError.classList.remove('hidden');
    }
    return;
  }

  if (adminAuthError) adminAuthError.classList.add('hidden');
  if (btnSubmitAdminAuth) {
    btnSubmitAdminAuth.disabled = true;
    btnSubmitAdminAuth.innerHTML = '<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i><span>Prüfe...</span>';
    if (window.lucide) lucide.createIcons();
  }

  try {
    const res = await callProxyApi({
      action: 'verify_admin',
      payload: { password }
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.valid) {
      sessionStorage.setItem('sellmate_admin_unlocked', 'true');
      if (adminAuthModal) adminAuthModal.classList.add('hidden');
      openAdminModal(pendingAdminTargetTab || 'providers');
      showToast('🔓 Admin-Bereich entsperrt!');
    } else {
      if (adminAuthError) {
        adminAuthError.textContent = data.error || 'Ungültiges Admin-Passwort.';
        adminAuthError.classList.remove('hidden');
      }
      if (adminAuthPasswordInput) {
        adminAuthPasswordInput.focus();
        adminAuthPasswordInput.select();
      }
    }
  } catch (err) {
    if (adminAuthError) {
      adminAuthError.textContent = 'Verbindungsfehler bei der Passwortprüfung.';
      adminAuthError.classList.remove('hidden');
    }
  } finally {
    if (btnSubmitAdminAuth) {
      btnSubmitAdminAuth.disabled = false;
      btnSubmitAdminAuth.innerHTML = '<i data-lucide="unlock" class="w-3.5 h-3.5"></i><span>Entsperren</span>';
      if (window.lucide) lucide.createIcons();
    }
  }
}

if (btnAdminPanel) {
  btnAdminPanel.addEventListener('click', () => requestAdminAccess('providers'));
}

if (btnUnlockOrStatus) {
  btnUnlockOrStatus.addEventListener('click', () => {
    if (!getApiKey() && getVaultString() && pinUnlockModal) {
      pinUnlockModal.classList.remove('hidden');
      pinUnlockInput.focus();
    } else {
      requestAdminAccess('providers');
    }
  });
}

if (btnLockAdmin) {
  btnLockAdmin.addEventListener('click', lockAdmin);
}

if (btnCancelAdminAuth && adminAuthModal) {
  btnCancelAdminAuth.addEventListener('click', () => {
    adminAuthModal.classList.add('hidden');
  });
}

if (adminAuthForm) {
  adminAuthForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = adminAuthPasswordInput ? adminAuthPasswordInput.value.trim() : '';
    verifyAndUnlockAdmin(val);
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

if (githubPatInput) {
  githubPatInput.addEventListener('input', () => {
    localStorage.setItem('sellmate_github_pat', githubPatInput.value.trim());
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
  if (githubPatInput) {
    localStorage.setItem('sellmate_github_pat', githubPatInput.value.trim());
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
    githubPat: getGithubPat(),
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
  if (bundle.githubPat) localStorage.setItem('sellmate_github_pat', bundle.githubPat);
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
  if (githubPatInput && githubPatInput.value.trim()) {
    localStorage.setItem('sellmate_github_pat', githubPatInput.value.trim());
  }
  const bundle = collectConfigBundle();
  const jsonStr = JSON.stringify(bundle);
  const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
  const base = window.location.href.split('#')[0];
  return `${base}#sync=${encoded}`;
}

function checkAndImportUrlHashSync() {
  const hash = window.location.hash || '';
  const searchParams = new URLSearchParams(window.location.search);
  const queryInvite = searchParams.get('invite');

  // 1. Einladungslink für Freunde (#invite=CODE oder ?invite=CODE)
  if (hash.startsWith('#invite=') || queryInvite) {
    const rawCode = queryInvite || hash.replace(/^#invite=/, '');
    const code = decodeURIComponent(rawCode).trim().toUpperCase();
    if (code) {
      history.replaceState(null, '', window.location.pathname);
      verifyInviteCodeWithServer(code, true).then(() => {
        updateApiKeyIndicator();
        renderInviteCodeUI();
      });
      return;
    }
  }

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
    setTimeout(() => requestAdminAccess('providers'), 200);
  } else {
    // Falls kein Key auf dem Gerät ist, aber ein verschlüsselter PIN-Tresor existiert -> PIN-Abfrage öffnen
    setTimeout(() => {
      if (!hasAiAccess() && getVaultString() && pinUnlockModal) {
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
    // Versand- & Abholfloskeln überall entfernen, sofern der Nutzer sie nicht selbst in die Notizen geschrieben hat
    if (!userWantsShipping && /(versand m[öo]glich|abholung oder versand|versand oder abholung|abholung vor ort|versand gegen aufpreis|bezahlung per|zahlung per|tierfreier nichtraucherhaushalt)/i.test(trimmed)) {
      return false;
    }
    if (/^(vb\s*\/?\s*festpreis|festpreis nach absprache)/i.test(trimmed)) {
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
// AUTOMATISCHE LIVE-DIAGNOSE & FEHLER-MELDUNG ÜBER GITHUB API (MIT PAT)
// ============================================================================

const GITHUB_DIAG_REPO = 'krautbaron/sellmate-ai';
const GITHUB_DIAG_ISSUE_TITLE = '📡 SellMate Live-Diagnose & Fehler-Feed';

function getDeviceShortName() {
  const ua = navigator.userAgent || '';
  if (/android/i.test(ua)) return '📱 Android Smartphone';
  if (/iphone|ipad|ipod/i.test(ua)) return '📱 iPhone / iOS';
  return '💻 Desktop / PC';
}

async function ensureGithubCollectorIssue(pat) {
  const cachedNum = localStorage.getItem('sellmate_gh_diag_issue_num');
  if (cachedNum) return Number(cachedNum);

  const headers = {
    Authorization: `Bearer ${pat}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json'
  };

  // Suche nach bestehendem Diagnose-Issue
  const listRes = await fetch(`https://api.github.com/repos/${GITHUB_DIAG_REPO}/issues?state=open&per_page=30`, { headers });
  if (listRes.ok) {
    const issues = await listRes.json();
    const found = (issues || []).find((i) => i.title === GITHUB_DIAG_ISSUE_TITLE);
    if (found?.number) {
      localStorage.setItem('sellmate_gh_diag_issue_num', String(found.number));
      return found.number;
    }
  }

  // Falls noch keins existiert -> neu anlegen
  const createRes = await fetch(`https://api.github.com/repos/${GITHUB_DIAG_REPO}/issues`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      title: GITHUB_DIAG_ISSUE_TITLE,
      body: 'Automatischer Live-Diagnose-Feed von **SellMate AI** (Handy & PC Tests über GitHub Pages).\nHier landen alle Analyse-Protokolle und Fehlermeldungen in Echtzeit.'
    })
  });
  const created = await createRes.json().catch(() => ({}));
  if (!createRes.ok || !created.number) {
    throw new Error(created?.message || `GitHub API HTTP ${createRes.status}`);
  }
  localStorage.setItem('sellmate_gh_diag_issue_num', String(created.number));
  return created.number;
}

async function sendGitHubTelemetryReport({ mode = 'Single-Item', status = 'OK', summary = '', logs = null }) {
  const pat = getGithubPat();
  if (!pat) return null;

  try {
    const logLines = (logs || diagLogEntries || [])
      .map((x) => `[+${x.elapsed}s] [${String(x.type || 'info').toUpperCase()}] ${x.message}`)
      .join('\n');

    const totalSec = diagSessionStart ? ((performance.now() - diagSessionStart) / 1000).toFixed(1) : '-';
    const device = getDeviceShortName();
    const activeProv = getActiveProvider();
    const model = getProviderModel(activeProv);
    const hasTavily = Boolean(getTavilyApiKey());
    const icon = status === 'ERROR' ? '🚨 FEHLER' : '✅ OK';

    const commentBody = [
      `### ${icon} • ${mode} (${device})`,
      `- **Zeitpunkt:** \`${new Date().toISOString()}\``,
      `- **Dauer:** \`${totalSec}s\` | **Provider:** \`${activeProv} (${model})\` | **Tavily:** \`${hasTavily ? 'aktiv' : 'aus'}\``,
      `- **Plattform:** \`${PLATFORM_META[currentPlatform]?.name || currentPlatform}\``,
      summary ? `- **Ergebnis / Meldung:** ${summary}` : '',
      '',
      '```text',
      logLines || '(Keine Detail-Logs)',
      '```'
    ]
      .filter(Boolean)
      .join('\n');

    const headers = {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    };

    let issueNum = await ensureGithubCollectorIssue(pat);
    let commentRes = await fetch(`https://api.github.com/repos/${GITHUB_DIAG_REPO}/issues/${issueNum}/comments`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ body: commentBody })
    });

    // Falls das gecachte Issue gelöscht wurde (404), einmal neu anlegen
    if (commentRes.status === 404) {
      localStorage.removeItem('sellmate_gh_diag_issue_num');
      issueNum = await ensureGithubCollectorIssue(pat);
      commentRes = await fetch(`https://api.github.com/repos/${GITHUB_DIAG_REPO}/issues/${issueNum}/comments`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ body: commentBody })
      });
    }

    if (!commentRes.ok) {
      const errData = await commentRes.json().catch(() => ({}));
      throw new Error(errData?.message || `HTTP ${commentRes.status}`);
    }
    return await commentRes.json();
  } catch (err) {
    console.warn('[SellMate GitHub-Diagnose Fehler]', err.message);
    return null;
  }
}

if (btnTestGithubPat) {
  btnTestGithubPat.addEventListener('click', async () => {
    const pat = (githubPatInput?.value || '').trim();
    if (!pat) {
      if (githubPatStatusHint) {
        githubPatStatusHint.innerHTML = '<span class="text-amber-400">Bitte zuerst dein GitHub PAT (Token) in das Feld eintragen.</span>';
      }
      return;
    }
    localStorage.setItem('sellmate_github_pat', pat);
    if (githubPatStatusHint) {
      githubPatStatusHint.textContent = 'Sende Test-Protokoll an GitHub (krautbaron/sellmate-ai)...';
    }
    const res = await sendGitHubTelemetryReport({
      mode: 'Verbindungstest',
      status: 'OK',
      summary: 'GitHub PAT Live-Diagnose erfolgreich verbunden!',
      logs: [{ elapsed: '0.00', type: 'success', message: `Test-Ping von ${getDeviceShortName()} erfolgreich.` }]
    });
    if (res && res.html_url) {
      if (githubPatStatusHint) {
        githubPatStatusHint.innerHTML = `<span class="text-emerald-400 font-semibold">✓ Verbunden! Alle Handy- & PC-Tests werden jetzt live übertragen.</span>`;
      }
      showToast('✓ GitHub Live-Diagnose erfolgreich getestet!');
    } else {
      if (githubPatStatusHint) {
        githubPatStatusHint.innerHTML = '<span class="text-rose-400">Fehler: Bitte prüfe, ob das Token Schreibrechte für "public_repo" / "Issues" hat.</span>';
      }
    }
  });
}

// Fange auch unerwartete JavaScript-Laufzeitfehler global ab und erstelle automatisch Tickets
window.addEventListener('error', (event) => {
  const errMsg = `${event.message || 'Unbekannter JS-Fehler'} (${event.filename || ''}:${event.lineno || ''})`;
  sendGitHubTelemetryReport({
    mode: 'Global JS Error',
    status: 'ERROR',
    summary: errMsg
  });
  reportErrorTicket({
    category: 'JS-Runtime-Error',
    title: event.message || 'Global JS Error',
    message: errMsg,
    extra: { filename: event.filename, lineno: event.lineno, colno: event.colno }
  });
});

window.addEventListener('unhandledrejection', (event) => {
  const msg = event.reason?.message || String(event.reason || 'Unhandled Promise Rejection');
  sendGitHubTelemetryReport({
    mode: 'Unhandled Rejection',
    status: 'ERROR',
    summary: msg
  });
  reportErrorTicket({
    category: 'Unhandled-Rejection',
    title: msg.slice(0, 75),
    message: msg
  });
});

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

async function executeUnifiedVisionRequest({ systemPrompt, userPrompt, images = [], maxTokens = 1400, timeoutMs = 24000, allowGeminiSearch = false, deductCredit = true, onStatusUpdate = null }) {
  // Wenn ein Einladungscode aktiv ist und kein eigener API-Key hinterlegt wurde -> über Vercel Cloud-Proxy leiten
  if (isInviteModeActive() && !getApiKey()) {
    if (onStatusUpdate) {
      onStatusUpdate('Sende Anfrage an sicheren Cloud-Proxy...');
    }
    addDiagLog(`Cloud-Proxy Vision-Request (Code: "${getInviteCode()}", Bilder: ${images.length}, Credit-Abzug: ${deductCredit})...`);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs || 35000);
    try {
      const res = await callProxyApi(
        {
          inviteCode: getInviteCode(),
          action: 'vision',
          deductCredit,
          payload: {
            systemPrompt,
            userPrompt,
            images,
            maxTokens,
            allowGeminiSearch
          }
        },
        controller.signal
      );

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const errMsg = data?.error || `Server-Proxy Fehler (HTTP ${res.status})`;
        reportErrorTicket({
          category: 'Vision-Proxy',
          title: `Vision-Proxy Fehler (HTTP ${res.status})`,
          message: errMsg,
          extra: { httpStatus: res.status, serverResponse: data }
        });
        throw buildApiError(errMsg, res.status);
      }

      if (data.creditStatus && typeof data.creditStatus.remainingCredits === 'number') {
        saveInviteStatus({
          code: getInviteCode(),
          remainingCredits: data.creditStatus.remainingCredits,
          totalCredits: data.creditStatus.totalCredits,
          label: data.creditStatus.label,
          hasServerTavily: localStorage.getItem('sellmate_invite_has_tavily') === 'true'
        });
      }

      addDiagLog(`Cloud-Proxy OK: Modell ${data.usedModel}, Rest-Credits: ${localStorage.getItem('sellmate_invite_remaining') || '-'}`, 'success');

      return {
        rawText: data.rawText,
        usedModel: data.usedModel,
        usedSearch: Boolean(data.usedSearch),
        groundingMetadata: data.groundingMetadata || null
      };
    } catch (err) {
      addDiagLog(`Cloud-Proxy Fehler: ${err.message}`, 'error');
      reportErrorTicket({
        category: 'Vision-Proxy',
        title: `Vision-Proxy Exception: ${err.message}`,
        message: err.message
      });
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }

  const providersToTry = await resolveProviderCandidates();
  if (providersToTry.length === 0) {
    throw new Error('Kein API-Key oder Einladungscode hinterlegt. Bitte oben rechts auf den Admin-Button (⚙️) klicken und einen Code oder API-Key speichern.');
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
      const deadSet = getDeadGeminiModels();
      const lastGoodGem = localStorage.getItem('sellmate_last_good_model_gemini');
      try {
        const real = await getGeminiModelsCached(apiKey);
        if (chosenModel && chosenModel !== 'auto' && real.includes(chosenModel) && !deadSet.has(chosenModel)) {
          geminiModels.push(chosenModel);
        } else if (lastGoodGem && real.includes(lastGoodGem) && !deadSet.has(lastGoodGem)) {
          geminiModels.push(lastGoodGem);
        }
        real.forEach((m) => {
          if (!geminiModels.includes(m) && !deadSet.has(m)) geminiModels.push(m);
        });
      } catch (_) {
        geminiModels = chosenModel !== 'auto' ? [chosenModel] : ['gemini-2.5-flash-lite', 'gemini-flash-lite-latest', 'gemma-3-27b-it', 'gemini-2.0-flash'];
      }

      addDiagLog(`Gemini Kandidaten: ${geminiModels.slice(0, 5).join(', ')}`);

      const parts = [
        ...(images || []).map((img) => ({
          inline_data: { mime_type: img.mimeType, data: img.base64 }
        })),
        { text: userPrompt }
      ];

      // Probiere bis zu 5 echte (nicht-404) Modelle
      let realAttempts = 0;
      for (const candidateModel of geminiModels) {
        if (realAttempts >= 5) break;
        if (getDeadGeminiModels().has(candidateModel)) continue;

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
            realAttempts++;
            noteFailure(`Gemini (${candidateModel})`, buildApiError('Leere Antwort', 200));
          } else {
            if (resCall.status === 404) {
              // 404 (Modell abgekündigt) dauerhaft sperren und NICHT als Fehlversuch zählen!
              markGeminiModelDead(candidateModel);
              addDiagLog(`Modell ${candidateModel} (404) dauerhaft übersprungen`, 'warn');
              continue;
            }
            realAttempts++;
            const msg = resCall.data?.error?.message || `HTTP ${resCall.status}`;
            noteFailure(`Gemini (${candidateModel})`, buildApiError(`${resCall.status} ${msg}`, resCall.status, resCall.retryAfterSec));
          }
        } catch (err) {
          realAttempts++;
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
  // Falls kein eigener Key, aber Invite-Code vorhanden ist -> über Vercel Cloud-Proxy suchen
  if (!tavilyKey && isInviteModeActive()) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const t0 = performance.now();
    try {
      const res = await callProxyApi(
        {
          inviteCode: getInviteCode(),
          action: 'tavily',
          payload: { query, maxResults }
        },
        controller.signal
      );
      const data = await res.json().catch(() => ({}));
      const dur = ((performance.now() - t0) / 1000).toFixed(2);
      if (!res.ok) {
        const msg = data?.error || data?.detail || `Tavily Proxy HTTP ${res.status}`;
        addDiagLog(`Tavily Proxy Fehler (${dur}s): ${msg}`, 'warn');
        reportErrorTicket({
          category: 'Tavily-Proxy',
          title: `Tavily Proxy Fehler (HTTP ${res.status})`,
          message: msg,
          extra: { query: query.slice(0, 100) }
        });
        throw new Error(msg);
      }
      addDiagLog(`Tavily Proxy Treffer "${query.slice(0, 42)}..." -> ${(data.results || []).length} Treffer in ${dur}s`, 'success');
      return data;
    } catch (err) {
      if (err.name === 'AbortError') {
        addDiagLog(`Tavily Proxy Timeout (>8s) für "${query.slice(0, 35)}..."`, 'warn');
      }
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 7500);
  const t0 = performance.now();
  try {
    // search_depth: 'basic' & include_answer: false antwortet in ~0.6-1.0s statt 4-8s!
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        api_key: tavilyKey,
        query,
        search_depth: 'basic',
        include_answer: false,
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
  const hasAccess = Boolean(tavilyKey) || (isInviteModeActive() && localStorage.getItem('sellmate_invite_has_tavily') === 'true');
  if (!hasAccess) return null;

  try {
    if (onStatusUpdate) {
      onStatusUpdate('Stufe 1/3: Reine Optik-Analyse für Websuche...');
    }
    addDiagLog('Stufe 1/3: Extrahiere reine Bild-Merkmale (ohne Namens-Raten)...');

    const queryGenPrompt = `Analysiere alle ${images.length} Foto(s) dieses Artikels (z.B. Foto 1: Vorderseite/Gerät, Foto 2: Typenschild/Unterseite/Etikett; Notiz: "${notes}") rein optisch, um präzise Suchbegriffe für eine Websuche zu bilden.

STRENGE REGELN:
- TYPENSCHILD & MODELLNUMMERN ZUERST: Wenn auf einem der Fotos (insb. Rückseite/Unterseite/Typenschild) Markenname, Produktname oder Modell-/Teilenummer (Model / M/N / P/N / Type / A-Nummer, z.B. "Logitech MX Master 2S 810-005839", "M-R0084", "Model A2663") lesbar ist, schreibe NUR Marke + Modellname + Modell-/Teilenummer (MAXIMAL 6 Wörter!) in "readableBrandOrText"!
- IGNORIERE MÜLL-TEXT AUF TYPENSCHILDERN: Schreibe NIEMALS "Made in China", "Rating 5.0V 300mA", "TA 2017-822", Seriennummern (S/N), Schalterzahlen ("1 2 3") oder Prüfsiegel (CE, EAC, FCC, Approved) in die Suchbegriffe!
- KEIN HINTERGRUND / KEIN TISCH: Beschreibe NIEMALS den Untergrund oder Hintergrund (NICHT "liegt auf Holztisch", NICHT "auf Holzoberfläche", NICHT "in der Hand")!
- RATE NIEMALS EINE MARKE WIE "McDonald's", "Happy Meal", "Disney", "Ü-Ei" ODER EINEN CHARAKTERNAMEN (wie "Leo Lausemaus", "Simba"), wenn dieser Name NICHT buchstäblich als lesbarer Text auf dem Artikel abgedruckt ist!
- WICHTIG BEI FIGUREN: Kleine handbemalte Kunststoff-Figuren, die auf einem Sockel, Podest oder einem Stapel Bücher/Blöcken stehen, sind fast immer "Tonie Hörfiguren" (Tonies). Wenn eine Figur auf flachen rechteckigen Stapeln steht, sind das "Bücher" (Bücherstapel) und ein flacher Gegenstand in der Pfote ist ein "Buch / Brief" mit "Stift / Feder".

Antworte AUSSCHLIESSLICH als kurzes, valides JSON-Objekt mit diesen Feldern:
{
  "isFigureOnBase": true/false (true NUR bei einer Spielfigur/Hörfigur; false bei Elektronik, Kleidung, Werkzeug, Haushalt etc.),
  "readableBrandOrText": "NUR Marke, Modellname & Modell-/Teilenummer vom Typenschild, MAXIMAL 6 Wörter (z.B. 'Logitech MX Master 2S 810-005839'; leer '', wenn nichts lesbar)",
  "mainSubject": "Was für ein Artikel / welche Tierart ist es? (1-2 Wörter ohne Eigennamen, z.B. 'Funkmaus', 'USB-C Ladegerät', 'Löwe')",
  "poseAndProps": "MAXIMAL 5 Stichwörter! Bei Figuren: Pose & Gegenstände (z.B. 'steht auf Stapel Bücher hält Buch Stift'). Bei Technik/Alltag: nur Farbe & wichtigstes Merkmal (z.B. 'schwarz ergonomisch Daumenrad')",
  "conditionNotes": "Sichtbarer optischer Zustand / Gebrauchsspuren auf den Fotos"
}`;

    const step1 = await executeUnifiedVisionRequest({
      systemPrompt: 'Du bist ein rein optischer Bild-Analyst. Du rätst NIEMALS Marken (kein McDonald\'s/Happy Meal!) oder Eigennamen, sondern extrahierst knappe, präzise Suchbegriffe als JSON.',
      userPrompt: queryGenPrompt,
      images,
      maxTokens: 200,
      timeoutMs: 25000,
      allowGeminiSearch: false,
      deductCredit: false,
      onStatusUpdate
    });

    const match = (step1.rawText || '').match(/\{[\s\S]*\}/);
    if (!match) {
      addDiagLog('Stufe 1 lieferte kein JSON – fahre ohne Tavily fort', 'warn');
      return null;
    }
    const qObj = JSON.parse(match[0]);

    const isFig = Boolean(qObj.isFigureOnBase);
    // Entferne halluzinierte Marken, Seriennummern (S/N), Prüfsiegel (CE/EAC), Spannungswerte ("Rating 5.0V 300mA"), "Made in China" sowie Tisch-/Hintergrund-Wörter
    const stripHallucinations = (s) =>
      String(s || '')
        .replace(/mcdonald'?s|happy\s*meal|lausemaus|sendung mit der maus|ü-ei|überraschungsei/gi, '')
        .replace(/\b(s\/n|sn|serial|p\/n|m\/n|model|type)\s*:?/gi, '')
        .replace(/\b(approved|ce|eac|tp\s*by|rohs|fcc|weee|ul|tüv|gs)\b/gi, '')
        .replace(/\bmade\s+in\s+[a-zäöüß]+/gi, '')
        .replace(/\brating\b[\s\d\.,vmawkz\/\-+=]*/gi, '')
        .replace(/\bta\s*\d{4}[\-\/]\d+/gi, '')
        .replace(/\b\d+(\.\d+)?\s*(v|ma|mah|khz|mhz|ghz)\b/gi, '')
        .replace(/\b1\s+2\s+3\b/g, '')
        .replace(/\b(liegt|steht|sitzt)?\s*auf\s*(einem|einer|dem|der)?\s*(holztisch|holzoberfläche|tisch|boden|untergrund|schreibtisch|oberfläche)\b/gi, '')
        .replace(/[,;()]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const readTxt = stripHallucinations(qObj.readableBrandOrText).split(/\s+/).slice(0, 7).join(' ');
    const subj = stripHallucinations(qObj.mainSubject).split(/\s+/).slice(0, 3).join(' ');
    // Falls das Modell bei einer Figur Bücher als "Blöcke" bezeichnet hat, ergänze "Bücher" für die Suche
    let props = stripHallucinations(qObj.poseAndProps).split(/\s+/).slice(0, 6).join(' ');
    if (isFig && /bl[öo]ck|stapel/i.test(props) && !/b[üu]ch/i.test(props)) {
      props = `${props} Bücher`;
    }
    const cond = (qObj.conditionNotes || '').trim();

    // Wenn wir bereits einen klaren Modellnamen / Teilenummer vom Typenschild haben (>= 2 Wörter),
    // lassen wir generische Optik-Beschreibungen weg, damit Tavily in ~1s statt 6s exakte Treffer liefert!
    const hasStrongTypeplate = readTxt.split(/\s+/).filter(Boolean).length >= 2;

    // Baue 3 parallele, halluzinationsfreie Suchanfragen (kompakt & schnell):
    // 1. Reine Optik- & Typenschild-Suche (OHNE 'Figur' bei normalen Geräten!)
    const pureVisualQuery = [
      isFig ? 'Figur' : '',
      readTxt,
      subj,
      hasStrongTypeplate && !isFig ? '' : props,
      notes
    ]
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(/\s+/)
      .slice(0, 10)
      .join(' ');
    // 2. Gezielte Tonie-Hörfigur-Prüfung (nur falls es eine Figur ist)
    const tonieQuery = isFig || /löwe|bär|hase|drache|figur/i.test(subj)
      ? ['Tonie Hörfigur', subj, props, notes].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim()
      : '';
    const shortProps = hasStrongTypeplate ? '' : props.split(/\s+/).slice(0, 2).join(' ');
    // 3. Preis- & Modell-Suche
    const priceQuery = [isFig ? 'Tonie' : readTxt, subj, shortProps, 'gebraucht Preis Kleinanzeigen']
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (!pureVisualQuery) return null;

    addDiagLog(`Optik (${images.length} Foto(s)): Text/Typenschild="${readTxt || '-'}", Motiv="${subj}", Details="${props}", Figur=${isFig}`, 'info');
    addDiagLog(`Tavily Suche 1 (Optik): "${pureVisualQuery}"`, 'info');
    if (tonieQuery) addDiagLog(`Tavily Suche 2 (Tonie-Check): "${tonieQuery}"`, 'info');

    if (onStatusUpdate) {
      onStatusUpdate(`Stufe 2/3: Tavily Live-Websuche nach "${(tonieQuery || pureVisualQuery).slice(0, 44)}..."`);
    }

    const searchPromises = [
      runTavilySearch(pureVisualQuery, tavilyKey, 4),
      tonieQuery ? runTavilySearch(tonieQuery, tavilyKey, 5).catch(() => ({ results: [] })) : Promise.resolve({ results: [] }),
      runTavilySearch(priceQuery, tavilyKey, 4).catch(() => ({ results: [] }))
    ];

    const [visSearch, tonieSearch, priceSearch] = await Promise.all(searchPromises);

    const allResults = [
      ...(tonieSearch.results || []),
      ...(visSearch.results || []),
      ...(priceSearch.results || [])
    ];
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
      .slice(0, 7)
      .map((r, idx) => `[Quelle ${idx + 1}] Titel: ${r.title}\nURL: ${r.url}\nInhalt: ${(r.content || '').slice(0, 380)}`)
      .join('\n\n');

    const visualSummary = `Hauptmotiv: ${subj} | Pose & Merkmale: ${props}${readTxt ? ` | Ablesbarer Text: ${readTxt}` : ''}${cond ? ` | Optischer Zustand: ${cond}` : ''}`;

    const contextText = `
=== OPTISCHE BILD-ANALYSE DES FOTOS ===
${visualSummary}

=== ECHTE LIVE-WEBRECHERCHE (TAVILY SEARCH ERGEBNISSE) ===
Suchanfrage Optik: "${pureVisualQuery}"
Tavily Antwort Optik: ${visSearch.answer || 'Siehe Quellen'}
${tonieQuery ? `\nSuchanfrage Tonies-Hörfiguren: "${tonieQuery}"\nTavily Antwort Tonies: ${tonieSearch.answer || 'Siehe Quellen'}\n` : ''}
Suchanfrage Marktpreis & Rarität: "${priceQuery}"
Tavily Antwort Preis: ${priceSearch.answer || 'Siehe Quellen'}

Gefundene Web-Quellen & Produktdetails:
${snippets}

STRENGE ANWEISUNG FÜR DEN ABGLEICH VON FOTO & WEB-QUELLEN:
1. Vergleiche das Foto direkt mit den oben gelieferten Tavily-Web-Quellen!
2. ERFINDE NIEMALS "McDonald's Happy Meal" oder eine andere Marke, die nicht in den Web-Quellen steht!
3. Wenn in den Web-Quellen eine passende Tonie-Hörfigur gefunden wurde (z.B. bei einem Löwen auf einem Stapel Bücher/Blöcke mit Buch/Brief und Stift in den Pfoten -> Tonie Hörfigur "Die Geschichte vom Löwen, der nicht schreiben konnte" / "Der Löwe, der nicht lesen/schreiben konnte" von Martin Baltscheit), dann übernimm EXAKT diesen offiziellen Produktnamen und die echten Details zum Hörspiel!
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
      idQuery: tonieQuery || pureVisualQuery,
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
  if (!hasAiAccess()) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst einen Einladungscode oder API-Key eingeben');
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
    const hasSearch = hasSearchAccess();
    addDiagLog(`Start: ${uploadedImages.length} Foto(s) (${totalKb} KB), Plattform: ${PLATFORM_META[currentPlatform].name}, Suche: ${hasSearch ? 'aktiv ✓' : 'aus'}`);

    const systemPrompt = getSystemPrompt(currentPlatform);
    const useSearch = toggleGoogleSearch.checked;
    const loadingSubtext = document.getElementById('loadingSubtext');

    // Falls Tavily API-Key oder Cloud-Proxy vorhanden und Web-Recherche aktiv: 2-Stufen Live-Recherche ausführen!
    let tavilyData = null;
    if (useSearch && hasSearch) {
      tavilyData = await performTavilyVisualResearch({
        images: uploadedImages,
        notes,
        onStatusUpdate: (msg) => {
          if (loadingSubtext) loadingSubtext.textContent = msg;
        }
      });
    } else if (useSearch && !hasSearch) {
      addDiagLog('WARNUNG: Kein Tavily API-Key hinterlegt – Modell analysiert ohne Live-Webdaten.', 'warn');
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
      timeoutMs: 35000,
      allowGeminiSearch: useSearch && !tavilyData,
      deductCredit: true,
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
    sendGitHubTelemetryReport({
      mode: 'Einzel-Artikel',
      status: 'OK',
      summary: `Erkannt: **${parsed.title || 'Artikel'}** | Preis: \`${parsed.attributes?.['Empfohlener Preis'] || '-'}\` | Modell: \`${badgeModel}\``
    });
  } catch (err) {
    addDiagLog(`Abbruch mit Fehler: ${err.message}`, 'error');
    finishDiagSession('Fehler');
    errorText.textContent = err.message || 'Unbekannter Fehler bei der Anfrage.';
    errorSection.classList.remove('hidden');
    sendGitHubTelemetryReport({
      mode: 'Einzel-Artikel',
      status: 'ERROR',
      summary: `Fehler: \`${err.message || 'Unbekannter Fehler'}\``
    });
    reportErrorTicket({
      category: 'Single-Item-Analysis',
      title: err.message ? err.message.slice(0, 75) : 'Analyse-Fehler',
      message: err.message || 'Unbekannter Fehler bei der Einzel-Analyse',
      extra: { platform: currentPlatform, imagesCount: uploadedImages.length }
    });
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
    tabBtnBatch.className = 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
    tabBtnSingle.className = 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all text-slate-400 hover:text-slate-200';
  } else {
    batchDashboardView.classList.add('hidden');
    singleItemView.classList.remove('hidden');
    tabBtnSingle.className = 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
    tabBtnBatch.className = 'flex-1 py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all text-slate-400 hover:text-slate-200';
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
    const currentOwner = (typeof getCurrentUserId === 'function') ? getCurrentUserId() : 'guest';
    if (changedItem) {
      if (!changedItem.ownerId) changedItem.ownerId = currentOwner;
      store.put(changedItem);
    } else {
      const allExisting = await idbRequest(store.getAll());
      const currentIds = new Set(batchItems.map((i) => i.id));
      (allExisting || []).forEach((item) => {
        const itemOwner = item.ownerId || 'guest';
        if (itemOwner === currentOwner && !currentIds.has(item.id)) {
          store.delete(item.id);
        }
      });
      batchItems.forEach((item) => {
        if (!item.ownerId) item.ownerId = currentOwner;
        store.put(item);
      });
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
    const currentOwner = (typeof getCurrentUserId === 'function') ? getCurrentUserId() : 'guest';
    const rawList = all || [];
    batchItems = rawList
      .filter((item) => {
        const itemOwner = item.ownerId || 'guest';
        if (currentOwner === 'guest') {
          return itemOwner === 'guest';
        }
        return itemOwner === currentOwner;
      })
      .sort((a, b) => b.createdAt - a.createdAt);

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

// Multi-Foto Sammel-State für den aktuellen Artikel (z.B. 1. Foto Gerät + 2. Foto Typenschild)
let batchStagingImages = [];
let targetBatchItemIdForPhotoAdd = null;
let editingLinkForItemId = null;
let expandedTextForItemId = null;
const selectedBatchItemIds = new Set();

const batchStagingBox = document.getElementById('batchStagingBox');
const batchStagingGrid = document.getElementById('batchStagingGrid');
const batchStagingCount = document.getElementById('batchStagingCount');
const batchStagingAddCameraInput = document.getElementById('batchStagingAddCameraInput');
const batchStagingAddGalleryInput = document.getElementById('batchStagingAddGalleryInput');
const btnCommitStagingItem = document.getElementById('btnCommitStagingItem');
const btnClearStaging = document.getElementById('btnClearStaging');
const batchAddPhotoToItemInput = document.getElementById('batchAddPhotoToItemInput');
const batchSearchInput = document.getElementById('batchSearchInput');
const batchStagingNoteInput = document.getElementById('batchStagingNoteInput');
const imageLightboxModal = document.getElementById('imageLightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxHint = document.getElementById('lightboxHint');
const btnCloseLightbox = document.getElementById('btnCloseLightbox');
let isLightboxZoomed = false;
const btnExportBatchBackup = document.getElementById('btnExportBatchBackup');
const importBatchBackupInput = document.getElementById('importBatchBackupInput');
const bundleActionBar = document.getElementById('bundleActionBar');
const bundleCountText = document.getElementById('bundleCountText');
const bundlePriceText = document.getElementById('bundlePriceText');
const btnCancelBundle = document.getElementById('btnCancelBundle');
const btnCreateBundleItem = document.getElementById('btnCreateBundleItem');
const btnCloudPushBatch = document.getElementById('btnCloudPushBatch');
const btnCloudPullBatch = document.getElementById('btnCloudPullBatch');
const cloudSyncStatusText = document.getElementById('cloudSyncStatusText');

// Tag-Chips im Kamera-Sammel-Dock für schnelle Zustands-/Zubehörnotizen
document.querySelectorAll('.staging-tag-chip').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!batchStagingNoteInput) return;
    const tag = btn.dataset.stagetag;
    const cur = batchStagingNoteInput.value.trim();
    if (!cur) {
      batchStagingNoteInput.value = tag;
    } else if (!cur.includes(tag)) {
      batchStagingNoteInput.value = `${cur}, ${tag}`;
    }
    batchStagingNoteInput.focus();
  });
});

function getBatchItemImages(item) {
  if (Array.isArray(item.images) && item.images.length > 0) return item.images;
  if (item.image) return [item.image];
  return [];
}

function renderBatchStagingBox() {
  if (!batchStagingBox || !batchStagingGrid) return;
  if (batchStagingImages.length === 0) {
    batchStagingBox.classList.add('hidden');
    batchStagingGrid.innerHTML = '';
    return;
  }

  batchStagingBox.classList.remove('hidden');
  if (batchStagingCount) {
    batchStagingCount.textContent = String(batchStagingImages.length);
  }

  batchStagingGrid.innerHTML = batchStagingImages
    .map(
      (img, idx) => `
      <div class="relative w-20 h-20 rounded-xl overflow-hidden border border-emerald-500/50 shrink-0">
        <img src="${img.dataUrl}" class="w-full h-full object-cover" alt="Foto ${idx + 1}" />
        <span class="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/75 text-[10px] font-bold text-emerald-300">
          ${idx === 0 ? '1. Artikel' : `${idx + 1}. Detail/Typ`}
        </span>
        <button type="button" data-stageidx="${idx}" class="remove-stage-img absolute top-1 right-1 w-5 h-5 rounded-full bg-black/80 text-white text-[10px] flex items-center justify-center hover:bg-rose-600">
          ✕
        </button>
      </div>
    `
    )
    .join('');
}

if (batchStagingGrid) {
  batchStagingGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.remove-stage-img');
    if (!btn) return;
    const idx = parseInt(btn.dataset.stageidx, 10);
    batchStagingImages.splice(idx, 1);
    renderBatchStagingBox();
  });
}

function commitStagedItemToQueue() {
  if (batchStagingImages.length === 0) return;
  const imagesCopy = [...batchStagingImages];
  const userNotes = (batchStagingNoteInput?.value || '').trim();
  batchStagingImages = [];
  if (batchStagingNoteInput) batchStagingNoteInput.value = '';
  renderBatchStagingBox();

  batchItems.unshift({
    id: 'item_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    createdAt: Date.now(),
    ownerId: (typeof getCurrentUserId === 'function') ? getCurrentUserId() : 'guest',
    status: 'queued',
    image: imagesCopy[0],
    images: imagesCopy,
    userNotes,
    data: null,
    errorMsg: null
  });

  saveBatchToStorage();
  renderBatchDashboard();
  runBatchAgentQueue();
  showToast(`Artikel (${imagesCopy.length} Foto${imagesCopy.length > 1 ? 's' : ''}) wird analysiert!`);
}

if (btnCommitStagingItem) {
  btnCommitStagingItem.addEventListener('click', () => {
    commitStagedItemToQueue();
  });
}

if (btnClearStaging) {
  btnClearStaging.addEventListener('click', () => {
    batchStagingImages = [];
    if (batchStagingNoteInput) batchStagingNoteInput.value = '';
    renderBatchStagingBox();
  });
}

// Kamera-Aufnahme: Sammelt erst für den aktuellen Artikel (damit man noch ein 2. Foto vom Typenschild machen kann!)
async function handleBatchCameraCapture(files, startNewItem = false) {
  if (!hasAiAccess()) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst einen Einladungscode oder API-Key hinterlegen');
    return;
  }

  const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
  if (!imageFiles.length) return;

  // Wenn der Nutzer auf "Neuen Artikel fotografieren" tippt und noch ein vorheriger Artikel in der Sammelbox lag -> vorherigen automatisch abschicken!
  if (startNewItem && batchStagingImages.length > 0) {
    commitStagedItemToQueue();
  }

  for (const file of imageFiles) {
    const compressed = await compressImage(file, 800, 0.76);
    batchStagingImages.push(compressed);
  }

  renderBatchStagingBox();
  showToast(`Foto ${batchStagingImages.length} aufgenommen – Typenschild dazunehmen oder auf "Fertig" tippen!`);
}

// Galerie-Auswahl: Mehrere Fotos aus der Galerie als einzelne Artikel in die Hintergrund-Queue werfen
async function enqueueBatchFiles(files) {
  if (!hasAiAccess()) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst einen Einladungscode oder API-Key hinterlegen');
    return;
  }

  const imageFiles = Array.from(files).filter((f) => f.type.startsWith('image/'));
  if (!imageFiles.length) return;

  showToast(`${imageFiles.length} Foto(s) zur Agenten-Warteschlange hinzugefügt!`);

  for (const file of imageFiles) {
    // Komprimiere auf 800px (~50 KB) für blitzschnelle Hintergrund-Verarbeitung & Storage
    const compressed = await compressImage(file, 800, 0.76);
    batchItems.unshift({
      id: 'item_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      createdAt: Date.now(),
      ownerId: (typeof getCurrentUserId === 'function') ? getCurrentUserId() : 'guest',
      status: 'queued',
      image: compressed,
      images: [compressed],
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
    handleBatchCameraCapture(e.target.files, true);
    batchCameraInput.value = '';
  });
}

if (batchStagingAddCameraInput) {
  batchStagingAddCameraInput.addEventListener('change', (e) => {
    handleBatchCameraCapture(e.target.files, false);
    batchStagingAddCameraInput.value = '';
  });
}

if (batchStagingAddGalleryInput) {
  batchStagingAddGalleryInput.addEventListener('change', (e) => {
    handleBatchCameraCapture(e.target.files, false);
    batchStagingAddGalleryInput.value = '';
  });
}

if (batchAddPhotoToItemInput) {
  batchAddPhotoToItemInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files || []).filter((f) => f.type.startsWith('image/'));
    batchAddPhotoToItemInput.value = '';
    if (!files.length || !targetBatchItemIdForPhotoAdd) return;

    const item = batchItems.find((i) => i.id === targetBatchItemIdForPhotoAdd);
    targetBatchItemIdForPhotoAdd = null;
    if (!item) return;

    const existingImgs = getBatchItemImages(item);
    for (const file of files) {
      const compressed = await compressImage(file, 800, 0.76);
      existingImgs.push(compressed);
    }
    item.images = existingImgs;
    item.image = existingImgs[0];
    item.status = 'queued';
    item.errorMsg = null;

    await saveBatchToStorage(item);
    renderBatchDashboard();
    showToast(`Typenschild/Foto ergänzt (${existingImgs.length} Fotos) – analysiere neu!`);
    runBatchAgentQueue();
  });
}

if (batchGalleryInput) {
  batchGalleryInput.addEventListener('change', (e) => {
    const files = Array.from(e.target.files || []).filter((f) => f.type.startsWith('image/'));
    batchGalleryInput.value = '';
    if (!files.length) return;
    // Wenn 1 bis 4 Fotos gewählt werden: ins Staging-Dock legen (z.B. Gerät + Typenschild zusammen!)
    if (files.length <= 4) {
      handleBatchCameraCapture(files, true);
    } else {
      // Bei 5+ Fotos: Massen-Upload als Einzelartikel in die Queue
      enqueueBatchFiles(files);
    }
  });
}

if (btnClearBatchAll) {
  btnClearBatchAll.addEventListener('click', () => {
    if (!batchItems.length) return;
    const ok = confirm(`Möchtest du wirklich alle ${batchItems.length} Artikel unwiderruflich aus deinem Bestand löschen?`);
    if (!ok) return;
    batchItems = [];
    selectedBatchItemIds.clear();
    updateBundleActionBar();
    saveBatchToStorage();
    renderBatchDashboard();
    showToast('Bestand geleert');
  });
}

// Hintergrund-Agent: Arbeitet alle 'queued' Artikel der Reihe nach ab (mit Multi-Provider Support & Rate-Limit Schutz)
async function runBatchAgentQueue() {
  if (isBatchWorkerRunning) return;
  if (!hasAiAccess()) return;

  isBatchWorkerRunning = true;

  try {
    while (true) {
      const nextItem = batchItems.find((i) => i.status === 'queued');
      if (!nextItem) break;

      nextItem.status = 'analyzing';
      renderBatchDashboard();
      startDiagSession();

      try {
        const itemImages = getBatchItemImages(nextItem);
        const analysis = await analyzeSingleBatchItemWithAgent(itemImages, nextItem.userNotes || '');
        nextItem.status = 'done';
        nextItem.data = analysis;
        sendGitHubTelemetryReport({
          mode: `Batch-Agent (${itemImages.length} Foto${itemImages.length > 1 ? 's' : ''})`,
          status: 'OK',
          summary: `Erkannt: **${analysis.itemName}** (${analysis.recommendedPrice} € | Score ${analysis.sellabilityScore}/10) | Modell: \`${analysis.usedModel}\``
        });
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
        sendGitHubTelemetryReport({
          mode: 'Batch-Agent',
          status: 'ERROR',
          summary: `Fehler: \`${nextItem.errorMsg}\``
        });
        reportErrorTicket({
          category: 'Batch-Agent',
          title: nextItem.errorMsg.slice(0, 75),
          message: nextItem.errorMsg,
          extra: { itemId: nextItem.id, userNotes: nextItem.userNotes }
        });
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

async function analyzeSingleBatchItemWithAgent(imgArrayOrSingle, userNotes = '') {
  const itemImages = Array.isArray(imgArrayOrSingle) ? imgArrayOrSingle : [imgArrayOrSingle];
  const systemPrompt = getSystemPrompt(currentPlatform);

  // Wenn Tavily API-Key oder Cloud-Proxy hinterlegt ist, macht auch der Hintergrund-Agent für alle Fotos des Artikels die 2-Stufen-Webrecherche!
  let tavilyData = null;
  if (hasSearchAccess()) {
    tavilyData = await performTavilyVisualResearch({
      images: itemImages,
      notes: userNotes,
      onStatusUpdate: (msg) => {
        if (batchAgentStatusText) batchAgentStatusText.textContent = msg;
      }
    });
  }

  const batchPrompt = `
Du bist ein präziser Verkaufs- und Bewertungs-Agent für Gebrauchtwaren (${PLATFORM_META[currentPlatform].name}).
Analysiere alle ${itemImages.length} Foto(s) dieses Artikels (z.B. Vorderseite + Typenschild/Unterseite) und die beigefügten Web-Recherche-Ergebnisse exakt:
1. Identifiziere den genauen Artikel mit seinem EXAKTEN offiziellen Produktnamen/Modellnummer (Hersteller, genaues Modell laut Typenschild, Serie/Hörspieltitel).
${userNotes ? `WICHTIGE NUTZER-NOTIZ ZUM ARTIKEL/ZUSTAND: "${userNotes}" (Berücksichtige dies zwingend beim Preis und erwähne es ehrlich in der Beschreibung!).` : ''}
2. Bewerte die VERKÄUFLICHKEIT (Nachfrage am Gebrauchtmarkt):
   - "high" (Sehr gut verkäuflich / Schnelldreher, z.B. beliebte Tonies, Marken-Elektronik, Lego, gefragte Markenkleidung)
   - "medium" (Normal verkäuflich, braucht etwas Geduld oder guten Preis)
   - "low" (Schwer einzeln verkäuflich / Massenware, besser im Konvolut/Set oder zu verschenken)
3. Ermittle den realistischen Gebrauchtpreis in Euro (minPrice, maxPrice, recommendedPrice als Zahl) und prüfe auf RARITÄT / EOL (End-of-Life).
4. Erstelle direkt den fertigen Verkaufstitel und eine spezifische, verkaufsstarke Beschreibung mit echten Produktdetails (100% reiner Text OHNE Markdown, keine **, keine ###, Aufzählungen mit -, keine Versandfloskeln, kein Disclaimer).
${tavilyData ? '\n' + tavilyData.contextText + '\n' : ''}
Antworte AUSSCHLIESSLICH als valides JSON-Objekt mit diesen Feldern:
{
  "itemName": "Exakter offizieller Name & Modell des erkannten Artikels",
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
    images: itemImages,
    maxTokens: 1300,
    timeoutMs: 15000,
    allowGeminiSearch: false,
    deductCredit: true
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

// Filter, Search & Sort Events
document.querySelectorAll('.batch-filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    currentBatchFilter = btn.dataset.filter;
    document.querySelectorAll('.batch-filter-btn').forEach((b) => {
      if (b.dataset.filter === currentBatchFilter) {
        b.className = 'batch-filter-btn active px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shrink-0 transition';
      } else {
        b.className = 'batch-filter-btn px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900 border border-white/10 text-slate-300 hover:text-white shrink-0 transition';
      }
    });
    renderBatchDashboard();
  });
});

if (batchSortSelect) {
  batchSortSelect.addEventListener('change', () => renderBatchDashboard());
}

if (batchSearchInput) {
  batchSearchInput.addEventListener('input', () => renderBatchDashboard());
}

// Vollbild-Foto-Lightbox mit 2x-Zoom (Ideal zum Prüfen winziger Typenschild-Beschriftungen)
function openImageLightbox(src) {
  if (!imageLightboxModal || !lightboxImage || !src) return;
  isLightboxZoomed = false;
  lightboxImage.src = src;
  lightboxImage.style.transform = 'scale(1)';
  lightboxImage.className = 'max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 cursor-zoom-in transition-transform duration-200';
  if (lightboxHint) lightboxHint.textContent = '🔍 Bild antippen für 2x Zoom (Typenschild & Seriennummer)';
  imageLightboxModal.classList.remove('hidden');
}

function closeImageLightbox() {
  if (!imageLightboxModal) return;
  isLightboxZoomed = false;
  imageLightboxModal.classList.add('hidden');
  if (lightboxImage) {
    lightboxImage.src = '';
    lightboxImage.style.transform = 'scale(1)';
  }
}

if (lightboxImage) {
  lightboxImage.addEventListener('click', (e) => {
    e.stopPropagation();
    isLightboxZoomed = !isLightboxZoomed;
    if (isLightboxZoomed) {
      lightboxImage.style.transform = 'scale(2.2)';
      lightboxImage.className = 'max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 cursor-zoom-out transition-transform duration-200';
      if (lightboxHint) lightboxHint.textContent = '🔍 Nochmals tippen zum Verkleinern';
    } else {
      lightboxImage.style.transform = 'scale(1)';
      lightboxImage.className = 'max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10 cursor-zoom-in transition-transform duration-200';
      if (lightboxHint) lightboxHint.textContent = '🔍 Bild antippen für 2x Zoom (Typenschild & Seriennummer)';
    }
  });
}

if (btnCloseLightbox) {
  btnCloseLightbox.addEventListener('click', closeImageLightbox);
}
if (imageLightboxModal) {
  imageLightboxModal.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) closeImageLightbox();
  });
}

// JSON-Backup Export & Import für alle Artikel
if (btnExportBatchBackup) {
  btnExportBatchBackup.addEventListener('click', () => {
    if (!batchItems || batchItems.length === 0) {
      showToast('Keine Artikel zum Exportieren vorhanden');
      return;
    }
    const payload = {
      version: 'sellmate-backup-v1',
      exportedAt: new Date().toISOString(),
      itemCount: batchItems.length,
      items: batchItems
    };
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `sellmate-backup-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(`✓ Backup mit ${batchItems.length} Artikel(n) heruntergeladen`);
  });
}

if (importBatchBackupInput) {
  importBatchBackupInput.addEventListener('change', async () => {
    const file = importBatchBackupInput.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const importedItems = Array.isArray(parsed) ? parsed : Array.isArray(parsed?.items) ? parsed.items : null;
      if (!importedItems || importedItems.length === 0) {
        showToast('Ungültige oder leere Backup-Datei');
        importBatchBackupInput.value = '';
        return;
      }
      const existingMap = new Map(batchItems.map((i) => [i.id, i]));
      let addedOrUpdated = 0;
      importedItems.forEach((it) => {
        if (it && it.id) {
          existingMap.set(it.id, it);
          addedOrUpdated++;
        }
      });
      batchItems = Array.from(existingMap.values()).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      await saveBatchToStorage();
      renderBatchDashboard();
      showToast(`✓ ${addedOrUpdated} Artikel aus Backup wiederhergestellt!`);
    } catch (err) {
      showToast(`Backup-Import fehlgeschlagen: ${err?.message || err}`);
    }
    importBatchBackupInput.value = '';
  });
}

// Wandelt dataUrl zu File/Blob um und teilt über Web Share API bzw. bietet Download an
async function shareOrDownloadItemImages(item) {
  const imgs = getBatchItemImages(item);
  if (!imgs.length) {
    showToast('Keine Fotos vorhanden');
    return;
  }

  try {
    const files = [];
    for (let idx = 0; idx < imgs.length; idx++) {
      const im = imgs[idx];
      const res = await fetch(im.dataUrl);
      const blob = await res.blob();
      const ext = blob.type.includes('png') ? 'png' : 'jpg';
      const file = new File([blob], `sellmate_${item.id}_${idx + 1}.${ext}`, { type: blob.type || 'image/jpeg' });
      files.push(file);
    }

    if (navigator.canShare && navigator.canShare({ files })) {
      await navigator.share({
        files,
        title: item.data?.title || item.data?.itemName || 'SellMate Artikel',
        text: item.data?.description || ''
      });
      showToast('✓ Fotos erfolgreich geteilt!');
      return;
    }
  } catch (err) {
    if (err.name === 'AbortError') return; // Nutzer hat Teilen-Dialog geschlossen
    // Fallback auf Download
  }

  // Fallback: Einzel-Download (mit 250ms Pause, damit Browser-Pop-up-Blocker nicht blockieren)
  for (let idx = 0; idx < imgs.length; idx++) {
    const im = imgs[idx];
    const a = document.createElement('a');
    a.href = im.dataUrl;
    a.download = `sellmate_${(item.data?.itemName || 'artikel').replace(/[^a-z0-9]/gi, '_')}_${idx + 1}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    if (idx < imgs.length - 1) {
      await sleep(250);
    }
  }
  showToast(`✓ ${imgs.length} Foto(s) heruntergeladen!`);
}

// Konvolut- / Set-Aktionsleiste aktualisieren
function updateBundleActionBar() {
  if (!bundleActionBar || !bundleCountText || !bundlePriceText) return;
  const count = selectedBatchItemIds.size;
  if (count < 2) {
    bundleActionBar.classList.add('hidden');
    return;
  }
  bundleActionBar.classList.remove('hidden');
  bundleCountText.textContent = String(count);

  const selectedItems = batchItems.filter((i) => selectedBatchItemIds.has(i.id) && i.data);
  const sumRec = selectedItems.reduce((acc, i) => acc + (i.data?.recommendedPrice || 0), 0);
  const bundlePrice = Math.max(1, Math.round(sumRec * 0.85));
  bundlePriceText.textContent = `Set-Preis: ${bundlePrice} € (statt ${sumRec} € Einzelpreise, -15% Rabatt)`;
}

if (btnCancelBundle) {
  btnCancelBundle.addEventListener('click', () => {
    selectedBatchItemIds.clear();
    updateBundleActionBar();
    renderBatchDashboard();
  });
}

if (btnCreateBundleItem) {
  btnCreateBundleItem.addEventListener('click', async () => {
    const selectedItems = batchItems.filter((i) => selectedBatchItemIds.has(i.id) && i.data);
    if (selectedItems.length < 2) {
      showToast('Bitte mindestens 2 fertige Artikel auswählen');
      return;
    }

    const allImages = [];
    selectedItems.forEach((it) => {
      const imgs = getBatchItemImages(it);
      if (imgs[0]) allImages.push(imgs[0]);
    });

    const sumRec = selectedItems.reduce((acc, i) => acc + (i.data.recommendedPrice || 0), 0);
    const bundlePrice = Math.max(1, Math.round(sumRec * 0.85));
    const itemNamesList = selectedItems.map((i, idx) => `${idx + 1}. ${i.data.itemName} (Einzelwert: ${i.data.recommendedPrice} €)`).join('\n');

    const bundleItemName = `Set (${selectedItems.length} Artikel): ${selectedItems.map((i) => i.data.itemName).slice(0, 3).join(', ')}${selectedItems.length > 3 ? ' u.a.' : ''}`;
    const bundleTitle = `Set / Paket (${selectedItems.length}x): ${selectedItems.map((i) => i.data.itemName).slice(0, 2).join(' + ')}`;

    const bundleDescription = sanitizePlainTextDescription(
      `Verkaufe hier ein praktisches ${selectedItems.length}-teiliges Set / Konvolut im Paket:\n\n` +
      `Im Set enthalten:\n${itemNamesList}\n\n` +
      `Gesamter Einzelwert: ca. ${sumRec} €.\n` +
      `Komplett-Set-Preis: nur ${bundlePrice} € (Paket-Vorteil!).\n\n` +
      `Zustand siehe Originalfotos. Tierfreier Nichtraucherhaushalt. Bei Fragen gerne melden!`
    );

    const newBundleItem = {
      id: 'bundle_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      createdAt: Date.now(),
      ownerId: (typeof getCurrentUserId === 'function') ? getCurrentUserId() : 'guest',
      status: 'done',
      image: allImages[0] || null,
      images: allImages,
      userNotes: `Erstellt aus ${selectedItems.length} gebündelten Einzelartikeln`,
      data: {
        itemName: bundleItemName,
        identificationConfidence: 'hoch',
        priceFromWebSearch: false,
        category: 'Konvolut / Set',
        sellability: 'high',
        sellabilityScore: 9,
        sellabilityReason: `Attraktives Set-Angebot mit ${selectedItems.length} Artikeln und 15% Paket-Rabatt.`,
        sellingStrategy: 'Als Konvolut / Paket bündeln',
        isRarity: false,
        minPrice: Math.round(bundlePrice * 0.85),
        maxPrice: Math.round(bundlePrice * 1.15),
        recommendedPrice: bundlePrice,
        bestPlatform: PLATFORM_META[currentPlatform].name,
        title: bundleTitle,
        description: bundleDescription,
        usedModel: 'SellMate Set-Generator'
      }
    };

    // Quellartikel als 'im Set gebündelt' kennzeichnen, damit der Wert in der Statistik nicht doppelt gezählt wird
    selectedItems.forEach((it) => {
      it.isBundled = true;
      it.bundleParentId = newBundleItem.id;
    });

    batchItems.unshift(newBundleItem);
    selectedBatchItemIds.clear();
    updateBundleActionBar();
    await saveBatchToStorage();
    renderBatchDashboard();
    showToast(`✓ Set mit ${selectedItems.length} Artikeln erfolgreich erstellt!`);
  });
}

// 1-Klick GitHub Cloud-Sync für Handy ↔ PC
function compressDataUrl(dataUrl, maxDim = 120, quality = 0.5) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve({ dataUrl: canvas.toDataURL('image/jpeg', quality) });
    };
    img.onerror = () => resolve({ dataUrl });
    img.src = dataUrl;
  });
}

async function getOrCreateSyncIssue(repo, pat) {
  const listRes = await fetch(`https://api.github.com/repos/${repo}/issues?state=all&per_page=20`, {
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github.v3+json'
    }
  });
  if (listRes.ok) {
    const list = await listRes.json();
    const found = list.find((i) => (i.title || '').includes('SellMate Cloud-Inventory Sync'));
    if (found) return found.number;
  }
  const postRes = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: '☁️ SellMate Cloud-Inventory Sync',
      body: 'Initialisiere SellMate Cloud-Sync...'
    })
  });
  if (!postRes.ok) throw new Error(`GitHub HTTP ${postRes.status}`);
  const created = await postRes.json();
  return created.number;
}

async function createOptimizedSyncPayload(items) {
  let itemsToSync = items.map((it) => ({ ...it }));
  let payloadStr = JSON.stringify({
    version: 'sellmate-sync-v1',
    syncedAt: new Date().toISOString(),
    itemCount: itemsToSync.length,
    items: itemsToSync
  });

  // Unter 55 KB: direkt mit Original-Vorschaubildern senden
  if (payloadStr.length <= 55000) {
    return payloadStr;
  }

  // Falls größer als 55 KB: Bilder komprimieren (Micro-Thumbnails ~1.5 KB), damit das 65 KB GitHub Issue-Limit nie erreicht wird
  const compactItems = [];
  for (const it of items) {
    const clone = { ...it };
    const imgs = getBatchItemImages(it);
    if (imgs.length > 0 && imgs[0]?.dataUrl) {
      try {
        const micro = await compressDataUrl(imgs[0].dataUrl, 120, 0.5);
        clone.image = micro;
        clone.images = [micro];
      } catch (_) {
        clone.image = null;
        clone.images = [];
      }
    }
    compactItems.push(clone);
  }

  return JSON.stringify({
    version: 'sellmate-sync-v1',
    syncedAt: new Date().toISOString(),
    itemCount: compactItems.length,
    items: compactItems
  });
}

async function cloudPushBatchToGitHub() {
  const pat = localStorage.getItem('sellmate_diag_gh_pat');
  if (!pat) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst im Admin-Tab einen GitHub PAT hinterlegen');
    return;
  }
  const repo = localStorage.getItem('sellmate_diag_gh_repo') || 'krautbaron/sellmate-ai';

  if (!batchItems.length) {
    showToast('Keine Artikel zum Hochladen vorhanden');
    return;
  }

  if (cloudSyncStatusText) cloudSyncStatusText.textContent = '⏳ Lade Artikel-Bestand in GitHub Cloud hoch...';

  try {
    const payloadJson = await createOptimizedSyncPayload(batchItems);
    const bodyContent = `<!-- SELLMATE_INVENTORY_DATA_START -->\n\`\`\`json\n${payloadJson}\n\`\`\`\n<!-- SELLMATE_INVENTORY_DATA_END -->\n\n*Automatisch synchronisierter Artikel-Bestand (${batchItems.length} Artikel) via SellMate AI Cloud-Sync.*`;

    const issueNumber = await getOrCreateSyncIssue(repo, pat);

    const patchRes = await fetch(`https://api.github.com/repos/${repo}/issues/${issueNumber}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${pat}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: '☁️ SellMate Cloud-Inventory Sync',
        body: bodyContent
      })
    });
    if (!patchRes.ok) {
      throw new Error(`GitHub HTTP ${patchRes.status}`);
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (cloudSyncStatusText) cloudSyncStatusText.textContent = `✓ Zuletzt hochgeladen: Heute um ${timeStr} (${batchItems.length} Artikel, Issue #${issueNumber})`;
    showToast(`✓ ${batchItems.length} Artikel in die GitHub-Cloud gesichert!`);
  } catch (err) {
    if (cloudSyncStatusText) cloudSyncStatusText.textContent = `Fehler: ${err?.message || err}`;
    showToast(`Cloud-Upload fehlgeschlagen: ${err?.message || err}`);
  }
}

async function cloudPullBatchFromGitHub() {
  const pat = localStorage.getItem('sellmate_diag_gh_pat');
  if (!pat) {
    settingsModal.classList.remove('hidden');
    showToast('Bitte zuerst im Admin-Tab einen GitHub PAT hinterlegen');
    return;
  }
  const repo = localStorage.getItem('sellmate_diag_gh_repo') || 'krautbaron/sellmate-ai';

  if (cloudSyncStatusText) cloudSyncStatusText.textContent = '⏳ Lade Artikel-Bestand aus GitHub Cloud herunter...';

  try {
    const listRes = await fetch(`https://api.github.com/repos/${repo}/issues?state=all&per_page=20`, {
      headers: {
        Authorization: `Bearer ${pat}`,
        Accept: 'application/vnd.github.v3+json'
      }
    });

    if (!listRes.ok) {
      throw new Error(`GitHub HTTP ${listRes.status}`);
    }

    const list = await listRes.json();
    const issue = list.find((i) => (i.title || '').includes('SellMate Cloud-Inventory Sync'));

    if (!issue) {
      throw new Error('Noch kein Cloud-Backup vorhanden. Bitte zuerst auf dem anderen Gerät „Hochladen“ tippen.');
    }

    const rawBody = issue.body || '';
    const jsonMatch = rawBody.match(/```json\s*([\s\S]*?)\s*```/);
    if (!jsonMatch) {
      throw new Error(`Keine Bestandsdaten in Issue #${issue.number} gefunden.`);
    }

    const payload = JSON.parse(jsonMatch[1]);
    const incomingItems = Array.isArray(payload) ? payload : payload.items || [];
    if (!incomingItems.length) {
      throw new Error('Cloud-Bestand ist leer.');
    }

    const existingMap = new Map(batchItems.map((i) => [i.id, i]));
    let mergedCount = 0;
    incomingItems.forEach((it) => {
      if (it && it.id) {
        existingMap.set(it.id, it);
        mergedCount++;
      }
    });

    batchItems = Array.from(existingMap.values()).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    await saveBatchToStorage();
    renderBatchDashboard();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (cloudSyncStatusText) cloudSyncStatusText.textContent = `✓ Zuletzt synchronisiert: Heute um ${timeStr} (${batchItems.length} Artikel im Speicher)`;
    showToast(`✓ ${mergedCount} Artikel aus GitHub-Cloud synchronisiert!`);
  } catch (err) {
    if (cloudSyncStatusText) cloudSyncStatusText.textContent = `Fehler: ${err?.message || err}`;
    showToast(`Cloud-Download fehlgeschlagen: ${err?.message || err}`);
  }
}

if (btnCloudPushBatch) {
  btnCloudPushBatch.addEventListener('click', cloudPushBatchToGitHub);
}
if (btnCloudPullBatch) {
  btnCloudPullBatch.addEventListener('click', cloudPullBatchFromGitHub);
}

function renderBatchDashboard() {
  if (!batchItemsList) return;
  updateBundleActionBar();

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
  let listedCount = 0;
  let soldCount = 0;
  let soldRevenue = 0;

  doneItems.forEach((item) => {
    if (item.isBundled) return; // Nicht doppelt zählen, da der Wert bereits im gebündelten Set-Artikel enthalten ist!
    const d = item.data;
    sumRec += d.recommendedPrice || 0;
    sumMin += d.minPrice || d.recommendedPrice || 0;
    sumMax += d.maxPrice || d.recommendedPrice || 0;
    if (d.sellability === 'high') highCount++;
    if (d.isRarity) rarityCount++;
    if (d.sellability === 'low') lowCount++;
    if (item.isListed) listedCount++;
    if (item.isSold) {
      soldCount++;
      soldRevenue += Number(item.soldPrice || d.recommendedPrice || 0);
    }
  });

  if (statTotalValue) statTotalValue.textContent = `${sumRec} €`;
  if (statPriceRange) {
    if (doneItems.length > 0) {
      const soldPart = soldCount > 0 ? ` • 💰 ${soldCount} verkauft (${soldRevenue} €)` : '';
      statPriceRange.textContent = `Spanne: ${sumMin}–${sumMax} € • ${listedCount}/${doneItems.length} eingestellt${soldPart}`;
    } else {
      statPriceRange.textContent = `Spanne: ${sumMin} – ${sumMax} €`;
    }
  }
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

  // Filtern nach Status / Kategorie
  let filtered = [...batchItems];
  if (currentBatchFilter === 'open') {
    filtered = filtered.filter((i) => !i.isListed && !i.isSold);
  } else if (currentBatchFilter === 'listed') {
    filtered = filtered.filter((i) => Boolean(i.isListed) && !i.isSold);
  } else if (currentBatchFilter === 'sold') {
    filtered = filtered.filter((i) => Boolean(i.isSold));
  } else if (currentBatchFilter === 'high') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.sellability === 'high');
  } else if (currentBatchFilter === 'rarity') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.isRarity);
  } else if (currentBatchFilter === 'low') {
    filtered = filtered.filter((i) => i.status !== 'done' || i.data?.sellability === 'low');
  }

  // Live-Textsuche (durchsucht Titel, Name, Kategorie, Beschreibung, Notizen & Verkaufslink)
  const searchQuery = (batchSearchInput?.value || '').trim().toLowerCase();
  if (searchQuery) {
    filtered = filtered.filter((i) => {
      if (i.status !== 'done' || !i.data) {
        return (i.userNotes || '').toLowerCase().includes(searchQuery);
      }
      const d = i.data;
      const haystack = `${d.itemName || ''} ${d.title || ''} ${d.category || ''} ${d.description || ''} ${i.userNotes || ''} ${i.listingUrl || ''}`.toLowerCase();
      return haystack.includes(searchQuery);
    });
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
      const imgs = getBatchItemImages(item);
      const photoCountBadge =
        imgs.length > 1
          ? `<span class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-bold text-emerald-300 pointer-events-none">${imgs.length} Fotos</span>`
          : '';

      if (item.status === 'queued' || item.status === 'analyzing') {
        return `
          <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3.5 flex items-center gap-3.5 animate-pulse">
            <div class="relative w-16 h-16 shrink-0">
              <img src="${imgs[0]?.dataUrl || ''}" data-lightbox-src="${imgs[0]?.dataUrl || ''}" class="w-16 h-16 rounded-xl object-cover border border-slate-700 cursor-zoom-in" />
              ${photoCountBadge}
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-xs font-bold text-emerald-400">
                ${item.status === 'analyzing' ? `🔍 KI-Agent prüft ${imgs.length} Foto(s), Typenschild & Preis...` : '⏳ In Warteschlange...'}
              </div>
              <div class="text-[11px] text-slate-400 mt-1">Wird automatisch im Hintergrund verarbeitet</div>
            </div>
          </div>
        `;
      }

      if (item.status === 'error') {
        return `
          <div class="bg-rose-950/30 border border-rose-800/60 rounded-2xl p-3.5 flex items-center gap-3.5">
            <div class="relative w-16 h-16 shrink-0">
              <img src="${imgs[0]?.dataUrl || ''}" data-lightbox-src="${imgs[0]?.dataUrl || ''}" class="w-16 h-16 rounded-xl object-cover border border-rose-800 cursor-zoom-in" />
              ${photoCountBadge}
            </div>
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

      const extraThumbsHtml =
        imgs.length > 1
          ? `<div class="flex gap-1.5 pt-1 overflow-x-auto no-scrollbar">` +
            imgs
              .map(
                (im, idx) =>
                  `<img src="${im.dataUrl}" data-lightbox-src="${im.dataUrl}" class="w-10 h-10 rounded-lg object-cover border ${idx === 0 ? 'border-emerald-500/60' : 'border-slate-700'} cursor-zoom-in hover:opacity-90 transition" title="Foto ${idx + 1} antippen zum Vergrößern" />`
              )
              .join('') +
            `</div>`
          : '';

      const isListed = Boolean(item.isListed);
      const isSold = Boolean(item.isSold);
      const isBundled = Boolean(item.isBundled);
      const listingUrl = (item.listingUrl || '').trim();
      const isEditingLink = editingLinkForItemId === item.id;
      const isTextExpanded = expandedTextForItemId === item.id;
      const isSelectedForBundle = selectedBatchItemIds.has(item.id);

      const selectBtnHtml = item.status === 'done'
        ? `<button type="button" data-action="toggle-select" data-id="${item.id}" class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
            isSelectedForBundle
              ? 'bg-emerald-500 text-slate-950 ring-2 ring-emerald-300'
              : 'bg-slate-800 text-slate-400 hover:text-white border border-white/10'
          } transition">${isSelectedForBundle ? '☑️ Im Set' : '☐ Set'}</button>`
        : '';

      const bundledBadgeHtml = isBundled
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">📦 Im Set gebündelt</span>`
        : '';

      const soldBadgeHtml = isSold
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/25 text-amber-300 border border-amber-500/40">💰 Verkauft${item.soldPrice ? ` (${item.soldPrice} €)` : ''}</span>`
        : '';

      const listedBadgeHtml = isListed && !isSold
        ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">📢 Eingestellt</span>`
        : '';

      const listingLinkDisplayHtml =
        isListed && listingUrl && !isEditingLink
          ? `
          <div class="bg-sky-950/30 border border-sky-500/30 rounded-xl px-3 py-2 flex items-center justify-between gap-2 text-xs">
            <a href="${escapeHtml(listingUrl)}" target="_blank" rel="noopener" class="text-sky-300 hover:text-sky-200 font-semibold truncate flex items-center gap-1.5 underline">
              <span>🔗 Zum Inserat öffnen ↗</span>
              <span class="text-[10px] text-slate-400 font-normal truncate">(${escapeHtml(listingUrl)})</span>
            </a>
            <button type="button" data-action="edit-link" data-id="${item.id}" class="text-[11px] text-slate-400 hover:text-white shrink-0 px-1.5 py-0.5 rounded bg-slate-800">
              Status / Link
            </button>
          </div>`
          : '';

      const linkEditorHtml = isEditingLink
        ? `
          <div class="bg-slate-950/90 border border-sky-500/40 rounded-2xl p-3.5 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-sky-300">📢 Inserats-Status, Verkaufslink & Verkauft-Markierung</span>
              <button type="button" data-action="close-link-editor" data-id="${item.id}" class="text-[11px] text-slate-400 hover:text-white">✕</button>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                id="listingUrlInput_${item.id}"
                value="${escapeHtml(listingUrl)}"
                placeholder="https://www.kleinanzeigen.de/s-anzeige/..."
                class="flex-1 rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
              />
              <div class="flex gap-1.5 shrink-0">
                <button
                  type="button"
                  data-action="paste-link"
                  data-id="${item.id}"
                  class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 font-semibold text-xs transition"
                  title="Link aus der Zwischenablage einfügen & speichern"
                >
                  📋 Einfügen
                </button>
                <button
                  type="button"
                  data-action="save-link"
                  data-id="${item.id}"
                  class="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs transition"
                >
                  Speichern
                </button>
              </div>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-white/5 text-[11px]">
              <div class="flex items-center gap-1.5">
                <span class="text-slate-400">Verkaufspreis:</span>
                <input
                  type="number"
                  id="soldPriceInput_${item.id}"
                  value="${Number(item.soldPrice || d.recommendedPrice || 0)}"
                  class="w-16 rounded-lg bg-slate-900 border border-amber-500/40 px-2 py-1 text-xs font-bold text-amber-300 focus:outline-none"
                  title="Tatsächlich erzielter Verkaufspreis in €"
                />
                <span class="text-slate-400">€</span>
                ${
                  !isSold
                    ? `<button type="button" data-action="mark-sold" data-id="${item.id}" class="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold transition">💰 Verkauft</button>`
                    : `<button type="button" data-action="mark-sold" data-id="${item.id}" class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold transition">Preis ändern</button>
                       <button type="button" data-action="unmark-sold" data-id="${item.id}" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition">Aufheben</button>`
                }
              </div>
              ${
                isListed
                  ? `<button type="button" data-action="unmark-listed" data-id="${item.id}" class="text-rose-400 hover:text-rose-300 underline">Zurück auf „Offen“ setzen</button>`
                  : ''
              }
            </div>
          </div>`
        : '';

      const inlineTextDrawerHtml = isTextExpanded
        ? `
          <div class="bg-slate-950/90 border border-emerald-500/30 rounded-2xl p-3.5 space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-bold text-emerald-300">📄 Schnell-Vorschau & Direkt-Bearbeitung</span>
              <div class="flex items-center gap-2">
                <button type="button" data-action="open-detail-full" data-id="${item.id}" class="text-[11px] text-sky-300 hover:text-sky-200 underline">
                  Im Voll-Editor öffnen ↗
                </button>
                <button type="button" data-action="toggle-text" data-id="${item.id}" class="text-xs text-slate-400 hover:text-white px-1">✕</button>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-2">
              <div class="flex-1">
                <div class="flex items-center justify-between mb-1">
                  <label class="text-[10px] font-bold text-slate-400 uppercase">Anzeigen-Titel</label>
                  <button type="button" data-action="copy-inline-title" data-id="${item.id}" class="text-[10px] font-bold text-emerald-400 hover:text-emerald-300">📋 Titel kopieren</button>
                </div>
                <input
                  type="text"
                  id="inlineTitle_${item.id}"
                  value="${escapeHtml(d.title || d.itemName || '')}"
                  class="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-1.5 text-xs font-semibold text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div class="sm:w-36">
                <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Preis (€)</label>
                <div class="flex items-center gap-1">
                  <input
                    type="number"
                    id="inlinePrice_${item.id}"
                    value="${Number(d.recommendedPrice || 0)}"
                    class="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-1.5 text-xs font-bold text-emerald-400 focus:border-emerald-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    data-action="discount-10"
                    data-id="${item.id}"
                    class="px-2 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-[10px] font-bold shrink-0 transition"
                    title="1-Klick Preis um 10% senken (-10%)"
                  >
                    📉 -10%
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <label class="text-[10px] font-bold text-slate-400 uppercase">Beschreibung (Kleinanzeigen-fertig)</label>
                <button type="button" data-action="copy-inline-desc" data-id="${item.id}" class="text-[10px] font-bold text-emerald-400 hover:text-emerald-300">📋 Text kopieren</button>
              </div>
              <textarea
                id="inlineDesc_${item.id}"
                rows="5"
                class="w-full rounded-xl bg-slate-900 border border-white/10 p-2.5 text-xs text-slate-200 leading-relaxed focus:border-emerald-500 focus:outline-none"
              >${escapeHtml(d.description || '')}</textarea>
            </div>
            <div class="flex justify-end gap-2">
              <button
                type="button"
                data-action="save-inline-text"
                data-id="${item.id}"
                class="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition"
              >
                ✓ Änderungen speichern
              </button>
            </div>
          </div>`
        : '';

      return `
        <div class="glass-card ${isSold ? '!border-amber-500/40' : isListed ? '!border-sky-500/40' : ''} rounded-3xl p-4 space-y-3.5 transition shadow-lg">
          <div class="flex items-start gap-3.5">
            <div class="relative w-20 h-20 shrink-0">
              <img src="${imgs[0]?.dataUrl || ''}" data-lightbox-src="${imgs[0]?.dataUrl || ''}" class="w-20 h-20 rounded-2xl object-cover border border-white/10 cursor-zoom-in hover:opacity-90 transition" title="Antippen zum Vergrößern" />
              ${photoCountBadge}
            </div>
            <div class="flex-1 min-w-0 space-y-1">
              <div class="flex flex-wrap items-center gap-1.5">
                ${selectBtnHtml}
                ${bundledBadgeHtml}
                ${soldBadgeHtml}
                ${listedBadgeHtml}
                ${badgeHtml}
                ${rarityHtml}
                ${confidenceHtml}
              </div>
              <h3 class="font-extrabold text-sm sm:text-base text-white leading-snug">${escapeHtml(d.itemName)}</h3>
              <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">${escapeHtml(d.sellabilityReason)}</p>
              ${extraThumbsHtml}
            </div>
            <div class="text-right shrink-0 pl-1">
              <div class="text-lg sm:text-xl font-extrabold ${isSold ? 'text-amber-300' : 'text-emerald-400'} tracking-tight">${d.recommendedPrice} €</div>
              <div class="text-[10px] text-slate-400">${d.minPrice}–${d.maxPrice} €</div>
              <div class="text-[10px] font-semibold ${d.priceFromWebSearch ? 'text-emerald-400/90' : 'text-slate-500'} mt-0.5">${d.priceFromWebSearch ? '✓ Web-Preis' : 'Schätzung'}</div>
            </div>
          </div>

          ${listingLinkDisplayHtml}
          ${linkEditorHtml}
          ${inlineTextDrawerHtml}

          <!-- Aufgeräumte, daumenfreundliche Aktionsleiste pro Karte -->
          <div class="pt-2.5 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <button
              type="button"
              data-action="launch"
              data-id="${item.id}"
              class="py-2.5 px-4 rounded-2xl cta-gradient active:scale-[0.98] text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/15 transition"
            >
              <span>📲 Kopieren & Inserieren</span>
            </button>

            <div class="flex items-center justify-between sm:justify-end gap-1.5">
              <button
                type="button"
                data-action="toggle-listed"
                data-id="${item.id}"
                class="flex-1 sm:flex-initial py-2 px-3 rounded-xl ${
                  isSold
                    ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40'
                    : isListed
                    ? 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40'
                    : 'bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-white/10'
                } font-bold text-xs transition text-center"
                title="Als bei Kleinanzeigen eingestellt oder verkauft markieren & Link hinterlegen"
              >
                <span>${isSold ? '💰 Verkauft' : isListed ? (listingUrl ? '🔗 Link' : '📢 Eingestellt') : '✅ Eingestellt'}</span>
              </button>
              <button
                type="button"
                data-action="save-photos"
                data-id="${item.id}"
                class="py-2 px-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-white/10 font-bold text-xs transition"
                title="Fotos auf dem Handy speichern oder direkt teilen"
              >
                <span>🖼️ Fotos</span>
              </button>
              <button
                type="button"
                data-action="add-photo"
                data-id="${item.id}"
                class="py-2 px-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-emerald-300 border border-white/10 font-bold text-xs transition"
                title="Weiteres Foto (z.B. Typenschild) dazunehmen"
              >
                <span>📷 +Typ</span>
              </button>
              <button
                type="button"
                data-action="toggle-text"
                data-id="${item.id}"
                class="py-2 px-2.5 rounded-xl ${
                  isTextExpanded
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-white/10'
                } font-bold text-xs transition"
                title="Anzeigentext & Preis direkt aufklappen und bearbeiten"
              >
                <span>📄 Text</span>
              </button>
              <button
                type="button"
                data-action="delete"
                data-id="${item.id}"
                class="py-2 px-2.5 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-slate-800 text-xs transition"
                title="Löschen"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');
}

// Klick-Aktionen auf den Dashboard-Karten (inkl. Foto-Lightbox)
if (batchItemsList) {
  batchItemsList.addEventListener('click', async (e) => {
    const lightboxImg = e.target.closest('img[data-lightbox-src]');
    if (lightboxImg && lightboxImg.dataset.lightboxSrc) {
      openImageLightbox(lightboxImg.dataset.lightboxSrc);
      return;
    }

    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    const item = batchItems.find((i) => i.id === id);
    if (!item) return;

    if (action === 'delete') {
      const name = item.data?.itemName || 'Diesen Artikel';
      const ok = confirm(`"${name.slice(0, 45)}" wirklich aus dem Bestand löschen?`);
      if (!ok) return;
      batchItems = batchItems.filter((i) => i.id !== id);
      selectedBatchItemIds.delete(id);
      updateBundleActionBar();
      saveBatchToStorage();
      renderBatchDashboard();
      showToast('Artikel gelöscht');
      return;
    }

    if (action === 'toggle-select') {
      if (selectedBatchItemIds.has(item.id)) {
        selectedBatchItemIds.delete(item.id);
      } else {
        selectedBatchItemIds.add(item.id);
      }
      updateBundleActionBar();
      renderBatchDashboard();
      return;
    }

    if (action === 'save-photos') {
      await shareOrDownloadItemImages(item);
      return;
    }

    if (action === 'discount-10' && item.data) {
      const curPrice = Number(item.data.recommendedPrice || 0);
      const discount = Math.max(1, Math.round(curPrice * 0.10));
      const newPrice = Math.max(1, curPrice - discount);
      item.data.recommendedPrice = newPrice;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast(`📉 Preis um 10% gesenkt (${curPrice} € → ${newPrice} €)!`);
      return;
    }

    if (action === 'toggle-listed' || action === 'edit-link') {
      if (!item.isListed && !item.isSold) {
        item.isListed = true;
        item.listedAt = Date.now();
        await saveBatchToStorage(item);
        showToast('✓ Artikel als „Eingestellt“ markiert! Du kannst jetzt optional den Link speichern.');
      }
      editingLinkForItemId = editingLinkForItemId === item.id ? null : item.id;
      renderBatchDashboard();
      if (editingLinkForItemId === item.id) {
        setTimeout(() => {
          const inp = document.getElementById(`listingUrlInput_${item.id}`);
          if (inp) inp.focus();
        }, 50);
      }
      return;
    }

    if (action === 'close-link-editor') {
      editingLinkForItemId = null;
      renderBatchDashboard();
      return;
    }

    if (action === 'save-link') {
      const inp = document.getElementById(`listingUrlInput_${item.id}`);
      const rawUrl = (inp?.value || '').trim();
      item.isListed = true;
      item.listedAt = item.listedAt || Date.now();
      item.listingUrl = rawUrl;
      editingLinkForItemId = null;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast(rawUrl ? '✓ Inserats-Link gespeichert!' : '✓ Als „Eingestellt“ gespeichert!');
      return;
    }

    if (action === 'paste-link') {
      try {
        const clipText = (await navigator.clipboard.readText()).trim();
        const urlMatch = clipText.match(/https?:\/\/[^\s]+/i);
        const finalUrl = urlMatch ? urlMatch[0] : clipText;
        if (finalUrl) {
          item.isListed = true;
          item.listedAt = item.listedAt || Date.now();
          item.listingUrl = finalUrl;
          editingLinkForItemId = null;
          await saveBatchToStorage(item);
          renderBatchDashboard();
          showToast('✓ Link aus Zwischenablage eingefügt & gespeichert!');
        } else {
          showToast('Zwischenablage ist leer');
        }
      } catch (_) {
        showToast('Bitte Link direkt in das Textfeld einfügen (Gedrückt halten -> Einfügen)');
      }
      return;
    }

    if (action === 'mark-sold') {
      const customPriceInput = document.getElementById(`soldPriceInput_${item.id}`);
      const customPrice = customPriceInput ? Number(customPriceInput.value || 0) : Number(item.soldPrice || item.data?.recommendedPrice || 0);
      item.isSold = true;
      item.isListed = true;
      item.soldAt = item.soldAt || Date.now();
      item.soldPrice = customPrice;
      editingLinkForItemId = null;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast(`💰 Artikel als „Verkauft“ (${customPrice} €) gespeichert!`);
      return;
    }

    if (action === 'unmark-sold') {
      item.isSold = false;
      editingLinkForItemId = null;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast('Verkauft-Status aufgehoben');
      return;
    }

    if (action === 'unmark-listed') {
      item.isListed = false;
      item.isSold = false;
      item.listingUrl = '';
      editingLinkForItemId = null;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast('Status zurück auf „Offen“ gesetzt');
      return;
    }

    if (action === 'toggle-text') {
      expandedTextForItemId = expandedTextForItemId === item.id ? null : item.id;
      renderBatchDashboard();
      return;
    }

    if (action === 'copy-inline-title' && item.data) {
      const val = document.getElementById(`inlineTitle_${item.id}`)?.value || item.data.title || '';
      await navigator.clipboard.writeText(val);
      showToast('✓ Titel kopiert!');
      return;
    }

    if (action === 'copy-inline-desc' && item.data) {
      const val = document.getElementById(`inlineDesc_${item.id}`)?.value || item.data.description || '';
      await navigator.clipboard.writeText(val);
      showToast('✓ Beschreibung kopiert!');
      return;
    }

    if (action === 'save-inline-text' && item.data) {
      const newTitle = (document.getElementById(`inlineTitle_${item.id}`)?.value || '').trim();
      const newPrice = Number(document.getElementById(`inlinePrice_${item.id}`)?.value || item.data.recommendedPrice || 0);
      const newDesc = (document.getElementById(`inlineDesc_${item.id}`)?.value || '').trim();
      if (newTitle) item.data.title = newTitle;
      if (newPrice >= 0) item.data.recommendedPrice = newPrice;
      if (newDesc) item.data.description = newDesc;
      expandedTextForItemId = null;
      await saveBatchToStorage(item);
      renderBatchDashboard();
      showToast('✓ Titel, Preis & Text gespeichert!');
      return;
    }

    if (action === 'add-photo') {
      targetBatchItemIdForPhotoAdd = item.id;
      if (batchAddPhotoToItemInput) {
        batchAddPhotoToItemInput.click();
      }
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

    if ((action === 'open-detail' || action === 'open-detail-full') && item.data) {
      // Übertrage Artikel inkl. aller Fotos in die Detail-Ansicht zum Bearbeiten / 1-Klick-Kopieren
      const d = item.data;
      uploadedImages = [...getBatchItemImages(item)];
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
      const isAndroid = /android/i.test(navigator.userAgent);
      setTimeout(() => {
        if (isAndroid && currentPlatform === 'kleinanzeigen') {
          window.location.href = meta.createUrl;
        } else {
          window.open(meta.createUrl, '_blank');
        }
      }, 450);
    }
  });
}

// ============================================================================
// HYBRIDES BENUTZERKONTO- & AUTH-SYSTEM (PASSKEY, SOCIAL OAUTH & E-MAIL)
// ============================================================================

const AUTH_USERS_KEY = 'sellmate_auth_users_v1';
const AUTH_SESSION_KEY = 'sellmate_auth_session_v1';
const AUTH_CLOUD_KEY = 'sellmate_auth_cloud_cfg_v1';

// DOM Elements: Header & Auth Modal
const btnAuthModal = document.getElementById('btnAuthModal');
const authHeaderAvatar = document.getElementById('authHeaderAvatar');
const authHeaderLabel = document.getElementById('authHeaderLabel');

const authModal = document.getElementById('authModal');
const btnCloseAuthModal = document.getElementById('btnCloseAuthModal');
const authModalTitle = document.getElementById('authModalTitle');
const authModalSubtitle = document.getElementById('authModalSubtitle');

const authLoggedOutView = document.getElementById('authLoggedOutView');
const authLoggedInView = document.getElementById('authLoggedInView');

const authTabLogin = document.getElementById('authTabLogin');
const authTabRegister = document.getElementById('authTabRegister');
let authMode = 'login'; // 'login' | 'register'

const btnAuthPasskeyLogin = document.getElementById('btnAuthPasskeyLogin');
const btnAuthGoogle = document.getElementById('btnAuthGoogle');
const btnAuthApple = document.getElementById('btnAuthApple');

const authEmailForm = document.getElementById('authEmailForm');
const authNameWrapper = document.getElementById('authNameWrapper');
const authNameInput = document.getElementById('authNameInput');
const authEmailInput = document.getElementById('authEmailInput');
const authPasswordInput = document.getElementById('authPasswordInput');
const btnToggleAuthPassword = document.getElementById('btnToggleAuthPassword');
const authPasswordConfirmWrapper = document.getElementById('authPasswordConfirmWrapper');
const authPasswordConfirmInput = document.getElementById('authPasswordConfirmInput');
const authMigrateGuestWrapper = document.getElementById('authMigrateGuestWrapper');
const authMigrateGuestDataCheckbox = document.getElementById('authMigrateGuestDataCheckbox');
const authErrorBox = document.getElementById('authErrorBox');
const btnAuthSubmit = document.getElementById('btnAuthSubmit');

const btnToggleCloudConfig = document.getElementById('btnToggleCloudConfig');
const cloudConfigChevron = document.getElementById('cloudConfigChevron');
const authCloudConfigDetails = document.getElementById('authCloudConfigDetails');
const authSupabaseUrlInput = document.getElementById('authSupabaseUrlInput');
const authSupabaseAnonKeyInput = document.getElementById('authSupabaseAnonKeyInput');
const btnSaveCloudConfig = document.getElementById('btnSaveCloudConfig');

const profileAvatarLarge = document.getElementById('profileAvatarLarge');
const profileDisplayName = document.getElementById('profileDisplayName');
const profileEmail = document.getElementById('profileEmail');
const profileProviderBadge = document.getElementById('profileProviderBadge');
const profileItemCountBadge = document.getElementById('profileItemCountBadge');

const passkeyStatusBadge = document.getElementById('passkeyStatusBadge');
const passkeyStatusText = document.getElementById('passkeyStatusText');
const btnRegisterPasskey = document.getElementById('btnRegisterPasskey');

const profileSwitchSection = document.getElementById('profileSwitchSection');
const profileSwitchList = document.getElementById('profileSwitchList');

const btnAuthLogout = document.getElementById('btnAuthLogout');
const btnAuthDeleteAccount = document.getElementById('btnAuthDeleteAccount');

// Speicher-Helfer
function getAuthUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY) || '[]');
  } catch (_) {
    return [];
  }
}

function saveAuthUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users || []));
}

function getActiveSession() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || 'null');
  } catch (_) {
    return null;
  }
}

function setActiveSession(session) {
  if (session) {
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(AUTH_SESSION_KEY);
  }
}

function getCurrentUser() {
  const session = getActiveSession();
  if (!session || !session.userId) return null;
  const users = getAuthUsers();
  return users.find((u) => u.id === session.userId) || null;
}

function getCurrentUserId() {
  const u = getCurrentUser();
  return u ? u.id : 'guest';
}

function getCloudAuthConfig() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_CLOUD_KEY) || '{}');
  } catch (_) {
    return {};
  }
}

function saveCloudAuthConfig(cfg) {
  localStorage.setItem(AUTH_CLOUD_KEY, JSON.stringify(cfg || {}));
}

function setAuthError(msg) {
  if (!authErrorBox) return;
  if (!msg) {
    authErrorBox.classList.add('hidden');
    authErrorBox.textContent = '';
  } else {
    authErrorBox.textContent = msg;
    authErrorBox.classList.remove('hidden');
  }
}

function clearAuthError() {
  setAuthError('');
}

// PBKDF2 Passwort-Hashing (Web Crypto API)
async function hashPasswordWithSalt(password, saltUint8Array) {
  const enc = new TextEncoder();
  const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const hashBuf = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: saltUint8Array, iterations: 100000, hash: 'SHA-256' },
    baseKey,
    256
  );
  return btoa(String.fromCharCode(...new Uint8Array(hashBuf)));
}

// WebAuthn / Passkey Base64-Helfer
function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBuffer(base64url) {
  let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  while (base64.length % 4) base64 += '=';
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function isWebAuthnSupported() {
  return Boolean(window.PublicKeyCredential && navigator.credentials && navigator.credentials.create && navigator.credentials.get);
}

// Passkey für den aktuellen Nutzer registrieren
async function registerPasskeyForCurrentUser() {
  const user = getCurrentUser();
  if (!user) {
    showToast('Bitte melde dich zuerst an');
    return;
  }
  if (!isWebAuthnSupported()) {
    showToast('Dein Browser unterstützt Passkeys / WebAuthn nicht');
    return;
  }

  try {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const userIdBytes = new TextEncoder().encode(user.id);

    const creationOptions = {
      challenge,
      rp: {
        name: 'SellMate AI',
        id: window.location.hostname || undefined
      },
      user: {
        id: userIdBytes,
        name: user.email,
        displayName: user.name || user.email.split('@')[0]
      },
      pubKeyCredParams: [
        { alg: -7, type: 'public-key' },
        { alg: -257, type: 'public-key' }
      ],
      authenticatorSelection: {
        userVerification: 'preferred',
        residentKey: 'preferred'
      },
      timeout: 60000,
      attestation: 'none'
    };

    if (!window.location.hostname || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      delete creationOptions.rp.id;
    }

    const credential = await navigator.credentials.create({ publicKey: creationOptions });
    if (!credential) throw new Error('Registrierung abgebrochen');

    const credId = bufferToBase64Url(credential.rawId);
    user.passkeyCredentialId = credId;

    const users = getAuthUsers();
    const idx = users.findIndex((u) => u.id === user.id);
    if (idx !== -1) {
      users[idx] = user;
      saveAuthUsers(users);
    }

    renderAuthModalViews();
    showToast('✓ Passkey (Biometrie) für dieses Gerät erfolgreich eingerichtet!');
  } catch (err) {
    if (err.name === 'NotAllowedError') {
      showToast('Passkey-Einrichtung abgebrochen');
    } else {
      showToast(`Passkey-Fehler: ${err?.message || err}`);
    }
  }
}

// 1-Tap Biometrie-Login mit Passkey
async function loginWithPasskey() {
  clearAuthError();
  if (!isWebAuthnSupported()) {
    setAuthError('Passkeys / Biometrie werden in diesem Browser nicht unterstützt.');
    return;
  }

  const users = getAuthUsers();
  const usersWithPasskeys = users.filter((u) => u.passkeyCredentialId);

  if (usersWithPasskeys.length === 0) {
    setAuthError('Noch kein Passkey auf diesem Gerät eingerichtet. Bitte melde dich erst an und tippe im Profil auf „Passkey aktivieren“.');
    return;
  }

  try {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const allowCredentials = usersWithPasskeys.map((u) => ({
      id: base64UrlToBuffer(u.passkeyCredentialId),
      type: 'public-key',
      transports: ['internal', 'hybrid', 'usb', 'nfc', 'ble']
    }));

    const getOptions = {
      challenge,
      allowCredentials,
      timeout: 60000,
      userVerification: 'preferred'
    };

    if (window.location.hostname && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
      getOptions.rpId = window.location.hostname;
    }

    const assertion = await navigator.credentials.get({ publicKey: getOptions });
    if (!assertion) throw new Error('Biometrie-Login abgebrochen');

    const credId = bufferToBase64Url(assertion.rawId);
    const matchedUser = usersWithPasskeys.find((u) => u.passkeyCredentialId === credId);

    if (!matchedUser) {
      setAuthError('Kein passendes Konto für diesen Passkey gefunden.');
      return;
    }

    matchedUser.lastLoginAt = Date.now();
    saveAuthUsers(users);
    await loginUser(matchedUser, { migrateGuestData: false });
    showToast(`✓ Willkommen zurück, ${matchedUser.name || matchedUser.email}!`);
  } catch (err) {
    if (err.name === 'NotAllowedError') {
      // Abgebrochen durch Nutzer
    } else {
      setAuthError(`Passkey-Fehler: ${err?.message || err}`);
    }
  }
}

// Social Logins (Google & Apple - Hybrid: Supabase Cloud OAuth + Lokaler Sofort-Modus)
async function handleSocialLogin(provider) {
  clearAuthError();
  const cloudCfg = getCloudAuthConfig();
  const supabaseUrl = (cloudCfg.supabaseUrl || '').trim().replace(/\/+$/, '');
  const supabaseKey = (cloudCfg.supabaseAnonKey || '').trim();

  // Falls echtes Supabase hinterlegt ist: starte Redirect-Flow
  if (supabaseUrl && supabaseKey) {
    const redirectTo = window.location.origin + window.location.pathname;
    const authUrl = `${supabaseUrl}/auth/v1/authorize?provider=${provider}&redirect_to=${encodeURIComponent(redirectTo)}`;
    window.location.href = authUrl;
    return;
  }

  // Lokaler Sofort-Flow (ohne Server)
  const defaultDomain = provider === 'apple' ? '@icloud.com' : '@gmail.com';
  const providerLabel = provider === 'apple' ? 'Apple' : 'Google';

  const users = getAuthUsers();
  const existing = users.find((u) => u.provider === provider);

  let email = '';
  if (existing) {
    email = existing.email;
  } else {
    const input = prompt(`Mit ${providerLabel} anmelden:\nBitte gib deine ${providerLabel}-E-Mail-Adresse ein:`, `alex${defaultDomain}`);
    if (!input || !input.trim()) return;
    email = input.trim().toLowerCase();
  }

  let user = users.find((u) => u.email === email);
  const migrateGuest = authMigrateGuestDataCheckbox ? authMigrateGuestDataCheckbox.checked : true;

  if (!user) {
    user = {
      id: `usr_${provider}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      email,
      name: email.split('@')[0],
      provider,
      createdAt: Date.now(),
      lastLoginAt: Date.now()
    };
    users.unshift(user);
    saveAuthUsers(users);
  } else {
    user.provider = provider;
    user.lastLoginAt = Date.now();
    saveAuthUsers(users);
  }

  await loginUser(user, { migrateGuestData: migrateGuest });
  showToast(`✓ Mit ${providerLabel} angemeldet (${user.name || user.email})!`);
}

// Supabase OAuth Callback im URL Hash auswerten
async function checkAndImportOAuthRedirect() {
  const hash = window.location.hash || '';
  if (!hash.includes('access_token=')) return;

  try {
    const params = new URLSearchParams(hash.replace(/^#/, ''));
    const accessToken = params.get('access_token');
    if (!accessToken) return;

    const cloudCfg = getCloudAuthConfig();
    const supabaseUrl = (cloudCfg.supabaseUrl || '').trim().replace(/\/+$/, '');
    const supabaseKey = (cloudCfg.supabaseAnonKey || '').trim();

    if (supabaseUrl) {
      const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          apikey: supabaseKey || accessToken
        }
      });
      if (res.ok) {
        const data = await res.json();
        const email = data.email || `user_${data.id.slice(0, 8)}@cloud.auth`;
        const provider = data.app_metadata?.provider || 'oauth';
        const name = data.user_metadata?.full_name || data.user_metadata?.name || email.split('@')[0];

        const users = getAuthUsers();
        let user = users.find((u) => u.id === data.id || u.email === email);
        if (!user) {
          user = {
            id: `usr_cloud_${data.id.slice(0, 10)}`,
            email,
            name,
            provider,
            createdAt: Date.now(),
            lastLoginAt: Date.now()
          };
          users.unshift(user);
        } else {
          user.lastLoginAt = Date.now();
        }
        saveAuthUsers(users);
        await loginUser(user, { migrateGuestData: true });
        history.replaceState(null, '', window.location.pathname + window.location.search);
        showToast(`✓ Cloud-Login erfolgreich (${user.name})!`);
      }
    }
  } catch (e) {
    console.error('OAuth redirect parsing error:', e);
  }
}

// E-Mail & Passwort Submit Handler
async function handleEmailAuthSubmit() {
  clearAuthError();
  const email = (authEmailInput?.value || '').trim().toLowerCase();
  const password = authPasswordInput?.value || '';

  if (!email || !email.includes('@')) {
    setAuthError('Bitte eine gültige E-Mail-Adresse eingeben.');
    return;
  }
  if (!password || password.length < 6) {
    setAuthError('Das Passwort muss mindestens 6 Zeichen lang sein.');
    return;
  }

  const users = getAuthUsers();

  if (authMode === 'register') {
    const name = (authNameInput?.value || '').trim();
    const confirm = authPasswordConfirmInput?.value || '';

    if (password !== confirm) {
      setAuthError('Die Passwörter stimmen nicht überein.');
      return;
    }

    const existing = users.find((u) => u.email === email);
    if (existing) {
      setAuthError('Für diese E-Mail-Adresse existiert bereits ein Konto. Bitte auf „Anmelden“ wechseln.');
      return;
    }

    try {
      const salt = crypto.getRandomValues(new Uint8Array(16));
      const hash = await hashPasswordWithSalt(password, salt);
      const saltB64 = btoa(String.fromCharCode(...salt));

      const newUser = {
        id: `usr_email_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        email,
        name: name || email.split('@')[0],
        provider: 'email',
        passwordHash: hash,
        passwordSalt: saltB64,
        createdAt: Date.now(),
        lastLoginAt: Date.now()
      };

      users.unshift(newUser);
      saveAuthUsers(users);

      const migrateGuest = authMigrateGuestDataCheckbox ? authMigrateGuestDataCheckbox.checked : true;
      await loginUser(newUser, { migrateGuestData: migrateGuest });
      showToast(`✓ Konto erstellt! Willkommen, ${newUser.name}.`);
    } catch (e) {
      setAuthError(`Fehler bei der Registrierung: ${e.message}`);
    }
  } else {
    // Login
    const user = users.find((u) => u.email === email);
    if (!user) {
      setAuthError('Kein Konto mit dieser E-Mail gefunden. Bitte erstelle zuerst ein Konto.');
      return;
    }

    if (!user.passwordHash || !user.passwordSalt) {
      setAuthError('Dieses Konto wurde über eine andere Methode (Passkey/Social) registriert.');
      return;
    }

    try {
      const rawSalt = Uint8Array.from(atob(user.passwordSalt), (c) => c.charCodeAt(0));
      const hash = await hashPasswordWithSalt(password, rawSalt);

      if (hash !== user.passwordHash) {
        setAuthError('Falsches Passwort. Bitte erneut versuchen.');
        return;
      }

      user.lastLoginAt = Date.now();
      saveAuthUsers(users);

      const migrateGuest = authMigrateGuestDataCheckbox ? authMigrateGuestDataCheckbox.checked : false;
      await loginUser(user, { migrateGuestData: migrateGuest });
      showToast(`✓ Willkommen zurück, ${user.name || user.email}!`);
    } catch (e) {
      setAuthError(`Login-Fehler: ${e.message}`);
    }
  }
}

// Bestehende Gast-Daten in das neue Benutzerkonto migrieren
async function migrateGuestDataToUser(newUserId) {
  try {
    const db = await openBatchDb();
    const tx = db.transaction(IDB_STORE, 'readwrite');
    const store = tx.objectStore(IDB_STORE);
    const all = await idbRequest(store.getAll());
    let migratedCount = 0;
    (all || []).forEach((item) => {
      if (!item.ownerId || item.ownerId === 'guest') {
        item.ownerId = newUserId;
        store.put(item);
        migratedCount++;
      }
    });
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });
    return migratedCount;
  } catch (err) {
    console.error('Migration error:', err);
    return 0;
  }
}

// Benutzer anmelden & Profil-Konfiguration aktivieren
async function loginUser(user, { migrateGuestData = false } = {}) {
  const previousUserId = getCurrentUserId();
  if (previousUserId && previousUserId !== 'guest') {
    localStorage.setItem(`sellmate_profile_cfg_${previousUserId}`, JSON.stringify(collectConfigBundle()));
  }

  if (migrateGuestData) {
    localStorage.setItem(`sellmate_profile_cfg_${user.id}`, JSON.stringify(collectConfigBundle()));
    await migrateGuestDataToUser(user.id);
  }

  setActiveSession({ userId: user.id, email: user.email, provider: user.provider, loggedInAt: Date.now() });

  const savedCfg = localStorage.getItem(`sellmate_profile_cfg_${user.id}`);
  if (savedCfg) {
    try {
      applyConfigBundle(JSON.parse(savedCfg));
    } catch (_) {}
  }

  await loadBatchFromStorage();
  updateAuthHeaderIndicator();
  closeAuthModal();
}

// Benutzer abmelden (Zurück zu Gast-Modus)
async function logoutUser() {
  const current = getCurrentUser();
  if (current) {
    localStorage.setItem(`sellmate_profile_cfg_${current.id}`, JSON.stringify(collectConfigBundle()));
  }
  setActiveSession(null);
  await loadBatchFromStorage();
  updateAuthHeaderIndicator();
  renderAuthModalViews();
  showToast('Abgemeldet – zurück im Gast-Modus');
}

// Header-Badge & Profil-Button aktualisieren
function updateAuthHeaderIndicator() {
  const user = getCurrentUser();
  if (!btnAuthModal || !authHeaderAvatar || !authHeaderLabel) return;

  if (user) {
    const initials = (user.name || user.email || 'U').slice(0, 2).toUpperCase();
    authHeaderAvatar.innerHTML = `<span class="text-[10px] font-bold text-slate-950">${escapeHtml(initials)}</span>`;
    authHeaderAvatar.className = 'w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center font-bold ring-2 ring-emerald-500/30';
    authHeaderLabel.textContent = (user.name || user.email.split('@')[0]).slice(0, 10);
    btnAuthModal.classList.add('border-emerald-500/40');
  } else {
    authHeaderAvatar.innerHTML = `<i data-lucide="user" class="w-3 h-3 text-slate-300"></i>`;
    authHeaderAvatar.className = 'w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[10px] font-bold border border-white/10';
    authHeaderLabel.textContent = 'Anmelden';
    btnAuthModal.classList.remove('border-emerald-500/40');
  }
  lucide.createIcons();
}

async function countUserItems(userId) {
  try {
    const db = await openBatchDb();
    const all = await idbRequest(db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).getAll());
    return (all || []).filter((i) => (i.ownerId || 'guest') === userId).length;
  } catch (_) {
    return 0;
  }
}

// Auth Modal Views umschalten & befüllen
async function renderAuthModalViews() {
  const user = getCurrentUser();
  if (user) {
    if (authLoggedOutView) authLoggedOutView.classList.add('hidden');
    if (authLoggedInView) authLoggedInView.classList.remove('hidden');

    if (authModalTitle) authModalTitle.textContent = 'Mein Benutzerkonto';
    if (authModalSubtitle) authModalSubtitle.textContent = 'Angemeldet auf diesem Gerät';

    const initials = (user.name || user.email || 'SM').slice(0, 2).toUpperCase();
    if (profileAvatarLarge) profileAvatarLarge.textContent = initials;
    if (profileDisplayName) profileDisplayName.textContent = user.name || user.email.split('@')[0];
    if (profileEmail) profileEmail.textContent = user.email;

    const providerNames = {
      email: 'E-Mail & Passwort',
      google: 'Google',
      apple: 'Apple',
      passkey: 'Passkey'
    };
    if (profileProviderBadge) {
      profileProviderBadge.textContent = providerNames[user.provider] || user.provider || 'Lokal';
    }

    const itemCount = await countUserItems(user.id);
    if (profileItemCountBadge) {
      profileItemCountBadge.textContent = `${itemCount} Artikel im Konto`;
    }

    if (user.passkeyCredentialId) {
      if (passkeyStatusBadge) {
        passkeyStatusBadge.textContent = '✓ Aktiv';
        passkeyStatusBadge.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
      }
      if (passkeyStatusText) {
        passkeyStatusText.textContent = '✓ Biometrischer Passkey (FaceID / Fingerabdruck) ist für dieses Gerät eingerichtet.';
      }
      if (btnRegisterPasskey) {
        btnRegisterPasskey.innerHTML = '<i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i><span>Passkey neu einrichten</span>';
      }
    } else {
      if (passkeyStatusBadge) {
        passkeyStatusBadge.textContent = 'Nicht eingerichtet';
        passkeyStatusBadge.className = 'text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-900 text-slate-400';
      }
      if (passkeyStatusText) {
        passkeyStatusText.textContent = 'Verknüpfe deinen Fingerabdruck, FaceID oder Windows Hello für 1-Klick-Anmeldung.';
      }
      if (btnRegisterPasskey) {
        btnRegisterPasskey.innerHTML = '<i data-lucide="key" class="w-3.5 h-3.5"></i><span>Passkey für dieses Gerät aktivieren</span>';
      }
    }

    renderProfileSwitchList();
  } else {
    if (authLoggedOutView) authLoggedOutView.classList.remove('hidden');
    if (authLoggedInView) authLoggedInView.classList.add('hidden');

    if (authModalTitle) authModalTitle.textContent = 'Benutzerkonto & Anmeldung';
    if (authModalSubtitle) authModalSubtitle.textContent = 'Artikel, Einstellungen & Sync verwalten';

    const cloudCfg = getCloudAuthConfig();
    if (authSupabaseUrlInput) authSupabaseUrlInput.value = cloudCfg.supabaseUrl || '';
    if (authSupabaseAnonKeyInput) authSupabaseAnonKeyInput.value = cloudCfg.supabaseAnonKey || '';
  }
  lucide.createIcons();
}

function renderProfileSwitchList() {
  if (!profileSwitchList) return;
  const users = getAuthUsers();
  const current = getCurrentUser();

  let html = `
    <button type="button" data-switch-user="guest" class="w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition ${
      !current ? 'bg-emerald-500/15 border border-emerald-500 text-white' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
    }">
      <div class="flex items-center gap-2">
        <span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold flex items-center justify-center">👤</span>
        <span class="text-xs font-semibold">Gast-Modus (Ohne Konto)</span>
      </div>
      ${!current ? '<span class="text-[10px] font-bold text-emerald-400">Aktiv</span>' : '<span class="text-[10px] text-slate-400">Wechseln ➔</span>'}
    </button>
  `;

  users.forEach((u) => {
    const isAct = current && current.id === u.id;
    const inits = (u.name || u.email || 'U').slice(0, 2).toUpperCase();
    html += `
      <button type="button" data-switch-user="${u.id}" class="w-full px-3 py-2 rounded-xl flex items-center justify-between text-left transition ${
        isAct ? 'bg-emerald-500/15 border border-emerald-500 text-white' : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700'
      }">
        <div class="flex items-center gap-2 truncate pr-2">
          <span class="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-slate-950 text-[10px] font-extrabold flex items-center justify-center shrink-0">${inits}</span>
          <div class="truncate">
            <div class="text-xs font-semibold truncate text-white">${escapeHtml(u.name || u.email)}</div>
            <div class="text-[10px] text-slate-400 truncate">${escapeHtml(u.email)}</div>
          </div>
        </div>
        ${isAct ? '<span class="text-[10px] font-bold text-emerald-400 shrink-0">Aktiv</span>' : '<span class="text-[10px] text-slate-400 shrink-0">Wechseln ➔</span>'}
      </button>
    `;
  });

  profileSwitchList.innerHTML = html;
}

function openAuthModal() {
  clearAuthError();
  renderAuthModalViews();
  if (authModal) authModal.classList.remove('hidden');
}

function closeAuthModal() {
  if (authModal) authModal.classList.add('hidden');
}

function setAuthMode(mode) {
  authMode = mode;
  clearAuthError();
  if (mode === 'register') {
    if (authTabRegister) authTabRegister.className = 'py-2 px-3 rounded-xl bg-emerald-500 text-slate-950 font-bold transition';
    if (authTabLogin) authTabLogin.className = 'py-2 px-3 rounded-xl text-slate-400 hover:text-white transition';
    if (authNameWrapper) authNameWrapper.classList.remove('hidden');
    if (authPasswordConfirmWrapper) authPasswordConfirmWrapper.classList.remove('hidden');
    if (btnAuthSubmit) btnAuthSubmit.textContent = 'Konto erstellen';
  } else {
    if (authTabLogin) authTabLogin.className = 'py-2 px-3 rounded-xl bg-emerald-500 text-slate-950 font-bold transition';
    if (authTabRegister) authTabRegister.className = 'py-2 px-3 rounded-xl text-slate-400 hover:text-white transition';
    if (authNameWrapper) authNameWrapper.classList.add('hidden');
    if (authPasswordConfirmWrapper) authPasswordConfirmWrapper.classList.add('hidden');
    if (btnAuthSubmit) btnAuthSubmit.textContent = 'Jetzt anmelden';
  }
}

function initAuthSystem() {
  updateAuthHeaderIndicator();
}

// Event-Listeners für das Auth-System
if (btnAuthModal) {
  btnAuthModal.addEventListener('click', openAuthModal);
}

if (btnCloseAuthModal) {
  btnCloseAuthModal.addEventListener('click', closeAuthModal);
}

if (authModal) {
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeAuthModal();
  });
}

if (authTabLogin) {
  authTabLogin.addEventListener('click', () => setAuthMode('login'));
}

if (authTabRegister) {
  authTabRegister.addEventListener('click', () => setAuthMode('register'));
}

if (btnAuthPasskeyLogin) {
  btnAuthPasskeyLogin.addEventListener('click', loginWithPasskey);
}

if (btnAuthGoogle) {
  btnAuthGoogle.addEventListener('click', () => handleSocialLogin('google'));
}

if (btnAuthApple) {
  btnAuthApple.addEventListener('click', () => handleSocialLogin('apple'));
}

if (btnToggleAuthPassword) {
  btnToggleAuthPassword.addEventListener('click', () => {
    if (!authPasswordInput) return;
    const isPassword = authPasswordInput.type === 'password';
    authPasswordInput.type = isPassword ? 'text' : 'password';
    if (authPasswordConfirmInput) {
      authPasswordConfirmInput.type = isPassword ? 'text' : 'password';
    }
    btnToggleAuthPassword.textContent = isPassword ? 'Verbergen' : 'Anzeigen';
  });
}

if (authEmailForm) {
  authEmailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleEmailAuthSubmit();
  });
}

if (btnAuthSubmit) {
  btnAuthSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    handleEmailAuthSubmit();
  });
}

if (btnRegisterPasskey) {
  btnRegisterPasskey.addEventListener('click', registerPasskeyForCurrentUser);
}

if (btnAuthLogout) {
  btnAuthLogout.addEventListener('click', logoutUser);
}

if (btnAuthDeleteAccount) {
  btnAuthDeleteAccount.addEventListener('click', async () => {
    const current = getCurrentUser();
    if (!current) return;
    const ok = confirm(`Profil "${current.name || current.email}" wirklich von diesem Gerät entfernen?`);
    if (!ok) return;

    const users = getAuthUsers().filter((u) => u.id !== current.id);
    saveAuthUsers(users);
    localStorage.removeItem(`sellmate_profile_cfg_${current.id}`);
    await logoutUser();
    showToast('Profil von diesem Gerät entfernt');
  });
}

if (profileSwitchList) {
  profileSwitchList.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-switch-user]');
    if (!btn) return;
    const targetUserId = btn.dataset.switchUser;
    const current = getCurrentUser();

    if (targetUserId === 'guest') {
      if (current) await logoutUser();
      return;
    }

    if (current && current.id === targetUserId) return;

    const users = getAuthUsers();
    const targetUser = users.find((u) => u.id === targetUserId);
    if (targetUser) {
      await loginUser(targetUser, { migrateGuestData: false });
      showToast(`✓ Zu Profil "${targetUser.name || targetUser.email}" gewechselt`);
    }
  });
}

if (btnToggleCloudConfig && authCloudConfigDetails) {
  btnToggleCloudConfig.addEventListener('click', () => {
    const isHidden = authCloudConfigDetails.classList.contains('hidden');
    if (isHidden) {
      authCloudConfigDetails.classList.remove('hidden');
      if (cloudConfigChevron) cloudConfigChevron.style.transform = 'rotate(180deg)';
    } else {
      authCloudConfigDetails.classList.add('hidden');
      if (cloudConfigChevron) cloudConfigChevron.style.transform = 'rotate(0deg)';
    }
  });
}

if (btnSaveCloudConfig) {
  btnSaveCloudConfig.addEventListener('click', () => {
    const supabaseUrl = (authSupabaseUrlInput?.value || '').trim();
    const supabaseAnonKey = (authSupabaseAnonKeyInput?.value || '').trim();
    saveCloudAuthConfig({ supabaseUrl, supabaseAnonKey });
    showToast('✓ Cloud-OAuth Konfiguration gespeichert!');
  });
}
