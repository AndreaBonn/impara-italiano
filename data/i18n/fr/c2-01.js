/* ============================================================
   Texte dans la langue de l'apprenant (fr) pour data/core/c2-01.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   fusionnent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:c2-u01": {
    title: "Participes et périphrases verbales",
    grammarNote: "participe présent et passé · perifrasi verbali · formes implicites"
  },
  "lesson:c2-u01-l1": {
    theme: "Grammaire supérieure",
    title: "Le participe présent : trois vies",
    objectives: [
      "distinguer l'emploi adjectival, nominal et verbal",
      "reconnaître le participio presente dans les textes juridiques",
      "ne pas en abuser à l'oral"
    ],
    theory: [
      {
        h: "Presque mort comme verbe, très vivant comme vocabulaire",
        p: "Le participe présent en <em>-ante / -ente</em> a perdu sa fonction verbale en italien moderne, mais il a laissé derrière lui des centaines d'adjectifs et de noms : <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. Tous sont d'anciens participes."
      },
      {
        contrast: "Ton participe présent est resté nettement plus vivant : « l'argent provenant des offres » n'a rien de juridique en français, alors qu'en italien la même tournure te classe le texte. Deux points valent le détour : <em>gli aventi diritto</em> sont mot pour mot tes « ayants droit », et la distinction française entre participe présent invariable et adjectif verbal variable (négligeant / négligent) n'existe pas en italien, où une seule forme fait les deux."
      },
      {
        h: "L'emploi verbal : droit et administration",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Ici <em>derivante</em> remplace une relative, <em>che deriva</em>. La construction survit dans l'écrit juridique, technique et scientifique ; ailleurs elle sonne artificiel."
      },
      {
        h: "Comment le lire",
        p: "Quand tu croises un <em>-ante/-ente</em> dans un texte juridique, convertis-le en relative à vue : <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. C'est la façon la plus rapide de démonter une longue phrase administrative."
      },
      {
        trap: "Tout mot en <em>-ente</em> n'est pas un participe. <em>Paziente</em>, <em>presente</em>, <em>parente</em> sont aujourd'hui des noms ou des adjectifs à part entière et ne se démontent pas en relative. Attention en outre à <em>parente</em>, qui veut dire « membre de la famille » et non « parent » au sens de père ou mère."
      }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["forme", "emploi", "exemple"],
        rows: [
          ["brillante", "adjectif", "una carriera brillante"],
          ["insegnante", "nom", "un'insegnante di liceo"],
          ["derivante", "verbal", "il denaro derivante dalle offerte"],
          ["richiedente", "nom + verbal", "i soggetti richiedenti"],
          ["seguente", "adjectif", "il giorno seguente"],
          ["proveniente", "verbal", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "Les pièces attestant la condition doivent être jointes." },
        { tr: "Les montants résultant du bilan ont été vérifiés." },
        { tr: "Un discours convaincant, mais sans chiffres." },
        { tr: "Les passagers en provenance de l'étranger doivent remplir le formulaire." },
        { tr: "C'était un choix perdant dès le départ." },
        { tr: "Les ayants droit recevront une notification.", note: "« aventi diritto » est une formule juridique figée" }
      ]
    },
    vocab: [
      "attestant, justificatif",
      "résultant",
      "en provenance de",
      "demandeur",
      "ayant droit",
      "convaincant",
      "suivant",
      "précédent",
      "en vigueur",
      "condition, critère",
      "bilan, budget",
      "dépourvu de"
    ],
    exercises: [
      {
        q: "« Il denaro derivante dalle offerte » peut être remplacé par :",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "« Gli aventi diritto » sont :", opts: ["ceux qui ont raison", "les ayants droit", "les propriétaires"] },
      {
        q: "Transforme en relative : « i passeggeri provenienti dall'estero » → « i passeggeri ___ provengono dall'estero »"
      },
      { q: "Associe.", pairs: ["attestant", "résultant", "en vigueur", "dépourvu de"] },
      {
        q: "Dans quel registre le participio presente reste-t-il verbal ?",
        opts: ["dans la langue parlée", "dans les textes juridiques et techniques", "en poésie"]
      },
      {
        q: "Lesquels viennent d'un participe présent ?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Complète le texte administratif.",
        tr: "Les demandeurs joignent à la requête les pièces attestant la condition."
      },
      { q: "« Les montants résultant du bilan ont été vérifiés. »" },
      { tr: "Les ayants droit recevront une notification dans un délai de trente jours." },
      { tr: "Un discours convaincant, mais sans chiffres concrets." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Grammaire supérieure",
    title: "Le participe passé dans les subordonnées réduites",
    objectives: [
      "construire une proposition participiale absolue",
      "garder l'accord du participe juste",
      "comprimer le texte écrit"
    ],
    theory: [
      {
        h: "La construction absolue",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> Un participe passé accompagné de son propre nom forme une subordonnée réduite de valeur temporelle ou causale. Le nom vient <b>après</b> le participe, et le participe s'accorde avec lui en genre et en nombre."
      },
      {
        contrast: "La construction est la tienne, mais l'ordre s'inverse : tu dis « la réunion terminée », nom d'abord, l'italien dit <em>finita la riunione</em>, participe d'abord. Autre écart utile : ton « vu la situation » reste invariable, alors que l'italien accorde et écrit <em>vista la situazione</em>. Deux détails minuscules et deux fautes très visibles."
      },
      {
        h: "Avec des verbes transitifs et intransitifs",
        p: "Transitif : <em>Letto il contratto, ho firmato.</em> Intransitif avec <em>essere</em> : <em>Partito il treno, siamo tornati a casa.</em> L'accord est obligatoire dans les deux cas."
      },
      {
        h: "Les renforts",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Ajouter <em>una volta</em> ou <em>appena</em> fixe la relation temporelle et sonne plus naturel, comme ton « une fois la réunion terminée »."
      },
      {
        trap: "La construction absolue exige que son sujet soit <b>différent</b> de celui de la principale, ou qu'il en soit l'objet. <em>Finito il lavoro, sono uscito</em> est correct, parce que <em>il lavoro</em> n'est pas le sujet de la principale."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["construction", "équivalent complet", "valeur"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "temporelle"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "temporelle"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "temporelle"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "causale"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "conditionnelle-temporelle"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "administrative"]
        ]
      },
      examples: [
        { tr: "Vu l'urgence, nous continuons sans attendre." },
        { tr: "Une fois les travaux terminés, la rue a été rouverte." },
        { tr: "Une fois la confirmation reçue, il pourra partir." },
        { tr: "Les vérifications nécessaires faites, la demande a été acceptée." },
        { tr: "Une fois sur place, nous nous sommes aperçus de l'erreur." },
        { tr: "Frais fixes exclus, le bilan est positif." }
      ]
    },
    vocab: [
      "vu l'urgence",
      "terminer, achever",
      "rouvrir",
      "faire droit à une demande",
      "les vérifications nécessaires",
      "exclure",
      "destination",
      "s'apercevoir, remarquer",
      "une fois + participe",
      "à peine + participe",
      "prémisse, condition préalable",
      "à titre préliminaire"
    ],
    exercises: [
      { q: "Trouve l'accord : « Terminat___ i lavori, la strada è stata riaperta. »" },
      { q: "Trouve l'accord : « Finit___ la riunione, siamo usciti. »" },
      { q: "« Vista la situazione » a :", opts: ["une valeur temporelle", "une valeur causale", "une valeur conditionnelle"] },
      {
        q: "Où se place le nom dans une construction absolue ?",
        opts: ["avant le participe", "après le participe", "à la fin de la phrase"]
      },
      {
        q: "Construis les absolues.",
        tr: "Le contrat lu, j'ai signé. Frais fixes exclus, le bilan est positif."
      },
      { q: "« Une fois la confirmation reçue, il pourra partir. »" },
      { tr: "Une fois sur place, nous nous sommes aperçus de l'erreur." },
      {
        q: "Pourquoi ajouter « una volta » devant le participe ?",
        opts: ["pour le rythme", "pour fixer la relation temporelle", "parce que la grammaire l'exige"]
      },
      { tr: "Les vérifications nécessaires faites, la demande a été acceptée." },
      { tr: "Vu l'urgence, nous continuons sans attendre d'autres confirmations." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Grammaire supérieure",
    title: "Les périphrases verbales",
    objectives: [
      "reconnaître les périphrases aspectuelles, modales et gérondives",
      "préciser la phase d'une action",
      "employer va + participe et ho da + infinitif"
    ],
    theory: [
      {
        h: "Une périphrase ajoute un aspect que le temps ne porte pas",
        p: "L'italien n'a pas de formes propres pour « je suis sur le point de commencer », « je suis en train de finir », « ça va croissant ». Les périphrases font ce travail : <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspectuelles",
        list: [
          "<em>stare per + infinitif</em> — être sur le point de",
          "<em>essere sul punto di</em> — être au bord de",
          "<em>accingersi a</em> — s'apprêter à (registre élevé)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gérondif</em> — en cours"
        ]
      },
      {
        contrast: "La liste est presque entièrement la tienne, et le morceau de bravoure aussi : <em>il fenomeno va crescendo</em> est ton « le phénomène va croissant », même verbe de mouvement, même nuance de progression, même registre écrit. Raison de plus pour séparer nettement les deux emplois de <em>andare</em> : <em>va crescendo</em> est une progression que tu reconnais, <em>va rivisto</em> est une obligation, et là c'est « est à revoir » qui traduit."
      },
      {
        h: "Modales",
        p: "<em>Il compito <b>va</b> rivisto</em> (le devoir est à revoir), <em><b>Ho da</b> studiare</em> (j'ai à travailler), <em><b>C'è da</b> aspettare</em> (il y a de l'attente), <em><b>Sarebbe da</b> rifare</em> (ce serait à refaire)."
      },
      {
        h: "La gérondive à l'écrit",
        p: "<em>Il fenomeno <b>va crescendo</b></em> est <em>andare</em> + gérondif, propre au registre écrit. À ne pas confondre avec <em>va rivisto</em>, où <em>andare</em> porte l'obligation : deux périphrases distinctes avec le même verbe."
      }
    ],
    grammar: {
      title: "Catalogue des périphrases",
      table: {
        head: ["type", "construction", "sens"],
        rows: [
          ["aspectuelle", "sto per partire", "je suis sur le point de partir"],
          ["aspectuelle", "sono sul punto di rinunciare", "je suis au bord de renoncer"],
          ["aspectuelle", "mi accingo a rispondere", "je m'apprête à répondre"],
          ["progressive", "sto scrivendo", "je suis en train d'écrire"],
          ["progressive", "il fenomeno va crescendo", "le phénomène va croissant"],
          ["modale", "il testo va rivisto", "le texte est à revoir"],
          ["modale", "ho da fare", "j'ai à faire"],
          ["modale", "c'è da aspettare", "il y a de l'attente"]
        ]
      },
      examples: [
        { tr: "Je suis sur le point de sortir, je te rappelle." },
        { tr: "J'étais au bord de renoncer quand la réponse est arrivée." },
        { tr: "Le nombre de demandes va croissant de mois en mois." },
        { tr: "Ce chapitre est à réécrire entièrement." },
        { tr: "Il y a encore beaucoup à faire avant l'échéance." },
        { tr: "Je m'apprête maintenant à présenter les résultats." }
      ]
    },
    vocab: [
      "être sur le point de",
      "être au bord de",
      "s'apprêter à",
      "poursuivre (littéraire)",
      "aller croissant, se faire peu à peu",
      "être à faire",
      "avoir à faire",
      "il y a à faire",
      "renoncer",
      "exposer, présenter",
      "entièrement",
      "de mois en mois"
    ],
    exercises: [
      {
        q: "« Il testo va rivisto » veut dire :",
        opts: ["le texte va revu", "le texte est à revoir", "le texte est en cours de révision"]
      },
      {
        q: "« Il fenomeno va crescendo » veut dire :",
        opts: ["il faut augmenter le phénomène", "le phénomène va croissant", "le phénomène va grandir"]
      },
      { q: "Complète : « ___ per uscire, ti richiamo dopo. » (je suis sur le point de sortir)" },
      { q: "Complète : « C'è ancora molto ___ fare. » (à faire)" },
      { q: "Associe.", pairs: ["s'apprêter à", "être au bord de", "avoir à faire", "poursuivre"] },
      {
        q: "En quoi « va rivisto » et « va crescendo » diffèrent-ils ?",
        opts: ["En rien", "Le premier porte une obligation, le second une progression graduelle", "Le premier est un futur"]
      },
      { q: "Complète les périphrases.", tr: "J'étais au bord de renoncer, mais le nombre de demandes va croissant." },
      { q: "« Ce chapitre est à réécrire entièrement. »" },
      { tr: "Je m'apprête maintenant à présenter les résultats de l'étude." },
      { tr: "J'étais au bord de renoncer quand la réponse est arrivée." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Test",
    title: "Test de l'unité 1",
    objectives: ["vérifier les participes et les périphrases verbales"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« Gli aventi diritto » :", opts: ["ceux qui ont raison", "les ayants droit", "les propriétaires"] },
      { q: "« i passeggeri provenienti dall'estero » → « i passeggeri ___ provengono… »" },
      { q: "Accord : « Terminat___ i lavori… »" },
      { q: "Accord : « Finit___ la riunione… »" },
      { q: "« Vista la situazione » a :", opts: ["une valeur temporelle", "une valeur causale", "une valeur conditionnelle"] },
      { q: "« Il testo va rivisto » :", opts: ["va revu", "est à revoir", "est en cours de révision"] },
      { q: "« Il fenomeno va crescendo » :", opts: ["il faut l'augmenter", "va croissant", "va grandir"] },
      { q: "« C'è molto ___ fare. »" },
      { tr: "Les vérifications nécessaires faites, le projet est encore à revoir." },
      { tr: "Une fois la confirmation reçue, nous continuerons sans délai." }
    ]
  },
  "unit:c2-u02": {
    title: "Pluriels et formation des mots",
    grammarNote: "pluriels doubles · noms composés · altération · adjectifs savants"
  },
  "lesson:c2-u02-l1": {
    theme: "Vocabulaire avancé",
    title: "Le pluriel double",
    objectives: [
      "distinguer les deux pluriels d'un même nom",
      "choisir celui qui correspond au sens",
      "éviter les fautes habituelles"
    ],
    theory: [
      {
        h: "Un singulier, deux pluriels",
        p: "Une bonne douzaine de noms masculins ont deux pluriels : un régulier en <em>-i</em> (masculin) et un irrégulier en <em>-a</em> (féminin). La différence n'est pas stylistique : ce sont deux sens distincts."
      },
      {
        contrast: "Le phénomène te dira quelque chose : tes aïeux et aïeuls, tes cieux et ciels, tes yeux et œils-de-bœuf, tes travaux et travails font exactement cela, un singulier pour deux pluriels et deux sens. Ce qui change, c'est l'ampleur — l'italien en a une douzaine d'usage courant — et le partage : chez lui le féminin en <em>-a</em> tire vers le collectif et le corps, le masculin vers l'objet isolé et le figuré."
      },
      {
        h: "La règle générale",
        p: "La forme féminine en <em>-a</em> signifie en général <b>l'ensemble, le collectif, ou le sens corporel littéral</b> ; la masculine en <em>-i</em> signifie <b>les éléments isolés ou le sens figuré</b>."
      },
      {
        h: "Les paires qui comptent",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (le squelette humain) / <b>gli ossi</b> (des os isolés, ceux qu'on donne au chien)",
          "<em>il braccio</em> → <b>le braccia</b> (les bras du corps) / <b>i bracci</b> (les bras d'une grue, d'un fleuve)",
          "<em>il muro</em> → <b>le mura</b> (les remparts) / <b>i muri</b> (les murs d'une pièce)",
          "<em>il filo</em> → <b>le fila</b> (les fils d'un raisonnement, les ficelles) / <b>i fili</b> (les fils, les câbles)",
          "<em>il frutto</em> → <b>i frutti</b> (les fruits au sens de résultats) / <b>la frutta</b> (les fruits qu'on mange)",
          "<em>il dito</em> → <b>le dita</b> (les doigts d'une main, ensemble) / <b>i diti</b> (rare, isolés)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (une parure de lit) / <b>i lenzuoli</b> (des draps isolés)"
        ]
      }
    ],
    grammar: {
      title: "Les pluriels doubles",
      table: {
        head: ["singulier", "forme en -a", "forme en -i"],
        rows: [
          ["l'osso", "le ossa (le squelette)", "gli ossi (des os isolés)"],
          ["il braccio", "le braccia (du corps)", "i bracci (d'une grue, d'un fleuve)"],
          ["il muro", "le mura (les remparts)", "i muri (les murs d'une pièce)"],
          ["il filo", "le fila (les ficelles)", "i fili (les câbles)"],
          ["il frutto", "la frutta (les fruits qu'on mange)", "i frutti (les résultats)"],
          ["il dito", "le dita (les doigts)", "i diti (rare)"],
          ["il lenzuolo", "le lenzuola (une parure de lit)", "i lenzuoli (des draps isolés)"],
          ["il ciglio", "le ciglia (les cils)", "i cigli (les bords de la route)"]
        ]
      },
      examples: [
        { tr: "J'ai mal aux os." },
        { tr: "Le chien ronge les os." },
        { tr: "Les remparts de la ville sont médiévaux." },
        { tr: "Les murs de la maison sont minces." },
        { tr: "Il a récolté les fruits de son travail." },
        { tr: "À midi je mange toujours des fruits." }
      ]
    },
    vocab: [
      "os (squelette) / os isolés",
      "bras (du corps) / bras (d'une grue)",
      "remparts / murs d'une pièce",
      "ficelles d'un raisonnement / câbles",
      "fruits (aliment) / fruits (résultats)",
      "doigts",
      "cils / bords de la route",
      "parure de lit",
      "ronger",
      "médiéval",
      "tirer les ficelles",
      "récolter les fruits"
    ],
    exercises: [
      { q: "« Mi fanno male ___. » (j'ai mal aux os)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "« ___ della città sono medievali. » (les remparts)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Complète : « Ha raccolto ___ del suo lavoro. » (les fruits, résultats)" },
      { q: "Complète : « A pranzo mangio sempre ___. » (les fruits qu'on mange)" },
      { q: "Associe la forme au sens.", pairs: ["bras du corps", "bras d'une grue", "ficelles", "câbles"] },
      {
        q: "« Tirare le fila » veut dire :",
        opts: ["tirer sur les fils", "tirer les ficelles, mener la barque", "démêler"]
      },
      { q: "Complète les formes.", tr: "Les remparts de la ville sont anciens, mais les murs de ma maison sont minces." },
      { q: "« Le chien ronge les os. »" },
      { tr: "J'avais les doigts gelés et mal aux os." },
      { tr: "Il a enfin récolté les fruits de son travail." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Vocabulaire avancé",
    title: "Les noms composés et leurs pluriels",
    objectives: [
      "former le pluriel d'un nom composé",
      "reconnaître le type de composé",
      "éviter les fautes les plus fréquentes"
    ],
    theory: [
      {
        h: "Quatre schémas",
        list: [
          "<b>invariable</b> : <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>le second élément change</b> : <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>le premier change</b> : <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>les deux changent</b> : <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        contrast: "Les quatre schémas sont ceux du français, et deux paires se répondent au mot près : <em>le casseforti</em> sont tes coffres-forts, <em>i capiluoghi</em> tes chefs-lieux, <em>gli apriscatole</em> tes ouvre-boîtes. Comme chez toi, c'est le noyau qui porte la marque — <em>i capistazione</em> comme tes chefs de gare — et comme chez toi, l'intuition des locuteurs flanche : le dictionnaire tranche."
      },
      {
        h: "Une règle pratique pour « capo- »",
        p: "Quand <em>capo</em> désigne <b>la personne qui dirige</b>, c'est cette partie qui se met au pluriel : <em>i capistazione, i capireparto, i capifamiglia</em>. Quand <em>capo</em> désigne <b>le meilleur ou le début de quelque chose</b>, c'est le second élément qui change : <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Verbe + nom",
        p: "Les composés comme <em>portacenere, apriscatole, spazzaneve, salvagente</em> sont en général <b>invariables</b>, parce que le premier élément est une forme verbale. Il y a des exceptions, mais l'invariabilité est le choix sûr."
      }
    ],
    grammar: {
      title: "Pluriels des noms composés",
      table: {
        head: ["type", "singulier", "pluriel"],
        rows: [
          ["verbe + nom", "il portacenere", "i portacenere"],
          ["verbe + nom", "l'apriscatole", "gli apriscatole"],
          ["capo (personne)", "il capostazione", "i capistazione"],
          ["capo (le meilleur)", "il capolavoro", "i capolavori"],
          ["nom + nom", "il cavolfiore", "i cavolfiori"],
          ["nom + adjectif", "la cassaforte", "le casseforti"],
          ["adjectif + nom", "il bassofondo", "i bassifondi"],
          ["avec préposition", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "Les chefs de gare ont signé le procès-verbal." },
        { tr: "Il a écrit trois chefs-d'œuvre en dix ans." },
        { tr: "Les coffres-forts ont été vidés." },
        { tr: "Achète-moi deux ouvre-boîtes, s'il te plaît." },
        { tr: "Il y a vingt chefs-lieux de région." },
        { tr: "Les serviettes propres sont dans l'armoire." }
      ]
    },
    vocab: [
      "chef-d'œuvre",
      "chef-lieu",
      "chef de gare",
      "chef de famille",
      "coffre-fort",
      "les bas-fonds",
      "ouvre-boîtes",
      "cendrier",
      "chasse-neige",
      "bouée de sauvetage",
      "procès-verbal",
      "vider"
    ],
    exercises: [
      { q: "Pluriel de « il capolavoro » : ___" },
      { q: "Pluriel de « il capostazione » : ___" },
      { q: "Pluriel de « la cassaforte » : ___" },
      { q: "Pluriel de « il portacenere » : ___" },
      {
        q: "Pourquoi « i capistazione » et pas « i capostazioni » ?",
        opts: [
          "C'est une exception sans règle",
          "Parce que capo désigne ici la personne qui dirige",
          "Parce que stazione est féminin"
        ]
      },
      {
        q: "Quels composés sont invariables ?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Complète les pluriels.",
        tr: "Il y a vingt chefs-lieux de région ; les coffres-forts ont été vidés dans la nuit."
      },
      { q: "« Les serviettes propres sont dans l'armoire. »" },
      { tr: "Les chefs de service ont demandé une réunion avec la direction." },
      { tr: "Il a écrit trois chefs-d'œuvre en moins de dix ans." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Vocabulaire avancé",
    title: "Formes altérées et adjectifs savants",
    objectives: [
      "employer les suffixes d'altération à dessein",
      "reconnaître les adjectifs bâtis sur une autre racine",
      "ajuster le registre lexical"
    ],
    theory: [
      {
        h: "Alterazione : quatre directions",
        list: [
          "<b>diminutif</b> : <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>augmentatif</b> : <em>-one</em> — <em>portone, librone</em>",
          "<b>affectif</b> (<em>vezzeggiativo</em>) : <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>péjoratif</b> : <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        contrast: "Tes suffixes existent (-et, -ette, -on, -âtre, -asse) mais ils ne sont plus productifs : tu ne fabriques pas « une maisonnette » à la volée pour toute maison un peu petite, tu dis « une petite maison ». L'italien, lui, altère presque n'importe quel nom en direct, et le choix du suffixe porte une nuance affective que ton adjectif ne rend pas. C'est un moyen d'expression à acquérir, pas une équivalence à transposer."
      },
      {
        h: "Attention aux pièges lexicaux",
        p: "Tout mot portant l'un de ces suffixes n'est pas une forme altérée. <em>Il mattone</em> est une brique, pas un « grand matin » ; <em>il tacchino</em> est une dinde ; <em>il burrone</em> est un ravin, pas « beaucoup de beurre ». Ce sont les <em>falsi alterati</em>."
      },
      {
        h: "Des adjectifs bâtis sur une autre racine",
        p: "L'italien de registre élevé emploie des adjectifs d'origine latine ou grecque sans lien formel avec le nom : <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>. La série est la tienne, adjectif par adjectif : cardiaque, hydrique, oculaire, urbain, fraternel, équin. Rien à apprendre, seulement à reconnaître."
      },
      {
        h: "Des adjectifs sans superlatif",
        p: "Certains adjectifs n'ont pas de superlatif, soit qu'ils expriment déjà l'intensité (<em>eccezionale, splendido, straordinario, immenso</em>), soit qu'ils soient eux-mêmes altérés (<em>bellino, grandicello</em>). « Eccezionalissimo » se lit comme une plaisanterie."
      }
    ],
    grammar: {
      title: "Suffixes et adjectifs savants",
      table: {
        head: ["nom", "adjectif savant", "exemple"],
        rows: [
          ["il cuore", "cardiaco", "arresto cardiaco"],
          ["l'acqua", "idrico", "risorse idriche"],
          ["l'occhio", "oculare", "visita oculistica"],
          ["la città", "urbano", "traffico urbano"],
          ["il cavallo", "equino / ippico", "centro ippico"],
          ["il fratello", "fraterno", "affetto fraterno"],
          ["il vescovo", "episcopale", "sede episcopale"],
          ["l'anno", "annuale", "relazione annuale"]
        ]
      },
      examples: [
        { tr: "Quel temps de chien ! Par cette pluie on ne sort pas." },
        { tr: "Nous habitons une petite maison à l'écart de la ville." },
        { tr: "La porte cochère de l'immeuble est toujours fermée à clé." },
        { tr: "Les ressources hydriques du pays diminuent." },
        { tr: "Il a fait un arrêt cardiaque." },
        { tr: "Le trafic urbain a augmenté de vingt pour cent." }
      ]
    },
    vocab: [
      "une forme altérée",
      "diminutif",
      "augmentatif",
      "forme péjorative",
      "faux diminutif ou augmentatif",
      "cardiaque",
      "hydrique",
      "oculaire",
      "urbain",
      "fraternel",
      "un temps de chien",
      "brique (non : grand matin)"
    ],
    exercises: [
      {
        q: "Associe le nom à son adjectif savant.",
        pairs: ["cardiaque", "hydrique", "oculaire", "urbain"]
      },
      { q: "« Il mattone » est :", opts: ["un grand matin", "une brique", "un diminutif de matto"] },
      { q: "Quel suffixe est péjoratif ?", opts: ["-ino", "-one", "-accio"] },
      { q: "Forme le diminutif de « casa » : ___" },
      {
        q: "Pourquoi « eccezionalissimo » sonne-t-il faux ?",
        opts: ["C'est trop long", "Parce que eccezionale exprime déjà l'intensité", "Parce que c'est un emprunt"]
      },
      {
        q: "Lesquels sont des falsi alterati (ni diminutifs ni augmentatifs) ?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Complète les adjectifs savants.", tr: "Les ressources hydriques diminuent et le trafic urbain augmente." },
      { q: "« Quel temps de chien ! »" },
      { tr: "Les ressources hydriques du pays diminuent depuis des années." },
      { tr: "Nous habitons une petite maison juste à l'écart de la ville." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Test",
    title: "Test de l'unité 2",
    objectives: ["vérifier les pluriels doubles, les composés et la formation des mots"],
    theory: [{ p: "Dix tâches. On valide à 70 %." }],
    exercises: [
      { q: "« Mi fanno male ___. »", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "« ___ della città sono medievali. »", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "« A pranzo mangio ___. » (les fruits qu'on mange)" },
      { q: "Pluriel de « il capolavoro » : ___" },
      { q: "Pluriel de « il capostazione » : ___" },
      { q: "Pluriel de « la cassaforte » : ___" },
      { q: "Associe.", pairs: ["cardiaque", "hydrique", "urbain", "fraternel"] },
      { q: "« Il burrone » est :", opts: ["beaucoup de beurre", "un ravin", "un augmentatif de burro"] },
      { tr: "Les coffres-forts des chefs de service ont été vérifiés." },
      { tr: "Les ressources hydriques urbaines exigent une action immédiate." }
    ]
  },
  "unit:c2-u03": {
    title: "Nuances et textes authentiques",
    grammarNote: "ironie · argot · régionalismes · latinismes"
  },
  "lesson:c2-u03-l1": {
    theme: "Style et culture",
    title: "L'ironie en italien",
    objectives: [
      "reconnaître l'ironie à l'écrit et à l'oral",
      "employer les marques de l'ironie",
      "distinguer l'ironie du sarcasme"
    ],
    theory: [
      {
        h: "Les marques de l'ironie",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — accord feint",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> retournés : <em>Bravo, giusto quello che serviva.</em>",
          "exagération lexicale : <em>una tragedia</em> pour une broutille",
          "un diminutif dans un contexte sérieux : <em>un problemino da due milioni</em>"
        ]
      },
      {
        contrast: "Tout ce répertoire est le tien, marque par marque : <em>figurati</em> est « figure-toi », l'accord feint de « tu parles ! », le diminutif ironique, les guillemets de distance. Et sur la litote tu pars même en avance, puisque ta langue en a fait une figure nationale : « ce n'est pas mal » pour un chef-d'œuvre relève du même mouvement que <em>non è male</em>."
      },
      {
        h: "Ironie et sarcasme",
        p: "L'ironie laisse une porte de sortie à l'autre, le sarcasme non. <em>Che bella idea</em> dit avec un sourire est ironique ; la même phrase appuyée et sans sourire est sarcastique. Les Italiens usent des deux, mais le sarcasme se signale par l'intonation plus que par les mots."
      },
      {
        h: "L'atténuation en italien",
        p: "<em>Non è male</em> (d'une chose excellente), <em>diciamo che non è andata benissimo</em> (d'un désastre), <em>qualche problemino</em> (d'une crise sérieuse). La litote est très productive en italien : <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>."
      }
    ],
    grammar: {
      title: "Les procédés de l'ironie",
      table: {
        head: ["procédé", "exemple", "sens"],
        rows: [
          ["accord feint", "Ma figurati!", "mais bien sûr, tu parles"],
          ["litote", "Non è male.", "c'est excellent"],
          ["diminutif", "un problemino", "un problème sérieux"],
          ["exagération", "una tragedia", "un désagrément mineur"],
          ["guillemets de distance", "la \"riforma\"", "la distance de qui écrit"],
          ["question rhétorique", "E chi l'avrebbe detto?", "c'était évident depuis le début"]
        ]
      },
      examples: [
        { tr: "Bravo, juste ce qu'il fallait." },
        { tr: "Disons que ça ne s'est pas brillamment passé." },
        { tr: "Un petit problème de deux millions d'euros." },
        { tr: "Ah, donc maintenant c'est ma faute. Bien sûr." },
        { tr: "La « réforme » a aggravé la situation." },
        { tr: "Non sans difficulté, nous sommes arrivés au bout." }
      ]
    },
    vocab: [
      "mais bien sûr, tu parles",
      "il ne manquait plus que ça",
      "arrête !",
      "litote",
      "atténuation",
      "sarcasme",
      "se moquer de",
      "souligner, insister",
      "ton",
      "allusion",
      "double sens",
      "pas peu, plutôt beaucoup"
    ],
    exercises: [
      {
        q: "« Non è male » à propos d'un grand film est :",
        opts: ["une critique", "une litote, un éloge par atténuation", "de l'indifférence"]
      },
      {
        q: "« Un problemino da due milioni » est un exemple de :",
        opts: ["diminutif ironique", "faute lexicale", "registre administratif"]
      },
      {
        q: "En quoi l'ironie diffère-t-elle du sarcasme ?",
        opts: ["En rien", "L'ironie laisse une sortie, le sarcasme non", "Le sarcasme est toujours écrit"]
      },
      { q: "Associe.", pairs: ["tu parles, bien sûr", "il ne manquait plus que ça", "arrête !", "plutôt beaucoup"] },
      {
        q: "Les guillemets de « la \"riforma\" » signalent :",
        opts: ["une citation", "la distance de qui écrit vis-à-vis du mot", "un terme technique"]
      },
      {
        q: "Complète la phrase ironique.",
        tr: "Bravo, juste ce qu'il fallait. Disons que ça ne s'est pas brillamment passé."
      },
      { q: "« Non sans difficulté, nous sommes arrivés au bout. »" },
      {
        q: "« E chi l'avrebbe detto? » à propos d'une évidence veut dire :",
        opts: ["personne ne s'y attendait", "c'était évident depuis le début", "qui a dit ça ?"]
      },
      { tr: "Disons que ça ne s'est pas tout à fait brillamment passé, pour rester poli." },
      { tr: "Un petit problème de deux millions d'euros, trois fois rien." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Style et culture",
    title: "Argot et régionalismes",
    objectives: [
      "reconnaître l'argot des jeunes et les régionalismes",
      "distinguer le registre familier du dialecte",
      "savoir ce qu'il ne faut pas écrire"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (aucune idée), <em>bella!</em> (salut), <em>tipo</em> (genre), <em>raga</em> (les gars, de <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (quelle plaie, un peu grossier), <em>spoilerare</em>, <em>cringiare</em>. Cette couche bouge vite : ce qui est vivant aujourd'hui sonnera comme un enregistrement d'archives dans cinq ans."
      },
      {
        contrast: "Deux repères pour toi. <em>Boh</em> est ton « bof » à la lettre, geste compris. Et <em>a me mi piace</em> est en italien un trait familier fautif à l'écrit, alors que ton « moi, je » est parfaitement standard : c'est la construction française légitime qui passe du mauvais côté en italien, et c'est pour ça qu'elle se glisse dans tes phrases sans t'alerter."
      },
      {
        h: "Des régionalismes à l'intérieur du standard",
        list: [
          "nord : <em>anguria</em> (pastèque), <em>bidello</em>, <em>ciao</em> venu de <em>schiavo</em>",
          "centre : <em>cocomero</em> (pastèque), <em>a me mi</em> (familier, fautif à l'écrit)",
          "sud : <em>melone d'acqua</em>, passato remoto fréquent, <em>mo'</em> (maintenant)",
          "partout : <em>magari</em>, <em>mica</em>, <em>manco</em> (même pas, familier)"
        ]
      },
      {
        h: "Un dialecte n'est pas un argot",
        p: "Le napolitain et le sicilien sont des <b>langues distinctes</b> issues du latin à côté du toscan, avec leur littérature et leur grammaire. Les appeler « italien mal parlé » est faux et culturellement maladroit : la même erreur que de traiter l'occitan de français déformé."
      },
      {
        trap: "<em>Mica</em> (« pas du tout », « loin de là ») est partout à l'oral : <em>Non è mica facile.</em> Le français n'a pas d'équivalent d'un seul mot ; dans un texte formel, remplace-le par <em>affatto</em> ou supprime-le."
      }
    ],
    grammar: {
      title: "Les registres familiers",
      table: {
        head: ["expression", "sens", "registre"],
        rows: [
          ["boh", "aucune idée", "familier"],
          ["mica", "pas du tout, loin de là", "familier, très fréquent"],
          ["magari", "si seulement / peut-être / même", "partout"],
          ["mo'", "maintenant", "centre-sud"],
          ["che palle", "quelle plaie", "un peu grossier"],
          ["tipo", "genre", "argot des jeunes"],
          ["dai!", "allez ! / arrête !", "partout"],
          ["figurati", "je t'en prie / tu parles", "partout"]
        ]
      },
      examples: [
        { tr: "Ce n'est pas du tout aussi facile que ça en a l'air." },
        { tr: "Je ne sais pas, aucune idée." },
        { tr: "Allez, ne le prends pas mal !" },
        { tr: "Il était genre minuit quand on est partis." },
        { tr: "Si seulement c'était aussi simple." },
        { tr: "J'arrive tout de suite, attends une seconde.", note: "centre-sud" }
      ]
    },
    vocab: [
      "argot, jargon",
      "régionalisme",
      "pas du tout, loin de là",
      "aucune idée",
      "allez !",
      "genre",
      "maintenant (régional)",
      "pastèque (nord / centre)",
      "du tout (formel)",
      "familier",
      "vulgaire",
      "vieilli"
    ],
    exercises: [
      {
        q: "« Non è mica facile » veut dire :",
        opts: ["c'est un peu facile", "ce n'est pas facile du tout", "c'est très facile"]
      },
      { q: "« Boh » est :", opts: ["un cri de douleur", "aucune idée", "une salutation"] },
      {
        q: "Le napolitain est :",
        opts: ["de l'italien mal parlé", "une langue romane distincte", "de l'argot des jeunes"]
      },
      { q: "Associe le régionalisme à la région.", pairs: ["nord", "centre", "centre-sud", "sud"] },
      { q: "Remplace « mica » par la forme formelle : « Non è ___ facile. »" },
      {
        q: "« A me mi piace » est :",
        opts: ["correct à l'écrit", "familier, évité à l'écrit", "purement dialectal"]
      },
      {
        q: "Complète les tournures familières.",
        tr: "Je ne sais pas, aucune idée. De toute façon ce n'est pas du tout aussi facile que ça en a l'air."
      },
      { q: "« Allez, ne le prends pas mal ! »" },
      { tr: "Je ne sais pas, il était genre minuit, ce n'est pas si facile de s'en souvenir." },
      { tr: "Ce n'est pas du tout aussi facile que ça en a l'air, crois-moi." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Style et culture",
    title: "Latinismes et registre savant",
    objectives: [
      "reconnaître les latinismes dans les textes juridiques et universitaires",
      "les employer à bon escient",
      "clore le niveau C2"
    ],
    theory: [
      {
        h: "Le latin est vivant dans l'italien officiel",
        p: "L'italien garde un large stock d'expressions latines dans la langue juridique et universitaire courante : <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>pro tempore</em>."
      },
      {
        contrast: "La plupart sont aussi les tiennes et se lisent sans effort. Deux font exception et méritent d'être apprises : <em>una tantum</em>, que le français rend par « à titre exceptionnel » ou « versement unique », et <em>in itinere</em>, que tu dis simplement « en cours ». Toutes deux sont d'un usage banal en italien administratif, sans la moindre solennité."
      },
      {
        h: "Les plus fréquents",
        list: [
          "<em>de facto</em> / <em>de iure</em> — de fait / de droit",
          "<em>ex post</em> / <em>ex ante</em> — après coup / en amont",
          "<em>in itinere</em> — en cours",
          "<em>una tantum</em> — en une seule fois",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (sans date fixée)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (le défunt, en droit successoral)"
        ]
      },
      {
        h: "Le registre savant au-delà du latin",
        p: "<em>Vieppiù</em> (de plus en plus), <em>altresì</em> (en outre), <em>ancorché</em> (quoique), <em>laddove</em> (alors que), <em>giacché</em> (puisque), <em>onde</em> (afin de). Ils appartiennent au droit, au journalisme sérieux et à l'essai ; à l'oral ils sonnent pédants. Tes « en outre », « quoique » et « puisque » les couvrent presque un à un."
      },
      {
        h: "Clore le niveau",
        p: "En C2 il ne s'agit plus d'ajouter des formes, mais de <b>choisir la bonne</b>. Le même contenu en registre familier, standard et savant fait trois messages différents, et la maîtrise consiste à choisir sciemment."
      }
    ],
    grammar: {
      title: "Latinismes et formes savantes",
      table: {
        head: ["expression", "sens", "contexte"],
        rows: [
          ["de facto / de iure", "de fait / de droit", "droit"],
          ["ex post / ex ante", "après coup / en amont", "économie, droit"],
          ["in itinere", "en cours", "administration"],
          ["una tantum", "en une seule fois", "finances"],
          ["sine die", "sans date fixée", "droit"],
          ["altresì", "en outre", "droit, journalisme"],
          ["ancorché", "quoique", "journalisme"],
          ["laddove", "alors que", "essai"]
        ]
      },
      examples: [
        { tr: "Le contrat a de facto déjà expiré." },
        { tr: "La prime est versée en une seule fois." },
        { tr: "La réunion a été reportée sans date fixée." },
        { tr: "Le dossier est encore en cours." },
        { tr: "Il est en outre signalé que le délai n'est pas prorogeable." },
        { tr: "Alors que la première étude indiquait une baisse, la seconde montre une stabilité." }
      ]
    },
    vocab: [
      "de facto / de jure",
      "après coup / en amont",
      "en cours",
      "en une seule fois",
      "sans date fixée",
      "ad hoc",
      "en outre",
      "quoique",
      "alors que",
      "puisque",
      "verser, décaisser",
      "reporter"
    ],
    exercises: [
      { q: "Associe le latinisme à son sens.", pairs: ["de facto", "en une seule fois", "sans date fixée", "en cours"] },
      {
        q: "« Il bonus è erogato una tantum » veut dire :",
        opts: ["versé chaque mois", "versé en une seule fois", "versé une fois par an"]
      },
      {
        q: "« Rinviata sine die » veut dire :",
        opts: ["reportée d'une semaine", "reportée sans date fixée", "annulée"]
      },
      { q: "Remplace « anche » par la forme savante : « Si segnala ___ che… »" },
      { q: "Remplace « mentre » par la forme de l'essai : « ___ il primo studio indicava un calo… »" },
      {
        q: "En quoi consiste la maîtrise en C2 ?",
        opts: [
          "À connaître le plus grand nombre de mots",
          "À choisir sciemment le registre qui convient à la situation",
          "À toujours employer les formes savantes"
        ]
      },
      { q: "Complète le texte juridique.", tr: "Le contrat a de facto déjà expiré, et le dossier est encore en cours." },
      { q: "« Il est en outre signalé que le délai n'est pas prorogeable. »" },
      { tr: "La réunion a été reportée sans date fixée, pour des raisons techniques." },
      { tr: "Le versement se fait en une seule fois, une fois la demande déposée." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Examen",
    title: "Test — révision des unités 1 à 3",
    objectives: ["vérifier les participes, la formation des mots, les registres et les nuances"],
    theory: [{ p: "Douze tâches sur les trois premières unités. On valide à 70 %." }],
    exercises: [
      { q: "« Gli aventi diritto » :", opts: ["ceux qui ont raison", "les ayants droit", "les propriétaires"] },
      { q: "Accord : « Terminat___ i lavori… »" },
      { q: "« Il testo va rivisto » :", opts: ["va revu", "est à revoir", "est en cours de révision"] },
      { q: "« Mi fanno male ___. »", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "Pluriel de « la cassaforte » : ___" },
      { q: "Pluriel de « il capostazione » : ___" },
      { q: "Associe.", pairs: ["hydrique", "cardiaque", "urbain", "oculaire"] },
      { q: "« Non è mica facile » :", opts: ["un peu facile", "pas facile du tout", "très facile"] },
      { q: "« Una tantum » :", opts: ["chaque mois", "en une seule fois", "une fois par an"] },
      { q: "Remplace « anche » : « Si segnala ___ che… »" },
      { q: "« Le dossier est encore en cours et a été reporté sans date fixée. »" },
      { tr: "Vu la situation, le projet est à revoir entièrement avant l'échéance." }
    ]
  }
});
