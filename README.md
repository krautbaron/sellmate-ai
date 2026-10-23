# SellMate AI – Multi-Plattform Verkaufs-Assistent (PWA)

Mobile-optimierte Progressive Web App (PWA) mit Hintergrund-Agent & Verkaufs-Dashboard für **Kleinanzeigen.de**, **Vinted**, **Willhaben** und **Ricardo / Shpock**.

## Features
- **Batch-Agent & Verkaufs-Dashboard**: Beliebig viele Fotos hintereinander aufnehmen oder aus der Galerie wählen. Der Agent analysiert jedes Teil im Hintergrund auf Marktwert, Nachfrage-Score (1–10), Verkaufsstrategie (Einzelverkauf vs. Konvolut) und Raritäten-Status.
- **Multi-Provider KI**: Unterstützt **Neuralwatt Cloud** (`api.neuralwatt.com/v1`), **Google Gemini**, **OpenRouter.ai**, **Groq** sowie eigene OpenAI-kompatible Endpunkte inkl. automatischem Rate-Limit-Fallback.
- **Android 1-Tap Inserat**: Kopiert Preis, Plaintext-Beschreibung (garantiert ohne Markdown-Steuerzeichen) und Titel nacheinander in den Android-Zwischenablage-Verlauf (Gboard / Samsung Keyboard) und öffnet direkt die Ziel-App.
- **IndexedDB Speicher**: Speichert viele hochauflösende Artikelbilder und Analysen dauerhaft lokal im Browser.

## Aufs Handy bringen über GitHub Pages (empfohlen)

Dieses Repository enthält bereits eine fertige GitHub-Action (`.github/workflows/deploy-pages.yml`), die nur die 5 Web-Dateien (`index.html`, `app.js`, `sw.js`, `manifest.json`, `icon.svg`) veröffentlicht:

1. Erstelle auf GitHub ein neues Repository namens **`sellmate-ai`**.
2. Aktiviere im GitHub-Repository unter **Settings ➔ Pages** bei *Build and deployment* die Quelle **GitHub Actions**.
3. Nach jedem `git push` auf `main` wird deine App automatisch unter `https://<dein-github-name>.github.io/sellmate-ai/` aktualisiert.
4. Öffne die Adresse auf deinem Android-Handy in Chrome ➔ Menü (⋮) ➔ **„Zum Startbildschirm hinzufügen“**.

## Lokal am PC starten

Doppelklicke auf `start-app.bat` (startet einen lokalen Server unter `http://localhost:8080`).

## Datenschutz & Sicherheit
- Im Quellcode sind **keine API-Keys** enthalten.
- Alle API-Keys (`localStorage`) sowie Fotos und Dashboard-Analysen (`IndexedDB`) liegen ausschließlich lokal auf deinem eigenen Endgerät.
