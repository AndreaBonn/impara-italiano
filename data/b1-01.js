/* ============================================================
   B1 — jednostki 1–4
   Congiuntivo · Pronomi combinati · Burocrazia · Opinioni
   ============================================================ */
LINGUAI.addUnits("B1", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — PENSO CHE SIA
   ══════════════════════════════════════════════════════════════ */
{
  id: "b1-u01",
  icon: "🌀",
  titleIt: "Penso che sia",
  titlePl: "Tryb łączący",
  grammarPl: "congiuntivo presente i passato · wyrażenia opinii",
  lessons: [
  {
    id: "b1-u01-l1",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Congiuntivo presente",
    titlePl: "Formy i pierwsze użycia",
    objectivesPl: [
      "utworzyć congiuntivo presente dla wszystkich koniugacji",
      "znać najczęstsze formy nieregularne",
      "rozpoznać sytuacje, które go wymagają"
    ],
    theory: [
      { h: "Tryb, którego polski nie ma",
        p: "Congiuntivo nie opisuje faktów, tylko <b>stosunek mówiącego do treści</b>: opinię, wątpliwość, wolę, emocję. <em>So che <b>è</b> bravo</em> (wiem — fakt, indicativo) kontra <em>Penso che <b>sia</b> bravo</em> (myślę — opinia, congiuntivo). Polski oddaje tę różnicę słowem „chyba” albo trybem przypuszczającym, włoski osobnym trybem." },
      { h: "Odmiana",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ] },
      { trap: "Trzy pierwsze osoby są <b>identyczne</b>. Dlatego przy congiuntivo <b>nie pomija się zaimka</b>: <em>penso che <b>tu</b> abbia ragione</em>, inaczej nie wiadomo, o kim mowa. To jedyny kontekst, w którym zaimek osobowy jest praktycznie obowiązkowy." },
      { h: "Nieregularne, które musisz znać",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>." }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["osoba", "parlare", "prendere", "capire", "essere", "avere"],
        rows: [
          ["che io", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che tu", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che lui/lei", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che noi", "parliamo", "prendiamo", "capiamo", "siamo", "abbiamo"],
          ["che voi", "parliate", "prendiate", "capiate", "siate", "abbiate"],
          ["che loro", "parlino", "prendano", "capiscano", "siano", "abbiano"]
        ]
      },
      examples: [
        ["Penso che tu abbia ragione.", "Myślę, że masz rację."],
        ["Credo che sia troppo tardi.", "Sądzę, że jest za późno."],
        ["Non sono sicuro che venga.", "Nie jestem pewien, czy przyjdzie."],
        ["Spero che tutto vada bene.", "Mam nadzieję, że wszystko pójdzie dobrze."],
        ["Voglio che tu mi dica la verità.", "Chcę, żebyś powiedział mi prawdę."],
        ["So che è bravo.", "Wiem, że jest zdolny.", "pewność → indicativo"]
      ]
    },
    vocab: [
      { it: "penso che…", pl: "myślę, że…" },
      { it: "credo che…", pl: "sądzę, że…" },
      { it: "mi sembra che…", pl: "wydaje mi się, że…" },
      { it: "spero che…", pl: "mam nadzieję, że…" },
      { it: "voglio che…", pl: "chcę, żeby…" },
      { it: "temo che…", pl: "obawiam się, że…" },
      { it: "non sono sicuro che…", pl: "nie jestem pewien, czy…" },
      { it: "immagino che…", pl: "wyobrażam sobie, że…" },
      { it: "è possibile che…", pl: "możliwe, że…" },
      { it: "bisogna che…", pl: "trzeba, żeby…" },
      { it: "so che… (indicativo)", pl: "wiem, że…" },
      { it: "è vero che… (indicativo)", pl: "to prawda, że…" }
    ],
    exercises: [
      { t: "conj", verb: "essere", tense: "cong", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "avere", tense: "cong", persons: [0, 3, 4, 5] },
      { t: "conj", verb: "andare", tense: "cong", persons: [0, 2, 5] },
      { t: "mcq", q: "Dlaczego przy congiuntivo nie pomija się zaimka?",
        opts: ["Bo tak jest grzeczniej", "Bo trzy pierwsze osoby mają identyczną formę", "Bo wymaga tego szyk"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Penso che tu ___ ragione.” (avere)", a: ["abbia"] },
      { t: "fill", q: "Uzupełnij: „Credo che ___ troppo tardi.” (essere)", a: ["sia"] },
      { t: "mcq", q: "Które zdanie wymaga indicativo, nie congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"], a: 1,
        why: "Sapere wyraża pewność, więc idzie z indicativo." },
      { t: "cloze", q: "Wstaw formy congiuntivo.",
        text: "Spero che tutto {{1}} (andare) bene e che voi {{2}} (essere) contenti.",
        gaps: [["vada"], ["siate"]],
        pl: "Mam nadzieję, że wszystko pójdzie dobrze i że będziecie zadowoleni." },
      { t: "trans", dir: "pl-it", q: "„Chcę, żebyś powiedział mi prawdę.”",
        a: ["voglio che tu mi dica la verità"] },
      { t: "listen", it: "Credo che sia meglio rimandare la riunione.", pl: "Sądzę, że lepiej przełożyć spotkanie." },
      { t: "speak", it: "Penso che tu abbia ragione su questo punto.", pl: "Myślę, że masz rację w tej kwestii." }
    ]
  },
  {
    id: "b1-u01-l2",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Quando serve il congiuntivo",
    titlePl: "Wyzwalacze trybu łączącego",
    objectivesPl: [
      "rozpoznać wyrażenia wymagające congiuntivo",
      "wiedzieć, kiedy użyć di + bezokolicznik zamiast che",
      "unikać congiuntivo tam, gdzie go nie ma"
    ],
    theory: [
      { h: "Cztery rodziny wyzwalaczy",
        list: [
          "<b>opinia i przypuszczenie</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>wola i uczucie</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>bezosobowe</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>spójniki</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ] },
      { h: "Ten sam podmiot: znika che",
        p: "Gdy oba zdania mają ten sam podmiot, congiuntivo ustępuje konstrukcji <em>di</em> + bezokolicznik. <em>Penso <b>di</b> avere ragione</em> („myślę, że mam rację”), nie „penso che io abbia”. Zdanie z <em>che</em> byłoby gramatycznie możliwe, ale brzmi nienaturalnie." },
      { h: "Gdzie congiuntivo NIE występuje",
        p: "Po wyrażeniach pewności: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Uwaga na <em>perché</em>: w znaczeniu „bo” idzie z indicativo, w znaczeniu „aby” z congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>)." },
      { pl: "Polski oddaje część tych zdań trybem przypuszczającym („żebyś powiedział”), część zwykłym oznajmującym („myślę, że jest”). Dlatego intuicja z polskiego nie wystarcza — trzeba nauczyć się listy wyzwalaczy." }
    ],
    grammar: {
      title: "Congiuntivo czy nie",
      table: {
        head: ["wyrażenie", "tryb", "przykład"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "indicativo", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (ten sam podmiot)", "bezokolicznik", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "indicativo", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        ["Benché piova, andiamo lo stesso.", "Chociaż pada, i tak idziemy."],
        ["Nonostante sia stanco, continuo a lavorare.", "Mimo że jestem zmęczony, pracuję dalej."],
        ["Ti aiuto purché tu faccia la tua parte.", "Pomogę ci, pod warunkiem że zrobisz swoje."],
        ["Parti prima che arrivi il traffico.", "Wyjedź, zanim zrobi się korek."],
        ["Penso di partire domani.", "Myślę, że wyjadę jutro.", "ten sam podmiot → di + bezokolicznik"],
        ["Siccome è tardi, rimando a domani.", "Skoro jest późno, przekładam na jutro.", "indicativo"]
      ]
    },
    vocab: [
      { it: "benché / sebbene", pl: "chociaż" },
      { it: "nonostante", pl: "mimo że" },
      { it: "affinché / perché (aby)", pl: "aby" },
      { it: "purché", pl: "pod warunkiem że" },
      { it: "a meno che (non)", pl: "chyba że" },
      { it: "prima che", pl: "zanim" },
      { it: "senza che", pl: "bez tego, żeby" },
      { it: "come se", pl: "jak gdyby" },
      { it: "può darsi che", pl: "być może" },
      { it: "siccome", pl: "skoro, ponieważ" },
      { it: "è chiaro che", pl: "jasne jest, że" },
      { it: "ritenere", pl: "uważać, sądzić" }
    ],
    exercises: [
      { t: "mcq", q: "„Benché ___ tardi, esco.” (essere)",
        opts: ["è", "sia", "sarà"], a: 1 },
      { t: "mcq", q: "„Siccome ___ tardi, resto a casa.” (essere)",
        opts: ["è", "sia", "fosse"], a: 0,
        why: "Siccome wyraża przyczynę faktyczną → indicativo." },
      { t: "fill", q: "Uzupełnij: „Ti aiuto purché tu ___ la tua parte.” (fare)", a: ["faccia"] },
      { t: "fill", q: "Uzupełnij: „Spero ___ venire domani.” (ten sam podmiot)", a: ["di"] },
      { t: "multi", q: "Które wyrażenia wymagają congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"], a: [0, 2, 4] },
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Nonostante {{1}} (essere, lui) stanco, continua a lavorare. So che {{2}} (avere) molta pazienza.",
        gaps: [["sia"], ["ha"]],
        pl: "Mimo że jest zmęczony, pracuje dalej. Wiem, że ma dużo cierpliwości." },
      { t: "trans", dir: "pl-it", q: "„Chociaż pada, i tak wychodzimy.”",
        a: ["benché piova usciamo lo stesso", "nonostante piova usciamo lo stesso"] },
      { t: "mcq", q: "„Te lo dico perché tu capisca” — dlaczego congiuntivo?",
        opts: ["Bo perché zawsze go wymaga", "Bo perché znaczy tu „aby”, nie „bo”", "To błąd"], a: 1 },
      { t: "listen", it: "Può darsi che domani non ci sia nessuno in ufficio.", pl: "Być może jutro nikogo nie będzie w biurze." },
      { t: "speak", it: "Nonostante sia difficile, penso che valga la pena.", pl: "Mimo że to trudne, uważam, że warto." }
    ]
  },
  {
    id: "b1-u01-l3",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Congiuntivo passato",
    titlePl: "Uprzedniość w trybie łączącym",
    objectivesPl: [
      "utworzyć congiuntivo passato",
      "wybrać między presente a passato",
      "połączyć z opinią o przeszłości"
    ],
    theory: [
      { h: "Budowa",
        p: "Congiuntivo presente od <em>avere/essere</em> + imiesłów: <em>abbia fatto</em>, <em>sia andato</em>. Zasady wyboru posiłkowego i zgodności imiesłowu są dokładnie te same co w passato prossimo." },
      { h: "Kiedy presente, a kiedy passato",
        p: "Gdy zdanie nadrzędne jest w czasie teraźniejszym: <b>presente</b> dla równoczesności lub przyszłości (<em>penso che venga</em>), <b>passato</b> dla uprzedniości (<em>penso che sia venuto</em>)." },
      { h: "Bardzo częsty kontekst: komentarz do przeszłości",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> To zdania, które w rozmowie padają stale — nauka congiuntivo passato od razu przekłada się na płynność." },
      { tip: "W mowie potocznej Włosi coraz częściej zastępują congiuntivo indicativo (<em>penso che è vero</em>). Jest to szeroko krytykowane i w piśmie oraz w kontekście zawodowym brzmi źle. Ucz się formy poprawnej." }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["zdanie nadrzędne", "relacja", "tryb", "przykład"],
        rows: [
          ["presente", "równoczesność", "cong. presente", "Penso che stia bene."],
          ["presente", "przyszłość", "cong. presente", "Penso che venga domani."],
          ["presente", "uprzedniość", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "z essere", "zgodność", "Credo che sia partita."],
          ["—", "z avere", "bez zgodności", "Credo che abbia parlato."],
          ["—", "z zaimkiem", "zgodność", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        ["Mi dispiace che tu non sia potuto venire.", "Przykro mi, że nie mogłeś przyjść."],
        ["Non credo che l'abbiano fatto apposta.", "Nie sądzę, żeby zrobili to celowo."],
        ["È strano che non abbia risposto.", "Dziwne, że nie odpowiedział."],
        ["Sembra che siano già partiti.", "Wygląda na to, że już wyjechali."],
        ["Spero che vi siate divertiti.", "Mam nadzieję, że dobrze się bawiliście."],
        ["Temo che abbiamo sbagliato strada.", "Obawiam się, że pomyliliśmy drogę."]
      ]
    },
    vocab: [
      { it: "mi dispiace che", pl: "przykro mi, że" },
      { it: "è strano che", pl: "dziwne, że" },
      { it: "sembra che", pl: "wygląda na to, że" },
      { it: "pare che", pl: "zdaje się, że" },
      { it: "ho l'impressione che", pl: "mam wrażenie, że" },
      { it: "apposta", pl: "celowo" },
      { it: "per sbaglio", pl: "przez pomyłkę" },
      { it: "sbagliare strada", pl: "pomylić drogę" },
      { it: "accorgersi di", pl: "zorientować się" },
      { it: "rendersi conto", pl: "zdać sobie sprawę" },
      { it: "a quanto pare", pl: "najwyraźniej" },
      { it: "in effetti", pl: "faktycznie" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Penso che ___ già partito.” (essere, on)", a: ["sia"] },
      { t: "fill", q: "Uzupełnij: „Non credo che ___ capito.” (avere, oni)", a: ["abbiano"] },
      { t: "mcq", q: "„Penso che venga domani” a „Penso che sia venuto ieri” — na czym polega różnica?",
        opts: ["Żadna", "Pierwsze o przyszłości, drugie o uprzedniości", "Drugie jest błędne"], a: 1 },
      { t: "cloze", q: "Wstaw congiuntivo passato.",
        text: "Mi dispiace che tu non {{1}} (potere) venire e che {{2}} (perdere, tu) la festa.",
        gaps: [["sia potuto", "sia potuta"], ["abbia perso"]],
        pl: "Przykro mi, że nie mogłeś przyjść i że przegapiłeś imprezę." },
      { t: "trans", dir: "pl-it", q: "„Nie sądzę, żeby zrobili to celowo.”",
        a: ["non credo che l'abbiano fatto apposta"] },
      { t: "mcq", q: "„Credo che sia partita” — dlaczego „partita”, a nie „partito”?",
        opts: ["To błąd", "Bo essere wymaga zgodności imiesłowu z podmiotem", "Bo tak brzmi lepiej"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["a quanto pare", "najwyraźniej"], ["apposta", "celowo"], ["per sbaglio", "przez pomyłkę"], ["rendersi conto", "zdać sobie sprawę"]] },
      { t: "order", pl: "Wygląda na to, że już wyjechali.",
        tokens: ["Sembra", "che", "siano", "già", "partiti"], a: ["sembra che siano già partiti"] },
      { t: "listen", it: "È strano che non abbia ancora risposto al messaggio.", pl: "Dziwne, że jeszcze nie odpowiedział na wiadomość." },
      { t: "speak", it: "Spero che vi siate divertiti alla festa.", pl: "Mam nadzieję, że dobrze się bawiliście na imprezie." }
    ]
  },
  {
    id: "b1-u01-l4",
    cefr: "B1",
    themePl: "Komunikacja",
    titleIt: "Secondo me, invece",
    titlePl: "Wyrażanie i ważenie opinii",
    objectivesPl: [
      "wyrazić opinię w rozmowie",
      "zgodzić się częściowo i zaprzeczyć",
      "użyć congiuntivo w naturalnej dyskusji"
    ],
    theory: [
      { h: "Trzy poziomy mocy opinii",
        list: [
          "łagodnie: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutralnie: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "mocno: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (indicativo!)"
        ] },
      { h: "Nie zgadzać się bez konfliktu",
        p: "Włoska dyskusja toleruje sprzeciw, ale ceni formę. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Suche <em>no</em> zamyka rozmowę." },
      { h: "Sygnały dyskursywne",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. Nie wnoszą treści, ale bez nich wypowiedź brzmi jak czytana. <em>Anzi</em> jest szczególnie użyteczne: wprowadza wzmocnienie albo korektę własnych słów („co więcej”, „przeciwnie”)." },
      { tip: "<em>Dipende</em> to najbardziej włoska odpowiedź na trudne pytanie. Rozwinięcie: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>." }
    ],
    grammar: {
      title: "Język opinii",
      table: {
        head: ["funkcja", "zwrot", "tryb po che"],
        rows: [
          ["opinia", "Secondo me / A mio parere", "—"],
          ["opinia", "Penso / credo / ritengo che", "congiuntivo"],
          ["pewność", "Sono sicuro / è evidente che", "indicativo"],
          ["częściowa zgoda", "Da un lato… dall'altro…", "—"],
          ["sprzeciw", "Non sono d'accordo, perché…", "indicativo"],
          ["korekta", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        ["Secondo me il problema è un altro.", "Moim zdaniem problem jest inny."],
        ["Ho l'impressione che non ci capiamo.", "Mam wrażenie, że się nie rozumiemy."],
        ["Da un lato hai ragione, dall'altro esagerate.", "Z jednej strony masz rację, z drugiej przesadzacie."],
        ["Non sono del tutto d'accordo con questa lettura.", "Nie zgadzam się w pełni z tą interpretacją."],
        ["Anzi, direi proprio il contrario.", "Co więcej, powiedziałbym wręcz odwrotnie."],
        ["Dipende da cosa intendi per „efficace”.", "To zależy, co rozumiesz przez „skuteczny”."]
      ]
    },
    vocab: [
      { it: "secondo me", pl: "moim zdaniem" },
      { it: "a mio parere", pl: "w moim odczuciu" },
      { it: "ritengo che", pl: "uważam, że" },
      { it: "sono convinto che", pl: "jestem przekonany, że" },
      { it: "da un lato… dall'altro", pl: "z jednej strony… z drugiej" },
      { it: "non del tutto", pl: "nie do końca" },
      { it: "anzi", pl: "co więcej; przeciwnie" },
      { it: "appunto", pl: "właśnie" },
      { it: "insomma", pl: "krótko mówiąc" },
      { it: "dipende", pl: "to zależy" },
      { it: "esagerare", pl: "przesadzać" },
      { it: "vedere il punto", pl: "rozumieć czyjś punkt widzenia" }
    ],
    exercises: [
      { t: "mcq", q: "„Sono sicuro che ___ vero.” (essere)",
        opts: ["sia", "è", "fosse"], a: 1,
        why: "Pewność → indicativo." },
      { t: "fill", q: "Uzupełnij: „Ritengo che questa soluzione ___ migliore.” (essere)",
        a: ["sia"] },
      { t: "mcq", q: "Co znaczy „anzi”?",
        opts: ["zatem", "co więcej / przeciwnie", "wcześniej"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["appunto", "właśnie"], ["insomma", "krótko mówiąc"], ["dipende", "to zależy"], ["esagerare", "przesadzać"]] },
      { t: "trans", dir: "pl-it", q: "„Nie zgadzam się do końca z tą opinią.”",
        a: ["non sono del tutto d'accordo con questa opinione"] },
      { t: "cloze", q: "Uzupełnij wypowiedź.",
        text: "{{1}} me il problema è un altro. Ho l'impressione che non ci {{2}} (capire, noi).",
        gaps: [["secondo"], ["capiamo"]],
        pl: "Moim zdaniem problem jest inny. Mam wrażenie, że się nie rozumiemy." },
      { t: "dialogue", q: "Dyskusja o pracy zdalnej.",
        setting: "Kolacja u znajomych, temat schodzi na pracę.",
        lines: [
          { sp: "A", it: "Secondo me lo smart working ha rovinato il lavoro di squadra.", pl: "Moim zdaniem praca zdalna zrujnowała pracę zespołową." },
          { sp: "TY", pl: "Zgódź się częściowo i dodaj kontrargument.", choices: ["Da un lato hai ragione, dall'altro ha ridotto lo stress.", "No, sbagli.", "Sono sicuro che sia vero."], a: 0, plAnswer: "Z jednej strony masz rację, z drugiej zmniejszyła stres." },
          { sp: "A", it: "Sì, però i giovani imparano meno.", pl: "Tak, ale młodzi mniej się uczą." },
          { sp: "TY", pl: "Odpowiedz, że to zależy od organizacji firmy.", choices: ["Dipende da come l'azienda organizza il lavoro.", "Appunto, hai ragione.", "Anzi, non dipende."], a: 0, plAnswer: "To zależy od tego, jak firma organizuje pracę." }
        ] },
      { t: "order", pl: "Co więcej, powiedziałbym wręcz odwrotnie.",
        tokens: ["Anzi,", "direi", "proprio", "il", "contrario"], a: ["anzi direi proprio il contrario"] },
      { t: "listen", it: "Da un lato è vero, dall'altro mi sembra una semplificazione.", pl: "Z jednej strony to prawda, z drugiej wydaje mi się to uproszczeniem." },
      { t: "speak", it: "Secondo me dipende molto dal contesto.", pl: "Moim zdaniem dużo zależy od kontekstu." }
    ]
  }
  ],
  test: {
    id: "b1-u01-test",
    cefr: "B1", themePl: "Sprawdzian",
    titleIt: "Test — Congiuntivo", titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić congiuntivo presente i passato oraz wyzwalacze"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "cong", persons: [0, 3, 4, 5] },
      { t: "conj", verb: "fare", tense: "cong", persons: [0, 3, 5] },
      { t: "fill", q: "„Penso che tu ___ ragione.”", a: ["abbia"] },
      { t: "fill", q: "„Benché ___ tardi, esco.”", a: ["sia"] },
      { t: "mcq", q: "„Siccome ___ tardi, resto.”", opts: ["è", "sia", "fosse"], a: 0 },
      { t: "fill", q: "„Spero ___ venire domani.” (ten sam podmiot)", a: ["di"] },
      { t: "fill", q: "„Non credo che ___ capito.” (avere, oni)", a: ["abbiano"] },
      { t: "multi", q: "Które wymagają congiuntivo?",
        opts: ["è vero che", "può darsi che", "prima che", "so che"], a: [1, 2] },
      { t: "listen", it: "Mi sembra che non abbiano capito il problema.", pl: "Wydaje mi się, że nie zrozumieli problemu." },
      { t: "speak", it: "Credo che sia meglio parlarne domani.", pl: "Sądzę, że lepiej porozmawiać o tym jutro." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — PRONOMI COMBINATI
   ══════════════════════════════════════════════════════════════ */
{
  id: "b1-u02",
  icon: "🔗",
  titleIt: "Me lo dai?",
  titlePl: "Zaimki połączone",
  grammarPl: "me lo, glielo, ce ne · ci i ne w pełni",
  lessons: [
  {
    id: "b1-u02-l1",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Me lo, te la, ce ne",
    titlePl: "Łączenie dwóch zaimków",
    objectivesPl: [
      "połączyć zaimek dalszy z bliższym",
      "zapamiętać zmianę -i na -e",
      "użyć konstrukcji w rozmowie"
    ],
    theory: [
      { h: "Kolejność: najpierw dalszy",
        p: "Gdy w zdaniu spotykają się dwa zaimki, <b>dalszy stoi pierwszy</b>, a jego <em>-i</em> zmienia się w <em>-e</em>: <em>mi + lo → <b>me lo</b></em>. To odwrotność polskiego szyku („daj mi to” kontra <em>me lo dai</em>)." },
      { h: "Gli i le zlewają się w glie-",
        p: "Zarówno „jemu”, jak i „jej”, i „im” dają w połączeniu <strong>glie-</strong>, pisane <b>łącznie</b> z drugim zaimkiem: <em>glielo, gliela, glieli, gliele, gliene</em>. Jedna forma obsługuje trzy osoby, więc kontekst musi być jasny." },
      { h: "Przy bezokoliczniku i rozkaźniku doczepiają się razem",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. Cała para przykleja się do końca formy." },
      { trap: "W czasach złożonych imiesłów zgadza się z zaimkiem <b>bliższym</b>, także w parze: <em>Me l'ha data</em> (dała mi ją), <em>Gliele ho mandate</em> (wysłałem mu je)." }
    ],
    grammar: {
      title: "Tabela zaimków połączonych",
      table: {
        head: ["", "lo", "la", "li", "le", "ne"],
        rows: [
          ["mi", "me lo", "me la", "me li", "me le", "me ne"],
          ["ti", "te lo", "te la", "te li", "te le", "te ne"],
          ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"],
          ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
          ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]
        ]
      },
      examples: [
        ["Mi presti la macchina? — Sì, te la presto.", "Pożyczysz mi samochód? — Tak, pożyczę ci go."],
        ["Hai dato il libro a Marco? — Sì, gliel'ho dato.", "Dałeś książkę Marco? — Tak, dałem mu ją."],
        ["Ce lo spieghi di nuovo?", "Wytłumaczysz nam to jeszcze raz?"],
        ["Quante mail ti ha mandato? — Me ne ha mandate tre.", "Ile maili ci wysłał? — Wysłał mi trzy."],
        ["Puoi spiegarmelo?", "Możesz mi to wytłumaczyć?"],
        ["Dammelo, per favore.", "Daj mi to, proszę."]
      ]
    },
    vocab: [
      { it: "prestare", pl: "pożyczać komuś" },
      { it: "restituire", pl: "oddawać" },
      { it: "spiegare", pl: "tłumaczyć, wyjaśniać" },
      { it: "mandare", pl: "wysyłać" },
      { it: "portare", pl: "przynosić, zawozić" },
      { it: "regalare", pl: "dawać w prezencie" },
      { it: "consegnare", pl: "dostarczać, oddawać" },
      { it: "chiedere in prestito", pl: "pożyczać od kogoś" },
      { it: "di nuovo", pl: "jeszcze raz" },
      { it: "subito", pl: "od razu" },
      { it: "appena possibile", pl: "jak najszybciej" },
      { it: "fammi sapere", pl: "daj mi znać" }
    ],
    exercises: [
      { t: "mcq", q: "„Mi dai il libro?” → odpowiedź z zaimkami:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."], a: 1 },
      { t: "fill", q: "Uzupełnij: „Hai dato il libro a Marco? — Sì, ___ ho dato.”",
        a: ["gliel'", "glielo"] },
      { t: "fill", q: "Uzupełnij: „Ci spieghi la regola? — Sì, ___ spiego.”", a: ["ve la", "ce la"],
        why: "Odpowiadający mówi do was: ve la spiego." },
      { t: "mcq", q: "Jak zapisuje się połączenie „gli + lo”?",
        opts: ["gli lo", "glielo", "gli-lo"], a: 1 },
      { t: "cloze", q: "Zastąp rzeczowniki zaimkami.",
        text: "— Mi presti la macchina? — Sì, {{1}} presto volentieri. — E le chiavi? — {{2}} do subito.",
        gaps: [["te la"], ["te le"]],
        pl: "— Pożyczysz mi samochód? — Tak, chętnie ci go pożyczę. — A klucze? — Dam ci je od razu." },
      { t: "trans", dir: "pl-it", q: "„Możesz mi to wytłumaczyć?”",
        a: ["puoi spiegarmelo", "puoi spiegarmelo?", "me lo puoi spiegare"] },
      { t: "fill", q: "Uzupełnij końcówkę: „Me l'ha dat___.” (dała mi ją — la macchina)", a: ["a"] },
      { t: "order", pl: "Wyślę ci je jutro.",
        tokens: ["Te", "le", "mando", "domani"], a: ["te le mando domani"] },
      { t: "listen", it: "Gliel'ho spiegato tre volte, ma non l'ha capito.", pl: "Wytłumaczyłem mu to trzy razy, ale nie zrozumiał." },
      { t: "speak", it: "Me lo puoi spiegare di nuovo, per favore?", pl: "Możesz mi to wytłumaczyć jeszcze raz?" }
    ]
  },
  {
    id: "b1-u02-l2",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Ci e ne, tutti gli usi",
    titlePl: "Pełne ci i ne",
    objectivesPl: [
      "rozpoznać wszystkie wartości ci i ne",
      "użyć czasowników zrośniętych",
      "zrozumieć wyrażenia typu non ce la faccio"
    ],
    theory: [
      { h: "CI: cztery wartości",
        list: [
          "miejsce: <em>A Roma ci vado spesso.</em>",
          "<em>a + rzecz</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "czasowniki zrośnięte: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ] },
      { h: "NE: trzy wartości",
        list: [
          "część całości: <em>Ne voglio due.</em>",
          "<em>di + rzecz</em>: <em>Ne parliamo domani.</em>",
          "czasowniki zrośnięte: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ] },
      { h: "Czasowniki, których nie da się przetłumaczyć dosłownie",
        p: "<em>Ci vogliono due ore</em> („potrzeba dwóch godzin”), <em>Ci metto un'ora</em> („zajmuje mi godzinę”), <em>Non ce la faccio</em> („nie daję rady”), <em>Ci tengo</em> („zależy mi”), <em>Me ne vado</em> („idę sobie”), <em>Non me ne intendo</em> („nie znam się na tym”)." },
      { trap: "<em>Volerci</em> i <em>metterci</em> nie są synonimami. <em>Ci vogliono due ore</em> mówi o czasie obiektywnym; <em>ci metto due ore</em> o czasie, który zajmuje <b>mnie</b>." }
    ],
    grammar: {
      title: "Czasowniki z ci i ne",
      table: {
        head: ["czasownik", "znaczenie", "przykład"],
        rows: [
          ["volerci", "być potrzebnym", "Ci vuole pazienza."],
          ["metterci", "zajmować (komuś) czas", "Ci metto venti minuti."],
          ["farcela", "dać radę", "Non ce la faccio più."],
          ["tenerci", "zależeć komuś", "Ci tengo molto."],
          ["andarsene", "iść sobie", "Me ne vado adesso."],
          ["fregarsene", "mieć w nosie", "Se ne frega di tutto."],
          ["intendersene", "znać się na czymś", "Non me ne intendo."],
          ["entrarci", "mieć związek", "Che c'entra?"]
        ]
      },
      examples: [
        ["Ci vuole pazienza con la burocrazia italiana.", "Do włoskiej biurokracji trzeba cierpliwości."],
        ["Quanto ci metti da casa al lavoro?", "Ile ci zajmuje droga z domu do pracy?"],
        ["Non ce la faccio a finire per stasera.", "Nie dam rady skończyć na dziś wieczór."],
        ["Ci tengo che tu venga.", "Zależy mi, żebyś przyszedł.", "+ congiuntivo"],
        ["Me ne vado, è tardi.", "Idę już, jest późno."],
        ["Di vini non me ne intendo per niente.", "Na winach zupełnie się nie znam."]
      ]
    },
    vocab: [
      { it: "volerci", pl: "być potrzebnym" },
      { it: "metterci", pl: "zajmować czas" },
      { it: "farcela", pl: "dać radę" },
      { it: "tenerci a", pl: "zależeć komuś na" },
      { it: "andarsene", pl: "iść sobie" },
      { it: "fregarsene", pl: "mieć w nosie" },
      { it: "intendersene di", pl: "znać się na" },
      { it: "entrarci", pl: "mieć związek" },
      { it: "avercela con", pl: "mieć pretensje do" },
      { it: "la pazienza", pl: "cierpliwość" },
      { it: "l'impegno", pl: "wysiłek, zaangażowanie" },
      { it: "il tempo necessario", pl: "potrzebny czas" }
    ],
    exercises: [
      { t: "mcq", q: "„Ci vogliono due ore” znaczy:",
        opts: ["Chcemy dwie godziny", "Potrzeba dwóch godzin", "Zajmuje mi dwie godziny"], a: 1 },
      { t: "mcq", q: "„Ci metto due ore” znaczy:",
        opts: ["Potrzeba dwóch godzin ogólnie", "Zajmuje mi to dwie godziny", "Kładę to na dwie godziny"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Non ___ la faccio più.” (nie daję rady)", a: ["ce"] },
      { t: "fill", q: "Uzupełnij: „Me ___ vado, è tardi.”", a: ["ne"] },
      { t: "match", q: "Połącz.",
        pairs: [["tenerci", "zależeć komuś"], ["intendersene", "znać się na"], ["entrarci", "mieć związek"], ["fregarsene", "mieć w nosie"]] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Quanto {{1}} metti per arrivare? — {{2}} vogliono venti minuti in metro.",
        gaps: [["ci"], ["ci"]],
        pl: "Ile ci zajmuje dojazd? — Metrem potrzeba dwudziestu minut." },
      { t: "trans", dir: "pl-it", q: "„Na winach się nie znam.”",
        a: ["di vini non me ne intendo", "non me ne intendo di vini"] },
      { t: "mcq", q: "„Ci tengo che tu venga” — dlaczego congiuntivo?",
        opts: ["Bo tenerci wyraża wolę/uczucie", "To błąd", "Bo ci wymaga congiuntivo"], a: 0 },
      { t: "listen", it: "Ci vuole molta pazienza, ma alla fine ce la facciamo.", pl: "Trzeba dużo cierpliwości, ale w końcu damy radę." },
      { t: "speak", it: "Non ce la faccio a finire tutto oggi.", pl: "Nie dam rady skończyć wszystkiego dzisiaj." }
    ]
  },
  {
    id: "b1-u02-l3",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Il libro che ho letto",
    titlePl: "Zdania względne",
    objectivesPl: [
      "użyć che, cui i il quale",
      "połączyć dwa zdania w jedno",
      "wyrazić przynależność przez cui z rodzajnikiem"
    ],
    theory: [
      { h: "Che robi najwięcej pracy",
        p: "<strong>Che</strong> jest nieodmienne i zastępuje podmiot albo dopełnienie bliższe: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. Nie może stać po przyimku." },
      { h: "Cui po przyimku",
        p: "Kiedy potrzebny jest przyimek, <em>che</em> ustępuje miejsca <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>." },
      { h: "Cui z rodzajnikiem = przynależność",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> („chłopak, którego matka jest lekarką”). Rodzajnik zgadza się z rzeczą posiadaną, nie z posiadaczem — dokładnie jak przy zaimkach dzierżawczych." },
      { h: "Il quale — wariant formalny",
        p: "<em>il quale, la quale, i quali, le quali</em> zastępuje <em>che</em> i <em>cui</em> w rejestrze pisanym. Przydaje się, gdy trzeba usunąć dwuznaczność: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> jasno wskazuje na siostrę, nie na Marco." }
    ],
    grammar: {
      title: "Zaimki względne",
      table: {
        head: ["forma", "funkcja", "przykład"],
        rows: [
          ["che", "podmiot / dopełnienie bliższe", "Il film che ho visto."],
          ["a cui", "dopełnienie dalsze", "La persona a cui ho scritto."],
          ["in cui", "miejsce, czas", "L'anno in cui sono nato."],
          ["di cui", "o którym", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "przynależność", "L'autore il cui libro è famoso."],
          ["il quale", "wariant formalny", "Il collega, il quale lavora qui."],
          ["chi", "ten, kto", "Chi cerca trova."]
        ]
      },
      examples: [
        ["Il libro che sto leggendo è bellissimo.", "Książka, którą czytam, jest świetna."],
        ["La città in cui sono cresciuta è piccola.", "Miasto, w którym dorastałam, jest małe."],
        ["Il motivo per cui ti scrivo è semplice.", "Powód, dla którego piszę, jest prosty."],
        ["La collega la cui figlia studia a Roma.", "Koleżanka, której córka studiuje w Rzymie."],
        ["Chi dorme non piglia pesci.", "Kto śpi, ten nie łowi ryb.", "przysłowie"],
        ["Ecco quello di cui ti parlavo.", "Oto to, o czym ci mówiłem."]
      ]
    },
    vocab: [
      { it: "che", pl: "który (podmiot/dopełnienie)" },
      { it: "cui", pl: "którym (po przyimku)" },
      { it: "il quale", pl: "który (formalnie)" },
      { it: "chi", pl: "ten, kto" },
      { it: "il motivo", pl: "powód" },
      { it: "crescere", pl: "dorastać, rosnąć" },
      { it: "l'autore", pl: "autor" },
      { it: "quello di cui", pl: "to, o czym" },
      { it: "il periodo", pl: "okres" },
      { it: "l'epoca", pl: "epoka" },
      { it: "grazie al quale", pl: "dzięki któremu" },
      { it: "nel caso in cui", pl: "w przypadku gdy" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Il libro ___ ho letto è bellissimo.”", a: ["che"] },
      { t: "fill", q: "Uzupełnij: „La città in ___ vivo è piccola.”", a: ["cui"] },
      { t: "fill", q: "Uzupełnij: „La persona a ___ ho scritto non risponde.”", a: ["cui"] },
      { t: "mcq", q: "„Il ragazzo la cui madre è medico” — do czego odnosi się „la”?",
        opts: ["Do chłopaka", "Do matki (rzeczy posiadanej)", "Do nikogo"], a: 1 },
      { t: "mcq", q: "Które zdanie jest błędne?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."], a: 1,
        why: "Po przyimku nie może stać che." },
      { t: "cloze", q: "Uzupełnij zaimki względne.",
        text: "Il collega {{1}} lavora con me è la persona a {{2}} devo tutto.",
        gaps: [["che"], ["cui"]],
        pl: "Kolega, który ze mną pracuje, to osoba, której wszystko zawdzięczam." },
      { t: "trans", dir: "pl-it", q: "„Powód, dla którego piszę, jest prosty.”",
        a: ["il motivo per cui ti scrivo è semplice", "il motivo per cui scrivo è semplice"] },
      { t: "order", pl: "Oto to, o czym ci mówiłem.",
        tokens: ["Ecco", "quello", "di", "cui", "ti", "parlavo"],
        a: ["ecco quello di cui ti parlavo"] },
      { t: "listen", it: "L'anno in cui sono arrivata in Italia è stato il più difficile.", pl: "Rok, w którym przyjechałam do Włoch, był najtrudniejszy." },
      { t: "speak", it: "La città in cui sono cresciuta è molto piccola.", pl: "Miasto, w którym dorastałam, jest bardzo małe." }
    ]
  },
  {
    id: "b1-u02-l4",
    cefr: "B1",
    themePl: "Gramatyka",
    titleIt: "Qualcuno, nessuno, ogni",
    titlePl: "Zaimki i przymiotniki nieokreślone",
    objectivesPl: [
      "użyć qualche, alcuni, ogni, ciascuno",
      "odróżnić nessuno od niente",
      "zbudować zdanie z podwójnym przeczeniem"
    ],
    theory: [
      { h: "Qualche zawsze z liczbą pojedynczą",
        p: "<em><b>qualche</b> giorno</em> („kilka dni”) — mimo znaczenia mnogiego rzeczownik stoi w liczbie pojedynczej. Synonim <em>alcuni/alcune</em> działa odwrotnie: <em>alcuni giorni</em>. To pułapka, bo po polsku obie formy brzmią tak samo." },
      { h: "Ogni i ciascuno",
        p: "<em>Ogni</em> jest nieodmienne i zawsze z liczbą pojedynczą: <em>ogni giorno</em>. <em>Ciascuno</em> odmienia się jak rodzajnik nieokreślony i podkreśla jednostkowość: <em>ciascuno studente</em>." },
      { h: "Przeczenia",
        p: "<em>Nessuno</em> (nikt / żaden), <em>niente / nulla</em> (nic), <em>nemmeno / neanche</em> (nawet nie). Gdy stoją <b>po</b> czasowniku, wymagają <em>non</em>: <em>non c'è <b>nessuno</b></em>. Gdy stoją przed, <em>non</em> znika: <em><b>Nessuno</b> è venuto.</em>" },
      { tip: "<em>Qualcosa</em> łączy się z przymiotnikiem przez <em>di</em>: <em>qualcosa <b>di</b> bello</em>. Tak samo <em>niente di grave</em>, <em>qualcosa da mangiare</em> (z bezokolicznikiem przez <em>da</em>)." }
    ],
    grammar: {
      title: "Nieokreślone",
      table: {
        head: ["forma", "składnia", "przykład"],
        rows: [
          ["qualche", "+ l. pojedyncza", "qualche giorno fa"],
          ["alcuni / alcune", "+ l. mnoga", "alcuni amici"],
          ["ogni", "nieodmienne + l. poj.", "ogni settimana"],
          ["ciascuno", "odmienne, l. poj.", "ciascuna proposta"],
          ["qualcuno / nessuno", "o osobach", "Non c'è nessuno."],
          ["qualcosa / niente", "o rzeczach", "qualcosa di nuovo"]
        ]
      },
      examples: [
        ["Ci vediamo tra qualche giorno.", "Widzimy się za kilka dni."],
        ["Alcuni colleghi non sono d'accordo.", "Niektórzy koledzy się nie zgadzają."],
        ["Ogni volta è la stessa storia.", "Za każdym razem ta sama historia."],
        ["Non ho visto nessuno in ufficio.", "Nie widziałem nikogo w biurze."],
        ["Nessuno mi ha avvisato.", "Nikt mnie nie uprzedził.", "przed czasownikiem: bez non"],
        ["Vuoi qualcosa da bere?", "Chcesz coś do picia?"]
      ]
    },
    vocab: [
      { it: "qualche", pl: "kilka (+ l. poj.)" },
      { it: "alcuni / alcune", pl: "niektórzy, kilka" },
      { it: "ogni", pl: "każdy" },
      { it: "ciascuno", pl: "każdy z osobna" },
      { it: "qualcuno", pl: "ktoś" },
      { it: "nessuno", pl: "nikt, żaden" },
      { it: "qualcosa", pl: "coś" },
      { it: "niente / nulla", pl: "nic" },
      { it: "chiunque", pl: "ktokolwiek" },
      { it: "dovunque", pl: "gdziekolwiek" },
      { it: "nemmeno", pl: "nawet nie" },
      { it: "avvisare", pl: "uprzedzać" }
    ],
    exercises: [
      { t: "mcq", q: "Które połączenie jest poprawne?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"], a: 1,
        why: "Qualche zawsze z liczbą pojedynczą." },
      { t: "mcq", q: "A które?",
        opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Non c'è ___ in ufficio.” (nikogo)", a: ["nessuno"] },
      { t: "fill", q: "Uzupełnij: „___ mi ha avvisato.” (nikt) — na początku zdania", a: ["nessuno"] },
      { t: "fill", q: "Uzupełnij: „Vuoi qualcosa ___ bere?”", a: ["da"] },
      { t: "fill", q: "Uzupełnij: „Ho sentito qualcosa ___ strano.”", a: ["di"] },
      { t: "multi", q: "Które zdania są poprawne?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."], a: [0, 2] },
      { t: "cloze", q: "Uzupełnij.",
        text: "{{1}} volta che chiamo non risponde {{2}}.",
        gaps: [["ogni"], ["nessuno"]],
        pl: "Za każdym razem, kiedy dzwonię, nikt nie odbiera." },
      { t: "listen", it: "Alcuni colleghi non sono d'accordo, ma nessuno lo dice apertamente.", pl: "Niektórzy koledzy się nie zgadzają, ale nikt nie mówi tego otwarcie." },
      { t: "speak", it: "Ci vediamo tra qualche giorno, ti scrivo io.", pl: "Widzimy się za kilka dni, napiszę do ciebie." }
    ]
  }
  ],
  test: {
    id: "b1-u02-test",
    cefr: "B1", themePl: "Sprawdzian",
    titleIt: "Test — Pronomi", titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić zaimki połączone, ci/ne, zdania względne i nieokreślone"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Mi dai il libro?” →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."], a: 1 },
      { t: "fill", q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.”", a: ["gliel'", "glielo"] },
      { t: "fill", q: "„Non ___ la faccio più.”", a: ["ce"] },
      { t: "fill", q: "„Me ___ vado.”", a: ["ne"] },
      { t: "fill", q: "„La città in ___ vivo.”", a: ["cui"] },
      { t: "fill", q: "„Il libro ___ ho letto.”", a: ["che"] },
      { t: "mcq", q: "Poprawne:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"], a: 1 },
      { t: "fill", q: "„Vuoi qualcosa ___ mangiare?”", a: ["da"] },
      { t: "listen", it: "Gliel'ho spiegato, ma ci vuole tempo per capirlo.", pl: "Wytłumaczyłem mu to, ale zrozumienie wymaga czasu." },
      { t: "speak", it: "Te lo mando appena posso, non ce la faccio adesso.", pl: "Wyślę ci to, jak tylko będę mógł, teraz nie dam rady." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — BUROCRAZIA ITALIANA
   ══════════════════════════════════════════════════════════════ */
{
  id: "b1-u03",
  icon: "🗂️",
  titleIt: "Burocrazia italiana",
  titlePl: "Włoska biurokracja",
  grammarPl: "język urzędowy · dokumenty · formalne prośby",
  lessons: [
  {
    id: "b1-u03-l1",
    cefr: "B1",
    themePl: "Życie we Włoszech",
    titleIt: "Codice fiscale e residenza",
    titlePl: "Podstawowe dokumenty",
    objectivesPl: [
      "zrozumieć, po co są codice fiscale i residenza",
      "poprosić o wydanie dokumentu",
      "wypełnić prosty formularz"
    ],
    theory: [
      { h: "Codice fiscale otwiera wszystko",
        p: "<strong>Il codice fiscale</strong> to szesnastoznakowy kod tożsamości podatkowej, generowany z imienia, nazwiska, daty i miejsca urodzenia. Bez niego nie założysz konta, nie podpiszesz umowy najmu, nie kupisz karty SIM ani nie zapiszesz się do lekarza. Wydaje go <em>Agenzia delle Entrate</em>, natychmiast i bezpłatnie." },
      { h: "Residenza to nie adres",
        p: "<strong>La residenza</strong> to formalne zameldowanie w gminie (<em>comune</em>). Od niej zależy dostęp do lekarza rodzinnego, prawa jazdy, zasiłków i wielu zniżek. Po zgłoszeniu przychodzi <em>il vigile</em> (strażnik miejski), żeby sprawdzić, czy naprawdę tam mieszkasz." },
      { h: "Trzy słowa, które usłyszysz w każdym urzędzie",
        list: [
          "<em>la marca da bollo</em> — znaczek skarbowy, kupowany w kiosku (<em>tabaccheria</em>), naklejany na podanie",
          "<em>l'autocertificazione</em> — oświadczenie własne zamiast zaświadczenia; ma moc prawną",
          "<em>l'appuntamento</em> — bez umówionej wizyty online w wielu urzędach nie wejdziesz"
        ] },
      { tip: "<em>La tabaccheria</em> to nie tylko sklep z papierosami: kupisz tam znaczki skarbowe, bilety komunikacji, doładowania i opłacisz część rachunków." }
    ],
    grammar: {
      title: "Język urzędowy",
      table: {
        head: ["formuła", "znaczenie", "gdzie"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "niżej podpisany/a", "podania"],
          ["Si prega di…", "uprasza się o…", "instrukcje"],
          ["Ai sensi dell'art. …", "zgodnie z art. …", "przepisy"],
          ["In allegato", "w załączniku", "wnioski"],
          ["Entro e non oltre", "nie później niż", "terminy"],
          ["Rilasciare / rilascio", "wydać / wydanie", "dokumenty"]
        ]
      },
      examples: [
        ["Vorrei richiedere il codice fiscale.", "Chciałbym wystąpić o codice fiscale."],
        ["Devo prendere la residenza in questo comune.", "Muszę zameldować się w tej gminie."],
        ["Serve una marca da bollo da sedici euro.", "Potrzebny jest znaczek skarbowy za szesnaście euro."],
        ["Ho già preso l'appuntamento online.", "Umówiłem się już przez internet."],
        ["Il documento viene rilasciato subito.", "Dokument jest wydawany od ręki."],
        ["Compili il modulo in stampatello.", "Proszę wypełnić formularz drukowanymi literami."]
      ]
    },
    vocab: [
      { it: "il codice fiscale", pl: "numer identyfikacji podatkowej" },
      { it: "la residenza", pl: "zameldowanie" },
      { it: "il comune", pl: "gmina, urząd miasta" },
      { it: "l'anagrafe", pl: "biuro ewidencji ludności" },
      { it: "il modulo", pl: "formularz" },
      { it: "la marca da bollo", pl: "znaczek skarbowy" },
      { it: "l'autocertificazione", pl: "oświadczenie własne" },
      { it: "rilasciare", pl: "wydawać (dokument)" },
      { it: "lo sportello", pl: "okienko" },
      { it: "in stampatello", pl: "drukowanymi literami" },
      { it: "la tessera sanitaria", pl: "karta ubezpieczenia zdrowotnego" },
      { it: "il permesso di soggiorno", pl: "karta pobytu" }
    ],
    culture: {
      titlePl: "Okiem Włocha: jak przeżyć urząd",
      textPl: "<p>Zasada pierwsza: <b>zawsze bierz więcej dokumentów, niż podano na stronie</b>. Wymogi bywają interpretowane różnie przez różne okienka.</p>" +
        "<p>Zasada druga: <b>autocertificazione jest twoim sprzymierzeńcem</b>. Prawo pozwala zastąpić wiele zaświadczeń oświadczeniem własnym, a urzędnik ma obowiązek je przyjąć. Warto o tym wiedzieć, bo nie zawsze się o tym mówi.</p>" +
        "<p>Zasada trzecia: <b>zapisz nazwisko urzędnika</b>, który cię obsługiwał. Przy kolejnej wizycie pozwala to odtworzyć historię sprawy.</p>"
    },
    exercises: [
      { t: "mcq", q: "Do czego służy codice fiscale?",
        opts: ["Tylko do podatków", "Do niemal wszystkich formalności: konto, umowa, lekarz", "To numer telefonu urzędu"], a: 1 },
      { t: "mcq", q: "Gdzie kupisz marca da bollo?",
        opts: ["W urzędzie", "W tabaccherii", "W banku"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Vorrei ___ il codice fiscale.” (wystąpić o)",
        a: ["richiedere"] },
      { t: "fill", q: "Uzupełnij: „Compili il modulo in ___.” (drukowanymi)", a: ["stampatello"] },
      { t: "match", q: "Połącz.",
        pairs: [["l'anagrafe", "ewidencja ludności"], ["lo sportello", "okienko"], ["rilasciare", "wydawać"], ["il modulo", "formularz"]] },
      { t: "mcq", q: "Co to „autocertificazione”?",
        opts: ["Zaświadczenie z urzędu", "Oświadczenie własne mające moc prawną", "Poświadczenie notarialne"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Muszę zameldować się w tej gminie.”",
        a: ["devo prendere la residenza in questo comune"] },
      { t: "cloze", q: "Uzupełnij prośbę w urzędzie.",
        text: "Buongiorno, vorrei {{1}} il codice fiscale. Ho già preso l'{{2}} online.",
        gaps: [["richiedere"], ["appuntamento"]],
        pl: "Dzień dobry, chciałbym wystąpić o codice fiscale. Umówiłem się już przez internet." },
      { t: "listen", it: "Serve una marca da bollo da sedici euro e una copia del documento.", pl: "Potrzebny jest znaczek skarbowy za szesnaście euro i kopia dokumentu." },
      { t: "speak", it: "Vorrei richiedere il codice fiscale, ho il passaporto.", pl: "Chciałbym wystąpić o codice fiscale, mam paszport." }
    ]
  },
  {
    id: "b1-u03-l2",
    cefr: "B1",
    themePl: "Życie we Włoszech",
    titleIt: "Banca e contratti",
    titlePl: "Bank i umowy",
    objectivesPl: [
      "otworzyć konto bankowe",
      "zrozumieć podstawowe pojęcia umowy",
      "zapytać o koszty i warunki"
    ],
    theory: [
      { h: "Konto i jego koszty",
        p: "<em>Il conto corrente</em> ma zwykle <em>il canone mensile</em> (opłatę miesięczną), której w Polsce często nie ma. Przelew to <strong>il bonifico</strong>, a numer konta to <strong>IBAN</strong>. <em>Il bancomat</em> oznacza jednocześnie bankomat i kartę debetową." },
      { h: "Umowa: słowa, które trzeba rozumieć",
        list: [
          "<em>le condizioni</em> — warunki; <em>la clausola</em> — klauzula",
          "<em>il recesso</em> — odstąpienie; <em>la disdetta</em> — wypowiedzenie",
          "<em>la scadenza</em> — termin; <em>il rinnovo automatico</em> — automatyczne przedłużenie",
          "<em>le spese di gestione</em> — koszty prowadzenia"
        ] },
      { h: "Pytania, które warto zadać",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. Automatyczne przedłużenie jest we włoskich umowach bardzo częste i wymaga wypowiedzenia z wyprzedzeniem." },
      { tip: "Przy podpisywaniu umowy urzędnik może poprosić o parafowanie każdej strony (<em>siglare</em>) i podwójny podpis pod klauzulami (<em>doppia firma</em>). To standard, nie sygnał, że coś jest nie tak." }
    ],
    grammar: {
      title: "Bank i umowa",
      table: {
        head: ["po włosku", "po polsku", "kontekst"],
        rows: [
          ["il conto corrente", "rachunek bieżący", "bank"],
          ["il canone mensile", "opłata miesięczna", "bank, telefon"],
          ["il bonifico", "przelew", "płatności"],
          ["la disdetta", "wypowiedzenie", "umowa"],
          ["il rinnovo automatico", "automatyczne przedłużenie", "umowa"],
          ["il vincolo", "zobowiązanie, blokada", "umowa"]
        ]
      },
      examples: [
        ["Vorrei aprire un conto corrente.", "Chciałbym otworzyć rachunek bieżący."],
        ["Qual è il canone mensile?", "Ile wynosi opłata miesięczna?"],
        ["Devo fare un bonifico all'estero.", "Muszę zrobić przelew zagraniczny."],
        ["C'è un vincolo di durata?", "Czy jest zobowiązanie czasowe?"],
        ["Come posso disdire il contratto?", "Jak mogę wypowiedzieć umowę?"],
        ["Il rinnovo è automatico salvo disdetta.", "Przedłużenie jest automatyczne, chyba że wypowiem."]
      ]
    },
    vocab: [
      { it: "il conto corrente", pl: "rachunek bieżący" },
      { it: "il bonifico", pl: "przelew" },
      { it: "l'IBAN", pl: "numer konta" },
      { it: "il bancomat", pl: "bankomat, karta debetowa" },
      { it: "il canone", pl: "opłata abonamentowa" },
      { it: "la commissione", pl: "prowizja" },
      { it: "il contratto", pl: "umowa" },
      { it: "la clausola", pl: "klauzula" },
      { it: "la disdetta", pl: "wypowiedzenie" },
      { it: "il preavviso", pl: "wypowiedzenie z wyprzedzeniem" },
      { it: "firmare", pl: "podpisać" },
      { it: "il vincolo", pl: "zobowiązanie" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["il bonifico", "przelew"], ["la disdetta", "wypowiedzenie"], ["il canone", "opłata abonamentowa"], ["la commissione", "prowizja"]] },
      { t: "mcq", q: "„Rinnovo automatico salvo disdetta” znaczy:",
        opts: ["Umowa kończy się automatycznie", "Umowa przedłuża się, jeśli jej nie wypowiesz", "Umowa nie może być przedłużona"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Vorrei aprire un ___ corrente.”", a: ["conto"] },
      { t: "fill", q: "Uzupełnij: „C'è un ___ di durata?” (zobowiązanie czasowe)", a: ["vincolo"] },
      { t: "trans", dir: "pl-it", q: "„Jak mogę wypowiedzieć umowę?”",
        a: ["come posso disdire il contratto", "come posso disdire il contratto?"] },
      { t: "dialogue", q: "W banku.",
        setting: "Okienko doradcy, umówiona wizyta.",
        lines: [
          { sp: "A", it: "Buongiorno, in cosa posso aiutarla?", pl: "Dzień dobry, w czym mogę pomóc?" },
          { sp: "TY", pl: "Powiedz, że chcesz otworzyć konto.", choices: ["Vorrei aprire un conto corrente.", "Vorrei un bonifico corrente.", "Vorrei disdire un conto."], a: 0, plAnswer: "Chciałbym otworzyć rachunek bieżący." },
          { sp: "A", it: "Certo. Ha il codice fiscale e un documento?", pl: "Oczywiście. Ma pan codice fiscale i dokument?" },
          { sp: "TY", pl: "Potwierdź i zapytaj o opłaty miesięczne.", choices: ["Sì. Qual è il canone mensile?", "Sì. Qual è la disdetta?", "No, ma ho l'IBAN."], a: 0, plAnswer: "Tak. Ile wynosi opłata miesięczna?" },
          { sp: "A", it: "Quattro euro al mese, gratis sotto i trent'anni.", pl: "Cztery euro miesięcznie, za darmo poniżej trzydziestki." }
        ] },
      { t: "cloze", q: "Uzupełnij pytania do doradcy.",
        text: "Quali sono le {{1}} sui bonifici? E il {{2}} è automatico?",
        gaps: [["commissioni"], ["rinnovo"]],
        pl: "Jakie są prowizje od przelewów? A przedłużenie jest automatyczne?" },
      { t: "order", pl: "Muszę zrobić przelew zagraniczny.",
        tokens: ["Devo", "fare", "un", "bonifico", "all'estero"],
        a: ["devo fare un bonifico all'estero"] },
      { t: "listen", it: "Il canone è di quattro euro al mese, con carta inclusa.", pl: "Opłata wynosi cztery euro miesięcznie, z kartą w cenie." },
      { t: "speak", it: "Vorrei sapere se c'è un vincolo di durata.", pl: "Chciałbym wiedzieć, czy jest zobowiązanie czasowe." }
    ]
  },
  {
    id: "b1-u03-l3",
    cefr: "B1",
    themePl: "Życie we Włoszech",
    titleIt: "Reclami e diritti",
    titlePl: "Reklamacje i prawa",
    objectivesPl: [
      "złożyć reklamację ustnie i pisemnie",
      "powołać się na prawo lub umowę",
      "eskalować sprawę uprzejmie, ale stanowczo"
    ],
    theory: [
      { h: "Struktura skutecznej reklamacji",
        p: "Włoska reklamacja działa najlepiej, gdy zawiera cztery elementy: <b>fakty z datami</b>, <b>odniesienie do umowy lub prawa</b>, <b>konkretne żądanie</b> i <b>termin</b>. Emocje osłabiają, konkret wzmacnia." },
      { h: "Formuły pisemne",
        list: [
          "<em>Con la presente segnalo che…</em> — niniejszym zgłaszam, że…",
          "<em>Come da contratto…</em> — zgodnie z umową…",
          "<em>Chiedo pertanto…</em> — wnoszę zatem o…",
          "<em>In mancanza di riscontro entro X giorni…</em> — w razie braku odpowiedzi w ciągu X dni…"
        ] },
      { h: "Narzędzia eskalacji",
        p: "<em>Raccomandata A/R</em> (list polecony za potwierdzeniem odbioru) i <strong>PEC</strong> (<em>posta elettronica certificata</em>, e-mail o mocy listu poleconego) to standardowe kroki. Organizacje konsumenckie: <em>Altroconsumo</em>, <em>Federconsumatori</em>." },
      { tip: "Zdanie <em>Mi riservo di adire le vie legali</em> („zastrzegam sobie drogę prawną”) jest silnym, ale całkowicie zwyczajowym zamknięciem pisma. Nie brzmi agresywnie po włosku." }
    ],
    grammar: {
      title: "Język reklamacji",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["zgłoszenie", "Con la presente segnalo che…", "Niniejszym zgłaszam, że…"],
          ["podstawa", "Come da contratto / ai sensi di legge", "Zgodnie z umową / z prawem"],
          ["żądanie", "Chiedo il rimborso / la sostituzione.", "Wnoszę o zwrot / wymianę."],
          ["termin", "entro quindici giorni", "w ciągu piętnastu dni"],
          ["eskalacja", "Mi riservo di adire le vie legali.", "Zastrzegam sobie drogę prawną."],
          ["ustnie", "Vorrei parlare con un responsabile.", "Chciałbym rozmawiać z kierownikiem."]
        ]
      },
      examples: [
        ["Il prodotto è arrivato danneggiato.", "Produkt dotarł uszkodzony."],
        ["Vorrei sporgere un reclamo.", "Chciałbym złożyć reklamację."],
        ["Ho diritto al rimborso entro quattordici giorni.", "Mam prawo do zwrotu w ciągu czternastu dni."],
        ["Come da contratto, il servizio doveva essere attivo dal primo.", "Zgodnie z umową usługa miała działać od pierwszego."],
        ["Vi invio la documentazione in allegato.", "Przesyłam dokumentację w załączniku."],
        ["Attendo un vostro riscontro.", "Czekam na państwa odpowiedź."]
      ]
    },
    vocab: [
      { it: "il reclamo", pl: "reklamacja" },
      { it: "sporgere reclamo", pl: "złożyć reklamację" },
      { it: "il rimborso", pl: "zwrot pieniędzy" },
      { it: "la sostituzione", pl: "wymiana" },
      { it: "danneggiato", pl: "uszkodzony" },
      { it: "difettoso", pl: "wadliwy" },
      { it: "la garanzia", pl: "gwarancja" },
      { it: "il responsabile", pl: "kierownik, osoba odpowiedzialna" },
      { it: "la raccomandata", pl: "list polecony" },
      { it: "il riscontro", pl: "odpowiedź" },
      { it: "avere diritto a", pl: "mieć prawo do" },
      { it: "pertanto", pl: "zatem" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["il rimborso", "zwrot pieniędzy"], ["difettoso", "wadliwy"], ["la garanzia", "gwarancja"], ["il riscontro", "odpowiedź"]] },
      { t: "fill", q: "Uzupełnij: „Vorrei ___ un reclamo.”", a: ["sporgere", "fare"] },
      { t: "fill", q: "Uzupełnij: „Ho ___ al rimborso.” (mam prawo do)", a: ["diritto"] },
      { t: "mcq", q: "Co to PEC?",
        opts: ["Rodzaj przelewu", "E-mail o mocy listu poleconego", "Numer identyfikacyjny"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Produkt dotarł uszkodzony, wnoszę o zwrot.”",
        a: ["il prodotto è arrivato danneggiato chiedo il rimborso", "il prodotto è arrivato danneggiato, chiedo il rimborso"] },
      { t: "cloze", q: "Uzupełnij pismo.",
        text: "Con la {{1}} segnalo che il servizio non è attivo. Come da {{2}}, chiedo il {{3}} entro quindici giorni.",
        gaps: [["presente"], ["contratto"], ["rimborso"]],
        pl: "Niniejszym zgłaszam, że usługa nie działa. Zgodnie z umową wnoszę o zwrot w ciągu piętnastu dni." },
      { t: "order", pl: "Chciałbym rozmawiać z kierownikiem.",
        tokens: ["Vorrei", "parlare", "con", "un", "responsabile"],
        a: ["vorrei parlare con un responsabile"] },
      { t: "mcq", q: "Który element najbardziej wzmacnia reklamację po włosku?",
        opts: ["Wyrażenie złości", "Daty, odniesienie do umowy i konkretne żądanie", "Powtórzenie prośby trzy razy"], a: 1 },
      { t: "listen", it: "Come da contratto, il servizio doveva essere attivo dal primo del mese.", pl: "Zgodnie z umową usługa miała działać od pierwszego dnia miesiąca." },
      { t: "speak", it: "Vorrei sporgere un reclamo: il prodotto è difettoso.", pl: "Chciałbym złożyć reklamację: produkt jest wadliwy." }
    ]
  },
  {
    id: "b1-u03-l4",
    cefr: "B1",
    themePl: "Życie we Włoszech",
    titleIt: "Lavoro e contratti",
    titlePl: "Praca i formy zatrudnienia",
    objectivesPl: [
      "rozumieć włoskie formy zatrudnienia",
      "porozmawiać o warunkach pracy",
      "zapytać o wynagrodzenie i urlop"
    ],
    theory: [
      { h: "Rodzaje umów",
        list: [
          "<b>tempo indeterminato</b> — na czas nieokreślony, najbardziej pożądana",
          "<b>tempo determinato</b> — na czas określony, z limitami przedłużeń",
          "<b>partita IVA</b> — samozatrudnienie; wystawiasz faktury, sam płacisz składki",
          "<b>apprendistato / tirocinio</b> — praktyka lub staż, często dla młodych"
        ] },
      { h: "Pensja: netto, lordo i trzynastka",
        p: "Włosi mówią o pensji <b>netto miesięcznie</b> i o <em>RAL</em> (<em>retribuzione annua lorda</em>, roczne brutto). Do tego dochodzi <strong>la tredicesima</strong> (trzynasta pensja w grudniu), a w części branż także <em>la quattordicesima</em> w lipcu." },
      { h: "Urlop i wolne",
        p: "<em>Le ferie</em> to urlop wypoczynkowy (zwykle 26 dni roboczych), <em>i permessi</em> to godziny wolnego, <em>la malattia</em> to zwolnienie chorobowe. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) to układ zbiorowy branży, który określa minimalne warunki." },
      { tip: "Pytanie <em>Qual è la RAL prevista?</em> jest na rozmowie o pracę całkowicie normalne i oczekiwane. Nie jest niegrzeczne." }
    ],
    grammar: {
      title: "Praca i wynagrodzenie",
      table: {
        head: ["po włosku", "po polsku", "uwaga"],
        rows: [
          ["tempo indeterminato", "umowa bezterminowa", "najstabilniejsza"],
          ["tempo determinato", "umowa na czas określony", "z datą końca"],
          ["partita IVA", "samozatrudnienie", "własne składki"],
          ["la tredicesima", "trzynasta pensja", "wypłacana w grudniu"],
          ["le ferie", "urlop wypoczynkowy", "dni robocze"],
          ["il CCNL", "układ zbiorowy branży", "minimalne warunki"]
        ]
      },
      examples: [
        ["Ho un contratto a tempo indeterminato.", "Mam umowę na czas nieokreślony."],
        ["Lavoro con partita IVA da tre anni.", "Od trzech lat pracuję na samozatrudnieniu."],
        ["Qual è la RAL prevista per questa posizione?", "Jakie roczne brutto przewidziane jest na to stanowisko?"],
        ["Quanti giorni di ferie sono previsti?", "Ile dni urlopu jest przewidzianych?"],
        ["Il periodo di prova è di tre mesi.", "Okres próbny wynosi trzy miesiące."],
        ["Chiedo un permesso per motivi personali.", "Proszę o wolne z przyczyn osobistych."]
      ]
    },
    vocab: [
      { it: "il contratto a tempo indeterminato", pl: "umowa na czas nieokreślony" },
      { it: "la partita IVA", pl: "samozatrudnienie" },
      { it: "lo stipendio netto", pl: "pensja netto" },
      { it: "la RAL", pl: "roczne wynagrodzenie brutto" },
      { it: "la tredicesima", pl: "trzynasta pensja" },
      { it: "le ferie", pl: "urlop" },
      { it: "il permesso", pl: "godziny wolnego" },
      { it: "il periodo di prova", pl: "okres próbny" },
      { it: "il colloquio", pl: "rozmowa kwalifikacyjna" },
      { it: "il curriculum", pl: "CV" },
      { it: "assumere", pl: "zatrudniać" },
      { it: "licenziarsi", pl: "zwolnić się" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["tempo indeterminato", "na czas nieokreślony"], ["la tredicesima", "trzynasta pensja"], ["le ferie", "urlop"], ["il periodo di prova", "okres próbny"]] },
      { t: "mcq", q: "Co to RAL?",
        opts: ["Pensja netto miesięczna", "Roczne wynagrodzenie brutto", "Rodzaj umowy"], a: 1 },
      { t: "mcq", q: "Kto płaci składki przy partita IVA?",
        opts: ["Pracodawca", "Sam pracujący", "Nikt"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Il ___ di prova è di tre mesi.”", a: ["periodo"] },
      { t: "trans", dir: "pl-it", q: "„Ile dni urlopu jest przewidzianych?”",
        a: ["quanti giorni di ferie sono previsti", "quanti giorni di ferie sono previsti?"] },
      { t: "cloze", q: "Uzupełnij pytania na rozmowie.",
        text: "Qual è la {{1}} prevista? E il {{2}} di prova quanto dura?",
        gaps: [["ral"], ["periodo"]],
        pl: "Jakie jest przewidziane roczne brutto? A ile trwa okres próbny?" },
      { t: "mcq", q: "„Licenziarsi” znaczy:",
        opts: ["zwolnić kogoś", "zwolnić się samemu", "dostać podwyżkę"], a: 1 },
      { t: "order", pl: "Mam umowę na czas nieokreślony od dwóch lat.",
        tokens: ["Ho", "un", "contratto", "a", "tempo", "indeterminato", "da", "due", "anni"],
        a: ["ho un contratto a tempo indeterminato da due anni"] },
      { t: "listen", it: "La tredicesima viene pagata a dicembre insieme allo stipendio.", pl: "Trzynasta pensja wypłacana jest w grudniu razem z pensją." },
      { t: "speak", it: "Vorrei sapere qual è la RAL prevista per questa posizione.", pl: "Chciałbym wiedzieć, jakie roczne brutto przewidziane jest na to stanowisko." }
    ]
  }
  ],
  test: {
    id: "b1-u03-test",
    cefr: "B1", themePl: "Sprawdzian",
    titleIt: "Test — Burocrazia", titlePl: "Sprawdzian jednostki 3",
    objectivesPl: ["sprawdzić słownictwo urzędowe, bankowe i pracownicze"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "Codice fiscale służy do:", opts: ["tylko podatków", "niemal wszystkich formalności", "podróży"], a: 1 },
      { t: "mcq", q: "Marca da bollo kupisz w:", opts: ["urzędzie", "tabaccherii", "banku"], a: 1 },
      { t: "fill", q: "„Compili il modulo in ___.”", a: ["stampatello"] },
      { t: "fill", q: "„Vorrei aprire un ___ corrente.”", a: ["conto"] },
      { t: "fill", q: "„Vorrei ___ un reclamo.”", a: ["sporgere", "fare"] },
      { t: "fill", q: "„Ho ___ al rimborso.”", a: ["diritto"] },
      { t: "mcq", q: "RAL to:", opts: ["netto miesięcznie", "roczne brutto", "trzynastka"], a: 1 },
      { t: "match", q: "Połącz.", pairs: [["la disdetta", "wypowiedzenie"], ["il bonifico", "przelew"], ["le ferie", "urlop"], ["l'anagrafe", "ewidencja"]] },
      { t: "listen", it: "Per la residenza serve un documento e il contratto di affitto.", pl: "Do zameldowania potrzebny jest dokument i umowa najmu." },
      { t: "speak", it: "Vorrei richiedere il codice fiscale e prendere la residenza.", pl: "Chciałbym wystąpić o codice fiscale i się zameldować." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 4 — OPINIONI E MEDIA
   ══════════════════════════════════════════════════════════════ */
{
  id: "b1-u04",
  icon: "📰",
  titleIt: "Opinioni e media",
  titlePl: "Media i argumentacja",
  grammarPl: "mowa zależna · konektory · język prasy",
  lessons: [
  {
    id: "b1-u04-l1",
    cefr: "B1",
    themePl: "Media",
    titleIt: "Ha detto che…",
    titlePl: "Mowa zależna",
    objectivesPl: [
      "przekształcić wypowiedź w mowę zależną",
      "przesunąć czasy poprawnie",
      "zmienić określenia czasu i miejsca"
    ],
    theory: [
      { h: "Przesunięcie czasów",
        p: "Gdy zdanie wprowadzające jest w czasie przeszłym, czasy w cytowanej wypowiedzi cofają się o jeden krok: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>." },
      { trap: "Najczęstszy błąd Polaków: przyszłość w przeszłości. „Powiedział, że przyjdzie” to <em>Ha detto che <b>sarebbe venuto</b></em>, a nie „che verrebbe”. Włoski używa tu condizionale <b>passato</b>." },
      { h: "Zmieniają się też okoliczniki",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Bez tego relacja brzmi niespójnie." },
      { h: "Rozkaz i pytanie",
        p: "Tryb rozkazujący przechodzi w <em>di</em> + bezokolicznik: <em>„Vieni!” → Mi ha detto di venire.</em> Pytanie zamknięte wprowadza <em>se</em>: <em>„Vieni?” → Mi ha chiesto se venivo.</em>" }
    ],
    grammar: {
      title: "Przekształcenia w mowie zależnej",
      table: {
        head: ["mowa niezależna", "mowa zależna", "przykład"],
        rows: [
          ["presente", "imperfetto", "„Lavoro” → Disse che lavorava."],
          ["passato prossimo", "trapassato", "„Ho finito” → Disse che aveva finito."],
          ["futuro", "condizionale passato", "„Verrò” → Disse che sarebbe venuto."],
          ["imperativo", "di + bezokolicznik", "„Vieni!” → Mi disse di venire."],
          ["pytanie tak/nie", "se + zdanie", "„Vieni?” → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "„Penso che sia” → Disse che pensava che fosse."]
        ]
      },
      examples: [
        ["Marco ha detto che era stanco.", "Marco powiedział, że jest zmęczony."],
        ["Mi ha detto che sarebbe arrivato il giorno dopo.", "Powiedział mi, że przyjedzie następnego dnia."],
        ["Ha chiesto se potevo aiutarlo.", "Zapytał, czy mogę mu pomóc."],
        ["Mi ha detto di non preoccuparmi.", "Powiedział mi, żebym się nie martwił."],
        ["Ha spiegato che aveva già provato.", "Wyjaśnił, że już próbował."],
        ["Ha aggiunto che quel giorno era impossibile.", "Dodał, że tamtego dnia było to niemożliwe."]
      ]
    },
    vocab: [
      { it: "dire che", pl: "powiedzieć, że" },
      { it: "chiedere se", pl: "zapytać, czy" },
      { it: "spiegare", pl: "wyjaśniać" },
      { it: "aggiungere", pl: "dodawać" },
      { it: "rispondere", pl: "odpowiadać" },
      { it: "sostenere", pl: "twierdzić" },
      { it: "affermare", pl: "stwierdzać" },
      { it: "negare", pl: "zaprzeczać" },
      { it: "il giorno prima / dopo", pl: "dzień wcześniej / później" },
      { it: "allora", pl: "wtedy" },
      { it: "in quel momento", pl: "w tamtej chwili" },
      { it: "secondo quanto detto", pl: "według tego, co powiedziano" }
    ],
    exercises: [
      { t: "mcq", q: "„Verrò domani” w mowie zależnej po czasie przeszłym:",
        opts: ["Ha detto che verrà domani.", "Ha detto che sarebbe venuto il giorno dopo.", "Ha detto che verrebbe domani."], a: 1 },
      { t: "fill", q: "„Lavoro molto” → „Ha detto che ___ molto.”", a: ["lavorava"] },
      { t: "fill", q: "„Ho finito” → „Ha detto che ___ finito.”", a: ["aveva"] },
      { t: "fill", q: "„Vieni!” → „Mi ha detto ___ venire.”", a: ["di"] },
      { t: "fill", q: "„Vieni?” → „Mi ha chiesto ___ venivo.”", a: ["se"] },
      { t: "cloze", q: "Przekształć.",
        text: "„Domani ti chiamo” → Mi ha detto che il giorno {{1}} mi {{2}} chiamato.",
        gaps: [["dopo"], ["avrebbe"]],
        pl: "„Jutro do ciebie zadzwonię” → Powiedział mi, że następnego dnia zadzwoni." },
      { t: "match", q: "Połącz zmiany okoliczników.",
        pairs: [["oggi", "quel giorno"], ["ieri", "il giorno prima"], ["domani", "il giorno dopo"], ["qui", "lì"]] },
      { t: "trans", dir: "pl-it", q: "„Powiedział mi, żebym się nie martwił.”",
        a: ["mi ha detto di non preoccuparmi"] },
      { t: "listen", it: "Ha spiegato che aveva già provato più volte senza successo.", pl: "Wyjaśnił, że próbował już wielokrotnie bez powodzenia." },
      { t: "speak", it: "Mi ha detto che sarebbe arrivato il giorno dopo.", pl: "Powiedział mi, że przyjedzie następnego dnia." }
    ]
  },
  {
    id: "b1-u04-l2",
    cefr: "B1",
    themePl: "Media",
    titleIt: "Leggere un articolo",
    titlePl: "Czytanie prasy",
    objectivesPl: [
      "rozumieć strukturę artykułu prasowego",
      "rozpoznać język niepotwierdzonych informacji",
      "streścić tekst własnymi słowami"
    ],
    theory: [
      { h: "Condizionale prasowy",
        p: "Włoskie media używają trybu warunkowego do informacji <b>niepotwierdzonych</b>: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> znaczy „miał podpisać, ale nie jest to potwierdzone”. To nie jest przypuszczenie dziennikarza, tylko sygnał, że źródło nie jest oficjalne. Nierozpoznanie tej formy prowadzi do zupełnie błędnego odczytania tekstu." },
      { h: "Struktura artykułu",
        p: "<em>Il titolo</em> (tytuł), <em>l'occhiello</em> (nadtytuł), <em>il sommario</em> (lid), <em>il corpo</em> (tekst), <em>la didascalia</em> (podpis pod zdjęciem). Włoskie tytuły często są eliptyczne i bezczasownikowe." },
      { h: "Nominalizacja",
        p: "Język prasy zamienia czasowniki w rzeczowniki: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Ta cecha zagęszcza tekst i utrudnia czytanie na początku; rozpoznanie mechanizmu bardzo pomaga." },
      { tip: "Główne dzienniki: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (ekonomia), <em>Il Post</em> (przystępny, dobry na start dla uczących się)." }
    ],
    grammar: {
      title: "Język prasy",
      table: {
        head: ["cecha", "przykład", "znaczenie"],
        rows: [
          ["condizionale", "Avrebbe dichiarato che…", "podobno oświadczył"],
          ["nominalizacja", "l'approvazione della riforma", "przyjęcie reformy"],
          ["strona bierna", "La legge è stata approvata.", "ustawa została przyjęta"],
          ["tytuł eliptyczny", "Governo verso la crisi", "rząd zmierza ku kryzysowi"],
          ["cytowanie", "secondo fonti vicine a…", "według źródeł bliskich…"],
          ["dane", "in calo / in aumento", "spada / rośnie"]
        ]
      },
      examples: [
        ["Secondo fonti interne, l'azienda avrebbe già deciso.", "Według źródeł wewnętrznych firma miała już zdecydować."],
        ["La riforma è stata approvata con 210 voti favorevoli.", "Reforma została przyjęta 210 głosami za."],
        ["I dati sull'occupazione sono in aumento.", "Dane o zatrudnieniu rosną."],
        ["L'articolo sostiene che il problema sia strutturale.", "Artykuł twierdzi, że problem jest strukturalny."],
        ["Il quotidiano ha smentito la notizia.", "Dziennik zdementował informację."],
        ["Riassumendo: il punto centrale è il finanziamento.", "Podsumowując: kluczową kwestią jest finansowanie."]
      ]
    },
    vocab: [
      { it: "il quotidiano", pl: "dziennik" },
      { it: "il settimanale", pl: "tygodnik" },
      { it: "la notizia", pl: "wiadomość" },
      { it: "la fonte", pl: "źródło" },
      { it: "smentire", pl: "dementować" },
      { it: "sostenere", pl: "twierdzić" },
      { it: "in aumento / in calo", pl: "rosnący / spadający" },
      { it: "l'inchiesta", pl: "śledztwo dziennikarskie" },
      { it: "l'editoriale", pl: "artykuł wstępny" },
      { it: "il titolo", pl: "tytuł" },
      { it: "riassumere", pl: "streszczać" },
      { it: "attendibile", pl: "wiarygodny" }
    ],
    exercises: [
      { t: "mcq", q: "„Il ministro avrebbe firmato l'accordo” znaczy:",
        opts: ["Minister podpisał umowę", "Podobno minister podpisał, brak potwierdzenia", "Minister podpisałby, gdyby mógł"], a: 1 },
      { t: "mcq", q: "„L'approvazione della legge” to nominalizacja od:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"], a: 0 },
      { t: "fill", q: "Uzupełnij: „I dati sono in ___.” (rosną)", a: ["aumento"] },
      { t: "fill", q: "Uzupełnij: „Il giornale ha ___ la notizia.” (zdementował)", a: ["smentito"] },
      { t: "match", q: "Połącz.",
        pairs: [["il quotidiano", "dziennik"], ["la fonte", "źródło"], ["l'inchiesta", "śledztwo dziennikarskie"], ["attendibile", "wiarygodny"]] },
      { t: "mcq", q: "„Secondo fonti vicine al governo” sygnalizuje:",
        opts: ["informację oficjalną", "informację nieoficjalną", "opinię redakcji"], a: 1 },
      { t: "cloze", q: "Uzupełnij zdanie prasowe.",
        text: "Secondo fonti interne, l'azienda {{1}} già deciso, ma il portavoce ha {{2}} la notizia.",
        gaps: [["avrebbe"], ["smentito"]],
        pl: "Według źródeł wewnętrznych firma miała już zdecydować, ale rzecznik zdementował informację." },
      { t: "trans", dir: "pl-it", q: "„Reforma została przyjęta w zeszłym tygodniu.”",
        a: ["la riforma è stata approvata la settimana scorsa"] },
      { t: "listen", it: "Secondo il quotidiano, il governo avrebbe già preparato la risposta.", pl: "Według dziennika rząd miał już przygotować odpowiedź." },
      { t: "speak", it: "L'articolo sostiene che il problema sia strutturale.", pl: "Artykuł twierdzi, że problem jest strukturalny." }
    ]
  },
  {
    id: "b1-u04-l3",
    cefr: "B1",
    themePl: "Komunikacja",
    titleIt: "Connettivi",
    titlePl: "Spójność wypowiedzi",
    objectivesPl: [
      "połączyć argumenty konektorami",
      "zbudować uporządkowaną wypowiedź",
      "unikać monotonii „e… e… e…”"
    ],
    theory: [
      { h: "Konektor mówi czytelnikowi, co dzieje się dalej",
        p: "Bez konektorów tekst jest listą zdań. <em>Inoltre</em> zapowiada dodanie, <em>tuttavia</em> zwrot, <em>quindi</em> wniosek, <em>infatti</em> uzasadnienie. Dobór konektora jest częścią argumentu, nie ozdobą." },
      { h: "Pary, które łatwo pomylić",
        list: [
          "<em>infatti</em> (bo rzeczywiście, potwierdza) kontra <em>invece</em> (natomiast, przeciwstawia)",
          "<em>anzi</em> (co więcej, wzmacnia lub koryguje) kontra <em>però</em> (ale)",
          "<em>quindi</em> (a więc, wniosek) kontra <em>allora</em> (wtedy, także sygnał rozmowy)",
          "<em>comunque</em> (i tak, w każdym razie) kontra <em>tuttavia</em> (jednakże, formalne)"
        ] },
      { h: "Szkielet krótkiej argumentacji",
        p: "<em>Anzitutto…</em> (przede wszystkim) → <em>Inoltre…</em> (ponadto) → <em>Tuttavia…</em> (jednakże) → <em>In conclusione…</em>. Ten szkielet wystarcza do wypowiedzi ustnej na egzaminie B1 i do krótkiego tekstu pisanego." },
      { tip: "W mowie potocznej najczęstsze są <em>allora</em>, <em>comunque</em>, <em>insomma</em>, <em>cioè</em>. W piśmie lepiej sprawdzają się <em>tuttavia</em>, <em>pertanto</em>, <em>in effetti</em>." }
    ],
    grammar: {
      title: "Konektory według funkcji",
      table: {
        head: ["funkcja", "konektory", "przykład"],
        rows: [
          ["dodanie", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["przeciwstawienie", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["przyczyna", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["skutek", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["wyjaśnienie", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["podsumowanie", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        ["Anzitutto il costo è troppo alto.", "Przede wszystkim koszt jest za wysoki."],
        ["Inoltre non abbiamo abbastanza tempo.", "Ponadto nie mamy dość czasu."],
        ["Tuttavia esiste un'alternativa.", "Jednakże istnieje alternatywa."],
        ["Il progetto è complesso, perciò servono più risorse.", "Projekt jest złożony, dlatego potrzeba więcej zasobów."],
        ["Non è caro, anzi è conveniente.", "Nie jest drogi, wręcz przeciwnie — opłacalny."],
        ["In conclusione, propongo di rimandare.", "Podsumowując, proponuję przełożyć."]
      ]
    },
    vocab: [
      { it: "anzitutto", pl: "przede wszystkim" },
      { it: "inoltre", pl: "ponadto" },
      { it: "tuttavia", pl: "jednakże" },
      { it: "invece", pl: "natomiast" },
      { it: "anzi", pl: "co więcej, przeciwnie" },
      { it: "quindi / perciò", pl: "zatem, dlatego" },
      { it: "pertanto", pl: "wobec tego" },
      { it: "cioè", pl: "to znaczy" },
      { it: "in effetti", pl: "faktycznie" },
      { it: "d'altra parte", pl: "z drugiej strony" },
      { it: "in conclusione", pl: "podsumowując" },
      { it: "comunque", pl: "w każdym razie" }
    ],
    exercises: [
      { t: "mcq", q: "„Non è caro, ___ è conveniente.” (wręcz przeciwnie)",
        opts: ["però", "anzi", "invece"], a: 1 },
      { t: "mcq", q: "„Il progetto è complesso, ___ servono più risorse.”",
        opts: ["perciò", "invece", "cioè"], a: 0 },
      { t: "fill", q: "Uzupełnij: „___ il costo è troppo alto.” (przede wszystkim)",
        a: ["anzitutto"] },
      { t: "fill", q: "Uzupełnij: „___, propongo di rimandare.” (podsumowując)",
        a: ["in conclusione"] },
      { t: "match", q: "Połącz konektor z funkcją.",
        pairs: [["inoltre", "dodanie"], ["tuttavia", "przeciwstawienie"], ["quindi", "skutek"], ["cioè", "wyjaśnienie"]] },
      { t: "cloze", q: "Zbuduj argumentację.",
        text: "{{1}} il prezzo è alto. {{2}} non abbiamo tempo. {{3}} propongo di rimandare.",
        gaps: [["anzitutto"], ["inoltre"], ["quindi", "pertanto", "perciò"]],
        pl: "Przede wszystkim cena jest wysoka. Ponadto nie mamy czasu. Zatem proponuję przełożyć." },
      { t: "mcq", q: "Który konektor pasuje do rejestru pisanego, a nie potocznego?",
        opts: ["comunque", "pertanto", "allora"], a: 1 },
      { t: "order", pl: "Jednakże istnieje alternatywa, którą warto rozważyć.",
        tokens: ["Tuttavia", "esiste", "un'alternativa", "che", "vale", "la", "pena", "considerare"],
        a: ["tuttavia esiste un'alternativa che vale la pena considerare"] },
      { t: "listen", it: "Anzitutto il costo, inoltre i tempi: in conclusione, non conviene.", pl: "Przede wszystkim koszt, ponadto terminy: podsumowując, to się nie opłaca." },
      { t: "speak", it: "Da un lato è vero, d'altra parte i dati dicono altro.", pl: "Z jednej strony to prawda, z drugiej dane mówią co innego." }
    ]
  },
  {
    id: "b1-u04-l4",
    cefr: "B1",
    themePl: "Komunikacja",
    titleIt: "Esporre un'opinione",
    titlePl: "Dłuższa wypowiedź",
    objectivesPl: [
      "zbudować dwuminutową wypowiedź na temat",
      "poprzeć zdanie przykładem i danymi",
      "domknąć wypowiedź wnioskiem"
    ],
    theory: [
      { h: "Struktura, która zawsze działa",
        list: [
          "<b>teza</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argument 1 + przykład</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>argument 2</b>: <em>Inoltre…</em>",
          "<b>kontrargument i odpowiedź</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>wniosek</b>: <em>In conclusione…</em>"
        ] },
      { h: "Uwzględnienie kontrargumentu wzmacnia",
        p: "Wypowiedź, która przyznaje rację drugiej stronie, zanim ją podważy, brzmi mocniej niż jednostronna. Formuła: <em>È vero che…, tuttavia…</em>, albo <em>Capisco chi dice che…, però…</em>" },
      { h: "Wypełniacze kupują czas",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. Nie są pustosłowiem — pozwalają utrzymać płynność, kiedy szukasz słowa. Egzaminatorzy oceniają je pozytywnie jako strategię komunikacyjną." },
      { tip: "Nie tłumacz z polskiego zdanie po zdaniu. Zbuduj prostsze zdania po włosku i połącz konektorami — wyjdzie płynniej niż wierne tłumaczenie skomplikowanej polskiej frazy." }
    ],
    grammar: {
      title: "Szkielet wypowiedzi",
      table: {
        head: ["etap", "formuła", "po polsku"],
        rows: [
          ["teza", "Ritengo che… / Secondo me…", "Uważam, że…"],
          ["argument", "Anzitutto… / Inoltre…", "Przede wszystkim… / Ponadto…"],
          ["przykład", "Per esempio… / Basti pensare a…", "Na przykład… / Wystarczy pomyśleć o…"],
          ["kontrargument", "C'è chi sostiene che…", "Niektórzy twierdzą, że…"],
          ["odpowiedź", "Tuttavia… / Va detto però che…", "Jednakże… / Trzeba jednak powiedzieć…"],
          ["wniosek", "In conclusione… / Per questo…", "Podsumowując… / Dlatego…"]
        ]
      },
      examples: [
        ["Ritengo che il lavoro da remoto sia utile ma non per tutti.", "Uważam, że praca zdalna jest przydatna, ale nie dla wszystkich."],
        ["Anzitutto riduce i tempi di spostamento.", "Przede wszystkim skraca czas dojazdów."],
        ["Basti pensare a chi vive in periferia.", "Wystarczy pomyśleć o mieszkających na przedmieściach."],
        ["C'è chi sostiene che riduca la collaborazione.", "Niektórzy twierdzą, że ogranicza współpracę."],
        ["Va detto però che dipende dall'organizzazione.", "Trzeba jednak powiedzieć, że zależy to od organizacji."],
        ["In conclusione, la soluzione ibrida mi sembra la più equilibrata.", "Podsumowując, rozwiązanie hybrydowe wydaje mi się najbardziej wyważone."]
      ]
    },
    vocab: [
      { it: "ritenere", pl: "uważać" },
      { it: "sostenere", pl: "twierdzić" },
      { it: "basti pensare a", pl: "wystarczy pomyśleć o" },
      { it: "va detto che", pl: "trzeba powiedzieć, że" },
      { it: "c'è chi dice che", pl: "niektórzy mówią, że" },
      { it: "in un certo senso", pl: "w pewnym sensie" },
      { it: "diciamo che", pl: "powiedzmy, że" },
      { it: "equilibrato", pl: "wyważony" },
      { it: "l'argomento", pl: "argument, temat" },
      { it: "il vantaggio / lo svantaggio", pl: "zaleta / wada" },
      { it: "a lungo termine", pl: "w dłuższej perspektywie" },
      { it: "vale la pena", pl: "warto" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „___ che il problema sia strutturale.” (uważam)",
        a: ["ritengo"] },
      { t: "fill", q: "Uzupełnij: „C'è ___ sostiene il contrario.” (niektórzy)", a: ["chi"] },
      { t: "mcq", q: "Po „ritengo che” stawiamy:",
        opts: ["indicativo", "congiuntivo", "bezokolicznik"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["basti pensare a", "wystarczy pomyśleć o"], ["va detto che", "trzeba powiedzieć"], ["a lungo termine", "w dłuższej perspektywie"], ["vale la pena", "warto"]] },
      { t: "cloze", q: "Uzupełnij wypowiedź.",
        text: "{{1}} che il lavoro ibrido {{2}} (essere) la soluzione migliore. {{3}} riduce i costi. Tuttavia dipende dal settore.",
        gaps: [["ritengo", "penso", "credo"], ["sia"], ["anzitutto", "inoltre"]],
        pl: "Uważam, że praca hybrydowa jest najlepszym rozwiązaniem. Przede wszystkim obniża koszty. Jednakże zależy to od branży." },
      { t: "trans", dir: "pl-it", q: "„Trzeba jednak powiedzieć, że zależy to od organizacji.”",
        a: ["va detto però che dipende dall'organizzazione"] },
      { t: "order", pl: "Podsumowując, rozwiązanie hybrydowe wydaje mi się najbardziej wyważone.",
        tokens: ["In", "conclusione,", "la", "soluzione", "ibrida", "mi", "sembra", "la", "più", "equilibrata"],
        a: ["in conclusione la soluzione ibrida mi sembra la più equilibrata"] },
      { t: "mcq", q: "Dlaczego warto uwzględnić kontrargument?",
        opts: ["Żeby wydłużyć wypowiedź", "Bo wypowiedź brzmi mocniej i dojrzalej", "Bo wymaga tego gramatyka"], a: 1 },
      { t: "listen", it: "C'è chi sostiene che riduca la collaborazione, ma i dati non lo confermano.", pl: "Niektórzy twierdzą, że ogranicza to współpracę, ale dane tego nie potwierdzają." },
      { t: "speak", it: "Ritengo che valga la pena provare, almeno per sei mesi.", pl: "Uważam, że warto spróbować, przynajmniej przez sześć miesięcy." }
    ]
  }
  ],
  test: {
    id: "b1-u04-test",
    cefr: "B1", themePl: "Egzamin",
    titleIt: "Esame finale B1", titlePl: "Egzamin końcowy poziomu B1",
    objectivesPl: ["sprawdzić congiuntivo, zaimki, mowę zależną i argumentację"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "essere", tense: "cong", persons: [0, 3, 4, 5] },
      { t: "fill", q: "„Penso che tu ___ ragione.”", a: ["abbia"] },
      { t: "fill", q: "„Benché ___ tardi, esco.”", a: ["sia"] },
      { t: "fill", q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.”", a: ["gliel'", "glielo"] },
      { t: "fill", q: "„Non ___ la faccio più.”", a: ["ce"] },
      { t: "fill", q: "„La città in ___ vivo.”", a: ["cui"] },
      { t: "mcq", q: "„Verrò domani” → mowa zależna:",
        opts: ["Ha detto che verrà domani.", "Ha detto che sarebbe venuto il giorno dopo.", "Ha detto che verrebbe."], a: 1 },
      { t: "mcq", q: "„Il ministro avrebbe firmato” znaczy:",
        opts: ["podpisał na pewno", "podobno podpisał", "podpisałby"], a: 1 },
      { t: "fill", q: "„___, propongo di rimandare.” (podsumowując)", a: ["in conclusione"] },
      { t: "trans", dir: "pl-it", q: "„Nie sądzę, żeby zrozumieli problem.”",
        a: ["non credo che abbiano capito il problema"] },
      { t: "listen", it: "Mi ha detto che sarebbe passato il giorno dopo, ma non è venuto.", pl: "Powiedział mi, że wpadnie następnego dnia, ale nie przyszedł." },
      { t: "speak", it: "Ritengo che sia una soluzione valida, anche se non perfetta.", pl: "Uważam, że to dobre rozwiązanie, choć nie idealne." }
    ]
  }
}

]);
