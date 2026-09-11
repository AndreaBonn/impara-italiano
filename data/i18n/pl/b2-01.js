/* ============================================================
   Teksty w języku ucznia (pl) do data/core/b2-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto i trapassato · zgodność czasów"
  },
  "lesson:b2-u01-l1": {
    theme: "Gramatyka",
    title: "Formy i podstawowe użycia",
    objectives: [
      "utworzyć congiuntivo imperfetto",
      "znać formy nieregularne",
      "użyć go po zdaniu nadrzędnym w czasie przeszłym"
    ],
    theory: [
      {
        h: "Odmiana jest wyjątkowo regularna",
        p: "Temat bezokolicznika + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Nieregularne są tylko: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        h: "Podstawowa reguła: cofnięcie zdania nadrzędnego",
        p: "Gdy zdanie główne przechodzi w przeszłość, congiuntivo presente zamienia się w imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Ten sam mechanizm co przy zgodności czasów w mowie zależnej."
      },
      {
        h: "Drugi kontekst: hipoteza z se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> („gdybym miał czas, przyszedłbym”). To okres warunkowy drugiego typu, którym zajmiemy się osobno w następnej jednostce. Na razie zapamiętaj, że po <em>se</em> nigdy nie stawia się condizionale."
      },
      {
        h: "Trzeci kontekst: życzenie",
        p: "Congiuntivo imperfetto potrafi stać samodzielnie i wyrażać życzenie lub żal: <em>Magari venisse!</em> („oby przyszedł!”), <em>Fosse vero!</em> („żeby to była prawda!”), <em>Piovesse almeno!</em>"
      }
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
        { tr: "Myślałem, że to prostsze." },
        { tr: "Nie wiedziałem, że tu pracujesz." },
        { tr: "Chciałem, żebyś powiedział mi to wcześniej." },
        { tr: "Gdybym miał czas, chętnie bym przyszedł." },
        { tr: "Oby przyszła też ona!" },
        { tr: "Wydawało się, że nikogo nie ma." }
      ]
    },
    vocab: [
      "myślałem, że…",
      "nie wiedziałem, że…",
      "chciałem, żeby…",
      "wydawało się, że…",
      "oby, może",
      "jak gdyby",
      "pod warunkiem że",
      "w przypadku gdyby",
      "gdyby co, ewentualnie",
      "prawie że (waham się)",
      "najwyższy czas",
      "kto wie, czy"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Uzupełnij: „Pensavo che ___ più semplice.” (essere)" },
      { q: "Uzupełnij: „Non sapevo che tu ___ qui.” (lavorare)" },
      {
        q: "„Penso che sia vero” w czasie przeszłym:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Wstaw congiuntivo imperfetto.",
        tr: "Chciałem, żebyś powiedział mi to wcześniej i żebyś poszedł z nami."
      },
      { q: "„Magari venisse!” znaczy:", opts: ["Może przyjdzie", "Oby przyszedł!", "Przyszedłby"] },
      { q: "„Wydawało się, że nikogo nie ma.”" },
      { tr: "Nie wiedziałem, że skończyłeś już projekt." },
      { tr: "Myślałem, że to łatwiejsze niż jest." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Gramatyka",
    title: "Zgodność czasów",
    objectives: [
      "dobrać czas w zdaniu podrzędnym",
      "wyrazić uprzedniość, równoczesność i następczość",
      "utworzyć congiuntivo trapassato"
    ],
    theory: [
      {
        h: "Trzy relacje czasowe",
        p: "W zdaniu złożonym podrzędne może wyrażać czynność <b>wcześniejszą</b>, <b>równoczesną</b> albo <b>późniejszą</b> od nadrzędnego. Wybór trybu i czasu zależy od obu tych rzeczy: od czasu zdania głównego i od relacji."
      },
      {
        h: "Tabela, którą warto umieć na pamięć",
        list: [
          "główne w <b>teraźniejszym</b>: równoczesność → cong. presente; uprzedniość → cong. passato; następczość → cong. presente lub futuro",
          "główne w <b>przeszłym</b>: równoczesność → cong. imperfetto; uprzedniość → cong. trapassato; następczość → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto od <em>avere/essere</em> + imiesłów: <em>avessi fatto</em>, <em>fossi andato</em>. Wyraża uprzedniość wobec przeszłego zdania głównego: <em>Pensavo che <b>fosse già partito</b>.</em>"
      },
      {
        trap: "Następczość po zdaniu przeszłym to <b>condizionale passato</b>, nie congiuntivo: <em>Pensavo che <b>sarebbe venuto</b></em>. To ten sam mechanizm co w mowie zależnej i najczęstsze potknięcie na poziomie B2."
      }
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
        { tr: "Sądziłem, że już odpowiedział." },
        { tr: "Miałem nadzieję, że do mnie zadzwoni." },
        { tr: "Nie przypuszczałem, że to takie skomplikowane." },
        { tr: "Dziwne było, że jeszcze nie przyjechali." },
        { tr: "Bałem się, że pomyliliśmy drogę." },
        { tr: "Wydawało mi się, że jest błąd." }
      ]
    },
    vocab: [
      "zgodność",
      "uprzedniość",
      "równoczesność",
      "następczość",
      "przypuszczać, wyobrażać sobie",
      "obawiać się",
      "podejrzewać",
      "wątpić",
      "zakładać",
      "okazywać się",
      "w tym momencie",
      "w międzyczasie"
    ],
    exercises: [
      { q: "Uzupełnij: „Credevo che ___ già risposto.” (avere, on)" },
      { q: "Uzupełnij: „Speravo che mi ___ chiamato.” (przyszłość w przeszłości)" },
      {
        q: "„Pensavo che ___ domani.” (venire — następczość)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "„Pensavo che ___ qui.” (essere — równoczesność)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Wstaw właściwe formy.",
        tr: "Nie przypuszczałem, że to takie skomplikowane i że potrzeba tyle czasu."
      },
      {
        q: "Wstaw właściwe formy.",
        tr: "Dziwne było, że jeszcze nie przyjechali i że nikt niczego nie zgłosił."
      },
      { q: "„Miałem nadzieję, że do mnie zadzwoni.”" },
      {
        q: "Najczęstszy błąd przy zgodności czasów to:",
        opts: [
          "użycie congiuntivo zamiast indicativo",
          "użycie condizionale presente zamiast passato przy następczości",
          "pominięcie che"
        ]
      },
      { tr: "Bałem się, że pomyliliśmy drogę i że jest za późno." },
      { tr: "Sądziłem, że odpowiedział już na mojego maila." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Gramatyka",
    title: "Spójniki wymagające congiuntivo",
    objectives: [
      "użyć come se z congiuntivo imperfetto",
      "znać spójniki celu, warunku i ustępstwa",
      "wybrać między indicativo a congiuntivo"
    ],
    theory: [
      {
        h: "Come se zawsze z imperfetto lub trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Nigdy z presente ani z indicativo — nawet gdy zdanie główne jest w teraźniejszości. To wyjątek od zgodności czasów i jedna z częściej mylonych konstrukcji."
      },
      {
        h: "Spójniki według funkcji",
        list: [
          "<b>ustępstwo</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>cel</b>: affinché, perché (=aby)",
          "<b>warunek</b>: purché, a patto che, a condizione che, sempre che",
          "<b>wyłączenie</b>: a meno che (non), salvo che, tranne che",
          "<b>czas</b>: prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che z tak zwanym non pleonastycznym",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> To <em>non</em> nie jest przeczeniem — zdanie znaczy „chyba że będzie padać”. Pominięcie go jest dziś akceptowane, ale forma z <em>non</em> pozostaje standardem."
      },
      {
        trap: "<b>Dopo che</b> idzie z indicativo, <b>prima che</b> z congiuntivo. Podobna para: <em>anche se</em> (indicativo, „nawet jeśli” faktyczne) kontra <em>anche se</em> w hipotezie (congiuntivo)."
      }
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
        { tr: "Zachowuje się, jakby nic się nie stało." },
        { tr: "Choć to trudne, warto." },
        { tr: "Pomogę ci pod warunkiem, że będziesz poważny." },
        { tr: "Wyjeżdżamy, zanim zacznie się korek." },
        { tr: "Przyjdę, chyba że coś wypadnie." },
        { tr: "Mimo że miał rację, nie powiedział tego." }
      ]
    },
    vocab: [
      "choć, jakkolwiek",
      "mimo",
      "aby",
      "pod warunkiem że",
      "pod warunkiem że",
      "chyba że",
      "z wyjątkiem, chyba że",
      "dopóki nie",
      "zachowywać się",
      "nieprzewidziana przeszkoda",
      "być wartym zachodu",
      "być poważnym"
    ],
    exercises: [
      {
        q: "„Parla come se ___ un esperto.” (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se zawsze z congiuntivo imperfetto lub trapassato."
      },
      { q: "Uzupełnij: „Partiamo prima che ___ tardi.” (essere)" },
      { q: "Uzupełnij: „Ti aiuto a patto che tu ___ serio.” (essere)" },
      {
        q: "„Dopo che è partito” — dlaczego indicativo?",
        opts: ["To błąd", "Dopo che odnosi się do faktu dokonanego", "Bo partire jest nieregularne"]
      },
      {
        q: "Które spójniki wymagają congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Wstaw formy.", tr: "Zachowuje się, jakby nic się nie stało, choć wszyscy znają prawdę." },
      { q: "„Przyjdę, chyba że coś wypadnie.”" },
      { tr: "Choć to trudne, warto spróbować." },
      { tr: "Mimo że miał rację, wolał nic nie mówić." },
      { tr: "Chętnie ci pomogę, pod warunkiem że powiesz mi na czas." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić congiuntivo imperfetto, trapassato i zgodność czasów"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      {  },
      { q: "„Pensavo che ___ più semplice.”" },
      { q: "„Credevo che ___ già risposto.” (avere, on)" },
      { q: "„Pensavo che ___ domani.” (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "„Parla come se ___ esperto.”", opts: ["è", "sia", "fosse"] },
      { q: "„Partiamo prima che ___ tardi.”" },
      { q: "Które wymagają congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "Nie przypuszczałem, że uzyskanie zezwolenia jest tak skomplikowane." },
      { tr: "Miałem nadzieję, że odpowie mi do wczoraj." }
    ]
  },
  "unit:b2-u02": {
    title: "Okresy warunkowe",
    grammarNote: "trzy typy z se · typ mieszany · potoczne warianty"
  },
  "lesson:b2-u02-l1": {
    theme: "Gramatyka",
    title: "Trzy typy okresu warunkowego",
    objectives: [
      "rozróżnić realność, możliwość i nierealność",
      "dobrać czasy do każdego typu",
      "unikać condizionale po se"
    ],
    theory: [
      {
        h: "Typ 1: realny",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> Warunek jest realny i prawdopodobny. Oba zdania w indicativo — czas teraźniejszy, przyszły albo tryb rozkazujący (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Typ 2: możliwy, ale niepewny",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto po <em>se</em>, condizionale presente w zdaniu głównym. Warunek jest hipotetyczny: teoretycznie możliwy, faktycznie niespełniony."
      },
      {
        h: "Typ 3: nierealny, o przeszłości",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. Mówi o czymś, co się już nie stanie: żal albo wyrzut."
      },
      {
        trap: "Po <b>se</b> nigdy nie stoi condizionale ani futuro. „Se avrei tempo” to najbardziej rozpoznawalny błąd obcokrajowca — Włoch usłyszy go natychmiast."
      }
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
          [
            "mieszany",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "Jeśli jutro będzie ładnie, jedziemy nad morze." },
        { tr: "Na twoim miejscu bym tego nie robił." },
        { tr: "Gdybyśmy wiedzieli wcześniej, wyjechalibyśmy wczoraj." },
        { tr: "Gdybym przyjął tamtą pracę, mieszkałbym teraz w Rzymie.", note: "typ mieszany" },
        { tr: "Jeśli będziesz potrzebować, zadzwoń." },
        { tr: "Co byś zrobił, gdybyś wygrał na loterii?" }
      ]
    },
    vocab: [
      "jeśli, gdyby",
      "w przypadku gdyby",
      "gdyby (formalnie)",
      "w przeciwnym razie",
      "na twoim miejscu",
      "oby",
      "hipoteza",
      "warunek",
      "spełniać się",
      "żałować",
      "żal",
      "zmienić zdanie"
    ],
    exercises: [
      { q: "„Se ___ tempo, verrei.” (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "„Se avessi studiato, ___ l'esame.” (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Uzupełnij: „Se domani ___ bel tempo, andiamo al mare.” (fare)" },
      {
        q: "Które zdanie jest błędne?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Uzupełnij typ 2.", tr: "Na twoim miejscu bym tego nie zrobił." },
      { q: "Uzupełnij typ 3.", tr: "Gdybyśmy wiedzieli wcześniej, wyjechalibyśmy wczoraj." },
      { q: "„Co byś zrobił, gdybyś wygrał na loterii?”" },
      {
        q: "„Se avessi accettato quel lavoro, ora vivrei a Roma” to typ:",
        opts: ["pierwszy", "drugi", "mieszany"]
      },
      { tr: "Gdybyśmy zarezerwowali wcześniej, zapłacilibyśmy dużo mniej." },
      { tr: "Na twoim miejscu zastanowiłbym się jeszcze trochę." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Gramatyka",
    title: "Warianty potoczne i formalne",
    objectives: [
      "rozpoznać potoczny okres warunkowy z imperfetto",
      "użyć qualora i nel caso in cui",
      "dobrać rejestr do sytuacji"
    ],
    theory: [
      {
        h: "Podwójny imperfetto w mowie",
        p: "<em>Se lo sapevo, non venivo.</em> W rozmowie Włosi bardzo często zastępują typ 3 podwójnym imperfetto. Konstrukcja jest powszechna i akceptowana w mowie, ale <b>nie w piśmie</b> ani na egzaminie. Warto ją rozumieć i unikać we własnych tekstach."
      },
      {
        h: "Warianty formalne",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> — typowe dla umów i pism urzędowych, zawsze z congiuntivo. <em><b>Nel caso in cui</b></em> działa podobnie. <em><b>Ove</b></em> jest jeszcze bardziej książkowe."
      },
      {
        h: "Warunek bez se",
        list: [
          "gerundio: <em>Studiando di più, passeresti l'esame.</em>",
          "imperativo + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + bezokolicznik</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> plus congiuntivo imperfetto wyraża samo życzenie bez zdania głównego: <em>Magari fosse così semplice!</em>"
      }
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
        { tr: "Gdybym nie otrzymał potwierdzenia, anuluję rezerwację." },
        { tr: "Gdyby padało, spotykamy się w barze." },
        { tr: "Gdyby chcieć, można to zrobić też jutro." },
        { tr: "Gdybym wiedział, zostałbym w domu.", note: "potocznie" },
        { tr: "Żeby to było takie proste!" },
        { tr: "Gdybym to wiedział wcześniej, zrobiłbym inaczej." }
      ]
    },
    vocab: [
      "gdyby (formalnie)",
      "w przypadku gdyby",
      "gdyby (bardzo formalnie)",
      "zająć się, zaradzić",
      "anulować",
      "potwierdzenie",
      "gdyby chcieć",
      "gdyby to wiedzieć",
      "inaczej",
      "w przeciwnym razie",
      "rejestr językowy",
      "niezalecany"
    ],
    exercises: [
      {
        q: "„Se lo sapevo, non venivo” to konstrukcja:",
        opts: ["poprawna w piśmie", "potoczna, akceptowana w mowie, niezalecana w piśmie", "błędna zawsze"]
      },
      { q: "Uzupełnij: „Qualora ___ necessario, provvederemo.” (essere)" },
      { q: "Uzupełnij: „Nel caso in cui ___, ci vediamo al bar.” (piovere)" },
      {
        q: "„Volendo, si può fare domani” znaczy:",
        opts: ["Chcąc, robi się jutro", "Gdyby chcieć, można to zrobić jutro", "Chce się zrobić jutro"]
      },
      { q: "Przekształć na rejestr standardowy.", tr: "Gdybym wiedział, nie przyszedłbym." },
      { q: "„Gdyby padało, spotykamy się w barze.”" },
      { q: "Połącz.", pairs: ["gdyby (formalnie)", "zaradzić", "anulować", "w przeciwnym razie"] },
      { tr: "Bez twojej pomocy nie dałbym rady." },
      { tr: "Gdyby potwierdzenie nie wpłynęło do piątku, anulujemy rezerwację." },
      { tr: "Żeby to było tak proste, jak mówisz." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Komunikacja",
    title: "Żal, wyrzut, hipoteza",
    objectives: [
      "wyrazić żal z powodu przeszłości",
      "sformułować wyrzut bez agresji",
      "prowadzić rozmowę hipotetyczną"
    ],
    theory: [
      {
        h: "Żal to typ trzeci",
        p: "<em>Avrei dovuto ascoltarti.</em> („Powinienem był cię posłuchać.”) Condizionale passato od <em>dovere</em> i <em>potere</em> to najczęstszy sposób wyrażania żalu i samokrytyki po włosku."
      },
      {
        h: "Wyrzut łagodzony",
        p: "<em>Avresti potuto dirmelo.</em> („Mogłeś mi powiedzieć.”) brzmi łagodniej niż <em>perché non me l'hai detto?</em>. Condizionale passato zdejmuje ostrość, zostawiając treść."
      },
      {
        h: "Konstrukcje żalu",
        list: [
          "<em>Se solo avessi…</em> — gdybym tylko…",
          "<em>Non avrei mai dovuto…</em> — nigdy nie powinienem był…",
          "<em>Con il senno di poi…</em> — z perspektywy czasu…",
          "<em>Mi pento di…</em> — żałuję, że…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> („całe szczęście, że…”) to odwrotność żalu i bardzo częste otwarcie zdania: <em>Meno male che sei arrivato.</em>"
      }
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
        { tr: "Powinienem był przyjąć tamtą ofertę." },
        { tr: "Mogłeś mi powiedzieć wcześniej." },
        { tr: "Gdybym tylko posłuchał mamy!" },
        { tr: "Z perspektywy czasu to był błąd." },
        { tr: "Całe szczęście, że nie podpisałem." },
        { tr: "W ogóle tego nie żałuję." }
      ]
    },
    vocab: [
      "powinienem był",
      "mógłbym był",
      "gdybym tylko",
      "z perspektywy czasu",
      "żałować",
      "całe szczęście, że",
      "na szczęście",
      "stracona okazja",
      "zdać sobie sprawę",
      "przyznać",
      "błąd oceny",
      "z czasem"
    ],
    exercises: [
      { q: "Uzupełnij: „___ dovuto ascoltarti.” (powinienem był)" },
      { q: "Uzupełnij: „___ potuto avvisarmi.” (mogłeś)" },
      {
        q: "Które zdanie brzmi jak łagodny wyrzut, nie oskarżenie?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Uzupełnij żal.", tr: "Gdybym tylko wiedział wcześniej, nie podpisałbym tamtej umowy." },
      { q: "„Z perspektywy czasu to był błąd.”" },
      { q: "Połącz.", pairs: ["całe szczęście, że", "żałować", "gdybym tylko", "stracona okazja"] },
      {
        q: "„Non me ne pento affatto” znaczy:",
        opts: ["Trochę żałuję", "W ogóle nie żałuję", "Będę żałować"]
      },
      { tr: "Powinienem był przyjąć tamtą ofertę." },
      { tr: "Z perspektywy czasu podjąłbym inne decyzje." },
      { tr: "Mogłeś mi powiedzieć wcześniej, zmieniłbym plany." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić trzy typy okresu warunkowego i wyrażanie żalu"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"] },
      { q: "„Se avessi studiato, ___ l'esame.”", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Typ 2.", tr: "Na twoim miejscu bym tego nie zrobił." },
      { q: "Typ 3.", tr: "Gdybyśmy zarezerwowali wcześniej, zapłacilibyśmy mniej." },
      { q: "„Qualora ___ necessario, provvederemo.”" },
      { q: "„___ dovuto ascoltarti.”" },
      { q: "„___ potuto avvisarmi.”" },
      { q: "Błędne zdanie:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "Gdybym tylko wiedział, nie podpisałbym tamtej umowy." },
      { tr: "Na twoim miejscu zastanowiłbym się dwa razy." }
    ]
  },
  "unit:b2-u03": {
    title: "Strona bierna i passato remoto",
    grammarNote: "essere/venire/andare + imiesłów · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Gramatyka",
    title: "Cztery sposoby na stronę bierną",
    objectives: [
      "utworzyć stronę bierną z essere i venire",
      "rozumieć andare + imiesłów jako konieczność",
      "wybrać si passivante w mowie"
    ],
    theory: [
      {
        h: "Essere: forma podstawowa",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Działa we wszystkich czasach. Imiesłów zgadza się z podmiotem. Wykonawcę wprowadza <em>da</em>."
      },
      {
        h: "Venire: tylko czasy proste, akcent na proces",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> Nie da się powiedzieć „è venuta approvata” — <em>venire</em> nie tworzy strony biernej w czasach złożonych. Podkreśla powtarzalność i przebieg."
      },
      {
        h: "Andare: bierność z obowiązkiem",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> To nie zwykła bierność: zdanie znaczy „formularz <b>trzeba</b> wypełnić”. Bardzo częste w instrukcjach i języku urzędowym. Mylenie tego z <em>essere</em> zmienia sens."
      },
      {
        h: "Si passivante: wersja mówiona",
        p: "<em>Qui <b>si vendono</b> panini.</em> Najczęstsza w rozmowie, bo lżejsza. Czasownik zgadza się z rzeczą, nie z domyślnym wykonawcą."
      }
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
        { tr: "Projekt został zatwierdzony w zeszłym tygodniu." },
        { tr: "Wnioski są rozpatrywane w ciągu trzydziestu dni." },
        { tr: "Formularz trzeba podpisać na każdej stronie." },
        { tr: "W tym biurze mówi się trzema językami." },
        { tr: "Spotkanie zostało przełożone przez dyrektora." },
        { tr: "Tych błędów trzeba unikać." }
      ]
    },
    vocab: [
      "zatwierdzać",
      "oceniać, rozpatrywać",
      "odrzucać",
      "przekładać",
      "wypełniać",
      "załączać",
      "unikać",
      "składać, dostarczać",
      "w ciągu trzydziestu dni",
      "termin",
      "wniosek, podanie",
      "wynik, rozstrzygnięcie"
    ],
    exercises: [
      {
        q: "„Il modulo va compilato” znaczy:",
        opts: ["Formularz idzie wypełniony", "Formularz trzeba wypełnić", "Formularz został wypełniony"]
      },
      {
        q: "Która forma NIE działa w czasach złożonych?",
        opts: ["essere + imiesłów", "venire + imiesłów", "si passivante"]
      },
      {
        q: "Zamień na stronę bierną: „Marco ha scritto la lettera.” → „La lettera ___ stata scritta da Marco.”"
      },
      { q: "Uzupełnij: „Le domande ___ valutate entro trenta giorni.” (venire)" },
      { q: "Uzupełnij: „Questi errori ___ evitati.” (trzeba ich unikać)" },
      {
        q: "Uzupełnij formy bierne.",
        tr: "Projekt został zatwierdzony wczoraj, ale formularz trzeba jeszcze podpisać."
      },
      { q: "„Spotkanie zostało przełożone przez dyrektora.”" },
      {
        q: "„Qui si vendono panini” — dlaczego „vendono”?",
        opts: [
          "To błąd",
          "Si passivante zgadza się z rzeczą w liczbie mnogiej",
          "Bo mowa o wielu sprzedawcach"
        ]
      },
      { tr: "Wnioski trzeba złożyć do piętnastego dnia miesiąca." },
      { tr: "Dokument został zatwierdzony i trzeba go podpisać do piątku." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Gramatyka",
    title: "Czas narracji",
    objectives: [
      "utworzyć passato remoto",
      "rozpoznać wzorzec 1-3-3 w czasownikach nieregularnych",
      "wiedzieć, kiedy i gdzie się go używa"
    ],
    theory: [
      {
        h: "Kiedy się go używa",
        p: "W narracji literackiej i historycznej (<em>Dante <b>nacque</b> nel 1265</em>), o zdarzeniach odległych i zamkniętych, bez związku z teraźniejszością. Na <b>południu Włoch</b> także w mowie potocznej, również o wczorajszych zdarzeniach; na północy prawie nie występuje."
      },
      {
        h: "Formy regularne",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (lub etti), esti, é (lub ette), emmo, este, erono (lub ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono."
      },
      {
        h: "Wzorzec 1-3-3",
        p: "Większość nieregularnych czasowników na <em>-ere</em> jest nieregularna <b>tylko w trzech osobach</b>: pierwszej pojedynczej, trzeciej pojedynczej i trzeciej mnogiej. Reszta jest regularna. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Znając formę <em>io</em>, wyprowadzisz dwie pozostałe."
      },
      {
        tip: "Do czytania literatury wystarczy <b>rozpoznawać</b> passato remoto. Aktywne tworzenie jest potrzebne przy pisaniu narracji i na egzaminach C1."
      }
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
        { tr: "Dante urodził się we Florencji w 1265." },
        { tr: "Włochy stały się republiką w 1946." },
        { tr: "Wyszedł z domu i nigdy nie wrócił." },
        { tr: "Wtedy właśnie wszystko zrozumiałem." },
        { tr: "Napisał powieść w dwa lata." },
        { tr: "Ledwie skończył, wyszedł.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "urodzić się",
      "umrzeć",
      "stać się",
      "napisać",
      "żyć",
      "zobaczyć",
      "dowiedzieć się",
      "zechcieć",
      "powieść",
      "wiek, stulecie",
      "epoka",
      "wydarzenie, historia"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Na czym polega wzorzec 1-3-3?",
        opts: [
          "Trzy czasowniki są nieregularne",
          "Nieregularne są tylko io, lui/lei i loro",
          "Wszystkie formy są nieregularne"
        ]
      },
      { q: "Passato remoto od „prendere”, forma loro: ___" },
      { q: "Passato remoto od „dire”, forma lui: ___" },
      {
        q: "Gdzie passato remoto występuje także w mowie potocznej?",
        opts: ["Na północy Włoch", "Na południu Włoch", "Nigdzie"]
      },
      { q: "Uzupełnij narrację.", tr: "Dante urodził się w 1265 i zmarł w 1321." },
      { q: "„Włochy stały się republiką w 1946 roku.”" },
      { tr: "Wyszedł z domu tamtego wieczoru i już nigdy nie wrócił." },
      { tr: "Wtedy właśnie zrozumiałem, że się pomyliłem." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Gramatyka",
    title: "Zdania skrócone",
    objectives: [
      "zastąpić zdanie podrzędne bezokolicznikiem lub gerundio",
      "użyć infinito passato i gerundio passato",
      "pisać zwięźlej"
    ],
    theory: [
      {
        h: "Po co skracać",
        p: "Zdanie implicite (bez własnego podmiotu i spójnika) skraca tekst i podnosi rejestr. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> To jedna z cech, które odróżniają tekst B2 od B1."
      },
      {
        h: "Warunek: ten sam podmiot",
        p: "Formy implicite wymagają, żeby oba zdania miały <b>ten sam podmiot</b>. <em>Essendo stanco, sono rimasto a casa</em> jest poprawne; przy różnych podmiotach trzeba zbudować pełne zdanie."
      },
      {
        h: "Repertuar",
        list: [
          "<em>dopo + infinito passato</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + bezokolicznik</em>: <em>prima di partire</em>",
          "<em>gerundio</em> (przyczyna, sposób, czas): <em>tornando a casa, ho incontrato…</em>",
          "<em>gerundio passato</em>: <em>avendo finito, sono uscito</em>",
          "<em>participio passato</em>: <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        trap: "<em>Dopo</em> zawsze łączy się z <b>infinito passato</b>: <em>dopo aver mangiato</em>, nigdy „dopo mangiare”. To błąd, który powtarza się bardzo często."
      }
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
        { tr: "Po przeczytaniu umowy podpisałem." },
        { tr: "Zanim odpowiedziałem, dobrze się zastanowiłem." },
        { tr: "Wracając do domu, spotkałem Giulię." },
        { tr: "Będąc spóźniony, wziąłem taksówkę." },
        { tr: "Widziawszy już film, zostałam w domu." },
        { tr: "Po skończeniu pracy wszyscy wyszliśmy." }
      ]
    },
    vocab: [
      "po zrobieniu czegoś",
      "przed zrobieniem",
      "będąc",
      "mając, zrobiwszy",
      "mimo że",
      "gdy już",
      "zastanawiać się",
      "kończyć, wnioskować",
      "zwięzły",
      "rejestr pisany",
      "płynny",
      "obciążać (styl)"
    ],
    exercises: [
      {
        q: "Które jest poprawne?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Skróć: „Dopo che ho letto il contratto” → „Dopo ___ letto il contratto”" },
      { q: "Skróć: „Mentre tornavo a casa” → „___ a casa”" },
      { q: "Skróć: „Poiché ero stanco” → „___ stanco”" },
      {
        q: "Warunek użycia formy skróconej to:",
        opts: ["ten sam czas", "ten sam podmiot w obu zdaniach", "brak przeczenia"]
      },
      {
        q: "Skróć zdania.",
        tr: "Po przeczytaniu umowy podpisałem. Zanim odpowiedziałem, zastanowiłem się."
      },
      { q: "„Wracając do domu, spotkałem Giulię.”" },
      { tr: "Po skończeniu pracy wszyscy wyszliśmy." },
      { tr: "Widziawszy już ten film, wolałem zostać w domu." },
      { tr: "Zanim podpiszę, chciałbym przeczytać umowę jeszcze raz." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 3",
    objectives: ["sprawdzić stronę bierną, passato remoto i zdania skrócone"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {
        q: "„Il modulo va compilato” znaczy:",
        opts: ["idzie wypełniony", "trzeba wypełnić", "został wypełniony"]
      },
      { q: "„La lettera ___ stata scritta da Marco.”" },
      { q: "„Le domande ___ valutate ogni mese.” (venire)" },
      {  },
      { q: "Passato remoto od „prendere”, io: ___" },
      { q: "Poprawne:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "„Mentre tornavo” → „___” (gerundio)" },
      { q: "„Wnioski trzeba złożyć do piątku.”" },
      { tr: "Projekt zatwierdzono w 1998 i zrealizowano w trzy lata." },
      { tr: "Po przeczytaniu umowy zdecydowałem, że nie podpiszę." }
    ]
  },
  "unit:b2-u04": {
    title: "Społeczeństwo i debata",
    grammarNote: "leksyka abstrakcyjna · argumentacja · rejestry"
  },
  "lesson:b2-u04-l1": {
    theme: "Społeczeństwo",
    title: "Gospodarka i rynek pracy",
    objectives: [
      "rozumieć podstawowe pojęcia ekonomiczne w prasie",
      "porozmawiać o rynku pracy",
      "użyć nominalizacji charakterystycznych dla tego rejestru"
    ],
    theory: [
      {
        h: "Słownictwo prasy ekonomicznej",
        p: "Teksty ekonomiczne opierają się na wąskim, powtarzalnym zestawie słów. Opanowanie stu z nich otwiera większość artykułów: <em>il PIL</em> (PKB), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>."
      },
      {
        h: "Charakterystyczne struktury",
        list: [
          "nominalizacja: <em>la crescita dei prezzi</em> zamiast „ceny rosną”",
          "strona bierna: <em>è stato approvato il decreto</em>",
          "wyrażenia zmiany: <em>in aumento, in calo, stabile, in ripresa</em>",
          "porównania: <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "Realia włoskiego rynku pracy",
        p: "<em>Il precariato</em> (praca niestabilna), <em>i contratti a termine</em>, <em>la fuga di cervelli</em> (drenaż mózgów), <em>i NEET</em> (młodzi poza pracą i edukacją), <em>il divario Nord-Sud</em> — to tematy, które wracają w każdej debacie publicznej."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (klin podatkowy) to jedno z najczęściej powtarzanych pojęć włoskiej debaty gospodarczej. Warto je znać, bo pada w każdej dyskusji o płacach."
      }
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
        { tr: "Inflacja spada w porównaniu z zeszłym rokiem." },
        { tr: "Bezrobocie młodych pozostaje problemem strukturalnym." },
        { tr: "Siła nabywcza gospodarstw domowych spadła." },
        { tr: "Wielu młodych absolwentów wyjeżdża z kraju." },
        { tr: "Różnica między Północą a Południem się pogłębiła." },
        { tr: "Dekret został przyjęty z poprawkami." }
      ]
    },
    vocab: [
      "PKB",
      "inflacja",
      "dług publiczny",
      "bezrobocie",
      "siła nabywcza",
      "praca niestabilna",
      "drenaż mózgów",
      "różnica, przepaść",
      "wzrost",
      "ożywienie",
      "dekret",
      "w ujęciu rocznym"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["PKB", "inflacja", "bezrobocie", "przepaść"] },
      { q: "„La fuga di cervelli” to:", opts: ["ucieczka więźniów", "drenaż mózgów", "utrata pamięci"] },
      { q: "Uzupełnij: „L'inflazione è in ___ rispetto allo scorso anno.” (spada)" },
      { q: "Uzupełnij nominalizację: „i prezzi crescono” → „la ___ dei prezzi”" },
      {
        q: "„Il precariato” oznacza:",
        opts: ["stabilne zatrudnienie", "pracę niestabilną, na krótkie umowy", "emeryturę"]
      },
      { q: "Uzupełnij.", tr: "Siła nabywcza spadła, a bezrobocie młodych pozostaje wysokie." },
      { q: "„Dekret został przyjęty z poprawkami.”" },
      { tr: "Różnica między Północą a Południem się pogłębiła." },
      { tr: "W ujęciu rocznym PKB wzrósł o zero przecinek siedem procent." },
      { tr: "Bezrobocie młodych pozostaje problemem strukturalnym." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Społeczeństwo",
    title: "Środowisko i technologia",
    objectives: [
      "porozmawiać o zmianach klimatu i technologii",
      "wyrazić obawę i nadzieję",
      "uporządkować argumenty za i przeciw"
    ],
    theory: [
      {
        h: "Dwa pola, jedna struktura debaty",
        p: "Zarówno klimat, jak i technologia dyskutuje się po włosku w schemacie <em>rischi / opportunità</em>. Warto opanować ten szkielet: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Obawa i nadzieja",
        list: [
          "obawa: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "nadzieja: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "ostrożność: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "Słownictwo, które wraca",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> zawsze pociąga congiuntivo: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em>"
      }
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
        { tr: "Obawiam się, że tempo transformacji jest za wolne." },
        { tr: "To, że jest trudno, nie znaczy, że jest niemożliwe." },
        { tr: "Istnieje ryzyko, że automatyzacja zmniejszy liczbę miejsc pracy." },
        { tr: "Odnawialne źródła pokrywają już znaczącą część." },
        { tr: "Trzeba zobaczyć, czy przepisy zostaną zastosowane." },
        { tr: "Jestem ostrożnym optymistą." }
      ]
    },
    vocab: [
      "transformacja ekologiczna",
      "odnawialne źródła energii",
      "ślad węglowy",
      "segregacja odpadów",
      "marnotrawstwo",
      "sztuczna inteligencja",
      "automatyzacja",
      "dezinformacja",
      "ryzyko",
      "szansa",
      "zrównoważony",
      "ostrożnie"
    ],
    exercises: [
      { q: "Uzupełnij: „Il fatto che ___ difficile non significa che sia impossibile.” (essere)" },
      { q: "Uzupełnij: „C'è il rischio che l'automazione ___ i posti di lavoro.” (ridurre)" },
      { q: "Połącz.", pairs: ["ślad węglowy", "segregacja odpadów", "marnotrawstwo", "zrównoważony"] },
      { q: "Po „il fatto che” stawiamy:", opts: ["indicativo", "congiuntivo", "bezokolicznik"] },
      {
        q: "„Bisogna vedere se le norme verranno applicate” wyraża:",
        opts: ["pewność", "ostrożne zastrzeżenie", "obawę"]
      },
      {
        q: "Uzupełnij wypowiedź.",
        tr: "Z jednej strony są wyraźne zagrożenia, z drugiej szanse są realne."
      },
      { q: "„Obawiam się, że tempo jest za wolne.”" },
      { tr: "Jestem ostrożnym optymistą co do przyszłości." },
      { tr: "To, że technologia się rozwija, samo w sobie nie rozwiązuje problemu." },
      { tr: "Istnieje ryzyko, że transformacja będzie zbyt wolna." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Komunikacja",
    title: "Obrona stanowiska",
    objectives: ["zbudować rozbudowaną argumentację", "odeprzeć kontrargument", "zamknąć debatę wnioskiem"],
    theory: [
      {
        h: "Trzy ruchy skutecznej argumentacji",
        list: [
          "<b>koncesja</b>: przyznaj punkt przeciwnikowi — <em>È vero che…</em>",
          "<b>zwrot</b>: podważ jego wagę — <em>Tuttavia / Va però considerato che…</em>",
          "<b>dowód</b>: poprzyj danymi lub przykładem — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Odpieranie kontrargumentu",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Wszystkie te formuły podważają argument, nie osobę."
      },
      {
        h: "Ton debaty po włosku",
        p: "Włoska debata bywa głośna i przerywana, ale rzadko przechodzi na osobiste. Formuła <em>con tutto il rispetto, non sono d'accordo</em> jest w pełni akceptowalnym otwarciem sporu."
      },
      {
        tip: "<em>Il punto è che…</em> („rzecz w tym, że…”) to najskuteczniejszy sposób sprowadzenia dyskusji do sedna, gdy rozmowa się rozjeżdża."
      }
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
        {
          tr: "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności w dłuższej perspektywie."
        },
        { tr: "Dane pokazują odwrotną tendencję." },
        { tr: "To dotyczy niektórych przypadków, nie jako reguła." },
        { tr: "Rzecz w tym, że nie mamy realnych alternatyw." },
        { tr: "Z całym szacunkiem, nie zgadzam się." },
        { tr: "W świetle powiedzianego proponuję zrewidować plan." }
      ]
    },
    vocab: [
      "bronić tezy",
      "uogólnienie",
      "wytrzymywać (o argumencie)",
      "obalać",
      "kontrargument",
      "zgadzać się co do",
      "w świetle",
      "w dłuższej perspektywie",
      "rzecz w tym, że",
      "z całym szacunkiem",
      "zrewidować",
      "tendencja"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["obalać", "wytrzymywać", "w świetle", "uogólnienie"] },
      {
        q: "Który ruch wzmacnia argumentację najbardziej?",
        opts: [
          "Powtórzenie tezy",
          "Przyznanie racji przeciwnikowi przed jej podważeniem",
          "Podniesienie głosu"
        ]
      },
      { q: "Uzupełnij: „Va però ___ che i costi si ammortizzano.” (uwzględnić)" },
      { q: "Uzupełnij: „Il ___ è che non abbiamo alternative.”" },
      {
        q: "Zbuduj argument.",
        tr: "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności długoterminowe."
      },
      { q: "„To wydaje mi się uogólnieniem.”" },
      {
        q: "Debata na spotkaniu.",
        setting: "Zebranie zespołu, spór o budżet.",
        lines: [
          { tr: "Ta inwestycja jest za droga, koniec kropka." },
          {
            tr: "Przyznaj częściowo rację i wprowadź kontrargument.",
            answerTr: "To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności długoterminowe."
          },
          { tr: "Ale wszyscy mówią, że takie projekty upadają." },
          {
            tr: "Podważ uogólnienie, powołując się na dane.",
            answerTr: "To wydaje mi się uogólnieniem: dane pokazują coś innego."
          }
        ]
      },
      { tr: "W świetle powiedzianego proponuję zrewidować plan." },
      { tr: "Z całym szacunkiem, nie sądzę, żeby ten argument się bronił." },
      { tr: "Rzecz w tym, że nie mamy realnych alternatyw." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Egzamin",
    title: "Test — powtórka jednostek 1-4",
    objectives: ["sprawdzić congiuntivo, okresy warunkowe, stronę bierną i argumentację"],
    theory: [{ p: "Dwanaście zadań z pierwszych czterech jednostek. Zaliczenie od 70%." }],
    exercises: [
      {  },
      { q: "„Pensavo che ___ più semplice.”" },
      { q: "„Speravo che mi ___ chiamato.”" },
      { q: "„Se ___ tempo, verrei.”", opts: ["ho", "avrei", "avessi"] },
      { q: "Typ 3.", tr: "Gdybym się uczył, zdałbym egzamin." },
      { q: "„Il modulo ___ compilato in stampatello.” (trzeba)" },
      { q: "Passato remoto od „fare”, lui: ___" },
      { q: "Poprawne:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "„Il fatto che ___ difficile non significa niente.” (essere)" },
      { q: "„Parla come se ___ un esperto.”" },
      { q: "„To prawda, że koszty są wysokie, trzeba jednak uwzględnić oszczędności.”" },
      { tr: "W świetle danych uważam, że warto zrewidować plan." }
    ]
  }
});
