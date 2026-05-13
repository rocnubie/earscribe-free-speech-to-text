import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { PlausibleScript } from "@/components/Plausible";
import { defaultLocale, locales, type Locale } from "@/i18n/locale";
import { alternatesFor } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

import "../globals.css";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
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
      url: getSiteUrl(),
      siteName: t("ogTitle"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const effectiveLocale: Locale = (locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : defaultLocale;
  const messages = await getMessages({ locale: effectiveLocale });

  return (
    <html lang={effectiveLocale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <PlausibleScript />
      </head>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages} locale={effectiveLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
