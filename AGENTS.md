# SellMate AI – Regeln für alle KI-Agenten

Diese Datei ist die **einzige Quelle** für Projektregeln. Sie gilt für jeden Agenten (Claude Code, Google Antigravity/Gemini, …).
`CLAUDE.md` und `GEMINI.md` verweisen nur hierher – Regeln immer **hier** ändern, nicht dort.

## 0. Projektüberblick
- **Frontend:** PWA ohne Build-Schritt – `index.html`, `app.js`, `sw.js`, `manifest.json`, `icon.svg`. Deployment per GitHub Action auf GitHub Pages bei jedem Push auf `main`.
- **Backend:** `api/proxy-ai.js` als Vercel Serverless Function (KI-Proxy, Tavily-Proxy, Invite-Codes/Credits über Supabase, Owner-Cockpit, GitHub-Fehlertickets).
- **Konfiguration nur über Vercel-Umgebungsvariablen** (`ADMIN_PASSWORD`, `SERVER_AI_API_KEY`, `SERVER_AI_PROVIDER`, `SERVER_AI_MODEL`, `SERVER_TAVILY_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `GITHUB_PAT`).

## 0.1 Arbeitsablauf
- Es arbeitet immer nur **ein** Agent gleichzeitig am Repo. Vor dem Start den neuesten Stand holen (`git pull`), nach dem Ende committen und pushen.
- **Versionsnummer bei jeder ausgelieferten Änderung hochzählen**, an allen drei Stellen gleich: `CACHE_NAME` und `app.js?v=` in `sw.js` sowie `app.js?v=` in `index.html`.
- Commit-Nachrichten im Stil `typ(bereich): beschreibung (vNN)`.
- Vor dem Commit Syntax prüfen: `node --check app.js` und `node --check --input-type=module < api/proxy-ai.js`.

## 0.2 Sicherheit
- **Keine Geheimnisse im Code:** keine Passwörter, API-Keys, Tokens oder privilegierten Invite-/Owner-Codes – auch nicht als Standardwert oder Fallback. Das Repo und die ausgelieferte `app.js` sind öffentlich lesbar.
- Fehlt eine nötige Umgebungsvariable, schlägt die Funktion sicher fehl (gesperrt), statt auf einen eingebauten Wert zurückzufallen.

## 1. Anti-Overfitting & Keine Einzelfall-Hacks
- **Niemals Testfall-spezifische Ausnahmen einbauen:** Wenn ein bestimmtes Produkt, Foto oder Objekt (z. B. eine spezifische Spielfigur, ein bestimmtes Werkzeug oder Kleidungsstück) falsch erkannt wird, darf NIEMALS eine Sonderregel für genau diesen einzelnen Artikel in Code oder Prompts hardcodiert werden.
- **Systemische Ursachen analysieren:** Untersuche stets die zugrundeliegende Schwachstelle in der Pipeline (z. B. Bildauflösung/Kompression, Modell-Limitationen, ungenaue Prompt-Regeln oder fehlerhafte Suchbegriffsbildung) und behebe sie so, dass *alle* Artikel und Kategorien davon profitieren.

## 2. Multimodale Erkennung & Multi-Track-Websuche
- **Entkopplung von Merkmalen und Kategorien:** Ein einzelnes vom Vision-Modell geratenes Nomen (z. B. Tierart, falsche Produktbezeichnung) darf niemals als Single Point of Failure die gesamte Web-Recherche vergiften.
- **Mehrkanalige Suchbegriffe bilden:**
  1. *Track 1 (Objektive Attribute):* Farben, Zubehörteile, Sockel, Form und ablesbare Markierungen – ohne das geratene Subjekt vorauszusetzen.
  2. *Track 2 (OCR & Typenschilder):* Genaue Teilenummern, Modellcodes und Logos.
  3. *Track 3 (Subjekt-Hypothese):* Das geratene Produkt/Modell nur als optionale Teil-Suchanfrage.
- **Web-Grounding nach echten Requisiten:** Das Synthese-Modell muss angewiesen werden, gefundene Produkte primär über eindeutige Zubehörteile, Formen und Markierungen abzugleichen, anstatt stur an einer anfänglichen visuellen Fehlinterpretation festzuhalten.

## 3. Fehlerbehandlung & Nutzer-Feedback
- **Fehler sind interaktiv und transparent:** Zeige bei Fehlern niemals nur einen statischen Fehlertext. Biete stets direkte Aktionen an:
  - Fehler melden (mit automatischem GitHub-Issue, bereinigtem Kontext und Diagnose)
  - 1-Klick Retry (Zustand zurücksetzen und neu anstoßen)
  - Sofort-Tipps zur Selbsthilfe (z. B. Modell-Wechsel bei Rate-Limits, Komprimierungs-Hinweise bei Bildfehlern)
- **Datenschutz bei Fehlerberichten:** Keine privaten Token, Passwörter oder ungeprüfte Rohbilder in öffentliche GitHub-Issues übertragen.
