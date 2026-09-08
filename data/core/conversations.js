/* ============================================================
   Warstwa neutralna językowo — struktura, włoski, klucze odpowiedzi.
   Teksty w języku ucznia leżą w data/i18n/<lang>/conversations.js
   Powstało z data/conversations.js przez scripts/split_data.mjs.
   ============================================================ */
window.CONVERSATIONS = [
  {
    id: "bar-mattina",
    cefr: "A1",
    icon: "☕",
    titleIt: "Colazione al bar",
    turns: [
      { sp: "A", it: "Buongiorno! Dica pure." },
      {
        sp: "TY",
        hintIt: "Buongiorno, un caffè e un cornetto per favore",
        accept: [
          "buongiorno, un caffè e un cornetto per favore",
          "un caffè e un cornetto per favore",
          "buongiorno un caffè e un cornetto"
        ]
      },
      { sp: "A", it: "Il cornetto lo vuole vuoto o alla crema?" },
      { sp: "TY", hintIt: "Vuoto, grazie", accept: ["vuoto grazie", "vuoto", "lo preferisco vuoto"] },
      { sp: "A", it: "Perfetto. Sono due euro e trenta." },
      {
        sp: "TY",
        hintIt: "Posso pagare con la carta?",
        accept: ["posso pagare con la carta", "pago con la carta", "con la carta grazie"]
      },
      { sp: "A", it: "Certo, il POS è qui. Buona giornata!" },
      {
        sp: "TY",
        hintIt: "Grazie, buona giornata!",
        accept: ["grazie buona giornata", "grazie arrivederci", "grazie altrettanto"]
      }
    ]
  },
  {
    id: "presentarsi",
    cefr: "A1",
    icon: "🙋",
    titleIt: "Il primo giorno di corso",
    turns: [
      { sp: "A", it: "Ciao! Posso sedermi qui?" },
      { sp: "TY", hintIt: "Certo, prego!", accept: ["certo prego", "sì certo", "prego", "certo"] },
      { sp: "A", it: "Grazie. Io sono Matteo, e tu come ti chiami?" },
      {
        sp: "TY",
        hintIt: "Mi chiamo Anna",
        accept: ["mi chiamo anna", "sono anna", "io sono anna", "mi chiamo"]
      },
      { sp: "A", it: "Piacere! Di dove sei?" },
      {
        sp: "TY",
        hintIt: "Sono dalla Polonia",
        accept: ["sono dalla polonia", "vengo dalla polonia", "sono polacca", "sono polacco"]
      },
      { sp: "A", it: "Che bello! E che lavoro fai?" },
      {
        sp: "TY",
        hintIt: "Faccio l'insegnante",
        accept: [
          "faccio l'insegnante",
          "sono insegnante",
          "faccio la giornalista",
          "sono studente",
          "sono studentessa",
          "faccio l'ingegnere"
        ]
      }
    ]
  },
  {
    id: "mercato",
    cefr: "A1",
    icon: "🍅",
    titleIt: "Al mercato rionale",
    turns: [
      { sp: "A", it: "Signora, mi dica! Abbiamo pomodori bellissimi oggi." },
      {
        sp: "TY",
        hintIt: "Un chilo di pomodori, per favore",
        accept: ["un chilo di pomodori per favore", "un chilo di pomodori", "vorrei un chilo di pomodori"]
      },
      { sp: "A", it: "Ecco qua. Altro? Le mele oggi costano poco." },
      {
        sp: "TY",
        hintIt: "Quanto costano le mele?",
        accept: ["quanto costano le mele", "quanto costano", "e quanto costano le mele"]
      },
      { sp: "A", it: "Due euro al chilo. Sono dolcissime." },
      {
        sp: "TY",
        hintIt: "Basta così, quanto è in tutto?",
        accept: [
          "basta così quanto è in tutto",
          "basta così quant'è",
          "quanto è in tutto",
          "basta così grazie"
        ]
      },
      { sp: "A", it: "Sono quattro e cinquanta. Grazie a lei!" }
    ]
  },
  {
    id: "ristorante",
    cefr: "A2",
    icon: "🍝",
    titleIt: "Cena al ristorante",
    turns: [
      { sp: "A", it: "Buonasera! Avete prenotato?" },
      {
        sp: "TY",
        hintIt: "No, c'è un tavolo per due?",
        accept: ["no c'è un tavolo per due", "no, avete un tavolo per due", "c'è un tavolo per due persone"]
      },
      { sp: "A", it: "Certo, si accomodi. Ecco il menù. Da bere?" },
      {
        sp: "TY",
        hintIt: "Una bottiglia d'acqua frizzante e un calice di vino rosso",
        accept: [
          "una bottiglia d'acqua frizzante e un calice di vino rosso",
          "acqua frizzante e vino rosso",
          "una bottiglia di acqua frizzante e un bicchiere di vino rosso"
        ]
      },
      { sp: "A", it: "Benissimo. E per primo?" },
      {
        sp: "TY",
        hintIt: "Prendo la cacio e pepe. È piccante?",
        accept: [
          "prendo la cacio e pepe è piccante",
          "vorrei la cacio e pepe, è piccante",
          "la cacio e pepe per favore è piccante"
        ]
      },
      { sp: "A", it: "Solo un pochino, il pepe si sente. Vuole anche un secondo?" },
      {
        sp: "TY",
        hintIt: "No grazie, poi il conto per favore",
        accept: [
          "no grazie poi il conto per favore",
          "no grazie, il conto per favore",
          "no grazie basta così poi il conto"
        ]
      }
    ]
  },
  {
    id: "treno",
    cefr: "A2",
    icon: "🚆",
    titleIt: "Alla biglietteria",
    turns: [
      { sp: "A", it: "Prego, mi dica." },
      {
        sp: "TY",
        hintIt: "Un biglietto per Firenze per oggi pomeriggio",
        accept: [
          "un biglietto per firenze per oggi pomeriggio",
          "vorrei un biglietto per firenze oggi pomeriggio",
          "un biglietto per firenze per favore"
        ]
      },
      { sp: "A", it: "Regionale o Frecciarossa? Il Freccia ci mette un'ora e mezza." },
      {
        sp: "TY",
        hintIt: "Quanto costa il Frecciarossa?",
        accept: ["quanto costa il frecciarossa", "quanto costa il freccia", "quanto costa"]
      },
      { sp: "A", it: "Quarantadue euro in seconda classe." },
      {
        sp: "TY",
        hintIt: "Va bene, da quale binario parte?",
        accept: ["va bene da quale binario parte", "va bene, che binario", "da quale binario parte"]
      },
      { sp: "A", it: "Binario 9, tra venti minuti. Ricordi di convalidare se prende il regionale." }
    ]
  },
  {
    id: "medico",
    cefr: "A2",
    icon: "🩺",
    titleIt: "Dal medico",
    turns: [
      { sp: "A", it: "Buongiorno, si accomodi. Cosa c'è che non va?" },
      {
        sp: "TY",
        hintIt: "Mi fa male la gola e ho la febbre",
        accept: [
          "mi fa male la gola e ho la febbre",
          "ho mal di gola e la febbre",
          "mi fa male la gola, ho la febbre"
        ]
      },
      { sp: "A", it: "Da quanto tempo?" },
      { sp: "TY", hintIt: "Da tre giorni", accept: ["da tre giorni", "tre giorni", "sono tre giorni"] },
      { sp: "A", it: "Ha allergie a qualche farmaco?" },
      {
        sp: "TY",
        hintIt: "No, non ho allergie",
        accept: ["no non ho allergie", "no nessuna allergia", "non ho allergie"]
      },
      { sp: "A", it: "Le prescrivo un antibiotico. Riposo e molta acqua." },
      {
        sp: "TY",
        hintIt: "Quante volte al giorno lo devo prendere?",
        accept: [
          "quante volte al giorno lo devo prendere",
          "quante volte al giorno",
          "ogni quanto lo prendo"
        ]
      }
    ]
  },
  {
    id: "affitto",
    cefr: "B1",
    icon: "🔑",
    titleIt: "Visita all'appartamento",
    turns: [
      { sp: "A", it: "Ecco il bilocale. Come vede, è luminoso e appena ristrutturato." },
      {
        sp: "TY",
        hintIt: "Qual è l'affitto mensile?",
        accept: ["qual è l'affitto mensile", "quanto è l'affitto al mese", "quanto costa al mese"]
      },
      { sp: "A", it: "Settecento euro al mese, spese escluse." },
      {
        sp: "TY",
        hintIt: "A quanto ammontano le spese condominiali?",
        accept: [
          "a quanto ammontano le spese condominiali",
          "quanto sono le spese condominiali",
          "e le spese quanto sono"
        ]
      },
      { sp: "A", it: "Circa novanta euro al mese, riscaldamento incluso." },
      {
        sp: "TY",
        hintIt: "Che tipo di contratto è? E quant'è la cauzione?",
        accept: [
          "che tipo di contratto è e quant'è la cauzione",
          "che contratto è e quanto è la cauzione",
          "che tipo di contratto e la cauzione"
        ]
      },
      { sp: "A", it: "Un 4+4, cauzione di tre mensilità." },
      {
        sp: "TY",
        hintIt: "Ci penso e le faccio sapere domani",
        accept: [
          "ci penso e le faccio sapere domani",
          "ci penso su e le rispondo domani",
          "le faccio sapere domani"
        ]
      }
    ]
  },
  {
    id: "colloquio",
    cefr: "B1",
    icon: "💼",
    titleIt: "Colloquio di lavoro",
    turns: [
      { sp: "A", it: "Allora, mi parli un po' di lei." },
      {
        sp: "TY",
        hintIt: "Mi chiamo Anna, ho cinque anni di esperienza nel marketing digitale",
        accept: [
          "mi chiamo anna ho cinque anni di esperienza nel marketing digitale",
          "sono anna e ho cinque anni di esperienza nel marketing",
          "ho cinque anni di esperienza nel marketing digitale"
        ]
      },
      { sp: "A", it: "Perché ha deciso di candidarsi da noi?" },
      {
        sp: "TY",
        hintIt: "Perché mi interessa il vostro approccio ai progetti internazionali",
        accept: [
          "perché mi interessa il vostro approccio ai progetti internazionali",
          "mi interessa il vostro approccio ai progetti internazionali",
          "perché seguo i vostri progetti internazionali"
        ]
      },
      { sp: "A", it: "Qual è secondo lei il suo punto debole?" },
      {
        sp: "TY",
        hintIt: "Tendo a voler controllare tutto, ma sto imparando a delegare",
        accept: [
          "tendo a voler controllare tutto ma sto imparando a delegare",
          "sono troppo perfezionista ma sto imparando a delegare",
          "tendo a controllare tutto, sto imparando a delegare"
        ]
      },
      { sp: "A", it: "Bene. Ha domande per noi?" },
      {
        sp: "TY",
        hintIt: "Sì: com'è composto il team e quali sono i prossimi passi?",
        accept: [
          "com'è composto il team e quali sono i prossimi passi",
          "sì com'è composto il team e quali sono i prossimi passi",
          "vorrei sapere com'è composto il team e i prossimi passi"
        ]
      }
    ]
  },
  {
    id: "burocrazia",
    cefr: "B1",
    icon: "🗂️",
    titleIt: "All'Agenzia delle Entrate",
    turns: [
      { sp: "A", it: "Numero ottantasette, sportello tre. Buongiorno, di cosa ha bisogno?" },
      {
        sp: "TY",
        hintIt: "Ho bisogno di richiedere il codice fiscale",
        accept: [
          "ho bisogno di richiedere il codice fiscale",
          "vorrei richiedere il codice fiscale",
          "devo fare il codice fiscale"
        ]
      },
      { sp: "A", it: "Ha un documento d'identità valido e il modulo compilato?" },
      {
        sp: "TY",
        hintIt: "Ho il passaporto, ma non ho il modulo",
        accept: [
          "ho il passaporto ma non ho il modulo",
          "ho il passaporto, il modulo no",
          "ho solo il passaporto"
        ]
      },
      { sp: "A", it: "Nessun problema, glielo do io. Lo compili in stampatello." },
      {
        sp: "TY",
        hintIt: "Quanto tempo ci vuole?",
        accept: ["quanto tempo ci vuole", "quanto ci vuole", "quanto tempo serve"]
      },
      { sp: "A", it: "Glielo rilascio subito, è immediato." }
    ]
  },
  {
    id: "dibattito",
    cefr: "B2",
    icon: "🗣️",
    titleIt: "Discussione tra amici",
    turns: [
      { sp: "A", it: "Secondo me lo smart working ha distrutto il senso di squadra. Tu che ne pensi?" },
      {
        sp: "TY",
        hintIt: "In parte sono d'accordo, però ha anche ridotto lo stress dei pendolari",
        accept: [
          "in parte sono d'accordo però ha anche ridotto lo stress dei pendolari",
          "sono parzialmente d'accordo ma ha ridotto lo stress dei pendolari",
          "in parte sì, però ha ridotto lo stress"
        ]
      },
      { sp: "A", it: "Sì, ma non credi che i giovani imparino meno se non stanno in ufficio?" },
      {
        sp: "TY",
        hintIt: "Dipende da come l'azienda organizza il mentoring",
        accept: [
          "dipende da come l'azienda organizza il mentoring",
          "dipende da come viene organizzato il mentoring",
          "dipende dall'organizzazione del mentoring"
        ]
      },
      {
        sp: "A",
        it: "Su questo ti do ragione. Però il modello ibrido secondo me è il peggiore dei due mondi."
      },
      {
        sp: "TY",
        hintIt: "Non sono affatto d'accordo: l'ibrido permette di scegliere in base al tipo di lavoro",
        accept: [
          "non sono affatto d'accordo l'ibrido permette di scegliere in base al tipo di lavoro",
          "non sono d'accordo, l'ibrido permette di scegliere in base al lavoro",
          "dissento: l'ibrido permette di scegliere in base al tipo di lavoro"
        ]
      }
    ]
  }
];
