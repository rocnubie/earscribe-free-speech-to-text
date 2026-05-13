"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section
      className="mx-auto max-w-3xl space-y-4"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-2xl font-semibold tracking-tight text-slate-900"
      >
        {t("title")}
      </h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-xl border border-slate-200 bg-white p-4 open:border-slate-300"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 text-sm font-medium text-slate-900">
              <span>{item.q}</span>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
