/* ============================================================
   Teksty w języku ucznia (pl) do data/core/c1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "unit:c1-u05": {
    "title": "Zdania bez odmienionego czasownika",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Gramatyka",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "zastąpić zdanie podrzędne przez gerundio",
      "odróżnić gerundio presente od gerundio passato",
      "rozpoznać cztery znaczenia, które gerundio może nieść"
    ],
    "theory": [
      {
        "h": "Jedna forma, cztery znaczenia",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> może znaczyć „wychodząc” (równocześnie), „ponieważ wychodziłem” (przyczyna), „wychodząc w ten sposób” (sposób) albo „gdybym wyszedł” (warunek). Włoski nie rozstrzyga tego formą: rozstrzyga treść obu członów, i to wystarcza, bo w praktyce tylko jedno odczytanie ma sens."
      },
      {
        "h": "Gerundio passato cofa czynność",
        "p": "<em>Avendo finito presto, siamo andati al mare</em>: najpierw skończyliśmy, potem pojechaliśmy. Bez <em>avendo</em> obie czynności byłyby równoczesne. To jedyna rzecz, którą forma gerundio naprawdę rozstrzyga, więc warto na nią patrzeć."
      },
      {
        "h": "Po co to komu",
        "p": "Zdanie <em>Siccome avevamo finito presto, siamo andati al mare</em> jest poprawne i o cztery słowa dłuższe. Włoski tekst na poziomie C1 wymienia jedno na drugie kilka razy na stronę; uczeń, który tego nie robi, pisze poprawnie i ciężko, i to jest jedyna różnica, którą nauczyciel zobaczy od razu."
      },
      {
        "contrast": "Polski ma imiesłów przysłówkowy i robi dokładnie to samo: „wychodząc z domu” (współczesny) i „skończywszy pracę” (uprzedni). Masz więc gotowy mechanizm, ale uwaga na rejestr: „skończywszy” brzmi po polsku książkowo i w mowie prawie nie występuje, podczas gdy włoskie <em>avendo finito</em> jest zupełnie neutralne. Nie przenoś tego wrażenia podniosłości na włoski."
      }
    ],
    "grammar": {
      "title": "Gerundio zamiast zdania podrzędnego",
      "note": "Trzecia kolumna mówi, co zdanie niesie.",
      "table": {
        "head": [
          "konstrukcja",
          "forma",
          "co niesie"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "równoczesność, przyczyna, sposób"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "czynność wcześniejsza"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "przyzwolenie"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "sposób, zdanie ogólne"
          ],
          [
            "Essendo domenica…",
            "gerundio di essere",
            "przyczyna"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Wychodząc z domu, spotkałem Martę."
        },
        {
          "tr": "Skończywszy wcześnie, pojechaliśmy nad morze."
        },
        {
          "tr": "Chociaż o tym wiedział, nic nie powiedział."
        },
        {
          "tr": "Na błędach się człowiek uczy."
        },
        {
          "tr": "Ponieważ była niedziela, sklepy były zamknięte."
        },
        {
          "tr": "Po ogłoszeniu wiadomości cena runęła."
        }
      ]
    },
    "vocab": [
      "imiesłów przysłówkowy",
      "zdanie bez odmienionego czasownika",
      "domyślny podmiot",
      "równoczesny",
      "wcześniejszy",
      "przyczyna",
      "sposób",
      "warunek",
      "domyślać się",
      "rządzić (składniowo)",
      "odciążyć",
      "obciążyć"
    ],
    "exercises": [
      {
        "q": "„Uscendo di casa, ho incontrato Marta” znaczy:",
        "opts": [
          "Wyjdę z domu i spotkam Martę",
          "Wychodząc z domu, spotkałem Martę",
          "Gdybym wyszedł, spotkałbym Martę"
        ]
      },
      {
        "q": "Uzupełnij: „___ di casa, ho incontrato Marta.” (uscire, gerundio)"
      },
      {
        "q": "Uzupełnij: „___ presto, siamo andati al mare.” (finire, gerundio passato)"
      },
      {
        "q": "„Avendo finito presto” wyraża:",
        "opts": [
          "czynność wcześniejszą",
          "czynność równoczesną",
          "warunek"
        ]
      },
      {
        "q": "„Pur sapendolo” znaczy:",
        "opts": [
          "wiedząc o tym",
          "nie wiedząc o tym",
          "chociaż o tym wiedział"
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Wychodząc z domu, spotkałem Martę. Skończywszy wcześnie, pojechaliśmy nad morze."
      },
      {
        "q": "„Na błędach się człowiek uczy.”"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Przeczytawszy umowę, poprosiłem o zmianę dwóch punktów."
      },
      {
        "tr": "Wychodząc z biura, zrozumiałem, że zostawiłem klucze w środku."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Gramatyka",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "skrócić zdanie czasowe przez participio",
      "użyć „dopo aver” i „prima di” z bezokolicznikiem",
      "uzgodnić participio z podmiotem albo z dopełnieniem"
    ],
    "theory": [
      {
        "h": "Participio na początku zdania",
        "p": "<em>Finito il lavoro, siamo usciti</em> = „gdy praca została skończona, wyszliśmy”. Participio uzgadnia się z tym, czego dotyczy: w <em>finito il lavoro</em> z <em>lavoro</em>, a w <em>arrivati a Roma</em> z nami, bo <em>arrivare</em> idzie z <em>essere</em>. To jedyna trudna rzecz w tej lekcji."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "Po <em>dopo</em> stoi bezokolicznik złożony: <em>dopo aver letto</em>, nigdy <em>dopo leggere</em>. Po <em>prima di</em> zwykły bezokolicznik: <em>prima di rispondere</em>. <em>Nel + bezokolicznik</em> znaczy „w chwili gdy”: <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + participio",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Konstrukcja bardzo częsta i wygodna, bo nie wymaga żadnego spójnika ani czasu gramatycznego. Działa też z rzeczami trwałymi: <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "Polski ma „po przeczytaniu umowy” i „przed odpowiedzią”, czyli rzeczownik odsłowny tam, gdzie włoski bierze bezokolicznik. Dlatego pokusa, żeby napisać <em>dopo la lettura del contratto</em>, jest silna i daje zdanie poprawne, ale urzędowe. Neutralny włoski powie <em>dopo aver letto il contratto</em>, czasownikiem, nie rzeczownikiem."
      }
    ],
    "grammar": {
      "title": "Skracanie zdania czasowego",
      "note": "Trzecia kolumna mówi, kiedy tej formy używamy.",
      "table": {
        "head": [
          "konstrukcja",
          "forma",
          "kiedy"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "czynność zakończona przed główną"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "uzgodnienie z podmiotem"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "po czymś"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "przed czymś"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "w chwili gdy"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "gdy już raz"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Po skończeniu pracy wyszliśmy."
        },
        {
          "tr": "Po przyjeździe do Rzymu zaczęliśmy szukać hotelu."
        },
        {
          "tr": "Przeczytawszy umowę, podpisał."
        },
        {
          "tr": "Zanim odpowiedział, myślał o tym dwa dni."
        },
        {
          "tr": "Mówiąc to, wstał."
        },
        {
          "tr": "Gdy sklep już zamknie, ulica pustoszeje."
        }
      ]
    },
    "vocab": [
      "imiesłów bierny",
      "bezokolicznik złożony",
      "zdanie podrzędne",
      "gdy już raz",
      "po (zrobieniu czegoś)",
      "zanim",
      "w chwili gdy",
      "w momencie",
      "uzgadniać",
      "poprzedzać",
      "następować po",
      "odchudzić (tekst)"
    ],
    "exercises": [
      {
        "q": "W „Finito il lavoro, siamo usciti” słowo „finito” odnosi się do:",
        "opts": [
          "nas",
          "pracy",
          "wyjścia"
        ]
      },
      {
        "q": "Uzupełnij: „___ il lavoro, siamo usciti.” (finire, participio)"
      },
      {
        "q": "Uzupełnij: „Dopo ___ il contratto, ha firmato.” (leggere)"
      },
      {
        "q": "Po „dopo” w formie skróconej stoi:",
        "opts": [
          "gerundio",
          "participio",
          "bezokolicznik złożony"
        ]
      },
      {
        "q": "„Prima di” łączy się z:",
        "opts": [
          "bezokolicznikiem",
          "gerundio",
          "participio"
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Po skończeniu pracy wyszliśmy. Przeczytawszy umowę, podpisał."
      },
      {
        "q": "„Przeczytawszy umowę, podpisał.”"
      },
      {
        "q": "Dopasuj konstrukcje.",
        "tr": [
          "po skończeniu pracy",
          "przeczytawszy",
          "zanim odpowie",
          "gdy już zamknięto"
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Gdy sklep już zamknie, ulica pustoszeje w kilka minut."
      },
      {
        "tr": "Zanim odpowiedział, myślał o tym całe dwa dni."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Gramatyka",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "sprawdzić, czy podmiot obu członów jest ten sam",
      "rozpoznać zdanie, które przez skrót staje się niejasne",
      "wybrać spójnik, gdy skrót nie przechodzi"
    ],
    "theory": [
      {
        "h": "Reguła jest jedna i nie ma wyjątków",
        "p": "Forma skrócona bierze podmiot ze zdania głównego. Jeśli podmioty są różne, zdanie mówi coś innego, niż chcieliśmy: <em>Uscendo di casa, mia madre mi ha chiamato</em> znaczy, że to matka wychodziła. Po polsku ten sam błąd brzmi tak samo źle, więc masz gotowy odruch, tylko trzeba go włączyć w obcym języku."
      },
      {
        "h": "Dwa wyjścia awaryjne",
        "p": "Można dopisać podmiot do gerundio: <em>Avendo io firmato, la pratica è partita</em>. Brzmi to jednak urzędowo i w rozmowie nie występuje. Drugie wyjście jest normalne: spójnik i odmieniony czasownik, <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Czasowniki bezosobowe są bezpieczne",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em>: te nie mają podmiotu osobowego, więc nie mogą się z niczym pokłócić. Dlatego <em>Essendo tardi, abbiamo rimandato la riunione</em> jest poprawne, choć „my” nie jest podmiotem <em>essere tardi</em>."
      },
      {
        "contrast": "To jedyne miejsce w tej jednostce, gdzie polski i włoski są zgodne co do joty: „Wychodząc z domu, zadzwoniła do mnie matka” jest po polsku dokładnie tym samym błędem. Różnica jest w tolerancji — po polsku takie zdania przechodzą w mowie i mało kto je poprawia, po włosku na egzaminie pisemnym są liczone jako błąd składni."
      }
    ],
    "grammar": {
      "title": "Kiedy skrót przechodzi, a kiedy nie",
      "note": "Trzecia kolumna mówi, co zrobić.",
      "table": {
        "head": [
          "sytuacja",
          "co wolno",
          "co robić"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "skrót przechodzi"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "skrót zmienia sens, potrzebny spójnik"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "skrót bezpieczny"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "poprawne, ale urzędowe"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "spójnik brzmi naturalniej"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Kiedy wychodziłem, zadzwoniła do mnie matka."
        },
        {
          "tr": "Ponieważ było późno, przełożyliśmy zebranie."
        },
        {
          "tr": "Ponieważ było późno, Marco przełożył zebranie."
        },
        {
          "tr": "Po tym, jak dyrektor podpisał, sprawa ruszyła."
        },
        {
          "tr": "Gdy zebranie się skończyło, dyrektor wyszedł."
        },
        {
          "tr": "Ponieważ to ja podpisałem, sprawa ruszyła."
        }
      ]
    },
    "vocab": [
      "podmiot",
      "pokrywać się",
      "wyrażony wprost",
      "domyślny",
      "dwuznaczny",
      "nieporozumienie",
      "ponieważ",
      "skoro",
      "po tym, jak",
      "podczas gdy",
      "odnosić się do",
      "wyjaśnić"
    ],
    "exercises": [
      {
        "q": "Kiedy NIE wolno użyć formy skróconej?",
        "opts": [
          "Gdy podmioty są te same",
          "Gdy podmioty są różne",
          "Zawsze wolno"
        ]
      },
      {
        "q": "Uzupełnij: „___ era tardi, Marco ha rimandato la riunione.” (spójnik przyczyny)"
      },
      {
        "q": "Uzupełnij: „___ uscivo, mia madre mi ha chiamato.” (spójnik czasu)"
      },
      {
        "q": "Dlaczego „Essendo tardi, abbiamo rimandato” jest poprawne?",
        "opts": [
          "bo „essere tardi” nie ma podmiotu osobowego",
          "bo gerundio działa zawsze",
          "bo to czas przeszły"
        ]
      },
      {
        "q": "Gdy podmioty są różne, zdanie zapisujemy:",
        "opts": [
          "przez gerundio",
          "przez participio",
          "spójnikiem i odmienionym czasownikiem"
        ]
      },
      {
        "q": "Wstaw spójniki.",
        "tr": "Ponieważ było późno, Marco przełożył zebranie. Kiedy wychodziłem, zadzwoniła do mnie matka."
      },
      {
        "q": "„Ponieważ było późno, przełożyliśmy zebranie.”"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Ułóż zdanie."
      },
      {
        "tr": "Ponieważ dyrektor był na urlopie, sprawa stanęła."
      },
      {
        "tr": "Kiedy rozmawiałem przez telefon, przyjechał kurier."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Egzamin",
    "title": "Egzamin końcowy poziomu C1",
    "objectives": [
      "sprawdzić si bezosobowe, verbi pronominali, rejestry, domysł i formy skrócone"
    ],
    "theory": [
      {
        "p": "Dwanaście zadań z całego poziomu C1. Zaliczenie od 70%."
      }
    ],
    "exercises": [
      {
        "q": "„Uscendo di casa, ho incontrato Marta” znaczy:",
        "opts": [
          "Wyjdę z domu i spotkam Martę",
          "Wychodząc z domu, spotkałem Martę",
          "Gdybym wyszedł, spotkałbym Martę"
        ]
      },
      {
        "q": "Uzupełnij: „___ presto, siamo andati al mare.” (finire, gerundio passato)"
      },
      {
        "q": "Uzupełnij: „Dopo ___ il contratto, ha firmato.” (leggere)"
      },
      {
        "q": "„Avendo finito presto” wyraża:",
        "opts": [
          "czynność wcześniejszą",
          "czynność równoczesną",
          "warunek"
        ]
      },
      {
        "q": "Uzupełnij: „___ era tardi, Marco ha rimandato la riunione.”"
      },
      {
        "q": "Gdy podmioty są różne, zdanie zapisujemy:",
        "opts": [
          "przez gerundio",
          "przez participio",
          "spójnikiem i odmienionym czasownikiem"
        ]
      },
      {
        "q": "Uzupełnij: „Non risponde: ___ ancora in riunione.” (essere, domysł)"
      },
      {
        "q": "Które zdania są poprawne?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Wstaw formy.",
        "tr": "Po skończeniu pracy wyszliśmy; ponieważ było późno, wzięliśmy taksówkę."
      },
      {
        "q": "„Przeczytawszy umowę, podpisał.”"
      },
      {
        "tr": "Gdy sprawa zostanie już zamknięta, urząd wysyła pisemne zawiadomienie."
      },
      {
        "tr": "Pracując tu od trzech lat, dobrze znam sposób działania."
      }
    ]
  }
});
