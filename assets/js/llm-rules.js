/* ============================================================
   llm-rules.js — every decision the second judge makes, and no request.

   Who to ask next when one provider fails, how to read the answer, and
   what the answer is allowed to change. What we ASK sits next door, in
   llm-prompts.js: it changes for reasons of teaching rather than of
   engineering, and two rates of change in one file is how a file grows
   past the point where anybody reads it before editing. All of it takes values
   and returns values: no fetch, no storage, no DOM. The file that talks to
   the network (llm.js) holds none of these decisions, which is why they can
   be checked in node:test without a key and without a browser.

   THE ONE THING THIS FILE EXISTS TO GUARANTEE: the model can promote a
   rejection to an acceptance, and can do nothing else. `clamp` is that
   guarantee written as code rather than promised in a comment — there is no
   path through it that turns an accepted answer into a rejected one. A model
   that answers nonsense, answers in the wrong language, or is compromised
   outright produces a missing promotion, which is the course as it behaves
   today.

   The second guarantee is smaller and just as easy to lose: NOTHING HERE
   THROWS. The judge runs while the student is looking at an exercise already
   marked wrong; an exception in the middle of that is a broken lesson in
   exchange for a nicety that was optional to begin with.

   Classic script.
   ============================================================ */
(function (global) {
  "use strict";

  /* How much of the model's comment reaches the student. Long enough for a
     sentence about their mistake, short enough that a model having an
     episode cannot push the exercise off the screen. We TRUNCATE rather
     than reject: a correct verdict is not worth discarding over the prose
     attached to it. */
  var MAX_COMMENT = 200;

  /**
   * A key the object owns, not one it inherits.
   *
   * `keys["constructor"]` returns something truthy from Object.prototype,
   * so a plain lookup reports a provider nobody configured. The names
   * arrive from settings, and settings ride inside the backup file the
   * course tells students to keep.
   */
  function own(obj, key) {
    return obj && Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
  }

  /* ---------------- The cascade ---------------- */

  /**
   * The next provider to try, or null when the chain is spent.
   *
   * `order` is the student's own order. `keys` is what they actually filled
   * in — an order can name a provider whose key was never entered, or was
   * deleted afterwards. `dead` is what has already failed permanently in
   * this session.
   */
  function next(order, keys, dead) {
    var list = Array.isArray(order) ? order : [];
    var have = keys || {};
    var out = dead || {};
    for (var i = 0; i < list.length; i++) {
      var id = list[i];
      if (own(have, id) && !own(out, id)) return id;
    }
    return null;
  }

  /**
   * What the student is told when the chain runs out.
   *
   * Only a chain that failed for PERMANENT reasons is worth a message: a
   * rejected key stays rejected until they go and fix it, and nothing in
   * the course would otherwise tell them. A chain that ran out of timeouts
   * says nothing at all — the local verdict stands, and interrupting a
   * lesson to report a network hiccup on an optional feature is noise. It
   * is the cascade of audio.js: recording, synthesis, silence.
   */
  function report(failures) {
    var list = Array.isArray(failures) ? failures : [];
    if (!list.length) return null;
    var permanent = list.filter(function (f) { return f && f.kind === "permanent"; });
    if (permanent.length !== list.length) return null;
    return { keys: permanent.map(function (f) { return f.id; }) };
  }

  /* ---------------- The verdict ---------------- */

  /**
   * Control characters and DEL replaced by a space.
   *
   * By code point rather than by a character class: a class of control
   * characters is exactly what a typo looks like, so the linter refuses it
   * on sight and is right to. The one place the intent is genuine does not
   * earn the whole codebase an exception.
   */
  function stripControl(s) {
    var out = "", i, code;
    for (i = 0; i < s.length; i++) {
      code = s.charCodeAt(i);
      out += (code < 32 || code === 127) ? " " : s.charAt(i);
    }
    return out;
  }

  /** Control characters and newlines out; a comment is one line of prose. */
  function tidy(s) {
    return stripControl(String(s == null ? "" : s))
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, MAX_COMMENT);
  }

  /**
   * The JSON object inside whatever the model actually sent.
   *
   * Models add a sentence before the JSON, or wrap it in a fenced block,
   * often enough that refusing those answers would throw away correct
   * verdicts over presentation. So we take the first {...} span and parse
   * that. Anything that does not parse is not a verdict.
   */
  function extract(text) {
    var s = String(text == null ? "" : text);
    var start = s.indexOf("{");
    var end = s.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(s.slice(start, end + 1));
    } catch (e) {
      return null;
    }
  }

  /**
   * Reads the model's answer.
   *
   * The field is a CLOSED ENUM and not a boolean on purpose: a boolean
   * invites `true`, `"true"`, `1`, `"yes"`, and every permissive conversion
   * of those is a place where a confused model promotes by accident. Only
   * the exact string "SI" promotes; everything else, including nothing at
   * all, does not.
   */
  function readVerdict(text) {
    var parsed = extract(text);
    var esito = parsed && typeof parsed.esito === "string"
      ? parsed.esito.trim().toUpperCase()
      : "";
    /* "SÌ" counts as "SI". The word we ask for is the Italian for yes, and
       in Italian it carries an accent — a model writing correct Italian
       will sooner or later write the accented one, and rejecting it would
       be a systematic missed promotion nobody would ever see: the keys are
       the student's, the traffic never reaches us, and a promotion that
       fails to arrive looks exactly like a sentence that was wrong.
       Folding one letter keeps the enum closed; it does not widen it. */
    return {
      promote: esito.replace("Ì", "I") === "SI",
      comment: tidy(parsed && parsed.commento)
    };
  }

  /**
   * The final say, and the reason this whole feature cannot make the course
   * stricter than it was.
   *
   * The judge is asked only about a local rejection, and its answer is
   * OR-ed in. There is no argument to this function that turns an accepted
   * answer into a rejected one, which is a property of the code rather than
   * of the prompt: it survives a model that lies, a provider that is
   * replaced, and an operator who edits the instruction.
   */
  function clamp(localOk, verdict) {
    if (localOk) return { ok: true, promoted: false, comment: "" };
    /* Strictly true, not merely truthy. `readVerdict` always hands over a
       boolean, but this function is the guarantee the whole feature rests
       on: a later caller passing the model's own JSON straight through
       would otherwise promote on the string "yes". */
    var promote = !!verdict && verdict.promote === true;
    return {
      ok: promote,
      promoted: promote,
      comment: promote ? ((verdict && verdict.comment) || "") : ""
    };
  }

  /* ---------------- Odds and ends ---------------- */

  /* The separator between the parts of a cache key: a character that cannot
     occur in a language code, an Italian sentence or a student's answer, so
     no combination of the three can be made to collide with another. As an
     escape rather than the character itself — typed literally it is
     invisible in the diff and the next tool to touch the file eats it. */
  var SEP = "\u0000";

  /**
   * What identifies one question to the judge.
   *
   * Built from the normalised student answer and the accepted variants, so
   * that retyping the same sentence with different spacing does not buy a
   * second paid request. It carries the language, because the comment is
   * written in it.
   *
   * Txt.norm is required, not optional: index.html loads text.js before
   * this file and sw.js precaches it in that order, so a guard here would
   * be a branch for a situation that cannot arise — and would silently
   * downgrade the key to a weaker comparison if it ever did.
   */
  function cacheKey(lang, task, given) {
    var accepted = (task && Array.isArray(task.accepted) ? task.accepted : []).join("|");
    return [lang || "", accepted, global.Txt.norm(given)].join(SEP);
  }

  global.LlmRules = {
    next: next,
    report: report,
    readVerdict: readVerdict,
    clamp: clamp,
    cacheKey: cacheKey,
    MAX_COMMENT: MAX_COMMENT
  };

})(window);
