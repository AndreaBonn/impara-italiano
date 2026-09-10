/* ============================================================
   registry.js — the course structure and pulling it in on demand.

   Pulled out of core.js: it is the only part of that file that is not
   about the student but about the material. It holds levels, units and
   lessons, builds indexes over them, and injects data files when the
   student enters a level or changes the language of explanations.

   It loads BEFORE core.js, because core reads the vocabulary index from
   here while its module body runs. The dependency goes one way: the
   registry knows nothing about progress, cards or Core.

   Two non-obvious things, both consequences of having no build step:
   - files come in through <script>, not through fetch, because the course
     must also work from file://, where fetch is forbidden by CORS;
   - the neutral layer goes before the text overlay and applyStrings is
     only called after both — s.async = false keeps the order.
   ============================================================ */
(function (global) {
  "use strict";

  var norm = global.Txt.norm;
  var Store = global.Store;
  var save = Store.save;

  /* ---------------- Course registry ---------------- */
  var registry = {
    levels: [],          // [{code, cefrLabel, dataFiles, name, desc, units}]
    byCode: {},          // code -> level
    lessonIndex: {},     // lessonId -> {lesson, unit, level}
    vocabIndex: {},      // norm(italian) -> translation in the current language
    loaded: {}           // code -> true
  };

  /* ---------------- Registering course data ---------------- */
  function registerLevel(level) {
    if (registry.byCode[level.code]) {
      // loaded again: swap the units
      registry.byCode[level.code].units = level.units;
    } else {
      registry.levels.push(level);
      registry.byCode[level.code] = level;
    }
    reindex();
  }

  function reindex() {
    registry.lessonIndex = {};
    registry.vocabIndex = {};
    function note(l, u, lv) {
      registry.lessonIndex[l.id] = { lesson: l, unit: u, level: lv };
      (l.vocab || []).forEach(function (v) {
        if (v.it && v.tr) registry.vocabIndex[norm(v.it)] = v.tr;
      });
    }
    registry.levels.forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).forEach(function (l) { note(l, u, lv); });
        if (u.test) note(u.test, u, lv);
      });
    });
  }

  function getLesson(id) { return registry.lessonIndex[id] || null; }

  /** Adds units to an already registered level (data split across files). */
  function addUnits(code, units) {
    var lv = registry.byCode[code];
    if (!lv) return;
    lv.units = (lv.units || []).concat(units);
    reindex();
  }

  /** Injects scripts one after another (s.async = false keeps the order). */
  function loadScripts(paths, cb) {
    var i = 0, failed = [];
    function next() {
      if (i >= paths.length) { cb(failed); return; }
      var s = document.createElement("script");
      var src = paths[i++];
      s.src = src;
      s.async = false;
      s.onload = next;
      s.onerror = function () { failed.push(src); next(); };
      document.head.appendChild(s);
    }
    next();
  }

  /* Text files already loaded for a given language: "lang/file.js" -> true */
  var i18nLoaded = {};

  var I18N_DIR = "data/i18n/";

  function i18nPaths(lang, files) {
    return files.filter(function (f) { return !i18nLoaded[lang + "/" + f]; })
      .map(function (f) { return I18N_DIR + lang + "/" + f; });
  }

  /** Remembers only what actually loaded: a failure must be retried. */
  function markI18n(paths, failed) {
    paths.forEach(function (p) {
      if (p.indexOf(I18N_DIR) !== 0 || failed.indexOf(p) >= 0) return;
      i18nLoaded[p.slice(I18N_DIR.length)] = true;
    });
  }

  /**
   * Loads a level's data files on demand (works from file:// too).
   * The neutral layer first, then the texts in the student's language —
   * loadScripts keeps the order, and merging happens only once both are in.
   */
  function loadLevelData(code, cb) {
    var lv = registry.byCode[code];
    var files = lv && lv.dataFiles;
    if (registry.loaded[code] || !lv || !files || !files.length) { cb && cb(!!lv); return; }
    registry.loaded[code] = "loading";

    var lang = Store.state.settings.lang;
    var paths = files.map(function (f) { return "data/core/" + f; }).concat(i18nPaths(lang, files));

    loadScripts(paths, function (failed) {
      markI18n(paths, failed);
      global.LINGUAI.applyStrings(lang);
      // reindex once more: addUnits built the index before the overlay wrote the translations in
      reindex();
      // a partial failure does not block the level: what counts is whether anything loaded
      var got = (lv.units || []).length > 0;
      registry.loaded[code] = got ? true : "error";
      if (failed.length && got) console.warn("[LinguAI] Nie wczytano: " + failed.join(", "));
      cb && cb(got);
    });
  }

  /* Text files loaded eagerly at startup, independent of any level. */
  var EAGER_FILES = ["curriculum-index.js", "conversations.js", "grammar-reference.js", "phonetics.js", "readings.js", "writing.js", "interference.js"];

  /**
   * Changes the language of explanations. The neutral layer stays in memory
   * as it is: we only pull the missing overlays and apply them on top of the
   * same objects, because merging is idempotent. Hence no page reload.
   *
   * cb(missing) — the list of files that failed to load. A non-empty list
   * means part of the course stayed in the previous language; the caller
   * must show that, not ignore it.
   */
  function setLanguage(lang, cb) {
    var files = EAGER_FILES.slice();
    registry.levels.forEach(function (lv) {
      if (registry.loaded[lv.code] === true) files = files.concat(lv.dataFiles || []);
    });
    Store.state.settings.lang = lang;
    save();
    var paths = i18nPaths(lang, files);
    loadScripts(paths, function (failed) {
      markI18n(paths, failed);
      global.LINGUAI.applyStrings(lang);
      reindex();   // the card dictionary must point at glosses in the new language
      cb && cb(failed);
    });
  }

  global.Registry = {
    registry: registry,
    registerLevel: registerLevel, addUnits: addUnits, getLesson: getLesson,
    reindex: reindex,
    i18nPaths: i18nPaths, markI18n: markI18n,
    loadLevelData: loadLevelData, setLanguage: setLanguage,
    EAGER_FILES: EAGER_FILES
  };

  /* The course data files call these two when they load. */
  global.LINGUAI = global.LINGUAI || {};
  global.LINGUAI.registerLevel = registerLevel;
  global.LINGUAI.addUnits = addUnits;

})(window);
