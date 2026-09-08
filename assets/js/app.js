/* ============================================================
   app.js — router, powłoka, start aplikacji
   ============================================================ */
(function (global) {
  "use strict";

  var App = {};
  var current = { route: "percorso", params: {} };

  /* ---------------- Router na hashu ---------------- */
  function encode(route, params) {
    var q = Object.keys(params || {}).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join("&");
    return "#/" + route + (q ? "?" + q : "");
  }

  function decode(hash) {
    var m = /^#\/([a-z]+)(?:\?(.*))?$/.exec(hash || "");
    if (!m) return { route: "percorso", params: {} };
    var params = {};
    (m[2] || "").split("&").filter(Boolean).forEach(function (pair) {
      var kv = pair.split("=");
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
    });
    return { route: m[1], params: params };
  }

  App.go = function (route, params) {
    var h = encode(route, params);
    if (global.location.hash === h) render(route, params || {});
    else global.location.hash = h;
  };

  function onHashChange() {
    var d = decode(global.location.hash);
    render(d.route, d.params);
  }

  function render(route, params) {
    Audio2.stop();
    current = { route: route, params: params };
    var fn = Views[route];
    if (!fn) { Views.percorso({}); route = "percorso"; }
    else fn(params);
    markRail(route);
    document.getElementById("main").focus({ preventScroll: true });
    closeRail();
  }

  function markRail(route) {
    document.querySelectorAll(".rail__item").forEach(function (b) {
      var r = b.getAttribute("data-route");
      if (r === route || (route === "lezione" && r === "percorso")) b.setAttribute("aria-current", "page");
      else b.removeAttribute("aria-current");
    });
  }

  /* ---------------- Powłoka ---------------- */
  /** Kafelek licznika. Forma słowa idzie za liczbą, nie odwrotnie. */
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
    var due = Core.dueCount();
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
    // klucz siedzi w atrybucie, nie tylko w tej linijce: dzięki temu
    // I18n.apply() przetłumaczy przycisk przy zmianie języka, bez pomocy
    if (b) {
      b.setAttribute("data-i18n", t === "dark" ? "theme.light" : "theme.dark");
      b.textContent = I18n.t(b.getAttribute("data-i18n"));
    }
  }

  /* ---------------- Start ---------------- */
  function boot() {
    Core.load();
    I18n.set(Core.state.settings.lang);
    LINGUAI.applyStrings(Core.state.settings.lang);
    applyTheme(Core.state.settings.theme || "light");
    App.refreshRail();

    document.querySelectorAll(".rail__item").forEach(function (b) {
      b.addEventListener("click", function () { App.go(b.getAttribute("data-route")); });
    });
    document.getElementById("railToggle").addEventListener("click", function () {
      document.getElementById("rail").classList.contains("is-open") ? closeRail() : openRail();
    });
    document.getElementById("railScrim").addEventListener("click", closeRail);
    document.getElementById("themeToggle").addEventListener("click", function () {
      var t = Core.state.settings.theme === "dark" ? "light" : "dark";
      Core.state.settings.theme = t; Core.save(); applyTheme(t);
    });
    global.addEventListener("hashchange", onHashChange);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { Audio2.stop(); closeRail(); }
    });

    // Wczytaj dane poziomu, do którego uczeń wraca, a potem renderuj.
    var d = decode(global.location.hash);
    var wanted = d.params.level || guessLevel(d);
    if (wanted) {
      Core.loadLevelData(wanted, function () { onHashChange(); });
      // pokaż szkielet od razu, nie czekając na plik
      render(d.route, d.params);
    } else {
      onHashChange();
    }
    Core.touchDay();
    App.refreshRail();
  }

  /** Który poziom wczytać na starcie: ten z niedokończonym postępem. */
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
