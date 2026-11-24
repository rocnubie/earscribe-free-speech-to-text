<p align="center">
  <b>🌐 Language / 语言 / Idioma:</b><br/>
  <a href="README.md">English</a> · <a href="README.zh-CN.md">中文</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.es.md">Español</a> · <a href="README.pt-BR.md">Português</a> · <a href="README.de.md">Deutsch</a> · <a href="README.fr.md">Français</a> · <a href="README.ru.md">Русский</a>
</p>

<h1 align="center">EarScribe — Free Audio &amp; Video to Text in Your Browser</h1>

<p align="center">
  <b>Drop an audio file, a video, or record from the microphone. Get a timestamped transcript and subtitles.</b><br/>
  <sub>Whisper runs on your own device through WebGPU or WebAssembly — the recording is never uploaded.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live app" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Free" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="No signup" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Private" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="EarScribe — free audio and video to text in the browser. Drop an MP3, WAV, M4A or MP4 and get a timestamped transcript without uploading."></a>
</p>

<p align="center">
  <b>🔗 Open the app:</b> <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/guides">Guides</a> ·
  <a href="https://earscribe.app/changelog">Changelog</a> ·
  <a href="https://earscribe.app/about">About</a>
</p>

---

## 🎙️ What EarScribe is

A transcription workspace that runs entirely in the browser tab. You give it audio, a video file, or your microphone; it gives back text with timestamps you can click to replay, plus subtitle files you can hand to an editor. There is no account, no upload and no per-minute billing.

Three ways in, one pipeline:

- **A file** — MP3, WAV, M4A, AAC, OGG, FLAC, Opus, or most things the Web Audio API can decode, up to 1 GiB.
- **A video** — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS. The audio track is demuxed and re-encoded to 16 kHz mono **inside the tab**, then transcribed like any other file. No ffmpeg, no converter site.
- **The microphone** — record and transcribe in the same place, for a lecture, a call you are allowed to record, or a voice memo you would otherwise lose.

Add the queue and you can drop a folder's worth of files and walk away; add the workspace at `/dashboard` and the results become projects you can reopen, edit and export later.

> 👉 **Live app:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Table of Contents

- [✨ What it does](#-what-it-does)
- [🖼️ Screenshots](#️-screenshots)
- [🚀 Quick start](#-quick-start)
- [🗂️ The workspace](#️-the-workspace)
- [💸 What it costs](#-what-it-costs)
- [🆚 Comparison](#-comparison)
- [🌍 Supported input & languages](#-supported-input--languages)
- [💼 Use cases](#-use-cases)
- [🚧 What it does not do](#-what-it-does-not-do)
- [❓ FAQ](#-faq)
- [🛠️ Tech stack](#️-tech-stack)
- [🧑‍💻 Local development](#-local-development)
- [☁️ Deploy](#️-deploy)
- [🌐 Add a new language](#-add-a-new-language)
- [🔬 Add a new Whisper model](#-add-a-new-whisper-model)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ What it does

| | Capability | What you actually get |
|---|---|---|
| 🎬 | **Audio, video and microphone** | Video containers are accepted directly. The audio track is extracted locally, so a 200 MB MP4 never leaves the machine either. |
| 📝 | **Timestamped transcript** | Every cue carries a start and end time. Click a line to hear that moment; the waveform scrubber follows along. |
| 🔍 | **Search inside the transcript** | A name, a number, a term — jump to the sentence and replay it instead of re-listening to the file. |
| 🎞️ | **Subtitle export** | SRT, WebVTT, plain text, JSON (the transcript object with full-precision timecodes), or the clipboard. |
| 🧪 | **Subtitle check** | Flags cues that are too long, too fast, repeated, empty or overlapping before you export them. |
| 📚 | **Batch queue** | Drop several files, set one model and one spoken language, and let the queue run them in order. Pause after the current file at any time. |
| 🗂️ | **Projects** | Results are saved in the browser as projects under `/dashboard`: transcripts, subtitles, source files and a trash folder, reopenable later. |
| ✏️ | **Subtitle editing** | Fix the text, move a cue's in/out point, split or delete a cue, then export again. |
| 💾 | **Backup and restore** | Export the whole workspace as one file and import it in another browser. |
| 🔁 | **Subtitle conversion** | SRT ⇄ VTT and SRT → text, in the browser, with no model download — the only tool here that starts instantly. |
| 🆓 | **Free and unlimited** | No paid tier, no daily quota, no per-minute fee, no account. |
| 🔒 | **Private by architecture** | Transcription runs locally. Public pages carry analytics and ads; `/dashboard` is ad-free. |
| 🌍 | **27 interface languages, 99 spoken languages** | The interface is translated into 27 locales; Whisper detects the spoken language automatically. |

---

## 🖼️ Screenshots

> Real screenshots from the live site at **[earscribe.app](https://earscribe.app)**.

### 1. Drop a file, a video, or record — no sign-up, no upload

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.webp" alt="Free audio and video to text converter — drop MP3, WAV, M4A, MP4, MOV or MKV in the browser. No sign-up, no login."></a>
</p>

### 2. Timestamped transcript with waveform — click any line to jump

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.webp" alt="EarScribe transcript output — timestamped audio to text with a waveform scrubber and one-click SRT and VTT subtitle export"></a>
</p>

### 3. Three steps: drop → pick a Whisper model → export

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.webp" alt="How free audio to text works on EarScribe — drop audio or video, pick a Whisper model (tiny, base, small or turbo), read and export the transcript"></a>
</p>

### 4. Why EarScribe — privacy-first, browser-native Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.webp" alt="EarScribe features — private no upload, WebGPU plus WASM, 99 spoken languages auto-detected, SRT VTT JSON TXT export, on-device inference"></a>
</p>

### 5. Who uses EarScribe — podcasters, journalists, students, editors

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.webp" alt="EarScribe use cases — free audio to text for podcasters, journalists, students, user research, video subtitles and audiobook transcription"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, HappyScribe and a local Whisper install

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.webp" alt="EarScribe vs Otter.ai vs Rev vs HappyScribe comparison — free unlimited audio to text with on-device inference and no per-minute fees"></a>
</p>

### 7. FAQ — privacy, formats, subtitle export, offline use

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.webp" alt="Free speech to text FAQ — answers about privacy, MP3 and video to text, SRT and VTT subtitle export, supported languages, offline use, and Whisper in the browser"></a>
</p>

---

## 🚀 Quick start

1. Open **[earscribe.app](https://earscribe.app)** in Chrome, Edge, Safari or Firefox.
2. Drop a file — or a video, or hit record. Accepts up to 1 GiB per file; the real limit is your device's memory, not the size on disk.
3. Pick a model. **base** is the default and right for most speech; **tiny** is for a phone or a quick voice note; **small** and **turbo** are for accented, noisy or important audio.
4. Press **Transcribe**. The audio is decoded and fed to Whisper inside the tab. The first run downloads the weights, so watch the size on the button.
5. Read the transcript, click a line to replay it, fix what matters, then **Export → SRT / VTT / TXT / JSON** or copy it.

Want a batch instead? Switch to the queue, drop as many files as you like, and pick the model once. The queue runs one file at a time, reuses the model already in memory, and saves each result as a project.

> 💡 **No conversion step needed.** A two-hour MP4 goes straight in. If you would rather keep just the audio, the app can extract a video's audio track for you.

---

## 🗂️ The workspace

`/dashboard` is the same transcription engine with memory. Everything is stored in this browser — IndexedDB for the project records, CacheStorage for model weights — and nothing is synced to an account, because there is no account.

| Section | What lives there |
|---|---|
| **Projects** | Everything, newest first. |
| **Transcripts** | Projects created by a transcription run. Editing their cues keeps them here. |
| **Subtitles** | Projects created from a subtitle file — the converter and imports — so caption work stays apart from speech work. |
| **Files** | The source media the workspace holds, filterable by kind: transcripts, subtitles, audio. The original audio is **not** saved by default. |
| **Trash** | Deleted projects, recoverable until you empty it. |

Inside a project you can search the transcript, click a timestamp to replay, edit the subtitle cues (text, in/out points, add or remove), reflow long cues into shorter ones, re-export in any format, or open the media player without leaving the page.

**Backup:** the workspace exports as a single file (up to 320 MB) and imports in another browser or on another machine. Since projects never leave the device, this file is the only copy that travels — treat it like any other document backup.

---

## 💸 What it costs

Free does not mean weightless. These are measured download sizes per model and backend, not estimates:

| Model | WebGPU | WebAssembly | Typical use |
|---|---:|---:|---|
| **tiny** | 151 MB | 41 MB | Voice notes, low-end phones, a first try |
| **base** *(default)* | 291 MB | 77 MB | Interviews, meetings, podcasts |
| **small** | 968 MB | 249 MB | Accented speech, noisy rooms |
| **turbo** | 3.24 GB | 1.09 GB | Studio-grade transcripts, when accuracy matters more than time |

- **Download once, cached after.** Weights live in the browser's cache; a second run downloads nothing. A different browser profile means downloading again.
- **The GPU is worth it.** On the same machine, WebGPU finished a 40-minute file with base in about 3.8 minutes against 9.4 on the CPU — roughly 2.5× faster, for three to four times the download. `turbo` on WebGPU never finished its 3.24 GB download in our test, so it is listed as unmeasured rather than fast.
- **Memory decides, not file size.** Long recordings are decoded to 16 kHz mono before transcription. A 40-minute MP3 needs a few hundred megabytes; a two-hour stereo WAV can exhaust a tab before it starts. Decoding now asks for 16 kHz directly, which cut peak memory on a two-hour stereo file from about 1.6 GB to 0.5 GB.
- **No server, no queue on someone else's machine.** Time is your CPU's, so a slow laptop is slow. That is the trade for not uploading.

Full measurements, with the method and the runs that failed, are in the [guides](https://earscribe.app/guides).

---

## 🆚 Comparison

How does EarScribe compare to other ways to transcribe audio in 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Free & unlimited** | ✅ | ⚠️ 300 min/mo | ❌ Trial only | ❌ Paid | ✅ |
| **No sign-up / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **No upload (private)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Video without uploading** | ✅ Extract locally | ❌ Upload required | ❌ Upload required | ❌ Upload required | ✅ Needs ffmpeg |
| **Works in the browser** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT export** | ✅ | ⚠️ Paid | ✅ | ✅ | ⚠️ Manual |
| **Timestamped transcript** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Local inference** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **99 spoken languages** | ✅ | ⚠️ Limited | ⚠️ Limited | ✅ | ✅ |
| **Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Install required** | ❌ None | ❌ None | ❌ None | ❌ None | ⚠️ Python + GPU |
| **Cost** | $0 | $0–$30/mo | $0.25/min | €0.20/min | $0 (your hardware) |

**Where it loses:** a local install can run a bigger model on a faster backend than a browser tab, and a paid service adds speaker labels and a team workspace. EarScribe's advantage is that it is free, needs nothing installed, and the audio never goes anywhere.

→ **[Try it on earscribe.app](https://earscribe.app)**

---

## 🌍 Supported input & languages

### Audio — MP3, WAV, M4A, AAC, OGG, FLAC, Opus

Anything the Web Audio API can decode is accepted; those seven cover nearly every recording you will meet.

- 🎵 **[MP3 to text](https://earscribe.app/mp3-to-text)** — podcast and interview standard
- 🎙️ **[WAV to text](https://earscribe.app/wav-to-text)** — lossless studio and field recordings
- 📱 **[M4A to text](https://earscribe.app/m4a-to-text)** — iPhone Voice Memos
- 🎧 **[Voice memo to text](https://earscribe.app/voice-memo-to-text)** — phone recordings on mobile
- 🔊 **[Audio to text](https://earscribe.app/audio-to-text)** — the general entry point
- 🎬 **[Audio to SRT](https://earscribe.app/audio-to-srt)** — straight to subtitles

### Video — MP4, MOV, MKV, WebM, M4V, TS, QT, M2TS

The audio track is demuxed with [mediabunny](https://mediabunny.dev), decoded with WebCodecs and re-encoded as a small mono 16 kHz MP3 (or WAV where no MP3 encoder exists) — all locally. A container the browser cannot decode fails with a clear message instead of a silent empty transcript.

### Microphone

Recording happens in the tab with MediaRecorder. A recording is transcribed exactly like a dropped file; live captions during the recording are **not** provided (see [what it does not do](#-what-it-does-not-do)).

### Languages — 99 spoken, 27 interface

Whisper detects the spoken language automatically: English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese (Simplified and Traditional), Arabic, Hindi, Turkish, Dutch, Polish, Indonesian, Swedish, Norwegian, Danish, Finnish, Czech, Hungarian, Greek, Hebrew, Thai, Vietnamese, and 70+ more.

The interface is translated into 27 locales. English sits at `/`, the other 26 carry a prefix:

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

## 💼 Use cases

### 🎙️ Podcasters & creators
**[Podcast transcription](https://earscribe.app/podcast-transcription)** for show notes, episode SEO and accessibility. Export SRT for the video version, TXT for the blog.

### 📰 Journalists & researchers
**[Interview transcription](https://earscribe.app/interview-transcription)** where the source recording stays on your laptop. No third-party copy exists to leak, subpoena or audit.

### 🎓 Students & lecturers
**[Lecture transcription](https://earscribe.app/audio-to-text)** of a recorded class, searchable before the next session. Works with iPhone Voice Memos and Zoom exports.

### 📞 Meetings & user research
**[Meeting recording to text](https://earscribe.app/meeting-recording-to-text)** — a transcript of the call, not automatically generated meeting notes.

### 🎬 Video editors
**[Audio to SRT](https://earscribe.app/audio-to-srt)** for YouTube, Premiere, Final Cut and Resolve. Cue timing comes from Whisper's own timestamps, and the subtitle check flags what will overflow on screen.

### 📚 Audiobooks & long recordings
Two-hour files are supported, but they are the case where device memory decides. Read [how long audio is handled](https://earscribe.app/guides/how-to-transcribe-long-audio) before starting a four-hour one.

---

## 🚧 What it does not do

Being explicit here saves everyone a wasted run:

- **No speaker separation.** Two people in one file produce flat text without "Speaker 1 / Speaker 2" labels. The interview page says so on purpose.
- **No translation.** The transcript stays in the language that was spoken; UI language and spoken language are unrelated.
- **No live captions.** Recording and transcription are separate steps — the microphone records first, then the file is transcribed.
- **The queue is serial and needs the tab open.** One model, one language setting for the whole batch. Closing the tab stops it.
- **No cross-device sync.** Projects live in this browser. Use the workspace export to move them.
- **Not an offline app.** Weights are cached, but the page itself is loaded from the network. Installing it adds a desktop or home-screen shortcut, not an offline copy.
- **1 GiB per file is a hard cap; memory is the practical one.**

---

## ❓ FAQ

<details>
<summary><b>Is EarScribe really free, with no limits?</b></summary><br/>
Yes — no paid tier, no credit card, no per-minute fee, no daily or monthly quota, no account. The compute runs on your own hardware, so there is no cloud bill to pass on. There is a 1 GiB per-file cap, and your device's memory bounds what actually finishes.
</details>

<details>
<summary><b>Is my audio uploaded anywhere?</b></summary><br/>
No. Audio is decoded in the tab and fed to a Whisper model running in a Web Worker. Model weights are downloaded <i>to</i> your browser from a CDN, which means the CDN sees your IP address — but the recording is not sent. Public pages carry Google AdSense — except the Persian pages, which AdSense policy excludes — plus cookieless Plausible analytics; <code>/dashboard</code> loads no ad code.
</details>

<details>
<summary><b>Can I transcribe a video?</b></summary><br/>
Yes, directly — MP4, MOV, MKV, WebM, M4V, TS, QT and M2TS. The audio track is extracted inside the browser and transcribed like a normal file, so you do not need ffmpeg or a converter site. If a container uses a codec the browser cannot decode, the app says so instead of producing an empty transcript.
</details>

<details>
<summary><b>Why is the first run slow?</b></summary><br/>
The first time you use a model, the browser downloads its weights — 41 MB for tiny on WebAssembly up to 3.24 GB for turbo on WebGPU. They are cached afterwards. Pick <b>base</b> (77 MB on WebAssembly, 291 MB on WebGPU) for almost everything.
</details>

<details>
<summary><b>How accurate is it, and which model should I pick?</b></summary><br/>
On the same 34-second clip our four models disagreed on 26 of 111 words, and the same model at two download sizes disagreed with itself. Pick by the words that matter to you, not by an accuracy percentage: <a href="https://earscribe.app/guides/which-whisper-model-should-i-use">the model guide</a> shows the actual differences.
</details>

<details>
<summary><b>Can I get SRT or VTT subtitles?</b></summary><br/>
Yes: Export → SRT or VTT. Timing comes from Whisper's own segment boundaries, not from splitting the text afterwards. The subtitle check flags cues that are too long, too fast, repeated, empty or overlapping, and you can edit cue text and timing before exporting.
</details>

<details>
<summary><b>What if I already have an SRT or VTT file?</b></summary><br/>
Convert it without downloading a model: <a href="https://earscribe.app/srt-to-vtt">SRT to VTT</a> and <a href="https://earscribe.app/srt-to-txt">SRT to text</a> parse the file locally. Nothing is uploaded and no Whisper weights are fetched.
</details>

<details>
<summary><b>Does it work offline?</b></summary><br/>
The transcription step does: once the page and the model are loaded, audio is processed without contacting a transcription server. The app is not an offline bundle — opening it needs the network, and a model you have never downloaded has to be fetched. Installing it from the footer adds a shortcut that opens into the workspace; it does not add an offline copy.
</details>

<details>
<summary><b>Does it label who is speaking?</b></summary><br/>
No. The output is flat text with timecodes. Speaker diarization is not part of this build, and the app does not pretend otherwise.
</details>

<details>
<summary><b>Where are my results stored?</b></summary><br/>
In this browser: projects in IndexedDB, model weights in CacheStorage. The original audio is not saved with a project unless you keep it. A page that was never saved to the workspace starts clean on reload; use <code>/dashboard</code> and its export to keep anything you care about.
</details>

<details>
<summary><b>Is there a free Otter.ai or Rev alternative?</b></summary><br/>
EarScribe is a free alternative to cloud transcription services: you do the compute, the audio stays put, and there are no per-minute fees. The trade-off is real — no speaker labels, no team workspace, and long files are bounded by your machine.
</details>

<details>
<summary><b>How do I convert an MP3 to text for free?</b></summary><br/>
Drop the MP3 on <a href="https://earscribe.app/mp3-to-text">earscribe.app/mp3-to-text</a> (or the home page). It is decoded in your browser, transcribed locally, and can be copied or exported as SRT, VTT, TXT or JSON.
</details>

> More answers on the **[About page](https://earscribe.app/about)**, and measurement notes in the **[guides](https://earscribe.app/guides)**.

---

## 🛠️ Tech stack

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web, WebGPU with a WebAssembly fallback
- **[OpenAI Whisper](https://github.com/openai/whisper)** — tiny, base, small and large-v3-turbo, ONNX-quantized
- **[mediabunny](https://mediabunny.dev)** + **WebCodecs** — video demuxing and audio extraction in the tab
- **[next-intl](https://next-intl.dev)** — 27 locales, one message catalogue per language
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Cloudflare Pages](https://pages.cloudflare.com)** for hosting, with a few Pages Functions (model host, feedback endpoint)

The site is statically rendered and hydrates in the browser; transcription and subtitle conversion are client-side only. Model weights come from the Hugging Face CDN on first use and are cached in CacheStorage.

---

## 🧑‍💻 Local development

```bash
git clone https://github.com/rocnubie/earscribe-free-speech-to-text.git
cd earscribe-free-speech-to-text
pnpm install
pnpm dev
# → http://localhost:3000
```

Checks that run before a deploy:

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

`pnpm build` produces a static export in `out/`. Several audits read `out/`, so run the build first.

---

## ☁️ Deploy

Production deploys go through one command, which runs every audit in order:

```bash
pnpm pages:deploy
```

It first compares the local deploy marker (`deployId` in `lib/release.ts`) with the one served at `/changelog` on the live site and refuses to continue if they match — that is how a stale build is caught. Then it builds, runs the link, guides, `llms.txt`, i18n, sitemap and PWA audits, and publishes `out/` to Cloudflare Pages.

`/changelog` is a reader-facing list of changes someone can act on. It is not a build log: internal refactors, copy fixes and translation work get a new `deployId` but no changelog entry.

Environment and bindings:

| Name | Used for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, OG tags |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible site identifier |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible script URL |
| `FEEDBACK_DB` (D1 binding) | The `/feedback` endpoint; schema in `migrations/` |

---

## 🌐 Add a new language

1. Append the locale code to `ALL_LOCALE_NAMES` in [`i18n/locale.ts`](i18n/locale.ts).
2. Add `messages/<code>.json` next to `en.json`, fully translated.
3. Run `pnpm i18n:gate` — routing, sitemap, hreflang and OG metadata pick the locale up automatically, but a missing key fails the gate.

Only locales that pass the gate belong in `translatedLocales`; the language switcher labels everything else as partial.

---

## 🔬 Add a new Whisper model

Append an entry to `MODELS` in [`lib/models.ts`](lib/models.ts) with a **measured** `sizeMB` for both `wasm` and `webgpu` — the two backends ship different weight files, and quoting one number for both is how the app once promised 500 MB and delivered 968 MB. The repo must exist on Hugging Face as `onnx-community/<name>` or be ONNX-Whisper compatible. Add a matching `models.<id>` block to each `messages/*.json` for the pros/cons copy.

---

## 🤝 Contributing

Pull requests welcome — especially:

- Translations (`messages/<code>.json`), and locale-specific README fixes
- Bug reports with the file that broke, the browser and the device's memory
- Measurements: model size, time and peak memory on hardware we do not have
- Accessibility fixes

Open an issue or a PR here, or try **[earscribe.app](https://earscribe.app)** first to see what you would be contributing to.

---

## 📄 License

The marketing site and the pages in this repository are [MIT](LICENSE): free for personal and commercial use. The transcription worker, audio decoder and subtitle exporters are not published here, so this repository is not a complete self-hostable copy of the service.

---

<p align="center">
  <b>👉 Try the live app: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Audio to text · Video to text · Speech to text · Subtitle export · 100% free · No sign-up · On-device</sub>
</p>

<p align="center">
  Built with ❤️ on <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, <a href="https://onnxruntime.ai">ONNX Runtime Web</a> and <a href="https://mediabunny.dev">mediabunny</a>.
</p>
