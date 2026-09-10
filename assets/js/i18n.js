/* ============================================================
   i18n.js — napisy interfejsu w języku ucznia.

   I18n.t("nav.path") oddaje napis, I18n.apply(root) przepisuje elementy
   oznaczone data-i18n w gotowym już HTML-u, I18n.set(lang) przełącza
   język razem z atrybutem lang i formatowaniem liczb.

   Plik mówił o sobie „dwie rzeczy" i był dwiema rzeczami: te napisy oraz
   doklejanie tekstów ucznia do treści kursu. Ta druga połowa mieszka
   teraz w i18n-merge.js. Wspólnego stanu nie miały — dwa osobne słowniki,
   dwa osobne zestawy kluczy — więc został tu tylko podział, którego nie
   trzeba było utrzymywać w głowie.

   Lista języków (LANGS) i mapa locale (LOCALE) zostają tutaj, bo czyta je
   przełącznik w interfejsie i scripts/parity.mjs.

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

  /* `addUI` zostaje pod LINGUAI, nie pod I18n: data/i18n/ui-<lang>.js woła
     ją tak od pierwszego dnia, a to są pliki danych, nie kod. */
  LINGUAI.addUI = addUI;

  global.I18n = I18n;

})(window);
