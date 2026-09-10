/* ============================================================
   i18n-merge.js — attaching the student's texts to the course content.

   Pulled out of i18n.js, which said of itself that it was "two things":
   interface strings (`I18n.t`) and merging course data. The second one is
   here. There was no shared state between them — each half kept its own
   dictionary and its own keys — so the split cost nothing beyond one more
   entry in the loading order.

   The data in `data/core/` is language-neutral (structure, Italian, answer
   keys), while the student's texts live in `data/i18n/<lang>/` and are
   attached HERE, by node id and by index within arrays.

   Merging is idempotent: neutral fields are never overwritten, so a second
   language can be applied on top of the same objects without reloading the
   page. That is not a convenience but the condition for a language switch
   that does not reload the course.

   No dependencies. Classic script (works from file://).
   ============================================================ */
(function (global) {
  "use strict";

  var LINGUAI = global.LINGUAI = global.LINGUAI || {};

  /* lang -> key ("lesson:a1-u01-l1") -> patch */
  var store = {};

  /** Registers the patches of one file. Called by data/i18n/<lang>/*.js */
  function addStrings(lang, map) {
    var bag = store[lang] || (store[lang] = {});
    Object.keys(map).forEach(function (k) { bag[k] = map[k]; });
  }

  function get(lang, key) {
    var bag = store[lang];
    return (bag && bag[key]) || null;
  }

  function hasLang(lang) { return !!store[lang]; }

  /* ---------------- Merge primitives ---------------- */

  /** Copies only the keys present in the patch: it creates no fields that were absent. */
  function copy(target, patch, keys) {
    for (var i = 0; i < keys.length; i++) {
      if (patch[keys[i]] !== undefined) target[keys[i]] = patch[keys[i]];
    }
  }

  /** Attaches a text value to an array element, by index. */
  function byIndex(list, values, field) {
    if (!list || !values) return;
    for (var i = 0; i < list.length; i++) {
      if (values[i] !== undefined) list[i][field] = values[i];
    }
  }

  /** Copies the given fields into every array element, by index. */
  function objByIndex(list, patches, keys) {
    if (!list || !patches) return;
    for (var i = 0; i < list.length; i++) {
      if (patches[i]) copy(list[i], patches[i], keys);
    }
  }

  /* ---------------- Course nodes ---------------- */

  var EX_KEYS = ["q", "why", "hint", "tr", "setting", "opts"];

  function applyExercise(ex, p) {
    if (!ex || !p) return;
    copy(ex, p, EX_KEYS);
    byIndex(ex.pairs, p.pairs, "tr");
    byIndex(ex.items, p.items, "gloss");
    objByIndex(ex.lines, p.lines, ["tr", "answerTr"]);
  }

  function applyGrammar(g, p) {
    if (!g || !p) return;
    copy(g, p, ["title", "note", "table"]);
    objByIndex(g.examples, p.examples, ["tr", "note"]);
  }

  function applyLesson(L, lang) {
    var p = L && get(lang, "lesson:" + L.id);
    if (!p) return;
    copy(L, p, ["title", "theme", "objectives", "theory", "culture"]);
    applyGrammar(L.grammar, p.grammar);
    byIndex(L.vocab, p.vocab, "tr");
    if (L.dialogue) byIndex(L.dialogue.lines, p.dialogue, "tr");
    if (L.exercises && p.exercises) {
      for (var i = 0; i < L.exercises.length; i++) applyExercise(L.exercises[i], p.exercises[i]);
    }
  }

  function applyUnit(u, lang) {
    var p = get(lang, "unit:" + u.id);
    if (p) copy(u, p, ["title", "grammarNote"]);
    (u.lessons || []).forEach(function (l) { applyLesson(l, lang); });
    if (u.test) applyLesson(u.test, lang);
  }

  function applyLevel(lv, lang) {
    var p = get(lang, "level:" + lv.code);
    if (p) copy(lv, p, ["name", "desc"]);
    (lv.units || []).forEach(function (u) { applyUnit(u, lang); });
  }

  function applyConversation(c, lang) {
    var p = get(lang, "conv:" + c.id);
    if (!p) return;
    copy(c, p, ["title", "setting", "closing"]);
    objByIndex(c.turns, p.turns, ["tr", "task"]);
    /* A branching turn has a translation on EVERY branch, because each one
       is a separate line for the student. The direction (`go`) and the
       answer key stay in the neutral layer: if they entered the overlay, a
       change of language could reroute the dialogue. */
    (c.turns || []).forEach(function (tura, n) {
      var pt = p.turns && p.turns[n];
      if (tura.opts && pt && pt.opts) objByIndex(tura.opts, pt.opts, ["tr"]);
    });
  }

  function applyRef(lang) {
    var secs = global.GRAMMAR_REF || [];
    var heads = get(lang, "refsec:titles");
    secs.forEach(function (sec, i) {
      if (heads && heads[i] !== undefined) sec.title = heads[i];
      (sec.items || []).forEach(function (it) {
        var p = get(lang, "ref:" + it.id);
        if (p) copy(it, p, ["title", "sub", "body"]);
      });
    });
  }

  /**
   * Minimal pairs. The neutral layer holds the Italian words alone; the
   * glosses and the contrastive note come from here, written for a specific
   * language. A Pole does not hear consonant length, a French speaker does
   * not hear the movable stress — this is not the same note in two
   * translations.
   */
  function applyPhonetics(lang) {
    (global.PHONETICS || []).forEach(function (zbior) {
      var p = get(lang, "ph:" + zbior.id);
      if (!p) return;
      copy(zbior, p, ["title", "note", "contrast"]);
      objByIndex(zbior.pairs, p.pairs, ["glossA", "glossB"]);
    });
  }

  /**
   * Reading texts. The sentences and questions are in Italian and stay in
   * the neutral layer; the title and the glosses of hard words come from here.
   */
  function applyReadings(lang) {
    (global.READINGS || []).forEach(function (r) {
      var p = get(lang, "read:" + r.id);
      if (!p) return;
      copy(r, p, ["title"]);
      if (p.gloss) r.gloss = p.gloss;
      /* lex: meanings of words the hard-word panel does NOT show. They feed
         the tap-to-look-up search only (lemma.js), so the panel stays a list
         chosen by the author rather than an inventory of everything the
         course does not teach. */
      if (p.lex) r.lex = p.lex;
    });
  }

  /**
   * Writing tasks. The brief and the checklist are in the overlay, because
   * the student reads them; the accepted Italian versions stay in the
   * neutral layer.
   */
  function applyWriting(lang) {
    (global.WRITING || []).forEach(function (w) {
      var p = get(lang, "write:" + w.id);
      if (!p) return;
      copy(w, p, ["title", "brief", "checklist"]);
      byIndex(w.items, (p.items || []).map(function (x) { return x.q; }), "q");
    });
  }

  /**
   * False friends: the ONLY category where the overlay is sometimes shorter
   * than the list and has every right to be.
   *
   * An entry gets an explanation only when its `for` contains that language.
   * For the others we CLEAR the fields instead of leaving them from the
   * previous language: after switching from Polish to Spanish "la targa" is
   * no longer a trap and must not keep carrying the Polish explanation. The
   * overlay is idempotent, so without this clearing the old text stayed on
   * screen.
   */
  function applyInterference(lang) {
    (global.INTERFERENCE || []).forEach(function (v) {
      var p = get(lang, "int:" + v.id);
      if (p) { v.looks = p.looks; v.mean = p.mean; v.why = p.why; }
      else { v.looks = ""; v.mean = ""; v.why = ""; }
    });
  }

  /**
   * Applies the texts of the chosen language onto everything already loaded.
   * Safe to call repeatedly and to switch languages on the fly.
   */
  function applyStrings(lang) {
    var reg = global.Core && global.Core.registry;
    if (reg) reg.levels.forEach(function (lv) { applyLevel(lv, lang); });
    (global.CONVERSATIONS || []).forEach(function (c) { applyConversation(c, lang); });
    applyRef(lang);
    applyPhonetics(lang);
    applyReadings(lang);
    applyWriting(lang);
    applyInterference(lang);
  }

  LINGUAI.addStrings = addStrings;
  LINGUAI.applyStrings = applyStrings;
  LINGUAI.hasStrings = hasLang;

})(window);
