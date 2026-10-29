# SellMate AI – Architektur- und Entwicklungsrichtlinien

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
