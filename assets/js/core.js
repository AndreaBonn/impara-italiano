/* ============================================================
   core.js — nauka: postępy lekcji, passa, talia powtórek, rejestr kursu.

   Czego tu już NIE ma, choć było: porównywania tekstu (text.js),
   komunikatów na ekranie (notice.js) i całego zapisu stanu (store.js).
   Zostało to, co opisuje naukę ucznia, a nie to, jak leży na dysku.

   `Core` wystawia dalej także tamte trzy, pod dotychczasowymi nazwami:
   dwadzieścia modułów woła Core.norm, Core.toast i Core.save i nie ma
   powodu, żeby wiedziały o podziale.
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------------- Stan trwały ----------------
     Cały zapis i odczyt siedzi w store.js: to on trzyma `state`, jego
     schemat, migracje i pamięć przeglądarki. Tutaj zostaje wyłącznie
     odczyt bieżącego stanu i prośba o zapis, bo tego używa reszta pliku.
     ------------------------------------------------------- */
  var Store = global.Store;
  var save = Store.save;
  var isForbidden = Store.isForbidden;
  var cardKey = Store.cardKey;

  /* ---------------- Rejestr kursu ---------------- */
  var registry = {
    levels: [],          // [{code, cefrLabel, dataFiles, name, desc, units}]
    byCode: {},          // code -> level
    lessonIndex: {},     // lessonId -> {lesson, unit, level}
    vocabIndex: {},      // norm(włoski) -> tłumaczenie w bieżącym języku
    loaded: {}           // code -> true
  };

  /* ---------------- Porównywanie tekstu ----------------
     Implementacja siedzi w text.js: to są funkcje czyste, a stan im do
     niczego nie służy. Tutaj zostaje sam skrót nazwy, żeby reszta pliku
     czytała się jak dotąd, i ponowne wystawienie w Core na końcu — bo
     dwadzieścia modułów woła Core.norm, nie Txt.norm.
     ------------------------------------------------------- */
  var stripAccents = global.Txt.stripAccents;
  var fold = global.Txt.fold;
  var norm = global.Txt.norm;
  var levenshtein = global.Txt.levenshtein;
  var similarity = global.Txt.similarity;
  var checkOpen = global.Txt.checkOpen;
  var esc = global.Txt.esc;

  /* Komunikaty na ekranie siedzą w notice.js — patrz tam po powód. */
  var toast = global.Notice.toast;
  var notice = global.Notice.notice;

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
    Store.state.stats.days[t] = Store.state.stats.days[t] || 0;
    var s = Store.state.streak;
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

  /**
   * Dokłada fiszkę albo — jeśli już jest — tylko tłumaczenie w bieżącym języku.
   * Dzięki temu uczeń, który przełączy się na angielski, nie gubi harmonogramu
   * powtórek: ta sama karta zyskuje drugą glosę.
   */
  /**
   * Dokłada fiszkę. Zwraca klucz albo `null`, gdy treść jest odrzucona.
   *
   * ODRZUCENIE KLUCZY ZASTRZEŻONYCH. `merge()` filtruje `__proto__`,
   * `constructor` i `prototype`, ale ta droga jej nie przechodzi: idzie
   * prosto przez `cardKey` do `Store.state.srs[k] = {…}`, a `norm()` podkreśleń
   * nie rusza. Fiszka o takiej treści ustawiłaby PROTOTYP obiektu zamiast
   * założyć w nim właściwość — zniknęłaby z `Object.keys` i z zapisu, a
   * odczyt dowolnego brakującego klucza zacząłby trafiać w podstawiony
   * obiekt. Cicho, bo nic się nie wywraca.
   *
   * Do tej pory nieosiągalne: fiszki zakładał wyłącznie kurs. Import cudzej
   * talii z pliku czyni z tego wektor, więc obrona wchodzi razem z nim.
   * Odrzucamy zamiast przemianowywać: to nie są włoskie słowa i nie ma
   * czego ratować, a przemianowanie zostawiłoby w talii klucz, którego
   * uczeń nie umie z niczym powiązać.
   */
  function addCard(it, tr, src) {
    var k = cardKey(it);
    if (!k || isForbidden(k)) return null;
    var lang = Store.state.settings.lang;
    var card = Store.state.srs[k];
    if (!card) {
      card = Store.state.srs[k] = { it: it, tr: {}, src: src || "", ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
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
    var lang = Store.state.settings.lang;
    if (card.tr[lang]) return card.tr[lang];

    var fromCourse = registry.vocabIndex[norm(card.it)];
    if (fromCourse) return fromCourse;

    var any = Object.keys(card.tr).filter(function (k) { return card.tr[k]; });
    return any.length ? card.tr[any[0]] : "";
  }

  /**
   * Harmonogram SM-2 na dowolnej karcie: {ef, reps, interval, due, lapses}.
   *
   * Wydzielony z gradeCard, bo quaderno błędów (errors.js) prowadzi drugą
   * talię tymi samymi regułami. Dwie kopie tej arytmetyki rozjechałyby się
   * przy pierwszej zmianie progu — i to po cichu, bo obie dalej działają.
   *
   * OD F1 SŁUŻY JUŻ TYLKO QUADERNO BŁĘDÓW. Talia słownictwa jest na FSRS
   * (patrz gradeCard niżej). Zostawione tutaj, a nie przeniesione do
   * errors.js, bo to nadal arytmetyka harmonogramu, a nie logika quaderna,
   * i nadal wisi w publicznym API jako `Core.schedule`.
   */
  function schedule(c, q) {
    if (q < 3) {
      c.reps = 0;
      c.interval = 0;
      c.lapses = (c.lapses || 0) + 1;
      c.due = Date.now() + 10 * 60000;   // powtórka w tej samej sesji, za 10 min
    } else {
      c.reps = (c.reps || 0) + 1;
      if (c.reps === 1) c.interval = 1;
      else if (c.reps === 2) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ef);
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.due = Date.now() + c.interval * DAY;
    }
    return c;
  }

  /* ---------------- FSRS na talii słownictwa ----------------

     Talia słownictwa przechodzi na FSRS, quaderno błędów zostaje na SM-2
     wyżej. To nie jest niekonsekwencja, tylko wniosek z pomiaru: errors.js
     kasuje kartę przy `ok && reps >= 2` (GRADUATE_REPS), a gałąź
     `interval * ef` w `schedule` zaczyna się od `reps >= 3`. Karta z
     quaderno NIGDY tam nie dochodzi — `ef` jest tam zapisywane i nigdy
     czytane. Podmiana algorytmu w miejscu, którego nie widać, powiększa
     powierzchnię bez żadnego zysku.

     Skala ocen w interfejsie została ta sama (0/3/4/5), bo to napisy,
     które uczeń już zna, i zmiana ich znaczenia przy okazji zmiany silnika
     zmieszałaby dwie rzeczy w jednym kroku.
     ------------------------------------------------------- */

  var OCENA_FSRS = { 0: 1, 3: 2, 4: 3, 5: 4 };   // znowu / trudne / dobrze / łatwe

  /**
   * Przenosi kartę SM-2 na tory FSRS przy PIERWSZEJ powtórce po zmianie.
   *
   * Migracji hurtem nie ma i nie ma jej być: przeliczenie całej talii przy
   * starcie przesunęłoby terminy kart, których uczeń dziś nie dotknie, a
   * numer schematu zostaje przy 2 właśnie dlatego, że żadne istniejące pole
   * nie zmienia znaczenia (R1). `ef` staje się balastem na starych kartach:
   * nie czytamy go poza tym jednym przeliczeniem.
   *
   * Przełożenie jest przybliżone i inne być nie może — SM-2 nie przechowuje
   * niczego, z czego dałoby się odtworzyć stabilność. Bierzemy to, co niesie
   * sens: dotychczasowy odstęp JEST oszacowaniem stabilności (tyle dni karta
   * wytrzymywała), a `ef` odwzorowuje się na trudność odwrotnie, bo wysokie
   * `ef` to karta łatwa, a wysoka trudność FSRS to karta trudna.
   */
  function naFsrs(c) {
    if (typeof c.s === "number" && typeof c.d === "number") return c;
    if (!c.reps) return c;                     // nowa karta startuje w FSRS od zera
    var interval = c.interval || 1;
    var ef = typeof c.ef === "number" ? c.ef : 2.5;
    c.st = "review";
    c.step = null;
    c.s = Math.max(interval, 0.001);
    c.d = Math.min(Math.max(10 - (ef - 1.3) * 7.5, 1), 10);
    c.last = (c.due || Date.now()) - interval * DAY;
    return c;
  }

  /* Silnik zależy tylko od retencji, a ta zmienia się raz na ruski rok:
     trzymamy ostatni zamiast budować go przy każdej odpowiedzi. */
  var silnikCache = { retencja: null, silnik: null };

  function silnikFsrs() {
    var r = Store.state.settings.retention || 0.9;
    if (silnikCache.retencja !== r) {
      silnikCache = { retencja: r, silnik: global.Fsrs.silnik({ retencja: r }) };
    }
    return silnikCache.silnik;
  }

  function gradeCard(key, q) {
    var c = Store.state.srs[key];
    if (!c) return null;

    naFsrs(c);
    var wynik = silnikFsrs().powtorz(
      typeof c.s === "number" ? c : null,
      OCENA_FSRS[q] || 3,
      Date.now()
    );

    c.st = wynik.st;
    c.step = wynik.step;
    c.s = wynik.s;
    c.d = wynik.d;
    c.due = wynik.due;
    c.last = wynik.last;
    /* `reps`, `interval` i `lapses` zostają przy swoim znaczeniu, bo czyta je
       widok słownika i statystyki. `interval` w dniach, jak dotąd. */
    if (q === 0) { c.reps = 0; c.lapses = (c.lapses || 0) + 1; }
    else c.reps = (c.reps || 0) + 1;
    c.interval = Math.max(0, Math.round((wynik.due - wynik.last) / DAY));

    zapiszPowtorke(key, q, wynik.last);
    save();
    return c;
  }

  /* Ile powtórek trzymamy. Rekord to trzy pola, około 40 bajtów: pięć
     tysięcy to jakieś 200 kB przy kwocie 5 MB dzielonej z całą resztą.
     Optymalizator FSRS potrzebuje rzędu tysiąca, więc tetto z zapasem. */
  var MAX_REVIEWS = 5000;

  function zapiszPowtorke(key, q, kiedy) {
    if (!Array.isArray(Store.state.reviews)) Store.state.reviews = [];
    Store.state.reviews.push({ k: key, t: kiedy, q: q });
    /* Przycinamy od najstarszej: świeża historia opisuje pamięć taką,
       jaka jest teraz, i to ona ma wartość dla strojenia. */
    if (Store.state.reviews.length > MAX_REVIEWS) {
      Store.state.reviews.splice(0, Store.state.reviews.length - MAX_REVIEWS);
    }
  }

  function dueCards(limit) {
    var now = Date.now(), out = [];
    Object.keys(Store.state.srs).forEach(function (k) {
      if (Store.state.srs[k].due <= now) out.push(Object.assign({ key: k }, Store.state.srs[k]));
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return dueCards().length; }

  /* ---------------- Postęp lekcji ---------------- */
  function lessonState(id) {
    return Store.state.lessons[id] || null;
  }

  function isLessonDone(id) {
    var l = Store.state.lessons[id];
    return !!(l && l.done);
  }

  function recordLesson(id, score, total, seconds) {
    var prev = Store.state.lessons[id] || { attempts: 0, best: 0 };
    var pct = total ? score / total : 0;
    var wasDone = !!prev.done;
    Store.state.lessons[id] = {
      attempts: (prev.attempts || 0) + 1,
      score: score,
      total: total,
      best: Math.max(prev.best || 0, pct),
      done: pct >= 0.7 || wasDone,
      ts: Date.now()
    };
    var t = today();
    Store.state.stats.days[t] = (Store.state.stats.days[t] || 0) + score;
    if (!wasDone && Store.state.lessons[id].done) {
      Store.state.stats.lessonsDone += 1;
      Store.state.xp += 20;
      /* Bramka stoi TUTAJ, a nie w widoku końca lekcji: recordLesson woła
         też ekran rozmów, a przy następnym widoku, który go zawoła, nie
         ma o czym pamiętać. Ten sam wzorzec co zgoda w consent.js. */
      if (backupDue()) {
        notice("core.backupDue", {
          vars: { n: lessonsSinceBackup() },
          actionKey: "core.backupSave",
          onAction: downloadBackup,
          onDismiss: snoozeBackup
        });
      }
    }
    Store.state.xp += score * 2;
    Store.state.minutes += Math.round((seconds || 0) / 60);
    touchDay();
    save();
    return Store.state.lessons[id];
  }

  function recordAnswer(ok) {
    if (ok) { Store.state.stats.correct += 1; Store.state.xp += 1; }
    else Store.state.stats.wrong += 1;
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

  /* ---------------- Kopia zapasowa ---------------- */
  /* Co ile UKOŃCZONYCH lekcji przypominać o kopii. Powtórzone podejście
     do zdanej już lekcji nie liczy się: nie przybyło niczego, co można
     stracić. Liczba trafia też do napisu przez {n}, więc zmiana tutaj
     zmienia komunikat i nie wymaga ruszania pięciu plików z napisami. */
  var BACKUP_EVERY = 10;

  /**
   * Ile lekcji uczeń ukończył od ostatniego zamknięcia sprawy: albo od
   * zapisanej kopii, albo od odłożenia przypomnienia na później.
   *
   * Dwa pola, nie jedno: `at` znaczy „tyle postępów jest zabezpieczone"
   * i przesuwa je WYŁĄCZNIE zapis kopii. Gdyby przesuwało je też
   * zamknięcie komunikatu, kurs uznałby odłożenie na później za
   * zrobioną kopię i skłamałby o tym, co uczeń ma na dysku.
   */
  function lessonsSinceBackup() {
    var b = Store.state.backup || {};
    return Store.state.stats.lessonsDone - Math.max(b.at || 0, b.snoozed || 0);
  }

  function backupDue() {
    return lessonsSinceBackup() >= BACKUP_EVERY;
  }

  function markBackup() {
    var b = Store.state.backup || {};
    Store.state.backup = { at: Store.state.stats.lessonsDone, ts: Date.now(), snoozed: b.snoozed || 0 };
    save();
  }

  /**
   * „Nie teraz": następne przypomnienie po kolejnych dziesięciu lekcjach.
   *
   * Bez tego zamknięcie komunikatu zdejmuje tylko blokadę powtórzeń w
   * notice(), więc przy przekroczonym progu przypomnienie wraca po
   * NAJBLIŻSZEJ lekcji i tak po każdej następnej. Prośba o kopię co
   * dziesięć lekcji jest przypomnieniem, ta sama prośba co lekcję jest
   * powodem, żeby przestać czytać komunikaty tego kursu.
   */
  function snoozeBackup() {
    var b = Store.state.backup || {};
    Store.state.backup = { at: b.at || 0, ts: b.ts || 0, snoozed: Store.state.stats.lessonsDone };
    save();
  }

  /**
   * Zapisuje stan do pliku i przesuwa próg przypomnienia.
   *
   * Znacznik idzie PRZED serializacją, nie po niej: plik ma nieść już
   * nową wartość `backup.at`. Odwrotna kolejność wypuszcza kopię ze
   * starym znacznikiem, więc uczeń, który ją kiedyś odzyska, dostaje
   * przypomnienie natychmiast — o kopii, którą właśnie wgrał.
   */
  function downloadBackup() {
    markBackup();
    var blob = new global.Blob([Store.exportState()], { type: "application/json" });
    var a = document.createElement("a");
    a.href = global.URL.createObjectURL(blob);
    a.download = "impara-italiano-" + global.I18n.lang + "-" + today() + ".json";
    a.click();
    global.setTimeout(function () { global.URL.revokeObjectURL(a.href); }, 1000);
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
    STORE_KEY: Store.KEY,
    registry: registry,
    get state() { return Store.state; },
    load: Store.load, save: save,
    norm: norm, fold: fold, stripAccents: stripAccents, levenshtein: levenshtein,
    similarity: similarity, checkOpen: checkOpen,
    today: today, touchDay: touchDay,
    cardKey: cardKey, addCard: addCard, cardTr: cardTr, isForbidden: isForbidden,
    schedule: schedule, gradeCard: gradeCard,
    dueCards: dueCards, dueCount: dueCount,
    lessonState: lessonState, isLessonDone: isLessonDone,
    recordLesson: recordLesson, recordAnswer: recordAnswer,
    unitProgress: unitProgress, levelProgress: levelProgress, nextLesson: nextLesson,
    registerLevel: registerLevel, addUnits: addUnits, getLesson: getLesson,
    loadLevelData: loadLevelData, setLanguage: setLanguage,
    exportState: Store.exportState, importState: Store.importState, resetState: Store.resetState,
    backupDue: backupDue, markBackup: markBackup, snoozeBackup: snoozeBackup,
    downloadBackup: downloadBackup,
    toast: toast, notice: notice, esc: esc, seededShuffle: seededShuffle
  };

  global.Core = Core;
  global.LINGUAI = global.LINGUAI || {};
  global.LINGUAI.registerLevel = registerLevel;
  global.LINGUAI.addUnits = addUnits;

})(window);
