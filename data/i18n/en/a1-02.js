/* ============================================================
   Learner-language text (en) for data/core/a1-02.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u04": { title: "Clothes and sizes", grammarNote: "adjectives · colors · questo/quello" },
  "lesson:a1-u04-l1": {
    theme: "Clothes and shopping",
    title: "Adjective agreement and colors",
    objectives: [
      "match the adjective ending to the noun",
      "name the colors and know which ones don't inflect",
      "describe an item in a shop window"
    ],
    theory: [
      {
        h: "The adjective follows the noun and agrees with it",
        p: "An Italian adjective usually goes <b>after</b> the noun and takes on its gender and number: <em>una borsa <b>rossa</b></em>, <em>due borse <b>rosse</b></em>. English does the opposite on both counts: \"a red bag\" puts the adjective first and never changes it."
      },
      {
        h: "Two classes of endings",
        list: [
          "<b>four forms</b> (-o / -a / -i / -e): <em>rosso, rossa, rossi, rosse</em>",
          "<b>two forms</b> (-e / -i): <em>verde, verdi</em> — the same form for both genders",
          "<b>no inflection</b>: <em>blu, rosa, viola, beige</em> and loanwords (<em>chic</em>)"
        ]
      },
      {
        trap: "With a mixed-gender group, masculine wins: <em>Marco e Anna sono <b>italiani</b></em>. One woman among a hundred men changes nothing; one man among a hundred women flips the whole group to masculine."
      },
      {
        h: "Colors that used to be nouns",
        p: "<em>Rosa</em> (rose), <em>viola</em> (violet) and <em>arancione</em> (from orange the fruit) come from plant names — which is why <em>rosa</em> and <em>viola</em> don't inflect. <em>Marrone</em> belongs to that group in theory, but Italians also say <em>scarpe marroni</em> and nobody corrects them."
      }
    ],
    grammar: {
      title: "Adjective agreement",
      table: {
        head: ["noun", "-o type", "-e type", "invariable"],
        rows: [
          ["il vestito (m sing.)", "nero", "verde", "blu"],
          ["la gonna (f sing.)", "nera", "verde", "blu"],
          ["i pantaloni (m pl.)", "neri", "verdi", "blu"],
          ["le scarpe (f pl.)", "nere", "verdi", "blu"]
        ]
      },
      examples: [
        { tr: "A white shirt, please." },
        { tr: "These shoes are too tight." },
        { tr: "A blue coat, medium size.", note: "blu doesn't inflect" },
        { tr: "The green pants don't suit me." },
        { tr: "What a nice jacket!" }
      ]
    },
    vocab: [
      "dress; clothing",
      "skirt",
      "pants (always plural)",
      "shirt",
      "T-shirt",
      "jacket",
      "coat",
      "shoes",
      "red",
      "black",
      "white",
      "green (same for both genders)",
      "blue (invariable)",
      "gray"
    ],
    exercises: [
      {
        q: "\"La gonna\" is feminine. How do you write \"black\"?",
        opts: ["nero", "nera", "nere"],
        why: "Feminine singular → nera."
      },
      {
        q: "Which adjective has the same form for both genders?",
        opts: ["rosso", "verde", "grigio"],
        why: "Adjectives in -e have two forms: verde / verdi."
      },
      {
        q: "Fill in: \"Le scarpe ___.\" (black shoes)",
        why: "Scarpe is feminine plural → nere."
      },
      {
        q: "Fill in: \"I pantaloni ___.\" (blue pants)",
        why: "Blu is invariable — never \"blui\"."
      },
      { q: "Fill in the endings.", tr: "A white shirt and two black T-shirts, please." },
      {
        q: "\"Marco e Anna sono ___.\" (Italian)",
        opts: ["italiane", "italiani", "italiano"],
        why: "A mixed-gender group takes the masculine plural."
      },
      { q: "Match the garment with its meaning.", pairs: ["skirt", "coat", "jacket", "shoes"] },
      { tr: "These shoes are too tight." },
      { tr: "A gray jacket please, medium size." },
      { tr: "What a nice white shirt!" }
    ]
  },
  "lesson:a1-u04-l2": {
    theme: "Clothes and shopping",
    title: "Demonstratives",
    objectives: [
      "tell questo from quello",
      "inflect both forms",
      "point out an item in a shop without pointing"
    ],
    theory: [
      {
        h: "Near and far",
        p: "<strong>Questo</strong> is something close to the speaker (\"this one here\"), <strong>quello</strong> is farther away (\"that one\"). Italian has no everyday third degree (the old <em>codesto</em> survives in Tuscany and in officialese)."
      },
      {
        h: "Questo inflects simply",
        p: "<em>questo, questa, questi, queste</em>. Before a vowel it contracts in both speech and writing: <em>quest'anno</em>, <em>quest'estate</em>."
      },
      {
        h: "Quello behaves like an article",
        p: "When it stands <b>before a noun</b>, <em>quello</em> takes forms parallel to <em>il / lo / la / i / gli / le</em>: <em>quel cappotto, quello zaino, quell'amico, quei pantaloni, quegli stivali, quella gonna, quelle scarpe</em>. Standing alone (no noun), it has the ordinary four forms: <em>Prendo quello.</em>"
      },
      {
        contrast: "English \"this / that\" changes only for number — this/these, that/those — and never for what sound comes next. <em>Quello</em> is where the trouble is: treat it as an article, not as an adjective, and the seven forms stop looking arbitrary."
      }
    ],
    grammar: {
      title: "Questo and quello",
      table: {
        head: ["article", "quello + noun", "questo", "example"],
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
        { tr: "How much is this bag?" },
        { tr: "I prefer that coat." },
        { tr: "Those boots are on sale." },
        { tr: "I'll take that one, thanks.", note: "standing alone — ordinary forms" },
        { tr: "This year the style is minimal." }
      ]
    },
    vocab: [
      "size (clothing)",
      "size (shoes)",
      "fitting room",
      "to try on",
      "the sales",
      "discount",
      "shop window",
      "expensive / cheap",
      "tight / loose",
      "can I try it on?",
      "it fits me well",
      "do you have a medium?"
    ],
    dialogue: [
      "Excuse me, can I try on this shirt?",
      "Of course. What size do you wear?",
      "Medium. Do you also have that blue one?",
      "Yes, but only in a large. The fitting room is at the back.",
      "Thanks. This one's a bit tight on me."
    ],
    exercises: [
      {
        q: "Which form is right before \"zaino\"?",
        opts: ["quel zaino", "quello zaino", "quell'zaino"],
        why: "Quello behaves like <i>lo</i>: before z and s+consonant it gives <b>quello</b>."
      },
      {
        q: "Fill in: \"___ scarpe sono in saldo.\" (those shoes)",
        why: "Feminine plural: le → quelle."
      },
      {
        q: "Fill in: \"___ anno vado in Italia.\" (this year)",
        why: "Questo contracts to quest' before a vowel."
      },
      {
        q: "Choose the right form of \"quello\".",
        items: ["coat", "boots", "skirt", "pants", "watch"]
      },
      {
        q: "\"Prendo quello.\" Why not \"quel\"?",
        opts: ["It's a mistake", "Because quello stands alone, with no noun", "Because it's plural"],
        why: "The shortened forms (quel, quei, quegli) exist only in front of a noun."
      },
      { q: "\"How much is this bag?\"" },
      { tr: "Can I try on that jacket?" },
      {
        q: "You're in a clothing store.",
        setting: "A shop downtown, during the sales.",
        lines: [
          { tr: "Good morning, are you looking for anything in particular?" },
          { tr: "Ask whether you can try on this skirt.", answerTr: "Can I try on this skirt?" },
          { tr: "Of course. What size?" },
          { tr: "Say a medium.", answerTr: "A medium, thanks." }
        ]
      },
      { tr: "Those black boots are on sale." },
      { tr: "Excuse me, do you have this shirt in a medium?" }
    ]
  },
  "lesson:a1-u04-l3": {
    theme: "Clothes and shopping",
    title: "Prices, numbers over a hundred, paying",
    objectives: [
      "ask a price and understand the answer",
      "count above a hundred",
      "pay by card or in cash"
    ],
    theory: [
      {
        h: "Numbers over a hundred",
        p: "<em>Cento</em> never changes: <em>duecento, trecento</em>. <em>Mille</em> becomes <em>-mila</em> in the plural: <em>duemila, tremila</em>. Watch the digits, though: Italian writes <em>1.500</em> with a period and <em>2,50</em> with a comma — the opposite of American usage, and it trips people up on price tags."
      },
      {
        h: "Prices are said in shorthand",
        p: "<em>Due e cinquanta</em> = €2.50. The word <em>euro</em> is often dropped, and when it stays it doesn't inflect: <em>trenta euro</em>, never \"euri\"."
      },
      {
        h: "Paying",
        p: "<em>In contanti</em> (cash) or <em>con la carta</em> (by card). Worth knowing: <em>lo scontrino</em> (the receipt) and <em>la ricevuta</em>. In Italy a receipt has legal weight and the seller is required to issue one."
      },
      {
        tip: "<em>Quanto costa?</em> is about one thing, <em>quanto costano?</em> about several. <em>Quant'è?</em> is \"how much altogether?\" at the register."
      }
    ],
    grammar: {
      title: "Numbers and asking the price",
      table: {
        head: ["written", "in Italian", "note"],
        rows: [
          ["100 / 200", "cento / duecento", "cento never inflects"],
          ["1000 / 2000", "mille / duemila", "mille → -mila in the plural"],
          ["1500", "millecinquecento", "written as one word"],
          ["€2.50", "due e cinquanta", "euro is often left out"],
          ["how much is it?", "quanto costa?", "one thing"],
          ["how much are they?", "quanto costano?", "several things"]
        ]
      },
      examples: [
        { tr: "How much is this bag? — Eighty-five euros." },
        { tr: "How much altogether?" },
        { tr: "Can I pay by card?" },
        { tr: "Cash only, sorry." },
        { tr: "Could I have the receipt?" },
        { tr: "There's twenty percent off." }
      ]
    },
    vocab: [
      "how much is it / are they?",
      "how much altogether?",
      "in cash",
      "by card",
      "receipt",
      "change",
      "a hundred / a thousand",
      "percent",
      "that's too expensive",
      "a bargain",
      "price",
      "free"
    ],
    exercises: [
      { q: "What number is \"millecinquecento\"?", opts: ["150", "1500", "15000"] },
      {
        q: "Which form is correct?",
        opts: ["trenta euri", "trenta euro", "trente euro"],
        why: "Euro doesn't inflect in the plural."
      },
      { q: "Write it in digits: \"duemilaventicinque\"" },
      {
        q: "Fill in: \"___ costano queste scarpe?\"",
        why: "Quanto doesn't change here, but the verb does: costano (plural)."
      },
      { q: "\"Can I pay by card?\"" },
      {
        q: "The clerk says \"Sono ventidue e cinquanta\". How much do you pay?",
        opts: ["€22.50", "€2.25", "€225"]
      },
      {
        q: "Complete the exchange at the register.",
        tr: "— How much altogether? — Forty-three euros. — Can I pay by card?"
      },
      { q: "Match the phrases.", pairs: ["receipt", "change", "in cash", "free"] },
      { tr: "That's a hundred and twenty euros, with a ten percent discount." },
      { tr: "How much are those boots in the window?" }
    ]
  },
  "lesson:a1-u04-l4": {
    theme: "Core grammar",
    title: "Quantity and intensity",
    objectives: [
      "tell molto the adverb from molto the adjective",
      "use troppo, poco, tanto, abbastanza",
      "intensify an adjective with -issimo"
    ],
    theory: [
      {
        h: "One word, two roles",
        p: "<strong>Molto</strong> before an adjective or a verb is an <b>adverb</b> and doesn't inflect: <em>molto bella</em>, <em>lavoro molto</em>. Before a noun it's an <b>adjective</b> and matches the ending: <em>molt<b>i</b> amici</em>, <em>molt<b>a</b> gente</em>. The same rule governs <em>poco, troppo, tanto</em>."
      },
      {
        h: "A test that always works",
        p: "Ask the question: \"how much of what?\" → adjective, it inflects. \"how much so?\" → adverb, fixed form. <em>Ho molti libri</em> (how many books) versus <em>Sono molto stanca</em> (how tired)."
      },
      {
        h: "The -issimo superlative",
        p: "Cut the adjective's ending and add <em>-issimo/-issima/-issimi/-issime</em>: <em>bello → bellissimo</em>, <em>caro → carissimo</em>. It's the commonest intensifier, and Italians use it constantly where English would just say \"really\" or \"super\"."
      },
      {
        trap: "<b>Poco</b> means \"little, not much\", while <b>un po' di</b> means \"a bit of\". They aren't the same: <em>ho poco tempo</em> (I'm short on time, a complaint) versus <em>ho un po' di tempo</em> (I have a little time, that's fine)."
      }
    ],
    grammar: {
      title: "Molto, poco, troppo, tanto",
      table: {
        head: ["role", "form", "example"],
        rows: [
          ["adverb (how much so)", "fixed", "È molto caro. / Costa troppo."],
          ["adjective (how much of)", "inflects", "Ho molti amici. / Troppa gente."],
          ["enough", "abbastanza (fixed)", "È abbastanza grande."],
          ["superlative", "-issimo", "carissimo, bellissima"],
          ["too little / too much", "poco / troppo", "Poco sale, troppo pepe."]
        ]
      },
      examples: [
        { tr: "This jacket is very elegant.", note: "adverb — no change" },
        { tr: "There are a lot of people in the shop.", note: "adjective — molte" },
        { tr: "Too expensive, thanks anyway." },
        { tr: "I have little money this month." },
        { tr: "It's absolutely beautiful!" },
        { tr: "Pretty good, thanks." }
      ]
    },
    vocab: [
      "very / a lot",
      "little, not much",
      "a bit",
      "too much / too",
      "so much, plenty",
      "enough, fairly",
      "more / less",
      "gorgeous",
      "very expensive",
      "money (always plural in Italian)",
      "thanks anyway",
      "I'll think about it"
    ],
    exercises: [
      {
        q: "\"Ci sono ___ persone.\" (a lot of people)",
        opts: ["molto", "molte", "molti"],
        why: "Before a noun molto inflects; persone is feminine plural."
      },
      {
        q: "\"Questa borsa è ___ cara.\" (very expensive)",
        opts: ["molta", "molto", "molte"],
        why: "Before an adjective molto is an adverb and doesn't change."
      },
      { q: "Form the superlative: \"bello\" → \"___\"" },
      { q: "Fill in: \"Ho ___ tempo oggi.\" (I have little time)" },
      {
        q: "In which sentences is \"troppo\" an adverb (no inflection)?",
        opts: ["Costa troppo.", "C'è troppa gente.", "Sei troppo gentile.", "Ho troppi impegni."]
      },
      { q: "\"That's too expensive, thanks.\"" },
      {
        q: "Fill in the endings (or a dash where the form doesn't change).",
        tr: "There are lots of shops, but they're very expensive."
      },
      { q: "Match them up.", pairs: ["enough", "too much", "a bit", "little"] },
      { tr: "It's gorgeous, but too expensive for me." },
      { tr: "I'll think about it, thanks anyway." }
    ]
  },
  "lesson:a1-u04-test": {
    theme: "Test",
    title: "Unit 4 test",
    objectives: ["check adjectives, questo/quello, numbers and molto/poco/troppo"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Le scarpe ___.\" (red)" },
      { q: "\"I pantaloni ___.\" (green)" },
      { q: "Choose the form of \"quello\".", items: [, , , ] },
      { q: "What number is \"duemilatrecento\"?", opts: ["230", "2300", "23000"] },
      { q: "\"Sono ___ stanca.\" (very tired)", opts: ["molta", "molto", "molte"] },
      { q: "\"Ci sono ___ persone.\" (a lot of people)" },
      { q: "\"Can I try on this shirt?\"" },
      { tr: "How much are those shoes?" },
      { tr: "This jacket is very expensive." },
      { tr: "Can I pay by card?" }
    ]
  },
  "unit:a1-u05": { title: "An Italian day", grammarNote: "reflexive verbs · telling time · modals" },
  "lesson:a1-u05-l1": {
    theme: "Everyday life",
    title: "Reflexive verbs",
    objectives: [
      "spot a reflexive verb by its -si ending",
      "conjugate svegliarsi, alzarsi, vestirsi",
      "describe your morning"
    ],
    theory: [
      {
        h: "An action aimed back at yourself",
        p: "A reflexive infinitive ends in <strong>-si</strong>: <em>svegliar<b>si</b></em>, <em>alzar<b>si</b></em>. When you conjugate it, <em>-si</em> drops off and a reflexive pronoun goes in front of the verb: <em>mi, ti, si, ci, vi, si</em>."
      },
      {
        h: "The pronoun always comes first",
        p: "<em><b>Mi</b> sveglio alle sette.</em> Never \"sveglio mi\". The exceptions are the infinitive and the imperative, where the pronoun attaches to the end: <em>devo alzar<b>mi</b></em>, <em>svegliati!</em>"
      },
      {
        contrast: "English has reflexive pronouns (myself, yourself) but almost never uses them for daily routine: you say \"I wake up\", not \"I wake myself up\". Italian marks it every single time, so the pronoun feels redundant and gets dropped — and <em>sveglio alle sette</em> means you're waking somebody else."
      },
      {
        h: "Some verbs are reflexive only in Italian",
        p: "<em>Chiamarsi</em> (to be called), <em>ricordarsi</em> (to remember), <em>dimenticarsi</em> (to forget), <em>arrabbiarsi</em> (to get angry), <em>annoiarsi</em> (to get bored). It runs the other way too: English \"to enjoy oneself\" is reflexive, and so is Italian <em>divertirsi</em> — but \"to study\" is plain <em>studiare</em>."
      }
    ],
    grammar: {
      title: "Svegliarsi (to wake up)",
      table: {
        head: ["person", "pronoun", "form", "example"],
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
        { tr: "I get up right after the alarm." },
        { tr: "Do you brush your teeth before breakfast or after?" },
        { tr: "We get dressed in a hurry." },
        { tr: "I have to get up early tomorrow.", note: "the pronoun attaches to the infinitive" },
        { tr: "I don't remember his name." }
      ]
    },
    vocab: [
      "to wake up",
      "to get up",
      "to wash up",
      "to get dressed",
      "to comb your hair",
      "to take a shower",
      "to have breakfast",
      "to leave the house",
      "to rest",
      "to fall asleep",
      "alarm clock",
      "in a hurry"
    ],
    exercises: [
      { why: "Write the whole form including the pronoun, e.g. \"mi sveglio\"." },
      {
        q: "How do you spot a reflexive verb in a dictionary?",
        opts: ["It starts with a vowel", "It ends in -si", "It's stressed on the last syllable"]
      },
      {
        q: "Fill in: \"Noi ___ alle sei.\" (we get up at six — alzarsi)",
        why: "The reflexive pronoun for noi is ci."
      },
      {
        q: "Fill in: \"Devo ___ presto.\" (I have to get up early)",
        hint: "the pronoun attaches to the infinitive",
        why: "After a modal verb the pronoun attaches to the infinitive: alzarmi."
      },
      {
        q: "Which sentence is correct?",
        opts: ["Sveglio mi alle sette.", "Mi sveglio alle sette.", "Sveglio alle sette mi."]
      },
      { q: "\"I get dressed in a hurry.\"" },
      { q: "Describe your morning.", tr: "I wake up at half past six, then I get up and take a shower." },
      { tr: "My sister wakes up late." },
      { tr: "I wake up at seven and get up right away." },
      { tr: "What time do you usually wake up?" }
    ]
  },
  "lesson:a1-u05-l2": {
    theme: "Everyday life",
    title: "Telling time and parts of the day",
    objectives: [
      "give and understand the time",
      "use è and sono correctly",
      "arrange to meet at a specific time"
    ],
    theory: [
      {
        h: "The hours are plural",
        p: "An Italian asks <em>Che ore sono?</em> (\"what hours are they\") and answers <em>Sono le tre</em>. The implied noun is <em>le ore</em>, hence the feminine plural article. The exceptions are one o'clock, noon and midnight, which are singular — <em>è l'una</em>, <em>è mezzogiorno</em>, <em>è mezzanotte</em>."
      },
      {
        h: "Minutes",
        p: "Up to the half hour you add: <em>le tre e dieci</em>. Past the half hour you usually subtract from the next hour: <em>le quattro meno dieci</em> (\"ten to four\"). Common shortcuts: <em>e un quarter</em> is <em>e un quarto</em> (quarter past), <em>e mezza</em> (half past), <em>meno un quarto</em> (quarter to)."
      },
      {
        h: "At what time — with a preposition",
        p: "The question is <em>A che ora?</em>, the answer <em>alle otto</em>, <em>all'una</em>, <em>a mezzogiorno</em>. The preposition <em>a</em> fuses with the article."
      },
      {
        tip: "Timetables, movie listings and offices use the 24-hour clock: <em>alle diciotto e trenta</em> (18:30). In conversation you'd normally say <em>alle sei e mezza di sera</em>. There is no a.m./p.m. — you add <em>di mattina, di pomeriggio, di sera</em> when it matters."
      }
    ],
    grammar: {
      title: "Telling the time",
      table: {
        head: ["clock", "in Italian", "note"],
        rows: [
          ["13:00", "è l'una", "singular"],
          ["12:00", "è mezzogiorno", "noon"],
          ["00:00", "è mezzanotte", "midnight"],
          ["15:00", "sono le tre", "plural"],
          ["15:15", "sono le tre e un quarto", ""],
          ["15:30", "sono le tre e mezza", ""],
          ["15:50", "sono le quattro meno dieci", "subtracting"],
          ["at 20:00", "alle otto", "a + le = alle"]
        ]
      },
      examples: [
        { tr: "What time is it? — Twenty past nine." },
        { tr: "What time does the shop open? — At half past nine." },
        { tr: "The train leaves at quarter past one." },
        { tr: "See you at eight in the evening." },
        { tr: "It's noon, let's go to lunch." }
      ]
    },
    vocab: [
      "what time is it?",
      "at what time?",
      "noon / midnight",
      "quarter past / half past",
      "quarter to",
      "in the morning",
      "in the afternoon",
      "in the evening / at night",
      "early / late",
      "on time",
      "late (running behind)",
      "see you"
    ],
    exercises: [
      {
        q: "Why is it \"è l'una\" and not \"sono l'una\"?",
        opts: ["It's a rule with no reason", "Because \"una\" is singular", "Because it's informal"],
        why: "Every other hour is plural (le due, le tre…) and takes sono."
      },
      { q: "Fill in: \"___ le otto e mezza.\" (it's half past eight)" },
      { q: "Fill in: \"Il film comincia ___ nove.\" (at nine)" },
      {
        q: "How do you say 15:45?",
        opts: ["le tre e quarantacinque", "le quattro meno un quarto", "both are correct"],
        why: "Both work; \"meno un quarto\" sounds more natural in conversation."
      },
      { q: "Match the time with how it's written.", pairs: ["12:00", "14:15", "13:30", "6:50"] },
      { q: "\"What time does the shop open?\"" },
      { q: "Fill it in.", tr: "— What time is it? — Quarter to eleven. — I'm late!" },
      { tr: "See you at eight in the evening." },
      { tr: "The train leaves at 18:45." },
      { tr: "Excuse me, what time is it? — Half past three." }
    ]
  },
  "lesson:a1-u05-l3": {
    theme: "Core grammar",
    title: "Modal verbs",
    objectives: [
      "conjugate potere, volere and dovere",
      "ask permission and express necessity",
      "understand why vorrei is politer than voglio"
    ],
    theory: [
      {
        h: "Three verbs, one construction",
        p: "<strong>Potere</strong> (can), <strong>volere</strong> (to want) and <strong>dovere</strong> (must) combine with an infinitive <b>with no preposition at all</b>: <em>posso entrare</em>, <em>voglio partire</em>, <em>devo lavorare</em>. All three are irregular, but the forms stick fast because you use them constantly."
      },
      {
        h: "Voglio sounds blunt",
        p: "<em>Voglio un caffè</em> isn't grammatically rude, but in a bar it lands like a demand — much as \"I want a coffee\" would in English. Italians say <strong>vorrei</strong>, the conditional of <em>volere</em>. For now learn it as a fixed phrase; the full conjugation comes at A2."
      },
      {
        h: "Pronouns with modals: two positions",
        p: "With a reflexive verb, two versions are equally correct: <em><b>mi</b> devo alzare</em> or <em>devo alzar<b>mi</b></em>. The same freedom applies to object pronouns: <em>ti posso aiutare</em> = <em>posso aiutarti</em>."
      },
      {
        tip: "<em>Dovere</em> isn't only \"must\" — it also means \"to owe\": <em>Ti devo dieci euro</em>, \"I owe you ten euros\"."
      }
    ],
    grammar: {
      title: "Potere, volere, dovere",
      table: {
        head: ["person", "potere", "volere", "dovere"],
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
        { tr: "May I come in?" },
        { tr: "I'd like a coffee.", note: "politer than \"voglio\"" },
        { tr: "I have to go, it's late." },
        { tr: "We can't pay in cash." },
        { tr: "Do you want to come with us?" },
        { tr: "I have to get up early.", note: "both versions are correct" }
      ]
    },
    vocab: [
      "to be able to, can",
      "to want",
      "to have to, must",
      "I would like",
      "may I?",
      "it's forbidden",
      "it's allowed",
      "one has to (impersonal)",
      "to feel like",
      "unfortunately",
      "gladly",
      "maybe; if only"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "You're ordering in a restaurant. Which sounds best?",
        opts: ["Voglio una pizza.", "Vorrei una pizza.", "Devo una pizza."],
        why: "Vorrei is the polite conditional — the standard for ordering."
      },
      { q: "Fill in: \"Noi ___ partire domani.\" (we have to leave tomorrow)" },
      {
        q: "Which sentence is wrong?",
        opts: ["Devo di andare.", "Devo andare.", "Devo andarci."],
        why: "Modal verbs take no preposition before the infinitive."
      },
      { q: "\"Can I pay by card?\"" },
      { q: "Fill it in.", tr: "I can't come tonight, I have to work late." },
      { tr: "Excuse me, can I try on this jacket?" },
      { tr: "I'd like to book a table for two." }
    ]
  },
  "lesson:a1-u05-l4": {
    theme: "Everyday life",
    title: "Frequency and days of the week",
    objectives: [
      "put the frequency adverb in the right place",
      "use the double negative with mai",
      "name the days and talk about your routine"
    ],
    theory: [
      {
        h: "The adverb goes right after the verb",
        p: "<em>Vado <b>sempre</b> in palestra il lunedì.</em> Italian keeps the frequency adverb immediately after the conjugated verb, where English puts it before: \"I always go\". Fronting it in Italian is possible, but it reads as emphasis."
      },
      {
        h: "Mai needs non",
        p: "<strong>Non</strong> vado <strong>mai</strong> al cinema. Italian uses a double negative and it is the rule, not an error — unlike English, where \"I don't never go\" is wrong. The same holds for <em>niente</em>, <em>nessuno</em>, <em>più</em>: <em>non ho più tempo</em>, <em>non conosco nessuno</em>."
      },
      {
        h: "Days of the week",
        p: "They're written in lowercase — another habit to unlearn, since English capitalizes them — and they're masculine except <em>la domenica</em>. Without an article they mean a specific day (<em>lunedì vado a Roma</em>, this coming Monday); with an article they mean a habit (<em>il lunedì vado in palestra</em>, on Mondays)."
      },
      {
        contrast: "English marks that same difference with the plural: \"on Monday\" versus \"on Mondays\". Italian does it with the article alone, and the day stays singular. It's a small thing that flips the meaning of the whole sentence."
      }
    ],
    grammar: {
      title: "Frequency and days of the week",
      table: {
        head: ["adverb", "in English", "example"],
        rows: [
          ["sempre", "always", "Bevo sempre un caffè la mattina."],
          ["di solito", "usually", "Di solito lavoro da casa."],
          ["spesso", "often", "Vado spesso al mercato."],
          ["qualche volta / a volte", "sometimes", "A volte esco a correre."],
          ["raramente", "rarely", "Guardo raramente la TV."],
          ["non… mai", "never", "Non prendo mai il taxi."]
        ]
      },
      examples: [
        { tr: "Monday, Tuesday, Wednesday, Thursday" },
        { tr: "Friday, Saturday, Sunday" },
        { tr: "On Saturdays I sleep in.", note: "with the article = a habit" },
        { tr: "This Saturday I'm going to Florence.", note: "no article = one specific day" },
        { tr: "I never go to bed before midnight." }
      ]
    },
    vocab: [
      "always",
      "usually",
      "often",
      "sometimes",
      "rarely",
      "never",
      "every day",
      "the weekend",
      "Monday",
      "Saturday",
      "Sunday",
      "once a week"
    ],
    exercises: [
      {
        q: "Where does \"spesso\" normally go?",
        opts: ["Before the subject", "Right after the conjugated verb", "Always at the end of the sentence"]
      },
      {
        q: "Fill in: \"___ vado ___ al cinema.\" (I never go to the movies) — write both words separated by a space, in sentence order",
        hint: "double negative",
        why: "Non vado mai — non before the verb, mai right after it."
      },
      {
        q: "\"Il sabato dormo fino a tardi\" means:",
        opts: ["This Saturday I'll sleep in", "On Saturdays I always sleep in", "Last Saturday I slept in"],
        why: "The article in front of a weekday marks a habit."
      },
      { tr: "I usually work from home." },
      { q: "Match them up.", pairs: ["always", "rarely", "sometimes", "every day"] },
      { q: "\"I never take a taxi.\"" },
      {
        q: "Describe your week.",
        tr: "On Mondays I go to the gym, but I never go on the weekend."
      },
      {
        q: "Which sentences are correct?",
        opts: ["Non vado mai al cinema.", "Vado mai al cinema.", "Non ho più tempo.", "Ho più non tempo."]
      },
      { tr: "I usually get up early, but on Sundays I sleep in." },
      { tr: "I often go to the market on Saturday morning." }
    ]
  },
  "lesson:a1-u05-test": {
    theme: "Test",
    title: "Unit 5 test",
    objectives: ["check reflexive verbs, telling time, modals and frequency"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      {  },
      { q: "\"Devo ___ presto.\" (I have to get up early — alzarsi)" },
      { q: "\"___ le due e mezza.\" (it's half past two)" },
      { q: "\"Il treno parte ___ una.\" (at one o'clock)" },
      {  },
      { q: "The politest way to order:", opts: ["Voglio…", "Vorrei…", "Devo…"] },
      {
        q: "\"Non vado mai in palestra\" means:",
        opts: ["I sometimes go", "I never go", "I go every day"]
      },
      { tr: "I usually have breakfast at eight." },
      { tr: "I wake up at half past six every day." },
      { tr: "What time do you usually get up?" }
    ]
  },
  "unit:a1-u06": { title: "Around town", grammarNote: "combined prepositions · andare/venire · directions" },
  "lesson:a1-u06-l1": {
    theme: "The city and finding your way",
    title: "Combined prepositions",
    objectives: [
      "fuse a preposition with an article",
      "describe where something is",
      "avoid the commonest mistake: \"a il\" instead of \"al\""
    ],
    theory: [
      {
        h: "Five prepositions that must fuse",
        p: "When <em>di, a, da, in, su</em> are followed by a definite article, the two words fuse into one. It isn't a stylistic option — <em>a il cinema</em> is simply wrong. The other prepositions (<em>con, per, tra, fra</em>) stay separate."
      },
      {
        h: "The pattern is regular",
        p: "Take the first letter of the preposition and bolt the article on: <em>a + il = al</em>, <em>a + lo = allo</em>, <em>a + la = alla</em>, <em>a + i = ai</em>, <em>a + gli = agli</em>, <em>a + le = alle</em>. <em>Di, da, in</em> and <em>su</em> work exactly the same way."
      },
      {
        trap: "<b>In</b> turns into <b>ne-</b>: <em>in + il = nel</em>, not \"inl\". It's the one form in the whole table you can't predict."
      },
      {
        h: "No article, no fusion",
        p: "<em>Vado a Roma</em> (a city — no article), <em>vado in Italia</em> (a country — no article after in), but <em>vado al mare</em>, <em>vado alla stazione</em>. The fusion only happens when there's actually an article there."
      }
    ],
    grammar: {
      title: "Table of combined prepositions",
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
        { tr: "I'm going to the movies.", note: "a + il" },
        { tr: "The book is on the table.", note: "su + il" },
        { tr: "I live in the old center.", note: "in + il" },
        { tr: "I'm coming back from the station.", note: "da + la" },
        { tr: "The car key.", note: "di + la" },
        { tr: "By train.", note: "con normally stays separate" }
      ]
    },
    vocab: [
      "square",
      "street",
      "the center of town",
      "church",
      "museum",
      "bank",
      "pharmacy",
      "post office",
      "traffic light",
      "intersection",
      "bridge",
      "stop (bus, tram)"
    ],
    exercises: [
      { q: "Fill in: \"Vado ___ cinema.\" (a + il)" },
      { q: "Fill in: \"Il libro è ___ tavolo.\" (su + il)" },
      { q: "Fill in: \"Abito ___ centro.\" (in + il)" },
      {
        q: "Choose the right \"a + article\" form.",
        items: ["the station", "the airport", "the students", "the restaurant", "nine o'clock"]
      },
      {
        q: "Which combination does NOT fuse?",
        opts: ["a + il", "con + il", "in + la"],
        why: "Con normally stays separate; the form \"col\" exists but is optional."
      },
      { q: "Fill in the directions.", tr: "The pharmacy is on the corner, next to the bank, across from the church." },
      { q: "\"I'm coming back from the station.\"" },
      { tr: "The car key is on the table." },
      { tr: "The post office is near the main square." },
      { tr: "Excuse me, where's the bus stop?" }
    ]
  },
  "lesson:a1-u06-l2": {
    theme: "The city and finding your way",
    title: "Going and coming",
    objectives: [
      "conjugate andare and venire",
      "choose a or in before a destination",
      "tell andare from venire"
    ],
    theory: [
      {
        h: "Direction depends on where the listener is",
        p: "<strong>Andare</strong> is movement <b>away from</b> the speaker, <strong>venire</strong> movement <b>toward</b> them or along with them. English works the same way with go and come, so the distinction itself will feel natural — which is worth noticing, because most of this lesson won't."
      },
      {
        h: "A or in — the practical rule",
        list: [
          "<b>a</b>: cities (<em>a Roma</em>), places-as-activities (<em>a scuola, a casa, a letto, al lavoro, al cinema, al mare</em>)",
          "<b>in</b>: countries and regions (<em>in Italia, in Toscana</em>), rooms and institutions (<em>in banca, in ufficio, in farmacia, in centro</em>), means of transport (<em>in treno, in macchina, in bici</em>)",
          "<b>da</b>: to a person (<em>vado dal medico, vado da Marco</em>)"
        ]
      },
      {
        trap: "<em>A piedi</em> (\"on foot\") breaks the transport rule, because you don't ride your feet. Learn it as an exception."
      },
      {
        contrast: "English \"to\" covers all of it: to Rome, to the bank, to the doctor. Italian splits that into three prepositions, and the split doesn't follow any logic you can reason out from English. Don't translate word by word — learn the whole combination as one chunk, the way you learned \"at home\" rather than \"in home\"."
      }
    ],
    grammar: {
      title: "Andare and venire",
      table: {
        head: ["person", "andare", "venire", "example"],
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
        { tr: "I'm going to Rome by train." },
        { tr: "I'm going to Italy in September." },
        { tr: "I'm going to the dentist at three." },
        { tr: "Are you coming to the party? — Yes, gladly." },
        { tr: "Let's walk, it's close." },
        { tr: "Where are you from? — From Poland." }
      ]
    },
    vocab: [
      "to go",
      "to come",
      "on foot",
      "by car",
      "by bus",
      "by bike",
      "by subway",
      "near / far",
      "here / there",
      "together",
      "alone",
      "it takes half an hour"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Someone invites you over. How do you confirm?",
        opts: ["Sì, vado!", "Sì, vengo!", "Sì, andiamo!"],
        why: "Movement toward the listener is venire — exactly as English says \"I'm coming\"."
      },
      { q: "Fill in: \"Vado ___ Italia.\" (to Italy)" },
      { q: "Fill in: \"Vado ___ Milano.\" (to Milan)" },
      { q: "Fill in: \"Vado ___ medico.\" (to the doctor)" },
      {
        q: "Which combinations are correct?",
        opts: ["in treno", "a treno", "a piedi", "in piedi", "in banca"],
        why: "\"In piedi\" exists, but it means \"standing up\", not \"on foot\"."
      },
      { tr: "Let's walk, it's close." },
      { tr: "I'm coming with you, but we're taking the subway." },
      { tr: "I walk downtown, it takes half an hour." }
    ]
  },
  "lesson:a1-u06-l3": {
    theme: "The city and finding your way",
    title: "Asking for directions",
    objectives: [
      "ask the way and understand the answer",
      "use the tu imperative",
      "describe a location with prepositions"
    ],
    theory: [
      {
        h: "The tu imperative",
        p: "Directions are given in the imperative. For <b>-are</b> verbs the <em>tu</em> form is identical to the third person present: <em>gira!</em>, <em>continua!</em> For <b>-ere</b> and <b>-ire</b> it's identical to the second person: <em>prendi!</em>, <em>segui!</em>"
      },
      {
        h: "Four short forms",
        p: "<em>andare → va'</em>, <em>fare → fa'</em>, <em>dare → da'</em>, <em>stare → sta'</em>, <em>dire → di'</em>. The apostrophe stands in for the clipped letters. In practice you'll also hear the full <em>vai</em> and <em>fai</em> — both are in use."
      },
      {
        h: "Formally: with Lei",
        p: "To a stranger the directions sound different: <em>giri a destra</em>, <em>prenda la prima a sinistra</em>, <em>vada dritto</em>. These are subjunctive forms; for now, memorize them as set phrases."
      },
      {
        tip: "The single most useful sentence when you don't follow: <em>Può ripetere più lentamente, per favore?</em> Italians speak fast and almost nobody slows down unless you ask."
      }
    ],
    grammar: {
      title: "Giving directions",
      table: {
        head: ["informal (tu)", "formal (Lei)", "in English"],
        rows: [
          ["vai dritto", "vada dritto", "go straight ahead"],
          ["gira a destra", "giri a destra", "turn right"],
          ["gira a sinistra", "giri a sinistra", "turn left"],
          ["prendi la prima strada", "prenda la prima strada", "take the first street"],
          ["attraversa la piazza", "attraversi la piazza", "cross the square"],
          ["continua fino al semaforo", "continui fino al semaforo", "keep going to the traffic light"]
        ]
      },
      examples: [
        { tr: "Excuse me, where's the station?" },
        { tr: "It's right nearby, two steps from here." },
        { tr: "Go straight and take the second right." },
        { tr: "It's across from the bank, next to the pharmacy." },
        { tr: "How far on foot? — Ten minutes." },
        { tr: "I'm lost, can you help me?" }
      ]
    },
    vocab: [
      "where is…?",
      "right / left",
      "straight ahead",
      "across from",
      "next to",
      "near / far from",
      "behind / in front of",
      "between… and…",
      "to turn",
      "to cross",
      "I'm lost",
      "two steps from here"
    ],
    exercises: [
      { q: "\"Gira a sinistra\" means:", opts: ["Turn right", "Turn left", "Go straight"] },
      { q: "The formal version of \"vai dritto\" is:", opts: ["va dritto", "vada dritto", "andare dritto"] },
      { q: "Fill in: \"___ la stazione?\" (where's the station)" },
      { q: "Match the prepositions of place.", pairs: ["across from", "next to", "behind", "between… and…"] },
      {
        q: "Fill in the directions.",
        tr: "Go straight to the traffic light, then turn right. The bank is across from the pharmacy."
      },
      { q: "\"Excuse me, where's the pharmacy?\"" },
      {
        q: "You're lost downtown.",
        setting: "A narrow street; the passerby looks like a local.",
        lines: [
          { tr: "Stop them politely and ask about the station.", answerTr: "Excuse me, where's the station?" },
          { tr: "So: go straight, then take the second right." },
          {
            tr: "Say you didn't follow, and ask them to repeat.",
            answerTr: "I don't understand, could you say it more slowly?"
          },
          { tr: "Sure. Straight ahead… then second right. Ten minutes on foot." },
          { tr: "Thank them.", answerTr: "Thank you so much, that's very kind!" }
        ]
      },
      { tr: "The museum is between the square and the bridge." },
      { tr: "Go straight and cross the square." },
      { tr: "I'm lost, can you help me?" }
    ]
  },
  "lesson:a1-u06-l4": {
    theme: "The city and finding your way",
    title: "Describing a place",
    objectives: [
      "say what there is in a town or an apartment",
      "use c'è / ci sono in the negative and in questions",
      "combine it with prepositions of place"
    ],
    theory: [
      {
        h: "Existence versus quality",
        p: "<strong>C'è</strong> and <strong>ci sono</strong> say that something <b>is somewhere</b>. <em>Essere</em> says <b>what</b> something is like. <em>C'è un museo in centro</em> (there's a museum) versus <em>Il museo è bellissimo</em> (the museum is beautiful). English keeps them apart the same way, with \"there is\" versus \"it is\"."
      },
      {
        h: "Negative and question",
        p: "<em>Non c'è</em> / <em>non ci sono</em>; the question is intonation only: <em>C'è un bagno qui?</em> Short answers are very common: <em>Sì, c'è.</em> / <em>No, non c'è.</em>"
      },
      {
        h: "Ci isn't only \"there\"",
        p: "The same particle <em>ci</em> turns up all over: <em>ci vuole</em> (it takes), <em>ci metto</em> (it takes me), <em>ci vado</em> (I'm going there). For now just learn to recognize it in these phrases; the full explanation waits at B1."
      },
      {
        tip: "In restaurants and bars, two phrases carry you a long way: <em>C'è il bagno?</em> and <em>Non c'è il wifi?</em> They work literally everywhere."
      }
    ],
    grammar: {
      title: "C'è / ci sono",
      table: {
        head: ["form", "use", "example"],
        rows: [
          ["c'è", "one thing", "C'è una farmacia qui vicino."],
          ["ci sono", "several things", "Ci sono due farmacie."],
          ["non c'è", "negative sing.", "Non c'è il wifi."],
          ["non ci sono", "negative pl.", "Non ci sono tavoli liberi."],
          ["c'è…?", "question", "C'è un bancomat qui?"],
          ["quanto c'è?", "distance", "Quanto c'è da qui al centro?"]
        ]
      },
      examples: [
        { tr: "In my neighborhood there's a market every Saturday." },
        { tr: "There are a lot of tourists this time of year." },
        { tr: "There's nobody at the front desk." },
        { tr: "Is there a restroom? — Yes, at the back on the right." },
        { tr: "How far is it from here to the center?" }
      ]
    },
    vocab: [
      "neighborhood",
      "bathroom, restroom",
      "ATM",
      "supermarket",
      "parking lot",
      "park",
      "hospital",
      "library",
      "nobody",
      "something",
      "around here",
      "at the back, at the end"
    ],
    exercises: [
      { q: "Fill in: \"___ un bancomat qui vicino?\"" },
      { q: "Fill in: \"___ due farmacie in questa via.\"" },
      {
        q: "Which sentence describes a quality rather than existence?",
        opts: ["C'è un museo in centro.", "Il museo è molto grande.", "Ci sono tre musei."]
      },
      { q: "Make it negative: \"C'è il wifi.\" → \"___ il wifi.\"" },
      { q: "Describe your neighborhood.", tr: "In my neighborhood there's a park, but there are no supermarkets." },
      { q: "\"There's nobody at the front desk.\"" },
      { q: "Match them up.", pairs: ["parking lot", "hospital", "library", "neighborhood"] },
      { tr: "Is there a pharmacy around here?" },
      { tr: "In the neighborhood there are two parks and a library." },
      { tr: "Excuse me, is there a restroom? — Yes, at the back on the right." }
    ]
  },
  "lesson:a1-u06-test": {
    theme: "Test",
    title: "Unit 6 test",
    objectives: ["check combined prepositions, andare/venire, directions and c'è/ci sono"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "a + article:", items: [, , , ] },
      { q: "\"Il libro è ___ tavolo.\" (su + il)" },
      { q: "\"Abito ___ centro.\" (in + il)" },
      {  },
      { q: "\"Vado ___ Italia.\"" },
      { q: "\"Vado ___ dentista.\"" },
      { q: "The formal version of \"gira a destra\":", opts: ["giri a destra", "gira a destra", "girare a destra"] },
      { q: "\"___ tavoli liberi?\" (are there free tables?)" },
      { tr: "Go straight, the bank is across from the church." },
      { tr: "Excuse me, where's the bus stop?" }
    ]
  },
  "unit:a1-u07": { title: "At the table", grammarNote: "ordering · ne · the shape of an Italian meal" },
  "lesson:a1-u07-l1": {
    theme: "Restaurant",
    title: "Booking and being seated",
    objectives: [
      "book a table and walk into a restaurant",
      "understand the server's questions",
      "ask for the menu and for a table outside"
    ],
    theory: [
      {
        h: "The order of a meal is fixed",
        p: "An Italian restaurant runs in a set sequence: <em>antipasto</em> (starter), <em>primo</em> (pasta, rice or soup), <em>secondo</em> (meat or fish), <em>contorno</em> (side dish, ordered separately!), <em>dolce</em>, <em>caffè</em>. Nobody expects you to order all of it — but the server will ask in that order."
      },
      {
        h: "Contorno is its own item",
        p: "Vegetables and fries are <b>not</b> included with the main course, they're a separate order. This is the commonest surprise for Americans: the <em>secondo</em> arrives alone on the plate, with nothing beside it."
      },
      {
        h: "Coperto and servizio",
        p: "<em>Il coperto</em> (€2-4) is a cover charge for the setting, bread and service — it's legal and it's printed on the menu. A tip is not expected the way it is in the US: you round up the bill, or leave a few euros if the service was good. Leaving 20% will simply confuse people."
      },
      {
        tip: "You have to ask for <em>il conto, per favore</em> yourself. The server won't bring the check unprompted — that would read as pushing you out the door."
      }
    ],
    grammar: {
      title: "Phrases at the table",
      table: {
        head: ["situation", "in Italian", "in English"],
        rows: [
          ["booking", "Vorrei prenotare un tavolo per due.", "I'd like to book a table for two."],
          ["no booking", "C'è un tavolo libero?", "Is there a free table?"],
          ["outside", "Possiamo sederci fuori?", "Can we sit outside?"],
          ["menu", "Il menù, per favore.", "The menu, please."],
          ["ordering", "Per me una carbonara.", "Carbonara for me."],
          ["the check", "Il conto, per favore.", "The check, please."]
        ]
      },
      examples: [
        { tr: "Good evening, do you have a reservation?" },
        { tr: "No, there are two of us. Is there room?" },
        { tr: "Inside or outside?" },
        { tr: "What do you recommend?" },
        { tr: "I'm allergic to nuts." },
        { tr: "Everything was excellent, compliments." }
      ]
    },
    vocab: [
      "to book",
      "table",
      "menu",
      "starter",
      "first course",
      "second course",
      "side dish (ordered separately!)",
      "dessert",
      "the check",
      "cover charge",
      "there are two of us",
      "what do you recommend?"
    ],
    dialogue: [
      "Good evening, do you have a reservation?",
      "No, there are two of us. Is there a free table?",
      "Inside or outside?",
      "Outside, if possible. Thank you.",
      "Of course, have a seat. Here's the menu."
    ],
    exercises: [
      {
        q: "What is \"il contorno\"?",
        opts: ["A dessert", "A vegetable side, ordered separately", "The cover charge"]
      },
      { q: "What does \"il coperto\" mean?", opts: ["A meat dish", "A cover charge for the setting and bread", "A tip"] },
      { q: "Fill in: \"Vorrei ___ un tavolo per due.\"" },
      { q: "\"The check, please.\"" },
      {
        q: "Put the meal in order — match the name with the description.",
        pairs: ["starter", "pasta or soup", "meat or fish", "dessert"]
      },
      { tr: "No, there are two of us. Is there a free table?" },
      {
        q: "You walk into a restaurant without a reservation.",
        setting: "Friday, 8:30 p.m., a small trattoria.",
        lines: [
          { tr: "Good evening! Do you have a reservation?" },
          {
            tr: "Say you don't, and ask for a free table for two.",
            answerTr: "No, is there a table for two?"
          },
          { tr: "Yes, but only inside. Is that all right?" },
          { tr: "Agree and ask for the menu.", answerTr: "That's fine, the menu please." }
        ]
      },
      { tr: "I'd like to book a table for four at eight." },
      { tr: "Good evening, there are two of us. Is there room outside?" }
    ]
  },
  "lesson:a1-u07-l2": {
    theme: "Restaurant",
    title: "Ordering a dish",
    objectives: ["order a specific dish and a drink", "ask what's in a dish", "declare an allergy or a diet"],
    theory: [
      {
        h: "Three ways to order",
        p: "<em>Per me una carbonara</em> (for me…), <em>Prendo una carbonara</em> (I'll have…), <em>Vorrei una carbonara</em> (I'd like…). All three are normal; <em>vorrei</em> is the politest, <em>prendo</em> the most natural."
      },
      {
        h: "Asking what's in it",
        p: "<em>Cosa c'è dentro?</em> (\"what's in it?\"), <em>Contiene glutine?</em>, <em>È piccante?</em>, <em>È senza lattosio?</em> Restaurants are legally required to declare allergens, so the question surprises nobody."
      },
      {
        h: "Water: the question you can't avoid",
        p: "<em>Naturale o frizzante?</em> — still or sparkling. Tap water (<em>acqua del rubinetto</em>) is sometimes available, but plenty of places simply don't serve it, and free ice water is not a thing."
      },
      {
        tip: "Coffee comes <b>after</b> dessert, never during the meal, and never as a cappuccino. <em>Un caffè</em> after lunch is part of the ritual, not something you drink with your food."
      }
    ],
    grammar: {
      title: "Ordering and asking about a dish",
      table: {
        head: ["function", "phrase", "in English"],
        rows: [
          ["ordering", "Per me / Prendo / Vorrei…", "For me / I'll have / I'd like…"],
          ["a drink", "Da bere, una bottiglia d'acqua.", "To drink, a bottle of water."],
          ["what's in it", "Cosa c'è dentro?", "What's in it?"],
          ["allergy", "Sono allergico/a a…", "I'm allergic to…"],
          ["diet", "Sono vegetariano/a.", "I'm vegetarian."],
          ["without", "Senza cipolla, per favore.", "No onion, please."]
        ]
      },
      examples: [
        { tr: "Carbonara for me, and a mixed salad." },
        { tr: "To drink? — Still water, thanks." },
        { tr: "What's in the amatriciana?" },
        { tr: "I'm allergic to shellfish." },
        { tr: "Is this dish gluten-free?" },
        { tr: "A coffee at the end, thanks." }
      ]
    },
    vocab: [
      "pasta",
      "meat / fish",
      "salad",
      "vegetables",
      "still / sparkling water",
      "house wine",
      "gluten-free",
      "vegetarian / vegan",
      "I'm allergic to…",
      "spicy",
      "rare / well done",
      "to drink"
    ],
    culture: {
      title: "Through Italian eyes: what not to order",
      text: "<p><b>Spaghetti bolognese</b> does not exist on an Italian menu. In Bologna you eat <i>tagliatelle al ragù</i>, and spaghetti with that sauce is a foreign invention.</p><p><b>Fettuccine Alfredo</b> is an American dish. <b>Cheese on fish</b> counts as a minor offense, and asking for parmesan with seafood will get you a polite but unmistakable reaction.</p><p><b>Pineapple on pizza</b> does exist in some tourist pizzerias. It's a choice you can make — but make it knowingly.</p>"
    },
    exercises: [
      {
        q: "The server asks \"Naturale o frizzante?\". What about?",
        opts: ["The type of pasta", "The water: still or sparkling", "How you want it cooked"]
      },
      { q: "Fill in: \"Sono ___ ai frutti di mare.\" (allergic to shellfish, a woman speaking)" },
      { q: "\"Carbonara for me, please.\"" },
      {
        q: "When do Italians drink coffee with a meal?",
        opts: ["During the main course", "After dessert", "Instead of water"]
      },
      { q: "Match them up.", pairs: ["gluten-free", "spicy", "well done", "to drink"] },
      {
        q: "Fill in the order.",
        tr: "For me, pasta with tomato, no onion. To drink, still water."
      },
      { tr: "What's in this dish?" },
      {
        q: "The server takes your order.",
        setting: "A trattoria, a table by the window.",
        lines: [
          { tr: "So what will you have?" },
          { tr: "Order the cacio e pepe.", answerTr: "Cacio e pepe for me." },
          { tr: "Very good. And to drink?" },
          { tr: "Ask for a bottle of still water.", answerTr: "A bottle of still water." },
          { tr: "Perfect. A side dish?" },
          { tr: "Decline politely.", answerTr: "No thanks, that's fine as it is." }
        ]
      },
      { tr: "I'm vegetarian, does this dish contain meat?" },
      { tr: "I'll have the cacio e pepe. Sparkling water to drink." }
    ]
  },
  "lesson:a1-u07-l3": {
    theme: "Core grammar",
    title: "The particle ne — first encounter",
    objectives: [
      "replace a repeated noun with ne",
      "answer a question about quantity",
      "recognize ne in everyday phrases"
    ],
    theory: [
      {
        h: "Ne stands for part of a whole",
        p: "When you're talking about <b>how much</b> of something already mentioned, repeating the noun sounds heavy. <em>Quante mele vuoi? — <b>Ne</b> voglio tre.</em> Here <em>ne</em> means \"of them\". English does have this — \"I want three <b>of them</b>\" — but it's optional there and obligatory here."
      },
      {
        h: "Where it goes",
        p: "Before the conjugated verb, exactly like the pronouns: <em>ne prendo due</em>, <em>non ne voglio</em>. With an infinitive it attaches to the end: <em>vorrei prender<b>ne</b> due</em>."
      },
      {
        h: "Ne also replaces \"di + something\"",
        p: "<em>Parliamo del progetto? — Sì, <b>ne</b> parliamo domani.</em> (\"We'll talk about it tomorrow.\") We'll develop this at B1; for now it's enough to recognize it."
      },
      {
        tip: "Very common phrases with <em>ne</em>: <em>Non ne so nulla</em> (I know nothing about it), <em>Che ne pensi?</em> (what do you think?), <em>Me ne vado</em> (I'm off)."
      }
    ],
    grammar: {
      title: "Ne in quantity expressions",
      table: {
        head: ["question", "answer with ne", "in English"],
        rows: [
          ["Quante mele vuoi?", "Ne voglio tre.", "I want three."],
          ["Prendi il vino?", "Ne prendo un bicchiere.", "I'll have a glass."],
          ["Hai fratelli?", "Sì, ne ho due.", "Yes, I have two."],
          ["Vuoi ancora pasta?", "No, grazie, non ne voglio più.", "No thanks, I don't want any more."],
          ["Che ne pensi?", "—", "What do you think?"]
        ]
      },
      examples: [
        { tr: "How many coffees do you drink a day? — I drink three." },
        { tr: "Do you want some bread? — Yes, I'll take a bit." },
        { tr: "Do you have children? — I have one daughter." },
        { tr: "I know nothing about it." },
        { tr: "I'd like to take two.", note: "with an infinitive, ne attaches" }
      ]
    },
    vocab: [
      "of it, of them, about it (particle)",
      "how many (m / f)",
      "more, still",
      "another one",
      "a piece",
      "a slice",
      "a glass",
      "a portion",
      "that's enough",
      "what do you think?",
      "I know nothing about it",
      "I'm off"
    ],
    exercises: [
      {
        q: "\"Quante birre prendi? — Ne prendo due.\" What does \"ne\" replace?",
        opts: ["You", "\"birre\" — the thing being discussed", "Nothing, it's decorative"]
      },
      { q: "Answer: \"Hai fratelli? — Sì, ___ ho due.\"" },
      { q: "Fill in: \"Vuoi del pane? — Sì, ___ prendo un po'.\"" },
      {
        q: "Where does \"ne\" go with an infinitive?",
        opts: ["Before: \"ne prendere\"", "Attached to the end: \"prenderne\"", "At the end of the sentence"]
      },
      { q: "\"How many coffees do you drink a day? — I drink three.\"" },
      {
        q: "Match the phrase with its meaning.",
        pairs: ["what do you think?", "I know nothing about it", "I'm off", "I'll take two"]
      },
      {
        q: "Fill in the conversation.",
        tr: "— Do you want more wine? — No thanks, I don't want any more. — And you? — Yes, I'll have another glass."
      },
      { tr: "I'd like to take two." },
      { tr: "How many slices of cake do you want? — I want one, thanks." },
      { tr: "Do you have siblings? — Yes, I have two brothers." }
    ]
  },
  "lesson:a1-u07-l4": {
    theme: "Restaurant",
    title: "Paying and leaving",
    objectives: [
      "ask for the check and pay",
      "split the check between people",
      "say what you thought of the meal"
    ],
    theory: [
      {
        h: "You have to ask for the check",
        p: "The server won't bring it without being asked — in Italian restaurant culture that would be rushing the guest. The standard line is <em>Il conto, per favore</em> or <em>Possiamo avere il conto?</em> The air-signature gesture works too."
      },
      {
        h: "Splitting the check",
        p: "<strong>Alla romana</strong> means \"split evenly, everyone pays the same\". <em>Paghiamo alla romana</em> is the usual formula. If you want separate checks: <em>Conti separati, per favore</em> — possible, but often a problem in small places, and asking each person to pay for exactly what they ordered reads as slightly odd."
      },
      {
        h: "Saying what you thought",
        p: "<em>Era tutto buonissimo</em>, <em>Complimenti al cuoco</em>, <em>Squisito</em>. Italians praise food directly and expect the same back — saying nothing after a good meal comes across as cold."
      },
      {
        tip: "<em>Offro io</em> (\"it's on me\") is a sentence worth fighting over. The guest's refusal is part of the ritual, but whoever did the inviting usually wins."
      }
    ],
    grammar: {
      title: "The check and goodbyes",
      table: {
        head: ["situation", "in Italian", "in English"],
        rows: [
          ["asking", "Il conto, per favore.", "The check, please."],
          ["split evenly", "Paghiamo alla romana.", "We'll split it evenly."],
          ["separately", "Conti separati, per favore.", "Separate checks, please."],
          ["it's on me", "Offro io.", "It's on me."],
          ["card", "Si può pagare con la carta?", "Can we pay by card?"],
          ["praise", "Era tutto buonissimo!", "Everything was excellent!"]
        ]
      },
      examples: [
        { tr: "Could we have the check?" },
        { tr: "The cover charge is two euros per person." },
        { tr: "Unfortunately the card reader isn't working." },
        { tr: "Keep the change." },
        { tr: "Compliments to the chef, excellent!" },
        { tr: "Have a good evening!" }
      ]
    },
    vocab: [
      "the check",
      "split evenly",
      "separate checks",
      "it's on me",
      "tip",
      "card reader",
      "change",
      "excellent",
      "compliments",
      "everything was excellent",
      "have a good evening",
      "we'll be back"
    ],
    exercises: [
      {
        q: "What does \"pagare alla romana\" mean?",
        opts: ["To pay in cash", "To split the check evenly", "To pay for everyone"]
      },
      {
        q: "Why doesn't the server bring the check unasked?",
        opts: ["They forget", "Because it would be rushing the guest", "Because it's forbidden"]
      },
      { q: "\"Could we have the check?\"" },
      { q: "Fill in: \"___ io!\" (it's on me)" },
      { q: "Match them up.", pairs: ["tip", "change", "excellent", "separate checks"] },
      {
        q: "Fill in the end of the dinner.",
        tr: "— Everything was excellent, compliments! — Thank you! — The check, please. Can we pay by card?"
      },
      { tr: "We'll split it evenly, thanks." },
      {
        q: "End of dinner.",
        setting: "Plates cleared, the server passing by.",
        lines: [
          { tr: "Ask for the check.", answerTr: "The check, please." },
          { tr: "Right away. Was everything all right this evening?" },
          { tr: "Praise the food.", answerTr: "Everything was excellent, compliments!" },
          { tr: "Thank you very much! That's forty-six euros." },
          { tr: "Ask whether you can pay by card.", answerTr: "Can we pay by card?" }
        ]
      },
      { tr: "The check is forty-six euros, including the cover charge." },
      { tr: "Everything was excellent, compliments to the chef!" }
    ]
  },
  "lesson:a1-u07-test": {
    theme: "Test",
    title: "Unit 7 test",
    objectives: ["check restaurant vocabulary, ordering and the particle ne"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Il contorno\" is:", opts: ["dessert", "a vegetable side", "the cover charge"] },
      { q: "\"Il coperto\" is:", opts: ["a meat dish", "the cover charge", "a tip"] },
      { q: "\"Vorrei ___ un tavolo per due.\"" },
      { q: "\"Hai fratelli? — Sì, ___ ho due.\"" },
      { q: "\"Sono ___ ai frutti di mare.\" (a woman speaking)" },
      { q: "\"The check, please.\"" },
      { q: "Match them up.", pairs: ["split evenly", "it's on me", "excellent", "to drink"] },
      { tr: "Carbonara for me, no onion." },
      { tr: "To drink we'll have a bottle of still water." },
      { tr: "Could we have the check?" }
    ]
  }
});
