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

<h1 align="center">EarScribe — gratis ljud och video till text i webbläsaren</h1>

<p align="center">
  <b>Släpp in en ljudfil eller en video, eller spela in från mikrofonen. Få en transkribering med tidsstämplar och undertexter.</b><br/>
  <sub>Whisper körs på din egen enhet via WebGPU eller WebAssembly — inspelningen laddas aldrig upp.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live-app" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Gratis" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Ingen registrering" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Privat" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="Licens MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — gratis ljud och video till text i webbläsaren. Släpp in MP3, WAV, M4A eller MP4 och få en transkribering med tidsstämplar utan att ladda upp."></a>
</p>

<p align="center">
  <b>🔗 Öppna appen:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guider</a> ·
  <a href="https://earscribe.app/changelog">Ändringslogg</a> ·
  <a href="https://earscribe.app/about">Om</a>
</p>

---

## 🎙️ Vad EarScribe är

En arbetsyta för transkribering som körs helt i webbläsarfliken. Du ger den ljud, en videofil eller din mikrofon; den ger tillbaka text med tidsstämplar du kan klicka på för att spela upp igen, plus undertextfiler du kan lämna till en redigerare. Inget konto, ingen uppladdning och ingen debitering per minut.

Tre vägar in, en pipeline:

- **En fil** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, eller det mesta som Web Audio API kan avkoda, upp till 1 GiB.
- **En video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. Ljudspåret demuxas och kodas om till 16 kHz mono **inne i fliken** och transkriberas sedan som vilken annan fil som helst. Ingen ffmpeg, ingen konverterarsajt.
- **Mikrofonen** — spela in och transkribera på samma ställe, för en föreläsning, ett samtal du får spela in eller en röstanteckning du annars skulle tappa.

Lägg till kön och du kan släppa in en hel mapps filer och gå därifrån; lägg till arbetsytan på `/dashboard` och resultaten blir projekt du kan öppna, redigera och exportera senare.

> 👉 **Live-app:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Innehåll

- [✨ Vad den gör](#-vad-den-gör)
- [🖼️ Skärmbilder](#️-skärmbilder)
- [🚀 Snabbstart](#-snabbstart)
- [🗂️ Arbetsytan](#️-arbetsytan)
- [💸 Vad det kostar](#-vad-det-kostar)
- [🆚 Jämförelse](#-jämförelse)
- [🌍 Indata och språk som stöds](#-indata-och-språk-som-stöds)
- [💼 Användningsområden](#-användningsområden)
- [🚧 Vad den inte gör](#-vad-den-inte-gör)
- [❓ Vanliga frågor](#-vanliga-frågor)
- [🛠️ Teknikstack](#️-teknikstack)
- [🧑‍💻 Lokal utveckling](#-lokal-utveckling)
- [☁️ Driftsättning](#️-driftsättning)
- [🌐 Lägg till ett nytt språk](#-lägg-till-ett-nytt-språk)
- [🔬 Lägg till en ny Whisper-modell](#-lägg-till-en-ny-whisper-modell)
- [🤝 Bidra](#-bidra)
- [📄 Licens](#-licens)

---

## ✨ Vad den gör

| | Funktion | Vad du faktiskt får |
|---|---|---|
| 🎬 | **Ljud, video och mikrofon** | Videocontainrar tas emot direkt. Ljudspåret extraheras lokalt, så en MP4 på 200 MB lämnar aldrig datorn heller. |
| 📝 | **Transkribering med tidsstämplar** | Varje replik har start- och sluttid. Klicka på en rad för att höra det ögonblicket; vågformsreglaget följer med. |
| 🔍 | **Sök i transkriberingen** | Ett namn, en siffra, en term — hoppa till meningen och spela upp den igen i stället för att lyssna om på hela filen. |
| 🎞️ | **Undertextexport** | SRT, WebVTT, ren text, JSON (transkriberingsobjektet med tidskoder i full precision) eller urklipp. |
| 🧪 | **Undertextskontroll** | Flaggar repliker som är för långa, för snabba, upprepade, tomma eller överlappande innan du exporterar dem. |
| 📚 | **Batchkö** | Släpp in flera filer, ställ in en modell och ett talat språk och låt kön köra dem i ordning. Pausa efter aktuell fil när som helst. |
| 🗂️ | **Projekt** | Resultaten sparas i webbläsaren som projekt under `/dashboard`: transkriberingar, undertexter, källfiler och en papperskorg, öppningsbara igen senare. |
| ✏️ | **Undertextredigering** | Rätta texten, flytta en repliks in- och utpunkt, dela eller ta bort en replik och exportera sedan igen. |
| 💾 | **Säkerhetskopiering och återställning** | Exportera hela arbetsytan som en fil och importera den i en annan webbläsare. |
| 🔁 | **Undertextkonvertering** | SRT ⇄ VTT och SRT → text, i webbläsaren, utan modellnedladdning — det enda verktyget här som startar direkt. |
| 🆓 | **Gratis och obegränsat** | Ingen betald nivå, ingen daglig kvot, ingen minutkostnad, inget konto. |
| 🔒 | **Privat av konstruktion** | Transkriberingen körs lokalt. Publika sidor har analys och annonser; `/dashboard` är annonsfri. |
| 🌍 | **27 gränssnittsspråk, 99 talade språk** | Gränssnittet finns på 27 språk; Whisper identifierar det talade språket automatiskt. |

---

## 🖼️ Skärmbilder

> Riktiga skärmbilder från den live-sajten **[earscribe.app](https://earscribe.app)**.

### 1. Släpp in en fil eller video, eller spela in — ingen registrering, ingen uppladdning

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Gratis konverterare från ljud och video till text — släpp in MP3, WAV, M4A, MP4, MOV eller MKV i webbläsaren. Ingen registrering, ingen inloggning."></a>
</p>

### 2. Transkribering med tidsstämplar och vågform — klicka på valfri rad för att hoppa dit

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribes transkriberingsresultat — ljud till text med tidsstämplar, vågformsreglage och undertextexport till SRT och VTT med ett klick"></a>
</p>

### 3. Tre steg: släpp in → välj en Whisper-modell → exportera

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="Så fungerar gratis ljud till text på EarScribe — släpp in ljud eller video, välj en Whisper-modell (tiny, base, small eller turbo), läs och exportera transkriberingen"></a>
</p>

### 4. Varför EarScribe — integritet först, Whisper direkt i webbläsaren

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribes funktioner — privat utan uppladdning, WebGPU plus WASM, 99 talade språk som identifieras automatiskt, export till SRT VTT JSON TXT, inferens på enheten"></a>
</p>

### 5. Vilka använder EarScribe — poddare, journalister, studenter, redigerare

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribes användningsområden — gratis ljud till text för poddare, journalister, studenter, användarstudier, videoundertexter och transkribering av ljudböcker"></a>
</p>

### 6. EarScribe mot Otter.ai, Rev, HappyScribe och en lokal Whisper-installation

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="Jämförelse av EarScribe mot Otter.ai, Rev och HappyScribe — gratis obegränsat ljud till text med inferens på enheten och inga minutkostnader"></a>
</p>

### 7. Vanliga frågor — integritet, format, undertextexport, offlineanvändning

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="Vanliga frågor om gratis tal till text — svar om integritet, MP3 och video till text, undertextexport till SRT och VTT, språk som stöds, offlineanvändning och Whisper i webbläsaren"></a>
</p>

---

## 🚀 Snabbstart

1. Öppna **[earscribe.app](https://earscribe.app)** i Chrome, Edge, Safari eller Firefox.
2. Släpp in en fil — eller en video, eller tryck på spela in. Tar emot upp till 1 GiB per fil; den verkliga gränsen är enhetens minne, inte storleken på disken.
3. Välj modell. **base** är standard och rätt för det mesta talet; **tiny** är för en telefon eller en snabb röstanteckning; **small** och **turbo** är för tal med brytning, i buller eller när det är viktigt.
4. Tryck på **Transkribera**. Ljudet avkodas och matas till Whisper inne i fliken. Första körningen laddar ner vikterna, så håll koll på storleken på knappen.
5. Läs transkriberingen, klicka på en rad för att spela upp den igen, rätta det som spelar roll och välj sedan **Exportera → SRT / VTT / TXT / JSON** eller kopiera.

Vill du hellre köra en batch? Byt till kön, släpp in så många filer du vill och välj modell en gång. Kön kör en fil i taget, återanvänder modellen som redan ligger i minnet och sparar varje resultat som ett projekt.

> 💡 **Inget konverteringssteg behövs.** En MP4 på två timmar går rakt in. Om du hellre behåller bara ljudet kan appen extrahera videons ljudspår åt dig.

---

## 🗂️ Arbetsytan

`/dashboard` är samma transkriberingsmotor, men med minne. Allt lagras i den här webbläsaren — IndexedDB för projektposterna, CacheStorage för modellvikterna — och inget synkas till ett konto, eftersom det inte finns något konto.

| Avsnitt | Vad som finns där |
|---|---|
| **Projekt** | Allt, nyast först. |
| **Transkriberingar** | Projekt som skapats av en transkriberingskörning. Redigering av deras repliker behåller dem här. |
| **Undertexter** | Projekt som skapats från en undertextfil — konverteraren och importerna — så att textningsarbete hålls åtskilt från talarbete. |
| **Filer** | Källmedierna som arbetsytan håller, filtrerbara efter typ: transkriberingar, undertexter, ljud. Det ursprungliga ljudet sparas **inte** som standard. |
| **Papperskorg** | Borttagna projekt, återställbara tills du tömmer den. |

Inne i ett projekt kan du söka i transkriberingen, klicka på en tidsstämpel för att spela upp igen, redigera undertextrepliker (text, in- och utpunkter, lägga till eller ta bort), dela om långa repliker till kortare, exportera igen i vilket format som helst eller öppna mediaspelaren utan att lämna sidan.

**Säkerhetskopia:** arbetsytan exporteras som en enda fil (upp till 320 MB) och importeras i en annan webbläsare eller på en annan dator. Eftersom projekten aldrig lämnar enheten är den här filen den enda kopian som reser — behandla den som vilken dokumentbackup som helst.

---

## 💸 Vad det kostar

Gratis betyder inte viktlöst. Det här är uppmätta nedladdningsstorlekar per modell och backend, inte uppskattningar:

| Modell | WebGPU | WebAssembly | Typisk användning |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Röstanteckningar, enkla telefoner, ett första försök |
| **base** *(standard)* | 291 MB | 77 MB | Intervjuer, möten, poddar |
| **small** | 968 MB | 249 MB | Tal med brytning, bullriga rum |
| **turbo** | 3.24 GB | 1.09 GB | Transkribering i studioklass, när noggrannhet väger tyngre än tid |

- **Ladda ner en gång, sedan cachat.** Vikterna ligger i webbläsarens cache; en andra körning laddar ner inget. En annan webbläsarprofil innebär att ladda ner igen.
- **GPU:n är värd det.** På samma dator klarade WebGPU en fil på 40 minuter med base på ungefär 3.8 minuter mot 9.4 på processorn — ungefär 2.5× snabbare, för en nedladdning som är tre till fyra gånger större. `turbo` på WebGPU hann aldrig ladda ner sina 3.24 GB i vårt test, så det står som omätt i stället för snabbt.
- **Minnet avgör, inte filstorleken.** Långa inspelningar avkodas till 16 kHz mono före transkribering. En MP3 på 40 minuter behöver några hundra megabyte; en två timmar lång stereo-WAV kan ta slut på en flik innan den ens börjar. Avkodningen begär nu 16 kHz direkt, vilket sänkte toppminnet för en två timmar lång stereofil från ungefär 1.6 GB till 0.5 GB.
- **Ingen server, ingen kö på någon annans maskin.** Tiden är din CPUs, så en långsam laptop är långsam. Det är priset för att inte ladda upp.

Fullständiga mätningar, med metod och de körningar som misslyckades, finns i [guiderna](https://earscribe.app/guides).

---

## 🆚 Jämförelse

Hur står sig EarScribe mot andra sätt att transkribera ljud 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Gratis och obegränsat** | ✅ | ⚠️ 300 min/mån | ❌ Endast provperiod | ❌ Betalt | ✅ |
| **Ingen registrering / inloggning** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Ingen uppladdning (privat)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video utan uppladdning** | ✅ Extraheras lokalt | ❌ Uppladdning krävs | ❌ Uppladdning krävs | ❌ Uppladdning krävs | ✅ Kräver ffmpeg |
| **Fungerar i webbläsaren** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Export till SRT / VTT** | ✅ | ⚠️ Betalt | ✅ | ✅ | ⚠️ Manuellt |
| **Transkribering med tidsstämplar** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manuellt |
| **Inferens lokalt** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 talade språk** | ✅ | ⚠️ Begränsat | ⚠️ Begränsat | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Installation krävs** | ❌ Ingen | ❌ Ingen | ❌ Ingen | ❌ Ingen | ⚠️ Python + GPU |
| **Kostnad** | $0 | $0–$30/mån | $0.25/min | €0.20/min | $0 (din hårdvara) |

**Där den förlorar:** en lokal installation kan köra en större modell på en snabbare backend än en webbläsarflik, och en betaltjänst lägger till talaretiketter och en teamarbetsyta. EarScribes fördel är att den är gratis, inte kräver något installerat och att ljudet aldrig går någonstans.

→ **[Prova på earscribe.app](https://earscribe.app)**

---

## 🌍 Indata och språk som stöds

### Ljud — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Allt som Web Audio API kan avkoda tas emot; de sju formaten täcker nästan varje inspelning du möter.

- 🎵 **[MP3 till text](https://earscribe.app/mp3-to-text)** — standard för poddar och intervjuer
- 🎙️ **[WAV till text](https://earscribe.app/wav-to-text)** — förlustfria studio- och fältinspelningar
- 📱 **[M4A till text](https://earscribe.app/m4a-to-text)** — iPhone Röstmemon
- 🎧 **[Röstmemo till text](https://earscribe.app/voice-memo-to-text)** — telefoninspelningar på mobilen
- 🔊 **[Ljud till text](https://earscribe.app/audio-to-text)** — den allmänna ingången
- 🎬 **[Ljud till SRT](https://earscribe.app/audio-to-srt)** — direkt till undertexter

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

Ljudspåret demuxas med [mediabunny](https://mediabunny.dev), avkodas med WebCodecs och kodas om till en liten mono-MP3 på 16 kHz (eller WAV där ingen MP3-kodare finns) — allt lokalt. En container som webbläsaren inte kan avkoda misslyckas med ett tydligt meddelande i stället för en tyst tom transkribering.

### Mikrofon

Inspelningen sker i fliken med MediaRecorder. En inspelning transkriberas precis som en fil du släppt in; liveundertexter under inspelningen tillhandahålls **inte** (se [vad den inte gör](#-vad-den-inte-gör)).

### Språk — 99 talade, 27 i gränssnittet

Whisper identifierar det talade språket automatiskt: engelska, spanska, franska, tyska, italienska, portugisiska, ryska, japanska, koreanska, kinesiska (förenklad och traditionell), arabiska, hindi, turkiska, nederländska, polska, indonesiska, svenska, norska, danska, finska, tjeckiska, ungerska, grekiska, hebreiska, thai, vietnamesiska och 70+ till.

Gränssnittet är översatt till 27 språk. Engelska ligger på `/`, de övriga 26 har ett prefix:

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

## 💼 Användningsområden

### 🎙️ Poddare och skapare
**[Poddtranskribering](https://earscribe.app/podcast-transcription)** för avsnittsanteckningar, SEO för avsnitt och tillgänglighet. Exportera SRT för videoversionen, TXT för bloggen.

### 📰 Journalister och forskare
**[Intervjutranskribering](https://earscribe.app/interview-transcription)** där källinspelningen stannar på din laptop. Ingen tredjepartskopia finns som kan läcka, begäras ut eller granskas.

### 🎓 Studenter och lärare
**[Föreläsningstranskribering](https://earscribe.app/audio-to-text)** av en inspelad lektion, sökbar inför nästa tillfälle. Fungerar med iPhone Röstmemon och Zoom-exporter.

### 📞 Möten och användarstudier
**[Mötesinspelning till text](https://earscribe.app/meeting-recording-to-text)** — en transkribering av samtalet, inte automatiskt genererade mötesanteckningar.

### 🎬 Videoredigerare
**[Ljud till SRT](https://earscribe.app/audio-to-srt)** för YouTube, Premiere, Final Cut och Resolve. Replikernas timing kommer från Whispers egna tidsstämplar, och undertextskontrollen flaggar det som kommer att spilla över på skärmen.

### 📚 Ljudböcker och långa inspelningar
Filer på två timmar stöds, men det är här enhetens minne avgör. Läs [hur långt ljud hanteras](https://earscribe.app/guides/how-to-transcribe-long-audio) innan du startar en på fyra timmar.

---

## 🚧 Vad den inte gör

Att vara tydlig här sparar alla en bortkastad körning:

- **Ingen talaruppdelning.** Två personer i en fil ger platt text utan etiketterna "Talare 1 / Talare 2". Intervjusidan säger det med avsikt.
- **Ingen översättning.** Transkriberingen stannar på språket som talades; gränssnittsspråk och talat språk har inget med varandra att göra.
- **Inga liveundertexter.** Inspelning och transkribering är separata steg — mikrofonen spelar in först, sedan transkriberas filen.
- **Kön är seriell och kräver att fliken är öppen.** En modell, en språkinställning för hela batchen. Stänger du fliken stannar den.
- **Ingen synk mellan enheter.** Projekten lever i den här webbläsaren. Använd arbetsytans export för att flytta dem.
- **Ingen offlineapp.** Vikterna cachas, men själva sidan laddas från nätet. Att installera den lägger till en genväg på skrivbordet eller hemskärmen, inte en offlinokopia.
- **1 GiB per fil är ett hårt tak; minnet är det praktiska.**

---

## ❓ Vanliga frågor

<details>
<summary><b>Är EarScribe verkligen gratis, utan gränser?</b></summary><br/>
Ja — ingen betald nivå, inget kreditkort, ingen minutkostnad, ingen daglig eller månatlig kvot, inget konto. Beräkningen sker på din egen hårdvara, så det finns ingen molnrökning att skicka vidare. Det finns ett tak på 1 GiB per fil, och enhetens minne avgör vad som faktiskt blir klart.
</details>

<details>
<summary><b>Laddas mitt ljud upp någonstans?</b></summary><br/>
Nej. Ljudet avkodas i fliken och matas till en Whisper-modell som körs i en Web Worker. Modellvikterna laddas ner <i>till</i> din webbläsare från ett CDN, vilket betyder att CDN:en ser din IP-adress — men inspelningen skickas inte. Publika sidor har Google AdSense — utom de persiska sidorna, som AdSense policy utesluter — plus cookielös analys från Plausible; <code>/dashboard</code> laddar ingen annonskod.
</details>

<details>
<summary><b>Kan jag transkribera en video?</b></summary><br/>
Ja, direkt — MP4, MOV, MKV, WebM, M4V, TS, QT och M2TS. Ljudspåret extraheras inne i webbläsaren och transkriberas som en vanlig fil, så du behöver ingen ffmpeg eller konverterarsajt. Om en container använder en codec som webbläsaren inte kan avkoda säger appen det i stället för att producera en tom transkribering.
</details>

<details>
<summary><b>Varför är första körningen långsam?</b></summary><br/>
Första gången du använder en modell laddar webbläsaren ner dess vikter — från 41 MB för tiny på WebAssembly upp till 3.24 GB för turbo på WebGPU. De cachas efteråt. Välj <b>base</b> (77 MB på WebAssembly, 291 MB på WebGPU) för nästan allt.
</details>

<details>
<summary><b>Hur exakt är den, och vilken modell bör jag välja?</b></summary><br/>
På samma 34-sekundersklipp var våra fyra modeller oense om 26 av 111 ord, och samma modell i två nedladdningsstorlekar var oense med sig själv. Välj efter de ord som spelar roll för dig, inte efter en procentsats: [modellguiden](https://earscribe.app/guides/which-whisper-model-should-i-use) visar de faktiska skillnaderna.
</details>

<details>
<summary><b>Kan jag få undertexter i SRT eller VTT?</b></summary><br/>
Ja: Exportera → SRT eller VTT. Timing kommer från Whispers egna segmentgränser, inte från att dela upp texten i efterhand. Undertextskontrollen flaggar repliker som är för långa, för snabba, upprepade, tomma eller överlappande, och du kan redigera replikernas text och timing före export.
</details>

<details>
<summary><b>Vad gör jag om jag redan har en SRT- eller VTT-fil?</b></summary><br/>
Konvertera den utan att ladda ner en modell: <a href="https://earscribe.app/srt-to-vtt">SRT till VTT</a> och <a href="https://earscribe.app/srt-to-txt">SRT till text</a> tolkar filen lokalt. Inget laddas upp och inga Whisper-vikter hämtas.
</details>

<details>
<summary><b>Fungerar den offline?</b></summary><br/>
Transkriberingssteget gör det: när sidan och modellen väl är laddade bearbetas ljudet utan att kontakta en transkriberingsserver. Men appen är inget offlinespår — att öppna den kräver nätet, och en modell du aldrig laddat ner måste hämtas. Att installera den från sidfoten lägger till en genväg som öppnas i arbetsytan; det lägger inte till någon offlinokopia.
</details>

<details>
<summary><b>Märker den vem som talar?</b></summary><br/>
Nej. Resultatet är platt text med tidskoder. Talardiariisering ingår inte i den här versionen, och appen låtsas inte annat.
</details>

<details>
<summary><b>Var lagras mina resultat?</b></summary><br/>
I den här webbläsaren: projekt i IndexedDB, modellvikter i CacheStorage. Det ursprungliga ljudet sparas inte med ett projekt om du inte behåller det. En sida som aldrig sparats till arbetsytan börjar om från början vid omladdning; använd <code>/dashboard</code> och dess export för att behålla det du bryr dig om.
</details>

<details>
<summary><b>Finns det ett gratis alternativ till Otter.ai eller Rev?</b></summary><br/>
EarScribe är ett gratis alternativ till molntjänster för transkribering: du gör beräkningen, ljudet stannar där det är och det finns inga minutkostnader. Avvägningen är verklig — inga talaretiketter, ingen teamarbetsyta, och långa filer begränsas av din maskin.
</details>

<details>
<summary><b>Hur konverterar jag en MP3 till text gratis?</b></summary><br/>
Släpp in MP3-filen på <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (eller startsidan). Den avkodas i din webbläsare, transkriberas lokalt och kan kopieras eller exporteras som SRT, VTT, TXT eller JSON.
</details>

> Fler svar på **[Om-sidan](https://earscribe.app/about)** och mätanteckningar i **[guiderna](https://earscribe.app/guides)**.

---

## 🛠️ Teknikstack

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU med WebAssembly som reserv
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small och large-v3-turbo, ONNX-kvantiserade
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — videodemuxning och ljudutvinning i fliken
- **[next-intl](https://next-intl.dev)** — 27 språk, en meddelandekatalog per språk
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** för drift, med några Pages Functions (modellvärd, feedback-endpoint)

Sajten renderas statiskt och hydreras i webbläsaren; transkribering och undertextkonvertering sker enbart på klientsidan. Modellvikterna hämtas från Hugging Face CDN vid första användningen och cachas i CacheStorage.

---

## 🧑‍💻 Lokal utveckling

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Kontroller som körs före en driftsättning:

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

`pnpm build` skapar en statisk export i `out/`. Flera granskningar läser `out/`, så kör bygget först.

---

## ☁️ Driftsättning

Driftsättningar i produktion går via ett enda kommando som kör alla granskningar i ordning:

```bash
pnpm pages:deploy
```

Först jämför det den lokala driftsättningsmarkören (`deployId` i `lib/release.ts`) med den som serveras på `/changelog` på live-sajten och vägrar fortsätta om de matchar — så fångas ett inaktuellt bygge. Sedan bygger det, kör granskningarna för länkar, guider, `llms.txt`, i18n, sitemap och PWA och publicerar `out/` till Cloudflare Pages.

`/changelog` är en läsarvänd lista över ändringar som någon kan agera på. Det är inte en bygglogg: interna refaktoreringar, textfixar och översättningsarbete får ett nytt `deployId` men ingen post i ändringsloggen.

Miljövariabler och bindningar:

| Namn | Används för |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Kanoniska URL:er, sitemap, OG-taggar |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausibles webbplatsidentifierare |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausibles skript-URL |
| `FEEDBACK_DB` (D1-bindning) | Endpointen `/feedback`; schema i `migrations/` |

---

## 🌐 Lägg till ett nytt språk

1. Lägg till språkkoden i `ALL_LOCALE_NAMES` i [`i18n/locale.ts`](i18n/locale.ts).
2. Lägg till `messages/<code>.json` bredvid `en.json`, helt översatt.
3. Kör `pnpm i18n:gate` — routing, sitemap, hreflang och OG-metadata plockar upp språket automatiskt, men en saknad nyckel fäller granskningen.

Bara språk som klarar granskningen hör hemma i `translatedLocales`; språkväxlaren märker allt annat som partiellt.

---

## 🔬 Lägg till en ny Whisper-modell

Lägg till en post i `MODELS` i [`lib/models.ts`](lib/models.ts) med ett **uppmätt** `sizeMB` för både `wasm` och `webgpu` — de två backendsen levererar olika viktfiler, och att ange en siffra för båda är hur appen en gång lovade 500 MB och levererade 968 MB. Repot måste finnas på Hugging Face som `onnx-community/<name>` eller vara ONNX-Whisper-kompatibelt. Lägg till ett matchande `models.<id>`-block i varje `messages/*.json` för texten om fördelar och nackdelar.

---

## 🤝 Bidra

Pull requests är välkomna — särskilt:

- Översättningar (`messages/<code>.json`) och språkspecifika README-rättelser
- Buggrapporter med filen som gick sönder, webbläsaren och enhetens minne
- Mätningar: modellstorlek, tid och toppminne på hårdvara vi inte har
- Tillgänglighetsfixar

Öppna ett issue eller en PR här, eller prova **[earscribe.app](https://earscribe.app)** först för att se vad du skulle bidra till.

---

## 📄 Licens

Marknadssajten och sidorna i det här repot är [MIT](LICENSE): gratis för personligt och kommersiellt bruk. Transkriberingsworkern, ljudavkodaren och undertextexportörerna publiceras inte här, så det här repot är inte en komplett självhostbar kopia av tjänsten.

---

<p align="center">
  <b>👉 Prova live-appen: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Ljud till text · Video till text · Tal till text · Undertextexport · 100% gratis · Ingen registrering · På enheten</sub>
</p>

<p align="center">
  Byggd med ❤️ på <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> och <a href="https://mediabunny.dev">mediabunny</a>.
</p>
