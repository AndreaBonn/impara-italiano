/* ============================================================
   Texte in der Sprache der Lernenden (de) für data/core/c1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:c1-u04": {
    "title": "Die Vermutung",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Grammatik",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "das Futur als Vermutung erkennen",
      "mit dem Futur II über die Vergangenheit mutmaßen",
      "Uhrzeit, Alter und Menge mit dem Futur schätzen"
    ],
    "theory": [
      {
        "h": "«Sarà stanco» spricht nicht von der Zukunft",
        "p": "Der Satz heißt <b>er ist wohl müde</b>, nicht «er wird müde sein». Das Italienische nutzt das Futur, um zu sagen, dass es etwas nicht sicher weiß. Echtes Futur und Vermutung sehen gleich aus; der Kontext entscheidet, meist ein Indiz, das gerade sichtbar ist."
      },
      {
        "h": "Die Vermutung über die Vergangenheit nimmt das Futur II",
        "p": "<em>Avrà perso il treno</em> = «er wird wohl den Zug verpasst haben». Dieselbe Form, die sonst «er wird bis dahin fertig sein» bedeutet, schiebt die Vermutung hier nach hinten. Ein Italiener hört den Unterschied mühelos, weil der Satz keinen künftigen Zeitpunkt nennt."
      },
      {
        "h": "Schätzen: Uhrzeit, Alter, Menge",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. Das ist der häufigste Gebrauch im Alltag und der am leichtesten zu übernehmende: Wer eine Zahl nennt, die er nicht geprüft hat, setzt sie fast immer ins Futur."
      },
      {
        "contrast": "Das Deutsche kennt genau dieselbe Bewegung: «er wird wohl müde sein», «er wird den Zug verpasst haben». Der Unterschied liegt bei der Partikel. Im Deutschen trägt <em>wohl</em> (oder <em>schon</em>) die Vermutung, und ohne sie klingt der Satz nach echter Zukunft; im Italienischen steht nichts dergleichen, die Form allein genügt. Wer die Partikel sucht, findet sie nicht und liest den Satz als Zukunft."
      }
    ],
    "grammar": {
      "title": "Das Futur als Vermutung",
      "note": "Die dritte Spalte sagt, was der Satz wirklich tut.",
      "table": {
        "head": [
          "Satz",
          "Form",
          "was er tut"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "Vermutung über jetzt"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "Vermutung über die Vergangenheit"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "Schätzung von Zeit oder Menge"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "ironisches Zugeständnis"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "echtes Futur"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Er geht nicht ran: er wird wohl noch in der Besprechung sein."
        },
        {
          "tr": "Wie spät ist es? Es wird kurz nach drei sein."
        },
        {
          "tr": "Er wird den Zug verpasst haben, sonst kommt er nicht zu spät."
        },
        {
          "tr": "Wie alt ist er? So um die vierzig."
        },
        {
          "tr": "Ich habe ihn nicht gesehen: er wird früher gegangen sein."
        },
        {
          "tr": "Er mag ja gut sein, aber mich überzeugt er nicht."
        }
      ]
    },
    "vocab": [
      "die Vermutung",
      "wahrscheinlich",
      "vermutlich",
      "über den Daumen",
      "ich nehme an",
      "er wird wohl sein",
      "er wird wohl haben",
      "wer weiß",
      "als selbstverständlich nehmen",
      "ins Blaue raten",
      "den Eindruck haben",
      "geschätzt"
    ],
    "exercises": [
      {
        "q": "Was bedeutet «Sarà stanco»?",
        "opts": [
          "Er wird müde sein (Zukunft)",
          "Er ist wohl müde",
          "Er war müde"
        ]
      },
      {
        "q": "Ergänzen Sie: «Non risponde: ___ ancora in riunione.» (essere, Vermutung)"
      },
      {
        "q": "Ergänzen Sie: «___ il treno, di solito non fa tardi.» (perdere, Futur II)"
      },
      {
        "q": "«Saranno le tre» ist:",
        "opts": [
          "eine Schätzung der Uhrzeit",
          "ein Plan für drei Uhr",
          "ein Befehl"
        ]
      },
      {
        "q": "Mit welcher Zeit mutmaßt das Italienische über die Vergangenheit?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Setzen Sie die Vermutungsformen ein.",
        "tr": "Er geht nicht ran: er wird wohl noch in der Besprechung sein. Oder er hat das Telefon vergessen."
      },
      {
        "q": "«Es wird drei sein, vielleicht etwas nach drei.»"
      },
      {
        "q": "Welche Sätze sind Vermutungen?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Er hat nicht zurückgerufen? Er wird einen anstrengenden Tag gehabt haben."
      },
      {
        "tr": "Er ist wohl müde: er ist acht Stunden gefahren."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Grammatik",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "das «deve» der Pflicht vom «deve» der Vermutung unterscheiden",
      "«può darsi che» mit dem Konjunktiv verwenden",
      "eine Erwartung mit «dovrebbe» ausdrücken"
    ],
    "theory": [
      {
        "h": "Dasselbe Wort, zwei ganz verschiedene Aufgaben",
        "p": "<em>Devi essere puntuale</em> ist eine Pflicht. <em>Deve essere stanco</em> ist ein Schluss. Die Form ist gleich; entschieden wird es durch das, was danebensteht: Beim Schluss kommt fast immer das Indiz mit («ha guidato tutta la notte»), bei der Pflicht eine Frist oder eine Regel."
      },
      {
        "h": "Può darsi che verlangt den Konjunktiv",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> Im Gespräch ist das häufiger als <em>è possibile che</em> und klingt weniger amtlich. Nach <em>può darsi che</em> steht nie der Indikativ, auch nicht bei offensichtlichen Dingen."
      },
      {
        "h": "Dovrebbe: Erwartung, nicht Pflicht",
        "p": "<em>Dovrebbe essere già arrivato</em> sagt nicht, dass jemand ankommen muss: es sagt, dass er nach Fahrplan längst da sein sollte. Es ist ein Punkt auf einer Sicherheitsskala, über <em>potrebbe</em> und unter <em>deve</em>."
      },
      {
        "contrast": "Deutsch hat für die mittlere Stufe ein eigenes Wort, das Ihnen hier zugutekommt: <em>dürfte</em> («er dürfte schon da sein») entspricht <em>dovrebbe</em> fast genau. «muss müde sein» deckt <em>deve essere stanco</em>. Die Lücke ist <em>può darsi che</em>: «es kann sein, dass» steht im Deutschen mit dem Indikativ, im Italienischen zwingend mit dem Konjunktiv."
      }
    ],
    "grammar": {
      "title": "Skala der Sicherheit",
      "note": "Vom Sichersten bis zum Ausschluss.",
      "table": {
        "head": [
          "Konstruktion",
          "Modus",
          "was es bedeutet"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "hohe Wahrscheinlichkeit"
          ],
          [
            "devi essere",
            "indicativo",
            "Pflicht"
          ],
          [
            "potrebbe",
            "condizionale",
            "Möglichkeit"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "Möglichkeit, umgangssprachlich"
          ],
          [
            "dovrebbe",
            "condizionale",
            "Erwartung"
          ],
          [
            "non può essere",
            "indicativo",
            "Ausschluss"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Er muss müde sein: er ist die ganze Nacht gefahren."
        },
        {
          "tr": "Du musst pünktlich sein, der Termin ist um neun."
        },
        {
          "tr": "Er könnte zu spät kommen, es ist viel Verkehr."
        },
        {
          "tr": "Es kann sein, dass er die Nachricht nicht bekommen hat."
        },
        {
          "tr": "Er dürfte um diese Zeit schon da sein."
        },
        {
          "tr": "Er kann es nicht sein: er ist seit einer Woche im Urlaub."
        }
      ]
    },
    "vocab": [
      "es kann sein, dass",
      "es ist wahrscheinlich, dass",
      "es ist unwahrscheinlich, dass",
      "aller Wahrscheinlichkeit nach",
      "so gut wie sicher",
      "ausschließen",
      "es sei denn",
      "wenn nichts dazwischenkommt",
      "annehmen",
      "eine Vermutung wagen",
      "im Großen und Ganzen",
      "wenn ich mich nicht irre"
    ],
    "exercises": [
      {
        "q": "«Deve essere stanco» bedeutet:",
        "opts": [
          "Er hat müde zu sein",
          "Er muss müde sein (Vermutung)",
          "Er muss sich müde machen"
        ]
      },
      {
        "q": "Ergänzen Sie: «___ essere stanco: ha guidato tutta la notte.»"
      },
      {
        "q": "Ergänzen Sie: «___ essere già arrivato a quest'ora.» (dovere, Konditional)"
      },
      {
        "q": "Nach «può darsi che» steht:",
        "opts": [
          "der Konjunktiv",
          "der Indikativ",
          "das Konditional"
        ]
      },
      {
        "q": "Welcher Satz schließt die Möglichkeit aus?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Es kann sein, dass er die Nachricht nicht bekommen hat."
      },
      {
        "q": "«Er muss müde sein.» (mit dovere)"
      },
      {
        "q": "Ordnen Sie die Konstruktionen zu.",
        "tr": [
          "es kann sein, dass",
          "er dürfte (Erwartung)",
          "ausschließen",
          "wenn nichts dazwischenkommt"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Er dürfte längst da sein, er ist um sechs losgefahren."
      },
      {
        "tr": "Es kann sein, dass er es sich anders überlegt hat, das kommt vor."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Grammatik",
    "title": "Magari, mica, chissà",
    "objectives": [
      "die drei Verwendungen von «magari» unterscheiden",
      "die Verneinung mit «mica» verstärken",
      "das Urteil mit «chissà» und «sarà…, ma» offenlassen"
    ],
    "theory": [
      {
        "h": "Magari hat drei Bedeutungen, zwei davon entscheidet der Modus",
        "p": "Mit Indikativ: <em>magari piove</em> = «vielleicht regnet es». Mit Konjunktiv Imperfekt: <em>magari potessi!</em> = «wenn ich doch nur könnte!». Allein, als Antwort: <em>Vieni? Magari!</em> = «und ob, gerne!». Drei verschiedene Dinge, ein Wort."
      },
      {
        "h": "Mica verstärkt die Verneinung",
        "p": "<em>Non è mica finita</em> heißt nicht «es ist nicht zu Ende», sondern «es ist überhaupt nicht zu Ende», mit einem Beiklang von Widerspruch gegen das, was der andere gerade angenommen hat. Es steht nach dem Verb und gehört ausschließlich der gesprochenen Sprache an."
      },
      {
        "h": "Das Urteil offenlassen: chissà und sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> sagt offen, dass wir es nicht wissen. <em>Sarà, ma io non ci credo</em> ist die höfliche Art zu widersprechen: erst gesteht man dem anderen seine Sicht zu, dann macht man mit der eigenen weiter. Sehr häufig und sehr italienisch."
      },
      {
        "contrast": "Hier sind Sie im Vorteil: Deutsch denkt ohnehin in Modalpartikeln (doch, ja, wohl, etwa, schon), und genau das sind diese Wörter. <em>Mica</em> entspricht dem verstärkenden «etwa» in Fragen und «gar nicht» in Aussagen. Für <em>magari</em> braucht es allerdings drei verschiedene deutsche Wendungen, «vielleicht», «wenn doch nur» und «und ob» — die Mehrdeutigkeit lässt sich nicht mitnehmen."
      }
    ],
    "grammar": {
      "title": "Wörter, die den Satz modalisieren",
      "note": "Die zweite Spalte sagt, was das Wort mit dem Satz macht.",
      "table": {
        "head": [
          "Wort",
          "was es tut",
          "Beispiel"
        ],
        "rows": [
          [
            "magari + indicativo",
            "vielleicht, wohl",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "irrealer Wunsch",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "und ob, gerne!",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "verstärkt die Verneinung",
            "Non è mica finita."
          ],
          [
            "chissà",
            "offen zugeben, nichts zu wissen",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "höflicher Widerspruch",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Vielleicht regnet es, nimm lieber einen Schirm."
        },
        {
          "tr": "Wenn ich doch nur auch mitkommen könnte!"
        },
        {
          "tr": "Vielleicht sehen wir uns morgen, ich schreibe dir."
        },
        {
          "tr": "Es ist überhaupt nicht zu Ende, es fehlen zehn Minuten."
        },
        {
          "tr": "Wer weiß, ob sie daran gedacht haben."
        },
        {
          "tr": "Na ja, mag sein, aber ich glaube es nicht."
        }
      ]
    },
    "vocab": [
      "vielleicht, wenn doch nur, und ob",
      "gar nicht",
      "wer weiß",
      "keine Ahnung",
      "aber sicher",
      "schau mal",
      "na ja, mag sein",
      "wer soll das wissen",
      "allenfalls",
      "man weiß nie",
      "das soll mal einer wissen",
      "mag ja stimmen, aber"
    ],
    "exercises": [
      {
        "q": "«Magari piove» bedeutet:",
        "opts": [
          "Hoffentlich regnet es",
          "Vielleicht regnet es",
          "Wenn es regnete"
        ]
      },
      {
        "q": "Ergänzen Sie: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "Ergänzen Sie: «___ se si sono ricordati.»"
      },
      {
        "q": "«Magari potessi venire!» ist:",
        "opts": [
          "eine Vermutung",
          "ein Vorschlag",
          "ein irrealer Wunsch"
        ]
      },
      {
        "q": "«Mica» verstärkt:",
        "opts": [
          "die Verneinung",
          "die Frage",
          "den Befehl"
        ]
      },
      {
        "q": "Setzen Sie die Wörter ein.",
        "tr": "Es ist überhaupt nicht zu Ende, es fehlen zehn Minuten. Wer weiß, ob sie es gemerkt haben."
      },
      {
        "q": "«Wenn ich doch nur auch mitkommen könnte!»"
      },
      {
        "q": "Welche Wörter zeigen Unsicherheit an?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Es ist überhaupt nicht gesagt, dass er kommt, gestern war er sich nicht sicher."
      },
      {
        "tr": "Wer weiß, ob sie es gemerkt haben, niemand hat etwas gesagt."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Grammatik",
    "title": "Test — Die Vermutung",
    "exercises": [
      {
        "q": "«Sarà stanco» bedeutet:",
        "opts": [
          "Er wird müde sein",
          "Er ist wohl müde",
          "Er ist oft müde"
        ]
      },
      {
        "q": "«Saranno le tre» ist:",
        "opts": [
          "eine Schätzung der Uhrzeit",
          "ein Plan für drei Uhr",
          "ein Befehl"
        ]
      },
      {
        "q": "Ergänzen Sie: «Non risponde: ___ in riunione.» (essere, Vermutung)"
      },
      {
        "q": "Ergänzen Sie: «___ il treno, di solito non fa tardi.» (perdere)"
      },
      {
        "q": "Ergänzen Sie: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "Die Vermutung über die Vergangenheit steht im:",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "Welche Sätze sind Vermutungen?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Er geht nicht ran: er wird in der Besprechung sein. Es kann sein, dass er später zurückruft."
      },
      {
        "tr": "Ihm wird etwas dazwischengekommen sein, sonst sagt er Bescheid."
      },
      {
        "tr": "Er dürfte um diese Zeit schon im Büro sein."
      }
    ]
  }
});
