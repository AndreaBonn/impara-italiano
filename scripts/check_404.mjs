/* ============================================================
   check_404.mjs — whether the not-found page works where it is served
   Usage:  node scripts/check_404.mjs

   GitHub Pages answers EVERY unknown address with 404.html, keeping the
   address the visitor asked for. A link to /impara-italiano/a/b/c/nothing
   gets these bytes while the browser still believes it is standing in
   /a/b/c/, so `href="assets/css/app.css"` resolves against a directory that
   was never there. The page then arrives unstyled, or with a dead button,
   at exactly the moment somebody is already lost.

   It is the perfect silent failure: the file looks right in an editor,
   looks right opened from disk, and only misbehaves at the depth nobody
   tests by hand. Hence a static gate rather than a habit.

   Three checks:

   - every href and src starts from the root (or is absolute, or is a data:
     URI). This is the property that survives any depth.
   - the root they start from is the one declared in `homepage` in
     package.json, the same single source the social tags use. A page that
     points confidently at a former domain's path still renders; it just
     never gets anybody back to the course.
   - the files those references point at exist in the repository, and there
     is EXACTLY ONE way back. Two buttons is a choice nobody lost wants to
     make; zero is a dead end.

   What this gate deliberately does NOT do is load the page. Under
   scripts/serve.mjs the prefix does not resolve, so a loader would have to
   fake the very thing being verified. The browser-side check lives in
   tests/dom/notfound.spec.js, which rewrites the prefix on purpose and says
   so.
   ============================================================ */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const STRONA = "404.html";

const problemy = [];

/* ---------------- The prefix Pages serves us behind ---------------- */

const { homepage } = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
if (!homepage) {
  console.error("BŁĄD — package.json nie ma pola \"homepage\": nie ma z czym porównać ścieżek.");
  process.exit(1);
}

/* Just the path: "https://andreabonn.github.io/impara-italiano/" -> "/impara-italiano/".
   A user page published at the domain root gives "/", which is also correct. */
const PREFIKS = new URL(homepage).pathname;

/* ---------------- The references in the page ---------------- */

const html = readFileSync(join(ROOT, STRONA), "utf8").replace(/<!--[\s\S]*?-->/g, "");

/** Everything a browser will go and fetch, or follow when clicked. */
const odnosniki = [];
for (const m of html.matchAll(/\b(href|src)\s*=\s*["']([^"']*)["']/gi)) {
  odnosniki.push({ atrybut: m[1].toLowerCase(), wartosc: m[2] });
}

if (!odnosniki.length) {
  problemy.push(`${STRONA}: nie ma ani jednego odnośnika, więc nie ma czym wrócić do kursu`);
}

for (const { atrybut, wartosc } of odnosniki) {
  if (wartosc.startsWith("data:") || wartosc.startsWith("mailto:") || wartosc.startsWith("#")) continue;

  if (/^https?:\/\//i.test(wartosc)) continue;

  if (!wartosc.startsWith("/")) {
    problemy.push(
      `${STRONA}: ${atrybut}="${wartosc}" jest względny. ` +
      "Pages serwuje tę stronę pod adresem, o który poprosił odwiedzający, " +
      "więc rozwiąże się względem katalogu, którego nie ma"
    );
    continue;
  }

  if (!wartosc.startsWith(PREFIKS)) {
    problemy.push(`${STRONA}: ${atrybut}="${wartosc}" nie zaczyna się od "${PREFIKS}" z package.json`);
    continue;
  }

  /* The reference is shaped right; now: is there a file at the other end?
     A typo in the path renders an unstyled page, not an error. */
  const wRepo = wartosc.slice(PREFIKS.length);
  if (wRepo && !existsSync(join(ROOT, wRepo))) {
    problemy.push(`${STRONA}: ${atrybut}="${wartosc}" wskazuje na "${wRepo}", czego nie ma w repozytorium`);
  }
}

/* ---------------- Exactly one way back ---------------- */

const powroty = odnosniki.filter((o) => o.atrybut === "href" && o.wartosc === PREFIKS);

if (powroty.length === 0) {
  problemy.push(`${STRONA}: nie ma odnośnika do "${PREFIKS}", więc zabłąkany uczeń nie wraca do kursu`);
} else if (powroty.length > 1) {
  problemy.push(`${STRONA}: ${powroty.length} odnośniki do "${PREFIKS}", a ma być dokładnie jeden`);
}

/* ---------------- The verdict ---------------- */

if (problemy.length) {
  console.error(`\nBŁĄD — strona 404 nie zadziała tam, gdzie jest serwowana (${problemy.length}):\n`);
  problemy.forEach((p) => console.error(`  x ${p}`));
  console.error("");
  process.exit(1);
}

console.log(`OK — ${STRONA}: ${odnosniki.length} odnośników, wszystkie od "${PREFIKS}", jeden powrót do kursu.`);
