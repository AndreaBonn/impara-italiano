/* ============================================================
   Learner-language text (en) for data/core/c2-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:c2-u01": {
    title: "Participles and verbal periphrases",
    grammarNote: "present and past participle · perifrasi verbali · implicit forms"
  },
  "lesson:c2-u01-l1": {
    theme: "Top-level grammar",
    title: "The present participle: three lives",
    objectives: [
      "tell the adjectival, nominal and verbal uses apart",
      "recognize the participio presente in legal texts",
      "avoid overusing it in speech"
    ],
    theory: [
      {
        h: "Nearly dead as a verb, very much alive as vocabulary",
        p: "The present participle in <em>-ante / -ente</em> has lost its verbal function in modern Italian, but it left behind hundreds of adjectives and nouns: <em>brillante, interessante, insegnante, cantante, dirigente, presidente, studente</em>. All of them are former participles."
      },
      {
        h: "The verbal use: law and administration",
        p: "<em>Il denaro <b>derivante</b> dalle offerte sarà investito.</em> Here <em>derivante</em> replaces a relative clause, <em>che deriva</em>. The construction survives in legal, technical and scientific writing; anywhere else it sounds artificial. English keeps the same device fully alive (\"the money deriving from the offers\"), which makes it easy to read and easy to overuse."
      },
      {
        h: "How to read it",
        p: "When you meet an <em>-ante/-ente</em> in a legal text, convert it to a relative clause on sight: <em>i soggetti <b>richiedenti</b></em> = <em>i soggetti che richiedono</em>. It's the fastest way to unpack a long official sentence."
      },
      {
        trap: "Not every word in <em>-ente</em> is a participle. <em>Paziente</em>, <em>presente</em>, <em>parente</em> are now nouns or adjectives in their own right and cannot be unpacked into a relative clause."
      }
    ],
    grammar: {
      title: "Participio presente",
      table: {
        head: ["form", "use", "example"],
        rows: [
          ["brillante", "adjective", "una carriera brillante"],
          ["insegnante", "noun", "un'insegnante di liceo"],
          ["derivante", "verbal", "il denaro derivante dalle offerte"],
          ["richiedente", "noun + verbal", "i soggetti richiedenti"],
          ["seguente", "adjective", "il giorno seguente"],
          ["proveniente", "verbal", "merci provenienti dall'estero"]
        ]
      },
      examples: [
        { tr: "The documents certifying the requirement must be attached." },
        { tr: "The amounts resulting from the balance sheet have been checked." },
        { tr: "A convincing speech, but with no figures in it." },
        { tr: "Passengers arriving from abroad must fill in the form." },
        { tr: "It was a losing choice from the very start." },
        { tr: "Those entitled will receive a notification.", note: "\"aventi diritto\" is a frozen legal formula" }
      ]
    },
    vocab: [
      "certifying, attesting",
      "resulting",
      "coming from, arriving from",
      "applicant",
      "entitled party",
      "convincing",
      "following",
      "previous",
      "in force",
      "requirement",
      "balance sheet, budget",
      "lacking, devoid of"
    ],
    exercises: [
      {
        q: "\"Il denaro derivante dalle offerte\" can be replaced with:",
        opts: ["il denaro che deriva dalle offerte", "il denaro derivato", "il denaro per derivare"]
      },
      { q: "\"Gli aventi diritto\" are:", opts: ["those who are right", "those entitled", "the owners"] },
      {
        q: "Turn it into a relative clause: \"i passeggeri provenienti dall'estero\" → \"i passeggeri ___ provengono dall'estero\""
      },
      { q: "Match them up.", pairs: ["certifying", "resulting", "in force", "devoid of"] },
      {
        q: "In which register is the participio presente still verbal?",
        opts: ["in casual speech", "in legal and technical texts", "in poetry"]
      },
      {
        q: "Which of these come from a present participle?",
        opts: ["insegnante", "tavolo", "cantante", "dirigente"]
      },
      {
        q: "Complete the official text.",
        tr: "The documents certifying the requirement are attached to the application by the applicants."
      },
      { q: "\"The amounts resulting from the balance sheet have been checked.\"" },
      { tr: "Those entitled will receive a notification within thirty days." },
      { tr: "A convincing speech, but with no concrete figures." }
    ]
  },
  "lesson:c2-u01-l2": {
    theme: "Top-level grammar",
    title: "The past participle in reduced clauses",
    objectives: [
      "build an absolute construction with a participle",
      "keep the participle agreement right",
      "compress written text"
    ],
    theory: [
      {
        h: "The absolute construction",
        p: "<em><b>Finita la riunione</b>, siamo usciti.</em> A past participle with a noun of its own forms a reduced clause with temporal or causal value. The noun comes <b>after</b> the participle, and the participle agrees with it in gender and number. English has the same construction (\"the meeting over, we left\") but keeps it for literary register; in Italian it is ordinary written prose."
      },
      {
        h: "With transitive and intransitive verbs",
        p: "Transitive: <em>Letto il contratto, ho firmato.</em> Intransitive with <em>essere</em>: <em>Partito il treno, siamo tornati a casa.</em> Agreement is obligatory in both cases."
      },
      {
        h: "Reinforcements",
        p: "<em>Una volta finita la riunione…</em>, <em>Appena arrivati…</em>, <em>Terminati i lavori…</em>. Adding <em>una volta</em> or <em>appena</em> pins down the time relation and reads more naturally."
      },
      {
        trap: "The absolute construction requires its subject to be <b>different</b> from the subject of the main clause, or to be an object. <em>Finito il lavoro, sono uscito</em> is fine, because <em>il lavoro</em> is not the subject of the main clause."
      }
    ],
    grammar: {
      title: "Participio assoluto",
      table: {
        head: ["construction", "full equivalent", "value"],
        rows: [
          ["Finita la riunione…", "Quando la riunione finì…", "temporal"],
          ["Letto il contratto…", "Dopo aver letto il contratto…", "temporal"],
          ["Partito il treno…", "Dopo che il treno fu partito…", "temporal"],
          ["Vista la situazione…", "Poiché la situazione è tale…", "causal"],
          ["Una volta ottenuto il visto…", "Quando avrà ottenuto il visto…", "conditional-temporal"],
          ["Fatte le dovute verifiche…", "Dopo aver fatto le verifiche…", "official"]
        ]
      },
      examples: [
        { tr: "Given the urgency, we're going ahead without waiting." },
        { tr: "Once the works were finished, the street was reopened." },
        { tr: "Once he has received confirmation, he'll be able to leave." },
        { tr: "The necessary checks having been made, the application was granted." },
        { tr: "Once we got there, we realized the mistake." },
        { tr: "Fixed costs excluded, the balance is positive." }
      ]
    },
    vocab: [
      "given the urgency",
      "to finish, to complete",
      "to reopen",
      "to grant an application",
      "the necessary checks",
      "to exclude",
      "destination",
      "to notice, to realize",
      "once + past participle",
      "as soon as + past participle",
      "premise, precondition",
      "as a preliminary matter"
    ],
    exercises: [
      { q: "Get the agreement right: \"Terminat___ i lavori, la strada è stata riaperta.\"" },
      { q: "Get the agreement right: \"Finit___ la riunione, siamo usciti.\"" },
      { q: "\"Vista la situazione\" has:", opts: ["temporal value", "causal value", "conditional value"] },
      {
        q: "Where does the noun go in an absolute construction?",
        opts: ["before the participle", "after the participle", "at the end of the sentence"]
      },
      {
        q: "Build the absolute constructions.",
        tr: "Having read the contract, I signed. Fixed costs excluded, the balance is positive."
      },
      { q: "\"Once he has received confirmation, he'll be able to leave.\"" },
      { tr: "Once we got there, we realized the mistake." },
      {
        q: "Why add \"una volta\" before the participle?",
        opts: ["for rhythm", "to pin down the time relation", "because the grammar requires it"]
      },
      { tr: "The necessary checks having been made, the application was granted." },
      { tr: "Given the urgency, we're going ahead without waiting for further confirmation." }
    ]
  },
  "lesson:c2-u01-l3": {
    theme: "Top-level grammar",
    title: "Verbal periphrases",
    objectives: [
      "recognize the aspectual, modal and gerundial periphrases",
      "state the phase of an action precisely",
      "use va + participle and ho da + infinitive"
    ],
    theory: [
      {
        h: "A periphrasis adds an aspect the tense doesn't carry",
        p: "Italian has no dedicated forms for \"I'm about to start\", \"I'm just finishing\", \"it's gradually growing\". Periphrases do that job: <em>sto per partire</em>, <em>sto finendo</em>, <em>va crescendo</em>."
      },
      {
        h: "Aspectual",
        list: [
          "<em>stare per + infinitive</em> — to be about to",
          "<em>essere sul punto di</em> — to be on the point of",
          "<em>accingersi a</em> — to set about (higher register)",
          "<em>cominciare / iniziare a</em>, <em>continuare / seguitare a</em>, <em>smettere / finire di</em>",
          "<em>stare + gerund</em> — in progress"
        ]
      },
      {
        h: "Modal",
        p: "<em>Il compito <b>va</b> rivisto</em> (it has to be revised), <em><b>Ho da</b> studiare</em> (I have studying to do), <em><b>C'è da</b> aspettare</em> (there's waiting to be done), <em><b>Sarebbe da</b> rifare</em> (it ought to be redone)."
      },
      {
        h: "The gerundial one in writing",
        p: "<em>Il fenomeno <b>va crescendo</b></em> (\"the phenomenon is gradually growing\") is <em>andare</em> + gerund, typical of written register. English \"is growing\" flattens the gradualness, which is exactly what the periphrasis is for. Keep it apart from <em>va rivisto</em>, where <em>andare</em> carries obligation."
      }
    ],
    grammar: {
      title: "A catalogue of periphrases",
      table: {
        head: ["type", "construction", "meaning"],
        rows: [
          ["aspectual", "sto per partire", "I'm about to leave"],
          ["aspectual", "sono sul punto di rinunciare", "I'm on the point of giving up"],
          ["aspectual", "mi accingo a rispondere", "I'm about to reply"],
          ["progressive", "sto scrivendo", "I'm writing right now"],
          ["progressive", "il fenomeno va crescendo", "the phenomenon keeps growing"],
          ["modal", "il testo va rivisto", "the text has to be revised"],
          ["modal", "ho da fare", "I've got things to do"],
          ["modal", "c'è da aspettare", "there's some waiting to do"]
        ]
      },
      examples: [
        { tr: "I'm about to go out, I'll call you back." },
        { tr: "I was on the point of giving up when the answer came." },
        { tr: "The number of applications keeps rising month by month." },
        { tr: "This chapter has to be rewritten from scratch." },
        { tr: "There's still a lot to do before the deadline." },
        { tr: "I'm now going to present the results." }
      ]
    },
    vocab: [
      "to be about to",
      "to be on the point of",
      "to set about",
      "to carry on (literary)",
      "to be gradually happening",
      "to have to be done",
      "to have to do",
      "there is to be done",
      "to give up",
      "to set out, to present",
      "entirely",
      "month by month"
    ],
    exercises: [
      {
        q: "\"Il testo va rivisto\" means:",
        opts: ["the text goes revised", "the text has to be revised", "the text is being revised"]
      },
      {
        q: "\"Il fenomeno va crescendo\" means:",
        opts: ["the phenomenon has to be increased", "the phenomenon keeps growing", "the phenomenon goes to grow"]
      },
      { q: "Fill in: \"___ per uscire, ti richiamo dopo.\" (I'm about to go out)" },
      { q: "Fill in: \"C'è ancora molto ___ fare.\" (to do)" },
      { q: "Match them up.", pairs: ["to set about", "to be on the point of", "to have to do", "to carry on"] },
      {
        q: "How do \"va rivisto\" and \"va crescendo\" differ?",
        opts: ["They don't", "The first carries obligation, the second a gradual process", "The first is a future tense"]
      },
      { q: "Complete the periphrases.", tr: "I was on the point of giving up, but the number of applications keeps rising." },
      { q: "\"This chapter has to be rewritten from scratch.\"" },
      { tr: "I'm now going to present the results of the study." },
      { tr: "I was on the point of giving up when the answer came." }
    ]
  },
  "lesson:c2-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check the participles and the verbal periphrases"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"Gli aventi diritto\":", opts: ["those who are right", "those entitled", "the owners"] },
      { q: "\"i passeggeri provenienti dall'estero\" → \"i passeggeri ___ provengono…\"" },
      { q: "Agreement: \"Terminat___ i lavori…\"" },
      { q: "Agreement: \"Finit___ la riunione…\"" },
      { q: "\"Vista la situazione\" has:", opts: ["temporal value", "causal value", "conditional value"] },
      { q: "\"Il testo va rivisto\":", opts: ["goes revised", "has to be revised", "is being revised"] },
      { q: "\"Il fenomeno va crescendo\":", opts: ["has to be increased", "keeps growing", "will grow"] },
      { q: "\"C'è molto ___ fare.\"" },
      { tr: "The necessary checks having been made, the project still has to be revised." },
      { tr: "Once confirmation is received, we'll go ahead without delay." }
    ]
  },
  "unit:c2-u02": {
    title: "Plurals and word formation",
    grammarNote: "double plurals · compound nouns · alteration · learned adjectives"
  },
  "lesson:c2-u02-l1": {
    theme: "Advanced vocabulary",
    title: "The double plural",
    objectives: [
      "tell the two plurals of the same noun apart",
      "pick the right one for the meaning",
      "avoid the usual slips"
    ],
    theory: [
      {
        h: "One singular, two plurals",
        p: "A dozen or so masculine nouns have two plurals: a regular one in <em>-i</em> (masculine) and an irregular one in <em>-a</em> (feminine). The difference is not stylistic — they are two different meanings. English has a faint version of this in brothers/brethren and indexes/indices, but nothing systematic."
      },
      {
        h: "The general rule",
        p: "The feminine form in <em>-a</em> usually means <b>the whole, a collective, or the literal bodily sense</b>; the masculine in <em>-i</em> means <b>individual items or the figurative sense</b>."
      },
      {
        h: "The pairs that matter",
        list: [
          "<em>l'osso</em> → <b>le ossa</b> (the human skeleton) / <b>gli ossi</b> (single bones, the kind you give a dog)",
          "<em>il braccio</em> → <b>le braccia</b> (arms of the body) / <b>i bracci</b> (arms of a crane, of a river)",
          "<em>il muro</em> → <b>le mura</b> (city walls) / <b>i muri</b> (walls of a room)",
          "<em>il filo</em> → <b>le fila</b> (threads of an argument, connections) / <b>i fili</b> (threads, wires)",
          "<em>il frutto</em> → <b>i frutti</b> (fruits in the sense of results) / <b>la frutta</b> (fruit as food, collective)",
          "<em>il dito</em> → <b>le dita</b> (the fingers of a hand as a set) / <b>i diti</b> (rare, individual ones)",
          "<em>il lenzuolo</em> → <b>le lenzuola</b> (a set of bed linen) / <b>i lenzuoli</b> (individual sheets)"
        ]
      },
      {
        tip: "<em>Le fila del discorso</em> (\"the threads of the argument\") and <em>tirare le fila</em> (\"to pull the strings\") are expressions where only the feminine form is possible."
      }
    ],
    grammar: {
      title: "Double plurals",
      table: {
        head: ["singular", "form in -a", "form in -i"],
        rows: [
          ["l'osso", "le ossa (skeleton)", "gli ossi (single bones)"],
          ["il braccio", "le braccia (of the body)", "i bracci (of a crane, a river)"],
          ["il muro", "le mura (city walls)", "i muri (walls of a room)"],
          ["il filo", "le fila (threads of an argument)", "i fili (wires)"],
          ["il frutto", "la frutta (fruit as food)", "i frutti (results)"],
          ["il dito", "le dita (fingers)", "i diti (rare)"],
          ["il lenzuolo", "le lenzuola (bed linen)", "i lenzuoli (individual sheets)"],
          ["il ciglio", "le ciglia (eyelashes)", "i cigli (roadside edges)"]
        ]
      },
      examples: [
        { tr: "My bones ache." },
        { tr: "The dog is gnawing the bones." },
        { tr: "The city walls are medieval." },
        { tr: "The walls in the house are thin." },
        { tr: "He reaped the fruits of his work." },
        { tr: "I always eat fruit at lunch." }
      ]
    },
    vocab: [
      "bones (skeleton) / single bones",
      "arms (of the body) / arms (of a crane)",
      "city walls / walls of a room",
      "threads of an argument / wires",
      "fruit (food) / fruits (results)",
      "fingers",
      "eyelashes / roadside edges",
      "bed linen",
      "to gnaw",
      "medieval",
      "to pull the strings",
      "to reap the rewards"
    ],
    exercises: [
      { q: "\"Mi fanno male ___.\" (my bones ache)", opts: ["gli ossi", "le ossa", "i ossi"] },
      {
        q: "\"___ della città sono medievali.\" (the city walls)",
        opts: ["I muri", "Le mura", "I muri della"]
      },
      { q: "Fill in: \"Ha raccolto ___ del suo lavoro.\" (fruits in the sense of results)" },
      { q: "Fill in: \"A pranzo mangio sempre ___.\" (fruit as food)" },
      { q: "Match the form to the meaning.", pairs: ["arms of the body", "arms of a crane", "threads", "wires"] },
      {
        q: "\"Tirare le fila\" means:",
        opts: ["to pull threads", "to pull the strings, to run things", "to untangle"]
      },
      { q: "Fill in the forms.", tr: "The city walls are old, but the walls in my house are thin." },
      { q: "\"The dog is gnawing the bones.\"" },
      { tr: "My fingers were frozen and my bones ached." },
      { tr: "He has finally reaped the fruits of his work." }
    ]
  },
  "lesson:c2-u02-l2": {
    theme: "Advanced vocabulary",
    title: "Compound nouns and their plurals",
    objectives: [
      "form the plural of a compound noun",
      "recognize the type of compound",
      "avoid the commonest slips"
    ],
    theory: [
      {
        h: "Four patterns",
        list: [
          "<b>no change</b>: <em>il doposcuola → i doposcuola</em>, <em>il portacenere → i portacenere</em>",
          "<b>second element changes</b>: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em>",
          "<b>first element changes</b>: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em>",
          "<b>both change</b>: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em>"
        ]
      },
      {
        h: "A practical rule for \"capo-\"",
        p: "When <em>capo</em> means <b>the person in charge</b>, that is the part that pluralizes: <em>i capistazione, i capireparto, i capifamiglia</em>. English does exactly this with \"attorneys general\" and \"passersby\": the head noun takes the plural, not the end of the word. When <em>capo</em> means <b>the best or the start of something</b>, the second element changes instead: <em>i capolavori, i capoluoghi</em>."
      },
      {
        h: "Verb + noun",
        p: "Compounds like <em>portacenere, apriscatole, spazzaneve, salvagente</em> are usually <b>invariable</b>, because the first element is a verb form. There are exceptions, but invariability is the safe default."
      },
      {
        tip: "When in doubt, check Treccani or De Mauro. This is one of the few areas where native speakers' intuition is unreliable too."
      }
    ],
    grammar: {
      title: "Plurals of compound nouns",
      table: {
        head: ["type", "singular", "plural"],
        rows: [
          ["verb + noun", "il portacenere", "i portacenere"],
          ["verb + noun", "l'apriscatole", "gli apriscatole"],
          ["capo (person)", "il capostazione", "i capistazione"],
          ["capo (best)", "il capolavoro", "i capolavori"],
          ["noun + noun", "il cavolfiore", "i cavolfiori"],
          ["noun + adjective", "la cassaforte", "le casseforti"],
          ["adjective + noun", "il bassofondo", "i bassifondi"],
          ["with a preposition", "il fico d'India", "i fichi d'India"]
        ]
      },
      examples: [
        { tr: "The stationmasters signed the minutes." },
        { tr: "He wrote three masterpieces in ten years." },
        { tr: "The safes were emptied." },
        { tr: "Buy me two tin openers, please." },
        { tr: "There are twenty regional capitals." },
        { tr: "The clean towels are in the wardrobe." }
      ]
    },
    vocab: [
      "masterpiece",
      "regional capital",
      "stationmaster",
      "head of the household",
      "safe",
      "the slums, the underworld",
      "tin opener",
      "ashtray",
      "snowplough",
      "life belt",
      "official minutes",
      "to empty"
    ],
    exercises: [
      { q: "Plural of \"il capolavoro\": ___" },
      { q: "Plural of \"il capostazione\": ___" },
      { q: "Plural of \"la cassaforte\": ___" },
      { q: "Plural of \"il portacenere\": ___" },
      {
        q: "Why \"i capistazione\" and not \"i capostazioni\"?",
        opts: [
          "It's an exception with no rule",
          "Because capo here means the person in charge",
          "Because stazione is feminine"
        ]
      },
      {
        q: "Which compounds are invariable?",
        opts: ["il portacenere", "il cavolfiore", "l'apriscatole", "lo spazzaneve"]
      },
      {
        q: "Fill in the plurals.",
        tr: "There are twenty regional capitals; the safes were emptied overnight."
      },
      { q: "\"The clean towels are in the wardrobe.\"" },
      { tr: "The department heads asked for a meeting with management." },
      { tr: "He wrote three masterpieces in under ten years." }
    ]
  },
  "lesson:c2-u02-l3": {
    theme: "Advanced vocabulary",
    title: "Altered forms and learned adjectives",
    objectives: [
      "use the altering suffixes deliberately",
      "recognize adjectives built on a different root",
      "match the lexical register"
    ],
    theory: [
      {
        h: "Alterazione: four directions",
        list: [
          "<b>diminutive</b> (<em>diminutivo</em>): <em>-ino, -etto, -ello</em> — <em>tavolino, casetta, alberello</em>",
          "<b>augmentative</b> (<em>accrescitivo</em>): <em>-one</em> — <em>portone, librone</em>",
          "<b>affectionate</b> (<em>vezzeggiativo</em>): <em>-uccio, -otto</em> — <em>caruccio, ragazzotto</em>",
          "<b>pejorative</b> (<em>peggiorativo</em>): <em>-accio, -astro</em> — <em>tempaccio, poetastro</em>"
        ]
      },
      {
        h: "Watch the lexical traps",
        p: "Not every word with one of these suffixes is an altered form. <em>Il mattone</em> is a brick, not a \"big morning\"; <em>il tacchino</em> is a turkey, not a \"little heel\"; <em>il burrone</em> is a ravine, not \"a lot of butter\". These are the <em>falsi alterati</em>."
      },
      {
        h: "Adjectives built on a different root",
        p: "High-register Italian uses adjectives of Latin or Greek origin with no formal link to the noun: <em>cavallo → equino / ippico</em>, <em>cuore → cardiaco</em>, <em>acqua → idrico</em>, <em>occhio → oculare</em>, <em>città → urbano</em>, <em>anno → annuale</em>, <em>fratello → fraterno</em>. English does the same thing with its own Latinate layer — heart/cardiac, water/aquatic, city/urban — so the pattern is familiar even where the Italian pairs aren't."
      },
      {
        h: "Adjectives with no superlative",
        p: "Some adjectives form no superlative, because they already express intensity (<em>eccezionale, splendido, straordinario, immenso</em>) or are themselves altered forms (<em>bellino, grandicello</em>). \"Eccezionalissimo\" reads as a joke."
      }
    ],
    grammar: {
      title: "Suffixes and learned adjectives",
      table: {
        head: ["noun", "learned adjective", "example"],
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
        { tr: "What foul weather! You don't go out in rain like this." },
        { tr: "We live in a little house outside town." },
        { tr: "The main door of the building is always locked." },
        { tr: "The country's water resources are shrinking." },
        { tr: "He had a cardiac arrest." },
        { tr: "Urban traffic is up twenty per cent." }
      ]
    },
    vocab: [
      "an altered form",
      "diminutive",
      "augmentative",
      "pejorative form",
      "false diminutive or augmentative",
      "cardiac",
      "water-, hydric",
      "ocular, eye-",
      "urban",
      "fraternal",
      "foul weather",
      "brick (not: a big morning)"
    ],
    exercises: [
      {
        q: "Match the noun to its learned adjective.",
        pairs: ["cardiaco", "idrico", "oculare", "urbano"]
      },
      { q: "\"Il mattone\" is:", opts: ["a big morning", "a brick", "a diminutive of matto"] },
      { q: "Which suffix is pejorative?", opts: ["-ino", "-one", "-accio"] },
      { q: "Form the diminutive of \"casa\": ___" },
      {
        q: "Why does \"eccezionalissimo\" sound wrong?",
        opts: ["It's too long", "Because eccezionale already expresses intensity", "Because it's a loanword"]
      },
      {
        q: "Which of these are falsi alterati (neither diminutives nor augmentatives)?",
        opts: ["il tacchino", "il tavolino", "il burrone", "il mattone"]
      },
      { q: "Fill in the learned adjectives.", tr: "Water resources are shrinking and urban traffic is up." },
      { q: "\"What foul weather!\"" },
      { tr: "The country's water resources have been shrinking for years." },
      { tr: "We live in a little house just outside town." }
    ]
  },
  "lesson:c2-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check the double plurals, compounds and word formation"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"Mi fanno male ___.\"", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "\"___ della città sono medievali.\"", opts: ["I muri", "Le mura", "Le muri"] },
      { q: "\"A pranzo mangio ___.\" (fruit as food)" },
      { q: "Plural of \"il capolavoro\": ___" },
      { q: "Plural of \"il capostazione\": ___" },
      { q: "Plural of \"la cassaforte\": ___" },
      { q: "Match them up.", pairs: ["cardiaco", "idrico", "urbano", "fraterno"] },
      { q: "\"Il burrone\" is:", opts: ["a lot of butter", "a ravine", "an augmentative of burro"] },
      { tr: "The department heads' safes have been checked." },
      { tr: "Urban water resources need immediate action." }
    ]
  },
  "unit:c2-u03": {
    title: "Nuance and authentic texts",
    grammarNote: "irony · slang · regionalisms · latinisms"
  },
  "lesson:c2-u03-l1": {
    theme: "Style and culture",
    title: "Irony in Italian",
    objectives: [
      "recognize irony in writing and in speech",
      "use the markers of irony",
      "tell irony from sarcasm"
    ],
    theory: [
      {
        h: "The markers of irony",
        list: [
          "<em>ma va'!</em>, <em>figurati!</em>, <em>ci mancherebbe</em> — feigned agreement",
          "<em>proprio</em>, <em>davvero</em>, <em>giusto</em> turned on their head: <em>Bravo, giusto quello che serviva.</em>",
          "lexical overstatement: <em>una tragedia</em> about a trifle",
          "a diminutive in a serious context: <em>un problemino da due milioni</em>"
        ]
      },
      {
        h: "Irony versus sarcasm",
        p: "Irony leaves the other person a way out, sarcasm doesn't. <em>Che bella idea</em> said with a smile is irony; the same sentence with emphasis and no smile is sarcasm. Italians use both, but sarcasm is signalled by intonation more often than by wording."
      },
      {
        h: "Understatement in Italian",
        p: "<em>Non è male</em> (about something excellent), <em>diciamo che non è andata benissimo</em> (about a disaster), <em>qualche problemino</em> (about a serious crisis). Litotes is highly productive in Italian: <em>non poco</em>, <em>non pochi</em>, <em>non senza difficoltà</em>. This one transfers directly from English, which runs on the same device."
      },
      {
        tip: "In writing, irony is often marked with quotation marks: <em>la \"riforma\" del settore</em>. It signals that the writer is distancing themselves from the word — the same scare quotes as in English."
      }
    ],
    grammar: {
      title: "The devices of irony",
      table: {
        head: ["device", "example", "meaning"],
        rows: [
          ["feigned agreement", "Ma figurati!", "oh sure, as if"],
          ["litotes", "Non è male.", "it's excellent"],
          ["diminutive", "un problemino", "a serious problem"],
          ["overstatement", "una tragedia", "a minor inconvenience"],
          ["scare quotes", "la \"riforma\"", "the writer's distance"],
          ["rhetorical question", "E chi l'avrebbe detto?", "it was obvious all along"]
        ]
      },
      examples: [
        { tr: "Well done, just what we needed." },
        { tr: "Let's say it didn't go brilliantly." },
        { tr: "A little two-million-euro problem." },
        { tr: "Oh, so now it's my fault. Of course it is." },
        { tr: "The \"reform\" made the situation worse." },
        { tr: "Not without difficulty, we got to the end." }
      ]
    },
    vocab: [
      "oh sure, as if",
      "that's all we needed",
      "come off it!",
      "litotes",
      "understatement",
      "sarcasm",
      "to make fun of",
      "to stress, to underline",
      "tone",
      "allusion",
      "double meaning",
      "not a little, quite a lot"
    ],
    exercises: [
      {
        q: "\"Non è male\" about a great film is:",
        opts: ["criticism", "litotes, praise by understatement", "indifference"]
      },
      {
        q: "\"Un problemino da due milioni\" is an example of:",
        opts: ["an ironic diminutive", "a lexical error", "official register"]
      },
      {
        q: "How does irony differ from sarcasm?",
        opts: ["It doesn't", "Irony leaves a way out, sarcasm doesn't", "Sarcasm is always written"]
      },
      { q: "Match them up.", pairs: ["as if, oh sure", "that's all we needed", "come off it!", "quite a lot"] },
      {
        q: "The quotation marks in \"la \"riforma\"\" signal:",
        opts: ["a quotation", "the writer's distance from the word", "a technical term"]
      },
      {
        q: "Complete the ironic sentence.",
        tr: "Well done, just what we needed. Let's say it didn't go brilliantly."
      },
      { q: "\"Not without difficulty, we got to the end.\"" },
      {
        q: "\"E chi l'avrebbe detto?\" about something obvious means:",
        opts: ["nobody expected it", "it was obvious all along", "who said that?"]
      },
      { tr: "Let's say it didn't go entirely brilliantly, to put it mildly." },
      { tr: "A little two-million-euro problem, nothing much." }
    ]
  },
  "lesson:c2-u03-l2": {
    theme: "Style and culture",
    title: "Slang and regionalisms",
    objectives: [
      "recognize youth slang and regionalisms",
      "tell colloquial register from dialect",
      "know what not to use in writing"
    ],
    theory: [
      {
        h: "Gergo giovanile",
        p: "<em>Boh</em> (no idea), <em>bella!</em> (hi), <em>tipo</em> (like), <em>raga</em> (guys, from <em>ragazzi</em>), <em>sto zitto</em>, <em>che palle</em> (what a drag, mildly crude), <em>spoilerare</em>, <em>cringiare</em>. This layer moves fast — what's live today sounds like an archive recording in five years."
      },
      {
        h: "Regionalisms inside the standard",
        list: [
          "north: <em>anguria</em> (watermelon), <em>bidello</em>, <em>ciao</em> from <em>schiavo</em>",
          "centre: <em>cocomero</em> (watermelon), <em>a me mi</em> (colloquial, wrong in writing)",
          "south: <em>melone d'acqua</em>, frequent passato remoto, <em>mo'</em> (now)",
          "everywhere: <em>magari</em>, <em>mica</em>, <em>manco</em> (not even, colloquial)"
        ]
      },
      {
        h: "A dialect is not slang",
        p: "Neapolitan and Sicilian are <b>separate languages</b> descended from Latin alongside Tuscan, with their own literature and grammar. Calling them \"broken Italian\" is factually wrong and culturally a blunder — the same mistake as calling Scots a bad accent."
      },
      {
        trap: "<em>Mica</em> (\"not at all\", \"hardly\") is everywhere in speech: <em>Non è mica facile.</em> In a formal text replace it with <em>affatto</em> or drop it."
      }
    ],
    grammar: {
      title: "Colloquial registers",
      table: {
        head: ["expression", "meaning", "register"],
        rows: [
          ["boh", "no idea", "colloquial"],
          ["mica", "not at all, hardly", "colloquial, very frequent"],
          ["magari", "if only / maybe / even", "everywhere"],
          ["mo'", "now", "centre-south"],
          ["che palle", "what a drag", "mildly crude"],
          ["tipo", "like, sort of", "youth slang"],
          ["dai!", "come on! / oh come off it!", "everywhere"],
          ["figurati", "don't mention it / as if", "everywhere"]
        ]
      },
      examples: [
        { tr: "It's not nearly as easy as it looks." },
        { tr: "I don't know, no idea." },
        { tr: "Come on, don't take it badly!" },
        { tr: "It was like midnight when we left." },
        { tr: "If only it were that simple." },
        { tr: "I'll be right there, hang on a second.", note: "centre-south" }
      ]
    },
    vocab: [
      "slang, jargon",
      "regionalism",
      "not at all, hardly",
      "no idea",
      "come on!",
      "like, sort of",
      "now (regional)",
      "watermelon (north / centre)",
      "at all (formal)",
      "colloquial",
      "vulgar",
      "dated"
    ],
    exercises: [
      {
        q: "\"Non è mica facile\" means:",
        opts: ["it's a bit easy", "it's not easy at all", "it's very easy"]
      },
      { q: "\"Boh\" is:", opts: ["a cry of pain", "no idea", "a greeting"] },
      {
        q: "Neapolitan is:",
        opts: ["broken Italian", "a separate Romance language", "youth slang"]
      },
      { q: "Match the regionalism to the region.", pairs: ["north", "centre", "centre-south", "south"] },
      { q: "Replace \"mica\" with the formal form: \"Non è ___ facile.\"" },
      {
        q: "\"A me mi piace\" is:",
        opts: ["correct in writing", "colloquial, avoided in writing", "purely dialectal"]
      },
      {
        q: "Fill in the colloquial phrases.",
        tr: "I don't know, no idea. Anyway it's not nearly as easy as it looks."
      },
      { q: "\"Come on, don't take it badly!\"" },
      { tr: "I don't know, it was like midnight, it's not that easy to remember." },
      { tr: "It's not nearly as easy as it looks, believe me." }
    ]
  },
  "lesson:c2-u03-l3": {
    theme: "Style and culture",
    title: "Latinisms and the learned register",
    objectives: [
      "recognize latinisms in legal and academic texts",
      "use them in the right place",
      "close out level C2"
    ],
    theory: [
      {
        h: "Latin is alive in official Italian",
        p: "Italian keeps a large stock of Latin expressions in everyday legal and academic language. English legal register keeps many of the same ones — <em>de facto</em>, <em>ad hoc</em>, <em>sine die</em>, <em>pro tempore</em> — so most of this transfers on sight. The ones that don't, like <em>una tantum</em> and <em>in itinere</em>, are the ones to learn deliberately."
      },
      {
        h: "The commonest ones",
        list: [
          "<em>de facto</em> / <em>de iure</em> — in practice / by law",
          "<em>ex post</em> / <em>ex ante</em> — after the fact / in advance",
          "<em>in itinere</em> — in progress",
          "<em>una tantum</em> — one time only",
          "<em>ad hoc</em>, <em>pro tempore</em>, <em>sine die</em> (with no date set)",
          "<em>a fortiori</em>, <em>in primis</em>, <em>de cuius</em> (the deceased, in inheritance law)"
        ]
      },
      {
        h: "The learned register beyond Latin",
        p: "<em>Vieppiù</em> (increasingly), <em>altresì</em> (also), <em>ancorché</em> (although), <em>laddove</em> (whereas), <em>giacché</em> (since), <em>onde</em> (so as to). They belong to law, serious journalism and the essay; in speech they sound pretentious."
      },
      {
        h: "Closing the level",
        p: "At C2 it is no longer about adding forms, it's about <b>choosing the right one</b>. The same content in colloquial, standard and learned register is three different messages — and fluency means choosing deliberately."
      }
    ],
    grammar: {
      title: "Latinisms and learned forms",
      table: {
        head: ["expression", "meaning", "context"],
        rows: [
          ["de facto / de iure", "in practice / by law", "law"],
          ["ex post / ex ante", "after the fact / in advance", "economics, law"],
          ["in itinere", "in progress", "administration"],
          ["una tantum", "one time only", "finance"],
          ["sine die", "with no date set", "law"],
          ["altresì", "also, furthermore", "law, journalism"],
          ["ancorché", "although", "journalism"],
          ["laddove", "whereas", "essay"]
        ]
      },
      examples: [
        { tr: "The contract has de facto already expired." },
        { tr: "The bonus is paid as a one-off." },
        { tr: "The meeting was postponed with no new date set." },
        { tr: "The case is still in progress." },
        { tr: "It is also noted that the deadline cannot be extended." },
        { tr: "Whereas the first study showed a decline, the second shows stability." }
      ]
    },
    vocab: [
      "de facto / de jure",
      "after the fact / in advance",
      "in progress",
      "one time only",
      "with no date set",
      "ad hoc",
      "also, furthermore",
      "although",
      "whereas",
      "since, seeing that",
      "to pay out, to disburse",
      "to postpone"
    ],
    exercises: [
      { q: "Match the latinism to its meaning.", pairs: ["de facto", "one time only", "with no date set", "in progress"] },
      {
        q: "\"Il bonus è erogato una tantum\" means:",
        opts: ["paid monthly", "paid as a one-off", "paid once a year"]
      },
      {
        q: "\"Rinviata sine die\" means:",
        opts: ["postponed by a week", "postponed with no new date set", "cancelled"]
      },
      { q: "Replace \"anche\" with the learned form: \"Si segnala ___ che…\"" },
      { q: "Replace \"mentre\" with the essayistic form: \"___ il primo studio indicava un calo…\"" },
      {
        q: "What does fluency at C2 consist of?",
        opts: [
          "Knowing the largest number of words",
          "Choosing the register deliberately to fit the situation",
          "Always using the learned forms"
        ]
      },
      { q: "Complete the legal text.", tr: "The contract has de facto already expired, and the case is still in progress." },
      { q: "\"It is also noted that the deadline cannot be extended.\"" },
      { tr: "The meeting was postponed with no new date set, for technical reasons." },
      { tr: "The payment is made as a one-off, once the application is filed." }
    ]
  },
  "lesson:c2-u03-test": {
    theme: "Exam",
    title: "Test — review of units 1-3",
    objectives: ["check the participles, word formation, registers and nuance"],
    theory: [{ p: "Twelve tasks from the first three units. Pass mark 70%." }],
    exercises: [
      { q: "\"Gli aventi diritto\":", opts: ["those who are right", "those entitled", "the owners"] },
      { q: "Agreement: \"Terminat___ i lavori…\"" },
      { q: "\"Il testo va rivisto\":", opts: ["goes revised", "has to be revised", "is being revised"] },
      { q: "\"Mi fanno male ___.\"", opts: ["gli ossi", "le ossa", "i ossi"] },
      { q: "Plural of \"la cassaforte\": ___" },
      { q: "Plural of \"il capostazione\": ___" },
      { q: "Match them up.", pairs: ["idrico", "cardiaco", "urbano", "oculare"] },
      { q: "\"Non è mica facile\":", opts: ["a bit easy", "not easy at all", "very easy"] },
      { q: "\"Una tantum\":", opts: ["monthly", "one time only", "once a year"] },
      { q: "Replace \"anche\": \"Si segnala ___ che…\"" },
      { q: "\"The case is still in progress and has been postponed with no date set.\"" },
      { tr: "Given the situation, the project has to be revised in full before the deadline." }
    ]
  }
});
