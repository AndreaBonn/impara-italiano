/* ============================================================
   validate.mjs — a consistency check on the course data
   Usage:  node scripts/validate.mjs
   It checks: duplicate ids, missing fields, exercise correctness, whether
   the mcq answer agrees with the number of options, and the statistics.
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const EX_TYPES = new Set([
  "mcq", "multi", "fill", "cloze", "trans", "order", "match",
  "conj", "gender", "listen", "speak", "dialogue", "truefalse",
  /* minpair is produced from data/core/phonetics.js at runtime and stands
     in no lesson — but the engine knows it, and this list is an inventory of
     what the engine knows, not of what happens to occur in the data. */
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
    },
    /* The library appends to the same list readings.js assigns whole, so
       every check below sees the long texts as what they are: readings. */
    addReadings(lista) {
      sandbox.READINGS = (sandbox.READINGS || []).concat(lista || []);
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

/* The language of explanations to check:  node scripts/validate.mjs [pl|en] */
const LANG = process.argv[2] || "pl";

run("assets/js/i18n.js");
run("assets/js/i18n-merge.js");
const dataFiles = readdirSync(join(ROOT, "data", "core"))
  .filter(f => /^[abc]\d-\d+\.js$/.test(f))
  .sort();
const ALL = ["curriculum-index.js", ...dataFiles, "conversations.js", "grammar-reference.js", "phonetics.js", "readings.js", "writing.js"];
/* Loaded but NOT overlaid: the free-conversation scenes have no student-language
   layer at all. Their titles live in the interface dictionaries, because every
   other field is Italian spoken by the partner. They are read here for one
   reason — the scan below, which is what keeps a Polish word out of a file
   that is supposed to be Italian. */
run(join("data", "core", "chat-scenarios.js"));
ALL.forEach(f => run(join("data", "core", f)));
/* The library, one file per level. Enumerated from the directory: a text
   added to a level nobody remembered to list here would skip every check
   below — and the tag check is one of them, so an invented topic id would
   reach the student's mistake notebook as a raw string. That is exactly how
   three of them got in. */
const biblioteka = readdirSync(join(ROOT, "data", "core"))
  .filter(f => /^library-[abc]\d\.js$/.test(f))
  .sort();
/* Which text came from which library file. The length check below applies to
   these and not to the short readings of `readings.js`, and the difference
   cannot be guessed from the data: it is where the text is declared. */
const dlugieTeksty = new Map();
biblioteka.forEach(f => {
  const przed = (sandbox.READINGS || []).length;
  run(join("data", "core", f));
  (sandbox.READINGS || []).slice(przed).forEach(r => { if (r && r.id) dlugieTeksty.set(r.id, f); });
});

/* A snapshot of the neutral layer BEFORE the overlay writes the student's
   texts in: after applyStrings those same objects already carry
   translations and the scan means nothing. */
const neutralneDane = JSON.parse(JSON.stringify({
  levels: levels,
  conversations: sandbox.CONVERSATIONS || [],
  grammar: (sandbox.GRAMMAR_REF || []).map(s => ({ items: (s.items || []).map(i => ({ id: i.id, cefr: i.cefr })) })),
  phonetics: sandbox.PHONETICS || [],
  writing: (sandbox.WRITING || []).map(w => ({ id: w.id, titleIt: w.titleIt, model: w.model, items: (w.items || []).map(i => ({ a: i.a })) })),
  readings: (sandbox.READINGS || []).map(r => ({ id: r.id, titleIt: r.titleIt, sentences: r.sentences, questions: r.questions })),
  chat: sandbox.CHAT_SCENARIOS || []
}));

ALL.forEach(f => run(join("data", "i18n", LANG, f)));
/* …and the library's own overlays, by the same names as its neutral files.
   Without them every long text reports a missing title, which is what this
   gate is for: the same complaint a student would see as an empty heading. */
biblioteka.forEach(f => run(join("data", "i18n", LANG, f)));
sandbox.LINGUAI.applyStrings(LANG);

/* ---------------- Validation ---------------- */
const ids = new Map();
let nUnits = 0, nLessons = 0, nEx = 0, nVocab = 0;
const exByType = {};
/* {where, tag} collected at lessons and exercises, verified against GRAMMAR_REF */
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
  /* The five-minute session reads the level from this prefix to load the
     lessons a student finished; a lesson filed under another level would
     load the wrong file and its words would silently never come up. */
  if (l.id.split("-")[0] !== lv.code.toLowerCase()) errors.push(`${l.id}: prefiks id nie zgadza się z poziomem ${lv.code}`);
  if (!l.titleIt) errors.push(`${l.id}: brak titleIt`);
  if (!l.title) errors.push(`${l.id}: brak title`);

  /* Topic tags: collected here, checked below, because the list of valid ids
     only comes into being when GRAMMAR_REF is read. */
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

/* conversations */
const convIds = new Set();
(sandbox.CONVERSATIONS || []).forEach(c => {
  if (convIds.has(c.id)) errors.push(`Duplikat id rozmowy: ${c.id}`);
  convIds.add(c.id);
  if (!Array.isArray(c.turns) || !c.turns.length) errors.push(`Rozmowa ${c.id}: brak tur`);
  (c.turns || []).forEach((t, i) => {
    if (t.sp === "TY" && !(t.accept || t.it || t.opts)) errors.push(`Rozmowa ${c.id} tura ${i}: brak akceptowanych odpowiedzi`);
    if (t.sp !== "TY" && !t.it) errors.push(`Rozmowa ${c.id} tura ${i}: brak kwestii włoskiej`);
    (t.opts || []).forEach((o, k) => {
      if (!Array.isArray(o.accept) || !o.accept.length)
        errors.push(`Rozmowa ${c.id} tura ${i} gałąź ${k}: brak akceptowanych odpowiedzi`);
      if (!o.hintIt) errors.push(`Rozmowa ${c.id} tura ${i} gałąź ${k}: brak podpowiedzi po włosku`);
    });
    if (t.opts && t.opts.length < 2) errors.push(`Rozmowa ${c.id} tura ${i}: rozwidlenie z jedną gałęzią`);
  });
  sprawdzGraf(c);
});

/* ════════════════════════════════════════════════════════════════
   Branching conversations: three things the data does not show.

   A target that does not exist does not crash the engine — `indeksTury`
   then returns the end of the dialogue, so the conversation simply BREAKS
   OFF in the middle and looks finished. A turn nothing leads to is written,
   translated, recorded, and nobody will ever see it. And a loop with no way
   out loops the student with no message at all.

   Reachability is computed OVER the graph, not by numbers: once there are
   jumps, the order in the array no longer says what follows what.
   ════════════════════════════════════════════════════════════════ */
/** The graph edges: for every turn, the list of turn numbers it leads to.
    Computed ONCE, because this is the only place that reports a jump into
    the void — computed on the fly, the same error would come out as many
    times as the fixed point below iterates. A number >= the array length
    means "the end of the dialogue". */
function krawedzieGrafu(c) {
  const tury = c.turns || [];
  const poId = new Map();
  tury.forEach((t, i) => {
    if (!t.id) return;
    if (poId.has(t.id)) errors.push(`Rozmowa ${c.id}: powtórzone id tury "${t.id}"`);
    poId.set(t.id, i);
  });
  return tury.map((t, i) => (t.opts ? t.opts.map(o => o.go) : [t.go]).map(cel => {
    if (!cel) return i + 1;
    if (poId.has(cel)) return poId.get(cel);
    errors.push(`Rozmowa ${c.id} tura ${i}: skok do nieistniejącej tury "${cel}"`);
    return tury.length;
  }));
}

function sprawdzGraf(c) {
  const tury = c.turns || [];
  if (!tury.length) return;
  const kraw = krawedzieGrafu(c);

  const osiagalne = new Set([0]);
  const stos = [0];
  while (stos.length) {
    const i = stos.pop();
    if (i >= tury.length) continue;
    kraw[i].forEach(n => { if (!osiagalne.has(n)) { osiagalne.add(n); stos.push(n); } });
  }
  tury.forEach((t, i) => {
    if (!osiagalne.has(i)) errors.push(`Rozmowa ${c.id} tura ${i}: nieosiągalna z początku dialogu`);
  });

  /* An exit exists if from a turn you can reach past the end of the array.
     We compute backwards to a fixed point rather than recursively: a graph
     with branches has cycles and recursion would fall into the first one. */
  const wychodzi = new Set();
  for (let rosnie = true; rosnie;) {
    rosnie = false;
    tury.forEach((t, i) => {
      if (wychodzi.has(i)) return;
      if (kraw[i].some(n => n >= tury.length || wychodzi.has(n))) { wychodzi.add(i); rosnie = true; }
    });
  }
  tury.forEach((t, i) => {
    if (osiagalne.has(i) && !wychodzi.has(i))
      errors.push(`Rozmowa ${c.id} tura ${i}: pętla bez wyjścia, dialog się nie kończy`);
  });
}

/* grammar */
const gramIds = new Set();
(sandbox.GRAMMAR_REF || []).forEach(sec => {
  (sec.items || []).forEach(it => {
    if (gramIds.has(it.id)) errors.push(`Duplikat id hasła gramatycznego: ${it.id}`);
    gramIds.add(it.id);
    if (!it.body) errors.push(`Hasło ${it.id}: brak treści`);
  });
});

/* ---------------- The readings ---------------- */

/* The band the plan asks of every library text (specs/006-input-e-produzione,
   Definition of Done for O1). It sat there as prose for a whole phase while A1
   stood at 289 words and A2 at 381: the number was written, nothing measured
   it, and the phase closed green. Both bounds are checked, because both come
   from the plan — raising the ceiling is a decision to take there, in the open,
   not a line to quietly exceed here. */
const MIN_SLOW = 400;
const MAX_SLOW = 800;
function ileSlow(zdania) {
  return (zdania || []).join(" ").split(/\s+/).filter(Boolean).length;
}

const readIds = new Set();
(sandbox.READINGS || []).forEach(r => {
  if (readIds.has(r.id)) errors.push(`Duplikat id czytanki: ${r.id}`);
  readIds.add(r.id);
  if (!Array.isArray(r.sentences) || r.sentences.length < 3) {
    errors.push(`Czytanka ${r.id}: mniej niż trzy zdania`);
  }
  if (dlugieTeksty.has(r.id)) {
    const slow = ileSlow(r.sentences);
    if (slow < MIN_SLOW || slow > MAX_SLOW) {
      errors.push(
        `Biblioteka ${r.id} (${dlugieTeksty.get(r.id)}): ${slow} słów, poza ${MIN_SLOW}-${MAX_SLOW}`
      );
    }
  }
  if (!r.titleIt) errors.push(`Czytanka ${r.id}: brak titleIt`);
  if (!r.title) errors.push(`Czytanka ${r.id}: brak tytułu w nakładce`);
  /* The glosses join BY INDEX, so a different length is a silent hole: the
     last word would get the previous one's translation, or none. */
  if (r.glossIt && (!r.gloss || r.gloss.length !== r.glossIt.length)) {
    errors.push(`Czytanka ${r.id}: ${(r.glossIt || []).length} słów, ${(r.gloss || []).length} glos`);
  }
  if (!Array.isArray(r.questions) || !r.questions.length) {
    errors.push(`Czytanka ${r.id}: brak pytań`);
  }
  (r.questions || []).forEach((q, i) => checkExercise(q, `czytanka ${r.id}#${i + 1}`));
  if (r.tag) usedTags.push({ where: `czytanka ${r.id}`, tag: r.tag });
});

/* The writing tasks */
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

/* The minimal pairs */
(sandbox.PHONETICS || []).forEach(z => {
  if (!Array.isArray(z.pairs) || !z.pairs.length) errors.push(`Zbiór ${z.id}: brak par`);
  (z.pairs || []).forEach((para, i) => {
    if (!para.a || !para.b) errors.push(`Zbiór ${z.id}, para ${i}: brak wyrazu`);
    if (para.a === para.b) errors.push(`Zbiór ${z.id}, para ${i}: dwa razy ten sam wyraz`);
  });
  if (z.tag) usedTags.push({ where: `zbiór ${z.id}`, tag: z.tag });
});

/* ---------------- The neutral layer: no student language ----------------
   Checked against the DATA, not against the text of the file. A grep over
   the file errs both ways: a Polish comment looks like a leak, and a Spanish
   "ñ" in the data passes if nobody happened to look for it. So we read the
   values of the neutral layer alone, BEFORE the overlay is applied.

   The set of letters: the ones Italian never uses. The Italian à è é ì í ò ó
   ù ú are allowed and must not enter here, because "perché" is correct
   Italian.

   THE LIMIT OF THIS GATE, so that nobody takes it for more than it is: it
   catches only letters outside the Italian alphabet. Neither the English
   "house" nor the Polish "dziadek" will be caught — there is nothing in
   them to catch. There is no automaton for that and what remains is reading
   the data with your eyes. */
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

/* Topic tags have to point at an existing entry. An invented tag is not a
   syntax error: a mistake card would get a label that cannot be translated
   or clicked, and it would only show in the interface. */
const tagsNieznane = new Map();
usedTags.forEach(u => {
  if (gramIds.has(u.tag)) return;
  if (!tagsNieznane.has(u.tag)) tagsNieznane.set(u.tag, []);
  tagsNieznane.get(u.tag).push(u.where);
});
tagsNieznane.forEach((gdzie, tag) => {
  errors.push(`Nieznany tag „${tag}” (${gdzie.length}×, np. ${gdzie[0]}) — brak takiego hasła w GRAMMAR_REF`);
});

/* ---------------- The report ---------------- */
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
