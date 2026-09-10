/* ============================================================
   coverage.mjs — how much of the engine the unit tests really execute
   Usage:  node scripts/coverage.mjs [--min 88]

   The built-in `node --test --experimental-test-coverage` shows 100% here
   and that is a number with no content: the files in assets/js/ are classic
   scripts and enter the test through `node:vm` (tests/unit/_harness.mjs),
   so the counter sees the harness and the test files and does not see the
   engine at all.

   That is why we take the raw coverage from V8 (NODE_V8_COVERAGE) and
   assemble it ourselves. In the harness `vm.runInContext` is given a
   `filename`, so every engine file has an entry of its own in that dump and
   can be counted.

   Two traps, both ending in a false hundred per cent:

   - the V8 ranges are NESTED: an executed function has one range with a
     count > 0 over its whole body, while its unexecuted branches sit inside
     as ranges with a count of 0. Painting them in order without sorting
     (start ascending, end descending) loses those holes;
   - every test process writes its own json file. Maps from different
     processes have to be summed with OR, never painted one after another:
     otherwise a file the second process never touched erases what the first
     one covered.

   Granularity: the LINE, not the branch. A line counts as covered when it
   has at least one executed non-space character. Comments are filtered out
   heuristically (a multi-line block and a line starting with //), which is
   enough to watch the trend and not enough to settle an argument about a
   single line — the tests are for that, not this counter.
   ============================================================ */
import { readFileSync, readdirSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const argv = process.argv.slice(2);
const progIdx = argv.indexOf("--min");
const PROG = progIdx >= 0 ? Number(argv[progIdx + 1]) : null;

/* By default the list of unexecuted lines is truncated so the report fits on
   screen. `--pelne` shows it in full — so that adding a test does not
   require counting lines by hand. */
const PELNE = argv.indexOf("--pelne") >= 0;

/* ---------------- Running the tests with a V8 dump ---------------- */

function zrzut() {
  const dir = mkdtempSync(join(tmpdir(), "linguai-cov-"));
  const wynik = spawnSync(
    process.execPath,
    ["--test", "tests/unit/**/*.test.mjs"],
    { cwd: ROOT, env: { ...process.env, NODE_V8_COVERAGE: dir }, stdio: ["ignore", "ignore", "inherit"] }
  );
  if (wynik.status !== 0) {
    console.error("\nBŁĄD — testy jednostkowe nie przechodzą; pokrycie liczone z czerwonej suity nic nie znaczy.\n");
    rmSync(dir, { recursive: true, force: true });
    process.exit(1);
  }
  return dir;
}

/* ---------------- Assembling the coverage maps ---------------- */

const zrodla = new Map();   // relative path -> file contents

function zrodlo(rel) {
  if (!zrodla.has(rel)) {
    const path = join(ROOT, rel);
    zrodla.set(rel, existsSync(path) ? readFileSync(path, "utf8") : null);
  }
  return zrodla.get(rel);
}

function mapy(dir) {
  const out = new Map();     // path -> Uint8Array, 1 = character executed

  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".json")) continue;
    const zapis = JSON.parse(readFileSync(join(dir, f), "utf8"));
    for (const skrypt of zapis.result || []) {
      if (!skrypt.url.includes("assets/js/")) continue;
      const rel = skrypt.url.replace(/^file:\/\//, "").replace(/.*?(assets\/js\/)/, "$1");
      const src = zrodlo(rel);
      if (!src) continue;

      const lokalna = new Uint8Array(src.length);
      const zakresy = [];
      for (const fn of skrypt.functions) for (const r of fn.ranges) zakresy.push(r);
      zakresy.sort((a, b) => a.startOffset - b.startOffset || b.endOffset - a.endOffset);
      for (const r of zakresy) {
        const v = r.count > 0 ? 1 : 0;
        for (let i = r.startOffset; i < r.endOffset && i < src.length; i++) lokalna[i] = v;
      }

      const suma = out.get(rel) || new Uint8Array(src.length);
      for (let i = 0; i < src.length; i++) if (lokalna[i]) suma[i] = 1;
      out.set(rel, suma);
    }
  }
  return out;
}

/* ---------------- Code lines vs comments ---------------- */

/**
 * Which lines of a file carry code. A multi-line block is stripped with a
 * state flag, a line starting with `//` is rejected outright. There is no
 * string parser here: a mistake on a string containing a comment opener
 * costs one line in the counter, while a parser would cost a whole class of
 * bugs of its own.
 */
function linieKodu(src) {
  const linie = src.split("\n");
  const kod = new Array(linie.length).fill(false);
  let wBloku = false;

  for (let n = 0; n < linie.length; n++) {
    const linia = linie[n];
    let i = 0, mial = false;
    while (i < linia.length) {
      if (wBloku) {
        const koniec = linia.indexOf("*/", i);
        if (koniec < 0) break;
        wBloku = false; i = koniec + 2;
        continue;
      }
      if (linia.startsWith("//", i)) break;
      if (linia.startsWith("/*", i)) { wBloku = true; i += 2; continue; }
      if (!/\s/.test(linia[i])) mial = true;
      i++;
    }
    kod[n] = mial;
  }
  return kod;
}

/* ---------------- The report ---------------- */

const dir = zrzut();
let wiersze;
try {
  wiersze = [];
  for (const [rel, hit] of mapy(dir)) {
    const src = zrodlo(rel);
    const kod = linieKodu(src);
    const linie = src.split("\n");

    let offset = 0, razem = 0, pokryte = 0;
    const puste = [];
    for (let n = 0; n < linie.length; n++) {
      if (kod[n]) {
        razem++;
        let ok = false;
        for (let k = offset; k < offset + linie[n].length; k++) {
          if (hit[k] && !/\s/.test(src[k])) { ok = true; break; }
        }
        if (ok) pokryte++; else puste.push(n + 1);
      }
      offset += linie[n].length + 1;
    }
    wiersze.push({ rel, razem, pokryte, pct: razem ? (100 * pokryte) / razem : 100, puste });
  }
} finally {
  rmSync(dir, { recursive: true, force: true });
}

wiersze.sort((a, b) => a.pct - b.pct);

let razem = 0, pokryte = 0;
for (const w of wiersze) { razem += w.razem; pokryte += w.pokryte; }
const calosc = razem ? (100 * pokryte) / razem : 0;

console.log("plik".padEnd(22) + "  pokr%   linie   niewykonane");
for (const w of wiersze) {
  const lista = !PELNE && w.puste.length > 12
    ? w.puste.slice(0, 12).join(",") + ",…"
    : w.puste.join(",");
  console.log(
    w.rel.replace("assets/js/", "").padEnd(22) +
    w.pct.toFixed(1).padStart(7) +
    String(w.razem).padStart(8) + "   " + lista
  );
}
console.log(`\nRAZEM ${calosc.toFixed(1)}% (${pokryte}/${razem} linii, ${wiersze.length} plików silnika).`);
console.log("Pliki widoków i ćwiczeń nie mają testów jednostkowych z założenia: sprawdza je npm run test:dom.");

if (PROG !== null && calosc < PROG) {
  console.error(`\nBŁĄD — pokrycie ${calosc.toFixed(1)}% poniżej progu ${PROG}%.`);
  process.exit(1);
}
