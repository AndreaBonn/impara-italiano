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

  /**
   * Z klucza z powrotem na ćwiczenie. Zwraca null, gdy lekcji nie ma,
   * gdy nie jest wczytana albo gdy treść ćwiczenia się zmieniła —
   * i to ostatnie jest funkcją, nie usterką.
   */
  function locate(key) {
    var parts = String(key).split("#");
    if (parts.length !== 3) return null;
    var found = global.Core && global.Core.getLesson(parts[0]);
    if (!found) return null;
    var keys = keysIn(found.lesson);
    var i = keys.indexOf(key);
    if (i < 0) return null;
    return { lesson: found.lesson, unit: found.unit, level: found.level, ex: found.lesson.exercises[i], index: i };
  }

  Errors.sigOf = sigOf;
  Errors.keysIn = keysIn;
  Errors.keyOf = keyOf;
  Errors.locate = locate;

  global.Errors = Errors;

})(window);
