/* ============================================================
   views.js — the screen shell: mounting into #main and the shared HTML pieces.

   This used to be a file with eight screens at once. Each of them now
   lives in its own views-*.js, the way conversations, training and the
   daily session have for a long time. What is left here is what they all
   share — plus `runCards`, the flashcard deck run used by two screens
   (reviews and the daily session).

   `Views.shell` is created at the END of this file, so all the screen
   modules must load after it. The order among them does not matter: each
   adds its own route to `Views` and reads none of the others.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var Views = {};
  var mount = null;

  function el() { return mount || (mount = document.getElementById("main")); }

  function set(html) {
    var m = el();
    m.innerHTML = html;
    Ex.wireSpeakers(m);
    wireGuide(m);
    m.scrollTop = 0;
    global.scrollTo(0, 0);
    return m;
  }

  /**
   * A "how does this work" link to a specific section of the guide.
   *
   * The screen inserts it, `set` wires it up — just like the speakers. A
   * screen that had to remember to attach the event would sooner or later
   * forget, and the result would look like a working button that does
   * nothing. That is, incidentally, why the guide is a route and not a
   * dialog: you cannot link into a dialog from the screen it is about.
   */
  function guideLink(sekcja) {
    return '<p class="guide-link"><button class="btn btn--quiet js-guide-link" data-sekcja="' +
      esc(sekcja) + '">' + esc(t("guide.more")) + "</button></p>";
  }

  function wireGuide(root) {
    root.querySelectorAll(".js-guide-link").forEach(function (b) {
      b.addEventListener("click", function () {
        global.App.go("guida", { s: b.getAttribute("data-sekcja") });
      });
    });
  }

  function pageHead(kicker, title, sub) {
    return '<header class="view-head">' +
      (kicker ? '<p class="view-head__kicker">' + esc(kicker) + "</p>" : "") +
      "<h1>" + esc(title) + "</h1>" +
      (sub ? "<p>" + esc(sub) + "</p>" : "") + "</header>";
  }

  function pct(n) { return Math.round(n * 100); }

  function empty(title, hint) {
    return '<div class="empty"><h3>' + title + "</h3>" + (hint ? "<p>" + hint + "</p>" : "") + "</div>";
  }

  /**
   * The flashcard deck run inside a given container.
   *
   * Split out of the Reviews tab, because the daily session
   * (views-today.js) needs the same run. Without it the session would end
   * by sending the student somewhere else, which is the very thing it is
   * there to prevent.
   *
   * onFinish(right, total) decides what to show at the end: the tab shows
   * a deck summary, the daily session moves on to the next part.
   */
  function runCards(box, due, onFinish) {
    var i = 0, right = 0;
    function card() {
      if (i >= due.length) { onFinish(right, due.length); return; }
      var c = due[i];
      box.innerHTML = '<div class="exq">' +
        '<p class="exq__num">' + esc(t("srs.cardOf", { i: i + 1, n: due.length })) + "</p>" +
        '<p class="exq__prompt" style="font-size:1.3rem">' + esc(Core.cardTr(c)) + "</p>" +
        '<p class="exq__sub">' + t("srs.howInItalian") + "</p>" +
        '<div class="field-row"><input type="text" class="field js-in" placeholder="' + esc(t("srs.ph")) + '" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-show">' + t("ex.check") + "</button></div>" +
        '<div class="fb" role="status"></div>' +
        '<div class="js-grade" style="margin-top:14px;display:none;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn--ghost btn--sm" data-q="0">' + t("srs.grade0") + "</button>" +
        '<button class="btn btn--ghost btn--sm" data-q="3">' + t("srs.grade3") + "</button>" +
        '<button class="btn btn--green btn--sm" data-q="4">' + t("srs.grade4") + "</button>" +
        '<button class="btn btn--green btn--sm" data-q="5">' + t("srs.grade5") + "</button></div></div>";

      var input = box.querySelector(".js-in");
      var fb = box.querySelector(".fb");
      var grade = box.querySelector(".js-grade");
      input.focus();

      function reveal() {
        var res = Core.checkOpen(input.value, [c.it], false);
        fb.className = "fb is-on " + (res.ok ? "fb--ok" : "fb--ko");
        fb.innerHTML = t(res.ok ? "srs.right" : "srs.wrong") + " <b>" + esc(c.it) + "</b>" +
          ' <button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button>';
        Ex.wireSpeakers(fb);
        Audio2.speak(c.it);
        grade.style.display = "flex";
        box.querySelector(".js-show").disabled = true;
        input.disabled = true;
        if (res.ok) right++;
      }
      box.querySelector(".js-show").addEventListener("click", reveal);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") reveal(); });

      grade.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          Core.gradeCard(c.key, parseInt(b.getAttribute("data-q"), 10));
          i++; card();
        });
      });
    }
    card();
  }

  /**
   * The view shell, exposed for the modules that add routes of their own
   * (views-train.js). Without it such a module would have to repeat
   * set/pageHead/el locally — three copies of the same thing, drifting
   * apart at the first change to the header.
   */
  Views.shell = { set: set, head: pageHead, root: el, empty: empty, pct: pct,
                  runCards: runCards, guideLink: guideLink };

  global.Views = Views;

})(window);
