/* ============================================================
   Student-language texts (en) for data/core/c1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u05": {
    "title": "Clauses without a finite verb",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Grammar",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "replace a subordinate clause with the gerund",
      "tell the present gerund from the past gerund",
      "recognise the four meanings the gerund can carry"
    ],
    "theory": [
      {
        "h": "One form, four meanings",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> can mean «as I was leaving» (time), «because I was leaving» (cause), «by leaving» (manner) or «if I left» (condition). Italian does not mark which; the content of the two halves decides, and in practice only one reading makes sense."
      },
      {
        "h": "The past gerund pushes the action back",
        "p": "<em>Avendo finito presto, siamo andati al mare</em>: first we finished, then we went. Without <em>avendo</em> the two actions would be simultaneous. This is the one thing the form of the gerund genuinely settles, so it is worth watching."
      },
      {
        "h": "What it buys you",
        "p": "<em>Siccome avevamo finito presto, siamo andati al mare</em> is correct and four words longer. Italian writing at C1 swaps one for the other several times a page; a learner who never does it writes correctly and heavily, and that is the single difference a teacher spots at once."
      },
      {
        "contrast": "English has the same construction and calls it the dangling participle when it goes wrong: «Leaving the house, I met Marta». You know the mechanism. Two differences: English cannot do the past form as compactly (there is «having finished», but it is markedly formal, whereas <em>avendo finito</em> is neutral), and English tends to prefer a full clause where Italian reaches for the gerund."
      }
    ],
    "grammar": {
      "title": "The gerund in place of a clause",
      "note": "The third column says what the sentence carries.",
      "table": {
        "head": [
          "construction",
          "form",
          "what it carries"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "simultaneity, cause, manner"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "an earlier action"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "concession"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "manner, a general truth"
          ],
          [
            "Essendo domenica…",
            "gerundio di essere",
            "cause"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Leaving the house, I ran into Marta."
        },
        {
          "tr": "Having finished early, we went to the seaside."
        },
        {
          "tr": "Although he knew it, he said nothing."
        },
        {
          "tr": "You learn by making mistakes."
        },
        {
          "tr": "Being a Sunday, the shops were shut."
        },
        {
          "tr": "Once the news was published, the price collapsed."
        }
      ]
    },
    "vocab": [
      "the gerund",
      "a non-finite clause",
      "the understood subject",
      "simultaneous",
      "earlier",
      "cause",
      "manner",
      "condition",
      "to leave understood",
      "to govern",
      "to lighten",
      "to weigh down"
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» means:",
        "opts": [
          "I'll leave the house and meet Marta",
          "Leaving the house, I ran into Marta",
          "If I left, I'd meet Marta"
        ]
      },
      {
        "q": "Fill in: «___ di casa, ho incontrato Marta.» (uscire, gerund)"
      },
      {
        "q": "Fill in: «___ presto, siamo andati al mare.» (finire, past gerund)"
      },
      {
        "q": "«Avendo finito presto» expresses:",
        "opts": [
          "an earlier action",
          "a simultaneous action",
          "a condition"
        ]
      },
      {
        "q": "«Pur sapendolo» means:",
        "opts": [
          "knowing it",
          "not knowing it",
          "although he knew it"
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "Leaving the house, I ran into Marta. Having finished early, we went to the seaside."
      },
      {
        "q": "«You learn by making mistakes.»"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "Having read the contract, I asked for two points to be changed."
      },
      {
        "tr": "Leaving the office, I realised I had left the keys inside."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Grammar",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "shorten a time clause with the past participle",
      "use «dopo aver» and «prima di» with the infinitive",
      "make the participle agree with the right word"
    ],
    "theory": [
      {
        "h": "The participle at the head of the sentence",
        "p": "<em>Finito il lavoro, siamo usciti</em> = «once the work was finished, we left». The participle agrees with whatever it is about: with <em>lavoro</em> in <em>finito il lavoro</em>, but with us in <em>arrivati a Roma</em>, because <em>arrivare</em> goes with <em>essere</em>. That is the only hard part of this lesson."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "After <em>dopo</em> comes the perfect infinitive: <em>dopo aver letto</em>, never <em>dopo leggere</em>. After <em>prima di</em>, the plain infinitive: <em>prima di rispondere</em>. <em>Nel</em> + infinitive means «at the moment of»: <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + participle",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Very common and very convenient, because it needs neither a conjunction nor a tense. It works for lasting things too: <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "English says «after reading the contract», with an -ing form where Italian takes an infinitive. Carrying that habit across produces <em>dopo leggendo</em>, which is simply wrong, and it is the single most frequent English-speaker's mistake in this area. The rule has no exceptions: <em>dopo</em> + <em>aver</em> + past participle."
      }
    ],
    "grammar": {
      "title": "Shortening a time clause",
      "note": "The third column says when to use the form.",
      "table": {
        "head": [
          "construction",
          "form",
          "when"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "action completed before the main one"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "agreement with the subject"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "after something"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "before something"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "at the moment of"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "once something has happened"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Once the work was done, we left."
        },
        {
          "tr": "Having arrived in Rome, we looked for a hotel."
        },
        {
          "tr": "After reading the contract, he signed."
        },
        {
          "tr": "Before answering, he thought about it for two days."
        },
        {
          "tr": "As he said this, he stood up."
        },
        {
          "tr": "Once the shop closes, the street empties."
        }
      ]
    },
    "vocab": [
      "the past participle",
      "the perfect infinitive",
      "the subordinate clause",
      "once",
      "after doing",
      "before",
      "at the moment of",
      "at the point of",
      "to agree",
      "to precede",
      "to follow",
      "to slim down"
    ],
    "exercises": [
      {
        "q": "In «Finito il lavoro, siamo usciti», «finito» refers to:",
        "opts": [
          "us",
          "the work",
          "the leaving"
        ]
      },
      {
        "q": "Fill in: «___ il lavoro, siamo usciti.» (finire, participle)"
      },
      {
        "q": "Fill in: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "After «dopo» the shortened form takes:",
        "opts": [
          "the gerund",
          "the participle",
          "the perfect infinitive"
        ]
      },
      {
        "q": "«Prima di» is followed by:",
        "opts": [
          "the infinitive",
          "the gerund",
          "the participle"
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "Once the work was done, we left. After reading the contract, he signed."
      },
      {
        "q": "«After reading the contract, he signed.»"
      },
      {
        "q": "Match the constructions.",
        "tr": [
          "once the work was done",
          "after reading",
          "before answering",
          "once it had closed"
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "Once the shop closes, the street empties within minutes."
      },
      {
        "tr": "Before answering, he thought about it for two whole days."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Grammar",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "check whether both halves share a subject",
      "spot a sentence the shortcut makes ambiguous",
      "pick the conjunction when the shortcut will not do"
    ],
    "theory": [
      {
        "h": "One rule, no exceptions",
        "p": "The shortened form takes its subject from the main clause. If the subjects differ, the sentence says something other than you meant: <em>Uscendo di casa, mia madre mi ha chiamato</em> says it was your mother who was leaving. English calls this a dangling participle and dislikes it just as much."
      },
      {
        "h": "Two ways out",
        "p": "You can give the gerund its own subject: <em>Avendo io firmato, la pratica è partita</em>. That sounds official and does not occur in speech. The other way out is the ordinary one: a conjunction and a finite verb — <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Impersonal verbs are safe",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em>: these have no personal subject, so they cannot clash with anything. That is why <em>Essendo tardi, abbiamo rimandato la riunione</em> is correct even though «we» is not the subject of <em>essere tardi</em>."
      },
      {
        "contrast": "Here English and Italian agree exactly, which makes this the cheapest lesson in the unit: a dangling participle is wrong in both. The difference is tolerance. English speech lets them pass constantly («walking home, the rain started»), while in an Italian written exam they are marked as a syntax error, not as a slip of style."
      }
    ],
    "grammar": {
      "title": "When the shortcut works and when it does not",
      "note": "The third column says what to do.",
      "table": {
        "head": [
          "situation",
          "what is allowed",
          "what to do"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "the shortcut works"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "the shortcut changes the meaning, use a conjunction"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "the shortcut is safe"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "correct but officialese"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "a conjunction sounds more natural"
          ]
        ]
      },
      "examples": [
        {
          "tr": "As I was leaving, my mother called me."
        },
        {
          "tr": "Since it was late, we put the meeting off."
        },
        {
          "tr": "Since it was late, Marco put the meeting off."
        },
        {
          "tr": "After the director signed, the file moved."
        },
        {
          "tr": "Once the meeting was over, the director left."
        },
        {
          "tr": "Since it was I who signed, the file moved."
        }
      ]
    },
    "vocab": [
      "the subject",
      "to coincide",
      "explicit",
      "understood",
      "ambiguous",
      "a misunderstanding",
      "since",
      "given that",
      "after",
      "while",
      "to refer to",
      "to clear up"
    ],
    "exercises": [
      {
        "q": "When can the shortened form NOT be used?",
        "opts": [
          "When both halves share a subject",
          "When the subjects differ",
          "It can always be used"
        ]
      },
      {
        "q": "Fill in: «___ era tardi, Marco ha rimandato la riunione.» (conjunction of cause)"
      },
      {
        "q": "Fill in: «___ uscivo, mia madre mi ha chiamato.» (conjunction of time)"
      },
      {
        "q": "Why is «Essendo tardi, abbiamo rimandato» correct?",
        "opts": [
          "«essere tardi» has no personal subject",
          "the gerund always works",
          "it is a past tense"
        ]
      },
      {
        "q": "When the subjects differ, you write the sentence with:",
        "opts": [
          "the gerund",
          "the participle",
          "a conjunction and a finite verb"
        ]
      },
      {
        "q": "Put in the conjunctions.",
        "tr": "Since it was late, Marco put the meeting off. As I was leaving, my mother called me."
      },
      {
        "q": "«Since it was late, we put the meeting off.»"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Build the sentence."
      },
      {
        "tr": "Since the director was on holiday, the file sat still."
      },
      {
        "tr": "While I was on the phone, the courier arrived."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Exam",
    "title": "Final exam, level C1",
    "objectives": [
      "test impersonal si, pronominal verbs, register, inference and non-finite clauses"
    ],
    "theory": [
      {
        "p": "Twelve tasks drawn from the whole of C1. You pass at 70%."
      }
    ],
    "exercises": [
      {
        "q": "«Uscendo di casa, ho incontrato Marta» means:",
        "opts": [
          "I'll leave the house and meet Marta",
          "Leaving the house, I ran into Marta",
          "If I left, I'd meet Marta"
        ]
      },
      {
        "q": "Fill in: «___ presto, siamo andati al mare.» (finire, past gerund)"
      },
      {
        "q": "Fill in: «Dopo ___ il contratto, ha firmato.» (leggere)"
      },
      {
        "q": "«Avendo finito presto» expresses:",
        "opts": [
          "an earlier action",
          "a simultaneous action",
          "a condition"
        ]
      },
      {
        "q": "Fill in: «___ era tardi, Marco ha rimandato la riunione.»"
      },
      {
        "q": "When the subjects differ, you write the sentence with:",
        "opts": [
          "the gerund",
          "the participle",
          "a conjunction and a finite verb"
        ]
      },
      {
        "q": "Fill in: «Non risponde: ___ ancora in riunione.» (essere, a guess)"
      },
      {
        "q": "Which sentences are correct?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Put in the forms.",
        "tr": "Once the work was done, we left; since it was late, we took a taxi."
      },
      {
        "q": "«After reading the contract, he signed.»"
      },
      {
        "tr": "Once the file is closed, the office sends a written notice."
      },
      {
        "tr": "Having worked here for three years, I know how it runs."
      }
    ]
  }
});
