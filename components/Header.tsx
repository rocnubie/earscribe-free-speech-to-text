"use client";

import { Github, Mic } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { GITHUB_URL, SITE_NAME } from "@/lib/site";

export function Header() {
  const t = useTranslations("header");
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-slate-900"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Mic className="h-4 w-4" />
          </span>
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          <Link href="/about" className="hover:text-slate-900">
            {t("about")}
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-slate-900"
          >
            <Github className="h-4 w-4" />
            {t("github")}
          </a>
        </nav>
      </div>
    </header>
  );
}
