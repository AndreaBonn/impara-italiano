/* ============================================================
   The rules of a free conversation (assets/js/chat-rules.js).

   The fourteen scripted conversations the course already has are written by
   a person: every branch, every acceptable answer, every mistake worth
   stopping on. This is the other thing — a partner that answers whatever
   the student says — and its rules are the ones a script does not need.

   WHAT THIS FILE IS FOR, in one line each:

   - THE CEILING. Every turn is paid for by the student with their own key,
     and the whole history is resent each time, so the cost of turn twelve
     is not the cost of turn one. A conversation with no end is a bill with
     no end.
   - THE PRUNING. When the history outgrows what we are willing to send, it
     gives way from the OLDEST end and always in whole turns: half a turn is
     a sentence with its answer cut off, which reads to the model as the
     student changing the subject.
   - THE READING. The model is asked for a reply and, separately, a
     correction. When it answers with something else, the conversation has
     to go on anyway: a turn that dies because a model forgot the format is
     a conversation that stops mid-sentence, and the student cannot tell
     that from being ignored.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function reguly() {
  return loadEngine({ files: ["assets/js/chat-rules.js"] }).sandbox.ChatRules;
}

/**
 * An array from inside the sandbox, copied into this realm.
 *
 * node:vm gives the engine its own Array.prototype and deepEqual compares
 * prototypes, so two lists holding the same strings fail to match and the
 * message shows them side by side, identical. The same helper, for the same
 * reason, sits in llm-providers.test.mjs.
 */
function copy(list) { return Array.from(list); }

/** A history of n turns, each one a pair: the student, then the partner. */
function historia(n, dlugosc) {
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push({ role: "student", text: "s" + i + "x".repeat(dlugosc || 0) });
    out.push({ role: "partner", text: "p" + i + "y".repeat(dlugosc || 0) });
  }
  return out;
}

describe("chat: the ceiling on a conversation", () => {
  test("a fresh conversation has all its turns ahead of it", () => {
    const R = reguly();
    assert.equal(R.zostalo([]), R.MAX_TUR);
    assert.equal(R.koniec([]), false);
  });

  test("only the student's turns count against the ceiling", () => {
    /* The partner's replies are not something the student spends: counting
       them would halve every conversation without saying so. */
    const R = reguly();
    assert.equal(R.zostalo(historia(3)), R.MAX_TUR - 3);
  });

  test("at the ceiling the conversation is over and says so", () => {
    const R = reguly();
    const pelna = historia(R.MAX_TUR);
    assert.equal(R.zostalo(pelna), 0);
    assert.equal(R.koniec(pelna), true);
  });

  test("past the ceiling it stays over instead of going negative", () => {
    const R = reguly();
    assert.equal(R.zostalo(historia(R.MAX_TUR + 5)), 0);
    assert.equal(R.koniec(historia(R.MAX_TUR + 5)), true);
  });
});

describe("chat: what gets sent", () => {
  test("a short history is sent whole", () => {
    const R = reguly();
    const h = historia(2);
    assert.deepEqual(copy(R.doWyslania(h)).map((t) => t.text), h.map((t) => t.text));
  });

  test("a long history gives way from the oldest end", () => {
    const R = reguly();
    const h = historia(20, 400);
    const wyslane = R.doWyslania(h);
    assert.ok(wyslane.length < h.length, "nothing was pruned at all");
    /* The newest turn survives: it is the one being answered. */
    assert.equal(wyslane[wyslane.length - 1].text, h[h.length - 1].text);
    /* The oldest is the one that went. */
    assert.notEqual(wyslane[0].text, h[0].text);
  });

  test("pruning never cuts a turn in half", () => {
    const R = reguly();
    const wyslane = R.doWyslania(historia(20, 400));
    const zrodlo = historia(20, 400).map((t) => t.text);
    wyslane.forEach((t) => assert.ok(zrodlo.indexOf(t.text) >= 0, "a turn was truncated: " + t.text));
  });

  test("what is sent fits the budget it declares", () => {
    const R = reguly();
    const dlugosc = R.doWyslania(historia(30, 300))
      .reduce((n, t) => n + t.text.length, 0);
    assert.ok(dlugosc <= R.MAX_ZNAKOW, `${dlugosc} > ${R.MAX_ZNAKOW}`);
  });

  test("one enormous turn does not empty the whole history", () => {
    /* A student who pastes a page has to get an answer to it. Sending
       nothing but an instruction would look like the partner ignoring them. */
    const R = reguly();
    const wyslane = R.doWyslania([{ role: "student", text: "z".repeat(50000) }]);
    assert.equal(wyslane.length, 1);
    assert.ok(wyslane[0].text.length <= R.MAX_ZNAKOW, "the single turn was not cut down");
  });

  test("a missing history is an empty one, not an exception", () => {
    const R = reguly();
    assert.deepEqual(copy(R.doWyslania(undefined)), []);
    assert.deepEqual(copy(R.doWyslania(null)), []);
  });
});

describe("chat: reading what came back", () => {
  test("a reply and a correction arrive separated", () => {
    const R = reguly();
    const out = R.czytaj('{"risposta":"Certo, un caffè!","correzione":"Si dice «vorrei», non «volere»."}');
    assert.equal(out.risposta, "Certo, un caffè!");
    assert.match(out.correzione, /vorrei/);
  });

  test("no correction is an empty string, never a missing field", () => {
    const R = reguly();
    const out = R.czytaj('{"risposta":"Certo!","correzione":""}');
    assert.equal(out.correzione, "");
    assert.equal(out.risposta, "Certo!");
  });

  test("prose instead of the format still moves the conversation", () => {
    /* The whole text becomes the reply. A turn that died because a model
       forgot the format is a conversation that stops mid-sentence, and the
       student cannot tell that from being ignored. */
    const R = reguly();
    const out = R.czytaj("Certo, arriva subito.");
    assert.equal(out.risposta, "Certo, arriva subito.");
    assert.equal(out.correzione, "");
  });

  test("an empty answer is no turn at all, and says so", () => {
    /* Distinct from the case above: there is nothing to put in the bubble,
       so the view has to know rather than draw an empty one. */
    const R = reguly();
    assert.equal(R.czytaj("").risposta, "");
    assert.equal(R.czytaj(null).risposta, "");
    assert.equal(R.czytaj('{"risposta":"","correzione":"x"}').risposta, "");
  });

  test("a reply that runs away is cut, and the cut is declared", () => {
    const R = reguly();
    const out = R.czytaj(JSON.stringify({ risposta: "a".repeat(5000), correzione: "b".repeat(5000) }));
    assert.ok(out.risposta.length <= R.MAX_REPLIKI, out.risposta.length);
    assert.ok(out.correzione.length <= R.MAX_REPLIKI, out.correzione.length);
  });

  test("control characters do not reach the bubble", () => {
    /* Checked by code point rather than with a character class: the linter
       refuses a control-character regex on sight, and is right to — it is
       indistinguishable from a typo. The engine strips them the same way,
       one charCodeAt at a time. */
    const out = reguly().czytaj('{"risposta":"Ciao\\u0007 a\\u001ftutti!","correzione":""}');
    for (let i = 0; i < out.risposta.length; i++) {
      const kod = out.risposta.charCodeAt(i);
      assert.ok(kod >= 32 && kod !== 127, `control character at ${i}: ${kod}`);
    }
    assert.ok(out.risposta.indexOf("Ciao") === 0, "and the text itself survived: " + out.risposta);
  });

  test("something that looks like JSON and is not becomes the reply", () => {
    /* Braces on both ends and rubbish in between: `JSON.parse` throws, and
       the turn still has to happen. The student sees the raw sentence rather
       than a conversation that stopped. */
    const out = reguly().czytaj('{risposta: Certo, arriva!}');
    assert.ok(out.risposta.length > 0, JSON.stringify(out));
    assert.equal(out.correzione, "");
  });

  test("an object that refuses to become a string is no turn, not a crash", () => {
    const out = reguly().czytaj({ toString: null });
    assert.equal(out.risposta, "");
    assert.equal(out.correzione, "");
  });

  test("it does not throw on anything a provider might return", () => {
    const R = reguly();
    for (const [opis, wejscie] of [
      ["a number", 42], ["an object", {}], ["an array", []],
      ["broken json", '{"risposta":'], ["null", null], ["undefined", undefined]
    ]) {
      assert.doesNotThrow(() => R.czytaj(wejscie), opis);
    }
  });
});
