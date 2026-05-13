import { getTranslations } from "next-intl/server";

import { locales } from "@/i18n/locale";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

export async function JsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "meta" });
  const tFaq = await getTranslations({ locale, namespace: "faq" });
  const url = getSiteUrl();

  const items = tFaq.raw("items") as { q: string; a: string }[];

  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    alternateName: ["Ear Scribe", "EarScribe Whisper", "Browser Whisper Transcription"],
    description: t("description"),
    url,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Speech Recognition",
    operatingSystem: "Web",
    browserRequirements: "Requires WebAssembly. WebGPU recommended for Whisper Turbo.",
    inLanguage: locales as readonly string[],
    featureList: [
      "Audio to text transcription",
      "Speech to text in 99 languages",
      "SRT subtitle export",
      "VTT subtitle export",
      "Plain text and JSON export",
      "Runs entirely in the browser (WebGPU / WebAssembly)",
      "No upload, no account, no API key",
      "OpenAI Whisper (Tiny, Base, Small, Large v3 Turbo)",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
