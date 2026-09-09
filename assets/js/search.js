/* ============================================================
   search.js — szukanie w całym kursie.

   „Gdzie ja widziałem to słowo?" nie miało dotąd odpowiedzi:
   szukać dało się tylko we własnym słowniku. Tutaj przeszukiwane
   są tytuły lekcji, słownictwo, hasła gramatyczne i rozmowy.

   Poziomy dociągane są przy pierwszym użyciu, nie przy starcie:
   indeks zbudowany z góry musiałby żyć w piątym pliku obok czterech
   nakładek i rozjeżdżać się z nimi bez żadnego gate, który by to
   zauważył.

   Bezpieczeństwo: zapytanie ucznia NIGDY nie trafia do gotowego
   HTML-a. Podświetlenie tnie tekst na kawałki, każdy kawałek
   przechodzi przez esc() osobno, i dopiero potem sklejamy —
   zamiana znaleziska w złożonym już napisie byłaby wstrzyknięciem.

   Skrypt klasyczny. Wymaga core.js, i18n.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  var LIMIT = 60;

  /**
   * Normalizacja ZNAK W ZNAK: małe litery i zdjęte akcenty, bez ruszania
   * odstępów.
   *
   * Core.norm() zwęża też białe znaki, więc „un  caffè" skraca się o jeden
   * znak i pozycja trafienia przestaje wskazywać to samo miejsce w tekście
   * źródłowym: podświetlenie ucinałoby w złym punkcie. Tu długość musi się
   * zgadzać, bo po indeksach z jednego napisu tniemy drugi.
   */
  var fold = Core.fold;

  /**
   * Podświetlenie bez wstrzyknięcia.
   *
   * Tekst tniemy na kawałki, każdy przechodzi przez esc() osobno i dopiero
   * potem sklejamy. Zamiana znaleziska w JUŻ złożonym HTML-u byłaby drogą,
   * którą zapytanie ucznia wchodzi do dokumentu jako znaczniki.
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

  /** Przechodzi wszystko, co jest w pamięci, i zbiera trafienia. */
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
      : '<div class="empty"><h3>' + esc(t("search.noneTitle")) + "</h3><p>" +
        esc(t("search.noneText")) + "</p></div>";

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
    /* Kto tu wchodzi, chce pisać: fokus zostaje w polu, a nie na kontenerze. */
    Views.keepFocus = true;
    input.focus();

    /* Trafienia szukamy tylko w tym, co jest wczytane; brakujące poziomy
       dociągamy raz, po czym rysujemy ponownie. */
    var brakujace = Core.registry.levels.filter(function (lv) { return !Core.registry.loaded[lv.code]; });
    render(query);
    if (query && brakujace.length) {
      var zostalo = brakujace.length;
      brakujace.forEach(function (lv) {
        Core.loadLevelData(lv.code, function () { if (--zostalo === 0) render(query); });
      });
    }
  };

  global.Search = { collect: collect, highlight: highlight };

})(window);
