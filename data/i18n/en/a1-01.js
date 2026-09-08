/* ============================================================
   Learner-language text (en) for data/core/a1-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a1-u01": { title: "The coffee ritual", grammarNote: "essere · gender and number · articles" },
  "lesson:a1-u01-l1": {
    theme: "Everyday life",
    title: "Greetings and your first order",
    objectives: [
      "greet people and say goodbye at the right time of day",
      "order coffee the way Italians do",
      "conjugate essere in the present tense"
    ],
    theory: [
      {
        h: "The greeting depends on the clock, not on your mood",
        p: "Italian greetings split the day in two. <strong>Buongiorno</strong> runs from morning until early afternoon. Then, somewhere between 2 and 5 p.m. (the line is fuzzy and shifts by region), you switch to <strong>buonasera</strong> — and you use it walking into a bar at 6 p.m., which is far earlier than English would say \"good evening\". <strong>Buonanotte</strong> is not a greeting at all: it is what you say on your way to bed."
      },
      {
        h: "Ciao isn't always the safe choice",
        p: "<strong>Ciao</strong> means both \"hi\" and \"bye\", but you use it only with people you'd address as <em>tu</em>: friends, people your own age, family, the young barista. To a waiter in his fifties, to a clerk, to a shop owner you're meeting for the first time — <strong>buongiorno</strong>. Walking into a pharmacy with \"ciao\" lands about like \"hey, what's up\" at a bank counter."
      },
      {
        contrast: "English also splits the day, so this feels familiar — and that's the trap. The boundaries are in different places: <em>buonasera</em> starts in the middle of the afternoon, not at dusk, and <em>buonanotte</em> is never a way to greet someone. Saying \"buonanotte\" as you walk in is the classic English-speaker slip."
      },
      {
        h: "Essere — the verb you can't build a sentence without",
        p: "<strong>Essere</strong> means \"to be\". Its forms look nothing like the infinitive (<em>sono</em>, <em>sei</em>, <em>è</em>…), so there is no rule to derive them from — you simply have to know them. The good news: you'll repeat them so often they'll settle in on their own."
      },
      {
        tip: "Subject pronouns (io, tu, lui…) are normally left out, because the verb ending already says who's doing what. <em>Sono americana</em> is enough; <em>io sono americana</em> adds emphasis: \"<b>I</b> am American (and you're not)\"."
      }
    ],
    grammar: {
      title: "Essere (to be) — present tense",
      note: "Watch the accent on <b>è</b> — without it, <em>e</em> means \"and\". Two different words.",
      table: {
        head: ["person", "form", "in English"],
        rows: [
          ["io", "sono", "I am"],
          ["tu", "sei", "you are (informal)"],
          ["lui / lei / Lei", "è", "he / she is; you are (formal)"],
          ["noi", "siamo", "we are"],
          ["voi", "siete", "you are (plural)"],
          ["loro", "sono", "they are"]
        ]
      },
      examples: [
        {
          tr: "Good morning, a coffee please.",
          note: "\"un caffè\" means an espresso — no need to specify"
        },
        { tr: "I'm Anna, nice to meet you." },
        { tr: "Are you from Rome?" },
        { tr: "The coffee is hot." },
        { tr: "We're late." },
        { tr: "They're at the bar." }
      ]
    },
    vocab: [
      "good morning / good day (until early afternoon)",
      "good evening (from about 4-5 p.m.)",
      "good night (only when leaving)",
      "hi / bye (informal)",
      "goodbye (formal)",
      "please (when asking for something)",
      "thank you",
      "you're welcome / don't mention it",
      "espresso",
      "cappuccino",
      "croissant",
      "bar, café",
      "nice to meet you",
      "excuse me (formal)"
    ],
    dialogue: [
      "Good morning! What can I get you?",
      "Good morning. A coffee and a croissant, please.",
      "Right away. That's two fifty.",
      "Here you go. Thanks!",
      "You're welcome, have a good day!"
    ],
    culture: {
      title: "Through Italian eyes: coffee has rules",
      text: "<p>In an Italian bar you drink your coffee <b>standing at the counter</b> (al banco) and it takes three minutes. A table costs extra, sometimes double — that isn't a scam, it's two different services on the price list.</p><p><b>Cappuccino after eleven</b> marks you as a tourist: milk is considered heavy and belongs with breakfast. After lunch you order <i>un caffè</i>, or at most <i>un macchiato</i> — an espresso with a drop of milk.</p><p>You usually pay <b>after</b> drinking, unless the bar has a register by the door — then it's <i>lo scontrino</i> (the receipt) first, coffee second.</p>"
    },
    exercises: [
      {
        q: "You walk into a bar at 9:30 in the morning. What do you say?",
        opts: ["Buonasera", "Buongiorno", "Buonanotte"],
        why: "Buongiorno covers morning to early afternoon. Buonanotte is strictly a goodbye before bed."
      },
      {
        q: "The waiter is about sixty and you've never met him. Which greeting fits?",
        opts: ["Ciao!", "Buongiorno!", "Buonanotte!"],
        why: "Save \"ciao\" for people you'd call by first name. To a stranger in a bar — buongiorno."
      },
      {
        tr: "The whole conjugation — no peeking.",
        why: "Essere is irregular in every person. It's one of the two conjugations you genuinely have to memorize."
      },
      {
        q: "Fill in: \"Anna e Marco ___ italiani.\" (Anna and Marco are Italian.)",
        hint: "third person plural",
        why: "Loro sono. Note that \"sono\" serves both <b>io</b> and <b>loro</b> — context tells you which."
      },
      {
        q: "Translate: \"I'm from Poland.\"",
        hint: "essere + da + country",
        why: "Sono dalla Polonia. Country names take an article: la Polonia → dalla Polonia."
      },
      {
        tr: "A coffee and a croissant, please.",
        why: "Italian has no separate word for \"please\" as a verb — you just say what you want and add <i>per favore</i>."
      },
      {
        q: "Match each phrase with its meaning.",
        pairs: ["thank you", "you're welcome", "excuse me (formal)", "goodbye"]
      },
      {
        tr: "Good evening, a cappuccino please.",
        why: "Mind the double <b>cc</b> and <b>pp</b> — in Italian you hold them audibly longer than single ones."
      },
      {
        tr: "Good morning, a coffee please.",
        why: "\"Caffè\" is stressed on the last syllable: kaf-FEH, not KA-feh."
      }
    ]
  },
  "lesson:a1-u01-l2": {
    theme: "Core grammar",
    title: "Noun gender",
    objectives: [
      "recognize a noun's gender from its ending",
      "form the plural following -o/-i, -a/-e, -e/-i",
      "handle invariable nouns like il bar and la città"
    ],
    theory: [
      {
        h: "Two genders, not three",
        p: "Italian has only masculine and feminine — there is no neuter. Every noun belongs to one of them, objects included: <em>il tavolo</em> (table) is masculine, <em>la sedia</em> (chair) feminine. Gender is not a matter of logic, it's a matter of the shape of the word."
      },
      {
        h: "Three patterns that cover most words",
        list: [
          "ending in <b>-o</b> → masculine, plural <b>-i</b>: <em>il libro → i libri</em>",
          "ending in <b>-a</b> → feminine, plural <b>-e</b>: <em>la casa → le case</em>",
          "ending in <b>-e</b> → masculine <i>or</i> feminine, plural always <b>-i</b>: <em>il fiore → i fiori</em>, <em>la chiave → le chiavi</em>"
        ]
      },
      {
        trap: "Nouns in <b>-e</b> are the one group where you have to memorize the gender along with the word. Always learn them with the article: not \"fiore\", but <b>il fiore</b>."
      },
      {
        h: "Words that never change",
        p: "Nouns ending in a stressed vowel (<em>la città</em>, <em>il caffè</em>) and loanwords (<em>il bar</em>, <em>lo sport</em>, <em>il film</em>) look identical in the singular and the plural. Only the article tells you which: <em>la città → le città</em>."
      },
      {
        contrast: "English has no grammatical gender at all, so there is nothing to transfer here — you're building the category from zero, and \"the table\" gives you no hint that it's <em>il</em> tavolo. Learn every noun with its article from day one; it costs nothing now and saves years later. The good news: Italian has no cases either, so nothing changes shape the way \"who / whom\" does."
      }
    ],
    grammar: {
      title: "Gender and plural of the noun",
      table: {
        head: ["pattern", "singular", "plural", "in English"],
        rows: [
          ["-o → -i (m)", "il libro", "i libri", "book / books"],
          ["-a → -e (f)", "la ragazza", "le ragazze", "girl / girls"],
          ["-e → -i (m)", "il ristorante", "i ristoranti", "restaurant / restaurants"],
          ["-e → -i (f)", "la stazione", "le stazioni", "station / stations"],
          ["invariable", "la città", "le città", "city / cities"],
          ["loanwords", "il bar", "i bar", "bar / bars"]
        ]
      },
      examples: [
        { tr: "The croissant is good." },
        { tr: "The croissants are good.", note: "the adjective changes its ending too" },
        { tr: "The station is nearby.", note: "\"stazione\" is feminine despite the -e ending" },
        { tr: "Two coffees, please.", note: "caffè doesn't change form" }
      ]
    },
    vocab: [
      "book",
      "house",
      "table",
      "chair",
      "restaurant",
      "station",
      "key",
      "flower",
      "city",
      "coffee / bar",
      "sport",
      "movie",
      "night",
      "day"
    ],
    exercises: [
      {
        q: "Which word is feminine?",
        opts: ["il tavolo", "la chiave", "il fiore"],
        why: "<i>La chiave</i> — you know the gender from the article, because an -e ending doesn't reveal it."
      },
      {
        q: "The plural of \"la ragazza\" is \"___ ragazze\".",
        why: "The feminine plural article is always <b>le</b>."
      },
      {
        q: "Make it plural: \"il ristorante\" → \"i ___\".",
        hint: "-e always becomes -i in the plural",
        why: "Nouns in -e form their plural in -i, whatever their gender."
      },
      {
        q: "Pick the right singular definite article.",
        why: "With -e nouns the gender has to be memorized — which is why you always write them down with the article.",
        items: ["book", "house", "station", "restaurant", "key", "day"]
      },
      {
        q: "How many coffees are you ordering when you say \"due caffè\"?",
        opts: ["One", "Two", "There's no way to tell"],
        why: "\"Caffè\" doesn't inflect; the number comes from the numeral or the article: <i>il caffè / i caffè</i>."
      },
      {
        q: "Which of these nouns look the same in the plural?",
        opts: ["la città", "il libro", "il bar", "la sedia", "lo sport"],
        why: "Invariable: words stressed on the final vowel (città) and loanwords (bar, sport)."
      },
      { tr: "The restaurant is closed.", why: "Order: article + noun + verb + adjective." },
      { tr: "The keys are on the table." },
      { tr: "The city is very beautiful.", why: "\"Città\" is stressed on the end: chee-TAH." }
    ]
  },
  "lesson:a1-u01-l3": {
    theme: "Core grammar",
    title: "Definite and indefinite articles",
    objectives: [
      "pick the right definite article based on the first sound of the word",
      "tell il from un",
      "use lo and gli correctly"
    ],
    theory: [
      {
        h: "Why seven words where English has one",
        p: "The article does two jobs at once: it marks gender and number, and it says whether we mean something the listener already knows or just any one of them. <em>Vorrei un caffè</em> — any coffee. <em>Dov'è il caffè?</em> — the specific one we both have in mind. English does the second job with \"a\" and \"the\"; it never does the first."
      },
      {
        h: "The masculine forms depend on the first sound",
        p: "The masculine article has three variants, and the choice isn't taste, it's pronunciation. <strong>Il</strong> goes before an ordinary consonant. <strong>Lo</strong> before <em>s + consonant</em> (<em>lo studente</em>), and before <em>z</em>, <em>gn</em>, <em>ps</em>, <em>y</em> and <em>x</em>. <strong>L'</strong> before a vowel. The reason is purely phonetic: \"il studente\" is awkward to say."
      },
      {
        h: "The plural",
        list: [
          "<b>il → i</b>: <em>il libro → i libri</em>",
          "<b>lo / l' → gli</b>: <em>lo studente → gli studenti</em>, <em>l'amico → gli amici</em>",
          "<b>la / l' → le</b>: <em>la casa → le case</em>, <em>l'amica → le amiche</em>"
        ]
      },
      {
        h: "The indefinite article",
        p: "<strong>Un</strong> before a consonant and before a vowel (<em>un libro</em>, <em>un amico</em> — no apostrophe!), <strong>uno</strong> wherever <em>lo</em> would go (<em>uno studente</em>), <strong>una</strong> for the feminine, <strong>un'</strong> before a feminine vowel (<em>un'amica</em>)."
      },
      {
        trap: "<b>un amico</b> (no apostrophe, a man) versus <b>un'amica</b> (with one, a woman). In writing the apostrophe is the only difference, and it is carrying the gender. English \"a friend\" tells you nothing, so there is no habit here to fall back on."
      }
    ],
    grammar: {
      title: "Articles — the full table",
      table: {
        head: ["context", "definite sing.", "definite pl.", "indefinite"],
        rows: [
          ["m. + consonant", "il treno", "i treni", "un treno"],
          ["m. + s+cons., z, gn, ps", "lo studente, lo zaino", "gli studenti", "uno studente"],
          ["m. + vowel", "l'amico", "gli amici", "un amico"],
          ["f. + consonant", "la casa", "le case", "una casa"],
          ["f. + vowel", "l'amica", "le amiche", "un'amica"]
        ]
      },
      examples: [
        { tr: "A coffee, please.", note: "any one — indefinite" },
        { tr: "This coffee is cold.", note: "a specific one — definite" },
        { tr: "The backpack is heavy.", note: "z → lo" },
        { tr: "The students are late." },
        { tr: "A friend from Rome.", note: "feminine + vowel → un'" }
      ]
    },
    vocab: [
      "student",
      "backpack",
      "friend",
      "train",
      "mirror",
      "sugar",
      "water",
      "glass",
      "bottle",
      "hotel",
      "psychologist",
      "people (singular in Italian!)"
    ],
    exercises: [
      {
        q: "Which article goes with \"zucchero\" (sugar)?",
        opts: ["il", "lo", "l'"],
        why: "Masculine nouns starting with <b>z</b> take lo: <i>lo zucchero</i>, same as <i>lo zaino</i>."
      },
      {
        q: "What is the plural of \"lo specchio\"?",
        opts: ["i specchi", "gli specchi", "le specchie"],
        why: "Lo always becomes <b>gli</b> in the plural."
      },
      {
        q: "Choose the right definite article.",
        why: "The choice depends on gender AND on the first sound of the word.",
        items: ["train", "student", "friend (f.)", "water", "bottle", "backpack"]
      },
      {
        q: "Fill in: \"Ho ___ amica a Milano.\" (I have a friend in Milan.)",
        hint: "feminine before a vowel",
        why: "Un'amica, with the apostrophe. Without it (<i>un amico</i>) it would be a man."
      },
      {
        q: "Fill in: \"___ studenti sono bravi.\" (The students are good.)",
        why: "Studente takes lo, so in the plural: gli studenti."
      },
      {
        q: "\"Vorrei il caffè\" versus \"Vorrei un caffè\" — what's the difference?",
        opts: [
          "None, they're synonyms",
          "Il = that specific coffee already mentioned; un = any coffee",
          "Il is more polite"
        ],
        why: "The definite article assumes the listener knows which one you mean. At a bar you order <i>un caffè</i>."
      },
      {
        q: "Match the noun with its article.",
        pairs: ["ps + consonant", "vowel", "ordinary consonant", "feminine"]
      },
      {
        tr: "The student's backpack is heavy.",
        why: "\"Dello\" is di + lo — the preposition adapts to the article too."
      },
      { tr: "The students are at the university." }
    ]
  },
  "lesson:a1-u01-l4": {
    theme: "Everyday life",
    title: "How are you — tu or Lei",
    objectives: [
      "ask how someone is, formally and informally",
      "conjugate the verb stare",
      "know when to move from Lei to tu"
    ],
    theory: [
      {
        h: "Two ways to say \"you\", not one",
        p: "Italian distinguishes <strong>tu</strong> (informal) from <strong>Lei</strong> (formal). <em>Lei</em> literally means \"she\", but it's used for men and women alike, with a third person singular verb: <em>Come sta?</em> In writing it's often capitalized to keep it apart from ordinary \"she\". English lost this distinction centuries ago, so there's no instinct to lean on: you have to decide, every time you open your mouth."
      },
      {
        h: "Who offers to switch to tu",
        p: "The rule is simple: the older or more senior person offers. The line is <em>Possiamo darci del tu?</em> (\"Shall we use tu?\"). In a bar, among people your own age, in a young workplace — Italians move to <em>tu</em> very fast. At a bank, at the doctor's, in a government office, <em>Lei</em> stays."
      },
      {
        h: "Stare — \"to be\", but about how you feel",
        p: "How you're feeling goes through <strong>stare</strong>, not <em>essere</em>. <em>Come stai?</em> → <em>Sto bene</em>. \"Sono bene\" is a mistake no Italian would ever make. <em>Stare</em> also covers location and lasting states: <em>Sto a casa</em> (I'm staying home)."
      },
      {
        contrast: "English says \"how <b>are</b> you\", which pulls you straight toward <em>essere</em> and produces <em>sono bene</em> — the single most common English-speaker error at this level. Learn the pair as a unit: <b>come stai / sto bene</b>."
      }
    ],
    grammar: {
      title: "Stare (to feel, to stay) — present tense",
      table: {
        head: ["person", "form", "example"],
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
        { tr: "Hi Marco, how are you?", note: "informal" },
        { tr: "Good morning, how are you?", note: "formal" },
        { tr: "Fine, thanks. And you?" },
        { tr: "Not bad.", note: "a very common answer" },
        { tr: "So-so." },
        { tr: "Shall we use tu?" }
      ]
    },
    vocab: [
      "how are you? (informal)",
      "how are you? (formal)",
      "I'm fine",
      "I'm not well",
      "not bad",
      "so-so",
      "and you?",
      "great",
      "a bit tired",
      "sir / ma'am",
      "see you soon",
      "see you later"
    ],
    dialogue: [
      "Hi Giulia! How are you?",
      "Hi! Great, and you?",
      "A bit tired, but fine. See you later!",
      "Good morning ma'am, how are you?",
      "Not bad, thank you. And you?"
    ],
    exercises: [
      {
        q: "You're asking how someone is, and you address them as Lei. Which sentence is right?",
        opts: ["Come stai?", "Come sta?", "Come state?"],
        why: "The Lei form takes the third person singular: <i>come sta?</i>"
      },
      {
        q: "Which sentence is wrong?",
        opts: ["Sto bene.", "Sono bene.", "Non c'è male."],
        why: "How you feel goes through <b>stare</b>, never through <i>essere</i>."
      },
      {
        tr: "io, tu, lui/lei, voi",
        why: "Stare is irregular in the singular and in the third person plural (stanno)."
      },
      {
        q: "Fill in: \"Come ___, ragazzi?\" (How are you, guys?)",
        why: "You're addressing a group → the voi form: state."
      },
      { q: "Translate informally: \"I'm fine, thanks. And you?\"", why: "Sto bene, grazie. E tu?" },
      {
        q: "You're at a bar. The barista, who's known you for years, greets you first.",
        setting: "The neighborhood bar, eight in the morning.",
        lines: [
          { tr: "Hi! How are you this morning?" },
          { tr: "Say you're fine and bounce the question back.", answerTr: "Fine, and you?" },
          { tr: "Great! The usual, a coffee?" },
          { tr: "Say yes and thank them.", answerTr: "Yes, thanks!" }
        ]
      },
      {
        q: "Match the answer with what it conveys.",
        pairs: ["very well", "not bad", "so-so", "badly"]
      },
      { tr: "Good evening ma'am, how are you?" },
      { tr: "Not bad, thank you. And you?" }
    ]
  },
  "lesson:a1-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check greetings, essere, stare, gender and articles"],
    theory: [
      {
        p: "Ten questions covering the whole unit. You pass at 70%. Don't look back at the lessons — if you can't remember something, it's better to go back and review it."
      }
    ],
    exercises: [
      {
        q: "It's 6:30 p.m. and you walk into a shop. What do you say?",
        opts: ["Buongiorno", "Buonasera", "Buonanotte"],
        why: "After about 4-5 p.m. Italians switch to buonasera."
      },
      { q: "\"Noi ___ in ritardo.\" (We're late.)", why: "essere, the noi form." },
      { q: "\"Come ___?\" asking a friend how she is.", why: "stare, the tu form." },
      { q: "Choose the definite article.", items: [, , , ] },
      {
        q: "The plural of \"l'amico\":",
        opts: ["gli amici", "i amici", "le amiche"],
        why: "Masculine l' becomes gli."
      },
      {
        q: "Which nouns don't change in the plural?",
        opts: ["il caffè", "la sedia", "il bar", "la città"]
      },
      { q: "\"A water, please.\"", why: "Un'acqua, per favore — feminine before a vowel." },
      { tr: "The students are at the bar." },
      { tr: "Two coffees and a croissant, please." },
      { tr: "Good morning, how are you?" }
    ]
  },
  "unit:a1-u02": { title: "Who are you", grammarNote: "avere · numbers · jobs and nationalities" },
  "lesson:a1-u02-l1": {
    theme: "Meeting people",
    title: "Introducing yourself",
    objectives: [
      "give your name, where you're from and where you live",
      "use the verb chiamarsi",
      "ask other people the same things"
    ],
    theory: [
      {
        h: "\"My name is\" is a reflexive verb",
        p: "<strong>Chiamarsi</strong> literally means \"to call oneself\". Hence <em>mi chiamo</em> — \"I call myself\". The reflexive pronoun (<em>mi, ti, si…</em>) sits <b>before</b> the verb, which is the opposite of the English \"myself\" that trails after it."
      },
      {
        h: "Where you're from: essere di or venire da",
        p: "For a city you say <em>sono di Chicago</em> (\"I'm from Chicago\"); for a country, <em>vengo dagli Stati Uniti</em> or <em>sono americano/a</em>. Country names take an article (<em>l'Italia, gli Stati Uniti</em>), city names don't."
      },
      {
        trap: "Nationalities are written in <b>lowercase</b> in Italian: <em>sono americana</em>, <em>un ragazzo italiano</em>. English capitalizes them without exception, so this one takes real effort to unlearn — and it shows up in every written exercise."
      },
      {
        h: "Abitare — to live somewhere",
        p: "<em>Abitare a Roma</em> (a city), <em>abitare in Italia</em> (a country). The same a/in split comes back later with travel, so it's worth memorizing right now as a pair: <b>a + city, in + country</b>."
      }
    ],
    grammar: {
      title: "Chiamarsi (to be called) and asking about someone",
      table: {
        head: ["person", "chiamarsi", "example"],
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
        { tr: "What's your name? — My name is Eva." },
        { tr: "Where are you from? — I'm from Boston." },
        { tr: "I'm American, but I live in Milan.", note: "nationality in lowercase" },
        { tr: "How old are you? — I'm twenty-eight.", note: "age always goes through avere" },
        { tr: "Nice to meet you, Marco. — The pleasure's mine." }
      ]
    },
    vocab: [
      "my name is…",
      "what's your name?",
      "where are you from?",
      "I'm from… (city)",
      "I live in… (city)",
      "American (m. / f.)",
      "Italian (m. / f.)",
      "first name",
      "last name",
      "nice to meet you",
      "me too",
      "really?"
    ],
    exercises: [
      {
        q: "How do you ask someone's name informally?",
        opts: ["Come si chiama?", "Come ti chiami?", "Come vi chiamate?"],
        why: "The tu form: <i>ti chiami</i>. The Lei version is <i>come si chiama?</i>"
      },
      {
        q: "Which sentence is written correctly?",
        opts: ["Sono Americana.", "Sono americana.", "Sono la americana."],
        why: "Nationalities are lowercase, and take no article after essere."
      },
      { q: "Fill in: \"___ chiamo Marta.\"", why: "First person reflexive pronoun: mi chiamo." },
      {
        q: "Fill in: \"Abito ___ Roma.\" (I live in Rome.)",
        why: "Cities take <b>a</b>, countries take <b>in</b>: abito a Roma / abito in Italia."
      },
      {
        q: "Complete the introduction.",
        tr: "Hi! My name's Kate, I'm from Seattle and I live in Bologna.",
        why: "The three verbs that turn up in every first sentence about yourself."
      },
      { tr: "Nice to meet you, my name is Luca." },
      {
        q: "You're meeting someone at a language school.",
        setting: "First day at a language school in Florence.",
        lines: [
          { tr: "Hi! I'm Giulia. And you, what's your name?" },
          { tr: "Introduce yourself by name.", answerTr: "My name is Eva." },
          { tr: "Nice to meet you, Eva! Where are you from?" },
          { tr: "Say you're from Poland — that's the recorded model answer.", answerTr: "I'm from Poland." }
        ]
      },
      { tr: "My name is Elena and I live in Naples." },
      { tr: "Nice to meet you!" }
    ]
  },
  "lesson:a1-u02-l2": {
    theme: "Core grammar",
    title: "To have, and numbers 0-100",
    objectives: [
      "conjugate avere",
      "use expressions like ho fame, ho freddo, ho ventotto anni",
      "count to a hundred and give a price"
    ],
    theory: [
      {
        h: "Avere does more work than English \"have\"",
        p: "Italian uses <strong>avere</strong> where English uses \"to be\". <em>Ho fame</em> is literally \"I have hunger\", not \"I am hungry\". The same logic covers thirst, cold, heat, fear, sleepiness and age — so \"I am cold\" comes out as <em>ho freddo</em>, and <em>sono freddo</em> would mean you're a cold person."
      },
      {
        h: "Age: always avere",
        p: "<em>Ho trent'anni</em> — literally \"I have thirty years\". <em>Sono trenta</em> means nothing at all. Note the apostrophe: <em>trent'anni</em>, <em>vent'anni</em> — the final vowel of the ten drops before <em>anni</em>."
      },
      {
        h: "The h you never hear",
        p: "The forms <em>ho, hai, ha, hanno</em> start with a silent <b>h</b>. It isn't pronounced at all — it exists purely to keep them apart from other words: <em>ho</em> (I have) versus <em>o</em> (or), <em>ha</em> (has) versus <em>a</em> (to)."
      },
      {
        h: "Numbers: tens plus units",
        p: "From 20 up, numbers are written as one word: <em>ventidue</em>, <em>trentasei</em>. Before <em>uno</em> and <em>otto</em> the ten drops its final vowel: <b>ventuno</b>, <b>ventotto</b>, <b>trentuno</b>."
      }
    ],
    grammar: {
      title: "Avere (to have) and numbers",
      table: {
        head: ["person", "avere", "expression"],
        rows: [
          ["io", "ho", "Ho fame. (I'm hungry.)"],
          ["tu", "hai", "Hai freddo? (Are you cold?)"],
          ["lui / lei / Lei", "ha", "Ha ragione. (He's right.)"],
          ["noi", "abbiamo", "Abbiamo sete. (We're thirsty.)"],
          ["voi", "avete", "Avete tempo? (Do you have time?)"],
          ["loro", "hanno", "Hanno paura. (They're afraid.)"]
        ]
      },
      examples: [
        { tr: "1, 2, 3, 4, 5" },
        { tr: "6, 7, 8, 9, 10" },
        { tr: "11, 12, 13… 20" },
        { tr: "21, 22, 28", note: "before uno and otto the ten loses its vowel" },
        { tr: "30, 40, 50, 60" },
        { tr: "70, 80, 90, 100" },
        { tr: "I'm twenty-eight years old." }
      ]
    },
    vocab: [
      "I'm hungry",
      "I'm thirsty",
      "I'm cold / hot",
      "I'm sleepy",
      "I'm afraid",
      "I'm right",
      "I need…",
      "how old are you?",
      "how much is it?",
      "euro",
      "number",
      "phone number"
    ],
    exercises: [
      { why: "Four forms start with a silent h: ho, hai, ha, hanno." },
      {
        q: "How do you say \"I'm hungry\"?",
        opts: ["Sono fame", "Ho fame", "Sto fame"],
        why: "Physical states go through avere: ho fame, ho sete, ho freddo."
      },
      { q: "What number is \"settantasei\"?", opts: ["66", "76", "86"], why: "settanta (70) + sei (6) = 76." },
      { q: "Write it in digits: \"novantatré\"", why: "novanta (90) + tre (3)." },
      {
        q: "Fill in: \"Ho vent___ anni.\" (I'm twenty.)",
        hint: "something disappears before \"anni\"",
        why: "Vent'anni — the ten loses its final vowel before anni."
      },
      { q: "\"How old are you?\"", why: "Literally: \"how many years do you have\"." },
      {
        q: "Match the avere expression with its meaning.",
        pairs: ["I'm thirsty", "I'm sleepy", "I'm afraid", "I'm right"]
      },
      {
        q: "Complete the exchange at the register.",
        tr: "— How much is it? — Thirty-two euros. — I only have twenty, sorry."
      },
      { tr: "I'm thirty-five and I live in Turin." },
      { tr: "How much is a cappuccino?" }
    ]
  },
  "lesson:a1-u02-l3": {
    theme: "Work and people",
    title: "Jobs and work",
    objectives: [
      "say what you do for a living",
      "use fare il / essere un",
      "form the feminine of job titles"
    ],
    theory: [
      {
        h: "Two constructions, two shades",
        p: "\"I'm an architect\" has two Italian versions. <strong>Faccio l'architetto</strong> (literally \"I do the architect\") is about the job you practice and is the commonest in conversation. <strong>Sono architetto</strong> stresses identity or qualification. After <em>fare</em> comes the definite article; after <em>essere</em>, usually none at all — so the English \"an\" disappears."
      },
      {
        h: "Feminine forms",
        list: [
          "-o → -a: <em>l'impiegato → l'impiegata</em>",
          "-e → -essa: <em>il professore → la professoressa</em>, <em>lo studente → la studentessa</em>",
          "-tore → -trice: <em>l'attore → l'attrice</em>, <em>il direttore → la direttrice</em>",
          "no change: <em>il/la giornalista</em>, <em>il/la dentista</em>, <em>il/la cantante</em>"
        ]
      },
      {
        h: "Job titles in flux",
        p: "Forms like <em>l'avvocata</em>, <em>la sindaca</em>, <em>la ministra</em> are now standard in the press and in official documents, though twenty years ago they caused arguments. In speech you'll still hear the older <em>l'avvocato</em> used of a woman. You'll meet both."
      },
      {
        contrast: "English \"I work as…\" translates literally as <em>lavoro come…</em>, and it's correct — but Italians far more often just say <em>faccio il/la…</em> Reaching for \"lavoro come\" every time is a small tell."
      }
    ],
    grammar: {
      title: "Fare (to do, to make) — present tense",
      note: "Irregular, and at the same time one of the three most frequent Italian verbs.",
      table: {
        head: ["person", "fare", "example"],
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
        { tr: "What do you do?" },
        { tr: "I'm a journalist." },
        { tr: "I'm an engineer.", note: "after essere, usually no article" },
        { tr: "I work at an agency." },
        { tr: "I'm not working at the moment." },
        { tr: "I'm still studying, I'm in my final year." }
      ]
    },
    vocab: [
      "work, job",
      "teacher",
      "doctor",
      "engineer",
      "lawyer",
      "journalist",
      "office worker",
      "cook",
      "sales assistant",
      "manual worker",
      "self-employed person",
      "I'm looking for work"
    ],
    exercises: [
      { why: "Mind the double c in faccio and facciamo." },
      {
        q: "Which sentence means \"I'm a teacher\" and sounds most natural?",
        opts: ["Faccio l'insegnante.", "Sono la insegnante.", "Ho insegnante."],
        why: "Fare + definite article is the commonest way to name your job in speech."
      },
      {
        q: "What's the feminine of \"il professore\"?",
        opts: ["la professora", "la professoressa", "la professrice"],
        why: "The -e → -essa pattern, like studente → studentessa."
      },
      {
        q: "Fill in: \"Mia sorella fa ___ dottoressa.\"",
        why: "After fare comes the definite article, matched to the gender: la dottoressa."
      },
      { q: "Choose the article.", items: ["cook (f.)", "engineer", "student (f.)", "worker"] },
      { q: "\"What do you do?\" (informal)", why: "Che lavoro fai? — literally \"what work do you do\"." },
      {
        q: "Match the masculine form with the feminine.",
        pairs: ["l'attrice", "la commessa", "la studentessa", "la giornalista"]
      },
      { tr: "I work at a bank in Milan." },
      { tr: "I'm an architect, I work with my brother." },
      { tr: "What do you do? I'm a journalist." }
    ]
  },
  "lesson:a1-u02-l4": {
    theme: "Core grammar",
    title: "The first conjugation",
    objectives: [
      "conjugate any regular -are verb",
      "handle the spelling shifts in cercare, pagare, mangiare",
      "build a negative and a question"
    ],
    theory: [
      {
        h: "The biggest and most predictable group",
        p: "About 70% of Italian verbs end in <strong>-are</strong>, and nearly all of them behave identically. Cut the infinitive ending and add six of your own: <em>-o, -i, -a, -iamo, -ate, -ano</em>. Learn one pattern and you can handle hundreds of words."
      },
      {
        h: "Stress where you can't see it",
        p: "In the <em>loro</em> form the stress falls on the third syllable from the end: <b>par</b>-la-no, <b>la</b>-vo-ra-no. Not \"parla-NO\". The difference is audible and Italians catch it."
      },
      {
        h: "Spelling that rescues the pronunciation",
        list: [
          "<b>-care / -gare</b> add an <b>h</b> before -i and -e: <em>cercare → cerchi, cerchiamo</em>; <em>pagare → paghi, paghiamo</em>",
          "<b>-ciare / -giare</b> drop the <b>i</b> before -i: <em>mangiare → mangi</em> (not \"mangii\"), <em>cominciare → cominci</em>",
          "unstressed <b>-iare</b> also drops one i: <em>studiare → studi, studiamo</em>"
        ]
      },
      {
        h: "Negatives and questions need no rebuilding",
        p: "The negative is one word, <strong>non</strong>, before the verb: <em>non parlo italiano</em>. A question needs no restructuring at all — intonation is enough: <em>Parli italiano?</em> There is no Italian equivalent of the English auxiliary \"do\", and inventing one (\"fai parlare?\") is a classic beginner reflex."
      }
    ],
    grammar: {
      title: "Parlare (to speak) — the -ARE pattern",
      table: {
        head: ["person", "ending", "parlare", "lavorare"],
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
        { tr: "I speak a little Italian." },
        { tr: "I don't speak well, but I understand." },
        { tr: "Do you study at the university?", note: "a question by intonation alone" },
        { tr: "We eat at eight." },
        { tr: "Are you looking for work in Milan?", note: "cercare → cerchi, with an h" },
        { tr: "They live near the center.", note: "stress: A-bi-ta-no" }
      ]
    },
    vocab: [
      "to speak, to talk",
      "to work",
      "to study",
      "to live (somewhere)",
      "to eat",
      "to buy",
      "to look for",
      "to pay",
      "to listen",
      "to watch, to look at",
      "to wait",
      "to start"
    ],
    exercises: [
      { why: "The pattern that covers most Italian verbs." },
      {
        tr: "tu, noi — watch the spelling",
        why: "Cerchi and cerchiamo take an <b>h</b> to keep the hard k sound."
      },
      {
        q: "Which form is right for \"you eat\"?",
        opts: ["mangii", "mangi", "mangie"],
        why: "Verbs in -giare drop the i before the -i ending: mangi."
      },
      {
        q: "Fill in: \"Loro ___ a Bologna.\" (They live in Bologna.)",
        why: "abitare, the loro form: -ano."
      },
      {
        q: "Make it negative: \"Parlo italiano.\" → \"___ parlo italiano.\"",
        why: "One word, non, before the verb — that's the whole negation."
      },
      { q: "\"We're looking for an apartment in Rome.\"", why: "cercare → cerchiamo (with h), a + city." },
      {
        q: "Which forms belong to \"studiare\"?",
        opts: ["studio", "studii", "studi", "studiamo", "studiate"],
        why: "\"Studii\" doesn't exist — the double i reduces to one."
      },
      { tr: "I don't work on Saturdays.", why: "\"Il sabato\" with the article means \"on Saturdays\", regularly." },
      { tr: "I've been studying Italian for three months." },
      { tr: "I don't speak well, but I understand almost everything." }
    ]
  },
  "lesson:a1-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check avere, fare, chiamarsi, numbers and the first conjugation"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"___ chiamo Peter.\"" },
      { q: "\"Quanti anni ___?\" (How old are you?)" },
      { q: "What number is \"ottantaquattro\"?", opts: ["48", "84", "94"] },
      { q: "\"I'm hungry\" in Italian:", opts: ["Sono fame", "Ho fame", "Sto fame"] },
      {  },
      {
        q: "Which form is right for \"you pay\"?",
        opts: ["pagi", "paghi", "page"],
        why: "-gare adds an h before -i."
      },
      { q: "Fill it in.", tr: "I'm American, I live in Verona and I'm a teacher." },
      { q: "\"I don't speak Italian.\"" },
      { tr: "I'm twenty-seven and I'm looking for work." },
      { tr: "My name is Anna and I'm a journalist." }
    ]
  },
  "unit:a1-u03": {
    title: "Aperitivo and food",
    grammarNote: "piacere · partitive article · -ere and -ire"
  },
  "lesson:a1-u03-l1": {
    theme: "Food",
    title: "The verb piacere",
    objectives: [
      "say what you like and don't like",
      "choose between piace and piacciono",
      "ask what other people like"
    ],
    theory: [
      {
        h: "The sentence stands on its head",
        p: "<strong>Piacere</strong> doesn't mean \"to like\", it means \"to be pleasing\". <em>Mi piace la pizza</em> is literally \"pizza is pleasing to me\". The grammatical subject is <b>the thing</b>, and the person doing the liking shows up as an indirect object (<em>mi, ti, gli, le, ci, vi</em>)."
      },
      {
        h: "Which is why the verb has two forms",
        p: "Since the thing is the subject, the thing decides the number: <em>mi piace <b>il</b> caffè</em> (one thing) versus <em>mi piacciono <b>gli</b> spaghetti</em> (several). Before an infinitive it's always singular: <em>mi piace viaggiare</em>."
      },
      {
        contrast: "English \"I like pizza\" puts you in the subject slot, which is exactly backwards, and it's why beginners produce <em>io piaccio la pizza</em> (\"I am pleasing to the pizza\"). Don't build the sentence from \"like\". Build it from \"it appeals to me\": the thing comes first, you come second. Once you hear <em>mi piace</em> as \"to me it appeals\", the agreement stops being mysterious."
      },
      {
        h: "Who's doing the liking: mi, ti, gli, le…",
        list: [
          "<b>mi</b> piace — to me",
          "<b>ti</b> piace — to you",
          "<b>gli</b> piace — to him; <b>le</b> piace — to her",
          "<b>ci</b> piace — to us · <b>vi</b> piace — to you (pl.) · <b>gli</b> piace — to them"
        ]
      },
      {
        trap: "The negative goes before the pronoun, not before the verb: <b>non</b> mi piace. Never \"mi non piace\"."
      }
    ],
    grammar: {
      title: "Piacere — the sentence pattern",
      note: "[pronoun] + piace/piacciono + [thing, with its article]",
      table: {
        head: ["what we like", "form", "example"],
        rows: [
          ["one thing", "piace", "Mi piace il vino rosso."],
          ["several things", "piacciono", "Mi piacciono i dolci."],
          ["an activity", "piace", "Mi piace cucinare."],
          ["negative", "non … piace", "Non mi piace il pesce crudo."],
          ["question", "ti piace?", "Ti piace l'aperitivo?"]
        ]
      },
      examples: [
        { tr: "I like coffee a lot." },
        { tr: "Do you like spritz?" },
        { tr: "We don't like warm beer." },
        { tr: "She likes dancing." },
        { tr: "Marco likes fish.", note: "with a name you add \"a\" in front" },
        { tr: "I'd love to try it.", note: "a conditional form — learn it as a set phrase" }
      ]
    },
    vocab: [
      "aperitivo (drink plus snacks)",
      "spritz",
      "red / white wine",
      "beer",
      "olives",
      "chips / fries",
      "savory snacks",
      "cured ham",
      "cheese",
      "sweets, desserts",
      "fish",
      "meat",
      "to cook",
      "to taste, to try"
    ],
    culture: {
      title: "Through Italian eyes: aperitivo is not dinner",
      text: "<p><b>Aperitivo</b> starts around 6:30 p.m. and runs to about 8:30. You pay for the drink (7-12 euros depending on the city) and the food at the bar comes with it. In Milan it has grown into a buffet called <i>apericena</i> — halfway to dinner.</p><p>The rule nobody states out loud: <b>take a reasonable amount</b>. A plate stacked into a tower gives away a foreigner faster than an accent does.</p><p>The classics: <i>spritz</i> (Aperol or Campari), <i>negroni</i>, a glass of wine. Beer passes too, though purists will wrinkle their noses.</p>"
    },
    exercises: [
      {
        q: "\"___ piacciono le olive.\" Why piacciono and not piace?",
        opts: ["Because it's about several people", "Because \"le olive\" is plural", "Because it's a past tense"],
        why: "The verb agrees with the thing being liked — and that thing is plural."
      },
      { q: "Fill in: \"Mi ___ il vino rosso.\"", why: "One singular thing → piace." },
      { q: "Fill in: \"Non mi ___ i film horror.\"", why: "\"I film\" is plural → piacciono." },
      {
        q: "Which sentence is correct?",
        opts: ["Mi non piace il pesce.", "Non mi piace il pesce.", "Mi piace non il pesce."],
        why: "Non goes in front of the whole pronoun + verb group."
      },
      {
        q: "How do you say \"Marco likes fish\"?",
        opts: ["Marco piace il pesce", "A Marco piace il pesce", "Marco piacciono pesce"],
        why: "The person doing the liking takes the preposition <b>a</b> in front of their name."
      },
      { q: "\"I like cooking.\"", why: "Before an infinitive it's always the singular piace." },
      { q: "Match the pronoun with the person.", pairs: ["to me", "to you", "to her", "to us"] },
      {
        q: "Complete the conversation over an aperitivo.",
        tr: "— Do you like spritz? — Yes, a lot! But I don't like olives."
      },
      { tr: "I really like Italian cheeses." },
      { tr: "I like aperitivo, but I don't like olives." }
    ]
  },
  "lesson:a1-u03-l2": {
    theme: "Core grammar",
    title: "The second conjugation and c'è / ci sono",
    objectives: [
      "conjugate regular -ere verbs",
      "use c'è and ci sono",
      "describe what there is in a place"
    ],
    theory: [
      {
        h: "Almost like -are, but not quite",
        p: "The <strong>-ere</strong> group differs from the first in only three endings: <em>-e</em> instead of <em>-a</em>, <em>-ete</em> instead of <em>-ate</em>, <em>-ono</em> instead of <em>-ano</em>. The <em>noi</em> form (<em>-iamo</em>) is shared by all three conjugations — the easiest ending in the language."
      },
      {
        h: "This is where most irregulars hide",
        p: "A lot of very common -ere verbs have odd forms — <em>bere → bevo</em>, <em>rimanere → rimango</em>, <em>scegliere → scelgo</em>. Their irregularity shows up mainly in the past tense and the participle, which we'll get to at A2."
      },
      {
        h: "C'è and ci sono",
        p: "<strong>C'è</strong> (\"there is\") and <strong>ci sono</strong> (\"there are\") say that something exists in a place. The choice depends on the number of things, not on the person: <em>c'è un problema</em>, <em>ci sono due problemi</em>. This one maps neatly onto English, which is a relief."
      },
      {
        trap: "Don't confuse <b>c'è</b> (there is) with <b>è</b> (it is). <em>Il ristorante è chiuso</em> — the restaurant is closed. <em>C'è un ristorante qui vicino</em> — there's a restaurant nearby."
      }
    ],
    grammar: {
      title: "Leggere (to read) — the -ERE pattern",
      table: {
        head: ["person", "ending", "leggere", "prendere"],
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
        { tr: "I'll have a coffee.", note: "\"prendere\" is the standard verb for ordering" },
        { tr: "Are you reading the menu?" },
        { tr: "I can't see the waiter." },
        { tr: "Is there a free table?" },
        { tr: "There are two seats at the bar." },
        { tr: "We're writing the name down for the reservation." }
      ]
    },
    vocab: [
      "to take, to order",
      "to read",
      "to write",
      "to see",
      "to ask",
      "to answer",
      "to put",
      "to close",
      "there is / there are",
      "seat, place",
      "free / taken",
      "nearby"
    ],
    exercises: [
      { why: "Note -e, -ete, -ono — that's the whole difference from the -are group." },
      {
        q: "Which ending is shared by all three conjugations?",
        opts: ["-o in the io form", "-iamo in the noi form", "-ono in the loro form"],
        why: "The noi form is always -iamo, whatever the group."
      },
      { q: "Fill in: \"___ un tavolo libero?\" (Is there a free table?)", why: "One table → c'è." },
      {
        q: "Fill in: \"___ tre persone in fila.\" (There are three people in line.)",
        why: "Plural → ci sono."
      },
      {
        q: "\"Il bar è chiuso\" versus \"C'è un bar qui vicino\" — what's the difference?",
        opts: [
          "Nothing, they're synonyms",
          "The first describes the bar, the second says one exists nearby",
          "The second is in the past tense"
        ],
        why: "è describes, c'è states that something is present in a place."
      },
      { q: "\"I'll have a beer, and you?\"", why: "Prendere is the default ordering verb in Italy." },
      {
        q: "Which verbs belong to the -ere group?",
        opts: ["prendere", "abitare", "scrivere", "dormire", "chiudere"]
      },
      { tr: "I can't see the waiter." },
      { tr: "Is there a table for two?" },
      { tr: "We'll have two spritzes." }
    ]
  },
  "lesson:a1-u03-l3": {
    theme: "Core grammar",
    title: "The third conjugation and the -isc- pattern",
    objectives: [
      "conjugate verbs like dormire and verbs like capire",
      "recognize which -ire verbs need the -isc- insert",
      "use preferire to express a preference"
    ],
    theory: [
      {
        h: "One ending, two behaviors",
        p: "Verbs in <strong>-ire</strong> split into two subgroups. The first (<em>dormire, partire, sentire, aprire, offrire</em>) conjugates straightforwardly. The second (<em>capire, finire, preferire, pulire, spedire</em>) inserts <b>-isc-</b> in four forms: <em>io, tu, lui/lei, loro</em>. The <em>noi</em> and <em>voi</em> forms go without it."
      },
      {
        h: "How you know which group it is",
        p: "There is no rule — you memorize it. It helps that the <em>-isc-</em> group is the larger one and takes in nearly all newer verbs (<em>gestire, inserire, garantire</em>). Dictionaries mark it with <i>(-isc-)</i> next to the entry."
      },
      {
        tip: "The -isc- pattern has the shape of a bracket: four forms with the insert on the outside, two without it in the middle. Learn the rhythm: <b>ca-pi-sco, ca-pi-sci, ca-pi-sce — ca-piamo, ca-pite — ca-pi-scono</b>."
      },
      {
        h: "Preferire — a very useful verb",
        p: "<em>Preferisco il vino bianco</em> (\"I prefer white wine\") is a phrase you'll use in every restaurant and shop. It works with a noun or with an infinitive: <em>preferisco restare a casa</em>."
      }
    ],
    grammar: {
      title: "Dormire (no -isc-) versus capire (with -isc-)",
      table: {
        head: ["person", "dormire", "capire", "in English"],
        rows: [
          ["io", "dormo", "capisco", "I sleep / I understand"],
          ["tu", "dormi", "capisci", "you sleep / you understand"],
          ["lui / lei", "dorme", "capisce", "he sleeps / he understands"],
          ["noi", "dormiamo", "capiamo", "we sleep / we understand"],
          ["voi", "dormite", "capite", "you sleep / you understand"],
          ["loro", "dormono", "capiscono", "they sleep / they understand"]
        ]
      },
      examples: [
        { tr: "I don't understand, could you say that again?" },
        { tr: "I'd prefer a table outside." },
        { tr: "What time do you finish work?" },
        { tr: "The shop opens at nine.", note: "aprire — no -isc-" },
        { tr: "We're leaving tomorrow morning." },
        { tr: "They understand everything." }
      ]
    },
    vocab: [
      "to understand",
      "to finish",
      "to prefer",
      "to clean",
      "to send",
      "to sleep",
      "to leave, to depart",
      "to open",
      "to offer, to buy (a round)",
      "to hear, to feel",
      "to follow",
      "could you repeat that?"
    ],
    exercises: [
      { why: "The bracket: -isc- in io, tu, lui/lei and loro; absent in noi and voi." },
      { why: "Dormire goes straight through, with no insert." },
      {
        q: "Which verb needs the -isc- insert?",
        opts: ["partire", "preferire", "aprire"],
        why: "Preferire → preferisco, preferisci, preferisce, preferiamo, preferite, preferiscono."
      },
      {
        q: "Fill in: \"Noi non ___ bene.\" (We don't understand well.)",
        hint: "the noi form has no insert",
        why: "Capiamo — in the noi and voi forms the -isc- disappears."
      },
      { q: "Fill in: \"Loro ___ alle sette.\" (They finish at seven.)", why: "finire with -isc- in the loro form." },
      { q: "\"I'd prefer a table outside.\"" },
      { q: "Which forms contain -isc-?", opts: ["capisco", "capiamo", "finisce", "dormite", "puliscono"] },
      { tr: "I don't understand, could you repeat that?" },
      { tr: "I'd rather leave early tomorrow morning." },
      { tr: "Sorry, I don't understand. Could you say that again?" }
    ]
  },
  "lesson:a1-u03-l4": {
    theme: "Food",
    title: "The partitive article and quantities",
    objectives: [
      "express an unspecified quantity with del, della, dei…",
      "use un po' di and un chilo di",
      "ask for groceries in a shop"
    ],
    theory: [
      {
        h: "Some of something — without a word for \"some\"",
        p: "Italian expresses an unspecified quantity with the <strong>partitive article</strong>: the preposition <em>di</em> fused with the definite article. <em>Vorrei del pane</em> — \"I'd like some bread\". In the plural it covers English \"some\" as well: <em>dei pomodori</em> — \"some tomatoes\"."
      },
      {
        h: "The forms",
        list: [
          "di + il = <b>del</b> pane · di + lo = <b>dello</b> zucchero · di + l' = <b>dell'</b>acqua",
          "di + la = <b>della</b> carne · di + i = <b>dei</b> pomodori",
          "di + gli = <b>degli</b> spinaci · di + le = <b>delle</b> mele"
        ]
      },
      {
        h: "The alternatives",
        p: "Instead of the partitive you can use <strong>un po' di</strong> (\"a bit of\") or a measure: <em>un chilo di, un etto di, mezzo litro di</em>. Under negation the partitive usually vanishes: <em>non ho pane</em>, not \"non ho del pane\"."
      },
      {
        contrast: "English \"some\" is the closest anchor: where you'd say \"some bread\" rather than \"a bread\" or \"the bread\", Italian says <em>del pane</em>. The difference is that English can drop it entirely — \"I bought bread\" is fine — while Italian normally wants the partitive there."
      },
      {
        tip: "<b>Un etto</b> is 100 grams and it's the working unit at the deli counter: <em>due etti di prosciutto</em> = about half a pound of ham."
      }
    ],
    grammar: {
      title: "The partitive article and quantity expressions",
      table: {
        head: ["context", "form", "example"],
        rows: [
          ["m. + consonant", "del", "del pane"],
          ["m. + s+cons., z", "dello", "dello zucchero"],
          ["+ vowel", "dell'", "dell'acqua, dell'olio"],
          ["f. + consonant", "della", "della carne"],
          ["m. plural", "dei / degli", "dei pomodori, degli spinaci"],
          ["f. plural", "delle", "delle mele"]
        ]
      },
      examples: [
        { tr: "I'd like some bread." },
        { tr: "I'm buying some apples and some grapes." },
        { tr: "A bit of salt, not too much." },
        { tr: "Two hundred grams of prosciutto crudo." },
        { tr: "Half a liter of milk." },
        { tr: "I don't have any sugar at home.", note: "no partitive under negation" }
      ]
    },
    vocab: [
      "bread",
      "milk",
      "water",
      "sugar",
      "salt",
      "oil, olive oil",
      "tomatoes",
      "apples",
      "a hundred grams",
      "a kilo",
      "a bit",
      "half a liter",
      "that's enough, thanks",
      "how much would you like?"
    ],
    exercises: [
      {
        q: "How do you ask for some bread?",
        opts: ["Vorrei il pane", "Vorrei del pane", "Vorrei un pane"],
        why: "The partitive <b>del</b> expresses an unspecified quantity."
      },
      {
        q: "Fill in: \"Compro ___ acqua.\" (I'm buying water.)",
        why: "di + l' = dell', because acqua starts with a vowel."
      },
      {
        q: "Fill in: \"Vorrei ___ mele.\" (I'd like some apples.)",
        why: "di + le = delle, feminine plural."
      },
      {
        q: "Choose the partitive article.",
        items: ["bread", "sugar", "meat", "oil", "tomatoes", "spinach"]
      },
      {
        q: "How much is \"due etti\"?",
        opts: ["20 grams", "200 grams", "2 kilos"],
        why: "Un etto is 100 g, so due etti = 200 g."
      },
      { q: "\"Half a liter of milk, please.\"" },
      {
        q: "You're at the counter in a grocery store.",
        setting: "A neighborhood alimentari, at the deli counter.",
        lines: [
          { tr: "Good morning! What can I get you?" },
          { tr: "Ask for 200 g of ham.", answerTr: "Two hundred grams of ham, please." },
          { tr: "Here you are. Anything else?" },
          { tr: "Ask for some bread as well.", answerTr: "Some bread too, thanks." }
        ]
      },
      { q: "Complete the shopping list.", tr: "I'm buying bread, water and tomatoes." },
      { tr: "A kilo of tomatoes and some basil, please." },
      { tr: "Two hundred grams of cheese, please. That's all." }
    ]
  },
  "lesson:a1-u03-test": {
    theme: "Test",
    title: "Unit 3 test",
    objectives: ["check piacere, the -ere and -ire conjugations, the partitive"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Mi ___ gli spaghetti.\" (I like spaghetti.)" },
      { q: "\"Non mi ___ il pesce crudo.\"" },
      {
        q: "\"Marco likes wine\" is:",
        opts: ["Marco piace il vino", "A Marco piace il vino", "Marco piacciono il vino"]
      },
      {  },
      {  },
      { q: "\"___ due posti liberi.\" (There are two free seats.)" },
      { q: "The partitive article:", items: [, , , ] },
      { q: "\"I prefer white wine.\"" },
      { tr: "There are olives and cheese." },
      { tr: "I really like the Italian aperitivo." }
    ]
  }
});
