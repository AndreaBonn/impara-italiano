/* ============================================================
   One conversation from beginning to end (assets/js/chat-run.js).

   The rules it obeys are checked next door, in chat-rules.test.mjs. What is
   checked here is the state machine on top of them, and in particular the
   two things that cost the student something when they are wrong:

   - a turn given back when nothing came back. The request went out, the
     reply did not, and without `cofnijStudenta` the student is one turn
     poorer for a conversation that did not happen;
   - the corrections kept apart from what is sent onward. They are shown to
     the student and never to the model: a partner shown its own corrections
     learns that this is a lesson, and starts writing like one.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function silnik() {
  return loadEngine({ files: ["assets/js/chat-rules.js", "assets/js/chat-run.js"] }).sandbox;
}

const SCENA = { id: "bar", cefr: "A1", icon: "☕", apertura: "Buongiorno!" };

function rozmowa() { return silnik().ChatRun.create(SCENA); }

describe("chat-run: the turns", () => {
  test("a fresh conversation is empty and knows its scene", () => {
    const r = rozmowa();
    assert.equal(r.historia.length, 0);
    assert.equal(r.scenario.id, "bar");
    assert.equal(r.tury, 0);
  });

  test("the two sides land in one list, in the order they spoke", () => {
    const r = rozmowa();
    r.dodajStudenta("buongiorno");
    r.dodajPartnera({ risposta: "Buongiorno! Cosa prende?", correzione: "" });
    assert.deepEqual(Array.from(r.historia).map((x) => x.role), ["student", "partner"]);
    assert.equal(r.tury, 1);
  });

  test("an empty message is not a turn", () => {
    const r = rozmowa();
    assert.equal(r.dodajStudenta("   "), false);
    assert.equal(r.dodajStudenta(""), false);
    assert.equal(r.historia.length, 0);
  });

  test("a partner with nothing to say is not a turn either", () => {
    const r = rozmowa();
    r.dodajStudenta("ciao");
    assert.equal(r.dodajPartnera({ risposta: "", correzione: "x" }), false);
    assert.equal(r.dodajPartnera(null), false);
    assert.equal(r.historia.length, 1);
  });
});

describe("chat-run: giving a turn back", () => {
  test("a turn with no answer is undone, and the ceiling gets it back", () => {
    const r = rozmowa();
    r.dodajStudenta("ciao");
    const przed = r.zostalo;
    assert.equal(r.cofnijStudenta(), true);
    assert.equal(r.historia.length, 0);
    assert.equal(r.zostalo, przed + 1);
  });

  test("it undoes the student's turn only when theirs was the last one", () => {
    /* Otherwise it would tear a hole in the middle of a conversation that is
       still going: the answer is on screen, and the question under it is
       gone. */
    const r = rozmowa();
    r.dodajStudenta("ciao");
    r.dodajPartnera({ risposta: "Salve!", correzione: "" });
    assert.equal(r.cofnijStudenta(), false);
    assert.equal(r.historia.length, 2);
  });

  test("there is nothing to undo in an empty conversation", () => {
    assert.equal(rozmowa().cofnijStudenta(), false);
  });
});

describe("chat-run: the corrections", () => {
  test("they are collected in order, and only the ones that exist", () => {
    const r = rozmowa();
    r.dodajStudenta("volere un caffè");
    r.dodajPartnera({ risposta: "Certo!", correzione: "Si dice «vorrei»." });
    r.dodajStudenta("grazie mille");
    r.dodajPartnera({ risposta: "Prego!", correzione: "" });
    assert.deepEqual(Array.from(r.korekty), ["Si dice «vorrei»."]);
  });

  test("a correction never travels back to the model", () => {
    /* The history is what the two of them SAID. A partner shown its own
       corrections learns that this is a lesson and starts writing like one:
       longer, more explanatory, less like somebody in a bar. */
    const box = silnik();
    const r = box.ChatRun.create(SCENA);
    r.dodajStudenta("volere un caffè");
    r.dodajPartnera({ risposta: "Certo!", correzione: "Si dice «vorrei»." });

    const wyslane = box.ChatRules.doWyslania(r.historia);
    const caly = JSON.stringify(Array.from(wyslane));
    assert.ok(caly.indexOf("Certo!") > 0, "the reply travels");
    assert.equal(caly.indexOf("vorrei"), -1, "the correction travelled: " + caly);
  });
});

describe("chat-run: the end", () => {
  test("the conversation ends at the ceiling and says so", () => {
    const box = silnik();
    const r = box.ChatRun.create(SCENA);
    for (let i = 0; i < box.ChatRules.MAX_TUR; i++) {
      r.dodajStudenta("frase " + i);
      r.dodajPartnera({ risposta: "Sì " + i, correzione: "" });
    }
    assert.equal(r.koniec, true);
    assert.equal(r.zostalo, 0);
    assert.equal(r.tury, box.ChatRules.MAX_TUR);
  });

  test("before the ceiling it is not over", () => {
    /* The positive half: a `koniec` stuck at true would end every
       conversation on the first line and look like a very short scene. */
    const r = rozmowa();
    r.dodajStudenta("ciao");
    assert.equal(r.koniec, false);
  });
});
