/* ============================================================
   The second judge on the wire (assets/js/llm.js).

   The cascade is the part of this feature nobody can watch. It runs while
   the student is looking at an exercise already marked wrong, against four
   companies, on keys we cannot see, and every one of its failure modes ends
   the same way on screen: nothing happens. A provider quietly retired for
   the session, a chain that gave up early, a request that went out twice —
   all of them look exactly like a correct sentence that was not promoted.

   So the transport is replaceable and every branch is walked here.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, LLM } from "./_harness.mjs";

const FILES = [...CORE, ...LLM];

const TASK = {
  question: "Ordina un caffè.",
  accepted: ["vorrei un caffè"],
  given: "prendo un caffè"
};

const REJECTED = { status: 401, json: { error: { message: "bad key" } } };
const BUSY = { status: 429, json: { error: { message: "slow down" } } };

/**
 * A successful answer in the shape THAT provider actually returns.
 *
 * Not a detail of the fixture: an OpenAI-shaped body handed to Gemini is
 * read as a withheld answer, the provider is retired, and the chain moves
 * on — so a test written with one shape for all four measures the cascade
 * recovering from a fault the test invented. It looks like a bug in the
 * code and is a lie in the scaffolding.
 */
function answer(id, esito, commento) {
  const text = JSON.stringify({ esito: esito, commento: commento || "" });
  if (id === "gemini") {
    return { status: 200, json: { candidates: [{ content: { parts: [{ text: text }] } }] } };
  }
  if (id === "anthropic") {
    return { status: 200, json: { content: [{ type: "text", text: text }] } };
  }
  return { status: 200, json: { choices: [{ message: { content: text } }] } };
}

/**
 * A course with keys, consent and a scripted set of answers.
 *
 * `answers` maps a provider id to what its endpoint replies. `calls`
 * records who was actually asked, in order — the only way to tell "the
 * chain moved on" from "the chain gave up".
 */
function course(options) {
  const opts = options || {};
  const b = loadEngine({ files: FILES });
  b.Core.load();

  const keys = opts.keys || { gemini: "key-gemini-1", openai: "key-openai-2" };
  Object.keys(keys).forEach((id) => b.sandbox.LlmKeys.set(id, keys[id]));
  if (opts.order) b.Core.state.settings.llmOrder = opts.order;
  if (opts.consent !== false) b.sandbox.Consent.ustawLlm(true);

  const calls = [];
  b.sandbox.Llm.useTransport((req) => {
    const id = idOf(req.url);
    calls.push(id);
    const scripted = (opts.answers || {})[id];
    if (scripted === "hang") return new Promise(() => {});
    if (scripted === "throw") return Promise.reject(new Error("network down"));
    if (scripted === "no") return Promise.resolve(answer(id, "NO", "Zły czas."));
    return Promise.resolve(scripted || answer(id, "SI", "Dobrze."));
  });

  return { box: b, Llm: b.sandbox.Llm, calls, storage: b.storage };
}

function idOf(url) {
  if (url.indexOf("googleapis") >= 0) return "gemini";
  if (url.indexOf("groq") >= 0) return "groq";
  if (url.indexOf("openai") >= 0) return "openai";
  return "anthropic";
}

/** judge() speaks in callbacks; the tests read better as promises. */
function judge(Llm, task) {
  return new Promise((resolve) => Llm.judge(task || TASK, resolve));
}

describe("whether the judge runs at all", () => {
  test("not from a disk: there the request cannot succeed", async () => {
    const b = loadEngine({ files: FILES, protocol: "file:" });
    b.Core.load();
    b.sandbox.LlmKeys.set("openai", "key-openai-2");
    b.sandbox.Consent.ustawLlm(true);
    assert.equal(b.sandbox.Llm.available(), false);
    /* Paired: over https the same profile is available, so the guard is
       about the protocol and not about something else being missing. */
    const served = course();
    assert.equal(served.Llm.available(), true);
  });

  test("not without a key", async () => {
    const c = course({ keys: {} });
    assert.equal(c.Llm.available(), false);
    assert.equal(await judge(c.Llm), null);
    assert.deepEqual(Array.from(c.calls), [], "it went to the network with no key");
  });

  test("not without consent, and nothing leaves while it is missing", async () => {
    const c = course({ consent: false });
    assert.equal(await judge(c.Llm), null);
    assert.deepEqual(Array.from(c.calls), [],
      "the student's sentence left before they agreed");
  });
});

describe("the verdict", () => {
  test("a promotion comes back with its comment", async () => {
    const c = course();
    const out = await judge(c.Llm);
    assert.equal(out.promote, true);
    assert.equal(out.comment, "Dobrze.");
  });

  test("a rejection by the model is a rejection", async () => {
    const c = course({ answers: { gemini: "no" } });
    const out = await judge(c.Llm);
    assert.equal(out.promote, false);
    assert.deepEqual(Array.from(c.calls), ["gemini"],
      "a NO is an answer: the chain must stop, not shop for a better one");
  });

  test("the student's order decides who is asked first", async () => {
    const c = course({ order: ["openai", "gemini"] });
    await judge(c.Llm);
    assert.equal(c.calls[0], "openai");
    const d = course({ order: ["gemini", "openai"] });
    await judge(d.Llm);
    assert.equal(d.calls[0], "gemini");
  });
});

describe("the cascade", () => {
  test("a rejected key moves to the next provider", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: REJECTED } });
    const out = await judge(c.Llm);
    assert.equal(out.promote, true, "the chain gave up on the first refusal");
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai"]);
  });

  test("a rejected key is not asked again this session", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: REJECTED } });
    await judge(c.Llm);
    await judge(c.Llm, { ...TASK, given: "un caffè per favore" });
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai", "openai"],
      "a key we know is rejected was tried again");
  });

  test("a rate limit moves on but keeps the provider eligible", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: BUSY } });
    await judge(c.Llm);
    await judge(c.Llm, { ...TASK, given: "un caffè per favore" });
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai", "gemini", "openai"],
      "a provider that was merely busy was retired");
  });

  test("a network failure is transient, not a verdict on the key", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: "throw" } });
    const out = await judge(c.Llm);
    assert.equal(out.promote, true);
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai"]);
  });

  test("a chain with nothing left returns no verdict, not an error", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: REJECTED, openai: REJECTED }
    });
    assert.equal(await judge(c.Llm), null);
  });
});

describe("what reaches the student when the chain fails", () => {
  test("rejected keys are worth a message: nothing else would mention them", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: REJECTED, openai: REJECTED }
    });
    await judge(c.Llm);
    assert.deepEqual(Array.from(c.box.visible()), ["llm.keysRejected"]);
  });

  test("a chain of timeouts says nothing at all", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: BUSY, openai: BUSY }
    });
    await judge(c.Llm);
    assert.deepEqual(Array.from(c.box.visible()), [],
      "an optional feature interrupted a lesson over a network hiccup");
  });

  test("the message arrives once, not once per exercise", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: REJECTED, openai: REJECTED }
    });
    await judge(c.Llm);
    await judge(c.Llm, { ...TASK, given: "altro" });
    assert.equal(Array.from(c.box.visible()).length, 1);
  });
});

describe("what the student pays for", () => {
  test("the same sentence twice is bought once", async () => {
    const c = course();
    const first = await judge(c.Llm);
    const second = await judge(c.Llm);
    assert.equal(second.promote, first.promote);
    assert.equal(c.calls.length, 1, "the second attempt was paid for twice");
  });

  test("a different sentence is a different question", async () => {
    const c = course();
    await judge(c.Llm);
    await judge(c.Llm, { ...TASK, given: "un caffè per favore" });
    assert.equal(c.calls.length, 2);
  });

  test("the session has a ceiling, and it is theirs to hit", async () => {
    const c = course();
    const over = c.Llm.MAX_PER_SESSION + 5;
    const verdicts = [];
    for (let i = 0; i < over; i++) {
      verdicts.push(await judge(c.Llm, { ...TASK, given: "risposta numero " + i }));
    }
    /* The ceiling counts judgements, not requests: one judgement can cost
       several requests when the chain has to move on. */
    const answered = verdicts.filter((v) => v !== null).length;
    assert.equal(answered, c.Llm.MAX_PER_SESSION);
    assert.equal(verdicts[over - 1], null, "the last one was still being paid for");
  });
});

describe("trying a key from the settings page", () => {
  test("a working key reports success", async () => {
    const c = course();
    const out = await new Promise((r) => c.Llm.test("openai", "key-openai-2", r));
    assert.equal(out.ok, true);
  });

  test("a rejected key reports the provider's words, without the key in them", async () => {
    const c = course({ answers: { openai: { status: 401, json: { error: { message: "key key-openai-2 is invalid" } } } } });
    const out = await new Promise((r) => c.Llm.test("openai", "key-openai-2", r));
    assert.equal(out.ok, false);
    assert.ok(out.error.indexOf("key-openai-2") < 0, "the key was printed on screen");
  });

  test("a provider retired earlier can still be tested: that is why they came", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: REJECTED } });
    await judge(c.Llm);
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai"]);

    /* The student fixes the key and presses «try». A chain that skipped the
       retired provider would report a failure it is no longer having. */
    c.box.sandbox.Llm.useTransport(() => Promise.resolve(answer("gemini", "SI")));
    const out = await new Promise((r) => c.Llm.test("gemini", "new-key", r));
    assert.equal(out.ok, true);
  });
});

describe("the budget", () => {
  /**
   * A provider that never answers.
   *
   * The sandbox clock does not tick by itself — `box.flush()` fires what is
   * pending — so the wait costs microseconds instead of three seconds, and
   * the test measures the decision rather than the delay.
   */
  test("a provider that hangs is abandoned, and the chain moves on", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: "hang" }
    });

    const verdict = judge(c.Llm);
    /* Let the request go out, then let the clock reach the deadline. */
    await Promise.resolve();
    c.box.flush();

    assert.equal((await verdict).promote, true, "the chain waited for a provider that never answered");
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai"]);
  });

  test("hanging is transient: the provider is asked again next time", async () => {
    const c = course({ order: ["gemini", "openai"], answers: { gemini: "hang" } });

    const first = judge(c.Llm);
    await Promise.resolve();
    c.box.flush();
    await first;

    const second = judge(c.Llm, { ...TASK, given: "un caffè per favore" });
    await Promise.resolve();
    c.box.flush();
    await second;

    assert.deepEqual(Array.from(c.calls), ["gemini", "openai", "gemini", "openai"],
      "a provider that was merely slow was retired for the session");
  });
});

/* ============================================================
   The transport itself.

   Everywhere above it is replaced, which is what makes the cascade
   testable at all — but that leaves the real one, the piece that actually
   speaks HTTP, walked by nothing. It needs no network: what it does is
   read the body, try to parse it, and hand back a status either way. A
   `fetch` in the sandbox is enough to check that, and the branch that
   matters is the one where the body is not JSON at all — a proxy error
   page, an HTML 502 — which must arrive as a status rather than as an
   exception in the middle of a lesson.
   ============================================================ */
describe("the real transport", () => {
  function zFetchem(odpowiedz) {
    const b = loadEngine({ files: FILES });
    b.Core.load();
    b.sandbox.LlmKeys.set("openai", "key-openai-2");
    b.sandbox.Consent.ustawLlm(true);
    b.Core.state.settings.llmOrder = ["openai"];

    const zapytania = [];
    b.sandbox.fetch = (url, opcje) => {
      zapytania.push({ url, opcje });
      return Promise.resolve({ status: odpowiedz.status, text: () => Promise.resolve(odpowiedz.body) });
    };
    return { box: b, Llm: b.sandbox.Llm, zapytania };
  }

  test("a JSON answer becomes a verdict, and the request carries the key", async () => {
    const c = zFetchem({ status: 200, body: JSON.stringify(answer("openai", "SI", "Dobrze.").json) });
    const out = await judge(c.Llm);
    assert.equal(out.promote, true);
    assert.equal(out.comment, "Dobrze.");

    const req = c.zapytania[0];
    assert.equal(req.opcje.method, "POST");
    assert.equal(req.opcje.headers.authorization, "Bearer key-openai-2");
    assert.ok(req.opcje.body.indexOf("prendo un caff") > 0, "the sentence never went out");
  });

  test("a body that is not JSON is a failure, not an exception", async () => {
    const c = zFetchem({ status: 502, body: "<html><body>Bad Gateway</body></html>" });
    assert.equal(await judge(c.Llm), null);
  });
});

/* ============================================================
   Reading a composition — an opinion, not a verdict.

   The difference from `judge` is the whole reason this is a second entry
   point rather than a flag: there is no clamp here, because there is
   nothing to clamp. The course does not mark compositions, so the model
   changes no score, no card and no progress, and what comes back is prose
   the caller draws as text.
   ============================================================ */
describe("reading a composition", () => {
  const ZADANIE = { title: "La mia giornata", prompt: "Racconta una giornata tipo." };
  const TEKST = "Ieri sono andato al mare e ho mangiato un gelato.";

  function opinia(Llm, text) {
    return new Promise((resolve) => Llm.review(ZADANIE, text || TEKST, resolve));
  }

  /** The providers answer with prose here, not with a JSON verdict. */
  function proza(id, tekst) {
    if (id === "gemini") {
      return { status: 200, json: { candidates: [{ content: { parts: [{ text: tekst }] } }] } };
    }
    if (id === "anthropic") {
      return { status: 200, json: { content: [{ type: "text", text: tekst }] } };
    }
    return { status: 200, json: { choices: [{ message: { content: tekst } }] } };
  }

  test("the model's prose comes back as it was written", async () => {
    const c = course({ order: ["openai"], answers: { openai: proza("openai", "Uwaga: «sono andato» jest poprawne.") } });
    assert.equal(await opinia(c.Llm), "Uwaga: «sono andato» jest poprawne.");
  });

  test("no key, no consent, no reading", async () => {
    const bezKlucza = course({ keys: {} });
    assert.equal(await opinia(bezKlucza.Llm), null);
    assert.deepEqual(Array.from(bezKlucza.calls), []);

    const bezZgody = course({ consent: false });
    assert.equal(await opinia(bezZgody.Llm), null);
    assert.deepEqual(Array.from(bezZgody.calls), [],
      "the composition left before the student agreed");
  });

  test("the cascade applies here too", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: REJECTED, openai: proza("openai", "Dobrze napisane.") }
    });
    assert.equal(await opinia(c.Llm), "Dobrze napisane.");
    assert.deepEqual(Array.from(c.calls), ["gemini", "openai"]);
  });

  test("a chain with nothing left returns no opinion, not an error", async () => {
    const c = course({
      order: ["gemini", "openai"],
      answers: { gemini: REJECTED, openai: REJECTED }
    });
    assert.equal(await opinia(c.Llm), null);
  });

  test("the same composition asked twice is asked twice", async () => {
    const c = course({ order: ["openai"], answers: { openai: proza("openai", "ok") } });
    await opinia(c.Llm);
    await opinia(c.Llm);
    /* Deliberately not cached: a student who edits between two readings is
       asking about a different text, and a key that carried the whole
       composition would be the only way to tell them apart. */
    assert.equal(c.calls.length, 2);
  });

  test("it draws on the same session ceiling as the judge", async () => {
    const c = course({ order: ["openai"], answers: { openai: proza("openai", "ok") } });
    for (let i = 0; i < c.Llm.MAX_PER_SESSION; i++) {
      await judge(c.Llm, { ...TASK, given: "risposta " + i });
    }
    assert.equal(await opinia(c.Llm), null, "the ceiling counts judgements but not readings");
  });
});
