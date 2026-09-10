/* ============================================================
   verbs-data.js — the Italian tables the conjugation engine works from.

   Pulled out of verbs.js, where 300 lines of tables buried 200 lines of
   algorithm. There is not a single rule here: only endings, irregular
   forms and membership lists. Adding a verb is a change in this file and
   in no other.

   Why in assets/js and not in data/: the data/ directory holds COURSE
   CONTENT (lessons, readings, conversations), which the language overlay
   merges and from which the recording script extracts sentences to be
   spoken. Verb conjugation is neither course content nor spoken by
   anything: it is the engine's dictionary and it loads together with it.
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

  /* ---------------- Irregular verbs ----------------
     pres/imperf/remoto/cong/congImp/imper : full forms (6 slots)
     futStem : the stem of the future and the conditional
     pp : past participle ; aux : "avere" | "essere" | "both"
     isc : true -> the -isc- pattern ; refl : true -> reflexive verb
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
       The irregular participles that were missing.

       Measured: out of 45 common verbs with an irregular participle the
       conjugator produced 25 NON-EXISTENT forms — "riduto" instead of
       "riso", "rotto" as "romputo", "mosso" as "muovuto". The participle
       enters SIX of the fourteen tenses (passato prossimo, trapassato,
       futuro anteriore, condizionale passato, congiuntivo passato and
       trapassato), so a single gap broke six rows of the conjugation table
       and every exercise on a compound tense with that verb.

       The entries are minimal: `pp` alone. The remaining forms of these
       verbs are regular or close enough, and `remoto` stays regular for
       now — that is one tense at C2 level and a separate, declared gap,
       not a silent bug.

       Prefixed verbs inherit from the root (see irrOf), so "ridere" also
       fixes "sorridere", and "prendere" fixes "riprendere".
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

  /* -ire verbs following the -isc- pattern (frequency list) */
  var ISC = ["capire", "finire", "preferire", "pulire", "spedire", "unire", "costruire",
    "restituire", "chiarire", "contribuire", "diminuire", "distribuire", "fornire",
    "garantire", "gestire", "guarire", "impedire", "inserire", "istituire", "obbedire",
    "percepire", "proibire", "punire", "reagire", "restituire", "riferire", "sostituire",
    "sparire", "stabilire", "starnutire", "suggerire", "tradire", "trasferire", "ubbidire"];

  /* intransitive verbs taking essere in compound tenses */
  var ESSERE_VERBS = ["andare", "venire", "arrivare", "partire", "tornare", "ritornare",
    "entrare", "uscire", "salire", "scendere", "nascere", "morire", "restare", "rimanere",
    "stare", "essere", "diventare", "cadere", "piacere", "dispiacere", "sembrare",
    "succedere", "costare", "crescere", "vivere", "durare", "passare", "riuscire", "bastare"];

  /* The name in the student's language is not here: it is the tense.<key> dictionary key. */
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

  /* ---------------- The browsable list of verbs ----------------
     Infinitives only: the meaning depends on the student's language and
     sits in the interface dictionary under the verb.<infinitive> key. */
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

  global.VERB_TABLES = {
    PERSONS: PERSONS, REG: REG, FUT: FUT, COND: COND,
    IRR: IRR, ISC: ISC, ESSERE_VERBS: ESSERE_VERBS,
    TENSES: TENSES, COMMON: COMMON
  };

})(window);
