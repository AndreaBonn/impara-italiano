/* ============================================================
   Warstwa neutralna językowo — biblioteka, poziom B1.

   Ta sama budowa co `readings.js`; różnica jest w długości, nie w typie.
   Wchodzi z poziomem B1 (zob. `curriculum-index.js`).

   Na B1 tekst przestaje być opowiadaniem o jednym dniu i zaczyna mieć tezę:
   zdania są dłuższe, czasy się mieszają, a zrozumienie wymaga trzymania w
   głowie tego, co było dwa akapity wcześniej.
   ============================================================ */
LINGUAI.addReadings([

  {
    id: "lib-b1-permesso",
    cefr: "B1",
    tag: "g-congiuntivo-pres",
    titleIt: "La fila che comincia alle quattro del mattino",
    sentences: [
      "Davanti a certe questure italiane la fila comincia prima dell'alba.",
      "Non perché gli uffici aprano presto: aprono alle otto e mezza, come quasi tutti.",
      "La fila comincia alle quattro perché i posti disponibili in una mattina sono meno delle persone che ne hanno bisogno.",
      "Chi arriva alle otto sa già che probabilmente tornerà a casa senza aver fatto niente.",
      "Questo è il punto da cui bisogna partire per capire tutto il resto.",
      "Il permesso di soggiorno non si chiede allo sportello: si spedisce.",
      "La domanda viaggia in un plico che si ritira in posta, si compila a mano e si consegna a uno sportello abilitato.",
      "Poi si aspetta una convocazione, che arriva per posta o per SMS, e solo allora si va in questura.",
      "In teoria il procedimento dura sessanta giorni.",
      "In pratica, in molte città, dura un anno o più, e nel frattempo si vive con una ricevuta.",
      "La ricevuta vale come documento, e questa è una cosa che molti non sanno.",
      "Con la ricevuta si può lavorare, iscrivere i figli a scuola, aprire un conto corrente.",
      "Non si può però uscire dall'Italia e rientrare liberamente, se non verso il proprio Paese d'origine.",
      "Chi ha comprato un biglietto per andare a trovare un fratello in Germania lo scopre in aeroporto.",
      "C'è poi la questione degli appuntamenti online, che dovrebbe risolvere proprio il problema della fila.",
      "Molte questure hanno aperto un portale dove si prenota il giorno e l'ora.",
      "Il portale funziona, ma i posti si esauriscono in pochi minuti dal momento in cui vengono caricati.",
      "Si è creato così un mercato: gruppi che vendono appuntamenti che dovrebbero essere gratuiti.",
      "È illegale, e continua a esistere perché l'alternativa è la fila delle quattro del mattino.",
      "Chi vive questa situazione impara presto un vocabolario che nessun corso insegna.",
      "Sa che cos'è il «cedolino», sa distinguere una «ricevuta» da un «permesso», sa che «kit» non significa quello che sembra.",
      "Sa anche che la stessa domanda, fatta a due impiegati diversi, può ricevere due risposte diverse.",
      "Non perché qualcuno menta, ma perché la materia è complicata e cambia spesso.",
      "Per questo conviene chiedere sempre il nome di chi risponde e la data della risposta.",
      "Gli sportelli dei sindacati e delle associazioni fanno lo stesso lavoro gratis, e spesso lo fanno meglio.",
      "Lì le persone conoscono i moduli e sanno quale casella lascia passare una pratica e quale la blocca.",
      "Un errore in una casella significa mesi in più.",
      "Vale la pena ripetere la cosa più importante, perché è quella che fa la differenza fra un anno difficile e un anno impossibile.",
      "La ricevuta è un documento.",
      "Chi ve la contesta, sia un datore di lavoro o un impiegato allo sportello, sta sbagliando.",
      "E la legge, in quel punto, è dalla vostra parte."
    ],
    glossIt: ["la questura", "il plico", "la convocazione", "la ricevuta", "il cedolino", "la pratica"],
    lexIt: ["fila", "alba", "sportello", "soggiorno", "spedire", "compilare", "consegnare", "procedimento", "iscrivere", "conto corrente", "rientrare", "prenotare", "esaurirsi", "sindacato", "modulo", "casella", "contestare"],
    questions: [
      { t: "mcq", q: "Perché la fila comincia alle quattro del mattino?", opts: ["Perché gli uffici aprono all'alba", "Perché i posti di una mattina sono meno delle persone", "Perché di notte fa meno caldo"], a: 1 },
      { t: "truefalse", q: "La domanda di permesso si consegna direttamente in questura.", a: 1 },
      { t: "mcq", q: "Che cosa si può fare con la ricevuta?", opts: ["Lavorare e iscrivere i figli a scuola", "Viaggiare liberamente in Europa", "Chiedere subito la cittadinanza"], a: 0 },
      { t: "mcq", q: "Perché due impiegati possono dare due risposte diverse?", opts: ["Perché qualcuno mente", "Perché la materia è complicata e cambia spesso", "Perché dipende dalla città"], a: 1 },
      { t: "truefalse", q: "Secondo il testo, gli sportelli delle associazioni sono a pagamento.", a: 1 },
      { t: "mcq", q: "Qual è la cosa che il testo ripete alla fine?", opts: ["Che conviene prenotare online", "Che la ricevuta è un documento", "Che bisogna arrivare presto"], a: 1 }
    ]
  }

]);
