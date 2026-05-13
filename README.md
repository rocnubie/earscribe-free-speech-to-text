<h1 align="center">EarScribe — Free Audio to Text & Free Speech to Text Converter</h1>

<p align="center">
  <b>Transcribe audio and video to text in your browser. 100% free. No sign-up. No upload. Unlimited.</b><br/>
  <sub>Powered by OpenAI Whisper running on WebGPU / WebAssembly — your audio never leaves your device.</sub>
</p>

<p align="center">
  <a href="https://earscribe.app"><img alt="Live demo" src="https://img.shields.io/badge/Live-earscribe.app-0284c7?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Free" src="https://img.shields.io/badge/100%25-Free-10b981?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="No signup" src="https://img.shields.io/badge/No-Sign--up-8b5cf6?style=for-the-badge"></a>
  <a href="https://earscribe.app"><img alt="Private" src="https://img.shields.io/badge/On--device-Private-0f172a?style=for-the-badge"></a>
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-64748b?style=for-the-badge">
</p>

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.png" alt="EarScribe — Free Audio to Text Converter screenshot — drag-and-drop MP3, WAV, M4A and free speech to text in your browser via OpenAI Whisper"></a>
</p>

<p align="center">
  <b>🔗 Try it now:</b>
  <a href="https://earscribe.app">earscribe.app</a> ·
  <a href="https://earscribe.app/about">About</a> ·
  <a href="https://earscribe.app/es">Español</a> ·
  <a href="https://earscribe.app/de">Deutsch</a> ·
  <a href="https://earscribe.app/fr">Français</a> ·
  <a href="https://earscribe.app/ja">日本語</a> ·
  <a href="https://earscribe.app/ko">한국어</a> ·
  <a href="https://earscribe.app/pt-br">Português</a> ·
  <a href="https://earscribe.app/ru">Русский</a> ·
  <a href="https://earscribe.app/hi">हिन्दी</a> ·
  <a href="https://earscribe.app/ar">العربية</a>
</p>

---

## 🎙️ What is EarScribe?

**[EarScribe](https://earscribe.app)** is a **free audio to text** and **free speech to text** converter that runs entirely in your web browser. Drop an audio file — MP3, WAV, M4A, OGG, FLAC, WebM, or the audio track of a video — and get a fully timestamped transcript plus one-click **SRT / VTT subtitle export**. There is no upload, no login, no API key, and no per-minute fee.

It is the simplest way to **transcribe audio and video to text** for free:

- 🎧 **Drag-and-drop** any audio file
- 🧠 **OpenAI Whisper** transcribes it locally
- 📝 Get a **transcript with timestamps**, synced waveform, and **SRT / VTT subtitles**
- 🔒 Audio **never leaves your device** — fully private, offline-capable after the first model download

> 👉 **Live app:** **[earscribe.app](https://earscribe.app)**

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🚀 Quick start (transcribe in 30 seconds)](#-quick-start-transcribe-in-30-seconds)
- [🆚 Free Audio-to-Text Comparison](#-free-audio-to-text-comparison)
- [🤖 Models — Pick the right Whisper](#-models--pick-the-right-whisper)
- [🌍 Supported file formats & languages](#-supported-file-formats--languages)
- [💼 Use cases](#-use-cases)
- [❓ FAQ — Free Speech to Text](#-faq--free-speech-to-text)
- [🛠️ Tech stack](#️-tech-stack)
- [🧑‍💻 Local development](#-local-development)
- [☁️ Deploy to Cloudflare Pages](#️-deploy-to-cloudflare-pages)
- [🌐 Add a new language](#-add-a-new-language)
- [🔬 Add a new Whisper model](#-add-a-new-whisper-model)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

EarScribe is a complete, **free online transcription** workspace — built for podcasters, journalists, students, and anyone who needs to **transcribe audio to text** without uploading sensitive recordings to a cloud service.

| | Feature | What it means |
|---|---|---|
| 🆓 | **100% free, unlimited** | No paid tier, no daily quota, no per-minute fee. Truly **free audio to text**. |
| 🚫 | **No sign-up, no login** | No email, no account, no credit card. Just open [earscribe.app](https://earscribe.app) and drop a file. |
| 🔒 | **Private by design** | Audio never leaves your device. There is no server endpoint that touches your file. |
| 🌐 | **Browser-native AI** | **OpenAI Whisper** runs locally via WebGPU (GPU-accelerated) or WebAssembly fallback. |
| 🎬 | **Subtitle export** | One-click **SRT / VTT** export — drops straight into Premiere, Final Cut, DaVinci Resolve, YouTube. |
| 📜 | **Timestamped transcript** | Click any line to jump to that moment in the audio. Built-in waveform scrubber. |
| 🗣️ | **99 languages** | Whisper auto-detects the spoken language — no manual setting required. |
| ⚡ | **Offline after first run** | Models are cached in your browser. Subsequent transcriptions work without internet. |
| 🎚️ | **4 Whisper models** | Tiny (40 MB) → Base → Small → **Large v3 Turbo** for studio-grade accuracy. |
| 📦 | **Multiple export formats** | `.txt` · `.srt` · `.vtt` · `.json` (raw + timing) |
| 🌍 | **10 UI languages** | EN · ES · DE · FR · PT-BR · RU · JA · KO · HI · AR |
| 🪶 | **No ads, no tracking** | Plausible analytics only — no session replay, no cookies, no fingerprinting. |

---

## 🖼️ Screenshots

> Real screenshots from the live site at **[earscribe.app](https://earscribe.app)** — captured 2026.

### 1. Drop an audio file — 100% free, no sign-up, no login

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/01-hero.png" alt="Free audio to text converter — drag and drop MP3, WAV, M4A, OGG, FLAC or WebM in the browser. No sign-up, no login, unlimited free speech to text."></a>
</p>

### 2. Timestamped transcript with waveform, click any line to jump

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/02-transcript-showcase.png" alt="EarScribe transcript output — timestamped audio to text with waveform scrubber and one-click SRT and VTT subtitle export"></a>
</p>

### 3. Three steps: drop → pick a Whisper model → export

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/03-how-it-works.png" alt="How free audio to text works on EarScribe — drop audio, pick OpenAI Whisper model (Tiny, Base, Small, or Large v3 Turbo), read and export transcript"></a>
</p>

### 4. Why EarScribe — privacy-first, browser-native Whisper

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/04-features.png" alt="EarScribe features — private no upload, WebGPU plus WASM, 99 languages auto-detected, SRT VTT JSON TXT export, works offline, 100% free no API key"></a>
</p>

### 5. Who uses EarScribe — podcasters, journalists, students, editors

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/05-use-cases.png" alt="EarScribe use cases — free audio to text for podcasters, journalists, students, user research, video subtitle SRT generator, and audiobook transcription"></a>
</p>

### 6. EarScribe vs Otter.ai, Rev, Whisper API — built-in comparison

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/06-comparison.png" alt="EarScribe vs Otter.ai vs Rev vs Whisper API comparison — free unlimited audio to text alternative with no per-minute fees and on-device privacy"></a>
</p>

### 7. Free Speech to Text — FAQ

<p align="center">
  <a href="https://earscribe.app"><img src="https://earscribe.app/screenshots/07-faq.png" alt="Free speech to text FAQ — answers about privacy, MP3 to text, SRT and VTT subtitle export, supported languages, offline use, and OpenAI Whisper in the browser"></a>
</p>

---

## 🚀 Quick start (transcribe in 30 seconds)

The fastest **free speech to text** flow on the web:

1. Open **[earscribe.app](https://earscribe.app)** in any modern browser (Chrome, Edge, Safari, Firefox).
2. Drag your audio file onto the page (MP3, WAV, M4A, OGG, FLAC, WebM — up to ~2 hours per file).
3. Pick a Whisper model. **Base** is recommended for most users; **Turbo** gives studio accuracy if you have WebGPU.
4. Click **Transcribe**. The audio is decoded and run through Whisper *inside your browser tab*.
5. Read the transcript, click any line to play that moment, or **Export → .srt / .vtt / .txt / .json**.

No upload. No account. No quota. Just **free audio to text** that respects your data.

> 💡 **Pro tip:** Want to **transcribe a video to text**? Extract the audio first (any free tool like ffmpeg, Audacity, or VLC will export MP3 / WAV from a video) and drop that on EarScribe.

---

## 🆚 Free Audio-to-Text Comparison

How does EarScribe compare to other ways to **transcribe audio to text** in 2026?

| | **EarScribe** | Otter.ai Free | Rev Free Trial | HappyScribe | Local Whisper CLI |
|---|:---:|:---:|:---:|:---:|:---:|
| **Free & unlimited** | ✅ | ⚠️ 300 min/mo | ❌ Trial only | ❌ Paid | ✅ |
| **No sign-up / login** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **No upload (private)** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Works in browser** | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SRT / VTT export** | ✅ | ⚠️ Paid | ✅ | ✅ | ⚠️ Manual |
| **Timestamped transcript** | ✅ | ✅ | ✅ | ✅ | ⚠️ Manual |
| **Works offline** | ✅ (after 1st load) | ❌ | ❌ | ❌ | ✅ |
| **99 languages** | ✅ | ⚠️ Limited | ⚠️ Limited | ✅ | ✅ |
| **OpenAI Whisper Large v3 Turbo** | ✅ | ❌ | ❌ | ❌ | ✅ |
| **Install required** | ❌ None | ❌ None | ❌ None | ❌ None | ⚠️ Python + GPU |
| **Cost** | $0 | $0–$30/mo | $0.25/min | €0.20/min | $0 (your hardware) |

**Verdict:** EarScribe is the only tool that combines *truly free, unlimited, no-signup, no-upload, browser-native, subtitle-ready* **audio to text conversion** in one click. → **[Try it on earscribe.app](https://earscribe.app)**

---

## 🤖 Models — Pick the right Whisper

EarScribe ships four **OpenAI Whisper** model sizes. All run locally; the first download is cached forever.

| Model | Size | Accuracy | Speed | RAM | Best for |
|---|---:|:---:|:---:|---:|---|
| **Whisper Tiny** | ~80 MB | ⭐ | ⚡⚡⚡⚡ | 1 GB | Quick voice notes, low-end phones |
| **Whisper Base** *(Recommended)* | ~200 MB | ⭐⭐ | ⚡⚡⚡ | 2 GB | Everyday podcast / lecture transcription |
| **Whisper Small** | ~500 MB | ⭐⭐⭐ | ⚡⚡ | 4 GB | Accented speech, noisy audio |
| **Whisper Large v3 Turbo** | ~800 MB | ⭐⭐⭐⭐ | ⚡⚡⚡ (WebGPU) | 6 GB | Studio-grade transcripts, multi-speaker, music+speech |

> 📌 Models are **cached after the first run** — your next transcription is instant. Read the full breakdown on **[earscribe.app](https://earscribe.app)**.

---

## 🌍 Supported file formats & languages

### Audio formats — MP3, WAV, M4A, OGG, FLAC, WebM

EarScribe accepts any audio format the Web Audio API can decode:

- 🎵 **[MP3 to text](https://earscribe.app)** — the most common podcast format
- 🎙️ **[WAV to text](https://earscribe.app)** — lossless studio recordings
- 📱 **[M4A to text](https://earscribe.app)** — Apple Voice Memos, iPhone recordings
- 🎶 **[OGG to text](https://earscribe.app)** — open-source format
- 🔊 **[FLAC to text](https://earscribe.app)** — high-fidelity archives
- 🎥 **[WebM to text](https://earscribe.app)** — browser-recorded audio/video

For **video to text** (MP4, MOV, MKV), extract the audio first using any free tool (Audacity, VLC, ffmpeg), then drop the resulting MP3 or WAV on **[earscribe.app](https://earscribe.app)**.

### Languages — 99 supported

Whisper auto-detects the spoken language. EarScribe transcribes English, Spanish, French, German, Italian, Portuguese, Russian, Japanese, Korean, Chinese (Simplified & Traditional), Arabic, Hindi, Turkish, Dutch, Polish, Indonesian, Swedish, Norwegian, Danish, Finnish, Czech, Hungarian, Greek, Hebrew, Thai, Vietnamese, and 70+ more.

The UI is available in:

| Language | Link |
|---|---|
| 🇺🇸 English | [earscribe.app](https://earscribe.app) |
| 🇪🇸 Español | [earscribe.app/es](https://earscribe.app/es) |
| 🇩🇪 Deutsch | [earscribe.app/de](https://earscribe.app/de) |
| 🇫🇷 Français | [earscribe.app/fr](https://earscribe.app/fr) |
| 🇧🇷 Português | [earscribe.app/pt-br](https://earscribe.app/pt-br) |
| 🇷🇺 Русский | [earscribe.app/ru](https://earscribe.app/ru) |
| 🇯🇵 日本語 | [earscribe.app/ja](https://earscribe.app/ja) |
| 🇰🇷 한국어 | [earscribe.app/ko](https://earscribe.app/ko) |
| 🇮🇳 हिन्दी | [earscribe.app/hi](https://earscribe.app/hi) |
| 🇸🇦 العربية | [earscribe.app/ar](https://earscribe.app/ar) |

---

## 💼 Use cases

EarScribe is a general-purpose **free transcription tool**. Here is what people use it for:

### 🎙️ Podcasters & content creators
**Free podcast transcription** for show notes, episode SEO, and accessibility. Get your **MP3 to text** in minutes, then export `.srt` for video versions. → [Start on earscribe.app](https://earscribe.app)

### 📰 Journalists & researchers
**Source interviews stay on your laptop.** No third-party server to subpoena, no audit log, no leak surface. **Free interview transcription** with one of the strongest privacy guarantees on the web.

### 🎓 Students & educators
**Free lecture transcription** — drop a recorded class and get a searchable transcript before the next session. Works with iPhone Voice Memos (`.m4a`) and Zoom recordings.

### 📞 Meetings & user research
**Audio to text for user interviews** — ship a tagged transcript without sending sensitive customer audio to a third-party SaaS.

### 🎬 Video editors — subtitles & captions
**Generate SRT subtitles from audio** for YouTube, Premiere Pro, Final Cut Pro, DaVinci Resolve. Cue timing comes from Whisper's emitted timestamps, so subtitles align perfectly.

### 📚 Audiobooks & long-form
Two-hour MP3? No problem. **Whisper Large v3 Turbo** handles audiobook-length audio with no per-minute fees and no API quota.

---

## ❓ FAQ — Free Speech to Text

<details>
<summary><b>Is EarScribe really 100% free with no limits?</b></summary><br/>
Yes — 100% free, unlimited, no sign-up and no login required. There are no paid tiers, no credit card, no per-minute fees, and no daily or monthly quota. The Whisper <b>speech to text</b> model runs on your own hardware, so there is no cloud compute cost to pass on. Free <a href="https://earscribe.app">audio to text</a> with no strings attached.
</details>

<details>
<summary><b>Is my audio private and secure?</b></summary><br/>
Fully private. EarScribe is a local-first <b>audio to text converter</b>: your audio file never leaves your device and is never uploaded to any server. No account means no data collected about you. You can even use it offline once the model is downloaded.
</details>

<details>
<summary><b>Is my audio uploaded anywhere?</b></summary><br/>
No. <b>Free audio to text</b> happens entirely locally — the audio is decoded on your device and fed to a Whisper model running in a Web Worker. Nothing is sent to a server.
</details>

<details>
<summary><b>Why is the first run slow?</b></summary><br/>
The first time you pick a model for <b>audio to text</b>, your browser downloads it (80 MB to 800 MB depending on the size). After that the free <b>audio to text</b> model is cached and reused — no re-download needed.
</details>

<details>
<summary><b>What languages are supported?</b></summary><br/>
<b>Free audio to text</b> supports 99 languages via Whisper. The language is detected automatically — you do not need to pick one.
</details>

<details>
<summary><b>Can I transcribe a video?</b></summary><br/>
Not directly. For <b>video audio to text</b>, extract the audio first (any tool that can output MP3 or WAV will work) and drop that on <a href="https://earscribe.app">earscribe.app</a>.
</details>

<details>
<summary><b>Does this work offline?</b></summary><br/>
After the model has been downloaded once, yes — <b>free audio to text</b> works offline. The page itself needs to be loaded first, but subsequent runs work without internet.
</details>

<details>
<summary><b>How do I convert an MP3 to text for free?</b></summary><br/>
Drop the MP3 onto <a href="https://earscribe.app">EarScribe</a> for free <b>MP3 to text</b>. The file is decoded in your browser, Whisper transcribes it locally, and you can copy the output or export your <b>MP3 to text</b> as SRT, VTT, TXT or JSON. There is no upload step and no account required.
</details>

<details>
<summary><b>Is there a free Otter.ai or Rev alternative?</b></summary><br/>
EarScribe is a free <b>audio to text alternative</b> to cloud transcription services like Otter.ai, Rev and HappyScribe. The trade-off: you do the compute on your own machine for <b>free speech to text</b>, but the audio never leaves it and there are no per-minute fees or subscriptions.
</details>

<details>
<summary><b>Can I generate SRT or VTT subtitles from audio?</b></summary><br/>
Yes. After <b>audio to text</b>, click <b>Export → .srt</b> or <b>.vtt</b>. Cue timing comes from Whisper's emitted timestamps, so the subtitles align with the <b>audio to text</b> output without manual splitting.
</details>

<details>
<summary><b>Does this run OpenAI Whisper in the browser?</b></summary><br/>
Yes — EarScribe runs free <b>audio to text</b> via <b>OpenAI Whisper</b> (Tiny, Base, Small, and Large v3 Turbo) directly in the browser through Transformers.js on WebGPU, falling back to WebAssembly when unavailable.
</details>

> Read more answers on the **[About page](https://earscribe.app/about)**.

---

## 🛠️ Tech stack

EarScribe is built to be fast, static, and cheap to host:

- **[Next.js 15](https://nextjs.org)** (App Router) + **React 19**
- **[@huggingface/transformers v3](https://huggingface.co/docs/transformers.js)** — ONNX Runtime Web (WebGPU + WASM)
- **[OpenAI Whisper](https://github.com/openai/whisper)** — Tiny, Base, Small, Large v3 Turbo (ONNX-quantized)
- **[next-intl](https://next-intl.dev)** — i18n (10 languages shipped)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[@opennextjs/cloudflare](https://opennext.js.org/cloudflare)** — deploys to Cloudflare Pages
- **Plausible Analytics** (only loaded in production)

The entire frontend is **static**. Model weights are pulled from the Hugging Face CDN on first use and cached by the browser's CacheStorage.

---

## 🧑‍💻 Local development

```bash
git clone https://github.com/<your-org>/earscribe.git
cd earscribe
pnpm install
pnpm dev
# → http://localhost:3000
```

Type-check, lint, and build:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

---

## ☁️ Deploy to Cloudflare Pages

```bash
pnpm cf:build          # produces .open-next/
pnpm cf:preview        # local preview via Wrangler
pnpm cf:deploy         # wrangler deploy
```

Edit `wrangler.toml` and set the following env vars in the Cloudflare dashboard:

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, OG tags |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible site identifier |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` | Plausible script URL |

---

## 🌐 Add a new language

1. Append the new code to `locales` in [`i18n/locale.ts`](i18n/locale.ts).
2. Drop `messages/<code>.json` next to `en.json`, translated.

Routing, sitemap, hreflang, and OG metadata will pick it up automatically.

---

## 🔬 Add a new Whisper model

Append an entry to `MODELS` in [`lib/models.ts`](lib/models.ts). The repo must be available on Hugging Face under `onnx-community/<name>` (or any other ONNX-Whisper-compatible repo). Add a matching `models.<id>` block to each `messages/*.json` for the pros/cons copy.

---

## 🤝 Contributing

Pull requests welcome — especially:

- Additional language translations (drop a `messages/<code>.json`)
- Bug reports for specific audio files / browsers
- New Whisper model variants on Hugging Face
- Accessibility improvements

Open an issue or PR on this repo, or try the live app at **[earscribe.app](https://earscribe.app)** first to see what you're contributing to.

---

## 📄 License

[MIT](LICENSE) — free for personal and commercial use.

---

<p align="center">
  <b>👉 Try the live app: <a href="https://earscribe.app">earscribe.app</a></b><br/>
  <sub>Free audio to text · Free speech to text · Transcribe audio and video to text · 100% free · No sign-up · Private</sub>
</p>

<p align="center">
  Built with ❤️ on <a href="https://github.com/openai/whisper">OpenAI Whisper</a>, <a href="https://huggingface.co/docs/transformers.js">Transformers.js</a>, and <a href="https://onnxruntime.ai">ONNX Runtime Web</a>.
</p>
