"use client";

import { ArrowRight, Mic } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";
import {
  getNavigationTarget,
  getTranscriberNavigationTarget,
  HEADER_PRODUCT_NAVIGATION,
} from "@/lib/site-navigation";

import { LocaleSwitcher } from "./LocaleSwitcher";
import { TrackedNavigationLink } from "./TrackedNavigationLink";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navigation");
  const productItems = HEADER_PRODUCT_NAVIGATION.map((item) => ({
    ...item,
    target: getNavigationTarget(item.id, locale),
  })).filter((item) => item.target.available);
  const transcriberTarget = getTranscriberNavigationTarget(pathname);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2 font-semibold text-slate-900"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Mic className="h-4 w-4" />
          </span>
          {SITE_NAME}
        </Link>

        {productItems.length > 0 && (
          <nav
            aria-label={t("productLinks")}
            className="ms-auto hidden items-center gap-1 lg:flex"
          >
            {productItems.map((item) => (
              <TrackedNavigationLink
                key={item.id}
                navigationTarget={item.target}
                surface="header"
                targetId={item.id}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
              >
                {t(item.id)}
              </TrackedNavigationLink>
            ))}
          </nav>
        )}

        <div
          className={
            productItems.length > 0
              ? "ms-auto flex items-center gap-2 lg:ms-3"
              : "ms-auto flex items-center gap-2"
          }
        >
          <TrackedNavigationLink
            navigationTarget={transcriberTarget}
            surface="header"
            targetId="startFree"
            aria-label={t("startFree")}
            className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg bg-sky-600 px-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500 sm:px-4"
          >
            <span aria-hidden="true" className="hidden sm:inline">
              {t("startFree")}
            </span>
            <span aria-hidden="true" className="sm:hidden">
              {t("startFreeShort")}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </TrackedNavigationLink>
          <LocaleSwitcher compactOnMobile />
        </div>
      </div>
    </header>
  );
}
