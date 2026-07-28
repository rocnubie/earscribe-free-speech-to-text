import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { alternatesFor, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

const HOME_KEYWORDS: Record<string, string[]> = {
  en: ["free audio to text converter", "free unlimited audio to text", "audio to text no sign up", "browser audio transcription"],
  "zh-CN": ["音频转文字", "录音转文字", "音频转文字在线", "音频转文字免费"],
  ja: ["音声 文字起こし 無料", "音声文字起こし ブラウザ", "音声文字起こし 無制限", "登録不要"],
};

export async function buildHomeMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(getSiteUrl()),
    applicationName: "EarScribe",
    title: {
      default: t("title"),
      template: `%s — ${t("title")}`,
    },
    description: t("description"),
    keywords: HOME_KEYWORDS[locale] ?? [],
    alternates: alternatesFor(locale, ""),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: urlFor(locale),
      siteName: t("ogTitle"),
      images: [
        {
          url: `${getSiteUrl()}/screenshots/01-hero.webp`,
          width: 1280,
          height: 800,
          alt: t("ogTitle"),
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function buildAboutMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: { absolute: t("title") },
    description: t("intro"),
    keywords: ["EarScribe", "browser audio transcription", "local audio transcription"],
    alternates: alternatesFor(locale, "/about"),
    openGraph: {
      title: t("title"),
      description: t("intro"),
      type: "website",
      url: urlFor(locale, "/about"),
      images: [
        {
          url: `${getSiteUrl()}/screenshots/01-hero.webp`,
          width: 1280,
          height: 800,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("intro"),
    },
  };
}
