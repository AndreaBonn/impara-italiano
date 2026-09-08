/* ============================================================
   parity.mjs — czy każdy język mówi to samo, co polski?

   Nakładki łączą się z warstwą neutralną PO INDEKSIE, więc krótsza
   tablica nie jest błędem składni: jest cichą dziurą, którą widać
   dopiero w przeglądarce, na jednej lekcji, w jednym ćwiczeniu.
   Ten skrypt porównuje KSZTAŁT (klucze i długości tablic, nie treść)
   każdej nakładki z polską i wypisuje różnice.

   Polski jest odniesieniem, bo jest kompletny i sprawdzony.

   Uruchomienie:  node scripts/parity.mjs [kod-języka …]
   Bez argumentów sprawdza wszystkie katalogi w data/i18n/.
   Kończy się kodem 1 przy jakiejkolwiek różnicy — nadaje się do CI.
   ============================================================ */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const I18N = join(ROOT, "data", "i18n");
const REFERENCE = "pl";

/* ---------------- Wczytanie nakładek jednego języka ---------------- */

function loadLang(lang) {
  const bag = {};
  const sandbox = { window: {}, console, LINGUAI: { addStrings(_l, map) { Object.assign(bag, map); } } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  const dir = join(I18N, lang);
  const files = readdirSync(dir).filter(f => f.endsWith(".js")).sort();
  for (const f of files) {
    vm.runInContext(readFileSync(join(dir, f), "utf8"), sandbox, { filename: `${lang}/${f}` });
  }
  return bag;
}

/* ---------------- Kształt: klucze i długości, bez treści ---------------- */

function shape(v) {
  if (Array.isArray(v)) return { n: v.length, items: v.map(shape) };
  if (v && typeof v === "object") {
    const out = {};
    Object.keys(v).sort().forEach(k => { out[k] = shape(v[k]); });
    return out;
  }
  return typeof v;
}

/** Zbiera różnice kształtu, ze ścieżką do miejsca. */
function diff(a, b, path, out) {
  if (out.length >= 40) return out;
  const ta = a && typeof a === "object" && "n" in a && "items" in a;
  const tb = b && typeof b === "object" && "n" in b && "items" in b;

  if (ta !== tb) { out.push(`${path}: ${ta ? "tablica" : "nie-tablica"} vs ${tb ? "tablica" : "nie-tablica"}`); return out; }
  if (ta) {
    if (a.n !== b.n) { out.push(`${path}: ${a.n} elementów w ${REFERENCE}, ${b.n} tutaj`); return out; }
    a.items.forEach((x, i) => diff(x, b.items[i], `${path}[${i}]`, out));
    return out;
  }
  const oa = a && typeof a === "object", ob = b && typeof b === "object";
  if (oa !== ob) { out.push(`${path}: ${oa ? "obiekt" : String(a)} vs ${ob ? "obiekt" : String(b)}`); return out; }
  if (oa) {
    const ka = Object.keys(a), kb = Object.keys(b);
    ka.filter(k => !(k in b)).forEach(k => out.push(`${path}.${k}: brakuje`));
    kb.filter(k => !(k in a)).forEach(k => out.push(`${path}.${k}: jest tutaj, nie ma w ${REFERENCE}`));
    ka.filter(k => k in b).forEach(k => diff(a[k], b[k], `${path}.${k}`, out));
  }
  return out;
}

/* ---------------- Przebieg ---------------- */

const wanted = process.argv.slice(2);
const langs = (wanted.length ? wanted : readdirSync(I18N).filter(f => statSync(join(I18N, f)).isDirectory()))
  .filter(l => l !== REFERENCE);

if (!existsSync(join(I18N, REFERENCE))) {
  console.error(`Brak katalogu odniesienia data/i18n/${REFERENCE}/`);
  process.exit(1);
}

const ref = loadLang(REFERENCE);
const refKeys = Object.keys(ref).sort();
let bad = 0;

for (const lang of langs) {
  const bag = loadLang(lang);
  const problems = [];

  refKeys.filter(k => !(k in bag)).forEach(k => problems.push(`${k}: brak całego wpisu`));
  Object.keys(bag).filter(k => !(k in ref)).forEach(k => problems.push(`${k}: wpis nadmiarowy`));
  refKeys.filter(k => k in bag).forEach(k => diff(shape(ref[k]), shape(bag[k]), k, problems));

  const covered = refKeys.filter(k => k in bag).length;
  console.log(`\n=== ${lang} ===  ${covered}/${refKeys.length} wpisów, ${problems.length} różnic`);
  if (problems.length) {
    bad++;
    problems.slice(0, 40).forEach(p => console.log("  x " + p));
    if (problems.length > 40) console.log(`  … i ${problems.length - 40} więcej`);
  } else {
    console.log("  OK — kształt zgodny z " + REFERENCE);
  }
}

if (!langs.length) console.log("Brak innych języków do porównania.");
process.exit(bad ? 1 : 0);
