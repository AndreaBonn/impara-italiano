/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/a1-03.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.

   Quelques réponses modèles en italien disent « polacca » ou citent
   Varsovie et Cracovie. Ce sont des audios enregistrés et des clés de
   correction figées : les consignes françaises les gardent plutôt que
   d'appeler une réponse que le correcteur refuserait.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u08": { title: "Les gens autour de nous", grammarNote: "possessifs · décrire quelqu'un · comparatifs" },
  "lesson:a1-u08-l1": {
    theme: "Personnes et relations",
    title: "Les possessifs",
    objectives: [
      "employer mio, tuo, suo avec la bonne terminaison",
      "savoir quand l'article disparaît devant un membre de la famille",
      "dire qui est qui dans ta vie"
    ],
    theory: [
      {
        h: "L'accord se fait avec la chose, pas avec le propriétaire",
        p: "<em>Il <b>suo</b> libro</em> veut dire « son livre », à lui ou à elle : la terminaison décrit le <b>livre</b>, pas celui qui le possède. Le français fait pareil avec « sa voiture », qui ne dit rien du propriétaire. Quand le contexte ne suffit pas, l'italien ajoute <em>di lui</em> ou <em>di lei</em>."
      },
      {
        h: "L'article est la norme",
        p: "On dit presque toujours <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. Le français dit « mon livre » sans article, et c'est cet article italien qui saute en premier dès qu'on parle vite."
      },
      {
        h: "L'exception : un seul membre de la famille",
        p: "Sans article : <em>mia madre, mio padre, tuo fratello, sua sorella</em>. Mais l'article <b>revient</b> quand il y a : un pluriel (<em>i miei genitori</em>), un diminutif (<em>la mia sorellina</em>), un adjectif ajouté (<em>la mia sorella maggiore</em>) ou la forme <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> ne varie jamais et prend <b>toujours</b> l'article : <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. C'est le seul possessif qui se comporte ainsi ; le français « leur » ne prend pas d'article et n'aide pas ici."
      }
    ],
    grammar: {
      title: "Les formes du possessif",
      table: {
        head: ["personne", "m. sing.", "f. sing.", "m. plur.", "f. plur."],
        rows: [
          ["io", "il mio", "la mia", "i miei", "le mie"],
          ["tu", "il tuo", "la tua", "i tuoi", "le tue"],
          ["lui / lei", "il suo", "la sua", "i suoi", "le sue"],
          ["noi", "il nostro", "la nostra", "i nostri", "le nostre"],
          ["voi", "il vostro", "la vostra", "i vostri", "le vostre"],
          ["loro", "il loro", "la loro", "i loro", "le loro"]
        ]
      },
      examples: [
        { tr: "Ma sœur habite à Bari.", note: "sans article" },
        { tr: "Mes sœurs habitent à Bari.", note: "pluriel → l'article revient" },
        { tr: "Mon chef est très exigeant." },
        { tr: "Leur maison est près du parc.", note: "loro prend toujours l'article" },
        { tr: "Ses amis sont sympathiques." },
        { tr: "C'est son livre à elle, pas à lui.", note: "quand il faut préciser" }
      ]
    },
    vocab: [
      "mère / père",
      "parents",
      "frère / sœur",
      "fils / fille",
      "mari / femme",
      "compagnon, compagne",
      "collègue",
      "chef",
      "voisin",
      "colocataire",
      "meilleur ami",
      "petit-fils ; neveu"
    ],
    exercises: [
      {
        q: "Quelle est la forme correcte de « ma mère » ?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "Un seul membre de la famille, sans adjectif, ne prend pas d'article."
      },
      {
        q: "Et « mes parents » ?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "Au pluriel l'article revient."
      },
      {
        q: "Complète : « ___ loro casa è grande. »",
        why: "Loro exige toujours l'article, y compris avec la famille."
      },
      {
        q: "Complète : « ___ mia sorella maggiore. » (ma sœur aînée)",
        why: "Un adjectif ajouté fait revenir l'article."
      },
      {
        q: "Choisis le possessif correct pour « io ».",
        items: ["livre", "voiture", "parents", "sœurs"]
      },
      {
        q: "« Il suo libro » : à qui est le livre ?",
        opts: ["À lui seulement", "À elle seulement", "À lui ou à elle, le contexte décide"]
      },
      { q: "« Mon chef est très exigeant. »" },
      {
        q: "Complète (mets l'article, ou écris un tiret « - » s'il n'y en a pas).",
        tr: "Mon frère travaille avec mes parents."
      },
      { tr: "Ma sœur et ses enfants habitent à Palerme." },
      { tr: "Mon meilleur ami s'appelle Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "Personnes et relations",
    title: "Décrire le physique de quelqu'un",
    objectives: [
      "décrire l'apparence d'une personne",
      "employer essere et avere là où il faut",
      "demander à quoi ressemble quelqu'un"
    ],
    theory: [
      {
        h: "Essere pour l'ensemble, avere pour les détails",
        p: "La taille, la corpulence et l'impression générale passent par <strong>essere</strong> : <em>è alto, è magra</em>. Les traits précis passent par <strong>avere</strong> : <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. Le français fait exactement le même partage avec être et avoir : rien à réapprendre."
      },
      {
        h: "L'article devant les parties du corps",
        p: "On dit <em>ha <b>i</b> capelli lunghi</em>. Comme en français (« il a <b>les</b> cheveux longs »), l'article est obligatoire, et c'est un point qui coince chez d'autres apprenants mais pas chez toi."
      },
      {
        h: "Capelli est toujours au pluriel",
        p: "<em>I capelli</em>, ce sont les cheveux dans leur ensemble, exactement comme le pluriel français ; le singulier <em>il capello</em> désigne un cheveu isolé. Même chose pour <em>i baffi</em> (la moustache), qui est au pluriel en italien alors que le français le met au singulier."
      },
      {
        tip: "Pour l'apparence : <em>Com'è?</em> Pour le caractère : <em>Com'è di carattere?</em> Ne confonds ni l'un ni l'autre avec <em>Come sta?</em>, qui demande comment quelqu'un se porte."
      }
    ],
    grammar: {
      title: "Essere et avere dans les descriptions",
      table: {
        head: ["trait", "verbe", "exemple"],
        rows: [
          ["taille", "essere", "È alto / bassa / di media statura."],
          ["corpulence", "essere", "È magro / robusto / sportiva."],
          ["cheveux", "avere", "Ha i capelli castani e ricci."],
          ["yeux", "avere", "Ha gli occhi azzurri."],
          ["âge", "avere", "Ha circa quarant'anni."],
          ["lunettes, barbe", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        { tr: "Comment est ton frère ? — Grand et mince." },
        { tr: "Elle a les cheveux longs et raides." },
        { tr: "Il a les yeux verts et porte des lunettes." },
        { tr: "C'est une femme d'âge mûr." },
        { tr: "Elle ressemble à sa mère." },
        { tr: "Il a un joli sourire." }
      ]
    },
    vocab: [
      "grand / petit",
      "mince / corpulent",
      "cheveux (toujours au pluriel)",
      "blond / châtain / noir",
      "raides / bouclés",
      "yeux",
      "bleus / verts / marron",
      "lunettes",
      "barbe",
      "sourire",
      "ressembler à",
      "de taille moyenne"
    ],
    exercises: [
      {
        q: "Quelle phrase est correcte ?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Les traits physiques passent par avere, et avec l'article."
      },
      {
        q: "Complète : « Ha ___ occhi azzurri. »",
        why: "Occhi commence par une voyelle et est au pluriel → gli."
      },
      { q: "Complète : « Mia sorella ___ alta e magra. »" },
      {
        q: "Que veut dire « Com'è di carattere ? »",
        opts: ["Comment se porte-t-il ?", "Comment est-il de caractère ?", "À quoi ressemble-t-il ?"]
      },
      { q: "Associe.", pairs: ["cheveux bouclés", "de taille moyenne", "porte des lunettes", "ressembler à"] },
      { q: "Complète la description.", tr: "Mon père est grand et a les cheveux gris. Il porte des lunettes." },
      { q: "« Elle a les cheveux longs et bouclés. »" },
      { tr: "Comment est ta sœur ? Elle est petite et sportive." },
      { tr: "Elle a les cheveux châtains, les yeux verts et un joli sourire." },
      { tr: "Mon frère est grand et a les cheveux noirs." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "Personnes et relations",
    title: "Caractère et opinions sur les gens",
    objectives: [
      "décrire le caractère de quelqu'un",
      "donner un avis sur une personne",
      "se méfier des mots qui se ressemblent"
    ],
    theory: [
      {
        h: "Simpatico veut dire la même chose qu'en français",
        p: "<strong>Simpatico</strong> décrit quelqu'un avec qui on est bien : il plaisante, il t'intègre à la conversation. C'est un des rares mots qui se traduit tel quel. « Aimable » au sens poli, c'est <em>gentile</em>. Le contraire, <em>antipatico</em>, est plus dur que le français « antipathique » : il frôle l'accusation."
      },
      {
        h: "Donner son avis avec secondo me",
        p: "<em>Secondo me</em> (« à mon avis ») est la façon la plus courante d'introduire un jugement. Attention à la forme : pas <em>secondo io</em> mais <em>secondo me</em>, parce que cette préposition appelle le pronom tonique, comme le français « selon moi » et non « selon je »."
      },
      {
        h: "Attention à l'éloge et à la critique",
        p: "L'italien est généreux en compliments (<em>bravissimo, gentilissima</em>) mais adoucit d'ordinaire la critique d'une personne : au lieu de <em>è antipatico</em>, on entendra plutôt <em>è un po' particolare</em> ou <em>non è il mio tipo</em>."
      },
      {
        contrast: "Les mots qui se ressemblent sont le vrai piège entre français et italien, parce que la ressemblance dispense de vérifier. <em>Bravo</em> ne veut pas dire « courageux » (c'est <em>coraggioso</em>) : il veut dire doué, « bravo in matematica ». <em>Salire</em>, c'est monter, pas salir (salir se dit <em>sporcare</em>). <em>Burro</em>, c'est le beurre. <em>Attendere</em> veut bien dire attendre, mais <em>pretendere</em> veut dire exiger, pas prétendre. Ces quatre-là créent plus de malentendus que n'importe quel point de grammaire de ce niveau."
      }
    ],
    grammar: {
      title: "Les adjectifs de caractère",
      table: {
        head: ["italien", "français", "note"],
        rows: [
          ["simpatico / antipatico", "sympathique / antipathique", "antipatico est plus fort qu'en français"],
          ["gentile", "aimable, poli", "pas « gentil » au sens de doux"],
          ["bravo", "doué pour quelque chose", "« bravo in matematica »"],
          ["socievole / timido", "sociable / timide", ""],
          ["generoso / egoista", "généreux / égoïste", "egoista ne change pas au masculin"],
          ["tranquillo / nervoso", "calme / nerveux", ""]
        ]
      },
      examples: [
        { tr: "Ma collègue est très sympathique." },
        { tr: "À mon avis c'est quelqu'un de généreux." },
        { tr: "Elle est très douée en maths." },
        { tr: "Il est un peu timide au début." },
        { tr: "Ce n'est pas mon genre, mais il est poli." },
        { tr: "Je l'aime bien.", note: "littéralement : « il m'est sympathique »" }
      ]
    },
    vocab: [
      "sympathique / antipathique",
      "aimable, poli",
      "doué pour quelque chose",
      "sociable",
      "timide",
      "généreux",
      "égoïste",
      "calme",
      "amusant (d'une chose ou d'une personne)",
      "ennuyeux",
      "à mon avis",
      "je l'aime bien"
    ],
    exercises: [
      {
        q: "« Simpatico » est le plus proche de :",
        opts: ["poli, bien élevé", "drôle, agréable à fréquenter", "compréhensif, empathique"],
        why: "« Poli » se dit gentile et « compréhensif » comprensivo. Simpatico, c'est être bien avec quelqu'un."
      },
      {
        q: "Quelle forme est correcte ?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "Après la préposition secondo vient le pronom tonique : me, te, lui, lei."
      },
      { q: "Complète : « Mia collega è molto ___. » (aimable)" },
      {
        q: "« È bravo in matematica » veut dire :",
        opts: ["Bravo pour les maths !", "Il est doué en maths", "Il aime les maths"]
      },
      {
        q: "Associe les adjectifs à leur contraire.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "« À mon avis c'est quelqu'un de calme. »" },
      {
        q: "Complète.",
        tr: "À mon avis mon colocataire est quelqu'un de très sociable : il parle avec tout le monde."
      },
      { tr: "Il est un peu timide au début." },
      { tr: "À mon avis c'est quelqu'un de généreux et d'amusant." },
      { tr: "Ma collègue est très sympathique, je l'aime bien." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Grammaire de base",
    title: "Les comparatifs",
    objectives: [
      "comparer deux personnes ou deux choses",
      "choisir entre di et che",
      "employer les irréguliers migliore et peggiore"
    ],
    theory: [
      {
        h: "Trois constructions de base",
        list: [
          "<b>più… di</b> — plus… que : <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — moins… que : <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — aussi… que : <em>È alto come te.</em>"
        ]
      },
      {
        h: "Di ou che : la règle pratique",
        p: "<strong>Di</strong> quand tu compares <b>deux choses différentes sous un même rapport</b> : <em>Roma è più grande di Firenze</em>. <strong>Che</strong> quand tu compares <b>deux qualités d'une même chose</b>, deux verbes, ou quand une préposition suit : <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>."
      },
      {
        contrast: "Le français dit « que » dans tous ces cas et réserve « de » aux nombres (« plus de vingt »). Le partage italien est autre, et il faut l'apprendre à neuf : ton « que » ne t'indique jamais laquelle des deux formes italiennes il faut."
      },
      {
        h: "Les formes irrégulières",
        p: "<em>buono → migliore</em>, <em>cattivo → peggiore</em>, <em>grande → maggiore</em>, <em>piccolo → minore</em>. Tu les reconnaîtras : ce sont tes « meilleur » et « pire ». Les formes régulières (<em>più buono, più cattivo</em>) existent aussi et servent surtout à parler de goût : <em>questa pizza è più buona</em>."
      },
      {
        trap: "Après <b>di</b> vient le pronom tonique : <em>più alto di <b>me</b></em>, jamais « di io ». Ici le français t'aide, puisqu'il dit « plus grand que <b>moi</b> » et non « que je ». Même chose après <b>come</b> : <em>come te</em>."
      }
    ],
    grammar: {
      title: "Les comparatifs",
      table: {
        head: ["construction", "exemple", "en français"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna est plus grande que Marco."],
          ["meno… di", "Questo è meno caro di quello.", "Celui-ci est moins cher que celui-là."],
          ["come", "Sei alto come me.", "Tu es aussi grand que moi."],
          ["più… che (deux qualités)", "È più simpatico che bello.", "Il est plus sympathique que beau."],
          ["più… che (deux verbes)", "È più facile parlare che scrivere.", "C'est plus facile de parler que d'écrire."],
          ["il più… di", "È il più bravo della classe.", "C'est le meilleur de la classe."]
        ]
      },
      examples: [
        { tr: "Milan est plus chère que Bologne." },
        { tr: "Mon frère est moins patient que moi." },
        { tr: "Ce vin est meilleur que celui-là." },
        { tr: "C'est le pire jour de la semaine." },
        { tr: "Je vais plus souvent à Rome qu'à Milan." },
        { tr: "Tu es aussi aimable que ta mère." }
      ]
    },
    vocab: [
      "plus… que",
      "moins… que",
      "aussi… que",
      "meilleur / pire",
      "le plus… de",
      "patient",
      "rapide / lent",
      "facile / difficile",
      "jeune / plus âgé",
      "pareil",
      "différent de",
      "surtout"
    ],
    exercises: [
      {
        q: "« Anna è più alta ___ Marco. »",
        opts: ["che", "di", "come"],
        why: "Deux personnes différentes comparées sous un même rapport → di."
      },
      {
        q: "« È più simpatico ___ bello. »",
        opts: ["di", "che", "come"],
        why: "Deux qualités de la même personne → che."
      },
      {
        q: "Complète : « Sei più alto ___ me. »",
        why: "Après di vient le pronom tonique : di me, di te, di lui."
      },
      { q: "Donne le comparatif irrégulier de « buono » : ___" },
      {
        q: "« È il più bravo della classe » veut dire :",
        opts: ["Il est meilleur que la classe", "C'est le meilleur de la classe", "Il est aussi bon que la classe"]
      },
      { q: "« Milan est plus chère que Bologne. »" },
      {
        q: "Complète avec di ou che.",
        tr: "Rome est plus grande que Florence, mais parler italien est plus facile que l'écrire."
      },
      { tr: "Ce vin est meilleur que celui-là." },
      { tr: "Mon frère est moins patient que moi." },
      { tr: "Cette ville est plus calme que Milan." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Test",
    title: "Test de l'unité 8",
    objectives: ["vérifier les possessifs, la description des personnes et les comparatifs"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« ma mère », c'est :", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "« ___ miei genitori abitano a Lodz. »" },
      { q: "« ___ loro casa è nuova. »" },
      { q: "La phrase correcte :", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "« Ha ___ occhi verdi. »" },
      { q: "« Simpatico » veut dire :", opts: ["poli", "drôle, agréable à fréquenter", "compréhensif"] },
      { q: "« È più alta ___ me. »", opts: ["che", "di", "come"] },
      { q: "Le comparatif de « cattivo » : ___" },
      { tr: "Ma sœur est plus jeune que moi et a les cheveux bouclés." },
      { tr: "À mon avis c'est quelqu'un de très aimable." }
    ]
  },
  "unit:a1-u09": { title: "Le temps libre", grammarNote: "fare/giocare/suonare · la météo · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Temps libre",
    title: "Loisirs et projets",
    objectives: [
      "dire ce que tu fais de ton temps libre",
      "distinguer fare, giocare et suonare",
      "proposer quelque chose et répondre à une proposition"
    ],
    theory: [
      {
        h: "Trois verbes, trois domaines",
        list: [
          "<b>fare</b> + sport individuel ou activité : <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + jeu ou sport collectif : <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + instrument : <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        contrast: "Le français emploie un seul verbe pour les deux derniers : jouer au foot, jouer de la guitare, et c'est la préposition qui fait la différence. L'italien change carrément de verbe. « Gioco la chitarra » est la faute la plus prévisible du francophone dans cette leçon."
      },
      {
        h: "Proposer quelque chose",
        p: "Les formules courantes : <em>Ti va di…?</em> (« ça te dit de… ? »), <em>Che ne dici di…?</em> (« qu'est-ce que tu dirais de… ? »), <em>Andiamo a…?</em>. Les réponses : <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> est impersonnel comme <em>mi piace</em> : <em>ti va un caffè?</em> (« ça te dit, un café ? »). Là encore c'est la chose qui est sujet, exactement comme dans « ça me dit »."
      }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["verbe", "avec quoi", "exemple"],
        rows: [
          ["fare", "sport individuel, activité", "Faccio palestra tre volte a settimana."],
          ["giocare a", "jeu, sport collectif", "Gioco a calcio il sabato."],
          ["suonare", "instrument", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "un lieu ou une activité", "Vado a ballare / in piscina."],
          ["ti va di + infinitif", "une proposition", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        { tr: "Le week-end je fais une promenade dans le centre." },
        { tr: "Je joue au tennis avec ma sœur." },
        { tr: "Je joue de la guitare, mais mal." },
        { tr: "Ça te dit d'aller au cinéma ce soir ?" },
        { tr: "Volontiers ! À quelle heure ?" },
        { tr: "Désolé, ce soir je ne peux pas." }
      ]
    },
    vocab: [
      "temps libre",
      "faire du sport",
      "salle de sport",
      "piscine",
      "jouer au foot",
      "jouer de la guitare",
      "danser",
      "lire un livre",
      "regarder une série",
      "ça te dit… ?",
      "volontiers",
      "une autre fois peut-être"
    ],
    exercises: [
      {
        q: "« ___ la chitarra. » (je joue de la guitare)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "Un instrument appelle suonare, jamais giocare."
      },
      { q: "« ___ a calcio. » (je joue au foot)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Complète : « ___ yoga due volte a settimana. » (je fais du yoga)" },
      { q: "Complète : « ___ va di andare al cinema? » (ça te dit)" },
      {
        q: "Associe le verbe à ce qui le suit.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "« Ça te dit d'aller au cinéma ce soir ? »" },
      { q: "Complète.", tr: "Le samedi je joue au tennis, le dimanche je joue de la guitare et je fais une promenade." },
      {
        q: "Un ami te propose de sortir.",
        setting: "Jeudi soir, un message vocal d'un ami.",
        lines: [
          { tr: "Salut ! Ça te dit d'aller à un concert samedi ?" },
          { tr: "Accepte avec enthousiasme et demande l'heure.", answerTr: "Volontiers ! À quelle heure ?" },
          { tr: "À neuf heures, mais on se retrouve à huit heures et demie sur la place." },
          { tr: "Confirme et prends congé.", answerTr: "Parfait, on se voit là-bas !" }
        ]
      },
      { tr: "Pendant mon temps libre je vais à la salle de sport et je regarde des séries." },
      { tr: "Ça te dit une promenade dans le centre ?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Temps libre",
    title: "La météo et les saisons",
    objectives: ["décrire le temps qu'il fait", "employer fare de façon impersonnelle", "relier la météo à tes projets"],
    theory: [
      {
        h: "Le temps se fait, il n'est pas",
        p: "L'italien dit <em>fa caldo</em>, <em>fa freddo</em>, <em>fa bel tempo</em>. C'est l'emploi <strong>impersonnel</strong> de <em>fare</em> : pas de sujet, toujours la troisième personne du singulier. Et ça coïncide avec ton « il fait chaud » : ce point-là t'est offert."
      },
      {
        h: "Trois constructions différentes",
        list: [
          "<b>fare</b> + nom : <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + nom : <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "un verbe propre : <em>piove</em> (il pleut), <em>nevica</em> (il neige)"
        ]
      },
      {
        contrast: "Le parallèle avec le français est presque parfait : <em>fa caldo</em> = « il fait chaud », <em>ho caldo</em> = « j'ai chaud », <em>c'è il sole</em> = « il y a du soleil ». Seul l'article change, que l'italien met (<em>c'è <b>il</b> sole</em>) et que le français remplace par un partitif. Profite de la coïncidence sans l'étendre : <em>sono caldo</em> ne veut rien dire de bon."
      },
      {
        h: "Les saisons",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Les mois ne prennent pas d'article après <em>a</em> ou <em>in</em> : <em>a gennaio</em>, <em>in luglio</em>, les deux formes se disent."
      }
    ],
    grammar: {
      title: "Le temps qu'il fait",
      table: {
        head: ["construction", "exemple", "en français"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "Il fait chaud. / Il fait froid."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "Il fait beau / mauvais."],
          ["c'è", "C'è il sole. / C'è vento.", "Il y a du soleil. / Il y a du vent."],
          ["un verbe", "Piove. / Nevica.", "Il pleut. / Il neige."],
          ["degrés", "Ci sono venti gradi.", "Il fait vingt degrés."],
          ["question", "Che tempo fa?", "Quel temps fait-il ?"]
        ]
      },
      examples: [
        { tr: "Il fait chaud aujourd'hui, on va à la plage." },
        { tr: "En hiver il y a souvent du brouillard à Milan." },
        { tr: "Demain il pleut, on reste à la maison." },
        { tr: "Quel temps fait-il à Rome ? — Splendide !" },
        { tr: "J'ai froid, ferme la fenêtre.", note: "de soi-même : avere" },
        { tr: "Le printemps est la plus belle saison." }
      ]
    },
    vocab: [
      "quel temps fait-il ?",
      "il fait chaud / froid",
      "il y a du soleil",
      "il pleut / il neige",
      "il y a du vent / du brouillard",
      "pluie / neige",
      "nuages",
      "degré",
      "printemps / été",
      "automne / hiver",
      "parapluie",
      "les prévisions"
    ],
    exercises: [
      {
        q: "Comment dit-on « il fait chaud » (de la météo) ?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "« Ho caldo » veut dire que toi tu as chaud ; la météo, c'est fa caldo."
      },
      { q: "Complète : « ___ il sole. » (il y a du soleil)" },
      { q: "Complète : « Domani ___. » (demain il pleut)" },
      { q: "« Ho freddo » veut dire :", opts: ["Il fait froid dehors", "J'ai froid", "Ça se rafraîchit"] },
      { q: "Associe.", pairs: ["il neige", "il y a du brouillard", "mauvais temps", "parapluie"] },
      { q: "Complète les prévisions.", tr: "Demain il fera froid et venteux, et il pleuvra l'après-midi." },
      { q: "« Quel temps fait-il à Rome ? »" },
      { tr: "En hiver il y a souvent du brouillard à Milan." },
      { tr: "Il fait beau aujourd'hui, il fait vingt-cinq degrés." },
      { tr: "Quel temps fait-il aujourd'hui ? Froid et pluvieux." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Grammaire de base",
    title: "Stare + gerundio",
    objectives: [
      "décrire ce qui se passe en ce moment",
      "former le gerundio",
      "savoir quand NE PAS employer cette construction"
    ],
    theory: [
      {
        h: "Ce qui se passe maintenant",
        p: "<strong>Stare + gerundio</strong> souligne qu'une chose se déroule <b>en ce moment</b> : <em>Sto lavorando</em>. Le présent simple <em>lavoro</em> est correct aussi, mais il est général : « je travaille, j'ai un emploi »."
      },
      {
        contrast: "Le français n'a pas de forme progressive : « je travaille » sert pour les deux, et pour insister tu passes par <em>être en train de</em>. L'italien, lui, a une construction dédiée et l'emploie beaucoup plus souvent que ton « en train de », qui reste marqué. Le réflexe à prendre est de l'utiliser, pas de la traduire mot à mot."
      },
      {
        h: "Comment se forme le gerundio",
        list: [
          "<b>-are → -ando</b> : parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b> : prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b> : dormire → dorm<b>endo</b>",
          "irréguliers : <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        trap: "<b>Stare + gerundio ne parle pas du futur.</b> « Demain je vois Anna » se dit <em>domani vedo Anna</em>, jamais « sto vedendo Anna domani ». Le français ne te pousse pas à cette faute, contrairement à l'anglais, mais la construction ressemble assez à « je suis en train de » pour qu'on l'étire par erreur."
      },
      {
        h: "Les pronoms avec cette construction",
        p: "Le pronom peut aller devant <em>stare</em> ou se coller au gerundio : <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. La première place est plus courante à l'oral."
      }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["personne", "stare", "exemple"],
        rows: [
          ["io", "sto", "Sto mangiando."],
          ["tu", "stai", "Che stai facendo?"],
          ["lui / lei", "sta", "Sta dormendo."],
          ["noi", "stiamo", "Stiamo uscendo adesso."],
          ["voi", "state", "State scherzando?"],
          ["loro", "stanno", "Stanno arrivando."]
        ]
      },
      examples: [
        { tr: "Qu'est-ce que tu fais ? — Je suis en train d'étudier." },
        { tr: "Je ne peux pas parler, je conduis." },
        { tr: "Ils arrivent, attends cinq minutes." },
        { tr: "Je t'attends devant le bar." },
        { tr: "Je suis sur le point de sortir.", note: "stare per = être sur le point de" },
        { tr: "Demain je vais à Rome.", note: "le futur : présent tout simple" }
      ]
    },
    vocab: [
      "être en train de faire quelque chose",
      "être sur le point de faire quelque chose",
      "maintenant",
      "en ce moment",
      "attendre",
      "conduire",
      "plaisanter",
      "arriver",
      "sortir",
      "se dépêcher",
      "un instant",
      "je suis en retard"
    ],
    exercises: [
      { q: "« Sto mangiando » veut dire :", opts: ["D'habitude je mange", "Je suis en train de manger", "Je mangerai"] },
      { q: "Forme le gerundio de « fare » : ___" },
      { q: "Forme le gerundio de « dormire » : ___" },
      { q: "Complète : « Loro ___ arrivando. »" },
      {
        q: "Comment dit-on « demain je vois Anna » ?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio ne peut pas exprimer le futur."
      },
      { q: "« Je ne peux pas parler, je conduis. »" },
      { q: "Complète l'appel.", tr: "— Qu'est-ce que tu fais ? — Je sors de la maison, j'arrive dans une minute." },
      { tr: "Je t'attends devant le bar." },
      { tr: "Désolé, je suis sur le point d'entrer en réunion." },
      { tr: "Qu'est-ce que tu fais ? — J'étudie l'italien." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Temps libre",
    title: "Culture, cinéma et musique",
    objectives: [
      "acheter un billet et parler d'un film",
      "donner un avis sur un livre, un film, un concert",
      "employer les formules de base pour juger quelque chose"
    ],
    theory: [
      {
        h: "Le juger : mi è piaciuto",
        p: "De ce qui t'a plu on dit <em>mi è piaciuto</em> (masculin) ou <em>mi è piaciuta</em> (féminin). C'est déjà le passé de <em>piacere</em> : l'explication complète arrive en A2, mais la formule est trop fréquente pour attendre. Note que la construction est la tienne : « ça m'a plu », avec la chose en sujet."
      },
      {
        h: "Version originale",
        p: "Le cinéma italien est traditionnellement doublé, comme en France. Une séance sous-titrée est signalée <strong>V.O.</strong> (versione originale) ou <em>sottotitolato</em>. Les grandes villes en ont, mais il faut les chercher."
      },
      {
        h: "Les billets",
        p: "<em>Un biglietto intero</em> (plein tarif), <em>ridotto</em> (tarif réduit). La place numérotée est la norme : <em>Che posto preferisce?</em>"
      },
      {
        tip: "Le mot <em>spettacolo</em> vaut pour une séance de cinéma comme pour une représentation de théâtre. <em>Lo spettacolo delle 21</em>, c'est la séance de vingt et une heures."
      }
    ],
    grammar: {
      title: "Avis et culture",
      table: {
        head: ["fonction", "formule", "en français"],
        rows: [
          ["positif", "Mi è piaciuto molto.", "Ça m'a beaucoup plu."],
          ["négatif", "Non mi è piaciuto per niente.", "Ça ne m'a pas plu du tout."],
          ["recommander", "Te lo consiglio.", "Je te le recommande."],
          ["ennui", "Mi ha annoiato.", "Ça m'a ennuyé."],
          ["billet", "Due biglietti per lo spettacolo delle nove.", "Deux billets pour la séance de neuf heures."],
          ["demander un avis", "Com'era?", "C'était comment ?"]
        ]
      },
      examples: [
        { tr: "Hier soir je suis allé au cinéma." },
        { tr: "Le film était en version originale." },
        { tr: "La bande originale m'a beaucoup plu." },
        { tr: "Deux billets à tarif réduit, s'il vous plaît." },
        { tr: "Quel genre préfères-tu ?" },
        { tr: "Je te le recommande vraiment." }
      ]
    },
    vocab: [
      "film",
      "séance, représentation",
      "plein tarif / tarif réduit",
      "version originale",
      "sous-titres",
      "réalisateur",
      "acteur / actrice",
      "bande originale",
      "concert",
      "exposition",
      "recommander",
      "c'était comment ?"
    ],
    culture: {
      title: "Avec des yeux italiens : le cinéma et le doublage",
      text: "<p>L'Italie a l'une des traditions de doublage les plus fortes au monde, comparable à la française. Les <i>doppiatori</i> sont des noms connus, et certains ont été pendant des décennies la voix italienne d'une seule vedette hollywoodienne.</p><p>L'effet secondaire est le même qu'en France : les Italiens comprennent l'anglais parlé moins bien que les Scandinaves, élevés au sous-titre. Le streaming est en train de changer ça.</p><p>Si tu apprends l'italien, le doublage joue pour toi : un film que tu connais déjà, en italien, c'est de l'écoute prête à l'emploi, avec une intrigue où tu ne peux pas te perdre.</p>"
    },
    exercises: [
      {
        q: "Que veut dire « V.O. » sur un programme ?",
        opts: ["Version abrégée", "Version originale, en général sous-titrée", "Version pour enfants"]
      },
      { q: "Complète : « Mi è ___ molto il film. » (ça m'a beaucoup plu)" },
      { q: "Complète : « Due biglietti ___, per favore. » (à tarif réduit)" },
      { q: "Associe.", pairs: ["réalisateur", "bande originale", "sous-titres", "exposition"] },
      { q: "« Ça m'a beaucoup plu, je te le recommande. »" },
      {
        q: "« Lo spettacolo delle nove », c'est :",
        opts: ["La neuvième représentation", "La séance de neuf heures", "Neuf billets"]
      },
      {
        q: "Complète l'échange au guichet.",
        tr: "— Deux billets pour la séance de neuf heures. — Plein tarif ou réduit ? — Un plein et un réduit."
      },
      { tr: "Quel genre de films préfères-tu ?" },
      { tr: "Le concert m'a beaucoup plu, surtout la seconde partie." },
      { tr: "Ça te dit d'aller à l'exposition dimanche ?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Test",
    title: "Test de l'unité 9",
    objectives: ["vérifier fare/giocare/suonare, la météo et stare + gerundio"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« ___ la chitarra. »", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "« ___ a carte. »", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "« ___ caldo oggi. » (il fait chaud)" },
      { q: "« ___ il sole. »" },
      { q: "Le gerundio de « bere » : ___" },
      { q: "« Loro ___ arrivando. »" },
      {
        q: "« Demain je vais à Rome » :",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "Ça te dit une promenade ?" },
      { tr: "Je sors, il fait froid, je prends un parapluie." },
      { tr: "Le week-end je joue au tennis et je fais une promenade." }
    ]
  },
  "unit:a1-u10": {
    title: "Regarder en arrière",
    grammarNote: "passato prossimo · raconter · révision de A1"
  },
  "lesson:a1-u10-l1": {
    theme: "Le passé",
    title: "Passato prossimo avec avere",
    objectives: [
      "construire le passé avec avere",
      "former le participe régulier",
      "dire ce que tu as fait hier"
    ],
    theory: [
      {
        h: "Un temps composé, deux morceaux",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> ou <em>essere</em> au présent + le <b>participe passé</b>. C'est ton passé composé, construit exactement pareil, et c'est le passé de tous les jours en italien."
      },
      {
        contrast: "C'est la leçon la plus facile du niveau pour un francophone : même structure, même répartition entre les deux auxiliaires, même accord avec être. La seule chose à surveiller est que l'italien n'a pas besoin du pronom sujet (<em>ho mangiato</em>, pas « io ho mangiato » sauf pour insister)."
      },
      {
        h: "Le participe régulier",
        list: [
          "<b>-are → -ato</b> : parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b> : credere → cred<b>uto</b>",
          "<b>-ire → -ito</b> : finire → fin<b>ito</b>"
        ]
      },
      {
        h: "La plupart des verbes prennent avere",
        p: "Tout verbe <b>transitif</b> (celui qui admet un complément d'objet direct : « j'ai mangé <i>quelque chose</i> », « j'ai vu <i>quelqu'un</i> ») forme le passato prossimo avec <em>avere</em>. Le participe alors <b>ne change pas</b> : <em>Anna ha mangiato</em>, pas « ha mangiata »."
      },
      {
        h: "Participes irréguliers fréquents",
        p: "À mémoriser, parce qu'ils appartiennent aux verbes les plus courants : <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>. Plusieurs ressemblent aux tiens : fait, dit, vu, pris, lu, écrit, bu, ouvert."
      }
    ],
    grammar: {
      title: "Passato prossimo avec avere",
      table: {
        head: ["personne", "avere", "participe", "forme entière"],
        rows: [
          ["io", "ho", "mangiato", "ho mangiato"],
          ["tu", "hai", "parlato", "hai parlato"],
          ["lui / lei", "ha", "visto", "ha visto"],
          ["noi", "abbiamo", "letto", "abbiamo letto"],
          ["voi", "avete", "finito", "avete finito"],
          ["loro", "hanno", "fatto", "hanno fatto"]
        ]
      },
      examples: [
        { tr: "Hier j'ai mangé une pizza fantastique." },
        { tr: "Tu as vu le film hier soir ?" },
        { tr: "Nous avons réservé une table pour huit heures." },
        { tr: "Je n'ai pas compris, tu peux répéter ?" },
        { tr: "Qu'est-ce que tu as fait le week-end ?" },
        { tr: "J'ai déjà payé.", note: "« già » se place entre avere et le participe" }
      ]
    },
    vocab: [
      "hier",
      "avant-hier",
      "la semaine dernière",
      "le mois dernier",
      "il y a deux jours",
      "déjà",
      "pas encore",
      "ensuite, après",
      "d'abord, avant",
      "faire → fait",
      "voir → vu",
      "dire → dit"
    ],
    exercises: [
      {
        q: "De quoi se compose le passato prossimo ?",
        opts: [
          "Deux verbes au présent",
          "avere/essere + le participe passé",
          "essere + l'infinitif"
        ]
      },
      { q: "Le participe de « parlare » : ___" },
      { q: "Le participe de « credere » : ___" },
      { q: "Le participe de « finire » : ___" },
      { q: "Complète : « Ieri ___ una pizza. » (j'ai mangé)" },
      { q: "Associe le verbe à son participe irrégulier.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Complète le récit du week-end.",
        tr: "Samedi j'ai regardé un film, ensuite j'ai dîné dehors. Dimanche je n'ai rien fait."
      },
      { q: "« Je n'ai pas compris, tu peux répéter ? »" },
      { tr: "La semaine dernière nous avons visité Florence." },
      { tr: "Hier soir j'ai lu un livre très intéressant." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "Le passé",
    title: "Passato prossimo avec essere",
    objectives: [
      "reconnaître les verbes qui demandent essere",
      "accorder le participe avec le sujet",
      "raconter un voyage"
    ],
    theory: [
      {
        h: "Un groupe restreint, mais très fréquent",
        p: "Les verbes de <b>mouvement et de changement d'état</b> forment le passato prossimo avec <strong>essere</strong> : <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Plus tous les verbes réfléchis."
      },
      {
        contrast: "Tu connais déjà cette liste : c'est presque celle du passé composé français (aller, venir, arriver, partir, sortir, entrer, rentrer, monter, descendre, rester, naître, mourir, devenir). Deux écarts à noter : <em>essere</em> et <em>stare</em> se conjuguent eux-mêmes avec essere (<em>sono stato</em>), et <em>piacere</em> aussi."
      },
      {
        h: "Le participe s'accorde avec le sujet",
        p: "Comme en français : <em>Sono andat<b>o</b></em> (un homme), <em>sono andat<b>a</b></em> (une femme), <em>siamo andat<b>i</b></em> (groupe masculin ou mixte), <em>sono andat<b>e</b></em> (que des femmes). L'accord se fait à l'oral en italien, alors qu'en français il reste souvent muet : c'est le seul vrai effort ici."
      },
      {
        h: "Comment retenir quel verbe demande essere",
        p: "Un test pratique : si le verbe <b>n'admet pas de complément d'objet direct</b> (« je suis allé <i>quoi</i> » n'a pas de sens), il demande sans doute essere. Ce n'est pas infaillible (<em>dormire</em> prend avere), mais ça marche presque toujours."
      },
      {
        trap: "Quelques verbes changent d'auxiliaire en changeant de sens : <em>ho finito il lavoro</em> (j'ai fini le travail, transitif, avere) face à <em>il film è finito</em> (le film est fini, intransitif, essere). Même chose avec <em>cambiare, passare, cominciare</em> — et le français fait le même va-et-vient avec « il a monté la valise » et « il est monté »."
      }
    ],
    grammar: {
      title: "Passato prossimo avec essere",
      table: {
        head: ["sujet", "forme", "exemple"],
        rows: [
          ["un homme", "sono andato", "Sono andato a Roma."],
          ["une femme", "sono andata", "Sono andata a Roma."],
          ["groupe (m/mixte)", "siamo andati", "Siamo andati insieme."],
          ["groupe (que des femmes)", "siamo andate", "Siamo andate insieme."],
          ["réfléchi", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["irrégulier", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        { tr: "Je suis parti à sept heures du matin." },
        { tr: "Nous sommes arrivés en retard." },
        { tr: "Marco est né en 1990." },
        { tr: "On s'est vraiment bien amusés." },
        { tr: "Le film s'est terminé à onze heures." },
        { tr: "J'ai fini le travail à six heures.", note: "transitif → avere" }
      ]
    },
    vocab: [
      "aller → allé",
      "venir → venu",
      "arriver",
      "partir",
      "revenir",
      "sortir",
      "entrer",
      "naître",
      "rester",
      "devenir",
      "s'amuser",
      "voyage"
    ],
    exercises: [
      {
        q: "Qu'est-ce qui distingue le participe avec essere ?",
        opts: ["Il ne change jamais", "Il s'accorde avec le sujet comme un adjectif", "Il finit toujours en -o"]
      },
      { q: "Une femme qui dit « je suis partie » :", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Complète pour un groupe de femmes : « Loro sono ___ ieri. » (elles sont arrivées)" },
      { q: "Le participe de « nascere » (masculin) : ___" },
      {
        q: "Quels verbes forment le passato prossimo avec essere ?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "« Il film ___ alle undici. » (s'est terminé)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Ici « finire » est intransitif (le film s'est terminé tout seul) → essere."
      },
      {
        q: "Complète le récit du voyage (c'est une femme qui parle).",
        tr: "Je suis partie vendredi et je suis arrivée à Naples le soir. Je me suis vraiment bien amusée."
      },
      { tr: "Nous sommes arrivés en retard." },
      { tr: "Je suis née à Varsovie, mais j'ai grandi à Cracovie." },
      { tr: "Hier je suis allé au cinéma avec un ami." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "Le passé",
    title: "Raconter quelque chose au passé",
    objectives: [
      "enchaîner des phrases en un court récit",
      "employer les expressions de temps qui ordonnent le récit",
      "demander à quelqu'un comment s'est passé son week-end"
    ],
    theory: [
      {
        h: "Un récit a besoin d'une charpente temporelle",
        p: "Les verbes seuls ne font pas un récit. Il faut des connecteurs : <em>prima</em> (d'abord), <em>poi</em> (ensuite), <em>dopo</em> (après), <em>alla fine</em> (à la fin), <em>mentre</em> (pendant que). Sans eux les phrases restent côte à côte, comme une liste."
      },
      {
        h: "Les questions sur le passé",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> (« comment ça s'est passé ? »). Cette dernière sert très souvent à ouvrir la conversation."
      },
      {
        h: "Già et ancora se placent à l'intérieur",
        p: "Les adverbes <em>già</em> (déjà), <em>ancora</em> (encore), <em>appena</em> (venir de), <em>mai</em> (jamais) se mettent <b>entre l'auxiliaire et le participe</b> : <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>. Le français fait pareil : « j'ai déjà mangé », « je ne suis jamais allée »."
      },
      {
        tip: "Une façon naturelle de répondre : ne raconte pas tout. Un Italien répond bref (<em>Niente di che, sono stato a casa</em>) et ne développe que si on le relance."
      }
    ],
    grammar: {
      title: "Connecteurs et questions sur le passé",
      table: {
        head: ["fonction", "expression", "exemple"],
        rows: [
          ["séquence", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["en même temps", "mentre", "Mentre aspettavo, ho letto."],
          ["question", "Che cosa hai fatto?", "Qu'est-ce que tu as fait ?"],
          ["question", "Com'è andata?", "Comment ça s'est passé ?"],
          ["déjà", "già (à l'intérieur)", "Ho già finito."],
          ["jamais", "non… mai (à l'intérieur)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        { tr: "Samedi matin j'ai fait les courses au marché." },
        { tr: "Ensuite je suis allé à la salle de sport." },
        { tr: "Le soir nous sommes sortis avec des amis." },
        { tr: "À la fin nous sommes rentrés tard." },
        { tr: "Comment s'est passée la réunion ? — Pas mal." },
        { tr: "Je n'ai pas encore fini." }
      ]
    },
    vocab: [
      "d'abord",
      "ensuite",
      "après",
      "à la fin",
      "pendant que",
      "comment ça s'est passé ?",
      "rien de spécial",
      "un désastre",
      "c'était amusant",
      "faire les courses",
      "faire du shopping (vêtements)",
      "se reposer"
    ],
    exercises: [
      {
        q: "Où se place « già » dans le passato prossimo ?",
        opts: ["Devant avere", "Entre avere et le participe", "À la fin de la phrase"],
        why: "Ho già mangiato : l'adverbe va à l'intérieur, exactement comme dans « j'ai déjà mangé »."
      },
      { q: "Complète : « Non sono ___ stata a Venezia. » (jamais)" },
      { q: "Complète : « ___ ho lavorato, poi sono uscito. » (d'abord)" },
      {
        q: "« Com'è andata ? » porte sur :",
        opts: ["par où tu es passé", "comment quelque chose s'est passé", "comment tu te sens maintenant"]
      },
      {
        q: "Complète le récit.",
        tr: "Samedi j'ai fait les courses, ensuite je suis allé à la salle de sport, et le soir nous sommes sortis avec des amis."
      },
      { q: "« Je n'ai pas encore fini. »" },
      { tr: "À la fin nous sommes rentrés tard." },
      {
        q: "Lundi matin au travail.",
        setting: "La cuisine du bureau, près de la machine à café.",
        lines: [
          { tr: "Salut ! Ton week-end, c'était comment ?" },
          { tr: "Dis que rien de spécial, tu es resté chez toi.", answerTr: "Rien de spécial, je suis resté à la maison." },
          { tr: "Moi je suis allé à la montagne. Magnifique !" },
          { tr: "Demande avec qui il y est allé.", answerTr: "Avec qui tu y es allé ?" }
        ]
      },
      { tr: "D'abord j'ai fait les courses, ensuite je me suis reposé." },
      { tr: "Comment ça s'est passé ? — Bien, c'était amusant." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Révision",
    title: "Révision de tout le niveau",
    objectives: [
      "rassembler tout ce qu'il y a en A1",
      "vérifier si tu es prêt pour A2",
      "repérer tes propres lacunes"
    ],
    theory: [
      {
        h: "Ce que tu devrais savoir faire maintenant",
        list: [
          "te présenter, dire d'où tu viens, ce que tu fais et quel âge tu as",
          "commander dans un bar et au restaurant, faire des achats, demander un prix",
          "parler de ta journée, de l'heure et de tes habitudes",
          "demander ton chemin et comprendre la réponse",
          "décrire une personne : physique et caractère",
          "raconter brièvement ce que tu as fait hier et le week-end"
        ]
      },
      {
        h: "La grammaire qui doit être solide",
        p: "Les trois conjugaisons au présent, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, les verbes modaux, les articles définis et indéfinis, le genre et le nombre, les adjectifs, les prépositions contractées, les verbes réfléchis, <em>piacere</em>, <em>c'è / ci sono</em> et les bases du passato prossimo."
      },
      {
        h: "Ce qui t'attend en A2",
        p: "L'imperfetto et sa différence avec le passato prossimo, le futur simple, le conditionnel, les pronoms compléments directs et indirects, l'impératif complet, <em>ci</em> et <em>ne</em> dans plus de contextes, et les situations en voyage, chez le médecin et à l'hôtel."
      },
      {
        tip: "Si tu obtiens moins de 70 % à cette révision, ne passe pas à la suite. A2 s'appuie directement sur ces structures, et une lacune de A1 y devient un mur."
      }
    ],
    vocab: [
      "réviser",
      "exercice",
      "faute",
      "règle",
      "niveau",
      "progresser",
      "je suis prêt",
      "je peux le faire"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Articles définis :", items: [, , , , ] },
      {
        q: "Complète la présentation.",
        tr: "Je m'appelle Kasia, je suis polonaise et j'habite à Bologne depuis deux ans. Je suis enseignante."
      },
      { q: "« Mi ___ gli spaghetti. » (j'aime les spaghettis)" },
      { q: "« Vado ___ cinema. » (a + il)" },
      { q: "« Ieri ___ una pizza. » (j'ai mangé)" },
      { q: "« Ieri ___ al cinema. » (je suis allée)" },
      { tr: "Hier soir nous sommes allés au restaurant avec des amis." },
      { tr: "Je me suis réveillé tôt et j'ai pris mon petit-déjeuner dans un bar." },
      { tr: "Je m'appelle Anna, je suis polonaise et j'habite à Florence depuis un an." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Examen",
    title: "Examen final de A1",
    objectives: ["vérifier que tu es prêt à passer en A2"],
    theory: [
      {
        p: "Douze questions sur tout le niveau. On valide à 70 %. En dessous, il faut reprendre les unités où tu te trompes, pas toutes."
      }
    ],
    exercises: [
      {  },
      { q: "Tu entres dans un magasin à dix-huit heures :", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Articles :", items: [, , , ] },
      { q: "« Non mi ___ il pesce crudo. »" },
      { q: "« Devo ___ presto domani. » (me lever, alzarsi)" },
      { q: "« ___ le tre e mezza. »" },
      { q: "« Abito ___ Italia. »" },
      { q: "« ___ un tavolo libero? »" },
      { q: "« È più simpatico ___ bello. »", opts: ["di", "che", "come"] },
      { q: "« Ieri ___ al cinema. » (nous sommes allés)" },
      {
        q: "Complète.",
        tr: "Samedi j'ai fait les courses, ensuite je suis allé à la salle de sport, et le soir je suis sorti avec des amis."
      },
      { tr: "Bonsoir, je voudrais réserver une table pour deux à vingt heures." }
    ]
  }
});
