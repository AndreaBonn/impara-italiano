/* ============================================================
   split_data.mjs — rozdziela dane kursu na warstwę neutralną
   językowo (data/core/) i warstwę tekstów ucznia (data/i18n/pl/).

   Uruchomienie jednorazowe, przy przejściu na wiele języków
   bazowych. Potem źródłem prawdy są pliki wynikowe, nie ten skrypt.

   Klucz nierozpoznany w żadnym węźle przerywa pracę wyjątkiem:
   pole może zostać przeniesione albo przetłumaczone, nigdy zgubione.

   Uruchomienie:  node scripts/split_data.mjs
   ============================================================ */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANG = "pl";

/* ---------------- Wczytanie danych, plik po pliku ---------------- */

const levels = [];
const byCode = {};
let captured = [];

const sandbox = {
  window: {}, console,
  LINGUAI: {
    registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
    addUnits(code, units) {
      if (!byCode[code]) throw new Error(`addUnits dla nieznanego poziomu: ${code}`);
      byCode[code].units = byCode[code].units.concat(units);
      captured.push({ code, units });
    }
  }
};
sandbox.window = sandbox;
vm.createContext(sandbox);

function run(file) {
  captured = [];
  vm.runInContext(readFileSync(join(ROOT, "data", file), "utf8"), sandbox, { filename: file });
  return captured;
}

/* ---------------- Prymitywy podziału ---------------- */

/**
 * Rozdziela jeden obiekt według specyfikacji.
 * spec.core — klucze neutralne; spec.tr — mapa klucz→nazwa w warstwie tekstów;
 * spec.skip — klucze obsłużone ręcznie przez wywołującego.
 */
function split(obj, spec, where) {
  const core = {}, tr = {};
  for (const k of Object.keys(obj)) {
    if (spec.skip && spec.skip.includes(k)) continue;
    if (spec.core.includes(k)) { core[k] = obj[k]; continue; }
    if (spec.tr && k in spec.tr) { tr[spec.tr[k]] = obj[k]; continue; }
    throw new Error(`${where}: klucz niesklasyfikowany „${k}" = ${JSON.stringify(obj[k]).slice(0, 70)}`);
  }
  return { core, tr };
}

/** Usuwa klucze o wartości undefined, by nie trafiły do pliku jako null. */
function prune(o) {
  Object.keys(o).forEach(k => { if (o[k] === undefined) delete o[k]; });
  return o;
}

/* ---------------- Ćwiczenia ---------------- */

const SAY = ["say"];   // pole czytane przez extract_strings.mjs: zawsze włoskie

const EX_SPEC = {
  mcq:       { core: ["t", "a", ...SAY], tr: { q: "q", why: "why", opts: "opts" } },
  multi:     { core: ["t", "a", ...SAY], tr: { q: "q", why: "why", opts: "opts" } },
  truefalse: { core: ["t", "a", ...SAY], tr: { q: "q", why: "why", opts: "opts" } },
  fill:      { core: ["t", "a", ...SAY], tr: { q: "q", why: "why", hint: "hint" } },
  trans:     { core: ["t", "a", "dir", ...SAY], tr: { q: "q", why: "why", hint: "hint" } },
  cloze:     { core: ["t", "text", "gaps", ...SAY], tr: { q: "q", why: "why", pl: "tr" } },
  order:     { core: ["t", "tokens", "a", ...SAY], tr: { pl: "tr", why: "why" } },
  conj:      { core: ["t", "verb", "tense", "persons", ...SAY], tr: { pl: "tr", why: "why" } },
  listen:    { core: ["t", "it", "alt", ...SAY], tr: { pl: "tr", why: "why" } },
  speak:     { core: ["t", "it", "alt", ...SAY], tr: { pl: "tr", why: "why" } },
  match:     { core: ["t", ...SAY], tr: { q: "q", why: "why" }, skip: ["pairs"] },
  gender:    { core: ["t", "opts", ...SAY], tr: { q: "q", why: "why" }, skip: ["items"] },
  dialogue:  { core: ["t", ...SAY], tr: { q: "q", setting: "setting", why: "why" }, skip: ["lines"] }
};

function splitExercise(ex, where) {
  const spec = EX_SPEC[ex.t];
  if (!spec) throw new Error(`${where}: nieznany typ ćwiczenia „${ex.t}"`);
  const { core, tr } = split(ex, spec, where);

  if (ex.pairs) {
    core.pairs = ex.pairs.map(p => ({ it: p[0] }));
    tr.pairs = ex.pairs.map(p => p[1]);
  }
  if (ex.items) {
    core.items = ex.items.map(i => prune({ it: i[0], a: i[1] }));
    tr.items = ex.items.map(i => i[2]);
  }
  if (ex.lines) {
    const parts = ex.lines.map((l, i) =>
      split(l, { core: ["sp", "it", "choices", "a"], tr: { pl: "tr", plAnswer: "answerTr" } }, `${where}/linia ${i}`));
    core.lines = parts.map(p => p.core);
    tr.lines = parts.map(p => p.tr);
  }
  return { core, tr };
}

/* ---------------- Lekcja, jednostka, poziom ---------------- */

function splitGrammar(g, where) {
  const { core, tr } = split(g, {
    core: [], tr: { title: "title", note: "note", table: "table" }, skip: ["examples"]
  }, where);
  if (g.examples) {
    core.examples = g.examples.map(e => ({ it: e[0] }));
    tr.examples = g.examples.map(e => prune({ tr: e[1], note: e[2] }));
  }
  return { core, tr };
}

function splitLesson(L) {
  const where = `lekcja ${L.id}`;
  const { core, tr } = split(L, {
    core: ["id", "cefr", "titleIt"],
    tr: { titlePl: "title", themePl: "theme", objectivesPl: "objectives", theory: "theory" },
    skip: ["grammar", "vocab", "dialogue", "culture", "exercises"]
  }, where);

  if (L.grammar) {
    const g = splitGrammar(L.grammar, `${where}/gramatyka`);
    core.grammar = g.core; tr.grammar = g.tr;
  }
  if (L.vocab) {
    const parts = L.vocab.map((v, i) => split(v, { core: ["it", "ex"], tr: { pl: "tr" } }, `${where}/słówko ${i}`));
    core.vocab = parts.map(p => p.core);
    tr.vocab = parts.map(p => p.tr.tr);
  }
  if (L.dialogue) {
    const d = split(L.dialogue, { core: ["titleIt"], tr: {}, skip: ["lines"] }, `${where}/dialog`);
    const parts = L.dialogue.lines.map((l, i) =>
      split(l, { core: ["who", "it"], tr: { pl: "tr" } }, `${where}/dialog/linia ${i}`));
    core.dialogue = { ...d.core, lines: parts.map(p => p.core) };
    tr.dialogue = parts.map(p => p.tr.tr);
  }
  if (L.culture) {
    const c = split(L.culture, { core: [], tr: { titlePl: "title", textPl: "text" } }, `${where}/kultura`);
    tr.culture = c.tr;
  }
  if (L.exercises) {
    const parts = L.exercises.map((ex, i) => splitExercise(ex, `${where}#${i + 1}`));
    core.exercises = parts.map(p => p.core);
    tr.exercises = parts.map(p => p.tr);
  }
  return { core, tr };
}

function splitUnit(u, strings) {
  const { core, tr } = split(u, {
    core: ["id", "icon", "titleIt"],
    tr: { titlePl: "title", grammarPl: "grammarNote" },
    skip: ["lessons", "test"]
  }, `jednostka ${u.id}`);
  strings[`unit:${u.id}`] = tr;

  if (u.lessons) {
    core.lessons = u.lessons.map(l => {
      const s = splitLesson(l);
      strings[`lesson:${l.id}`] = s.tr;
      return s.core;
    });
  }
  if (u.test) {
    const s = splitLesson(u.test);
    strings[`lesson:${u.test.id}`] = s.tr;
    core.test = s.core;
  }
  return core;
}

/* ---------------- Serializacja do czytelnego JS ---------------- */

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const WIDTH = 108;
const key = (k) => (IDENT.test(k) ? k : JSON.stringify(k));

function compact(v) {
  if (Array.isArray(v)) return "[" + v.map(compact).join(", ") + "]";
  if (v && typeof v === "object") return "{ " + Object.keys(v).map(k => key(k) + ": " + compact(v[k])).join(", ") + " }";
  return JSON.stringify(v);
}

/**
 * ind — wcięcie strukturalne (2 znaki na poziom, jak w plikach pisanych ręcznie)
 * col — kolumna, w której wartość się zaczyna; decyduje tylko o tym,
 *       czy zmieści się w jednej linii. Rozdzielenie tych dwóch rzeczy
 *       trzyma zagnieżdżenie proste zamiast równać je do długości klucza.
 */
function jsv(v, ind, col) {
  const one = compact(v);
  if ((col === undefined ? ind : col) + one.length <= WIDTH) return one;
  const pad = " ".repeat(ind);
  if (Array.isArray(v)) {
    return "[\n" + v.map(x => pad + "  " + jsv(x, ind + 2)).join(",\n") + "\n" + pad + "]";
  }
  if (v && typeof v === "object") {
    return "{\n" + Object.keys(v)
      .map(k => pad + "  " + key(k) + ": " + jsv(v[k], ind + 2, ind + 2 + key(k).length + 2))
      .join(",\n") + "\n" + pad + "}";
  }
  return one;
}

const HEAD_CORE = (src) => `/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/${src}
   Powstało z data/${src} przez scripts/split_data.mjs.
   ============================================================ */\n`;

const HEAD_TR = (src, lang) => `/* ============================================================
   Teksty w języku ucznia (${lang}) do data/core/${src}
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */\n`;

function writeCore(file, body) {
  mkdirSync(join(ROOT, "data", "core"), { recursive: true });
  writeFileSync(join(ROOT, "data", "core", file), HEAD_CORE(file) + body, "utf8");
}

function writeStrings(file, strings) {
  const dir = join(ROOT, "data", "i18n", LANG);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, file), HEAD_TR(file, LANG) + `LINGUAI.addStrings("${LANG}", ${jsv(strings, 0)});\n`, "utf8");
}

/* ---------------- Przebieg ---------------- */

run("curriculum-index.js");
const dataFiles = readdirSync(join(ROOT, "data")).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort();

/* poziomy */
{
  const strings = {};
  const bodies = levels.map(lv => {
    const { core, tr } = split(lv, {
      core: ["code", "cefrLabel"],
      tr: { namePl: "name", descPl: "desc" },
      skip: ["units", "dataFiles"]
    }, `poziom ${lv.code}`);
    core.dataFiles = lv.dataFiles.map(p => p.replace(/^data\//, ""));
    strings[`level:${lv.code}`] = tr;
    return `LINGUAI.registerLevel(${jsv(core, 0)});`;
  });
  writeCore("curriculum-index.js", bodies.join("\n\n") + "\n");
  writeStrings("curriculum-index.js", strings);
}

/* lekcje */
for (const file of dataFiles) {
  const adds = run(file);
  const strings = {};
  const bodies = adds.map(({ code, units }) => {
    const core = units.map(u => splitUnit(u, strings));
    return `LINGUAI.addUnits("${code}", ${jsv(core, 0)});`;
  });
  writeCore(file, bodies.join("\n\n") + "\n");
  writeStrings(file, strings);
}

/* rozmowy */
{
  run("conversations.js");
  const strings = {};
  const core = sandbox.CONVERSATIONS.map(c => {
    const s = split(c, {
      core: ["id", "cefr", "icon", "titleIt"],
      tr: { titlePl: "title", settingPl: "setting", closingPl: "closing" },
      skip: ["turns"]
    }, `rozmowa ${c.id}`);
    const parts = c.turns.map((t, i) =>
      split(t, { core: ["sp", "it", "hintIt", "accept"], tr: { pl: "tr", taskPl: "task" } }, `rozmowa ${c.id}/tura ${i}`));
    s.core.turns = parts.map(p => p.core);
    s.tr.turns = parts.map(p => p.tr);
    strings[`conv:${c.id}`] = s.tr;
    return s.core;
  });
  writeCore("conversations.js", `window.CONVERSATIONS = ${jsv(core, 0)};\n`);
  writeStrings("conversations.js", strings);
}

/* gramatyka */
{
  run("grammar-reference.js");
  const strings = { "refsec:titles": [] };
  const core = sandbox.GRAMMAR_REF.map((sec, i) => {
    const s = split(sec, { core: [], tr: { titlePl: "title" }, skip: ["items"] }, `dział gramatyki ${i}`);
    strings["refsec:titles"].push(s.tr.title);
    s.core.items = sec.items.map(it => {
      const p = split(it, { core: ["id", "cefr"], tr: { titlePl: "title", subPl: "sub", body: "body" } }, `hasło ${it.id}`);
      strings[`ref:${it.id}`] = p.tr;
      return p.core;
    });
    return s.core;
  });
  writeCore("grammar-reference.js", `window.GRAMMAR_REF = ${jsv(core, 0)};\n`);
  writeStrings("grammar-reference.js", strings);
}

console.log(`Podzielono: ${levels.length} poziomów, ${dataFiles.length + 3} plików.`);
console.log(`  data/core/        — warstwa neutralna`);
console.log(`  data/i18n/${LANG}/      — teksty ucznia`);
