/* ============================================================
   cils-html.js — markup symulacji egzaminu, bez ani jednego zdarzenia.

   Tu mieszkają WYŁĄCZNIE funkcje dane -> napis. Zegar, podpinanie
   uchwytów, nagrywanie i brak drogi powrotnej zostały w views-cils.js,
   a punktacja w cils.js i cils-run.js.

   DLACZEGO OSOBNO. Siatka odpowiedzi egzaminu ma cztery kształty (vero/falso,
   wybór wielokrotny, cloze z numerowanymi lukami, odsłuch z licznikiem
   odtworzeń) i każdy z nich jest decyzją, którą widać tylko w wygenerowanym
   HTML: numer luki przy właściwym zadaniu, `name` radia wspólny dla jednego
   pytania i różny dla dwóch, `data-p`/`data-i` zgodne z siatką w cils-run.js.
   Dopóki te funkcje siedziały w widoku, sprawdzało się je wyłącznie
   Playwrightem, czyli przez godzinne podejście z czterema odliczaniami —
   więc w praktyce nie sprawdzało się ich wcale.

   Napisy interfejsu i `esc` czytamy WEWNĄTRZ funkcji, nie przy wykonaniu
   modułu: ten plik nie narzuca wtedy swojego miejsca w kolejności
   <script>, a test może podstawić atrapę po jego wczytaniu.

   Skrypt klasyczny. Wymaga core.js (esc), i18n.js, cils.js, writing.js.
   ============================================================ */
(function (global) {
  "use strict";

  function esc(s) { return global.Core.esc(s); }
  function t(k, v) { return global.I18n.t(k, v); }

  /* ═══════════════════ Lista i preambuł ═══════════════════ */

  /**
   * Corpo della lista delle simulazioni.
   *
   * Il limite del simulatore (due abilità su quattro) sta PRIMA dell'elenco,
   * non nel riepilogo: chi lo scopre alla fine ha attraversato tutta la
   * sessione con un'aspettativa sbagliata.
   *
   * Il titolo della pagina lo mette il widok: `pageHead` siedzi w Views,
   * a ten plik nie dotyka ani Views, ani DOM-u.
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

  /* ═══════════════════ Cornice sezione ═══════════════════ */

  /**
   * Barra con passo e orologio.
   *
   * L'orologio scritto è `aria-hidden` e la regione live è vuota: il testo
   * lo mette il timer in views-cils.js, con tre soli annunci. Un timer che
   * parla ogni secondo rende la pagina inutilizzabile con uno screen reader.
   */
  function barra(krok, ile) {
    return '<div class="cils-bar">' +
      '<span class="cils-step">' + esc(t("cils.stepOf", { i: krok, n: ile })) + "</span>" +
      '<span class="cils-clock js-clock" aria-hidden="true">--:--</span>' +
      '<span class="sr-only js-clock-live" role="status" aria-live="polite"></span></div>';
  }

  /**
   * Avviso di tempo scaduto (nascosto) e bottone che chiude la sezione.
   *
   * Uguale per tutte e quattro le sezioni: cambia solo l'etichetta, perché
   * l'ultima chiude l'esame invece della sezione.
   */
  function coda(kluczPrzycisku) {
    return '<p class="callout callout--trap js-expired" hidden>' + esc(t("cils.expired")) + "</p>" +
      '<div class="cils-acts"><button class="btn btn--primary js-next">' +
      esc(t(kluczPrzycisku)) + "</button></div>";
  }

  /* ═══════════════════ Ascolto e lettura: risposte chiuse ═══════════════════ */

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
    /* Il testo arriva a pezzi e i buchi stanno FRA i pezzi: numerandoli qui
       il testo resta leggibile e ogni buco rimanda al proprio item. */
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

  /* ═══════════════════ Produzione scritta ═══════════════════ */

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

  /* ═══════════════════ Produzione orale (non valutata) ═══════════════════ */

  /**
   * @param {object} sez   sekcja orale z danych kursu
   * @param {string} powod klucz napisu „nie ma czym nagrać"; "" gdy da się
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

  /* ═══════════════════ Riepilogo ═══════════════════ */

  /**
   * Tabella delle quattro abilità.
   *
   * @param {object} esito      wynik z CilsRun.esito()
   * @param {function(string):boolean} czyScadla czy sekcja padła na czasie
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

  /** Karta produkcji pisemnej; "" gdy uczeń nie doszedł do tej sekcji. */
  function scritta(pisemna) {
    if (!pisemna) return "";
    var c = global.Cils.controlloScritta(pisemna.traccia, pisemna.testo);
    var wynik = global.Writing.analyse(pisemna.testo, (pisemna.traccia || {}).richiede || []);
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.scritta")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.writingNotScored")) + "</p>" +
      '<p class="cils-count">' + esc(t("cils.wordsOf", { n: c.parole, min: c.minimo, max: c.massimo })) +
      (c.dentroLimite ? "" : " " + esc(t("cils.outOfRange"))) + "</p>" +
      /* Etykieta wymagania jest PO WŁOSKU i siedzi w danych obok listy form:
         to część zadania egzaminacyjnego, nie napis interfejsu, więc
         tłumaczenie zmieniłoby polecenie i kosztowałoby 18 kluczy razy pięć. */
      '<ul class="cils-check">' + wynik.map(function (r, i) {
        var wym = ((pisemna.traccia || {}).richiede || [])[i] || {};
        return "<li>" + (r.found ? "✓" : "✗") + " " + esc(wym.etichetta || r.key) + "</li>";
      }).join("") + "</ul></div>";
  }

  /** Karta produkcji ustnej; "" gdy uczeń nie doszedł do tej sekcji. */
  function orale(ustna) {
    if (!ustna) return "";
    return '<div class="card"><h2 class="cils-h">' + esc(t("cils.sec.orale")) + "</h2>" +
      '<p class="cils-hint">' + esc(t("cils.oralNotScored")) + "</p>" +
      "<p>" + esc(ustna.argomento || "") + "</p>" +
      '<p class="cils-count">' + esc(t("cils.selfChecked", { n: ustna.spuntate })) + "</p></div>";
  }

  /**
   * Corpo del riepilogo: tabella, verdetto, fonte della soglia, le due carte
   * di produzione e i due bottoni d'uscita.
   *
   * Il verdetto è asimmetrico per costruzione (cils.js): una abilità sotto
   * soglia basta a dire no, nessuna abilità sopra soglia basta a dire sì.
   * Qui si legge solo il campo, per non avere due posti che lo decidono.
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
