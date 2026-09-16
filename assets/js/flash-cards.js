/* ============================================================
   flash-cards.js — the cards of the five-minute session, one per mode.

   Each card draws itself into a host and calls onGrade(q, ok) exactly once,
   with q on the 0/3/4/5 scale Core.gradeCard takes. What happens next (the
   bound, the next card) is views-flash.js's business, and which mode a card
   gets is flash-rules.js's.

   The write card duplicates the one in runCards (views.js). That is
   declared, not overlooked: runCards has no point between cards where a
   bound could be checked, and changing it would change Reviews and Today.

   Classic script. Requires core.js, flash-rules.js, exercises.js (speakers), audio.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  /**
   * The write card: the student's language shown, Italian typed, then a
   * self-grade. The check only colours the feedback; the grade the student
   * picks is what reaches FSRS, as under Reviews.
   */
  function write(host, c, options, onGrade) {
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
  function flip(host, c, options, onGrade) {
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

  /**
   * The choice card: the student's language shown, the Italian picked from
   * the answer and distractors that share its article. Graded by the course,
   * not by the student: a right pick is 3, a wrong one 0 (FlashRules.gradeFor).
   * The options are Italian only; a translation among them would give the
   * answer away through its gloss.
   */
  function choice(host, c, options, onGrade) {
    var name = "flash-" + c.key;
    host.innerHTML = '<div class="exq">' +
      '<p class="exq__prompt" style="font-size:1.3rem">' + esc(Core.cardTr(c)) + "</p>" +
      '<p class="exq__sub">' + esc(t("srs.howInItalian")) + "</p>" +
      '<div class="opts" role="radiogroup" aria-label="' + esc(t("ex.answersGroup")) + '">' +
      options.map(function (o, i) {
        return '<label class="opt" data-i="' + i + '"><input type="radio" name="' + esc(name) + '" value="' + i + '">' +
          '<span lang="it">' + esc(o) + "</span></label>";
      }).join("") + "</div>" +
      /* The feedback before the button: the correction is what the student
         reads next, and below "next" it was read after moving on. */
      '<div class="fb" role="status"></div>' +
      '<div style="margin-top:14px"><button class="btn btn--primary js-check">' + esc(t("ex.check")) + "</button>" +
      '<button class="btn btn--primary js-next" hidden>' + esc(t("today.next")) + "</button></div></div>";

    var labels = host.querySelectorAll(".opt");
    var check = host.querySelector(".js-check");
    var next = host.querySelector(".js-next");
    var fb = host.querySelector(".fb");
    var ok = false;
    host.querySelector("input").focus();

    labels.forEach(function (l) {
      l.addEventListener("click", function () {
        labels.forEach(function (x) { x.classList.remove("is-sel"); });
        l.classList.add("is-sel");
      });
    });

    check.addEventListener("click", function () {
      var sel = host.querySelector("input:checked");
      if (!sel) { Core.toast(t("ex.pickOne")); return; }
      ok = options[parseInt(sel.value, 10)] === c.it;
      labels.forEach(function (l) {
        var o = options[parseInt(l.getAttribute("data-i"), 10)];
        if (o === c.it) l.classList.add("is-ok");
        else if (l.contains(sel)) l.classList.add("is-ko");
        l.querySelector("input").disabled = true;
      });
      fb.className = "fb is-on " + (ok ? "fb--ok" : "fb--ko");
      fb.innerHTML = esc(t(ok ? "srs.right" : "srs.wrong")) + ' <b lang="it">' + esc(c.it) + "</b>";
      Audio2.speak(c.it);
      check.hidden = true;
      next.hidden = false;
      next.focus();
    });

    /* The same held-key guard as the grades: Enter on "check" moves the
       focus here, and a repeat would skip the feedback it just showed. */
    next.addEventListener("keydown", function (e) { if (e.repeat) e.preventDefault(); });
    next.addEventListener("click", function () {
      onGrade(global.FlashRules.gradeFor("choice", ok, null), ok);
    });
  }

  global.FlashCards = { write: write, flip: flip, choice: choice };

})(window);
