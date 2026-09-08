/* ============================================================
   roundtrip.mjs — dowód, że podział na core + i18n niczego nie zgubił.

   1. wczytuje pierwotne data/*.js
   2. wczytuje data/core/*.js razem z data/i18n/pl/*.js i scala je
      PRAWDZIWYM assets/js/i18n.js, nie kopią logiki
   3. odwraca zmianę nazw pól i wraca do kształtu sprzed podziału
   4. porównuje struktury i osobno multizbiór wszystkich napisów

   Kończy się kodem 1 przy jakiejkolwiek różnicy. Bramka przed
   skasowaniem plików pierwotnych.

   Uruchomienie:  node scripts/roundtrip.mjs
   ============================================================ */
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* ---------------- Wczytywanie ---------------- */

function newSandbox() {
  const levels = [], byCode = {};
  const sandbox = {
    window: {}, console,
    LINGUAI: {
      registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
      addUnits(code, units) { byCode[code].units = byCode[code].units.concat(units); }
    }
  };
  sandbox.window = sandbox;
  sandbox.Core = { registry: { levels } };
  vm.createContext(sandbox);
  return { sandbox, levels };
}

function exec(sandbox, path) {
  vm.runInContext(readFileSync(join(ROOT, path), "utf8"), sandbox, { filename: path });
}

const LESSON_FILES = readdirSync(join(ROOT, "data")).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort();
const ALL_FILES = ["curriculum-index.js", ...LESSON_FILES, "conversations.js", "grammar-reference.js"];

function loadOriginal() {
  const { sandbox, levels } = newSandbox();
  ALL_FILES.forEach(f => exec(sandbox, join("data", f)));
  return { levels, conv: sandbox.CONVERSATIONS, ref: sandbox.GRAMMAR_REF };
}

function loadSplit() {
  const { sandbox, levels } = newSandbox();
  exec(sandbox, "assets/js/i18n.js");
  ALL_FILES.forEach(f => exec(sandbox, join("data", "core", f)));
  ALL_FILES.forEach(f => exec(sandbox, join("data", "i18n", "pl", f)));
  sandbox.LINGUAI.applyStrings("pl");
  return { levels, conv: sandbox.CONVERSATIONS, ref: sandbox.GRAMMAR_REF };
}

/* ---------------- Odwrócenie podziału ---------------- */

/** Przepisuje obiekt pod stare nazwy pól; pomija klucze nieobecne. */
function rename(o, map) {
  const out = {};
  for (const [from, to] of Object.entries(map)) if (o[from] !== undefined) out[to] = o[from];
  return out;
}

/** Skleja tablicę obiektów z powrotem w tablicę pozycyjną, ucinając ogon undefined. */
function tuple(...vals) {
  while (vals.length && vals[vals.length - 1] === undefined) vals.pop();
  return vals;
}

function backExercise(ex) {
  const o = { ...ex };
  if (o.tr !== undefined) { o.pl = o.tr; delete o.tr; }
  if (o.pairs) o.pairs = o.pairs.map(p => tuple(p.it, p.tr));
  if (o.items) o.items = o.items.map(i => tuple(i.it, i.a, i.gloss));
  if (o.lines) o.lines = o.lines.map(l => {
    const n = { ...l };
    if (n.tr !== undefined) { n.pl = n.tr; delete n.tr; }
    if (n.answerTr !== undefined) { n.plAnswer = n.answerTr; delete n.answerTr; }
    return n;
  });
  return o;
}

function backTheory(theory) {
  return theory.map(b => {
    if (!b || typeof b !== "object" || b.contrast === undefined) return b;
    const out = {};
    Object.keys(b).forEach(k => { out[k === "contrast" ? "pl" : k] = b[k]; });
    return out;
  });
}

function backLesson(L) {
  const o = {
    ...rename(L, { id: "id", cefr: "cefr", titleIt: "titleIt", title: "titlePl", theme: "themePl", objectives: "objectivesPl", theory: "theory" })
  };
  if (o.theory) o.theory = backTheory(o.theory);
  if (L.grammar) {
    const g = rename(L.grammar, { title: "title", note: "note", table: "table" });
    if (L.grammar.examples) g.examples = L.grammar.examples.map(e => tuple(e.it, e.tr, e.note));
    o.grammar = g;
  }
  if (L.vocab) o.vocab = L.vocab.map(v => rename(v, { it: "it", tr: "pl", ex: "ex" }));
  if (L.dialogue) {
    o.dialogue = {
      titleIt: L.dialogue.titleIt,
      lines: L.dialogue.lines.map(l => rename(l, { who: "who", it: "it", tr: "pl" }))
    };
  }
  if (L.culture) o.culture = rename(L.culture, { title: "titlePl", text: "textPl" });
  if (L.exercises) o.exercises = L.exercises.map(backExercise);
  return o;
}

function backAll(d) {
  return {
    levels: d.levels.map(lv => ({
      ...rename(lv, { code: "code", cefrLabel: "cefrLabel", name: "namePl", desc: "descPl" }),
      dataFiles: lv.dataFiles.map(f => (f.startsWith("data/") ? f : "data/" + f)),
      units: lv.units.map(u => {
        const o = rename(u, { id: "id", icon: "icon", titleIt: "titleIt", title: "titlePl", grammarNote: "grammarPl" });
        if (u.lessons) o.lessons = u.lessons.map(backLesson);
        if (u.test) o.test = backLesson(u.test);
        return o;
      })
    })),
    conv: d.conv.map(c => ({
      ...rename(c, { id: "id", cefr: "cefr", icon: "icon", titleIt: "titleIt", title: "titlePl", setting: "settingPl", closing: "closingPl" }),
      turns: c.turns.map(t => rename(t, { sp: "sp", it: "it", hintIt: "hintIt", accept: "accept", tr: "pl", task: "taskPl" }))
    })),
    ref: d.ref.map(sec => ({
      titlePl: sec.title,
      items: sec.items.map(it => rename(it, { id: "id", cefr: "cefr", title: "titlePl", sub: "subPl", body: "body" }))
    }))
  };
}

function asIs(d) {
  return { levels: d.levels, conv: d.conv, ref: d.ref };
}

/* ---------------- Porównanie ---------------- */

function firstDiff(a, b, path = "") {
  if (a === b) return null;
  if (Array.isArray(a) !== Array.isArray(b)) return { path, a, b };
  if (Array.isArray(a)) {
    if (a.length !== b.length) return { path: path + ".length", a: a.length, b: b.length };
    for (let i = 0; i < a.length; i++) {
      const d = firstDiff(a[i], b[i], `${path}[${i}]`);
      if (d) return d;
    }
    return null;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    if (ka.join(",") !== kb.join(",")) return { path: path + " {klucze}", a: ka.join(","), b: kb.join(",") };
    for (const k of ka) {
      const d = firstDiff(a[k], b[k], `${path}.${k}`);
      if (d) return d;
    }
    return null;
  }
  return { path, a, b };
}

function strings(node, out = []) {
  if (typeof node === "string") out.push(node);
  else if (Array.isArray(node)) node.forEach(x => strings(x, out));
  else if (node && typeof node === "object") Object.keys(node).forEach(k => strings(node[k], out));
  return out;
}

/* ---------------- Przebieg ---------------- */

const original = asIs(loadOriginal());
const rebuilt = backAll(loadSplit());

const sa = strings(original).sort(), sb = strings(rebuilt).sort();
const lost = sa.filter((s, i) => sb[i] !== s).slice(0, 5);

const diff = firstDiff(original, rebuilt);

console.log(`napisy: pierwotnie ${sa.length}, po scaleniu ${sb.length}`);

if (!diff && sa.length === sb.length && !lost.length) {
  console.log("\nIDENTYCZNE — podział nie zmienił ani jednego znaku.\n");
  process.exit(0);
}

if (lost.length) {
  console.log("\n=== NAPISY, KTÓRE SIĘ NIE ZGADZAJĄ ===");
  lost.forEach(s => console.log("  " + JSON.stringify(s).slice(0, 120)));
}
if (diff) {
  console.log("\n=== PIERWSZA RÓŻNICA ===");
  console.log("  ścieżka: " + diff.path);
  console.log("  było:    " + JSON.stringify(diff.a).slice(0, 200));
  console.log("  jest:    " + JSON.stringify(diff.b).slice(0, 200));
}
process.exit(1);
