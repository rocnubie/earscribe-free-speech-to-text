"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";

import { localeNames, locales } from "@/i18n/locale";
import { usePathname, useRouter } from "@/i18n/routing";
import { PRIVACY_LOCALES } from "@/lib/privacy-content";
import { TOOL_LOCALES, TOOL_SLUGS } from "@/lib/tool-pages";

const switcherLabels: Record<string, string> = {
  en: "Switch language",
  "zh-CN": "切换语言",
  ja: "言語を切り替える",
  fr: "Changer de langue",
  es: "Cambiar idioma",
  ko: "언어 변경",
};

export function LocaleSwitcher({ dropUp = false }: { dropUp?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function switchLocale(next: string) {
    setOpen(false);
    startTransition(() => {
      const isToolPage = TOOL_SLUGS.some((slug) => pathname === `/${slug}`);
      const isPrivacyPage = pathname === "/privacy";
      const destination =
        isToolPage && !TOOL_LOCALES.includes(next as (typeof TOOL_LOCALES)[number])
          ? "/"
          : isPrivacyPage &&
              !PRIVACY_LOCALES.includes(
                next as (typeof PRIVACY_LOCALES)[number],
              )
            ? "/"
          : pathname;
      router.replace(destination, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-label={switcherLabels[locale] ?? switcherLabels.en}
        className="inline-flex items-center gap-1.5 rounded px-1 py-0.5 text-sm text-slate-600 hover:text-slate-900 disabled:opacity-50"
      >
        <Globe className="h-4 w-4 shrink-0" />
        <span>{localeNames[locale as keyof typeof localeNames] ?? locale}</span>
      </button>
      {open && (
        <div
          className={`absolute end-0 z-50 min-w-[160px] overflow-y-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg ${
            dropUp ? "bottom-full mb-1 max-h-72" : "top-full mt-1 max-h-72"
          }`}
        >
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`block w-full px-3 py-1.5 text-left text-sm hover:bg-slate-50 ${
                l === locale ? "font-semibold text-slate-900" : "text-slate-600"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
