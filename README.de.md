<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.ja.md">日本語</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a> · <a href="README.ko.md">한국어</a>
</p>

<h1 align="center">EarScribe — Kostenlose Audio-zu-Text & Spracherkennung im Browser</h1>

<p align="center">
  <b>Audio und Video direkt im Browser transkribieren. 100% kostenlos, ohne Anmeldung, ohne Upload. Unbegrenzt.</b><br/>
  <sub>Angetrieben von OpenAI Whisper über WebGPU / WebAssembly — dein Audio verlässt niemals dein Gerät.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app/de"><img alt="Live-Demo" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app/de"><img alt="Kostenlos" src="https://img.shields.io/badge/100%25-Kostenlos-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app/de"><img alt="Ohne Anmeldung" src="https://img.shields.io/badge/Ohne-Anmeldung-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app/de"><img alt="Datenschutzfreundlich" src="https://img.shields.io/badge/Lokal-Datenschutzfreundlich-0f172a?style=for-the-badge"></a>
  <img alt="Lizenz MIT" src="https://img.shields.io/badge/Lizenz-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — Kostenloses Audio-zu-Text-Tool — MP3, WAV oder M4A per Drag-and-Drop hochladen und kostenlos im Browser transkribieren, angetrieben von OpenAI Whisper"></a>
</p>

<p align="center">
  <b>Jetzt ausprobieren:</b>
  <a href="https://earscribe.app/de"><strong>earscribe.app/de</strong></a> ·
  <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/about">Über EarScribe</a>
</p>

---

## Was ist EarScribe?

**[EarScribe](https://earscribe.app/de)** ist ein **kostenloses Audio-zu-Text-Tool** und eine **kostenlose Spracherkennung**, die vollständig in deinem Webbrowser läuft. Leg eine Audiodatei ab — MP3, WAV, M4A, OGG, FLAC, WebM oder die Tonspur eines Videos — und erhalte ein vollständig mit Zeitstempeln versehenes Transkript sowie einen Ein-Klick-Export als **SRT- oder VTT-Untertitel**. Es gibt keinen Upload, keine Anmeldung, keinen API-Schlüssel und keine Kosten pro Minute.

EarScribe ist die direkteste Möglichkeit, **Audio und Video kostenlos zu transkribieren**:

- **Drag-and-Drop** für jede beliebige Audiodatei
- **OpenAI Whisper** transkribiert lokal auf deinem Gerät
- Du erhältst ein **Transkript mit Zeitstempeln**, einen synchronisierten Wellenform-Scrubber und **SRT- / VTT-Untertitel**
- Dein Audio **verlässt niemals dein Gerät** — vollständig datenschutzfreundlich, nach dem ersten Modell-Download auch offline nutzbar

> **Live-App:** **[earscribe.app/de](https://earscribe.app/de)**

---

## Inhaltsverzeichnis

- [Funktionen](#funktionen)
- [Screenshots](#screenshots)
- [Schnellstart](#schnellstart--in-3-schritten-transkribieren)
- [Vergleichstabelle](#vergleich--earscribe-vs-otterai-vs-rev)
- [Whisper-Modelle](#whisper-modelle--das-richtige-modell-wählen)
- [Unterstützte Formate & Sprachen](#unterstützte-dateiformate--sprachen)
- [Anwendungsfälle](#anwendungsfälle)
- [FAQ](#faq--häufig-gestellte-fragen)
- [Tech-Stack](#tech-stack)
- [Lokale Entwicklung](#lokale-entwicklung)
- [Lizenz](#lizenz)

---

## Funktionen

EarScribe ist ein vollständiger, **kostenloser Online-Transkriptions-Workspace** — entwickelt für Podcaster, Journalisten, Studierende und alle, die **Audio kostenlos in Text umwandeln** möchten, ohne vertrauliche Aufnahmen in einen Cloud-Dienst hochzuladen.

| | Funktion | Was das bedeutet |
|---|---|---|
| 🆓 | **100% kostenlos, unbegrenzt** | Kein Bezahlmodell, kein Tageskontingent, keine Minutengebühr. Echte **kostenlose Audio-Transkription**. |
| 🚫 | **Ohne Anmeldung, ohne Login** | Keine E-Mail, kein Konto, keine Kreditkarte. Einfach [earscribe.app/de](https://earscribe.app/de) öffnen und Datei ablegen. |
| 🔒 | **Datenschutzfreundlich by Design** | Audio verlässt dein Gerät nie. Es gibt keinen Server-Endpunkt, der deine Datei verarbeitet. |
| 🌐 | **Browser-native KI** | **OpenAI Whisper** läuft lokal via WebGPU (GPU-beschleunigt) oder WebAssembly als Fallback. |
| 🎬 | **Untertitel generieren kostenlos** | Ein-Klick-Export als **SRT- / VTT-Untertitel** — direkt verwendbar in Premiere, Final Cut, DaVinci Resolve und YouTube. |
| 📜 | **Transkript mit Zeitstempeln** | Klick auf eine beliebige Zeile springt zur entsprechenden Stelle im Audio. Eingebauter Wellenform-Scrubber. |
| 🗣️ | **99 Sprachen** | Whisper erkennt die gesprochene Sprache automatisch — keine manuelle Einstellung nötig. |
| ⚡ | **Offline nach dem ersten Start** | Modelle werden im Browser gecacht. Nachfolgende Transkriptionen funktionieren ohne Internet. |
| 🎚️ | **4 Whisper-Modelle** | Tiny (40 MB) → Base → Small → **Large v3 Turbo** für Studioqualität. |
| 📦 | **Mehrere Exportformate** | `.txt` · `.srt` · `.vtt` · `.json` (roh + Zeitstempel) |
| 🌍 | **10 UI-Sprachen** | EN · ES · DE · FR · PT-BR · RU · JA · KO · HI · AR |
| 🪶 | **Keine Werbung, kein Tracking** | Nur Plausible Analytics — kein Session-Replay, keine Cookies, kein Fingerprinting. |

---

## Screenshots

> Echte Screenshots der Live-App auf **[earscribe.app/de](https://earscribe.app/de)** — aufgenommen 2026.

### 1. Audiodatei ablegen — 100% kostenlos, ohne Anmeldung, ohne Login

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Kostenloses Audio-zu-Text-Tool — MP3, WAV, M4A, OGG, FLAC oder WebM per Drag-and-Drop im Browser ablegen. Ohne Anmeldung, ohne Login, unbegrenzte kostenlose Sprachtranskription."></a>
</p>

### 2. Transkript mit Zeitstempeln, Wellenform und Klick-Navigation

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe Transkript-Ausgabe — Audio Transkription kostenlos mit Zeitstempeln, Wellenform-Scrubber und Ein-Klick-Export als SRT- und VTT-Untertitel"></a>
</p>

### 3. Drei Schritte: Ablegen → Whisper-Modell wählen → Exportieren

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="So funktioniert kostenlose Audio-zu-Text-Umwandlung in EarScribe — Audio ablegen, OpenAI Whisper-Modell wählen (Tiny, Base, Small oder Large v3 Turbo), Transkript lesen und exportieren"></a>
</p>

### 4. Warum EarScribe — datenschutzfreundliche, browser-native Spracherkennung kostenlos

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe Funktionen — kein Upload, WebGPU und WASM, 99 Sprachen automatisch erkannt, SRT VTT JSON TXT Export, offline nutzbar, 100% kostenlos kein API-Schlüssel nötig"></a>
</p>

### 5. Wer nutzt EarScribe — Podcaster, Journalisten, Studierende, Video-Editoren

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe Anwendungsfälle — kostenlose Audio-zu-Text für Podcaster, Journalisten, Studierende, User Research, kostenloser SRT-Untertitel-Generator für Videos und Hörbuch-Transkription"></a>
</p>

### 6. EarScribe vs. Otter.ai, Rev, Whisper API — direkter Vergleich

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs. Otter.ai vs. Rev vs. Whisper API — kostenlose unbegrenzte Audio-Transkription als Alternative ohne Minutengebühren und mit Datenschutz auf dem Gerät"></a>
</p>

### 7. Kostenlose Spracherkennung — FAQ

<p align="center">
  <a href="https://earscribe.app/de"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="Kostenlose Sprachtranskription FAQ — Antworten zu Datenschutz, MP3 in Text umwandeln, SRT und VTT Untertitel-Export, unterstützte Sprachen, Offline-Nutzung und OpenAI Whisper im Browser"></a>
</p>

---

## Schnellstart — in 3 Schritten transkribieren

Der schnellste Weg zur **kostenlosen Sprachtranskription** im Web:

1. **[earscribe.app/de](https://earscribe.app/de)** in einem modernen Browser öffnen (Chrome, Edge, Safari, Firefox).
2. Deine Audiodatei auf die Seite ziehen (MP3, WAV, M4A, OGG, FLAC, WebM — bis zu ca. 2 Stunden pro Datei).
3. Ein Whisper-Modell wählen. **Base** ist für die meisten Fälle empfehlenswert; **Turbo** liefert Studio-Genauigkeit, sofern WebGPU verfügbar ist.
4. **Transkribieren** klicken. Das Audio wird dekodiert und innerhalb deines Browser-Tabs durch Whisper verarbeitet.
5. Das Transkript lesen, auf eine beliebige Zeile klicken um die Stelle abzuspielen, oder **Exportieren → .srt / .vtt / .txt / .json** wählen.

Kein Upload. Kein Konto. Kein Kontingent. Einfach **kostenlose Audio-zu-Text-Umwandlung**, die deine Daten respektiert.

> **Tipp:** Du willst ein **Video transkribieren**? Extrahiere zuerst die Tonspur (ffmpeg, Audacity oder VLC exportieren MP3 / WAV aus jedem Video) und lege sie dann in EarScribe ab.

---

## Vergleich — EarScribe vs. Otter.ai vs. Rev

Wie schneidet EarScribe gegenüber anderen Methoden ab, **Audio kostenlos zu transkribieren**?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Whisper CLI lokal |
|---|:---:|:---:|:---:|:---:|:---:|
| **Kostenlos & unbegrenzt** | ✅ | ⚠️ 300 Min/Mo | ❌ Nur Trial | ❌ Kostenpflichtig | ✅ |
| **Ohne Anmeldung / Login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Kein Upload (datenschutzfreundlich)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Im Browser nutzbar** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT Export** | ✅ | ⚠️ Kostenpflichtig | ✅ | ✅ | ⚠️ Manuell |
| **Transkript mit Zeitstempeln** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuell |
| **Offline nutzbar** | ✅ (nach 1. Ladevorgang) | ❌ | ❌ | ❌ | ✅ |
| **99 Sprachen** | ✅ | ⚠️ Begrenzt | ⚠️ Begrenzt | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installation erforderlich** | ❌ Keine | ❌ Keine | ❌ Keine | ❌ Keine | ⚠️ Python + GPU |
| **Kosten** | $0 | $0–$30/Mo | $0,25/Min | €0,20/Min | $0 (eigene Hardware) |

**Fazit:** EarScribe ist das einzige Tool, das *wirklich kostenlos, unbegrenzt, ohne Anmeldung, ohne Upload, browser-nativ und untertitelfertig* in einem Klick **Audio in Text umwandelt**. → **[Jetzt auf earscribe.app/de ausprobieren](https://earscribe.app/de)**

---

## Whisper-Modelle — das richtige Modell wählen

EarScribe liefert vier **OpenAI Whisper**-Modellgrößen. Alle laufen lokal; der erste Download wird dauerhaft gecacht.

| Modell | Größe | Genauigkeit | Geschwindigkeit | RAM | Am besten für |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | Schnelle Sprachnotizen, schwächere Geräte |
| **Whisper Base** *(Empfohlen)* | ~200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | Alltägliche Podcast- / Vorlesungstranskription |
| **Whisper Small** | ~500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | Akzente, verrauschtes Audio |
| **Whisper Large v3 Turbo** | ~800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡ (WebGPU) | 6 GB | Studioqualität, mehrere Sprecher, Musik+Sprache |

> Modelle werden **nach dem ersten Download gecacht** — die nächste Transkription startet sofort. Vollständige Übersicht auf **[earscribe.app](https://earscribe.app)**.

---

## Unterstützte Dateiformate & Sprachen

### Audioformate — MP3 in Text, WAV in Text, M4A in Text

EarScribe akzeptiert jedes Audioformat, das die Web Audio API dekodieren kann:

- **MP3 in Text** — das häufigste Podcast-Format
- **WAV in Text** — verlustfreie Studio-Aufnahmen
- **M4A in Text** — Apple Voice Memos, iPhone-Aufnahmen
- **OGG in Text** — Open-Source-Format
- **FLAC in Text** — hochauflösende Archive
- **WebM in Text** — browser-aufgezeichnetes Audio/Video

Für **Video transkribieren** (MP4, MOV, MKV): Tonspur zuerst mit einem kostenlosen Tool extrahieren (Audacity, VLC, ffmpeg) und das resultierende MP3 oder WAV in **[earscribe.app/de](https://earscribe.app/de)** ablegen.

### Sprachen — 99 unterstützt

Whisper erkennt die gesprochene Sprache automatisch. EarScribe transkribiert Deutsch, Englisch, Spanisch, Französisch, Italienisch, Portugiesisch, Russisch, Japanisch, Koreanisch, Chinesisch (Vereinfacht & Traditionell), Arabisch, Hindi, Türkisch, Niederländisch, Polnisch, Indonesisch, Schwedisch, Norwegisch, Dänisch, Finnisch, Tschechisch, Ungarisch, Griechisch, Hebräisch, Thailändisch, Vietnamesisch und 70+ weitere.

Die Benutzeroberfläche ist verfügbar in:

| Sprache | Link |
|---|---|
| 🇩🇪 Deutsch | [earscribe.app/de](https://earscribe.app/de) |
| 🇺🇸 English | [earscribe.app](https://earscribe.app) |
| 🇪🇸 Español | [earscribe.app/es](https://earscribe.app/es) |
| 🇫🇷 Français | [earscribe.app/fr](https://earscribe.app/fr) |
| 🇧🇷 Português | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| 🇷🇺 Русский | [earscribe.app/ru](https://earscribe.app/ru) |
| 🇯🇵 日本語 | [earscribe.app/ja](https://earscribe.app/ja) |
| 🇰🇷 한국어 | [earscribe.app/ko](https://earscribe.app/ko) |
| 🇮🇳 हिन्दी | [earscribe.app/hi](https://earscribe.app/hi) |
| 🇸🇦 العربية | [earscribe.app/ar](https://earscribe.app/ar) |

---

## Anwendungsfälle

EarScribe ist ein universelles **kostenloses Transkriptionstool**. Das sind die häufigsten Einsatzbereiche:

### Podcaster & Content-Ersteller

**Podcast transkribieren kostenlos** — für Show-Notes, SEO der Episode und Barrierefreiheit. **MP3 in Text umwandeln** in Minuten, dann `.srt` für Videoversionen exportieren. → [Jetzt auf earscribe.app/de starten](https://earscribe.app/de)

### Journalisten & Forscher

**Quellen-Interviews bleiben auf deinem Laptop.** Kein Drittanbieter-Server, kein Audit-Log, keine Datenpanne. **Kostenloses Interview-Transkript** mit einer der stärksten Datenschutzgarantien im Web.

### Studierende & Lehrende

**Vorlesung transkribieren** — eine aufgezeichnete Lehrveranstaltung ablegen und noch vor der nächsten Sitzung ein durchsuchbares Transkript erhalten. Funktioniert mit iPhone Voice Memos (`.m4a`) und Zoom-Aufnahmen.

### Meetings & User Research

**Audio zu Text für User-Interviews** — ein tagged Transkript erstellen, ohne sensibles Kunden-Audio an einen Drittanbieter-SaaS zu senden.

### Video-Editoren — Untertitel & Captions

**SRT-Untertitel kostenlos generieren** für YouTube, Premiere Pro, Final Cut Pro, DaVinci Resolve. Die Zeitcodes kommen direkt aus Whispers Zeitstempeln, sodass die **VTT-Untertitel** exakt synchron sind.

### Hörbücher & Langaufnahmen

Zwei-Stunden-MP3? Kein Problem. **Whisper Large v3 Turbo** verarbeitet Hörbuch-lange Aufnahmen ohne Minutengebühren und ohne API-Kontingent.

---

## FAQ — Häufig gestellte Fragen

<details>
<summary><b>Ist EarScribe wirklich 100% kostenlos und ohne Limits?</b></summary><br/>
Ja — 100% kostenlos, unbegrenzt, ohne Anmeldung und ohne Login. Es gibt keine Bezahlstufen, keine Kreditkarte, keine Minutengebühren und kein Tages- oder Monatskontingent. Das Whisper-Modell zur <b>Sprachtranskription</b> läuft auf deiner eigenen Hardware, also entstehen keine Cloud-Rechenkosten. <b>Audio zu Text kostenlos</b> — ohne Bedingungen. → <a href="https://earscribe.app/de">earscribe.app/de</a>
</details>

<details>
<summary><b>Ist mein Audio privat und sicher?</b></summary><br/>
Vollständig privat. EarScribe ist ein Local-First-<b>Audio-zu-Text-Tool</b>: Deine Audiodatei verlässt dein Gerät niemals und wird auf keinen Server hochgeladen. Kein Konto bedeutet keine gesammelten Daten. Du kannst es sogar offline nutzen, sobald das Modell heruntergeladen ist. EarScribe ist damit eine der datenschutzfreundlichsten Alternativen zu Cloud-Diensten wie Otter.ai oder Rev.
</details>

<details>
<summary><b>Wird mein Audio irgendwohin hochgeladen?</b></summary><br/>
Nein. Die <b>Audio Transkription kostenlos</b> findet vollständig lokal statt — das Audio wird auf deinem Gerät dekodiert und an ein Whisper-Modell übergeben, das in einem Web Worker läuft. Nichts wird an einen Server gesendet. <b>Keine Uploads.</b>
</details>

<details>
<summary><b>Warum ist der erste Start langsam?</b></summary><br/>
Beim ersten Mal, wenn du ein Modell für die <b>Audio-zu-Text-Umwandlung</b> auswählst, lädt dein Browser es herunter (80 MB bis 800 MB, je nach Modellgröße). Danach wird das Modell gecacht und wiederverwendet — kein erneuter Download notwendig. Nachfolgende Transkriptionen starten sofort.
</details>

<details>
<summary><b>Welche Sprachen werden unterstützt?</b></summary><br/>
Die <b>Spracherkennung kostenlos</b> unterstützt 99 Sprachen über Whisper. Die Sprache wird automatisch erkannt — du musst keine manuelle Auswahl treffen. Auch deutsche Audioaufnahmen werden zuverlässig erkannt.
</details>

<details>
<summary><b>Kann ich ein Video transkribieren?</b></summary><br/>
Nicht direkt. Um <b>Video zu Text</b> zu konvertieren, extrahiere zuerst die Tonspur (jedes Tool, das MP3 oder WAV ausgeben kann, funktioniert) und lege diese in <a href="https://earscribe.app/de">earscribe.app/de</a> ab. ffmpeg, VLC und Audacity eignen sich alle dafür.
</details>

<details>
<summary><b>Funktioniert EarScribe offline?</b></summary><br/>
Nach dem einmaligen Download des Modells ja — <b>kostenlose Sprachtranskription</b> funktioniert offline. Die Seite muss beim ersten Mal geladen werden, aber anschließende Transkriptionen laufen ohne Internetverbindung. Das Modell wird im Browser-Cache gespeichert.
</details>

<details>
<summary><b>Wie wandle ich eine MP3-Datei kostenlos in Text um?</b></summary><br/>
Ziehe die MP3-Datei in <a href="https://earscribe.app/de">EarScribe</a> für <b>MP3 in Text</b> kostenlos. Die Datei wird im Browser dekodiert, Whisper transkribiert sie lokal, und du kannst das Ergebnis kopieren oder als SRT, VTT, TXT oder JSON exportieren. Kein Upload-Schritt, kein Konto erforderlich. Das gleiche gilt für <b>WAV in Text</b> und <b>M4A in Text</b>.
</details>

<details>
<summary><b>Ist EarScribe eine kostenlose Alternative zu Otter.ai oder Rev?</b></summary><br/>
Ja. EarScribe ist eine <b>kostenlose Alternative zu Otter.ai</b> und Rev für <b>Audio Transkription kostenlos</b>. Der Unterschied: Die Berechnung findet auf deiner eigenen Hardware statt, sodass dein Audio das Gerät niemals verlässt und keine Minutengebühren oder Abonnements anfallen. Kein Konto nötig, kostenlos unbegrenzt nutzbar.
</details>

<details>
<summary><b>Kann ich SRT- oder VTT-Untertitel aus Audio generieren?</b></summary><br/>
Ja. Nach der <b>Audio Transkription kostenlos</b> klickst du auf <b>Exportieren → .srt</b> oder <b>.vtt</b>. Die Zeitcodes stammen direkt aus Whispers Zeitstempeln, sodass die <b>SRT-Untertitel</b> und <b>VTT-Untertitel</b> mit der Transkription übereinstimmen — ohne manuelle Nachbearbeitung. Ideal für YouTube, Premiere Pro und DaVinci Resolve.
</details>

<details>
<summary><b>Läuft hier wirklich OpenAI Whisper im Browser?</b></summary><br/>
Ja — EarScribe führt die <b>WebGPU Transkription</b> über <b>OpenAI Whisper</b> (Tiny, Base, Small und Large v3 Turbo) direkt im Browser aus, über Transformers.js auf WebGPU, mit WebAssembly als Fallback wenn WebGPU nicht verfügbar ist. Das ist echte <b>OpenAI Whisper im Browser</b>-Technologie — keine Cloud-API, keine serverseitige Verarbeitung.
</details>

> Weitere Antworten auf der **[Über-Seite](https://earscribe.app/about)**.

---

## Tech-Stack

EarScribe ist auf Schnelligkeit, statische Auslieferung und günstige Hostingkosten ausgelegt:

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web (WebGPU + WASM)
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny, Base, Small, Large v3 Turbo (ONNX-quantisiert)
- **[next-intl](https://next-intl.dev)** — i18n (10 Sprachen enthalten)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — Deployment auf Cloudflare Pages
- **Plausible Analytics** (nur in Produktion geladen)

Das gesamte Frontend ist **statisch**. Modellgewichte werden beim ersten Einsatz vom Hugging Face CDN abgerufen und im Browser-CacheStorage gespeichert.

---

## Lokale Entwicklung

```bash
git clone https://github.com/<your-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

Typprüfung, Linting und Build:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

Deployment auf Cloudflare Pages:

```bash
pnpm cf:build          # erzeugt .open-next/
pnpm cf:preview        # lokale Vorschau via Wrangler
pnpm cf:deploy         # wrangler deploy
```

---

## Lizenz

[MIT](LICENSE) — frei für private und kommerzielle Nutzung.

---

<p align="center">
  <b>Jetzt ausprobieren: <a href="https://earscribe.app/de">earscribe.app/de</a></b><br/>
  <sub>Audio zu Text kostenlos · Spracherkennung kostenlos · Audio und Video transkribieren · 100% kostenlos · Ohne Anmeldung · Datenschutzfreundlich · Im Browser · Lokal · Offline</sub>
</p>

<p align="center">
  Entwickelt mit OpenAI Whisper, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a> und <a href="https://onnxruntime.ai">ONNX Runtime Web</a>.
</p>
