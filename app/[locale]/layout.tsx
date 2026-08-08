import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { GoogleAdSenseScript } from "@/components/GoogleAdSense";
import { PlausibleScript } from "@/components/Plausible";
import { defaultLocale, locales, type Locale } from "@/i18n/locale";
import { buildHomeMetadata } from "@/lib/seo/root-metadata";

import "../globals.css";

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildHomeMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (
    locale === defaultLocale ||
    !(locales as readonly string[]).includes(locale)
  ) {
    notFound();
  }
  setRequestLocale(locale);
  const effectiveLocale = locale as Locale;
  const messages = await getMessages({ locale: effectiveLocale });

  const dir = ["ar", "fa", "ur"].includes(effectiveLocale) ? "rtl" : "ltr";

  return (
    <html lang={effectiveLocale} dir={dir} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <GoogleAdSenseScript />
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
