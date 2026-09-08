/* ============================================================
   B2 — jednostki 1–4
   Congiuntivo imperfetto · Periodo ipotetico · Passivo e remoto
   · Società e dibattito
   ============================================================ */
LINGUAI.addUnits("B2", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — SE FOSSE
   ══════════════════════════════════════════════════════════════ */
{
  id: "b2-u01",
  icon: "🌗",
  titleIt: "Se fosse",
  titlePl: "Congiuntivo imperfetto",
  grammarPl: "congiuntivo imperfetto i trapassato · zgodność czasów",
  lessons: [
  {
    id: "b2-u01-l1",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Congiuntivo imperfetto",
    titlePl: "Formy i podstawowe użycia",
    objectivesPl: [
      "utworzyć congiuntivo imperfetto",
      "znać formy nieregularne",
      "użyć go po zdaniu nadrzędnym w czasie przeszłym"
    ],
    theory: [
      { h: "Odmiana jest wyjątkowo regularna",
        p: "Temat bezokolicznika + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Nieregularne są tylko: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>." },
      { h: "Podstawowa reguła: cofnięcie zdania nadrzędnego",
        p: "Gdy zdanie główne przechodzi w przeszłość, congiuntivo presente zamienia się w imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Ten sam mechanizm co przy zgodności czasów w mowie zależnej." },
      { h: "Drugi kontekst: hipoteza z se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> („gdybym miał czas, przyszedłbym”). To okres warunkowy drugiego typu, którym zajmiemy się osobno w następnej jednostce. Na razie zapamiętaj, że po <em>se</em> nigdy nie stawia się condizionale." },
      { h: "Trzeci kontekst: życzenie",
        p: "Congiuntivo imperfetto potrafi stać samodzielnie i wyrażać życzenie lub żal: <em>Magari venisse!</em> („oby przyszedł!”), <em>Fosse vero!</em> („żeby to była prawda!”), <em>Piovesse almeno!</em>" }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["osoba", "parlare", "prendere", "dormire", "essere", "fare"],
        rows: [
          ["che io", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che tu", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che lui/lei", "parlasse", "prendesse", "dormisse", "fosse", "facesse"],
          ["che noi", "parlassimo", "prendessimo", "dormissimo", "fossimo", "facessimo"],
          ["che voi", "parlaste", "prendeste", "dormiste", "foste", "faceste"],
          ["che loro", "parlassero", "prendessero", "dormissero", "fossero", "facessero"]
        ]
      },
      examples: [
        ["Pensavo che fosse più semplice.", "Myślałem, że to prostsze."],
        ["Non sapevo che lavorassi qui.", "Nie wiedziałem, że tu pracujesz."],
        ["Volevo che tu me lo dicessi prima.", "Chciałem, żebyś powiedział mi to wcześniej."],
        ["Se avessi tempo, verrei volentieri.", "Gdybym miał czas, chętnie bym przyszedł."],
        ["Magari venisse anche lei!", "Oby przyszła też ona!"],
        ["Sembrava che non ci fosse nessuno.", "Wydawało się, że nikogo nie ma."]
      ]
    },
    vocab: [
      { it: "pensavo che…", pl: "myślałem, że…" },
      { it: "non sapevo che…", pl: "nie wiedziałem, że…" },
      { it: "volevo che…", pl: "chciałem, żeby…" },
      { it: "sembrava che…", pl: "wydawało się, że…" },
      { it: "magari", pl: "oby, może" },
      { it: "come se", pl: "jak gdyby" },
      { it: "a patto che", pl: "pod warunkiem że" },
      { it: "nel caso in cui", pl: "w przypadku gdyby" },
      { it: "semmai", pl: "gdyby co, ewentualnie" },
      { it: "quasi quasi", pl: "prawie że (waham się)" },
      { it: "sarebbe ora", pl: "najwyższy czas" },
      { it: "chissà se", pl: "kto wie, czy" }
    ],
    exercises: [
      { t: "conj", verb: "essere", tense: "congImp", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "fare", tense: "congImp", persons: [0, 2, 5] },
      { t: "conj", verb: "prendere", tense: "congImp", persons: [0, 3, 4] },
      { t: "fill", q: "Uzupełnij: „Pensavo che ___ più semplice.” (essere)", a: ["fosse"] },
      { t: "fill", q: "Uzupełnij: „Non sapevo che tu ___ qui.” (lavorare)", a: ["lavorassi"] },
      { t: "mcq", q: "„Penso che sia vero” w czasie przeszłym:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."], a: 1 },
      { t: "cloze", q: "Wstaw congiuntivo imperfetto.",
        text: "Volevo che tu me lo {{1}} (dire) prima e che {{2}} (venire, tu) con noi.",
        gaps: [["dicessi"], ["venissi"]],
        pl: "Chciałem, żebyś powiedział mi to wcześniej i żebyś poszedł z nami." },
      { t: "mcq", q: "„Magari venisse!” znaczy:",
        opts: ["Może przyjdzie", "Oby przyszedł!", "Przyszedłby"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Wydawało się, że nikogo nie ma.”",
        a: ["sembrava che non ci fosse nessuno"] },
      { t: "listen", it: "Non sapevo che avessi già finito il progetto.", pl: "Nie wiedziałem, że skończyłeś już projekt." },
      { t: "speak", it: "Pensavo che fosse più facile di così.", pl: "Myślałem, że to łatwiejsze niż jest." }
    ]
  },
  {
    id: "b2-u01-l2",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Concordanza dei tempi",
    titlePl: "Zgodność czasów",
    objectivesPl: [
      "dobrać czas w zdaniu podrzędnym",
      "wyrazić uprzedniość, równoczesność i następczość",
      "utworzyć congiuntivo trapassato"
    ],
    theory: [
      { h: "Trzy relacje czasowe",
        p: "W zdaniu złożonym podrzędne może wyrażać czynność <b>wcześniejszą</b>, <b>równoczesną</b> albo <b>późniejszą</b> od nadrzędnego. Wybór trybu i czasu zależy od obu tych rzeczy: od czasu zdania głównego i od relacji." },
      { h: "Tabela, którą warto umieć na pamięć",
        list: [
          "główne w <b>teraźniejszym</b>: równoczesność → cong. presente; uprzedniość → cong. passato; następczość → cong. presente lub futuro",
          "główne w <b>przeszłym</b>: równoczesność → cong. imperfetto; uprzedniość → cong. trapassato; następczość → condizionale passato"
        ] },
      { h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto od <em>avere/essere</em> + imiesłów: <em>avessi fatto</em>, <em>fossi andato</em>. Wyraża uprzedniość wobec przeszłego zdania głównego: <em>Pensavo che <b>fosse già partito</b>.</em>" },
      { trap: "Następczość po zdaniu przeszłym to <b>condizionale passato</b>, nie congiuntivo: <em>Pensavo che <b>sarebbe venuto</b></em>. To ten sam mechanizm co w mowie zależnej i najczęstsze potknięcie na poziomie B2." }
    ],
    grammar: {
      title: "Zgodność czasów",
      table: {
        head: ["zdanie główne", "relacja", "forma w podrzędnym", "przykład"],
        rows: [
          ["presente", "równoczesność", "cong. presente", "Penso che sia qui."],
          ["presente", "uprzedniość", "cong. passato", "Penso che sia stato qui."],
          ["presente", "następczość", "cong. presente / futuro", "Penso che venga domani."],
          ["passato", "równoczesność", "cong. imperfetto", "Pensavo che fosse qui."],
          ["passato", "uprzedniość", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["passato", "następczość", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        ["Credevo che avesse già risposto.", "Sądziłem, że już odpowiedział."],
        ["Speravo che mi avrebbe chiamato.", "Miałem nadzieję, że do mnie zadzwoni."],
        ["Non immaginavo che fosse così complicato.", "Nie przypuszczałem, że to takie skomplikowane."],
        ["Era strano che non fossero ancora arrivati.", "Dziwne było, że jeszcze nie przyjechali."],
        ["Temevo che avessimo sbagliato strada.", "Bałem się, że pomyliliśmy drogę."],
        ["Mi sembrava che ci fosse un errore.", "Wydawało mi się, że jest błąd."]
      ]
    },
    vocab: [
      { it: "la concordanza", pl: "zgodność" },
      { it: "l'anteriorità", pl: "uprzedniość" },
      { it: "la contemporaneità", pl: "równoczesność" },
      { it: "la posteriorità", pl: "następczość" },
      { it: "immaginare", pl: "przypuszczać, wyobrażać sobie" },
      { it: "temere", pl: "obawiać się" },
      { it: "sospettare", pl: "podejrzewać" },
      { it: "dubitare", pl: "wątpić" },
      { it: "supporre", pl: "zakładać" },
      { it: "risultare", pl: "okazywać się" },
      { it: "a quel punto", pl: "w tym momencie" },
      { it: "nel frattempo", pl: "w międzyczasie" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Credevo che ___ già risposto.” (avere, on)", a: ["avesse"] },
      { t: "fill", q: "Uzupełnij: „Speravo che mi ___ chiamato.” (przyszłość w przeszłości)",
        a: ["avrebbe"] },
      { t: "mcq", q: "„Pensavo che ___ domani.” (venire — następczość)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"], a: 1 },
      { t: "mcq", q: "„Pensavo che ___ qui.” (essere — równoczesność)",
        opts: ["sia", "fosse", "sarebbe stato"], a: 1 },
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Non immaginavo che {{1}} (essere) così complicato e che {{2}} (servire) tanto tempo.",
        gaps: [["fosse"], ["servisse"]],
        pl: "Nie przypuszczałem, że to takie skomplikowane i że potrzeba tyle czasu." },
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Era strano che non {{1}} (arrivare) ancora e che nessuno {{2}} (avvisare) nulla.",
        gaps: [["fossero arrivati"], ["avesse avvisato"]],
        pl: "Dziwne było, że jeszcze nie przyjechali i że nikt niczego nie zgłosił." },
      { t: "trans", dir: "pl-it", q: "„Miałem nadzieję, że do mnie zadzwoni.”",
        a: ["speravo che mi avrebbe chiamato"] },
      { t: "mcq", q: "Najczęstszy błąd przy zgodności czasów to:",
        opts: ["użycie congiuntivo zamiast indicativo", "użycie condizionale presente zamiast passato przy następczości", "pominięcie che"], a: 1 },
      { t: "listen", it: "Temevo che avessimo sbagliato strada e che fosse troppo tardi.", pl: "Bałem się, że pomyliliśmy drogę i że jest za późno." },
      { t: "speak", it: "Credevo che avesse già risposto alla mia mail.", pl: "Sądziłem, że odpowiedział już na mojego maila." }
    ]
  },
  {
    id: "b2-u01-l3",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Come se, magari, purché",
    titlePl: "Spójniki wymagające congiuntivo",
    objectivesPl: [
      "użyć come se z congiuntivo imperfetto",
      "znać spójniki celu, warunku i ustępstwa",
      "wybrać między indicativo a congiuntivo"
    ],
    theory: [
      { h: "Come se zawsze z imperfetto lub trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Nigdy z presente ani z indicativo — nawet gdy zdanie główne jest w teraźniejszości. To wyjątek od zgodności czasów i jedna z częściej mylonych konstrukcji." },
      { h: "Spójniki według funkcji",
        list: [
          "<b>ustępstwo</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>cel</b>: affinché, perché (=aby)",
          "<b>warunek</b>: purché, a patto che, a condizione che, sempre che",
          "<b>wyłączenie</b>: a meno che (non), salvo che, tranne che",
          "<b>czas</b>: prima che (senza che, fino a che non)"
        ] },
      { h: "A meno che z tak zwanym non pleonastycznym",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> To <em>non</em> nie jest przeczeniem — zdanie znaczy „chyba że będzie padać”. Pominięcie go jest dziś akceptowane, ale forma z <em>non</em> pozostaje standardem." },
      { trap: "<b>Dopo che</b> idzie z indicativo, <b>prima che</b> z congiuntivo. Podobna para: <em>anche se</em> (indicativo, „nawet jeśli” faktyczne) kontra <em>anche se</em> w hipotezie (congiuntivo)." }
    ],
    grammar: {
      title: "Spójniki i tryb",
      table: {
        head: ["spójnik", "tryb", "przykład"],
        rows: [
          ["benché / sebbene", "congiuntivo", "Benché piova, esco."],
          ["affinché", "congiuntivo", "Te lo dico affinché tu capisca."],
          ["purché / a patto che", "congiuntivo", "Vengo purché tu ci sia."],
          ["a meno che non", "congiuntivo", "Vengo a meno che non piova."],
          ["prima che", "congiuntivo", "Parti prima che sia tardi."],
          ["dopo che", "indicativo", "Dopo che è partito, ho capito."],
          ["come se", "cong. imperf./trapass.", "Parla come se fosse esperto."]
        ]
      },
      examples: [
        ["Si comporta come se non fosse successo niente.", "Zachowuje się, jakby nic się nie stało."],
        ["Per quanto sia difficile, vale la pena.", "Choć to trudne, warto."],
        ["Ti aiuto a condizione che tu sia serio.", "Pomogę ci pod warunkiem, że będziesz poważny."],
        ["Partiamo prima che cominci il traffico.", "Wyjeżdżamy, zanim zacznie się korek."],
        ["Verrò, a meno che non succeda un imprevisto.", "Przyjdę, chyba że coś wypadnie."],
        ["Malgrado avesse ragione, non l'ha detto.", "Mimo że miał rację, nie powiedział tego."]
      ]
    },
    vocab: [
      { it: "per quanto", pl: "choć, jakkolwiek" },
      { it: "malgrado", pl: "mimo" },
      { it: "affinché", pl: "aby" },
      { it: "a patto che", pl: "pod warunkiem że" },
      { it: "a condizione che", pl: "pod warunkiem że" },
      { it: "a meno che non", pl: "chyba że" },
      { it: "salvo che", pl: "z wyjątkiem, chyba że" },
      { it: "fino a che non", pl: "dopóki nie" },
      { it: "comportarsi", pl: "zachowywać się" },
      { it: "l'imprevisto", pl: "nieprzewidziana przeszkoda" },
      { it: "valere la pena", pl: "być wartym zachodu" },
      { it: "essere serio", pl: "być poważnym" }
    ],
    exercises: [
      { t: "mcq", q: "„Parla come se ___ un esperto.” (essere)",
        opts: ["è", "sia", "fosse"], a: 2,
        why: "Come se zawsze z congiuntivo imperfetto lub trapassato." },
      { t: "fill", q: "Uzupełnij: „Partiamo prima che ___ tardi.” (essere)", a: ["sia"] },
      { t: "fill", q: "Uzupełnij: „Ti aiuto a patto che tu ___ serio.” (essere)", a: ["sia"] },
      { t: "mcq", q: "„Dopo che è partito” — dlaczego indicativo?",
        opts: ["To błąd", "Dopo che odnosi się do faktu dokonanego", "Bo partire jest nieregularne"], a: 1 },
      { t: "multi", q: "Które spójniki wymagają congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"], a: [0, 2, 4] },
      { t: "cloze", q: "Wstaw formy.",
        text: "Si comporta come se non {{1}} (succedere) niente, per quanto tutti {{2}} (sapere) la verità.",
        gaps: [["fosse successo"], ["sappiano"]],
        pl: "Zachowuje się, jakby nic się nie stało, choć wszyscy znają prawdę." },
      { t: "trans", dir: "pl-it", q: "„Przyjdę, chyba że coś wypadnie.”",
        a: ["verrò a meno che non succeda un imprevisto", "verrò, a meno che non succeda un imprevisto"] },
      { t: "order", pl: "Choć to trudne, warto spróbować.",
        tokens: ["Per", "quanto", "sia", "difficile,", "vale", "la", "pena", "provare"],
        a: ["per quanto sia difficile vale la pena provare"] },
      { t: "listen", it: "Malgrado avesse ragione, ha preferito non dire niente.", pl: "Mimo że miał rację, wolał nic nie mówić." },
      { t: "speak", it: "Ti aiuto volentieri, purché tu me lo dica in tempo.", pl: "Chętnie ci pomogę, pod warunkiem że powiesz mi na czas." }
    ]
  }
  ],
  test: {
    id: "b2-u01-test",
    cefr: "B2", themePl: "Sprawdzian",
    titleIt: "Test — Se fosse", titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić congiuntivo imperfetto, trapassato i zgodność czasów"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "congImp", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "fare", tense: "congImp", persons: [0, 2] },
      { t: "fill", q: "„Pensavo che ___ più semplice.”", a: ["fosse"] },
      { t: "fill", q: "„Credevo che ___ già risposto.” (avere, on)", a: ["avesse"] },
      { t: "mcq", q: "„Pensavo che ___ domani.” (venire)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"], a: 1 },
      { t: "mcq", q: "„Parla come se ___ esperto.”", opts: ["è", "sia", "fosse"], a: 2 },
      { t: "fill", q: "„Partiamo prima che ___ tardi.”", a: ["sia"] },
      { t: "multi", q: "Które wymagają congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"], a: [0, 2] },
      { t: "listen", it: "Non immaginavo che fosse così complicato ottenere il permesso.", pl: "Nie przypuszczałem, że uzyskanie zezwolenia jest tak skomplikowane." },
      { t: "speak", it: "Speravo che mi avrebbe risposto entro ieri.", pl: "Miałem nadzieję, że odpowie mi do wczoraj." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — PERIODO IPOTETICO
   ══════════════════════════════════════════════════════════════ */
{
  id: "b2-u02",
  icon: "🔀",
  titleIt: "Periodo ipotetico",
  titlePl: "Okresy warunkowe",
  grammarPl: "trzy typy z se · typ mieszany · potoczne warianty",
  lessons: [
  {
    id: "b2-u02-l1",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "I tre tipi",
    titlePl: "Trzy typy okresu warunkowego",
    objectivesPl: [
      "rozróżnić realność, możliwość i nierealność",
      "dobrać czasy do każdego typu",
      "unikać condizionale po se"
    ],
    theory: [
      { h: "Typ 1: realny",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> Warunek jest realny i prawdopodobny. Oba zdania w indicativo — czas teraźniejszy, przyszły albo tryb rozkazujący (<em>Se hai tempo, chiamami</em>)." },
      { h: "Typ 2: możliwy, ale niepewny",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto po <em>se</em>, condizionale presente w zdaniu głównym. Warunek jest hipotetyczny: teoretycznie możliwy, faktycznie niespełniony." },
      { h: "Typ 3: nierealny, o przeszłości",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. Mówi o czymś, co się już nie stanie: żal albo wyrzut." },
      { trap: "Po <b>se</b> nigdy nie stoi condizionale ani futuro. „Se avrei tempo” to najbardziej rozpoznawalny błąd obcokrajowca — Włoch usłyszy go natychmiast." }
    ],
    grammar: {
      title: "Trzy typy",
      table: {
        head: ["typ", "zdanie z se", "zdanie główne", "przykład"],
        rows: [
          ["1. realny", "indicativo", "indicativo / imperativo", "Se piove, resto a casa."],
          ["1. przyszłość", "presente / futuro", "futuro", "Se verrai, ti aspetterò."],
          ["2. możliwy", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. nierealny", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          ["mieszany", "cong. trapassato", "condizionale presente", "Se avessi studiato, ora lavorerei qui."]
        ]
      },
      examples: [
        ["Se domani fa bel tempo, andiamo al mare.", "Jeśli jutro będzie ładnie, jedziemy nad morze."],
        ["Se fossi in te, non lo farei.", "Na twoim miejscu bym tego nie robił."],
        ["Se avessimo saputo prima, saremmo partiti ieri.", "Gdybyśmy wiedzieli wcześniej, wyjechalibyśmy wczoraj."],
        ["Se avessi accettato quel lavoro, ora vivrei a Roma.", "Gdybym przyjął tamtą pracę, mieszkałbym teraz w Rzymie.", "typ mieszany"],
        ["Se hai bisogno, chiamami.", "Jeśli będziesz potrzebować, zadzwoń."],
        ["Che faresti se vincessi alla lotteria?", "Co byś zrobił, gdybyś wygrał na loterii?"]
      ]
    },
    vocab: [
      { it: "se", pl: "jeśli, gdyby" },
      { it: "nel caso in cui", pl: "w przypadku gdyby" },
      { it: "qualora", pl: "gdyby (formalnie)" },
      { it: "altrimenti", pl: "w przeciwnym razie" },
      { it: "se fossi in te", pl: "na twoim miejscu" },
      { it: "magari", pl: "oby" },
      { it: "l'ipotesi", pl: "hipoteza" },
      { it: "la condizione", pl: "warunek" },
      { it: "realizzarsi", pl: "spełniać się" },
      { it: "rimpiangere", pl: "żałować" },
      { it: "il rimpianto", pl: "żal" },
      { it: "cambiare idea", pl: "zmienić zdanie" }
    ],
    exercises: [
      { t: "mcq", q: "„Se ___ tempo, verrei.” (avere)",
        opts: ["ho", "avrei", "avessi"], a: 2 },
      { t: "mcq", q: "„Se avessi studiato, ___ l'esame.” (passare)",
        opts: ["passavo", "avrei passato", "passerei"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Se domani ___ bel tempo, andiamo al mare.” (fare)",
        a: ["fa", "farà"] },
      { t: "mcq", q: "Które zdanie jest błędne?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."], a: 1 },
      { t: "cloze", q: "Uzupełnij typ 2.",
        text: "Se {{1}} (essere, io) in te, non lo {{2}} (fare).",
        gaps: [["fossi"], ["farei"]],
        pl: "Na twoim miejscu bym tego nie zrobił." },
      { t: "cloze", q: "Uzupełnij typ 3.",
        text: "Se {{1}} (sapere, noi) prima, {{2}} (partire, noi) ieri.",
        gaps: [["avessimo saputo"], ["saremmo partiti"]],
        pl: "Gdybyśmy wiedzieli wcześniej, wyjechalibyśmy wczoraj." },
      { t: "trans", dir: "pl-it", q: "„Co byś zrobił, gdybyś wygrał na loterii?”",
        a: ["che faresti se vincessi alla lotteria", "cosa faresti se vincessi alla lotteria"] },
      { t: "mcq", q: "„Se avessi accettato quel lavoro, ora vivrei a Roma” to typ:",
        opts: ["pierwszy", "drugi", "mieszany"], a: 2 },
      { t: "listen", it: "Se avessimo prenotato prima, avremmo pagato molto meno.", pl: "Gdybyśmy zarezerwowali wcześniej, zapłacilibyśmy dużo mniej." },
      { t: "speak", it: "Se fossi in te, ci penserei ancora un po'.", pl: "Na twoim miejscu zastanowiłbym się jeszcze trochę." }
    ]
  },
  {
    id: "b2-u02-l2",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Varianti e registri",
    titlePl: "Warianty potoczne i formalne",
    objectivesPl: [
      "rozpoznać potoczny okres warunkowy z imperfetto",
      "użyć qualora i nel caso in cui",
      "dobrać rejestr do sytuacji"
    ],
    theory: [
      { h: "Podwójny imperfetto w mowie",
        p: "<em>Se lo sapevo, non venivo.</em> W rozmowie Włosi bardzo często zastępują typ 3 podwójnym imperfetto. Konstrukcja jest powszechna i akceptowana w mowie, ale <b>nie w piśmie</b> ani na egzaminie. Warto ją rozumieć i unikać we własnych tekstach." },
      { h: "Warianty formalne",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> — typowe dla umów i pism urzędowych, zawsze z congiuntivo. <em><b>Nel caso in cui</b></em> działa podobnie. <em><b>Ove</b></em> jest jeszcze bardziej książkowe." },
      { h: "Warunek bez se",
        list: [
          "gerundio: <em>Studiando di più, passeresti l'esame.</em>",
          "imperativo + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + bezokolicznik</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ] },
      { tip: "<em>Magari</em> plus congiuntivo imperfetto wyraża samo życzenie bez zdania głównego: <em>Magari fosse così semplice!</em>" }
    ],
    grammar: {
      title: "Warianty",
      table: {
        head: ["rejestr", "konstrukcja", "przykład"],
        rows: [
          ["potoczny", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["standardowy", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["formalny", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["formalny", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["bez se", "gerundio", "Studiando di più, passeresti."],
          ["bez se", "senza + rzeczownik", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        ["Qualora non riceva conferma, annullerò la prenotazione.", "Gdybym nie otrzymał potwierdzenia, anuluję rezerwację."],
        ["Nel caso in cui piovesse, ci vediamo al bar.", "Gdyby padało, spotykamy się w barze."],
        ["Volendo, si può fare anche domani.", "Gdyby chcieć, można to zrobić też jutro."],
        ["Se lo sapevo, restavo a casa.", "Gdybym wiedział, zostałbym w domu.", "potocznie"],
        ["Magari fosse così semplice!", "Żeby to było takie proste!"],
        ["A saperlo prima, avrei fatto diversamente.", "Gdybym to wiedział wcześniej, zrobiłbym inaczej."]
      ]
    },
    vocab: [
      { it: "qualora", pl: "gdyby (formalnie)" },
      { it: "nel caso in cui", pl: "w przypadku gdyby" },
      { it: "ove", pl: "gdyby (bardzo formalnie)" },
      { it: "provvedere", pl: "zająć się, zaradzić" },
      { it: "annullare", pl: "anulować" },
      { it: "la conferma", pl: "potwierdzenie" },
      { it: "volendo", pl: "gdyby chcieć" },
      { it: "a saperlo", pl: "gdyby to wiedzieć" },
      { it: "diversamente", pl: "inaczej" },
      { it: "altrimenti", pl: "w przeciwnym razie" },
      { it: "il registro", pl: "rejestr językowy" },
      { it: "sconsigliato", pl: "niezalecany" }
    ],
    exercises: [
      { t: "mcq", q: "„Se lo sapevo, non venivo” to konstrukcja:",
        opts: ["poprawna w piśmie", "potoczna, akceptowana w mowie, niezalecana w piśmie", "błędna zawsze"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Qualora ___ necessario, provvederemo.” (essere)",
        a: ["fosse"] },
      { t: "fill", q: "Uzupełnij: „Nel caso in cui ___, ci vediamo al bar.” (piovere)",
        a: ["piovesse"] },
      { t: "mcq", q: "„Volendo, si può fare domani” znaczy:",
        opts: ["Chcąc, robi się jutro", "Gdyby chcieć, można to zrobić jutro", "Chce się zrobić jutro"], a: 1 },
      { t: "cloze", q: "Przekształć na rejestr standardowy.",
        text: "Potocznie: „Se lo sapevo, non venivo.” Standardowo: Se l'{{1}} saputo, non {{2}} venuto.",
        gaps: [["avessi"], ["sarei"]],
        pl: "Gdybym wiedział, nie przyszedłbym." },
      { t: "trans", dir: "pl-it", q: "„Gdyby padało, spotykamy się w barze.”",
        a: ["nel caso in cui piovesse ci vediamo al bar", "se piovesse ci vediamo al bar"] },
      { t: "match", q: "Połącz.",
        pairs: [["qualora", "gdyby (formalnie)"], ["provvedere", "zaradzić"], ["annullare", "anulować"], ["altrimenti", "w przeciwnym razie"]] },
      { t: "order", pl: "Bez twojej pomocy nie dałbym rady.",
        tokens: ["Senza", "il", "tuo", "aiuto", "non", "ce", "l'avrei", "fatta"],
        a: ["senza il tuo aiuto non ce l'avrei fatta"] },
      { t: "listen", it: "Qualora non pervenisse conferma entro venerdì, annulleremo la prenotazione.", pl: "Gdyby potwierdzenie nie wpłynęło do piątku, anulujemy rezerwację." },
      { t: "speak", it: "Magari fosse così semplice come dici.", pl: "Żeby to było tak proste, jak mówisz." }
    ]
  },
  {
    id: "b2-u02-l3",
    cefr: "B2",
    themePl: "Komunikacja",
    titleIt: "Rimpianti e ipotesi",
    titlePl: "Żal, wyrzut, hipoteza",
    objectivesPl: [
      "wyrazić żal z powodu przeszłości",
      "sformułować wyrzut bez agresji",
      "prowadzić rozmowę hipotetyczną"
    ],
    theory: [
      { h: "Żal to typ trzeci",
        p: "<em>Avrei dovuto ascoltarti.</em> („Powinienem był cię posłuchać.”) Condizionale passato od <em>dovere</em> i <em>potere</em> to najczęstszy sposób wyrażania żalu i samokrytyki po włosku." },
      { h: "Wyrzut łagodzony",
        p: "<em>Avresti potuto dirmelo.</em> („Mogłeś mi powiedzieć.”) brzmi łagodniej niż <em>perché non me l'hai detto?</em>. Condizionale passato zdejmuje ostrość, zostawiając treść." },
      { h: "Konstrukcje żalu",
        list: [
          "<em>Se solo avessi…</em> — gdybym tylko…",
          "<em>Non avrei mai dovuto…</em> — nigdy nie powinienem był…",
          "<em>Con il senno di poi…</em> — z perspektywy czasu…",
          "<em>Mi pento di…</em> — żałuję, że…"
        ] },
      { tip: "<em>Meno male che…</em> („całe szczęście, że…”) to odwrotność żalu i bardzo częste otwarcie zdania: <em>Meno male che sei arrivato.</em>" }
    ],
    grammar: {
      title: "Żal i wyrzut",
      table: {
        head: ["funkcja", "konstrukcja", "przykład"],
        rows: [
          ["żal", "avrei dovuto + bezokolicznik", "Avrei dovuto ascoltarti."],
          ["stracona okazja", "avrei potuto + bezokolicznik", "Avrei potuto accettare."],
          ["wyrzut", "avresti potuto + bezokolicznik", "Avresti potuto avvisarmi."],
          ["gdybym tylko", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["ulga", "meno male che + indicativo", "Meno male che sei qui."],
          ["skrucha", "mi pento di + bezokolicznik", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        ["Avrei dovuto accettare quell'offerta.", "Powinienem był przyjąć tamtą ofertę."],
        ["Avresti potuto dirmelo prima.", "Mogłeś mi powiedzieć wcześniej."],
        ["Se solo avessi ascoltato mia madre!", "Gdybym tylko posłuchał mamy!"],
        ["Con il senno di poi, è stato un errore.", "Z perspektywy czasu to był błąd."],
        ["Meno male che non ho firmato.", "Całe szczęście, że nie podpisałem."],
        ["Non me ne pento affatto.", "W ogóle tego nie żałuję."]
      ]
    },
    vocab: [
      { it: "avrei dovuto", pl: "powinienem był" },
      { it: "avrei potuto", pl: "mógłbym był" },
      { it: "se solo", pl: "gdybym tylko" },
      { it: "con il senno di poi", pl: "z perspektywy czasu" },
      { it: "pentirsi di", pl: "żałować" },
      { it: "meno male che", pl: "całe szczęście, że" },
      { it: "per fortuna", pl: "na szczęście" },
      { it: "l'occasione persa", pl: "stracona okazja" },
      { it: "rendersi conto", pl: "zdać sobie sprawę" },
      { it: "ammettere", pl: "przyznać" },
      { it: "un errore di valutazione", pl: "błąd oceny" },
      { it: "col tempo", pl: "z czasem" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „___ dovuto ascoltarti.” (powinienem był)", a: ["avrei"] },
      { t: "fill", q: "Uzupełnij: „___ potuto avvisarmi.” (mogłeś)", a: ["avresti"] },
      { t: "mcq", q: "Które zdanie brzmi jak łagodny wyrzut, nie oskarżenie?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"], a: 1 },
      { t: "cloze", q: "Uzupełnij żal.",
        text: "Se solo {{1}} (sapere, io) prima, non {{2}} (firmare, io) quel contratto.",
        gaps: [["avessi saputo"], ["avrei firmato"]],
        pl: "Gdybym tylko wiedział wcześniej, nie podpisałbym tamtej umowy." },
      { t: "trans", dir: "pl-it", q: "„Z perspektywy czasu to był błąd.”",
        a: ["con il senno di poi è stato un errore"] },
      { t: "match", q: "Połącz.",
        pairs: [["meno male che", "całe szczęście, że"], ["pentirsi di", "żałować"], ["se solo", "gdybym tylko"], ["l'occasione persa", "stracona okazja"]] },
      { t: "mcq", q: "„Non me ne pento affatto” znaczy:",
        opts: ["Trochę żałuję", "W ogóle nie żałuję", "Będę żałować"], a: 1 },
      { t: "order", pl: "Powinienem był przyjąć tamtą ofertę.",
        tokens: ["Avrei", "dovuto", "accettare", "quell'offerta"],
        a: ["avrei dovuto accettare quell'offerta"] },
      { t: "listen", it: "Con il senno di poi, avrei fatto scelte diverse.", pl: "Z perspektywy czasu podjąłbym inne decyzje." },
      { t: "speak", it: "Avresti potuto dirmelo prima, avrei cambiato programma.", pl: "Mogłeś mi powiedzieć wcześniej, zmieniłbym plany." }
    ]
  }
  ],
  test: {
    id: "b2-u02-test",
    cefr: "B2", themePl: "Sprawdzian",
    titleIt: "Test — Periodo ipotetico", titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić trzy typy okresu warunkowego i wyrażanie żalu"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"], a: 2 },
      { t: "mcq", q: "„Se avessi studiato, ___ l'esame.”", opts: ["passavo", "avrei passato", "passerei"], a: 1 },
      { t: "cloze", q: "Typ 2.", text: "Se {{1}} (essere, io) in te, non lo {{2}} (fare).",
        gaps: [["fossi"], ["farei"]], pl: "Na twoim miejscu bym tego nie zrobił." },
      { t: "cloze", q: "Typ 3.", text: "Se {{1}} (prenotare, noi) prima, {{2}} (pagare, noi) meno.",
        gaps: [["avessimo prenotato"], ["avremmo pagato"]], pl: "Gdybyśmy zarezerwowali wcześniej, zapłacilibyśmy mniej." },
      { t: "fill", q: "„Qualora ___ necessario, provvederemo.”", a: ["fosse"] },
      { t: "fill", q: "„___ dovuto ascoltarti.”", a: ["avrei"] },
      { t: "fill", q: "„___ potuto avvisarmi.”", a: ["avresti"] },
      { t: "mcq", q: "Błędne zdanie:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"], a: 1 },
      { t: "listen", it: "Se solo avessi saputo, non avrei firmato quel contratto.", pl: "Gdybym tylko wiedział, nie podpisałbym tamtej umowy." },
      { t: "speak", it: "Se fossi in te, ci penserei due volte.", pl: "Na twoim miejscu zastanowiłbym się dwa razy." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — PASSIVO E REMOTO
   ══════════════════════════════════════════════════════════════ */
{
  id: "b2-u03",
  icon: "📜",
  titleIt: "Passivo e remoto",
  titlePl: "Strona bierna i passato remoto",
  grammarPl: "essere/venire/andare + imiesłów · passato remoto",
  lessons: [
  {
    id: "b2-u03-l1",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "La forma passiva",
    titlePl: "Cztery sposoby na stronę bierną",
    objectivesPl: [
      "utworzyć stronę bierną z essere i venire",
      "rozumieć andare + imiesłów jako konieczność",
      "wybrać si passivante w mowie"
    ],
    theory: [
      { h: "Essere: forma podstawowa",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Działa we wszystkich czasach. Imiesłów zgadza się z podmiotem. Wykonawcę wprowadza <em>da</em>." },
      { h: "Venire: tylko czasy proste, akcent na proces",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> Nie da się powiedzieć „è venuta approvata” — <em>venire</em> nie tworzy strony biernej w czasach złożonych. Podkreśla powtarzalność i przebieg." },
      { h: "Andare: bierność z obowiązkiem",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> To nie zwykła bierność: zdanie znaczy „formularz <b>trzeba</b> wypełnić”. Bardzo częste w instrukcjach i języku urzędowym. Mylenie tego z <em>essere</em> zmienia sens." },
      { h: "Si passivante: wersja mówiona",
        p: "<em>Qui <b>si vendono</b> panini.</em> Najczęstsza w rozmowie, bo lżejsza. Czasownik zgadza się z rzeczą, nie z domyślnym wykonawcą." }
    ],
    grammar: {
      title: "Cztery formy bierne",
      table: {
        head: ["forma", "przykład", "znaczenie"],
        rows: [
          ["essere", "La casa è stata venduta.", "dom został sprzedany"],
          ["venire", "La casa viene venduta ogni anno.", "dom jest sprzedawany (proces)"],
          ["andare", "La casa va venduta subito.", "dom trzeba sprzedać"],
          ["si passivante", "Qui si vendono case.", "sprzedaje się domy"],
          ["wykonawca", "…da un'agenzia", "…przez agencję"],
          ["tylko przechodnie", "—", "bierność wymaga dopełnienia bliższego"]
        ]
      },
      examples: [
        ["Il progetto è stato approvato la settimana scorsa.", "Projekt został zatwierdzony w zeszłym tygodniu."],
        ["Le domande vengono valutate entro trenta giorni.", "Wnioski są rozpatrywane w ciągu trzydziestu dni."],
        ["Il modulo va firmato in ogni pagina.", "Formularz trzeba podpisać na każdej stronie."],
        ["In questo ufficio si parlano tre lingue.", "W tym biurze mówi się trzema językami."],
        ["La riunione è stata rimandata dal direttore.", "Spotkanie zostało przełożone przez dyrektora."],
        ["Questi errori vanno evitati.", "Tych błędów trzeba unikać."]
      ]
    },
    vocab: [
      { it: "approvare", pl: "zatwierdzać" },
      { it: "valutare", pl: "oceniać, rozpatrywać" },
      { it: "respingere", pl: "odrzucać" },
      { it: "rimandare", pl: "przekładać" },
      { it: "compilare", pl: "wypełniać" },
      { it: "allegare", pl: "załączać" },
      { it: "evitare", pl: "unikać" },
      { it: "consegnare", pl: "składać, dostarczać" },
      { it: "entro trenta giorni", pl: "w ciągu trzydziestu dni" },
      { it: "il termine", pl: "termin" },
      { it: "la domanda", pl: "wniosek, podanie" },
      { it: "l'esito", pl: "wynik, rozstrzygnięcie" }
    ],
    exercises: [
      { t: "mcq", q: "„Il modulo va compilato” znaczy:",
        opts: ["Formularz idzie wypełniony", "Formularz trzeba wypełnić", "Formularz został wypełniony"], a: 1 },
      { t: "mcq", q: "Która forma NIE działa w czasach złożonych?",
        opts: ["essere + imiesłów", "venire + imiesłów", "si passivante"], a: 1 },
      { t: "fill", q: "Zamień na stronę bierną: „Marco ha scritto la lettera.” → „La lettera ___ stata scritta da Marco.”",
        a: ["è"] },
      { t: "fill", q: "Uzupełnij: „Le domande ___ valutate entro trenta giorni.” (venire)",
        a: ["vengono"] },
      { t: "fill", q: "Uzupełnij: „Questi errori ___ evitati.” (trzeba ich unikać)", a: ["vanno"] },
      { t: "cloze", q: "Uzupełnij formy bierne.",
        text: "Il progetto {{1}} stato approvato ieri, ma il modulo {{2}} ancora firmato.",
        gaps: [["è"], ["va"]],
        pl: "Projekt został zatwierdzony wczoraj, ale formularz trzeba jeszcze podpisać." },
      { t: "trans", dir: "pl-it", q: "„Spotkanie zostało przełożone przez dyrektora.”",
        a: ["la riunione è stata rimandata dal direttore"] },
      { t: "mcq", q: "„Qui si vendono panini” — dlaczego „vendono”?",
        opts: ["To błąd", "Si passivante zgadza się z rzeczą w liczbie mnogiej", "Bo mowa o wielu sprzedawcach"], a: 1 },
      { t: "listen", it: "Le domande vanno consegnate entro il quindici del mese.", pl: "Wnioski trzeba złożyć do piętnastego dnia miesiąca." },
      { t: "speak", it: "Il documento è stato approvato e va firmato entro venerdì.", pl: "Dokument został zatwierdzony i trzeba go podpisać do piątku." }
    ]
  },
  {
    id: "b2-u03-l2",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Passato remoto",
    titlePl: "Czas narracji",
    objectivesPl: [
      "utworzyć passato remoto",
      "rozpoznać wzorzec 1-3-3 w czasownikach nieregularnych",
      "wiedzieć, kiedy i gdzie się go używa"
    ],
    theory: [
      { h: "Kiedy się go używa",
        p: "W narracji literackiej i historycznej (<em>Dante <b>nacque</b> nel 1265</em>), o zdarzeniach odległych i zamkniętych, bez związku z teraźniejszością. Na <b>południu Włoch</b> także w mowie potocznej, również o wczorajszych zdarzeniach; na północy prawie nie występuje." },
      { h: "Formy regularne",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (lub etti), esti, é (lub ette), emmo, este, erono (lub ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono." },
      { h: "Wzorzec 1-3-3",
        p: "Większość nieregularnych czasowników na <em>-ere</em> jest nieregularna <b>tylko w trzech osobach</b>: pierwszej pojedynczej, trzeciej pojedynczej i trzeciej mnogiej. Reszta jest regularna. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Znając formę <em>io</em>, wyprowadzisz dwie pozostałe." },
      { tip: "Do czytania literatury wystarczy <b>rozpoznawać</b> passato remoto. Aktywne tworzenie jest potrzebne przy pisaniu narracji i na egzaminach C1." }
    ],
    grammar: {
      title: "Passato remoto",
      table: {
        head: ["czasownik", "io", "tu", "lui/lei", "loro"],
        rows: [
          ["parlare", "parlai", "parlasti", "parlò", "parlarono"],
          ["credere", "credei", "credesti", "credé", "crederono"],
          ["dormire", "dormii", "dormisti", "dormì", "dormirono"],
          ["essere", "fui", "fosti", "fu", "furono"],
          ["avere", "ebbi", "avesti", "ebbe", "ebbero"],
          ["fare", "feci", "facesti", "fece", "fecero"],
          ["prendere", "presi", "prendesti", "prese", "presero"],
          ["dire", "dissi", "dicesti", "disse", "dissero"]
        ]
      },
      examples: [
        ["Dante nacque a Firenze nel 1265.", "Dante urodził się we Florencji w 1265."],
        ["L'Italia divenne una repubblica nel 1946.", "Włochy stały się republiką w 1946."],
        ["Uscì di casa e non tornò mai più.", "Wyszedł z domu i nigdy nie wrócił."],
        ["Fu allora che capii tutto.", "Wtedy właśnie wszystko zrozumiałem."],
        ["Scrisse il romanzo in due anni.", "Napisał powieść w dwa lata."],
        ["Appena ebbe finito, uscì.", "Ledwie skończył, wyszedł.", "trapassato remoto"]
      ]
    },
    vocab: [
      { it: "nascere → nacque", pl: "urodzić się" },
      { it: "morire → morì", pl: "umrzeć" },
      { it: "diventare → divenne", pl: "stać się" },
      { it: "scrivere → scrisse", pl: "napisać" },
      { it: "vivere → visse", pl: "żyć" },
      { it: "vedere → vide", pl: "zobaczyć" },
      { it: "sapere → seppe", pl: "dowiedzieć się" },
      { it: "volere → volle", pl: "zechcieć" },
      { it: "il romanzo", pl: "powieść" },
      { it: "il secolo", pl: "wiek, stulecie" },
      { it: "l'epoca", pl: "epoka" },
      { it: "la vicenda", pl: "wydarzenie, historia" }
    ],
    exercises: [
      { t: "conj", verb: "essere", tense: "remoto", persons: [0, 2, 5] },
      { t: "conj", verb: "avere", tense: "remoto", persons: [0, 2, 5] },
      { t: "conj", verb: "fare", tense: "remoto", persons: [0, 2, 5] },
      { t: "mcq", q: "Na czym polega wzorzec 1-3-3?",
        opts: ["Trzy czasowniki są nieregularne", "Nieregularne są tylko io, lui/lei i loro", "Wszystkie formy są nieregularne"], a: 1 },
      { t: "fill", q: "Passato remoto od „prendere”, forma loro: ___", a: ["presero"] },
      { t: "fill", q: "Passato remoto od „dire”, forma lui: ___", a: ["disse"] },
      { t: "mcq", q: "Gdzie passato remoto występuje także w mowie potocznej?",
        opts: ["Na północy Włoch", "Na południu Włoch", "Nigdzie"], a: 1 },
      { t: "cloze", q: "Uzupełnij narrację.",
        text: "Dante {{1}} (nascere) nel 1265 e {{2}} (morire) nel 1321.",
        gaps: [["nacque"], ["morì"]],
        pl: "Dante urodził się w 1265 i zmarł w 1321." },
      { t: "trans", dir: "pl-it", q: "„Włochy stały się republiką w 1946 roku.”",
        a: ["l'italia divenne una repubblica nel 1946"] },
      { t: "listen", it: "Uscì di casa quella sera e non tornò mai più.", pl: "Wyszedł z domu tamtego wieczoru i już nigdy nie wrócił." },
      { t: "speak", it: "Fu allora che capii di aver sbagliato.", pl: "Wtedy właśnie zrozumiałem, że się pomyliłem." }
    ]
  },
  {
    id: "b2-u03-l3",
    cefr: "B2",
    themePl: "Gramatyka",
    titleIt: "Frasi implicite",
    titlePl: "Zdania skrócone",
    objectivesPl: [
      "zastąpić zdanie podrzędne bezokolicznikiem lub gerundio",
      "użyć infinito passato i gerundio passato",
      "pisać zwięźlej"
    ],
    theory: [
      { h: "Po co skracać",
        p: "Zdanie implicite (bez własnego podmiotu i spójnika) skraca tekst i podnosi rejestr. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> To jedna z cech, które odróżniają tekst B2 od B1." },
      { h: "Warunek: ten sam podmiot",
        p: "Formy implicite wymagają, żeby oba zdania miały <b>ten sam podmiot</b>. <em>Essendo stanco, sono rimasto a casa</em> jest poprawne; przy różnych podmiotach trzeba zbudować pełne zdanie." },
      { h: "Repertuar",
        list: [
          "<em>dopo + infinito passato</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + bezokolicznik</em>: <em>prima di partire</em>",
          "<em>gerundio</em> (przyczyna, sposób, czas): <em>tornando a casa, ho incontrato…</em>",
          "<em>gerundio passato</em>: <em>avendo finito, sono uscito</em>",
          "<em>participio passato</em>: <em>finita la riunione, sono uscito</em>"
        ] },
      { trap: "<em>Dopo</em> zawsze łączy się z <b>infinito passato</b>: <em>dopo aver mangiato</em>, nigdy „dopo mangiare”. To błąd, który powtarza się bardzo często." }
    ],
    grammar: {
      title: "Formy skrócone",
      table: {
        head: ["zdanie pełne", "skrócone", "typ"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "infinito passato"],
          ["Prima che io parta…", "Prima di partire…", "bezokolicznik"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "gerundio"],
          ["Poiché ero stanco…", "Essendo stanco…", "gerundio"],
          ["Dopo che ebbi finito…", "Avendo finito…", "gerundio passato"],
          ["Quando la riunione finì…", "Finita la riunione…", "participio"]
        ]
      },
      examples: [
        ["Dopo aver letto il contratto, ho firmato.", "Po przeczytaniu umowy podpisałem."],
        ["Prima di rispondere, ci ho pensato bene.", "Zanim odpowiedziałem, dobrze się zastanowiłem."],
        ["Tornando a casa, ho incontrato Giulia.", "Wracając do domu, spotkałem Giulię."],
        ["Essendo in ritardo, ho preso un taxi.", "Będąc spóźniony, wziąłem taksówkę."],
        ["Avendo già visto il film, sono rimasta a casa.", "Widziawszy już film, zostałam w domu."],
        ["Finito il lavoro, siamo usciti tutti.", "Po skończeniu pracy wszyscy wyszliśmy."]
      ]
    },
    vocab: [
      { it: "dopo aver + imiesłów", pl: "po zrobieniu czegoś" },
      { it: "prima di + bezokolicznik", pl: "przed zrobieniem" },
      { it: "essendo", pl: "będąc" },
      { it: "avendo", pl: "mając, zrobiwszy" },
      { it: "pur + gerundio", pl: "mimo że" },
      { it: "una volta + imiesłów", pl: "gdy już" },
      { it: "riflettere", pl: "zastanawiać się" },
      { it: "concludere", pl: "kończyć, wnioskować" },
      { it: "sintetico", pl: "zwięzły" },
      { it: "il registro scritto", pl: "rejestr pisany" },
      { it: "scorrevole", pl: "płynny" },
      { it: "appesantire", pl: "obciążać (styl)" }
    ],
    exercises: [
      { t: "mcq", q: "Które jest poprawne?",
        opts: ["Dopo mangiare, sono uscito.", "Dopo aver mangiato, sono uscito.", "Dopo mangiato, sono uscito."], a: 1 },
      { t: "fill", q: "Skróć: „Dopo che ho letto il contratto” → „Dopo ___ letto il contratto”",
        a: ["aver", "avere"] },
      { t: "fill", q: "Skróć: „Mentre tornavo a casa” → „___ a casa”", a: ["tornando"] },
      { t: "fill", q: "Skróć: „Poiché ero stanco” → „___ stanco”", a: ["essendo"] },
      { t: "mcq", q: "Warunek użycia formy skróconej to:",
        opts: ["ten sam czas", "ten sam podmiot w obu zdaniach", "brak przeczenia"], a: 1 },
      { t: "cloze", q: "Skróć zdania.",
        text: "{{1}} (dopo / leggere) il contratto, ho firmato. {{2}} (prima di / rispondere), ci ho pensato.",
        gaps: [["dopo aver letto"], ["prima di rispondere"]],
        pl: "Po przeczytaniu umowy podpisałem. Zanim odpowiedziałem, zastanowiłem się." },
      { t: "trans", dir: "pl-it", q: "„Wracając do domu, spotkałem Giulię.”",
        a: ["tornando a casa ho incontrato giulia"] },
      { t: "order", pl: "Po skończeniu pracy wszyscy wyszliśmy.",
        tokens: ["Finito", "il", "lavoro,", "siamo", "usciti", "tutti"],
        a: ["finito il lavoro siamo usciti tutti"] },
      { t: "listen", it: "Avendo già visto quel film, ho preferito restare a casa.", pl: "Widziawszy już ten film, wolałem zostać w domu." },
      { t: "speak", it: "Prima di firmare, vorrei rileggere il contratto.", pl: "Zanim podpiszę, chciałbym przeczytać umowę jeszcze raz." }
    ]
  }
  ],
  test: {
    id: "b2-u03-test",
    cefr: "B2", themePl: "Sprawdzian",
    titleIt: "Test — Passivo e remoto", titlePl: "Sprawdzian jednostki 3",
    objectivesPl: ["sprawdzić stronę bierną, passato remoto i zdania skrócone"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Il modulo va compilato” znaczy:", opts: ["idzie wypełniony", "trzeba wypełnić", "został wypełniony"], a: 1 },
      { t: "fill", q: "„La lettera ___ stata scritta da Marco.”", a: ["è"] },
      { t: "fill", q: "„Le domande ___ valutate ogni mese.” (venire)", a: ["vengono"] },
      { t: "conj", verb: "fare", tense: "remoto", persons: [0, 2, 5] },
      { t: "fill", q: "Passato remoto od „prendere”, io: ___", a: ["presi"] },
      { t: "mcq", q: "Poprawne:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"], a: 1 },
      { t: "fill", q: "„Mentre tornavo” → „___” (gerundio)", a: ["tornando"] },
      { t: "trans", dir: "pl-it", q: "„Wnioski trzeba złożyć do piątku.”",
        a: ["le domande vanno consegnate entro venerdì"] },
      { t: "listen", it: "Il progetto fu approvato nel 1998 e venne realizzato in tre anni.", pl: "Projekt zatwierdzono w 1998 i zrealizowano w trzy lata." },
      { t: "speak", it: "Dopo aver letto il contratto, ho deciso di non firmare.", pl: "Po przeczytaniu umowy zdecydowałem, że nie podpiszę." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 4 — SOCIETÀ E DIBATTITO
   ══════════════════════════════════════════════════════════════ */
{
  id: "b2-u04",
  icon: "🏛️",
  titleIt: "Società e dibattito",
  titlePl: "Społeczeństwo i debata",
  grammarPl: "leksyka abstrakcyjna · argumentacja · rejestry",
  lessons: [
  {
    id: "b2-u04-l1",
    cefr: "B2",
    themePl: "Społeczeństwo",
    titleIt: "Economia e lavoro",
    titlePl: "Gospodarka i rynek pracy",
    objectivesPl: [
      "rozumieć podstawowe pojęcia ekonomiczne w prasie",
      "porozmawiać o rynku pracy",
      "użyć nominalizacji charakterystycznych dla tego rejestru"
    ],
    theory: [
      { h: "Słownictwo prasy ekonomicznej",
        p: "Teksty ekonomiczne opierają się na wąskim, powtarzalnym zestawie słów. Opanowanie stu z nich otwiera większość artykułów: <em>il PIL</em> (PKB), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>." },
      { h: "Charakterystyczne struktury",
        list: [
          "nominalizacja: <em>la crescita dei prezzi</em> zamiast „ceny rosną”",
          "strona bierna: <em>è stato approvato il decreto</em>",
          "wyrażenia zmiany: <em>in aumento, in calo, stabile, in ripresa</em>",
          "porównania: <em>rispetto allo scorso anno, su base annua</em>"
        ] },
      { h: "Realia włoskiego rynku pracy",
        p: "<em>Il precariato</em> (praca niestabilna), <em>i contratti a termine</em>, <em>la fuga di cervelli</em> (drenaż mózgów), <em>i NEET</em> (młodzi poza pracą i edukacją), <em>il divario Nord-Sud</em> — to tematy, które wracają w każdej debacie publicznej." },
      { tip: "<em>Il cuneo fiscale</em> (klin podatkowy) to jedno z najczęściej powtarzanych pojęć włoskiej debaty gospodarczej. Warto je znać, bo pada w każdej dyskusji o płacach." }
    ],
    grammar: {
      title: "Leksyka ekonomiczna",
      table: {
        head: ["po włosku", "po polsku", "kontekst"],
        rows: [
          ["il PIL", "PKB", "makroekonomia"],
          ["l'inflazione", "inflacja", "ceny"],
          ["la disoccupazione", "bezrobocie", "rynek pracy"],
          ["il potere d'acquisto", "siła nabywcza", "płace"],
          ["il precariato", "praca niestabilna", "zatrudnienie"],
          ["la fuga di cervelli", "drenaż mózgów", "emigracja"],
          ["in calo / in aumento", "spada / rośnie", "dane"]
        ]
      },
      examples: [
        ["L'inflazione è in calo rispetto allo scorso anno.", "Inflacja spada w porównaniu z zeszłym rokiem."],
        ["La disoccupazione giovanile resta un problema strutturale.", "Bezrobocie młodych pozostaje problemem strukturalnym."],
        ["Il potere d'acquisto delle famiglie si è ridotto.", "Siła nabywcza gospodarstw domowych spadła."],
        ["Molti giovani laureati lasciano il Paese.", "Wielu młodych absolwentów wyjeżdża z kraju."],
        ["Il divario tra Nord e Sud si è ampliato.", "Różnica między Północą a Południem się pogłębiła."],
        ["Il decreto è stato approvato con modifiche.", "Dekret został przyjęty z poprawkami."]
      ]
    },
    vocab: [
      { it: "il PIL", pl: "PKB" },
      { it: "l'inflazione", pl: "inflacja" },
      { it: "il debito pubblico", pl: "dług publiczny" },
      { it: "la disoccupazione", pl: "bezrobocie" },
      { it: "il potere d'acquisto", pl: "siła nabywcza" },
      { it: "il precariato", pl: "praca niestabilna" },
      { it: "la fuga di cervelli", pl: "drenaż mózgów" },
      { it: "il divario", pl: "różnica, przepaść" },
      { it: "la crescita", pl: "wzrost" },
      { it: "la ripresa", pl: "ożywienie" },
      { it: "il decreto", pl: "dekret" },
      { it: "su base annua", pl: "w ujęciu rocznym" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["il PIL", "PKB"], ["l'inflazione", "inflacja"], ["la disoccupazione", "bezrobocie"], ["il divario", "przepaść"]] },
      { t: "mcq", q: "„La fuga di cervelli” to:",
        opts: ["ucieczka więźniów", "drenaż mózgów", "utrata pamięci"], a: 1 },
      { t: "fill", q: "Uzupełnij: „L'inflazione è in ___ rispetto allo scorso anno.” (spada)",
        a: ["calo"] },
      { t: "fill", q: "Uzupełnij nominalizację: „i prezzi crescono” → „la ___ dei prezzi”",
        a: ["crescita"] },
      { t: "mcq", q: "„Il precariato” oznacza:",
        opts: ["stabilne zatrudnienie", "pracę niestabilną, na krótkie umowy", "emeryturę"], a: 1 },
      { t: "cloze", q: "Uzupełnij.",
        text: "Il {{1}} d'acquisto si è ridotto e la {{2}} giovanile resta alta.",
        gaps: [["potere"], ["disoccupazione"]],
        pl: "Siła nabywcza spadła, a bezrobocie młodych pozostaje wysokie." },
      { t: "trans", dir: "pl-it", q: "„Dekret został przyjęty z poprawkami.”",
        a: ["il decreto è stato approvato con modifiche"] },
      { t: "order", pl: "Różnica między Północą a Południem się pogłębiła.",
        tokens: ["Il", "divario", "tra", "Nord", "e", "Sud", "si", "è", "ampliato"],
        a: ["il divario tra nord e sud si è ampliato"] },
      { t: "listen", it: "Su base annua, il PIL è cresciuto dello zero virgola sette per cento.", pl: "W ujęciu rocznym PKB wzrósł o zero przecinek siedem procent." },
      { t: "speak", it: "La disoccupazione giovanile resta un problema strutturale.", pl: "Bezrobocie młodych pozostaje problemem strukturalnym." }
    ]
  },
  {
    id: "b2-u04-l2",
    cefr: "B2",
    themePl: "Społeczeństwo",
    titleIt: "Ambiente e tecnologia",
    titlePl: "Środowisko i technologia",
    objectivesPl: [
      "porozmawiać o zmianach klimatu i technologii",
      "wyrazić obawę i nadzieję",
      "uporządkować argumenty za i przeciw"
    ],
    theory: [
      { h: "Dwa pola, jedna struktura debaty",
        p: "Zarówno klimat, jak i technologia dyskutuje się po włosku w schemacie <em>rischi / opportunità</em>. Warto opanować ten szkielet: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>" },
      { h: "Obawa i nadzieja",
        list: [
          "obawa: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "nadzieja: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "ostrożność: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ] },
      { h: "Słownictwo, które wraca",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>." },
      { tip: "<em>Il fatto che</em> zawsze pociąga congiuntivo: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em>" }
    ],
    grammar: {
      title: "Debata: za i przeciw",
      table: {
        head: ["funkcja", "zwrot", "tryb"],
        rows: [
          ["obawa", "Temo che / C'è il rischio che", "congiuntivo"],
          ["fakt jako podmiot", "Il fatto che…", "congiuntivo"],
          ["nadzieja", "Spero che / Confido che", "congiuntivo"],
          ["zastrzeżenie", "Bisogna vedere se…", "indicativo"],
          ["zależność", "Dipenderà da…", "indicativo"],
          ["kontrast", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        ["Temo che i tempi della transizione siano troppo lunghi.", "Obawiam się, że tempo transformacji jest za wolne."],
        ["Il fatto che sia difficile non significa che sia impossibile.", "To, że jest trudno, nie znaczy, że jest niemożliwe."],
        ["C'è il rischio che l'automazione riduca i posti di lavoro.", "Istnieje ryzyko, że automatyzacja zmniejszy liczbę miejsc pracy."],
        ["Le rinnovabili coprono ormai una quota significativa.", "Odnawialne źródła pokrywają już znaczącą część."],
        ["Bisogna vedere se le norme verranno applicate.", "Trzeba zobaczyć, czy przepisy zostaną zastosowane."],
        ["Sono cautamente ottimista.", "Jestem ostrożnym optymistą."]
      ]
    },
    vocab: [
      { it: "la transizione ecologica", pl: "transformacja ekologiczna" },
      { it: "le energie rinnovabili", pl: "odnawialne źródła energii" },
      { it: "l'impronta di carbonio", pl: "ślad węglowy" },
      { it: "la raccolta differenziata", pl: "segregacja odpadów" },
      { it: "lo spreco", pl: "marnotrawstwo" },
      { it: "l'intelligenza artificiale", pl: "sztuczna inteligencja" },
      { it: "l'automazione", pl: "automatyzacja" },
      { it: "la disinformazione", pl: "dezinformacja" },
      { it: "il rischio", pl: "ryzyko" },
      { it: "l'opportunità", pl: "szansa" },
      { it: "sostenibile", pl: "zrównoważony" },
      { it: "cautamente", pl: "ostrożnie" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Il fatto che ___ difficile non significa che sia impossibile.” (essere)",
        a: ["sia"] },
      { t: "fill", q: "Uzupełnij: „C'è il rischio che l'automazione ___ i posti di lavoro.” (ridurre)",
        a: ["riduca"] },
      { t: "match", q: "Połącz.",
        pairs: [["l'impronta di carbonio", "ślad węglowy"], ["la raccolta differenziata", "segregacja odpadów"], ["lo spreco", "marnotrawstwo"], ["sostenibile", "zrównoważony"]] },
      { t: "mcq", q: "Po „il fatto che” stawiamy:",
        opts: ["indicativo", "congiuntivo", "bezokolicznik"], a: 1 },
      { t: "mcq", q: "„Bisogna vedere se le norme verranno applicate” wyraża:",
        opts: ["pewność", "ostrożne zastrzeżenie", "obawę"], a: 1 },
      { t: "cloze", q: "Uzupełnij wypowiedź.",
        text: "Da un {{1}} ci sono rischi evidenti, dall'{{2}} le opportunità sono reali.",
        gaps: [["lato"], ["altro"]],
        pl: "Z jednej strony są wyraźne zagrożenia, z drugiej szanse są realne." },
      { t: "trans", dir: "pl-it", q: "„Obawiam się, że tempo jest za wolne.”",
        a: ["temo che i tempi siano troppo lunghi", "temo che sia troppo lento"] },
      { t: "order", pl: "Jestem ostrożnym optymistą co do przyszłości.",
        tokens: ["Sono", "cautamente", "ottimista", "sul", "futuro"],
        a: ["sono cautamente ottimista sul futuro"] },
      { t: "listen", it: "Il fatto che la tecnologia avanzi non risolve da solo il problema.", pl: "To, że technologia się rozwija, samo w sobie nie rozwiązuje problemu." },
      { t: "speak", it: "C'è il rischio che la transizione sia troppo lenta.", pl: "Istnieje ryzyko, że transformacja będzie zbyt wolna." }
    ]
  },
  {
    id: "b2-u04-l3",
    cefr: "B2",
    themePl: "Komunikacja",
    titleIt: "Sostenere una posizione",
    titlePl: "Obrona stanowiska",
    objectivesPl: [
      "zbudować rozbudowaną argumentację",
      "odeprzeć kontrargument",
      "zamknąć debatę wnioskiem"
    ],
    theory: [
      { h: "Trzy ruchy skutecznej argumentacji",
        list: [
          "<b>koncesja</b>: przyznaj punkt przeciwnikowi — <em>È vero che…</em>",
          "<b>zwrot</b>: podważ jego wagę — <em>Tuttavia / Va però considerato che…</em>",
          "<b>dowód</b>: poprzyj danymi lub przykładem — <em>I dati mostrano che…</em>"
        ] },
      { h: "Odpieranie kontrargumentu",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Wszystkie te formuły podważają argument, nie osobę." },
      { h: "Ton debaty po włosku",
        p: "Włoska debata bywa głośna i przerywana, ale rzadko przechodzi na osobiste. Formuła <em>con tutto il rispetto, non sono d'accordo</em> jest w pełni akceptowalnym otwarciem sporu." },
      { tip: "<em>Il punto è che…</em> („rzecz w tym, że…”) to najskuteczniejszy sposób sprowadzenia dyskusji do sedna, gdy rozmowa się rozjeżdża." }
    ],
    grammar: {
      title: "Argumentacja zaawansowana",
      table: {
        head: ["ruch", "formuła", "po polsku"],
        rows: [
          ["koncesja", "È vero che… / Concordo sul fatto che…", "To prawda, że…"],
          ["zwrot", "Va però considerato che…", "Trzeba jednak uwzględnić, że…"],
          ["dowód", "I dati mostrano che…", "Dane pokazują, że…"],
          ["podważenie", "Mi sembra una generalizzazione.", "To wydaje mi się uogólnieniem."],
          ["sedno", "Il punto è che…", "Rzecz w tym, że…"],
          ["wniosek", "Alla luce di quanto detto…", "W świetle powiedzianego…"]
        ]
      },
      examples: [
        ["È vero che i costi sono alti, va però considerato il risparmio a lungo termine.", "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności w dłuższej perspektywie."],
        ["I dati mostrano una tendenza opposta.", "Dane pokazują odwrotną tendencję."],
        ["Questo vale in alcuni casi, non come regola generale.", "To dotyczy niektórych przypadków, nie jako reguła."],
        ["Il punto è che non abbiamo alternative realistiche.", "Rzecz w tym, że nie mamy realnych alternatyw."],
        ["Con tutto il rispetto, non sono d'accordo.", "Z całym szacunkiem, nie zgadzam się."],
        ["Alla luce di quanto detto, propongo di rivedere il piano.", "W świetle powiedzianego proponuję zrewidować plan."]
      ]
    },
    vocab: [
      { it: "sostenere una tesi", pl: "bronić tezy" },
      { it: "la generalizzazione", pl: "uogólnienie" },
      { it: "reggere", pl: "wytrzymywać (o argumencie)" },
      { it: "confutare", pl: "obalać" },
      { it: "il controargomento", pl: "kontrargument" },
      { it: "concordare su", pl: "zgadzać się co do" },
      { it: "alla luce di", pl: "w świetle" },
      { it: "a lungo termine", pl: "w dłuższej perspektywie" },
      { it: "il punto è che", pl: "rzecz w tym, że" },
      { it: "con tutto il rispetto", pl: "z całym szacunkiem" },
      { it: "rivedere", pl: "zrewidować" },
      { it: "la tendenza", pl: "tendencja" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["confutare", "obalać"], ["reggere", "wytrzymywać"], ["alla luce di", "w świetle"], ["la generalizzazione", "uogólnienie"]] },
      { t: "mcq", q: "Który ruch wzmacnia argumentację najbardziej?",
        opts: ["Powtórzenie tezy", "Przyznanie racji przeciwnikowi przed jej podważeniem", "Podniesienie głosu"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Va però ___ che i costi si ammortizzano.” (uwzględnić)",
        a: ["considerato"] },
      { t: "fill", q: "Uzupełnij: „Il ___ è che non abbiamo alternative.”", a: ["punto"] },
      { t: "cloze", q: "Zbuduj argument.",
        text: "{{1}} vero che i costi sono alti, {{2}} va considerato il risparmio a lungo termine.",
        gaps: [["è"], ["però", "tuttavia"]],
        pl: "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności długoterminowe." },
      { t: "trans", dir: "pl-it", q: "„To wydaje mi się uogólnieniem.”",
        a: ["mi sembra una generalizzazione"] },
      { t: "dialogue", q: "Debata na spotkaniu.",
        setting: "Zebranie zespołu, spór o budżet.",
        lines: [
          { sp: "A", it: "Questo investimento è troppo costoso, punto.", pl: "Ta inwestycja jest za droga, koniec kropka." },
          { sp: "TY", pl: "Przyznaj częściowo rację i wprowadź kontrargument.", choices: ["È vero che i costi sono alti, va però considerato il risparmio a lungo termine.", "No, sbagli completamente.", "Il punto è che hai ragione."], a: 0, plAnswer: "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności długoterminowe." },
          { sp: "A", it: "Ma tutti dicono che questi progetti falliscono.", pl: "Ale wszyscy mówią, że takie projekty upadają." },
          { sp: "TY", pl: "Podważ uogólnienie, powołując się na dane.", choices: ["Mi sembra una generalizzazione: i dati mostrano il contrario.", "Hai ragione, allora lasciamo perdere.", "Con tutto il rispetto, non capisci."], a: 0, plAnswer: "To wydaje mi się uogólnieniem: dane pokazują coś innego." }
        ] },
      { t: "order", pl: "W świetle powiedzianego proponuję zrewidować plan.",
        tokens: ["Alla", "luce", "di", "quanto", "detto,", "propongo", "di", "rivedere", "il", "piano"],
        a: ["alla luce di quanto detto propongo di rivedere il piano"] },
      { t: "listen", it: "Con tutto il rispetto, non credo che questo argomento regga.", pl: "Z całym szacunkiem, nie sądzę, żeby ten argument się bronił." },
      { t: "speak", it: "Il punto è che non abbiamo alternative realistiche.", pl: "Rzecz w tym, że nie mamy realnych alternatyw." }
    ]
  }
  ],
  test: {
    id: "b2-u04-test",
    cefr: "B2", themePl: "Egzamin",
    titleIt: "Esame finale B2", titlePl: "Egzamin końcowy poziomu B2",
    objectivesPl: ["sprawdzić congiuntivo, okresy warunkowe, stronę bierną i argumentację"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "congImp", persons: [0, 2, 5] },
      { t: "fill", q: "„Pensavo che ___ più semplice.”", a: ["fosse"] },
      { t: "fill", q: "„Speravo che mi ___ chiamato.”", a: ["avrebbe"] },
      { t: "mcq", q: "„Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"], a: 2 },
      { t: "cloze", q: "Typ 3.", text: "Se {{1}} (studiare, io), {{2}} (passare, io) l'esame.",
        gaps: [["avessi studiato"], ["avrei passato"]], pl: "Gdybym się uczył, zdałbym egzamin." },
      { t: "fill", q: "„Il modulo ___ compilato in stampatello.” (trzeba)", a: ["va"] },
      { t: "fill", q: "Passato remoto od „fare”, lui: ___", a: ["fece"] },
      { t: "mcq", q: "Poprawne:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"], a: 1 },
      { t: "fill", q: "„Il fatto che ___ difficile non significa niente.” (essere)", a: ["sia"] },
      { t: "fill", q: "„Parla come se ___ un esperto.”", a: ["fosse"] },
      { t: "trans", dir: "pl-it", q: "„To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności.”",
        a: ["è vero che i costi sono alti va però considerato il risparmio", "è vero che i costi sono alti, tuttavia va considerato il risparmio"] },
      { t: "speak", it: "Alla luce dei dati, ritengo che valga la pena rivedere il piano.", pl: "W świetle danych uważam, że warto zrewidować plan." }
    ]
  }
}

]);
