/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u01": { title: "Le rituel du café", grammarNote: "essere · genre et nombre · articles" },
  "lesson:a1-u01-l1": {
    theme: "Vie quotidienne",
    title: "Saluer et passer sa première commande",
    objectives: [
      "saluer et prendre congé selon l'heure",
      "commander un café comme le font les Italiens",
      "conjuguer essere au présent"
    ],
    theory: [
      {
        h: "Le salut dépend de l'horloge, pas de l'humeur",
        p: "Les salutations italiennes coupent la journée en deux. <strong>Buongiorno</strong> va du matin jusqu'au début de l'après-midi. Puis, entre 14 h et 17 h (la frontière est floue et bouge selon les régions), on passe à <strong>buonasera</strong> — et on l'emploie en entrant dans un bar à 18 h. <strong>Buonanotte</strong> n'est pas un salut : c'est ce qu'on dit en allant se coucher."
      },
      {
        h: "Ciao n'est pas toujours le choix sûr",
        p: "<strong>Ciao</strong> vaut pour « salut » à l'arrivée et au départ, mais seulement avec des gens que tu tutoies : amis, personnes de ton âge, famille, le jeune barman. À un serveur d'une cinquantaine d'années, à un guichetier, au commerçant que tu vois pour la première fois : <strong>buongiorno</strong>. Entrer dans une pharmacie avec « ciao », c'est à peu près « salut, ça roule ? » à un guichet de banque."
      },
      {
        contrast: "Le français aussi découpe la journée, et c'est justement le piège : les frontières ne sont pas aux mêmes endroits. <em>Buonasera</em> commence au milieu de l'après-midi, bien avant le « bonsoir » français, et <em>buonanotte</em> ne sert jamais à saluer quelqu'un — « bonne nuit » en arrivant est la faute classique."
      },
      {
        h: "Essere — le verbe sans lequel aucune phrase ne tient",
        p: "<strong>Essere</strong> veut dire « être ». Ses formes ne ressemblent pas à l'infinitif (<em>sono</em>, <em>sei</em>, <em>è</em>…), donc aucune règle ne permet de les déduire : il faut les savoir. La bonne nouvelle, c'est que tu vas les répéter si souvent qu'elles se mettront en place toutes seules."
      },
      {
        tip: "Les pronoms sujets (io, tu, lui…) sont normalement omis, parce que la terminaison dit déjà qui fait quoi. <em>Sono americana</em> suffit ; <em>io sono americana</em> ajoute une insistance : « <b>moi</b>, je suis américaine (et pas toi) »."
      }
    ],
    grammar: {
      title: "Essere (être) — présent",
      note: "Attention à l'accent sur <b>è</b> : sans lui, <em>e</em> veut dire « et ». Deux mots différents.",
      table: {
        head: ["personne", "forme", "en français"],
        rows: [
          ["io", "sono", "je suis"],
          ["tu", "sei", "tu es"],
          ["lui / lei / Lei", "è", "il / elle est ; vous êtes (politesse)"],
          ["noi", "siamo", "nous sommes"],
          ["voi", "siete", "vous êtes (pluriel)"],
          ["loro", "sono", "ils / elles sont"]
        ]
      },
      examples: [
        {
          tr: "Bonjour, un café s'il vous plaît.",
          note: "« un caffè », c'est un espresso : inutile de préciser"
        },
        { tr: "Je suis Anna, enchantée." },
        { tr: "Tu es de Rome ?" },
        { tr: "Le café est chaud." },
        { tr: "Nous sommes en retard." },
        { tr: "Ils sont au bar." }
      ]
    },
    vocab: [
      "bonjour (jusqu'au début de l'après-midi)",
      "bonsoir (à partir de 16-17 h)",
      "bonne nuit (seulement en partant)",
      "salut (arrivée et départ)",
      "au revoir (formel)",
      "s'il vous plaît (quand on demande)",
      "merci",
      "de rien",
      "espresso",
      "cappuccino",
      "croissant",
      "bar, café",
      "enchanté",
      "excusez-moi (formel)"
    ],
    dialogue: [
      "Bonjour ! Je vous sers quoi ?",
      "Bonjour. Un café et un croissant, s'il vous plaît.",
      "Tout de suite. Ça fait deux euros cinquante.",
      "Voilà. Merci !",
      "De rien, bonne journée !"
    ],
    culture: {
      title: "Vu par les Italiens : le café a ses règles",
      text: "<p>Dans un bar italien, on boit son café <b>debout au comptoir</b> (al banco) et ça prend trois minutes. La table coûte un supplément, parfois le double : ce n'est pas une arnaque, ce sont deux services différents au tarif.</p><p><b>Un cappuccino après onze heures</b> te signale comme touriste : le lait passe pour lourd et appartient au petit-déjeuner. Après le repas, on commande <i>un caffè</i>, ou au maximum <i>un macchiato</i>, un espresso avec une goutte de lait.</p><p>On paie en général <b>après</b> avoir bu, sauf si le bar a une caisse à l'entrée : alors c'est d'abord <i>lo scontrino</i> (le ticket), le café ensuite.</p>"
    },
    exercises: [
      {
        q: "Tu entres dans un bar à 9 h 30 du matin. Tu dis quoi ?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno couvre du matin au début d'après-midi. Buonanotte ne sert qu'à partir se coucher."
      },
      {
        q: "Le serveur a une soixantaine d'années et tu ne le connais pas. Quel salut convient ?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "Garde « ciao » pour les gens que tu tutoies. À un inconnu dans un bar : buongiorno."
      },
      {
        tr: "Toute la conjugaison, sans regarder.",
        why: "Essere est irrégulier à toutes les personnes. C'est l'une des deux conjugaisons qu'il faut vraiment apprendre par cœur."
      },
      {
        q: "Complète : « Anna e Marco ___ italiani. » (Anna et Marco sont italiens.)",
        hint: "troisième personne du pluriel",
        why: "Loro sono. Remarque que « sono » sert à la fois pour <b>io</b> et pour <b>loro</b> : le contexte tranche."
      },
      {
        q: "Traduis : « Je viens de Pologne. »",
        hint: "essere + da + pays",
        why: "Sono dalla Polonia. Les noms de pays prennent l'article : la Polonia → dalla Polonia."
      },
      {
        tr: "Un café et un croissant, s'il vous plaît.",
        why: "L'italien n'a pas de verbe de politesse à ajouter : on dit ce qu'on veut et on met <i>per favore</i>."
      },
      {
        q: "Associe chaque expression à son sens.",
        pairs: ["merci", "de rien", "excusez-moi (formel)", "au revoir"]
      },
      {
        tr: "Bonsoir, un cappuccino s'il vous plaît.",
        why: "Attention au double <b>cc</b> et au double <b>pp</b> : en italien on les tient plus longtemps que les simples, et ça s'entend."
      },
      {
        tr: "Bonjour, un café s'il vous plaît.",
        why: "« Caffè » est accentué sur la dernière syllabe : ka-FÉ, comme en français d'ailleurs."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Grammaire de base",
    title: "Le genre du nom",
    objectives: [
      "reconnaître le genre d'un nom à sa terminaison",
      "former le pluriel selon -o/-i, -a/-e, -e/-i",
      "gérer les invariables comme il bar et la città"
    ],
    theory: [
      {
        h: "Deux genres, pas trois",
        p: "L'italien n'a que le masculin et le féminin : pas de neutre. Chaque nom appartient à l'un des deux, objets compris : <em>il tavolo</em> (table) est masculin, <em>la sedia</em> (chaise) féminin. Le système est le tien ; ce sont les mots précis qui diffèrent, et « la table » ne t'aidera pas à trouver <em>il</em> tavolo."
      },
      {
        h: "Trois schémas qui couvrent la plupart des mots",
        list: [
          "terminaison en <b>-o</b> → masculin, pluriel <b>-i</b> : <em>il libro → i libri</em>",
          "terminaison en <b>-a</b> → féminin, pluriel <b>-e</b> : <em>la casa → le case</em>",
          "terminaison en <b>-e</b> → masculin <i>ou</i> féminin, pluriel toujours <b>-i</b> : <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Les noms en <b>-e</b> sont le seul groupe dont il faut mémoriser le genre avec le mot. Note-les toujours avec l'article : pas « fiore », mais <b>il fiore</b>."
      },
      {
        h: "Les mots qui ne changent jamais",
        p: "Les noms terminés par une voyelle accentuée (<em>la città</em>, <em>il caffè</em>) et les emprunts (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) sont identiques au singulier et au pluriel. Seul l'article distingue : <em>la città → le città</em>. C'est ta situation habituelle, puisqu'en français le pluriel ne s'entend presque jamais."
      },
      {
        contrast: "Le vrai travail, ce sont les désaccords mot à mot : <em>il fiore</em>, <em>il mare</em>, <em>il dente</em>, <em>il minuto</em> sont masculins là où le français dit la fleur, la mer, la dent, la minute. Et la classe en <b>-e</b>, que le français n'a pas comme catégorie, ne donne aucun indice : c'est là qu'il faut apprendre l'article avec le nom."
      }
    ],
    grammar: {
      title: "Genre et pluriel du nom",
      table: {
        head: ["schéma", "singulier", "pluriel", "en français"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "livre / livres"],
          ["-a → -e (f)", "la ragazza", "le ragazze", "fille / filles"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restaurant / restaurants"],
          ["-e → -i (f)", "la stazione", "le stazioni", "gare / gares"],
          ["invariable", "la città", "le città", "ville / villes"],
          ["emprunts", "il bar", "i bar", "bar / bars"]
        ]
      },
      examples: [
        { tr: "Le croissant est bon." },
        { tr: "Les croissants sont bons.", note: "l'adjectif change de terminaison lui aussi" },
        { tr: "La gare est tout près.", note: "« stazione » est féminin malgré le -e" },
        { tr: "Deux cafés, s'il vous plaît.", note: "caffè ne change pas de forme" }
      ]
    },
    vocab: [
      "livre",
      "maison",
      "table",
      "chaise",
      "restaurant",
      "gare",
      "clé",
      "fleur",
      "ville",
      "café / bar",
      "sport",
      "film",
      "nuit",
      "jour"
    ],
    exercises: [
      {
        q: "Quel mot est féminin ?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i> — c'est l'article qui donne le genre, la terminaison -e ne le révèle pas."
      },
      {
        q: "Le pluriel de « la ragazza » est « ___ ragazze ».",
        why: "L'article féminin pluriel est toujours <b>le</b>."
      },
      {
        q: "Mets au pluriel : « il ristorante » → « i ___ ».",
        hint: "-e devient toujours -i au pluriel",
        why: "Les noms en -e font leur pluriel en -i, quel que soit leur genre."
      },
      {
        q: "Choisis le bon article défini singulier.",
        why: "Avec les noms en -e, le genre se mémorise — d'où l'habitude de les noter avec l'article.",
        items: ["livre", "maison", "gare", "restaurant", "clé", "jour"]
      },
      {
        q: "Combien de cafés commandes-tu en disant « due caffè » ?",
        opts: ["Un", "Deux", "Impossible à savoir"],
        why: "« Caffè » ne se fléchit pas ; le nombre vient du numéral ou de l'article : <i>il caffè / i caffè</i>."
      },
      {
        q: "Lesquels de ces noms sont identiques au pluriel ?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Invariables : les mots accentués sur la voyelle finale (città) et les emprunts (bar, sport)."
      },
      { tr: "Le restaurant est fermé.", why: "Ordre : article + nom + verbe + adjectif." },
      { tr: "Les clés sont sur la table." },
      { tr: "La ville est très belle.", why: "« Città » est accentué à la fin : tchi-TA." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Grammaire de base",
    title: "Articles définis et indéfinis",
    objectives: [
      "choisir le bon article défini d'après le premier son du mot",
      "distinguer il de un",
      "employer lo et gli correctement"
    ],
    theory: [
      {
        h: "Pourquoi sept formes là où le français en a quatre",
        p: "L'article fait deux choses à la fois : il marque le genre et le nombre, et il dit si l'on parle de quelque chose que l'auditeur connaît déjà ou de n'importe lequel. <em>Vorrei un caffè</em> : un café quelconque. <em>Dov'è il caffè?</em> : celui que nous avons tous les deux en tête. Ça, le français le fait aussi ; ce qu'il n'a pas, c'est la troisième forme masculine."
      },
      {
        h: "Les formes masculines dépendent du premier son",
        p: "L'article masculin a trois variantes, et le choix n'est pas une question de goût mais de prononciation. <strong>Il</strong> devant une consonne ordinaire. <strong>Lo</strong> devant <em>s + consonne</em> (<em>lo studente</em>) et devant <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em>, <em>x</em>. <strong>L'</strong> devant une voyelle. La raison est purement phonétique : « il studente » est pénible à dire. C'est le même réflexe que ton élision devant voyelle, poussé un cran plus loin."
      },
      {
        h: "Le pluriel",
        list: [
          "<b>il → i</b> : <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b> : <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b> : <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "L'article indéfini",
        p: "<strong>Un</strong> devant consonne et devant voyelle (<em>un libro</em>, <em>un amico</em> — sans apostrophe !), <strong>uno</strong> partout où irait <em>lo</em> (<em>uno studente</em>), <strong>una</strong> au féminin, <strong>un'</strong> devant une voyelle féminine (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (sans apostrophe, un garçon) contre <b>un'amica</b> (avec, une fille). À l'écrit, l'apostrophe est la seule différence et c'est elle qui porte le genre. « Un ami » et « une amie » se distinguent en français par l'article lui-même : ici, tout tient à un signe."
      }
    ],
    grammar: {
      title: "Les articles : le tableau complet",
      table: {
        head: ["contexte", "défini sing.", "défini plur.", "indéfini"],
        rows: [
          ["m. + consonne", "il treno", "i treni", "un treno"],
          ["m. + s+cons., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + voyelle", "l'amico", "gli amici", "un amico"],
          ["f. + consonne", "la casa", "le case", "una casa"],
          ["f. + voyelle", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "Un café, s'il vous plaît.", note: "n'importe lequel — indéfini" },
        { tr: "Ce café est froid.", note: "un café précis — défini" },
        { tr: "Le sac à dos est lourd.", note: "z → lo" },
        { tr: "Les étudiants sont en retard." },
        { tr: "Une amie de Rome.", note: "féminin + voyelle → un'" }
      ]
    },
    vocab: [
      "étudiant",
      "sac à dos",
      "ami",
      "train",
      "miroir",
      "sucre",
      "eau",
      "verre",
      "bouteille",
      "hôtel",
      "psychologue",
      "les gens (singulier en italien !)"
    ],
    exercises: [
      {
        q: "Quel article va avec « zucchero » (sucre) ?",
        opts: ["il", "lo", "l'"],
        why: "Les masculins commençant par <b>z</b> prennent lo : <i>lo zucchero</i>, comme <i>lo zaino</i>."
      },
      {
        q: "Quel est le pluriel de « lo specchio » ?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo devient toujours <b>gli</b> au pluriel."
      },
      {
        q: "Choisis le bon article défini.",
        why: "Le choix dépend du genre ET du premier son du mot.",
        items: ["train", "étudiant", "amie", "eau", "bouteille", "sac à dos"]
      },
      {
        q: "Complète : « Ho ___ amica a Milano. » (J'ai une amie à Milan.)",
        hint: "féminin devant voyelle",
        why: "Un'amica, avec l'apostrophe. Sans elle (<i>un amico</i>), ce serait un garçon."
      },
      {
        q: "Complète : « ___ studenti sono bravi. » (Les étudiants sont bons.)",
        why: "Studente prend lo, donc au pluriel : gli studenti."
      },
      {
        q: "« Vorrei il caffè » contre « Vorrei un caffè » : quelle différence ?",
        opts: [
          "Aucune, ce sont des synonymes",
          "Il = ce café précis déjà évoqué ; un = un café quelconque",
          "Il est plus poli"
        ],
        why: "L'article défini suppose que l'auditeur sait duquel il s'agit. Au bar, on commande <i>un caffè</i>."
      },
      {
        q: "Associe le nom à son article.",
        pairs: ["ps + consonne", "voyelle", "consonne ordinaire", "féminin"]
      },
      {
        tr: "Le sac à dos de l'étudiant est lourd.",
        why: "« Dello » c'est di + lo — la préposition s'adapte elle aussi à l'article."
      },
      { tr: "Les étudiants sont à l'université." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Vie quotidienne",
    title: "Comment ça va — tu ou Lei",
    objectives: [
      "demander comment va quelqu'un, en formel et en familier",
      "conjuguer le verbe stare",
      "savoir quand on passe de Lei à tu"
    ],
    theory: [
      {
        h: "Deux façons de dire « vous », pas une",
        p: "L'italien distingue <strong>tu</strong> (familier) de <strong>Lei</strong> (poli). C'est ton tutoiement/vouvoiement, avec une différence de taille : <em>Lei</em> signifie littéralement « elle » et s'emploie pour les hommes comme pour les femmes, avec le verbe à la <b>troisième personne du singulier</b>. <em>Come sta?</em> et non « come state ». À l'écrit on met souvent la majuscule pour le distinguer du « elle » ordinaire."
      },
      {
        h: "Qui propose de passer au tu",
        p: "La règle est simple : c'est la personne la plus âgée ou la plus haut placée qui propose. La formule est <em>Possiamo darci del tu?</em> Dans un bar, entre gens du même âge, dans une entreprise jeune, les Italiens passent au <em>tu</em> très vite — plus vite qu'en France. À la banque, chez le médecin, dans une administration, le <em>Lei</em> reste."
      },
      {
        h: "Stare — « être », mais pour dire comment on va",
        p: "L'état dans lequel tu te trouves passe par <strong>stare</strong>, pas par <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. « Sono bene » est une faute qu'aucun Italien ne ferait. <em>Stare</em> couvre aussi le fait de rester : <em>Sto a casa</em> (je reste à la maison)."
      },
      {
        contrast: "Le français dit « comment vas-tu », avec le verbe aller, donc il n'y a pas ici de mauvais réflexe à corriger — mais il n'y a pas non plus d'appui. Retiens la paire d'un bloc : <b>come stai / sto bene</b>. Et note que pour la localisation, l'italien préfère <em>essere</em> : <em>sono a casa</em>, alors que <em>sto a casa</em> veut plutôt dire « je reste chez moi »."
      }
    ],
    grammar: {
      title: "Stare (aller, se sentir, rester) — présent",
      table: {
        head: ["personne", "forme", "exemple"],
        rows: [
          ["io", "sto", "Sto bene, grazie."],
          ["tu", "stai", "Come stai?"],
          ["lui / lei / Lei", "sta", "Come sta, signora?"],
          ["noi", "stiamo", "Stiamo bene."],
          ["voi", "state", "Come state?"],
          ["loro", "stanno", "Stanno male."]
        ]
      },
      examples: [
        { tr: "Salut Marco, comment ça va ?", note: "familier" },
        { tr: "Bonjour, comment allez-vous ?", note: "poli" },
        { tr: "Bien, merci. Et toi ?" },
        { tr: "On fait aller.", note: "une réponse très courante" },
        { tr: "Comme ci comme ça." },
        { tr: "On se tutoie ?" }
      ]
    },
    vocab: [
      "comment ça va ? (familier)",
      "comment allez-vous ? (poli)",
      "je vais bien",
      "je ne vais pas bien",
      "on fait aller",
      "comme ci comme ça",
      "et toi ?",
      "très bien",
      "un peu fatigué",
      "monsieur / madame",
      "à bientôt",
      "à tout à l'heure"
    ],
    dialogue: [
      "Salut Giulia ! Comment ça va ?",
      "Salut ! Très bien, et toi ?",
      "Un peu fatigué, mais ça va. À tout à l'heure !",
      "Bonjour madame, comment allez-vous ?",
      "On fait aller, merci. Et vous ?"
    ],
    exercises: [
      {
        q: "Tu demandes comment va quelqu'un que tu vouvoies. Quelle phrase est correcte ?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "La forme de politesse prend la troisième personne du singulier : <i>come sta ?</i>"
      },
      {
        q: "Quelle phrase est fausse ?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "L'état passe par <b>stare</b>, jamais par <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare est irrégulier au singulier et à la troisième du pluriel (stanno)."
      },
      {
        q: "Complète : « Come ___, ragazzi ? » (Comment ça va, les gars ?)",
        why: "Tu t'adresses à un groupe → la forme de voi : state."
      },
      { q: "Traduis en tutoyant : « Je vais bien, merci. Et toi ? »", why: "Sto bene, grazie. E tu?" },
      {
        q: "Tu es dans un bar. Le barman, qui te connaît depuis des années, te salue le premier.",
        setting: "Le bar du quartier, huit heures du matin.",
        lines: [
          { tr: "Salut ! Ça va ce matin ?" },
          { tr: "Dis que ça va et renvoie la question.", answerTr: "Bien, et toi ?" },
          { tr: "Super ! Comme d'habitude, un café ?" },
          { tr: "Dis oui et remercie.", answerTr: "Oui, merci !" }
        ]
      },
      {
        q: "Associe la réponse à ce qu'elle exprime.",
        pairs: ["très bien", "on fait aller", "comme ci comme ça", "mal"]
      },
      { tr: "Bonsoir madame, comment allez-vous ?" },
      { tr: "On fait aller, merci. Et vous ?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier les salutations, essere, stare, le genre et les articles"],
    theory: [
      {
        p: "Dix questions sur toute l'unité. On valide à 70 %. Ne retourne pas voir les leçons : si tu ne te rappelles pas quelque chose, mieux vaut y revenir et le réviser."
      }
    ],
    exercises: [
      {
        q: "Il est 18 h 30 et tu entres dans un magasin. Tu dis quoi ?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "À partir de 16-17 h, les Italiens passent à buonasera."
      },
      { q: "« Noi ___ in ritardo. » (Nous sommes en retard.)", why: "essere, la forme de noi." },
      { q: "« Come ___ ? » en demandant à une amie comment elle va.", why: "stare, la forme de tu." },
      { q: "Choisis l'article défini.", items: [, , , ] },
      {
        q: "Le pluriel de « l'amico » :",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "Le l' masculin devient gli."
      },
      {
        q: "Quels noms ne changent pas au pluriel ?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "« Une eau, s'il vous plaît. »", why: "Un'acqua, per favore — féminin devant voyelle." },
      { tr: "Les étudiants sont au bar." },
      { tr: "Deux cafés et un croissant, s'il vous plaît." },
      { tr: "Bonjour, comment allez-vous ?" }
    ]
  },
  "unit:a1-u02": { title: "Qui es-tu", grammarNote: "avere · les nombres · métiers et nationalités" },
  "lesson:a1-u02-l1": {
    theme: "Rencontres",
    title: "Se présenter",
    objectives: [
      "donner ton prénom, d'où tu viens et où tu habites",
      "employer le verbe chiamarsi",
      "poser les mêmes questions aux autres"
    ],
    theory: [
      {
        h: "« Je m'appelle » est un verbe pronominal",
        p: "<strong>Chiamarsi</strong> veut dire littéralement « s'appeler ». D'où <em>mi chiamo</em>. Le pronom réfléchi (<em>mi, ti, si…</em>) se place <b>devant</b> le verbe, exactement comme en français."
      },
      {
        h: "D'où tu viens : essere di ou venire da",
        p: "Pour une ville on dit <em>sono di Lione</em> ; pour un pays, <em>vengo dalla Francia</em> ou <em>sono francese</em>. Les noms de pays prennent l'article (<em>l'Italia, la Francia</em>), les noms de villes non — comme en français."
      },
      {
        trap: "Les nationalités s'écrivent en <b>minuscule</b> : <em>sono francese</em>, <em>un ragazzo italiano</em>. Le français fait pareil pour l'adjectif (« il est français ») mais met la majuscule au nom (« un Français »). En italien, jamais de majuscule, dans les deux emplois."
      },
      {
        h: "Abitare — habiter quelque part",
        p: "<em>Abitare a Roma</em> (une ville), <em>abitare in Italia</em> (un pays). Le même partage a/in revient plus tard avec les voyages, donc autant le mémoriser tout de suite en paire : <b>a + ville, in + pays</b>. Le français dit « à Rome » et « en Italie » : la logique est la même, les mots changent."
      }
    ],
    grammar: {
      title: "Chiamarsi (s'appeler) et poser des questions sur quelqu'un",
      table: {
        head: ["personne", "chiamarsi", "exemple"],
        rows: [
          ["io", "mi chiamo", "Mi chiamo Anna."],
          ["tu", "ti chiami", "Come ti chiami?"],
          ["lui / lei / Lei", "si chiama", "Come si chiama, scusi?"],
          ["noi", "ci chiamiamo", "Ci chiamiamo Rossi."],
          ["voi", "vi chiamate", "Come vi chiamate?"],
          ["loro", "si chiamano", "Si chiamano Marco e Luca."]
        ]
      },
      examples: [
        { tr: "Comment tu t'appelles ? — Je m'appelle Eva." },
        { tr: "Tu viens d'où ? — Je suis de Lyon." },
        { tr: "Je suis française, mais j'habite à Milan.", note: "nationalité en minuscule" },
        { tr: "Tu as quel âge ? — J'ai vingt-huit ans.", note: "l'âge passe toujours par avere" },
        { tr: "Enchanté, Marco. — Tout le plaisir est pour moi." }
      ]
    },
    vocab: [
      "être",
      "je m'appelle…",
      "comment tu t'appelles ?",
      "tu viens d'où ?",
      "je suis de… (ville)",
      "j'habite à… (ville)",
      "français (m. / f.)",
      "italien (m. / f.)",
      "prénom",
      "nom de famille",
      "enchanté",
      "moi aussi",
      "ah bon ?"
    ],
    exercises: [
      {
        q: "Comment demander son prénom à quelqu'un, en tutoyant ?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "La forme de tu : <i>ti chiami</i>. La version polie est <i>come si chiama ?</i>"
      },
      {
        q: "Quelle phrase est correctement écrite ?",
        opts: ["Sono Francese.", "Sono francese.", "Sono la francese."],
        why: "Les nationalités sont en minuscule, et sans article après essere."
      },
      { q: "Complète : « ___ chiamo Marta. »", why: "Pronom réfléchi de première personne : mi chiamo." },
      {
        q: "Complète : « Abito ___ Roma. » (J'habite à Rome.)",
        why: "Les villes prennent <b>a</b>, les pays <b>in</b> : abito a Roma / abito in Italia."
      },
      {
        q: "Complète la présentation.",
        tr: "Salut ! Je m'appelle Kate, je viens de Lyon et j'habite à Bologne.",
        why: "Les trois verbes qui reviennent dans toute première phrase sur soi."
      },
      { tr: "Enchanté, je m'appelle Luca." },
      {
        q: "Tu rencontres quelqu'un dans une école de langues.",
        setting: "Premier jour dans une école de langues à Florence.",
        lines: [
          { tr: "Salut ! Moi c'est Giulia. Et toi, comment tu t'appelles ?" },
          { tr: "Présente-toi en donnant ton prénom.", answerTr: "Je m'appelle Eva." },
          { tr: "Enchantée, Eva ! Tu viens d'où ?" },
          { tr: "Dis que tu viens de Pologne : c'est la réponse modèle enregistrée.", answerTr: "Je viens de Pologne." }
        ]
      },
      { tr: "Je m'appelle Elena et j'habite à Naples." },
      { tr: "Enchanté !" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Grammaire de base",
    title: "Avoir, et les nombres de 0 à 100",
    objectives: [
      "conjuguer avere",
      "employer des expressions comme ho fame, ho freddo, ho ventotto anni",
      "compter jusqu'à cent et donner un prix"
    ],
    theory: [
      {
        h: "Avere travaille comme le français « avoir »",
        p: "L'italien emploie <strong>avere</strong> là où l'anglais met « être ». <em>Ho fame</em> est littéralement « j'ai faim » — et c'est déjà ce que tu dis. Même logique pour la soif, le froid, le chaud, la peur, le sommeil et l'âge. Ce chapitre, le français te l'offre en entier."
      },
      {
        h: "L'âge : toujours avere",
        p: "<em>Ho trent'anni</em>, « j'ai trente ans ». Note l'apostrophe : <em>trent'anni</em>, <em>vent'anni</em> — la voyelle finale de la dizaine tombe devant <em>anni</em>."
      },
      {
        h: "Le h qu'on n'entend jamais",
        p: "Les formes <em>ho, hai, ha, hanno</em> commencent par un <b>h</b> muet. Il ne se prononce pas du tout : il sert uniquement à les distinguer d'autres mots — <em>ho</em> (j'ai) contre <em>o</em> (ou), <em>ha</em> (il a) contre <em>a</em> (à). C'est ton h muet, avec une fonction différente."
      },
      {
        h: "Les nombres : dizaine plus unité",
        p: "À partir de 20, les nombres s'écrivent en un seul mot : <em>ventidue</em>, <em>trentasei</em>. Devant <em>uno</em> et <em>otto</em>, la dizaine perd sa voyelle finale : <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>. Et pas de « soixante-dix » compliqué : <em>settanta</em>, <em>ottanta</em>, <em>novanta</em> sont des mots à part entière."
      }
    ],
    grammar: {
      title: "Avere (avoir) et les nombres",
      table: {
        head: ["personne", "avere", "expression"],
        rows: [
          ["io", "ho", "Ho fame. (J'ai faim.)"],
          ["tu", "hai", "Hai freddo? (Tu as froid ?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (Il a raison.)"],
          ["noi", "abbiamo", "Abbiamo sete. (Nous avons soif.)"],
          ["voi", "avete", "Avete tempo? (Vous avez le temps ?)"],
          ["loro", "hanno", "Hanno paura. (Ils ont peur.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "devant uno et otto la dizaine perd sa voyelle" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "J'ai vingt-huit ans." }
      ]
    },
    vocab: [
      "avoir",
      "j'ai faim",
      "j'ai soif",
      "j'ai froid / chaud",
      "j'ai sommeil",
      "j'ai peur",
      "j'ai raison",
      "j'ai besoin de…",
      "tu as quel âge ?",
      "ça fait combien ?",
      "euro",
      "numéro",
      "numéro de téléphone"
    ],
    exercises: [
      { why: "Quatre formes commencent par un h muet : ho, hai, ha, hanno." },
      {
        q: "Comment dit-on « j'ai faim » ?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Les états physiques passent par avere : ho fame, ho sete, ho freddo. Comme en français."
      },
      { q: "Quel nombre est « settantasei » ?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Écris en chiffres : « novantatré »", why: "novanta (90) + tre (3)." },
      {
        q: "Complète : « Ho vent___ anni. » (J'ai vingt ans.)",
        hint: "quelque chose disparaît devant « anni »",
        why: "Vent'anni — la dizaine perd sa voyelle finale devant anni."
      },
      { q: "« Tu as quel âge ? »", why: "Littéralement « combien d'années as-tu », comme en français." },
      {
        q: "Associe l'expression avec avere à son sens.",
        pairs: ["j'ai soif", "j'ai sommeil", "j'ai peur", "j'ai raison"]
      },
      {
        q: "Complète l'échange à la caisse.",
        tr: "— Ça fait combien ? — Trente-deux euros. — Je n'ai que vingt euros, désolé."
      },
      { tr: "J'ai trente-cinq ans et j'habite à Turin." },
      { tr: "Combien coûte un cappuccino ?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Travail et gens",
    title: "Métiers et travail",
    objectives: [
      "dire ce que tu fais dans la vie",
      "employer fare il / essere un",
      "former le féminin des noms de métier"
    ],
    theory: [
      {
        h: "Deux constructions, deux nuances",
        p: "« Je suis architecte » a deux versions italiennes. <strong>Faccio l'architetto</strong> (littéralement « je fais l'architecte ») parle du métier que tu exerces et domine à l'oral. <strong>Sono architetto</strong> insiste sur l'identité ou le diplôme. Après <em>fare</em> vient l'article défini ; après <em>essere</em>, en général rien — comme ton « je suis architecte » sans article."
      },
      {
        h: "Formes féminines",
        list: [
          "-o → -a : <em>l'impiegato → l'impiegata</em>",
          "-e → -essa : <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice : <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em> — exactement ton -teur/-trice",
          "invariables : <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Des noms de métier en mouvement",
        p: "Des formes comme <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> sont aujourd'hui standard dans la presse et les documents officiels, alors qu'elles faisaient débat il y a vingt ans. À l'oral, on entend encore <em>l'avvocato</em> pour une femme. C'est le même débat que « la ministre » et « l'autrice » en français, au même stade."
      },
      {
        contrast: "Le suffixe <em>-essa</em> n'a pas d'équivalent français et surprend au début : <em>la professoressa</em>, <em>la studentessa</em>, <em>la dottoressa</em>. Ce n'est ni vieilli ni péjoratif, c'est la forme normale."
      }
    ],
    grammar: {
      title: "Fare (faire) — présent",
      note: "Irrégulier, et en même temps l'un des trois verbes italiens les plus fréquents.",
      table: {
        head: ["personne", "fare", "exemple"],
        rows: [
          ["io", "faccio", "Faccio l'insegnante."],
          ["tu", "fai", "Che lavoro fai?"],
          ["lui / lei / Lei", "fa", "Fa il medico."],
          ["noi", "facciamo", "Facciamo colazione."],
          ["voi", "fate", "Che cosa fate?"],
          ["loro", "fanno", "Fanno gli avvocati."]
        ]
      },
      examples: [
        { tr: "Tu fais quoi dans la vie ?" },
        { tr: "Je suis journaliste." },
        { tr: "Je suis ingénieur.", note: "après essere, en général pas d'article" },
        { tr: "Je travaille dans une agence." },
        { tr: "En ce moment je ne travaille pas." },
        { tr: "J'étudie encore, je suis en dernière année." }
      ]
    },
    vocab: [
      "travail, métier",
      "enseignant",
      "médecin",
      "ingénieur",
      "avocat",
      "journaliste",
      "employé de bureau",
      "cuisinier",
      "vendeur",
      "ouvrier",
      "indépendant",
      "je cherche du travail"
    ],
    exercises: [
      { why: "Attention au double c de faccio et facciamo." },
      {
        q: "Quelle phrase veut dire « je suis enseignant » et sonne le plus naturel ?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + article défini est la façon la plus courante de nommer son métier à l'oral."
      },
      {
        q: "Quel est le féminin de « il professore » ?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "Le schéma -e → -essa, comme studente → studentessa."
      },
      {
        q: "Complète : « Mia sorella fa ___ dottoressa. »",
        why: "Après fare vient l'article défini, accordé au genre : la dottoressa."
      },
      { q: "Choisis l'article.", items: ["cuisinière", "ingénieur", "étudiante", "ouvrier"] },
      { q: "« Tu fais quoi dans la vie ? » (familier)", why: "Che lavoro fai ? — littéralement « quel travail fais-tu »." },
      {
        q: "Associe la forme masculine à la féminine.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "Je travaille dans une banque à Milan." },
      { tr: "Je suis architecte, je travaille avec mon frère." },
      { tr: "Tu fais quoi dans la vie ? Je suis journaliste." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Grammaire de base",
    title: "La première conjugaison",
    objectives: [
      "conjuguer n'importe quel verbe régulier en -are",
      "gérer les changements orthographiques de cercare, pagare, mangiare",
      "construire une négation et une question"
    ],
    theory: [
      {
        h: "Le groupe le plus gros et le plus prévisible",
        p: "Environ 70 % des verbes italiens finissent en <strong>-are</strong>, et presque tous se comportent pareil. Tu coupes la terminaison de l'infinitif et tu ajoutes les six tiennes : <em>-o, -i, -a, -iamo, -ate, -ano</em>. C'est ton premier groupe en -er, avec des terminaisons proches mais pas identiques."
      },
      {
        h: "Un accent qu'on ne voit pas",
        p: "À la forme <em>loro</em>, l'accent tombe sur la troisième syllabe depuis la fin : <b>par</b>-la-no, <b>la</b>-vo-ra-no. Pas « parla-NO ». La différence s'entend et les Italiens la repèrent. Le français, qui accentue toujours la fin du groupe, doit ici faire un effort conscient."
      },
      {
        h: "Une orthographe qui sauve la prononciation",
        list: [
          "<b>-care / -gare</b> ajoutent un <b>h</b> devant -i et -e : <em>cercare → cerchi, cerchiamo</em> ; <em>pagare → paghi, paghiamo</em>. C'est ton « nous plaçons » et « nous mangeons », autrement dit."
          ,
          "<b>-ciare / -giare</b> perdent le <b>i</b> devant -i : <em>mangiare → mangi</em> (pas « mangii »), <em>cominciare → cominci</em>",
          "<b>-iare</b> atone perd aussi un i : <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Négation et question ne demandent aucune reconstruction",
        p: "La négation tient en un mot, <strong>non</strong>, devant le verbe : <em>non parlo italiano</em>. Pas de second élément, donc pas de « ne… pas » à caser. Et la question ne change pas l'ordre des mots : l'intonation suffit, <em>Parli italiano?</em> Aucune inversion, aucun « est-ce que »."
      }
    ],
    grammar: {
      title: "Parlare (parler) — le schéma -ARE",
      table: {
        head: ["personne", "terminaison", "parlare", "lavorare"],
        rows: [
          ["io", "-o", "parlo", "lavoro"],
          ["tu", "-i", "parli", "lavori"],
          ["lui / lei / Lei", "-a", "parla", "lavora"],
          ["noi", "-iamo", "parliamo", "lavoriamo"],
          ["voi", "-ate", "parlate", "lavorate"],
          ["loro", "-ano", "parlano", "lavorano"]
        ]
      },
      examples: [
        { tr: "Je parle un peu italien." },
        { tr: "Je ne parle pas bien, mais je comprends." },
        { tr: "Tu étudies à l'université ?", note: "une question par la seule intonation" },
        { tr: "On mange à huit heures." },
        { tr: "Tu cherches du travail à Milan ?", note: "cercare → cerchi, avec un h" },
        { tr: "Ils habitent près du centre.", note: "accent : A-bi-ta-no" }
      ]
    },
    vocab: [
      "parler",
      "travailler",
      "étudier",
      "habiter",
      "manger",
      "acheter",
      "chercher",
      "payer",
      "écouter",
      "regarder",
      "attendre",
      "commencer"
    ],
    exercises: [
      { why: "Le schéma qui couvre la majorité des verbes italiens." },
      {
        tr: "tu, noi — attention à l'orthographe",
        why: "Cerchi et cerchiamo prennent un <b>h</b> pour garder le son k."
      },
      {
        q: "Quelle forme est correcte pour « tu manges » ?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Les verbes en -giare perdent le i devant la terminaison -i : mangi."
      },
      {
        q: "Complète : « Loro ___ a Bologna. » (Ils habitent à Bologne.)",
        why: "abitare, la forme de loro : -ano."
      },
      {
        q: "Mets à la forme négative : « Parlo italiano. » → « ___ parlo italiano. »",
        why: "Un seul mot, non, devant le verbe : voilà toute la négation."
      },
      { q: "« Nous cherchons un appartement à Rome. »", why: "cercare → cerchiamo (avec h), a + ville." },
      {
        q: "Quelles formes appartiennent à « studiare » ?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "« Studii » n'existe pas : le double i se réduit à un."
      },
      { tr: "Je ne travaille pas le samedi.", why: "« Il sabato » avec l'article veut dire « le samedi », de façon régulière." },
      { tr: "J'étudie l'italien depuis trois mois." },
      { tr: "Je ne parle pas bien, mais je comprends presque tout." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier avere, fare, chiamarsi, les nombres et la première conjugaison"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« ___ chiamo Peter. »" },
      { q: "« Quanti anni ___ ? » (Tu as quel âge ?)" },
      { q: "Quel nombre est « ottantaquattro » ?", opts: ["48", "84", "94"] },
      { q: "« J'ai faim » en italien :", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Quelle forme est correcte pour « tu paies » ?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare ajoute un h devant -i."
      },
      { q: "Complète.", tr: "Je suis française, j'habite à Vérone et je suis enseignante." },
      { q: "« Je ne parle pas italien. »" },
      { tr: "J'ai vingt-sept ans et je cherche du travail." },
      { tr: "Je m'appelle Anna et je suis journaliste." }
    ]
  },
  "unit:a1-u03": {
    title: "Apéritif et cuisine",
    grammarNote: "piacere · article partitif · -ere et -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Cuisine",
    title: "Le verbe piacere",
    objectives: [
      "dire ce que tu aimes et ce que tu n'aimes pas",
      "choisir entre piace et piacciono",
      "demander aux autres ce qu'ils aiment"
    ],
    theory: [
      {
        h: "La phrase se construit à l'envers",
        p: "<strong>Piacere</strong> ne veut pas dire « aimer », il veut dire « plaire ». <em>Mi piace la pizza</em>, c'est littéralement « la pizza me plaît ». Le sujet grammatical, c'est <b>la chose</b>, et celui qui apprécie apparaît comme complément indirect (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "D'où les deux formes du verbe",
        p: "Puisque le sujet est la chose, c'est elle qui décide du nombre : <em>mi piace <b>il</b> caffè</em> (une chose) contre <em>mi piacciono <b>gli</b> spaghetti</em> (plusieurs). Devant un infinitif, toujours le singulier : <em>mi piace viaggiare</em>."
      },
      {
        contrast: "Le français a exactement cette construction avec « plaire » : « la pizza me plaît », « les spaghettis me plaisent ». Le problème, c'est que tu dis plus spontanément « j'aime la pizza », qui met le sujet du mauvais côté. La solution est simple : traduis <em>mi piace</em> par « ça me plaît », jamais par « j'aime », et l'accord cesse d'être mystérieux."
      },
      {
        h: "Qui apprécie : mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — à moi",
          "<b>ti</b> piace — à toi",
          "<b>gli</b> piace — à lui ; <b>le</b> piace — à elle",
          "<b>ci</b> piace — à nous · <b>vi</b> piace — à vous · <b>gli</b> piace — à eux"
        ]
      },
      {
        trap: "La négation se met devant le pronom, pas devant le verbe : <b>non</b> mi piace. Jamais « mi non piace ». Comme ton « ça ne me plaît pas », où le ne précède aussi le pronom."
      }
    ],
    grammar: {
      title: "Piacere : le schéma de la phrase",
      note: "[pronom] + piace/piacciono + [la chose, avec son article]",
      table: {
        head: ["ce qui plaît", "forme", "exemple"],
        rows: [
          ["une chose", "piace", "Mi piace il vino rosso."],
          ["plusieurs choses", "piacciono", "Mi piacciono i dolci."],
          ["une activité", "piace", "Mi piace cucinare."],
          ["négation", "non … piace", "Non mi piace il pesce crudo."],
          ["question", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "J'aime beaucoup le café." },
        { tr: "Tu aimes le spritz ?" },
        { tr: "On n'aime pas la bière tiède." },
        { tr: "Elle aime danser." },
        { tr: "Marco aime le poisson.", note: "devant un prénom on ajoute « a »" },
        { tr: "J'aimerais bien goûter.", note: "une forme de conditionnel : à apprendre en bloc" }
      ]
    },
    vocab: [
      "apéritif (boisson avec de quoi grignoter)",
      "spritz",
      "vin rouge / blanc",
      "bière",
      "olives",
      "chips",
      "amuse-bouches salés",
      "jambon cru",
      "fromage",
      "desserts, sucreries",
      "poisson",
      "viande",
      "cuisiner",
      "goûter"
    ],
    culture: {
      title: "Vu par les Italiens : l'apéritif n'est pas le dîner",
      text: "<p>L'<b>aperitivo</b> commence vers 18 h 30 et court jusqu'à 20 h 30. On paie la boisson (7 à 12 euros selon la ville) et ce qu'il y a au comptoir vient avec. À Milan, ça s'est transformé en buffet appelé <i>apericena</i>, à mi-chemin du dîner.</p><p>La règle que personne n'énonce : <b>sers-toi raisonnablement</b>. Une assiette montée en tour trahit un étranger plus vite qu'un accent.</p><p>Les classiques : <i>spritz</i> (Aperol ou Campari), <i>negroni</i>, un verre de vin. La bière passe aussi, même si les puristes froncent le nez.</p>"
    },
    exercises: [
      {
        q: "« ___ piacciono le olive. » Pourquoi piacciono et pas piace ?",
        opts: ["Parce qu'il s'agit de plusieurs personnes", "Parce que « le olive » est au pluriel", "Parce que c'est un passé"],
        why: "Le verbe s'accorde avec la chose qui plaît — et cette chose est au pluriel."
      },
      { q: "Complète : « Mi ___ il vino rosso. »", why: "Une seule chose au singulier → piace." },
      { q: "Complète : « Non mi ___ i film horror. »", why: "« I film » est pluriel → piacciono." },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non se place devant tout le groupe pronom + verbe."
      },
      {
        q: "Comment dit-on « Marco aime le poisson » ?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "Celui qui apprécie prend la préposition <b>a</b> devant son prénom."
      },
      { q: "« J'aime cuisiner. »", why: "Devant un infinitif, toujours le singulier piace." },
      { q: "Associe le pronom à la personne.", pairs: ["à moi", "à toi", "à elle", "à nous"] },
      {
        q: "Complète la conversation autour d'un apéritif.",
        tr: "— Tu aimes le spritz ? — Oui, beaucoup ! Mais je n'aime pas les olives."
      },
      { tr: "J'aime beaucoup les fromages italiens." },
      { tr: "J'aime l'apéritif, mais je n'aime pas les olives." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Grammaire de base",
    title: "La deuxième conjugaison et c'è / ci sono",
    objectives: [
      "conjuguer les verbes réguliers en -ere",
      "employer c'è et ci sono",
      "décrire ce qu'il y a dans un lieu"
    ],
    theory: [
      {
        h: "Presque comme -are, mais pas tout à fait",
        p: "Le groupe <strong>-ere</strong> ne diffère du premier que par trois terminaisons : <em>-e</em> au lieu de <em>-a</em>, <em>-ete</em> au lieu de <em>-ate</em>, <em>-ono</em> au lieu de <em>-ano</em>. La forme de <em>noi</em> (<em>-iamo</em>) est commune aux trois conjugaisons : la terminaison la plus facile de la langue."
      },
      {
        h: "C'est là que se cachent la plupart des irréguliers",
        p: "Beaucoup de verbes en -ere très courants ont des formes bizarres : <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Leur irrégularité se voit surtout au passé et au participe, qu'on abordera en A2."
      },
      {
        h: "C'è et ci sono",
        p: "<strong>C'è</strong> (« il y a », une chose) et <strong>ci sono</strong> (« il y a », plusieurs) disent qu'une chose existe quelque part. Le choix dépend du nombre, pas de la personne : <em>c'è un problema</em>, <em>ci sono due problemi</em>."
      },
      {
        contrast: "Et voilà la différence avec le français : « il y a » est invariable, il vaut pour un comme pour mille. L'italien oblige à choisir selon le nombre, et « c'è due problemi » s'entend tout de suite. Compte avant de parler."
      },
      {
        trap: "Ne confonds pas <b>c'è</b> (il y a) et <b>è</b> (il est). <em>Il ristorante è chiuso</em> : le restaurant est fermé. <em>C'è un ristorante qui vicino</em> : il y a un restaurant tout près."
      }
    ],
    grammar: {
      title: "Leggere (lire) — le schéma -ERE",
      table: {
        head: ["personne", "terminaison", "leggere", "prendere"],
        rows: [
          ["io", "-o", "leggo", "prendo"],
          ["tu", "-i", "leggi", "prendi"],
          ["lui / lei / Lei", "-e", "legge", "prende"],
          ["noi", "-iamo", "leggiamo", "prendiamo"],
          ["voi", "-ete", "leggete", "prendete"],
          ["loro", "-ono", "leggono", "prendono"]
        ]
      },
      examples: [
        { tr: "Je prends un café.", note: "« prendere » est le verbe normal pour commander" },
        { tr: "Tu lis la carte ?" },
        { tr: "Je ne vois pas le serveur." },
        { tr: "Il y a une table libre ?" },
        { tr: "Il y a deux places au comptoir." },
        { tr: "On écrit le nom pour la réservation." }
      ]
    },
    vocab: [
      "prendre, commander",
      "lire",
      "écrire",
      "voir",
      "demander",
      "répondre",
      "mettre",
      "fermer",
      "il y a",
      "place",
      "libre / occupé",
      "tout près"
    ],
    exercises: [
      { why: "Note -e, -ete, -ono : c'est toute la différence avec le groupe -are." },
      {
        q: "Quelle terminaison est commune aux trois conjugaisons ?",
        opts: ["-o à la forme io", "-iamo à la forme noi", "-ono à la forme loro"],
        why: "La forme de noi est toujours -iamo, quel que soit le groupe."
      },
      { q: "Complète : « ___ un tavolo libero? » (Il y a une table libre ?)", why: "Une table → c'è." },
      {
        q: "Complète : « ___ tre persone in fila. » (Il y a trois personnes dans la file.)",
        why: "Pluriel → ci sono."
      },
      {
        q: "« Il bar è chiuso » contre « C'è un bar qui vicino » : quelle différence ?",
        opts: [
          "Aucune, ce sont des synonymes",
          "La première décrit le bar, la seconde dit qu'il en existe un tout près",
          "La seconde est au passé"
        ],
        why: "è décrit, c'è affirme qu'une chose est présente quelque part."
      },
      { q: "« Je prends une bière, et toi ? »", why: "Prendere est le verbe par défaut pour commander en Italie." },
      {
        q: "Quels verbes appartiennent au groupe -ere ?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "Je ne vois pas le serveur." },
      { tr: "Il y a une table pour deux ?" },
      { tr: "On prend deux spritz." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Grammaire de base",
    title: "La troisième conjugaison et le schéma -isc-",
    objectives: [
      "conjuguer les verbes comme dormire et ceux comme capire",
      "reconnaître les verbes en -ire qui demandent l'infixe -isc-",
      "employer preferire pour exprimer une préférence"
    ],
    theory: [
      {
        h: "Une terminaison, deux comportements",
        p: "Les verbes en <strong>-ire</strong> se partagent en deux sous-groupes. Le premier (<em>dormire, partire, sentire, aprire, offrire</em>) se conjugue sans surprise. Le second (<em>capire, finire, preferire, pulire, spedire</em>) insère <b>-isc-</b> à quatre formes : <em>io, tu, lui/lei, loro</em>. Les formes de <em>noi</em> et <em>voi</em> s'en passent."
      },
      {
        h: "Comment savoir de quel groupe il s'agit",
        p: "Il n'y a pas de règle : on mémorise. Ça aide de savoir que le groupe du <em>-isc-</em> est le plus gros et récupère presque tous les verbes récents (<em>gestire, inserire, garantire</em>). Les dictionnaires le signalent par <i>(-isc-)</i> à côté de l'entrée."
      },
      {
        contrast: "Le français a exactement ça avec « finir → nous finissons », mais l'infixe n'est pas aux mêmes personnes : chez toi il apparaît au pluriel, en italien il apparaît au singulier et disparaît à <em>noi</em> et <em>voi</em>. La ressemblance est un piège : la répartition est inversée."
      },
      {
        tip: "Le schéma -isc- a la forme d'une parenthèse : quatre formes avec l'infixe à l'extérieur, deux sans lui au milieu. Apprends le rythme : <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      }
    ],
    grammar: {
      title: "Dormire (sans -isc-) contre capire (avec -isc-)",
      table: {
        head: ["personne", "dormire", "capire", "en français"],
        rows: [
          ["io", "dormo", "capisco", "je dors / je comprends"],
          ["tu", "dormi", "capisci", "tu dors / tu comprends"],
          ["lui / lei", "dorme", "capisce", "il dort / il comprend"],
          ["noi", "dormiamo", "capiamo", "nous dormons / nous comprenons"],
          ["voi", "dormite", "capite", "vous dormez / vous comprenez"],
          ["loro", "dormono", "capiscono", "ils dorment / ils comprennent"]
        ]
      },
      examples: [
        { tr: "Je ne comprends pas, vous pouvez répéter ?" },
        { tr: "Je préférerais une table dehors." },
        { tr: "Tu finis le travail à quelle heure ?" },
        { tr: "Le magasin ouvre à neuf heures.", note: "aprire — sans -isc-" },
        { tr: "On part demain matin." },
        { tr: "Ils comprennent tout." }
      ]
    },
    vocab: [
      "comprendre",
      "finir",
      "préférer",
      "nettoyer",
      "envoyer",
      "dormir",
      "partir",
      "ouvrir",
      "offrir (une tournée)",
      "entendre, sentir",
      "suivre",
      "vous pouvez répéter ?"
    ],
    exercises: [
      { why: "La parenthèse : -isc- à io, tu, lui/lei et loro ; absent à noi et voi." },
      { why: "Dormire passe tout droit, sans infixe." },
      {
        q: "Quel verbe demande l'infixe -isc- ?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Complète : « Noi non ___ bene. » (Nous ne comprenons pas bien.)",
        hint: "la forme de noi n'a pas d'infixe",
        why: "Capiamo — à noi et voi le -isc- disparaît."
      },
      { q: "Complète : « Loro ___ alle sette. » (Ils finissent à sept heures.)", why: "finire avec -isc- à la forme loro." },
      { q: "« Je préférerais une table dehors. »" },
      { q: "Quelles formes contiennent -isc- ?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "Je ne comprends pas, vous pouvez répéter ?" },
      { tr: "Je préfère partir tôt demain matin." },
      { tr: "Pardon, je ne comprends pas. Vous pouvez répéter ?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Cuisine",
    title: "L'article partitif et les quantités",
    objectives: [
      "exprimer une quantité indéterminée avec del, della, dei…",
      "employer un po' di et un chilo di",
      "faire ses courses dans une boutique"
    ],
    theory: [
      {
        h: "Du quelque chose",
        p: "L'italien exprime la quantité indéterminée avec l'<strong>article partitif</strong> : la préposition <em>di</em> fondue avec l'article défini. <em>Vorrei del pane</em> — « je voudrais du pain ». Au pluriel il couvre ce que le français dit avec « des » : <em>dei pomodori</em>."
      },
      {
        h: "Les formes",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "Les solutions de rechange",
        p: "À la place du partitif tu peux employer <strong>un po' di</strong> (« un peu de ») ou une mesure : <em>un chilo di, un etto di, mezzo litro di</em>. À la forme négative, le partitif disparaît en général : <em>non ho pane</em>, comme « je n'ai pas de pain »."
      },
      {
        contrast: "C'est le chapitre le plus confortable de tout le niveau : le français a exactement le même article partitif, formé de la même manière avec de + article. « Du pain », « de l'eau », « des pommes » se calquent sur <em>del pane</em>, <em>dell'acqua</em>, <em>delle mele</em>. Même sa disparition sous la négation fonctionne pareil."
      },
      {
        tip: "<b>Un etto</b>, ce sont 100 grammes, et c'est l'unité de travail à la charcuterie : <em>due etti di prosciutto</em> = 200 g de jambon."
      }
    ],
    grammar: {
      title: "L'article partitif et les expressions de quantité",
      table: {
        head: ["contexte", "forme", "exemple"],
        rows: [
          ["m. + consonne", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ voyelle", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonne", "della", "della carne"],
          ["m. pluriel", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. pluriel", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "Je voudrais du pain." },
        { tr: "J'achète des pommes et du raisin." },
        { tr: "Un peu de sel, pas trop." },
        { tr: "Deux cents grammes de jambon cru." },
        { tr: "Un demi-litre de lait." },
        { tr: "Je n'ai pas de sucre à la maison.", note: "pas de partitif sous la négation" }
      ]
    },
    vocab: [
      "pain",
      "lait",
      "eau",
      "sucre",
      "sel",
      "huile, huile d'olive",
      "tomates",
      "pommes",
      "cent grammes",
      "un kilo",
      "un peu",
      "un demi-litre",
      "ça ira, merci",
      "vous en voulez combien ?"
    ],
    exercises: [
      {
        q: "Comment demander du pain ?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "Le partitif <b>del</b> exprime une quantité indéterminée."
      },
      {
        q: "Complète : « Compro ___ acqua. » (J'achète de l'eau.)",
        why: "di + l' = dell', parce que acqua commence par une voyelle."
      },
      {
        q: "Complète : « Vorrei ___ mele. » (Je voudrais des pommes.)",
        why: "di + le = delle, féminin pluriel."
      },
      {
        q: "Choisis l'article partitif.",
        items: ["pain", "sucre", "viande", "huile", "tomates", "épinards"]
      },
      {
        q: "Ça fait combien, « due etti » ?",
        opts: ["20 grammes", "200 grammes", "2 kilos"],
        why: "Un etto vaut 100 g, donc due etti = 200 g."
      },
      { q: "« Un demi-litre de lait, s'il vous plaît. »" },
      {
        q: "Tu es au comptoir d'une épicerie.",
        setting: "Une alimentari de quartier, au rayon charcuterie.",
        lines: [
          { tr: "Bonjour ! Je vous sers quoi ?" },
          { tr: "Demande 200 g de jambon.", answerTr: "Deux cents grammes de jambon, s'il vous plaît." },
          { tr: "Voilà. Avec ceci ?" },
          { tr: "Demande aussi du pain.", answerTr: "Du pain aussi, merci." }
        ]
      },
      { q: "Complète la liste de courses.", tr: "J'achète du pain, de l'eau et des tomates." },
      { tr: "Un kilo de tomates et du basilic, s'il vous plaît." },
      { tr: "Deux cents grammes de fromage, s'il vous plaît. Ce sera tout." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Test",
    title: "Test de l'unité 3",
    objectives: ["vérifier piacere, les conjugaisons -ere et -ire, le partitif"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Mi ___ gli spaghetti. » (J'aime les spaghettis.)" },
      { q: "« Non mi ___ il pesce crudo. »" },
      {
        q: "« Marco aime le vin » se dit :",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "« ___ due posti liberi. » (Il y a deux places libres.)" },
      { q: "L'article partitif :", items: [, , , ] },
      { q: "« Je préfère le vin blanc. »" },
      { tr: "Il y a des olives et du fromage." },
      { tr: "J'aime beaucoup l'apéritif italien." }
    ]
  }
});
