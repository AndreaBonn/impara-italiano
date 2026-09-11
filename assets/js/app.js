/* ============================================================
   app.js — the shell and the application start.

   The router lives in router.js; what is here is whatever knows specific
   page elements: the side rail, the theme, the language switcher and the
   startup order.
   ============================================================ */
(function (global) {
  "use strict";

  var App = {};

  /* The shell after every render: highlighting the rail entry and closing
     the drawer on a narrow screen. The router does not know these elements. */
  Router.onRender = function (route) {
    markRail(route);
    closeRail();
  };

  App.go = function (route, params) { Router.go(route, params); };

  function markRail(route) {
    document.querySelectorAll(".rail__item").forEach(function (b) {
      var r = b.getAttribute("data-route");
      if (r === route || (route === "lezione" && r === "percorso")) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
  }

  /* ---------------- The shell ---------------- */
  /** A counter tile. The word form follows the number, not the other way round. */
  function stat(n, key) {
    return '<div class="rail__stat"><b>' + n + "</b><span>" + Core.esc(I18n.t(key, { n: n })) + "</span></div>";
  }

  App.refreshRail = function () {
    var s = Core.state;
    var box = document.getElementById("railStats");
    if (box) {
      box.innerHTML =
        stat(s.streak.count, "stats.days") +
        stat(s.stats.lessonsDone, "stats.lessons") +
        stat(s.xp, "stats.points");
    }
    // the badge counts both decks: flashcards and the mistake notebook live in the same tab
    var due = Core.dueCount() + Errors.dueCount();
    var badge = document.getElementById("dueBadge");
    if (badge) {
      badge.hidden = due === 0;
      badge.textContent = due > 99 ? "99+" : due;
    }
  };

  function openRail() {
    document.getElementById("rail").classList.add("is-open");
    document.getElementById("railScrim").hidden = false;
    document.getElementById("railToggle").setAttribute("aria-expanded", "true");
  }
  function closeRail() {
    document.getElementById("rail").classList.remove("is-open");
    document.getElementById("railScrim").hidden = true;
    document.getElementById("railToggle").setAttribute("aria-expanded", "false");
  }

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var b = document.getElementById("themeToggle");
    // the key sits in the attribute, not only in this line: that way
    // I18n.apply() translates the button on a language change, unaided
    if (b) {
      b.setAttribute("data-i18n", t === "dark" ? "theme.light" : "theme.dark");
      b.textContent = I18n.t(b.getAttribute("data-i18n"));
    }
  }


  /* ---------------- The language of explanations ---------------- */

  /**
   * The switcher as a dropdown: the current language is visible (flag plus
   * endonym), the rest wait in the list. With two languages buttons side by
   * side would do; with five they would take up half the panel width.
   *
   * The pattern: a button with aria-haspopup="listbox" + a ul with
   * role="listbox". The language name stays in its endonym, because the
   * person looking for the list is the one who cannot read the current
   * language.
   */
  function renderLangPicker() {
    var box = document.getElementById("langPicker");
    if (!box) return;
    var cur = I18n.LANGS.filter(function (l) { return l.code === I18n.lang; })[0] || I18n.LANGS[0];

    box.setAttribute("aria-label", I18n.t("lang.group"));
    box.innerHTML =
      '<button type="button" class="rail__lang-btn js-lang-toggle" id="langToggle"' +
      ' aria-haspopup="listbox" aria-expanded="false" aria-controls="langList"' +
      ' aria-label="' + Core.esc(I18n.t("lang.current", { name: cur.name })) + '"' +
      ' title="' + Core.esc(cur.name) + '">' +
      '<span class="rail__lang-flag" aria-hidden="true">' + cur.flag + "</span>" +
      '<span class="rail__lang-name" aria-hidden="true">' + Core.esc(cur.name) + "</span>" +
      '<span class="rail__lang-caret" aria-hidden="true">▾</span></button>' +
      '<ul class="rail__lang-list" id="langList" role="listbox" hidden' +
      ' aria-label="' + Core.esc(I18n.t("lang.group")) + '">' +
      I18n.LANGS.map(function (l) {
        return '<li role="option" tabindex="-1" data-lang="' + l.code + '"' +
          ' aria-selected="' + (l.code === I18n.lang) + '" class="rail__lang-opt">' +
          '<span aria-hidden="true">' + l.flag + "</span><span>" + Core.esc(l.name) + "</span></li>";
      }).join("") + "</ul>";

    var toggle = box.querySelector(".js-lang-toggle");
    var list = box.querySelector(".rail__lang-list");
    var opts = [].slice.call(list.querySelectorAll("[data-lang]"));

    function open() {
      list.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      var sel = list.querySelector('[aria-selected="true"]') || opts[0];
      if (sel) sel.focus();
    }
    function close(focusToggle) {
      list.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      if (focusToggle) toggle.focus();
    }
    function move(from, step) {
      var i = opts.indexOf(from) + step;
      if (i < 0) i = opts.length - 1;
      if (i >= opts.length) i = 0;
      opts[i].focus();
    }

    toggle.addEventListener("click", function () {
      if (list.hidden) open(); else close(false);
    });
    opts.forEach(function (o) {
      o.addEventListener("click", function () { close(false); switchLang(o.getAttribute("data-lang")); });
      o.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); close(false); switchLang(o.getAttribute("data-lang")); }
        else if (e.key === "ArrowDown") { e.preventDefault(); move(o, 1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); move(o, -1); }
        else if (e.key === "Escape") { e.preventDefault(); close(true); }
      });
    });
  }

  /**
   * A click outside the list closes it. Registered once, not inside
   * renderLangPicker(): that runs on every language change and would add a
   * listener holding a reference to an element that is already gone.
   */
  document.addEventListener("click", function (e) {
    var box = document.getElementById("langPicker");
    if (!box || box.contains(e.target)) return;
    var list = box.querySelector(".rail__lang-list");
    var toggle = box.querySelector(".js-lang-toggle");
    if (list && !list.hidden) {
      list.hidden = true;
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
  });

  /**
   * Changing the language without a reload: we pull the missing overlays,
   * apply them onto the same objects and redraw the current view.
   */
  function switchLang(lang) {
    if (lang === Core.state.settings.lang) return;
    App.applyLang(lang);
  }

  /**
   * Applies the language and theme from the state onto the interface.
   * Separate from switchLang, because importing a file changes
   * state.settings BEFORE the view is refreshed: the "same language" guard
   * in switchLang would then return immediately, leaving the interface in
   * the previous language despite a correctly loaded state.
   */
  App.applyLang = function (lang) {
    Core.setLanguage(lang, function (missing) {
      I18n.set(lang);
      applyTheme(Core.state.settings.theme || "light");
      renderLangPicker();
      App.refreshRail();
      Router.render(Router.current.route, Router.current.params);
      // a silent failure would leave part of the course in the previous language
      if (missing.length) Core.toast(I18n.t("lang.partial", { n: missing.length }));
    });
  };

  /* ---------------- Startup ---------------- */
  function boot() {
    Core.load();
    var lang = Core.state.settings.lang;
    I18n.set(lang);
    applyTheme(Core.state.settings.theme || "light");
    renderLangPicker();
    App.refreshRail();

    document.querySelectorAll(".rail__item").forEach(function (b) {
      b.addEventListener("click", function () { App.go(b.getAttribute("data-route")); });
    });
    document.getElementById("railToggle").addEventListener("click", function () {
      document.getElementById("rail").classList.contains("is-open") ? closeRail() : openRail();
    });
    document.getElementById("railScrim").addEventListener("click", closeRail);
    document.getElementById("railSearch").addEventListener("click", function () { App.go("cerca"); });
    document.getElementById("themeToggle").addEventListener("click", function () {
      var t = Core.state.settings.theme === "dark" ? "light" : "dark";
      Core.state.settings.theme = t; Core.save(); applyTheme(t);
    });
    Router.listen();
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { Audio2.stop(); closeRail(); }
    });

    // The texts in the student's language are always pulled: index.html does not know the chosen language.
    Core.setLanguage(lang, function (missing) {
      if (missing.length) Core.toast(I18n.t("lang.partial", { n: missing.length }));
      startRouting();
    });
    Core.touchDay();
    /* Last, and after the state is loaded: everything it does depends on how
       many lessons are behind the student, and one of the four asks the
       browser for a permission we only ever get to ask for once. */
    Retention.start();
  }

  /**
   * Whether this is the student's first encounter with the course.
   *
   * Three conditions, not one: `onboarded` is an ADDED field, so a profile
   * from before that screen loads with `false` and the marker alone would
   * redirect somebody with forty lessons behind them to the welcome page.
   * The address from the hash always wins: whoever arrives with a link to a
   * specific lesson gets that lesson, not the welcome screen.
   */
  function pierwszeUruchomienie() {
    var s = Core.state;
    if (global.location.hash) return false;
    return !s.onboarded && !s.placement && s.stats.lessonsDone === 0;
  }

  /** The first render: the level the student is coming back to. */
  function startRouting() {
    var powitanie = pierwszeUruchomienie();
    var d = Router.decode(global.location.hash);
    var wanted = d.params.level || guessLevel(d);
    /* The level is loaded under the welcome screen too: by the time the
       student finishes reading three sentences, the path already has
       something to draw itself from.
       Drawing after the load asks about the CURRENT route, not about how
       things were at startup: under the welcome screen there is nothing to
       refresh, but once the student has made a choice, the path is waiting
       for that data and without this would stay on "loading material" for
       the rest of the session. */
    if (wanted) {
      Core.loadLevelData(wanted, function () {
        if (Router.current.route !== "benvenuto") Router.onHashChange();
      });
      // show the skeleton right away, without waiting for the file
      if (!powitanie) Router.render(d.route, d.params);
    }
    if (powitanie) App.go("benvenuto");
    else if (!wanted) Router.onHashChange();
    App.refreshRail();
  }

  /** Which level to load at startup: the one with unfinished progress. */
  function guessLevel(d) {
    if (d.route === "lezione" && d.params.id) {
      var m = /^([a-z]\d)/i.exec(d.params.id);
      if (m) return m[1].toUpperCase();
    }
    var levels = Core.registry.levels;
    for (var i = 0; i < levels.length; i++) {
      var p = Core.levelProgress(levels[i]);
      if (p.total === 0 || p.pct < 1) return levels[i].code;
    }
    return levels.length ? levels[0].code : null;
  }

  global.App = App;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();


})(window);
