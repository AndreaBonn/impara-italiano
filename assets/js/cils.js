/* ============================================================
   cils.js — the engine of the CILS B1 Cittadinanza exam simulation.

   Pure logic: points, thresholds, verdict. The view (views-cils.js) draws,
   counts time and makes sure a closed section cannot be reopened.

   THREE THINGS THIS FILE DOES DIFFERENTLY FROM THE REST OF THE COURSE.

   1. It scores only what can be scored. Listening and reading have a
      per-item weight in the criteria, so the result is real. Written and
      oral production are graded by HUMANS against rubrics (communicative
      effectiveness, morphosyntax, lexis, pronunciation): an automaton would
      produce a number that looks like a grade without being one. Instead,
      the written part comes back as a list of task elements present and
      missing, and the oral part does not enter the result at all.

   2. It does not announce "you passed". Centro CILS does NOT publish the
      pass threshold for this module: 7/12 comes from their procedural
      document and from the material of a state examination centre (see
      cils-formato.md). On top of that, two of the four skills are left
      ungraded here. That is why the verdict is asymmetric, and that
      asymmetry is the whole of its honesty:
        - below the threshold in a measured skill = DEFINITELY not passed;
        - above the threshold = undetermined, because two skills are missing.
      A simulator that says "passed" promises something it never checked.

   3. It does not punish guessing, because the exam does not: a wrong answer
      and an omitted one are worth the same, that is zero.

   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Cils = {};

  /* Values from the official criteria; the threshold from cils-formato.md
     together with its source. A string key, not a sentence: the view shows
     the provenance in the student's language and links to the document. */
  Cils.MAX_ABILITA = 12;
  Cils.SOGLIA_ABILITA = 7;
  Cils.MIN_TOTALE = 28;
  Cils.MAX_TOTALE = 48;
  Cils.FONTE_SOGLIA = "cils.thresholdSource";

  /** The skills in exam order. */
  Cils.ABILITA = ["ascolto", "lettura", "scritta", "orale"];

  /** The skills this simulator can score. The rest are declared, not measured. */
  Cils.PUNTEGGIABILI = ["ascolto", "lettura"];

  function simulazioni() { return global.CILS || []; }

  /**
   * A simulation by id, or the first one.
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

  /** A section by id inside a simulation. */
  function sezione(s, id) {
    var sez = (s && s.sezioni) || [];
    for (var i = 0; i < sez.length; i++) if (sez[i].id === id) return sez[i];
    return null;
  }

  /** The number of items in a task, whatever its type. */
  function quantiItem(prova) { return ((prova && prova.items) || []).length; }

  /**
   * The points of a single task.
   *
   * @param {object} prova   with `items[].a` and `puntiPerItem`
   * @param {Array}  risposte the index chosen per item; `null`/`undefined` = omitted
   * @returns {{punti:number, esatte:number, date:number, totali:number}}
   */
  function punteggioProva(prova, risposte) {
    var items = (prova && prova.items) || [];
    var peso = (prova && prova.puntiPerItem) || 0;
    var out = { punti: 0, esatte: 0, date: 0, totali: items.length };
    risposte = risposte || [];
    for (var i = 0; i < items.length; i++) {
      var dato = risposte[i];
      if (dato === null || dato === undefined) continue;   /* omitted = 0, as at the exam */
      out.date++;
      if (dato === items[i].a) { out.esatte++; out.punti += peso; }
    }
    return out;
  }

  /**
   * The points of a closed-answer section (listening, reading).
   *
   * @param {object} sez
   * @param {Array<Array>} risposte one list per task
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
    /* Half points really exist: seven items worth 0.5 make 3.5 and the exam
       awards them. Nothing is rounded here, we only remove the noise of
       floating-point addition (0.5 + 0.5 + 0.5 is not always exactly 1.5):
       the value returns to the nearest half point, which is the true one. */
    out.punti = Math.round(out.punti * 2) / 2;
    return out;
  }

  /**
   * The overall outcome, with its uncertainty stated.
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

    /* A deliberate asymmetry: one skill below the threshold is enough to say
       no, no number of skills above it is enough to say yes. */
    out.verdetto = sotto ? "sotto-soglia" : "indeterminato";
    return out;
  }

  /**
   * The elements of the prompt present in and absent from the written text.
   *
   * This is not a score and must not become one: the official rubric weighs
   * effectiveness, morphosyntax, lexis and spelling, that is things a string
   * comparison cannot see. Here we only check that the task was done in
   * full, which is the most frequent mistake and the only one a machine can
   * report without lying.
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
