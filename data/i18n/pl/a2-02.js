/* ============================================================
   Teksty w języku ucznia (pl) do data/core/a2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:a2-u05": { title: "Mieszkanie i dzielnica", grammarNote: "ci locativo · ogłoszenia · opis wnętrza" },
  "lesson:a2-u05-l1": {
    theme: "Mieszkanie",
    title: "Ogłoszenia i szukanie mieszkania",
    objectives: [
      "odczytać włoskie ogłoszenie o wynajmie",
      "zapytać o czynsz, opłaty i kaucję",
      "opisać, czego szukasz"
    ],
    theory: [
      {
        h: "Ogłoszenia są pisane skrótami",
        p: "<em>Bilocale</em> to mieszkanie z jednym pokojem plus salon (nie „dwa pokoje sypialne”). Liczy się <b>liczba pomieszczeń mieszkalnych</b> łącznie z salonem: <em>monolocale</em> (kawalerka), <em>bilocale</em>, <em>trilocale</em>. Kuchnia i łazienka nie wchodzą do rachunku."
      },
      {
        h: "Trzy liczby, o które trzeba zapytać",
        list: [
          "<b>l'affitto</b> — sam czynsz właściciela",
          "<b>le spese condominiali</b> — opłaty wspólnoty (często 50-150 € miesięcznie, nie zawsze wliczone)",
          "<b>la cauzione</b> — kaucja, zwykle 2-3 czynsze"
        ]
      },
      {
        h: "Typy umów",
        p: "<strong>4+4</strong> to umowa czteroletnia z automatycznym przedłużeniem; <strong>3+2</strong> to umowa o czynszu regulowanym (<em>canone concordato</em>), często korzystniejsza podatkowo. <em>Contratto transitorio</em> to umowa krótkoterminowa dla studentów i pracowników czasowych."
      },
      {
        tip: "Skróty w ogłoszeniach: <em>mq</em> (metry kwadratowe), <em>p. terra</em> (parter), <em>ammobiliato/arredato</em> (umeblowane), <em>spese escluse</em> (opłaty nie wliczone), <em>rif.</em> (numer oferty)."
      }
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
        { tr: "Szukam umeblowanego dwupokojowego w dzielnicy uniwersyteckiej." },
        { tr: "Ile wynosi czynsz miesięczny z opłatami?" },
        { tr: "Ile wynoszą opłaty wspólnoty?" },
        { tr: "Kaucja to trzy czynsze." },
        { tr: "To umowa 4+4 czy krótkoterminowa?" },
        { tr: "Czy zwierzęta są dozwolone?" }
      ]
    },
    vocab: [
      "czynsz, wynajem",
      "wynajmować",
      "właściciel",
      "najemca",
      "opłaty wspólnoty",
      "kaucja",
      "umowa",
      "umeblowane / puste",
      "jasny",
      "parter",
      "ogrzewanie",
      "biuro nieruchomości"
    ],
    exercises: [
      {
        q: "„Bilocale” to mieszkanie:",
        opts: ["z dwiema sypialniami", "z salonem i jedną sypialnią", "dwupoziomowe"]
      },
      { q: "„Spese escluse” znaczy:", opts: ["opłaty wliczone", "opłaty doliczane osobno", "bez kaucji"] },
      { q: "Uzupełnij: „La ___ è di tre mensilità.” (kaucja)" },
      { q: "Połącz.", pairs: ["najemca", "właściciel", "umeblowane", "parter"] },
      { q: "„Ile wynoszą opłaty wspólnoty?”" },
      {
        q: "Uzupełnij pytania do właściciela.",
        tr: "Ile wynosi czynsz miesięczny? Opłaty są wliczone? A kaucja?"
      },
      { tr: "Szukam umeblowanego dwupokojowego w centrum." },
      {
        q: "Umowa „4+4” to:",
        opts: ["cztery miesiące", "cztery lata z automatycznym przedłużeniem", "czterech najemców"]
      },
      { tr: "Jasne dwupokojowe, umeblowane, drugie piętro, bez opłat." },
      { tr: "Chciałbym wiedzieć, ile wynoszą opłaty wspólnoty." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Mieszkanie",
    title: "Cząstka ci",
    objectives: [
      "zastąpić określenie miejsca cząstką ci",
      "rozpoznać ci w wyrażeniach stałych",
      "odróżnić ci-miejsce od ci-nas"
    ],
    theory: [
      {
        h: "Ci zastępuje miejsce",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Cząstka <em>ci</em> znaczy tu „tam”, zastępując całe określenie miejsca. Bez niej trzeba by powtórzyć „a Roma”, co brzmi ciężko."
      },
      {
        h: "Ci zastępuje też „a + rzecz”",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> („Myślę o nim ciągle”). Uwaga: o osobach mówi się inaczej — <em>penso <b>a lei</b></em>, nie „ci penso”."
      },
      {
        h: "Ci w wyrażeniach zrośniętych",
        list: [
          "<em>volerci</em> — być potrzebnym: <em>Ci vogliono due ore.</em> („Potrzeba dwóch godzin”)",
          "<em>metterci</em> — zajmować czas komuś: <em>Ci metto un'ora.</em>",
          "<em>farcela</em> — dać radę: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — mieć związek: <em>Che c'entra?</em> („Co to ma do rzeczy?”)"
        ]
      },
      {
        trap: "Ta sama forma <em>ci</em> znaczy też „nas” i „nam”: <em>ci vedono</em> (widzą nas), <em>ci hanno detto</em> (powiedzieli nam). Rozstrzyga kontekst i czasownik."
      }
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
        { tr: "Byłeś kiedyś na Sycylii? — Tak, byłem dwa razy." },
        { tr: "Ile zajmuje stąd na dworzec?" },
        { tr: "Idę tam dwadzieścia minut." },
        { tr: "Już nie daję rady, jestem wykończona." },
        { tr: "Co to ma wspólnego z umową?" },
        { tr: "Na targ chodzę w każdą sobotę." }
      ]
    },
    vocab: [
      "idę / jadę tam",
      "potrzeba",
      "zajmuje mi",
      "dać radę",
      "co to ma do rzeczy?",
      "przeprowadzka",
      "sąsiad",
      "wspólnota mieszkaniowa",
      "brama wejściowa",
      "domofon",
      "rachunek za media",
      "hydraulik"
    ],
    exercises: [
      { q: "„Vai a Roma? — Sì, ___ vado domani.”", opts: ["la", "ci", "ne"] },
      { q: "Uzupełnij: „Quanto ___ vuole da qui alla stazione?”" },
      { q: "Uzupełnij: „___ metto venti minuti.”" },
      {
        q: "„Ci vogliono due ore” znaczy:",
        opts: ["Chcemy dwie godziny", "Potrzeba dwóch godzin", "Mamy dwie godziny"]
      },
      {
        q: "„Non ce la faccio più” znaczy:",
        opts: ["Nie robię tego więcej", "Już nie daję rady", "Nie ma tego więcej"]
      },
      {
        q: "W których zdaniach „ci” oznacza miejsce?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Uzupełnij.", tr: "— Ile zajmuje dojazd? — Metrem jadę pół godziny." },
      { q: "„Na targ chodzę w każdą sobotę.”" },
      { tr: "Potrzeba przynajmniej dwóch godzin, żeby skończyć przeprowadzkę." },
      { tr: "Do centrum chodzę pieszo, zajmuje mi to dwadzieścia minut." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Mieszkanie",
    title: "Opis wnętrza",
    objectives: [
      "nazwać pomieszczenia i meble",
      "opisać rozkład mieszkania",
      "użyć przyimków położenia w opisie"
    ],
    theory: [
      {
        h: "Włoskie mieszkanie ma inną logikę",
        p: "<em>Il soggiorno</em> (salon) często łączy się z jadalnią; kuchnia bywa osobnym, małym pomieszczeniem (<em>cucina abitabile</em> to taka, w której da się jeść). <em>Il ripostiglio</em> to schowek, którego w polskich mieszkaniach zwykle nie ma pod tą nazwą."
      },
      {
        h: "Balkon, taras, loggia",
        p: "<em>Il balcone</em> wystaje z budynku, <em>la loggia</em> jest wpuszczona w bryłę, <em>il terrazzo</em> jest duży i zwykle na dachu. W ogłoszeniach ta różnica wpływa na cenę."
      },
      {
        h: "Przyimki w opisie rozkładu",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Wszystkie łączą się z <em>a</em> lub <em>di</em>, więc wracają przyimki ściągnięte: <em>accanto <b>alla</b> finestra</em>."
      },
      {
        tip: "Piętra liczy się inaczej niż w Polsce dopiero od <em>piano terra</em> (parter) — a więc <em>primo piano</em> to nasze pierwsze piętro. Tu akurat systemy się zgadzają, w przeciwieństwie do angielskiego."
      }
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
        { tr: "Mieszkanie jest na trzecim piętrze bez windy." },
        { tr: "Kuchnia jest mała, ale da się w niej jeść." },
        { tr: "Balkon wychodzi na wewnętrzne podwórko." },
        { tr: "Przy wejściu jest schowek." },
        { tr: "Okna wychodzą na południe, więc jest bardzo jasno." },
        { tr: "Ogrzewanie jest indywidualne." }
      ]
    },
    vocab: [
      "salon",
      "sypialnia",
      "łazienka",
      "korytarz",
      "schowek",
      "kanapa",
      "szafa",
      "biurko",
      "lodówka",
      "pralka",
      "wychodzić na (o oknie)",
      "ogrzewanie indywidualne"
    ],
    exercises: [
      {
        q: "Połącz pomieszczenie z meblem.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Uzupełnij: „L'armadio è accanto ___ letto.”" },
      { q: "Uzupełnij: „Il balcone ___ sul cortile.” (wychodzi na)" },
      {
        q: "„Cucina abitabile” to kuchnia:",
        opts: ["z oknem", "na tyle duża, że można w niej jeść", "umeblowana"]
      },
      { q: "Opisz mieszkanie.", tr: "Kanapa jest naprzeciwko okna, a regał obok kanapy." },
      { q: "„Mieszkanie jest na trzecim piętrze bez windy.”" },
      { tr: "Okna wychodzą na południe, więc jest bardzo jasno." },
      { q: "Rodzajniki:", items: [, , , ] },
      { tr: "Sypialnia wychodzi na podwórko, więc jest cicha." },
      { tr: "Salon jest jasny, a w kuchni da się jeść." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Mieszkanie",
    title: "Problemy i zgłoszenia",
    objectives: [
      "zgłosić usterkę właścicielowi lub administracji",
      "opisać, co się zepsuło",
      "umówić fachowca"
    ],
    theory: [
      {
        h: "Trzy czasowniki, które załatwiają większość usterek",
        list: [
          "<b>non funziona</b> — nie działa (urządzenie)",
          "<b>perde</b> — cieknie (kran, rura)",
          "<b>si è rotto/a</b> — zepsuło się, pękło"
        ]
      },
      {
        h: "Kto za co odpowiada",
        p: "We włoskim najmie <b>drobne naprawy</b> (<em>manutenzione ordinaria</em>) obciążają najemcę, a <b>poważne</b> (<em>straordinaria</em>: bojler, instalacja, dach) właściciela. Warto to napisać w wiadomości: <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "Ton zgłoszenia",
        p: "Włoski komunikat o usterce jest zwykle uprzejmy i pośredni: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Bezpośrednie <em>ripari subito!</em> zadziała przeciw tobie."
      },
      {
        tip: "<em>Il condominio</em> to nie tylko budynek, ale i wspólnota jako podmiot. <em>L'amministratore di condominio</em> to zarządca, do którego zgłasza się awarie części wspólnych."
      }
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
        { tr: "Dzień dobry, piszę, bo bojler nie działa od wczoraj." },
        { tr: "Kran w łazience cieknie." },
        { tr: "Mógłby pan przysłać hydraulika?" },
        { tr: "Kiedy może przyjść technik?" },
        { tr: "Jestem w domu po szóstej." },
        { tr: "Dziękuję za szybkość." }
      ]
    },
    vocab: [
      "kran",
      "cieknąć",
      "psuć się, pękać",
      "zamek (w drzwiach)",
      "bojler",
      "prąd",
      "wysiąść (o prądzie)",
      "hydraulik",
      "elektryk",
      "technik, serwisant",
      "zgłaszać",
      "konserwacja, naprawa"
    ],
    exercises: [
      {
        q: "Kran cieknie. Jak to powiesz?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Uzupełnij: „È ___ la corrente.” (wysiadł prąd)" },
      { q: "Uzupełnij: „Si è ___ la serratura.” (zepsuł się zamek)" },
      {
        q: "Połącz fachowca z problemem.",
        pairs: ["cieknący kran", "brak prądu", "zepsuty bojler", "części wspólne"]
      },
      { q: "„Mógłby pan przysłać hydraulika?”" },
      {
        q: "Napisz zgłoszenie.",
        tr: "Dzień dobry, chciałem zgłosić, że bojler nie działa od wczoraj. Mógłby pan przysłać technika?"
      },
      {
        q: "Kto zwykle płaci za wymianę bojlera w wynajmowanym mieszkaniu?",
        opts: ["Najemca", "Właściciel (manutenzione straordinaria)", "Wspólnota"]
      },
      { tr: "Jestem w domu po szóstej." },
      { tr: "Ogrzewanie się nie włącza i w domu jest bardzo zimno." },
      { tr: "Chciałem zgłosić, że kran w łazience cieknie." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 5",
    objectives: ["sprawdzić słownictwo mieszkaniowe i cząstkę ci"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "„Bilocale”:", opts: ["dwie sypialnie", "salon + sypialnia", "dwa piętra"] },
      { q: "„La ___ è di tre mensilità.”" },
      { q: "„Quanto ___ vuole per arrivare?”" },
      { q: "„___ metto mezz'ora.”" },
      { q: "„Non ce la faccio più”:", opts: ["nie robię tego", "nie daję rady", "nie mam więcej"] },
      { q: "„L'armadio è accanto ___ letto.”" },
      { q: "„Il rubinetto ___.” (cieknie)" },
      { q: "Połącz.", pairs: ["najemca", "schowek", "pralka", "wysiąść (prąd)"] },
      { tr: "Szukam umeblowanego dwupokojowego, z opłatami, blisko centrum." },
      { tr: "Z dworca idzie się dwadzieścia minut pieszo." }
    ]
  },
  "unit:a2-u06": { title: "W pracy", grammarNote: "condizionale grzecznościowy · si impersonale · maile" },
  "lesson:a2-u06-l1": {
    theme: "Praca",
    title: "Telefon i uprzejme prośby",
    objectives: [
      "przeprowadzić rozmowę telefoniczną",
      "użyć condizionale do uprzejmej prośby",
      "zostawić i przyjąć wiadomość"
    ],
    theory: [
      {
        h: "Telefon zaczyna się od Pronto",
        p: "<strong>Pronto?</strong> mówi osoba odbierająca, niezależnie od pory i relacji. Dosłownie znaczy „gotowy” — to relikt z czasów łączenia rozmów przez centralę."
      },
      {
        h: "Condizionale zamienia prośbę w propozycję",
        p: "<em>Può richiamarmi?</em> („może pan oddzwonić?”) jest poprawne, ale bezpośrednie. <em><b>Potrebbe</b> richiamarmi?</em> zostawia rozmówcy przestrzeń na odmowę i dlatego brzmi grzeczniej. To ta sama logika co <em>vorrei</em> zamiast <em>voglio</em>."
      },
      {
        h: "Struktura rozmowy służbowej",
        list: [
          "<em>Pronto, sono Anna Kowalska della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ]
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> („czy nie miałby pan nic przeciwko…?”) to najwyższy poziom uprzejmości w prośbie. Używa się go, gdy prosisz o coś naprawdę kłopotliwego."
      }
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
        { tr: "Halo? Tu Anna, dzwonię w sprawie spotkania." },
        { tr: "Połączy mnie pan z panem Rossim?" },
        { tr: "Przykro mi, w tej chwili jest zajęty." },
        { tr: "Mógłby mu pan przekazać, że dzwoniłam?" },
        { tr: "Zostawiam panu mój numer." },
        { tr: "Zadzwonię później, dziękuję." }
      ]
    },
    vocab: [
      "halo?",
      "kto mówi?",
      "połączy mnie pan z…?",
      "jest na spotkaniu",
      "zostawić wiadomość",
      "oddzwonić",
      "spotkanie, umówiona wizyta",
      "przełożyć (termin)",
      "odwołać",
      "linia zajęta",
      "słabo pana słyszę",
      "czy mógłby pan…?"
    ],
    exercises: [
      {  },
      {
        q: "Która prośba jest najbardziej uprzejma?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Uzupełnij: „___ dirgli che ho chiamato?” (mógłby pan)" },
      { q: "Uzupełnij: „___ il signor Rossi, per favore?” (połączy mnie pan)" },
      { q: "Połącz.", pairs: ["jest na spotkaniu", "przełożyć", "odwołać", "oddzwonić"] },
      { q: "„Chciałbym przełożyć spotkanie.”" },
      {
        q: "Dzwonisz do firmy.",
        setting: "Poniedziałek, 10:00, sekretariat.",
        lines: [
          { tr: "Halo, Studio Bianchi, dzień dobry." },
          {
            tr: "Przedstaw się i poproś o połączenie z panem Rossim.",
            answerTr: "Dzień dobry, tu Anna Nowak. Połączy mnie pani z panem Rossim?"
          },
          { tr: "Przykro mi, w tej chwili jest na spotkaniu." },
          { tr: "Poproś uprzejmie, żeby oddzwonił.", answerTr: "Mógłby mu pan przekazać, żeby oddzwonił?" },
          { tr: "Oczywiście. Zostawi pani numer?" }
        ]
      },
      {
        q: "Uzupełnij prośbę.",
        tr: "Dzień dobry, chciałbym rozmawiać z panią Bianchi. Jeśli jest zajęta, czy mogłaby oddzwonić po południu?"
      },
      { tr: "W tej chwili jest zajęty, chce pan zostawić wiadomość?" },
      { tr: "Halo, tu Anna. Mogłaby pani połączyć mnie z panem Rossim?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Praca",
    title: "Korespondencja służbowa",
    objectives: [
      "napisać krótkiego maila służbowego",
      "znać formuły otwarcia i zamknięcia",
      "dobrać rejestr do adresata"
    ],
    theory: [
      {
        h: "Otwarcie zależy od dystansu",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formalnie, do osoby znanej z nazwiska",
          "<em>Spettabile Azienda,</em> — do firmy jako instytucji",
          "<em>Buongiorno Marco,</em> — półformalnie, do współpracownika",
          "<em>Ciao Marco,</em> — nieformalnie"
        ]
      },
      {
        h: "Zamknięcie",
        p: "<em>Cordiali saluti</em> to bezpieczny standard. <em>Distinti saluti</em> jest chłodniejsze i bardziej urzędowe. <em>A presto</em> albo <em>Grazie e buona giornata</em> pasuje do współpracowników. Podpis: imię i nazwisko, pod nim funkcja."
      },
      {
        h: "Trzon maila po włosku jest krótki",
        p: "Włoska korespondencja służbowa nie lubi długich wstępów. Struktura: powód pisania (<em>Le scrivo in merito a…</em>), treść, prośba (<em>Resto in attesa di un suo riscontro</em>), zamknięcie."
      },
      {
        tip: "<em>In allegato</em> = „w załączniku”. Zdanie <em>Le invio in allegato il documento richiesto</em> to najczęstsze zdanie włoskiego maila służbowego."
      }
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
        { tr: "Szanowny Panie Doktorze, piszę w sprawie wczorajszej oferty." },
        { tr: "Przesyłam w załączniku zaktualizowaną wycenę." },
        { tr: "Byłbym wdzięczny za potwierdzenie do piątku." },
        { tr: "Pozostaję do dyspozycji w razie pytań." },
        { tr: "Cześć Marco, załączam plik, o którym mówiliśmy." },
        { tr: "Z góry dziękuję." }
      ]
    },
    vocab: [
      "szanowny/a (w mailu)",
      "w sprawie",
      "w załączniku",
      "wycena, kosztorys",
      "potwierdzić",
      "odpowiedź, informacja zwrotna",
      "pozostawać do dyspozycji",
      "z poważaniem",
      "z góry dziękuję",
      "termin",
      "do (terminu)",
      "wyjaśnienie"
    ],
    exercises: [
      {
        q: "Które otwarcie jest najbardziej formalne?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Uzupełnij: „Le scrivo ___ merito all'offerta.”" },
      { q: "Uzupełnij: „Le invio ___ allegato il preventivo.”" },
      { q: "Połącz.", pairs: ["wycena", "odpowiedź", "termin", "wyjaśnienie"] },
      {
        q: "„Resto a disposizione” znaczy:",
        opts: ["Zostaję w firmie", "Pozostaję do dyspozycji", "Czekam na miejscu"]
      },
      { q: "„Przesyłam w załączniku zaktualizowaną wycenę.”" },
      {
        q: "Uzupełnij maila.",
        tr: "Szanowna Pani Doktor, piszę w sprawie czwartkowego spotkania. Czekam na odpowiedź. Z poważaniem."
      },
      { tr: "Byłbym wdzięczny za potwierdzenie do piątku." },
      { tr: "Przesyłam w załączniku wymagany dokument, pozostaję do dyspozycji." },
      { tr: "Szanowna Pani Doktor, piszę w sprawie naszego spotkania." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Praca",
    title: "Si bezosobowe",
    objectives: [
      "użyć si do wypowiedzi ogólnych",
      "odróżnić si bezosobowe od si biernego",
      "opisać zwyczaje panujące gdzieś"
    ],
    theory: [
      {
        h: "Jak polskie „się”",
        p: "<em>In Italia <b>si</b> mangia bene.</em> („We Włoszech dobrze się je”). Konstrukcja <em>si</em> + czasownik w trzeciej osobie liczby pojedynczej mówi o ludziach w ogóle, bez wskazywania kto."
      },
      {
        h: "Si passivante: czasownik zgadza się z rzeczą",
        p: "Gdy po czasowniku stoi rzeczownik, forma dopasowuje się do jego liczby: <em>Qui <b>si vende</b> il pane</em> (jedna rzecz) kontra <em>Qui <b>si vendono</b> i panini</em> (wiele). To pułapka, bo wygląda jak błąd, a jest regułą."
      },
      {
        h: "Przymiotnik po si idzie w liczbę mnogą",
        p: "<em>Quando si è <b>stanchi</b>, si lavora male.</em> Choć czasownik jest w liczbie pojedynczej, przymiotnik przyjmuje formę męską liczby mnogiej. To dziwactwo, którego trzeba się nauczyć."
      },
      {
        tip: "W czasach złożonych <em>si</em> bezosobowe zawsze bierze <em>essere</em>: <em>si è mangiato bene</em>, <em>si è andati via presto</em>."
      }
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
        { tr: "W tym biurze pracuje się także w soboty." },
        { tr: "Jak się mówi „biurko” po włosku?" },
        { tr: "Tu się nie pali." },
        { tr: "W tej okolicy sprzedaje się mieszkania." },
        { tr: "Kiedy jest się nowym, zadaje się dużo pytań." },
        { tr: "Człowiek szybko się przyzwyczaja." }
      ]
    },
    vocab: [
      "mówi się",
      "robi się",
      "nie można",
      "biuro",
      "zebranie",
      "kolega z pracy",
      "pensja",
      "urlop",
      "wolne, zwolnienie z pracy",
      "nadgodziny",
      "deadline",
      "przyzwyczajać się do"
    ],
    exercises: [
      {
        q: "„Qui ___ i panini.” (sprzedaje się kanapki)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "Si passivante zgadza się z rzeczą: i panini → l. mnoga."
      },
      { q: "Uzupełnij: „In Italia ___ mangia bene.”" },
      { q: "Uzupełnij: „Come ___ dice in italiano?”" },
      {
        q: "„Quando si è stanchi” — dlaczego „stanchi”, a nie „stanco”?",
        opts: ["To błąd", "Po si przymiotnik idzie w liczbę mnogą", "Bo mowa o wielu osobach naprawdę"]
      },
      { q: "Uzupełnij formy.", tr: "W tym biurze dużo się pracuje i często robi się nadgodziny." },
      { q: "„Tu się nie pali.”" },
      {
        q: "Które zdania są poprawne?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "Człowiek szybko się przyzwyczaja." },
      { tr: "W tej firmie dużo się pracuje, ale dobrze zarabia." },
      { tr: "Jak się mówi „deadline” po włosku? Mówi się scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Praca",
    title: "Spotkania i uzgodnienia",
    objectives: [
      "zabrać głos na spotkaniu",
      "zaproponować i uzgodnić termin",
      "wyrazić zgodę lub wątpliwość"
    ],
    theory: [
      {
        h: "Wejście w słowo nie jest niegrzeczne",
        p: "We włoskiej kulturze spotkań przerywanie jest normą i sygnałem zaangażowania. Formuły łagodzące: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Zgoda i wątpliwość",
        list: [
          "zgoda: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "częściowa: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "wątpliwość: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "sprzeciw: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Uzgadnianie terminu",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. Zwrot <em>facciamo giovedì</em> („zróbmy czwartek”) to najczęstszy sposób domykania ustaleń."
      },
      {
        tip: "<em>Ci sentiamo</em> („odezwiemy się”) kończy praktycznie każde włoskie spotkanie i rozmowę służbową. Nie jest to obietnica, tylko formuła."
      }
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
        { tr: "Podsumowuję główne punkty." },
        { tr: "Co do tego punktu mam pewne wątpliwości." },
        { tr: "Możemy przełożyć decyzję na poniedziałek?" },
        { tr: "Mnie jest wszystko jedno, zdecydujcie wy." },
        { tr: "Kto się tym zajmie?" },
        { tr: "Odezwiemy się jutro w sprawie szczegółów." }
      ]
    },
    vocab: [
      "zebranie",
      "porządek obrad",
      "podsumowywać",
      "przekładać",
      "zajmować się",
      "zgadzam się",
      "nie jestem przekonany",
      "to zależy",
      "co powiecie na…?",
      "mnie wszystko jedno",
      "odezwiemy się",
      "punkt porządku obrad"
    ],
    exercises: [
      { q: "Połącz.", pairs: ["zgadzam się", "to zależy", "przekładać", "zajmować się"] },
      {
        q: "„Non ne sono del tutto convinto” to:",
        opts: ["pełna zgoda", "wątpliwość wyrażona łagodnie", "stanowczy sprzeciw"]
      },
      { q: "Uzupełnij: „___ ne dite di giovedì?”" },
      { q: "Uzupełnij: „Chi ___ occupa di questo?”" },
      { q: "„Możemy przełożyć decyzję na poniedziałek?”" },
      {
        q: "Spotkanie zespołu.",
        setting: "Sala konferencyjna, ustalanie terminu.",
        lines: [
          { tr: "No dobrze, musimy ustalić następne spotkanie." },
          { tr: "Zaproponuj czwartek.", answerTr: "Co powiecie na czwartek?" },
          { tr: "W czwartek rano mam już coś umówionego. Po południu?" },
          { tr: "Zgódź się i domknij ustalenie.", answerTr: "Mnie pasuje, zróbmy tak." }
        ]
      },
      {
        q: "Uzupełnij wypowiedź.",
        tr: "Wybacz, że przerywam, ale co do tego punktu mam pewne wątpliwości."
      },
      { tr: "Podsumowuję główne punkty." },
      { tr: "Przełóżmy decyzję na następne spotkanie." },
      { tr: "Zgadzam się, ale chciałbym coś dodać." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 6",
    objectives: ["sprawdzić condizionale grzecznościowy, maile i si bezosobowe"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      {  },
      { q: "„___ richiamarmi?” (mógłby pan)" },
      { q: "„Le scrivo ___ merito alla riunione.”" },
      { q: "„Le invio ___ allegato il preventivo.”" },
      { q: "„Qui ___ i panini.”", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "„In Italia ___ mangia bene.”" },
      { q: "Połącz.", pairs: ["wycena", "urlop", "pensja", "termin"] },
      { q: "„Zgadzam się, ale mam wątpliwość.”" },
      { tr: "Mógłby pan potwierdzić spotkanie do piątku?" },
      { tr: "Chciałbym przełożyć spotkanie na czwartek po południu." }
    ]
  },
  "unit:a2-u07": { title: "Święta i tradycje", grammarNote: "zaproszenia · życzenia · przysłówki" },
  "lesson:a2-u07-l1": {
    theme: "Kultura",
    title: "Życzenia i okazje",
    objectives: [
      "złożyć życzenia na różne okazje",
      "odpowiedzieć na życzenia",
      "znać najważniejsze włoskie święta"
    ],
    theory: [
      {
        h: "Auguri to słowo-klucz",
        p: "<strong>Auguri!</strong> działa na urodziny, imieniny, ślub, awans, święta i prawie każdą dobrą okazję. Dosłownie „życzenia”. Wersja rozwinięta: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "Czego się nie życzy",
        p: "Przed egzaminem albo trudnym zadaniem Włosi <b>nie</b> mówią <em>auguri</em> ani <em>buona fortuna</em> — to przynosi pecha. Mówi się <strong>in bocca al lupo</strong> („w paszczę wilka”), a odpowiedź brzmi <em>crepi!</em> albo <em>crepi il lupo!</em>"
      },
      {
        h: "Kalendarz, który trzeba znać",
        list: [
          "<b>Capodanno</b> (1 stycznia), <b>Epifania</b> (6 stycznia, przychodzi <em>la Befana</em>)",
          "<b>Pasqua</b> i <b>Pasquetta</b> (poniedziałek wielkanocny, dzień wycieczek)",
          "<b>25 aprile</b> (Wyzwolenie), <b>1 maggio</b>, <b>2 giugno</b> (Święto Republiki)",
          "<b>Ferragosto</b> (15 sierpnia — całe Włochy na wakacjach), <b>Natale</b> i <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> to neutralne życzenia świąteczne, <em>Buon Natale</em> konkretnie bożonarodzeniowe. W kontekście zawodowym częstsze jest to pierwsze."
      }
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
        { tr: "Wszystkiego najlepszego z okazji urodzin!" },
        { tr: "Wesołych świąt tobie i twojej rodzinie." },
        { tr: "Powodzenia na egzaminie! — Dzięki!" },
        { tr: "Miłej pracy!" },
        { tr: "Miłego weekendu! — Nawzajem!" },
        { tr: "Gratulacje z okazji awansu!" }
      ]
    },
    vocab: [
      "wszystkiego najlepszego!",
      "wszystkiego najlepszego (urodziny)",
      "wesołych świąt",
      "szczęśliwego nowego roku",
      "powodzenia",
      "dzięki! (odpowiedź na powyższe)",
      "nawzajem",
      "gratulacje",
      "urodziny",
      "imieniny",
      "15 sierpnia, szczyt wakacji",
      "długi weekend"
    ],
    culture: {
      title: "Okiem Włocha: kalendarz rządzi rytmem roku",
      text: "<p><b>Ferragosto</b> (15 sierpnia) to moment, w którym duże miasta pustoszeją. Zamknięte są sklepy osiedlowe, część restauracji, przychodnie. Załatwianie czegokolwiek w tym tygodniu jest z góry skazane na niepowodzenie.</p><p><b>Il ponte</b> to „most”: gdy święto wypada we wtorek albo czwartek, bierze się wolne w poniedziałek albo piątek i wychodzi długi weekend. Terminy zawodowe planuje się z uwzględnieniem mostów.</p><p><b>L'onomastico</b> (imieniny) wciąż istnieje i w niektórych regionach bywa obchodzone równie chętnie co urodziny — zwłaszcza na południu.</p>"
    },
    exercises: [
      {
        q: "Co powiesz koledze przed egzaminem?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "„Buona fortuna” uchodzi za przynoszące pecha."
      },
      { q: "Jak brzmi odpowiedź na „in bocca al lupo”?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Uzupełnij: „Buon ___!” (miłej podróży)" },
      { q: "Uzupełnij: „Buon appetito! — ___!” (nawzajem)" },
      {
        q: "Połącz okazję z życzeniem.",
        pairs: ["tanti auguri", "buon anno", "congratulazioni", "buon viaggio"]
      },
      {
        q: "Co to „il ponte” w kalendarzu?",
        opts: ["Święto religijne", "Wolny dzień między świętem a weekendem", "Rocznica"]
      },
      {
        q: "Co dzieje się we Włoszech 15 sierpnia?",
        opts: ["Zaczyna się rok szkolny", "Ferragosto — miasta pustoszeją", "Święto Republiki"]
      },
      { q: "„Wesołych świąt tobie i twojej rodzinie.”" },
      { tr: "Wszystkiego najlepszego z okazji urodzin i wesołych świąt!" },
      { tr: "Powodzenia na egzaminie! — Dzięki!" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Kultura",
    title: "Zaproszenia",
    objectives: ["zaprosić kogoś na wydarzenie", "przyjąć lub odmówić z klasą", "zapytać o szczegóły"],
    theory: [
      {
        h: "Zaproszenie jest zwykle nieformalne",
        p: "Włoskie zaproszenia rzadko przybierają sztywną formę. Najczęściej: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Nawet uroczysta kolacja bywa zapowiadana jako <em>una cosa tra amici</em>."
      },
      {
        h: "Odmowa wymaga powodu",
        p: "Samo <em>no, grazie</em> brzmi zimno. Formuła: przeprosiny + powód + alternatywa. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em>"
      },
      {
        h: "Co przynieść",
        p: "Na kolację przynosi się wino, deser albo kwiaty. Pytanie <em>Cosa porto?</em> jest oczekiwane, a odpowiedź <em>Non portare niente!</em> jest grzecznościowa — i tak coś się przynosi."
      },
      {
        tip: "Godzina zaproszenia jest orientacyjna. Przyjście punktualnie na prywatną kolację o 20:30 bywa niezręczne; kwadrans spóźnienia jest normą."
      }
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
        { tr: "W sobotę robimy kolację w domu, przyjdziesz?" },
        { tr: "Chętnie! O której się spotykacie?" },
        { tr: "Przykro mi, w sobotę mam już coś umówionego." },
        { tr: "Mogę kogoś przyprowadzić?" },
        { tr: "Przyniosę deser, może być?" },
        { tr: "Widzimy się tam koło wpół do dziewiątej." }
      ]
    },
    vocab: [
      "zapraszać",
      "zaproszenie",
      "kolacja",
      "impreza, święto",
      "zobowiązanie, coś umówionego",
      "chętnie",
      "niestety",
      "innym razem",
      "przynieść",
      "koło ósmej",
      "spotykać się",
      "spóźnić się, siedzieć do późna"
    ],
    exercises: [
      {
        q: "Która odmowa brzmi najlepiej po włosku?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Uzupełnij: „___ va di venire a cena?”" },
      { q: "Uzupełnij: „Purtroppo ho già un ___.” (coś umówionego)" },
      { q: "Połącz.", pairs: ["chętnie", "niestety", "zaproszenie", "spotykać się"] },
      { q: "„Chętnie! O której się spotykacie?”" },
      {
        q: "Zaproszenie na kolację.",
        setting: "Wiadomość od znajomej, środa wieczorem.",
        lines: [
          { tr: "W sobotę robimy kolację w domu. Masz ochotę przyjść?" },
          { tr: "Przyjmij zaproszenie i zapytaj o godzinę.", answerTr: "Chętnie! O której?" },
          { tr: "Koło wpół do dziewiątej. Jest nas sześcioro." },
          { tr: "Zapytaj, co przynieść.", answerTr: "Co przynieść?" },
          { tr: "Nic nie przynoś! Ewentualnie deser." }
        ]
      },
      { q: "Uzupełnij odmowę.", tr: "Przykro mi, w sobotę mam już coś umówionego. Może innym razem?" },
      { tr: "Widzimy się tam koło wpół do dziewiątej." },
      { tr: "Masz ochotę przyjść w sobotę na kolację? Jest nas sześcioro." },
      { tr: "Chętnie, przyniosę deser. O której?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Kultura",
    title: "Włochy regionalne",
    objectives: [
      "rozumieć podstawowe różnice między północą a południem",
      "opisać region i jego kuchnię",
      "użyć porównań do opisu miejsc"
    ],
    theory: [
      {
        h: "Włochy zjednoczyły się w 1861 roku",
        p: "Przed zjednoczeniem był to zbiór państw o osobnych językach, kuchniach i instytucjach. Dlatego różnice regionalne są głębsze niż w Polsce: dialekty bywają wzajemnie niezrozumiałe, a tożsamość lokalna (<em>campanilismo</em>, od <em>campanile</em> — dzwonnica) często silniejsza niż narodowa."
      },
      {
        h: "Nie ma jednej kuchni włoskiej",
        p: "Masło i ryż na północy, oliwa i makaron na południu. <em>Pesto</em> to Liguria, <em>ragù</em> to Emilia, <em>carbonara</em> to Rzym, <em>arancini</em> to Sycylia. Zamawianie „dania włoskiego” bez regionu to jak zamawianie „dania polskiego”."
      },
      {
        h: "Język a dialekt",
        p: "<em>Il dialetto</em> to nie zepsuty włoski, tylko odrębny język wywodzący się z łaciny równolegle do toskańskiego, z którego powstał włoski standardowy. Neapolitański i sycylijski mają własną literaturę."
      },
      {
        tip: "Bezpieczny temat rozmowy z Włochem: jedzenie jego regionu. Niebezpieczny: który region gotuje lepiej."
      }
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
        { tr: "Jestem sycylijskiego pochodzenia, ale mieszkam w Mediolanie." },
        { tr: "Na północy używa się więcej masła, na południu oliwy." },
        { tr: "W Wenecji Euganejskiej wciąż dużo mówi się dialektem." },
        { tr: "Każdy region ma swój typowy makaron." },
        { tr: "Kawa na południu jest mocniejsza i krótsza." },
        { tr: "Rzym jest chaotyczny, ale przepiękny." }
      ]
    },
    vocab: [
      "region",
      "stolica regionu",
      "północ / południe",
      "dialekt",
      "typowy",
      "tradycja",
      "danie regionalne",
      "pochodzenie",
      "chaotyczny",
      "przyjazny, gościnny",
      "lokalny patriotyzm",
      "przeprowadzić się"
    ],
    exercises: [
      { q: "Połącz region z miastem.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "Co to „campanilismo”?",
        opts: ["Styl architektoniczny", "Przywiązanie do własnej miejscowości", "Rodzaj dzwonu"]
      },
      {
        q: "Dialekt włoski to:",
        opts: ["zepsuta wersja włoskiego", "odrębny język wywodzący się z łaciny", "slang młodzieżowy"]
      },
      { q: "Uzupełnij: „Al nord si usa più il burro, al ___ l'olio.”" },
      { q: "„Każdy region ma swoje typowe danie.”" },
      {
        q: "Uzupełnij.",
        tr: "Jestem sycylijskiego pochodzenia, ale od dziesięciu lat mieszkam na północy. Dialekt rozumiem, ale nim nie mówię."
      },
      { tr: "Rzym jest chaotyczny, ale przepiękny." },
      { q: "Skąd pochodzi carbonara?", opts: ["z Bolonii", "z Rzymu", "z Palermo"] },
      { tr: "Każdy włoski region ma swoją kuchnię i często swój dialekt." },
      { tr: "Jestem polskiego pochodzenia, ale mieszkam w Toskanii od trzech lat." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Gramatyka",
    title: "Przysłówki",
    objectives: [
      "tworzyć przysłówki na -mente",
      "odróżnić przymiotnik od przysłówka",
      "ustawić przysłówek we właściwym miejscu"
    ],
    theory: [
      {
        h: "Tworzenie",
        p: "Bierzesz formę <b>żeńską</b> przymiotnika i dodajesz <em>-mente</em>: <em>lenta → lentamente</em>, <em>rara → raramente</em>. Przymiotniki na <em>-le</em> i <em>-re</em> gubią końcowe <em>e</em>: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>."
      },
      {
        h: "Buono kontra bene",
        p: "To rozróżnienie sprawia najwięcej kłopotu. <em>Buono</em> jest przymiotnikiem (jaki?), <em>bene</em> przysłówkiem (jak?). <em>Un caffè <b>buono</b></em> ale <em>parla <b>bene</b></em>. Zdanie „parla buono” jest błędem."
      },
      {
        h: "Miejsce w zdaniu złożonym",
        p: "W passato prossimo przysłówki <em>già, mai, ancora, sempre, appena, più</em> wchodzą <b>między posiłkowy a imiesłów</b>: <em>ho <b>già</b> visto</em>. Pozostałe zwykle idą po imiesłowie: <em>ho parlato <b>lentamente</b></em>."
      },
      {
        tip: "Przysłówki na <em>-mente</em> są długie i we włoskim mówionym często zastępuje się je konstrukcjami: <em>in modo semplice</em> zamiast <em>semplicemente</em>, <em>con calma</em> zamiast <em>tranquillamente</em>."
      }
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
        { tr: "Może pan mówić wolniej?" },
        { tr: "Rzadko chodzę do centrum w weekend." },
        { tr: "Już widziałem ten film." },
        { tr: "Jeszcze tam nie byłem." },
        { tr: "Dobrze mówi po włosku, ale źle pisze." },
        { tr: "Zrób to spokojnie." }
      ]
    },
    vocab: [
      "wolno",
      "szybko",
      "łatwo",
      "rzadko",
      "regularnie",
      "nagle",
      "wreszcie",
      "absolutnie",
      "dobrze / źle",
      "spokojnie",
      "w pośpiechu",
      "prawie"
    ],
    exercises: [
      { q: "Utwórz przysłówek od „lento”: ___" },
      { q: "Utwórz przysłówek od „facile”: ___" },
      {
        q: "Które zdanie jest poprawne?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Uzupełnij: „Ho ___ visto quel film.” (już)" },
      {
        q: "Gdzie stoi „ancora” w passato prossimo?",
        opts: ["Przed posiłkowym", "Między posiłkowym a imiesłowem", "Na końcu"]
      },
      { q: "Połącz.", pairs: ["wreszcie", "nagle", "spokojnie", "prawie"] },
      { q: "„Może pan mówić wolniej?”" },
      {
        q: "Uzupełnij.",
        tr: "Dobrze mówi po włosku, ale wciąż źle pisze. Uczy się regularnie, codziennie."
      },
      { tr: "Wreszcie znalazłem mieszkanie blisko pracy." },
      { tr: "Może pan powtórzyć wolniej?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Sprawdzian",
    title: "Sprawdzian jednostki 7",
    objectives: ["sprawdzić życzenia, zaproszenia, wiedzę o regionach i przysłówki"],
    theory: [{ p: "Dziesięć zadań. Zaliczenie od 70%." }],
    exercises: [
      { q: "Przed egzaminem mówisz:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "Odpowiedź na „in bocca al lupo”: ___" },
      { q: "„Buon appetito! — ___!”" },
      { q: "„___ va di venire a cena?”" },
      { q: "„Il ponte” to:", opts: ["most", "długi weekend", "święto"] },
      { q: "Połącz.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "Przysłówek od „regolare”: ___" },
      { q: "Poprawne zdanie:", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "Wszystkiego najlepszego i wesołych świąt całej rodzinie!" },
      { tr: "Masz ochotę przyjść na imprezę w sobotę wieczorem?" }
    ]
  },
  "unit:a2-u08": { title: "Plany i powtórka", grammarNote: "wyrażanie zamiarów · powtórka A2" },
  "lesson:a2-u08-l1": {
    theme: "Plany",
    title: "Zamiary i marzenia",
    objectives: [
      "opowiedzieć o planach na przyszłość",
      "wyrazić marzenie i wątpliwość",
      "połączyć futuro z condizionale"
    ],
    theory: [
      {
        h: "Trzy stopnie pewności",
        list: [
          "<b>pewne</b>: <em>A settembre comincio un nuovo lavoro.</em> (czas teraźniejszy)",
          "<b>planowane</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>marzone</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe kontra vorrei",
        p: "<em>Vorrei</em> mówi o czymś realnym i osiągalnym („chciałbym kawę”). <em>Mi piacerebbe</em> przesuwa wypowiedź w stronę marzenia albo hipotezy („chciałoby mi się”, „fajnie byłoby”). Włoch użyje pierwszego przy zamawianiu, drugiego przy planach życiowych."
      },
      {
        h: "Przyimki po czasownikach zamiaru",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, ale <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. Przyimek jest częścią czasownika i trzeba go zapamiętać razem z nim."
      },
      {
        tip: "<em>Chissà</em> („kto wie”) często otwiera zdanie o niepewnej przyszłości: <em>Chissà dove sarò tra cinque anni.</em>"
      }
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
        { tr: "Mam zamiar zapisać się na kurs wieczorowy." },
        { tr: "Chciałbym popracować rok za granicą." },
        { tr: "Mam nadzieję zdać egzamin w czerwcu." },
        { tr: "Za pięć lat kto wie, gdzie będę." },
        { tr: "Myślę o zmianie miasta." },
        { tr: "Prędzej czy później nauczę się grać na pianinie." }
      ]
    },
    vocab: [
      "mam zamiar",
      "chciałbym (marzenie)",
      "mam nadzieję",
      "myślę o tym, żeby",
      "marzyć o",
      "kto wie",
      "prędzej czy później",
      "za granicą",
      "kurs wieczorowy",
      "zdać egzamin",
      "zmienić życie",
      "marzenie, sen"
    ],
    exercises: [
      { q: "Uzupełnij: „Ho intenzione ___ trasferirmi.”" },
      { q: "Uzupełnij: „Spero ___ trovare casa presto.”" },
      { q: "Uzupełnij: „Comincio ___ capire meglio.”" },
      {
        q: "Które zdanie brzmi jak marzenie, a nie plan?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "„Chciałbym popracować rok za granicą.”" },
      { q: "Uzupełnij plany.", tr: "Mam zamiar zapisać się na kurs i mam nadzieję zdać egzamin w czerwcu." },
      { tr: "Prędzej czy później nauczę się grać na pianinie." },
      { tr: "Myślę o zmianie miasta w przyszłym roku." },
      { tr: "Chciałbym pomieszkać we Włoszech przynajmniej rok." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Powtórka",
    title: "Powtórka czasów",
    objectives: [
      "wybrać czas odpowiedni do sytuacji",
      "połączyć wszystkie czasy poznane na A2",
      "wyłapać własne słabe punkty"
    ],
    theory: [
      {
        h: "Mapa czasów poziomu A2",
        list: [
          "<b>presente</b> — teraz, zwyczaj, bliska przyszłość",
          "<b>passato prossimo</b> — zdarzenie zamknięte",
          "<b>imperfetto</b> — tło, opis, zwyczaj w przeszłości",
          "<b>trapassato prossimo</b> — przeszłość przed przeszłością",
          "<b>futuro semplice</b> — plan, przewidywanie, przypuszczenie o teraz",
          "<b>futuro anteriore</b> — przyszłość przed przyszłością, przypuszczenie o przeszłości",
          "<b>condizionale presente</b> — prośba, rada, marzenie"
        ]
      },
      {
        h: "Najczęstsze błędy na tym etapie",
        list: [
          "użycie passato prossimo tam, gdzie potrzebny jest imperfetto (opis)",
          "brak zgodności imiesłowu z <em>essere</em>: „siamo andato”",
          "brak zgodności imiesłowu z zaimkiem: „l'ho visto” o kobiecie",
          "condizionale po <em>se</em>: „se avrei” zamiast poprawnej konstrukcji"
        ]
      }
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
        { tr: "Kiedy się uczyłem, przyszedł ważny mail." },
        { tr: "Kiedy wyszłam, przestało już padać." },
        { tr: "Jutro zadzwonię, jak tylko skończę." },
        { tr: "Chciałbym cię o coś prosić." },
        { tr: "Jako mała nie lubiłam ryb." },
        { tr: "Poznałem ją w zeszłym roku w Rzymie." }
      ]
    },
    vocab: [
      "czas gramatyczny",
      "częsty błąd",
      "zgodność",
      "imiesłów",
      "czasownik posiłkowy",
      "powtarzać",
      "mylić",
      "odróżniać"
    ],
    exercises: [
      { q: "Wstaw właściwe formy.", tr: "Kiedy się uczyłem, przyszedł ważny mail." },
      { q: "Wstaw właściwe formy.", tr: "Kiedy wyszłam, przestało już padać." },
      { q: "Wstaw właściwe formy.", tr: "Jutro zadzwonię, jak tylko skończę." },
      {
        q: "„Siamo andato al mare” — co jest nie tak?",
        opts: ["Zły posiłkowy", "Brak zgodności imiesłowu (andati)", "Nic, jest poprawnie"]
      },
      { q: "O kobiecie: „L'ho visto ieri” — co poprawić?", opts: ["Nic", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "„Chciałbym cię o coś prosić.”" },
      { tr: "Jako mała nie lubiłam ryb, teraz je uwielbiam." },
      { tr: "Wczoraj poszłam do kina i film bardzo mi się podobał." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Powtórka",
    title: "Powtórka zaimków",
    objectives: [
      "wybrać właściwy zaimek",
      "połączyć zaimki z czasami złożonymi",
      "przygotować się do zaimków połączonych na B1"
    ],
    theory: [
      {
        h: "Cztery grupy do rozróżnienia",
        list: [
          "<b>bliższe</b>: mi, ti, lo, la, ci, vi, li, le — „kogo? co?”",
          "<b>dalsze</b>: mi, ti, gli, le, ci, vi, gli — „komu?”",
          "<b>zwrotne</b>: mi, ti, si, ci, vi, si — czynność na sobie",
          "<b>cząstki</b>: ci (miejsce, a + rzecz), ne (część, di + rzecz)"
        ]
      },
      {
        h: "Test rozstrzygający",
        p: "Zadaj pytanie o czasownik. „Widzę <b>kogo</b>?” → bliższy (<em>lo vedo</em>). „Dzwonię <b>do kogo</b>?” → dalszy (<em>gli telefono</em>). Jeśli czasownik wymaga <em>a</em>, zaimek będzie dalszy."
      },
      {
        h: "Co czeka na B1",
        p: "Zaimki połączone (<em>me lo, glielo, ce ne</em>) oraz pełne użycie <em>ci</em> i <em>ne</em> w wyrażeniach zrośniętych. Fundament, który tu powtarzasz, jest do tego niezbędny."
      }
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
        { tr: "Książkę? Przeczytałem ją w zeszłym tygodniu." },
        { tr: "Marco? Już mu odpowiedziałem." },
        { tr: "Klucze? Nie mogę ich znaleźć." },
        { tr: "Na siłownię chodzę trzy razy w tygodniu." },
        { tr: "Ile chcesz? — Chcę trzy." },
        { tr: "Wstałam o szóstej." }
      ]
    },
    vocab: [
      "zaimek",
      "bliższy / dalszy",
      "zwrotny",
      "zastępować",
      "powtarzać",
      "unikać",
      "powtórzenie",
      "płynny (o języku)"
    ],
    exercises: [
      { q: "„Telefono a Giulia” →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "„Vedo Giulia” →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "„Le chiavi? Non ___ trovo.”" },
      { q: "„Quante mele vuoi? — ___ voglio tre.”" },
      { q: "„In palestra ___ vado tre volte a settimana.”" },
      { q: "Uzupełnij końcówkę: „Le ho vist___.” (je, kobiety)" },
      {
        q: "Które czasowniki biorą zaimek dalszy?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Uzupełnij zaimki.",
        tr: "Książkę? Przeczytałem ją. Marco? Napisałem mu wczoraj. Na targ? Idę w sobotę."
      },
      { tr: "Napisałem do niej maila, ale jeszcze mi nie odpowiedziała." },
      { tr: "Film? Widziałem go wczoraj i bardzo mi się podobał." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Powtórka",
    title: "Gotowość do poziomu B1",
    objectives: [
      "sprawdzić opanowanie całego poziomu A2",
      "zobaczyć, co czeka na B1",
      "zdecydować, czy iść dalej"
    ],
    theory: [
      {
        h: "Co powinieneś już umieć",
        list: [
          "opowiedzieć o przeszłości dwoma czasami i wybrać właściwy",
          "mówić o planach i marzeniach",
          "poradzić sobie w podróży, hotelu, u lekarza, w pracy",
          "używać zaimków zamiast powtarzać rzeczowniki",
          "napisać krótkiego maila i przeprowadzić rozmowę telefoniczną",
          "wyrazić prośbę, radę i uprzejmą odmowę"
        ]
      },
      {
        h: "Co przychodzi na B1",
        p: "<strong>Congiuntivo</strong> — tryb, który wyraża opinię, wątpliwość i emocję, i który dla Polaków bywa największą barierą. Do tego zaimki połączone, pełne <em>ci</em> i <em>ne</em>, zdania względne, mowa zależna, argumentowanie i włoska biurokracja."
      },
      {
        tip: "Nie przechodź na B1 z wynikiem poniżej 70%. Congiuntivo buduje się na czasach A2 — luki tam zamienią się w blokadę."
      }
    ],
    vocab: [
      "tryb łączący",
      "opinia",
      "wątpliwość",
      "argumentować",
      "biurokracja",
      "gotowy na",
      "postęp",
      "dam radę"
    ],
    exercises: [
      { q: "Wstaw czasy.", tr: "Wczoraj poszłam do kina z Martą. Film był długi, ale dobry." },
      {  },
      {  },
      {  },
      { q: "„Le chiavi? ___ ho perse.”" },
      { q: "„A Marco ___ ho telefonato ieri.”" },
      { q: "„Quanto ___ vuole per arrivare?”" },
      { q: "„Mi ___ male la schiena.”" },
      { q: "„Ho intenzione ___ cambiare lavoro.”" },
      { q: "„Kiedy skończę pracę, zadzwonię do ciebie.”" },
      { tr: "Kiedy wracałem do domu, spotkałem Giulię i rozmawiałem z nią o projekcie." },
      { tr: "W przyszłym roku chciałbym przeprowadzić się do Włoch do pracy." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Egzamin",
    title: "Egzamin końcowy poziomu A2",
    objectives: ["sprawdzić gotowość do przejścia na poziom B1"],
    theory: [{ p: "Dwanaście zadań z całego poziomu. Zaliczenie od 70%." }],
    exercises: [
      {  },
      {  },
      { q: "Wstaw czasy.", tr: "Kiedy czekałem na autobus, spotkałem starego znajomego." },
      { q: "„Quando sono arrivato, il treno ___ già partito.”" },
      { q: "„Hai visto Anna?” →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "„A Marco ___ ho risposto.”" },
      { q: "„Quanti ne vuoi? — ___ voglio due.”" },
      { q: "„___ meglio riposare.” (lepiej byłoby)" },
      { q: "„Qui ___ i panini.” (sprzedaje się)" },
      { q: "Przysłówek od „facile”: ___" },
      { q: "„Chciałbym przełożyć spotkanie na czwartek.”" },
      { tr: "Wczoraj poszłam do lekarza, bo bolało mnie gardło." }
    ]
  }
});
