/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a1-01.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a1-u01": { title: "Rytuał kawy", grammarNote: "essere · rodzaj i liczba · rodzajniki" },
  "lesson:a1-u01-l1": {
    theme: "Życie codzienne",
    title: "Powitania i pierwsze zamówienie",
    objectives: [
      "przywitać się i pożegnać w odpowiedniej porze dnia",
      "zamówić kawę tak, jak robią to Włosi",
      "odmienić czasownik essere w czasie teraźniejszym"
    ],
    theory: [
      {
        h: "Powitanie zależy od godziny, nie od nastroju",
        p: "Włoskie powitania dzielą dobę na dwie części. <strong>Buongiorno</strong> obowiązuje od rana mniej więcej do wczesnego popołudnia. Potem, gdzieś między 14 a 17 (granica jest płynna i zależy od regionu), przechodzi się na <strong>buonasera</strong> — i mówi się tak także wchodząc do baru o 18, choć po polsku „dobry wieczór” brzmiałoby wtedy dziwnie. <strong>Buonanotte</strong> to nie powitanie, tylko pożegnanie przed snem."
      },
      {
        h: "Ciao to nie zawsze bezpieczny wybór",
        p: "<strong>Ciao</strong> znaczy jednocześnie „cześć” i „pa”, ale używa się go tylko z osobami, do których mówisz <em>tu</em>: znajomi, rówieśnicy, rodzina, młodzi barmani. Do kelnera po pięćdziesiątce, do urzędnika, do właścicielki sklepu, którą widzisz pierwszy raz — <strong>buongiorno</strong>. Wejście z „ciao” do apteki brzmi tak, jak polskie „siema” w banku."
      },
      {
        contrast: "W polskim „dzień dobry” działa cały dzień. Po włosku ta jedna forma nie wystarczy — musisz wybrać porę. To najczęstszy błąd Polaków w pierwszym tygodniu we Włoszech."
      },
      {
        h: "Essere — czasownik, bez którego nie zbudujesz zdania",
        p: "<strong>Essere</strong> znaczy „być”. Jego formy nie przypominają bezokolicznika (<em>sono</em>, <em>sei</em>, <em>è</em>…), więc nie da się ich wyprowadzić z reguły — trzeba je po prostu znać. Dobra wiadomość: powtórzysz je tyle razy, że wejdą same."
      },
      {
        tip: "Zaimki osobowe (io, tu, lui…) zwykle się pomija, bo końcówka czasownika już mówi, kto wykonuje czynność. <em>Sono polacca</em> wystarczy; <em>io sono polacca</em> dodaje nacisk: „<b>ja</b> jestem Polką (a ty nie)”."
      }
    ],
    grammar: {
      title: "Essere (być) — czas teraźniejszy",
      note: "Zwróć uwagę na <b>è</b> z akcentem — bez niego <em>e</em> znaczy „i”. To dwa różne słowa.",
      table: {
        head: ["osoba", "forma", "po polsku"],
        rows: [
          ["io", "sono", "jestem"],
          ["tu", "sei", "jesteś (nieformalnie)"],
          ["lui / lei / Lei", "è", "on / ona jest; Pan/Pani jest"],
          ["noi", "siamo", "jesteśmy"],
          ["voi", "siete", "jesteście"],
          ["loro", "sono", "są"]
        ]
      },
      examples: [
        {
          tr: "Dzień dobry, poproszę kawę.",
          note: "„un caffè” to espresso — nie trzeba tego doprecyzowywać"
        },
        { tr: "Jestem Anna, miło mi." },
        { tr: "Jesteś z Rzymu?" },
        { tr: "Kawa jest gorąca." },
        { tr: "Jesteśmy spóźnieni." },
        { tr: "Oni są w barze." }
      ]
    },
    vocab: [
      "dzień dobry (rano i po południu)",
      "dobry wieczór (od ok. 16-17)",
      "dobranoc (tylko przy pożegnaniu)",
      "cześć / pa (nieformalnie)",
      "do widzenia (formalnie)",
      "proszę (prosząc o coś)",
      "dziękuję",
      "proszę bardzo / nie ma za co",
      "espresso",
      "cappuccino",
      "rogalik",
      "bar, kawiarnia",
      "miło mi (przy poznaniu)",
      "przepraszam (formalnie)"
    ],
    dialogue: [
      "Dzień dobry! Słucham.",
      "Dzień dobry. Kawę i rogalika poproszę.",
      "Już podaję. To dwa pięćdziesiąt.",
      "Proszę. Dziękuję!",
      "Proszę bardzo, miłego dnia!"
    ],
    culture: {
      title: "Okiem Włocha: kawa ma swoje zasady",
      text: "<p>We włoskim barze kawę pije się <b>na stojąco, przy barze</b> (al banco) i trwa to trzy minuty. Za stolik płaci się osobno, czasem dwa razy więcej — to nie oszustwo, tylko dwie różne usługi w cenniku.</p><p><b>Cappuccino po jedenastej</b> to sygnał, że jesteś turystą: mleko uchodzi za ciężkie i pije się je do śniadania. Po obiedzie zamawia się <i>un caffè</i>, ewentualnie <i>un macchiato</i> — espresso z kroplą mleka.</p><p>Płaci się zwykle <b>po wypiciu</b>, chyba że bar ma kasę przy wejściu — wtedy najpierw <i>lo scontrino</i> (paragon), potem kawa.</p>"
    },
    exercises: [
      {
        q: "Wchodzisz do baru o 9:30 rano. Co mówisz?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno obowiązuje od rana do wczesnego popołudnia. Buonanotte to wyłącznie pożegnanie przed snem."
      },
      {
        q: "Kelner ma jakieś sześćdziesiąt lat i widzisz go pierwszy raz. Które powitanie jest właściwe?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "„Ciao” zarezerwuj dla osób, do których mówisz na „ty”. W barze wobec obcej osoby — buongiorno."
      },
      {
        tr: "Cała odmiana — bez ściągi.",
        why: "Essere jest nieregularny w każdej osobie. To jedna z dwóch odmian, których naprawdę trzeba się nauczyć na pamięć."
      },
      {
        q: "Uzupełnij: „Anna e Marco ___ italiani.” (Anna i Marco są Włochami.)",
        hint: "trzecia osoba liczby mnogiej",
        why: "Loro sono. Uwaga: forma „sono” obsługuje jednocześnie <b>io</b> i <b>loro</b> — kontekst rozstrzyga, o kogo chodzi."
      },
      {
        q: "Przetłumacz: „Jestem z Polski.”",
        hint: "essere + da + kraj",
        why: "Sono dalla Polonia. Nazwy krajów biorą rodzajnik: la Polonia → dalla Polonia."
      },
      {
        tr: "Poproszę kawę i rogalika.",
        why: "Włoski nie ma osobnego słowa na „poproszę” — mówi się po prostu, co chcesz, i dodaje <i>per favore</i>."
      },
      {
        q: "Połącz zwroty z ich znaczeniem.",
        pairs: ["dziękuję", "proszę bardzo", "przepraszam (formalnie)", "do widzenia"]
      },
      {
        tr: "Dobry wieczór, poproszę cappuccino.",
        why: "Uwaga na podwójne <b>cc</b> i <b>pp</b> — po włosku słychać je wyraźnie dłużej niż pojedyncze."
      },
      {
        tr: "Dzień dobry, poproszę kawę.",
        why: "„Caffè” ma akcent na ostatniej sylabie: kaf-FE, nie KA-fe."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Gramatyka podstawowa",
    title: "Rodzaj rzeczownika",
    objectives: [
      "rozpoznać rodzaj rzeczownika po końcówce",
      "utworzyć liczbę mnogą według wzorca -o/-i, -a/-e, -e/-i",
      "poradzić sobie z rzeczownikami nieodmiennymi typu il bar, la città"
    ],
    theory: [
      {
        h: "Dwa rodzaje, nie trzy",
        p: "Włoski ma tylko rodzaj męski i żeński — nijakiego nie ma. Każdy rzeczownik należy do jednego z nich, także wtedy, gdy chodzi o przedmiot: <em>il tavolo</em> (stół) jest męski, <em>la sedia</em> (krzesło) żeńska. Rodzaj nie jest kwestią logiki, tylko formy słowa."
      },
      {
        h: "Trzy wzorce, które załatwiają większość słów",
        list: [
          "końcówka <b>-o</b> → rodzaj męski, liczba mnoga <b>-i</b>: <em>il libro → i libri</em>",
          "końcówka <b>-a</b> → rodzaj żeński, liczba mnoga <b>-e</b>: <em>la casa → le case</em>",
          "końcówka <b>-e</b> → rodzaj męski <i>albo</i> żeński, liczba mnoga zawsze <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Rzeczowniki na <b>-e</b> to jedyna grupa, przy której trzeba zapamiętać rodzaj razem ze słowem. Ucz się ich zawsze z rodzajnikiem: nie „fiore”, tylko <b>il fiore</b>."
      },
      {
        h: "Słowa, które się nie zmieniają",
        p: "Rzeczowniki zakończone akcentowaną samogłoską (<em>la città</em>, <em>il caffè</em>) oraz zapożyczenia (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) mają tę samą formę w liczbie pojedynczej i mnogiej. Liczbę rozpoznasz wtedy tylko po rodzajniku: <em>la città → le città</em>."
      },
      {
        contrast: "Polski ma rodzaj nijaki i skomplikowaną deklinację; włoski nie ma przypadków w ogóle. Relacje, które polski wyraża końcówką („kawy”, „kawie”), włoski wyraża przyimkiem: <em>del caffè</em>, <em>al caffè</em>."
      }
    ],
    grammar: {
      title: "Rodzaj i liczba mnoga rzeczownika",
      table: {
        head: ["wzorzec", "liczba pojedyncza", "liczba mnoga", "po polsku"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "książka / książki"],
          ["-a → -e (ż)", "la ragazza", "le ragazze", "dziewczyna / dziewczyny"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restauracja / restauracje"],
          ["-e → -i (ż)", "la stazione", "le stazioni", "dworzec / dworce"],
          ["nieodmienne", "la città", "le città", "miasto / miasta"],
          ["zapożyczenia", "il bar", "i bar", "bar / bary"]
        ]
      },
      examples: [
        { tr: "Rogalik jest dobry." },
        { tr: "Rogaliki są dobre.", note: "przymiotnik też zmienia końcówkę" },
        { tr: "Dworzec jest blisko.", note: "„stazione” jest żeńska mimo końcówki -e" },
        { tr: "Dwie kawy poproszę.", note: "caffè nie zmienia formy" }
      ]
    },
    vocab: [
      "książka",
      "dom",
      "stół",
      "krzesło",
      "restauracja",
      "dworzec",
      "klucz",
      "kwiat",
      "miasto",
      "kawa / bar",
      "sport",
      "film",
      "noc",
      "dzień"
    ],
    exercises: [
      {
        q: "Które słowo jest rodzaju żeńskiego?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i> — rodzaj poznajesz po rodzajniku, bo końcówka -e sama go nie zdradza."
      },
      {
        q: "Liczba mnoga od „la ragazza” to „___ ragazze”.",
        why: "Rodzajnik żeński w liczbie mnogiej to zawsze <b>le</b>."
      },
      {
        q: "Utwórz liczbę mnogą: „il ristorante” → „i ___”.",
        hint: "-e w liczbie mnogiej zawsze przechodzi w -i",
        why: "Rzeczowniki na -e tworzą liczbę mnogą na -i, niezależnie od rodzaju."
      },
      {
        q: "Dobierz rodzajnik określony w liczbie pojedynczej.",
        why: "Przy słowach na -e rodzaju trzeba się nauczyć na pamięć — dlatego zapisuj je zawsze z rodzajnikiem.",
        items: ["książka", "dom", "dworzec", "restauracja", "klucz", "dzień"]
      },
      {
        q: "Ile kaw zamawiasz, mówiąc „due caffè”?",
        opts: ["Jedną", "Dwie", "Nie da się stwierdzić"],
        why: "„Caffè” się nie odmienia; liczbę niesie liczebnik albo rodzajnik: <i>il caffè / i caffè</i>."
      },
      {
        q: "Które z tych rzeczowników mają tę samą formę w liczbie mnogiej?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Nie odmieniają się: słowa z akcentem na końcu (città) i zapożyczenia (bar, sport)."
      },
      { tr: "Restauracja jest zamknięta.", why: "Szyk: rodzajnik + rzeczownik + czasownik + przymiotnik." },
      { tr: "Klucze są na stole." },
      { tr: "Miasto jest bardzo piękne.", why: "„Città” ma akcent na końcu: czit-TA." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Gramatyka podstawowa",
    title: "Rodzajniki określone i nieokreślone",
    objectives: [
      "wybrać właściwy rodzajnik określony zależnie od pierwszej głoski słowa",
      "odróżnić użycie il / un",
      "poprawnie użyć lo i gli"
    ],
    theory: [
      {
        h: "Po co rodzajnik, skoro polski go nie ma",
        p: "Rodzajnik mówi dwie rzeczy naraz: jaki rodzaj i liczba ma słowo, oraz czy mówimy o rzeczy znanej rozmówcy, czy o dowolnej. <em>Vorrei un caffè</em> — jakąkolwiek kawę. <em>Dov'è il caffè?</em> — ta konkretna, o której wiemy."
      },
      {
        h: "Formy męskie zależą od pierwszej głoski",
        p: "Męski rodzajnik ma trzy warianty i wybór nie jest kwestią gustu, tylko wymowy. <strong>Il</strong> stoi przed zwykłą spółgłoską. <strong>Lo</strong> przed <em>s + spółgłoska</em> (<em>lo studente</em>), przed <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em> oraz <em>x</em>. <strong>L'</strong> przed samogłoską. Powód jest czysto fonetyczny: „il studente” byłoby trudne do wymówienia."
      },
      {
        h: "Liczba mnoga",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "Rodzajnik nieokreślony",
        p: "<strong>Un</strong> przed spółgłoską i samogłoską (<em>un libro</em>, <em>un amico</em> — bez apostrofu!), <strong>uno</strong> tam, gdzie byłoby <em>lo</em> (<em>uno studente</em>), <strong>una</strong> dla żeńskiego, <strong>un'</strong> przed żeńską samogłoską (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (bez apostrofu, męski) kontra <b>un'amica</b> (z apostrofem, żeński). Apostrof jest tu jedyną różnicą w piśmie i to on niesie informację o rodzaju."
      }
    ],
    grammar: {
      title: "Rodzajniki — pełna tabela",
      table: {
        head: ["kontekst", "określony l.poj.", "określony l.mn.", "nieokreślony"],
        rows: [
          ["m. + spółgłoska", "il treno", "i treni", "un treno"],
          ["m. + s+sp., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + samogłoska", "l'amico", "gli amici", "un amico"],
          ["ż. + spółgłoska", "la casa", "le case", "una casa"],
          ["ż. + samogłoska", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "Poproszę kawę.", note: "jakąkolwiek — nieokreślony" },
        { tr: "Ta kawa jest zimna.", note: "konkretna — określony" },
        { tr: "Plecak jest ciężki.", note: "z → lo" },
        { tr: "Studenci są spóźnieni." },
        { tr: "Koleżanka z Rzymu.", note: "żeński + samogłoska → un'" }
      ]
    },
    vocab: [
      "student / studentka",
      "plecak",
      "przyjaciel / przyjaciółka",
      "pociąg",
      "lustro",
      "cukier",
      "woda",
      "szklanka",
      "butelka",
      "hotel",
      "psycholog",
      "ludzie (l. pojedyncza!)"
    ],
    exercises: [
      {
        q: "Który rodzajnik pasuje do „zucchero” (cukier)?",
        opts: ["il", "lo", "l'"],
        why: "Rzeczowniki męskie na <b>z</b> biorą lo: <i>lo zucchero</i>, tak samo <i>lo zaino</i>."
      },
      {
        q: "Jak brzmi liczba mnoga od „lo specchio”?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo w liczbie mnogiej zawsze przechodzi w <b>gli</b>."
      },
      {
        q: "Wybierz właściwy rodzajnik określony.",
        why: "Wybór zależy od rodzaju ORAZ od pierwszej głoski słowa.",
        items: ["pociąg", "student", "przyjaciółka", "woda", "butelka", "plecak"]
      },
      {
        q: "Uzupełnij: „Ho ___ amica a Milano.” (Mam koleżankę w Mediolanie.)",
        hint: "rodzaj żeński przed samogłoską",
        why: "Un'amica z apostrofem. Bez apostrofu (<i>un amico</i>) byłby to mężczyzna."
      },
      {
        q: "Uzupełnij: „___ studenti sono bravi.” (Studenci są zdolni.)",
        why: "Studente bierze lo, więc w liczbie mnogiej: gli studenti."
      },
      {
        q: "„Vorrei il caffè” a „Vorrei un caffè” — na czym polega różnica?",
        opts: [
          "Żadna, to synonimy",
          "Il = ta konkretna kawa, o której już mowa; un = jakakolwiek",
          "Il jest grzeczniejsze"
        ],
        why: "Rodzajnik określony zakłada, że rozmówca wie, o którą rzecz chodzi. W barze zamawiasz <i>un caffè</i>."
      },
      {
        q: "Połącz rzeczownik z rodzajnikiem.",
        pairs: ["ps + spółgłoska", "samogłoska", "zwykła spółgłoska", "rodzaj żeński"]
      },
      {
        tr: "Plecak studenta jest ciężki.",
        why: "„Dello” to di + lo — przyimek też dostosowuje się do rodzajnika."
      },
      { tr: "Studenci są na uniwersytecie." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Życie codzienne",
    title: "Jak się masz — tu czy Lei",
    objectives: [
      "zapytać o samopoczucie w formie oficjalnej i nieoficjalnej",
      "odmienić czasownik stare",
      "wiedzieć, kiedy przejść z Lei na tu"
    ],
    theory: [
      {
        h: "Dwie formy grzecznościowe, nie jedna",
        p: "Włoski rozróżnia <strong>tu</strong> (na ty) i <strong>Lei</strong> (forma oficjalna). <em>Lei</em> to dosłownie „ona”, ale używa się jej wobec mężczyzn i kobiet — czasownik stoi w trzeciej osobie liczby pojedynczej: <em>Come sta?</em>. W piśmie często zapisuje się je wielką literą, żeby odróżnić od zwykłego „ona”."
      },
      {
        h: "Kto pierwszy proponuje przejście na ty",
        p: "Zasada jest prosta: proponuje osoba starsza albo wyżej postawiona. Zdanie brzmi <em>Possiamo darci del tu?</em> („Możemy przejść na ty?”). W barze, wśród rówieśników, w środowisku młodym — Włosi przechodzą na <em>tu</em> bardzo szybko. W banku, u lekarza i w urzędzie zostaje <em>Lei</em>."
      },
      {
        h: "Stare — „być”, ale o samopoczuciu",
        p: "O tym, jak się czujesz, mówi się przez <strong>stare</strong>, nie przez <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. Zdanie „sono bene” jest błędem, którego Włoch nigdy nie powie. <em>Stare</em> obsługuje też miejsce i stan trwały: <em>Sto a casa</em> (jestem/zostaję w domu)."
      },
      {
        contrast: "Polskie „jak się masz” tłumaczymy odruchowo przez „mieć” — po włosku to zawsze <em>stare</em>. Zapamiętaj parę: <b>come stai / sto bene</b>."
      }
    ],
    grammar: {
      title: "Stare (czuć się, przebywać) — czas teraźniejszy",
      table: {
        head: ["osoba", "forma", "przykład"],
        rows: [
          ["io", "sto", "Sto bene, grazie."],
          ["tu", "stai", "Come stai?"],
          ["lui / lei / Lei", "sta", "Come sta, signora?"],
          ["noi", "stiamo", "Stiamo bene."],
          ["voi", "state", "Come state?"],
          ["loro", "stanno", "Stanno male."]
        ]
      },
      examples: [
        { tr: "Cześć Marco, jak się masz?", note: "nieformalnie" },
        { tr: "Dzień dobry, jak się Pan/Pani ma?", note: "formalnie" },
        { tr: "Dobrze, dziękuję. A ty?" },
        { tr: "Nie najgorzej.", note: "bardzo częsta odpowiedź" },
        { tr: "Tak sobie." },
        { tr: "Możemy przejść na ty?" }
      ]
    },
    vocab: [
      "jak się masz? (ty)",
      "jak się Pan/Pani ma?",
      "mam się dobrze",
      "źle się czuję",
      "nie najgorzej",
      "tak sobie",
      "a ty? / a Pan(i)?",
      "świetnie",
      "trochę zmęczony/a",
      "pan / pani",
      "do zobaczenia wkrótce",
      "na razie (do później)"
    ],
    dialogue: [
      "Cześć Giulia! Jak się masz?",
      "Cześć! Świetnie, a ty?",
      "Trochę zmęczony, ale dobrze. Na razie!",
      "Dzień dobry pani, jak się pani ma?",
      "Nie najgorzej, dziękuję. A pan?"
    ],
    exercises: [
      {
        q: "Pytasz o samopoczucie osoby, do której mówisz per Lei. Które zdanie jest poprawne?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "Forma Lei wymaga trzeciej osoby liczby pojedynczej: <i>come sta?</i>"
      },
      {
        q: "Które zdanie jest błędne?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "O samopoczuciu mówi się przez <b>stare</b>, nigdy przez <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare jest nieregularny w liczbie pojedynczej i w trzeciej osobie liczby mnogiej (stanno)."
      },
      {
        q: "Uzupełnij: „Come ___, ragazzi?” (Jak się macie, chłopaki?)",
        why: "Zwracasz się do grupy → forma voi: state."
      },
      { q: "Przetłumacz nieformalnie: „Mam się dobrze, dziękuję. A ty?”", why: "Sto bene, grazie. E tu?" },
      {
        q: "Jesteś w barze. Barmanka, którą znasz od lat, wita Cię pierwsza.",
        setting: "Bar dzielnicowy, godzina ósma rano.",
        lines: [
          { tr: "Cześć! Jak się masz dziś rano?" },
          { tr: "Odpowiedz, że dobrze, i odbij pytanie.", answerTr: "Dobrze, a ty?" },
          { tr: "Świetnie! To co zwykle, kawa?" },
          { tr: "Potwierdź i podziękuj.", answerTr: "Tak, dziękuję!" }
        ]
      },
      {
        q: "Połącz odpowiedź z jej wydźwiękiem.",
        pairs: ["bardzo dobrze", "nie najgorzej", "tak sobie", "źle"]
      },
      { tr: "Dobry wieczór pani, jak się pani ma?" },
      { tr: "Nie najgorzej, dziękuję. A pan/pani?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 1",
    objectives: ["sprawdzić powitania, essere, stare, rodzaj i rodzajniki"],
    theory: [
      {
        p: "Dziesięć zadań z całej jednostki. Zaliczenie od 70%. Nie zaglądaj do lekcji — jeśli czegoś nie pamiętasz, lepiej wrócić i powtórzyć."
      }
    ],
    exercises: [
      {
        q: "Jest 18:30, wchodzisz do sklepu. Co mówisz?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "Po ok. 16-17 Włosi przechodzą na buonasera."
      },
      { q: "„Noi ___ in ritardo.” (Jesteśmy spóźnieni.)", why: "essere, forma noi." },
      { q: "„Come ___?” zapytasz koleżankę o samopoczucie.", why: "stare, forma tu." },
      { q: "Wybierz rodzajnik określony.", items: [, , , ] },
      {
        q: "Liczba mnoga od „l'amico”:",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "Męskie l' przechodzi w gli."
      },
      {
        q: "Które rzeczowniki nie zmieniają formy w liczbie mnogiej?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "„Poproszę wodę.”", why: "Un'acqua, per favore — rodzaj żeński przed samogłoską." },
      { tr: "Studenci są w barze." },
      { tr: "Dwie kawy i rogalik poproszę." },
      { tr: "Dzień dobry, jak się Pan/Pani ma?" }
    ]
  },
  "unit:a1-u02": { title: "Kim jesteś", grammarNote: "avere · liczebniki · zawody i narodowości" },
  "lesson:a1-u02-l1": {
    theme: "Poznawanie ludzi",
    title: "Przedstawianie się",
    objectives: [
      "podać imię, pochodzenie i miejsce zamieszkania",
      "użyć czasownika chiamarsi",
      "zapytać innych o te same rzeczy"
    ],
    theory: [
      {
        h: "„Nazywam się” to czasownik zwrotny",
        p: "<strong>Chiamarsi</strong> znaczy dosłownie „nazywać siebie”. Stąd forma <em>mi chiamo</em> — „nazywam się”. Zaimek zwrotny (<em>mi, ti, si…</em>) stoi <b>przed</b> czasownikiem, inaczej niż polskie „się”, które może wędrować po zdaniu."
      },
      {
        h: "Skąd jesteś: essere di czy venire da",
        p: "O mieście mówi się <em>sono di Varsavia</em> („jestem z Warszawy”), o kraju — <em>vengo dalla Polonia</em> albo <em>sono polacco/a</em>. Nazwy państw biorą rodzajnik (<em>la Polonia, l'Italia</em>), nazwy miast nie."
      },
      {
        trap: "Narodowość po włosku pisze się <b>małą literą</b>: <em>sono polacca</em>, <em>un ragazzo italiano</em>. Wielka litera to typowy błąd Polaków i Anglików."
      },
      {
        h: "Abitare — mieszkać",
        p: "<em>Abitare a Roma</em> (w mieście), <em>abitare in Italia</em> (w kraju). Ten sam podział a/in wraca później przy podróżowaniu, więc warto go zapamiętać od razu jako parę: <b>a + miasto, in + kraj</b>."
      }
    ],
    grammar: {
      title: "Chiamarsi (nazywać się) i pytania o osobę",
      table: {
        head: ["osoba", "chiamarsi", "przykład"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Jak się nazywasz? — Nazywam się Ewa." },
        { tr: "Skąd jesteś? — Jestem z Krakowa." },
        { tr: "Jestem Polką, ale mieszkam w Mediolanie.", note: "narodowość małą literą" },
        { tr: "Ile masz lat? — Mam dwadzieścia osiem.", note: "wiek zawsze przez avere" },
        { tr: "Miło mi, Marco. — Cała przyjemność po mojej stronie." }
      ]
    },
    vocab: [
      "nazywam się…",
      "jak się nazywasz?",
      "skąd jesteś?",
      "jestem z… (miasto)",
      "mieszkam w… (miasto)",
      "Polak / Polka",
      "Włoch / Włoszka",
      "imię",
      "nazwisko",
      "miło Cię poznać",
      "ja też",
      "naprawdę?"
    ],
    exercises: [
      {
        q: "Jak zapytasz nieformalnie o imię?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "Forma tu: <i>ti chiami</i>. Wersja przez Lei to <i>come si chiama?</i>"
      },
      {
        q: "Które zdanie jest zapisane poprawnie?",
        opts: ["Sono Polacca.", "Sono polacca.", "Sono la polacca."],
        why: "Narodowości piszemy małą literą i bez rodzajnika po essere."
      },
      { q: "Uzupełnij: „___ chiamo Marta.”", why: "Zaimek zwrotny pierwszej osoby: mi chiamo." },
      {
        q: "Uzupełnij: „Abito ___ Roma.” (Mieszkam w Rzymie.)",
        why: "Miasta biorą <b>a</b>, kraje <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Uzupełnij przedstawienie się.",
        tr: "Cześć! Nazywam się Kasia, jestem z Gdańska i mieszkam w Bolonii.",
        why: "Trzy czasowniki, które pojawiają się w każdym pierwszym zdaniu o sobie."
      },
      { tr: "Miło cię poznać, nazywam się Luca." },
      {
        q: "Poznajesz kogoś na kursie językowym.",
        setting: "Pierwszy dzień szkoły językowej we Florencji.",
        lines: [
          { tr: "Cześć! Jestem Giulia. A ty, jak się nazywasz?" },
          { tr: "Przedstaw się imieniem.", answerTr: "Nazywam się Ewa." },
          { tr: "Miło mi, Ewa! Skąd jesteś?" },
          { tr: "Powiedz, że jesteś z Polski.", answerTr: "Jestem z Polski." }
        ]
      },
      { tr: "Nazywam się Elena i mieszkam w Neapolu." },
      { tr: "Miło Cię poznać!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Gramatyka podstawowa",
    title: "Mieć oraz liczby 0-100",
    objectives: [
      "odmienić avere",
      "użyć wyrażeń typu ho fame, ho freddo, ho ventotto anni",
      "policzyć do stu i podać cenę"
    ],
    theory: [
      {
        h: "Avere robi więcej niż polskie „mieć”",
        p: "Włoski używa <strong>avere</strong> tam, gdzie polski użyłby „być”. <em>Ho fame</em> to dosłownie „mam głód”, a nie „jestem głodny”. Ta sama logika obejmuje pragnienie, zimno, gorąco, strach, sen i wiek."
      },
      {
        h: "Wiek: zawsze avere",
        p: "<em>Ho trent'anni</em> — „mam trzydzieści lat”. Zdanie <em>sono trenta</em> nie znaczy nic. Zwróć uwagę na apostrof: <em>trent'anni</em>, <em>vent'anni</em> — końcowa samogłoska dziesiątki znika przed <em>anni</em>."
      },
      {
        h: "H, którego nie słychać",
        p: "Formy <em>ho, hai, ha, hanno</em> zaczynają się od niemego <b>h</b>. Nie wymawia się go w ogóle — służy wyłącznie do odróżnienia od innych słów: <em>ho</em> (mam) kontra <em>o</em> (albo), <em>ha</em> (ma) kontra <em>a</em> (do)."
      },
      {
        h: "Liczby: dziesiątki plus jedności",
        p: "Od 20 wzwyż liczby sklejają się w jedno słowo: <em>ventidue</em>, <em>trentasei</em>. Przed <em>uno</em> i <em>otto</em> dziesiątka gubi ostatnią samogłoskę: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (mieć) i liczebniki",
      table: {
        head: ["osoba", "avere", "wyrażenie"],
        rows: [
          ["io", "ho", "Ho fame. (Jestem głodny.)"],
          ["tu", "hai", "Hai freddo? (Zimno ci?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Ma rację.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Chce nam się pić.)"],
          ["voi", "avete", "Avete tempo? (Macie czas?)"],
          ["loro", "hanno", "Hanno paura. (Boją się.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "przed uno i otto dziesiątka traci samogłoskę" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "Mam dwadzieścia osiem lat." }
      ]
    },
    vocab: [
      "jestem głodny/a",
      "chce mi się pić",
      "jest mi zimno / gorąco",
      "chce mi się spać",
      "boję się",
      "mam rację",
      "potrzebuję…",
      "ile masz lat?",
      "ile kosztuje?",
      "euro",
      "numer, liczba",
      "numer telefonu"
    ],
    exercises: [
      { why: "Cztery formy zaczynają się od niemego h: ho, hai, ha, hanno." },
      {
        q: "Jak powiesz „jestem głodny”?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Stany fizyczne wyraża się przez avere: ho fame, ho sete, ho freddo."
      },
      { q: "Ile to „settantasei”?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Zapisz cyfrą: „novantatré”", why: "novanta (90) + tre (3)." },
      {
        q: "Uzupełnij: „Ho vent___ anni.” (Mam dwadzieścia lat.)",
        hint: "coś znika przed „anni”",
        why: "Vent'anni — dziesiątka traci końcową samogłoskę przed anni."
      },
      { q: "„Ile masz lat?”", why: "Dosłownie: „ile lat masz”." },
      {
        q: "Połącz wyrażenie z avere i jego znaczeniem.",
        pairs: ["chce mi się pić", "chce mi się spać", "boję się", "mam rację"]
      },
      {
        q: "Uzupełnij dialog w kasie.",
        tr: "— Ile kosztuje? — Trzydzieści dwa euro. — Mam tylko dwadzieścia, przykro mi."
      },
      { tr: "Mam trzydzieści pięć lat i mieszkam w Turynie." },
      { tr: "Ile kosztuje cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Praca i ludzie",
    title: "Zawody i praca",
    objectives: [
      "powiedzieć, czym się zajmujesz",
      "użyć konstrukcji fare il / essere un",
      "utworzyć żeńskie formy nazw zawodów"
    ],
    theory: [
      {
        h: "Dwie konstrukcje, dwa odcienie",
        p: "„Jestem architektem” po włosku ma dwie wersje. <strong>Faccio l'architetto</strong> (dosłownie „robię architekta”) mówi o wykonywanym zawodzie i jest najczęstsze w rozmowie. <strong>Sono architetto</strong> podkreśla tożsamość albo kwalifikacje. Po <em>fare</em> stoi rodzajnik określony, po <em>essere</em> zwykle żadnego."
      },
      {
        h: "Formy żeńskie",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "bez zmiany: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Nazwy zawodów w ruchu",
        p: "Formy takie jak <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> są dziś normą w prasie i dokumentach, choć jeszcze dwadzieścia lat temu budziły spór. W mowie potocznej usłyszysz też starsze <em>l'avvocato</em> o kobiecie. Obie wersje spotkasz w praktyce."
      },
      {
        contrast: "Polskie „pracuję jako…” ma odpowiednik <em>lavoro come…</em>, ale Włosi znacznie częściej mówią po prostu <em>faccio il/la…</em>"
      }
    ],
    grammar: {
      title: "Fare (robić) — czas teraźniejszy",
      note: "Nieregularny, a jednocześnie jeden z trzech najczęstszych czasowników włoskich.",
      table: {
        head: ["osoba", "fare", "przykład"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "Czym się zajmujesz?" },
        { tr: "Jestem dziennikarką." },
        { tr: "Jestem inżynierem.", note: "po essere zwykle bez rodzajnika" },
        { tr: "Pracuję w agencji." },
        { tr: "W tej chwili nie pracuję." },
        { tr: "Jeszcze studiuję, jestem na ostatnim roku." }
      ]
    },
    vocab: [
      "praca",
      "nauczyciel/ka",
      "lekarz / lekarka",
      "inżynier",
      "adwokat / adwokatka",
      "dziennikarz/ka",
      "urzędnik / urzędniczka",
      "kucharz / kucharka",
      "sprzedawca / sprzedawczyni",
      "robotnik",
      "osoba na własnej działalności",
      "szukam pracy"
    ],
    exercises: [
      { why: "Uwaga na podwójne c w faccio i facciamo." },
      {
        q: "Które zdanie znaczy „jestem nauczycielką” i brzmi najbardziej naturalnie?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + rodzajnik określony to najczęstsza konstrukcja o zawodzie w mowie."
      },
      {
        q: "Jak brzmi żeńska forma od „il professore”?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "Wzorzec -e → -essa, jak studente → studentessa."
      },
      {
        q: "Uzupełnij: „Mia sorella fa ___ dottoressa.”",
        why: "Po fare stoi rodzajnik określony, dopasowany do rodzaju: la dottoressa."
      },
      { q: "Dobierz rodzajnik.", items: ["kucharka", "inżynier", "studentka", "robotnik"] },
      { q: "„Czym się zajmujesz?” (nieformalnie)", why: "Che lavoro fai? — dosłownie „jaką pracę robisz”." },
      {
        q: "Połącz formę męską z żeńską.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Pracuję w banku w Mediolanie." },
      { tr: "Jestem architektem, pracuję z bratem." },
      { tr: "Czym się zajmujesz? Ja jestem dziennikarką." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Gramatyka podstawowa",
    title: "Pierwsza koniugacja",
    objectives: [
      "odmienić dowolny regularny czasownik na -are",
      "poradzić sobie ze zmianami pisowni w cercare, pagare, mangiare",
      "zbudować zdanie przeczące i pytające"
    ],
    theory: [
      {
        h: "Największa i najbardziej przewidywalna grupa",
        p: "Około 70% włoskich czasowników kończy się na <strong>-are</strong>, i prawie wszystkie odmieniają się identycznie. Wystarczy odciąć końcówkę bezokolicznika i dodać sześć zakończeń: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Nauczysz się jednego wzorca i obsłużysz setki słów."
      },
      {
        h: "Akcent tam, gdzie go nie widać",
        p: "W formie <em>loro</em> akcent pada na trzecią sylabę od końca: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Nie „parla-NO”. To rozróżnienie słychać i Włosi je wychwytują."
      },
      {
        h: "Pisownia ratująca wymowę",
        list: [
          "<b>-care / -gare</b> dokładają <b>h</b> przed -i i -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> gubią <b>i</b> przed -i: <em>mangiare → mangi</em> (nie „mangii”), <em>cominciare → cominci</em>",
          "<b>-iare</b> bez akcentu też gubi jedno i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Przeczenie i pytanie bez zmian",
        p: "Przeczenie to jedno słowo <strong>non</strong> przed czasownikiem: <em>non parlo italiano</em>. Pytanie nie wymaga żadnej przebudowy zdania — wystarczy intonacja: <em>Parli italiano?</em> Włoski nie ma odpowiednika angielskiego „do”."
      }
    ],
    grammar: {
      title: "Parlare (mówić) — wzorzec -ARE",
      table: {
        head: ["osoba", "końcówka", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Mówię trochę po włosku." },
        { tr: "Nie mówię dobrze, ale rozumiem." },
        { tr: "Studiujesz na uniwersytecie?", note: "pytanie tylko intonacją" },
        { tr: "Jemy o ósmej." },
        { tr: "Szukasz pracy w Mediolanie?", note: "cercare → cerchi, z h" },
        { tr: "Oni mieszkają blisko centrum.", note: "akcent: A-bi-ta-no" }
      ]
    },
    vocab: [
      "mówić, rozmawiać",
      "pracować",
      "uczyć się, studiować",
      "mieszkać",
      "jeść",
      "kupować",
      "szukać",
      "płacić",
      "słuchać",
      "patrzeć, oglądać",
      "czekać",
      "zaczynać"
    ],
    exercises: [
      { why: "Wzorzec, który obsługuje większość włoskich czasowników." },
      {
        tr: "tu, noi — uwaga na pisownię",
        why: "Cerchi i cerchiamo dostają <b>h</b>, żeby zachować twarde k."
      },
      {
        q: "Która forma jest poprawna: „ty jesz”?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Czasowniki na -giare gubią i przed końcówką -i: mangi."
      },
      {
        q: "Uzupełnij: „Loro ___ a Bologna.” (Oni mieszkają w Bolonii.)",
        why: "abitare, forma loro: -ano."
      },
      {
        q: "Zaprzecz: „Parlo italiano.” → „___ parlo italiano.”",
        why: "Jedno słowo non przed czasownikiem — to całe przeczenie."
      },
      { q: "„Szukamy mieszkania w Rzymie.”", why: "cercare → cerchiamo (z h), a + miasto." },
      {
        q: "Które formy należą do „studiare”?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "„Studii” nie istnieje — podwójne i się redukuje."
      },
      { tr: "Nie pracuję w soboty.", why: "„Il sabato” z rodzajnikiem znaczy „w soboty”, regularnie." },
      { tr: "Uczę się włoskiego od trzech miesięcy." },
      { tr: "Nie mówię dobrze, ale rozumiem prawie wszystko." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 2",
    objectives: ["sprawdzić avere, fare, chiamarsi, liczby i pierwszą koniugację"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„___ chiamo Piotr.”" },
      { q: "„Quanti anni ___?” (Ile masz lat?)" },
      { q: "Ile to „ottantaquattro”?", opts: ["48", "84", "94"] },
      { q: "„Jestem głodny” po włosku:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Która forma jest poprawna: „ty płacisz”?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare dokłada h przed -i."
      },
      { q: "Uzupełnij.", tr: "Jestem Polką, mieszkam w Weronie i jestem nauczycielką." },
      { q: "„Nie mówię po włosku.”" },
      { tr: "Mam dwadzieścia siedem lat i szukam pracy." },
      { tr: "Nazywam się Anna i jestem dziennikarką." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo i jedzenie",
    grammarNote: "piacere · rodzajnik cząstkowy · -ere i -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Jedzenie",
    title: "Czasownik piacere",
    objectives: [
      "powiedzieć, co lubisz i czego nie lubisz",
      "wybrać między piace a piacciono",
      "zapytać o czyjeś upodobania"
    ],
    theory: [
      {
        h: "Zdanie stoi na głowie",
        p: "<strong>Piacere</strong> nie znaczy „lubić”, tylko „podobać się”. <em>Mi piace la pizza</em> to dosłownie „pizza podoba się mnie”. Podmiotem gramatycznym jest <b>rzecz</b>, a osoba, która lubi, występuje jako dopełnienie dalsze (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Dlatego czasownik ma dwie formy",
        p: "Skoro podmiotem jest rzecz, to ona decyduje o liczbie: <em>mi piace <b>il</b> caffè</em> (jedna rzecz) kontra <em>mi piacciono <b>gli</b> spaghetti</em> (wiele rzeczy). Przed bezokolicznikiem zawsze liczba pojedyncza: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Polski ma dokładnie ten sam mechanizm w czasowniku „podobać się”: „podoba mi się film”, „podobają mi się filmy”. Jeśli oprzesz włoskie zdanie na polskim „podoba mi się” zamiast na „lubię”, przestaniesz się mylić."
      },
      {
        h: "Kto lubi: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — mnie",
          "<b>ti</b> piace — tobie",
          "<b>gli</b> piace — jemu; <b>le</b> piace — jej",
          "<b>ci</b> piace — nam · <b>vi</b> piace — wam · <b>gli</b> piace — im"
        ]
      },
      {
        trap: "Przeczenie stawia się przed zaimkiem, nie przed czasownikiem: <b>non</b> mi piace. Nie „mi non piace”."
      }
    ],
    grammar: {
      title: "Piacere — schemat zdania",
      note: "[zaimek] + piace/piacciono + [rzecz z rodzajnikiem]",
      table: {
        head: ["co lubimy", "forma", "przykład"],
        rows: [
          ["jedna rzecz", "piace", "Mi piace il vino rosso."],
          ["wiele rzeczy", "piacciono", "Mi piacciono i dolci."],
          ["czynność", "piace", "Mi piace cucinare."],
          ["przeczenie", "non … piace", "Non mi piace il pesce crudo."],
          ["pytanie", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "Bardzo lubię kawę." },
        { tr: "Lubisz spritze?" },
        { tr: "Nie lubimy ciepłego piwa." },
        { tr: "Ona lubi tańczyć." },
        { tr: "Marco lubi ryby.", note: "z imieniem dodaje się „a”" },
        { tr: "Chętnie bym spróbował.", note: "forma warunkowa — zapamiętaj jako zwrot" }
      ]
    },
    vocab: [
      "aperitif (drink + przekąski)",
      "spritz",
      "wino czerwone / białe",
      "piwo",
      "oliwki",
      "chipsy / frytki",
      "słone przekąski",
      "szynka",
      "ser",
      "słodycze, desery",
      "ryba",
      "mięso",
      "gotować",
      "spróbować, skosztować"
    ],
    culture: {
      title: "Okiem Włocha: aperitivo to nie kolacja",
      text: "<p><b>Aperitivo</b> zaczyna się około 18:30 i trwa do 20:30. Płacisz za drinka (7-12 euro w zależności od miasta), a jedzenie przy barze jest w cenie. W Mediolanie rozrósł się do bufetu zwanego <i>apericena</i> — pół drogi do kolacji.</p><p>Zasada, o której nikt nie mówi: <b>bierze się rozsądnie</b>. Talerz ułożony w kopiec zdradza obcokrajowca szybciej niż akcent.</p><p>Klasyki: <i>spritz</i> (Aperol lub Campari), <i>negroni</i>, kieliszek wina. Piwo też uchodzi, choć puryści kręcą nosem.</p>"
    },
    exercises: [
      {
        q: "„___ piacciono le olive.” Dlaczego piacciono, a nie piace?",
        opts: ["Bo mówi o wielu osobach", "Bo „le olive” jest w liczbie mnogiej", "Bo to czas przeszły"],
        why: "Czasownik zgadza się z rzeczą, która się podoba — a ta jest w liczbie mnogiej."
      },
      { q: "Uzupełnij: „Mi ___ il vino rosso.”", why: "Jedna rzecz w liczbie pojedynczej → piace." },
      { q: "Uzupełnij: „Non mi ___ i film horror.”", why: "„I film” to liczba mnoga → piacciono." },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non stoi przed całą grupą zaimek + czasownik."
      },
      {
        q: "Jak powiesz „Marco lubi ryby”?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Przed imieniem osoby, która lubi, stawia się przyimek <b>a</b>."
      },
      { q: "„Lubię gotować.”", why: "Przed bezokolicznikiem zawsze piace w liczbie pojedynczej." },
      { q: "Połącz zaimek z osobą.", pairs: ["mnie się podoba", "tobie", "jej", "nam"] },
      {
        q: "Uzupełnij rozmowę przy aperitivo.",
        tr: "— Lubisz spritz? — Tak, bardzo! Ale nie lubię oliwek."
      },
      { tr: "Bardzo lubię włoskie sery." },
      { tr: "Lubię aperitivo, ale nie lubię oliwek." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Gramatyka podstawowa",
    title: "Druga koniugacja i c'è / ci sono",
    objectives: [
      "odmienić regularne czasowniki na -ere",
      "użyć c'è i ci sono",
      "opisać, co się gdzieś znajduje"
    ],
    theory: [
      {
        h: "Prawie jak -are, ale nie do końca",
        p: "Grupa <strong>-ere</strong> różni się od pierwszej tylko trzema końcówkami: <em>-e</em> zamiast <em>-a</em>, <em>-ete</em> zamiast <em>-ate</em>, <em>-ono</em> zamiast <em>-ano</em>. Forma <em>noi</em> (<em>-iamo</em>) jest wspólna dla wszystkich trzech koniugacji — to najłatwiejsza końcówka we włoskim."
      },
      {
        h: "Tu ukrywa się większość nieregularnych",
        p: "Wiele bardzo częstych czasowników na -ere ma nietypowe formy — <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Ich nieregularność ujawnia się przede wszystkim w czasie przeszłym i w imiesłowie, do czego dojdziemy na poziomie A2."
      },
      {
        h: "C'è i ci sono",
        p: "<strong>C'è</strong> („jest, znajduje się”) i <strong>ci sono</strong> („są”) opisują istnienie czegoś w danym miejscu. Wybór zależy od liczby rzeczy, nie od osoby: <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        trap: "Nie myl <b>c'è</b> (jest gdzieś) z <b>è</b> (jest jakieś). <em>Il ristorante è chiuso</em> — restauracja jest zamknięta. <em>C'è un ristorante qui vicino</em> — jest tu w pobliżu restauracja."
      }
    ],
    grammar: {
      title: "Leggere (czytać) — wzorzec -ERE",
      table: {
        head: ["osoba", "końcówka", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Poproszę kawę.", note: "„prendere” to najczęstszy czasownik przy zamawianiu" },
        { tr: "Czytasz menu?" },
        { tr: "Nie widzę kelnera." },
        { tr: "Jest wolny stolik?" },
        { tr: "Są dwa miejsca przy barze." },
        { tr: "Wpisujemy nazwisko do rezerwacji." }
      ]
    },
    vocab: [
      "brać, zamawiać",
      "czytać",
      "pisać",
      "widzieć",
      "pytać, prosić",
      "odpowiadać",
      "kłaść",
      "zamykać",
      "jest / są",
      "miejsce",
      "wolny / zajęty",
      "tu w pobliżu"
    ],
    exercises: [
      { why: "Zwróć uwagę na -e, -ete, -ono — to cała różnica wobec grupy -are." },
      {
        q: "Która końcówka jest wspólna dla wszystkich trzech koniugacji?",
        opts: ["-o w formie io", "-iamo w formie noi", "-ono w formie loro"],
        why: "Forma noi to zawsze -iamo, niezależnie od grupy."
      },
      { q: "Uzupełnij: „___ un tavolo libero?” (Jest wolny stolik?)", why: "Jeden stolik → c'è." },
      {
        q: "Uzupełnij: „___ tre persone in fila.” (Są trzy osoby w kolejce.)",
        why: "Liczba mnoga → ci sono."
      },
      {
        q: "„Il bar è chiuso” a „C'è un bar qui vicino” — co je różni?",
        opts: [
          "Nic, to synonimy",
          "Pierwsze opisuje cechę baru, drugie stwierdza jego istnienie w okolicy",
          "Drugie jest w czasie przeszłym"
        ],
        why: "è opisuje, c'è stwierdza obecność czegoś w miejscu."
      },
      { q: "„Biorę piwo, a ty?”", why: "Prendere jest we Włoszech domyślnym czasownikiem zamawiania." },
      {
        q: "Które czasowniki należą do grupy -ere?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Nie widzę kelnera." },
      { tr: "Jest wolny stolik dla dwóch osób?" },
      { tr: "Poprosimy dwa spritze." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Gramatyka podstawowa",
    title: "Trzecia koniugacja i wzorzec -isc-",
    objectives: [
      "odmienić czasowniki typu dormire i typu capire",
      "rozpoznać, które -ire wymagają wstawki -isc-",
      "użyć preferire do wyrażania preferencji"
    ],
    theory: [
      {
        h: "Jedna końcówka, dwa zachowania",
        p: "Czasowniki na <strong>-ire</strong> dzielą się na dwie podgrupy. Pierwsza (<em>dormire, partire, sentire, aprire, offrire</em>) odmienia się wprost. Druga (<em>capire, finire, preferire, pulire, spedire</em>) wstawia <b>-isc-</b> w czterech formach: <em>io, tu, lui/lei, loro</em>. Formy <em>noi</em> i <em>voi</em> zostają bez wstawki."
      },
      {
        h: "Skąd wiadomo, która to grupa",
        p: "Reguły nie ma — trzeba zapamiętać. Pomaga to, że grupa z <em>-isc-</em> jest liczniejsza i zawiera prawie wszystkie nowsze czasowniki (<em>gestire, inserire, garantire</em>). Słowniki oznaczają ją skrótem <i>(-isc-)</i> przy haśle."
      },
      {
        tip: "Wzorzec z -isc- ma kształt klamry: cztery formy z wstawką na zewnątrz, dwie bez niej w środku. Zapamiętaj rytm: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      },
      {
        h: "Preferire — bardzo przydatny czasownik",
        p: "<em>Preferisco il vino bianco</em> („wolę białe wino”) to zwrot, którego użyjesz w każdej restauracji i sklepie. Buduje się go z rzeczownikiem albo z bezokolicznikiem: <em>preferisco restare a casa</em>."
      }
    ],
    grammar: {
      title: "Dormire (bez -isc-) kontra capire (z -isc-)",
      table: {
        head: ["osoba", "dormire", "capire", "po polsku"],
        rows: [
          ["io", "dormo", "capisco", "śpię / rozumiem"],
          ["tu", "dormi", "capisci", "śpisz / rozumiesz"],
          ["lui / lei", "dorme", "capisce", "śpi / rozumie"],
          ["noi", "dormiamo", "capiamo", "śpimy / rozumiemy"],
          ["voi", "dormite", "capite", "śpicie / rozumiecie"],
          ["loro", "dormono", "capiscono", "śpią / rozumieją"]
        ]
      },
      examples: [
        { tr: "Nie rozumiem, może pan powtórzyć?" },
        { tr: "Wolę stolik na zewnątrz." },
        { tr: "O której kończysz pracę?" },
        { tr: "Sklep otwiera się o dziewiątej.", note: "aprire — bez -isc-" },
        { tr: "Wyjeżdżamy jutro rano." },
        { tr: "Oni rozumieją wszystko." }
      ]
    },
    vocab: [
      "rozumieć",
      "kończyć",
      "woleć",
      "sprzątać",
      "wysyłać",
      "spać",
      "wyjeżdżać",
      "otwierać",
      "oferować, stawiać",
      "słyszeć, czuć",
      "śledzić, iść za",
      "może pan/pani powtórzyć?"
    ],
    exercises: [
      { why: "Klamra: -isc- w io, tu, lui/lei i loro; brak w noi i voi." },
      { why: "Dormire idzie wprost, bez wstawki." },
      {
        q: "Który czasownik wymaga wstawki -isc-?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Uzupełnij: „Noi non ___ bene.” (Nie rozumiemy dobrze.)",
        hint: "forma noi nie ma wstawki",
        why: "Capiamo — w formie noi i voi -isc- znika."
      },
      { q: "Uzupełnij: „Loro ___ alle sette.” (Kończą o siódmej.)", why: "finire z -isc- w formie loro." },
      { q: "„Wolę stolik na zewnątrz.”" },
      { q: "Które formy zawierają -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Nie rozumiem, może pani powtórzyć?" },
      { tr: "Wolę wyjechać jutro wcześnie rano." },
      { tr: "Przepraszam, nie rozumiem. Może pan powtórzyć?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Jedzenie",
    title: "Rodzajnik cząstkowy i ilości",
    objectives: [
      "wyrazić nieokreśloną ilość przez del, della, dei…",
      "użyć un po' di i un chilo di",
      "poprosić o produkty w sklepie"
    ],
    theory: [
      {
        h: "Trochę czegoś — bez słowa „trochę”",
        p: "Włoski wyraża nieokreśloną ilość przez <strong>rodzajnik cząstkowy</strong>: przyimek <em>di</em> zlany z rodzajnikiem określonym. <em>Vorrei del pane</em> — „poproszę (trochę) chleba”. W liczbie mnogiej odpowiada polskiemu „jakieś, kilka”: <em>dei pomodori</em> — „pomidorów”."
      },
      {
        h: "Formy",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Alternatywy",
        p: "Zamiast rodzajnika cząstkowego można użyć <strong>un po' di</strong> („trochę”) albo miary: <em>un chilo di, un etto di, mezzo litro di</em>. W przeczeniu rodzajnik cząstkowy zwykle znika: <em>non ho pane</em>, nie „non ho del pane”."
      },
      {
        contrast: "Polski dopełniacz cząstkowy („kup chleba”, nie „kup chleb”) robi dokładnie to samo, tylko końcówką zamiast przyimkiem. To dobra kotwica: gdzie po polsku powiesz „chleba”, po włosku będzie <em>del pane</em>."
      },
      {
        tip: "<b>Un etto</b> to 100 gramów i jest podstawową jednostką przy ladzie: <em>due etti di prosciutto</em> = 200 g szynki."
      }
    ],
    grammar: {
      title: "Rodzajnik cząstkowy i wyrażenia ilości",
      table: {
        head: ["kontekst", "forma", "przykład"],
        rows: [
          ["m. + spółgłoska", "del", "del pane"],
          ["m. + s+sp., z", "dello", "dello zucchero"],
          ["+ samogłoska", "dell'", "dell'acqua, dell'olio"],
          ["ż. + spółgłoska", "della", "della carne"],
          ["m. l.mn.", "dei / degli", "dei pomodori, degli spinaci"],
          ["ż. l.mn.", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Poproszę chleba." },
        { tr: "Kupuję jabłka i winogrona." },
        { tr: "Trochę soli, nie za dużo." },
        { tr: "Dwadzieścia deko szynki surowej." },
        { tr: "Pół litra mleka." },
        { tr: "Nie mam cukru w domu.", note: "w przeczeniu bez rodzajnika cząstkowego" }
      ]
    },
    vocab: [
      "chleb",
      "mleko",
      "woda",
      "cukier",
      "sól",
      "oliwa, olej",
      "pomidory",
      "jabłka",
      "sto gramów",
      "kilogram",
      "trochę",
      "pół litra",
      "wystarczy, dziękuję",
      "ile pan/pani chce?"
    ],
    exercises: [
      {
        q: "Jak poprosisz o (trochę) chleba?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "Rodzajnik cząstkowy <b>del</b> wyraża nieokreśloną ilość."
      },
      {
        q: "Uzupełnij: „Compro ___ acqua.” (Kupuję wodę.)",
        why: "di + l' = dell', bo acqua zaczyna się od samogłoski."
      },
      {
        q: "Uzupełnij: „Vorrei ___ mele.” (Poproszę jabłka.)",
        why: "di + le = delle, rodzaj żeński w liczbie mnogiej."
      },
      {
        q: "Dobierz rodzajnik cząstkowy.",
        items: ["chleb", "cukier", "mięso", "oliwa", "pomidory", "szpinak"]
      },
      {
        q: "Ile to „due etti”?",
        opts: ["20 gramów", "200 gramów", "2 kilogramy"],
        why: "Un etto to 100 g, więc due etti = 200 g."
      },
      { q: "„Poproszę pół litra mleka.”" },
      {
        q: "Jesteś przy ladzie w sklepie spożywczym.",
        setting: "Alimentari w dzielnicy, przy ladzie z wędlinami.",
        lines: [
          { tr: "Dzień dobry! Słucham." },
          { tr: "Poproś o 200 g szynki.", answerTr: "Dwadzieścia deko szynki poproszę." },
          { tr: "Proszę. Coś jeszcze?" },
          { tr: "Poproś jeszcze o chleb.", answerTr: "Jeszcze chleba, dziękuję." }
        ]
      },
      { q: "Uzupełnij listę zakupów.", tr: "Kupuję chleb, wodę i pomidory." },
      { tr: "Poproszę kilogram pomidorów i trochę bazylii." },
      { tr: "Dwadzieścia deko sera poproszę. To wszystko." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 3",
    objectives: ["sprawdzić piacere, koniugacje -ere i -ire, rodzajnik cząstkowy"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Mi ___ gli spaghetti.” (Lubię spaghetti.)" },
      { q: "„Non mi ___ il pesce crudo.”" },
      {
        q: "„Marco lubi wino” to:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "„___ due posti liberi.” (Są dwa wolne miejsca.)" },
      { q: "Rodzajnik cząstkowy:", items: [, , , ] },
      { q: "„Wolę białe wino.”" },
      { tr: "Są oliwki i ser." },
      { tr: "Bardzo lubię włoskie aperitivo." }
    ]
  }
});
