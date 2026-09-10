/* ============================================================
   llm-providers.js — the four providers, as data.

   One entry per provider, four pure functions each: where to send the
   request, which headers carry the key, what the body looks like, and how
   to read what came back. Nothing here touches the network — llm.js does
   that, and knows nothing about any particular provider.

   It is the split verbs-data.js / verbs.js already uses: the tables of a
   foreign system apart from the algorithm that drives them. Adding a fifth
   provider is a record in this file and does not touch the file that talks
   to the network.

   THE HTTP STATUS SOMETIMES LIES, which is why `read` exists at all instead
   of the caller branching on the status code. Gemini answers 200 with a
   `finishReason` that means the answer was withheld; Anthropic answers 200
   with `stop_reason: "refusal"`; both mean "no verdict" while looking like
   success. So `read` may DECLARE the kind of failure, and the cascade uses
   that declaration when it is there and the status when it is not.

   `read` never throws. Malformed JSON is a typed error, because an
   exception here would have to be caught by the one caller that must not
   care which provider it is talking to.

   MODEL IDS ARE THE PART THAT AGES. Each is the current cheap-and-fast
   model of its provider as of the day this file was written; only the
   Anthropic one was verified against vendor documentation. They are
   constants at the top of each entry precisely so that correcting one is a
   one-line change.

   Classic script.
   ============================================================ */
(function (global) {
  "use strict";

  /* Room for the answer. Generous because on Anthropic this ceiling covers
     thinking AND the reply together: sized to the reply alone, the verdict
     gets cut off mid-JSON and reads as a malformed answer rather than as
     the configuration mistake it is. */
  var MAX_OUT = 2048;

  /**
   * A permanent failure means this provider will not work until the student
   * changes something (a key that was rejected, a model that does not
   * exist). A transient one means it might work in a minute (a rate limit,
   * a timeout, a server having a bad day).
   *
   * The distinction is the whole reason the cascade behaves differently:
   * permanent drops the provider for the session and says so, transient
   * moves on quietly and keeps it eligible.
   *
   * 400 SITS ON THE TRANSIENT SIDE, which reads wrong and is deliberate. A
   * bad request is usually about the sentence just sent (its length, a
   * content filter) rather than about the setup, so treating it as
   * permanent would retire a working provider for the rest of the session
   * over one awkward exercise. The two mistakes are not the same size: a
   * genuinely misconfigured provider classified transient fails again on
   * every sentence and costs a few wasted requests, while a working one
   * classified permanent goes quiet for the session and nobody finds out.
   */
  function kind(status) {
    if (status === 401 || status === 403 || status === 404) return "permanent";
    return "transient";
  }

  /** The error message a provider returned, when it bothered to send one. */
  function messageOf(json) {
    if (!json) return "";
    if (json.error) return String(json.error.message || json.error.type || json.error);
    if (json.message) return String(json.message);
    return "";
  }

  function failure(status, json) {
    return { error: messageOf(json) || ("HTTP " + status), kind: kind(status) };
  }

  /**
   * A list, or an empty one.
   *
   * `(json.content) || []` is not enough: a provider having a bad day can
   * answer 200 with a STRING where the list should be, and a non-empty
   * string passes that guard and then has no `.filter`. What reaches the
   * student is a crash inside the judge instead of a verdict that did not
   * arrive.
   */
  function arr(v) { return Array.isArray(v) ? v : []; }

  /* ---------------- OpenAI, and everything shaped like it ---------------- */

  /**
   * Groq speaks the OpenAI chat-completions dialect, so both are built from
   * this one function. What genuinely differs between them is the host and
   * the model name — not enough to justify two copies of the body builder,
   * and a copy would be the thing that drifts.
   */
  function chatBody(prompt) {
    return {
      model: null,          // filled in by the entry that owns this body
      messages: [
        { role: "system", content: prompt.system },
        { role: "user", content: prompt.user }
      ],
      max_tokens: MAX_OUT,
      /* Deterministic on purpose: the same sentence judged twice in one
         lesson should not get two different verdicts. */
      temperature: 0
    };
  }

  function chatRead(status, json) {
    if (status !== 200) return failure(status, json);
    var choice = json && json.choices && json.choices[0];
    var text = choice && choice.message && choice.message.content;
    if (!text) return { error: "empty answer", kind: "transient" };
    return { text: String(text) };
  }

  function openAiLike(id, label, model, host, path) {
    return {
      id: id,
      label: label,
      model: model,
      url: function () { return host + path; },
      headers: function (key) {
        return { "content-type": "application/json", authorization: "Bearer " + key };
      },
      body: function (prompt, cfg) {
        var b = chatBody(prompt);
        b.model = cfg.model;
        return b;
      },
      read: chatRead
    };
  }

  /* ---------------- The table ---------------- */

  var PROVIDERS = {
    /* Gemini carries the key in a header rather than in the query string:
       an address with a secret inside ends up in logs, in history and in
       anything that records a URL. */
    gemini: {
      id: "gemini",
      label: "Google Gemini",
      model: "gemini-2.0-flash",
      url: function (p) {
        return "https://generativelanguage.googleapis.com/v1beta/models/" +
          p.model + ":generateContent";
      },
      headers: function (key) {
        return { "content-type": "application/json", "x-goog-api-key": key };
      },
      body: function (prompt) {
        return {
          system_instruction: { parts: [{ text: prompt.system }] },
          contents: [{ role: "user", parts: [{ text: prompt.user }] }],
          generationConfig: { maxOutputTokens: MAX_OUT, temperature: 0 }
        };
      },
      read: function (status, json) {
        if (status !== 200) return failure(status, json);
        var c = json && json.candidates && json.candidates[0];
        /* A 200 with no candidate is a withheld answer, not an outage: the
           safety filter fired. Permanent, because the same sentence sent
           again gets the same treatment. */
        if (!c) return { error: "answer withheld", kind: "permanent" };
        var parts = arr(c.content && c.content.parts);
        var text = parts.map(function (p) { return (p && p.text) || ""; }).join("");
        if (!text) return { error: "answer withheld", kind: "permanent" };
        return { text: text };
      }
    },

    groq: openAiLike("groq", "Groq", "llama-3.3-70b-versatile",
      "https://api.groq.com", "/openai/v1/chat/completions"),

    openai: openAiLike("openai", "OpenAI", "gpt-4o-mini",
      "https://api.openai.com", "/v1/chat/completions"),

    anthropic: {
      id: "anthropic",
      label: "Anthropic Claude",
      model: "claude-opus-5",
      url: function () { return "https://api.anthropic.com/v1/messages"; },
      /* The third header is what the vendor requires before it will answer
         a browser at all; its name is their opinion of the practice, not
         ours. Without it the request is refused before it is read. */
      headers: function (key) {
        return {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        };
      },
      /* No `temperature` and no `thinking`: this model rejects the first
         outright, and thinking is on by default. Turning it off is allowed
         here but not worth it — with thinking off the model sometimes
         writes its internal tags into the visible answer, and the visible
         answer is exactly what we parse as a verdict. Low effort costs less
         than that failure would. */
      body: function (prompt, cfg) {
        return {
          model: cfg.model,
          max_tokens: MAX_OUT,
          system: prompt.system,
          messages: [{ role: "user", content: prompt.user }],
          output_config: { effort: "low" }
        };
      },
      read: function (status, json) {
        if (status !== 200) return failure(status, json);
        /* A refusal arrives as a successful response with an empty or
           half-written body. Transient in our sense: it says nothing about
           the key, so the provider stays eligible. */
        if (json && json.stop_reason === "refusal") {
          return { error: "answer refused", kind: "transient" };
        }
        var blocks = arr(json && json.content);
        /* The reply is the TEXT blocks only. With thinking on, the answer
           also carries thinking blocks whose text is empty, and reading
           `content[0]` would hand back that empty string as the verdict. */
        var text = blocks
          .filter(function (b) { return b && b.type === "text"; })
          .map(function (b) { return b.text || ""; })
          .join("");
        if (!text) return { error: "empty answer", kind: "transient" };
        return { text: text };
      }
    }
  };

  /* The order the student sees before choosing their own, cheapest first:
     the two with a real free tier, then the two that bill from the first
     sentence. */
  var ORDER = ["gemini", "groq", "openai", "anthropic"];

  /**
   * A provider by name, or nothing.
   *
   * The own-property check is not ceremony. `PROVIDERS["__proto__"]`
   * resolves through the inherited accessor and yields Object.prototype —
   * an object, so a plain truthiness test lets it through, and the caller
   * then asks it for a `url()` it does not have. The chain of providers
   * lives in the student's settings, and settings travel inside the
   * exported backup file, so this name can arrive from a file somebody else
   * wrote.
   */
  function get(id) {
    return Object.prototype.hasOwnProperty.call(PROVIDERS, id) ? PROVIDERS[id] : null;
  }

  function list() {
    return ORDER.map(function (id) {
      var p = PROVIDERS[id];
      return { id: p.id, label: p.label, model: p.model };
    });
  }

  /**
   * Everything llm.js needs to send one request, and nothing about how to
   * send it. `cfg` carries the model, so a student who overrides it in the
   * settings does not need a change in this file.
   */
  function request(id, key, prompt, cfg) {
    var p = get(id);
    if (!p) return null;
    var settings = { model: (cfg && cfg.model) || p.model };
    return {
      url: p.url(settings),
      headers: p.headers(key),
      body: p.body(prompt, settings)
    };
  }

  global.LlmProviders = {
    get: get,
    list: list,
    request: request,
    kind: kind,
    ORDER: ORDER,
    MAX_OUT: MAX_OUT
  };

})(window);
