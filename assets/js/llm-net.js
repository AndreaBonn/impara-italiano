/* ============================================================
   llm-net.js — the request, the clock on it, and the chain of providers.

   Everything here is machinery nobody can check without a browser: fetch,
   an abort, a timeout, and the loop that moves from one provider to the
   next. It holds no decisions — who comes next and what the answer means
   live in llm-rules.js, the shape of each request in llm-providers.js.

   Split out of llm.js when the writing feedback arrived and that file went
   past three hundred lines. The line was already there: this half is the
   plumbing, the other half is the three ways in (judge, review, test) with
   the gates that guard them.

   THE TRANSPORT IS REPLACEABLE (`useTransport`), which is what makes the
   whole feature testable without four paid keys. It is the same device
   `Consent.uzyjPytania` uses to make asking testable: the module declares
   what it needs from the outside world instead of reaching for it.

   Classic script. Requires llm-providers.js and llm-rules.js.
   ============================================================ */
(function (global) {
  "use strict";

  var PER_PROVIDER_MS = 3000;

  /* Providers that failed permanently. Cleared only by reloading the page —
     which is also when a student who went and fixed a key comes back — or by
     `revive`, for the moment they fix one without leaving. */
  var dead = {};

  /** A provider back in the running, after the student repaired its key. */
  function revive(id) { delete dead[id]; }

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
    /* No guard on an unknown id: `next` only ever returns names that came
       from `LlmKeys.all()`, which filters them through the provider table
       first. A branch here would be one for a case that cannot arise, and
       an unreachable branch is a claim about the code that nothing checks. */
    var provider = global.LlmProviders.get(id);
    var req = global.LlmProviders.request(id, key, prompt, {});

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

  global.LlmNet = {
    useTransport: useTransport,
    revive: revive,
    askOne: askOne,
    askChain: askChain,
    PER_PROVIDER_MS: PER_PROVIDER_MS
  };

})(window);
