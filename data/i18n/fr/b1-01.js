/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/b1-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:b1-u01": { title: "Le subjonctif", grammarNote: "congiuntivo presente et passato · exprimer une opinion" },
  "lesson:b1-u01-l1": {
    theme: "Grammaire",
    title: "Formes et premiers emplois",
    objectives: [
      "former le congiuntivo presente dans les trois conjugaisons",
      "connaître les irréguliers les plus courants",
      "reconnaître les situations qui l'appellent"
    ],
    theory: [
      {
        h: "Un mode que tu possèdes déjà",
        p: "Le congiuntivo ne décrit pas des faits : il marque <b>la position du locuteur sur ce qui suit</b>, opinion, doute, volonté, émotion. <em>So che <b>è</b> bravo</em> (je sais, un fait, indicatif) face à <em>Penso che <b>sia</b> bravo</em> (je pense, une opinion, congiuntivo). Tu pars avec un avantage énorme : ton subjonctif est vivant et fait le même travail."
      },
      {
        contrast: "L'écart le plus coûteux est justement dans l'exemple ci-dessus. Le français dit « je pense qu'il <b>est</b> bon », à l'indicatif, et ne passe au subjonctif qu'à la forme négative. L'italien exige le congiuntivo même à l'affirmative : <em>penso che sia</em>, <em>credo che sia</em>, <em>mi sembra che sia</em>. Pire encore avec <em>sperare</em> : tu dis « j'espère qu'il <b>viendra</b> », l'italien dit <em>spero che <b>venga</b></em>. Ces deux verbes sont l'erreur la plus fréquente de tout le niveau."
      },
      {
        h: "Les terminaisons",
        list: [
          "<b>-are</b> : parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b> : prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b> : cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "Les trois premières personnes sont <b>identiques</b>. C'est pourquoi le pronom sujet <b>ne tombe pas</b> avec le congiuntivo : <em>penso che <b>tu</b> abbia ragione</em>, sinon personne ne sait de qui tu parles. C'est le seul contexte où le pronom personnel est de fait obligatoire en italien, une langue qui d'ordinaire s'en passe."
      },
      {
        h: "Les irréguliers qu'il faut savoir",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["personne", "parlare", "prendere", "capire", "essere", "avere"],
        rows: [
          ["che io", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che tu", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che lui/lei", "parli", "prenda", "capisca", "sia", "abbia"],
          ["che noi", "parliamo", "prendiamo", "capiamo", "siamo", "abbiamo"],
          ["che voi", "parliate", "prendiate", "capiate", "siate", "abbiate"],
          ["che loro", "parlino", "prendano", "capiscano", "siano", "abbiano"]
        ]
      },
      examples: [
        { tr: "Je pense que tu as raison." },
        { tr: "Je crois qu'il est trop tard." },
        { tr: "Je ne suis pas sûr qu'il vienne." },
        { tr: "J'espère que tout ira bien." },
        { tr: "Je veux que tu me dises la vérité." },
        { tr: "Je sais qu'il est bon.", note: "certitude → indicatif" }
      ]
    },
    vocab: [
      "je pense que…",
      "je crois que…",
      "il me semble que…",
      "j'espère que…",
      "je veux que…",
      "je crains que…",
      "je ne suis pas sûr que…",
      "j'imagine que…",
      "il est possible que…",
      "il faut que…",
      "je sais que… (indicatif)",
      "il est vrai que… (indicatif)"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Pourquoi le pronom sujet ne tombe-t-il pas avec le congiuntivo ?",
        opts: [
          "Parce que c'est plus poli",
          "Parce que les trois premières personnes ont la même forme",
          "Parce que l'ordre des mots l'exige"
        ]
      },
      { q: "Complète : « Penso che tu ___ ragione. » (avere)" },
      { q: "Complète : « Credo che ___ troppo tardi. » (essere)" },
      {
        q: "Laquelle prend l'indicatif et non le congiuntivo ?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere exprime la certitude, donc l'indicatif."
      },
      {
        q: "Mets les formes du congiuntivo.",
        tr: "J'espère que tout ira bien et que vous serez tous contents."
      },
      { q: "« Je veux que tu me dises la vérité. »" },
      { tr: "Je pense qu'il vaut mieux reporter la réunion." },
      { tr: "Je pense que tu as raison sur ce point." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Grammaire",
    title: "Ce qui déclenche le subjonctif",
    objectives: [
      "reconnaître les expressions qui exigent le congiuntivo",
      "savoir quand employer di + infinitif au lieu de che",
      "ne pas mettre le congiuntivo là où il n'a rien à faire"
    ],
    theory: [
      {
        h: "Quatre familles de déclencheurs",
        list: [
          "<b>opinion et supposition</b> : penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>volonté et sentiment</b> : voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>impersonnels</b> : è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>conjonctions</b> : benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        h: "Même sujet : che disparaît",
        p: "Quand les deux propositions partagent le sujet, le congiuntivo cède la place à <em>di</em> + infinitif. <em>Penso <b>di</b> avere ragione</em>, jamais « penso che io abbia »."
      },
      {
        contrast: "Le mécanisme est le tien, mais la préposition ne l'est pas : tu dis « je pense avoir raison » et « j'espère venir », sans rien entre le verbe et l'infinitif. L'italien intercale <em>di</em>, et l'oublier est une faute qui s'entend tout de suite."
      },
      {
        h: "Là où le congiuntivo n'apparaît PAS",
        p: "Après les expressions de certitude : <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Attention à <em>perché</em> : au sens de « parce que » il prend l'indicatif, au sens de « pour que » il prend le congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>), exactement comme ton « parce que » face à « pour que »."
      }
    ],
    grammar: {
      title: "Congiuntivo ou non",
      table: {
        head: ["expression", "mode", "exemple"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "indicatif", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (même sujet)", "infinitif", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "indicatif", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        { tr: "Bien qu'il pleuve, on y va quand même." },
        { tr: "Bien que je sois fatigué, je continue à travailler." },
        { tr: "Je t'aide à condition que tu fasses ta part." },
        { tr: "Pars avant qu'il y ait des embouteillages." },
        { tr: "Je pense partir demain.", note: "même sujet → di + infinitif" },
        { tr: "Comme il est tard, je remets ça à demain.", note: "indicatif" }
      ]
    },
    vocab: [
      "bien que",
      "quoique",
      "afin que",
      "à condition que",
      "à moins que",
      "avant que",
      "sans que",
      "comme si",
      "il se peut que",
      "comme, puisque",
      "il est clair que",
      "estimer, considérer"
    ],
    exercises: [
      { q: "« Benché ___ tardi, esco. » (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "« Siccome ___ tardi, resto a casa. » (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome énonce une cause réelle → indicatif."
      },
      { q: "Complète : « Ti aiuto purché tu ___ la tua parte. » (fare)" },
      { q: "Complète : « Spero ___ venire domani. » (même sujet)" },
      {
        q: "Quelles expressions exigent le congiuntivo ?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Mets les bonnes formes.",
        tr: "Bien qu'il soit fatigué, il continue à travailler. Je sais qu'il a beaucoup de patience."
      },
      { q: "« Bien qu'il pleuve, on sort quand même. »" },
      {
        q: "« Te lo dico perché tu capisca » : pourquoi le congiuntivo ?",
        opts: ["Parce que perché le prend toujours", "Parce qu'ici perché veut dire « pour que », pas « parce que »", "C'est une faute"]
      },
      { tr: "Il se peut qu'il n'y ait personne au bureau demain." },
      { tr: "Bien que ce soit difficile, je pense que ça en vaut la peine." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Grammaire",
    title: "Le subjonctif pour ce qui précède",
    objectives: [
      "former le congiuntivo passato",
      "choisir entre presente et passato",
      "l'employer pour commenter le passé"
    ],
    theory: [
      {
        h: "Comment il se construit",
        p: "Congiuntivo presente de <em>avere/essere</em> + participe : <em>abbia fatto</em>, <em>sia andato</em>. Les règles pour choisir l'auxiliaire et pour accorder le participe sont celles que tu connais du passato prossimo. C'est ton « qu'il ait fait » et « qu'il soit allé », bâti à l'identique."
      },
      {
        h: "Presente ou passato",
        p: "Avec une principale au présent : <b>presente</b> pour du simultané ou de l'à-venir (<em>penso che venga</em>), <b>passato</b> pour ce qui est déjà terminé (<em>penso che sia venuto</em>)."
      },
      {
        h: "Le contexte le plus courant : commenter le passé",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> Ces tournures reviennent sans cesse dans la conversation, donc le congiuntivo passato est vite rentable."
      },
      {
        tip: "À l'oral relâché, les Italiens remplacent de plus en plus le congiuntivo par l'indicatif (<em>penso che è vero</em>). C'est très critiqué et ça passe mal à l'écrit et au travail. Apprends la forme correcte."
      }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["principale", "relation", "mode", "exemple"],
        rows: [
          ["présent", "simultané", "cong. presente", "Penso che stia bene."],
          ["présent", "futur", "cong. presente", "Penso che venga domani."],
          ["présent", "antérieur", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "avec essere", "accord", "Credo che sia partita."],
          ["—", "avec avere", "pas d'accord", "Credo che abbia parlato."],
          ["—", "avec un pronom", "accord", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        { tr: "Je suis désolé que tu n'aies pas pu venir." },
        { tr: "Je ne crois pas qu'ils l'aient fait exprès." },
        { tr: "C'est bizarre qu'il n'ait pas répondu." },
        { tr: "Il semble qu'ils soient déjà partis." },
        { tr: "J'espère que vous vous êtes bien amusés." },
        { tr: "Je crains qu'on se soit trompés de route." }
      ]
    },
    vocab: [
      "je suis désolé que",
      "c'est bizarre que",
      "il semble que",
      "il paraît que",
      "j'ai l'impression que",
      "exprès",
      "par erreur",
      "se tromper de route",
      "remarquer",
      "se rendre compte",
      "apparemment",
      "en fait"
    ],
    exercises: [
      { q: "Complète : « Penso che ___ già partito. » (essere, lui)" },
      { q: "Complète : « Non credo che ___ capito. » (avere, eux)" },
      {
        q: "« Penso che venga domani » face à « Penso che sia venuto ieri » : quelle différence ?",
        opts: ["Aucune", "La première parle du futur, la seconde d'un fait antérieur", "La seconde est fautive"]
      },
      { q: "Mets le congiuntivo passato.", tr: "Je suis désolé que tu n'aies pas pu venir et que tu aies raté la fête." },
      { q: "« Je ne crois pas qu'ils l'aient fait exprès. »" },
      {
        q: "« Credo che sia partita » : pourquoi « partita » et pas « partito » ?",
        opts: ["C'est une faute", "Parce qu'avec essere le participe s'accorde avec le sujet", "Parce que ça sonne mieux"]
      },
      { q: "Associe.", pairs: ["apparemment", "exprès", "par erreur", "se rendre compte"] },
      { tr: "Il semble qu'ils soient déjà partis." },
      { tr: "C'est bizarre qu'il n'ait pas encore répondu au message." },
      { tr: "J'espère que vous vous êtes bien amusés à la fête." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Communication",
    title: "Donner et peser une opinion",
    objectives: [
      "exprimer une opinion en conversation",
      "être d'accord en partie et contredire",
      "employer le congiuntivo dans une vraie discussion"
    ],
    theory: [
      {
        h: "Trois intensités d'opinion",
        list: [
          "douce : <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutre : <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "forte : <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (indicatif !)"
        ]
      },
      {
        h: "Contredire sans se fâcher",
        p: "La conversation italienne tolère le désaccord mais soigne l'emballage. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Un <em>no</em> tout sec ferme la conversation."
      },
      {
        h: "Les marqueurs de discours",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. Ils n'ajoutent rien au contenu, mais sans eux on dirait que tu lis à voix haute. <em>Anzi</em> mérite sa place : il renforce ce que tu viens de dire ou le corrige, entre ton « d'ailleurs » et ton « au contraire »."
      },
      {
        tip: "<em>Dipende</em> est la réponse la plus italienne à une question difficile. Développe-la : <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
    ],
    grammar: {
      title: "La langue de l'opinion",
      table: {
        head: ["fonction", "formule", "mode après che"],
        rows: [
          ["opinion", "Secondo me / A mio parere", "—"],
          ["opinion", "Penso / credo / ritengo che", "congiuntivo"],
          ["certitude", "Sono sicuro / è evidente che", "indicatif"],
          ["accord partiel", "Da un lato… dall'altro…", "—"],
          ["désaccord", "Non sono d'accordo, perché…", "indicatif"],
          ["correction", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        { tr: "À mon avis le problème est ailleurs." },
        { tr: "J'ai l'impression qu'on ne se comprend pas." },
        { tr: "D'un côté tu as raison, de l'autre tu exagères." },
        { tr: "Je ne suis pas totalement d'accord avec cette lecture." },
        { tr: "Au contraire, je dirais l'inverse." },
        { tr: "Ça dépend de ce que tu entends par « efficace »." }
      ]
    },
    vocab: [
      "à mon avis",
      "selon moi",
      "j'estime que",
      "je suis convaincu que",
      "d'un côté… de l'autre",
      "pas totalement",
      "d'ailleurs ; au contraire",
      "exactement",
      "bref",
      "ça dépend",
      "exagérer",
      "voir ce que quelqu'un veut dire"
    ],
    exercises: [
      {
        q: "« Sono sicuro che ___ vero. » (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Certitude → indicatif."
      },
      { q: "Complète : « Ritengo che questa soluzione ___ migliore. » (essere)" },
      { q: "Que veut dire « anzi » ?", opts: ["donc", "d'ailleurs / au contraire", "avant"] },
      { q: "Associe.", pairs: ["exactement", "bref", "ça dépend", "exagérer"] },
      { q: "« Je ne suis pas totalement d'accord avec cet avis. »" },
      {
        q: "Complète l'échange.",
        tr: "À mon avis le problème est ailleurs. J'ai l'impression qu'on ne se comprend pas."
      },
      {
        q: "Une discussion sur le télétravail.",
        setting: "Un dîner chez des amis, la conversation vient sur le travail.",
        lines: [
          { tr: "À mon avis le télétravail a détruit le travail d'équipe." },
          {
            tr: "Donne-lui raison en partie et ajoute un contrepoint.",
            answerTr: "D'un côté tu as raison, de l'autre ça a réduit le stress."
          },
          { tr: "Oui, mais les plus jeunes apprennent moins." },
          {
            tr: "Réponds que ça dépend de l'organisation de l'entreprise.",
            answerTr: "Ça dépend de la façon dont l'entreprise organise le travail."
          }
        ]
      },
      { tr: "Au contraire, je dirais exactement l'inverse." },
      { tr: "D'un côté c'est vrai, de l'autre ça me paraît une simplification." },
      { tr: "À mon avis ça dépend beaucoup du contexte." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier le congiuntivo presente et passato et les déclencheurs"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "« Penso che tu ___ ragione. »" },
      { q: "« Benché ___ tardi, esco. »" },
      { q: "« Siccome ___ tardi, resto. »", opts: ["è", "sia", "fosse"] },
      { q: "« Spero ___ venire domani. » (même sujet)" },
      { q: "« Non credo che ___ capito. » (avere, eux)" },
      { q: "Lesquelles exigent le congiuntivo ?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "Il me semble qu'ils n'ont pas compris le problème." },
      { tr: "Je pense qu'il vaut mieux en parler demain." }
    ]
  },
  "unit:b1-u02": { title: "Les pronoms combinés", grammarNote: "me lo, glielo, ce ne · ci et ne au complet" },
  "lesson:b1-u02-l1": {
    theme: "Grammaire",
    title: "Mettre deux pronoms ensemble",
    objectives: [
      "combiner un pronom indirect avec un direct",
      "retenir le passage de -i à -e",
      "employer la construction en conversation"
    ],
    theory: [
      {
        h: "Ordre : l'indirect d'abord",
        p: "Quand deux pronoms se rencontrent, l'<b>indirect passe devant</b> et son <em>-i</em> devient <em>-e</em> : <em>mi + lo → <b>me lo</b></em>."
      },
      {
        contrast: "Aux deux premières personnes le français fait pareil : « il me le donne », indirect puis direct. Mais à la troisième il s'inverse : tu dis « il <b>le lui</b> donne », direct puis indirect, alors que l'italien garde l'ordre et fabrique <em>glielo</em>. C'est le piège de la leçon, et il se déclenche exactement là où tu croirais être en terrain connu."
      },
      {
        h: "Gli et le fusionnent en glie-",
        p: "« À lui », « à elle » et « à eux » donnent tous <strong>glie-</strong>, écrit <b>en un seul mot</b> avec le second pronom : <em>glielo, gliela, glieli, gliele, gliene</em>. Une forme unique couvre trois personnes, donc le contexte doit lever l'ambiguïté."
      },
      {
        h: "Avec un infinitif ou un impératif ils se collent ensemble",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. La paire entière se soude à la fin du verbe. Ton « donne-le-moi » fait la même soudure, mais avec des traits d'union et dans l'ordre inverse."
      },
      {
        trap: "Aux temps composés le participe s'accorde avec le pronom <b>direct</b>, paires comprises : <em>Me l'ha data</em>, <em>Gliele ho mandate</em>. C'est ta règle du COD antéposé, appliquée à l'identique."
      }
    ],
    grammar: {
      title: "Tableau des pronoms combinés",
      table: {
        head: ["", "lo", "la", "li", "le", "ne"],
        rows: [
          ["mi", "me lo", "me la", "me li", "me le", "me ne"],
          ["ti", "te lo", "te la", "te li", "te le", "te ne"],
          ["gli / le", "glielo", "gliela", "glieli", "gliele", "gliene"],
          ["ci", "ce lo", "ce la", "ce li", "ce le", "ce ne"],
          ["vi", "ve lo", "ve la", "ve li", "ve le", "ve ne"]
        ]
      },
      examples: [
        { tr: "Tu me prêtes la voiture ? — Oui, je te la prête." },
        { tr: "Tu as donné le livre à Marco ? — Oui, je le lui ai donné." },
        { tr: "Tu nous l'expliques encore une fois ?" },
        { tr: "Il t'a envoyé combien de mails ? — Il m'en a envoyé trois." },
        { tr: "Tu peux me l'expliquer ?" },
        { tr: "Donne-le-moi, s'il te plaît." }
      ]
    },
    vocab: [
      "prêter",
      "rendre",
      "expliquer",
      "envoyer",
      "apporter, emmener",
      "offrir",
      "remettre, livrer",
      "emprunter",
      "encore une fois",
      "tout de suite",
      "dès que possible",
      "tiens-moi au courant"
    ],
    exercises: [
      {
        q: "« Mi dai il libro? » → la réponse avec pronoms :",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Complète : « Hai dato il libro a Marco? — Sì, ___ ho dato. »" },
      {
        q: "Complète : « Ci spieghi la regola? — Sì, ___ spiego. »",
        why: "La réponse s'adresse à vous : ve la spiego."
      },
      { q: "Comment s'écrit « gli + lo » ?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Remplace les noms par des pronoms.",
        tr: "— Tu me prêtes la voiture ? — Oui, je te la prête volontiers. — Et les clés ? — Je te les donne tout de suite."
      },
      { q: "« Tu peux me l'expliquer ? »" },
      { q: "Complète la terminaison : « Me l'ha dat___. » (il me l'a donnée — la macchina)" },
      { tr: "Je te les envoie demain." },
      { tr: "Je le lui ai expliqué trois fois, mais il n'a pas compris." },
      { tr: "Tu peux me l'expliquer encore une fois, s'il te plaît ?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Grammaire",
    title: "Ci et ne au complet",
    objectives: [
      "reconnaître toutes les valeurs de ci et ne",
      "employer les verbes où ils sont soudés",
      "comprendre des tournures comme non ce la faccio"
    ],
    theory: [
      {
        h: "CI : quatre valeurs",
        list: [
          "lieu : <em>A Roma ci vado spesso.</em>",
          "<em>a + chose</em> : <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "verbes soudés : <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE : trois valeurs",
        list: [
          "partie d'un tout : <em>Ne voglio due.</em>",
          "<em>di + chose</em> : <em>Ne parliamo domani.</em>",
          "verbes soudés : <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        contrast: "C'est la leçon la plus favorable du niveau pour toi. <em>Ci</em> est ton <b>y</b>, <em>ne</em> est ton <b>en</b>, et même les verbes soudés se répondent un à un : <em>andarsene</em> est « s'en aller », <em>fregarsene</em> « s'en ficher », <em>intendersene</em> « s'y connaître », <em>accorgersene</em> « s'en apercevoir ». Aucune autre langue de ce cours n'a cette correspondance ; là où les autres apprennent des blocs opaques, tu reconnais une mécanique."
      },
      {
        h: "Des verbes qu'on ne traduit pas mot à mot",
        p: "<em>Ci vogliono due ore</em> (« il faut deux heures »), <em>Ci metto un'ora</em> (« j'y mets une heure »), <em>Non ce la faccio</em> (« je n'y arrive pas »), <em>Ci tengo</em> (« j'y tiens »), <em>Me ne vado</em> (« je m'en vais »), <em>Non me ne intendo</em> (« je ne m'y connais pas »)."
      },
      {
        trap: "<em>Volerci</em> et <em>metterci</em> ne sont pas synonymes. <em>Ci vogliono due ore</em> porte sur le temps objectif ; <em>ci metto due ore</em> sur le temps que <b>moi</b> je mets. Ton « il faut » et ton « je mets » font exactement la même distinction."
      }
    ],
    grammar: {
      title: "Les verbes avec ci et ne",
      table: {
        head: ["verbe", "sens", "exemple"],
        rows: [
          ["volerci", "falloir", "Ci vuole pazienza."],
          ["metterci", "mettre (du temps)", "Ci metto venti minuti."],
          ["farcela", "y arriver", "Non ce la faccio più."],
          ["tenerci", "y tenir", "Ci tengo molto."],
          ["andarsene", "s'en aller", "Me ne vado adesso."],
          ["fregarsene", "s'en ficher", "Se ne frega di tutto."],
          ["intendersene", "s'y connaître", "Non me ne intendo."],
          ["entrarci", "avoir un rapport", "Che c'entra?"]
        ]
      },
      examples: [
        { tr: "La bureaucratie italienne demande de la patience." },
        { tr: "Tu mets combien de temps de chez toi au travail ?" },
        { tr: "Je n'arrive pas à finir pour ce soir." },
        { tr: "Je tiens à ce que tu viennes.", note: "+ congiuntivo" },
        { tr: "Je m'en vais, il est tard." },
        { tr: "Je ne m'y connais pas du tout en vin." }
      ]
    },
    vocab: [
      "falloir",
      "mettre (du temps)",
      "y arriver",
      "y tenir",
      "s'en aller",
      "s'en ficher",
      "s'y connaître",
      "avoir un rapport",
      "en vouloir à",
      "patience",
      "effort, investissement",
      "le temps que ça prend"
    ],
    exercises: [
      {
        q: "« Ci vogliono due ore » veut dire :",
        opts: ["Nous voulons deux heures", "Il faut deux heures", "J'y mets deux heures"]
      },
      {
        q: "« Ci metto due ore » veut dire :",
        opts: ["Il faut deux heures en général", "J'y mets deux heures", "Je le pose pour deux heures"]
      },
      { q: "Complète : « Non ___ la faccio più. » (je n'y arrive plus)" },
      { q: "Complète : « Me ___ vado, è tardi. »" },
      { q: "Associe.", pairs: ["y tenir", "s'y connaître", "avoir un rapport", "s'en ficher"] },
      { q: "Complète.", tr: "Tu mets combien de temps pour y aller ? — Il faut vingt minutes en métro." },
      { q: "« Je ne m'y connais pas en vin. »" },
      {
        q: "« Ci tengo che tu venga » : pourquoi le congiuntivo ?",
        opts: ["Parce que tenerci exprime volonté et sentiment", "C'est une faute", "Parce que ci l'exige"]
      },
      { tr: "Il faut beaucoup de patience, mais à la fin on y arrive." },
      { tr: "Je n'arrive pas à tout finir aujourd'hui." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Grammaire",
    title: "Les propositions relatives",
    objectives: [
      "employer che, cui et il quale",
      "souder deux phrases en une",
      "exprimer la possession avec cui plus article"
    ],
    theory: [
      {
        h: "Che fait presque tout le travail",
        p: "<strong>Che</strong> est invariable et tient lieu de sujet comme de complément d'objet direct : <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. Il ne peut pas suivre une préposition."
      },
      {
        contrast: "Ta répartition qui/que disparaît : l'italien emploie <em>che</em> dans les deux cas et ne distingue pas le sujet de l'objet. C'est une simplification, pas une difficulté — mais elle demande de désapprendre un réflexe très ancré."
      },
      {
        h: "Cui après une préposition",
        p: "Quand une préposition est nécessaire, <em>che</em> cède la place à <strong>cui</strong> : <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>. Comme toi, l'italien ne peut pas rejeter la préposition à la fin."
      },
      {
        h: "Cui avec un article = possession",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> (« le garçon dont la mère est médecin »). L'article s'accorde avec la chose possédée, pas avec le possesseur. Ton <em>dont</em> couvre à la fois ce cas et le <em>di cui</em> de la ligne précédente : l'italien, lui, les distingue, et c'est à toi de choisir."
      },
      {
        h: "Il quale, la variante formelle",
        p: "<em>il quale, la quale, i quali, le quali</em> remplace <em>che</em> et <em>cui</em> au registre écrit, exactement comme ton « lequel ». Il gagne sa place quand il faut lever une ambiguïté : <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> désigne clairement la sœur, pas Marco."
      }
    ],
    grammar: {
      title: "Les pronoms relatifs",
      table: {
        head: ["forme", "fonction", "exemple"],
        rows: [
          ["che", "sujet / COD", "Il film che ho visto."],
          ["a cui", "complément indirect", "La persona a cui ho scritto."],
          ["in cui", "lieu, temps", "L'anno in cui sono nato."],
          ["di cui", "dont", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "possession", "L'autore il cui libro è famoso."],
          ["il quale", "variante formelle", "Il collega, il quale lavora qui."],
          ["chi", "celui qui", "Chi cerca trova."]
        ]
      },
      examples: [
        { tr: "Le livre que je lis est magnifique." },
        { tr: "La ville où j'ai grandi est petite." },
        { tr: "La raison pour laquelle j'écris est simple." },
        { tr: "Le collègue dont la fille étudie à Rome." },
        { tr: "Qui cherche trouve.", note: "proverbe" },
        { tr: "C'est la chose dont je te parlais." }
      ]
    },
    vocab: [
      "qui, que (sujet/objet)",
      "lequel (après préposition)",
      "lequel (formel)",
      "celui qui",
      "la raison",
      "grandir",
      "l'auteur",
      "ce que",
      "la période",
      "l'époque",
      "grâce auquel",
      "au cas où"
    ],
    exercises: [
      { q: "Complète : « Il libro ___ ho letto è bellissimo. »" },
      { q: "Complète : « La città in ___ vivo è piccola. »" },
      { q: "Complète : « La persona a ___ ho scritto non risponde. »" },
      {
        q: "« Il ragazzo la cui madre è medico » : avec quoi « la » s'accorde-t-il ?",
        opts: ["Avec le garçon", "Avec la mère (la chose possédée)", "Avec rien"]
      },
      {
        q: "Quelle phrase est fautive ?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Che ne peut pas suivre une préposition."
      },
      {
        q: "Complète les relatifs.",
        tr: "Le collègue qui travaille avec moi est la personne à qui je dois tout."
      },
      { q: "« La raison pour laquelle j'écris est simple. »" },
      { tr: "C'est la chose dont je te parlais." },
      { tr: "L'année où je suis arrivé en Italie a été la plus dure." },
      { tr: "La ville où j'ai grandi est toute petite." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Grammaire",
    title: "Les indéfinis",
    objectives: [
      "employer qualche, alcuni, ogni, ciascuno",
      "distinguer nessuno de niente",
      "construire une phrase à double négation"
    ],
    theory: [
      {
        h: "Qualche prend toujours le singulier",
        p: "<em><b>qualche</b> giorno</em> (« quelques jours ») : le sens est pluriel mais le nom reste au singulier. Son synonyme <em>alcuni/alcune</em> fonctionne à l'inverse : <em>alcuni giorni</em>. Ton « quelques jours » est au pluriel, donc <em>qualche giorno</em> demandera un effort conscient."
      },
      {
        h: "Ogni et ciascuno",
        p: "<em>Ogni</em> est invariable et toujours singulier : <em>ogni giorno</em>, ton « chaque jour ». <em>Ciascuno</em> se fléchit comme l'article indéfini et insiste sur l'unité : <em>ciascuno studente</em>, ton « chacun »."
      },
      {
        h: "Les négations",
        p: "<em>Nessuno</em> (personne, aucun), <em>niente / nulla</em> (rien), <em>nemmeno / neanche</em> (pas même). <b>Après</b> le verbe ils appellent <em>non</em> : <em>non c'è <b>nessuno</b></em>. Devant le verbe, <em>non</em> disparaît : <em><b>Nessuno</b> è venuto.</em>"
      },
      {
        contrast: "C'est là que le français décroche : tu gardes le <em>ne</em> dans les deux positions, « personne <b>n'</b>est venu ». L'italien le supprime, et l'ajouter donne une faute que ton oreille ne signalera pas."
      },
      {
        tip: "<em>Qualcosa</em> prend l'adjectif par <em>di</em> : <em>qualcosa <b>di</b> bello</em>, exactement ton « quelque chose <b>de</b> beau ». Même chose pour <em>niente di grave</em>. Avec un infinitif en revanche c'est <em>da</em> : <em>qualcosa <b>da</b> mangiare</em>, là où tu mets <em>à</em>."
      }
    ],
    grammar: {
      title: "Les indéfinis",
      table: {
        head: ["forme", "syntaxe", "exemple"],
        rows: [
          ["qualche", "+ singulier", "qualche giorno fa"],
          ["alcuni / alcune", "+ pluriel", "alcuni amici"],
          ["ogni", "invariable + singulier", "ogni settimana"],
          ["ciascuno", "fléchi, singulier", "ciascuna proposta"],
          ["qualcuno / nessuno", "personnes", "Non c'è nessuno."],
          ["qualcosa / niente", "choses", "qualcosa di nuovo"]
        ]
      },
      examples: [
        { tr: "On se voit dans quelques jours." },
        { tr: "Certains collègues ne sont pas d'accord." },
        { tr: "C'est la même histoire à chaque fois." },
        { tr: "Je n'ai vu personne au bureau." },
        { tr: "Personne ne m'a prévenu.", note: "devant le verbe : pas de non" },
        { tr: "Tu veux quelque chose à boire ?" }
      ]
    },
    vocab: [
      "quelques (+ singulier)",
      "certains, quelques-uns",
      "chaque",
      "chacun",
      "quelqu'un",
      "personne, aucun",
      "quelque chose",
      "rien",
      "qui que ce soit",
      "nulle part",
      "pas même",
      "prévenir"
    ],
    exercises: [
      {
        q: "Quelle combinaison est correcte ?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche prend toujours le singulier."
      },
      { q: "Et ici ?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Complète : « Non c'è ___ in ufficio. » (personne)" },
      { q: "Complète : « ___ mi ha avvisato. » (personne) — en tête de phrase" },
      { q: "Complète : « Vuoi qualcosa ___ bere? »" },
      { q: "Complète : « Ho sentito qualcosa ___ strano. »" },
      {
        q: "Quelles phrases sont correctes ?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Complète.", tr: "Chaque fois que j'appelle, personne ne répond." },
      { tr: "Certains collègues ne sont pas d'accord, mais personne ne le dit ouvertement." },
      { tr: "On se voit dans quelques jours, je t'écris." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier les pronoms combinés, ci/ne, les relatives et les indéfinis"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« Mi dai il libro? » →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "« Hai dato il libro a Marco? — Sì, ___ ho dato. »" },
      { q: "« Non ___ la faccio più. »" },
      { q: "« Me ___ vado. »" },
      { q: "« La città in ___ vivo. »" },
      { q: "« Il libro ___ ho letto. »" },
      { q: "Correct :", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "« Vuoi qualcosa ___ mangiare? »" },
      { tr: "Je le lui ai expliqué, mais il faut du temps pour comprendre." },
      { tr: "Je te l'envoie dès que je peux, là je n'y arrive pas." }
    ]
  },
  "unit:b1-u03": {
    title: "La bureaucratie italienne",
    grammarNote: "langue administrative · documents · demandes formelles"
  },
  "lesson:b1-u03-l1": {
    theme: "Vivre en Italie",
    title: "Les documents de base",
    objectives: [
      "comprendre à quoi servent le codice fiscale et la residenza",
      "demander la délivrance d'un document",
      "remplir un formulaire simple"
    ],
    theory: [
      {
        h: "Le codice fiscale ouvre tout",
        p: "<strong>Il codice fiscale</strong> est un identifiant fiscal de seize caractères, calculé à partir du prénom, du nom, de la date et du lieu de naissance. Sans lui, impossible d'ouvrir un compte, de signer un bail, d'acheter une carte SIM ou de s'inscrire chez un médecin. L'<em>Agenzia delle Entrate</em> le délivre sur place et gratuitement. Il tient à la fois de ton numéro fiscal et de ton numéro de sécurité sociale, et il est demandé bien plus souvent que les deux."
      },
      {
        h: "La residenza n'est pas une adresse",
        p: "<strong>La residenza</strong> est l'inscription officielle à la mairie (<em>comune</em>). En dépendent le médecin traitant, le permis de conduire, les aides et une longue liste de réductions. Une fois la demande déposée, <em>il vigile</em> (un agent municipal) passe vérifier que tu habites bien là. La France n'a pas d'équivalent de cet enregistrement, ni de cette visite : c'est la partie la plus dépaysante du chapitre."
      },
      {
        h: "Trois mots que tu entendras à tous les guichets",
        list: [
          "<em>la marca da bollo</em> — le timbre fiscal, acheté au bureau de tabac (<em>tabaccheria</em>) et collé sur la demande",
          "<em>l'autocertificazione</em> — l'attestation sur l'honneur qui remplace un certificat ; elle engage juridiquement",
          "<em>l'appuntamento</em> — beaucoup de bureaux ne laissent pas entrer sans rendez-vous pris en ligne"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> est ton bureau de tabac : on y achète aussi les timbres fiscaux, les titres de transport et des recharges de téléphone, et on y règle certaines factures."
      }
    ],
    grammar: {
      title: "La langue administrative",
      table: {
        head: ["formule", "sens", "où"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "le soussigné", "demandes"],
          ["Si prega di…", "veuillez…", "consignes"],
          ["Ai sensi dell'art. …", "au sens de l'article…", "réglementation"],
          ["In allegato", "ci-joint", "formulaires"],
          ["Entro e non oltre", "au plus tard le", "délais"],
          ["Rilasciare / rilascio", "délivrer / délivrance", "documents"]
        ]
      },
      examples: [
        { tr: "Je voudrais demander un codice fiscale." },
        { tr: "Je dois m'inscrire comme résident dans cette commune." },
        { tr: "Il faut un timbre fiscal de seize euros." },
        { tr: "J'ai déjà pris rendez-vous en ligne." },
        { tr: "Le document est délivré sur place." },
        { tr: "Remplissez le formulaire en majuscules, s'il vous plaît." }
      ]
    },
    vocab: [
      "identifiant fiscal",
      "inscription officielle de résidence",
      "mairie, commune",
      "état civil",
      "formulaire",
      "timbre fiscal",
      "attestation sur l'honneur",
      "délivrer (un document)",
      "guichet",
      "en majuscules",
      "carte vitale italienne",
      "titre de séjour"
    ],
    culture: {
      title: "Avec des yeux italiens : survivre à un bureau public",
      text: "<p>Règle un : <b>apporte toujours plus de documents que ce que liste le site</b>. Chaque guichet lit les exigences à sa façon.</p><p>Règle deux : <b>l'autocertificazione est ton alliée</b>. La loi permet de remplacer beaucoup de certificats par une attestation sur l'honneur, et l'agent est tenu de l'accepter. Bon à savoir, parce que personne ne te le proposera.</p><p>Règle trois : <b>note le nom de l'agent</b> qui t'a reçu. À la visite suivante, ça permet de reconstituer l'historique de ton dossier.</p>"
    },
    exercises: [
      {
        q: "À quoi sert le codice fiscale ?",
        opts: [
          "Aux impôts seulement",
          "À presque toutes les démarches : compte, contrat, médecin",
          "C'est le numéro de téléphone du fisc"
        ]
      },
      { q: "Où achète-t-on une marca da bollo ?", opts: ["À la mairie", "Au bureau de tabac", "À la banque"] },
      { q: "Complète : « Vorrei ___ il codice fiscale. » (demander)" },
      { q: "Complète : « Compili il modulo in ___. » (majuscules)" },
      { q: "Associe.", pairs: ["état civil", "guichet", "délivrer", "formulaire"] },
      {
        q: "Qu'est-ce qu'une « autocertificazione » ?",
        opts: [
          "Un certificat délivré par le bureau",
          "Une attestation sur l'honneur ayant valeur juridique",
          "Une déclaration devant notaire"
        ]
      },
      { q: "« Je dois m'inscrire comme résident dans cette commune. »" },
      {
        q: "Complète la demande au guichet.",
        tr: "Bonjour, je voudrais demander un codice fiscale. J'ai déjà pris rendez-vous en ligne."
      },
      { tr: "Il faut un timbre fiscal de seize euros et une copie de la pièce d'identité." },
      { tr: "Je voudrais demander un codice fiscale, j'ai mon passeport." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Vivre en Italie",
    title: "Banques et contrats",
    objectives: [
      "ouvrir un compte bancaire",
      "comprendre les conditions de base d'un contrat",
      "poser des questions sur les coûts et les conditions"
    ],
    theory: [
      {
        h: "Le compte et ce qu'il coûte",
        p: "<em>Il conto corrente</em> comporte normalement <em>il canone mensile</em>, des frais de tenue de compte mensuels — une ligne que tu connais bien. Un virement est <strong>il bonifico</strong> et le numéro de compte est l'<strong>IBAN</strong>, le même format européen. <em>Il bancomat</em> désigne à la fois le distributeur et la carte de débit."
      },
      {
        h: "Le contrat : les mots qu'il faut comprendre",
        list: [
          "<em>le condizioni</em> — les conditions ; <em>la clausola</em> — la clause",
          "<em>il recesso</em> — la rétractation ; <em>la disdetta</em> — la résiliation",
          "<em>la scadenza</em> — l'échéance ; <em>il rinnovo automatico</em> — la reconduction tacite",
          "<em>le spese di gestione</em> — les frais de gestion"
        ]
      },
      {
        h: "Les questions qui valent la peine",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. La reconduction tacite est très répandue dans les contrats italiens et doit être arrêtée avec un préavis, exactement comme chez toi."
      },
      {
        tip: "À la signature, l'employé peut te demander de parapher chaque page (<em>siglare</em>) et de signer une seconde fois sous les clauses (<em>doppia firma</em>). C'est la norme, pas un signal d'alarme."
      }
    ],
    grammar: {
      title: "Banque et contrat",
      table: {
        head: ["italien", "français", "contexte"],
        rows: [
          ["il conto corrente", "compte courant", "banque"],
          ["il canone mensile", "frais mensuels", "banque, téléphone"],
          ["il bonifico", "virement", "paiements"],
          ["la disdetta", "résiliation", "contrat"],
          ["il rinnovo automatico", "reconduction tacite", "contrat"],
          ["il vincolo", "engagement de durée", "contrat"]
        ]
      },
      examples: [
        { tr: "Je voudrais ouvrir un compte courant." },
        { tr: "Les frais mensuels sont de combien ?" },
        { tr: "Je dois faire un virement international." },
        { tr: "Y a-t-il un engagement de durée ?" },
        { tr: "Comment puis-je résilier le contrat ?" },
        { tr: "Il se reconduit automatiquement sauf résiliation." }
      ]
    },
    vocab: [
      "compte courant",
      "virement",
      "numéro de compte",
      "distributeur, carte de débit",
      "abonnement mensuel",
      "commission, frais",
      "contrat",
      "clause",
      "résiliation",
      "préavis",
      "signer",
      "engagement de durée"
    ],
    exercises: [
      { q: "Associe.", pairs: ["virement", "résiliation", "abonnement", "commission"] },
      {
        q: "« Rinnovo automatico salvo disdetta » veut dire :",
        opts: [
          "Le contrat prend fin automatiquement",
          "Le contrat se reconduit sauf résiliation",
          "Le contrat ne peut pas être reconduit"
        ]
      },
      { q: "Complète : « Vorrei aprire un ___ corrente. »" },
      { q: "Complète : « C'è un ___ di durata? » (engagement)" },
      { q: "« Comment puis-je résilier le contrat ? »" },
      {
        q: "À la banque.",
        setting: "Le bureau d'un conseiller, rendez-vous pris.",
        lines: [
          { tr: "Bonjour, que puis-je faire pour vous ?" },
          { tr: "Dis que tu veux ouvrir un compte.", answerTr: "Je voudrais ouvrir un compte courant." },
          { tr: "Bien sûr. Vous avez un codice fiscale et une pièce d'identité ?" },
          { tr: "Confirme et demande les frais mensuels.", answerTr: "Oui. Les frais mensuels sont de combien ?" },
          { tr: "Quatre euros par mois, gratuits si vous avez moins de trente ans." }
        ]
      },
      {
        q: "Complète les questions au conseiller.",
        tr: "Quelles sont les commissions sur les virements ? Et la reconduction est-elle automatique ?"
      },
      { tr: "Je dois faire un virement international." },
      { tr: "Les frais sont de quatre euros par mois, carte comprise." },
      { tr: "Je voudrais savoir s'il y a un engagement de durée." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Vivre en Italie",
    title: "Réclamations et droits",
    objectives: [
      "faire une réclamation en personne et par écrit",
      "citer le contrat ou la loi",
      "monter d'un cran poliment mais fermement"
    ],
    theory: [
      {
        h: "Ce qui fait qu'une réclamation marche",
        p: "Une réclamation italienne fonctionne au mieux quand elle porte quatre choses : <b>des faits datés</b>, <b>une référence au contrat ou à la loi</b>, <b>une demande précise</b> et <b>un délai</b>. L'émotion l'affaiblit, les détails la renforcent."
      },
      {
        h: "Les formules écrites",
        list: [
          "<em>Con la presente segnalo che…</em> — par la présente je signale que…",
          "<em>Come da contratto…</em> — conformément au contrat…",
          "<em>Chiedo pertanto…</em> — je demande par conséquent…",
          "<em>In mancanza di riscontro entro X giorni…</em> — à défaut de réponse sous X jours…"
        ]
      },
      {
        h: "Les outils d'escalade",
        p: "La <em>raccomandata A/R</em> (lettre recommandée avec accusé de réception) et la <strong>PEC</strong> (<em>posta elettronica certificata</em>, courriel ayant la valeur juridique d'un recommandé) sont les étapes suivantes habituelles. La recommandée te sera familière ; la PEC beaucoup moins, car en Italie presque tout le monde en a une. Associations de consommateurs : <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "La phrase <em>Mi riservo di adire le vie legali</em> (« je me réserve le droit d'engager une action en justice ») est ferme mais tout à fait conventionnelle comme clôture. En italien, elle ne se lit pas comme une agression."
      }
    ],
    grammar: {
      title: "La langue de la réclamation",
      table: {
        head: ["fonction", "formule", "en français"],
        rows: [
          ["signaler", "Con la presente segnalo che…", "Par la présente je signale que…"],
          ["fondement", "Come da contratto / ai sensi di legge", "Conformément au contrat / à la loi"],
          ["demande", "Chiedo il rimborso / la sostituzione.", "Je demande le remboursement / le remplacement."],
          ["délai", "entro quindici giorni", "sous quinze jours"],
          ["escalade", "Mi riservo di adire le vie legali.", "Je me réserve d'engager une action en justice."],
          ["en personne", "Vorrei parlare con un responsabile.", "Je voudrais parler à un responsable."]
        ]
      },
      examples: [
        { tr: "Le produit est arrivé endommagé." },
        { tr: "Je voudrais déposer une réclamation." },
        { tr: "J'ai droit à un remboursement sous quatorze jours." },
        { tr: "Conformément au contrat, le service devait être actif dès le premier." },
        { tr: "Je vous envoie la documentation ci-jointe." },
        { tr: "Dans l'attente de votre réponse." }
      ]
    },
    vocab: [
      "réclamation",
      "déposer une réclamation",
      "remboursement",
      "remplacement",
      "endommagé",
      "défectueux",
      "garantie",
      "responsable",
      "lettre recommandée",
      "réponse, retour",
      "avoir droit à",
      "par conséquent"
    ],
    exercises: [
      { q: "Associe.", pairs: ["remboursement", "défectueux", "garantie", "réponse"] },
      { q: "Complète : « Vorrei ___ un reclamo. »" },
      { q: "Complète : « Ho ___ al rimborso. » (j'ai droit)" },
      {
        q: "Qu'est-ce que la PEC ?",
        opts: ["Un type de virement", "Un courriel ayant valeur de recommandé", "Un numéro d'identification"]
      },
      { q: "« Le produit est arrivé endommagé, je demande un remboursement. »" },
      {
        q: "Complète la lettre.",
        tr: "Par la présente je signale que le service ne fonctionne pas. Conformément au contrat, je demande un remboursement sous quinze jours."
      },
      { tr: "Je voudrais parler à un responsable." },
      {
        q: "Quel élément renforce le plus une réclamation italienne ?",
        opts: [
          "Montrer à quel point tu es en colère",
          "Des dates, une référence au contrat et une demande précise",
          "Répéter la demande trois fois"
        ]
      },
      { tr: "Conformément au contrat, le service devait être actif dès le premier du mois." },
      { tr: "Je voudrais déposer une réclamation : le produit est défectueux." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Vivre en Italie",
    title: "Le travail et les types de contrat",
    objectives: [
      "comprendre les contrats de travail italiens",
      "parler des conditions de travail",
      "poser des questions sur le salaire et les congés"
    ],
    theory: [
      {
        h: "Les types de contrat",
        list: [
          "<b>tempo indeterminato</b> — le CDI, celui que tout le monde vise",
          "<b>tempo determinato</b> — le CDD, avec des limites au nombre de renouvellements",
          "<b>partita IVA</b> — le travail indépendant : tu factures et paies tes propres cotisations",
          "<b>apprendistato / tirocinio</b> — apprentissage ou stage, en général pour les jeunes"
        ]
      },
      {
        h: "Le salaire : net, brut et le treizième",
        p: "Les Italiens parlent du salaire en <b>net mensuel</b> et en <em>RAL</em> (<em>retribuzione annua lorda</em>, ton brut annuel). S'y ajoute <strong>la tredicesima</strong>, un treizième mois versé en décembre, et dans certains secteurs <em>la quattordicesima</em> en juillet. Le treizième mois te parlera ; le quatorzième est la nouveauté."
      },
      {
        h: "Congés et absences",
        p: "<em>Le ferie</em> sont les congés payés (en général 26 jours ouvrables), <em>i permessi</em> des heures d'absence autorisées, <em>la malattia</em> l'arrêt maladie. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) est la convention collective de branche, qui fixe les minima."
      },
      {
        tip: "Demander <em>Qual è la RAL prevista?</em> en entretien est parfaitement normal et attendu. Ce n'est pas malpoli."
      }
    ],
    grammar: {
      title: "Travail et salaire",
      table: {
        head: ["italien", "français", "note"],
        rows: [
          ["tempo indeterminato", "CDI", "le plus stable"],
          ["tempo determinato", "CDD", "avec une date de fin"],
          ["partita IVA", "travail indépendant", "cotisations à ta charge"],
          ["la tredicesima", "treizième mois", "versé en décembre"],
          ["le ferie", "congés payés", "jours ouvrables"],
          ["il CCNL", "convention collective", "conditions minimales"]
        ]
      },
      examples: [
        { tr: "J'ai un CDI." },
        { tr: "Je suis indépendant depuis trois ans." },
        { tr: "Quel est le brut annuel pour ce poste ?" },
        { tr: "Il y a combien de jours de congés ?" },
        { tr: "La période d'essai est de trois mois." },
        { tr: "Je demande une absence pour raisons personnelles." }
      ]
    },
    vocab: [
      "CDI",
      "travail indépendant",
      "salaire net",
      "brut annuel",
      "treizième mois",
      "congés payés",
      "heures d'absence autorisées",
      "période d'essai",
      "entretien d'embauche",
      "CV",
      "embaucher",
      "démissionner"
    ],
    exercises: [
      { q: "Associe.", pairs: ["CDI", "treizième mois", "congés payés", "période d'essai"] },
      { q: "Qu'est-ce que la RAL ?", opts: ["Le net mensuel", "Le brut annuel", "Un type de contrat"] },
      { q: "Qui paie les cotisations avec une partita IVA ?", opts: ["L'employeur", "Le travailleur", "Personne"] },
      { q: "Complète : « Il ___ di prova è di tre mesi. »" },
      { q: "« Il y a combien de jours de congés ? »" },
      {
        q: "Complète les questions d'entretien.",
        tr: "Quel est le brut annuel proposé ? Et combien dure la période d'essai ?"
      },
      { q: "« Licenziarsi » veut dire :", opts: ["licencier quelqu'un", "démissionner", "obtenir une augmentation"] },
      { tr: "J'ai un CDI depuis deux ans." },
      { tr: "Le treizième mois est versé en décembre avec le salaire." },
      { tr: "Je voudrais connaître le brut annuel pour ce poste." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Test",
    title: "Test de l'unité 3",
    objectives: ["vérifier le vocabulaire administratif, bancaire et professionnel"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      {
        q: "Le codice fiscale sert :",
        opts: ["aux impôts seulement", "à presque toutes les démarches", "à voyager"]
      },
      { q: "Une marca da bollo s'achète :", opts: ["à la mairie", "au bureau de tabac", "à la banque"] },
      { q: "« Compili il modulo in ___. »" },
      { q: "« Vorrei aprire un ___ corrente. »" },
      { q: "« Vorrei ___ un reclamo. »" },
      { q: "« Ho ___ al rimborso. »" },
      { q: "La RAL est :", opts: ["le net mensuel", "le brut annuel", "le treizième mois"] },
      { q: "Associe.", pairs: ["résiliation", "virement", "congés payés", "état civil"] },
      { tr: "Pour s'inscrire comme résident il faut une pièce d'identité et un bail." },
      { tr: "Je voudrais demander un codice fiscale et m'inscrire comme résident." }
    ]
  },
  "unit:b1-u04": { title: "Médias et argumentation", grammarNote: "discours indirect · connecteurs · la langue de la presse" },
  "lesson:b1-u04-l1": {
    theme: "Médias",
    title: "Le discours indirect",
    objectives: [
      "transposer un énoncé au discours indirect",
      "décaler les temps correctement",
      "changer les mots de temps et de lieu"
    ],
    theory: [
      {
        h: "Le décalage des temps",
        p: "Quand le verbe introducteur est au passé, les temps du propos rapporté reculent d'un cran : <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>. Les deux premiers correspondent à ta concordance."
      },
      {
        contrast: "Le troisième, non. Tu dis « il a dit qu'il <b>viendrait</b> », au conditionnel présent. L'italien exige le conditionnel <b>passé</b> : <em>Ha detto che <b>sarebbe venuto</b></em>. « Ha detto che verrebbe » est agrammatical. C'est l'erreur la plus tenace du francophone à ce niveau, précisément parce que ta forme a l'air de convenir."
      },
      {
        h: "Les mots de temps et de lieu changent aussi",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Sans ça le récit devient incohérent, comme en français."
      },
      {
        h: "Ordres et questions",
        p: "Un impératif devient <em>di</em> + infinitif : <em>« Vieni! » → Mi ha detto di venire.</em> Une question fermée prend <em>se</em> : <em>« Vieni? » → Mi ha chiesto se venivo.</em>"
      }
    ],
    grammar: {
      title: "Les transformations du discours indirect",
      table: {
        head: ["direct", "indirect", "exemple"],
        rows: [
          ["presente", "imperfetto", "« Lavoro » → Disse che lavorava."],
          ["passato prossimo", "trapassato", "« Ho finito » → Disse che aveva finito."],
          ["futuro", "condizionale passato", "« Verrò » → Disse che sarebbe venuto."],
          ["impératif", "di + infinitif", "« Vieni! » → Mi disse di venire."],
          ["question fermée", "se + proposition", "« Vieni? » → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "« Penso che sia » → Disse che pensava che fosse."]
        ]
      },
      examples: [
        { tr: "Marco a dit qu'il était fatigué." },
        { tr: "Il m'a dit qu'il arriverait le lendemain." },
        { tr: "Il a demandé si je pouvais l'aider." },
        { tr: "Il m'a dit de ne pas m'inquiéter." },
        { tr: "Il a expliqué qu'il avait déjà essayé." },
        { tr: "Il a ajouté que ce jour-là était impossible." }
      ]
    },
    vocab: [
      "dire que",
      "demander si",
      "expliquer",
      "ajouter",
      "répondre",
      "soutenir, affirmer",
      "déclarer",
      "démentir",
      "la veille / le lendemain",
      "alors, à ce moment-là",
      "à cet instant",
      "d'après ce qui a été dit"
    ],
    exercises: [
      {
        q: "« Verrò domani » au discours indirect après un passé :",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "« Lavoro molto » → « Ha detto che ___ molto. »" },
      { q: "« Ho finito » → « Ha detto che ___ finito. »" },
      { q: "« Vieni! » → « Mi ha detto ___ venire. »" },
      { q: "« Vieni? » → « Mi ha chiesto ___ venivo. »" },
      { q: "Transforme.", tr: "« Je t'appelle demain » → Il m'a dit qu'il m'appellerait le lendemain." },
      {
        q: "Associe les mots de temps et de lieu décalés.",
        pairs: ["ce jour-là", "la veille", "le lendemain", "là-bas"]
      },
      { q: "« Il m'a dit de ne pas m'inquiéter. »" },
      { tr: "Il a expliqué qu'il avait déjà essayé plusieurs fois sans succès." },
      { tr: "Il m'a dit qu'il arriverait le lendemain." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Médias",
    title: "Lire la presse",
    objectives: [
      "comprendre comment se construit un article",
      "repérer la langue de l'information non confirmée",
      "résumer un texte avec tes mots"
    ],
    theory: [
      {
        h: "Le conditionnel journalistique",
        p: "Les médias italiens emploient le conditionnel pour l'information <b>non confirmée</b> : <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> veut dire « le ministre aurait signé, mais ce n'est pas confirmé ». Ce n'est pas le journaliste qui spécule, c'est un signal que la source n'est pas officielle."
      },
      {
        contrast: "C'est exactement ton conditionnel journalistique, avec la même valeur et la même forme : « le ministre aurait signé ». Tu lis donc ces articles sans traduire. Attention seulement à ne pas l'étendre à l'oral : hors de la presse, il sonne aussi bizarrement en italien que chez toi."
      },
      {
        h: "Comment un article est composé",
        p: "<em>Il titolo</em> (le titre), <em>l'occhiello</em> (le surtitre), <em>il sommario</em> (le chapô), <em>il corpo</em> (le corps), <em>la didascalia</em> (la légende). Les titres italiens sont souvent elliptiques et sans verbe, comme les tiens."
      },
      {
        h: "La nominalisation",
        p: "La langue de presse transforme les verbes en noms : <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Ça densifie le texte et le rend ardu au début ; reconnaître le mécanisme aide beaucoup."
      },
      {
        tip: "Les grands quotidiens : <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (économie), <em>Il Post</em> (lisible, bon point de départ pour un apprenant)."
      }
    ],
    grammar: {
      title: "La langue de la presse",
      table: {
        head: ["trait", "exemple", "sens"],
        rows: [
          ["conditionnel", "Avrebbe dichiarato che…", "aurait déclaré"],
          ["nominalisation", "l'approvazione della riforma", "l'adoption de la réforme"],
          ["passif", "La legge è stata approvata.", "la loi a été adoptée"],
          ["titre elliptique", "Governo verso la crisi", "le gouvernement vers la crise"],
          ["sources", "secondo fonti vicine a…", "selon des sources proches de…"],
          ["chiffres", "in calo / in aumento", "en baisse / en hausse"]
        ]
      },
      examples: [
        { tr: "Selon des sources internes, l'entreprise aurait déjà décidé." },
        { tr: "La réforme a été adoptée par 210 voix pour." },
        { tr: "Les chiffres de l'emploi sont en hausse." },
        { tr: "L'article soutient que le problème est structurel." },
        { tr: "Le journal a démenti l'information." },
        { tr: "En résumé : la question centrale est le financement." }
      ]
    },
    vocab: [
      "quotidien",
      "hebdomadaire",
      "information, nouvelle",
      "source",
      "démentir",
      "soutenir, affirmer",
      "en hausse / en baisse",
      "enquête, reportage",
      "éditorial",
      "titre",
      "résumer",
      "fiable"
    ],
    exercises: [
      {
        q: "« Il ministro avrebbe firmato l'accordo » veut dire :",
        opts: [
          "Le ministre a signé l'accord",
          "Le ministre aurait signé, non confirmé",
          "Le ministre signerait s'il pouvait"
        ]
      },
      {
        q: "« L'approvazione della legge » est une nominalisation de :",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Complète : « I dati sono in ___. » (en hausse)" },
      { q: "Complète : « Il giornale ha ___ la notizia. » (démenti)" },
      { q: "Associe.", pairs: ["quotidien", "source", "enquête", "fiable"] },
      {
        q: "« Secondo fonti vicine al governo » signale :",
        opts: ["une information officielle", "une information non officielle", "l'avis de la rédaction"]
      },
      {
        q: "Complète la phrase de presse.",
        tr: "Selon des sources internes l'entreprise avait déjà décidé, mais le porte-parole a démenti l'information."
      },
      { q: "« La réforme a été adoptée la semaine dernière. »" },
      { tr: "Selon le journal, le gouvernement aurait déjà préparé sa réponse." },
      { tr: "L'article soutient que le problème est structurel." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Communication",
    title: "Tenir une argumentation",
    objectives: [
      "enchaîner les arguments avec des connecteurs",
      "construire un propos ordonné",
      "éviter la monotonie du « et… et… et… »"
    ],
    theory: [
      {
        h: "Un connecteur annonce ce qui vient",
        p: "Sans connecteurs, un texte est une liste de phrases. <em>Inoltre</em> annonce un ajout, <em>tuttavia</em> un retournement, <em>quindi</em> une conclusion, <em>infatti</em> une justification. Choisir le connecteur fait partie de l'argument, ce n'est pas un ornement."
      },
      {
        h: "Des paires faciles à confondre",
        list: [
          "<em>infatti</em> (en effet, confirme) face à <em>invece</em> (en revanche, oppose)",
          "<em>anzi</em> (d'ailleurs, renforce ou corrige) face à <em>però</em> (mais)",
          "<em>quindi</em> (donc, conclut) face à <em>allora</em> (alors, aussi mot de remplissage)",
          "<em>comunque</em> (en tout cas) face à <em>tuttavia</em> (toutefois, formel)"
        ]
      },
      {
        contrast: "Bonne nouvelle sur <em>infatti</em> : c'est ton « en effet », qui confirme, et non ton « en fait », qui rectifie. Le faux ami est ailleurs : <em>anzi</em> ne veut pas dire « avant », et <em>allora</em> n'est pas seulement « alors » logique, c'est aussi le mot de remplissage que tu emploies pour reprendre ton souffle."
      },
      {
        h: "Un squelette pour une courte argumentation",
        p: "<em>Anzitutto…</em> (tout d'abord) → <em>Inoltre…</em> (de plus) → <em>Tuttavia…</em> (toutefois) → <em>In conclusione…</em>. Ce squelette suffit pour l'oral d'un examen B1 et pour un court texte écrit."
      }
    ],
    grammar: {
      title: "Les connecteurs par fonction",
      table: {
        head: ["fonction", "connecteurs", "exemple"],
        rows: [
          ["ajout", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["opposition", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["cause", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["conséquence", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["explication", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["conclusion", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        { tr: "Tout d'abord le coût est trop élevé." },
        { tr: "De plus nous n'avons pas assez de temps." },
        { tr: "Toutefois il existe une alternative." },
        { tr: "Le projet est complexe, donc il faut plus de moyens." },
        { tr: "Ce n'est pas cher, au contraire c'est avantageux." },
        { tr: "En conclusion, je propose de reporter." }
      ]
    },
    vocab: [
      "tout d'abord",
      "de plus",
      "toutefois",
      "en revanche",
      "d'ailleurs ; au contraire",
      "donc",
      "par conséquent",
      "c'est-à-dire",
      "en effet",
      "d'un autre côté",
      "en conclusion",
      "en tout cas"
    ],
    exercises: [
      { q: "« Non è caro, ___ è conveniente. » (au contraire)", opts: ["però", "anzi", "invece"] },
      { q: "« Il progetto è complesso, ___ servono più risorse. »", opts: ["perciò", "invece", "cioè"] },
      { q: "Complète : « ___ il costo è troppo alto. » (tout d'abord)" },
      { q: "Complète : « ___, propongo di rimandare. » (en conclusion)" },
      { q: "Associe connecteur et fonction.", pairs: ["ajout", "opposition", "conséquence", "explication"] },
      {
        q: "Construis l'argument.",
        tr: "Tout d'abord le prix est élevé. De plus nous n'avons pas le temps. Donc je propose de reporter."
      },
      {
        q: "Quel connecteur appartient à l'écrit plutôt qu'à l'oral familier ?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "Toutefois il existe une alternative qui mérite d'être examinée." },
      { tr: "D'abord le coût, ensuite les délais : en conclusion, ça n'en vaut pas la peine." },
      { tr: "D'un côté c'est vrai, de l'autre les chiffres disent le contraire." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Communication",
    title: "Une prise de parole plus longue",
    objectives: [
      "construire une réponse de deux minutes sur un sujet",
      "appuyer une opinion sur un exemple et des chiffres",
      "conclure"
    ],
    theory: [
      {
        h: "Une structure qui marche toujours",
        list: [
          "<b>thèse</b> : <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argument 1 + exemple</b> : <em>Anzitutto… Per esempio…</em>",
          "<b>argument 2</b> : <em>Inoltre…</em>",
          "<b>contre-argument et réponse</b> : <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>conclusion</b> : <em>In conclusione…</em>"
        ]
      },
      {
        h: "Concéder un point te rend plus fort",
        p: "Une réponse qui accorde quelque chose à l'autre camp avant de le réfuter sonne plus solide qu'une réponse à sens unique. La formule : <em>È vero che…, tuttavia…</em>, ou <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "Les mots de remplissage font gagner du temps",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. Ce n'est pas du bavardage : ils te maintiennent fluide pendant que tu cherches un mot. Les examinateurs les comptent comme stratégie de communication."
      },
      {
        tip: "Ne traduis pas du français phrase par phrase. Construis des phrases italiennes plus simples et relie-les par des connecteurs : le résultat est plus fluide qu'un rendu fidèle d'une longue période française."
      }
    ],
    grammar: {
      title: "Le squelette d'une réponse",
      table: {
        head: ["étape", "formule", "en français"],
        rows: [
          ["thèse", "Ritengo che… / Secondo me…", "J'estime que… / À mon avis…"],
          ["argument", "Anzitutto… / Inoltre…", "Tout d'abord… / De plus…"],
          ["exemple", "Per esempio… / Basti pensare a…", "Par exemple… / Il suffit de penser à…"],
          ["contre-argument", "C'è chi sostiene che…", "Certains soutiennent que…"],
          ["réponse", "Tuttavia… / Va detto però che…", "Toutefois… / Il faut dire cependant que…"],
          ["conclusion", "In conclusione… / Per questo…", "En conclusion… / C'est pourquoi…"]
        ]
      },
      examples: [
        { tr: "J'estime que le télétravail est utile, mais pas pour tout le monde." },
        { tr: "Tout d'abord il réduit le temps de trajet." },
        { tr: "Il suffit de penser à ceux qui vivent en banlieue." },
        { tr: "Certains soutiennent qu'il réduit la collaboration." },
        { tr: "Il faut dire cependant que ça dépend de l'organisation." },
        { tr: "En conclusion, la solution hybride me paraît la plus équilibrée." }
      ]
    },
    vocab: [
      "estimer, considérer",
      "soutenir, affirmer",
      "il suffit de penser à",
      "il faut dire que",
      "certains disent que",
      "en un certain sens",
      "disons que",
      "équilibré",
      "sujet, argument",
      "avantage / inconvénient",
      "à la longue",
      "ça en vaut la peine"
    ],
    exercises: [
      { q: "Complète : « ___ che il problema sia strutturale. » (j'estime)" },
      { q: "Complète : « C'è ___ sostiene il contrario. » (certains)" },
      { q: "Après « ritengo che » vient :", opts: ["l'indicatif", "le congiuntivo", "l'infinitif"] },
      {
        q: "Associe.",
        pairs: ["il suffit de penser à", "il faut dire", "à la longue", "ça en vaut la peine"]
      },
      {
        q: "Complète la réponse.",
        tr: "J'estime que le travail hybride est la meilleure solution. Tout d'abord il réduit les coûts. Toutefois ça dépend du secteur."
      },
      { q: "« Il faut dire cependant que ça dépend de l'organisation. »" },
      { tr: "En conclusion, la solution hybride me paraît la plus équilibrée." },
      {
        q: "Pourquoi vaut-il la peine d'inclure un contre-argument ?",
        opts: [
          "Pour allonger la réponse",
          "Parce que la réponse sonne plus solide et plus mûre",
          "Parce que la grammaire l'exige"
        ]
      },
      { tr: "Certains soutiennent que ça réduit la collaboration, mais les chiffres ne le confirment pas." },
      { tr: "J'estime que ça vaut la peine d'essayer, au moins pendant six mois." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Examen",
    title: "Examen final de B1",
    objectives: ["vérifier le congiuntivo, les pronoms, le discours indirect et l'argumentation"],
    theory: [{ p: "Douze tâches sur tout le niveau. On valide à 70 %." }],
    exercises: [
      {  },
      { q: "« Penso che tu ___ ragione. »" },
      { q: "« Benché ___ tardi, esco. »" },
      { q: "« Hai dato il libro a Marco? — Sì, ___ ho dato. »" },
      { q: "« Non ___ la faccio più. »" },
      { q: "« La città in ___ vivo. »" },
      {
        q: "« Verrò domani » → discours indirect :",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "« Il ministro avrebbe firmato » veut dire :",
        opts: ["il a signé, c'est sûr", "il aurait signé", "il signerait"]
      },
      { q: "« ___, propongo di rimandare. » (en conclusion)" },
      { q: "« Je ne crois pas qu'ils aient compris le problème. »" },
      { tr: "Il m'a dit qu'il passerait le lendemain, mais il n'est pas venu." },
      { tr: "Je pense que c'est une bonne solution, même si elle n'est pas parfaite." }
    ]
  }
});
