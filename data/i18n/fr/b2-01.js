/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/b2-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto et trapassato · concordance des temps"
  },
  "lesson:b2-u01-l1": {
    theme: "Grammaire",
    title: "Formes et emplois de base",
    objectives: [
      "former le congiuntivo imperfetto",
      "connaître les formes irrégulières",
      "l'employer après une principale au passé"
    ],
    theory: [
      {
        h: "Les terminaisons sont d'une régularité rare",
        p: "Radical de l'infinitif + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em> : <em>parlassi, prendessi, dormissi</em>. Six verbes seulement sont irréguliers : <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        contrast: "Ton imparfait du subjonctif existe, mais il est mort : « qu'il vînt », « que je fusse » ne se rencontrent plus qu'en littérature, et la langue courante met le présent partout — « je voulais que tu me le <b>dises</b> ». L'italien, lui, applique la concordance sans exception : <em>Volevo che tu me lo <b>dicessi</b></em>. C'est donc un temps que tu reconnais et que tu n'as jamais eu à produire, et c'est tout le travail de cette unité."
      },
      {
        h: "La règle de base : la principale recule",
        p: "Quand la principale passe au passé, le congiuntivo presente devient imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Même mécanisme que la concordance du discours indirect."
      },
      {
        h: "Deuxième contexte : une hypothèse avec se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> (« si j'avais le temps, je viendrais »). C'est le deuxième type de phrase conditionnelle, qui a son unité juste après. Retiens pour l'instant que <em>se</em> n'est jamais suivi d'un conditionnel."
      },
      {
        h: "Troisième contexte : un souhait",
        p: "Le congiuntivo imperfetto peut tenir seul et exprimer un souhait ou un regret : <em>Magari venisse!</em> (« si seulement il venait ! »), <em>Fosse vero!</em>, <em>Piovesse almeno!</em>. C'est ton « si seulement », en un mot."
      }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["personne", "parlare", "prendere", "dormire", "essere", "fare"],
        rows: [
          ["che io", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che tu", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che lui/lei", "parlasse", "prendesse", "dormisse", "fosse", "facesse"],
          ["che noi", "parlassimo", "prendessimo", "dormissimo", "fossimo", "facessimo"],
          ["che voi", "parlaste", "prendeste", "dormiste", "foste", "faceste"],
          ["che loro", "parlassero", "prendessero", "dormissero", "fossero", "facessero"]
        ]
      },
      examples: [
        { tr: "Je pensais que c'était plus simple que ça." },
        { tr: "Je ne savais pas que tu travaillais ici." },
        { tr: "Je voulais que tu me le dises plus tôt." },
        { tr: "Si j'avais le temps, je viendrais volontiers." },
        { tr: "Si seulement elle venait aussi !" },
        { tr: "On aurait dit qu'il n'y avait personne." }
      ]
    },
    vocab: [
      "je pensais que…",
      "je ne savais pas que…",
      "je voulais que…",
      "on aurait dit que…",
      "si seulement, peut-être",
      "comme si",
      "à condition que",
      "au cas où",
      "au besoin",
      "j'ai bien envie de",
      "il serait temps de",
      "qui sait si"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Complète : « Pensavo che ___ più semplice. » (essere)" },
      { q: "Complète : « Non sapevo che tu ___ qui. » (lavorare)" },
      {
        q: "« Penso che sia vero » avec la principale au passé :",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Mets le congiuntivo imperfetto.",
        tr: "Je voulais que tu me le dises plus tôt et que tu viennes avec nous."
      },
      { q: "« Magari venisse! » veut dire :", opts: ["Peut-être qu'il viendra", "Si seulement il venait !", "Il viendrait"] },
      { q: "« On aurait dit qu'il n'y avait personne. »" },
      { tr: "Je ne savais pas que tu avais déjà fini le projet." },
      { tr: "Je pensais que c'était plus facile que ça." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Grammaire",
    title: "La concordance des temps",
    objectives: [
      "choisir le temps de la subordonnée",
      "exprimer l'antériorité, la simultanéité ou la postériorité",
      "former le congiuntivo trapassato"
    ],
    theory: [
      {
        h: "Trois rapports temporels",
        p: "Dans une phrase complexe, la subordonnée peut être <b>antérieure</b>, <b>simultanée</b> ou <b>postérieure</b> à la principale. Le mode et le temps dépendent de deux choses : du temps de la principale et du rapport."
      },
      {
        h: "Le tableau qu'il vaut la peine de savoir par cœur",
        list: [
          "principale au <b>présent</b> : simultanéité → cong. presente ; antériorité → cong. passato ; postériorité → cong. presente ou futur",
          "principale au <b>passé</b> : simultanéité → cong. imperfetto ; antériorité → cong. trapassato ; postériorité → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto de <em>avere/essere</em> + participe : <em>avessi fatto</em>, <em>fossi andato</em>. Il marque ce qui précède une principale au passé : <em>Pensavo che <b>fosse già partito</b>.</em>"
      },
      {
        contrast: "Ta concordance a fondu : tu mets le présent du subjonctif partout et tu ne distingues plus l'antériorité que par le passé (« je pensais qu'il soit parti »). L'italien maintient les quatre cases, et la postériorité tombe en dehors du subjonctif : <em>Pensavo che <b>sarebbe venuto</b></em>, conditionnel passé, contre ton « je pensais qu'il <b>viendrait</b> ». C'est le même décalage qu'au discours indirect de B1, et il reste la faute la plus fréquente."
      }
    ],
    grammar: {
      title: "Concordance des temps",
      table: {
        head: ["principale", "rapport", "forme dans la subordonnée", "exemple"],
        rows: [
          ["presente", "simultanéité", "cong. presente", "Penso che sia qui."],
          ["presente", "antériorité", "cong. passato", "Penso che sia stato qui."],
          ["presente", "postériorité", "cong. presente / futuro", "Penso che venga domani."],
          ["passato", "simultanéité", "cong. imperfetto", "Pensavo che fosse qui."],
          ["passato", "antériorité", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["passato", "postériorité", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        { tr: "Je croyais qu'il avait déjà répondu." },
        { tr: "J'espérais qu'il m'appellerait." },
        { tr: "Je n'avais aucune idée que c'était aussi compliqué." },
        { tr: "C'était bizarre qu'ils ne soient pas encore arrivés." },
        { tr: "Je craignais qu'on se soit trompés de route." },
        { tr: "Il me semblait qu'il y avait une erreur." }
      ]
    },
    vocab: [
      "concordance",
      "antériorité",
      "simultanéité",
      "postériorité",
      "imaginer, supposer",
      "craindre",
      "soupçonner",
      "douter",
      "présumer",
      "s'avérer",
      "à ce moment-là",
      "entre-temps"
    ],
    exercises: [
      { q: "Complète : « Credevo che ___ già risposto. » (avere, lui)" },
      { q: "Complète : « Speravo che mi ___ chiamato. » (le futur dans le passé)" },
      {
        q: "« Pensavo che ___ domani. » (venire, postériorité)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "« Pensavo che ___ qui. » (essere, simultanéité)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Mets les bonnes formes.",
        tr: "Je n'avais aucune idée que c'était aussi compliqué et que ça prendrait autant de temps."
      },
      {
        q: "Mets les bonnes formes.",
        tr: "C'était bizarre qu'ils ne soient pas encore arrivés et que personne n'ait rien signalé."
      },
      { q: "« J'espérais qu'il m'appellerait. »" },
      {
        q: "La faute la plus fréquente avec la concordance est :",
        opts: [
          "employer le congiuntivo au lieu de l'indicatif",
          "employer le conditionnel présent au lieu du passé pour la postériorité",
          "supprimer che"
        ]
      },
      { tr: "Je craignais qu'on se soit trompés de route et qu'il soit trop tard." },
      { tr: "Je croyais qu'il avait déjà répondu à mon mail." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Grammaire",
    title: "Les conjonctions qui exigent le subjonctif",
    objectives: [
      "employer come se avec le congiuntivo imperfetto",
      "connaître les conjonctions de but, de condition et de concession",
      "choisir entre indicatif et congiuntivo"
    ],
    theory: [
      {
        h: "Come se prend toujours l'imperfetto ou le trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Jamais le presente, jamais l'indicatif, même quand la principale est au présent. C'est une exception à la concordance des temps et l'une des constructions les plus souvent ratées."
      },
      {
        contrast: "Ici ton oreille te trahit franchement : le français met l'<b>indicatif</b> après « comme si » — « il parle comme s'il <b>était</b> un expert ». Toute la famille du <em>si</em> français refuse le subjonctif, et l'italien fait exactement l'inverse avec <em>come se</em>. C'est le premier réflexe à casser de cette leçon."
      },
      {
        h: "Les conjonctions par fonction",
        list: [
          "<b>concession</b> : benché, sebbene, nonostante, malgrado, per quanto",
          "<b>but</b> : affinché, perché (= pour que)",
          "<b>condition</b> : purché, a patto che, a condizione che, sempre che",
          "<b>exception</b> : a meno che (non), salvo che, tranne che",
          "<b>temps</b> : prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che et le non explétif",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> Ce <em>non</em> ne nie rien : la phrase veut dire « je viens, à moins qu'il ne pleuve ». Ton « ne » explétif fait exactement le même travail après « à moins que », et il est facultatif chez toi comme chez l'italien d'aujourd'hui."
      },
      {
        trap: "<b>Dopo che</b> prend l'indicatif, <b>prima che</b> le congiuntivo. Le partage est le tien, y compris dans l'erreur : « après qu'il soit parti » est aussi fautif en français que <em>dopo che sia partito</em> en italien, et aussi répandu."
      }
    ],
    grammar: {
      title: "Conjonctions et mode",
      table: {
        head: ["conjonction", "mode", "exemple"],
        rows: [
          ["benché / sebbene", "congiuntivo", "Benché piova, esco."],
          ["affinché", "congiuntivo", "Te lo dico affinché tu capisca."],
          ["purché / a patto che", "congiuntivo", "Vengo purché tu ci sia."],
          ["a meno che non", "congiuntivo", "Vengo a meno che non piova."],
          ["prima che", "congiuntivo", "Parti prima che sia tardi."],
          ["dopo che", "indicatif", "Dopo che è partito, ho capito."],
          ["come se", "cong. imperf./trapass.", "Parla come se fosse esperto."]
        ]
      },
      examples: [
        { tr: "Il fait comme si rien ne s'était passé." },
        { tr: "Si difficile que ce soit, ça en vaut la peine." },
        { tr: "Je t'aide à condition que tu t'y mettes sérieusement." },
        { tr: "On part avant que la circulation commence." },
        { tr: "Je viendrai, à moins d'un imprévu." },
        { tr: "Même s'il avait raison, il ne l'a pas dit." }
      ]
    },
    vocab: [
      "si… que ce soit, bien que",
      "malgré",
      "pour que",
      "à condition que",
      "à condition que",
      "à moins que",
      "sauf si",
      "jusqu'à ce que",
      "se comporter, faire",
      "un imprévu",
      "en valoir la peine",
      "s'y mettre sérieusement"
    ],
    exercises: [
      {
        q: "« Parla come se ___ un esperto. » (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se prend toujours le congiuntivo imperfetto ou trapassato."
      },
      { q: "Complète : « Partiamo prima che ___ tardi. » (essere)" },
      { q: "Complète : « Ti aiuto a patto che tu ___ serio. » (essere)" },
      {
        q: "« Dopo che è partito » : pourquoi l'indicatif ?",
        opts: ["C'est une faute", "Dopo che porte sur un fait réellement arrivé", "Parce que partire est irrégulier"]
      },
      {
        q: "Quelles conjonctions exigent le congiuntivo ?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Mets les formes.", tr: "Il fait comme si rien ne s'était passé, alors que tout le monde connaît la vérité." },
      { q: "« Je viendrai, à moins d'un imprévu. »" },
      { tr: "Si difficile que ce soit, ça vaut la peine d'essayer." },
      { tr: "Même s'il avait raison, il a préféré ne rien dire." },
      { tr: "Je t'aide volontiers, à condition que tu me préviennes à temps." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier le congiuntivo imperfetto, le trapassato et la concordance des temps"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "« Pensavo che ___ più semplice. »" },
      { q: "« Credevo che ___ già risposto. » (avere, lui)" },
      { q: "« Pensavo che ___ domani. » (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "« Parla come se ___ esperto. »", opts: ["è", "sia", "fosse"] },
      { q: "« Partiamo prima che ___ tardi. »" },
      { q: "Lesquelles exigent le congiuntivo ?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "Je n'avais aucune idée qu'obtenir le permis était aussi compliqué." },
      { tr: "J'espérais qu'il me répondrait avant hier." }
    ]
  },
  "unit:b2-u02": {
    title: "Les phrases conditionnelles",
    grammarNote: "les trois types avec se · le type mixte · variantes familières"
  },
  "lesson:b2-u02-l1": {
    theme: "Grammaire",
    title: "Les trois types de conditionnelle",
    objectives: [
      "distinguer le réel, le possible et l'irréel",
      "accorder les temps à chaque type",
      "garder le conditionnel hors de la proposition en se"
    ],
    theory: [
      {
        h: "Type 1 : réel",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> La condition est réelle et probable. Les deux propositions à l'indicatif : présent, futur ou impératif (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Type 2 : possible mais incertain",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto après <em>se</em>, condizionale presente dans la principale. La condition est hypothétique : possible en théorie, non réalisée en fait."
      },
      {
        contrast: "La principale est la tienne, la subordonnée non. Tu dis « si j'<b>avais</b> le temps », à l'imparfait de l'<b>indicatif</b> ; l'italien exige le subjonctif imparfait. Même écart au type 3 : ton plus-que-parfait de l'indicatif (« si j'avais étudié ») devient un congiuntivo trapassato. La proposition en <em>se</em> est donc le seul endroit où tu dois changer de mode sans que le sens change."
      },
      {
        h: "Type 3 : irréel, sur le passé",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. On parle de ce qui ne peut plus arriver : regret ou reproche."
      },
      {
        trap: "<b>Se</b> n'est jamais suivi d'un conditionnel ni d'un futur. « Se avrei tempo » est la faute d'étranger la plus reconnaissable de l'italien : c'est mot pour mot ton « si j'aurais le temps », et elle est stigmatisée dans les deux langues. Si celle-là te fait grincer des dents en français, fie-toi à cette réaction."
      }
    ],
    grammar: {
      title: "Les trois types",
      table: {
        head: ["type", "proposition en se", "principale", "exemple"],
        rows: [
          ["1. réel", "indicatif", "indicatif / impératif", "Se piove, resto a casa."],
          ["1. futur", "présent / futur", "futur", "Se verrai, ti aspetterò."],
          ["2. possible", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. irréel", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          [
            "mixte",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "S'il fait beau demain, on va à la mer." },
        { tr: "À ta place, je ne le ferais pas." },
        { tr: "Si on l'avait su plus tôt, on serait partis hier." },
        { tr: "Si j'avais accepté ce poste, je vivrais à Rome maintenant.", note: "le type mixte" },
        { tr: "Si tu as besoin de quelque chose, appelle-moi." },
        { tr: "Qu'est-ce que tu ferais si tu gagnais au loto ?" }
      ]
    },
    vocab: [
      "si",
      "au cas où",
      "si jamais, dans le cas où (formel)",
      "sinon",
      "à ta place",
      "si seulement",
      "hypothèse",
      "condition",
      "se réaliser",
      "regretter",
      "regret",
      "changer d'avis"
    ],
    exercises: [
      { q: "« Se ___ tempo, verrei. » (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "« Se avessi studiato, ___ l'esame. » (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Complète : « Se domani ___ bel tempo, andiamo al mare. » (fare)" },
      {
        q: "Quelle phrase est fautive ?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Complète un type 2.", tr: "À ta place, je ne le ferais pas." },
      { q: "Complète un type 3.", tr: "Si on l'avait su plus tôt, on serait partis hier." },
      { q: "« Qu'est-ce que tu ferais si tu gagnais au loto ? »" },
      {
        q: "« Se avessi accettato quel lavoro, ora vivrei a Roma » est du type :",
        opts: ["premier", "deuxième", "mixte"]
      },
      { tr: "Si on avait réservé plus tôt, on aurait payé beaucoup moins." },
      { tr: "À ta place, j'y réfléchirais encore un peu." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Grammaire",
    title: "Variantes familières et formelles",
    objectives: [
      "reconnaître la conditionnelle familière à double imparfait",
      "employer qualora et nel caso in cui",
      "ajuster le registre à la situation"
    ],
    theory: [
      {
        h: "Le double imparfait à l'oral",
        p: "<em>Se lo sapevo, non venivo.</em> En conversation, les Italiens remplacent très souvent le type 3 par un double imparfait. C'est répandu et accepté à l'oral, mais <b>pas à l'écrit</b> ni en examen. Ton « si je le savais, je venais pas » a exactement le même statut : ça se dit, ça ne s'écrit pas."
      },
      {
        h: "Les variantes formelles",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> est typique des contrats et des lettres officielles, toujours avec le congiuntivo. C'est ton « dans le cas où le paiement ne parviendrait pas avant… », ou le plus administratif « à défaut de paiement ». <em><b>Nel caso in cui</b></em> fonctionne pareil. <em><b>Ove</b></em> est plus livresque encore."
      },
      {
        h: "Une condition sans se",
        list: [
          "gérondif : <em>Studiando di più, passeresti l'esame.</em>",
          "impératif + e : <em>Chiedi e ti sarà dato.</em>",
          "<em>a + infinitif</em> : <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em> : <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> plus le congiuntivo imperfetto exprime le souhait à lui seul, sans principale : <em>Magari fosse così semplice!</em>, ton « si seulement c'était aussi simple ! »."
      }
    ],
    grammar: {
      title: "Les variantes",
      table: {
        head: ["registre", "construction", "exemple"],
        rows: [
          ["familier", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["standard", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["formel", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["formel", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["sans se", "gérondif", "Studiando di più, passeresti."],
          ["sans se", "senza + nom", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        { tr: "Dans le cas où je ne recevrais pas la confirmation, j'annulerai la réservation." },
        { tr: "S'il pleut, on se retrouve au bar." },
        { tr: "En le voulant, ça pourrait se faire demain aussi." },
        { tr: "Si je l'avais su, je serais resté chez moi.", note: "familier" },
        { tr: "Si seulement c'était aussi simple !" },
        { tr: "Si je l'avais su plus tôt, j'aurais fait autrement." }
      ]
    },
    vocab: [
      "dans le cas où (formel)",
      "au cas où",
      "si (très formel)",
      "prendre les mesures nécessaires",
      "annuler",
      "confirmation",
      "en le voulant",
      "si on l'avait su",
      "autrement",
      "sinon",
      "registre",
      "déconseillé"
    ],
    exercises: [
      {
        q: "« Se lo sapevo, non venivo » est une construction :",
        opts: ["correcte à l'écrit", "familière, acceptable à l'oral, déconseillée à l'écrit", "toujours fautive"]
      },
      { q: "Complète : « Qualora ___ necessario, provvederemo. » (essere)" },
      { q: "Complète : « Nel caso in cui ___, ci vediamo al bar. » (piovere)" },
      {
        q: "« Volendo, si può fare domani » veut dire :",
        opts: ["En voulant, c'est fait demain", "Si on le voulait, ça pourrait se faire demain", "On veut le faire demain"]
      },
      { q: "Réécris-le au registre standard.", tr: "Si je l'avais su, je ne serais pas venu." },
      { q: "« S'il pleut, on se retrouve au bar. »" },
      { q: "Associe.", pairs: ["dans le cas où (formel)", "prendre les mesures", "annuler", "sinon"] },
      { tr: "Sans ton aide je n'y serais pas arrivé." },
      { tr: "Dans le cas où la confirmation n'arriverait pas avant vendredi, nous annulerons la réservation." },
      { tr: "Si seulement c'était aussi simple que tu le dis." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Communication",
    title: "Regret, reproche, hypothèse",
    objectives: [
      "exprimer un regret sur le passé",
      "formuler un reproche sans agressivité",
      "tenir une conversation hypothétique"
    ],
    theory: [
      {
        h: "Le regret, c'est le troisième type",
        p: "<em>Avrei dovuto ascoltarti.</em> (« J'aurais dû t'écouter. ») Le condizionale passato de <em>dovere</em> et <em>potere</em> est la façon standard d'exprimer le regret et l'autocritique en italien, exactement comme ton « j'aurais dû » et « j'aurais pu »."
      },
      {
        h: "Un reproche adouci",
        p: "<em>Avresti potuto dirmelo.</em> (« Tu aurais pu me le dire. ») sonne plus doux que <em>perché non me l'hai detto?</em>. Le conditionnel passé retire le tranchant et laisse le contenu, comme en français."
      },
      {
        h: "Les tournures du regret",
        list: [
          "<em>Se solo avessi…</em> — si seulement j'avais…",
          "<em>Non avrei mai dovuto…</em> — je n'aurais jamais dû…",
          "<em>Con il senno di poi…</em> — avec le recul…",
          "<em>Mi pento di…</em> — je regrette de…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> (« heureusement que… ») est le contraire du regret et une manière très courante d'ouvrir une phrase : <em>Meno male che sei arrivato.</em>"
      }
    ],
    grammar: {
      title: "Regret et reproche",
      table: {
        head: ["fonction", "construction", "exemple"],
        rows: [
          ["regret", "avrei dovuto + infinitif", "Avrei dovuto ascoltarti."],
          ["occasion manquée", "avrei potuto + infinitif", "Avrei potuto accettare."],
          ["reproche", "avresti potuto + infinitif", "Avresti potuto avvisarmi."],
          ["si seulement", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["soulagement", "meno male che + indicatif", "Meno male che sei qui."],
          ["remords", "mi pento di + infinitif", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        { tr: "J'aurais dû accepter cette offre." },
        { tr: "Tu aurais pu me le dire plus tôt." },
        { tr: "Si seulement j'avais écouté ma mère !" },
        { tr: "Avec le recul, c'était une erreur." },
        { tr: "Heureusement que je n'ai pas signé." },
        { tr: "Je ne le regrette pas du tout." }
      ]
    },
    vocab: [
      "j'aurais dû",
      "j'aurais pu",
      "si seulement",
      "avec le recul",
      "regretter, se repentir de",
      "heureusement que",
      "par chance",
      "une occasion manquée",
      "se rendre compte",
      "admettre",
      "une erreur d'appréciation",
      "avec le temps"
    ],
    exercises: [
      { q: "Complète : « ___ dovuto ascoltarti. » (j'aurais dû)" },
      { q: "Complète : « ___ potuto avvisarmi. » (tu aurais pu)" },
      {
        q: "Laquelle se lit comme un reproche doux et non comme une accusation ?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Complète le regret.", tr: "Si seulement je l'avais su plus tôt, je n'aurais pas signé ce contrat." },
      { q: "« Avec le recul, c'était une erreur. »" },
      { q: "Associe.", pairs: ["heureusement que", "regretter", "si seulement", "une occasion manquée"] },
      {
        q: "« Non me ne pento affatto » veut dire :",
        opts: ["Je le regrette un peu", "Je ne le regrette pas du tout", "Je vais le regretter"]
      },
      { tr: "J'aurais dû accepter cette offre." },
      { tr: "Avec le recul, j'aurais pris d'autres décisions." },
      { tr: "Tu aurais pu me le dire plus tôt, j'aurais changé mes plans." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier les trois types de conditionnelle et la langue du regret"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« Se ___ tempo, verrei. »", opts: ["ho", "avrei", "avessi"] },
      { q: "« Se avessi studiato, ___ l'esame. »", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Type 2.", tr: "À ta place, je ne le ferais pas." },
      { q: "Type 3.", tr: "Si on avait réservé plus tôt, on aurait payé moins." },
      { q: "« Qualora ___ necessario, provvederemo. »" },
      { q: "« ___ dovuto ascoltarti. »" },
      { q: "« ___ potuto avvisarmi. »" },
      { q: "La phrase fautive :", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "Si seulement je l'avais su, je n'aurais pas signé ce contrat." },
      { tr: "À ta place, j'y réfléchirais à deux fois." }
    ]
  },
  "unit:b2-u03": {
    title: "Le passif et le passato remoto",
    grammarNote: "essere/venire/andare + participe · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Grammaire",
    title: "Quatre façons de construire un passif",
    objectives: [
      "former le passif avec essere et avec venire",
      "comprendre andare + participe comme une obligation",
      "employer le si passivante à l'oral"
    ],
    theory: [
      {
        h: "Essere : la forme de base",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> Elle marche à tous les temps. Le participe s'accorde avec le sujet et l'agent est introduit par <em>da</em>. C'est ton « être + participe » avec « par »."
      },
      {
        h: "Venire : temps simples seulement, l'accent sur le processus",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> On ne peut pas dire « è venuta approvata » : <em>venire</em> ne forme pas de passif aux temps composés. Il souligne la répétition et le processus lui-même. Le français n'a pas ce second passif : là où l'italien choisit entre <em>essere</em> et <em>venire</em>, tu emploies « être » pour les deux."
      },
      {
        h: "Andare : un passif qui porte une obligation",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> Ce n'est pas un passif ordinaire : la phrase veut dire « le formulaire <b>doit être</b> rempli ». Ton équivalent le plus proche est « le formulaire <b>est à</b> remplir », qui porte la même obligation avec une préposition au lieu d'un verbe. Le lire comme un passif d'<em>essere</em> change complètement le sens."
      },
      {
        h: "Si passivante : la version parlée",
        p: "<em>Qui <b>si vendono</b> panini.</em> C'est la plus fréquente en conversation parce qu'elle est plus légère. Le verbe s'accorde avec la chose, pas avec l'agent tu. Le français passerait plutôt par « on » ou par « ça se vend » : c'est cette seconde tournure qui correspond, puisqu'elle s'accorde elle aussi."
      }
    ],
    grammar: {
      title: "Quatre formes de passif",
      table: {
        head: ["forme", "exemple", "sens"],
        rows: [
          ["essere", "La casa è stata venduta.", "la maison a été vendue"],
          ["venire", "La casa viene venduta ogni anno.", "la maison se vend (processus)"],
          ["andare", "La casa va venduta subito.", "la maison doit être vendue"],
          ["si passivante", "Qui si vendono case.", "ici il se vend des maisons"],
          ["l'agent", "…da un'agenzia", "…par une agence"],
          ["transitifs seulement", "—", "un passif exige un objet direct"]
        ]
      },
      examples: [
        { tr: "Le projet a été approuvé la semaine dernière." },
        { tr: "Les demandes sont examinées sous trente jours." },
        { tr: "Le formulaire doit être signé sur chaque page." },
        { tr: "Trois langues sont parlées dans ce bureau." },
        { tr: "La réunion a été reportée par le directeur." },
        { tr: "Ces erreurs sont à éviter." }
      ]
    },
    vocab: [
      "approuver",
      "examiner, évaluer",
      "rejeter",
      "reporter",
      "remplir",
      "joindre",
      "éviter",
      "déposer, remettre",
      "sous trente jours",
      "échéance",
      "demande, dossier",
      "résultat"
    ],
    exercises: [
      {
        q: "« Il modulo va compilato » veut dire :",
        opts: ["Le formulaire va rempli", "Le formulaire doit être rempli", "Le formulaire a été rempli"]
      },
      {
        q: "Quelle forme ne marche PAS aux temps composés ?",
        opts: ["essere + participe", "venire + participe", "si passivante"]
      },
      {
        q: "Mets au passif : « Marco ha scritto la lettera. » → « La lettera ___ stata scritta da Marco. »"
      },
      { q: "Complète : « Le domande ___ valutate entro trenta giorni. » (venire)" },
      { q: "Complète : « Questi errori ___ evitati. » (sont à éviter)" },
      {
        q: "Complète les formes passives.",
        tr: "Le projet a été approuvé hier, mais le formulaire doit encore être signé."
      },
      { q: "« La réunion a été reportée par le directeur. »" },
      {
        q: "« Qui si vendono panini » : pourquoi « vendono » ?",
        opts: [
          "C'est une faute",
          "Le si passivante s'accorde avec la chose au pluriel",
          "Parce qu'il y a plusieurs vendeurs"
        ]
      },
      { tr: "Les dossiers doivent être déposés avant le quinze du mois." },
      { tr: "Le document a été approuvé et doit être signé avant vendredi." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Grammaire",
    title: "Le passé narratif",
    objectives: [
      "former le passato remoto",
      "reconnaître le schéma 1-3-3 dans les verbes irréguliers",
      "savoir quand et où il s'emploie"
    ],
    theory: [
      {
        h: "Quand il s'emploie",
        p: "Dans le récit littéraire et historique (<em>Dante <b>nacque</b> nel 1265</em>), pour des faits lointains et clos, sans lien avec le présent. Dans le <b>sud de l'Italie</b>, il sert en plus dans la conversation ordinaire, même pour hier ; au nord il n'apparaît presque pas."
      },
      {
        contrast: "Tu as le meilleur point de comparaison du cours : le passato remoto est ton passé simple, avec le même statut littéraire et le même sort à l'oral. Comme lui, il se reconnaît à la lecture et ne se produit qu'à l'écrit soigné. La seule chose que le français n'a pas, c'est l'usage parlé du sud : à Naples, <em>ieri mangiai</em> est une phrase normale, et ton passé simple ne l'a jamais été nulle part."
      },
      {
        h: "Les formes régulières",
        p: "<em>-are</em> : ai, asti, ò, ammo, aste, arono. <em>-ere</em> : ei (ou etti), esti, é (ou ette), emmo, este, erono (ou ettero). <em>-ire</em> : ii, isti, ì, immo, iste, irono."
      },
      {
        h: "Le schéma 1-3-3",
        p: "La plupart des verbes irréguliers en <em>-ere</em> le sont <b>à trois personnes seulement</b> : première du singulier, troisième du singulier et troisième du pluriel. Le reste est régulier. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Tes passés simples irréguliers changent de radical partout (je pris, tu pris, il prit) ; l'italien demande donc l'effort inverse, retenir où il <b>ne</b> change pas."
      }
    ],
    grammar: {
      title: "Passato remoto",
      table: {
        head: ["verbe", "io", "tu", "lui/lei", "loro"],
        rows: [
          ["parlare", "parlai", "parlasti", "parlò", "parlarono"],
          ["credere", "credei", "credesti", "credé", "crederono"],
          ["dormire", "dormii", "dormisti", "dormì", "dormirono"],
          ["essere", "fui", "fosti", "fu", "furono"],
          ["avere", "ebbi", "avesti", "ebbe", "ebbero"],
          ["fare", "feci", "facesti", "fece", "fecero"],
          ["prendere", "presi", "prendesti", "prese", "presero"],
          ["dire", "dissi", "dicesti", "disse", "dissero"]
        ]
      },
      examples: [
        { tr: "Dante naquit à Florence en 1265." },
        { tr: "L'Italie devint une république en 1946." },
        { tr: "Il quitta la maison et ne revint jamais." },
        { tr: "C'est là que je compris tout." },
        { tr: "Il écrivit le roman en deux ans." },
        { tr: "Dès qu'il eut fini, il partit.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "naître",
      "mourir",
      "devenir",
      "écrire",
      "vivre",
      "voir",
      "apprendre (une nouvelle)",
      "décider de, vouloir",
      "roman",
      "siècle",
      "époque",
      "enchaînement des faits"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Qu'est-ce que le schéma 1-3-3 ?",
        opts: [
          "Qu'il y a trois verbes irréguliers",
          "Que seuls io, lui/lei et loro sont irréguliers",
          "Que toutes les formes sont irrégulières"
        ]
      },
      { q: "Passato remoto de « prendere », forme loro : ___" },
      { q: "Passato remoto de « dire », forme lui : ___" },
      {
        q: "Où le passato remoto s'emploie-t-il aussi dans la conversation ?",
        opts: ["Dans le nord de l'Italie", "Dans le sud de l'Italie", "Nulle part"]
      },
      { q: "Complète le récit.", tr: "Dante naquit en 1265 et mourut en 1321." },
      { q: "« L'Italie devint une république en 1946. »" },
      { tr: "Ce soir-là il quitta la maison et ne revint jamais." },
      { tr: "C'est là que je compris que je m'étais trompé." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Grammaire",
    title: "Les subordonnées réduites",
    objectives: [
      "remplacer une subordonnée par un infinitif ou un gérondif",
      "employer l'infinitif passé et le gérondif passé",
      "écrire plus concis"
    ],
    theory: [
      {
        h: "Pourquoi réduire",
        p: "Une subordonnée implicite (sans sujet propre ni conjonction) raccourcit le texte et relève le registre. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> C'est l'un des traits qui séparent un texte B2 d'un texte B1."
      },
      {
        h: "La condition : le même sujet",
        p: "Les formes implicites exigent que les deux propositions partagent le <b>sujet</b>. <em>Essendo stanco, sono rimasto a casa</em> est correct ; avec des sujets différents il faut construire la subordonnée complète. C'est ta règle du participe et du gérondif, mot pour mot."
      },
      {
        h: "Le répertoire",
        list: [
          "<em>dopo + infinitif passé</em> : <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + infinitif</em> : <em>prima di partire</em>",
          "<em>gérondif</em> (cause, manière, temps) : <em>tornando a casa, ho incontrato…</em>",
          "<em>gérondif passé</em> : <em>avendo finito, sono uscito</em>",
          "<em>participe passé</em> : <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        contrast: "Cette leçon est presque entièrement transposable : <em>dopo aver mangiato</em> est ton « après avoir mangé », avec le même infinitif passé obligatoire, et <em>finita la riunione</em> ton « la réunion terminée ». Le seul écart est le gérondif : tu le fais précéder de <em>en</em> (« en rentrant à la maison »), l'italien le laisse nu, <em>tornando a casa</em>."
      }
    ],
    grammar: {
      title: "Les formes réduites",
      table: {
        head: ["subordonnée complète", "réduite", "type"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "infinitif passé"],
          ["Prima che io parta…", "Prima di partire…", "infinitif"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "gérondif"],
          ["Poiché ero stanco…", "Essendo stanco…", "gérondif"],
          ["Dopo che ebbi finito…", "Avendo finito…", "gérondif passé"],
          ["Quando la riunione finì…", "Finita la riunione…", "participe"]
        ]
      },
      examples: [
        { tr: "Après avoir lu le contrat, j'ai signé." },
        { tr: "Avant de répondre, j'y ai bien réfléchi." },
        { tr: "En rentrant chez moi, j'ai croisé Giulia." },
        { tr: "Étant en retard, j'ai pris un taxi." },
        { tr: "Ayant déjà vu le film, je suis resté chez moi." },
        { tr: "Le travail terminé, nous sommes tous partis." }
      ]
    },
    vocab: [
      "après avoir (fait)",
      "avant de (faire)",
      "étant",
      "ayant (fait)",
      "tout en + gérondif",
      "une fois (fait)",
      "y réfléchir",
      "conclure",
      "concis",
      "registre écrit",
      "fluide, lisible",
      "alourdir (le style)"
    ],
    exercises: [
      {
        q: "Laquelle est correcte ?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Réduis : « Dopo che ho letto il contratto » → « Dopo ___ letto il contratto »" },
      { q: "Réduis : « Mentre tornavo a casa » → « ___ a casa »" },
      { q: "Réduis : « Poiché ero stanco » → « ___ stanco »" },
      {
        q: "Une forme réduite exige :",
        opts: ["le même temps", "le même sujet dans les deux propositions", "l'absence de négation"]
      },
      {
        q: "Réduis les phrases.",
        tr: "Après avoir lu le contrat, j'ai signé. Avant de répondre, j'y ai réfléchi."
      },
      { q: "« En rentrant chez moi, j'ai croisé Giulia. »" },
      { tr: "Le travail terminé, nous sommes tous partis." },
      { tr: "Ayant déjà vu ce film, j'ai préféré rester chez moi." },
      { tr: "Avant de signer, je voudrais relire le contrat." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Test",
    title: "Test de l'unité 3",
    objectives: ["vérifier le passif, le passato remoto et les subordonnées réduites"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      {
        q: "« Il modulo va compilato » veut dire :",
        opts: ["il va rempli", "il doit être rempli", "il a été rempli"]
      },
      { q: "« La lettera ___ stata scritta da Marco. »" },
      { q: "« Le domande ___ valutate ogni mese. » (venire)" },
      {  },
      { q: "Passato remoto de « prendere », io : ___" },
      { q: "Correct :", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "« Mentre tornavo » → « ___ » (gérondif)" },
      { q: "« Les dossiers doivent être déposés avant vendredi. »" },
      { tr: "Le projet fut approuvé en 1998 et réalisé en trois ans." },
      { tr: "Après avoir lu le contrat, j'ai décidé de ne pas signer." }
    ]
  },
  "unit:b2-u04": {
    title: "Société et débat",
    grammarNote: "vocabulaire abstrait · argumentation · registres"
  },
  "lesson:b2-u04-l1": {
    theme: "Société",
    title: "L'économie et le marché du travail",
    objectives: [
      "comprendre les termes économiques de base de la presse",
      "parler du marché du travail",
      "employer les nominalisations propres à ce registre"
    ],
    theory: [
      {
        h: "Le vocabulaire des pages économiques",
        p: "L'écriture économique repose sur un stock de mots étroit et répétitif. Maîtrise-en une centaine et la plupart des articles s'ouvrent : <em>il PIL</em> (le PIB), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>. Presque tous sont des cognats transparents : tu avances vite ici."
      },
      {
        h: "Les structures caractéristiques",
        list: [
          "nominalisation : <em>la crescita dei prezzi</em> au lieu de « les prix montent »",
          "passif : <em>è stato approvato il decreto</em>",
          "expressions de variation : <em>in aumento, in calo, stabile, in ripresa</em>",
          "comparaisons : <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "À quoi ressemble vraiment le marché du travail italien",
        p: "<em>Il precariato</em> (la précarité), <em>i contratti a termine</em>, <em>la fuga di cervelli</em>, <em>i NEET</em>, <em>il divario Nord-Sud</em> : ils reviennent dans tous les débats publics. Le paysage te parlera, à une pièce près : le <em>divario Nord-Sud</em> n'a pas d'équivalent français, la fracture territoriale y étant pensée autrement."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (l'écart entre ce que paie l'employeur et ce que touche le salarié) est l'un des termes les plus répétés du débat économique italien. C'est ton coin socio-fiscal, mais chez toi la discussion passe plutôt par les charges."
      }
    ],
    grammar: {
      title: "Vocabulaire économique",
      table: {
        head: ["italien", "français", "contexte"],
        rows: [
          ["il PIL", "le PIB", "macroéconomie"],
          ["l'inflazione", "l'inflation", "prix"],
          ["la disoccupazione", "le chômage", "marché du travail"],
          ["il potere d'acquisto", "le pouvoir d'achat", "salaires"],
          ["il precariato", "la précarité", "emploi"],
          ["la fuga di cervelli", "la fuite des cerveaux", "émigration"],
          ["in calo / in aumento", "en baisse / en hausse", "chiffres"]
        ]
      },
      examples: [
        { tr: "L'inflation est en baisse par rapport à l'an dernier." },
        { tr: "Le chômage des jeunes reste un problème structurel." },
        { tr: "Le pouvoir d'achat des ménages a reculé." },
        { tr: "Beaucoup de jeunes diplômés quittent le pays." },
        { tr: "L'écart entre le Nord et le Sud s'est creusé." },
        { tr: "Le décret a été adopté avec des amendements." }
      ]
    },
    vocab: [
      "PIB",
      "inflation",
      "dette publique",
      "chômage",
      "pouvoir d'achat",
      "précarité de l'emploi",
      "fuite des cerveaux",
      "écart, fracture",
      "croissance",
      "reprise",
      "décret",
      "en glissement annuel"
    ],
    exercises: [
      { q: "Associe.", pairs: ["PIB", "inflation", "chômage", "écart"] },
      { q: "« La fuga di cervelli », c'est :", opts: ["une évasion de prison", "la fuite des cerveaux", "la perte de mémoire"] },
      { q: "Complète : « L'inflazione è in ___ rispetto allo scorso anno. » (en baisse)" },
      { q: "Complète la nominalisation : « i prezzi crescono » → « la ___ dei prezzi »" },
      {
        q: "« Il precariato » veut dire :",
        opts: ["l'emploi stable", "le travail précaire à contrats courts", "la retraite"]
      },
      { q: "Complète.", tr: "Le pouvoir d'achat a reculé et le chômage des jeunes reste élevé." },
      { q: "« Le décret a été adopté avec des amendements. »" },
      { tr: "L'écart entre le Nord et le Sud s'est creusé." },
      { tr: "En glissement annuel, le PIB a crû de zéro virgule sept pour cent." },
      { tr: "Le chômage des jeunes reste un problème structurel." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Société",
    title: "Environnement et technologie",
    objectives: [
      "parler du changement climatique et de la technologie",
      "exprimer une inquiétude et un espoir",
      "organiser les arguments pour et contre"
    ],
    theory: [
      {
        h: "Deux domaines, une même forme de débat",
        p: "Le climat comme la technologie se discutent en italien selon le cadre <em>rischi / opportunità</em>. Le squelette vaut la peine d'être prêt : <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Inquiétude et espoir",
        list: [
          "inquiétude : <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "espoir : <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "prudence : <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "Le vocabulaire qui revient sans cesse",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> appelle toujours le congiuntivo : <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em> Ton « le fait que » hésite entre les deux modes ; l'italien, lui, ne laisse pas le choix."
      }
    ],
    grammar: {
      title: "Débat : pour et contre",
      table: {
        head: ["fonction", "formule", "mode"],
        rows: [
          ["inquiétude", "Temo che / C'è il rischio che", "congiuntivo"],
          ["un fait comme sujet", "Il fatto che…", "congiuntivo"],
          ["espoir", "Spero che / Confido che", "congiuntivo"],
          ["réserve", "Bisogna vedere se…", "indicatif"],
          ["dépendance", "Dipenderà da…", "indicatif"],
          ["contraste", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        { tr: "Je crains que la transition ne prenne trop de temps." },
        { tr: "Le fait que ce soit difficile ne veut pas dire que ce soit impossible." },
        { tr: "Il y a un risque que l'automatisation réduise les emplois." },
        { tr: "Les renouvelables couvrent déjà une part significative." },
        { tr: "Il faudra voir si les règles sont appliquées." },
        { tr: "Je suis prudemment optimiste." }
      ]
    },
    vocab: [
      "la transition écologique",
      "énergies renouvelables",
      "empreinte carbone",
      "tri sélectif",
      "déchets",
      "intelligence artificielle",
      "automatisation",
      "désinformation",
      "risque",
      "opportunité",
      "durable",
      "prudemment"
    ],
    exercises: [
      { q: "Complète : « Il fatto che ___ difficile non significa che sia impossibile. » (essere)" },
      { q: "Complète : « C'è il rischio che l'automazione ___ i posti di lavoro. » (ridurre)" },
      { q: "Associe.", pairs: ["empreinte carbone", "tri sélectif", "déchets", "durable"] },
      { q: "Après « il fatto che » vient :", opts: ["l'indicatif", "le congiuntivo", "l'infinitif"] },
      {
        q: "« Bisogna vedere se le norme verranno applicate » exprime :",
        opts: ["une certitude", "une réserve prudente", "une inquiétude"]
      },
      {
        q: "Complète l'intervention.",
        tr: "D'un côté il y a des risques évidents, de l'autre les opportunités sont réelles."
      },
      { q: "« Je crains que ça ne prenne trop de temps. »" },
      { tr: "Je suis prudemment optimiste pour l'avenir." },
      { tr: "Le fait que la technologie avance ne résout pas le problème à lui seul." },
      { tr: "Il y a un risque que la transition soit trop lente." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Communication",
    title: "Défendre une position",
    objectives: ["construire une argumentation développée", "répondre à un contre-argument", "clore un débat par une conclusion"],
    theory: [
      {
        h: "Trois mouvements qui font tenir une argumentation",
        list: [
          "<b>concession</b> : donne raison à l'autre — <em>È vero che…</em>",
          "<b>le retournement</b> : ôte-lui son poids — <em>Tuttavia / Va però considerato che…</em>",
          "<b>preuve</b> : appuie sur des chiffres ou un exemple — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Répondre à un contre-argument",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. Toutes attaquent l'argument, pas la personne."
      },
      {
        h: "Le ton d'un débat italien",
        p: "Le débat italien peut être bruyant et plein d'interruptions, mais il devient rarement personnel. La formule <em>con tutto il rispetto, non sono d'accordo</em> est une manière parfaitement acceptable d'ouvrir un désaccord, et couper la parole se lit comme de l'intérêt, pas comme de l'impolitesse. L'écart avec ton habitude est là : la contradiction italienne est plus sonore et moins formelle que la joute française, sans être plus dure."
      },
      {
        tip: "<em>Il punto è che…</em> (« le fond du problème, c'est que… ») est la façon la plus efficace de ramener une discussion à l'essentiel quand elle part en digressions."
      }
    ],
    grammar: {
      title: "Argumentation avancée",
      table: {
        head: ["mouvement", "formule", "en français"],
        rows: [
          ["concession", "È vero che… / Concordo sul fatto che…", "Il est vrai que…"],
          ["retournement", "Va però considerato che…", "Il faut cependant tenir compte du fait que…"],
          ["preuve", "I dati mostrano che…", "Les chiffres montrent que…"],
          ["réfutation", "Mi sembra una generalizzazione.", "Ça me paraît une généralisation."],
          ["l'essentiel", "Il punto è che…", "Le fond du problème, c'est que…"],
          ["conclusion", "Alla luce di quanto detto…", "À la lumière de ce qui a été dit…"]
        ]
      },
      examples: [
        {
          tr: "Il est vrai que les coûts sont élevés, mais il faut tenir compte des économies à long terme."
        },
        { tr: "Les chiffres montrent la tendance inverse." },
        { tr: "Cela vaut dans certains cas, pas comme règle générale." },
        { tr: "Le fond du problème, c'est que nous n'avons pas d'alternative réaliste." },
        { tr: "Avec tout le respect que je vous dois, je ne suis pas d'accord." },
        { tr: "À la lumière de ce qui a été dit, je propose de revoir le plan." }
      ]
    },
    vocab: [
      "argumenter",
      "généralisation",
      "tenir (d'un argument)",
      "réfuter",
      "contre-argument",
      "s'accorder sur",
      "à la lumière de",
      "à long terme",
      "le fond du problème, c'est que",
      "avec tout le respect",
      "revoir, réviser",
      "tendance"
    ],
    exercises: [
      { q: "Associe.", pairs: ["réfuter", "tenir", "à la lumière de", "généralisation"] },
      {
        q: "Quel mouvement renforce le plus une argumentation ?",
        opts: [
          "Répéter sa thèse",
          "Donner raison à l'autre avant de lui ôter son poids",
          "Hausser le ton"
        ]
      },
      { q: "Complète : « Va però ___ che i costi si ammortizzano. » (tenir compte)" },
      { q: "Complète : « Il ___ è che non abbiamo alternative. »" },
      {
        q: "Construis l'argument.",
        tr: "Il est vrai que les coûts sont élevés, mais il faut tenir compte des économies à long terme."
      },
      { q: "« Ça me paraît une généralisation. »" },
      {
        q: "Un débat en réunion.",
        setting: "Réunion d'équipe, discussion sur le budget.",
        lines: [
          { tr: "Cet investissement est trop cher, point final." },
          {
            tr: "Concède une part et introduis un contre-argument.",
            answerTr: "Il est vrai que les coûts sont élevés, mais il faut tenir compte des économies à long terme."
          },
          { tr: "Mais tout le monde dit que ces projets échouent." },
          {
            tr: "Réfute la généralisation en citant les chiffres.",
            answerTr: "Ça me paraît une généralisation : les chiffres montrent le contraire."
          }
        ]
      },
      { tr: "À la lumière de ce qui a été dit, je propose de revoir le plan." },
      { tr: "Avec tout le respect que je vous dois, je ne pense pas que cet argument tienne." },
      { tr: "Le fond du problème, c'est que nous n'avons pas d'alternative réaliste." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Examen",
    title: "Test — révision des unités 1 à 4",
    objectives: ["vérifier le congiuntivo, les conditionnelles, le passif et l'argumentation"],
    theory: [{ p: "Douze tâches sur les quatre premières unités. On valide à 70 %." }],
    exercises: [
      {  },
      { q: "« Pensavo che ___ più semplice. »" },
      { q: "« Speravo che mi ___ chiamato. »" },
      { q: "« Se ___ tempo, verrei. »", opts: ["ho", "avrei", "avessi"] },
      { q: "Type 3.", tr: "Si j'avais étudié, j'aurais réussi l'examen." },
      { q: "« Il modulo ___ compilato in stampatello. » (doit être)" },
      { q: "Passato remoto de « fare », lui : ___" },
      { q: "Correct :", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "« Il fatto che ___ difficile non significa niente. » (essere)" },
      { q: "« Parla come se ___ un esperto. »" },
      { q: "« Il est vrai que les coûts sont élevés, mais il faut tenir compte des économies. »" },
      { tr: "À la lumière des chiffres, je pense qu'il vaut la peine de revoir le plan." }
    ]
  }
});
