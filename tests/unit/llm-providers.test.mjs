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

  test("Anthropic sends no temperature: that model rejects the request outright", () => {
    const P = providers();
    const body = P.request("anthropic", "k", PROMPT, {}).body;
    assert.equal(body.temperature, undefined);
    /* The others do send it, and send zero — the same sentence judged twice
       in one lesson must not get two different verdicts. */
    assert.equal(P.request("openai", "k", PROMPT, {}).body.temperature, 0);
    assert.equal(P.request("groq", "k", PROMPT, {}).body.temperature, 0);
    assert.equal(P.request("gemini", "k", PROMPT, {}).body.generationConfig.temperature, 0);
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
    const held = P.get("gemini").read(200, { candidates: [{ finishReason: "SAFETY" }] });
    assert.equal(held.kind, "permanent");
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
