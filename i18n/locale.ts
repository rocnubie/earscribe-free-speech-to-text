/**
 * Single source of truth for locales.
 *
 * To add a language later: append the code below, drop a matching
 * `messages/<code>.json` file, done. `localePrefix` auto-switches from
 * `never` to `as-needed` when more than one locale is active.
 */
const ALL_LOCALE_NAMES = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  ja: "日本語",
  ko: "한국어",
  "pt-br": "Português (Brasil)",
  ru: "Русский",
  hi: "हिन्दी",
  ar: "العربية",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  it: "Italiano",
  pl: "Polski",
  nl: "Nederlands",
  uk: "Українська",
  th: "ภาษาไทย",
  fa: "فارسی",
  bn: "বাংলা",
  ur: "اردو",
  sv: "Svenska",
  nb: "Norsk (bokmål)",
  da: "Dansk",
  fi: "Suomi",
} as const;

export const locales = [
  "en", "es", "de", "fr", "pt-br", "ru", "ja", "ko", "hi", "ar",
  "zh-CN", "zh-TW", "id", "tr", "vi", "it", "pl", "nl", "uk", "th",
  "fa", "bn", "ur", "sv", "nb", "da", "fi",
] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeNames = Object.fromEntries(
  locales.map((l) => [l, ALL_LOCALE_NAMES[l as keyof typeof ALL_LOCALE_NAMES] ?? l]),
) as Record<Locale, string>;

export const localePrefix: "as-needed" | "never" = "as-needed";

export const localeDetection =
  process.env.NEXT_PUBLIC_LOCALE_DETECTION === "true";
