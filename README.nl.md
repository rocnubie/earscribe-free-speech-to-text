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

<h1 align="center">EarScribe — gratis audio en video naar tekst in je browser</h1>

<p align="center">
  <b>Sleep een audiobestand of video naar binnen, of neem op met de microfoon. Je krijgt een transcript met tijdstempels en ondertitels.</b><br/>
  <sub>Whisper draait op je eigen apparaat via WebGPU of WebAssembly — de opname wordt nooit geüpload.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live app" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Geen account" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privé" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licentie MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — gratis audio en video naar tekst in de browser. Sleep een MP3, WAV, M4A of MP4 naar binnen en krijg een transcript met tijdstempels zonder iets te uploaden."></a>
</p>

<p align="center">
  <b>🔗 Open de app:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Gidsen</a> ·
  <a href="https://earscribe.app/changelog">Changelog</a> ·
  <a href="https://earscribe.app/about">Over ons</a>
</p>

---

## 🎙️ Wat EarScribe is

Een werkruimte voor transcriptie die volledig in je browsertab draait. Je voert er audio, een videobestand of je microfoon aan; je krijgt tekst terug met tijdstempels waarop je kunt klikken om terug te luisteren, plus ondertitelbestanden die je aan een editor kunt geven. Geen account, geen upload en geen kosten per minuut.

Drie manieren om binnen te komen, één pipeline:

- **Een bestand** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, of bijna alles wat de Web Audio API kan decoderen, tot 1 GiB.
- **Een video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. De audiotrack wordt gedemuxed en opnieuw gecodeerd naar 16 kHz mono **in de tab**, en daarna getranscribeerd als elk ander bestand. Geen ffmpeg, geen conversiesite.
- **De microfoon** — opnemen en transcriberen op dezelfde plek: een college, een gesprek dat je mag opnemen, of een spraakmemo die je anders kwijt was.

Met de wachtrij sleep je een hele map vol bestanden naar binnen en loop je weg; met de werkruimte op `/dashboard` worden resultaten projecten die je later opnieuw opent, bewerkt en exporteert.

> 👉 **Live app:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Inhoud

- [✨ Wat het doet](#-wat-het-doet)
- [🖼️ Schermafbeeldingen](#️-schermafbeeldingen)
- [🚀 Snelstart](#-snelstart)
- [🗂️ De werkruimte](#️-de-werkruimte)
- [💸 Wat het kost](#-wat-het-kost)
- [🆚 Vergelijking](#-vergelijking)
- [🌍 Ondersteunde invoer en talen](#-ondersteunde-invoer-en-talen)
- [💼 Toepassingen](#-toepassingen)
- [🚧 Wat het niet doet](#-wat-het-niet-doet)
- [❓ FAQ](#-faq)
- [🛠️ Technische stack](#️-technische-stack)
- [🧑‍💻 Lokaal ontwikkelen](#-lokaal-ontwikkelen)
- [☁️ Deployen](#️-deployen)
- [🌐 Een taal toevoegen](#-een-taal-toevoegen)
- [🔬 Een Whisper-model toevoegen](#-een-whisper-model-toevoegen)
- [🤝 Bijdragen](#-bijdragen)
- [📄 Licentie](#-licentie)

---

## ✨ Wat het doet

| | Functie | Wat je echt krijgt |
|---|---|---|
| 🎬 | **Audio, video en microfoon** | Videocontainers worden direct geaccepteerd. De audiotrack wordt lokaal uitgepakt, dus ook een MP4 van 200 MB verlaat je machine nooit. |
| 📝 | **Transcript met tijdstempels** | Elke cue heeft een begin- en eindtijd. Klik op een regel om dat moment te horen; de golfvorm loopt mee. |
| 🔍 | **Zoeken in het transcript** | Een naam, een getal, een term — spring naar de zin en luister die opnieuw, in plaats van het hele bestand nog eens af te spelen. |
| 🎞️ | **Ondertitels exporteren** | SRT, WebVTT, platte tekst, JSON (het transcriptobject met tijdcodes op volledige precisie), of het klembord. |
| 🧪 | **Ondertitelcontrole** | Markeert cues die te lang, te snel, herhaald, leeg of overlappend zijn voordat je exporteert. |
| 📚 | **Wachtrij voor batches** | Sleep meerdere bestanden naar binnen, stel één model en één gesproken taal in, en laat de wachtrij ze op volgorde verwerken. Je kunt op elk moment pauzeren na het huidige bestand. |
| 🗂️ | **Projecten** | Resultaten worden in de browser opgeslagen als projecten onder `/dashboard`: transcripten, ondertitels, bronbestanden en een prullenbak, later weer te openen. |
| ✏️ | **Ondertitels bewerken** | Corrigeer de tekst, verschuif het in- of uitpunt van een cue, splits of verwijder een cue en exporteer opnieuw. |
| 💾 | **Back-up en herstel** | Exporteer de hele werkruimte als één bestand en importeer die in een andere browser. |
| 🔁 | **Ondertitels converteren** | SRT ⇄ VTT en SRT → tekst, in de browser, zonder model te downloaden — de enige tool hier die meteen start. |
| 🆓 | **Gratis en onbeperkt** | Geen betaald abonnement, geen dagelijkse limiet, geen kosten per minuut, geen account. |
| 🔒 | **Privé door architectuur** | Transcriptie draait lokaal. Publieke pagina's bevatten analytics en advertenties; `/dashboard` is advertentievrij. |
| 🌍 | **27 interfacetalen, 99 gesproken talen** | De interface is vertaald in 27 locales; Whisper herkent de gesproken taal automatisch. |

---

## 🖼️ Schermafbeeldingen

> Echte schermafbeeldingen van de live site op **[earscribe.app](https://earscribe.app)**.

### 1. Sleep een bestand of video naar binnen, of neem op — geen account, geen upload

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Gratis audio en video naar tekst — sleep MP3, WAV, M4A, MP4, MOV of MKV in de browser. Geen account, geen login."></a>
</p>

### 2. Transcript met tijdstempels en golfvorm — klik op een regel om te springen

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="Transcriptuitvoer van EarScribe — audio naar tekst met tijdstempels, een versleepbare golfvorm en ondertitel-export naar SRT en VTT met één klik"></a>
</p>

### 3. Drie stappen: slepen → een Whisper-model kiezen → exporteren

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Hoe gratis audio naar tekst werkt op EarScribe — sleep audio of video naar binnen, kies een Whisper-model (tiny, base, small of turbo), lees en exporteer het transcript"></a>
</p>

### 4. Waarom EarScribe — Whisper in de browser, privacy voorop

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="Functies van EarScribe — geen upload, WebGPU plus WASM, 99 gesproken talen automatisch herkend, export naar SRT VTT JSON TXT, inferentie op het apparaat"></a>
</p>

### 5. Wie EarScribe gebruikt — podcasters, journalisten, studenten, editors

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="Toepassingen van EarScribe — gratis audio naar tekst voor podcasters, journalisten, studenten, gebruikersonderzoek, video-ondertitels en audioboektranscriptie"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe en een lokale Whisper-installatie

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Vergelijking EarScribe vs Otter.ai vs Rev vs HappyScribe — gratis onbeperkt audio naar tekst met inferentie op het apparaat en geen kosten per minuut"></a>
</p>

### 7. FAQ — privacy, formaten, ondertitels exporteren, offline gebruik

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ over gratis spraak naar tekst — antwoorden over privacy, MP3 en video naar tekst, export van SRT- en VTT-ondertitels, ondersteunde talen, offline gebruik en Whisper in de browser"></a>
</p>

---

## 🚀 Snelstart

1. Open **[earscribe.app](https://earscribe.app)** in Chrome, Edge, Safari of Firefox.
2. Sleep een bestand naar binnen — of een video, of druk op opnemen. Accepteert tot 1 GiB per bestand; de echte limiet is het geheugen van je apparaat, niet de grootte op schijf.
3. Kies een model. **base** is de standaard en prima voor de meeste spraak; **tiny** is voor een telefoon of een snelle spraakmemo; **small** en **turbo** zijn voor spraak met accent, veel ruis of belangrijk materiaal.
4. Druk op **Transcriberen**. De audio wordt gedecodeerd en in de tab aan Whisper gevoerd. Bij de eerste run worden de gewichten gedownload, dus let op de grootte op de knop.
5. Lees het transcript, klik op een regel om die opnieuw te beluisteren, corrigeer wat ertoe doet en kies **Exporteren → SRT / VTT / TXT / JSON** of kopieer het.

Liever een batch? Schakel over naar de wachtrij, sleep zoveel bestanden naar binnen als je wilt en kies het model één keer. De wachtrij verwerkt één bestand tegelijk, hergebruikt het model dat al in het geheugen staat en slaat elk resultaat op als project.

> 💡 **Geen conversiestap nodig.** Een MP4 van twee uur gaat er direct in. Wil je alleen de audio houden, dan pakt de app de audiotrack uit de video voor je.

---

## 🗂️ De werkruimte

`/dashboard` is dezelfde transcriptie-engine, maar met geheugen. Alles wordt in deze browser opgeslagen — IndexedDB voor de projectgegevens, CacheStorage voor de modelgewichten — en niets wordt gesynchroniseerd met een account, want dat account bestaat niet.

| Onderdeel | Wat er staat |
|---|---|
| **Projecten** | Alles, nieuwste eerst. |
| **Transcripten** | Projecten die uit een transcriptierun komen. Bewerk je hun cues, dan blijven ze hier. |
| **Ondertitels** | Projecten die uit een ondertitelbestand komen — de converter en imports — zodat ondertitelwerk gescheiden blijft van spraakwerk. |
| **Bestanden** | De bronmedia die de werkruimte bewaart, filterbaar op soort: transcripten, ondertitels, audio. De originele audio wordt standaard **niet** opgeslagen. |
| **Prullenbak** | Verwijderde projecten, terug te halen tot je hem leegt. |

In een project kun je het transcript doorzoeken, op een tijdstempel klikken om terug te luisteren, de cues bewerken (tekst, in- en uitpunten, toevoegen of verwijderen), lange cues opknippen in kortere, opnieuw exporteren in elk formaat, of de mediaspeler openen zonder de pagina te verlaten.

**Back-up:** de werkruimte exporteert als één bestand (tot 320 MB) en importeert in een andere browser of op een andere machine. Omdat projecten je apparaat nooit verlaten, is dit bestand de enige kopie die meereist — behandel het als elke andere documentback-up.

---

## 💸 Wat het kost

Gratis betekent niet gewichtloos. Dit zijn gemeten downloadgroottes per model en backend, geen schattingen:

| Model | WebGPU | WebAssembly | Typisch gebruik |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Spraakmemo's, goedkope telefoons, een eerste poging |
| **base** *(standaard)* | 291 MB | 77 MB | Interviews, vergaderingen, podcasts |
| **small** | 968 MB | 249 MB | Spraak met accent, rumoerige ruimtes |
| **turbo** | 3.24 GB | 1.09 GB | Transcripten van studiokwaliteit, als nauwkeurigheid belangrijker is dan tijd |

- **Eén keer downloaden, daarna uit de cache.** De gewichten staan in de cache van de browser; een tweede run downloadt niets. Een ander browserprofiel betekent opnieuw downloaden.
- **De GPU is het waard.** Op dezelfde machine rondde WebGPU een bestand van 40 minuten met base af in ongeveer 3.8 minuten tegen 9.4 op de CPU — ruwweg 2.5× sneller, voor een download die drie tot vier keer zo groot is. `turbo` op WebGPU heeft in onze test de download van 3.24 GB nooit afgerond, dus het staat vermeld als ongemeten in plaats van snel.
- **Geheugen beslist, niet de bestandsgrootte.** Lange opnames worden vóór transcriptie gedecodeerd naar 16 kHz mono. Een MP3 van 40 minuten vraagt een paar honderd megabyte; een stereo WAV van twee uur kan een tab uitputten voordat er iets begint. Decoderen vraagt nu direct om 16 kHz, wat het piekgeheugen bij een stereobestand van twee uur terugbracht van ongeveer 1.6 GB naar 0.5 GB.
- **Geen server, geen wachtrij op andermans machine.** De tijd is van jouw CPU, dus een trage laptop is traag. Dat is de prijs voor niet uploaden.

De volledige metingen, met de methode en de mislukte runs, staan in de [gidsen](https://earscribe.app/guides).

---

## 🆚 Vergelijking

Hoe verhoudt EarScribe zich tot andere manieren om audio te transcriberen in 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratis en onbeperkt** | ✅ | ⚠️ 300 min/mnd | ❌ Alleen proefperiode | ❌ Betaald | ✅ |
| **Geen account / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Geen upload (privé)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video zonder upload** | ✅ Lokaal uitgepakt | ❌ Upload vereist | ❌ Upload vereist | ❌ Upload vereist | ✅ Vereist ffmpeg |
| **Werkt in de browser** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT exporteren** | ✅ | ⚠️ Betaald | ✅ | ✅ | ⚠️ Handmatig |
| **Transcript met tijdstempels** | ✅ | ✅ | ✅ | ✅ | ⚠️ Handmatig |
| **Lokale inferentie** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 gesproken talen** | ✅ | ⚠️ Beperkt | ⚠️ Beperkt | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installatie nodig** | ❌ Geen | ❌ Geen | ❌ Geen | ❌ Geen | ⚠️ Python + GPU |
| **Kosten** | $0 | $0–$30/mnd | $0.25/min | €0.20/min | $0 (jouw hardware) |

**Waar het verliest:** een lokale installatie kan een groter model op een snellere backend draaien dan een browsertab, en een betaalde dienst voegt sprekerlabels en een teamwerkruimte toe. De voorsprong van EarScribe is dat het gratis is, er niets geïnstalleerd hoeft te worden en de audio nergens heen gaat.

→ **[Probeer het op earscribe.app](https://earscribe.app)**

---

## 🌍 Ondersteunde invoer en talen

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Alles wat de Web Audio API kan decoderen wordt geaccepteerd; die zeven formaten dekken bijna elke opname die je tegenkomt.

- 🎵 **[MP3 naar tekst](https://earscribe.app/mp3-to-text)** — de standaard voor podcasts en interviews
- 🎙️ **[WAV naar tekst](https://earscribe.app/wav-to-text)** — lossless studio- en veldopnames
- 📱 **[M4A naar tekst](https://earscribe.app/m4a-to-text)** — Spraakmemo's van de iPhone
- 🎧 **[Spraakmemo naar tekst](https://earscribe.app/voice-memo-to-text)** — telefoonopnames op mobiel
- 🔊 **[Audio naar tekst](https://earscribe.app/audio-to-text)** — het algemene startpunt
- 🎬 **[Audio naar SRT](https://earscribe.app/audio-to-srt)** — direct naar ondertitels

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

De audiotrack wordt gedemuxed met [mediabunny](https://mediabunny.dev), gedecodeerd met WebCodecs en opnieuw gecodeerd als een kleine mono MP3 van 16 kHz (of WAV waar geen MP3-encoder bestaat) — allemaal lokaal. Een container die de browser niet kan decoderen, faalt met een duidelijke melding in plaats van een stil leeg transcript.

### Microfoon

Opnemen gebeurt in de tab met MediaRecorder. Een opname wordt precies zo getranscribeerd als een bestand dat je naar binnen sleept; live ondertitels tijdens de opname worden **niet** geboden (zie [wat het niet doet](#-wat-het-niet-doet)).

### Talen — 99 gesproken, 27 interface

Whisper herkent de gesproken taal automatisch: Engels, Spaans, Frans, Duits, Italiaans, Portugees, Russisch, Japans, Koreaans, Chinees (vereenvoudigd en traditioneel), Arabisch, Hindi, Turks, Nederlands, Pools, Indonesisch, Zweeds, Noors, Deens, Fins, Tsjechisch, Hongaars, Grieks, Hebreeuws, Thai, Vietnamees en nog 70+ andere.

De interface is vertaald in 27 locales. Engels staat op `/`, de andere 26 hebben een prefix:

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

## 💼 Toepassingen

### 🎙️ Podcasters en creators
**[Podcasttranscriptie](https://earscribe.app/podcast-transcription)** voor shownotes, SEO van afleveringen en toegankelijkheid. Exporteer SRT voor de videoversie, TXT voor de blog.

### 📰 Journalisten en onderzoekers
**[Interviewtranscriptie](https://earscribe.app/interview-transcription)** waarbij de bronopname op je laptop blijft. Er bestaat geen kopie bij een derde partij die kan uitlekken, worden opgevraagd of geaudit.

### 🎓 Studenten en docenten
**[Collegetranscriptie](https://earscribe.app/audio-to-text)** van een opgenomen les, doorzoekbaar vóór de volgende sessie. Werkt met Spraakmemo's van de iPhone en Zoom-exports.

### 📞 Vergaderingen en gebruikersonderzoek
**[Vergadering naar tekst](https://earscribe.app/meeting-recording-to-text)** — het transcript van het gesprek, niet automatisch gegenereerde vergadernotities.

### 🎬 Video-editors
**[Audio naar SRT](https://earscribe.app/audio-to-srt)** voor YouTube, Premiere, Final Cut en Resolve. De cue-timing komt uit Whisper's eigen tijdstempels, en de ondertitelcontrole markeert wat van het scherm loopt.

### 📚 Audioboeken en lange opnames
Bestanden van twee uur worden ondersteund, maar dat is precies het geval waarin het geheugen van het apparaat beslist. Lees [hoe lange audio wordt afgehandeld](https://earscribe.app/guides/how-to-transcribe-long-audio) voordat je aan een van vier uur begint.

---

## 🚧 Wat het niet doet

Dit expliciet zeggen bespaart iedereen een verspilde run:

- **Geen sprekersscheiding.** Twee mensen in één bestand leveren platte tekst op zonder labels "Speaker 1 / Speaker 2". De interviewpagina zegt dat met opzet.
- **Geen vertaling.** Het transcript blijft in de taal die gesproken is; interfacetaal en gesproken taal hebben niets met elkaar te maken.
- **Geen live ondertitels.** Opnemen en transcriberen zijn aparte stappen — de microfoon neemt eerst op, daarna wordt het bestand getranscribeerd.
- **De wachtrij is serieel en vereist een open tab.** Eén model en één taalinstelling voor de hele batch. De tab sluiten stopt hem.
- **Geen synchronisatie tussen apparaten.** Projecten staan in deze browser. Gebruik de export van de werkruimte om ze te verplaatsen.
- **Geen offline app.** De gewichten staan in de cache, maar de pagina zelf wordt van het netwerk geladen. Installeren voegt een snelkoppeling op het bureaublad of beginscherm toe, geen offline kopie.
- **1 GiB per bestand is een harde grens; het geheugen is de praktische.**

---

## ❓ FAQ

<details>
<summary><b>Is EarScribe echt gratis, zonder limieten?</b></summary><br/>
Ja — geen betaald abonnement, geen creditcard, geen kosten per minuut, geen dag- of maandlimiet, geen account. De berekening draait op je eigen hardware, dus er is geen cloudrekening om door te geven. Er is een limiet van 1 GiB per bestand, en het geheugen van je apparaat bepaalt wat er echt afkomt.
</details>

<details>
<summary><b>Wordt mijn audio ergens geüpload?</b></summary><br/>
Nee. Audio wordt in de tab gedecodeerd en aan een Whisper-model in een Web Worker gevoerd. De modelgewichten worden <i>naar</i> je browser gedownload van een CDN, wat betekent dat de CDN je IP-adres ziet — maar de opname wordt niet verstuurd. Publieke pagina's bevatten Google AdSense — behalve de Perzische pagina's, die het AdSense-beleid uitsluit — plus cookieloze Plausible-analytics; <code>/dashboard</code> laadt geen advertentecode.
</details>

<details>
<summary><b>Kan ik een video transcriberen?</b></summary><br/>
Ja, direct — MP4, MOV, MKV, WebM, M4V, TS, QT en M2TS. De audiotrack wordt in de browser uitgepakt en als een gewoon bestand getranscribeerd, dus je hebt geen ffmpeg of conversiesite nodig. Gebruikt een container een codec die de browser niet kan decoderen, dan zegt de app dat in plaats van een leeg transcript op te leveren.
</details>

<details>
<summary><b>Waarom is de eerste run traag?</b></summary><br/>
De eerste keer dat je een model gebruikt, downloadt de browser de gewichten — 41 MB voor tiny op WebAssembly tot 3.24 GB voor turbo op WebGPU. Daarna staan ze in de cache. Kies <b>base</b> (77 MB op WebAssembly, 291 MB op WebGPU) voor bijna alles.
</details>

<details>
<summary><b>Hoe nauwkeurig is het, en welk model moet ik kiezen?</b></summary><br/>
Op dezelfde clip van 34 seconden waren onze vier modellen het oneens over 26 van 111 woorden, en hetzelfde model op twee downloadgroottes was het met zichzelf oneens. Kies op de woorden die voor jou tellen, niet op een nauwkeurigheidspercentage: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">de modelgids</a> laat de werkelijke verschillen zien.
</details>

<details>
<summary><b>Kan ik SRT- of VTT-ondertitels krijgen?</b></summary><br/>
Ja: Exporteren → SRT of VTT. De timing komt uit Whisper's eigen segmentgrenzen, niet uit het achteraf splitsen van de tekst. De ondertitelcontrole markeert cues die te lang, te snel, herhaald, leeg of overlappend zijn, en je kunt tekst en timing van cues aanpassen vóór het exporteren.
</details>

<details>
<summary><b>Wat als ik al een SRT- of VTT-bestand heb?</b></summary><br/>
Converteer het zonder een model te downloaden: <a href="https://earscribe.app/srt-to-vtt">SRT naar VTT</a> en <a href="https://earscribe.app/srt-to-txt">SRT naar tekst</a> lezen het bestand lokaal in. Niets wordt geüpload en er worden geen Whisper-gewichten opgehaald.
</details>

<details>
<summary><b>Werkt het offline?</b></summary><br/>
De transcriptiestap wel: zodra de pagina en het model geladen zijn, wordt audio verwerkt zonder een transcriptieserver te benaderen. De app is geen offline bundel — openen vereist het netwerk, en een model dat je nooit hebt gedownload moet worden opgehaald. Installeren vanuit de footer voegt een snelkoppeling toe die de werkruimte opent; het voegt geen offline kopie toe.
</details>

<details>
<summary><b>Wordt er gelabeld wie er spreekt?</b></summary><br/>
Nee. De uitvoer is platte tekst met tijdcodes. Sprekersdiarisatie hoort niet bij deze build, en de app doet niet alsof.
</details>

<details>
<summary><b>Waar worden mijn resultaten opgeslagen?</b></summary><br/>
In deze browser: projecten in IndexedDB, modelgewichten in CacheStorage. De originele audio wordt niet met een project opgeslagen, tenzij je die bewaart. Een pagina die nooit in de werkruimte is opgeslagen, begint na herladen schoon; gebruik <code>/dashboard</code> en de export ervan om te bewaren wat je belangrijk vindt.
</details>

<details>
<summary><b>Is er een gratis alternatief voor Otter.ai of Rev?</b></summary><br/>
EarScribe is een gratis alternatief voor cloudtranscriptiediensten: jij doet de berekening, de audio blijft staan en er zijn geen kosten per minuut. De afweging is echt — geen sprekerlabels, geen teamwerkruimte, en lange bestanden worden begrensd door je machine.
</details>

<details>
<summary><b>Hoe converteer ik een MP3 gratis naar tekst?</b></summary><br/>
Sleep de MP3 naar <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (of de startpagina). Het bestand wordt in je browser gedecodeerd, lokaal getranscribeerd en kan worden gekopieerd of geëxporteerd als SRT, VTT, TXT of JSON.
</details>

> Meer antwoorden op de **[Over ons-pagina](https://earscribe.app/about)**, en meetnotities in de **[gidsen](https://earscribe.app/guides)**.

---

## 🛠️ Technische stack

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU met WebAssembly als fallback
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small en large-v3-turbo, ONNX-gekwantiseerd
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — video demuxen en audio uitpakken in de tab
- **[next-intl](https://next-intl.dev)** — 27 locales, één berichtcatalogus per taal
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** voor hosting, met een paar Pages Functions (modelhost, feedback-endpoint)

De site wordt statisch gerenderd en hydrateert in de browser; transcriptie en ondertitelconversie gebeuren alleen aan de clientkant. Modelgewichten komen bij eerste gebruik van de Hugging Face CDN en worden gecachet in CacheStorage.

---

## 🧑‍💻 Lokaal ontwikkelen

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Checks die vóór een deploy draaien:

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

`pnpm build` levert een statische export op in `out/`. Verschillende audits lezen `out/`, dus draai eerst de build.

---

## ☁️ Deployen

Productiedeploys gaan via één commando, dat alle audits op volgorde uitvoert:

```bash
pnpm pages:deploy
```

Het vergelijkt eerst de lokale deploymarker (`deployId` in `lib/release.ts`) met de marker die op `/changelog` van de live site wordt geserveerd en weigert door te gaan als ze gelijk zijn — zo wordt een verouderde build gevangen. Daarna bouwt het, draait het de audits voor links, gidsen, `llms.txt`, i18n, sitemap en PWA, en publiceert `out/` naar Cloudflare Pages.

`/changelog` is een lijst met wijzigingen voor lezers waar iemand iets mee kan. Het is geen buildlog: interne refactors, copyfixes en vertaalwerk krijgen een nieuwe `deployId` maar geen changelog-item.

Omgeving en bindings:

| Naam | Waarvoor |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonieke URL's, sitemap, OG-tags |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible-site-identificatie |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | URL van het Plausible-script |
| `FEEDBACK_DB` (D1-binding) | Het `/feedback`-endpoint; schema in `migrations/` |

---

## 🌐 Een taal toevoegen

1. Voeg de localecode toe aan `ALL_LOCALE_NAMES` in [`i18n/locale.ts`](i18n/locale.ts).
2. Voeg `messages/<code>.json` toe naast `en.json`, volledig vertaald.
3. Draai `pnpm i18n:gate` — routing, sitemap, hreflang en OG-metadata pikken de locale automatisch op, maar een ontbrekende sleutel laat de gate falen.

Alleen locales die de gate halen, horen in `translatedLocales`; de taalschakelaar labelt al het andere als gedeeltelijk.

---

## 🔬 Een Whisper-model toevoegen

Voeg een entry toe aan `MODELS` in [`lib/models.ts`](lib/models.ts) met een **gemeten** `sizeMB` voor zowel `wasm` als `webgpu` — de twee backends leveren verschillende gewichtsbestanden, en één getal voor beide noemen is hoe de app ooit 500 MB beloofde en 968 MB leverde. De repository moet op Hugging Face bestaan als `onnx-community/<name>` of ONNX-Whisper-compatibel zijn. Voeg een bijpassend `models.<id>`-blok toe aan elke `messages/*.json` voor de pro/contra-tekst.

---

## 🤝 Bijdragen

Pull requests zijn welkom — vooral:

- Vertalingen (`messages/<code>.json`) en correcties aan README's per locale
- Bugmeldingen met het bestand dat stukliep, de browser en het geheugen van het apparaat
- Metingen: modelgrootte, tijd en piekgeheugen op hardware die wij niet hebben
- Toegankelijkheidsfixes

Open hier een issue of PR, of probeer eerst **[earscribe.app](https://earscribe.app)** om te zien waar je aan zou bijdragen.

---

## 📄 Licentie

De marketingsite en de pagina's in deze repository zijn [MIT](LICENSE): vrij voor persoonlijk en commercieel gebruik. De transcriptieworker, audiostreamdecoder en ondertitelexporteurs zijn hier niet gepubliceerd, dus deze repository is geen complete, zelf te hosten kopie van de dienst.

---

<p align="center">
  <b>👉 Probeer de live app: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio naar tekst · Video naar tekst · Spraak naar tekst · Ondertitels exporteren · 100% gratis · Geen account · Op het apparaat</sub>
</p>

<p align="center">
  Gebouwd met ❤️ op <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> en <a href="https://mediabunny.dev">mediabunny</a>.
</p>
