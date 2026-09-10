/* ============================================================
   search.js — searching the whole course.

   "Where did I see that word?" had no answer until now: you could only
   search your own dictionary. Here we search lesson titles, vocabulary,
   grammar entries and conversations.

   Levels are pulled at first use, not at startup: an index built ahead of
   time would have to live in a fifth file next to the four overlays and
   would drift away from them with no gate to notice.

   Security: the student's query NEVER reaches finished HTML. Highlighting
   cuts the text into pieces, each piece goes through esc() separately, and
   only then do we join them — replacing a hit inside an already assembled
   string would be an injection.

   Classic script. Requires core.js, i18n.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  var LIMIT = 60;

  /**
   * CHARACTER-FOR-CHARACTER normalization: lower case and accents removed,
   * whitespace untouched.
   *
   * Core.norm() also collapses whitespace, so "un  caffè" gets one character
   * shorter and the position of a hit stops pointing at the same place in
   * the source text: the highlight would cut at the wrong point. Here the
   * length has to match, because we slice one string by indexes taken from
   * another.
   */
  var fold = Core.fold;

  /**
   * Highlighting without injection.
   *
   * We cut the text into pieces, each goes through esc() separately and
   * only then are they joined. Replacing a hit inside ALREADY assembled
   * HTML would be the road by which the student's query enters the document
   * as markup.
   */
  function highlight(text, query) {
    var src = String(text == null ? "" : text);
    var q = fold(query).trim();
    if (!q) return esc(src);

    var hay = fold(src);
    var out = "", from = 0, at;
    while ((at = hay.indexOf(q, from)) >= 0) {
      out += esc(src.slice(from, at)) + "<mark>" + esc(src.slice(at, at + q.length)) + "</mark>";
      from = at + q.length;
    }
    return out + esc(src.slice(from));
  }

  function matches(text, q) {
    return text && fold(text).indexOf(q) >= 0;
  }

  /** Walks everything that is in memory and collects the hits. */
  function collect(query) {
    var q = fold(query).trim();
    if (q.length < 2) return [];
    var out = [];

    Core.registry.levels.forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).concat(u.test ? [u.test] : []).forEach(function (l) {
          if (matches(l.titleIt, q) || matches(l.title, q)) {
            out.push({ kind: "lesson", id: l.id, main: l.title || l.titleIt, sub: l.titleIt, level: lv.code });
          }
          (l.vocab || []).forEach(function (v) {
            if (matches(v.it, q) || matches(v.tr, q)) {
              out.push({ kind: "vocab", id: l.id, main: v.it, sub: v.tr, level: lv.code });
            }
          });
        });
      });
    });

    (global.GRAMMAR_REF || []).forEach(function (sec) {
      (sec.items || []).forEach(function (it) {
        if (matches(it.title, q) || matches(it.sub, q)) {
          out.push({ kind: "grammar", id: it.id, main: it.title, sub: it.sub || "", level: it.cefr });
        }
      });
    });

    (global.CONVERSATIONS || []).forEach(function (c) {
      if (matches(c.titleIt, q) || matches(c.title, q)) {
        out.push({ kind: "talk", id: c.id, main: c.title || c.titleIt, sub: c.titleIt, level: c.cefr });
      }
    });

    return out.slice(0, LIMIT);
  }

  /* A query shorter than two characters is not searched at all. Without a
     message of its own it looked like "there is nothing", that is like an
     answer to a question nobody asked. */
  function zaKrotkie(q) { return fold(q || "").trim().length < 2; }

  var KIND_ROUTE = { lesson: "lezione", vocab: "lezione", grammar: "grammatica", talk: "conversazione" };

  function render(query) {
    var wyniki = collect(query);
    var lista = wyniki.length
      ? '<div class="stack">' + wyniki.map(function (r) {
        return '<button type="button" class="list-row js-hit" data-kind="' + esc(r.kind) +
          '" data-id="' + esc(r.id) + '" style="width:100%;text-align:left;border:0;font:inherit;cursor:pointer">' +
          '<span class="chip chip--cefr">' + esc(r.level || "") + "</span>" +
          '<span class="list-row__main"><b>' + highlight(r.main, query) + "</b>" +
          "<span>" + highlight(r.sub, query) + "</span></span>" +
          '<span class="chip">' + esc(t("search.kind." + r.kind)) + "</span></button>";
      }).join("") + "</div>"
      : '<div class="empty"><h3>' + esc(t(zaKrotkie(query) ? "search.tooShortTitle" : "search.noneTitle")) + "</h3><p>" +
        esc(t(zaKrotkie(query) ? "search.tooShortText" : "search.noneText")) + "</p></div>";

    document.getElementById("searchBody").innerHTML =
      '<p class="exq__sub" style="margin-bottom:14px">' +
      esc(t("search.count", { n: wyniki.length })) + "</p>" + lista;

    document.querySelectorAll(".js-hit").forEach(function (b) {
      b.addEventListener("click", function () {
        var kind = b.getAttribute("data-kind");
        App.go(KIND_ROUTE[kind], kind === "grammar" ? {} : { id: b.getAttribute("data-id") });
      });
    });
  }

  Views.cerca = function (params) {
    var query = (params && params.q) || "";

    set(pageHead(t("search.kicker"), t("search.title"), t("search.intro")) +
      '<div class="field-row" style="margin-bottom:18px">' +
      '<label for="searchQ" class="sr-only">' + esc(t("search.label")) + "</label>" +
      '<input id="searchQ" type="search" class="field js-q" value="' + esc(query) +
      '" placeholder="' + esc(t("search.ph")) + '" autocomplete="off" spellcheck="false">' +
      '<button class="btn btn--primary js-go">' + esc(t("search.go")) + "</button></div>" +
      '<div id="searchBody"></div>');

    var input = document.querySelector(".js-q");
    function uruchom() { App.go("cerca", { q: input.value }); }
    document.querySelector(".js-go").addEventListener("click", uruchom);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") uruchom(); });
    /* Whoever comes here wants to type: the focus stays in the field, not on the container. */
    Views.keepFocus = true;
    input.focus();

    /* We look for hits only in what is loaded; the missing levels are pulled
       once and then we render again. */
    var brakujace = Core.registry.levels.filter(function (lv) { return !Core.registry.loaded[lv.code]; });
    render(query);
    if (query && brakujace.length) {
      var zostalo = brakujace.length;
      var nieudane = [];
      brakujace.forEach(function (lv) {
        Core.loadLevelData(lv.code, function (got) {
          /* `got` says whether the level really loaded. Ignored, it produced
             incomplete results without a word: the student would see
             "nothing found" where the truth was "I did not finish loading
             half the course". */
          if (!got) nieudane.push(lv.code);
          if (--zostalo === 0) {
            render(query);
            if (nieudane.length) Core.toast(t("search.partial", { levels: nieudane.join(", ") }));
          }
        });
      });
    }
  };

  global.Search = { collect: collect, highlight: highlight };

})(window);
