/* ============================================================
   srs.js — talia powtórek: co uczeń ma dziś powtórzyć i kiedy wróci.

   Wyjęte z core.js, w którym leżało obok postępów lekcji, nie mając z
   nimi ani jednego wspólnego wywołania: dwie niezależne rzeczy w jednym
   pliku. Tutaj jest tylko talia.

   Dwa algorytmy naraz i to jest świadome, nie zaległość:
   - `schedule` to SM-2 i od F1 służy WYŁĄCZNIE quaderno błędów
     (errors.js), które kasuje kartę, zanim SM-2 zdąży dojść do gałęzi
     `interval * ef`;
   - talia słownictwa chodzi po FSRS (`gradeCard`), z parametrami z
     fsrs.js i retencją z ustawień ucznia.

   Karty SM-2 przechodzą na FSRS pojedynczo, przy pierwszej powtórce po
   zmianie (`naFsrs`): migracja hurtem przesunęłaby terminy kart, których
   uczeń dziś nawet nie zobaczy.
   ============================================================ */
(function (global) {
  "use strict";

  var Store = global.Store;
  var save = Store.save;
  var cardKey = Store.cardKey;
  var isForbidden = Store.isForbidden;
  var norm = global.Txt.norm;
  var registry = global.Registry.registry;

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

  global.Srs = {
    addCard: addCard, cardTr: cardTr,
    schedule: schedule, gradeCard: gradeCard,
    dueCards: dueCards, dueCount: dueCount
  };

})(window);
