/* ============================================================
   The four providers as data (assets/js/llm-providers.js).

   Every assertion here stands for a failure that looks like something else
   on screen. A body sent in the wrong shape comes back as "the key is
   wrong". An answer read from the wrong field comes back as "the model did
   not understand". A 200 that carries a withheld answer comes back as a
   student whose correct sentence was silently not promoted.

   None of it can be checked against the real services without four paid
   keys, which is exactly why the shape of the request and the reading of
   the answer live in pure functions and are checked here for pennies.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function providers() {
  return loadEngine({ files: ["assets/js/llm-providers.js"] }).sandbox.LlmProviders;
}

/**
 * An array from inside the sandbox, copied into this realm.
 *
 * node:vm gives the engine its own Array.prototype, and deepStrictEqual
 * compares prototypes: without this, two lists holding the same four
 * strings fail to match and the message shows the two identical lists side
 * by side.
 */
function copy(list) { return Array.from(list); }

const PROMPT = { system: "You judge Italian.", user: "Is «prendo un caffè» right?" };

describe("the table", () => {
  test("holds exactly the four providers the student was promised", () => {
    const P = providers();
    assert.deepEqual(copy(P.ORDER), ["gemini", "groq", "openai", "anthropic"]);
    assert.deepEqual(copy(P.list()).map((p) => p.id), copy(P.ORDER));
  });

  test("every provider carries a model, and it is a non-empty string", () => {
    const P = providers();
    for (const entry of P.list()) {
      assert.equal(typeof entry.model, "string", entry.id + " has no model");
      assert.ok(entry.model.length > 0, entry.id + " has an empty model");
    }
  });

  test("an unknown provider yields nothing instead of throwing", () => {
    const P = providers();
    assert.equal(P.get("mistral"), null);
    assert.equal(P.request("mistral", "k", PROMPT, {}), null);
    /* Paired with the positive case: without it this test would also pass
       against a `get` that returned null for everything. */
    assert.equal(P.get("openai").id, "openai");
  });

  test("a name borrowed from Object.prototype is not a provider", () => {
    const P = providers();
    /* `PROVIDERS["__proto__"]` resolves through the inherited accessor and
       hands back Object.prototype — an object, so a plain truthiness guard
       lets it through and the caller then asks it for `url()`.
       The chain of providers is stored in the student's settings, and
       settings travel in the exported backup file: this arrives from a file
       another person wrote, not from our own list. */
    for (const borrowed of ["__proto__", "constructor", "toString", "valueOf"]) {
      assert.equal(P.get(borrowed), null, borrowed + " passed for a provider");
      assert.equal(P.request(borrowed, "k", PROMPT, {}), null,
        borrowed + " built a request");
    }
  });
});

describe("the request each provider expects", () => {
  test("the key travels in a header, never in the address", () => {
    const P = providers();
    for (const id of P.ORDER) {
      const req = P.request(id, "SECRET-KEY", PROMPT, {});
      assert.ok(req.url.indexOf("SECRET-KEY") < 0,
        id + " puts the key in the URL, where it lands in logs and history");
      const carried = Object.keys(req.headers)
        .some((h) => String(req.headers[h]).indexOf("SECRET-KEY") >= 0);
      assert.ok(carried, id + " never sends the key at all");
    }
  });

  test("every address is https and belongs to that provider", () => {
    const P = providers();
    const host = {
      gemini: "generativelanguage.googleapis.com",
      groq: "api.groq.com",
      openai: "api.openai.com",
      anthropic: "api.anthropic.com"
    };
    for (const id of P.ORDER) {
      const url = P.request(id, "k", PROMPT, {}).url;
      assert.ok(url.indexOf("https://" + host[id]) === 0,
        id + " points at " + url);
    }
  });

  test("both halves of the prompt reach every provider", () => {
    const P = providers();
    for (const id of P.ORDER) {
      const sent = JSON.stringify(P.request(id, "k", PROMPT, {}).body);
      assert.ok(sent.indexOf("You judge Italian.") >= 0, id + " dropped the instruction");
      assert.ok(sent.indexOf("prendo un caff") >= 0, id + " dropped the student's sentence");
    }
  });

  test("the model can be overridden without touching this file", () => {
    const P = providers();
    const req = P.request("openai", "k", PROMPT, { model: "gpt-9-tiny" });
    assert.equal(req.body.model, "gpt-9-tiny");
    /* And the default still applies when nothing is overridden. */
    assert.equal(P.request("openai", "k", PROMPT, {}).body.model, P.get("openai").model);
  });

  test("Anthropic carries the three headers it refuses a browser without", () => {
    const P = providers();
    const h = P.request("anthropic", "k", PROMPT, {}).headers;
    assert.equal(h["x-api-key"], "k");
    assert.equal(h["anthropic-version"], "2023-06-01");
    assert.equal(h["anthropic-dangerous-direct-browser-access"], "true");
  });

  test("only the provider that still accepts a temperature is sent one", () => {
    const P = providers();
    /* Anthropic rejects a non-default value outright, Gemini 3 answers but
       loops, and OpenAI's reasoning family may refuse it. Groq is the one
       whose model still takes it — and it gets zero, so the same sentence
       judged twice in one lesson does not get two different verdicts. */
    assert.equal(P.request("groq", "k", PROMPT, {}).body.temperature, 0);
    assert.equal(P.request("anthropic", "k", PROMPT, {}).body.temperature, undefined);
    assert.equal(P.request("openai", "k", PROMPT, {}).body.temperature, undefined);
    assert.equal(
      P.request("gemini", "k", PROMPT, {}).body.generationConfig.temperature, undefined);
  });

  /* Every model here reasons before answering unless told not to, and on each
     one that reasoning is spent from the same ceiling as the reply. A request
     that leaves it unbounded comes back with no text — which this judge reads
     as a failure and, on Gemini, as a permanent one it retires itself over. */
  test("each thinking model is told how long to think", () => {
    const P = providers();
    assert.equal(
      P.request("gemini", "k", PROMPT, {}).body.generationConfig.thinkingConfig.thinkingLevel,
      "low");
    assert.equal(P.request("anthropic", "k", PROMPT, {}).body.output_config.effort, "low");
    assert.equal(P.request("openai", "k", PROMPT, {}).body.reasoning_effort, "none");
  });

  /* On a reasoning model the two names are no longer the same ceiling: the
     older one does not cover the tokens spent thinking. Sending it leaves the
     reply bounded by nothing we chose. */
  test("OpenAI is given the ceiling that counts reasoning", () => {
    const P = providers();
    const body = P.request("openai", "k", PROMPT, {}).body;
    assert.equal(body.max_completion_tokens, 2048);
    assert.equal(body.max_tokens, undefined);
    /* Groq's model is not in that family and keeps the original name. */
    assert.equal(P.request("groq", "k", PROMPT, {}).body.max_tokens, 2048);
  });

  test("the Gemini model goes in the address, where that provider wants it", () => {
    const P = providers();
    const url = P.request("gemini", "k", PROMPT, { model: "gemini-x" }).url;
    assert.ok(url.indexOf("/models/gemini-x:generateContent") > 0, url);
  });
});

describe("reading a successful answer", () => {
  test("OpenAI and Groq read the message content", () => {
    const P = providers();
    const answer = { choices: [{ message: { content: "SI" } }] };
    assert.equal(P.get("openai").read(200, answer).text, "SI");
    assert.equal(P.get("groq").read(200, answer).text, "SI");
  });

  test("Gemini joins the parts of the candidate", () => {
    const P = providers();
    const answer = { candidates: [{ content: { parts: [{ text: "S" }, { text: "I" }] } }] };
    assert.equal(P.get("gemini").read(200, answer).text, "SI");
  });

  test("Anthropic reads the text blocks and ignores the thinking blocks", () => {
    const P = providers();
    /* This is the shape thinking-on actually returns: an empty thinking
       block FIRST. Code that reads content[0] hands back "" and every
       verdict silently becomes a refusal to promote. */
    const answer = {
      content: [
        { type: "thinking", thinking: "" },
        { type: "text", text: '{"esito":"SI"}' }
      ]
    };
    assert.equal(P.get("anthropic").read(200, answer).text, '{"esito":"SI"}');
  });
});

describe("reading a failure", () => {
  test("a rejected key is permanent, a rate limit is not", () => {
    const P = providers();
    for (const id of P.ORDER) {
      const p = P.get(id);
      assert.equal(p.read(401, { error: { message: "bad key" } }).kind, "permanent", id);
      assert.equal(p.read(429, { error: { message: "slow down" } }).kind, "transient", id);
      assert.equal(p.read(503, {}).kind, "transient", id);
    }
  });

  test("a bad request does not retire the provider for the session", () => {
    const P = providers();
    /* 400 reads like a configuration fault and usually is not: it is most
       often about the sentence just sent. Retiring a working provider over
       one awkward exercise goes unnoticed for the rest of the session,
       while retrying a genuinely misconfigured one costs a few requests. */
    for (const id of P.ORDER) {
      assert.equal(P.get(id).read(400, { error: { message: "too long" } }).kind,
        "transient", id);
    }
  });

  test("the provider's own words survive, and a silent failure still says something", () => {
    const P = providers();
    const spoken = P.get("openai").read(401, { error: { message: "Incorrect API key" } });
    assert.equal(spoken.error, "Incorrect API key");
    const silent = P.get("openai").read(500, null);
    assert.equal(silent.error, "HTTP 500");
  });

  test("a 200 with nothing in it is an error, not an empty verdict", () => {
    const P = providers();
    assert.ok(P.get("openai").read(200, { choices: [] }).error);
    assert.ok(P.get("gemini").read(200, { candidates: [] }).error);
    assert.ok(P.get("anthropic").read(200, { content: [] }).error);
  });

  test("a withheld Gemini answer is permanent: sending it again changes nothing", () => {
    const P = providers();
    /* Both shapes of "withheld", because they are two branches in the
       reader and only one of them was covered: a candidate with no text,
       and no candidate at all. A safety filter produces either depending on
       where it fires, and reading one of them as transient would keep the
       chain asking a provider that has already made up its mind. */
    const bezTekstu = P.get("gemini").read(200, { candidates: [{ finishReason: "SAFETY" }] });
    assert.equal(bezTekstu.kind, "permanent");
    const bezKandydata = P.get("gemini").read(200, { candidates: [] });
    assert.equal(bezKandydata.kind, "permanent");
  });

  test("an Anthropic refusal is transient: it says nothing about the key", () => {
    const P = providers();
    const refused = P.get("anthropic").read(200, { stop_reason: "refusal", content: [] });
    assert.equal(refused.kind, "transient");
  });

  test("no provider throws on a body that makes no sense", () => {
    const P = providers();
    const rubbish = [null, undefined, {}, { choices: null }, { content: "not an array" },
      { candidates: [{}] }, 42, "text instead of json"];
    for (const id of P.ORDER) {
      for (const junk of rubbish) {
        const out = P.get(id).read(200, junk);
        assert.ok(out.error, id + " read " + JSON.stringify(junk) + " as a verdict");
      }
    }
  });
});

/* ============================================================
   The history of a conversation, in three dialects.

   A judgement is a closed question with no past; a conversation IS the past.
   The four providers speak three dialects between them (OpenAI and Groq
   share one), so the turns are normalised three times rather than four, and
   a fifth provider speaking one of the three stays a single record in the
   table.

   THE CONDITION THAT MATTERS MOST is the one that has nothing to do with
   conversations: with no history, the body must come out exactly as it did
   before. Everything the judge does goes through these same functions, and
   the judge is the part of the course that must not move.
   ============================================================ */
const ROZMOWA = {
  system: "You are a patient Italian speaker.",
  user: "vorrei un caffè per favore",
  history: [
    { role: "student", text: "buongiorno" },
    { role: "partner", text: "Buongiorno! Cosa prende?" }
  ]
};

describe("the history of a conversation", () => {
  test("with no history every body is byte for byte the one from before", () => {
    /* The judge and the essay reader both come through here. If this ever
       fails, a feature nobody asked to change has changed. */
    const P = providers();
    for (const id of copy(P.ORDER)) {
      const przed = JSON.stringify(P.request(id, "k", PROMPT, {}).body);
      const po = JSON.stringify(P.request(id, "k", { ...PROMPT, history: [] }, {}).body);
      assert.equal(po, przed, id + " changed shape on an empty history");
      const bez = JSON.stringify(P.request(id, "k", { ...PROMPT, history: undefined }, {}).body);
      assert.equal(bez, przed, id + " changed shape on a missing history");
    }
  });

  test("openai and groq: the turns become messages between system and user", () => {
    const P = providers();
    for (const id of ["openai", "groq"]) {
      const b = P.request(id, "k", ROZMOWA, {}).body;
      assert.deepEqual(copy(b.messages).map((m) => m.role),
        ["system", "user", "assistant", "user"], id);
      assert.equal(b.messages[1].content, "buongiorno");
      assert.equal(b.messages[2].content, "Buongiorno! Cosa prende?");
      assert.equal(b.messages[3].content, ROZMOWA.user, id + ": the new turn comes last");
    }
  });

  test("gemini: the turns are contents, and the model's role is called model", () => {
    /* Not "assistant": that word belongs to the other dialect, and this one
       rejects it. The kind of mistake that comes back as "the key is wrong". */
    const b = providers().request("gemini", "k", ROZMOWA, {}).body;
    assert.deepEqual(copy(b.contents).map((c) => c.role), ["user", "model", "user"]);
    assert.equal(b.contents[0].parts[0].text, "buongiorno");
    assert.equal(b.contents[2].parts[0].text, ROZMOWA.user);
    assert.equal(b.system_instruction.parts[0].text, ROZMOWA.system,
      "the instruction stays out of the turns");
  });

  test("anthropic: the turns are messages, the instruction stays in system", () => {
    const b = providers().request("anthropic", "k", ROZMOWA, {}).body;
    assert.deepEqual(copy(b.messages).map((m) => m.role), ["user", "assistant", "user"]);
    assert.equal(b.system, ROZMOWA.system);
    assert.equal(b.messages[2].content, ROZMOWA.user);
  });

  test("a turn with an unknown role is dropped, not relabelled", () => {
    /* Counting, not looking for the word. An unknown role never reaches the
       wire as itself: the mapping turns anything that is not "student" into
       the partner's name, so a turn that should have been dropped arrives
       looking exactly like something the partner said. The mutation gate
       found this hole by leaving the assertion green.

       Every dialect refuses a role it does not know anyway, and the refusal
       reads as a bad request — transient, retried on every turn, never
       explained. Dropping costs one line of context; relabelling puts words
       in the partner's mouth. */
    const P = providers();
    const dziwny = { ...ROZMOWA, history: [{ role: "narrator", text: "NARRATORE" }, ...ROZMOWA.history] };
    for (const id of copy(P.ORDER)) {
      const czysty = P.request(id, "k", ROZMOWA, {}).body;
      const b = P.request(id, "k", dziwny, {}).body;
      const ile = (x) => copy(x.messages || x.contents).length;
      assert.equal(ile(b), ile(czysty), id + " sent the unknown turn under another name");
      assert.equal(JSON.stringify(b).indexOf("NARRATORE"), -1, id + " passed its text through");
      assert.ok(JSON.stringify(b).indexOf("Cosa prende") > 0, id + " dropped the valid turns too");
    }
  });
});
