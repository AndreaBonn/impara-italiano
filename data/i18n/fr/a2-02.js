/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/a2-02.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a2-u05": { title: "Appartements et quartiers", grammarNote: "le ci locatif · annonces · décrire un lieu" },
  "lesson:a2-u05-l1": {
    theme: "Logement",
    title: "Annonces et recherche d'appartement",
    objectives: [
      "lire une annonce de location italienne",
      "poser des questions sur le loyer, les charges et la caution",
      "décrire ce que tu cherches"
    ],
    theory: [
      {
        h: "Les annonces s'écrivent en abrégé",
        p: "<em>Bilocale</em> est un appartement avec une chambre plus le séjour, pas « deux chambres ». Ce qui compte, c'est le <b>nombre de pièces de vie, séjour compris</b> : <em>monolocale</em> (studio), <em>bilocale</em>, <em>trilocale</em>. La cuisine et la salle de bain ne comptent pas."
      },
      {
        contrast: "Tu as déjà exactement ce système : le T2 français, c'est le bilocale italien, séjour plus une chambre, cuisine et salle de bain non comptées. Là où un anglophone doit tout réapprendre, tu n'as qu'à changer d'étiquette."
      },
      {
        h: "Trois chiffres sur lesquels il faut questionner",
        list: [
          "<b>l'affitto</b> — le loyer proprement dit",
          "<b>le spese condominiali</b> — les charges de copropriété (souvent 50 à 150 euros par mois, pas toujours comprises)",
          "<b>la cauzione</b> — la caution, en général deux ou trois mois de loyer"
        ]
      },
      {
        tip: "Abréviations des annonces : <em>mq</em> (mètres carrés), <em>p. terra</em> (rez-de-chaussée), <em>ammobiliato/arredato</em> (meublé), <em>spese escluse</em> (charges non comprises), <em>rif.</em> (référence). La numérotation des étages est la tienne : <em>piano terra</em> est le rez-de-chaussée et <em>primo piano</em> le premier."
      }
    ],
    grammar: {
      title: "Vocabulaire des annonces",
      table: {
        head: ["abréviation / mot", "sens", "note"],
        rows: [
          ["monolocale", "studio", "une seule pièce"],
          ["bilocale", "T2", "séjour + une chambre"],
          ["arredato", "meublé", "le contraire : vuoto"],
          ["spese escluse", "charges non comprises", "ajouter la copropriété"],
          ["cauzione", "caution", "en général 2 ou 3 mois"],
          ["luminoso", "lumineux", "l'adjectif favori des annonces"]
        ]
      },
      examples: [
        { tr: "Je cherche un T2 meublé dans le quartier universitaire." },
        { tr: "Le loyer mensuel charges comprises, c'est combien ?" },
        { tr: "Les charges de copropriété sont de combien ?" },
        { tr: "La caution est de trois mois de loyer." },
        { tr: "C'est un bail 4+4 ou un bail court ?" },
        { tr: "Les animaux sont acceptés ?" }
      ]
    },
    vocab: [
      "loyer",
      "louer",
      "propriétaire",
      "locataire",
      "charges de copropriété",
      "caution",
      "bail",
      "meublé / vide",
      "lumineux",
      "rez-de-chaussée",
      "chauffage",
      "agence immobilière"
    ],
    exercises: [
      {
        q: "Un « bilocale » est un appartement :",
        opts: ["avec deux chambres", "avec un séjour et une chambre", "sur deux niveaux"]
      },
      { q: "« Spese escluse » veut dire :", opts: ["charges comprises", "charges en plus", "sans caution"] },
      { q: "Complète : « La ___ è di tre mensilità. » (la caution)" },
      { q: "Associe.", pairs: ["locataire", "propriétaire", "meublé", "rez-de-chaussée"] },
      { q: "« Les charges de copropriété sont de combien ? »" },
      {
        q: "Complète les questions au propriétaire.",
        tr: "Le loyer mensuel, c'est combien ? Les charges sont comprises ? Et la caution ?"
      },
      { tr: "Je cherche un T2 meublé dans le centre." },
      {
        q: "Un bail « 4+4 » est :",
        opts: ["de quatre mois", "de quatre ans avec reconduction automatique", "pour quatre locataires"]
      },
      { tr: "T2 lumineux, meublé, deuxième étage, charges non comprises." },
      { tr: "Je voudrais savoir de combien sont les charges de copropriété." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Logement",
    title: "La particule ci",
    objectives: [
      "remplacer une expression de lieu par ci",
      "reconnaître ci dans les expressions figées",
      "distinguer le ci de lieu du ci qui veut dire « nous »"
    ],
    theory: [
      {
        h: "Ci remplace un lieu",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Ici <em>ci</em> veut dire « y » et remplace toute l'expression de lieu."
      },
      {
        contrast: "C'est ton <b>y</b>, exactement : même valeur, même place devant le verbe, même caractère obligatoire. « J'y vais demain » se calque sur <em>ci vado domani</em> sans rien changer. Tu es le seul apprenant de ce cours à avoir déjà cette particule ; profite-en."
      },
      {
        h: "Ci remplace aussi « a + chose »",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> (« j'y pense tout le temps »). Là encore ton <em>y</em> fait le même travail. Attention : avec des personnes c'est différent, <em>penso <b>a lei</b></em>, pas « ci penso »."
      },
      {
        h: "Ci dans les verbes fusionnés",
        list: [
          "<em>volerci</em> — falloir : <em>Ci vogliono due ore.</em> (« il faut deux heures »)",
          "<em>metterci</em> — mettre du temps : <em>Ci metto un'ora.</em> (« j'y mets une heure »)",
          "<em>farcela</em> — y arriver : <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — avoir un rapport : <em>Che c'entra?</em> (« qu'est-ce que ça vient faire là ? »)"
        ]
      },
      {
        trap: "La même forme <em>ci</em> veut aussi dire « nous » : <em>ci vedono</em> (ils nous voient), <em>ci hanno detto</em> (ils nous ont dit). Le contexte et le verbe tranchent."
      }
    ],
    grammar: {
      title: "Les valeurs de ci",
      table: {
        head: ["fonction", "exemple", "en français"],
        rows: [
          ["lieu", "Ci vado domani.", "J'y vais demain."],
          ["a + chose", "Ci penso io.", "Je m'en occupe."],
          ["volerci", "Ci vogliono due ore.", "Il faut deux heures."],
          ["metterci", "Ci metto mezz'ora.", "J'y mets une demi-heure."],
          ["farcela", "Ce la faccio!", "J'y arrive !"],
          ["nous", "Ci hanno invitati.", "Ils nous ont invités."]
        ]
      },
      examples: [
        { tr: "Tu es déjà allé en Sicile ? — Oui, j'y suis allé deux fois." },
        { tr: "Il faut combien de temps d'ici à la gare ?" },
        { tr: "J'y mets vingt minutes à pied." },
        { tr: "Je n'en peux plus, je suis épuisé." },
        { tr: "Qu'est-ce que ça vient faire avec le bail ?" },
        { tr: "Je vais au marché tous les samedis." }
      ]
    },
    vocab: [
      "j'y vais",
      "il faut (du temps)",
      "j'y mets",
      "y arriver",
      "qu'est-ce que ça vient faire là ?",
      "le déménagement",
      "voisin",
      "la copropriété",
      "porte d'entrée",
      "interphone",
      "facture",
      "plombier"
    ],
    exercises: [
      { q: "« Vai a Roma? — Sì, ___ vado domani. »", opts: ["la", "ci", "ne"] },
      { q: "Complète : « Quanto ___ vuole da qui alla stazione? »" },
      { q: "Complète : « ___ metto venti minuti. »" },
      {
        q: "« Ci vogliono due ore » veut dire :",
        opts: ["Nous voulons deux heures", "Il faut deux heures", "Nous avons deux heures"]
      },
      {
        q: "« Non ce la faccio più » veut dire :",
        opts: ["Je ne le fais plus", "Je n'en peux plus", "Il n'y en a plus"]
      },
      {
        q: "Dans quelles phrases « ci » désigne-t-il un lieu ?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Complète.", tr: "— Le trajet prend combien de temps ? — J'y mets une demi-heure en métro." },
      { q: "« Je vais au marché tous les samedis. »" },
      { tr: "Il faut au moins deux heures pour finir le déménagement." },
      { tr: "Je vais au centre à pied, j'y mets vingt minutes." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Logement",
    title: "Décrire l'intérieur",
    objectives: [
      "nommer les pièces et les meubles",
      "décrire la disposition d'un appartement",
      "employer les prépositions de position"
    ],
    theory: [
      {
        h: "Un appartement italien suit une autre logique",
        p: "<em>Il soggiorno</em> (le séjour) fait souvent aussi salle à manger ; la cuisine tend à être une petite pièce à part (une <em>cucina abitabile</em> est une cuisine où l'on peut manger). <em>Il ripostiglio</em> est le cagibi, plus proche de ton débarras que d'un dressing."
      },
      {
        h: "Balcone, terrazzo, loggia",
        p: "<em>Il balcone</em> avance en saillie, <em>la loggia</em> est en retrait dans le bâtiment, <em>il terrazzo</em> est grand et le plus souvent sur le toit. Dans les annonces, la différence se lit dans le prix."
      },
      {
        h: "Les prépositions de la disposition",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Toutes appellent <em>a</em> ou <em>di</em>, donc les prépositions contractées reviennent : <em>accanto <b>alla</b> finestra</em>."
      },
      {
        tip: "Les étages se comptent depuis le <em>piano terra</em>, exactement comme chez toi : <em>primo piano</em> est ton premier étage, celui au-dessus du rez-de-chaussée. Rien à recalculer."
      }
    ],
    grammar: {
      title: "Pièces et meubles",
      table: {
        head: ["pièce", "meubles typiques", "phrase d'exemple"],
        rows: [
          ["il soggiorno", "il divano, la poltrona", "Il divano è di fronte alla finestra."],
          ["la cucina", "il frigorifero, il forno", "Il forno è sotto il piano cottura."],
          ["la camera da letto", "il letto, l'armadio", "L'armadio è accanto al letto."],
          ["il bagno", "la doccia, il lavandino", "La doccia è in fondo."],
          ["lo studio", "la scrivania, la libreria", "La scrivania è vicino alla finestra."],
          ["il balcone", "—", "Il balcone dà sul cortile."]
        ]
      },
      examples: [
        { tr: "L'appartement est au troisième étage, sans ascenseur." },
        { tr: "La cuisine est petite, mais on peut y manger." },
        { tr: "Le balcon donne sur la cour intérieure." },
        { tr: "Il y a un cagibi à côté de l'entrée." },
        { tr: "Les fenêtres donnent au sud, c'est très lumineux." },
        { tr: "Le chauffage est individuel." }
      ]
    },
    vocab: [
      "séjour",
      "chambre",
      "salle de bain",
      "couloir",
      "cagibi, débarras",
      "canapé",
      "armoire",
      "bureau (meuble)",
      "réfrigérateur",
      "machine à laver",
      "donner sur (une fenêtre)",
      "chauffage individuel"
    ],
    exercises: [
      {
        q: "Associe la pièce au meuble.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Complète : « L'armadio è accanto ___ letto. »" },
      { q: "Complète : « Il balcone ___ sul cortile. » (donne sur)" },
      {
        q: "Une « cucina abitabile » est une cuisine :",
        opts: ["avec fenêtre", "assez grande pour y manger", "vendue équipée"]
      },
      { q: "Décris l'appartement.", tr: "Le canapé est en face de la fenêtre, et la bibliothèque est à côté du canapé." },
      { q: "« L'appartement est au troisième étage, sans ascenseur. »" },
      { tr: "Les fenêtres donnent au sud, c'est très lumineux." },
      { q: "Articles :", items: [, , , ] },
      { tr: "La chambre donne sur la cour, elle est donc calme." },
      { tr: "Le séjour est lumineux et on peut manger dans la cuisine." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Logement",
    title: "Les problèmes et comment les signaler",
    objectives: [
      "signaler une panne au propriétaire ou au syndic",
      "décrire ce qui est cassé",
      "organiser une réparation"
    ],
    theory: [
      {
        h: "Trois verbes couvrent la plupart des pannes",
        list: [
          "<b>non funziona</b> — ça ne marche pas (un appareil)",
          "<b>perde</b> — ça fuit (un robinet, un tuyau)",
          "<b>si è rotto/a</b> — ça s'est cassé"
        ]
      },
      {
        h: "Qui paie quoi",
        p: "Dans un bail italien, les <b>petites réparations</b> (<em>manutenzione ordinaria</em>) sont à la charge du locataire, les <b>grosses</b> (<em>straordinaria</em> : la chaudière, l'électricité, la toiture) à celle du propriétaire. La répartition ressemble à la tienne, et il vaut la peine de l'écrire dans le message : <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "Le ton du signalement",
        p: "Un signalement de panne italien est d'ordinaire poli et indirect : <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Un <em>ripari subito!</em> sec joue contre toi : ce n'est pas une culture où la fermeté accélère les choses."
      },
      {
        tip: "<em>Il condominio</em> désigne à la fois l'immeuble et la copropriété comme entité juridique. <em>L'amministratore di condominio</em> est le syndic, à qui l'on signale les problèmes des parties communes."
      }
    ],
    grammar: {
      title: "Signaler une panne",
      table: {
        head: ["problème", "en italien", "en français"],
        rows: [
          ["un appareil", "La lavatrice non funziona.", "La machine à laver ne marche pas."],
          ["l'eau", "Il rubinetto perde.", "Le robinet fuit."],
          ["cassé", "Si è rotta la serratura.", "La serrure est cassée."],
          ["chauffage", "Il riscaldamento non si accende.", "Le chauffage ne s'allume pas."],
          ["électricité", "È saltata la corrente.", "Le courant a sauté."],
          ["signaler", "Volevo segnalarle un problema.", "Je voulais vous signaler un problème."]
        ]
      },
      examples: [
        { tr: "Bonjour, je vous écris parce que la chaudière ne marche plus depuis hier." },
        { tr: "Le robinet de la salle de bain fuit." },
        { tr: "Pourriez-vous envoyer un plombier ?" },
        { tr: "Quand le technicien peut-il venir ?" },
        { tr: "Je suis chez moi après dix-huit heures." },
        { tr: "Merci pour votre rapidité." }
      ]
    },
    vocab: [
      "robinet",
      "fuir",
      "se casser",
      "serrure",
      "chaudière",
      "électricité",
      "sauter (le courant)",
      "plombier",
      "électricien",
      "technicien",
      "signaler",
      "entretien, réparation"
    ],
    exercises: [
      {
        q: "Le robinet fuit. Comment le dit-on ?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Complète : « È ___ la corrente. » (le courant a sauté)" },
      { q: "Complète : « Si è ___ la serratura. » (la serrure s'est cassée)" },
      {
        q: "Associe le corps de métier au problème.",
        pairs: ["un robinet qui fuit", "plus de courant", "une chaudière en panne", "les parties communes"]
      },
      { q: "« Pourriez-vous envoyer un plombier ? »" },
      {
        q: "Rédige le signalement.",
        tr: "Bonjour, je voulais vous signaler que la chaudière ne marche plus depuis hier. Pourriez-vous envoyer un technicien ?"
      },
      {
        q: "Qui paie normalement le remplacement d'une chaudière dans une location ?",
        opts: ["Le locataire", "Le propriétaire (manutenzione straordinaria)", "La copropriété"]
      },
      { tr: "Je suis chez moi après dix-huit heures." },
      { tr: "Le chauffage ne s'allume pas et il fait très froid ici." },
      { tr: "Je voulais signaler que le robinet de la salle de bain fuit." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Test",
    title: "Test de l'unité 5",
    objectives: ["vérifier le vocabulaire du logement et la particule ci"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Bilocale » :", opts: ["deux chambres", "séjour + chambre", "deux niveaux"] },
      { q: "« La ___ è di tre mensilità. »" },
      { q: "« Quanto ___ vuole per arrivare? »" },
      { q: "« ___ metto mezz'ora. »" },
      { q: "« Non ce la faccio più » :", opts: ["Je ne le fais plus", "Je n'en peux plus", "Il n'y en a plus"] },
      { q: "« L'armadio è accanto ___ letto. »" },
      { q: "« Il rubinetto ___. » (fuit)" },
      { q: "Associe.", pairs: ["locataire", "cagibi", "machine à laver", "sauter (courant)"] },
      { tr: "Je cherche un T2 meublé, charges comprises, près du centre." },
      { tr: "C'est à vingt minutes à pied de la gare." }
    ]
  },
  "unit:a2-u06": { title: "Au travail", grammarNote: "le conditionnel de politesse · le si impersonnel · les mails" },
  "lesson:a2-u06-l1": {
    theme: "Travail",
    title: "Le téléphone et les demandes polies",
    objectives: [
      "mener un appel téléphonique",
      "employer le conditionnel pour une demande polie",
      "laisser et prendre un message"
    ],
    theory: [
      {
        h: "Un appel commence par Pronto",
        p: "<strong>Pronto?</strong> est ce que dit la personne qui décroche, à toute heure et quelle que soit la relation. Cela veut littéralement dire « prêt », vestige des standardistes. Ce n'est ni une salutation ni un nom : répondre par son propre nom sonnerait bizarre. Ton « allô » occupe la même case."
      },
      {
        h: "Le conditionnel transforme la demande en offre",
        p: "<em>Può richiamarmi?</em> est correct mais direct. <em><b>Potrebbe</b> richiamarmi?</em> laisse à l'autre la place de refuser, et sonne donc plus poli : c'est ton « pourriez-vous » face à « pouvez-vous ». Même logique que <em>vorrei</em> au lieu de <em>voglio</em>."
      },
      {
        h: "La forme d'un appel professionnel",
        list: [
          "<em>Pronto, sono Anna Smith della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ]
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> (« cela vous dérangerait-il de… ? ») est le degré maximal de politesse dans une demande. Garde-le pour ce qui dérange vraiment."
      }
    ],
    grammar: {
      title: "Les demandes polies",
      table: {
        head: ["niveau", "forme", "en français"],
        rows: [
          ["neutre", "Può richiamarmi?", "Pouvez-vous me rappeler ?"],
          ["poli", "Potrebbe richiamarmi?", "Pourriez-vous me rappeler ?"],
          ["très poli", "Le dispiacerebbe richiamarmi?", "Cela vous dérangerait-il de me rappeler ?"],
          ["sur soi-même", "Vorrei parlare con…", "Je voudrais parler à…"],
          ["une proposition", "Sarebbe possibile…?", "Serait-il possible… ?"],
          ["accepter", "Certo, volentieri.", "Bien sûr, volontiers."]
        ]
      },
      examples: [
        { tr: "Allô ? C'est Anna, j'appelle au sujet de la réunion." },
        { tr: "Pourriez-vous me passer M. Rossi ?" },
        { tr: "Désolé, il est occupé pour le moment." },
        { tr: "Pourriez-vous lui dire que j'ai appelé ?" },
        { tr: "Je vous laisse mon numéro." },
        { tr: "Je rappellerai plus tard, merci." }
      ]
    },
    vocab: [
      "allô ? (au téléphone)",
      "c'est de la part de qui ?",
      "pourriez-vous me passer… ?",
      "il est en réunion",
      "laisser un message",
      "rappeler",
      "un rendez-vous",
      "reporter",
      "annuler",
      "la ligne est occupée",
      "je vous entends mal",
      "pourriez-vous… ?"
    ],
    exercises: [
      {  },
      {
        q: "Quelle demande est la plus polie ?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Complète : « ___ dirgli che ho chiamato? » (pourriez-vous)" },
      { q: "Complète : « ___ il signor Rossi, per favore? » (vous me passez)" },
      { q: "Associe.", pairs: ["il est en réunion", "reporter", "annuler", "rappeler"] },
      { q: "« Je voudrais reporter la réunion. »" },
      {
        q: "Tu appelles une entreprise.",
        setting: "Lundi, dix heures, l'accueil.",
        lines: [
          { tr: "Studio Bianchi, bonjour." },
          {
            tr: "Présente-toi et demande qu'on te passe M. Rossi.",
            answerTr: "Bonjour, c'est Anna Smith. Pourriez-vous me passer M. Rossi ?"
          },
          { tr: "Désolée, il est en réunion en ce moment." },
          { tr: "Demande poliment qu'il te rappelle.", answerTr: "Pourriez-vous lui dire de me rappeler ?" },
          { tr: "Bien sûr. Vous me laissez un numéro ?" }
        ]
      },
      {
        q: "Complète la demande.",
        tr: "Bonjour, je voudrais parler à Mme Bianchi. Si elle est occupée, pourrait-elle me rappeler cet après-midi ?"
      },
      { tr: "Il est occupé pour le moment, voulez-vous laisser un message ?" },
      { tr: "Allô ? C'est Anna. Pourriez-vous me passer M. Rossi ?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Travail",
    title: "La correspondance professionnelle",
    objectives: [
      "écrire un court mail professionnel",
      "connaître les formules d'ouverture et de clôture",
      "ajuster le registre au destinataire"
    ],
    theory: [
      {
        h: "L'ouverture dépend de la distance",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formel, à quelqu'un dont tu connais le nom",
          "<em>Spettabile Azienda,</em> — à une entreprise comme institution",
          "<em>Buongiorno Marco,</em> — semi-formel, à un collègue",
          "<em>Ciao Marco,</em> — informel"
        ]
      },
      {
        h: "La clôture",
        p: "<em>Cordiali saluti</em> est le standard sûr, ton « cordialement ». <em>Distinti saluti</em> est plus froid et plus officiel. <em>A presto</em> ou <em>Grazie e buona giornata</em> conviennent entre collègues. On signe prénom et nom, la fonction en dessous."
      },
      {
        h: "Le corps d'un mail italien est court",
        p: "La correspondance professionnelle italienne ne s'embarrasse pas de longs préambules, et elle est nettement plus directe que la formule française : rien qui ressemble à « je vous prie d'agréer, Madame, l'expression de… ». La structure : motif (<em>Le scrivo in merito a…</em>), le contenu, la demande (<em>Resto in attesa di un suo riscontro</em>), la clôture. Note que <em>Dott.</em> s'emploie pour tout diplômé du supérieur, pas seulement pour les médecins."
      },
      {
        tip: "<em>In allegato</em> = « ci-joint ». <em>Le invio in allegato il documento richiesto</em> est la phrase la plus fréquente du mail professionnel italien."
      }
    ],
    grammar: {
      title: "Le squelette d'un mail",
      table: {
        head: ["partie", "formule", "en français"],
        rows: [
          ["ouverture", "Gentile Dott.ssa Rossi,", "Madame Rossi,"],
          ["motif", "Le scrivo in merito a…", "Je vous écris au sujet de…"],
          ["pièce jointe", "Le invio in allegato…", "Je vous envoie ci-joint…"],
          ["demande", "Resto in attesa di un suo riscontro.", "Dans l'attente de votre retour."],
          ["clôture", "Cordiali saluti,", "Cordialement,"],
          ["informel", "Grazie e a presto,", "Merci et à bientôt,"]
        ]
      },
      examples: [
        { tr: "Madame Rossi, je vous écris au sujet de la proposition d'hier." },
        { tr: "Je vous envoie ci-joint le devis mis à jour." },
        { tr: "Je vous serais reconnaissant de me confirmer avant vendredi." },
        { tr: "Je reste à votre disposition pour toute question." },
        { tr: "Salut Marco, je te joins le fichier dont on a parlé." },
        { tr: "Merci d'avance." }
      ]
    },
    vocab: [
      "Cher, Madame (dans un mail)",
      "au sujet de",
      "ci-joint",
      "devis",
      "confirmer",
      "un retour, une réponse",
      "rester à disposition",
      "cordialement",
      "merci d'avance",
      "échéance",
      "avant (une date)",
      "précision"
    ],
    exercises: [
      {
        q: "Quelle ouverture est la plus formelle ?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Complète : « Le scrivo ___ merito all'offerta. »" },
      { q: "Complète : « Le invio ___ allegato il preventivo. »" },
      { q: "Associe.", pairs: ["devis", "retour", "échéance", "précision"] },
      {
        q: "« Resto a disposizione » veut dire :",
        opts: ["Je reste dans l'entreprise", "Je reste à votre disposition", "J'attends ici"]
      },
      { q: "« Je vous envoie ci-joint le devis mis à jour. »" },
      {
        q: "Complète le mail.",
        tr: "Madame Rossi, je vous écris au sujet de la réunion de jeudi. Dans l'attente de votre retour. Cordialement."
      },
      { tr: "Je vous serais reconnaissant de me confirmer avant vendredi." },
      { tr: "Je vous envoie ci-joint le document demandé ; je reste à votre disposition." },
      { tr: "Madame Rossi, je vous écris au sujet de notre réunion." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Travail",
    title: "Le si impersonnel",
    objectives: [
      "employer si pour les énoncés généraux",
      "distinguer le si impersonnel du si passif",
      "décrire comment les choses se font quelque part"
    ],
    theory: [
      {
        h: "Comme ton « on »",
        p: "<em>In Italia <b>si</b> mangia bene.</em> (« en Italie on mange bien »). La construction <em>si</em> + troisième personne du singulier parle des gens en général sans nommer personne."
      },
      {
        contrast: "Ton « on » est un pronom sujet, l'italien emploie un pronom réfléchi. La conséquence se voit dès qu'un nom suit le verbe : le français garde « on vend des sandwichs » au singulier, l'italien accorde avec la chose et écrit <em>si vendono i panini</em>. Ta forme pronominale « ça se vend » est plus proche : c'est celle-là qu'il faut avoir en tête, pas « on »."
      },
      {
        h: "Si passivante : le verbe s'accorde avec la chose",
        p: "Quand un nom suit le verbe, la forme suit son nombre : <em>Qui <b>si vende</b> il pane</em> (une chose) face à <em>Qui <b>si vendono</b> i panini</em> (plusieurs). Ça a l'air d'une faute et c'est la règle."
      },
      {
        h: "L'adjectif après si passe au pluriel",
        p: "<em>Quando si è <b>stanchi</b>, si lavora male.</em> Le verbe est au singulier mais l'adjectif prend le masculin pluriel, alors que ton « quand on est fatigué » reste au singulier. C'est une vraie bizarrerie, et elle s'apprend telle quelle."
      },
      {
        tip: "Aux temps composés, le <em>si</em> impersonnel prend toujours <em>essere</em> : <em>si è mangiato bene</em>, <em>si è andati via presto</em>."
      }
    ],
    grammar: {
      title: "Si impersonnel et si passif",
      table: {
        head: ["type", "exemple", "note"],
        rows: [
          ["impersonnel", "In Italia si mangia bene.", "pas de nom après le verbe"],
          ["passif sing.", "Qui si vende il pane.", "s'accorde avec « il pane »"],
          ["passif plur.", "Qui si vendono i panini.", "s'accorde avec « i panini »"],
          ["avec un adjectif", "Quando si è stanchi…", "adjectif au pluriel"],
          ["temps composé", "Si è mangiato bene.", "toujours essere"],
          ["réfléchi", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        { tr: "Dans ce bureau on travaille aussi le samedi." },
        { tr: "Comment dit-on « laptop » en italien ?" },
        { tr: "Ici on ne fume pas." },
        { tr: "Dans ce quartier il se vend des appartements." },
        { tr: "Quand on est nouveau, on pose beaucoup de questions." },
        { tr: "On s'y habitue vite." }
      ]
    },
    vocab: [
      "on dit",
      "on fait",
      "on ne peut pas",
      "bureau",
      "réunion",
      "collègue",
      "salaire",
      "vacances",
      "jours de congé",
      "heures supplémentaires",
      "échéance",
      "s'habituer"
    ],
    exercises: [
      {
        q: "« Qui ___ i panini. » (ici on vend des sandwichs)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "Le si passivant s'accorde avec la chose : i panini → pluriel."
      },
      { q: "Complète : « In Italia ___ mangia bene. »" },
      { q: "Complète : « Come ___ dice in italiano? »" },
      {
        q: "« Quando si è stanchi » : pourquoi « stanchi » et pas « stanco » ?",
        opts: ["C'est une faute", "Après si l'adjectif passe au pluriel", "Parce qu'il s'agit vraiment de plusieurs personnes"]
      },
      { q: "Complète les formes.", tr: "Dans ce bureau on travaille beaucoup et on fait souvent des heures supplémentaires." },
      { q: "« Ici on ne fume pas. »" },
      {
        q: "Quelles phrases sont correctes ?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "On s'y habitue vite." },
      { tr: "Dans cette entreprise on travaille beaucoup, mais c'est bien payé." },
      { tr: "Comment dit-on « deadline » en italien ? On dit scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Travail",
    title: "Réunions et accords",
    objectives: [
      "prendre la parole en réunion",
      "proposer et fixer une date",
      "exprimer un accord ou un doute"
    ],
    theory: [
      {
        h: "Interrompre n'est pas impoli",
        p: "Dans la culture de réunion italienne, couper la parole est normal et marque l'intérêt. Attendre une pause nette peut se lire comme n'avoir rien à dire. Formules pour adoucir : <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Accord et doute",
        list: [
          "accord : <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "partiel : <em>In parte sì, però…</em>, <em>Dipende</em>",
          "doute : <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "désaccord : <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Fixer une heure",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. La formule <em>facciamo giovedì</em> (« on dit jeudi ») est la façon standard de clore l'arrangement."
      },
      {
        tip: "<em>Ci sentiamo</em> (« on s'appelle ») termine pratiquement toute réunion et tout appel professionnel italien. Ce n'est pas une promesse, c'est une formule, comme ton « je te tiens au courant »."
      }
    ],
    grammar: {
      title: "La langue des réunions",
      table: {
        head: ["fonction", "formule", "en français"],
        rows: [
          ["prendre la parole", "Posso dire una cosa?", "Je peux dire une chose ?"],
          ["interrompre", "Scusa se ti interrompo…", "Désolé de t'interrompre…"],
          ["être d'accord", "Sono d'accordo con te.", "Je suis d'accord avec toi."],
          ["doute", "Non ne sono del tutto convinto.", "Je n'en suis pas totalement convaincu."],
          ["proposer", "Che ne dite di giovedì?", "Que diriez-vous de jeudi ?"],
          ["clore", "Facciamo così, allora.", "On fait comme ça, alors."]
        ]
      },
      examples: [
        { tr: "Laissez-moi résumer les points principaux." },
        { tr: "J'ai quelques doutes sur ce point." },
        { tr: "On peut repousser la décision à lundi ?" },
        { tr: "Ça m'est égal, décide toi." },
        { tr: "Qui s'occupe de ça ?" },
        { tr: "On se rappelle demain pour les détails." }
      ]
    },
    vocab: [
      "réunion",
      "ordre du jour",
      "résumer",
      "reporter",
      "s'occuper de",
      "je suis d'accord",
      "je ne suis pas convaincu",
      "ça dépend",
      "que diriez-vous de… ?",
      "ça m'est égal",
      "on se rappelle",
      "un point de l'ordre du jour"
    ],
    exercises: [
      { q: "Associe.", pairs: ["je suis d'accord", "ça dépend", "reporter", "s'occuper de"] },
      {
        q: "« Non ne sono del tutto convinto » exprime :",
        opts: ["un accord total", "un doute, exprimé avec ménagement", "un désaccord ferme"]
      },
      { q: "Complète : « ___ ne dite di giovedì? »" },
      { q: "Complète : « Chi ___ occupa di questo? »" },
      { q: "« On peut repousser la décision à lundi ? »" },
      {
        q: "Une réunion d'équipe.",
        setting: "La salle de réunion, on fixe une date.",
        lines: [
          { tr: "Bon, il faut fixer la prochaine réunion." },
          { tr: "Propose jeudi.", answerTr: "Que diriez-vous de jeudi ?" },
          { tr: "Jeudi matin j'ai déjà quelque chose. L'après-midi ?" },
          { tr: "Accepte et clos l'arrangement.", answerTr: "Ça me va, on fait comme ça." }
        ]
      },
      {
        q: "Complète ce que tu dirais.",
        tr: "Désolé de t'interrompre, mais j'ai quelques doutes sur ce point."
      },
      { tr: "Laissez-moi résumer les points principaux." },
      { tr: "On repousse la décision à la prochaine réunion." },
      { tr: "Je suis d'accord, mais je voudrais ajouter une chose." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Test",
    title: "Test de l'unité 6",
    objectives: ["vérifier le conditionnel de politesse, les mails et le si impersonnel"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      {  },
      { q: "« ___ richiamarmi? » (pourriez-vous)" },
      { q: "« Le scrivo ___ merito alla riunione. »" },
      { q: "« Le invio ___ allegato il preventivo. »" },
      { q: "« Qui ___ i panini. »", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "« In Italia ___ mangia bene. »" },
      { q: "Associe.", pairs: ["devis", "vacances", "salaire", "échéance"] },
      { q: "« Je suis d'accord, mais j'ai un doute. »" },
      { tr: "Pourriez-vous confirmer la réunion avant vendredi ?" },
      { tr: "Je voudrais déplacer la réunion à jeudi après-midi." }
    ]
  },
  "unit:a2-u07": { title: "Fêtes et traditions", grammarNote: "invitations · vœux · adverbes" },
  "lesson:a2-u07-l1": {
    theme: "Culture",
    title: "Vœux et occasions",
    objectives: [
      "présenter ses vœux selon l'occasion",
      "répondre à des vœux",
      "connaître les principales fêtes italiennes"
    ],
    theory: [
      {
        h: "Auguri est le passe-partout",
        p: "<strong>Auguri!</strong> vaut pour les anniversaires, les fêtes du prénom, les mariages, les promotions, les fêtes et à peu près toute bonne occasion. Cela veut littéralement dire « vœux ». Version longue : <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "Ce qu'on ne souhaite pas",
        p: "Avant un examen ou une épreuve difficile, les Italiens ne disent <b>pas</b> <em>auguri</em> ni <em>buona fortuna</em> : ça porte malheur. On dit <strong>in bocca al lupo</strong> (« dans la gueule du loup ») et on répond <em>crepi!</em> ou <em>crepi il lupo!</em>. C'est ton « merde » de théâtre, mais étendu à toute la vie : chez toi « bonne chance » reste parfaitement normal, en italien non."
      },
      {
        h: "Le calendrier qu'il faut connaître",
        list: [
          "<b>Capodanno</b> (1er janvier), <b>Epifania</b> (6 janvier, quand passe <em>la Befana</em>)",
          "<b>Pasqua</b> et <b>Pasquetta</b> (lundi de Pâques, jour d'excursion)",
          "<b>25 avril</b> (Libération), <b>1er mai</b>, <b>2 juin</b> (fête de la République)",
          "<b>Ferragosto</b> (15 août : tout le pays est en vacances), <b>Natale</b> et <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> est le vœu neutre de la saison, <em>Buon Natale</em> vise Noël précisément. En contexte professionnel, le premier est plus courant."
      }
    ],
    grammar: {
      title: "Les vœux",
      table: {
        head: ["occasion", "en italien", "la réponse"],
        rows: [
          ["anniversaire", "Tanti auguri!", "Grazie!"],
          ["les fêtes", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["Nouvel An", "Buon anno!", "Anche a te!"],
          ["avant un examen", "In bocca al lupo!", "Crepi!"],
          ["avant un voyage", "Buon viaggio!", "Grazie!"],
          ["avant le repas", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        { tr: "Joyeux anniversaire !" },
        { tr: "Bonnes fêtes à toi et à ta famille." },
        { tr: "Bonne chance pour l'examen ! — Merci !" },
        { tr: "Bonne journée au travail !" },
        { tr: "Bon week-end ! — Toi aussi !" },
        { tr: "Félicitations pour la promotion !" }
      ]
    },
    vocab: [
      "meilleurs vœux !",
      "joyeux anniversaire",
      "bonnes fêtes",
      "bonne année",
      "bonne chance (avant une épreuve)",
      "la réponse à ce qui précède",
      "toi aussi",
      "félicitations",
      "anniversaire",
      "fête du prénom",
      "15 août, pic des vacances",
      "un pont"
    ],
    culture: {
      title: "Avec des yeux italiens : le calendrier donne le rythme",
      text: "<p><b>Ferragosto</b> (15 août) est le moment où les grandes villes se vident. Les commerces de quartier ferment, certains restaurants et cabinets aussi. Vouloir régler quoi que ce soit cette semaine-là est peine perdue : c'est ton mois d'août, en plus concentré.</p><p><b>Il ponte</b>, c'est exactement ton pont : quand un jour férié tombe un mardi ou un jeudi, on prend le lundi ou le vendredi. Les échéances professionnelles se planifient autour des ponts.</p><p><b>L'onomastico</b>, la fête du prénom, est toujours vivante, et dans certaines régions, surtout au sud, on la célèbre avec autant d'entrain qu'un anniversaire.</p>"
    },
    exercises: [
      {
        q: "Que dis-tu à un ami avant un examen ?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "« Buona fortuna » est considéré comme portant malheur."
      },
      { q: "Quelle est la réponse à « in bocca al lupo » ?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Complète : « Buon ___! » (bon voyage)" },
      { q: "Complète : « Buon appetito! — ___! » (toi aussi)" },
      {
        q: "Associe l'occasion au vœu.",
        pairs: ["anniversaire", "Nouvel An", "promotion", "voyage"]
      },
      {
        q: "Qu'est-ce que « il ponte » dans le calendrier ?",
        opts: ["Une fête religieuse", "Un jour de congé qui relie un férié au week-end", "Un anniversaire"]
      },
      {
        q: "Que se passe-t-il en Italie le 15 août ?",
        opts: ["La rentrée scolaire", "Ferragosto : les villes se vident", "La fête de la République"]
      },
      { q: "« Bonnes fêtes à toi et à ta famille. »" },
      { tr: "Joyeux anniversaire et bonnes fêtes !" },
      { tr: "Bonne chance pour l'examen ! — Merci !" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Culture",
    title: "Les invitations",
    objectives: ["inviter quelqu'un", "accepter ou refuser avec élégance", "poser des questions sur les détails"],
    theory: [
      {
        h: "Les invitations sont d'ordinaire informelles",
        p: "Les invitations italiennes prennent rarement une forme fixe. Le plus souvent : <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Même un vrai dîner s'annonce comme <em>una cosa tra amici</em>."
      },
      {
        h: "Refuser exige un motif",
        p: "Un <em>no, grazie</em> tout seul passe pour froid. La formule est : excuse + motif + alternative. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em>"
      },
      {
        h: "Ce qu'on apporte",
        p: "Pour un dîner on apporte du vin, un dessert ou des fleurs. La question <em>Cosa porto?</em> est attendue, et la réponse <em>Non portare niente!</em> est une politesse : on apporte quelque chose quand même."
      },
      {
        tip: "L'heure d'une invitation est approximative. Arriver pile à l'heure pour un dîner privé à vingt heures trente peut gêner ; un quart d'heure de retard est la norme, une marge que tu connais déjà."
      }
    ],
    grammar: {
      title: "Inviter et répondre",
      table: {
        head: ["fonction", "formule", "en français"],
        rows: [
          ["invitation", "Ti va di venire a cena sabato?", "Ça te dit de venir dîner samedi ?"],
          ["accepter", "Volentieri, a che ora?", "Volontiers, à quelle heure ?"],
          ["refuser", "Mi dispiace, quel giorno non posso.", "Désolé, ce jour-là je ne peux pas."],
          ["alternative", "Facciamo un'altra volta?", "On remet à une autre fois ?"],
          ["détails", "Cosa porto?", "Qu'est-ce que j'apporte ?"],
          ["la réponse", "Non portare niente, ci pensiamo noi.", "N'apporte rien, on s'en occupe."]
        ]
      },
      examples: [
        { tr: "On fait un dîner chez nous samedi, tu viens ?" },
        { tr: "Volontiers ! Vous vous retrouvez à quelle heure ?" },
        { tr: "Désolé, samedi j'ai déjà quelque chose." },
        { tr: "Je peux amener quelqu'un ?" },
        { tr: "J'apporte le dessert, ça vous va ?" },
        { tr: "On se voit là-bas vers vingt heures trente." }
      ]
    },
    vocab: [
      "inviter",
      "invitation",
      "dîner",
      "une fête",
      "un engagement déjà pris",
      "volontiers",
      "malheureusement",
      "une autre fois",
      "apporter",
      "vers vingt heures",
      "se retrouver",
      "rester tard"
    ],
    exercises: [
      {
        q: "Quel refus fonctionne le mieux en italien ?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Complète : « ___ va di venire a cena? »" },
      { q: "Complète : « Purtroppo ho già un ___. » (un engagement)" },
      { q: "Associe.", pairs: ["volontiers", "malheureusement", "invitation", "se retrouver"] },
      { q: "« Volontiers ! Vous vous retrouvez à quelle heure ? »" },
      {
        q: "Une invitation à dîner.",
        setting: "Un message d'un ami, mercredi soir.",
        lines: [
          { tr: "On fait un dîner chez nous samedi. Ça te dit de venir ?" },
          { tr: "Accepte et demande l'heure.", answerTr: "Volontiers ! À quelle heure ?" },
          { tr: "Vers vingt heures trente. On sera six." },
          { tr: "Demande quoi apporter.", answerTr: "Qu'est-ce que j'apporte ?" },
          { tr: "N'apporte rien ! Le dessert, à la rigueur." }
        ]
      },
      { q: "Complète le refus.", tr: "Désolé, samedi j'ai déjà quelque chose. On remet à une autre fois ?" },
      { tr: "On se voit là-bas vers vingt heures trente." },
      { tr: "Ça te dit de venir dîner samedi ? On sera six." },
      { tr: "Volontiers, j'apporte le dessert. À quelle heure ?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Culture",
    title: "L'Italie des régions",
    objectives: [
      "comprendre les différences de base entre le nord et le sud",
      "décrire une région et sa cuisine",
      "employer des comparaisons pour décrire des lieux"
    ],
    theory: [
      {
        h: "L'Italie s'est unifiée en 1861",
        p: "Avant, c'était un ensemble d'États aux langues, cuisines et institutions séparées. Les différences régionales sont plus profondes que dans la plupart des pays : les dialectes peuvent être mutuellement incompréhensibles, et l'identité locale (<em>campanilismo</em>, de <em>campanile</em>, le clocher) pèse souvent plus que l'identité nationale."
      },
      {
        contrast: "L'écart avec la France est net : chez toi la centralisation jacobine a fait de Paris la référence et a marginalisé le breton, l'occitan ou le corse. En Italie l'unité est récente, le centre n'a jamais absorbé les périphéries de la même façon, et les langues régionales restent vivantes dans la conversation ordinaire."
      },
      {
        h: "Il n'y a pas une cuisine italienne",
        p: "Beurre et riz au nord, huile d'olive et pâtes au sud. Le <em>pesto</em> est ligure, le <em>ragù</em> émilien, la <em>carbonara</em> romaine, les <em>arancini</em> siciliens. Commander « italien » sans préciser la région, c'est comme commander « français » sans dire si c'est breton ou provençal."
      },
      {
        tip: "Sujet de conversation sûr avec un Italien : la cuisine de sa région. Sujet risqué : quelle région cuisine le mieux."
      }
    ],
    grammar: {
      title: "Décrire une région",
      table: {
        head: ["région", "chef-lieu", "connue pour"],
        rows: [
          ["la Toscana", "Firenze", "la bistecca, le Chianti, la Renaissance"],
          ["l'Emilia-Romagna", "Bologna", "les tagliatelle al ragù, le parmesan"],
          ["la Sicilia", "Palermo", "les arancini, les cannoli, l'influence arabe"],
          ["il Veneto", "Venezia", "les cicchetti, le prosecco"],
          ["la Campania", "Napoli", "la pizza, la sfogliatella"],
          ["il Piemonte", "Torino", "les truffes, le vermouth, Slow Food"]
        ]
      },
      examples: [
        { tr: "Je suis d'origine sicilienne, mais j'habite à Milan." },
        { tr: "Au nord on utilise plus le beurre, au sud plus l'huile d'olive." },
        { tr: "En Vénétie on parle encore beaucoup le dialecte." },
        { tr: "Chaque région a ses pâtes typiques." },
        { tr: "Le café du sud est plus fort et plus court." },
        { tr: "Rome est chaotique, mais magnifique." }
      ]
    },
    vocab: [
      "région",
      "chef-lieu de région",
      "nord / sud",
      "dialecte",
      "typique",
      "tradition",
      "un plat régional",
      "origine",
      "chaotique",
      "accueillant",
      "fierté locale",
      "s'installer (quelque part)"
    ],
    exercises: [
      { q: "Associe la région à la ville.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "Qu'est-ce que le « campanilismo » ?",
        opts: ["Un style architectural", "L'attachement à sa propre ville", "Une sorte de cloche"]
      },
      {
        q: "Un dialecte italien est :",
        opts: ["une version mal parlée de l'italien", "une langue distincte issue du latin", "de l'argot des jeunes"]
      },
      { q: "Complète : « Al nord si usa più il burro, al ___ l'olio. »" },
      { q: "« Chaque région a son plat typique. »" },
      {
        q: "Complète.",
        tr: "Je suis d'origine sicilienne, mais je vis au nord depuis dix ans. Je comprends le dialecte mais je ne le parle pas."
      },
      { tr: "Rome est chaotique, mais magnifique." },
      { q: "D'où vient la carbonara ?", opts: ["Bologna", "Rome", "Palermo"] },
      { tr: "Chaque région italienne a sa cuisine et souvent son dialecte." },
      { tr: "Je suis d'origine polonaise, mais je vis en Toscane depuis trois ans." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Grammaire",
    title: "Les adverbes",
    objectives: [
      "former les adverbes en -mente",
      "distinguer un adjectif d'un adverbe",
      "placer l'adverbe au bon endroit"
    ],
    theory: [
      {
        h: "Comment les former",
        p: "On prend la forme <b>féminine</b> de l'adjectif et on ajoute <em>-mente</em> : <em>lenta → lentamente</em>, <em>rara → raramente</em>. C'est exactement ta règle du <em>-ment</em> (lente → lentement). Les adjectifs en <em>-le</em> et <em>-re</em> perdent le <em>e</em> final : <em>facile → facilmente</em>, <em>regolare → regolarmente</em>."
      },
      {
        h: "Buono face à bene",
        p: "C'est celui qui pose le plus de problèmes, alors que tu as déjà le couple. <em>Buono</em> est l'adjectif (comment est-ce ?), <em>bene</em> l'adverbe (comment fait-il ?) : bon et bien. <em>Un caffè <b>buono</b></em> mais <em>parla <b>bene</b></em>. « Parla buono » est fautif comme « il parle bon »."
      },
      {
        h: "La place dans les temps composés",
        p: "Au passato prossimo, les adverbes <em>già, mai, ancora, sempre, appena, più</em> se placent <b>entre l'auxiliaire et le participe</b> : <em>ho <b>già</b> visto</em>, comme ton « j'ai déjà vu ». Les autres suivent le participe : <em>ho parlato <b>lentamente</b></em>."
      },
      {
        tip: "Les adverbes en <em>-mente</em> sont longs, et l'italien parlé les remplace souvent par des locutions : <em>in modo semplice</em> au lieu de <em>semplicemente</em>, <em>con calma</em> au lieu de <em>tranquillamente</em>."
      }
    ],
    grammar: {
      title: "Les adverbes",
      table: {
        head: ["adjectif", "adverbe", "exemple"],
        rows: [
          ["lento / lenta", "lentamente", "Parla lentamente, per favore."],
          ["raro / rara", "raramente", "Vado raramente al cinema."],
          ["facile", "facilmente", "Si trova facilmente."],
          ["regolare", "regolarmente", "Studia regolarmente."],
          ["buono", "bene", "Cucina bene."],
          ["cattivo", "male", "Ho dormito male."]
        ]
      },
      examples: [
        { tr: "Pourriez-vous parler plus lentement ?" },
        { tr: "Je vais rarement dans le centre le week-end." },
        { tr: "J'ai déjà vu ce film." },
        { tr: "Je n'y suis pas encore allé." },
        { tr: "Il parle bien italien, mais il l'écrit mal." },
        { tr: "Prends ton temps." }
      ]
    },
    vocab: [
      "lentement",
      "vite",
      "facilement",
      "rarement",
      "régulièrement",
      "soudain",
      "enfin",
      "absolument",
      "bien / mal",
      "calmement",
      "à la hâte",
      "presque"
    ],
    exercises: [
      { q: "Forme l'adverbe de « lento » : ___" },
      { q: "Forme l'adverbe de « facile » : ___" },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Complète : « Ho ___ visto quel film. » (déjà)" },
      {
        q: "Où va « ancora » au passato prossimo ?",
        opts: ["Devant l'auxiliaire", "Entre l'auxiliaire et le participe", "À la fin"]
      },
      { q: "Associe.", pairs: ["enfin", "soudain", "calmement", "presque"] },
      { q: "« Pourriez-vous parler plus lentement ? »" },
      {
        q: "Complète.",
        tr: "Il parle bien italien, mais il l'écrit encore mal. Il travaille régulièrement, tous les jours."
      },
      { tr: "J'ai enfin trouvé un appartement près du travail." },
      { tr: "Pourriez-vous répéter plus lentement ?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Test",
    title: "Test de l'unité 7",
    objectives: ["vérifier les vœux, les invitations, le fait régional et les adverbes"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "Avant un examen on dit :", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "La réponse à « in bocca al lupo » : ___" },
      { q: "« Buon appetito! — ___! »" },
      { q: "« ___ va di venire a cena? »" },
      { q: "« Il ponte » est :", opts: ["un pont de pierre", "un pont de jours de congé", "une fête"] },
      { q: "Associe.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "L'adverbe de « regolare » : ___" },
      { q: "La phrase correcte :", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "Meilleurs vœux et bonnes fêtes à toute la famille !" },
      { tr: "Ça te dit de venir à la fête samedi soir ?" }
    ]
  },
  "unit:a2-u08": { title: "Projets et révision", grammarNote: "exprimer ses intentions · révision de A2" },
  "lesson:a2-u08-l1": {
    theme: "Projets",
    title: "Intentions et rêves",
    objectives: [
      "parler de tes projets d'avenir",
      "exprimer un souhait et un doute",
      "combiner le futur et le conditionnel"
    ],
    theory: [
      {
        h: "Trois degrés de certitude",
        list: [
          "<b>décidé</b> : <em>A settembre comincio un nuovo lavoro.</em> (présent)",
          "<b>prévu</b> : <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>un rêve</b> : <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe face à vorrei",
        p: "<em>Vorrei</em> porte sur quelque chose de réel et d'accessible (« je voudrais un café »). <em>Mi piacerebbe</em> glisse vers le souhait ou l'hypothèse (« j'aimerais »). Un Italien emploie le premier pour commander et le second pour parler de sa vie : exactement ton partage entre « je voudrais » et « j'aimerais »."
      },
      {
        h: "Les prépositions après les verbes d'intention",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, mais <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. La préposition fait partie du verbe et s'apprend avec lui. Le français tombe juste sur plusieurs (intention de, commencer à, apprendre à) et faux sur d'autres : tu dis « j'espère trouver », sans préposition."
      },
      {
        tip: "<em>Chissà</em> (« qui sait ») ouvre souvent une phrase sur un avenir incertain : <em>Chissà dove sarò tra cinque anni.</em>"
      }
    ],
    grammar: {
      title: "Exprimer ses projets",
      table: {
        head: ["degré", "construction", "exemple"],
        rows: [
          ["une décision", "présent", "A giugno cambio lavoro."],
          ["une intention", "ho intenzione di + infinitif", "Ho intenzione di studiare medicina."],
          ["une prévision", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["un rêve", "mi piacerebbe + infinitif", "Mi piacerebbe vivere al mare."],
          ["un espoir", "spero di + infinitif", "Spero di trovare casa presto."],
          ["l'incertitude", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        { tr: "J'ai l'intention de m'inscrire à un cours du soir." },
        { tr: "J'aimerais travailler un an à l'étranger." },
        { tr: "J'espère réussir l'examen en juin." },
        { tr: "Qui sait où je serai dans cinq ans." },
        { tr: "Je pense changer de ville." },
        { tr: "Tôt ou tard j'apprendrai à jouer du piano." }
      ]
    },
    vocab: [
      "j'ai l'intention de",
      "j'aimerais (un rêve)",
      "j'espère",
      "je pense (faire)",
      "rêver de",
      "qui sait",
      "tôt ou tard",
      "à l'étranger",
      "un cours du soir",
      "réussir un examen",
      "changer de vie",
      "un rêve"
    ],
    exercises: [
      { q: "Complète : « Ho intenzione ___ trasferirmi. »" },
      { q: "Complète : « Spero ___ trovare casa presto. »" },
      { q: "Complète : « Comincio ___ capire meglio. »" },
      {
        q: "Quelle phrase sonne comme un rêve et non comme un projet ?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "« J'aimerais travailler un an à l'étranger. »" },
      { q: "Complète les projets.", tr: "J'ai l'intention de m'inscrire à un cours et j'espère réussir l'examen en juin." },
      { tr: "Tôt ou tard j'apprendrai à jouer du piano." },
      { tr: "Je pense changer de ville l'année prochaine." },
      { tr: "J'aimerais vivre en Italie au moins un an." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Révision",
    title: "Révision des temps",
    objectives: [
      "choisir le temps qui convient à la situation",
      "combiner tous les temps appris en A2",
      "repérer tes points faibles"
    ],
    theory: [
      {
        h: "La carte des temps de A2",
        list: [
          "<b>presente</b> — maintenant, habitude, futur proche",
          "<b>passato prossimo</b> — un fait clos",
          "<b>imperfetto</b> — décor, description, habitude passée",
          "<b>trapassato prossimo</b> — le passé avant le passé",
          "<b>futuro semplice</b> — un projet, une prévision, une supposition sur le présent",
          "<b>futuro anteriore</b> — le futur avant le futur, une supposition sur le passé",
          "<b>condizionale presente</b> — une demande, un conseil, un souhait"
        ]
      },
      {
        h: "Les fautes les plus fréquentes à ce stade",
        list: [
          "employer le passato prossimo là où il faut l'imperfetto (description)",
          "oublier l'accord du participe avec <em>essere</em> : « siamo andato »",
          "oublier l'accord du participe avec le pronom : « l'ho visto » à propos d'une femme",
          "mettre un conditionnel après <em>se</em> : « se avrei » au lieu de la construction correcte, la même faute que ton « si j'aurais »"
        ]
      }
    ],
    grammar: {
      title: "Les temps en un tableau",
      table: {
        head: ["temps", "exemple", "quand"],
        rows: [
          ["presente", "Lavoro in banca.", "maintenant, habitude"],
          ["passato prossimo", "Ieri ho lavorato molto.", "un fait clos"],
          ["imperfetto", "Da bambino lavoravo poco.", "décor, habitude"],
          ["trapassato", "Avevo già lavorato lì.", "un passé antérieur"],
          ["futuro", "Domani lavorerò da casa.", "un projet"],
          ["futuro anteriore", "Quando avrò finito, esco.", "un futur antérieur"],
          ["condizionale", "Vorrei lavorare meno.", "une demande, un souhait"]
        ]
      },
      examples: [
        { tr: "Pendant que j'étudiais, un mail important est arrivé." },
        { tr: "Quand je suis sorti, il avait déjà cessé de pleuvoir." },
        { tr: "J'appelle demain dès que j'ai fini." },
        { tr: "Je voudrais te demander quelque chose." },
        { tr: "Petite, je n'aimais pas le poisson." },
        { tr: "Je l'ai rencontrée l'an dernier à Rome." }
      ]
    },
    vocab: [
      "un temps verbal",
      "une faute fréquente",
      "l'accord",
      "participe",
      "verbe auxiliaire",
      "réviser",
      "confondre",
      "distinguer"
    ],
    exercises: [
      { q: "Mets les bonnes formes.", tr: "Pendant que j'étudiais, un mail important est arrivé." },
      { q: "Mets les bonnes formes.", tr: "Quand je suis sorti, il avait déjà cessé de pleuvoir." },
      { q: "Mets les bonnes formes.", tr: "J'appelle demain dès que j'ai fini." },
      {
        q: "« Siamo andato al mare » : qu'est-ce qui cloche ?",
        opts: ["Le mauvais auxiliaire", "L'accord du participe manque (andati)", "Rien, c'est correct"]
      },
      { q: "À propos d'une femme : « L'ho visto ieri », que faut-il corriger ?", opts: ["Rien", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "« Je voudrais te demander quelque chose. »" },
      { tr: "Petite, je n'aimais pas le poisson, maintenant j'adore ça." },
      { tr: "Hier je suis allé au cinéma et le film m'a beaucoup plu." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Révision",
    title: "Révision des pronoms",
    objectives: [
      "choisir le bon pronom",
      "combiner les pronoms avec les temps composés",
      "se préparer aux pronoms combinés de B1"
    ],
    theory: [
      {
        h: "Quatre groupes à ne pas mélanger",
        list: [
          "<b>directs</b> : mi, ti, lo, la, ci, vi, li, le — « qui ? quoi ? »",
          "<b>indirects</b> : mi, ti, gli, le, ci, vi, gli — « à qui ? »",
          "<b>réfléchis</b> : mi, ti, si, ci, vi, si — une action sur soi-même",
          "<b>particules</b> : ci (lieu, a + chose), ne (une partie, di + chose)"
        ]
      },
      {
        h: "Le test décisif",
        p: "Pose une question au verbe. « Je vois <b>qui</b> ? » → direct (<em>lo vedo</em>). « Je téléphone <b>à qui</b> ? » → indirect (<em>gli telefono</em>). Si le verbe demande <em>a</em>, le pronom sera indirect. Ton couple le/lui fonctionne pareil."
      },
      {
        h: "Ce qui attend en B1",
        p: "Les pronoms combinés (<em>me lo, glielo, ce ne</em>) et l'emploi complet de <em>ci</em> et <em>ne</em> dans les verbes fusionnés. Là encore tu pars avec une longueur d'avance : tes « je le lui ai dit », « j'y en ai mis » reposent sur la même mécanique."
      }
    ],
    grammar: {
      title: "Les pronoms en résumé",
      table: {
        head: ["type", "formes", "exemple"],
        rows: [
          ["direct", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["indirect", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["réfléchi", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "lieu / a + chose", "Ci vado domani."],
          ["ne", "une partie / di + chose", "Ne prendo due."],
          ["accord", "avec le direct seulement", "Le ho viste."]
        ]
      },
      examples: [
        { tr: "Le livre ? Je l'ai lu la semaine dernière." },
        { tr: "Marco ? Je lui ai déjà répondu." },
        { tr: "Les clés ? Je ne les trouve pas." },
        { tr: "Je vais à la salle de sport trois fois par semaine." },
        { tr: "Tu en veux combien ? — J'en veux trois." },
        { tr: "Je me suis levé à six heures." }
      ]
    },
    vocab: [
      "pronom",
      "direct / indirect",
      "réfléchi",
      "remplacer",
      "répéter",
      "éviter",
      "répétition",
      "avec aisance"
    ],
    exercises: [
      { q: "« Telefono a Giulia » →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "« Vedo Giulia » →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "« Le chiavi? Non ___ trovo. »" },
      { q: "« Quante mele vuoi? — ___ voglio tre. »" },
      { q: "« In palestra ___ vado tre volte a settimana. »" },
      { q: "Complète la terminaison : « Le ho vist___. » (elles)" },
      {
        q: "Quels verbes prennent un pronom indirect ?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Complète les pronoms.",
        tr: "Le livre ? Je l'ai lu. Marco ? Je lui ai écrit hier. Le marché ? J'y vais samedi."
      },
      { tr: "Je lui ai envoyé un mail, mais elle ne m'a pas encore répondu." },
      { tr: "Le film ? Je l'ai vu hier et il m'a beaucoup plu." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Révision",
    title: "Prêt pour B1",
    objectives: [
      "vérifier que tu maîtrises tout le niveau A2",
      "voir ce qui arrive en B1",
      "décider si tu passes au niveau suivant"
    ],
    theory: [
      {
        h: "Ce que tu devrais savoir faire maintenant",
        list: [
          "parler du passé avec deux temps et choisir le bon",
          "parler de projets et de rêves",
          "te débrouiller en voyage, à l'hôtel, chez le médecin, au travail",
          "employer des pronoms au lieu de répéter les noms",
          "écrire un court mail et mener un appel téléphonique",
          "faire une demande, donner un conseil, refuser poliment"
        ]
      },
      {
        h: "Ce qui arrive en B1",
        p: "Le <strong>congiuntivo</strong> : le mode de l'opinion, du doute et de l'émotion. Tu pars avec un avantage considérable sur un anglophone, dont le subjonctif a presque disparu : le tien est vivant et sert dans les mêmes contextes (« il faut que tu viennes », « je doute qu'il vienne »). Les différences existent, surtout après les verbes d'opinion, où l'italien met le subjonctif là où tu mets l'indicatif. Arrivent aussi les pronoms combinés, le <em>ci</em> et le <em>ne</em> complets, les relatives, le discours indirect, l'argumentation et la bureaucratie italienne."
      },
      {
        tip: "Ne passe pas en B1 avec moins de 70 %. Le congiuntivo s'appuie sur les temps de A2 : les lacunes s'y transforment en mur."
      }
    ],
    vocab: [
      "le subjonctif",
      "une opinion",
      "un doute",
      "argumenter",
      "bureaucratie",
      "prêt pour",
      "progrès",
      "je peux le faire"
    ],
    exercises: [
      { q: "Mets les temps.", tr: "Hier je suis allé au cinéma avec Marta. Le film était long, mais bon." },
      {  },
      {  },
      {  },
      { q: "« Le chiavi? ___ ho perse. »" },
      { q: "« A Marco ___ ho telefonato ieri. »" },
      { q: "« Quanto ___ vuole per arrivare? »" },
      { q: "« Mi ___ male la schiena. »" },
      { q: "« Ho intenzione ___ cambiare lavoro. »" },
      { q: "« Quand j'aurai fini de travailler, je t'appelle. »" },
      { tr: "Pendant que je rentrais à pied, j'ai croisé Giulia et je lui ai parlé du projet." },
      { tr: "L'année prochaine j'aimerais m'installer en Italie pour le travail." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Examen",
    title: "Examen final de A2",
    objectives: ["vérifier que tu es prêt à passer en B1"],
    theory: [{ p: "Douze questions sur tout le niveau. On valide à 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Mets les temps.", tr: "Pendant que j'attendais le bus, j'ai croisé un vieil ami." },
      { q: "« Quando sono arrivato, il treno ___ già partito. »" },
      { q: "« Hai visto Anna? » →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "« A Marco ___ ho risposto. »" },
      { q: "« Quanti ne vuoi? — ___ voglio due. »" },
      { q: "« ___ meglio riposare. » (ce serait mieux)" },
      { q: "« Qui ___ i panini. » (sont vendus)" },
      { q: "L'adverbe de « facile » : ___" },
      { q: "« Je voudrais déplacer la réunion à jeudi. »" },
      { tr: "Hier je suis allé chez le médecin parce que j'avais mal à la gorge." }
    ]
  }
});
