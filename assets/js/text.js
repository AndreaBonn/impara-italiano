/* ============================================================
   text.js — text comparison: normalization, distance, answer grading.

   Pulled out of core.js, with which it has nothing in common but history.
   These functions touch neither state, nor localStorage, nor the DOM:
   they take a string and return a string or a number. As long as they
   lived inside the state module, testing them meant building the whole
   sandbox with a controllable clock and storage — an apparatus for
   something that does not need it.

   Core still exposes them under its own names (Core.norm, Core.esc, …),
   so none of the twenty modules that use them changes a single line.
   ============================================================ */
(function (global) {
  "use strict";

  var ACCENT_MAP = { "à": "a", "á": "a", "è": "e", "é": "e", "ì": "i", "í": "i", "ò": "o", "ó": "o", "ù": "u", "ú": "u" };

  function stripAccents(s) {
    return s.replace(/[àáèéìíòóùú]/g, function (c) { return ACCENT_MAP[c] || c; });
  }

  /**
   * Typographic characters to typewriter ones. The swap is CHARACTER FOR
   * CHARACTER, so it does not shift positions in the text — that is the
   * condition search result highlighting rests on (search.js).
   *
   * Phone keyboards and word processors produce "’", not "'". Without this
   * swap a student who pastes or types on iOS never matches "l'autore".
   */
  function detypo(s) {
    return String(s == null ? "" : s)
      .replace(/[‘’ʼ`´]/g, "'")
      .replace(/[“”„]/g, '"');
  }

  /**
   * Folding for comparisons: lower case, unified apostrophes, accents
   * stripped. It does NOT collapse whitespace, unlike norm(): that way
   * the length is preserved and the original can be sliced by indexes
   * taken from the folded text.
   */
  function fold(s) {
    return stripAccents(detypo(s).toLowerCase());
  }

  /** Normalizes the student's answer for comparison. */
  function norm(s, opts) {
    opts = opts || {};
    var t = detypo(s)
      .toLowerCase()
      .replace(/[.,;:!?…"()[\]]/g, " ")
      .replace(/\s*'\s*/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    if (!opts.keepAccents) t = stripAccents(t);
    return t;
  }

  /** Levenshtein distance (for "almost right" and pronunciation scoring). */
  function levenshtein(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    var prev = new Array(b.length + 1), cur = new Array(b.length + 1), i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur[0] = i;
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1));
      }
      for (j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }

  /** Similarity 0..1 based on Levenshtein. */
  function similarity(a, b) {
    var x = norm(a), y = norm(b);
    if (!x && !y) return 1;
    var d = levenshtein(x, y);
    return Math.max(0, 1 - d / Math.max(x.length, y.length));
  }

  /**
   * Checks an open answer against a list of accepted variants.
   * Returns {ok, near, best} — "near" means a typo (similarity >= 0.85).
   */
  function checkOpen(input, accepted, strictAccents) {
    var list = Array.isArray(accepted) ? accepted : [accepted];
    var given = norm(input, { keepAccents: !!strictAccents });
    var best = null, bestSim = 0, ok = false;
    for (var i = 0; i < list.length; i++) {
      var target = norm(list[i], { keepAccents: !!strictAccents });
      if (given === target) { ok = true; best = list[i]; bestSim = 1; break; }
      var sim = similarity(given, target);
      if (sim > bestSim) { bestSim = sim; best = list[i]; }
    }
    return { ok: ok, near: !ok && bestSim >= 0.85 && given.length > 2, best: best || list[0], sim: bestSim };
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  global.Txt = {
    stripAccents: stripAccents, detypo: detypo, fold: fold, norm: norm,
    levenshtein: levenshtein, similarity: similarity, checkOpen: checkOpen,
    esc: esc
  };

})(window);
