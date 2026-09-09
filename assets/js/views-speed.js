/* ============================================================
   views-speed.js — zrozumieć, kiedy nikt nie zwalnia.

   CO TU JEST, A CZEGO NIE MA, i dlaczego. Ta faza miała uczyć mowy
   łączonej: raddoppiamento, elizji, asymilacji. Bramka `check_connected.py`
   nie rozstrzygnęła, czy lektor te zjawiska w ogóle realizuje — cztery
   wersje miary, żadna nie oddzieliła „zrealizowane" od „inna treść".
   Napisanie ćwiczeń o podwojeniu, którego może w nagraniu nie być, dałoby
   zadania bez poprawnej odpowiedzi; kurs ma już taki precedens i wtedy
   zbiór po prostu nie powstał.

   Zostaje więc to, co da się zweryfikować bez pomiaru akustycznego:
   TEMPO. Nie jest to namiastka. „Rozumiem, kiedy czytają wolno" to
   dokładnie ten poziom, na którym staje większość uczących się, i różnica
   między 0,75 a 1,25 jest słyszalna dla każdego, bez żadnej analizy widma.

   Zdanie leci NAJPIERW w tempie naturalnym, a spowolnienie jest osobnym
   przyciskiem. Odwrotna kolejność — wolno, potem normalnie — uczy słuchać
   wolnego włoskiego, którego nikt poza kursem nie mówi.

   Skrypt klasyczny. Wymaga core.js, audio.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /* Trzy tempa. 1 jest pierwsze i domyślne; 0,75 to nie „dla początkujących",
     tylko koło ratunkowe, a 1,25 jest tam, bo prawdziwa rozmowa bywa szybsza
     niż lektor i to też trzeba kiedyś usłyszeć. */
  var TEMPA = [
    { r: 1, key: "sp.normal" },
    { r: 0.75, key: "sp.slow" },
    { r: 1.25, key: "sp.fast" }
  ];

  function zdania() {
    var out = [];
    (global.READINGS || []).forEach(function (r) {
      (r.sentences || []).forEach(function (s) {
        if (Audio2.hasNatural(s)) out.push({ it: s, cefr: r.cefr, src: r.id });
      });
    });
    return out;
  }

  var lista = [];
  var i = 0;
  var potrzebowalWolniej = false;

  Views.velocita = function () {
    lista = zdania();
    if (!lista.length) { set(Views.shell.empty(t("sp.noSentences"))); return; }
    i = 0;
    rysuj();
  };

  function rysuj() {
    potrzebowalWolniej = false;

    set(pageHead(t("sp.kicker"), t("sp.title"), t("sp.intro")) +
      '<div class="card">' +
      '<p class="sp-num js-num"></p>' +
      '<div class="sp-row">' +
      TEMPA.map(function (x, n) {
        return '<button class="btn ' + (n === 0 ? "btn--green" : "btn--ghost btn--sm") +
          ' js-play" data-rate="' + x.r + '">' + esc(t(x.key)) + "</button>";
      }).join("") + "</div>" +
      '<p class="sp-state js-state" role="status" aria-live="polite"></p>' +
      '<div class="sp-reveal">' +
      '<button class="btn btn--primary btn--sm js-reveal">' + esc(t("sp.reveal")) + "</button>" +
      '<p class="sp-it js-it" hidden></p></div>' +
      '<div class="sp-row" style="margin-top:16px">' +
      '<button class="btn btn--ghost btn--sm js-next">' + esc(t("sp.next")) + "</button>" +
      "</div></div>");

    el().querySelector(".js-num").textContent = t("sp.progress", { i: i + 1, n: lista.length });

    el().querySelectorAll(".js-play").forEach(function (b) {
      b.addEventListener("click", function () {
        var r = parseFloat(b.getAttribute("data-rate"));
        if (r < 1) potrzebowalWolniej = true;
        Audio2.speak(lista[i].it, {
          rate: r,
          onstart: function () { stan(t("sp.statePlaying", { r: r })); },
          onend: function () { stan(""); }
        });
      });
    });

    el().querySelector(".js-reveal").addEventListener("click", function () {
      var p = el().querySelector(".js-it");
      p.textContent = lista[i].it;
      p.hidden = false;
      /* Informacja zwrotna bez oceny: mówimy, CO się stało, nie czy dobrze.
         Ucho i tak wie; liczba by tu tylko kłamała. */
      stan(t(potrzebowalWolniej ? "sp.usedSlow" : "sp.fullSpeed"));
    });

    el().querySelector(".js-next").addEventListener("click", function () {
      i = (i + 1) % lista.length;
      Audio2.stop();
      rysuj();
    });
  }

  function stan(txt) {
    var s = el().querySelector(".js-state");
    if (s) s.textContent = txt;
  }

})(window);
