import { setRequestLocale } from "next-intl/server";

import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoSections } from "@/components/SeoSections";
import { Transcriber } from "@/components/Transcriber";
import { locales } from "@/i18n/locale";

import { JsonLd } from "./jsonld";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main
        id="top"
        className="mx-auto max-w-6xl px-6 py-10 sm:py-16"
      >
        <Transcriber />
        <div className="mt-24 sm:mt-32">
          <SeoSections />
        </div>
        <div className="mt-24 sm:mt-32">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
