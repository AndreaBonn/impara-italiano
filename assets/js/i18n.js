/* ============================================================
   i18n.js — dwie rzeczy, obie o języku wyjaśnień.

   1. Napisy interfejsu: I18n.t("nav.path") i I18n.apply(root),
      który przepisuje elementy oznaczone data-i18n.
   2. Treść kursu: dane w data/core/ są neutralne językowo
      (struktura, włoski, klucze odpowiedzi), a teksty ucznia
      leżą w data/i18n/<lang>/ i doklejają się tu po id.

   Scalanie treści jest idempotentne: pola neutralne nigdy nie są
   nadpisywane, więc drugi język można nałożyć na te same obiekty
   bez przeładowania strony.

   Brak zależności zewnętrznych. Skrypt klasyczny (działa z file://).
   ============================================================ */
(function (global) {
  "use strict";

  var LINGUAI = global.LINGUAI = global.LINGUAI || {};

  /* Kod języka -> locale BCP-47. „en" znaczy angielski amerykański. */
  var LOCALE = { pl: "pl-PL", en: "en-US", es: "es-ES", fr: "fr-FR", de: "de-DE" };
  var FALLBACK = "en";

  /**
   * Języki wyjaśnień. Nazwa zawsze w tym języku, którego dotyczy (endonim):
   * przełącznik ma być czytelny dla kogoś, kto nie rozumie języka bieżącego.
   * Nowy język = jeden wpis tutaj plus katalog data/i18n/<code>/.
   */
  var LANGS = [
    { code: "pl", flag: "🇵🇱", name: "Polski" },
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" }
  ];

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
   * Nakłada teksty wybranego języka na wszystko, co jest już wczytane.
   * Bezpieczne do wielokrotnego wywołania i do zmiany języka w locie.
   */
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
    });
  }

  function applyStrings(lang) {
    var reg = global.Core && global.Core.registry;
    if (reg) reg.levels.forEach(function (lv) { applyLevel(lv, lang); });
    (global.CONVERSATIONS || []).forEach(function (c) { applyConversation(c, lang); });
    applyRef(lang);
    applyPhonetics(lang);
    applyReadings(lang);
  }

  /* ═══════════════════════════════════════════════════════════
     NAPISY INTERFEJSU
     ═══════════════════════════════════════════════════════════ */

  var ui = {};          // lang -> klucz -> napis albo formy mnogie
  var absent = {};      // klucze, których zabrakło — do I18n.missing()
  var current = "pl";

  /** Rejestruje słownik interfejsu. Wywoływane przez data/i18n/ui-<lang>.js */
  function addUI(lang, dict) {
    var bag = ui[lang] || (ui[lang] = {});
    Object.keys(dict).forEach(function (k) { bag[k] = dict[k]; });
  }

  /**
   * Wybiera formę liczby wg reguł języka, nie wg „n === 1".
   * Polski ma cztery kategorie (1 dzień, 2 dni, 5 dni), angielski dwie.
   * Bez tego angielski pisałby „1 lessons", a polski „1 dni".
   */
  function plural(forms, n, lang) {
    var cat = new Intl.PluralRules(LOCALE[lang] || lang).select(n || 0);
    return forms[cat] !== undefined ? forms[cat] : forms.other;
  }

  function interpolate(s, vars) {
    if (!vars) return s;
    return s.replace(/\{(\w+)\}/g, function (m, name) {
      return vars[name] !== undefined ? vars[name] : m;
    });
  }

  /**
   * Napis interfejsu. Brak klucza jest widoczny, nie cichy:
   * wraca sam klucz i ląduje w I18n.missing().
   */
  function t(key, vars) {
    var lang = current;
    var v = ui[lang] && ui[lang][key];
    if (v === undefined) {
      absent[key] = true;
      v = ui[FALLBACK] && ui[FALLBACK][key];
    }
    if (v === undefined) return key;
    if (typeof v === "object") v = plural(v, vars && vars.n, lang);
    return interpolate(v, vars);
  }

  function missing() { return Object.keys(absent).sort(); }

  /* ---------------- Podmiana w gotowym HTML ---------------- */

  /* atrybut w DOM -> atrybut, który ustawia */
  var ATTRS = {
    "data-i18n-label": "aria-label",
    "data-i18n-content": "content",
    "data-i18n-placeholder": "placeholder"
  };

  /** Przepisuje statyczne napisy pod bieżący język. */
  function apply(root) {
    var scope = root || document;
    scope.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    Object.keys(ATTRS).forEach(function (data) {
      scope.querySelectorAll("[" + data + "]").forEach(function (el) {
        el.setAttribute(ATTRS[data], t(el.getAttribute(data)));
      });
    });
  }

  /** Zmienia język wyjaśnień: napisy, atrybut lang, formatowanie dat. */
  function setLang(lang) {
    current = lang;
    document.documentElement.setAttribute("lang", LOCALE[lang] || lang);
    apply();
  }

  function locale() { return LOCALE[current] || current; }

  var I18n = {
    t: t,
    apply: apply,
    set: setLang,
    missing: missing,
    locale: locale,
    LANGS: LANGS,
    // wystawione, żeby scripts/parity.mjs czytał mapę stąd zamiast ją powielać:
    // dwie kopie rozjechałyby się przy pierwszym nowym języku
    LOCALE: LOCALE,
    get lang() { return current; }
  };

  LINGUAI.addStrings = addStrings;
  LINGUAI.applyStrings = applyStrings;
  LINGUAI.hasStrings = hasLang;
  LINGUAI.addUI = addUI;

  global.I18n = I18n;

})(window);
