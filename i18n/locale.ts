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
} as const;

export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeNames = Object.fromEntries(
  locales.map((l) => [l, ALL_LOCALE_NAMES[l as keyof typeof ALL_LOCALE_NAMES] ?? l]),
) as Record<Locale, string>;

export const localePrefix: "as-needed" | "never" =
  locales.length === 1 ? "never" : "as-needed";

export const localeDetection =
  process.env.NEXT_PUBLIC_LOCALE_DETECTION === "true";
