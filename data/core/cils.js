/* ============================================================
   Warstwa neutralna językowo — symulacje egzaminu CILS B1 Cittadinanza.

   CAŁY TEN PLIK JEST PO WŁOSKU I NIE MA NAKŁADKI. To ten sam wyjątek co
   przy pytaniach do czytanek, tylko szerszy: na egzaminie po włosku jest
   wszystko, łącznie z poleceniami, więc przetłumaczenie ich zmieniłoby
   zadanie. Skutek uboczny: dopisanie języka nie kosztuje tu ani jednego
   napisu, a `parity.mjs` nie ma czego porównywać.

   FORMAT JEST ZMIERZONY, NIE ZGADNIĘTY. Struktura, liczba itemów, czasy i
   wagi punktów pochodzą z materiałów Centro CILS Uniwersytetu dla
   Obcokrajowców w Sienie, spisane w specs/002-corso-irrinunciabile/
   cils-formato.md razem z datą odczytu i adresami. Treść jest NASZA:
   materiały CVCL są ich własnością, więc studiuje się formę, nie kopiuje
   zawartości — a i tak każde zdanie do słuchania musi być nagrane głosem
   kursu.

   Punktacja z kryteriów oficjalnych: 1 punkt za item w prowach na 6 pytań,
   0,5 za item w prowach na 12. Odpowiedź zła i odpowiedź pominięta warte
   są tyle samo, czyli zero: zgadywanie nic nie kosztuje i widok ma to
   powiedzieć.

   Progu zaliczenia nie ma w tym pliku. Siedzi w cils-formato.md razem ze
   swoim pochodzeniem, bo Centro CILS go dla tego modułu NIE publikuje, a
   liczba bez źródła w symulatorze egzaminu jest gorsza niż jej brak.
   ============================================================ */
window.CILS = [

  {
    id: "sim-1",
    titoloIt: "Simulazione 1",
    sezioni: [

      /* ---------------- ASCOLTO: 2 prove, 30 minuti, 12 punti ---------------- */
      {
        id: "ascolto",
        minuti: 30,
        prove: [
          {
            t: "mcq",
            puntiPerItem: 1,
            consegna: "Ascolta i testi. Poi completa le frasi. Scegli una delle tre proposte di completamento.",
            brani: [
              [
                { sp: "A", it: "Buongiorno, vorrei chiedere la residenza. Mi sono trasferito il mese scorso." },
                { sp: "B", it: "Ha portato il contratto di affitto e un documento?" },
                { sp: "A", it: "Il documento sì, il contratto ce l'ho sul telefono." },
                { sp: "B", it: "Deve stamparlo. Senza la copia sulla carta non posso aprire la pratica." }
              ],
              [
                { sp: "A", it: "Pronto, dottoressa Fanti? Sono Ionescu, oggi non riesco a venire in ufficio." },
                { sp: "B", it: "Mi dispiace. È influenza?" },
                { sp: "A", it: "Mal di gola e trentotto di febbre. Il medico mi ha fatto il certificato." },
                { sp: "B", it: "Va bene, lo manda lui. Si riguardi e non pensi al lavoro." }
              ],
              [
                { sp: "A", it: "Buonasera, chiamo per la bolletta della luce. Mi è arrivata il doppio del solito." },
                { sp: "B", it: "Vediamo. Signora, qui risulta una lettura stimata, non reale." },
                { sp: "A", it: "E adesso che faccio? La pago tutta?" },
                { sp: "B", it: "Mi mandi la lettura del contatore. Ricalcoliamo noi e la differenza torna sulla prossima." }
              ],
              [
                { sp: "A", it: "Signora Diallo, volevo parlarle di Amina. In classe partecipa, ma i compiti a casa arrivano di rado." },
                { sp: "B", it: "A casa ha il quaderno aperto tutti i pomeriggi. Forse non capisce la consegna." },
                { sp: "A", it: "Può darsi. Le do il diario con le istruzioni scritte in modo più semplice." }
              ],
              [
                { sp: "A", it: "Allora, la macchina è pronta? Ieri mi ha detto che era solo la batteria." },
                { sp: "B", it: "La batteria l'ho cambiata, ma il problema era un altro: perdeva olio." },
                { sp: "A", it: "E quanto viene in tutto?" },
                { sp: "B", it: "Centoquaranta. Le ho fatto il preventivo prima di toccare il motore, come d'accordo." }
              ],
              [
                { sp: "A", it: "Attenzione, attenzione. Il treno regionale delle diciotto e dieci per Grosseto partirà dal binario cinque anziché dal binario due." },
                { sp: "B", it: "Scusi, ha detto binario cinque?" },
                { sp: "A", it: "Sì, cambio di binario. Il treno viaggia con dieci minuti di ritardo." }
              ]
            ],
            items: [
              { q: "L'impiegato dice che la pratica non si apre", opts: ["senza il contratto stampato", "senza un secondo documento", "senza un appuntamento"], a: 0 },
              { q: "Il signor Ionescu telefona per dire che", opts: ["arriva più tardi", "è malato e resta a casa", "cambia turno con un collega"], a: 1 },
              { q: "La bolletta alta dipende", opts: ["da un errore del contatore", "da un aumento del prezzo", "da una lettura stimata"], a: 2 },
              { q: "Secondo l'insegnante, Amina", opts: ["non partecipa in classe", "consegna raramente i compiti", "arriva spesso in ritardo"], a: 1 },
              { q: "Il meccanico ha riparato", opts: ["solo la batteria", "la batteria e una perdita d'olio", "il motore intero"], a: 1 },
              { q: "L'annuncio informa che il treno", opts: ["è stato cancellato", "parte da un altro binario", "arriva prima del previsto"], a: 1 }
            ]
          },
          {
            t: "vf",
            puntiPerItem: 0.5,
            consegna: "Ascolta i testi. Poi leggi le informazioni. Indica se le informazioni sono presenti o non presenti nei testi che ascolti.",
            brani: [
              [
                { sp: "A", it: "Da lunedì cambia il servizio degli autobus nel nostro comune. Le linee restano sei, ma la linea tre passerà ogni venti minuti invece che ogni mezz'ora." },
                { sp: "A", it: "La novità più grande riguarda la sera: l'ultima corsa non sarà più alle nove, ma alle undici e un quarto." },
                { sp: "A", it: "I biglietti si comprano in edicola, dal tabaccaio e con l'applicazione del telefono. Il prezzo resta un euro e sessanta." },
                { sp: "A", it: "Chi ha meno di ventisei anni può chiedere l'abbonamento ridotto negli uffici di piazza Garibaldi, dal lunedì al venerdì." }
              ],
              [
                { sp: "B", it: "Dottoressa, molti pazienti si lamentano dei tempi di attesa. Cosa risponde?" },
                { sp: "A", it: "Che hanno ragione, in parte. Nel nostro ambulatorio però l'attesa è cambiata da quando abbiamo aperto le prenotazioni online." },
                { sp: "B", it: "Chi non usa il computer come fa?" },
                { sp: "A", it: "Il telefono resta, la mattina dalle otto alle dieci. E chi ha più di settant'anni può farsi prenotare la visita dal familiare." },
                { sp: "B", it: "Le urgenze?" },
                { sp: "A", it: "Le urgenze non si prenotano: si viene e si aspetta, ma si entra prima degli altri." }
              ]
            ],
            items: [
              { q: "Nel comune le linee degli autobus diventano otto.", a: 1 },
              { q: "La linea tre passerà più spesso di prima.", a: 0 },
              { q: "La sera l'ultimo autobus parte più tardi di prima.", a: 0 },
              { q: "Il prezzo del biglietto aumenta di venti centesimi.", a: 1 },
              { q: "L'abbonamento ridotto si chiede in piazza Garibaldi.", a: 0 },
              { q: "I biglietti si comprano anche con il telefono.", a: 0 },
              { q: "La dottoressa dice che i pazienti hanno del tutto torto.", a: 1 },
              { q: "Nell'ambulatorio si può prenotare su internet.", a: 0 },
              { q: "Le prenotazioni telefoniche si fanno il pomeriggio.", a: 1 },
              { q: "Un familiare può prenotare la visita per una persona anziana.", a: 0 },
              { q: "Le urgenze hanno bisogno di prenotazione.", a: 1 },
              { q: "Chi arriva per un'urgenza entra prima degli altri.", a: 0 }
            ]
          }
        ]
      },

      /* ------- LETTURA E RIFLESSIONE GRAMMATICALE: 2 prove, 40 minuti ------- */
      {
        id: "lettura",
        minuti: 40,
        prove: [
          {
            t: "vf",
            puntiPerItem: 0.5,
            consegna: "Leggi il testo. Poi leggi le informazioni e indica se sono presenti o non presenti nel testo.",
            titolo: "Il nuovo sportello del cittadino",
            testo: [
              "Dal primo ottobre il Comune apre in via Mazzini uno sportello unico per i servizi al cittadino. In un solo ufficio si potranno chiedere la carta d'identità, il cambio di residenza, i certificati anagrafici e l'iscrizione dei figli alla mensa scolastica.",
              "Fino a oggi queste pratiche erano divise in tre sedi diverse e capitava di dover tornare il giorno dopo perché mancava un documento. Nel nuovo sportello gli impiegati controllano subito la cartella e dicono che cosa manca prima di aprire la pratica.",
              "Lo sportello è aperto dal lunedì al venerdì dalle otto e trenta alle tredici, e il martedì anche il pomeriggio, dalle quindici alle diciassette. Il sabato resta chiuso.",
              "Per la maggior parte dei servizi serve l'appuntamento, che si prende sul sito del Comune o al numero verde. Senza appuntamento si entra soltanto per ritirare un documento già pronto.",
              "Chi non ha lo SPID o non usa internet può farsi aiutare dagli operatori del punto informazioni, al piano terra, che aiutano anche a compilare i moduli. Il servizio è gratuito e non serve prenotarlo.",
              "L'ufficio è al primo piano e ha l'ascensore. Per chi arriva in autobus, la fermata più vicina è quella di piazza del Mercato, servita dalle linee uno e quattro."
            ],
            items: [
              { q: "Lo sportello unico riunisce servizi che prima erano in sedi diverse.", a: 0 },
              { q: "Nel nuovo sportello si può chiedere anche la carta d'identità.", a: 0 },
              { q: "Gli impiegati controllano i documenti solo dopo aver aperto la pratica.", a: 1 },
              { q: "Lo sportello è aperto tutti i pomeriggi della settimana.", a: 1 },
              { q: "Il sabato lo sportello è chiuso.", a: 0 },
              { q: "L'appuntamento si può prendere per telefono.", a: 0 },
              { q: "Senza appuntamento non si entra per nessun motivo.", a: 1 },
              { q: "Chi non usa internet può essere aiutato da un operatore.", a: 0 },
              { q: "L'aiuto per compilare i moduli si paga.", a: 1 },
              { q: "L'ufficio si trova al piano terra.", a: 1 },
              { q: "Nell'edificio c'è l'ascensore.", a: 0 },
              { q: "La fermata dell'autobus più vicina è in piazza del Mercato.", a: 0 }
            ]
          },
          {
            t: "cloze",
            puntiPerItem: 1,
            consegna: "Completa il testo. Scegli una delle proposte di completamento.",
            titolo: "Corso di italiano in biblioteca",
            /* Ogni „_" jest luką; kolejność luk odpowiada kolejności itemów. */
            testo: [
              "La biblioteca comunale organizza un corso di italiano gratuito per adulti stranieri. Le lezioni ",
              " il martedì e il giovedì, dalle diciotto alle venti.",
              "\nIl corso è pensato per chi lavora, ",
              " gli orari sono di sera. Non è necessario avere già un diploma: all'inizio si fa un test breve ",
              " capire il livello di ciascuno.",
              "\nChi ha bambini piccoli può portarli: nella sala accanto ",
              " un servizio di lettura per i più piccoli.",
              "\nPer iscriversi bisogna presentarsi in biblioteca con un documento. Le iscrizioni ",
              " aperte fino al venti settembre, e i posti sono trenta.",
              "\nAlla fine del corso ",
              " un attestato di frequenza a chi ha seguito almeno tre quarti delle lezioni."
            ],
            items: [
              { opts: ["si tengono", "si tiene", "tengono"], a: 0 },
              { opts: ["perciò", "benché", "invece"], a: 0 },
              { opts: ["per", "di", "da"], a: 0 },
              { opts: ["c'è", "ci sono", "ha"], a: 0 },
              { opts: ["restano", "restino", "restavano"], a: 0 },
              { opts: ["viene dato", "è dato da", "si danno"], a: 0 }
            ]
          }
        ]
      },

      /* ---------------- PRODUZIONE SCRITTA: 1 prova, 40 minuti ---------------- */
      {
        id: "scritta",
        minuti: 40,
        consegna: "Scegli uno dei seguenti argomenti. Devi scrivere da 80 a 120 parole.",
        tracce: [
          {
            it: "Hai preso un appuntamento allo sportello del Comune per il cambio di residenza, ma quel giorno devi lavorare. Scrivi una mail all'ufficio: spiega il problema, chiedi di spostare l'appuntamento e indica i giorni in cui sei libero.",
            /* Elementy, których szuka Writing.analyse. Nie są to słowa klucze:
               to CZĘŚCI ZADANIA, których brak jest widoczny dla oceniającego. */
            richiede: [
              { key: "saluto", any: ["gentile", "buongiorno", "salve", "egregio", "spettabile"], etichetta: "una formula di apertura" },
              { key: "appuntamento", any: ["appuntamento", "prenotazione"], etichetta: "il riferimento all'appuntamento" },
              { key: "spostare", any: ["spostare", "spostarlo", "cambiare", "rinviare", "posticipare", "un altro giorno"], etichetta: "la richiesta di spostarlo" },
              { key: "motivo", any: ["lavoro", "lavorare", "turno", "impegno"], etichetta: "il motivo" },
              { key: "disponibilita", any: ["disponibile", "posso venire", "potrei", "sono libero", "sono libera"], etichetta: "i giorni in cui sei libero" },
              { key: "chiusura", any: ["cordiali saluti", "distinti saluti", "la ringrazio", "grazie", "cordialmente"], etichetta: "una formula di chiusura" }
            ]
          },
          {
            it: "Da due settimane l'ascensore del tuo palazzo non funziona e al terzo piano abita una signora anziana. Scrivi una mail all'amministratore: descrivi la situazione, spiega perché è urgente e chiedi entro quando sarà riparato.",
            richiede: [
              { key: "saluto", any: ["gentile", "buongiorno", "salve", "egregio", "spettabile"], etichetta: "una formula di apertura" },
              { key: "problema", any: ["ascensore"], etichetta: "di che cosa si tratta" },
              { key: "durata", any: ["due settimane", "quindici giorni", "da due", "da quindici"], etichetta: "da quanto tempo dura" },
              { key: "urgenza", any: ["anziana", "terzo piano", "urgente", "difficoltà", "non riesce"], etichetta: "perché è urgente" },
              { key: "data", any: ["quando", "entro", "in che tempi", "una data"], etichetta: "la richiesta di una data" },
              { key: "chiusura", any: ["cordiali saluti", "distinti saluti", "la ringrazio", "grazie", "cordialmente"], etichetta: "una formula di chiusura" }
            ]
          }
        ]
      },

      /* ---------------- PRODUZIONE ORALE: 1 prova, 10 minuti ---------------- */
      {
        id: "orale",
        minuti: 10,
        presentazione: [
          "Come ti chiami?",
          "Da quanto tempo vivi in Italia?",
          "Dove abiti e con chi?",
          "Che cosa fai: studi o lavori?"
        ],
        argomenti: [
          "Il quartiere dove vivi: che cosa funziona e che cosa cambieresti?",
          "Un servizio pubblico italiano che hai usato: com'è andata?",
          "Il lavoro nel tuo Paese e in Italia: quali differenze hai notato?",
          "Che cosa consiglieresti a una persona appena arrivata in Italia?"
        ],
        /* Griglia autocontrollu. Nie jest to ocena: uczeń słucha własnego
           nagrania i sam mówi, czy zrobił to, czego zadanie wymagało. */
        controllo: [
          "Ho risposto alla domanda, non a un'altra.",
          "Ho parlato per almeno due minuti senza fermarmi a lungo.",
          "Ho dato almeno un esempio concreto.",
          "Ho usato i tempi del passato dove servivano.",
          "Mi sono corretto quando ho sentito un errore."
        ]
      }
    ]
  },

  {
    id: "sim-2",
    titoloIt: "Simulazione 2",
    sezioni: [

      {
        id: "ascolto",
        minuti: 30,
        prove: [
          {
            t: "mcq",
            puntiPerItem: 1,
            consegna: "Ascolta i testi. Poi completa le frasi. Scegli una delle tre proposte di completamento.",
            brani: [
              [
                { sp: "A", it: "Buongiorno, ho visto l'annuncio per il posto di magazziniere. È ancora libero?" },
                { sp: "B", it: "Sì. Ha esperienza con il muletto?" },
                { sp: "A", it: "Ho il patentino, ma l'ho usato l'ultima volta due anni fa." },
                { sp: "B", it: "Non è un problema, la prima settimana lavora con un collega." }
              ],
              [
                { sp: "A", it: "Vorrei aprire un conto corrente. Mi servono documenti particolari?" },
                { sp: "B", it: "Documento, codice fiscale e permesso di soggiorno in corso di validità." },
                { sp: "A", it: "Il mio permesso scade fra un mese, ma ho la ricevuta del rinnovo." },
                { sp: "B", it: "Allora porti anche quella. Con la ricevuta il conto si apre lo stesso." }
              ],
              [
                { sp: "A", it: "Il dottore mi ha scritto una visita dall'ortopedico. Dove la prenoto?" },
                { sp: "B", it: "Qui al CUP, oppure online. Mi fa vedere la ricetta?" },
                { sp: "A", it: "Eccola." },
                { sp: "B", it: "C'è scritto priorità B, quindi entro dieci giorni. Le do giovedì della settimana prossima." }
              ],
              [
                { sp: "A", it: "Scusi, questo treno ferma a Empoli?" },
                { sp: "B", it: "No, questo è diretto a Pisa. Per Empoli deve prendere il regionale dal binario uno." },
                { sp: "A", it: "E parte fra quanto?" },
                { sp: "B", it: "Fra sette minuti. Faccia in fretta, ma il biglietto lo convalidi prima di salire." }
              ],
              [
                { sp: "A", it: "Signora, per l'iscrizione a scuola serve anche il certificato delle vaccinazioni." },
                { sp: "B", it: "Non ce l'ho, mio figlio le ha fatte all'estero." },
                { sp: "A", it: "Allora porti i documenti che ha e li facciamo tradurre dall'ufficio sanitario." }
              ],
              [
                { sp: "A", it: "Buonasera, sono il vicino del quarto piano. Domani mattina arrivano i traslochi, occupano il portone per due ore." },
                { sp: "B", it: "Va bene, ma non prima delle otto: ci sono i bambini che dormono." },
                { sp: "A", it: "Otto e mezza, allora. Grazie della pazienza." }
              ]
            ],
            items: [
              { q: "Per il posto di magazziniere il candidato", opts: ["non ha nessun patentino", "ha il patentino ma poca pratica recente", "ha lavorato con il muletto ieri"], a: 1 },
              { q: "Il conto corrente si può aprire", opts: ["solo con il permesso non scaduto", "anche con la ricevuta del rinnovo", "senza codice fiscale"], a: 1 },
              { q: "La visita dall'ortopedico è fissata", opts: ["entro dieci giorni", "fra tre mesi", "per il giorno stesso"], a: 0 },
              { q: "Per andare a Empoli il passeggero deve", opts: ["restare su questo treno", "prendere un altro treno", "aspettare il giorno dopo"], a: 1 },
              { q: "Per l'iscrizione a scuola manca", opts: ["il certificato delle vaccinazioni", "la carta d'identità", "il codice fiscale"], a: 0 },
              { q: "I vicini si mettono d'accordo per iniziare il trasloco", opts: ["alle sette", "alle otto e mezza", "nel pomeriggio"], a: 1 }
            ]
          },
          {
            t: "vf",
            puntiPerItem: 0.5,
            consegna: "Ascolta i testi. Poi leggi le informazioni. Indica se le informazioni sono presenti o non presenti nei testi che ascolti.",
            brani: [
              [
                { sp: "A", it: "Il centro per l'impiego di via Roma cambia orario. Da ottobre riceve il pubblico anche il giovedì pomeriggio, dalle quattordici alle diciassette." },
                { sp: "A", it: "Il servizio più richiesto resta la registrazione della disponibilità al lavoro, che si fa solo su appuntamento." },
                { sp: "A", it: "Sono attivi anche i corsi gratuiti di informatica di base, che durano quaranta ore e finiscono con un attestato." },
                { sp: "A", it: "Per i corsi non serve la residenza nel comune, ma bisogna avere più di diciotto anni." }
              ],
              [
                { sp: "B", it: "Lei ha aperto la sartoria tre anni fa. Come è cominciata?" },
                { sp: "A", it: "Cucivo a casa per le amiche. Poi una cliente mi ha chiesto se avevo la partita IVA e ho capito che dovevo decidere." },
                { sp: "B", it: "È stato difficile?" },
                { sp: "A", it: "La burocrazia sì, il lavoro no. Il commercialista mi ha seguito per i primi mesi." },
                { sp: "B", it: "Adesso lavora da sola?" },
                { sp: "A", it: "No, da gennaio c'è una ragazza che fa il tirocinio, e da settembre passa a un contratto vero." }
              ]
            ],
            items: [
              { q: "Il centro per l'impiego apre anche il giovedì pomeriggio.", a: 0 },
              { q: "La registrazione della disponibilità si fa senza appuntamento.", a: 1 },
              { q: "I corsi di informatica sono a pagamento.", a: 1 },
              { q: "I corsi durano quaranta ore.", a: 0 },
              { q: "Per iscriversi ai corsi bisogna essere maggiorenni.", a: 0 },
              { q: "Per i corsi è obbligatoria la residenza nel comune.", a: 1 },
              { q: "La sarta ha iniziato lavorando in un negozio.", a: 1 },
              { q: "Una cliente le ha fatto una domanda sulla partita IVA.", a: 0 },
              { q: "Secondo la sarta la parte difficile è stata la burocrazia.", a: 0 },
              { q: "Il commercialista l'ha aiutata all'inizio.", a: 0 },
              { q: "Oggi lavora completamente da sola.", a: 1 },
              { q: "La ragazza che fa il tirocinio avrà un contratto da settembre.", a: 0 }
            ]
          }
        ]
      },

      {
        id: "lettura",
        minuti: 40,
        prove: [
          {
            t: "vf",
            puntiPerItem: 0.5,
            consegna: "Leggi il testo. Poi leggi le informazioni e indica se sono presenti o non presenti nel testo.",
            titolo: "Orto condiviso in via delle Fonti",
            testo: [
              "Il quartiere di via delle Fonti ha un terreno pubblico rimasto vuoto per anni. Da questa primavera il Comune lo ha dato in gestione a un'associazione di abitanti, che lo ha diviso in venti orti.",
              "Ogni orto misura trenta metri quadri e viene assegnato per due anni. La domanda si presenta all'associazione, non al Comune, e possono farla tutte le persone che abitano nel quartiere, anche chi non ha la residenza in Italia da molto tempo.",
              "Il costo è di quaranta euro all'anno e serve a pagare l'acqua. Gli attrezzi sono in comune e stanno in una casetta di legno all'ingresso; chi li usa li riporta pulito.",
              "Chi riceve un orto si impegna a coltivarlo. Se un orto resta abbandonato per più di tre mesi, l'associazione lo assegna a un'altra persona della lista d'attesa.",
              "Una domenica al mese il gruppo si trova per i lavori comuni: la siepe, il vialetto, la raccolta della plastica portata dal vento. La partecipazione non è obbligatoria, ma chi non viene mai perde la precedenza per il rinnovo.",
              "Nell'orto non si possono usare prodotti chimici. Per le malattie delle piante l'associazione organizza due incontri all'anno con un agronomo, aperti anche a chi non ha un orto."
            ],
            items: [
              { q: "Il terreno era rimasto vuoto per anni.", a: 0 },
              { q: "Gli orti sono venti.", a: 0 },
              { q: "La domanda si presenta al Comune.", a: 1 },
              { q: "Possono fare domanda solo i cittadini italiani.", a: 1 },
              { q: "Il costo annuale serve a pagare l'acqua.", a: 0 },
              { q: "Ogni persona deve portare i propri attrezzi.", a: 1 },
              { q: "Un orto abbandonato per tre mesi può essere riassegnato.", a: 0 },
              { q: "I lavori comuni si fanno una volta alla settimana.", a: 1 },
              { q: "Chi non partecipa mai ai lavori comuni perde la precedenza per il rinnovo.", a: 0 },
              { q: "Nell'orto è vietato usare prodotti chimici.", a: 0 },
              { q: "Gli incontri con l'agronomo sono riservati a chi ha un orto.", a: 1 },
              { q: "L'assegnazione dura due anni.", a: 0 }
            ]
          },
          {
            t: "cloze",
            puntiPerItem: 1,
            consegna: "Completa il testo. Scegli una delle proposte di completamento.",
            titolo: "Una festa di quartiere",
            testo: [
              "Sabato prossimo in piazza Verdi ",
              " la festa di fine estate, organizzata dai negozianti insieme alla scuola elementare.",
              "\nIl programma comincia alle sedici con i giochi per i bambini. ",
              " le diciotto ci sarà il concerto della banda del paese.",
              "\nOgni famiglia può portare qualcosa da mangiare: l'idea è che il tavolo ",
              " apparecchiato da tutti, non da un ristorante.",
              "\nIn caso di pioggia la festa non viene annullata ",
              " spostata nella palestra della scuola.",
              "\nChi vuole aiutare a montare i tavoli ",
              " presentarsi alle quattordici. Servono ancora cinque o sei persone,",
              " si può dare il nome al bar della piazza."
            ],
            items: [
              { opts: ["si terrà", "si terrebbe", "si tenne"], a: 0 },
              { opts: ["Verso", "Fino", "Da"], a: 0 },
              { opts: ["sia", "è", "era"], a: 0 },
              { opts: ["ma", "perché", "quindi"], a: 0 },
              { opts: ["può", "potrebbe", "poteva"], a: 0 },
              { opts: ["e", "però", "invece"], a: 0 }
            ]
          }
        ]
      },

      {
        id: "scritta",
        minuti: 40,
        consegna: "Scegli uno dei seguenti argomenti. Devi scrivere da 80 a 120 parole.",
        tracce: [
          {
            it: "Hai fatto un colloquio di lavoro dieci giorni fa e non hai ancora ricevuto risposta. Scrivi una mail all'azienda: ricorda chi sei e quando è stato il colloquio, chiedi notizie e di' che sei ancora interessato al posto.",
            richiede: [
              { key: "saluto", any: ["gentile", "buongiorno", "salve", "egregio", "spettabile"], etichetta: "una formula di apertura" },
              { key: "colloquio", any: ["colloquio"], etichetta: "il riferimento al colloquio" },
              { key: "quando", any: ["dieci giorni", "la settimana scorsa", "il giorno", "settimana fa"], etichetta: "quando è stato" },
              { key: "notizie", any: ["notizie", "novità", "aggiornamento", "una risposta"], etichetta: "la richiesta di notizie" },
              { key: "interesse", any: ["interessato", "interessata", "interesse", "disponibile"], etichetta: "che sei ancora interessato" },
              { key: "chiusura", any: ["cordiali saluti", "distinti saluti", "la ringrazio", "grazie", "cordialmente"], etichetta: "una formula di chiusura" }
            ]
          },
          {
            it: "Hai comprato online una lavatrice, ma è arrivata con un danno. Scrivi una mail al negozio: descrivi il danno, di' quando è arrivata e chiedi la sostituzione o il rimborso.",
            richiede: [
              { key: "saluto", any: ["gentile", "buongiorno", "salve", "egregio", "spettabile"], etichetta: "una formula di apertura" },
              { key: "prodotto", any: ["lavatrice"], etichetta: "che cosa hai comprato" },
              { key: "danno", any: ["danno", "danneggiata", "rotta", "ammaccata", "graffio", "non funziona"], etichetta: "la descrizione del danno" },
              { key: "consegna", any: ["consegna", "consegnata", "arrivata", "ricevuta"], etichetta: "quando è arrivata" },
              { key: "richiesta", any: ["sostituzione", "sostituire", "rimborso", "rimborsare", "il cambio"], etichetta: "che cosa chiedi" },
              { key: "chiusura", any: ["cordiali saluti", "distinti saluti", "la ringrazio", "grazie", "cordialmente"], etichetta: "una formula di chiusura" }
            ]
          }
        ]
      },

      {
        id: "orale",
        minuti: 10,
        presentazione: [
          "Come ti chiami e quanti anni hai?",
          "Di dove sei?",
          "Da quanto tempo vivi in Italia?",
          "Che lavoro fai o che cosa studi?"
        ],
        argomenti: [
          "Come hai imparato l'italiano fino a oggi?",
          "Una difficoltà che hai avuto in Italia e come l'hai risolta.",
          "La scuola nel tuo Paese e in Italia: che cosa cambia?",
          "Che cosa ti manca del posto da cui vieni?"
        ],
        controllo: [
          "Ho risposto alla domanda, non a un'altra.",
          "Ho parlato per almeno due minuti senza fermarmi a lungo.",
          "Ho dato almeno un esempio concreto.",
          "Ho usato i tempi del passato dove servivano.",
          "Mi sono corretto quando ho sentito un errore."
        ]
      }
    ]
  }
];
