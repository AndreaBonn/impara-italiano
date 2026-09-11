/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/c1-02.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u04": {
    "title": "La supposition",
    "grammarNote": "sarà stanco · deve essere · magari, mica, chissà"
  },
  "lesson:c1-u04-l1": {
    "theme": "Grammaire",
    "title": "Il futuro che non parla del futuro",
    "objectives": [
      "reconnaître le futur employé comme supposition",
      "utiliser le futur antérieur pour supposer au passé",
      "estimer une heure, un âge ou une quantité au futur"
    ],
    "theory": [
      {
        "h": "« Sarà stanco » ne parle pas de l'avenir",
        "p": "La phrase signifie <b>il doit être fatigué</b>, non « il sera fatigué ». L'italien se sert du futur pour dire qu'il ne sait pas avec certitude. Un vrai futur et une supposition ont exactement la même forme ; c'est le contexte qui tranche, le plus souvent un indice visible maintenant."
      },
      {
        "h": "La supposition au passé prend le futur antérieur",
        "p": "<em>Avrà perso il treno</em> = « il a dû rater son train ». La forme qui signifie normalement « il aura fini d'ici là » recule ici la supposition dans le passé. Un Italien fait la différence sans y penser, parce que la phrase ne nomme aucun moment à venir."
      },
      {
        "h": "Estimer : l'heure, l'âge, la quantité",
        "p": "<em>Saranno le tre</em>, <em>ne avrà quaranta</em>, <em>saranno dieci chilometri</em>. C'est l'usage le plus courant dans la conversation et le plus facile à attraper : quand quelqu'un donne un chiffre qu'il n'a pas vérifié, il le met presque toujours au futur."
      },
      {
        "contrast": "Le français connaît ce futur (« ce sera le facteur »), mais il est rare et pratiquement limité à l'identification ; pour le reste on passe par « devoir » ou par « sans doute ». En italien c'est l'inverse : le futur est la façon ordinaire de supposer n'importe quoi, y compris l'âge de quelqu'un. Traduisez donc <em>sarà stanco</em> par « il doit être fatigué », jamais par « il sera fatigué »."
      }
    ],
    "grammar": {
      "title": "Le futur comme supposition",
      "note": "La troisième colonne dit ce que la phrase fait réellement.",
      "table": {
        "head": [
          "phrase",
          "forme",
          "ce qu'elle fait"
        ],
        "rows": [
          [
            "Sarà stanco.",
            "futuro semplice",
            "supposition sur le présent"
          ],
          [
            "Avrà perso il treno.",
            "futuro anteriore",
            "supposition sur le passé"
          ],
          [
            "Saranno le tre.",
            "futuro semplice",
            "estimation d'heure ou de quantité"
          ],
          [
            "Sarà anche bravo, ma…",
            "futuro concessivo",
            "concession ironique"
          ],
          [
            "Domani sarà a Roma.",
            "futuro semplice",
            "futur réel"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Il ne répond pas : il doit être encore en réunion."
        },
        {
          "tr": "Quelle heure est-il ? Il doit être trois heures passées."
        },
        {
          "tr": "Il a dû rater son train, d'habitude il n'est pas en retard."
        },
        {
          "tr": "Quel âge a-t-il ? Dans les quarante ans."
        },
        {
          "tr": "Je ne l'ai pas vu : il a dû partir plus tôt."
        },
        {
          "tr": "Il est peut-être bon, mais il ne me convainc pas."
        }
      ]
    },
    "vocab": [
      "la supposition",
      "probablement",
      "vraisemblablement",
      "à vue de nez",
      "j'imagine",
      "il doit être",
      "il a dû",
      "qui sait",
      "tenir pour acquis",
      "tenter une réponse au hasard",
      "avoir l'impression",
      "au jugé"
    ],
    "exercises": [
      {
        "q": "Que signifie « Sarà stanco » ?",
        "opts": [
          "Il sera fatigué (futur)",
          "Il doit être fatigué",
          "Il était fatigué"
        ]
      },
      {
        "q": "Complétez : « Non risponde: ___ ancora in riunione. » (essere, supposition)"
      },
      {
        "q": "Complétez : « ___ il treno, di solito non fa tardi. » (perdere, futur antérieur)"
      },
      {
        "q": "« Saranno le tre » est :",
        "opts": [
          "une estimation de l'heure",
          "un plan pour trois heures",
          "un ordre"
        ]
      },
      {
        "q": "Avec quel temps l'italien suppose-t-il au passé ?",
        "opts": [
          "imperfetto",
          "passato prossimo",
          "futuro anteriore"
        ]
      },
      {
        "q": "Mettez les formes de supposition.",
        "tr": "Il ne répond pas : il doit être encore en réunion. Ou il a dû oublier son téléphone."
      },
      {
        "q": "« Il doit être trois heures, voire un peu plus. »"
      },
      {
        "q": "Quelles phrases sont des suppositions ?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà quarant'anni."
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il ne t'a pas rappelé ? Il a dû avoir une journée compliquée."
      },
      {
        "tr": "Il doit être fatigué : il a conduit pendant huit heures."
      }
    ]
  },
  "lesson:c1-u04-l2": {
    "theme": "Grammaire",
    "title": "Dovere e potere: obbligo o probabilità",
    "objectives": [
      "distinguer le « deve » d'obligation du « deve » de supposition",
      "employer « può darsi che » avec le subjonctif",
      "exprimer une attente avec « dovrebbe »"
    ],
    "theory": [
      {
        "h": "Le même mot, deux emplois tout à fait différents",
        "p": "<em>Devi essere puntuale</em> est une obligation. <em>Deve essere stanco</em> est une déduction. La forme est identique ; ce qui tranche, c'est ce qui l'accompagne : la déduction vient presque toujours avec son indice (« ha guidato tutta la notte »), l'obligation avec une échéance ou une règle."
      },
      {
        "h": "Può darsi che demande le subjonctif",
        "p": "<em>Può darsi che non <b>abbia</b> ricevuto il messaggio.</em> À l'oral c'est plus courant que <em>è possibile che</em> et cela sonne moins administratif. Après <em>può darsi che</em>, jamais d'indicatif, même quand la chose est évidente."
      },
      {
        "h": "Dovrebbe : attente, non devoir",
        "p": "<em>Dovrebbe essere già arrivato</em> ne dit pas que quelqu'un a l'obligation d'arriver : cela dit que, d'après l'horaire, il devrait déjà être là. C'est un point sur une échelle de certitude, au-dessus de <em>potrebbe</em> et au-dessous de <em>deve</em>."
      },
      {
        "contrast": "Le français fait exactement la même chose avec « devoir » (« il doit être fatigué ») et avec « devrait », donc le mécanisme vous est acquis. Le piège est <em>potere</em> : « il peut être fatigué » ne se dit pas pour une probabilité en français, on passe par « il se peut qu'il soit fatigué ». C'est précisément ce que fait <em>può darsi che</em> + subjonctif, structure pour structure."
      }
    ],
    "grammar": {
      "title": "Échelle de certitude",
      "note": "Du plus sûr jusqu'à l'exclusion.",
      "table": {
        "head": [
          "construction",
          "mode",
          "ce que cela signifie"
        ],
        "rows": [
          [
            "deve essere",
            "indicativo",
            "forte probabilité"
          ],
          [
            "devi essere",
            "indicativo",
            "obligation"
          ],
          [
            "potrebbe",
            "condizionale",
            "possibilité"
          ],
          [
            "può darsi che",
            "+ congiuntivo",
            "possibilité, registre oral"
          ],
          [
            "dovrebbe",
            "condizionale",
            "attente"
          ],
          [
            "non può essere",
            "indicativo",
            "exclusion"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Il doit être fatigué : il a conduit toute la nuit."
        },
        {
          "tr": "Tu dois être à l'heure, le rendez-vous est à neuf heures."
        },
        {
          "tr": "Il pourrait arriver en retard, il y a des embouteillages."
        },
        {
          "tr": "Il se peut qu'il n'ait pas reçu le message."
        },
        {
          "tr": "Il devrait déjà être là à cette heure-ci."
        },
        {
          "tr": "Ce ne peut pas être lui : il est en vacances depuis une semaine."
        }
      ]
    },
    "vocab": [
      "il se peut que",
      "il est probable que",
      "il est peu probable que",
      "selon toute probabilité",
      "presque à coup sûr",
      "exclure",
      "à moins que",
      "sauf imprévu",
      "présumer",
      "hasarder une hypothèse",
      "dans les grandes lignes",
      "si je ne me trompe"
    ],
    "exercises": [
      {
        "q": "« Deve essere stanco » signifie :",
        "opts": [
          "Il a l'obligation d'être fatigué",
          "Il doit être fatigué",
          "Il doit se fatiguer"
        ]
      },
      {
        "q": "Complétez : « ___ essere stanco: ha guidato tutta la notte. »"
      },
      {
        "q": "Complétez : « ___ essere già arrivato a quest'ora. » (dovere, conditionnel)"
      },
      {
        "q": "Après « può darsi che » vient :",
        "opts": [
          "le subjonctif",
          "l'indicatif",
          "le conditionnel"
        ]
      },
      {
        "q": "Quelle phrase exclut la possibilité ?",
        "opts": [
          "Potrebbe arrivare tardi.",
          "Dovrebbe essere arrivato.",
          "Non può essere lui."
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Il se peut qu'il n'ait pas reçu le message."
      },
      {
        "q": "« Il doit être fatigué. » (avec dovere)"
      },
      {
        "q": "Associez les constructions.",
        "tr": [
          "il se peut que",
          "il devrait (attente)",
          "exclure",
          "sauf imprévu"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il devrait déjà être là, il est parti à six heures."
      },
      {
        "tr": "Il se peut qu'il ait changé d'avis, cela arrive."
      }
    ]
  },
  "lesson:c1-u04-l3": {
    "theme": "Grammaire",
    "title": "Magari, mica, chissà",
    "objectives": [
      "distinguer les trois emplois de « magari »",
      "renforcer la négation avec « mica »",
      "suspendre son jugement avec « chissà » et « sarà…, ma »"
    ],
    "theory": [
      {
        "h": "Magari a trois sens, et le mode en tranche deux",
        "p": "Avec l'indicatif : <em>magari piove</em> = « il pleut peut-être ». Avec le subjonctif imparfait : <em>magari potessi!</em> = « si seulement je pouvais ! ». Seul, en réponse : <em>Vieni? Magari!</em> = « avec plaisir ! ». Trois choses différentes, un seul mot."
      },
      {
        "h": "Mica renforce la négation",
        "p": "<em>Non è mica finita</em> n'est pas « ce n'est pas fini » mais « ce n'est pas fini du tout », avec une nuance de contestation de ce que l'autre vient de tenir pour acquis. Il se place après le verbe et appartient uniquement à l'oral."
      },
      {
        "h": "Suspendre son jugement : chissà et sarà…, ma",
        "p": "<em>Chissà se si sono ricordati</em> dit ouvertement qu'on ne sait pas. <em>Sarà, ma io non ci credo</em> est la façon polie de ne pas être d'accord : on concède d'abord à l'autre son point de vue, puis on continue avec le sien. Très fréquent et très italien."
      },
      {
        "contrast": "Un point d'histoire utile : <em>mica</em> vient de « miette », exactement comme le « pas » français vient du pas qu'on fait en marchant. Les deux langues ont renforcé la négation avec un petit nom concret ; le français a fini par en faire la négation ordinaire, l'italien a gardé <em>mica</em> comme renfort facultatif. Pour <em>magari</em>, en revanche, il faut trois expressions : « peut-être », « si seulement », « avec plaisir »."
      }
    ],
    "grammar": {
      "title": "Mots qui modalisent la phrase",
      "note": "La deuxième colonne dit ce que le mot fait à la phrase.",
      "table": {
        "head": [
          "mot",
          "ce qu'il fait",
          "exemple"
        ],
        "rows": [
          [
            "magari + indicativo",
            "peut-être, probablement",
            "Magari piove."
          ],
          [
            "magari + congiuntivo imperfetto",
            "souhait irréel",
            "Magari potessi!"
          ],
          [
            "magari (da solo)",
            "avec plaisir !",
            "Vieni? Magari!"
          ],
          [
            "mica",
            "renforce la négation",
            "Non è mica finita."
          ],
          [
            "chissà",
            "avouer qu'on ne sait pas",
            "Chissà se arriva."
          ],
          [
            "sarà…, ma",
            "désaccord poli",
            "Sarà, ma non ci credo."
          ]
        ]
      },
      "examples": [
        {
          "tr": "Il pleut peut-être, prends plutôt un parapluie."
        },
        {
          "tr": "Si seulement je pouvais venir moi aussi !"
        },
        {
          "tr": "On se voit peut-être demain, je t'écris."
        },
        {
          "tr": "Ce n'est pas fini du tout, il reste dix minutes."
        },
        {
          "tr": "Qui sait s'ils s'en sont souvenus."
        },
        {
          "tr": "Mouais, peut-être, mais moi je n'y crois pas."
        }
      ]
    },
    "vocab": [
      "peut-être, si seulement, avec plaisir",
      "pas du tout",
      "qui sait",
      "aucune idée",
      "bien sûr",
      "vois voir",
      "mouais, peut-être",
      "allez savoir",
      "à la rigueur",
      "on ne sait jamais",
      "va savoir",
      "c'est peut-être vrai, mais"
    ],
    "exercises": [
      {
        "q": "« Magari piove » signifie :",
        "opts": [
          "Pourvu qu'il pleuve",
          "Il pleut peut-être",
          "S'il pleuvait"
        ]
      },
      {
        "q": "Complétez : « Non è ___ finita, mancano dieci minuti. »"
      },
      {
        "q": "Complétez : « ___ se si sono ricordati. »"
      },
      {
        "q": "« Magari potessi venire! » est :",
        "opts": [
          "une supposition",
          "une proposition",
          "un souhait irréel"
        ]
      },
      {
        "q": "« Mica » renforce :",
        "opts": [
          "la négation",
          "la question",
          "l'ordre"
        ]
      },
      {
        "q": "Mettez les mots.",
        "tr": "Ce n'est pas fini du tout, il reste dix minutes. Qui sait s'ils s'en sont aperçus."
      },
      {
        "q": "« Si seulement je pouvais venir moi aussi ! »"
      },
      {
        "q": "Quels mots signalent l'incertitude ?",
        "opts": [
          "chissà",
          "boh",
          "vai a sapere",
          "certamente"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Il n'est pas du tout dit qu'il vienne, hier il n'était pas sûr."
      },
      {
        "tr": "Qui sait s'ils s'en sont aperçus, personne n'a rien dit."
      }
    ]
  },
  "lesson:c1-u04-test": {
    "theme": "Grammaire",
    "title": "Test — La supposition",
    "exercises": [
      {
        "q": "« Sarà stanco » signifie :",
        "opts": [
          "Il sera fatigué",
          "Il doit être fatigué",
          "Il est souvent fatigué"
        ]
      },
      {
        "q": "« Saranno le tre » est :",
        "opts": [
          "une estimation de l'heure",
          "un plan pour trois heures",
          "un ordre"
        ]
      },
      {
        "q": "Complétez : « Non risponde: ___ in riunione. » (essere, supposition)"
      },
      {
        "q": "Complétez : « ___ il treno, di solito non fa tardi. » (perdere)"
      },
      {
        "q": "Complétez : « Non è ___ finita, mancano dieci minuti. »"
      },
      {
        "q": "La supposition sur le passé s'exprime avec :",
        "opts": [
          "imperfetto",
          "condizionale",
          "futuro anteriore"
        ]
      },
      {
        "q": "Quelles phrases sont des suppositions ?",
        "opts": [
          "Sarà stanco.",
          "Domani sarà a Roma.",
          "Avrà perso il treno."
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Il ne répond pas : il doit être en réunion. Il se peut qu'il rappelle plus tard."
      },
      {
        "tr": "Il a dû avoir un contretemps, d'habitude il prévient."
      },
      {
        "tr": "Il devrait déjà être au bureau à cette heure-ci."
      }
    ]
  }
});
