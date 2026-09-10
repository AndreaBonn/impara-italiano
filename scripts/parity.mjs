/* ============================================================
   parity.mjs — does every language say the same as Polish?

   The overlays join the neutral layer BY INDEX, so a shorter array is not a
   syntax error: it is a silent hole visible only in the browser, in one
   lesson, in one exercise. This script compares the SHAPE (keys and array
   lengths, not content) of every overlay with the Polish one and prints the
   differences.

   Polish is the reference, because it is complete and checked.

   Usage:  node scripts/parity.mjs [language-code …]
   With no arguments it checks every directory in data/i18n/.
   It exits with code 1 on any difference — suitable for CI.
   ============================================================ */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const I18N = join(ROOT, "data", "i18n");
const REFERENCE = "pl";
/* How many differences to print. All of them are always counted; this is
   only a readability threshold for the list. PARITY_MAX=0 prints everything. */
const MAX_SHOWN = process.env.PARITY_MAX === undefined
  ? 40
  : (Number(process.env.PARITY_MAX) || Infinity);

/** The code -> locale map read from the engine, so as not to keep a second copy. */
function engineLocales() {
  const sandbox = { window: {}, console, Intl, document: { documentElement: { setAttribute() {} }, querySelectorAll: () => [] } };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(readFileSync(join(ROOT, "assets", "js", "i18n.js"), "utf8"), sandbox, { filename: "i18n.js" });
  return sandbox.I18n.LOCALE;
}

/* ---------------- Loading one language's overlays ---------------- */

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

/* ---------------- Interface strings: data/i18n/ui-<lang>.js ---------------- */

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
 * The plural categories CLDR requires for a given locale.
 * English has two, Polish four, Spanish and French three.
 * An overlay copied from the English one passes silently: `plural()`
 * substitutes `other` for a missing category, so out comes "1 dni".
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

/* ---------------- The shape: keys and lengths, no content ---------------- */

/**
 * The fields copied wholesale rather than joined by index.
 * `applyStrings` replaces `theory` with a single assignment (`copy` in
 * i18n.js), so a shorter or differently built array creates no silent hole:
 * the lesson simply shows the blocks from the overlay. And since CLAUDE.md
 * requires the `{contrast}` block to be written from scratch for every
 * language, the number and kind of blocks MUST differ — a German has to be
 * told something different from a Pole, and in a different place. Comparing
 * their shape would report as an error the very thing the course requires.
 * What stays checked is the presence of the key itself.
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
 * Collects the shape differences, with a path to the place.
 * It collects ALL of them: truncation belongs to the printing (at the end of
 * the file), not to the collecting. This function used to stop after forty
 * problems, so as long as forty entries were missing, shape differences in
 * the existing entries were not checked at all — and the counter showed
 * exactly as many as there were missing entries and looked clean.
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

/* ---------------- The run ---------------- */

const wanted = process.argv.slice(2);
const langs = (wanted.length ? wanted : readdirSync(I18N).filter(f => statSync(join(I18N, f)).isDirectory()))
  .filter(l => l !== REFERENCE);

if (!existsSync(join(I18N, REFERENCE))) {
  console.error(`Brak katalogu odniesienia data/i18n/${REFERENCE}/`);
  process.exit(1);
}

/* ---------------- An asymmetric category: false friends ----------------
   The "int:" entries are NOT meant to be the same in every language: the
   trap either exists or it does not, depending on what the student has in
   their head. So we compare them against the `for` DECLARATION in the
   neutral layer, and not against Polish.

   Disabling the gate on this category (like FREE_FIELDS for "theory") would
   be simpler and worse: a shorter list looks exactly like a list, so a
   missing explanation would never report itself.
   -------------------------------------------------------------------- */
function interferenceFor() {
  const box = { window: {}, console };
  box.window = box;
  vm.createContext(box);
  vm.runInContext(readFileSync(join(ROOT, "data", "core", "interference.js"), "utf8"), box);
  const mapa = new Map();
  for (const v of box.INTERFERENCE || []) mapa.set("int:" + v.id, new Set(v.for || []));
  return mapa;
}

const INT = interferenceFor();

/** Whether this entry IS meant to exist in that language's overlay. */
function oczekiwany(klucz, lang) {
  const f = INT.get(klucz);
  return f ? f.has(lang) : true;
}

const ref = loadLang(REFERENCE);
const refKeys = Object.keys(ref).sort();
const refUI = loadUI(REFERENCE);
const LOCALES = engineLocales();
let bad = 0;

for (const lang of langs) {
  const bag = loadLang(lang);
  const problems = [];

  /* The "int:" keys take a separate path: presence is decided by `for`, not by Polish. */
  const zwykle = refKeys.filter(k => !INT.has(k));

  zwykle.filter(k => !(k in bag)).forEach(k => problems.push(`${k}: brak całego wpisu`));
  Object.keys(bag).filter(k => !INT.has(k) && !(k in ref))
    .forEach(k => problems.push(`${k}: wpis nadmiarowy`));
  zwykle.filter(k => k in bag)
    .forEach(k => diff(shape(withoutFreeFields(ref[k])), shape(withoutFreeFields(bag[k])), k, problems));

  for (const [klucz] of INT) {
    const jest = klucz in bag;
    const ma = oczekiwany(klucz, lang);
    if (ma && !jest) problems.push(`${klucz}: brak wyjaśnienia, choć „for" wymienia ${lang}`);
    if (!ma && jest) problems.push(`${klucz}: wyjaśnienie jest, ale „for" nie wymienia ${lang}`);
    if (ma && jest) {
      ["looks", "mean", "why"].forEach(pole => {
        if (!bag[klucz] || !bag[klucz][pole]) problems.push(`${klucz}.${pole}: puste`);
      });
    }
  }

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
