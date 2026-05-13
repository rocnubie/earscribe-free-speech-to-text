import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { alternatesFor } from "@/lib/seo";

export async function generateStaticParams() {
  const { locales } = await import("@/i18n/locale");
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: alternatesFor(locale, "/about"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t("title")}
        </h1>
        <div className="mt-6 space-y-4 text-slate-700">
          <p className="text-lg">{t("intro")}</p>
          <p>{t("noServer")}</p>
          <p>{t("credits")}</p>
        </div>
        <div className="mt-16">
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
