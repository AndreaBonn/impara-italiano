/* ============================================================
   views-grammar.js — gramatyka jako encyklopedia do przeglądania.

   Ekran wydzielony z views.js, w którym leżało osiem ekranów naraz.
   Wzorzec jest ten sam, którym chodzą już views-talk.js, views-train.js
   i views-today.js: skorupa (set, pageHead, el, empty) przychodzi z
   `Views.shell`, a plik dokłada własną trasę do `Views`.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  /* ═══════════════════════════════════════════════════════════
     GRAMATYKA (encyklopedia)
     ═══════════════════════════════════════════════════════════ */
  Views.grammatica = function (params) {
    var ref = global.GRAMMAR_REF || [];
    if (params && params.id) {
      var a = null;
      ref.forEach(function (sec) { (sec.items || []).forEach(function (it) { if (it.id === params.id) a = { sec: sec, it: it }; }); });
      if (a) {
        set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' + t("gram.backToIndex") + "</button>" +
          pageHead(a.sec.title + " · " + a.it.cefr, a.it.title, a.it.sub || "") +
          '<div class="card"><div class="prose">' + a.it.body + "</div></div>");
        el().querySelector(".js-back").addEventListener("click", function () { App.go("grammatica"); });
        return;
      }
    }

    set(pageHead(t("gram.kicker"), t("gram.title"), t("gram.intro")) +
      ref.map(function (sec) {
        return '<section style="margin-bottom:30px"><h2 style="font-size:1.24rem;margin-bottom:12px">' + esc(sec.title) + "</h2>" +
          '<div class="stack">' + (sec.items || []).map(function (it) {
            return '<button class="list-row" data-gram="' + esc(it.id) + '" style="text-align:left;cursor:pointer;width:100%">' +
              '<span class="chip chip--cefr">' + esc(it.cefr) + "</span>" +
              '<span class="list-row__main"><b>' + esc(it.title) + "</b><span>" + esc(it.sub || "") + "</span></span>" +
              "<span aria-hidden=\"true\">→</span></button>";
          }).join("") + "</div></section>";
      }).join(""));

    el().querySelectorAll("[data-gram]").forEach(function (b) {
      b.addEventListener("click", function () { App.go("grammatica", { id: b.getAttribute("data-gram") }); });
    });
  };
})(window);
