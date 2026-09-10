/* ============================================================
   check_swversion.mjs — whether a new release has any way to announce itself
   Usage:  node scripts/check_swversion.mjs [--napraw]

   The browser recognises a new version of the application by the BYTES of
   sw.js and by nothing else: it fetches that file, compares it with the
   remembered one, and only a difference triggers the installation of a new
   worker. The project has no build step, so the files have no hash in their
   names and sw.js does not change just because core.js did. A fix therefore
   went out to students as a release the browser never saw, and the message
   "there is a new version" had no way to appear.

   Hence the fingerprint appended to SW_VERSION: a hash of the contents of
   ALL the PRECACHE files. A change to any line of the shell changes the
   fingerprint, so it changes sw.js, so it triggers the announcement.

   A deliberate boundary: what counts is the PRECACHE files, that is the
   shell of the course. The level files (data/core/a1-*.js) are pulled at
   runtime and follow the "network first" strategy, so they refresh by
   themselves, without the worker.

   We read `PRECACHE` by running sw.js in a sandbox, the same way
   check_precache.mjs does — not with a regular expression over brackets.
   ============================================================ */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SW = join(ROOT, "sw.js");
const NAPRAW = process.argv.slice(2).includes("--napraw");

/* A version of the form "v35.7bb6e01ec9d6": the hand-written release name,
   a dot, the fingerprint. The fingerprint is optional in the expression, so
   that it can be added to a file that does not have one yet. */
const WZOR = /(var SW_VERSION = "v\d+)(?:\.[0-9a-f]+)?(";)/;

/** index.html is in PRECACHE twice: as "./" and under its own name. */
function norm(sciezka) {
  const czysta = sciezka.replace(/^\.\//, "").replace(/^\//, "");
  return czysta === "" ? "index.html" : czysta;
}

function precache() {
  const box = {
    console,
    self: { addEventListener() {}, skipWaiting() {}, clients: { claim() {} } },
    caches: undefined
  };
  box.globalThis = box;
  vm.createContext(box);
  vm.runInContext(readFileSync(SW, "utf8"), box, { filename: "sw.js" });
  if (!Array.isArray(box.PRECACHE)) {
    console.error("sw.js: nie znaleziono tablicy PRECACHE");
    process.exit(1);
  }
  return box.PRECACHE;
}

/**
 * The fingerprint of the shell.
 *
 * The file name enters the hash together with the content: swapping the
 * contents between two files is a change of release too. The list is
 * sorted, because the order of the PRECACHE entries is a declaration of
 * dependencies and may be rearranged without changing what the student
 * gets.
 */
function odcisk(pliki) {
  const suma = createHash("sha256");
  for (const rel of pliki) {
    const abs = join(ROOT, rel);
    if (!existsSync(abs)) {
      console.error(`\nBŁĄD — PRECACHE wymienia plik, którego nie ma: ${rel}`);
      console.error("Instalacja workera pominie go po cichu, a pierwszy start bez sieci na nim padnie.\n");
      process.exit(1);
    }
    suma.update(rel);
    suma.update("\0");
    suma.update(readFileSync(abs));
    suma.update("\0");
  }
  return suma.digest("hex").slice(0, 12);
}

/* ---------------- The comparison ---------------- */

const pliki = Array.from(new Set(precache().map(norm))).sort();
const swiezy = odcisk(pliki);

const zrodlo = readFileSync(SW, "utf8");
const trafienie = WZOR.exec(zrodlo);
if (!trafienie) {
  console.error('\nBŁĄD — sw.js: nie znaleziono `var SW_VERSION = "v<liczba>[.<odcisk>]";`\n');
  process.exit(1);
}

const wydanie = trafienie[1].replace('var SW_VERSION = "', "");
const zapisany = (trafienie[0].match(/\.([0-9a-f]+)";$/) || [])[1] || null;

if (zapisany === swiezy) {
  console.log(`OK — odcisk ${wydanie}.${swiezy} zgadza się z treścią ${pliki.length} plików powłoki.`);
  process.exit(0);
}

if (NAPRAW) {
  writeFileSync(SW, zrodlo.replace(WZOR, `$1.${swiezy}$2`));
  console.log(`Zapisano ${wydanie}.${swiezy} (było ${zapisany || "bez odcisku"}).`);
  process.exit(0);
}

console.error(`\nBŁĄD — odcisk w sw.js jest nieaktualny: ${zapisany || "brak"}, a treść powłoki daje ${swiezy}.`);
console.error("Bez tego przeglądarka nie zobaczy nowego wydania i uczeń nie dostanie komunikatu o aktualizacji.\n");
console.error("  node scripts/check_swversion.mjs --napraw\n");
process.exit(1);
