import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { alternatesFor, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

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
    alternates: alternatesFor(locale, ""),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: urlFor(locale),
      siteName: t("ogTitle"),
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
    alternates: alternatesFor(locale, "/about"),
    openGraph: {
      title: t("title"),
      description: t("intro"),
      type: "website",
      url: urlFor(locale, "/about"),
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("intro"),
    },
  };
}
