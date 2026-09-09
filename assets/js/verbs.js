/* ============================================================
   verbs.js — silnik odmiany czasowników włoskich
   Obsługuje regularne -are / -ere / -ire (także wzorzec -isc-),
   zmiany ortograficzne (-care/-gare/-ciare/-giare/-iare)
   oraz tabelę form nieregularnych dla ~45 czasowników wysokiej
   częstotliwości.
   Używane przez: narzędzie „Odmiana czasowników" i ćwiczenia typu „conj".
   ============================================================ */
(function (global) {
  "use strict";

  var PERSONS = ["io", "tu", "lui/lei", "noi", "voi", "loro"];

  var REG = {
    are: {
      pres:    ["o", "i", "a", "iamo", "ate", "ano"],
      imperf:  ["avo", "avi", "ava", "avamo", "avate", "avano"],
      remoto:  ["ai", "asti", "ò", "ammo", "aste", "arono"],
      cong:    ["i", "i", "i", "iamo", "iate", "ino"],
      congImp: ["assi", "assi", "asse", "assimo", "aste", "assero"],
      imper:   [null, "a", "i", "iamo", "ate", "ino"],
      pp: "ato", ger: "ando"
    },
    ere: {
      pres:    ["o", "i", "e", "iamo", "ete", "ono"],
      imperf:  ["evo", "evi", "eva", "evamo", "evate", "evano"],
      remoto:  ["ei", "esti", "é", "emmo", "este", "erono"],
      cong:    ["a", "a", "a", "iamo", "iate", "ano"],
      congImp: ["essi", "essi", "esse", "essimo", "este", "essero"],
      imper:   [null, "i", "a", "iamo", "ete", "ano"],
      pp: "uto", ger: "endo"
    },
    ire: {
      pres:    ["o", "i", "e", "iamo", "ite", "ono"],
      imperf:  ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
      remoto:  ["ii", "isti", "ì", "immo", "iste", "irono"],
      cong:    ["a", "a", "a", "iamo", "iate", "ano"],
      congImp: ["issi", "issi", "isse", "issimo", "iste", "issero"],
      imper:   [null, "i", "a", "iamo", "ite", "ano"],
      pp: "ito", ger: "endo"
    },
    isc: {
      pres:    ["isco", "isci", "isce", "iamo", "ite", "iscono"],
      imperf:  ["ivo", "ivi", "iva", "ivamo", "ivate", "ivano"],
      remoto:  ["ii", "isti", "ì", "immo", "iste", "irono"],
      cong:    ["isca", "isca", "isca", "iamo", "iate", "iscano"],
      congImp: ["issi", "issi", "isse", "issimo", "iste", "issero"],
      imper:   [null, "isci", "isca", "iamo", "ite", "iscano"],
      pp: "ito", ger: "endo"
    }
  };

  var FUT = ["ò", "ai", "à", "emo", "ete", "anno"];
  var COND = ["ei", "esti", "ebbe", "emmo", "este", "ebbero"];

  /* ---------------- Czasowniki nieregularne ----------------
     pres/imperf/remoto/cong/congImp/imper : pełne formy (6 pozycji)
     futStem : temat czasu przyszłego i trybu warunkowego
     pp : imiesłów przeszły ; aux : "avere" | "essere" | "both"
     isc : true → wzorzec -isc- ; refl : true → czasownik zwrotny
     -------------------------------------------------------- */
  var IRR = {
    essere: {
      aux: "essere", ppAgree: true, pp: "stato",
      pres: ["sono", "sei", "è", "siamo", "siete", "sono"],
      imperf: ["ero", "eri", "era", "eravamo", "eravate", "erano"],
      remoto: ["fui", "fosti", "fu", "fummo", "foste", "furono"],
      futStem: "sar",
      cong: ["sia", "sia", "sia", "siamo", "siate", "siano"],
      congImp: ["fossi", "fossi", "fosse", "fossimo", "foste", "fossero"],
      imper: [null, "sii", "sia", "siamo", "siate", "siano"],
      ger: "essendo"
    },
    avere: {
      aux: "avere", pp: "avuto",
      pres: ["ho", "hai", "ha", "abbiamo", "avete", "hanno"],
      remoto: ["ebbi", "avesti", "ebbe", "avemmo", "aveste", "ebbero"],
      futStem: "avr",
      cong: ["abbia", "abbia", "abbia", "abbiamo", "abbiate", "abbiano"],
      imper: [null, "abbi", "abbia", "abbiamo", "abbiate", "abbiano"]
    },
    fare: {
      aux: "avere", pp: "fatto", ger: "facendo",
      pres: ["faccio", "fai", "fa", "facciamo", "fate", "fanno"],
      imperf: ["facevo", "facevi", "faceva", "facevamo", "facevate", "facevano"],
      remoto: ["feci", "facesti", "fece", "facemmo", "faceste", "fecero"],
      futStem: "far",
      cong: ["faccia", "faccia", "faccia", "facciamo", "facciate", "facciano"],
      congImp: ["facessi", "facessi", "facesse", "facessimo", "faceste", "facessero"],
      imper: [null, "fa'", "faccia", "facciamo", "fate", "facciano"]
    },
    dire: {
      aux: "avere", pp: "detto", ger: "dicendo",
      pres: ["dico", "dici", "dice", "diciamo", "dite", "dicono"],
      imperf: ["dicevo", "dicevi", "diceva", "dicevamo", "dicevate", "dicevano"],
      remoto: ["dissi", "dicesti", "disse", "dicemmo", "diceste", "dissero"],
      futStem: "dir",
      cong: ["dica", "dica", "dica", "diciamo", "diciate", "dicano"],
      congImp: ["dicessi", "dicessi", "dicesse", "dicessimo", "diceste", "dicessero"],
      imper: [null, "di'", "dica", "diciamo", "dite", "dicano"]
    },
    stare: {
      aux: "essere", ppAgree: true, pp: "stato",
      pres: ["sto", "stai", "sta", "stiamo", "state", "stanno"],
      remoto: ["stetti", "stesti", "stette", "stemmo", "steste", "stettero"],
      futStem: "star",
      cong: ["stia", "stia", "stia", "stiamo", "stiate", "stiano"],
      congImp: ["stessi", "stessi", "stesse", "stessimo", "steste", "stessero"],
      imper: [null, "sta'", "stia", "stiamo", "state", "stiano"]
    },
    dare: {
      aux: "avere", pp: "dato",
      pres: ["do", "dai", "dà", "diamo", "date", "danno"],
      remoto: ["diedi", "desti", "diede", "demmo", "deste", "diedero"],
      futStem: "dar",
      cong: ["dia", "dia", "dia", "diamo", "diate", "diano"],
      congImp: ["dessi", "dessi", "desse", "dessimo", "deste", "dessero"],
      imper: [null, "da'", "dia", "diamo", "date", "diano"]
    },
    andare: {
      aux: "essere", ppAgree: true, pp: "andato",
      pres: ["vado", "vai", "va", "andiamo", "andate", "vanno"],
      futStem: "andr",
      cong: ["vada", "vada", "vada", "andiamo", "andiate", "vadano"],
      imper: [null, "va'", "vada", "andiamo", "andate", "vadano"]
    },
    venire: {
      aux: "essere", ppAgree: true, pp: "venuto",
      pres: ["vengo", "vieni", "viene", "veniamo", "venite", "vengono"],
      remoto: ["venni", "venisti", "venne", "venimmo", "veniste", "vennero"],
      futStem: "verr",
      cong: ["venga", "venga", "venga", "veniamo", "veniate", "vengano"],
      imper: [null, "vieni", "venga", "veniamo", "venite", "vengano"]
    },
    uscire: {
      aux: "essere", ppAgree: true, pp: "uscito",
      pres: ["esco", "esci", "esce", "usciamo", "uscite", "escono"],
      cong: ["esca", "esca", "esca", "usciamo", "usciate", "escano"],
      imper: [null, "esci", "esca", "usciamo", "uscite", "escano"]
    },
    potere: {
      aux: "both", pp: "potuto",
      pres: ["posso", "puoi", "può", "possiamo", "potete", "possono"],
      futStem: "potr",
      cong: ["possa", "possa", "possa", "possiamo", "possiate", "possano"],
      imper: [null, null, null, null, null, null]
    },
    volere: {
      aux: "both", pp: "voluto",
      pres: ["voglio", "vuoi", "vuole", "vogliamo", "volete", "vogliono"],
      remoto: ["volli", "volesti", "volle", "volemmo", "voleste", "vollero"],
      futStem: "vorr",
      cong: ["voglia", "voglia", "voglia", "vogliamo", "vogliate", "vogliano"],
      imper: [null, "vogli", "voglia", "vogliamo", "vogliate", "vogliano"]
    },
    dovere: {
      aux: "both", pp: "dovuto",
      pres: ["devo", "devi", "deve", "dobbiamo", "dovete", "devono"],
      futStem: "dovr",
      cong: ["debba", "debba", "debba", "dobbiamo", "dobbiate", "debbano"],
      imper: [null, null, null, null, null, null]
    },
    sapere: {
      aux: "avere", pp: "saputo",
      pres: ["so", "sai", "sa", "sappiamo", "sapete", "sanno"],
      remoto: ["seppi", "sapesti", "seppe", "sapemmo", "sapeste", "seppero"],
      futStem: "sapr",
      cong: ["sappia", "sappia", "sappia", "sappiamo", "sappiate", "sappiano"],
      imper: [null, "sappi", "sappia", "sappiamo", "sappiate", "sappiano"]
    },
    bere: {
      aux: "avere", pp: "bevuto", ger: "bevendo",
      pres: ["bevo", "bevi", "beve", "beviamo", "bevete", "bevono"],
      imperf: ["bevevo", "bevevi", "beveva", "bevevamo", "bevevate", "bevevano"],
      remoto: ["bevvi", "bevesti", "bevve", "bevemmo", "beveste", "bevvero"],
      futStem: "berr",
      cong: ["beva", "beva", "beva", "beviamo", "beviate", "bevano"],
      congImp: ["bevessi", "bevessi", "bevesse", "bevessimo", "beveste", "bevessero"],
      imper: [null, "bevi", "beva", "beviamo", "bevete", "bevano"]
    },
    tenere: {
      aux: "avere", pp: "tenuto",
      pres: ["tengo", "tieni", "tiene", "teniamo", "tenete", "tengono"],
      remoto: ["tenni", "tenesti", "tenne", "tenemmo", "teneste", "tennero"],
      futStem: "terr",
      cong: ["tenga", "tenga", "tenga", "teniamo", "teniate", "tengano"],
      imper: [null, "tieni", "tenga", "teniamo", "tenete", "tengano"]
    },
    rimanere: {
      aux: "essere", ppAgree: true, pp: "rimasto",
      pres: ["rimango", "rimani", "rimane", "rimaniamo", "rimanete", "rimangono"],
      remoto: ["rimasi", "rimanesti", "rimase", "rimanemmo", "rimaneste", "rimasero"],
      futStem: "rimarr",
      cong: ["rimanga", "rimanga", "rimanga", "rimaniamo", "rimaniate", "rimangano"],
      imper: [null, "rimani", "rimanga", "rimaniamo", "rimanete", "rimangano"]
    },
    salire: {
      aux: "both", pp: "salito",
      pres: ["salgo", "sali", "sale", "saliamo", "salite", "salgono"],
      cong: ["salga", "salga", "salga", "saliamo", "saliate", "salgano"],
      imper: [null, "sali", "salga", "saliamo", "salite", "salgano"]
    },
    morire: {
      aux: "essere", ppAgree: true, pp: "morto",
      pres: ["muoio", "muori", "muore", "moriamo", "morite", "muoiono"],
      futStem: "morir",
      cong: ["muoia", "muoia", "muoia", "moriamo", "moriate", "muoiano"],
      imper: [null, "muori", "muoia", "moriamo", "morite", "muoiano"]
    },
    piacere: {
      aux: "essere", ppAgree: true, pp: "piaciuto",
      pres: ["piaccio", "piaci", "piace", "piacciamo", "piacete", "piacciono"],
      remoto: ["piacqui", "piacesti", "piacque", "piacemmo", "piaceste", "piacquero"],
      cong: ["piaccia", "piaccia", "piaccia", "piacciamo", "piacciate", "piacciano"]
    },
    vedere: { aux: "avere", pp: "visto", futStem: "vedr", remoto: ["vidi", "vedesti", "vide", "vedemmo", "vedeste", "videro"] },
    vivere: { aux: "both", pp: "vissuto", futStem: "vivr", remoto: ["vissi", "vivesti", "visse", "vivemmo", "viveste", "vissero"] },
    scegliere: {
      aux: "avere", pp: "scelto",
      pres: ["scelgo", "scegli", "sceglie", "scegliamo", "scegliete", "scelgono"],
      remoto: ["scelsi", "scegliesti", "scelse", "scegliemmo", "sceglieste", "scelsero"],
      cong: ["scelga", "scelga", "scelga", "scegliamo", "scegliate", "scelgano"]
    },
    prendere: { aux: "avere", pp: "preso", remoto: ["presi", "prendesti", "prese", "prendemmo", "prendeste", "presero"] },
    mettere: { aux: "avere", pp: "messo", remoto: ["misi", "mettesti", "mise", "mettemmo", "metteste", "misero"] },
    leggere: { aux: "avere", pp: "letto", remoto: ["lessi", "leggesti", "lesse", "leggemmo", "leggeste", "lessero"] },
    scrivere: { aux: "avere", pp: "scritto", remoto: ["scrissi", "scrivesti", "scrisse", "scrivemmo", "scriveste", "scrissero"] },
    chiedere: { aux: "avere", pp: "chiesto", remoto: ["chiesi", "chiedesti", "chiese", "chiedemmo", "chiedeste", "chiesero"] },
    rispondere: { aux: "avere", pp: "risposto", remoto: ["risposi", "rispondesti", "rispose", "rispondemmo", "rispondeste", "risposero"] },
    aprire: { aux: "avere", pp: "aperto" },
    offrire: { aux: "avere", pp: "offerto" },
    soffrire: { aux: "avere", pp: "sofferto" },
    conoscere: { aux: "avere", pp: "conosciuto", remoto: ["conobbi", "conoscesti", "conobbe", "conoscemmo", "conosceste", "conobbero"] },
    nascere: { aux: "essere", ppAgree: true, pp: "nato", remoto: ["nacqui", "nascesti", "nacque", "nascemmo", "nasceste", "nacquero"] },
    chiudere: { aux: "avere", pp: "chiuso", remoto: ["chiusi", "chiudesti", "chiuse", "chiudemmo", "chiudeste", "chiusero"] },
    decidere: { aux: "avere", pp: "deciso", remoto: ["decisi", "decidesti", "decise", "decidemmo", "decideste", "decisero"] },
    perdere: { aux: "avere", pp: "perso", remoto: ["persi", "perdesti", "perse", "perdemmo", "perdeste", "persero"] },
    vincere: { aux: "avere", pp: "vinto", remoto: ["vinsi", "vincesti", "vinse", "vincemmo", "vinceste", "vinsero"] },
    correre: { aux: "both", pp: "corso", remoto: ["corsi", "corresti", "corse", "corremmo", "correste", "corsero"] },
    spegnere: {
      aux: "avere", pp: "spento",
      pres: ["spengo", "spegni", "spegne", "spegniamo", "spegnete", "spengono"],
      remoto: ["spensi", "spegnesti", "spense", "spegnemmo", "spegneste", "spensero"],
      cong: ["spenga", "spenga", "spenga", "spegniamo", "spegniate", "spengano"]
    },
    tradurre: {
      aux: "avere", pp: "tradotto", ger: "traducendo",
      pres: ["traduco", "traduci", "traduce", "traduciamo", "traducete", "traducono"],
      imperf: ["traducevo", "traducevi", "traduceva", "traducevamo", "traducevate", "traducevano"],
      remoto: ["tradussi", "traducesti", "tradusse", "traducemmo", "traduceste", "tradussero"],
      futStem: "tradurr",
      cong: ["traduca", "traduca", "traduca", "traduciamo", "traduciate", "traducano"],
      congImp: ["traducessi", "traducessi", "traducesse", "traducessimo", "traduceste", "traducessero"]
    },
    porre: {
      aux: "avere", pp: "posto", ger: "ponendo",
      pres: ["pongo", "poni", "pone", "poniamo", "ponete", "pongono"],
      imperf: ["ponevo", "ponevi", "poneva", "ponevamo", "ponevate", "ponevano"],
      remoto: ["posi", "ponesti", "pose", "ponemmo", "poneste", "posero"],
      futStem: "porr",
      cong: ["ponga", "ponga", "ponga", "poniamo", "poniate", "pongano"],
      congImp: ["ponessi", "ponessi", "ponesse", "ponessimo", "poneste", "ponessero"]
    },
    sedere: {
      aux: "essere", ppAgree: true, pp: "seduto",
      pres: ["siedo", "siedi", "siede", "sediamo", "sedete", "siedono"],
      cong: ["sieda", "sieda", "sieda", "sediamo", "sediate", "siedano"]
    },
    "accorgersi": { aux: "essere", ppAgree: true, pp: "accorto", refl: true, remoto: ["mi accorsi", "ti accorgesti", "si accorse", "ci accorgemmo", "vi accorgeste", "si accorsero"] },

    /* ------------------------------------------------------------------
       Imiesłowy nieregularne, których brakowało.

       Zmierzone: z 45 pospolitych czasowników o nieregularnym imiesłowie
       koniugator produkował 25 form NIEISTNIEJĄCYCH — „riduto" zamiast
       „riso", „rotto" jako „romputo", „mosso" jako „muovuto". Imiesłów
       wchodzi w SZEŚĆ z czternastu czasów (passato prossimo, trapassato,
       futuro anteriore, condizionale passato, congiuntivo passato i
       trapassato), więc jeden brak psuł sześć wierszy tabeli odmiany i
       każde ćwiczenie na czasie złożonym z tym czasownikiem.

       Wpisy są minimalne: samo `pp`. Reszta form tych czasowników jest
       regularna albo wystarczająco bliska, a `remoto` zostaje na razie
       regularne — to jeden czas na poziomie C2 i osobna, zadeklarowana
       luka, nie cichy błąd.

       Czasowniki z przedrostkiem dziedziczą po rdzeniu (patrz irrOf), więc
       „ridere" naprawia też „sorridere", a „prendere" — „riprendere".
       ------------------------------------------------------------------ */
    ridere: { aux: "avere", pp: "riso" },
    succedere: { aux: "essere", ppAgree: true, pp: "successo" },
    accendere: { aux: "avere", pp: "acceso" },
    dividere: { aux: "avere", pp: "diviso" },
    coprire: { aux: "avere", pp: "coperto" },
    scoprire: { aux: "avere", pp: "scoperto" },
    crescere: { aux: "essere", ppAgree: true, pp: "cresciuto" },
    piangere: { aux: "avere", pp: "pianto" },
    spendere: { aux: "avere", pp: "speso" },
    scendere: { aux: "both", ppAgree: true, pp: "sceso" },
    rendere: { aux: "avere", pp: "reso" },
    spingere: { aux: "avere", pp: "spinto" },
    giungere: { aux: "essere", ppAgree: true, pp: "giunto" },
    togliere: { aux: "avere", pp: "tolto" },
    cogliere: { aux: "avere", pp: "colto" },
    raccogliere: { aux: "avere", pp: "raccolto" },
    valere: { aux: "essere", ppAgree: true, pp: "valso" },
    parere: { aux: "essere", ppAgree: true, pp: "parso" },
    correggere: { aux: "avere", pp: "corretto" },
    proteggere: { aux: "avere", pp: "protetto" },
    distruggere: { aux: "avere", pp: "distrutto" },
    friggere: { aux: "avere", pp: "fritto" },
    cuocere: { aux: "avere", pp: "cotto" },
    rompere: { aux: "avere", pp: "rotto" },
    muovere: { aux: "avere", pp: "mosso" },
    tacere: { aux: "avere", pp: "taciuto" }
  };

  /* czasowniki -ire z wzorcem -isc- (lista częstotliwościowa) */
  var ISC = ["capire", "finire", "preferire", "pulire", "spedire", "unire", "costruire",
    "restituire", "chiarire", "contribuire", "diminuire", "distribuire", "fornire",
    "garantire", "gestire", "guarire", "impedire", "inserire", "istituire", "obbedire",
    "percepire", "proibire", "punire", "reagire", "restituire", "riferire", "sostituire",
    "sparire", "stabilire", "starnutire", "suggerire", "tradire", "trasferire", "ubbidire"];

  /* czasowniki nieprzechodnie z essere w czasach złożonych */
  var ESSERE_VERBS = ["andare", "venire", "arrivare", "partire", "tornare", "ritornare",
    "entrare", "uscire", "salire", "scendere", "nascere", "morire", "restare", "rimanere",
    "stare", "essere", "diventare", "cadere", "piacere", "dispiacere", "sembrare",
    "succedere", "costare", "crescere", "vivere", "durare", "passare", "riuscire", "bastare"];

  /* ---------------- Pomocnicze ---------------- */
  function isRefl(inf) { return /(?:arsi|ersi|irsi|rsi)$/.test(inf); }

  function baseOf(inf) {
    return isRefl(inf) ? inf.replace(/si$/, "e") : inf;   // svegliarsi -> svegliare
  }

  function groupOf(inf) {
    var b = baseOf(inf);
    if (/are$/.test(b)) return "are";
    if (/ere$/.test(b) || /rre$/.test(b)) return "ere";
    if (/ire$/.test(b)) return (ISC.indexOf(b) >= 0) ? "isc" : "ire";
    return "are";
  }

  function stemOf(inf) { return baseOf(inf).replace(/(are|ere|ire)$/, ""); }

  /** Zmiany ortograficzne przy doklejaniu końcówki. */
  function join(stem, ending, group) {
    if (group === "are") {
      // -care / -gare : h przed e/i  (cerco → cerchi, pago → pagherò)
      if (/(c|g)$/.test(stem) && /^[ei]/.test(ending)) return stem + "h" + ending;
      // -ciare / -giare / -sciare : jedno i  (comincio → cominci, non "cominci-i")
      if (/(ci|gi|sci)$/.test(stem) && /^[ei]/.test(ending)) return stem.slice(0, -1) + ending;
      // -iare bez akcentu na i : studi + iamo → studiamo
      if (/i$/.test(stem) && /^i/.test(ending)) return stem.slice(0, -1) + ending;
    }
    if (group === "ere" || group === "ire" || group === "isc") {
      if (/(c|g)$/.test(stem) && /^(iamo|iate|i$)/.test(ending)) return stem + ending; // legg + iamo
    }
    return stem + ending;
  }

  function futureStem(inf) {
    var b = baseOf(inf), g = groupOf(inf), s = stemOf(inf);
    if (/rre$/.test(b)) return b.replace(/e$/, "");           // porre → porr
    if (g === "are") {
      if (/(c|g)$/.test(s)) return s + "her";                  // cercare → cercher
      if (/(ci|gi|sci)$/.test(s)) return s.slice(0, -1) + "er";// mangiare → manger
      return s + "er";
    }
    if (g === "ere") return s + "er";
    return s + "ir";
  }

  /* --------------------------------------------------------
     Czasowniki z przedrostkiem dziedziczą nieregularność.

     „promettere" to „mettere" z przedrostkiem i odmienia się tak samo:
     imiesłów „promesso", nie „promettuto". Bez tego widok odmiany
     pokazywał uczniowi formy nieistniejące — dla „promettere",
     „permettere", „riscrivere", „comporre" i całej reszty rodziny.
     Znalezione, gdy bramka lookupu nie umiała rozpoznać „promesso".

     Przedrostek musi być z listy zamkniętej i to jest istotne: samo
     „kończy się na znany czasownik" zrobiłoby z „mandare" krewnego
     „andare" i wyprodukowało „mando/vado". Lista jest tania, pomyłka nie.
     -------------------------------------------------------- */
  var PRZEDROSTKI = [
    "ri", "pro", "per", "pre", "com", "con", "contro", "co",
    "sotto", "sopra", "sovra", "super", "inter", "intra",
    "in", "im", "ir", "ap", "am", "ab", "ad", "af", "ag", "al", "as", "at",
    "tras", "trans", "tra", "dis", "de", "es", "ex", "re", "sor", "so", "su", "s"
  ];

  /* Rozbiór na przedrostek i rdzeń jest heurystyką PISOWNI, nie etymologią,
     więc zamknięta lista przedrostków wyżej wyklucza „mandare = m + andare",
     ale nie wyklucza wszystkiego. Te trzy wpadły:

       restare  wygląda jak re + stare i dostawało formy „stare",
                czyli „restanno" zamiast „restano";
       prestare to samo, ten sam rdzeń;
       affare   nie jest nawet czasownikiem — trafia tu, bo kończy się
                na -are, a słownik kursu odmienia wszystko z tą końcówką.

     Znalezione przez bramkę pokrycia: „restano" z czytanki nie miało czego
     rozpoznać. Lista rośnie tylko wtedy, gdy bramka znowu coś złapie. */
  var BEZ_DZIEDZICZENIA = { restare: 1, prestare: 1, affare: 1 };

  /* Przedrostek zasymilowany, którego pisownia nie pokazuje: „ottenere" to
     ob+tenere, „mantenere" to manu+tenere. Dopisanie „ot" albo „man" do
     listy przedrostków ściągnęłoby „mandare" na „dare", więc te rodziny
     wskazujemy wprost. Bez tego „ottiene" wychodziło jako „ottene". */
  var DZIEDZICZY_WPROST = { ottenere: "tenere", mantenere: "tenere", sostenere: "tenere" };

  var cachePrzedrostkow = {};

  /**
   * Opis nieregularności dla bezokolicznika, z dziedziczeniem po przedrostku.
   *
   * @param {string} b bezokolicznik w formie podstawowej (bez `-si`)
   * @returns {object|null}
   */
  function irrOf(b) {
    if (IRR[b]) return IRR[b];
    if (BEZ_DZIEDZICZENIA[b]) return null;
    if (Object.prototype.hasOwnProperty.call(cachePrzedrostkow, b)) return cachePrzedrostkow[b];

    if (DZIEDZICZY_WPROST[b]) {
      var rdzenWprost = DZIEDZICZY_WPROST[b];
      cachePrzedrostkow[b] = zPrzedrostkiem(IRR[rdzenWprost], b.slice(0, b.length - rdzenWprost.length));
      return cachePrzedrostkow[b];
    }

    var wynik = null;
    for (var i = 0; i < PRZEDROSTKI.length && !wynik; i++) {
      var p = PRZEDROSTKI[i];
      if (b.length <= p.length + 3) continue;
      if (b.slice(0, p.length) !== p) continue;
      var rdzen = b.slice(p.length);
      if (!IRR[rdzen]) continue;
      wynik = zPrzedrostkiem(IRR[rdzen], p);
    }
    cachePrzedrostkow[b] = wynik;
    return wynik;
  }

  /** Kopia opisu z przedrostkiem doklejonym do każdej formy. */
  function zPrzedrostkiem(d, p) {
    var out = {};
    Object.keys(d).forEach(function (k) {
      var v = d[k];
      if (typeof v === "string") out[k] = p + v;
      else if (Array.isArray(v)) out[k] = v.map(function (x) { return x === null ? null : p + x; });
      else out[k] = v;                       // aux, ppAgree i inne flagi
    });
    /* Posiłkownik się NIE dziedziczy: „andare" chce „essere", ale
       „riandare" jest rzadkie, a „mettere/promettere" oba biorą „avere".
       Zostawiamy to, co było w opisie rdzenia, bo dla par prefiksowych
       pokrywa się w praktyce; wyjątki idą do IRR wprost. */
    return out;
  }

  function reflPronoun(i) { return ["mi", "ti", "si", "ci", "vi", "si"][i]; }

  /* Osoby, w których zaimek dokleja się do formy trybu rozkazującego:
     tu, noi, voi. Formy grzecznościowe (Lei, Loro) trzymają zaimek przed
     czasownikiem — to nie jest wariant stylistyczny, tylko reguła, którą
     kurs sam wykłada w haśle „ref:g-imperativo”. */
  var ENKLITYKA = [false, true, false, true, true, false];

  /**
   * Dokleja zaimek zwrotny do formy trybu rozkazującego.
   *
   * „alza" + „ti" → „alzati". Krótka forma tu gubi apostrof i podwaja
   * spółgłoskę zaimka: „fa'" + „ti" → „fatti", tak samo jak „dammi"
   * i „dimmi" z tego samego hasła.
   */
  function doklej(form, pron) {
    if (/'$/.test(form)) return form.slice(0, -1) + pron.charAt(0) + pron;
    return form + pron;
  }

  function auxOf(inf) {
    var b = baseOf(inf);
    if (isRefl(inf)) return "essere";
    var d = irrOf(b);
    if (d && d.aux && d.aux !== "both") return d.aux;
    if (d && d.aux === "both") return "avere";
    return ESSERE_VERBS.indexOf(b) >= 0 ? "essere" : "avere";
  }

  function participle(inf) {
    var b = baseOf(inf), d = irrOf(b);
    if (d && d.pp) return d.pp;
    return stemOf(inf) + REG[groupOf(inf)].pp;
  }

  function agreePp(pp, i, gender) {
    // i: 0..5 ; gender: "m" | "f"
    if (!/o$/.test(pp)) return pp;
    var plural = i >= 3;
    var f = gender === "f";
    if (!plural) return f ? pp.slice(0, -1) + "a" : pp;
    return f ? pp.slice(0, -1) + "e" : pp.slice(0, -1) + "i";
  }

  function gerund(inf) {
    var b = baseOf(inf), d = irrOf(b);
    if (d && d.ger) return d.ger;
    return stemOf(inf) + REG[groupOf(inf)].ger;
  }

  /* ---------------- Czasy proste ---------------- */
  function simple(inf, tense) {
    var b = baseOf(inf), g = groupOf(inf), s = stemOf(inf), d = irrOf(b) || {};
    var out = [];

    if (tense === "futuro" || tense === "condizionale") {
      var fs = d.futStem || futureStem(inf);
      var ends = tense === "futuro" ? FUT : COND;
      for (var i = 0; i < 6; i++) out.push(fs + ends[i]);
    } else if (d[tense]) {
      out = d[tense].slice();
    } else if (tense === "imperf" && /rre$/.test(b)) {
      out = [];   // pokryte w IRR; awaryjnie regularne
      for (var k = 0; k < 6; k++) out.push(join(s, REG.ere.imperf[k], "ere"));
    } else {
      var table = REG[g][tense];
      for (var j = 0; j < 6; j++) out.push(table[j] === null ? null : join(s, table[j], g));
    }

    if (isRefl(inf)) {
      out = out.map(function (f, i) {
        if (!f) return f;
        if (/^(mi|ti|si|ci|vi)\s/.test(f)) return f;
        if (tense === "imper" && ENKLITYKA[i]) return doklej(f, reflPronoun(i));
        return reflPronoun(i) + " " + f;
      });
    }
    return out;
  }

  /* ---------------- Czasy złożone ---------------- */
  function compound(inf, auxTense, gender) {
    var aux = auxOf(inf);
    var auxForms = simple(aux, auxTense);
    var pp = participle(inf);
    var agree = aux === "essere";
    var out = [];
    for (var i = 0; i < 6; i++) {
      var form = auxForms[i];
      if (!form) { out.push(null); continue; }
      var p = agree ? agreePp(pp, i, gender || "m") : pp;
      if (isRefl(inf)) {
        // mi sono svegliato
        out.push(reflPronoun(i) + " " + form + " " + p);
      } else {
        out.push(form + " " + p);
      }
    }
    return out;
  }

  /* Nazwa w języku ucznia nie stoi tutaj: to klucz tense.<key> w słowniku. */
  var TENSES = [
    { key: "pres",        labelIt: "Indicativo presente", kind: "simple" },
    { key: "passPross",   labelIt: "Passato prossimo", kind: "comp", aux: "pres" },
    { key: "imperf",      labelIt: "Imperfetto", kind: "simple" },
    { key: "trapPross",   labelIt: "Trapassato prossimo", kind: "comp", aux: "imperf" },
    { key: "futuro",      labelIt: "Futuro semplice", kind: "simple" },
    { key: "futAnt",      labelIt: "Futuro anteriore", kind: "comp", aux: "futuro" },
    { key: "remoto",      labelIt: "Passato remoto", kind: "simple" },
    { key: "condizionale",labelIt: "Condizionale presente", kind: "simple" },
    { key: "condPass",    labelIt: "Condizionale passato", kind: "comp", aux: "condizionale" },
    { key: "cong",        labelIt: "Congiuntivo presente", kind: "simple" },
    { key: "congPass",    labelIt: "Congiuntivo passato", kind: "comp", aux: "cong" },
    { key: "congImp",     labelIt: "Congiuntivo imperfetto", kind: "simple" },
    { key: "congTrap",    labelIt: "Congiuntivo trapassato", kind: "comp", aux: "congImp" },
    { key: "imper",       labelIt: "Imperativo", kind: "simple" }
  ];

  function conjugate(inf, tenseKey, gender) {
    var t = TENSES.filter(function (x) { return x.key === tenseKey; })[0];
    if (!t) return null;
    return t.kind === "simple" ? simple(inf, tenseKey) : compound(inf, t.aux, gender);
  }

  function fullTable(inf, gender) {
    var out = {};
    TENSES.forEach(function (t) { out[t.key] = conjugate(inf, t.key, gender); });
    out._meta = {
      infinito: inf,
      gruppo: groupOf(inf) === "isc" ? "-ire (-isc-)" : "-" + groupOf(inf),
      ausiliare: auxOf(inf),
      participio: participle(inf),
      gerundio: gerund(inf),
      riflessivo: isRefl(inf),
      irregolare: !!irrOf(baseOf(inf))
    };
    return out;
  }

  /* ---------------- Lista czasowników do przeglądania ----------------
     Same bezokoliczniki: znaczenie zależy od języka ucznia i siedzi
     w słowniku interfejsu pod kluczem verb.<bezokolicznik>. */
  var COMMON = [
    "essere", "avere", "fare", "dire", "andare", "venire", "stare", "dare", "sapere", "potere",
    "volere", "dovere", "vedere", "parlare", "mangiare", "bere", "prendere", "mettere", "leggere",
    "scrivere", "capire", "finire", "preferire", "dormire", "partire", "aprire", "chiudere", "comprare",
    "pagare", "cercare", "lavorare", "studiare", "giocare", "viaggiare", "conoscere", "credere",
    "vivere", "nascere", "morire", "piacere", "rimanere", "uscire", "salire", "scendere", "tenere",
    "scegliere", "perdere", "vincere", "correre", "chiedere", "rispondere", "decidere", "spegnere",
    "tradurre", "svegliarsi", "alzarsi", "lavarsi", "vestirsi", "chiamarsi", "divertirsi", "annoiarsi",
    "arrabbiarsi", "innamorarsi", "ricordarsi", "dimenticare", "aiutare", "arrivare", "tornare",
    "entrare", "diventare", "riuscire", "succedere"
  ];

  global.Verbs = {
    PERSONS: PERSONS,
    TENSES: TENSES,
    COMMON: COMMON,
    IRR: IRR,
    isRefl: isRefl,
    groupOf: groupOf,
    auxOf: auxOf,
    participle: participle,
    gerund: gerund,
    conjugate: conjugate,
    fullTable: fullTable
  };

})(window);
