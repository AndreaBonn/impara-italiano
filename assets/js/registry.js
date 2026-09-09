/* ============================================================
   registry.js — struktura kursu i dociąganie jej na żądanie.

   Wyjęte z core.js: to jedyna część tamtego pliku, która nie dotyczy
   ucznia, tylko materiału. Trzyma poziomy, jednostki i lekcje, buduje
   po nich indeksy, i wstrzykuje pliki danych, gdy uczeń wchodzi na
   poziom albo zmienia język wyjaśnień.

   Ładuje się PRZED core.js, bo core czyta stąd indeks słownictwa przy
   wykonaniu modułu. Zależność idzie w jedną stronę: registry nie wie
   nic o postępach, fiszkach ani o Core.

   Dwie rzeczy nieoczywiste, obie wynikają z braku kroku budowania:
   - pliki wchodzą przez <script>, nie przez fetch, bo kurs ma działać
     także z file://, gdzie fetch jest zabroniony przez CORS;
   - warstwa neutralna idzie przed nakładką z tekstami i dopiero po obu
     woła się applyStrings — kolejność trzyma s.async = false.
   ============================================================ */
(function (global) {
  "use strict";

  var norm = global.Txt.norm;
  var Store = global.Store;
  var save = Store.save;

  /* ---------------- Rejestr kursu ---------------- */
  var registry = {
    levels: [],          // [{code, cefrLabel, dataFiles, name, desc, units}]
    byCode: {},          // code -> level
    lessonIndex: {},     // lessonId -> {lesson, unit, level}
    vocabIndex: {},      // norm(włoski) -> tłumaczenie w bieżącym języku
    loaded: {}           // code -> true
  };

  /* ---------------- Rejestracja danych kursu ---------------- */
  function registerLevel(level) {
    if (registry.byCode[level.code]) {
      // ponowne wczytanie: podmiana jednostek
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

  /** Dokłada jednostki do już zarejestrowanego poziomu (dane dzielone na pliki). */
  function addUnits(code, units) {
    var lv = registry.byCode[code];
    if (!lv) return;
    lv.units = (lv.units || []).concat(units);
    reindex();
  }

  /** Wstrzykuje skrypty po kolei (s.async = false trzyma kolejność). */
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

  /* Pliki tekstów wczytane już dla danego języka: "lang/plik.js" -> true */
  var i18nLoaded = {};

  var I18N_DIR = "data/i18n/";

  function i18nPaths(lang, files) {
    return files.filter(function (f) { return !i18nLoaded[lang + "/" + f]; })
      .map(function (f) { return I18N_DIR + lang + "/" + f; });
  }

  /** Zapamiętuje tylko to, co naprawdę się wczytało: nieudane ma być ponowione. */
  function markI18n(paths, failed) {
    paths.forEach(function (p) {
      if (p.indexOf(I18N_DIR) !== 0 || failed.indexOf(p) >= 0) return;
      i18nLoaded[p.slice(I18N_DIR.length)] = true;
    });
  }

  /**
   * Ładuje pliki danych poziomu na żądanie (działa też z file://).
   * Najpierw warstwa neutralna, potem teksty w języku ucznia — kolejność
   * trzyma loadScripts, a scalenie idzie dopiero po wczytaniu obu.
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
      // reindex jeszcze raz: addUnits zbudował indeks, zanim nakładka wpisała tłumaczenia
      reindex();
      // częściowe niepowodzenie nie blokuje poziomu: liczy się, czy cokolwiek się wczytało
      var got = (lv.units || []).length > 0;
      registry.loaded[code] = got ? true : "error";
      if (failed.length && got) console.warn("[LinguAI] Nie wczytano: " + failed.join(", "));
      cb && cb(got);
    });
  }

  /* Pliki tekstów wczytywane od razu przy starcie, niezależne od poziomu. */
  var EAGER_FILES = ["curriculum-index.js", "conversations.js", "grammar-reference.js", "phonetics.js", "readings.js", "writing.js", "interference.js"];

  /**
   * Zmienia język wyjaśnień. Warstwa neutralna zostaje w pamięci taka, jaka jest:
   * dociągamy tylko brakujące nakładki i nakładamy je na te same obiekty, bo
   * scalanie jest idempotentne. Stąd brak przeładowania strony.
   *
   * cb(missing) — lista plików, których nie udało się wczytać. Niepusta oznacza,
   * że część kursu została w poprzednim języku; wywołujący ma to pokazać, nie zignorować.
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
      reindex();   // słownik fiszek musi wskazywać na glosy w nowym języku
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

  /* Pliki danych kursu wołają te dwie przy wczytaniu. */
  global.LINGUAI = global.LINGUAI || {};
  global.LINGUAI.registerLevel = registerLevel;
  global.LINGUAI.addUnits = addUnits;

})(window);
