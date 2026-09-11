/* ============================================================
   Learner-language text (en) for data/core/c1-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c1-u01": {
    title: "Every value of SI",
    grammarNote: "reflexive, reciprocal, impersonal, passive si · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Advanced grammar",
    title: "Telling the values of si apart",
    objectives: [
      "recognize every function of si in a text",
      "tell the impersonal si from the passive one",
      "use ci si correctly"
    ],
    theory: [
      {
        h: "One form, six jobs",
        list: [
          "<b>reflexive</b>: <em>Marco si lava.</em> — doing something to yourself",
          "<b>reciprocal</b>: <em>Si salutano ogni mattina.</em> — to each other",
          "<b>impersonal</b>: <em>In Italia si mangia bene.</em> — people in general",
          "<b>passive (passivante)</b>: <em>Qui si vendono panini.</em> — the verb agrees with the thing",
          "<b>instructional</b>: <em>Il volante si tiene così.</em> — this is how it's done",
          "<b>Tuscan \"we\"</b>: <em>Stasera noi si va al cinema.</em> — regional"
        ]
      },
      {
        h: "The test for impersonal versus passive",
        p: "If a noun follows that could be a direct object, it's the <b>si passivante</b> and the verb agrees with its number: <em>si <b>vendono</b> case</em>. If there is no such noun, or the verb is intransitive, it's the <b>si impersonale</b> and the form stays singular: <em>si <b>lavora</b> troppo</em>. English collapses both onto generic \"you\" and the passive, which is why the two look identical in translation and have to be told apart in the Italian."
      },
      {
        h: "Ci si: two si colliding",
        p: "An impersonal <em>si</em> with a reflexive verb would give \"si si\", so the first one turns into <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>, <em>ci si annoia</em>."
      },
      {
        h: "Compound tenses: always essere",
        p: "The impersonal <em>si</em> takes <em>essere</em>, even when the verb normally wants <em>avere</em>: <em>si <b>è</b> mangiato bene</em>. The participle then stays masculine singular (<em>mangiato</em>), but a predicate adjective goes plural: <em>si è stati contenti</em>."
      }
    ],
    grammar: {
      title: "Si — the decision table",
      table: {
        head: ["context", "form", "example"],
        rows: [
          ["reflexive", "si + verb", "Si sveglia alle sei."],
          ["reciprocal", "si + plural", "Si scrivono ogni giorno."],
          ["impersonal", "si + 3rd sing.", "Si lavora troppo."],
          ["passive, singular", "si + 3rd sing.", "Si vende una casa."],
          ["passive, plural", "si + 3rd plur.", "Si vendono case."],
          ["impersonal reflexive", "ci si", "Ci si alza presto."],
          ["compound tense", "si è + participle", "Si è mangiato bene."],
          ["with an adjective", "si è + plural", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "In this office you work too much and earn too little." },
        { tr: "All the houses were sold in two months." },
        { tr: "You get used to even the worst of it." },
        { tr: "It was discussed at length, with no result." },
        { tr: "When you're young, you underestimate time." },
        { tr: "You hold the steering wheel with both hands." }
      ]
    },
    vocab: [
      "to get used to",
      "to get bored",
      "to underestimate",
      "to overestimate",
      "to discuss, to argue",
      "to earn",
      "to realize",
      "to adapt, to fall into line",
      "the worst / the best",
      "with no result",
      "at length",
      "in general"
    ],
    exercises: [
      {
        q: "\"Qui si ___ case.\" (houses are sold here)",
        opts: ["vende", "vendono", "vendere"],
        why: "The si passivante agrees with the plural noun."
      },
      {
        q: "\"In questo ufficio si ___ troppo.\" (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "No direct object → si impersonale, singular."
      },
      { q: "Fill in: \"___ si alza presto in campagna.\" (impersonal, alzarsi)" },
      { q: "Fill in: \"Si ___ discusso a lungo.\" (compound tense)" },
      {
        q: "\"Si è stati fortunati\" — why \"stati\" and not \"stato\"?",
        opts: [
          "It's a mistake",
          "An adjective after the impersonal si goes plural",
          "Because essere is irregular"
        ]
      },
      {
        q: "In which sentences is si the passive one (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Fill in the forms.", tr: "In Italy you eat well, but you work too many hours." },
      { q: "\"You get used to anything.\"" },
      { tr: "It was discussed at length, but no conclusion was reached." },
      { tr: "When you're young, you underestimate time." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Advanced grammar",
    title: "Adjective position and meaning",
    objectives: [
      "recognize the change of meaning that comes with position",
      "use an adjective deliberately",
      "avoid misreading texts"
    ],
    theory: [
      {
        h: "Before the noun: figurative or subjective",
        p: "An adjective <b>before</b> the noun usually doesn't distinguish, it characterizes: <em>un <b>vecchio</b> amico</em> is a friend of long standing, not one who is old in years. <b>After</b> the noun it distinguishes and is usually literal: <em>un amico <b>vecchio</b></em>. English keeps a trace of this in \"an old friend\" versus \"a friend who is old\", but with no position to move the adjective to, the distinction has to be carried by other words."
      },
      {
        h: "Pairs worth memorizing",
        list: [
          "<em>un grande uomo</em> (a great man) — <em>un uomo grande</em> (a big man)",
          "<em>un buon medico</em> (a competent doctor) — <em>un medico buono</em> (a kind one)",
          "<em>un alto magistrato</em> (a senior judge) — <em>un magistrato alto</em> (a tall one)",
          "<em>una certa informazione</em> (a certain piece of information) — <em>un'informazione certa</em> (a confirmed one)",
          "<em>un povero uomo</em> (a poor devil) — <em>un uomo povero</em> (a man with no money)",
          "<em>diverse persone</em> (several people) — <em>persone diverse</em> (different people)",
          "<em>un semplice impiegato</em> (a mere clerk) — <em>un impiegato semplice</em> (a simple-minded one)"
        ]
      },
      {
        h: "Why this matters at C1",
        p: "In journalism and literature the distinction carries meaning, not style. Reading <em>una certa informazione</em> as \"a confirmed piece of information\" instead of \"a certain piece of information\" turns the sentence inside out."
      },
      {
        tip: "An adjective before the noun can also flag literary register: <em>la dolce vita</em>, <em>l'alto mare</em>, <em>la vecchia guardia</em> are frozen expressions."
      }
    ],
    grammar: {
      title: "Position and meaning",
      table: {
        head: ["before", "after", "the difference"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "long-standing / old in years"],
          ["un grande uomo", "un uomo grande", "great / big"],
          ["un buon medico", "un medico buono", "competent / kind"],
          ["una certa notizia", "una notizia certa", "a certain / confirmed"],
          ["un povero uomo", "un uomo povero", "poor devil / with no money"],
          ["diverse persone", "persone diverse", "several / different"],
          ["un semplice errore", "un errore semplice", "a mere / an easy one"]
        ]
      },
      examples: [
        { tr: "He's a great professional, even if a difficult man." },
        { tr: "I got a certain piece of information, but it isn't a confirmed one." },
        { tr: "It's nothing but a plain misunderstanding." },
        { tr: "I met several people who were very different from each other." },
        { tr: "Poor kid: he lost everything." },
        { tr: "She lives in an old but beautiful house." }
      ]
    },
    vocab: [
      "misunderstanding",
      "professional, expert",
      "the old guard",
      "senior official",
      "a mere, a plain",
      "a certain / confirmed",
      "only / unique",
      "another / genuine",
      "another / brand new",
      "only / alone",
      "to tell apart",
      "nuance"
    ],
    exercises: [
      {
        q: "\"Un vecchio amico\" means:",
        opts: ["a friend who is old", "a friend of long standing", "a former friend"]
      },
      {
        q: "\"Un'informazione certa\" means:",
        opts: ["a certain piece of information", "a confirmed piece of information", "a confidential one"]
      },
      { q: "\"Diverse persone\" means:", opts: ["different people", "several people", "strangers"] },
      {
        q: "Match the phrase to the meaning.",
        pairs: ["a great man", "a big man", "a poor devil", "a man with no money"]
      },
      {
        q: "Put the adjective in the right position (before or after).",
        tr: "I got a certain piece of news, but it isn't a confirmed one."
      },
      { q: "\"It's nothing but a plain misunderstanding.\"" },
      {
        q: "Why does this distinction matter in journalism?",
        opts: [
          "Because it sounds elegant",
          "Because the position changes the meaning of the sentence",
          "Because the grammar requires it"
        ]
      },
      { tr: "He's a great professional, even if a difficult man." },
      { tr: "He isn't a kind man who happens to be a doctor, he's a good doctor: two different things." },
      { tr: "I met several people who were very different from each other." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Advanced grammar",
    title: "Intensifiers and superlatives",
    objectives: [
      "use the intensifying prefixes",
      "know the idiomatic superlatives",
      "recognize the -errimo forms"
    ],
    theory: [
      {
        h: "Repeating the adjective",
        p: "The most colloquial intensifier is repetition: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. It isn't a mistake or sloppiness, it's a live mechanism of spoken Italian, and English has nothing like it."
      },
      {
        h: "Prefixes",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Colloquial or journalistic register; in a formal text use <em>estremamente</em>."
      },
      {
        h: "Idiomatic superlatives",
        p: "Fixed comparisons you can't predict: <em>stanco morto</em> (dead tired), <em>ubriaco fradicio</em> (blind drunk), <em>povero in canna</em> (dirt poor), <em>buono come il pane</em>, <em>pieno zeppo</em> (packed), <em>bagnato fradicio</em> (soaking wet), <em>innamorato cotto</em> (head over heels). Several land almost on top of the English idiom, which makes them easy to remember and dangerous to extrapolate from: the ones that don't match have to be learned one by one."
      },
      {
        h: "The -errimo and -entissimo forms",
        p: "Learned superlatives from adjectives of Latin origin: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; plus <em>benevolo → benevolentissimo</em>. Mostly in writing."
      }
    ],
    grammar: {
      title: "Intensifiers",
      table: {
        head: ["type", "example", "register"],
        rows: [
          ["repetition", "magra magra", "speech"],
          ["-issimo", "bellissimo", "neutral"],
          ["prefix", "straricco, iperattivo", "colloquial / press"],
          ["idiom", "stanco morto", "speech"],
          ["-errimo", "celeberrimo", "writing"],
          ["formal", "estremamente / oltremodo", "writing"]
        ]
      },
      examples: [
        { tr: "I'm dead tired, I can't take any more." },
        { tr: "The place was packed to the rafters." },
        { tr: "It's a world-famous case in legal history." },
        { tr: "He's over the moon about the news." },
        { tr: "A really hot tea, please." },
        { tr: "A fierce opponent of the government." }
      ]
    },
    vocab: [
      "dead tired",
      "blind drunk",
      "packed full",
      "soaking wet",
      "head over heels in love",
      "dirt poor",
      "good as gold",
      "filthy rich",
      "hyperactive",
      "world-famous",
      "bitter, fierce",
      "exceedingly"
    ],
    exercises: [
      {
        q: "Match the idiom to the meaning.",
        pairs: ["dead tired", "packed", "head over heels", "very poor"]
      },
      { q: "\"Ubriaco fradicio\" means:", opts: ["slightly tipsy", "blind drunk", "soaking wet"] },
      { q: "Form the learned superlative of \"celebre\": ___" },
      { q: "Form the learned superlative of \"acre\": ___" },
      {
        q: "\"Magra magra\" is:",
        opts: ["a stylistic mistake", "a colloquial intensifier by repetition", "a plural"]
      },
      { q: "Which variant fits a formal text?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Complete the idioms.", tr: "After the trip I was dead tired, and the hall was packed to the rafters." },
      { q: "\"He's a fierce opponent of this reform.\"" },
      { tr: "He was soaking wet and dead tired, but he was smiling." },
      { tr: "The place was packed to the rafters, you couldn't find a seat." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check si, adjective position and superlatives"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"Qui si ___ case.\"", opts: ["vende", "vendono", "vendere"] },
      { q: "\"In ufficio si ___ troppo.\" (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "\"___ si alza presto.\" (impersonal, reflexive)" },
      { q: "\"Si ___ discusso a lungo.\"" },
      { q: "\"Un vecchio amico\":", opts: ["old in years", "of long standing", "former"] },
      { q: "\"Diverse persone\":", opts: ["different people", "several people", "strangers"] },
      { q: "Superlative of \"celebre\": ___" },
      { q: "Match them up.", pairs: ["dead tired", "packed", "fierce", "very poor"] },
      { tr: "All the houses were sold in under two months." },
      { tr: "You get used to anything, even the worst of it." }
    ]
  },
  "unit:c1-u02": {
    title: "Verbs with pronouns built in",
    grammarNote: "verbi pronominali · idiom · spoken register"
  },
  "lesson:c1-u02-l1": {
    theme: "Advanced grammar",
    title: "Verbs with pronouns built in",
    objectives: [
      "recognize verbs with fused pronouns",
      "conjugate them in compound tenses",
      "use them in real conversation"
    ],
    theory: [
      {
        h: "The meaning can't be worked out from the parts",
        p: "<em>Prendersela</em> doesn't mean \"to take it for yourself\", it means \"to take offence\". <em>Cavarsela</em> has nothing to do with pulling anything out. These are separate lexical items and have to be learned as vocabulary, not as constructions."
      },
      {
        h: "Conjugation",
        p: "The pronouns come apart and go back in front of the verb: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. In compound tenses always <em>essere</em>, and the participle agrees with <em>la</em>: <em>me la sono cavat<b>a</b></em>, <em>ce l'ho fatt<b>a</b></em>."
      },
      {
        h: "The commonest ones",
        list: [
          "<em>farcela</em> — to manage: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — to get by: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — to take offence: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — to be off: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — not to give a damn: <em>Se ne frega.</em>",
          "<em>avercela con</em> — to have it in for: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — to feel up to: <em>Non me la sento.</em>",
          "<em>intendersene</em> — to know about: <em>Se ne intende di vini.</em>"
        ]
      },
      {
        tip: "<em>Ce l'ho fatta</em> is one of the most frequent sentences in Italian daily life. Note the <em>l'</em>: it is a shortened <em>la</em>, which is why the participle ends in <em>-a</em>."
      }
    ],
    grammar: {
      title: "Conjugating the verbi pronominali",
      table: {
        head: ["person", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["past tense", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "I made it, I passed the exam!" },
        { tr: "I get by pretty well in German." },
        { tr: "Don't take it badly, it wasn't aimed at you." },
        { tr: "He left without saying goodbye." },
        { tr: "I don't feel up to driving tonight." },
        { tr: "Have you got something against me?" }
      ]
    },
    vocab: [
      "to manage, to make it",
      "to get by",
      "to take offence",
      "to be off, to leave",
      "not to give a damn",
      "to have it in for",
      "to feel up to",
      "to know about",
      "to sort it out yourself",
      "to stop it",
      "to knock it off (colloquial)",
      "to have a great time"
    ],
    exercises: [
      { q: "Fill in: \"___ l'ho fatta!\" (I made it)" },
      { q: "Fill in: \"___ la cavo con l'italiano.\" (I get by)" },
      { q: "Fill in: \"Non ___ la prendere.\" (don't take it badly)" },
      {
        q: "\"Se ne frega di tutto\" means:",
        opts: ["he worries about everything", "he doesn't give a damn about anything", "he deals with everything"]
      },
      {
        q: "Why \"me la sono cavata\" and not \"cavato\"?",
        opts: ["It's a mistake", "The participle agrees with la", "Because a woman is speaking"]
      },
      { q: "Match them up.", pairs: ["to feel up to", "to know about", "to stop it", "to have a great time"] },
      { q: "Fill in the pronouns.", tr: "I don't feel up to driving, I'll walk." },
      { q: "\"Have you got something against me?\"" },
      { tr: "He left without saying goodbye to anyone." },
      { tr: "I get by pretty well, but I don't really know much about it." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Advanced grammar",
    title: "The modal and stylistic passive",
    objectives: [
      "use andare + participle to express necessity",
      "pick venire to stress the process",
      "recognize these forms in official texts"
    ],
    theory: [
      {
        h: "Andare = has to be",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> Not \"the application is submitted\", but \"the application <b>has to be</b> submitted\". English gets closest with \"is to be submitted\", which carries the same obligation, but the plain passive doesn't — and that is where the C1 misreading happens."
      },
      {
        h: "Mind the restriction",
        p: "The <em>andare</em> passive works <b>in simple tenses only</b> (presente, imperfetto, futuro). \"È andato presentato\" does not exist in this sense — in compound tenses you need <em>doveva essere presentato</em>."
      },
      {
        h: "Venire: process rather than state",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> stresses the action in progress, whereas <em>è applicata</em> can be read as a state. <em>Venire</em> is very common in legal and administrative texts."
      },
      {
        h: "A third variant: essere da + infinitive",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Close in meaning to <em>va rivisto</em>, slightly lighter and more spoken."
      }
    ],
    grammar: {
      title: "Passive variants",
      table: {
        head: ["form", "meaning", "restriction"],
        rows: [
          ["essere + participle", "general passive", "all tenses"],
          ["venire + participle", "process, repetition", "simple tenses only"],
          ["andare + participle", "necessity", "simple tenses only"],
          ["si passivante", "spoken register", "3rd person"],
          ["essere da + infinitive", "still to be done", "lighter register"],
          ["andare perso / smarrito", "accidental loss", "lexical exception"]
        ]
      },
      examples: [
        { tr: "The application has to be submitted by the thirtieth." },
        { tr: "This data has to be checked before publication." },
        { tr: "The rules are updated every year." },
        { tr: "The chapter still needs revising." },
        { tr: "Two documents went missing.", note: "andare + perso = accidental loss" },
        { tr: "All the applications were rejected." }
      ]
    },
    vocab: [
      "to file an application",
      "to check, to verify",
      "to update",
      "to reject",
      "the rules, the regulations",
      "publication",
      "to go missing",
      "to mislay",
      "still to be revised",
      "by the deadline",
      "formal obligation",
      "in force"
    ],
    exercises: [
      {
        q: "\"La domanda va presentata\" means:",
        opts: ["The application is being submitted", "The application has to be submitted", "The application has been submitted"]
      },
      {
        q: "Which sentence is wrong?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "The andare passive doesn't work in compound tenses."
      },
      { q: "Fill in: \"Questi dati ___ verificati.\" (have to be checked)" },
      { q: "Fill in: \"Il regolamento ___ aggiornato ogni anno.\" (venire)" },
      {
        q: "\"Sono andati persi due documenti\" means:",
        opts: ["The documents had to be lost", "Two documents went missing", "The documents left"]
      },
      {
        q: "Fill in the forms.",
        tr: "The application has to be submitted by the thirtieth; the data is checked by the office."
      },
      { q: "\"This chapter still needs revising.\"" },
      { tr: "All the applications were rejected." },
      { tr: "The form has to be filled in completely and signed at the bottom." },
      { tr: "This data has to be checked before publication." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Vocabulary",
    title: "Idioms in use",
    objectives: [
      "understand the common idioms of speech and the press",
      "use a few of them naturally",
      "avoid calques from English"
    ],
    theory: [
      {
        h: "An idiom is shorthand, not decoration",
        p: "An Italian idiom usually stands in for a whole sentence. <em>Non ci piove</em> means \"there's no doubt about it\", <em>tagliare la testa al toro</em> means \"to settle it with a decision\". Used in the right place they shorten what you say and make it sound native."
      },
      {
        h: "Idioms you will actually hear",
        list: [
          "<em>in bocca al lupo</em> — good luck (answer: <em>crepi</em>)",
          "<em>non vedo l'ora</em> — I can't wait",
          "<em>avere le mani in pasta</em> — to have a finger in every pie",
          "<em>prendere in giro</em> — to make fun of",
          "<em>costare un occhio della testa</em> — to cost an arm and a leg",
          "<em>essere al verde</em> — to be broke",
          "<em>fare il punto</em> — to take stock",
          "<em>mettere nero su bianco</em> — to put it in black and white"
        ]
      },
      {
        h: "False friends, English-Italian",
        p: "<em>Confetti</em> are sugared almonds, not confetti (<em>coriandoli</em>). <em>Firma</em> is a signature, not a firm (<em>ditta, azienda</em>). <em>Camera</em> is a room, not a camera (<em>macchina fotografica</em>). <em>Attualmente</em> means currently, not actually (<em>in realtà</em>). <em>Eventualmente</em> means possibly, not eventually (<em>alla fine</em>) — the one that causes the most trouble in business email."
      },
      {
        tip: "Don't translate English idioms literally. \"To talk to a brick wall\" happens to land on <em>parlare al muro</em>, but that coincidence is the exception: \"it's raining cats and dogs\" is <em>piove a catinelle</em>, raining by the basinful."
      }
    ],
    grammar: {
      title: "Idioms and false friends",
      table: {
        head: ["Italian", "meaning", "note"],
        rows: [
          ["non ci piove", "there's no doubt about it", "idiom"],
          ["non vedo l'ora", "I can't wait", "+ di + infinitive"],
          ["essere al verde", "to be broke", "idiom"],
          ["costare un occhio della testa", "to cost a fortune", "idiom"],
          ["firma", "signature", "false friend"],
          ["camera", "room", "false friend"],
          ["eventualmente", "possibly", "false friend"],
          ["confetti", "sugared almonds", "false friend"]
        ]
      },
      examples: [
        { tr: "I can't wait to see you again." },
        { tr: "That trip cost a fortune." },
        { tr: "Let's take stock of where we are." },
        { tr: "Let's put it all down in black and white." },
        { tr: "He's got a finger in every pie." },
        { tr: "Are you making fun of me?" }
      ]
    },
    vocab: [
      "there's no doubt about it",
      "I can't wait to",
      "to be broke",
      "to cost a fortune",
      "to make fun of",
      "to take stock",
      "in black and white",
      "to have a finger in every pie",
      "to talk to a brick wall",
      "signature (not: firm)",
      "firm, company",
      "confetti"
    ],
    exercises: [
      {
        q: "Match the idiom to its meaning.",
        pairs: ["there's no doubt about it", "to be broke", "to take stock", "to make fun of"]
      },
      { q: "\"La firma\" in Italian means:", opts: ["a firm", "a signature", "a brand"] },
      { q: "\"La colazione\" is:", opts: ["dinner", "breakfast", "lunch"] },
      { q: "Fill in: \"Non vedo l'ora ___ rivederti.\"" },
      {
        q: "\"Costare un occhio della testa\" means:",
        opts: ["to hurt", "to cost a great deal", "to be priceless"]
      },
      {
        q: "Which ones are false friends for an English speaker?",
        opts: ["camera", "firma", "tavolo", "confetti"]
      },
      { q: "Complete the idioms.", tr: "That trip cost a fortune and now I'm broke." },
      { q: "\"Let's take stock and put it in black and white.\"" },
      { tr: "There's no doubt about it: the decision has to be taken today." },
      { tr: "I can't wait for this project to be over." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check the verbi pronominali, the modal passive and idioms"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"___ l'ho fatta!\"" },
      { q: "\"___ la cavo con l'italiano.\"" },
      { q: "\"Non ___ la prendere.\"" },
      { q: "\"Se ne frega\":", opts: ["he worries", "he doesn't care", "he deals with it"] },
      { q: "\"Questi dati ___ verificati.\" (have to be)" },
      {
        q: "Wrong:",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "\"La firma\":", opts: ["a firm", "a signature", "a brand"] },
      { q: "Match them up.", pairs: ["to be broke", "no doubt about it", "to take stock", "in black and white"] },
      { tr: "I don't feel up to deciding now, I'll think it over and let you know." },
      { tr: "I made it, but it was a close call." }
    ]
  },
  "unit:c1-u03": {
    title: "Registers and text cohesion",
    grammarNote: "burocratese · spoken Italian · dislocation · reported speech"
  },
  "lesson:c1-u03-l1": {
    theme: "Style",
    title: "Official language: read it, don't write it",
    objectives: [
      "decode the typical bureaucratic constructions",
      "put them back into ordinary Italian",
      "spot when the register is being overused"
    ],
    theory: [
      {
        h: "How to recognize it",
        list: [
          "nominalization: <em>si procede all'erogazione</em> instead of <em>si eroga</em>",
          "passive and impersonal: <em>si comunica che…</em>",
          "back-reference: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "compound prepositions: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "Latinate vocabulary: <em>effettuare</em> for <em>fare</em>, <em>trattasi di</em> for <em>si tratta di</em>"
        ]
      },
      {
        h: "What it's for",
        p: "The official register is meant to guarantee precision and impersonality, often at the cost of being readable. At C1 <b>understanding</b> these texts is a necessary skill; <b>writing</b> in them is not advisable outside a legal context. English legalese works the same way and is fought with the same plain-language arguments."
      },
      {
        h: "The reverse move: simplifying",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> Worth doing to every official letter that reaches you: it shortens and clarifies."
      },
      {
        tip: "The Italian civil service has been campaigning for years to simplify its language (<em>semplificazione del linguaggio amministrativo</em>), but in practice burocratese is alive and well."
      }
    ],
    grammar: {
      title: "Burocratese and its translation",
      table: {
        head: ["official", "plain Italian", "English"],
        rows: [
          ["si comunica che", "vi informiamo che", "we hereby inform you that"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "under article 5"],
          ["di cui sopra", "indicato prima", "referred to above"],
          ["effettuare il pagamento", "pagare", "to make the payment"],
          ["in ottemperanza a", "seguendo", "in compliance with"],
          ["il predetto documento", "quel documento", "the aforesaid document"],
          ["trattasi di", "si tratta di", "this concerns"]
        ]
      },
      examples: [
        { tr: "We hereby inform you that the office will be closed on 2 June." },
        { tr: "Payment must be made within thirty days." },
        { tr: "Under the rules in force, the application is inadmissible." },
        { tr: "Please attach a copy of the document referred to above." },
        { tr: "The aforesaid deadline cannot be extended." },
        { tr: "Notice is hereby served to cease and desist." }
      ]
    },
    vocab: [
      "under, pursuant to",
      "in compliance with",
      "referred to above",
      "the aforesaid",
      "to carry out, to effect",
      "final, not extendable",
      "inadmissible",
      "the rules in force",
      "to serve notice on",
      "application, petition",
      "public body",
      "failure to comply"
    ],
    exercises: [
      { q: "Match the official with the plain form.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "\"Il termine è perentorio\" means:",
        opts: ["the deadline is indicative", "the deadline cannot be extended", "the deadline has been extended"]
      },
      {
        q: "\"La domanda è irricevibile\" means:",
        opts: [
          "the application is incomplete",
          "the application cannot be accepted",
          "the application is being processed"
        ]
      },
      { q: "Simplify: \"Il pagamento dovrà essere effettuato\" → \"Il pagamento ___ fatto\"" },
      {
        q: "Simplify the official sentence.",
        tr: "We hereby inform you that the application referred to above cannot be accepted."
      },
      { q: "\"We hereby inform you that the office will be closed.\"" },
      {
        q: "Is it worth writing burocratese at C1?",
        opts: [
          "Yes, it's a mark of fluency",
          "No, understand it but write more plainly",
          "Yes, in any professional context"
        ]
      },
      { tr: "Please attach a copy of the document." },
      { tr: "Under the rules in force, the application is inadmissible." },
      { tr: "Payment must be made by the stated deadline." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Style",
    title: "Spoken Italian and the neostandard",
    objectives: [
      "recognize the features of spoken Italian",
      "use dislocation to sound natural",
      "tell the neostandard from a mistake"
    ],
    theory: [
      {
        h: "Neostandard: not a mistake, a different register",
        list: [
          "<em>lui / lei</em> as subject instead of <em>egli / ella</em> — now the norm",
          "<em>gli</em> instead of <em>loro</em> (\"to them\") — common in informal writing too",
          "the all-purpose <em>che</em>: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> instead of <em>vi</em> for place: <em>ci vado</em>",
          "the imperfetto in a conditional sentence: <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "Dislocation: moving the emphasis",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (left dislocation) and <em>L'ho letto ieri, <b>il libro</b>.</em> (right). The fronted element is the topic and the pronoun \"holds it up\". English does this too (\"the book, I read it yesterday\") but marks it as emphatic; in spoken Italian it is unmarked, and without it your speech sounds stiff."
      },
      {
        h: "The presentative c'è",
        p: "<em>C'è Marco che ti cerca.</em> The construction introduces a new element into the conversation. This one transfers exactly: English says \"there's Marco looking for you\" for the same reason."
      },
      {
        trap: "The neostandard is accepted in speech and in informal writing. In an exam text, a formal email or a publication the standard applies: <em>se avessi saputo</em>, not \"se sapevo\"."
      }
    ],
    grammar: {
      title: "Features of speech",
      table: {
        head: ["feature", "example", "register"],
        rows: [
          ["left dislocation", "Il libro, l'ho letto.", "speech, accepted"],
          ["right dislocation", "L'ho letto, il libro.", "speech"],
          ["presentative c'è", "C'è Marco che ti cerca.", "speech"],
          ["gli for loro", "Gli ho detto tutto.", "neostandard"],
          ["all-purpose che", "Il giorno che sono partito", "speech"],
          ["hypothetical imperfetto", "Se lo sapevo, non venivo.", "speech only"]
        ]
      },
      examples: [
        { tr: "Rome, I've never been there.", note: "dislocation + ci" },
        { tr: "The coffee, I'll have it later." },
        { tr: "Your sister is waiting for you outside." },
        { tr: "I told them not to worry." },
        { tr: "That story, I really don't remember it." },
        { tr: "Money, let's not even talk about it." }
      ]
    },
    vocab: [
      "dislocation, fronting",
      "the new spoken standard",
      "informal register",
      "spokenness",
      "spontaneity",
      "topic / comment",
      "to emphasize",
      "to pick up with a pronoun",
      "to sound natural",
      "to sound stiff",
      "acceptable",
      "not advisable in writing"
    ],
    exercises: [
      {
        q: "\"Il libro, l'ho letto ieri\" is:",
        opts: ["a syntax error", "left dislocation, a feature of living Italian", "an official construction"]
      },
      {
        q: "Which construction is not advisable in formal writing?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Complete the dislocation: \"Il caffè, ___ prendo dopo.\"" },
      { q: "Fill in: \"Di soldi, non ___ parliamo nemmeno.\"" },
      {
        q: "\"C'è Marco che ti cerca\" is used to:",
        opts: ["describe a place", "bring new information into the conversation", "express doubt"]
      },
      { q: "Rewrite it with a dislocation.", tr: "That story, I don't remember it." },
      { q: "\"Rome, I've never been there.\"" },
      {
        q: "Which features belong to the neostandard?",
        opts: ["lui as subject", "gli for loro", "egli as subject", "the all-purpose che"]
      },
      { tr: "That story, I really don't remember it." },
      { tr: "The coffee, I'll have it later, I don't fancy it right now." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Style",
    title: "Cohesion in written text",
    objectives: [
      "build a coherent argumentative text",
      "use the devices of back-reference",
      "avoid repetition with synonyms and superordinates"
    ],
    theory: [
      {
        h: "Two different notions",
        p: "<b>Coesione</b> is the surface stitching: pronouns, connectives, lexical repetition. <b>Coerenza</b> is the logical continuity of the content. A text can be formally cohesive and logically incoherent, and the other way round."
      },
      {
        h: "Devices of back-reference",
        list: [
          "pronouns: <em>lo, ne, ci, questo, ciò</em>",
          "synonyms and superordinates: <em>il provvedimento → la misura → l'intervento</em>",
          "nominalizing the previous sentence: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "back-referring phrases: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "Thematic progression",
        p: "In a well-built paragraph every sentence picks up an element of the previous one (the topic) and adds new information (the comment). Introducing an entirely new topic with no warning breaks cohesion even when the connectives are all in place."
      },
      {
        tip: "Italian written style is not afraid of long sentences, but it values a <b>clear hierarchy</b> of subordinate clauses. Three subordinates nested inside each other is a sign the paragraph needs rewriting."
      }
    ],
    grammar: {
      title: "Cohesion devices",
      table: {
        head: ["device", "example", "function"],
        rows: [
          ["pronoun", "…la riforma. La si è discussa a lungo.", "back-reference"],
          ["synonym", "il provvedimento / la misura", "avoiding repetition"],
          ["nominalization", "hanno deciso → tale decisione", "compression"],
          ["back-reference", "il fenomeno in questione", "precision"],
          ["connective", "di conseguenza, per contro", "logical relation"],
          ["signposting", "come vedremo, in primo luogo", "orienting the reader"]
        ]
      },
      examples: [
        { tr: "The reform was passed. That decision drew conflicting reactions." },
        { tr: "The phenomenon in question mainly affects large cities." },
        { tr: "As we'll see, the problem is not only an economic one." },
        { tr: "On the other hand, the regional figures tell a different story." },
        { tr: "What has been said so far applies to the private sector." },
        { tr: "Consequently, the measure ought to be revised." }
      ]
    },
    vocab: [
      "cohesion",
      "coherence",
      "measure, ruling",
      "measure, policy",
      "in question",
      "such, that",
      "what has been said",
      "on the other hand",
      "consequently",
      "to provoke, to draw",
      "conflicting",
      "to concern, to apply to"
    ],
    exercises: [
      {
        q: "How do coesione and coerenza differ?",
        opts: [
          "They don't",
          "Coesione is the surface stitching, coerenza the logical continuity",
          "Coesione is about speech, coerenza about writing"
        ]
      },
      { q: "Complete the back-reference: \"Hanno approvato la legge. ___ decisione ha sorpreso tutti.\"" },
      { q: "Fill in: \"Il fenomeno in ___ riguarda le grandi città.\"" },
      { q: "Match them up.", pairs: ["on the other hand", "consequently", "to draw, to provoke", "what has been said"] },
      {
        q: "Which device best removes a repeated noun?",
        opts: ["repeating it with a synonym or a superordinate", "adding an adjective", "changing the word order"]
      },
      {
        q: "Make the paragraph cohesive.",
        tr: "The reform was passed. That decision drew conflicting reactions. Consequently the measure ought to be revised."
      },
      { q: "\"As we'll see, the problem is not only an economic one.\"" },
      {
        q: "Three nested subordinate clauses are a sign that:",
        opts: ["the text is sophisticated", "the paragraph needs rewriting", "the style is official"]
      },
      { tr: "What has been said so far applies above all to the private sector." },
      { tr: "Consequently I think the measure ought to be revised." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Exam",
    title: "Test — review of units 1-3",
    objectives: ["check si, the verbi pronominali, registers and cohesion"],
    theory: [{ p: "Twelve tasks from the first three units. Pass mark 70%." }],
    exercises: [
      { q: "\"Qui si ___ appartamenti.\"", opts: ["affitta", "affittano", "affittare"] },
      { q: "\"___ si abitua a tutto.\"" },
      { q: "\"Un'informazione certa\":", opts: ["a certain one", "a confirmed one", "a confidential one"] },
      { q: "\"___ l'ho fatta!\"" },
      { q: "\"Non ___ la sento di decidere.\"" },
      { q: "\"La domanda ___ presentata entro il 30.\" (has to be)" },
      { q: "\"Il termine è perentorio\":", opts: ["indicative", "not extendable", "extended"] },
      {
        q: "\"Se lo sapevo, non venivo\" is:",
        opts: ["the written standard", "the spoken neostandard", "always wrong"]
      },
      { q: "\"Il fenomeno in ___ riguarda le città.\"" },
      { q: "Learned superlative of \"acre\": ___" },
      { q: "\"This data has to be checked before publication.\"" },
      { tr: "You get used to anything, but you never quite resign yourself to it." }
    ]
  }
});
