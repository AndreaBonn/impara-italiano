/* ============================================================
   The student's API keys (assets/js/llm-keys.js).

   The whole point of the file is a negative: these must not be inside the
   state. The state is what `exportState` writes into the backup the course
   asks students to keep and move between devices, so a key that leaks in
   there is a credential billing their card, sitting in a file they were
   told to email themselves.

   That cannot be checked by reading the code once and trusting it — a
   later refactor moving the container "somewhere tidier" would pass every
   other test in the suite. So it is pinned here, from both sides: the
   backup must not contain the key, AND the dedicated container must.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, LLM } from "./_harness.mjs";

const FILES = [...CORE, ...LLM];

const KEY = "sk-verysecret1234";

function box() {
  const b = loadEngine({ files: FILES });
  b.Core.load();
  return b;
}

describe("what the container holds", () => {
  test("a key goes in and comes back", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    assert.equal(K.set("openai", KEY), true);
    assert.equal(K.get("openai"), KEY);
    assert.equal(K.any(), true);
  });

  test("nothing is stored before the student types anything", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    assert.deepEqual(Object.keys(Object.assign({}, K.all())), []);
    assert.equal(K.any(), false);
    assert.equal(K.get("openai"), "");
    /* Paired: the same reader does find a key once there is one. */
    K.set("openai", KEY);
    assert.equal(K.any(), true);
  });

  test("a provider the course does not offer is not storage", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    assert.equal(K.set("mistral", KEY), false);
    assert.equal(K.get("mistral"), "");
    /* Including names Object.prototype happens to own. */
    assert.equal(K.set("__proto__", KEY), false);
    assert.equal(K.get("__proto__"), "");
    /* Paired with a name the course does offer. */
    assert.equal(K.set("groq", KEY), true);
  });

  test("a paste that went wrong is not a key", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    assert.equal(K.set("openai", "abc"), false, "three characters is not a credential");
    assert.equal(K.get("openai"), "");
    assert.equal(K.set("openai", KEY), true);
  });

  test("a key pasted with a newline still works", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    /* Copied from a web page it arrives with whitespace often enough that
       the alternative is a student sure they typed it right and a provider
       sure they did not. */
    K.set("openai", "  " + KEY + "\n");
    assert.equal(K.get("openai"), KEY);
  });

  test("an empty field removes the key rather than storing nothing", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    K.set("openai", KEY);
    K.set("openai", "");
    assert.equal(K.get("openai"), "");
    assert.equal(K.any(), false);
  });

  test("removing one key leaves the others alone", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    K.set("openai", KEY);
    K.set("groq", "gsk-another-key-1");
    K.remove("openai");
    assert.equal(K.get("openai"), "");
    assert.equal(K.get("groq"), "gsk-another-key-1",
      "deleting one provider took the others with it");
  });
});

describe("the keys must not leave in the backup", () => {
  test("the exported profile does not contain them, and the container does", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    const keys = {
      gemini: "AIza-gemini-secret-1", groq: "gsk-groq-secret-2",
      openai: "sk-openai-secret-3", anthropic: "sk-ant-secret-4"
    };
    Object.keys(keys).forEach((id) => K.set(id, keys[id]));

    const exported = b.Core.exportState();
    for (const id of Object.keys(keys)) {
      assert.ok(exported.indexOf(keys[id]) < 0,
        id + "'s key is inside the file students are told to keep");
    }

    /* The other half, in the same test: without it this would also pass
       against a module that stores nothing at all, and would keep passing
       while the feature was quietly broken. */
    const stored = b.storage.getItem(K.STORE_KEY);
    for (const id of Object.keys(keys)) {
      assert.ok(stored.indexOf(keys[id]) >= 0, id + "'s key was never stored");
    }
  });

  test("importing somebody else's profile cannot plant a key", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    /* A file from another student, carrying keys in every shape a future
       refactor might have used. The import machinery must be unable to
       reach this container at all. */
    b.Core.importState(JSON.stringify({
      schema: 2,
      settings: { lang: "pl", llmKeys: { openai: "sk-attacker-key" } },
      llm: { openai: "sk-attacker-key" }
    }));
    assert.equal(K.get("openai"), "", "an imported file planted a key");
    assert.equal(K.any(), false);
  });

  test("clearing the profile takes the keys with it", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    K.set("openai", KEY);
    b.Core.resetState();
    assert.equal(K.get("openai"), "", "a working credential survived «erase everything»");
    /* And the reset still does what it always did: settings survive, so a
       student who chose German does not get a Polish interface back. */
    assert.equal(b.Core.state.settings.lang, "pl");
  });
});

describe("keeping the key off the screen", () => {
  test("a fingerprint identifies the key without showing it", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    assert.equal(K.fingerprint(KEY), "…1234");
    assert.equal(K.fingerprint(""), "");
    assert.equal(K.fingerprint(null), "");
  });

  test("a provider quoting the key back does not get to print it", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    K.set("openai", KEY);
    const shown = K.redact("Incorrect API key provided: " + KEY + ".");
    assert.ok(shown.indexOf(KEY) < 0, "the key reached the page");
    assert.ok(shown.indexOf("…1234") > 0, "and nothing said which key it was");
  });

  test("a message with no key in it comes back unchanged", () => {
    const b = box();
    const K = b.sandbox.LlmKeys;
    K.set("openai", KEY);
    assert.equal(K.redact("Rate limit reached."), "Rate limit reached.");
  });
});

describe("a browser that refuses to store anything", () => {
  test("the feature does not exist rather than breaking the lesson", () => {
    const b = loadEngine({ files: FILES, storage: makeBlockedStorage() });
    const K = b.sandbox.LlmKeys;
    assert.equal(K.set("openai", KEY), false, "it reported success on a refused write");
    assert.equal(K.get("openai"), "");
    assert.equal(K.any(), false);
    assert.equal(K.redact("Rate limit reached."), "Rate limit reached.");
    /* Even wiping them reports honestly rather than claiming success on a
       write the browser refused. */
    assert.equal(K.clear(), false);
  });
});

/** Private mode: every call throws, the way Safari does with cookies off. */
function makeBlockedStorage() {
  const blocked = () => { throw new Error("SecurityError"); };
  return {
    getItem: blocked, setItem: blocked, removeItem: blocked,
    clear: blocked, key: blocked, get length() { return 0; }
  };
}
