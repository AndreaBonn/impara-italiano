/* ============================================================
   i18n-merge.js — doklejanie tekstów ucznia do treści kursu.

   Wyjęte z i18n.js, który sam o sobie mówił „dwie rzeczy": napisy
   interfejsu (`I18n.t`) i scalanie danych kursu. To drugie jest tutaj.
   Wspólnego stanu między nimi nie było — każda połowa trzymała własny
   słownik i własne klucze — więc podział nic nie kosztował poza jednym
   wpisem w kolejności ładowania.

   Dane w `data/core/` są neutralne językowo (struktura, włoski, klucze
   odpowiedzi), a teksty ucznia leżą w `data/i18n/<lang>/` i doklejają
   się TU, po id węzła i po indeksie w tablicach.

   Scalanie jest idempotentne: pola neutralne nigdy nie są nadpisywane,
   więc drugi język można nałożyć na te same obiekty bez przeładowania
   strony. To nie jest wygoda, tylko warunek działania przełącznika
   języka, który nie przeładowuje kursu.

   Brak zależności. Skrypt klasyczny (działa z file://).
   ============================================================ */
(function (global) {
  "use strict";

  var LINGUAI = global.LINGUAI = global.LINGUAI || {};

  /* lang -> klucz („lesson:a1-u01-l1") -> łatka */
  var store = {};

  /** Rejestruje łatki jednego pliku. Wywoływane przez data/i18n/<lang>/*.js */
  function addStrings(lang, map) {
    var bag = store[lang] || (store[lang] = {});
    Object.keys(map).forEach(function (k) { bag[k] = map[k]; });
  }

  function get(lang, key) {
    var bag = store[lang];
    return (bag && bag[key]) || null;
  }

  function hasLang(lang) { return !!store[lang]; }

  /* ---------------- Prymitywy scalania ---------------- */

  /** Kopiuje wyłącznie klucze obecne w łatce: nie tworzy pól, których nie było. */
  function copy(target, patch, keys) {
    for (var i = 0; i < keys.length; i++) {
      if (patch[keys[i]] !== undefined) target[keys[i]] = patch[keys[i]];
    }
  }

  /** Dokleja wartość tekstową do elementu tablicy, po indeksie. */
  function byIndex(list, values, field) {
    if (!list || !values) return;
    for (var i = 0; i < list.length; i++) {
      if (values[i] !== undefined) list[i][field] = values[i];
    }
  }

  /** Kopiuje wskazane pola do każdego elementu tablicy, po indeksie. */
  function objByIndex(list, patches, keys) {
    if (!list || !patches) return;
    for (var i = 0; i < list.length; i++) {
      if (patches[i]) copy(list[i], patches[i], keys);
    }
  }

  /* ---------------- Węzły kursu ---------------- */

  var EX_KEYS = ["q", "why", "hint", "tr", "setting", "opts"];

  function applyExercise(ex, p) {
    if (!ex || !p) return;
    copy(ex, p, EX_KEYS);
    byIndex(ex.pairs, p.pairs, "tr");
    byIndex(ex.items, p.items, "gloss");
    objByIndex(ex.lines, p.lines, ["tr", "answerTr"]);
  }

  function applyGrammar(g, p) {
    if (!g || !p) return;
    copy(g, p, ["title", "note", "table"]);
    objByIndex(g.examples, p.examples, ["tr", "note"]);
  }

  function applyLesson(L, lang) {
    var p = L && get(lang, "lesson:" + L.id);
    if (!p) return;
    copy(L, p, ["title", "theme", "objectives", "theory", "culture"]);
    applyGrammar(L.grammar, p.grammar);
    byIndex(L.vocab, p.vocab, "tr");
    if (L.dialogue) byIndex(L.dialogue.lines, p.dialogue, "tr");
    if (L.exercises && p.exercises) {
      for (var i = 0; i < L.exercises.length; i++) applyExercise(L.exercises[i], p.exercises[i]);
    }
  }

  function applyUnit(u, lang) {
    var p = get(lang, "unit:" + u.id);
    if (p) copy(u, p, ["title", "grammarNote"]);
    (u.lessons || []).forEach(function (l) { applyLesson(l, lang); });
    if (u.test) applyLesson(u.test, lang);
  }

  function applyLevel(lv, lang) {
    var p = get(lang, "level:" + lv.code);
    if (p) copy(lv, p, ["name", "desc"]);
    (lv.units || []).forEach(function (u) { applyUnit(u, lang); });
  }

  function applyConversation(c, lang) {
    var p = get(lang, "conv:" + c.id);
    if (!p) return;
    copy(c, p, ["title", "setting", "closing"]);
    objByIndex(c.turns, p.turns, ["tr", "task"]);
    /* Tura z rozwidleniem ma tłumaczenie NA KAŻDEJ gałęzi, bo każda jest
       osobną repliką ucznia. Kierunek (`go`) i klucz odpowiedzi zostają
       w warstwie neutralnej: gdyby wjechały do nakładki, zmiana języka
       mogłaby przestawić przebieg dialogu. */
    (c.turns || []).forEach(function (tura, n) {
      var pt = p.turns && p.turns[n];
      if (tura.opts && pt && pt.opts) objByIndex(tura.opts, pt.opts, ["tr"]);
    });
  }

  function applyRef(lang) {
    var secs = global.GRAMMAR_REF || [];
    var heads = get(lang, "refsec:titles");
    secs.forEach(function (sec, i) {
      if (heads && heads[i] !== undefined) sec.title = heads[i];
      (sec.items || []).forEach(function (it) {
        var p = get(lang, "ref:" + it.id);
        if (p) copy(it, p, ["title", "sub", "body"]);
      });
    });
  }

  /**
   * Pary minimalne. W warstwie neutralnej są same wyrazy włoskie; stąd
   * przychodzą glosy i uwaga kontrastywna, pisana pod konkretny język.
   * Polak nie słyszy długości spółgłoski, Francuz nie słyszy ruchomego
   * akcentu — to nie jest ta sama uwaga w dwóch tłumaczeniach.
   */
  function applyPhonetics(lang) {
    (global.PHONETICS || []).forEach(function (zbior) {
      var p = get(lang, "ph:" + zbior.id);
      if (!p) return;
      copy(zbior, p, ["title", "note", "contrast"]);
      objByIndex(zbior.pairs, p.pairs, ["glossA", "glossB"]);
    });
  }

  /**
   * Teksty do czytania. Zdania i pytania są po włosku i zostają w
   * warstwie neutralnej; stąd przychodzi tytuł i glosy trudnych słów.
   */
  function applyReadings(lang) {
    (global.READINGS || []).forEach(function (r) {
      var p = get(lang, "read:" + r.id);
      if (!p) return;
      copy(r, p, ["title"]);
      if (p.gloss) r.gloss = p.gloss;
      /* lex: znaczenia słów, których panel trudnych słów NIE pokazuje.
         Karmią wyłącznie wyszukiwanie po dotknięciu (lemma.js), więc
         panel zostaje listą wybraną przez autora, a nie spisem wszystkiego,
         czego kurs nie uczy. */
      if (p.lex) r.lex = p.lex;
    });
  }

  /**
   * Zadania pisemne. Polecenie i lista kontrolna są w nakładce, bo je
   * czyta uczeń; przyjmowane wersje włoskie zostają w warstwie neutralnej.
   */
  function applyWriting(lang) {
    (global.WRITING || []).forEach(function (w) {
      var p = get(lang, "write:" + w.id);
      if (!p) return;
      copy(w, p, ["title", "brief", "checklist"]);
      byIndex(w.items, (p.items || []).map(function (x) { return x.q; }), "q");
    });
  }

  /**
   * Fałszywi przyjaciele: JEDYNA kategoria, w której nakładka bywa krótsza
   * od listy i ma prawo taka być.
   *
   * Wpis dostaje wyjaśnienie tylko wtedy, gdy jego `for` zawiera ten język.
   * Pozostałym CZYŚCIMY pola, zamiast zostawiać je z poprzedniego języka:
   * po przełączeniu z polskiego na hiszpański „la targa" nie ma pułapki i
   * nie może dalej nosić polskiego wyjaśnienia. Nakładka jest idempotentna,
   * więc bez tego czyszczenia stary tekst zostawał na ekranie.
   */
  function applyInterference(lang) {
    (global.INTERFERENCE || []).forEach(function (v) {
      var p = get(lang, "int:" + v.id);
      if (p) { v.looks = p.looks; v.mean = p.mean; v.why = p.why; }
      else { v.looks = ""; v.mean = ""; v.why = ""; }
    });
  }

  /**
   * Nakłada teksty wybranego języka na wszystko, co jest już wczytane.
   * Bezpieczne do wielokrotnego wywołania i do zmiany języka w locie.
   */
  function applyStrings(lang) {
    var reg = global.Core && global.Core.registry;
    if (reg) reg.levels.forEach(function (lv) { applyLevel(lv, lang); });
    (global.CONVERSATIONS || []).forEach(function (c) { applyConversation(c, lang); });
    applyRef(lang);
    applyPhonetics(lang);
    applyReadings(lang);
    applyWriting(lang);
    applyInterference(lang);
  }

  LINGUAI.addStrings = addStrings;
  LINGUAI.applyStrings = applyStrings;
  LINGUAI.hasStrings = hasLang;

})(window);
