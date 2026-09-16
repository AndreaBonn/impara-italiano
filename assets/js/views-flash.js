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

  Views.cinque = function () {
    stopClock();
    var queue = Core.dueCards(Rules.LIMITS.cards);

    if (!queue.length) {
      set(head() + empty(esc(t("flash.emptyTitle")), esc(t("flash.emptyText"))) +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button>");
      document.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      return;
    }

    set(head() +
      '<p class="exq__sub js-ready" style="margin-bottom:14px">' + esc(t("flash.ready", { n: queue.length })) + "</p>" +
      '<button class="btn btn--primary js-start">' + esc(t("flash.start")) + "</button>" +
      '<div id="flashBox" style="margin-top:20px"></div>');

    document.querySelector(".js-start").addEventListener("click", function () { przebieg(queue); });
  };

  /* ---------------- The run ---------------- */

  function przebieg(queue) {
    /* The count said how many were due before starting; left on screen it
       goes stale with the first answer and contradicts the counter below. */
    document.querySelector(".js-start").hidden = true;
    document.querySelector(".js-ready").hidden = true;
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

    stopClock();
    zegar = global.setInterval(odlicz, 1000);
    Views.onLeave = stopClock;

    function karta() {
      var c = run.current();
      if (!c) { koniec(); return; }
      countEl.textContent = t("srs.cardOf", { i: run.summary().answered + 1, n: queue.length });
      kartaPisana(cardEl, c, function (q, ok) {
        if (run.answer(q, ok, Date.now())) koniec();
        else karta();
      });
    }

    function koniec() {
      stopClock();
      var s = run.summary();
      box.innerHTML = '<div class="summary"><div class="summary__score">' + s.right + "/" + s.answered + "</div>" +
        '<p class="summary__msg">' + esc(t("flash.end." + s.reason)) + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-again">' + esc(t("flash.again")) + "</button>" +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button></div></div>";
      box.querySelector(".js-again").addEventListener("click", function () { Views.cinque(); });
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
      '<div class="flash__grades js-grade" hidden>' +
      '<button class="btn btn--ghost btn--sm" data-q="0">' + esc(t("srs.grade0")) + "</button>" +
      '<button class="btn btn--ghost btn--sm" data-q="3">' + esc(t("srs.grade3")) + "</button>" +
      '<button class="btn btn--green btn--sm" data-q="4">' + esc(t("srs.grade4")) + "</button>" +
      '<button class="btn btn--green btn--sm" data-q="5">' + esc(t("srs.grade5")) + "</button></div></div>";

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
    /* A held Enter repeats onto the grade that reveal() just focused, and
       every grade draws the next card: without this one long press grades
       cards the student never saw. */
    grade.addEventListener("keydown", function (e) {
      if (e.repeat) e.preventDefault();
    });

    grade.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        onGrade(parseInt(b.getAttribute("data-q"), 10), ok);
      });
    });
  }

})(window);
