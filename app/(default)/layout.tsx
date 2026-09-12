import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { GoogleAdSenseScript } from "@/components/GoogleAdSense";
import { PlausibleScript } from "@/components/Plausible";
import { defaultLocale } from "@/i18n/locale";
import { buildHomeMetadata } from "@/lib/seo/root-metadata";

import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return buildHomeMetadata(defaultLocale);
}

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale(defaultLocale);
  const messages = await getMessages({ locale: defaultLocale });

  return (
    <html lang={defaultLocale} dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <GoogleAdSenseScript locale={defaultLocale} />
        <PlausibleScript />
      </head>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages} locale={defaultLocale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
