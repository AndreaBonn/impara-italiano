/* ============================================================
   views-cils.js — going through the exam simulation.

   The scoring engine sits in cils.js, the run of a whole attempt (the order
   of the sections, the answer grid, the points, the sections whose time ran
   out, the history entry) in cils-run.js, and all the markup in
   cils-html.js. What is left here is what none of them can do: the clock,
   wiring up handlers and the absence of a way back.

   WHY THERE IS NO WAY BACK. At the exam a closed section is closed, and a
   simulator you can return to and correct measures something other than the
   exam: it measures knowledge without time pressure, that is the knowledge
   the student does not have in the room. The clock runs while the student
   stares at the ceiling too.

   THE SENTENCE ABOUT THE LIMIT COMES BEFORE THE START, not in the summary.
   The simulator grades two skills out of four: whoever finds that out at
   the end has gone through the whole session with a false expectation. It
   is the same principle as with shadowing and with speech tempo.

   Classic script. Requires core.js, cils.js, cils-run.js, cils-html.js,
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

  /* The student's own recording, kept for the review that follows the exam.
     Module scope rather than inside the oral section, because the section it
     was made in is gone by the time it is listened to. In memory only: it is
     dropped with the page, and nothing writes audio to disk. */
  var nagranie = null;

  /* Whether the review after the oral part has already been through. Without
     it the summary would send the student back to the review it just came
     from, for ever. */
  var poRewizji = false;

  /* ═══════════════════ The list and the preamble ═══════════════════ */

  Views.esame = function (params) {
    fermaTimer();
    if (params && params.id) return avvia(params.id);

    var lista = Cils.simulazioni();
    if (!lista.length) { set(Views.shell.empty(t("cils.none"))); return; }

    set(pageHead(t("cils.kicker"), t("cils.title"), t("cils.intro")) +
      Views.shell.guideLink("esame") + H.lista(lista));

    el().querySelectorAll(".js-start").forEach(function (b) {
      b.addEventListener("click", function () { App.go("esame", { id: b.getAttribute("data-id") }); });
    });
  };

  function avvia(id) {
    var s = Cils.sim(id);
    if (!s) { set(Views.shell.empty(t("cils.none"))); return; }
    run = CilsRun.create(s);
    nagranie = null;
    poRewizji = false;
    rysujSezione();
  }

  /* ═══════════════════ The timer ═══════════════════ */

  function fermaTimer() {
    if (tick) { global.clearInterval(tick); tick = null; }
    if (global.Audio2) Audio2.stop();
  }

  /* The router calls this on EVERY exit from the route, including via the
     side rail, hashchange and the browser's back button. Without it the
     clock kept running. */
  function pilnujWyjscia() { Views.onLeave = fermaTimer; }

  /* The button that closes a section goes dead the moment it is clicked. A
     double click would hit the same button on the already redrawn section
     and skip it without a single answer — and it is clicked under a clock,
     so a nervous double click is the rule here, not the exception. */
  function razTylko(przycisk, akcja) {
    przycisk.addEventListener("click", function () {
      if (przycisk.disabled) return;
      przycisk.disabled = true;
      akcja();
    });
  }

  /**
   * Starts the section countdown.
   *
   * The written clock updates every second and is `aria-hidden`; the live
   * region receives only three announcements. A timer that speaks every
   * second makes the page unusable with a screen reader, and it is the
   * easiest way to pass the automated gates and fail with a real user.
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

  /* ═══════════════════ The sections ═══════════════════ */

  function intestazione(sez) {
    return H.barra(run.krok, run.ile) +
      pageHead(t("cils.kicker") + " · " + esc(run.dane.sim.titoloIt), t("cils.sec." + sez.id),
        t("cils.minutes", { n: sez.minuti }));
  }

  function rysujSezione() {
    fermaTimer();
    var sez = run.sekcja();
    if (!sez) return poEgzaminie();
    if (sez.id === "ascolto" || sez.id === "lettura") return sezioneChiusa(sez);
    if (sez.id === "scritta") return sezioneScritta(sez);
    return sezioneOrale(sez);
  }

  /**
   * What happens when the sections run out: first the review, then the report.
   *
   * The review is skipped for whoever never reached the oral part — a
   * student who left after the reading has nothing to listen back to, and a
   * screen asking them to write down what they said would be asking about
   * something that never happened.
   */
  function poEgzaminie() {
    if (run.dane.orale && !poRewizji) return rewizja();
    riepilogo();
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

  /* ---------------- Listening and reading: closed answers ---------------- */

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

  /* ---------------- Written production ---------------- */

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

  /* ---------------- Oral production (not graded) ---------------- */

  function sezioneOrale(sez) {
    var powod = global.Recorder ? Recorder.powodBraku() : "rec.errNoRecorder";
    var scelto = 0;

    set(intestazione(sez) + H.corpoOrale(sez, powod) + H.coda("cils.finish"));

    el().querySelectorAll('input[name="arg"]').forEach(function (r) {
      r.addEventListener("change", function () { scelto = Number(r.value); });
    });
    if (!powod) podepnijNagranie();

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszOrale((sez.argomenti || [])[scelto]);
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.zapiszOrale((sez.argomenti || [])[scelto]);
      scadi(sez.id);
    });
  }

  /**
   * The review after the exam: listen to yourself, write what you said.
   *
   * OUTSIDE the clock, deliberately. Under a countdown this would be a
   * second written task, and what it would measure is typing speed. The
   * recording cannot be transcribed for the student — `Audio2.listen` closes
   * at the first pause, and it would be contending for a microphone
   * `MediaRecorder` already holds — so the words are theirs, and the report
   * says so rather than calling them a transcript.
   *
   * Skipping is a first-class way out: the button says "go to the report",
   * not "cancel". Whoever does not want to write gets the report they would
   * have got anyway, with the oral row saying nothing was collected.
   */
  function rewizja() {
    Views.onLeave = fermaTimer;
    var powod = !nagranie;
    set(pageHead(t("cils.kicker") + " · " + esc(run.dane.sim.titoloIt), t("cils.reviewTitle"), "") +
      H.rewizja(run.dane.orale, powod) + H.coda("cils.reviewDone"));

    if (!powod) {
      el().querySelector(".js-play-mine").addEventListener("click", function () {
        var a = new global.Audio(nagranie.url);
        a.play().catch(function () { Core.toast(t("cils.playFailed")); });
      });
    }

    razTylko(el().querySelector(".js-next"), function () {
      run.zapiszTrascrizione(el().querySelector(".js-said").value);
      poRewizji = true;
      riepilogo();
    });
  }

  function podepnijNagranie() {
    var b = el().querySelector(".js-rec");
    var play = el().querySelector(".js-play-mine");
    var stan = el().querySelector(".js-state");

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

  /* ═══════════════════ The summary ═══════════════════ */

  function riepilogo() {
    fermaTimer();
    var e = run.esito();
    salva(e);

    set(pageHead(t("cils.kicker") + " · " + esc(run.dane.sim.titoloIt), t("cils.resultTitle"), "") +
      H.podsumowanie(e, run.czyScadla, run.dane.scritta, run.dane.orale));

    el().querySelector(".js-again").addEventListener("click", function () { App.go("esame", { id: run.dane.sim.id }); });
    el().querySelector(".js-list").addEventListener("click", function () { App.go("esame"); });

    poproszOLekture();
  }

  /**
   * The model's reading of the two productions, when the student has set one
   * up at all.
   *
   * Everything here is optional twice over: without a key nothing is asked
   * and the report is the one this course has always drawn, and even with a
   * key an answer that turns out to be a mark comes back as nothing
   * (`Llm.reportProduction` runs it through `CilsReport.pulisci` first).
   *
   * `zywy` for the reason views-talk.js has it: the answer lands seconds
   * later and the student may be on another screen by then, where these
   * elements no longer exist.
   */
  function poproszOLekture() {
    if (!global.Llm || !Llm.available()) return;

    var zywy = true;
    var poprzednie = Views.onLeave;
    Views.onLeave = function () {
      zywy = false;
      if (typeof poprzednie === "function") poprzednie();
    };

    [
      { sel: ".js-lettura-scritta", sezione: "scritta", dane: run.dane.scritta,
        traccia: run.dane.scritta && run.dane.scritta.traccia,
        testo: run.dane.scritta && run.dane.scritta.testo },
      { sel: ".js-lettura-orale", sezione: "orale", dane: run.dane.orale,
        traccia: run.dane.orale && run.dane.orale.argomento,
        testo: run.dane.orale && run.dane.orale.testo }
    ].forEach(function (cel) {
      var box = el().querySelector(cel.sel);
      if (!box || !cel.dane || !String(cel.testo || "").trim()) return;

      box.classList.add("is-waiting");
      box.textContent = t("cils.reading");

      Llm.reportProduction({
        sezione: cel.sezione, traccia: cel.traccia, testo: cel.testo, cefr: "B1"
      }, function (tekst) {
        if (!zywy) return;
        box.classList.remove("is-waiting");
        /* Nothing to show is an EMPTY box, not a message: the stylesheet
           hides an empty one, so the report closes up as if the reading had
           never been asked for — which is the report without a key. */
        if (!tekst) { box.textContent = ""; return; }
        /* textContent, never innerHTML: this is the only string on the
           report the course did not write, and it was produced by a model
           that has just read a text the student typed. */
        box.textContent = "";
        var etykieta = global.document.createElement("b");
        etykieta.textContent = t("cils.readingLabel") + " ";
        var tresc = global.document.createElement("span");
        tresc.textContent = tekst;
        box.appendChild(etykieta);
        box.appendChild(tresc);
      });
    });
  }

  /** Saving the run into the student's history; the entry shape and the ceiling are in cils-run.js. */
  function salva(e) {
    CilsRun.zapisz(run, e, Date.now());
  }

})(window);
