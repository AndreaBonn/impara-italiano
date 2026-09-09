/* ============================================================
   cils.js — silnik symulacji egzaminu CILS B1 Cittadinanza.

   Czysta logika: punkty, progi, werdykt. Widok (views-cils.js) rysuje,
   liczy czas i pilnuje, żeby nie dało się wrócić do zamkniętej sekcji.

   TRZY RZECZY, KTÓRE TEN PLIK ROBI INACZEJ NIŻ RESZTA KURSU.

   1. Punktuje tylko to, co da się punktować. Ascolto i lettura mają w
      kryteriach wagę za item, więc wynik jest prawdziwy. Produkcja pisemna
      i ustna mają siatki oceniane przez CZŁOWIEKA (skuteczność komunikacji,
      morfoskładnia, leksyka, wymowa): automat dałby liczbę wyglądającą jak
      ocena i nią nie będącą. Zamiast tego pisemna wraca jako lista
      elementów zadania obecnych i brakujących, a ustna nie wchodzi do wyniku.

   2. Nie ogłasza „zdałeś". Progu zaliczenia Centro CILS dla tego modułu NIE
      publikuje: 7/12 pochodzi z ich dokumentu proceduralnego i z materiału
      państwowej siedziby egzaminacyjnej (patrz cils-formato.md). Do tego
      dwie z czterech sprawności zostają tu bez oceny. Dlatego werdykt jest
      asymetryczny i to jest cała jego uczciwość:
        - poniżej progu w sprawności zmierzonej = NA PEWNO niezdane;
        - powyżej progu = nierozstrzygnięte, bo brakuje dwóch sprawności.
      Symulator, który mówi „zdane", obiecuje coś, czego nie sprawdził.

   3. Nie karze za zgadywanie, bo egzamin nie karze: odpowiedź zła i
      pominięta warte są tyle samo, czyli zero.

   Skrypt klasyczny. Bez zależności.
   ============================================================ */
(function (global) {
  "use strict";

  var Cils = {};

  /* Wartości z kryteriów oficjalnych; próg z cils-formato.md razem ze
     źródłem. Klucz napisu, nie zdanie: widok pokazuje pochodzenie w
     języku ucznia i linkuje do dokumentu. */
  Cils.MAX_ABILITA = 12;
  Cils.SOGLIA_ABILITA = 7;
  Cils.MIN_TOTALE = 28;
  Cils.MAX_TOTALE = 48;
  Cils.FONTE_SOGLIA = "cils.thresholdSource";

  /** Sprawności w kolejności egzaminu. */
  Cils.ABILITA = ["ascolto", "lettura", "scritta", "orale"];

  /** Sprawności, które ten symulator umie policzyć. Reszta jest deklarowana. */
  Cils.PUNTEGGIABILI = ["ascolto", "lettura"];

  function simulazioni() { return global.CILS || []; }

  /**
   * Simulazione per id, oppure la prima.
   * @param {string} [id]
   * @returns {object|null}
   */
  function sim(id) {
    var lista = simulazioni();
    if (!lista.length) return null;
    if (!id) return lista[0];
    for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
    return null;
  }

  /** Sezione per id dentro una simulazione. */
  function sezione(s, id) {
    var sez = (s && s.sezioni) || [];
    for (var i = 0; i < sez.length; i++) if (sez[i].id === id) return sez[i];
    return null;
  }

  /** Numero di item di una prova, qualunque sia il tipo. */
  function quantiItem(prova) { return ((prova && prova.items) || []).length; }

  /**
   * Punti di una singola prova.
   *
   * @param {object} prova   con `items[].a` e `puntiPerItem`
   * @param {Array}  risposte indice scelto per item; `null`/`undefined` = omessa
   * @returns {{punti:number, esatte:number, date:number, totali:number}}
   */
  function punteggioProva(prova, risposte) {
    var items = (prova && prova.items) || [];
    var peso = (prova && prova.puntiPerItem) || 0;
    var out = { punti: 0, esatte: 0, date: 0, totali: items.length };
    risposte = risposte || [];
    for (var i = 0; i < items.length; i++) {
      var dato = risposte[i];
      if (dato === null || dato === undefined) continue;   /* omessa = 0, come all'esame */
      out.date++;
      if (dato === items[i].a) { out.esatte++; out.punti += peso; }
    }
    return out;
  }

  /**
   * Punti di una sezione a risposta chiusa (ascolto, lettura).
   *
   * @param {object} sez
   * @param {Array<Array>} risposte una lista per prova
   */
  function punteggioSezione(sez, risposte) {
    var prove = (sez && sez.prove) || [];
    var out = { punti: 0, max: 0, esatte: 0, date: 0, totali: 0, prove: [] };
    for (var i = 0; i < prove.length; i++) {
      var p = punteggioProva(prove[i], (risposte || [])[i]);
      out.prove.push(p);
      out.punti += p.punti;
      out.esatte += p.esatte;
      out.date += p.date;
      out.totali += p.totali;
      out.max += quantiItem(prove[i]) * (prove[i].puntiPerItem || 0);
    }
    /* Mezzi punti esistono davvero: sette item da 0,5 fanno 3,5 e l'esame
       li dà. Qui non si arrotonda il risultato, si toglie il rumore della
       somma in virgola mobile (0.5 + 0.5 + 0.5 non sempre fa 1,5 esatto):
       il valore torna al mezzo punto più vicino, che è già quello vero. */
    out.punti = Math.round(out.punti * 2) / 2;
    return out;
  }

  /**
   * Esito complessivo, con la sua incertezza dichiarata.
   *
   * @param {{ascolto:number, lettura:number}} punti
   * @returns {{abilita:object, verdetto:string, contate:Array, nonContate:Array}}
   */
  function esito(punti) {
    punti = punti || {};
    var out = { abilita: {}, contate: [], nonContate: [], verdetto: "indeterminato" };
    var sotto = false;

    Cils.ABILITA.forEach(function (a) {
      var misurabile = Cils.PUNTEGGIABILI.indexOf(a) >= 0;
      if (!misurabile) {
        out.abilita[a] = { misurata: false };
        out.nonContate.push(a);
        return;
      }
      var v = typeof punti[a] === "number" ? punti[a] : 0;
      var ok = v >= Cils.SOGLIA_ABILITA;
      out.abilita[a] = { misurata: true, punti: v, max: Cils.MAX_ABILITA, sopraSoglia: ok };
      out.contate.push(a);
      if (!ok) sotto = true;
    });

    /* Asimmetria voluta: una sprawność sotto soglia basta a dire di no,
       nessuna sprawność sopra soglia basta a dire di sì. */
    out.verdetto = sotto ? "sotto-soglia" : "indeterminato";
    return out;
  }

  /**
   * Elementi della traccia presenti e assenti nel testo scritto.
   *
   * Non è un punteggio e non deve diventarlo: la griglia ufficiale pesa
   * efficacia, morfosintassi, lessico e ortografia, cioè cose che un
   * confronto di stringhe non vede. Qui verifichiamo solo che il compito
   * sia stato fatto per intero, che è l'errore più frequente e l'unico
   * che una macchina può segnalare senza mentire.
   */
  function controlloScritta(traccia, testo) {
    var parole = String(testo || "").trim().split(/\s+/).filter(Boolean).length;
    return {
      parole: parole,
      dentroLimite: parole >= 80 && parole <= 120,
      minimo: 80,
      massimo: 120,
      elementi: ((traccia && traccia.richiede) || []).map(function (e) { return { voce: e }; })
    };
  }

  Cils.sim = sim;
  Cils.sezione = sezione;
  Cils.punteggioProva = punteggioProva;
  Cils.punteggioSezione = punteggioSezione;
  Cils.esito = esito;
  Cils.controlloScritta = controlloScritta;
  Cils.simulazioni = simulazioni;
  global.Cils = Cils;

})(window);
