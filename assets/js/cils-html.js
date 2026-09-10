/* ============================================================
   cils-html.js — the exam simulation markup, without a single event.

   ONLY data -> string functions live here. The clock, wiring up handlers,
   recording and the absence of a way back stayed in views-cils.js, and the
   scoring in cils.js and cils-run.js.

   WHY SEPARATELY. The exam answer grid has four shapes (true/false,
   multiple choice, cloze with numbered gaps, listening with a play
   counter) and each of them is a decision visible only in the generated
   HTML: the gap number next to the right task, the radio `name` shared
   within one question and different across two, `data-p`/`data-i` matching
   the grid in cils-run.js. As long as these functions sat in the view,
   they could only be checked with Playwright, that is through an hour-long
   attempt with four countdowns — so in practice they were not checked at
   all.

   Interface strings and `esc` are read INSIDE the functions, not while the
   module body runs: that way this file does not impose its position in the
   <script> order, and a test can substitute a double after it has loaded.

   Classic script. Requires core.js (esc), i18n.js, cils.js, writing.js.
   ============================================================ */
(function (global) {
  "use strict";

  function esc(s) { return global.Core.esc(s); }
  function t(k, v) { return global.I18n.t(k, v); }

  /* ═══════════════════ The list and the preamble ═══════════════════ */

  /**
   * The body of the simulation list.
   *
   * The simulator's limit (two skills out of four) sits BEFORE the list, not
   * in the summary: whoever discovers it at the end has gone through the
   * whole session with the wrong expectation.
   *
   * The page title is set by the view: `pageHead` lives in Views, and this
   * file touches neither Views nor the DOM.
   */
  function lista(symulacje) {
    return '<div class="callout callout--trap"><b>' + esc(t("cils.limitLabel")) + "</b> " +
      esc(t("cils.limit")) + "</div>" +
      '<div class="card"><p class="cils-struct">' + esc(t("cils.structure")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>" +
      '<div class="stack">' + (symulacje || []).map(function (s) {
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(s.titoloIt) + "</b>" +
          "<span>" + esc(t("cils.sectionsLine")) + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-start" data-id="' + esc(s.id) + '">' +
          esc(t("cils.start")) + "</button></div>";
      }).join("") + "</div>";
  }

  /* ═══════════════════ The section frame ═══════════════════ */

  /**
   * The bar with the step counter and the clock.
   *
   * The written clock is `aria-hidden` and the live region is empty: the
   * text is put there by the timer in views-cils.js, with three
   * announcements only. A timer that speaks every second makes the page
   * unusable with a screen reader.
   */
  function barra(krok, ile) {
    return '<div class="cils-bar">' +
      '<span class="cils-step">' + esc(t("cils.stepOf", { i: krok, n: ile })) + "</span>" +
      '<span class="cils-clock js-clock" aria-hidden="true">--:--</span>' +
      '<span class="sr-only js-clock-live" role="status" aria-live="polite"></span></div>';
  }

  /**
   * The (hidden) time-up notice and the button that closes the section.
   *
   * The same for all four sections: only the label changes, because the last
   * one ends the exam instead of the section.
   */
  function coda(kluczPrzycisku) {
    return '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' +
      esc(t(kluczPrzycisku)) + "</button></div>";
  }

  /* ═══════════════════ Listening and reading: closed answers ═══════════════════ */

  function corpoChiuso(sez) {
    return '<div class="js-body">' + (sez.prove || []).map(function (p, n) {
      return prova(sez, p, n);
    }).join("") + "</div>";
  }

  function prova(sez, p, n) {
    var testa = '<div class="card cils-prova"><h2 class="cils-h">' +
      esc(t("cils.testN", { n: n + 1 })) + "</h2>" +
      '<p class="cils-consegna">' + esc(p.consegna) + "</p>";

    if (sez.id === "ascolto") testa += ascolti(p, n);
    if (p.titolo) testa += '<h3 class="cils-titolo">' + esc(p.titolo) + "</h3>";
    if (p.t === "vf" && p.testo) testa += p.testo.map(function (x) {
      return '<p class="cils-testo">' + esc(x) + "</p>";
    }).join("");
    if (p.t === "cloze") testa += cloze(p);

    return testa + '<ol class="cils-items">' + (p.items || []).map(function (it, i) {
      return "<li>" + item(p, it, n, i) + "</li>";
    }).join("") + "</ol></div>";
  }

  function ascolti(p, n) {
    return '<div class="cils-audio">' + (p.brani || []).map(function (_, k) {
      return '<button type="button" class="btn btn--ghost btn--sm js-play" data-p="' + n + '" data-b="' + k + '">' +
        esc(t("cils.playText", { n: k + 1 })) + '</button>';
    }).join("") + '<p class="cils-hint">' + esc(t("cils.twice")) + "</p></div>";
  }

  function cloze(p) {
    /* The text arrives in pieces and the gaps sit BETWEEN the pieces:
       numbering them here keeps the text readable and makes every gap point
       at its own item. */
    return '<p class="cils-testo">' + (p.testo || []).map(function (pezzo, i) {
      var buco = i < (p.items || []).length ? ' <b class="cils-gap">(' + (i + 1) + ")</b> " : "";
      return esc(pezzo) + buco;
    }).join("") + "</p>";
  }

  function item(p, it, n, i) {
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

  /* ═══════════════════ Written production ═══════════════════ */

  function corpoScritto(sez) {
    return '<div class="js-body"><div class="card">' +
      '<p class="cils-consegna">' + esc(sez.consegna) + "</p>" +
      '<div class="cils-tracce">' + (sez.tracce || []).map(function (tr, i) {
        return '<label class="cils-traccia"><input type="radio" name="traccia" value="' + i + '"' +
          (i === 0 ? " checked" : "") + "> " + esc(tr.it) + "</label>";
      }).join("") + "</div>" +
      '<textarea class="field cils-ta js-text" rows="10" spellcheck="false"></textarea>' +
      '<p class="cils-count js-count" role="status" aria-live="polite"></p></div></div>';
  }

  /* ═══════════════════ Oral production (not graded) ═══════════════════ */

  /**
   * @param {object} sez   the oral section from the course data
   * @param {string} powod string key for "nothing to record with"; "" when there is
   */
  function corpoOrale(sez, powod) {
    return '<div class="js-body"><div class="card">' +
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
      }).join("") + "</ul></div></div>";
  }

  /* ═══════════════════ Summary ═══════════════════ */

  /**
   * The table of the four skills.
   *
   * @param {object} esito      the result from CilsRun.esito()
   * @param {function(string):boolean} czyScadla whether a section ran out of time
   */
  function abilita(esito, czyScadla) {
    var Cils = global.Cils;
    return '<table class="cils-tab"><tbody>' + Cils.ABILITA.map(function (a) {
      var d = esito.abilita[a];
      var val = d.misurata
        ? d.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")
        : t("cils.notMeasured");
      var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";
      return "<tr><th>" + esc(t("cils.sec." + a)) + "</th><td>" + esc(val + scad) + "</td></tr>";
    }).join("") + "</tbody></table>" +
      '<p class="cils-hint">' + esc(t("cils.threshold", { n: Cils.SOGLIA_ABILITA, max: Cils.MAX_ABILITA })) + "</p>";
  }

  /** The written production card; "" when the student never reached that section. */
  function scritta(pisemna) {
    if (!pisemna) return "";
    var c = global.Cils.controlloScritta(pisemna.traccia, pisemna.testo);
    var wynik = global.Writing.analyse(pisemna.testo, (pisemna.traccia || {}).richiede || []);
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.scritta")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.writingNotScored")) + "</p>" +
      '<p class="cils-count">' + esc(t("cils.wordsOf", { n: c.parole, min: c.minimo, max: c.massimo })) +
      (c.dentroLimite ? "" : " " + esc(t("cils.outOfRange"))) + "</p>" +
      /* The requirement label is IN ITALIAN and sits in the data next to the
         list of forms: it is part of the exam task, not an interface string,
         so translating it would change the prompt and cost 18 keys times
         five. */
      '<ul class="cils-check">' + wynik.map(function (r, i) {
        var wym = ((pisemna.traccia || {}).richiede || [])[i] || {};
        return "<li>" + (r.found ? "✓" : "✗") + " " + esc(wym.etichetta || r.key) + "</li>";
      }).join("") + "</ul></div>";
  }

  /** The oral production card; "" when the student never reached that section. */
  function orale(ustna) {
    if (!ustna) return "";
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.orale")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.oralNotScored")) + "</p>" +
      "<p>" + esc(ustna.argomento || "") + "</p>" +
      '<p class="cils-count">' + esc(t("cils.selfChecked", { n: ustna.spuntate })) + "</p></div>";
  }

  /**
   * The body of the summary: the table, the verdict, the source of the
   * threshold, the two production cards and the two exit buttons.
   *
   * The verdict is asymmetric by construction (cils.js): one skill below the
   * threshold is enough to say no, no number of skills above it is enough to
   * say yes. Here we only read the field, so that two places do not decide it.
   */
  function podsumowanie(esito, czyScadla, pisemna, ustna) {
    return '<div class="card">' + abilita(esito, czyScadla) +
      '<p class="cils-verdict">' +
      esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown")) + "</p>" +
      '<p class="cils-src">' + esc(t("cils.thresholdSource")) + "</p></div>" +
      scritta(pisemna) + orale(ustna) +
      '<div class="cils-acts">' +
      '<button class="btn btn--primary js-again">' + esc(t("cils.again")) + "</button>" +
      '<button class="btn btn--ghost js-list">' + esc(t("cils.backToList")) + "</button></div>";
  }

  global.CilsHtml = {
    lista: lista,
    barra: barra,
    coda: coda,
    corpoChiuso: corpoChiuso,
    prova: prova,
    ascolti: ascolti,
    cloze: cloze,
    item: item,
    corpoScritto: corpoScritto,
    corpoOrale: corpoOrale,
    abilita: abilita,
    scritta: scritta,
    orale: orale,
    podsumowanie: podsumowanie
  };

})(window);
