/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/c1-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c1-u01": {
    title: "Toutes les valeurs de SI",
    grammarNote: "si réfléchi, réciproque, impersonnel, passif · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Grammaire avancée",
    title: "Distinguer les valeurs de si",
    objectives: [
      "reconnaître toutes les fonctions de si dans un texte",
      "distinguer le si impersonnel du passif",
      "employer correctement ci si"
    ],
    theory: [
      {
        h: "Une forme, six emplois",
        list: [
          "<b>réfléchi</b> : <em>Marco si lava.</em> — faire quelque chose à soi-même",
          "<b>réciproque</b> : <em>Si salutano ogni mattina.</em> — l'un l'autre",
          "<b>impersonnel</b> : <em>In Italia si mangia bene.</em> — les gens en général",
          "<b>passif (passivante)</b> : <em>Qui si vendono panini.</em> — le verbe s'accorde avec la chose",
          "<b>d'instruction</b> : <em>Il volante si tiene così.</em> — voilà comment on fait",
          "<b>« nous » toscan</b> : <em>Stasera noi si va al cinema.</em> — régional"
        ]
      },
      {
        contrast: "Deux de ces valeurs sont les tiennes sans réserve, le réfléchi et le réciproque, et une troisième te tend la main : ton passif pronominal accorde lui aussi le verbe avec la chose, « les maisons <b>se vendent</b> ». C'est l'impersonnel qui décroche, parce que tu le rends par <em>on</em>, un pronom sujet. D'où le conseil pratique : quand un nom suit, pense à « ça se vend » ; quand il n'y en a pas, pense à « on »."
      },
      {
        h: "Le test impersonnel contre passif",
        p: "Si un nom suit qui pourrait être complément d'objet direct, c'est le <b>si passivante</b> et le verbe s'accorde avec son nombre : <em>si <b>vendono</b> case</em>. S'il n'y en a pas, ou si le verbe est intransitif, c'est le <b>si impersonale</b> et la forme reste au singulier : <em>si <b>lavora</b> troppo</em>."
      },
      {
        h: "Ci si : deux si qui se percutent",
        p: "Un <em>si</em> impersonnel avec un verbe pronominal donnerait « si si », donc le premier devient <strong>ci</strong> : <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>. Chez toi la collision n'a jamais lieu, puisque « on se lève tôt » emploie deux mots différents : c'est une difficulté purement italienne."
      },
      {
        h: "Temps composés : toujours essere",
        p: "Le <em>si</em> impersonnel prend <em>essere</em>, même quand le verbe demande normalement <em>avere</em> : <em>si <b>è</b> mangiato bene</em>, là où tu dis « on <b>a</b> bien mangé ». Le participe reste au masculin singulier, mais un adjectif attribut passe au pluriel : <em>si è stati contenti</em> — ce que ton oral fait aussi quand <em>on</em> vaut <em>nous</em>."
      }
    ],
    grammar: {
      title: "Si : le tableau de décision",
      table: {
        head: ["contexte", "forme", "exemple"],
        rows: [
          ["réfléchi", "si + verbe", "Si sveglia alle sei."],
          ["réciproque", "si + pluriel", "Si scrivono ogni giorno."],
          ["impersonnel", "si + 3e sing.", "Si lavora troppo."],
          ["passif, singulier", "si + 3e sing.", "Si vende una casa."],
          ["passif, pluriel", "si + 3e plur.", "Si vendono case."],
          ["impersonnel réfléchi", "ci si", "Ci si alza presto."],
          ["temps composé", "si è + participe", "Si è mangiato bene."],
          ["avec un adjectif", "si è + pluriel", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "Dans ce bureau on travaille trop et on gagne peu." },
        { tr: "Toutes les maisons se sont vendues en deux mois." },
        { tr: "On s'habitue même au pire." },
        { tr: "On en a longuement discuté, sans résultat." },
        { tr: "Quand on est jeune, on sous-estime le temps." },
        { tr: "Le volant se tient à deux mains." }
      ]
    },
    vocab: [
      "s'habituer",
      "s'ennuyer",
      "sous-estimer",
      "surestimer",
      "discuter, débattre",
      "gagner (de l'argent)",
      "se rendre compte",
      "s'adapter, se plier",
      "le pire / le meilleur",
      "sans résultat",
      "longuement",
      "en général"
    ],
    exercises: [
      {
        q: "« Qui si ___ case. » (ici il se vend des maisons)",
        opts: ["vende", "vendono", "vendere"],
        why: "Le si passivante s'accorde avec le nom au pluriel."
      },
      {
        q: "« In questo ufficio si ___ troppo. » (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "Pas de complément d'objet direct → si impersonale, singulier."
      },
      { q: "Complète : « ___ si alza presto in campagna. » (impersonnel, alzarsi)" },
      { q: "Complète : « Si ___ discusso a lungo. » (temps composé)" },
      {
        q: "« Si è stati fortunati » : pourquoi « stati » et pas « stato » ?",
        opts: [
          "C'est une faute",
          "Un adjectif après le si impersonnel passe au pluriel",
          "Parce que essere est irrégulier"
        ]
      },
      {
        q: "Dans quelles phrases si est-il le passif (passivante) ?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Complète les formes.", tr: "En Italie on mange bien, mais on travaille trop d'heures." },
      { q: "« On s'habitue à tout. »" },
      { tr: "On en a longuement discuté, mais on n'est arrivé à aucune conclusion." },
      { tr: "Quand on est jeune, on sous-estime le temps." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Grammaire avancée",
    title: "Place de l'adjectif et sens",
    objectives: [
      "reconnaître le changement de sens lié à la place",
      "employer un adjectif à dessein",
      "ne pas contresens les textes"
    ],
    theory: [
      {
        h: "Devant le nom : figuré ou subjectif",
        p: "Un adjectif <b>devant</b> le nom ne distingue en général pas, il caractérise : <em>un <b>vecchio</b> amico</em> est un ami de longue date, pas un ami âgé. <b>Après</b> le nom il distingue et reste le plus souvent littéral : <em>un amico <b>vecchio</b></em>."
      },
      {
        contrast: "C'est ton mécanisme, transposé mot pour mot : « un grand homme » face à « un homme grand », « un pauvre homme » face à « un homme pauvre », « une certaine information » face à « une information certaine ». Une différence de fond quand même : le français a une liste fermée d'adjectifs qui précèdent par défaut (bon, grand, petit, jeune, vieux, beau), alors que l'italien postpose beaucoup plus volontiers, et l'antéposition y est donc plus marquée qu'elle ne l'est chez toi."
      },
      {
        h: "Des paires à mémoriser",
        list: [
          "<em>un grande uomo</em> (un grand homme) — <em>un uomo grande</em> (un homme grand)",
          "<em>un buon medico</em> (un médecin compétent) — <em>un medico buono</em> (un médecin bon, gentil)",
          "<em>un alto magistrato</em> (un haut magistrat) — <em>un magistrato alto</em> (un magistrat de grande taille)",
          "<em>una certa informazione</em> (une certaine information) — <em>un'informazione certa</em> (une information sûre)",
          "<em>un povero uomo</em> (un pauvre homme) — <em>un uomo povero</em> (un homme sans argent)",
          "<em>diverse persone</em> (plusieurs personnes) — <em>persone diverse</em> (des personnes différentes)",
          "<em>un semplice impiegato</em> (un simple employé) — <em>un impiegato semplice</em> (un employé simplet)"
        ]
      },
      {
        h: "Pourquoi ça compte en C1",
        p: "Dans la presse et la littérature la distinction porte du sens, pas du style. Lire <em>una certa informazione</em> comme « une information sûre » au lieu de « une certaine information » retourne la phrase."
      }
    ],
    grammar: {
      title: "Place et sens",
      table: {
        head: ["devant", "après", "la différence"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "de longue date / âgé"],
          ["un grande uomo", "un uomo grande", "grand homme / homme grand"],
          ["un buon medico", "un medico buono", "compétent / gentil"],
          ["una certa notizia", "una notizia certa", "une certaine / une sûre"],
          ["un povero uomo", "un uomo povero", "malheureux / sans argent"],
          ["diverse persone", "persone diverse", "plusieurs / différentes"],
          ["un semplice errore", "un errore semplice", "une simple / une facile"]
        ]
      },
      examples: [
        { tr: "C'est un grand professionnel, même si c'est un homme difficile." },
        { tr: "J'ai eu une certaine information, mais ce n'est pas une information sûre." },
        { tr: "Ce n'est qu'un simple malentendu." },
        { tr: "J'ai rencontré plusieurs personnes très différentes les unes des autres." },
        { tr: "Pauvre gamin : il a tout perdu." },
        { tr: "Elle habite une maison vieille mais magnifique." }
      ]
    },
    vocab: [
      "malentendu",
      "professionnel, expert",
      "la vieille garde",
      "haut fonctionnaire",
      "un simple, un pur",
      "certaine / sûre",
      "seul / unique",
      "autre / véritable",
      "autre / tout neuf",
      "seul / tout seul",
      "distinguer",
      "nuance"
    ],
    exercises: [
      {
        q: "« Un vecchio amico » veut dire :",
        opts: ["un ami âgé", "un ami de longue date", "un ancien ami"]
      },
      {
        q: "« Un'informazione certa » veut dire :",
        opts: ["une certaine information", "une information sûre", "une information confidentielle"]
      },
      { q: "« Diverse persone » veut dire :", opts: ["des personnes différentes", "plusieurs personnes", "des inconnus"] },
      {
        q: "Associe l'expression au sens.",
        pairs: ["un grand homme", "un homme grand", "un pauvre homme", "un homme sans argent"]
      },
      {
        q: "Mets l'adjectif à la bonne place (devant ou après).",
        tr: "J'ai eu une certaine nouvelle, mais ce n'est pas une nouvelle sûre."
      },
      { q: "« Ce n'est qu'un simple malentendu. »" },
      {
        q: "Pourquoi cette distinction compte-t-elle dans la presse ?",
        opts: [
          "Parce que ça fait élégant",
          "Parce que la place change le sens de la phrase",
          "Parce que la grammaire l'exige"
        ]
      },
      { tr: "C'est un grand professionnel, même si c'est un homme difficile." },
      { tr: "Ce n'est pas un homme gentil qui se trouve être médecin, c'est un bon médecin : deux choses différentes." },
      { tr: "J'ai rencontré plusieurs personnes très différentes les unes des autres." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Grammaire avancée",
    title: "Intensificateurs et superlatifs",
    objectives: [
      "employer les préfixes intensificateurs",
      "connaître les superlatifs idiomatiques",
      "reconnaître les formes en -errimo"
    ],
    theory: [
      {
        h: "Répéter l'adjectif",
        p: "L'intensificateur le plus familier est la répétition : <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. Ce n'est ni une faute ni un relâchement, c'est un mécanisme vivant de l'italien parlé."
      },
      {
        contrast: "Le français n'a rien de systématique en face : « vite vite » existe à l'oral, mais on ne dit pas « un café chaud chaud », et il faut passer par <em>tout</em> ou par un adverbe. C'est le seul procédé de cette leçon qui soit vraiment à construire ; les préfixes, eux, sont les tiens : archi-, hyper-, super-, ultra-, méga-."
      },
      {
        h: "Les préfixes",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Registre familier ou journalistique ; dans un texte formel, emploie <em>estremamente</em>."
      },
      {
        h: "Les superlatifs idiomatiques",
        p: "Des comparaisons figées qu'on ne peut pas deviner : <em>stanco morto</em> (mort de fatigue), <em>ubriaco fradicio</em> (ivre mort), <em>bagnato fradicio</em> (trempé jusqu'aux os), <em>pieno zeppo</em> (plein à craquer), <em>innamorato cotto</em> (amoureux fou), <em>povero in canna</em> (pauvre comme Job), <em>buono come il pane</em>. Les trois premières te tendent la même image que le français ; les autres non, et c'est précisément là qu'un calque produit une phrase que personne ne dit."
      },
      {
        h: "Les formes en -errimo et -entissimo",
        p: "Superlatifs savants d'adjectifs d'origine latine : <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em> ; plus <em>benevolo → benevolentissimo</em>. Le français n'a pas de série vivante équivalente, hormis quelques formes plaisantes comme « célébrissime » : ici il faut apprendre, pas transposer."
      }
    ],
    grammar: {
      title: "Les intensificateurs",
      table: {
        head: ["type", "exemple", "registre"],
        rows: [
          ["répétition", "magra magra", "oral"],
          ["-issimo", "bellissimo", "neutre"],
          ["préfixe", "straricco, iperattivo", "familier / presse"],
          ["locution", "stanco morto", "oral"],
          ["-errimo", "celeberrimo", "écrit"],
          ["formel", "estremamente / oltremodo", "écrit"]
        ]
      },
      examples: [
        { tr: "Je suis mort de fatigue, je n'en peux plus." },
        { tr: "La salle était pleine à craquer." },
        { tr: "C'est un cas célébrissime dans l'histoire du droit." },
        { tr: "Il est aux anges à cause de la nouvelle." },
        { tr: "Un thé bien chaud, s'il vous plaît." },
        { tr: "Un adversaire acharné du gouvernement." }
      ]
    },
    vocab: [
      "mort de fatigue",
      "ivre mort",
      "plein à craquer",
      "trempé jusqu'aux os",
      "amoureux fou",
      "pauvre comme Job",
      "bon comme le pain",
      "richissime",
      "hyperactif",
      "célébrissime",
      "acharné, farouche",
      "au plus haut point"
    ],
    exercises: [
      {
        q: "Associe la locution au sens.",
        pairs: ["mort de fatigue", "plein à craquer", "amoureux fou", "très pauvre"]
      },
      { q: "« Ubriaco fradicio » veut dire :", opts: ["un peu éméché", "ivre mort", "trempé jusqu'aux os"] },
      { q: "Forme le superlatif savant de « celebre » : ___" },
      { q: "Forme le superlatif savant de « acre » : ___" },
      {
        q: "« Magra magra » est :",
        opts: ["une faute de style", "un intensificateur familier par répétition", "un pluriel"]
      },
      { q: "Quelle variante convient à un texte formel ?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Complète les locutions.", tr: "Après le voyage j'étais mort de fatigue, et la salle était pleine à craquer." },
      { q: "« C'est un adversaire acharné de cette réforme. »" },
      { tr: "Il était trempé jusqu'aux os et mort de fatigue, mais il souriait." },
      { tr: "La salle était pleine à craquer, on ne trouvait pas une place." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier le si, la place de l'adjectif et les superlatifs"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« Qui si ___ case. »", opts: ["vende", "vendono", "vendere"] },
      { q: "« In ufficio si ___ troppo. » (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "« ___ si alza presto. » (impersonnel, réfléchi)" },
      { q: "« Si ___ discusso a lungo. »" },
      { q: "« Un vecchio amico » :", opts: ["âgé", "de longue date", "ancien"] },
      { q: "« Diverse persone » :", opts: ["des personnes différentes", "plusieurs personnes", "des inconnus"] },
      { q: "Superlatif de « celebre » : ___" },
      { q: "Associe.", pairs: ["mort de fatigue", "plein à craquer", "acharné", "très pauvre"] },
      { tr: "Toutes les maisons se sont vendues en moins de deux mois." },
      { tr: "On s'habitue à tout, même au pire." }
    ]
  },
  "unit:c1-u02": {
    title: "Les verbes à pronoms incorporés",
    grammarNote: "verbi pronominali · phraséologie · registre oral"
  },
  "lesson:c1-u02-l1": {
    theme: "Grammaire avancée",
    title: "Les verbes à pronoms incorporés",
    objectives: [
      "reconnaître les verbes à pronoms soudés",
      "les conjuguer aux temps composés",
      "les employer dans une vraie conversation"
    ],
    theory: [
      {
        h: "Le sens ne se déduit pas des pièces",
        p: "<em>Prendersela</em> ne veut pas dire « le prendre pour soi », mais se vexer. <em>Cavarsela</em> n'a rien à voir avec extraire quoi que ce soit. Ce sont des unités de lexique à part entière, à apprendre comme du vocabulaire."
      },
      {
        contrast: "C'est encore une fois ta leçon la plus facile du niveau : <em>cavarsela</em> est « s'en sortir », <em>andarsene</em> « s'en aller », <em>fregarsene</em> « s'en ficher », <em>intendersene</em> « s'y connaître », <em>avercela con</em> « en vouloir à », <em>farcela</em> « y arriver ». Le procédé, un verbe soudé à un clitique vidé de son référent, est identique. Le seul écart tient à l'accord : <em>me la sono cavat<b>a</b></em> s'accorde avec la <em>la</em>, alors que ton « je m'en suis sorti » s'accorde avec le sujet."
      },
      {
        h: "La conjugaison",
        p: "Les pronoms se détachent et repassent devant le verbe : <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. Aux temps composés toujours <em>essere</em>, et le participe s'accorde avec <em>la</em> : <em>me la sono cavata</em>, <em>ce l'ho fatta</em>."
      },
      {
        h: "Les plus courants",
        list: [
          "<em>farcela</em> — y arriver : <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — s'en sortir : <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — se vexer : <em>Non te la prendere.</em>",
          "<em>andarsene</em> — s'en aller : <em>Me ne vado.</em>",
          "<em>fregarsene</em> — s'en ficher : <em>Se ne frega.</em>",
          "<em>avercela con</em> — en vouloir à : <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — se sentir de taille : <em>Non me la sento.</em>",
          "<em>intendersene</em> — s'y connaître : <em>Se ne intende di vini.</em>"
        ]
      }
    ],
    grammar: {
      title: "Conjuguer les verbi pronominali",
      table: {
        head: ["personne", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["passé", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "J'y suis arrivé, j'ai eu l'examen !" },
        { tr: "Je m'en sors plutôt bien en allemand." },
        { tr: "Ne le prends pas mal, ce n'était pas pour toi." },
        { tr: "Il est parti sans dire au revoir." },
        { tr: "Je ne me sens pas de conduire ce soir." },
        { tr: "Tu m'en veux ?" }
      ]
    },
    vocab: [
      "y arriver, réussir",
      "s'en sortir",
      "se vexer",
      "s'en aller, partir",
      "s'en ficher",
      "en vouloir à",
      "se sentir de taille",
      "s'y connaître",
      "se débrouiller seul",
      "arrêter",
      "laisser tomber (familier)",
      "s'éclater"
    ],
    exercises: [
      { q: "Complète : « ___ l'ho fatta! » (j'y suis arrivé)" },
      { q: "Complète : « ___ la cavo con l'italiano. » (je m'en sors)" },
      { q: "Complète : « Non ___ la prendere. » (ne le prends pas mal)" },
      {
        q: "« Se ne frega di tutto » veut dire :",
        opts: ["il s'inquiète de tout", "il se fiche de tout", "il s'occupe de tout"]
      },
      {
        q: "Pourquoi « me la sono cavata » et pas « cavato » ?",
        opts: ["C'est une faute", "Le participe s'accorde avec la", "Parce que c'est une femme qui parle"]
      },
      { q: "Associe.", pairs: ["se sentir de taille", "s'y connaître", "arrêter", "s'éclater"] },
      { q: "Complète les pronoms.", tr: "Je ne me sens pas de conduire, j'y vais à pied." },
      { q: "« Tu m'en veux ? »" },
      { tr: "Il est parti sans dire au revoir à personne." },
      { tr: "Je m'en sors plutôt bien, mais je ne m'y connais pas vraiment." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Grammaire avancée",
    title: "Le passif modal et stylistique",
    objectives: [
      "employer andare + participe pour exprimer la nécessité",
      "choisir venire pour souligner le processus",
      "reconnaître ces formes dans les textes officiels"
    ],
    theory: [
      {
        h: "Andare = doit être",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Pas « la demande est déposée », mais « la demande <b>doit être</b> déposée ». Ton « la demande <b>est à</b> déposer » porte exactement la même obligation avec la même économie de moyens ; un passif ordinaire, lui, ne la porte pas, et c'est là que se produit le contresens."
      },
      {
        h: "Attention à la restriction",
        p: "Le passif avec <em>andare</em> ne fonctionne qu'aux <b>temps simples</b> (présent, imparfait, futur). « È andato presentato » n'existe pas dans ce sens : aux temps composés il faut <em>doveva essere presentato</em>."
      },
      {
        h: "Venire : processus plutôt qu'état",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> souligne l'action en cours, alors que <em>è applicata</em> peut se lire comme un état. <em>Venire</em> est très fréquent dans les textes juridiques et administratifs."
      },
      {
        h: "Une troisième variante : essere da + infinitif",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Proche de <em>va rivisto</em>, un peu plus léger et plus oral. C'est ton « ce chapitre est à revoir », avec la même impression de tâche en attente."
      }
    ],
    grammar: {
      title: "Les variantes du passif",
      table: {
        head: ["forme", "sens", "restriction"],
        rows: [
          ["essere + participe", "passif général", "tous les temps"],
          ["venire + participe", "processus, répétition", "temps simples seulement"],
          ["andare + participe", "nécessité", "temps simples seulement"],
          ["si passivante", "registre oral", "3e personne"],
          ["essere da + infinitif", "reste à faire", "registre plus léger"],
          ["andare perso / smarrito", "perte accidentelle", "exception lexicale"]
        ]
      },
      examples: [
        { tr: "La demande doit être déposée avant le trente." },
        { tr: "Ces données doivent être vérifiées avant publication." },
        { tr: "Le règlement est mis à jour chaque année." },
        { tr: "Le chapitre est encore à revoir." },
        { tr: "Deux documents ont été égarés.", note: "andare + perso = perte accidentelle" },
        { tr: "Toutes les demandes ont été rejetées." }
      ]
    },
    vocab: [
      "déposer une demande",
      "vérifier, contrôler",
      "mettre à jour",
      "rejeter",
      "le règlement, la réglementation",
      "publication",
      "être égaré",
      "égarer",
      "encore à revoir",
      "dans les délais",
      "obligation formelle",
      "en vigueur"
    ],
    exercises: [
      {
        q: "« La domanda va presentata » veut dire :",
        opts: ["La demande est en train d'être déposée", "La demande doit être déposée", "La demande a été déposée"]
      },
      {
        q: "Quelle phrase est fautive ?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "Le passif avec andare ne fonctionne pas aux temps composés."
      },
      { q: "Complète : « Questi dati ___ verificati. » (doivent être vérifiés)" },
      { q: "Complète : « Il regolamento ___ aggiornato ogni anno. » (venire)" },
      {
        q: "« Sono andati persi due documenti » veut dire :",
        opts: ["Les documents devaient être perdus", "Deux documents ont été égarés", "Les documents sont partis"]
      },
      {
        q: "Complète les formes.",
        tr: "La demande doit être déposée avant le trente ; les données sont vérifiées par le bureau."
      },
      { q: "« Ce chapitre est encore à revoir. »" },
      { tr: "Toutes les demandes ont été rejetées." },
      { tr: "Le formulaire doit être rempli entièrement et signé en bas." },
      { tr: "Ces données doivent être vérifiées avant publication." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Vocabulaire",
    title: "La phraséologie en usage",
    objectives: [
      "comprendre les locutions courantes de l'oral et de la presse",
      "en employer quelques-unes naturellement",
      "éviter les calques du français"
    ],
    theory: [
      {
        h: "Une locution est un raccourci, pas un ornement",
        p: "Une locution italienne remplace en général une phrase entière. <em>Non ci piove</em> veut dire « ça ne fait aucun doute », <em>tagliare la testa al toro</em> « trancher une bonne fois ». Employées à leur place, elles raccourcissent le propos et le font sonner natif."
      },
      {
        h: "Des locutions que tu entendras vraiment",
        list: [
          "<em>in bocca al lupo</em> — bonne chance (réponse : <em>crepi</em>)",
          "<em>non vedo l'ora</em> — j'ai hâte",
          "<em>avere le mani in pasta</em> — être dans le coup, avoir des entrées",
          "<em>prendere in giro</em> — se moquer de",
          "<em>costare un occhio della testa</em> — coûter les yeux de la tête",
          "<em>essere al verde</em> — être fauché",
          "<em>fare il punto</em> — faire le point",
          "<em>mettere nero su bianco</em> — mettre noir sur blanc"
        ]
      },
      {
        contrast: "Quatre de ces huit sont mot pour mot les tiennes : les yeux de la tête, le point, le noir sur blanc, la hâte. Cette proximité est un piège autant qu'un cadeau, parce qu'elle donne envie de traduire les autres pareillement. <em>Avere le mani in pasta</em> n'est pas « avoir les mains dans le cambouis » : c'est être introduit, avoir de l'influence, et ça se dit souvent avec admiration."
      },
      {
        h: "Faux amis franco-italiens",
        p: "<em>Salire</em> veut dire monter, pas salir (<em>sporcare</em>). <em>Pretendere</em> veut dire exiger, pas prétendre (<em>sostenere</em>). <em>Morbido</em> veut dire doux, moelleux, et n'a rien de morbide (<em>morboso</em>). <em>Magazzino</em> est un entrepôt, pas un magasin (<em>negozio</em>). <em>Confetti</em> sont des dragées, pas des confettis (<em>coriandoli</em>). <em>Camera</em> est une chambre, pas une caméra (<em>telecamera</em>). Ces six-là font plus de dégâts que n'importe quel point de grammaire, parce qu'ils sonnent parfaitement."
      }
    ],
    grammar: {
      title: "Locutions et faux amis",
      table: {
        head: ["italien", "sens", "note"],
        rows: [
          ["non ci piove", "ça ne fait aucun doute", "locution"],
          ["non vedo l'ora", "j'ai hâte", "+ di + infinitif"],
          ["essere al verde", "être fauché", "locution"],
          ["costare un occhio della testa", "coûter les yeux de la tête", "même image qu'en français"],
          ["salire", "monter", "faux ami"],
          ["pretendere", "exiger", "faux ami"],
          ["morbido", "doux, moelleux", "faux ami"],
          ["magazzino", "entrepôt", "faux ami"]
        ]
      },
      examples: [
        { tr: "J'ai hâte de te revoir." },
        { tr: "Ce voyage a coûté les yeux de la tête." },
        { tr: "Faisons le point sur où nous en sommes." },
        { tr: "Mettons tout ça noir sur blanc." },
        { tr: "Il est dans le coup sur tous les dossiers." },
        { tr: "Tu te moques de moi ?" }
      ]
    },
    vocab: [
      "ça ne fait aucun doute",
      "j'ai hâte de",
      "être fauché",
      "coûter les yeux de la tête",
      "se moquer de",
      "faire le point",
      "noir sur blanc",
      "être dans le coup",
      "parler à un mur",
      "monter (non : salir)",
      "exiger (non : prétendre)",
      "doux (non : morbide)"
    ],
    exercises: [
      {
        q: "Associe la locution à son sens.",
        pairs: ["ça ne fait aucun doute", "être fauché", "faire le point", "se moquer de"]
      },
      { q: "« Salire » en italien veut dire :", opts: ["salir", "monter", "sortir"] },
      { q: "« La colazione » est :", opts: ["le dîner", "le petit-déjeuner", "le déjeuner"] },
      { q: "Complète : « Non vedo l'ora ___ rivederti. »" },
      {
        q: "« Costare un occhio della testa » veut dire :",
        opts: ["faire mal", "coûter très cher", "être inestimable"]
      },
      {
        q: "Lesquels sont des faux amis pour un francophone ?",
        opts: ["morbido", "pretendere", "tavolo", "magazzino"]
      },
      { q: "Complète les locutions.", tr: "Ce voyage a coûté les yeux de la tête et maintenant je suis fauché." },
      { q: "« Faisons le point et mettons-le noir sur blanc. »" },
      { tr: "Ça ne fait aucun doute : la décision doit être prise aujourd'hui." },
      { tr: "J'ai hâte que ce projet se termine." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier les verbi pronominali, le passif modal et la phraséologie"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« ___ l'ho fatta! »" },
      { q: "« ___ la cavo con l'italiano. »" },
      { q: "« Non ___ la prendere. »" },
      { q: "« Se ne frega » :", opts: ["il s'inquiète", "il s'en fiche", "il s'en occupe"] },
      { q: "« Questi dati ___ verificati. » (doivent être)" },
      {
        q: "Fautif :",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "« Salire » :", opts: ["salir", "monter", "sortir"] },
      { q: "Associe.", pairs: ["être fauché", "aucun doute", "faire le point", "noir sur blanc"] },
      { tr: "Je ne me sens pas de décider maintenant, j'y réfléchis et je te dis." },
      { tr: "J'y suis arrivé, mais de justesse." }
    ]
  },
  "unit:c1-u03": {
    title: "Registres et cohésion textuelle",
    grammarNote: "burocratese · italien parlé · dislocation · discours rapporté"
  },
  "lesson:c1-u03-l1": {
    theme: "Style",
    title: "La langue administrative : la lire, pas l'écrire",
    objectives: [
      "décoder les constructions bureaucratiques typiques",
      "les ramener à l'italien ordinaire",
      "repérer l'abus de registre"
    ],
    theory: [
      {
        h: "Comment la reconnaître",
        list: [
          "nominalisation : <em>si procede all'erogazione</em> au lieu de <em>si eroga</em>",
          "passif et impersonnel : <em>si comunica che…</em>",
          "renvoi en arrière : <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "prépositions composées : <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "lexique latinisant : <em>effettuare</em> pour <em>fare</em>, <em>trattasi di</em> pour <em>si tratta di</em>"
        ]
      },
      {
        contrast: "Tu reconnaîtras chacun de ces traits : ton administration écrit pareil, avec les mêmes briques latines. « Il est porté à votre connaissance », « en vertu de l'article », « susmentionné », « ledit document », « effectuer le paiement », « conformément à ». L'avantage à la lecture est considérable ; le risque aussi, parce que la familiarité donne envie d'écrire ainsi, et le conseil est le même dans les deux langues : comprendre sans imiter."
      },
      {
        h: "À quoi elle sert",
        p: "Le registre administratif vise la précision et l'impersonnalité, souvent au détriment de la lisibilité. En C1, <b>comprendre</b> ces textes est une compétence nécessaire ; <b>écrire</b> ainsi n'est pas conseillé hors d'un contexte juridique."
      },
      {
        h: "Le mouvement inverse : simplifier",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> À faire avec chaque courrier officiel qui te parvient : ça raccourcit et ça éclaircit."
      }
    ],
    grammar: {
      title: "Le burocratese et sa traduction",
      table: {
        head: ["administratif", "italien ordinaire", "en français"],
        rows: [
          ["si comunica che", "vi informiamo che", "il est porté à votre connaissance que"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "en vertu de l'article 5"],
          ["di cui sopra", "indicato prima", "susmentionné"],
          ["effettuare il pagamento", "pagare", "effectuer le paiement"],
          ["in ottemperanza a", "seguendo", "conformément à"],
          ["il predetto documento", "quel documento", "ledit document"],
          ["trattasi di", "si tratta di", "il s'agit de"]
        ]
      },
      examples: [
        { tr: "Il est porté à votre connaissance que le bureau sera fermé le 2 juin." },
        { tr: "Le paiement devra être effectué dans un délai de trente jours." },
        { tr: "Conformément à la réglementation en vigueur, la demande est irrecevable." },
        { tr: "Veuillez joindre une copie du document susmentionné." },
        { tr: "Le délai précité n'est pas prorogeable." },
        { tr: "Il vous est enjoint de cesser immédiatement." }
      ]
    },
    vocab: [
      "en vertu de, conformément à",
      "en application de",
      "susmentionné",
      "ledit",
      "effectuer, procéder à",
      "de rigueur, non prorogeable",
      "irrecevable",
      "la réglementation en vigueur",
      "mettre en demeure",
      "demande, requête",
      "organisme public",
      "manquement"
    ],
    exercises: [
      { q: "Associe le terme administratif au terme ordinaire.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "« Il termine è perentorio » veut dire :",
        opts: ["le délai est indicatif", "le délai n'est pas prorogeable", "le délai a été prolongé"]
      },
      {
        q: "« La domanda è irricevibile » veut dire :",
        opts: [
          "la demande est incomplète",
          "la demande ne peut pas être reçue",
          "la demande est en cours de traitement"
        ]
      },
      { q: "Simplifie : « Il pagamento dovrà essere effettuato » → « Il pagamento ___ fatto »" },
      {
        q: "Simplifie la phrase administrative.",
        tr: "Il est porté à votre connaissance que la demande susmentionnée est irrecevable."
      },
      { q: "« Il est porté à votre connaissance que le bureau sera fermé. »" },
      {
        q: "Faut-il écrire en burocratese en C1 ?",
        opts: [
          "Oui, c'est une marque de maîtrise",
          "Non, il faut le comprendre mais écrire plus clairement",
          "Oui, dans tout contexte professionnel"
        ]
      },
      { tr: "Veuillez joindre une copie du document." },
      { tr: "Conformément à la réglementation en vigueur, la demande est irrecevable." },
      { tr: "Le paiement devra être effectué dans le délai indiqué." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Style",
    title: "L'italien parlé et le néostandard",
    objectives: [
      "reconnaître les traits de l'italien parlé",
      "employer la dislocation pour sonner naturel",
      "distinguer le néostandard d'une faute"
    ],
    theory: [
      {
        h: "Néostandard : pas une faute, un autre registre",
        list: [
          "<em>lui / lei</em> sujet au lieu de <em>egli / ella</em> : c'est aujourd'hui la norme",
          "<em>gli</em> au lieu de <em>loro</em> (« à eux ») : aussi à l'écrit informel",
          "le <em>che</em> passe-partout : <em>il giorno che sono arrivato</em>",
          "<em>ci</em> au lieu de <em>vi</em> pour le lieu : <em>ci vado</em>",
          "l'imparfait dans la conditionnelle : <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "La dislocation : déplacer l'accent",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (dislocation à gauche) et <em>L'ho letto ieri, <b>il libro</b>.</em> (à droite). L'élément détaché est le thème et le pronom le « rattrape »."
      },
      {
        contrast: "Tu es ici en terrain plus que familier : « le livre, je l'ai lu hier », « moi, je ne sais pas ». Le français parlé disloque encore plus systématiquement que l'italien, et sans la moindre emphase. Tu peux donc te fier à ton oreille pour la placer, là où un anglophone doit s'en méfier. Même remarque pour le <em>che</em> passe-partout : ton « le jour que je suis arrivé » a exactement le même statut oral et la même réputation."
      },
      {
        h: "Le c'è présentatif",
        p: "<em>C'è Marco che ti cerca.</em> La construction introduit un élément nouveau dans la conversation. C'est ton « il y a Marco qui te cherche », au mot près."
      },
      {
        trap: "Le néostandard est accepté à l'oral et à l'écrit informel. Dans un texte d'examen, un mail formel ou une publication, c'est le standard qui s'applique : <em>se avessi saputo</em>, pas « se sapevo »."
      }
    ],
    grammar: {
      title: "Les traits de l'oral",
      table: {
        head: ["trait", "exemple", "registre"],
        rows: [
          ["dislocation à gauche", "Il libro, l'ho letto.", "oral, accepté"],
          ["dislocation à droite", "L'ho letto, il libro.", "oral"],
          ["c'è présentatif", "C'è Marco che ti cerca.", "oral"],
          ["gli pour loro", "Gli ho detto tutto.", "néostandard"],
          ["che passe-partout", "Il giorno che sono partito", "oral"],
          ["imparfait hypothétique", "Se lo sapevo, non venivo.", "oral seulement"]
        ]
      },
      examples: [
        { tr: "Rome, je n'y suis jamais allé.", note: "dislocation + ci" },
        { tr: "Le café, je le prendrai plus tard." },
        { tr: "Il y a ta sœur qui t'attend dehors." },
        { tr: "Je leur ai dit de ne pas s'inquiéter." },
        { tr: "Cette histoire, je ne m'en souviens vraiment pas." },
        { tr: "L'argent, n'en parlons même pas." }
      ]
    },
    vocab: [
      "dislocation, détachement",
      "le nouveau standard oral",
      "registre informel",
      "oralité",
      "spontanéité",
      "thème / propos",
      "mettre en relief",
      "reprendre par un pronom",
      "sonner naturel",
      "sonner guindé",
      "acceptable",
      "déconseillé à l'écrit"
    ],
    exercises: [
      {
        q: "« Il libro, l'ho letto ieri » est :",
        opts: ["une faute de syntaxe", "une dislocation à gauche, trait de l'italien vivant", "une construction administrative"]
      },
      {
        q: "Quelle construction est déconseillée à l'écrit formel ?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Complète la dislocation : « Il caffè, ___ prendo dopo. »" },
      { q: "Complète : « Di soldi, non ___ parliamo nemmeno. »" },
      {
        q: "« C'è Marco che ti cerca » sert à :",
        opts: ["décrire un lieu", "introduire une information nouvelle dans la conversation", "exprimer un doute"]
      },
      { q: "Réécris-le avec une dislocation.", tr: "Cette histoire, je ne m'en souviens pas." },
      { q: "« Rome, je n'y suis jamais allé. »" },
      {
        q: "Quels traits relèvent du néostandard ?",
        opts: ["lui sujet", "gli pour loro", "egli sujet", "le che passe-partout"]
      },
      { tr: "Cette histoire, je ne m'en souviens vraiment pas." },
      { tr: "Le café, je le prendrai plus tard, là je n'en ai pas envie." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Style",
    title: "La cohésion du texte écrit",
    objectives: [
      "construire un texte argumentatif cohérent",
      "employer les procédés de reprise",
      "éviter la répétition par des synonymes et des hyperonymes"
    ],
    theory: [
      {
        h: "Deux notions distinctes",
        p: "La <b>coesione</b> est la couture de surface : pronoms, connecteurs, reprise lexicale. La <b>coerenza</b> est la continuité logique du contenu. Un texte peut être formellement cohésif et logiquement incohérent, et l'inverse. Ton couple cohésion / cohérence dit exactement la même chose."
      },
      {
        h: "Les procédés de reprise",
        list: [
          "pronoms : <em>lo, ne, ci, questo, ciò</em>",
          "synonymes et hyperonymes : <em>il provvedimento → la misura → l'intervento</em>",
          "nominaliser la phrase précédente : <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "expressions de reprise : <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "La progression thématique",
        p: "Dans un paragraphe bien construit, chaque phrase reprend un élément de la précédente (le thème) et ajoute une information nouvelle (le propos). Introduire un thème entièrement nouveau sans prévenir rompt la cohésion même si tous les connecteurs sont en place."
      },
      {
        tip: "Le style écrit italien ne craint pas les phrases longues, mais il tient à une <b>hiérarchie claire</b> des subordonnées. Trois subordonnées emboîtées l'une dans l'autre signalent un paragraphe à réécrire."
      }
    ],
    grammar: {
      title: "Les procédés de cohésion",
      table: {
        head: ["procédé", "exemple", "fonction"],
        rows: [
          ["pronom", "…la riforma. La si è discussa a lungo.", "reprise"],
          ["synonyme", "il provvedimento / la misura", "éviter la répétition"],
          ["nominalisation", "hanno deciso → tale decisione", "compression"],
          ["reprise", "il fenomeno in questione", "précision"],
          ["connecteur", "di conseguenza, per contro", "relation logique"],
          ["balisage", "come vedremo, in primo luogo", "orienter le lecteur"]
        ]
      },
      examples: [
        { tr: "La réforme a été adoptée. Cette décision a suscité des réactions contrastées." },
        { tr: "Le phénomène en question touche surtout les grandes villes." },
        { tr: "Comme nous le verrons, le problème n'est pas seulement économique." },
        { tr: "En revanche, les chiffres régionaux racontent autre chose." },
        { tr: "Ce qui précède vaut pour le secteur privé." },
        { tr: "Par conséquent, la mesure devrait être revue." }
      ]
    },
    vocab: [
      "cohésion",
      "cohérence",
      "mesure, décision",
      "mesure, dispositif",
      "en question",
      "tel, ladite",
      "ce qui précède",
      "en revanche",
      "par conséquent",
      "susciter, provoquer",
      "contrasté, opposé",
      "concerner, valoir pour"
    ],
    exercises: [
      {
        q: "En quoi coesione et coerenza diffèrent-elles ?",
        opts: [
          "En rien",
          "La coesione est la couture de surface, la coerenza la continuité logique",
          "La coesione concerne l'oral, la coerenza l'écrit"
        ]
      },
      { q: "Complète la reprise : « Hanno approvato la legge. ___ decisione ha sorpreso tutti. »" },
      { q: "Complète : « Il fenomeno in ___ riguarda le grandi città. »" },
      { q: "Associe.", pairs: ["en revanche", "par conséquent", "susciter", "ce qui précède"] },
      {
        q: "Quel procédé supprime le mieux un nom répété ?",
        opts: ["le reprendre par un synonyme ou un hyperonyme", "lui ajouter un adjectif", "changer l'ordre des mots"]
      },
      {
        q: "Rends le paragraphe cohésif.",
        tr: "La réforme a été adoptée. Cette décision a suscité des réactions contrastées. Par conséquent la mesure devrait être revue."
      },
      { q: "« Comme nous le verrons, le problème n'est pas seulement économique. »" },
      {
        q: "Trois subordonnées emboîtées signalent que :",
        opts: ["le texte est sophistiqué", "le paragraphe est à réécrire", "le style est administratif"]
      },
      { tr: "Ce qui précède vaut surtout pour le secteur privé." },
      { tr: "Par conséquent je pense que la mesure devrait être revue." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Examen",
    title: "Examen final de C1",
    objectives: ["vérifier le si, les verbi pronominali, les registres et la cohésion"],
    theory: [{ p: "Douze tâches sur tout le niveau. On valide à 70 %." }],
    exercises: [
      { q: "« Qui si ___ appartamenti. »", opts: ["affitta", "affittano", "affittare"] },
      { q: "« ___ si abitua a tutto. »" },
      { q: "« Un'informazione certa » :", opts: ["une certaine", "une sûre", "une confidentielle"] },
      { q: "« ___ l'ho fatta! »" },
      { q: "« Non ___ la sento di decidere. »" },
      { q: "« La domanda ___ presentata entro il 30. » (doit être)" },
      { q: "« Il termine è perentorio » :", opts: ["indicatif", "non prorogeable", "prolongé"] },
      {
        q: "« Se lo sapevo, non venivo » est :",
        opts: ["le standard écrit", "le néostandard oral", "toujours fautif"]
      },
      { q: "« Il fenomeno in ___ riguarda le città. »" },
      { q: "Superlatif savant de « acre » : ___" },
      { q: "« Ces données doivent être vérifiées avant publication. »" },
      { tr: "On s'habitue à tout, mais on ne s'y résigne jamais tout à fait." }
    ]
  }
});
