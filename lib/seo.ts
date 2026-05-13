import { defaultLocale, locales, type Locale } from "@/i18n/locale";

import { getSiteUrl } from "./site";

/** Build an absolute URL for a given locale + path. */
export function urlFor(locale: string, path = ""): string {
  const base = getSiteUrl();
  const normalized = path && !path.startsWith("/") ? `/${path}` : path;
  if (locale === defaultLocale) {
    return `${base}${normalized}`;
  }
  return `${base}/${locale}${normalized}`;
}

/** Build `alternates` for Next metadata: canonical + hreflang + x-default. */
export function alternatesFor(
  locale: string,
  path = "",
): { canonical: string; languages: Record<string, string> } {
  const languages = locales.reduce(
    (acc, loc) => {
      acc[loc] = urlFor(loc, path);
      return acc;
    },
    {} as Record<string, string>,
  );
  languages["x-default"] = urlFor(defaultLocale, path);
  return {
    canonical: urlFor(locale, path),
    languages,
  };
}

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
