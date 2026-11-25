#!/usr/bin/env node
/**
 * Every page the sitemap advertises, scored against the standard the rewritten
 * pages now meet — so "rewrite everything" becomes a list with numbers instead
 * of an intention.
 *
 * Read-only: it parses `out/` and prints (optionally writes JSON). Nothing here
 * decides anything; the buckets at the bottom are what to act on.
 *
 * Usage:
 *   node scripts/seo/content-audit.mjs
 *   node scripts/seo/content-audit.mjs --json artifacts/seo/content-audit.json
 *   node scripts/seo/content-audit.mjs --locale ja
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { countQuantities, extractArticle, metaOf, normaliseText, stripTags } from "./lib/html.mjs";

const ROOT = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const OUT = join(ROOT, "out");
const args = process.argv.slice(2);
const jsonOut = args.includes("--json") ? args[args.indexOf("--json") + 1] : null;
const onlyLocale = args.includes("--locale") ? args[args.indexOf("--locale") + 1] : null;
// --summary keeps the headline numbers and drops the 109-row table, so the check
// can sit inside seo:check without burying the other audits in output.
const quiet = args.includes("--summary");

const TOOL_LOCALES = ["en", "zh-CN", "ja"];
const STATIC = new Set(["/", "/about", "/contact", "/privacy", "/terms", "/changelog", "/feedback"]);
// Pages whose tool is "paste a file, get another file" carry almost no numbers:
// their subject is syntax. Judging them at the prose bar (20 per 1k) would force
// padding, so they get their own floor and it is written down.
const CONVERTER_SLUGS = new Set(["srt-to-vtt", "srt-to-txt"]);
// 20 for prose pages, 10 for the two converter pages (their subject is syntax).
// A floor of 15 was tried and reverted: it was chosen on the day it was changed,
// which makes the number look like it was fitted to the pages rather than to the
// work. 20 is the bar the rewritten tool pages were actually held to.
const DENSITY_FLOOR = (slug) => (CONVERTER_SLUGS.has(slug) ? 10 : 20);

const localeOf = (path) => {
  const first = path.split("/").filter(Boolean)[0] ?? "";
  return /^[a-z]{2}(-[A-Z]{2}|-[a-z]{2})?$/.test(first) ? first : "en";
};

const fileFor = (path) => {
  const clean = path.replace(/^\/|\/$/g, "");
  if (!clean) return join(OUT, "index.html");
  for (const candidate of [join(OUT, `${clean}.html`), join(OUT, clean, "index.html")]) {
    if (existsSync(candidate)) return candidate;
  }
  return null;
};

const mainOf = (html) => /<main[^>]*>([\s\S]*)<\/main>/i.exec(html)?.[1] ?? "";

/**
 * Whitespace tokens only work for Latin text. Japanese and Chinese write without
 * spaces, so a 1,300-character article scores "one word" — count CJK characters
 * at roughly two per word instead.
 */
const wordCount = (text) => {
  const cjk = (text.match(/[\u3040-\u30ff\u3400-\u9fff\uac00-\ud7af]/g) ?? []).length;
  const latin = (text.match(/[A-Za-z0-9][A-Za-z0-9'\u2019-]*/g) ?? []).length;
  return latin + Math.round(cjk / 2);
};
const h1Of = (html) => stripTags(/<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1] ?? "");
const h2sOf = (html) =>
  [...mainOf(html).matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((match) => stripTags(match[1]).trim());

// The tool slug list is the only honest definition of "tool page"; locale home
// pages and privacy pages are not tools and must not be scored as one.
const TOOL_SLUGS = [...readFileSync(join(ROOT, "lib/site-routes.ts"), "utf8")
  .slice(0, readFileSync(join(ROOT, "lib/site-routes.ts"), "utf8").indexOf("TOOL_UPDATED"))
  .matchAll(/"([a-z0-9-]+)"/g)].map((match) => match[1]).filter((slug) => slug.includes("-"));

const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  new URL(match[1]).pathname.replace(/\/$/, "") || "/",
);

const pages = [];
for (const path of urls) {
  const file = fileFor(path);
  if (!file) continue;
  const locale = localeOf(path);
  if (onlyLocale && locale !== onlyLocale) continue;
  const html = readFileSync(file, "utf8");
  const main = mainOf(html);
  const text = stripTags(main);
  const words = wordCount(text);
  const h2s = h2sOf(html);
  const h1 = h1Of(html);
  const meta = metaOf(html);

  // Tool pages publish their primary keyword as the first <meta name="keywords">
  // entry; that is the only place the built page states what it is for.
  const declared = (html.match(/name="keywords" content="([^"]*)"/i)?.[1] ?? "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)[0];
  const slug = path.split("/").filter(Boolean).pop() ?? "";
  const keyword = declared || slug.replace(/-/g, " ");

  const quantities = countQuantities(text, main);
  const kind = STATIC.has(path) || /^\/[a-z]{2}(-[A-Z]{2})?$/.test(path) || path.endsWith("/privacy")
    ? "static"
    : path.includes("/guides")
      ? "guide"
      : TOOL_SLUGS.includes(slug) && TOOL_LOCALES.includes(locale)
        ? "tool"
        : "static";

  pages.push({
    path,
    locale,
    kind,
    words,
    per1k: words ? Math.round((quantities / words) * 1000) : 0,
    quantities,
    tables: (main.match(/<table/gi) ?? []).length,
    images: (main.match(/<img/gi) ?? []).length,
    h2: h2s.length,
    keyword,
    // Whitespace carries no meaning in CJK headlines: "WAV 转文字" and the
    // keyword "wav转文字" are the same phrase, and "@media" spacing is typography,
    // not a different word. Comparing with spaces removed keeps English intact
    // ("mp3 to text" still matches) while letting zh-CN and ja pages pass.
    h1HasKeyword: squashSpace(h1).includes(squashSpace(keyword)),
    h2HasKeyword: h2s.some((heading) => squashSpace(heading).includes(squashSpace(keyword))),
    h2s,
  });
}

// Template share: how many of a page's H2s also appear on other pages in the same
// locale. A page written from a shared skeleton scores near 1; a page written for
// its own question scores near 0.
// "Questions about this workflow" and "Related audio tools" are rendered by the
// template on every page, so counting them as shared structure reports a floor
// of two headings regardless of what was written.
const TEMPLATE_HEADINGS = new Set(["questions about this workflow", "related audio tools"]);
const normaliseHeading = (heading) => normaliseText(heading);

/**
 * `normaliseText` with the spaces squeezed out.
 *
 * "WAV 转文字" (a headline with typographic spacing) and the stored keyword
 * "wav转文字" are the same phrase; comparing them with normaliseText fails on
 * the space alone, which made every zh-CN and ja page look like it never put its
 * keyword in a heading. English is unaffected — "mp3 to text" still matches
 * itself after both sides lose their spaces.
 */
function squashSpace(text) {
  return normaliseText(text).replace(/\s+/g, "");
}
const isContent = (heading) => !TEMPLATE_HEADINGS.has(normaliseHeading(heading));
for (const page of pages) {
  const siblings = pages.filter((other) => other !== page && other.locale === page.locale && other.kind === page.kind);
  if (!siblings.length || !page.h2s.length) {
    page.templateShare = 0;
    continue;
  }
  const shapes = siblings.flatMap((sibling) => sibling.h2s.map(normaliseHeading));
  const content = page.h2s.filter(isContent);
  const shared = content.filter((heading) => shapes.includes(normaliseHeading(heading))).length;
  page.templateShare = content.length ? shared / content.length : 0;
}

const fmt = (value) => (Number.isFinite(value) ? value.toFixed(2) : "—");
const rows = pages.sort((a, b) => b.words - a.words);

if (!quiet) console.log("path".padEnd(46), "lang".padEnd(6), "kind".padEnd(7), "words".padStart(6), "q/1k".padStart(5), "tab".padStart(4), "img".padStart(4), "h2kw".padStart(5), "clone".padStart(6));
for (const row of quiet ? [] : rows) {
  console.log(
    row.path.padEnd(46),
    row.locale.padEnd(6),
    row.kind.padEnd(7),
    String(row.words).padStart(6),
    String(row.per1k).padStart(5),
    String(row.tables).padStart(4),
    String(row.images).padStart(4),
    (row.h2HasKeyword ? "yes" : "no").padStart(5),
    fmt(row.templateShare).padStart(6),
  );
}

// The three buckets that decide what to rewrite and what to reshape.
const toolPages = pages.filter((page) => page.kind === "tool");
const ok = (page) => page.h2HasKeyword && page.per1k >= DENSITY_FLOOR(page.path.split("/").pop());
const offStandard = toolPages.filter((page) => !ok(page));
const cloneHeavy = toolPages.filter((page) => page.templateShare > 0.3);
const rewritten = toolPages.filter((page) => page.templateShare <= 0.3 && ok(page));

console.log(`\n工具页 ${toolPages.length} 个（en ${toolPages.filter((p) => p.locale === "en").length} / zh-CN ${toolPages.filter((p) => p.locale === "zh-CN").length} / ja ${toolPages.filter((p) => p.locale === "ja").length}）`);
console.log(`  已达标（per1k ≥ 20 且 H2 含主词）：${rewritten.length}  → ${rewritten.map((p) => p.locale + ":" + p.path).join(", ") || "—"}`);
console.log(`  不达标：${offStandard.length}`);
console.log(`  模板痕迹 > 30%：${cloneHeavy.length}`);
const byLocale = {};
for (const page of toolPages) {
  byLocale[page.locale] ??= { total: 0, ok: 0 };
  byLocale[page.locale].total += 1;
  if (ok(page)) byLocale[page.locale].ok += 1;
}
for (const [locale, stat] of Object.entries(byLocale)) console.log(`  ${locale.padEnd(6)} ${stat.ok}/${stat.total} 达标`);

if (jsonOut) {
  mkdirSync(dirname(jsonOut), { recursive: true });
  writeFileSync(jsonOut, JSON.stringify(pages.map(({ h2s, ...rest }) => rest), null, 2));
  console.log(`\nwrote ${jsonOut}`);
}
