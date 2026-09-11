/* ============================================================
   llm.js — the three ways in, and the gates that guard them.

   It holds no decisions and makes no requests. What to ask lives in
   llm-prompts.js, what the answer means in llm-rules.js, the shape of each
   provider in llm-providers.js, and the request itself — with its clock and
   its chain — in llm-net.js. This file is what a caller sees: judge an
   answer, read a composition, try a key.

   The split from llm-net.js happened when this file went past three hundred
   lines, along a line that was already there: the plumbing on one side, and
   on the other the three gates below, which are the half worth reading
   before changing anything.

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

  /* A ceiling of its own for the free conversation, and this is not tidiness.
     The judge exists so that a correct sentence worded differently is not
     counted wrong; that is the function the course cannot lose. A twelve-turn
     conversation would eat a fifth of a shared budget, and the student would
     find out when an exercise stopped being promoted — with nothing on screen
     connecting the two. Two counters, two ceilings, no interference. */
  var MAX_CHAT_PER_SESSION = 40;

  /* Answers already bought, for this session only. Not in localStorage: it
     would accumulate the student's sentences on disk to save a request they
     may never repeat. */
  var cache = {};
  var spent = 0;
  var spentChat = 0;

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
      var prompt = global.LlmPrompts.judge(lang, task);
      var deadline = global.Date.now() + TOTAL_MS;

      global.LlmNet.askChain(order, keys, prompt, deadline, function (text, failures) {
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
   * A reading of a whole composition — an opinion, not a verdict.
   *
   * Deliberately not `judge`, and the difference is worth naming. The judge
   * answers a closed question and its answer is clamped so it can only ever
   * promote a rejection; here there is nothing to clamp, because the course
   * does not mark compositions and this changes no score, no card and no
   * progress. What comes back is prose, and the caller draws it as text.
   *
   * Not cached either: two readings of the same composition are two
   * different things to a student who edited it in between, and the cache
   * key would have to carry the whole text to tell them apart.
   *
   * @param {object} task  {title, prompt}
   * @param {string} text  what the student wrote
   * @param {function} cb  receives a string, or null when there is no answer
   */
  function review(task, text, cb) {
    if (!available()) return cb(null);
    if (spent >= MAX_PER_SESSION) return cb(null);

    var settings = global.Core.state.settings;
    var keys = global.LlmKeys.all();
    var order = Array.isArray(settings.llmOrder) && settings.llmOrder.length
      ? settings.llmOrder
      : global.LlmProviders.ORDER;

    global.Consent.zZgodaLlm(function () {
      spent++;
      var prompt = global.LlmPrompts.writing(settings.lang, task, text);
      var deadline = global.Date.now() + TOTAL_MS;
      global.LlmNet.askChain(order, keys, prompt, deadline, function (out, failures) {
        if (out === null) {
          announce(failures);
          return cb(null);
        }
        cb(out);
      });
    }, function () { cb(null); });
  }

  /**
   * A reading of one exam production — the fourth way in, and the most
   * constrained.
   *
   * It shares everything with `review` except what it is allowed to say. The
   * answer goes through `CilsReport.pulisci` before the caller ever sees it,
   * so a model that grades in spite of the instruction produces a shorter
   * reading, or none at all, rather than a mark on the screen. That is the
   * same shape as `judge`, where the verdict passes through `clamp`: the
   * decision lives in code, and the instruction merely asks nicely.
   *
   * No cache, for the reason `review` has none: the student may have
   * rewritten the text in between, and a key carrying the whole text to tell
   * the two apart would be the text itself.
   *
   * @param {object} task  {sezione:"scritta"|"orale", traccia, testo, cefr}
   * @param {function} cb  receives a string, or null when there is nothing to show
   */
  function reportProduction(task, cb) {
    if (!available()) return cb(null);
    if (spent >= MAX_PER_SESSION) return cb(null);
    var t = task || {};
    if (!String(t.testo || "").trim()) return cb(null);

    var settings = global.Core.state.settings;
    var keys = global.LlmKeys.all();
    var order = Array.isArray(settings.llmOrder) && settings.llmOrder.length
      ? settings.llmOrder
      : global.LlmProviders.ORDER;

    global.Consent.zZgodaLlm(function () {
      spent++;
      var prompt = global.LlmPrompts.esame(settings.lang, t.sezione, t.traccia, t.testo, t.cefr);
      var deadline = global.Date.now() + TOTAL_MS;
      global.LlmNet.askChain(order, keys, prompt, deadline, function (out, failures) {
        if (out === null) {
          announce(failures);
          return cb(null);
        }
        /* Empty after the guard means everything the model sent was a mark or
           a verdict. The caller treats that as no answer, which is the course
           without a key: the report stands as it always did. */
        var czyste = global.CilsReport.pulisci(out);
        cb(czyste || null);
      });
    }, function () { cb(null); });
  }

  /**
   * One turn of a free conversation — the fifth way in.
   *
   * It differs from the other four in what it does NOT have. There is no
   * clamp, because there is no verdict: this mode corrects and never marks,
   * and nothing it returns touches a score, a card, the streak or the deck.
   * That absence is the defence, and it is structural rather than
   * promised — there is no path from here to the student's progress.
   *
   * It carries its own consent (`llmChatConsent`) for the reason consent.js
   * gives about the other two: what leaves here is not one sentence but the
   * whole conversation, and somebody who agreed to have an answer checked
   * has not thereby agreed to that.
   *
   * @param {object} task  {scenario, cefr, message, history}
   * @param {function} cb  receives {risposta, correzione} or null
   */
  function chat(task, cb) {
    if (!available()) return cb(null);
    if (spentChat >= MAX_CHAT_PER_SESSION) return cb(null);
    var t = task || {};
    if (!String(t.message || "").trim()) return cb(null);

    var settings = global.Core.state.settings;
    var keys = global.LlmKeys.all();
    var order = Array.isArray(settings.llmOrder) && settings.llmOrder.length
      ? settings.llmOrder
      : global.LlmProviders.ORDER;

    global.Consent.zZgodaChat(function () {
      spentChat++;
      var prompt = global.LlmPrompts.chat(settings.lang, t.cefr, t.scenario, t.message);
      /* The history rides in the prompt, and each provider turns it into its
         own dialect. With none, the body is the one the judge sends. */
      prompt.history = global.ChatRules.doWyslania(t.history);
      var deadline = global.Date.now() + TOTAL_MS;

      global.LlmNet.askChain(order, keys, prompt, deadline, function (out, failures) {
        if (out === null) {
          announce(failures);
          return cb(null);
        }
        var turn = global.ChatRules.czytaj(out);
        /* Nothing to say is no turn: the view keeps the student's own line on
           screen instead of drawing an empty bubble opposite it. */
        cb(turn.risposta ? turn : null);
      });
    }, function () { cb(null); });
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
    var prompt = global.LlmPrompts.judge("en", {
      question: "Say yes.", accepted: ["sì"], given: "sì"
    });
    global.LlmNet.askOne(id, key, prompt).then(function (out) {
      if (out.text) {
        global.LlmNet.revive(id);
        return cb({ ok: true });
      }
      cb({ ok: false, error: global.LlmKeys.redact(out.error), kind: out.kind });
    });
  }

  global.Llm = {
    judge: judge,
    review: review,
    reportProduction: reportProduction,
    chat: chat,
    test: test,
    available: available,
    useTransport: global.LlmNet.useTransport,
    PER_PROVIDER_MS: PER_PROVIDER_MS,
    TOTAL_MS: TOTAL_MS,
    MAX_PER_SESSION: MAX_PER_SESSION,
    MAX_CHAT_PER_SESSION: MAX_CHAT_PER_SESSION
  };

})(window);
