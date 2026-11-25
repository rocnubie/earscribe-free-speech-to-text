<p align="center">
  <b>🌐 Languages:</b><br/>
  <a href="README.md">English</a> ·
  <a href="README.zh-CN.md">简体中文</a> ·
  <a href="README.zh-TW.md">繁體中文</a> ·
  <a href="README.ja.md">日本語</a> ·
  <a href="README.ko.md">한국어</a> ·
  <a href="README.es.md">Español</a> ·
  <a href="README.pt-BR.md">Português</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.de.md">Deutsch</a> ·
  <a href="README.it.md">Italiano</a> ·
  <a href="README.nl.md">Nederlands</a> ·
  <a href="README.pl.md">Polski</a> ·
  <a href="README.ru.md">Русский</a> ·
  <a href="README.uk.md">Українська</a> ·
  <a href="README.sv.md">Svenska</a> ·
  <a href="README.nb.md">Norsk</a> ·
  <a href="README.da.md">Dansk</a> ·
  <a href="README.fi.md">Suomi</a> ·
  <a href="README.id.md">Bahasa Indonesia</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.vi.md">Tiếng Việt</a> ·
  <a href="README.th.md">ไทย</a> ·
  <a href="README.hi.md">हिन्दी</a> ·
  <a href="README.bn.md">বাংলা</a>
</p>

<h1 align="center">EarScribe — Audio und Video kostenlos im Browser in Text umwandeln</h1>

<p align="center">
  <b>Legen Sie eine Audiodatei oder ein Video ab, oder nehmen Sie mit dem Mikrofon auf. Sie erhalten ein Transkript mit Zeitstempeln und Untertitel.</b><br/>
  <sub>Whisper läuft über WebGPU oder WebAssembly auf Ihrem eigenen Gerät — die Aufnahme wird niemals hochgeladen.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live-App" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Kostenlos" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Ohne Registrierung" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privat" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Lizenz MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — Audio und Video kostenlos im Browser in Text umwandeln. Legen Sie eine MP3-, WAV-, M4A- oder MP4-Datei ab und erhalten Sie ein Transkript mit Zeitstempeln, ohne etwas hochzuladen."></a>
</p>

<p align="center">
  <b>🔗 App öffnen:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Anleitungen</a> ·
  <a href="https://earscribe.app/changelog">Änderungsprotokoll</a> ·
  <a href="https://earscribe.app/about">Über uns</a>
</p>

---

## 🎙️ Was EarScribe ist

Ein Arbeitsbereich für Transkription, der vollständig in einem Browser-Tab läuft. Sie geben ihm Audio, eine Videodatei oder Ihr Mikrofon; zurück kommt Text mit Zeitstempeln, die Sie zum Nachhören anklicken können, dazu Untertiteldateien, die Sie an einen Editor weitergeben. Es gibt kein Konto, keinen Upload und keine Abrechnung pro Minute.

Drei Wege hinein, eine Pipeline:

- **Eine Datei** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus oder fast alles, was die Web Audio API dekodieren kann, bis zu 1 GiB.
- **Ein Video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. Die Tonspur wird demuxt und **innerhalb des Tabs** als 16 kHz Mono neu kodiert, danach wie jede andere Datei transkribiert. Kein ffmpeg, keine Konverter-Website.
- **Das Mikrofon** — aufnehmen und transkribieren am selben Ort, für eine Vorlesung, ein Gespräch, das Sie aufzeichnen dürfen, oder eine Sprachnotiz, die sonst verloren ginge.

Mit der Warteschlange werfen Sie einen ganzen Ordner voller Dateien ab und gehen weg; mit dem Arbeitsbereich unter `/dashboard` werden die Ergebnisse zu Projekten, die Sie später erneut öffnen, bearbeiten und exportieren können.

> 👉 **Live-App:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Inhalt

- [✨ Was es kann](#-was-es-kann)
- [🖼️ Screenshots](#️-screenshots)
- [🚀 Schnellstart](#-schnellstart)
- [🗂️ Der Arbeitsbereich](#️-der-arbeitsbereich)
- [💸 Was es kostet](#-was-es-kostet)
- [🆚 Vergleich](#-vergleich)
- [🌍 Unterstützte Eingaben & Sprachen](#-unterstützte-eingaben--sprachen)
- [💼 Anwendungsfälle](#-anwendungsfälle)
- [🚧 Was es nicht leistet](#-was-es-nicht-leistet)
- [❓ FAQ](#-faq)
- [🛠️ Tech-Stack](#️-tech-stack)
- [🧑‍💻 Lokale Entwicklung](#-lokale-entwicklung)
- [☁️ Deployment](#️-deployment)
- [🌐 Eine neue Sprache hinzufügen](#-eine-neue-sprache-hinzufügen)
- [🔬 Ein neues Whisper-Modell hinzufügen](#-ein-neues-whisper-modell-hinzufügen)
- [🤝 Mitwirken](#-mitwirken)
- [📄 Lizenz](#-lizenz)

---

## ✨ Was es kann

| | Funktion | Das bekommen Sie konkret |
|---|---|---|
| 🎬 | **Audio, Video und Mikrofon** | Video-Container werden direkt angenommen. Die Tonspur wird lokal extrahiert, sodass auch eine 200 MB große MP4-Datei das Gerät nie verlässt. |
| 📝 | **Transkript mit Zeitstempeln** | Jeder Cue trägt eine Start- und eine Endzeit. Klicken Sie eine Zeile an, um diesen Moment zu hören; die Wellenform folgt mit. |
| 🔍 | **Suche im Transkript** | Ein Name, eine Zahl, ein Begriff — springen Sie zum Satz und spielen Sie ihn erneut ab, statt die Datei noch einmal anzuhören. |
| 🎞️ | **Untertitel-Export** | SRT, WebVTT, reiner Text, JSON (das Transkript-Objekt mit Zeitangaben voller Genauigkeit) oder die Zwischenablage. |
| 🧪 | **Untertitel-Prüfung** | Markiert Cues, die zu lang, zu schnell, wiederholt, leer oder überlappend sind, bevor Sie exportieren. |
| 📚 | **Stapel-Warteschlange** | Mehrere Dateien abwerfen, ein Modell und eine gesprochene Sprache festlegen und die Warteschlange arbeitet sie der Reihe nach ab. Nach der aktuellen Datei können Sie jederzeit pausieren. |
| 🗂️ | **Projekte** | Ergebnisse werden im Browser als Projekte unter `/dashboard` gespeichert: Transkripte, Untertitel, Quelldateien und ein Papierkorb, später wieder zu öffnen. |
| ✏️ | **Untertitel bearbeiten** | Text korrigieren, Ein- und Ausstiegspunkt eines Cues verschieben, einen Cue teilen oder löschen und anschließend erneut exportieren. |
| 💾 | **Sicherung und Wiederherstellung** | Den gesamten Arbeitsbereich als eine Datei exportieren und in einem anderen Browser importieren. |
| 🔁 | **Untertitel konvertieren** | SRT ⇄ VTT und SRT → Text, im Browser, ohne Modell-Download — das einzige Werkzeug hier, das sofort startet. |
| 🆓 | **Kostenlos und unbegrenzt** | Keine Bezahlstufe, kein Tageskontingent, keine Gebühr pro Minute, kein Konto. |
| 🔒 | **Privat durch Architektur** | Die Transkription läuft lokal. Öffentliche Seiten enthalten Analyse und Werbung; `/dashboard` ist werbefrei. |
| 🌍 | **27 Oberflächensprachen, 99 gesprochene Sprachen** | Die Oberfläche ist in 27 Locales übersetzt; Whisper erkennt die gesprochene Sprache automatisch. |

---

## 🖼️ Screenshots

> Echte Aufnahmen von der Live-Seite unter **[earscribe.app](https://earscribe.app)**.

### 1. Datei ablegen, Video ablegen oder aufnehmen — ohne Registrierung, ohne Upload

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Kostenlos Audio und Video in Text umwandeln — MP3, WAV, M4A, MP4, MOV oder MKV im Browser ablegen. Ohne Registrierung, ohne Login."></a>
</p>

### 2. Transkript mit Zeitstempeln und Wellenform — jede Zeile zum Springen anklicken

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Transkript-Ausgabe von EarScribe — Audio mit Zeitstempeln in Text umgewandelt, mit Wellenform-Regler und Ein-Klick-Export als SRT- und VTT-Untertitel"></a>
</p>

### 3. Drei Schritte: ablegen → Whisper-Modell wählen → exportieren

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="So funktioniert kostenlose Audio-zu-Text-Umwandlung bei EarScribe — Audio oder Video ablegen, ein Whisper-Modell wählen (tiny, base, small oder turbo), Transkript lesen und exportieren"></a>
</p>

### 4. Warum EarScribe — Datenschutz zuerst, Whisper direkt im Browser

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Funktionen von EarScribe — privat ohne Upload, WebGPU plus WASM, 99 gesprochene Sprachen automatisch erkannt, Export als SRT VTT JSON TXT, Inferenz auf dem Gerät"></a>
</p>

### 5. Wer EarScribe nutzt — Podcaster, Journalisten, Studierende, Cutter

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Anwendungsfälle von EarScribe — kostenlos Audio in Text für Podcaster, Journalisten, Studierende, Nutzerforschung, Video-Untertitel und Hörbuch-Transkription"></a>
</p>

### 6. EarScribe im Vergleich zu Otter.ai, Rev, HappyScribe und einer lokalen Whisper-Installation

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Vergleich EarScribe gegen Otter.ai, Rev und HappyScribe — kostenlos und unbegrenzt Audio in Text, Inferenz auf dem Gerät, keine Gebühren pro Minute"></a>
</p>

### 7. FAQ — Datenschutz, Formate, Untertitel-Export, Offline-Nutzung

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ zur kostenlosen Spracherkennung — Antworten zu Datenschutz, MP3 und Video in Text, Export als SRT- und VTT-Untertitel, unterstützte Sprachen, Offline-Nutzung und Whisper im Browser"></a>
</p>

---

## 🚀 Schnellstart

1. Öffnen Sie **[earscribe.app](https://earscribe.app)** in Chrome, Edge, Safari oder Firefox.
2. Legen Sie eine Datei ab — oder ein Video, oder drücken Sie auf Aufnahme. Erlaubt sind bis zu 1 GiB pro Datei; die eigentliche Grenze ist der Arbeitsspeicher Ihres Geräts, nicht die Größe auf der Festplatte.
3. Wählen Sie ein Modell. **base** ist voreingestellt und für die meiste Sprache richtig; **tiny** eignet sich für ein Telefon oder eine kurze Sprachnotiz; **small** und **turbo** für Akzente, laute Umgebungen oder wichtiges Material.
4. Drücken Sie auf **Transkribieren**. Das Audio wird dekodiert und im Tab an Whisper übergeben. Beim ersten Lauf werden die Gewichte heruntergeladen; achten Sie deshalb auf die Größenangabe auf der Schaltfläche.
5. Lesen Sie das Transkript, klicken Sie eine Zeile an, um sie erneut abzuspielen, korrigieren Sie, was zählt, und wählen Sie dann **Exportieren → SRT / VTT / TXT / JSON** oder kopieren Sie den Text.

Lieber einen ganzen Stapel? Wechseln Sie in die Warteschlange, werfen Sie beliebig viele Dateien ab und wählen Sie das Modell einmal. Die Warteschlange arbeitet eine Datei nach der anderen ab, nutzt das bereits im Speicher befindliche Modell weiter und speichert jedes Ergebnis als Projekt.

> 💡 **Kein Konvertierungsschritt nötig.** Eine zwei Stunden lange MP4-Datei geht direkt hinein. Wenn Sie lieber nur das Audio behalten möchten, kann die App die Tonspur eines Videos für Sie extrahieren.

---

## 🗂️ Der Arbeitsbereich

`/dashboard` ist dieselbe Transkriptions-Engine, nur mit Gedächtnis. Alles liegt in diesem Browser — IndexedDB für die Projektdatensätze, CacheStorage für die Modellgewichte — und nichts wird mit einem Konto synchronisiert, weil es kein Konto gibt.

| Bereich | Was dort liegt |
|---|---|
| **Projekte** | Alles, das Neueste zuerst. |
| **Transkripte** | Projekte aus einem Transkriptionslauf. Werden ihre Cues bearbeitet, bleiben sie hier. |
| **Untertitel** | Projekte aus einer Untertiteldatei — der Konverter und Importe —, damit Untertitelarbeit von Sprachaufnahmen getrennt bleibt. |
| **Dateien** | Die Quelldateien, die der Arbeitsbereich hält, filterbar nach Art: Transkripte, Untertitel, Audio. Das Original-Audio wird standardmäßig **nicht** gespeichert. |
| **Papierkorb** | Gelöschte Projekte, wiederherstellbar, bis Sie ihn leeren. |

Innerhalb eines Projekts können Sie das Transkript durchsuchen, einen Zeitstempel zum erneuten Abspielen anklicken, die Untertitel-Cues bearbeiten (Text, Ein- und Ausstiegspunkte, hinzufügen oder entfernen), lange Cues in kürzere umbrechen, in jedem Format erneut exportieren oder den Mediaplayer öffnen, ohne die Seite zu verlassen.

**Sicherung:** Der Arbeitsbereich exportiert sich als eine einzige Datei (bis zu 320 MB) und lässt sich in einem anderen Browser oder auf einem anderen Rechner importieren. Da Projekte das Gerät nie verlassen, ist diese Datei die einzige Kopie, die reist — behandeln Sie sie wie jede andere Dokumentensicherung.

---

## 💸 Was es kostet

Kostenlos heißt nicht schwerelos. Die folgenden Zahlen sind gemessene Download-Größen je Modell und Backend, keine Schätzungen:

| Modell | WebGPU | WebAssembly | Typischer Einsatz |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Sprachnotizen, einfache Telefone, ein erster Versuch |
| **base** *(Standard)* | 291 MB | 77 MB | Interviews, Besprechungen, Podcasts |
| **small** | 968 MB | 249 MB | Akzentgefärbte Sprache, laute Räume |
| **turbo** | 3.24 GB | 1.09 GB | Studioqualität, wenn Genauigkeit mehr zählt als Zeit |

- **Einmal laden, danach aus dem Cache.** Die Gewichte liegen im Browser-Cache; ein zweiter Lauf lädt nichts nach. Ein anderes Browserprofil bedeutet einen erneuten Download.
- **Die GPU lohnt sich.** Auf demselben Rechner brauchte WebGPU für eine 40-Minuten-Datei mit base rund 3.8 Minuten gegenüber 9.4 auf der CPU — etwa 2.5× schneller, für den drei- bis vierfachen Download. `turbo` auf WebGPU hat in unserem Test seinen 3.24 GB großen Download nie abgeschlossen und ist deshalb als ungemessen geführt, nicht als schnell.
- **Der Speicher entscheidet, nicht die Dateigröße.** Lange Aufnahmen werden vor der Transkription auf 16 kHz Mono herunterdekodiert. Eine 40-Minuten-MP3 braucht einige hundert Megabyte; ein zwei Stunden langes Stereo-WAV kann einen Tab schon vor dem Start erschöpfen. Die Dekodierung fordert inzwischen direkt 16 kHz an, was den Spitzenverbrauch bei einer zwei Stunden langen Stereo-Datei von etwa 1.6 GB auf 0.5 GB gesenkt hat.
- **Kein Server, keine Warteschlange auf einem fremden Rechner.** Die Zeit gehört Ihrer CPU, ein langsames Notebook ist also langsam. Das ist der Preis dafür, nichts hochzuladen.

Die vollständigen Messungen mit Methode und den fehlgeschlagenen Läufen stehen in den [Anleitungen](https://earscribe.app/guides).

---

## 🆚 Vergleich

Wie schlägt sich EarScribe im Jahr 2026 gegen andere Wege, Audio zu transkribieren?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Lokale Whisper-CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Kostenlos und unbegrenzt** | ✅ | ⚠️ 300 Min./Monat | ❌ Nur Testphase | ❌ Kostenpflichtig | ✅ |
| **Ohne Registrierung / Login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Ohne Upload (privat)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video ohne Upload** | ✅ Lokal extrahiert | ❌ Upload nötig | ❌ Upload nötig | ❌ Upload nötig | ✅ Braucht ffmpeg |
| **Läuft im Browser** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT-/VTT-Export** | ✅ | ⚠️ Kostenpflichtig | ✅ | ✅ | ⚠️ Manuell |
| **Transkript mit Zeitstempeln** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuell |
| **Lokale Inferenz** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 gesprochene Sprachen** | ✅ | ⚠️ Eingeschränkt | ⚠️ Eingeschränkt | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installation nötig** | ❌ Keine | ❌ Keine | ❌ Keine | ❌ Keine | ⚠️ Python + GPU |
| **Kosten** | $0 | $0–$30/Monat | $0.25/Min. | €0.20/Min. | $0 (Ihre Hardware) |

**Wo es verliert:** Eine lokale Installation kann ein größeres Modell auf einem schnelleren Backend ausführen als ein Browser-Tab, und ein Bezahldienst fügt Sprecherbezeichnungen und einen Team-Arbeitsbereich hinzu. Der Vorteil von EarScribe ist, dass es kostenlos ist, nichts installiert werden muss und das Audio nirgendwohin geht.

→ **[Auf earscribe.app ausprobieren](https://earscribe.app)**

---

## 🌍 Unterstützte Eingaben & Sprachen

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Akzeptiert wird alles, was die Web Audio API dekodieren kann; die sieben genannten decken nahezu jede Aufnahme ab, die Ihnen begegnet.

- 🎵 **[MP3 in Text](https://earscribe.app/mp3-to-text)** — der Standard für Podcasts und Interviews
- 🎙️ **[WAV in Text](https://earscribe.app/wav-to-text)** — verlustfreie Studio- und Feldaufnahmen
- 📱 **[M4A in Text](https://earscribe.app/m4a-to-text)** — iPhone-Sprachmemos
- 🎧 **[Sprachnotiz in Text](https://earscribe.app/voice-memo-to-text)** — Telefonaufnahmen unterwegs
- 🔊 **[Audio in Text](https://earscribe.app/audio-to-text)** — der allgemeine Einstieg
- 🎬 **[Audio in SRT](https://earscribe.app/audio-to-srt)** — direkt zu Untertiteln

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

Die Tonspur wird mit [mediabunny](https://mediabunny.dev) demuxt, mit WebCodecs dekodiert und als kleine Mono-MP3 mit 16 kHz neu kodiert (oder als WAV, wo kein MP3-Encoder vorhanden ist) — vollständig lokal. Einen Container, den der Browser nicht dekodieren kann, quittiert die App mit einer klaren Meldung statt mit einem stillen leeren Transkript.

### Mikrofon

Die Aufnahme findet im Tab mit MediaRecorder statt. Eine Aufnahme wird genau wie eine abgelegte Datei transkribiert; Live-Untertitel während der Aufnahme gibt es **nicht** (siehe [was es nicht leistet](#-was-es-nicht-leistet)).

### Sprachen — 99 gesprochene, 27 Oberflächensprachen

Whisper erkennt die gesprochene Sprache automatisch: Englisch, Spanisch, Französisch, Deutsch, Italienisch, Portugiesisch, Russisch, Japanisch, Koreanisch, Chinesisch (vereinfacht und traditionell), Arabisch, Hindi, Türkisch, Niederländisch, Polnisch, Indonesisch, Schwedisch, Norwegisch, Dänisch, Finnisch, Tschechisch, Ungarisch, Griechisch, Hebräisch, Thailändisch, Vietnamesisch und über 70 weitere.

Die Oberfläche ist in 27 Locales übersetzt. Englisch liegt unter `/`, die anderen 26 tragen ein Präfix:

| | | | |
|---|---|---|---|
| [English](https://earscribe.app) | [简体中文](https://earscribe.app/zh-CN) | [日本語](https://earscribe.app/ja) | [한국어](https://earscribe.app/ko) |
| [Español](https://earscribe.app/es) | [Português (BR)](https://earscribe.app/pt-br) | [Deutsch](https://earscribe.app/de) | [Français](https://earscribe.app/fr) |
| [Русский](https://earscribe.app/ru) | [Italiano](https://earscribe.app/it) | [Polski](https://earscribe.app/pl) | [Nederlands](https://earscribe.app/nl) |
| [Українська](https://earscribe.app/uk) | [Türkçe](https://earscribe.app/tr) | [Tiếng Việt](https://earscribe.app/vi) | [ไทย](https://earscribe.app/th) |
| [हिन्दी](https://earscribe.app/hi) | [বাংলা](https://earscribe.app/bn) | [اردو](https://earscribe.app/ur) | [العربية](https://earscribe.app/ar) |
| [فارسی](https://earscribe.app/fa) | [Bahasa Indonesia](https://earscribe.app/id) | [Svenska](https://earscribe.app/sv) | [Norsk](https://earscribe.app/nb) |
| [Dansk](https://earscribe.app/da) | [Suomi](https://earscribe.app/fi) | [繁體中文](https://earscribe.app/zh-TW) | |

---

## 💼 Anwendungsfälle

### 🎙️ Podcaster und Creator
**[Podcast-Transkription](https://earscribe.app/podcast-transcription)** für Shownotes, die SEO der Episoden und Barrierefreiheit. Exportieren Sie SRT für die Videoversion, TXT für den Blog.

### 📰 Journalisten und Forschende
**[Interview-Transkription](https://earscribe.app/interview-transcription)**, bei der die Quellaufnahme auf Ihrem Notebook bleibt. Es existiert keine Kopie bei Dritten, die sich leaken, beschlagnahmen oder prüfen ließe.

### 🎓 Studierende und Lehrende
**[Vorlesungs-Transkription](https://earscribe.app/audio-to-text)** einer aufgezeichneten Veranstaltung, durchsuchbar schon vor der nächsten Sitzung. Funktioniert mit iPhone-Sprachmemos und Zoom-Exporten.

### 📞 Besprechungen und Nutzerforschung
**[Besprechungsaufnahme in Text](https://earscribe.app/meeting-recording-to-text)** — ein Transkript des Gesprächs, keine automatisch erzeugten Besprechungsnotizen.

### 🎬 Videoschnitt
**[Audio in SRT](https://earscribe.app/audio-to-srt)** für YouTube, Premiere, Final Cut und Resolve. Das Cue-Timing stammt aus den Zeitstempeln von Whisper selbst, und die Untertitel-Prüfung markiert, was auf dem Bildschirm überlaufen würde.

### 📚 Hörbücher und lange Aufnahmen
Zwei-Stunden-Dateien werden unterstützt, sind aber genau der Fall, in dem der Gerätespeicher entscheidet. Lesen Sie [wie mit langem Audio umgegangen wird](https://earscribe.app/guides/how-to-transcribe-long-audio), bevor Sie eine vierstündige Datei starten.

---

## 🚧 Was es nicht leistet

Klarheit an dieser Stelle erspart allen einen vergeudeten Lauf:

- **Keine Sprechertrennung.** Zwei Personen in einer Datei ergeben flachen Text ohne Bezeichnungen wie „Sprecher 1 / Sprecher 2“. Die Interviewseite sagt das mit Absicht.
- **Keine Übersetzung.** Das Transkript bleibt in der gesprochenen Sprache; Oberflächensprache und gesprochene Sprache haben nichts miteinander zu tun.
- **Keine Live-Untertitel.** Aufnahme und Transkription sind getrennte Schritte — das Mikrofon nimmt zuerst auf, danach wird die Datei transkribiert.
- **Die Warteschlange ist seriell und braucht den offenen Tab.** Ein Modell und eine Spracheinstellung für den gesamten Stapel. Wird der Tab geschlossen, hält sie an.
- **Keine Synchronisierung zwischen Geräten.** Projekte liegen in diesem Browser. Nutzen Sie den Export des Arbeitsbereichs, um sie zu verschieben.
- **Keine Offline-App.** Die Gewichte liegen im Cache, die Seite selbst wird jedoch aus dem Netz geladen. Eine Installation fügt eine Verknüpfung auf dem Desktop oder Startbildschirm hinzu, keine Offline-Kopie.
- **1 GiB pro Datei ist die harte Grenze; der Speicher ist die praktische.**

---

## ❓ FAQ

<details>
<summary><b>Ist EarScribe wirklich kostenlos, ohne Limits?</b></summary><br/>
Ja — keine Bezahlstufe, keine Kreditkarte, keine Gebühr pro Minute, kein Tages- oder Monatskontingent, kein Konto. Die Rechenleistung erbringt Ihre eigene Hardware, es gibt also keine Cloud-Rechnung, die weitergegeben würde. Es gibt eine Obergrenze von 1 GiB pro Datei, und der Arbeitsspeicher Ihres Geräts begrenzt, was tatsächlich fertig wird.
</details>

<details>
<summary><b>Wird mein Audio irgendwohin hochgeladen?</b></summary><br/>
Nein. Audio wird im Tab dekodiert und einem Whisper-Modell übergeben, das in einem Web Worker läuft. Die Modellgewichte werden von einem CDN <i>in</i> Ihren Browser geladen, das CDN sieht also Ihre IP-Adresse — die Aufnahme wird jedoch nicht gesendet. Öffentliche Seiten enthalten Google AdSense — außer den persischen Seiten, die die AdSense-Richtlinien ausschließen — sowie cookielose Plausible-Analyse; <code>/dashboard</code> lädt keinen Werbecode.
</details>

<details>
<summary><b>Kann ich ein Video transkribieren?</b></summary><br/>
Ja, direkt — MP4, MOV, MKV, WebM, M4V, TS, QT und M2TS. Die Tonspur wird im Browser extrahiert und wie eine normale Datei transkribiert; ffmpeg oder eine Konverter-Website brauchen Sie dafür nicht. Nutzt ein Container einen Codec, den der Browser nicht dekodieren kann, sagt die App das, statt ein leeres Transkript zu liefern.
</details>

<details>
<summary><b>Warum ist der erste Lauf langsam?</b></summary><br/>
Beim ersten Einsatz eines Modells lädt der Browser seine Gewichte herunter — 41 MB für tiny auf WebAssembly bis 3.24 GB für turbo auf WebGPU. Danach liegen sie im Cache. Wählen Sie <b>base</b> (77 MB auf WebAssembly, 291 MB auf WebGPU) für fast alles.
</details>

<details>
<summary><b>Wie genau ist es, und welches Modell soll ich wählen?</b></summary><br/>
Auf demselben 34-Sekunden-Clip wichen unsere vier Modelle bei 26 von 111 Wörtern voneinander ab, und dasselbe Modell mit zwei Download-Größen widersprach sich selbst. Entscheiden Sie nach den Wörtern, die Ihnen wichtig sind, nicht nach einem Genauigkeitsprozentwert: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">die Modellanleitung</a> zeigt die tatsächlichen Unterschiede.
</details>

<details>
<summary><b>Bekomme ich SRT- oder VTT-Untertitel?</b></summary><br/>
Ja: Exportieren → SRT oder VTT. Das Timing stammt aus den Segmentgrenzen von Whisper selbst, nicht aus einer nachträglichen Texttrennung. Die Untertitel-Prüfung markiert Cues, die zu lang, zu schnell, wiederholt, leer oder überlappend sind, und Sie können Text und Timing vor dem Export bearbeiten.
</details>

<details>
<summary><b>Was, wenn ich bereits eine SRT- oder VTT-Datei habe?</b></summary><br/>
Konvertieren Sie sie ohne Modell-Download: <a href="https://earscribe.app/srt-to-vtt">SRT in VTT</a> und <a href="https://earscribe.app/srt-to-txt">SRT in Text</a> lesen die Datei lokal ein. Nichts wird hochgeladen, keine Whisper-Gewichte werden geladen.
</details>

<details>
<summary><b>Funktioniert es offline?</b></summary><br/>
Der Transkriptionsschritt ja: Sobald Seite und Modell geladen sind, wird Audio verarbeitet, ohne einen Transkriptionsserver zu kontaktieren. Die App ist aber kein Offline-Paket — zum Öffnen braucht sie das Netz, und ein Modell, das Sie nie heruntergeladen haben, muss erst geholt werden. Eine Installation aus der Fußzeile fügt eine Verknüpfung hinzu, die in den Arbeitsbereich führt; eine Offline-Kopie entsteht dabei nicht.
</details>

<details>
<summary><b>Wird gekennzeichnet, wer spricht?</b></summary><br/>
Nein. Die Ausgabe ist flacher Text mit Zeitcodes. Sprechertrennung ist nicht Teil dieses Builds, und die App gibt nichts anderes vor.
</details>

<details>
<summary><b>Wo liegen meine Ergebnisse?</b></summary><br/>
In diesem Browser: Projekte in IndexedDB, Modellgewichte in CacheStorage. Das Original-Audio wird nicht mit einem Projekt gespeichert, sofern Sie es nicht behalten. Eine Seite, die nie im Arbeitsbereich gespeichert wurde, startet beim Neuladen leer; nutzen Sie <code>/dashboard</code> und dessen Export, um alles zu behalten, was Ihnen wichtig ist.
</details>

<details>
<summary><b>Gibt es eine kostenlose Alternative zu Otter.ai oder Rev?</b></summary><br/>
EarScribe ist eine kostenlose Alternative zu Cloud-Transkriptionsdiensten: Sie erbringen die Rechenleistung, das Audio bleibt vor Ort, und es gibt keine Gebühren pro Minute. Der Kompromiss ist real — keine Sprecherbezeichnungen, kein Team-Arbeitsbereich, und lange Dateien sind durch Ihre Maschine begrenzt.
</details>

<details>
<summary><b>Wie wandle ich eine MP3 kostenlos in Text um?</b></summary><br/>
Legen Sie die MP3 auf <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (oder die Startseite). Sie wird in Ihrem Browser dekodiert, lokal transkribiert und lässt sich kopieren oder als SRT, VTT, TXT oder JSON exportieren.
</details>

> Weitere Antworten auf der **[Seite „Über uns“](https://earscribe.app/about)**, Messnotizen in den **[Anleitungen](https://earscribe.app/guides)**.

---

## 🛠️ Tech-Stack

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU mit WebAssembly als Rückfallebene
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small und large-v3-turbo, ONNX-quantisiert
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — Video-Demuxing und Audio-Extraktion im Tab
- **[next-intl](https://next-intl.dev)** — 27 Locales, ein Nachrichtenkatalog pro Sprache
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** für das Hosting, mit einigen Pages Functions (Modell-Host, Feedback-Endpunkt)

Die Seite wird statisch gerendert und hydratisiert im Browser; Transkription und Untertitel-Konvertierung laufen ausschließlich clientseitig. Die Modellgewichte kommen beim ersten Einsatz vom Hugging-Face-CDN und liegen danach im CacheStorage.

---

## 🧑‍💻 Lokale Entwicklung

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Prüfungen, die vor einem Deployment laufen:

```bash
pnpm typecheck
pnpm lint
pnpm test              # node:test — queue state machine, subtitle parsers, release id
pnpm i18n:gate         # no missing keys, no English leftovers, no broken placeholders
pnpm seo:check         # page copy, keyword coverage, FAQ and cursor audits
node scripts/sitemap-audit.mjs
node scripts/llms-txt-audit.mjs
pnpm readme:audit      # README sizes vs lib/models.ts, links, 9-language parity
```

`pnpm build` erzeugt einen statischen Export in `out/`. Mehrere Prüfungen lesen `out/`, führen Sie den Build also zuerst aus.

---

## ☁️ Deployment

Produktions-Deployments laufen über einen Befehl, der alle Prüfungen der Reihe nach ausführt:

```bash
pnpm pages:deploy
```

Zuerst vergleicht er die lokale Deployment-Marke (`deployId` in `lib/release.ts`) mit der, die auf der Live-Seite unter `/changelog` ausgeliefert wird, und bricht ab, wenn beide übereinstimmen — so wird ein veralteter Build erkannt. Danach baut er, führt die Prüfungen für Links, Anleitungen, `llms.txt`, i18n, Sitemap und PWA aus und veröffentlicht `out/` auf Cloudflare Pages.

`/changelog` ist eine Liste von Änderungen für Leserinnen und Leser, auf die sich reagieren lässt. Es ist kein Build-Log: interne Refactorings, Textkorrekturen und Übersetzungsarbeit erhalten eine neue `deployId`, aber keinen Eintrag im Änderungsprotokoll.

Umgebung und Bindings:

| Name | Wofür |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Kanonische URLs, Sitemap, OG-Tags |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible-Seitenkennung |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL des Plausible-Skripts |
| `FEEDBACK_DB` (D1-Binding) | Der Endpunkt `/feedback`; Schema in `migrations/` |

---

## 🌐 Eine neue Sprache hinzufügen

1. Hängen Sie den Locale-Code an `ALL_LOCALE_NAMES` in [`i18n/locale.ts`](i18n/locale.ts) an.
2. Legen Sie `messages/<code>.json` neben `en.json` an, vollständig übersetzt.
3. Führen Sie `pnpm i18n:gate` aus — Routing, Sitemap, hreflang und OG-Metadaten übernehmen das Locale automatisch, ein fehlender Schlüssel lässt die Prüfung jedoch scheitern.

Nur Locales, die die Prüfung bestehen, gehören in `translatedLocales`; die Sprachauswahl kennzeichnet alles andere als unvollständig.

---

## 🔬 Ein neues Whisper-Modell hinzufügen

Hängen Sie einen Eintrag an `MODELS` in [`lib/models.ts`](lib/models.ts) an, mit einer **gemessenen** `sizeMB` für `wasm` und für `webgpu` — die beiden Backends liefern unterschiedliche Gewichtsdateien, und eine einzige Zahl für beide ist der Grund, warum die App einmal 500 MB versprochen und 968 MB geliefert hat. Das Repository muss auf Hugging Face als `onnx-community/<name>` existieren oder ONNX-Whisper-kompatibel sein. Ergänzen Sie in jeder `messages/*.json` einen passenden Block `models.<id>` für den Text mit Vor- und Nachteilen.

---

## 🤝 Mitwirken

Pull Requests sind willkommen — besonders:

- Übersetzungen (`messages/<code>.json`) und Korrekturen an sprachspezifischen READMEs
- Fehlerberichte mit der Datei, die den Fehler ausgelöst hat, dem Browser und dem Arbeitsspeicher des Geräts
- Messungen: Modellgröße, Zeit und Spitzenverbrauch auf Hardware, die wir nicht besitzen
- Korrekturen zur Barrierefreiheit

Öffnen Sie hier ein Issue oder einen PR, oder probieren Sie zuerst **[earscribe.app](https://earscribe.app)** aus, um zu sehen, wozu Sie beitragen würden.

---

## 📄 Lizenz

Die Marketing-Website und die Seiten in diesem Repository stehen unter [MIT](LICENSE): frei für private und kommerzielle Nutzung. Der Transkriptions-Worker, der Audio-Decoder und die Untertitel-Exporteure sind hier nicht veröffentlicht; dieses Repository ist daher keine vollständige, selbst hostbare Kopie des Dienstes.

---

<p align="center">
  <b>👉 Live-App ausprobieren: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio zu Text · Video zu Text · Sprache zu Text · Untertitel-Export · 100 % kostenlos · Ohne Registrierung · Auf dem Gerät</sub>
</p>

<p align="center">
  Gebaut mit ❤️ auf <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> und <a href="https://mediabunny.dev">mediabunny</a>.
</p>
