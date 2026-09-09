/* ============================================================
   store.js — stan trwały: zapis, odczyt, migracje, import z pliku.

   Wyjęte z core.js, które przez to było trzema modułami w jednym pliku:
   pamięcią przeglądarki, harmonogramem powtórek i postępami nauki. Tutaj
   jest tylko pierwsze z nich, czyli wszystko, co dotyka localStorage.

   Dwie rzeczy, które trzymają ten plik razem i których nie wolno rozdzielić:
   - `state` jest JEDNYM obiektem pod jednym kluczem, więc nieudany zapis
     gubi wszystko naraz — stąd potarcie w persist(), a nie „zapiszemy
     resztę następnym razem";
   - `cardKey` mieszka tutaj, a nie przy SRS, bo to tożsamość rekordu w
     stanie: używa jej i migracja v1 → v2, i talia. Dwie definicje
     rozjechałyby się po cichu, a objawem byłaby osierocona talia.

   Core wystawia to dalej pod dotychczasowymi nazwami (Core.state,
   Core.save, Core.importState, …), więc nikt z zewnątrz nie zmienia linijki.
   ============================================================ */
(function (global) {
  "use strict";

  var norm = global.Txt.norm;
  var notice = global.Notice.notice;

  var STORE_KEY = "linguai.italiano.v2";
  var SCHEMA = 2;

  /* Klucz sprzed rozdzielenia języków: czytany raz, przy migracji. */
  var STORE_KEY_V1 = "linguai.italiano.pl.v1";

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
      /* Dziennik powtórek: {k klucz fiszki, t czas, q ocena 0/3/4/5}.
         Wejście dla PRZYSZŁEGO strojenia parametrów FSRS na własnej
         historii — optymalizator Anki robi to lokalnie, na urządzeniu, od
         ok. tysiąca powtórek, więc konsument jest realny, nie wymyślony.
         Powód, dla którego stoi tu już teraz, jest asymetryczny: kosztuje
         grosze dzisiaj, a wstecz nie da się go odtworzyć. Kto uczy się rok
         bez dziennika, po roku ma zero historii i nikt mu jej nie odda. */
      reviews: [],
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
      /* Przebiegi symulacji egzaminu. Kontener DOKŁADANY: starszy profil
         dostaje go pustym przez merge(), więc numer schematu się nie rusza.
         Trzymamy punkty dwóch sprawności, które symulator umie policzyć,
         listę sekcji, w których skończył się czas, i werdykt — nie
         odpowiedzi: te są ćwiczeniem, nie historią. */
      cils: { runs: [] },
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
        strictAccents: false,
        /* Docelowa szansa przypomnienia w chwili powtórki (FSRS).
           Wyżej = częstsze powtórki i mniej zapominania, niżej = rzadsze
           i więcej. 0.9 to wartość domyślna implementacji referencyjnej. */
        retention: 0.9,
        /* Zgoda na wysyłanie głosu do rozpoznawania mowy. Domyślnie NIE ma
           jej: milcząca zgoda jest dokładnie tym, czego consent.js ma nie
           dopuścić. Kontener dokładany, schemat się nie rusza. */
        sttConsent: false
      },
      stats: { correct: 0, wrong: 0, lessonsDone: 0, days: {} },
      /* Stan przypomnienia o kopii zapasowej. `at` to liczba ukończonych
         lekcji w chwili ostatniego zapisania kopii, więc próg liczy się
         od niej, a nie od początku nauki. Kontener DOKŁADANY: starszy
         profil dostaje go zerowy przez merge i pierwsze przypomnienie
         zobaczy po dziesięciu nowych lekcjach, a nie od razu. */
      backup: { at: 0, ts: 0, snoozed: 0 }
    };
  };

  var state = defaultState();

  /** Klucz fiszki: sam włoski. Tłumaczenie zależy od języka i nie może go współtworzyć. */
  function cardKey(it) { return norm(it); }


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
    /* Dziennik powtórek ustępuje PO błędach i drillach, bo tamte wracają
       same przy dalszej nauce, a on nie. Ustępuje jednak przed postępami
       lekcji i wypracowaniami: to wejście do strojenia, które jeszcze nie
       istnieje, a tamto jest nauką, którą uczeń już odbył. */
    if (Array.isArray(state.reviews) && state.reviews.length) {
      out.push({ bag: "reviews", key: "", score: 500 });
    }
    return out.sort(function (a, b) { return b.score - a.score; });
  }

  var PRUNE_BATCH = 20;

  /** Wyrzuca porcję najmniej potrzebnych danych. false = nie ma już czego. */
  function pruneOnce() {
    var cands = pruneCandidates();
    if (!cands.length) return false;
    var n = Math.min(PRUNE_BATCH, cands.length);
    for (var i = 0; i < n; i++) {
      /* Dziennik powtórek jest tablicą, nie workiem pod kluczem: ustępuje
         połową najstarszych wpisów zamiast pojedynczą pozycją. */
      if (cands[i].bag === "reviews") {
        state.reviews.splice(0, Math.ceil(state.reviews.length / 2));
        continue;
      }
      delete state[cands[i].bag][cands[i].key];
    }
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
    errors: "object", drills: "object", reviews: "array",
    session: "object", writing: "object", cils: "object",
    backup: "object"
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

  global.Store = {
    KEY: STORE_KEY,
    SCHEMA: SCHEMA,
    get state() { return state; },
    load: load, save: save,
    isForbidden: isForbidden, cardKey: cardKey,
    exportState: exportState, importState: importState, resetState: resetState
  };

})(window);
