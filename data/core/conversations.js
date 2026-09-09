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
  },

  /* ══════════════════ ROZMOWY ROZGAŁĘZIONE ══════════════════

     Tura z `id` jest celem skoku, `go` mówi dokąd iść po niej, a tura ucznia
     z `opts` rozwidla dialog: każda gałąź ma własny klucz odpowiedzi i własne
     `go`. Bez tych pól tura idzie o jeden do przodu, więc dziesięć rozmów
     napisanych wyżej działa dokładnie tak jak przedtem.

     Kształt: romb. Wybór rozchodzi się na dwie gałęzie i schodzi z powrotem
     w jedną turę, zamiast rozgałęziać się w drzewo. Drzewo o trzech wyborach
     to osiem zakończeń, czyli osiem razy tyle tekstu do napisania, nagrania
     i przetłumaczenia na pięć języków — a uczeń i tak zobaczy jedno.

     Konsekwencja gałęzi jest widoczna PÓŹNIEJ, nie od razu: kto odmówi
     deseru, nie znajdzie go potem na rachunku. Rozwidlenie, które po dwóch
     turach niczego nie zmienia, jest ozdobą, nie wyborem.
     ══════════════════════════════════════════════════════════ */
  {
    id: "ristorante-scelte",
    cefr: "A2",
    icon: "🍝",
    titleIt: "A tavola, con qualche decisione",
    turns: [
      { sp: "A", it: "Buonasera. Avete prenotato?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Sì, ho prenotato a nome Rossi",
            accept: ["sì ho prenotato a nome rossi", "sì a nome rossi", "ho prenotato a nome rossi"],
            go: "prenotato"
          },
          {
            hintIt: "No, siamo in due. C'è posto?",
            accept: ["no siamo in due c'è posto", "no, siamo in due", "siamo in due c'è posto"],
            go: "senza"
          }
        ]
      },
      { sp: "A", id: "prenotato", it: "Perfetto. Il tavolo vicino alla finestra. Prego, da questa parte.", go: "menu" },
      { sp: "A", id: "senza", it: "Un tavolo per due c'è, in fondo alla sala. Prego." },
      { sp: "A", id: "menu", it: "Ecco il menù. Intanto volete ordinare da bere?" },
      {
        sp: "TY",
        hintIt: "Una bottiglia d'acqua naturale, grazie",
        accept: ["una bottiglia d'acqua naturale grazie", "acqua naturale grazie", "una naturale grazie"]
      },
      { sp: "A", it: "Naturale, arriva subito. E come primo?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Per me la carbonara",
            accept: ["per me la carbonara", "prendo la carbonara", "una carbonara grazie"],
            go: "carbonara"
          },
          {
            hintIt: "Una pasta al pomodoro: sono vegetariana",
            accept: ["una pasta al pomodoro sono vegetariana", "pasta al pomodoro sono vegetariano",
                     "per me pasta al pomodoro, sono vegetariana"],
            go: "pomodoro"
          }
        ]
      },
      { sp: "A", id: "carbonara", it: "Stasera la carbonara è ottima, il guanciale è croccante.", go: "dolce" },
      { sp: "A", id: "pomodoro", it: "Allora le consiglio pomodoro e basilico: il basilico è del nostro orto." },
      { sp: "A", id: "dolce", it: "Un dolce per finire? Il tiramisù lo facciamo noi." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Sì, il tiramisù, grazie",
            accept: ["sì il tiramisù grazie", "sì prendo il tiramisù", "il tiramisù grazie"],
            go: "con-dolce"
          },
          {
            hintIt: "No, grazie, solo un caffè",
            accept: ["no grazie solo un caffè", "solo un caffè grazie", "no, per me solo un caffè"],
            go: "senza-dolce"
          }
        ]
      },
      { sp: "A", id: "con-dolce", it: "Ottima scelta, arriva subito.", go: "conto-dolce" },
      { sp: "A", id: "senza-dolce", it: "Un caffè, benissimo.", go: "conto-caffe" },
      { sp: "A", id: "conto-dolce", it: "Ecco il conto: primo, acqua e tiramisù. Ventidue euro.", go: "pagare" },
      { sp: "A", id: "conto-caffe", it: "Ecco il conto: primo, acqua e caffè. Sedici euro." },
      {
        sp: "TY",
        id: "pagare",
        hintIt: "Posso pagare con la carta?",
        accept: ["posso pagare con la carta", "pago con la carta", "con la carta grazie"]
      },
      { sp: "A", it: "Certo, il POS è qui. Grazie e buona serata." }
    ]
  },

  {
    id: "treno-perso",
    cefr: "A2",
    icon: "🚉",
    titleIt: "Allo sportello, dopo un treno saltato",
    turns: [
      { sp: "A", it: "Buongiorno, dica." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ho perso il treno per Bologna delle nove e venti",
            accept: ["ho perso il treno per bologna delle nove e venti",
                     "ho perso il treno delle nove e venti", "ho perso il treno per bologna"],
            go: "perso"
          },
          {
            hintIt: "Il mio treno per Bologna è stato cancellato",
            accept: ["il mio treno per bologna è stato cancellato",
                     "hanno cancellato il mio treno", "il treno per bologna è stato cancellato"],
            go: "sciopero"
          }
        ]
      },
      { sp: "A", id: "perso", it: "Il treno perso non si rimborsa. Il biglietto però lo posso rifare, pagando la differenza." },
      { sp: "A", it: "Il prossimo per Bologna parte alle undici e quaranta. Sono otto euro.", go: "conferma" },
      { sp: "A", id: "sciopero", it: "Cancellato per lo sciopero, mi dispiace. In questo caso il cambio non costa niente." },
      { sp: "A", it: "Il prossimo per Bologna parte alle undici e quaranta. Lei non paga nulla." },
      {
        sp: "TY",
        id: "conferma",
        opts: [
          {
            hintIt: "Va bene, prendo quello delle undici e quaranta",
            accept: ["va bene prendo quello delle undici e quaranta",
                     "va bene, prendo quello", "prendo quello delle undici e quaranta"],
            go: "undici"
          },
          {
            hintIt: "C'è qualcosa prima?",
            accept: ["c'è qualcosa prima", "non c'è niente prima", "c'è un treno prima"],
            go: "prima"
          }
        ]
      },
      { sp: "A", id: "undici", it: "Perfetto. Binario sette, carrozza quattro.", go: "saluto" },
      { sp: "A", id: "prima", it: "Prima c'è solo il regionale delle dieci e un quarto, ma ci mette due ore e mezza." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Va bene lo stesso, prendo il regionale",
            accept: ["va bene lo stesso prendo il regionale", "prendo il regionale",
                     "va bene, prendo il regionale"],
            go: "regionale"
          },
          {
            hintIt: "Allora aspetto quello delle undici e quaranta",
            accept: ["allora aspetto quello delle undici e quaranta", "allora aspetto",
                     "aspetto quello delle undici e quaranta"],
            go: "undici"
          }
        ]
      },
      { sp: "A", id: "regionale", it: "Regionale delle dieci e un quarto, binario tre." },
      { sp: "A", id: "saluto", it: "Ecco il biglietto. Buon viaggio!" },
      {
        sp: "TY",
        hintIt: "Grazie mille, buona giornata",
        accept: ["grazie mille buona giornata", "grazie, buona giornata", "grazie arrivederci"]
      },
      { sp: "A", it: "Arrivederci." }
    ]
  },

  {
    id: "casa-visita",
    cefr: "B1",
    icon: "🔑",
    titleIt: "Visita a un appartamento",
    turns: [
      { sp: "A", it: "Allora, questo è il salotto. Cosa ne pensa?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Mi piace, ma è più piccolo di come sembrava nelle foto",
            accept: ["mi piace ma è più piccolo di come sembrava nelle foto",
                     "è più piccolo di come sembrava nelle foto", "mi piace, ma è piccolo"],
            go: "piccolo"
          },
          {
            hintIt: "È molto luminoso, mi piace",
            accept: ["è molto luminoso mi piace", "è luminoso, mi piace", "mi piace, è luminoso"],
            go: "luminoso"
          }
        ]
      },
      { sp: "A", id: "piccolo", it: "Le foto ingannano sempre un po'. Però sono trentacinque metri quadri, senza corridoi sprecati.", go: "spese" },
      { sp: "A", id: "luminoso", it: "Eh sì, è esposto a sud: d'inverno il riscaldamento si accende poco." },
      { sp: "A", id: "spese", it: "Le spese condominiali sono ottanta euro al mese, riscaldamento incluso." },
      { sp: "A", it: "L'affitto è settecento euro." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Il prezzo è trattabile?",
            accept: ["il prezzo è trattabile", "si può trattare sul prezzo", "c'è margine sul prezzo"],
            go: "tratta"
          },
          {
            hintIt: "Da quando è libero?",
            accept: ["da quando è libero", "quando è libero", "quando posso entrare"],
            go: "libero"
          }
        ]
      },
      { sp: "A", id: "tratta", it: "Su un contratto di quattro anni il proprietario scende a seicentocinquanta." },
      { sp: "A", it: "È libero dal primo del mese prossimo.", go: "decisione" },
      { sp: "A", id: "libero", it: "Dal primo del mese prossimo. Il prezzo però resta quello, settecento." },
      {
        sp: "TY",
        id: "decisione",
        opts: [
          {
            hintIt: "Lo prendo",
            accept: ["lo prendo", "va bene, lo prendo", "sì lo prendo"],
            go: "prendo"
          },
          {
            hintIt: "Ci penso e le faccio sapere",
            accept: ["ci penso e le faccio sapere", "ci penso su", "le faccio sapere"],
            go: "penso"
          }
        ]
      },
      { sp: "A", id: "prendo", it: "Benissimo. Le mando il contratto per email entro domani." },
      { sp: "A", it: "Ci sentiamo nei prossimi giorni.", go: "chiusura" },
      { sp: "A", id: "penso", it: "Certo, ci pensi con calma. Il mio numero ce l'ha." },
      {
        sp: "TY",
        id: "chiusura",
        hintIt: "Grazie, arrivederci",
        accept: ["grazie arrivederci", "grazie mille, arrivederci", "grazie a lei arrivederci"]
      },
      { sp: "A", it: "Arrivederci." }
    ]
  },

  {
    id: "medico-gola",
    cefr: "B1",
    icon: "🩺",
    titleIt: "Dal medico, con il mal di gola",
    turns: [
      { sp: "A", it: "Buongiorno, si accomodi. Mi dica." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Ho mal di gola da tre giorni e ho la febbre",
            accept: ["ho mal di gola da tre giorni e ho la febbre",
                     "mal di gola da tre giorni con la febbre", "ho la febbre e mal di gola da tre giorni"],
            go: "febbre"
          },
          {
            hintIt: "Ho mal di gola da tre giorni, ma senza febbre",
            accept: ["ho mal di gola da tre giorni ma senza febbre",
                     "mal di gola da tre giorni, senza febbre", "ho mal di gola ma non ho la febbre"],
            go: "senzafebbre"
          }
        ]
      },
      { sp: "A", id: "febbre", it: "Tre giorni con la febbre. Quanto le è salita?" },
      { sp: "A", it: "Trentotto e mezzo è tanta. Apra la bocca, per favore.", go: "visita" },
      { sp: "A", id: "senzafebbre", it: "Senza febbre è già una buona notizia. Apra la bocca, per favore." },
      { sp: "A", id: "visita", it: "La gola è molto arrossata. Fa fatica a deglutire?" },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Sì, faccio fatica a mandare giù",
            accept: ["sì faccio fatica a mandare giù", "sì, faccio fatica a deglutire",
                     "faccio fatica a mandare giù"],
            go: "antibiotico"
          },
          {
            hintIt: "No, mi dà solo fastidio",
            accept: ["no mi dà solo fastidio", "no, è solo fastidio", "mi dà fastidio ma riesco a deglutire"],
            go: "gargarismi"
          }
        ]
      },
      { sp: "A", id: "antibiotico", it: "Allora le prescrivo un antibiotico: una compressa ogni dodici ore, per sei giorni.", go: "riposo" },
      { sp: "A", id: "gargarismi", it: "Allora niente antibiotico: gargarismi con acqua e sale, e molti liquidi caldi." },
      { sp: "A", id: "riposo", it: "In ogni caso riposo. Se dopo tre giorni non migliora, torni." },
      {
        sp: "TY",
        opts: [
          {
            hintIt: "Devo restare a casa dal lavoro?",
            accept: ["devo restare a casa dal lavoro", "devo stare a casa dal lavoro",
                     "posso andare al lavoro"],
            go: "certificato"
          },
          {
            hintIt: "Posso fare sport?",
            accept: ["posso fare sport", "posso andare a correre", "posso allenarmi"],
            go: "sport"
          }
        ]
      },
      { sp: "A", id: "certificato", it: "Le faccio il certificato per tre giorni, lo mando io al suo datore di lavoro.", go: "saluto" },
      { sp: "A", id: "sport", it: "Sport no, almeno finché la gola è così. Camminare sì." },
      { sp: "A", id: "saluto", it: "Ci vediamo. Auguri di pronta guarigione." },
      {
        sp: "TY",
        hintIt: "Grazie dottore, arrivederci",
        accept: ["grazie dottore arrivederci", "grazie, arrivederci", "la ringrazio dottore"]
      },
      { sp: "A", it: "Arrivederci." }
    ]
  }
];
