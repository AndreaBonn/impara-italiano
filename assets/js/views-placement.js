/* ============================================================
   views-placement.js — widok testu poziomującego.

   Wynik NIE zapisuje się sam. Zaliczenie lekcji niższych poziomów
   jest zmianą, której uczeń nie cofnie jednym kliknięciem, więc test
   proponuje, a decyzję zostawia jemu — razem z liczbą lekcji, które
   zniknęłyby ze ścieżki.

   Skrypt klasyczny. Wymaga core.js, placement.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  Views.piazzamento = function (params) {
    if (params && params.go === "1") return start();

    var poprzedni = Core.state.placement;
    set(pageHead(t("place.kicker"), t("place.title"), t("place.intro")) +
      (poprzedni
        ? '<div class="card" style="margin-bottom:18px"><p>' +
          esc(t("place.previous", { level: poprzedni.level, n: poprzedni.marked || 0 })) + "</p></div>"
        : "") +
      '<div class="card" style="margin-bottom:20px"><p style="color:var(--ink-soft);font-size:.92rem">' +
      esc(t("place.how", { n: Placement.NA_RUNDE * 3 })) + "</p></div>" +
      '<button class="btn btn--primary js-go">' + esc(t("place.start")) + "</button>" +
      '<div id="placeBox" style="margin-top:20px"></div>');

    document.querySelector(".js-go").addEventListener("click", function () {
      App.go("piazzamento", { go: "1" });
    });
  };

  /* ---------------- Przebieg ---------------- */

  function start() {
    set(pageHead(t("place.kicker"), t("place.title"), t("place.running")) +
      '<div id="placeBox"></div>');
    var box = document.getElementById("placeBox");
    box.innerHTML = '<p class="exq__sub">' + esc(t("place.loading")) + "</p>";

    /* Test sięga do sprawdzianów wszystkich poziomów, więc muszą być
       wczytane; inaczej pula wyższych poziomów byłaby pusta i uczeń
       wylądowałby nisko z powodu braku danych, nie braku wiedzy. */
    var kody = Core.registry.levels.map(function (l) { return l.code; });
    var zostalo = kody.length;
    var nieudane = [];
    kody.forEach(function (k) {
      Core.loadLevelData(k, function (got) {
        /* Poziom, który się nie wczytał, wyglądałby jak poziom bez zadań,
           czyli jak wynik testu. Uczeń dostałby niższy poziom z powodu sieci
           i usłyszałby, że to jego wiedza. */
        if (!got) nieudane.push(k);
        if (--zostalo === 0) {
          if (nieudane.length) Core.toast(t("place.loadFailed", { levels: nieudane.join(", ") }));
          przebieg(box);
        }
      });
    });
  }

  function przebieg(box) {
    var seed = "place-" + Date.now();
    var p = Placement.nowyPrzebieg(seed);

    function runda() {
      var kod = Placement.nastepnyPoziom(p);
      if (!kod) { koniec(); return; }

      var pula = Placement.pulaDla(kod, seed).slice(0, Placement.NA_RUNDE);
      if (!pula.length) {
        /* Poziom bez nadających się zadań: traktujemy jak niezdany, ale
           mówimy o tym wprost — cichy przeskok wyglądałby jak porażka ucznia. */
        Placement.zapiszRunde(p, kod, 0, 0);
        Core.toast(t("place.noItems", { level: kod }));
        runda();
        return;
      }

      var i = 0, dobre = 0;

      function zadanie() {
        if (i >= pula.length) { Placement.zapiszRunde(p, kod, dobre, pula.length); runda(); return; }
        var poz = pula[i];
        var zbudowane = Ex.build(poz.ex, i, "place-" + kod);

        box.innerHTML = '<p class="exq__num">' +
          esc(t("place.progress", { i: p.zadane + i + 1, level: kod })) + "</p>" +
          zbudowane.html +
          '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
          esc(t("place.next")) + "</button></div>";

        Ex.wireSpeakers(box);
        var next = box.querySelector(".js-next");
        zbudowane.wire(box.querySelector(".exq"), function (ok) {
          if (ok) dobre++;
          next.hidden = false;
          next.focus();
        });
        next.addEventListener("click", function () { i++; zadanie(); });
      }
      zadanie();
    }

    function koniec() {
      var w = Placement.wynik(p);
      var doOznaczenia = policzNizsze(w.index);

      box.innerHTML = '<div class="summary"><div class="summary__score">' + esc(w.code) + "</div>" +
        '<p class="summary__msg">' + esc(t("place.result", { level: w.code, hit: w.hit, asked: w.asked })) + "</p>" +
        '<p class="summary__msg">' + esc(t("place.willMark", { n: doOznaczenia })) + "</p>" +
        '<div class="summary__acts">' +
        '<button class="btn btn--primary js-accept">' + esc(t("place.accept", { level: w.code })) + "</button>" +
        '<button class="btn btn--ghost js-scratch">' + esc(t("place.fromScratch")) + "</button></div></div>";

      box.querySelector(".js-accept").addEventListener("click", function () {
        var r = Placement.zastosuj(p);
        Core.toast(t("place.applied", { n: r.marked }), "ok");
        App.refreshRail();
        App.go("percorso", { level: w.code });
      });
      box.querySelector(".js-scratch").addEventListener("click", function () {
        App.go("percorso");
      });
    }

    runda();
  }

  /** Ile lekcji zniknęłoby ze ścieżki — liczba pokazywana PRZED decyzją. */
  function policzNizsze(indeks) {
    var n = 0;
    Core.registry.levels.forEach(function (lv, i) {
      if (i >= indeks) return;
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).concat(u.test ? [u.test] : []).forEach(function (l) {
          if (!Core.state.lessons[l.id]) n++;
        });
      });
    });
    return n;
  }

})(window);
