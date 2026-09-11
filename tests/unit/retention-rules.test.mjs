/* ============================================================
   The three decisions behind the return hook (assets/js/retention-rules.js).

   Same split as pwa-rules.js against pwa.js, and for the same reason: what
   the browser does with the answer is hard to reproduce, the answer itself is
   arithmetic.

   Each of the three guards against something the student would experience as
   the course being rude rather than as a bug:

   - asking for permanent storage at the first screen is a permission prompt
     before a single lesson has been done, and a refusal is remembered by the
     browser, not by us: we get one shot and we would spend it on a stranger;
   - offering to install to somebody who already opened the installed app is
     a message with nothing behind it;
   - a badge is a promise about how much work is waiting. A number that walks
     upward while the student is away is a lie they discover on opening.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function reguly() {
  return loadEngine({ files: ["assets/js/retention-rules.js"] }).sandbox.RetentionRules;
}

const GODZINA = 3600 * 1000;
const TERAZ = Date.UTC(2026, 8, 11, 8, 0, 0);

/** A deck in the shape store.js keeps it: card key -> {due}. */
function talia(...terminy) {
  const out = {};
  terminy.forEach((t, i) => { out["k" + i] = { due: t }; });
  return out;
}

describe("retention: asking for permanent storage", () => {
  test("not at the first opening, before anything has been learned", () => {
    assert.equal(reguly().pytacOMiejsce({ lekcje: 0, pytano: false, trwale: false }), false);
  });

  test("after the first finished lesson: yes, once", () => {
    const R = reguly();
    assert.equal(R.pytacOMiejsce({ lekcje: 1, pytano: false, trwale: false }), true);
    assert.equal(R.pytacOMiejsce({ lekcje: 1, pytano: true, trwale: false }), false);
  });

  test("already granted: there is nothing to ask for", () => {
    assert.equal(reguly().pytacOMiejsce({ lekcje: 9, pytano: false, trwale: true }), false);
  });

  test("a missing state does not blow up and does not ask", () => {
    assert.equal(reguly().pytacOMiejsce(undefined), false);
  });
});

describe("retention: offering to install", () => {
  const gotowy = { lekcje: 3, pytano: false, odrzucona: false, samodzielna: false };

  test("below the threshold: no", () => {
    assert.equal(reguly().proponowacInstalacje({ ...gotowy, lekcje: 2 }), false);
  });

  test("at the threshold: yes", () => {
    assert.equal(reguly().proponowacInstalacje(gotowy), true);
  });

  test("a refusal is final: it does not come back at the next lesson", () => {
    assert.equal(reguly().proponowacInstalacje({ ...gotowy, lekcje: 40, odrzucona: true }), false);
  });

  test("asked once already: not again in this session", () => {
    assert.equal(reguly().proponowacInstalacje({ ...gotowy, pytano: true }), false);
  });

  test("already running as an installed app: nothing to offer", () => {
    assert.equal(reguly().proponowacInstalacje({ ...gotowy, samodzielna: true }), false);
  });
});

describe("retention: the number on the badge", () => {
  test("cards already due are counted", () => {
    const R = reguly();
    assert.equal(R.odznaka([talia(TERAZ - GODZINA, TERAZ - 1)], TERAZ), 2);
  });

  test("both decks count, because the badge inside the course counts both", () => {
    /* The rail badge next to "Powtórki" is `Core.dueCount() + Errors.dueCount()`
       (app.js), so a badge on the icon that counted only the vocabulary would
       show a different number under the same name: 7 on the home screen, 12
       after opening. The mistake notebook keeps the same {due} shape, so it
       is a second deck rather than a second rule. */
    const R = reguly();
    const slownik = talia(TERAZ - GODZINA);
    const bledy = talia(TERAZ - GODZINA, TERAZ - 2 * GODZINA);
    assert.equal(R.odznaka([slownik, bledy], TERAZ), 3);
  });

  test("a student with nothing but mistakes still gets a number", () => {
    /* The case that made this a bug rather than a preference: finish the
       reviews, get a few exercises wrong, and the icon said zero while the
       daily session had work waiting. */
    const R = reguly();
    assert.equal(R.odznaka([{}, talia(TERAZ - 1)], TERAZ), 1);
  });

  test("cards due inside the declared horizon are counted too", () => {
    /* The badge is written when the student leaves and nothing updates it
       while they are away. Counting only what is due at that instant gives
       zero to everybody who has just finished their reviews, which is to say
       the badge would never appear for the people who use the course best.
       So the quantity is "due within HORYZONT", it is declared under that
       name in the settings, and it is correct from the moment it matters. */
    const R = reguly();
    assert.equal(R.odznaka([talia(TERAZ + GODZINA)], TERAZ), 1);
    assert.equal(R.odznaka([talia(TERAZ + R.HORYZONT_MS - 1)], TERAZ), 1);
  });

  test("beyond the horizon they are not counted", () => {
    const R = reguly();
    assert.equal(R.odznaka([talia(TERAZ + R.HORYZONT_MS + 1)], TERAZ), 0);
  });

  test("an empty deck gives zero, not something falsy of another kind", () => {
    assert.equal(reguly().odznaka([{}], TERAZ), 0);
  });

  test("a card with no due date does not count as due", () => {
    /* A positive case stands next to it, because "nothing counted" is also
       what a broken counter returns. */
    const R = reguly();
    assert.equal(R.odznaka([{ a: {}, b: { due: null } }], TERAZ), 0);
    assert.equal(R.odznaka([{ a: {}, b: { due: TERAZ } }], TERAZ), 1);
  });

  test("a missing deck gives zero instead of throwing at the moment of leaving", () => {
    assert.equal(reguly().odznaka(undefined, TERAZ), 0);
  });
});
