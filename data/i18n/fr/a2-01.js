/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/a2-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a2-u01": { title: "Avant et maintenant", grammarNote: "imperfetto · imperfetto face au passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Souvenirs",
    title: "Imperfetto : description et habitude",
    objectives: [
      "former l'imperfetto dans les trois conjugaisons",
      "décrire comment c'était",
      "parler des habitudes du passé"
    ],
    theory: [
      {
        h: "Un passé sans bords",
        p: "L'<strong>imperfetto</strong> ne dit pas quand une chose a commencé ni quand elle s'est arrêtée. Il peint le décor, les états et les habitudes : <em>da bambino abitavo in campagna</em>. C'est ton imparfait, avec le même travail : « enfant, j'habitais à la campagne »."
      },
      {
        h: "La conjugaison n'a presque pas d'exceptions",
        p: "Radical de l'infinitif + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Quatre verbes ont un radical bizarre : <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). C'est tout : l'imperfetto est le temps le plus régulier de l'italien, encore plus que le tien, qui garde « être » à part."
      },
      {
        h: "Trois emplois typiques",
        list: [
          "<b>description</b> : <em>Era una giornata fredda, pioveva.</em>",
          "<b>habitude</b> : <em>Ogni estate andavamo al mare.</em>",
          "<b>état ou sentiment</b> : <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "Cette leçon est un cadeau : le partage entre imparfait et passé composé que tu fais déjà fonctionne point par point en italien. Il n'y a rien à réapprendre, seulement à faire confiance à ton intuition, ce qui est plus difficile qu'il n'y paraît quand on a l'habitude de se méfier."
      }
    ],
    grammar: {
      title: "Imperfetto : conjugaison",
      table: {
        head: ["personne", "parlare", "prendere", "dormire", "essere"],
        rows: [
          ["io", "parlavo", "prendevo", "dormivo", "ero"],
          ["tu", "parlavi", "prendevi", "dormivi", "eri"],
          ["lui / lei", "parlava", "prendeva", "dormiva", "era"],
          ["noi", "parlavamo", "prendevamo", "dormivamo", "eravamo"],
          ["voi", "parlavate", "prendevate", "dormivate", "eravate"],
          ["loro", "parlavano", "prendevano", "dormivano", "erano"]
        ]
      },
      examples: [
        { tr: "Enfant, je passais les étés chez mes grands-parents." },
        { tr: "C'était une journée grise et il faisait froid." },
        { tr: "Avant je fumais, maintenant j'ai arrêté." },
        { tr: "Je ne savais pas que tu habitais ici." },
        { tr: "Pendant que j'étudiais, j'écoutais la radio." },
        { tr: "Que faisait ton grand-père comme métier ?" }
      ]
    },
    vocab: [
      "quand j'étais enfant",
      "à l'époque",
      "autrefois",
      "d'habitude",
      "chaque été",
      "souvent",
      "un souvenir",
      "l'enfance",
      "les grands-parents",
      "la campagne",
      "arrêter de faire quelque chose",
      "ça me manquait"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "« Ogni estate andavamo al mare » décrit :",
        opts: ["un seul voyage", "une habitude répétée dans le passé", "un projet pour l'avenir"]
      },
      { q: "Complète : « Da bambino ___ in campagna. » (j'habitais, abitare)" },
      { q: "Complète : « ___ una giornata fredda. » (c'était)" },
      {
        q: "Complète le souvenir.",
        tr: "Petite, je passais les étés chez mes grands-parents. La maison était grande et chaque soir nous dînions tous ensemble."
      },
      { q: "« Avant je fumais, maintenant j'ai arrêté. »" },
      { tr: "Enfant, je jouais au foot tous les après-midis." },
      { tr: "Petite, j'habitais dans une maison près de la mer." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Souvenirs",
    title: "Imperfetto face au passato prossimo",
    objectives: [
      "choisir le bon passé",
      "combiner les deux dans une même phrase",
      "repérer les signaux qui désignent l'un ou l'autre"
    ],
    theory: [
      {
        h: "Décor contre événement",
        p: "C'est la décision grammaticale la plus importante du niveau A2. L'<strong>imperfetto</strong> peint le décor : ce qui était en cours, comment c'était, ce qui se répétait. Le <strong>passato prossimo</strong> apporte l'événement : ce qui s'est passé, ce qui a interrompu le décor, ce qui est arrivé une fois."
      },
      {
        contrast: "Le couple est exactement le tien : imparfait pour le décor, passé composé pour le fait. L'italien va même plus loin dans ton sens, puisqu'il n'a pas de passé simple vivant : le <em>passato remoto</em> est encore employé au sud et à l'écrit, mais dans la conversation du nord il a disparu comme le tien."
      },
      {
        h: "Le couple classique",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> Sortir était en cours (imperfetto), le téléphone a sonné à un point précis (passato prossimo). Inverse les temps et la phrase devient absurde, comme en français."
      },
      {
        h: "Les signaux dans le texte",
        list: [
          "imperfetto : <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo : <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        h: "Les verbes qui changent de sens",
        p: "Quelques verbes changent de sens avec le temps : <em>sapevo</em> (je savais, un état) face à <em>ho saputo</em> (j'ai appris, un moment) ; <em>conoscevo</em> (je connaissais) face à <em>ho conosciuto</em> (j'ai rencontré) ; <em>volevo</em> (je voulais) face à <em>ho voluto</em> (j'ai décidé, j'ai insisté). Le français fait le même couple avec « je savais / j'ai su » : ici ton intuition suffit."
      }
    ],
    grammar: {
      title: "Quel temps choisir",
      table: {
        head: ["imperfetto", "passato prossimo"],
        rows: [
          ["Pioveva e faceva freddo.", "Ha smesso di piovere alle sei."],
          ["Ogni sabato andavamo al mercato.", "Sabato scorso siamo andati al mercato."],
          ["Ero stanca.", "Mi sono stancata subito."],
          ["Mentre mangiavo…", "…è arrivato Marco."],
          ["Sapevo la verità.", "Ho saputo la verità ieri."],
          ["Conoscevo bene Roma.", "Ho conosciuto Marco a Roma."]
        ]
      },
      examples: [
        { tr: "Pendant que je sortais, le téléphone a sonné." },
        { tr: "Hier j'ai travaillé pendant trois heures.", note: "bornes → passato prossimo" },
        { tr: "Quand j'étais jeune, je travaillais dans un bar." },
        { tr: "J'ai rencontré ma femme à un concert." },
        { tr: "Je ne savais pas que tu étais là." },
        { tr: "Tout à coup le courant a sauté." }
      ]
    },
    vocab: [
      "pendant que",
      "tout à coup",
      "d'un coup",
      "l'an dernier",
      "pendant trois heures",
      "sonner (un téléphone)",
      "tomber",
      "arriver, se produire",
      "connaître / j'ai rencontré",
      "savoir / j'ai appris",
      "qu'est-ce qui s'est passé ?",
      "heureusement"
    ],
    exercises: [
      {
        q: "« ___ (uscire, io) di casa quando ___ (squillare) il telefono. » Quels temps ?",
        opts: ["les deux à l'imperfetto", "imperfetto + passato prossimo", "les deux au passato prossimo"],
        why: "Le décor (sortir) à l'imperfetto, l'événement (la sonnerie) au passato prossimo."
      },
      { q: "Mets la bonne forme.", tr: "Pendant que je mangeais, Marco est arrivé." },
      { q: "Mets la bonne forme.", tr: "Hier j'ai travaillé trois heures, puis je suis sorti avec des amis." },
      {
        q: "« Ho conosciuto Marco a Roma » veut dire :",
        opts: ["Je connaissais Marco à Rome", "J'ai rencontré Marco à Rome", "Je connais Marco depuis Rome"]
      },
      {
        q: "« Ieri ho lavorato per tre ore. » Pourquoi pas l'imperfetto ?",
        opts: ["Parce que c'est une habitude", "Parce que la durée a des bornes nettes", "Parce que c'est une description"]
      },
      {
        q: "Quelles expressions vont d'ordinaire avec l'imperfetto ?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "« Je ne savais pas que tu habitais ici. »" },
      {
        q: "Complète l'histoire.",
        tr: "C'était une journée froide. Il pleuvait et je n'avais pas de parapluie. Tout à coup le bus est arrivé."
      },
      { tr: "Pendant que je rentrais à pied, j'ai croisé un vieil ami." },
      { tr: "Enfant, j'allais à la mer chaque été, mais l'an dernier je suis allé à la montagne." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Souvenirs",
    title: "Décrire un changement",
    objectives: [
      "comparer le passé et le présent",
      "employer des expressions comme non c'era più, adesso invece",
      "dire comment quelque chose a changé"
    ],
    theory: [
      {
        h: "Le contraste prima / adesso",
        p: "Mettre deux temps côte à côte, c'est la façon de montrer un changement : <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> La structure est simple, mais elle demande d'alterner volontairement entre l'imperfetto (à l'époque) et le présent (aujourd'hui)."
      },
      {
        h: "C'era et c'erano",
        p: "L'imperfetto de <em>c'è / ci sono</em> est <strong>c'era / c'erano</strong> : « il y avait ». Remarque que l'italien distingue le singulier du pluriel là où ton « il y avait » sert pour les deux : <em>c'erano meno macchine</em>, jamais « c'era meno macchine »."
      },
      {
        h: "Expressions de contraste",
        list: [
          "<em>prima… adesso / oggi</em> — avant… maintenant",
          "<em>invece</em> — en revanche",
          "<em>non… più</em> — ne… plus : <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — ça a beaucoup changé"
        ]
      },
      {
        tip: "<em>Non… più</em> encadre le verbe comme <em>non… mai</em> : <em>non abito <b>più</b> qui</em>. C'est ton « ne… plus ». Au passato prossimo, <em>più</em> se glisse entre l'auxiliaire et le participe : <em>non ho più visto</em>, comme « je n'ai plus vu »."
      }
    ],
    grammar: {
      title: "Passé et présent",
      table: {
        head: ["à l'époque (imperfetto)", "aujourd'hui (présent)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        { tr: "Avant il y avait un marché ici, maintenant c'est un parking." },
        { tr: "La ville a beaucoup changé." },
        { tr: "Les anciens commerces ont disparu." },
        { tr: "Le quartier, en revanche, s'est animé." },
        { tr: "Quand j'étais petit, les gens jouaient dans la rue." },
        { tr: "Maintenant tout est différent." }
      ]
    },
    vocab: [
      "il y avait (sing. / plur.)",
      "changer",
      "ça a beaucoup changé",
      "en revanche",
      "ne… plus",
      "à l'époque",
      "quartier",
      "circulation",
      "bondé",
      "calme",
      "devenir",
      "mieux / pire"
    ],
    exercises: [
      { q: "L'imperfetto de « c'è » : ___" },
      { q: "L'imperfetto de « ci sono » : ___" },
      { q: "Complète : « Non abito ___ qui. » (je n'habite plus ici)" },
      {
        q: "Où va « più » au passato prossimo ?",
        opts: ["Devant non", "Entre l'auxiliaire et le participe", "À la fin"],
        why: "Non ho più visto, exactement comme già et mai."
      },
      {
        q: "Complète la description du changement.",
        tr: "Avant il y avait un cinéma ici, maintenant il y a un supermarché. Le quartier a beaucoup changé."
      },
      { q: "« Les anciens commerces ont disparu. »" },
      { tr: "Quand j'étais petit, les gens jouaient dans la rue." },
      { q: "Associe.", pairs: ["en revanche", "bondé", "devenir", "circulation"] },
      { tr: "Il y a vingt ans, il y avait moins de voitures et plus de commerces de quartier." },
      { tr: "Ma ville a beaucoup changé ces dix dernières années." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Souvenirs",
    title: "Parler du passé",
    objectives: [
      "tenir une conversation sur des souvenirs",
      "réagir au récit de quelqu'un",
      "employer le trapassato prossimo dans les cas simples"
    ],
    theory: [
      {
        h: "Réagir est obligatoire",
        p: "La conversation italienne ne supporte pas l'auditeur muet. Pendant qu'on te raconte quelque chose, tu lances <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Se taire se lit comme un manque d'intérêt, pas comme de la politesse — et c'est exactement l'inverse de ce qu'un auditeur discret veut faire passer."
      },
      {
        h: "Trapassato prossimo : le passé avant le passé",
        p: "Imperfetto de <em>avere/essere</em> + participe : <em>avevo mangiato</em>, <em>ero uscito</em>. C'est ton plus-que-parfait, construit à l'identique : il sert quand un fait précède un autre : <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>"
      },
      {
        h: "Quand il est nécessaire",
        p: "Sans lui l'ordre des faits devient trouble. <em>Quando sono arrivato, il treno è partito</em> veut dire que le train est parti <b>après</b> mon arrivée. <em>Era già partito</em> veut dire qu'il était parti <b>avant</b>."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> est l'ouverture standard d'une conversation de souvenirs. La réponse : <em>Certo che me lo ricordo!</em>"
      }
    ],
    grammar: {
      title: "Trapassato prossimo et réactions",
      table: {
        head: ["construction", "exemple", "en français"],
        rows: [
          ["avevo + participe", "Avevo già mangiato.", "J'avais déjà mangé."],
          ["ero + participe", "Ero appena uscito.", "Je venais de sortir."],
          ["réaction", "Davvero? / Ma dai!", "Vraiment ? / Non, sérieux !"],
          ["réaction", "E poi? Che è successo?", "Et après ? Qu'est-ce qui s'est passé ?"],
          ["réaction", "Mamma mia! / Che bello!", "Oh là là ! / Super !"],
          ["question", "Ti ricordi quando…?", "Tu te souviens quand… ?"]
        ]
      },
      examples: [
        { tr: "Quand je suis arrivé, la fête était déjà finie." },
        { tr: "Je ne suis pas sorti parce que j'avais promis de travailler un peu." },
        { tr: "Tu te souviens quand on est allés en Sicile ?" },
        { tr: "Bien sûr que je m'en souviens !" },
        { tr: "Non, sérieux, je n'y crois pas !" },
        { tr: "Et qu'est-ce qui s'est passé ensuite ?" }
      ]
    },
    vocab: [
      "tu te souviens ?",
      "je m'en souviens",
      "oublier",
      "vraiment ?",
      "non, sérieux !",
      "super !",
      "oh là là !",
      "et après ?",
      "qu'est-ce qui s'est passé ?",
      "j'avais déjà…",
      "à l'instant",
      "un moment gênant"
    ],
    exercises: [
      {
        q: "« Quando sono arrivato, il treno era già partito. » Qu'est-ce qui est arrivé en premier ?",
        opts: ["Mon arrivée", "Le départ du train", "Les deux en même temps"]
      },
      { q: "Complète : « Quando sono arrivata, la festa ___ già finita. »" },
      { q: "Complète : « Non avevo fame perché ___ già mangiato. »" },
      { q: "Associe les réactions.", pairs: ["non, sérieux !", "vraiment ?", "et après ?", "super !"] },
      { q: "Complète.", tr: "Quand nous sommes sortis, il avait déjà cessé de pleuvoir, mais la rue était encore mouillée." },
      { q: "« Tu te souviens quand on est allés en Sicile ? »" },
      {
        q: "Une amie te raconte ses vacances.",
        setting: "Un café après le travail, en septembre.",
        lines: [
          { tr: "En août je suis allée dans les Pouilles avec ma famille." },
          { tr: "Réagis avec intérêt et demande comment c'était.", answerTr: "Super ! C'était comment ?" },
          { tr: "Génial, mais le premier jour on a perdu les bagages." },
          { tr: "Réagis avec compassion et demande la suite.", answerTr: "Oh non ! Et après ?" },
          { tr: "Ils les ont retrouvés deux jours plus tard. Heureusement !" }
        ]
      },
      { tr: "Je ne suis pas sorti parce que j'avais promis de travailler un peu." },
      { tr: "Quand je suis rentré, ma sœur était déjà partie." },
      { tr: "Tu te souviens quand on était dans la même classe ?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier l'imperfetto, son contraste avec le passato prossimo et le trapassato"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Mets le bon temps.", tr: "Pendant que je sortais, le téléphone a sonné." },
      { q: "Mets le bon temps.", tr: "Hier j'ai travaillé quatre heures." },
      { q: "« Ho conosciuto Anna » veut dire :", opts: ["Je connaissais Anna", "J'ai rencontré Anna", "Je connais Anna"] },
      { q: "« Prima qui ___ un cinema. » (il y avait)" },
      { q: "« Non abito ___ qui. » (ne… plus)" },
      { q: "« Quando sono arrivato, il treno ___ già partito. »" },
      { tr: "Enfant, je passais tous les étés à la mer avec mes grands-parents." },
      { tr: "Pendant que je rentrais à pied, j'ai croisé un vieil ami." }
    ]
  },
  "unit:a2-u02": { title: "Voyager", grammarNote: "futuro semplice · réservations · gare et hôtel" },
  "lesson:a2-u02-l1": {
    theme: "Voyage",
    title: "Trains et billets",
    objectives: [
      "acheter un billet et comprendre les annonces en gare",
      "gérer un changement de voie et un retard",
      "connaître la différence entre les types de train"
    ],
    theory: [
      {
        h: "Types de train",
        p: "Le <strong>regionale</strong> s'arrête partout, il est bon marché et sans réservation de place. L'<strong>Intercity</strong> est l'échelon intermédiaire. Le <strong>Frecciarossa / Italo</strong> sont les rapides à réservation obligatoire : le billet vaut pour ce train précis à cette heure précise."
      },
      {
        h: "Composter son billet",
        p: "Un billet <em>regionale</em> acheté sans horaire précis doit être <strong>composté</strong> (<em>convalidare</em>) dans la machine jaune ou verte avant d'accéder au quai. Ne pas le faire, c'est une amende, et les contrôleurs n'écoutent pas les explications. Les billets achetés dans l'appli sont déjà actifs. Le geste te dira quelque chose : c'est l'ancien compostage de la SNCF, disparu chez toi et bien vivant ici."
      },
      {
        h: "Les annonces qu'il faut comprendre",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — le train a vingt minutes de retard",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — changement de voie",
          "<em>È in arrivo al binario 3</em> — il entre en gare voie 3",
          "<em>Il treno è soppresso</em> — le train est supprimé"
        ]
      },
      {
        tip: "<em>Binario</em> désigne à la fois le quai et la voie. Le numéro n'apparaît sur le panneau que dix ou quinze minutes avant le départ, ce qui déroute quiconque a l'habitude des quais fixes."
      }
    ],
    grammar: {
      title: "Phrases à la gare",
      table: {
        head: ["situation", "en italien", "en français"],
        rows: [
          ["billet", "Un biglietto per Firenze, andata e ritorno.", "Un aller-retour pour Florence."],
          ["aller simple", "Solo andata.", "Aller simple."],
          ["voie", "Da quale binario parte?", "Il part de quelle voie ?"],
          [
            "retard",
            "Il treno è in ritardo di venti minuti.",
            "Le train a vingt minutes de retard."
          ],
          ["correspondance", "Devo cambiare treno?", "Je dois changer de train ?"],
          ["compostage", "Devo convalidare il biglietto?", "Je dois composter le billet ?"]
        ]
      },
      examples: [
        { tr: "Un billet pour Naples demain matin, s'il vous plaît." },
        { tr: "Première ou seconde classe ?" },
        { tr: "C'est direct ou je dois changer ?" },
        { tr: "Le train de 14 h 35 est supprimé." },
        { tr: "Cette place est prise ?" },
        { tr: "Excusez-moi, c'est la voiture 5 ?" }
      ]
    },
    vocab: [
      "billet",
      "aller-retour",
      "aller simple",
      "voie, quai",
      "voiture (de train)",
      "place",
      "changer de train",
      "correspondance",
      "retard",
      "supprimé",
      "composter un billet",
      "contrôleur"
    ],
    exercises: [
      {
        q: "Que veut dire « il treno è soppresso » ?",
        opts: ["Le train a du retard", "Le train est supprimé", "Le train est complet"]
      },
      {
        q: "Quel billet faut-il composter avant de monter ?",
        opts: ["Un Frecciarossa avec réservation", "Un regionale sans horaire précis", "Tous les billets"]
      },
      { q: "Complète : « Da quale ___ parte il treno? »" },
      { q: "Complète : « Un biglietto ___ e ritorno. »" },
      { q: "Associe.", pairs: ["voiture", "correspondance", "retard", "composter un billet"] },
      { q: "« Je dois changer de train ? »" },
      {
        q: "Tu achètes un billet au guichet.",
        setting: "Le guichet, avec une file derrière toi.",
        lines: [
          { tr: "Bonjour, qu'est-ce qu'il vous faut ?" },
          {
            tr: "Demande un billet pour Florence cet après-midi.",
            answerTr: "Un billet pour Florence cet après-midi."
          },
          { tr: "Regionale ou Frecciarossa ?" },
          { tr: "Demande combien de temps de plus prend le regionale.", answerTr: "Le regionale met combien de temps de plus ?" },
          { tr: "Une heure et demie de plus. Le Freccia est à quarante-deux euros." },
          {
            tr: "Choisis le Frecciarossa et demande la voie.",
            answerTr: "Je prends le Frecciarossa. Il part de quelle voie ?"
          }
        ]
      },
      {
        q: "Complète l'annonce en gare.",
        tr: "Le train regionale pour Bologne a vingt minutes de retard. Changement de voie : il partira de la voie 8."
      },
      { tr: "Le train pour Rome part de la voie douze, avec dix minutes de retard." },
      { tr: "Excusez-moi, je dois composter ce billet ?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Voyage",
    title: "Futuro semplice",
    objectives: [
      "former le futur simple",
      "connaître les radicaux irréguliers",
      "employer le futur pour exprimer une supposition"
    ],
    theory: [
      {
        h: "Comment il se forme",
        p: "Tu prends l'infinitif, tu enlèves le <em>-e</em> final et tu ajoutes <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Les verbes en <b>-are</b> changent en plus ce <em>a</em> en <em>e</em> : <em>parlare → parler-ò</em>. C'est ton futur : infinitif plus terminaison, sans auxiliaire."
      },
      {
        h: "Les radicaux irréguliers : il faut les savoir",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Presque tous ont un jumeau français (aurai, pourrai, saurai, viendrai, voudrai, verrai, ferai), donc la liste rentre toute seule. L'exception est <em>andr-</em>, puisque ton « irai » vient d'un autre verbe."
      },
      {
        contrast: "Deux écarts avec le français. D'abord l'italien n'a pas de futur proche : là où tu dis « je vais partir », l'italien met le <b>présent</b> (<em>domani parto</em>). Ensuite le futur italien sert couramment à la <b>supposition sur le présent</b> : <em>Che ore sono? — <b>Saranno</b> le tre.</em> Le français ne fait pas ça et passe par « il doit être trois heures » : c'est l'emploi qu'il faut apprendre à reconnaître."
      },
      {
        trap: "Pour un futur proche et certain, les Italiens emploient donc le présent : <em>domani parto alle sette</em>. Le futuro y sonne raide, ou moins sûr. Garde-le pour les prédictions et les projets lointains."
      }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["personne", "parlare", "prendere", "partire", "essere"],
        rows: [
          ["io", "parlerò", "prenderò", "partirò", "sarò"],
          ["tu", "parlerai", "prenderai", "partirai", "sarai"],
          ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
          ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
          ["voi", "parlerete", "prenderete", "partirete", "sarete"],
          ["loro", "parleranno", "prenderanno", "partiranno", "saranno"]
        ]
      },
      examples: [
        { tr: "L'année prochaine j'habiterai en Italie." },
        { tr: "Je t'appelle dès que j'arrive." },
        { tr: "Demain on part à sept heures.", note: "futur proche : présent" },
        { tr: "Quelle heure est-il ? — Il doit être trois heures.", note: "une supposition" },
        { tr: "Où a bien pu passer mon billet ?" },
        { tr: "Il n'y aura pas le temps pour tout." }
      ]
    },
    vocab: [
      "demain",
      "après-demain",
      "la semaine prochaine",
      "dans trois jours",
      "dès que",
      "peut-être",
      "sûrement",
      "probablement",
      "un projet",
      "déménager",
      "réserver à l'avance",
      "on verra"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Qu'arrive-t-il aux verbes en -are au futur ?",
        opts: ["Rien", "Le a devient e avant la terminaison", "La consonne double"]
      },
      { q: "Le futur de « avere », forme io : ___" },
      { q: "Le futur de « venire », forme loro : ___" },
      {
        q: "« Saranno le tre » veut dire :",
        opts: ["Il sera trois heures (dans le futur)", "Il doit être trois heures (supposition)", "Il était trois heures"]
      },
      { q: "Complète les projets.", tr: "L'année prochaine je déménagerai à Bologne et j'y chercherai du travail." },
      { tr: "Je t'appelle dès que j'arrive à la gare." },
      { tr: "L'année prochaine j'habiterai en Italie." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Voyage",
    title: "Hôtels et hébergement",
    objectives: ["faire son arrivée à l'hôtel", "signaler un problème dans la chambre", "poser des questions sur les services et le départ"],
    theory: [
      {
        h: "L'arrivée à l'italienne",
        p: "À la réception on te demandera une pièce d'identité : <em>Un documento, per favore</em>. La loi impose de déclarer les clients à la police, donc le passeport ou la carte d'identité est obligatoire, y compris dans les locations touristiques. La fiche de police te rappellera quelque chose."
      },
      {
        h: "Tassa di soggiorno",
        p: "Presque toutes les villes italiennes prélèvent une <strong>taxe de séjour</strong> (1 à 7 euros par personne et par nuit), payée sur place et le plus souvent en espèces, quel que soit le prix payé en ligne. Ce n'est pas une arnaque : c'est une taxe municipale, exactement comme la tienne, et les plateformes de réservation la mentionnent rarement."
      },
      {
        h: "Signaler un problème",
        p: "La construction est simple : <em>non funziona</em> + la chose. <em>L'aria condizionata non funziona.</em> Et <em>manca</em> (« il manque ») : <em>Mancano gli asciugamani.</em> Attention à ce dernier : là où ton « il manque » reste au singulier, l'italien accorde avec la chose, donc <em>mancano</em> au pluriel."
      },
      {
        tip: "<em>Camera doppia</em> est une chambre pour deux, avec un grand lit (<em>matrimoniale</em>) ou deux lits (<em>due letti singoli</em>). À préciser à la réservation, parce que le choix par défaut varie."
      }
    ],
    grammar: {
      title: "Phrases d'hôtel",
      table: {
        head: ["situation", "en italien", "en français"],
        rows: [
          ["arrivée", "Ho una prenotazione a nome Smith.", "J'ai une réservation au nom de Smith."],
          ["type de chambre", "Una camera doppia con bagno privato.", "Une chambre double avec salle de bain."],
          ["petit-déjeuner", "La colazione è inclusa?", "Le petit-déjeuner est compris ?"],
          ["un problème", "L'aria condizionata non funziona.", "La climatisation ne marche pas."],
          ["quelque chose manque", "Mancano gli asciugamani.", "Il manque les serviettes."],
          ["départ", "A che ora è il check-out?", "Le départ est à quelle heure ?"]
        ]
      },
      examples: [
        { tr: "Bonsoir, j'ai une réservation pour trois nuits." },
        { tr: "Votre pièce d'identité, s'il vous plaît." },
        { tr: "La taxe de séjour est de deux euros par personne et par nuit." },
        { tr: "Il y a le wifi dans la chambre ?" },
        { tr: "Je peux laisser mes bagages après le départ ?" },
        { tr: "La chambre est au troisième étage, l'ascenseur est là-bas." }
      ]
    },
    vocab: [
      "réservation",
      "chambre simple / double",
      "avec un lit double",
      "clé / carte magnétique",
      "étage",
      "ascenseur",
      "serviette",
      "drap",
      "taxe de séjour",
      "ne marche pas",
      "il manque",
      "départ, check-out"
    ],
    exercises: [
      {
        q: "Qu'est-ce que la « tassa di soggiorno » ?",
        opts: ["Une caution", "Une taxe de séjour payée sur place", "Des frais de ménage"]
      },
      { q: "Complète : « Ho una ___ a nome Smith. »" },
      { q: "Complète : « L'aria condizionata non ___. »" },
      { q: "Complète : « ___ gli asciugamani. » (il manque les serviettes)" },
      { q: "Associe.", pairs: ["ascenseur", "drap", "étage", "clé"] },
      { q: "« Le petit-déjeuner est compris ? »" },
      {
        q: "Tu arrives à l'hôtel.",
        setting: "La réception, le soir, après un long voyage.",
        lines: [
          { tr: "Bonsoir ! Vous avez une réservation ?" },
          {
            tr: "Confirme, donne ton nom et la durée du séjour.",
            answerTr: "Oui, au nom de Smith, pour trois nuits."
          },
          { tr: "Parfait. Votre pièce d'identité. La taxe de séjour est de deux euros par nuit." },
          { tr: "Demande si le petit-déjeuner est compris.", answerTr: "Le petit-déjeuner est compris ?" },
          { tr: "Oui, de sept heures à dix heures, au premier étage." }
        ]
      },
      {
        q: "Signale un problème.",
        tr: "Bonjour, j'appelle de la chambre 204 : le wifi ne marche pas et il manque des serviettes propres."
      },
      { tr: "La chambre est au troisième étage, le petit-déjeuner est de sept à dix heures." },
      { tr: "Je peux laisser mes bagages après le départ ?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Voyage",
    title: "Futuro anteriore et organisation",
    objectives: [
      "former le futuro anteriore",
      "ordonner deux actions futures",
      "exprimer une supposition sur le passé"
    ],
    theory: [
      {
        h: "Le futur avant le futur",
        p: "<strong>Futuro anteriore</strong> = le futur de <em>avere/essere</em> + participe : <em>avrò finito</em>, <em>sarò arrivato</em>. Il décrit une action achevée <b>avant</b> une autre action future : <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em> C'est ton futur antérieur, à l'identique, y compris la règle qui l'exige après <em>quando</em>."
      },
      {
        h: "À l'oral on raccourcit",
        p: "Au lieu de <em>quando avrò finito, ti chiamerò</em>, les Italiens disent <em>quando finisco, ti chiamo</em>. Le futuro anteriore reste dans le registre soigné et à l'écrit, mais il faut savoir le comprendre."
      },
      {
        h: "Une supposition sur le passé",
        p: "Cet emploi est vivant et fréquent : <em>Non risponde… <b>avrà perso</b> il treno.</em> (« il a dû rater son train »). C'est le jumeau au passé de la supposition au futur simple. Le français a bien « il aura raté son train », mais c'est une tournure littéraire, alors qu'en italien c'est la façon ordinaire de le dire."
      },
      {
        tip: "Les signaux qui précèdent souvent le futuro anteriore : <em>quando, appena, dopo che, una volta che</em>."
      }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["personne", "avere + participe", "essere + participe"],
        rows: [
          ["io", "avrò finito", "sarò partito/a"],
          ["tu", "avrai finito", "sarai partito/a"],
          ["lui / lei", "avrà finito", "sarà partito/a"],
          ["noi", "avremo finito", "saremo partiti/e"],
          ["voi", "avrete finito", "sarete partiti/e"],
          ["loro", "avranno finito", "saranno partiti/e"]
        ]
      },
      examples: [
        { tr: "Quand j'aurai fini, je t'appellerai." },
        { tr: "Dès qu'on sera arrivés, on t'écrit." },
        { tr: "Il ne répond pas, il a dû rater son train." },
        { tr: "Où mon billet est-il passé ?" },
        { tr: "D'ici vendredi on aura tout réservé." },
        { tr: "Ça a dû être un malentendu." }
      ]
    },
    vocab: [
      "dès que",
      "une fois que",
      "d'ici (une échéance)",
      "malentendu",
      "un imprévu",
      "itinéraire",
      "départ / arrivée",
      "bagage à main",
      "embarquement",
      "vol",
      "escale",
      "annuler"
    ],
    exercises: [
      { q: "Le futuro anteriore de « finire », forme io : ___" },
      { q: "Le futuro anteriore de « partire », forme noi (groupe mixte) : ___" },
      {
        q: "« Avrà perso il treno » veut dire d'ordinaire :",
        opts: ["Il ratera son train", "Il a dû rater son train", "Il a sûrement raté son train"]
      },
      { q: "Complète.", tr: "Quand on arrivera à l'hôtel, on t'écrira." },
      { q: "« Quand j'aurai fini de travailler, je t'appellerai. »" },
      {
        q: "Quelle phrase est la plus familière ?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "Les deux également."]
      },
      { q: "Associe.", pairs: ["embarquement", "vol", "d'ici (échéance)", "annuler"] },
      { tr: "D'ici vendredi on aura tout réservé." },
      { tr: "Dès qu'on arrive à l'aéroport, on t'envoie un message." },
      { tr: "Il ne décroche pas, il a dû rater sa correspondance." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier les futurs et le vocabulaire de la gare et de l'hôtel"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      {  },
      { q: "Le futur de « andare », forme io : ___" },
      { q: "Le futur de « potere », forme noi : ___" },
      { q: "« Il treno è soppresso » :", opts: ["en retard", "supprimé", "complet"] },
      { q: "« Da quale ___ parte? »" },
      { q: "« L'aria condizionata non ___. »" },
      { q: "Le futuro anteriore de « finire », io : ___" },
      { q: "« J'ai une réservation pour trois nuits. »" },
      { tr: "Le vol pour Varsovie part de la porte B12, avec vingt minutes de retard." },
      { tr: "Un aller simple pour Bologne, s'il vous plaît." }
    ]
  },
  "unit:a2-u03": {
    title: "Les pronoms compléments",
    grammarNote: "pronoms directs et indirects · accord du participe"
  },
  "lesson:a2-u03-l1": {
    theme: "Grammaire",
    title: "Les pronoms compléments directs",
    objectives: [
      "remplacer un nom par un pronom",
      "placer le pronom au bon endroit",
      "arrêter de répéter le même mot"
    ],
    theory: [
      {
        h: "À quoi ils servent",
        p: "Répéter le nom sonne lourd en italien. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> Le pronom prend la place de ce qui est déjà connu. Sans lui, on dirait un exercice de manuel, pas une conversation."
      },
      {
        h: "Les formes",
        p: "<em>mi</em> (me), <em>ti</em> (te), <strong>lo</strong> (le, masculin), <strong>la</strong> (la, féminin), <em>ci</em> (nous), <em>vi</em> (vous), <strong>li</strong> (les, m), <strong>le</strong> (les, f)."
      },
      {
        contrast: "Le système est le tien, presque forme pour forme : le/la/les face à lo/la/li-le, et la place devant le verbe conjugué (<em>lo vedo</em> = « je le vois »). Un écart utile : l'italien distingue au pluriel le masculin (<em>li</em>) du féminin (<em>le</em>) là où ton « les » ne dit rien. Avec un infinitif l'italien colle le pronom à la fin (<em>voglio veder<b>lo</b></em>) ou le place avant le modal (<em><b>lo</b> voglio vedere</em>) : les deux sont corrects, alors que le français n'a que « je veux le voir »."
      },
      {
        trap: "<b>Lo</b> et <b>la</b> s'élident devant une voyelle : <em>l'ho visto</em>, <em>l'ho vista</em>, comme ton « je l'ai vu ». <b>Li</b> et <b>le</b> ne s'élident jamais."
      }
    ],
    grammar: {
      title: "Pronoms compléments directs",
      table: {
        head: ["pronom", "remplace", "exemple"],
        rows: [
          ["mi", "moi", "Mi chiami stasera?"],
          ["ti", "toi", "Ti vedo domani."],
          ["lo", "une chose/personne masculine", "Il libro? Lo leggo stasera."],
          ["la", "une chose/personne féminine", "La pizza? La prendo io."],
          ["ci", "nous", "Ci aspetti?"],
          ["vi", "vous", "Vi chiamo dopo."],
          ["li", "les (m)", "I biglietti? Li ho comprati."],
          ["le", "les (f)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        { tr: "Tu connais Marco ? — Oui, je le connais bien." },
        { tr: "Tu prends la voiture ? — Non, je ne la prends pas." },
        { tr: "Où sont les clés ? Je ne les trouve pas." },
        { tr: "Je veux le voir tout de suite." },
        { tr: "Tu peux m'attendre cinq minutes ?" },
        { tr: "On se voit demain." }
      ]
    },
    vocab: [
      "connaître (une personne, un lieu)",
      "savoir (un fait), savoir faire",
      "trouver",
      "perdre",
      "attendre",
      "appeler",
      "inviter",
      "accompagner quelqu'un",
      "journal",
      "clés",
      "tout de suite",
      "plus tard"
    ],
    exercises: [
      {
        q: "« Conosci Anna ? » : comment répondre oui avec un pronom ?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Complète : « I biglietti? ___ ho comprati ieri. »" },
      { q: "Complète : « La pizza? ___ prendo io. »" },
      {
        q: "Quelles phrases sont correctes ?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Les deux formes sont correctes."]
      },
      {
        q: "Remplace les répétitions par des pronoms.",
        tr: "— Tu achètes le journal ? — Oui, je l'achète. — Et les magazines ? — Non, je ne les achète pas."
      },
      { q: "« Je ne le connais pas. »" },
      {
        q: "Quels pronoms directs peuvent s'élider devant une voyelle ?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "Tu peux m'attendre cinq minutes ?" },
      { tr: "Je ne trouve pas les clés, je les ai peut-être laissées au bureau." },
      { tr: "Tu connais ce restaurant ? — Oui, je le connais bien." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Grammaire",
    title: "L'accord du participe avec le pronom",
    objectives: [
      "accorder le participe avec le pronom direct",
      "distinguer les cas où l'accord est obligatoire",
      "écrire correctement l'ho visto / l'ho vista"
    ],
    theory: [
      {
        h: "La règle en une phrase",
        p: "Aux temps composés avec <em>avere</em>, le participe <b>s'accorde avec le pronom complément direct</b> placé avant le verbe. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Sans pronom, le participe reste invariable."
      },
      {
        contrast: "C'est mot pour mot ta règle de l'accord du COD antéposé : « je l'ai vue ». La différence est qu'en français l'accord est presque toujours muet, alors qu'en italien il s'entend : <em>l'ho vista</em> se distingue à l'oreille de <em>l'ho visto</em>. Tu connais donc la règle ; ce qu'il faut acquérir, c'est de la prononcer."
      },
      {
        h: "Quatre formes",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "L'élision <em>l'</em> cache le genre, donc la <b>terminaison du participe</b> est la seule chose qui dit de qui on parle. <em>L'ho visto</em> (lui) et <em>l'ho vista</em> (elle) diffèrent d'une lettre et veulent dire autre chose."
      },
      {
        h: "Là où il n'y a PAS d'accord",
        p: "Avec un pronom <b>indirect</b> le participe ne change pas : <em>Le ho parlato</em> (je lui ai parlé), jamais « parlata ». Le français fait pareil (« je lui ai parlé »), mais l'erreur reste la plus fréquente à ce stade : il faut savoir si le pronom est direct ou indirect."
      }
    ],
    grammar: {
      title: "L'accord du participe",
      table: {
        head: ["phrase complète", "avec un pronom", "note"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "indirect → pas d'accord"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "les choses comptent aussi"]
        ]
      },
      examples: [
        { tr: "Tu as vu Giulia ? — Oui, je l'ai vue hier." },
        { tr: "Les documents ? Je les ai déjà envoyés." },
        { tr: "Les photos ? Je ne les ai pas encore regardées." },
        { tr: "Je lui ai écrit un mail.", note: "indirect : pas d'accord" },
        { tr: "Je l'ai rencontrée à Rome." },
        { tr: "Ils nous ont invités à la fête." }
      ]
    },
    vocab: [
      "envoyer",
      "regarder",
      "recevoir",
      "rendre",
      "prêter",
      "document",
      "photo",
      "message",
      "mail",
      "encore, toujours",
      "déjà",
      "par hasard"
    ],
    exercises: [
      {
        q: "« Hai visto Anna? » : la bonne réponse est :",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Complète : « I libri? ___ ho comprat___. » Écris les deux parties séparées par une espace",
        hint: "pronom + terminaison du participe",
        why: "Li ho comprati : le pronom li impose la terminaison -i."
      },
      { q: "Complète la terminaison : « Le chiavi? Le ho pers___. »" },
      {
        q: "« Le ho parlato » : pourquoi pas « parlata » ?",
        opts: ["C'est une faute", "Parce que « le » est ici indirect (à elle)", "Parce que parlare est irrégulier"]
      },
      { q: "Complète les terminaisons.", tr: "Le mail ? Je l'ai déjà envoyé. Les photos ? Je ne les ai pas encore regardées." },
      { q: "« Je l'ai rencontrée à Rome. »" },
      {
        q: "Dans quelles phrases le participe doit-il s'accorder ?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "J'ai déjà envoyé les documents." },
      { tr: "Je n'ai pas encore regardé les photos du voyage." },
      { tr: "Tu as vu Giulia ? — Oui, je l'ai vue hier soir." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Grammaire",
    title: "Les pronoms compléments indirects",
    objectives: [
      "distinguer un complément direct d'un indirect",
      "employer correctement gli et le",
      "connaître les verbes qui exigent un complément indirect"
    ],
    theory: [
      {
        h: "À qui, pas qui",
        p: "Un pronom <b>indirect</b> remplace <em>a + personne</em> : <em>Telefono a Marco → <b>Gli</b> telefono.</em> Un pronom <b>direct</b> remplace un nom sans préposition : <em>Vedo Marco → <b>Lo</b> vedo.</em>"
      },
      {
        h: "Les formes",
        p: "<em>mi, ti, <b>gli</b> (à lui), <b>le</b> (à elle), ci, vi, <b>gli</b> (à eux)</em>. Au registre soutenu, « à eux » se dit <em>loro</em>, placé après le verbe : <em>Telefono loro</em>, mais à l'oral c'est presque toujours <em>gli</em>. Note que l'italien distingue le masculin du féminin là où ton « lui » sert pour les deux."
      },
      {
        h: "Les verbes qui piègent",
        p: "Plusieurs verbes italiens prennent un complément indirect : <em>telefonare a</em>, <em>rispondere a</em>, <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. Pour <em>telefonare</em> et <em>rispondere</em>, le français t'aide (« je lui téléphone », « je lui réponds »). Mais <em>credere</em> te trahit : tu dis « je le crois », l'italien dit <em>gli credo</em>."
      },
      {
        trap: "<b>Gli</b> fait deux métiers totalement différents : c'est un article (<em>gli amici</em>) et un pronom (<em>gli parlo</em>). C'est la position qui tranche : l'article précède un nom, le pronom précède un verbe."
      }
    ],
    grammar: {
      title: "Direct face à indirect",
      table: {
        head: ["verbe", "type", "exemple"],
        rows: [
          ["vedere qualcuno", "direct", "Lo vedo domani."],
          ["telefonare a qualcuno", "indirect", "Gli telefono domani."],
          ["conoscere qualcuno", "direct", "La conosco bene."],
          ["scrivere a qualcuno", "indirect", "Le scrivo una mail."],
          ["aspettare qualcuno", "direct", "Ti aspetto."],
          ["rispondere a qualcuno", "indirect", "Gli rispondo subito."]
        ]
      },
      examples: [
        { tr: "Tu as appelé Marco ? — Oui, je l'ai appelé hier." },
        { tr: "Qu'est-ce que tu lui as dit ?" },
        { tr: "Je ne le crois pas du tout." },
        { tr: "Ils nous ont répondu tout de suite." },
        { tr: "Elle aime beaucoup voyager." },
        { tr: "Je veux lui parler aujourd'hui." }
      ]
    },
    vocab: [
      "téléphoner (à quelqu'un)",
      "répondre (à quelqu'un)",
      "écrire à",
      "demander à quelqu'un",
      "dire à quelqu'un",
      "croire quelqu'un",
      "offrir",
      "prêter à quelqu'un",
      "envoyer à quelqu'un",
      "expliquer à quelqu'un",
      "conseiller à quelqu'un",
      "du tout"
    ],
    exercises: [
      { q: "« Telefono a Marco » → avec un pronom :", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "« Vedo Marco » → avec un pronom :", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Complète : « Che cosa ___ hai detto? » (à elle)" },
      { q: "Complète : « Non ___ credo. » (lui)" },
      {
        q: "Quels verbes exigent un complément indirect (a qualcuno) ?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Complète les pronoms.",
        tr: "J'ai écrit à Giulia : je lui ai envoyé un mail. Marco ne répond pas, je l'appelle demain."
      },
      { q: "« Je veux lui parler aujourd'hui. »" },
      { q: "Associe.", pairs: ["offrir", "prêter à quelqu'un", "expliquer à quelqu'un", "conseiller à quelqu'un"] },
      { tr: "Je lui ai écrit hier, mais elle ne m'a pas encore répondu." },
      { tr: "Je l'appelle ce soir et je lui explique tout." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Grammaire",
    title: "L'impératif avec les pronoms",
    objectives: [
      "former l'impératif à toutes les personnes",
      "coller un pronom à un impératif",
      "former le négatif à la forme tu"
    ],
    theory: [
      {
        h: "Les formes de base",
        p: "<b>tu</b> : <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b> : l'inverse, <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b> : comme au présent (parliamo). <b>voi</b> : comme au présent (parlate). La forme de politesse vient du subjonctif, alors que ton vouvoiement utilise simplement l'indicatif (« parlez »)."
      },
      {
        h: "Le négatif à la forme tu",
        p: "À la place de l'impératif on emploie l'<b>infinitif</b> : <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. Cela vaut uniquement pour <em>tu</em>. Le français garde l'impératif (« ne parle pas »), donc c'est un point à mémoriser."
      },
      {
        h: "Les pronoms se collent à la fin",
        p: "<em>Dimmi!</em>, <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em> : c'est ton « dis-moi », « appelle-moi », sans le trait d'union. Mais à la forme <b>Lei</b> le pronom passe devant : <em>Mi dica</em>, <em>Lo aspetti</em>, là où tu dis « dites-moi » avec le pronom derrière."
      },
      {
        trap: "Après les formes courtes <em>fa', da', sta', va', di'</em> la consonne du pronom <b>double</b> : <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Ton « dis-moi » et « donne-moi » n'ont qu'une consonne : la double italienne s'entend et s'écrit. L'exception est <em>gli</em> : <em>digli</em>, sans doublement."
      }
    ],
    grammar: {
      title: "L'impératif",
      table: {
        head: ["personne", "parlare", "prendere", "sentire", "avec un pronom"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (négatif)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        { tr: "Raconte-moi tout !" },
        { tr: "Dis-moi comment ça se passe." },
        { tr: "Ne t'inquiète pas, je m'en occupe." },
        { tr: "Je vous écoute, madame." },
        { tr: "Allons-y ensemble !" },
        { tr: "Pardonne-moi, je ne l'ai pas fait exprès." }
      ]
    },
    vocab: [
      "dis-moi",
      "tiens-moi au courant",
      "donne-moi",
      "pardonne-moi",
      "attends-moi",
      "ne t'inquiète pas",
      "regarde",
      "écoute",
      "prends soin de toi",
      "viens ici",
      "arrête",
      "exprès"
    ],
    exercises: [
      {
        q: "« non parlare! » comme négatif correspond à quelle personne ?",
        opts: ["tu", "Lei", "voi"],
        why: "Seule la forme tu emploie l'infinitif au négatif."
      },
      { q: "Forme l'impératif (tu) de « prendere » : ___" },
      { q: "Forme l'impératif (Lei) de « parlare » : ___" },
      { q: "« Dis-moi » se dit : ___" },
      {
        q: "Pourquoi « dammi » et pas « dami » ?",
        opts: [
          "C'est une coquille",
          "Après la forme courte da' la consonne du pronom double",
          "Parce que dare est irrégulier partout"
        ]
      },
      { q: "« Ne t'inquiète pas. »" },
      {
        q: "Complète le message à un ami.",
        tr: "Salut ! Dis-moi à quelle heure tu arrives, et écris-moi quand tu pars."
      },
      { tr: "Je vous écoute, madame." },
      { tr: "Préviens-moi quand tu arrives, je viens te chercher." },
      { tr: "Raconte-moi tout, ne t'inquiète pas." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Test",
    title: "Test de l'unité 3",
    objectives: ["vérifier les pronoms directs et indirects, l'accord du participe et l'impératif"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Conosci Anna? » →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "« I biglietti? ___ ho comprati. »" },
      { q: "« Le chiavi? Le ho pers___. »" },
      { q: "« Telefono a Marco » →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "« Che cosa ___ hai detto? » (à elle)" },
      { q: "L'impératif (tu) de « sentire » : ___" },
      { q: "« Dis-moi » : ___" },
      { q: "« Ne t'inquiète pas, je m'en occupe. »" },
      { tr: "Je l'ai vue hier et je lui ai parlé du projet." },
      { tr: "Préviens-moi quand tu arrives, je t'attends." }
    ]
  },
  "unit:a2-u04": { title: "La santé", grammarNote: "mi fa male · l'impératif de politesse · donner des conseils" },
  "lesson:a2-u04-l1": {
    theme: "Santé",
    title: "Douleur et symptômes",
    objectives: [
      "dire ce qui fait mal",
      "nommer les symptômes de base",
      "employer mi fa / mi fanno male"
    ],
    theory: [
      {
        h: "Une construction inversée, comme piacere",
        p: "<em>Mi fa male la testa</em>, littéralement « la tête me fait mal ». Le sujet est la <b>partie du corps</b>, d'où les deux formes du verbe : <em>mi <b>fa</b> male il piede</em> (une chose) et <em>mi <b>fanno</b> male i piedi</em> (plusieurs)."
      },
      {
        contrast: "Le français dispose bien de « la tête me fait mal », mais tu dis d'ordinaire « j'ai mal à la tête », où c'est toi le sujet. L'italien a les deux tournures et privilégie l'inversée : <em>mi fa male</em>. La forme la plus proche de ton habitude est <em>ho mal di testa</em>, à garder comme point d'ancrage."
      },
      {
        h: "Deux chemins parallèles",
        p: "À côté de <em>mi fa male la gola</em> il y a <em>ho mal di gola</em>. Le second fonctionne comme une formule figée : <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Les deux sont aussi naturels l'un que l'autre."
      },
      {
        h: "L'article devant les parties du corps",
        p: "L'italien dit <em>mi fa male <b>la</b> testa</em>, pas « mia testa » : le pronom <em>mi</em> dit déjà à qui est la tête, donc un possessif ferait doublon. Le français fait exactement pareil avec « j'ai mal à <b>la</b> tête ». Même chose dans <em>mi lavo <b>i</b> denti</em>."
      },
      {
        tip: "<em>Da quanto tempo?</em> (« depuis combien de temps ? ») est la première question qu'on te posera chez le médecin. La réponse : <em>da tre giorni</em>, <em>da una settimana</em>."
      }
    ],
    grammar: {
      title: "Douleur et symptômes",
      table: {
        head: ["construction", "exemple", "en français"],
        rows: [
          ["mi fa male + sing.", "Mi fa male la schiena.", "J'ai mal au dos."],
          ["mi fanno male + plur.", "Mi fanno male i denti.", "J'ai mal aux dents."],
          ["ho mal di…", "Ho mal di testa.", "J'ai mal à la tête."],
          ["ho la febbre", "Ho trentotto di febbre.", "J'ai 38 de fièvre."],
          ["mi sento…", "Mi sento debole.", "Je me sens faible."],
          ["da quanto?", "Da tre giorni.", "Depuis trois jours."]
        ]
      },
      examples: [
        { tr: "J'ai mal à la gorge depuis deux jours." },
        { tr: "J'ai mal au ventre et la nausée." },
        { tr: "J'ai de la toux et le nez qui coule." },
        { tr: "Je me sens fatigué et je n'ai pas d'appétit." },
        { tr: "Je suis allergique à la pénicilline." },
        { tr: "Je devrais prendre quelque chose pour le mal de tête ?" }
      ]
    },
    vocab: [
      "tête",
      "gorge",
      "estomac, ventre",
      "dos",
      "dents",
      "fièvre",
      "toux",
      "un rhume",
      "nausée",
      "je ne me sens pas bien",
      "allergie",
      "depuis combien de temps ?"
    ],
    exercises: [
      {
        q: "« ___ male i denti. » (j'ai mal aux dents)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "Le sujet, ce sont les dents : pluriel, donc fanno."
      },
      { q: "Complète : « Mi ___ male la schiena. »" },
      { q: "Complète : « Ho mal ___ testa. »" },
      {
        q: "Quelle phrase sonne naturelle en italien ?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "Le pronom mi dit déjà à qui ; le possessif ferait doublon."
      },
      { q: "Associe.", pairs: ["toux", "un rhume", "nausée", "fièvre"] },
      { q: "« J'ai mal à la gorge depuis trois jours. »" },
      { q: "Décris tes symptômes.", tr: "J'ai mal à la gorge, j'ai de la fièvre et je me sens faible." },
      { tr: "J'ai de la toux et le nez qui coule depuis une semaine." },
      { tr: "J'ai mal aux jambes après avoir couru." },
      { tr: "J'ai mal à la tête et de la fièvre." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Santé",
    title: "Chez le médecin",
    objectives: ["décrire un problème au médecin", "comprendre les consignes", "poser des questions sur la posologie"],
    theory: [
      {
        h: "Comment fonctionne le système de santé italien",
        p: "La base du système est le <strong>medico di base</strong>, ton médecin traitant, auprès duquel il faut s'inscrire. L'ordonnance ou l'orientation vers un spécialiste s'appelle <em>l'impegnativa</em> ou <em>la ricetta</em>. Pour les urgences on va au <strong>pronto soccorso</strong>, où le tri se fait par couleurs : blanc (le moins urgent) → rouge. Si tu viens de la sécurité sociale française, l'architecture te sera familière, gratuité comprise."
      },
      {
        h: "L'impératif de politesse dans les consignes",
        p: "Le médecin te vouvoie avec <em>Lei</em> : <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. C'est ton « prenez », « reposez-vous », mais bâti sur le subjonctif : il vaut la peine de reconnaître ces formes avant même de savoir les produire."
      },
      {
        h: "La pharmacie fait plus que tu ne crois",
        p: "Le <em>farmacista</em> italien a une large autorité de conseil et constitue souvent le premier arrêt pour les petits maux. Beaucoup de choses restent sur ordonnance, mais le conseil est gratuit et précis."
      },
      {
        tip: "La phrase qui te sauve dans n'importe quelle situation médicale : <em>Sono allergico/a a…</em> À savoir sans avoir à y réfléchir."
      }
    ],
    grammar: {
      title: "Chez le médecin et à la pharmacie",
      table: {
        head: ["qui parle", "en italien", "en français"],
        rows: [
          ["médecin", "Cosa c'è che non va?", "Qu'est-ce qui ne va pas ?"],
          ["médecin", "Da quanto tempo ha questi sintomi?", "Depuis combien de temps avez-vous ces symptômes ?"],
          ["patient", "Mi fa male qui.", "J'ai mal ici."],
          ["médecin", "Le prescrivo un antibiotico.", "Je vous prescris un antibiotique."],
          ["patient", "Quante volte al giorno?", "Combien de fois par jour ?"],
          ["médecin", "Due volte al giorno, dopo i pasti.", "Deux fois par jour, après les repas."]
        ]
      },
      examples: [
        { tr: "Bonjour, je ne me sens pas bien." },
        { tr: "Vous êtes allergique à un médicament ?" },
        { tr: "Je vous fais une ordonnance." },
        { tr: "Reposez-vous et buvez beaucoup d'eau." },
        { tr: "Si ça ne passe pas en trois jours, revenez." },
        { tr: "J'ai besoin d'un arrêt de travail." }
      ]
    },
    vocab: [
      "médecin traitant",
      "urgences",
      "ordonnance",
      "antibiotique",
      "comprimé",
      "sirop",
      "piqûre",
      "prise de sang",
      "arrêt de travail",
      "après les repas",
      "à jeun",
      "aller mieux"
    ],
    exercises: [
      {
        q: "Où va-t-on avec un problème soudain et grave ?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Complète : « Sono ___ alla penicillina. » (allergique, une femme parle)" },
      { q: "Complète : « Quante ___ al giorno? » (combien de fois)" },
      { q: "Associe.", pairs: ["ordonnance", "comprimé", "à jeun", "aller mieux"] },
      { q: "« Depuis combien de temps avez-vous ces symptômes ? »" },
      {
        q: "Une visite chez le médecin.",
        setting: "Le cabinet, un lundi matin.",
        lines: [
          { tr: "Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?" },
          {
            tr: "Dis que tu as mal à la gorge et de la fièvre.",
            answerTr: "J'ai mal à la gorge et de la fièvre."
          },
          { tr: "Depuis combien de temps ?" },
          { tr: "Dis depuis trois jours.", answerTr: "Depuis trois jours." },
          { tr: "Je vous prescris un antibiotique. Des allergies ?" },
          {
            tr: "Dis non et pose une question sur la posologie.",
            answerTr: "Non, aucune. Combien de fois par jour je le prends ?"
          }
        ]
      },
      {
        q: "Complète les consignes du médecin.",
        tr: "Prenez un comprimé deux fois par jour, après les repas. Et buvez beaucoup d'eau."
      },
      { tr: "J'ai besoin d'un arrêt de travail." },
      { tr: "Prenez l'antibiotique pendant six jours, même si vous commencez à aller mieux." },
      { tr: "Je suis allergique à la pénicilline, il y a une alternative ?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Santé",
    title: "Donner des conseils",
    objectives: [
      "conseiller quelqu'un",
      "employer le conditionnel dans dovresti / potresti",
      "réagir au problème de quelqu'un"
    ],
    theory: [
      {
        h: "Le conditionnel : première rencontre",
        p: "Le conditionnel se construit sur le même radical que le futur, avec les terminaisons <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. Tu connais déjà <em>vorrei</em> ; ajoute <em>dovrei</em> (je devrais), <em>potrei</em> (je pourrais), <em>sarebbe</em> (ce serait). Le mécanisme est le tien : radical du futur, terminaisons de l'imparfait."
      },
      {
        h: "Conseiller sans ordonner",
        p: "<em>Devi riposare</em> (« tu dois te reposer ») sonne comme une consigne. <em>Dovresti riposare</em> (« tu devrais te reposer ») est un conseil. La distinction est celle que tu fais entre « tu dois » et « tu devrais », et les Italiens l'entendent aussi nettement."
      },
      {
        h: "Autres façons de conseiller",
        list: [
          "<em>Perché non…?</em> — « pourquoi tu ne… ? » : <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — « à ta place… » (expliqué en entier en B2)",
          "<em>Ti conviene…</em> — « tu as intérêt à… » : <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Réagir au problème de quelqu'un : <em>Mi dispiace</em> (je suis désolé), <em>Che peccato</em> (quel dommage), <em>Rimettiti presto</em> (remets-toi vite)."
      }
    ],
    grammar: {
      title: "Condizionale presente : les formes de base",
      table: {
        head: ["personne", "dovere", "potere", "volere", "essere"],
        rows: [
          ["io", "dovrei", "potrei", "vorrei", "sarei"],
          ["tu", "dovresti", "potresti", "vorresti", "saresti"],
          ["lui / lei", "dovrebbe", "potrebbe", "vorrebbe", "sarebbe"],
          ["noi", "dovremmo", "potremmo", "vorremmo", "saremmo"],
          ["voi", "dovreste", "potreste", "vorreste", "sareste"],
          ["loro", "dovrebbero", "potrebbero", "vorrebbero", "sarebbero"]
        ]
      },
      examples: [
        { tr: "Tu devrais te reposer quelques jours." },
        { tr: "Tu pourrais demander au pharmacien." },
        { tr: "Ce serait mieux d'aller chez le médecin." },
        { tr: "Pourquoi tu ne prends pas un jour de congé ?" },
        { tr: "Tu as intérêt à te reposer aujourd'hui." },
        { tr: "Remets-toi vite !" }
      ]
    },
    vocab: [
      "tu devrais",
      "tu pourrais",
      "ce serait mieux",
      "tu as intérêt à",
      "pourquoi tu ne… ?",
      "conseil",
      "se reposer",
      "arrêter",
      "bouger, être actif",
      "je suis désolé",
      "quel dommage",
      "remets-toi vite"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Quelle version sonne comme un conseil et non comme un ordre ?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Complète : « ___ meglio andare dal medico. » (ce serait mieux)" },
      { q: "Complète : « ___ chiedere al farmacista? » (tu pourrais)" },
      { q: "« Tu devrais te reposer quelques jours. »" },
      { q: "Associe les réactions.", pairs: ["je suis désolé", "quel dommage", "remets-toi vite", "tu as intérêt à"] },
      { q: "Donne un conseil à un ami.", tr: "Tu devrais te reposer aujourd'hui. Et pourquoi tu n'appelles pas le médecin ?" },
      { tr: "Ce serait mieux que tu prennes un jour de congé." },
      { tr: "Tu devrais te reposer et boire beaucoup d'eau." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Santé",
    title: "Mode de vie et exercice",
    objectives: [
      "parler d'habitudes saines",
      "dire à quelle fréquence tu fais quelque chose",
      "exprimer une intention de changer"
    ],
    theory: [
      {
        h: "Le régime méditerranéen n'est pas un régime",
        p: "En italien, <em>dieta</em> veut d'abord dire « la façon de manger », pas « maigrir ». <em>La dieta mediterranea</em> est un modèle alimentaire classé par l'Unesco, pas un plan minceur. Le français fait la même ambiguïté avec « régime », mais penche plus vite du côté minceur : <em>sono a dieta</em> est la formule qui, elle, veut bien dire que tu surveilles ton poids."
      },
      {
        h: "Exprimer une intention",
        p: "<em>Ho intenzione di…</em> (j'ai l'intention de), <em>vorrei iniziare a…</em> (je voudrais commencer à), <em>sto cercando di…</em> (j'essaie de). Les trois prennent un infinitif, mais chacune avec sa préposition, ce qui est typique de l'italien et se mémorise verbe par verbe. Le français tombe juste sur les trois."
      },
      {
        h: "Fréquence précise",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (un jour sur deux). La préposition <em>a</em> plus l'article : <em>alla settimana, al mese, all'anno</em>, là où tu dis « par semaine » sans article."
      },
      {
        tip: "<em>Fare movimento</em> sonne plus naturel que <em>fare sport</em> pour l'activité ordinaire : marcher, faire du vélo, prendre les escaliers."
      }
    ],
    grammar: {
      title: "Habitudes et intentions",
      table: {
        head: ["construction", "exemple", "en français"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "J'ai l'intention d'arrêter de fumer."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "J'essaie de mieux manger."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "Je voudrais commencer à courir."],
          ["fréquence", "Tre volte alla settimana.", "Trois fois par semaine."],
          ["un jour sur deux", "A giorni alterni.", "Un jour sur deux."],
          ["arrêter", "Ho smesso di bere caffè.", "J'ai arrêté le café."]
        ]
      },
      examples: [
        { tr: "Je bouge tous les jours, même si c'est juste marcher." },
        { tr: "J'essaie de dormir au moins sept heures." },
        { tr: "J'ai réduit le sucre et je me sens mieux." },
        { tr: "Je vais à la salle deux fois par semaine." },
        { tr: "J'ai l'intention de m'inscrire à la piscine." },
        { tr: "Le régime méditerranéen est très varié." }
      ]
    },
    vocab: [
      "un mode de vie sain",
      "bouger, être actif",
      "s'entraîner",
      "courir",
      "marcher",
      "s'inscrire",
      "réduire",
      "arrêter de fumer",
      "j'ai l'intention de",
      "j'essaie de",
      "un jour sur deux",
      "au moins"
    ],
    exercises: [
      { q: "Complète : « Ho intenzione ___ smettere di fumare. »" },
      { q: "Complète : « Vorrei iniziare ___ correre. »" },
      { q: "Complète : « Vado in palestra tre volte ___ settimana. »" },
      { q: "Que veut dire « a giorni alterni » ?", opts: ["Tous les jours", "Un jour sur deux", "Une fois par semaine"] },
      {
        q: "En italien « dieta » veut d'abord dire :",
        opts: ["maigrir", "la façon de manger", "jeûner"]
      },
      { q: "« J'essaie de dormir au moins sept heures. »" },
      { q: "Parle de tes habitudes.", tr: "Je bouge un jour sur deux et j'essaie de réduire le sucre." },
      { q: "Associe.", pairs: ["s'entraîner", "s'inscrire", "réduire", "au moins"] },
      { tr: "J'ai arrêté de fumer il y a trois mois et je me sens bien mieux." },
      { tr: "Je cours trois fois par semaine, tôt le matin." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Test",
    title: "Test de l'unité 4",
    objectives: ["vérifier mi fa male, le vocabulaire médical et le conditionnel"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Mi ___ male i denti. »" },
      { q: "« Ho mal ___ testa. »" },
      { q: "Un problème soudain et grave →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "« ___ meglio riposare. » (ce serait mieux)" },
      { q: "« Ho intenzione ___ smettere. »" },
      { q: "Associe.", pairs: ["ordonnance", "toux", "aller mieux", "à jeun"] },
      { q: "« J'ai mal à la gorge depuis deux jours. »" },
      { tr: "Prenez un comprimé deux fois par jour après les repas." },
      { tr: "Je ne me sens pas bien, je devrais aller chez le médecin." }
    ]
  }
});
