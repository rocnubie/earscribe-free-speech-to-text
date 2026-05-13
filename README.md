# EarScribe — UI

> Public UI shell for [**EarScribe**](https://earscribe.app) — a free, in-browser audio-to-text transcriber. No upload, no account, no API key.

This repo contains the **marketing UI** of EarScribe: the Next.js + Tailwind site shell, i18n routing, SEO sections, FAQ, sitemap, JSON-LD, robots policy and analytics wiring. The actual Whisper inference pipeline (audio decode, ONNX Runtime worker, model orchestration, subtitle exporters) lives in the closed-source repo and is **not included here**.

If you want to actually transcribe audio, use the live app: **<https://earscribe.app>**.

## What's inside

```
app/[locale]/          Pages (layout, home, about) + JSON-LD
app/sitemap.ts         Multi-locale sitemap
app/robots.ts          robots.txt with AI bot policies
components/            Header, Footer, FAQ, SEO sections, Plausible
components/Transcriber UI placeholder (real worker is private)
lib/                   site URL, formatting, hreflang/canonical helpers
i18n/                  next-intl routing + locale config
messages/              Translation JSON (English shipped)
```

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS v4
- next-intl (single-locale shipped; add a JSON file to extend)
- Plausible analytics (production-only, opt-in via env vars)
- TypeScript strict mode

## Local dev

```bash
pnpm install        # or npm install / yarn
pnpm dev
# open http://localhost:3000
```

Type-check + lint + build:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Configuration

Copy `.env.example` to `.env.local` and adjust:

| Variable                            | Used for                            |
| ----------------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_SITE_URL`              | Canonical URLs, sitemap, OG tags    |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`      | Plausible site identifier (prod)    |
| `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL`  | Plausible script URL (prod)         |

## Adding a language

1. Append the new locale code to `locales` in `i18n/locale.ts`.
2. Drop `messages/<code>.json` next to `en.json`, translated.

That's it — routing, sitemap and metadata pick it up automatically.

## What's NOT here

To keep the inference stack private, the following modules from the production app are **omitted**:

- `workers/whisper.worker.ts` — Transformers.js / ONNX Runtime inference worker
- `lib/audio.ts`, `lib/subtitles.ts`, `lib/worker-protocol.ts`, `lib/models.ts`, `lib/cache.ts`, `lib/device.ts`
- `components/Transcriber.tsx`, `TranscriptViewer.tsx`, `Waveform.tsx`, `FileDropzone.tsx`, `ExportMenu.tsx`, `ProgressBar.tsx`, `ModelPicker.tsx`, `ModelCard.tsx`
- The Hugging Face model proxy worker

A visual placeholder (`components/Transcriber.tsx` in this repo) stands in for the real upload + transcription panel so the page still renders end-to-end.

## License

MIT — see [LICENSE](./LICENSE).

The live application at <https://earscribe.app> is built on top of open-source projects, especially [OpenAI Whisper](https://github.com/openai/whisper) and [Hugging Face Transformers.js](https://github.com/huggingface/transformers.js).
