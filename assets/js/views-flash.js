/* ============================================================
   views-flash.js — five minutes: a card session with an end.

   Reviews and Today already hold cards, but neither promises a length: a
   student with five minutes opens them and does not know whether they will
   finish. This screen promises one, and keeps it: five minutes or twenty
   cards, whichever comes first.

   The cards are the SAME cards as under Reviews, graded through the same
   Core.gradeCard. A second deck would give the same word two schedules, and
   the student would meet it twice in one day for no reason they could see.

   What ends the session lives in flash-run.js; this file draws, runs the
   visible clock and cleans it up on leaving (Views.onLeave): a clock left
   running draws nothing, it ticks on nodes already gone from the page, once
   a second for as long as the tab stays open.

   The write card duplicates the one in runCards (views.js). That is
   declared, not overlooked: runCards has no point between cards where a
   bound could be checked, and changing it would change Reviews and Today.

   Classic script. Requires core.js, flash-rules.js, flash-run.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var empty = Views.shell.empty;
  var Rules = global.FlashRules;

  /* When the student hears that one minute is left. One announcement, not a
     countdown read aloud: a timer that talks every second drowns out the
     card the student is trying to answer. */
  var WARN_MS = 60000;

  var zegar = null;

  function stopClock() {
    if (zegar) { global.clearInterval(zegar); zegar = null; }
  }

  function head() {
    return pageHead(t("flash.kicker"), t("flash.title"), t("flash.intro"));
  }

  /** Local midnight: "new today" means today where the student is. */
  function dayStart() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  }

  function codes() {
    return Core.registry.levels.map(function (lv) { return lv.code; });
  }

  /**
   * The levels whose data the reserve needs: the chosen unit's, or those of
   * every finished lesson, or the first level for a student with nothing
   * finished. Units arrive with their level's file, so a level that is not
   * loaded contributes no words and no entries in the unit picker.
   */
  function levelsNeeded(unitId) {
    var all = codes();
    if (unitId) return [Rules.levelOfLesson(unitId, all)].filter(Boolean);
    var out = [];
    Object.keys(Core.state.lessons).forEach(function (id) {
      var code = Core.isLessonDone(id) && Rules.levelOfLesson(id, all);
      if (code && out.indexOf(code) === -1) out.push(code);
    });
    return out.length ? out : all.slice(0, 1);
  }

  function anyDone() {
    return Object.keys(Core.state.lessons).some(Core.isLessonDone);
  }

  function unitPicker(unitId) {
    var groups = Core.registry.levels.filter(function (lv) { return (lv.units || []).length; })
      .map(function (lv) {
        return '<optgroup label="' + esc(lv.code) + '">' + lv.units.map(function (u) {
          return '<option value="' + esc(u.id) + '"' + (u.id === unitId ? " selected" : "") + ">" +
            esc(u.titleIt + (u.title ? " · " + u.title : "")) + "</option>";
        }).join("") + "</optgroup>";
      }).join("");
    return '<label class="flash__unit"><span>' + esc(t("flash.unitLabel")) + "</span>" +
      '<select class="field js-unit">' +
      '<option value="">' + esc(t(anyDone() ? "flash.unitDone" : "flash.unitFirst")) + "</option>" +
      groups + "</select></label>";
  }

  /* The session running on this screen, or null. The router redraws the
     current route once the startup level arrives (app.js, startRouting), and
     on a slow connection that lands after the student pressed Start: without
     this the redraw threw the session away mid-card. */
  var aktywna = null;

  Views.cinque = function (params) {
    var unitId = (params && params.unit) || "";
    if (aktywna && aktywna.unitId === unitId && document.contains(aktywna.box)) {
      aktywna.resume();
      return;
    }
    stopClock();
    aktywna = null;
    /* "loading" is not loaded: a level another screen started fetching still
       has no units, and the registry holds our callback until it lands. */
    var brak = levelsNeeded(unitId).filter(function (c) { return Core.registry.loaded[c] !== true; });

    rysuj(unitId, brak.length > 0);
    if (!brak.length) return;

    /* The same pattern as the coverage screen: draw what we have, load the
       rest, draw again. A reserve built from half the levels looks like the
       whole of it. */
    var zostalo = brak.length;
    var nieudane = [];
    brak.forEach(function (code) {
      Core.loadLevelData(code, function (got) {
        if (!got) nieudane.push(code);
        if (--zostalo > 0) return;
        /* The student may have picked another unit while this level was on
           its way: that pick drew its own screen and must not be undone. */
        var teraz = global.Router.current;
        if (aktywna || teraz.route !== "cinque" || ((teraz.params && teraz.params.unit) || "") !== unitId) return;
        rysuj(unitId, false);
        if (nieudane.length) Core.toast(t("search.partial", { levels: nieudane.join(", ") }));
      });
    });
  };

  function rysuj(unitId, loading) {
    var due = Core.dueCards(Rules.LIMITS.cards);
    var fresh = Rules.reserve(Core.registry.levels, {
      isDone: Core.isLessonDone,
      inDeck: function (k) { return !!Core.state.srs[k]; },
      keyOf: Core.cardKey,
      unitId: unitId
    });
    var soFar = Rules.newToday(Core.state.reviews, dayStart());
    var queue = Rules.compose(due, fresh, soFar);
    var nowe = queue.filter(function (c) { return c.fresh; }).length;

    var picker = unitPicker(unitId);

    if (!queue.length) {
      var why = loading ? "flash.loading"
        : fresh.length && soFar >= Rules.NEW_PER_DAY ? "flash.emptyQuota" : "flash.emptyText";
      set(head() + picker +
        empty(esc(t("flash.emptyTitle")), esc(t(why))) +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button>");
      document.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      wirePicker();
      return;
    }

    set(head() + picker +
      '<p class="exq__sub js-ready" style="margin-bottom:14px">' + esc(t("flash.ready", { n: queue.length })) +
      (nowe ? " " + esc(t("flash.fromNew", { n: nowe })) : "") + "</p>" +
      '<button class="btn btn--primary js-start">' + esc(t("flash.start")) + "</button>" +
      '<div id="flashBox" style="margin-top:20px"></div>');

    wirePicker();
    document.querySelector(".js-start").addEventListener("click", function () { przebieg(queue, unitId); });
  }

  function wirePicker() {
    var sel = document.querySelector(".js-unit");
    sel.addEventListener("change", function () {
      App.go("cinque", sel.value ? { unit: sel.value } : {});
    });
  }

  /* ---------------- The run ---------------- */

  function przebieg(queue, unitId) {
    /* The count said how many were due before starting; left on screen it
       goes stale with the first answer and contradicts the counter below. */
    document.querySelector(".js-start").hidden = true;
    document.querySelector(".js-ready").hidden = true;
    document.querySelector(".flash__unit").hidden = true;
    var run = global.FlashRun.create(queue, Date.now());
    var box = document.getElementById("flashBox");

    box.innerHTML = '<div class="flash__bar">' +
      '<span class="flash__clock" role="timer" aria-live="off" aria-label="' + esc(t("flash.timeLeft")) + '">' +
      Rules.clock(Rules.LIMITS.ms) + "</span>" +
      '<span class="flash__count"></span></div>' +
      '<p class="flash__note" role="status"></p>' +
      '<div class="flash__card"></div>';

    var clockEl = box.querySelector(".flash__clock");
    var countEl = box.querySelector(".flash__count");
    var noteEl = box.querySelector(".flash__note");
    var cardEl = box.querySelector(".flash__card");
    var ostrzezono = false;

    function odlicz() {
      var now = Date.now();
      var left = Rules.remaining(run.start, now);
      clockEl.textContent = Rules.clock(left);
      if (run.tick(now) === "time") {
        noteEl.textContent = t("flash.timeUp");
        stopClock();
      } else if (!ostrzezono && left <= WARN_MS) {
        ostrzezono = true;
        noteEl.textContent = t("flash.oneMinute");
      }
    }

    function resume() {
      stopClock();
      zegar = global.setInterval(odlicz, 1000);
      Views.onLeave = stopClock;
      odlicz();
    }
    aktywna = { unitId: unitId, box: box, resume: resume };
    resume();

    function karta() {
      var c = run.current();
      if (!c) { koniec(); return; }
      countEl.textContent = t("srs.cardOf", { i: run.summary().answered + 1, n: queue.length });
      (c.fresh ? kartaGira : kartaPisana)(cardEl, c, function (q, ok) {
        if (run.answer(q, ok, Date.now())) koniec();
        else karta();
      });
    }

    function koniec() {
      stopClock();
      aktywna = null;
      var s = run.summary();
      box.innerHTML = '<div class="summary"><div class="summary__score">' + s.right + "/" + s.answered + "</div>" +
        '<p class="summary__msg">' + esc(t("flash.end." + s.reason)) + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-again">' + esc(t("flash.again")) + "</button>" +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button></div></div>";
      box.querySelector(".js-again").addEventListener("click", function () { Views.cinque(global.Router.current.params); });
      box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      box.querySelector(".js-again").focus();
      App.refreshRail();
    }

    karta();
  }

  /**
   * The write card: the student's language shown, Italian typed, then a
   * self-grade. The check only colours the feedback; the grade the student
   * picks is what reaches FSRS, as under Reviews.
   */
  function kartaPisana(host, c, onGrade) {
    host.innerHTML = '<div class="exq">' +
      '<p class="exq__prompt" style="font-size:1.3rem">' + esc(Core.cardTr(c)) + "</p>" +
      '<p class="exq__sub">' + esc(t("srs.howInItalian")) + "</p>" +
      '<div class="field-row"><input type="text" class="field js-in" aria-label="' + esc(t("srs.ph")) + '" placeholder="' +
      esc(t("srs.ph")) + '" autocomplete="off" spellcheck="false">' +
      '<button class="btn btn--primary js-show">' + esc(t("ex.check")) + "</button></div>" +
      '<div class="fb" role="status"></div>' +
      gradeButtons() + "</div>";

    var input = host.querySelector(".js-in");
    var fb = host.querySelector(".fb");
    var grade = host.querySelector(".js-grade");
    var show = host.querySelector(".js-show");
    var ok = false;
    input.focus();

    function reveal() {
      if (show.disabled) return;
      ok = Core.checkOpen(input.value, [c.it], false).ok;
      fb.className = "fb is-on " + (ok ? "fb--ok" : "fb--ko");
      fb.innerHTML = esc(t(ok ? "srs.right" : "srs.wrong")) + " <b>" + esc(c.it) + "</b>" +
        ' <button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button>';
      Ex.wireSpeakers(fb);
      Audio2.speak(c.it);
      grade.hidden = false;
      show.disabled = true;
      input.disabled = true;
      grade.querySelector("button").focus();
    }
    show.addEventListener("click", reveal);
    /* reveal() moves the focus to the first grade. Without preventDefault
       the key's default action then clicks that button, grading the card
       "no idea" before the answer is even on screen. */
    input.addEventListener("keydown", function (e) {
      if (e.key !== "Enter") return;
      e.preventDefault();
      reveal();
    });
    wireGrades(grade, function (q) { onGrade(q, ok); });
  }

  function gradeButtons() {
    return '<div class="flash__grades js-grade" hidden>' +
      '<button class="btn btn--ghost btn--sm" data-q="0">' + esc(t("srs.grade0")) + "</button>" +
      '<button class="btn btn--ghost btn--sm" data-q="3">' + esc(t("srs.grade3")) + "</button>" +
      '<button class="btn btn--green btn--sm" data-q="4">' + esc(t("srs.grade4")) + "</button>" +
      '<button class="btn btn--green btn--sm" data-q="5">' + esc(t("srs.grade5")) + "</button></div>";
  }

  function wireGrades(grade, onPick) {
    /* A held Enter repeats onto the grade that was just focused, and every
       grade draws the next card: without this one long press grades cards
       the student never saw. */
    grade.addEventListener("keydown", function (e) {
      if (e.repeat) e.preventDefault();
    });
    grade.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () { onPick(parseInt(b.getAttribute("data-q"), 10)); });
    });
  }

  /**
   * The flip card, for a word the student meets here for the first time:
   * nobody can type the Italian for a word they have never seen, so the
   * Italian is shown and the meaning is what gets recalled. The first grade
   * turns it into a deck card (flash-run.js).
   */
  function kartaGira(host, c, onGrade) {
    host.innerHTML = '<div class="exq">' +
      '<p class="exq__num"><span class="chip chip--gold">' + esc(t("flash.newWord")) + "</span></p>" +
      '<p class="exq__prompt" style="font-size:1.3rem" lang="it">' + esc(c.it) +
      ' <button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="' +
      esc(t("a11y.listenTo", { what: c.it })) + '">🔊</button></p>' +
      '<p class="exq__sub">' + esc(t("flash.meaning")) + "</p>" +
      '<button class="btn btn--primary js-show">' + esc(t("flash.show")) + "</button>" +
      '<div class="fb" role="status"></div>' + gradeButtons() + "</div>";

    Ex.wireSpeakers(host);
    var show = host.querySelector(".js-show");
    var fb = host.querySelector(".fb");
    var grade = host.querySelector(".js-grade");
    show.focus();

    show.addEventListener("click", function () {
      fb.className = "fb is-on";
      fb.innerHTML = "<b>" + esc(Core.cardTr(c)) + "</b>";
      Audio2.speak(c.it);
      show.hidden = true;
      grade.hidden = false;
      grade.querySelector("button").focus();
    });
    wireGrades(grade, function (q) { onGrade(q, q >= 3); });
  }

})(window);
