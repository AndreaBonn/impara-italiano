/* ============================================================
   i18n.js — interface strings in the student's language.

   I18n.t("nav.path") returns a string, I18n.apply(root) rewrites the
   elements marked with data-i18n in already rendered HTML, I18n.set(lang)
   switches the language together with the lang attribute and number
   formatting.

   The file described itself as "two things" and was two things: these
   strings plus attaching the student's texts to the course content. That
   second half now lives in i18n-merge.js. They shared no state — two
   separate dictionaries, two separate sets of keys — so all that is left
   here is the split nobody has to keep in their head.

   The list of languages (LANGS) and the locale map (LOCALE) stay here,
   because the interface switcher and scripts/parity.mjs read them.

   No external dependencies. Classic script (works from file://).
   ============================================================ */
(function (global) {
  "use strict";

  var LINGUAI = global.LINGUAI = global.LINGUAI || {};

  /* Language code -> BCP-47 locale. "en" means American English. */
  var LOCALE = { pl: "pl-PL", en: "en-US", es: "es-ES", fr: "fr-FR", de: "de-DE" };
  var FALLBACK = "en";

  /**
   * Languages of explanation. The name is always in the language it refers
   * to (the endonym): the switcher has to be readable by someone who does
   * not understand the current language. A new language = one entry here
   * plus a data/i18n/<code>/ directory.
   */
  var LANGS = [
    { code: "pl", flag: "🇵🇱", name: "Polski" },
    { code: "en", flag: "🇺🇸", name: "English" },
    { code: "es", flag: "🇪🇸", name: "Español" },
    { code: "fr", flag: "🇫🇷", name: "Français" },
    { code: "de", flag: "🇩🇪", name: "Deutsch" }
  ];

  /* ═══════════════════════════════════════════════════════════
     INTERFACE STRINGS
     ═══════════════════════════════════════════════════════════ */

  var ui = {};          // lang -> key -> string or plural forms
  var absent = {};      // keys that were missing — for I18n.missing()
  var current = "pl";

  /** Registers an interface dictionary. Called by data/i18n/ui-<lang>.js */
  function addUI(lang, dict) {
    var bag = ui[lang] || (ui[lang] = {});
    Object.keys(dict).forEach(function (k) { bag[k] = dict[k]; });
  }

  /**
   * Picks the number form by the rules of the language, not by "n === 1".
   * Polish has four categories (1 dzień, 2 dni, 5 dni), English has two.
   * Without this English would write "1 lessons" and Polish "1 dni".
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
   * An interface string. A missing key is visible, not silent:
   * the key itself comes back and lands in I18n.missing().
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

  /* ---------------- Substitution in rendered HTML ---------------- */

  /* DOM attribute -> the attribute it sets */
  var ATTRS = {
    "data-i18n-label": "aria-label",
    "data-i18n-content": "content",
    "data-i18n-placeholder": "placeholder"
  };

  /** Rewrites the static strings for the current language. */
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

  /** Changes the language of explanations: strings, the lang attribute, date formatting. */
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
    // exposed so that scripts/parity.mjs reads the map from here instead of
    // duplicating it: two copies would drift apart at the first new language
    LOCALE: LOCALE,
    get lang() { return current; }
  };

  /* `addUI` stays under LINGUAI, not under I18n: data/i18n/ui-<lang>.js has
     called it that way since day one, and those are data files, not code. */
  LINGUAI.addUI = addUI;

  global.I18n = I18n;

})(window);
