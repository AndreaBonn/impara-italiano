/* ============================================================
   The decisions of the second judge (assets/js/llm-rules.js).

   The file promises two things the rest of the feature is built on, and
   both of them fail quietly when broken:

   - the model can only ever promote a rejection, never cause one. Broken,
     the course starts rejecting answers it used to accept, and the student
     reads that as the course having got stricter overnight;
   - nothing throws. Broken, an exception lands in the middle of an exercise
     already marked wrong, and an optional nicety takes the lesson with it.

   Neither is visible in a browser without four paid keys and a model in a
   bad mood, which is why both are pinned here.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/* text.js first, the same order as index.html and as PRECACHE: cacheKey
   normalises through Txt.norm, and reads it at call time. */
function rules() {
  return loadEngine({ files: ["assets/js/text.js", "assets/js/llm-rules.js"] }).sandbox.LlmRules;
}

const TASK = {
  question: "Ordina un caffè.",
  accepted: ["vorrei un caffè", "un caffè per favore"],
  given: "prendo un caffè"
};

describe("the clamp: what the model is allowed to change", () => {
  test("a local acceptance survives a model that says NO", () => {
    const R = rules();
    const out = R.clamp(true, { promote: false, comment: "sbagliato" });
    assert.equal(out.ok, true, "the model turned an accepted answer into a rejected one");
    assert.equal(out.promoted, false);
    assert.equal(out.comment, "", "a comment on an answer the course accepted is noise");
  });

  test("a local rejection is promoted when the model says SI", () => {
    const R = rules();
    const out = R.clamp(false, { promote: true, comment: "Poprawnie." });
    assert.equal(out.ok, true);
    assert.equal(out.promoted, true);
    assert.equal(out.comment, "Poprawnie.");
  });

  test("a local rejection stands when the model says NO", () => {
    const R = rules();
    const out = R.clamp(false, { promote: false, comment: "zły czas" });
    assert.equal(out.ok, false);
    assert.equal(out.promoted, false);
    /* The comment survives the rejection: it is the sentence that says WHY
       the answer is wrong, which is worth more to the student than the
       promotion they did not get. Dropping it here would send every caller
       back to reading the raw verdict, and a gate everybody walks around
       is not a gate. */
    assert.equal(out.comment, "zły czas");
  });

  test("no verdict at all is the course as it behaves today", () => {
    const R = rules();
    for (const nothing of [null, undefined, {}, { promote: "yes" }, "SI"]) {
      assert.equal(R.clamp(false, nothing).ok, false, String(nothing));
      assert.equal(R.clamp(true, nothing).ok, true, String(nothing));
    }
  });
});

describe("reading the model's answer", () => {
  test("the exact word promotes, and so does a lazily-cased one", () => {
    const R = rules();
    assert.equal(R.readVerdict('{"esito":"SI","commento":"ok"}').promote, true);
    assert.equal(R.readVerdict('{"esito":"si"}').promote, true);
    assert.equal(R.readVerdict('{"esito":" Si "}').promote, true);
  });

  test("the accented word promotes too: in Italian that is how yes is spelled", () => {
    const R = rules();
    /* A model writing correct Italian writes "sì". Rejecting it would be a
       promotion that never arrives, and a promotion that never arrives is
       indistinguishable on screen from a sentence that was simply wrong —
       on keys we cannot see, in traffic that never reaches us. */
    assert.equal(R.readVerdict('{"esito":"SÌ"}').promote, true);
    assert.equal(R.readVerdict('{"esito":"sì"}').promote, true);
    /* The enum stays closed: the neighbouring word is still a rejection. */
    assert.equal(R.readVerdict('{"esito":"NO"}').promote, false);
  });

  test("everything a boolean would have let through does not promote", () => {
    const R = rules();
    /* This is the whole reason the field is an enum: each of these is a
       shape some model somewhere will send, and a permissive conversion
       would read half of them as approval. */
    const notYes = ['{"esito":true}', '{"esito":"true"}', '{"esito":1}',
      '{"esito":"yes"}', '{"esito":"YES"}', '{"esito":"NO"}',
      '{"esito":""}', '{"esito":null}', '{"commento":"looks right to me"}'];
    for (const answer of notYes) {
      assert.equal(R.readVerdict(answer).promote, false, answer);
    }
    /* Paired: the same reader does promote when the word is right, so the
       run above is not passing because nothing ever promotes. */
    assert.equal(R.readVerdict('{"esito":"SI"}').promote, true);
  });

  test("the JSON is found inside a preamble or a fenced block", () => {
    const R = rules();
    const wrapped = 'Sure! Here is my verdict:\n```json\n{"esito":"SI","commento":"Dobrze."}\n```';
    const out = R.readVerdict(wrapped);
    assert.equal(out.promote, true);
    assert.equal(out.comment, "Dobrze.");
  });

  test("nonsense is not a verdict, and does not throw", () => {
    const R = rules();
    const junk = [null, undefined, "", "SI", "{", "}{", "{not json}", 42,
      "{\"esito\":", '["SI"]', "<thinking>the answer is SI</thinking>"];
    for (const j of junk) {
      assert.equal(R.readVerdict(j).promote, false, String(j));
    }
    /* Paired inside the same test: without this the run above would pass
       against a reader that never promotes anything at all. */
    assert.equal(R.readVerdict('{"esito":"SI"}').promote, true);
  });

  test("the comment is trimmed to one line and capped", () => {
    const R = rules();
    const long = "x".repeat(500);
    const out = R.readVerdict(JSON.stringify({ esito: "SI", commento: "a\nb\tc" }));
    assert.equal(out.comment, "a b c", "newlines and tabs reach the page as a broken layout");
    const capped = R.readVerdict(JSON.stringify({ esito: "SI", commento: long }));
    assert.equal(capped.comment.length, R.MAX_COMMENT);
    /* Truncated, not discarded: the verdict is still a promotion. */
    assert.equal(capped.promote, true);
  });
});

describe("the cascade", () => {
  const KEYS = { gemini: "g", openai: "o", anthropic: "a" };

  test("the student's order is followed, not ours", () => {
    const R = rules();
    assert.equal(R.next(["openai", "gemini"], KEYS, {}), "openai");
    assert.equal(R.next(["gemini", "openai"], KEYS, {}), "gemini");
  });

  test("a provider without a key is skipped, not attempted", () => {
    const R = rules();
    assert.equal(R.next(["groq", "openai"], KEYS, {}), "openai");
  });

  test("a provider that failed permanently is out for the session", () => {
    const R = rules();
    assert.equal(R.next(["gemini", "openai"], KEYS, { gemini: true }), "openai");
    assert.equal(R.next(["gemini"], KEYS, { gemini: true }), null);
  });

  test("an empty or unusable chain yields nothing instead of throwing", () => {
    const R = rules();
    for (const bad of [null, undefined, [], ["nonexistent"]]) {
      assert.equal(R.next(bad, KEYS, {}), null, String(bad));
    }
    /* Paired with a chain that does resolve. */
    assert.equal(R.next(["openai"], KEYS, {}), "openai");
  });

  test("a name inherited from Object.prototype is not a key the student typed", () => {
    const R = rules();
    /* `keys["__proto__"]` is truthy on any plain object, so without an
       own-property check this chain reports a provider nobody configured.
       The order lives in settings, and settings ride inside the backup
       file that gets passed between people. */
    for (const borrowed of ["__proto__", "constructor", "toString"]) {
      assert.equal(R.next([borrowed], KEYS, {}), null, borrowed);
    }
    /* And a provider that was configured is still found. */
    assert.equal(R.next(["__proto__", "openai"], KEYS, {}), "openai");
  });
});

describe("what the student is told when the chain runs out", () => {
  test("keys that were rejected are worth interrupting them for", () => {
    const R = rules();
    const out = R.report([{ id: "gemini", kind: "permanent" }, { id: "openai", kind: "permanent" }]);
    assert.deepEqual(Array.from(out.keys), ["gemini", "openai"]);
  });

  test("a chain of timeouts says nothing at all", () => {
    const R = rules();
    assert.equal(R.report([{ id: "gemini", kind: "transient" }]), null);
    assert.equal(R.report([]), null);
    assert.equal(R.report(null), null);
    /* Paired: the same function does produce a message when it should. */
    assert.ok(R.report([{ id: "gemini", kind: "permanent" }]));
  });

  test("one transient failure is enough to stay quiet", () => {
    const R = rules();
    /* Mixed causes mean at least one provider might work next time, so the
       student has nothing to go and fix. */
    const mixed = R.report([{ id: "gemini", kind: "permanent" }, { id: "openai", kind: "transient" }]);
    assert.equal(mixed, null);
    /* Paired: the same two providers, both permanently down, do produce
       the message — so the silence above is about the mix, not about the
       function having stopped working. */
    assert.ok(R.report([{ id: "gemini", kind: "permanent" }, { id: "openai", kind: "permanent" }]));
  });
});


describe("the cache key", () => {
  test("the same sentence typed twice is the same question", () => {
    const R = rules();
    const a = R.cacheKey("pl", TASK, "Prendo un caffè!");
    const b = R.cacheKey("pl", TASK, "  prendo un caffe  ");
    assert.equal(a, b, "spacing and punctuation would buy a second paid request");
  });

  test("a different language is a different question: the comment is in it", () => {
    const R = rules();
    assert.notEqual(R.cacheKey("pl", TASK, "prendo un caffè"),
      R.cacheKey("de", TASK, "prendo un caffè"));
  });

  test("a different sentence is a different question", () => {
    const R = rules();
    assert.notEqual(R.cacheKey("pl", TASK, "prendo un caffè"),
      R.cacheKey("pl", TASK, "prendo un tè"));
  });
});
