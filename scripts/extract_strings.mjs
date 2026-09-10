/* ============================================================
   extract_strings.mjs — extracts every Italian string the application can
   speak and writes them to audio-strings.json.

   It uses no regular expressions on the source: it loads the real data
   files in a node:vm sandbox and walks the actual structure of the objects.
   That way a field which ends up behind a 🔊 button somewhere cannot be
   missed.

   Usage:  node scripts/extract_strings.mjs
   ============================================================ */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* The sentences spoken by the engine and absent from the data files. */
const EXTRA = [
  "Ciao! Sono la tua voce italiana. Andiamo a studiare insieme."
];

const levels = [];
const byCode = {};
const sandbox = {
  window: {}, console,
  LINGUAI: {
    registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
    addUnits(code, units) { if (byCode[code]) byCode[code].units = byCode[code].units.concat(units); }
  }
};
sandbox.window = sandbox;
vm.createContext(sandbox);

/* It reads data/core only: everything the application speaks is in Italian
   and lives in the neutral layer. The recording file names therefore do not
   depend on the language the student reads the explanations in. */
const CORE = join(ROOT, "data", "core");

function run(file) {
  vm.runInContext(readFileSync(join(CORE, file), "utf8"), sandbox, { filename: file });
}

run("curriculum-index.js");
readdirSync(CORE).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort().forEach(run);
run("conversations.js");
run("phonetics.js");
run("readings.js");
run("interference.js");
run("cils.js");

/* ---------------- Collecting ---------------- */
/** primary: the main voice · other: the second speaker's voice (only if it occurs nowhere else) */
const primary = new Set();
const other = new Set();

function norm(s) {
  return String(s == null ? "" : s).replace(/\s+/g, " ").trim();
}
function addP(s) { const t = norm(s); if (t.length > 1) primary.add(t); }
function addO(s) { const t = norm(s); if (t.length > 1) other.add(t); }

function collectExercise(ex) {
  if (!ex || typeof ex !== "object") return;
  if (ex.say) addP(ex.say);
  if (ex.t === "listen" || ex.t === "speak") {
    addP(ex.it);
    (ex.alt || []).forEach(addP);
  }
  if (ex.t === "dialogue") {
    (ex.lines || []).forEach(function (l) {
      if (l.it) (l.sp === "TY" ? addP : addO)(l.it);
      // the variants of the student's answer are played after a hit
      (l.choices || []).forEach(addP);
    });
  }
}

function collectLesson(l) {
  if (!l) return;
  (l.vocab || []).forEach(function (v) { addP(v.it); });
  if (l.grammar && l.grammar.examples) {
    l.grammar.examples.forEach(function (e) { addP(e.it); });
  }
  if (l.dialogue && l.dialogue.lines) {
    // in a lesson the lines alternate: even = the other speaker, odd = the student
    l.dialogue.lines.forEach(function (ln, i) { (i % 2 ? addP : addO)(ln.it); });
  }
  (l.exercises || []).forEach(collectExercise);
}

levels.forEach(function (lv) {
  (lv.units || []).forEach(function (u) {
    (u.lessons || []).forEach(collectLesson);
    if (u.test) collectLesson(u.test);
  });
});

(sandbox.CONVERSATIONS || []).forEach(function (c) {
  (c.turns || []).forEach(function (t) {
    if (t.sp === "TY") {
      // the model answer, played by the "Show the answer" button.
      // At a branch EVERY branch has its own model and its own button:
      // recording only the first leaves the second branch mute.
      const wzory = t.opts
        ? t.opts.map(function (o) { return (o.accept || [])[0]; })
        : [(t.accept || (t.it ? [t.it] : []))[0]];
      wzory.forEach(function (w) { if (w) addP(w); });
    } else {
      addO(t.it);
    }
  });
});

/* Minimal pairs: EVERY word separately, in the main voice. The exercise is
   about hearing the difference, so system synthesis — which confuses exactly
   those sounds — is not a fallback here but the end of the exercise. */
(sandbox.PHONETICS || []).forEach(function (zbior) {
  (zbior.pairs || []).forEach(function (para) { addP(para.a); addP(para.b); });
});

/* Readings: EVERY sentence separately. A recording of a whole text would
   weigh more than all the sentences together and could not be used for
   dictation; continuous listening stitches the same files together through
   Audio2.speakSequence. */
(sandbox.READINGS || []).forEach(function (r) {
  (r.sentences || []).forEach(addP);
  /* The words of a reading: the author's glosses and the vocabulary for
     tapping in the text. The word card has a 🔊 button, so those strings ARE
     spoken — and this script only walked the sentences, so all of them fell
     back to the system voice. Spoken fields without a collector do not
     report themselves: the course simply speaks worse and nobody knows why. */
  (r.glossIt || []).forEach(addP);
  (r.lexIt || []).forEach(addP);
});

/* The exam simulation: only the listening texts are SPOKEN. The questions,
   the instructions and the reading texts are read by the student, as at the
   exam, so recording them would be three hundred files nobody will ever play.
   The second speaker gets the second voice, as in the course dialogues. */
(sandbox.CILS || []).forEach(function (sim) {
  (sim.sezioni || []).forEach(function (sez) {
    if (sez.id !== "ascolto") return;
    (sez.prove || []).forEach(function (p) {
      (p.brani || []).forEach(function (brano) {
        (brano || []).forEach(function (r) {
          if (r.it) (r.sp === "B" ? addO : addP)(r.it);
        });
      });
    });
  });
});

/* False friends: the word itself and a sentence containing it. The exercise
   is about the student HEARING the Italian meaning instead of reading about
   it in their own language, so without a recording it is born mute — and
   that is the only reason this file lives in data/core/ rather than in an
   overlay. */
(sandbox.INTERFERENCE || []).forEach(function (v) {
  addP(v.it);
  addP(v.ex);
});

EXTRA.forEach(addP);

/* A side spoken anywhere in the main voice does not get a second file. */
primary.forEach(s => other.delete(s));

const out = {
  primary: Array.from(primary).sort(),
  other: Array.from(other).sort()
};
writeFileSync(join(ROOT, "scripts", "audio-strings.json"), JSON.stringify(out, null, 1), "utf8");

const chars = [...primary, ...other].reduce((n, s) => n + s.length, 0);
console.log(`głos główny:   ${out.primary.length} napisów`);
console.log(`głos rozmówcy: ${out.other.length} napisów`);
console.log(`razem:         ${out.primary.length + out.other.length} napisów, ${chars} znaków`);
console.log("zapisano scripts/audio-strings.json");
