import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PrivacyPageBody } from "@/components/pages/PrivacyPageBody";
import { defaultLocale } from "@/i18n/locale";
import { getPrivacyCopy } from "@/lib/privacy-content";
import { PRIVACY_LOCALES } from "@/lib/site-routes";
import { alternatesForLocales, urlFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

export function generateMetadata(): Metadata {
  const copy = getPrivacyCopy(defaultLocale);
  return {
    title: { absolute: copy.title },
    description: copy.description,
    alternates: alternatesForLocales(defaultLocale, "/privacy", PRIVACY_LOCALES),
    robots: { index: false, follow: true },
    openGraph: {
      title: copy.title,
      description: copy.description,
      type: "website",
      url: urlFor(defaultLocale, "/privacy"),
      images: [{ url: `${getSiteUrl()}/screenshots/04-features.webp`, width: 1280, height: 800 }],
    },
    twitter: { card: "summary", title: copy.title, description: copy.description },
  };
}

export default function PrivacyPage() {
  setRequestLocale(defaultLocale);
  return <PrivacyPageBody locale={defaultLocale} />;
}
