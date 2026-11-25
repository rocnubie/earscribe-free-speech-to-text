/**
 * Re-captures the site's screenshots from the real, freshly built product UI.
 *
 * Why this exists: the seven `/screenshots/*.webp` files used to be captures of
 * an older homepage, and the use-case cards were even pointing at pictures of
 * homepage sections. Whenever the workspace changed, the marketing pages kept
 * showing the old design. This script drives a headless Chrome against the
 * static export, so every shot is the current build.
 *
 * Usage:
 *   NODE_OPTIONS="" pnpm build
 *   node scripts/capture-site-shots.mjs --probe   # PNGs in artifacts/shots-probe
 *   node scripts/capture-site-shots.mjs --peaks   # refresh demo waveform peaks
 *   node scripts/capture-site-shots.mjs           # webp into public/screenshots + docs/screenshots
 *
 * Optional: BASE_URL=https://earscribe.app to shoot the live site instead.
 */
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT = join(ROOT, "out");
const PUBLIC_SHOTS = join(ROOT, "public", "screenshots");
const OUT_SHOTS = join(OUT, "screenshots");
const DOC_SHOTS = join(ROOT, "docs", "screenshots");
const PROBE_DIR = join(ROOT, "artifacts", "shots-probe");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const PROBE = process.argv.includes("--probe");
const PEAKS = process.argv.includes("--peaks");
const BASE_URL = process.env.BASE_URL?.replace(/\/$/, "");

/**
 * Per-locale hero shots for the translated READMEs.
 *
 * `HERO_LOCALES=ja,de` captures the first screen of each locale's home page
 * into `public/screenshots/<locale>/hero.webp`, so a translated README opens
 * with the interface in that language instead of English. Only the region above
 * the dropzone is captured — no clicks, no translated button text to match.
 */
const HERO_LOCALES = process.env.HERO_LOCALES?.split(",").map((s) => s.trim()).filter(Boolean);

const SECTION_SHOTS = [
  "01-hero",
  "02-transcript-showcase",
  "03-how-it-works",
  "04-features",
  "05-use-cases",
  "06-comparison",
  "07-faq",
];
/** Product-UI shots used by the use-case cards. */
const UI_SHOTS = [
  "ui-transcript",
  "ui-export",
  "ui-input",
  "ui-queue",
  "ui-subtitles",
  "ui-models",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".mp3": "audio/mpeg",
  ".txt": "text/plain; charset=utf-8",
};

const pause = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * The showcase demo fetches its 275 KB sample once the card nears the viewport,
 * so its play button, duration and click-to-seek only exist after that fetch
 * resolves. `ShowcaseDemo` marks the card when it is ready; shots that include
 * the card wait for that instead of racing a fixed pause.
 */
const SHOWCASE_READY = 'document.querySelector("[data-showcase-card][data-showcase-ready]")';

/** Minimal static server for ./out — mirrors Cloudflare Pages' clean URLs. */
const server = BASE_URL
  ? null
  : createServer((req, res) => {
      const url = new URL(req.url ?? "/", "http://127.0.0.1");
      let filePath = join(OUT, decodeURIComponent(url.pathname));
      if (!extname(filePath)) {
        const asHtml = `${filePath}.html`;
        if (existsSync(asHtml)) filePath = asHtml;
        else if (existsSync(join(filePath, "index.html")))
          filePath = join(filePath, "index.html");
      }
      if (!existsSync(filePath)) {
        res.writeHead(404).end("not found");
        return;
      }
      res.writeHead(200, {
        "content-type": MIME[extname(filePath)] ?? "application/octet-stream",
      });
      res.end(readFileSync(filePath));
    });
if (server) await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = BASE_URL ?? `http://127.0.0.1:${server.address().port}`;

const profile = mkdtempSync(join(tmpdir(), "earscribe-shots-"));
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--mute-audio",
    "--remote-debugging-port=0",
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: ["ignore", "pipe", "pipe"] },
);

async function waitForFile(path, timeoutMs = 20_000) {
  const end = Date.now() + timeoutMs;
  while (Date.now() < end) {
    if (existsSync(path)) return;
    await pause(100);
  }
  throw new Error(`timeout waiting for ${path}`);
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    });
  }
  send(method, params = {}, sessionId = this.sessionId) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(
        JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }),
      );
      setTimeout(() => this.pending.has(id) && reject(new Error(`timeout ${method}`)), 30_000);
    });
  }
  async evaluate(expression) {
    const r = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (r.exceptionDetails) {
      throw new Error(
        String(
          r.exceptionDetails.exception?.description ??
            r.exceptionDetails.exception?.value ??
            r.exceptionDetails.text,
        ),
      );
    }
    return r.result.value;
  }
}

let cdp;
try {
  const portFile = join(profile, "DevToolsActivePort");
  await waitForFile(portFile);
  const [debugPort] = readFileSync(portFile, "utf8").split("\n");
  const version = await (
    await fetch(`http://127.0.0.1:${debugPort.trim()}/json/version`)
  ).json();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });
  cdp = new CDP(ws);
  const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await cdp.send("Target.attachToTarget", {
    targetId,
    flatten: true,
  });
  cdp.sessionId = sessionId;
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("DOM.enable");
  await cdp.send("Network.enable");
  await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 1280,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  const outDir = PROBE ? PROBE_DIR : PUBLIC_SHOTS;
  mkdirSync(outDir, { recursive: true });
  const ext = PROBE ? "png" : "webp";

  /** Persist a shot everywhere it is needed; out/ keeps later navigations live. */
  function save(name, buffer) {
    const file = `${name}.${ext}`;
    writeFileSync(join(outDir, file), buffer);
    if (!PROBE) {
      mkdirSync(OUT_SHOTS, { recursive: true });
      writeFileSync(join(OUT_SHOTS, file), buffer);
      mkdirSync(DOC_SHOTS, { recursive: true });
      writeFileSync(join(DOC_SHOTS, file), buffer);
    }
    console.log(`  shot ${file}`);
  }

  async function capture(name, clip) {
    const shot = await cdp.send("Page.captureScreenshot", {
      format: PROBE ? "png" : "webp",
      ...(PROBE ? {} : { quality: 82 }),
      captureBeyondViewport: true,
      clip,
    });
    save(name, Buffer.from(shot.data, "base64"));
  }

  /** Hide the site header so clipped region shots never catch floating chrome. */
  async function go(path, settle = 1200) {
    await cdp.send("Page.navigate", { url: `${origin}${path}` });
    await pause(settle);
    await cdp.evaluate(`(() => {
      let style = document.getElementById('shot-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'shot-style';
        document.head.appendChild(style);
      }
      style.textContent = 'header { visibility: hidden !important; }';
    })()`);
    await pause(120);
  }

  /**
   * Headless Chrome sometimes fails to boot the transcription worker when the
   * same page is reloaded many times in a row. That is an artefact of the
   * capture session, not a product state we want in a marketing screenshot, so
   * hide the error line and show the primary button in its normal appearance.
   */
  async function cleanSurface() {
    await cdp.evaluate(`(() => {
      document.querySelectorAll('[role="alert"], .text-danger-600, .text-danger-700').forEach((el) => {
        el.style.visibility = 'hidden';
      });
      document.querySelectorAll('main#transcribe button[disabled], section#transcribe button[disabled]').forEach((el) => {
        el.removeAttribute('disabled');
      });
    })()`);
  }

  /**
   * Best-effort wait: a shot that never sees its ready state is worth a warning
   * (it is captured against whatever is on screen) but not worth killing the
   * run — the remaining shots are independent, and one missing image should not
   * leave all the others stale.
   */
  async function waitForExpr(expression, timeoutMs = 10_000) {
    const end = Date.now() + timeoutMs;
    while (Date.now() < end) {
      if (await cdp.evaluate(`Boolean(${expression})`)) return;
      await pause(80);
    }
    console.warn(`  ! timed out waiting for ${expression} — capturing as-is`);
  }

  /**
   * Positions an element and returns its page box. `ready` is an expression
   * polled after the scroll: the showcase demo only fetches its audio once the
   * card is near the viewport, so the play button appears a moment later and the
   * box would otherwise be measured (and captured) without it.
   */
  async function boxOf(expression, ready) {
    const scrolled = await cdp.evaluate(`(() => {
      const el = (${expression});
      if (!el) return false;
      el.scrollIntoView({ block: 'center' });
      return true;
    })()`);
    if (!scrolled) return null;
    if (ready) await waitForExpr(ready);
    return cdp.evaluate(`(() => {
      const el = (${expression});
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left + window.scrollX, y: r.top + window.scrollY, w: r.width, h: r.height };
    })()`);
  }

  /** Whole section, any height — used for the README / structured-data shots. */
  async function region(name, selector, { pad = 16, maxHeight = 2400, ready } = {}) {
    await cleanSurface();
    const box = await boxOf(`document.querySelector(${JSON.stringify(selector)})`, ready);
    if (!box) throw new Error(`region not found: ${name} — ${selector}`);
    await pause(180);
    await capture(name, {
      x: Math.max(0, box.x - pad),
      y: Math.max(0, box.y - pad),
      width: Math.min(box.w + pad * 2, 1280),
      height: Math.min(box.h + pad * 2, maxHeight),
      scale: 1,
    });
  }

  /**
   * 16:10 product shot on a clean canvas.
   *
   * Capturing a 16:10 crop straight out of the page pulls in whatever sits
   * below a short card (the next section's heading, half a code sample…). So
   * the component is captured on its own, then centred on a matching 16:10
   * surface — the same trick a product screenshot tool would use.
   */
  async function card(name, expression, ready) {
    await cleanSurface();
    const box = await boxOf(expression, ready);
    if (!box || box.w < 40 || box.h < 40) {
      throw new Error(`card not found: ${name} — ${expression}`);
    }
    await pause(220);
    const raw = await cdp.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: true,
      clip: {
        x: Math.max(0, box.x),
        y: Math.max(0, box.y),
        width: Math.min(box.w, 1240),
        height: Math.min(box.h, 1400),
        scale: 1,
      },
    });
    await cdp.evaluate(`(async () => {
      // Fixed chrome lives in viewport coordinates; park the page at the top so
      // the 0,0 clip below always lands on the stage and never on the page.
      window.scrollTo(0, 0);
      const stage = document.createElement('div');
      stage.id = 'shot-stage';
      stage.style.cssText = 'position:fixed;inset:0;z-index:2147483647;background:#fafafa;display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box';
      const img = document.createElement('img');
      img.src = 'data:image/png;base64,${raw.data}';
      img.style.cssText = 'width:100%;height:100%;object-fit:contain';
      stage.appendChild(img);
      document.body.appendChild(stage);
      await img.decode();
    })()`);
    await pause(150);
    const shot = await cdp.send("Page.captureScreenshot", {
      format: PROBE ? "png" : "webp",
      ...(PROBE ? {} : { quality: 84 }),
      captureBeyondViewport: false,
      clip: { x: 0, y: 0, width: 1280, height: 800, scale: 1 },
    });
    save(name, Buffer.from(shot.data, "base64"));
    await cdp.evaluate("document.getElementById('shot-stage')?.remove()");
  }

  async function setFiles(selector, count = 1, index = 0) {
    return cdp.evaluate(`(async () => {
      const input = document.querySelectorAll(${JSON.stringify(selector)})[${index}];
      if (!input) return false;
      const response = await fetch('/samples/earscribe-sample.mp3');
      const blob = await response.blob();
      const dt = new DataTransfer();
      for (let i = 0; i < ${count}; i++) {
        dt.items.add(new File([blob], i === 0 ? 'interview-q3.mp3' : 'team-sync-' + i + '.mp3', { type: 'audio/mpeg' }));
      }
      input.files = dt.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    })()`);
  }

  async function clickText(text, nth = 0) {
    return cdp.evaluate(`(() => {
      const els = [...document.querySelectorAll('button, a, summary, [role="button"], [role="tab"]')]
        .filter((el) => (el.textContent || '').trim().includes(${JSON.stringify(text)}));
      const el = els[${nth}];
      if (!el) return false;
      el.click();
      return true;
    })()`);
  }

  /** Rebuild the demo waveform peaks from the actual sample audio (600 bars). */
  async function refreshDemoPeaks() {
    const peaks = await cdp.evaluate(`(async () => {
      const response = await fetch('/samples/earscribe-sample.mp3');
      const buffer = await new AudioContext().decodeAudioData(await response.arrayBuffer());
      const pcm = buffer.getChannelData(0);
      const buckets = 600;
      const out = [];
      for (let i = 0; i < buckets; i++) {
        const start = Math.floor(i * pcm.length / buckets);
        const end = Math.min(pcm.length, Math.floor((i + 1) * pcm.length / buckets));
        let loudest = 0;
        for (let j = start; j < end; j++) loudest = Math.max(loudest, Math.abs(pcm[j] || 0));
        out.push(Math.min(1, loudest));
      }
      return out;
    })()`);
    if (!Array.isArray(peaks) || peaks.length !== 600) {
      throw new Error("could not decode the sample audio");
    }
    const path = join(ROOT, "lib", "demo-sample.ts");
    const source = readFileSync(path, "utf8");
    const start = source.indexOf("  peaks: [");
    const end = source.indexOf("],", start);
    if (start < 0 || end < 0) throw new Error("peaks block not found in demo-sample.ts");
    const rows = [];
    for (let i = 0; i < peaks.length; i += 8) {
      rows.push("    " + peaks.slice(i, i + 8).map((v) => v.toFixed(3)).join(", ") + ",");
    }
    writeFileSync(
      path,
      source.slice(0, start) + "  peaks: [\n" + rows.join("\n") + "\n  " + source.slice(end),
    );
    console.log("  refreshed 600 demo peaks from the sample audio");
  }

  if (PEAKS) {
    await go("/", 1000);
    await refreshDemoPeaks();
  }

  if (HERO_LOCALES) {
    for (const locale of HERO_LOCALES) {
      const target = locale === "en" ? "/" : `/${locale}`;
      const dir = join(PUBLIC_SHOTS, locale);
      mkdirSync(dir, { recursive: true });
      await go(target, 1800);
      const box = await boxOf('document.querySelector("main#transcribe > div:first-child")');
      if (!box) throw new Error(`hero not found on ${target}`);
      await pause(200);
      const shot = await cdp.send("Page.captureScreenshot", {
        format: "webp",
        quality: 82,
        captureBeyondViewport: true,
        clip: {
          x: Math.max(0, box.x - 16),
          y: Math.max(0, box.y - 16),
          width: Math.min(box.w + 32, 1280),
          height: Math.min(box.h + 32, 1100),
          scale: 1,
        },
      });
      writeFileSync(join(dir, "hero.webp"), Buffer.from(shot.data, "base64"));
      console.log(`  hero ${locale} (${Math.round(box.h)}px tall)`);
    }
  } else if (PROBE) {
    await go("/", 1400);
    await region("01-hero", "main#transcribe > div:first-child", { pad: 16, maxHeight: 1000 });
    await region("02-transcript-showcase", 'section[aria-labelledby="ui-showcase-heading"]', { pad: 16, maxHeight: 1500, ready: SHOWCASE_READY });
    console.log("  single file added:", await setFiles('input[type="file"]'));
    await pause(1100);
    await capture("probe-input-single", { x: 0, y: 0, width: 1280, height: 900, scale: 1 });
    console.log("  edit opened:", await clickText("Edit"));
    await pause(700);
    await capture("probe-models-open", { x: 0, y: 0, width: 1280, height: 900, scale: 1 });
    await go("/", 1300);
    console.log("  batch tab:", await clickText("Batch queue"));
    await pause(600);
    console.log("  queue files added:", await setFiles('input[type="file"]', 3, 1));
    await pause(1100);
    await capture("probe-queue-files", { x: 0, y: 0, width: 1280, height: 900, scale: 1 });
    await go("/", 1400);
    console.log("  download opened:", await clickText("Download"));
    await pause(500);
    await region("probe-export-open", 'section[aria-labelledby="ui-showcase-heading"]', { pad: 16, maxHeight: 1100, ready: SHOWCASE_READY });
    await go("/srt-to-vtt", 1300);
    console.log("  example loaded:", await clickText("Load example"));
    await pause(700);
    await capture("probe-converter-example", { x: 0, y: 0, width: 1280, height: 900, scale: 1 });
  } else {
    // ── 1. Homepage sections. 05 waits until the new UI shots exist, so the
    //       use-case cards no longer contain pictures of other page sections. ──
    await go("/", 1500);
    await region("01-hero", "main#transcribe > div:first-child", { pad: 16, maxHeight: 1000 });
    await region("02-transcript-showcase", 'section[aria-labelledby="ui-showcase-heading"]', { pad: 16, maxHeight: 1500, ready: SHOWCASE_READY });
    await region("03-how-it-works", "section#how-it-works", { pad: 16 });
    await region("04-features", 'section[aria-labelledby="features-heading"]', { pad: 16 });
    await region("06-comparison", 'section[aria-labelledby="compare-heading"]', { pad: 16 });
    await region("07-faq", "main#transcribe > div:last-child", { pad: 16 });

    // ── 2. Product UI shots, each from a real interactive state. ──
    // Both mode panes stay mounted, so pick the *visible* card — otherwise a
    // hidden pane produces a blank shot.
    const WORKSPACE_CARD =
      '[...document.querySelectorAll("main#transcribe .rounded-card")].find((el) => el.getClientRects().length > 0)';
    const SHOWCASE_CARD = 'document.querySelector("[data-showcase-card]")';

    await card("ui-transcript", SHOWCASE_CARD, SHOWCASE_READY);

    await go("/", 1400);
    if (!(await clickText("Download"))) throw new Error("export menu did not open");
    await pause(500);
    await card("ui-export", SHOWCASE_CARD, SHOWCASE_READY);

    await go("/", 1400);
    if (!(await setFiles('input[type="file"]'))) throw new Error("no file input on home");
    await pause(1000);
    await card("ui-input", WORKSPACE_CARD);
    if (await clickText("Edit")) {
      await pause(700);
      await card("ui-models", WORKSPACE_CARD);
    } else {
      throw new Error("model settings did not open");
    }

    await go("/", 1300);
    if (!(await clickText("Batch queue"))) throw new Error("batch tab missing");
    await pause(600);
    if (!(await setFiles('input[type="file"]', 3, 1)))
      throw new Error("queue file input missing");
    await pause(1100);
    await card("ui-queue", WORKSPACE_CARD);

    await go("/srt-to-vtt", 1300);
    if (!(await clickText("Load example"))) throw new Error("converter example missing");
    await pause(700);
    await card("ui-subtitles", 'document.querySelector("section#transcribe")');

    // ── 3. Now that the tiles point at real product shots, re-shoot 05. ──
    await go("/", 1800);
    await region("05-use-cases", 'section[aria-labelledby="usecases-heading"]', { pad: 16 });

    for (const name of SECTION_SHOTS) {
      copyFileSync(
        join(PUBLIC_SHOTS, `${name}.webp`),
        join(DOC_SHOTS, `${name}.webp`),
      );
    }
    console.log(
      `\n  ${SECTION_SHOTS.length + UI_SHOTS.length} shots written to public/screenshots, docs/screenshots and out/screenshots.`,
    );
  }
} finally {
  chrome.kill();
  server?.close();
}
