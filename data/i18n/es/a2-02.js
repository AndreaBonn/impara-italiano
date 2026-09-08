/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/a2-02.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a2-u05": { title: "Pisos y barrios", grammarNote: "el ci locativo · anuncios · describir un lugar" },
  "lesson:a2-u05-l1": {
    theme: "Vivienda",
    title: "Anuncios y búsqueda de piso",
    objectives: [
      "leer un anuncio de alquiler italiano",
      "preguntar por el alquiler, los gastos y la fianza",
      "describir lo que buscas"
    ],
    theory: [
      {
        h: "Los anuncios se escriben en clave",
        p: "<em>Bilocale</em> es un piso con una habitación más el salón, no «dos dormitorios». Lo que cuenta es el <b>número de estancias de estar, salón incluido</b>: <em>monolocale</em> (estudio), <em>bilocale</em>, <em>trilocale</em>. La cocina y el baño no cuentan, al revés que el anuncio español, que dice cuántos dormitorios hay."
      },
      {
        h: "Tres cifras por las que hay que preguntar",
        list: [
          "<b>l'affitto</b> — el alquiler propiamente dicho",
          "<b>le spese condominiali</b> — los gastos de comunidad (a menudo de 50 a 150 euros al mes, no siempre incluidos)",
          "<b>la cauzione</b> — la fianza, normalmente dos o tres mensualidades"
        ]
      },
      {
        h: "Tipos de contrato",
        p: "El <strong>4+4</strong> es un contrato de cuatro años con prórroga automática; el <strong>3+2</strong> es de renta regulada (<em>canone concordato</em>), a menudo mejor fiscalmente. El <em>contratto transitorio</em> es de corta duración, para estudiantes y trabajadores temporales."
      },
      {
        tip: "Abreviaturas de los anuncios: <em>mq</em> (metros cuadrados), <em>p. terra</em> (planta baja), <em>ammobiliato/arredato</em> (amueblado), <em>spese escluse</em> (gastos aparte), <em>rif.</em> (referencia). La numeración de plantas coincide con la tuya: <em>piano terra</em> es la planta baja y <em>primo piano</em> el primero, así que aquí no hay trampa."
      }
    ],
    grammar: {
      title: "Vocabulario de los anuncios",
      table: {
        head: ["abreviatura / palabra", "significado", "nota"],
        rows: [
          ["monolocale", "estudio", "una sola estancia"],
          ["bilocale", "salón + un dormitorio", "no son dos dormitorios"],
          ["arredato", "amueblado", "lo contrario: vuoto"],
          ["spese escluse", "gastos aparte", "hay que sumar la comunidad"],
          ["cauzione", "fianza", "normalmente 2 o 3 mensualidades"],
          ["luminoso", "luminoso", "el adjetivo favorito de los anuncios"]
        ]
      },
      examples: [
        { tr: "Busco un piso de un dormitorio amueblado en la zona universitaria." },
        { tr: "¿Cuánto es el alquiler mensual con gastos?" },
        { tr: "¿Cuánto son los gastos de comunidad?" },
        { tr: "La fianza son tres mensualidades." },
        { tr: "¿Es un contrato 4+4 o temporal?" },
        { tr: "¿Se admiten animales?" }
      ]
    },
    vocab: [
      "alquiler",
      "alquilar",
      "casero, propietario",
      "inquilino",
      "gastos de comunidad",
      "fianza",
      "contrato de alquiler",
      "amueblado / sin amueblar",
      "luminoso",
      "planta baja",
      "calefacción",
      "inmobiliaria"
    ],
    exercises: [
      {
        q: "Un «bilocale» es un piso:",
        opts: ["con dos dormitorios", "con salón y un dormitorio", "de dos plantas"]
      },
      { q: "«Spese escluse» significa:", opts: ["gastos incluidos", "gastos aparte", "sin fianza"] },
      { q: "Completa: «La ___ è di tre mensilità.» (la fianza)" },
      { q: "Relaciona.", pairs: ["inquilino", "casero", "amueblado", "planta baja"] },
      { q: "«¿Cuánto son los gastos de comunidad?»" },
      {
        q: "Completa las preguntas al propietario.",
        tr: "¿Cuánto es el alquiler mensual? ¿Los gastos están incluidos? ¿Y la fianza?"
      },
      { tr: "Busco un piso de un dormitorio amueblado en el centro." },
      {
        q: "Un contrato «4+4» es:",
        opts: ["de cuatro meses", "de cuatro años con prórroga automática", "para cuatro inquilinos"]
      },
      { tr: "Piso de un dormitorio luminoso, amueblado, segunda planta, gastos aparte." },
      { tr: "Querría saber cuánto son los gastos de comunidad." }
    ]
  },
  "lesson:a2-u05-l2": {
    theme: "Vivienda",
    title: "La partícula ci",
    objectives: [
      "sustituir una expresión de lugar por ci",
      "reconocer ci en las expresiones fijas",
      "distinguir el ci de lugar del ci que significa «nos»"
    ],
    theory: [
      {
        h: "Ci sustituye a un lugar",
        p: "<em>Vai a Roma? — Sì, <b>ci</b> vado domani.</em> Aquí <em>ci</em> significa «allí» y ocupa el lugar de toda la expresión de lugar."
      },
      {
        contrast: "El español perdió este pronombre. Tú dices «voy allí» con un adverbio, o directamente «voy mañana» sin nada. El italiano tiene una partícula átona que va delante del verbo y la usa muchísimo: omitirla suena pesado. Es de los pocos puntos de este nivel donde no hay nada que transferir, solo que construir."
      },
      {
        h: "Ci también sustituye a «a + cosa»",
        p: "<em>Pensi all'esame? — <b>Ci</b> penso sempre.</em> («pienso en ello constantemente»). Ojo: con personas es distinto, <em>penso <b>a lei</b></em>, no «ci penso»."
      },
      {
        h: "Ci en verbos fusionados",
        list: [
          "<em>volerci</em> — hacer falta, tardarse: <em>Ci vogliono due ore.</em> («se tardan dos horas»)",
          "<em>metterci</em> — tardar uno: <em>Ci metto un'ora.</em>",
          "<em>farcela</em> — poder con algo: <em>Non ce la faccio più.</em>",
          "<em>entrarci</em> — tener que ver: <em>Che c'entra?</em> («¿qué tiene que ver?»)"
        ]
      },
      {
        trap: "La misma forma <em>ci</em> significa también «nos»: <em>ci vedono</em> (nos ven), <em>ci hanno detto</em> (nos han dicho). Lo deciden el contexto y el verbo."
      }
    ],
    grammar: {
      title: "Los valores de ci",
      table: {
        head: ["función", "ejemplo", "en español"],
        rows: [
          ["lugar", "Ci vado domani.", "Voy allí mañana."],
          ["a + cosa", "Ci penso io.", "Ya me encargo yo."],
          ["volerci", "Ci vogliono due ore.", "Se tardan dos horas."],
          ["metterci", "Ci metto mezz'ora.", "Tardo media hora."],
          ["farcela", "Ce la faccio!", "¡Puedo con esto!"],
          ["nos", "Ci hanno invitati.", "Nos han invitado."]
        ]
      },
      examples: [
        { tr: "¿Has estado alguna vez en Sicilia? — Sí, he estado dos veces." },
        { tr: "¿Cuánto se tarda de aquí a la estación?" },
        { tr: "Tardo veinte minutos a pie." },
        { tr: "No puedo más, estoy agotado." },
        { tr: "¿Qué tiene eso que ver con el contrato?" },
        { tr: "Voy al mercado todos los sábados." }
      ]
    },
    vocab: [
      "voy allí",
      "se tarda, hace falta",
      "tardo",
      "poder con algo",
      "¿qué tiene que ver?",
      "la mudanza",
      "vecino",
      "la comunidad de propietarios",
      "portal",
      "portero automático",
      "factura, recibo",
      "fontanero"
    ],
    exercises: [
      { q: "«Vai a Roma? — Sì, ___ vado domani.»", opts: ["la", "ci", "ne"] },
      { q: "Completa: «Quanto ___ vuole da qui alla stazione?»" },
      { q: "Completa: «___ metto venti minuti.»" },
      {
        q: "«Ci vogliono due ore» significa:",
        opts: ["Queremos dos horas", "Se tardan dos horas", "Tenemos dos horas"]
      },
      {
        q: "«Non ce la faccio più» significa:",
        opts: ["Ya no lo hago", "No puedo más", "Ya no queda"]
      },
      {
        q: "¿En qué frases «ci» significa un lugar?",
        opts: ["Ci vado domani.", "Ci hanno invitati.", "In palestra ci vado poco.", "Ci penso io."]
      },
      { q: "Completa.", tr: "— ¿Cuánto se tarda en el trayecto? — Tardo media hora en metro." },
      { q: "«Voy al mercado todos los sábados.»" },
      { tr: "Se tardan al menos dos horas en terminar la mudanza." },
      { tr: "Voy andando al centro, tardo veinte minutos." }
    ]
  },
  "lesson:a2-u05-l3": {
    theme: "Vivienda",
    title: "Describir el interior",
    objectives: [
      "nombrar las estancias y los muebles",
      "describir la distribución de un piso",
      "usar las preposiciones de posición"
    ],
    theory: [
      {
        h: "Un piso italiano sigue otra lógica",
        p: "<em>Il soggiorno</em> (el salón) suele hacer también de comedor; la cocina tiende a ser un espacio pequeño aparte (una <em>cucina abitabile</em> es aquella en la que se puede comer). <em>Il ripostiglio</em> es el trastero interior, más cerca de tu cuarto de la plancha que de un vestidor."
      },
      {
        h: "Balcone, terrazzo, loggia",
        p: "<em>Il balcone</em> sobresale del edificio, <em>la loggia</em> queda metida dentro, <em>il terrazzo</em> es grande y suele estar en la azotea. En los anuncios la diferencia se nota en el precio."
      },
      {
        h: "Preposiciones para la distribución",
        p: "<em>a destra / a sinistra di</em>, <em>di fronte a</em>, <em>accanto a</em>, <em>in fondo a</em>, <em>sopra / sotto</em>, <em>tra</em>. Todas piden <em>a</em> o <em>di</em>, así que vuelven las preposiciones articuladas: <em>accanto <b>alla</b> finestra</em>."
      },
      {
        tip: "Las plantas se cuentan desde el <em>piano terra</em> hacia arriba, exactamente como en España: <em>primo piano</em> es tu primera planta, la que está encima de la baja. Aquí no tienes que recalcular nada."
      }
    ],
    grammar: {
      title: "Estancias y muebles",
      table: {
        head: ["estancia", "muebles típicos", "frase de ejemplo"],
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
        { tr: "El piso está en la tercera planta y no hay ascensor." },
        { tr: "La cocina es pequeña, pero se puede comer en ella." },
        { tr: "El balcón da al patio interior." },
        { tr: "Hay un trastero junto a la entrada." },
        { tr: "Las ventanas dan al sur, así que es muy luminoso." },
        { tr: "La calefacción es individual." }
      ]
    },
    vocab: [
      "salón",
      "dormitorio",
      "baño",
      "pasillo",
      "trastero",
      "sofá",
      "armario",
      "escritorio",
      "frigorífico",
      "lavadora",
      "dar a (una ventana)",
      "calefacción individual"
    ],
    exercises: [
      {
        q: "Relaciona la estancia con el mueble.",
        pairs: ["l'armadio", "il divano", "il frigorifero", "la scrivania"]
      },
      { q: "Completa: «L'armadio è accanto ___ letto.»" },
      { q: "Completa: «Il balcone ___ sul cortile.» (da a)" },
      {
        q: "Una «cucina abitabile» es una cocina:",
        opts: ["con ventana", "lo bastante grande para comer en ella", "que viene amueblada"]
      },
      { q: "Describe el piso.", tr: "El sofá está enfrente de la ventana y la estantería está al lado del sofá." },
      { q: "«El piso está en la tercera planta y no hay ascensor.»" },
      { tr: "Las ventanas dan al sur, así que es muy luminoso." },
      { q: "Artículos:", items: [, , , ] },
      { tr: "El dormitorio da al patio, así que es tranquilo." },
      { tr: "El salón es luminoso y en la cocina se puede comer." }
    ]
  },
  "lesson:a2-u05-l4": {
    theme: "Vivienda",
    title: "Problemas y cómo comunicarlos",
    objectives: [
      "avisar de una avería al propietario o al administrador",
      "describir qué se ha roto",
      "concertar una reparación"
    ],
    theory: [
      {
        h: "Tres verbos cubren casi todas las averías",
        list: [
          "<b>non funziona</b> — no funciona (un electrodoméstico)",
          "<b>perde</b> — gotea, pierde agua (un grifo, una tubería)",
          "<b>si è rotto/a</b> — se ha roto"
        ]
      },
      {
        h: "Quién paga qué",
        p: "En un contrato de alquiler italiano, las <b>reparaciones menores</b> (<em>manutenzione ordinaria</em>) corren a cargo del inquilino, y las <b>grandes</b> (<em>straordinaria</em>: la caldera, la instalación eléctrica, el tejado) a cargo del propietario. Vale la pena escribirlo en el mensaje: <em>Credo che sia manutenzione straordinaria.</em>"
      },
      {
        h: "El tono del aviso",
        p: "Un aviso de avería italiano suele ser cortés e indirecto: <em>Le scrivo perché…</em>, <em>Volevo segnalarle che…</em>. Un <em>ripari subito!</em> seco juega en tu contra: no es una cultura donde la firmeza acelere las cosas."
      },
      {
        tip: "<em>Il condominio</em> es a la vez el edificio y la comunidad de propietarios como entidad jurídica. <em>L'amministratore di condominio</em> es el administrador al que se avisa de los problemas de las zonas comunes."
      }
    ],
    grammar: {
      title: "Avisar de una avería",
      table: {
        head: ["problema", "en italiano", "en español"],
        rows: [
          ["un electrodoméstico", "La lavatrice non funziona.", "La lavadora no funciona."],
          ["agua", "Il rubinetto perde.", "El grifo gotea."],
          ["roto", "Si è rotta la serratura.", "Se ha roto la cerradura."],
          ["calefacción", "Il riscaldamento non si accende.", "La calefacción no se enciende."],
          ["luz", "È saltata la corrente.", "Se ha ido la luz."],
          ["avisar", "Volevo segnalarle un problema.", "Quería avisarle de un problema."]
        ]
      },
      examples: [
        { tr: "Hola, le escribo porque la caldera no funciona desde ayer." },
        { tr: "El grifo del baño gotea." },
        { tr: "¿Podría mandar a un fontanero?" },
        { tr: "¿Cuándo puede venir el técnico?" },
        { tr: "Estoy en casa a partir de las seis." },
        { tr: "Gracias por la rapidez." }
      ]
    },
    vocab: [
      "grifo",
      "gotear, perder agua",
      "romperse",
      "cerradura",
      "caldera",
      "electricidad",
      "irse (la luz)",
      "fontanero",
      "electricista",
      "técnico",
      "avisar, comunicar",
      "mantenimiento, reparación"
    ],
    exercises: [
      {
        q: "El grifo gotea. ¿Cómo se dice?",
        opts: ["Il rubinetto non funziona.", "Il rubinetto perde.", "Il rubinetto si è acceso."]
      },
      { q: "Completa: «È ___ la corrente.» (se ha ido la luz)" },
      { q: "Completa: «Si è ___ la serratura.» (se ha roto la cerradura)" },
      {
        q: "Relaciona el oficio con el problema.",
        pairs: ["un grifo que gotea", "sin luz", "una caldera rota", "las zonas comunes"]
      },
      { q: "«¿Podría mandar a un fontanero?»" },
      {
        q: "Escribe el aviso.",
        tr: "Hola, quería avisarle de que la caldera no funciona desde ayer. ¿Podría mandar a un técnico?"
      },
      {
        q: "¿Quién paga normalmente el cambio de una caldera en un alquiler?",
        opts: ["El inquilino", "El propietario (manutenzione straordinaria)", "La comunidad"]
      },
      { tr: "Estoy en casa a partir de las seis." },
      { tr: "La calefacción no se enciende y hace mucho frío aquí dentro." },
      { tr: "Quería avisar de que el grifo del baño gotea." }
    ]
  },
  "lesson:a2-u05-test": {
    theme: "Test",
    title: "Test de la unidad 5",
    objectives: ["comprobar el vocabulario de la vivienda y la partícula ci"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Bilocale»:", opts: ["dos dormitorios", "salón + dormitorio", "dos plantas"] },
      { q: "«La ___ è di tre mensilità.»" },
      { q: "«Quanto ___ vuole per arrivare?»" },
      { q: "«___ metto mezz'ora.»" },
      { q: "«Non ce la faccio più»:", opts: ["Ya no lo hago", "No puedo más", "Ya no queda"] },
      { q: "«L'armadio è accanto ___ letto.»" },
      { q: "«Il rubinetto ___.» (gotea)" },
      { q: "Relaciona.", pairs: ["inquilino", "trastero", "lavadora", "irse (la luz)"] },
      { tr: "Busco un piso de un dormitorio amueblado, gastos incluidos, cerca del centro." },
      { tr: "Está a veinte minutos andando de la estación." }
    ]
  },
  "unit:a2-u06": { title: "En el trabajo", grammarNote: "el condicional de cortesía · el si impersonal · correos" },
  "lesson:a2-u06-l1": {
    theme: "Trabajo",
    title: "El teléfono y las peticiones corteses",
    objectives: [
      "salir adelante en una llamada",
      "usar el condicional para pedir algo con cortesía",
      "dejar y tomar un recado"
    ],
    theory: [
      {
        h: "Una llamada empieza con Pronto",
        p: "<strong>Pronto?</strong> es lo que dice quien descuelga, a cualquier hora y sea cual sea la relación. Literalmente significa «listo», herencia de las telefonistas. No es un saludo ni un nombre, así que responder con el propio nombre suena raro. Tu «¿dígame?» ocupa el mismo hueco."
      },
      {
        h: "El condicional convierte la petición en una oferta",
        p: "<em>Può richiamarmi?</em> es correcto pero directo. <em><b>Potrebbe</b> richiamarmi?</em> deja al otro margen para decir que no, y por eso suena más cortés: es tu «¿podría?» frente a «¿puede?». La misma lógica que <em>vorrei</em> en vez de <em>voglio</em>."
      },
      {
        h: "La forma de una llamada de trabajo",
        list: [
          "<em>Pronto, sono Anna Smith della ditta X.</em>",
          "<em>Vorrei parlare con il signor Rossi.</em>",
          "<em>Mi passa l'ufficio acquisti, per favore?</em>",
          "<em>In questo momento è in riunione. Vuole lasciare un messaggio?</em>"
        ]
      },
      {
        tip: "<em>Le dispiacerebbe…?</em> («¿le importaría…?») es el escalón máximo de cortesía en una petición. Resérvalo para algo que de verdad moleste."
      }
    ],
    grammar: {
      title: "Peticiones corteses",
      table: {
        head: ["nivel", "forma", "en español"],
        rows: [
          ["neutro", "Può richiamarmi?", "¿Puede llamarme?"],
          ["cortés", "Potrebbe richiamarmi?", "¿Podría llamarme?"],
          ["muy cortés", "Le dispiacerebbe richiamarmi?", "¿Le importaría llamarme?"],
          ["sobre uno mismo", "Vorrei parlare con…", "Querría hablar con…"],
          ["una propuesta", "Sarebbe possibile…?", "¿Sería posible…?"],
          ["aceptar", "Certo, volentieri.", "Claro, con mucho gusto."]
        ]
      },
      examples: [
        { tr: "¿Dígame? Soy Anna, llamo por la reunión." },
        { tr: "¿Podría pasarme con el señor Rossi?" },
        { tr: "Lo siento, ahora mismo está ocupado." },
        { tr: "¿Podría decirle que he llamado?" },
        { tr: "Le dejo mi número." },
        { tr: "Vuelvo a llamar más tarde, gracias." }
      ]
    },
    vocab: [
      "¿dígame? (al teléfono)",
      "¿de parte de quién?",
      "¿podría pasarme con…?",
      "está en una reunión",
      "dejar un recado",
      "volver a llamar",
      "una cita",
      "aplazar",
      "anular",
      "está comunicando",
      "casi no le oigo",
      "¿podría…?"
    ],
    exercises: [
      {  },
      {
        q: "¿Qué petición es la más cortés?",
        opts: ["Mi richiami!", "Può richiamarmi?", "Le dispiacerebbe richiamarmi?"]
      },
      { q: "Completa: «___ dirgli che ho chiamato?» (podría)" },
      { q: "Completa: «___ il signor Rossi, per favore?» (me pasa con)" },
      { q: "Relaciona.", pairs: ["está en una reunión", "aplazar", "anular", "volver a llamar"] },
      { q: "«Querría aplazar la reunión.»" },
      {
        q: "Estás llamando a una empresa.",
        setting: "Lunes, diez de la mañana, la recepción.",
        lines: [
          { tr: "Estudio Bianchi, buenos días." },
          {
            tr: "Preséntate y pide que te pasen con el señor Rossi.",
            answerTr: "Buenos días, soy Anna Smith. ¿Podría pasarme con el señor Rossi?"
          },
          { tr: "Lo siento, ahora mismo está en una reunión." },
          { tr: "Pide con cortesía que te devuelva la llamada.", answerTr: "¿Podría decirle que me llame?" },
          { tr: "Por supuesto. ¿Me deja un número?" }
        ]
      },
      {
        q: "Completa la petición.",
        tr: "Buenos días, querría hablar con la señora Bianchi. Si está ocupada, ¿podría llamarme esta tarde?"
      },
      { tr: "Ahora está ocupado, ¿quiere dejar un recado?" },
      { tr: "¿Dígame? Soy Anna. ¿Podría pasarme con el señor Rossi?" }
    ]
  },
  "lesson:a2-u06-l2": {
    theme: "Trabajo",
    title: "Correspondencia profesional",
    objectives: [
      "escribir un correo profesional breve",
      "conocer las fórmulas de apertura y de cierre",
      "ajustar el registro al destinatario"
    ],
    theory: [
      {
        h: "La apertura depende de la distancia",
        list: [
          "<em>Gentile Dott.ssa Bianchi,</em> — formal, a alguien de quien sabes el nombre",
          "<em>Spettabile Azienda,</em> — a una empresa como institución",
          "<em>Buongiorno Marco,</em> — semiformal, a un compañero",
          "<em>Ciao Marco,</em> — informal"
        ]
      },
      {
        h: "El cierre",
        p: "<em>Cordiali saluti</em> es el estándar seguro, tu «un cordial saludo». <em>Distinti saluti</em> es más frío y oficial. <em>A presto</em> o <em>Grazie e buona giornata</em> valen entre compañeros. Se firma con nombre y apellido, y el cargo debajo."
      },
      {
        h: "El cuerpo de un correo italiano es corto",
        p: "La correspondencia profesional italiana no gasta preámbulos. La estructura: motivo del correo (<em>Le scrivo in merito a…</em>), el contenido, la petición (<em>Resto in attesa di un suo riscontro</em>) y el cierre. Ojo con <em>Dott.</em>: se usa con cualquier titulado universitario, no solo con los médicos, igual que tu «licenciado» en algunos contextos, pero mucho más extendido."
      },
      {
        tip: "<em>In allegato</em> = «adjunto». <em>Le invio in allegato il documento richiesto</em> es la frase más frecuente del correo profesional italiano."
      }
    ],
    grammar: {
      title: "El esqueleto de un correo",
      table: {
        head: ["parte", "fórmula", "en español"],
        rows: [
          ["apertura", "Gentile Dott.ssa Rossi,", "Estimada Dra. Rossi:"],
          ["motivo", "Le scrivo in merito a…", "Le escribo en relación con…"],
          ["adjunto", "Le invio in allegato…", "Le envío adjunto…"],
          ["petición", "Resto in attesa di un suo riscontro.", "Quedo a la espera de su respuesta."],
          ["cierre", "Cordiali saluti,", "Un cordial saludo,"],
          ["informal", "Grazie e a presto,", "Gracias y hasta pronto,"]
        ]
      },
      examples: [
        { tr: "Estimada Dra. Rossi: le escribo en relación con la propuesta de ayer." },
        { tr: "Le envío adjunto el presupuesto actualizado." },
        { tr: "Le agradecería la confirmación antes del viernes." },
        { tr: "Quedo a su disposición para cualquier duda." },
        { tr: "Hola Marco, te adjunto el archivo del que hablamos." },
        { tr: "Gracias de antemano." }
      ]
    },
    vocab: [
      "Estimado/a (en un correo)",
      "en relación con",
      "adjunto",
      "presupuesto",
      "confirmar",
      "una respuesta",
      "quedar a disposición",
      "un cordial saludo",
      "gracias de antemano",
      "plazo",
      "antes de (una fecha)",
      "aclaración"
    ],
    exercises: [
      {
        q: "¿Qué apertura es la más formal?",
        opts: ["Ciao Marco,", "Buongiorno Marco,", "Gentile Dott. Rossi,"]
      },
      { q: "Completa: «Le scrivo ___ merito all'offerta.»" },
      { q: "Completa: «Le invio ___ allegato il preventivo.»" },
      { q: "Relaciona.", pairs: ["presupuesto", "respuesta", "plazo", "aclaración"] },
      {
        q: "«Resto a disposizione» significa:",
        opts: ["Me quedo en la empresa", "Quedo a su disposición", "Espero aquí"]
      },
      { q: "«Le envío adjunto el presupuesto actualizado.»" },
      {
        q: "Completa el correo.",
        tr: "Estimada Dra. Rossi: le escribo en relación con la reunión del jueves. Quedo a la espera de su respuesta. Un cordial saludo."
      },
      { tr: "Le agradecería la confirmación antes del viernes." },
      { tr: "Le envío adjunto el documento solicitado; quedo a su disposición." },
      { tr: "Estimada Dra. Rossi: le escribo en relación con nuestra reunión." }
    ]
  },
  "lesson:a2-u06-l3": {
    theme: "Trabajo",
    title: "El si impersonal",
    objectives: [
      "usar si para afirmaciones generales",
      "distinguir el si impersonal del si pasivo",
      "describir cómo se hacen las cosas en un sitio"
    ],
    theory: [
      {
        h: "Igual que tu «se»",
        p: "<em>In Italia <b>si</b> mangia bene.</em> La construcción <em>si</em> + tercera persona del singular habla de la gente en general sin nombrar a nadie. Es exactamente tu «en Italia se come bien»: mismo pronombre, misma posición, mismo valor."
      },
      {
        h: "Si passivante: el verbo concuerda con la cosa",
        p: "Cuando detrás del verbo hay un sustantivo, la forma se ajusta a su número: <em>Qui <b>si vende</b> il pane</em> (una cosa) frente a <em>Qui <b>si vendono</b> i panini</em> (varias). También aquí el español hace lo mismo: «se vende pan» / «se venden bocadillos». No hay nada que aprender, solo que confiar."
      },
      {
        contrast: "Dos detalles donde el italiano se separa. El adjetivo detrás de <em>si</em> va en <b>masculino plural</b>: <em>Quando si è <b>stanchi</b>…</em>, mientras tú dices «cuando uno está cansado», en singular. Y en los tiempos compuestos el impersonal exige siempre <em>essere</em>: <em>si è mangiato bene</em>, donde tú usas «haber»."
      },
      {
        tip: "Con un verbo reflexivo, <em>si + si</em> se convierte en <em>ci si</em>: <em>ci si alza presto</em>."
      }
    ],
    grammar: {
      title: "Si impersonal y si pasivo",
      table: {
        head: ["tipo", "ejemplo", "nota"],
        rows: [
          ["impersonal", "In Italia si mangia bene.", "sin sustantivo detrás del verbo"],
          ["pasivo sing.", "Qui si vende il pane.", "concuerda con «il pane»"],
          ["pasivo pl.", "Qui si vendono i panini.", "concuerda con «i panini»"],
          ["con adjetivo", "Quando si è stanchi…", "adjetivo en plural"],
          ["tiempo compuesto", "Si è mangiato bene.", "siempre essere"],
          ["reflexivo", "Ci si alza presto.", "si + si → ci si"]
        ]
      },
      examples: [
        { tr: "En esta oficina se trabaja también los sábados." },
        { tr: "¿Cómo se dice «laptop» en italiano?" },
        { tr: "Aquí no se puede fumar." },
        { tr: "En esta zona se venden pisos." },
        { tr: "Cuando uno es nuevo, pregunta mucho." },
        { tr: "Uno se acostumbra rápido." }
      ]
    },
    vocab: [
      "se dice",
      "se hace",
      "no se puede",
      "oficina",
      "reunión",
      "compañero de trabajo",
      "sueldo",
      "vacaciones",
      "días libres",
      "horas extra",
      "plazo",
      "acostumbrarse"
    ],
    exercises: [
      {
        q: "«Qui ___ i panini.» (aquí se venden bocadillos)",
        opts: ["si vende", "si vendono", "si vendere"],
        why: "El si pasivo concuerda con la cosa: i panini → plural."
      },
      { q: "Completa: «In Italia ___ mangia bene.»" },
      { q: "Completa: «Come ___ dice in italiano?»" },
      {
        q: "«Quando si è stanchi»: ¿por qué «stanchi» y no «stanco»?",
        opts: ["Es un error", "Detrás de si el adjetivo va en plural", "Porque de verdad se habla de varias personas"]
      },
      { q: "Completa las formas.", tr: "En esta oficina se trabaja mucho y a menudo se hacen horas extra." },
      { q: "«Aquí no se puede fumar.»" },
      {
        q: "¿Qué frases son correctas?",
        opts: ["Si vendono case.", "Si vende case.", "Si è mangiato bene.", "Si ha mangiato bene."]
      },
      { tr: "Uno se acostumbra rápido." },
      { tr: "En esta empresa se trabaja mucho, pero se paga bien." },
      { tr: "¿Cómo se dice «deadline» en italiano? Se dice scadenza." }
    ]
  },
  "lesson:a2-u06-l4": {
    theme: "Trabajo",
    title: "Reuniones y acuerdos",
    objectives: [
      "tomar la palabra en una reunión",
      "proponer y acordar una fecha",
      "expresar acuerdo o duda"
    ],
    theory: [
      {
        h: "Interrumpir no es de mala educación",
        p: "En la cultura de reunión italiana, meter baza es normal y señala interés. Esperar una pausa limpia puede leerse como no tener nada que decir. Aquí tu costumbre conversacional te ayuda: el solapamiento también es normal en español. Fórmulas para suavizar: <em>Scusa se ti interrompo…</em>, <em>Posso aggiungere una cosa?</em>, <em>Solo un attimo…</em>"
      },
      {
        h: "Acuerdo y duda",
        list: [
          "acuerdo: <em>Sono d'accordo</em>, <em>Esatto</em>, <em>Hai ragione</em>",
          "parcial: <em>In parte sì, però…</em>, <em>Dipende</em>",
          "duda: <em>Non ne sono convinto</em>, <em>Ho qualche dubbio</em>",
          "desacuerdo: <em>Non sono d'accordo</em>, <em>La vedo diversamente</em>"
        ]
      },
      {
        h: "Acordar una hora",
        p: "<em>Che ne dite di giovedì?</em>, <em>A me va bene</em>, <em>Per me è lo stesso</em>, <em>Preferirei più tardi</em>. La fórmula <em>facciamo giovedì</em> («quedamos el jueves») es la manera estándar de cerrar el acuerdo."
      },
      {
        tip: "<em>Ci sentiamo</em> («ya hablamos») cierra prácticamente toda reunión y toda llamada de trabajo italiana. No es una promesa, es una fórmula, igual que tu «ya te digo algo»."
      }
    ],
    grammar: {
      title: "El lenguaje de las reuniones",
      table: {
        head: ["función", "expresión", "en español"],
        rows: [
          ["tomar la palabra", "Posso dire una cosa?", "¿Puedo decir una cosa?"],
          ["interrumpir", "Scusa se ti interrompo…", "Perdona que te interrumpa…"],
          ["estar de acuerdo", "Sono d'accordo con te.", "Estoy de acuerdo contigo."],
          ["duda", "Non ne sono del tutto convinto.", "No estoy del todo convencido."],
          ["proponer", "Che ne dite di giovedì?", "¿Qué os parece el jueves?"],
          ["cerrar", "Facciamo così, allora.", "Hacemos así, entonces."]
        ]
      },
      examples: [
        { tr: "Déjame resumir los puntos principales." },
        { tr: "Tengo alguna duda sobre ese punto." },
        { tr: "¿Podemos dejar la decisión para el lunes?" },
        { tr: "A mí me da igual, decide tú." },
        { tr: "¿Quién se encarga de esto?" },
        { tr: "Ya hablamos mañana de los detalles." }
      ]
    },
    vocab: [
      "reunión",
      "orden del día",
      "resumir",
      "aplazar",
      "encargarse de",
      "estoy de acuerdo",
      "no estoy convencido",
      "depende",
      "¿qué os parece…?",
      "a mí me da igual",
      "ya hablamos",
      "un punto del orden del día"
    ],
    exercises: [
      { q: "Relaciona.", pairs: ["estoy de acuerdo", "depende", "aplazar", "encargarse de"] },
      {
        q: "«Non ne sono del tutto convinto» es:",
        opts: ["acuerdo total", "duda expresada con suavidad", "desacuerdo firme"]
      },
      { q: "Completa: «___ ne dite di giovedì?»" },
      { q: "Completa: «Chi ___ occupa di questo?»" },
      { q: "«¿Podemos dejar la decisión para el lunes?»" },
      {
        q: "Una reunión de equipo.",
        setting: "La sala de reuniones, fijando fecha.",
        lines: [
          { tr: "Bien, hay que fijar la próxima reunión." },
          { tr: "Propón el jueves.", answerTr: "¿Qué os parece el jueves?" },
          { tr: "El jueves por la mañana ya tengo algo. ¿Por la tarde?" },
          { tr: "Acepta y cierra el acuerdo.", answerTr: "Me va bien, hacemos así." }
        ]
      },
      {
        q: "Completa lo que dirías.",
        tr: "Perdona que te interrumpa, pero tengo alguna duda sobre ese punto."
      },
      { tr: "Déjame resumir los puntos principales." },
      { tr: "Dejamos la decisión para la próxima reunión." },
      { tr: "Estoy de acuerdo, pero querría añadir una cosa." }
    ]
  },
  "lesson:a2-u06-test": {
    theme: "Test",
    title: "Test de la unidad 6",
    objectives: ["comprobar el condicional de cortesía, los correos y el si impersonal"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      { q: "«___ richiamarmi?» (podría)" },
      { q: "«Le scrivo ___ merito alla riunione.»" },
      { q: "«Le invio ___ allegato il preventivo.»" },
      { q: "«Qui ___ i panini.»", opts: ["si vende", "si vendono", "si vendere"] },
      { q: "«In Italia ___ mangia bene.»" },
      { q: "Relaciona.", pairs: ["presupuesto", "vacaciones", "sueldo", "plazo"] },
      { q: "«Estoy de acuerdo, pero tengo una duda.»" },
      { tr: "¿Podría confirmar la reunión antes del viernes?" },
      { tr: "Querría pasar la reunión al jueves por la tarde." }
    ]
  },
  "unit:a2-u07": { title: "Fiestas y tradiciones", grammarNote: "invitaciones · felicitaciones · adverbios" },
  "lesson:a2-u07-l1": {
    theme: "Cultura",
    title: "Felicitaciones y ocasiones",
    objectives: [
      "felicitar en distintas ocasiones",
      "responder a una felicitación",
      "conocer las principales fiestas italianas"
    ],
    theory: [
      {
        h: "Auguri es la llave maestra",
        p: "<strong>Auguri!</strong> vale para cumpleaños, santos, bodas, ascensos, fiestas y casi cualquier ocasión buena. Literalmente son «buenos deseos». Ampliado: <em>Tanti auguri!</em>, <em>Auguri di buon compleanno!</em>"
      },
      {
        h: "Lo que no se desea",
        p: "Antes de un examen o de una prueba difícil los italianos <b>no</b> dicen <em>auguri</em> ni <em>buona fortuna</em>: trae mala suerte. Se dice <strong>in bocca al lupo</strong> («en la boca del lobo») y se responde <em>crepi!</em> o <em>crepi il lupo!</em>. Es tu «mucha mierda» del teatro, pero extendido a toda la vida: en español «mucha suerte» es perfectamente normal, en italiano no."
      },
      {
        h: "El calendario que hay que conocer",
        list: [
          "<b>Capodanno</b> (1 de enero), <b>Epifania</b> (6 de enero, cuando viene <em>la Befana</em>)",
          "<b>Pasqua</b> y <b>Pasquetta</b> (lunes de Pascua, día de excursión)",
          "<b>25 de abril</b> (Liberación), <b>1 de mayo</b>, <b>2 de junio</b> (fiesta de la República)",
          "<b>Ferragosto</b> (15 de agosto: el país entero de vacaciones), <b>Natale</b> y <b>Santo Stefano</b>"
        ]
      },
      {
        tip: "<em>Buone feste</em> es la felicitación neutra de la temporada, <em>Buon Natale</em> es específicamente la Navidad. En contexto laboral la primera es más habitual."
      }
    ],
    grammar: {
      title: "Felicitaciones",
      table: {
        head: ["ocasión", "en italiano", "la respuesta"],
        rows: [
          ["cumpleaños", "Tanti auguri!", "Grazie!"],
          ["las fiestas", "Buone feste! / Buon Natale!", "Altrettanto!"],
          ["Año Nuevo", "Buon anno!", "Anche a te!"],
          ["antes de un examen", "In bocca al lupo!", "Crepi!"],
          ["antes de un viaje", "Buon viaggio!", "Grazie!"],
          ["antes de comer", "Buon appetito!", "Altrettanto!"]
        ]
      },
      examples: [
        { tr: "¡Feliz cumpleaños!" },
        { tr: "Felices fiestas a ti y a tu familia." },
        { tr: "¡Suerte en el examen! — ¡Gracias!" },
        { tr: "¡Que tengas buen día en el trabajo!" },
        { tr: "¡Buen fin de semana! — ¡Igualmente!" },
        { tr: "¡Enhorabuena por el ascenso!" }
      ]
    },
    vocab: [
      "¡felicidades!",
      "feliz cumpleaños",
      "felices fiestas",
      "feliz año nuevo",
      "suerte (antes de una prueba)",
      "la respuesta a lo anterior",
      "igualmente",
      "enhorabuena",
      "cumpleaños",
      "el santo",
      "15 de agosto, tope de vacaciones",
      "un puente"
    ],
    culture: {
      title: "Con ojos italianos: el calendario marca el año",
      text: "<p><b>Ferragosto</b> (15 de agosto) es cuando las ciudades grandes se vacían. Cierran las tiendas de barrio, y también algunos restaurantes y consultas. Intentar resolver algo esa semana es tiempo perdido, igual que la primera quincena de agosto en España.</p><p><b>Il ponte</b> es exactamente tu puente: cuando una fiesta cae en martes o en jueves, se coge libre el lunes o el viernes. Los plazos de trabajo se planifican alrededor de los puentes.</p><p><b>L'onomastico</b>, el santo, sigue vivo, y en algunas regiones, sobre todo en el sur, se celebra con tantas ganas como el cumpleaños.</p>"
    },
    exercises: [
      {
        q: "¿Qué le dices a un amigo antes de un examen?",
        opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"],
        why: "«Buona fortuna» se considera de mala suerte."
      },
      { q: "¿Cuál es la respuesta a «in bocca al lupo»?", opts: ["Grazie!", "Crepi!", "Altrettanto!"] },
      { q: "Completa: «Buon ___!» (buen viaje)" },
      { q: "Completa: «Buon appetito! — ___!» (igualmente)" },
      {
        q: "Relaciona la ocasión con la felicitación.",
        pairs: ["cumpleaños", "Año Nuevo", "ascenso", "viaje"]
      },
      {
        q: "¿Qué es «il ponte» en el calendario?",
        opts: ["Una fiesta religiosa", "Un día libre que une la fiesta con el fin de semana", "Un aniversario"]
      },
      {
        q: "¿Qué pasa en Italia el 15 de agosto?",
        opts: ["Empieza el curso escolar", "Ferragosto: las ciudades se vacían", "Fiesta de la República"]
      },
      { q: "«Felices fiestas a ti y a tu familia.»" },
      { tr: "¡Feliz cumpleaños y felices fiestas!" },
      { tr: "¡Suerte en el examen! — ¡Gracias!" }
    ]
  },
  "lesson:a2-u07-l2": {
    theme: "Cultura",
    title: "Invitaciones",
    objectives: ["invitar a alguien a algo", "aceptar o rechazar con elegancia", "preguntar por los detalles"],
    theory: [
      {
        h: "Las invitaciones suelen ser informales",
        p: "Las invitaciones italianas casi nunca tienen una forma fija. Lo más habitual: <em>Ti va di…?</em>, <em>Che ne dici di…?</em>, <em>Vieni anche tu?</em>. Incluso una cena en regla se anuncia como <em>una cosa tra amici</em>."
      },
      {
        h: "Rechazar exige un motivo",
        p: "Un <em>no, grazie</em> a secas suena frío. La fórmula es: disculpa + motivo + alternativa. <em>Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?</em> Igual que en español, donde «no, gracias» sin más deja mal sabor."
      },
      {
        h: "Qué se lleva",
        p: "A una cena se lleva vino, postre o flores. La pregunta <em>Cosa porto?</em> se espera, y la respuesta <em>Non portare niente!</em> es una cortesía: se lleva algo igualmente."
      },
      {
        tip: "La hora de una invitación es aproximada. Llegar clavado a una cena privada a las ocho y media puede resultar incómodo; un cuarto de hora tarde es lo normal, un margen que ya conoces."
      }
    ],
    grammar: {
      title: "Invitar y responder",
      table: {
        head: ["función", "expresión", "en español"],
        rows: [
          ["invitación", "Ti va di venire a cena sabato?", "¿Te apetece venir a cenar el sábado?"],
          ["aceptar", "Volentieri, a che ora?", "Con mucho gusto, ¿a qué hora?"],
          ["rechazar", "Mi dispiace, quel giorno non posso.", "Lo siento, ese día no puedo."],
          ["alternativa", "Facciamo un'altra volta?", "¿Lo dejamos para otro día?"],
          ["detalles", "Cosa porto?", "¿Qué llevo?"],
          ["la respuesta", "Non portare niente, ci pensiamo noi.", "No traigas nada, ya nos encargamos."]
        ]
      },
      examples: [
        { tr: "El sábado hacemos una cena en casa, ¿te vienes?" },
        { tr: "¡Con mucho gusto! ¿A qué hora quedáis?" },
        { tr: "Lo siento, el sábado ya tengo un compromiso." },
        { tr: "¿Puedo llevar a alguien?" },
        { tr: "Llevo el postre, ¿te parece?" },
        { tr: "Nos vemos allí sobre las ocho y media." }
      ]
    },
    vocab: [
      "invitar",
      "invitación",
      "cena",
      "una fiesta",
      "un compromiso previo",
      "con mucho gusto",
      "por desgracia",
      "otro día",
      "llevar",
      "sobre las ocho",
      "quedar",
      "quedarse hasta tarde"
    ],
    exercises: [
      {
        q: "¿Qué rechazo funciona mejor en italiano?",
        opts: ["No, grazie.", "Mi dispiace, quel giorno lavoro. Facciamo un'altra volta?", "Non voglio."]
      },
      { q: "Completa: «___ va di venire a cena?»" },
      { q: "Completa: «Purtroppo ho già un ___.» (un compromiso)" },
      { q: "Relaciona.", pairs: ["con mucho gusto", "por desgracia", "invitación", "quedar"] },
      { q: "«¡Con mucho gusto! ¿A qué hora quedáis?»" },
      {
        q: "Una invitación a cenar.",
        setting: "Un mensaje de un amigo, miércoles por la noche.",
        lines: [
          { tr: "El sábado hacemos una cena en casa. ¿Te apetece venir?" },
          { tr: "Acepta y pregunta a qué hora.", answerTr: "¡Con mucho gusto! ¿A qué hora?" },
          { tr: "Sobre las ocho y media. Seremos seis." },
          { tr: "Pregunta qué llevar.", answerTr: "¿Qué llevo?" },
          { tr: "¡No traigas nada! El postre, como mucho." }
        ]
      },
      { q: "Completa el rechazo.", tr: "Lo siento, el sábado ya tengo un compromiso. ¿Lo dejamos para otro día?" },
      { tr: "Nos vemos allí sobre las ocho y media." },
      { tr: "¿Te apetece venir a cenar el sábado? Seremos seis." },
      { tr: "Con mucho gusto, llevo el postre. ¿A qué hora?" }
    ]
  },
  "lesson:a2-u07-l3": {
    theme: "Cultura",
    title: "La Italia de las regiones",
    objectives: [
      "entender las diferencias básicas entre el norte y el sur",
      "describir una región y su cocina",
      "usar comparaciones para describir lugares"
    ],
    theory: [
      {
        h: "Italia se unificó en 1861",
        p: "Antes era un conjunto de estados con lenguas, cocinas e instituciones separadas. Las diferencias regionales son más hondas que en la mayoría de los países: los dialectos pueden ser mutuamente incomprensibles, y la identidad local (<em>campanilismo</em>, de <em>campanile</em>, el campanario) suele pesar más que la nacional. La comparación con España es útil, pero conviene no forzarla: en Italia el peso está en la ciudad y la provincia, no en la comunidad autónoma."
      },
      {
        h: "No existe una cocina italiana única",
        p: "Mantequilla y arroz en el norte, aceite de oliva y pasta en el sur. El <em>pesto</em> es de Liguria, el <em>ragù</em> de Emilia, la <em>carbonara</em> de Roma, los <em>arancini</em> de Sicilia. Pedir «comida italiana» sin decir la región es como pedir «comida española» sin más."
      },
      {
        h: "Lengua y dialecto",
        p: "<em>Il dialetto</em> no es italiano mal hablado: es una lengua distinta, descendiente del latín en paralelo al toscano, del que salió el italiano estándar. Se parece a la relación entre el castellano y el asturiano o el aragonés, más que a la del castellano con el catalán o el gallego, que sí son cooficiales. El napolitano y el siciliano tienen literatura propia."
      },
      {
        tip: "Tema de conversación seguro con un italiano: la cocina de su región. Tema inseguro: qué región cocina mejor."
      }
    ],
    grammar: {
      title: "Describir una región",
      table: {
        head: ["región", "capital", "conocida por"],
        rows: [
          ["la Toscana", "Firenze", "el chuletón, el Chianti, el Renacimiento"],
          ["l'Emilia-Romagna", "Bologna", "tagliatelle al ragù, parmesano"],
          ["la Sicilia", "Palermo", "arancini, cannoli, influencia árabe"],
          ["il Veneto", "Venezia", "cicchetti, prosecco"],
          ["la Campania", "Napoli", "pizza, sfogliatella"],
          ["il Piemonte", "Torino", "trufas, vermut, Slow Food"]
        ]
      },
      examples: [
        { tr: "Soy de origen siciliano, pero vivo en Milán." },
        { tr: "En el norte usan más mantequilla, en el sur más aceite." },
        { tr: "En el Véneto todavía se habla mucho dialecto." },
        { tr: "Cada región tiene su pasta típica." },
        { tr: "El café en el sur es más fuerte y más corto." },
        { tr: "Roma es caótica, pero preciosa." }
      ]
    },
    vocab: [
      "región",
      "capital de región",
      "norte / sur",
      "dialecto",
      "típico",
      "tradición",
      "un plato regional",
      "origen",
      "caótico",
      "acogedor",
      "orgullo local",
      "mudarse (a un sitio)"
    ],
    exercises: [
      { q: "Relaciona la región con la ciudad.", pairs: ["Firenze", "Napoli", "Venezia", "Torino"] },
      {
        q: "¿Qué es el «campanilismo»?",
        opts: ["Un estilo arquitectónico", "El apego al propio pueblo", "Un tipo de campana"]
      },
      {
        q: "Un dialecto italiano es:",
        opts: ["una versión mal hablada del italiano", "una lengua distinta descendiente del latín", "jerga juvenil"]
      },
      { q: "Completa: «Al nord si usa più il burro, al ___ l'olio.»" },
      { q: "«Cada región tiene su plato típico.»" },
      {
        q: "Completa.",
        tr: "Soy de origen siciliano, pero llevo diez años en el norte. Entiendo el dialecto pero no lo hablo."
      },
      { tr: "Roma es caótica, pero preciosa." },
      { q: "¿De dónde es la carbonara?", opts: ["Bologna", "Roma", "Palermo"] },
      { tr: "Cada región italiana tiene su cocina y a menudo su dialecto." },
      { tr: "Soy de origen polaco, pero llevo tres años en la Toscana." }
    ]
  },
  "lesson:a2-u07-l4": {
    theme: "Gramática",
    title: "Los adverbios",
    objectives: [
      "formar los adverbios en -mente",
      "distinguir un adjetivo de un adverbio",
      "colocar el adverbio en su sitio"
    ],
    theory: [
      {
        h: "Cómo se forman",
        p: "Se toma la forma <b>femenina</b> del adjetivo y se le añade <em>-mente</em>: <em>lenta → lentamente</em>, <em>rara → raramente</em>. Es exactamente tu regla, letra por letra. Los adjetivos en <em>-le</em> y <em>-re</em> pierden la <em>e</em> final: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>, también como en español."
      },
      {
        h: "Buono frente a bene",
        p: "Es el que más problemas da, aunque tú tengas el mismo par. <em>Buono</em> es el adjetivo (¿cómo es?), <em>bene</em> el adverbio (¿cómo lo hace?): bueno y bien. <em>Un caffè <b>buono</b></em> pero <em>parla <b>bene</b></em>. «Parla buono» está mal igual que «habla bueno»."
      },
      {
        h: "La posición en los tiempos compuestos",
        p: "En el passato prossimo los adverbios <em>già, mai, ancora, sempre, appena, più</em> van <b>entre el auxiliar y el participio</b>: <em>ho <b>già</b> visto</em>, como tu «ya he visto». Los demás suelen ir detrás del participio: <em>ho parlato <b>lentamente</b></em>."
      },
      {
        tip: "Los adverbios en <em>-mente</em> son largos, y el italiano hablado los sustituye a menudo por locuciones: <em>in modo semplice</em> en vez de <em>semplicemente</em>, <em>con calma</em> en vez de <em>tranquillamente</em>."
      }
    ],
    grammar: {
      title: "Los adverbios",
      table: {
        head: ["adjetivo", "adverbio", "ejemplo"],
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
        { tr: "¿Podría hablar más despacio?" },
        { tr: "Rara vez voy al centro el fin de semana." },
        { tr: "Ya he visto esa película." },
        { tr: "Todavía no he estado." },
        { tr: "Habla bien italiano, pero lo escribe mal." },
        { tr: "Tómatelo con calma." }
      ]
    },
    vocab: [
      "despacio",
      "deprisa",
      "fácilmente",
      "rara vez",
      "con regularidad",
      "de repente",
      "por fin",
      "absolutamente",
      "bien / mal",
      "con calma",
      "con prisa",
      "casi"
    ],
    exercises: [
      { q: "Forma el adverbio de «lento»: ___" },
      { q: "Forma el adverbio de «facile»: ___" },
      {
        q: "¿Qué frase es correcta?",
        opts: ["Parla buono l'italiano.", "Parla bene l'italiano.", "Parla buon l'italiano."]
      },
      { q: "Completa: «Ho ___ visto quel film.» (ya)" },
      {
        q: "¿Dónde va «ancora» en el passato prossimo?",
        opts: ["Delante del auxiliar", "Entre el auxiliar y el participio", "Al final"]
      },
      { q: "Relaciona.", pairs: ["por fin", "de repente", "con calma", "casi"] },
      { q: "«¿Podría hablar más despacio?»" },
      {
        q: "Completa.",
        tr: "Habla bien italiano, pero todavía lo escribe mal. Estudia con regularidad, todos los días."
      },
      { tr: "Por fin he encontrado un piso cerca del trabajo." },
      { tr: "¿Podría repetirlo más despacio?" }
    ]
  },
  "lesson:a2-u07-test": {
    theme: "Test",
    title: "Test de la unidad 7",
    objectives: ["comprobar las felicitaciones, las invitaciones, lo regional y los adverbios"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "Antes de un examen se dice:", opts: ["Buona fortuna!", "In bocca al lupo!", "Auguri!"] },
      { q: "La respuesta a «in bocca al lupo»: ___" },
      { q: "«Buon appetito! — ___!»" },
      { q: "«___ va di venire a cena?»" },
      { q: "«Il ponte» es:", opts: ["un puente de piedra", "un puente de días libres", "una fiesta"] },
      { q: "Relaciona.", pairs: ["Firenze", "Napoli", "Palermo", "Venezia"] },
      { q: "El adverbio de «regolare»: ___" },
      { q: "La frase correcta:", opts: ["Parla buono.", "Parla bene.", "Parla buon."] },
      { tr: "¡Felicidades y felices fiestas a toda la familia!" },
      { tr: "¿Te apetece venir a la fiesta el sábado por la noche?" }
    ]
  },
  "unit:a2-u08": { title: "Planes y repaso", grammarNote: "expresar intenciones · repaso de A2" },
  "lesson:a2-u08-l1": {
    theme: "Planes",
    title: "Intenciones y sueños",
    objectives: [
      "hablar de tus planes de futuro",
      "expresar un deseo y una duda",
      "combinar el futuro con el condicional"
    ],
    theory: [
      {
        h: "Tres grados de certeza",
        list: [
          "<b>decidido</b>: <em>A settembre comincio un nuovo lavoro.</em> (presente)",
          "<b>planeado</b>: <em>Ho intenzione di trasferirmi.</em> / <em>Andrò a vivere all'estero.</em>",
          "<b>un sueño</b>: <em>Mi piacerebbe aprire un bar.</em> / <em>Vorrei imparare il giapponese.</em>"
        ]
      },
      {
        h: "Mi piacerebbe frente a vorrei",
        p: "<em>Vorrei</em> se refiere a algo real y alcanzable («querría un café»). <em>Mi piacerebbe</em> se desplaza hacia el deseo o la hipótesis («me gustaría»). Un italiano usa el primero al pedir y el segundo al hablar de planes de vida, exactamente el reparto que haces tú entre «querría» y «me gustaría»."
      },
      {
        h: "Preposiciones detrás de los verbos de intención",
        p: "<em>ho intenzione <b>di</b></em>, <em>penso <b>di</b></em>, <em>spero <b>di</b></em>, <em>sogno <b>di</b></em>, pero <em>comincio <b>a</b></em>, <em>imparo <b>a</b></em>, <em>riesco <b>a</b></em>. La preposición forma parte del verbo y se aprende con él. Tu lengua acierta en varios (intención de, empezar a, aprender a) y falla en otros: tú dices «pienso cambiar», sin preposición."
      },
      {
        tip: "<em>Chissà</em> («quién sabe») abre a menudo una frase sobre un futuro incierto: <em>Chissà dove sarò tra cinque anni.</em>"
      }
    ],
    grammar: {
      title: "Expresar planes",
      table: {
        head: ["grado", "construcción", "ejemplo"],
        rows: [
          ["una decisión", "presente", "A giugno cambio lavoro."],
          ["una intención", "ho intenzione di + infinitivo", "Ho intenzione di studiare medicina."],
          ["una previsión", "futuro semplice", "Fra due anni parlerò bene l'italiano."],
          ["un sueño", "mi piacerebbe + infinitivo", "Mi piacerebbe vivere al mare."],
          ["una esperanza", "spero di + infinitivo", "Spero di trovare casa presto."],
          ["incertidumbre", "chissà", "Chissà come andrà."]
        ]
      },
      examples: [
        { tr: "Tengo intención de apuntarme a un curso de tarde." },
        { tr: "Me gustaría trabajar un año en el extranjero." },
        { tr: "Espero aprobar el examen en junio." },
        { tr: "Quién sabe dónde estaré dentro de cinco años." },
        { tr: "Estoy pensando en cambiar de ciudad." },
        { tr: "Tarde o temprano aprenderé a tocar el piano." }
      ]
    },
    vocab: [
      "tengo intención de",
      "me gustaría (un sueño)",
      "espero",
      "estoy pensando en",
      "soñar con",
      "quién sabe",
      "tarde o temprano",
      "en el extranjero",
      "un curso de tarde",
      "aprobar un examen",
      "cambiar de vida",
      "un sueño"
    ],
    exercises: [
      { q: "Completa: «Ho intenzione ___ trasferirmi.»" },
      { q: "Completa: «Spero ___ trovare casa presto.»" },
      { q: "Completa: «Comincio ___ capire meglio.»" },
      {
        q: "¿Qué frase suena a sueño y no a plan?",
        opts: ["A giugno cambio lavoro.", "Mi piacerebbe vivere al mare.", "Ho intenzione di studiare."]
      },
      {  },
      { q: "«Me gustaría trabajar un año en el extranjero.»" },
      { q: "Completa los planes.", tr: "Tengo intención de apuntarme a un curso y espero aprobar el examen en junio." },
      { tr: "Tarde o temprano aprenderé a tocar el piano." },
      { tr: "Estoy pensando en cambiar de ciudad el año que viene." },
      { tr: "Me gustaría vivir en Italia al menos un año." }
    ]
  },
  "lesson:a2-u08-l2": {
    theme: "Repaso",
    title: "Repaso de los tiempos",
    objectives: [
      "elegir el tiempo que encaja con la situación",
      "combinar todos los tiempos aprendidos en A2",
      "encontrar tus puntos débiles"
    ],
    theory: [
      {
        h: "El mapa de tiempos de A2",
        list: [
          "<b>presente</b> — ahora, costumbre, futuro cercano",
          "<b>passato prossimo</b> — un hecho cerrado",
          "<b>imperfetto</b> — fondo, descripción, costumbre pasada",
          "<b>trapassato prossimo</b> — el pasado antes del pasado",
          "<b>futuro semplice</b> — un plan, una previsión, una suposición sobre el presente",
          "<b>futuro anteriore</b> — el futuro antes del futuro, una suposición sobre el pasado",
          "<b>condizionale presente</b> — una petición, un consejo, un deseo"
        ]
      },
      {
        h: "Los errores más frecuentes de esta fase",
        list: [
          "usar el passato prossimo donde hace falta el imperfetto (descripción)",
          "no concordar el participio con <em>essere</em>: «siamo andato»",
          "no concordar el participio con el pronombre: «l'ho visto» hablando de una mujer",
          "poner un condicional detrás de <em>se</em>: «se avrei» en vez de la construcción correcta, un error que en español también se corrige a diario"
        ]
      }
    ],
    grammar: {
      title: "Los tiempos en una tabla",
      table: {
        head: ["tiempo", "ejemplo", "cuándo"],
        rows: [
          ["presente", "Lavoro in banca.", "ahora, costumbre"],
          ["passato prossimo", "Ieri ho lavorato molto.", "un hecho cerrado"],
          ["imperfetto", "Da bambino lavoravo poco.", "fondo, costumbre"],
          ["trapassato", "Avevo già lavorato lì.", "un pasado anterior"],
          ["futuro", "Domani lavorerò da casa.", "un plan"],
          ["futuro anteriore", "Quando avrò finito, esco.", "un futuro anterior"],
          ["condizionale", "Vorrei lavorare meno.", "una petición, un deseo"]
        ]
      },
      examples: [
        { tr: "Mientras estudiaba, llegó un correo importante." },
        { tr: "Cuando salí ya había dejado de llover." },
        { tr: "Mañana llamo en cuanto termine." },
        { tr: "Querría preguntarte una cosa." },
        { tr: "De pequeña no me gustaba el pescado." },
        { tr: "La conocí el año pasado en Roma." }
      ]
    },
    vocab: [
      "un tiempo verbal",
      "un error frecuente",
      "concordancia",
      "participio",
      "verbo auxiliar",
      "repasar",
      "confundir",
      "distinguir"
    ],
    exercises: [
      { q: "Pon las formas correctas.", tr: "Mientras estudiaba, llegó un correo importante." },
      { q: "Pon las formas correctas.", tr: "Cuando salí ya había dejado de llover." },
      { q: "Pon las formas correctas.", tr: "Mañana llamo en cuanto termine." },
      {
        q: "«Siamo andato al mare»: ¿qué falla?",
        opts: ["El auxiliar es incorrecto", "Falta la concordancia del participio (andati)", "Nada, está bien"]
      },
      { q: "Hablando de una mujer: «L'ho visto ieri», ¿qué hay que corregir?", opts: ["Nada", "L'ho vista", "Le ho visto"] },
      {  },
      {  },
      {  },
      { q: "«Querría preguntarte una cosa.»" },
      { tr: "De pequeña no me gustaba el pescado, ahora me encanta." },
      { tr: "Ayer fui al cine y la película me gustó mucho." }
    ]
  },
  "lesson:a2-u08-l3": {
    theme: "Repaso",
    title: "Repaso de los pronombres",
    objectives: [
      "elegir el pronombre correcto",
      "combinar pronombres con los tiempos compuestos",
      "prepararte para los pronombres combinados de B1"
    ],
    theory: [
      {
        h: "Cuatro grupos que hay que separar",
        list: [
          "<b>directos</b>: mi, ti, lo, la, ci, vi, li, le — «¿a quién? ¿qué?»",
          "<b>indirectos</b>: mi, ti, gli, le, ci, vi, gli — «¿a quién?»",
          "<b>reflexivos</b>: mi, ti, si, ci, vi, si — una acción sobre uno mismo",
          "<b>partículas</b>: ci (lugar, a + cosa), ne (una parte, di + cosa)"
        ]
      },
      {
        h: "La prueba decisiva",
        p: "Hazle una pregunta al verbo. «¿Veo <b>a quién</b>?» → directo (<em>lo vedo</em>). «¿Telefoneo <b>a quién</b>?» → indirecto (<em>gli telefono</em>). Si el verbo pide <em>a</em>, el pronombre será indirecto. Cuidado con el leísmo: en italiano no existe, <em>lo vedo</em> es la única forma."
      },
      {
        h: "Lo que espera en B1",
        p: "Los pronombres combinados (<em>me lo, glielo, ce ne</em>) y el uso completo de <em>ci</em> y <em>ne</em> en los verbos fusionados. La base que estás repasando aquí es lo que lo hace posible; tus «me lo dio», «se lo dije» funcionan igual, así que el terreno está preparado."
      }
    ],
    grammar: {
      title: "Los pronombres: resumen",
      table: {
        head: ["tipo", "formas", "ejemplo"],
        rows: [
          ["directo", "mi, ti, lo, la, ci, vi, li, le", "Lo conosco bene."],
          ["indirecto", "mi, ti, gli, le, ci, vi, gli", "Gli ho scritto."],
          ["reflexivo", "mi, ti, si, ci, vi, si", "Mi sveglio presto."],
          ["ci", "lugar / a + cosa", "Ci vado domani."],
          ["ne", "una parte / di + cosa", "Ne prendo due."],
          ["concordancia", "solo con el directo", "Le ho viste."]
        ]
      },
      examples: [
        { tr: "¿El libro? Lo leí la semana pasada." },
        { tr: "¿Marco? Ya le he contestado." },
        { tr: "¿Las llaves? No las encuentro." },
        { tr: "Voy al gimnasio tres veces por semana." },
        { tr: "¿Cuántas quieres? — Quiero tres." },
        { tr: "Me levanté a las seis." }
      ]
    },
    vocab: [
      "pronombre",
      "directo / indirecto",
      "reflexivo",
      "sustituir",
      "repetir",
      "evitar",
      "repetición",
      "con soltura"
    ],
    exercises: [
      { q: "«Telefono a Giulia» →", opts: ["La telefono", "Le telefono", "Ne telefono"] },
      { q: "«Vedo Giulia» →", opts: ["La vedo", "Le vedo", "Gli vedo"] },
      { q: "«Le chiavi? Non ___ trovo.»" },
      { q: "«Quante mele vuoi? — ___ voglio tre.»" },
      { q: "«In palestra ___ vado tre volte a settimana.»" },
      { q: "Completa la terminación: «Le ho vist___.» (a ellas)" },
      {
        q: "¿Qué verbos piden pronombre indirecto?",
        opts: ["telefonare", "vedere", "scrivere", "aspettare", "rispondere"]
      },
      {
        q: "Completa los pronombres.",
        tr: "¿El libro? Lo he leído. ¿Marco? Le escribí ayer. ¿El mercado? Voy el sábado."
      },
      { tr: "Le mandé un correo, pero todavía no me ha contestado." },
      { tr: "¿La película? La vi ayer y me gustó mucho." }
    ]
  },
  "lesson:a2-u08-l4": {
    theme: "Repaso",
    title: "Listo para B1",
    objectives: [
      "comprobar que dominas todo el nivel A2",
      "ver lo que llega en B1",
      "decidir si pasas de nivel"
    ],
    theory: [
      {
        h: "Lo que ya deberías saber hacer",
        list: [
          "hablar del pasado con dos tiempos y elegir el correcto",
          "hablar de planes y de sueños",
          "manejarte en un viaje, un hotel, la consulta del médico, el trabajo",
          "usar pronombres en vez de repetir sustantivos",
          "escribir un correo breve y salir adelante en una llamada",
          "hacer una petición, dar un consejo, rechazar con cortesía"
        ]
      },
      {
        h: "Lo que llega en B1",
        p: "El <strong>congiuntivo</strong>: el modo de la opinión, la duda y la emoción. Aquí partes con ventaja enorme sobre un angloparlante, porque tu subjuntivo está vivo y se usa en los mismos contextos: «creo que sea», «espero que venga». Las diferencias existen y son finas, pero el mecanismo ya lo tienes. Además llegan los pronombres combinados, el <em>ci</em> y el <em>ne</em> completos, las relativas, el estilo indirecto, la argumentación y la burocracia italiana."
      },
      {
        tip: "No pases a B1 con menos de un 70 %. El congiuntivo se apoya en los tiempos de A2: las lagunas de ahí se convierten allí en un muro."
      }
    ],
    vocab: [
      "el subjuntivo",
      "una opinión",
      "una duda",
      "argumentar",
      "burocracia",
      "listo para",
      "progreso",
      "puedo con esto"
    ],
    exercises: [
      { q: "Pon los tiempos.", tr: "Ayer fui al cine con Marta. La película era larga, pero buena." },
      {  },
      {  },
      {  },
      { q: "«Le chiavi? ___ ho perse.»" },
      { q: "«A Marco ___ ho telefonato ieri.»" },
      { q: "«Quanto ___ vuole per arrivare?»" },
      { q: "«Mi ___ male la schiena.»" },
      { q: "«Ho intenzione ___ cambiare lavoro.»" },
      { q: "«Cuando termine de trabajar, te llamo.»" },
      { tr: "Mientras volvía a casa a pie, me encontré con Giulia y le hablé del proyecto." },
      { tr: "El año que viene me gustaría mudarme a Italia por trabajo." }
    ]
  },
  "lesson:a2-u08-test": {
    theme: "Examen",
    title: "Examen final de A2",
    objectives: ["comprobar que estás listo para pasar a B1"],
    theory: [{ p: "Doce preguntas de todo el nivel. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Pon los tiempos.", tr: "Mientras esperaba el autobús, me encontré con un viejo amigo." },
      { q: "«Quando sono arrivato, il treno ___ già partito.»" },
      { q: "«Hai visto Anna?» →", opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."] },
      { q: "«A Marco ___ ho risposto.»" },
      { q: "«Quanti ne vuoi? — ___ voglio due.»" },
      { q: "«___ meglio riposare.» (sería mejor)" },
      { q: "«Qui ___ i panini.» (se venden)" },
      { q: "El adverbio de «facile»: ___" },
      { q: "«Querría pasar la reunión al jueves.»" },
      { tr: "Ayer fui al médico porque me dolía la garganta." }
    ]
  }
});
