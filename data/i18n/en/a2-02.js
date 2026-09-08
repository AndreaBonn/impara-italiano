/* ============================================================
   Learner-language text (en) for data/core/a2-02.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a2-u05": { title: "Apartments and neighborhoods", grammarNote: "locative ci · listings · describing a place" },
  "lesson:a2-u05-l1": {
    theme: "Housing",
    title: "Listings and apartment hunting",
    objectives: [
      "read an Italian rental listing",
      "ask about rent, fees and the deposit",
      "describe what you're looking for"
    ],
    theory: [
      {
        h: "Listings are written in shorthand",
        p: "<em>Bilocale</em> is an apartment with one room plus a living room — not \"two bedrooms\". What counts is the <b>number of living rooms including the living room itself</b>: <em>monolocale</em> (studio), <em>bilocale</em>, <em>trilocale</em>. Kitchen and bathroom don't count, which is the opposite of the American bedroom count."
      },
      {
        h: "Three numbers you have to ask about",
        list: [
          "<b>l'affitto</b> — the rent itself",
          "<b>le spese condominiali</b> — building fees (often €50-150 a month, not always included)",
          "<b>la cauzione</b> — the deposit, usually two or three months' rent"
        ]
      },
      {
        h: "Types of lease",
        p: "<strong>4+4</strong> is a four-year lease with automatic renewal; <strong>3+2</strong> is a regulated-rent lease (<em>canone concordato</em>), often better for tax. A <em>contratto transitorio</em> is short-term, for students and temporary workers."
      },
      {
        tip: "Abbreviations in listings: <em>mq</em> (square meters — no square feet here), <em>p. terra</em> (ground floor), <em>ammobiliato/arredato</em> (furnished), <em>spese escluse</em> (fees not included), <em>rif.</em> (reference number)."
      }
    ],
    grammar: {
      title: "Listing vocabulary",
      table: {
        head: ["abbreviation / word", "meaning", "note"],
        rows: [
          ["monolocale", "studio", "one room"],
          ["bilocale", "one-bedroom", "living room + bedroom"],
          ["arredato", "furnished", "the opposite: vuoto"],
          ["spese escluse", "fees not included", "add the condominio"],
          ["cauzione", "deposit", "usually 2-3 months"],
          ["luminoso", "bright", "a listing favorite"]
        ]
      },
      examples: [
        { tr: "I'm looking for a furnished one-bedroom in the university district." },
        { tr: "How much is the monthly rent with fees?" },
        { tr: "How much are the building fees?" },
        { tr: "The deposit is three months' rent." },
        { tr: "Is it a 4+4 lease or a short-term one?" },
        { tr: "Are pets allowed?" }
      ]
    },
    vocab: [
      "rent",
      "to rent",
      "landlord",
      "tenant",
      "building fees",
      "deposit",
      "lease",
      "furnished / unfurnished",
      "bright",
      "ground floor",
      "heating",
      "real estate agency"
    ],
    exercises: [
      {
        q: "A \"bilocale\" is an apartment:",
        opts: ["with two bedrooms", "with a living room and one bedroom", "on two floors"]
      },
      { q: "\"Spese escluse\" means:", opts: ["fees included", "fees charged separately", "no deposit"] },
      { q: "Fill in: \"La ___ è di tre mensilità.\" (the deposit)" },
      { q: "Match them up.", pairs: ["tenant", "landlord", "furnished", "ground floor"] },
      { q: "\"How much are the building fees?\"" },
      {
        q: "Fill in the questions for the landlord.",
        tr: "How much is the monthly rent? Are the fees included? And the deposit?"
      },
      { tr: "I'm looking for a furnished one-bedroom downtown." },
      {
        q: "A \"4+4\" lease is:",
        opts: ["four months", "four years with automatic renewal", "four tenants"]
      },
      { tr: "Bright one-bedroom, furnished, second floor, fees not included." },
      { tr: "I'd like to know how much the building fees are." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Housing",
    title: "The particle ci",
    objectives: [
      "replace an expression of place with ci",
      "recognize ci in set phrases",
      "tell place-ci from us-ci"
    ],
    theory: [
      {
        h: "Ci replaces a place",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Here <em>ci</em> means \"there\", standing in for the whole expression of place. English \"there\" does the same job, but Italian puts it before the verb and uses it far more often — leaving it out sounds heavy."
      },
      {
        h: "Ci also replaces \"a + thing\"",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> (\"I think about it constantly\"). Careful: with people it's different — <em>penso <b>a lei</b></em>, not \"ci penso\"."
      },
      {
        h: "Ci in fused verbs",
        list: [
          "<em>volerci</em> — to take, to be needed: <em>Ci vogliono due ore.</em> (\"it takes two hours\")",
          "<em>metterci</em> — to take someone time: <em>Ci metto un'ora.</em>",
          "<em>farcela</em> — to manage: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — to be relevant: <em>Che c'entra?</em> (\"what's that got to do with it?\")"
        ]
      },
      {
        trap: "The same form <em>ci</em> also means \"us\" and \"to us\": <em>ci vedono</em> (they see us), <em>ci hanno detto</em> (they told us). Context and the verb decide."
      }
    ],
    grammar: {
      title: "The values of ci",
      table: {
        head: ["function", "example", "in English"],
        rows: [
          ["place", "Ci vado domani.", "I'm going there tomorrow."],
          ["a + thing", "Ci penso io.", "I'll take care of it."],
          ["volerci", "Ci vogliono due ore.", "It takes two hours."],
          ["metterci", "Ci metto mezz'ora.", "It takes me half an hour."],
          ["farcela", "Ce la faccio!", "I can do it!"],
          ["us / to us", "Ci hanno invitati.", "They invited us."]
        ]
      },
      examples: [
        { tr: "Have you ever been to Sicily? — Yes, I've been twice." },
        { tr: "How long does it take from here to the station?" },
        { tr: "It takes me twenty minutes on foot." },
        { tr: "I can't take any more, I'm exhausted." },
        { tr: "What's that got to do with the lease?" },
        { tr: "I go to the market every Saturday." }
      ]
    },
    vocab: [
      "I go there",
      "it takes (time needed)",
      "it takes me",
      "to manage",
      "what's that got to do with it?",
      "moving house",
      "neighbor",
      "the building association",
      "front door",
      "intercom",
      "utility bill",
      "plumber"
    ],
    exercises: [
      { q: "\"Vai a Roma? — Sì, ___ vado domani.\"", opts: ["la", "ci", "ne"] },
      { q: "Fill in: \"Quanto ___ vuole da qui alla stazione?\"" },
      { q: "Fill in: \"___ metto venti minuti.\"" },
      {
        q: "\"Ci vogliono due ore\" means:",
        opts: ["We want two hours", "It takes two hours", "We have two hours"]
      },
      {
        q: "\"Non ce la faccio più\" means:",
        opts: ["I don't do it any more", "I can't take any more", "There isn't any more"]
      },
      {
        q: "In which sentences does \"ci\" mean a place?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Fill it in.", tr: "— How long does the trip take? — It takes me half an hour by subway." },
      { q: "\"I go to the market every Saturday.\"" },
      { tr: "It takes at least two hours to finish the move." },
      { tr: "I walk downtown, it takes me twenty minutes." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Housing",
    title: "Describing the inside",
    objectives: [
      "name the rooms and the furniture",
      "describe the layout of an apartment",
      "use prepositions of position"
    ],
    theory: [
      {
        h: "An Italian apartment follows a different logic",
        p: "<em>Il soggiorno</em> (living room) often doubles as the dining room; the kitchen tends to be a separate small space (a <em>cucina abitabile</em> is one you can eat in). <em>Il ripostiglio</em> is a storage closet — closer to a utility room than to an American walk-in."
      },
      {
        h: "Balcone, terrazzo, loggia",
        p: "<em>Il balcone</em> juts out from the building, <em>la loggia</em> is recessed into it, <em>il terrazzo</em> is large and usually on the roof. In listings the difference shows up in the price."
      },
      {
        h: "Prepositions for the layout",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. All of them take <em>a</em> or <em>di</em>, so the combined prepositions come back: <em>accanto <b>alla</b> finestra</em>."
      },
      {
        tip: "Floors are counted from <em>piano terra</em> (ground floor) upward, so <em>primo piano</em> is what an American calls the second floor. Get this wrong and you knock on the wrong door."
      }
    ],
    grammar: {
      title: "Rooms and furniture",
      table: {
        head: ["room", "typical furniture", "sample sentence"],
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
        { tr: "The apartment is on the third floor with no elevator." },
        { tr: "The kitchen is small, but you can eat in it." },
        { tr: "The balcony looks onto the inner courtyard." },
        { tr: "There's a storage closet by the entrance." },
        { tr: "The windows face south, so it's very bright." },
        { tr: "The heating is individually controlled." }
      ]
    },
    vocab: [
      "living room",
      "bedroom",
      "bathroom",
      "hallway",
      "storage closet",
      "sofa",
      "wardrobe",
      "desk",
      "refrigerator",
      "washing machine",
      "to look onto (a window)",
      "individual heating"
    ],
    exercises: [
      {
        q: "Match the room with the furniture.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Fill in: \"L'armadio è accanto ___ letto.\"" },
      { q: "Fill in: \"Il balcone ___ sul cortile.\" (looks onto)" },
      {
        q: "A \"cucina abitabile\" is a kitchen:",
        opts: ["with a window", "big enough to eat in", "that comes furnished"]
      },
      { q: "Describe the apartment.", tr: "The sofa is across from the window, and the bookcase is next to the sofa." },
      { q: "\"The apartment is on the third floor with no elevator.\"" },
      { tr: "The windows face south, so it's very bright." },
      { q: "Articles:", items: [, , , ] },
      { tr: "The bedroom looks onto the courtyard, so it's quiet." },
      { tr: "The living room is bright, and you can eat in the kitchen." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Housing",
    title: "Problems and reporting them",
    objectives: [
      "report a fault to the landlord or the building manager",
      "describe what broke",
      "arrange for a repair"
    ],
    theory: [
      {
        h: "Three verbs cover most faults",
        list: [
          "<b>non funziona</b> — it doesn't work (an appliance)",
          "<b>perde</b> — it's leaking (a faucet, a pipe)",
          "<b>si è rotto/a</b> — it broke"
        ]
      },
      {
        h: "Who's responsible for what",
        p: "In an Italian lease, <b>minor repairs</b> (<em>manutenzione ordinaria</em>) are on the tenant, while <b>major</b> ones (<em>straordinaria</em>: the boiler, the wiring, the roof) are on the landlord. Worth writing in your message: <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "The tone of the report",
        p: "An Italian fault report is usually polite and indirect: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. A blunt <em>ripari subito!</em> will work against you — this is not a culture where firmness speeds things up."
      },
      {
        tip: "<em>Il condominio</em> is both the building and the owners' association as a legal entity. <em>L'amministratore di condominio</em> is the manager you report common-area problems to."
      }
    ],
    grammar: {
      title: "Reporting faults",
      table: {
        head: ["problem", "in Italian", "in English"],
        rows: [
          ["an appliance", "La lavatrice non funziona.", "The washing machine isn't working."],
          ["water", "Il rubinetto perde.", "The faucet is leaking."],
          ["broken", "Si è rotta la serratura.", "The lock broke."],
          ["heating", "Il riscaldamento non si accende.", "The heating won't turn on."],
          ["power", "È saltata la corrente.", "The power went out."],
          ["reporting", "Volevo segnalarle un problema.", "I wanted to report a problem."]
        ]
      },
      examples: [
        { tr: "Hello, I'm writing because the boiler hasn't worked since yesterday." },
        { tr: "The bathroom faucet is leaking." },
        { tr: "Could you send a plumber?" },
        { tr: "When can the technician come?" },
        { tr: "I'm home after six." },
        { tr: "Thank you for being quick." }
      ]
    },
    vocab: [
      "faucet",
      "to leak",
      "to break",
      "lock",
      "boiler",
      "electricity",
      "to go out (power)",
      "plumber",
      "electrician",
      "technician",
      "to report",
      "maintenance, repair"
    ],
    exercises: [
      {
        q: "The faucet is leaking. How do you say it?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Fill in: \"È ___ la corrente.\" (the power went out)" },
      { q: "Fill in: \"Si è ___ la serratura.\" (the lock broke)" },
      {
        q: "Match the tradesperson with the problem.",
        pairs: ["a leaking faucet", "no power", "a broken boiler", "common areas"]
      },
      { q: "\"Could you send a plumber?\"" },
      {
        q: "Write the report.",
        tr: "Hello, I wanted to report that the boiler hasn't worked since yesterday. Could you send a technician?"
      },
      {
        q: "Who normally pays to replace a boiler in a rental?",
        opts: ["The tenant", "The landlord (manutenzione straordinaria)", "The building association"]
      },
      { tr: "I'm home after six." },
      { tr: "The heating won't turn on and it's very cold in here." },
      { tr: "I wanted to report that the bathroom faucet is leaking." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Test",
    title: "Unit 5 test",
    objectives: ["check housing vocabulary and the particle ci"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Bilocale\":", opts: ["two bedrooms", "living room + bedroom", "two floors"] },
      { q: "\"La ___ è di tre mensilità.\"" },
      { q: "\"Quanto ___ vuole per arrivare?\"" },
      { q: "\"___ metto mezz'ora.\"" },
      { q: "\"Non ce la faccio più\":", opts: ["I don't do it", "I can't take any more", "I don't have any more"] },
      { q: "\"L'armadio è accanto ___ letto.\"" },
      { q: "\"Il rubinetto ___.\" (is leaking)" },
      { q: "Match them up.", pairs: ["tenant", "storage closet", "washing machine", "to go out (power)"] },
      { tr: "I'm looking for a furnished one-bedroom, fees included, near downtown." },
      { tr: "It's a twenty-minute walk from the station." }
    ]
  },
  "unit:a2-u06": { title: "At work", grammarNote: "the polite conditional · impersonal si · emails" },
  "lesson:a2-u06-l1": {
    theme: "Work",
    title: "The phone and polite requests",
    objectives: [
      "get through a phone call",
      "use the conditional for a polite request",
      "leave and take a message"
    ],
    theory: [
      {
        h: "A call starts with Pronto",
        p: "<strong>Pronto?</strong> is what the person answering says, whatever the hour and whatever the relationship. It literally means \"ready\" — a leftover from the days of switchboard operators. It is not a greeting and not a name, so answering with your own name instead will sound off."
      },
      {
        h: "The conditional turns a request into an offer",
        p: "<em>Può richiamarmi?</em> (\"can you call me back?\") is correct but direct. <em><b>Potrebbe</b> richiamarmi?</em> leaves the other person room to decline, and so sounds politer — exactly the difference between English \"can you\" and \"could you\". Same logic as <em>vorrei</em> instead of <em>voglio</em>."
      },
      {
        h: "The shape of a business call",
        list: [
          "<em>Pronto, sono Anna Smith della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ]
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> (\"would you mind…?\") is the top level of politeness in a request. Save it for something genuinely inconvenient."
      }
    ],
    grammar: {
      title: "Polite requests",
      table: {
        head: ["level", "form", "in English"],
        rows: [
          ["neutral", "Può richiamarmi?", "Can you call me back?"],
          ["polite", "Potrebbe richiamarmi?", "Could you call me back?"],
          ["very polite", "Le dispiacerebbe richiamarmi?", "Would you mind calling me back?"],
          ["about yourself", "Vorrei parlare con…", "I'd like to speak to…"],
          ["a proposal", "Sarebbe possibile…?", "Would it be possible…?"],
          ["agreeing", "Certo, volentieri.", "Of course, gladly."]
        ]
      },
      examples: [
        { tr: "Hello? This is Anna, I'm calling about the meeting." },
        { tr: "Could you put me through to Mr. Rossi?" },
        { tr: "I'm sorry, he's busy at the moment." },
        { tr: "Could you tell him I called?" },
        { tr: "I'll leave you my number." },
        { tr: "I'll call back later, thank you." }
      ]
    },
    vocab: [
      "hello? (on the phone)",
      "who's calling?",
      "could you put me through to…?",
      "he's in a meeting",
      "to leave a message",
      "to call back",
      "an appointment",
      "to postpone",
      "to cancel",
      "the line is busy",
      "I can barely hear you",
      "could you…?"
    ],
    exercises: [
      {  },
      {
        q: "Which request is the politest?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Fill in: \"___ dirgli che ho chiamato?\" (could you)" },
      { q: "Fill in: \"___ il signor Rossi, per favore?\" (could you put me through to)" },
      { q: "Match them up.", pairs: ["he's in a meeting", "to postpone", "to cancel", "to call back"] },
      { q: "\"I'd like to postpone the meeting.\"" },
      {
        q: "You're calling a company.",
        setting: "Monday, 10 a.m., the front desk.",
        lines: [
          { tr: "Hello, Studio Bianchi, good morning." },
          {
            tr: "Introduce yourself and ask to be put through to Mr. Rossi.",
            answerTr: "Good morning, this is Anna Smith. Could you put me through to Mr. Rossi?"
          },
          { tr: "I'm sorry, he's in a meeting right now." },
          { tr: "Politely ask him to call you back.", answerTr: "Could you ask him to call me back?" },
          { tr: "Of course. Will you leave a number?" }
        ]
      },
      {
        q: "Fill in the request.",
        tr: "Good morning, I'd like to speak to Ms. Bianchi. If she's busy, could she call back this afternoon?"
      },
      { tr: "He's busy right now, would you like to leave a message?" },
      { tr: "Hello, this is Anna. Could you put me through to Mr. Rossi?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Work",
    title: "Business correspondence",
    objectives: [
      "write a short business email",
      "know the opening and closing formulas",
      "match the register to the recipient"
    ],
    theory: [
      {
        h: "The opening depends on distance",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formal, to someone you know by name",
          "<em>Spettabile Azienda,</em> — to a company as an institution",
          "<em>Buongiorno Marco,</em> — semi-formal, to a colleague",
          "<em>Ciao Marco,</em> — informal"
        ]
      },
      {
        h: "The closing",
        p: "<em>Cordiali saluti</em> is the safe standard. <em>Distinti saluti</em> is cooler and more official. <em>A presto</em> or <em>Grazie e buona giornata</em> suits colleagues. Sign with your first and last name, title underneath."
      },
      {
        h: "The body of an Italian email is short",
        p: "Italian business correspondence doesn't go in for long preambles. The structure: reason for writing (<em>Le scrivo in merito a…</em>), the content, the request (<em>Resto in attesa di un suo riscontro</em>), the closing. Note that <em>Dott.</em> is used for anyone with a degree, not only physicians."
      },
      {
        tip: "<em>In allegato</em> = \"attached\". <em>Le invio in allegato il documento richiesto</em> is the single most common sentence in Italian business email."
      }
    ],
    grammar: {
      title: "The skeleton of an email",
      table: {
        head: ["part", "formula", "in English"],
        rows: [
          ["opening", "Gentile Dott.ssa Rossi,", "Dear Dr. Rossi,"],
          ["reason", "Le scrivo in merito a…", "I'm writing regarding…"],
          ["attachment", "Le invio in allegato…", "Please find attached…"],
          ["request", "Resto in attesa di un suo riscontro.", "I look forward to your reply."],
          ["closing", "Cordiali saluti,", "Kind regards,"],
          ["informal", "Grazie e a presto,", "Thanks, talk soon,"]
        ]
      },
      examples: [
        { tr: "Dear Dr. Rossi, I'm writing regarding yesterday's proposal." },
        { tr: "Please find the updated quote attached." },
        { tr: "I'd be grateful for confirmation by Friday." },
        { tr: "I remain available for any questions." },
        { tr: "Hi Marco, attaching the file we talked about." },
        { tr: "Thanks in advance." }
      ]
    },
    vocab: [
      "Dear (in an email)",
      "regarding",
      "attached",
      "quote, estimate",
      "to confirm",
      "a reply, feedback",
      "to remain available",
      "kind regards",
      "thanks in advance",
      "deadline",
      "by (a date)",
      "clarification"
    ],
    exercises: [
      {
        q: "Which opening is the most formal?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Fill in: \"Le scrivo ___ merito all'offerta.\"" },
      { q: "Fill in: \"Le invio ___ allegato il preventivo.\"" },
      { q: "Match them up.", pairs: ["quote", "reply", "deadline", "clarification"] },
      {
        q: "\"Resto a disposizione\" means:",
        opts: ["I'm staying at the company", "I remain available", "I'll wait here"]
      },
      { q: "\"Please find the updated quote attached.\"" },
      {
        q: "Fill in the email.",
        tr: "Dear Dr. Rossi, I'm writing regarding Thursday's meeting. I look forward to your reply. Kind regards."
      },
      { tr: "I'd be grateful for confirmation by Friday." },
      { tr: "Please find the requested document attached; I remain available." },
      { tr: "Dear Dr. Rossi, I'm writing regarding our meeting." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Work",
    title: "Impersonal si",
    objectives: [
      "use si for general statements",
      "tell impersonal si from passive si",
      "describe how things are done somewhere"
    ],
    theory: [
      {
        h: "Like English \"one\" or \"you\"",
        p: "<em>In Italia <b>si</b> mangia bene.</em> (\"You eat well in Italy\"). The construction <em>si</em> + third person singular talks about people in general without naming anyone. English uses \"one\" (stiff) or generic \"you\" (natural); Italian uses this, constantly and neutrally."
      },
      {
        h: "Si passivante: the verb agrees with the thing",
        p: "When a noun follows the verb, the form matches its number: <em>Qui <b>si vende</b> il pane</em> (one thing) versus <em>Qui <b>si vendono</b> i panini</em> (several). It looks like an error and it's the rule."
      },
      {
        h: "The adjective after si goes plural",
        p: "<em>Quando si è <b>stanchi</b>, si lavora male.</em> The verb is singular but the adjective takes the masculine plural. It's a genuine oddity and you simply learn it."
      },
      {
        tip: "In compound tenses impersonal <em>si</em> always takes <em>essere</em>: <em>si è mangiato bene</em>, <em>si è andati via presto</em>."
      }
    ],
    grammar: {
      title: "Impersonal and passive si",
      table: {
        head: ["type", "example", "note"],
        rows: [
          ["impersonal", "In Italia si mangia bene.", "no noun after the verb"],
          ["passive sing.", "Qui si vende il pane.", "agrees with \"il pane\""],
          ["passive pl.", "Qui si vendono i panini.", "agrees with \"i panini\""],
          ["with an adjective", "Quando si è stanchi…", "adjective in the plural"],
          ["compound tense", "Si è mangiato bene.", "always essere"],
          ["reflexive", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        { tr: "In this office people work Saturdays too." },
        { tr: "How do you say \"laptop\" in Italian?" },
        { tr: "There's no smoking here." },
        { tr: "Apartments are for sale in this area." },
        { tr: "When you're new, you ask a lot of questions." },
        { tr: "You get used to it fast." }
      ]
    },
    vocab: [
      "one says, you say",
      "one does, you do",
      "you can't, it's not allowed",
      "office",
      "meeting",
      "coworker",
      "salary",
      "vacation",
      "time off",
      "overtime",
      "deadline",
      "to get used to"
    ],
    exercises: [
      {
        q: "\"Qui ___ i panini.\" (sandwiches are sold here)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "Si passivante agrees with the thing: i panini → plural."
      },
      { q: "Fill in: \"In Italia ___ mangia bene.\"" },
      { q: "Fill in: \"Come ___ dice in italiano?\"" },
      {
        q: "\"Quando si è stanchi\" — why \"stanchi\" and not \"stanco\"?",
        opts: ["It's a mistake", "After si the adjective goes plural", "Because it really is about several people"]
      },
      { q: "Fill in the forms.", tr: "People work a lot in this office and often do overtime." },
      { q: "\"There's no smoking here.\"" },
      {
        q: "Which sentences are correct?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "You get used to it fast." },
      { tr: "People work a lot at this company, but the pay is good." },
      { tr: "How do you say \"deadline\" in Italian? You say scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Work",
    title: "Meetings and agreements",
    objectives: [
      "take the floor in a meeting",
      "propose and agree on a date",
      "express agreement or doubt"
    ],
    theory: [
      {
        h: "Interrupting isn't rude",
        p: "In Italian meeting culture, cutting in is normal and signals engagement. Waiting for a clean pause, as you might in an American meeting, can read as having nothing to say. Softening formulas: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Agreement and doubt",
        list: [
          "agreement: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "partial: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "doubt: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "disagreement: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Agreeing on a time",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. The phrase <em>facciamo giovedì</em> (\"let's make it Thursday\") is the standard way of closing an arrangement."
      },
      {
        tip: "<em>Ci sentiamo</em> (\"we'll be in touch\") ends practically every Italian meeting and business call. It isn't a promise, it's a formula."
      }
    ],
    grammar: {
      title: "The language of meetings",
      table: {
        head: ["function", "phrase", "in English"],
        rows: [
          ["taking the floor", "Posso dire una cosa?", "Can I say something?"],
          ["interrupting", "Scusa se ti interrompo…", "Sorry to interrupt…"],
          ["agreeing", "Sono d'accordo con te.", "I agree with you."],
          ["doubt", "Non ne sono del tutto convinto.", "I'm not entirely convinced."],
          ["proposing", "Che ne dite di giovedì?", "How about Thursday?"],
          ["closing", "Facciamo così, allora.", "Let's do that, then."]
        ]
      },
      examples: [
        { tr: "Let me sum up the main points." },
        { tr: "I have some doubts on that point." },
        { tr: "Can we push the decision to Monday?" },
        { tr: "I don't mind either way, you decide." },
        { tr: "Who's going to handle this?" },
        { tr: "We'll be in touch tomorrow about the details." }
      ]
    },
    vocab: [
      "meeting",
      "agenda",
      "to sum up",
      "to postpone",
      "to handle, to take care of",
      "I agree",
      "I'm not convinced",
      "it depends",
      "how about…?",
      "I don't mind either way",
      "we'll be in touch",
      "an item on the agenda"
    ],
    exercises: [
      { q: "Match them up.", pairs: ["I agree", "it depends", "to postpone", "to handle"] },
      {
        q: "\"Non ne sono del tutto convinto\" is:",
        opts: ["full agreement", "doubt, gently expressed", "firm disagreement"]
      },
      { q: "Fill in: \"___ ne dite di giovedì?\"" },
      { q: "Fill in: \"Chi ___ occupa di questo?\"" },
      { q: "\"Can we push the decision to Monday?\"" },
      {
        q: "A team meeting.",
        setting: "The conference room, setting a date.",
        lines: [
          { tr: "All right, we need to set the next meeting." },
          { tr: "Suggest Thursday.", answerTr: "How about Thursday?" },
          { tr: "Thursday morning I already have something. The afternoon?" },
          { tr: "Agree and close the arrangement.", answerTr: "Works for me, let's do that." }
        ]
      },
      {
        q: "Fill in what you'd say.",
        tr: "Sorry to interrupt, but I have some doubts on that point."
      },
      { tr: "Let me sum up the main points." },
      { tr: "Let's push the decision to the next meeting." },
      { tr: "I agree, but I'd like to add something." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Test",
    title: "Unit 6 test",
    objectives: ["check the polite conditional, emails and impersonal si"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      {  },
      { q: "\"___ richiamarmi?\" (could you)" },
      { q: "\"Le scrivo ___ merito alla riunione.\"" },
      { q: "\"Le invio ___ allegato il preventivo.\"" },
      { q: "\"Qui ___ i panini.\"", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "\"In Italia ___ mangia bene.\"" },
      { q: "Match them up.", pairs: ["quote", "vacation", "salary", "deadline"] },
      { q: "\"I agree, but I have a doubt.\"" },
      { tr: "Could you confirm the meeting by Friday?" },
      { tr: "I'd like to move the meeting to Thursday afternoon." }
    ]
  },
  "unit:a2-u07": { title: "Holidays and traditions", grammarNote: "invitations · good wishes · adverbs" },
  "lesson:a2-u07-l1": {
    theme: "Culture",
    title: "Good wishes and occasions",
    objectives: [
      "offer good wishes for different occasions",
      "reply to good wishes",
      "know the main Italian holidays"
    ],
    theory: [
      {
        h: "Auguri is the master key",
        p: "<strong>Auguri!</strong> works for birthdays, name days, weddings, promotions, holidays and almost any good occasion. It literally means \"best wishes\". Expanded: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "What you don't wish",
        p: "Before an exam or a hard task Italians do <b>not</b> say <em>auguri</em> or <em>buona fortuna</em> — that brings bad luck. You say <strong>in bocca al lupo</strong> (\"into the wolf's mouth\"), and the answer is <em>crepi!</em> or <em>crepi il lupo!</em> It's the same superstition as English \"break a leg\", with a different animal."
      },
      {
        h: "The calendar you need to know",
        list: [
          "<b>Capodanno</b> (January 1), <b>Epifania</b> (January 6, when <em>la Befana</em> comes)",
          "<b>Pasqua</b> and <b>Pasquetta</b> (Easter Monday, a day for excursions)",
          "<b>April 25</b> (Liberation Day), <b>May 1</b>, <b>June 2</b> (Republic Day)",
          "<b>Ferragosto</b> (August 15 — the whole country is on vacation), <b>Natale</b> and <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> is the neutral seasonal greeting, <em>Buon Natale</em> is specifically Christmas. In a work context the first is commoner."
      }
    ],
    grammar: {
      title: "Good wishes",
      table: {
        head: ["occasion", "in Italian", "the reply"],
        rows: [
          ["birthday", "Tanti auguri!", "Grazie!"],
          ["the holidays", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["New Year", "Buon anno!", "Anche a te!"],
          ["before an exam", "In bocca al lupo!", "Crepi!"],
          ["before a trip", "Buon viaggio!", "Grazie!"],
          ["before a meal", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        { tr: "Happy birthday!" },
        { tr: "Happy holidays to you and your family." },
        { tr: "Good luck on the exam! — Thanks!" },
        { tr: "Have a good day at work!" },
        { tr: "Have a good weekend! — You too!" },
        { tr: "Congratulations on the promotion!" }
      ]
    },
    vocab: [
      "best wishes!",
      "happy birthday",
      "happy holidays",
      "happy New Year",
      "good luck (before a challenge)",
      "the reply to the above",
      "you too",
      "congratulations",
      "birthday",
      "name day",
      "August 15, peak vacation",
      "a long weekend"
    ],
    culture: {
      title: "Through Italian eyes: the calendar sets the year's rhythm",
      text: "<p><b>Ferragosto</b> (August 15) is when the big cities empty out. Neighborhood shops close, so do some restaurants and clinics. Trying to get anything done that week is a lost cause.</p><p><b>Il ponte</b> is \"the bridge\": when a holiday falls on a Tuesday or a Thursday, people take the Monday or Friday off and make it a long weekend. Business deadlines are planned around bridges.</p><p><b>L'onomastico</b> (your name day) is still a thing, and in some regions — especially in the south — it's celebrated as enthusiastically as a birthday.</p>"
    },
    exercises: [
      {
        q: "What do you say to a friend before an exam?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "\"Buona fortuna\" is considered bad luck."
      },
      { q: "What's the reply to \"in bocca al lupo\"?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Fill in: \"Buon ___!\" (have a good trip)" },
      { q: "Fill in: \"Buon appetito! — ___!\" (you too)" },
      {
        q: "Match the occasion with the wish.",
        pairs: ["birthday", "New Year", "promotion", "trip"]
      },
      {
        q: "What is \"il ponte\" on the calendar?",
        opts: ["A religious holiday", "A day off bridging a holiday and the weekend", "An anniversary"]
      },
      {
        q: "What happens in Italy on August 15?",
        opts: ["The school year starts", "Ferragosto — the cities empty out", "Republic Day"]
      },
      { q: "\"Happy holidays to you and your family.\"" },
      { tr: "Happy birthday and happy holidays!" },
      { tr: "Good luck on the exam! — Thanks!" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Culture",
    title: "Invitations",
    objectives: ["invite someone to something", "accept or decline gracefully", "ask about the details"],
    theory: [
      {
        h: "Invitations are usually informal",
        p: "Italian invitations rarely take a fixed form. Most often: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Even a proper dinner tends to be announced as <em>una cosa tra amici</em>."
      },
      {
        h: "Declining requires a reason",
        p: "A bare <em>no, grazie</em> comes across as cold. The formula is: apology + reason + alternative. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em>"
      },
      {
        h: "What to bring",
        p: "For dinner you bring wine, dessert or flowers. The question <em>Cosa porto?</em> is expected, and the answer <em>Non portare niente!</em> is a politeness — you bring something anyway."
      },
      {
        tip: "The time on an invitation is approximate. Arriving exactly on time for a private dinner at 8:30 can be awkward; fifteen minutes late is the norm."
      }
    ],
    grammar: {
      title: "Inviting and replying",
      table: {
        head: ["function", "phrase", "in English"],
        rows: [
          ["invitation", "Ti va di venire a cena sabato?", "Do you feel like coming to dinner Saturday?"],
          ["accepting", "Volentieri, a che ora?", "Gladly, what time?"],
          ["declining", "Mi dispiace, quel giorno non posso.", "I'm sorry, I can't that day."],
          ["alternative", "Facciamo un'altra volta?", "Another time?"],
          ["details", "Cosa porto?", "What should I bring?"],
          ["the reply", "Non portare niente, ci pensiamo noi.", "Don't bring anything, we've got it."]
        ]
      },
      examples: [
        { tr: "We're doing dinner at our place Saturday, will you come?" },
        { tr: "Gladly! What time are you meeting?" },
        { tr: "I'm sorry, I already have something on Saturday." },
        { tr: "Can I bring someone?" },
        { tr: "I'll bring dessert, does that work?" },
        { tr: "See you there around half past eight." }
      ]
    },
    vocab: [
      "to invite",
      "invitation",
      "dinner",
      "a party",
      "a prior engagement",
      "gladly",
      "unfortunately",
      "another time",
      "to bring",
      "around eight",
      "to meet up",
      "to stay late"
    ],
    exercises: [
      {
        q: "Which refusal works best in Italian?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Fill in: \"___ va di venire a cena?\"" },
      { q: "Fill in: \"Purtroppo ho già un ___.\" (a prior engagement)" },
      { q: "Match them up.", pairs: ["gladly", "unfortunately", "invitation", "to meet up"] },
      { q: "\"Gladly! What time are you meeting?\"" },
      {
        q: "An invitation to dinner.",
        setting: "A message from a friend, Wednesday evening.",
        lines: [
          { tr: "We're doing dinner at our place Saturday. Do you feel like coming?" },
          { tr: "Accept and ask what time.", answerTr: "Gladly! What time?" },
          { tr: "Around half past eight. There'll be six of us." },
          { tr: "Ask what to bring.", answerTr: "What should I bring?" },
          { tr: "Don't bring anything! Dessert, maybe." }
        ]
      },
      { q: "Fill in the refusal.", tr: "I'm sorry, I already have something on Saturday. Another time?" },
      { tr: "See you there around half past eight." },
      { tr: "Do you feel like coming to dinner Saturday? There'll be six of us." },
      { tr: "Gladly, I'll bring dessert. What time?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Culture",
    title: "Regional Italy",
    objectives: [
      "understand the basic north-south differences",
      "describe a region and its food",
      "use comparisons to describe places"
    ],
    theory: [
      {
        h: "Italy unified in 1861",
        p: "Before that it was a collection of states with separate languages, cuisines and institutions. Regional differences run deeper than in most countries: dialects can be mutually unintelligible, and local identity (<em>campanilismo</em>, from <em>campanile</em>, the bell tower) is often stronger than national identity. Think state rivalry, but older and about food."
      },
      {
        h: "There is no single Italian cuisine",
        p: "Butter and rice in the north, olive oil and pasta in the south. <em>Pesto</em> is Liguria, <em>ragù</em> is Emilia, <em>carbonara</em> is Rome, <em>arancini</em> are Sicily. Ordering \"Italian food\" without a region is like ordering \"American food\"."
      },
      {
        h: "Language versus dialect",
        p: "<em>Il dialetto</em> isn't broken Italian — it's a separate language descended from Latin in parallel with Tuscan, which is what standard Italian came from. Neapolitan and Sicilian have their own literatures."
      },
      {
        tip: "Safe conversation topic with an Italian: the food of their region. Unsafe: which region cooks better."
      }
    ],
    grammar: {
      title: "Describing a region",
      table: {
        head: ["region", "capital", "known for"],
        rows: [
          ["la Toscana", "Firenze", "bistecca, Chianti, the Renaissance"],
          ["l'Emilia-Romagna", "Bologna", "tagliatelle al ragù, parmigiano"],
          ["la Sicilia", "Palermo", "arancini, cannoli, Arab influence"],
          ["il Veneto", "Venezia", "cicchetti, prosecco"],
          ["la Campania", "Napoli", "pizza, sfogliatella"],
          ["il Piemonte", "Torino", "truffles, vermouth, Slow Food"]
        ]
      },
      examples: [
        { tr: "I'm of Sicilian origin, but I live in Milan." },
        { tr: "In the north they use more butter, in the south more olive oil." },
        { tr: "In the Veneto people still speak a lot of dialect." },
        { tr: "Every region has its own typical pasta." },
        { tr: "Coffee in the south is stronger and shorter." },
        { tr: "Rome is chaotic, but beautiful." }
      ]
    },
    vocab: [
      "region",
      "regional capital",
      "north / south",
      "dialect",
      "typical",
      "tradition",
      "a regional dish",
      "origin",
      "chaotic",
      "welcoming",
      "local pride",
      "to move (somewhere)"
    ],
    exercises: [
      { q: "Match the region with the city.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "What is \"campanilismo\"?",
        opts: ["An architectural style", "Attachment to your own town", "A kind of bell"]
      },
      {
        q: "An Italian dialect is:",
        opts: ["a broken version of Italian", "a separate language descended from Latin", "youth slang"]
      },
      { q: "Fill in: \"Al nord si usa più il burro, al ___ l'olio.\"" },
      { q: "\"Every region has its own typical dish.\"" },
      {
        q: "Fill it in.",
        tr: "I'm of Sicilian origin, but I've lived in the north for ten years. I understand the dialect but I don't speak it."
      },
      { tr: "Rome is chaotic, but beautiful." },
      { q: "Where is carbonara from?", opts: ["Bologna", "Rome", "Palermo"] },
      { tr: "Every Italian region has its own cuisine and often its own dialect." },
      { tr: "I'm of Polish origin, but I've lived in Tuscany for three years." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Grammar",
    title: "Adverbs",
    objectives: [
      "form adverbs in -mente",
      "tell an adjective from an adverb",
      "put the adverb in the right place"
    ],
    theory: [
      {
        h: "Forming them",
        p: "Take the <b>feminine</b> form of the adjective and add <em>-mente</em>: <em>lenta → lentamente</em>, <em>rara → raramente</em>. It's the exact counterpart of English <em>-ly</em>. Adjectives in <em>-le</em> and <em>-re</em> drop the final <em>e</em>: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>."
      },
      {
        h: "Buono versus bene",
        p: "This is the one that causes the most trouble. <em>Buono</em> is the adjective (what kind?), <em>bene</em> the adverb (how?) — the same split as good/well. <em>Un caffè <b>buono</b></em> but <em>parla <b>bene</b></em>. \"Parla buono\" is wrong, in the same way \"he speaks good\" is."
      },
      {
        h: "Position in compound tenses",
        p: "In the passato prossimo the adverbs <em>già, mai, ancora, sempre, appena, più</em> go <b>between the auxiliary and the participle</b>: <em>ho <b>già</b> visto</em>. The rest usually follow the participle: <em>ho parlato <b>lentamente</b></em>."
      },
      {
        tip: "The <em>-mente</em> adverbs are long, and spoken Italian often replaces them with phrases: <em>in modo semplice</em> instead of <em>semplicemente</em>, <em>con calma</em> instead of <em>tranquillamente</em>."
      }
    ],
    grammar: {
      title: "Adverbs",
      table: {
        head: ["adjective", "adverb", "example"],
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
        { tr: "Could you speak more slowly?" },
        { tr: "I rarely go downtown on the weekend." },
        { tr: "I've already seen that movie." },
        { tr: "I haven't been there yet." },
        { tr: "He speaks Italian well, but writes it badly." },
        { tr: "Take your time with it." }
      ]
    },
    vocab: [
      "slowly",
      "quickly",
      "easily",
      "rarely",
      "regularly",
      "suddenly",
      "finally",
      "absolutely",
      "well / badly",
      "calmly",
      "in a hurry",
      "almost"
    ],
    exercises: [
      { q: "Form the adverb from \"lento\": ___" },
      { q: "Form the adverb from \"facile\": ___" },
      {
        q: "Which sentence is correct?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Fill in: \"Ho ___ visto quel film.\" (already)" },
      {
        q: "Where does \"ancora\" go in the passato prossimo?",
        opts: ["Before the auxiliary", "Between the auxiliary and the participle", "At the end"]
      },
      { q: "Match them up.", pairs: ["finally", "suddenly", "calmly", "almost"] },
      { q: "\"Could you speak more slowly?\"" },
      {
        q: "Fill it in.",
        tr: "He speaks Italian well, but he still writes it badly. He studies regularly, every day."
      },
      { tr: "I finally found an apartment near work." },
      { tr: "Could you repeat that more slowly?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Test",
    title: "Unit 7 test",
    objectives: ["check good wishes, invitations, regional knowledge and adverbs"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "Before an exam you say:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "The reply to \"in bocca al lupo\": ___" },
      { q: "\"Buon appetito! — ___!\"" },
      { q: "\"___ va di venire a cena?\"" },
      { q: "\"Il ponte\" is:", opts: ["a bridge", "a long weekend", "a holiday"] },
      { q: "Match them up.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "The adverb from \"regolare\": ___" },
      { q: "The correct sentence:", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "Best wishes and happy holidays to the whole family!" },
      { tr: "Do you feel like coming to the party Saturday night?" }
    ]
  },
  "unit:a2-u08": { title: "Plans and review", grammarNote: "expressing intentions · A2 review" },
  "lesson:a2-u08-l1": {
    theme: "Plans",
    title: "Intentions and dreams",
    objectives: [
      "talk about your plans for the future",
      "express a wish and a doubt",
      "combine the future with the conditional"
    ],
    theory: [
      {
        h: "Three degrees of certainty",
        list: [
          "<b>settled</b>: <em>A settembre comincio un nuovo lavoro.</em> (present tense)",
          "<b>planned</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>a dream</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe versus vorrei",
        p: "<em>Vorrei</em> is about something real and reachable (\"I'd like a coffee\"). <em>Mi piacerebbe</em> shifts toward a wish or a hypothesis (\"I'd love to\", \"it would be nice to\"). An Italian uses the first when ordering, the second when talking about life plans."
      },
      {
        h: "Prepositions after verbs of intention",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, but <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. The preposition is part of the verb and has to be learned with it."
      },
      {
        tip: "<em>Chissà</em> (\"who knows\") often opens a sentence about an uncertain future: <em>Chissà dove sarò tra cinque anni.</em>"
      }
    ],
    grammar: {
      title: "Expressing plans",
      table: {
        head: ["degree", "construction", "example"],
        rows: [
          ["a decision", "present", "A giugno cambio lavoro."],
          ["an intention", "ho intenzione di + infinitive", "Ho intenzione di studiare medicina."],
          ["a prediction", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["a dream", "mi piacerebbe + infinitive", "Mi piacerebbe vivere al mare."],
          ["a hope", "spero di + infinitive", "Spero di trovare casa presto."],
          ["uncertainty", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        { tr: "I intend to sign up for an evening course." },
        { tr: "I'd love to work abroad for a year." },
        { tr: "I hope to pass the exam in June." },
        { tr: "Who knows where I'll be in five years." },
        { tr: "I'm thinking about changing cities." },
        { tr: "Sooner or later I'll learn to play the piano." }
      ]
    },
    vocab: [
      "I intend to",
      "I'd love to (a dream)",
      "I hope to",
      "I'm thinking of",
      "to dream of",
      "who knows",
      "sooner or later",
      "abroad",
      "an evening course",
      "to pass an exam",
      "to change your life",
      "a dream"
    ],
    exercises: [
      { q: "Fill in: \"Ho intenzione ___ trasferirmi.\"" },
      { q: "Fill in: \"Spero ___ trovare casa presto.\"" },
      { q: "Fill in: \"Comincio ___ capire meglio.\"" },
      {
        q: "Which sentence sounds like a dream rather than a plan?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "\"I'd love to work abroad for a year.\"" },
      { q: "Fill in the plans.", tr: "I intend to sign up for a course and I hope to pass the exam in June." },
      { tr: "Sooner or later I'll learn to play the piano." },
      { tr: "I'm thinking about changing cities next year." },
      { tr: "I'd love to live in Italy for at least a year." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Review",
    title: "Reviewing the tenses",
    objectives: [
      "pick the tense that fits the situation",
      "combine every tense learned at A2",
      "find your own weak spots"
    ],
    theory: [
      {
        h: "The A2 map of tenses",
        list: [
          "<b>presente</b> — now, habit, near future",
          "<b>passato prossimo</b> — a closed event",
          "<b>imperfetto</b> — background, description, past habit",
          "<b>trapassato prossimo</b> — the past before the past",
          "<b>futuro semplice</b> — a plan, a prediction, a guess about now",
          "<b>futuro anteriore</b> — the future before the future, a guess about the past",
          "<b>condizionale presente</b> — a request, advice, a wish"
        ]
      },
      {
        h: "The commonest mistakes at this stage",
        list: [
          "using the passato prossimo where the imperfetto is needed (description)",
          "no participle agreement with <em>essere</em>: \"siamo andato\"",
          "no participle agreement with the pronoun: \"l'ho visto\" about a woman",
          "a conditional after <em>se</em>: \"se avrei\" instead of the correct construction"
        ]
      }
    ],
    grammar: {
      title: "The tenses in one table",
      table: {
        head: ["tense", "example", "when"],
        rows: [
          ["presente", "Lavoro in banca.", "now, habit"],
          ["passato prossimo", "Ieri ho lavorato molto.", "a closed event"],
          ["imperfetto", "Da bambino lavoravo poco.", "background, habit"],
          ["trapassato", "Avevo già lavorato lì.", "an earlier past"],
          ["futuro", "Domani lavorerò da casa.", "a plan"],
          ["futuro anteriore", "Quando avrò finito, esco.", "an earlier future"],
          ["condizionale", "Vorrei lavorare meno.", "a request, a wish"]
        ]
      },
      examples: [
        { tr: "While I was studying, an important email came in." },
        { tr: "When I went out it had already stopped raining." },
        { tr: "I'll call tomorrow as soon as I finish." },
        { tr: "I'd like to ask you something." },
        { tr: "As a little girl I didn't like fish." },
        { tr: "I met her last year in Rome." }
      ]
    },
    vocab: [
      "a tense",
      "a common mistake",
      "agreement",
      "participle",
      "auxiliary verb",
      "to review",
      "to mix up",
      "to tell apart"
    ],
    exercises: [
      { q: "Put in the right forms.", tr: "While I was studying, an important email came in." },
      { q: "Put in the right forms.", tr: "When I went out it had already stopped raining." },
      { q: "Put in the right forms.", tr: "I'll call tomorrow as soon as I finish." },
      {
        q: "\"Siamo andato al mare\" — what's wrong?",
        opts: ["The wrong auxiliary", "No participle agreement (andati)", "Nothing, it's correct"]
      },
      { q: "About a woman: \"L'ho visto ieri\" — what needs fixing?", opts: ["Nothing", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "\"I'd like to ask you something.\"" },
      { tr: "As a little girl I didn't like fish, now I love it." },
      { tr: "Yesterday I went to the movies and I really liked the film." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Review",
    title: "Reviewing the pronouns",
    objectives: [
      "pick the right pronoun",
      "combine pronouns with compound tenses",
      "get ready for the combined pronouns at B1"
    ],
    theory: [
      {
        h: "Four groups to keep apart",
        list: [
          "<b>direct</b>: mi, ti, lo, la, ci, vi, li, le — \"whom? what?\"",
          "<b>indirect</b>: mi, ti, gli, le, ci, vi, gli — \"to whom?\"",
          "<b>reflexive</b>: mi, ti, si, ci, vi, si — an action on yourself",
          "<b>particles</b>: ci (place, a + thing), ne (a part, di + thing)"
        ]
      },
      {
        h: "The decisive test",
        p: "Ask a question about the verb. \"I see <b>whom</b>?\" → direct (<em>lo vedo</em>). \"I'm calling <b>to whom</b>?\" → indirect (<em>gli telefono</em>). If the verb needs <em>a</em>, the pronoun will be indirect."
      },
      {
        h: "What's waiting at B1",
        p: "Combined pronouns (<em>me lo, glielo, ce ne</em>) and the full use of <em>ci</em> and <em>ne</em> in fused verbs. The foundation you're reviewing here is what makes that possible."
      }
    ],
    grammar: {
      title: "Pronouns — summary",
      table: {
        head: ["type", "forms", "example"],
        rows: [
          ["direct", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["indirect", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["reflexive", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "place / a + thing", "Ci vado domani."],
          ["ne", "a part / di + thing", "Ne prendo due."],
          ["agreement", "with the direct only", "Le ho viste."]
        ]
      },
      examples: [
        { tr: "The book? I read it last week." },
        { tr: "Marco? I've already answered him." },
        { tr: "The keys? I can't find them." },
        { tr: "I go to the gym three times a week." },
        { tr: "How many do you want? — I want three." },
        { tr: "I got up at six." }
      ]
    },
    vocab: [
      "pronoun",
      "direct / indirect",
      "reflexive",
      "to replace",
      "to repeat",
      "to avoid",
      "repetition",
      "fluent"
    ],
    exercises: [
      { q: "\"Telefono a Giulia\" →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "\"Vedo Giulia\" →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "\"Le chiavi? Non ___ trovo.\"" },
      { q: "\"Quante mele vuoi? — ___ voglio tre.\"" },
      { q: "\"In palestra ___ vado tre volte a settimana.\"" },
      { q: "Fill in the ending: \"Le ho vist___.\" (them, women)" },
      {
        q: "Which verbs take an indirect pronoun?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Fill in the pronouns.",
        tr: "The book? I read it. Marco? I wrote to him yesterday. The market? I'm going on Saturday."
      },
      { tr: "I sent her an email, but she hasn't answered me yet." },
      { tr: "The movie? I saw it yesterday and I really liked it." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Review",
    title: "Ready for B1",
    objectives: [
      "check that you've mastered the whole A2 level",
      "see what's coming at B1",
      "decide whether to move on"
    ],
    theory: [
      {
        h: "What you should be able to do by now",
        list: [
          "talk about the past in two tenses and choose the right one",
          "talk about plans and dreams",
          "handle travel, a hotel, the doctor's, work",
          "use pronouns instead of repeating nouns",
          "write a short email and get through a phone call",
          "make a request, give advice, decline politely"
        ]
      },
      {
        h: "What arrives at B1",
        p: "<strong>Congiuntivo</strong> — the mood for opinion, doubt and emotion. English has all but lost its subjunctive, so there's no instinct to transfer and it will feel like inventing a whole new gear. Plus combined pronouns, the full <em>ci</em> and <em>ne</em>, relative clauses, reported speech, argument, and Italian bureaucracy."
      },
      {
        tip: "Don't move on to B1 with a score under 70%. The congiuntivo is built on the A2 tenses — gaps there turn into a wall."
      }
    ],
    vocab: [
      "the subjunctive",
      "an opinion",
      "a doubt",
      "to argue a point",
      "bureaucracy",
      "ready for",
      "progress",
      "I can do this"
    ],
    exercises: [
      { q: "Put in the tenses.", tr: "Yesterday I went to the movies with Marta. The film was long, but good." },
      {  },
      {  },
      {  },
      { q: "\"Le chiavi? ___ ho perse.\"" },
      { q: "\"A Marco ___ ho telefonato ieri.\"" },
      { q: "\"Quanto ___ vuole per arrivare?\"" },
      { q: "\"Mi ___ male la schiena.\"" },
      { q: "\"Ho intenzione ___ cambiare lavoro.\"" },
      { q: "\"When I finish work, I'll call you.\"" },
      { tr: "While I was walking home, I ran into Giulia and talked to her about the project." },
      { tr: "Next year I'd like to move to Italy for work." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Exam",
    title: "A2 final exam",
    objectives: ["check that you're ready to move on to B1"],
    theory: [{ p: "Twelve questions from the whole level. You pass at 70%." }],
    exercises: [
      {  },
      {  },
      { q: "Put in the tenses.", tr: "While I was waiting for the bus, I ran into an old friend." },
      { q: "\"Quando sono arrivato, il treno ___ già partito.\"" },
      { q: "\"Hai visto Anna?\" →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "\"A Marco ___ ho risposto.\"" },
      { q: "\"Quanti ne vuoi? — ___ voglio due.\"" },
      { q: "\"___ meglio riposare.\" (it would be better)" },
      { q: "\"Qui ___ i panini.\" (are sold)" },
      { q: "The adverb from \"facile\": ___" },
      { q: "\"I'd like to move the meeting to Thursday.\"" },
      { tr: "Yesterday I went to the doctor because my throat hurt." }
    ]
  }
});
