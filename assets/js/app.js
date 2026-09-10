/* ============================================================
   app.js — powłoka i start aplikacji.

   Router mieszka w router.js; tutaj jest to, co zna konkretne elementy
   strony: pasek boczny, motyw, przełącznik języka i kolejność startu.
   ============================================================ */
(function (global) {
  "use strict";

  var App = {};

  /* Powłoka po każdym renderowaniu: zaznaczenie pozycji w pasku i
     zamknięcie szuflady na wąskim ekranie. Router nie zna tych elementów. */
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
    // odznaka liczy obie talie: fiszki i quaderno błędów mieszkają w tej samej zakładce
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
    // klucz siedzi w atrybucie, nie tylko w tej linijce: dzięki temu
    // I18n.apply() przetłumaczy przycisk przy zmianie języka, bez pomocy
    if (b) {
      b.setAttribute("data-i18n", t === "dark" ? "theme.light" : "theme.dark");
      b.textContent = I18n.t(b.getAttribute("data-i18n"));
    }
  }


  /* ---------------- Język wyjaśnień ---------------- */

  /**
   * Przełącznik jako lista rozwijana: widoczny jest bieżący język (flaga plus
   * endonim), reszta czeka w liście. Przy dwóch językach wystarczyłyby przyciski
   * obok siebie, przy pięciu zajęłyby pół szerokości panelu.
   *
   * Wzorzec: przycisk aria-haspopup="listbox" + ul role="listbox". Nazwa języka
   * zostaje w endonimie, bo listy szuka ktoś, kto bieżącego języka nie czyta.
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
   * Klik poza listą zamyka. Rejestrowane raz, nie w renderLangPicker():
   * ten biegnie przy każdej zmianie języka i dokładałby listener trzymający
   * referencję do usuniętego już elementu.
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
   * Zmiana języka bez przeładowania: dociągamy brakujące nakładki, nakładamy je
   * na te same obiekty i przerysowujemy bieżący widok.
   */
  function switchLang(lang) {
    if (lang === Core.state.settings.lang) return;
    App.applyLang(lang);
  }

  /**
   * Nakłada język i motyw ze stanu na interfejs. Osobno od switchLang, bo import
   * pliku zmienia state.settings PRZED odświeżeniem widoku: strażnik „ten sam
   * język" w switchLang wychodziłby wtedy od razu, zostawiając interfejs
   * w poprzednim języku mimo poprawnie wczytanego stanu.
   */
  App.applyLang = function (lang) {
    Core.setLanguage(lang, function (missing) {
      I18n.set(lang);
      applyTheme(Core.state.settings.theme || "light");
      renderLangPicker();
      App.refreshRail();
      Router.render(Router.current.route, Router.current.params);
      // milczące niepowodzenie zostawiłoby część kursu w poprzednim języku
      if (missing.length) Core.toast(I18n.t("lang.partial", { n: missing.length }));
    });
  };

  /* ---------------- Start ---------------- */
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

    // Teksty w języku ucznia dociągamy zawsze: index.html nie zna wybranego języka.
    Core.setLanguage(lang, function (missing) {
      if (missing.length) Core.toast(I18n.t("lang.partial", { n: missing.length }));
      startRouting();
    });
    Core.touchDay();
  }

  /**
   * Czy to pierwsze spotkanie ucznia z kursem.
   *
   * Trzy warunki, nie jeden: `onboarded` jest polem DOKŁADANYM, więc
   * profil sprzed tego ekranu wczytuje się z `false` i sam znacznik
   * przekierowałby na powitanie kogoś, kto ma za sobą czterdzieści
   * lekcji. Adres z hasha wygrywa zawsze: kto przyszedł z linkiem do
   * konkretnej lekcji, dostaje tę lekcję, a nie ekran powitalny.
   */
  function pierwszeUruchomienie() {
    var s = Core.state;
    if (global.location.hash) return false;
    return !s.onboarded && !s.placement && s.stats.lessonsDone === 0;
  }

  /** Pierwsze renderowanie: poziom, do którego uczeń wraca. */
  function startRouting() {
    var powitanie = pierwszeUruchomienie();
    var d = Router.decode(global.location.hash);
    var wanted = d.params.level || guessLevel(d);
    /* Poziom wczytujemy także pod ekranem powitalnym: zanim uczeń skończy
       czytać trzy zdania, ścieżka ma już z czego się narysować.
       Rysowanie po wczytaniu pyta o BIEŻĄCĄ trasę, a nie o to, jak było
       na starcie: pod powitaniem nie ma co odświeżać, ale gdy uczeń zdążył
       już wybrać, ścieżka czeka na te dane i bez tego zostałaby na
       „wczytuję materiał" do końca sesji. */
    if (wanted) {
      Core.loadLevelData(wanted, function () {
        if (Router.current.route !== "benvenuto") Router.onHashChange();
      });
      // pokaż szkielet od razu, nie czekając na plik
      if (!powitanie) Router.render(d.route, d.params);
    }
    if (powitanie) App.go("benvenuto");
    else if (!wanted) Router.onHashChange();
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
