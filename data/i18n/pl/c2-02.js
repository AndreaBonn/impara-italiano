/* ============================================================
   Teksty w języku ucznia (pl) do data/core/c2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c2-u04": {
    "title": "Zaimki względne i rekcja",
    "grammarNote": "a cui · il che · riuscire a, tentare di"
  },
  "lesson:c2-u04-l1": {
    "theme": "Gramatyka",
    "title": "Cui, il quale e i loro obblighi",
    "objectives": [
      "użyć „cui” z właściwym przyimkiem",
      "wyrazić posiadanie przez „il cui”",
      "usunąć dwuznaczność przez „il quale”"
    ],
    "theory": [
      {
        "h": "Che nie przyjmuje przyimka",
        "p": "<em>La collega <b>che</b> ho visto</em> jest poprawne, ale <em>la collega a che ho scritto</em> nie istnieje. Gdy potrzebny jest przyimek, <em>che</em> ustępuje miejsca <em>cui</em>: <em>a cui</em>, <em>di cui</em>, <em>in cui</em>, <em>con cui</em>. To jest cała reguła i nie ma od niej wyjątku."
      },
      {
        "h": "Który przyimek? Ten, którego żąda czasownik",
        "p": "<em>Scrivere <b>a</b> qualcuno</em> daje <em>la collega <b>a cui</b> ho scritto</em>. <em>Parlare <b>di</b> qualcosa</em> daje <em>il progetto <b>di cui</b> parlavamo</em>. Przyimka nie wybiera zdanie względne: przynosi go czasownik, i dlatego trzeciej lekcji tej jednostki nie da się ominąć."
      },
      {
        "h": "Il cui to posiadanie, i uzgadnia się z rzeczą posiadaną",
        "p": "<em>L'autore <b>il cui</b> libro hai letto</em>: rodzajnik idzie za <em>libro</em>, nie za autorem. Stąd <em>la scrittrice <b>il cui</b> romanzo</em> (romanzo jest rodzaju męskiego) i <em>l'autore <b>la cui</b> opera</em>. Odwrotnie niż podpowiada intuicja."
      },
      {
        "contrast": "Polski odmienia „który” przez przypadki i to jest dokładnie ta sama robota: „koleżanka, <b>której</b> napisałem” (celownik) wobec <em>a cui</em>, „projekt, o <b>którym</b> mówiliśmy” wobec <em>di cui</em>. Masz więc gotowy mechanizm, tylko zamiast końcówki stawiasz przyimek. Uwaga na jedno: po polsku „którego” zmienia się przez rodzaj i liczbę, a włoskie <em>cui</em> jest nieodmienne i wygląda tak samo zawsze."
      }
    ],
    "grammar": {
      "title": "Zaimki względne",
      "note": "Trzecia kolumna mówi, kiedy tej formy używamy.",
      "table": {
        "head": [
          "forma",
          "co robi",
          "kiedy"
        ],
        "rows": [
          [
            "che",
            "soggetto o oggetto",
            "gdy nie ma przyimka"
          ],
          [
            "a cui / di cui / in cui",
            "con preposizione",
            "gdy czasownik żąda przyimka"
          ],
          [
            "il cui / la cui",
            "possesso",
            "gdy chodzi o posiadanie"
          ],
          [
            "il quale / la quale",
            "toglie l'ambiguità",
            "gdy „che” byłoby dwuznaczne"
          ],
          [
            "dove",
            "solo luogo",
            "tylko o miejscu"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Koleżanka, której napisałem, nie odpowiedziała."
        },
        {
          "tr": "Projekt, o którym mówiliśmy, został zatwierdzony."
        },
        {
          "tr": "Autor, którego książkę przeczytałeś, przyjeżdża jutro."
        },
        {
          "tr": "Siostra dyrektora, która pracuje w Mediolanie, przyjeżdża dziś."
        },
        {
          "tr": "Miasto, w którym się urodziłem, już nie istnieje."
        },
        {
          "tr": "Ludzie, z którymi pracuję, są dobrzy w tym, co robią."
        }
      ]
    },
    "vocab": [
      "zaimek względny",
      "przyimek",
      "poprzednik",
      "któremu, o którym",
      "który (forma dłuższa)",
      "którego (posiadanie)",
      "dwuznaczność",
      "odnosić się",
      "uściślić",
      "rządzić (składniowo)",
      "obowiązkowy",
      "fakultatywny"
    ],
    "exercises": [
      {
        "q": "Jak powiedzieć „koleżanka, której napisałem”?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Uzupełnij: „La collega a ___ ho scritto non ha risposto.”"
      },
      {
        "q": "Uzupełnij: „L'autore ___ libro hai letto viene domani.” (posiadanie)"
      },
      {
        "q": "„Il quale” służy do:",
        "opts": [
          "skrócenia zdania",
          "wyrażenia posiadania",
          "usunięcia dwuznaczności"
        ]
      },
      {
        "q": "Z czym uzgadnia się rodzajnik w „il cui”?",
        "opts": [
          "z rzeczą posiadaną",
          "z posiadaczem",
          "z podmiotem zdania"
        ]
      },
      {
        "q": "Wstaw zaimki.",
        "tr": "Koleżanka, której napisałem, nie odpowiedziała. Autor, którego książkę przeczytałeś, przyjeżdża jutro."
      },
      {
        "q": "„Projekt, o którym mówiliśmy, został zatwierdzony.”"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Kolega, z którym latami dzieliłem biuro, przechodzi na emeryturę."
      },
      {
        "tr": "Projekt, o którym mówiliśmy wczoraj, został zatwierdzony dziś rano."
      }
    ]
  },
  "lesson:c2-u04-l2": {
    "theme": "Gramatyka",
    "title": "Chi, il che, quanto",
    "objectives": [
      "użyć „chi” w znaczeniu „ten, kto”",
      "skomentować całe zdanie przez „il che”",
      "zastąpić „ciò che” przez „quanto”"
    ],
    "theory": [
      {
        "h": "Chi znaczy „ten, kto”, i nie potrzebuje poprzednika",
        "p": "<em>Chi arriva tardi aspetta fuori</em> = „kto się spóźni, czeka na zewnątrz”. Jedno słowo za dwa polskie. Czasownik stoi zawsze w liczbie pojedynczej, nawet gdy chodzi o wiele osób, i to jest jedyna rzecz, którą można tu pomylić."
      },
      {
        "h": "Il che komentuje całe poprzednie zdanie",
        "p": "<em>Ha rifiutato l'incarico, <b>il che</b> mi preoccupa</em>: niepokoi nie stanowisko, tylko cała odmowa. Bez <em>il</em> zdanie wskazywałoby ostatni rzeczownik i znaczyłoby co innego. Wariant <em>cosa che</em> jest nieco mniej formalny i robi to samo."
      },
      {
        "h": "Quanto zamiast ciò che",
        "p": "<em>Non credo a <b>quanto</b> mi hai raccontato</em>. Forma krótsza i wyżej w rejestrze niż <em>ciò che</em>, bardzo częsta w piśmie. W mowie usłyszysz raczej <em>quello che</em>, i to też jest poprawne."
      },
      {
        "contrast": "Polskie „kto” wymaga zwykle „ten, kto” albo „kto…, ten…”, a włoskie <em>chi</em> radzi sobie samo. Za to <em>il che</em> nie ma polskiego odpowiednika jednowyrazowego: mówi się „co mnie niepokoi” i to działa, ale dopiero jeśli pamięta się, że polskie „co” w tej pozycji też odnosi się do całego zdania, a nie do ostatniego rzeczownika."
      }
    ],
    "grammar": {
      "title": "Zaimki bez poprzednika",
      "note": "Druga kolumna mówi, do czego odnosi się forma.",
      "table": {
        "head": [
          "forma",
          "do czego się odnosi",
          "przykład"
        ],
        "rows": [
          [
            "chi",
            "do osoby, ten kto",
            "Chi arriva tardi aspetta fuori."
          ],
          [
            "il che",
            "do całego poprzedniego zdania",
            "Ha rifiutato, il che mi preoccupa."
          ],
          [
            "cosa che",
            "to samo, rejestr niższy",
            "Ha risposto male, cosa che non gli somiglia."
          ],
          [
            "quanto",
            "do tego, co powiedziano",
            "Non credo a quanto mi hai detto."
          ],
          [
            "c'è chi",
            "do nieokreślonej grupy",
            "C'è chi dice che sia un errore."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Kto się spóźni, czeka na zewnątrz."
        },
        {
          "tr": "Odmówił przyjęcia funkcji, co mnie niepokoi."
        },
        {
          "tr": "Nie wierzę w to, co mi opowiedziałeś."
        },
        {
          "tr": "Są tacy, co mówią, że to błąd."
        },
        {
          "tr": "Odpowiedział niegrzecznie, co do niego niepodobne."
        },
        {
          "tr": "To, co się wczoraj stało, zostaje między nami."
        }
      ]
    },
    "vocab": [
      "kto, ten kto",
      "co (o całym zdaniu)",
      "co (mniej formalne)",
      "to, co",
      "to, co",
      "są tacy, co",
      "całe zdanie",
      "komentarz",
      "niepokoić",
      "być podobnym do",
      "zostać między nami",
      "podsumować"
    ],
    "exercises": [
      {
        "q": "„Chi arriva tardi aspetta fuori” znaczy:",
        "opts": [
          "Kto przyjeżdża? Czeka na zewnątrz",
          "Kto się spóźni, czeka na zewnątrz",
          "Przyjechał późno i czeka"
        ]
      },
      {
        "q": "Uzupełnij: „___ arriva tardi aspetta fuori.”"
      },
      {
        "q": "Uzupełnij: „Ha rifiutato l'incarico, ___ mi preoccupa.”"
      },
      {
        "q": "„Il che” odnosi się do:",
        "opts": [
          "całego poprzedniego zdania",
          "ostatniego rzeczownika",
          "podmiotu"
        ]
      },
      {
        "q": "Czasownik po „chi” stoi w:",
        "opts": [
          "liczbie mnogiej",
          "dowolnej liczbie",
          "liczbie pojedynczej"
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Kto się spóźni, czeka na zewnątrz. Odmówił przyjęcia funkcji, co mnie niepokoi."
      },
      {
        "q": "„Kto się spóźni, czeka na zewnątrz.”"
      },
      {
        "q": "Dopasuj formy.",
        "tr": [
          "kto, ten kto",
          "co (o całym zdaniu)",
          "to, co",
          "są tacy, co"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Odmówił bez podania powodu, co mnie niepokoi."
      },
      {
        "tr": "Są tacy, co mówią, że to błąd, ale nikt nie pisze tego czarno na białym."
      }
    ]
  },
  "lesson:c2-u04-l3": {
    "theme": "Gramatyka",
    "title": "Reggenze che non si indovinano",
    "objectives": [
      "dobrać przyimek, którego żąda czasownik",
      "odróżnić „riuscire a” od „tentare di”",
      "zapamiętać rekcje, które nie mają żadnej logiki"
    ],
    "theory": [
      {
        "h": "To jest lista, nie reguła",
        "p": "<em>Riuscire <b>a</b></em>, <em>provare <b>a</b></em>, ale <em>tentare <b>di</b></em>, chociaż znaczą prawie to samo. <em>Cominciare <b>a</b></em>, ale <em>finire <b>di</b></em>. Nie da się tego wyprowadzić ze znaczenia i każda próba skończy się błędem: trzeba zapamiętać czasownik razem z przyimkiem, jak jedno słowo."
      },
      {
        "h": "Cztery, które mylą się najczęściej",
        "p": "<em>Rendersi conto <b>di</b></em> i <em>accorgersi <b>di</b></em> (a nie „że”), <em>convincere <b>a</b></em> wobec <em>dissuadere <b>da</b></em>, <em>tenere <b>a</b></em> w znaczeniu „zależy mi”, <em>badare <b>a</b></em> w znaczeniu „uważać na”. Te cztery wracają w każdym tekście i w każdym teście."
      },
      {
        "h": "Przyimek zostaje też w zdaniu względnym",
        "p": "Skoro mówi się <em>tenere a qualcosa</em>, to zdanie względne brzmi <em>la cosa <b>a cui</b> tengo</em>. Dlatego ta lekcja stoi w tej samej jednostce co pierwsza: kto nie zna rekcji, nie zbuduje poprawnego <em>cui</em>, choćby znał regułę na pamięć."
      },
      {
        "contrast": "Polski też ma rekcję i też jej nie da się zgadnąć („zależy mi <b>na</b> tym”, „zdałem sobie sprawę <b>z</b> tego”), więc problem jest ci znajomy. Zła wiadomość: obie listy są niezależne i zbiegają się rzadko. „Udało mi się” nie ma przyimka po polsku, a po włosku <em>riuscire <b>a</b></em> ma; „uważać na” bierze „na”, a <em>badare</em> bierze <em>a</em>, co akurat pasuje. Nie ma tu nic do przeniesienia, jest tylko lista."
      }
    ],
    "grammar": {
      "title": "Rekcja czasowników",
      "note": "Druga kolumna to przyimek, którego żąda czasownik.",
      "table": {
        "head": [
          "czasowniki",
          "przyimek",
          "znaczenie"
        ],
        "rows": [
          [
            "riuscire a, provare a",
            "a",
            "udało się, spróbować"
          ],
          [
            "tentare di, smettere di",
            "di",
            "usiłować, przestać"
          ],
          [
            "rendersi conto di",
            "di",
            "zdać sobie sprawę"
          ],
          [
            "convincere a, persuadere a",
            "a",
            "przekonać do"
          ],
          [
            "dissuadere da",
            "da",
            "odwieść od"
          ],
          [
            "tenere a, badare a",
            "a",
            "zależeć komuś, uważać na"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Udało mi się skończyć na czas."
        },
        {
          "tr": "Dwa razy próbowałem mu to wytłumaczyć."
        },
        {
          "tr": "Zdałem sobie sprawę z błędu za późno."
        },
        {
          "tr": "Przekonali go, żeby został jeszcze rok."
        },
        {
          "tr": "Zależy mi, żeby powiedzieć to od razu."
        },
        {
          "tr": "Przestał narzekać dopiero wczoraj."
        }
      ]
    },
    "vocab": [
      "udać się (komuś)",
      "usiłować",
      "spróbować",
      "zdać sobie sprawę z",
      "zauważyć, spostrzec",
      "przekonać do",
      "odwieść od",
      "zależeć komuś na",
      "uważać na",
      "ufać komuś",
      "zrezygnować z",
      "przestać"
    ],
    "exercises": [
      {
        "q": "Jak jest poprawnie?",
        "opts": [
          "riuscire di finire",
          "riuscire a finire",
          "riuscire finire"
        ]
      },
      {
        "q": "Uzupełnij: „Sono riuscito ___ finire in tempo.”"
      },
      {
        "q": "Uzupełnij: „Ho tentato ___ spiegarglielo due volte.”"
      },
      {
        "q": "„Rendersi conto” łączy się z:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Który przyimek bierze „dissuadere”?",
        "opts": [
          "da",
          "a",
          "di"
        ]
      },
      {
        "q": "Wstaw przyimki.",
        "tr": "Udało mi się skończyć na czas, ale dwa razy próbowałem mu to wytłumaczyć."
      },
      {
        "q": "„Zdałem sobie sprawę z błędu za późno.”"
      },
      {
        "q": "Które połączenia są poprawne?",
        "opts": [
          "tentare a spiegare",
          "tentare di spiegare",
          "provare a spiegare"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Zauważyłem błąd dopiero wtedy, gdy sprawa już ruszyła."
      },
      {
        "tr": "Zależy mi, żeby powiedzieć to od razu: nie zgadzam się z tym wyborem."
      }
    ]
  },
  "lesson:c2-u04-test": {
    "theme": "Egzamin",
    "title": "Egzamin końcowy poziomu C2",
    "objectives": [
      "sprawdzić imiesłowy, liczbę mnogą i derywację, rejestry, zaimki względne i rekcję"
    ],
    "theory": [
      {
        "p": "Dwanaście zadań z całego poziomu C2. Zaliczenie od 70%. To ostatni sprawdzian kursu."
      }
    ],
    "exercises": [
      {
        "q": "Jak powiedzieć „koleżanka, której napisałem”?",
        "opts": [
          "la collega a che ho scritto",
          "la collega a cui ho scritto",
          "la collega che ho scritto"
        ]
      },
      {
        "q": "Uzupełnij: „La collega a ___ ho scritto non ha risposto.”"
      },
      {
        "q": "Uzupełnij: „L'autore ___ libro hai letto viene domani.”"
      },
      {
        "q": "„Il che” odnosi się do:",
        "opts": [
          "całego poprzedniego zdania",
          "ostatniego rzeczownika",
          "podmiotu"
        ]
      },
      {
        "q": "Uzupełnij: „Ha rifiutato l'incarico, ___ mi preoccupa.”"
      },
      {
        "q": "„Rendersi conto” łączy się z:",
        "opts": [
          "a",
          "che",
          "di"
        ]
      },
      {
        "q": "Uzupełnij: „Sono riuscito ___ finire in tempo.”"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "La città in cui sono nato.",
          "La città in che sono nato.",
          "La città dove sono nato."
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Koleżanka, której napisałem, nie odpowiedziała, co wydaje mi się dziwne."
      },
      {
        "q": "„Kto się spóźni, czeka na zewnątrz.”"
      },
      {
        "tr": "Autor, którego książkę czytaliśmy na zajęciach, wygłosi wykład."
      },
      {
        "tr": "Dopiero potem zdałem sobie sprawę, jak ważne było tamto zebranie."
      }
    ]
  }
});
