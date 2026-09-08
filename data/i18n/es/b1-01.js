/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/b1-01.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:b1-u01": { title: "El subjuntivo", grammarNote: "congiuntivo presente y passato · expresar opiniones" },
  "lesson:b1-u01-l1": {
    theme: "Gramática",
    title: "Formas y primeros usos",
    objectives: [
      "formar el congiuntivo presente en las tres conjugaciones",
      "conocer los irregulares más frecuentes",
      "reconocer las situaciones que lo piden"
    ],
    theory: [
      {
        h: "Un modo que tú ya tienes",
        p: "El congiuntivo no describe hechos: marca <b>la postura del hablante ante lo que sigue</b>, opinión, duda, voluntad, emoción. <em>So che <b>è</b> bravo</em> (lo sé, un hecho, indicativo) frente a <em>Penso che <b>sia</b> bravo</em> (lo creo, una opinión, congiuntivo). Aquí partes con una ventaja enorme: tu subjuntivo está vivo y hace el mismo trabajo."
      },
      {
        contrast: "La diferencia que más caro cuesta está justo en el ejemplo de arriba. El español dice «creo que <b>es</b> bueno», con indicativo, y solo pasa al subjuntivo al negar («no creo que <b>sea</b>»). El italiano exige el congiuntivo también en afirmativa: <em>penso che sia</em>, <em>credo che sia</em>, <em>mi sembra che sia</em>. Es el punto donde tu intuición te traiciona, y es el más frecuente de todo el nivel."
      },
      {
        h: "Las terminaciones",
        list: [
          "<b>-are</b>: parl<b>i</b>, parl<b>i</b>, parl<b>i</b>, parl<b>iamo</b>, parl<b>iate</b>, parl<b>ino</b>",
          "<b>-ere / -ire</b>: prend<b>a</b>, prend<b>a</b>, prend<b>a</b>, prend<b>iamo</b>, prend<b>iate</b>, prend<b>ano</b>",
          "<b>-isc-</b>: cap<b>isca</b>, cap<b>isca</b>, cap<b>isca</b>, cap<b>iamo</b>, cap<b>iate</b>, cap<b>iscano</b>"
        ]
      },
      {
        trap: "Las tres primeras personas son <b>idénticas</b>. Por eso el pronombre sujeto <b>no se omite</b> con el congiuntivo: <em>penso che <b>tu</b> abbia ragione</em>, o nadie sabe de quién hablas. Tu subjuntivo tiene el mismo problema («hable» sirve para yo y para él) y lo resuelve igual, añadiendo el pronombre."
      },
      {
        h: "Irregulares que hay que saber",
        p: "<em>essere → sia</em>, <em>avere → abbia</em>, <em>fare → faccia</em>, <em>andare → vada</em>, <em>venire → venga</em>, <em>potere → possa</em>, <em>volere → voglia</em>, <em>dovere → debba</em>, <em>sapere → sappia</em>, <em>dare → dia</em>, <em>stare → stia</em>, <em>dire → dica</em>, <em>uscire → esca</em>, <em>rimanere → rimanga</em>."
      }
    ],
    grammar: {
      title: "Congiuntivo presente",
      table: {
        head: ["persona", "parlare", "prendere", "capire", "essere", "avere"],
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
        { tr: "Creo que tienes razón." },
        { tr: "Me parece que es demasiado tarde." },
        { tr: "No estoy seguro de que venga." },
        { tr: "Espero que todo salga bien." },
        { tr: "Quiero que me digas la verdad." },
        { tr: "Sé que es bueno.", note: "certeza → indicativo" }
      ]
    },
    vocab: [
      "creo que…",
      "pienso que…",
      "me parece que…",
      "espero que…",
      "quiero que…",
      "me temo que…",
      "no estoy seguro de que…",
      "me imagino que…",
      "es posible que…",
      "es necesario que…",
      "sé que… (indicativo)",
      "es verdad que… (indicativo)"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "¿Por qué no se omite el pronombre sujeto con el congiuntivo?",
        opts: [
          "Porque es más cortés",
          "Porque las tres primeras personas tienen la misma forma",
          "Porque lo exige el orden de palabras"
        ]
      },
      { q: "Completa: «Penso che tu ___ ragione.» (avere)" },
      { q: "Completa: «Credo che ___ troppo tardi.» (essere)" },
      {
        q: "¿Cuál lleva indicativo y no congiuntivo?",
        opts: ["Penso che…", "So che…", "Temo che…"],
        why: "Sapere expresa certeza, así que va con indicativo."
      },
      {
        q: "Pon las formas del congiuntivo.",
        tr: "Espero que todo salga bien y que estéis todos contentos."
      },
      { q: "«Quiero que me digas la verdad.»" },
      { tr: "Creo que es mejor aplazar la reunión." },
      { tr: "Creo que tienes razón en este punto." }
    ]
  },
  "lesson:b1-u01-l2": {
    theme: "Gramática",
    title: "Qué dispara el subjuntivo",
    objectives: [
      "reconocer las expresiones que piden congiuntivo",
      "saber cuándo se usa di + infinitivo en vez de che",
      "no meter el congiuntivo donde no toca"
    ],
    theory: [
      {
        h: "Cuatro familias de disparadores",
        list: [
          "<b>opinión y suposición</b>: penso, credo, ritengo, mi sembra, immagino, suppongo",
          "<b>voluntad y sentimiento</b>: voglio, desidero, spero, temo, mi dispiace, sono contento",
          "<b>impersonales</b>: è necessario, bisogna, è possibile, è strano, è meglio, può darsi",
          "<b>conjunciones</b>: benché, sebbene, nonostante, affinché, purché, prima che, a meno che, senza che, come se"
        ]
      },
      {
        h: "Mismo sujeto: che desaparece",
        p: "Cuando las dos oraciones comparten sujeto, el congiuntivo cede el sitio a <em>di</em> + infinitivo. <em>Penso <b>di</b> avere ragione</em> («creo tener razón»), no «penso che io abbia». Es tu misma regla: dices «espero llegar a tiempo», no «espero que yo llegue»."
      },
      {
        h: "Dónde NO aparece el congiuntivo",
        p: "Detrás de expresiones de certeza: <em>so che, è certo che, è vero che, è chiaro che, siccome, poiché</em>. Ojo con <em>perché</em>: con el sentido de «porque» lleva indicativo, con el de «para que» lleva congiuntivo (<em>te lo dico perché tu <b>capisca</b></em>). Exactamente tu «porque» frente a «para que»."
      },
      {
        contrast: "Casi toda esta lista te suena, porque el español la reparte igual: «aunque sea», «antes de que llegue», «con tal de que», «a menos que». Los dos disparadores que hay que vigilar son los verbos de opinión en afirmativa, que en italiano piden congiuntivo, y <em>nonostante</em>, que lo pide siempre, mientras tu «a pesar de que» admite indicativo cuando el hecho es real."
      }
    ],
    grammar: {
      title: "Congiuntivo o no",
      table: {
        head: ["expresión", "modo", "ejemplo"],
        rows: [
          ["penso / credo che", "congiuntivo", "Penso che sia giusto."],
          ["so / è vero che", "indicativo", "So che è giusto."],
          ["spero che", "congiuntivo", "Spero che venga."],
          ["spero di (mismo sujeto)", "infinitivo", "Spero di venire."],
          ["benché / sebbene", "congiuntivo", "Benché sia tardi, esco."],
          ["siccome / poiché", "indicativo", "Siccome è tardi, resto."]
        ]
      },
      examples: [
        { tr: "Aunque llueve, vamos igualmente." },
        { tr: "Aunque estoy cansado, sigo trabajando." },
        { tr: "Te ayudo con tal de que hagas tu parte." },
        { tr: "Sal antes de que haya tráfico." },
        { tr: "Estoy pensando en irme mañana.", note: "mismo sujeto → di + infinitivo" },
        { tr: "Como es tarde, lo dejo para mañana.", note: "indicativo" }
      ]
    },
    vocab: [
      "aunque",
      "a pesar de que",
      "para que",
      "con tal de que",
      "a menos que",
      "antes de que",
      "sin que",
      "como si",
      "puede que",
      "como, dado que",
      "está claro que",
      "considerar, estimar"
    ],
    exercises: [
      { q: "«Benché ___ tardi, esco.» (essere)", opts: ["è", "sia", "sarà"] },
      {
        q: "«Siccome ___ tardi, resto a casa.» (essere)",
        opts: ["è", "sia", "fosse"],
        why: "Siccome enuncia una causa real → indicativo."
      },
      { q: "Completa: «Ti aiuto purché tu ___ la tua parte.» (fare)" },
      { q: "Completa: «Spero ___ venire domani.» (mismo sujeto)" },
      {
        q: "¿Qué expresiones exigen congiuntivo?",
        opts: ["penso che", "so che", "benché", "è vero che", "prima che"]
      },
      {
        q: "Pon las formas correctas.",
        tr: "Aunque está cansado, sigue trabajando. Sé que tiene mucha paciencia."
      },
      { q: "«Aunque llueve, salimos igualmente.»" },
      {
        q: "«Te lo dico perché tu capisca»: ¿por qué congiuntivo?",
        opts: ["Porque perché siempre lo lleva", "Porque aquí perché significa «para que», no «porque»", "Es un error"]
      },
      { tr: "Puede que mañana no haya nadie en la oficina." },
      { tr: "Aunque es difícil, creo que merece la pena." }
    ]
  },
  "lesson:b1-u01-l3": {
    theme: "Gramática",
    title: "El subjuntivo para hechos anteriores",
    objectives: [
      "formar el congiuntivo passato",
      "elegir entre presente y passato",
      "usarlo para comentar el pasado"
    ],
    theory: [
      {
        h: "Cómo se construye",
        p: "Congiuntivo presente de <em>avere/essere</em> + participio: <em>abbia fatto</em>, <em>sia andato</em>. Las reglas para elegir el auxiliar y para concordar el participio son las que ya conoces del passato prossimo. Tu «haya hecho» está construido igual, con la única diferencia del auxiliar essere."
      },
      {
        h: "Presente o passato",
        p: "Con la principal en presente: <b>presente</b> para algo simultáneo o todavía por venir (<em>penso che venga</em>), <b>passato</b> para algo ya terminado (<em>penso che sia venuto</em>)."
      },
      {
        h: "El contexto más frecuente: comentar el pasado",
        p: "<em>Mi dispiace che tu non sia potuto venire.</em> <em>Non credo che l'abbiano fatto apposta.</em> Salen a cada rato en la conversación, así que el congiuntivo passato se rentabiliza enseguida."
      },
      {
        tip: "En el habla informal los italianos sustituyen cada vez más el congiuntivo por el indicativo (<em>penso che è vero</em>). Está muy criticado y queda mal por escrito y en el trabajo. Aprende la forma correcta."
      }
    ],
    grammar: {
      title: "Congiuntivo passato",
      table: {
        head: ["oración principal", "relación", "modo", "ejemplo"],
        rows: [
          ["presente", "simultáneo", "cong. presente", "Penso che stia bene."],
          ["presente", "futuro", "cong. presente", "Penso che venga domani."],
          ["presente", "anterior", "cong. passato", "Penso che sia venuto ieri."],
          ["—", "con essere", "concordancia", "Credo che sia partita."],
          ["—", "con avere", "sin concordancia", "Credo che abbia parlato."],
          ["—", "con pronombre", "concordancia", "Non credo che l'abbia vista."]
        ]
      },
      examples: [
        { tr: "Siento que no hayas podido venir." },
        { tr: "No creo que lo hayan hecho a propósito." },
        { tr: "Es raro que no haya contestado." },
        { tr: "Parece que ya se han ido." },
        { tr: "Espero que lo hayáis pasado bien." },
        { tr: "Me temo que nos hemos equivocado de camino." }
      ]
    },
    vocab: [
      "siento que",
      "es raro que",
      "parece que",
      "resulta que",
      "tengo la impresión de que",
      "a propósito",
      "por error",
      "equivocarse de camino",
      "darse cuenta, notar",
      "caer en la cuenta",
      "por lo visto",
      "de hecho"
    ],
    exercises: [
      { q: "Completa: «Penso che ___ già partito.» (essere, él)" },
      { q: "Completa: «Non credo che ___ capito.» (avere, ellos)" },
      {
        q: "«Penso che venga domani» frente a «Penso che sia venuto ieri»: ¿cuál es la diferencia?",
        opts: ["Ninguna", "La primera habla del futuro, la segunda de algo anterior", "La segunda está mal"]
      },
      { q: "Pon el congiuntivo passato.", tr: "Siento que no hayas podido venir y que te hayas perdido la fiesta." },
      { q: "«No creo que lo hayan hecho a propósito.»" },
      {
        q: "«Credo che sia partita»: ¿por qué «partita» y no «partito»?",
        opts: ["Es un error", "Porque con essere el participio concuerda con el sujeto", "Porque suena mejor"]
      },
      { q: "Relaciona.", pairs: ["por lo visto", "a propósito", "por error", "caer en la cuenta"] },
      { tr: "Parece que ya se han ido." },
      { tr: "Es raro que todavía no haya contestado al mensaje." },
      { tr: "Espero que lo hayáis pasado bien en la fiesta." }
    ]
  },
  "lesson:b1-u01-l4": {
    theme: "Comunicación",
    title: "Dar y sopesar opiniones",
    objectives: [
      "expresar una opinión en conversación",
      "estar de acuerdo en parte y discrepar",
      "usar el congiuntivo en una discusión real"
    ],
    theory: [
      {
        h: "Tres intensidades de opinión",
        list: [
          "suave: <em>mi sembra che…</em>, <em>ho l'impressione che…</em>, <em>direi che…</em>",
          "neutra: <em>secondo me</em>, <em>penso che</em>, <em>a mio parere</em>",
          "fuerte: <em>sono convinto che</em>, <em>non ho dubbi</em>, <em>è evidente che</em> (¡indicativo!)"
        ]
      },
      {
        h: "Discrepar sin pelearse",
        p: "La conversación italiana tolera el desacuerdo pero cuida el envoltorio. <em>Non sono del tutto d'accordo</em>, <em>Sì, però…</em>, <em>Da un lato hai ragione, dall'altro…</em>, <em>Vedo il tuo punto, ma…</em>. Un <em>no</em> a secas cierra la conversación. La dinámica te resultará familiar."
      },
      {
        h: "Marcadores del discurso",
        p: "<em>Guarda</em>, <em>senti</em>, <em>diciamo</em>, <em>insomma</em>, <em>appunto</em>, <em>anzi</em>. No añaden contenido, pero sin ellos pareces estar leyendo en voz alta. <em>Anzi</em> se gana el sitio: refuerza lo que acabas de decir o lo corrige, como tu «es más» y tu «al contrario» en una sola palabra."
      },
      {
        tip: "<em>Dipende</em> es la respuesta más italiana a una pregunta difícil. Amplíala: <em>dipende da cosa intendi</em>, <em>dipende dai casi</em>."
      }
    ],
    grammar: {
      title: "El lenguaje de la opinión",
      table: {
        head: ["función", "expresión", "modo detrás de che"],
        rows: [
          ["opinión", "Secondo me / A mio parere", "—"],
          ["opinión", "Penso / credo / ritengo che", "congiuntivo"],
          ["certeza", "Sono sicuro / è evidente che", "indicativo"],
          ["acuerdo parcial", "Da un lato… dall'altro…", "—"],
          ["desacuerdo", "Non sono d'accordo, perché…", "indicativo"],
          ["corrección", "Anzi, direi il contrario.", "—"]
        ]
      },
      examples: [
        { tr: "En mi opinión el problema es otro." },
        { tr: "Tengo la impresión de que no nos estamos entendiendo." },
        { tr: "Por un lado tienes razón, por otro lo estás exagerando." },
        { tr: "No estoy del todo de acuerdo con esa lectura." },
        { tr: "Es más, yo diría lo contrario." },
        { tr: "Depende de qué entiendas por «eficaz»." }
      ]
    },
    vocab: [
      "en mi opinión",
      "a mi parecer",
      "considero que",
      "estoy convencido de que",
      "por un lado… por otro",
      "no del todo",
      "es más; al contrario",
      "exacto",
      "en resumen",
      "depende",
      "exagerar",
      "entender el punto de alguien"
    ],
    exercises: [
      {
        q: "«Sono sicuro che ___ vero.» (essere)",
        opts: ["sia", "è", "fosse"],
        why: "Certeza → indicativo."
      },
      { q: "Completa: «Ritengo che questa soluzione ___ migliore.» (essere)" },
      { q: "¿Qué significa «anzi»?", opts: ["por lo tanto", "es más / al contrario", "antes"] },
      { q: "Relaciona.", pairs: ["exacto", "en resumen", "depende", "exagerar"] },
      { q: "«No estoy del todo de acuerdo con esa opinión.»" },
      {
        q: "Completa el intercambio.",
        tr: "En mi opinión el problema es otro. Tengo la impresión de que no nos estamos entendiendo."
      },
      {
        q: "Una discusión sobre el teletrabajo.",
        setting: "Cena en casa de unos amigos, la conversación gira al trabajo.",
        lines: [
          { tr: "En mi opinión el teletrabajo ha arruinado el trabajo en equipo." },
          {
            tr: "Dale la razón en parte y añade un contrapunto.",
            answerTr: "Por un lado tienes razón, por otro ha reducido el estrés."
          },
          { tr: "Sí, pero los más jóvenes aprenden menos." },
          {
            tr: "Responde que depende de cómo esté organizada la empresa.",
            answerTr: "Depende de cómo organice la empresa el trabajo."
          }
        ]
      },
      { tr: "Es más, yo diría justo lo contrario." },
      { tr: "Por un lado es verdad, por otro me parece una simplificación." },
      { tr: "En mi opinión depende mucho del contexto." }
    ]
  },
  "lesson:b1-u01-test": {
    theme: "Test",
    title: "Test de la unidad 1",
    objectives: ["comprobar el congiuntivo presente y passato y los disparadores"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "«Penso che tu ___ ragione.»" },
      { q: "«Benché ___ tardi, esco.»" },
      { q: "«Siccome ___ tardi, resto.»", opts: ["è", "sia", "fosse"] },
      { q: "«Spero ___ venire domani.» (mismo sujeto)" },
      { q: "«Non credo che ___ capito.» (avere, ellos)" },
      { q: "¿Cuáles exigen congiuntivo?", opts: ["è vero che", "può darsi che", "prima che", "so che"] },
      { tr: "Me parece que no han entendido el problema." },
      { tr: "Creo que es mejor hablarlo mañana." }
    ]
  },
  "unit:b1-u02": { title: "Pronombres combinados", grammarNote: "me lo, glielo, ce ne · ci y ne al completo" },
  "lesson:b1-u02-l1": {
    theme: "Gramática",
    title: "Juntar dos pronombres",
    objectives: [
      "combinar un pronombre indirecto con uno directo",
      "recordar el cambio de -i a -e",
      "usar la construcción en conversación"
    ],
    theory: [
      {
        h: "Orden: primero el indirecto",
        p: "Cuando se encuentran dos pronombres, el <b>indirecto va delante</b> y su <em>-i</em> se convierte en <em>-e</em>: <em>mi + lo → <b>me lo</b></em>. Es tu orden exacto: «me lo das», «te lo explico»."
      },
      {
        h: "Gli y le se funden en glie-",
        p: "«A él», «a ella» y «a ellos» dan todos <strong>glie-</strong>, escrito <b>en una sola palabra</b> con el segundo pronombre: <em>glielo, gliela, glieli, gliele, gliene</em>."
      },
      {
        contrast: "Este cambio no te sorprenderá: el español hace el mismo movimiento cuando «le lo» se convierte en «se lo». Misma lógica de evitar el choque, distinto resultado. La diferencia práctica es que el italiano lo escribe pegado (<em>glielo</em>) y que, como tu «se lo», una sola forma cubre él, ella y ellos."
      },
      {
        h: "Con infinitivo o imperativo se pegan juntos",
        p: "<em>Voglio dartelo</em>, <em>Puoi spiegarmelo?</em>, <em>Dammelo!</em>, <em>Portaglielo!</em>. La pareja entera se une al final del verbo, igual que en «quiero dártelo» y «dámelo»."
      },
      {
        trap: "En los tiempos compuestos el participio concuerda con el pronombre <b>directo</b>, también en pareja: <em>Me l'ha data</em> (me la ha dado), <em>Gliele ho mandate</em> (se las he mandado). Aquí el español no acompaña: tú dices «me la ha dado», sin tocar el participio."
      }
    ],
    grammar: {
      title: "Tabla de pronombres combinados",
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
        { tr: "¿Me prestas el coche? — Sí, te lo presto." },
        { tr: "¿Le has dado el libro a Marco? — Sí, se lo he dado." },
        { tr: "¿Nos lo explicas otra vez?" },
        { tr: "¿Cuántos correos te ha mandado? — Me ha mandado tres." },
        { tr: "¿Me lo puedes explicar?" },
        { tr: "Dámelo, por favor." }
      ]
    },
    vocab: [
      "prestar",
      "devolver",
      "explicar",
      "enviar",
      "llevar, traer",
      "regalar",
      "entregar",
      "pedir prestado",
      "otra vez",
      "enseguida",
      "lo antes posible",
      "avísame"
    ],
    exercises: [
      {
        q: "«Mi dai il libro?» → la respuesta con pronombres:",
        opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."]
      },
      { q: "Completa: «Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      {
        q: "Completa: «Ci spieghi la regola? — Sì, ___ spiego.»",
        why: "La respuesta se dirige a vosotros: ve la spiego."
      },
      { q: "¿Cómo se escribe «gli + lo»?", opts: ["gli lo", "glielo", "gli-lo"] },
      {
        q: "Sustituye los sustantivos por pronombres.",
        tr: "— ¿Me prestas el coche? — Sí, te lo presto con mucho gusto. — ¿Y las llaves? — Te las doy enseguida."
      },
      { q: "«¿Me lo puedes explicar?»" },
      { q: "Completa la terminación: «Me l'ha dat___.» (me la ha dado — la macchina)" },
      { tr: "Te los mando mañana." },
      { tr: "Se lo expliqué tres veces, pero no lo entendió." },
      { tr: "¿Me lo puedes explicar otra vez, por favor?" }
    ]
  },
  "lesson:b1-u02-l2": {
    theme: "Gramática",
    title: "Ci y ne al completo",
    objectives: [
      "reconocer todos los valores de ci y ne",
      "usar los verbos en que están fundidos",
      "entender expresiones como non ce la faccio"
    ],
    theory: [
      {
        h: "CI: cuatro valores",
        list: [
          "lugar: <em>A Roma ci vado spesso.</em>",
          "<em>a + cosa</em>: <em>Ci penso io.</em>",
          "<em>c'è / ci sono</em>",
          "verbos fundidos: <em>volerci, metterci, farcela, entrarci, tenerci</em>"
        ]
      },
      {
        h: "NE: tres valores",
        list: [
          "parte de un todo: <em>Ne voglio due.</em>",
          "<em>di + cosa</em>: <em>Ne parliamo domani.</em>",
          "verbos fundidos: <em>andarsene, fregarsene, accorgersene, intendersene</em>"
        ]
      },
      {
        contrast: "Aquí no hay atajo: el español no tiene ni <em>ci</em> ni <em>ne</em>, y estos verbos fundidos no se traducen pieza por pieza. <em>Me ne vado</em> es «me voy», donde tu «me» ya hace parte del trabajo pero el <em>ne</em> no tiene equivalente. Conviene aprenderlos como bloques, no analizarlos."
      },
      {
        h: "Verbos que no se traducen palabra por palabra",
        p: "<em>Ci vogliono due ore</em> («se tardan dos horas»), <em>Ci metto un'ora</em> («tardo una hora»), <em>Non ce la faccio</em> («no puedo»), <em>Ci tengo</em> («me importa»), <em>Me ne vado</em> («me voy»), <em>Non me ne intendo</em> («no entiendo del tema»)."
      },
      {
        trap: "<em>Volerci</em> y <em>metterci</em> no son sinónimos. <em>Ci vogliono due ore</em> habla del tiempo objetivo; <em>ci metto due ore</em> habla de lo que tardo <b>yo</b>."
      }
    ],
    grammar: {
      title: "Verbos con ci y ne",
      table: {
        head: ["verbo", "significado", "ejemplo"],
        rows: [
          ["volerci", "hacer falta, tardarse", "Ci vuole pazienza."],
          ["metterci", "tardar uno", "Ci metto venti minuti."],
          ["farcela", "poder con algo", "Non ce la faccio più."],
          ["tenerci", "importarle a uno", "Ci tengo molto."],
          ["andarsene", "irse, largarse", "Me ne vado adesso."],
          ["fregarsene", "importarle un bledo", "Se ne frega di tutto."],
          ["intendersene", "entender del tema", "Non me ne intendo."],
          ["entrarci", "tener que ver", "Che c'entra?"]
        ]
      },
      examples: [
        { tr: "La burocracia italiana exige paciencia." },
        { tr: "¿Cuánto tardas de casa al trabajo?" },
        { tr: "No consigo terminar para esta noche." },
        { tr: "Me importa que vengas.", note: "+ congiuntivo" },
        { tr: "Me voy, es tarde." },
        { tr: "No entiendo nada de vinos." }
      ]
    },
    vocab: [
      "hacer falta, tardarse",
      "tardar uno",
      "poder con algo",
      "importarle a uno",
      "irse, largarse",
      "importarle un bledo",
      "entender del tema",
      "tener que ver",
      "tenerla tomada con",
      "paciencia",
      "esfuerzo, dedicación",
      "el tiempo que lleva"
    ],
    exercises: [
      {
        q: "«Ci vogliono due ore» significa:",
        opts: ["Queremos dos horas", "Se tardan dos horas", "Tardo dos horas"]
      },
      {
        q: "«Ci metto due ore» significa:",
        opts: ["Se tardan dos horas en general", "Tardo dos horas", "Lo dejo puesto dos horas"]
      },
      { q: "Completa: «Non ___ la faccio più.» (ya no puedo)" },
      { q: "Completa: «Me ___ vado, è tardi.»" },
      { q: "Relaciona.", pairs: ["importarle a uno", "entender del tema", "tener que ver", "importarle un bledo"] },
      { q: "Completa.", tr: "¿Cuánto tardas en llegar? — Se tardan veinte minutos en metro." },
      { q: "«No entiendo nada de vinos.»" },
      {
        q: "«Ci tengo che tu venga»: ¿por qué congiuntivo?",
        opts: ["Porque tenerci expresa voluntad y sentimiento", "Es un error", "Porque lo exige ci"]
      },
      { tr: "Hace falta mucha paciencia, pero al final lo conseguimos." },
      { tr: "No consigo terminarlo todo hoy." }
    ]
  },
  "lesson:b1-u02-l3": {
    theme: "Gramática",
    title: "Las oraciones de relativo",
    objectives: [
      "usar che, cui y il quale",
      "unir dos frases en una",
      "expresar posesión con cui más artículo"
    ],
    theory: [
      {
        h: "Che hace casi todo el trabajo",
        p: "<strong>Che</strong> es invariable y vale como sujeto o como complemento directo: <em>il libro <b>che</b> ho letto</em>, <em>la persona <b>che</b> parla</em>. No puede ir detrás de preposición. Es tu «que» sin más."
      },
      {
        h: "Cui detrás de preposición",
        p: "Cuando hace falta una preposición, <em>che</em> deja el sitio a <strong>cui</strong>: <em>la persona <b>a cui</b> ho scritto</em>, <em>la città <b>in cui</b> vivo</em>, <em>il motivo <b>per cui</b> sono qui</em>. Igual que tú, el italiano tampoco puede dejar la preposición colgando al final."
      },
      {
        h: "Cui con artículo = posesión",
        p: "<em>Il ragazzo <b>la cui</b> madre è medico</em> («el chico cuya madre es médica»). El artículo concuerda con lo poseído, no con el poseedor, exactamente como tu «cuyo/cuya», que también concuerda con lo poseído. Aquí la transferencia es completa."
      },
      {
        h: "Il quale: la variante formal",
        p: "<em>il quale, la quale, i quali, le quali</em> sustituye a <em>che</em> y a <em>cui</em> en registro escrito, como tu «el cual». Se gana el sueldo cuando hay que quitar una ambigüedad: <em>la sorella di Marco, <b>la quale</b> vive a Roma</em> señala claramente a la hermana, no a Marco."
      }
    ],
    grammar: {
      title: "Pronombres relativos",
      table: {
        head: ["forma", "función", "ejemplo"],
        rows: [
          ["che", "sujeto / compl. directo", "Il film che ho visto."],
          ["a cui", "complemento indirecto", "La persona a cui ho scritto."],
          ["in cui", "lugar, tiempo", "L'anno in cui sono nato."],
          ["di cui", "del que", "Il libro di cui ti parlavo."],
          ["il cui / la cui", "posesión", "L'autore il cui libro è famoso."],
          ["il quale", "variante formal", "Il collega, il quale lavora qui."],
          ["chi", "quien", "Chi cerca trova."]
        ]
      },
      examples: [
        { tr: "El libro que estoy leyendo es magnífico." },
        { tr: "La ciudad en la que crecí es pequeña." },
        { tr: "El motivo por el que escribo es sencillo." },
        { tr: "El compañero cuya hija estudia en Roma." },
        { tr: "Quien busca encuentra.", note: "refrán" },
        { tr: "Esta es la cosa de la que te hablaba." }
      ]
    },
    vocab: [
      "que (sujeto/objeto)",
      "el que, la que (tras preposición)",
      "el cual (formal)",
      "quien",
      "el motivo",
      "crecer, criarse",
      "el autor",
      "aquello que",
      "el periodo",
      "la época",
      "gracias al que",
      "en caso de que"
    ],
    exercises: [
      { q: "Completa: «Il libro ___ ho letto è bellissimo.»" },
      { q: "Completa: «La città in ___ vivo è piccola.»" },
      { q: "Completa: «La persona a ___ ho scritto non risponde.»" },
      {
        q: "«Il ragazzo la cui madre è medico»: ¿con qué concuerda «la»?",
        opts: ["Con el chico", "Con la madre (lo poseído)", "Con nada"]
      },
      {
        q: "¿Qué frase está mal?",
        opts: ["La città in cui vivo.", "La città in che vivo.", "La città dove vivo."],
        why: "Che no puede ir detrás de preposición."
      },
      {
        q: "Completa los relativos.",
        tr: "El compañero que trabaja conmigo es la persona a la que se lo debo todo."
      },
      { q: "«El motivo por el que escribo es sencillo.»" },
      { tr: "Esta es la cosa de la que te hablaba." },
      { tr: "El año en que llegué a Italia fue el más difícil." },
      { tr: "La ciudad en la que crecí es muy pequeña." }
    ]
  },
  "lesson:b1-u02-l4": {
    theme: "Gramática",
    title: "Indefinidos",
    objectives: [
      "usar qualche, alcuni, ogni, ciascuno",
      "distinguir nessuno de niente",
      "construir una frase de doble negación"
    ],
    theory: [
      {
        h: "Qualche siempre lleva singular",
        p: "<em><b>qualche</b> giorno</em> («unos días»): el sentido es plural pero el sustantivo va en singular. Su sinónimo <em>alcuni/alcune</em> funciona al revés: <em>alcuni giorni</em>."
      },
      {
        contrast: "Tu «unos días» y «algunos días» van los dos en plural, así que <em>qualche giorno</em> se te resistirá: el italiano dice literalmente «algún día» donde tú dices «unos días». Y ojo, porque <em>qualche giorno fa</em> no es «algún día», sino «hace unos días»."
      },
      {
        h: "Ogni y ciascuno",
        p: "<em>Ogni</em> es invariable y siempre singular: <em>ogni giorno</em>, tu «cada día». <em>Ciascuno</em> se flexiona como el artículo indeterminado y subraya uno por uno: <em>ciascuno studente</em>."
      },
      {
        h: "Las negaciones",
        p: "<em>Nessuno</em> (nadie, ningún), <em>niente / nulla</em> (nada), <em>nemmeno / neanche</em> (ni siquiera). <b>Detrás</b> del verbo piden <em>non</em>: <em>non c'è <b>nessuno</b></em>. Delante del verbo el <em>non</em> desaparece: <em><b>Nessuno</b> è venuto.</em> Es tu regla exacta: «no hay nadie» frente a «nadie ha venido»."
      },
      {
        tip: "<em>Qualcosa</em> lleva el adjetivo con <em>di</em>: <em>qualcosa <b>di</b> bello</em>, donde tú dices «algo bonito» sin preposición. Igual <em>niente di grave</em>. Y con infinitivo va <em>da</em>: <em>qualcosa <b>da</b> mangiare</em>, no la <em>di</em> que te pediría tu «algo de comer»."
      }
    ],
    grammar: {
      title: "Los indefinidos",
      table: {
        head: ["forma", "sintaxis", "ejemplo"],
        rows: [
          ["qualche", "+ singular", "qualche giorno fa"],
          ["alcuni / alcune", "+ plural", "alcuni amici"],
          ["ogni", "invariable + singular", "ogni settimana"],
          ["ciascuno", "flexionado, singular", "ciascuna proposta"],
          ["qualcuno / nessuno", "de personas", "Non c'è nessuno."],
          ["qualcosa / niente", "de cosas", "qualcosa di nuovo"]
        ]
      },
      examples: [
        { tr: "Nos vemos dentro de unos días." },
        { tr: "Algunos compañeros no están de acuerdo." },
        { tr: "Es la misma historia cada vez." },
        { tr: "No vi a nadie en la oficina." },
        { tr: "Nadie me avisó.", note: "delante del verbo: sin non" },
        { tr: "¿Quieres algo de beber?" }
      ]
    },
    vocab: [
      "unos (+ singular)",
      "algunos",
      "cada",
      "cada uno",
      "alguien",
      "nadie, ningún",
      "algo",
      "nada",
      "nadie (en preguntas)",
      "en ninguna parte",
      "ni siquiera",
      "avisar"
    ],
    exercises: [
      {
        q: "¿Qué combinación es correcta?",
        opts: ["qualche giorni", "qualche giorno", "qualche dei giorni"],
        why: "Qualche siempre lleva singular."
      },
      { q: "¿Y aquí?", opts: ["alcuni giorno", "alcuni giorni", "alcuno giorni"] },
      { q: "Completa: «Non c'è ___ in ufficio.» (nadie)" },
      { q: "Completa: «___ mi ha avvisato.» (nadie) — al principio de la frase" },
      { q: "Completa: «Vuoi qualcosa ___ bere?»" },
      { q: "Completa: «Ho sentito qualcosa ___ strano.»" },
      {
        q: "¿Qué frases son correctas?",
        opts: ["Non ho visto nessuno.", "Ho visto nessuno.", "Nessuno è venuto.", "Non nessuno è venuto."]
      },
      { q: "Completa.", tr: "Cada vez que llamo, no contesta nadie." },
      { tr: "Algunos compañeros no están de acuerdo, pero nadie lo dice abiertamente." },
      { tr: "Nos vemos dentro de unos días, te escribo." }
    ]
  },
  "lesson:b1-u02-test": {
    theme: "Test",
    title: "Test de la unidad 2",
    objectives: ["comprobar los pronombres combinados, ci/ne, las relativas y los indefinidos"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Mi dai il libro?» →", opts: ["Sì, ti lo do.", "Sì, te lo do.", "Sì, lo ti do."] },
      { q: "«Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      { q: "«Non ___ la faccio più.»" },
      { q: "«Me ___ vado.»" },
      { q: "«La città in ___ vivo.»" },
      { q: "«Il libro ___ ho letto.»" },
      { q: "Correcto:", opts: ["qualche giorni", "qualche giorno", "alcuni giorno"] },
      { q: "«Vuoi qualcosa ___ mangiare?»" },
      { tr: "Se lo expliqué, pero hace falta tiempo para entenderlo." },
      { tr: "Te lo mando en cuanto pueda, ahora no doy abasto." }
    ]
  },
  "unit:b1-u03": {
    title: "La burocracia italiana",
    grammarNote: "lenguaje administrativo · documentos · solicitudes formales"
  },
  "lesson:b1-u03-l1": {
    theme: "Vivir en Italia",
    title: "Los documentos básicos",
    objectives: [
      "entender para qué sirven el codice fiscale y la residenza",
      "pedir que te expidan un documento",
      "rellenar un impreso sencillo"
    ],
    theory: [
      {
        h: "El codice fiscale lo abre todo",
        p: "<strong>Il codice fiscale</strong> es un código fiscal de dieciséis caracteres generado a partir del nombre, el apellido y la fecha y el lugar de nacimiento. Sin él no puedes abrir una cuenta, firmar un alquiler, comprar una SIM ni darte de alta con un médico. Lo expide la <em>Agenzia delle Entrate</em> en el acto y gratis. Ocupa el hueco de tu NIF o NIE."
      },
      {
        h: "La residenza no es una dirección",
        p: "<strong>La residenza</strong> es la inscripción formal en el ayuntamiento (<em>comune</em>): es tu empadronamiento. De ella dependen el médico de cabecera, el carné de conducir, las ayudas y una larga lista de descuentos. Después de presentar la solicitud, <em>il vigile</em> (un agente municipal) pasa a comprobar que vives allí de verdad, un paso que en España no existe."
      },
      {
        h: "Tres palabras que oirás en cualquier ventanilla",
        list: [
          "<em>la marca da bollo</em> — el timbre fiscal, que se compra en el estanco (<em>tabaccheria</em>) y se pega en la solicitud",
          "<em>l'autocertificazione</em> — la declaración responsable que sustituye a un certificado; tiene valor legal",
          "<em>l'appuntamento</em> — muchas oficinas no te dejan pasar sin cita previa por internet"
        ]
      },
      {
        tip: "<em>La tabaccheria</em> es tu estanco: además de tabaco vende timbres, billetes de transporte y recargas de móvil, y en ella se pagan algunos recibos."
      }
    ],
    grammar: {
      title: "Lenguaje administrativo",
      table: {
        head: ["fórmula", "significado", "dónde"],
        rows: [
          ["Il sottoscritto / la sottoscritta", "el abajo firmante", "solicitudes"],
          ["Si prega di…", "se ruega…", "instrucciones"],
          ["Ai sensi dell'art. …", "conforme al artículo…", "normativa"],
          ["In allegato", "adjunto", "impresos"],
          ["Entro e non oltre", "antes del, como máximo", "plazos"],
          ["Rilasciare / rilascio", "expedir / expedición", "documentos"]
        ]
      },
      examples: [
        { tr: "Querría solicitar el codice fiscale." },
        { tr: "Tengo que empadronarme en este municipio." },
        { tr: "Hace falta un timbre de dieciséis euros." },
        { tr: "Ya he pedido cita por internet." },
        { tr: "El documento se expide en el acto." },
        { tr: "Rellene el impreso en mayúsculas, por favor." }
      ]
    },
    vocab: [
      "código fiscal",
      "empadronamiento",
      "ayuntamiento",
      "registro civil",
      "impreso, formulario",
      "timbre fiscal",
      "declaración responsable",
      "expedir (un documento)",
      "ventanilla",
      "en mayúsculas",
      "tarjeta sanitaria",
      "permiso de residencia"
    ],
    culture: {
      title: "Con ojos italianos: sobrevivir a una oficina pública",
      text: "<p>Regla uno: <b>lleva siempre más documentos de los que pide la web</b>. Cada ventanilla lee los requisitos a su manera.</p><p>Regla dos: <b>la autocertificazione es tu aliada</b>. La ley permite sustituir muchos certificados por una declaración responsable, y el funcionario está obligado a aceptarla. Conviene saberlo, porque nadie te lo va a ofrecer.</p><p>Regla tres: <b>apunta el nombre del funcionario</b> que te ha atendido. En la siguiente visita te permite reconstruir el historial de tu expediente.</p>"
    },
    exercises: [
      {
        q: "¿Para qué sirve el codice fiscale?",
        opts: [
          "Solo para los impuestos",
          "Para casi cualquier trámite: cuenta bancaria, contrato, médico",
          "Es el teléfono de Hacienda"
        ]
      },
      { q: "¿Dónde se compra una marca da bollo?", opts: ["En el ayuntamiento", "En un estanco", "En el banco"] },
      { q: "Completa: «Vorrei ___ il codice fiscale.» (solicitar)" },
      { q: "Completa: «Compili il modulo in ___.» (mayúsculas)" },
      { q: "Relaciona.", pairs: ["registro civil", "ventanilla", "expedir", "impreso"] },
      {
        q: "¿Qué es una «autocertificazione»?",
        opts: [
          "Un certificado que expide la oficina",
          "Una declaración responsable con valor legal",
          "Una declaración ante notario"
        ]
      },
      { q: "«Tengo que empadronarme en este municipio.»" },
      {
        q: "Completa la petición en la ventanilla.",
        tr: "Buenos días, querría solicitar el codice fiscale. Ya he pedido cita por internet."
      },
      { tr: "Hace falta un timbre de dieciséis euros y una copia del documento de identidad." },
      { tr: "Querría solicitar el codice fiscale, llevo el pasaporte." }
    ]
  },
  "lesson:b1-u03-l2": {
    theme: "Vivir en Italia",
    title: "Bancos y contratos",
    objectives: [
      "abrir una cuenta bancaria",
      "entender las condiciones básicas de un contrato",
      "preguntar por costes y condiciones"
    ],
    theory: [
      {
        h: "La cuenta y lo que cuesta",
        p: "<em>Il conto corrente</em> suele llevar <em>il canone mensile</em>, una cuota mensual, algo que en España también existe pero que muchos bancos han eliminado. Una transferencia es <strong>il bonifico</strong> y el número de cuenta es el <strong>IBAN</strong>, el mismo formato europeo que ya usas. <em>Il bancomat</em> significa a la vez el cajero y la tarjeta de débito."
      },
      {
        h: "El contrato: palabras que hay que entender",
        list: [
          "<em>le condizioni</em> — las condiciones; <em>la clausola</em> — la cláusula",
          "<em>il recesso</em> — el desistimiento; <em>la disdetta</em> — la baja",
          "<em>la scadenza</em> — el vencimiento; <em>il rinnovo automatico</em> — la renovación automática",
          "<em>le spese di gestione</em> — los gastos de gestión"
        ]
      },
      {
        h: "Preguntas que conviene hacer",
        p: "<em>Quali sono i costi fissi?</em>, <em>C'è un vincolo di durata?</em>, <em>Come posso disdire?</em>, <em>Il rinnovo è automatico?</em>. La renovación automática es muy común en los contratos italianos y hay que cortarla con preaviso, igual que en tu compañía de teléfono."
      },
      {
        tip: "Al firmar, el empleado puede pedirte que rubriques cada página (<em>siglare</em>) y que firmes otra vez debajo de las cláusulas (<em>doppia firma</em>). Es lo normal, no una señal de alarma."
      }
    ],
    grammar: {
      title: "Banco y contrato",
      table: {
        head: ["italiano", "español", "contexto"],
        rows: [
          ["il conto corrente", "cuenta corriente", "banco"],
          ["il canone mensile", "cuota mensual", "banco, teléfono"],
          ["il bonifico", "transferencia", "pagos"],
          ["la disdetta", "baja, cancelación", "contrato"],
          ["il rinnovo automatico", "renovación automática", "contrato"],
          ["il vincolo", "permanencia", "contrato"]
        ]
      },
      examples: [
        { tr: "Querría abrir una cuenta corriente." },
        { tr: "¿Cuánto es la cuota mensual?" },
        { tr: "Tengo que hacer una transferencia internacional." },
        { tr: "¿Hay permanencia?" },
        { tr: "¿Cómo puedo dar de baja el contrato?" },
        { tr: "Se renueva automáticamente salvo que lo cancele." }
      ]
    },
    vocab: [
      "cuenta corriente",
      "transferencia",
      "número de cuenta",
      "cajero, tarjeta de débito",
      "cuota de suscripción",
      "comisión",
      "contrato",
      "cláusula",
      "baja, cancelación",
      "preaviso",
      "firmar",
      "permanencia"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["transferencia", "baja", "cuota", "comisión"] },
      {
        q: "«Rinnovo automatico salvo disdetta» significa:",
        opts: [
          "El contrato termina automáticamente",
          "El contrato se renueva salvo que lo canceles",
          "El contrato no se puede renovar"
        ]
      },
      { q: "Completa: «Vorrei aprire un ___ corrente.»" },
      { q: "Completa: «C'è un ___ di durata?» (permanencia)" },
      { q: "«¿Cómo puedo dar de baja el contrato?»" },
      {
        q: "En el banco.",
        setting: "La mesa de un asesor, con cita previa.",
        lines: [
          { tr: "Buenos días, ¿en qué puedo ayudarle?" },
          { tr: "Di que quieres abrir una cuenta.", answerTr: "Querría abrir una cuenta corriente." },
          { tr: "Por supuesto. ¿Tiene codice fiscale y un documento de identidad?" },
          { tr: "Confirma y pregunta por la cuota mensual.", answerTr: "Sí. ¿Cuánto es la cuota mensual?" },
          { tr: "Cuatro euros al mes, gratis si tiene menos de treinta años." }
        ]
      },
      {
        q: "Completa las preguntas al asesor.",
        tr: "¿Qué comisiones tienen las transferencias? ¿Y la renovación es automática?"
      },
      { tr: "Tengo que hacer una transferencia internacional." },
      { tr: "La cuota son cuatro euros al mes, tarjeta incluida." },
      { tr: "Querría saber si hay permanencia." }
    ]
  },
  "lesson:b1-u03-l3": {
    theme: "Vivir en Italia",
    title: "Reclamaciones y derechos",
    objectives: [
      "presentar una reclamación en persona y por escrito",
      "citar el contrato o la ley",
      "escalar con cortesía pero con firmeza"
    ],
    theory: [
      {
        h: "Qué hace que una reclamación funcione",
        p: "Una reclamación italiana funciona mejor cuando lleva cuatro cosas: <b>hechos con fechas</b>, <b>una referencia al contrato o a la ley</b>, <b>una petición concreta</b> y <b>un plazo</b>. La emoción la debilita, los datos la refuerzan."
      },
      {
        h: "Fórmulas escritas",
        list: [
          "<em>Con la presente segnalo che…</em> — por la presente comunico que…",
          "<em>Come da contratto…</em> — conforme al contrato…",
          "<em>Chiedo pertanto…</em> — solicito por tanto…",
          "<em>In mancanza di riscontro entro X giorni…</em> — a falta de respuesta en X días…"
        ]
      },
      {
        h: "Herramientas de escalada",
        p: "La <em>raccomandata A/R</em> (carta certificada con acuse de recibo) y la <strong>PEC</strong> (<em>posta elettronica certificata</em>, correo con el valor legal de un certificado) son los pasos siguientes habituales. La PEC es lo que en España harías con un burofax, solo que aquí es correo electrónico y lo tiene casi todo el mundo. Asociaciones de consumidores: <em>Altroconsumo</em>, <em>Federconsumatori</em>."
      },
      {
        tip: "La frase <em>Mi riservo di adire le vie legali</em> («me reservo el derecho a emprender acciones legales») es contundente pero completamente convencional como cierre. En italiano no se lee como una agresión."
      }
    ],
    grammar: {
      title: "El lenguaje de las reclamaciones",
      table: {
        head: ["función", "expresión", "en español"],
        rows: [
          ["comunicar", "Con la presente segnalo che…", "Por la presente comunico que…"],
          ["fundamento", "Come da contratto / ai sensi di legge", "Conforme al contrato / según la ley"],
          ["petición", "Chiedo il rimborso / la sostituzione.", "Solicito el reembolso / la sustitución."],
          ["plazo", "entro quindici giorni", "en el plazo de quince días"],
          ["escalada", "Mi riservo di adire le vie legali.", "Me reservo el derecho a acciones legales."],
          ["en persona", "Vorrei parlare con un responsabile.", "Querría hablar con un responsable."]
        ]
      },
      examples: [
        { tr: "El producto llegó dañado." },
        { tr: "Querría poner una reclamación." },
        { tr: "Tengo derecho al reembolso en catorce días." },
        { tr: "Conforme al contrato, el servicio debía estar activo desde el día uno." },
        { tr: "Le envío la documentación adjunta." },
        { tr: "Quedo a la espera de su respuesta." }
      ]
    },
    vocab: [
      "reclamación",
      "poner una reclamación",
      "reembolso",
      "sustitución",
      "dañado",
      "defectuoso",
      "garantía",
      "responsable",
      "carta certificada",
      "respuesta",
      "tener derecho a",
      "por tanto"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["reembolso", "defectuoso", "garantía", "respuesta"] },
      { q: "Completa: «Vorrei ___ un reclamo.»" },
      { q: "Completa: «Ho ___ al rimborso.» (tengo derecho)" },
      {
        q: "¿Qué es la PEC?",
        opts: ["Un tipo de transferencia", "Correo electrónico con valor legal de certificado", "Un número de identificación"]
      },
      { q: "«El producto llegó dañado, solicito el reembolso.»" },
      {
        q: "Completa la carta.",
        tr: "Por la presente comunico que el servicio no funciona. Conforme al contrato, solicito el reembolso en el plazo de quince días."
      },
      { tr: "Querría hablar con un responsable." },
      {
        q: "¿Qué elemento refuerza más una reclamación italiana?",
        opts: [
          "Mostrar lo enfadado que estás",
          "Fechas, referencia al contrato y una petición concreta",
          "Repetir la petición tres veces"
        ]
      },
      { tr: "Conforme al contrato, el servicio debía estar activo desde el día uno del mes." },
      { tr: "Querría poner una reclamación: el producto está defectuoso." }
    ]
  },
  "lesson:b1-u03-l4": {
    theme: "Vivir en Italia",
    title: "El trabajo y los tipos de contrato",
    objectives: [
      "entender los contratos laborales italianos",
      "hablar de las condiciones de trabajo",
      "preguntar por el sueldo y las vacaciones"
    ],
    theory: [
      {
        h: "Tipos de contrato",
        list: [
          "<b>tempo indeterminato</b> — indefinido, el que todo el mundo quiere",
          "<b>tempo determinato</b> — temporal, con límites a las prórrogas",
          "<b>partita IVA</b> — autónomo: facturas y pagas tus propias cotizaciones",
          "<b>apprendistato / tirocinio</b> — contrato de formación o prácticas, normalmente para jóvenes"
        ]
      },
      {
        h: "El sueldo: neto, bruto y la decimotercera",
        p: "Los italianos hablan del sueldo como <b>neto mensual</b> y como <em>RAL</em> (<em>retribuzione annua lorda</em>, el bruto anual, tu salario bruto anual). Encima va <strong>la tredicesima</strong>, una paga extra en diciembre, y en algunos sectores <em>la quattordicesima</em> en julio. El sistema de pagas extra te suena: la diferencia es que en Italia la segunda no es general."
      },
      {
        h: "Vacaciones y permisos",
        p: "<em>Le ferie</em> son las vacaciones pagadas (normalmente 26 días laborables), <em>i permessi</em> son horas libres, <em>la malattia</em> es la baja por enfermedad. <em>Il CCNL</em> (<em>contratto collettivo nazionale</em>) es el convenio colectivo del sector, que fija las condiciones mínimas."
      },
      {
        tip: "Preguntar <em>Qual è la RAL prevista?</em> en una entrevista es completamente normal y esperado. No es una falta de educación."
      }
    ],
    grammar: {
      title: "Trabajo y sueldo",
      table: {
        head: ["italiano", "español", "nota"],
        rows: [
          ["tempo indeterminato", "contrato indefinido", "el más estable"],
          ["tempo determinato", "contrato temporal", "con fecha de fin"],
          ["partita IVA", "autónomo", "cotizaciones propias"],
          ["la tredicesima", "paga extra de diciembre", "se cobra en diciembre"],
          ["le ferie", "vacaciones pagadas", "días laborables"],
          ["il CCNL", "convenio colectivo", "condiciones mínimas"]
        ]
      },
      examples: [
        { tr: "Tengo un contrato indefinido." },
        { tr: "Llevo tres años como autónomo." },
        { tr: "¿Cuál es el bruto anual de este puesto?" },
        { tr: "¿Cuántos días de vacaciones hay?" },
        { tr: "El periodo de prueba es de tres meses." },
        { tr: "Pido un permiso por motivos personales." }
      ]
    },
    vocab: [
      "contrato indefinido",
      "trabajo por cuenta propia",
      "sueldo neto",
      "salario bruto anual",
      "paga extra",
      "vacaciones pagadas",
      "permiso, horas libres",
      "periodo de prueba",
      "entrevista de trabajo",
      "currículum",
      "contratar",
      "dimitir"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["indefinido", "paga extra", "vacaciones pagadas", "periodo de prueba"] },
      { q: "¿Qué es la RAL?", opts: ["El neto mensual", "El bruto anual", "Un tipo de contrato"] },
      { q: "¿Quién paga las cotizaciones con una partita IVA?", opts: ["La empresa", "El trabajador", "Nadie"] },
      { q: "Completa: «Il ___ di prova è di tre mesi.»" },
      { q: "«¿Cuántos días de vacaciones hay?»" },
      {
        q: "Completa las preguntas de la entrevista.",
        tr: "¿Cuál es el bruto anual que ofrecen? ¿Y cuánto dura el periodo de prueba?"
      },
      { q: "«Licenziarsi» significa:", opts: ["despedir a alguien", "dimitir", "conseguir un aumento"] },
      { tr: "Llevo dos años con contrato indefinido." },
      { tr: "La paga extra se cobra en diciembre junto con la mensualidad." },
      { tr: "Querría saber cuál es el bruto anual de este puesto." }
    ]
  },
  "lesson:b1-u03-test": {
    theme: "Test",
    title: "Test de la unidad 3",
    objectives: ["comprobar el vocabulario administrativo, bancario y laboral"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      {
        q: "El codice fiscale sirve para:",
        opts: ["solo los impuestos", "casi cualquier trámite", "viajar"]
      },
      { q: "Una marca da bollo se compra en:", opts: ["el ayuntamiento", "un estanco", "el banco"] },
      { q: "«Compili il modulo in ___.»" },
      { q: "«Vorrei aprire un ___ corrente.»" },
      { q: "«Vorrei ___ un reclamo.»" },
      { q: "«Ho ___ al rimborso.»" },
      { q: "La RAL es:", opts: ["el neto mensual", "el bruto anual", "la paga extra"] },
      { q: "Relaciona.", pairs: ["baja", "transferencia", "vacaciones pagadas", "registro civil"] },
      { tr: "Para empadronarse hacen falta un documento de identidad y un contrato de alquiler." },
      { tr: "Querría solicitar el codice fiscale y empadronarme." }
    ]
  },
  "unit:b1-u04": { title: "Medios y argumentación", grammarNote: "estilo indirecto · conectores · el lenguaje de la prensa" },
  "lesson:b1-u04-l1": {
    theme: "Medios",
    title: "El estilo indirecto",
    objectives: [
      "pasar un enunciado a estilo indirecto",
      "desplazar los tiempos correctamente",
      "cambiar las palabras de tiempo y lugar"
    ],
    theory: [
      {
        h: "El desplazamiento de tiempos",
        p: "Cuando el verbo introductor está en pasado, los tiempos de lo citado retroceden un paso: <em>presente → imperfetto</em>, <em>passato prossimo → trapassato</em>, <em>futuro → condizionale passato</em>. Las dos primeras te sonarán: son las tuyas."
      },
      {
        contrast: "La tercera no. Tú dices «dijo que <b>vendría</b>», con condicional simple. El italiano exige el <b>condicional compuesto</b>: <em>Ha detto che <b>sarebbe venuto</b></em>. «Ha detto che verrebbe» es agramatical. Es el error más persistente del hispanohablante en todo el nivel B1, precisamente porque tu forma parece encajar."
      },
      {
        h: "Las palabras de tiempo y lugar también cambian",
        p: "<em>oggi → quel giorno</em>, <em>ieri → il giorno prima</em>, <em>domani → il giorno dopo</em>, <em>qui → lì</em>, <em>questo → quello</em>, <em>adesso → allora</em>. Sin esto el relato queda incoherente, igual que en español."
      },
      {
        h: "Órdenes y preguntas",
        p: "Un imperativo se convierte en <em>di</em> + infinitivo: <em>«Vieni!» → Mi ha detto di venire.</em> Una pregunta de sí o no lleva <em>se</em>: <em>«Vieni?» → Mi ha chiesto se venivo.</em>"
      }
    ],
    grammar: {
      title: "Transformaciones del estilo indirecto",
      table: {
        head: ["directo", "indirecto", "ejemplo"],
        rows: [
          ["presente", "imperfetto", "«Lavoro» → Disse che lavorava."],
          ["passato prossimo", "trapassato", "«Ho finito» → Disse che aveva finito."],
          ["futuro", "condizionale passato", "«Verrò» → Disse che sarebbe venuto."],
          ["imperativo", "di + infinitivo", "«Vieni!» → Mi disse di venire."],
          ["pregunta sí/no", "se + oración", "«Vieni?» → Mi chiese se venivo."],
          ["cong. presente", "cong. imperfetto", "«Penso che sia» → Disse che pensava che fosse."]
        ]
      },
      examples: [
        { tr: "Marco dijo que estaba cansado." },
        { tr: "Me dijo que llegaría al día siguiente." },
        { tr: "Preguntó si podía ayudarle." },
        { tr: "Me dijo que no me preocupara." },
        { tr: "Explicó que ya lo había intentado." },
        { tr: "Añadió que aquel día era imposible." }
      ]
    },
    vocab: [
      "decir que",
      "preguntar si",
      "explicar",
      "añadir",
      "responder",
      "sostener, afirmar",
      "declarar",
      "desmentir",
      "el día anterior / siguiente",
      "entonces",
      "en aquel momento",
      "según lo dicho"
    ],
    exercises: [
      {
        q: "«Verrò domani» en estilo indirecto tras un pasado:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe domani."
        ]
      },
      { q: "«Lavoro molto» → «Ha detto che ___ molto.»" },
      { q: "«Ho finito» → «Ha detto che ___ finito.»" },
      { q: "«Vieni!» → «Mi ha detto ___ venire.»" },
      { q: "«Vieni?» → «Mi ha chiesto ___ venivo.»" },
      { q: "Transfórmalo.", tr: "«Te llamo mañana» → Me dijo que me llamaría al día siguiente." },
      {
        q: "Relaciona las palabras de tiempo y lugar desplazadas.",
        pairs: ["aquel día", "el día anterior", "el día siguiente", "allí"]
      },
      { q: "«Me dijo que no me preocupara.»" },
      { tr: "Explicó que ya lo había intentado varias veces sin éxito." },
      { tr: "Me dijo que llegaría al día siguiente." }
    ]
  },
  "lesson:b1-u04-l2": {
    theme: "Medios",
    title: "Leer la prensa",
    objectives: [
      "entender cómo se construye una noticia",
      "detectar el lenguaje de la información no confirmada",
      "resumir un texto con tus palabras"
    ],
    theory: [
      {
        h: "El condicional periodístico",
        p: "Los medios italianos usan el condicional para la información <b>no confirmada</b>: <em>Il ministro <b>avrebbe</b> firmato l'accordo</em> significa «al parecer el ministro firmó, pero no está confirmado». No es el periodista especulando, es una señal de que la fuente no es oficial."
      },
      {
        contrast: "Este recurso lo tienes igual: tu prensa escribe «el ministro habría firmado» con exactamente el mismo valor. Es de los pocos puntos de este nivel donde puedes leer sin traducir. Cuidado solo con no extenderlo al habla: en italiano, como en español, fuera del periodismo suena raro."
      },
      {
        h: "Cómo se maqueta un artículo",
        p: "<em>Il titolo</em> (el titular), <em>l'occhiello</em> (el antetítulo), <em>il sommario</em> (la entradilla), <em>il corpo</em> (el cuerpo), <em>la didascalia</em> (el pie de foto). Los titulares italianos son a menudo elípticos y sin verbo, como los tuyos."
      },
      {
        h: "La nominalización",
        p: "El lenguaje de prensa convierte verbos en sustantivos: <em>hanno approvato la legge</em> → <em>l'approvazione della legge</em>. Comprime el texto y lo hace duro al principio; reconocer el mecanismo ayuda mucho."
      },
      {
        tip: "Los grandes diarios: <em>Corriere della Sera</em>, <em>la Repubblica</em>, <em>Il Sole 24 Ore</em> (economía), <em>Il Post</em> (legible, buen punto de partida para quien aprende)."
      }
    ],
    grammar: {
      title: "El lenguaje de la prensa",
      table: {
        head: ["rasgo", "ejemplo", "significado"],
        rows: [
          ["condicional", "Avrebbe dichiarato che…", "habría declarado"],
          ["nominalización", "l'approvazione della riforma", "la aprobación de la reforma"],
          ["pasiva", "La legge è stata approvata.", "la ley fue aprobada"],
          ["titular elíptico", "Governo verso la crisi", "el Gobierno hacia la crisis"],
          ["fuentes", "secondo fonti vicine a…", "según fuentes cercanas a…"],
          ["cifras", "in calo / in aumento", "a la baja / al alza"]
        ]
      },
      examples: [
        { tr: "Según fuentes internas, la empresa ya habría decidido." },
        { tr: "La reforma fue aprobada con 210 votos a favor." },
        { tr: "Los datos de empleo están al alza." },
        { tr: "El artículo sostiene que el problema es estructural." },
        { tr: "El periódico desmintió la noticia." },
        { tr: "En resumen: la cuestión central es la financiación." }
      ]
    },
    vocab: [
      "diario",
      "semanario",
      "noticia",
      "fuente",
      "desmentir",
      "sostener, afirmar",
      "al alza / a la baja",
      "reportaje de investigación",
      "editorial",
      "titular",
      "resumir",
      "fiable"
    ],
    exercises: [
      {
        q: "«Il ministro avrebbe firmato l'accordo» significa:",
        opts: [
          "El ministro firmó el acuerdo",
          "Al parecer el ministro firmó, sin confirmar",
          "El ministro firmaría si pudiera"
        ]
      },
      {
        q: "«L'approvazione della legge» es una nominalización de:",
        opts: ["approvare la legge", "la legge approvata", "legalmente"]
      },
      { q: "Completa: «I dati sono in ___.» (al alza)" },
      { q: "Completa: «Il giornale ha ___ la notizia.» (desmentido)" },
      { q: "Relaciona.", pairs: ["diario", "fuente", "reportaje de investigación", "fiable"] },
      {
        q: "«Secondo fonti vicine al governo» señala:",
        opts: ["información oficial", "información no oficial", "la opinión de la redacción"]
      },
      {
        q: "Completa la frase informativa.",
        tr: "Según fuentes internas la empresa ya había decidido, pero el portavoz desmintió la noticia."
      },
      { q: "«La reforma fue aprobada la semana pasada.»" },
      { tr: "Según el periódico, el Gobierno ya habría preparado su respuesta." },
      { tr: "El artículo sostiene que el problema es estructural." }
    ]
  },
  "lesson:b1-u04-l3": {
    theme: "Comunicación",
    title: "Sostener una argumentación",
    objectives: [
      "enlazar argumentos con conectores",
      "construir un discurso ordenado",
      "evitar la monotonía del «y… y… y…»"
    ],
    theory: [
      {
        h: "Un conector anuncia lo que viene",
        p: "Sin conectores un texto es una lista de frases. <em>Inoltre</em> anuncia una adición, <em>tuttavia</em> un giro, <em>quindi</em> una conclusión, <em>infatti</em> una justificación. Elegir el conector forma parte del argumento, no es adorno."
      },
      {
        h: "Parejas fáciles de confundir",
        list: [
          "<em>infatti</em> (en efecto, confirma) frente a <em>invece</em> (en cambio, contrasta)",
          "<em>anzi</em> (es más, refuerza o corrige) frente a <em>però</em> (pero)",
          "<em>quindi</em> (así que, concluye) frente a <em>allora</em> (entonces, también muletilla)",
          "<em>comunque</em> (en cualquier caso) frente a <em>tuttavia</em> (sin embargo, formal)"
        ]
      },
      {
        trap: "Dos falsos amigos de conector que cuestan caro: <em>infatti</em> no es «infelizmente» ni «de hecho» en el sentido adversativo, sino que <b>confirma</b> lo dicho («en efecto»); y <em>anzi</em> no es «antes», sino «es más» o «al contrario». Tradúcelos por su función, no por su parecido."
      },
      {
        h: "Un esqueleto para una argumentación breve",
        p: "<em>Anzitutto…</em> (ante todo) → <em>Inoltre…</em> (además) → <em>Tuttavia…</em> (sin embargo) → <em>In conclusione…</em>. Este esqueleto basta para la parte oral de un examen B1 y para un texto escrito corto."
      }
    ],
    grammar: {
      title: "Conectores por función",
      table: {
        head: ["función", "conectores", "ejemplo"],
        rows: [
          ["adición", "inoltre, in più, per di più", "Inoltre il prezzo è alto."],
          ["contraste", "però, tuttavia, invece, anzi", "Tuttavia i dati dicono altro."],
          ["causa", "perché, poiché, siccome, dato che", "Siccome piove, restiamo."],
          ["consecuencia", "quindi, perciò, dunque, pertanto", "Quindi ho deciso di partire."],
          ["explicación", "cioè, ovvero, in altre parole", "Cioè, non è possibile."],
          ["cierre", "insomma, in conclusione", "Insomma, non conviene."]
        ]
      },
      examples: [
        { tr: "Ante todo el coste es demasiado alto." },
        { tr: "Además no tenemos tiempo suficiente." },
        { tr: "Sin embargo hay una alternativa." },
        { tr: "El proyecto es complejo, así que hacen falta más recursos." },
        { tr: "No es caro, al contrario, sale a cuenta." },
        { tr: "En conclusión, propongo aplazarlo." }
      ]
    },
    vocab: [
      "ante todo",
      "además",
      "sin embargo",
      "en cambio",
      "es más; al contrario",
      "así que",
      "por consiguiente",
      "es decir",
      "en efecto",
      "por otra parte",
      "en conclusión",
      "en cualquier caso"
    ],
    exercises: [
      { q: "«Non è caro, ___ è conveniente.» (al contrario)", opts: ["però", "anzi", "invece"] },
      { q: "«Il progetto è complesso, ___ servono più risorse.»", opts: ["perciò", "invece", "cioè"] },
      { q: "Completa: «___ il costo è troppo alto.» (ante todo)" },
      { q: "Completa: «___, propongo di rimandare.» (en conclusión)" },
      { q: "Relaciona conector y función.", pairs: ["adición", "contraste", "consecuencia", "explicación"] },
      {
        q: "Construye el argumento.",
        tr: "Ante todo el precio es alto. Además no tenemos tiempo. Así que propongo aplazarlo."
      },
      {
        q: "¿Qué conector pertenece al registro escrito y no al coloquial?",
        opts: ["comunque", "pertanto", "allora"]
      },
      { tr: "Sin embargo hay una alternativa que merece la pena considerar." },
      { tr: "Primero el coste, luego los plazos: en conclusión, no sale a cuenta." },
      { tr: "Por un lado es verdad, por otro los datos dicen lo contrario." }
    ]
  },
  "lesson:b1-u04-l4": {
    theme: "Comunicación",
    title: "Una intervención más larga",
    objectives: [
      "construir una respuesta de dos minutos sobre un tema",
      "apoyar una opinión con un ejemplo y con datos",
      "cerrar con una conclusión"
    ],
    theory: [
      {
        h: "Una estructura que siempre funciona",
        list: [
          "<b>tesis</b>: <em>Secondo me…</em> / <em>Ritengo che…</em>",
          "<b>argumento 1 + ejemplo</b>: <em>Anzitutto… Per esempio…</em>",
          "<b>argumento 2</b>: <em>Inoltre…</em>",
          "<b>contraargumento y respuesta</b>: <em>C'è chi sostiene che… Tuttavia…</em>",
          "<b>conclusión</b>: <em>In conclusione…</em>"
        ]
      },
      {
        h: "Conceder un punto te hace más fuerte",
        p: "Una respuesta que le da algo a la otra parte antes de rebatirla suena más sólida que una unilateral. La fórmula: <em>È vero che…, tuttavia…</em>, o <em>Capisco chi dice che…, però…</em>"
      },
      {
        h: "Las muletillas ganan tiempo",
        p: "<em>Diciamo che…</em>, <em>In un certo senso…</em>, <em>Come dire…</em>, <em>Se ci pensi…</em>. No son relleno: te mantienen fluido mientras buscas una palabra. Los examinadores las cuentan como estrategia comunicativa."
      },
      {
        tip: "No traduzcas frase por frase desde el español. Construye frases italianas más simples y únelas con conectores: sale más fluido que una versión fiel de una frase española complicada."
      }
    ],
    grammar: {
      title: "El esqueleto de una respuesta",
      table: {
        head: ["fase", "fórmula", "en español"],
        rows: [
          ["tesis", "Ritengo che… / Secondo me…", "Considero que… / En mi opinión…"],
          ["argumento", "Anzitutto… / Inoltre…", "Ante todo… / Además…"],
          ["ejemplo", "Per esempio… / Basti pensare a…", "Por ejemplo… / Basta pensar en…"],
          ["contraargumento", "C'è chi sostiene che…", "Hay quien sostiene que…"],
          ["respuesta", "Tuttavia… / Va detto però che…", "Sin embargo… / Hay que decir, eso sí, que…"],
          ["conclusión", "In conclusione… / Per questo…", "En conclusión… / Por eso…"]
        ]
      },
      examples: [
        { tr: "Considero que el teletrabajo es útil, pero no para todo el mundo." },
        { tr: "Ante todo recorta el tiempo de desplazamiento." },
        { tr: "Basta pensar en quien vive en las afueras." },
        { tr: "Hay quien sostiene que reduce la colaboración." },
        { tr: "Hay que decir, eso sí, que depende de la organización." },
        { tr: "En conclusión, la solución híbrida me parece la más equilibrada." }
      ]
    },
    vocab: [
      "considerar, estimar",
      "sostener, afirmar",
      "basta pensar en",
      "hay que decir que",
      "hay quien dice que",
      "en cierto sentido",
      "digamos que",
      "equilibrado",
      "tema, argumento",
      "ventaja / desventaja",
      "a la larga",
      "merece la pena"
    ],
    exercises: [
      { q: "Completa: «___ che il problema sia strutturale.» (considero)" },
      { q: "Completa: «C'è ___ sostiene il contrario.» (hay quien)" },
      { q: "Detrás de «ritengo che» va:", opts: ["indicativo", "congiuntivo", "el infinitivo"] },
      {
        q: "Relaciona.",
        pairs: ["basta pensar en", "hay que decir", "a la larga", "merece la pena"]
      },
      {
        q: "Completa la respuesta.",
        tr: "Considero que el trabajo híbrido es la mejor solución. Ante todo recorta costes. Sin embargo depende del sector."
      },
      { q: "«Hay que decir, eso sí, que depende de la organización.»" },
      { tr: "En conclusión, la solución híbrida me parece la más equilibrada." },
      {
        q: "¿Por qué conviene incluir un contraargumento?",
        opts: [
          "Para alargar la respuesta",
          "Porque la respuesta suena más sólida y más madura",
          "Porque lo exige la gramática"
        ]
      },
      { tr: "Hay quien sostiene que reduce la colaboración, pero los datos no lo confirman." },
      { tr: "Considero que merece la pena intentarlo, al menos durante seis meses." }
    ]
  },
  "lesson:b1-u04-test": {
    theme: "Examen",
    title: "Examen final de B1",
    objectives: ["comprobar el congiuntivo, los pronombres, el estilo indirecto y la argumentación"],
    theory: [{ p: "Doce tareas de todo el nivel. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      { q: "«Penso che tu ___ ragione.»" },
      { q: "«Benché ___ tardi, esco.»" },
      { q: "«Hai dato il libro a Marco? — Sì, ___ ho dato.»" },
      { q: "«Non ___ la faccio più.»" },
      { q: "«La città in ___ vivo.»" },
      {
        q: "«Verrò domani» → estilo indirecto:",
        opts: [
          "Ha detto che verrà domani.",
          "Ha detto che sarebbe venuto il giorno dopo.",
          "Ha detto che verrebbe."
        ]
      },
      {
        q: "«Il ministro avrebbe firmato» significa:",
        opts: ["firmó con seguridad", "al parecer firmó", "firmaría"]
      },
      { q: "«___, propongo di rimandare.» (en conclusión)" },
      { q: "«No creo que hayan entendido el problema.»" },
      { tr: "Me dijo que pasaría al día siguiente, pero no vino." },
      { tr: "Creo que es una buena solución, aunque no perfecta." }
    ]
  }
});
