/* ============================================================
   Learner-language text (en) for data/core/b2-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b2-u01": {
    title: "Congiuntivo imperfetto",
    grammarNote: "congiuntivo imperfetto and trapassato · sequence of tenses"
  },
  "lesson:b2-u01-l1": {
    theme: "Grammar",
    title: "Forms and basic uses",
    objectives: [
      "form the congiuntivo imperfetto",
      "know the irregular forms",
      "use it after a main clause in the past"
    ],
    theory: [
      {
        h: "The endings are unusually regular",
        p: "Infinitive stem + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em>: <em>parlassi, prendessi, dormissi</em>. Only six verbs are irregular: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>dire → dicessi</em>, <em>bere → bevessi</em>."
      },
      {
        h: "The basic rule: the main clause moves back",
        p: "When the main clause moves into the past, the congiuntivo presente becomes the imperfetto. <em>Penso che <b>sia</b> vero</em> → <em>Pensavo che <b>fosse</b> vero.</em> Same mechanism as the sequence of tenses in reported speech."
      },
      {
        h: "Second context: a hypothesis with se",
        p: "<em>Se <b>avessi</b> tempo, verrei</em> (\"if I had time, I'd come\"). That is the second type of conditional sentence, which gets a unit of its own next. For now, remember that <em>se</em> is never followed by a conditional."
      },
      {
        h: "Third context: a wish",
        p: "The congiuntivo imperfetto can stand on its own and express a wish or a regret: <em>Magari venisse!</em> (\"if only he'd come!\"), <em>Fosse vero!</em> (\"if only it were true!\"), <em>Piovesse almeno!</em> — the same move as English \"if only it were\", which is the one place English still keeps its own subjunctive."
      }
    ],
    grammar: {
      title: "Congiuntivo imperfetto",
      table: {
        head: ["person", "parlare", "prendere", "dormire", "essere", "fare"],
        rows: [
          ["che io", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che tu", "parlassi", "prendessi", "dormissi", "fossi", "facessi"],
          ["che lui/lei", "parlasse", "prendesse", "dormisse", "fosse", "facesse"],
          ["che noi", "parlassimo", "prendessimo", "dormissimo", "fossimo", "facessimo"],
          ["che voi", "parlaste", "prendeste", "dormiste", "foste", "faceste"],
          ["che loro", "parlassero", "prendessero", "dormissero", "fossero", "facessero"]
        ]
      },
      examples: [
        { tr: "I thought it was simpler than this." },
        { tr: "I didn't know you worked here." },
        { tr: "I wanted you to tell me earlier." },
        { tr: "If I had time, I'd gladly come." },
        { tr: "If only she'd come too!" },
        { tr: "It seemed there was nobody there." }
      ]
    },
    vocab: [
      "I thought that…",
      "I didn't know that…",
      "I wanted … to",
      "it seemed that…",
      "if only, maybe",
      "as if",
      "provided that",
      "in case",
      "if anything, if need be",
      "I'm half tempted to",
      "it's about time",
      "who knows whether"
    ],
    exercises: [
      {  },
      {  },
      {  },
      { q: "Fill in: \"Pensavo che ___ più semplice.\" (essere)" },
      { q: "Fill in: \"Non sapevo che tu ___ qui.\" (lavorare)" },
      {
        q: "\"Penso che sia vero\" with the main clause in the past:",
        opts: ["Pensavo che sia vero.", "Pensavo che fosse vero.", "Pensavo che era vero."]
      },
      {
        q: "Put in the congiuntivo imperfetto.",
        tr: "I wanted you to tell me earlier and to come with us."
      },
      { q: "\"Magari venisse!\" means:", opts: ["Maybe he'll come", "If only he'd come!", "He would come"] },
      { q: "\"It seemed there was nobody there.\"" },
      { tr: "I didn't know you had already finished the project." },
      { tr: "I thought it was easier than this." }
    ]
  },
  "lesson:b2-u01-l2": {
    theme: "Grammar",
    title: "The sequence of tenses",
    objectives: [
      "pick the tense for the subordinate clause",
      "express something earlier, simultaneous or later",
      "form the congiuntivo trapassato"
    ],
    theory: [
      {
        h: "Three time relations",
        p: "In a complex sentence the subordinate clause can be <b>earlier than</b>, <b>at the same time as</b> or <b>later than</b> the main one. The mood and tense depend on both things: on the tense of the main clause and on the relation."
      },
      {
        h: "The table worth learning by heart",
        list: [
          "main clause in the <b>present</b>: simultaneous → cong. presente; earlier → cong. passato; later → cong. presente or futuro",
          "main clause in the <b>past</b>: simultaneous → cong. imperfetto; earlier → cong. trapassato; later → condizionale passato"
        ]
      },
      {
        h: "Congiuntivo trapassato",
        p: "Congiuntivo imperfetto of <em>avere/essere</em> + past participle: <em>avessi fatto</em>, <em>fossi andato</em>. It marks something earlier than a past main clause: <em>Pensavo che <b>fosse già partito</b>.</em>"
      },
      {
        trap: "Something later than a past main clause takes the <b>condizionale passato</b>, not a congiuntivo: <em>Pensavo che <b>sarebbe venuto</b></em>. Same mechanism as reported speech, and the single commonest slip at B2 for English speakers, because English \"I thought he would come\" looks like a present conditional."
      }
    ],
    grammar: {
      title: "Sequence of tenses",
      table: {
        head: ["main clause", "relation", "form in the subordinate", "example"],
        rows: [
          ["presente", "simultaneous", "cong. presente", "Penso che sia qui."],
          ["presente", "earlier", "cong. passato", "Penso che sia stato qui."],
          ["presente", "later", "cong. presente / futuro", "Penso che venga domani."],
          ["passato", "simultaneous", "cong. imperfetto", "Pensavo che fosse qui."],
          ["passato", "earlier", "cong. trapassato", "Pensavo che fosse stato qui."],
          ["passato", "later", "condizionale passato", "Pensavo che sarebbe venuto."]
        ]
      },
      examples: [
        { tr: "I thought he had already replied." },
        { tr: "I hoped he would call me." },
        { tr: "I had no idea it was this complicated." },
        { tr: "It was odd that they hadn't arrived yet." },
        { tr: "I was afraid we'd taken the wrong road." },
        { tr: "It seemed to me there was a mistake." }
      ]
    },
    vocab: [
      "sequence, agreement",
      "anteriority (earlier)",
      "simultaneity",
      "posteriority (later)",
      "to imagine, to suppose",
      "to fear",
      "to suspect",
      "to doubt",
      "to assume",
      "to turn out",
      "at that point",
      "in the meantime"
    ],
    exercises: [
      { q: "Fill in: \"Credevo che ___ già risposto.\" (avere, he)" },
      { q: "Fill in: \"Speravo che mi ___ chiamato.\" (the future in the past)" },
      {
        q: "\"Pensavo che ___ domani.\" (venire — something later)",
        opts: ["venisse", "sarebbe venuto", "verrebbe"]
      },
      { q: "\"Pensavo che ___ qui.\" (essere — simultaneous)", opts: ["sia", "fosse", "sarebbe stato"] },
      {
        q: "Put in the right forms.",
        tr: "I had no idea it was this complicated and that it would take so much time."
      },
      {
        q: "Put in the right forms.",
        tr: "It was odd that they hadn't arrived yet and that nobody had reported anything."
      },
      { q: "\"I hoped he would call me.\"" },
      {
        q: "The commonest mistake with the sequence of tenses is:",
        opts: [
          "using the congiuntivo instead of the indicativo",
          "using the present conditional instead of the past one for something later",
          "dropping che"
        ]
      },
      { tr: "I was afraid we'd taken the wrong road and that it was too late." },
      { tr: "I thought he had already replied to my email." }
    ]
  },
  "lesson:b2-u01-l3": {
    theme: "Grammar",
    title: "Conjunctions that require the subjunctive",
    objectives: [
      "use come se with the congiuntivo imperfetto",
      "know the conjunctions of purpose, condition and concession",
      "choose between indicativo and congiuntivo"
    ],
    theory: [
      {
        h: "Come se always takes the imperfetto or the trapassato",
        p: "<em>Parla <b>come se</b> fosse un esperto.</em> Never the presente and never the indicativo, even when the main clause is in the present. It's an exception to the sequence of tenses, and one of the most frequently botched constructions. English does the same thing (\"he talks as if he were an expert\") but tolerates \"as if he was\", so the ear doesn't help."
      },
      {
        h: "Conjunctions by function",
        list: [
          "<b>concession</b>: benché, sebbene, nonostante, malgrado, per quanto",
          "<b>purpose</b>: affinché, perché (= so that)",
          "<b>condition</b>: purché, a patto che, a condizione che, sempre che",
          "<b>exception</b>: a meno che (non), salvo che, tranne che",
          "<b>time</b>: prima che (senza che, fino a che non)"
        ]
      },
      {
        h: "A meno che and the pleonastic non",
        p: "<em>Vengo, <b>a meno che non</b> piova.</em> That <em>non</em> is not a negation — the sentence means \"unless it rains\". Dropping it is accepted nowadays, but the form with <em>non</em> is still the standard one."
      },
      {
        trap: "<b>Dopo che</b> takes the indicativo, <b>prima che</b> the congiuntivo. Similar pair: <em>anche se</em> with the indicativo (\"even though\", factual) versus <em>anche se</em> in a hypothesis (congiuntivo)."
      }
    ],
    grammar: {
      title: "Conjunctions and mood",
      table: {
        head: ["conjunction", "mood", "example"],
        rows: [
          ["benché / sebbene", "congiuntivo", "Benché piova, esco."],
          ["affinché", "congiuntivo", "Te lo dico affinché tu capisca."],
          ["purché / a patto che", "congiuntivo", "Vengo purché tu ci sia."],
          ["a meno che non", "congiuntivo", "Vengo a meno che non piova."],
          ["prima che", "congiuntivo", "Parti prima che sia tardi."],
          ["dopo che", "indicativo", "Dopo che è partito, ho capito."],
          ["come se", "cong. imperf./trapass.", "Parla come se fosse esperto."]
        ]
      },
      examples: [
        { tr: "He acts as if nothing had happened." },
        { tr: "However hard it is, it's worth it." },
        { tr: "I'll help you on condition that you're serious about it." },
        { tr: "We're leaving before the traffic starts." },
        { tr: "I'll come, unless something comes up." },
        { tr: "Even though he was right, he didn't say so." }
      ]
    },
    vocab: [
      "however much, although",
      "despite",
      "so that",
      "provided that",
      "on condition that",
      "unless",
      "except that, unless",
      "until",
      "to behave, to act",
      "an unexpected hitch",
      "to be worth it",
      "to be serious about it"
    ],
    exercises: [
      {
        q: "\"Parla come se ___ un esperto.\" (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Come se always takes the congiuntivo imperfetto or trapassato."
      },
      { q: "Fill in: \"Partiamo prima che ___ tardi.\" (essere)" },
      { q: "Fill in: \"Ti aiuto a patto che tu ___ serio.\" (essere)" },
      {
        q: "\"Dopo che è partito\" — why the indicativo?",
        opts: ["It's a mistake", "Dopo che refers to something that actually happened", "Because partire is irregular"]
      },
      {
        q: "Which conjunctions require the congiuntivo?",
        opts: ["benché", "dopo che", "affinché", "siccome", "a meno che non"]
      },
      { q: "Put in the forms.", tr: "He acts as if nothing had happened, even though everyone knows the truth." },
      { q: "\"I'll come, unless something comes up.\"" },
      { tr: "However hard it is, it's worth a try." },
      { tr: "Even though he was right, he preferred to say nothing." },
      { tr: "I'll gladly help you, provided you tell me in time." }
    ]
  },
  "lesson:b2-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check the congiuntivo imperfetto, trapassato and the sequence of tenses"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      {  },
      {  },
      { q: "\"Pensavo che ___ più semplice.\"" },
      { q: "\"Credevo che ___ già risposto.\" (avere, he)" },
      { q: "\"Pensavo che ___ domani.\" (venire)", opts: ["venisse", "sarebbe venuto", "verrebbe"] },
      { q: "\"Parla come se ___ esperto.\"", opts: ["è", "sia", "fosse"] },
      { q: "\"Partiamo prima che ___ tardi.\"" },
      { q: "Which ones require the congiuntivo?", opts: ["benché", "dopo che", "purché", "siccome"] },
      { tr: "I had no idea getting the permit was this complicated." },
      { tr: "I hoped he would answer me by yesterday." }
    ]
  },
  "unit:b2-u02": {
    title: "Conditional sentences",
    grammarNote: "the three types with se · the mixed type · colloquial variants"
  },
  "lesson:b2-u02-l1": {
    theme: "Grammar",
    title: "The three types of conditional",
    objectives: [
      "tell the real, the possible and the unreal apart",
      "match the tenses to each type",
      "keep the conditional out of the se clause"
    ],
    theory: [
      {
        h: "Type 1: real",
        p: "<em><b>Se</b> piove, <b>resto</b> a casa.</em> The condition is real and likely. Both clauses in the indicativo — present, future or imperative (<em>Se hai tempo, chiamami</em>)."
      },
      {
        h: "Type 2: possible but uncertain",
        p: "<em><b>Se avessi</b> tempo, <b>verrei</b>.</em> Congiuntivo imperfetto after <em>se</em>, condizionale presente in the main clause. The condition is hypothetical: possible in theory, not met in fact. Exactly the ground English covers with \"if I had time, I'd come\"."
      },
      {
        h: "Type 3: unreal, about the past",
        p: "<em><b>Se avessi studiato</b>, <b>avrei passato</b> l'esame.</em> Congiuntivo trapassato + condizionale passato. It talks about something that can no longer happen: regret or reproach. English: \"if I had studied, I would have passed\"."
      },
      {
        trap: "<b>Se</b> is never followed by a conditional or a future. \"Se avrei tempo\" is the single most recognizable foreigner's mistake — an Italian hears it instantly. It is the exact twin of English \"if I would have time\", which is wrong for the same reason."
      }
    ],
    grammar: {
      title: "The three types",
      table: {
        head: ["type", "se clause", "main clause", "example"],
        rows: [
          ["1. real", "indicativo", "indicativo / imperativo", "Se piove, resto a casa."],
          ["1. future", "presente / futuro", "futuro", "Se verrai, ti aspetterò."],
          ["2. possible", "cong. imperfetto", "condizionale presente", "Se avessi tempo, verrei."],
          ["3. unreal", "cong. trapassato", "condizionale passato", "Se avessi studiato, avrei passato."],
          [
            "mixed",
            "cong. trapassato",
            "condizionale presente",
            "Se avessi studiato, ora lavorerei qui."
          ]
        ]
      },
      examples: [
        { tr: "If the weather is nice tomorrow, we're going to the seaside." },
        { tr: "If I were you, I wouldn't do it." },
        { tr: "If we'd known earlier, we would have left yesterday." },
        { tr: "If I'd taken that job, I'd be living in Rome now.", note: "the mixed type" },
        { tr: "If you need anything, call me." },
        { tr: "What would you do if you won the lottery?" }
      ]
    },
    vocab: [
      "if",
      "in case",
      "should, in the event that (formal)",
      "otherwise",
      "if I were you",
      "if only",
      "hypothesis",
      "condition",
      "to come true",
      "to regret",
      "regret",
      "to change your mind"
    ],
    exercises: [
      { q: "\"Se ___ tempo, verrei.\" (avere)", opts: ["ho", "avrei", "avessi"] },
      { q: "\"Se avessi studiato, ___ l'esame.\" (passare)", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Fill in: \"Se domani ___ bel tempo, andiamo al mare.\" (fare)" },
      {
        q: "Which sentence is wrong?",
        opts: ["Se avessi tempo, verrei.", "Se avrei tempo, verrei.", "Se ho tempo, vengo."]
      },
      { q: "Complete a type 2.", tr: "If I were you, I wouldn't do it." },
      { q: "Complete a type 3.", tr: "If we'd known earlier, we would have left yesterday." },
      { q: "\"What would you do if you won the lottery?\"" },
      {
        q: "\"Se avessi accettato quel lavoro, ora vivrei a Roma\" is of the type:",
        opts: ["first", "second", "mixed"]
      },
      { tr: "If we'd booked earlier, we would have paid a lot less." },
      { tr: "If I were you, I'd think about it a bit longer." }
    ]
  },
  "lesson:b2-u02-l2": {
    theme: "Grammar",
    title: "Colloquial and formal variants",
    objectives: [
      "recognize the colloquial conditional with the imperfetto",
      "use qualora and nel caso in cui",
      "match the register to the situation"
    ],
    theory: [
      {
        h: "The double imperfetto in speech",
        p: "<em>Se lo sapevo, non venivo.</em> In conversation Italians very often replace type 3 with a double imperfetto. It's widespread and accepted in speech, but <b>not in writing</b> and not in an exam. Worth understanding and worth keeping out of your own texts."
      },
      {
        h: "Formal variants",
        p: "<em><b>Qualora</b> il pagamento non pervenisse entro…</em> — typical of contracts and official letters, always with the congiuntivo. It is the same move as English \"should payment not be received by…\". <em><b>Nel caso in cui</b></em> works the same way. <em><b>Ove</b></em> is more bookish still."
      },
      {
        h: "A condition without se",
        list: [
          "gerund: <em>Studiando di più, passeresti l'esame.</em>",
          "imperative + e: <em>Chiedi e ti sarà dato.</em>",
          "<em>a + infinitive</em>: <em>A pensarci bene, hai ragione.</em>",
          "<em>senza</em>: <em>Senza il tuo aiuto non ce l'avrei fatta.</em>"
        ]
      },
      {
        tip: "<em>Magari</em> plus the congiuntivo imperfetto expresses the wish on its own, with no main clause: <em>Magari fosse così semplice!</em>"
      }
    ],
    grammar: {
      title: "Variants",
      table: {
        head: ["register", "construction", "example"],
        rows: [
          ["colloquial", "imperfetto + imperfetto", "Se lo sapevo, non venivo."],
          ["standard", "cong. trapassato + cond. passato", "Se l'avessi saputo, non sarei venuto."],
          ["formal", "qualora + congiuntivo", "Qualora fosse necessario, provvederemo."],
          ["formal", "nel caso in cui", "Nel caso in cui non arrivasse…"],
          ["without se", "gerund", "Studiando di più, passeresti."],
          ["without se", "senza + noun", "Senza di te non ce l'avrei fatta."]
        ]
      },
      examples: [
        { tr: "Should I not receive confirmation, I'll cancel the booking." },
        { tr: "If it rains, we'll meet at the bar." },
        { tr: "If you wanted to, it could be done tomorrow as well." },
        { tr: "If I'd known, I'd have stayed home.", note: "colloquial" },
        { tr: "If only it were that simple!" },
        { tr: "Had I known earlier, I'd have done it differently." }
      ]
    },
    vocab: [
      "should, in the event that (formal)",
      "in case",
      "should (very formal)",
      "to see to it, to take steps",
      "to cancel",
      "confirmation",
      "if one wanted to",
      "had one known",
      "differently",
      "otherwise",
      "register",
      "not advisable"
    ],
    exercises: [
      {
        q: "\"Se lo sapevo, non venivo\" is a construction that is:",
        opts: ["correct in writing", "colloquial, fine in speech, not advisable in writing", "always wrong"]
      },
      { q: "Fill in: \"Qualora ___ necessario, provvederemo.\" (essere)" },
      { q: "Fill in: \"Nel caso in cui ___, ci vediamo al bar.\" (piovere)" },
      {
        q: "\"Volendo, si può fare domani\" means:",
        opts: ["Wanting, it's done tomorrow", "If you wanted to, it could be done tomorrow", "One wants to do it tomorrow"]
      },
      { q: "Rewrite it in the standard register.", tr: "If I'd known, I wouldn't have come." },
      { q: "\"If it rains, we'll meet at the bar.\"" },
      { q: "Match them up.", pairs: ["should (formal)", "to see to it", "to cancel", "otherwise"] },
      { tr: "Without your help I wouldn't have managed." },
      { tr: "Should confirmation not arrive by Friday, we'll cancel the booking." },
      { tr: "If only it were as simple as you say." }
    ]
  },
  "lesson:b2-u02-l3": {
    theme: "Communication",
    title: "Regret, reproach, hypothesis",
    objectives: [
      "express regret about the past",
      "phrase a reproach without aggression",
      "hold a hypothetical conversation"
    ],
    theory: [
      {
        h: "Regret is the third type",
        p: "<em>Avrei dovuto ascoltarti.</em> (\"I should have listened to you.\") The condizionale passato of <em>dovere</em> and <em>potere</em> is the standard Italian way of expressing regret and self-criticism."
      },
      {
        h: "A softened reproach",
        p: "<em>Avresti potuto dirmelo.</em> (\"You could have told me.\") sounds gentler than <em>perché non me l'hai detto?</em>. The condizionale passato takes the edge off and leaves the content."
      },
      {
        h: "Regret constructions",
        list: [
          "<em>Se solo avessi…</em> — if only I had…",
          "<em>Non avrei mai dovuto…</em> — I should never have…",
          "<em>Con il senno di poi…</em> — with hindsight…",
          "<em>Mi pento di…</em> — I regret that…"
        ]
      },
      {
        tip: "<em>Meno male che…</em> (\"thank goodness that…\") is the opposite of regret and a very common way to open a sentence: <em>Meno male che sei arrivato.</em>"
      }
    ],
    grammar: {
      title: "Regret and reproach",
      table: {
        head: ["function", "construction", "example"],
        rows: [
          ["regret", "avrei dovuto + infinitive", "Avrei dovuto ascoltarti."],
          ["missed chance", "avrei potuto + infinitive", "Avrei potuto accettare."],
          ["reproach", "avresti potuto + infinitive", "Avresti potuto avvisarmi."],
          ["if only", "se solo + cong. trapassato", "Se solo avessi saputo!"],
          ["relief", "meno male che + indicativo", "Meno male che sei qui."],
          ["remorse", "mi pento di + infinitive", "Mi pento di aver detto quello."]
        ]
      },
      examples: [
        { tr: "I should have taken that offer." },
        { tr: "You could have told me earlier." },
        { tr: "If only I'd listened to my mother!" },
        { tr: "With hindsight, it was a mistake." },
        { tr: "Thank goodness I didn't sign." },
        { tr: "I don't regret it in the slightest." }
      ]
    },
    vocab: [
      "I should have",
      "I could have",
      "if only",
      "with hindsight",
      "to regret, to repent of",
      "thank goodness that",
      "luckily",
      "a missed opportunity",
      "to realize",
      "to admit",
      "an error of judgement",
      "in time, over time"
    ],
    exercises: [
      { q: "Fill in: \"___ dovuto ascoltarti.\" (I should have)" },
      { q: "Fill in: \"___ potuto avvisarmi.\" (you could have)" },
      {
        q: "Which one reads as a gentle reproach rather than an accusation?",
        opts: ["Perché non me l'hai detto?", "Avresti potuto dirmelo.", "Dovevi dirmelo!"]
      },
      { q: "Complete the regret.", tr: "If only I'd known earlier, I wouldn't have signed that contract." },
      { q: "\"With hindsight, it was a mistake.\"" },
      { q: "Match them up.", pairs: ["thank goodness that", "to regret", "if only", "a missed opportunity"] },
      {
        q: "\"Non me ne pento affatto\" means:",
        opts: ["I regret it a little", "I don't regret it at all", "I'll come to regret it"]
      },
      { tr: "I should have taken that offer." },
      { tr: "With hindsight I'd have made different decisions." },
      { tr: "You could have told me earlier, I'd have changed my plans." }
    ]
  },
  "lesson:b2-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check the three conditional types and the language of regret"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"Se ___ tempo, verrei.\"", opts: ["ho", "avrei", "avessi"] },
      { q: "\"Se avessi studiato, ___ l'esame.\"", opts: ["passavo", "avrei passato", "passerei"] },
      { q: "Type 2.", tr: "If I were you, I wouldn't do it." },
      { q: "Type 3.", tr: "If we'd booked earlier, we would have paid less." },
      { q: "\"Qualora ___ necessario, provvederemo.\"" },
      { q: "\"___ dovuto ascoltarti.\"" },
      { q: "\"___ potuto avvisarmi.\"" },
      { q: "The wrong sentence:", opts: ["Se avessi tempo…", "Se avrei tempo…", "Se ho tempo…"] },
      { tr: "If only I'd known, I wouldn't have signed that contract." },
      { tr: "If I were you, I'd think twice." }
    ]
  },
  "unit:b2-u03": {
    title: "The passive and the passato remoto",
    grammarNote: "essere/venire/andare + participle · passato remoto"
  },
  "lesson:b2-u03-l1": {
    theme: "Grammar",
    title: "Four ways to build a passive",
    objectives: [
      "form the passive with essere and venire",
      "understand andare + participle as an obligation",
      "use the si passivante in speech"
    ],
    theory: [
      {
        h: "Essere: the basic form",
        p: "<em>La lettera <b>è stata scritta</b> da Marco.</em> It works in every tense. The participle agrees with the subject. The agent is introduced by <em>da</em>."
      },
      {
        h: "Venire: simple tenses only, focus on the process",
        p: "<em>La legge <b>viene approvata</b> ogni anno.</em> You cannot say \"è venuta approvata\" — <em>venire</em> builds no passive in compound tenses. It stresses repetition and the process itself."
      },
      {
        h: "Andare: a passive that carries an obligation",
        p: "<em>Il modulo <b>va compilato</b> in stampatello.</em> This is not a plain passive: the sentence means \"the form <b>must be</b> filled in\". Very common in instructions and official language, and reading it as an <em>essere</em> passive changes the meaning outright."
      },
      {
        h: "Si passivante: the spoken version",
        p: "<em>Qui <b>si vendono</b> panini.</em> The commonest one in conversation, because it's lighter. The verb agrees with the thing, not with the unstated agent."
      }
    ],
    grammar: {
      title: "Four passive forms",
      table: {
        head: ["form", "example", "meaning"],
        rows: [
          ["essere", "La casa è stata venduta.", "the house was sold"],
          ["venire", "La casa viene venduta ogni anno.", "the house is sold (process)"],
          ["andare", "La casa va venduta subito.", "the house must be sold"],
          ["si passivante", "Qui si vendono case.", "houses are sold here"],
          ["the agent", "…da un'agenzia", "…by an agency"],
          ["transitive only", "—", "a passive needs a direct object"]
        ]
      },
      examples: [
        { tr: "The project was approved last week." },
        { tr: "Applications are assessed within thirty days." },
        { tr: "The form must be signed on every page." },
        { tr: "Three languages are spoken in this office." },
        { tr: "The meeting was postponed by the director." },
        { tr: "These mistakes have to be avoided." }
      ]
    },
    vocab: [
      "to approve",
      "to assess, to review",
      "to reject",
      "to postpone",
      "to fill in",
      "to attach",
      "to avoid",
      "to submit, to hand in",
      "within thirty days",
      "deadline",
      "application",
      "outcome"
    ],
    exercises: [
      {
        q: "\"Il modulo va compilato\" means:",
        opts: ["The form goes filled in", "The form must be filled in", "The form has been filled in"]
      },
      {
        q: "Which form does NOT work in compound tenses?",
        opts: ["essere + participle", "venire + participle", "si passivante"]
      },
      {
        q: "Turn it into the passive: \"Marco ha scritto la lettera.\" → \"La lettera ___ stata scritta da Marco.\""
      },
      { q: "Fill in: \"Le domande ___ valutate entro trenta giorni.\" (venire)" },
      { q: "Fill in: \"Questi errori ___ evitati.\" (they must be avoided)" },
      {
        q: "Fill in the passive forms.",
        tr: "The project was approved yesterday, but the form still has to be signed."
      },
      { q: "\"The meeting was postponed by the director.\"" },
      {
        q: "\"Qui si vendono panini\" — why \"vendono\"?",
        opts: [
          "It's a mistake",
          "The si passivante agrees with the plural thing",
          "Because there are several sellers"
        ]
      },
      { tr: "Applications must be submitted by the fifteenth of the month." },
      { tr: "The document has been approved and has to be signed by Friday." }
    ]
  },
  "lesson:b2-u03-l2": {
    theme: "Grammar",
    title: "The narrative past",
    objectives: [
      "form the passato remoto",
      "recognize the 1-3-3 pattern in irregular verbs",
      "know when and where it is used"
    ],
    theory: [
      {
        h: "When it is used",
        p: "In literary and historical narrative (<em>Dante <b>nacque</b> nel 1265</em>), for events that are distant and closed, with no link to the present. In the <b>south of Italy</b> it is also used in everyday speech, even about yesterday; in the north it barely appears. English has no equivalent split — the simple past covers both — so the choice has to be learned as an Italian fact, not translated."
      },
      {
        h: "Regular forms",
        p: "<em>-are</em>: ai, asti, ò, ammo, aste, arono. <em>-ere</em>: ei (or etti), esti, é (or ette), emmo, este, erono (or ettero). <em>-ire</em>: ii, isti, ì, immo, iste, irono."
      },
      {
        h: "The 1-3-3 pattern",
        p: "Most irregular <em>-ere</em> verbs are irregular <b>in three persons only</b>: first singular, third singular and third plural. The rest are regular. <em>prendere → <b>presi</b>, prendesti, <b>prese</b>, prendemmo, prendeste, <b>presero</b></em>. Once you know the <em>io</em> form, the other two follow."
      },
      {
        tip: "To read literature it's enough to <b>recognize</b> the passato remoto. Producing it actively is needed for writing narrative and for the C1 exams."
      }
    ],
    grammar: {
      title: "Passato remoto",
      table: {
        head: ["verb", "io", "tu", "lui/lei", "loro"],
        rows: [
          ["parlare", "parlai", "parlasti", "parlò", "parlarono"],
          ["credere", "credei", "credesti", "credé", "crederono"],
          ["dormire", "dormii", "dormisti", "dormì", "dormirono"],
          ["essere", "fui", "fosti", "fu", "furono"],
          ["avere", "ebbi", "avesti", "ebbe", "ebbero"],
          ["fare", "feci", "facesti", "fece", "fecero"],
          ["prendere", "presi", "prendesti", "prese", "presero"],
          ["dire", "dissi", "dicesti", "disse", "dissero"]
        ]
      },
      examples: [
        { tr: "Dante was born in Florence in 1265." },
        { tr: "Italy became a republic in 1946." },
        { tr: "He left the house and never came back." },
        { tr: "That was when I understood everything." },
        { tr: "He wrote the novel in two years." },
        { tr: "As soon as he had finished, he left.", note: "trapassato remoto" }
      ]
    },
    vocab: [
      "to be born",
      "to die",
      "to become",
      "to write",
      "to live",
      "to see",
      "to find out, to learn",
      "to decide to, to want",
      "novel",
      "century",
      "era",
      "story, sequence of events"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "What is the 1-3-3 pattern?",
        opts: [
          "Three verbs are irregular",
          "Only io, lui/lei and loro are irregular",
          "Every form is irregular"
        ]
      },
      { q: "Passato remoto of \"prendere\", loro form: ___" },
      { q: "Passato remoto of \"dire\", lui form: ___" },
      {
        q: "Where is the passato remoto also used in everyday speech?",
        opts: ["In the north of Italy", "In the south of Italy", "Nowhere"]
      },
      { q: "Complete the narrative.", tr: "Dante was born in 1265 and died in 1321." },
      { q: "\"Italy became a republic in 1946.\"" },
      { tr: "He left the house that evening and never came back." },
      { tr: "That was when I understood I'd been wrong." }
    ]
  },
  "lesson:b2-u03-l3": {
    theme: "Grammar",
    title: "Reduced clauses",
    objectives: [
      "replace a subordinate clause with an infinitive or a gerund",
      "use the past infinitive and the past gerund",
      "write more concisely"
    ],
    theory: [
      {
        h: "Why reduce",
        p: "An implicit clause (no subject of its own, no conjunction) shortens the text and lifts the register. <em>Dopo che ho finito, sono uscito</em> → <em><b>Dopo aver finito</b>, sono uscito.</em> It's one of the features that separate a B2 text from a B1 one."
      },
      {
        h: "The condition: the same subject",
        p: "Implicit forms require both clauses to share a <b>subject</b>. <em>Essendo stanco, sono rimasto a casa</em> is fine; with different subjects you have to build the full clause."
      },
      {
        h: "The repertoire",
        list: [
          "<em>dopo + past infinitive</em>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em>",
          "<em>prima di + infinitive</em>: <em>prima di partire</em>",
          "<em>gerund</em> (cause, manner, time): <em>tornando a casa, ho incontrato…</em>",
          "<em>past gerund</em>: <em>avendo finito, sono uscito</em>",
          "<em>past participle</em>: <em>finita la riunione, sono uscito</em>"
        ]
      },
      {
        trap: "<em>Dopo</em> always takes the <b>past infinitive</b>: <em>dopo aver mangiato</em>, never \"dopo mangiare\". English says \"after eating\" with a gerund, and translating that shape directly is exactly how the mistake gets made."
      }
    ],
    grammar: {
      title: "Reduced forms",
      table: {
        head: ["full clause", "reduced", "type"],
        rows: [
          ["Dopo che ho mangiato…", "Dopo aver mangiato…", "past infinitive"],
          ["Prima che io parta…", "Prima di partire…", "infinitive"],
          ["Mentre tornavo a casa…", "Tornando a casa…", "gerund"],
          ["Poiché ero stanco…", "Essendo stanco…", "gerund"],
          ["Dopo che ebbi finito…", "Avendo finito…", "past gerund"],
          ["Quando la riunione finì…", "Finita la riunione…", "participle"]
        ]
      },
      examples: [
        { tr: "After reading the contract, I signed." },
        { tr: "Before answering, I thought it over carefully." },
        { tr: "On my way home, I ran into Giulia." },
        { tr: "Being late, I took a taxi." },
        { tr: "Having already seen the film, I stayed home." },
        { tr: "Once the work was done, we all left." }
      ]
    },
    vocab: [
      "after having (done)",
      "before (doing)",
      "being",
      "having (done)",
      "even though + gerund",
      "once (done)",
      "to think it over",
      "to conclude",
      "concise",
      "written register",
      "flowing, readable",
      "to weigh down (the style)"
    ],
    exercises: [
      {
        q: "Which one is correct?",
        opts: [
          "Dopo mangiare, sono uscito.",
          "Dopo aver mangiato, sono uscito.",
          "Dopo mangiato, sono uscito."
        ]
      },
      { q: "Reduce it: \"Dopo che ho letto il contratto\" → \"Dopo ___ letto il contratto\"" },
      { q: "Reduce it: \"Mentre tornavo a casa\" → \"___ a casa\"" },
      { q: "Reduce it: \"Poiché ero stanco\" → \"___ stanco\"" },
      {
        q: "A reduced form requires:",
        opts: ["the same tense", "the same subject in both clauses", "no negation"]
      },
      {
        q: "Reduce the sentences.",
        tr: "After reading the contract, I signed. Before answering, I thought it over."
      },
      { q: "\"On my way home, I ran into Giulia.\"" },
      { tr: "Once the work was done, we all left." },
      { tr: "Having already seen that film, I preferred to stay home." },
      { tr: "Before signing, I'd like to read the contract again." }
    ]
  },
  "lesson:b2-u03-test": {
    theme: "Test",
    title: "Unit 3 test",
    objectives: ["check the passive, the passato remoto and reduced clauses"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      {
        q: "\"Il modulo va compilato\" means:",
        opts: ["it goes filled in", "it must be filled in", "it has been filled in"]
      },
      { q: "\"La lettera ___ stata scritta da Marco.\"" },
      { q: "\"Le domande ___ valutate ogni mese.\" (venire)" },
      {  },
      { q: "Passato remoto of \"prendere\", io: ___" },
      { q: "Correct:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "\"Mentre tornavo\" → \"___\" (gerund)" },
      { q: "\"Applications must be submitted by Friday.\"" },
      { tr: "The project was approved in 1998 and carried out in three years." },
      { tr: "After reading the contract, I decided not to sign." }
    ]
  },
  "unit:b2-u04": {
    title: "Society and debate",
    grammarNote: "abstract vocabulary · argument · registers"
  },
  "lesson:b2-u04-l1": {
    theme: "Society",
    title: "The economy and the job market",
    objectives: [
      "understand the basic economic terms used in the press",
      "talk about the job market",
      "use the nominalizations typical of this register"
    ],
    theory: [
      {
        h: "The vocabulary of the business pages",
        p: "Economic writing rests on a narrow, repetitive set of words. Master a hundred of them and most articles open up: <em>il PIL</em> (GDP), <em>l'inflazione</em>, <em>il debito pubblico</em>, <em>la disoccupazione</em>, <em>il potere d'acquisto</em>, <em>la produttività</em>."
      },
      {
        h: "Characteristic structures",
        list: [
          "nominalization: <em>la crescita dei prezzi</em> instead of \"prices are rising\"",
          "passive: <em>è stato approvato il decreto</em>",
          "change expressions: <em>in aumento, in calo, stabile, in ripresa</em>",
          "comparisons: <em>rispetto allo scorso anno, su base annua</em>"
        ]
      },
      {
        h: "How the Italian job market actually looks",
        p: "<em>Il precariato</em> (insecure work), <em>i contratti a termine</em>, <em>la fuga di cervelli</em> (brain drain), <em>i NEET</em> (young people in neither work nor education), <em>il divario Nord-Sud</em> — these come back in every public debate."
      },
      {
        tip: "<em>Il cuneo fiscale</em> (the tax wedge, the gap between what an employer pays and what the worker takes home) is one of the most repeated terms in Italian economic debate. Worth knowing: it comes up in every discussion about wages."
      }
    ],
    grammar: {
      title: "Economic vocabulary",
      table: {
        head: ["Italian", "English", "context"],
        rows: [
          ["il PIL", "GDP", "macroeconomics"],
          ["l'inflazione", "inflation", "prices"],
          ["la disoccupazione", "unemployment", "job market"],
          ["il potere d'acquisto", "purchasing power", "wages"],
          ["il precariato", "insecure work", "employment"],
          ["la fuga di cervelli", "brain drain", "emigration"],
          ["in calo / in aumento", "falling / rising", "figures"]
        ]
      },
      examples: [
        { tr: "Inflation is falling compared with last year." },
        { tr: "Youth unemployment remains a structural problem." },
        { tr: "Households' purchasing power has fallen." },
        { tr: "Many young graduates are leaving the country." },
        { tr: "The gap between North and South has widened." },
        { tr: "The decree was passed with amendments." }
      ]
    },
    vocab: [
      "GDP",
      "inflation",
      "public debt",
      "unemployment",
      "purchasing power",
      "insecure work",
      "brain drain",
      "gap, divide",
      "growth",
      "recovery",
      "decree",
      "year on year"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["GDP", "inflation", "unemployment", "gap"] },
      { q: "\"La fuga di cervelli\" is:", opts: ["a prison break", "the brain drain", "memory loss"] },
      { q: "Fill in: \"L'inflazione è in ___ rispetto allo scorso anno.\" (falling)" },
      { q: "Complete the nominalization: \"i prezzi crescono\" → \"la ___ dei prezzi\"" },
      {
        q: "\"Il precariato\" means:",
        opts: ["secure employment", "insecure work on short contracts", "retirement"]
      },
      { q: "Fill in.", tr: "Purchasing power has fallen and youth unemployment remains high." },
      { q: "\"The decree was passed with amendments.\"" },
      { tr: "The gap between North and South has widened." },
      { tr: "Year on year, GDP grew by zero point seven per cent." },
      { tr: "Youth unemployment remains a structural problem." }
    ]
  },
  "lesson:b2-u04-l2": {
    theme: "Society",
    title: "Environment and technology",
    objectives: [
      "talk about climate change and technology",
      "express concern and hope",
      "organize the arguments for and against"
    ],
    theory: [
      {
        h: "Two fields, one shape of debate",
        p: "Both climate and technology get discussed in Italian along a <em>rischi / opportunità</em> frame. The skeleton is worth having ready: <em>Da un lato ci sono rischi evidenti…, dall'altro le opportunità…</em>"
      },
      {
        h: "Concern and hope",
        list: [
          "concern: <em>temo che…</em>, <em>c'è il rischio che…</em>, <em>mi preoccupa il fatto che…</em> (congiuntivo)",
          "hope: <em>spero che…</em>, <em>confido nel fatto che…</em>, <em>sono ottimista sul…</em>",
          "caution: <em>bisogna vedere se…</em>, <em>dipenderà da…</em>"
        ]
      },
      {
        h: "The vocabulary that keeps coming back",
        p: "<em>la transizione ecologica</em>, <em>le energie rinnovabili</em>, <em>l'impronta di carbonio</em>, <em>la raccolta differenziata</em>, <em>l'intelligenza artificiale</em>, <em>la privacy</em>, <em>la disinformazione</em>, <em>l'automazione</em>."
      },
      {
        tip: "<em>Il fatto che</em> always pulls the congiuntivo: <em>Il fatto che <b>sia</b> difficile non significa che sia impossibile.</em>"
      }
    ],
    grammar: {
      title: "Debate: for and against",
      table: {
        head: ["function", "phrase", "mood"],
        rows: [
          ["concern", "Temo che / C'è il rischio che", "congiuntivo"],
          ["a fact as subject", "Il fatto che…", "congiuntivo"],
          ["hope", "Spero che / Confido che", "congiuntivo"],
          ["reservation", "Bisogna vedere se…", "indicativo"],
          ["dependence", "Dipenderà da…", "indicativo"],
          ["contrast", "Da un lato… dall'altro…", "—"]
        ]
      },
      examples: [
        { tr: "I'm afraid the transition is taking too long." },
        { tr: "The fact that it's hard doesn't mean it's impossible." },
        { tr: "There's a risk that automation will cut jobs." },
        { tr: "Renewables already cover a significant share." },
        { tr: "We'll have to see whether the rules get applied." },
        { tr: "I'm cautiously optimistic." }
      ]
    },
    vocab: [
      "the green transition",
      "renewable energy",
      "carbon footprint",
      "waste sorting, recycling",
      "waste",
      "artificial intelligence",
      "automation",
      "disinformation",
      "risk",
      "opportunity",
      "sustainable",
      "cautiously"
    ],
    exercises: [
      { q: "Fill in: \"Il fatto che ___ difficile non significa che sia impossibile.\" (essere)" },
      { q: "Fill in: \"C'è il rischio che l'automazione ___ i posti di lavoro.\" (ridurre)" },
      { q: "Match them up.", pairs: ["carbon footprint", "waste sorting", "waste", "sustainable"] },
      { q: "After \"il fatto che\" comes:", opts: ["indicativo", "congiuntivo", "the infinitive"] },
      {
        q: "\"Bisogna vedere se le norme verranno applicate\" expresses:",
        opts: ["certainty", "a cautious reservation", "concern"]
      },
      {
        q: "Complete the statement.",
        tr: "On one hand there are obvious risks, on the other the opportunities are real."
      },
      { q: "\"I'm afraid it's taking too long.\"" },
      { tr: "I'm cautiously optimistic about the future." },
      { tr: "The fact that technology keeps advancing doesn't solve the problem on its own." },
      { tr: "There's a risk that the transition will be too slow." }
    ]
  },
  "lesson:b2-u04-l3": {
    theme: "Communication",
    title: "Defending a position",
    objectives: ["build an extended argument", "answer a counterargument", "close a debate with a conclusion"],
    theory: [
      {
        h: "Three moves that make an argument work",
        list: [
          "<b>concession</b>: grant your opponent the point — <em>È vero che…</em>",
          "<b>the turn</b>: undercut its weight — <em>Tuttavia / Va però considerato che…</em>",
          "<b>evidence</b>: back it with figures or an example — <em>I dati mostrano che…</em>"
        ]
      },
      {
        h: "Answering a counterargument",
        p: "<em>Non credo che questo argomento regga</em>, <em>Mi sembra una generalizzazione</em>, <em>Questo vale in alcuni casi, non in tutti</em>, <em>Dipende da come si misura</em>. All of these attack the argument, not the person."
      },
      {
        h: "The tone of an Italian debate",
        p: "Italian debate can be loud and full of interruptions, but it rarely turns personal. The formula <em>con tutto il rispetto, non sono d'accordo</em> is a perfectly acceptable way to open a disagreement, and interrupting reads as engagement rather than rudeness."
      },
      {
        tip: "<em>Il punto è che…</em> (\"the point is that…\") is the most effective way to pull a discussion back to the heart of the matter when it starts drifting."
      }
    ],
    grammar: {
      title: "Advanced argument",
      table: {
        head: ["move", "formula", "English"],
        rows: [
          ["concession", "È vero che… / Concordo sul fatto che…", "It's true that…"],
          ["the turn", "Va però considerato che…", "It has to be taken into account, though, that…"],
          ["evidence", "I dati mostrano che…", "The figures show that…"],
          ["undercutting", "Mi sembra una generalizzazione.", "That strikes me as a generalization."],
          ["the heart of it", "Il punto è che…", "The point is that…"],
          ["conclusion", "Alla luce di quanto detto…", "In the light of what's been said…"]
        ]
      },
      examples: [
        {
          tr: "It's true that the costs are high, but the long-term savings have to be taken into account."
        },
        { tr: "The figures show the opposite trend." },
        { tr: "That holds in some cases, not as a general rule." },
        { tr: "The point is that we have no realistic alternatives." },
        { tr: "With all due respect, I don't agree." },
        { tr: "In the light of what's been said, I suggest revising the plan." }
      ]
    },
    vocab: [
      "to argue a case",
      "generalization",
      "to hold up (of an argument)",
      "to refute",
      "counterargument",
      "to agree on",
      "in the light of",
      "in the long term",
      "the point is that",
      "with all due respect",
      "to revise",
      "trend"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["to refute", "to hold up", "in the light of", "generalization"] },
      {
        q: "Which move strengthens an argument most?",
        opts: [
          "Restating your claim",
          "Granting your opponent the point before undercutting it",
          "Raising your voice"
        ]
      },
      { q: "Fill in: \"Va però ___ che i costi si ammortizzano.\" (taken into account)" },
      { q: "Fill in: \"Il ___ è che non abbiamo alternative.\"" },
      {
        q: "Build the argument.",
        tr: "It's true that the costs are high, but the long-term savings have to be taken into account."
      },
      { q: "\"That strikes me as a generalization.\"" },
      {
        q: "A debate in a meeting.",
        setting: "Team meeting, an argument about the budget.",
        lines: [
          { tr: "This investment is too expensive, full stop." },
          {
            tr: "Grant part of the point and bring in a counterargument.",
            answerTr: "It's true that the costs are high, but the long-term savings have to be taken into account."
          },
          { tr: "But everyone says projects like this fail." },
          {
            tr: "Undercut the generalization by citing the figures.",
            answerTr: "That strikes me as a generalization: the figures show the opposite."
          }
        ]
      },
      { tr: "In the light of what's been said, I suggest revising the plan." },
      { tr: "With all due respect, I don't think that argument holds up." },
      { tr: "The point is that we have no realistic alternatives." }
    ]
  },
  "lesson:b2-u04-test": {
    theme: "Exam",
    title: "Test — review of units 1-4",
    objectives: ["check the congiuntivo, conditionals, the passive and argument"],
    theory: [{ p: "Twelve tasks from the first four units. Pass mark 70%." }],
    exercises: [
      {  },
      { q: "\"Pensavo che ___ più semplice.\"" },
      { q: "\"Speravo che mi ___ chiamato.\"" },
      { q: "\"Se ___ tempo, verrei.\"", opts: ["ho", "avrei", "avessi"] },
      { q: "Type 3.", tr: "If I had studied, I would have passed the exam." },
      { q: "\"Il modulo ___ compilato in stampatello.\" (must be)" },
      { q: "Passato remoto of \"fare\", lui: ___" },
      { q: "Correct:", opts: ["Dopo mangiare", "Dopo aver mangiato", "Dopo mangiato"] },
      { q: "\"Il fatto che ___ difficile non significa niente.\" (essere)" },
      { q: "\"Parla come se ___ un esperto.\"" },
      { q: "\"It's true that the costs are high, but the savings have to be taken into account.\"" },
      { tr: "In the light of the figures, I think it's worth revising the plan." }
    ]
  }
});
