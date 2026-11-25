export const TOOL_SLUGS = [
  "audio-to-text",
  "mp3-to-text",
  "audio-to-srt",
  "interview-transcription",
  "m4a-to-text",
  "wav-to-text",
  "voice-memo-to-text",
  "podcast-transcription",
  "meeting-recording-to-text",
  "whisper-online",
  "transcribe-audio-locally",
  "srt-to-vtt",
  "srt-to-txt",
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

/**
 * When each tool page's *content* last changed, for `sitemap.xml`.
 *
 * A single site-wide date would tell Google that a page written on 12 September
 * was last touched in July, and a `lastmod` that never moves is a `lastmod`
 * Google learns to ignore. Only move a date here when the copy on the page
 * changed — shared template work does not count.
 */
export const TOOL_UPDATED: Record<ToolSlug, string> = {
  "audio-to-text": "2026-11-24",
  "mp3-to-text": "2026-11-25",
  "audio-to-srt": "2026-11-24",
  "interview-transcription": "2026-11-24",
  "m4a-to-text": "2026-11-24",
  "wav-to-text": "2026-11-25",
  "voice-memo-to-text": "2026-11-24",
  "podcast-transcription": "2026-11-24",
  "meeting-recording-to-text": "2026-11-24",
  "whisper-online": "2026-11-18",
  "transcribe-audio-locally": "2026-11-24",
  "srt-to-vtt": "2026-11-24",
  "srt-to-txt": "2026-11-24",
};

/**
 * Per-locale lastmod for tool pages.
 *
 * `TOOL_UPDATED` is keyed by slug, so editing the English copy bumped the
 * `<lastmod>` of the ja and zh-CN versions too — 26 dates that claimed an
 * update the page never had. A sitemap whose dates move without the body is a
 * sitemap Google learns to ignore, so the locale version is explicit here and
 * everything not listed falls back to the date the translations were written.
 */
export const TOOL_LOCALE_UPDATED: Partial<Record<string, string>> = {
  "audio-to-text:ja": "2026-11-25",
  "audio-to-text:zh-CN": "2026-11-25",
  "mp3-to-text:ja": "2026-11-25",
  "mp3-to-text:zh-CN": "2026-11-25",
  "audio-to-srt:ja": "2026-11-25",
  "audio-to-srt:zh-CN": "2026-11-25",
  "interview-transcription:ja": "2026-11-25",
  "interview-transcription:zh-CN": "2026-11-25",
  "m4a-to-text:ja": "2026-11-25",
  "m4a-to-text:zh-CN": "2026-11-25",
  "wav-to-text:ja": "2026-11-25",
  "wav-to-text:zh-CN": "2026-11-25",
  "voice-memo-to-text:ja": "2026-11-25",
  "voice-memo-to-text:zh-CN": "2026-11-25",
  "podcast-transcription:ja": "2026-11-25",
  "podcast-transcription:zh-CN": "2026-11-25",
  "meeting-recording-to-text:ja": "2026-11-25",
  "meeting-recording-to-text:zh-CN": "2026-11-25",
  "whisper-online:ja": "2026-11-25",
  "whisper-online:zh-CN": "2026-11-25",
  "transcribe-audio-locally:ja": "2026-11-25",
  "transcribe-audio-locally:zh-CN": "2026-11-25",
  "srt-to-vtt:ja": "2026-11-25",
  "srt-to-vtt:zh-CN": "2026-11-25",
  "srt-to-txt:ja": "2026-11-25",
  "srt-to-txt:zh-CN": "2026-11-25",
};
/** When the non-English tool copy was last actually edited. */
const TOOL_LOCALE_BASELINE = "2026-09-12";

export const toolUpdatedAt = (slug: ToolSlug, locale: ToolLocale): string =>
  locale === "en"
    ? TOOL_UPDATED[slug]
    : (TOOL_LOCALE_UPDATED[`${slug}:${locale}`] ?? TOOL_LOCALE_BASELINE);

export const TOOL_LOCALES = ["en", "zh-CN", "ja"] as const;
export type ToolLocale = (typeof TOOL_LOCALES)[number];

export const PRIVACY_LOCALES = [
  "en",
  "zh-CN",
  "ja",
  "fr",
  "es",
  "ko",
] as const;
export type PrivacyLocale = (typeof PRIVACY_LOCALES)[number];
