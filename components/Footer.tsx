"use client";

import { Github, Mic } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { defaultLocale } from "@/i18n/locale";
import { GITHUB_URL, SITE_NAME } from "@/lib/site";
import { PRIVACY_LOCALES } from "@/lib/privacy-content";

import { LocaleSwitcher } from "./LocaleSwitcher";

export function Footer() {
  const t = useTranslations("footer");
  const tJobs = useTranslations("seo.whatYouCanDo");
  const locale = useLocale();
  const jobs = tJobs.raw("jobs") as { label: string }[];
  const hasToolPages = ["en", "zh-CN", "ja"].includes(locale);
  const privacyLocale = PRIVACY_LOCALES.includes(
    locale as (typeof PRIVACY_LOCALES)[number],
  )
    ? locale
    : defaultLocale;
  const privacyHref =
    privacyLocale === defaultLocale
      ? "/privacy"
      : `/${privacyLocale}/privacy`;
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Mic className="h-4 w-4" />
          </span>
          <div>
            <p className="font-semibold text-slate-900">{SITE_NAME}</p>
            <p className="text-xs">{t("tagline")}</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {hasToolPages && (
            <>
              <Link href="/mp3-to-text" className="hover:text-slate-900">
                {jobs[0]?.label}
              </Link>
              <Link href="/audio-to-srt" className="hover:text-slate-900">
                {jobs[3]?.label}
              </Link>
            </>
          )}
          <a href={privacyHref} className="hover:text-slate-900">
            {t("links.privacy")}
          </a>
          <Link href="/about" className="hover:text-slate-900">
            {t("links.about")}
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-slate-900"
          >
            <Github className="h-4 w-4" />
            {t("links.github")}
          </a>
          <LocaleSwitcher dropUp />
        </nav>
      </div>
      <div className="border-t border-slate-100 px-6 py-3 text-center text-xs text-slate-500">
        {t("builtWith")}
      </div>
    </footer>
  );
}
