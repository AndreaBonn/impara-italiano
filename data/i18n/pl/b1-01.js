/* ============================================================
   Teksty w języku ucznia (pl) do data/core/b1-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:b1-u01": { title: "Tryb łączący", grammarNote: "congiuntivo presente i passato · wyrażenia opinii" },
  "lesson:b1-u01-l1": {
    theme: "Gramatyka",
    title: "Formy i pierwsze użycia",
    objectives: [
      "utworzyć congiuntivo presente dla wszystkich koniugacji",
      "znać najczęstsze formy nieregularne",
      "rozpoznać sytuacje, które go wymagają"
    ],
    theory: [
      {
        h: "Tryb, którego polski nie ma",
        p: "Congiuntivo nie opisuje faktów, tylko <b>stosunek mówiącego do treści</b>: opinię, wątpliwość, wolę, emocję. <em>So che <b>è</b> bravo</em> (wiem — fakt, indicativo) kontra <em>Penso che <b>sia</b> bravo</em> (myślę — opinia, congiuntivo). Polski oddaje tę różnicę słowem „chyba” albo trybem przypuszczającym, włoski osobnym trybem."
      },
      {
        h: "Odmiana",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "Trzy pierwsze osoby są <b>identyczne</b>. Dlatego przy congiuntivo <b>nie pomija się zaimka</b>: <em>penso che <b>tu</b> abbia ragione</em>, inaczej nie wiadomo, o kim mowa. To jedyny kontekst, w którym zaimek osobowy jest praktycznie obowiązkowy."
      },
      {
        h: "Nieregularne, które musisz znać",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
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
        { tr: "Myślę, że masz rację." },
        { tr: "Sądzę, że jest za późno." },
        { tr: "Nie jestem pewien, czy przyjdzie." },
        { tr: "Mam nadzieję, że wszystko pójdzie dobrze." },
        { tr: "Chcę, żebyś powiedział mi prawdę." },
        { tr: "Wiem, że jest zdolny.", note: "pewność → indicativo" }
      ]
    },
    vocab: [
      "myślę, że…",
      "sądzę, że…",
      "wydaje mi się, że…",
      "mam nadzieję, że…",
      "chcę, żeby…",
      "obawiam się, że…",
      "nie jestem pewien, czy…",
      "wyobrażam sobie, że…",
      "możliwe, że…",
      "trzeba, żeby…",
      "wiem, że…",
      "to prawda, że…"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Dlaczego przy congiuntivo nie pomija się zaimka?",
        opts: [
          "Bo tak jest grzeczniej",
          "Bo trzy pierwsze osoby mają identyczną formę",
          "Bo wymaga tego szyk"
        ]
      },
      { q: "Uzupełnij: „Penso che tu ___ ragione.” (avere)" },
      { q: "Uzupełnij: „Credo che ___ troppo tardi.” (essere)" },
      {
        q: "Które zdanie wymaga indicativo, nie congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere wyraża pewność, więc idzie z indicativo."
      },
      {
        q: "Wstaw formy congiuntivo.",
        tr: "Mam nadzieję, że wszystko pójdzie dobrze i że będziecie zadowoleni."
      },
      { q: "„Chcę, żebyś powiedział mi prawdę.”" },
      { tr: "Sądzę, że lepiej przełożyć spotkanie." },
      { tr: "Myślę, że masz rację w tej kwestii." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Gramatyka",
    title: "Wyzwalacze trybu łączącego",
    objectives: [
      "rozpoznać wyrażenia wymagające congiuntivo",
      "wiedzieć, kiedy użyć di + bezokolicznik zamiast che",
      "unikać congiuntivo tam, gdzie go nie ma"
    ],
    theory: [
      {
        h: "Cztery rodziny wyzwalaczy",
        list: [
          "<b>opinia i przypuszczenie</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>wola i uczucie</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>bezosobowe</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>spójniki</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        h: "Ten sam podmiot: znika che",
        p: "Gdy oba zdania mają ten sam podmiot, congiuntivo ustępuje konstrukcji <em>di</em> + bezokolicznik. <em>Penso <b>di</b> avere ragione</em> („myślę, że mam rację”), nie „penso che io abbia”. Zdanie z <em>che</em> byłoby gramatycznie możliwe, ale brzmi nienaturalnie."
      },
      {
        h: "Gdzie congiuntivo NIE występuje",
        p: "Po wyrażeniach pewności: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Uwaga na <em>perché</em>: w znaczeniu „bo” idzie z indicativo, w znaczeniu „aby” z congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>)."
      },
      {
        contrast: "Polski oddaje część tych zdań trybem przypuszczającym („żebyś powiedział”), część zwykłym oznajmującym („myślę, że jest”). Dlatego intuicja z polskiego nie wystarcza — trzeba nauczyć się listy wyzwalaczy."
      }
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
        { tr: "Chociaż pada, i tak idziemy." },
        { tr: "Mimo że jestem zmęczony, pracuję dalej." },
        { tr: "Pomogę ci, pod warunkiem że zrobisz swoje." },
        { tr: "Wyjedź, zanim zrobi się korek." },
        { tr: "Myślę, że wyjadę jutro.", note: "ten sam podmiot → di + bezokolicznik" },
        { tr: "Skoro jest późno, przekładam na jutro.", note: "indicativo" }
      ]
    },
    vocab: [
      "chociaż",
      "mimo że",
      "aby",
      "pod warunkiem że",
      "chyba że",
      "zanim",
      "bez tego, żeby",
      "jak gdyby",
      "być może",
      "skoro, ponieważ",
      "jasne jest, że",
      "uważać, sądzić"
    ],
    exercises: [
      { q: "„Benché ___ tardi, esco.” (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "„Siccome ___ tardi, resto a casa.” (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome wyraża przyczynę faktyczną → indicativo."
      },
      { q: "Uzupełnij: „Ti aiuto purché tu ___ la tua parte.” (fare)" },
      { q: "Uzupełnij: „Spero ___ venire domani.” (ten sam podmiot)" },
      {
        q: "Które wyrażenia wymagają congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Wstaw właściwe formy.",
        tr: "Mimo że jest zmęczony, pracuje dalej. Wiem, że ma dużo cierpliwości."
      },
      { q: "„Chociaż pada, i tak wychodzimy.”" },
      {
        q: "„Te lo dico perché tu capisca” — dlaczego congiuntivo?",
        opts: ["Bo perché zawsze go wymaga", "Bo perché znaczy tu „aby”, nie „bo”", "To błąd"]
      },
      { tr: "Być może jutro nikogo nie będzie w biurze." },
      { tr: "Mimo że to trudne, uważam, że warto." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Gramatyka",
    title: "Uprzedniość w trybie łączącym",
    objectives: [
      "utworzyć congiuntivo passato",
      "wybrać między presente a passato",
      "połączyć z opinią o przeszłości"
    ],
    theory: [
      {
        h: "Budowa",
        p: "Congiuntivo presente od <em>avere/essere</em> + imiesłów: <em>abbia fatto</em>, <em>sia andato</em>. Zasady wyboru posiłkowego i zgodności imiesłowu są dokładnie te same co w passato prossimo."
      },
      {
        h: "Kiedy presente, a kiedy passato",
        p: "Gdy zdanie nadrzędne jest w czasie teraźniejszym: <b>presente</b> dla równoczesności lub przyszłości (<em>penso che venga</em>), <b>passato</b> dla uprzedniości (<em>penso che sia venuto</em>)."
      },
      {
        h: "Bardzo częsty kontekst: komentarz do przeszłości",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> To zdania, które w rozmowie padają stale — nauka congiuntivo passato od razu przekłada się na płynność."
      },
      {
        tip: "W mowie potocznej Włosi coraz częściej zastępują congiuntivo indicativo (<em>penso che è vero</em>). Jest to szeroko krytykowane i w piśmie oraz w kontekście zawodowym brzmi źle. Ucz się formy poprawnej."
      }
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
        { tr: "Przykro mi, że nie mogłeś przyjść." },
        { tr: "Nie sądzę, żeby zrobili to celowo." },
        { tr: "Dziwne, że nie odpowiedział." },
        { tr: "Wygląda na to, że już wyjechali." },
        { tr: "Mam nadzieję, że dobrze się bawiliście." },
        { tr: "Obawiam się, że pomyliliśmy drogę." }
      ]
    },
    vocab: [
      "przykro mi, że",
      "dziwne, że",
      "wygląda na to, że",
      "zdaje się, że",
      "mam wrażenie, że",
      "celowo",
      "przez pomyłkę",
      "pomylić drogę",
      "zorientować się",
      "zdać sobie sprawę",
      "najwyraźniej",
      "faktycznie"
    ],
    exercises: [
      { q: "Uzupełnij: „Penso che ___ già partito.” (essere, on)" },
      { q: "Uzupełnij: „Non credo che ___ capito.” (avere, oni)" },
      {
        q: "„Penso che venga domani” a „Penso che sia venuto ieri” — na czym polega różnica?",
        opts: ["Żadna", "Pierwsze o przyszłości, drugie o uprzedniości", "Drugie jest błędne"]
      },
      { q: "Wstaw congiuntivo passato.", tr: "Przykro mi, że nie mogłeś przyjść i że przegapiłeś imprezę." },
      { q: "„Nie sądzę, żeby zrobili to celowo.”" },
      {
        q: "„Credo che sia partita” — dlaczego „partita”, a nie „partito”?",
        opts: ["To błąd", "Bo essere wymaga zgodności imiesłowu z podmiotem", "Bo tak brzmi lepiej"]
      },
      { q: "Połącz.", pairs: ["najwyraźniej", "celowo", "przez pomyłkę", "zdać sobie sprawę"] },
      { tr: "Wygląda na to, że już wyjechali." },
      { tr: "Dziwne, że jeszcze nie odpowiedział na wiadomość." },
      { tr: "Mam nadzieję, że dobrze się bawiliście na imprezie." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Komunikacja",
    title: "Wyrażanie i ważenie opinii",
    objectives: [
      "wyrazić opinię w rozmowie",
      "zgodzić się częściowo i zaprzeczyć",
      "użyć congiuntivo w naturalnej dyskusji"
    ],
    theory: [
      {
        h: "Trzy poziomy mocy opinii",
        list: [
          "łagodnie: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutralnie: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "mocno: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (indicativo!)"
        ]
      },
      {
        h: "Nie zgadzać się bez konfliktu",
        p: "Włoska dyskusja toleruje sprzeciw, ale ceni formę. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Suche <em>no</em> zamyka rozmowę."
      },
      {
        h: "Sygnały dyskursywne",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. Nie wnoszą treści, ale bez nich wypowiedź brzmi jak czytana. <em>Anzi</em> jest szczególnie użyteczne: wprowadza wzmocnienie albo korektę własnych słów („co więcej”, „przeciwnie”)."
      },
      {
        tip: "<em>Dipende</em> to najbardziej włoska odpowiedź na trudne pytanie. Rozwinięcie: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
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
        { tr: "Moim zdaniem problem jest inny." },
        { tr: "Mam wrażenie, że się nie rozumiemy." },
        { tr: "Z jednej strony masz rację, z drugiej przesadzacie." },
        { tr: "Nie zgadzam się w pełni z tą interpretacją." },
        { tr: "Co więcej, powiedziałbym wręcz odwrotnie." },
        { tr: "To zależy, co rozumiesz przez „skuteczny”." }
      ]
    },
    vocab: [
      "moim zdaniem",
      "w moim odczuciu",
      "uważam, że",
      "jestem przekonany, że",
      "z jednej strony… z drugiej",
      "nie do końca",
      "co więcej; przeciwnie",
      "właśnie",
      "krótko mówiąc",
      "to zależy",
      "przesadzać",
      "rozumieć czyjś punkt widzenia"
    ],
    exercises: [
      {
        q: "„Sono sicuro che ___ vero.” (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Pewność → indicativo."
      },
      { q: "Uzupełnij: „Ritengo che questa soluzione ___ migliore.” (essere)" },
      { q: "Co znaczy „anzi”?", opts: ["zatem", "co więcej / przeciwnie", "wcześniej"] },
      { q: "Połącz.", pairs: ["właśnie", "krótko mówiąc", "to zależy", "przesadzać"] },
      { q: "„Nie zgadzam się do końca z tą opinią.”" },
      {
        q: "Uzupełnij wypowiedź.",
        tr: "Moim zdaniem problem jest inny. Mam wrażenie, że się nie rozumiemy."
      },
      {
        q: "Dyskusja o pracy zdalnej.",
        setting: "Kolacja u znajomych, temat schodzi na pracę.",
        lines: [
          { tr: "Moim zdaniem praca zdalna zrujnowała pracę zespołową." },
          {
            tr: "Zgódź się częściowo i dodaj kontrargument.",
            answerTr: "Z jednej strony masz rację, z drugiej zmniejszyła stres."
          },
          { tr: "Tak, ale młodzi mniej się uczą." },
          {
            tr: "Odpowiedz, że to zależy od organizacji firmy.",
            answerTr: "To zależy od tego, jak firma organizuje pracę."
          }
        ]
      },
      { tr: "Co więcej, powiedziałbym wręcz odwrotnie." },
      { tr: "Z jednej strony to prawda, z drugiej wydaje mi się to uproszczeniem." },
      { tr: "Moim zdaniem dużo zależy od kontekstu." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić congiuntivo presente i passato oraz wyzwalacze"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      {  },
      { q: "„Penso che tu ___ ragione.”" },
      { q: "„Benché ___ tardi, esco.”" },
      { q: "„Siccome ___ tardi, resto.”", opts: ["è", "sia", "fosse"] },
      { q: "„Spero ___ venire domani.” (ten sam podmiot)" },
      { q: "„Non credo che ___ capito.” (avere, oni)" },
      { q: "Które wymagają congiuntivo?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "Wydaje mi się, że nie zrozumieli problemu." },
      { tr: "Sądzę, że lepiej porozmawiać o tym jutro." }
    ]
  },
  "unit:b1-u02": { title: "Zaimki połączone", grammarNote: "me lo, glielo, ce ne · ci i ne w pełni" },
  "lesson:b1-u02-l1": {
    theme: "Gramatyka",
    title: "Łączenie dwóch zaimków",
    objectives: [
      "połączyć zaimek dalszy z bliższym",
      "zapamiętać zmianę -i na -e",
      "użyć konstrukcji w rozmowie"
    ],
    theory: [
      {
        h: "Kolejność: najpierw dalszy",
        p: "Gdy w zdaniu spotykają się dwa zaimki, <b>dalszy stoi pierwszy</b>, a jego <em>-i</em> zmienia się w <em>-e</em>: <em>mi + lo → <b>me lo</b></em>. To odwrotność polskiego szyku („daj mi to” kontra <em>me lo dai</em>)."
      },
      {
        h: "Gli i le zlewają się w glie-",
        p: "Zarówno „jemu”, jak i „jej”, i „im” dają w połączeniu <strong>glie-</strong>, pisane <b>łącznie</b> z drugim zaimkiem: <em>glielo, gliela, glieli, gliele, gliene</em>. Jedna forma obsługuje trzy osoby, więc kontekst musi być jasny."
      },
      {
        h: "Przy bezokoliczniku i rozkaźniku doczepiają się razem",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. Cała para przykleja się do końca formy."
      },
      {
        trap: "W czasach złożonych imiesłów zgadza się z zaimkiem <b>bliższym</b>, także w parze: <em>Me l'ha data</em> (dała mi ją), <em>Gliele ho mandate</em> (wysłałem mu je)."
      }
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
        { tr: "Pożyczysz mi samochód? — Tak, pożyczę ci go." },
        { tr: "Dałeś książkę Marco? — Tak, dałem mu ją." },
        { tr: "Wytłumaczysz nam to jeszcze raz?" },
        { tr: "Ile maili ci wysłał? — Wysłał mi trzy." },
        { tr: "Możesz mi to wytłumaczyć?" },
        { tr: "Daj mi to, proszę." }
      ]
    },
    vocab: [
      "pożyczać komuś",
      "oddawać",
      "tłumaczyć, wyjaśniać",
      "wysyłać",
      "przynosić, zawozić",
      "dawać w prezencie",
      "dostarczać, oddawać",
      "pożyczać od kogoś",
      "jeszcze raz",
      "od razu",
      "jak najszybciej",
      "daj mi znać"
    ],
    exercises: [
      {
        q: "„Mi dai il libro?” → odpowiedź z zaimkami:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Uzupełnij: „Hai dato il libro a Marco? — Sì, ___ ho dato.”" },
      {
        q: "Uzupełnij: „Ci spieghi la regola? — Sì, ___ spiego.”",
        why: "Odpowiadający mówi do was: ve la spiego."
      },
      { q: "Jak zapisuje się połączenie „gli + lo”?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Zastąp rzeczowniki zaimkami.",
        tr: "— Pożyczysz mi samochód? — Tak, chętnie ci go pożyczę. — A klucze? — Dam ci je od razu."
      },
      { q: "„Możesz mi to wytłumaczyć?”" },
      { q: "Uzupełnij końcówkę: „Me l'ha dat___.” (dała mi ją — la macchina)" },
      { tr: "Wyślę ci je jutro." },
      { tr: "Wytłumaczyłem mu to trzy razy, ale nie zrozumiał." },
      { tr: "Możesz mi to wytłumaczyć jeszcze raz?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Gramatyka",
    title: "Pełne ci i ne",
    objectives: [
      "rozpoznać wszystkie wartości ci i ne",
      "użyć czasowników zrośniętych",
      "zrozumieć wyrażenia typu non ce la faccio"
    ],
    theory: [
      {
        h: "CI: cztery wartości",
        list: [
          "miejsce: <em>A Roma ci vado spesso.</em>",
          "<em>a + rzecz</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "czasowniki zrośnięte: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE: trzy wartości",
        list: [
          "część całości: <em>Ne voglio due.</em>",
          "<em>di + rzecz</em>: <em>Ne parliamo domani.</em>",
          "czasowniki zrośnięte: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        h: "Czasowniki, których nie da się przetłumaczyć dosłownie",
        p: "<em>Ci vogliono due ore</em> („potrzeba dwóch godzin”), <em>Ci metto un'ora</em> („zajmuje mi godzinę”), <em>Non ce la faccio</em> („nie daję rady”), <em>Ci tengo</em> („zależy mi”), <em>Me ne vado</em> („idę sobie”), <em>Non me ne intendo</em> („nie znam się na tym”)."
      },
      {
        trap: "<em>Volerci</em> i <em>metterci</em> nie są synonimami. <em>Ci vogliono due ore</em> mówi o czasie obiektywnym; <em>ci metto due ore</em> o czasie, który zajmuje <b>mnie</b>."
      }
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
        { tr: "Do włoskiej biurokracji trzeba cierpliwości." },
        { tr: "Ile ci zajmuje droga z domu do pracy?" },
        { tr: "Nie dam rady skończyć na dziś wieczór." },
        { tr: "Zależy mi, żebyś przyszedł.", note: "+ congiuntivo" },
        { tr: "Idę już, jest późno." },
        { tr: "Na winach zupełnie się nie znam." }
      ]
    },
    vocab: [
      "być potrzebnym",
      "zajmować czas",
      "dać radę",
      "zależeć komuś na",
      "iść sobie",
      "mieć w nosie",
      "znać się na",
      "mieć związek",
      "mieć pretensje do",
      "cierpliwość",
      "wysiłek, zaangażowanie",
      "potrzebny czas"
    ],
    exercises: [
      {
        q: "„Ci vogliono due ore” znaczy:",
        opts: ["Chcemy dwie godziny", "Potrzeba dwóch godzin", "Zajmuje mi dwie godziny"]
      },
      {
        q: "„Ci metto due ore” znaczy:",
        opts: ["Potrzeba dwóch godzin ogólnie", "Zajmuje mi to dwie godziny", "Kładę to na dwie godziny"]
      },
      { q: "Uzupełnij: „Non ___ la faccio più.” (nie daję rady)" },
      { q: "Uzupełnij: „Me ___ vado, è tardi.”" },
      { q: "Połącz.", pairs: ["zależeć komuś", "znać się na", "mieć związek", "mieć w nosie"] },
      { q: "Uzupełnij.", tr: "Ile ci zajmuje dojazd? — Metrem potrzeba dwudziestu minut." },
      { q: "„Na winach się nie znam.”" },
      {
        q: "„Ci tengo che tu venga” — dlaczego congiuntivo?",
        opts: ["Bo tenerci wyraża wolę/uczucie", "To błąd", "Bo ci wymaga congiuntivo"]
      },
      { tr: "Trzeba dużo cierpliwości, ale w końcu damy radę." },
      { tr: "Nie dam rady skończyć wszystkiego dzisiaj." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Gramatyka",
    title: "Zdania względne",
    objectives: [
      "użyć che, cui i il quale",
      "połączyć dwa zdania w jedno",
      "wyrazić przynależność przez cui z rodzajnikiem"
    ],
    theory: [
      {
        h: "Che robi najwięcej pracy",
        p: "<strong>Che</strong> jest nieodmienne i zastępuje podmiot albo dopełnienie bliższe: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. Nie może stać po przyimku."
      },
      {
        h: "Cui po przyimku",
        p: "Kiedy potrzebny jest przyimek, <em>che</em> ustępuje miejsca <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>."
      },
      {
        h: "Cui z rodzajnikiem = przynależność",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> („chłopak, którego matka jest lekarką”). Rodzajnik zgadza się z rzeczą posiadaną, nie z posiadaczem — dokładnie jak przy zaimkach dzierżawczych."
      },
      {
        h: "Il quale — wariant formalny",
        p: "<em>il quale, la quale, i quali, le quali</em> zastępuje <em>che</em> i <em>cui</em> w rejestrze pisanym. Przydaje się, gdy trzeba usunąć dwuznaczność: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> jasno wskazuje na siostrę, nie na Marco."
      }
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
        { tr: "Książka, którą czytam, jest świetna." },
        { tr: "Miasto, w którym dorastałam, jest małe." },
        { tr: "Powód, dla którego piszę, jest prosty." },
        { tr: "Koleżanka, której córka studiuje w Rzymie." },
        { tr: "Kto śpi, ten nie łowi ryb.", note: "przysłowie" },
        { tr: "Oto to, o czym ci mówiłem." }
      ]
    },
    vocab: [
      "który (podmiot/dopełnienie)",
      "którym (po przyimku)",
      "który (formalnie)",
      "ten, kto",
      "powód",
      "dorastać, rosnąć",
      "autor",
      "to, o czym",
      "okres",
      "epoka",
      "dzięki któremu",
      "w przypadku gdy"
    ],
    exercises: [
      { q: "Uzupełnij: „Il libro ___ ho letto è bellissimo.”" },
      { q: "Uzupełnij: „La città in ___ vivo è piccola.”" },
      { q: "Uzupełnij: „La persona a ___ ho scritto non risponde.”" },
      {
        q: "„Il ragazzo la cui madre è medico” — do czego odnosi się „la”?",
        opts: ["Do chłopaka", "Do matki (rzeczy posiadanej)", "Do nikogo"]
      },
      {
        q: "Które zdanie jest błędne?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Po przyimku nie może stać che."
      },
      {
        q: "Uzupełnij zaimki względne.",
        tr: "Kolega, który ze mną pracuje, to osoba, której wszystko zawdzięczam."
      },
      { q: "„Powód, dla którego piszę, jest prosty.”" },
      { tr: "Oto to, o czym ci mówiłem." },
      { tr: "Rok, w którym przyjechałam do Włoch, był najtrudniejszy." },
      { tr: "Miasto, w którym dorastałam, jest bardzo małe." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Gramatyka",
    title: "Zaimki i przymiotniki nieokreślone",
    objectives: [
      "użyć qualche, alcuni, ogni, ciascuno",
      "odróżnić nessuno od niente",
      "zbudować zdanie z podwójnym przeczeniem"
    ],
    theory: [
      {
        h: "Qualche zawsze z liczbą pojedynczą",
        p: "<em><b>qualche</b> giorno</em> („kilka dni”) — mimo znaczenia mnogiego rzeczownik stoi w liczbie pojedynczej. Synonim <em>alcuni/alcune</em> działa odwrotnie: <em>alcuni giorni</em>. To pułapka, bo po polsku obie formy brzmią tak samo."
      },
      {
        h: "Ogni i ciascuno",
        p: "<em>Ogni</em> jest nieodmienne i zawsze z liczbą pojedynczą: <em>ogni giorno</em>. <em>Ciascuno</em> odmienia się jak rodzajnik nieokreślony i podkreśla jednostkowość: <em>ciascuno studente</em>."
      },
      {
        h: "Przeczenia",
        p: "<em>Nessuno</em> (nikt / żaden), <em>niente / nulla</em> (nic), <em>nemmeno / neanche</em> (nawet nie). Gdy stoją <b>po</b> czasowniku, wymagają <em>non</em>: <em>non c'è <b>nessuno</b></em>. Gdy stoją przed, <em>non</em> znika: <em><b>Nessuno</b> è venuto.</em>"
      },
      {
        tip: "<em>Qualcosa</em> łączy się z przymiotnikiem przez <em>di</em>: <em>qualcosa <b>di</b> bello</em>. Tak samo <em>niente di grave</em>, <em>qualcosa da mangiare</em> (z bezokolicznikiem przez <em>da</em>)."
      }
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
        { tr: "Widzimy się za kilka dni." },
        { tr: "Niektórzy koledzy się nie zgadzają." },
        { tr: "Za każdym razem ta sama historia." },
        { tr: "Nie widziałem nikogo w biurze." },
        { tr: "Nikt mnie nie uprzedził.", note: "przed czasownikiem: bez non" },
        { tr: "Chcesz coś do picia?" }
      ]
    },
    vocab: [
      "kilka (+ l. poj.)",
      "niektórzy, kilka",
      "każdy",
      "każdy z osobna",
      "ktoś",
      "nikt, żaden",
      "coś",
      "nic",
      "ktokolwiek",
      "gdziekolwiek",
      "nawet nie",
      "uprzedzać"
    ],
    exercises: [
      {
        q: "Które połączenie jest poprawne?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche zawsze z liczbą pojedynczą."
      },
      { q: "A które?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Uzupełnij: „Non c'è ___ in ufficio.” (nikogo)" },
      { q: "Uzupełnij: „___ mi ha avvisato.” (nikt) — na początku zdania" },
      { q: "Uzupełnij: „Vuoi qualcosa ___ bere?”" },
      { q: "Uzupełnij: „Ho sentito qualcosa ___ strano.”" },
      {
        q: "Które zdania są poprawne?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Uzupełnij.", tr: "Za każdym razem, kiedy dzwonię, nikt nie odbiera." },
      { tr: "Niektórzy koledzy się nie zgadzają, ale nikt nie mówi tego otwarcie." },
      { tr: "Widzimy się za kilka dni, napiszę do ciebie." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić zaimki połączone, ci/ne, zdania względne i nieokreślone"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Mi dai il libro?” →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.”" },
      { q: "„Non ___ la faccio più.”" },
      { q: "„Me ___ vado.”" },
      { q: "„La città in ___ vivo.”" },
      { q: "„Il libro ___ ho letto.”" },
      { q: "Poprawne:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "„Vuoi qualcosa ___ mangiare?”" },
      { tr: "Wytłumaczyłem mu to, ale zrozumienie wymaga czasu." },
      { tr: "Wyślę ci to, jak tylko będę mógł, teraz nie dam rady." }
    ]
  },
  "unit:b1-u03": {
    title: "Włoska biurokracja",
    grammarNote: "język urzędowy · dokumenty · formalne prośby"
  },
  "lesson:b1-u03-l1": {
    theme: "Życie we Włoszech",
    title: "Podstawowe dokumenty",
    objectives: [
      "zrozumieć, po co są codice fiscale i residenza",
      "poprosić o wydanie dokumentu",
      "wypełnić prosty formularz"
    ],
    theory: [
      {
        h: "Codice fiscale otwiera wszystko",
        p: "<strong>Il codice fiscale</strong> to szesnastoznakowy kod tożsamości podatkowej, generowany z imienia, nazwiska, daty i miejsca urodzenia. Bez niego nie założysz konta, nie podpiszesz umowy najmu, nie kupisz karty SIM ani nie zapiszesz się do lekarza. Wydaje go <em>Agenzia delle Entrate</em>, natychmiast i bezpłatnie."
      },
      {
        h: "Residenza to nie adres",
        p: "<strong>La residenza</strong> to formalne zameldowanie w gminie (<em>comune</em>). Od niej zależy dostęp do lekarza rodzinnego, prawa jazdy, zasiłków i wielu zniżek. Po zgłoszeniu przychodzi <em>il vigile</em> (strażnik miejski), żeby sprawdzić, czy naprawdę tam mieszkasz."
      },
      {
        h: "Trzy słowa, które usłyszysz w każdym urzędzie",
        list: [
          "<em>la marca da bollo</em> — znaczek skarbowy, kupowany w kiosku (<em>tabaccheria</em>), naklejany na podanie",
          "<em>l'autocertificazione</em> — oświadczenie własne zamiast zaświadczenia; ma moc prawną",
          "<em>l'appuntamento</em> — bez umówionej wizyty online w wielu urzędach nie wejdziesz"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> to nie tylko sklep z papierosami: kupisz tam znaczki skarbowe, bilety komunikacji, doładowania i opłacisz część rachunków."
      }
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
        { tr: "Chciałbym wystąpić o codice fiscale." },
        { tr: "Muszę zameldować się w tej gminie." },
        { tr: "Potrzebny jest znaczek skarbowy za szesnaście euro." },
        { tr: "Umówiłem się już przez internet." },
        { tr: "Dokument jest wydawany od ręki." },
        { tr: "Proszę wypełnić formularz drukowanymi literami." }
      ]
    },
    vocab: [
      "numer identyfikacji podatkowej",
      "zameldowanie",
      "gmina, urząd miasta",
      "biuro ewidencji ludności",
      "formularz",
      "znaczek skarbowy",
      "oświadczenie własne",
      "wydawać (dokument)",
      "okienko",
      "drukowanymi literami",
      "karta ubezpieczenia zdrowotnego",
      "karta pobytu"
    ],
    culture: {
      title: "Okiem Włocha: jak przeżyć urząd",
      text: "<p>Zasada pierwsza: <b>zawsze bierz więcej dokumentów, niż podano na stronie</b>. Wymogi bywają interpretowane różnie przez różne okienka.</p><p>Zasada druga: <b>autocertificazione jest twoim sprzymierzeńcem</b>. Prawo pozwala zastąpić wiele zaświadczeń oświadczeniem własnym, a urzędnik ma obowiązek je przyjąć. Warto o tym wiedzieć, bo nie zawsze się o tym mówi.</p><p>Zasada trzecia: <b>zapisz nazwisko urzędnika</b>, który cię obsługiwał. Przy kolejnej wizycie pozwala to odtworzyć historię sprawy.</p>"
    },
    exercises: [
      {
        q: "Do czego służy codice fiscale?",
        opts: [
          "Tylko do podatków",
          "Do niemal wszystkich formalności: konto, umowa, lekarz",
          "To numer telefonu urzędu"
        ]
      },
      { q: "Gdzie kupisz marca da bollo?", opts: ["W urzędzie", "W tabaccherii", "W banku"] },
      { q: "Uzupełnij: „Vorrei ___ il codice fiscale.” (wystąpić o)" },
      { q: "Uzupełnij: „Compili il modulo in ___.” (drukowanymi)" },
      { q: "Połącz.", pairs: ["ewidencja ludności", "okienko", "wydawać", "formularz"] },
      {
        q: "Co to „autocertificazione”?",
        opts: [
          "Zaświadczenie z urzędu",
          "Oświadczenie własne mające moc prawną",
          "Poświadczenie notarialne"
        ]
      },
      { q: "„Muszę zameldować się w tej gminie.”" },
      {
        q: "Uzupełnij prośbę w urzędzie.",
        tr: "Dzień dobry, chciałbym wystąpić o codice fiscale. Umówiłem się już przez internet."
      },
      { tr: "Potrzebny jest znaczek skarbowy za szesnaście euro i kopia dokumentu." },
      { tr: "Chciałbym wystąpić o codice fiscale, mam paszport." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Życie we Włoszech",
    title: "Bank i umowy",
    objectives: [
      "otworzyć konto bankowe",
      "zrozumieć podstawowe pojęcia umowy",
      "zapytać o koszty i warunki"
    ],
    theory: [
      {
        h: "Konto i jego koszty",
        p: "<em>Il conto corrente</em> ma zwykle <em>il canone mensile</em> (opłatę miesięczną), której w Polsce często nie ma. Przelew to <strong>il bonifico</strong>, a numer konta to <strong>IBAN</strong>. <em>Il bancomat</em> oznacza jednocześnie bankomat i kartę debetową."
      },
      {
        h: "Umowa: słowa, które trzeba rozumieć",
        list: [
          "<em>le condizioni</em> — warunki; <em>la clausola</em> — klauzula",
          "<em>il recesso</em> — odstąpienie; <em>la disdetta</em> — wypowiedzenie",
          "<em>la scadenza</em> — termin; <em>il rinnovo automatico</em> — automatyczne przedłużenie",
          "<em>le spese di gestione</em> — koszty prowadzenia"
        ]
      },
      {
        h: "Pytania, które warto zadać",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. Automatyczne przedłużenie jest we włoskich umowach bardzo częste i wymaga wypowiedzenia z wyprzedzeniem."
      },
      {
        tip: "Przy podpisywaniu umowy urzędnik może poprosić o parafowanie każdej strony (<em>siglare</em>) i podwójny podpis pod klauzulami (<em>doppia firma</em>). To standard, nie sygnał, że coś jest nie tak."
      }
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
        { tr: "Chciałbym otworzyć rachunek bieżący." },
        { tr: "Ile wynosi opłata miesięczna?" },
        { tr: "Muszę zrobić przelew zagraniczny." },
        { tr: "Czy jest zobowiązanie czasowe?" },
        { tr: "Jak mogę wypowiedzieć umowę?" },
        { tr: "Przedłużenie jest automatyczne, chyba że wypowiem." }
      ]
    },
    vocab: [
      "rachunek bieżący",
      "przelew",
      "numer konta",
      "bankomat, karta debetowa",
      "opłata abonamentowa",
      "prowizja",
      "umowa",
      "klauzula",
      "wypowiedzenie",
      "wypowiedzenie z wyprzedzeniem",
      "podpisać",
      "zobowiązanie"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["przelew", "wypowiedzenie", "opłata abonamentowa", "prowizja"] },
      {
        q: "„Rinnovo automatico salvo disdetta” znaczy:",
        opts: [
          "Umowa kończy się automatycznie",
          "Umowa przedłuża się, jeśli jej nie wypowiesz",
          "Umowa nie może być przedłużona"
        ]
      },
      { q: "Uzupełnij: „Vorrei aprire un ___ corrente.”" },
      { q: "Uzupełnij: „C'è un ___ di durata?” (zobowiązanie czasowe)" },
      { q: "„Jak mogę wypowiedzieć umowę?”" },
      {
        q: "W banku.",
        setting: "Okienko doradcy, umówiona wizyta.",
        lines: [
          { tr: "Dzień dobry, w czym mogę pomóc?" },
          { tr: "Powiedz, że chcesz otworzyć konto.", answerTr: "Chciałbym otworzyć rachunek bieżący." },
          { tr: "Oczywiście. Ma pan codice fiscale i dokument?" },
          { tr: "Potwierdź i zapytaj o opłaty miesięczne.", answerTr: "Tak. Ile wynosi opłata miesięczna?" },
          { tr: "Cztery euro miesięcznie, za darmo poniżej trzydziestki." }
        ]
      },
      {
        q: "Uzupełnij pytania do doradcy.",
        tr: "Jakie są prowizje od przelewów? A przedłużenie jest automatyczne?"
      },
      { tr: "Muszę zrobić przelew zagraniczny." },
      { tr: "Opłata wynosi cztery euro miesięcznie, z kartą w cenie." },
      { tr: "Chciałbym wiedzieć, czy jest zobowiązanie czasowe." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Życie we Włoszech",
    title: "Reklamacje i prawa",
    objectives: [
      "złożyć reklamację ustnie i pisemnie",
      "powołać się na prawo lub umowę",
      "eskalować sprawę uprzejmie, ale stanowczo"
    ],
    theory: [
      {
        h: "Struktura skutecznej reklamacji",
        p: "Włoska reklamacja działa najlepiej, gdy zawiera cztery elementy: <b>fakty z datami</b>, <b>odniesienie do umowy lub prawa</b>, <b>konkretne żądanie</b> i <b>termin</b>. Emocje osłabiają, konkret wzmacnia."
      },
      {
        h: "Formuły pisemne",
        list: [
          "<em>Con la presente segnalo che…</em> — niniejszym zgłaszam, że…",
          "<em>Come da contratto…</em> — zgodnie z umową…",
          "<em>Chiedo pertanto…</em> — wnoszę zatem o…",
          "<em>In mancanza di riscontro entro X giorni…</em> — w razie braku odpowiedzi w ciągu X dni…"
        ]
      },
      {
        h: "Narzędzia eskalacji",
        p: "<em>Raccomandata A/R</em> (list polecony za potwierdzeniem odbioru) i <strong>PEC</strong> (<em>posta elettronica certificata</em>, e-mail o mocy listu poleconego) to standardowe kroki. Organizacje konsumenckie: <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "Zdanie <em>Mi riservo di adire le vie legali</em> („zastrzegam sobie drogę prawną”) jest silnym, ale całkowicie zwyczajowym zamknięciem pisma. Nie brzmi agresywnie po włosku."
      }
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
        { tr: "Produkt dotarł uszkodzony." },
        { tr: "Chciałbym złożyć reklamację." },
        { tr: "Mam prawo do zwrotu w ciągu czternastu dni." },
        { tr: "Zgodnie z umową usługa miała działać od pierwszego." },
        { tr: "Przesyłam dokumentację w załączniku." },
        { tr: "Czekam na państwa odpowiedź." }
      ]
    },
    vocab: [
      "reklamacja",
      "złożyć reklamację",
      "zwrot pieniędzy",
      "wymiana",
      "uszkodzony",
      "wadliwy",
      "gwarancja",
      "kierownik, osoba odpowiedzialna",
      "list polecony",
      "odpowiedź",
      "mieć prawo do",
      "zatem"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["zwrot pieniędzy", "wadliwy", "gwarancja", "odpowiedź"] },
      { q: "Uzupełnij: „Vorrei ___ un reclamo.”" },
      { q: "Uzupełnij: „Ho ___ al rimborso.” (mam prawo do)" },
      {
        q: "Co to PEC?",
        opts: ["Rodzaj przelewu", "E-mail o mocy listu poleconego", "Numer identyfikacyjny"]
      },
      { q: "„Produkt dotarł uszkodzony, wnoszę o zwrot.”" },
      {
        q: "Uzupełnij pismo.",
        tr: "Niniejszym zgłaszam, że usługa nie działa. Zgodnie z umową wnoszę o zwrot w ciągu piętnastu dni."
      },
      { tr: "Chciałbym rozmawiać z kierownikiem." },
      {
        q: "Który element najbardziej wzmacnia reklamację po włosku?",
        opts: [
          "Wyrażenie złości",
          "Daty, odniesienie do umowy i konkretne żądanie",
          "Powtórzenie prośby trzy razy"
        ]
      },
      { tr: "Zgodnie z umową usługa miała działać od pierwszego dnia miesiąca." },
      { tr: "Chciałbym złożyć reklamację: produkt jest wadliwy." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Życie we Włoszech",
    title: "Praca i formy zatrudnienia",
    objectives: [
      "rozumieć włoskie formy zatrudnienia",
      "porozmawiać o warunkach pracy",
      "zapytać o wynagrodzenie i urlop"
    ],
    theory: [
      {
        h: "Rodzaje umów",
        list: [
          "<b>tempo indeterminato</b> — na czas nieokreślony, najbardziej pożądana",
          "<b>tempo determinato</b> — na czas określony, z limitami przedłużeń",
          "<b>partita IVA</b> — samozatrudnienie; wystawiasz faktury, sam płacisz składki",
          "<b>apprendistato / tirocinio</b> — praktyka lub staż, często dla młodych"
        ]
      },
      {
        h: "Pensja: netto, lordo i trzynastka",
        p: "Włosi mówią o pensji <b>netto miesięcznie</b> i o <em>RAL</em> (<em>retribuzione annua lorda</em>, roczne brutto). Do tego dochodzi <strong>la tredicesima</strong> (trzynasta pensja w grudniu), a w części branż także <em>la quattordicesima</em> w lipcu."
      },
      {
        h: "Urlop i wolne",
        p: "<em>Le ferie</em> to urlop wypoczynkowy (zwykle 26 dni roboczych), <em>i permessi</em> to godziny wolnego, <em>la malattia</em> to zwolnienie chorobowe. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) to układ zbiorowy branży, który określa minimalne warunki."
      },
      {
        tip: "Pytanie <em>Qual è la RAL prevista?</em> jest na rozmowie o pracę całkowicie normalne i oczekiwane. Nie jest niegrzeczne."
      }
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
        { tr: "Mam umowę na czas nieokreślony." },
        { tr: "Od trzech lat pracuję na samozatrudnieniu." },
        { tr: "Jakie roczne brutto przewidziane jest na to stanowisko?" },
        { tr: "Ile dni urlopu jest przewidzianych?" },
        { tr: "Okres próbny wynosi trzy miesiące." },
        { tr: "Proszę o wolne z przyczyn osobistych." }
      ]
    },
    vocab: [
      "umowa na czas nieokreślony",
      "samozatrudnienie",
      "pensja netto",
      "roczne wynagrodzenie brutto",
      "trzynasta pensja",
      "urlop",
      "godziny wolnego",
      "okres próbny",
      "rozmowa kwalifikacyjna",
      "CV",
      "zatrudniać",
      "zwolnić się"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["na czas nieokreślony", "trzynasta pensja", "urlop", "okres próbny"] },
      { q: "Co to RAL?", opts: ["Pensja netto miesięczna", "Roczne wynagrodzenie brutto", "Rodzaj umowy"] },
      { q: "Kto płaci składki przy partita IVA?", opts: ["Pracodawca", "Sam pracujący", "Nikt"] },
      { q: "Uzupełnij: „Il ___ di prova è di tre mesi.”" },
      { q: "„Ile dni urlopu jest przewidzianych?”" },
      {
        q: "Uzupełnij pytania na rozmowie.",
        tr: "Jakie jest przewidziane roczne brutto? A ile trwa okres próbny?"
      },
      { q: "„Licenziarsi” znaczy:", opts: ["zwolnić kogoś", "zwolnić się samemu", "dostać podwyżkę"] },
      { tr: "Mam umowę na czas nieokreślony od dwóch lat." },
      { tr: "Trzynasta pensja wypłacana jest w grudniu razem z pensją." },
      { tr: "Chciałbym wiedzieć, jakie roczne brutto przewidziane jest na to stanowisko." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 3",
    objectives: ["sprawdzić słownictwo urzędowe, bankowe i pracownicze"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {
        q: "Codice fiscale służy do:",
        opts: ["tylko podatków", "niemal wszystkich formalności", "podróży"]
      },
      { q: "Marca da bollo kupisz w:", opts: ["urzędzie", "tabaccherii", "banku"] },
      { q: "„Compili il modulo in ___.”" },
      { q: "„Vorrei aprire un ___ corrente.”" },
      { q: "„Vorrei ___ un reclamo.”" },
      { q: "„Ho ___ al rimborso.”" },
      { q: "RAL to:", opts: ["netto miesięcznie", "roczne brutto", "trzynastka"] },
      { q: "Połącz.", pairs: ["wypowiedzenie", "przelew", "urlop", "ewidencja"] },
      { tr: "Do zameldowania potrzebny jest dokument i umowa najmu." },
      { tr: "Chciałbym wystąpić o codice fiscale i się zameldować." }
    ]
  },
  "unit:b1-u04": { title: "Media i argumentacja", grammarNote: "mowa zależna · konektory · język prasy" },
  "lesson:b1-u04-l1": {
    theme: "Media",
    title: "Mowa zależna",
    objectives: [
      "przekształcić wypowiedź w mowę zależną",
      "przesunąć czasy poprawnie",
      "zmienić określenia czasu i miejsca"
    ],
    theory: [
      {
        h: "Przesunięcie czasów",
        p: "Gdy zdanie wprowadzające jest w czasie przeszłym, czasy w cytowanej wypowiedzi cofają się o jeden krok: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>."
      },
      {
        trap: "Najczęstszy błąd Polaków: przyszłość w przeszłości. „Powiedział, że przyjdzie” to <em>Ha detto che <b>sarebbe venuto</b></em>, a nie „che verrebbe”. Włoski używa tu condizionale <b>passato</b>."
      },
      {
        h: "Zmieniają się też okoliczniki",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Bez tego relacja brzmi niespójnie."
      },
      {
        h: "Rozkaz i pytanie",
        p: "Tryb rozkazujący przechodzi w <em>di</em> + bezokolicznik: <em>„Vieni!” → Mi ha detto di venire.</em> Pytanie zamknięte wprowadza <em>se</em>: <em>„Vieni?” → Mi ha chiesto se venivo.</em>"
      }
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
        { tr: "Marco powiedział, że jest zmęczony." },
        { tr: "Powiedział mi, że przyjedzie następnego dnia." },
        { tr: "Zapytał, czy mogę mu pomóc." },
        { tr: "Powiedział mi, żebym się nie martwił." },
        { tr: "Wyjaśnił, że już próbował." },
        { tr: "Dodał, że tamtego dnia było to niemożliwe." }
      ]
    },
    vocab: [
      "powiedzieć, że",
      "zapytać, czy",
      "wyjaśniać",
      "dodawać",
      "odpowiadać",
      "twierdzić",
      "stwierdzać",
      "zaprzeczać",
      "dzień wcześniej / później",
      "wtedy",
      "w tamtej chwili",
      "według tego, co powiedziano"
    ],
    exercises: [
      {
        q: "„Verrò domani” w mowie zależnej po czasie przeszłym:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "„Lavoro molto” → „Ha detto che ___ molto.”" },
      { q: "„Ho finito” → „Ha detto che ___ finito.”" },
      { q: "„Vieni!” → „Mi ha detto ___ venire.”" },
      { q: "„Vieni?” → „Mi ha chiesto ___ venivo.”" },
      { q: "Przekształć.", tr: "„Jutro do ciebie zadzwonię” → Powiedział mi, że następnego dnia zadzwoni." },
      {
        q: "Połącz zmiany okoliczników.",
        pairs: ["quel giorno", "il giorno prima", "il giorno dopo", "lì"]
      },
      { q: "„Powiedział mi, żebym się nie martwił.”" },
      { tr: "Wyjaśnił, że próbował już wielokrotnie bez powodzenia." },
      { tr: "Powiedział mi, że przyjedzie następnego dnia." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Media",
    title: "Czytanie prasy",
    objectives: [
      "rozumieć strukturę artykułu prasowego",
      "rozpoznać język niepotwierdzonych informacji",
      "streścić tekst własnymi słowami"
    ],
    theory: [
      {
        h: "Condizionale prasowy",
        p: "Włoskie media używają trybu warunkowego do informacji <b>niepotwierdzonych</b>: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> znaczy „miał podpisać, ale nie jest to potwierdzone”. To nie jest przypuszczenie dziennikarza, tylko sygnał, że źródło nie jest oficjalne. Nierozpoznanie tej formy prowadzi do zupełnie błędnego odczytania tekstu."
      },
      {
        h: "Struktura artykułu",
        p: "<em>Il titolo</em> (tytuł), <em>l'occhiello</em> (nadtytuł), <em>il sommario</em> (lid), <em>il corpo</em> (tekst), <em>la didascalia</em> (podpis pod zdjęciem). Włoskie tytuły często są eliptyczne i bezczasownikowe."
      },
      {
        h: "Nominalizacja",
        p: "Język prasy zamienia czasowniki w rzeczowniki: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Ta cecha zagęszcza tekst i utrudnia czytanie na początku; rozpoznanie mechanizmu bardzo pomaga."
      },
      {
        tip: "Główne dzienniki: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (ekonomia), <em>Il Post</em> (przystępny, dobry na start dla uczących się)."
      }
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
        { tr: "Według źródeł wewnętrznych firma miała już zdecydować." },
        { tr: "Reforma została przyjęta 210 głosami za." },
        { tr: "Dane o zatrudnieniu rosną." },
        { tr: "Artykuł twierdzi, że problem jest strukturalny." },
        { tr: "Dziennik zdementował informację." },
        { tr: "Podsumowując: kluczową kwestią jest finansowanie." }
      ]
    },
    vocab: [
      "dziennik",
      "tygodnik",
      "wiadomość",
      "źródło",
      "dementować",
      "twierdzić",
      "rosnący / spadający",
      "śledztwo dziennikarskie",
      "artykuł wstępny",
      "tytuł",
      "streszczać",
      "wiarygodny"
    ],
    exercises: [
      {
        q: "„Il ministro avrebbe firmato l'accordo” znaczy:",
        opts: [
          "Minister podpisał umowę",
          "Podobno minister podpisał, brak potwierdzenia",
          "Minister podpisałby, gdyby mógł"
        ]
      },
      {
        q: "„L'approvazione della legge” to nominalizacja od:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Uzupełnij: „I dati sono in ___.” (rosną)" },
      { q: "Uzupełnij: „Il giornale ha ___ la notizia.” (zdementował)" },
      { q: "Połącz.", pairs: ["dziennik", "źródło", "śledztwo dziennikarskie", "wiarygodny"] },
      {
        q: "„Secondo fonti vicine al governo” sygnalizuje:",
        opts: ["informację oficjalną", "informację nieoficjalną", "opinię redakcji"]
      },
      {
        q: "Uzupełnij zdanie prasowe.",
        tr: "Według źródeł wewnętrznych firma miała już zdecydować, ale rzecznik zdementował informację."
      },
      { q: "„Reforma została przyjęta w zeszłym tygodniu.”" },
      { tr: "Według dziennika rząd miał już przygotować odpowiedź." },
      { tr: "Artykuł twierdzi, że problem jest strukturalny." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Komunikacja",
    title: "Spójność wypowiedzi",
    objectives: [
      "połączyć argumenty konektorami",
      "zbudować uporządkowaną wypowiedź",
      "unikać monotonii „e… e… e…”"
    ],
    theory: [
      {
        h: "Konektor mówi czytelnikowi, co dzieje się dalej",
        p: "Bez konektorów tekst jest listą zdań. <em>Inoltre</em> zapowiada dodanie, <em>tuttavia</em> zwrot, <em>quindi</em> wniosek, <em>infatti</em> uzasadnienie. Dobór konektora jest częścią argumentu, nie ozdobą."
      },
      {
        h: "Pary, które łatwo pomylić",
        list: [
          "<em>infatti</em> (bo rzeczywiście, potwierdza) kontra <em>invece</em> (natomiast, przeciwstawia)",
          "<em>anzi</em> (co więcej, wzmacnia lub koryguje) kontra <em>però</em> (ale)",
          "<em>quindi</em> (a więc, wniosek) kontra <em>allora</em> (wtedy, także sygnał rozmowy)",
          "<em>comunque</em> (i tak, w każdym razie) kontra <em>tuttavia</em> (jednakże, formalne)"
        ]
      },
      {
        h: "Szkielet krótkiej argumentacji",
        p: "<em>Anzitutto…</em> (przede wszystkim) → <em>Inoltre…</em> (ponadto) → <em>Tuttavia…</em> (jednakże) → <em>In conclusione…</em>. Ten szkielet wystarcza do wypowiedzi ustnej na egzaminie B1 i do krótkiego tekstu pisanego."
      },
      {
        tip: "W mowie potocznej najczęstsze są <em>allora</em>, <em>comunque</em>, <em>insomma</em>, <em>cioè</em>. W piśmie lepiej sprawdzają się <em>tuttavia</em>, <em>pertanto</em>, <em>in effetti</em>."
      }
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
        { tr: "Przede wszystkim koszt jest za wysoki." },
        { tr: "Ponadto nie mamy dość czasu." },
        { tr: "Jednakże istnieje alternatywa." },
        { tr: "Projekt jest złożony, dlatego potrzeba więcej zasobów." },
        { tr: "Nie jest drogi, wręcz przeciwnie — opłacalny." },
        { tr: "Podsumowując, proponuję przełożyć." }
      ]
    },
    vocab: [
      "przede wszystkim",
      "ponadto",
      "jednakże",
      "natomiast",
      "co więcej, przeciwnie",
      "zatem, dlatego",
      "wobec tego",
      "to znaczy",
      "faktycznie",
      "z drugiej strony",
      "podsumowując",
      "w każdym razie"
    ],
    exercises: [
      { q: "„Non è caro, ___ è conveniente.” (wręcz przeciwnie)", opts: ["però", "anzi", "invece"] },
      { q: "„Il progetto è complesso, ___ servono più risorse.”", opts: ["perciò", "invece", "cioè"] },
      { q: "Uzupełnij: „___ il costo è troppo alto.” (przede wszystkim)" },
      { q: "Uzupełnij: „___, propongo di rimandare.” (podsumowując)" },
      { q: "Połącz konektor z funkcją.", pairs: ["dodanie", "przeciwstawienie", "skutek", "wyjaśnienie"] },
      {
        q: "Zbuduj argumentację.",
        tr: "Przede wszystkim cena jest wysoka. Ponadto nie mamy czasu. Zatem proponuję przełożyć."
      },
      {
        q: "Który konektor pasuje do rejestru pisanego, a nie potocznego?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "Jednakże istnieje alternatywa, którą warto rozważyć." },
      { tr: "Przede wszystkim koszt, ponadto terminy: podsumowując, to się nie opłaca." },
      { tr: "Z jednej strony to prawda, z drugiej dane mówią co innego." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Komunikacja",
    title: "Dłuższa wypowiedź",
    objectives: [
      "zbudować dwuminutową wypowiedź na temat",
      "poprzeć zdanie przykładem i danymi",
      "domknąć wypowiedź wnioskiem"
    ],
    theory: [
      {
        h: "Struktura, która zawsze działa",
        list: [
          "<b>teza</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argument 1 + przykład</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>argument 2</b>: <em>Inoltre…</em>",
          "<b>kontrargument i odpowiedź</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>wniosek</b>: <em>In conclusione…</em>"
        ]
      },
      {
        h: "Uwzględnienie kontrargumentu wzmacnia",
        p: "Wypowiedź, która przyznaje rację drugiej stronie, zanim ją podważy, brzmi mocniej niż jednostronna. Formuła: <em>È vero che…, tuttavia…</em>, albo <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "Wypełniacze kupują czas",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. Nie są pustosłowiem — pozwalają utrzymać płynność, kiedy szukasz słowa. Egzaminatorzy oceniają je pozytywnie jako strategię komunikacyjną."
      },
      {
        tip: "Nie tłumacz z polskiego zdanie po zdaniu. Zbuduj prostsze zdania po włosku i połącz konektorami — wyjdzie płynniej niż wierne tłumaczenie skomplikowanej polskiej frazy."
      }
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
        { tr: "Uważam, że praca zdalna jest przydatna, ale nie dla wszystkich." },
        { tr: "Przede wszystkim skraca czas dojazdów." },
        { tr: "Wystarczy pomyśleć o mieszkających na przedmieściach." },
        { tr: "Niektórzy twierdzą, że ogranicza współpracę." },
        { tr: "Trzeba jednak powiedzieć, że zależy to od organizacji." },
        { tr: "Podsumowując, rozwiązanie hybrydowe wydaje mi się najbardziej wyważone." }
      ]
    },
    vocab: [
      "uważać",
      "twierdzić",
      "wystarczy pomyśleć o",
      "trzeba powiedzieć, że",
      "niektórzy mówią, że",
      "w pewnym sensie",
      "powiedzmy, że",
      "wyważony",
      "argument, temat",
      "zaleta / wada",
      "w dłuższej perspektywie",
      "warto"
    ],
    exercises: [
      { q: "Uzupełnij: „___ che il problema sia strutturale.” (uważam)" },
      { q: "Uzupełnij: „C'è ___ sostiene il contrario.” (niektórzy)" },
      { q: "Po „ritengo che” stawiamy:", opts: ["indicativo", "congiuntivo", "bezokolicznik"] },
      {
        q: "Połącz.",
        pairs: ["wystarczy pomyśleć o", "trzeba powiedzieć", "w dłuższej perspektywie", "warto"]
      },
      {
        q: "Uzupełnij wypowiedź.",
        tr: "Uważam, że praca hybrydowa jest najlepszym rozwiązaniem. Przede wszystkim obniża koszty. Jednakże zależy to od branży."
      },
      { q: "„Trzeba jednak powiedzieć, że zależy to od organizacji.”" },
      { tr: "Podsumowując, rozwiązanie hybrydowe wydaje mi się najbardziej wyważone." },
      {
        q: "Dlaczego warto uwzględnić kontrargument?",
        opts: [
          "Żeby wydłużyć wypowiedź",
          "Bo wypowiedź brzmi mocniej i dojrzalej",
          "Bo wymaga tego gramatyka"
        ]
      },
      { tr: "Niektórzy twierdzą, że ogranicza to współpracę, ale dane tego nie potwierdzają." },
      { tr: "Uważam, że warto spróbować, przynajmniej przez sześć miesięcy." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Egzamin",
    title: "Egzamin końcowy poziomu B1",
    objectives: ["sprawdzić congiuntivo, zaimki, mowę zależną i argumentację"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      {  },
      { q: "„Penso che tu ___ ragione.”" },
      { q: "„Benché ___ tardi, esco.”" },
      { q: "„Hai dato il libro a Marco? — Sì, ___ ho dato.”" },
      { q: "„Non ___ la faccio più.”" },
      { q: "„La città in ___ vivo.”" },
      {
        q: "„Verrò domani” → mowa zależna:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "„Il ministro avrebbe firmato” znaczy:",
        opts: ["podpisał na pewno", "podobno podpisał", "podpisałby"]
      },
      { q: "„___, propongo di rimandare.” (podsumowując)" },
      { q: "„Nie sądzę, żeby zrozumieli problem.”" },
      { tr: "Powiedział mi, że wpadnie następnego dnia, ale nie przyszedł." },
      { tr: "Uważam, że to dobre rozwiązanie, choć nie idealne." }
    ]
  }
});
