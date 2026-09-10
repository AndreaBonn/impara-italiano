/* ============================================================
   The exam simulation: scoring and verdict.

   Two things this file guards more closely than any other test in the course.

   The first: a section where the time ran out has to give points for what
   the student managed to tick, not zero and not the full set. Zero would be
   a punishment for the clock doing its job, the full set would be a gift.

   The second: the verdict is ASYMMETRIC and that is not an oversight. One
   skill below the threshold is enough to say "not passed"; all of them above
   the threshold are NOT enough to say "passed", because two skills out of
   four are not graded here at all. The test for that second side matters
   more: it is the only place where the simulator could start promising an
   exam result.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function silnik() {
  const box = loadEngine({ files: ["data/core/cils.js", "assets/js/cils.js"] });
  return box.sandbox.Cils;
}

describe("scoring the closed-answer tasks", () => {
  test("a full set of hits gives the section maximum", () => {
    const C = silnik();
    const sez = C.sezione(C.sim("sim-1"), "ascolto");
    const risp = sez.prove.map(p => p.items.map(i => i.a));
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 12);
    assert.equal(w.max, 12);
  });

  test("an omitted answer weighs the same as a wrong one, that is zero", () => {
    const C = silnik();
    const prova = C.sezione(C.sim("sim-1"), "ascolto").prove[0];
    const zle = prova.items.map(i => (i.a + 1) % 3);
    const puste = prova.items.map(() => null);
    assert.equal(C.punteggioProva(prova, zle).punti, 0);
    assert.equal(C.punteggioProva(prova, puste).punti, 0);
  });

  test("a prova of twelve items weighs half a point per item", () => {
    const C = silnik();
    const prova = C.sezione(C.sim("sim-1"), "ascolto").prove[1];
    const polowa = prova.items.map((it, i) => (i < 6 ? it.a : null));
    assert.equal(C.punteggioProva(prova, polowa).punti, 3);
  });

  test("time running out halfway leaves the points for what was ticked", () => {
    const C = silnik();
    const sez = C.sezione(C.sim("sim-1"), "lettura");
    /* The student got through the first task and not one item of the second. */
    const risp = [sez.prove[0].items.map(i => i.a), []];
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 6);
    assert.equal(w.date, 12);
    assert.equal(w.totali, 18);
  });
});

describe("werdykt", () => {
  test("one skill below the threshold settles a fail", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 12, lettura: 6 });
    assert.equal(e.verdetto, "sotto-soglia");
    assert.equal(e.abilita.lettura.sopraSoglia, false);
  });

  test("everything above the threshold does NOT give a \"passed\" verdict", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 12, lettura: 12 });
    assert.equal(e.verdetto, "indeterminato");
    assert.notEqual(e.verdetto, "superato");
  });

  test("writing and speaking stay outside the count", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 9, lettura: 9 });
    assert.deepEqual(Array.from(e.nonContate), ["scritta", "orale"]);
    assert.equal(e.abilita.scritta.misurata, false);
    assert.equal(e.abilita.orale.misurata, false);
  });

  test("a missing skill score counts as zero, not as the skill being absent", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 10 });
    assert.equal(e.abilita.lettura.punti, 0);
    assert.equal(e.verdetto, "sotto-soglia");
  });
});

describe("kontrola wypowiedzi pisemnej", () => {
  test("it counts the words and checks the limit, without issuing a grade", () => {
    const C = silnik();
    const traccia = C.sim("sim-1").sezioni[2].tracce[0];
    const krotki = C.controlloScritta(traccia, "Gentile ufficio, buongiorno.");
    assert.equal(krotki.parole, 3);
    assert.equal(krotki.dentroLimite, false);
    /* No points field at all: the marking rubric is run by a human. */
    assert.equal(krotki.punti, undefined);
  });
});

describe("dane symulacji", () => {
  test("both simulations have four sections in the same order", () => {
    const C = silnik();
    C.simulazioni().forEach(s => {
      assert.deepEqual(Array.from(s.sezioni.map(x => x.id)),
        ["ascolto", "lettura", "scritta", "orale"]);
    });
  });

  test("the second simulation does not repeat the texts of the first", () => {
    const C = silnik();
    const zdania = (sim) => {
      const out = [];
      sim.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
        (p.brani || []).forEach(b => b.forEach(r => out.push(r.it)));
        (p.testo || []).forEach(x => out.push(x));
      }));
      return out;
    };
    const a = new Set(zdania(C.sim("sim-1")));
    const wspolne = zdania(C.sim("sim-2")).filter(x => a.has(x));
    assert.deepEqual(Array.from(wspolne), []);
  });

  test("ogni item ha una risposta valida fra le opzioni", () => {
    const C = silnik();
    C.simulazioni().forEach(s => s.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
      p.items.forEach((it, i) => {
        const n = p.t === "vf" ? 2 : (it.opts || []).length;
        assert.ok(it.a >= 0 && it.a < n, `${s.id}/${sez.id}: item ${i} punta fuori dalle opzioni`);
      });
    })));
  });
});

describe("what is not in the data", () => {
  test("an unknown simulation does not come back as the first one at hand", () => {
    /* An address from a bookmark may point at a simulation that no longer
       exists: substituting another would show the student somebody else's
       exam without a word. */
    const C = silnik();
    assert.equal(C.sim("nie-ma-takiej"), null);
    assert.equal(C.sim(), C.simulazioni()[0], "with no id the first one may be taken");
  });

  test("nieznana sekcja to null, nie pusta sekcja", () => {
    const C = silnik();
    assert.equal(C.sezione(C.sim("sim-1"), "nie-ma"), null);
    assert.equal(C.sezione(null, "ascolto"), null);
  });
});
