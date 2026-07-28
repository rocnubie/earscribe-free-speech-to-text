export const TOOL_SLUGS = [
  "audio-to-text",
  "mp3-to-text",
  "audio-to-srt",
  "interview-transcription",
  "lecture-transcription",
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

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
