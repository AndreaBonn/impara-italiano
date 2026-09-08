/* ============================================================
   Learner-language text (en) for data/core/a2-01.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("en", {
  "unit:a2-u01": { title: "Then and now", grammarNote: "imperfetto · imperfetto versus passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Memories",
    title: "Imperfetto: description and habit",
    objectives: [
      "form the imperfetto in all three conjugations",
      "describe how things used to be",
      "talk about past habits"
    ],
    theory: [
      {
        h: "A past tense with no edges",
        p: "<strong>Imperfetto</strong> doesn't say when something started or stopped. It paints background, states and habits: <em>da bambino abitavo in campagna</em> (\"as a child I lived in the country\"). English \"I lived\" is ambiguous between that and \"I moved there\"; Italian isn't, and that distinction is the whole point of this lesson."
      },
      {
        h: "The conjugation has almost no exceptions",
        p: "Infinitive stem + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Four verbs have an odd stem: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). That's all — the imperfetto is the most regular tense in Italian."
      },
      {
        h: "Three typical uses",
        list: [
          "<b>description</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>habit</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>a state or a feeling</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "English does have the distinction, but splits it across two constructions: \"I <b>used to</b> go\" and \"I <b>was</b> going\" are both imperfetto, while \"I went\" is passato prossimo. That's a usable anchor: if you'd naturally say \"used to\" or \"was -ing\", you want the imperfetto. The trap is that English also allows plain \"I went\" for a habit — \"every summer we went to the beach\" — and there Italian still requires <em>andavamo</em>."
      }
    ],
    grammar: {
      title: "Imperfetto — conjugation",
      table: {
        head: ["person", "parlare", "prendere", "dormire", "essere"],
        rows: [
          ["io", "parlavo", "prendevo", "dormivo", "ero"],
          ["tu", "parlavi", "prendevi", "dormivi", "eri"],
          ["lui / lei", "parlava", "prendeva", "dormiva", "era"],
          ["noi", "parlavamo", "prendevamo", "dormivamo", "eravamo"],
          ["voi", "parlavate", "prendevate", "dormivate", "eravate"],
          ["loro", "parlavano", "prendevano", "dormivano", "erano"]
        ]
      },
      examples: [
        { tr: "As a child I spent the summers at my grandparents'." },
        { tr: "It was a gray day and it was cold." },
        { tr: "I used to smoke, I've quit now." },
        { tr: "I didn't know you lived here." },
        { tr: "While I was studying, I listened to the radio." },
        { tr: "What did your grandfather do for a living?" }
      ]
    },
    vocab: [
      "as a child",
      "back then",
      "once, formerly",
      "usually",
      "every summer",
      "often",
      "a memory",
      "childhood",
      "grandparents",
      "the countryside",
      "to stop doing something",
      "I missed it"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "\"Ogni estate andavamo al mare\" describes:",
        opts: ["a single trip", "a repeated habit in the past", "a plan for the future"]
      },
      { q: "Fill in: \"Da bambino ___ in campagna.\" (I lived — abitare)" },
      { q: "Fill in: \"___ una giornata fredda.\" (it was)" },
      {
        q: "Fill in the memory.",
        tr: "As a little girl I spent the summers at my grandparents'. The house was big and every evening we all ate together."
      },
      { q: "\"I used to smoke, I've quit now.\"" },
      { tr: "As a child I played soccer every afternoon." },
      { tr: "As a little girl I lived in a house near the sea." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Memories",
    title: "Imperfetto versus passato prossimo",
    objectives: [
      "pick the right past tense",
      "combine both in one sentence",
      "recognize the signals that point to one or the other"
    ],
    theory: [
      {
        h: "Background versus event",
        p: "This is the single most important grammatical decision at A2. <strong>Imperfetto</strong> paints the background: what was going on, how things were, what kept happening. <strong>Passato prossimo</strong> brings in the event: what happened, what interrupted the background, what occurred once."
      },
      {
        h: "The classic pair",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> — Leaving was in progress (imperfetto), the phone rang at a single point (passato prossimo). Swap the tenses and the sentence turns absurd. English does this with \"While I was leaving, the phone rang\", so the shape is familiar."
      },
      {
        h: "Signals in the text",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        trap: "A duration <b>with boundaries</b> forces the passato prossimo: <em>ho lavorato <b>per tre ore</b></em> (finished, closed off). Duration with no boundaries is imperfetto: <em>lavoravo mentre lui dormiva</em>. English \"I worked for three hours\" and \"I was working\" mark the same split, but \"I worked\" alone covers both, which is where the mistakes come from."
      },
      {
        h: "Verbs that change meaning",
        p: "A few verbs shift sense with the tense: <em>sapevo</em> (I knew, a state) versus <em>ho saputo</em> (I found out, a moment); <em>conoscevo</em> (I knew someone) versus <em>ho conosciuto</em> (I met them); <em>volevo</em> (I wanted) versus <em>ho voluto</em> (I decided, I insisted)."
      }
    ],
    grammar: {
      title: "Which tense to choose",
      table: {
        head: ["imperfetto", "passato prossimo"],
        rows: [
          ["Pioveva e faceva freddo.", "Ha smesso di piovere alle sei."],
          ["Ogni sabato andavamo al mercato.", "Sabato scorso siamo andati al mercato."],
          ["Ero stanca.", "Mi sono stancata subito."],
          ["Mentre mangiavo…", "…è arrivato Marco."],
          ["Sapevo la verità.", "Ho saputo la verità ieri."],
          ["Conoscevo bene Roma.", "Ho conosciuto Marco a Roma."]
        ]
      },
      examples: [
        { tr: "While I was leaving, the phone rang." },
        { tr: "Yesterday I worked for three hours.", note: "boundaries → passato prossimo" },
        { tr: "When I was young I worked in a bar." },
        { tr: "I met my wife at a concert." },
        { tr: "I didn't know you were here." },
        { tr: "Suddenly the power went out." }
      ]
    },
    vocab: [
      "while",
      "suddenly",
      "all at once",
      "last year",
      "for three hours",
      "to ring (a phone)",
      "to fall",
      "to happen",
      "to know / I met",
      "to know / I found out",
      "what happened?",
      "luckily"
    ],
    exercises: [
      {
        q: "\"___ (uscire, io) di casa quando ___ (squillare) il telefono.\" Which tenses?",
        opts: ["both imperfetto", "imperfetto + passato prossimo", "both passato prossimo"],
        why: "The background (leaving) in the imperfetto, the event (the ring) in the passato prossimo."
      },
      { q: "Put in the right form.", tr: "While I was eating, Marco arrived." },
      { q: "Put in the right form.", tr: "Yesterday I worked for three hours, then I went out with friends." },
      {
        q: "\"Ho conosciuto Marco a Roma\" means:",
        opts: ["I knew Marco in Rome", "I met Marco in Rome", "I know Marco from Rome"]
      },
      {
        q: "\"Ieri ho lavorato per tre ore.\" Why not the imperfetto?",
        opts: ["Because it's a habit", "Because the duration has clear boundaries", "Because it's a description"]
      },
      {
        q: "Which expressions usually go with the imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "\"I didn't know you lived here.\"" },
      {
        q: "Fill in the story.",
        tr: "It was a cold day. It was raining and I didn't have an umbrella. Suddenly the bus arrived."
      },
      { tr: "While I was walking home, I ran into an old friend." },
      { tr: "As a child I went to the beach every summer, but last year I went to the mountains." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Memories",
    title: "Describing change",
    objectives: [
      "compare the past with the present",
      "use expressions like non c'era più, adesso invece",
      "say how something has changed"
    ],
    theory: [
      {
        h: "The prima / adesso contrast",
        p: "Setting two tenses side by side is how you show change: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> The structure is simple, but it takes deliberate switching between the imperfetto (back then) and the present (today)."
      },
      {
        h: "C'era and c'erano",
        p: "The imperfetto of <em>c'è / ci sono</em> is <strong>c'era / c'erano</strong> — \"there was\" and \"there were\". Very common when describing places: <em>C'erano meno macchine e più negozi.</em>"
      },
      {
        h: "Contrast expressions",
        list: [
          "<em>prima… adesso / oggi</em> — back then… now",
          "<em>invece</em> — whereas, on the other hand",
          "<em>non… più</em> — not any more: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — it's changed a lot"
        ]
      },
      {
        tip: "<em>Non… più</em> wraps around the verb like <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. In the passato prossimo <em>più</em> goes between auxiliary and participle: <em>non ho più visto</em>."
      }
    ],
    grammar: {
      title: "Past versus present",
      table: {
        head: ["back then (imperfetto)", "today (present)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        { tr: "There used to be a market here, now it's a parking lot." },
        { tr: "The city has changed a lot." },
        { tr: "The old shops are gone." },
        { tr: "The neighborhood, on the other hand, has gotten livelier." },
        { tr: "When I was little, people played in the street." },
        { tr: "Everything's different now." }
      ]
    },
    vocab: [
      "there was / there were",
      "to change",
      "it's changed a lot",
      "whereas, on the other hand",
      "not any more",
      "back then",
      "neighborhood",
      "traffic",
      "crowded",
      "quiet",
      "to become",
      "better / worse"
    ],
    exercises: [
      { q: "The imperfetto of \"c'è\": ___" },
      { q: "The imperfetto of \"ci sono\": ___" },
      { q: "Fill in: \"Non abito ___ qui.\" (I don't live here any more)" },
      {
        q: "Where does \"più\" go in the passato prossimo?",
        opts: ["Before non", "Between the auxiliary and the participle", "At the end"],
        why: "Non ho più visto — just like già and mai."
      },
      {
        q: "Fill in the description of what changed.",
        tr: "There used to be a movie theater here, now it's a supermarket. The neighborhood has changed a lot."
      },
      { q: "\"The old shops are gone.\"" },
      { tr: "When I was little, people played in the street." },
      { q: "Match them up.", pairs: ["on the other hand", "crowded", "to become", "traffic"] },
      { tr: "Twenty years ago there were fewer cars and more local shops." },
      { tr: "My city has changed a lot over the last ten years." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Memories",
    title: "Talking about the past",
    objectives: [
      "hold a conversation about memories",
      "react to someone else's story",
      "use the trapassato prossimo in simple cases"
    ],
    theory: [
      {
        h: "Reactions are mandatory",
        p: "Italian conversation doesn't tolerate silent listening. While someone tells a story you throw in <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Saying nothing reads as lack of interest, not as politeness — which is the opposite of what a quiet listener intends."
      },
      {
        h: "Trapassato prossimo — the past before the past",
        p: "Imperfetto of <em>avere/essere</em> + participle: <em>avevo mangiato</em>, <em>ero uscito</em>. You use it when one event precedes another: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em> It matches English \"had left\" almost exactly."
      },
      {
        h: "When it's necessary",
        p: "Without it the order of events gets murky. <em>Quando sono arrivato, il treno è partito</em> means the train left <b>after</b> I got there. <em>Era già partito</em> means it left <b>before</b>."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> is the standard opener for a reminiscing conversation. The answer: <em>Certo che me lo ricordo!</em>"
      }
    ],
    grammar: {
      title: "Trapassato prossimo and reactions",
      table: {
        head: ["construction", "example", "in English"],
        rows: [
          ["avevo + participle", "Avevo già mangiato.", "I had already eaten."],
          ["ero + participle", "Ero appena uscito.", "I had just left."],
          ["reaction", "Davvero? / Ma dai!", "Really? / No way!"],
          ["reaction", "E poi? Che è successo?", "And then? What happened?"],
          ["reaction", "Mamma mia! / Che bello!", "Oh wow! / How nice!"],
          ["question", "Ti ricordi quando…?", "Do you remember when…?"]
        ]
      },
      examples: [
        { tr: "When I got there, the party had already ended." },
        { tr: "I didn't go out because I'd promised to do some work." },
        { tr: "Do you remember when we went to Sicily?" },
        { tr: "Of course I remember!" },
        { tr: "No way, I don't believe it!" },
        { tr: "And what happened next?" }
      ]
    },
    vocab: [
      "do you remember?",
      "I remember it",
      "to forget",
      "really?",
      "no way!",
      "how nice!",
      "oh wow!",
      "and then?",
      "what happened?",
      "I had already…",
      "just now",
      "an embarrassing moment"
    ],
    exercises: [
      {
        q: "\"Quando sono arrivato, il treno era già partito.\" Which came first?",
        opts: ["My arrival", "The train leaving", "Both at once"]
      },
      { q: "Fill in: \"Quando sono arrivata, la festa ___ già finita.\"" },
      { q: "Fill in: \"Non avevo fame perché ___ già mangiato.\"" },
      { q: "Match the reactions.", pairs: ["no way!", "really?", "and then?", "how nice!"] },
      { q: "Fill it in.", tr: "When we went out it had already stopped raining, but the street was still wet." },
      { q: "\"Do you remember when we went to Sicily?\"" },
      {
        q: "A friend tells you about her vacation.",
        setting: "Coffee after work, September.",
        lines: [
          { tr: "In August I went to Puglia with my family." },
          { tr: "React with interest and ask how it was.", answerTr: "How nice! How was it?" },
          { tr: "Great, but on the first day we lost our luggage." },
          { tr: "React sympathetically and ask what happened next.", answerTr: "Oh no! And then?" },
          { tr: "They found it two days later. Luckily!" }
        ]
      },
      { tr: "I didn't go out because I'd promised to do some work." },
      { tr: "When I got back, my sister had already left." },
      { tr: "Do you remember when we were in the same class?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Test",
    title: "Unit 1 test",
    objectives: ["check the imperfetto, its contrast with the passato prossimo, and the trapassato"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      {  },
      {  },
      { q: "Put in the right tense.", tr: "While I was leaving, the phone rang." },
      { q: "Put in the right tense.", tr: "Yesterday I worked for four hours." },
      { q: "\"Ho conosciuto Anna\" means:", opts: ["I knew Anna", "I met Anna", "I know Anna"] },
      { q: "\"Prima qui ___ un cinema.\" (there was)" },
      { q: "\"Non abito ___ qui.\" (not any more)" },
      { q: "\"Quando sono arrivato, il treno ___ già partito.\"" },
      { tr: "As a child I spent every summer at the sea with my grandparents." },
      { tr: "While I was walking home, I ran into an old friend." }
    ]
  },
  "unit:a2-u02": { title: "Traveling", grammarNote: "futuro semplice · bookings · station and hotel" },
  "lesson:a2-u02-l1": {
    theme: "Travel",
    title: "Trains and tickets",
    objectives: [
      "buy a ticket and understand station announcements",
      "handle a platform change and a delay",
      "know the difference between train types"
    ],
    theory: [
      {
        h: "Types of train",
        p: "<strong>Regionale</strong> stops everywhere, is cheap and needs no seat reservation. <strong>Intercity</strong> is the middle tier. <strong>Frecciarossa / Italo</strong> are the fast services with a compulsory seat reservation — the ticket is valid for that specific train at that specific time."
      },
      {
        h: "Validating your ticket",
        p: "A <em>regionale</em> ticket bought without a specific time has to be <strong>validated</strong> (<em>convalidare</em>) in the yellow or green machine before you reach the platform. Not validating means a fine, and the inspectors don't accept explanations. Tickets bought in the app are already active."
      },
      {
        h: "Announcements you have to understand",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — the train is running twenty minutes late",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — platform change",
          "<em>È in arrivo al binario 3</em> — arriving at platform 3",
          "<em>Il treno è soppresso</em> — the train is canceled"
        ]
      },
      {
        tip: "<em>Binario</em> means both the platform and the track. The number only appears on the board ten or fifteen minutes before departure, which catches out anyone used to fixed platforms."
      }
    ],
    grammar: {
      title: "Phrases at the station",
      table: {
        head: ["situation", "in Italian", "in English"],
        rows: [
          ["ticket", "Un biglietto per Firenze, andata e ritorno.", "A round-trip ticket to Florence."],
          ["one way", "Solo andata.", "One way only."],
          ["platform", "Da quale binario parte?", "Which platform does it leave from?"],
          [
            "delay",
            "Il treno è in ritardo di venti minuti.",
            "The train is twenty minutes late."
          ],
          ["connection", "Devo cambiare treno?", "Do I have to change trains?"],
          ["validating", "Devo convalidare il biglietto?", "Do I have to validate the ticket?"]
        ]
      },
      examples: [
        { tr: "A ticket to Naples for tomorrow morning, please." },
        { tr: "First or second class?" },
        { tr: "Is it direct, or do I have to change?" },
        { tr: "The 2:35 train is canceled." },
        { tr: "Is this seat taken?" },
        { tr: "Excuse me, is this car 5?" }
      ]
    },
    vocab: [
      "ticket",
      "round trip",
      "one way",
      "platform, track",
      "car (of a train)",
      "seat",
      "to change trains",
      "connection",
      "delay",
      "canceled",
      "to validate a ticket",
      "conductor"
    ],
    exercises: [
      {
        q: "What does \"il treno è soppresso\" mean?",
        opts: ["The train is delayed", "The train is canceled", "The train is full"]
      },
      {
        q: "Which ticket has to be validated before you board?",
        opts: ["A Frecciarossa with a reservation", "A regionale with no specific time", "Every ticket"]
      },
      { q: "Fill in: \"Da quale ___ parte il treno?\"" },
      { q: "Fill in: \"Un biglietto ___ e ritorno.\"" },
      { q: "Match them up.", pairs: ["train car", "connection", "delay", "to validate a ticket"] },
      { q: "\"Do I have to change trains?\"" },
      {
        q: "You're buying a ticket at the window.",
        setting: "The ticket window, a line behind you.",
        lines: [
          { tr: "Good morning, what can I do for you?" },
          {
            tr: "Ask for a ticket to Florence for this afternoon.",
            answerTr: "A ticket to Florence for this afternoon."
          },
          { tr: "Regional or Frecciarossa?" },
          { tr: "Ask how much longer the regional takes.", answerTr: "How much longer does the regional take?" },
          { tr: "An hour and a half longer. The Freccia is forty-two euros." },
          {
            tr: "Choose the Frecciarossa and ask about the platform.",
            answerTr: "I'll take the Frecciarossa. Which platform does it leave from?"
          }
        ]
      },
      {
        q: "Fill in the station announcement.",
        tr: "The regional train to Bologna is running twenty minutes late. Platform change: it will leave from platform 8."
      },
      { tr: "The train to Rome leaves from platform twelve, ten minutes late." },
      { tr: "Excuse me, do I have to validate this ticket?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Travel",
    title: "Futuro semplice",
    objectives: [
      "form the simple future",
      "know the irregular stems",
      "use the future to express a guess"
    ],
    theory: [
      {
        h: "Forming it",
        p: "Take the infinitive, drop the final <em>-e</em> and add <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Verbs in <b>-are</b> also change that <em>a</em> to an <em>e</em>: <em>parlare → parler-ò</em>. It's an ending, not an auxiliary — there is no Italian \"will\", so the whole English structure disappears."
      },
      {
        h: "The irregular stems — you have to know them",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. The endings are always the same."
      },
      {
        h: "The future isn't only about the future",
        p: "A very common use is a <b>guess about the present</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> (\"it must be about three\"). Or <em>Dov'è Marco? — Sarà a casa.</em> English does exactly this with \"must be\", so the idea transfers — it's the form that surprises."
      },
      {
        trap: "For a near, certain future Italians more often use the <b>present tense</b>: <em>domani parto alle sette</em>. The futuro there sounds stiff, or less certain. Save it for predictions and distant plans."
      }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["person", "parlare", "prendere", "partire", "essere"],
        rows: [
          ["io", "parlerò", "prenderò", "partirò", "sarò"],
          ["tu", "parlerai", "prenderai", "partirai", "sarai"],
          ["lui / lei", "parlerà", "prenderà", "partirà", "sarà"],
          ["noi", "parleremo", "prenderemo", "partiremo", "saremo"],
          ["voi", "parlerete", "prenderete", "partirete", "sarete"],
          ["loro", "parleranno", "prenderanno", "partiranno", "saranno"]
        ]
      },
      examples: [
        { tr: "Next year I'll be living in Italy." },
        { tr: "I'll call you as soon as I arrive." },
        { tr: "We're leaving at seven tomorrow.", note: "near future: present tense" },
        { tr: "What time is it? — It must be about three.", note: "a guess" },
        { tr: "Where could my ticket be?" },
        { tr: "There won't be time for everything." }
      ]
    },
    vocab: [
      "tomorrow",
      "the day after tomorrow",
      "next week",
      "in three days",
      "as soon as",
      "maybe",
      "definitely",
      "probably",
      "a plan",
      "to move (house)",
      "to book in advance",
      "we'll see"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "What happens to -are verbs in the future?",
        opts: ["Nothing", "The a becomes an e before the ending", "The consonant doubles"]
      },
      { q: "The future of \"avere\", io form: ___" },
      { q: "The future of \"venire\", loro form: ___" },
      {
        q: "\"Saranno le tre\" means:",
        opts: ["It will be three o'clock (in the future)", "It must be about three (a guess)", "It was three"]
      },
      { q: "Fill in the plans.", tr: "Next year I'll move to Bologna and look for work there." },
      { tr: "I'll call you as soon as I get to the station." },
      { tr: "Next year I'll be living in Italy." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Travel",
    title: "Hotels and accommodation",
    objectives: ["check into a hotel", "report a problem with the room", "ask about services and check-out"],
    theory: [
      {
        h: "Checking in, in Italian",
        p: "The receptionist will ask for ID: <em>Un documento, per favore</em>. The law requires guests to be registered with the police, so a passport is mandatory — including in short-term rentals."
      },
      {
        h: "Tassa di soggiorno",
        p: "Almost every Italian city charges a <strong>tourist tax</strong> (€1-7 per person per night), paid on site and usually in cash, regardless of what you paid online. It isn't a scam — it's a municipal charge, and your booking site rarely mentions it."
      },
      {
        h: "Reporting problems",
        p: "The construction is simple: <em>non funziona</em> (\"doesn't work\") + the thing. <em>L'aria condizionata non funziona.</em> Plus <em>manca</em> (\"is missing\"): <em>Mancano gli asciugamani.</em>"
      },
      {
        tip: "<em>Camera doppia</em> is a room for two, either with one big bed (<em>matrimoniale</em>) or with two (<em>due letti singoli</em>). Worth specifying when you book, because the default varies."
      }
    ],
    grammar: {
      title: "Hotel phrases",
      table: {
        head: ["situation", "in Italian", "in English"],
        rows: [
          ["checking in", "Ho una prenotazione a nome Smith.", "I have a reservation under Smith."],
          ["room type", "Una camera doppia con bagno privato.", "A double room with a private bath."],
          ["breakfast", "La colazione è inclusa?", "Is breakfast included?"],
          ["a problem", "L'aria condizionata non funziona.", "The air conditioning isn't working."],
          ["something missing", "Mancano gli asciugamani.", "There are no towels."],
          ["check-out", "A che ora è il check-out?", "What time is check-out?"]
        ]
      },
      examples: [
        { tr: "Good evening, I have a reservation for three nights." },
        { tr: "Your ID, please." },
        { tr: "The tourist tax is two euros per person per night." },
        { tr: "Is there wifi in the room?" },
        { tr: "Can I leave my bags after check-out?" },
        { tr: "The room is on the third floor, the elevator is over there." }
      ]
    },
    vocab: [
      "reservation",
      "single / double room",
      "with a double bed",
      "key / keycard",
      "floor",
      "elevator",
      "towel",
      "sheet",
      "tourist tax",
      "isn't working",
      "is missing",
      "check-out"
    ],
    exercises: [
      {
        q: "What is the \"tassa di soggiorno\"?",
        opts: ["A deposit", "A tourist tax paid on site", "A cleaning fee"]
      },
      { q: "Fill in: \"Ho una ___ a nome Smith.\"" },
      { q: "Fill in: \"L'aria condizionata non ___.\"" },
      { q: "Fill in: \"___ gli asciugamani.\" (the towels are missing)" },
      { q: "Match them up.", pairs: ["elevator", "sheet", "floor", "key"] },
      { q: "\"Is breakfast included?\"" },
      {
        q: "You're checking into a hotel.",
        setting: "The front desk, evening, after a long trip.",
        lines: [
          { tr: "Good evening! Do you have a reservation?" },
          {
            tr: "Confirm, give your name and how long you're staying.",
            answerTr: "Yes, under Smith, for three nights."
          },
          { tr: "Perfect. Your ID, please. The tourist tax is two euros a night." },
          { tr: "Ask whether breakfast is included.", answerTr: "Is breakfast included?" },
          { tr: "Yes, from seven to ten, on the first floor." }
        ]
      },
      {
        q: "Report a problem.",
        tr: "Hello, I'm calling from room 204: the wifi isn't working and there are no clean towels."
      },
      { tr: "The room is on the third floor, breakfast is from seven to ten." },
      { tr: "Can I leave my bags after check-out?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Travel",
    title: "Futuro anteriore and planning",
    objectives: [
      "form the futuro anteriore",
      "order two future actions",
      "express a guess about the past"
    ],
    theory: [
      {
        h: "The future before the future",
        p: "<strong>Futuro anteriore</strong> = the future of <em>avere/essere</em> + participle: <em>avrò finito</em>, <em>sarò arrivato</em>. It describes an action finished <b>before</b> another future one: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em> English does this with \"will have finished\"."
      },
      {
        h: "Speech usually shortens it",
        p: "Instead of <em>quando avrò finito, ti chiamerò</em> Italians will say <em>quando finisco, ti chiamo</em>. The futuro anteriore stays in more careful register and in writing — but you have to be able to understand it."
      },
      {
        h: "A guess about the past",
        p: "This use is alive and frequent: <em>Non risponde… <b>avrà perso</b> il treno.</em> (\"he must have missed the train\"). It's the past-tense twin of the futuro semplice guess, and English matches it with \"must have\"."
      },
      {
        tip: "Signals that often precede the futuro anteriore: <em>quando, appena, dopo che, una volta che</em>."
      }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["person", "avere + participle", "essere + participle"],
        rows: [
          ["io", "avrò finito", "sarò partito/a"],
          ["tu", "avrai finito", "sarai partito/a"],
          ["lui / lei", "avrà finito", "sarà partito/a"],
          ["noi", "avremo finito", "saremo partiti/e"],
          ["voi", "avrete finito", "sarete partiti/e"],
          ["loro", "avranno finito", "saranno partiti/e"]
        ]
      },
      examples: [
        { tr: "When I've finished, I'll call you." },
        { tr: "As soon as we get there, we'll text you." },
        { tr: "He's not answering, he must have missed the train." },
        { tr: "Where did my ticket get to?" },
        { tr: "By Friday we'll have booked everything." },
        { tr: "It must have been a misunderstanding." }
      ]
    },
    vocab: [
      "as soon as",
      "once (that)",
      "by (a deadline)",
      "misunderstanding",
      "an unexpected problem",
      "itinerary",
      "departure / arrival",
      "carry-on",
      "boarding",
      "flight",
      "layover",
      "to cancel"
    ],
    exercises: [
      { q: "The futuro anteriore of \"finire\", io form: ___" },
      { q: "The futuro anteriore of \"partire\", noi form (mixed group): ___" },
      {
        q: "\"Avrà perso il treno\" usually means:",
        opts: ["He will miss the train", "He must have missed the train", "He definitely missed the train"]
      },
      { q: "Fill it in.", tr: "When we get to the hotel, we'll write to you." },
      { q: "\"When I've finished work, I'll call you.\"" },
      {
        q: "Which sentence is more colloquial?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "They're equally colloquial."]
      },
      { q: "Match them up.", pairs: ["boarding", "flight", "by (a deadline)", "to cancel"] },
      { tr: "By Friday we'll have booked everything." },
      { tr: "As soon as we get to the airport, we'll send you a message." },
      { tr: "He's not picking up, he must have missed his connection." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Test",
    title: "Unit 2 test",
    objectives: ["check the future tenses, station and hotel vocabulary"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      {  },
      { q: "The future of \"andare\", io form: ___" },
      { q: "The future of \"potere\", noi form: ___" },
      { q: "\"Il treno è soppresso\":", opts: ["delayed", "canceled", "full"] },
      { q: "\"Da quale ___ parte?\"" },
      { q: "\"L'aria condizionata non ___.\"" },
      { q: "The futuro anteriore of \"finire\", io: ___" },
      { q: "\"I have a reservation for three nights.\"" },
      { tr: "The flight to Warsaw leaves from gate B12, twenty minutes late." },
      { tr: "A one-way ticket to Bologna, please." }
    ]
  },
  "unit:a2-u03": {
    title: "Object pronouns",
    grammarNote: "direct and indirect pronouns · participle agreement"
  },
  "lesson:a2-u03-l1": {
    theme: "Grammar",
    title: "Direct object pronouns",
    objectives: [
      "replace a noun with a pronoun",
      "put the pronoun in the right place",
      "stop repeating the same word"
    ],
    theory: [
      {
        h: "What they're for",
        p: "Repeating the noun sounds heavy in Italian. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> The pronoun stands in for what's already known. Without it you sound like a textbook exercise rather than a conversation."
      },
      {
        h: "The forms",
        p: "<em>mi</em> (me), <em>ti</em> (you), <strong>lo</strong> (him / it, m), <strong>la</strong> (her / it, f), <em>ci</em> (us), <em>vi</em> (you pl.), <strong>li</strong> (them, m), <strong>le</strong> (them, f)."
      },
      {
        h: "Position",
        p: "Before the conjugated verb: <em>lo vedo</em>, <em>non la conosco</em>. English puts the object after the verb (\"I see him\"), so this inversion has to become a habit. With an infinitive the pronoun attaches to the end: <em>voglio veder<b>lo</b></em> — or goes before the modal: <em><b>lo</b> voglio vedere</em>. Both are correct."
      },
      {
        trap: "<b>Lo</b> and <b>la</b> contract before a vowel: <em>l'ho visto</em>, <em>l'ho vista</em>. <b>Li</b> and <b>le</b> never contract."
      }
    ],
    grammar: {
      title: "Direct object pronouns",
      table: {
        head: ["pronoun", "stands for", "example"],
        rows: [
          ["mi", "me", "Mi chiami stasera?"],
          ["ti", "you", "Ti vedo domani."],
          ["lo", "a masculine thing/person", "Il libro? Lo leggo stasera."],
          ["la", "a feminine thing/person", "La pizza? La prendo io."],
          ["ci", "us", "Ci aspetti?"],
          ["vi", "you (pl.)", "Vi chiamo dopo."],
          ["li", "them (m)", "I biglietti? Li ho comprati."],
          ["le", "them (f)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        { tr: "Do you know Marco? — Yes, I know him well." },
        { tr: "Are you taking the car? — No, I'm not." },
        { tr: "Where are the keys? I can't find them." },
        { tr: "I want to see him right away." },
        { tr: "Can you wait for me five minutes?" },
        { tr: "See you tomorrow." }
      ]
    },
    vocab: [
      "to know (a person, a place)",
      "to know (a fact), to know how",
      "to find",
      "to lose",
      "to wait for",
      "to call",
      "to invite",
      "to walk someone somewhere",
      "newspaper",
      "keys",
      "right away",
      "later"
    ],
    exercises: [
      {
        q: "\"Conosci Anna?\" — how do you answer yes, using a pronoun?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Fill in: \"I biglietti? ___ ho comprati ieri.\"" },
      { q: "Fill in: \"La pizza? ___ prendo io.\"" },
      {
        q: "Which sentences are correct?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Both forms are correct."]
      },
      {
        q: "Replace the repetitions with pronouns.",
        tr: "— Are you buying the newspaper? — Yes, I am. — And the magazines? — No, I'm not."
      },
      { q: "\"I don't know him.\"" },
      {
        q: "Which direct object pronouns can contract before a vowel?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "Can you wait for me five minutes?" },
      { tr: "I can't find the keys, maybe I left them at the office." },
      { tr: "Do you know that restaurant? — Yes, I know it well." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Grammar",
    title: "Participle agreement with the pronoun",
    objectives: [
      "match the participle to the direct pronoun",
      "tell apart the cases where agreement is required",
      "write l'ho visto / l'ho vista correctly"
    ],
    theory: [
      {
        h: "The rule in one sentence",
        p: "In compound tenses with <em>avere</em>, the participle <b>agrees with a direct object pronoun</b> that comes before the verb. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. With no pronoun the participle stays invariable. English has nothing like this, so there's no instinct to lean on."
      },
      {
        h: "Four forms",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "The contraction <em>l'</em> hides the gender — which means the <b>participle ending</b> is what tells you who's meant. <em>L'ho visto</em> (him) and <em>l'ho vista</em> (her) differ by one letter and mean different things."
      },
      {
        h: "Where there is NO agreement",
        p: "With an <b>indirect</b> pronoun the participle doesn't change: <em>Le ho parlato</em> (I spoke to her), never \"parlata\". This is the commonest mistake at this stage: you have to know whether the pronoun is direct or indirect."
      }
    ],
    grammar: {
      title: "Participle agreement",
      table: {
        head: ["full sentence", "with a pronoun", "note"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "indirect → no agreement"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "things count too"]
        ]
      },
      examples: [
        { tr: "Have you seen Giulia? — Yes, I saw her yesterday." },
        { tr: "The documents? I've already sent them." },
        { tr: "The photos? I haven't looked at them yet." },
        { tr: "I wrote her an email.", note: "indirect — no agreement" },
        { tr: "I met her in Rome." },
        { tr: "They invited us to the party." }
      ]
    },
    vocab: [
      "to send",
      "to look at",
      "to receive",
      "to give back",
      "to lend",
      "document",
      "photo",
      "message",
      "email",
      "yet, still",
      "already",
      "by chance"
    ],
    exercises: [
      {
        q: "\"Hai visto Anna?\" — the correct answer:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Fill in: \"I libri? ___ ho comprat___.\" — write both parts separated by a space",
        hint: "pronoun + participle ending",
        why: "Li ho comprati — the pronoun li forces the -i ending."
      },
      { q: "Fill in the ending: \"Le chiavi? Le ho pers___.\"" },
      {
        q: "\"Le ho parlato\" — why not \"parlata\"?",
        opts: ["It's a mistake", "Because \"le\" here is indirect (to her)", "Because parlare is irregular"]
      },
      { q: "Fill in the endings.", tr: "The email? I've already sent it. The photos? I haven't looked at them yet." },
      { q: "\"I met her in Rome.\"" },
      {
        q: "In which sentences must the participle agree?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "I've already sent the documents." },
      { tr: "I haven't looked at the photos from the trip yet." },
      { tr: "Have you seen Giulia? — Yes, I saw her last night." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Grammar",
    title: "Indirect object pronouns",
    objectives: [
      "tell a direct object from an indirect one",
      "use gli and le correctly",
      "know the verbs that require an indirect object"
    ],
    theory: [
      {
        h: "To whom, not whom",
        p: "An <b>indirect</b> pronoun replaces <em>a + person</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> A <b>direct</b> pronoun replaces a noun with no preposition: <em>Vedo Marco → <b>Lo</b> vedo.</em>"
      },
      {
        h: "The forms",
        p: "<em>mi, ti, <b>gli</b> (to him), <b>le</b> (to her), ci, vi, <b>gli</b> (to them)</em>. In formal register \"to them\" is <em>loro</em>, placed after the verb: <em>Telefono loro</em> — but in speech it's almost always <em>gli</em>."
      },
      {
        h: "Verbs that catch you out",
        p: "Several Italian verbs take an indirect object where English takes a plain one: <em>telefonare a</em> (to call someone), <em>rispondere a</em> (to answer someone), <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. \"Lo telefono\" is wrong — it has to be <em>gli telefono</em>, literally \"I telephone to him\"."
      },
      {
        trap: "<b>Gli</b> does two completely different jobs: it's an article (<em>gli amici</em>) and a pronoun (<em>gli parlo</em>). Position decides — the article precedes a noun, the pronoun precedes a verb."
      }
    ],
    grammar: {
      title: "Direct versus indirect",
      table: {
        head: ["verb", "type", "example"],
        rows: [
          ["vedere qualcuno", "direct", "Lo vedo domani."],
          ["telefonare a qualcuno", "indirect", "Gli telefono domani."],
          ["conoscere qualcuno", "direct", "La conosco bene."],
          ["scrivere a qualcuno", "indirect", "Le scrivo una mail."],
          ["aspettare qualcuno", "direct", "Ti aspetto."],
          ["rispondere a qualcuno", "indirect", "Gli rispondo subito."]
        ]
      },
      examples: [
        { tr: "Did you call Marco? — Yes, I called him yesterday." },
        { tr: "What did you tell her?" },
        { tr: "I don't believe him at all." },
        { tr: "They answered us right away." },
        { tr: "She really likes traveling." },
        { tr: "I want to talk to him today." }
      ]
    },
    vocab: [
      "to call (someone)",
      "to answer (someone)",
      "to write to",
      "to ask someone",
      "to tell someone",
      "to believe someone",
      "to give as a gift",
      "to lend someone",
      "to send someone",
      "to explain to someone",
      "to advise someone",
      "at all"
    ],
    exercises: [
      { q: "\"Telefono a Marco\" → with a pronoun:", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "\"Vedo Marco\" → with a pronoun:", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Fill in: \"Che cosa ___ hai detto?\" (to her)" },
      { q: "Fill in: \"Non ___ credo.\" (him)" },
      {
        q: "Which verbs require an indirect object (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Fill in the pronouns.",
        tr: "I wrote to Giulia: I sent her an email. Marco isn't answering, I'll call him tomorrow."
      },
      { q: "\"I want to talk to him today.\"" },
      { q: "Match them up.", pairs: ["to give as a gift", "to lend someone", "to explain to someone", "to advise someone"] },
      { tr: "I wrote to her yesterday, but she hasn't answered me yet." },
      { tr: "I'll call him tonight and explain everything to him." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Grammar",
    title: "The imperative with pronouns",
    objectives: [
      "form the imperative in every person",
      "attach a pronoun to an imperative",
      "form the negative in the tu form"
    ],
    theory: [
      {
        h: "The basic forms",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: the other way round — <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: same as the present (parliamo). <b>voi</b>: same as the present (parlate)."
      },
      {
        h: "The negative in the tu form",
        p: "Instead of the imperative you use the <b>infinitive</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. This applies only to the <em>tu</em> form — the other persons take a plain <em>non</em> + the form."
      },
      {
        h: "Pronouns attach to the end",
        p: "<em>Dimmi!</em> (tell me), <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em>. But in the <b>Lei</b> form the pronoun comes first: <em>Mi dica</em>, <em>Lo aspetti</em>."
      },
      {
        trap: "After the short forms <em>fa', da', sta', va', di'</em> the pronoun's consonant <b>doubles</b>: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. The exception is <em>gli</em> — <em>digli</em>, no doubling."
      }
    ],
    grammar: {
      title: "The imperative",
      table: {
        head: ["person", "parlare", "prendere", "sentire", "with a pronoun"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (negative)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        { tr: "Tell me everything!" },
        { tr: "Let me know how it goes." },
        { tr: "Don't worry, I'll take care of it." },
        { tr: "Go ahead, ma'am." },
        { tr: "Let's go there together!" },
        { tr: "Forgive me, I didn't do it on purpose." }
      ]
    },
    vocab: [
      "tell me",
      "let me know",
      "give me",
      "forgive me",
      "wait for me",
      "don't worry",
      "look",
      "listen",
      "take care",
      "come here",
      "stop it",
      "on purpose"
    ],
    exercises: [
      {
        q: "\"non parlare!\" as a negative belongs to which person?",
        opts: ["tu", "Lei", "voi"],
        why: "Only the tu form uses the infinitive in the negative."
      },
      { q: "Form the imperative (tu) of \"prendere\": ___" },
      { q: "Form the imperative (Lei) of \"parlare\": ___" },
      { q: "\"Tell me\" is: ___" },
      {
        q: "Why \"dammi\" and not \"dami\"?",
        opts: [
          "It's a typo",
          "After the short form da' the pronoun's consonant doubles",
          "Because dare is irregular throughout"
        ]
      },
      { q: "\"Don't worry.\"" },
      {
        q: "Fill in the message to a friend.",
        tr: "Hi! Let me know what time you're arriving, and text me when you set off."
      },
      { tr: "Go ahead, ma'am, I'm listening." },
      { tr: "Let me know when you're arriving, I'll come pick you up." },
      { tr: "Tell me everything, don't worry." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Test",
    title: "Unit 3 test",
    objectives: ["check direct and indirect pronouns, participle agreement and the imperative"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Conosci Anna?\" →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "\"I biglietti? ___ ho comprati.\"" },
      { q: "\"Le chiavi? Le ho pers___.\"" },
      { q: "\"Telefono a Marco\" →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "\"Che cosa ___ hai detto?\" (to her)" },
      { q: "The imperative (tu) of \"sentire\": ___" },
      { q: "\"Tell me\": ___" },
      { q: "\"Don't worry, I'll take care of it.\"" },
      { tr: "I saw her yesterday and talked to her about the project." },
      { tr: "Let me know when you're arriving, I'll be waiting for you." }
    ]
  },
  "unit:a2-u04": { title: "Health", grammarNote: "mi fa male · the formal imperative · giving advice" },
  "lesson:a2-u04-l1": {
    theme: "Health",
    title: "Pain and symptoms",
    objectives: [
      "say what hurts",
      "name the basic symptoms",
      "use mi fa / mi fanno male"
    ],
    theory: [
      {
        h: "An inverted construction, like piacere",
        p: "<em>Mi fa male la testa</em> is literally \"the head does bad to me\". The subject is the <b>body part</b>, which is why the verb has two forms: <em>mi <b>fa</b> male il piede</em> (one thing) and <em>mi <b>fanno</b> male i piedi</em> (several). English \"my head hurts\" puts the head in the subject too, so the logic is closer than it looks."
      },
      {
        h: "Two parallel ways",
        p: "Alongside <em>mi fa male la gola</em> there's <em>ho mal di gola</em>. The second works as a set phrase: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Both are equally natural."
      },
      {
        h: "The article with body parts",
        p: "Italian says <em>mi fa male <b>la</b> testa</em>, not \"mia testa\". The pronoun <em>mi</em> already identifies whose head it is, so a possessive would be redundant. English says \"my head\" and Italian finds that odd. Same in <em>mi lavo <b>i</b> denti</em>."
      },
      {
        tip: "<em>Da quanto tempo?</em> (\"for how long?\") is the first question you'll hear at the doctor's. The answer: <em>da tre giorni</em>, <em>da una settimana</em>."
      }
    ],
    grammar: {
      title: "Pain and symptoms",
      table: {
        head: ["construction", "example", "in English"],
        rows: [
          ["mi fa male + sing.", "Mi fa male la schiena.", "My back hurts."],
          ["mi fanno male + pl.", "Mi fanno male i denti.", "My teeth hurt."],
          ["ho mal di…", "Ho mal di testa.", "I have a headache."],
          ["ho la febbre", "Ho trentotto di febbre.", "I have a fever of 38."],
          ["mi sento…", "Mi sento debole.", "I feel weak."],
          ["da quanto?", "Da tre giorni.", "For three days."]
        ]
      },
      examples: [
        { tr: "My throat has been hurting for two days." },
        { tr: "My stomach hurts and I feel nauseous." },
        { tr: "I have a cough and a runny nose." },
        { tr: "I feel tired and I have no appetite." },
        { tr: "I'm allergic to penicillin." },
        { tr: "Should I take something for the headache?" }
      ]
    },
    vocab: [
      "head",
      "throat",
      "stomach",
      "back",
      "teeth",
      "fever",
      "cough",
      "a cold",
      "nausea",
      "I don't feel well",
      "allergy",
      "for how long?"
    ],
    exercises: [
      {
        q: "\"___ male i denti.\" (my teeth hurt)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "The subject is the teeth — plural, so fanno."
      },
      { q: "Fill in: \"Mi ___ male la schiena.\"" },
      { q: "Fill in: \"Ho mal ___ testa.\"" },
      {
        q: "Which sentence sounds natural in Italian?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "The pronoun mi already says whose; a possessive is redundant."
      },
      { q: "Match them up.", pairs: ["cough", "a cold", "nausea", "fever"] },
      { q: "\"My throat has been hurting for three days.\"" },
      { q: "Describe your symptoms.", tr: "My throat hurts, I have a fever and I feel weak." },
      { tr: "I've had a cough and a runny nose for a week." },
      { tr: "My legs hurt after running." },
      { tr: "I have a headache and a fever." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Health",
    title: "At the doctor's",
    objectives: ["describe a complaint to a doctor", "understand the instructions", "ask about dosage"],
    theory: [
      {
        h: "How Italian healthcare works",
        p: "The base of the system is the <strong>medico di base</strong> (family doctor), who you have to register with. A referral is <em>l'impegnativa</em> or <em>la ricetta</em>. For emergencies you go to <strong>pronto soccorso</strong>, where triage runs by color: white (least urgent) → red. Treatment there is essentially free, including for visitors — a genuine surprise if you're used to the US system."
      },
      {
        h: "The formal imperative in instructions",
        p: "The doctor speaks to you as <em>Lei</em>: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. Worth recognizing these forms even before you can produce them."
      },
      {
        h: "The pharmacy does more than you'd expect",
        p: "An Italian <em>farmacista</em> has broad advisory authority and is often the first stop for minor complaints. Plenty of things that need a prescription in the US need one here too — but the advice itself is free and specific."
      },
      {
        tip: "The phrase that saves you in any medical situation: <em>Sono allergico/a a…</em> Worth knowing without having to think."
      }
    ],
    grammar: {
      title: "At the doctor's and the pharmacy",
      table: {
        head: ["who's speaking", "in Italian", "in English"],
        rows: [
          ["doctor", "Cosa c'è che non va?", "What seems to be the problem?"],
          ["doctor", "Da quanto tempo ha questi sintomi?", "How long have you had these symptoms?"],
          ["patient", "Mi fa male qui.", "It hurts here."],
          ["doctor", "Le prescrivo un antibiotico.", "I'll prescribe you an antibiotic."],
          ["patient", "Quante volte al giorno?", "How many times a day?"],
          ["doctor", "Due volte al giorno, dopo i pasti.", "Twice a day, after meals."]
        ]
      },
      examples: [
        { tr: "Good morning, I don't feel well." },
        { tr: "Are you allergic to any medication?" },
        { tr: "I'll write you a prescription." },
        { tr: "Rest and drink plenty of water." },
        { tr: "If it doesn't clear up in three days, come back." },
        { tr: "I need a doctor's note." }
      ]
    },
    vocab: [
      "family doctor",
      "emergency room",
      "prescription",
      "antibiotic",
      "pill",
      "syrup",
      "injection",
      "blood test",
      "doctor's note",
      "after meals",
      "on an empty stomach",
      "to get better"
    ],
    exercises: [
      {
        q: "Where do you go with a sudden, serious problem?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Fill in: \"Sono ___ alla penicillina.\" (allergic, a woman speaking)" },
      { q: "Fill in: \"Quante ___ al giorno?\" (how many times)" },
      { q: "Match them up.", pairs: ["prescription", "pill", "on an empty stomach", "to get better"] },
      { q: "\"How long have you had these symptoms?\"" },
      {
        q: "A visit to the doctor.",
        setting: "The office, Monday morning.",
        lines: [
          { tr: "Good morning, have a seat. What seems to be the problem?" },
          {
            tr: "Say your throat hurts and you have a fever.",
            answerTr: "My throat hurts and I have a fever."
          },
          { tr: "For how long?" },
          { tr: "Say for three days.", answerTr: "For three days." },
          { tr: "I'll prescribe an antibiotic. Any allergies?" },
          {
            tr: "Say no and ask about the dosage.",
            answerTr: "No, none. How many times a day should I take it?"
          }
        ]
      },
      {
        q: "Fill in the doctor's instructions.",
        tr: "Take one pill twice a day, after meals. And drink plenty of water."
      },
      { tr: "I need a doctor's note." },
      { tr: "Take the antibiotic for six days, even if you start feeling better." },
      { tr: "I'm allergic to penicillin, is there an alternative?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Health",
    title: "Giving advice",
    objectives: [
      "advise someone what to do",
      "use the conditional in dovresti / potresti",
      "react to someone else's problem"
    ],
    theory: [
      {
        h: "The conditional — first encounter",
        p: "The conditional is built on the same stem as the future, with the endings <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. You already know <em>vorrei</em>; now add <em>dovrei</em> (I should), <em>potrei</em> (I could), <em>sarebbe</em> (it would be)."
      },
      {
        h: "Advice without an order",
        p: "<em>Devi riposare</em> (\"you must rest\") sounds like an instruction. <em>Dovresti riposare</em> (\"you should rest\") is advice. The distinction is the same one English makes between \"must\" and \"should\", and Italians hear it just as clearly."
      },
      {
        h: "Other ways to advise",
        list: [
          "<em>Perché non…?</em> — \"why don't you…?\": <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — \"if I were you…\" (fully explained at B2)",
          "<em>Ti conviene…</em> — \"you'd be better off…\": <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Reacting to someone's problem: <em>Mi dispiace</em> (I'm sorry), <em>Che peccato</em> (what a shame), <em>Rimettiti presto</em> (get well soon)."
      }
    ],
    grammar: {
      title: "Condizionale presente — the basic forms",
      table: {
        head: ["person", "dovere", "potere", "volere", "essere"],
        rows: [
          ["io", "dovrei", "potrei", "vorrei", "sarei"],
          ["tu", "dovresti", "potresti", "vorresti", "saresti"],
          ["lui / lei", "dovrebbe", "potrebbe", "vorrebbe", "sarebbe"],
          ["noi", "dovremmo", "potremmo", "vorremmo", "saremmo"],
          ["voi", "dovreste", "potreste", "vorreste", "sareste"],
          ["loro", "dovrebbero", "potrebbero", "vorrebbero", "sarebbero"]
        ]
      },
      examples: [
        { tr: "You should rest for a few days." },
        { tr: "You could ask the pharmacist." },
        { tr: "It would be better to see a doctor." },
        { tr: "Why don't you take a day off?" },
        { tr: "You'd be better off resting today." },
        { tr: "Get well soon!" }
      ]
    },
    vocab: [
      "you should",
      "you could",
      "it would be better",
      "you'd be better off",
      "why don't you…?",
      "advice",
      "to rest",
      "to stop",
      "to move, to be active",
      "I'm sorry",
      "what a shame",
      "get well soon"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "Which version sounds like advice rather than an order?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Fill in: \"___ meglio andare dal medico.\" (it would be better)" },
      { q: "Fill in: \"___ chiedere al farmacista?\" (could you)" },
      { q: "\"You should rest for a few days.\"" },
      { q: "Match the reactions.", pairs: ["I'm sorry", "what a shame", "get well soon", "you'd be better off"] },
      { q: "Give a friend some advice.", tr: "You should rest today. And why don't you call the doctor?" },
      { tr: "It would be better if you took a day off." },
      { tr: "You should rest and drink plenty of water." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Health",
    title: "Lifestyle and exercise",
    objectives: [
      "talk about healthy habits",
      "say how often you do something",
      "express an intention to change"
    ],
    theory: [
      {
        h: "The Mediterranean diet isn't a diet",
        p: "In Italian, <em>dieta</em> means primarily \"the way you eat\", not \"losing weight\". <em>La dieta mediterranea</em> is a UNESCO-listed pattern of eating, not a weight-loss plan — so saying <em>sono a dieta</em> means something narrower than English \"I'm on a diet\"."
      },
      {
        h: "Expressing intention",
        p: "<em>Ho intenzione di…</em> (I intend to), <em>vorrei iniziare a…</em> (I'd like to start), <em>sto cercando di…</em> (I'm trying to). All three take an infinitive, but each with a different preposition — which is typical of Italian and has to be memorized verb by verb."
      },
      {
        h: "Precise frequency",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (every other day). The preposition <em>a</em> plus the article: <em>alla settimana, al mese, all'anno</em>."
      },
      {
        tip: "<em>Fare movimento</em> sounds more natural than <em>fare sport</em> for ordinary activity: walking, cycling, taking the stairs."
      }
    ],
    grammar: {
      title: "Habits and intentions",
      table: {
        head: ["construction", "example", "in English"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "I intend to quit smoking."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "I'm trying to eat better."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "I'd like to start running."],
          ["frequency", "Tre volte alla settimana.", "Three times a week."],
          ["every other day", "A giorni alterni.", "Every other day."],
          ["giving up", "Ho smesso di bere caffè.", "I've stopped drinking coffee."]
        ]
      },
      examples: [
        { tr: "I'm active every day, even if it's just walking." },
        { tr: "I try to sleep at least seven hours." },
        { tr: "I've cut back on sugar and I feel better." },
        { tr: "I go to the gym twice a week." },
        { tr: "I intend to sign up for the pool." },
        { tr: "The Mediterranean diet is very varied." }
      ]
    },
    vocab: [
      "a healthy lifestyle",
      "to be active",
      "to train, to work out",
      "to run",
      "to walk",
      "to sign up",
      "to cut back on",
      "to quit smoking",
      "I intend to",
      "I'm trying to",
      "every other day",
      "at least"
    ],
    exercises: [
      { q: "Fill in: \"Ho intenzione ___ smettere di fumare.\"" },
      { q: "Fill in: \"Vorrei iniziare ___ correre.\"" },
      { q: "Fill in: \"Vado in palestra tre volte ___ settimana.\"" },
      { q: "What does \"a giorni alterni\" mean?", opts: ["Every day", "Every other day", "Once a week"] },
      {
        q: "In Italian \"dieta\" primarily means:",
        opts: ["losing weight", "the way you eat", "fasting"]
      },
      { q: "\"I try to sleep at least seven hours.\"" },
      { q: "Talk about your habits.", tr: "I'm active every other day and I try to cut back on sugar." },
      { q: "Match them up.", pairs: ["to work out", "to sign up", "to cut back on", "at least"] },
      { tr: "I quit smoking three months ago and I feel much better." },
      { tr: "I run three times a week, early in the morning." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Test",
    title: "Unit 4 test",
    objectives: ["check mi fa male, medical vocabulary and the conditional"],
    theory: [{ p: "Ten questions. You pass at 70%." }],
    exercises: [
      { q: "\"Mi ___ male i denti.\"" },
      { q: "\"Ho mal ___ testa.\"" },
      { q: "A sudden serious problem →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "\"___ meglio riposare.\" (it would be better)" },
      { q: "\"Ho intenzione ___ smettere.\"" },
      { q: "Match them up.", pairs: ["prescription", "cough", "to get better", "on an empty stomach"] },
      { q: "\"My throat has been hurting for two days.\"" },
      { tr: "Take one pill twice a day after meals." },
      { tr: "I don't feel well, I should see a doctor." }
    ]
  }
});
