/* ============================================================
   errors.js — quaderno degli errori: talia i przechwytywanie.

   Tożsamość karty (klucz, firma treści, odnajdywanie ćwiczenia)
   siedzi w errors-key.js i musi być wczytana wcześniej.

   Skrypt klasyczny. Wymaga core.js i errors-key.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Errors = global.Errors = global.Errors || {};

  /* Funkcje tożsamości, wystawione przez errors-key.js. */
  var keyOf = Errors.keyOf;
  var generatedKey = Errors.generatedKey;


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
  Errors.record = record;
  Errors.recordGenerated = recordGenerated;
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
