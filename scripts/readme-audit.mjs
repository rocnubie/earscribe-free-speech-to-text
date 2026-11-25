/**
 * README audit.
 *
 * Nine translated READMEs drifted for half a year while the product moved: they
 * still said video needed an external converter, quoted 800 MB for a 3.24 GB
 * model, and offered 10 interface languages when 27 were shipped. Nobody
 * noticed because nothing compared the files to anything.
 *
 * These checks tie the READMEs to the code instead of to each other:
 *
 *   1. model download sizes come from `lib/models.ts` — change a weight file
 *      and the README fails until it says the new number;
 *   2. every `earscribe.app/<slug>` link must be a published tool page, a guide
 *      or a page in `SITE_PAGES`, so a deleted route cannot linger in the docs;
 *   3. every locale in `i18n/locale.ts` must appear in the language table;
 *   4. the eight translations must have the same section count, the same FAQ
 *      count and the same link set as English, so a paragraph cannot silently
 *      go missing in one language;
 *   5. a list of phrases that were factually wrong stays wrong.
 *
 * Usage: node scripts/readme-audit.mjs
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HERE);

/**
 * Every README that ships. `""` is the English source; the rest must match it
 * structurally. Right-to-left locales (fa, ar, ur) are deliberately absent:
 * GitHub does not parse Markdown tables inside a `dir="rtl"` wrapper, so those
 * READMEs would cost twice as much and look worse.
 */
export const README_SUFFIXES = [
  "",
  ".zh-CN",
  ".zh-TW",
  ".ja",
  ".ko",
  ".es",
  ".pt-BR",
  ".fr",
  ".de",
  ".it",
  ".nl",
  ".pl",
  ".ru",
  ".uk",
  ".sv",
  ".nb",
  ".da",
  ".fi",
  ".id",
  ".tr",
  ".vi",
  ".th",
  ".hi",
  ".bn",
];

/** Marketing pages that are not tool slugs but are legitimate link targets. */
const SITE_PAGES = new Set([
  "about",
  "changelog",
  "contact",
  "feedback",
  "guides",
  "privacy",
  "terms",
]);

/** Static files served from `public/`, not routes. */
const ASSET_PREFIXES = new Set(["screenshots", "icons", "favicon.svg", "ads.txt"]);

/**
 * Claims that were wrong in the previous revision. Keeping the list explicit
 * means the next rewrite cannot quietly reintroduce them.
 */
const BANNED = [
  { pattern: /lecture-transcription/, why: "the page was deleted; README must not advertise it" },
  { pattern: /installable PWA/i, why: "the app is installable since 2026-11-19" },
  { pattern: /10 (UI )?languages?/i, why: "27 interface locales ship" },
  { pattern: /Not directly\./, why: "video is accepted directly, the audio track is extracted locally" },
  { pattern: /extract the audio first/i, why: "no external step is needed for video" },
  { pattern: /and 80 more/, why: "99 spoken languages; 26 named leaves 73" },
  { pattern: /<your-org>/, why: "the repository URL is known" },
  { pattern: /Offline after first run/i, why: "the page still needs the network; only weights are cached" },
  { pattern: /Media workbench prototype/i, why: "the workspace shipped; there is no prototype section" },
];

function read(root, path) {
  return readFileSync(join(root, path), "utf8");
}

/** `{ id, wasm, webgpu }` per model, straight from the source of truth. */
export function modelSizes(root = ROOT) {
  const source = read(root, "lib/models.ts");
  const block = source.match(/export const MODELS[^=]*=\s*\[([\s\S]*?)\n\];/);
  const body = block ? block[1] : source;
  return [...body.matchAll(/id:\s*"([a-z0-9]+)"[\s\S]{0,400}?sizeMB:\s*\{\s*wasm:\s*(\d+),\s*webgpu:\s*(\d+)/g)]
    .map(([, id, wasm, webgpu]) => ({ id, wasm: Number(wasm), webgpu: Number(webgpu) }));
}

export function toolSlugs(root = ROOT) {
  const source = read(root, "lib/site-routes.ts");
  const block = source.match(/export const TOOL_SLUGS = \[([\s\S]*?)\] as const/);
  return [...(block?.[1] ?? "").matchAll(/"([^"]+)"/g)].map(([, slug]) => slug);
}

export function interfaceLocales(root = ROOT) {
  const source = read(root, "i18n/locale.ts");
  const block = source.match(/const ALL_LOCALE_NAMES = \{([\s\S]*?)\} as const/);
  return [...(block?.[1] ?? "").matchAll(/^\s*"?([a-zA-Z-]+)"?:/gm)].map(([, code]) => code);
}

export function guideSlugs(root = ROOT) {
  const dir = join(root, "content/guides");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.slice(0, -".tsx".length));
}

/** Every size written in the file, normalised to MB. */
function mentionedMegabytes(text) {
  const values = [];
  for (const [, number, unit] of text.matchAll(/(\d+(?:[.,]\d+)?)\s*(MB|GB|GiB)\b/gi)) {
    const value = Number(number.replace(",", "."));
    const factor = unit.toUpperCase() === "MB" ? 1 : unit.toUpperCase() === "GB" ? 1000 : 1024;
    values.push(value * factor);
  }
  return values;
}

/** Absolute `earscribe.app` paths, de-duplicated, locale prefixes kept. */
function advertisedPaths(text) {
  const paths = new Set();
  for (const [, href] of text.matchAll(/https:\/\/earscribe\.app(\/[^\s)"'<>]*)?/g)) {
    paths.add((href ?? "/").replace(/[.,;:]$/, ""));
  }
  return paths;
}

/** Returns the part of a link that cannot be resolved, or null when it can. */
export function unresolvablePath(path, { slugs, locales, guides }) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;
  let [first, second] = segments;
  if (ASSET_PREFIXES.has(first)) return null;
  if (locales.includes(first)) {
    if (!second) return null;
    [first, second] = [second, segments[2]];
  }
  if (first === "guides") {
    return !second || guides.includes(second) ? null : `/guides/${second}`;
  }
  return slugs.includes(first) || SITE_PAGES.has(first) ? null : `/${first}`;
}

/**
 * Audit every README. Returns `{ problems, stats }`; the CLI decides the exit
 * code so the same function can be asserted from a test.
 */
export function auditReadmes(root = ROOT) {
  const problems = [];
  const models = modelSizes(root);
  const slugs = toolSlugs(root);
  const locales = interfaceLocales(root);
  const guides = guideSlugs(root);
  const known = { slugs, locales, guides };

  if (models.length === 0) problems.push("lib/models.ts: no sizeMB entries parsed — the audit is blind");
  if (slugs.length === 0) problems.push("lib/site-routes.ts: TOOL_SLUGS parsed as empty");
  if (locales.length === 0) problems.push("i18n/locale.ts: ALL_LOCALE_NAMES parsed as empty");

  const docs = new Map();

  for (const suffix of README_SUFFIXES) {
    const file = `README${suffix}.md`;
    if (!existsSync(join(root, file))) {
      problems.push(`${file}: missing`);
      continue;
    }
    const text = read(root, file);
    docs.set(suffix, text);

    // 1. model sizes, compared as numbers so 1085 MB and 1.09 GB both count
    const sizes = mentionedMegabytes(text);
    for (const model of models) {
      for (const target of [model.wasm, model.webgpu]) {
        if (!sizes.some((value) => Math.abs(value - target) <= 6)) {
          problems.push(`${file}: no download size for ${model.id} ≈ ${target} MB (lib/models.ts)`);
        }
      }
    }

    // 2. links resolve to something that exists
    for (const path of advertisedPaths(text)) {
      const bad = unresolvablePath(path, known);
      if (bad) problems.push(`${file}: advertises ${bad}, which is not a published page`);
    }

    // 3. the language table covers every shipped locale
    for (const code of locales) {
      if (code === "en") continue;
      if (!text.includes(`earscribe.app/${code}`)) {
        problems.push(`${file}: language table has no link for ${code}`);
      }
    }

    // 4. relative links (the language switcher) point at real files, and the
    //    switcher actually offers every language — an unlinked README is dead
    //    weight nobody can reach.
    const localLinks = README_SUFFIXES.map((suffix) => `README${suffix}.md`);
    for (const link of localLinks) {
      // The switcher is HTML (`<a href="…">`); a body link would be Markdown.
      if (!text.includes(`"${link}"`) && !text.includes(`(${link})`)) {
        problems.push(`${file}: language switcher does not link ${link}`);
      }
    }
    for (const [, href] of text.matchAll(/(?:\(|href=")(README[a-zA-Z.-]*\.md)/g)) {
      if (!localLinks.includes(href)) problems.push(`${file}: links to ${href}, which is not a shipped README`);
    }

    // 5. phrases that were wrong
    for (const { pattern, why } of BANNED) {
      if (pattern.test(text)) problems.push(`${file}: contains "${pattern.source}" — ${why}`);
    }
  }

  // 6. translations must match English structurally and link-for-link
  const source = docs.get("");
  if (source) {
    const expected = {
      sections: (source.match(/^## /gm) ?? []).length,
      faq: (source.match(/<details>/g) ?? []).length,
      links: advertisedPaths(source),
    };
    for (const [suffix, text] of docs) {
      if (suffix === "") continue;
      const file = `README${suffix}.md`;
      const sections = (text.match(/^## /gm) ?? []).length;
      const faq = (text.match(/<details>/g) ?? []).length;
      if (sections !== expected.sections) {
        problems.push(`${file}: ${sections} sections, English has ${expected.sections}`);
      }
      if (faq !== expected.faq) {
        problems.push(`${file}: ${faq} FAQ entries, English has ${expected.faq}`);
      }
      const links = advertisedPaths(text);
      for (const link of expected.links) {
        if (!links.has(link)) problems.push(`${file}: missing link to ${link}`);
      }
    }
  }

  return {
    problems,
    stats: {
      files: docs.size,
      models: models.length,
      slugs: slugs.length,
      guides: guides.length,
      locales: locales.length,
      sections: source ? (source.match(/^## /gm) ?? []).length : 0,
      faq: source ? (source.match(/<details>/g) ?? []).length : 0,
    },
  };
}

const invokedDirectly =
  process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (invokedDirectly) {
  const { problems, stats } = auditReadmes();
  console.log(
    `readme: ${stats.files} files, ${stats.sections} sections, ${stats.faq} FAQ entries, ` +
      `${stats.models} models, ${stats.slugs} tool pages, ${stats.guides} guides, ${stats.locales} locales`,
  );
  if (problems.length > 0) {
    console.error("\nreadme problems:");
    for (const problem of problems) console.error(`  ✗ ${problem}`);
    process.exit(1);
  }
  console.log("readme: OK — sizes match lib/models.ts, links resolve, translations in step.");
}
