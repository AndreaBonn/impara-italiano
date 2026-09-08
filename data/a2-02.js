/* ============================================================
   A2 — część 2: jednostki 5–8
   Casa e quartiere · Al lavoro · Feste · Progetti
   ============================================================ */
LINGUAI.addUnits("A2", [

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 5 — CASA E QUARTIERE
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u05",
  icon: "🔑",
  titleIt: "Casa e quartiere",
  titlePl: "Mieszkanie i dzielnica",
  grammarPl: "ci locativo · ogłoszenia · opis wnętrza",
  lessons: [
  {
    id: "a2-u05-l1",
    cefr: "A2",
    themePl: "Mieszkanie",
    titleIt: "Cerco un bilocale",
    titlePl: "Ogłoszenia i szukanie mieszkania",
    objectivesPl: [
      "odczytać włoskie ogłoszenie o wynajmie",
      "zapytać o czynsz, opłaty i kaucję",
      "opisać, czego szukasz"
    ],
    theory: [
      { h: "Ogłoszenia są pisane skrótami",
        p: "<em>Bilocale</em> to mieszkanie z jednym pokojem plus salon (nie „dwa pokoje sypialne”). Liczy się <b>liczba pomieszczeń mieszkalnych</b> łącznie z salonem: <em>monolocale</em> (kawalerka), <em>bilocale</em>, <em>trilocale</em>. Kuchnia i łazienka nie wchodzą do rachunku." },
      { h: "Trzy liczby, o które trzeba zapytać",
        list: [
          "<b>l'affitto</b> — sam czynsz właściciela",
          "<b>le spese condominiali</b> — opłaty wspólnoty (często 50-150 € miesięcznie, nie zawsze wliczone)",
          "<b>la cauzione</b> — kaucja, zwykle 2-3 czynsze"
        ] },
      { h: "Typy umów",
        p: "<strong>4+4</strong> to umowa czteroletnia z automatycznym przedłużeniem; <strong>3+2</strong> to umowa o czynszu regulowanym (<em>canone concordato</em>), często korzystniejsza podatkowo. <em>Contratto transitorio</em> to umowa krótkoterminowa dla studentów i pracowników czasowych." },
      { tip: "Skróty w ogłoszeniach: <em>mq</em> (metry kwadratowe), <em>p. terra</em> (parter), <em>ammobiliato/arredato</em> (umeblowane), <em>spese escluse</em> (opłaty nie wliczone), <em>rif.</em> (numer oferty)." }
    ],
    grammar: {
      title: "Słownik ogłoszeń",
      table: {
        head: ["skrót / słowo", "znaczenie", "uwaga"],
        rows: [
          ["monolocale", "kawalerka", "jedno pomieszczenie"],
          ["bilocale", "dwa pomieszczenia", "salon + sypialnia"],
          ["arredato", "umeblowane", "przeciwieństwo: vuoto"],
          ["spese escluse", "bez opłat", "doliczyć condominio"],
          ["cauzione", "kaucja", "zwykle 2-3 czynsze"],
          ["luminoso", "jasne", "częsty przymiotnik w ogłoszeniach"]
        ]
      },
      examples: [
        ["Cerco un bilocale arredato in zona universitaria.", "Szukam umeblowanego dwupokojowego w dzielnicy uniwersyteckiej."],
        ["Qual è l'affitto mensile, spese incluse?", "Ile wynosi czynsz miesięczny z opłatami?"],
        ["A quanto ammontano le spese condominiali?", "Ile wynoszą opłaty wspólnoty?"],
        ["La cauzione è di tre mensilità.", "Kaucja to trzy czynsze."],
        ["È un contratto 4+4 o transitorio?", "To umowa 4+4 czy krótkoterminowa?"],
        ["Sono ammessi animali?", "Czy zwierzęta są dozwolone?"]
      ]
    },
    vocab: [
      { it: "l'affitto", pl: "czynsz, wynajem" },
      { it: "affittare", pl: "wynajmować" },
      { it: "il proprietario", pl: "właściciel" },
      { it: "l'inquilino", pl: "najemca" },
      { it: "le spese condominiali", pl: "opłaty wspólnoty" },
      { it: "la cauzione", pl: "kaucja" },
      { it: "il contratto", pl: "umowa" },
      { it: "arredato / vuoto", pl: "umeblowane / puste" },
      { it: "luminoso", pl: "jasny" },
      { it: "il piano terra", pl: "parter" },
      { it: "il riscaldamento", pl: "ogrzewanie" },
      { it: "l'agenzia immobiliare", pl: "biuro nieruchomości" }
    ],
    exercises: [
      { t: "mcq", q: "„Bilocale” to mieszkanie:",
        opts: ["z dwiema sypialniami", "z salonem i jedną sypialnią", "dwupoziomowe"], a: 1 },
      { t: "mcq", q: "„Spese escluse” znaczy:",
        opts: ["opłaty wliczone", "opłaty doliczane osobno", "bez kaucji"], a: 1 },
      { t: "fill", q: "Uzupełnij: „La ___ è di tre mensilità.” (kaucja)", a: ["cauzione"] },
      { t: "match", q: "Połącz.",
        pairs: [["l'inquilino", "najemca"], ["il proprietario", "właściciel"], ["arredato", "umeblowane"], ["il piano terra", "parter"]] },
      { t: "trans", dir: "pl-it", q: "„Ile wynoszą opłaty wspólnoty?”",
        a: ["quanto sono le spese condominiali", "a quanto ammontano le spese condominiali"] },
      { t: "cloze", q: "Uzupełnij pytania do właściciela.",
        text: "Qual è l'{{1}} mensile? Le {{2}} sono incluse? E la {{3}}?",
        gaps: [["affitto"], ["spese"], ["cauzione"]],
        pl: "Ile wynosi czynsz miesięczny? Opłaty są wliczone? A kaucja?" },
      { t: "order", pl: "Szukam umeblowanego dwupokojowego w centrum.",
        tokens: ["Cerco", "un", "bilocale", "arredato", "in", "centro"],
        a: ["cerco un bilocale arredato in centro"] },
      { t: "mcq", q: "Umowa „4+4” to:",
        opts: ["cztery miesiące", "cztery lata z automatycznym przedłużeniem", "czterech najemców"], a: 1 },
      { t: "listen", it: "Bilocale luminoso, arredato, secondo piano, spese escluse.", pl: "Jasne dwupokojowe, umeblowane, drugie piętro, bez opłat." },
      { t: "speak", it: "Vorrei sapere a quanto ammontano le spese condominiali.", pl: "Chciałbym wiedzieć, ile wynoszą opłaty wspólnoty." }
    ]
  },
  {
    id: "a2-u05-l2",
    cefr: "A2",
    themePl: "Mieszkanie",
    titleIt: "Ci vado spesso",
    titlePl: "Cząstka ci",
    objectivesPl: [
      "zastąpić określenie miejsca cząstką ci",
      "rozpoznać ci w wyrażeniach stałych",
      "odróżnić ci-miejsce od ci-nas"
    ],
    theory: [
      { h: "Ci zastępuje miejsce",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Cząstka <em>ci</em> znaczy tu „tam”, zastępując całe określenie miejsca. Bez niej trzeba by powtórzyć „a Roma”, co brzmi ciężko." },
      { h: "Ci zastępuje też „a + rzecz”",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> („Myślę o nim ciągle”). Uwaga: o osobach mówi się inaczej — <em>penso <b>a lei</b></em>, nie „ci penso”." },
      { h: "Ci w wyrażeniach zrośniętych",
        list: [
          "<em>volerci</em> — być potrzebnym: <em>Ci vogliono due ore.</em> („Potrzeba dwóch godzin”)",
          "<em>metterci</em> — zajmować czas komuś: <em>Ci metto un'ora.</em>",
          "<em>farcela</em> — dać radę: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — mieć związek: <em>Che c'entra?</em> („Co to ma do rzeczy?”)"
        ] },
      { trap: "Ta sama forma <em>ci</em> znaczy też „nas” i „nam”: <em>ci vedono</em> (widzą nas), <em>ci hanno detto</em> (powiedzieli nam). Rozstrzyga kontekst i czasownik." }
    ],
    grammar: {
      title: "Wartości ci",
      table: {
        head: ["funkcja", "przykład", "po polsku"],
        rows: [
          ["miejsce", "Ci vado domani.", "Pójdę tam jutro."],
          ["a + rzecz", "Ci penso io.", "Zajmę się tym."],
          ["volerci", "Ci vogliono due ore.", "Potrzeba dwóch godzin."],
          ["metterci", "Ci metto mezz'ora.", "Zajmuje mi pół godziny."],
          ["farcela", "Ce la faccio!", "Dam radę!"],
          ["nas / nam", "Ci hanno invitati.", "Zaprosili nas."]
        ]
      },
      examples: [
        ["Sei mai stato in Sicilia? — Sì, ci sono stato due volte.", "Byłeś kiedyś na Sycylii? — Tak, byłem dwa razy."],
        ["Quanto ci vuole da qui alla stazione?", "Ile zajmuje stąd na dworzec?"],
        ["Ci metto venti minuti a piedi.", "Idę tam dwadzieścia minut."],
        ["Non ce la faccio più, sono stanchissima.", "Już nie daję rady, jestem wykończona."],
        ["Che c'entra questo con il contratto?", "Co to ma wspólnego z umową?"],
        ["Al mercato ci vado ogni sabato.", "Na targ chodzę w każdą sobotę."]
      ]
    },
    vocab: [
      { it: "ci vado", pl: "idę / jadę tam" },
      { it: "ci vuole / ci vogliono", pl: "potrzeba" },
      { it: "ci metto", pl: "zajmuje mi" },
      { it: "farcela", pl: "dać radę" },
      { it: "che c'entra?", pl: "co to ma do rzeczy?" },
      { it: "il traslocо", pl: "przeprowadzka" },
      { it: "il vicino", pl: "sąsiad" },
      { it: "il condominio", pl: "wspólnota mieszkaniowa" },
      { it: "il portone", pl: "brama wejściowa" },
      { it: "il citofono", pl: "domofon" },
      { it: "la bolletta", pl: "rachunek za media" },
      { it: "l'idraulico", pl: "hydraulik" }
    ],
    exercises: [
      { t: "mcq", q: "„Vai a Roma? — Sì, ___ vado domani.”",
        opts: ["la", "ci", "ne"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Quanto ___ vuole da qui alla stazione?”", a: ["ci"] },
      { t: "fill", q: "Uzupełnij: „___ metto venti minuti.”", a: ["ci"] },
      { t: "mcq", q: "„Ci vogliono due ore” znaczy:",
        opts: ["Chcemy dwie godziny", "Potrzeba dwóch godzin", "Mamy dwie godziny"], a: 1 },
      { t: "mcq", q: "„Non ce la faccio più” znaczy:",
        opts: ["Nie robię tego więcej", "Już nie daję rady", "Nie ma tego więcej"], a: 1 },
      { t: "multi", q: "W których zdaniach „ci” oznacza miejsce?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."], a: [0, 2] },
      { t: "cloze", q: "Uzupełnij.",
        text: "— Quanto {{1}} vuole per arrivare? — {{2}} metto mezz'ora in metro.",
        gaps: [["ci"], ["ci"]],
        pl: "— Ile zajmuje dojazd? — Metrem jadę pół godziny." },
      { t: "trans", dir: "pl-it", q: "„Na targ chodzę w każdą sobotę.”",
        a: ["al mercato ci vado ogni sabato", "ci vado ogni sabato al mercato"] },
      { t: "listen", it: "Ci vogliono almeno due ore per finire il trasloco.", pl: "Potrzeba przynajmniej dwóch godzin, żeby skończyć przeprowadzkę." },
      { t: "speak", it: "In centro ci vado a piedi, ci metto venti minuti.", pl: "Do centrum chodzę pieszo, zajmuje mi to dwadzieścia minut." }
    ]
  },
  {
    id: "a2-u05-l3",
    cefr: "A2",
    themePl: "Mieszkanie",
    titleIt: "Il salotto e la cucina",
    titlePl: "Opis wnętrza",
    objectivesPl: [
      "nazwać pomieszczenia i meble",
      "opisać rozkład mieszkania",
      "użyć przyimków położenia w opisie"
    ],
    theory: [
      { h: "Włoskie mieszkanie ma inną logikę",
        p: "<em>Il soggiorno</em> (salon) często łączy się z jadalnią; kuchnia bywa osobnym, małym pomieszczeniem (<em>cucina abitabile</em> to taka, w której da się jeść). <em>Il ripostiglio</em> to schowek, którego w polskich mieszkaniach zwykle nie ma pod tą nazwą." },
      { h: "Balkon, taras, loggia",
        p: "<em>Il balcone</em> wystaje z budynku, <em>la loggia</em> jest wpuszczona w bryłę, <em>il terrazzo</em> jest duży i zwykle na dachu. W ogłoszeniach ta różnica wpływa na cenę." },
      { h: "Przyimki w opisie rozkładu",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Wszystkie łączą się z <em>a</em> lub <em>di</em>, więc wracają przyimki ściągnięte: <em>accanto <b>alla</b> finestra</em>." },
      { tip: "Piętra liczy się inaczej niż w Polsce dopiero od <em>piano terra</em> (parter) — a więc <em>primo piano</em> to nasze pierwsze piętro. Tu akurat systemy się zgadzają, w przeciwieństwie do angielskiego." }
    ],
    grammar: {
      title: "Pomieszczenia i meble",
      table: {
        head: ["pomieszczenie", "typowe meble", "przykład zdania"],
        rows: [
          ["il soggiorno", "il divano, la poltrona", "Il divano è di fronte alla finestra."],
          ["la cucina", "il frigorifero, il forno", "Il forno è sotto il piano cottura."],
          ["la camera da letto", "il letto, l'armadio", "L'armadio è accanto al letto."],
          ["il bagno", "la doccia, il lavandino", "La doccia è in fondo."],
          ["lo studio", "la scrivania, la libreria", "La scrivania è vicino alla finestra."],
          ["il balcone", "—", "Il balcone dà sul cortile."]
        ]
      },
      examples: [
        ["L'appartamento è al terzo piano senza ascensore.", "Mieszkanie jest na trzecim piętrze bez windy."],
        ["La cucina è piccola ma abitabile.", "Kuchnia jest mała, ale da się w niej jeść."],
        ["Il balcone dà sul cortile interno.", "Balkon wychodzi na wewnętrzne podwórko."],
        ["C'è un ripostiglio accanto all'ingresso.", "Przy wejściu jest schowek."],
        ["Le finestre danno a sud, quindi è molto luminoso.", "Okna wychodzą na południe, więc jest bardzo jasno."],
        ["Il riscaldamento è autonomo.", "Ogrzewanie jest indywidualne."]
      ]
    },
    vocab: [
      { it: "il soggiorno", pl: "salon" },
      { it: "la camera da letto", pl: "sypialnia" },
      { it: "il bagno", pl: "łazienka" },
      { it: "il corridoio", pl: "korytarz" },
      { it: "il ripostiglio", pl: "schowek" },
      { it: "il divano", pl: "kanapa" },
      { it: "l'armadio", pl: "szafa" },
      { it: "la scrivania", pl: "biurko" },
      { it: "il frigorifero", pl: "lodówka" },
      { it: "la lavatrice", pl: "pralka" },
      { it: "dare su", pl: "wychodzić na (o oknie)" },
      { it: "il riscaldamento autonomo", pl: "ogrzewanie indywidualne" }
    ],
    exercises: [
      { t: "match", q: "Połącz pomieszczenie z meblem.",
        pairs: [["la camera da letto", "l'armadio"], ["il soggiorno", "il divano"], ["la cucina", "il frigorifero"], ["lo studio", "la scrivania"]] },
      { t: "fill", q: "Uzupełnij: „L'armadio è accanto ___ letto.”", a: ["al"] },
      { t: "fill", q: "Uzupełnij: „Il balcone ___ sul cortile.” (wychodzi na)", a: ["dà", "da"] },
      { t: "mcq", q: "„Cucina abitabile” to kuchnia:",
        opts: ["z oknem", "na tyle duża, że można w niej jeść", "umeblowana"], a: 1 },
      { t: "cloze", q: "Opisz mieszkanie.",
        text: "Il divano è {{1}} fronte alla finestra e la libreria è {{2}} al divano.",
        gaps: [["di"], ["accanto"]],
        pl: "Kanapa jest naprzeciwko okna, a regał obok kanapy." },
      { t: "trans", dir: "pl-it", q: "„Mieszkanie jest na trzecim piętrze bez windy.”",
        a: ["l'appartamento è al terzo piano senza ascensore"] },
      { t: "order", pl: "Okna wychodzą na południe, więc jest bardzo jasno.",
        tokens: ["Le", "finestre", "danno", "a", "sud,", "quindi", "è", "molto", "luminoso"],
        a: ["le finestre danno a sud quindi è molto luminoso"] },
      { t: "gender", q: "Rodzajniki:", opts: ["il", "lo", "la", "l'", "i", "gli", "le"],
        items: [["armadio", "l'"], ["scrivania", "la"], ["studio", "lo"], ["corridoio", "il"]] },
      { t: "listen", it: "La camera da letto dà sul cortile, quindi è silenziosa.", pl: "Sypialnia wychodzi na podwórko, więc jest cicha." },
      { t: "speak", it: "Il soggiorno è luminoso e la cucina è abitabile.", pl: "Salon jest jasny, a w kuchni da się jeść." }
    ]
  },
  {
    id: "a2-u05-l4",
    cefr: "A2",
    themePl: "Mieszkanie",
    titleIt: "Il rubinetto perde",
    titlePl: "Problemy i zgłoszenia",
    objectivesPl: [
      "zgłosić usterkę właścicielowi lub administracji",
      "opisać, co się zepsuło",
      "umówić fachowca"
    ],
    theory: [
      { h: "Trzy czasowniki, które załatwiają większość usterek",
        list: [
          "<b>non funziona</b> — nie działa (urządzenie)",
          "<b>perde</b> — cieknie (kran, rura)",
          "<b>si è rotto/a</b> — zepsuło się, pękło"
        ] },
      { h: "Kto za co odpowiada",
        p: "We włoskim najmie <b>drobne naprawy</b> (<em>manutenzione ordinaria</em>) obciążają najemcę, a <b>poważne</b> (<em>straordinaria</em>: bojler, instalacja, dach) właściciela. Warto to napisać w wiadomości: <em>Credo che sia manutenzione straordinaria.</em>" },
      { h: "Ton zgłoszenia",
        p: "Włoski komunikat o usterce jest zwykle uprzejmy i pośredni: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Bezpośrednie <em>ripari subito!</em> zadziała przeciw tobie." },
      { tip: "<em>Il condominio</em> to nie tylko budynek, ale i wspólnota jako podmiot. <em>L'amministratore di condominio</em> to zarządca, do którego zgłasza się awarie części wspólnych." }
    ],
    grammar: {
      title: "Zgłaszanie usterek",
      table: {
        head: ["problem", "po włosku", "po polsku"],
        rows: [
          ["urządzenie", "La lavatrice non funziona.", "Pralka nie działa."],
          ["woda", "Il rubinetto perde.", "Kran cieknie."],
          ["zepsute", "Si è rotta la serratura.", "Zamek się zepsuł."],
          ["ogrzewanie", "Il riscaldamento non si accende.", "Ogrzewanie się nie włącza."],
          ["prąd", "È saltata la corrente.", "Wysiadł prąd."],
          ["zgłoszenie", "Volevo segnalarle un problema.", "Chciałem zgłosić problem."]
        ]
      },
      examples: [
        ["Buongiorno, le scrivo perché il boiler non funziona da ieri.", "Dzień dobry, piszę, bo bojler nie działa od wczoraj."],
        ["Il rubinetto del bagno perde acqua.", "Kran w łazience cieknie."],
        ["Potrebbe mandare un idraulico?", "Mógłby pan przysłać hydraulika?"],
        ["Quando può passare il tecnico?", "Kiedy może przyjść technik?"],
        ["Sono in casa dopo le sei.", "Jestem w domu po szóstej."],
        ["Grazie per la rapidità.", "Dziękuję za szybkość."]
      ]
    },
    vocab: [
      { it: "il rubinetto", pl: "kran" },
      { it: "perdere acqua", pl: "cieknąć" },
      { it: "rompersi", pl: "psuć się, pękać" },
      { it: "la serratura", pl: "zamek (w drzwiach)" },
      { it: "il boiler", pl: "bojler" },
      { it: "la corrente", pl: "prąd" },
      { it: "saltare la corrente", pl: "wysiąść (o prądzie)" },
      { it: "l'idraulico", pl: "hydraulik" },
      { it: "l'elettricista", pl: "elektryk" },
      { it: "il tecnico", pl: "technik, serwisant" },
      { it: "segnalare", pl: "zgłaszać" },
      { it: "la manutenzione", pl: "konserwacja, naprawa" }
    ],
    exercises: [
      { t: "mcq", q: "Kran cieknie. Jak to powiesz?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."], a: 1 },
      { t: "fill", q: "Uzupełnij: „È ___ la corrente.” (wysiadł prąd)", a: ["saltata"] },
      { t: "fill", q: "Uzupełnij: „Si è ___ la serratura.” (zepsuł się zamek)", a: ["rotta"] },
      { t: "match", q: "Połącz fachowca z problemem.",
        pairs: [["l'idraulico", "cieknący kran"], ["l'elettricista", "brak prądu"], ["il tecnico", "zepsuty bojler"], ["l'amministratore", "części wspólne"]] },
      { t: "trans", dir: "pl-it", q: "„Mógłby pan przysłać hydraulika?”",
        a: ["potrebbe mandare un idraulico", "potrebbe mandare un idraulico?"] },
      { t: "cloze", q: "Napisz zgłoszenie.",
        text: "Buongiorno, volevo {{1}} che il boiler non {{2}} da ieri. {{3}} mandare un tecnico?",
        gaps: [["segnalarle", "segnalare"], ["funziona"], ["potrebbe"]],
        pl: "Dzień dobry, chciałem zgłosić, że bojler nie działa od wczoraj. Mógłby pan przysłać technika?" },
      { t: "mcq", q: "Kto zwykle płaci za wymianę bojlera w wynajmowanym mieszkaniu?",
        opts: ["Najemca", "Właściciel (manutenzione straordinaria)", "Wspólnota"], a: 1 },
      { t: "order", pl: "Jestem w domu po szóstej.",
        tokens: ["Sono", "in", "casa", "dopo", "le", "sei"], a: ["sono in casa dopo le sei"] },
      { t: "listen", it: "Il riscaldamento non si accende e fa molto freddo in casa.", pl: "Ogrzewanie się nie włącza i w domu jest bardzo zimno." },
      { t: "speak", it: "Volevo segnalarle che il rubinetto del bagno perde.", pl: "Chciałem zgłosić, że kran w łazience cieknie." }
    ]
  }
  ],
  test: {
    id: "a2-u05-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Casa e quartiere", titlePl: "Sprawdzian jednostki 5",
    objectivesPl: ["sprawdzić słownictwo mieszkaniowe i cząstkę ci"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "„Bilocale”:", opts: ["dwie sypialnie", "salon + sypialnia", "dwa piętra"], a: 1 },
      { t: "fill", q: "„La ___ è di tre mensilità.”", a: ["cauzione"] },
      { t: "fill", q: "„Quanto ___ vuole per arrivare?”", a: ["ci"] },
      { t: "fill", q: "„___ metto mezz'ora.”", a: ["ci"] },
      { t: "mcq", q: "„Non ce la faccio più”:", opts: ["nie robię tego", "nie daję rady", "nie mam więcej"], a: 1 },
      { t: "fill", q: "„L'armadio è accanto ___ letto.”", a: ["al"] },
      { t: "fill", q: "„Il rubinetto ___.” (cieknie)", a: ["perde"] },
      { t: "match", q: "Połącz.", pairs: [["l'inquilino", "najemca"], ["il ripostiglio", "schowek"], ["la lavatrice", "pralka"], ["saltare la corrente", "wysiąść (prąd)"]] },
      { t: "listen", it: "Cerco un bilocale arredato, spese incluse, vicino al centro.", pl: "Szukam umeblowanego dwupokojowego, z opłatami, blisko centrum." },
      { t: "speak", it: "Ci vogliono venti minuti a piedi dalla stazione.", pl: "Z dworca idzie się dwadzieścia minut pieszo." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 6 — AL LAVORO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u06",
  icon: "💼",
  titleIt: "Al lavoro",
  titlePl: "W pracy",
  grammarPl: "condizionale grzecznościowy · si impersonale · maile",
  lessons: [
  {
    id: "a2-u06-l1",
    cefr: "A2",
    themePl: "Praca",
    titleIt: "Potrebbe richiamarmi?",
    titlePl: "Telefon i uprzejme prośby",
    objectivesPl: [
      "przeprowadzić rozmowę telefoniczną",
      "użyć condizionale do uprzejmej prośby",
      "zostawić i przyjąć wiadomość"
    ],
    theory: [
      { h: "Telefon zaczyna się od Pronto",
        p: "<strong>Pronto?</strong> mówi osoba odbierająca, niezależnie od pory i relacji. Dosłownie znaczy „gotowy” — to relikt z czasów łączenia rozmów przez centralę." },
      { h: "Condizionale zamienia prośbę w propozycję",
        p: "<em>Può richiamarmi?</em> („może pan oddzwonić?”) jest poprawne, ale bezpośrednie. <em><b>Potrebbe</b> richiamarmi?</em> zostawia rozmówcy przestrzeń na odmowę i dlatego brzmi grzeczniej. To ta sama logika co <em>vorrei</em> zamiast <em>voglio</em>." },
      { h: "Struktura rozmowy służbowej",
        list: [
          "<em>Pronto, sono Anna Kowalska della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ] },
      { tip: "<em>Le dispiacerebbe…?</em> („czy nie miałby pan nic przeciwko…?”) to najwyższy poziom uprzejmości w prośbie. Używa się go, gdy prosisz o coś naprawdę kłopotliwego." }
    ],
    grammar: {
      title: "Uprzejme prośby",
      table: {
        head: ["poziom", "forma", "po polsku"],
        rows: [
          ["neutralny", "Può richiamarmi?", "Może pan oddzwonić?"],
          ["uprzejmy", "Potrebbe richiamarmi?", "Mógłby pan oddzwonić?"],
          ["bardzo uprzejmy", "Le dispiacerebbe richiamarmi?", "Czy mógłby pan łaskawie oddzwonić?"],
          ["prośba o siebie", "Vorrei parlare con…", "Chciałbym rozmawiać z…"],
          ["propozycja", "Sarebbe possibile…?", "Czy byłoby możliwe…?"],
          ["zgoda", "Certo, volentieri.", "Oczywiście, chętnie."]
        ]
      },
      examples: [
        ["Pronto? Sono Anna, chiamo per l'appuntamento.", "Halo? Tu Anna, dzwonię w sprawie spotkania."],
        ["Mi passa il signor Rossi, per favore?", "Połączy mnie pan z panem Rossim?"],
        ["Mi dispiace, in questo momento è occupato.", "Przykro mi, w tej chwili jest zajęty."],
        ["Potrebbe dirgli che ho chiamato?", "Mógłby mu pan przekazać, że dzwoniłam?"],
        ["Le lascio il mio numero.", "Zostawiam panu mój numer."],
        ["Richiamo più tardi, grazie.", "Zadzwonię później, dziękuję."]
      ]
    },
    vocab: [
      { it: "pronto?", pl: "halo?" },
      { it: "chi parla?", pl: "kto mówi?" },
      { it: "mi passa…?", pl: "połączy mnie pan z…?" },
      { it: "è in riunione", pl: "jest na spotkaniu" },
      { it: "lasciare un messaggio", pl: "zostawić wiadomość" },
      { it: "richiamare", pl: "oddzwonić" },
      { it: "l'appuntamento", pl: "spotkanie, umówiona wizyta" },
      { it: "spostare", pl: "przełożyć (termin)" },
      { it: "disdire", pl: "odwołać" },
      { it: "la linea è occupata", pl: "linia zajęta" },
      { it: "non la sento bene", pl: "słabo pana słyszę" },
      { it: "le dispiacerebbe…?", pl: "czy mógłby pan…?" }
    ],
    exercises: [
      { t: "conj", verb: "potere", tense: "condizionale", persons: [0, 1, 2, 3] },
      { t: "mcq", q: "Która prośba jest najbardziej uprzejma?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"], a: 2 },
      { t: "fill", q: "Uzupełnij: „___ dirgli che ho chiamato?” (mógłby pan)", a: ["potrebbe"] },
      { t: "fill", q: "Uzupełnij: „___ il signor Rossi, per favore?” (połączy mnie pan)",
        a: ["mi passa"] },
      { t: "match", q: "Połącz.",
        pairs: [["è in riunione", "jest na spotkaniu"], ["spostare", "przełożyć"], ["disdire", "odwołać"], ["richiamare", "oddzwonić"]] },
      { t: "trans", dir: "pl-it", q: "„Chciałbym przełożyć spotkanie.”",
        a: ["vorrei spostare l'appuntamento"] },
      { t: "dialogue", q: "Dzwonisz do firmy.",
        setting: "Poniedziałek, 10:00, sekretariat.",
        lines: [
          { sp: "A", it: "Pronto, Studio Bianchi, buongiorno.", pl: "Halo, Studio Bianchi, dzień dobry." },
          { sp: "TY", pl: "Przedstaw się i poproś o połączenie z panem Rossim.", choices: ["Buongiorno, sono Anna Nowak. Mi passa il signor Rossi?", "Ciao, dammi Rossi.", "Buongiorno, chi parla?"], a: 0, plAnswer: "Dzień dobry, tu Anna Nowak. Połączy mnie pani z panem Rossim?" },
          { sp: "A", it: "Mi dispiace, in questo momento è in riunione.", pl: "Przykro mi, w tej chwili jest na spotkaniu." },
          { sp: "TY", pl: "Poproś uprzejmie, żeby oddzwonił.", choices: ["Potrebbe dirgli di richiamarmi?", "Deve richiamarmi subito.", "Lo aspetto, grazie."], a: 0, plAnswer: "Mógłby mu pan przekazać, żeby oddzwonił?" },
          { sp: "A", it: "Certo. Mi lascia il suo numero?", pl: "Oczywiście. Zostawi pani numer?" }
        ] },
      { t: "cloze", q: "Uzupełnij prośbę.",
        text: "Buongiorno, {{1}} parlare con la signora Bianchi? Se è occupata, {{2}} richiamarmi nel pomeriggio?",
        gaps: [["vorrei"], ["potrebbe"]],
        pl: "Dzień dobry, chciałbym rozmawiać z panią Bianchi. Jeśli jest zajęta, czy mogłaby oddzwonić po południu?" },
      { t: "listen", it: "In questo momento è occupato, vuole lasciare un messaggio?", pl: "W tej chwili jest zajęty, chce pan zostawić wiadomość?" },
      { t: "speak", it: "Pronto, sono Anna. Potrebbe passarmi il signor Rossi?", pl: "Halo, tu Anna. Mogłaby pani połączyć mnie z panem Rossim?" }
    ]
  },
  {
    id: "a2-u06-l2",
    cefr: "A2",
    themePl: "Praca",
    titleIt: "Scrivere una mail",
    titlePl: "Korespondencja służbowa",
    objectivesPl: [
      "napisać krótkiego maila służbowego",
      "znać formuły otwarcia i zamknięcia",
      "dobrać rejestr do adresata"
    ],
    theory: [
      { h: "Otwarcie zależy od dystansu",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formalnie, do osoby znanej z nazwiska",
          "<em>Spettabile Azienda,</em> — do firmy jako instytucji",
          "<em>Buongiorno Marco,</em> — półformalnie, do współpracownika",
          "<em>Ciao Marco,</em> — nieformalnie"
        ] },
      { h: "Zamknięcie",
        p: "<em>Cordiali saluti</em> to bezpieczny standard. <em>Distinti saluti</em> jest chłodniejsze i bardziej urzędowe. <em>A presto</em> albo <em>Grazie e buona giornata</em> pasuje do współpracowników. Podpis: imię i nazwisko, pod nim funkcja." },
      { h: "Trzon maila po włosku jest krótki",
        p: "Włoska korespondencja służbowa nie lubi długich wstępów. Struktura: powód pisania (<em>Le scrivo in merito a…</em>), treść, prośba (<em>Resto in attesa di un suo riscontro</em>), zamknięcie." },
      { tip: "<em>In allegato</em> = „w załączniku”. Zdanie <em>Le invio in allegato il documento richiesto</em> to najczęstsze zdanie włoskiego maila służbowego." }
    ],
    grammar: {
      title: "Szkielet maila",
      table: {
        head: ["część", "formuła", "po polsku"],
        rows: [
          ["otwarcie", "Gentile Dott.ssa Rossi,", "Szanowna Pani Doktor,"],
          ["powód", "Le scrivo in merito a…", "Piszę w sprawie…"],
          ["załącznik", "Le invio in allegato…", "Przesyłam w załączniku…"],
          ["prośba", "Resto in attesa di un suo riscontro.", "Czekam na odpowiedź."],
          ["zamknięcie", "Cordiali saluti,", "Z poważaniem,"],
          ["nieformalnie", "Grazie e a presto,", "Dzięki i do usłyszenia,"]
        ]
      },
      examples: [
        ["Gentile Dott. Bianchi, le scrivo in merito all'offerta di ieri.", "Szanowny Panie Doktorze, piszę w sprawie wczorajszej oferty."],
        ["Le invio in allegato il preventivo aggiornato.", "Przesyłam w załączniku zaktualizowaną wycenę."],
        ["Le sarei grato se potesse confermare entro venerdì.", "Byłbym wdzięczny za potwierdzenie do piątku."],
        ["Resto a disposizione per qualsiasi chiarimento.", "Pozostaję do dyspozycji w razie pytań."],
        ["Ciao Marco, ti allego il file di cui parlavamo.", "Cześć Marco, załączam plik, o którym mówiliśmy."],
        ["Grazie in anticipo.", "Z góry dziękuję."]
      ]
    },
    vocab: [
      { it: "gentile", pl: "szanowny/a (w mailu)" },
      { it: "in merito a", pl: "w sprawie" },
      { it: "in allegato", pl: "w załączniku" },
      { it: "il preventivo", pl: "wycena, kosztorys" },
      { it: "confermare", pl: "potwierdzić" },
      { it: "il riscontro", pl: "odpowiedź, informacja zwrotna" },
      { it: "restare a disposizione", pl: "pozostawać do dyspozycji" },
      { it: "cordiali saluti", pl: "z poważaniem" },
      { it: "grazie in anticipo", pl: "z góry dziękuję" },
      { it: "la scadenza", pl: "termin" },
      { it: "entro", pl: "do (terminu)" },
      { it: "il chiarimento", pl: "wyjaśnienie" }
    ],
    exercises: [
      { t: "mcq", q: "Które otwarcie jest najbardziej formalne?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"], a: 2 },
      { t: "fill", q: "Uzupełnij: „Le scrivo ___ merito all'offerta.”", a: ["in"] },
      { t: "fill", q: "Uzupełnij: „Le invio ___ allegato il preventivo.”", a: ["in"] },
      { t: "match", q: "Połącz.",
        pairs: [["il preventivo", "wycena"], ["il riscontro", "odpowiedź"], ["la scadenza", "termin"], ["il chiarimento", "wyjaśnienie"]] },
      { t: "mcq", q: "„Resto a disposizione” znaczy:",
        opts: ["Zostaję w firmie", "Pozostaję do dyspozycji", "Czekam na miejscu"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Przesyłam w załączniku zaktualizowaną wycenę.”",
        a: ["le invio in allegato il preventivo aggiornato", "ti invio in allegato il preventivo aggiornato"] },
      { t: "cloze", q: "Uzupełnij maila.",
        text: "{{1}} Dott.ssa Rossi, le scrivo {{2}} merito alla riunione di giovedì. Resto in attesa di un suo {{3}}. Cordiali saluti.",
        gaps: [["gentile"], ["in"], ["riscontro"]],
        pl: "Szanowna Pani Doktor, piszę w sprawie czwartkowego spotkania. Czekam na odpowiedź. Z poważaniem." },
      { t: "order", pl: "Byłbym wdzięczny za potwierdzenie do piątku.",
        tokens: ["Le", "sarei", "grato", "se", "potesse", "confermare", "entro", "venerdì"],
        a: ["le sarei grato se potesse confermare entro venerdì"] },
      { t: "listen", it: "Le invio in allegato il documento richiesto, resto a disposizione.", pl: "Przesyłam w załączniku wymagany dokument, pozostaję do dyspozycji." },
      { t: "speak", it: "Gentile Dottoressa, le scrivo in merito alla nostra riunione.", pl: "Szanowna Pani Doktor, piszę w sprawie naszego spotkania." }
    ]
  },
  {
    id: "a2-u06-l3",
    cefr: "A2",
    themePl: "Praca",
    titleIt: "Qui si lavora così",
    titlePl: "Si bezosobowe",
    objectivesPl: [
      "użyć si do wypowiedzi ogólnych",
      "odróżnić si bezosobowe od si biernego",
      "opisać zwyczaje panujące gdzieś"
    ],
    theory: [
      { h: "Jak polskie „się”",
        p: "<em>In Italia <b>si</b> mangia bene.</em> („We Włoszech dobrze się je”). Konstrukcja <em>si</em> + czasownik w trzeciej osobie liczby pojedynczej mówi o ludziach w ogóle, bez wskazywania kto." },
      { h: "Si passivante: czasownik zgadza się z rzeczą",
        p: "Gdy po czasowniku stoi rzeczownik, forma dopasowuje się do jego liczby: <em>Qui <b>si vende</b> il pane</em> (jedna rzecz) kontra <em>Qui <b>si vendono</b> i panini</em> (wiele). To pułapka, bo wygląda jak błąd, a jest regułą." },
      { h: "Przymiotnik po si idzie w liczbę mnogą",
        p: "<em>Quando si è <b>stanchi</b>, si lavora male.</em> Choć czasownik jest w liczbie pojedynczej, przymiotnik przyjmuje formę męską liczby mnogiej. To dziwactwo, którego trzeba się nauczyć." },
      { tip: "W czasach złożonych <em>si</em> bezosobowe zawsze bierze <em>essere</em>: <em>si è mangiato bene</em>, <em>si è andati via presto</em>." }
    ],
    grammar: {
      title: "Si bezosobowe i bierne",
      table: {
        head: ["typ", "przykład", "uwaga"],
        rows: [
          ["bezosobowe", "In Italia si mangia bene.", "brak rzeczownika po czasowniku"],
          ["bierne l.poj.", "Qui si vende il pane.", "zgodność z „il pane”"],
          ["bierne l.mn.", "Qui si vendono i panini.", "zgodność z „i panini”"],
          ["z przymiotnikiem", "Quando si è stanchi…", "przymiotnik w l.mn."],
          ["czas złożony", "Si è mangiato bene.", "zawsze essere"],
          ["zwrotny", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        ["In questo ufficio si lavora anche il sabato.", "W tym biurze pracuje się także w soboty."],
        ["Come si dice „biurko” in italiano?", "Jak się mówi „biurko” po włosku?"],
        ["Qui non si fuma.", "Tu się nie pali."],
        ["Si vendono appartamenti in questa zona.", "W tej okolicy sprzedaje się mieszkania."],
        ["Quando si è nuovi, si fanno molte domande.", "Kiedy jest się nowym, zadaje się dużo pytań."],
        ["Ci si abitua in fretta.", "Człowiek szybko się przyzwyczaja."]
      ]
    },
    vocab: [
      { it: "si dice", pl: "mówi się" },
      { it: "si fa", pl: "robi się" },
      { it: "non si può", pl: "nie można" },
      { it: "l'ufficio", pl: "biuro" },
      { it: "la riunione", pl: "zebranie" },
      { it: "il collega", pl: "kolega z pracy" },
      { it: "lo stipendio", pl: "pensja" },
      { it: "le ferie", pl: "urlop" },
      { it: "il permesso", pl: "wolne, zwolnienie z pracy" },
      { it: "lo straordinario", pl: "nadgodziny" },
      { it: "la scadenza", pl: "deadline" },
      { it: "abituarsi a", pl: "przyzwyczajać się do" }
    ],
    exercises: [
      { t: "mcq", q: "„Qui ___ i panini.” (sprzedaje się kanapki)",
        opts: ["si vende", "si vendono", "si vendere"], a: 1,
        why: "Si passivante zgadza się z rzeczą: i panini → l. mnoga." },
      { t: "fill", q: "Uzupełnij: „In Italia ___ mangia bene.”", a: ["si"] },
      { t: "fill", q: "Uzupełnij: „Come ___ dice in italiano?”", a: ["si"] },
      { t: "mcq", q: "„Quando si è stanchi” — dlaczego „stanchi”, a nie „stanco”?",
        opts: ["To błąd", "Po si przymiotnik idzie w liczbę mnogą", "Bo mowa o wielu osobach naprawdę"], a: 1 },
      { t: "cloze", q: "Uzupełnij formy.",
        text: "In questo ufficio {{1}} lavora molto e {{2}} fanno spesso straordinari.",
        gaps: [["si"], ["si"]],
        pl: "W tym biurze dużo się pracuje i często robi się nadgodziny." },
      { t: "trans", dir: "pl-it", q: "„Tu się nie pali.”", a: ["qui non si fuma"] },
      { t: "multi", q: "Które zdania są poprawne?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."], a: [0, 2] },
      { t: "order", pl: "Człowiek szybko się przyzwyczaja.",
        tokens: ["Ci", "si", "abitua", "in", "fretta"], a: ["ci si abitua in fretta"] },
      { t: "listen", it: "In questa azienda si lavora molto ma si guadagna bene.", pl: "W tej firmie dużo się pracuje, ale dobrze zarabia." },
      { t: "speak", it: "Come si dice „deadline” in italiano? Si dice scadenza.", pl: "Jak się mówi „deadline” po włosku? Mówi się scadenza." }
    ]
  },
  {
    id: "a2-u06-l4",
    cefr: "A2",
    themePl: "Praca",
    titleIt: "In riunione",
    titlePl: "Spotkania i uzgodnienia",
    objectivesPl: [
      "zabrać głos na spotkaniu",
      "zaproponować i uzgodnić termin",
      "wyrazić zgodę lub wątpliwość"
    ],
    theory: [
      { h: "Wejście w słowo nie jest niegrzeczne",
        p: "We włoskiej kulturze spotkań przerywanie jest normą i sygnałem zaangażowania. Formuły łagodzące: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>" },
      { h: "Zgoda i wątpliwość",
        list: [
          "zgoda: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "częściowa: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "wątpliwość: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "sprzeciw: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ] },
      { h: "Uzgadnianie terminu",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. Zwrot <em>facciamo giovedì</em> („zróbmy czwartek”) to najczęstszy sposób domykania ustaleń." },
      { tip: "<em>Ci sentiamo</em> („odezwiemy się”) kończy praktycznie każde włoskie spotkanie i rozmowę służbową. Nie jest to obietnica, tylko formuła." }
    ],
    grammar: {
      title: "Język spotkań",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["zabranie głosu", "Posso dire una cosa?", "Mogę coś powiedzieć?"],
          ["przerwanie", "Scusa se ti interrompo…", "Wybacz, że przerywam…"],
          ["zgoda", "Sono d'accordo con te.", "Zgadzam się z tobą."],
          ["wątpliwość", "Non ne sono del tutto convinto.", "Nie jestem całkiem przekonany."],
          ["propozycja", "Che ne dite di giovedì?", "Co powiecie na czwartek?"],
          ["domknięcie", "Facciamo così, allora.", "Zróbmy tak zatem."]
        ]
      },
      examples: [
        ["Riassumo i punti principali.", "Podsumowuję główne punkty."],
        ["Su questo punto ho qualche dubbio.", "Co do tego punktu mam pewne wątpliwości."],
        ["Possiamo rimandare la decisione a lunedì?", "Możemy przełożyć decyzję na poniedziałek?"],
        ["Per me è lo stesso, decidete voi.", "Mnie jest wszystko jedno, zdecydujcie wy."],
        ["Chi si occupa di questo?", "Kto się tym zajmie?"],
        ["Ci sentiamo domani per i dettagli.", "Odezwiemy się jutro w sprawie szczegółów."]
      ]
    },
    vocab: [
      { it: "la riunione", pl: "zebranie" },
      { it: "l'ordine del giorno", pl: "porządek obrad" },
      { it: "riassumere", pl: "podsumowywać" },
      { it: "rimandare", pl: "przekładać" },
      { it: "occuparsi di", pl: "zajmować się" },
      { it: "sono d'accordo", pl: "zgadzam się" },
      { it: "non sono convinto", pl: "nie jestem przekonany" },
      { it: "dipende", pl: "to zależy" },
      { it: "che ne dite di…?", pl: "co powiecie na…?" },
      { it: "per me è lo stesso", pl: "mnie wszystko jedno" },
      { it: "ci sentiamo", pl: "odezwiemy się" },
      { it: "il punto all'ordine", pl: "punkt porządku obrad" }
    ],
    exercises: [
      { t: "match", q: "Połącz.",
        pairs: [["sono d'accordo", "zgadzam się"], ["dipende", "to zależy"], ["rimandare", "przekładać"], ["occuparsi di", "zajmować się"]] },
      { t: "mcq", q: "„Non ne sono del tutto convinto” to:",
        opts: ["pełna zgoda", "wątpliwość wyrażona łagodnie", "stanowczy sprzeciw"], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ ne dite di giovedì?”", a: ["che"] },
      { t: "fill", q: "Uzupełnij: „Chi ___ occupa di questo?”", a: ["si"] },
      { t: "trans", dir: "pl-it", q: "„Możemy przełożyć decyzję na poniedziałek?”",
        a: ["possiamo rimandare la decisione a lunedì", "possiamo rimandare la decisione a lunedì?"] },
      { t: "dialogue", q: "Spotkanie zespołu.",
        setting: "Sala konferencyjna, ustalanie terminu.",
        lines: [
          { sp: "A", it: "Allora, dobbiamo fissare la prossima riunione.", pl: "No dobrze, musimy ustalić następne spotkanie." },
          { sp: "TY", pl: "Zaproponuj czwartek.", choices: ["Che ne dite di giovedì?", "Giovedì è obbligatorio.", "Facciamo mai giovedì."], a: 0, plAnswer: "Co powiecie na czwartek?" },
          { sp: "A", it: "Giovedì mattina ho già un impegno. Nel pomeriggio?", pl: "W czwartek rano mam już coś umówionego. Po południu?" },
          { sp: "TY", pl: "Zgódź się i domknij ustalenie.", choices: ["A me va bene, facciamo così.", "Non sono d'accordo per niente.", "Per me è lo stesso, dipende."], a: 0, plAnswer: "Mnie pasuje, zróbmy tak." }
        ] },
      { t: "cloze", q: "Uzupełnij wypowiedź.",
        text: "Scusa se ti {{1}}, ma su questo punto ho qualche {{2}}.",
        gaps: [["interrompo"], ["dubbio"]],
        pl: "Wybacz, że przerywam, ale co do tego punktu mam pewne wątpliwości." },
      { t: "order", pl: "Podsumowuję główne punkty.",
        tokens: ["Riassumo", "i", "punti", "principali"], a: ["riassumo i punti principali"] },
      { t: "listen", it: "Rimandiamo la decisione alla prossima riunione.", pl: "Przełóżmy decyzję na następne spotkanie." },
      { t: "speak", it: "Sono d'accordo, ma vorrei aggiungere una cosa.", pl: "Zgadzam się, ale chciałbym coś dodać." }
    ]
  }
  ],
  test: {
    id: "a2-u06-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Al lavoro", titlePl: "Sprawdzian jednostki 6",
    objectivesPl: ["sprawdzić condizionale grzecznościowy, maile i si bezosobowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2] },
      { t: "fill", q: "„___ richiamarmi?” (mógłby pan)", a: ["potrebbe"] },
      { t: "fill", q: "„Le scrivo ___ merito alla riunione.”", a: ["in"] },
      { t: "fill", q: "„Le invio ___ allegato il preventivo.”", a: ["in"] },
      { t: "mcq", q: "„Qui ___ i panini.”", opts: ["si vende", "si vendono", "si vendere"], a: 1 },
      { t: "fill", q: "„In Italia ___ mangia bene.”", a: ["si"] },
      { t: "match", q: "Połącz.", pairs: [["il preventivo", "wycena"], ["le ferie", "urlop"], ["lo stipendio", "pensja"], ["la scadenza", "termin"]] },
      { t: "trans", dir: "pl-it", q: "„Zgadzam się, ale mam wątpliwość.”",
        a: ["sono d'accordo ma ho un dubbio", "sono d'accordo, ma ho qualche dubbio"] },
      { t: "listen", it: "Potrebbe confermarmi l'appuntamento entro venerdì?", pl: "Mógłby pan potwierdzić spotkanie do piątku?" },
      { t: "speak", it: "Vorrei spostare la riunione a giovedì pomeriggio.", pl: "Chciałbym przełożyć spotkanie na czwartek po południu." }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 7 — FESTE E TRADIZIONI
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u07",
  icon: "🎉",
  titleIt: "Feste e tradizioni",
  titlePl: "Święta i tradycje",
  grammarPl: "zaproszenia · życzenia · przysłówki",
  lessons: [
  {
    id: "a2-u07-l1",
    cefr: "A2",
    themePl: "Kultura",
    titleIt: "Auguri!",
    titlePl: "Życzenia i okazje",
    objectivesPl: [
      "złożyć życzenia na różne okazje",
      "odpowiedzieć na życzenia",
      "znać najważniejsze włoskie święta"
    ],
    theory: [
      { h: "Auguri to słowo-klucz",
        p: "<strong>Auguri!</strong> działa na urodziny, imieniny, ślub, awans, święta i prawie każdą dobrą okazję. Dosłownie „życzenia”. Wersja rozwinięta: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>" },
      { h: "Czego się nie życzy",
        p: "Przed egzaminem albo trudnym zadaniem Włosi <b>nie</b> mówią <em>auguri</em> ani <em>buona fortuna</em> — to przynosi pecha. Mówi się <strong>in bocca al lupo</strong> („w paszczę wilka”), a odpowiedź brzmi <em>crepi!</em> albo <em>crepi il lupo!</em>" },
      { h: "Kalendarz, który trzeba znać",
        list: [
          "<b>Capodanno</b> (1 stycznia), <b>Epifania</b> (6 stycznia, przychodzi <em>la Befana</em>)",
          "<b>Pasqua</b> i <b>Pasquetta</b> (poniedziałek wielkanocny, dzień wycieczek)",
          "<b>25 aprile</b> (Wyzwolenie), <b>1 maggio</b>, <b>2 giugno</b> (Święto Republiki)",
          "<b>Ferragosto</b> (15 sierpnia — całe Włochy na wakacjach), <b>Natale</b> i <b>Santo Stefano</b>"
        ] },
      { tip: "<em>Buone feste</em> to neutralne życzenia świąteczne, <em>Buon Natale</em> konkretnie bożonarodzeniowe. W kontekście zawodowym częstsze jest to pierwsze." }
    ],
    grammar: {
      title: "Życzenia",
      table: {
        head: ["okazja", "po włosku", "odpowiedź"],
        rows: [
          ["urodziny", "Tanti auguri!", "Grazie!"],
          ["święta", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["Nowy Rok", "Buon anno!", "Anche a te!"],
          ["przed egzaminem", "In bocca al lupo!", "Crepi!"],
          ["przed podróżą", "Buon viaggio!", "Grazie!"],
          ["przed posiłkiem", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        ["Tanti auguri di buon compleanno!", "Wszystkiego najlepszego z okazji urodzin!"],
        ["Buone feste a te e alla tua famiglia.", "Wesołych świąt tobie i twojej rodzinie."],
        ["In bocca al lupo per l'esame! — Crepi!", "Powodzenia na egzaminie! — Dzięki!"],
        ["Buon lavoro!", "Miłej pracy!"],
        ["Buon weekend! — Altrettanto!", "Miłego weekendu! — Nawzajem!"],
        ["Congratulazioni per la promozione!", "Gratulacje z okazji awansu!"]
      ]
    },
    vocab: [
      { it: "auguri!", pl: "wszystkiego najlepszego!" },
      { it: "buon compleanno", pl: "wszystkiego najlepszego (urodziny)" },
      { it: "buone feste", pl: "wesołych świąt" },
      { it: "buon anno", pl: "szczęśliwego nowego roku" },
      { it: "in bocca al lupo", pl: "powodzenia" },
      { it: "crepi!", pl: "dzięki! (odpowiedź na powyższe)" },
      { it: "altrettanto", pl: "nawzajem" },
      { it: "congratulazioni", pl: "gratulacje" },
      { it: "il compleanno", pl: "urodziny" },
      { it: "l'onomastico", pl: "imieniny" },
      { it: "Ferragosto", pl: "15 sierpnia, szczyt wakacji" },
      { it: "il ponte", pl: "długi weekend" }
    ],
    culture: {
      titlePl: "Okiem Włocha: kalendarz rządzi rytmem roku",
      textPl: "<p><b>Ferragosto</b> (15 sierpnia) to moment, w którym duże miasta pustoszeją. Zamknięte są sklepy osiedlowe, część restauracji, przychodnie. Załatwianie czegokolwiek w tym tygodniu jest z góry skazane na niepowodzenie.</p>" +
        "<p><b>Il ponte</b> to „most”: gdy święto wypada we wtorek albo czwartek, bierze się wolne w poniedziałek albo piątek i wychodzi długi weekend. Terminy zawodowe planuje się z uwzględnieniem mostów.</p>" +
        "<p><b>L'onomastico</b> (imieniny) wciąż istnieje i w niektórych regionach bywa obchodzone równie chętnie co urodziny — zwłaszcza na południu.</p>"
    },
    exercises: [
      { t: "mcq", q: "Co powiesz koledze przed egzaminem?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"], a: 1,
        why: "„Buona fortuna” uchodzi za przynoszące pecha." },
      { t: "mcq", q: "Jak brzmi odpowiedź na „in bocca al lupo”?",
        opts: ["Grazie!", "Crepi!", "Altrettanto!"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Buon ___!” (miłej podróży)", a: ["viaggio"] },
      { t: "fill", q: "Uzupełnij: „Buon appetito! — ___!” (nawzajem)", a: ["altrettanto"] },
      { t: "match", q: "Połącz okazję z życzeniem.",
        pairs: [["urodziny", "tanti auguri"], ["Nowy Rok", "buon anno"], ["awans", "congratulazioni"], ["podróż", "buon viaggio"]] },
      { t: "mcq", q: "Co to „il ponte” w kalendarzu?",
        opts: ["Święto religijne", "Wolny dzień między świętem a weekendem", "Rocznica"], a: 1 },
      { t: "mcq", q: "Co dzieje się we Włoszech 15 sierpnia?",
        opts: ["Zaczyna się rok szkolny", "Ferragosto — miasta pustoszeją", "Święto Republiki"], a: 1 },
      { t: "trans", dir: "pl-it", q: "„Wesołych świąt tobie i twojej rodzinie.”",
        a: ["buone feste a te e alla tua famiglia"] },
      { t: "listen", it: "Tanti auguri di buon compleanno e buone feste!", pl: "Wszystkiego najlepszego z okazji urodzin i wesołych świąt!" },
      { t: "speak", it: "In bocca al lupo per l'esame! — Crepi!", pl: "Powodzenia na egzaminie! — Dzięki!" }
    ]
  },
  {
    id: "a2-u07-l2",
    cefr: "A2",
    themePl: "Kultura",
    titleIt: "Ti va di venire?",
    titlePl: "Zaproszenia",
    objectivesPl: [
      "zaprosić kogoś na wydarzenie",
      "przyjąć lub odmówić z klasą",
      "zapytać o szczegóły"
    ],
    theory: [
      { h: "Zaproszenie jest zwykle nieformalne",
        p: "Włoskie zaproszenia rzadko przybierają sztywną formę. Najczęściej: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Nawet uroczysta kolacja bywa zapowiadana jako <em>una cosa tra amici</em>." },
      { h: "Odmowa wymaga powodu",
        p: "Samo <em>no, grazie</em> brzmi zimno. Formuła: przeprosiny + powód + alternatywa. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em>" },
      { h: "Co przynieść",
        p: "Na kolację przynosi się wino, deser albo kwiaty. Pytanie <em>Cosa porto?</em> jest oczekiwane, a odpowiedź <em>Non portare niente!</em> jest grzecznościowa — i tak coś się przynosi." },
      { tip: "Godzina zaproszenia jest orientacyjna. Przyjście punktualnie na prywatną kolację o 20:30 bywa niezręczne; kwadrans spóźnienia jest normą." }
    ],
    grammar: {
      title: "Zapraszanie i odpowiadanie",
      table: {
        head: ["funkcja", "zwrot", "po polsku"],
        rows: [
          ["zaproszenie", "Ti va di venire a cena sabato?", "Masz ochotę przyjść w sobotę na kolację?"],
          ["przyjęcie", "Volentieri, a che ora?", "Chętnie, o której?"],
          ["odmowa", "Mi dispiace, quel giorno non posso.", "Przykro mi, tego dnia nie mogę."],
          ["alternatywa", "Facciamo un'altra volta?", "Może innym razem?"],
          ["szczegóły", "Cosa porto?", "Co przynieść?"],
          ["odpowiedź", "Non portare niente, ci pensiamo noi.", "Nic nie przynoś, my się zajmiemy."]
        ]
      },
      examples: [
        ["Sabato facciamo una cena a casa, vieni anche tu?", "W sobotę robimy kolację w domu, przyjdziesz?"],
        ["Volentieri! A che ora vi trovate?", "Chętnie! O której się spotykacie?"],
        ["Mi dispiace, sabato ho già un impegno.", "Przykro mi, w sobotę mam już coś umówionego."],
        ["Posso portare qualcuno?", "Mogę kogoś przyprowadzić?"],
        ["Porto il dolce, va bene?", "Przyniosę deser, może być?"],
        ["Ci vediamo lì verso le otto e mezza.", "Widzimy się tam koło wpół do dziewiątej."]
      ]
    },
    vocab: [
      { it: "invitare", pl: "zapraszać" },
      { it: "l'invito", pl: "zaproszenie" },
      { it: "la cena", pl: "kolacja" },
      { it: "la festa", pl: "impreza, święto" },
      { it: "l'impegno", pl: "zobowiązanie, coś umówionego" },
      { it: "volentieri", pl: "chętnie" },
      { it: "purtroppo", pl: "niestety" },
      { it: "un'altra volta", pl: "innym razem" },
      { it: "portare", pl: "przynieść" },
      { it: "verso le otto", pl: "koło ósmej" },
      { it: "trovarsi", pl: "spotykać się" },
      { it: "fare tardi", pl: "spóźnić się, siedzieć do późna" }
    ],
    exercises: [
      { t: "mcq", q: "Która odmowa brzmi najlepiej po włosku?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."], a: 1 },
      { t: "fill", q: "Uzupełnij: „___ va di venire a cena?”", a: ["ti"] },
      { t: "fill", q: "Uzupełnij: „Purtroppo ho già un ___.” (coś umówionego)", a: ["impegno"] },
      { t: "match", q: "Połącz.",
        pairs: [["volentieri", "chętnie"], ["purtroppo", "niestety"], ["l'invito", "zaproszenie"], ["trovarsi", "spotykać się"]] },
      { t: "trans", dir: "pl-it", q: "„Chętnie! O której się spotykacie?”",
        a: ["volentieri a che ora vi trovate", "volentieri! a che ora vi trovate?"] },
      { t: "dialogue", q: "Zaproszenie na kolację.",
        setting: "Wiadomość od znajomej, środa wieczorem.",
        lines: [
          { sp: "A", it: "Sabato facciamo una cena a casa. Ti va di venire?", pl: "W sobotę robimy kolację w domu. Masz ochotę przyjść?" },
          { sp: "TY", pl: "Przyjmij zaproszenie i zapytaj o godzinę.", choices: ["Volentieri! A che ora?", "Purtroppo non posso.", "Cosa porto? No."], a: 0, plAnswer: "Chętnie! O której?" },
          { sp: "A", it: "Verso le otto e mezza. Siamo in sei.", pl: "Koło wpół do dziewiątej. Jest nas sześcioro." },
          { sp: "TY", pl: "Zapytaj, co przynieść.", choices: ["Cosa porto?", "Chi porta?", "Porti tu?"], a: 0, plAnswer: "Co przynieść?" },
          { sp: "A", it: "Non portare niente! Al massimo il dolce.", pl: "Nic nie przynoś! Ewentualnie deser." }
        ] },
      { t: "cloze", q: "Uzupełnij odmowę.",
        text: "{{1}} dispiace, sabato ho già un impegno. {{2}} un'altra volta?",
        gaps: [["mi"], ["facciamo"]],
        pl: "Przykro mi, w sobotę mam już coś umówionego. Może innym razem?" },
      { t: "order", pl: "Widzimy się tam koło wpół do dziewiątej.",
        tokens: ["Ci", "vediamo", "lì", "verso", "le", "otto", "e", "mezza"],
        a: ["ci vediamo lì verso le otto e mezza"] },
      { t: "listen", it: "Ti va di venire a cena sabato sera? Siamo in sei.", pl: "Masz ochotę przyjść w sobotę na kolację? Jest nas sześcioro." },
      { t: "speak", it: "Volentieri, porto il dolce. A che ora?", pl: "Chętnie, przyniosę deser. O której?" }
    ]
  },
  {
    id: "a2-u07-l3",
    cefr: "A2",
    themePl: "Kultura",
    titleIt: "Regioni e differenze",
    titlePl: "Włochy regionalne",
    objectivesPl: [
      "rozumieć podstawowe różnice między północą a południem",
      "opisać region i jego kuchnię",
      "użyć porównań do opisu miejsc"
    ],
    theory: [
      { h: "Włochy zjednoczyły się w 1861 roku",
        p: "Przed zjednoczeniem był to zbiór państw o osobnych językach, kuchniach i instytucjach. Dlatego różnice regionalne są głębsze niż w Polsce: dialekty bywają wzajemnie niezrozumiałe, a tożsamość lokalna (<em>campanilismo</em>, od <em>campanile</em> — dzwonnica) często silniejsza niż narodowa." },
      { h: "Nie ma jednej kuchni włoskiej",
        p: "Masło i ryż na północy, oliwa i makaron na południu. <em>Pesto</em> to Liguria, <em>ragù</em> to Emilia, <em>carbonara</em> to Rzym, <em>arancini</em> to Sycylia. Zamawianie „dania włoskiego” bez regionu to jak zamawianie „dania polskiego”." },
      { h: "Język a dialekt",
        p: "<em>Il dialetto</em> to nie zepsuty włoski, tylko odrębny język wywodzący się z łaciny równolegle do toskańskiego, z którego powstał włoski standardowy. Neapolitański i sycylijski mają własną literaturę." },
      { tip: "Bezpieczny temat rozmowy z Włochem: jedzenie jego regionu. Niebezpieczny: który region gotuje lepiej." }
    ],
    grammar: {
      title: "Opis regionu",
      table: {
        head: ["region", "stolica", "znane z"],
        rows: [
          ["la Toscana", "Firenze", "bistecca, Chianti, renesans"],
          ["l'Emilia-Romagna", "Bologna", "tagliatelle al ragù, parmigiano"],
          ["la Sicilia", "Palermo", "arancini, cannoli, wpływy arabskie"],
          ["il Veneto", "Venezia", "cicchetti, prosecco"],
          ["la Campania", "Napoli", "pizza, sfogliatella"],
          ["il Piemonte", "Torino", "tartufo, vermouth, Slow Food"]
        ]
      },
      examples: [
        ["Sono di origine siciliana ma vivo a Milano.", "Jestem sycylijskiego pochodzenia, ale mieszkam w Mediolanie."],
        ["Al nord si usa più il burro, al sud l'olio d'oliva.", "Na północy używa się więcej masła, na południu oliwy."],
        ["In Veneto si parla ancora molto il dialetto.", "W Wenecji Euganejskiej wciąż dużo mówi się dialektem."],
        ["Ogni regione ha la sua pasta tipica.", "Każdy region ma swój typowy makaron."],
        ["Il caffè al sud è più forte e più corto.", "Kawa na południu jest mocniejsza i krótsza."],
        ["Roma è caotica ma bellissima.", "Rzym jest chaotyczny, ale przepiękny."]
      ]
    },
    vocab: [
      { it: "la regione", pl: "region" },
      { it: "il capoluogo", pl: "stolica regionu" },
      { it: "il nord / il sud", pl: "północ / południe" },
      { it: "il dialetto", pl: "dialekt" },
      { it: "tipico", pl: "typowy" },
      { it: "la tradizione", pl: "tradycja" },
      { it: "il piatto tipico", pl: "danie regionalne" },
      { it: "l'origine", pl: "pochodzenie" },
      { it: "caotico", pl: "chaotyczny" },
      { it: "accogliente", pl: "przyjazny, gościnny" },
      { it: "il campanilismo", pl: "lokalny patriotyzm" },
      { it: "trasferirsi", pl: "przeprowadzić się" }
    ],
    exercises: [
      { t: "match", q: "Połącz region z miastem.",
        pairs: [["la Toscana", "Firenze"], ["la Campania", "Napoli"], ["il Veneto", "Venezia"], ["il Piemonte", "Torino"]] },
      { t: "mcq", q: "Co to „campanilismo”?",
        opts: ["Styl architektoniczny", "Przywiązanie do własnej miejscowości", "Rodzaj dzwonu"], a: 1 },
      { t: "mcq", q: "Dialekt włoski to:",
        opts: ["zepsuta wersja włoskiego", "odrębny język wywodzący się z łaciny", "slang młodzieżowy"], a: 1 },
      { t: "fill", q: "Uzupełnij: „Al nord si usa più il burro, al ___ l'olio.”", a: ["sud"] },
      { t: "trans", dir: "pl-it", q: "„Każdy region ma swoje typowe danie.”",
        a: ["ogni regione ha il suo piatto tipico"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Sono di {{1}} siciliana, ma vivo al nord da dieci anni. Il {{2}} lo capisco, ma non lo parlo.",
        gaps: [["origine"], ["dialetto"]],
        pl: "Jestem sycylijskiego pochodzenia, ale od dziesięciu lat mieszkam na północy. Dialekt rozumiem, ale nim nie mówię." },
      { t: "order", pl: "Rzym jest chaotyczny, ale przepiękny.",
        tokens: ["Roma", "è", "caotica", "ma", "bellissima"], a: ["roma è caotica ma bellissima"] },
      { t: "mcq", q: "Skąd pochodzi carbonara?", opts: ["z Bolonii", "z Rzymu", "z Palermo"], a: 1 },
      { t: "listen", it: "Ogni regione italiana ha la sua cucina e spesso il suo dialetto.", pl: "Każdy włoski region ma swoją kuchnię i często swój dialekt." },
      { t: "speak", it: "Sono di origine polacca, ma vivo in Toscana da tre anni.", pl: "Jestem polskiego pochodzenia, ale mieszkam w Toskanii od trzech lat." }
    ]
  },
  {
    id: "a2-u07-l4",
    cefr: "A2",
    themePl: "Gramatyka",
    titleIt: "Lentamente, di solito",
    titlePl: "Przysłówki",
    objectivesPl: [
      "tworzyć przysłówki na -mente",
      "odróżnić przymiotnik od przysłówka",
      "ustawić przysłówek we właściwym miejscu"
    ],
    theory: [
      { h: "Tworzenie",
        p: "Bierzesz formę <b>żeńską</b> przymiotnika i dodajesz <em>-mente</em>: <em>lenta → lentamente</em>, <em>rara → raramente</em>. Przymiotniki na <em>-le</em> i <em>-re</em> gubią końcowe <em>e</em>: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>." },
      { h: "Buono kontra bene",
        p: "To rozróżnienie sprawia najwięcej kłopotu. <em>Buono</em> jest przymiotnikiem (jaki?), <em>bene</em> przysłówkiem (jak?). <em>Un caffè <b>buono</b></em> ale <em>parla <b>bene</b></em>. Zdanie „parla buono” jest błędem." },
      { h: "Miejsce w zdaniu złożonym",
        p: "W passato prossimo przysłówki <em>già, mai, ancora, sempre, appena, più</em> wchodzą <b>między posiłkowy a imiesłów</b>: <em>ho <b>già</b> visto</em>. Pozostałe zwykle idą po imiesłowie: <em>ho parlato <b>lentamente</b></em>." },
      { tip: "Przysłówki na <em>-mente</em> są długie i we włoskim mówionym często zastępuje się je konstrukcjami: <em>in modo semplice</em> zamiast <em>semplicemente</em>, <em>con calma</em> zamiast <em>tranquillamente</em>." }
    ],
    grammar: {
      title: "Przysłówki",
      table: {
        head: ["przymiotnik", "przysłówek", "przykład"],
        rows: [
          ["lento / lenta", "lentamente", "Parla lentamente, per favore."],
          ["raro / rara", "raramente", "Vado raramente al cinema."],
          ["facile", "facilmente", "Si trova facilmente."],
          ["regolare", "regolarmente", "Studia regolarmente."],
          ["buono", "bene", "Cucina bene."],
          ["cattivo", "male", "Ho dormito male."]
        ]
      },
      examples: [
        ["Può parlare più lentamente, per favore?", "Może pan mówić wolniej?"],
        ["Vado raramente in centro il weekend.", "Rzadko chodzę do centrum w weekend."],
        ["Ho già visto quel film.", "Już widziałem ten film."],
        ["Non ci sono ancora stato.", "Jeszcze tam nie byłem."],
        ["Parla bene l'italiano, ma scrive male.", "Dobrze mówi po włosku, ale źle pisze."],
        ["Fallo con calma.", "Zrób to spokojnie."]
      ]
    },
    vocab: [
      { it: "lentamente", pl: "wolno" },
      { it: "velocemente", pl: "szybko" },
      { it: "facilmente", pl: "łatwo" },
      { it: "raramente", pl: "rzadko" },
      { it: "regolarmente", pl: "regularnie" },
      { it: "improvvisamente", pl: "nagle" },
      { it: "finalmente", pl: "wreszcie" },
      { it: "assolutamente", pl: "absolutnie" },
      { it: "bene / male", pl: "dobrze / źle" },
      { it: "con calma", pl: "spokojnie" },
      { it: "in fretta", pl: "w pośpiechu" },
      { it: "quasi", pl: "prawie" }
    ],
    exercises: [
      { t: "fill", q: "Utwórz przysłówek od „lento”: ___", a: ["lentamente"] },
      { t: "fill", q: "Utwórz przysłówek od „facile”: ___", a: ["facilmente"] },
      { t: "mcq", q: "Które zdanie jest poprawne?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."], a: 1 },
      { t: "fill", q: "Uzupełnij: „Ho ___ visto quel film.” (już)", a: ["già"] },
      { t: "mcq", q: "Gdzie stoi „ancora” w passato prossimo?",
        opts: ["Przed posiłkowym", "Między posiłkowym a imiesłowem", "Na końcu"], a: 1 },
      { t: "match", q: "Połącz.",
        pairs: [["finalmente", "wreszcie"], ["improvvisamente", "nagle"], ["con calma", "spokojnie"], ["quasi", "prawie"]] },
      { t: "trans", dir: "pl-it", q: "„Może pan mówić wolniej?”",
        a: ["può parlare più lentamente", "può parlare più lentamente?"] },
      { t: "cloze", q: "Uzupełnij.",
        text: "Parla {{1}} l'italiano, ma scrive ancora {{2}}. Studia {{3}} tutti i giorni.",
        gaps: [["bene"], ["male"], ["regolarmente"]],
        pl: "Dobrze mówi po włosku, ale wciąż źle pisze. Uczy się regularnie, codziennie." },
      { t: "listen", it: "Finalmente ho trovato un appartamento vicino al lavoro.", pl: "Wreszcie znalazłem mieszkanie blisko pracy." },
      { t: "speak", it: "Può ripetere più lentamente, per favore?", pl: "Może pan powtórzyć wolniej?" }
    ]
  }
  ],
  test: {
    id: "a2-u07-test",
    cefr: "A2", themePl: "Sprawdzian",
    titleIt: "Test — Feste e tradizioni", titlePl: "Sprawdzian jednostki 7",
    objectivesPl: ["sprawdzić życzenia, zaproszenia, wiedzę o regionach i przysłówki"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { t: "mcq", q: "Przed egzaminem mówisz:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"], a: 1 },
      { t: "fill", q: "Odpowiedź na „in bocca al lupo”: ___", a: ["crepi", "crepi il lupo"] },
      { t: "fill", q: "„Buon appetito! — ___!”", a: ["altrettanto"] },
      { t: "fill", q: "„___ va di venire a cena?”", a: ["ti"] },
      { t: "mcq", q: "„Il ponte” to:", opts: ["most", "długi weekend", "święto"], a: 1 },
      { t: "match", q: "Połącz.", pairs: [["la Toscana", "Firenze"], ["la Campania", "Napoli"], ["la Sicilia", "Palermo"], ["il Veneto", "Venezia"]] },
      { t: "fill", q: "Przysłówek od „regolare”: ___", a: ["regolarmente"] },
      { t: "mcq", q: "Poprawne zdanie:", opts: ["Parla buono.", "Parla bene.", "Parla buon."], a: 1 },
      { t: "listen", it: "Tanti auguri e buone feste a tutta la famiglia!", pl: "Wszystkiego najlepszego i wesołych świąt całej rodzinie!" },
      { t: "speak", it: "Ti va di venire alla festa sabato sera?", pl: "Masz ochotę przyjść na imprezę w sobotę wieczorem?" }
    ]
  }
},

/* ══════════════════════════════════════════════════════════════
   JEDNOSTKA 8 — PROGETTI E RIPASSO
   ══════════════════════════════════════════════════════════════ */
{
  id: "a2-u08",
  icon: "🧭",
  titleIt: "Progetti",
  titlePl: "Plany i powtórka",
  grammarPl: "wyrażanie zamiarów · powtórka A2",
  lessons: [
  {
    id: "a2-u08-l1",
    cefr: "A2",
    themePl: "Plany",
    titleIt: "Ho intenzione di…",
    titlePl: "Zamiary i marzenia",
    objectivesPl: [
      "opowiedzieć o planach na przyszłość",
      "wyrazić marzenie i wątpliwość",
      "połączyć futuro z condizionale"
    ],
    theory: [
      { h: "Trzy stopnie pewności",
        list: [
          "<b>pewne</b>: <em>A settembre comincio un nuovo lavoro.</em> (czas teraźniejszy)",
          "<b>planowane</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>marzone</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ] },
      { h: "Mi piacerebbe kontra vorrei",
        p: "<em>Vorrei</em> mówi o czymś realnym i osiągalnym („chciałbym kawę”). <em>Mi piacerebbe</em> przesuwa wypowiedź w stronę marzenia albo hipotezy („chciałoby mi się”, „fajnie byłoby”). Włoch użyje pierwszego przy zamawianiu, drugiego przy planach życiowych." },
      { h: "Przyimki po czasownikach zamiaru",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, ale <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. Przyimek jest częścią czasownika i trzeba go zapamiętać razem z nim." },
      { tip: "<em>Chissà</em> („kto wie”) często otwiera zdanie o niepewnej przyszłości: <em>Chissà dove sarò tra cinque anni.</em>" }
    ],
    grammar: {
      title: "Wyrażanie planów",
      table: {
        head: ["stopień", "konstrukcja", "przykład"],
        rows: [
          ["decyzja", "presente", "A giugno cambio lavoro."],
          ["zamiar", "ho intenzione di + bezokolicznik", "Ho intenzione di studiare medicina."],
          ["przewidywanie", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["marzenie", "mi piacerebbe + bezokolicznik", "Mi piacerebbe vivere al mare."],
          ["nadzieja", "spero di + bezokolicznik", "Spero di trovare casa presto."],
          ["niepewność", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        ["Ho intenzione di iscrivermi a un corso serale.", "Mam zamiar zapisać się na kurs wieczorowy."],
        ["Mi piacerebbe lavorare all'estero per un anno.", "Chciałbym popracować rok za granicą."],
        ["Spero di superare l'esame a giugno.", "Mam nadzieję zdać egzamin w czerwcu."],
        ["Fra cinque anni chissà dove sarò.", "Za pięć lat kto wie, gdzie będę."],
        ["Sto pensando di cambiare città.", "Myślę o zmianie miasta."],
        ["Prima o poi imparerò a suonare il piano.", "Prędzej czy później nauczę się grać na pianinie."]
      ]
    },
    vocab: [
      { it: "ho intenzione di", pl: "mam zamiar" },
      { it: "mi piacerebbe", pl: "chciałbym (marzenie)" },
      { it: "spero di", pl: "mam nadzieję" },
      { it: "sto pensando di", pl: "myślę o tym, żeby" },
      { it: "sognare di", pl: "marzyć o" },
      { it: "chissà", pl: "kto wie" },
      { it: "prima o poi", pl: "prędzej czy później" },
      { it: "all'estero", pl: "za granicą" },
      { it: "il corso serale", pl: "kurs wieczorowy" },
      { it: "superare l'esame", pl: "zdać egzamin" },
      { it: "cambiare vita", pl: "zmienić życie" },
      { it: "il sogno", pl: "marzenie, sen" }
    ],
    exercises: [
      { t: "fill", q: "Uzupełnij: „Ho intenzione ___ trasferirmi.”", a: ["di"] },
      { t: "fill", q: "Uzupełnij: „Spero ___ trovare casa presto.”", a: ["di"] },
      { t: "fill", q: "Uzupełnij: „Comincio ___ capire meglio.”", a: ["a"] },
      { t: "mcq", q: "Które zdanie brzmi jak marzenie, a nie plan?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."], a: 1 },
      { t: "conj", verb: "essere", tense: "futuro", persons: [0, 2, 5] },
      { t: "trans", dir: "pl-it", q: "„Chciałbym popracować rok za granicą.”",
        a: ["mi piacerebbe lavorare all'estero per un anno"] },
      { t: "cloze", q: "Uzupełnij plany.",
        text: "{{1}} intenzione di iscrivermi a un corso e {{2}} di superare l'esame a giugno.",
        gaps: [["ho"], ["spero"]],
        pl: "Mam zamiar zapisać się na kurs i mam nadzieję zdać egzamin w czerwcu." },
      { t: "order", pl: "Prędzej czy później nauczę się grać na pianinie.",
        tokens: ["Prima", "o", "poi", "imparerò", "a", "suonare", "il", "piano"],
        a: ["prima o poi imparerò a suonare il piano"] },
      { t: "listen", it: "Sto pensando di cambiare città l'anno prossimo.", pl: "Myślę o zmianie miasta w przyszłym roku." },
      { t: "speak", it: "Mi piacerebbe vivere in Italia per almeno un anno.", pl: "Chciałbym pomieszkać we Włoszech przynajmniej rok." }
    ]
  },
  {
    id: "a2-u08-l2",
    cefr: "A2",
    themePl: "Powtórka",
    titleIt: "Ripasso: i tempi",
    titlePl: "Powtórka czasów",
    objectivesPl: [
      "wybrać czas odpowiedni do sytuacji",
      "połączyć wszystkie czasy poznane na A2",
      "wyłapać własne słabe punkty"
    ],
    theory: [
      { h: "Mapa czasów poziomu A2",
        list: [
          "<b>presente</b> — teraz, zwyczaj, bliska przyszłość",
          "<b>passato prossimo</b> — zdarzenie zamknięte",
          "<b>imperfetto</b> — tło, opis, zwyczaj w przeszłości",
          "<b>trapassato prossimo</b> — przeszłość przed przeszłością",
          "<b>futuro semplice</b> — plan, przewidywanie, przypuszczenie o teraz",
          "<b>futuro anteriore</b> — przyszłość przed przyszłością, przypuszczenie o przeszłości",
          "<b>condizionale presente</b> — prośba, rada, marzenie"
        ] },
      { h: "Najczęstsze błędy na tym etapie",
        list: [
          "użycie passato prossimo tam, gdzie potrzebny jest imperfetto (opis)",
          "brak zgodności imiesłowu z <em>essere</em>: „siamo andato”",
          "brak zgodności imiesłowu z zaimkiem: „l'ho visto” o kobiecie",
          "condizionale po <em>se</em>: „se avrei” zamiast poprawnej konstrukcji"
        ] }
    ],
    grammar: {
      title: "Czasy w jednej tabeli",
      table: {
        head: ["czas", "przykład", "kiedy"],
        rows: [
          ["presente", "Lavoro in banca.", "teraz, zwyczaj"],
          ["passato prossimo", "Ieri ho lavorato molto.", "zdarzenie zamknięte"],
          ["imperfetto", "Da bambino lavoravo poco.", "tło, zwyczaj"],
          ["trapassato", "Avevo già lavorato lì.", "wcześniejsza przeszłość"],
          ["futuro", "Domani lavorerò da casa.", "plan"],
          ["futuro anteriore", "Quando avrò finito, esco.", "wcześniejsza przyszłość"],
          ["condizionale", "Vorrei lavorare meno.", "prośba, marzenie"]
        ]
      },
      examples: [
        ["Mentre studiavo, è arrivata una mail importante.", "Kiedy się uczyłem, przyszedł ważny mail."],
        ["Quando sono uscita, aveva già smesso di piovere.", "Kiedy wyszłam, przestało już padać."],
        ["Domani ti chiamerò appena avrò finito.", "Jutro zadzwonię, jak tylko skończę."],
        ["Vorrei chiederti un favore.", "Chciałbym cię o coś prosić."],
        ["Da piccola non mi piaceva il pesce.", "Jako mała nie lubiłam ryb."],
        ["L'ho conosciuta l'anno scorso a Roma.", "Poznałem ją w zeszłym roku w Rzymie."]
      ]
    },
    vocab: [
      { it: "il tempo verbale", pl: "czas gramatyczny" },
      { it: "l'errore comune", pl: "częsty błąd" },
      { it: "la concordanza", pl: "zgodność" },
      { it: "il participio", pl: "imiesłów" },
      { it: "l'ausiliare", pl: "czasownik posiłkowy" },
      { it: "ripassare", pl: "powtarzać" },
      { it: "confondere", pl: "mylić" },
      { it: "distinguere", pl: "odróżniać" }
    ],
    exercises: [
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Mentre {{1}} (studiare, io), {{2}} (arrivare) una mail importante.",
        gaps: [["studiavo"], ["è arrivata"]],
        pl: "Kiedy się uczyłem, przyszedł ważny mail." },
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Quando {{1}} (uscire, io - kobieta), {{2}} (smettere) già di piovere.",
        gaps: [["sono uscita"], ["aveva"]],
        pl: "Kiedy wyszłam, przestało już padać." },
      { t: "cloze", q: "Wstaw właściwe formy.",
        text: "Domani ti {{1}} (chiamare) appena {{2}} (finire).",
        gaps: [["chiamerò"], ["avrò finito", "finisco"]],
        pl: "Jutro zadzwonię, jak tylko skończę." },
      { t: "mcq", q: "„Siamo andato al mare” — co jest nie tak?",
        opts: ["Zły posiłkowy", "Brak zgodności imiesłowu (andati)", "Nic, jest poprawnie"], a: 1 },
      { t: "mcq", q: "O kobiecie: „L'ho visto ieri” — co poprawić?",
        opts: ["Nic", "L'ho vista", "Le ho visto"], a: 1 },
      { t: "conj", verb: "avere", tense: "imperf", persons: [0, 2, 3] },
      { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 5] },
      { t: "conj", verb: "volere", tense: "condizionale", persons: [0, 1, 2] },
      { t: "trans", dir: "pl-it", q: "„Chciałbym cię o coś prosić.”",
        a: ["vorrei chiederti un favore", "vorrei chiederti una cosa"] },
      { t: "listen", it: "Da piccola non mi piaceva il pesce, adesso lo adoro.", pl: "Jako mała nie lubiłam ryb, teraz je uwielbiam." },
      { t: "speak", it: "Ieri sono andata al cinema e il film mi è piaciuto molto.", pl: "Wczoraj poszłam do kina i film bardzo mi się podobał." }
    ]
  },
  {
    id: "a2-u08-l3",
    cefr: "A2",
    themePl: "Powtórka",
    titleIt: "Ripasso: pronomi",
    titlePl: "Powtórka zaimków",
    objectivesPl: [
      "wybrać właściwy zaimek",
      "połączyć zaimki z czasami złożonymi",
      "przygotować się do zaimków połączonych na B1"
    ],
    theory: [
      { h: "Cztery grupy do rozróżnienia",
        list: [
          "<b>bliższe</b>: mi, ti, lo, la, ci, vi, li, le — „kogo? co?”",
          "<b>dalsze</b>: mi, ti, gli, le, ci, vi, gli — „komu?”",
          "<b>zwrotne</b>: mi, ti, si, ci, vi, si — czynność na sobie",
          "<b>cząstki</b>: ci (miejsce, a + rzecz), ne (część, di + rzecz)"
        ] },
      { h: "Test rozstrzygający",
        p: "Zadaj pytanie o czasownik. „Widzę <b>kogo</b>?” → bliższy (<em>lo vedo</em>). „Dzwonię <b>do kogo</b>?” → dalszy (<em>gli telefono</em>). Jeśli czasownik wymaga <em>a</em>, zaimek będzie dalszy." },
      { h: "Co czeka na B1",
        p: "Zaimki połączone (<em>me lo, glielo, ce ne</em>) oraz pełne użycie <em>ci</em> i <em>ne</em> w wyrażeniach zrośniętych. Fundament, który tu powtarzasz, jest do tego niezbędny." }
    ],
    grammar: {
      title: "Zaimki — podsumowanie",
      table: {
        head: ["typ", "formy", "przykład"],
        rows: [
          ["bliższy", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["dalszy", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["zwrotny", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "miejsce / a + rzecz", "Ci vado domani."],
          ["ne", "część / di + rzecz", "Ne prendo due."],
          ["zgodność", "tylko z bliższym", "Le ho viste."]
        ]
      },
      examples: [
        ["Il libro? L'ho letto la settimana scorsa.", "Książkę? Przeczytałem ją w zeszłym tygodniu."],
        ["A Marco? Gli ho già risposto.", "Marco? Już mu odpowiedziałem."],
        ["Le chiavi? Non le trovo più.", "Klucze? Nie mogę ich znaleźć."],
        ["In palestra ci vado tre volte a settimana.", "Na siłownię chodzę trzy razy w tygodniu."],
        ["Quanti ne vuoi? — Ne voglio tre.", "Ile chcesz? — Chcę trzy."],
        ["Mi sono alzata alle sei.", "Wstałam o szóstej."]
      ]
    },
    vocab: [
      { it: "il pronome", pl: "zaimek" },
      { it: "diretto / indiretto", pl: "bliższy / dalszy" },
      { it: "riflessivo", pl: "zwrotny" },
      { it: "sostituire", pl: "zastępować" },
      { it: "ripetere", pl: "powtarzać" },
      { it: "evitare", pl: "unikać" },
      { it: "la ripetizione", pl: "powtórzenie" },
      { it: "scorrevole", pl: "płynny (o języku)" }
    ],
    exercises: [
      { t: "mcq", q: "„Telefono a Giulia” →", opts: ["La telefono", "Le telefono", "Ne telefono"], a: 1 },
      { t: "mcq", q: "„Vedo Giulia” →", opts: ["La vedo", "Le vedo", "Gli vedo"], a: 0 },
      { t: "fill", q: "„Le chiavi? Non ___ trovo.”", a: ["le"] },
      { t: "fill", q: "„Quante mele vuoi? — ___ voglio tre.”", a: ["ne"] },
      { t: "fill", q: "„In palestra ___ vado tre volte a settimana.”", a: ["ci"] },
      { t: "fill", q: "Uzupełnij końcówkę: „Le ho vist___.” (je, kobiety)", a: ["e"] },
      { t: "multi", q: "Które czasowniki biorą zaimek dalszy?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"], a: [0, 2, 4] },
      { t: "cloze", q: "Uzupełnij zaimki.",
        text: "Il libro? {{1}}'ho letto. A Marco? {{2}} ho scritto ieri. Al mercato? {{3}} vado sabato.",
        gaps: [["l"], ["gli"], ["ci"]],
        pl: "Książkę? Przeczytałem ją. Marco? Napisałem mu wczoraj. Na targ? Idę w sobotę." },
      { t: "listen", it: "Le ho scritto una mail, ma non mi ha ancora risposto.", pl: "Napisałem do niej maila, ale jeszcze mi nie odpowiedziała." },
      { t: "speak", it: "Il film? L'ho visto ieri e mi è piaciuto molto.", pl: "Film? Widziałem go wczoraj i bardzo mi się podobał." }
    ]
  },
  {
    id: "a2-u08-l4",
    cefr: "A2",
    themePl: "Powtórka",
    titleIt: "Pronti per il B1",
    titlePl: "Gotowość do poziomu B1",
    objectivesPl: [
      "sprawdzić opanowanie całego poziomu A2",
      "zobaczyć, co czeka na B1",
      "zdecydować, czy iść dalej"
    ],
    theory: [
      { h: "Co powinieneś już umieć",
        list: [
          "opowiedzieć o przeszłości dwoma czasami i wybrać właściwy",
          "mówić o planach i marzeniach",
          "poradzić sobie w podróży, hotelu, u lekarza, w pracy",
          "używać zaimków zamiast powtarzać rzeczowniki",
          "napisać krótkiego maila i przeprowadzić rozmowę telefoniczną",
          "wyrazić prośbę, radę i uprzejmą odmowę"
        ] },
      { h: "Co przychodzi na B1",
        p: "<strong>Congiuntivo</strong> — tryb, który wyraża opinię, wątpliwość i emocję, i który dla Polaków bywa największą barierą. Do tego zaimki połączone, pełne <em>ci</em> i <em>ne</em>, zdania względne, mowa zależna, argumentowanie i włoska biurokracja." },
      { tip: "Nie przechodź na B1 z wynikiem poniżej 70%. Congiuntivo buduje się na czasach A2 — luki tam zamienią się w blokadę." }
    ],
    vocab: [
      { it: "il congiuntivo", pl: "tryb łączący" },
      { it: "l'opinione", pl: "opinia" },
      { it: "il dubbio", pl: "wątpliwość" },
      { it: "argomentare", pl: "argumentować" },
      { it: "la burocrazia", pl: "biurokracja" },
      { it: "pronto per", pl: "gotowy na" },
      { it: "il progresso", pl: "postęp" },
      { it: "ce la posso fare", pl: "dam radę" }
    ],
    exercises: [
      { t: "cloze", q: "Wstaw czasy.",
        text: "Ieri {{1}} (andare, io - kobieta) al cinema con Marta. Il film {{2}} (essere) lungo ma bello.",
        gaps: [["sono andata"], ["era"]],
        pl: "Wczoraj poszłam do kina z Martą. Film był długi, ale dobry." },
      { t: "conj", verb: "essere", tense: "imperf", persons: [0, 2, 3, 5] },
      { t: "conj", verb: "andare", tense: "futuro", persons: [0, 2, 3] },
      { t: "conj", verb: "potere", tense: "condizionale", persons: [1, 2] },
      { t: "fill", q: "„Le chiavi? ___ ho perse.”", a: ["le"] },
      { t: "fill", q: "„A Marco ___ ho telefonato ieri.”", a: ["gli"] },
      { t: "fill", q: "„Quanto ___ vuole per arrivare?”", a: ["ci"] },
      { t: "fill", q: "„Mi ___ male la schiena.”", a: ["fa"] },
      { t: "fill", q: "„Ho intenzione ___ cambiare lavoro.”", a: ["di"] },
      { t: "trans", dir: "pl-it", q: "„Kiedy skończę pracę, zadzwonię do ciebie.”",
        a: ["quando avrò finito il lavoro ti chiamerò", "quando finisco il lavoro ti chiamo"] },
      { t: "listen", it: "Mentre tornavo a casa ho incontrato Giulia e le ho parlato del progetto.", pl: "Kiedy wracałem do domu, spotkałem Giulię i rozmawiałem z nią o projekcie." },
      { t: "speak", it: "L'anno prossimo mi piacerebbe trasferirmi in Italia per lavoro.", pl: "W przyszłym roku chciałbym przeprowadzić się do Włoch do pracy." }
    ]
  }
  ],
  test: {
    id: "a2-u08-test",
    cefr: "A2", themePl: "Egzamin",
    titleIt: "Esame finale A2", titlePl: "Egzamin końcowy poziomu A2",
    objectivesPl: ["sprawdzić gotowość do przejścia na poziom B1"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      { t: "conj", verb: "fare", tense: "imperf", persons: [0, 2, 5] },
      { t: "conj", verb: "venire", tense: "futuro", persons: [0, 2, 5] },
      { t: "cloze", q: "Wstaw czasy.",
        text: "Mentre {{1}} (aspettare, io) l'autobus, {{2}} (incontrare) un vecchio amico.",
        gaps: [["aspettavo"], ["ho incontrato"]],
        pl: "Kiedy czekałem na autobus, spotkałem starego znajomego." },
      { t: "fill", q: "„Quando sono arrivato, il treno ___ già partito.”", a: ["era"] },
      { t: "mcq", q: "„Hai visto Anna?” →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."], a: 1 },
      { t: "fill", q: "„A Marco ___ ho risposto.”", a: ["gli"] },
      { t: "fill", q: "„Quanti ne vuoi? — ___ voglio due.”", a: ["ne"] },
      { t: "fill", q: "„___ meglio riposare.” (lepiej byłoby)", a: ["sarebbe"] },
      { t: "fill", q: "„Qui ___ i panini.” (sprzedaje się)", a: ["si vendono"] },
      { t: "fill", q: "Przysłówek od „facile”: ___", a: ["facilmente"] },
      { t: "trans", dir: "pl-it", q: "„Chciałbym przełożyć spotkanie na czwartek.”",
        a: ["vorrei spostare l'appuntamento a giovedì", "vorrei spostare la riunione a giovedì"] },
      { t: "speak", it: "Ieri sono andata dal medico perché mi faceva male la gola.", pl: "Wczoraj poszłam do lekarza, bo bolało mnie gardło." }
    ]
  }
}

]);
