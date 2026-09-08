/* ============================================================
   serve.mjs — statyczny serwer do testów i do pracy w przeglądarce.

   Uruchomienie:  node scripts/serve.mjs [port]
   Domyślnie 8080, albo PORT ze środowiska.

   Powód istnienia zamiast `python3 -m http.server`: tamten trzyma
   stare skrypty mimo zmian na dysku, więc strona pokazuje nieprawdę,
   a błąd szuka się w kodzie, który już jest poprawiony. Tu każda
   odpowiedź niesie Cache-Control: no-store.

   Bez zależności, jak reszta projektu.
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
 * Ścieżka z żądania na ścieżkę na dysku.
 * Zwraca null poza katalogiem projektu: „..” w URL-u nie ma prawa
 * wyprowadzić poza ROOT, nawet na serwerze do testów.
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

const server = createServer((req, res) => {
  const path = resolvePath(req.url || "/");
  if (!path) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
    res.end("404");
    return;
  }
  res.writeHead(200, {
    "Content-Type": TYPES[extname(path).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store"
  });
  createReadStream(path).pipe(res);
});

server.listen(PORT, () => {
  process.stdout.write(`serve: http://localhost:${PORT} (no-store)\n`);
});
