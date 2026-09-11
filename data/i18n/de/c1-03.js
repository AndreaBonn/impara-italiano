/* ============================================================
   Texte in der Sprache der Lernenden (de) für data/core/c1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:c1-u05": {
    "title": "Sätze ohne finites Verb",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Grammatik",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "einen Nebensatz durch das Gerundium ersetzen",
      "das einfache vom zusammengesetzten Gerundium unterscheiden",
      "die vier Bedeutungen des Gerundiums erkennen"
    ],
    "theory": [
      {
        "h": "Eine Form, vier Bedeutungen",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> kann «als ich hinausging» (Zeit), «weil ich hinausging» (Grund), «dadurch, dass ich hinausging» (Art) oder «wenn ich hinausginge» (Bedingung) heißen. Das Italienische markiert nichts: der Inhalt beider Hälften entscheidet, und in der Praxis ergibt nur eine Lesart Sinn."
      },
      {
        "h": "Das zusammengesetzte Gerundium schiebt die Handlung zurück",
        "p": "<em>Avendo finito presto, siamo andati al mare</em>: erst waren wir fertig, dann sind wir gefahren. Ohne <em>avendo</em> wären beide Handlungen gleichzeitig. Das ist das Einzige, was die Form des Gerundiums wirklich entscheidet, und deshalb lohnt der Blick darauf."
      },
      {
        "h": "Wozu das gut ist",
        "p": "<em>Siccome avevamo finito presto, siamo andati al mare</em> ist richtig und vier Wörter länger. Ein italienischer C1-Text tauscht das eine gegen das andere mehrmals pro Seite; wer es nie tut, schreibt korrekt und schwerfällig, und genau das sieht eine Lehrkraft sofort."
      },
      {
        "contrast": "Deutsch hat für diese Bewegung nichts Direktes: Partizipialkonstruktionen («das Haus verlassend») klingen gestelzt und fallen im Alltag aus. Sie werden also den Nebensatz gewohnt sein («als ich das Haus verließ»), und er bleibt im Italienischen richtig — nur ist er dort die schwerere Variante. Hier lohnt es sich ausnahmsweise, gegen die Muttersprache zu üben."
      }
    ],
    "grammar": {
      "title": "Das Gerundium statt eines Nebensatzes",
      "note": "Die dritte Spalte sagt, was der Satz trägt.",
      "table": {
        "head": [
          "Konstruktion",
          "Form",
          "was sie trägt"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "Gleichzeitigkeit, Grund, Art"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "frühere Handlung"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "Konzession"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "Art, allgemeine Wahrheit"
          ],
          [
            "Essendo domenica…",
            "gerundio di essere",
            "Grund"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Als ich das Haus verließ, traf ich Marta."
        },
        {
          "tr": "Da wir früh fertig waren, sind wir ans Meer gefahren."
        },
        {
          "tr": "Obwohl er es wusste, sagte er nichts."
        },
        {
          "tr": "Durch Fehler lernt man."
        },
        {
          "tr": "Da Sonntag war, hatten die Geschäfte zu."
        },
        {
          "tr": "Nachdem die Nachricht veröffentlicht war, brach der Preis ein."
        }
      ]
    },
    "vocab": [
      "das Gerundium",
      "der satzwertige Ausdruck",
      "das mitgedachte Subjekt",
      "gleichzeitig",
      "früher",
      "der Grund",
      "die Art und Weise",
      "die Bedingung",
      "mitdenken",
      "regieren",
      "entlasten",
      "beschweren"
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» bedeutet:",
        "opts": [
          "Ich werde hinausgehen und Marta treffen",
          "Als ich das Haus verließ, traf ich Marta",
          "Wenn ich hinausginge, träfe ich Marta"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ di casa, ho incontrato Marta.» (uscire, Gerundium)"
      },
      {
        "q": "Ergänzen Sie: «___ presto, siamo andati al mare.» (finire, zusammengesetztes Gerundium)"
      },
      {
        "q": "«Avendo finito presto» drückt aus:",
        "opts": [
          "eine frühere Handlung",
          "eine gleichzeitige Handlung",
          "eine Bedingung"
        ]
      },
      {
        "q": "«Pur sapendolo» bedeutet:",
        "opts": [
          "es wissend",
          "ohne es zu wissen",
          "obwohl er es wusste"
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Als ich das Haus verließ, traf ich Marta. Da wir früh fertig waren, sind wir ans Meer gefahren."
      },
      {
        "q": "«Durch Fehler lernt man.»"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Nachdem ich den Vertrag gelesen hatte, bat ich um zwei Änderungen."
      },
      {
        "tr": "Als ich das Büro verließ, merkte ich, dass ich die Schlüssel drinnen gelassen hatte."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Grammatik",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "einen Temporalsatz mit dem Partizip verkürzen",
      "«dopo aver» und «prima di» mit dem Infinitiv verwenden",
      "das Partizip mit dem richtigen Wort kongruieren lassen"
    ],
    "theory": [
      {
        "h": "Das Partizip am Satzanfang",
        "p": "<em>Finito il lavoro, siamo usciti</em> = «als die Arbeit fertig war, gingen wir». Das Partizip richtet sich nach dem, wovon es spricht: nach <em>lavoro</em> in <em>finito il lavoro</em>, aber nach uns in <em>arrivati a Roma</em>, weil <em>arrivare</em> mit <em>essere</em> geht. Das ist das einzig Schwierige an dieser Lektion."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "Nach <em>dopo</em> steht der zusammengesetzte Infinitiv: <em>dopo aver letto</em>, nie <em>dopo leggere</em>. Nach <em>prima di</em> der einfache Infinitiv: <em>prima di rispondere</em>. <em>Nel</em> + Infinitiv heißt «im Moment, als»: <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + Partizip",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Sehr häufig und sehr bequem, weil es weder Konjunktion noch Tempus braucht. Es funktioniert auch für Dauerhaftes: <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "Deutsch sagt «nach dem Lesen des Vertrags», also mit einem Substantiv, und genau diese Gewohnheit führt im Italienischen zu <em>dopo la lettura del contratto</em>: grammatisch richtig, aber amtssprachlich. Das neutrale Italienisch nimmt das Verb, <em>dopo aver letto il contratto</em>. Umgekehrt entspricht «einmal geschlossen» recht genau <em>una volta chiuso</em>."
      }
    ],
    "grammar": {
      "title": "Einen Temporalsatz verkürzen",
      "note": "Die dritte Spalte sagt, wann die Form passt.",
      "table": {
        "head": [
          "Konstruktion",
          "Form",
          "wann"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "Handlung vor der Haupthandlung abgeschlossen"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "Kongruenz mit dem Subjekt"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "nach etwas"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "vor etwas"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "im Moment, als"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "sobald einmal"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Als die Arbeit fertig war, gingen wir."
        },
        {
          "tr": "In Rom angekommen, suchten wir ein Hotel."
        },
        {
          "tr": "Nachdem er den Vertrag gelesen hatte, unterschrieb er."
        },
        {
          "tr": "Bevor er antwortete, hat er zwei Tage überlegt."
        },
        {
          "tr": "Während er das sagte, stand er auf."
        },
        {
          "tr": "Sobald der Laden schließt, leert sich die Straße."
        }
      ]
    },
    "vocab": [
      "das Partizip Perfekt",
      "der zusammengesetzte Infinitiv",
      "der Nebensatz",
      "sobald einmal",
      "nachdem",
      "bevor",
      "im Moment, als",
      "im Augenblick von",
      "kongruieren",
      "vorangehen",
      "folgen",
      "straffen"
    ],
    "exercises": [
      {
        "q": "In «Finito il lavoro, siamo usciti» bezieht sich «finito» auf:",
        "opts": [
          "uns",
          "die Arbeit",
          "das Weggehen"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ il lavoro, siamo usciti.» (finire, Partizip)"
      },
      {
        "q": "Ergänzen Sie: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "Nach «dopo» steht in der verkürzten Form:",
        "opts": [
          "das Gerundium",
          "das Partizip",
          "der zusammengesetzte Infinitiv"
        ]
      },
      {
        "q": "«Prima di» steht mit:",
        "opts": [
          "dem Infinitiv",
          "dem Gerundium",
          "dem Partizip"
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Als die Arbeit fertig war, gingen wir. Nachdem er den Vertrag gelesen hatte, unterschrieb er."
      },
      {
        "q": "«Nachdem er den Vertrag gelesen hatte, unterschrieb er.»"
      },
      {
        "q": "Ordnen Sie die Konstruktionen zu.",
        "tr": [
          "als die Arbeit fertig war",
          "nachdem er gelesen hatte",
          "bevor er antwortet",
          "sobald geschlossen"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Sobald der Laden schließt, leert sich die Straße in wenigen Minuten."
      },
      {
        "tr": "Bevor er antwortete, hat er zwei volle Tage überlegt."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Grammatik",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "prüfen, ob beide Hälften dasselbe Subjekt haben",
      "den Satz erkennen, den die Verkürzung mehrdeutig macht",
      "die Konjunktion wählen, wenn die Verkürzung nicht geht"
    ],
    "theory": [
      {
        "h": "Eine Regel ohne Ausnahme",
        "p": "Die verkürzte Form holt ihr Subjekt aus dem Hauptsatz. Sind die Subjekte verschieden, sagt der Satz etwas anderes: <em>Uscendo di casa, mia madre mi ha chiamato</em> sagt, dass die Mutter hinausging. Im Deutschen heißt derselbe Fehler «bezugloses Partizip» und ist genauso falsch."
      },
      {
        "h": "Zwei Auswege",
        "p": "Man kann dem Gerundium ein eigenes Subjekt geben: <em>Avendo io firmato, la pratica è partita</em>. Das klingt amtlich und kommt gesprochen nicht vor. Der andere Ausweg ist der normale: Konjunktion und finites Verb, <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Unpersönliche Verben sind unkritisch",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em>: sie haben kein persönliches Subjekt und können deshalb mit nichts kollidieren. Darum ist <em>Essendo tardi, abbiamo rimandato la riunione</em> korrekt, obwohl «wir» nicht das Subjekt von <em>essere tardi</em> ist."
      },
      {
        "contrast": "Hier stimmen beide Sprachen genau überein, und das macht diese Lektion zur billigsten der Einheit: «Aus dem Haus gehend, rief mich meine Mutter an» ist auch auf Deutsch falsch. Der Unterschied liegt in der Häufigkeit: Weil Deutsch solche Partizipien ohnehin kaum benutzt, machen Sie diesen Fehler seltener als etwa italienische Muttersprachler selbst."
      }
    ],
    "grammar": {
      "title": "Wann die Verkürzung geht und wann nicht",
      "note": "Die dritte Spalte sagt, was zu tun ist.",
      "table": {
        "head": [
          "Situation",
          "was erlaubt ist",
          "was zu tun ist"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "die Verkürzung geht"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "die Verkürzung ändert den Sinn, Konjunktion nötig"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "Verkürzung unkritisch"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "korrekt, aber amtlich"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "die Konjunktion klingt natürlicher"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Während ich hinausging, rief mich meine Mutter an."
        },
        {
          "tr": "Da es spät war, haben wir die Sitzung verschoben."
        },
        {
          "tr": "Da es spät war, hat Marco die Sitzung verschoben."
        },
        {
          "tr": "Nachdem der Direktor unterschrieben hatte, lief der Vorgang."
        },
        {
          "tr": "Als die Sitzung zu Ende war, ging der Direktor."
        },
        {
          "tr": "Da ich unterschrieben hatte, lief der Vorgang."
        }
      ]
    },
    "vocab": [
      "das Subjekt",
      "übereinstimmen",
      "ausdrücklich",
      "mitgedacht",
      "mehrdeutig",
      "das Missverständnis",
      "da",
      "zumal",
      "nachdem",
      "während",
      "sich beziehen auf",
      "klarstellen"
    ],
    "exercises": [
      {
        "q": "Wann darf die verkürzte Form NICHT stehen?",
        "opts": [
          "Wenn beide Hälften dasselbe Subjekt haben",
          "Wenn die Subjekte verschieden sind",
          "Sie darf immer stehen"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ era tardi, Marco ha rimandato la riunione.» (Konjunktion des Grundes)"
      },
      {
        "q": "Ergänzen Sie: «___ uscivo, mia madre mi ha chiamato.» (Konjunktion der Zeit)"
      },
      {
        "q": "Warum ist «Essendo tardi, abbiamo rimandato» korrekt?",
        "opts": [
          "«essere tardi» hat kein persönliches Subjekt",
          "das Gerundium geht immer",
          "es ist eine Vergangenheitsform"
        ]
      },
      {
        "q": "Bei verschiedenen Subjekten schreibt man den Satz:",
        "opts": [
          "mit dem Gerundium",
          "mit dem Partizip",
          "mit Konjunktion und finitem Verb"
        ]
      },
      {
        "q": "Setzen Sie die Konjunktionen ein.",
        "tr": "Da es spät war, hat Marco die Sitzung verschoben. Während ich hinausging, rief mich meine Mutter an."
      },
      {
        "q": "«Da es spät war, haben wir die Sitzung verschoben.»"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Da der Direktor im Urlaub war, blieb der Vorgang liegen."
      },
      {
        "tr": "Während ich telefonierte, kam der Kurier."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Prüfung",
    "title": "Abschlussprüfung Niveau C1",
    "objectives": [
      "unpersönliches si, pronominale Verben, Register, Vermutung und satzwertige Formen prüfen"
    ],
    "theory": [
      {
        "p": "Zwölf Aufgaben aus dem gesamten Niveau C1. Bestanden ab 70%."
      }
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» bedeutet:",
        "opts": [
          "Ich werde hinausgehen und Marta treffen",
          "Als ich das Haus verließ, traf ich Marta",
          "Wenn ich hinausginge, träfe ich Marta"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ presto, siamo andati al mare.» (finire, zusammengesetztes Gerundium)"
      },
      {
        "q": "Ergänzen Sie: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "«Avendo finito presto» drückt aus:",
        "opts": [
          "eine frühere Handlung",
          "eine gleichzeitige Handlung",
          "eine Bedingung"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ era tardi, Marco ha rimandato la riunione.»"
      },
      {
        "q": "Bei verschiedenen Subjekten schreibt man den Satz:",
        "opts": [
          "mit dem Gerundium",
          "mit dem Partizip",
          "mit Konjunktion und finitem Verb"
        ]
      },
      {
        "q": "Ergänzen Sie: «Non risponde: ___ ancora in riunione.» (essere, Vermutung)"
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Als die Arbeit fertig war, gingen wir; da es spät war, nahmen wir ein Taxi."
      },
      {
        "q": "«Nachdem er den Vertrag gelesen hatte, unterschrieb er.»"
      },
      {
        "tr": "Sobald der Vorgang abgeschlossen ist, schickt das Amt eine schriftliche Mitteilung."
      },
      {
        "tr": "Da ich hier seit drei Jahren arbeite, kenne ich die Abläufe gut."
      }
    ]
  }
});
