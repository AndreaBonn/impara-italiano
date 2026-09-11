/* ============================================================
   Student-language texts (en) for data/core/c1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u04": {
    "title": "Guessing out loud",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Grammar",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "recognise the future tense used as a guess",
      "use the future perfect for a guess about the past",
      "estimate a time, an age or a quantity with the future"
    ],
    "theory": [
      {
        "h": "«Sarà stanco» is not about the future",
        "p": "The sentence means <b>he must be tired</b>, not «he will be tired». Italian uses the future tense to say that it does not know something for certain. A real future and a guess look identical; context decides, and usually the giveaway is something visible right now."
      },
      {
        "h": "A guess about the past takes the future perfect",
        "p": "<em>Avrà perso il treno</em> = «he must have missed the train». The same form that normally means «he will have finished by then» pushes the guess backwards instead. An Italian hears the difference effortlessly, because the sentence names no future point in time."
      },
      {
        "h": "Estimating: time, age, quantity",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. This is the commonest use in everyday speech and the easiest to pick up: when somebody gives a number they have not checked, they will almost always put it in the future."
      },
      {
        "contrast": "You already have this: «that'll be the postman», «he'll have missed the train». So the mechanism is familiar, which makes this the rare Italian structure an English speaker gets for free. The difference is frequency and range: in English the epistemic will is colloquial and largely limited to identifying and predicting, in Italian it is the ordinary way to guess anything at all, including someone's age."
      }
    ],
    "grammar": {
      "title": "The future tense as a guess",
      "note": "The third column says what the sentence is actually doing.",
      "table": {
        "head": [
          "sentence",
          "form",
          "what it does"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "a guess about now"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "a guess about the past"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "an estimate of time or quantity"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "a wry concession"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "a real future"
          ]
        ]
      },
      "examples": [
        {
          "tr": "He's not answering: he must still be in a meeting."
        },
        {
          "tr": "What time is it? It'll be gone three."
        },
        {
          "tr": "He must have missed the train, he's not usually late."
        },
        {
          "tr": "How old is he? Forty-ish."
        },
        {
          "tr": "I didn't see him: he must have left early."
        },
        {
          "tr": "He may well be good, but he doesn't convince me."
        }
      ]
    },
    "vocab": [
      "a guess",
      "probably",
      "presumably",
      "roughly",
      "I imagine",
      "he must be",
      "he must have",
      "who knows",
      "to take for granted",
      "to take a stab at it",
      "to get the impression",
      "at a guess"
    ],
    "exercises": [
      {
        "q": "What does «Sarà stanco» mean?",
        "opts": [
          "He will be tired (future)",
          "He must be tired",
          "He was tired"
        ]
      },
      {
        "q": "Fill in: «Non risponde: ___ ancora in riunione.» (essere, a guess)"
      },
      {
        "q": "Fill in: «___ il treno, di solito non fa tardi.» (perdere, future perfect)"
      },
      {
        "q": "«Saranno le tre» is:",
        "opts": [
          "an estimate of the time",
          "a plan for three o'clock",
          "an order"
        ]
      },
      {
        "q": "Which tense does Italian use to guess about the past?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Put in the guessing forms.",
        "tr": "He's not answering: he must still be in a meeting. Or he'll have forgotten his phone."
      },
      {
        "q": "«It must be three, maybe gone three.»"
      },
      {
        "q": "Which sentences are guesses?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "He didn't call you back? He must have had a rough day."
      },
      {
        "tr": "He must be tired: he drove for eight hours."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Grammar",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "tell the «deve» of obligation from the «deve» of inference",
      "use «può darsi che» with the subjunctive",
      "express an expectation with «dovrebbe»"
    ],
    "theory": [
      {
        "h": "One word, two entirely different jobs",
        "p": "<em>Devi essere puntuale</em> is an obligation. <em>Deve essere stanco</em> is an inference. The form is the same; what settles it is what stands next to it: an inference nearly always comes with its evidence («ha guidato tutta la notte»), an obligation with a deadline or a rule."
      },
      {
        "h": "Può darsi che takes the subjunctive",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> In conversation this is commoner than <em>è possibile che</em> and sounds less official. The indicative never follows <em>può darsi che</em>, not even when the thing is obvious."
      },
      {
        "h": "Dovrebbe: expectation, not duty",
        "p": "<em>Dovrebbe essere già arrivato</em> does not say anyone is obliged to arrive: it says that by the timetable he ought to be here. It is a point on a scale of confidence, above <em>potrebbe</em> and below <em>deve</em>."
      },
      {
        "contrast": "English maps onto this almost one for one: «he must be tired», «he should be there by now», «he can't be the one». The single gap is <em>può darsi che</em>, which English renders with «he may not have» or «it could be that» and which in Italian obligatorily drags the subjunctive behind it. Watch that one; the rest you can translate straight."
      }
    ],
    "grammar": {
      "title": "A scale of confidence",
      "note": "From the most certain down to ruling it out.",
      "table": {
        "head": [
          "construction",
          "mood",
          "what it means"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "high probability"
          ],
          [
            "devi essere",
            "indicativo",
            "obligation"
          ],
          [
            "potrebbe",
            "condizionale",
            "possibility"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "possibility, colloquial"
          ],
          [
            "dovrebbe",
            "condizionale",
            "expectation"
          ],
          [
            "non può essere",
            "indicativo",
            "ruling it out"
          ]
        ]
      },
      "examples": [
        {
          "tr": "He must be tired: he drove all night."
        },
        {
          "tr": "You have to be on time, the appointment is at nine."
        },
        {
          "tr": "He might arrive late, there's traffic."
        },
        {
          "tr": "It could be that he didn't get the message."
        },
        {
          "tr": "He should be here by now."
        },
        {
          "tr": "It can't be him: he's been on holiday for a week."
        }
      ]
    },
    "vocab": [
      "it could be that",
      "it's likely that",
      "it's unlikely that",
      "in all probability",
      "almost certainly",
      "to rule out",
      "unless",
      "barring surprises",
      "to presume",
      "to hazard a guess",
      "broadly speaking",
      "if I'm not mistaken"
    ],
    "exercises": [
      {
        "q": "«Deve essere stanco» means:",
        "opts": [
          "He has to be tired",
          "He must be tired",
          "He has to tire himself out"
        ]
      },
      {
        "q": "Fill in: «___ essere stanco: ha guidato tutta la notte.»"
      },
      {
        "q": "Fill in: «___ essere già arrivato a quest'ora.» (dovere, conditional)"
      },
      {
        "q": "«Può darsi che» is followed by:",
        "opts": [
          "the subjunctive",
          "the indicative",
          "the conditional"
        ]
      },
      {
        "q": "Which sentence rules the possibility out?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "It could be that he didn't get the message."
      },
      {
        "q": "«He must be tired.» (using dovere)"
      },
      {
        "q": "Match the constructions.",
        "tr": [
          "it could be that",
          "he should (expectation)",
          "to rule out",
          "barring surprises"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "He should be here by now, he left at six."
      },
      {
        "tr": "It could be that he changed his mind, it happens."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Grammar",
    "title": "Magari, mica, chissà",
    "objectives": [
      "tell the three uses of «magari» apart",
      "strengthen a negative with «mica»",
      "suspend judgement with «chissà» and «sarà…, ma»"
    ],
    "theory": [
      {
        "h": "Magari has three senses; the mood decides two of them",
        "p": "With the indicative: <em>magari piove</em> = «maybe it's raining». With the imperfect subjunctive: <em>magari potessi!</em> = «if only I could!». On its own, as an answer: <em>Vieni? Magari!</em> = «I'd love to!». Three different things, one word."
      },
      {
        "h": "Mica strengthens a negative",
        "p": "<em>Non è mica finita</em> is not «it hasn't finished» but «it hasn't finished at all», with a note of pushing back against what someone has just assumed. It sits after the verb and belongs to speech only: official writing does not use it."
      },
      {
        "h": "Suspending judgement: chissà and sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> says outright that we do not know. <em>Sarà, ma io non ci credo</em> is the polite way to disagree: first you grant the other person their view, then you carry on with yours. Extremely common and extremely Italian."
      },
      {
        "contrast": "English has no single word for <em>magari</em>: «maybe», «if only» and «I'd love to» are three different expressions, so you cannot carry the ambiguity across and have to read the verb, or notice that there is none. For <em>mica</em> the nearest thing is «not… at all» or a sharp «hardly», but English loses the specific edge of contradicting an assumption the other person has just made."
      }
    ],
    "grammar": {
      "title": "Words that modalise the sentence",
      "note": "The second column says what the word does to the sentence.",
      "table": {
        "head": [
          "word",
          "what it does",
          "example"
        ],
        "rows": [
          [
            "magari + indicativo",
            "maybe, probably",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "an impossible wish",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "I'd love to!",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "strengthens a negative",
            "Non è mica finita."
          ],
          [
            "chissà",
            "openly not knowing",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "polite disagreement",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "It might rain, better take an umbrella."
        },
        {
          "tr": "If only I could come too!"
        },
        {
          "tr": "Maybe we'll see each other tomorrow, I'll write."
        },
        {
          "tr": "It's not over at all, there are ten minutes left."
        },
        {
          "tr": "Who knows whether they remembered."
        },
        {
          "tr": "Well, maybe, but I don't believe it."
        }
      ]
    },
    "vocab": [
      "maybe, if only, I'd love to",
      "not at all",
      "who knows",
      "dunno",
      "of course",
      "go on, have a look",
      "well, maybe",
      "who can say",
      "if anything",
      "you never know",
      "your guess is as good as mine",
      "it may well be true, but"
    ],
    "exercises": [
      {
        "q": "«Magari piove» means:",
        "opts": [
          "I hope it rains",
          "Maybe it's raining",
          "If it rained"
        ]
      },
      {
        "q": "Fill in: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "Fill in: «___ se si sono ricordati.»"
      },
      {
        "q": "«Magari potessi venire!» is:",
        "opts": [
          "a guess",
          "an offer",
          "an impossible wish"
        ]
      },
      {
        "q": "«Mica» strengthens:",
        "opts": [
          "a negative",
          "a question",
          "an order"
        ]
      },
      {
        "q": "Put in the words.",
        "tr": "It's not over at all, there are ten minutes left. Who knows whether they noticed."
      },
      {
        "q": "«If only I could come too!»"
      },
      {
        "q": "Which words signal uncertainty?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "It's not at all certain that he'll come, yesterday he wasn't sure."
      },
      {
        "tr": "Who knows whether they noticed, nobody said anything."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Grammar",
    "title": "Test — Guessing out loud",
    "exercises": [
      {
        "q": "«Sarà stanco» means:",
        "opts": [
          "He will be tired",
          "He must be tired",
          "He gets tired"
        ]
      },
      {
        "q": "«Saranno le tre» is:",
        "opts": [
          "an estimate of the time",
          "a plan for three o'clock",
          "an order"
        ]
      },
      {
        "q": "Fill in: «Non risponde: ___ in riunione.» (essere, a guess)"
      },
      {
        "q": "Fill in: «___ il treno, di solito non fa tardi.» (perdere)"
      },
      {
        "q": "Fill in: «Non è ___ finita, mancano dieci minuti.»"
      },
      {
        "q": "A guess about the past is expressed with:",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "Which sentences are guesses?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "He's not answering: he must be in a meeting. It could be he'll call back later."
      },
      {
        "tr": "Something must have come up, he usually lets you know."
      },
      {
        "tr": "He should be at the office by now."
      }
    ]
  }
});
