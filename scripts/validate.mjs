/* ============================================================
   validate.mjs — kontrola spójności danych kursu
   Uruchomienie:  node scripts/validate.mjs
   Sprawdza: duplikaty id, brakujące pola, poprawność ćwiczeń,
   zgodność odpowiedzi mcq z liczbą opcji, statystyki.
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const EX_TYPES = new Set([
  "mcq", "multi", "fill", "cloze", "trans", "order", "match",
  "conj", "gender", "listen", "speak", "dialogue", "truefalse",
  /* minpair powstaje z data/core/phonetics.js w czasie działania, nie
     stoi w żadnej lekcji — ale silnik go zna, a ta lista jest spisem
     tego, co silnik zna, nie tego, co akurat występuje w danych. */
  "minpair"
]);

const levels = [];
const byCode = {};
const errors = [];
const warnings = [];

const sandbox = {
  window: {},
  console,
  LINGUAI: {
    registerLevel(lv) {
      if (byCode[lv.code]) errors.push(`Poziom ${lv.code} zarejestrowany dwa razy`);
      lv.units = lv.units || [];
      levels.push(lv);
      byCode[lv.code] = lv;
    },
    addUnits(code, units) {
      if (!byCode[code]) { errors.push(`addUnits dla nieznanego poziomu: ${code}`); return; }
      byCode[code].units = byCode[code].units.concat(units);
    }
  }
};
sandbox.window = sandbox;
sandbox.Core = { registry: { levels } };
vm.createContext(sandbox);

function run(path) {
  try {
    vm.runInContext(readFileSync(join(ROOT, path), "utf8"), sandbox, { filename: path });
  } catch (e) {
    errors.push(`${path}: ${e.message}`);
  }
}

/* Język wyjaśnień do sprawdzenia:  node scripts/validate.mjs [pl|en] */
const LANG = process.argv[2] || "pl";

run("assets/js/i18n.js");
const dataFiles = readdirSync(join(ROOT, "data", "core"))
  .filter(f => /^[abc]\d-\d+\.js$/.test(f))
  .sort();
const ALL = ["curriculum-index.js", ...dataFiles, "conversations.js", "grammar-reference.js", "phonetics.js", "readings.js", "writing.js"];
ALL.forEach(f => run(join("data", "core", f)));
/* Migawka warstwy neutralnej ZANIM nakładka wpisze teksty ucznia: po
   applyStrings te same obiekty niosą już tłumaczenia i skan nic nie znaczy. */
const neutralneDane = JSON.parse(JSON.stringify({
  levels: levels,
  conversations: sandbox.CONVERSATIONS || [],
  grammar: (sandbox.GRAMMAR_REF || []).map(s => ({ items: (s.items || []).map(i => ({ id: i.id, cefr: i.cefr })) })),
  phonetics: sandbox.PHONETICS || [],
  writing: (sandbox.WRITING || []).map(w => ({ id: w.id, titleIt: w.titleIt, model: w.model, items: (w.items || []).map(i => ({ a: i.a })) })),
  readings: (sandbox.READINGS || []).map(r => ({ id: r.id, titleIt: r.titleIt, sentences: r.sentences, questions: r.questions }))
}));

ALL.forEach(f => run(join("data", "i18n", LANG, f)));
sandbox.LINGUAI.applyStrings(LANG);

/* ---------------- Walidacja ---------------- */
const ids = new Map();
let nUnits = 0, nLessons = 0, nEx = 0, nVocab = 0;
const exByType = {};
/* {where, tag} zbierane przy lekcjach i ćwiczeniach, weryfikowane po GRAMMAR_REF */
const usedTags = [];

function checkExercise(ex, where) {
  if (!ex.t) { errors.push(`${where}: ćwiczenie bez pola t`); return; }
  if (ex.tag !== undefined) usedTags.push({ where: `${where} tag`, tag: ex.tag });
  if (!EX_TYPES.has(ex.t)) errors.push(`${where}: nieznany typ „${ex.t}”`);
  exByType[ex.t] = (exByType[ex.t] || 0) + 1;

  if (ex.t === "mcq" || ex.t === "truefalse") {
    const n = (ex.opts || []).length;
    if (ex.t === "mcq" && n < 2) errors.push(`${where}: mcq ma mniej niż 2 opcje`);
    if (typeof ex.a !== "number") errors.push(`${where}: mcq bez indeksu odpowiedzi`);
    else if (n && (ex.a < 0 || ex.a >= n)) errors.push(`${where}: indeks odpowiedzi poza zakresem`);
  }
  if (ex.t === "multi") {
    if (!Array.isArray(ex.a) || !ex.a.length) errors.push(`${where}: multi bez tablicy odpowiedzi`);
    else ex.a.forEach(i => { if (i < 0 || i >= (ex.opts || []).length) errors.push(`${where}: multi — indeks poza zakresem`); });
  }
  if (ex.t === "fill" || ex.t === "trans") {
    const acc = Array.isArray(ex.a) ? ex.a : [ex.a];
    if (!acc.length || acc.some(x => typeof x !== "string" || !x.length)) {
      errors.push(`${where}: ${ex.t} bez poprawnej odpowiedzi`);
    }
  }
  if (ex.t === "cloze") {
    const n = (String(ex.text || "").match(/\{\{\d+\}\}/g) || []).length;
    if (!Array.isArray(ex.gaps)) errors.push(`${where}: cloze bez gaps`);
    else if (n !== ex.gaps.length) errors.push(`${where}: cloze — ${n} luk, ${ex.gaps.length} odpowiedzi`);
  }
  if (ex.t === "order") {
    if (!Array.isArray(ex.tokens) || ex.tokens.length < 2) errors.push(`${where}: order bez tokenów`);
    if (!ex.a) errors.push(`${where}: order bez odpowiedzi`);
  }
  if (ex.t === "match") {
    if (!Array.isArray(ex.pairs) || ex.pairs.length < 2) errors.push(`${where}: match bez par`);
  }
  if (ex.t === "conj") {
    if (!ex.verb) errors.push(`${where}: conj bez czasownika`);
  }
  if (ex.t === "gender") {
    if (!Array.isArray(ex.items) || !ex.items.length) errors.push(`${where}: gender bez items`);
    else ex.items.forEach(it => { if (!it.a) errors.push(`${where}: gender — brak poprawnej formy dla „${it.it}”`); });
  }
  if (ex.t === "listen" && !ex.it) errors.push(`${where}: listen bez tekstu włoskiego`);
  if (ex.t === "speak" && !ex.it) errors.push(`${where}: speak bez tekstu włoskiego`);
  if (ex.t === "dialogue") {
    if (!Array.isArray(ex.lines) || !ex.lines.length) errors.push(`${where}: dialogue bez linii`);
    else ex.lines.forEach((l, i) => {
      if (l.choices && typeof l.a !== "number") errors.push(`${where}: dialogue linia ${i} bez indeksu odpowiedzi`);
    });
  }
}

function checkLesson(l, lv, unit) {
  if (!l.id) { errors.push(`${lv.code}/${unit.id}: lekcja bez id`); return; }
  if (ids.has(l.id)) errors.push(`Duplikat id lekcji: ${l.id}`);
  ids.set(l.id, true);
  if (!l.titleIt) errors.push(`${l.id}: brak titleIt`);
  if (!l.title) errors.push(`${l.id}: brak title`);

  /* Tagi zagadnień: zbierane tutaj, sprawdzane niżej, bo lista poprawnych
     id powstaje dopiero przy czytaniu GRAMMAR_REF. */
  if (!Array.isArray(l.tags) || !l.tags.length) {
    errors.push(`${l.id}: brak tags — quaderno błędów nie ma czym oznaczyć karty`);
  } else {
    l.tags.forEach(t => usedTags.push({ where: `${l.id} tags`, tag: t }));
  }

  nLessons++;
  (l.vocab || []).forEach(v => {
    nVocab++;
    if (!v.it || !v.tr) errors.push(`${l.id}: pozycja słownika bez it/tr`);
  });
  const ex = l.exercises || [];
  if (!ex.length) warnings.push(`${l.id}: brak ćwiczeń`);
  ex.forEach((e, i) => { nEx++; checkExercise(e, `${l.id}#${i + 1}`); });
}

levels.forEach(lv => {
  if (!lv.units.length) warnings.push(`Poziom ${lv.code}: brak jednostek`);
  lv.units.forEach(u => {
    nUnits++;
    if (ids.has(u.id)) errors.push(`Duplikat id jednostki: ${u.id}`);
    ids.set(u.id, true);
    (u.lessons || []).forEach(l => checkLesson(l, lv, u));
    if (u.test) checkLesson(u.test, lv, u);
    else warnings.push(`${u.id}: brak sprawdzianu`);
  });
});

/* konwersacje */
const convIds = new Set();
(sandbox.CONVERSATIONS || []).forEach(c => {
  if (convIds.has(c.id)) errors.push(`Duplikat id rozmowy: ${c.id}`);
  convIds.add(c.id);
  if (!Array.isArray(c.turns) || !c.turns.length) errors.push(`Rozmowa ${c.id}: brak tur`);
  (c.turns || []).forEach((t, i) => {
    if (t.sp === "TY" && !(t.accept || t.it)) errors.push(`Rozmowa ${c.id} tura ${i}: brak akceptowanych odpowiedzi`);
    if (t.sp !== "TY" && !t.it) errors.push(`Rozmowa ${c.id} tura ${i}: brak kwestii włoskiej`);
  });
});

/* gramatyka */
const gramIds = new Set();
(sandbox.GRAMMAR_REF || []).forEach(sec => {
  (sec.items || []).forEach(it => {
    if (gramIds.has(it.id)) errors.push(`Duplikat id hasła gramatycznego: ${it.id}`);
    gramIds.add(it.id);
    if (!it.body) errors.push(`Hasło ${it.id}: brak treści`);
  });
});

/* ---------------- Czytanki ---------------- */
const readIds = new Set();
(sandbox.READINGS || []).forEach(r => {
  if (readIds.has(r.id)) errors.push(`Duplikat id czytanki: ${r.id}`);
  readIds.add(r.id);
  if (!Array.isArray(r.sentences) || r.sentences.length < 3) {
    errors.push(`Czytanka ${r.id}: mniej niż trzy zdania`);
  }
  if (!r.titleIt) errors.push(`Czytanka ${r.id}: brak titleIt`);
  if (!r.title) errors.push(`Czytanka ${r.id}: brak tytułu w nakładce`);
  /* Glosy łączą się PO INDEKSIE, więc różna długość to cicha dziura:
     ostatnie słowo dostałoby tłumaczenie poprzedniego albo żadne. */
  if (r.glossIt && (!r.gloss || r.gloss.length !== r.glossIt.length)) {
    errors.push(`Czytanka ${r.id}: ${(r.glossIt || []).length} słów, ${(r.gloss || []).length} glos`);
  }
  if (!Array.isArray(r.questions) || !r.questions.length) {
    errors.push(`Czytanka ${r.id}: brak pytań`);
  }
  (r.questions || []).forEach((q, i) => checkExercise(q, `czytanka ${r.id}#${i + 1}`));
  if (r.tag) usedTags.push({ where: `czytanka ${r.id}`, tag: r.tag });
});

/* Zadania pisemne */
const writeIds = new Set();
(sandbox.WRITING || []).forEach(w => {
  if (writeIds.has(w.id)) errors.push(`Duplikat id zadania pisemnego: ${w.id}`);
  writeIds.add(w.id);
  if (!w.title) errors.push(`Zadanie ${w.id}: brak tytułu w nakładce`);
  if (!w.brief) errors.push(`Zadanie ${w.id}: brak polecenia w nakładce`);
  if (w.kind === "compose") {
    if (!Array.isArray(w.requires) || !w.requires.length) errors.push(`Zadanie ${w.id}: brak wymagań`);
    if (!w.model) errors.push(`Zadanie ${w.id}: brak tekstu modelowego`);
    (w.requires || []).forEach((r, i) => {
      if (!r.verb && !r.word && !r.any) errors.push(`Zadanie ${w.id}, wymaganie ${i}: puste`);
    });
  } else if (w.kind === "translate") {
    if (!Array.isArray(w.items) || !w.items.length) errors.push(`Zadanie ${w.id}: brak zdań`);
    (w.items || []).forEach((it, i) => {
      if (!Array.isArray(it.a) || !it.a.length) errors.push(`Zadanie ${w.id}, zdanie ${i}: brak wersji włoskiej`);
      if (!it.q) errors.push(`Zadanie ${w.id}, zdanie ${i}: brak zdania źródłowego w nakładce`);
    });
  } else {
    errors.push(`Zadanie ${w.id}: nieznany rodzaj „${w.kind}”`);
  }
  if (w.tag) usedTags.push({ where: `zadanie ${w.id}`, tag: w.tag });
});

/* Pary minimalne */
(sandbox.PHONETICS || []).forEach(z => {
  if (!Array.isArray(z.pairs) || !z.pairs.length) errors.push(`Zbiór ${z.id}: brak par`);
  (z.pairs || []).forEach((para, i) => {
    if (!para.a || !para.b) errors.push(`Zbiór ${z.id}, para ${i}: brak wyrazu`);
    if (para.a === para.b) errors.push(`Zbiór ${z.id}, para ${i}: dwa razy ten sam wyraz`);
  });
  if (z.tag) usedTags.push({ where: `zbiór ${z.id}`, tag: z.tag });
});

/* ---------------- Warstwa neutralna: żadnego języka ucznia ----------------
   Sprawdzane na DANYCH, nie na tekście pliku. Grep po pliku myli się w obie
   strony: komentarz po polsku wygląda jak wyciek, a hiszpańskie „ñ" w danych
   przechodzi, jeśli akurat nikt go nie szukał. Czytamy więc same wartości
   z warstwy neutralnej, ZANIM nałoży się nakładka.

   Zbiór liter: te, których włoski nie używa nigdy. Włoskie à è é ì í ò ó ù ú
   są dozwolone i nie mogą tu wejść, bo „perché" jest poprawnym włoskim.

   GRANICA TEGO GATE, żeby nikt nie brał go za więcej, niż jest: łapie
   wyłącznie litery spoza włoskiego alfabetu. Angielskie „house" ani
   polskie „dziadek" przez niego nie przejdą — bo nie mają czego. Na to
   nie ma automatu i zostaje czytanie danych oczami. */
const OBCE_LITERY = /[ąęłżźćńśñçäöüßğşıåæøđčšžřůõ]/i;

function skanujNeutralne(wezel, gdzie, wynik, glebokosc) {
  if (glebokosc > 8 || wezel == null) return;
  if (typeof wezel === "string") {
    if (OBCE_LITERY.test(wezel)) wynik.push(`${gdzie}: „${wezel.slice(0, 60)}"`);
    return;
  }
  if (Array.isArray(wezel)) {
    wezel.forEach((v, i) => skanujNeutralne(v, `${gdzie}[${i}]`, wynik, glebokosc + 1));
    return;
  }
  if (typeof wezel === "object") {
    Object.keys(wezel).forEach(k => skanujNeutralne(wezel[k], `${gdzie}.${k}`, wynik, glebokosc + 1));
  }
}

const wyciekiJezyka = [];
skanujNeutralne(neutralneDane, "core", wyciekiJezyka, 0);
wyciekiJezyka.slice(0, 10).forEach(w => {
  errors.push(`Warstwa neutralna zawiera język ucznia — ${w}`);
});
if (wyciekiJezyka.length > 10) {
  errors.push(`…i jeszcze ${wyciekiJezyka.length - 10} takich miejsc`);
}

/* Tagi zagadnień muszą wskazywać na istniejące hasło. Wymyślony tag nie
   jest błędem składni: karta błędu dostałaby etykietę, której nie da się
   przetłumaczyć ani kliknąć, i widać by to było dopiero w interfejsie. */
const tagsNieznane = new Map();
usedTags.forEach(u => {
  if (gramIds.has(u.tag)) return;
  if (!tagsNieznane.has(u.tag)) tagsNieznane.set(u.tag, []);
  tagsNieznane.get(u.tag).push(u.where);
});
tagsNieznane.forEach((gdzie, tag) => {
  errors.push(`Nieznany tag „${tag}” (${gdzie.length}×, np. ${gdzie[0]}) — brak takiego hasła w GRAMMAR_REF`);
});

/* ---------------- Raport ---------------- */
console.log("\n=== STATYSTYKI ===");
levels.forEach(lv => {
  const lessons = lv.units.reduce((n, u) => n + (u.lessons || []).length + (u.test ? 1 : 0), 0);
  const exs = lv.units.reduce((n, u) =>
    n + (u.lessons || []).reduce((m, l) => m + (l.exercises || []).length, 0) +
    (u.test ? (u.test.exercises || []).length : 0), 0);
  console.log(`  ${lv.code.padEnd(3)} ${String(lv.units.length).padStart(2)} jednostek  ${String(lessons).padStart(3)} lekcji  ${String(exs).padStart(4)} ćwiczeń`);
});
console.log(`  ---`);
console.log(`  RAZEM: ${nUnits} jednostek, ${nLessons} lekcji, ${nEx} ćwiczeń, ${nVocab} pozycji słownika`);
console.log(`  Rozmowy: ${(sandbox.CONVERSATIONS || []).length} · Hasła gramatyczne: ${gramIds.size}`);
console.log("\n=== TYPY ĆWICZEŃ ===");
Object.keys(exByType).sort((a, b) => exByType[b] - exByType[a])
  .forEach(t => console.log(`  ${t.padEnd(11)} ${exByType[t]}`));

if (warnings.length) {
  console.log(`\n=== OSTRZEŻENIA (${warnings.length}) ===`);
  warnings.slice(0, 30).forEach(w => console.log("  ! " + w));
}
if (errors.length) {
  console.log(`\n=== BŁĘDY (${errors.length}) ===`);
  errors.slice(0, 60).forEach(e => console.log("  x " + e));
  process.exit(1);
}
console.log("\nOK — brak błędów.\n");
