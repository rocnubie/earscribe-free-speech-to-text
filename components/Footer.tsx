"use client";

import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { GITHUB_URL, SITE_NAME } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row">
        <div>
          <p className="font-semibold text-slate-900">{SITE_NAME}</p>
          <p className="text-xs">{t("tagline")}</p>
        </div>
        <nav className="flex items-center gap-5">
          <Link href="/about" className="hover:text-slate-900">
            {t("links.about")}
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            {t("links.github")}
          </a>
        </nav>
      </div>
      <div className="border-t border-slate-100 px-6 py-3 text-center text-xs text-slate-500">
        {t("builtWith")}
      </div>
    </footer>
  );
}
