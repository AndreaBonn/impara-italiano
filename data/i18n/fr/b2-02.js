/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/b2-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u05": {
    "title": "Discours rapporté",
    "grammarNote": "concordance · déixis · questions et ordres"
  },
  "lesson:b2-u05-l1": {
    "theme": "Grammaire",
    "title": "Du discours direct au discours rapporté",
    "objectives": [
      "reculer le temps après un verbe introducteur au passé",
      "choisir entre indicatif et subjonctif après «che»",
      "employer des verbes de parole autres que «dire»"
    ],
    "theory": [
      {
        "h": "Un verbe introducteur au passé recule tout d'un cran",
        "p": "<em>Ha detto: «Sono stanco»</em> → <em>Ha detto che <b>era</b> stanco.</em> Le présent passe à l'imperfetto, le passato prossimo au trapassato, le futur au conditionnel passé : <em>«Arriverò»</em> → <em>ha detto che <b>sarebbe arrivato</b></em>. Ce dernier est le seul vraiment surprenant : le futur vu du passé se dit <em>sarei arrivato</em>, pas <em>arriverei</em>."
      },
      {
        "h": "Ce qui ne bouge pas",
        "p": "Si le verbe introducteur est au présent (<em>dice che…</em>), rien ne change. Et si le contenu reste vrai, le recul est facultatif : <em>Ha detto che Roma <b>è</b> la capitale</em> sonne mieux que <em>era</em>."
      },
      {
        "h": "Che + indicatif ou subjonctif ?",
        "p": "C'est le verbe introducteur qui décide. <em>Dire, rispondere, spiegare, scrivere</em> appellent l'indicatif : <em>ha detto che <b>era</b> stanco</em>. <em>Sostenere, ritenere, negare</em> appellent le subjonctif : <em>sostiene che la pratica <b>sia</b> aperta</em>. Le second groupe marque une distance : « c'est lui qui le dit, je n'en réponds pas »."
      },
      {
        "contrast": "Le français fait la même concordance (« il a dit qu'il <b>était</b> fatigué »), donc cette partie ne vous coûtera rien. Le piège est ailleurs : le français a un subjonctif mais ne l'emploie pas après « soutenir que », alors que l'italien l'exige après <em>sostenere che</em>. La proximité des deux langues joue contre vous précisément ici."
      }
    ],
    "grammar": {
      "title": "La concordance",
      "note": "Après un verbe introducteur à un temps du passé.",
      "table": {
        "head": [
          "direct",
          "rapporté",
          "exemple"
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
            "imperfetto (inchangé)",
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
          "tr": "Il a dit : « Je suis fatigué » → Il a dit qu'il était fatigué."
        },
        {
          "tr": "Il m'a écrit qu'il arrivait le lendemain."
        },
        {
          "tr": "Il a répondu qu'il n'avait pas compris la question."
        },
        {
          "tr": "Il nous a expliqué qu'il appellerait lui-même le bureau."
        },
        {
          "tr": "Il a admis qu'il s'était trompé."
        },
        {
          "tr": "Il soutient que le dossier est encore ouvert."
        }
      ]
    },
    "vocab": [
      "rapporter",
      "soutenir",
      "admettre",
      "répliquer",
      "préciser",
      "ajouter",
      "démentir",
      "confirmer",
      "apparemment",
      "selon lui",
      "à l'en croire",
      "d'après"
    ],
    "exercises": [
      {
        "q": "«Sono stanco» rapporté après «ha detto che» :",
        "opts": [
          "ha detto che sono stanco",
          "ha detto che era stanco",
          "ha detto che sarebbe stanco"
        ]
      },
      {
        "q": "Complétez : «Ha detto che ___ stanco.» (essere)"
      },
      {
        "q": "Complétez : «Ha risposto che non ___ la domanda.» (capire)"
      },
      {
        "q": "«Arriverò domani» après «ha detto che» :",
        "opts": [
          "arriverà",
          "arriverebbe",
          "sarebbe arrivato"
        ]
      },
      {
        "q": "Mettez les formes correctes.",
        "tr": "Il a dit qu'il arrivait le lendemain et qu'il téléphonerait lui-même."
      },
      {
        "q": "« Il a dit qu'il était fatigué. »"
      },
      {
        "q": "Quel verbe exige le subjonctif ?",
        "opts": [
          "sostiene che",
          "ha detto che",
          "ha scritto che"
        ]
      },
      {
        "q": "Associez les verbes de parole.",
        "tr": [
          "démentir",
          "préciser",
          "répliquer",
          "soutenir"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il m'a écrit qu'il passerait au bureau le lendemain."
      },
      {
        "tr": "Il a admis qu'il s'était trompé et s'est excusé."
      }
    ]
  },
  "lesson:b2-u05-l2": {
    "theme": "Grammaire",
    "title": "Temps, lieu, personne",
    "objectives": [
      "déplacer les expressions de temps et de lieu",
      "remplacer «venire» par «andare» là où il le faut",
      "ajuster pronoms et possessifs"
    ],
    "theory": [
      {
        "h": "Les repères de temps se déplacent avec le verbe",
        "p": "<em>oggi</em> → <em>quel giorno</em>, <em>ieri</em> → <em>il giorno prima</em>, <em>domani</em> → <em>il giorno dopo</em> (ou <em>l'indomani</em>), <em>adesso</em> → <em>in quel momento</em> ou <em>allora</em>. La phrase reste compréhensible sans cela, mais elle sonne traduite."
      },
      {
        "h": "Lieu : qui → lì, questo → quello",
        "p": "La déixis part de là où se tenait celui qui parlait. Quand vous rapportez, il n'y est plus : <em>«Ci vediamo qui»</em> → <em>ha detto che ci saremmo visti <b>lì</b></em>. De même <em>questo</em> → <em>quello</em>, <em>questa volta</em> → <em>quella volta</em>."
      },
      {
        "h": "Venire et andare échangent leurs places",
        "p": "<em>venire</em> signifie « aller là où se trouve l'interlocuteur ». Rapporter déplace le point de référence : <em>«Vengo domani»</em> devient <em>ha detto che <b>sarebbe andato</b> il giorno dopo</em>. <em>portare</em> suit la même logique et devient <em>portare</em> ou <em>lasciare</em> selon la direction."
      },
      {
        "contrast": "Le français connaît « venir » et « aller » avec la même logique, donc ce point passe bien. En revanche « le lendemain » est neutre en français, alors que <em>l'indomani</em> appartient à un registre plus soutenu que <em>il giorno dopo</em> : à l'oral, préférez le second."
      }
    ],
    "grammar": {
      "title": "Déplacements déictiques",
      "note": "Quand vous rapportez des paroles dites ailleurs et à un autre moment.",
      "table": {
        "head": [
          "original",
          "rapporté",
          "remarque"
        ],
        "rows": [
          [
            "oggi",
            "quel giorno",
            "« ce jour-là »"
          ],
          [
            "ieri",
            "il giorno prima",
            "—"
          ],
          [
            "domani",
            "il giorno dopo / l'indomani",
            "le second est plus soutenu"
          ],
          [
            "qui",
            "lì",
            "le locuteur n'y est plus"
          ],
          [
            "questo",
            "quello",
            "—"
          ],
          [
            "venire",
            "andare",
            "le point de référence change"
          ]
        ]
      },
      "examples": [
        {
          "tr": "« Je viens demain » → Il a dit qu'il irait le lendemain."
        },
        {
          "tr": "« On se voit ici » → Il a dit qu'on se verrait là-bas."
        },
        {
          "tr": "« Je l'ai fait hier » → Il a dit qu'il l'avait fait la veille."
        },
        {
          "tr": "« Ça ne me plaît pas » → Il a dit que cela ne lui plaisait pas."
        },
        {
          "tr": "« Je rentre maintenant » → Il a dit qu'il rentrait à ce moment-là."
        },
        {
          "tr": "« Mon chef le sait » → Il a dit que son chef le savait."
        }
      ]
    },
    "vocab": [
      "la veille",
      "le lendemain",
      "deux jours plus tôt",
      "la semaine suivante",
      "à ce moment-là",
      "alors",
      "là-bas",
      "cela",
      "se rendre",
      "le lendemain (soutenu)",
      "peu avant",
      "peu après"
    ],
    "exercises": [
      {
        "q": "«Vengo domani» rapporté :",
        "opts": [
          "ha detto che veniva domani",
          "ha detto che sarebbe andato il giorno dopo",
          "ha detto che verrà domani"
        ]
      },
      {
        "q": "Complétez : «Ha detto che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Complétez : «Ha detto che ci saremmo visti ___.» (qui)"
      },
      {
        "q": "«L'ho fatto ieri» rapporté :",
        "opts": [
          "che l'aveva fatto ieri",
          "che lo faceva ieri",
          "che l'aveva fatto il giorno prima"
        ]
      },
      {
        "q": "Pourquoi «venire» devient-il «andare» ?",
        "opts": [
          "parce que cela sonne mieux",
          "parce que le point de référence change",
          "parce que «venire» n'a pas de conditionnel"
        ]
      },
      {
        "q": "Mettez les repères de temps.",
        "tr": "Il a dit qu'il l'avait fini la veille et qu'il reviendrait le lendemain."
      },
      {
        "q": "« Il a dit qu'il irait là-bas le lendemain. »"
      },
      {
        "q": "Quels déplacements sont corrects ?",
        "opts": [
          "oggi → quel giorno",
          "ieri → domani",
          "questo → quello"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il m'a dit qu'il irait là-bas le lendemain."
      },
      {
        "tr": "Il a expliqué que le lendemain il ne viendrait pas au bureau."
      }
    ]
  },
  "lesson:b2-u05-l3": {
    "theme": "Grammaire",
    "title": "Questions et ordres rapportés",
    "objectives": [
      "rapporter une question fermée avec «se»",
      "rapporter une question ouverte",
      "transformer l'impératif en «di» + infinitif"
    ],
    "theory": [
      {
        "h": "Questions fermées : se",
        "p": "<em>«Vieni?»</em> → <em>Mi ha chiesto <b>se</b> venivo.</em> Sans point d'interrogation et sans inversion : ce n'est plus une question, c'est une subordonnée. Ce <em>se</em> n'a rien à voir avec la condition."
      },
      {
        "h": "Questions ouvertes : le mot interrogatif reste",
        "p": "<em>«Dove abiti?»</em> → <em>Mi ha chiesto dove abitavo</em> (courant) ou <em>dove <b>abitassi</b></em> (plus soigné). Le subjonctif après une interrogative indirecte relève du registre, pas de l'obligation — mais dans l'écrit administratif, c'est celui-là que vous rencontrerez."
      },
      {
        "h": "Ordres : di + infinitif",
        "p": "<em>«Aspetta!»</em> → <em>Mi ha detto <b>di aspettare</b>.</em> La négation précède l'infinitif : <em>mi ha detto <b>di non</b> firmare</em>. Même schéma après <em>raccomandare, consigliare, pregare, ordinare, vietare</em>."
      },
      {
        "contrast": "Le français rapporte l'ordre exactement comme l'italien, avec « de » + infinitif : « il m'a dit <b>d'attendre</b> ». C'est le seul point de cette unité où vous n'avez rien à apprendre. Attention tout de même à la négation : le français dit « de ne pas signer », l'italien <em>di non firmare</em>, avec un seul élément négatif."
      }
    ],
    "grammar": {
      "title": "Questions et ordres",
      "note": "Trois schémas couvrent presque tout.",
      "table": {
        "head": [
          "original",
          "rapporté",
          "schéma"
        ],
        "rows": [
          [
            "«Vieni?»",
            "mi ha chiesto se venivo",
            "chiedere se + indicatif"
          ],
          [
            "«Dove abiti?»",
            "mi ha chiesto dove abitassi",
            "mot interrogatif + subjonctif (soutenu)"
          ],
          [
            "«Aspetta!»",
            "mi ha detto di aspettare",
            "di + infinitif"
          ],
          [
            "«Non firmare»",
            "mi ha detto di non firmare",
            "di non + infinitif"
          ]
        ]
      },
      "examples": [
        {
          "tr": "« Tu viens ? » → Il m'a demandé si je venais."
        },
        {
          "tr": "« Où habites-tu ? » → Il m'a demandé où j'habitais."
        },
        {
          "tr": "« Attends ! » → Il m'a dit d'attendre."
        },
        {
          "tr": "« Ne signe pas » → Il m'a recommandé de ne pas signer."
        },
        {
          "tr": "« Qu'est-ce que tu veux ? » → Il voulait savoir ce que je voulais."
        },
        {
          "tr": "« Tu peux m'aider ? » → Il a demandé si je pouvais l'aider."
        }
      ]
    },
    "vocab": [
      "demander si",
      "vouloir savoir",
      "s'enquérir",
      "inviter à",
      "recommander",
      "ordonner",
      "proposer",
      "conseiller",
      "suggérer",
      "prier de",
      "interdire",
      "insister pour que"
    ],
    "exercises": [
      {
        "q": "«Vieni?» rapporté :",
        "opts": [
          "mi ha chiesto vieni",
          "mi ha chiesto se venivo",
          "mi ha chiesto che venivo"
        ]
      },
      {
        "q": "Complétez : «Mi ha chiesto ___ avevo capito.»"
      },
      {
        "q": "Complétez : «Mi ha detto ___.» (aspettare)"
      },
      {
        "q": "«Non firmare» rapporté :",
        "opts": [
          "mi ha detto di non firmare",
          "mi ha detto che non firmavo",
          "mi ha detto non firmare"
        ]
      },
      {
        "q": "Quel registre est le plus soigné ?",
        "opts": [
          "dove abitavo",
          "dove abiti",
          "dove abitassi"
        ]
      },
      {
        "q": "Mettez les formes correctes.",
        "tr": "Il m'a demandé si j'avais compris et m'a dit de rappeler plus tard."
      },
      {
        "q": "« Il m'a demandé si je venais. »"
      },
      {
        "q": "Associez les verbes.",
        "tr": [
          "recommander",
          "interdire",
          "suggérer",
          "prier"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "L'employé m'a demandé si j'avais apporté mon code fiscal."
      },
      {
        "tr": "Il m'a recommandé de ne rien signer sans lire."
      }
    ]
  },
  "lesson:b2-u05-test": {
    "theme": "Grammaire",
    "title": "Test — Discours rapporté",
    "exercises": [
      {
        "q": "«Ho finito» après «ha detto che» :",
        "opts": [
          "ha finito",
          "aveva finito",
          "avrebbe finito"
        ]
      },
      {
        "q": "«Verrò» après «ha detto che» :",
        "opts": [
          "verrà",
          "verrebbe",
          "sarebbe venuto"
        ]
      },
      {
        "q": "Complétez : «Disse che ___ stanco.» (essere)"
      },
      {
        "q": "Complétez : «Disse che sarebbe tornato ___.» (domani)"
      },
      {
        "q": "Complétez : «Mi chiese ___ ero pronto.»"
      },
      {
        "q": "Un ordre rapporté se construit avec :",
        "opts": [
          "di + infinitif",
          "che + subjonctif",
          "l'impératif inchangé"
        ]
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Mi ha detto che aspettassi.",
          "Mi ha detto di aspettare.",
          "Mi ha chiesto se venivo."
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Il a dit qu'il était fatigué et qu'il reviendrait le lendemain."
      },
      {
        "tr": "Il a répondu qu'il n'avait reçu aucune convocation."
      },
      {
        "tr": "Il m'a demandé si j'avais déjà envoyé la demande."
      }
    ]
  }
});
