"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";

import { localeNames, locales } from "@/i18n/locale";
import { usePathname, useRouter } from "@/i18n/routing";
import { Events, track } from "@/lib/plausible";
import { getLocaleSwitchDestination } from "@/lib/site-navigation";

export function LocaleSwitcher({
  dropUp = false,
  compactOnMobile = false,
}: {
  dropUp?: boolean;
  compactOnMobile?: boolean;
}) {
  const locale = useLocale();
  const t = useTranslations("navigation");
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
      const destination = getLocaleSwitchDestination(pathname, next);
      track(Events.LocaleChanged, {
        from: locale,
        to: next,
        fallback: destination !== pathname,
      });
      router.replace(destination, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        aria-label={t("switchLanguage")}
        className="inline-flex min-h-9 items-center gap-1.5 rounded-md px-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50"
      >
        <Globe className="h-4 w-4 shrink-0" />
        <span className={compactOnMobile ? "hidden sm:inline" : undefined}>
          {localeNames[locale as keyof typeof localeNames] ?? locale}
        </span>
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
              className={`block w-full px-3 py-1.5 text-start text-sm hover:bg-slate-50 ${
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
