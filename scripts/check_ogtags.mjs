/* ============================================================
   check_ogtags.mjs — whether a shared link can show a preview
   Usage:  node scripts/check_ogtags.mjs

   A social preview breaks in silence. Nothing on the page changes, no test
   goes red, the course works: the only symptom appears in somebody else's
   chat window, where the link arrives as a bare grey rectangle. This gate
   turns three of those silent failures into an exit code.

   THE ABSOLUTE ADDRESS IS THE REASON THIS FILE EXISTS. Crawlers do not
   resolve relative URLs and do not run scripts, so `og:image` has to carry
   the full address of the site — which is the one thing this project
   otherwise never writes down, because the course runs identically from
   disk, from localhost and from Pages. The address therefore enters the
   repository ONCE, as `homepage` in package.json (the npm convention, on a
   file that already exists), and every literal in index.html is compared
   with it here. Changing domain is changing that one line; forgetting to
   change one of the tags is a red build, not a broken preview nobody sees.

   The three checks, each for a failure that has a name:

   - the tags exist at all — the case before this gate was written;
   - their prefix matches `homepage` — the tag survives a domain change and
     keeps pointing at the old host, which still answers, which is why
     nobody notices;
   - the image is exactly 1200x630 and lies on disk — a missing file gives
     the same grey rectangle as a missing tag, and a different aspect ratio
     is cropped by every platform in its own way.

   The dimensions are read from the PNG header, not from the script that
   produced the file: the point is to check what got committed, and a
   generator that writes the wrong size while reporting the right one is
   exactly the kind of thing a gate is for.
   ============================================================ */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { wymiaryPng } from "./png-size.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** The preview image has to have these dimensions, whatever produced it. */
const SZEROKOSC = 1200;
const WYSOKOSC = 630;

/** Above this size the platforms recompress the image or refuse it. */
const MAX_KB = 300;

/* The tags without which the preview is incomplete on at least one of the
   platforms the course gets shared on. `og:image:alt` is in the list on
   purpose: the preview is an image, and an image with no description is a
   hole in exactly the place this project has none anywhere else. */
const WYMAGANE_OG = [
  "og:title", "og:description", "og:url", "og:image", "og:image:alt", "og:type"
];

/* Declared next to the image and read by the crawler INSTEAD of the file:
   these two are a hint, so a wrong value is believed rather than checked.
   That makes them the one pair on the page that can lie without any symptom
   on our side, which is exactly why they are compared with the header of the
   committed PNG a few dozen lines below. */
const WYMIARY_W_TAGACH = { "og:image:width": SZEROKOSC, "og:image:height": WYSOKOSC };
const WYMAGANE_TW = ["twitter:card", "twitter:image"];

const problemy = [];

/* ---------------- The declared address ---------------- */

const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const ADRES = pkg.homepage;

if (!ADRES) {
  console.error("BŁĄD — package.json nie ma pola \"homepage\": nie ma z czym porównać tagów.");
  process.exit(1);
}
if (!ADRES.endsWith("/")) {
  problemy.push(`package.json: "homepage" musi kończyć się ukośnikiem (jest "${ADRES}")`);
}

/* ---------------- The tags from index.html ---------------- */

/* Comments go first, for the same reason as in check_precache.mjs: a
   commented-out tag is not read by any crawler, so demanding that it be
   correct would stop CI on something nobody sees. */
const html = readFileSync(join(ROOT, "index.html"), "utf8").replace(/<!--[\s\S]*?-->/g, "");

const tagi = new Map();
for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
  const tag = m[0];
  const klucz = (tag.match(/\b(?:property|name)\s*=\s*["']([^"']+)["']/i) || [])[1];
  const wartosc = (tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i) || [])[1];
  if (klucz && wartosc !== undefined) tagi.set(klucz.trim(), wartosc);
}

for (const klucz of [...WYMAGANE_OG, ...WYMAGANE_TW]) {
  if (!tagi.has(klucz)) problemy.push(`index.html nie deklaruje ${klucz}`);
  else if (!tagi.get(klucz).trim()) problemy.push(`index.html: ${klucz} jest puste`);
}

/* ---------------- The prefix against the declared address ---------------- */

/* Every tag that carries an address has to carry THIS one. A tag left over
   from a former domain still resolves, so the preview keeps working and the
   mistake keeps being invisible. */
for (const klucz of ["og:url", "og:image", "twitter:image"]) {
  const wartosc = tagi.get(klucz);
  if (!wartosc) continue;
  if (!wartosc.startsWith(ADRES)) {
    problemy.push(`index.html: ${klucz} = "${wartosc}" nie zaczyna się od "${ADRES}" z package.json`);
  }
}

if (tagi.get("og:url") && tagi.get("og:url") !== ADRES) {
  problemy.push(`index.html: og:url = "${tagi.get("og:url")}" musi być dokładnie adresem z package.json`);
}

if (tagi.get("twitter:image") && tagi.get("og:image") && tagi.get("twitter:image") !== tagi.get("og:image")) {
  problemy.push("index.html: twitter:image i og:image wskazują dwa różne pliki");
}

for (const [klucz, oczekiwane] of Object.entries(WYMIARY_W_TAGACH)) {
  const wartosc = tagi.get(klucz);
  if (wartosc === undefined) {
    problemy.push(`index.html nie deklaruje ${klucz} (obraz ma ${SZEROKOSC}x${WYSOKOSC})`);
  } else if (Number(wartosc) !== oczekiwane) {
    problemy.push(`index.html: ${klucz} = "${wartosc}", a plik ma ${oczekiwane}`);
  }
}

if (tagi.get("twitter:card") && tagi.get("twitter:card") !== "summary_large_image") {
  problemy.push(`index.html: twitter:card = "${tagi.get("twitter:card")}", a podgląd wymaga "summary_large_image"`);
}

/* ---------------- The image itself ---------------- */

const obraz = tagi.get("og:image");
if (obraz && obraz.startsWith(ADRES)) {
  const wzgledna = obraz.slice(ADRES.length);
  const naDysku = join(ROOT, wzgledna);

  if (!existsSync(naDysku)) {
    problemy.push(`og:image wskazuje "${wzgledna}", a tego pliku nie ma w repozytorium`);
  } else {
    const wymiary = wymiaryPng(naDysku);
    if (!wymiary) {
      problemy.push(`${wzgledna}: to nie jest plik PNG (nagłówek się nie zgadza)`);
    } else if (wymiary.szerokosc !== SZEROKOSC || wymiary.wysokosc !== WYSOKOSC) {
      problemy.push(
        `${wzgledna}: ${wymiary.szerokosc}x${wymiary.wysokosc}, ` +
        `a podgląd wymaga dokładnie ${SZEROKOSC}x${WYSOKOSC}`
      );
    }

    const kb = Math.round(readFileSync(naDysku).length / 1024);
    if (kb > MAX_KB) problemy.push(`${wzgledna}: ${kb} KB, próg to ${MAX_KB} KB`);
  }
}

/* ---------------- The verdict ---------------- */

if (problemy.length) {
  console.error(`\nBŁĄD — podgląd linku nie zadziała (${problemy.length}):\n`);
  problemy.forEach((p) => console.error(`  x ${p}`));
  console.error("\nLink wysłany komuś pokaże szary prostokąt zamiast kursu.\n");
  process.exit(1);
}

console.log(
  `OK — ${WYMAGANE_OG.length + WYMAGANE_TW.length} tagów podglądu zgodnych z "${ADRES}"` +
  (obraz ? `, obraz ${SZEROKOSC}x${WYSOKOSC}.` : ".")
);
