/**
 * Shared HTML readers for the SEO gates.
 *
 * Everything here works on the **built** HTML, not on the React source: the
 * gates are meant to catch output problems (a title that grew, a figure that
 * turned into a table, a signature that drifted), and the built page is the only
 * thing that can be wrong in those ways.
 *
 * The parsers are deliberately regex-based. They read our own generated markup,
 * not arbitrary third-party pages, so a tolerant scanner is enough — and it
 * keeps the gates dependency-free apart from `yaml`.
 */

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
  "&hellip;": "…",
};

export function decodeEntities(text) {
  // One pass, so `&amp;#39;` decodes to `&#39;` and stops there instead of
  // turning into an apostrophe two levels deep. React emits `&#x27;` for an
  // apostrophe, which is why hex has to be handled.
  return text.replace(/&(#[xX][0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g, (entity, body) => {
    if (body[0] === "#") {
      const code = body[1] === "x" || body[1] === "X" ? parseInt(body.slice(2), 16) : Number(body.slice(1));
      if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) return entity;
      try {
        return String.fromCodePoint(code);
      } catch {
        return entity;
      }
    }
    return ENTITIES[`&${body};`] ?? entity;
  });
}

export function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * The article body only — no header, footer, breadcrumbs or related links.
 *
 * Uses a depth counter rather than `lastIndexOf("</article>")`: a related-card
 * component that also renders an <article> would otherwise be swallowed, and
 * every word/figure/h2 metric after that point would be wrong.
 */
export function extractArticle(html) {
  const start = html.search(/<article\b/i);
  if (start < 0) return "";
  const pattern = /<article\b|<\/article>/gi;
  pattern.lastIndex = start;
  let depth = 0;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    depth += match[0][1] === "/" ? -1 : 1;
    if (depth === 0) return html.slice(start, match.index + match[0].length);
  }
  return html.slice(start);
}

export function metaOf(html) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "";
  const description =
    html.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/i)?.[1] ?? "";
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "";
  return {
    title: decodeEntities(title).trim(),
    description: decodeEntities(description).trim(),
    h1: stripTags(h1),
  };
}

/** Every `<figure>` in the article, as raw HTML strings. */
export function figureBlocks(articleHtml) {
  return articleHtml.match(/<figure\b[\s\S]*?<\/figure>/gi) ?? [];
}

/**
 * Coarse, DOM-derivable figure kind.
 *
 * `css` is not a fallback: BarGroup, StackedBar and Compare render divs, and
 * without this bucket half the site's charts would classify as "unknown".
 */
export function classifyFigure(figureHtml) {
  // Components declare what they are (`data-figure`). That beats guessing from
  // markup: a div-wrapped chart and a div-wrapped pull-quote look identical.
  const declared = figureHtml.match(/data-figure="([a-z]+)"/i)?.[1];
  if (declared === "chart") return "css";
  // A two-column comparison is a layout, not a data shape: it counts as a
  // picture but not as a chart, so it cannot be the only visual on a page.
  if (declared === "compare") return "compare";
  if (declared === "flow") return "flow";
  if (declared === "table") return "table";
  // <Figure> is a container: it wraps either an <img> or a <pre>, so the DOM
  // below decides. Returning "unknown" here would hide every screenshot.
  if (declared === "code") return "code";

  if (/<table\b/i.test(figureHtml)) return "table";
  if (/<svg\b/i.test(figureHtml)) return "svg";
  if (/<img\b/i.test(figureHtml)) return "screenshot";
  if (/<pre\b/i.test(figureHtml)) return "code";
  if (/<ol\b/i.test(figureHtml)) return "flow";
  // Anything else is unclassified. It does not count as a picture and does not
  // count as a chart, which is the honest default for "we have not looked".
  return "unknown";
}

/** Kinds that carry a data shape, as opposed to evidence (screenshot/code). */
export const CHART_KINDS = new Set(["svg", "css"]);

/**
 * The density numbers the playbook talks about.
 *
 * `flow` is excluded from the denominator: a step list is text in a box, and
 * counting it as a visual is what made the old gate reward non-visuals.
 */
export function figureStats(kinds) {
  const byKind = { table: 0, svg: 0, css: 0, compare: 0, screenshot: 0, code: 0, flow: 0, unknown: 0 };
  for (const kind of kinds) byKind[kind] = (byKind[kind] ?? 0) + 1;
  const denominator = kinds.filter((kind) => kind !== "flow").length;
  const picture = byKind.svg + byKind.css + byKind.compare + byKind.screenshot;
  return {
    total: kinds.length,
    byKind,
    denominator,
    picture,
    charts: byKind.svg + byKind.css,
    ratio: denominator === 0 ? 0 : picture / denominator,
  };
}

export function h2Texts(articleHtml) {
  return [...articleHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((match) =>
    stripTags(match[1]),
  );
}

/**
 * The article split at every `<h2>`, with the numbers a density rule needs.
 *
 * Sections are the unit a reader actually experiences: a page can average four
 * figures per thousand words and still have one section that is two screens of
 * prose. Splitting on the heading is the only way to see that, and it is also
 * where "does this section open with an answer" becomes checkable — the first
 * sentence of the first paragraph.
 */
export function articleSections(articleHtml) {
  // The whole <h2> goes, not just its opening tag: otherwise every section's
  // first sentence is its own heading, and the "opens with a number" check
  // would be measuring the heading instead of the prose.
  const parts = articleHtml.split(/<h2\b[^>]*>[\s\S]*?<\/h2>/i);
  const headings = h2Texts(articleHtml);
  return {
    lede: sectionStats(parts[0] ?? ""),
    sections: parts.slice(1).map((html, index) => ({
      heading: headings[index] ?? "",
      ...sectionStats(html),
    })),
  };
}

/**
 * Numbers that carry a quantity, not just a digit.
 *
 * `\b\d+\b` counted "MP3" (the 3), "2024", "step 1" and "part 2" — which made
 * the density rule satisfiable by listing things. A number only counts here if
 * it is standalone (not inside a product name) and carries a unit, or if it
 * sits in a table cell, where the unit is in the column header.
 */
const QUANTITY =
  // `[\s-]?` and not just `\s`: "34-second" and "40-minute" are quantities too,
  // and they are how prose usually writes them.
  //
  // English units need a word boundary; CJK units are not `\w`, so a `\b` after
  // them never matches mid-sentence ("923 字节的" has no boundary between 节 and
  // 的). They get their own branch — without it every zh-CN and ja page scored
  // near zero on density no matter how many measured numbers it quoted.
  /(?<![\p{L}\d])(\d[\d.,]*)[\s-]?(?=(?:(?:MB|GB|KB|TB|ms|s|sec|secs|second|seconds|min|mins|minute|minutes|h|hr|hrs|hour|hours|%|×|kHz|Hz|words?|characters?|chars?|runs?|models?|files?|lines?|cues?|steps?|tokens?|stretches?|languages?|formats?|hosts?|requests?|locales?|defects?|paragraphs?|timestamps?|rows?|CPS)\b|字节|字節|行|条|條|秒|分钟|分鐘|小时|小時|倍|次|段|個|个|处|處|本|文字|バイト|時間|回|件))/giu;

export function countQuantities(text, html = "") {
  const inProse = (text.match(QUANTITY) ?? []).length;
  // A number in a table cell is data by position: "38" under a "MB" header.
  const inTables = (html.match(/<td[^>]*>\s*\d/g) ?? []).length;
  return inProse + inTables;
}

function sectionStats(html) {
  const text = stripTags(html);
  const words = text ? text.split(" ").filter(Boolean).length : 0;
  const numbers = countQuantities(text, html);
  // The first sentence: a terminator followed by whitespace or the end of the
  // text. Whitespace alone is enough — requiring a capital broke on inline
  // <code>, which renders as a lowercase word after the full stop.
  const firstSentence = (text.match(/^[\s\S]*?[.!?](?=\s|$)/) ?? [text])[0].trim();
  return {
    text,
    words,
    numbers,
    figures: figureBlocks(html).length,
    firstSentence,
    // A quantity, not a digit: "MP3" ends in one and says nothing.
    firstSentenceHasNumber: countQuantities(firstSentence) > 0,
  };
}

export function paragraphTexts(articleHtml) {
  return [...articleHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) => stripTags(match[1]))
    .filter(Boolean);
}

/** Visible words inside `<text>` nodes of every inline SVG in a figure. */
export function svgTextWords(figureHtml) {
  const nodes = [...figureHtml.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/gi)];
  return nodes.reduce((sum, match) => sum + (stripTags(match[1]).split(" ") ?? []).filter(Boolean).length, 0);
}

export function imgAlts(articleHtml) {
  return [...articleHtml.matchAll(/<img\b[^>]*>/gi)].map((match) => {
    const altMatch = match[0].match(/\balt="([^"]*)"/i);
    const src = match[0].match(/\bsrc="([^"]*)"/i)?.[1] ?? "";
    return {
      src,
      // `alt=""` is a deliberate "decorative"; a missing attribute is an omission.
      alt: altMatch ? decodeEntities(altMatch[1]).trim() : null,
    };
  });
}

/** Lowercase letters and digits only — the normalisation used by every text metric. */
export function normaliseText(text) {
  // \p{L}/\p{N}, not [a-z0-9]: Russian, Japanese and Korean pages must produce
  // shingles too, otherwise their overlap and claim checks are vacuously empty.
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Blocks marked `data-sitemap-ignore` are shared scaffolding — the "more guides"
 * list on every guide page. They are identical across pages by design, so any
 * similarity metric that includes them measures the template instead of the
 * writing: the guide corpus scored 70% overlap until this was stripped.
 */
export function stripScaffolding(html) {
  return html.replace(/<(section|nav)[^>]*data-sitemap-ignore[^>]*>[\s\S]*?<\/\1>/gi, " ");
}

/**
 * n-grams of a normalised string: five words for spaced scripts, five
 * characters for scripts without spaces.
 *
 * Character n-grams do not work for English. Five-letter runs ("the s", "e st")
 * appear in every article ever written, so every pair measures around 83% and
 * the check stops discriminating — a gate that always fires is a gate nobody
 * reads. Five-word runs are the standard near-duplicate unit and they do
 * separate "same article" from "same subject".
 */
export function shingles(normalised, size = 5) {
  const set = new Set();
  const words = normalised.split(" ").filter(Boolean);
  if (words.length >= size) {
    for (let index = 0; index + size <= words.length; index += 1) {
      set.add(words.slice(index, index + size).join(" "));
    }
    return set;
  }
  const compact = normalised.replace(/ /g, "");
  for (let index = 0; index + size <= compact.length; index += 1) {
    set.add(compact.slice(index, index + size));
  }
  return set;
}

/** `|A∩B| / min(|A|,|B|)` — the corpus-independent overlap the playbook specifies. */
export function overlapRatio(a, b) {
  if (!a.size || !b.size) return 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  let shared = 0;
  for (const gram of small) if (large.has(gram)) shared += 1;
  return shared / small.size;
}

/** Normalised Levenshtein distance: 0 = identical, 1 = nothing in common. */
export function levenshteinRatio(a, b) {
  if (a === b) return 0;
  if (!a.length || !b.length) return 1;
  const previous = new Array(b.length + 1).fill(0).map((_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = previous[0];
    previous[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = previous[j];
      previous[j] = Math.min(
        previous[j] + 1,
        previous[j - 1] + 1,
        diagonal + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      diagonal = temp;
    }
  }
  return previous[b.length] / Math.max(a.length, b.length);
}

/** Tokenise for claim comparison (Jaccard over word sets). */
export function tokenSet(text) {
  return new Set(normaliseText(text).split(" ").filter(Boolean));
}

export function jaccard(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const token of a) if (b.has(token)) shared += 1;
  return shared / (a.size + b.size - shared);
}
