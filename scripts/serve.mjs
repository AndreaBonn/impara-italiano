/* ============================================================
   serve.mjs — a static server for tests and for working in the browser.

   Usage:  node scripts/serve.mjs [port]
   8080 by default, or PORT from the environment.

   Why it exists instead of `python3 -m http.server`: that one holds on to
   old scripts despite changes on disk, so the page shows an untruth and the
   bug is hunted in code that has already been fixed. Here every response
   carries Cache-Control: no-store.

   No dependencies, like the rest of the project.
   ============================================================ */
import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, normalize, extname } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.argv[2] || process.env.PORT || 8080);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".mp3": "audio/mpeg",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2"
};

/**
 * A request path turned into a path on disk.
 * Returns null outside the project directory: ".." in a URL has no right to
 * lead outside ROOT, not even on a test server.
 */
function resolvePath(url) {
  const clean = decodeURIComponent(url.split("?")[0].split("#")[0]);
  const rel = normalize(clean).replace(/^(\.\.[/\\])+/, "");
  const abs = join(ROOT, rel);
  if (!abs.startsWith(ROOT)) return null;
  try {
    return statSync(abs).isDirectory() ? join(abs, "index.html") : abs;
  } catch {
    return null;
  }
}

/**
 * A server for the project files.
 *
 * Exposed as a function and not only as a command, for one reason: the test
 * of two successive releases (tests/dom/pwa-update.spec.js) needs a server
 * that returns sw.js with DIFFERENT content the second time. The browser
 * recognises a new release by the bytes of that file, so without this there
 * is no way to reproduce a release other than by breaking the file in the
 * working tree.
 *
 * @param {object} [opcje]
 * @param {Record<string, () => string>} [opcje.podmiany]
 *        address -> a function returning the content; asked on EVERY
 *        request, so that the release can be changed mid-test
 */
export function serwer(opcje) {
  const podmiany = (opcje && opcje.podmiany) || {};

  return createServer((req, res) => {
    const adres = (req.url || "/").split("?")[0];
    const naglowki = { "Cache-Control": "no-store" };

    if (Object.prototype.hasOwnProperty.call(podmiany, adres)) {
      res.writeHead(200, { ...naglowki, "Content-Type": TYPES[".js"] });
      res.end(podmiany[adres]());
      return;
    }

    const path = resolvePath(adres);
    if (!path) {
      res.writeHead(404, { ...naglowki, "Content-Type": "text/plain; charset=utf-8" });
      res.end("404");
      return;
    }
    res.writeHead(200, {
      ...naglowki,
      "Content-Type": TYPES[extname(path).toLowerCase()] || "application/octet-stream"
    });
    createReadStream(path).pipe(res);
  });
}

/* Listening only when started from the command line: importing this file in
   a test must not occupy a port. */
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  serwer().listen(PORT, () => {
    process.stdout.write(`serve: http://localhost:${PORT} (no-store)\n`);
  });
}
