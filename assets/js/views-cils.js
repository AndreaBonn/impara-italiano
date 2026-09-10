/* ============================================================
   views-cils.js — przejście przez symulację egzaminu.

   Silnik liczący siedzi w cils.js, przebieg całego podejścia (kolejność
   sekcji, siatka odpowiedzi, punkty, sekcje z wyczerpanym czasem, wpis do
   historii) w cils-run.js, a cały markup w cils-html.js. Tutaj zostało to,
   czego żaden z nich nie umie: zegar, podpinanie uchwytów i brak drogi
   powrotnej.

   DLACZEGO NIE MA POWROTU. Na egzaminie sekcja zamknięta jest zamknięta, a
   symulator, w którym można wrócić i poprawić, mierzy co innego niż
   egzamin: mierzy wiedzę bez presji czasu, czyli tę, której uczeń nie ma
   w sali. Zegar chodzi także wtedy, gdy uczeń patrzy w sufit.

   ZDANIE O GRANICY IDZIE PRZED STARTEM, nie do podsumowania. Symulator
   ocenia dwie sprawności z czterech: kto dowiaduje się o tym na końcu,
   przeszedł całą sesję z fałszywym oczekiwaniem. To ta sama zasada, co
   przy shadowingu i przy tempie mowy.

   Skrypt klasyczny. Wymaga core.js, cils.js, cils-run.js, cils-html.js,
   audio.js, writing.js, recorder.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var H = CilsHtml;

  var ASCOLTI_MAX = 2;              /* all'esame i testi si sentono due volte */
  var AVVISI = [600, 300, 60];      /* secondi a cui il tempo viene annunciato */

  var run = null;
  var tick = null;

  /* ═══════════════════ Lista e preambolo ═══════════════════ */

  Views.esame = function (params) {
    fermaTimer();
    if (params && params.id) return avvia(params.id);

    var lista = Cils.simulazioni();
    if (!lista.length) { set(Views.shell.empty(t("cils.none"))); return; }

    set(pageHead(t("cils.kicker"), t("cils.title"), t("cils.intro")) + H.lista(lista));

    el().querySelectorAll(".js-start").forEach(function (b) {
      b.addEventListener("click", function () { App.go("esame", { id: b.getAttribute("data-id") }); });
    });
  };

  function avvia(id) {
    var s = Cils.sim(id);
    if (!s) { set(Views.shell.empty(t("cils.none"))); return; }
    run = CilsRun.create(s);
    rysujSezione();
  }

  /* ═══════════════════ Timer ═══════════════════ */

  function fermaTimer() {
    if (tick) { global.clearInterval(tick); tick = null; }
    if (global.Audio2) Audio2.stop();
  }

  /* Router woła to przy KAŻDYM wyjściu z trasy, także przez pasek boczny,
     hashchange i przycisk wstecz przeglądarki. Bez tego zegar żył dalej. */
  function pilnujWyjscia() { Views.onLeave = fermaTimer; }

  /* Przycisk domykający sekcję gaśnie w chwili kliknięcia. Podwójne
     kliknięcie trafiłoby w ten sam guzik już przerysowanej sekcji i
     przeskoczyłoby ją bez ani jednej odpowiedzi — a klika się pod zegarem,
     więc dwuklik z nerwów jest tu regułą, nie wyjątkiem. */
  function razTylko(przycisk, akcja) {
    przycisk.addEventListener("click", function () {
      if (przycisk.disabled) return;
      przycisk.disabled = true;
      akcja();
    });
  }

  /**
   * Avvia il conto alla rovescia della sezione.
   *
   * L'orologio scritto si aggiorna ogni secondo ed è `aria-hidden`; la
   * regione live riceve solo tre annunci. Un timer che parla ogni secondo
   * rende la pagina inutilizzabile con uno screen reader, ed è il modo più
   * facile di passare i gate automatici e fallire con l'utente vero.
   */
  function avviaTimer(secondi, scaduto) {
    var resta = secondi;
    var prossimo = AVVISI.slice();
    var vista = el().querySelector(".js-clock");
    var voce = el().querySelector(".js-clock-live");
    scrivi();

    pilnujWyjscia();
    tick = global.setInterval(function () {
      resta--;
      scrivi();
      while (prossimo.length && resta <= prossimo[0]) {
        var s = prossimo.shift();
        if (voce) voce.textContent = t("cils.timeWarn", { m: Math.round(s / 60) });
      }
      if (resta <= 0) { fermaTimer(); if (voce) voce.textContent = t("cils.timeUp"); scaduto(); }
    }, 1000);

    function scrivi() {
      if (!vista) return;
      var m = Math.max(0, Math.floor(resta / 60)), sec = Math.max(0, resta % 60);
      vista.textContent = m + ":" + (sec < 10 ? "0" : "") + sec;
    }
  }

  /* ═══════════════════ Sezioni ═══════════════════ */

  function intestazione(sez) {
    return H.barra(run.krok, run.ile) +
      pageHead(t("cils.kicker") + " · " + esc(run.dane.sim.titoloIt), t("cils.sec." + sez.id),
        t("cils.minutes", { n: sez.minuti }));
  }

  function rysujSezione() {
    fermaTimer();
    var sez = run.sekcja();
    if (!sez) return riepilogo();
    if (sez.id === "ascolto" || sez.id === "lettura") return sezioneChiusa(sez);
    if (sez.id === "scritta") return sezioneScritta(sez);
    return sezioneOrale(sez);
  }

  function avanti() {
    fermaTimer();
    run.dalej();
    rysujSezione();
  }

  function scadi(id) {
    run.scadla(id);
    var box = el().querySelector(".js-body");
    if (box) box.setAttribute("aria-disabled", "true");
    var avvisoEl = el().querySelector(".js-expired");
    if (avvisoEl) avvisoEl.hidden = false;
    el().querySelectorAll(".js-body input, .js-body button, .js-body textarea")
      .forEach(function (n) { n.disabled = true; });
  }

  /* ---------------- Ascolto e lettura: risposte chiuse ---------------- */

  function sezioneChiusa(sez) {
    run.przygotuj(sez);

    set(intestazione(sez) + H.corpoChiuso(sez) + H.coda("cils.closeSection"));

    podepnijRisposte(sez);
    if (sez.id === "ascolto") podepnijAscolti(sez);
    razTylko(el().querySelector(".js-next"), function () { chiudiChiusa(sez); });
    avviaTimer(sez.minuti * 60, function () { scadi(sez.id); });
  }

  function podepnijRisposte(sez) {
    el().querySelectorAll('.js-body input[type="radio"]').forEach(function (r) {
      r.addEventListener("change", function () {
        var p = Number(r.getAttribute("data-p")), i = Number(r.getAttribute("data-i"));
        run.odpowiedz(sez.id, p, i, Number(r.value));
      });
    });
  }

  function podepnijAscolti(sez) {
    var conta = {};
    el().querySelectorAll(".js-play").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = Number(b.getAttribute("data-p")), k = Number(b.getAttribute("data-b"));
        var klucz = p + "-" + k;
        conta[klucz] = (conta[klucz] || 0) + 1;
        if (conta[klucz] >= ASCOLTI_MAX) { b.disabled = true; b.textContent = t("cils.playedTwice"); }
        var brano = sez.prove[p].brani[k];
        Audio2.speakSequence(brano.map(function (r) { return r.it; }), {});
      });
    });
  }

  function chiudiChiusa(sez) {
    run.zamknij(sez);
    avanti();
  }

  /* ---------------- Produzione scritta ---------------- */

  function sezioneScritta(sez) {
    var scelta = 0;
    set(intestazione(sez) + H.corpoScritto(sez) + H.coda("cils.closeSection"));

    var ta = el().querySelector(".js-text");
    var licznik = el().querySelector(".js-count");
    function odswiez() {
      var n = Writing.wordCount(ta.value);
      licznik.textContent = t("cils.wordsOf", { n: n, min: 80, max: 120 });
    }
    ta.addEventListener("input", odswiez);
    odswiez();
    el().querySelectorAll('input[name="traccia"]').forEach(function (r) {
      r.addEventListener("change", function () { scelta = Number(r.value); });
    });

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszScritta(sez.tracce[scelta], ta.value);
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.zapiszScritta(sez.tracce[scelta], ta.value);
      scadi(sez.id);
    });
  }

  /* ---------------- Produzione orale (non valutata) ---------------- */

  function sezioneOrale(sez) {
    var powod = global.Recorder ? Recorder.powodBraku() : "rec.errNoRecorder";
    var scelto = 0;

    set(intestazione(sez) + H.corpoOrale(sez, powod) + H.coda("cils.finish"));

    el().querySelectorAll('input[name="arg"]').forEach(function (r) {
      r.addEventListener("change", function () { scelto = Number(r.value); });
    });
    if (!powod) podepnijNagranie();

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszOrale((sez.argomenti || [])[scelto], spuntate());
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.zapiszOrale((sez.argomenti || [])[scelto], spuntate());
      scadi(sez.id);
    });
  }

  function spuntate() {
    var n = 0;
    el().querySelectorAll('.cils-check input[type="checkbox"]').forEach(function (c) {
      if (c.checked) n++;
    });
    return n;
  }

  function podepnijNagranie() {
    var b = el().querySelector(".js-rec");
    var play = el().querySelector(".js-play-mine");
    var stan = el().querySelector(".js-state");
    var nagranie = null;

    b.addEventListener("click", function () {
      if (Recorder.nagrywa()) { Recorder.stop(); return; }
      Recorder.start({
        onstart: function () {
          b.setAttribute("aria-pressed", "true");
          b.textContent = t("cils.stopRec");
          stan.textContent = t("cils.recording");
        },
        onstop: function (d) {
          b.setAttribute("aria-pressed", "false");
          b.textContent = t("cils.recordAgain");
          nagranie = d;
          play.hidden = false;
          stan.textContent = t("cils.recorded", { s: (d.ms / 1000).toFixed(1) });
        },
        onerror: function (k) {
          b.setAttribute("aria-pressed", "false");
          b.textContent = t("cils.record");
          stan.textContent = t(k);
        }
      });
    });

    play.addEventListener("click", function () {
      if (!nagranie) return;
      var a = new global.Audio(nagranie.url);
      a.play().catch(function () { stan.textContent = t("cils.playFailed"); });
    });
  }

  /* ═══════════════════ Riepilogo ═══════════════════ */

  function riepilogo() {
    fermaTimer();
    var e = run.esito();
    salva(e);

    set(pageHead(t("cils.kicker") + " · " + esc(run.dane.sim.titoloIt), t("cils.resultTitle"), "") +
      H.podsumowanie(e, run.czyScadla, run.dane.scritta, run.dane.orale));

    el().querySelector(".js-again").addEventListener("click", function () { App.go("esame", { id: run.dane.sim.id }); });
    el().querySelector(".js-list").addEventListener("click", function () { App.go("esame"); });
  }

  /** Zapis przebiegu do historii ucznia; kształt wpisu i sufit są w cils-run.js. */
  function salva(e) {
    CilsRun.zapisz(run, e, Date.now());
  }

})(window);
