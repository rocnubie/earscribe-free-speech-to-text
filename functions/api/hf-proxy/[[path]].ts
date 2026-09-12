/**
 * CF Pages Function: same-origin Hugging Face CDN proxy.
 *
 * Browser fetches /api/hf-proxy/{repo}/resolve/{rev}/{file} instead of
 * https://huggingface.co/... to avoid CORS issues and enable edge caching.
 * Models are immutable per-revision, so CF caches them for a year.
 *
 * Only the model repos in lib/models.ts are proxied, and only at `main`.
 * Everything else is a 404, so nobody can serve arbitrary Hugging Face files
 * from our domain.
 */

import { MODELS } from "../../../lib/models";

const UPSTREAM = "https://huggingface.co";

const ALLOWED_REPOS = new Set(MODELS.map((m) => m.repo));

/**
 * The worker never sets a `revision`, so Transformers.js always requests
 * `main`. Don't widen this to other refs or commit SHAs: anyone can open a PR
 * on a public repo, and its files resolve under the PR's ref and commit SHA.
 */
const ALLOWED_REVISION = "main";

/**
 * One plain file path segment (`config.json`, `onnx`, `encoder_model.onnx_data`).
 * Rejects empty and dot segments and %-escapes, so the upstream URL can't be
 * normalized onto a different path.
 */
const FILE_SEGMENT = /^[\w-][\w.-]*$/;

const FORWARD_REQUEST_HEADERS = new Set([
  "range",
  "if-none-match",
  "if-modified-since",
]);

const FORWARD_RESPONSE_HEADERS = new Set([
  "content-type",
  "content-length",
  "content-range",
  "accept-ranges",
  "etag",
  "last-modified",
]);

type Ctx = { request: Request; params: Record<string, string | string[]> };

export async function onRequest({ request, params }: Ctx): Promise<Response> {
  const target =
    request.method === "GET" || request.method === "HEAD"
      ? upstreamUrl(params["path"])
      : null;
  if (!target) {
    return new Response("Not found", { status: 404 });
  }
  return proxy(request, target);
}

/**
 * Maps `{org}/{repo}/resolve/main/{file...}` for an allowed repo to its
 * huggingface.co URL, or returns null. The query string is dropped:
 * Transformers.js never sends one.
 */
function upstreamUrl(path: string | string[] | undefined): string | null {
  const [org, repo, resolve, revision, ...file] = Array.isArray(path) ? path : [];
  if (
    !ALLOWED_REPOS.has(`${org}/${repo}`) ||
    resolve !== "resolve" ||
    revision !== ALLOWED_REVISION ||
    file.length === 0 ||
    !file.every((segment) => FILE_SEGMENT.test(segment))
  ) {
    return null;
  }
  return `${UPSTREAM}/${org}/${repo}/resolve/${revision}/${file.join("/")}`;
}

async function proxy(request: Request, target: string): Promise<Response> {
  const upstreamHeaders = new Headers();
  request.headers.forEach((value, key) => {
    if (FORWARD_REQUEST_HEADERS.has(key.toLowerCase())) {
      upstreamHeaders.set(key, value);
    }
  });

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      method: request.method,
      headers: upstreamHeaders,
      redirect: "follow",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Upstream fetch failed";
    return new Response(`Upstream error: ${message}`, { status: 502 });
  }

  const headers = new Headers();
  upstream.headers.forEach((value, key) => {
    if (FORWARD_RESPONSE_HEADERS.has(key.toLowerCase())) {
      headers.set(key, value);
    }
  });

  if (upstream.ok && !headers.has("cache-control")) {
    headers.set("cache-control", "public, max-age=31536000, immutable");
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}
