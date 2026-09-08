/* ============================================================
   Learner-language text (en) for data/core/a1-03.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.

   A few Italian model answers in core say "polacca" or name Warsaw
   and Kraków. Those are recorded audio and fixed answer keys, so the
   English prompts keep them rather than inviting an answer the
   checker would reject.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u08": { title: "The people around us", grammarNote: "possessives · describing people · comparatives" },
  "lesson:a1-u08-l1": {
    theme: "People and relationships",
    title: "Possessives",
    objectives: [
      "use mio, tuo, suo with the right ending",
      "know when the article drops before a family member",
      "say who's who in your life"
    ],
    theory: [
      {
        h: "Agreement with the thing, not the owner",
        p: "<em>Il <b>suo</b> libro</em> means \"his book\" or \"her book\" — the ending describes the <b>book</b>, not the owner. Italian doesn't mark the owner's gender here at all, which is exactly backwards from English his/her. When context isn't enough, Italian adds <em>di lui</em> or <em>di lei</em>."
      },
      {
        h: "The article is the norm",
        p: "You almost always say <em><b>il</b> mio libro</em>, <em><b>la</b> mia macchina</em>. English \"my book\" takes no article, so this one gets dropped constantly by beginners."
      },
      {
        h: "The exception: a single family member",
        p: "No article: <em>mia madre, mio padre, tuo fratello, sua sorella</em>. But the article <b>comes back</b> when: plural (<em>i miei genitori</em>), diminutive (<em>la mia sorellina</em>), an extra adjective (<em>la mia sorella maggiore</em>) or the form <em>loro</em> (<em>la loro madre</em>)."
      },
      {
        trap: "<b>Loro</b> never inflects and <b>always</b> takes the article: <em>il loro cane, la loro casa, i loro amici, la loro madre</em>. It's the only possessive that behaves this way."
      }
    ],
    grammar: {
      title: "Possessive forms",
      table: {
        head: ["person", "m. sing.", "f. sing.", "m. pl.", "f. pl."],
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
        { tr: "My sister lives in Bari.", note: "no article" },
        { tr: "My sisters live in Bari.", note: "plural → the article returns" },
        { tr: "My boss is very demanding." },
        { tr: "Their house is near the park.", note: "loro always takes the article" },
        { tr: "His/her friends are nice." },
        { tr: "It's her book, not his.", note: "when you have to be specific" }
      ]
    },
    vocab: [
      "mother / father",
      "parents",
      "brother / sister",
      "son / daughter",
      "husband / wife",
      "partner",
      "coworker",
      "boss",
      "neighbor",
      "roommate",
      "best friend",
      "grandchild; nephew/niece"
    ],
    exercises: [
      {
        q: "Which is correct for \"my mother\"?",
        opts: ["la mia madre", "mia madre", "la madre mia"],
        why: "A single family member with no adjective takes no article."
      },
      {
        q: "And for \"my parents\"?",
        opts: ["miei genitori", "i miei genitori", "il mio genitori"],
        why: "In the plural the article comes back."
      },
      {
        q: "Fill in: \"___ loro casa è grande.\"",
        why: "Loro always needs the article, family members included."
      },
      {
        q: "Fill in: \"___ mia sorella maggiore.\" (my older sister)",
        why: "An extra adjective brings the article back."
      },
      {
        q: "Choose the right possessive for \"io\".",
        items: ["book", "car", "parents", "sisters"]
      },
      {
        q: "\"Il suo libro\" — whose book is it?",
        opts: ["His only", "Hers only", "His or hers — context decides"]
      },
      { q: "\"My boss is very demanding.\"" },
      {
        q: "Fill in (add the article, or write a dash \"-\" if there isn't one).",
        tr: "My brother works with my parents."
      },
      { tr: "My sister and her children live in Palermo." },
      { tr: "My best friend is called Paolo." }
    ]
  },
  "lesson:a1-u08-l2": {
    theme: "People and relationships",
    title: "Describing how someone looks",
    objectives: [
      "describe someone's appearance",
      "use essere and avere in the right places",
      "ask what someone looks like"
    ],
    theory: [
      {
        h: "Essere for the whole, avere for the parts",
        p: "Height, build and overall impression go through <strong>essere</strong>: <em>è alto, è magra</em>. Specific body features go through <strong>avere</strong>: <em>ha i capelli neri</em>, <em>ha gli occhi verdi</em>. English uses \"have\" for both — \"she is tall\" and \"she has dark hair\" — so the split is familiar; what isn't is the article."
      },
      {
        h: "The article with body parts",
        p: "Italian says <em>ha <b>i</b> capelli lunghi</em>, not \"ha capelli lunghi\". English has no article there (\"she has long hair\"), so it's easy to leave out — and without it the sentence sounds unfinished."
      },
      {
        h: "Capelli is always plural",
        p: "<em>I capelli</em> is hair as a whole; the singular <em>il capello</em> means one single strand. Same with <em>i baffi</em> (a mustache), which is plural in Italian."
      },
      {
        tip: "Asking about looks: <em>Com'è?</em> (\"what's he like?\"). Asking about personality: <em>Com'è di carattere?</em> Don't confuse either with <em>Come sta?</em>, which is about how someone feels."
      }
    ],
    grammar: {
      title: "Essere and avere in descriptions",
      table: {
        head: ["feature", "verb", "example"],
        rows: [
          ["height", "essere", "È alto / bassa / di media statura."],
          ["build", "essere", "È magro / robusto / sportiva."],
          ["hair", "avere", "Ha i capelli castani e ricci."],
          ["eyes", "avere", "Ha gli occhi azzurri."],
          ["age", "avere", "Ha circa quarant'anni."],
          ["glasses, beard", "portare / avere", "Porta gli occhiali. Ha la barba."]
        ]
      },
      examples: [
        { tr: "What's your brother like? — Tall and slim." },
        { tr: "She has long straight hair." },
        { tr: "He has green eyes and wears glasses." },
        { tr: "She's a middle-aged woman." },
        { tr: "She looks like her mother." },
        { tr: "He has a nice smile." }
      ]
    },
    vocab: [
      "tall / short",
      "slim / heavy-set",
      "hair (always plural)",
      "blond / brown / black",
      "straight / curly",
      "eyes",
      "blue / green / brown",
      "glasses",
      "beard",
      "smile",
      "to look like",
      "of average height"
    ],
    exercises: [
      {
        q: "Which sentence is correct?",
        opts: ["È i capelli neri.", "Ha i capelli neri.", "Sono capelli neri."],
        why: "Body features go through avere, and with the article."
      },
      {
        q: "Fill in: \"Ha ___ occhi azzurri.\"",
        why: "Occhi starts with a vowel and is plural → gli."
      },
      { q: "Fill in: \"Mia sorella ___ alta e magra.\"" },
      {
        q: "What does \"Com'è di carattere?\" mean?",
        opts: ["How is he feeling?", "What's his personality like?", "What does he look like?"]
      },
      { q: "Match them up.", pairs: ["curly hair", "of average height", "wears glasses", "looks like"] },
      { q: "Fill in the description.", tr: "My dad is tall and has gray hair. He wears glasses." },
      { q: "\"She has long curly hair.\"" },
      { tr: "What's your sister like? She's short and athletic." },
      { tr: "She has brown hair, green eyes and a nice smile." },
      { tr: "My brother is tall and has black hair." }
    ]
  },
  "lesson:a1-u08-l3": {
    theme: "People and relationships",
    title: "Personality and opinions about people",
    objectives: [
      "describe someone's character",
      "give an opinion about a person",
      "avoid the false friend: simpatico is not \"sympathetic\""
    ],
    theory: [
      {
        h: "Simpatico means \"fun to be around\", not \"sympathetic\"",
        p: "<strong>Simpatico</strong> describes someone who's good company: they joke, they draw you into the conversation, they're easy to be with. English \"sympathetic\" means <em>comprensivo</em> and is a completely different thing. \"Kind\" in the polite sense is <em>gentile</em>. The opposite, <em>antipatico</em>, is much stronger than \"unpleasant\" — it borders on an accusation."
      },
      {
        h: "Opinions with secondo me",
        p: "<em>Secondo me</em> (\"in my opinion\") is the commonest way to introduce a view. Watch the form: not <em>secondo io</em> but <em>secondo me</em> — this preposition takes the stressed pronoun."
      },
      {
        h: "Careful with praise and criticism",
        p: "Italian is generous with compliments (<em>bravissimo, gentilissima</em>) but usually softens criticism of a person: instead of <em>è antipatico</em> you'll more often hear <em>è un po' particolare</em> or <em>non è il mio tipo</em>."
      },
      {
        contrast: "Italian is full of words that look like English and aren't. <em>Simpatico</em> ≠ sympathetic (that's <em>comprensivo</em>). <em>Gentile</em> ≠ gentle (that's <em>delicato</em>). <em>Bravo</em> ≠ brave (that's <em>coraggioso</em>) — it means good at something. <em>Sensibile</em> ≠ sensible (that's <em>ragionevole</em>) — it means sensitive. These four cause more confusion than any grammar point at this level."
      }
    ],
    grammar: {
      title: "Personality adjectives",
      table: {
        head: ["Italian", "English", "note"],
        rows: [
          ["simpatico / antipatico", "good company / unpleasant", "antipatico is strong"],
          ["gentile", "kind, polite", "not \"gentle\""],
          ["bravo", "good at something", "\"bravo in matematica\""],
          ["socievole / timido", "sociable / shy", ""],
          ["generoso / egoista", "generous / selfish", "egoista doesn't change in the masculine"],
          ["tranquillo / nervoso", "calm / edgy", ""]
        ]
      },
      examples: [
        { tr: "My coworker is really good company." },
        { tr: "In my opinion he's a generous person." },
        { tr: "She's very good at math." },
        { tr: "He's a bit shy at first." },
        { tr: "Not my type, but he's polite." },
        { tr: "I like him.", note: "literally: \"he is likeable to me\"" }
      ]
    },
    vocab: [
      "good company / unpleasant",
      "kind, polite",
      "good at something",
      "sociable",
      "shy",
      "generous",
      "selfish",
      "calm",
      "funny (of a thing or a person)",
      "boring",
      "in my opinion",
      "I like him / her"
    ],
    exercises: [
      {
        q: "\"Simpatico\" is closest to:",
        opts: ["polite, well-mannered", "fun, good company", "sympathetic, understanding"],
        why: "\"Polite\" is gentile and \"sympathetic\" is comprensivo. Simpatico is about being easy to be around."
      },
      {
        q: "Which form is correct?",
        opts: ["Secondo io", "Secondo me", "Secondo mio"],
        why: "After the preposition secondo comes the stressed pronoun: me, te, lui, lei."
      },
      { q: "Fill in: \"Mia collega è molto ___.\" (kind)" },
      {
        q: "\"È bravo in matematica\" means:",
        opts: ["Bravo for math!", "He's good at math", "He likes math"]
      },
      {
        q: "Match the adjectives with their opposites.",
        pairs: ["antipatico", "egoista", "timido", "nervoso"]
      },
      { q: "\"In my opinion he's a calm person.\"" },
      {
        q: "Fill it in.",
        tr: "In my opinion my roommate is a very sociable person: he talks to everybody."
      },
      { tr: "He's a bit shy at first." },
      { tr: "In my opinion she's a generous and funny person." },
      { tr: "My coworker is really good company, I like him." }
    ]
  },
  "lesson:a1-u08-l4": {
    theme: "Core grammar",
    title: "Comparatives",
    objectives: [
      "compare two people or things",
      "choose between di and che",
      "use the irregular migliore and peggiore"
    ],
    theory: [
      {
        h: "Three basic constructions",
        list: [
          "<b>più… di</b> — more than: <em>Anna è più alta di Marco.</em>",
          "<b>meno… di</b> — less than: <em>Questo è meno caro di quello.</em>",
          "<b>come / quanto</b> — as… as: <em>È alto come te.</em>"
        ]
      },
      {
        h: "Di or che — the practical rule",
        p: "<strong>Di</strong> when you compare <b>two different things in one respect</b>: <em>Roma è più grande di Firenze</em>. <strong>Che</strong> when you compare <b>two qualities of the same thing</b>, two verbs, or when a preposition follows: <em>È più simpatico che intelligente</em>, <em>È più facile parlare che scrivere</em>, <em>Vado più spesso a Roma che a Milano</em>. English uses \"than\" for all of it, so this split has to be learned from scratch."
      },
      {
        h: "Irregular forms",
        p: "<em>buono → migliore</em> (better), <em>cattivo → peggiore</em> (worse), <em>grande → maggiore</em>, <em>piccolo → minore</em>. The regular forms (<em>più buono, più cattivo</em>) exist too and get used, especially about taste: <em>questa pizza è più buona</em>."
      },
      {
        trap: "After <b>di</b> comes the stressed pronoun: <em>più alto di <b>me</b></em>, not \"di io\". Same after <b>come</b>: <em>come te</em>. English \"taller than me\" happens to match, so this one is easy — until you reach for \"di io\" by analogy with the subject."
      }
    ],
    grammar: {
      title: "Comparatives",
      table: {
        head: ["construction", "example", "in English"],
        rows: [
          ["più… di", "Anna è più alta di Marco.", "Anna is taller than Marco."],
          ["meno… di", "Questo è meno caro di quello.", "This is cheaper than that."],
          ["come", "Sei alto come me.", "You're as tall as I am."],
          ["più… che (two qualities)", "È più simpatico che bello.", "He's more fun than good-looking."],
          ["più… che (two verbs)", "È più facile parlare che scrivere.", "Speaking is easier than writing."],
          ["il più… di", "È il più bravo della classe.", "He's the best in the class."]
        ]
      },
      examples: [
        { tr: "Milan is more expensive than Bologna." },
        { tr: "My brother is less patient than I am." },
        { tr: "This wine is better than that one." },
        { tr: "It's the worst day of the week." },
        { tr: "I work in Rome more often than in Milan." },
        { tr: "You're as kind as your mother." }
      ]
    },
    vocab: [
      "more… than",
      "less… than",
      "as… as",
      "better / worse",
      "the most… of",
      "patient",
      "fast / slow",
      "easy / difficult",
      "young / older",
      "the same",
      "different from",
      "above all"
    ],
    exercises: [
      {
        q: "\"Anna è più alta ___ Marco.\"",
        opts: ["che", "di", "come"],
        why: "Two different people compared in one respect → di."
      },
      {
        q: "\"È più simpatico ___ bello.\"",
        opts: ["di", "che", "come"],
        why: "Two qualities of the same person → che."
      },
      {
        q: "Fill in: \"Sei più alto ___ me.\"",
        why: "After di comes the stressed pronoun: di me, di te, di lui."
      },
      { q: "Give the irregular comparative of \"buono\": ___" },
      {
        q: "\"È il più bravo della classe\" means:",
        opts: ["He's better than the class", "He's the best in the class", "He's as good as the class"]
      },
      { q: "\"Milan is more expensive than Bologna.\"" },
      {
        q: "Fill in di or che.",
        tr: "Rome is bigger than Florence, but speaking Italian is easier than writing it."
      },
      { tr: "This wine is better than that one." },
      { tr: "My brother is less patient than I am." },
      { tr: "This city is calmer than Milan." }
    ]
  },
  "lesson:a1-u08-test": {
    theme: "Test",
    title: "Unit 8 test",
    objectives: ["check possessives, describing people and comparatives"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"my mother\" is:", opts: ["la mia madre", "mia madre", "mia la madre"] },
      { q: "\"___ miei genitori abitano a Lodz.\"" },
      { q: "\"___ loro casa è nuova.\"" },
      { q: "The correct sentence:", opts: ["È i capelli neri.", "Ha i capelli neri.", "Ha capelli neri."] },
      { q: "\"Ha ___ occhi verdi.\"" },
      { q: "\"Simpatico\" means:", opts: ["polite", "fun, good company", "sympathetic"] },
      { q: "\"È più alta ___ me.\"", opts: ["che", "di", "come"] },
      { q: "The comparative of \"cattivo\": ___" },
      { tr: "My sister is younger than I am and has curly hair." },
      { tr: "In my opinion she's a very kind person." }
    ]
  },
  "unit:a1-u09": { title: "Free time", grammarNote: "fare/giocare/suonare · weather · stare + gerundio" },
  "lesson:a1-u09-l1": {
    theme: "Free time",
    title: "Interests and making plans",
    objectives: [
      "say what you do in your free time",
      "tell fare, giocare and suonare apart",
      "suggest doing something and respond to a suggestion"
    ],
    theory: [
      {
        h: "Three verbs, three different areas",
        list: [
          "<b>fare</b> + an individual sport or activity: <em>faccio yoga, faccio una passeggiata, faccio nuoto</em>",
          "<b>giocare a</b> + a game or team sport: <em>gioco a calcio, gioco a carte, gioco a tennis</em>",
          "<b>suonare</b> + an instrument: <em>suono la chitarra, suono il pianoforte</em>"
        ]
      },
      {
        trap: "English \"play\" covers all of it: play soccer, play the guitar, play cards. Italian splits it into <em>giocare</em> (a game) and <em>suonare</em> (an instrument). \"Gioco la chitarra\" reads like machine translation, and it's the single most predictable English-speaker error in this lesson."
      },
      {
        h: "Suggestions",
        p: "The common formulas: <em>Ti va di…?</em> (\"do you feel like…?\"), <em>Che ne dici di…?</em> (\"how about…?\"), <em>Andiamo a…?</em>. The replies: <em>Volentieri!</em>, <em>Perché no?</em>, <em>Mi dispiace, non posso</em>."
      },
      {
        tip: "<em>Ti va</em> is impersonal like <em>mi piace</em>: <em>ti va un caffè?</em> (\"do you feel like a coffee?\"). Once again the thing is the subject."
      }
    ],
    grammar: {
      title: "Fare, giocare, suonare",
      table: {
        head: ["verb", "with what", "example"],
        rows: [
          ["fare", "individual sport, activity", "Faccio palestra tre volte a settimana."],
          ["giocare a", "game, team sport", "Gioco a calcio il sabato."],
          ["suonare", "instrument", "Suono il pianoforte da dieci anni."],
          ["andare a/in", "a place or an activity", "Vado a ballare / in piscina."],
          ["ti va di + infinitive", "a suggestion", "Ti va di andare al cinema?"]
        ]
      },
      examples: [
        { tr: "On weekends I go for a walk downtown." },
        { tr: "I play tennis with my sister." },
        { tr: "I play the guitar, but badly." },
        { tr: "Do you feel like going to the movies tonight?" },
        { tr: "Gladly! What time?" },
        { tr: "Sorry, I can't tonight." }
      ]
    },
    vocab: [
      "free time",
      "to play sports",
      "gym",
      "swimming pool",
      "to play soccer",
      "to play the guitar",
      "to dance",
      "to read a book",
      "to watch a series",
      "do you feel like…?",
      "gladly",
      "maybe another time"
    ],
    exercises: [
      {
        q: "\"___ la chitarra.\" (I play the guitar)",
        opts: ["Gioco", "Suono", "Faccio"],
        why: "An instrument takes suonare, never giocare."
      },
      { q: "\"___ a calcio.\" (I play soccer)", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "Fill in: \"___ yoga due volte a settimana.\" (I do yoga)" },
      { q: "Fill in: \"___ va di andare al cinema?\" (do you feel like)" },
      {
        q: "Match the verb with what follows it.",
        pairs: ["carte", "il pianoforte", "una passeggiata", "piscina"]
      },
      { q: "\"Do you feel like going to the movies tonight?\"" },
      { q: "Fill it in.", tr: "On Saturdays I play tennis, on Sundays I play the guitar and go for a walk." },
      {
        q: "A friend suggests going out.",
        setting: "Thursday evening, a voice message from a friend.",
        lines: [
          { tr: "Hey! Do you feel like going to a concert on Saturday?" },
          { tr: "Accept enthusiastically and ask what time.", answerTr: "Gladly! What time?" },
          { tr: "At nine, but we're meeting at half past eight in the square." },
          { tr: "Confirm and say goodbye.", answerTr: "Great, see you there!" }
        ]
      },
      { tr: "In my free time I go to the gym and watch series." },
      { tr: "Do you feel like a walk downtown?" }
    ]
  },
  "lesson:a1-u09-l2": {
    theme: "Free time",
    title: "Weather and the seasons",
    objectives: ["describe the weather", "use fare impersonally", "connect the weather to your plans"],
    theory: [
      {
        h: "The weather is made, not is",
        p: "Italian says <em>fa caldo</em> (\"it makes hot\"), <em>fa freddo</em>, <em>fa bel tempo</em>. This is the <strong>impersonal</strong> use of <em>fare</em>: no subject, always third person singular. English says \"it is hot\", which pulls you toward <em>essere</em> — and that's the mistake."
      },
      {
        h: "Three different constructions",
        list: [
          "<b>fare</b> + noun: <em>fa caldo, fa freddo, fa bel/brutto tempo</em>",
          "<b>c'è</b> + noun: <em>c'è il sole, c'è vento, c'è nebbia</em>",
          "a verb of its own: <em>piove</em> (it's raining), <em>nevica</em> (it's snowing)"
        ]
      },
      {
        trap: "\"Sono caldo\" means you personally are hot to the touch — and in casual usage it means something else entirely. The weather is <em>fa caldo</em>; about yourself it's <em>ho caldo</em>. Three different verbs for what English does with one \"to be\"."
      },
      {
        h: "The seasons",
        p: "<em>in primavera, in estate, in autunno, in inverno</em>. Months take no article after <em>a</em> or <em>in</em>: <em>a gennaio</em>, <em>in luglio</em> — both are correct."
      }
    ],
    grammar: {
      title: "The weather",
      table: {
        head: ["construction", "example", "in English"],
        rows: [
          ["fare", "Fa caldo. / Fa freddo.", "It's hot. / It's cold."],
          ["fare", "Fa bel tempo. / Fa brutto tempo.", "The weather's nice / bad."],
          ["c'è", "C'è il sole. / C'è vento.", "It's sunny. / It's windy."],
          ["a verb", "Piove. / Nevica.", "It's raining. / It's snowing."],
          ["degrees", "Ci sono venti gradi.", "It's twenty degrees."],
          ["question", "Che tempo fa?", "What's the weather like?"]
        ]
      },
      examples: [
        { tr: "It's hot today, we're going to the beach." },
        { tr: "In winter it's often foggy in Milan." },
        { tr: "It's raining tomorrow, we're staying home." },
        { tr: "What's the weather like in Rome? — Beautiful!" },
        { tr: "I'm cold, close the window.", note: "about yourself: avere" },
        { tr: "Spring is the best season." }
      ]
    },
    vocab: [
      "what's the weather like?",
      "it's hot / cold",
      "it's sunny",
      "it's raining / snowing",
      "it's windy / foggy",
      "rain / snow",
      "clouds",
      "degree",
      "spring / summer",
      "fall / winter",
      "umbrella",
      "the forecast"
    ],
    exercises: [
      {
        q: "How do you say \"it's hot\" (about the weather)?",
        opts: ["Sono caldo", "Fa caldo", "Ho caldo"],
        why: "\"Ho caldo\" means you personally feel hot; the weather is fa caldo."
      },
      { q: "Fill in: \"___ il sole.\" (it's sunny)" },
      { q: "Fill in: \"Domani ___.\" (it's raining tomorrow)" },
      { q: "\"Ho freddo\" means:", opts: ["It's cold outside", "I'm cold", "It's getting cold"] },
      { q: "Match them up.", pairs: ["it's snowing", "it's foggy", "bad weather", "umbrella"] },
      { q: "Fill in the forecast.", tr: "Tomorrow it'll be cold and windy, and it'll rain in the afternoon." },
      { q: "\"What's the weather like in Rome?\"" },
      { tr: "In winter it's often foggy in Milan." },
      { tr: "The weather's nice today, it's twenty-five degrees." },
      { tr: "What's the weather like today? Cold and raining." }
    ]
  },
  "lesson:a1-u09-l3": {
    theme: "Core grammar",
    title: "Stare + gerundio",
    objectives: [
      "describe something happening right now",
      "form the gerundio",
      "know when NOT to use this construction"
    ],
    theory: [
      {
        h: "Happening right now",
        p: "<strong>Stare + gerundio</strong> stresses that something is going on <b>at this moment</b>: <em>Sto lavorando</em> (\"I'm working right now\"). Plain <em>lavoro</em> is also correct, but it's general: \"I work, I have a job\"."
      },
      {
        h: "Forming the gerundio",
        list: [
          "<b>-are → -ando</b>: parlare → parl<b>ando</b>",
          "<b>-ere → -endo</b>: prendere → prend<b>endo</b>",
          "<b>-ire → -endo</b>: dormire → dorm<b>endo</b>",
          "irregular: <em>fare → facendo, dire → dicendo, bere → bevendo</em>"
        ]
      },
      {
        trap: "Unlike English, <b>stare + gerundio cannot talk about the future</b>. \"I'm meeting Anna tomorrow\" is <em>domani vedo Anna</em>, never \"sto vedendo Anna domani\". This is the biggest trap in the lesson, because the English present continuous does double duty and Italian's doesn't."
      },
      {
        h: "Pronouns with this construction",
        p: "The pronoun can go before <em>stare</em> or attach to the gerundio: <em><b>ti</b> sto aspettando</em> = <em>sto aspettando<b>ti</b></em>. The first is commoner in speech."
      }
    ],
    grammar: {
      title: "Stare + gerundio",
      table: {
        head: ["person", "stare", "example"],
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
        { tr: "What are you doing? — I'm studying." },
        { tr: "I can't talk, I'm driving." },
        { tr: "They're on their way, wait five minutes." },
        { tr: "I'm waiting for you outside the bar." },
        { tr: "I'm about to leave.", note: "stare per = to be about to" },
        { tr: "I'm going to Rome tomorrow.", note: "the future: plain present tense" }
      ]
    },
    vocab: [
      "to be doing something",
      "to be about to do something",
      "now",
      "at the moment",
      "to wait",
      "to drive",
      "to joke",
      "to arrive",
      "to go out",
      "to hurry",
      "just a moment",
      "I'm running late"
    ],
    exercises: [
      { q: "\"Sto mangiando\" means:", opts: ["I usually eat", "I'm eating right now", "I will eat"] },
      { q: "Form the gerundio of \"fare\": ___" },
      { q: "Form the gerundio of \"dormire\": ___" },
      { q: "Fill in: \"Loro ___ arrivando.\"" },
      {
        q: "How do you say \"I'm meeting Anna tomorrow\"?",
        opts: ["Sto vedendo Anna domani", "Domani vedo Anna", "Sto per vedere Anna domani"],
        why: "Stare + gerundio can't express the future — unlike the English present continuous."
      },
      { q: "\"I can't talk, I'm driving.\"" },
      { q: "Fill in the phone call.", tr: "— What are you doing? — I'm leaving the house, I'll be there in a minute." },
      { tr: "I'm waiting for you outside the bar." },
      { tr: "Sorry, I'm about to go into a meeting." },
      { tr: "What are you doing? — I'm studying Italian." }
    ]
  },
  "lesson:a1-u09-l4": {
    theme: "Free time",
    title: "Culture, movies and music",
    objectives: [
      "buy a ticket and talk about a movie",
      "give an opinion about a book, a movie, a concert",
      "use the basic phrases for reviewing something"
    ],
    theory: [
      {
        h: "Reviewing it: mi è piaciuto",
        p: "About something you enjoyed you say <em>mi è piaciuto</em> (masculine) or <em>mi è piaciuta</em> (feminine). This is already the past tense of <em>piacere</em> — the full explanation comes at A2, but the phrase is so common it's worth having now."
      },
      {
        h: "Original version",
        p: "Italian movies are traditionally dubbed. A subtitled showing is marked <strong>V.O.</strong> (versione originale) or <em>sottotitolato</em>. Big cities have them, but you have to look."
      },
      {
        h: "Tickets",
        p: "<em>Un biglietto intero</em> (full price), <em>ridotto</em> (reduced). Assigned seating is standard: <em>Che posto preferisce?</em>"
      },
      {
        tip: "The word <em>spettacolo</em> covers both a movie showing and a theater performance. <em>Lo spettacolo delle 21</em> is the 9 p.m. showing."
      }
    ],
    grammar: {
      title: "Opinions and culture",
      table: {
        head: ["function", "phrase", "in English"],
        rows: [
          ["positive", "Mi è piaciuto molto.", "I really liked it."],
          ["negative", "Non mi è piaciuto per niente.", "I didn't like it at all."],
          ["recommending", "Te lo consiglio.", "I recommend it."],
          ["boredom", "Mi ha annoiato.", "It bored me."],
          ["ticket", "Due biglietti per lo spettacolo delle nove.", "Two tickets for the nine o'clock showing."],
          ["asking an opinion", "Com'era?", "How was it?"]
        ]
      },
      examples: [
        { tr: "I went to the movies last night." },
        { tr: "The film was in the original version." },
        { tr: "I really liked the soundtrack." },
        { tr: "Two reduced tickets, please." },
        { tr: "What genre do you prefer?" },
        { tr: "I really do recommend it." }
      ]
    },
    vocab: [
      "movie",
      "showing, performance",
      "full price / reduced ticket",
      "original version",
      "subtitles",
      "director",
      "actor / actress",
      "soundtrack",
      "concert",
      "exhibition",
      "to recommend",
      "how was it?"
    ],
    culture: {
      title: "Through Italian eyes: movies and dubbing",
      text: "<p>Italy has one of the strongest dubbing traditions in the world. Voice actors (<i>doppiatori</i>) are recognized names, and some spent decades as the Italian voice of a single Hollywood star.</p><p>The side effect: Italians tend to have weaker listening comprehension in English than Scandinavians, who grew up with subtitles. Streaming is changing that.</p><p>If you're learning Italian, dubbing is on your side: a movie you already know, in Italian, is ready-made listening practice with a plot you can't get lost in.</p>"
    },
    exercises: [
      {
        q: "What does \"V.O.\" mean on a listing?",
        opts: ["Shortened version", "Original version, usually subtitled", "Children's version"]
      },
      { q: "Fill in: \"Mi è ___ molto il film.\" (I really liked it)" },
      { q: "Fill in: \"Due biglietti ___, per favore.\" (reduced)" },
      { q: "Match them up.", pairs: ["director", "soundtrack", "subtitles", "exhibition"] },
      { q: "\"I really liked it, I recommend it.\"" },
      {
        q: "\"Lo spettacolo delle nove\" is:",
        opts: ["The ninth performance", "The nine o'clock showing", "Nine tickets"]
      },
      {
        q: "Fill in the exchange at the box office.",
        tr: "— Two tickets for the nine o'clock showing. — Full price or reduced? — One full and one reduced."
      },
      { tr: "What kind of movies do you prefer?" },
      { tr: "I really liked the concert, especially the second half." },
      { tr: "Do you feel like going to the exhibition on Sunday?" }
    ]
  },
  "lesson:a1-u09-test": {
    theme: "Test",
    title: "Unit 9 test",
    objectives: ["check fare/giocare/suonare, the weather and stare + gerundio"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"___ la chitarra.\"", opts: ["Gioco", "Suono", "Faccio"] },
      { q: "\"___ a carte.\"", opts: ["Suono", "Gioco", "Faccio"] },
      { q: "\"___ caldo oggi.\" (it's hot)" },
      { q: "\"___ il sole.\"" },
      { q: "The gerundio of \"bere\": ___" },
      { q: "\"Loro ___ arrivando.\"" },
      {
        q: "\"I'm going to Rome tomorrow\":",
        opts: ["Sto andando a Roma domani", "Domani vado a Roma", "Sto per Roma domani"]
      },
      { tr: "Do you feel like a walk?" },
      { tr: "I'm just heading out, it's cold, I'm taking an umbrella." },
      { tr: "On weekends I play tennis and go for a walk." }
    ]
  },
  "unit:a1-u10": {
    title: "Looking back",
    grammarNote: "passato prossimo · telling a story · A1 review"
  },
  "lesson:a1-u10-l1": {
    theme: "The past",
    title: "Passato prossimo with avere",
    objectives: [
      "build the past tense with avere",
      "form the regular past participle",
      "say what you did yesterday"
    ],
    theory: [
      {
        h: "A compound tense, two parts",
        p: "<strong>Passato prossimo</strong> = <em>avere</em> or <em>essere</em> in the present + the <b>past participle</b>. It's the everyday Italian past, and it covers both English \"I ate\" and \"I have eaten\" — one tense doing the work of two."
      },
      {
        h: "The regular participle",
        list: [
          "<b>-are → -ato</b>: parlare → parl<b>ato</b>",
          "<b>-ere → -uto</b>: credere → cred<b>uto</b>",
          "<b>-ire → -ito</b>: finire → fin<b>ito</b>"
        ]
      },
      {
        h: "Most verbs take avere",
        p: "Every <b>transitive</b> verb (one that can take a direct object: \"I ate <i>something</i>\", \"I saw <i>someone</i>\") builds the passato prossimo with <em>avere</em>. The participle then <b>doesn't change</b>: <em>Anna ha mangiato</em>, not \"ha mangiata\"."
      },
      {
        h: "Common irregular participles",
        p: "You have to memorize these, because they belong to the most frequent verbs: <em>fare → fatto</em>, <em>dire → detto</em>, <em>vedere → visto</em>, <em>prendere → preso</em>, <em>leggere → letto</em>, <em>scrivere → scritto</em>, <em>bere → bevuto</em>, <em>aprire → aperto</em>, <em>chiudere → chiuso</em>."
      }
    ],
    grammar: {
      title: "Passato prossimo with avere",
      table: {
        head: ["person", "avere", "participle", "whole form"],
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
        { tr: "Yesterday I had a fantastic pizza." },
        { tr: "Did you see the movie last night?" },
        { tr: "We booked a table for eight." },
        { tr: "I didn't understand, could you repeat that?" },
        { tr: "What did you do over the weekend?" },
        { tr: "I've already paid.", note: "\"già\" goes between avere and the participle" }
      ]
    },
    vocab: [
      "yesterday",
      "the day before yesterday",
      "last week",
      "last month",
      "two days ago",
      "already",
      "not yet",
      "then, afterwards",
      "first, earlier",
      "to do → done",
      "to see → seen",
      "to say → said"
    ],
    exercises: [
      {
        q: "What is the passato prossimo made of?",
        opts: [
          "Two verbs in the present tense",
          "avere/essere + the past participle",
          "essere + the infinitive"
        ]
      },
      { q: "The participle of \"parlare\": ___" },
      { q: "The participle of \"credere\": ___" },
      { q: "The participle of \"finire\": ___" },
      { q: "Fill in: \"Ieri ___ una pizza.\" (I ate)" },
      { q: "Match the verb with its irregular participle.", pairs: ["fatto", "visto", "scritto", "preso"] },
      {
        q: "Fill in the story of the weekend.",
        tr: "On Saturday I watched a movie, then I ate out. On Sunday I did nothing."
      },
      { q: "\"I didn't understand, could you repeat that?\"" },
      { tr: "Last week we visited Florence." },
      { tr: "Last night I read a really interesting book." }
    ]
  },
  "lesson:a1-u10-l2": {
    theme: "The past",
    title: "Passato prossimo with essere",
    objectives: [
      "recognize the verbs that need essere",
      "make the participle agree with the subject",
      "tell the story of a trip"
    ],
    theory: [
      {
        h: "A smaller group, but a very frequent one",
        p: "Verbs of <b>motion and change of state</b> build the passato prossimo with <strong>essere</strong>: <em>andare, venire, arrivare, partire, uscire, entrare, tornare, salire, scendere, restare, rimanere, nascere, morire, diventare, essere, stare</em>. Plus every reflexive verb. English uses \"have\" for all of them, so there's nothing to transfer — this is a list you learn."
      },
      {
        h: "The participle agrees with the subject",
        p: "This is the key difference: with <em>essere</em> the participle behaves like an adjective. <em>Sono andat<b>o</b></em> (a man), <em>sono andat<b>a</b></em> (a woman), <em>siamo andat<b>i</b></em> (a masculine or mixed group), <em>sono andat<b>e</b></em> (women only)."
      },
      {
        h: "How to remember which verb takes essere",
        p: "A practical test: if the verb <b>can't take a direct object</b> (\"I went <i>what?</i>\" makes no sense), it probably takes essere. It isn't a hundred percent reliable (<em>dormire</em> takes avere), but it works most of the time."
      },
      {
        trap: "A few verbs switch auxiliary along with their meaning: <em>ho finito il lavoro</em> (I finished the work — transitive, avere) versus <em>il film è finito</em> (the movie ended — intransitive, essere). Same with <em>cambiare, passare, cominciare</em>."
      }
    ],
    grammar: {
      title: "Passato prossimo with essere",
      table: {
        head: ["subject", "form", "example"],
        rows: [
          ["a man", "sono andato", "Sono andato a Roma."],
          ["a woman", "sono andata", "Sono andata a Roma."],
          ["group (m/mixed)", "siamo andati", "Siamo andati insieme."],
          ["group (women only)", "siamo andate", "Siamo andate insieme."],
          ["reflexive", "mi sono alzato/a", "Mi sono alzata alle sei."],
          ["irregular", "sono nato/a", "Sono nata a Varsavia."]
        ]
      },
      examples: [
        { tr: "I left at seven in the morning." },
        { tr: "We arrived late." },
        { tr: "Marco was born in 1990." },
        { tr: "We had a really good time." },
        { tr: "The movie ended at eleven." },
        { tr: "I finished work at six.", note: "transitive → avere" }
      ]
    },
    vocab: [
      "to go → went",
      "to come → came",
      "to arrive",
      "to leave",
      "to come back",
      "to go out",
      "to go in",
      "to be born",
      "to stay",
      "to become",
      "to have fun",
      "trip"
    ],
    exercises: [
      {
        q: "What's special about the participle with essere?",
        opts: ["It never changes", "It agrees with the subject like an adjective", "It always ends in -o"]
      },
      { q: "A woman saying \"I left\":", opts: ["sono partito", "sono partita", "ho partito"] },
      { q: "Fill in for a group of women: \"Loro sono ___ ieri.\" (they arrived)" },
      { q: "The participle of \"nascere\" (masculine): ___" },
      {
        q: "Which verbs build the passato prossimo with essere?",
        opts: ["andare", "mangiare", "partire", "vedere", "nascere"]
      },
      {
        q: "\"Il film ___ alle undici.\" (ended)",
        opts: ["ha finito", "è finito", "sono finito"],
        why: "Here \"finire\" is intransitive (the movie ended by itself) → essere."
      },
      {
        q: "Fill in the trip report (a woman speaking).",
        tr: "I left on Friday and arrived in Naples in the evening. I had a really good time."
      },
      { tr: "We arrived late." },
      { tr: "I was born in Warsaw, but I grew up in Kraków." },
      { tr: "Yesterday I went to the movies with a friend." }
    ]
  },
  "lesson:a1-u10-l3": {
    theme: "The past",
    title: "Telling a story about the past",
    objectives: [
      "link sentences into a short narrative",
      "use time expressions that order the account",
      "ask someone about their weekend"
    ],
    theory: [
      {
        h: "A story needs a time skeleton",
        p: "Verbs alone don't make a narrative. You need connectives: <em>prima</em> (first), <em>poi</em> (then), <em>dopo</em> (after that), <em>alla fine</em> (in the end), <em>mentre</em> (while). Without them the sentences just sit next to each other like a list."
      },
      {
        h: "Questions about the past",
        p: "<em>Che cosa hai fatto?</em>, <em>Dove sei andato/a?</em>, <em>Con chi sei uscito/a?</em>, <em>Com'è andata?</em> (\"how did it go?\"). That last one is extremely common as a conversation opener."
      },
      {
        h: "Già and ancora go inside",
        p: "The adverbs <em>già</em> (already), <em>ancora</em> (yet), <em>appena</em> (just), <em>mai</em> (never) go <b>between the auxiliary and the participle</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stata a Venezia</em>. English does the same with \"I have already eaten\", so this one transfers cleanly."
      },
      {
        tip: "A natural way to answer: don't list everything. An Italian will reply briefly (<em>Niente di che, sono stato a casa</em>) and only expand when asked."
      }
    ],
    grammar: {
      title: "Connectives and questions about the past",
      table: {
        head: ["function", "phrase", "example"],
        rows: [
          ["sequence", "prima… poi… alla fine", "Prima ho lavorato, poi sono uscito."],
          ["at the same time", "mentre", "Mentre aspettavo, ho letto."],
          ["question", "Che cosa hai fatto?", "What did you do?"],
          ["question", "Com'è andata?", "How did it go?"],
          ["already", "già (inside)", "Ho già finito."],
          ["never", "non… mai (inside)", "Non sono mai stato in Sicilia."]
        ]
      },
      examples: [
        { tr: "On Saturday morning I did the shopping at the market." },
        { tr: "Then I went to the gym." },
        { tr: "In the evening we went out with friends." },
        { tr: "In the end we got home late." },
        { tr: "How did the meeting go? — Not bad." },
        { tr: "I haven't finished yet." }
      ]
    },
    vocab: [
      "first",
      "then",
      "after that",
      "in the end",
      "while",
      "how did it go?",
      "nothing special",
      "a disaster",
      "it was fun",
      "to do the grocery shopping",
      "to go shopping (clothes)",
      "to rest"
    ],
    exercises: [
      {
        q: "Where does \"già\" go in the passato prossimo?",
        opts: ["Before avere", "Between avere and the participle", "At the end of the sentence"],
        why: "Ho già mangiato — the adverb goes inside, exactly as in \"I have already eaten\"."
      },
      { q: "Fill in: \"Non sono ___ stata a Venezia.\" (never)" },
      { q: "Fill in: \"___ ho lavorato, poi sono uscito.\" (first)" },
      {
        q: "\"Com'è andata?\" asks about:",
        opts: ["which way you traveled", "how something went", "how you feel now"]
      },
      {
        q: "Fill in the account.",
        tr: "On Saturday I did the shopping, then I went to the gym, and in the evening we went out with friends."
      },
      { q: "\"I haven't finished yet.\"" },
      { tr: "In the end we got home late." },
      {
        q: "Monday morning at work.",
        setting: "The office kitchen, by the coffee machine.",
        lines: [
          { tr: "Hey! How was your weekend?" },
          { tr: "Say nothing special, you stayed home.", answerTr: "Nothing special, I stayed home." },
          { tr: "I went to the mountains. Gorgeous!" },
          { tr: "Ask who he went with.", answerTr: "Who did you go with?" }
        ]
      },
      { tr: "First I did the shopping, then I rested." },
      { tr: "How did it go? — Well, it was fun." }
    ]
  },
  "lesson:a1-u10-l4": {
    theme: "Review",
    title: "Reviewing the whole level",
    objectives: [
      "pull together everything from A1",
      "check whether you're ready for A2",
      "find your own gaps"
    ],
    theory: [
      {
        h: "What you should be able to do by now",
        list: [
          "introduce yourself, say where you're from, what you do and how old you are",
          "order at a bar and a restaurant, shop, ask a price",
          "talk about your day, the time and your habits",
          "ask for directions and understand the answer",
          "describe a person: looks and personality",
          "say briefly what you did yesterday and over the weekend"
        ]
      },
      {
        h: "The grammar that has to be solid",
        p: "The three conjugations in the present, <em>essere</em>, <em>avere</em>, <em>fare</em>, <em>andare</em>, <em>venire</em>, <em>stare</em>, the modal verbs, definite and indefinite articles, gender and number, adjectives, combined prepositions, reflexive verbs, <em>piacere</em>, <em>c'è / ci sono</em> and the basics of the passato prossimo."
      },
      {
        h: "What's waiting at A2",
        p: "The imperfetto and how it differs from the passato prossimo, the futuro semplice, the conditional, direct and indirect object pronouns, the full imperative, <em>ci</em> and <em>ne</em> in a wider range, and situations while traveling, at the doctor's and at a hotel."
      },
      {
        tip: "If you score under 70% on this review, don't move on. A2 builds directly on these structures, and an A1 gap turns into a wall there."
      }
    ],
    vocab: [
      "to review",
      "exercise",
      "mistake",
      "rule",
      "level",
      "to improve",
      "I'm ready",
      "I can do this"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Definite articles:", items: [, , , , ] },
      {
        q: "Fill in the self-introduction.",
        tr: "My name is Kasia, I'm Polish and I've lived in Bologna for two years. I'm a teacher."
      },
      { q: "\"Mi ___ gli spaghetti.\" (I like spaghetti)" },
      { q: "\"Vado ___ cinema.\" (a + il)" },
      { q: "\"Ieri ___ una pizza.\" (I ate)" },
      { q: "\"Ieri ___ al cinema.\" (I went — a woman)" },
      { tr: "Last night we went to a restaurant with friends." },
      { tr: "I woke up early and had breakfast at a bar." },
      { tr: "My name is Anna, I'm Polish and I've lived in Florence for a year." }
    ]
  },
  "lesson:a1-u10-test": {
    theme: "Exam",
    title: "A1 final exam",
    objectives: ["check that you're ready to move on to A2"],
    theory: [
      {
        p: "Twelve questions from the whole level. You pass at 70%. A score below that means going back to the units where you're making mistakes — not to all of them."
      }
    ],
    exercises: [
      {  },
      { q: "You walk into a shop at 6 p.m.:", opts: ["Buongiorno", "Buonasera", "Buonanotte"] },
      { q: "Articles:", items: [, , , ] },
      { q: "\"Non mi ___ il pesce crudo.\"" },
      { q: "\"Devo ___ presto domani.\" (get up — alzarsi)" },
      { q: "\"___ le tre e mezza.\"" },
      { q: "\"Abito ___ Italia.\"" },
      { q: "\"___ un tavolo libero?\"" },
      { q: "\"È più simpatico ___ bello.\"", opts: ["di", "che", "come"] },
      { q: "\"Ieri ___ al cinema.\" (we went)" },
      {
        q: "Fill it in.",
        tr: "On Saturday I did the shopping, then I went to the gym, and in the evening I went out with friends."
      },
      { tr: "Good evening, I'd like to book a table for two at eight." }
    ]
  }
});
