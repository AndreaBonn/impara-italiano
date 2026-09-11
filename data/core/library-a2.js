/* ============================================================
   Warstwa neutralna językowo — biblioteka, poziom A2.

   Te teksty mają tę samą budowę co `readings.js` i są tym samym typem
   danych: różnica jest w DŁUGOŚCI, nie w strukturze. Dlatego nie ma dla nich
   osobnego widoku ani osobnego globalnego — `LINGUAI.addReadings` dokłada je
   do tej samej listy, a `views-reading.js` rysuje je bez zmiany jednej linii.

   Wchodzą z poziomem, nie przy starcie: `curriculum-index.js` wymienia ten
   plik w `dataFiles` poziomu A2. Uczeń, który nigdy nie otworzył A2, nie
   pobiera tych zdań — a jest ich dziesięć razy więcej niż w krótkich
   czytankach.

   Dyktanda tu nie ma i to jest decyzja widoku, nie danych: dyktando z
   trzydziestu zdań to nie trudniejsze ćwiczenie, tylko ćwiczenie bez końca.
   ============================================================ */
LINGUAI.addReadings([

  {
    id: "lib-a2-casa",
    cefr: "A2",
    tag: "g-passato-prossimo",
    titleIt: "Come ho trovato casa a Bologna",
    sentences: [
      "Sono arrivato a Bologna in settembre, con due valigie e il nome di un albergo vicino alla stazione.",
      "Il primo giorno ho pensato che trovare una stanza fosse facile.",
      "Ho aperto il telefono, ho cercato «affitto Bologna» e ho trovato trecento annunci.",
      "Dopo una settimana avevo scritto a quaranta persone e nessuno mi aveva risposto.",
      "Un ragazzo del mio corso mi ha spiegato una cosa che non sapevo.",
      "A settembre arrivano tutti gli studenti insieme, e le stanze finiscono in pochi giorni.",
      "Chi cerca casa in quel mese cerca insieme ad altre mille persone.",
      "Mi ha detto anche che gli annunci migliori non stanno sui siti grandi.",
      "Stanno nei gruppi del quartiere, o su un foglio attaccato alla bacheca del dipartimento.",
      "Così ho cambiato metodo.",
      "Ogni mattina passavo davanti a tre bacheche e leggevo i fogli nuovi.",
      "Il pomeriggio andavo nei bar della zona universitaria e chiedevo se qualcuno sapeva di una stanza libera.",
      "La prima volta mi vergognavo, perché il mio italiano era ancora lento.",
      "Poi ho capito che alla gente non importava del mio accento.",
      "Una barista mi ha dato il numero di sua cugina, che aveva una camera libera in via Mascarella.",
      "Ho chiamato la sera stessa.",
      "La signora mi ha chiesto che lavoro facevo, da dove venivo e se fumavo.",
      "Poi mi ha detto di passare il giorno dopo alle sei.",
      "La stanza era piccola e la finestra dava su un cortile grigio.",
      "Ma c'era luce fino alle quattro del pomeriggio, e il riscaldamento era incluso.",
      "Il prezzo era quattrocento euro al mese, più la parte delle bollette.",
      "Ho chiesto se potevo pensarci una notte, e lei mi ha detto di sì.",
      "La mattina dopo ho detto di sì anch'io.",
      "Prima di firmare ho fatto una cosa che mi aveva consigliato il ragazzo del corso.",
      "Ho chiesto un contratto scritto, con il mio nome e la data.",
      "Senza contratto non si può chiedere la residenza, e senza residenza molte cose diventano difficili.",
      "La signora è stata tranquilla e ha detto che il contratto lo faceva sempre.",
      "Abbiamo firmato in cucina, con il caffè davanti.",
      "Adesso vivo lì da otto mesi e conosco il nome della portinaia e quello del panettiere.",
      "Se dovessi ricominciare, comincerei dalle bacheche e non dai siti.",
      "E comincerei a luglio, non a settembre."
    ],
    glossIt: ["l'annuncio", "la bacheca", "la bolletta", "il cortile", "la residenza", "il riscaldamento"],
    lexIt: ["valigia", "affitto", "stanza", "quartiere", "dipartimento", "vergognarsi", "accento", "cugina", "camera", "incluso", "bolletta", "firmare", "contratto", "portinaia", "panettiere"],
    questions: [
      { t: "mcq", q: "Perché a settembre era difficile trovare una stanza?", opts: ["Perché gli studenti arrivano tutti insieme", "Perché i prezzi salgono d'inverno", "Perché gli uffici sono chiusi"], a: 0 },
      { t: "truefalse", q: "I siti grandi avevano gli annunci migliori.", a: 1 },
      { t: "mcq", q: "Chi gli ha dato il contatto della stanza?", opts: ["Un professore", "Una barista", "La portinaia"], a: 1 },
      { t: "mcq", q: "Perché ha chiesto un contratto scritto?", opts: ["Per pagare di meno", "Per avere il riscaldamento incluso", "Perché senza contratto non si chiede la residenza"], a: 2 },
      { t: "truefalse", q: "Alla fine consiglia di cercare casa a luglio.", a: 0 }
    ]
  }

]);
