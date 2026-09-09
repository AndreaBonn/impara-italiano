/* ============================================================
   errors.js — quaderno degli errori: tożsamość kart.

   Każda zła odpowiedź ma wrócić. Żeby wróciła TA SAMA, karta musi
   umieć wskazać swoje ćwiczenie po zmianie języka wyjaśnień, po
   dopisaniu lekcji i po przestawieniu ćwiczeń w środku lekcji.

   Klucz: <id lekcji>#<firma treści>#<numer bliźniaka>

   Trzy części, każda z powodu:

   - id lekcji, bo w warstwie neutralnej ćwiczenie bywa ubogie.
     Całe `mcq` to { t: "mcq", a: 1 } — pytanie i opcje siedzą w
     nakładce, po jednej na język. Sam skrót treści zderzyłby ze
     sobą setki ćwiczeń z całego kursu.
   - firma treści, bo numer porządkowy przesuwa się przy pierwszej
     wstawce w środku lekcji i karta zaczęłaby po cichu wskazywać
     sąsiada. Firma liczona jest WYŁĄCZNIE z pól neutralnych: gdyby
     wchodziło w nią cokolwiek z nakładki, przełączenie języka
     osierociłoby cały quaderno.
   - numer bliźniaka, bo w a1-u01-l1 stoją obok siebie dwa ćwiczenia
     { t: "mcq", a: 1 }. Bez tego byłyby jedną kartą.

   Skutek zamierzony: zmiana treści ćwiczenia unieważnia jego kartę.
   Lepiej, żeby przestała się odnajdywać, niż żeby wskazała inne
   ćwiczenie i pokazała uczniowi zdanie, którego nigdy nie widział.

   Skrypt klasyczny, bez zależności. Wymaga core.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Errors = {};

  /* ---------------- Skrót ---------------- */

  /**
   * FNV-1a 32-bit. Dwa przebiegi z różnym ziarnem sklejone w 16 znaków
   * dają 64 bity bez BigInt, więc bez osobnej ścieżki dla starszych
   * przeglądarek — inaczej niż w audio.js, gdzie zgodność z Pythonem
   * wymusza dokładnie jeden wariant.
   */
  function fnv32(s, seed) {
    var h = seed >>> 0;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function pad8(n) {
    var s = n.toString(16);
    while (s.length < 8) s = "0" + s;
    return s;
  }

  var SEED_A = 2166136261;   // offset basis FNV-1a
  var SEED_B = 40389;        // dowolne inne ziarno: chodzi o drugi, niezależny przebieg

  function hash(s) {
    return pad8(fnv32(s, SEED_A)) + pad8(fnv32(s, SEED_B));
  }

  /* ---------------- Kanonizacja treści ---------------- */

  /**
   * Pola neutralne językowo, wspólne dla wszystkich typów.
   * Lista jest zamknięta celowo: pole dopisane do ćwiczenia nie wejdzie
   * do firmy, dopóki ktoś świadomie go tu nie wpisze. Odwrotna reguła
   * (wszystko oprócz…) wciągnęłaby przy pierwszej okazji tekst z nakładki.
   */
  var PLAIN_FIELDS = [
    "t", "a", "dir", "verb", "tense", "persons",
    "tokens", "text", "gaps", "it", "alt", "say"
  ];

  /* Pola tablicowe, z których bierzemy tylko podpola neutralne. */
  var NESTED_FIELDS = {
    pairs: ["it"],
    items: ["it", "a"],
    lines: ["sp", "it", "choices", "a"]
  };

  /**
   * `opts` to jedyne pole, które raz jest po włosku, a raz w języku ucznia.
   * W `gender` to zamknięty zbiór form włoskich i musi zgadzać się z
   * `items[].a`, więc siedzi w core i liczy się do firmy. Wszędzie indziej
   * to przetłumaczone odpowiedzi — wejście z nimi do firmy oznaczałoby
   * inną kartę dla tego samego ćwiczenia w każdym języku.
   */
  function optsCount(ex) { return ex.t === "gender"; }

  function part(value) {
    if (value === undefined || value === null) return "";
    if (Array.isArray(value)) return "[" + value.map(part).join(",") + "]";
    if (typeof value === "object") {
      return "{" + Object.keys(value).sort().map(function (k) {
        return k + ":" + part(value[k]);
      }).join(",") + "}";
    }
    return String(value);
  }

  /** Stabilny zapis treści ćwiczenia: te same pola, zawsze w tej samej kolejności. */
  function canon(ex) {
    var out = [];
    PLAIN_FIELDS.forEach(function (f) {
      if (ex[f] !== undefined) out.push(f + "=" + part(ex[f]));
    });
    if (optsCount(ex) && ex.opts !== undefined) out.push("opts=" + part(ex.opts));
    Object.keys(NESTED_FIELDS).forEach(function (f) {
      if (!Array.isArray(ex[f])) return;
      var sub = NESTED_FIELDS[f];
      out.push(f + "=" + ex[f].map(function (row) {
        return sub.map(function (k) { return k + ":" + part(row && row[k]); }).join("|");
      }).join(";"));
    });
    return out.join("&");
  }

  /** Firma treści: ta sama we wszystkich językach wyjaśnień. */
  function sigOf(ex) { return hash(canon(ex)); }

  /* ---------------- Klucz ---------------- */

  function keyFor(lessonId, sig, twin) {
    return lessonId + "#" + sig + "#" + twin;
  }

  /**
   * Klucze wszystkich ćwiczeń lekcji, w kolejności wystąpienia.
   * Numer bliźniaka liczony jest na miejscu, więc nie ma stanu do
   * zsynchronizowania między zapisem a odczytem.
   */
  function keysIn(lesson) {
    var seen = {};
    return (lesson.exercises || []).map(function (ex) {
      var sig = sigOf(ex);
      var n = seen[sig] === undefined ? 0 : seen[sig] + 1;
      seen[sig] = n;
      return keyFor(lesson.id, sig, n);
    });
  }

  /** Klucz jednego ćwiczenia; potrzebuje lekcji, żeby policzyć bliźniaki. */
  function keyOf(lesson, index) {
    return keysIn(lesson)[index];
  }

  /* Zadania z generatora nie mają lekcji ani treści do zapamiętania:
     wystarczy para (generator, ziarno), bo generator jest funkcją czystą.
     Prefiks oddziela je od kluczy ćwiczeń autorskich w jednym zbiorze. */
  var GEN_PREFIX = "drill:";

  function generatedKey(topicId, seed) { return GEN_PREFIX + topicId + "#" + seed; }

  /**
   * Z klucza z powrotem na ćwiczenie. Zwraca null, gdy lekcji nie ma,
   * gdy nie jest wczytana albo gdy treść ćwiczenia się zmieniła —
   * i to ostatnie jest funkcją, nie usterką.
   *
   * Karta z generatora odtwarza się przeciwnie: nic nie mogło się
   * zmienić, więc wystarczy zawołać generator z tym samym ziarnem.
   * Dzięki temu widok powtórki obsługuje oba rodzaje kart tak samo.
   */
  function locate(key) {
    var raw = String(key);
    if (raw.indexOf(GEN_PREFIX) === 0) {
      var cut = raw.indexOf("#");
      var topicId = raw.slice(GEN_PREFIX.length, cut);
      var seed = raw.slice(cut + 1);
      var item = global.Drills && global.Drills.make(topicId, seed);
      if (!item) return null;
      return { generated: true, ex: item.ex, index: 0, topicId: topicId, seed: seed, lesson: null };
    }

    var parts = raw.split("#");
    if (parts.length !== 3) return null;
    var found = global.Core && global.Core.getLesson(parts[0]);
    if (!found) return null;
    var keys = keysIn(found.lesson);
    var i = keys.indexOf(key);
    if (i < 0) return null;
    return { lesson: found.lesson, unit: found.unit, level: found.level, ex: found.lesson.exercises[i], index: i };
  }

  /* ---------------- Talia ---------------- */

  /**
   * Ile poprawnych odpowiedzi z rzędu wyprowadza kartę z quaderno.
   *
   * Dwie, czyli odstępy 1 dzień i 3 dni z SM-2, a potem koniec. To jest
   * decyzja produktowa (C1 w § 7.6 planu), nie fakt wynikający z kodu:
   * przy niższym progu quaderno pustoszeje szybciej, niż uczeń się uczy,
   * przy wyższym zamienia się w drugą talię fiszek.
   */
  var GRADUATE_REPS = 2;

  /** Ocena z odpowiedzi boolowskiej na skalę SM-2. */
  function quality(ok) { return ok ? 5 : 2; }

  function bag() { return global.Core.state.errors; }

  /** Który tag opisuje to ćwiczenie: własny, a jak nie ma — pierwszy z lekcji. */
  function tagFor(lesson, ex) {
    if (ex && ex.tag) return ex.tag;
    return (lesson.tags || [])[0] || null;
  }

  /**
   * Odnotowuje odpowiedź na ćwiczeniu lekcji.
   *
   * Dobra odpowiedź na ćwiczeniu, którego nie ma w quaderno, nie zakłada
   * karty: zbiór ma trzymać to, czego uczeń NIE umie. Dobra odpowiedź na
   * karcie istniejącej posuwa ją do przodu, bo poprawne wykonanie w toku
   * lekcji liczy się tak samo jak w powtórce.
   */
  function record(lesson, index, ok) {
    var ex = (lesson.exercises || [])[index];
    if (!ex) return null;
    var key = keyOf(lesson, index);
    var deck = bag();
    var card = deck[key];

    if (!card && ok) return null;
    if (!card) {
      card = deck[key] = {
        kind: "authored",
        tag: tagFor(lesson, ex),
        srcId: lesson.id,
        ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0, ts: Date.now()
      };
    }
    global.Core.schedule(card, quality(ok));
    var out = withKey(key, card);
    if (ok && card.reps >= GRADUATE_REPS) delete deck[key];
    global.Core.save();
    return out;
  }

  /**
   * Odnotowuje odpowiedź na zadaniu z generatora.
   *
   * Ta sama logika progu i harmonogramu, co przy ćwiczeniach autorskich,
   * ale inna tożsamość: tag przychodzi od generatora, nie od lekcji, i
   * karta niesie `kind: "generated"`. Rozróżnienie jest zadeklarowane,
   * a nie domyślne — dwie specie kart z różną granulacją mieszkają w
   * jednym zbiorze i widok musi wiedzieć, którą trzyma.
   */
  function recordGenerated(item, ok) {
    if (!item) return null;
    var key = generatedKey(item.topicId, item.seed);
    var deck = bag();
    var card = deck[key];

    if (!card && ok) return null;
    if (!card) {
      card = deck[key] = {
        kind: "generated",
        tag: item.tag,
        srcId: item.topicId,
        ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0, ts: Date.now()
      };
    }
    global.Core.schedule(card, quality(ok));
    var out = withKey(key, card);
    if (ok && card.reps >= GRADUATE_REPS) delete deck[key];
    global.Core.save();
    return out;
  }

  /**
   * Usuwa kartę, której ćwiczenia już nie ma.
   *
   * Powtórka pokazuje PRAWDZIWE ćwiczenie z lekcji, a nie osobną fiszkę
   * z własną oceną — dzięki temu aktualizacja idzie tą samą drogą, co
   * odpowiedź w toku lekcji, i nie ma drugiego miejsca do utrzymania.
   * Kiedy jednak treść ćwiczenia zmieniła się w kursie, locate() nie
   * znajduje niczego i karta nie ma czego pokazać: wtedy odchodzi tędy.
   */
  function drop(key) {
    var deck = bag();
    if (!deck[key]) return false;
    delete deck[key];
    global.Core.save();
    return true;
  }

  function withKey(key, card) {
    var out = { key: key };
    Object.keys(card).forEach(function (k) { out[k] = card[k]; });
    return out;
  }

  /** Karty, których termin już minął, najpilniejsze na czele. */
  function due(limit) {
    var now = Date.now(), deck = bag(), out = [];
    Object.keys(deck).forEach(function (k) {
      if (deck[k].due <= now) out.push(withKey(k, deck[k]));
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return due().length; }

  /** Wszystkie karty pogrupowane po zagadnieniu — do widoku „na czym stoję". */
  function byTag() {
    var deck = bag(), out = {};
    Object.keys(deck).forEach(function (k) {
      var t = deck[k].tag || "?";
      (out[t] || (out[t] = [])).push(withKey(k, deck[k]));
    });
    return out;
  }

  /* ---------------- Przechwytywanie odpowiedzi ---------------- */

  /**
   * Owija Ex.build, żeby każda odpowiedź trafiła do quaderno.
   *
   * Owinięte jest samo `wire`, nie budowanie i nie żaden z trzynastu
   * builderów: każdy z nich dalej woła swoje onDone dokładnie raz, a my
   * dokładamy się obok. Gdyby zamiast tego każdy builder miał wołać
   * Errors.record u siebie, byłoby trzynaście miejsc do pominięcia przy
   * czternastym typie — i pominięcie nie dałoby żadnego objawu.
   *
   * `seed`, które views.js podaje jako trzeci argument, to id lekcji
   * (views.js:313). Stąd wiadomo, do której lekcji należy ćwiczenie,
   * bez przekazywania niczego nowego przez cały łańcuch.
   */
  function install(Ex) {
    if (!Ex || Ex.recordsErrors) return false;
    var original = Ex.build;

    Ex.build = function (ex, idx, seed) {
      var built = original(ex, idx, seed);
      var wire = built.wire;
      built.wire = function (root, onDone) {
        return wire(root, function (ok) {
          noteAnswer(ex, idx, seed, ok);
          if (onDone) onDone(ok);
        });
      };
      return built;
    };

    Ex.recordsErrors = true;
    return true;
  }

  /**
   * Zapis idzie tylko wtedy, gdy ćwiczenie NAPRAWDĘ jest tym, na które
   * wskazuje seed i numer. Inaczej karta powstałaby pod cudzym kluczem —
   * na przykład przy budowaniu ćwiczenia poza lekcją, gdzie seed jest
   * dowolnym napisem.
   */
  function noteAnswer(ex, idx, seed, ok) {
    var Core = global.Core;
    if (!Core || typeof seed !== "string") return;
    var found = Core.getLesson(seed);
    if (!found) return;
    if ((found.lesson.exercises || [])[idx] !== ex) return;
    record(found.lesson, idx, ok);
  }

  Errors.install = install;
  Errors.sigOf = sigOf;
  Errors.keysIn = keysIn;
  Errors.keyOf = keyOf;
  Errors.locate = locate;
  Errors.record = record;
  Errors.recordGenerated = recordGenerated;
  Errors.generatedKey = generatedKey;
  Errors.drop = drop;
  Errors.due = due;
  Errors.dueCount = dueCount;
  Errors.byTag = byTag;
  Errors.GRADUATE_REPS = GRADUATE_REPS;

  global.Errors = Errors;

  /* exercises.js jest w index.html wcześniej, więc Ex już istnieje.
     W testach jednostkowych, gdzie wczytujemy sam silnik stanu, nie ma go
     i install() wychodzi bez skutku — quaderno działa też bez ćwiczeń. */
  install(global.Ex);

})(window);
