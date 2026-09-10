/* ============================================================
   writing.js — what can be checked in a text without a marker.

   The course has no backend, so nobody will grade a composition. The
   tempting sham then is a self-assessment checklist ("did you use the past
   tense?"). The student answers themselves "yes", nobody sees it and the
   exercise leaves behind not a single piece of information — neither for
   them nor for the mistake notebook.

   So whatever CAN be measured is measured mechanically: the task declares
   the constructions it requires, and Verbs.conjugate generates their forms
   and looks for them in the text. The result is not a grade ("well
   written") but a fact: you used this, you did not use that.

   Self-assessment is left only for what no automaton here can measure —
   sense, coherence, how it sounds.

   Classic script. Requires core.js and verbs.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Writing = {};

  /* Folding from core.js: lower case, unified apostrophes, accents removed.
     A local copy lost the typographic apostrophe, so "secondo l’autore"
     typed on a phone never matched the requirement. */
  var fold = Core.fold;

  /**
   * The forms we look for on behalf of one requirement.
   *
   * `{verb, tense}` expands through the conjugator, so a task declares a
   * construction rather than a list of forms — adding an irregular verb to
   * verbs.js immediately fixes every task.
   */
  function formyDla(req) {
    if (req.word) return [req.word];
    if (req.any) return req.any.slice();
    if (!req.verb) return [];
    var f = (global.Verbs && global.Verbs.conjugate(req.verb, req.tense || "pres")) || [];
    return f.filter(Boolean);
  }

  /**
   * The pattern for a single form.
   *
   * The conjugator produces MASCULINE agreement ("sono andato"). A student
   * writing about herself will write "sono andata" and will be right — so
   * in compound forms the last vowel may be any of o/a/i/e. In simple forms
   * ("parlavo") we change nothing: there the ending carries the person and
   * substituting it would be consenting to a mistake.
   */
  function wzorzec(forma, luzNaKoncu) {
    var f = fold(forma).trim().replace(/\s+/g, " ");
    var uciekniete = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (luzNaKoncu && f.indexOf(" ") >= 0) uciekniete = uciekniete.replace(/[oaie]$/, "[oaie]");
    return new RegExp("(^|[^a-zà-ù])" + uciekniete + "([^a-zà-ù]|$)");
  }

  /**
   * Checks a text against a list of requirements.
   *
   * Returns one entry per requirement: what was looked for, whether it was
   * found and which form. No grades and no percentages — this is a reading,
   * not a verdict.
   */
  function analyse(text, requires) {
    var hay = fold(text || "");
    return (requires || []).map(function (req) {
      var formy = formyDla(req);
      /* The slack on the ending applies ONLY to forms from the conjugator,
         because only there is it about participle agreement. On `any`
         phrases it would let through "cordiali saluto" and "di solita":
         incorrect forms accepted as correct, that is exactly the opposite of
         what the exercise intends. */
      var luz = !!req.verb;
      var trafiona = null;
      for (var i = 0; i < formy.length && !trafiona; i++) {
        if (wzorzec(formy[i], luz).test(hay)) trafiona = formy[i];
      }
      return {
        key: req.key || req.verb || req.word || (req.any || [])[0] || "?",
        verb: req.verb || null,
        tense: req.tense || null,
        word: req.word || null,
        any: req.any || null,
        found: !!trafiona,
        hit: trafiona
      };
    });
  }

  /** How many words the student wrote — the only number worth showing them. */
  function wordCount(text) {
    var t = String(text || "").trim();
    return t ? t.split(/\s+/).length : 0;
  }

  /* ---------------- Saving ---------------- */

  /**
   * Saves a composition.
   *
   * Compositions are NOT subject to pruning when storage is full (core.js
   * § pruneCandidates): they are the only content in the state the student
   * cannot reconstruct through further study.
   */
  function save(id, text, wynik) {
    Core.state.writing[id] = {
      text: String(text || ""),
      ts: Date.now(),
      words: wordCount(text),
      found: (wynik || []).filter(function (r) { return r.found; }).length,
      total: (wynik || []).length
    };
    Core.save();
    return Core.state.writing[id];
  }

  function load(id) { return Core.state.writing[id] || null; }

  Writing.analyse = analyse;
  Writing.wordCount = wordCount;
  Writing.save = save;
  Writing.load = load;
  Writing.formyDla = formyDla;

  global.Writing = Writing;

})(window);
