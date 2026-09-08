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
/* Ile różnic wypisać. Liczy się zawsze wszystkie; to jest tylko próg
   czytelności listy. PARITY_MAX=0 wypisuje wszystko. */
const MAX_SHOWN = process.env.PARITY_MAX === undefined
  ? 40
  : (Number(process.env.PARITY_MAX) || Infinity);

/** Mapa kod → locale czytana z silnika, żeby nie mieć drugiej kopii. */
function engineLocales() {
  const sandbox = { window: {}, console, Intl, document: { documentElement: { setAttribute() {} }, querySelectorAll: () => [] } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(readFileSync(join(ROOT, "assets", "js", "i18n.js"), "utf8"), sandbox, { filename: "i18n.js" });
  return sandbox.I18n.LOCALE;
}

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

/* ---------------- Napisy interfejsu: data/i18n/ui-<lang>.js ---------------- */

function loadUI(lang) {
  const path = join(I18N, `ui-${lang}.js`);
  if (!existsSync(path)) return null;
  const bag = {};
  const sandbox = { window: {}, console, LINGUAI: { addUI(_l, map) { Object.assign(bag, map); } } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(readFileSync(path, "utf8"), sandbox, { filename: `ui-${lang}.js` });
  return bag;
}

/**
 * Kategorie liczby mnogiej wymagane przez CLDR dla danego locale.
 * Angielski ma dwie, polski cztery, hiszpański i francuski trzy.
 * Nakładka skopiowana z angielskiej przechodzi milczkiem: brakującą
 * kategorię `plural()` podmienia na `other`, więc wychodzi „1 dni".
 */
function pluralCategories(locale) {
  return new Intl.PluralRules(locale).resolvedOptions().pluralCategories;
}

function checkUI(lang, locale, ref, out) {
  const bag = loadUI(lang);
  if (!bag) { out.push(`ui-${lang}.js: brak pliku`); return; }
  const refKeys = Object.keys(ref).sort();
  refKeys.filter(k => !(k in bag)).forEach(k => out.push(`ui.${k}: brak klucza`));
  Object.keys(bag).filter(k => !(k in ref)).forEach(k => out.push(`ui.${k}: klucz nadmiarowy`));

  const needed = pluralCategories(locale);
  refKeys.filter(k => k in bag).forEach(k => {
    const isPluralRef = ref[k] && typeof ref[k] === "object";
    const isPluralHere = bag[k] && typeof bag[k] === "object";
    if (isPluralRef !== isPluralHere) {
      out.push(`ui.${k}: ${isPluralRef ? "formy liczby" : "napis"} w ${REFERENCE}, ${isPluralHere ? "formy liczby" : "napis"} tutaj`);
      return;
    }
    if (!isPluralRef) return;
    needed.filter(c => !(c in bag[k])).forEach(c => out.push(`ui.${k}: brak formy „${c}" wymaganej przez ${locale}`));
  });
}

/* ---------------- Kształt: klucze i długości, bez treści ---------------- */

/**
 * Pola kopiowane w całości, nie łączone po indeksie.
 * `applyStrings` podmienia `theory` jednym przypisaniem (`copy` w i18n.js),
 * więc krótsza albo inaczej zbudowana tablica nie tworzy cichej dziury:
 * lekcja po prostu pokazuje bloki z nakładki. A ponieważ CLAUDE.md wymaga,
 * żeby blok `{contrast}` pisać od nowa dla każdego języka, liczba i rodzaj
 * bloków MUSZĄ się różnić — Niemcowi trzeba powiedzieć co innego niż Polakowi
 * i w innym miejscu. Porównywanie ich kształtu zgłaszałoby jako błąd to,
 * czego kurs wymaga. Sprawdzana zostaje obecność samego klucza.
 */
const FREE_FIELDS = ["theory"];

function withoutFreeFields(entry) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) return entry;
  const out = {};
  Object.keys(entry).forEach(k => { out[k] = FREE_FIELDS.includes(k) ? "<wolne>" : entry[k]; });
  return out;
}

function shape(v) {
  if (Array.isArray(v)) return { n: v.length, items: v.map(shape) };
  if (v && typeof v === "object") {
    const out = {};
    Object.keys(v).sort().forEach(k => { out[k] = shape(v[k]); });
    return out;
  }
  return typeof v;
}

/**
 * Zbiera różnice kształtu, ze ścieżką do miejsca.
 * Zbiera WSZYSTKIE: przycięcie należy do wypisywania (na końcu pliku),
 * nie do zbierania. Wcześniej ta funkcja przerywała pracę po czterdziestu
 * problemach, więc dopóki brakowało czterdziestu wpisów, różnice kształtu
 * w istniejących wpisach nie były w ogóle sprawdzane — a licznik pokazywał
 * równo tyle, ile brakujących wpisów, i wyglądał na czysty.
 */
function diff(a, b, path, out) {
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
const refUI = loadUI(REFERENCE);
const LOCALES = engineLocales();
let bad = 0;

for (const lang of langs) {
  const bag = loadLang(lang);
  const problems = [];

  refKeys.filter(k => !(k in bag)).forEach(k => problems.push(`${k}: brak całego wpisu`));
  Object.keys(bag).filter(k => !(k in ref)).forEach(k => problems.push(`${k}: wpis nadmiarowy`));
  refKeys.filter(k => k in bag)
    .forEach(k => diff(shape(withoutFreeFields(ref[k])), shape(withoutFreeFields(bag[k])), k, problems));

  if (!LOCALES[lang]) problems.push(`ui-${lang}.js: brak wpisu w LOCALE w assets/js/i18n.js`);
  else checkUI(lang, LOCALES[lang], refUI, problems);

  const covered = refKeys.filter(k => k in bag).length;
  console.log(`\n=== ${lang} ===  ${covered}/${refKeys.length} wpisów, ${problems.length} różnic`);
  if (problems.length) {
    bad++;
    problems.slice(0, MAX_SHOWN).forEach(p => console.log("  x " + p));
    if (problems.length > MAX_SHOWN) console.log(`  … i ${problems.length - MAX_SHOWN} więcej`);
  } else {
    console.log("  OK — kształt zgodny z " + REFERENCE);
  }
}

if (!langs.length) console.log("Brak innych języków do porównania.");
process.exit(bad ? 1 : 0);
