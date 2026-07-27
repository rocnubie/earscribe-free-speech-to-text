/**
 * CF Pages Function: same-origin Hugging Face CDN proxy.
 *
 * Browser fetches /api/hf-proxy/{repo}/resolve/{rev}/{file} instead of
 * https://huggingface.co/... to avoid CORS issues and enable edge caching.
 * Models are immutable per-revision, so CF caches them for a year.
 */

const UPSTREAM = "https://huggingface.co";

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

export async function onRequestGet({ request, params }: Ctx): Promise<Response> {
  return proxy(request, params);
}

export async function onRequestHead({ request, params }: Ctx): Promise<Response> {
  return proxy(request, params);
}

async function proxy(
  request: Request,
  params: Record<string, string | string[]>,
): Promise<Response> {
  const pathSegments = (params["path"] as string[] | undefined) ?? [];
  const url = new URL(request.url);
  const target = `${UPSTREAM}/${pathSegments.map(encodeURIComponent).join("/")}${url.search}`;

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
