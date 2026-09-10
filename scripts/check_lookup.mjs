/* ============================================================
   check_lookup.mjs — how many words from the readings the course can explain.

   There is one goal: the student taps any word in a text and gets its
   meaning. Without that the feature is worse than its absence — a tap that
   does nothing teaches that tapping gives nothing, and the student stops
   trying even where it would have worked.

   THE THRESHOLD IS WRITTEN DOWN BEFORE THE FIRST MEASUREMENT and that is
   its whole value. A threshold chosen after seeing the result is not a
   threshold but a description of whatever came out. If the measurement
   comes out lower, the resolver gets fixed or glosses get added — this
   number does not get lowered.

       SOGLIA = 0.85

   The rationale: the texts are at A1-B1, so most of the words are course
   words and function words. One in seven unrecognised is as much as a
   student tolerates without losing trust in the feature; one in three is
   not.

       node scripts/check_lookup.mjs            # a report
       node scripts/check_lookup.mjs --gate     # exit code 1 below the threshold
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOGLIA = 0.85;
const GATE = process.argv.includes("--gate");

/* The sandbox follows the same pattern as validate.mjs and parity.mjs. We
   load the NEUTRAL LAYER: the deciding dictionary is the Italian entries of
   the course, and those do not depend on the language of explanations. */
const levels = [];
const byCode = {};
const box = {
  console, Intl, JSON, Math, Date, Object, Array, String, Number, RegExp, Error,
  LINGUAI: {
    registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
    addUnits(code, units) { if (byCode[code]) byCode[code].units = byCode[code].units.concat(units); },
    addStrings() {}, addUI() {}
  }
};
box.window = box;
box.global = box;
box.globalThis = box;
vm.createContext(box);

for (const p of [
  "assets/js/verbs-data.js",
  "assets/js/verbs.js",
  "assets/js/lemma-morf.js",
  "assets/js/lemma.js",
  "data/core/curriculum-index.js",
  ...readdirSync(join(ROOT, "data", "core")).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort()
    .map(f => join("data", "core", f)),
  "data/core/readings.js"
]) {
  vm.runInContext(readFileSync(join(ROOT, p), "utf8"), box, { filename: p });
}

/* We build the dictionary with the SAME code as the browser:
   Lemma.zbudujSlownik. A second build here would mean the gate measures
   something other than what the student gets, and it would drift apart at
   the first change on either side. */
box.window.Lemma.uzyjSlownika(null);
box.Core = { registry: { levels } };

/**
 * Tokenising an Italian text.
 *
 * The apostrophe stays inside a word only where it joins two words
 * ("dell'acqua"), and then we split: "dell" and "acqua" are two entries and
 * not one. Numbers and punctuation drop out, because there is nothing to
 * explain.
 */
function tokeny(zdanie) {
  return zdanie
    .toLowerCase()
    .replace(/[’']/g, "'")
    .split(/[^a-zàáèéìíòóùúç']+/)
    .filter(Boolean)
    .flatMap(rozetnij);
}

/**
 * Elision: "dell'acqua" is two entries, "c'è" is one.
 *
 * Splitting blindly produced the token "c", that is a letter that cannot be
 * explained and that the student will never tap on its own. We split only
 * when the right-hand side is longer than a single letter: the rest stays
 * whole and lands on the list of function words, where "c'è" already is.
 */
function rozetnij(w) {
  const i = w.indexOf("'");
  if (i <= 0 || i === w.length - 1) return [w.replace(/'/g, "") || w];
  const prawa = w.slice(i + 1);
  if (prawa.length <= 1) return [w];
  return [w.slice(0, i), prawa];
}

const Lemma = box.window.Lemma;
const READINGS = box.window.READINGS || [];

let wszystkie = 0;
let rozpoznane = 0;
const nieznane = new Map();
const perTekst = [];

for (const r of READINGS) {
  let ile = 0, ok = 0;
  for (const zdanie of r.sentences || []) {
    for (const t of tokeny(zdanie)) {
      ile++;
      if (Lemma.resolve(t).length) ok++;
      else nieznane.set(t, (nieznane.get(t) || 0) + 1);
    }
  }
  wszystkie += ile;
  rozpoznane += ok;
  perTekst.push({ id: r.id, cefr: r.cefr, ile, ok, pokrycie: ile ? ok / ile : 1 });
}

const pokrycie = wszystkie ? rozpoznane / wszystkie : 1;


/* --dump: the list of missing words per text, with the base form proposed
   by the resolver. It is there to help write the glosses, not to decide the
   gate. */
if (process.argv.includes("--dump")) {
  const out = {};
  for (const r of READINGS) {
    const brak = new Map();
    for (const zdanie of r.sentences || []) {
      for (const t of tokeny(zdanie)) {
        if (!Lemma.resolve(t).length) {
          const k = Lemma.kandydaci(t);
          brak.set(t, k.length > 1 ? k[1] : t);
        }
      }
    }
    if (brak.size) out[r.id] = Object.fromEntries(brak);
  }
  console.log(JSON.stringify(out, null, 1));
  process.exit(0);
}

console.log("check_lookup — pokrycie słów w czytankach\n");
for (const t of perTekst.sort((a, b) => a.pokrycie - b.pokrycie)) {
  const proc = (t.pokrycie * 100).toFixed(1).padStart(5);
  console.log(`  ${proc}%  ${t.id.padEnd(18)} ${t.cefr}  ${t.ok}/${t.ile}`);
}

console.log(`\n  RAZEM: ${rozpoznane}/${wszystkie} = ${(pokrycie * 100).toFixed(1)}%`);
console.log(`  PRÓG:  ${(SOGLIA * 100).toFixed(0)}%  (wpisany przed pomiarem)`);

const najczestsze = [...nieznane.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25);
if (najczestsze.length) {
  console.log(`\n  Nierozpoznane (${nieznane.size} różnych), 25 najczęstszych:`);
  console.log("  " + najczestsze.map(([w, n]) => `${w}${n > 1 ? "×" + n : ""}`).join(", "));
}

if (GATE && pokrycie < SOGLIA) {
  console.error(`\nFAIL: ${(pokrycie * 100).toFixed(1)}% poniżej progu ${(SOGLIA * 100).toFixed(0)}%`);
  process.exit(1);
}
console.log(pokrycie >= SOGLIA ? "\nOK — próg osiągnięty." : "\nPoniżej progu (raport, nie bramka).");
