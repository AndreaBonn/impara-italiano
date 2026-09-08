/* ============================================================
   A1 — część 2: jednostki 4–7
   Vetrine e taglie · La giornata · In città · A tavola
   ============================================================ */
LINGUAI.addUnits("A1", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 4 — VETRINE E TAGLIE
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u04",
  icon: "👗",
  titleIt: "Vetrine e taglie",
  titlePl: "Moda i rozmiary",
  grammarPl: "przymiotniki · kolory · questo/quello",
  lessons: [
  {
    id: "a1-u04-l1",
    cefr: "A1",
    themePl: "Moda i zakupy",
    titleIt: "Rosso, rossa, rossi",
    titlePl: "Zgodność przymiotnika i kolory",
    objectivesPl: [
      "dopasować końcówkę przymiotnika do rzeczownika",
      "nazwać kolory i wiedzieć, które się nie odmieniają",
      "opisać ubranie na wystawie"
    ],
    theory: [
      { h: "Przymiotnik chodzi za rzeczownikiem i dopasowuje się do niego",
        p: "Włoski przymiotnik stoi zwykle <b>po</b> rzeczowniku i przejmuje jego rodzaj oraz liczbę: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. To odwrotnie niż po polsku, gdzie mówimy „czerwona torba”." },
      { h: "Dwie klasy końcówek",
        list: [
          "<b>cztery formy</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>dwie formy</b> (-e / -i): <em>verde, verdi</em> — ta sama forma dla obu rodzajów",
          "<b>bez odmiany</b>: <em>blu, rosa, viola, beige</em> oraz zapożyczenia (<em>chic</em>)"
        ] },
      { trap: "Przy grupie mieszanej rodzajowo wygrywa rodzaj męski: <em>Marco e Anna sono <b>italiani</b></em>. Jedna kobieta w grupie stu mężczyzn niczego nie zmienia; jeden mężczyzna w grupie stu kobiet przełącza całość na męski." },
      { h: "Kolory, które kiedyś były rzeczownikami",
        p: "<em>Rosa</em> (róża), <em>viola</em> (fiołek), <em>arancione</em> (od pomarańczy) pochodzą od nazw roślin — dlatego <em>rosa</em> i <em>viola</em> się nie odmieniają. <em>Marrone</em> teoretycznie należy do tej grupy, ale w praktyce Włosi mówią też <em>scarpe marroni</em> i nikt tego nie poprawia." }
    ],
    grammar: {
      title: "Zgodność przymiotnika",
      table: {
        head: ["rzeczownik", "typ -o", "typ -e", "nieodmienny"],
        rows: [
          ["il vestito (m poj.)", "nero", "verde", "blu"],
          ["la gonna (ż poj.)", "nera", "verde", "blu"],
          ["i pantaloni (m mn.)", "neri", "verdi", "blu"],
          ["le scarpe (ż mn.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        ["Vorrei una camicia bianca.", "Poproszę białą koszulę."],
        ["Queste scarpe sono troppo strette.", "Te buty są za ciasne."],
        ["Un cappotto blu, taglia media.", "Niebieski płaszcz, rozmiar średni.", "blu się nie odmienia"],
        ["I pantaloni verdi non mi stanno bene.", "Zielone spodnie na mnie źle leżą."],
        ["Che bella giacca!", "Jaka ładna marynarka!"]
      ]
    },
    vocab: [
      { it: "il vestito", pl: "sukienka; ubranie" },
      { it: "la gonna", pl: "spódnica" },
      { it: "i pantaloni", pl: "spodnie (zawsze l. mn.)" },
      { it: "la camicia", pl: "koszula" },
      { it: "la maglietta", pl: "koszulka" },
      { it: "la giacca", pl: "marynarka, kurtka" },
      { it: "il cappotto", pl: "płaszcz" },
      { it: "le scarpe", pl: "buty" },
      { it: "rosso / rossa", pl: "czerwony / czerwona" },
      { it: "nero / nera", pl: "czarny / czarna" },
      { it: "bianco / bianca", pl: "biały / biała" },
      { it: "verde", pl: "zielony (bez zmiany rodzaju)" },
      { it: "blu", pl: "niebieski (nieodmienny)" },
      { it: "grigio / grigia", pl: "szary / szara" }
    ],
    exercises: [
      { t: "mcq", q: "„La gonna” jest rodzaju żeńskiego. Jak napiszesz „czarna”?",
        opts: ["nero", "nera", "nere"], a: 1, why: "Rodzaj żeński, liczba pojedyncza → nera." },
      { t: "mcq", q: "Który przymiotnik ma tę samą formę dla obu rodzajów?",
        opts: ["rosso", "verde", "grigio"], a: 1, why: "Przymiotniki na -e mają dwie formy: verde / verdi." },
      { t: "fill", q: "Uzupełnij: „Le scarpe ___.” (czarne buty)", a: ["nere"],
        why: "Scarpe to rodzaj żeński w liczbie mnogiej → nere." },
      { t: "fill", q: "Uzupełnij: „I pantaloni ___.” (niebieskie spodnie)", a: ["blu"],
        why: "Blu jest nieodmienny — nigdy „blui”." },
      { t: "cloze", q: "Uzupełnij końcówki.",
        text: "Vorrei una camicia bianc{{1}} e due magliette ner{{2}}.",
        gaps: [["a"], ["e"]],
        pl: "Poproszę białą koszulę i dwie czarne koszulki." },
      { t: "mcq", q: "„Marco e Anna sono ___.” (Włochami)",
        opts: ["italiane", "italiani", "italiano"], a: 1,
        why: "Grupa mieszana rodzajowo bierze formę męską liczby mnogiej." },
      { t: "match", q: "Połącz ubranie z tłumaczeniem.",
        pairs: [["la gonna", "spódnica"], ["il cappotto", "płaszcz"], ["la giacca", "marynarka"], ["le scarpe", "buty"]] },
      { t: "order", pl: "Te buty są za ciasne.",
        tokens: ["Queste", "scarpe", "sono", "troppo", "strette"], a: ["queste scarpe sono troppo strette"] },
      { t: "listen", it: "Vorrei una giacca grigia, taglia media.", pl: "Poproszę szarą marynarkę, rozmiar średni." },
      { t: "speak", it: "Che bella camicia bianca!", pl: "Jaka ładna biała koszula!" }
    ]
  },
  {
    id: "a1-u04-l2",
    cefr: "A1",
    themePl: "Moda i zakupy",
    titleIt: "Questo o quello?",
    titlePl: "Zaimki wskazujące",
    objectivesPl: [
      "odróżnić questo od quello",
      "odmienić obie formy",
      "wskazać rzecz w sklepie bez pokazywania palcem"
    ],
    theory: [
      { h: "Blisko i daleko",
        p: "<strong>Questo</strong> to rzecz blisko mówiącego („ten tutaj”), <strong>quello</strong> — dalej („tamten”). Włoski nie ma trzeciego stopnia, którego używałby na co dzień (dawne <em>codesto</em> zostało w Toskanii i w języku urzędowym)." },
      { h: "Questo odmienia się prosto",
        p: "<em>questo, questa, questi, queste</em>. Przed samogłoską skraca się w mowie i piśmie: <em>quest'anno</em>, <em>quest'estate</em>." },
      { h: "Quello zachowuje się jak rodzajnik",
        p: "Kiedy stoi <b>przed rzeczownikiem</b>, <em>quello</em> przybiera formy równoległe do <em>il / lo / la / i / gli / le</em>: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Kiedy stoi samodzielnie (bez rzeczownika), ma zwykłe cztery formy: <em>Prendo quello.</em>" },
      { pl: "Polskie „ten / tamten” działa podobnie, ale nie zmienia się w zależności od pierwszej głoski następnego słowa. To właśnie <em>quello</em> sprawia najwięcej kłopotu — traktuj je jak rodzajnik, nie jak przymiotnik." }
    ],
    grammar: {
      title: "Questo i quello",
      table: {
        head: ["rodzajnik", "quello + rzeczownik", "questo", "przykład"],
        rows: [
          ["il", "quel", "questo", "quel cappotto / questo cappotto"],
          ["lo", "quello", "questo", "quello zaino"],
          ["l' (m)", "quell'", "quest'", "quell'orologio"],
          ["i", "quei", "questi", "quei pantaloni"],
          ["gli", "quegli", "questi", "quegli stivali"],
          ["la", "quella", "questa", "quella gonna"],
          ["le", "quelle", "queste", "quelle scarpe"]
        ]
      },
      examples: [
        ["Quanto costa questa borsa?", "Ile kosztuje ta torebka?"],
        ["Preferisco quel cappotto lì.", "Wolę tamten płaszcz."],
        ["Quegli stivali sono in saldo.", "Tamte kozaki są na wyprzedaży."],
        ["Prendo questo, grazie.", "Wezmę to, dziękuję.", "samodzielne — zwykłe formy"],
        ["Quest'anno la moda è minimalista.", "W tym roku moda jest minimalistyczna."]
      ]
    },
    vocab: [
      { it: "la taglia", pl: "rozmiar (ubrania)" },
      { it: "il numero", pl: "rozmiar (butów)" },
      { it: "il camerino", pl: "przymierzalnia" },
      { it: "provare", pl: "przymierzyć" },
      { it: "i saldi", pl: "wyprzedaże" },
      { it: "lo sconto", pl: "zniżka" },
      { it: "la vetrina", pl: "witryna sklepowa" },
      { it: "caro / a buon mercato", pl: "drogi / tani" },
      { it: "stretto / largo", pl: "ciasny / luźny" },
      { it: "posso provare?", pl: "mogę przymierzyć?" },
      { it: "mi sta bene", pl: "dobrze na mnie leży" },
      { it: "avete la taglia M?", pl: "macie rozmiar M?" }
    ],
    dialogue: {
      titleIt: "In negozio",
      lines: [
        { who: "🙋", it: "Scusi, posso provare questa camicia?", pl: "Przepraszam, mogę przymierzyć tę koszulę?" },
        { who: "👩‍💼", it: "Certo. Che taglia porta?", pl: "Oczywiście. Jaki nosi pani rozmiar?" },
        { who: "🙋", it: "La media. Avete anche quel modello blu?", pl: "Średni. Macie też tamten niebieski model?" },
        { who: "👩‍💼", it: "Sì, ma solo nella taglia large. Il camerino è là in fondo.", pl: "Tak, ale tylko w rozmiarze L. Przymierzalnia jest tam w głębi." },
        { who: "🙋", it: "Grazie. Questa mi sta un po' stretta.", pl: "Dziękuję. Ta jest na mnie trochę ciasna." }
      ]
    },
    exercises: [
      { t: "mcq", q: "Który wariant jest poprawny przed „zaino”?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"], a: 1,
        why: "Quello zachowuje się jak <i>lo</i>: przed z i s+spółgłoska daje <b>quello</b>." },
      { t: "fill", q: "Uzupełnij: „___ scarpe sono in saldo.” (tamte buty)", a: ["quelle"],
        why: "Rodzaj żeński liczba mnoga: le → quelle." },
      { t: "fill", q: "Uzupełnij: „___ anno vado in Italia.” (w tym roku)", a: ["quest'"],
        why: "Questo przed samogłoską skraca się do quest'." },
      { t: "gender", q: "Dobierz właściwą formę „quello”.",
        opts: ["quel", "quello", "quell'", "quei", "quegli", "quella", "quelle"],
        items: [["cappotto", "quel", "płaszcz"], ["stivali", "quegli", "kozaki"], ["gonna", "quella", "spódnica"], ["pantaloni", "quei", "spodnie"], ["orologio", "quell'", "zegarek"]] },
      { t: "mcq", q: "„Prendo quello.” Dlaczego nie „quel”?",
        opts: ["Bo to błąd", "Bo quello stoi samodzielnie, bez rzeczownika", "Bo to liczba mnoga"], a: 1,
        why: "Formy skrócone (quel, quei, quegli) istnieją tylko przed rzeczownikiem." },
      { t: "trans", dir: "pl-it", q: "„Ile kosztuje ta torebka?”",
        a: ["quanto costa questa borsa", "quanto costa questa borsa?"] },
      { t: "order", pl: "Mogę przymierzyć tamtą marynarkę?",
        tokens: ["Posso", "provare", "quella", "giacca?"], a: ["posso provare quella giacca"] },
      { t: "dialogue", q: "Jesteś w sklepie z ubraniami.",
        setting: "Sklep w centrum, okres wyprzedaży.",
        lines: [
          { sp: "A", it: "Buongiorno, cerca qualcosa in particolare?", pl: "Dzień dobry, szuka pani czegoś konkretnego?" },
          { sp: "TY", pl: "Zapytaj, czy możesz przymierzyć tę spódnicę.", choices: ["Posso provare questa gonna?", "Posso provare quel gonna?", "Provo questo gonna?"], a: 0, plAnswer: "Mogę przymierzyć tę spódnicę?" },
          { sp: "A", it: "Certo. Che taglia?", pl: "Oczywiście. Jaki rozmiar?" },
          { sp: "TY", pl: "Powiedz, że rozmiar średni.", choices: ["La media, grazie.", "Il medio, grazie.", "Media taglia."], a: 0, plAnswer: "Średni, dziękuję." }
        ] },
      { t: "listen", it: "Quegli stivali neri sono in saldo.", pl: "Tamte czarne kozaki są na wyprzedaży." },
      { t: "speak", it: "Scusi, avete questa camicia nella taglia media?", pl: "Przepraszam, macie tę koszulę w rozmiarze M?" }
    ]
  },
  {
    id: "a1-u04-l3",
    cefr: "A1",
    themePl: "Moda i zakupy",
    titleIt: "Quanto costa?",
    titlePl: "Ceny, liczby powyżej stu, płacenie",
    objectivesPl: [
      "zapytać o cenę i zrozumieć odpowiedź",
      "policzyć powyżej stu",
      "zapłacić kartą lub gotówką"
    ],
    theory: [
      { h: "Liczby powyżej stu",
        p: "<em>Cento</em> nie zmienia formy: <em>duecento, trecento</em>. <em>Mille</em> w liczbie mnogiej staje się <em>-mila</em>: <em>duemila, tremila</em>. Kropka i przecinek działają odwrotnie niż w polskim tylko w zapisie cyfrowym: Włosi piszą <em>1.500</em> i <em>2,50</em>, tak samo jak my." },
      { h: "Ceny mówi się skrótowo",
        p: "<em>Due e cinquanta</em> = 2,50 €. Słowo <em>euro</em> często wypada, a jeśli zostaje, nie odmienia się: <em>trenta euro</em>, nigdy „euri”." },
      { h: "Płatność",
        p: "<em>In contanti</em> (gotówką) albo <em>con la carta</em> (kartą). Warto znać <em>lo scontrino</em> (paragon) i <em>la ricevuta</em> (pokwitowanie): we Włoszech paragon ma znaczenie prawne i sprzedawca musi go wydać." },
      { tip: "<em>Quanto costa?</em> dotyczy jednej rzeczy, <em>quanto costano?</em> wielu. <em>Quant'è?</em> to „ile razem?” przy kasie." }
    ],
    grammar: {
      title: "Liczby i pytanie o cenę",
      table: {
        head: ["zapis", "po włosku", "uwaga"],
        rows: [
          ["100 / 200", "cento / duecento", "cento się nie odmienia"],
          ["1000 / 2000", "mille / duemila", "mille → -mila w liczbie mnogiej"],
          ["1500", "millecinquecento", "pisane łącznie"],
          ["2,50 €", "due e cinquanta", "euro często się pomija"],
          ["ile kosztuje?", "quanto costa?", "jedna rzecz"],
          ["ile kosztują?", "quanto costano?", "wiele rzeczy"]
        ]
      },
      examples: [
        ["Quanto costa questa borsa? — Ottantacinque euro.", "Ile kosztuje ta torebka? — Osiemdziesiąt pięć euro."],
        ["Quant'è in tutto?", "Ile razem?"],
        ["Posso pagare con la carta?", "Mogę zapłacić kartą?"],
        ["Solo contanti, mi dispiace.", "Tylko gotówka, przykro mi."],
        ["Mi dà lo scontrino, per favore?", "Poproszę paragon."],
        ["C'è uno sconto del venti per cento.", "Jest dwadzieścia procent zniżki."]
      ]
    },
    vocab: [
      { it: "quanto costa? / costano?", pl: "ile kosztuje / kosztują?" },
      { it: "quant'è?", pl: "ile razem?" },
      { it: "in contanti", pl: "gotówką" },
      { it: "con la carta", pl: "kartą" },
      { it: "lo scontrino", pl: "paragon" },
      { it: "il resto", pl: "reszta" },
      { it: "cento / mille", pl: "sto / tysiąc" },
      { it: "il per cento", pl: "procent" },
      { it: "è troppo caro", pl: "to za drogo" },
      { it: "un affare", pl: "okazja" },
      { it: "il prezzo", pl: "cena" },
      { it: "gratis", pl: "za darmo" }
    ],
    exercises: [
      { t: "mcq", q: "Ile to „millecinquecento”?", opts: ["150", "1500", "15000"], a: 1 },
      { t: "mcq", q: "Która forma jest poprawna?", opts: ["trenta euri", "trenta euro", "trente euro"], a: 1,
        why: "Euro nie odmienia się w liczbie mnogiej." },
      { t: "fill", q: "Zapisz cyfrą: „duemilaventicinque”", a: ["2025"] },
      { t: "fill", q: "Uzupełnij: „___ costano queste scarpe?”", a: ["quanto"],
        why: "Quanto nie odmienia się w tym pytaniu, ale czasownik tak: costano (liczba mnoga)." },
      { t: "trans", dir: "pl-it", q: "„Mogę zapłacić kartą?”",
        a: ["posso pagare con la carta", "posso pagare con la carta?", "si può pagare con la carta"] },
      { t: "mcq", q: "Sprzedawca mówi „Sono ventidue e cinquanta”. Ile płacisz?",
        opts: ["22,50 €", "2,25 €", "225 €"], a: 0 },
      { t: "cloze", q: "Uzupełnij rozmowę przy kasie.",
        text: "— {{1}} in tutto? — Quarantatré euro. — Posso pagare {{2}} la carta?",
        gaps: [["quant'è", "quanto è"], ["con"]],
        pl: "— Ile razem? — Czterdzieści trzy euro. — Mogę zapłacić kartą?" },
      { t: "match", q: "Połącz zwroty.",
        pairs: [["lo scontrino", "paragon"], ["il resto", "reszta"], ["in contanti", "gotówką"], ["gratis", "za darmo"]] },
      { t: "listen", it: "Sono centoventi euro, con lo sconto del dieci per cento.", pl: "To sto dwadzieścia euro, z dziesięcioprocentową zniżką." },
      { t: "speak", it: "Quanto costano quegli stivali in vetrina?", pl: "Ile kosztują tamte kozaki na wystawie?" }
    ]
  },
  {
    id: "a1-u04-l4",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Molto, poco, troppo",
    titlePl: "Ilość i intensywność",
    objectivesPl: [
      "odróżnić molto jako przysłówek od molto jako przymiotnika",
      "użyć troppo, poco, tanto, abbastanza",
      "stopniować przymiotnik przez -issimo"
    ],
    theory: [
      { h: "Jedno słowo, dwie role",
        p: "<strong>Molto</strong> przed przymiotnikiem lub czasownikiem jest <b>przysłówkiem</b> i się nie odmienia: <em>molto bella</em>, <em>lavoro molto</em>. Przed rzeczownikiem jest <b>przymiotnikiem</b> i dopasowuje końcówkę: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. Ta sama zasada obowiązuje <em>poco, troppo, tanto</em>." },
      { h: "Test, który zawsze działa",
        p: "Zadaj pytanie: „ile czego?” → przymiotnik, odmienia się. „jak bardzo?” → przysłówek, forma stała. <em>Ho molti libri</em> (ile książek) kontra <em>Sono molto stanca</em> (jak bardzo zmęczona)." },
      { h: "Superlatyw na -issimo",
        p: "Odetnij końcówkę przymiotnika i dodaj <em>-issimo/-issima/-issimi/-issime</em>: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. To najczęstszy sposób wzmocnienia — Włosi używają go stale, także wtedy, gdy Polak powiedziałby po prostu „bardzo”." },
      { trap: "<b>Poco</b> znaczy „mało”, a <b>un po' di</b> — „trochę”. To nie to samo: <em>ho poco tempo</em> (mam mało czasu, narzekam) kontra <em>ho un po' di tempo</em> (mam trochę czasu, wystarczy)." }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["funkcja", "forma", "przykład"],
        rows: [
          ["przysłówek (jak bardzo)", "stała", "È molto caro. / Costa troppo."],
          ["przymiotnik (ile)", "odmienna", "Ho molti amici. / Troppa gente."],
          ["wystarczająco", "abbastanza (stałe)", "È abbastanza grande."],
          ["superlatyw", "-issimo", "carissimo, bellissima"],
          ["za mało / za dużo", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        ["Questa giacca è molto elegante.", "Ta marynarka jest bardzo elegancka.", "przysłówek — bez zmiany"],
        ["Ci sono molte persone in negozio.", "W sklepie jest dużo ludzi.", "przymiotnik — molte"],
        ["Costa troppo, grazie lo stesso.", "Za drogo, mimo wszystko dziękuję."],
        ["Ho pochi soldi questo mese.", "Mam mało pieniędzy w tym miesiącu."],
        ["È bellissima!", "Jest przepiękna!"],
        ["Abbastanza bene, grazie.", "Całkiem nieźle, dziękuję."]
      ]
    },
    vocab: [
      { it: "molto", pl: "bardzo / dużo" },
      { it: "poco", pl: "mało" },
      { it: "un po' di", pl: "trochę" },
      { it: "troppo", pl: "za dużo / zbyt" },
      { it: "tanto", pl: "tyle, bardzo dużo" },
      { it: "abbastanza", pl: "wystarczająco, całkiem" },
      { it: "più / meno", pl: "więcej / mniej" },
      { it: "bellissimo", pl: "przepiękny" },
      { it: "carissimo", pl: "bardzo drogi" },
      { it: "i soldi", pl: "pieniądze (zawsze l. mn.)" },
      { it: "grazie lo stesso", pl: "mimo wszystko dziękuję" },
      { it: "ci penso", pl: "zastanowię się" }
    ],
    exercises: [
      { t: "mcq", q: "„Ci sono ___ persone.” (dużo ludzi)",
        opts: ["molto", "molte", "molti"], a: 1,
        why: "Przed rzeczownikiem molto się odmienia; persone to rodzaj żeński w liczbie mnogiej." },
      { t: "mcq", q: "„Questa borsa è ___ cara.” (bardzo droga)",
        opts: ["molta", "molto", "molte"], a: 1,
        why: "Przed przymiotnikiem molto jest przysłówkiem i nie zmienia formy." },
      { t: "fill", q: "Utwórz superlatyw: „bello” → „___”", a: ["bellissimo"] },
      { t: "fill", q: "Uzupełnij: „Ho ___ tempo oggi.” (mam mało czasu)", a: ["poco"] },
      { t: "multi", q: "W których zdaniach „troppo” jest przysłówkiem (nie odmienia się)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."], a: [0, 2] },
      { t: "trans", dir: "pl-it", q: "„To za drogo, dziękuję.”",
        a: ["è troppo caro grazie", "costa troppo grazie", "è troppo caro, grazie"] },
      { t: "cloze", q: "Uzupełnij końcówki (albo wstaw kreskę, jeśli forma się nie zmienia).",
        text: "Ci sono molt{{1}} negozi, ma sono molt{{2}} cari.",
        gaps: [["i"], ["o"]],
        pl: "Jest dużo sklepów, ale są bardzo drogie." },
      { t: "match", q: "Połącz.",
        pairs: [["abbastanza", "wystarczająco"], ["troppo", "za dużo"], ["un po' di", "trochę"], ["poco", "mało"]] },
      { t: "listen", it: "È bellissima, ma costa troppo per me.", pl: "Jest przepiękna, ale za droga dla mnie." },
      { t: "speak", it: "Ci penso, grazie lo stesso.", pl: "Zastanowię się, mimo wszystko dziękuję." }
    ]
  }
  ],
  test: {
    id: "a1-u04-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — Vetrine e taglie", titlePl: "Sprawdzian jednostki 4",
    objectivesPl: ["sprawdzić przymiotniki, questo/quello, liczby i molto/poco/troppo"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "fill", q: "„Le scarpe ___.” (czerwone)", a: ["rosse"] },
      { t: "fill", q: "„I pantaloni ___.” (zielone)", a: ["verdi"] },
      { t: "gender", q: "Wybierz formę „quello”.", opts: ["quel", "quello", "quell'", "quei", "quegli", "quella", "quelle"],
        items: [["zaino", "quello"], ["scarpe", "quelle"], ["cappotto", "quel"], ["stivali", "quegli"]] },
      { t: "mcq", q: "Ile to „duemilatrecento”?", opts: ["230", "2300", "23000"], a: 1 },
      { t: "mcq", q: "„Sono ___ stanca.” (bardzo zmęczona)", opts: ["molta", "molto", "molte"], a: 1 },
      { t: "fill", q: "„Ci sono ___ persone.” (dużo ludzi)", a: ["molte"] },
      { t: "trans", dir: "pl-it", q: "„Mogę przymierzyć tę koszulę?”",
        a: ["posso provare questa camicia", "posso provare questa camicia?"] },
      { t: "order", pl: "Ile kosztują tamte buty?", tokens: ["Quanto", "costano", "quelle", "scarpe?"], a: ["quanto costano quelle scarpe"] },
      { t: "listen", it: "Questa giacca è carissima.", pl: "Ta marynarka jest bardzo droga." },
      { t: "speak", it: "Posso pagare con la carta?", pl: "Mogę zapłacić kartą?" }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 5 — LA GIORNATA
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u05",
  icon: "⏰",
  titleIt: "La giornata",
  titlePl: "Dzień po włosku",
  grammarPl: "czasowniki zwrotne · godziny · modalne",
  lessons: [
  {
    id: "a1-u05-l1",
    cefr: "A1",
    themePl: "Życie codzienne",
    titleIt: "Mi sveglio alle sette",
    titlePl: "Czasowniki zwrotne",
    objectivesPl: [
      "rozpoznać czasownik zwrotny po końcówce -si",
      "odmienić svegliarsi, alzarsi, vestirsi",
      "opowiedzieć o swoim poranku"
    ],
    theory: [
      { h: "Czynność skierowana na siebie",
        p: "Bezokolicznik zwrotny kończy się na <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. Przy odmianie <em>-si</em> odpada, a przed czasownikiem staje zaimek zwrotny: <em>mi, ti, si, ci, vi, si</em>." },
      { h: "Zaimek zawsze przed czasownikiem",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Nigdy „sveglio mi”. Wyjątkiem jest bezokolicznik i tryb rozkazujący, gdzie zaimek doczepia się na końcu: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em>" },
      { pl: "Polskie „się” jest jedno dla wszystkich osób; włoski ma sześć różnych zaimków. „Budzę się” to <em>mi sveglio</em>, ale „budzimy się” to <em>ci svegliamo</em> — zaimek zmienia się razem z osobą." },
      { h: "Niektóre czasowniki są zwrotne tylko po włosku",
        p: "<em>Chiamarsi</em> (nazywać się), <em>ricordarsi</em> (pamiętać), <em>dimenticarsi</em> (zapomnieć), <em>arrabbiarsi</em> (złościć się), <em>annoiarsi</em> (nudzić się). Odwrotnie też się zdarza: polskie „uczyć się” to zwykłe <em>studiare</em>." }
    ],
    grammar: {
      title: "Svegliarsi (budzić się)",
      table: {
        head: ["osoba", "zaimek", "forma", "przykład"],
        rows: [
          ["io", "mi", "mi sveglio", "Mi sveglio alle sette."],
          ["tu", "ti", "ti svegli", "A che ora ti svegli?"],
          ["lui / lei", "si", "si sveglia", "Si sveglia tardi."],
          ["noi", "ci", "ci svegliamo", "Ci svegliamo presto."],
          ["voi", "vi", "vi svegliate", "Vi svegliate alle otto?"],
          ["loro", "si", "si svegliano", "Si svegliano alle nove."]
        ]
      },
      examples: [
        ["Mi alzo subito dopo la sveglia.", "Wstaję zaraz po budziku."],
        ["Ti lavi i denti prima o dopo colazione?", "Myjesz zęby przed śniadaniem czy po?"],
        ["Ci vestiamo in fretta.", "Ubieramy się w pośpiechu."],
        ["Devo alzarmi presto domani.", "Muszę jutro wcześnie wstać.", "zaimek doczepia się do bezokolicznika"],
        ["Non mi ricordo il suo nome.", "Nie pamiętam jego imienia."]
      ]
    },
    vocab: [
      { it: "svegliarsi", pl: "budzić się" },
      { it: "alzarsi", pl: "wstawać" },
      { it: "lavarsi", pl: "myć się" },
      { it: "vestirsi", pl: "ubierać się" },
      { it: "pettinarsi", pl: "czesać się" },
      { it: "farsi la doccia", pl: "brać prysznic" },
      { it: "fare colazione", pl: "jeść śniadanie" },
      { it: "uscire di casa", pl: "wychodzić z domu" },
      { it: "riposarsi", pl: "odpoczywać" },
      { it: "addormentarsi", pl: "zasypiać" },
      { it: "la sveglia", pl: "budzik" },
      { it: "in fretta", pl: "w pośpiechu" }
    ],
    exercises: [
      { t: "conj", verb: "svegliarsi", tense: "pres", persons: [0, 1, 2, 3, 4, 5],
        why: "Wpisz całą formę razem z zaimkiem, np. „mi sveglio”." },
      { t: "mcq", q: "Po czym poznasz czasownik zwrotny w słowniku?",
        opts: ["Zaczyna się na samogłoskę", "Kończy się na -si", "Ma akcent na końcu"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Noi ___ alle sei.” (wstajemy o szóstej — alzarsi)",
        a: ["ci alziamo"], why: "Zaimek zwrotny dla noi to ci." },
      { t: "fill", q: "Uzupełnij: „Devo ___ presto.” (muszę wcześnie wstać)",
        a: ["alzarmi"], hint: "zaimek doczepia się do bezokolicznika",
        why: "Po czasowniku modalnym zaimek doczepia się do bezokolicznika: alzarmi." },
      { t: "mcq", q: "Które zdanie jest poprawne?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Ubieram się w pośpiechu.”",
        a: ["mi vesto in fretta"] },
      { t: "cloze", q: "Uzupełnij opis poranka.",
        text: "{{1}} sveglio alle sei e mezza, poi {{2}} alzo e {{3}} la doccia.",
        gaps: [["mi"], ["mi"], ["mi faccio"]],
        pl: "Budzę się o wpół do siódmej, potem wstaję i biorę prysznic." },
      { t: "order", pl: "Moja siostra budzi się późno.",
        tokens: ["Mia", "sorella", "si", "sveglia", "tardi"], a: ["mia sorella si sveglia tardi"] },
      { t: "listen", it: "Mi sveglio alle sette e mi alzo subito.", pl: "Budzę się o siódmej i od razu wstaję." },
      { t: "speak", it: "A che ora ti svegli di solito?", pl: "O której zwykle się budzisz?" }
    ]
  },
  {
    id: "a1-u05-l2",
    cefr: "A1",
    themePl: "Życie codzienne",
    titleIt: "Che ore sono?",
    titlePl: "Godziny i pory dnia",
    objectivesPl: [
      "podać i zrozumieć godzinę",
      "użyć è / sono poprawnie",
      "umówić się na spotkanie o konkretnej porze"
    ],
    theory: [
      { h: "Godziny są w liczbie mnogiej",
        p: "Włoch pyta <em>Che ore sono?</em> („które są godziny”) i odpowiada <em>Sono le tre</em>. Domyślnie chodzi o <em>le ore</em>, dlatego rodzajnik żeński w liczbie mnogiej. Wyjątek: pierwsza godzina, południe i północ są pojedyncze — <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>." },
      { h: "Minuty",
        p: "Do połowy dodaje się: <em>le tre e dieci</em>. Po połowie zwykle odejmuje od następnej godziny: <em>le quattro meno dieci</em> („za dziesięć czwarta”). Popularne skróty: <em>e un quarto</em> (kwadrans po), <em>e mezza</em> (wpół), <em>meno un quarto</em> (za kwadrans)." },
      { h: "O której — z przyimkiem",
        p: "Pytanie <em>A che ora?</em>, odpowiedź <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. Przyimek <em>a</em> zlewa się z rodzajnikiem." },
      { tip: "Rozkłady jazdy, kina i urzędy używają zegara 24-godzinnego: <em>alle diciotto e trenta</em> (18:30). W rozmowie zwykle mówi się <em>alle sei e mezza di sera</em>." }
    ],
    grammar: {
      title: "Podawanie godziny",
      table: {
        head: ["zegar", "po włosku", "uwaga"],
        rows: [
          ["13:00", "è l'una", "liczba pojedyncza"],
          ["12:00", "è mezzogiorno", "południe"],
          ["00:00", "è mezzanotte", "północ"],
          ["15:00", "sono le tre", "liczba mnoga"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "odejmowanie"],
          ["o 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        ["Che ore sono? — Sono le nove e venti.", "Która godzina? — Dziewiąta dwadzieścia."],
        ["A che ora apre il negozio? — Alle nove e mezza.", "O której otwiera sklep? — O wpół do dziesiątej."],
        ["Il treno parte all'una e un quarto.", "Pociąg odjeżdża kwadrans po pierwszej."],
        ["Ci vediamo alle otto di sera.", "Widzimy się o ósmej wieczorem."],
        ["È mezzogiorno, andiamo a pranzo.", "Jest południe, idziemy na obiad."]
      ]
    },
    vocab: [
      { it: "che ore sono?", pl: "która godzina?" },
      { it: "a che ora?", pl: "o której?" },
      { it: "mezzogiorno / mezzanotte", pl: "południe / północ" },
      { it: "e un quarto / e mezza", pl: "kwadrans po / wpół" },
      { it: "meno un quarto", pl: "za kwadrans" },
      { it: "di mattina", pl: "rano" },
      { it: "di pomeriggio", pl: "po południu" },
      { it: "di sera / di notte", pl: "wieczorem / w nocy" },
      { it: "presto / tardi", pl: "wcześnie / późno" },
      { it: "in orario", pl: "punktualnie" },
      { it: "in ritardo", pl: "spóźniony" },
      { it: "ci vediamo", pl: "widzimy się" }
    ],
    exercises: [
      { t: "mcq", q: "Dlaczego mówi się „è l'una”, a nie „sono l'una”?",
        opts: ["To wyjątek bez powodu", "Bo „una” jest w liczbie pojedynczej", "Bo to forma nieformalna"], a: 1,
        why: "Wszystkie inne godziny są w liczbie mnogiej (le due, le tre…) i biorą sono." },
      { t: "fill", q: "Uzupełnij: „___ le otto e mezza.” (jest wpół do dziewiątej)", a: ["sono"] },
      { t: "fill", q: "Uzupełnij: „Il film comincia ___ nove.” (o dziewiątej)", a: ["alle"] },
      { t: "mcq", q: "Jak powiesz 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "obie formy są poprawne"], a: 2,
        why: "Obie działają; „meno un quarto” brzmi bardziej naturalnie w rozmowie." },
      { t: "match", q: "Połącz godzinę z zapisem.",
        pairs: [["è mezzogiorno", "12:00"], ["sono le due e un quarto", "14:15"], ["è l'una e mezza", "13:30"], ["sono le sette meno dieci", "6:50"]] },
      { t: "trans", dir: "pl-it", q: "„O której otwiera sklep?”",
        a: ["a che ora apre il negozio", "a che ora apre il negozio?"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "— Che ore {{1}}? — {{2}} le undici meno un quarto. — Sono {{3}} ritardo!",
        gaps: [["sono"], ["sono"], ["in"]],
        pl: "— Która godzina? — Za kwadrans jedenasta. — Jestem spóźniony!" },
      { t: "order", pl: "Widzimy się o ósmej wieczorem.",
        tokens: ["Ci", "vediamo", "alle", "otto", "di", "sera"], a: ["ci vediamo alle otto di sera"] },
      { t: "listen", it: "Il treno parte alle diciotto e quarantacinque.", pl: "Pociąg odjeżdża o 18:45." },
      { t: "speak", it: "Scusi, che ore sono? — Sono le tre e mezza.", pl: "Przepraszam, która godzina? — Wpół do czwartej." }
    ]
  },
  {
    id: "a1-u05-l3",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Posso, voglio, devo",
    titlePl: "Czasowniki modalne",
    objectivesPl: [
      "odmienić potere, volere i dovere",
      "poprosić o pozwolenie i wyrazić konieczność",
      "wiedzieć, dlaczego vorrei jest grzeczniejsze niż voglio"
    ],
    theory: [
      { h: "Trzy czasowniki, jedna konstrukcja",
        p: "<strong>Potere</strong> (móc), <strong>volere</strong> (chcieć) i <strong>dovere</strong> (musieć) łączą się z bezokolicznikiem <b>bez żadnego przyimka</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Wszystkie trzy są nieregularne, ale ich formy szybko wchodzą w krew, bo używa się ich bez przerwy." },
      { h: "Voglio brzmi ostro",
        p: "Zdanie <em>voglio un caffè</em> nie jest niegrzeczne gramatycznie, ale w barze zabrzmi jak żądanie. Włosi mówią <strong>vorrei</strong> — to tryb warunkowy od <em>volere</em>, na razie zapamiętaj go jako gotowy zwrot. Cała odmiana pojawi się na poziomie A2." },
      { h: "Zaimek przy modalnym: dwie pozycje",
        p: "Z czasownikiem zwrotnym możliwe są dwie równie poprawne wersje: <em><b>mi</b> devo alzare</em> albo <em>devo alzar<b>mi</b></em>. Ta sama swoboda dotyczy zaimków dopełnienia: <em>ti posso aiutare</em> = <em>posso aiutarti</em>." },
      { tip: "<em>Dovere</em> to nie tylko „musieć”, ale też „być winnym”: <em>Ti devo dieci euro</em> — „jestem ci winien dziesięć euro”." }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["osoba", "potere", "volere", "dovere"],
        rows: [
          ["io", "posso", "voglio", "devo"],
          ["tu", "puoi", "vuoi", "devi"],
          ["lui / lei", "può", "vuole", "deve"],
          ["noi", "possiamo", "vogliamo", "dobbiamo"],
          ["voi", "potete", "volete", "dovete"],
          ["loro", "possono", "vogliono", "devono"]
        ]
      },
      examples: [
        ["Posso entrare?", "Mogę wejść?"],
        ["Vorrei un caffè, per favore.", "Poproszę kawę.", "grzeczniej niż „voglio”"],
        ["Devo andare, è tardi.", "Muszę iść, jest późno."],
        ["Non possiamo pagare in contanti.", "Nie możemy zapłacić gotówką."],
        ["Vuoi venire con noi?", "Chcesz iść z nami?"],
        ["Mi devo alzare presto. / Devo alzarmi presto.", "Muszę wcześnie wstać.", "obie wersje poprawne"]
      ]
    },
    vocab: [
      { it: "potere", pl: "móc" },
      { it: "volere", pl: "chcieć" },
      { it: "dovere", pl: "musieć" },
      { it: "vorrei", pl: "chciałbym / chciałabym" },
      { it: "posso?", pl: "mogę?" },
      { it: "è vietato", pl: "jest zakazane" },
      { it: "è permesso", pl: "jest dozwolone" },
      { it: "bisogna", pl: "trzeba (bezosobowo)" },
      { it: "avere voglia di", pl: "mieć ochotę na" },
      { it: "purtroppo", pl: "niestety" },
      { it: "volentieri", pl: "chętnie" },
      { it: "magari", pl: "może; oby" }
    ],
    exercises: [
      { t: "conj", verb: "potere", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "volere", tense: "pres", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "dovere", tense: "pres", persons: [0, 3, 5] },
      { t: "mcq", q: "Zamawiasz w restauracji. Co brzmi najlepiej?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."], a: 1,
        why: "Vorrei to grzeczna forma warunkowa — standard przy zamawianiu." },
      { t: "fill", q: "Uzupełnij: „Noi ___ partire domani.” (musimy wyjechać jutro)",
        a: ["dobbiamo"] },
      { t: "mcq", q: "Które zdanie jest błędne?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."], a: 0,
        why: "Po czasownikach modalnych nie stawia się przyimka przed bezokolicznikiem." },
      { t: "trans", dir: "pl-it", q: "„Mogę zapłacić kartą?”",
        a: ["posso pagare con la carta", "posso pagare con la carta?"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Non {{1}} venire stasera, {{2}} lavorare fino a tardi.",
        gaps: [["posso"], ["devo"]],
        pl: "Nie mogę przyjść dziś wieczorem, muszę pracować do późna." },
      { t: "listen", it: "Scusi, posso provare questa giacca?", pl: "Przepraszam, mogę przymierzyć tę marynarkę?" },
      { t: "speak", it: "Vorrei prenotare un tavolo per due, per favore.", pl: "Chciałbym zarezerwować stolik dla dwóch osób." }
    ]
  },
  {
    id: "a1-u05-l4",
    cefr: "A1",
    themePl: "Życie codzienne",
    titleIt: "Sempre, spesso, mai",
    titlePl: "Częstotliwość i dni tygodnia",
    objectivesPl: [
      "ustawić przysłówek częstotliwości we właściwym miejscu",
      "użyć podwójnego przeczenia z mai",
      "nazwać dni tygodnia i mówić o rutynie"
    ],
    theory: [
      { h: "Przysłówek idzie zaraz za czasownikiem",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> Włoski trzyma przysłówek częstotliwości tuż po odmienionym czasowniku, podczas gdy polski przesuwa go swobodnie. Stawianie go na początku zdania jest możliwe, ale brzmi jak podkreślenie." },
      { h: "Mai wymaga non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. Włoski używa podwójnego przeczenia i to jest reguła, nie błąd. To samo dotyczy <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>." },
      { h: "Dni tygodnia",
        p: "Piszemy je małą literą, są rodzaju męskiego z wyjątkiem <em>la domenica</em>. Bez rodzajnika oznaczają konkretny dzień (<em>lunedì vado a Roma</em> — w ten poniedziałek), z rodzajnikiem — powtarzalność (<em>il lunedì vado in palestra</em> — w poniedziałki)." },
      { pl: "Ta różnica („w poniedziałek” kontra „w poniedziałki”) po polsku wymaga liczby mnogiej, po włosku — tylko rodzajnika. Drobna rzecz, a zmienia sens całego zdania." }
    ],
    grammar: {
      title: "Częstotliwość i dni tygodnia",
      table: {
        head: ["przysłówek", "po polsku", "przykład"],
        rows: [
          ["sempre", "zawsze", "Bevo sempre un caffè la mattina."],
          ["di solito", "zwykle", "Di solito lavoro da casa."],
          ["spesso", "często", "Vado spesso al mercato."],
          ["qualche volta / a volte", "czasami", "A volte esco a correre."],
          ["raramente", "rzadko", "Guardo raramente la TV."],
          ["non… mai", "nigdy", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        ["lunedì, martedì, mercoledì, giovedì", "poniedziałek, wtorek, środa, czwartek"],
        ["venerdì, sabato, domenica", "piątek, sobota, niedziela"],
        ["Il sabato dormo fino a tardi.", "W soboty śpię do późna.", "z rodzajnikiem = zwyczaj"],
        ["Sabato vado a Firenze.", "W tę sobotę jadę do Florencji.", "bez rodzajnika = konkretny dzień"],
        ["Non vado mai a letto prima di mezzanotte.", "Nigdy nie chodzę spać przed północą."]
      ]
    },
    vocab: [
      { it: "sempre", pl: "zawsze" },
      { it: "di solito", pl: "zwykle" },
      { it: "spesso", pl: "często" },
      { it: "a volte", pl: "czasami" },
      { it: "raramente", pl: "rzadko" },
      { it: "non… mai", pl: "nigdy" },
      { it: "ogni giorno", pl: "codziennie" },
      { it: "il fine settimana", pl: "weekend" },
      { it: "il lunedì", pl: "poniedziałek" },
      { it: "il sabato", pl: "sobota" },
      { it: "la domenica", pl: "niedziela" },
      { it: "una volta alla settimana", pl: "raz w tygodniu" }
    ],
    exercises: [
      { t: "mcq", q: "Gdzie zwykle stoi „spesso”?",
        opts: ["Przed podmiotem", "Zaraz po odmienionym czasowniku", "Zawsze na końcu zdania"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ vado ___ al cinema.” (nigdy nie chodzę do kina) — wpisz oba słowa oddzielone spacją w kolejności zdania",
        a: ["non mai"], hint: "podwójne przeczenie",
        why: "Non vado mai — non przed czasownikiem, mai zaraz po nim." },
      { t: "mcq", q: "„Il sabato dormo fino a tardi” znaczy:",
        opts: ["W tę sobotę pośpię dłużej", "W soboty zawsze śpię do późna", "W zeszłą sobotę spałem długo"], a: 1,
        why: "Rodzajnik przed dniem tygodnia oznacza powtarzalność." },
      { t: "order", pl: "Zwykle pracuję z domu.",
        tokens: ["Di", "solito", "lavoro", "da", "casa"], a: ["di solito lavoro da casa"] },
      { t: "match", q: "Połącz.",
        pairs: [["sempre", "zawsze"], ["raramente", "rzadko"], ["a volte", "czasami"], ["ogni giorno", "codziennie"]] },
      { t: "trans", dir: "pl-it", q: "„Nigdy nie biorę taksówki.”",
        a: ["non prendo mai il taxi", "non prendo mai un taxi"] },
      { t: "cloze", q: "Uzupełnij opis tygodnia.",
        text: "{{1}} lunedì vado in palestra, ma {{2}} vado {{3}} il fine settimana.",
        gaps: [["il"], ["non"], ["mai"]],
        pl: "W poniedziałki chodzę na siłownię, ale nigdy nie chodzę w weekend." },
      { t: "multi", q: "Które zdania są poprawne?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."], a: [0, 2] },
      { t: "listen", it: "Di solito mi sveglio presto, ma la domenica dormo fino a tardi.", pl: "Zwykle wstaję wcześnie, ale w niedziele śpię do późna." },
      { t: "speak", it: "Vado spesso al mercato il sabato mattina.", pl: "Często chodzę na targ w sobotę rano." }
    ]
  }
  ],
  test: {
    id: "a1-u05-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — La giornata", titlePl: "Sprawdzian jednostki 5",
    objectivesPl: ["sprawdzić czasowniki zwrotne, godziny, modalne i częstotliwość"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "svegliarsi", tense: "pres", persons: [0, 3, 5] },
      { t: "fill", q: "„Devo ___ presto.” (muszę wcześnie wstać — alzarsi)", a: ["alzarmi"] },
      { t: "fill", q: "„___ le due e mezza.” (jest wpół do trzeciej)", a: ["sono"] },
      { t: "fill", q: "„Il treno parte ___ una.” (o pierwszej)", a: ["all'"] },
      { t: "conj", verb: "dovere", tense: "pres", persons: [0, 3] },
      { t: "mcq", q: "Najgrzeczniejsza forma zamówienia:", opts: ["Voglio…", "Vorrei…", "Devo…"], a: 1 },
      { t: "mcq", q: "„Non vado mai in palestra” znaczy:", opts: ["Chodzę czasami", "Nigdy nie chodzę", "Chodzę codziennie"], a: 1 },
      { t: "order", pl: "Zwykle jem śniadanie o ósmej.",
        tokens: ["Di", "solito", "faccio", "colazione", "alle", "otto"], a: ["di solito faccio colazione alle otto"] },
      { t: "listen", it: "Mi sveglio alle sei e mezza ogni giorno.", pl: "Budzę się codziennie o wpół do siódmej." },
      { t: "speak", it: "A che ora ti alzi di solito?", pl: "O której zwykle wstajesz?" }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 6 — IN CITTÀ
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u06",
  icon: "🏛️",
  titleIt: "In città",
  titlePl: "W mieście",
  grammarPl: "przyimki ściągnięte · andare/venire · wskazówki",
  lessons: [
  {
    id: "a1-u06-l1",
    cefr: "A1",
    themePl: "Miasto i orientacja",
    titleIt: "Al, del, nel, sul",
    titlePl: "Przyimki ściągnięte",
    objectivesPl: [
      "połączyć przyimek z rodzajnikiem",
      "opisać, gdzie coś się znajduje",
      "unikać najczęstszego błędu: „a il” zamiast „al”"
    ],
    theory: [
      { h: "Pięć przyimków, które muszą się zlać",
        p: "Kiedy po przyimku <em>di, a, da, in, su</em> stoi rodzajnik określony, oba słowa zlewają się w jedno. Nie jest to opcja stylistyczna — <em>a il cinema</em> to po prostu błąd. Pozostałe przyimki (<em>con, per, tra, fra</em>) zostają osobno." },
      { h: "Wzorzec jest regularny",
        p: "Wystarczy zapamiętać pierwszą literę przyimka i doczepić rodzajnik: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. Dokładnie tak samo działa <em>di, da, in, su</em>." },
      { trap: "<b>In</b> zmienia się w <b>ne-</b>: <em>in + il = nel</em>, nie „inl”. To jedyna nieoczywista forma w całej tabeli." },
      { h: "Kiedy rodzajnika nie ma, nie ma też ściągnięcia",
        p: "<em>Vado a Roma</em> (miasto — bez rodzajnika), <em>vado in Italia</em> (kraj — bez rodzajnika po in), ale <em>vado al mare</em>, <em>vado alla stazione</em>. Ściągnięcie pojawia się tylko wtedy, gdy rodzajnik naprawdę występuje." }
    ],
    grammar: {
      title: "Tabela przyimków ściągniętych",
      table: {
        head: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        ["Vado al cinema.", "Idę do kina.", "a + il"],
        ["Il libro è sul tavolo.", "Książka jest na stole.", "su + il"],
        ["Abito nel centro storico.", "Mieszkam w starym centrum.", "in + il"],
        ["Torno dalla stazione.", "Wracam z dworca.", "da + la"],
        ["La chiave della macchina.", "Kluczyk od samochodu.", "di + la"],
        ["Con il treno / col treno.", "Pociągiem.", "con zwykle zostaje osobno"]
      ]
    },
    vocab: [
      { it: "la piazza", pl: "plac" },
      { it: "la via", pl: "ulica" },
      { it: "il centro", pl: "centrum" },
      { it: "la chiesa", pl: "kościół" },
      { it: "il museo", pl: "muzeum" },
      { it: "la banca", pl: "bank" },
      { it: "la farmacia", pl: "apteka" },
      { it: "l'ufficio postale", pl: "poczta" },
      { it: "il semaforo", pl: "sygnalizacja świetlna" },
      { it: "l'incrocio", pl: "skrzyżowanie" },
      { it: "il ponte", pl: "most" },
      { it: "la fermata", pl: "przystanek" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Vado ___ cinema.” (a + il)", a: ["al"] },
      { t: "fill", q: "Uzupełnij: „Il libro è ___ tavolo.” (su + il)", a: ["sul"] },
      { t: "fill", q: "Uzupełnij: „Abito ___ centro.” (in + il)", a: ["nel"] },
      { t: "gender", q: "Wybierz właściwą formę „a + rodzajnik”.",
        opts: ["al", "allo", "alla", "all'", "ai", "agli", "alle"],
        items: [["stazione", "alla", "dworzec"], ["aeroporto", "all'", "lotnisko"], ["studenti", "agli", "studenci"], ["ristorante", "al", "restauracja"], ["nove", "alle", "godzina 9"]] },
      { t: "mcq", q: "Które połączenie NIE ulega ściągnięciu?",
        opts: ["a + il", "con + il", "in + la"], a: 1,
        why: "Con zwykle zostaje osobno; forma „col” istnieje, ale jest opcjonalna." },
      { t: "cloze", q: "Uzupełnij opis drogi.",
        text: "La farmacia è {{1}} angolo, vicino {{2}} banca, di fronte {{3}} chiesa.",
        gaps: [["all'"], ["alla"], ["alla"]],
        pl: "Apteka jest na rogu, obok banku, naprzeciwko kościoła." },
      { t: "trans", dir: "pl-it", q: "„Wracam z dworca.”",
        a: ["torno dalla stazione", "vengo dalla stazione"] },
      { t: "order", pl: "Klucz od samochodu jest na stole.",
        tokens: ["La", "chiave", "della", "macchina", "è", "sul", "tavolo"],
        a: ["la chiave della macchina è sul tavolo"] },
      { t: "listen", it: "L'ufficio postale è vicino alla piazza principale.", pl: "Poczta jest blisko głównego placu." },
      { t: "speak", it: "Scusi, dov'è la fermata dell'autobus?", pl: "Przepraszam, gdzie jest przystanek autobusowy?" }
    ]
  },
  {
    id: "a1-u06-l2",
    cefr: "A1",
    themePl: "Miasto i orientacja",
    titleIt: "Andare e venire",
    titlePl: "Iść, jechać, przychodzić",
    objectivesPl: [
      "odmienić andare i venire",
      "wybrać a albo in przed celem podróży",
      "odróżnić andare od venire"
    ],
    theory: [
      { h: "Kierunek zależy od tego, gdzie stoi rozmówca",
        p: "<strong>Andare</strong> to ruch <b>od</b> mówiącego, <strong>venire</strong> — <b>do</b> mówiącego lub razem z nim. Kiedy ktoś zaprasza Cię do siebie i pytasz „przyjdę?”, po włosku mówisz <em>vengo</em>, nie <em>vado</em>." },
      { h: "A czy in — reguła praktyczna",
        list: [
          "<b>a</b>: miasta (<em>a Roma</em>), miejsca-czynności (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: kraje i regiony (<em>in Italia, in Toscana</em>), pomieszczenia i instytucje (<em>in banca, in ufficio, in farmacia, in centro</em>), środki transportu (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: do osoby (<em>vado dal medico, vado da Marco</em>)"
        ] },
      { trap: "<em>A piedi</em> („pieszo”) łamie regułę środków transportu — bo pieszo się nie „jedzie”. Zapamiętaj jako wyjątek." },
      { pl: "Polskie „do” obsługuje wszystko: do Rzymu, do banku, do lekarza. Włoski rozdziela to na trzy przyimki. Nie próbuj tłumaczyć słowo w słowo — ucz się całych połączeń." }
    ],
    grammar: {
      title: "Andare i venire",
      table: {
        head: ["osoba", "andare", "venire", "przykład"],
        rows: [
          ["io", "vado", "vengo", "Vado al lavoro. / Vengo con te."],
          ["tu", "vai", "vieni", "Vieni anche tu?"],
          ["lui / lei", "va", "viene", "Va a scuola."],
          ["noi", "andiamo", "veniamo", "Andiamo al mare."],
          ["voi", "andate", "venite", "Venite da noi stasera?"],
          ["loro", "vanno", "vengono", "Vanno in Italia."]
        ]
      },
      examples: [
        ["Vado a Roma in treno.", "Jadę do Rzymu pociągiem."],
        ["Vado in Italia a settembre.", "Jadę do Włoch we wrześniu."],
        ["Vado dal dentista alle tre.", "Idę do dentysty o trzeciej."],
        ["Vieni alla festa? — Sì, vengo volentieri.", "Przyjdziesz na imprezę? — Tak, chętnie."],
        ["Andiamo a piedi, è vicino.", "Idziemy pieszo, jest blisko."],
        ["Da dove vieni? — Vengo dalla Polonia.", "Skąd pochodzisz? — Z Polski."]
      ]
    },
    vocab: [
      { it: "andare", pl: "iść, jechać" },
      { it: "venire", pl: "przychodzić, przyjeżdżać" },
      { it: "a piedi", pl: "pieszo" },
      { it: "in macchina", pl: "samochodem" },
      { it: "in autobus", pl: "autobusem" },
      { it: "in bici", pl: "rowerem" },
      { it: "in metro", pl: "metrem" },
      { it: "vicino / lontano", pl: "blisko / daleko" },
      { it: "qui / lì", pl: "tu / tam" },
      { it: "insieme", pl: "razem" },
      { it: "da solo / da sola", pl: "sam / sama" },
      { it: "ci vuole mezz'ora", pl: "zajmuje pół godziny" }
    ],
    exercises: [
      { t: "conj", verb: "andare", tense: "pres", persons: [0, 1, 2, 3, 4, 5] },
      { t: "conj", verb: "venire", tense: "pres", persons: [0, 2, 5] },
      { t: "mcq", q: "Ktoś zaprasza Cię do siebie. Jak potwierdzasz?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"], a: 1,
        why: "Ruch w stronę rozmówcy to venire." },
      { t: "fill", q: "Uzupełnij: „Vado ___ Italia.” (do Włoch)", a: ["in"] },
      { t: "fill", q: "Uzupełnij: „Vado ___ Milano.” (do Mediolanu)", a: ["a"] },
      { t: "fill", q: "Uzupełnij: „Vado ___ medico.” (do lekarza)", a: ["dal"] },
      { t: "multi", q: "Które połączenia są poprawne?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"], a: [0, 2, 4],
        why: "„In piedi” istnieje, ale znaczy „na stojąco”, nie „pieszo”." },
      { t: "order", pl: "Idziemy pieszo, jest blisko.",
        tokens: ["Andiamo", "a", "piedi,", "è", "vicino"], a: ["andiamo a piedi è vicino"] },
      { t: "listen", it: "Vengo con voi, ma andiamo in metro.", pl: "Idę z wami, ale jedziemy metrem." },
      { t: "speak", it: "Vado in centro a piedi, ci vuole mezz'ora.", pl: "Idę do centrum pieszo, zajmuje to pół godziny." }
    ]
  },
  {
    id: "a1-u06-l3",
    cefr: "A1",
    themePl: "Miasto i orientacja",
    titleIt: "Dov'è la stazione?",
    titlePl: "Pytanie o drogę",
    objectivesPl: [
      "zapytać o drogę i zrozumieć odpowiedź",
      "użyć trybu rozkazującego w formie tu",
      "opisać położenie przy pomocy przyimków"
    ],
    theory: [
      { h: "Tryb rozkazujący w formie tu",
        p: "Wskazówki drogi podaje się w trybie rozkazującym. Dla czasowników <b>-are</b> forma <em>tu</em> jest identyczna z trzecią osobą czasu teraźniejszego: <em>gira!</em>, <em>continua!</em>. Dla <b>-ere</b> i <b>-ire</b> — z drugą osobą: <em>prendi!</em>, <em>segui!</em>" },
      { h: "Cztery formy skrócone",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. Apostrof zastępuje ucięte litery. W praktyce usłyszysz też pełne <em>vai</em> i <em>fai</em> — obie wersje są w użyciu." },
      { h: "Formalnie: przez Lei",
        p: "Wobec obcej osoby wskazówki brzmią inaczej: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. To forma trybu łączącego, którą na razie zapamiętaj jako gotowe zwroty." },
      { tip: "Najbardziej użyteczna odpowiedź, gdy nie zrozumiesz: <em>Può ripetere più lentamente, per favore?</em> Włosi mówią szybko i prawie nikt nie zwolni, jeśli o to nie poprosisz." }
    ],
    grammar: {
      title: "Wskazówki drogi",
      table: {
        head: ["nieformalnie (tu)", "formalnie (Lei)", "po polsku"],
        rows: [
          ["vai dritto", "vada dritto", "idź / proszę iść prosto"],
          ["gira a destra", "giri a destra", "skręć w prawo"],
          ["gira a sinistra", "giri a sinistra", "skręć w lewo"],
          ["prendi la prima strada", "prenda la prima strada", "skręć w pierwszą ulicę"],
          ["attraversa la piazza", "attraversi la piazza", "przejdź przez plac"],
          ["continua fino al semaforo", "continui fino al semaforo", "idź aż do świateł"]
        ]
      },
      examples: [
        ["Scusi, dov'è la stazione?", "Przepraszam, gdzie jest dworzec?"],
        ["È qui vicino, a due passi.", "Jest tuż obok, dwa kroki stąd."],
        ["Vada dritto e giri alla seconda a destra.", "Proszę iść prosto i skręcić w drugą w prawo."],
        ["È di fronte alla banca, accanto alla farmacia.", "Jest naprzeciwko banku, obok apteki."],
        ["Quanto ci vuole a piedi? — Dieci minuti.", "Ile to pieszo? — Dziesięć minut."],
        ["Mi sono perso, può aiutarmi?", "Zgubiłem się, może mi pan pomóc?"]
      ]
    },
    vocab: [
      { it: "dov'è…?", pl: "gdzie jest…?" },
      { it: "a destra / a sinistra", pl: "w prawo / w lewo" },
      { it: "dritto", pl: "prosto" },
      { it: "di fronte a", pl: "naprzeciwko" },
      { it: "accanto a", pl: "obok" },
      { it: "vicino a / lontano da", pl: "blisko / daleko od" },
      { it: "dietro / davanti a", pl: "za / przed" },
      { it: "tra… e…", pl: "między… a…" },
      { it: "girare", pl: "skręcać" },
      { it: "attraversare", pl: "przechodzić przez" },
      { it: "mi sono perso/a", pl: "zgubiłem się / zgubiłam się" },
      { it: "a due passi", pl: "dwa kroki stąd" }
    ],
    exercises: [
      { t: "mcq", q: "„Gira a sinistra” znaczy:", opts: ["Skręć w prawo", "Skręć w lewo", "Idź prosto"], a: 1 },
      { t: "mcq", q: "Formalna wersja „vai dritto” to:",
        opts: ["va dritto", "vada dritto", "andare dritto"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ la stazione?” (gdzie jest dworzec)", a: ["dov'è", "dove è"] },
      { t: "match", q: "Połącz przyimki miejsca.",
        pairs: [["di fronte a", "naprzeciwko"], ["accanto a", "obok"], ["dietro", "za"], ["tra… e…", "między… a…"]] },
      { t: "cloze", q: "Uzupełnij wskazówki.",
        text: "{{1}} dritto fino al semaforo, poi {{2}} a destra. La banca è {{3}} alla farmacia.",
        gaps: [["vada", "vai"], ["giri", "gira"], ["di fronte", "accanto"]],
        pl: "Proszę iść prosto do świateł, potem skręcić w prawo. Bank jest naprzeciwko apteki." },
      { t: "trans", dir: "pl-it", q: "„Przepraszam, gdzie jest apteka?”",
        a: ["scusi dov'è la farmacia", "scusi, dov'è la farmacia?"] },
      { t: "dialogue", q: "Zgubiłeś się w centrum.",
        setting: "Wąska uliczka, przechodzień wygląda na miejscowego.",
        lines: [
          { sp: "TY", pl: "Zaczep grzecznie i zapytaj o dworzec.", choices: ["Ciao, dove stazione?", "Scusi, dov'è la stazione?", "Scusa, la stazione dov'è Lei?"], a: 1, plAnswer: "Przepraszam, gdzie jest dworzec?" },
          { sp: "A", it: "Allora: vada dritto, poi giri alla seconda a destra.", pl: "Więc: proszę iść prosto, potem skręcić w drugą w prawo." },
          { sp: "TY", pl: "Powiedz, że nie zrozumiałeś, i poproś o powtórzenie.", choices: ["Non capisco, può ripetere più lentamente?", "Non capisco, ripeti!", "Scusi, non parlo."], a: 0, plAnswer: "Nie rozumiem, może pan powtórzyć wolniej?" },
          { sp: "A", it: "Certo. Dritto… e poi la seconda a destra. Dieci minuti a piedi.", pl: "Jasne. Prosto… a potem druga w prawo. Dziesięć minut pieszo." },
          { sp: "TY", pl: "Podziękuj.", choices: ["Grazie mille, molto gentile!", "Prego, grazie.", "Scusi, grazie."], a: 0, plAnswer: "Bardzo dziękuję, miło z pana strony!" }
        ] },
      { t: "order", pl: "Muzeum jest między placem a mostem.",
        tokens: ["Il", "museo", "è", "tra", "la", "piazza", "e", "il", "ponte"],
        a: ["il museo è tra la piazza e il ponte"] },
      { t: "listen", it: "Vada dritto e attraversi la piazza.", pl: "Proszę iść prosto i przejść przez plac." },
      { t: "speak", it: "Mi sono persa, può aiutarmi per favore?", pl: "Zgubiłam się, może mi pan pomóc?" }
    ]
  },
  {
    id: "a1-u06-l4",
    cefr: "A1",
    themePl: "Miasto i orientacja",
    titleIt: "C'è, ci sono, non c'è",
    titlePl: "Opisywanie miejsca",
    objectivesPl: [
      "opisać, co znajduje się w mieście lub w mieszkaniu",
      "użyć c'è / ci sono w przeczeniu i pytaniu",
      "połączyć to z przyimkami miejsca"
    ],
    theory: [
      { h: "Istnienie kontra cecha",
        p: "<strong>C'è</strong> i <strong>ci sono</strong> mówią, że coś <b>jest gdzieś</b>. <em>Essere</em> mówi, <b>jakie</b> coś jest. <em>C'è un museo in centro</em> (jest muzeum) kontra <em>Il museo è bellissimo</em> (muzeum jest piękne)." },
      { h: "Przeczenie i pytanie",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; pytanie tylko intonacją: <em>C'è un bagno qui?</em> W odpowiedziach bardzo częste są krótkie formy: <em>Sì, c'è.</em> / <em>No, non c'è.</em>" },
      { h: "Ci to nie tylko „tam”",
        p: "Ta sama cząstka <em>ci</em> wraca w wielu miejscach: <em>ci vuole</em> (potrzeba), <em>ci metto</em> (zajmuje mi), <em>ci vado</em> (idę tam). Na razie wystarczy rozpoznawać ją w tych zwrotach; pełne wyjaśnienie czeka na poziomie B1." },
      { tip: "W restauracji i barze przydaje się <em>C'è il bagno?</em> oraz <em>Non c'è il wifi?</em> — to najczęstsze pytania turysty, które działają dosłownie wszędzie." }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["forma", "użycie", "przykład"],
        rows: [
          ["c'è", "jedna rzecz", "C'è una farmacia qui vicino."],
          ["ci sono", "wiele rzeczy", "Ci sono due farmacie."],
          ["non c'è", "przeczenie l.poj.", "Non c'è il wifi."],
          ["non ci sono", "przeczenie l.mn.", "Non ci sono tavoli liberi."],
          ["c'è…?", "pytanie", "C'è un bancomat qui?"],
          ["quanto c'è?", "odległość", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        ["Nel mio quartiere c'è un mercato ogni sabato.", "W mojej dzielnicy jest targ w każdą sobotę."],
        ["Ci sono molti turisti in questo periodo.", "W tym okresie jest dużo turystów."],
        ["Non c'è nessuno alla reception.", "Nie ma nikogo w recepcji."],
        ["C'è il bagno? — Sì, in fondo a destra.", "Jest toaleta? — Tak, na końcu po prawej."],
        ["Quanto c'è da qui alla stazione?", "Jak daleko stąd na dworzec?"]
      ]
    },
    vocab: [
      { it: "il quartiere", pl: "dzielnica" },
      { it: "il bagno", pl: "łazienka, toaleta" },
      { it: "il bancomat", pl: "bankomat" },
      { it: "il supermercato", pl: "supermarket" },
      { it: "il parcheggio", pl: "parking" },
      { it: "il parco", pl: "park" },
      { it: "l'ospedale", pl: "szpital" },
      { it: "la biblioteca", pl: "biblioteka" },
      { it: "nessuno", pl: "nikt" },
      { it: "qualcosa", pl: "coś" },
      { it: "da queste parti", pl: "w tych okolicach" },
      { it: "in fondo", pl: "w głębi, na końcu" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „___ un bancomat qui vicino?”", a: ["c'è", "ce"] },
      { t: "fill", q: "Uzupełnij: „___ due farmacie in questa via.”", a: ["ci sono"] },
      { t: "mcq", q: "Które zdanie opisuje cechę, a nie istnienie?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."], a: 1 },
      { t: "fill", q: "Zaprzecz: „C'è il wifi.” → „___ il wifi.”", a: ["non c'è", "non ce"] },
      { t: "cloze", q: "Opisz dzielnicę.",
        text: "Nel mio quartiere {{1}} un parco, ma non {{2}} supermercati.",
        gaps: [["c'è", "ce"], ["ci sono"]],
        pl: "W mojej dzielnicy jest park, ale nie ma supermarketów." },
      { t: "trans", dir: "pl-it", q: "„Nie ma nikogo w recepcji.”",
        a: ["non c'è nessuno alla reception", "non c'è nessuno in reception"] },
      { t: "match", q: "Połącz.",
        pairs: [["il parcheggio", "parking"], ["l'ospedale", "szpital"], ["la biblioteca", "biblioteka"], ["il quartiere", "dzielnica"]] },
      { t: "order", pl: "Czy w okolicy jest apteka?",
        tokens: ["C'è", "una", "farmacia", "da", "queste", "parti?"],
        a: ["c'è una farmacia da queste parti"] },
      { t: "listen", it: "Nel quartiere ci sono due parchi e una biblioteca.", pl: "W dzielnicy są dwa parki i biblioteka." },
      { t: "speak", it: "Scusi, c'è il bagno? — Sì, in fondo a destra.", pl: "Przepraszam, jest toaleta? — Tak, na końcu po prawej." }
    ]
  }
  ],
  test: {
    id: "a1-u06-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — In città", titlePl: "Sprawdzian jednostki 6",
    objectivesPl: ["sprawdzić przyimki ściągnięte, andare/venire, wskazówki i c'è/ci sono"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "gender", q: "a + rodzajnik:", opts: ["al", "allo", "alla", "all'", "ai", "agli", "alle"],
        items: [["cinema", "al"], ["stazione", "alla"], ["aeroporto", "all'"], ["studenti", "agli"]] },
      { t: "fill", q: "„Il libro è ___ tavolo.” (su + il)", a: ["sul"] },
      { t: "fill", q: "„Abito ___ centro.” (in + il)", a: ["nel"] },
      { t: "conj", verb: "andare", tense: "pres", persons: [0, 2, 5] },
      { t: "fill", q: "„Vado ___ Italia.”", a: ["in"] },
      { t: "fill", q: "„Vado ___ dentista.”", a: ["dal"] },
      { t: "mcq", q: "Formalna wersja „gira a destra”:", opts: ["giri a destra", "gira a destra", "girare a destra"], a: 0 },
      { t: "fill", q: "„___ tavoli liberi?” (są wolne stoliki?)", a: ["ci sono"] },
      { t: "listen", it: "Vada dritto, la banca è di fronte alla chiesa.", pl: "Proszę iść prosto, bank jest naprzeciwko kościoła." },
      { t: "speak", it: "Scusi, dov'è la fermata dell'autobus?", pl: "Przepraszam, gdzie jest przystanek autobusowy?" }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 7 — A TAVOLA
   ══════════════════════════════════════════════════════════════ */
{
  id: "a1-u07",
  icon: "🍝",
  titleIt: "A tavola",
  titlePl: "Przy stole",
  grammarPl: "zamawianie · ne · struktura włoskiego posiłku",
  lessons: [
  {
    id: "a1-u07-l1",
    cefr: "A1",
    themePl: "Restauracja",
    titleIt: "Un tavolo per due",
    titlePl: "Rezerwacja i wejście",
    objectivesPl: [
      "zarezerwować stolik i wejść do restauracji",
      "zrozumieć pytania kelnera",
      "poprosić o kartę i o miejsce na zewnątrz"
    ],
    theory: [
      { h: "Rytm zamawiania jest stały",
        p: "Włoska restauracja pracuje w ustalonej kolejności: <em>antipasto</em> (przystawka), <em>primo</em> (makaron, ryż, zupa), <em>secondo</em> (mięso lub ryba), <em>contorno</em> (dodatek, zamawiany osobno!), <em>dolce</em>, <em>caffè</em>. Nikt nie oczekuje, że zamówisz wszystko — ale kelner zapyta po kolei." },
      { h: "Contorno to osobna pozycja",
        p: "Warzywa i frytki <b>nie są</b> dodatkiem do dania głównego, tylko oddzielnym zamówieniem. To najczęstsze zaskoczenie: <em>secondo</em> przychodzi sam na talerzu." },
      { h: "Coperto i servizio",
        p: "<em>Il coperto</em> (2-4 €) to opłata za nakrycie, chleb i obsługę — jest legalna i widnieje w menu. Napiwek nie jest obowiązkowy; zaokrągla się rachunek albo zostawia kilka euro, jeśli obsługa była dobra." },
      { tip: "<em>Il conto, per favore</em> trzeba powiedzieć samemu. Kelner nie przyniesie rachunku sam z siebie — uznałby to za wypraszanie gościa." }
    ],
    grammar: {
      title: "Zwroty przy stole",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["rezerwacja", "Vorrei prenotare un tavolo per due.", "Chciałbym zarezerwować stolik dla dwóch."],
          ["bez rezerwacji", "C'è un tavolo libero?", "Jest wolny stolik?"],
          ["na zewnątrz", "Possiamo sederci fuori?", "Możemy usiąść na zewnątrz?"],
          ["karta", "Il menù, per favore.", "Poproszę kartę."],
          ["zamówienie", "Per me una carbonara.", "Dla mnie carbonara."],
          ["rachunek", "Il conto, per favore.", "Poproszę rachunek."]
        ]
      },
      examples: [
        ["Buonasera, avete prenotato?", "Dobry wieczór, mają państwo rezerwację?"],
        ["No, siamo in due. C'è posto?", "Nie, jest nas dwoje. Jest miejsce?"],
        ["Dentro o fuori?", "W środku czy na zewnątrz?"],
        ["Cosa ci consiglia?", "Co pan poleca?"],
        ["Sono allergico alle noci.", "Mam alergię na orzechy."],
        ["Era tutto buonissimo, complimenti.", "Wszystko było wyśmienite, gratulacje."]
      ]
    },
    vocab: [
      { it: "prenotare", pl: "rezerwować" },
      { it: "il tavolo", pl: "stolik" },
      { it: "il menù", pl: "karta dań" },
      { it: "l'antipasto", pl: "przystawka" },
      { it: "il primo", pl: "pierwsze danie" },
      { it: "il secondo", pl: "drugie danie" },
      { it: "il contorno", pl: "dodatek (osobno!)" },
      { it: "il dolce", pl: "deser" },
      { it: "il conto", pl: "rachunek" },
      { it: "il coperto", pl: "opłata za nakrycie" },
      { it: "siamo in due", pl: "jest nas dwoje" },
      { it: "cosa ci consiglia?", pl: "co pan poleca?" }
    ],
    dialogue: {
      titleIt: "All'ingresso",
      lines: [
        { who: "🧑‍🍳", it: "Buonasera, avete prenotato?", pl: "Dobry wieczór, mają państwo rezerwację?" },
        { who: "🙋", it: "No, siamo in due. C'è un tavolo libero?", pl: "Nie, jest nas dwoje. Jest wolny stolik?" },
        { who: "🧑‍🍳", it: "Dentro o fuori?", pl: "W środku czy na zewnątrz?" },
        { who: "🙋", it: "Fuori, se possibile. Grazie.", pl: "Na zewnątrz, jeśli można. Dziękuję." },
        { who: "🧑‍🍳", it: "Certo, si accomodino. Ecco il menù.", pl: "Oczywiście, proszę siadać. Oto karta." }
      ]
    },
    exercises: [
      { t: "mcq", q: "Co to jest „il contorno”?",
        opts: ["Deser", "Dodatek warzywny, zamawiany osobno", "Opłata za nakrycie"], a: 1 },
      { t: "mcq", q: "Co znaczy „il coperto”?",
        opts: ["Danie mięsne", "Opłata za nakrycie i chleb", "Napiwek"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Vorrei ___ un tavolo per due.”", a: ["prenotare"] },
      { t: "trans", dir: "pl-it", q: "„Poproszę rachunek.”",
        a: ["il conto per favore", "il conto, per favore", "posso avere il conto"] },
      { t: "match", q: "Ułóż kolejność posiłku — połącz nazwę z opisem.",
        pairs: [["l'antipasto", "przystawka"], ["il primo", "makaron lub zupa"], ["il secondo", "mięso lub ryba"], ["il dolce", "deser"]] },
      { t: "order", pl: "Nie, jest nas dwoje. Jest wolny stolik?",
        tokens: ["No,", "siamo", "in", "due.", "C'è", "un", "tavolo", "libero?"],
        a: ["no siamo in due c'è un tavolo libero"] },
      { t: "dialogue", q: "Wchodzisz do restauracji bez rezerwacji.",
        setting: "Piątek, 20:30, mała trattoria.",
        lines: [
          { sp: "A", it: "Buonasera! Avete prenotato?", pl: "Dobry wieczór! Mają państwo rezerwację?" },
          { sp: "TY", pl: "Powiedz, że nie, i zapytaj o wolny stolik dla dwóch.", choices: ["No, c'è un tavolo per due?", "Sì, per due.", "No, vorrei il conto."], a: 0, plAnswer: "Nie, jest stolik dla dwóch?" },
          { sp: "A", it: "Sì, ma solo dentro. Va bene?", pl: "Tak, ale tylko w środku. Może być?" },
          { sp: "TY", pl: "Zgódź się i poproś o kartę.", choices: ["Va bene, il menù per favore.", "No, il conto per favore.", "Va bene, il coperto per favore."], a: 0, plAnswer: "Może być, poproszę kartę." }
        ] },
      { t: "listen", it: "Vorrei prenotare un tavolo per quattro alle otto.", pl: "Chciałbym zarezerwować stolik dla czterech osób na ósmą." },
      { t: "speak", it: "Buonasera, siamo in due. C'è posto fuori?", pl: "Dobry wieczór, jest nas dwoje. Jest miejsce na zewnątrz?" }
    ]
  },
  {
    id: "a1-u07-l2",
    cefr: "A1",
    themePl: "Restauracja",
    titleIt: "Per me una carbonara",
    titlePl: "Zamawianie dania",
    objectivesPl: [
      "zamówić konkretne danie i napój",
      "zapytać o skład dania",
      "zgłosić alergię lub dietę"
    ],
    theory: [
      { h: "Trzy sposoby zamówienia",
        p: "<em>Per me una carbonara</em> (dla mnie…), <em>Prendo una carbonara</em> (biorę…), <em>Vorrei una carbonara</em> (chciałbym…). Wszystkie trzy są normalne; <em>vorrei</em> brzmi najgrzeczniej, <em>prendo</em> najbardziej naturalnie." },
      { h: "Pytania o skład",
        p: "<em>Cosa c'è dentro?</em> („co jest w środku?”), <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Restauracje mają obowiązek podać alergeny, więc pytanie nikogo nie dziwi." },
      { h: "Woda: pytanie, którego nie unikniesz",
        p: "<em>Naturale o frizzante?</em> — niegazowana czy gazowana. Woda z kranu (<em>acqua del rubinetto</em>) bywa dostępna, ale w wielu miejscach po prostu jej nie podają." },
      { tip: "Kawę zamawia się <b>po</b> deserze, nigdy w trakcie posiłku, i nigdy jako cappuccino. <em>Un caffè</em> po obiedzie to część rytuału, nie napój do jedzenia." }
    ],
    grammar: {
      title: "Zamawianie i pytania o danie",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["zamówienie", "Per me / Prendo / Vorrei…", "Dla mnie / Biorę / Chciałbym…"],
          ["napój", "Da bere, una bottiglia d'acqua.", "Do picia butelkę wody."],
          ["skład", "Cosa c'è dentro?", "Co jest w środku?"],
          ["alergia", "Sono allergico/a a…", "Mam alergię na…"],
          ["dieta", "Sono vegetariano/a.", "Jestem wegetarianinem/wegetarianką."],
          ["bez czegoś", "Senza cipolla, per favore.", "Bez cebuli poproszę."]
        ]
      },
      examples: [
        ["Per me una carbonara e un'insalata mista.", "Dla mnie carbonara i sałatka mieszana."],
        ["Da bere? — Acqua naturale, grazie.", "Do picia? — Woda niegazowana, dziękuję."],
        ["Cosa c'è nell'amatriciana?", "Co jest w amatriciana?"],
        ["Sono allergica ai frutti di mare.", "Mam alergię na owoce morza."],
        ["È senza glutine questo piatto?", "Czy to danie jest bezglutenowe?"],
        ["Un caffè dopo, grazie.", "Kawa na koniec, dziękuję."]
      ]
    },
    vocab: [
      { it: "la pasta", pl: "makaron" },
      { it: "la carne / il pesce", pl: "mięso / ryba" },
      { it: "l'insalata", pl: "sałatka" },
      { it: "le verdure", pl: "warzywa" },
      { it: "acqua naturale / frizzante", pl: "woda niegazowana / gazowana" },
      { it: "il vino della casa", pl: "wino domowe" },
      { it: "senza glutine", pl: "bezglutenowy" },
      { it: "vegetariano / vegano", pl: "wegetariański / wegański" },
      { it: "sono allergico/a a…", pl: "mam alergię na…" },
      { it: "piccante", pl: "ostry" },
      { it: "al sangue / ben cotto", pl: "krwisty / dobrze wysmażony" },
      { it: "da bere", pl: "do picia" }
    ],
    culture: {
      titlePl: "Okiem Włocha: czego nie zamawiać",
      textPl: "<p><b>Spaghetti bolognese</b> nie istnieją we włoskim menu. W Bolonii je się <i>tagliatelle al ragù</i>, a spaghetti z tym sosem to wynalazek zagraniczny.</p>" +
        "<p><b>Fettuccine Alfredo</b> to danie amerykańskie. <b>Ser do ryby</b> uchodzi za wykroczenie, a proszenie o parmezan do owoców morza wywoła uprzejmą, ale wyraźną reakcję.</p>" +
        "<p><b>Ananas na pizzy</b> istnieje w niektórych pizzeriach turystycznych. To wybór, którego można dokonać — ale świadomie.</p>"
    },
    exercises: [
      { t: "mcq", q: "Kelner pyta „Naturale o frizzante?”. O co chodzi?",
        opts: ["O rodzaj makaronu", "O wodę: niegazowana czy gazowana", "O stopień wysmażenia"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Sono ___ ai frutti di mare.” (mam alergię na owoce morza, kobieta)",
        a: ["allergica"] },
      { t: "trans", dir: "pl-it", q: "„Dla mnie carbonara, poproszę.”",
        a: ["per me una carbonara per favore", "per me una carbonara, per favore", "prendo una carbonara per favore"] },
      { t: "mcq", q: "Kiedy Włosi piją kawę przy posiłku?",
        opts: ["W trakcie dania głównego", "Po deserze", "Zamiast wody"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["senza glutine", "bezglutenowy"], ["piccante", "ostry"], ["ben cotto", "dobrze wysmażony"], ["da bere", "do picia"]] },
      { t: "cloze", q: "Uzupełnij zamówienie.",
        text: "{{1}} me una pasta al pomodoro, {{2}} cipolla. Da bere, acqua {{3}}.",
        gaps: [["per"], ["senza"], ["naturale", "frizzante"]],
        pl: "Dla mnie makaron z pomidorami, bez cebuli. Do picia woda niegazowana." },
      { t: "order", pl: "Co jest w tym daniu?",
        tokens: ["Cosa", "c'è", "in", "questo", "piatto?"], a: ["cosa c'è in questo piatto"] },
      { t: "dialogue", q: "Kelner przyjmuje zamówienie.",
        setting: "Trattoria, stolik przy oknie.",
        lines: [
          { sp: "A", it: "Allora, cosa prendete?", pl: "No to co państwo biorą?" },
          { sp: "TY", pl: "Zamów cacio e pepe.", choices: ["Per me una cacio e pepe.", "Per me il conto.", "Sono cacio e pepe."], a: 0, plAnswer: "Dla mnie cacio e pepe." },
          { sp: "A", it: "Benissimo. E da bere?", pl: "Świetnie. A do picia?" },
          { sp: "TY", pl: "Poproś o butelkę wody niegazowanej.", choices: ["Una bottiglia d'acqua naturale.", "Un'acqua della casa.", "Una carbonara, grazie."], a: 0, plAnswer: "Butelkę wody niegazowanej." },
          { sp: "A", it: "Perfetto. Contorno?", pl: "Doskonale. Dodatek?" },
          { sp: "TY", pl: "Odmów uprzejmie.", choices: ["No grazie, così va bene.", "Sì, il conto.", "No, sono allergico."], a: 0, plAnswer: "Nie, dziękuję, tak jest dobrze." }
        ] },
      { t: "listen", it: "Sono vegetariana, questo piatto contiene carne?", pl: "Jestem wegetarianką, czy to danie zawiera mięso?" },
      { t: "speak", it: "Prendo la cacio e pepe. Da bere acqua frizzante.", pl: "Wezmę cacio e pepe. Do picia woda gazowana." }
    ]
  },
  {
    id: "a1-u07-l3",
    cefr: "A1",
    themePl: "Gramatyka podstawowa",
    titleIt: "Ne prendo due",
    titlePl: "Cząstka ne — pierwsze spotkanie",
    objectivesPl: [
      "zastąpić powtarzany rzeczownik cząstką ne",
      "odpowiedzieć na pytanie o ilość",
      "rozpoznać ne w codziennych zwrotach"
    ],
    theory: [
      { h: "Ne zastępuje część całości",
        p: "Kiedy mówisz o <b>ilości</b> czegoś, o czym już była mowa, powtórzenie rzeczownika brzmi ciężko. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Cząstka <em>ne</em> znaczy tu „z nich”, „tego”. Po polsku często nie tłumaczymy jej wcale: „Chcę trzy”." },
      { h: "Gdzie stoi",
        p: "Przed odmienionym czasownikiem, dokładnie jak zaimki: <em>ne prendo due</em>, <em>non ne voglio</em>. Przy bezokoliczniku doczepia się na końcu: <em>vorrei prender<b>ne</b> due</em>." },
      { h: "Ne zastępuje też „di + coś”",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> („Porozmawiamy o nim jutro.”) To użycie rozwiniemy na poziomie B1; teraz wystarczy je rozpoznawać." },
      { tip: "Bardzo częste zwroty z <em>ne</em>: <em>Non ne so nulla</em> (nic o tym nie wiem), <em>Che ne pensi?</em> (co o tym sądzisz?), <em>Me ne vado</em> (idę sobie)." }
    ],
    grammar: {
      title: "Ne w wyrażeniach ilości",
      table: {
        head: ["pytanie", "odpowiedź z ne", "po polsku"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "Chcę trzy."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "Wezmę kieliszek."],
          ["Hai fratelli?", "Sì, ne ho due.", "Tak, mam dwóch."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "Nie, dziękuję, już nie chcę."],
          ["Che ne pensi?", "—", "Co o tym sądzisz?"]
        ]
      },
      examples: [
        ["Quanti caffè bevi al giorno? — Ne bevo tre.", "Ile kaw pijesz dziennie? — Piję trzy."],
        ["Vuoi del pane? — Sì, ne prendo un po'.", "Chcesz chleba? — Tak, wezmę trochę."],
        ["Hai figli? — Ne ho una.", "Masz dzieci? — Mam jedną córkę."],
        ["Non ne so nulla.", "Nic o tym nie wiem."],
        ["Vorrei prenderne due.", "Chciałbym wziąć dwa.", "przy bezokoliczniku ne doczepia się"]
      ]
    },
    vocab: [
      { it: "ne", pl: "z tego, o tym (cząstka)" },
      { it: "quanti / quante", pl: "ile (m / ż)" },
      { it: "ancora", pl: "jeszcze" },
      { it: "un altro / un'altra", pl: "jeszcze jeden / jedna" },
      { it: "un pezzo", pl: "kawałek" },
      { it: "una fetta", pl: "plasterek, kawałek (ciasta)" },
      { it: "un bicchiere", pl: "szklanka, kieliszek" },
      { it: "una porzione", pl: "porcja" },
      { it: "basta", pl: "wystarczy" },
      { it: "che ne pensi?", pl: "co o tym sądzisz?" },
      { it: "non ne so nulla", pl: "nic o tym nie wiem" },
      { it: "me ne vado", pl: "idę sobie" }
    ],
    exercises: [
      { t: "mcq", q: "„Quante birre prendi? — Ne prendo due.” Co zastępuje „ne”?",
        opts: ["Ciebie", "„birre” — rzecz, o której mowa", "Nic, to ozdobnik"], a: 1 },
      { t: "fill", q: "Odpowiedz: „Hai fratelli? — Sì, ___ ho due.”", a: ["ne"] },
      { t: "fill", q: "Uzupełnij: „Vuoi del pane? — Sì, ___ prendo un po'.”", a: ["ne"] },
      { t: "mcq", q: "Gdzie stoi „ne” przy bezokoliczniku?",
        opts: ["Przed: „ne prendere”", "Doczepione na końcu: „prenderne”", "Na końcu zdania"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Ile kaw pijesz dziennie? — Piję trzy.”",
        a: ["quanti caffè bevi al giorno ne bevo tre", "quanti caffè bevi al giorno? ne bevo tre."] },
      { t: "match", q: "Połącz zwrot ze znaczeniem.",
        pairs: [["che ne pensi?", "co o tym sądzisz?"], ["non ne so nulla", "nic o tym nie wiem"], ["me ne vado", "idę sobie"], ["ne prendo due", "wezmę dwa"]] },
      { t: "cloze", q: "Uzupełnij rozmowę.",
        text: "— Vuoi ancora vino? — No grazie, non {{1}} voglio più. — E tu? — Sì, {{2}} prendo un altro bicchiere.",
        gaps: [["ne"], ["ne"]],
        pl: "— Chcesz jeszcze wina? — Nie, dziękuję, już nie chcę. — A ty? — Tak, wezmę jeszcze kieliszek." },
      { t: "order", pl: "Chciałbym wziąć dwa.",
        tokens: ["Vorrei", "prenderne", "due"], a: ["vorrei prenderne due"] },
      { t: "listen", it: "Quante fette di torta vuoi? — Ne voglio una, grazie.", pl: "Ile kawałków ciasta chcesz? — Chcę jeden, dziękuję." },
      { t: "speak", it: "Hai fratelli? — Sì, ne ho due.", pl: "Masz rodzeństwo? — Tak, mam dwóch braci." }
    ]
  },
  {
    id: "a1-u07-l4",
    cefr: "A1",
    themePl: "Restauracja",
    titleIt: "Il conto, per favore",
    titlePl: "Płacenie i wychodzenie",
    objectivesPl: [
      "poprosić o rachunek i zapłacić",
      "podzielić rachunek między osoby",
      "wyrazić opinię o posiłku"
    ],
    theory: [
      { h: "Rachunek trzeba poprosić",
        p: "Kelner nie przyniesie rachunku bez pytania — w kulturze włoskiej byłoby to pospieszaniem gościa. Standardowe zdanie: <em>Il conto, per favore</em> albo <em>Possiamo avere il conto?</em> Gest pisania w powietrzu też działa." },
      { h: "Dzielenie rachunku",
        p: "<strong>Alla romana</strong> znaczy „po równo, każdy tyle samo”. <em>Paghiamo alla romana</em> to najczęstsza formuła. Jeśli chcesz osobne rachunki: <em>Conti separati, per favore</em> — możliwe, ale w małych lokalach bywa problemem." },
      { h: "Opinia o posiłku",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Włosi chwalą jedzenie wprost i oczekują tego samego — milczenie po dobrym posiłku bywa odbierane jako chłód." },
      { tip: "<em>Offro io</em> („ja stawiam”) to zdanie, o które warto się bić. Odmowa gościa jest częścią rytuału, ale zwykle wygrywa ten, kto zaprosił." }
    ],
    grammar: {
      title: "Rachunek i pożegnanie",
      table: {
        head: ["sytuacja", "po włosku", "po polsku"],
        rows: [
          ["prośba", "Il conto, per favore.", "Poproszę rachunek."],
          ["po równo", "Paghiamo alla romana.", "Płacimy po równo."],
          ["osobno", "Conti separati, per favore.", "Osobne rachunki poproszę."],
          ["ja stawiam", "Offro io.", "Ja stawiam."],
          ["karta", "Si può pagare con la carta?", "Można zapłacić kartą?"],
          ["pochwała", "Era tutto buonissimo!", "Wszystko było wyśmienite!"]
        ]
      },
      examples: [
        ["Possiamo avere il conto, per favore?", "Możemy prosić o rachunek?"],
        ["Il coperto è due euro a persona.", "Nakrycie to dwa euro od osoby."],
        ["Purtroppo il POS non funziona.", "Niestety terminal nie działa."],
        ["Tenga pure il resto.", "Proszę zatrzymać resztę."],
        ["Complimenti al cuoco, squisito!", "Gratulacje dla kucharza, wyśmienite!"],
        ["Buona serata!", "Miłego wieczoru!"]
      ]
    },
    vocab: [
      { it: "il conto", pl: "rachunek" },
      { it: "alla romana", pl: "po równo" },
      { it: "conti separati", pl: "osobne rachunki" },
      { it: "offro io", pl: "ja stawiam" },
      { it: "la mancia", pl: "napiwek" },
      { it: "il POS", pl: "terminal płatniczy" },
      { it: "il resto", pl: "reszta" },
      { it: "squisito", pl: "wyśmienity" },
      { it: "complimenti", pl: "gratulacje" },
      { it: "era tutto buonissimo", pl: "wszystko było wyśmienite" },
      { it: "buona serata", pl: "miłego wieczoru" },
      { it: "torneremo", pl: "wrócimy" }
    ],
    exercises: [
      { t: "mcq", q: "Co znaczy „pagare alla romana”?",
        opts: ["Zapłacić gotówką", "Podzielić rachunek po równo", "Zapłacić za wszystkich"], a: 1 },
      { t: "mcq", q: "Dlaczego kelner nie przynosi rachunku sam?",
        opts: ["Bo zapomina", "Bo byłoby to pospieszaniem gościa", "Bo to zabronione"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Możemy prosić o rachunek?”",
        a: ["possiamo avere il conto", "possiamo avere il conto?", "il conto per favore"] },
      { t: "fill", q: "Uzupełnij: „___ io!” (ja stawiam)", a: ["offro"] },
      { t: "match", q: "Połącz.",
        pairs: [["la mancia", "napiwek"], ["il resto", "reszta"], ["squisito", "wyśmienity"], ["conti separati", "osobne rachunki"]] },
      { t: "cloze", q: "Uzupełnij zakończenie kolacji.",
        text: "— {{1}} tutto buonissimo, complimenti! — Grazie! — Il {{2}}, per favore. Si può pagare con la {{3}}?",
        gaps: [["era"], ["conto"], ["carta"]],
        pl: "— Wszystko było wyśmienite, gratulacje! — Dziękuję! — Poproszę rachunek. Można zapłacić kartą?" },
      { t: "order", pl: "Płacimy po równo, dziękuję.",
        tokens: ["Paghiamo", "alla", "romana,", "grazie"], a: ["paghiamo alla romana grazie"] },
      { t: "dialogue", q: "Koniec kolacji.",
        setting: "Talerze puste, kelner przechodzi obok.",
        lines: [
          { sp: "TY", pl: "Poproś o rachunek.", choices: ["Il conto, per favore.", "Il coperto, per favore.", "Il contorno, per favore."], a: 0, plAnswer: "Poproszę rachunek." },
          { sp: "A", it: "Subito. Tutto bene stasera?", pl: "Już podaję. Wszystko dobrze dziś wieczorem?" },
          { sp: "TY", pl: "Pochwal jedzenie.", choices: ["Era tutto buonissimo, complimenti!", "Era tutto caro.", "Non c'è male."], a: 0, plAnswer: "Wszystko było wyśmienite, gratulacje!" },
          { sp: "A", it: "Grazie mille! Sono quarantasei euro.", pl: "Bardzo dziękuję! To czterdzieści sześć euro." },
          { sp: "TY", pl: "Zapytaj, czy można kartą.", choices: ["Si può pagare con la carta?", "Posso avere il resto?", "Offro io il conto?"], a: 0, plAnswer: "Można zapłacić kartą?" }
        ] },
      { t: "listen", it: "Il conto è quarantasei euro, coperto incluso.", pl: "Rachunek to czterdzieści sześć euro, z nakryciem." },
      { t: "speak", it: "Era tutto buonissimo, complimenti al cuoco!", pl: "Wszystko było wyśmienite, gratulacje dla kucharza!" }
    ]
  }
  ],
  test: {
    id: "a1-u07-test",
    cefr: "A1", themePl: "Sprawdzian",
    titleIt: "Test — A tavola", titlePl: "Sprawdzian jednostki 7",
    objectivesPl: ["sprawdzić słownictwo restauracyjne, zamawianie i cząstkę ne"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Il contorno” to:", opts: ["deser", "dodatek warzywny", "opłata za nakrycie"], a: 1 },
      { t: "mcq", q: "„Il coperto” to:", opts: ["danie mięsne", "opłata za nakrycie", "napiwek"], a: 1 },
      { t: "fill", q: "„Vorrei ___ un tavolo per due.”", a: ["prenotare"] },
      { t: "fill", q: "„Hai fratelli? — Sì, ___ ho due.”", a: ["ne"] },
      { t: "fill", q: "„Sono ___ ai frutti di mare.” (kobieta)", a: ["allergica"] },
      { t: "trans", dir: "pl-it", q: "„Poproszę rachunek.”", a: ["il conto per favore", "il conto, per favore"] },
      { t: "match", q: "Połącz.", pairs: [["alla romana", "po równo"], ["offro io", "ja stawiam"], ["squisito", "wyśmienity"], ["da bere", "do picia"]] },
      { t: "order", pl: "Dla mnie carbonara, bez cebuli.",
        tokens: ["Per", "me", "una", "carbonara,", "senza", "cipolla"], a: ["per me una carbonara senza cipolla"] },
      { t: "listen", it: "Da bere prendiamo una bottiglia d'acqua naturale.", pl: "Do picia weźmiemy butelkę wody niegazowanej." },
      { t: "speak", it: "Possiamo avere il conto, per favore?", pl: "Możemy prosić o rachunek?" }
    ]
  }
}

]);
