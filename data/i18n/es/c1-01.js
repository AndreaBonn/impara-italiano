/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/c1-01.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:c1-u01": {
    title: "Todos los valores de SI",
    grammarNote: "si reflexivo, recíproco, impersonal, pasivo · ci si"
  },
  "lesson:c1-u01-l1": {
    theme: "Gramática avanzada",
    title: "Distinguir los valores de si",
    objectives: [
      "reconocer todas las funciones de si en un texto",
      "distinguir el si impersonal del pasivo",
      "usar bien ci si"
    ],
    theory: [
      {
        h: "Una forma, seis trabajos",
        list: [
          "<b>reflexivo</b>: <em>Marco si lava.</em> — hacerse algo a uno mismo",
          "<b>recíproco</b>: <em>Si salutano ogni mattina.</em> — el uno al otro",
          "<b>impersonal</b>: <em>In Italia si mangia bene.</em> — la gente en general",
          "<b>pasivo (passivante)</b>: <em>Qui si vendono panini.</em> — el verbo concuerda con la cosa",
          "<b>de instrucción</b>: <em>Il volante si tiene così.</em> — así se hace",
          "<b>«nosotros» toscano</b>: <em>Stasera noi si va al cinema.</em> — regional"
        ]
      },
      {
        contrast: "Este es el capítulo más agradecido de todo el nivel para ti: tu «se» hace exactamente los mismos trabajos, incluida la distinción entre impersonal y pasiva refleja, y la prueba para separarlos es la tuya. «Se vende casa» frente a «se venden casas» es <em>si vende una casa</em> frente a <em>si vendono case</em>, letra por letra. Donde otros aprenden un sistema, tú solo cambias de idioma."
      },
      {
        h: "La prueba de impersonal frente a pasivo",
        p: "Si detrás hay un sustantivo que podría ser complemento directo, es el <b>si passivante</b> y el verbo concuerda con su número: <em>si <b>vendono</b> case</em>. Si no lo hay, o el verbo es intransitivo, es el <b>si impersonale</b> y la forma se queda en singular: <em>si <b>lavora</b> troppo</em>."
      },
      {
        h: "Ci si: dos si chocando",
        p: "Un <em>si</em> impersonal con un verbo reflexivo daría «si si», así que el primero se convierte en <strong>ci</strong>: <em><b>ci si</b> alza presto</em>, <em>ci si abitua a tutto</em>. El español esquiva el mismo choque de otra manera, con «uno se levanta temprano»: la solución italiana es una partícula, la tuya un pronombre indefinido."
      },
      {
        h: "Tiempos compuestos: siempre essere",
        p: "El <em>si</em> impersonal lleva <em>essere</em>, incluso cuando el verbo normalmente pide <em>avere</em>: <em>si <b>è</b> mangiato bene</em>, donde tú dices «se ha comido bien» con haber. El participio se queda en masculino singular, pero un adjetivo atributo va en plural: <em>si è stati contenti</em>."
      }
    ],
    grammar: {
      title: "Si: la tabla de decisión",
      table: {
        head: ["contexto", "forma", "ejemplo"],
        rows: [
          ["reflexivo", "si + verbo", "Si sveglia alle sei."],
          ["recíproco", "si + plural", "Si scrivono ogni giorno."],
          ["impersonal", "si + 3.ª sing.", "Si lavora troppo."],
          ["pasivo, singular", "si + 3.ª sing.", "Si vende una casa."],
          ["pasivo, plural", "si + 3.ª plur.", "Si vendono case."],
          ["impersonal reflexivo", "ci si", "Ci si alza presto."],
          ["tiempo compuesto", "si è + participio", "Si è mangiato bene."],
          ["con adjetivo", "si è + plural", "Si è stati fortunati."]
        ]
      },
      examples: [
        { tr: "En esta oficina se trabaja demasiado y se gana poco." },
        { tr: "Todas las casas se vendieron en dos meses." },
        { tr: "Uno se acostumbra hasta a lo peor." },
        { tr: "Se discutió largo y tendido, sin resultado." },
        { tr: "Cuando uno es joven, subestima el tiempo." },
        { tr: "El volante se sujeta con las dos manos." }
      ]
    },
    vocab: [
      "acostumbrarse",
      "aburrirse",
      "subestimar",
      "sobrestimar",
      "discutir, debatir",
      "ganar (dinero)",
      "darse cuenta",
      "adaptarse, plegarse",
      "lo peor / lo mejor",
      "sin resultado",
      "largo y tendido",
      "en general"
    ],
    exercises: [
      {
        q: "«Qui si ___ case.» (aquí se venden casas)",
        opts: ["vende", "vendono", "vendere"],
        why: "El si passivante concuerda con el sustantivo en plural."
      },
      {
        q: "«In questo ufficio si ___ troppo.» (lavorare)",
        opts: ["lavora", "lavorano", "lavorare"],
        why: "Sin complemento directo → si impersonale, singular."
      },
      { q: "Completa: «___ si alza presto in campagna.» (impersonal, alzarsi)" },
      { q: "Completa: «Si ___ discusso a lungo.» (tiempo compuesto)" },
      {
        q: "«Si è stati fortunati»: ¿por qué «stati» y no «stato»?",
        opts: [
          "Es un error",
          "Un adjetivo detrás del si impersonal va en plural",
          "Porque essere es irregular"
        ]
      },
      {
        q: "¿En qué frases el si es el pasivo (passivante)?",
        opts: ["Si vendono panini.", "Si lavora molto.", "Si affittano appartamenti.", "Ci si annoia."]
      },
      { q: "Completa las formas.", tr: "En Italia se come bien, pero se trabajan demasiadas horas." },
      { q: "«Uno se acostumbra a todo.»" },
      { tr: "Se discutió largo y tendido, pero no se llegó a ninguna conclusión." },
      { tr: "Cuando uno es joven, subestima el tiempo." }
    ]
  },
  "lesson:c1-u01-l2": {
    theme: "Gramática avanzada",
    title: "Posición del adjetivo y significado",
    objectives: [
      "reconocer el cambio de significado que trae la posición",
      "usar el adjetivo con intención",
      "no malinterpretar los textos"
    ],
    theory: [
      {
        h: "Delante del sustantivo: figurado o subjetivo",
        p: "Un adjetivo <b>delante</b> del sustantivo no suele distinguir, sino caracterizar: <em>un <b>vecchio</b> amico</em> es un amigo de hace tiempo, no uno de edad avanzada. <b>Detrás</b> distingue y suele ser literal: <em>un amico <b>vecchio</b></em>."
      },
      {
        contrast: "Aquí la correspondencia es total y conviene aprovecharla sin miedo: «un viejo amigo» frente a «un amigo viejo», «un gran hombre» frente a «un hombre grande», «un pobre hombre» frente a «un hombre pobre». Tu lengua hace el mismo juego con los mismos adjetivos y con el mismo reparto de significados. La única precaución es no dar por hecho que la lista coincide en todas las palabras: se comprueba una a una."
      },
      {
        h: "Parejas que conviene memorizar",
        list: [
          "<em>un grande uomo</em> (un gran hombre) — <em>un uomo grande</em> (un hombre grande)",
          "<em>un buon medico</em> (un médico competente) — <em>un medico buono</em> (uno bondadoso)",
          "<em>un alto magistrato</em> (un alto magistrado) — <em>un magistrato alto</em> (uno de estatura alta)",
          "<em>una certa informazione</em> (cierta información) — <em>un'informazione certa</em> (una información segura)",
          "<em>un povero uomo</em> (un pobre hombre) — <em>un uomo povero</em> (un hombre sin dinero)",
          "<em>diverse persone</em> (varias personas) — <em>persone diverse</em> (personas distintas)",
          "<em>un semplice impiegato</em> (un simple empleado) — <em>un impiegato semplice</em> (uno de pocas luces)"
        ]
      },
      {
        h: "Por qué importa en C1",
        p: "En el periodismo y en la literatura la distinción lleva significado, no estilo. Leer <em>una certa informazione</em> como «una información segura» en vez de «cierta información» da la vuelta a la frase entera."
      }
    ],
    grammar: {
      title: "Posición y significado",
      table: {
        head: ["delante", "detrás", "la diferencia"],
        rows: [
          ["un vecchio amico", "un amico vecchio", "de hace tiempo / de edad"],
          ["un grande uomo", "un uomo grande", "gran / grande de tamaño"],
          ["un buon medico", "un medico buono", "competente / bondadoso"],
          ["una certa notizia", "una notizia certa", "cierta / segura"],
          ["un povero uomo", "un uomo povero", "desdichado / sin dinero"],
          ["diverse persone", "persone diverse", "varias / distintas"],
          ["un semplice errore", "un errore semplice", "un mero / uno fácil"]
        ]
      },
      examples: [
        { tr: "Es un gran profesional, aunque sea un hombre difícil." },
        { tr: "Me llegó cierta información, pero no es una información segura." },
        { tr: "No es más que un simple malentendido." },
        { tr: "Conocí a varias personas muy distintas entre sí." },
        { tr: "Pobre chico: lo perdió todo." },
        { tr: "Vive en una casa vieja pero preciosa." }
      ]
    },
    vocab: [
      "malentendido",
      "profesional, experto",
      "la vieja guardia",
      "alto cargo",
      "un mero, un simple",
      "cierta / segura",
      "único / sin igual",
      "otro / auténtico",
      "otro / flamante",
      "solo / a solas",
      "distinguir",
      "matiz"
    ],
    exercises: [
      {
        q: "«Un vecchio amico» significa:",
        opts: ["un amigo de edad avanzada", "un amigo de hace tiempo", "un examigo"]
      },
      {
        q: "«Un'informazione certa» significa:",
        opts: ["cierta información", "una información segura", "una información confidencial"]
      },
      { q: "«Diverse persone» significa:", opts: ["personas distintas", "varias personas", "desconocidos"] },
      {
        q: "Relaciona la expresión con su significado.",
        pairs: ["un gran hombre", "un hombre grande", "un pobre hombre", "un hombre sin dinero"]
      },
      {
        q: "Pon el adjetivo en su sitio (delante o detrás).",
        tr: "Me llegó cierta noticia, pero no es una noticia segura."
      },
      { q: "«No es más que un simple malentendido.»" },
      {
        q: "¿Por qué importa esta distinción en periodismo?",
        opts: [
          "Porque suena elegante",
          "Porque la posición cambia el significado de la frase",
          "Porque lo exige la gramática"
        ]
      },
      { tr: "Es un gran profesional, aunque sea un hombre difícil." },
      { tr: "No es un hombre bondadoso que además es médico, es un buen médico: dos cosas distintas." },
      { tr: "Conocí a varias personas muy distintas entre sí." }
    ]
  },
  "lesson:c1-u01-l3": {
    theme: "Gramática avanzada",
    title: "Intensificadores y superlativos",
    objectives: [
      "usar los prefijos intensificadores",
      "conocer los superlativos idiomáticos",
      "reconocer las formas en -errimo"
    ],
    theory: [
      {
        h: "Repetir el adjetivo",
        p: "El intensificador más coloquial es la repetición: <em>Maria è magra magra</em>, <em>un caffè caldo caldo</em>, <em>piano piano</em>. No es un error ni descuido, es un mecanismo vivo del italiano hablado, y tu lengua lo comparte: «un café caliente caliente», «poco a poco»."
      },
      {
        h: "Los prefijos",
        p: "<em>arci-</em> (arcicontento), <em>stra-</em> (straricco, strapieno), <em>iper-</em> (iperattivo), <em>super-</em> (superdotato), <em>ultra-</em> (ultramoderno), <em>mega-</em>. Registro coloquial o periodístico; en un texto formal usa <em>estremamente</em>. Tus «archi-», «super-» y «requete-» ocupan el mismo lugar y el mismo registro."
      },
      {
        h: "Superlativos idiomáticos",
        p: "Comparaciones fijas que no se pueden deducir: <em>stanco morto</em>, <em>ubriaco fradicio</em>, <em>povero in canna</em>, <em>buono come il pane</em>, <em>pieno zeppo</em>, <em>bagnato fradicio</em>, <em>innamorato cotto</em>. Aquí las imágenes no coinciden con las tuyas: tú dices «muerto de cansancio», «borracho como una cuba», «pobre como una rata», «hasta los topes». Se aprenden de una en una, y traducir la imagen española produce frases que nadie dice."
      },
      {
        h: "Las formas en -errimo y -entissimo",
        p: "Superlativos cultos de adjetivos de origen latino: <em>acre → acerrimo</em>, <em>celebre → celeberrimo</em>, <em>integro → integerrimo</em>, <em>misero → miserrimo</em>; más <em>benevolo → benevolentissimo</em>. Los tienes idénticos («acérrimo», «celebérrimo», «integérrimo», «paupérrimo»), con el mismo tono culto y el mismo uso casi exclusivamente escrito."
      }
    ],
    grammar: {
      title: "Intensificadores",
      table: {
        head: ["tipo", "ejemplo", "registro"],
        rows: [
          ["repetición", "magra magra", "habla"],
          ["-issimo", "bellissimo", "neutro"],
          ["prefijo", "straricco, iperattivo", "coloquial / prensa"],
          ["locución", "stanco morto", "habla"],
          ["-errimo", "celeberrimo", "escrito"],
          ["formal", "estremamente / oltremodo", "escrito"]
        ]
      },
      examples: [
        { tr: "Estoy muerto de cansancio, no puedo más." },
        { tr: "El local estaba hasta los topes." },
        { tr: "Es un caso celebérrimo en la historia del derecho." },
        { tr: "Está contentísimo con la noticia." },
        { tr: "Un té caliente caliente, por favor." },
        { tr: "Un acérrimo adversario del Gobierno." }
      ]
    },
    vocab: [
      "muerto de cansancio",
      "borracho como una cuba",
      "hasta los topes",
      "calado hasta los huesos",
      "enamorado hasta las trancas",
      "pobre como una rata",
      "bueno como el pan",
      "riquísimo, forrado",
      "hiperactivo",
      "celebérrimo",
      "acérrimo",
      "en sumo grado"
    ],
    exercises: [
      {
        q: "Relaciona la locución con su significado.",
        pairs: ["muerto de cansancio", "hasta los topes", "enamorado hasta las trancas", "muy pobre"]
      },
      { q: "«Ubriaco fradicio» significa:", opts: ["algo achispado", "borracho como una cuba", "calado hasta los huesos"] },
      { q: "Forma el superlativo culto de «celebre»: ___" },
      { q: "Forma el superlativo culto de «acre»: ___" },
      {
        q: "«Magra magra» es:",
        opts: ["un error de estilo", "un intensificador coloquial por repetición", "un plural"]
      },
      { q: "¿Qué variante encaja en un texto formal?", opts: ["straricco", "ricchissimo", "megaricco"] },
      { q: "Completa las locuciones.", tr: "Después del viaje estaba muerto de cansancio, y la sala estaba hasta los topes." },
      { q: "«Es un acérrimo adversario de esta reforma.»" },
      { tr: "Estaba calado hasta los huesos y muerto de cansancio, pero sonreía." },
      { tr: "El local estaba hasta los topes, no había ni un sitio libre." }
    ]
  },
  "lesson:c1-u01-test": {
    theme: "Test",
    title: "Test de la unidad 1",
    objectives: ["comprobar el si, la posición del adjetivo y los superlativos"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Qui si ___ case.»", opts: ["vende", "vendono", "vendere"] },
      { q: "«In ufficio si ___ troppo.» (lavorare)", opts: ["lavora", "lavorano", "lavorare"] },
      { q: "«___ si alza presto.» (impersonal, reflexivo)" },
      { q: "«Si ___ discusso a lungo.»" },
      { q: "«Un vecchio amico»:", opts: ["de edad avanzada", "de hace tiempo", "examigo"] },
      { q: "«Diverse persone»:", opts: ["personas distintas", "varias personas", "desconocidos"] },
      { q: "Superlativo de «celebre»: ___" },
      { q: "Relaciona.", pairs: ["muerto de cansancio", "hasta los topes", "acérrimo", "muy pobre"] },
      { tr: "Todas las casas se vendieron en menos de dos meses." },
      { tr: "Uno se acostumbra a todo, incluso a lo peor." }
    ]
  },
  "unit:c1-u02": {
    title: "Verbos con pronombres incorporados",
    grammarNote: "verbi pronominali · fraseología · registro hablado"
  },
  "lesson:c1-u02-l1": {
    theme: "Gramática avanzada",
    title: "Verbos con pronombres incorporados",
    objectives: [
      "reconocer los verbos con pronombres fundidos",
      "conjugarlos en tiempos compuestos",
      "usarlos en conversación real"
    ],
    theory: [
      {
        h: "El significado no se deduce de las piezas",
        p: "<em>Prendersela</em> no significa «tomárselo para sí», significa ofenderse. <em>Cavarsela</em> no tiene que ver con sacar nada. Son piezas de léxico independientes y se aprenden como vocabulario, no como construcciones."
      },
      {
        contrast: "El mecanismo lo conoces: tu «arreglárselas» es exactamente <em>cavarsela</em>, con el mismo pronombre femenino sin referente y el mismo sentido de «apañarse». También «tomárselo a mal» corre paralelo a <em>prendersela</em>. Lo que no tienes es la concordancia del participio con esa <em>la</em>: tú dices «me las he arreglado» sin tocar el participio, el italiano escribe <em>me la sono cavat<b>a</b></em>."
      },
      {
        h: "La conjugación",
        p: "Los pronombres se separan y vuelven delante del verbo: <em>cavarsela → <b>me la</b> cavo</em>, <em>te la cavi</em>, <em>se la cava</em>. En tiempos compuestos siempre <em>essere</em>, y el participio concuerda con <em>la</em>: <em>me la sono cavata</em>, <em>ce l'ho fatta</em>."
      },
      {
        h: "Los más frecuentes",
        list: [
          "<em>farcela</em> — conseguirlo: <em>Ce l'ho fatta!</em>",
          "<em>cavarsela</em> — apañárselas: <em>Me la cavo con l'italiano.</em>",
          "<em>prendersela</em> — ofenderse: <em>Non te la prendere.</em>",
          "<em>andarsene</em> — irse: <em>Me ne vado.</em>",
          "<em>fregarsene</em> — importarle un bledo: <em>Se ne frega.</em>",
          "<em>avercela con</em> — tenerla tomada con: <em>Ce l'ha con me.</em>",
          "<em>sentirsela</em> — verse con ánimo: <em>Non me la sento.</em>",
          "<em>intendersene</em> — entender del tema: <em>Se ne intende di vini.</em>"
        ]
      }
    ],
    grammar: {
      title: "Conjugar los verbi pronominali",
      table: {
        head: ["persona", "farcela", "cavarsela", "andarsene"],
        rows: [
          ["io", "ce la faccio", "me la cavo", "me ne vado"],
          ["tu", "ce la fai", "te la cavi", "te ne vai"],
          ["lui / lei", "ce la fa", "se la cava", "se ne va"],
          ["noi", "ce la facciamo", "ce la caviamo", "ce ne andiamo"],
          ["voi", "ce la fate", "ve la cavate", "ve ne andate"],
          ["loro", "ce la fanno", "se la cavano", "se ne vanno"],
          ["pasado", "ce l'ho fatta", "me la sono cavata", "me ne sono andato/a"]
        ]
      },
      examples: [
        { tr: "¡Lo conseguí, aprobé el examen!" },
        { tr: "Me apaño bastante bien con el alemán." },
        { tr: "No te lo tomes a mal, no iba por ti." },
        { tr: "Se fue sin despedirse." },
        { tr: "No me veo con ánimo de conducir esta noche." },
        { tr: "¿La tienes tomada conmigo?" }
      ]
    },
    vocab: [
      "conseguirlo, poder con ello",
      "apañárselas",
      "ofenderse",
      "irse, largarse",
      "importarle un bledo",
      "tenerla tomada con",
      "verse con ánimo",
      "entender del tema",
      "arreglárselas uno solo",
      "dejarlo, parar",
      "cortar el rollo (coloquial)",
      "pasarlo en grande"
    ],
    exercises: [
      { q: "Completa: «___ l'ho fatta!» (lo he conseguido)" },
      { q: "Completa: «___ la cavo con l'italiano.» (me apaño)" },
      { q: "Completa: «Non ___ la prendere.» (no te lo tomes a mal)" },
      {
        q: "«Se ne frega di tutto» significa:",
        opts: ["se preocupa por todo", "todo le importa un bledo", "se ocupa de todo"]
      },
      {
        q: "¿Por qué «me la sono cavata» y no «cavato»?",
        opts: ["Es un error", "El participio concuerda con la", "Porque habla una mujer"]
      },
      { q: "Relaciona.", pairs: ["verse con ánimo", "entender del tema", "dejarlo", "pasarlo en grande"] },
      { q: "Completa los pronombres.", tr: "No me veo con ánimo de conducir, voy andando." },
      { q: "«¿La tienes tomada conmigo?»" },
      { tr: "Se fue sin despedirse de nadie." },
      { tr: "Me apaño bastante bien, pero no entiendo mucho del tema." }
    ]
  },
  "lesson:c1-u02-l2": {
    theme: "Gramática avanzada",
    title: "La pasiva modal y estilística",
    objectives: [
      "usar andare + participio para expresar necesidad",
      "elegir venire para subrayar el proceso",
      "reconocer estas formas en los textos oficiales"
    ],
    theory: [
      {
        h: "Andare = debe ser",
        p: "<em>La domanda <b>va presentata</b> entro il 30.</em> No es «la solicitud se presenta», sino «la solicitud <b>debe</b> presentarse». Tu «está por presentar» y «ha de presentarse» llevan la misma obligación; una pasiva normal, no."
      },
      {
        h: "Ojo con la restricción",
        p: "La pasiva con <em>andare</em> funciona <b>solo en tiempos simples</b> (presente, imperfetto, futuro). «È andato presentato» no existe en este sentido: en tiempos compuestos hace falta <em>doveva essere presentato</em>."
      },
      {
        h: "Venire: proceso más que estado",
        p: "<em>La legge <b>viene applicata</b> dal 2020</em> subraya la acción en curso, mientras que <em>è applicata</em> puede leerse como un estado. <em>Venire</em> es muy frecuente en textos jurídicos y administrativos, donde tú tirarías de la pasiva refleja o del impersonal."
      },
      {
        h: "Una tercera variante: essere da + infinitivo",
        p: "<em>Questo capitolo <b>è da rivedere</b>.</em> Cercano a <em>va rivisto</em>, un poco más ligero y más hablado. Es tu «este capítulo está por revisar», con la misma sensación de tarea pendiente."
      }
    ],
    grammar: {
      title: "Variantes de la pasiva",
      table: {
        head: ["forma", "significado", "restricción"],
        rows: [
          ["essere + participio", "pasiva general", "todos los tiempos"],
          ["venire + participio", "proceso, repetición", "solo tiempos simples"],
          ["andare + participio", "necesidad", "solo tiempos simples"],
          ["si passivante", "registro hablado", "3.ª persona"],
          ["essere da + infinitivo", "pendiente de hacer", "registro más ligero"],
          ["andare perso / smarrito", "pérdida accidental", "excepción léxica"]
        ]
      },
      examples: [
        { tr: "La solicitud debe presentarse antes del día treinta." },
        { tr: "Estos datos deben verificarse antes de la publicación." },
        { tr: "El reglamento se actualiza todos los años." },
        { tr: "El capítulo todavía está por revisar." },
        { tr: "Se han extraviado dos documentos.", note: "andare + perso = pérdida accidental" },
        { tr: "Todas las solicitudes fueron rechazadas." }
      ]
    },
    vocab: [
      "presentar una solicitud",
      "verificar, comprobar",
      "actualizar",
      "rechazar",
      "el reglamento, la normativa",
      "publicación",
      "extraviarse",
      "traspapelar",
      "pendiente de revisión",
      "dentro del plazo",
      "obligación formal",
      "en vigor"
    ],
    exercises: [
      {
        q: "«La domanda va presentata» significa:",
        opts: ["La solicitud se está presentando", "La solicitud debe presentarse", "La solicitud ha sido presentada"]
      },
      {
        q: "¿Qué frase está mal?",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."],
        why: "La pasiva con andare no funciona en tiempos compuestos."
      },
      { q: "Completa: «Questi dati ___ verificati.» (deben verificarse)" },
      { q: "Completa: «Il regolamento ___ aggiornato ogni anno.» (venire)" },
      {
        q: "«Sono andati persi due documenti» significa:",
        opts: ["Los documentos debían perderse", "Se han extraviado dos documentos", "Los documentos se fueron"]
      },
      {
        q: "Completa las formas.",
        tr: "La solicitud debe presentarse antes del día treinta; los datos los verifica la oficina."
      },
      { q: "«Este capítulo todavía está por revisar.»" },
      { tr: "Todas las solicitudes fueron rechazadas." },
      { tr: "El impreso debe rellenarse por completo y firmarse al pie." },
      { tr: "Estos datos deben verificarse antes de la publicación." }
    ]
  },
  "lesson:c1-u02-l3": {
    theme: "Vocabulario",
    title: "La fraseología en uso",
    objectives: [
      "entender las locuciones frecuentes del habla y de la prensa",
      "usar algunas con naturalidad",
      "evitar los calcos del español"
    ],
    theory: [
      {
        h: "Una locución es una abreviatura, no un adorno",
        p: "Una locución italiana suele sustituir a una frase entera. <em>Non ci piove</em> significa «no hay duda», <em>tagliare la testa al toro</em> significa zanjarlo con una decisión. Usadas en su sitio acortan lo que dices y suenan nativas."
      },
      {
        h: "Locuciones que vas a oír de verdad",
        list: [
          "<em>in bocca al lupo</em> — suerte (respuesta: <em>crepi</em>)",
          "<em>non vedo l'ora</em> — estoy deseando",
          "<em>avere le mani in pasta</em> — estar metido en todo",
          "<em>prendere in giro</em> — tomar el pelo",
          "<em>costare un occhio della testa</em> — costar un ojo de la cara",
          "<em>essere al verde</em> — estar sin blanca",
          "<em>fare il punto</em> — hacer balance",
          "<em>mettere nero su bianco</em> — poner negro sobre blanco"
        ]
      },
      {
        trap: "<em>Avere le mani in pasta</em> es un falso amigo peligroso: parece tu «pillar con las manos en la masa», pero no acusa a nadie de nada. Significa estar metido en el asunto, tener contactos y capacidad de influir, y a menudo se dice con admiración. Traducirlo por tu expresión convierte un elogio en una acusación."
      },
      {
        h: "Falsos amigos entre español e italiano",
        p: "<em>Burro</em> es mantequilla, no un asno (<em>asino</em>). <em>Salire</em> es subir, no salir (<em>uscire</em>). <em>Aceto</em> es vinagre, no aceite (<em>olio</em>). <em>Guardare</em> es mirar, no guardar (<em>conservare</em>). <em>Gamba</em> es pierna, no una gamba (<em>gambero</em>). <em>Topo</em> es ratón, no un topo (<em>talpa</em>). Estos seis producen más malentendidos que cualquier punto de gramática de este nivel, precisamente porque suenan perfectos."
      }
    ],
    grammar: {
      title: "Locuciones y falsos amigos",
      table: {
        head: ["italiano", "significado", "nota"],
        rows: [
          ["non ci piove", "no hay duda", "locución"],
          ["non vedo l'ora", "estoy deseando", "+ di + infinitivo"],
          ["essere al verde", "estar sin blanca", "locución"],
          ["costare un occhio della testa", "costar un ojo de la cara", "misma imagen que en español"],
          ["burro", "mantequilla", "falso amigo"],
          ["salire", "subir", "falso amigo"],
          ["aceto", "vinagre", "falso amigo"],
          ["gamba", "pierna", "falso amigo"]
        ]
      },
      examples: [
        { tr: "Estoy deseando volver a verte." },
        { tr: "Aquel viaje costó un ojo de la cara." },
        { tr: "Hagamos balance de dónde estamos." },
        { tr: "Pongámoslo todo negro sobre blanco." },
        { tr: "Está metido en todos los asuntos." },
        { tr: "¿Me estás tomando el pelo?" }
      ]
    },
    vocab: [
      "no hay duda",
      "estoy deseando",
      "estar sin blanca",
      "costar un ojo de la cara",
      "tomar el pelo",
      "hacer balance",
      "negro sobre blanco",
      "estar metido en todo",
      "hablarle a la pared",
      "mantequilla (no: asno)",
      "subir (no: salir)",
      "vinagre (no: aceite)"
    ],
    exercises: [
      {
        q: "Relaciona la locución con su significado.",
        pairs: ["no hay duda", "estar sin blanca", "hacer balance", "tomar el pelo"]
      },
      { q: "«Il burro» en italiano es:", opts: ["un asno", "la mantequilla", "una marca"] },
      { q: "«La colazione» es:", opts: ["la cena", "el desayuno", "la comida"] },
      { q: "Completa: «Non vedo l'ora ___ rivederti.»" },
      {
        q: "«Costare un occhio della testa» significa:",
        opts: ["doler", "costar muchísimo", "no tener precio"]
      },
      {
        q: "¿Cuáles son falsos amigos para un hispanohablante?",
        opts: ["salire", "aceto", "tavolo", "gamba"]
      },
      { q: "Completa las locuciones.", tr: "Aquel viaje costó un ojo de la cara y ahora estoy sin blanca." },
      { q: "«Hagamos balance y pongámoslo negro sobre blanco.»" },
      { tr: "No hay duda: la decisión hay que tomarla hoy." },
      { tr: "Estoy deseando que termine este proyecto." }
    ]
  },
  "lesson:c1-u02-test": {
    theme: "Test",
    title: "Test de la unidad 2",
    objectives: ["comprobar los verbi pronominali, la pasiva modal y la fraseología"],
    theory: [{ p: "Diez tareas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«___ l'ho fatta!»" },
      { q: "«___ la cavo con l'italiano.»" },
      { q: "«Non ___ la prendere.»" },
      { q: "«Se ne frega»:", opts: ["se preocupa", "le da igual", "se ocupa"] },
      { q: "«Questi dati ___ verificati.» (deben)" },
      {
        q: "Incorrecto:",
        opts: ["Il modulo va firmato.", "Il modulo è andato firmato.", "Il modulo viene firmato."]
      },
      { q: "«Il burro»:", opts: ["un asno", "la mantequilla", "una marca"] },
      { q: "Relaciona.", pairs: ["estar sin blanca", "no hay duda", "hacer balance", "negro sobre blanco"] },
      { tr: "No me veo con ánimo de decidir ahora, lo pienso y te digo algo." },
      { tr: "Lo conseguí, pero por los pelos." }
    ]
  },
  "unit:c1-u03": {
    title: "Registros y cohesión textual",
    grammarNote: "burocratese · italiano hablado · dislocación · estilo indirecto"
  },
  "lesson:c1-u03-l1": {
    theme: "Estilo",
    title: "El lenguaje administrativo: leerlo, no escribirlo",
    objectives: [
      "descifrar las construcciones burocráticas típicas",
      "devolverlas al italiano corriente",
      "detectar cuándo se abusa del registro"
    ],
    theory: [
      {
        h: "Cómo se reconoce",
        list: [
          "nominalización: <em>si procede all'erogazione</em> en vez de <em>si eroga</em>",
          "pasiva e impersonal: <em>si comunica che…</em>",
          "referencia hacia atrás: <em>di cui sopra</em>, <em>il predetto</em>, <em>il suddetto</em>",
          "preposiciones compuestas: <em>ai sensi di</em>, <em>in ottemperanza a</em>, <em>ai fini di</em>",
          "léxico latinizante: <em>effettuare</em> por <em>fare</em>, <em>trattasi di</em> por <em>si tratta di</em>"
        ]
      },
      {
        contrast: "Reconocerás cada uno de esos rasgos: tu administración escribe igual, y con las mismas piezas latinas. «Se comunica que», «en virtud del artículo», «el arriba indicado», «el precitado», «efectuar el pago», «en cumplimiento de». La ventaja es enorme para leer; el riesgo también, porque la familiaridad invita a escribir así, y en italiano el consejo es el mismo que en español: entenderlo y no imitarlo."
      },
      {
        h: "Para qué sirve",
        p: "El registro administrativo pretende garantizar precisión e impersonalidad, a menudo a costa de la legibilidad. En C1 <b>entender</b> estos textos es una destreza necesaria; <b>escribir</b> así no es recomendable fuera de un contexto jurídico."
      },
      {
        h: "El movimiento inverso: simplificar",
        p: "<em>Si comunica che il pagamento dovrà essere effettuato entro il termine di cui sopra</em> → <em>Il pagamento va fatto entro la data indicata.</em> Vale la pena hacerlo con cada carta oficial que te llegue: acorta y aclara."
      }
    ],
    grammar: {
      title: "Burocratese y su traducción",
      table: {
        head: ["administrativo", "italiano corriente", "en español"],
        rows: [
          ["si comunica che", "vi informiamo che", "se comunica que"],
          ["ai sensi dell'art. 5", "secondo l'articolo 5", "en virtud del artículo 5"],
          ["di cui sopra", "indicato prima", "arriba indicado"],
          ["effettuare il pagamento", "pagare", "efectuar el pago"],
          ["in ottemperanza a", "seguendo", "en cumplimiento de"],
          ["il predetto documento", "quel documento", "el precitado documento"],
          ["trattasi di", "si tratta di", "se trata de"]
        ]
      },
      examples: [
        { tr: "Se comunica que la oficina permanecerá cerrada el 2 de junio." },
        { tr: "El pago deberá efectuarse en el plazo de treinta días." },
        { tr: "Conforme a la normativa vigente, la solicitud es inadmisible." },
        { tr: "Se ruega adjuntar copia del documento arriba indicado." },
        { tr: "El plazo precitado es improrrogable." },
        { tr: "Se le requiere el cese inmediato de la actividad." }
      ]
    },
    vocab: [
      "en virtud de, conforme a",
      "en cumplimiento de",
      "arriba indicado",
      "el precitado",
      "efectuar, llevar a cabo",
      "perentorio, improrrogable",
      "inadmisible",
      "la normativa vigente",
      "requerir a alguien",
      "solicitud, instancia",
      "organismo público",
      "incumplimiento"
    ],
    exercises: [
      { q: "Relaciona el término administrativo con el corriente.", pairs: ["pagare", "secondo", "indicato prima", "si tratta di"] },
      {
        q: "«Il termine è perentorio» significa:",
        opts: ["el plazo es orientativo", "el plazo es improrrogable", "el plazo se ha ampliado"]
      },
      {
        q: "«La domanda è irricevibile» significa:",
        opts: [
          "la solicitud está incompleta",
          "la solicitud no puede admitirse",
          "la solicitud está en trámite"
        ]
      },
      { q: "Simplifica: «Il pagamento dovrà essere effettuato» → «Il pagamento ___ fatto»" },
      {
        q: "Simplifica la frase administrativa.",
        tr: "Se comunica que la solicitud arriba indicada no puede admitirse."
      },
      { q: "«Se comunica que la oficina permanecerá cerrada.»" },
      {
        q: "¿Conviene escribir en burocratese en C1?",
        opts: [
          "Sí, es una marca de dominio",
          "No, hay que entenderlo pero escribir más claro",
          "Sí, en cualquier contexto profesional"
        ]
      },
      { tr: "Se ruega adjuntar copia del documento." },
      { tr: "Conforme a la normativa vigente, la solicitud es inadmisible." },
      { tr: "El pago deberá efectuarse dentro del plazo indicado." }
    ]
  },
  "lesson:c1-u03-l2": {
    theme: "Estilo",
    title: "El italiano hablado y el neoestándar",
    objectives: [
      "reconocer los rasgos del italiano hablado",
      "usar la dislocación para sonar natural",
      "distinguir el neoestándar de un error"
    ],
    theory: [
      {
        h: "Neoestándar: no es un error, es otro registro",
        list: [
          "<em>lui / lei</em> como sujeto en vez de <em>egli / ella</em>: hoy es la norma",
          "<em>gli</em> en vez de <em>loro</em> («a ellos»): también en escritura informal",
          "el <em>che</em> polivalente: <em>il giorno che sono arrivato</em>",
          "<em>ci</em> en vez de <em>vi</em> para el lugar: <em>ci vado</em>",
          "el imperfecto en la condicional: <em>se lo sapevo…</em>"
        ]
      },
      {
        h: "La dislocación: mover el énfasis",
        p: "<em><b>Il libro</b>, l'ho letto ieri.</em> (dislocación a la izquierda) y <em>L'ho letto ieri, <b>il libro</b>.</em> (a la derecha). El elemento adelantado es el tema y el pronombre lo «sostiene»."
      },
      {
        contrast: "Aquí estás en casa: «el libro, lo leí ayer» es la misma construcción con el mismo pronombre de recogida, y en español tampoco suena enfática, sino normal. La consecuencia práctica es que puedes fiarte de tu oído para colocarla, mientras que a un angloparlante le sale marcada y solemne."
      },
      {
        h: "El c'è presentativo",
        p: "<em>C'è Marco che ti cerca.</em> La construcción introduce un elemento nuevo en la conversación. Tu «está Marco que te busca» hace lo mismo y con la misma naturalidad."
      },
      {
        trap: "El neoestándar se acepta al hablar y en escritura informal. En un texto de examen, un correo formal o una publicación rige el estándar: <em>se avessi saputo</em>, no «se sapevo»."
      }
    ],
    grammar: {
      title: "Rasgos del habla",
      table: {
        head: ["rasgo", "ejemplo", "registro"],
        rows: [
          ["dislocación a la izquierda", "Il libro, l'ho letto.", "habla, aceptado"],
          ["dislocación a la derecha", "L'ho letto, il libro.", "habla"],
          ["c'è presentativo", "C'è Marco che ti cerca.", "habla"],
          ["gli por loro", "Gli ho detto tutto.", "neoestándar"],
          ["che polivalente", "Il giorno che sono partito", "habla"],
          ["imperfecto hipotético", "Se lo sapevo, non venivo.", "solo habla"]
        ]
      },
      examples: [
        { tr: "A Roma no he ido nunca.", note: "dislocación + ci" },
        { tr: "El café me lo tomo luego." },
        { tr: "Está tu hermana esperándote fuera." },
        { tr: "Les dije que no se preocuparan." },
        { tr: "Esa historia no me acuerdo de ella para nada." },
        { tr: "De dinero mejor ni hablamos." }
      ]
    },
    vocab: [
      "dislocación, tematización",
      "el nuevo estándar hablado",
      "registro informal",
      "oralidad",
      "espontaneidad",
      "tema / rema",
      "enfatizar",
      "recoger con un pronombre",
      "sonar natural",
      "sonar acartonado",
      "aceptable",
      "no recomendable por escrito"
    ],
    exercises: [
      {
        q: "«Il libro, l'ho letto ieri» es:",
        opts: ["un error de sintaxis", "una dislocación a la izquierda, rasgo del italiano vivo", "una construcción administrativa"]
      },
      {
        q: "¿Qué construcción no es recomendable por escrito formal?",
        opts: ["Gli ho detto tutto.", "Se lo sapevo, non venivo.", "A Roma ci vado spesso."]
      },
      { q: "Completa la dislocación: «Il caffè, ___ prendo dopo.»" },
      { q: "Completa: «Di soldi, non ___ parliamo nemmeno.»" },
      {
        q: "«C'è Marco che ti cerca» sirve para:",
        opts: ["describir un lugar", "introducir información nueva en la conversación", "expresar duda"]
      },
      { q: "Reescríbelo con dislocación.", tr: "Esa historia no me acuerdo de ella." },
      { q: "«A Roma no he ido nunca.»" },
      {
        q: "¿Qué rasgos pertenecen al neoestándar?",
        opts: ["lui como sujeto", "gli por loro", "egli como sujeto", "el che polivalente"]
      },
      { tr: "Esa historia no me acuerdo de ella para nada." },
      { tr: "El café me lo tomo luego, ahora no me apetece." }
    ]
  },
  "lesson:c1-u03-l3": {
    theme: "Estilo",
    title: "La cohesión del texto escrito",
    objectives: [
      "construir un texto argumentativo coherente",
      "usar los recursos de referencia hacia atrás",
      "evitar la repetición con sinónimos e hiperónimos"
    ],
    theory: [
      {
        h: "Dos nociones distintas",
        p: "La <b>coesione</b> es la costura de superficie: pronombres, conectores, repetición léxica. La <b>coerenza</b> es la continuidad lógica del contenido. Un texto puede ser formalmente cohesionado y lógicamente incoherente, y al revés. Tu par cohesión / coherencia dice exactamente lo mismo."
      },
      {
        h: "Recursos de referencia hacia atrás",
        list: [
          "pronombres: <em>lo, ne, ci, questo, ciò</em>",
          "sinónimos e hiperónimos: <em>il provvedimento → la misura → l'intervento</em>",
          "nominalizar la frase anterior: <em>…hanno approvato la legge. <b>L'approvazione</b> ha suscitato…</em>",
          "expresiones de recogida: <em>quanto detto, il fenomeno in questione, tale scelta</em>"
        ]
      },
      {
        h: "La progresión temática",
        p: "En un párrafo bien construido cada frase recoge un elemento de la anterior (el tema) y añade información nueva (el rema). Introducir un tema completamente nuevo sin avisar rompe la cohesión aunque los conectores estén todos en su sitio."
      },
      {
        tip: "El estilo escrito italiano no teme las frases largas, pero valora una <b>jerarquía clara</b> de subordinadas. Tres subordinadas encajadas una dentro de otra son señal de que el párrafo hay que reescribirlo."
      }
    ],
    grammar: {
      title: "Recursos de cohesión",
      table: {
        head: ["recurso", "ejemplo", "función"],
        rows: [
          ["pronombre", "…la riforma. La si è discussa a lungo.", "referencia hacia atrás"],
          ["sinónimo", "il provvedimento / la misura", "evitar la repetición"],
          ["nominalización", "hanno deciso → tale decisione", "compresión"],
          ["recogida", "il fenomeno in questione", "precisión"],
          ["conector", "di conseguenza, per contro", "relación lógica"],
          ["señalización", "come vedremo, in primo luogo", "orientar al lector"]
        ]
      },
      examples: [
        { tr: "Se aprobó la reforma. Tal decisión suscitó reacciones encontradas." },
        { tr: "El fenómeno en cuestión afecta sobre todo a las grandes ciudades." },
        { tr: "Como veremos, el problema no es solo económico." },
        { tr: "Por el contrario, los datos regionales cuentan otra cosa." },
        { tr: "Lo dicho hasta aquí vale para el sector privado." },
        { tr: "Por consiguiente, la medida debería revisarse." }
      ]
    },
    vocab: [
      "cohesión",
      "coherencia",
      "resolución, disposición",
      "medida, actuación",
      "en cuestión",
      "tal, dicho",
      "lo dicho",
      "por el contrario",
      "por consiguiente",
      "suscitar, provocar",
      "encontrado, contrapuesto",
      "afectar a, valer para"
    ],
    exercises: [
      {
        q: "¿En qué se diferencian coesione y coerenza?",
        opts: [
          "En nada",
          "La coesione es la costura de superficie, la coerenza la continuidad lógica",
          "La coesione es del habla, la coerenza de la escritura"
        ]
      },
      { q: "Completa la recogida: «Hanno approvato la legge. ___ decisione ha sorpreso tutti.»" },
      { q: "Completa: «Il fenomeno in ___ riguarda le grandi città.»" },
      { q: "Relaciona.", pairs: ["por el contrario", "por consiguiente", "suscitar", "lo dicho"] },
      {
        q: "¿Qué recurso elimina mejor un sustantivo repetido?",
        opts: ["retomarlo con un sinónimo o un hiperónimo", "añadirle un adjetivo", "cambiar el orden de palabras"]
      },
      {
        q: "Haz cohesionado el párrafo.",
        tr: "Se aprobó la reforma. Tal decisión suscitó reacciones encontradas. Por consiguiente la medida debería revisarse."
      },
      { q: "«Como veremos, el problema no es solo económico.»" },
      {
        q: "Tres subordinadas encajadas son señal de que:",
        opts: ["el texto es sofisticado", "el párrafo hay que reescribirlo", "el estilo es administrativo"]
      },
      { tr: "Lo dicho hasta aquí vale sobre todo para el sector privado." },
      { tr: "Por consiguiente creo que la medida debería revisarse." }
    ]
  },
  "lesson:c1-u03-test": {
    theme: "Examen",
    title: "Test — repaso de las unidades 1-3",
    objectives: ["comprobar el si, los verbi pronominali, los registros y la cohesión"],
    theory: [{ p: "Doce tareas de las primeras tres unidades. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Qui si ___ appartamenti.»", opts: ["affitta", "affittano", "affittare"] },
      { q: "«___ si abitua a tutto.»" },
      { q: "«Un'informazione certa»:", opts: ["cierta", "segura", "confidencial"] },
      { q: "«___ l'ho fatta!»" },
      { q: "«Non ___ la sento di decidere.»" },
      { q: "«La domanda ___ presentata entro il 30.» (debe)" },
      { q: "«Il termine è perentorio»:", opts: ["orientativo", "improrrogable", "ampliado"] },
      {
        q: "«Se lo sapevo, non venivo» es:",
        opts: ["el estándar escrito", "el neoestándar hablado", "siempre incorrecto"]
      },
      { q: "«Il fenomeno in ___ riguarda le città.»" },
      { q: "Superlativo culto de «acre»: ___" },
      { q: "«Estos datos deben verificarse antes de la publicación.»" },
      { tr: "Uno se acostumbra a todo, pero nunca acaba de resignarse." }
    ]
  }
});
