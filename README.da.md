<p align="center">
  <b>🌐 Sprog:</b><br/>
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

<h1 align="center">EarScribe — Gratis lyd og video til tekst i din browser</h1>

<p align="center">
  <b>Slip en lydfil, en video eller en optagelse fra mikrofonen. Få en transskription med tidsstempler og undertekster.</b><br/>
  <sub>Whisper kører på din egen enhed via WebGPU eller WebAssembly — optagelsen uploades aldrig.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live-app" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Ingen tilmelding" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privat" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licens MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — gratis lyd og video til tekst i browseren. Slip en MP3, WAV, M4A eller MP4 og få en transskription med tidsstempler uden at uploade."></a>
</p>

<p align="center">
  <b>🔗 Åbn appen:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guides</a> ·
  <a href="https://earscribe.app/changelog">Ændringslog</a> ·
  <a href="https://earscribe.app/about">Om</a>
</p>

---

## 🎙️ Hvad EarScribe er

Et transskribptionsarbejdsområde, der kører helt og holdent i browservinduet. Du giver det lyd, en videofil eller din mikrofon; det giver dig tekst med tidsstempler, som du kan klikke på for at afspille igen, samt undertekstfiler, som du kan give videre til en redaktør. Der er ingen konto, ingen upload og ingen betaling pr. minut.

Tre veje ind, én pipeline:

- **En fil** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus eller stort set alt, hvad Web Audio API kan afkode, op til 1 GiB.
- **En video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. Lydsporet demuxes og omkodes til 16 kHz mono **inde i vinduet** og transskriberes derefter som enhver anden fil. Ingen ffmpeg, ingen konverteringsside.
- **Mikrofonen** — optag og transskriber på samme sted, til en forelæsning, en samtale du har lov til at optage, eller en stemmememo, du ellers ville miste.

Tilføj køen, og du kan slippe en hel mappe med filer og gå din vej; tilføj arbejdsområdet på `/dashboard`, og resultaterne bliver til projekter, som du kan genåbne, redigere og eksportere senere.

> 👉 **Live-app:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Indholdsfortegnelse

- [✨ Hvad den gør](#-hvad-den-gør)
- [🖼️ Skærmbilleder](#️-skærmbilleder)
- [🚀 Hurtig start](#-hurtig-start)
- [🗂️ Arbejdsområdet](#️-arbejdsområdet)
- [💸 Hvad det koster](#-hvad-det-koster)
- [🆚 Sammenligning](#-sammenligning)
- [🌍 Understøttet input & sprog](#-understøttet-input--sprog)
- [💼 Brugsscenarier](#-brugsscenarier)
- [🚧 Hvad den ikke gør](#-hvad-den-ikke-gør)
- [❓ FAQ](#-faq)
- [🛠️ Teknologistak](#️-teknologistak)
- [🧑‍💻 Lokal udvikling](#-lokal-udvikling)
- [☁️ Deploy](#️-deploy)
- [🌐 Tilføj et nyt sprog](#-tilføj-et-nyt-sprog)
- [🔬 Tilføj en ny Whisper-model](#-tilføj-en-ny-whisper-model)
- [🤝 Bidrag](#-bidrag)
- [📄 Licens](#-licens)

---

## ✨ Hvad den gør

| | Funktion | Hvad du faktisk får |
|---|---|---|
| 🎬 | **Lyd, video og mikrofon** | Videocontainere accepteres direkte. Lydsporet udtrækkes lokalt, så en MP4 på 200 MB forlader heller aldrig maskinen. |
| 📝 | **Transskription med tidsstempler** | Hver replik har et start- og sluttidspunkt. Klik på en linje for at høre det øjeblik; bølgeformslinjalen følger med. |
| 🔍 | **Søgning i transskriptionen** | Et navn, et tal, et ord — spring til sætningen og afspil den i stedet for at lytte til filen igen. |
| 🎞️ | **Eksport af undertekster** | SRT, WebVTT, ren tekst, JSON (transskriptionsobjektet med tidskoder i fuld præcision) eller udklipsholderen. |
| 🧪 | **Undertekstkontrol** | Markerer replikker, der er for lange, for hurtige, gentagne, tomme eller overlappende, før du eksporterer dem. |
| 📚 | **Batchkø** | Slip flere filer, vælg én model og ét talt sprog, og lad køen køre dem i rækkefølge. Sæt på pause efter den aktuelle fil når som helst. |
| 🗂️ | **Projekter** | Resultater gemmes i browseren som projekter under `/dashboard`: transskriptioner, undertekster, kildefiler og en papirkurv, som kan genåbnes senere. |
| ✏️ | **Redigering af undertekster** | Ret teksten, flyt en repliks ind-/udpunkt, opdel eller slet en replik, og eksportér igen. |
| 💾 | **Sikkerhedskopiering og gendannelse** | Eksportér hele arbejdsområdet som én fil, og importér det i en anden browser. |
| 🔁 | **Konvertering af undertekster** | SRT ⇄ VTT og SRT → tekst, i browseren, uden modeldownload — det eneste værktøj her, der starter øjeblikkeligt. |
| 🆓 | **Gratis og ubegrænset** | Intet betalt niveau, ingen daglig kvote, ingen betaling pr. minut, ingen konto. |
| 🔒 | **Privat i kraft af arkitekturen** | Transskriptionen kører lokalt. Offentlige sider har analyse og annoncer; `/dashboard` er annoncefri. |
| 🌍 | **27 grænsefladesprog, 99 talte sprog** | Grænsefladen er oversat til 27 sprogvarianter; Whisper registrerer det talte sprog automatisk. |

---

## 🖼️ Skærmbilleder

> Rigtige skærmbilleder fra det live-websted på **[earscribe.app](https://earscribe.app)**.

### 1. Slip en fil, en video, eller optag — ingen tilmelding, ingen upload

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Gratis lyd- og video-til-tekst-konvertering — slip MP3, WAV, M4A, MP4, MOV eller MKV i browseren. Ingen tilmelding, intet login."></a>
</p>

### 2. Transskription med tidsstempler og bølgeform — klik på en linje for at springe

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe-transskription — lyd til tekst med tidsstempler, bølgeformslinjal og eksport af SRT- og VTT-undertekster med ét klik"></a>
</p>

### 3. Tre trin: slip → vælg en Whisper-model → eksportér

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Sådan fungerer gratis lyd til tekst på EarScribe — slip lyd eller video, vælg en Whisper-model (tiny, base, small eller turbo), læs og eksportér transskriptionen"></a>
</p>

### 4. Hvorfor EarScribe — privatliv først, Whisper indbygget i browseren

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe-funktioner — privat uden upload, WebGPU plus WASM, 99 talte sprog registreres automatisk, eksport til SRT VTT JSON TXT, inferens på enheden"></a>
</p>

### 5. Hvem bruger EarScribe — podcastværter, journalister, studerende, redaktører

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe-brugsscenarier — gratis lyd til tekst for podcastværter, journalister, studerende, brugerundersøgelser, videoundertekster og transskription af lydbøger"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe og en lokal Whisper-installation

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Sammenligning af EarScribe vs Otter.ai vs Rev vs HappyScribe — gratis ubegrænset lyd til tekst med inferens på enheden og ingen betaling pr. minut"></a>
</p>

### 7. FAQ — privatliv, formater, eksport af undertekster, offline brug

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="FAQ om gratis tale til tekst — svar om privatliv, MP3 og video til tekst, eksport af SRT- og VTT-undertekster, understøttede sprog, offline brug og Whisper i browseren"></a>
</p>

---

## 🚀 Hurtig start

1. Åbn **[earscribe.app](https://earscribe.app)** i Chrome, Edge, Safari eller Firefox.
2. Slip en fil — eller en video, eller tryk optag. Accepterer op til 1 GiB pr. fil; den reelle grænse er din enheds hukommelse, ikke størrelsen på disken.
3. Vælg en model. **base** er standard og passer til det meste tale; **tiny** er til en telefon eller en hurtig stemmememo; **small** og **turbo** er til lyd med accent, støj eller af særlig betydning.
4. Tryk **Transskribér**. Lyden afkodes og sendes til Whisper inde i vinduet. Den første kørsel downloader vægtene, så hold øje med størrelsen på knappen.
5. Læs transskriptionen, klik på en linje for at afspille den igen, ret det, der betyder noget, og vælg derefter **Eksportér → SRT / VTT / TXT / JSON**, eller kopiér den.

Vil du hellere køre en batch? Skift til køen, slip så mange filer du vil, og vælg modellen én gang. Køen kører én fil ad gangen, genbruger den model, der allerede ligger i hukommelsen, og gemmer hvert resultat som et projekt.

> 💡 **Intet konverteringstrin nødvendigt.** En MP4 på to timer går direkte ind. Hvis du hellere vil beholde kun lyden, kan appen udtrække en videos lydspor for dig.

---

## 🗂️ Arbejdsområdet

`/dashboard` er den samme transskribionsmotor med hukommelse. Alt gemmes i denne browser — IndexedDB til projektposterne, CacheStorage til modelvægtene — og intet synkroniseres til en konto, fordi der ikke findes nogen konto.

| Sektion | Hvad der ligger der |
|---|---|
| **Projekter** | Alt, nyeste først. |
| **Transskriptioner** | Projekter oprettet af en transskribionskørsel. Redigering af deres replikker holder dem her. |
| **Undertekster** | Projekter oprettet ud fra en undertekstfil — konverteringen og importer — så tekstningsarbejde holdes adskilt fra talearbejde. |
| **Filer** | De kildemedier, arbejdsområdet rummer, filtrerbare efter type: transskriptioner, undertekster, lyd. Den oprindelige lyd gemmes **ikke** som standard. |
| **Papirkurv** | Slettede projekter, som kan gendannes, indtil du tømmer den. |

Inde i et projekt kan du søge i transskriptionen, klikke på et tidsstempel for at afspille igen, redigere undertekstreplikkerne (tekst, ind-/udpunkter, tilføje eller fjerne), ombryde lange replikker til kortere, eksportere igen i et vilkårligt format eller åbne medieafspilleren uden at forlade siden.

**Sikkerhedskopi:** arbejdsområdet eksporteres som én fil (op til 320 MB) og importeres i en anden browser eller på en anden maskine. Da projekter aldrig forlader enheden, er denne fil den eneste kopi, der rejser — behandl den som enhver anden dokumentbackup.

---

## 💸 Hvad det koster

Gratis betyder ikke vægtløst. Dette er målte downloadstørrelser pr. model og backend, ikke skøn:

| Model | WebGPU | WebAssembly | Typisk brug |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Stemmememoer, telefoner i den lave ende, et første forsøg |
| **base** *(standard)* | 291 MB | 77 MB | Interviews, møder, podcasts |
| **small** | 968 MB | 249 MB | Tale med accent, støjende rum |
| **turbo** | 3.24 GB | 1.09 GB | Transskriptioner i studiekvalitet, når præcision betyder mere end tid |

- **Download én gang, derefter cachet.** Vægtene ligger i browserens cache; en anden kørsel downloader intet. En anden browserprofil betyder ny download.
- **GPU'en er det værd.** På samme maskine færdiggjorde WebGPU en fil på 40 minutter med base på cirka 3.8 minutter mod 9.4 på CPU'en — cirka 2.5× hurtigere, for tre til fire gange så meget download. `turbo` på WebGPU færdiggjorde aldrig sin download på 3.24 GB i vores test, så den er angivet som umålt frem for hurtig.
- **Hukommelsen afgør, ikke filstørrelsen.** Lange optagelser afkodes til 16 kHz mono før transskription. En MP3 på 40 minutter kræver et par hundrede megabyte; en stereo-WAV på to timer kan tømme et browservindue, før det begynder. Afkodningen beder nu direkte om 16 kHz, hvilket sænkede spidsbelastningen af hukommelse på en stereo-fil på to timer fra omkring 1.6 GB til 0.5 GB.
- **Ingen server, ingen kø på en andens maskine.** Tiden er din CPU's, så en langsom bærbar er langsom. Det er byttet for ikke at uploade.

Fulde målinger, med metoden og de kørsler, der fejlede, findes i [guides](https://earscribe.app/guides).

---

## 🆚 Sammenligning

Hvordan klarer EarScribe sig sammenlignet med andre måder at transskribere lyd på i 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratis og ubegrænset** | ✅ | ⚠️ 300 min/md | ❌ Kun prøveperiode | ❌ Betalt | ✅ |
| **Ingen tilmelding / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Ingen upload (privat)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video uden upload** | ✅ Udtræk lokalt | ❌ Upload påkrævet | ❌ Upload påkrævet | ❌ Upload påkrævet | ✅ Kræver ffmpeg |
| **Virker i browseren** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT-eksport** | ✅ | ⚠️ Betalt | ✅ | ✅ | ⚠️ Manuelt |
| **Transskription med tidsstempler** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuelt |
| **Lokal inferens** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 talte sprog** | ✅ | ⚠️ Begrænset | ⚠️ Begrænset | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Kræver installation** | ❌ Ingen | ❌ Ingen | ❌ Ingen | ❌ Ingen | ⚠️ Python + GPU |
| **Pris** | $0 | $0–$30/md | $0.25/min | €0.20/min | $0 (din hardware) |

**Hvor den taber:** en lokal installation kan køre en større model på en hurtigere backend end et browservindue, og en betalt tjeneste tilføjer taleretiketter og et teamarbejdsområde. EarScribes fordel er, at den er gratis, ikke kræver noget installeret, og at lyden aldrig forlader sin plads.

→ **[Prøv den på earscribe.app](https://earscribe.app)**

---

## 🌍 Understøttet input & sprog

### Lyd — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Alt, hvad Web Audio API kan afkode, accepteres; de syv dækker næsten enhver optagelse, du møder.

- 🎵 **[MP3 til tekst](https://earscribe.app/mp3-to-text)** — standard for podcast og interview
- 🎙️ **[WAV til tekst](https://earscribe.app/wav-to-text)** — tabsfri studie- og feloptagelser
- 📱 **[M4A til tekst](https://earscribe.app/m4a-to-text)** — iPhone-stemmememoer
- 🎧 **[Stemmememo til tekst](https://earscribe.app/voice-memo-to-text)** — telefonoptagelser på mobilen
- 🔊 **[Lyd til tekst](https://earscribe.app/audio-to-text)** — det generelle indgangspunkt
- 🎬 **[Lyd til SRT](https://earscribe.app/audio-to-srt)** — direkte til undertekster

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

Lydsporet demuxes med [mediabunny](https://mediabunny.dev), afkodes med WebCodecs og omkodes til en lille mono-MP3 på 16 kHz (eller WAV, hvor der ikke findes en MP3-koder) — alt sammen lokalt. En container, som browseren ikke kan afkode, fejler med en klar besked i stedet for en tavs tom transskription.

### Mikrofon

Optagelsen sker i vinduet med MediaRecorder. En optagelse transskriberes præcis som en fil, der er sluppet ind; live-undertekster under optagelsen leveres **ikke** (se [hvad den ikke gør](#-hvad-den-ikke-gør)).

### Sprog — 99 talte, 27 grænseflade

Whisper registrerer det talte sprog automatisk: engelsk, spansk, fransk, tysk, italiensk, portugisisk, russisk, japansk, koreansk, kinesisk (forenklet og traditionelt), arabisk, hindi, tyrkisk, nederlandsk, polsk, indonesisk, svensk, norsk, dansk, finsk, tjekkisk, ungarsk, græsk, hebraisk, thai, vietnamesisk og 70+ flere.

Grænsefladen er oversat til 27 sprogvarianter. Engelsk ligger på `/`, de øvrige 26 har et præfiks:

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

## 💼 Brugsscenarier

### 🎙️ Podcastværter og skabere
**[Podcasttransskription](https://earscribe.app/podcast-transcription)** til shownoter, episode-SEO og tilgængelighed. Eksportér SRT til videoversionen, TXT til bloggen.

### 📰 Journalister og forskere
**[Interviewtransskription](https://earscribe.app/interview-transcription)**, hvor kildeoptagelsen bliver på din bærbare. Der findes ingen tredjepartskopi, der kan lække, blive indkaldt eller revideres.

### 🎓 Studerende og undervisere
**[Forelæsningstranskription](https://earscribe.app/audio-to-text)** af en optaget time, søgbar inden næste session. Virker med iPhone-stemmememoer og Zoom-eksporter.

### 📞 Møder og brugerundersøgelser
**[Mødeoptagelse til tekst](https://earscribe.app/meeting-recording-to-text)** — en transskription af samtalen, ikke automatisk genererede mødenoter.

### 🎬 Videoredaktører
**[Lyd til SRT](https://earscribe.app/audio-to-srt)** til YouTube, Premiere, Final Cut og Resolve. Replikernes timing kommer fra Whispers egne tidsstempler, og undertekstkontrollen markerer det, der vil flyde over på skærmen.

### 📚 Lydbøger og lange optagelser
Filer på to timer understøttes, men det er her, enhedens hukommelse afgør. Læs [hvordan lang lyd håndteres](https://earscribe.app/guides/how-to-transcribe-long-audio), før du starter en på fire timer.

---

## 🚧 Hvad den ikke gør

At være tydelig her sparer alle en spildt kørsel:

- **Ingen taleropdeling.** To personer i én fil giver flad tekst uden "Taler 1 / Taler 2"-etiketter. Interview-siden siger det med vilje.
- **Ingen oversættelse.** Transskriptionen bliver på det sprog, der blev talt; grænsefladesprog og talt sprog har intet med hinanden at gøre.
- **Ingen live-undertekster.** Optagelse og transskription er separate trin — mikrofonen optager først, derefter transskriberes filen.
- **Køen er seriel og kræver, at vinduet er åbent.** Én model, én sprogindstilling for hele batchen. Lukker du vinduet, stopper den.
- **Ingen synkronisering på tværs af enheder.** Projekterne ligger i denne browser. Brug eksporten af arbejdsområdet til at flytte dem.
- **Ikke en offline-app.** Vægtene er cachede, men selve siden indlæses fra netværket. Installation tilføjer en genvej på skrivebordet eller startskærmen, ikke en offline-kopi.
- **1 GiB pr. fil er et hårdt loft; hukommelsen er den praktiske grænse.**

---

## ❓ FAQ

<details>
<summary><b>Er EarScribe virkelig gratis, uden grænser?</b></summary><br/>
Ja — intet betalt niveau, intet kreditkort, ingen betaling pr. minut, ingen daglig eller månedlig kvote, ingen konto. Beregningen kører på din egen hardware, så der er ingen cloudregning at videresende. Der er et loft på 1 GiB pr. fil, og din enheds hukommelse begrænser, hvad der faktisk færdiggøres.
</details>

<details>
<summary><b>Bliver min lyd uploadet noget sted?</b></summary><br/>
Nej. Lyden afkodes i vinduet og sendes til en Whisper-model, der kører i en Web Worker. Modelvægtene downloades <i>til</i> din browser fra et CDN, hvilket betyder, at CDN'et ser din IP-adresse — men optagelsen sendes ikke. Offentlige sider har Google AdSense — undtagen de persiske sider, som AdSense-politikken udelukker — plus cookieløs Plausible-analyse; <code>/dashboard</code> indlæser ingen annoncekode.
</details>

<details>
<summary><b>Kan jeg transskribere en video?</b></summary><br/>
Ja, direkte — MP4, MOV, MKV, WebM, M4V, TS, QT og M2TS. Lydsporet udtrækkes inde i browseren og transskriberes som en normal fil, så du har ikke brug for ffmpeg eller en konverteringsside. Hvis en container bruger en kodek, som browseren ikke kan afkode, siger appen det i stedet for at producere en tom transskription.
</details>

<details>
<summary><b>Hvorfor er første kørsel langsom?</b></summary><br/>
Første gang du bruger en model, downloader browseren dens vægte — 41 MB for tiny på WebAssembly op til 3.24 GB for turbo på WebGPU. De caches bagefter. Vælg <b>base</b> (77 MB på WebAssembly, 291 MB på WebGPU) til næsten alt.
</details>

<details>
<summary><b>Hvor præcis er den, og hvilken model bør jeg vælge?</b></summary><br/>
På det samme klip på 34 sekunder var vores fire modeller uenige om 26 af 111 ord, og den samme model ved to downloadstørrelser var uenig med sig selv. Vælg ud fra de ord, der betyder noget for dig, ikke ud fra en præcisionsprocent: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">modelguiden</a> viser de faktiske forskelle.
</details>

<details>
<summary><b>Kan jeg få SRT- eller VTT-undertekster?</b></summary><br/>
Ja: Eksportér → SRT eller VTT. Timing kommer fra Whispers egne segmentgrænser, ikke fra at opdele teksten bagefter. Undertekstkontrollen markerer replikker, der er for lange, for hurtige, gentagne, tomme eller overlappende, og du kan redigere replikkens tekst og timing, før du eksporterer.
</details>

<details>
<summary><b>Hvad hvis jeg allerede har en SRT- eller VTT-fil?</b></summary><br/>
Konvertér den uden at downloade en model: <a href="https://earscribe.app/srt-to-vtt">SRT til VTT</a> og <a href="https://earscribe.app/srt-to-txt">SRT til tekst</a> læser filen lokalt. Intet uploades, og ingen Whisper-vægte hentes.
</details>

<details>
<summary><b>Virker det offline?</b></summary><br/>
Transskriptionstrinnet gør: når siden og modellen er indlæst, behandles lyden uden at kontakte en transskriptionsserver. Appen er ikke en offline-pakke — at åbne den kræver netværket, og en model, du aldrig har downloadet, skal hentes. Installation fra sidefoden tilføjer en genvej, der åbner ind i arbejdsområdet; den tilføjer ikke en offline-kopi.
</details>

<details>
<summary><b>Markerer den, hvem der taler?</b></summary><br/>
Nej. Outputtet er flad tekst med tidskoder. Taleropdeling er ikke en del af denne version, og appen foregiver ikke andet.
</details>

<details>
<summary><b>Hvor gemmes mine resultater?</b></summary><br/>
I denne browser: projekter i IndexedDB, modelvægte i CacheStorage. Den oprindelige lyd gemmes ikke sammen med et projekt, medmindre du beholder den. En side, der aldrig blev gemt i arbejdsområdet, starter rent ved genindlæsning; brug <code>/dashboard</code> og dets eksport til at beholde noget, du bryder dig om.
</details>

<details>
<summary><b>Findes der et gratis alternativ til Otter.ai eller Rev?</b></summary><br/>
EarScribe er et gratis alternativ til cloudtransskriptionstjenester: du udfører beregningen, lyden bliver på sin plads, og der er ingen betaling pr. minut. Afvejningen er reel — ingen taleretiketter, intet teamarbejdsområde, og lange filer er begrænset af din maskine.
</details>

<details>
<summary><b>Hvordan konverterer jeg en MP3 til tekst gratis?</b></summary><br/>
Slip MP3'en på <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (eller forsiden). Den afkodes i din browser, transskriberes lokalt og kan kopieres eller eksporteres som SRT, VTT, TXT eller JSON.
</details>

> Flere svar på **[om-siden](https://earscribe.app/about)**, og målenoter i **[guides](https://earscribe.app/guides)**.

---

## 🛠️ Teknologistak

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU med WebAssembly som fallback
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small og large-v3-turbo, ONNX-kvantiserede
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — videodemuxing og lydudtræk i vinduet
- **[next-intl](https://next-intl.dev)** — 27 sprogvarianter, én meddelelseskatalog pr. sprog
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** til hosting, med nogle få Pages Functions (modelhost, feedback-endpoint)

Webstedet gengives statisk og hydreres i browseren; transskription og undertekstkonvertering sker udelukkende på klientsiden. Modelvægte kommer fra Hugging Face-CDN'et ved første brug og caches i CacheStorage.

---

## 🧑‍💻 Lokal udvikling

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Kontroller, der kører før en deploy:

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

`pnpm build` producerer en statisk eksport i `out/`. Flere audits læser `out/`, så kør build først.

---

## ☁️ Deploy

Produktionsdeploys går gennem én kommando, som kører hver audit i rækkefølge:

```bash
pnpm pages:deploy
```

Den sammenligner først den lokale deploymarkør (`deployId` i `lib/release.ts`) med den, der serveres på `/changelog` på det live websted, og nægter at fortsætte, hvis de er ens — det er sådan et forældet build fanges. Derefter bygger den, kører link-, guides-, `llms.txt`-, i18n-, sitemap- og PWA-audits og publicerer `out/` til Cloudflare Pages.

`/changelog` er en læservendt liste over ændringer, som nogen kan handle på. Det er ikke en buildlog: interne refaktoreringer, tekstrettelser og oversættelsesarbejde får et nyt `deployId`, men ingen changelog-post.

Miljø og bindinger:

| Navn | Bruges til |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Kanoniske URL'er, sitemap, OG-tags |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible-webstedsidentifikator |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible-script-URL |
| `FEEDBACK_DB` (D1-binding) | `/feedback`-endpointet; skema i `migrations/` |

---

## 🌐 Tilføj et nyt sprog

1. Føj sprogkoden til `ALL_LOCALE_NAMES` i [`i18n/locale.ts`](i18n/locale.ts).
2. Tilføj `messages/<code>.json` ved siden af `en.json`, fuldt oversat.
3. Kør `pnpm i18n:gate` — routing, sitemap, hreflang og OG-metadata samler sprogvarianten op automatisk, men en manglende nøgle får gaten til at fejle.

Kun sprogvarianter, der består gaten, hører hjemme i `translatedLocales`; sprogskifteren mærker alt andet som delvist.

---

## 🔬 Tilføj en ny Whisper-model

Føj en post til `MODELS` i [`lib/models.ts`](lib/models.ts) med en **målt** `sizeMB` for både `wasm` og `webgpu` — de to backends leverer forskellige vægtfiler, og at citere ét tal for begge er, hvordan appen engang lovede 500 MB og leverede 968 MB. Repositoriet skal findes på Hugging Face som `onnx-community/<name>` eller være ONNX-Whisper-kompatibelt. Tilføj en matchende `models.<id>`-blok til hver `messages/*.json` til fordels-/ulempeteksten.

---

## 🤝 Bidrag

Pull requests er velkomne — især:

- Oversættelser (`messages/<code>.json`) og sprogspecifikke README-rettelser
- Fejlrapporter med den fil, der gik i stykker, browseren og enhedens hukommelse
- Målinger: modelstørrelse, tid og spidsbelastning af hukommelse på hardware, vi ikke har
- Tilgængelighedsrettelser

Åbn et issue eller en PR her, eller prøv **[earscribe.app](https://earscribe.app)** først for at se, hvad du ville bidrage til.

---

## 📄 Licens

Markedsføringssiden og siderne i dette repository er [MIT](LICENSE): gratis til personlig og kommerciel brug. Transskriptionsworkeren, lydafkoderen og underteksteksportørerne er ikke udgivet her, så dette repository er ikke en komplet selvhostbar kopi af tjenesten.

---

<p align="center">
  <b>👉 Prøv live-appen: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Lyd til tekst · Video til tekst · Tale til tekst · Eksport af undertekster · 100% gratis · Ingen tilmelding · På enheden</sub>
</p>

<p align="center">
  Bygget med ❤️ på <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> og <a href="https://mediabunny.dev">mediabunny</a>.
</p>
