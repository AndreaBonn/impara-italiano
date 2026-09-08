/* ============================================================
   Learner-language text (en) for data/core/b1-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:b1-u01": { title: "The subjunctive", grammarNote: "congiuntivo presente and passato · expressing opinions" },
  "lesson:b1-u01-l1": {
    theme: "Grammar",
    title: "Forms and first uses",
    objectives: [
      "form the congiuntivo presente in all three conjugations",
      "know the most common irregulars",
      "recognize the situations that call for it"
    ],
    theory: [
      {
        h: "A mood English has all but lost",
        p: "The congiuntivo doesn't describe facts, it marks <b>the speaker's stance toward what follows</b>: opinion, doubt, will, emotion. <em>So che <b>è</b> bravo</em> (I know — a fact, indicativo) versus <em>Penso che <b>sia</b> bravo</em> (I think — an opinion, congiuntivo). English keeps only fossils of this (<em>I insist that he <b>be</b> on time</em>) and otherwise uses the plain present, so there is almost nothing to carry over: the Italian mood has to be learned as new machinery."
      },
      {
        h: "The endings",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "The first three persons are <b>identical</b>. That is why the subject pronoun <b>is not dropped</b> with the congiuntivo: <em>penso che <b>tu</b> abbia ragione</em>, or nobody knows who you mean. It is the one context where the personal pronoun is effectively obligatory in Italian."
      },
      {
        h: "Irregulars you have to know",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["person", "parlare", "prendere", "capire", "essere", "avere"],
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
        { tr: "I think you're right." },
        { tr: "I think it's too late." },
        { tr: "I'm not sure he's coming." },
        { tr: "I hope everything goes well." },
        { tr: "I want you to tell me the truth." },
        { tr: "I know he's good.", note: "certainty → indicativo" }
      ]
    },
    vocab: [
      "I think that…",
      "I believe that…",
      "it seems to me that…",
      "I hope that…",
      "I want … to",
      "I'm afraid that…",
      "I'm not sure that…",
      "I imagine that…",
      "it's possible that…",
      "it's necessary that…",
      "I know that… (indicativo)",
      "it's true that… (indicativo)"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "Why isn't the subject pronoun dropped with the congiuntivo?",
        opts: [
          "Because it's more polite",
          "Because the first three persons have the same form",
          "Because word order requires it"
        ]
      },
      { q: "Fill in: \"Penso che tu ___ ragione.\" (avere)" },
      { q: "Fill in: \"Credo che ___ troppo tardi.\" (essere)" },
      {
        q: "Which one takes the indicativo, not the congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere expresses certainty, so it goes with the indicativo."
      },
      {
        q: "Put in the congiuntivo forms.",
        tr: "I hope everything goes well and that you're all happy."
      },
      { q: "\"I want you to tell me the truth.\"" },
      { tr: "I think it's better to postpone the meeting." },
      { tr: "I think you're right on this point." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Grammar",
    title: "What triggers the subjunctive",
    objectives: [
      "recognize the expressions that require the congiuntivo",
      "know when to use di + infinitive instead of che",
      "avoid the congiuntivo where it doesn't belong"
    ],
    theory: [
      {
        h: "Four families of triggers",
        list: [
          "<b>opinion and supposition</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>will and feeling</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>impersonal</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>conjunctions</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        h: "Same subject: che disappears",
        p: "When both clauses share a subject, the congiuntivo gives way to <em>di</em> + infinitive. <em>Penso <b>di</b> avere ragione</em> (\"I think I'm right\"), not \"penso che io abbia\". The <em>che</em> version is grammatically possible but sounds wrong to a native ear."
      },
      {
        h: "Where the congiuntivo does NOT appear",
        p: "After expressions of certainty: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Watch <em>perché</em>: meaning \"because\" it takes the indicativo, meaning \"so that\" it takes the congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>)."
      },
      {
        contrast: "English flattens nearly all of these into the plain indicative: \"although it's late\", \"I hope he comes\", \"before he arrives\". Nothing in the English sentence tells you which Italian one needs the congiuntivo, so intuition transfers badly — the triggers have to be memorized as a list."
      }
    ],
    grammar: {
      title: "Congiuntivo or not",
      table: {
        head: ["expression", "mood", "example"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "indicativo", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (same subject)", "infinitive", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "indicativo", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        { tr: "Even though it's raining, we're going anyway." },
        { tr: "Although I'm tired, I keep working." },
        { tr: "I'll help you as long as you do your part." },
        { tr: "Leave before the traffic builds up." },
        { tr: "I'm thinking of leaving tomorrow.", note: "same subject → di + infinitive" },
        { tr: "Since it's late, I'll put it off until tomorrow.", note: "indicativo" }
      ]
    },
    vocab: [
      "although",
      "even though",
      "so that",
      "provided that",
      "unless",
      "before",
      "without",
      "as if",
      "it may be that",
      "since, seeing that",
      "it's clear that",
      "to hold, to consider"
    ],
    exercises: [
      { q: "\"Benché ___ tardi, esco.\" (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "\"Siccome ___ tardi, resto a casa.\" (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome states an actual cause → indicativo."
      },
      { q: "Fill in: \"Ti aiuto purché tu ___ la tua parte.\" (fare)" },
      { q: "Fill in: \"Spero ___ venire domani.\" (same subject)" },
      {
        q: "Which expressions require the congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Put in the right forms.",
        tr: "Although he's tired, he keeps working. I know he has a lot of patience."
      },
      { q: "\"Even though it's raining, we're going out anyway.\"" },
      {
        q: "\"Te lo dico perché tu capisca\" — why the congiuntivo?",
        opts: ["Because perché always takes it", "Because perché here means \"so that\", not \"because\"", "It's a mistake"]
      },
      { tr: "There may well be nobody in the office tomorrow." },
      { tr: "Even though it's hard, I think it's worth it." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Grammar",
    title: "The subjunctive for earlier events",
    objectives: [
      "form the congiuntivo passato",
      "choose between presente and passato",
      "use it to comment on the past"
    ],
    theory: [
      {
        h: "How it's built",
        p: "Congiuntivo presente of <em>avere/essere</em> + past participle: <em>abbia fatto</em>, <em>sia andato</em>. The rules for picking the auxiliary and for participle agreement are exactly the ones you already know from the passato prossimo."
      },
      {
        h: "Presente or passato",
        p: "With a main clause in the present: <b>presente</b> for something simultaneous or still to come (<em>penso che venga</em>), <b>passato</b> for something already over (<em>penso che sia venuto</em>)."
      },
      {
        h: "The most common context: commenting on the past",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> These come up constantly in conversation, so the congiuntivo passato pays off in fluency straight away."
      },
      {
        tip: "In casual speech Italians increasingly replace the congiuntivo with the indicativo (<em>penso che è vero</em>). It is widely criticized and sounds bad in writing and at work. Learn the correct form."
      }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["main clause", "relation", "mood", "example"],
        rows: [
          ["presente", "simultaneous", "cong. presente", "Penso che stia bene."],
          ["presente", "future", "cong. presente", "Penso che venga domani."],
          ["presente", "earlier", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "with essere", "agreement", "Credo che sia partita."],
          ["—", "with avere", "no agreement", "Credo che abbia parlato."],
          ["—", "with a pronoun", "agreement", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        { tr: "I'm sorry you couldn't come." },
        { tr: "I don't think they did it on purpose." },
        { tr: "It's odd that he didn't answer." },
        { tr: "It seems they've already left." },
        { tr: "I hope you had a good time." },
        { tr: "I'm afraid we took the wrong road." }
      ]
    },
    vocab: [
      "I'm sorry that",
      "it's odd that",
      "it seems that",
      "it appears that",
      "I get the impression that",
      "on purpose",
      "by mistake",
      "to take the wrong road",
      "to notice",
      "to realize",
      "apparently",
      "in fact"
    ],
    exercises: [
      { q: "Fill in: \"Penso che ___ già partito.\" (essere, he)" },
      { q: "Fill in: \"Non credo che ___ capito.\" (avere, they)" },
      {
        q: "\"Penso che venga domani\" versus \"Penso che sia venuto ieri\" — what's the difference?",
        opts: ["None", "The first is about the future, the second about something earlier", "The second one is wrong"]
      },
      { q: "Put in the congiuntivo passato.", tr: "I'm sorry you couldn't come and that you missed the party." },
      { q: "\"I don't think they did it on purpose.\"" },
      {
        q: "\"Credo che sia partita\" — why \"partita\" and not \"partito\"?",
        opts: ["It's a mistake", "Because essere makes the participle agree with the subject", "Because it sounds better"]
      },
      { q: "Match them up.", pairs: ["apparently", "on purpose", "by mistake", "to realize"] },
      { tr: "It seems they've already left." },
      { tr: "It's odd that he hasn't answered the message yet." },
      { tr: "I hope you had a good time at the party." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Communication",
    title: "Giving and weighing opinions",
    objectives: [
      "state an opinion in conversation",
      "agree in part and disagree",
      "use the congiuntivo in real discussion"
    ],
    theory: [
      {
        h: "Three strengths of opinion",
        list: [
          "soft: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutral: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "strong: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (indicativo!)"
        ]
      },
      {
        h: "Disagreeing without a fight",
        p: "Italian conversation tolerates disagreement but cares how it's packaged. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. A bare <em>no</em> closes the conversation."
      },
      {
        h: "Discourse markers",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. They add no content, but without them you sound like you're reading aloud. <em>Anzi</em> earns its place: it either strengthens what you just said or corrects it (\"in fact\", \"on the contrary\")."
      },
      {
        tip: "<em>Dipende</em> is the most Italian answer to a hard question. Expand it: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
    ],
    grammar: {
      title: "The language of opinion",
      table: {
        head: ["function", "phrase", "mood after che"],
        rows: [
          ["opinion", "Secondo me / A mio parere", "—"],
          ["opinion", "Penso / credo / ritengo che", "congiuntivo"],
          ["certainty", "Sono sicuro / è evidente che", "indicativo"],
          ["partial agreement", "Da un lato… dall'altro…", "—"],
          ["disagreement", "Non sono d'accordo, perché…", "indicativo"],
          ["correction", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        { tr: "In my view the problem is a different one." },
        { tr: "I get the impression we're not understanding each other." },
        { tr: "On one hand you're right, on the other you're overstating it." },
        { tr: "I don't entirely agree with that reading." },
        { tr: "In fact, I'd say the opposite." },
        { tr: "It depends what you mean by \"effective\"." }
      ]
    },
    vocab: [
      "in my view",
      "in my opinion",
      "I hold that",
      "I'm convinced that",
      "on one hand… on the other",
      "not entirely",
      "in fact; on the contrary",
      "exactly",
      "in short",
      "it depends",
      "to overstate, to exaggerate",
      "to see someone's point"
    ],
    exercises: [
      {
        q: "\"Sono sicuro che ___ vero.\" (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Certainty → indicativo."
      },
      { q: "Fill in: \"Ritengo che questa soluzione ___ migliore.\" (essere)" },
      { q: "What does \"anzi\" mean?", opts: ["therefore", "in fact / on the contrary", "earlier"] },
      { q: "Match them up.", pairs: ["exactly", "in short", "it depends", "to overstate"] },
      { q: "\"I don't entirely agree with that opinion.\"" },
      {
        q: "Complete the exchange.",
        tr: "In my view the problem is a different one. I get the impression we're not understanding each other."
      },
      {
        q: "A discussion about remote work.",
        setting: "Dinner at friends' place, the talk turns to work.",
        lines: [
          { tr: "In my view remote work has ruined teamwork." },
          {
            tr: "Agree in part and add a counterpoint.",
            answerTr: "On one hand you're right, on the other it has cut stress."
          },
          { tr: "Yes, but younger people learn less." },
          {
            tr: "Answer that it depends on how the company is organized.",
            answerTr: "It depends on how the company organizes the work."
          }
        ]
      },
      { tr: "In fact, I'd say the exact opposite." },
      { tr: "On one hand it's true, on the other it strikes me as an oversimplification." },
      { tr: "In my view it depends a lot on the context." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check the congiuntivo presente and passato and the triggers"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      {  },
      {  },
      { q: "\"Penso che tu ___ ragione.\"" },
      { q: "\"Benché ___ tardi, esco.\"" },
      { q: "\"Siccome ___ tardi, resto.\"", opts: ["è", "sia", "fosse"] },
      { q: "\"Spero ___ venire domani.\" (same subject)" },
      { q: "\"Non credo che ___ capito.\" (avere, they)" },
      { q: "Which ones require the congiuntivo?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "It seems to me they haven't understood the problem." },
      { tr: "I think it's better to talk about it tomorrow." }
    ]
  },
  "unit:b1-u02": { title: "Combined pronouns", grammarNote: "me lo, glielo, ce ne · ci and ne in full" },
  "lesson:b1-u02-l1": {
    theme: "Grammar",
    title: "Putting two pronouns together",
    objectives: [
      "combine an indirect pronoun with a direct one",
      "remember the -i to -e change",
      "use the construction in conversation"
    ],
    theory: [
      {
        h: "Order: the indirect one first",
        p: "When two pronouns meet, the <b>indirect one comes first</b> and its <em>-i</em> turns into <em>-e</em>: <em>mi + lo → <b>me lo</b></em>. English does it the other way round: \"give it to me\" puts the direct object first, Italian says <em>me lo dai</em>."
      },
      {
        h: "Gli and le merge into glie-",
        p: "\"To him\", \"to her\" and \"to them\" all give <strong>glie-</strong>, written <b>as one word</b> with the second pronoun: <em>glielo, gliela, glieli, gliele, gliene</em>. One form covers three persons, so the context has to make it clear."
      },
      {
        h: "With an infinitive or an imperative they attach together",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. The whole pair sticks to the end of the verb."
      },
      {
        trap: "In compound tenses the participle agrees with the <b>direct</b> pronoun, pairs included: <em>Me l'ha data</em> (she gave it to me), <em>Gliele ho mandate</em> (I sent them to him)."
      }
    ],
    grammar: {
      title: "Combined pronoun table",
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
        { tr: "Will you lend me the car? — Yes, I'll lend it to you." },
        { tr: "Did you give the book to Marco? — Yes, I gave it to him." },
        { tr: "Will you explain it to us again?" },
        { tr: "How many emails did he send you? — He sent me three." },
        { tr: "Can you explain it to me?" },
        { tr: "Give it to me, please." }
      ]
    },
    vocab: [
      "to lend",
      "to give back",
      "to explain",
      "to send",
      "to bring, to take",
      "to give as a present",
      "to deliver, to hand in",
      "to borrow",
      "again",
      "right away",
      "as soon as possible",
      "let me know"
    ],
    exercises: [
      {
        q: "\"Mi dai il libro?\" → the answer with pronouns:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Fill in: \"Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      {
        q: "Fill in: \"Ci spieghi la regola? — Sì, ___ spiego.\"",
        why: "The answer is addressed to you (plural): ve la spiego."
      },
      { q: "How is \"gli + lo\" written?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Replace the nouns with pronouns.",
        tr: "— Will you lend me the car? — Yes, I'll happily lend it to you. — And the keys? — I'll give them to you right away."
      },
      { q: "\"Can you explain it to me?\"" },
      { q: "Complete the ending: \"Me l'ha dat___.\" (she gave it to me — la macchina)" },
      { tr: "I'll send them to you tomorrow." },
      { tr: "I explained it to him three times, but he didn't get it." },
      { tr: "Can you explain it to me again, please?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Grammar",
    title: "Ci and ne in full",
    objectives: [
      "recognize every value of ci and ne",
      "use the verbs they are fused into",
      "understand phrases like non ce la faccio"
    ],
    theory: [
      {
        h: "CI: four values",
        list: [
          "place: <em>A Roma ci vado spesso.</em>",
          "<em>a + thing</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "fused verbs: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE: three values",
        list: [
          "part of a whole: <em>Ne voglio due.</em>",
          "<em>di + thing</em>: <em>Ne parliamo domani.</em>",
          "fused verbs: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        h: "Verbs you can't translate word for word",
        p: "<em>Ci vogliono due ore</em> (\"it takes two hours\"), <em>Ci metto un'ora</em> (\"it takes me an hour\"), <em>Non ce la faccio</em> (\"I can't manage\"), <em>Ci tengo</em> (\"it matters to me\"), <em>Me ne vado</em> (\"I'm off\"), <em>Non me ne intendo</em> (\"I don't know much about it\")."
      },
      {
        trap: "<em>Volerci</em> and <em>metterci</em> are not synonyms. <em>Ci vogliono due ore</em> is about objective time; <em>ci metto due ore</em> is about how long it takes <b>me</b>."
      }
    ],
    grammar: {
      title: "Verbs with ci and ne",
      table: {
        head: ["verb", "meaning", "example"],
        rows: [
          ["volerci", "to take, to be needed", "Ci vuole pazienza."],
          ["metterci", "to take (someone) time", "Ci metto venti minuti."],
          ["farcela", "to manage", "Non ce la faccio più."],
          ["tenerci", "to care about", "Ci tengo molto."],
          ["andarsene", "to leave, to be off", "Me ne vado adesso."],
          ["fregarsene", "not to give a damn", "Se ne frega di tutto."],
          ["intendersene", "to know about", "Non me ne intendo."],
          ["entrarci", "to have to do with", "Che c'entra?"]
        ]
      },
      examples: [
        { tr: "Italian bureaucracy takes patience." },
        { tr: "How long does it take you to get from home to work?" },
        { tr: "I can't manage to finish by tonight." },
        { tr: "It matters to me that you come.", note: "+ congiuntivo" },
        { tr: "I'm off, it's late." },
        { tr: "I know nothing at all about wine." }
      ]
    },
    vocab: [
      "to take, to be needed",
      "to take (someone) time",
      "to manage",
      "to care about",
      "to leave, to be off",
      "not to give a damn",
      "to know about",
      "to have to do with",
      "to have it in for",
      "patience",
      "effort, commitment",
      "the time it takes"
    ],
    exercises: [
      {
        q: "\"Ci vogliono due ore\" means:",
        opts: ["We want two hours", "It takes two hours", "It takes me two hours"]
      },
      {
        q: "\"Ci metto due ore\" means:",
        opts: ["It takes two hours in general", "It takes me two hours", "I'm putting it down for two hours"]
      },
      { q: "Fill in: \"Non ___ la faccio più.\" (I can't manage any more)" },
      { q: "Fill in: \"Me ___ vado, è tardi.\"" },
      { q: "Match them up.", pairs: ["to care about", "to know about", "to have to do with", "not to give a damn"] },
      { q: "Fill in.", tr: "How long does it take you to get there? — It takes twenty minutes by metro." },
      { q: "\"I don't know anything about wine.\"" },
      {
        q: "\"Ci tengo che tu venga\" — why the congiuntivo?",
        opts: ["Because tenerci expresses will and feeling", "It's a mistake", "Because ci requires it"]
      },
      { tr: "It takes a lot of patience, but in the end we manage." },
      { tr: "I can't manage to finish everything today." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Grammar",
    title: "Relative clauses",
    objectives: [
      "use che, cui and il quale",
      "join two sentences into one",
      "express possession with cui plus an article"
    ],
    theory: [
      {
        h: "Che does most of the work",
        p: "<strong>Che</strong> is invariable and stands in for the subject or the direct object: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. It cannot follow a preposition."
      },
      {
        h: "Cui after a preposition",
        p: "When a preposition is needed, <em>che</em> gives way to <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>. English can drop the relative and strand the preposition (\"the city I live in\"); Italian can do neither."
      },
      {
        h: "Cui with an article = possession",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> (\"the boy whose mother is a doctor\"). The article agrees with the thing possessed, not the possessor — exactly as with possessive adjectives."
      },
      {
        h: "Il quale — the formal variant",
        p: "<em>il quale, la quale, i quali, le quali</em> replaces <em>che</em> and <em>cui</em> in written register. It earns its keep when ambiguity has to go: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> points clearly at the sister, not at Marco."
      }
    ],
    grammar: {
      title: "Relative pronouns",
      table: {
        head: ["form", "function", "example"],
        rows: [
          ["che", "subject / direct object", "Il film che ho visto."],
          ["a cui", "indirect object", "La persona a cui ho scritto."],
          ["in cui", "place, time", "L'anno in cui sono nato."],
          ["di cui", "about which", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "possession", "L'autore il cui libro è famoso."],
          ["il quale", "formal variant", "Il collega, il quale lavora qui."],
          ["chi", "the one who", "Chi cerca trova."]
        ]
      },
      examples: [
        { tr: "The book I'm reading is wonderful." },
        { tr: "The city I grew up in is small." },
        { tr: "The reason I'm writing is simple." },
        { tr: "The colleague whose daughter studies in Rome." },
        { tr: "The early bird catches the worm.", note: "proverb" },
        { tr: "This is the thing I was telling you about." }
      ]
    },
    vocab: [
      "that, which, who (subject/object)",
      "which (after a preposition)",
      "which (formal)",
      "the one who",
      "the reason",
      "to grow, to grow up",
      "the author",
      "the thing which",
      "the period",
      "the era",
      "thanks to which",
      "in case"
    ],
    exercises: [
      { q: "Fill in: \"Il libro ___ ho letto è bellissimo.\"" },
      { q: "Fill in: \"La città in ___ vivo è piccola.\"" },
      { q: "Fill in: \"La persona a ___ ho scritto non risponde.\"" },
      {
        q: "\"Il ragazzo la cui madre è medico\" — what does \"la\" agree with?",
        opts: ["With the boy", "With the mother (the thing possessed)", "With nothing"]
      },
      {
        q: "Which sentence is wrong?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Che cannot follow a preposition."
      },
      {
        q: "Fill in the relative pronouns.",
        tr: "The colleague who works with me is the person I owe everything to."
      },
      { q: "\"The reason I'm writing is simple.\"" },
      { tr: "This is the thing I was telling you about." },
      { tr: "The year I arrived in Italy was the hardest one." },
      { tr: "The city I grew up in is very small." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Grammar",
    title: "Indefinite pronouns and adjectives",
    objectives: [
      "use qualche, alcuni, ogni, ciascuno",
      "tell nessuno from niente",
      "build a double-negative sentence"
    ],
    theory: [
      {
        h: "Qualche always takes the singular",
        p: "<em><b>qualche</b> giorno</em> (\"a few days\") — the meaning is plural but the noun stays singular. Its synonym <em>alcuni/alcune</em> works the other way: <em>alcuni giorni</em>. It's a trap because English uses \"a few days\" for both."
      },
      {
        h: "Ogni and ciascuno",
        p: "<em>Ogni</em> is invariable and always singular: <em>ogni giorno</em>. <em>Ciascuno</em> inflects like the indefinite article and stresses one item at a time: <em>ciascuno studente</em>."
      },
      {
        h: "Negatives",
        p: "<em>Nessuno</em> (nobody / no), <em>niente / nulla</em> (nothing), <em>nemmeno / neanche</em> (not even). <b>After</b> the verb they need <em>non</em>: <em>non c'è <b>nessuno</b></em>. Before the verb <em>non</em> disappears: <em><b>Nessuno</b> è venuto.</em> The double negative is required here, not sloppy."
      },
      {
        tip: "<em>Qualcosa</em> takes an adjective through <em>di</em>: <em>qualcosa <b>di</b> bello</em>. Same for <em>niente di grave</em>, and <em>qualcosa da mangiare</em> with an infinitive through <em>da</em>."
      }
    ],
    grammar: {
      title: "Indefinites",
      table: {
        head: ["form", "syntax", "example"],
        rows: [
          ["qualche", "+ singular", "qualche giorno fa"],
          ["alcuni / alcune", "+ plural", "alcuni amici"],
          ["ogni", "invariable + singular", "ogni settimana"],
          ["ciascuno", "inflected, singular", "ciascuna proposta"],
          ["qualcuno / nessuno", "about people", "Non c'è nessuno."],
          ["qualcosa / niente", "about things", "qualcosa di nuovo"]
        ]
      },
      examples: [
        { tr: "See you in a few days." },
        { tr: "Some colleagues don't agree." },
        { tr: "It's the same story every time." },
        { tr: "I didn't see anybody in the office." },
        { tr: "Nobody told me.", note: "before the verb: no non" },
        { tr: "Do you want something to drink?" }
      ]
    },
    vocab: [
      "a few (+ singular)",
      "some, a few",
      "every",
      "each one",
      "somebody",
      "nobody, no",
      "something",
      "nothing",
      "anybody",
      "anywhere",
      "not even",
      "to let know, to warn"
    ],
    exercises: [
      {
        q: "Which combination is right?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche always takes the singular."
      },
      { q: "And here?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Fill in: \"Non c'è ___ in ufficio.\" (nobody)" },
      { q: "Fill in: \"___ mi ha avvisato.\" (nobody) — at the start of the sentence" },
      { q: "Fill in: \"Vuoi qualcosa ___ bere?\"" },
      { q: "Fill in: \"Ho sentito qualcosa ___ strano.\"" },
      {
        q: "Which sentences are correct?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Fill in.", tr: "Every time I call, nobody answers." },
      { tr: "Some colleagues don't agree, but nobody says it openly." },
      { tr: "See you in a few days, I'll write to you." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check combined pronouns, ci/ne, relative clauses and indefinites"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      { q: "\"Mi dai il libro?\" →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "\"Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      { q: "\"Non ___ la faccio più.\"" },
      { q: "\"Me ___ vado.\"" },
      { q: "\"La città in ___ vivo.\"" },
      { q: "\"Il libro ___ ho letto.\"" },
      { q: "Correct:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "\"Vuoi qualcosa ___ mangiare?\"" },
      { tr: "I explained it to him, but it takes time to understand." },
      { tr: "I'll send it to you as soon as I can, I can't manage right now." }
    ]
  },
  "unit:b1-u03": {
    title: "Italian bureaucracy",
    grammarNote: "official language · documents · formal requests"
  },
  "lesson:b1-u03-l1": {
    theme: "Life in Italy",
    title: "The basic documents",
    objectives: [
      "understand what the codice fiscale and the residenza are for",
      "ask for a document to be issued",
      "fill in a simple form"
    ],
    theory: [
      {
        h: "The codice fiscale opens everything",
        p: "<strong>Il codice fiscale</strong> is a sixteen-character tax identity code generated from your first name, surname, date and place of birth. Without it you can't open a bank account, sign a lease, buy a SIM card or register with a doctor. The <em>Agenzia delle Entrate</em> issues it on the spot, free of charge."
      },
      {
        h: "Residenza is not an address",
        p: "<strong>La residenza</strong> is formal registration with the town hall (<em>comune</em>). Access to a family doctor, a driving licence, benefits and a long list of discounts depends on it. Once you file, <em>il vigile</em> (a municipal officer) comes round to check that you really live there."
      },
      {
        h: "Three words you'll hear at every counter",
        list: [
          "<em>la marca da bollo</em> — a duty stamp, bought at a tobacconist's (<em>tabaccheria</em>) and stuck on the application",
          "<em>l'autocertificazione</em> — a self-declaration in place of a certificate; it is legally binding",
          "<em>l'appuntamento</em> — many offices won't let you through the door without an online appointment"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> is not just a cigarette shop: you can buy duty stamps, transit tickets and phone credit there, and pay some bills."
      }
    ],
    grammar: {
      title: "Official language",
      table: {
        head: ["formula", "meaning", "where"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "the undersigned", "applications"],
          ["Si prega di…", "you are kindly asked to…", "instructions"],
          ["Ai sensi dell'art. …", "under article …", "regulations"],
          ["In allegato", "attached", "forms"],
          ["Entro e non oltre", "no later than", "deadlines"],
          ["Rilasciare / rilascio", "to issue / issuance", "documents"]
        ]
      },
      examples: [
        { tr: "I'd like to apply for a codice fiscale." },
        { tr: "I need to register as a resident in this comune." },
        { tr: "You need a sixteen-euro duty stamp." },
        { tr: "I already booked an appointment online." },
        { tr: "The document is issued on the spot." },
        { tr: "Please fill in the form in block capitals." }
      ]
    },
    vocab: [
      "tax identification code",
      "official residence",
      "town hall, municipality",
      "registry office",
      "form",
      "duty stamp",
      "self-declaration",
      "to issue (a document)",
      "counter, window",
      "in block capitals",
      "health insurance card",
      "residence permit"
    ],
    culture: {
      title: "Through Italian eyes: surviving a public office",
      text: "<p>Rule one: <b>always bring more documents than the website lists</b>. Different counters read the requirements differently.</p><p>Rule two: <b>the autocertificazione is your friend</b>. The law lets you replace many certificates with a self-declaration, and the clerk is obliged to accept it. Worth knowing, because nobody volunteers it.</p><p>Rule three: <b>write down the name of the clerk</b> who dealt with you. On the next visit it lets you reconstruct the history of your case.</p>"
    },
    exercises: [
      {
        q: "What is the codice fiscale for?",
        opts: [
          "Taxes only",
          "Almost every formality: bank account, contract, doctor",
          "It's the phone number of the tax office"
        ]
      },
      { q: "Where do you buy a marca da bollo?", opts: ["At the town hall", "At a tabaccheria", "At the bank"] },
      { q: "Fill in: \"Vorrei ___ il codice fiscale.\" (to apply for)" },
      { q: "Fill in: \"Compili il modulo in ___.\" (block capitals)" },
      { q: "Match them up.", pairs: ["registry office", "counter", "to issue", "form"] },
      {
        q: "What is an \"autocertificazione\"?",
        opts: [
          "A certificate issued by the office",
          "A self-declaration with legal force",
          "A notarized statement"
        ]
      },
      { q: "\"I need to register as a resident in this comune.\"" },
      {
        q: "Complete the request at the counter.",
        tr: "Good morning, I'd like to apply for a codice fiscale. I already booked an appointment online."
      },
      { tr: "You need a sixteen-euro duty stamp and a copy of your ID." },
      { tr: "I'd like to apply for a codice fiscale, I have my passport." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Life in Italy",
    title: "Banks and contracts",
    objectives: [
      "open a bank account",
      "understand the basic terms of a contract",
      "ask about costs and conditions"
    ],
    theory: [
      {
        h: "The account and what it costs",
        p: "<em>Il conto corrente</em> normally carries <em>il canone mensile</em> (a monthly fee), which free American checking accounts have trained people not to expect. A transfer is <strong>il bonifico</strong> and the account number is the <strong>IBAN</strong>. <em>Il bancomat</em> means both the ATM and the debit card."
      },
      {
        h: "The contract: words you have to understand",
        list: [
          "<em>le condizioni</em> — terms; <em>la clausola</em> — clause",
          "<em>il recesso</em> — withdrawal; <em>la disdetta</em> — cancellation",
          "<em>la scadenza</em> — expiry; <em>il rinnovo automatico</em> — automatic renewal",
          "<em>le spese di gestione</em> — management fees"
        ]
      },
      {
        h: "Questions worth asking",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. Automatic renewal is very common in Italian contracts and has to be stopped with advance notice."
      },
      {
        tip: "When you sign, the clerk may ask you to initial every page (<em>siglare</em>) and to sign a second time under the clauses (<em>doppia firma</em>). That's standard, not a warning sign."
      }
    ],
    grammar: {
      title: "Bank and contract",
      table: {
        head: ["Italian", "English", "context"],
        rows: [
          ["il conto corrente", "checking account", "bank"],
          ["il canone mensile", "monthly fee", "bank, phone"],
          ["il bonifico", "bank transfer", "payments"],
          ["la disdetta", "cancellation", "contract"],
          ["il rinnovo automatico", "automatic renewal", "contract"],
          ["il vincolo", "lock-in, commitment", "contract"]
        ]
      },
      examples: [
        { tr: "I'd like to open a checking account." },
        { tr: "How much is the monthly fee?" },
        { tr: "I need to make an international transfer." },
        { tr: "Is there a minimum term?" },
        { tr: "How can I cancel the contract?" },
        { tr: "It renews automatically unless I cancel." }
      ]
    },
    vocab: [
      "checking account",
      "bank transfer",
      "account number",
      "ATM, debit card",
      "subscription fee",
      "commission, fee",
      "contract",
      "clause",
      "cancellation",
      "advance notice",
      "to sign",
      "lock-in, commitment"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["bank transfer", "cancellation", "subscription fee", "commission"] },
      {
        q: "\"Rinnovo automatico salvo disdetta\" means:",
        opts: [
          "The contract ends automatically",
          "The contract renews unless you cancel it",
          "The contract cannot be renewed"
        ]
      },
      { q: "Fill in: \"Vorrei aprire un ___ corrente.\"" },
      { q: "Fill in: \"C'è un ___ di durata?\" (minimum term)" },
      { q: "\"How can I cancel the contract?\"" },
      {
        q: "At the bank.",
        setting: "An adviser's desk, appointment booked.",
        lines: [
          { tr: "Good morning, how can I help you?" },
          { tr: "Say you want to open an account.", answerTr: "I'd like to open a checking account." },
          { tr: "Of course. Do you have a codice fiscale and an ID?" },
          { tr: "Confirm and ask about the monthly fee.", answerTr: "Yes. How much is the monthly fee?" },
          { tr: "Four euros a month, free if you're under thirty." }
        ]
      },
      {
        q: "Complete the questions to the adviser.",
        tr: "What are the fees on transfers? And is the renewal automatic?"
      },
      { tr: "I need to make an international transfer." },
      { tr: "The fee is four euros a month, card included." },
      { tr: "I'd like to know whether there's a minimum term." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Life in Italy",
    title: "Complaints and rights",
    objectives: [
      "make a complaint in person and in writing",
      "cite the contract or the law",
      "escalate politely but firmly"
    ],
    theory: [
      {
        h: "What makes a complaint work",
        p: "An Italian complaint works best when it carries four things: <b>facts with dates</b>, <b>a reference to the contract or the law</b>, <b>a specific demand</b> and <b>a deadline</b>. Emotion weakens it, specifics strengthen it."
      },
      {
        h: "Written formulas",
        list: [
          "<em>Con la presente segnalo che…</em> — I hereby report that…",
          "<em>Come da contratto…</em> — as per the contract…",
          "<em>Chiedo pertanto…</em> — I therefore request…",
          "<em>In mancanza di riscontro entro X giorni…</em> — failing a reply within X days…"
        ]
      },
      {
        h: "Escalation tools",
        p: "<em>Raccomandata A/R</em> (registered letter with return receipt) and <strong>PEC</strong> (<em>posta elettronica certificata</em>, email carrying the legal weight of a registered letter) are the standard next steps. Consumer bodies: <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "The line <em>Mi riservo di adire le vie legali</em> (\"I reserve the right to take legal action\") is strong but completely conventional as a closing. It doesn't read as aggressive in Italian."
      }
    ],
    grammar: {
      title: "The language of complaints",
      table: {
        head: ["function", "phrase", "English"],
        rows: [
          ["report", "Con la presente segnalo che…", "I hereby report that…"],
          ["grounds", "Come da contratto / ai sensi di legge", "As per the contract / under the law"],
          ["demand", "Chiedo il rimborso / la sostituzione.", "I request a refund / a replacement."],
          ["deadline", "entro quindici giorni", "within fifteen days"],
          ["escalation", "Mi riservo di adire le vie legali.", "I reserve the right to take legal action."],
          ["in person", "Vorrei parlare con un responsabile.", "I'd like to speak to a manager."]
        ]
      },
      examples: [
        { tr: "The product arrived damaged." },
        { tr: "I'd like to file a complaint." },
        { tr: "I'm entitled to a refund within fourteen days." },
        { tr: "As per the contract, the service was due to be active from the first." },
        { tr: "I'm sending you the documentation attached." },
        { tr: "I look forward to your reply." }
      ]
    },
    vocab: [
      "complaint",
      "to file a complaint",
      "refund",
      "replacement",
      "damaged",
      "faulty",
      "warranty",
      "manager, person in charge",
      "registered letter",
      "reply, response",
      "to be entitled to",
      "therefore"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["refund", "faulty", "warranty", "reply"] },
      { q: "Fill in: \"Vorrei ___ un reclamo.\"" },
      { q: "Fill in: \"Ho ___ al rimborso.\" (I'm entitled to)" },
      {
        q: "What is PEC?",
        opts: ["A kind of bank transfer", "Email with the legal weight of a registered letter", "An ID number"]
      },
      { q: "\"The product arrived damaged, I'm asking for a refund.\"" },
      {
        q: "Complete the letter.",
        tr: "I hereby report that the service is not working. As per the contract, I request a refund within fifteen days."
      },
      { tr: "I'd like to speak to a manager." },
      {
        q: "Which element strengthens an Italian complaint most?",
        opts: [
          "Showing how angry you are",
          "Dates, a reference to the contract and a specific demand",
          "Repeating the request three times"
        ]
      },
      { tr: "As per the contract, the service was due to be active from the first of the month." },
      { tr: "I'd like to file a complaint: the product is faulty." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Life in Italy",
    title: "Work and types of contract",
    objectives: [
      "understand Italian employment contracts",
      "talk about working conditions",
      "ask about pay and holiday"
    ],
    theory: [
      {
        h: "Types of contract",
        list: [
          "<b>tempo indeterminato</b> — permanent, the one everyone wants",
          "<b>tempo determinato</b> — fixed-term, with limits on how often it can be renewed",
          "<b>partita IVA</b> — self-employment; you invoice and pay your own contributions",
          "<b>apprendistato / tirocinio</b> — apprenticeship or internship, usually for younger workers"
        ]
      },
      {
        h: "Pay: net, gross and the thirteenth",
        p: "Italians talk about pay as a <b>monthly net figure</b> and as <em>RAL</em> (<em>retribuzione annua lorda</em>, annual gross). On top comes <strong>la tredicesima</strong>, a thirteenth salary paid in December, and in some sectors <em>la quattordicesima</em> in July."
      },
      {
        h: "Holiday and time off",
        p: "<em>Le ferie</em> is paid holiday (usually 26 working days), <em>i permessi</em> are hours off, <em>la malattia</em> is sick leave. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) is the sector-wide collective agreement that sets the minimum terms."
      },
      {
        tip: "Asking <em>Qual è la RAL prevista?</em> in a job interview is completely normal and expected. It is not rude."
      }
    ],
    grammar: {
      title: "Work and pay",
      table: {
        head: ["Italian", "English", "note"],
        rows: [
          ["tempo indeterminato", "permanent contract", "the most stable"],
          ["tempo determinato", "fixed-term contract", "with an end date"],
          ["partita IVA", "self-employment", "your own contributions"],
          ["la tredicesima", "thirteenth salary", "paid in December"],
          ["le ferie", "paid holiday", "working days"],
          ["il CCNL", "sector collective agreement", "minimum terms"]
        ]
      },
      examples: [
        { tr: "I have a permanent contract." },
        { tr: "I've been self-employed for three years." },
        { tr: "What's the annual gross for this position?" },
        { tr: "How many days of holiday are there?" },
        { tr: "The probation period is three months." },
        { tr: "I'm asking for time off for personal reasons." }
      ]
    },
    vocab: [
      "permanent contract",
      "self-employment",
      "net salary",
      "annual gross salary",
      "thirteenth salary",
      "paid holiday",
      "time off",
      "probation period",
      "job interview",
      "résumé, CV",
      "to hire",
      "to resign"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["permanent", "thirteenth salary", "paid holiday", "probation period"] },
      { q: "What is RAL?", opts: ["Monthly net pay", "Annual gross pay", "A type of contract"] },
      { q: "Who pays the contributions with a partita IVA?", opts: ["The employer", "The worker", "Nobody"] },
      { q: "Fill in: \"Il ___ di prova è di tre mesi.\"" },
      { q: "\"How many days of holiday are there?\"" },
      {
        q: "Complete the interview questions.",
        tr: "What's the annual gross on offer? And how long is the probation period?"
      },
      { q: "\"Licenziarsi\" means:", opts: ["to fire somebody", "to resign", "to get a raise"] },
      { tr: "I've had a permanent contract for two years." },
      { tr: "The thirteenth salary is paid in December along with the monthly pay." },
      { tr: "I'd like to know what the annual gross is for this position." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Test",
    title: "Unit 3 test",
    objectives: ["check office, banking and workplace vocabulary"],
    theory: [{ p: "Ten tasks. Pass mark 70%." }],
    exercises: [
      {
        q: "The codice fiscale is used for:",
        opts: ["taxes only", "almost every formality", "travelling"]
      },
      { q: "You buy a marca da bollo at:", opts: ["the town hall", "a tabaccheria", "the bank"] },
      { q: "\"Compili il modulo in ___.\"" },
      { q: "\"Vorrei aprire un ___ corrente.\"" },
      { q: "\"Vorrei ___ un reclamo.\"" },
      { q: "\"Ho ___ al rimborso.\"" },
      { q: "RAL is:", opts: ["monthly net", "annual gross", "the thirteenth salary"] },
      { q: "Match them up.", pairs: ["cancellation", "bank transfer", "paid holiday", "registry office"] },
      { tr: "To register as a resident you need an ID and a rental contract." },
      { tr: "I'd like to apply for a codice fiscale and register as a resident." }
    ]
  },
  "unit:b1-u04": { title: "Media and argument", grammarNote: "reported speech · connectives · the language of the press" },
  "lesson:b1-u04-l1": {
    theme: "Media",
    title: "Reported speech",
    objectives: [
      "turn an utterance into reported speech",
      "shift the tenses correctly",
      "change the words for time and place"
    ],
    theory: [
      {
        h: "The tense shift",
        p: "When the reporting verb is in the past, the tenses of the quoted words step back one: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>."
      },
      {
        trap: "The commonest English-speaker mistake: the future in the past. \"He said he would come\" is <em>Ha detto che <b>sarebbe venuto</b></em>, not \"che verrebbe\". English \"would\" looks like the present conditional, but Italian needs the <b>past</b> conditional here."
      },
      {
        h: "The time and place words change too",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Without this the report sounds incoherent."
      },
      {
        h: "Orders and questions",
        p: "An imperative turns into <em>di</em> + infinitive: <em>\"Vieni!\" → Mi ha detto di venire.</em> A yes/no question takes <em>se</em>: <em>\"Vieni?\" → Mi ha chiesto se venivo.</em>"
      }
    ],
    grammar: {
      title: "Reported-speech transformations",
      table: {
        head: ["direct", "reported", "example"],
        rows: [
          ["presente", "imperfetto", "\"Lavoro\" → Disse che lavorava."],
          ["passato prossimo", "trapassato", "\"Ho finito\" → Disse che aveva finito."],
          ["futuro", "condizionale passato", "\"Verrò\" → Disse che sarebbe venuto."],
          ["imperativo", "di + infinitive", "\"Vieni!\" → Mi disse di venire."],
          ["yes/no question", "se + clause", "\"Vieni?\" → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "\"Penso che sia\" → Disse che pensava che fosse."]
        ]
      },
      examples: [
        { tr: "Marco said he was tired." },
        { tr: "He told me he would arrive the next day." },
        { tr: "He asked whether I could help him." },
        { tr: "He told me not to worry." },
        { tr: "He explained that he had already tried." },
        { tr: "He added that that day was impossible." }
      ]
    },
    vocab: [
      "to say that",
      "to ask whether",
      "to explain",
      "to add",
      "to reply",
      "to claim, to maintain",
      "to state",
      "to deny",
      "the day before / after",
      "then, at that time",
      "at that moment",
      "according to what was said"
    ],
    exercises: [
      {
        q: "\"Verrò domani\" reported after a past tense:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "\"Lavoro molto\" → \"Ha detto che ___ molto.\"" },
      { q: "\"Ho finito\" → \"Ha detto che ___ finito.\"" },
      { q: "\"Vieni!\" → \"Mi ha detto ___ venire.\"" },
      { q: "\"Vieni?\" → \"Mi ha chiesto ___ venivo.\"" },
      { q: "Transform it.", tr: "\"I'll call you tomorrow\" → He told me he would call me the next day." },
      {
        q: "Match the shifted time and place words.",
        pairs: ["that day", "the day before", "the day after", "there"]
      },
      { q: "\"He told me not to worry.\"" },
      { tr: "He explained that he had already tried several times without success." },
      { tr: "He told me he would arrive the next day." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Media",
    title: "Reading the press",
    objectives: [
      "understand how a news article is built",
      "spot the language of unconfirmed reports",
      "summarize a text in your own words"
    ],
    theory: [
      {
        h: "The journalistic conditional",
        p: "Italian media use the conditional for <b>unconfirmed</b> information: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> means \"the minister reportedly signed, but it isn't confirmed\". It isn't the journalist speculating, it's a signal that the source is not official. Miss this form and you read the article backwards. English does the same job with \"reportedly\" or \"is said to have\"."
      },
      {
        h: "How an article is laid out",
        p: "<em>Il titolo</em> (headline), <em>l'occhiello</em> (kicker), <em>il sommario</em> (standfirst), <em>il corpo</em> (body), <em>la didascalia</em> (caption). Italian headlines are often elliptical and verbless."
      },
      {
        h: "Nominalization",
        p: "Press language turns verbs into nouns: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. It packs the text tight and makes it hard going at first; recognizing the mechanism helps a great deal."
      },
      {
        tip: "The main dailies: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (business), <em>Il Post</em> (readable, a good starting point for learners)."
      }
    ],
    grammar: {
      title: "Press language",
      table: {
        head: ["feature", "example", "meaning"],
        rows: [
          ["conditional", "Avrebbe dichiarato che…", "reportedly declared"],
          ["nominalization", "l'approvazione della riforma", "the passing of the reform"],
          ["passive", "La legge è stata approvata.", "the law was passed"],
          ["elliptical headline", "Governo verso la crisi", "government heading for crisis"],
          ["sourcing", "secondo fonti vicine a…", "according to sources close to…"],
          ["figures", "in calo / in aumento", "falling / rising"]
        ]
      },
      examples: [
        { tr: "According to internal sources, the company has reportedly already decided." },
        { tr: "The reform was passed with 210 votes in favour." },
        { tr: "Employment figures are rising." },
        { tr: "The article argues that the problem is structural." },
        { tr: "The paper denied the report." },
        { tr: "To sum up: the central issue is funding." }
      ]
    },
    vocab: [
      "daily paper",
      "weekly",
      "news item",
      "source",
      "to deny",
      "to claim, to argue",
      "rising / falling",
      "investigative report",
      "editorial",
      "headline",
      "to summarize",
      "reliable"
    ],
    exercises: [
      {
        q: "\"Il ministro avrebbe firmato l'accordo\" means:",
        opts: [
          "The minister signed the agreement",
          "The minister reportedly signed, unconfirmed",
          "The minister would sign if he could"
        ]
      },
      {
        q: "\"L'approvazione della legge\" is a nominalization of:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Fill in: \"I dati sono in ___.\" (rising)" },
      { q: "Fill in: \"Il giornale ha ___ la notizia.\" (denied)" },
      { q: "Match them up.", pairs: ["daily paper", "source", "investigative report", "reliable"] },
      {
        q: "\"Secondo fonti vicine al governo\" signals:",
        opts: ["official information", "unofficial information", "the editors' opinion"]
      },
      {
        q: "Complete the news sentence.",
        tr: "According to internal sources the company had already decided, but the spokesperson denied the report."
      },
      { q: "\"The reform was passed last week.\"" },
      { tr: "According to the paper, the government has reportedly already prepared its response." },
      { tr: "The article argues that the problem is structural." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Communication",
    title: "Holding an argument together",
    objectives: [
      "link arguments with connectives",
      "build an ordered piece of speech",
      "avoid the monotony of \"e… e… e…\""
    ],
    theory: [
      {
        h: "A connective tells the reader what's coming next",
        p: "Without connectives a text is a list of sentences. <em>Inoltre</em> announces an addition, <em>tuttavia</em> a turn, <em>quindi</em> a conclusion, <em>infatti</em> a justification. Picking the connective is part of the argument, not decoration."
      },
      {
        h: "Pairs that are easy to mix up",
        list: [
          "<em>infatti</em> (indeed, confirming) versus <em>invece</em> (whereas, contrasting)",
          "<em>anzi</em> (in fact, strengthening or correcting) versus <em>però</em> (but)",
          "<em>quindi</em> (so, a conclusion) versus <em>allora</em> (then, also a conversational filler)",
          "<em>comunque</em> (anyway, in any case) versus <em>tuttavia</em> (however, formal)"
        ]
      },
      {
        h: "A skeleton for a short argument",
        p: "<em>Anzitutto…</em> (first of all) → <em>Inoltre…</em> (furthermore) → <em>Tuttavia…</em> (however) → <em>In conclusione…</em>. This skeleton is enough for the speaking part of a B1 exam and for a short written text."
      },
      {
        tip: "In casual speech the commonest ones are <em>allora</em>, <em>comunque</em>, <em>insomma</em>, <em>cioè</em>. In writing <em>tuttavia</em>, <em>pertanto</em>, <em>in effetti</em> work better."
      }
    ],
    grammar: {
      title: "Connectives by function",
      table: {
        head: ["function", "connectives", "example"],
        rows: [
          ["addition", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["contrast", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["cause", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["result", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["explanation", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["summing up", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        { tr: "First of all the cost is too high." },
        { tr: "Furthermore we don't have enough time." },
        { tr: "However there is an alternative." },
        { tr: "The project is complex, so it needs more resources." },
        { tr: "It isn't expensive, on the contrary it's good value." },
        { tr: "In conclusion, I suggest putting it off." }
      ]
    },
    vocab: [
      "first of all",
      "furthermore",
      "however",
      "whereas, instead",
      "in fact; on the contrary",
      "so, therefore",
      "consequently",
      "that is",
      "in fact, actually",
      "on the other hand",
      "in conclusion",
      "anyway, in any case"
    ],
    exercises: [
      { q: "\"Non è caro, ___ è conveniente.\" (on the contrary)", opts: ["però", "anzi", "invece"] },
      { q: "\"Il progetto è complesso, ___ servono più risorse.\"", opts: ["perciò", "invece", "cioè"] },
      { q: "Fill in: \"___ il costo è troppo alto.\" (first of all)" },
      { q: "Fill in: \"___, propongo di rimandare.\" (in conclusion)" },
      { q: "Match connective and function.", pairs: ["addition", "contrast", "result", "explanation"] },
      {
        q: "Build the argument.",
        tr: "First of all the price is high. Furthermore we don't have time. So I suggest putting it off."
      },
      {
        q: "Which connective belongs to written rather than casual register?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "However there is an alternative worth considering." },
      { tr: "First the cost, then the timing: in conclusion, it isn't worth it." },
      { tr: "On one hand it's true, on the other the figures say otherwise." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Communication",
    title: "A longer piece of speech",
    objectives: [
      "build a two-minute answer on a topic",
      "back an opinion with an example and figures",
      "close with a conclusion"
    ],
    theory: [
      {
        h: "A structure that always works",
        list: [
          "<b>claim</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argument 1 + example</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>argument 2</b>: <em>Inoltre…</em>",
          "<b>counterargument and answer</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>conclusion</b>: <em>In conclusione…</em>"
        ]
      },
      {
        h: "Conceding a point makes you stronger",
        p: "An answer that grants the other side something before undercutting it sounds stronger than a one-sided one. The formula: <em>È vero che…, tuttavia…</em>, or <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "Fillers buy you time",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. They aren't padding — they keep you fluent while you hunt for a word. Examiners count them as a communication strategy."
      },
      {
        tip: "Don't translate from English sentence by sentence. Build simpler Italian sentences and join them with connectives: it comes out more fluent than a faithful rendering of a complicated English phrase."
      }
    ],
    grammar: {
      title: "The skeleton of an answer",
      table: {
        head: ["stage", "formula", "English"],
        rows: [
          ["claim", "Ritengo che… / Secondo me…", "I hold that… / In my view…"],
          ["argument", "Anzitutto… / Inoltre…", "First of all… / Furthermore…"],
          ["example", "Per esempio… / Basti pensare a…", "For example… / Just think of…"],
          ["counterargument", "C'è chi sostiene che…", "Some people argue that…"],
          ["answer", "Tuttavia… / Va detto però che…", "However… / It has to be said, though…"],
          ["conclusion", "In conclusione… / Per questo…", "In conclusion… / That's why…"]
        ]
      },
      examples: [
        { tr: "I hold that remote work is useful, but not for everyone." },
        { tr: "First of all it cuts commuting time." },
        { tr: "Just think of people who live out in the suburbs." },
        { tr: "Some people argue that it reduces collaboration." },
        { tr: "It has to be said, though, that it depends on the organization." },
        { tr: "In conclusion, the hybrid solution strikes me as the most balanced one." }
      ]
    },
    vocab: [
      "to hold, to consider",
      "to claim, to argue",
      "just think of",
      "it has to be said that",
      "some people say that",
      "in a sense",
      "let's say that",
      "balanced",
      "topic, argument",
      "advantage / disadvantage",
      "in the long run",
      "it's worth it"
    ],
    exercises: [
      { q: "Fill in: \"___ che il problema sia strutturale.\" (I hold)" },
      { q: "Fill in: \"C'è ___ sostiene il contrario.\" (some people)" },
      { q: "After \"ritengo che\" comes:", opts: ["indicativo", "congiuntivo", "the infinitive"] },
      {
        q: "Match them up.",
        pairs: ["just think of", "it has to be said", "in the long run", "it's worth it"]
      },
      {
        q: "Complete the answer.",
        tr: "I hold that hybrid work is the best solution. First of all it cuts costs. However it depends on the sector."
      },
      { q: "\"It has to be said, though, that it depends on the organization.\"" },
      { tr: "In conclusion, the hybrid solution strikes me as the most balanced one." },
      {
        q: "Why is it worth including a counterargument?",
        opts: [
          "To make the answer longer",
          "Because the answer sounds stronger and more mature",
          "Because the grammar requires it"
        ]
      },
      { tr: "Some people argue that it reduces collaboration, but the figures don't bear that out." },
      { tr: "I hold that it's worth trying, at least for six months." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Exam",
    title: "B1 final exam",
    objectives: ["check the congiuntivo, pronouns, reported speech and argument"],
    theory: [{ p: "Twelve tasks from the whole level. Pass mark 70%." }],
    exercises: [
      {  },
      { q: "\"Penso che tu ___ ragione.\"" },
      { q: "\"Benché ___ tardi, esco.\"" },
      { q: "\"Hai dato il libro a Marco? — Sì, ___ ho dato.\"" },
      { q: "\"Non ___ la faccio più.\"" },
      { q: "\"La città in ___ vivo.\"" },
      {
        q: "\"Verrò domani\" → reported speech:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "\"Il ministro avrebbe firmato\" means:",
        opts: ["he definitely signed", "he reportedly signed", "he would sign"]
      },
      { q: "\"___, propongo di rimandare.\" (in conclusion)" },
      { q: "\"I don't think they've understood the problem.\"" },
      { tr: "He told me he'd drop by the next day, but he didn't come." },
      { tr: "I think it's a good solution, though not a perfect one." }
    ]
  }
});
