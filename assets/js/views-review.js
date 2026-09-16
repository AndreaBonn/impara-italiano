/* ============================================================
   views-review.js — reviews: the flashcard deck and the mistake notebook.

   A screen split out of views.js, which held eight screens at once. The
   pattern is the same one views-talk.js, views-train.js and views-today.js
   already use: the shell (set, pageHead, el, empty) comes from
   `Views.shell`, and the file adds a route of its own to `Views`.

   It loads AFTER views.js, because `Views.shell` is created at the end of
   that file.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var empty = Views.shell.empty;
  var runCards = Views.shell.runCards;
  /* ═══════════════════════════════════════════════════════════
     REVIEWS (SRS)
     ═══════════════════════════════════════════════════════════ */
  /**
   * Reviews have two tabs: the vocabulary flashcards and the mistake
   * notebook. The tab sits in the address (`#/ripasso?tab=errori`), so it
   * can be returned to and linked; state in a module variable would be lost
   * on every move to another route.
   */
  Views.ripasso = function (params) {
    var tab = (params && params.tab) === "errori" ? "errori" : "carte";
    var nCards = Core.dueCards().length;
    var nErr = Errors.dueCount();

    function zakladka(id, label, n) {
      return '<button type="button" class="tab js-tab" data-tab="' + id + '"' +
        (tab === id ? ' aria-current="true"' : "") + ">" + esc(label) +
        (n ? ' <span class="tab__n">' + n + "</span>" : "") + "</button>";
    }

    set(pageHead(t("nav.review"), t("review.title"), t("review.intro")) +
      Views.shell.guideLink("ripasso") +
      '<div class="tabs" role="group" aria-label="' + esc(t("review.tabsLabel")) + '">' +
      zakladka("carte", t("review.tabCards"), nCards) +
      zakladka("errori", t("review.tabErrors"), nErr) +
      '</div><div id="ripassoBody"></div>');

    el().querySelectorAll(".js-tab").forEach(function (b) {
      b.addEventListener("click", function () {
        App.go("ripasso", { tab: b.getAttribute("data-tab") });
      });
    });

    var body = document.getElementById("ripassoBody");
    if (tab === "errori") Train.errorPanel(body);
    else fiszki(body);
  };

  /** The flashcard tab: what Reviews used to be until now. */
  function fiszki(host) {
    var due = Core.dueCards(30);
    if (!due.length) {
      var total = Object.keys(Core.state.srs).length;
      host.innerHTML = '<p class="exq__sub" style="margin-bottom:14px">' +
        esc(total ? t("srs.allResting", { n: total }) : t("srs.deckEmpty")) + "</p>" +
        empty(t("srs.howTitle"), t("srs.howText")) +
        /* Nothing due is exactly when five minutes has something to offer:
           new words from the lessons, which this tab does not draw from. */
        '<button class="btn btn--ghost js-flash">' + esc(t("flash.tryIt")) + "</button>";
      host.querySelector(".js-flash").addEventListener("click", function () { App.go("cinque"); });
      return;
    }

    host.innerHTML = '<p class="exq__sub" style="margin-bottom:14px">' +
      esc(t("srs.dueToday", { n: due.length })) + " · " + esc(t("srs.gradeHonestly")) + "</p>" +
      '<div id="srsBox"></div>';

    runCards(document.getElementById("srsBox"), due, function (right, total) {
      var box = document.getElementById("srsBox");
      box.innerHTML = '<div class="summary"><div class="summary__score">' + right + "/" + total + "</div>" +
        '<p class="summary__msg">' + t("srs.sessionDone") + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-more">' + t("srs.nextBatch") + "</button>" +
        '<button class="btn btn--ghost js-path">' + t("nav.path") + "</button></div></div>";
      box.querySelector(".js-more").addEventListener("click", function () { App.go("ripasso"); });
      box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      App.refreshRail();
    });
  }
})();
