/* ============================================================
   check_lookup.mjs — ile słów z czytanek kurs umie objaśnić.

   Cel jest jeden: uczeń dotyka dowolnego słowa w tekście i dostaje
   znaczenie. Bez tego funkcja jest gorsza niż jej brak — dotknięcie,
   które nic nie robi, uczy, że dotykanie nic nie daje, i uczeń przestaje
   próbować także tam, gdzie by zadziałało.

   PRÓG JEST WPISANY PRZED PIERWSZYM POMIAREM i to jest cała jego wartość.
   Próg dobrany po zobaczeniu wyniku nie jest progiem, tylko opisem tego,
   co akurat wyszło. Jeżeli pomiar wyjdzie niżej, poprawia się resolver
   albo dopisuje glosy — nie obniża się tej liczby.

       SOGLIA = 0.85

   Uzasadnienie: teksty są na A1-B1, więc większość to słowa kursowe i
   wyrazy funkcyjne. Jedno na siedem nierozpoznanych to tyle, ile uczeń
   zniesie bez utraty zaufania do funkcji; jedno na trzy — już nie.

       node scripts/check_lookup.mjs            # raport
       node scripts/check_lookup.mjs --gate     # kod wyjścia 1 poniżej progu
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOGLIA = 0.85;
const GATE = process.argv.includes("--gate");

/* Piaskownica tym samym wzorcem co validate.mjs i parity.mjs. Ładujemy
   WARSTWĘ NEUTRALNĄ: słownik rozstrzygający to włoskie hasła kursu, a te
   nie zależą od języka wyjaśnień. */
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

/* Słownik budujemy TYM SAMYM kodem, co przeglądarka: Lemma.zbudujSlownik.
   Druga budowa tutaj znaczyłaby, że bramka mierzy co innego niż dostaje
   uczeń, i rozjechałaby się przy pierwszej zmianie po jednej ze stron. */
box.window.Lemma.uzyjSlownika(null);
box.Core = { registry: { levels } };

/**
 * Tokenizacja tekstu włoskiego.
 *
 * Apostrof zostaje wewnątrz wyrazu tylko tam, gdzie łączy dwa słowa
 * („dell'acqua"), i wtedy rozcinamy: „dell" i „acqua" to dwa hasła, a nie
 * jedno. Liczby i interpunkcja wypadają, bo nie ma czego objaśniać.
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
 * Elizja: „dell'acqua" to dwa hasła, „c'è" to jedno.
 *
 * Rozcinanie na ślepo produkowało token „c", czyli literę, której nie da
 * się objaśnić i której uczeń nigdy nie dotknie osobno. Rozcinamy tylko
 * wtedy, gdy prawa strona jest dłuższa niż litera: reszta zostaje w
 * całości i trafia na listę wyrazów funkcyjnych, gdzie „c'è" już jest.
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


/* --dump: lista mancanti per testo, con la forma base proposta dal
   resolver. Serve a scrivere le glosse, non a decidere il gate. */
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
