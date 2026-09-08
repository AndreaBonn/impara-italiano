/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/a1-02.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "unit:a1-u04": { title: "Vêtements et tailles", grammarNote: "adjectifs · couleurs · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Vêtements et achats",
    title: "L'accord de l'adjectif et les couleurs",
    objectives: [
      "accorder la terminaison de l'adjectif au nom",
      "nommer les couleurs et savoir lesquelles sont invariables",
      "décrire un article en vitrine"
    ],
    theory: [
      {
        h: "L'adjectif suit le nom et s'accorde avec lui",
        p: "L'adjectif italien se place en général <b>après</b> le nom et en prend le genre et le nombre : <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. Rien de nouveau ici : c'est ton « un sac rouge », « deux sacs rouges », même place et même accord."
      },
      {
        h: "Deux classes de terminaisons",
        list: [
          "<b>quatre formes</b> (-o / -a / -i / -e) : <em>rosso, rossa, rossi, rosse</em>",
          "<b>deux formes</b> (-e / -i) : <em>verde, verdi</em> — la même forme aux deux genres, comme « rouge / rouges »",
          "<b>invariables</b> : <em>blu, rosa, viola, beige</em> et les emprunts (<em>chic</em>)"
        ]
      },
      {
        trap: "Avec un groupe mixte, le masculin l'emporte : <em>Marco e Anna sono <b>italiani</b></em>. Une femme parmi cent hommes ne change rien ; un homme parmi cent femmes bascule tout le groupe au masculin. Exactement ta règle."
      },
      {
        h: "Des couleurs qui étaient des noms",
        p: "<em>Rosa</em>, <em>viola</em> et <em>arancione</em> viennent de noms de plantes, d'où l'invariabilité de <em>rosa</em> et <em>viola</em> — comme « des chaussures rose » en français. <em>Marrone</em> appartient en théorie à ce groupe, mais les Italiens disent aussi <em>scarpe marroni</em> et personne ne les corrige."
      }
    ],
    grammar: {
      title: "L'accord de l'adjectif",
      table: {
        head: ["nom", "type -o", "type -e", "invariable"],
        rows: [
          ["il vestito (m sing.)", "nero", "verde", "blu"],
          ["la gonna (f sing.)", "nera", "verde", "blu"],
          ["i pantaloni (m plur.)", "neri", "verdi", "blu"],
          ["le scarpe (f plur.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "Une chemise blanche, s'il vous plaît." },
        { tr: "Ces chaussures me serrent." },
        { tr: "Un manteau bleu, taille moyenne.", note: "blu ne s'accorde pas" },
        { tr: "Le pantalon vert ne me va pas." },
        { tr: "Quelle jolie veste !" }
      ]
    },
    vocab: [
      "robe ; vêtement",
      "jupe",
      "pantalon (toujours au pluriel)",
      "chemise",
      "tee-shirt",
      "veste",
      "manteau",
      "chaussures",
      "rouge",
      "noir",
      "blanc",
      "vert (même forme aux deux genres)",
      "bleu (invariable)",
      "gris"
    ],
    exercises: [
      {
        q: "« La gonna » est féminin. Comment écris-tu « noire » ?",
        opts: ["nero", "nera", "nere"],
        why: "Féminin singulier → nera."
      },
      {
        q: "Quel adjectif a la même forme aux deux genres ?",
        opts: ["rosso", "verde", "grigio"],
        why: "Les adjectifs en -e ont deux formes : verde / verdi."
      },
      {
        q: "Complète : « Le scarpe ___. » (des chaussures noires)",
        why: "Scarpe est féminin pluriel → nere."
      },
      {
        q: "Complète : « I pantaloni ___. » (un pantalon bleu)",
        why: "Blu est invariable — jamais « blui »."
      },
      { q: "Complète les terminaisons.", tr: "Une chemise blanche et deux tee-shirts noirs, s'il vous plaît." },
      {
        q: "« Marco e Anna sono ___. » (italiens)",
        opts: ["italiane", "italiani", "italiano"],
        why: "Un groupe mixte prend le masculin pluriel."
      },
      { q: "Associe le vêtement à son sens.", pairs: ["jupe", "manteau", "veste", "chaussures"] },
      { tr: "Ces chaussures me serrent." },
      { tr: "Une veste grise s'il vous plaît, taille moyenne." },
      { tr: "Quelle jolie chemise blanche !" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Vêtements et achats",
    title: "Les démonstratifs",
    objectives: [
      "distinguer questo de quello",
      "accorder les deux formes",
      "désigner un article dans un magasin sans le montrer du doigt"
    ],
    theory: [
      {
        h: "Près et loin",
        p: "<strong>Questo</strong> désigne ce qui est près de celui qui parle (« celui-ci »), <strong>quello</strong> ce qui est plus loin (« celui-là »). L'italien n'a pas de troisième degré courant : l'ancien <em>codesto</em> survit en Toscane et dans la langue administrative."
      },
      {
        contrast: "Le français distingue par un suffixe — ce livre-ci, ce livre-là — et se contente le plus souvent de « ce » tout court. L'italien tranche toujours entre les deux, et laisser tomber la distinction n'est pas une option."
      },
      {
        h: "Questo s'accorde simplement",
        p: "<em>questo, questa, questi, queste</em>. Devant une voyelle il se contracte, à l'oral comme à l'écrit : <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello se comporte comme un article",
        p: "Placé <b>devant un nom</b>, <em>quello</em> prend des formes parallèles à <em>il / lo / la / i / gli / le</em> : <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Employé seul, sans nom, il retrouve les quatre formes ordinaires : <em>Prendo quello.</em> Traite-le comme un article et les sept formes cessent de paraître arbitraires."
      }
    ],
    grammar: {
      title: "Questo et quello",
      table: {
        head: ["article", "quello + nom", "questo", "exemple"],
        rows: [
          ["il", "quel", "questo", "quel cappotto / questo cappotto"],
          ["lo", "quello", "questo", "quello zaino"],
          ["l' (m)", "quell'", "quest'", "quell'orologio"],
          ["i", "quei", "questi", "quei pantaloni"],
          ["gli", "quegli", "questi", "quegli stivali"],
          ["la", "quella", "questa", "quella gonna"],
          ["le", "quelle", "queste", "quelle scarpe"]
        ]
      },
      examples: [
        { tr: "Combien coûte ce sac ?" },
        { tr: "Je préfère ce manteau-là." },
        { tr: "Ces bottes-là sont en solde." },
        { tr: "Je prends celui-là, merci.", note: "employé seul — formes ordinaires" },
        { tr: "Cette année, le style est minimaliste." }
      ]
    },
    vocab: [
      "taille (vêtement)",
      "pointure",
      "cabine d'essayage",
      "essayer",
      "les soldes",
      "réduction",
      "vitrine",
      "cher / bon marché",
      "serré / ample",
      "je peux l'essayer ?",
      "ça me va bien",
      "vous avez une taille M ?"
    ],
    dialogue: [
      "Excusez-moi, je peux essayer cette chemise ?",
      "Bien sûr. Vous faites quelle taille ?",
      "Du M. Vous avez aussi celle-là en bleu ?",
      "Oui, mais seulement en L. La cabine est au fond.",
      "Merci. Celle-ci me serre un peu."
    ],
    exercises: [
      {
        q: "Quelle forme convient devant « zaino » ?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello se comporte comme <i>lo</i> : devant z et s+consonne, il donne <b>quello</b>."
      },
      {
        q: "Complète : « ___ scarpe sono in saldo. » (ces chaussures-là)",
        why: "Féminin pluriel : le → quelle."
      },
      {
        q: "Complète : « ___ anno vado in Italia. » (cette année)",
        why: "Questo se contracte en quest' devant une voyelle."
      },
      {
        q: "Choisis la bonne forme de « quello ».",
        items: ["manteau", "bottes", "jupe", "pantalon", "montre"]
      },
      {
        q: "« Prendo quello. » Pourquoi pas « quel » ?",
        opts: ["C'est une faute", "Parce que quello est employé seul, sans nom", "Parce que c'est un pluriel"],
        why: "Les formes courtes (quel, quei, quegli) n'existent que devant un nom."
      },
      { q: "« Combien coûte ce sac ? »" },
      { tr: "Je peux essayer cette veste-là ?" },
      {
        q: "Tu es dans un magasin de vêtements.",
        setting: "Une boutique du centre, pendant les soldes.",
        lines: [
          { tr: "Bonjour, vous cherchez quelque chose en particulier ?" },
          { tr: "Demande si tu peux essayer cette jupe.", answerTr: "Je peux essayer cette jupe ?" },
          { tr: "Bien sûr. Quelle taille ?" },
          { tr: "Dis du M.", answerTr: "Du M, merci." }
        ]
      },
      { tr: "Ces bottes noires sont en solde." },
      { tr: "Excusez-moi, vous avez cette chemise en M ?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Vêtements et achats",
    title: "Prix, nombres au-delà de cent, payer",
    objectives: [
      "demander un prix et comprendre la réponse",
      "compter au-delà de cent",
      "payer par carte ou en espèces"
    ],
    theory: [
      {
        h: "Les nombres au-delà de cent",
        p: "<em>Cento</em> ne change jamais : <em>duecento, trecento</em>. <em>Mille</em> devient <em>-mila</em> au pluriel : <em>duemila, tremila</em>. Sur ce point l'italien est plus simple que le français, qui écrit « deux cents » avec un s et « quatre-vingts » sans logique apparente."
      },
      {
        contrast: "Les séparateurs sont les tiens : <em>1.500</em> pour les milliers, <em>2,50</em> avec la virgule décimale. Un anglophone se trompe en permanence sur les étiquettes ; toi, tu les lis telles quelles."
      },
      {
        h: "Les prix se disent en abrégé",
        p: "<em>Due e cinquanta</em> = 2,50 €. Le mot <em>euro</em> est souvent omis et, quand il reste, il <b>ne prend pas de pluriel</b> : <em>trenta euro</em>, jamais « euri ». Là, il faut corriger le réflexe, puisque tu écris « trente euros »."
      },
      {
        h: "Payer",
        p: "<em>In contanti</em> (en espèces) ou <em>con la carta</em> (par carte). À connaître : <em>lo scontrino</em> (le ticket) et <em>la ricevuta</em>. En Italie le ticket a une valeur légale et le commerçant est tenu de l'émettre."
      },
      {
        tip: "<em>Quanto costa?</em> porte sur une chose, <em>quanto costano?</em> sur plusieurs. <em>Quant'è?</em> veut dire « ça fait combien en tout ? » à la caisse."
      }
    ],
    grammar: {
      title: "Les nombres et la demande de prix",
      table: {
        head: ["écrit", "en italien", "remarque"],
        rows: [
          ["100 / 200", "cento / duecento", "cento ne varie jamais"],
          ["1000 / 2000", "mille / duemila", "mille → -mila au pluriel"],
          ["1500", "millecinquecento", "en un seul mot"],
          ["2,50 €", "due e cinquanta", "euro est souvent omis"],
          ["ça coûte combien ?", "quanto costa?", "une chose"],
          ["ils coûtent combien ?", "quanto costano?", "plusieurs choses"]
        ]
      },
      examples: [
        { tr: "Combien coûte ce sac ? — Quatre-vingt-cinq euros." },
        { tr: "Ça fait combien en tout ?" },
        { tr: "Je peux payer par carte ?" },
        { tr: "Espèces seulement, désolé." },
        { tr: "Je peux avoir le ticket ?" },
        { tr: "Il y a vingt pour cent de réduction." }
      ]
    },
    vocab: [
      "ça coûte / ils coûtent combien ?",
      "ça fait combien en tout ?",
      "en espèces",
      "par carte",
      "ticket de caisse",
      "monnaie",
      "cent / mille",
      "pour cent",
      "c'est trop cher",
      "une affaire",
      "prix",
      "gratuit"
    ],
    exercises: [
      { q: "Quel nombre est « millecinquecento » ?", opts: ["150", "1500", "15000"] },
      {
        q: "Quelle forme est correcte ?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro ne prend pas de pluriel en italien, contrairement au français."
      },
      { q: "Écris en chiffres : « duemilaventicinque »" },
      {
        q: "Complète : « ___ costano queste scarpe? »",
        why: "Quanto ne change pas ici, mais le verbe si : costano (pluriel)."
      },
      { q: "« Je peux payer par carte ? »" },
      {
        q: "Le vendeur dit « Sono ventidue e cinquanta ». Tu paies combien ?",
        opts: ["22,50 €", "2,25 €", "225 €"]
      },
      {
        q: "Complète l'échange à la caisse.",
        tr: "— Ça fait combien en tout ? — Quarante-trois euros. — Je peux payer par carte ?"
      },
      { q: "Associe les expressions.", pairs: ["ticket de caisse", "monnaie", "en espèces", "gratuit"] },
      { tr: "Ça fait cent vingt euros, avec dix pour cent de réduction." },
      { tr: "Combien coûtent ces bottes en vitrine ?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Grammaire de base",
    title: "Quantité et intensité",
    objectives: [
      "distinguer molto adverbe de molto adjectif",
      "employer troppo, poco, tanto, abbastanza",
      "intensifier un adjectif avec -issimo"
    ],
    theory: [
      {
        h: "Un mot, deux rôles",
        p: "<strong>Molto</strong> devant un adjectif ou un verbe est un <b>adverbe</b> et ne s'accorde pas : <em>molto bella</em>, <em>lavoro molto</em>. Devant un nom, c'est un <b>adjectif</b> qui s'accorde : <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. Même règle pour <em>poco, troppo, tanto</em>."
      },
      {
        contrast: "Le français fait exactement ce partage, mais avec deux mots différents : « très belle » (adverbe) contre « beaucoup d'amis » (quantité). L'italien réutilise le même mot dans les deux rôles, et c'est là qu'on se trompe : il faut décider à chaque fois si le mot porte sur un nom ou sur autre chose."
      },
      {
        h: "Un test qui marche à tous les coups",
        p: "Pose la question : « combien de quoi ? » → adjectif, il s'accorde. « à quel point ? » → adverbe, forme figée. <em>Ho molti libri</em> (combien de livres) contre <em>Sono molto stanca</em> (à quel point fatiguée)."
      },
      {
        h: "Le superlatif en -issimo",
        p: "Coupe la terminaison de l'adjectif et ajoute <em>-issimo/-issima/-issimi/-issime</em> : <em>bello → bellissimo</em>, <em>caro → carissimo</em>. Le français n'a pas cet outil et doit passer par « très » ou « extrêmement » ; l'italien l'utilise sans arrêt."
      },
      {
        trap: "<b>Poco</b> veut dire « peu », tandis que <b>un po' di</b> veut dire « un peu de ». Ce n'est pas la même chose : <em>ho poco tempo</em> (je manque de temps, c'est une plainte) contre <em>ho un po' di tempo</em> (j'ai un peu de temps, et ça va). Le français distingue de la même façon."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["rôle", "forme", "exemple"],
        rows: [
          ["adverbe (à quel point)", "figée", "È molto caro. / Costa troppo."],
          ["adjectif (combien de)", "s'accorde", "Ho molti amici. / Troppa gente."],
          ["assez", "abbastanza (figée)", "È abbastanza grande."],
          ["superlatif", "-issimo", "carissimo, bellissima"],
          ["trop peu / trop", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "Cette veste est très élégante.", note: "adverbe — pas d'accord" },
        { tr: "Il y a beaucoup de monde dans le magasin.", note: "adjectif — molte" },
        { tr: "Trop cher, merci quand même." },
        { tr: "J'ai peu d'argent ce mois-ci." },
        { tr: "C'est absolument magnifique !" },
        { tr: "Assez bien, merci." }
      ]
    },
    vocab: [
      "très / beaucoup",
      "peu",
      "un peu",
      "trop",
      "tellement, beaucoup",
      "assez, plutôt",
      "plus / moins",
      "magnifique",
      "très cher",
      "argent (toujours pluriel en italien)",
      "merci quand même",
      "je vais y réfléchir"
    ],
    exercises: [
      {
        q: "« Ci sono ___ persone. » (beaucoup de monde)",
        opts: ["molto", "molte", "molti"],
        why: "Devant un nom molto s'accorde ; persone est féminin pluriel."
      },
      {
        q: "« Questa borsa è ___ cara. » (très chère)",
        opts: ["molta", "molto", "molte"],
        why: "Devant un adjectif molto est adverbe et ne change pas."
      },
      { q: "Forme le superlatif : « bello » → « ___ »" },
      { q: "Complète : « Ho ___ tempo oggi. » (j'ai peu de temps)" },
      {
        q: "Dans quelles phrases « troppo » est-il adverbe (invariable) ?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "« C'est trop cher, merci. »" },
      {
        q: "Complète les terminaisons (ou mets un tiret là où la forme ne change pas).",
        tr: "Il y a beaucoup de magasins, mais ils sont très chers."
      },
      { q: "Associe.", pairs: ["assez", "trop", "un peu", "peu"] },
      { tr: "C'est magnifique, mais trop cher pour moi." },
      { tr: "Je vais y réfléchir, merci quand même." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Test",
    title: "Test de l'unité 4",
    objectives: ["vérifier les adjectifs, questo/quello, les nombres et molto/poco/troppo"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Le scarpe ___. » (rouges)" },
      { q: "« I pantaloni ___. » (verts)" },
      { q: "Choisis la forme de « quello ».", items: [, , , ] },
      { q: "Quel nombre est « duemilatrecento » ?", opts: ["230", "2300", "23000"] },
      { q: "« Sono ___ stanca. » (très fatiguée)", opts: ["molta", "molto", "molte"] },
      { q: "« Ci sono ___ persone. » (beaucoup de monde)" },
      { q: "« Je peux essayer cette chemise ? »" },
      { tr: "Combien coûtent ces chaussures ?" },
      { tr: "Cette veste est très chère." },
      { tr: "Je peux payer par carte ?" }
    ]
  },
  "unit:a1-u05": { title: "Une journée italienne", grammarNote: "verbes pronominaux · l'heure · verbes modaux" },
  "lesson:a1-u05-l1": {
    theme: "Vie quotidienne",
    title: "Les verbes pronominaux",
    objectives: [
      "repérer un verbe pronominal à sa terminaison -si",
      "conjuguer svegliarsi, alzarsi, vestirsi",
      "décrire ta matinée"
    ],
    theory: [
      {
        h: "Une action qui revient sur soi",
        p: "Un infinitif pronominal se termine par <strong>-si</strong> : <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. À la conjugaison, <em>-si</em> tombe et un pronom réfléchi passe devant le verbe : <em>mi, ti, si, ci, vi, si</em>. C'est ton « se réveiller → je me réveille », mécanisme compris."
      },
      {
        h: "Le pronom passe toujours devant",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Jamais « sveglio mi ». Les exceptions sont l'infinitif et l'impératif, où le pronom se soude à la fin : <em>devo alzar<b>mi</b></em>, <em>svegliati!</em> — comme « je dois me lever » et « réveille-toi ! », sauf qu'en italien le pronom est collé au verbe."
      },
      {
        contrast: "Ce chapitre, tu l'as déjà : le français emploie les pronominaux pour la routine quotidienne exactement de la même manière, et souvent avec les mêmes verbes. Ce qu'il faut surveiller, c'est la liste, pas le système."
      },
      {
        h: "Certains verbes ne sont pronominaux qu'en italien",
        p: "<em>Chiamarsi</em> (s'appeler), <em>ricordarsi</em> (se souvenir), <em>dimenticarsi</em> (oublier), <em>arrabbiarsi</em> (se fâcher), <em>annoiarsi</em> (s'ennuyer). La plupart coïncident avec le français ; celui qui surprend est <em>dimenticare</em>, qui fonctionne aussi sans pronom : <em>ho dimenticato il libro</em>."
      }
    ],
    grammar: {
      title: "Svegliarsi (se réveiller)",
      table: {
        head: ["personne", "pronom", "forme", "exemple"],
        rows: [
          ["io", "mi", "mi sveglio", "Mi sveglio alle sette."],
          ["tu", "ti", "ti svegli", "A che ora ti svegli?"],
          ["lui / lei", "si", "si sveglia", "Si sveglia tardi."],
          ["noi", "ci", "ci svegliamo", "Ci svegliamo presto."],
          ["voi", "vi", "vi svegliate", "Vi svegliate alle otto?"],
          ["loro", "si", "si svegliano", "Si svegliano alle nove."]
        ]
      },
      examples: [
        { tr: "Je me lève juste après le réveil." },
        { tr: "Tu te brosses les dents avant ou après le petit-déjeuner ?" },
        { tr: "On s'habille en vitesse." },
        { tr: "Je dois me lever tôt demain.", note: "le pronom se soude à l'infinitif" },
        { tr: "Je ne me souviens pas de son prénom." }
      ]
    },
    vocab: [
      "se réveiller",
      "se lever",
      "se laver",
      "s'habiller",
      "se coiffer",
      "prendre une douche",
      "prendre le petit-déjeuner",
      "sortir de chez soi",
      "se reposer",
      "s'endormir",
      "réveil",
      "en vitesse"
    ],
    exercises: [
      { why: "Écris la forme complète avec le pronom, par exemple « mi sveglio »." },
      {
        q: "Comment repère-t-on un verbe pronominal dans un dictionnaire ?",
        opts: ["Il commence par une voyelle", "Il se termine par -si", "Il est accentué sur la dernière syllabe"]
      },
      {
        q: "Complète : « Noi ___ alle sei. » (nous nous levons à six heures — alzarsi)",
        why: "Le pronom réfléchi de noi est ci."
      },
      {
        q: "Complète : « Devo ___ presto. » (je dois me lever tôt)",
        hint: "le pronom se soude à l'infinitif",
        why: "Après un verbe modal, le pronom se soude à l'infinitif : alzarmi."
      },
      {
        q: "Quelle phrase est correcte ?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "« Je m'habille en vitesse. »" },
      { q: "Décris ta matinée.", tr: "Je me réveille à six heures et demie, puis je me lève et je prends une douche." },
      { tr: "Ma sœur se réveille tard." },
      { tr: "Je me réveille à sept heures et je me lève tout de suite." },
      { tr: "Tu te réveilles à quelle heure d'habitude ?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Vie quotidienne",
    title: "L'heure et les moments de la journée",
    objectives: [
      "donner et comprendre l'heure",
      "employer è et sono correctement",
      "fixer un rendez-vous à une heure précise"
    ],
    theory: [
      {
        h: "Les heures sont au pluriel",
        p: "Un Italien demande <em>Che ore sono?</em> (« quelles heures sont-elles ») et répond <em>Sono le tre</em>. Le nom sous-entendu est <em>le ore</em>, d'où l'article féminin pluriel. Les exceptions sont une heure, midi et minuit, au singulier : <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        contrast: "Le français dit « il est trois heures » avec un impersonnel invariable, donc cette alternance singulier/pluriel est entièrement à construire. Retiens le seuil : <em>è</em> pour una, mezzogiorno et mezzanotte, <em>sono</em> pour tout le reste."
      },
      {
        h: "Les minutes",
        p: "Jusqu'à la demie on additionne : <em>le tre e dieci</em>. Après la demie on retranche de l'heure suivante : <em>le quattro meno dieci</em>. Raccourcis courants : <em>e un quarto</em>, <em>e mezza</em>, <em>meno un quarto</em> — comme « et quart », « et demie », « moins le quart »."
      },
      {
        h: "À quelle heure : avec une préposition",
        p: "La question est <em>A che ora?</em>, la réponse <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. La préposition <em>a</em> fusionne avec l'article."
      },
      {
        tip: "Les horaires, les programmes de cinéma et les administrations utilisent les 24 heures : <em>alle diciotto e trenta</em>. À l'oral on dirait plutôt <em>alle sei e mezza di sera</em>. On ajoute <em>di mattina, di pomeriggio, di sera</em> quand c'est utile."
      }
    ],
    grammar: {
      title: "Dire l'heure",
      table: {
        head: ["horloge", "en italien", "remarque"],
        rows: [
          ["13:00", "è l'una", "singulier"],
          ["12:00", "è mezzogiorno", "midi"],
          ["00:00", "è mezzanotte", "minuit"],
          ["15:00", "sono le tre", "pluriel"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "en retranchant"],
          ["à 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "Quelle heure est-il ? — Neuf heures vingt." },
        { tr: "Le magasin ouvre à quelle heure ? — À neuf heures et demie." },
        { tr: "Le train part à une heure et quart." },
        { tr: "On se voit à huit heures du soir." },
        { tr: "Il est midi, allons déjeuner." }
      ]
    },
    vocab: [
      "quelle heure est-il ?",
      "à quelle heure ?",
      "midi / minuit",
      "et quart / et demie",
      "moins le quart",
      "le matin",
      "l'après-midi",
      "le soir / la nuit",
      "tôt / tard",
      "à l'heure",
      "en retard",
      "à tout à l'heure"
    ],
    exercises: [
      {
        q: "Pourquoi dit-on « è l'una » et pas « sono l'una » ?",
        opts: ["C'est une règle sans raison", "Parce que « una » est au singulier", "Parce que c'est familier"],
        why: "Toutes les autres heures sont au pluriel (le due, le tre…) et prennent sono."
      },
      { q: "Complète : « ___ le otto e mezza. » (il est huit heures et demie)" },
      { q: "Complète : « Il film comincia ___ nove. » (à neuf heures)" },
      {
        q: "Comment dit-on 15:45 ?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "les deux sont correctes"],
        why: "Les deux marchent ; « meno un quarto » sonne plus naturel à l'oral."
      },
      { q: "Associe l'heure à son écriture.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "« Le magasin ouvre à quelle heure ? »" },
      { q: "Complète.", tr: "— Quelle heure est-il ? — Onze heures moins le quart. — Je suis en retard !" },
      { tr: "On se voit à huit heures du soir." },
      { tr: "Le train part à 18h45." },
      { tr: "Excusez-moi, quelle heure est-il ? — Trois heures et demie." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Grammaire de base",
    title: "Les verbes modaux",
    objectives: [
      "conjuguer potere, volere et dovere",
      "demander la permission et exprimer la nécessité",
      "comprendre pourquoi vorrei est plus poli que voglio"
    ],
    theory: [
      {
        h: "Trois verbes, une construction",
        p: "<strong>Potere</strong> (pouvoir), <strong>volere</strong> (vouloir) et <strong>dovere</strong> (devoir) se combinent avec un infinitif <b>sans aucune préposition</b> : <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. Les trois sont irréguliers, mais les formes rentrent vite tant on s'en sert. Et le schéma est le tien : « je peux entrer », « je veux partir », « je dois travailler »."
      },
      {
        h: "Voglio sonne sec",
        p: "<em>Voglio un caffè</em> n'est pas grammaticalement impoli, mais dans un bar ça tombe comme une exigence, exactement comme « je veux un café ». Les Italiens disent <strong>vorrei</strong>, le conditionnel de <em>volere</em>, ton « je voudrais ». Apprends-le pour l'instant comme une formule figée."
      },
      {
        h: "Les pronoms avec les modaux : deux positions",
        p: "Avec un verbe pronominal, les deux versions sont également correctes : <em><b>mi</b> devo alzare</em> ou <em>devo alzar<b>mi</b></em>. Même liberté pour les pronoms compléments : <em>ti posso aiutare</em> = <em>posso aiutarti</em> — comme « je peux t'aider »."
      },
      {
        tip: "<em>Dovere</em> ne veut pas dire que « devoir » au sens d'obligation : il signifie aussi devoir de l'argent. <em>Ti devo dieci euro</em>. Le français fait exactement la même double lecture."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["personne", "potere", "volere", "dovere"],
        rows: [
          ["io", "posso", "voglio", "devo"],
          ["tu", "puoi", "vuoi", "devi"],
          ["lui / lei", "può", "vuole", "deve"],
          ["noi", "possiamo", "vogliamo", "dobbiamo"],
          ["voi", "potete", "volete", "dovete"],
          ["loro", "possono", "vogliono", "devono"]
        ]
      },
      examples: [
        { tr: "Je peux entrer ?" },
        { tr: "Je voudrais un café.", note: "plus poli que « voglio »" },
        { tr: "Je dois y aller, il est tard." },
        { tr: "On ne peut pas payer en espèces." },
        { tr: "Tu veux venir avec nous ?" },
        { tr: "Je dois me lever tôt.", note: "les deux versions sont correctes" }
      ]
    },
    vocab: [
      "pouvoir",
      "vouloir",
      "devoir",
      "je voudrais",
      "on peut ?",
      "c'est interdit",
      "c'est permis",
      "il faut (impersonnel)",
      "avoir envie de",
      "malheureusement",
      "volontiers",
      "si seulement ; peut-être"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Tu commandes au restaurant. Qu'est-ce qui sonne le mieux ?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei est le conditionnel de politesse — le standard pour commander."
      },
      { q: "Complète : « Noi ___ partire domani. » (nous devons partir demain)" },
      {
        q: "Quelle phrase est fausse ?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Les verbes modaux ne prennent pas de préposition devant l'infinitif."
      },
      { q: "« Je peux payer par carte ? »" },
      { q: "Complète.", tr: "Je ne peux pas venir ce soir, je dois travailler tard." },
      { tr: "Excusez-moi, je peux essayer cette veste ?" },
      { tr: "Je voudrais réserver une table pour deux." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Vie quotidienne",
    title: "Fréquence et jours de la semaine",
    objectives: [
      "placer l'adverbe de fréquence au bon endroit",
      "employer la double négation avec mai",
      "nommer les jours et parler de ta routine"
    ],
    theory: [
      {
        h: "L'adverbe se met juste après le verbe",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> L'italien garde l'adverbe de fréquence immédiatement après le verbe conjugué — comme « je vais souvent ». Le mettre en tête reste possible, mais c'est alors une insistance."
      },
      {
        h: "Mai a besoin de non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. L'italien encadre lui aussi, mais avec un seul mot de plus : <em>non</em> devant le verbe, l'adverbe négatif après. Même chose avec <em>niente</em>, <em>nessuno</em>, <em>più</em> : <em>non ho più tempo</em>, <em>non conosco nessuno</em>. Ton « ne… jamais » se traduit sans surprise."
      },
      {
        h: "Les jours de la semaine",
        p: "Ils s'écrivent en minuscule, comme en français, et sont masculins sauf <em>la domenica</em>."
      },
      {
        contrast: "La différence utile : l'italien marque l'habitude avec l'<b>article</b> et garde le jour au singulier (<em>il lunedì vado in palestra</em> = le lundi, tous les lundis), tandis que sans article il désigne un jour précis (<em>lunedì vado a Roma</em> = lundi prochain). Le français emploie « le lundi » pour les deux et laisse le contexte trancher ; l'italien, lui, tranche dans la phrase."
      }
    ],
    grammar: {
      title: "Fréquence et jours de la semaine",
      table: {
        head: ["adverbe", "en français", "exemple"],
        rows: [
          ["sempre", "toujours", "Bevo sempre un caffè la mattina."],
          ["di solito", "d'habitude", "Di solito lavoro da casa."],
          ["spesso", "souvent", "Vado spesso al mercato."],
          ["qualche volta / a volte", "parfois", "A volte esco a correre."],
          ["raramente", "rarement", "Guardo raramente la TV."],
          ["non… mai", "jamais", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "lundi, mardi, mercredi, jeudi" },
        { tr: "vendredi, samedi, dimanche" },
        { tr: "Le samedi, je fais la grasse matinée.", note: "avec l'article = une habitude" },
        { tr: "Samedi je vais à Florence.", note: "sans article = un jour précis" },
        { tr: "Je ne me couche jamais avant minuit." }
      ]
    },
    vocab: [
      "toujours",
      "d'habitude",
      "souvent",
      "parfois",
      "rarement",
      "jamais",
      "tous les jours",
      "le week-end",
      "lundi",
      "samedi",
      "dimanche",
      "une fois par semaine"
    ],
    exercises: [
      {
        q: "Où se place normalement « spesso » ?",
        opts: ["Devant le sujet", "Juste après le verbe conjugué", "Toujours en fin de phrase"]
      },
      {
        q: "Complète : « ___ vado ___ al cinema. » (je ne vais jamais au cinéma) — écris les deux mots séparés par une espace, dans l'ordre de la phrase",
        hint: "double négation",
        why: "Non vado mai — non devant le verbe, mai juste après."
      },
      {
        q: "« Il sabato dormo fino a tardi » veut dire :",
        opts: ["Samedi prochain je ferai la grasse matinée", "Le samedi, je fais la grasse matinée", "Samedi dernier j'ai fait la grasse matinée"],
        why: "L'article devant un jour de la semaine marque l'habitude."
      },
      { tr: "D'habitude je travaille depuis chez moi." },
      { q: "Associe.", pairs: ["toujours", "rarement", "parfois", "tous les jours"] },
      { q: "« Je ne prends jamais le taxi. »" },
      {
        q: "Décris ta semaine.",
        tr: "Le lundi je vais à la salle, mais le week-end je n'y vais jamais."
      },
      {
        q: "Quelles phrases sont correctes ?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "D'habitude je me lève tôt, mais le dimanche je fais la grasse matinée." },
      { tr: "Je vais souvent au marché le samedi matin." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Test",
    title: "Test de l'unité 5",
    objectives: ["vérifier les pronominaux, l'heure, les modaux et la fréquence"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      {  },
      { q: "« Devo ___ presto. » (je dois me lever tôt — alzarsi)" },
      { q: "« ___ le due e mezza. » (il est deux heures et demie)" },
      { q: "« Il treno parte ___ una. » (à une heure)" },
      {  },
      { q: "La façon la plus polie de commander :", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "« Non vado mai in palestra » veut dire :",
        opts: ["J'y vais parfois", "Je n'y vais jamais", "J'y vais tous les jours"]
      },
      { tr: "D'habitude je prends le petit-déjeuner à huit heures." },
      { tr: "Je me réveille à six heures et demie tous les jours." },
      { tr: "Tu te lèves à quelle heure d'habitude ?" }
    ]
  },
  "unit:a1-u06": { title: "En ville", grammarNote: "prépositions contractées · andare/venire · indications" },
  "lesson:a1-u06-l1": {
    theme: "La ville et s'orienter",
    title: "Les prépositions contractées",
    objectives: [
      "fusionner une préposition avec un article",
      "décrire où se trouve quelque chose",
      "éviter l'erreur la plus courante : « a il » au lieu de « al »"
    ],
    theory: [
      {
        h: "Cinq prépositions qui doivent fusionner",
        p: "Quand <em>di, a, da, in, su</em> sont suivies d'un article défini, les deux mots fusionnent. Ce n'est pas une option de style : <em>a il cinema</em> est simplement faux. Les autres prépositions (<em>con, per, tra, fra</em>) restent séparées."
      },
      {
        contrast: "Le français ne contracte que « au / du / aux / des », et jamais au féminin. L'italien contracte cinq prépositions avec les sept articles : trente-cinq formes. La logique t'est familière, l'ampleur non."
      },
      {
        h: "Le schéma est régulier",
        p: "Tu prends la première lettre de la préposition et tu y colles l'article : <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. <em>Di, da, in</em> et <em>su</em> fonctionnent pareil."
      },
      {
        trap: "<b>In</b> devient <b>ne-</b> : <em>in + il = nel</em>, pas « inl ». C'est la seule forme du tableau qu'on ne peut pas deviner."
      },
      {
        h: "Pas d'article, pas de fusion",
        p: "<em>Vado a Roma</em> (une ville, sans article), <em>vado in Italia</em> (un pays, sans article après in), mais <em>vado al mare</em>, <em>vado alla stazione</em>. La fusion n'a lieu que s'il y a vraiment un article."
      }
    ],
    grammar: {
      title: "Tableau des prépositions contractées",
      table: {
        head: ["", "il", "lo", "la", "l'", "i", "gli", "le"],
        rows: [
          ["di", "del", "dello", "della", "dell'", "dei", "degli", "delle"],
          ["a", "al", "allo", "alla", "all'", "ai", "agli", "alle"],
          ["da", "dal", "dallo", "dalla", "dall'", "dai", "dagli", "dalle"],
          ["in", "nel", "nello", "nella", "nell'", "nei", "negli", "nelle"],
          ["su", "sul", "sullo", "sulla", "sull'", "sui", "sugli", "sulle"]
        ]
      },
      examples: [
        { tr: "Je vais au cinéma.", note: "a + il" },
        { tr: "Le livre est sur la table.", note: "su + il" },
        { tr: "J'habite dans le centre historique.", note: "in + il" },
        { tr: "Je reviens de la gare.", note: "da + la" },
        { tr: "La clé de la voiture.", note: "di + la" },
        { tr: "En train.", note: "con reste normalement séparée" }
      ]
    },
    vocab: [
      "place",
      "rue",
      "le centre-ville",
      "église",
      "musée",
      "banque",
      "pharmacie",
      "la poste",
      "feu tricolore",
      "carrefour",
      "pont",
      "arrêt (bus, tram)"
    ],
    exercises: [
      { q: "Complète : « Vado ___ cinema. » (a + il)" },
      { q: "Complète : « Il libro è ___ tavolo. » (su + il)" },
      { q: "Complète : « Abito ___ centro. » (in + il)" },
      {
        q: "Choisis la bonne forme de « a + article ».",
        items: ["la gare", "l'aéroport", "les étudiants", "le restaurant", "neuf heures"]
      },
      {
        q: "Quelle combinaison ne fusionne PAS ?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con reste normalement séparée ; la forme « col » existe mais reste facultative."
      },
      { q: "Complète les indications.", tr: "La pharmacie est au coin, à côté de la banque, en face de l'église." },
      { q: "« Je reviens de la gare. »" },
      { tr: "La clé de la voiture est sur la table." },
      { tr: "La poste est près de la place principale." },
      { tr: "Excusez-moi, où est l'arrêt de bus ?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "La ville et s'orienter",
    title: "Aller et venir",
    objectives: [
      "conjuguer andare et venire",
      "choisir a ou in devant une destination",
      "distinguer andare de venire"
    ],
    theory: [
      {
        h: "La direction dépend de la position de l'interlocuteur",
        p: "<strong>Andare</strong> est un mouvement <b>qui s'éloigne</b> de celui qui parle, <strong>venire</strong> un mouvement <b>vers</b> lui ou en sa compagnie. Le français fonctionne de la même façon avec aller et venir, donc la distinction elle-même te sera naturelle."
      },
      {
        h: "A ou in : la règle pratique",
        list: [
          "<b>a</b> : villes (<em>a Roma</em>), lieux vus comme des activités (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b> : pays et régions (<em>in Italia, in Toscana</em>), locaux et institutions (<em>in banca, in ufficio, in farmacia, in centro</em>), moyens de transport (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b> : chez quelqu'un (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> (« à pied ») échappe à la règle du transport, puisqu'on ne monte pas sur ses pieds. Ici le français coïncide, ce qui aide."
      },
      {
        contrast: "Le français dit « à Rome » et « en Italie », donc le partage a/in te parle déjà à moitié. Ce qui ne se devine pas, c'est <em>in banca</em>, <em>in ufficio</em>, <em>in centro</em> là où tu dis « à la banque », « au bureau », « en centre-ville ». Apprends la combinaison entière comme un bloc."
      }
    ],
    grammar: {
      title: "Andare et venire",
      table: {
        head: ["personne", "andare", "venire", "exemple"],
        rows: [
          ["io", "vado", "vengo", "Vado al lavoro. / Vengo con te."],
          ["tu", "vai", "vieni", "Vieni anche tu?"],
          ["lui / lei", "va", "viene", "Va a scuola."],
          ["noi", "andiamo", "veniamo", "Andiamo al mare."],
          ["voi", "andate", "venite", "Venite da noi stasera?"],
          ["loro", "vanno", "vengono", "Vanno in Italia."]
        ]
      },
      examples: [
        { tr: "Je vais à Rome en train." },
        { tr: "Je vais en Italie en septembre." },
        { tr: "Je vais chez le dentiste à trois heures." },
        { tr: "Tu viens à la fête ? — Oui, volontiers." },
        { tr: "Allons-y à pied, c'est tout près." },
        { tr: "Tu viens d'où ? — De Pologne." }
      ]
    },
    vocab: [
      "aller",
      "venir",
      "à pied",
      "en voiture",
      "en bus",
      "à vélo",
      "en métro",
      "près / loin",
      "ici / là",
      "ensemble",
      "seul",
      "ça prend une demi-heure"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Quelqu'un t'invite chez lui. Comment confirmes-tu ?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "Le mouvement vers l'interlocuteur, c'est venire — comme ton « oui, je viens ! »."
      },
      { q: "Complète : « Vado ___ Italia. » (en Italie)" },
      { q: "Complète : « Vado ___ Milano. » (à Milan)" },
      { q: "Complète : « Vado ___ medico. » (chez le médecin)" },
      {
        q: "Quelles combinaisons sont correctes ?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "« In piedi » existe, mais veut dire « debout », pas « à pied »."
      },
      { tr: "Allons-y à pied, c'est tout près." },
      { tr: "Je viens avec toi, mais on prend le métro." },
      { tr: "Je vais en centre-ville à pied, ça prend une demi-heure." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "La ville et s'orienter",
    title: "Demander son chemin",
    objectives: [
      "demander le chemin et comprendre la réponse",
      "employer l'impératif de tu",
      "décrire un emplacement avec des prépositions"
    ],
    theory: [
      {
        h: "L'impératif de tu",
        p: "Les indications se donnent à l'impératif. Pour les verbes en <b>-are</b>, la forme de <em>tu</em> est identique à la troisième personne du présent : <em>gira!</em>, <em>continua!</em> Pour ceux en <b>-ere</b> et <b>-ire</b>, elle est identique à la deuxième : <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Quatre formes courtes",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. L'apostrophe remplace les lettres tombées. En pratique tu entendras aussi les formes pleines <em>vai</em> et <em>fai</em> : les deux sont en usage."
      },
      {
        h: "En vouvoyant : avec Lei",
        p: "À un inconnu, les indications changent de forme : <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. Ce sont des subjonctifs ; pour l'instant, apprends-les comme des formules toutes faites."
      },
      {
        tip: "La phrase la plus utile quand tu ne suis pas : <em>Può ripetere più lentamente, per favore?</em> Les Italiens parlent vite et presque personne ne ralentit si on ne le demande pas."
      }
    ],
    grammar: {
      title: "Donner des indications",
      table: {
        head: ["familier (tu)", "poli (Lei)", "en français"],
        rows: [
          ["vai dritto", "vada dritto", "va / allez tout droit"],
          ["gira a destra", "giri a destra", "tourne / tournez à droite"],
          ["gira a sinistra", "giri a sinistra", "tourne / tournez à gauche"],
          ["prendi la prima strada", "prenda la prima strada", "prends / prenez la première rue"],
          ["attraversa la piazza", "attraversi la piazza", "traverse / traversez la place"],
          ["continua fino al semaforo", "continui fino al semaforo", "continue / continuez jusqu'au feu"]
        ]
      },
      examples: [
        { tr: "Excusez-moi, où est la gare ?" },
        { tr: "C'est tout près, à deux pas d'ici." },
        { tr: "Allez tout droit et prenez la deuxième à droite." },
        { tr: "C'est en face de la banque, à côté de la pharmacie." },
        { tr: "C'est loin à pied ? — Dix minutes." },
        { tr: "Je suis perdu, vous pouvez m'aider ?" }
      ]
    },
    vocab: [
      "où est… ?",
      "à droite / à gauche",
      "tout droit",
      "en face de",
      "à côté de",
      "près / loin de",
      "derrière / devant",
      "entre… et…",
      "tourner",
      "traverser",
      "je suis perdu",
      "à deux pas d'ici"
    ],
    exercises: [
      { q: "« Gira a sinistra » veut dire :", opts: ["Tourne à droite", "Tourne à gauche", "Va tout droit"] },
      { q: "La version polie de « vai dritto » est :", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Complète : « ___ la stazione? » (où est la gare)" },
      { q: "Associe les prépositions de lieu.", pairs: ["en face de", "à côté de", "derrière", "entre… et…"] },
      {
        q: "Complète les indications.",
        tr: "Allez tout droit jusqu'au feu, puis tournez à droite. La banque est en face de la pharmacie."
      },
      { q: "« Excusez-moi, où est la pharmacie ? »" },
      {
        q: "Tu es perdu dans le centre.",
        setting: "Une rue étroite ; le passant a l'air d'être du quartier.",
        lines: [
          { tr: "Arrête-le poliment et demande la gare.", answerTr: "Excusez-moi, où est la gare ?" },
          { tr: "Alors : tout droit, puis la deuxième à droite." },
          {
            tr: "Dis que tu n'as pas suivi et demande-lui de répéter.",
            answerTr: "Je ne comprends pas, vous pouvez répéter plus lentement ?"
          },
          { tr: "Bien sûr. Tout droit… puis la deuxième à droite. Dix minutes à pied." },
          { tr: "Remercie-le.", answerTr: "Merci beaucoup, c'est très gentil !" }
        ]
      },
      { tr: "Le musée est entre la place et le pont." },
      { tr: "Allez tout droit et traversez la place." },
      { tr: "Je suis perdu, vous pouvez m'aider ?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "La ville et s'orienter",
    title: "Décrire un lieu",
    objectives: [
      "dire ce qu'il y a dans une ville ou un appartement",
      "employer c'è / ci sono à la forme négative et interrogative",
      "le combiner avec les prépositions de lieu"
    ],
    theory: [
      {
        h: "Existence contre qualité",
        p: "<strong>C'è</strong> et <strong>ci sono</strong> disent qu'une chose <b>se trouve quelque part</b>. <em>Essere</em> dit <b>comment</b> elle est. <em>C'è un museo in centro</em> contre <em>Il museo è bellissimo</em>. Le français sépare de la même façon avec « il y a » et « il est »."
      },
      {
        h: "Négation et question",
        p: "<em>Non c'è</em> / <em>non ci sono</em> ; la question passe par la seule intonation : <em>C'è un bagno qui?</em> Les réponses courtes sont très fréquentes : <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci ne veut pas seulement dire « là »",
        p: "La même particule <em>ci</em> revient partout : <em>ci vuole</em> (il faut), <em>ci metto</em> (je mets tel temps), <em>ci vado</em> (j'y vais). Pour l'instant, contente-toi de la reconnaître dans ces expressions ; l'explication complète attend en B1."
      },
      {
        tip: "Au restaurant et au bar, deux phrases servent partout : <em>C'è il bagno?</em> et <em>Non c'è il wifi?</em>"
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["forme", "emploi", "exemple"],
        rows: [
          ["c'è", "une chose", "C'è una farmacia qui vicino."],
          ["ci sono", "plusieurs choses", "Ci sono due farmacie."],
          ["non c'è", "négation sing.", "Non c'è il wifi."],
          ["non ci sono", "négation plur.", "Non ci sono tavoli liberi."],
          ["c'è…?", "question", "C'è un bancomat qui?"],
          ["quanto c'è?", "distance", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "Dans mon quartier il y a un marché tous les samedis." },
        { tr: "Il y a beaucoup de touristes à cette période." },
        { tr: "Il n'y a personne à la réception." },
        { tr: "Il y a des toilettes ? — Oui, au fond à droite." },
        { tr: "C'est loin d'ici au centre ?" }
      ]
    },
    vocab: [
      "quartier",
      "toilettes",
      "distributeur",
      "supermarché",
      "parking",
      "parc",
      "hôpital",
      "bibliothèque",
      "personne",
      "quelque chose",
      "dans le coin",
      "au fond"
    ],
    exercises: [
      { q: "Complète : « ___ un bancomat qui vicino? »" },
      { q: "Complète : « ___ due farmacie in questa via. »" },
      {
        q: "Quelle phrase décrit une qualité et non l'existence ?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Mets à la forme négative : « C'è il wifi. » → « ___ il wifi. »" },
      { q: "Décris ton quartier.", tr: "Dans mon quartier il y a un parc, mais il n'y a pas de supermarchés." },
      { q: "« Il n'y a personne à la réception. »" },
      { q: "Associe.", pairs: ["parking", "hôpital", "bibliothèque", "quartier"] },
      { tr: "Il y a une pharmacie dans le coin ?" },
      { tr: "Dans le quartier il y a deux parcs et une bibliothèque." },
      { tr: "Excusez-moi, il y a des toilettes ? — Oui, au fond à droite." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Test",
    title: "Test de l'unité 6",
    objectives: ["vérifier les prépositions contractées, andare/venire, les indications et c'è/ci sono"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "a + article :", items: [, , , ] },
      { q: "« Il libro è ___ tavolo. » (su + il)" },
      { q: "« Abito ___ centro. » (in + il)" },
      {  },
      { q: "« Vado ___ Italia. »" },
      { q: "« Vado ___ dentista. »" },
      { q: "La version polie de « gira a destra » :", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "« ___ tavoli liberi? » (y a-t-il des tables libres ?)" },
      { tr: "Allez tout droit, la banque est en face de l'église." },
      { tr: "Excusez-moi, où est l'arrêt de bus ?" }
    ]
  },
  "unit:a1-u07": { title: "À table", grammarNote: "commander · ne · la structure d'un repas italien" },
  "lesson:a1-u07-l1": {
    theme: "Restaurant",
    title: "Réserver et s'installer",
    objectives: [
      "réserver une table et entrer dans un restaurant",
      "comprendre les questions du serveur",
      "demander la carte et une table dehors"
    ],
    theory: [
      {
        h: "L'ordre du repas est fixe",
        p: "Un restaurant italien suit une séquence établie : <em>antipasto</em> (entrée), <em>primo</em> (pâtes, riz ou soupe), <em>secondo</em> (viande ou poisson), <em>contorno</em> (garniture, commandée à part !), <em>dolce</em>, <em>caffè</em>. Personne n'attend que tu prennes tout, mais le serveur posera les questions dans cet ordre."
      },
      {
        h: "Le contorno se commande à part",
        p: "Les légumes et les frites ne viennent <b>pas</b> avec le plat : c'est une commande séparée. Le <em>secondo</em> arrive seul dans l'assiette. Pour un Français habitué à une garniture incluse, c'est la surprise la plus fréquente."
      },
      {
        h: "Coperto et servizio",
        p: "<em>Il coperto</em> (2 à 4 €) est un forfait pour le couvert, le pain et le service : c'est légal et c'est imprimé sur la carte. Le pourboire n'est pas attendu comme aux États-Unis : on arrondit l'addition, ou on laisse quelques euros si le service a été bon."
      },
      {
        tip: "L'addition, il faut la demander : <em>il conto, per favore</em>. Le serveur ne l'apporte pas de lui-même, ce serait pousser le client dehors — comme en France, d'ailleurs."
      }
    ],
    grammar: {
      title: "Phrases à table",
      table: {
        head: ["situation", "en italien", "en français"],
        rows: [
          ["réserver", "Vorrei prenotare un tavolo per due.", "Je voudrais réserver une table pour deux."],
          ["sans réservation", "C'è un tavolo libero?", "Vous avez une table de libre ?"],
          ["dehors", "Possiamo sederci fuori?", "On peut s'installer dehors ?"],
          ["la carte", "Il menù, per favore.", "La carte, s'il vous plaît."],
          ["commander", "Per me una carbonara.", "Pour moi une carbonara."],
          ["l'addition", "Il conto, per favore.", "L'addition, s'il vous plaît."]
        ]
      },
      examples: [
        { tr: "Bonsoir, vous avez réservé ?" },
        { tr: "Non, nous sommes deux. Vous avez de la place ?" },
        { tr: "À l'intérieur ou dehors ?" },
        { tr: "Qu'est-ce que vous me conseillez ?" },
        { tr: "Je suis allergique aux fruits à coque." },
        { tr: "Tout était excellent, félicitations." }
      ]
    },
    vocab: [
      "réserver",
      "table",
      "carte",
      "entrée",
      "premier plat",
      "plat principal",
      "garniture (commandée à part !)",
      "dessert",
      "l'addition",
      "couvert (forfait)",
      "nous sommes deux",
      "qu'est-ce que vous me conseillez ?"
    ],
    dialogue: [
      "Bonsoir, vous avez réservé ?",
      "Non, nous sommes deux. Vous avez une table de libre ?",
      "À l'intérieur ou dehors ?",
      "Dehors, si possible. Merci.",
      "Bien sûr, installez-vous. Voici la carte."
    ],
    exercises: [
      {
        q: "Qu'est-ce que « il contorno » ?",
        opts: ["Un dessert", "Une garniture de légumes, commandée à part", "Le forfait couvert"]
      },
      { q: "Que veut dire « il coperto » ?", opts: ["Un plat de viande", "Un forfait pour le couvert et le pain", "Un pourboire"] },
      { q: "Complète : « Vorrei ___ un tavolo per due. »" },
      { q: "« L'addition, s'il vous plaît. »" },
      {
        q: "Remets le repas dans l'ordre — associe le nom à la description.",
        pairs: ["entrée", "pâtes ou soupe", "viande ou poisson", "dessert"]
      },
      { tr: "Non, nous sommes deux. Vous avez une table de libre ?" },
      {
        q: "Tu entres dans un restaurant sans réservation.",
        setting: "Vendredi, 20 h 30, une petite trattoria.",
        lines: [
          { tr: "Bonsoir ! Vous avez réservé ?" },
          {
            tr: "Dis que non et demande une table libre pour deux.",
            answerTr: "Non, vous avez une table pour deux ?"
          },
          { tr: "Oui, mais seulement à l'intérieur. Ça vous va ?" },
          { tr: "Accepte et demande la carte.", answerTr: "C'est parfait, la carte s'il vous plaît." }
        ]
      },
      { tr: "Je voudrais réserver une table pour quatre à huit heures." },
      { tr: "Bonsoir, nous sommes deux. Il y a de la place dehors ?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restaurant",
    title: "Commander un plat",
    objectives: ["commander un plat précis et une boisson", "demander ce qu'il y a dans un plat", "signaler une allergie ou un régime"],
    theory: [
      {
        h: "Trois façons de commander",
        p: "<em>Per me una carbonara</em> (pour moi…), <em>Prendo una carbonara</em> (je prends…), <em>Vorrei una carbonara</em> (je voudrais…). Les trois sont normales ; <em>vorrei</em> est la plus polie, <em>prendo</em> la plus naturelle."
      },
      {
        h: "Demander ce qu'il y a dedans",
        p: "<em>Cosa c'è dentro?</em>, <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Les restaurants sont légalement tenus de déclarer les allergènes, la question ne surprend donc personne."
      },
      {
        h: "L'eau : la question incontournable",
        p: "<em>Naturale o frizzante?</em> — plate ou gazeuse. L'eau du robinet (<em>acqua del rubinetto</em>) est parfois disponible, mais beaucoup d'endroits ne la servent tout simplement pas, contrairement à la carafe française."
      },
      {
        tip: "Le café arrive <b>après</b> le dessert, jamais pendant le repas, et jamais sous forme de cappuccino. <em>Un caffè</em> après le déjeuner fait partie du rituel."
      }
    ],
    grammar: {
      title: "Commander et se renseigner sur un plat",
      table: {
        head: ["fonction", "phrase", "en français"],
        rows: [
          ["commander", "Per me / Prendo / Vorrei…", "Pour moi / Je prends / Je voudrais…"],
          ["une boisson", "Da bere, una bottiglia d'acqua.", "Comme boisson, une bouteille d'eau."],
          ["ce qu'il y a dedans", "Cosa c'è dentro?", "Il y a quoi dedans ?"],
          ["allergie", "Sono allergico/a a…", "Je suis allergique à…"],
          ["régime", "Sono vegetariano/a.", "Je suis végétarien(ne)."],
          ["sans", "Senza cipolla, per favore.", "Sans oignon, s'il vous plaît."]
        ]
      },
      examples: [
        { tr: "Une carbonara pour moi, et une salade mixte." },
        { tr: "Comme boisson ? — De l'eau plate, merci." },
        { tr: "Il y a quoi dans l'amatriciana ?" },
        { tr: "Je suis allergique aux fruits de mer." },
        { tr: "Ce plat est sans gluten ?" },
        { tr: "Un café pour finir, merci." }
      ]
    },
    vocab: [
      "pâtes",
      "viande / poisson",
      "salade",
      "légumes",
      "eau plate / gazeuse",
      "vin de la maison",
      "sans gluten",
      "végétarien / végan",
      "je suis allergique à…",
      "épicé",
      "saignant / bien cuit",
      "comme boisson"
    ],
    culture: {
      title: "Vu par les Italiens : ce qu'on ne commande pas",
      text: "<p>Les <b>spaghettis bolognaise</b> n'existent pas sur une carte italienne. À Bologne on mange des <i>tagliatelle al ragù</i>, et les spaghettis avec cette sauce sont une invention étrangère.</p><p>Les <b>fettuccine Alfredo</b> sont un plat américain. Le <b>fromage sur le poisson</b> passe pour une petite faute, et demander du parmesan avec des fruits de mer provoque une réaction polie mais sans équivoque.</p><p>L'<b>ananas sur la pizza</b> existe dans quelques pizzerias touristiques. C'est un choix que tu peux faire — mais fais-le en connaissance de cause.</p>"
    },
    exercises: [
      {
        q: "Le serveur demande « Naturale o frizzante? ». À propos de quoi ?",
        opts: ["Le type de pâtes", "L'eau : plate ou gazeuse", "La cuisson de la viande"]
      },
      { q: "Complète : « Sono ___ ai frutti di mare. » (allergique aux fruits de mer, une femme parle)" },
      { q: "« Une carbonara pour moi, s'il vous plaît. »" },
      {
        q: "Quand les Italiens boivent-ils un café pendant un repas ?",
        opts: ["Pendant le plat", "Après le dessert", "À la place de l'eau"]
      },
      { q: "Associe.", pairs: ["sans gluten", "épicé", "bien cuit", "comme boisson"] },
      {
        q: "Complète la commande.",
        tr: "Pour moi, des pâtes à la tomate, sans oignon. Comme boisson, de l'eau plate."
      },
      { tr: "Il y a quoi dans ce plat ?" },
      {
        q: "Le serveur prend la commande.",
        setting: "Une trattoria, une table près de la fenêtre.",
        lines: [
          { tr: "Alors, qu'est-ce que vous prenez ?" },
          { tr: "Commande les cacio e pepe.", answerTr: "Des cacio e pepe pour moi." },
          { tr: "Très bien. Et comme boisson ?" },
          { tr: "Demande une bouteille d'eau plate.", answerTr: "Une bouteille d'eau plate." },
          { tr: "Parfait. Une garniture ?" },
          { tr: "Refuse poliment.", answerTr: "Non merci, ça ira comme ça." }
        ]
      },
      { tr: "Je suis végétarienne, ce plat contient de la viande ?" },
      { tr: "Je prends les cacio e pepe. Comme boisson, de l'eau gazeuse." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Grammaire de base",
    title: "La particule ne — première rencontre",
    objectives: [
      "remplacer un nom répété par ne",
      "répondre à une question de quantité",
      "reconnaître ne dans les expressions courantes"
    ],
    theory: [
      {
        h: "Ne représente une partie d'un tout",
        p: "Quand tu parles de <b>combien</b> d'une chose déjà mentionnée, répéter le nom est lourd. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Ici <em>ne</em> veut dire « en »."
      },
      {
        contrast: "Bonne nouvelle : c'est ton <b>en</b>, au mot près. « J'en veux trois », « on en parle demain », « je m'en vais » se calquent sur <em>ne voglio tre</em>, <em>ne parliamo domani</em>, <em>me ne vado</em>. Là où un anglophone ou un hispanophone doit tout construire, tu n'as qu'à changer les sons."
      },
      {
        h: "Où il se place",
        p: "Devant le verbe conjugué, exactement comme les pronoms : <em>ne prendo due</em>, <em>non ne voglio</em>. Avec un infinitif il se soude à la fin : <em>vorrei prender<b>ne</b> due</em> — comme « je voudrais en prendre deux », sauf que l'italien colle la particule au verbe."
      },
      {
        h: "Ne remplace aussi « di + quelque chose »",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> On développera en B1 ; pour l'instant il suffit de le reconnaître."
      },
      {
        tip: "Expressions très courantes avec <em>ne</em> : <em>Non ne so nulla</em> (je n'en sais rien), <em>Che ne pensi?</em> (qu'est-ce que tu en penses ?), <em>Me ne vado</em> (je m'en vais)."
      }
    ],
    grammar: {
      title: "Ne dans les expressions de quantité",
      table: {
        head: ["question", "réponse avec ne", "en français"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "J'en veux trois."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "J'en prends un verre."],
          ["Hai fratelli?", "Sì, ne ho due.", "Oui, j'en ai deux."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "Non merci, je n'en veux plus."],
          ["Che ne pensi?", "—", "Qu'est-ce que tu en penses ?"]
        ]
      },
      examples: [
        { tr: "Tu bois combien de cafés par jour ? — J'en bois trois." },
        { tr: "Tu veux du pain ? — Oui, j'en prends un peu." },
        { tr: "Tu as des enfants ? — J'ai une fille." },
        { tr: "Je n'en sais rien." },
        { tr: "Je voudrais en prendre deux.", note: "avec un infinitif, ne se soude" }
      ]
    },
    vocab: [
      "en (particule)",
      "combien (m / f)",
      "encore",
      "un autre",
      "un morceau",
      "une tranche",
      "un verre",
      "une portion",
      "ça ira comme ça",
      "qu'est-ce que tu en penses ?",
      "je n'en sais rien",
      "je m'en vais"
    ],
    exercises: [
      {
        q: "« Quante birre prendi? — Ne prendo due. » Que remplace « ne » ?",
        opts: ["Toi", "« birre » — la chose dont on parle", "Rien, c'est décoratif"]
      },
      { q: "Réponds : « Hai fratelli? — Sì, ___ ho due. »" },
      { q: "Complète : « Vuoi del pane? — Sì, ___ prendo un po'. »" },
      {
        q: "Où se place « ne » avec un infinitif ?",
        opts: ["Devant : « ne prendere »", "Soudé à la fin : « prenderne »", "En fin de phrase"]
      },
      { q: "« Tu bois combien de cafés par jour ? — J'en bois trois. »" },
      {
        q: "Associe l'expression à son sens.",
        pairs: ["qu'est-ce que tu en penses ?", "je n'en sais rien", "je m'en vais", "j'en prends deux"]
      },
      {
        q: "Complète la conversation.",
        tr: "— Tu veux encore du vin ? — Non merci, je n'en veux plus. — Et toi ? — Oui, j'en prends un autre verre."
      },
      { tr: "Je voudrais en prendre deux." },
      { tr: "Tu veux combien de parts de gâteau ? — J'en veux une, merci." },
      { tr: "Tu as des frères et sœurs ? — Oui, j'ai deux frères." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restaurant",
    title: "Payer et partir",
    objectives: [
      "demander l'addition et payer",
      "partager l'addition entre plusieurs",
      "dire ce que tu as pensé du repas"
    ],
    theory: [
      {
        h: "L'addition, il faut la demander",
        p: "Le serveur ne l'apporte pas sans qu'on le lui demande : dans la culture italienne du restaurant, ce serait presser le client. La formule standard est <em>Il conto, per favore</em> ou <em>Possiamo avere il conto?</em> Le geste de signer en l'air marche aussi."
      },
      {
        h: "Partager l'addition",
        p: "<strong>Alla romana</strong> signifie « à parts égales, chacun paie la même chose » : c'est ton « on partage » ou « chacun sa part ». Si tu veux des additions séparées : <em>Conti separati, per favore</em> — possible, mais souvent compliqué dans les petits endroits."
      },
      {
        h: "Dire ce que tu as pensé",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Les Italiens complimentent la cuisine directement et attendent la même chose : ne rien dire après un bon repas passe pour de la froideur."
      },
      {
        tip: "<em>Offro io</em> (« c'est moi qui invite ») est une phrase pour laquelle il vaut la peine de se battre. Le refus de l'invité fait partie du rituel, mais celui qui a invité gagne en général."
      }
    ],
    grammar: {
      title: "L'addition et les adieux",
      table: {
        head: ["situation", "en italien", "en français"],
        rows: [
          ["demander", "Il conto, per favore.", "L'addition, s'il vous plaît."],
          ["à parts égales", "Paghiamo alla romana.", "On partage."],
          ["séparément", "Conti separati, per favore.", "Additions séparées, s'il vous plaît."],
          ["c'est moi", "Offro io.", "C'est moi qui invite."],
          ["carte", "Si può pagare con la carta?", "On peut payer par carte ?"],
          ["compliment", "Era tutto buonissimo!", "Tout était excellent !"]
        ]
      },
      examples: [
        { tr: "On peut avoir l'addition ?" },
        { tr: "Le couvert est de deux euros par personne." },
        { tr: "Malheureusement le terminal ne marche pas." },
        { tr: "Gardez la monnaie." },
        { tr: "Félicitations au chef, excellent !" },
        { tr: "Bonne soirée !" }
      ]
    },
    vocab: [
      "l'addition",
      "à parts égales",
      "additions séparées",
      "c'est moi qui invite",
      "pourboire",
      "terminal de paiement",
      "monnaie",
      "excellent",
      "félicitations",
      "tout était excellent",
      "bonne soirée",
      "on reviendra"
    ],
    exercises: [
      {
        q: "Que veut dire « pagare alla romana » ?",
        opts: ["Payer en espèces", "Partager l'addition à parts égales", "Payer pour tout le monde"]
      },
      {
        q: "Pourquoi le serveur n'apporte-t-il pas l'addition spontanément ?",
        opts: ["Il oublie", "Parce que ce serait presser le client", "Parce que c'est interdit"]
      },
      { q: "« On peut avoir l'addition ? »" },
      { q: "Complète : « ___ io! » (c'est moi qui invite)" },
      { q: "Associe.", pairs: ["pourboire", "monnaie", "excellent", "additions séparées"] },
      {
        q: "Complète la fin du dîner.",
        tr: "— Tout était excellent, félicitations ! — Merci ! — L'addition, s'il vous plaît. On peut payer par carte ?"
      },
      { tr: "On partage, merci." },
      {
        q: "Fin du dîner.",
        setting: "Les assiettes débarrassées, le serveur passe.",
        lines: [
          { tr: "Demande l'addition.", answerTr: "L'addition, s'il vous plaît." },
          { tr: "Tout de suite. Tout s'est bien passé ce soir ?" },
          { tr: "Complimente la cuisine.", answerTr: "Tout était excellent, félicitations !" },
          { tr: "Merci beaucoup ! Ça fait quarante-six euros." },
          { tr: "Demande si on peut payer par carte.", answerTr: "On peut payer par carte ?" }
        ]
      },
      { tr: "L'addition fait quarante-six euros, couvert compris." },
      { tr: "Tout était excellent, félicitations au chef !" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Test",
    title: "Test de l'unité 7",
    objectives: ["vérifier le vocabulaire du restaurant, la commande et la particule ne"],
    theory: [{ p: "Dix questions. On valide à 70 %." }],
    exercises: [
      { q: "« Il contorno » est :", opts: ["le dessert", "une garniture de légumes", "le forfait couvert"] },
      { q: "« Il coperto » est :", opts: ["un plat de viande", "le forfait couvert", "un pourboire"] },
      { q: "« Vorrei ___ un tavolo per due. »" },
      { q: "« Hai fratelli? — Sì, ___ ho due. »" },
      { q: "« Sono ___ ai frutti di mare. » (une femme parle)" },
      { q: "« L'addition, s'il vous plaît. »" },
      { q: "Associe.", pairs: ["à parts égales", "c'est moi qui invite", "excellent", "comme boisson"] },
      { tr: "Une carbonara pour moi, sans oignon." },
      { tr: "Comme boisson, on prend une bouteille d'eau plate." },
      { tr: "On peut avoir l'addition ?" }
    ]
  }
});
