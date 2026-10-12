import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

function freshConsent() {
  const box = loadEngine({ files: [...CORE, "assets/js/consent.js"] });
  box.Core.load();
  return { box, consent: box.sandbox.Consent };
}

describe("the speech-recognition consent gate", () => {
  /* Returning students must not be asked again before each voice exercise. */
  test("existing consent runs the action immediately without asking", () => {
    const { consent } = freshConsent();
    consent.ustaw(true);
    const events = [];
    consent.uzyjPytania(() => events.push("asked"));
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    assert.deepEqual(events, ["action"]);
  });

  /* A view without a question must never send the student's voice silently. */
  test("without a question the gate calls refusal", () => {
    const { consent } = freshConsent();
    const events = [];
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    assert.deepEqual(events, ["refused"]);
    assert.equal(consent.udzielona(), false);
  });

  /* Approval must survive closing the tab and precede the protected action. */
  test("a yes persists speech consent and runs the action", () => {
    const { box, consent } = freshConsent();
    const events = [];
    consent.uzyjPytania(answer => {
      events.push("asked");
      answer(true);
    });
    consent.zZgoda(() => events.push(consent.udzielona()), () => events.push("refused"));
    box.flush();
    assert.deepEqual(events, ["asked", true]);
    assert.equal(box.Core.state.settings.sttConsent, true);
    assert.equal(box.stored().settings.sttConsent, true);
  });

  /* Declining must report refusal without creating a saved permission. */
  test("a no calls refusal and leaves storage unchanged", () => {
    const { box, consent } = freshConsent();
    box.flush();
    const before = box.stored();
    const events = [];
    consent.uzyjPytania(answer => answer(false));
    consent.zZgoda(() => events.push("action"), () => events.push("refused"));
    box.flush();
    assert.deepEqual(events, ["refused"]);
    assert.equal(consent.udzielona(), false);
    assert.deepEqual(box.stored(), before);
  });

  /* Revoking a saved choice must close the gate on the next exercise too. */
  test("ustaw false persists revocation and asks again", () => {
    const { box, consent } = freshConsent();
    consent.ustaw(true);
    box.flush();
    assert.equal(box.stored().settings.sttConsent, true);
    consent.ustaw(false);
    box.flush();
    const events = [];
    consent.uzyjPytania(() => events.push("asked"));
    consent.zZgoda(() => events.push("action"));
    assert.deepEqual(events, ["asked"]);
    assert.equal(consent.udzielona(), false);
    assert.equal(box.stored().settings.sttConsent, false);
  });

  /* Voice, answer judging and whole conversations are separate permissions. */
  test("granting and revoking each consent leaves the other two unchanged", () => {
    const { consent } = freshConsent();
    const read = () => [consent.udzielona(), consent.udzielonaLlm(), consent.udzielonaChat()];
    const setters = ["ustaw", "ustawLlm", "ustawChat"];
    for (const [index, setter] of setters.entries()) {
      consent[setter](true);
      assert.deepEqual(read(), setters.map((_, position) => position === index));
      consent[setter](false);
      assert.deepEqual(read(), [false, false, false]);
    }
    setters.forEach(setter => consent[setter](true));
    for (const [index, setter] of setters.entries()) {
      consent[setter](false);
      assert.deepEqual(read(), setters.map((_, position) => position !== index));
      consent[setter](true);
    }
  });
});
