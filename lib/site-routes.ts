export const TOOL_SLUGS = [
  "audio-to-text",
  "mp3-to-text",
  "audio-to-srt",
  "interview-transcription",
  "lecture-transcription",
  "m4a-to-text",
  "wav-to-text",
  "voice-memo-to-text",
  "podcast-transcription",
  "meeting-recording-to-text",
  "whisper-online",
  "transcribe-audio-locally",
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
