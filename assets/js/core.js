/* ============================================================
   core.js — stan aplikacji, zapis postępów, algorytm powtórek
   Brak zależności zewnętrznych. Skrypt klasyczny (działa z file://).
   ============================================================ */
(function (global) {
  "use strict";

  var STORE_KEY = "linguai.italiano.v2";
  var SCHEMA = 2;

  /* Klucz sprzed rozdzielenia języków: czytany raz, przy migracji. */
  var STORE_KEY_V1 = "linguai.italiano.pl.v1";

  /* ---------------- Rejestr kursu ---------------- */
  var registry = {
    levels: [],          // [{code, cefrLabel, dataFiles, name, desc, units}]
    byCode: {},          // code -> level
    lessonIndex: {},     // lessonId -> {lesson, unit, level}
    vocabIndex: {},      // norm(włoski) -> tłumaczenie w bieżącym języku
    loaded: {}           // code -> true
  };

  /* ---------------- Stan trwały ---------------- */
  var defaultState = function () {
    return {
      schema: SCHEMA,
      createdAt: Date.now(),
      lessons: {},        // id -> {score, total, done, ts, attempts}
      srs: {},            // cardKey (sam włoski) -> {it, tr:{lang->napis}, src, ef, reps, interval, due, lapses}
      saved: {},          // cardKey -> true (słówka „do zapamiętania")
      streak: { count: 0, lastDay: null, best: 0 },
      xp: 0,
      minutes: 0,
      settings: {
        lang: "pl",         // język wyjaśnień; włoski jest zawsze językiem uczonym
        theme: "light",
        voiceSource: "natural", // "natural" = nagrania Edge TTS, "system" = Web Speech API
        rate: 1,
        autoplay: true,
        showPl: true,       // tłumaczenia widoczne od razu
        strictAccents: false
      },
      stats: { correct: 0, wrong: 0, lessonsDone: 0, days: {} }
    };
  };

  var state = defaultState();

  function load() {
    try {
      var raw = global.localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && parsed.schema === SCHEMA) state = merge(defaultState(), parsed);
        return;
      }
      var old = global.localStorage.getItem(STORE_KEY_V1);
      if (old) { state = migrateV1(JSON.parse(old)); save(); }
    } catch (e) { /* pierwsza wizyta lub zablokowany storage */ }
  }

  /**
   * v1 → v2. W v1 fiszka była kluczowana włoskim RAZEM z polskim tłumaczeniem,
   * więc zmiana języka wyjaśnień osierociłaby całą talię. W v2 kluczem jest sam
   * włoski, a tłumaczenia siedzą w podobiekcie tr, po jednym na język.
   *
   * Postępy lekcji, passa, XP i statystyki przechodzą bez zmian: id lekcji są
   * neutralne językowo, więc nauka nie zaczyna się od zera.
   */
  function migrateV1(old) {
    var next = merge(defaultState(), old);
    next.schema = SCHEMA;
    next.settings.lang = "pl";        // v1 istniał tylko po polsku
    next.srs = {};

    Object.keys(old.srs || {}).forEach(function (oldKey) {
      var c = old.srs[oldKey];
      if (!c || !c.it) return;
      var key = cardKey(c.it);
      var card = {
        it: c.it, tr: { pl: c.pl || "" }, src: c.src || "",
        ef: c.ef, reps: c.reps, interval: c.interval, due: c.due, lapses: c.lapses
      };
      // dwie fiszki v1 o tym samym włoskim schodzą się w jedną: zostaje pilniejsza,
      // ze swoją własną glosą; glosa przegranej wchodzi tylko w puste miejsce
      var prev = next.srs[key];
      if (!prev) { next.srs[key] = card; return; }
      var win = card.due < prev.due ? card : prev;
      var lose = win === card ? prev : card;
      if (!win.tr.pl && lose.tr.pl) win.tr.pl = lose.tr.pl;
      next.srs[key] = win;
    });
    return next;
  }

  var saveTimer = null;
  function save() {
    if (saveTimer) return;
    saveTimer = global.setTimeout(function () {
      saveTimer = null;
      try { global.localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
      catch (e) { Core.toast(global.I18n.t("core.saveFailed")); }
    }, 180);
  }

  function merge(base, over) {
    Object.keys(over).forEach(function (k) {
      if (over[k] && typeof over[k] === "object" && !Array.isArray(over[k]) && base[k] && typeof base[k] === "object") {
        base[k] = merge(base[k], over[k]);
      } else if (over[k] !== undefined) {
        base[k] = over[k];
      }
    });
    return base;
  }

  /* ---------------- Normalizacja tekstu ---------------- */
  var ACCENT_MAP = { "à": "a", "á": "a", "è": "e", "é": "e", "ì": "i", "í": "i", "ò": "o", "ó": "o", "ù": "u", "ú": "u" };

  function stripAccents(s) {
    return s.replace(/[àáèéìíòóùú]/g, function (c) { return ACCENT_MAP[c] || c; });
  }

  /** Normalizuje odpowiedź ucznia do porównania. */
  function norm(s, opts) {
    opts = opts || {};
    var t = String(s == null ? "" : s)
      .toLowerCase()
      .replace(/[‘’ʼ`´]/g, "'")
      .replace(/[“”„]/g, '"')
      .replace(/[.,;:!?…"()\[\]]/g, " ")
      .replace(/\s*'\s*/g, "'")
      .replace(/\s+/g, " ")
      .trim();
    if (!opts.keepAccents) t = stripAccents(t);
    return t;
  }

  /** Odległość Levenshteina (do „prawie dobrze" i oceny wymowy). */
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

  /** Podobieństwo 0..1 na bazie Levenshteina. */
  function similarity(a, b) {
    var x = norm(a), y = norm(b);
    if (!x && !y) return 1;
    var d = levenshtein(x, y);
    return Math.max(0, 1 - d / Math.max(x.length, y.length));
  }

  /**
   * Sprawdza odpowiedź otwartą wobec listy akceptowanych wariantów.
   * Zwraca {ok, near, best} — „near" to literówka (podobieństwo ≥ 0.85).
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

  /* ---------------- Dzień / passa ---------------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function daysBetween(aStr, bStr) {
    var a = new Date(aStr + "T00:00:00"), b = new Date(bStr + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }

  function touchDay() {
    var t = today();
    state.stats.days[t] = state.stats.days[t] || 0;
    var s = state.streak;
    if (s.lastDay === t) return;
    if (s.lastDay && daysBetween(s.lastDay, t) === 1) s.count += 1;
    else s.count = 1;
    s.lastDay = t;
    if (s.count > s.best) s.best = s.count;
    save();
  }

  /* ---------------- SRS: SM-2 (uproszczony) ----------------
     Karta = jednostka do zapamiętania (słówko lub reguła).
     ocena q: 0 = źle, 3 = z trudem, 4 = dobrze, 5 = łatwo
     ------------------------------------------------------- */
  var DAY = 86400000;

  /** Klucz fiszki: sam włoski. Tłumaczenie zależy od języka i nie może go współtworzyć. */
  function cardKey(it) { return norm(it); }

  /**
   * Dokłada fiszkę albo — jeśli już jest — tylko tłumaczenie w bieżącym języku.
   * Dzięki temu uczeń, który przełączy się na angielski, nie gubi harmonogramu
   * powtórek: ta sama karta zyskuje drugą glosę.
   */
  function addCard(it, tr, src) {
    var k = cardKey(it);
    var lang = state.settings.lang;
    var card = state.srs[k];
    if (!card) {
      card = state.srs[k] = { it: it, tr: {}, src: src || "", ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
    }
    if (tr && card.tr[lang] !== tr) { card.tr[lang] = tr; }
    save();
    return k;
  }

  /** Tłumaczenie fiszki w bieżącym języku, z zejściem na jakiekolwiek istniejące. */
  /**
   * Tłumaczenie fiszki w bieżącym języku. Trzy źródła, w tej kolejności:
   * 1. glosa zapisana w fiszce,
   * 2. słownik wczytanego kursu — fiszka dodana po polsku ma tu pokazać
   *    angielskie znaczenie, gdy uczeń przełączy język, bez czekania na
   *    ponowne przerobienie lekcji,
   * 3. jakakolwiek glosa fiszki, bo pusty wiersz jest gorszy niż obcy.
   *
   * Wynik z kursu NIE jest zapisywany do fiszki: gdyby nakładki danego języka
   * jeszcze nie było, zapisalibyśmy polski tekst pod kluczem „en" na stałe.
   */
  function cardTr(card) {
    if (!card || !card.tr) return "";
    var lang = state.settings.lang;
    if (card.tr[lang]) return card.tr[lang];

    var fromCourse = registry.vocabIndex[norm(card.it)];
    if (fromCourse) return fromCourse;

    var any = Object.keys(card.tr).filter(function (k) { return card.tr[k]; });
    return any.length ? card.tr[any[0]] : "";
  }

  function gradeCard(key, q) {
    var c = state.srs[key];
    if (!c) return null;
    if (q < 3) {
      c.reps = 0;
      c.interval = 0;
      c.lapses += 1;
      c.due = Date.now() + 10 * 60000;   // powtórka w tej samej sesji, za 10 min
    } else {
      c.reps += 1;
      if (c.reps === 1) c.interval = 1;
      else if (c.reps === 2) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ef);
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.due = Date.now() + c.interval * DAY;
    }
    save();
    return c;
  }

  function dueCards(limit) {
    var now = Date.now(), out = [];
    Object.keys(state.srs).forEach(function (k) {
      if (state.srs[k].due <= now) out.push(Object.assign({ key: k }, state.srs[k]));
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return dueCards().length; }

  /* ---------------- Postęp lekcji ---------------- */
  function lessonState(id) {
    return state.lessons[id] || null;
  }

  function isLessonDone(id) {
    var l = state.lessons[id];
    return !!(l && l.done);
  }

  function recordLesson(id, score, total, seconds) {
    var prev = state.lessons[id] || { attempts: 0, best: 0 };
    var pct = total ? score / total : 0;
    var wasDone = !!prev.done;
    state.lessons[id] = {
      attempts: (prev.attempts || 0) + 1,
      score: score,
      total: total,
      best: Math.max(prev.best || 0, pct),
      done: pct >= 0.7 || wasDone,
      ts: Date.now()
    };
    var t = today();
    state.stats.days[t] = (state.stats.days[t] || 0) + score;
    if (!wasDone && state.lessons[id].done) {
      state.stats.lessonsDone += 1;
      state.xp += 20;
    }
    state.xp += score * 2;
    state.minutes += Math.round((seconds || 0) / 60);
    touchDay();
    save();
    return state.lessons[id];
  }

  function recordAnswer(ok) {
    if (ok) { state.stats.correct += 1; state.xp += 1; }
    else state.stats.wrong += 1;
    save();
  }

  /* ---------------- Postęp jednostek i poziomów ---------------- */
  function unitProgress(unit) {
    var ids = (unit.lessons || []).map(function (l) { return l.id; });
    if (unit.test) ids.push(unit.test.id);
    var done = ids.filter(isLessonDone).length;
    return { done: done, total: ids.length, pct: ids.length ? done / ids.length : 0 };
  }

  function levelProgress(level) {
    var done = 0, total = 0;
    (level.units || []).forEach(function (u) {
      var p = unitProgress(u);
      done += p.done; total += p.total;
    });
    return { done: done, total: total, pct: total ? done / total : 0 };
  }

  /** Pierwsza nieukończona lekcja poziomu — „gdzie jestem". */
  function nextLesson(level) {
    for (var i = 0; i < (level.units || []).length; i++) {
      var u = level.units[i];
      for (var j = 0; j < (u.lessons || []).length; j++) {
        if (!isLessonDone(u.lessons[j].id)) return { unit: u, lesson: u.lessons[j] };
      }
      if (u.test && !isLessonDone(u.test.id)) return { unit: u, lesson: u.test };
    }
    return null;
  }

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

    var lang = state.settings.lang;
    var paths = files.map(function (f) { return "data/core/" + f; }).concat(i18nPaths(lang, files));

    loadScripts(paths, function (failed) {
      markI18n(paths, failed);
      global.LINGUAI.applyStrings(lang);
      // częściowe niepowodzenie nie blokuje poziomu: liczy się, czy cokolwiek się wczytało
      var got = (lv.units || []).length > 0;
      registry.loaded[code] = got ? true : "error";
      if (failed.length && got) console.warn("[LinguAI] Nie wczytano: " + failed.join(", "));
      cb && cb(got);
    });
  }

  /* Pliki tekstów wczytywane od razu przy starcie, niezależne od poziomu. */
  var EAGER_FILES = ["curriculum-index.js", "conversations.js", "grammar-reference.js"];

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
    state.settings.lang = lang;
    save();
    var paths = i18nPaths(lang, files);
    loadScripts(paths, function (failed) {
      markI18n(paths, failed);
      global.LINGUAI.applyStrings(lang);
      reindex();   // słownik fiszek musi wskazywać na glosy w nowym języku
      cb && cb(failed);
    });
  }

  /* ---------------- Import / eksport ---------------- */
  function exportState() { return JSON.stringify(state, null, 2); }

  function importState(json) {
    var parsed = JSON.parse(json);
    if (!parsed || parsed.schema !== SCHEMA) throw new Error("Nieobsługiwana wersja pliku.");
    state = merge(defaultState(), parsed);
    save();
  }

  function resetState() {
    state = defaultState();
    save();
  }

  /* ---------------- Drobiazgi UI ---------------- */
  function toast(msg, kind) {
    var stack = document.getElementById("toastStack");
    if (!stack) return;
    var el = document.createElement("div");
    el.className = "toast" + (kind === "ok" ? " toast--ok" : "");
    el.textContent = msg;
    stack.appendChild(el);
    global.setTimeout(function () { el.remove(); }, 3200);
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /** Deterministyczny shuffle (seed = string), by ćwiczenia nie skakały przy re-renderze. */
  function seededShuffle(arr, seed) {
    var a = arr.slice(), h = 2166136261;
    for (var i = 0; i < String(seed).length; i++) {
      h ^= String(seed).charCodeAt(i); h = Math.imul(h, 16777619);
    }
    function rnd() { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }
    for (var j = a.length - 1; j > 0; j--) {
      var k = Math.floor(rnd() * (j + 1));
      var t = a[j]; a[j] = a[k]; a[k] = t;
    }
    return a;
  }

  /* ---------------- Eksport modułu ---------------- */
  var Core = {
    STORE_KEY: STORE_KEY,
    registry: registry,
    get state() { return state; },
    load: load, save: save,
    norm: norm, stripAccents: stripAccents, levenshtein: levenshtein,
    similarity: similarity, checkOpen: checkOpen,
    today: today, touchDay: touchDay,
    cardKey: cardKey, addCard: addCard, cardTr: cardTr, gradeCard: gradeCard,
    dueCards: dueCards, dueCount: dueCount,
    lessonState: lessonState, isLessonDone: isLessonDone,
    recordLesson: recordLesson, recordAnswer: recordAnswer,
    unitProgress: unitProgress, levelProgress: levelProgress, nextLesson: nextLesson,
    registerLevel: registerLevel, addUnits: addUnits, getLesson: getLesson,
    loadLevelData: loadLevelData, setLanguage: setLanguage,
    exportState: exportState, importState: importState, resetState: resetState,
    toast: toast, esc: esc, seededShuffle: seededShuffle
  };

  global.Core = Core;
  global.LINGUAI = global.LINGUAI || {};
  global.LINGUAI.registerLevel = registerLevel;
  global.LINGUAI.addUnits = addUnits;

})(window);
