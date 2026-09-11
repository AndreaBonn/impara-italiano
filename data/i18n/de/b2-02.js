/* ============================================================
   Texte in der Sprache der Lernenden (de) für data/core/b2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("de", {
  "unit:b2-u05": {
    "title": "Indirekte Rede",
    "grammarNote": "Zeitenverschiebung · Deixis · Fragen und Aufforderungen"
  },
  "lesson:b2-u05-l1": {
    "theme": "Grammatik",
    "title": "Von der direkten zur indirekten Rede",
    "objectives": [
      "die Zeit nach einem Einleitungsverb in der Vergangenheit verschieben",
      "nach «che» zwischen Indikativ und Konjunktiv wählen",
      "andere Redeverben als «dire» verwenden"
    ],
    "theory": [
      {
        "h": "Ein Einleitungsverb in der Vergangenheit schiebt alles einen Schritt zurück",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> Präsens wird zum Imperfetto, Passato prossimo zum Trapassato, Futur zum zusammengesetzten Konditional: <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. Nur Letzteres überrascht wirklich: die Zukunft aus der Vergangenheit heraus heißt <em>sarei arrivato</em>, nicht <em>arriverei</em>."
      },
      {
        "h": "Was sich nicht verschiebt",
        "p": "Steht das Einleitungsverb im Präsens (<em>dice che…</em>), ändert sich gar nichts. Und wenn das Gesagte weiterhin gilt, ist die Verschiebung freiwillig: <em>Ha detto che Roma <b>è</b> la capitale</em> klingt besser als <em>era</em>."
      },
      {
        "h": "Che + Indikativ oder Konjunktiv?",
        "p": "Das Einleitungsverb entscheidet. <em>Dire, rispondere, spiegare, scrivere</em> verlangen den Indikativ: <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> verlangen den Konjunktiv: <em>sostiene che la pratica <b>sia</b> aperta</em>. Die zweite Gruppe trägt Distanz: «so behauptet er, ich stehe nicht dafür ein»."
      },
      {
        "contrast": "Das Deutsche markiert die indirekte Rede mit dem Konjunktiv I («er sagte, er <b>sei</b> müde») und verschiebt die Zeiten gerade NICHT. Im Italienischen ist es umgekehrt: die Zeit wird verschoben (<em>era</em>), und der Modus bleibt meist der Indikativ. Wer die deutsche Logik überträgt, landet bei <em>ha detto che sia stanco</em> — verständlich, aber falsch, und zwar auf eine Weise, die sofort auffällt."
      }
    ],
    "grammar": {
      "title": "Die Zeitenverschiebung",
      "note": "Nach einem Einleitungsverb in einer Vergangenheitsform.",
      "table": {
        "head": [
          "direkt",
          "indirekt",
          "Beispiel"
        ],
        "rows": [
          [
            "presente",
            "imperfetto",
            "«sono stanco» → era stanco"
          ],
          [
            "passato prossimo",
            "trapassato prossimo",
            "«ho finito» → aveva finito"
          ],
          [
            "futuro semplice",
            "condizionale composto",
            "«arriverò» → sarebbe arrivato"
          ],
          [
            "imperfetto",
            "imperfetto (unverändert)",
            "«ero stanco» → era stanco"
          ],
          [
            "congiuntivo presente",
            "congiuntivo imperfetto",
            "«che sia» → che fosse"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Er sagte: «Ich bin müde» → Er sagte, er sei müde."
        },
        {
          "tr": "Er schrieb mir, er komme am nächsten Tag."
        },
        {
          "tr": "Er antwortete, er habe die Frage nicht verstanden."
        },
        {
          "tr": "Er erklärte uns, er werde selbst im Büro anrufen."
        },
        {
          "tr": "Er gab zu, dass er sich geirrt hatte."
        },
        {
          "tr": "Er behauptet, der Vorgang sei noch offen."
        }
      ]
    },
    "vocab": [
      "berichten, wiedergeben",
      "behaupten",
      "zugeben",
      "erwidern",
      "präzisieren",
      "hinzufügen",
      "dementieren",
      "bestätigen",
      "anscheinend",
      "seiner Meinung nach",
      "nach seinen Worten",
      "laut"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» in indirekter Rede nach «ha detto che»:",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Ergänzen Sie: «Ha detto che ___ stanco.» (essere)"
      },
      {
        "q": "Ergänzen Sie: «Ha risposto che non ___ la domanda.» (capire)"
      },
      {
        "q": "«Arriverò domani» nach «ha detto che»:",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Setzen Sie die richtigen Formen ein.",
        "tr": "Er sagte, er komme am nächsten Tag und werde selbst anrufen."
      },
      {
        "q": "«Er sagte, er sei müde.»"
      },
      {
        "q": "Welches Verb verlangt den Konjunktiv?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Ordnen Sie die Redeverben zu.",
        "tr": [
          "dementieren",
          "präzisieren",
          "erwidern",
          "behaupten"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Er schrieb mir, er komme am nächsten Tag im Büro vorbei."
      },
      {
        "tr": "Er gab zu, dass er sich geirrt hatte, und entschuldigte sich."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Grammatik",
    "title": "Zeit, Ort, Person",
    "objectives": [
      "Zeit- und Ortsangaben verschieben",
      "«venire» dort durch «andare» ersetzen, wo es nötig ist",
      "Pronomen und Possessiva anpassen"
    ],
    "theory": [
      {
        "h": "Zeitangaben wandern mit dem Verb",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (oder <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> bzw. <em>allora</em>. Der Satz bleibt auch ohne das verständlich, klingt aber übersetzt."
      },
      {
        "h": "Ort: qui → lì, questo → quello",
        "p": "Die Deixis geht von dem aus, der gesprochen hat. Beim Wiedergeben ist er nicht mehr dort: <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. Ebenso <em>questo</em> → <em>quello</em> und <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire und andare tauschen die Plätze",
        "p": "<em>venire</em> heißt «dorthin kommen, wo der Gesprächspartner ist». Beim Wiedergeben verschiebt sich der Bezugspunkt: <em>«Vengo domani»</em> wird zu <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. Ebenso wird <em>portare</em> je nach Richtung zu <em>portare</em> oder <em>lasciare</em>."
      },
      {
        "contrast": "Das Deutsche unterscheidet «kommen» und «gehen» genauso, also fällt dieser Punkt leicht. Schwieriger ist <em>l'indomani</em>: Deutsch hat für «am nächsten Tag» kein Register-Gegenstück, im Italienischen ist es gehoben und im Gespräch unpassend."
      }
    ],
    "grammar": {
      "title": "Deiktische Verschiebungen",
      "note": "Wenn Sie Worte wiedergeben, die anderswo und zu anderer Zeit fielen.",
      "table": {
        "head": [
          "Original",
          "wiedergegeben",
          "Hinweis"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "«an jenem Tag»"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "das zweite ist gehoben"
          ],
          [
            "qui",
            "lì",
            "der Sprecher ist nicht mehr dort"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "der Bezugspunkt verschiebt sich"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Ich komme morgen» → Er sagte, er werde am nächsten Tag hingehen."
        },
        {
          "tr": "«Wir sehen uns hier» → Er sagte, wir würden uns dort sehen."
        },
        {
          "tr": "«Ich habe es gestern gemacht» → Er sagte, er habe es am Tag zuvor gemacht."
        },
        {
          "tr": "«Das gefällt mir nicht» → Er sagte, jenes gefalle ihm nicht."
        },
        {
          "tr": "«Ich komme jetzt zurück» → Er sagte, er komme in jenem Moment zurück."
        },
        {
          "tr": "«Mein Chef weiß es» → Er sagte, sein Chef wisse es."
        }
      ]
    },
    "vocab": [
      "am Tag zuvor",
      "am nächsten Tag",
      "zwei Tage zuvor",
      "in der Woche darauf",
      "in jenem Moment",
      "damals",
      "dort",
      "jenes",
      "sich begeben",
      "am Folgetag",
      "kurz zuvor",
      "kurz darauf"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» wiedergegeben:",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Ergänzen Sie: «Ha detto che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Ergänzen Sie: «Ha detto che ci saremmo visti ___.» (qui)"
      },
      {
        "q": "«L'ho fatto ieri» wiedergegeben:",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "Warum wird «venire» zu «andare»?",
        "opts": [
          "weil es besser klingt",
          "weil sich der Bezugspunkt verschiebt",
          "weil «venire» keinen Konditional hat"
        ]
      },
      {
        "q": "Setzen Sie die Zeitangaben ein.",
        "tr": "Er sagte, er habe es am Tag zuvor beendet und werde am nächsten Tag zurückkommen."
      },
      {
        "q": "«Er sagte, er werde am nächsten Tag dorthin gehen.»"
      },
      {
        "q": "Welche Verschiebungen sind richtig?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Er sagte mir, er werde am nächsten Tag dorthin gehen."
      },
      {
        "tr": "Er erklärte, am nächsten Tag komme er nicht ins Büro."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Grammatik",
    "title": "Fragen und Aufforderungen wiedergeben",
    "objectives": [
      "eine Ja/Nein-Frage mit «se» wiedergeben",
      "eine offene Frage wiedergeben",
      "den Imperativ in «di» + Infinitiv verwandeln"
    ],
    "theory": [
      {
        "h": "Ja/Nein-Fragen: se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> Ohne Fragezeichen und ohne Inversion: das ist keine Frage mehr, sondern ein Nebensatz. Dieses <em>se</em> hat mit der Bedingung nichts zu tun."
      },
      {
        "h": "Offene Fragen: das Fragewort bleibt",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (umgangssprachlich) oder <em>dove <b>abitassi</b></em> (sorgfältiger). Der Konjunktiv nach indirekter Frage ist eine Frage des Registers, keine Pflicht — im Amtsdeutsch des Italienischen begegnet er Ihnen aber ständig."
      },
      {
        "h": "Aufforderungen: di + Infinitiv",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> Die Verneinung steht vor dem Infinitiv: <em>mi ha detto <b>di non</b> firmare</em>. Dasselbe Muster nach <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "Das Deutsche gibt die Aufforderung mit «sollen» wieder: «er sagte mir, ich <b>solle</b> warten». Ein solches Hilfsverb hat das Italienische hier nicht, und <em>ha detto che dovevo aspettare</em> ist zwar möglich, klingt aber nach Vorwurf. Der neutrale Weg ist der Infinitiv: <em>mi ha detto di aspettare</em>."
      }
    ],
    "grammar": {
      "title": "Fragen und Aufforderungen",
      "note": "Drei Muster decken fast alles ab.",
      "table": {
        "head": [
          "Original",
          "wiedergegeben",
          "Muster"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + Indikativ"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "Fragewort + Konjunktiv (gehoben)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + Infinitiv"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + Infinitiv"
          ]
        ]
      },
      "examples": [
        {
          "tr": "«Kommst du?» → Er fragte mich, ob ich käme."
        },
        {
          "tr": "«Wo wohnst du?» → Er fragte mich, wo ich wohne."
        },
        {
          "tr": "«Warte!» → Er sagte mir, ich solle warten."
        },
        {
          "tr": "«Unterschreib nicht» → Er riet mir, nicht zu unterschreiben."
        },
        {
          "tr": "«Was willst du?» → Er wollte wissen, was ich wolle."
        },
        {
          "tr": "«Kannst du mir helfen?» → Er fragte, ob ich ihm helfen könne."
        }
      ]
    },
    "vocab": [
      "fragen, ob",
      "wissen wollen",
      "sich erkundigen",
      "einladen zu",
      "empfehlen",
      "anordnen",
      "vorschlagen",
      "raten",
      "nahelegen",
      "bitten zu",
      "verbieten",
      "darauf bestehen, dass"
    ],
    "exercises": [
      {
        "q": "«Vieni?» wiedergegeben:",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Ergänzen Sie: «Mi ha chiesto ___ avevo capito.»"
      },
      {
        "q": "Ergänzen Sie: «Mi ha detto ___.» (aspettare)"
      },
      {
        "q": "«Non firmare» wiedergegeben:",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "Welches Register ist sorgfältiger?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Setzen Sie die richtigen Formen ein.",
        "tr": "Er fragte mich, ob ich verstanden hätte, und sagte mir, ich solle später zurückrufen."
      },
      {
        "q": "«Er fragte mich, ob ich käme.»"
      },
      {
        "q": "Ordnen Sie die Verben zu.",
        "tr": [
          "empfehlen",
          "verbieten",
          "nahelegen",
          "bitten"
        ]
      },
      {
        "q": "Bilden Sie den Satz."
      },
      {
        "tr": "Der Beamte fragte mich, ob ich die Steuernummer mitgebracht hätte."
      },
      {
        "tr": "Er riet mir, nichts ungelesen zu unterschreiben."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Grammatik",
    "title": "Test — Indirekte Rede",
    "exercises": [
      {
        "q": "«Ho finito» nach «ha detto che»:",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» nach «ha detto che»:",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Ergänzen Sie: «Disse che ___ stanco.» (essere)"
      },
      {
        "q": "Ergänzen Sie: «Disse che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Ergänzen Sie: «Mi chiese ___ ero pronto.»"
      },
      {
        "q": "Eine wiedergegebene Aufforderung lautet:",
        "opts": [
          "di + Infinitiv",
          "che + Konjunktiv",
          "der Imperativ unverändert"
        ]
      },
      {
        "q": "Welche Sätze sind richtig?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Setzen Sie die Formen ein.",
        "tr": "Er sagte, er sei müde und werde am nächsten Tag zurückkommen."
      },
      {
        "tr": "Er antwortete, er habe keine Vorladung erhalten."
      },
      {
        "tr": "Er fragte mich, ob ich den Antrag schon abgeschickt hätte."
      }
    ]
  }
});
