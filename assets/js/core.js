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

      /* Silnik adaptacyjny. Kontenery są DOKŁADANE, nie migrowane:
         load() nakłada zapis na te wartości domyślne, więc starszy
         profil dostaje je puste sam z siebie. Numer schematu zostaje
         przy 2 — podniesienie jest zarezerwowane na zmianę ZNACZENIA
         istniejącego pola, tak jak przy v1 → v2, a tutaj nic nie
         zmienia znaczenia. Bump zamiast tego odrzuciłby każdy plik
         wyeksportowany przez ucznia do tej pory. */
      errors: {},         // klucz ćwiczenia -> karta błędu
      /* Był tu `gsrs` — harmonogram per zagadnienie gramatyczne. Zadeklarowany
         przy silniku adaptacyjnym i nigdy przez nikogo nie zapisany ani nie
         odczytany; jedyne dotknięcie było w teście, który wpisywał go ręcznie,
         żeby sprawdzić trwałość. Pusty kontener w SHAPE to kontrakt, którego
         nikt nie honoruje, a FSRS go nie potrzebuje: planuje karty, nie tematy.
         Usunięcie jest bezpieczne w obie strony, bo merge() pomija klucze
         spoza domyślnych, więc starszy zapis z tym polem wczytuje się dalej. */
      drills: {},         // id generatora -> licznik podejść
      session: {},        // skład i postęp dzisiejszej sesji
      writing: {},        // id zadania -> wypracowanie ucznia
      placement: null,    // wynik testu poziomującego, dopóki go nie ma
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

  /**
   * Wczytuje stan, przeprowadzając starszy zapis przez schodki migracji.
   *
   * Do niedawna warunkiem było `parsed.schema === SCHEMA`, równość ścisła,
   * a `migrateUp` wisiało wyłącznie pod `importState`. Zapis o innym numerze
   * schematu był więc po cichu pomijany: bez błędu, bez śladu, z pustym
   * profilem na ekranie i bez możliwości odkręcenia tego przez ucznia.
   * Nie wybuchało tylko dlatego, że nikt jeszcze nie podniósł schematu —
   * czyli wybuchłoby przy pierwszym podniesieniu, w najgorszym momencie.
   *
   * Kierunki nie są symetryczne i nie mają prawa być:
   * - starszy zapis (`schema < SCHEMA`) idzie przez `MIGRATIONS` — wiemy,
   *   jak go podnieść, bo sami napisaliśmy każdy stopień;
   * - zapis z przyszłości (`schema > SCHEMA`) jest odrzucany w całości.
   *   Wczytanie połowiczne byłoby gorsze niż odmowa: pola o zmienionym
   *   znaczeniu weszłyby do stanu wyglądając poprawnie. To samo robi
   *   `validateImport` przy imporcie z pliku.
   *
   * `MIGRATIONS` jest przypisywane niżej w tym pliku, ale `load()` woła
   * dopiero `app.js` po wykonaniu całego modułu, więc tablica jest gotowa.
   */
  function load() {
    try {
      var raw = global.localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (!parsed || typeof parsed.schema !== "number") return;
        if (parsed.schema > SCHEMA) return;
        if (parsed.schema === SCHEMA) { state = merge(defaultState(), parsed); return; }

        var podniesiony = migrateUp(parsed);
        /* Stopień może nie istnieć: wtedy numer się nie ruszy i zapis
           zostaje nietknięty na dysku, zamiast wejść w niespójnym kształcie. */
        if (podniesiony.schema !== SCHEMA) return;
        state = podniesiony;
        save();
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

  /**
   * Co ustępuje miejsca, gdy pamięć się kończy — i w jakiej kolejności.
   *
   * Wymienione jest wyłącznie to, co wraca samo przy dalszej nauce.
   * Postępów lekcji, passy, XP, statystyk i ustawień tu nie ma i nie ma
   * prawa być: cały stan siedzi pod jednym kluczem, więc przed tą listą
   * przy pełnej pamięci nie zapisywało się NIC i przepadały razem z resztą.
   *
   * Wypracowań też tu nie ma, choć są duże: to zdania napisane przez
   * ucznia, jedyna treść w tym pliku, której nikt nie odtworzy.
   *
   * Kolejność: najpierw karty najlepiej opanowane (długa seria poprawnych,
   * mało pomyłek, dawno dodane), bo one są najbliżej wyjścia z obiegu.
   */
  function pruneCandidates() {
    var out = [];
    Object.keys(state.errors).forEach(function (k) {
      var c = state.errors[k] || {};
      out.push({
        bag: "errors", key: k,
        score: (c.reps || 0) * 10 - (c.lapses || 0) * 5 - (c.ts || 0) / 1e12
      });
    });
    Object.keys(state.drills).forEach(function (k) {
      out.push({ bag: "drills", key: k, score: 1000 });   // same liczniki, odtwarzalne
    });
    return out.sort(function (a, b) { return b.score - a.score; });
  }

  var PRUNE_BATCH = 20;

  /** Wyrzuca porcję najmniej potrzebnych danych. false = nie ma już czego. */
  function pruneOnce() {
    var cands = pruneCandidates();
    if (!cands.length) return false;
    var n = Math.min(PRUNE_BATCH, cands.length);
    for (var i = 0; i < n; i++) delete state[cands[i].bag][cands[i].key];
    return true;
  }

  /** Czy to naprawdę brak miejsca, a nie inny powód odmowy zapisu. */
  function brakMiejsca(e) {
    if (!e) return false;
    return e.name === "QuotaExceededError" ||
      e.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
      e.code === 22 || e.code === 1014;
  }

  function persist() {
    var lost = false;
    for (;;) {
      try {
        global.localStorage.setItem(STORE_KEY, JSON.stringify(state));
        if (lost) notice("core.storagePruned");
        return true;
      } catch (e) {
        /* Potarcie kasuje dane bezpowrotnie, więc uruchamia je WYŁĄCZNIE
           brak miejsca. Zablokowany magazyn (tryb prywatny, polityka
           przeglądarki) rzuca czym innym: tam wyrzucanie kart niczego nie
           naprawia, a niszczy to, co uczeń zrobił w tej sesji. */
        if (!brakMiejsca(e)) { notice("core.saveBlocked"); return false; }
        if (!pruneOnce()) { notice("core.saveBlocked"); return false; }
        lost = true;
      }
    }
  }

  var saveTimer = null;
  function save() {
    if (saveTimer) return;
    saveTimer = global.setTimeout(function () {
      saveTimer = null;
      persist();
    }, 180);
  }

  /**
   * Klucze, których plik z zewnątrz nie ma prawa wnieść.
   *
   * JSON.parse robi z „__proto__" zwykłą własność obiektu, ale odczyt
   * base["__proto__"] na zwykłym obiekcie oddaje Object.prototype —
   * więc merge schodziłby po niej w dół i zapisywał prototyp wspólny
   * dla całej strony. „constructor" i „prototype" domknięte tą samą
   * regułą, żeby nie było drogi naokoło.
   *
   * Lista jest tablicą, nie obiektem: literał { "__proto__": true }
   * nie tworzy własności o tej nazwie, tylko ustawia prototyp, więc
   * strażnik zbudowany w ten sposób nie strzeże niczego.
   */
  var FORBIDDEN_KEYS = ["__proto__", "constructor", "prototype"];

  function isForbidden(k) { return FORBIDDEN_KEYS.indexOf(k) >= 0; }

  function merge(base, over) {
    Object.keys(over).forEach(function (k) {
      if (isForbidden(k)) return;
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
  /**
   * Znaki typograficzne na maszynowe. Wymiana jest ZNAK W ZNAK, więc nie
   * przesuwa pozycji w tekście — to jest warunek, na którym stoi
   * podświetlanie wyników wyszukiwania (search.js).
   *
   * Klawiatura telefonu i edytor tekstu dają „’", nie „'". Bez tej wymiany
   * uczeń, który wkleja albo pisze na iOS, nigdy nie trafia w „l'autore".
   */
  function detypo(s) {
    return String(s == null ? "" : s)
      .replace(/[‘’ʼ`´]/g, "'")
      .replace(/[“”„]/g, '"');
  }

  /**
   * Składanie do porównań: małe litery, ujednolicone apostrofy, zdjęte
   * akcenty. Białych znaków NIE zwęża, w odróżnieniu od norm(): dzięki
   * temu długość jest zachowana i po indeksach z tekstu złożonego można
   * ciąć oryginał.
   */
  function fold(s) {
    return stripAccents(detypo(s).toLowerCase());
  }

  function norm(s, opts) {
    opts = opts || {};
    var t = detypo(s)
      .toLowerCase()
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

  function gradeCard(key, q) {
    var c = state.srs[key];
    if (!c) return null;

    naFsrs(c);
    var wynik = global.Fsrs.powtorz(
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
  var EAGER_FILES = ["curriculum-index.js", "conversations.js", "grammar-reference.js", "phonetics.js", "readings.js", "writing.js"];

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

  /**
   * Schody migracji. Każdy stopień podnosi zapis o jedną wersję, więc plik
   * z dowolnej starszej dochodzi do bieżącej, przechodząc po kolei.
   *
   * Dziś stopień jest jeden i to jest właśnie powód, dla którego ta tablica
   * istnieje: polityka „nie podnosimy schematu bez zmiany znaczenia pola"
   * trzyma się tylko wtedy, gdy import umie przyjąć starszy plik. Inaczej
   * jest to odroczenie decyzji, a nie decyzja.
   */
  var MIGRATIONS = [
    { from: 1, run: migrateV1 }
  ];

  function migrateUp(parsed) {
    var out = parsed;
    for (var i = 0; i < MIGRATIONS.length; i++) {
      if (out.schema === MIGRATIONS[i].from) out = MIGRATIONS[i].run(out);
    }
    return out;
  }

  /* Komplet fiszek, błędów i postępów mieści się w setkach kilobajtów, a
     localStorage i tak kończy się przy około 5 MB. Próg jest zaporą przed
     plikiem, którego nie warto nawet parsować, nie limitem funkcjonalnym. */
  var MAX_IMPORT_CHARS = 8 * 1024 * 1024;

  /* Oczekiwany typ pól najwyższego poziomu. Pole nieobecne jest w porządku,
     dostanie wartość domyślną z merge. Pole obecne w złym typie nie jest:
     przejdzie import bez szmeru i wybuchnie w widoku, który po nim iteruje,
     czyli trzy ekrany dalej i bez związku z przyczyną. */
  var SHAPE = {
    schema: "number", createdAt: "number", xp: "number", minutes: "number",
    lessons: "object", srs: "object", saved: "object",
    settings: "object", streak: "object", stats: "object",
    errors: "object", drills: "object",
    session: "object", writing: "object"
  };

  function typeOf(v) {
    if (v === null) return "null";
    return Array.isArray(v) ? "array" : typeof v;
  }

  /**
   * Błąd importu niesie KLUCZ napisu, nie gotowy tekst.
   *
   * Powód: ten komunikat czyta uczeń, który próbuje odzyskać kopię
   * zapasową, a kurs mówi pięcioma językami. Zdanie wpisane tutaj po
   * polsku dotarłoby po polsku także do Hiszpana — i to dokładnie w
   * chwili, w której najbardziej potrzebuje zrozumieć, co poszło źle.
   */
  function importError(key, vars) {
    var e = new Error(key);
    e.key = key;
    e.vars = vars || null;
    return e;
  }

  function validateImport(parsed) {
    if (typeOf(parsed) !== "object") throw importError("set.errNotSave");
    if (typeof parsed.schema !== "number") throw importError("set.errNoVersion");
    if (parsed.schema > SCHEMA) throw importError("set.errFromFuture");
    if (parsed.schema < 1) throw importError("set.errNoVersion");
    if (parsed.placement !== undefined && ["object", "null"].indexOf(typeOf(parsed.placement)) < 0) {
      throw importError("set.errBadField", { field: "placement" });
    }
    Object.keys(SHAPE).forEach(function (k) {
      if (parsed[k] === undefined) return;
      if (typeOf(parsed[k]) !== SHAPE[k]) throw importError("set.errBadField", { field: k });
    });
  }

  /**
   * Sprawdzenie idzie w całości PRZED podmianą stanu: plik odrzucony
   * w połowie zostawiłby ucznia z połową cudzych postępów i bez swoich.
   */
  function importState(json) {
    if (typeof json !== "string" || json.length > MAX_IMPORT_CHARS) {
      throw importError("set.errTooBig");
    }
    var parsed = JSON.parse(json);
    validateImport(parsed);
    state = merge(defaultState(), migrateUp(parsed));
    save();
  }

  function resetState() {
    // Ustawienia zostają: komunikat obiecuje skasowanie postępów, fiszek i statystyk,
    // a nie języka wyjaśnień. Bez tego uczeń, który wybrał en/es/fr/de, po wyczyszczeniu
    // dostaje interfejs po polsku, czyli w języku, którego może nie znać.
    var keep = state.settings;
    state = defaultState();
    state.settings = keep;
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

  /* Klucze już pokazane: ten sam komunikat nie ma się mnożyć przy każdym zapisie. */
  var noticed = {};

  /**
   * Komunikat, który zostaje na ekranie aż do zamknięcia przez ucznia.
   *
   * Toast znika po 3,2 sekundy i to jest właściwe dla „zapisano" albo
   * „wybierz odpowiedź". Utrata danych nie jest wiadomością do
   * przeoczenia między jednym ćwiczeniem a drugim, więc idzie tędy.
   */
  function notice(key) {
    if (noticed[key]) return;
    var stack = document.getElementById("toastStack");
    if (!stack) return;
    noticed[key] = true;

    var el = document.createElement("div");
    el.className = "toast toast--stuck";
    el.setAttribute("role", "alert");
    el.textContent = global.I18n.t(key);

    var x = document.createElement("button");
    x.type = "button";
    x.className = "toast__x";
    x.textContent = "×";
    x.setAttribute("aria-label", global.I18n.t("core.noticeDismiss"));
    x.addEventListener("click", function () { el.remove(); noticed[key] = false; });

    el.appendChild(x);
    stack.appendChild(el);
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
    norm: norm, fold: fold, stripAccents: stripAccents, levenshtein: levenshtein,
    similarity: similarity, checkOpen: checkOpen,
    today: today, touchDay: touchDay,
    cardKey: cardKey, addCard: addCard, cardTr: cardTr,
    schedule: schedule, gradeCard: gradeCard,
    dueCards: dueCards, dueCount: dueCount,
    lessonState: lessonState, isLessonDone: isLessonDone,
    recordLesson: recordLesson, recordAnswer: recordAnswer,
    unitProgress: unitProgress, levelProgress: levelProgress, nextLesson: nextLesson,
    registerLevel: registerLevel, addUnits: addUnits, getLesson: getLesson,
    loadLevelData: loadLevelData, setLanguage: setLanguage,
    exportState: exportState, importState: importState, resetState: resetState,
    toast: toast, notice: notice, esc: esc, seededShuffle: seededShuffle
  };

  global.Core = Core;
  global.LINGUAI = global.LINGUAI || {};
  global.LINGUAI.registerLevel = registerLevel;
  global.LINGUAI.addUnits = addUnits;

})(window);
