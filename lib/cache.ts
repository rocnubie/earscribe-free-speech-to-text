/**
 * Locate and remove a Whisper model's files from the browser's Cache API.
 *
 * Transformers.js caches every fetched weight/config file under
 * `caches.open('transformers-cache')` (its default). We iterate all caches
 * the origin owns — that way we work even if a future version of the
 * library renames its cache.
 *
 * Returns the number of bytes freed (best-effort, based on each entry's
 * `content-length` header).
 */
export async function deleteModelFromCache(repo: string): Promise<number> {
  if (typeof caches === "undefined") return 0;

  let freed = 0;
  const cacheNames = await caches.keys().catch(() => [] as string[]);

  for (const cacheName of cacheNames) {
    let cache: Cache;
    try {
      cache = await caches.open(cacheName);
    } catch {
      continue;
    }

    let keys: readonly Request[] = [];
    try {
      keys = await cache.keys();
    } catch {
      continue;
    }

    for (const req of keys) {
      // Match URLs that point into `.../<repo>/...` regardless of which
      // proxy/host they go through.
      if (!req.url.includes(`/${repo}/`)) continue;
      try {
        const response = await cache.match(req);
        const cl = response?.headers.get("content-length");
        if (cl) {
          const n = Number.parseInt(cl, 10);
          if (Number.isFinite(n)) freed += n;
        }
      } catch {
        // ignore — counting bytes is best-effort
      }
      try {
        await cache.delete(req);
      } catch {
        // ignore — best-effort
      }
    }
  }

  return freed;
}
