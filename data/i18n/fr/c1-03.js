/* ============================================================
   Textes dans la langue de l'apprenant (fr) pour data/core/c1-03.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u05": {
    "title": "Des phrases sans verbe conjugué",
    "grammarNote": "gerundio · participio · dopo aver"
  },
  "lesson:c1-u05-l1": {
    "theme": "Grammaire",
    "title": "Il gerundio che sostituisce una frase",
    "objectives": [
      "remplacer une subordonnée par le gérondif",
      "distinguer le gérondif simple du gérondif composé",
      "reconnaître les quatre valeurs que le gérondif peut porter"
    ],
    "theory": [
      {
        "h": "Une forme, quatre valeurs",
        "p": "<em>Uscendo di casa, ho incontrato Marta</em> peut vouloir dire « en sortant » (temps), « comme je sortais » (cause), « en sortant ainsi » (manière) ou « si je sortais » (condition). L'italien ne marque rien : c'est le contenu des deux moitiés qui tranche, et dans les faits une seule lecture tient debout."
      },
      {
        "h": "Le gérondif composé recule l'action",
        "p": "<em>Avendo finito presto, siamo andati al mare</em> : d'abord nous avons fini, ensuite nous sommes partis. Sans <em>avendo</em> les deux actions seraient simultanées. C'est la seule chose que la forme du gérondif tranche vraiment, donc il faut la regarder."
      },
      {
        "h": "Ce que cela vous rapporte",
        "p": "<em>Siccome avevamo finito presto, siamo andati al mare</em> est correct et plus long de quatre mots. Un texte italien de niveau C1 échange l'un contre l'autre plusieurs fois par page ; celui qui ne le fait jamais écrit juste et lourd, et c'est la seule différence qu'un enseignant repère immédiatement."
      },
      {
        "contrast": "Le français a « en sortant », le gérondif avec « en », et c'est bien le même outil. Deux écarts : le français exige ce « en » alors que l'italien n'a rien devant le gérondif, et surtout le français n'a pas de gérondif composé courant (« ayant fini » est un participe et sonne littéraire), là où <em>avendo finito</em> est parfaitement ordinaire."
      }
    ],
    "grammar": {
      "title": "Le gérondif à la place d'une subordonnée",
      "note": "La troisième colonne dit ce que la phrase porte.",
      "table": {
        "head": [
          "construction",
          "forme",
          "ce qu'elle porte"
        ],
        "rows": [
          [
            "Uscendo di casa…",
            "gerundio presente",
            "simultanéité, cause, manière"
          ],
          [
            "Avendo finito…",
            "gerundio passato",
            "action antérieure"
          ],
          [
            "Pur sapendolo…",
            "pur + gerundio",
            "concession"
          ],
          [
            "Sbagliando si impara.",
            "gerundio",
            "manière, vérité générale"
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
          "tr": "En sortant de chez moi, j'ai croisé Marta."
        },
        {
          "tr": "Ayant fini tôt, nous sommes allés à la mer."
        },
        {
          "tr": "Bien qu'il le sût, il n'a rien dit."
        },
        {
          "tr": "C'est en se trompant qu'on apprend."
        },
        {
          "tr": "Comme c'était dimanche, les magasins étaient fermés."
        },
        {
          "tr": "Une fois la nouvelle publiée, le prix s'est effondré."
        }
      ]
    },
    "vocab": [
      "le gérondif",
      "la proposition non conjuguée",
      "le sujet sous-entendu",
      "simultané",
      "antérieur",
      "la cause",
      "la manière",
      "la condition",
      "sous-entendre",
      "régir",
      "alléger",
      "alourdir"
    ],
    "exercises": [
      {
        "q": "« Uscendo di casa, ho incontrato Marta » signifie :",
        "opts": [
          "Je sortirai et je croiserai Marta",
          "En sortant de chez moi, j'ai croisé Marta",
          "Si je sortais, je croiserais Marta"
        ]
      },
      {
        "q": "Complétez : « ___ di casa, ho incontrato Marta. » (uscire, gérondif)"
      },
      {
        "q": "Complétez : « ___ presto, siamo andati al mare. » (finire, gérondif composé)"
      },
      {
        "q": "« Avendo finito presto » exprime :",
        "opts": [
          "une action antérieure",
          "une action simultanée",
          "une condition"
        ]
      },
      {
        "q": "« Pur sapendolo » signifie :",
        "opts": [
          "en le sachant",
          "sans le savoir",
          "bien qu'il le sût"
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "En sortant de chez moi, j'ai croisé Marta. Ayant fini tôt, nous sommes allés à la mer."
      },
      {
        "q": "« C'est en se trompant qu'on apprend. »"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Sbagliando si impara.",
          "Essendo domenica, i negozi erano chiusi.",
          "Avendo finito il lavoro, la festa è cominciata."
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Ayant lu le contrat, j'ai demandé qu'on change deux points."
      },
      {
        "tr": "En sortant du bureau, j'ai compris que j'avais laissé les clés à l'intérieur."
      }
    ]
  },
  "lesson:c1-u05-l2": {
    "theme": "Grammaire",
    "title": "Participio e infinito al posto di una subordinata",
    "objectives": [
      "raccourcir une temporelle avec le participe passé",
      "employer « dopo aver » et « prima di » avec l'infinitif",
      "accorder le participe avec le bon mot"
    ],
    "theory": [
      {
        "h": "Le participe en tête de phrase",
        "p": "<em>Finito il lavoro, siamo usciti</em> = « une fois le travail fini, nous sommes sortis ». Le participe s'accorde avec ce dont il parle : avec <em>lavoro</em> dans <em>finito il lavoro</em>, mais avec nous dans <em>arrivati a Roma</em>, parce qu'<em>arrivare</em> se conjugue avec <em>essere</em>. C'est la seule difficulté de la leçon."
      },
      {
        "h": "Dopo aver, prima di, nel",
        "p": "Après <em>dopo</em> vient l'infinitif passé : <em>dopo aver letto</em>, jamais <em>dopo leggere</em>. Après <em>prima di</em>, l'infinitif simple : <em>prima di rispondere</em>. <em>Nel</em> + infinitif signifie « au moment de » : <em>nel dire questo, si è alzato</em>."
      },
      {
        "h": "Una volta + participe",
        "p": "<em>Una volta chiuso il negozio, la via si svuota.</em> Très fréquent et très commode, car il ne demande ni conjonction ni temps. Cela marche aussi pour ce qui dure : <em>una volta imparato, non si dimentica</em>."
      },
      {
        "contrast": "Le français dit « après avoir lu », exactement comme l'italien : infinitif passé après « après ». C'est l'un des rares points de cette unité où la traduction est mot pour mot. Attention seulement à « une fois » : le français met souvent un participe accordé (« une fois la boutique fermée ») et l'italien fait pareil, donc l'intuition est bonne."
      }
    ],
    "grammar": {
      "title": "Raccourcir une temporelle",
      "note": "La troisième colonne dit quand employer la forme.",
      "table": {
        "head": [
          "construction",
          "forme",
          "quand"
        ],
        "rows": [
          [
            "Finito il lavoro…",
            "participio passato",
            "action achevée avant la principale"
          ],
          [
            "Arrivati a Roma…",
            "participio, accordo",
            "accord avec le sujet"
          ],
          [
            "Dopo aver letto…",
            "infinito passato",
            "après quelque chose"
          ],
          [
            "Prima di rispondere…",
            "infinito presente",
            "avant quelque chose"
          ],
          [
            "Nel dire questo…",
            "nel + infinito",
            "au moment de"
          ],
          [
            "Una volta chiuso…",
            "participio passato",
            "une fois que"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Une fois le travail fini, nous sommes sortis."
        },
        {
          "tr": "Arrivés à Rome, nous avons cherché un hôtel."
        },
        {
          "tr": "Après avoir lu le contrat, il a signé."
        },
        {
          "tr": "Avant de répondre, il y a réfléchi deux jours."
        },
        {
          "tr": "En disant cela, il s'est levé."
        },
        {
          "tr": "Une fois la boutique fermée, la rue se vide."
        }
      ]
    },
    "vocab": [
      "le participe passé",
      "l'infinitif passé",
      "la subordonnée",
      "une fois que",
      "après avoir",
      "avant de",
      "au moment de",
      "à l'instant de",
      "accorder",
      "précéder",
      "suivre",
      "alléger"
    ],
    "exercises": [
      {
        "q": "Dans « Finito il lavoro, siamo usciti », « finito » se rapporte à :",
        "opts": [
          "nous",
          "le travail",
          "la sortie"
        ]
      },
      {
        "q": "Complétez : « ___ il lavoro, siamo usciti. » (finire, participe)"
      },
      {
        "q": "Complétez : « Dopo ___ il contratto, ha firmato. » (leggere)"
      },
      {
        "q": "Après « dopo », la forme raccourcie prend :",
        "opts": [
          "le gérondif",
          "le participe",
          "l'infinitif passé"
        ]
      },
      {
        "q": "« Prima di » se construit avec :",
        "opts": [
          "l'infinitif",
          "le gérondif",
          "le participe"
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Une fois le travail fini, nous sommes sortis. Après avoir lu le contrat, il a signé."
      },
      {
        "q": "« Après avoir lu le contrat, il a signé. »"
      },
      {
        "q": "Associez les constructions.",
        "tr": [
          "une fois le travail fini",
          "après avoir lu",
          "avant de répondre",
          "une fois fermée"
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Une fois la boutique fermée, la rue se vide en quelques minutes."
      },
      {
        "tr": "Avant de répondre, il y a réfléchi deux jours entiers."
      }
    ]
  },
  "lesson:c1-u05-l3": {
    "theme": "Grammaire",
    "title": "Quando l'implicito non si può usare",
    "objectives": [
      "vérifier que les deux moitiés ont le même sujet",
      "repérer la phrase que le raccourci rend ambiguë",
      "choisir la conjonction quand le raccourci ne passe pas"
    ],
    "theory": [
      {
        "h": "Une règle sans exception",
        "p": "La forme raccourcie prend son sujet dans la principale. Si les sujets diffèrent, la phrase dit autre chose : <em>Uscendo di casa, mia madre mi ha chiamato</em> dit que c'est la mère qui sortait. Le français appelle cela un participe mal rattaché et le proscrit tout autant."
      },
      {
        "h": "Deux issues",
        "p": "On peut donner au gérondif son propre sujet : <em>Avendo io firmato, la pratica è partita</em>. Cela sonne administratif et ne s'entend pas à l'oral. L'autre issue est la normale : une conjonction et un verbe conjugué, <em>siccome</em>, <em>dato che</em>, <em>dopo che</em>, <em>mentre</em>."
      },
      {
        "h": "Les verbes impersonnels sont sans risque",
        "p": "<em>Essendo tardi</em>, <em>piovendo</em>, <em>trattandosi di un errore</em> : ils n'ont pas de sujet personnel, donc ils ne peuvent entrer en conflit avec rien. C'est pourquoi <em>Essendo tardi, abbiamo rimandato la riunione</em> est correct même si « nous » n'est pas le sujet d'<em>essere tardi</em>."
      },
      {
        "contrast": "Ici les deux langues sont d'accord au mot près, ce qui fait de cette leçon la moins coûteuse de l'unité : « En sortant de chez moi, ma mère m'a appelé » est la même faute en français. La différence tient à la tolérance : l'oral français les laisse passer, alors qu'à un examen écrit italien elles comptent comme faute de syntaxe."
      }
    ],
    "grammar": {
      "title": "Quand le raccourci passe et quand il ne passe pas",
      "note": "La troisième colonne dit quoi faire.",
      "table": {
        "head": [
          "situation",
          "ce qui est permis",
          "quoi faire"
        ],
        "rows": [
          [
            "stesso soggetto",
            "gerundio o participio",
            "le raccourci passe"
          ],
          [
            "soggetti diversi",
            "congiunzione + verbo",
            "le raccourci change le sens, il faut une conjonction"
          ],
          [
            "verbo impersonale",
            "gerundio ammesso",
            "raccourci sans risque"
          ],
          [
            "soggetto espresso",
            "gerundio con soggetto",
            "correct mais administratif"
          ],
          [
            "registro parlato",
            "meglio esplicito",
            "la conjonction sonne plus naturelle"
          ]
        ]
      },
      "examples": [
        {
          "tr": "Pendant que je sortais, ma mère m'a appelé."
        },
        {
          "tr": "Comme il était tard, nous avons reporté la réunion."
        },
        {
          "tr": "Comme il était tard, Marco a reporté la réunion."
        },
        {
          "tr": "Après que le directeur a signé, le dossier est parti."
        },
        {
          "tr": "Une fois la réunion terminée, le directeur est sorti."
        },
        {
          "tr": "Ayant signé moi-même, le dossier est parti."
        }
      ]
    },
    "vocab": [
      "le sujet",
      "coïncider",
      "explicite",
      "sous-entendu",
      "ambigu",
      "le malentendu",
      "comme",
      "étant donné que",
      "après que",
      "pendant que",
      "se rapporter à",
      "clarifier"
    ],
    "exercises": [
      {
        "q": "Quand la forme raccourcie est-elle interdite ?",
        "opts": [
          "Quand les deux moitiés ont le même sujet",
          "Quand les sujets diffèrent",
          "Elle est toujours permise"
        ]
      },
      {
        "q": "Complétez : « ___ era tardi, Marco ha rimandato la riunione. » (conjonction de cause)"
      },
      {
        "q": "Complétez : « ___ uscivo, mia madre mi ha chiamato. » (conjonction de temps)"
      },
      {
        "q": "Pourquoi « Essendo tardi, abbiamo rimandato » est-il correct ?",
        "opts": [
          "« essere tardi » n'a pas de sujet personnel",
          "le gérondif marche toujours",
          "c'est un temps du passé"
        ]
      },
      {
        "q": "Quand les sujets diffèrent, on écrit la phrase :",
        "opts": [
          "avec le gérondif",
          "avec le participe",
          "avec une conjonction et un verbe conjugué"
        ]
      },
      {
        "q": "Mettez les conjonctions.",
        "tr": "Comme il était tard, Marco a reporté la réunion. Pendant que je sortais, ma mère m'a appelé."
      },
      {
        "q": "« Comme il était tard, nous avons reporté la réunion. »"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Mentre uscivo, mia madre mi ha chiamato.",
          "Siccome era tardi, Marco ha rimandato la riunione."
        ]
      },
      {
        "q": "Remettez la phrase dans l'ordre."
      },
      {
        "tr": "Comme le directeur était en vacances, le dossier est resté bloqué."
      },
      {
        "tr": "Pendant que je parlais au téléphone, le coursier est arrivé."
      }
    ]
  },
  "lesson:c1-u05-test": {
    "theme": "Examen",
    "title": "Examen final du niveau C1",
    "objectives": [
      "vérifier le si impersonnel, les verbes pronominaux, les registres, la supposition et les formes non conjuguées"
    ],
    "theory": [
      {
        "p": "Douze exercices tirés de tout le niveau C1. Réussite à partir de 70%."
      }
    ],
    "exercises": [
      {
        "q": "« Uscendo di casa, ho incontrato Marta » signifie :",
        "opts": [
          "Je sortirai et je croiserai Marta",
          "En sortant de chez moi, j'ai croisé Marta",
          "Si je sortais, je croiserais Marta"
        ]
      },
      {
        "q": "Complétez : « ___ presto, siamo andati al mare. » (finire, gérondif composé)"
      },
      {
        "q": "Complétez : « Dopo ___ il contratto, ha firmato. » (leggere)"
      },
      {
        "q": "« Avendo finito presto » exprime :",
        "opts": [
          "une action antérieure",
          "une action simultanée",
          "une condition"
        ]
      },
      {
        "q": "Complétez : « ___ era tardi, Marco ha rimandato la riunione. »"
      },
      {
        "q": "Quand les sujets diffèrent, on écrit la phrase :",
        "opts": [
          "avec le gérondif",
          "avec le participe",
          "avec une conjonction et un verbe conjugué"
        ]
      },
      {
        "q": "Complétez : « Non risponde: ___ ancora in riunione. » (essere, supposition)"
      },
      {
        "q": "Quelles phrases sont correctes ?",
        "opts": [
          "Finito il lavoro, siamo usciti.",
          "Uscendo di casa, mia madre mi ha chiamato.",
          "Dopo aver letto il contratto, ha firmato."
        ]
      },
      {
        "q": "Mettez les formes.",
        "tr": "Une fois le travail fini, nous sommes sortis ; comme il était tard, nous avons pris un taxi."
      },
      {
        "q": "« Après avoir lu le contrat, il a signé. »"
      },
      {
        "tr": "Une fois le dossier clos, le bureau envoie une notification écrite."
      },
      {
        "tr": "Travaillant ici depuis trois ans, je connais bien le fonctionnement."
      }
    ]
  }
});
