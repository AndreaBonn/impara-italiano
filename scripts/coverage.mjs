/* ============================================================
   coverage.mjs — ile silnika naprawdę wykonują testy jednostkowe
   Uruchomienie:  node scripts/coverage.mjs [--min 88]

   Wbudowane `node --test --experimental-test-coverage` pokazuje tu
   100% i jest to liczba bez treści: pliki z assets/js/ są skryptami
   klasycznymi i wchodzą do testu przez `node:vm` (tests/unit/_harness.mjs),
   więc licznik widzi harness i pliki testów, a silnika nie widzi wcale.

   Dlatego bierzemy surowe pokrycie z V8 (NODE_V8_COVERAGE) i składamy je
   sami. `vm.runInContext` dostaje w harnessie `filename`, więc każdy plik
   silnika ma w tym zrzucie własny wpis i da się go policzyć.

   Dwie pułapki, obie kończą się fałszywym stuprocentowym wynikiem:

   - zakresy V8 są ZAGNIEŻDŻONE: funkcja wykonana ma jeden zakres z
     licznikiem > 0 na całym ciele, a jej niewykonane gałęzie siedzą
     w środku jako zakresy z licznikiem 0. Malowanie ich po kolei bez
     sortowania (początek rosnąco, koniec malejąco) gubi te dziury;
   - każdy proces testowy zapisuje własny plik json. Mapy z różnych
     procesów trzeba sumować przez OR, nigdy malować jedną po drugiej:
     inaczej plik, którego drugi proces w ogóle nie dotknął, kasuje to,
     co pokrył pierwszy.

   Ziarnistość: LINIA, nie gałąź. Linia liczy się jako pokryta, gdy ma
   choć jeden wykonany znak niebędący spacją. Komentarze są odsiewane
   heurystycznie (blok wieloliniowy i linia zaczynająca się od //), co wystarcza
   do pilnowania trendu i nie wystarcza do rozstrzygania sporów o jedną
   linię — od tego są testy, nie ten licznik.
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

/* Domyślnie lista niewykonanych linii jest ucinana, żeby raport mieścił się
   na ekranie. `--pelne` pokazuje ją w całości — po to, żeby dopisanie testu
   nie wymagało liczenia linii ręcznie. */
const PELNE = argv.indexOf("--pelne") >= 0;

/* ---------------- Uruchomienie testów ze zrzutem V8 ---------------- */

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

/* ---------------- Składanie map pokrycia ---------------- */

const zrodla = new Map();   // ścieżka względna -> treść pliku

function zrodlo(rel) {
  if (!zrodla.has(rel)) {
    const path = join(ROOT, rel);
    zrodla.set(rel, existsSync(path) ? readFileSync(path, "utf8") : null);
  }
  return zrodla.get(rel);
}

function mapy(dir) {
  const out = new Map();     // ścieżka -> Uint8Array, 1 = znak wykonany

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

/* ---------------- Linie kodu vs komentarze ---------------- */

/**
 * Które linie pliku niosą kod. Blok wieloliniowy zdejmowany stanem, linia
 * zaczynająca się od `//` odrzucana wprost. Nie ma tu parsera napisów:
 * pomyłka na napisie zawierającym otwarcie komentarza kosztuje jedną
 * linię w liczniku, a parser kosztowałby całą klasę własnych błędów.
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

/* ---------------- Raport ---------------- */

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
