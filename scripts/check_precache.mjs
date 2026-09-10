/* ============================================================
   check_precache.mjs — whether the worker can load what the page loads
   Usage:  node scripts/check_precache.mjs

   The project has no build step, so the list of files in `PRECACHE`
   (sw.js) is written out by hand and CLAUDE.md asks a human not to forget
   to add a script there too after adding it to index.html. Forgetting does
   not hurt immediately: the course works with a network and only fails at
   the first offline start, on the missing script. This script turns that
   request into a gate.

   The comparison goes ONE way: index.html -> PRECACHE. The other direction
   would raise a false alarm, because `PRECACHE` deliberately holds files
   pulled at runtime (the ui-*.js overlays, the fonts, the icons) which are
   not in index.html and do not have to be.

   We read `PRECACHE` by running sw.js in a sandbox rather than with a
   regular expression over brackets: validate.mjs does the same with the
   course data, and it cannot be fooled by a comma in a comment either.
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Unifies the path spelling: index.html writes "assets/x", PRECACHE "./assets/x". */
function norm(sciezka) {
  return sciezka.replace(/^\.\//, "").replace(/^\//, "").split("?")[0].split("#")[0];
}

/* ---------------- PRECACHE from sw.js ---------------- */

function precache() {
  /* `self` has to exist and accept addEventListener, because sw.js registers
     three events right after the declarations. We call none of them — the
     only thing we care about is the array standing above. */
  const box = {
    console,
    self: { addEventListener() {}, skipWaiting() {}, clients: { claim() {} } },
    caches: undefined
  };
  box.globalThis = box;
  vm.createContext(box);
  vm.runInContext(readFileSync(join(ROOT, "sw.js"), "utf8"), box, { filename: "sw.js" });
  if (!Array.isArray(box.PRECACHE)) {
    console.error("sw.js: nie znaleziono tablicy PRECACHE");
    process.exit(1);
  }
  return { lista: box.PRECACHE.map(norm), wersja: box.SW_VERSION };
}

/* ---------------- The resources from index.html ---------------- */

/**
 * Extracts what the page needs for its first run: every `<script src>` plus
 * the stylesheet and the manifest from `<link>`. The icons and the favicon
 * stay out: the favicon is written as a data: URI, and the PWA icons are
 * loaded by the system, not by the page parser.
 */
function zasobyStrony() {
  /* Comments are stripped BEFORE searching: a commented-out <script src> is
     not loaded by the browser, so demanding it in PRECACHE would stop CI on a
     file nobody needs. The gate is meant to catch what is missing, not what
     is superfluous. */
  const html = readFileSync(join(ROOT, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const out = [];

  for (const m of html.matchAll(/<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi)) {
    out.push(norm(m[1]));
  }
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    const rel = (tag.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || "";
    const href = (tag.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1] || "";
    if (!href || href.startsWith("data:")) continue;
    if (/^(stylesheet|manifest)$/i.test(rel.trim())) out.push(norm(href));
  }

  return out;
}

/* ---------------- The comparison ---------------- */

const { lista, wersja } = precache();
const wPamieci = new Set(lista);
const potrzebne = zasobyStrony();
const brakujace = potrzebne.filter((p) => !wPamieci.has(p));

if (brakujace.length) {
  console.error(`\nBŁĄD — index.html wczytuje ${brakujace.length} plik(ów) spoza PRECACHE.`);
  console.error("Pierwszy start bez sieci padnie na każdym z nich.\n");
  brakujace.forEach((p) => console.error(`  x ${p}`));
  console.error(`\nDopisz je do PRECACHE w sw.js i podnieś SW_VERSION (teraz ${wersja}).\n`);
  process.exit(1);
}

console.log(
  `OK — wszystkie ${potrzebne.length} zasobów strony są w PRECACHE ` +
  `(${lista.length} wpisów, ${wersja}).`
);
