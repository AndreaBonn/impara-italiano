/* ============================================================
   C2 — jednostki 1–3
   Participi e perifrasi · Plurali e derivazione · Sfumature
   ============================================================ */
LINGUAI.addUnits("C2", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 1 — PARTICIPI E PERIFRASI
   ══════════════════════════════════════════════════════════════ */
{
  id: "c2-u01",
  icon: "🪶",
  titleIt: "Participi e perifrasi",
  titlePl: "Imiesłowy i peryfrazy",
  grammarPl: "participio presente i passato · perifrasi verbali · formy implicite",
  lessons: [
  {
    id: "c2-u01-l1",
    cefr: "C2",
    themePl: "Gramatyka najwyższego poziomu",
    titleIt: "Il participio presente",
    titlePl: "Imiesłów czynny: trzy życia",
    objectivesPl: [
      "odróżnić użycie przymiotnikowe, rzeczownikowe i czasownikowe",
      "rozpoznać participio presente w tekstach prawnych",
      "uniknąć nadużywania go w mowie"
    ],
    theory: [
      { h: "Forma prawie martwa jako czasownik, żywa jako słowo",
        p: "Imiesłów czynny na <em>-ante / -ente</em> stracił we współczesnym włoskim funkcję czasownikową, ale zostawił po sobie setki przymiotników i rzeczowników: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Wszystkie to dawne imiesłowy." },
      { h: "Użycie czasownikowe: prawo i administracja",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Tu <em>derivante</em> zastępuje zdanie względne <em>che deriva</em>. Konstrukcja żyje w tekstach prawnych, technicznych i naukowych; poza nimi brzmi sztucznie." },
      { h: "Jak to czytać",
        p: "Napotykając <em>-ante/-ente</em> w tekście prawnym, przekładaj je odruchowo na zdanie względne: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. To najszybszy sposób rozszyfrowania długiego zdania urzędowego." },
      { trap: "Nie każde słowo na <em>-ente</em> jest imiesłowem. <em>Paziente</em>, <em>presente</em>, <em>parente</em> to dziś samodzielne rzeczowniki lub przymiotniki, których nie da się rozłożyć na zdanie względne." }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["forma", "użycie", "przykład"],
        rows: [
          ["brillante", "przymiotnik", "una carriera brillante"],
          ["insegnante", "rzeczownik", "un'insegnante di liceo"],
          ["derivante", "czasownikowe", "il denaro derivante dalle offerte"],
          ["richiedente", "rzeczownik + czasownikowe", "i soggetti richiedenti"],
          ["seguente", "przymiotnik", "il giorno seguente"],
          ["proveniente", "czasownikowe", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        ["I documenti attestanti il requisito vanno allegati.", "Dokumenty poświadczające spełnienie wymogu należy załączyć."],
        ["Le somme risultanti dal bilancio sono state verificate.", "Kwoty wynikające z bilansu zostały zweryfikowane."],
        ["Un discorso convincente, ma privo di dati.", "Przekonująca mowa, ale bez danych."],
        ["I passeggeri provenienti dall'estero devono compilare il modulo.", "Pasażerowie przybywający z zagranicy muszą wypełnić formularz."],
        ["È stata una scelta perdente fin dall'inizio.", "To był przegrany wybór od samego początku."],
        ["Gli aventi diritto riceveranno una comunicazione.", "Uprawnieni otrzymają powiadomienie.", "„aventi diritto” to zastygła formuła prawna"]
      ]
    },
    vocab: [
      { it: "attestante", pl: "poświadczający" },
      { it: "risultante", pl: "wynikający" },
      { it: "proveniente", pl: "pochodzący, przybywający" },
      { it: "richiedente", pl: "wnioskodawca" },
      { it: "avente diritto", pl: "uprawniony" },
      { it: "convincente", pl: "przekonujący" },
      { it: "seguente", pl: "następujący" },
      { it: "precedente", pl: "poprzedni" },
      { it: "vigente", pl: "obowiązujący" },
      { it: "il requisito", pl: "wymóg" },
      { it: "il bilancio", pl: "bilans, budżet" },
      { it: "privo di", pl: "pozbawiony" }
    ],
    exercises: [
      { t: "mcq", q: "„Il denaro derivante dalle offerte” można zastąpić przez:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"], a: 0 },
      { t: "mcq", q: "„Gli aventi diritto” to:",
        opts: ["mający rację", "uprawnieni", "posiadacze"], a: 1 },
      { t: "fill", q: "Zamień na zdanie względne: „i passeggeri provenienti dall'estero” → „i passeggeri ___ provengono dall'estero”",
        a: ["che"] },
      { t: "match", q: "Połącz.",
        pairs: [["attestante", "poświadczający"], ["risultante", "wynikający"], ["vigente", "obowiązujący"], ["privo di", "pozbawiony"]] },
      { t: "mcq", q: "W jakim rejestrze participio presente jest jeszcze czasownikowe?",
        opts: ["w mowie potocznej", "w tekstach prawnych i technicznych", "w poezji"], a: 1 },
      { t: "multi", q: "Które z tych słów pochodzą od imiesłowu czynnego?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"], a: [0, 2, 3] },
      { t: "cloze", q: "Uzupełnij tekst urzędowy.",
        text: "I documenti {{1}} il requisito vanno allegati all'istanza dai soggetti {{2}}.",
        gaps: [["attestanti"], ["richiedenti"]],
        pl: "Dokumenty poświadczające spełnienie wymogu wnioskodawcy załączają do wniosku." },
      { t: "trans", dir: "pl-it", q: "„Kwoty wynikające z bilansu zostały zweryfikowane.”",
        a: ["le somme risultanti dal bilancio sono state verificate"] },
      { t: "listen", it: "Gli aventi diritto riceveranno una comunicazione entro trenta giorni.", pl: "Uprawnieni otrzymają powiadomienie w ciągu trzydziestu dni." },
      { t: "speak", it: "Un discorso convincente, ma privo di dati concreti.", pl: "Przekonująca mowa, ale bez konkretnych danych." }
    ]
  },
  {
    id: "c2-u01-l2",
    cefr: "C2",
    themePl: "Gramatyka najwyższego poziomu",
    titleIt: "Participio assoluto",
    titlePl: "Imiesłów bierny w zdaniach skróconych",
    objectivesPl: [
      "zbudować konstrukcję absolutną z imiesłowem",
      "zachować zgodność imiesłowu",
      "skondensować tekst pisany"
    ],
    theory: [
      { h: "Konstrukcja absolutna",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Imiesłów bierny z własnym rzeczownikiem tworzy zdanie skrócone o wartości czasowej lub przyczynowej. Rzeczownik stoi <b>po</b> imiesłowie, a imiesłów zgadza się z nim rodzajem i liczbą." },
      { h: "Z czasownikami przechodnimi i nieprzechodnimi",
        p: "Przechodnie: <em>Letto il contratto, ho firmato.</em> Nieprzechodnie z <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> W obu przypadkach zgodność jest obowiązkowa." },
      { h: "Wzmocnienia",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Dodanie <em>una volta</em> albo <em>appena</em> uściśla relację czasową i brzmi bardziej naturalnie w tekście." },
      { trap: "Konstrukcja absolutna wymaga, żeby jej podmiot był <b>inny</b> niż podmiot zdania głównego albo żeby był to dopełnienie. Zdanie <em>Finito il lavoro, sono uscito</em> jest poprawne, bo <em>il lavoro</em> nie jest podmiotem zdania głównego." }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["konstrukcja", "odpowiednik pełny", "wartość"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "czasowa"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "czasowa"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "czasowa"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "przyczynowa"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "warunkowo-czasowa"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "urzędowa"]
        ]
      },
      examples: [
        ["Vista l'urgenza, procediamo senza attendere.", "Wobec pilności działamy bez czekania."],
        ["Terminati i lavori, la strada è stata riaperta.", "Po zakończeniu prac ulicę otwarto ponownie."],
        ["Una volta ricevuta la conferma, potrà partire.", "Po otrzymaniu potwierdzenia będzie mógł wyruszyć."],
        ["Fatte le dovute verifiche, la domanda è stata accolta.", "Po dokonaniu należnych weryfikacji wniosek został uwzględniony."],
        ["Arrivati a destinazione, ci siamo accorti dell'errore.", "Po dotarciu na miejsce zorientowaliśmy się w błędzie."],
        ["Esclusi i costi fissi, il bilancio è positivo.", "Po wyłączeniu kosztów stałych bilans jest dodatni."]
      ]
    },
    vocab: [
      { it: "vista l'urgenza", pl: "wobec pilności" },
      { it: "terminare", pl: "kończyć" },
      { it: "riaprire", pl: "otwierać ponownie" },
      { it: "accogliere una domanda", pl: "uwzględnić wniosek" },
      { it: "le dovute verifiche", pl: "należne weryfikacje" },
      { it: "escludere", pl: "wyłączać" },
      { it: "la destinazione", pl: "miejsce docelowe" },
      { it: "accorgersi di", pl: "zorientować się w" },
      { it: "una volta + imiesłów", pl: "po tym, jak" },
      { it: "appena + imiesłów", pl: "ledwie, zaraz po" },
      { it: "il presupposto", pl: "przesłanka" },
      { it: "in via preliminare", pl: "wstępnie" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij zgodność: „Terminat___ i lavori, la strada è stata riaperta.”",
        a: ["i"] },
      { t: "fill", q: "Uzupełnij zgodność: „Finit___ la riunione, siamo usciti.”", a: ["a"] },
      { t: "mcq", q: "„Vista la situazione” ma wartość:",
        opts: ["czasową", "przyczynową", "warunkową"], a: 1 },
      { t: "mcq", q: "Gdzie stoi rzeczownik w konstrukcji absolutnej?",
        opts: ["przed imiesłowem", "po imiesłowie", "na końcu zdania"], a: 1 },
      { t: "cloze", q: "Zbuduj konstrukcje absolutne.",
        text: "{{1}} (leggere) il contratto, ho firmato. {{2}} (escludere) i costi fissi, il bilancio è positivo.",
        gaps: [["letto"], ["esclusi"]],
        pl: "Po przeczytaniu umowy podpisałem. Po wyłączeniu kosztów stałych bilans jest dodatni." },
      { t: "trans", dir: "pl-it", q: "„Po otrzymaniu potwierdzenia będzie mógł wyruszyć.”",
        a: ["una volta ricevuta la conferma potrà partire", "ricevuta la conferma potrà partire"] },
      { t: "order", pl: "Po dotarciu na miejsce zorientowaliśmy się w błędzie.",
        tokens: ["Arrivati", "a", "destinazione,", "ci", "siamo", "accorti", "dell'errore"],
        a: ["arrivati a destinazione ci siamo accorti dell'errore"] },
      { t: "mcq", q: "Po co dodaje się „una volta” przed imiesłowem?",
        opts: ["dla rytmu", "żeby uściślić relację czasową", "bo wymaga tego gramatyka"], a: 1 },
      { t: "listen", it: "Fatte le dovute verifiche, la domanda è stata accolta.", pl: "Po dokonaniu należnych weryfikacji wniosek został uwzględniony." },
      { t: "speak", it: "Vista l'urgenza, procediamo senza attendere ulteriori conferme.", pl: "Wobec pilności działamy bez czekania na dalsze potwierdzenia." }
    ]
  },
  {
    id: "c2-u01-l3",
    cefr: "C2",
    themePl: "Gramatyka najwyższego poziomu",
    titleIt: "Perifrasi verbali",
    titlePl: "Peryfrazy czasownikowe",
    objectivesPl: [
      "rozpoznać peryfrazy aspektowe, modalne i gerundialne",
      "wyrazić fazę czynności precyzyjnie",
      "użyć va + imiesłów i ho da + bezokolicznik"
    ],
    theory: [
      { h: "Peryfraza dodaje aspekt, którego czas nie ma",
        p: "Włoski nie ma osobnych form dla „zaraz zacznę”, „właśnie kończę”, „stopniowo rośnie”. Robią to peryfrazy: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>." },
      { h: "Aspektowe",
        list: [
          "<em>stare per + bezokolicznik</em> — zaraz coś zrobić",
          "<em>essere sul punto di</em> — być o krok od",
          "<em>accingersi a</em> — przystępować do (rejestr wyższy)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gerundio</em> — w toku"
        ] },
      { h: "Modalne",
        p: "<em>Il compito <b>va</b> rivisto</em> (trzeba poprawić), <em><b>Ho da</b> studiare</em> (mam do zrobienia), <em><b>C'è da</b> aspettare</em> (trzeba czekać), <em><b>Sarebbe da</b> rifare</em> (należałoby zrobić od nowa)." },
      { h: "Gerundialne w piśmie",
        p: "<em>Il fenomeno <b>va crescendo</b></em> („zjawisko stopniowo narasta”) to peryfraza z <em>andare</em> + gerundio, typowa dla rejestru pisanego. Odróżnij ją od <em>va rivisto</em>, gdzie <em>andare</em> ma sens obowiązku." }
    ],
    grammar: {
      title: "Katalog peryfraz",
      table: {
        head: ["typ", "konstrukcja", "znaczenie"],
        rows: [
          ["aspektowa", "sto per partire", "zaraz wyjeżdżam"],
          ["aspektowa", "sono sul punto di rinunciare", "jestem o krok od rezygnacji"],
          ["aspektowa", "mi accingo a rispondere", "przystępuję do odpowiedzi"],
          ["progresywna", "sto scrivendo", "właśnie piszę"],
          ["progresywna", "il fenomeno va crescendo", "zjawisko narasta"],
          ["modalna", "il testo va rivisto", "tekst trzeba poprawić"],
          ["modalna", "ho da fare", "mam co robić"],
          ["modalna", "c'è da aspettare", "trzeba poczekać"]
        ]
      },
      examples: [
        ["Sto per uscire, ti richiamo dopo.", "Zaraz wychodzę, oddzwonię."],
        ["Ero sul punto di rinunciare quando è arrivata la risposta.", "Byłem o krok od rezygnacji, gdy przyszła odpowiedź."],
        ["Il numero di richieste va aumentando di mese in mese.", "Liczba wniosków rośnie z miesiąca na miesiąc."],
        ["Questo capitolo va riscritto interamente.", "Ten rozdział trzeba napisać od nowa."],
        ["C'è ancora molto da fare prima della scadenza.", "Przed terminem jest jeszcze dużo do zrobienia."],
        ["Mi accingo a illustrare i risultati.", "Przystępuję do przedstawienia wyników."]
      ]
    },
    vocab: [
      { it: "stare per", pl: "zaraz coś zrobić" },
      { it: "essere sul punto di", pl: "być o krok od" },
      { it: "accingersi a", pl: "przystępować do" },
      { it: "seguitare a", pl: "kontynuować (książkowo)" },
      { it: "andare + gerundio", pl: "stopniowo się dziać" },
      { it: "andare + imiesłów", pl: "trzeba coś zrobić" },
      { it: "avere da", pl: "mieć do zrobienia" },
      { it: "esserci da", pl: "trzeba" },
      { it: "rinunciare", pl: "rezygnować" },
      { it: "illustrare", pl: "przedstawiać" },
      { it: "interamente", pl: "w całości" },
      { it: "di mese in mese", pl: "z miesiąca na miesiąc" }
    ],
    exercises: [
      { t: "mcq", q: "„Il testo va rivisto” znaczy:",
        opts: ["tekst idzie poprawiony", "tekst trzeba poprawić", "tekst jest poprawiany"], a: 1 },
      { t: "mcq", q: "„Il fenomeno va crescendo” znaczy:",
        opts: ["zjawisko trzeba zwiększyć", "zjawisko stopniowo narasta", "zjawisko idzie rosnąć"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ per uscire, ti richiamo dopo.” (zaraz wychodzę)",
        a: ["sto"] },
      { t: "fill", q: "Uzupełnij: „C'è ancora molto ___ fare.” (do zrobienia)", a: ["da"] },
      { t: "match", q: "Połącz.",
        pairs: [["accingersi a", "przystępować do"], ["essere sul punto di", "być o krok od"], ["avere da", "mieć do zrobienia"], ["seguitare a", "kontynuować"]] },
      { t: "mcq", q: "Czym różni się „va rivisto” od „va crescendo”?",
        opts: ["Niczym", "Pierwsze wyraża obowiązek, drugie stopniowy proces", "Pierwsze to czas przyszły"], a: 1 },
      { t: "cloze", q: "Uzupełnij peryfrazy.",
        text: "{{1}} sul punto di rinunciare, ma il numero di richieste {{2}} aumentando.",
        gaps: [["ero"], ["va"]],
        pl: "Byłem o krok od rezygnacji, ale liczba wniosków rośnie." },
      { t: "trans", dir: "pl-it", q: "„Ten rozdział trzeba napisać od nowa.”",
        a: ["questo capitolo va riscritto", "questo capitolo va riscritto interamente"] },
      { t: "listen", it: "Mi accingo a illustrare i risultati della ricerca.", pl: "Przystępuję do przedstawienia wyników badania." },
      { t: "speak", it: "Ero sul punto di rinunciare quando è arrivata la risposta.", pl: "Byłem o krok od rezygnacji, gdy przyszła odpowiedź." }
    ]
  }
  ],
  test: {
    id: "c2-u01-test",
    cefr: "C2", themePl: "Sprawdzian",
    titleIt: "Test — Participi e perifrasi", titlePl: "Sprawdzian jednostki 1",
    objectivesPl: ["sprawdzić imiesłowy i peryfrazy czasownikowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Gli aventi diritto”:", opts: ["mający rację", "uprawnieni", "posiadacze"], a: 1 },
      { t: "fill", q: "„i passeggeri provenienti dall'estero” → „i passeggeri ___ provengono…”", a: ["che"] },
      { t: "fill", q: "Zgodność: „Terminat___ i lavori…”", a: ["i"] },
      { t: "fill", q: "Zgodność: „Finit___ la riunione…”", a: ["a"] },
      { t: "mcq", q: "„Vista la situazione” ma wartość:", opts: ["czasową", "przyczynową", "warunkową"], a: 1 },
      { t: "mcq", q: "„Il testo va rivisto”:", opts: ["idzie poprawiony", "trzeba poprawić", "jest poprawiany"], a: 1 },
      { t: "mcq", q: "„Il fenomeno va crescendo”:", opts: ["trzeba zwiększyć", "stopniowo narasta", "będzie rosło"], a: 1 },
      { t: "fill", q: "„C'è molto ___ fare.”", a: ["da"] },
      { t: "listen", it: "Fatte le dovute verifiche, il progetto va comunque rivisto.", pl: "Po dokonaniu należnych weryfikacji projekt i tak trzeba poprawić." },
      { t: "speak", it: "Una volta ricevuta la conferma, procederemo senza indugio.", pl: "Po otrzymaniu potwierdzenia przystąpimy do działania bez zwłoki." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 2 — PLURALI E DERIVAZIONE
   ══════════════════════════════════════════════════════════════ */
{
  id: "c2-u02",
  icon: "🧬",
  titleIt: "Plurali e derivazione",
  titlePl: "Liczba mnoga i słowotwórstwo",
  grammarPl: "podwójne liczby mnogie · wyrazy złożone · alteracja · przymiotniki uczone",
  lessons: [
  {
    id: "c2-u02-l1",
    cefr: "C2",
    themePl: "Leksyka zaawansowana",
    titleIt: "Le ossa e gli ossi",
    titlePl: "Podwójna liczba mnoga",
    objectivesPl: [
      "rozróżnić dwie formy liczby mnogiej tego samego rzeczownika",
      "wybrać właściwą zależnie od znaczenia",
      "unikać typowych pomyłek"
    ],
    theory: [
      { h: "Jedna forma pojedyncza, dwie mnogie",
        p: "Kilkanaście rzeczowników rodzaju męskiego ma dwie liczby mnogie: regularną na <em>-i</em> (męską) i nieregularną na <em>-a</em> (żeńską). Różnica nie jest stylistyczna — to dwa różne znaczenia." },
      { h: "Zasada ogólna",
        p: "Forma żeńska na <em>-a</em> zwykle oznacza <b>całość, zbiór albo znaczenie dosłowne cielesne</b>; forma męska na <em>-i</em> oznacza <b>pojedyncze egzemplarze albo znaczenie przenośne</b>." },
      { h: "Najważniejsze pary",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (szkielet człowieka) / <b>gli ossi</b> (pojedyncze kości, np. dla psa)",
          "<em>il braccio</em> → <b>le braccia</b> (ramiona ciała) / <b>i bracci</b> (ramiona dźwigu, rzeki)",
          "<em>il muro</em> → <b>le mura</b> (mury miejskie) / <b>i muri</b> (ściany)",
          "<em>il filo</em> → <b>le fila</b> (wątki, powiązania) / <b>i fili</b> (nitki, przewody)",
          "<em>il frutto</em> → <b>i frutti</b> (owoce w sensie efektów) / <b>la frutta</b> (owoce jako jedzenie, zbiorowo)",
          "<em>il dito</em> → <b>le dita</b> (palce ręki jako całość) / <b>i diti</b> (rzadkie, pojedyncze)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (komplet pościeli) / <b>i lenzuoli</b> (pojedyncze prześcieradła)"
        ] },
      { tip: "<em>Le fila del discorso</em> („wątki wypowiedzi”) i <em>tirare le fila</em> („pociągać za sznurki”) to wyrażenia, w których forma żeńska jest jedyną możliwą." }
    ],
    grammar: {
      title: "Podwójne liczby mnogie",
      table: {
        head: ["l. poj.", "forma na -a", "forma na -i"],
        rows: [
          ["l'osso", "le ossa (szkielet)", "gli ossi (pojedyncze kości)"],
          ["il braccio", "le braccia (ciała)", "i bracci (dźwigu, rzeki)"],
          ["il muro", "le mura (miejskie)", "i muri (ściany)"],
          ["il filo", "le fila (wątki)", "i fili (przewody)"],
          ["il frutto", "la frutta (jedzenie)", "i frutti (efekty)"],
          ["il dito", "le dita (palce)", "i diti (rzadkie)"],
          ["il lenzuolo", "le lenzuola (pościel)", "i lenzuoli (sztuki)"],
          ["il ciglio", "le ciglia (rzęsy)", "i cigli (krawędzie drogi)"]
        ]
      },
      examples: [
        ["Mi fanno male le ossa.", "Bolą mnie kości."],
        ["Il cane rosicchia gli ossi.", "Pies obgryza kości."],
        ["Le mura della città sono medievali.", "Mury miejskie są średniowieczne."],
        ["I muri di casa sono sottili.", "Ściany w domu są cienkie."],
        ["Ha raccolto i frutti del suo lavoro.", "Zebrał owoce swojej pracy."],
        ["A pranzo mangio sempre la frutta.", "Na obiad zawsze jem owoce."]
      ]
    },
    vocab: [
      { it: "le ossa / gli ossi", pl: "kości (szkielet) / pojedyncze kości" },
      { it: "le braccia / i bracci", pl: "ramiona / ramiona dźwigu" },
      { it: "le mura / i muri", pl: "mury miejskie / ściany" },
      { it: "le fila / i fili", pl: "wątki / przewody" },
      { it: "la frutta / i frutti", pl: "owoce (jedzenie) / owoce (efekty)" },
      { it: "le dita / i diti", pl: "palce" },
      { it: "le ciglia / i cigli", pl: "rzęsy / krawędzie drogi" },
      { it: "le lenzuola", pl: "pościel" },
      { it: "rosicchiare", pl: "obgryzać" },
      { it: "medievale", pl: "średniowieczny" },
      { it: "tirare le fila", pl: "pociągać za sznurki" },
      { it: "raccogliere i frutti", pl: "zbierać owoce (efekty)" }
    ],
    exercises: [
      { t: "mcq", q: "„Mi fanno male ___.” (bolą mnie kości)",
        opts: ["gli ossi", "le ossa", "i ossi"], a: 1 },
      { t: "mcq", q: "„___ della città sono medievali.” (mury miejskie)",
        opts: ["I muri", "Le mura", "I muri della"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Ha raccolto ___ del suo lavoro.” (owoce w sensie efektów)",
        a: ["i frutti"] },
      { t: "fill", q: "Uzupełnij: „A pranzo mangio sempre ___.” (owoce jako jedzenie)",
        a: ["la frutta"] },
      { t: "match", q: "Połącz formę ze znaczeniem.",
        pairs: [["le braccia", "ramiona ciała"], ["i bracci", "ramiona dźwigu"], ["le fila", "wątki"], ["i fili", "przewody"]] },
      { t: "mcq", q: "„Tirare le fila” znaczy:",
        opts: ["ciągnąć nitki", "pociągać za sznurki, kierować", "rozplątywać"], a: 1 },
      { t: "cloze", q: "Uzupełnij formy.",
        text: "{{1}} della città sono antiche, ma {{2}} di casa mia sono sottili.",
        gaps: [["le mura"], ["i muri"]],
        pl: "Mury miejskie są stare, ale ściany w moim domu są cienkie." },
      { t: "trans", dir: "pl-it", q: "„Pies obgryza kości.”", a: ["il cane rosicchia gli ossi"] },
      { t: "listen", it: "Le dita erano gelate e le ossa mi facevano male.", pl: "Palce były zmarznięte, a kości mnie bolały." },
      { t: "speak", it: "Ha finalmente raccolto i frutti del suo lavoro.", pl: "Wreszcie zebrał owoce swojej pracy." }
    ]
  },
  {
    id: "c2-u02-l2",
    cefr: "C2",
    themePl: "Leksyka zaawansowana",
    titleIt: "I nomi composti",
    titlePl: "Wyrazy złożone i ich liczba mnoga",
    objectivesPl: [
      "utworzyć liczbę mnogą wyrazu złożonego",
      "rozpoznać typ złożenia",
      "uniknąć najczęstszych pomyłek"
    ],
    theory: [
      { h: "Cztery wzorce",
        list: [
          "<b>bez zmian</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>zmienia się drugi człon</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>zmienia się pierwszy człon</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>zmieniają się oba</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ] },
      { h: "Reguła praktyczna dla „capo-”",
        p: "Gdy <em>capo</em> oznacza <b>osobę stojącą na czele</b>, zmienia się on: <em>i capistazione, i capireparto, i capifamiglia</em>. Gdy oznacza <b>coś najlepszego lub początek</b>, zmienia się drugi człon: <em>i capolavori, i capoluoghi</em>." },
      { h: "Czasownik + rzeczownik",
        p: "Złożenia typu <em>portacenere, apriscatole, spazzaneve, salvagente</em> są zwykle <b>nieodmienne</b>, bo pierwszy człon jest formą czasownikową. Wyjątki istnieją, ale nieodmienność jest bezpiecznym domyślnym wyborem." },
      { tip: "W razie wątpliwości sprawdź w słowniku Treccani albo De Mauro. Ta grupa jest jedną z niewielu, w których intuicja rodzimych użytkowników też bywa niepewna." }
    ],
    grammar: {
      title: "Liczba mnoga wyrazów złożonych",
      table: {
        head: ["typ", "l. poj.", "l. mn."],
        rows: [
          ["czasownik + rzeczownik", "il portacenere", "i portacenere"],
          ["czasownik + rzeczownik", "l'apriscatole", "gli apriscatole"],
          ["capo (osoba)", "il capostazione", "i capistazione"],
          ["capo (najlepszy)", "il capolavoro", "i capolavori"],
          ["rzeczownik + rzeczownik", "il cavolfiore", "i cavolfiori"],
          ["rzeczownik + przymiotnik", "la cassaforte", "le casseforti"],
          ["przymiotnik + rzeczownik", "il bassofondo", "i bassifondi"],
          ["z przyimkiem", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        ["I capistazione hanno firmato il verbale.", "Zawiadowcy podpisali protokół."],
        ["Ha scritto tre capolavori in dieci anni.", "Napisał trzy arcydzieła w dziesięć lat."],
        ["Le casseforti sono state svuotate.", "Sejfy zostały opróżnione."],
        ["Comprami due apriscatole, per favore.", "Kup mi dwa otwieracze do konserw."],
        ["I capoluoghi di regione sono venti.", "Stolic regionów jest dwadzieścia."],
        ["Gli asciugamani puliti sono nell'armadio.", "Czyste ręczniki są w szafie."]
      ]
    },
    vocab: [
      { it: "il capolavoro", pl: "arcydzieło" },
      { it: "il capoluogo", pl: "stolica regionu" },
      { it: "il capostazione", pl: "zawiadowca stacji" },
      { it: "il capofamiglia", pl: "głowa rodziny" },
      { it: "la cassaforte", pl: "sejf" },
      { it: "il bassofondo", pl: "męty, dno społeczne" },
      { it: "l'apriscatole", pl: "otwieracz do konserw" },
      { it: "il portacenere", pl: "popielniczka" },
      { it: "lo spazzaneve", pl: "pług śnieżny" },
      { it: "il salvagente", pl: "koło ratunkowe" },
      { it: "il verbale", pl: "protokół" },
      { it: "svuotare", pl: "opróżniać" }
    ],
    exercises: [
      { t: "fill", q: "Liczba mnoga od „il capolavoro”: ___", a: ["i capolavori", "capolavori"] },
      { t: "fill", q: "Liczba mnoga od „il capostazione”: ___", a: ["i capistazione", "capistazione"] },
      { t: "fill", q: "Liczba mnoga od „la cassaforte”: ___", a: ["le casseforti", "casseforti"] },
      { t: "fill", q: "Liczba mnoga od „il portacenere”: ___", a: ["i portacenere", "portacenere"] },
      { t: "mcq", q: "Dlaczego „i capistazione”, a nie „i capostazioni”?",
        opts: ["To wyjątek bez reguły", "Bo capo oznacza tu osobę stojącą na czele", "Bo stazione jest żeńskie"], a: 1 },
      { t: "multi", q: "Które złożenia są nieodmienne?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"], a: [0, 2, 3] },
      { t: "cloze", q: "Uzupełnij liczby mnogie.",
        text: "{{1}} di regione sono venti; {{2}} sono state svuotate durante la notte.",
        gaps: [["i capoluoghi"], ["le casseforti"]],
        pl: "Stolic regionów jest dwadzieścia; sejfy zostały opróżnione w nocy." },
      { t: "trans", dir: "pl-it", q: "„Czyste ręczniki są w szafie.”",
        a: ["gli asciugamani puliti sono nell'armadio"] },
      { t: "listen", it: "I capireparto hanno chiesto un incontro con la direzione.", pl: "Kierownicy działów poprosili o spotkanie z dyrekcją." },
      { t: "speak", it: "Ha scritto tre capolavori in meno di dieci anni.", pl: "Napisał trzy arcydzieła w niecałe dziesięć lat." }
    ]
  },
  {
    id: "c2-u02-l3",
    cefr: "C2",
    themePl: "Leksyka zaawansowana",
    titleIt: "Alterati e aggettivi dotti",
    titlePl: "Zdrobnienia i przymiotniki uczone",
    objectivesPl: [
      "użyć sufiksów alterujących świadomie",
      "rozpoznać przymiotniki o zmienionej podstawie",
      "dobrać rejestr leksykalny"
    ],
    theory: [
      { h: "Alterazione: cztery kierunki",
        list: [
          "<b>zdrobnienie</b> (<em>diminutivo</em>): <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>zgrubienie</b> (<em>accrescitivo</em>): <em>-one</em> — <em>portone, librone</em>",
          "<b>pieszczotliwe</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>pejoratywne</b> (<em>peggiorativo</em>): <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ] },
      { h: "Uwaga na pułapki leksykalne",
        p: "Nie każde słowo z sufiksem jest alterowane. <em>Il mattone</em> to cegła, nie „duży poranek”; <em>il tacchino</em> to indyk, nie „mały obcas”; <em>il burrone</em> to wąwóz, nie „duże masło”. To tak zwane <em>falsi alterati</em>." },
      { h: "Przymiotniki o zmienionej podstawie",
        p: "Wysoki rejestr włoski używa przymiotników pochodzących z łaciny lub greki, niepowiązanych formalnie z rzeczownikiem: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>." },
      { h: "Przymiotniki bez superlatywu",
        p: "Część przymiotników nie tworzy superlatywu, bo już wyraża intensywność (<em>eccezionale, splendido, straordinario, immenso</em>) albo jest formą alterowaną (<em>bellino, grandicello</em>). „Eccezionalissimo” brzmi jak żart." }
    ],
    grammar: {
      title: "Sufiksy i przymiotniki uczone",
      table: {
        head: ["rzeczownik", "przymiotnik uczony", "przykład"],
        rows: [
          ["il cuore", "cardiaco", "arresto cardiaco"],
          ["l'acqua", "idrico", "risorse idriche"],
          ["l'occhio", "oculare", "visita oculistica"],
          ["la città", "urbano", "traffico urbano"],
          ["il cavallo", "equino / ippico", "centro ippico"],
          ["il fratello", "fraterno", "affetto fraterno"],
          ["il vescovo", "episcopale", "sede episcopale"],
          ["l'anno", "annuale", "relazione annuale"]
        ]
      },
      examples: [
        ["Che tempaccio! Non si esce con questa pioggia.", "Co za paskudna pogoda! Nie wychodzi się przy takim deszczu."],
        ["Abitiamo in una casetta fuori città.", "Mieszkamy w domku pod miastem."],
        ["Il portone del palazzo è sempre chiuso.", "Brama kamienicy jest zawsze zamknięta."],
        ["Le risorse idriche del Paese sono in calo.", "Zasoby wodne kraju maleją."],
        ["Ha subito un arresto cardiaco.", "Doznał zatrzymania akcji serca."],
        ["Il traffico urbano è aumentato del venti per cento.", "Ruch miejski wzrósł o dwadzieścia procent."]
      ]
    },
    vocab: [
      { it: "l'alterato", pl: "forma alterowana" },
      { it: "il diminutivo", pl: "zdrobnienie" },
      { it: "l'accrescitivo", pl: "zgrubienie" },
      { it: "il peggiorativo", pl: "forma pejoratywna" },
      { it: "il falso alterato", pl: "pozorne zdrobnienie" },
      { it: "cardiaco", pl: "sercowy" },
      { it: "idrico", pl: "wodny" },
      { it: "oculare", pl: "oczny" },
      { it: "urbano", pl: "miejski" },
      { it: "fraterno", pl: "braterski" },
      { it: "il tempaccio", pl: "paskudna pogoda" },
      { it: "il mattone", pl: "cegła (nie: duży poranek)" }
    ],
    exercises: [
      { t: "match", q: "Połącz rzeczownik z przymiotnikiem uczonym.",
        pairs: [["il cuore", "cardiaco"], ["l'acqua", "idrico"], ["l'occhio", "oculare"], ["la città", "urbano"]] },
      { t: "mcq", q: "„Il mattone” to:",
        opts: ["duży poranek", "cegła", "zdrobnienie od matto"], a: 1 },
      { t: "mcq", q: "Który sufiks jest pejoratywny?",
        opts: ["-ino", "-one", "-accio"], a: 2 },
      { t: "fill", q: "Utwórz zdrobnienie od „casa”: ___", a: ["casetta", "casina"] },
      { t: "mcq", q: "Dlaczego „eccezionalissimo” brzmi źle?",
        opts: ["Bo jest za długie", "Bo eccezionale już wyraża intensywność", "Bo to zapożyczenie"], a: 1 },
      { t: "multi", q: "Które to falsi alterati (nie są zdrobnieniami ani zgrubieniami)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"], a: [0, 2, 3] },
      { t: "cloze", q: "Uzupełnij przymiotnikami uczonymi.",
        text: "Le risorse {{1}} sono in calo e il traffico {{2}} è aumentato.",
        gaps: [["idriche"], ["urbano"]],
        pl: "Zasoby wodne maleją, a ruch miejski wzrósł." },
      { t: "trans", dir: "pl-it", q: "„Co za paskudna pogoda!”", a: ["che tempaccio"] },
      { t: "listen", it: "Le risorse idriche del Paese sono in calo da anni.", pl: "Zasoby wodne kraju maleją od lat." },
      { t: "speak", it: "Abitiamo in una casetta appena fuori città.", pl: "Mieszkamy w domku tuż za miastem." }
    ]
  }
  ],
  test: {
    id: "c2-u02-test",
    cefr: "C2", themePl: "Sprawdzian",
    titleIt: "Test — Plurali e derivazione", titlePl: "Sprawdzian jednostki 2",
    objectivesPl: ["sprawdzić podwójne liczby mnogie, złożenia i słowotwórstwo"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Mi fanno male ___.”", opts: ["gli ossi", "le ossa", "i ossi"], a: 1 },
      { t: "mcq", q: "„___ della città sono medievali.”", opts: ["I muri", "Le mura", "Le muri"], a: 1 },
      { t: "fill", q: "„A pranzo mangio ___.” (owoce jako jedzenie)", a: ["la frutta"] },
      { t: "fill", q: "L. mn. od „il capolavoro”: ___", a: ["i capolavori", "capolavori"] },
      { t: "fill", q: "L. mn. od „il capostazione”: ___", a: ["i capistazione", "capistazione"] },
      { t: "fill", q: "L. mn. od „la cassaforte”: ___", a: ["le casseforti", "casseforti"] },
      { t: "match", q: "Połącz.", pairs: [["il cuore", "cardiaco"], ["l'acqua", "idrico"], ["la città", "urbano"], ["il fratello", "fraterno"]] },
      { t: "mcq", q: "„Il burrone” to:", opts: ["duże masło", "wąwóz", "zgrubienie od burro"], a: 1 },
      { t: "listen", it: "Le casseforti dei capireparto sono state controllate.", pl: "Sejfy kierowników działów zostały sprawdzone." },
      { t: "speak", it: "Le risorse idriche urbane richiedono un intervento immediato.", pl: "Miejskie zasoby wodne wymagają natychmiastowej interwencji." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 3 — SFUMATURE
   ══════════════════════════════════════════════════════════════ */
{
  id: "c2-u03",
  icon: "🎭",
  titleIt: "Sfumature",
  titlePl: "Niuanse i teksty autentyczne",
  grammarPl: "ironia · gergo · regionalizmy · latynizmy",
  lessons: [
  {
    id: "c2-u03-l1",
    cefr: "C2",
    themePl: "Styl i kultura",
    titleIt: "Ironia e understatement",
    titlePl: "Ironia po włosku",
    objectivesPl: [
      "rozpoznać ironię w tekście i w mowie",
      "użyć sygnałów ironicznych",
      "odróżnić ironię od sarkazmu"
    ],
    theory: [
      { h: "Sygnały ironii",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — pozorna zgoda",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> ustawione przewrotnie: <em>Bravo, giusto quello che serviva.</em>",
          "przesada leksykalna: <em>una tragedia</em> o drobiazgu",
          "zdrobnienie w kontekście poważnym: <em>un problemino da due milioni</em>"
        ] },
      { h: "Ironia a sarkazm",
        p: "Ironia zostawia rozmówcy wyjście, sarkazm nie. <em>Che bella idea</em> powiedziane z uśmiechem to ironia; to samo zdanie z naciskiem i bez uśmiechu to sarkazm. Włosi używają obu, ale sarkazm jest częściej sygnalizowany intonacją niż leksyką." },
      { h: "Understatement po włosku",
        p: "<em>Non è male</em> (o czymś świetnym), <em>diciamo che non è andata benissimo</em> (o katastrofie), <em>qualche problemino</em> (o poważnym kryzysie). Litota jest we włoskim bardzo produktywna: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>." },
      { tip: "W tekstach pisanych ironia bywa sygnalizowana cudzysłowem: <em>la „riforma” del settore</em>. To znak, że autor dystansuje się od słowa." }
    ],
    grammar: {
      title: "Środki ironii",
      table: {
        head: ["środek", "przykład", "znaczenie"],
        rows: [
          ["pozorna zgoda", "Ma figurati!", "no jasne, akurat"],
          ["litota", "Non è male.", "jest świetne"],
          ["zdrobnienie", "un problemino", "poważny problem"],
          ["przesada", "una tragedia", "drobna niedogodność"],
          ["cudzysłów", "la „riforma”", "dystans autora"],
          ["retoryczne pytanie", "E chi l'avrebbe detto?", "przecież było jasne"]
        ]
      },
      examples: [
        ["Bravo, giusto quello che ci mancava.", "Brawo, dokładnie tego nam brakowało."],
        ["Diciamo che non è andata benissimo.", "Powiedzmy, że nie poszło znakomicie."],
        ["Un problemino da due milioni di euro.", "Drobny problemik za dwa miliony euro."],
        ["Ah, adesso è colpa mia. Ci mancherebbe.", "Aha, teraz to moja wina. No jasne."],
        ["La „riforma” ha peggiorato la situazione.", "„Reforma” pogorszyła sytuację."],
        ["Non senza difficoltà, siamo arrivati in fondo.", "Nie bez trudności doszliśmy do końca."]
      ]
    },
    vocab: [
      { it: "figurati!", pl: "no jasne, akurat" },
      { it: "ci mancherebbe", pl: "tylko tego brakowało" },
      { it: "ma va'!", pl: "coś ty!" },
      { it: "la litote", pl: "litota" },
      { it: "l'understatement", pl: "niedopowiedzenie" },
      { it: "il sarcasmo", pl: "sarkazm" },
      { it: "prendere in giro", pl: "nabijać się" },
      { it: "sottolineare", pl: "podkreślać" },
      { it: "il tono", pl: "ton" },
      { it: "l'allusione", pl: "aluzja" },
      { it: "il doppio senso", pl: "podwójne znaczenie" },
      { it: "non poco", pl: "niemało" }
    ],
    exercises: [
      { t: "mcq", q: "„Non è male” o świetnym filmie to:",
        opts: ["krytyka", "litota, czyli pochwała przez niedopowiedzenie", "obojętność"], a: 1 },
      { t: "mcq", q: "„Un problemino da due milioni” to przykład:",
        opts: ["zdrobnienia ironicznego", "błędu leksykalnego", "rejestru urzędowego"], a: 0 },
      { t: "mcq", q: "Czym różni się ironia od sarkazmu?",
        opts: ["Niczym", "Ironia zostawia wyjście, sarkazm nie", "Sarkazm jest zawsze pisany"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["figurati!", "akurat, no jasne"], ["ci mancherebbe", "tylko tego brakowało"], ["ma va'!", "coś ty!"], ["non poco", "niemało"]] },
      { t: "mcq", q: "Cudzysłów w „la „riforma”” sygnalizuje:",
        opts: ["cytat", "dystans autora wobec słowa", "termin techniczny"], a: 1 },
      { t: "cloze", q: "Uzupełnij ironiczne zdanie.",
        text: "Bravo, {{1}} quello che ci mancava. Diciamo che non è andata {{2}}.",
        gaps: [["giusto", "proprio"], ["benissimo"]],
        pl: "Brawo, dokładnie tego nam brakowało. Powiedzmy, że nie poszło znakomicie." },
      { t: "trans", dir: "pl-it", q: "„Nie bez trudności doszliśmy do końca.”",
        a: ["non senza difficoltà siamo arrivati in fondo"] },
      { t: "mcq", q: "„E chi l'avrebbe detto?” w kontekście oczywistym znaczy:",
        opts: ["nikt się nie spodziewał", "przecież to było jasne", "kto to powiedział?"], a: 1 },
      { t: "listen", it: "Diciamo che non è andata proprio benissimo, per usare un eufemismo.", pl: "Powiedzmy, że nie poszło całkiem znakomicie, delikatnie mówiąc." },
      { t: "speak", it: "Un problemino da due milioni di euro, niente di che.", pl: "Drobny problemik za dwa miliony euro, nic takiego." }
    ]
  },
  {
    id: "c2-u03-l2",
    cefr: "C2",
    themePl: "Styl i kultura",
    titleIt: "Gergo e regionalismi",
    titlePl: "Slang i regionalizmy",
    objectivesPl: [
      "rozpoznać slang młodzieżowy i regionalizmy",
      "odróżnić rejestr potoczny od dialektu",
      "wiedzieć, czego nie używać w piśmie"
    ],
    theory: [
      { h: "Gergo giovanile",
        p: "<em>Boh</em> (nie wiem), <em>bella!</em> (cześć), <em>tipo</em> (jakby), <em>raga</em> (ludzie, od <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (co za nuda, wulgarnawe), <em>spoilerare</em>, <em>cringiare</em>. Warstwa szybko się zmienia — to, co dziś jest żywe, za pięć lat brzmi jak z archiwum." },
      { h: "Regionalizmy w standardzie",
        list: [
          "północ: <em>anguria</em> (arbuz), <em>bidello</em>, <em>ciao</em> z <em>schiavo</em>",
          "centrum: <em>cocomero</em> (arbuz), <em>a me mi</em> (potocznie, niepoprawne w piśmie)",
          "południe: <em>melone d'acqua</em>, częste passato remoto, <em>mo'</em> (teraz)",
          "wszędzie: <em>magari</em>, <em>mica</em>, <em>manco</em> (nawet nie, potocznie)"
        ] },
      { h: "Dialekt to nie slang",
        p: "Neapolitański czy sycylijski to <b>osobne języki</b> wywodzące się z łaciny równolegle do toskańskiego, z własną literaturą i gramatyką. Mówienie o nich „zepsuty włoski” jest błędem faktycznym i kulturową gafą." },
      { trap: "<em>Mica</em> („wcale”, „przecież nie”) jest w mowie wszechobecne: <em>Non è mica facile.</em> W tekście formalnym zastąp je przez <em>affatto</em> albo pomiń." }
    ],
    grammar: {
      title: "Rejestry potoczne",
      table: {
        head: ["wyrażenie", "znaczenie", "rejestr"],
        rows: [
          ["boh", "nie mam pojęcia", "potoczny"],
          ["mica", "wcale, przecież nie", "potoczny, bardzo częsty"],
          ["magari", "oby / może / nawet", "wszędzie"],
          ["mo'", "teraz", "centro-południe"],
          ["che palle", "co za nuda", "wulgarnawy"],
          ["tipo", "jakby, w stylu", "młodzieżowy"],
          ["dai!", "no dalej! / no coś ty!", "wszędzie"],
          ["figurati", "nie ma sprawy / akurat", "wszędzie"]
        ]
      },
      examples: [
        ["Non è mica facile come sembra.", "Wcale to nie takie łatwe, jak się wydaje."],
        ["Boh, non ne ho idea.", "Nie wiem, nie mam pojęcia."],
        ["Dai, non prendertela!", "No weź, nie obrażaj się!"],
        ["Era tipo mezzanotte quando siamo usciti.", "Było jakby koło północy, kiedy wyszliśmy."],
        ["Magari fosse così semplice.", "Żeby to było takie proste."],
        ["Vengo mo', aspettami un attimo.", "Zaraz przyjdę, poczekaj chwilę.", "centro-południe"]
      ]
    },
    vocab: [
      { it: "il gergo", pl: "slang, żargon" },
      { it: "il regionalismo", pl: "regionalizm" },
      { it: "mica", pl: "wcale, przecież nie" },
      { it: "boh", pl: "nie wiem" },
      { it: "dai!", pl: "no dalej!" },
      { it: "tipo", pl: "jakby, w stylu" },
      { it: "mo'", pl: "teraz (regionalnie)" },
      { it: "l'anguria / il cocomero", pl: "arbuz (północ / centrum)" },
      { it: "affatto", pl: "wcale (formalnie)" },
      { it: "colloquiale", pl: "potoczny" },
      { it: "volgare", pl: "wulgarny" },
      { it: "datato", pl: "przestarzały" }
    ],
    exercises: [
      { t: "mcq", q: "„Non è mica facile” znaczy:",
        opts: ["jest trochę łatwe", "wcale nie jest łatwe", "jest bardzo łatwe"], a: 1 },
      { t: "mcq", q: "„Boh” to:",
        opts: ["okrzyk bólu", "nie mam pojęcia", "powitanie"], a: 1 },
      { t: "mcq", q: "Dialekt neapolitański to:",
        opts: ["zepsuty włoski", "odrębny język romański", "slang młodzieżowy"], a: 1 },
      { t: "match", q: "Połącz regionalizm z regionem.",
        pairs: [["anguria", "północ"], ["cocomero", "centrum"], ["mo'", "centro-południe"], ["passato remoto w mowie", "południe"]] },
      { t: "fill", q: "Zastąp „mica” formą formalną: „Non è ___ facile.”", a: ["affatto"] },
      { t: "mcq", q: "„A me mi piace” jest:",
        opts: ["poprawne w piśmie", "potoczne, unikane w piśmie", "wyłącznie dialektalne"], a: 1 },
      { t: "cloze", q: "Uzupełnij potoczne zwroty.",
        text: "{{1}}, non ne ho idea. Comunque non è {{2}} facile come sembra.",
        gaps: [["boh"], ["mica"]],
        pl: "Nie wiem, nie mam pojęcia. Zresztą wcale to nie takie łatwe, jak wygląda." },
      { t: "trans", dir: "pl-it", q: "„No weź, nie obrażaj się!”",
        a: ["dai non prendertela", "dai, non te la prendere"] },
      { t: "listen", it: "Boh, era tipo mezzanotte, non è mica facile ricordarsi.", pl: "Nie wiem, było jakby koło północy, wcale nie tak łatwo to pamiętać." },
      { t: "speak", it: "Non è mica facile come sembra, credimi.", pl: "Wcale to nie takie łatwe, jak wygląda, wierz mi." }
    ]
  },
  {
    id: "c2-u03-l3",
    cefr: "C2",
    themePl: "Styl i kultura",
    titleIt: "Latinismi e lingua colta",
    titlePl: "Latynizmy i rejestr uczony",
    objectivesPl: [
      "rozpoznać latynizmy w tekstach prawnych i naukowych",
      "użyć ich we właściwym miejscu",
      "domknąć poziom C2"
    ],
    theory: [
      { h: "Łacina żyje we włoskim urzędowym",
        p: "Włoski zachował znacznie więcej łacińskich wyrażeń w codziennym języku prawnym i akademickim niż polski. Nie są ozdobą — mają precyzyjne znaczenia i występują w aktach prawnych, wyrokach i publikacjach." },
      { h: "Najczęstsze",
        list: [
          "<em>de facto</em> / <em>de iure</em> — w praktyce / z mocy prawa",
          "<em>ex post</em> / <em>ex ante</em> — po fakcie / z góry",
          "<em>in itinere</em> — w toku",
          "<em>una tantum</em> — jednorazowo",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (bez terminu)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (spadkodawca)"
        ] },
      { h: "Rejestr uczony poza łaciną",
        p: "<em>Vieppiù</em> (coraz bardziej), <em>altresì</em> (również), <em>ancorché</em> (chociaż), <em>laddove</em> (podczas gdy), <em>giacché</em> (skoro), <em>onde</em> (aby). Występują w prawie, publicystyce i eseju; w mowie brzmią pretensjonalnie." },
      { h: "Domknięcie poziomu",
        p: "Na C2 nie chodzi już o poszerzanie zasobu form, tylko o <b>trafność wyboru</b>. Ta sama treść wyrażona w rejestrze potocznym, standardowym i uczonym to trzy różne komunikaty — i biegłość polega na tym, żeby wybierać świadomie." }
    ],
    grammar: {
      title: "Latynizmy i formy uczone",
      table: {
        head: ["wyrażenie", "znaczenie", "kontekst"],
        rows: [
          ["de facto / de iure", "faktycznie / prawnie", "prawo"],
          ["ex post / ex ante", "po fakcie / z góry", "ekonomia, prawo"],
          ["in itinere", "w toku", "administracja"],
          ["una tantum", "jednorazowo", "finanse"],
          ["sine die", "bez wyznaczonego terminu", "prawo"],
          ["altresì", "również", "prawo, publicystyka"],
          ["ancorché", "chociaż", "publicystyka"],
          ["laddove", "podczas gdy", "esej"]
        ]
      },
      examples: [
        ["Il contratto è de facto già scaduto.", "Umowa faktycznie już wygasła."],
        ["Il bonus è erogato una tantum.", "Premia wypłacana jest jednorazowo."],
        ["La riunione è stata rinviata sine die.", "Spotkanie odroczono bez wyznaczenia terminu."],
        ["La pratica è ancora in itinere.", "Sprawa jest jeszcze w toku."],
        ["Si segnala altresì che il termine è perentorio.", "Zaznacza się również, że termin jest nieprzekraczalny."],
        ["Laddove il primo studio indicava un calo, il secondo mostra stabilità.", "Podczas gdy pierwsze badanie wskazywało spadek, drugie pokazuje stabilizację."]
      ]
    },
    vocab: [
      { it: "de facto / de iure", pl: "faktycznie / prawnie" },
      { it: "ex post / ex ante", pl: "po fakcie / z góry" },
      { it: "in itinere", pl: "w toku" },
      { it: "una tantum", pl: "jednorazowo" },
      { it: "sine die", pl: "bez terminu" },
      { it: "ad hoc", pl: "doraźnie" },
      { it: "altresì", pl: "również" },
      { it: "ancorché", pl: "chociaż" },
      { it: "laddove", pl: "podczas gdy" },
      { it: "giacché", pl: "skoro" },
      { it: "erogare", pl: "wypłacać, świadczyć" },
      { it: "rinviare", pl: "odraczać" }
    ],
    exercises: [
      { t: "match", q: "Połącz latynizm ze znaczeniem.",
        pairs: [["de facto", "faktycznie"], ["una tantum", "jednorazowo"], ["sine die", "bez terminu"], ["in itinere", "w toku"]] },
      { t: "mcq", q: "„Il bonus è erogato una tantum” znaczy:",
        opts: ["wypłacany co miesiąc", "wypłacany jednorazowo", "wypłacany raz w roku"], a: 1 },
      { t: "mcq", q: "„Rinviata sine die” znaczy:",
        opts: ["odroczona o tydzień", "odroczona bez wyznaczenia terminu", "odwołana"], a: 1 },
      { t: "fill", q: "Zastąp „anche” formą uczoną: „Si segnala ___ che…”", a: ["altresì"] },
      { t: "fill", q: "Zastąp „mentre” formą eseistyczną: „___ il primo studio indicava un calo…”",
        a: ["laddove"] },
      { t: "mcq", q: "Na czym polega biegłość C2?",
        opts: ["Na znajomości największej liczby słów", "Na świadomym doborze rejestru do sytuacji", "Na używaniu form uczonych zawsze"], a: 1 },
      { t: "cloze", q: "Uzupełnij tekst prawny.",
        text: "Il contratto è {{1}} facto già scaduto e la pratica risulta ancora {{2}} itinere.",
        gaps: [["de"], ["in"]],
        pl: "Umowa faktycznie już wygasła, a sprawa jest jeszcze w toku." },
      { t: "trans", dir: "pl-it", q: "„Zaznacza się również, że termin jest nieprzekraczalny.”",
        a: ["si segnala altresì che il termine è perentorio"] },
      { t: "listen", it: "La riunione è stata rinviata sine die per motivi tecnici.", pl: "Spotkanie odroczono bez terminu z przyczyn technicznych." },
      { t: "speak", it: "Il contributo viene erogato una tantum, previa domanda.", pl: "Świadczenie wypłacane jest jednorazowo, po złożeniu wniosku." }
    ]
  }
  ],
  test: {
    id: "c2-u03-test",
    cefr: "C2", themePl: "Egzamin",
    titleIt: "Esame finale C2", titlePl: "Egzamin końcowy poziomu C2",
    objectivesPl: ["sprawdzić imiesłowy, słowotwórstwo, rejestry i niuanse"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%. To ostatni sprawdzian kursu." }],
    exercises: [
      { t: "mcq", q: "„Gli aventi diritto”:", opts: ["mający rację", "uprawnieni", "posiadacze"], a: 1 },
      { t: "fill", q: "Zgodność: „Terminat___ i lavori…”", a: ["i"] },
      { t: "mcq", q: "„Il testo va rivisto”:", opts: ["idzie poprawiony", "trzeba poprawić", "jest poprawiany"], a: 1 },
      { t: "mcq", q: "„Mi fanno male ___.”", opts: ["gli ossi", "le ossa", "i ossi"], a: 1 },
      { t: "fill", q: "L. mn. od „la cassaforte”: ___", a: ["le casseforti", "casseforti"] },
      { t: "fill", q: "L. mn. od „il capostazione”: ___", a: ["i capistazione", "capistazione"] },
      { t: "match", q: "Połącz.", pairs: [["l'acqua", "idrico"], ["il cuore", "cardiaco"], ["la città", "urbano"], ["l'occhio", "oculare"]] },
      { t: "mcq", q: "„Non è mica facile”:", opts: ["trochę łatwe", "wcale nie łatwe", "bardzo łatwe"], a: 1 },
      { t: "mcq", q: "„Una tantum”:", opts: ["co miesiąc", "jednorazowo", "raz w roku"], a: 1 },
      { t: "fill", q: "Zastąp „anche”: „Si segnala ___ che…”", a: ["altresì"] },
      { t: "trans", dir: "pl-it", q: "„Sprawa jest jeszcze w toku i została odroczona bez terminu.”",
        a: ["la pratica è ancora in itinere ed è stata rinviata sine die"] },
      { t: "speak", it: "Vista la situazione, il progetto va rivisto interamente prima della scadenza.", pl: "Wobec sytuacji projekt trzeba zrewidować w całości przed terminem." }
    ]
  }
}

]);
