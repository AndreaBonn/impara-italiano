/* ============================================================
   views-cils.js — przejście przez symulację egzaminu.

   Silnik liczący siedzi w cils.js; tutaj jest to, czego on nie umie:
   czas, kolejność sekcji i brak drogi powrotnej.

   DLACZEGO NIE MA POWROTU. Na egzaminie sekcja zamknięta jest zamknięta, a
   symulator, w którym można wrócić i poprawić, mierzy co innego niż
   egzamin: mierzy wiedzę bez presji czasu, czyli tę, której uczeń nie ma
   w sali. Zegar chodzi także wtedy, gdy uczeń patrzy w sufit.

   ZDANIE O GRANICY IDZIE PRZED STARTEM, nie do podsumowania. Symulator
   ocenia dwie sprawności z czterech: kto dowiaduje się o tym na końcu,
   przeszedł całą sesję z fałszywym oczekiwaniem. To ta sama zasada, co
   przy shadowingu i przy tempie mowy.

   Skrypt klasyczny. Wymaga core.js, cils.js, audio.js, writing.js,
   recorder.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  var ORDINE = ["ascolto", "lettura", "scritta", "orale"];
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

    set(pageHead(t("cils.kicker"), t("cils.title"), t("cils.intro")) +
      '<div class="callout callout--trap"><b>' + esc(t("cils.limitLabel")) + "</b> " +
      esc(t("cils.limit")) + "</div>" +
      '<div class="card"><p class="cils-struct">' + esc(t("cils.structure")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>" +
      '<div class="stack">' + lista.map(function (s) {
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(s.titoloIt) + "</b>" +
          "<span>" + esc(t("cils.sectionsLine")) + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-start" data-id="' + esc(s.id) + '">' +
          esc(t("cils.start")) + "</button></div>";
      }).join("") + "</div>");

    el().querySelectorAll(".js-start").forEach(function (b) {
      b.addEventListener("click", function () { App.go("esame", { id: b.getAttribute("data-id") }); });
    });
  };

  function avvia(id) {
    var s = Cils.sim(id);
    if (!s) { set(Views.shell.empty(t("cils.none"))); return; }
    run = { sim: s, i: 0, risposte: {}, scaduta: {}, punti: {}, scritta: null, orale: null };
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

  function sezioneCorrente() {
    var id = ORDINE[run.i];
    return Cils.sezione(run.sim, id);
  }

  function intestazione(sez) {
    return '<div class="cils-bar">' +
      '<span class="cils-step">' + esc(t("cils.stepOf", { i: run.i + 1, n: ORDINE.length })) + "</span>" +
      '<span class="cils-clock js-clock" aria-hidden="true">--:--</span>' +
      '<span class="sr-only js-clock-live" role="status" aria-live="polite"></span></div>' +
      pageHead(t("cils.kicker") + " · " + esc(run.sim.titoloIt), t("cils.sec." + sez.id),
        t("cils.minutes", { n: sez.minuti }));
  }

  function rysujSezione() {
    fermaTimer();
    var sez = sezioneCorrente();
    if (!sez) return riepilogo();
    if (sez.id === "ascolto" || sez.id === "lettura") return sezioneChiusa(sez);
    if (sez.id === "scritta") return sezioneScritta(sez);
    return sezioneOrale(sez);
  }

  function avanti() {
    fermaTimer();
    run.i++;
    rysujSezione();
  }

  function scadi(id) {
    run.scaduta[id] = true;
    var box = el().querySelector(".js-body");
    if (box) box.setAttribute("aria-disabled", "true");
    var avvisoEl = el().querySelector(".js-expired");
    if (avvisoEl) avvisoEl.hidden = false;
    el().querySelectorAll(".js-body input, .js-body button, .js-body textarea")
      .forEach(function (n) { n.disabled = true; });
  }

  /* ---------------- Ascolto e lettura: risposte chiuse ---------------- */

  function sezioneChiusa(sez) {
    run.risposte[sez.id] = (sez.prove || []).map(function (p) {
      return new Array((p.items || []).length);
    });

    set(intestazione(sez) +
      '<div class="js-body">' + (sez.prove || []).map(function (p, n) {
        return provaHtml(sez, p, n);
      }).join("") + "</div>" +
      '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' + esc(t("cils.closeSection")) + "</button></div>");

    podepnijRisposte(sez);
    if (sez.id === "ascolto") podepnijAscolti(sez);
    razTylko(el().querySelector(".js-next"), function () { chiudiChiusa(sez); });
    avviaTimer(sez.minuti * 60, function () { scadi(sez.id); });
  }

  function provaHtml(sez, p, n) {
    var testa = '<div class="card cils-prova"><h2 class="cils-h">' +
      esc(t("cils.testN", { n: n + 1 })) + "</h2>" +
      '<p class="cils-consegna">' + esc(p.consegna) + "</p>";

    if (sez.id === "ascolto") testa += ascoltiHtml(p, n);
    if (p.titolo) testa += '<h3 class="cils-titolo">' + esc(p.titolo) + "</h3>";
    if (p.t === "vf" && p.testo) testa += p.testo.map(function (x) {
      return '<p class="cils-testo">' + esc(x) + "</p>";
    }).join("");
    if (p.t === "cloze") testa += clozeHtml(p);

    return testa + '<ol class="cils-items">' + (p.items || []).map(function (it, i) {
      return "<li>" + itemHtml(p, it, n, i) + "</li>";
    }).join("") + "</ol></div>";
  }

  function ascoltiHtml(p, n) {
    return '<div class="cils-audio">' + (p.brani || []).map(function (_, k) {
      return '<button type="button" class="btn btn--ghost btn--sm js-play" data-p="' + n + '" data-b="' + k + '">' +
        esc(t("cils.playText", { n: k + 1 })) + '</button>';
    }).join("") + '<p class="cils-hint">' + esc(t("cils.twice")) + "</p></div>";
  }

  function clozeHtml(p) {
    /* Il testo arriva a pezzi e i buchi stanno FRA i pezzi: numerandoli qui
       il testo resta leggibile e ogni buco rimanda al proprio item. */
    return '<p class="cils-testo">' + (p.testo || []).map(function (pezzo, i) {
      var buco = i < (p.items || []).length ? ' <b class="cils-gap">(' + (i + 1) + ")</b> " : "";
      return esc(pezzo) + buco;
    }).join("") + "</p>";
  }

  function itemHtml(p, it, n, i) {
    var nome = "p" + n + "i" + i;
    if (p.t === "vf") {
      return '<span class="cils-q">' + esc(it.q) + "</span>" +
        '<span class="cils-opts">' + [["V", 0], ["F", 1]].map(function (o) {
          return '<label><input type="radio" name="' + nome + '" data-p="' + n + '" data-i="' + i +
            '" value="' + o[1] + '"> ' + o[0] + "</label>";
        }).join("") + "</span>";
    }
    var testa = it.q ? '<span class="cils-q">' + esc(it.q) + "</span>" : "";
    return testa + '<span class="cils-opts cils-opts--col">' + (it.opts || []).map(function (o, k) {
      return '<label><input type="radio" name="' + nome + '" data-p="' + n + '" data-i="' + i +
        '" value="' + k + '"> ' + esc(o) + "</label>";
    }).join("") + "</span>";
  }

  function podepnijRisposte(sez) {
    el().querySelectorAll('.js-body input[type="radio"]').forEach(function (r) {
      r.addEventListener("change", function () {
        var p = Number(r.getAttribute("data-p")), i = Number(r.getAttribute("data-i"));
        run.risposte[sez.id][p][i] = Number(r.value);
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
    var w = Cils.punteggioSezione(sez, run.risposte[sez.id]);
    run.punti[sez.id] = w.punti;
    run[sez.id + "Dettaglio"] = w;
    avanti();
  }

  /* ---------------- Produzione scritta ---------------- */

  function sezioneScritta(sez) {
    var scelta = 0;
    set(intestazione(sez) +
      '<div class="js-body"><div class="card">' +
      '<p class="cils-consegna">' + esc(sez.consegna) + "</p>" +
      '<div class="cils-tracce">' + (sez.tracce || []).map(function (tr, i) {
        return '<label class="cils-traccia"><input type="radio" name="traccia" value="' + i + '"' +
          (i === 0 ? " checked" : "") + "> " + esc(tr.it) + "</label>";
      }).join("") + "</div>" +
      '<textarea class="field cils-ta js-text" rows="10" spellcheck="false"></textarea>' +
      '<p class="cils-count js-count" role="status" aria-live="polite"></p></div></div>' +
      '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' + esc(t("cils.closeSection")) + "</button></div>");

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
      run.scritta = { traccia: sez.tracce[scelta], testo: ta.value };
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.scritta = { traccia: sez.tracce[scelta], testo: ta.value };
      scadi(sez.id);
    });
  }

  /* ---------------- Produzione orale (non valutata) ---------------- */

  function sezioneOrale(sez) {
    var powod = global.Recorder ? Recorder.powodBraku() : "rec.errNoRecorder";
    var scelto = 0;

    set(intestazione(sez) +
      '<div class="js-body"><div class="card">' +
      '<p class="callout callout--trap"><b>' + esc(t("cils.oralLabel")) + "</b> " + esc(t("cils.oralNotScored")) + "</p>" +
      "<h3 class=\"cils-h\">" + esc(t("cils.oralIntro")) + "</h3><ul class=\"cils-list\">" +
      (sez.presentazione || []).map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul>" +
      "<h3 class=\"cils-h\">" + esc(t("cils.oralTopic")) + "</h3>" +
      '<div class="cils-tracce">' + (sez.argomenti || []).map(function (a, i) {
        return '<label class="cils-traccia"><input type="radio" name="arg" value="' + i + '"' +
          (i === 0 ? " checked" : "") + "> " + esc(a) + "</label>";
      }).join("") + "</div>" +
      (powod ? '<p class="cils-hint">' + esc(t(powod)) + "</p>" :
        '<div class="cils-acts"><button class="btn btn--primary js-rec" aria-pressed="false">' +
        esc(t("cils.record")) + '</button><button class="btn btn--ghost btn--sm js-play-mine" hidden>' +
        esc(t("cils.playMine")) + "</button></div>") +
      '<p class="cils-state js-state" role="status" aria-live="polite"></p>' +
      "<h3 class=\"cils-h\">" + esc(t("cils.selfCheck")) + "</h3><ul class=\"cils-check\">" +
      (sez.controllo || []).map(function (c, i) {
        return '<li><label><input type="checkbox" data-c="' + i + '"> ' + esc(c) + "</label></li>";
      }).join("") + "</ul></div></div>" +
      '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' + esc(t("cils.finish")) + "</button></div>");

    el().querySelectorAll('input[name="arg"]').forEach(function (r) {
      r.addEventListener("change", function () { scelto = Number(r.value); });
    });
    if (!powod) podepnijNagranie();

    razTylko(el().querySelector(".js-next"), function () {
      run.orale = { argomento: (sez.argomenti || [])[scelto], spuntate: spuntate() };
      avanti();
    });
    avviaTimer(sez.minuti * 60, function () {
      run.orale = { argomento: (sez.argomenti || [])[scelto], spuntate: spuntate() };
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
    var e = Cils.esito(run.punti);
    salva(e);

    set(pageHead(t("cils.kicker") + " · " + esc(run.sim.titoloIt), t("cils.resultTitle"), "") +
      '<div class="card">' + abilitaHtml(e) +
      '<p class="cils-verdict">' + esc(t(e.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>" +
      scrittaHtml() + oraleHtml() +
      '<div class="cils-acts">' +
      '<button class="btn btn--primary js-again">' + esc(t("cils.again")) + "</button>" +
      '<button class="btn btn--ghost js-list">' + esc(t("cils.backToList")) + "</button></div>");

    el().querySelector(".js-again").addEventListener("click", function () { App.go("esame", { id: run.sim.id }); });
    el().querySelector(".js-list").addEventListener("click", function () { App.go("esame"); });
  }

  function abilitaHtml(e) {
    return '<table class="cils-tab"><tbody>' + Cils.ABILITA.map(function (a) {
      var d = e.abilita[a];
      var val = d.misurata
        ? d.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")
        : t("cils.notMeasured");
      var scad = run.scaduta[a] ? " " + t("cils.expiredMark") : "";
      return "<tr><th>" + esc(t("cils.sec." + a)) + "</th><td>" + esc(val + scad) + "</td></tr>";
    }).join("") + "</tbody></table>" +
      '<p class="cils-hint">' + esc(t("cils.threshold", { n: Cils.SOGLIA_ABILITA, max: Cils.MAX_ABILITA })) + "</p>";
  }

  function scrittaHtml() {
    if (!run.scritta) return "";
    var c = Cils.controlloScritta(run.scritta.traccia, run.scritta.testo);
    var wynik = Writing.analyse(run.scritta.testo, (run.scritta.traccia || {}).richiede || []);
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.scritta")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.writingNotScored")) + "</p>" +
      '<p class="cils-count">' + esc(t("cils.wordsOf", { n: c.parole, min: c.minimo, max: c.massimo })) +
      (c.dentroLimite ? "" : " " + esc(t("cils.outOfRange"))) + "</p>" +
      /* Etykieta wymagania jest PO WŁOSKU i siedzi w danych obok listy form:
         to część zadania egzaminacyjnego, nie napis interfejsu, więc
         tłumaczenie zmieniłoby polecenie i kosztowałoby 18 kluczy razy pięć. */
      '<ul class="cils-check">' + wynik.map(function (r, i) {
        var wym = ((run.scritta.traccia || {}).richiede || [])[i] || {};
        return "<li>" + (r.found ? "✓" : "✗") + " " + esc(wym.etichetta || r.key) + "</li>";
      }).join("") + "</ul></div>";
  }

  function oraleHtml() {
    if (!run.orale) return "";
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.orale")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.oralNotScored")) + "</p>" +
      "<p>" + esc(run.orale.argomento || "") + "</p>" +
      '<p class="cils-count">' + esc(t("cils.selfChecked", { n: run.orale.spuntate })) + "</p></div>";
  }

  /**
   * Zapis przebiegu. Kontener jest DOKŁADANY w core.js, więc starszy profil
   * dostaje go pustym i numer schematu się nie rusza.
   */
  function salva(e) {
    var st = Core.state.cils;
    /* Array.isArray, nie truthy: import z `cils.runs` innego typu przechodzi
       walidację (sprawdza tylko pole najwyższego poziomu), a `push` na
       stringu rzuciłby wyjątek w środku rysowania podsumowania. */
    if (!st || !Array.isArray(st.runs)) return;
    st.runs.push({
      sim: run.sim.id,
      ts: Date.now(),
      punti: { ascolto: run.punti.ascolto || 0, lettura: run.punti.lettura || 0 },
      scadute: Object.keys(run.scaduta),
      verdetto: e.verdetto
    });
    if (st.runs.length > 50) st.runs = st.runs.slice(-50);
    Core.save();
  }

})(window);
