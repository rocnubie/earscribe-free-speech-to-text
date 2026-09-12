import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { PrivacyPageBody } from "@/components/pages/PrivacyPageBody";
import { defaultLocale, locales } from "@/i18n/locale";
import { getPrivacyCopy } from "@/lib/privacy-content";
import { PRIVACY_LOCALES } from "@/lib/site-routes";
import { alternatesForLocales, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export function generateStaticParams() {
  return PRIVACY_LOCALES.filter((locale) => locale !== defaultLocale).map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = getPrivacyCopy(locale);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: alternatesForLocales(locale, "/privacy", PRIVACY_LOCALES),
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      url: urlFor(locale, "/privacy"),
      images: [{ url: `${getSiteUrl()}/screenshots/04-features.webp`, width: 1280, height: 800 }],
    },
    twitter: { card: "summary", title: copy.title, description: copy.description },
  };
}

export default async function LocalizedPrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (
    locale === defaultLocale ||
    !(locales as readonly string[]).includes(locale) ||
    !PRIVACY_LOCALES.includes(locale as (typeof PRIVACY_LOCALES)[number])
  ) notFound();
  setRequestLocale(locale);
  return <PrivacyPageBody locale={locale} />;
}
