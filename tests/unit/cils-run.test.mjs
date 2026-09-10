/* ============================================================
   A run through the exam simulation (assets/js/cils-run.js).

   cils.test.mjs checks the scoring of ONE section. Here it is about the
   whole attempt: four sections in order, the answer grid, sections whose
   time ran out, and the entry written into the student's history.

   Why this had no test for so long: going through the simulation takes an
   hour and has four countdowns, so a browser test would have to either
   wait that long or replace the clock. Since the run no longer touches the
   DOM, it is played out here in milliseconds — together with branches
   nobody has ever clicked through by hand: an import with a broken
   `cils.runs` field, and the fifty-first attempt.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "data/core/cils.js", "assets/js/cils.js", "assets/js/cils-run.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

/** An attempt at a ready-made simulation from the course data. */
function podejscie(box) {
  const s = box.sandbox.Cils.sim("sim-1");
  return box.sandbox.CilsRun.create(s);
}

/** Fills a closed-answer section with a full set of correct answers. */
function wypelnijPoprawnie(run, sez) {
  run.przygotuj(sez);
  sez.prove.forEach((p, n) => {
    p.items.forEach((it, i) => run.odpowiedz(sez.id, n, i, it.a));
  });
}

describe("the order of the sections", () => {
  test("it starts with listening and follows the order of the exam", () => {
    const run = podejscie(silnik());
    const kolejnosc = [];
    for (let n = 0; n < 4; n++) {
      kolejnosc.push(run.sekcja().id);
      run.dalej();
    }
    assert.deepEqual(kolejnosc, ["ascolto", "lettura", "scritta", "orale"]);
  });

  test("the step is numbered from one, because that is how the student reads it", () => {
    const run = podejscie(silnik());
    assert.equal(run.krok, 1);
    assert.equal(run.ile, 4);
    run.dalej();
    assert.equal(run.krok, 2);
  });

  test("after the last section there is no next one, there is the summary", () => {
    const run = podejscie(silnik());
    for (let n = 0; n < 4; n++) run.dalej();
    assert.equal(run.sekcja(), null);
    assert.equal(run.skonczone, true);
  });
});

describe("the answer grid", () => {
  test("it is created empty and sized to the tasks, before the student clicks anything", () => {
    /* Scoring walks by index: a list one item short would shift the
       answers onto somebody else's questions and produce a score nobody
       would ever report. */
    const box = silnik();
    const run = podejscie(box);
    const sez = run.sekcja();
    const siatka = run.przygotuj(sez);

    assert.equal(siatka.length, sez.prove.length);
    sez.prove.forEach((p, n) => assert.equal(siatka[n].length, p.items.length));
    assert.equal(siatka[0][0], undefined, "no answer is not zero points written in advance");
  });

  test("an answer lands under its own task and item number", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    run.odpowiedz(sez.id, 1, 2, 3);

    assert.equal(run.odpowiedzi(sez.id)[1][2], 3);
    assert.equal(run.odpowiedzi(sez.id)[0][2], undefined, "the neighbouring task stays untouched");
  });

  test("an answer to an unprepared section does not bring the attempt down", () => {
    const run = podejscie(silnik());
    assert.equal(run.odpowiedz("lettura", 0, 0, 1), false);
  });
});

describe("section points", () => {
  test("a full set of hits gives the maximum and remembers the tally", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    wypelnijPoprawnie(run, sez);
    const w = run.zamknij(sez);

    assert.equal(w.punti, 12);
    assert.equal(run.dane.punti.ascolto, 12);
    assert.equal(run.dane.szczegoly.ascolto.esatte, w.esatte);
  });

  test("a section closed with not a single answer gives zero, not undefined", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    assert.equal(run.zamknij(sez).punti, 0);
    assert.equal(run.dane.punti.ascolto, 0);
  });
});

describe("time that has run out", () => {
  test("the section is marked as scaduta and that shows in the summary", () => {
    const run = podejscie(silnik());
    assert.equal(run.czyScadla("ascolto"), false);
    run.scadla("ascolto");
    assert.equal(run.czyScadla("ascolto"), true);
    assert.equal(run.czyScadla("lettura"), false);
  });

  test("running out of time does not erase what the student managed to mark", () => {
    /* Zero would be a punishment for the clock doing its job, a full score
       would be a gift. */
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    sez.prove[0].items.forEach((it, i) => run.odpowiedz(sez.id, 0, i, it.a));
    run.scadla(sez.id);

    assert.ok(run.zamknij(sez).punti > 0);
  });
});

describe("the verdict on the whole attempt", () => {
  test("two skills scored, two declared as not measured", () => {
    const run = podejscie(silnik());
    ["ascolto", "lettura"].forEach(() => {
      const sez = run.sekcja();
      wypelnijPoprawnie(run, sez);
      run.zamknij(sez);
      run.dalej();
    });
    const e = run.esito();

    assert.equal(e.abilita.ascolto.misurata, true);
    assert.equal(e.abilita.scritta.misurata, false);
    assert.equal(e.verdetto, "indeterminato", "a full score does not promise passing the exam");
  });

  test("one skill below the threshold is enough to say \"not passed\"", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    run.zamknij(sez);          // zero points from listening
    assert.equal(run.esito().verdetto, "sotto-soglia");
  });
});

describe("the history entry", () => {
  function poPodejsciu(box) {
    const run = podejscie(box);
    const sez = run.sekcja();
    wypelnijPoprawnie(run, sez);
    run.zamknij(sez);
    run.scadla("lettura");
    return run;
  }

  test("the entry carries points, timed-out sections and the verdict, not the answers", () => {
    /* The answers are an exercise, not history: keeping them would blow up
       the single localStorage key the whole course shares. */
    const box = silnik();
    const run = poPodejsciu(box);
    const w = box.sandbox.CilsRun.wpis(run, run.esito(), 1700000000000);

    assert.equal(w.sim, "sim-1");
    assert.equal(w.ts, 1700000000000);
    assert.equal(w.punti.ascolto, 12);
    assert.equal(w.punti.lettura, 0, "a section that was not played counts as zero, it does not disappear");
    assert.deepEqual(Array.from(w.scadute), ["lettura"]);
    assert.equal(w.verdetto, "sotto-soglia");
    assert.equal(w.risposte, undefined);
  });

  test("the entry reaches the state and survives a save", () => {
    const box = silnik();
    const run = poPodejsciu(box);

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1700000000000), true);
    box.flush();
    assert.equal(box.stored().cils.runs.length, 1);
    assert.equal(box.stored().cils.runs[0].sim, "sim-1");
  });

  test("the history has a ceiling: the fifty-first attempt pushes out the first", () => {
    const box = silnik();
    const run = poPodejsciu(box);
    const CR = box.sandbox.CilsRun;

    for (let n = 0; n < CR.MAX_HISTORII + 5; n++) CR.zapisz(run, run.esito(), n);
    const runs = box.Core.state.cils.runs;

    assert.equal(runs.length, CR.MAX_HISTORII);
    assert.equal(runs[0].ts, 5, "the oldest drop out, the tail stays");
    assert.equal(runs[runs.length - 1].ts, CR.MAX_HISTORII + 4);
  });

  test("a broken `cils.runs` field from an import does not bring the summary down", () => {
    /* Import validation only checks the type of the top-level field, so
       `cils` can arrive as an object whose `runs` is a string. A `push` on a
       string would throw an hour into the exam, at the moment of showing the
       result. */
    const box = silnik();
    const run = poPodejsciu(box);
    box.Core.state.cils = { runs: "not an array" };

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1), false);
    assert.equal(box.Core.state.cils.runs, "not an array", "and nothing is overwritten");
  });

  test("a missing container in an older profile is not a failure either", () => {
    const box = silnik();
    const run = poPodejsciu(box);
    delete box.Core.state.cils;

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1), false);
  });
});

describe("answers to the open sections", () => {
  test("the essay and the oral part stay with the attempt, not in the points", () => {
    /* The simulator does not mark them and must not pretend otherwise: in
       the summary they stand as material to check on your own. */
    const run = podejscie(silnik());
    run.zapiszScritta({ it: "Scrivi una cartolina" }, "Ciao, sono a Roma.");
    run.zapiszOrale("La mia città", 3);

    assert.equal(run.dane.scritta.testo, "Ciao, sono a Roma.");
    assert.equal(run.dane.orale.spuntate, 3);
    assert.equal(run.dane.punti.scritta, undefined, "no points is not zero points");
    assert.equal(run.esito().abilita.scritta.misurata, false);
  });
});
