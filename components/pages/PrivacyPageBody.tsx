import { Database, HardDriveDownload, ShieldCheck } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPrivacyCopy } from "@/lib/privacy-content";

const icons = [ShieldCheck, HardDriveDownload, Database, ShieldCheck];

export function PrivacyPageBody({ locale }: { locale: string }) {
  const copy = getPrivacyCopy(locale);
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <p className="text-sm font-medium text-sky-700">{copy.updated}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {copy.intro}
        </p>
        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {copy.sections.map((section, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <section key={section.title} className="grid gap-5 py-9 sm:grid-cols-[3rem_1fr]">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
