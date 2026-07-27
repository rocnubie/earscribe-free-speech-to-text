"use client";

import { Mic } from "lucide-react";

import { Link } from "@/i18n/routing";
import { SITE_NAME } from "@/lib/site";

import { LocaleSwitcher } from "./LocaleSwitcher";

export function Header() {
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
        <LocaleSwitcher />
      </div>
    </header>
  );
}
