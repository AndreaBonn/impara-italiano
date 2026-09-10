/* ============================================================
   The flow of a conversation (assets/js/talk-run.js).

   A branching scene has four things that break without leaving a trace on
   screen: the choice of branch, the score, the rewind to the last choice and
   the counting of mistakes. The wrong branch looks like a different scene, a
   lost point like stricter marking, a rewind to the wrong place like a dialogue
   rewritten from scratch. None of them shows without playing the whole scene
   through - and as long as this logic sat inside the function drawing the
   bubbles, the only way through was Playwright.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/talk-run.js"];

function Talk() {
  return loadEngine({ files: PLIKI }).sandbox.Talk;
}

/** A simple scene: the other speaker, the student's line, the other speaker. */
function prosta() {
  return {
    id: "c1",
    turns: [
      { sp: "A", it: "Cosa prende?" },
      { sp: "TY", accept: ["un caffè", "vorrei un caffè"], hintIt: "Vorrei un caffè", tr: "Poproszę kawę" },
      { sp: "A", it: "Subito." }
    ]
  };
}

/** A branching scene: two lines, one of which jumps to the end. */
function zRozwidleniem() {
  return {
    id: "c2",
    turns: [
      { sp: "A", it: "Prende altro?" },
      { sp: "TY", opts: [
        { accept: ["solo un caffè"], hintIt: "Solo un caffè", tr: "Tylko kawa", go: "koniec" },
        { accept: ["un caffè e un dolce"], hintIt: "Un caffè e un dolce", tr: "Kawa i deser" }
      ] },
      { sp: "A", it: "Ecco il dolce." },
      { id: "koniec", sp: "A", it: "Ecco." }
    ]
  };
}

describe("walking through a scene", () => {
  test("the other speaker's line is not the student's turn and does not count towards the score", () => {
    const run = Talk().create(prosta());
    assert.equal(run.mine(), false);
    assert.equal(run.current().it, "Cosa prende?");

    run.advance();
    assert.equal(run.mine(), true, "the second turn belongs to the student");
    assert.equal(run.turns, 0, "changing turn on its own counts nothing");
  });

  test("the scene ends after the last turn, not on it", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("un caffè");
    assert.equal(run.done, false, "the other speaker still has a line left");
    run.advance();
    assert.equal(run.done, true);
  });

  test("an empty conversation is finished immediately instead of waiting for a turn", () => {
    const run = Talk().create({ id: "x", turns: [] });
    assert.equal(run.done, true);
    assert.equal(run.current(), null);
  });
});

describe("the student's answer", () => {
  function naTurzeUcznia(conv) {
    const run = Talk().create(conv || prosta());
    run.advance();
    run.beginTurn(0);
    return run;
  }

  test("a correct answer gives a point and moves the scene on", () => {
    const run = naTurzeUcznia();
    const w = run.answer("un caffè");

    assert.equal(w.ok, true);
    assert.equal(w.punkt, true);
    assert.equal(w.tekst, "un caffè", "the bubble shows what the student said");
    assert.equal(w.tr, "Poproszę kawę");
    assert.equal(run.score, 1);
    assert.equal(run.index, 2);
  });

  test("a small slip still passes: this is a conversation, not a dictation", () => {
    const run = naTurzeUcznia();
    assert.equal(run.answer("un cafe").ok, true, "a missing accent must not stop the scene");
  });

  test("a wrong answer STOPS the scene instead of putting the model line in the bubble", () => {
    const run = naTurzeUcznia();
    const w = run.answer("completamente diverso");

    assert.equal(w.ok, false);
    assert.equal(run.index, 1, "we are still on the same turn");
    assert.equal(run.score, 0);
  });

  test("a mistake counts once per turn, not once per attempt", () => {
    /* Ten attempts at one sentence make one mistake in the notebook, not
       ten: otherwise a single hard sentence floods the deck. */
    const run = naTurzeUcznia();
    assert.equal(run.answer("nie to").pierwszaPomylka, true);
    assert.equal(run.answer("też nie").pierwszaPomylka, false);
    assert.equal(run.answer("dalej nie").pierwszaPomylka, false);
  });

  test("a correction after a mistake passes, but without a point", () => {
    const run = naTurzeUcznia();
    run.answer("completamente diverso");
    const w = run.answer("un caffè");

    assert.equal(w.ok, true);
    assert.equal(w.punkt, false, "the point is for answering right away");
    assert.equal(run.score, 0);
    assert.equal(run.turns, 1, "the turn is counted despite the mistake");
  });
});

describe("branches", () => {
  function naWyborze() {
    const run = Talk().create(zRozwidleniem());
    run.advance();
    run.beginTurn(7);
    return run;
  }

  test("the branch CLOSEST to the utterance wins, not the first that matches", () => {
    /* "just a coffee" and "a coffee and a dessert" are similar to each other;
       taking the first one at hand would send the student into a scene they
       did not ask for. */
    const run = naWyborze();
    const w = run.answer("un caffè e un dolce");

    assert.equal(w.ok, true);
    assert.equal(w.tr, "Kawa i deser");
    assert.equal(run.current().it, "Ecco il dolce.", "the second branch moves on by one");
  });

  test("a branch with `go` jumps to the turn with that id, not one further on", () => {
    const run = naWyborze();
    run.answer("solo un caffè");
    assert.equal(run.current().it, "Ecco.", "a jump by id, not by index");
  });

  test("clicking a branch does not go through the similarity threshold", () => {
    /* The student picked a line from a list: there is nothing to grade. Were
       the click to go through the comparison, the choice could get stuck on
       its own hint. */
    const run = naWyborze();
    const w = run.choose(1);

    assert.equal(w.ok, true);
    assert.equal(w.tekst, "Un caffè e un dolce", "the bubble gets the hint, not the answer key");
    assert.equal(w.punkt, true);
    assert.equal(run.current().it, "Ecco il dolce.");
  });

  test("an unknown jump target ends the scene instead of breaking the run", () => {
    const conv = zRozwidleniem();
    conv.turns[1].opts[0].go = "tejturyniema";
    const run = Talk().create(conv);
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");

    assert.equal(run.done, true);
    assert.equal(run.current(), null);
  });
});

describe("show the answer", () => {
  test("the model line enters the transcript, the scene moves on, there is no point", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    const w = run.reveal();

    assert.equal(w.tekst, "Vorrei un caffè", "the model line comes from the hint, not from the matching key");
    assert.equal(w.pierwszaPomylka, true);
    assert.equal(run.score, 0);
    assert.equal(run.index, 2);
  });

  test("after an earlier mistake it does not add a second one", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("zupełnie nie to");
    assert.equal(run.reveal().pierwszaPomylka, false);
  });

  test("at a branch it takes the first one: the direction cannot be guessed", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    const w = run.reveal();

    assert.equal(w.tekst, "Solo un caffè");
    assert.equal(run.current().it, "Ecco.", "the first branch has `go`, so it jumps");
  });

  test("with no hint the accepted Italian version becomes the model line", () => {
    const conv = prosta();
    delete conv.turns[1].hintIt;
    const run = Talk().create(conv);
    run.advance(); run.beginTurn(0);

    assert.equal(run.reveal().tekst, "un caffè");
  });
});

describe("rewinding to the last choice", () => {
  test("it returns to the branch with the state from before the choice", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance();
    run.beginTurn(7);            // 7 = the transcript length at the moment of the choice
    run.answer("solo un caffè");
    assert.equal(run.score, 1);

    const w = run.rewind();
    assert.equal(w.znak, 7, "the view cuts the bubbles exactly where the student was choosing");
    assert.equal(run.index, 1, "we are back on the turn with the choice");
    assert.equal(run.score, 0, "the point for that branch does not stay");
    assert.equal(run.turns, 0, "nor does the counted turn");
  });

  test("the second branch gives its own point, it does not add to the previous one", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");
    run.rewind();
    run.beginTurn(0);
    run.answer("un caffè e un dolce");

    assert.equal(run.score, 1);
    assert.equal(run.turns, 1);
  });

  test("a scene with no branch has nowhere to rewind to", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("un caffè");

    assert.equal(run.canRewind, false, "the \"other branch\" button must not appear");
    assert.equal(run.rewind(), null);
  });

  test("after a rewind the choice point is spent", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");

    assert.equal(run.canRewind, true);
    run.rewind();
    assert.equal(run.canRewind, false, "we go back to a choice once, not round and round to the same one");
  });

  test("a mistake from before the rewind does not follow the new branch", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("zupełnie nie to");
    run.rewind();
    run.beginTurn(0);

    assert.equal(run.answer("solo un caffè").punkt, true,
      "a fresh pass through the branch starts without somebody else's mistake");
  });
});
