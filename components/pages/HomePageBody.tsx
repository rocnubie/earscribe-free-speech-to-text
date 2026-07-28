import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SeoSections } from "@/components/SeoSections";
import { Transcriber } from "@/components/Transcriber";

import { JsonLd } from "./HomeJsonLd";

export async function HomePageBody({ locale }: { locale: string }) {
  return (
    <>
      <JsonLd locale={locale} />
      <Header />
      <main id="transcribe" className="mx-auto max-w-6xl scroll-mt-4 px-6 py-10 sm:py-16">
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
