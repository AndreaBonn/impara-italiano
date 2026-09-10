/* ============================================================
   views-guide.js — how to use the course.

   A route, not a modal dialog. The reason is practical, not aesthetic: a
   dialog has no address, so you cannot link into it from the screen it is
   about ("how the exam works ->"), and a student who closes it has no way
   back other than the same button. A route has an address, sits in
   PRECACHE like everything else and opens at a given section:
   #/guida?s=esame.

   The screen names are NOT rewritten here: they come from the `nav.*`,
   `sound.title`, `read.title`, `write.title` and `search.title` keys, that
   is from the same strings the student sees in the rail. A separately
   written name would drift away from the rail at the first change and
   nobody would notice — and this is the page whose job is to say where
   things are.

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

  /* The sections in reading order: from "I do not know what to click" to
     the things a student only asks about after a month (the backup). */
  var SEKCJE = [
    { id: "inizio", akapity: 2, doTestu: true },
    { id: "ordine", akapity: 2 },
    { id: "lezione", akapity: 3 },
    { id: "oggi", akapity: 2 },
    { id: "ripasso", akapity: 3 },
    { id: "esame", akapity: 2 },
    { id: "mappa", akapity: 1, mapa: true },
    { id: "backup", akapity: 2 },
    { id: "bloccato", akapity: 2 }
  ];

  /* The course map: the route, the name key (the same as in the rail) and a
     description. The order follows the rail, with four screens at the end
     that are not in the rail — because those are exactly the ones the
     student will not find on their own. */
  var EKRANY = [
    ["oggi", "nav.today"], ["percorso", "nav.path"], ["ripasso", "nav.review"],
    ["allenamento", "nav.train"], ["conversazione", "nav.talk"], ["grammatica", "nav.grammar"],
    ["coniugatore", "nav.verbs"], ["lessico", "nav.lexicon"], ["shadowing", "nav.shadow"],
    ["velocita", "nav.speed"], ["esame", "nav.exam"], ["falsi", "nav.falsi"],
    ["copertura", "nav.coverage"], ["progressi", "nav.progress"], ["impostazioni", "nav.settings"],
    ["suoni", "sound.title"], ["lettura", "read.title"], ["scrittura", "write.title"],
    ["cerca", "search.title"], ["privacy", "privacy.title"]
  ];

  function akapity(id, ile) {
    var out = "";
    for (var i = 1; i <= ile; i++) out += "<p>" + esc(t("guide." + id + ".p" + i)) + "</p>";
    return out;
  }

  function mapaKursu() {
    return '<div class="stack" style="margin-top:14px">' + EKRANY.map(function (e) {
      return '<div class="list-row list-row--stack"><span class="list-row__main">' +
        "<b>" + esc(t(e[1])) + "</b><span>" + esc(t("guide.s." + e[0])) + "</span></span>" +
        '<button class="btn btn--ghost btn--sm js-goto" data-route="' + esc(e[0]) + '">' +
        esc(t("guide.open")) + "</button></div>";
    }).join("") + "</div>";
  }

  function sekcja(s) {
    var tresc = akapity(s.id, s.akapity) +
      (s.mapa ? mapaKursu() : "") +
      (s.doTestu ? '<button class="btn btn--ghost btn--sm js-place" style="margin-top:6px">' +
        esc(t("place.start")) + "</button>" : "");
    return '<section class="card guide-sec" id="g-' + s.id + '" style="margin-bottom:18px">' +
      "<h3>" + esc(t("guide." + s.id + ".h")) + "</h3>" + tresc + "</section>";
  }

  function spis() {
    return '<nav class="guide-toc" aria-label="' + esc(t("guide.tocLabel")) + '">' +
      SEKCJE.map(function (s) {
        return '<button class="btn btn--quiet js-toc" data-sekcja="' + esc(s.id) + '">' +
          esc(t("guide." + s.id + ".h")) + "</button>";
      }).join("") + "</nav>";
  }

  Views.guida = function (params) {
    set(pageHead(t("guide.kicker"), t("guide.title"), t("guide.intro")) +
      spis() + SEKCJE.map(sekcja).join(""));

    el().querySelectorAll(".js-toc").forEach(function (b) {
      b.addEventListener("click", function () { doSekcji(b.getAttribute("data-sekcja")); });
    });
    el().querySelectorAll(".js-goto").forEach(function (b) {
      b.addEventListener("click", function () { App.go(b.getAttribute("data-route")); });
    });
    el().querySelector(".js-place").addEventListener("click", function () { App.go("piazzamento"); });

    /* Arriving with a section address (#/guida?s=esame) sets the focus
       itself, so it raises `keepFocus` — otherwise the router would move it
       to the content container right after rendering and a screen reader
       would start from the top of the page, that is from the very thing the
       link was meant to spare it.

       The flag is raised ONLY once a section is actually hit. An address
       with a name that does not exist (an old bookmark, a renamed section)
       sets the focus nowhere, so a flag raised earlier would take it away
       from the router too and the reader would stay where it was before the
       move — exactly the failure this code was meant to prevent, only
       silently. */
    if (params && params.s && doSekcji(params.s)) Views.keepFocus = true;
  };

  /**
   * Scrolling to a section, without touching the address.
   *
   * The focus travels with the scroll: scrolling alone moves the picture,
   * but a screen reader stays where it was, so a click in the table of
   * contents would do absolutely nothing for it.
   *
   * Returns whether the section was found — `keepFocus` above rests on that.
   */
  function doSekcji(id) {
    var cel = el().querySelector("#g-" + CSS.escape(id));
    if (!cel) return false;
    cel.setAttribute("tabindex", "-1");
    cel.scrollIntoView({ block: "start" });
    cel.focus({ preventScroll: true });
    return true;
  }
})();
