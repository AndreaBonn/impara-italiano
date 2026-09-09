/* ============================================================
   views-falsi.js — fałszywi przyjaciele w twoim języku.

   To jest miejsce, w którym kurs robi coś, czego kurs uniwersalny zrobić
   nie może: mówi, gdzie TWÓJ język cię zdradzi. Polak czyta „firma" i
   widzi przedsiębiorstwo, Hiszpan czyta „burro" i widzi osła, a Anglik
   pisze „eventualmente" myśląc, że powiedział „w końcu". To nie są te
   same trzy uwagi w trzech tłumaczeniach.

   Dlatego lista JEST krótsza w jednym języku niż w drugim i tak ma być:
   pułapka istnieje albo nie istnieje, zależnie od tego, co uczeń ma w
   głowie. Widok pokazuje wyłącznie wpisy, których `for` wymienia bieżący
   język, i mówi wprost, ile ich jest.

   Ćwiczenie korzysta z istniejącego typu `mcq` — żadnego nowego wpisu w
   EX_TYPES, żadnej nowej ścieżki w silniku, żadnego nowego miejsca, w
   którym `onDone` może zostać zawołane dwa razy.

   Skrypt klasyczny. Wymaga core.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** Wpisy pertynentne dla bieżącego języka: te, które mają wyjaśnienie. */
  function moje() {
    return (global.INTERFERENCE || []).filter(function (v) { return v.why; });
  }

  Views.falsi = function (params) {
    var lista = moje();
    if (!lista.length) { set(Views.shell.empty(t("fa.none"), t("fa.noneHint"))); return; }
    if (params && params.mode === "quiz") return quiz(lista);

    set(pageHead(t("fa.kicker"), t("fa.title"), t("fa.intro", { n: lista.length })) +
      '<div style="margin-bottom:20px"><button class="btn btn--primary js-quiz">' +
      esc(t("fa.startQuiz")) + "</button></div>" +
      '<div class="stack">' + lista.map(karta).join("") + "</div>");

    /* Napisy z nakładki przez textContent: to zdania pisane pod język, a nie
       znaczniki, i nie ma powodu wpuszczać ich do DOM jako HTML. */
    el().querySelectorAll(".fa-card").forEach(function (node, i) {
      var v = lista[i];
      node.querySelector(".js-looks").textContent = v.looks;
      node.querySelector(".js-mean").textContent = v.mean;
      node.querySelector(".js-why").textContent = v.why;
    });
    Ex.wireSpeakers(el());
    el().querySelector(".js-quiz").addEventListener("click", function () {
      App.go("falsi", { mode: "quiz" });
    });
  };

  function karta(v) {
    return '<div class="card fa-card" style="margin:0">' +
      '<div class="fa-head"><b class="fa-it">' + esc(v.it) + "</b>" +
      '<button type="button" class="say-btn" data-say="' + esc(v.it) + '" aria-label="' +
      esc(t("a11y.listenTo", { what: v.it })) + '">🔊</button></div>' +
      '<p class="fa-line"><span class="fa-tag fa-tag--no">' + esc(t("fa.looksLike")) + "</span>" +
      '<span class="js-looks"></span></p>' +
      '<p class="fa-line"><span class="fa-tag fa-tag--yes">' + esc(t("fa.actually")) + "</span>" +
      '<span class="js-mean"></span></p>' +
      '<p class="fa-why js-why"></p>' +
      '<p class="fa-ex">' + esc(v.ex) +
      ' <button type="button" class="say-btn" data-say="' + esc(v.ex) + '" aria-label="' +
      esc(t("a11y.listenTo", { what: v.ex })) + '">🔊</button></p>' +
      "</div>";
  }

  /* ---------------- Ćwiczenie ----------------
     Typ `mcq`, budowany w locie: pytanie „co znaczy naprawdę", trzy
     odpowiedzi, z których jedna to znaczenie prawdziwe, a jedna to
     dokładnie ta pułapka, w którą uczeń wpada. Dystraktor wzięty z innego
     wpisu nie uczyłby niczego: chodzi o to, żeby wybrać MIĘDZY nimi.
     ------------------------------------------------------------------- */

  function quiz(lista) {
    var pytania = Core.seededShuffle(lista.slice(), "fa-" + Core.today()).slice(0, 10);
    var i = 0, dobre = 0;

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' +
      esc(t("fa.backToList")) + "</button>" +
      pageHead(t("fa.kicker"), t("fa.quizTitle"), t("fa.quizIntro")) +
      '<div id="faBox"></div>');

    el().querySelector(".js-back").addEventListener("click", function () { App.go("falsi"); });
    krok();

    function krok() {
      var box = document.getElementById("faBox");
      if (i >= pytania.length) return koniec(box);

      var v = pytania[i];
      var trzeci = pytania[(i + 1) % pytania.length];
      var ex = {
        t: "mcq",
        q: esc(t("fa.qWhat", { word: v.it })),
        opts: [esc(v.mean), esc(v.looks), esc(trzeci.mean || trzeci.looks)],
        a: 0,
        why: esc(v.why),
        say: v.it
      };
      var zbudowane = Ex.build(ex, i, "falsi-" + v.id);
      box.innerHTML = '<p class="exq__num">' + esc(t("fa.progress", { i: i + 1, n: pytania.length })) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--primary js-next" hidden>' +
        esc(t("fa.next")) + "</button></div>";

      var next = box.querySelector(".js-next");
      /* onDone dokładnie raz: przycisk „dalej" pokazujemy w callbacku i
         nie wołamy stąd niczego, co mogłoby go wywołać po raz drugi. */
      zbudowane.wire(box.querySelector(".exq"), function (ok) {
        if (ok) dobre++;
        next.hidden = false;
        next.focus();
      });
      Ex.wireSpeakers(box);
      next.addEventListener("click", function () { i++; krok(); });
    }

    function koniec(box) {
      box.innerHTML = '<div class="card"><h3 style="margin-bottom:8px">' +
        esc(t("fa.done", { hit: dobre, n: pytania.length })) + "</h3>" +
        '<button class="btn btn--ghost btn--sm js-again">' + esc(t("fa.again")) + "</button></div>";
      box.querySelector(".js-again").addEventListener("click", function () { App.go("falsi"); });
    }
  }

})(window);
