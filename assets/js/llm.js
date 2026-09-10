/* ============================================================
   llm.js — the only part of the second judge that touches the network.

   It holds no decisions: which provider comes next, how to read the answer
   and what the answer may change all live in llm-rules.js, and the shape of
   each request lives in llm-providers.js. What is here is the machinery
   nobody can check without a browser — fetch, a timeout, a cascade, a cache
   — kept as small as that division allows.

   THE TRANSPORT IS REPLACEABLE (`useTransport`), which is what makes the
   whole feature testable without four paid keys. It is the same device
   `Consent.uzyjPytania` uses to make asking testable: the module declares
   what it needs from the outside world instead of reaching for it.

   THREE GATES, and each closes a way this could go wrong in silence:

   - the protocol. From file:// the origin is `null` and the preflight
     fails, so the judge does not exist there. Guarding on the protocol
     rather than catching the error keeps the course opening from a disk,
     which is a stated requirement, without a failure the student can see.
   - consent. Nothing leaves before the student has agreed, and the gate is
     here rather than in the views for the reason consent.js gives: one
     passage nobody can bypass beats three that have to be remembered.
   - the budget. A judge nobody asked for must not hold up an exercise: one
     provider gets 3 seconds, the whole chain gets 8, and then the local
     verdict simply stands.

   Classic script. Requires llm-providers.js, llm-rules.js, llm-keys.js.
   ============================================================ */
(function (global) {
  "use strict";

  var PER_PROVIDER_MS = 3000;
  var TOTAL_MS = 8000;

  /* One question per attempt, and a ceiling per session. The student is
     paying for every one of these out of their own account, so the ceiling
     is a courtesy to them and not a defence of ours: a stubborn learner
     retyping the same wrong sentence twenty times should not discover it on
     their bill. */
  var MAX_PER_SESSION = 60;

  /* Answers already bought, for this session only. Not in localStorage: it
     would accumulate the student's sentences on disk to save a request they
     may never repeat. */
  var cache = {};
  var spent = 0;

  /* Providers that failed permanently. Cleared only by reloading the page,
     which is also when a student who fixed a key comes back. */
  var dead = {};

  /**
   * The transport, replaceable for the tests.
   *
   * @param {{url:string, headers:object, body:object, signal:object}} req
   * @returns {Promise<{status:number, json:object}>}
   */
  var transport = function (req) {
    return global.fetch(req.url, {
      method: "POST",
      headers: req.headers,
      body: JSON.stringify(req.body),
      signal: req.signal
    }).then(function (res) {
      /* A body that is not JSON is not a verdict; the status still is. */
      return res.text().then(function (raw) {
        var json;
        try { json = JSON.parse(raw); } catch (e) { json = null; }
        return { status: res.status, json: json };
      });
    });
  };

  function useTransport(fn) { transport = fn; }

  /* ---------------- Availability ---------------- */

  /**
   * Whether the judge can run at all.
   *
   * Deliberately silent when false. This is an optional improvement on top
   * of a course that works without it, so a student opening the page from a
   * disk, or one who never entered a key, gets the course as it always was
   * rather than an explanation of a feature they did not ask for.
   */
  function available() {
    if (global.location && global.location.protocol === "file:") return false;
    if (!global.LlmKeys || !global.LlmKeys.any()) return false;
    return true;
  }

  /* ---------------- One request ---------------- */

  /** A promise that rejects once the time is up, and cancels the request. */
  function withTimeout(promise, ms, cancel) {
    return new global.Promise(function (resolve, reject) {
      var done = false;
      var timer = global.setTimeout(function () {
        if (done) return;
        done = true;
        if (cancel) cancel();
        reject(new Error("timeout"));
      }, ms);
      promise.then(function (v) {
        if (done) return;
        done = true;
        global.clearTimeout(timer);
        resolve(v);
      }, function (e) {
        if (done) return;
        done = true;
        global.clearTimeout(timer);
        reject(e);
      });
    });
  }

  /**
   * Asks one provider.
   *
   * Resolves with `{text}` or `{error, kind}` — never rejects, so the
   * cascade above reads one shape instead of branching on two.
   */
  function askOne(id, key, prompt) {
    var provider = global.LlmProviders.get(id);
    var req = global.LlmProviders.request(id, key, prompt, {});
    if (!provider || !req) {
      return global.Promise.resolve({ error: "unknown provider", kind: "permanent" });
    }

    var controller = global.AbortController ? new global.AbortController() : null;
    req.signal = controller ? controller.signal : undefined;

    var call = transport(req).then(function (res) {
      return provider.read(res.status, res.json);
    });

    return withTimeout(call, PER_PROVIDER_MS, function () {
      if (controller) controller.abort();
    }).then(null, function (e) {
      /* A rejected transport is the network, not the provider: transient,
         so the same provider stays eligible for the next question. */
      return { error: (e && e.message) || "network", kind: "transient" };
    });
  }

  /* ---------------- The cascade ---------------- */

  /**
   * Walks the student's chain until one provider answers.
   *
   * Every failure is collected rather than reported as it happens: what to
   * say depends on how the WHOLE chain failed, and only llm-rules.js
   * decides that.
   */
  function askChain(order, keys, prompt, deadline, done) {
    var failures = [];

    /* Who has already been asked IN THIS CHAIN, which is not the same as
       who is out for the session. A provider that answered "too many
       requests" stays eligible tomorrow — and without this set it stays
       eligible one line later too, so the chain asks it again, and again:
       the loop never advances and the tab dies of it. `dead` alone cannot
       express "not now, but yes next time". */
    var tried = {};

    function skipList() {
      var skip = {};
      Object.keys(dead).forEach(function (id) { skip[id] = true; });
      Object.keys(tried).forEach(function (id) { skip[id] = true; });
      return skip;
    }

    function step() {
      var id = global.LlmRules.next(order, keys, skipList());
      if (!id) return done(null, failures);
      if (global.Date.now() > deadline) return done(null, failures);

      tried[id] = true;
      askOne(id, keys[id], prompt).then(function (out) {
        if (out.text) return done(out.text, failures);
        failures.push({ id: id, kind: out.kind, error: out.error });
        /* Permanent means this provider is not coming back today: asking it
           again on the next exercise would spend the student's time on an
           answer we already know. */
        if (out.kind === "permanent") dead[id] = true;
        step();
      });
    }

    step();
  }

  /* ---------------- The one way in ---------------- */

  /**
   * Judges an answer the course has already rejected.
   *
   * @param {object} task  {question, accepted[], given}
   * @param {function} cb  receives {promote, comment} or null
   *
   * `null` means no verdict, for any reason: no key, no consent, no
   * network, a chain that ran out, or a model that answered nonsense. Every
   * one of those has the same consequence — the local rejection stands —
   * so the caller has one case to handle rather than seven.
   */
  function judge(task, cb) {
    if (!available()) return cb(null);
    if (spent >= MAX_PER_SESSION) return cb(null);

    var settings = global.Core.state.settings;
    var lang = settings.lang;
    var keys = global.LlmKeys.all();
    var order = Array.isArray(settings.llmOrder) && settings.llmOrder.length
      ? settings.llmOrder
      : global.LlmProviders.ORDER;

    var key = global.LlmRules.cacheKey(lang, task, task.given);
    if (Object.prototype.hasOwnProperty.call(cache, key)) return cb(cache[key]);

    global.Consent.zZgodaLlm(function () {
      spent++;
      var prompt = global.LlmRules.prompt(lang, task);
      var deadline = global.Date.now() + TOTAL_MS;

      askChain(order, keys, prompt, deadline, function (text, failures) {
        if (text === null) {
          announce(failures);
          return cb(null);
        }
        var verdict = global.LlmRules.readVerdict(text);
        cache[key] = verdict;
        cb(verdict);
      });
    }, function () { cb(null); });
  }

  /**
   * Tells the student only what they can act on.
   *
   * A chain that died of rejected keys is worth interrupting a lesson for,
   * because nothing else in the course would ever mention it. A chain that
   * died of timeouts is not: the verdict they already have is correct, and
   * a message about an optional feature failing is noise in the middle of
   * an exercise. Once per session, because the second one adds nothing.
   */
  var announced = false;
  function announce(failures) {
    if (announced) return;
    var report = global.LlmRules.report(failures);
    if (!report) return;
    announced = true;
    global.Core.notice("llm.keysRejected");
  }

  /**
   * Tries one key on its own, for the settings page.
   *
   * Deliberately outside `judge`: it must run before any consent exists and
   * must not be stopped by a provider retired earlier in the session — the
   * student is here precisely to fix that.
   */
  function test(id, key, cb) {
    if (!available()) return cb({ ok: false, error: "unavailable" });
    var prompt = global.LlmRules.prompt("en", {
      question: "Say yes.", accepted: ["sì"], given: "sì"
    });
    askOne(id, key, prompt).then(function (out) {
      if (out.text) {
        delete dead[id];
        return cb({ ok: true });
      }
      cb({ ok: false, error: global.LlmKeys.redact(out.error), kind: out.kind });
    });
  }

  /** For the tests: the session's counters, back to zero. */
  function reset() {
    cache = {};
    dead = {};
    spent = 0;
    announced = false;
  }

  global.Llm = {
    judge: judge,
    test: test,
    available: available,
    useTransport: useTransport,
    reset: reset,
    PER_PROVIDER_MS: PER_PROVIDER_MS,
    TOTAL_MS: TOTAL_MS,
    MAX_PER_SESSION: MAX_PER_SESSION
  };

})(window);
