/* ============================================================
   Texto en la lengua del estudiante (es) para data/core/a2-01.js
   Las claves apuntan a los id de la capa neutra; los arrays se
   combinan por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.
   ============================================================ */
LINGUAI.addStrings("es", {
  "unit:a2-u01": { title: "Antes y ahora", grammarNote: "imperfetto · imperfetto frente a passato prossimo" },
  "lesson:a2-u01-l1": {
    theme: "Recuerdos",
    title: "Imperfetto: descripción y costumbre",
    objectives: [
      "formar el imperfetto en las tres conjugaciones",
      "describir cómo eran las cosas",
      "hablar de costumbres del pasado"
    ],
    theory: [
      {
        h: "Un pasado sin bordes",
        p: "El <strong>imperfetto</strong> no dice cuándo empezó ni cuándo terminó algo. Pinta el fondo, los estados y las costumbres: <em>da bambino abitavo in campagna</em>. Es tu imperfecto, con el mismo trabajo: «de pequeño vivía en el campo»."
      },
      {
        h: "La conjugación casi no tiene excepciones",
        p: "Raíz del infinitivo + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Cuatro verbos tienen la raíz rara: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo). Nada más: el imperfetto es el tiempo más regular del italiano, igual que el tuyo, que solo salva ser, ir y ver."
      },
      {
        h: "Tres usos típicos",
        list: [
          "<b>descripción</b>: <em>Era una giornata fredda, pioveva.</em>",
          "<b>costumbre</b>: <em>Ogni estate andavamo al mare.</em>",
          "<b>estado o sentimiento</b>: <em>Ero stanca, non avevo voglia di uscire.</em>"
        ]
      },
      {
        contrast: "Esta lección es un regalo: el reparto entre imperfecto y pretérito que ya haces en español funciona casi punto por punto en italiano. La diferencia está en el otro lado del par: donde tú dices «ayer comí» con el indefinido, el italiano usa el passato prossimo (<em>ieri ho mangiato</em>). El imperfetto en cambio se comporta como tu imperfecto sin sorpresas."
      }
    ],
    grammar: {
      title: "Imperfetto: conjugación",
      table: {
        head: ["persona", "parlare", "prendere", "dormire", "essere"],
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
        { tr: "De pequeño pasaba los veranos en casa de mis abuelos." },
        { tr: "Era un día gris y hacía frío." },
        { tr: "Antes fumaba, ahora lo he dejado." },
        { tr: "No sabía que vivías aquí." },
        { tr: "Mientras estudiaba, escuchaba la radio." },
        { tr: "¿A qué se dedicaba tu abuelo?" }
      ]
    },
    vocab: [
      "de pequeño",
      "en aquella época",
      "antes, antaño",
      "normalmente",
      "cada verano",
      "a menudo",
      "un recuerdo",
      "la infancia",
      "los abuelos",
      "el campo",
      "dejar de hacer algo",
      "lo echaba de menos"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "«Ogni estate andavamo al mare» describe:",
        opts: ["un solo viaje", "una costumbre repetida en el pasado", "un plan para el futuro"]
      },
      { q: "Completa: «Da bambino ___ in campagna.» (vivía, abitare)" },
      { q: "Completa: «___ una giornata fredda.» (era)" },
      {
        q: "Completa el recuerdo.",
        tr: "De pequeña pasaba los veranos en casa de mis abuelos. La casa era grande y cada noche cenábamos todos juntos."
      },
      { q: "«Antes fumaba, ahora lo he dejado.»" },
      { tr: "De pequeño jugaba al fútbol todas las tardes." },
      { tr: "De pequeña vivía en una casa cerca del mar." }
    ]
  },
  "lesson:a2-u01-l2": {
    theme: "Recuerdos",
    title: "Imperfetto frente a passato prossimo",
    objectives: [
      "elegir el pasado correcto",
      "combinar los dos en una misma frase",
      "reconocer las señales que apuntan a uno o a otro"
    ],
    theory: [
      {
        h: "Fondo frente a acontecimiento",
        p: "Es la decisión gramatical más importante de A2. El <strong>imperfetto</strong> pinta el fondo: lo que estaba pasando, cómo eran las cosas, lo que se repetía. El <strong>passato prossimo</strong> trae el acontecimiento: lo que pasó, lo que interrumpió el fondo, lo que ocurrió una vez."
      },
      {
        contrast: "El par es exactamente el tuyo: imperfecto para el fondo, tiempo perfectivo para el suceso. La única traducción que hay que rehacer es la del segundo: donde el español elige entre «comí» y «he comido» según la distancia, el italiano hablado del norte usa el passato prossimo para las dos cosas."
      },
      {
        h: "La pareja clásica",
        p: "<em><b>Mentre uscivo</b> di casa, <b>è squillato</b> il telefono.</em> Salir estaba en curso (imperfetto), el teléfono sonó en un punto (passato prossimo). Cambia los tiempos y la frase se vuelve absurda, igual que en «mientras salía, sonó el teléfono»."
      },
      {
        h: "Señales en el texto",
        list: [
          "imperfetto: <em>sempre, spesso, di solito, ogni giorno, mentre, da bambino</em>",
          "passato prossimo: <em>ieri, una volta, all'improvviso, l'anno scorso, per tre ore, due volte</em>"
        ]
      },
      {
        h: "Verbos que cambian de sentido",
        p: "Algunos verbos cambian de significado con el tiempo: <em>sapevo</em> (sabía, un estado) frente a <em>ho saputo</em> (me enteré, un momento); <em>conoscevo</em> (conocía a alguien) frente a <em>ho conosciuto</em> (lo conocí); <em>volevo</em> (quería) frente a <em>ho voluto</em> (quise, insistí). El español hace la misma pareja con sabía/supe y conocía/conocí: aquí tu intuición vale."
      }
    ],
    grammar: {
      title: "Qué tiempo elegir",
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
        { tr: "Mientras salía de casa, sonó el teléfono." },
        { tr: "Ayer trabajé tres horas.", note: "límites → passato prossimo" },
        { tr: "Cuando era joven trabajaba en un bar." },
        { tr: "Conocí a mi mujer en un concierto." },
        { tr: "No sabía que estabas aquí." },
        { tr: "De repente se fue la luz." }
      ]
    },
    vocab: [
      "mientras",
      "de repente",
      "de golpe",
      "el año pasado",
      "durante tres horas",
      "sonar (un teléfono)",
      "caerse",
      "ocurrir, pasar",
      "conocer / conocí",
      "saber / me enteré",
      "¿qué ha pasado?",
      "por suerte"
    ],
    exercises: [
      {
        q: "«___ (uscire, io) di casa quando ___ (squillare) il telefono.» ¿Qué tiempos?",
        opts: ["los dos imperfetto", "imperfetto + passato prossimo", "los dos passato prossimo"],
        why: "El fondo (salir) en imperfetto, el suceso (la llamada) en passato prossimo."
      },
      { q: "Pon la forma correcta.", tr: "Mientras comía, llegó Marco." },
      { q: "Pon la forma correcta.", tr: "Ayer trabajé tres horas, luego salí con amigos." },
      {
        q: "«Ho conosciuto Marco a Roma» significa:",
        opts: ["Conocía a Marco en Roma", "Conocí a Marco en Roma", "Conozco a Marco de Roma"]
      },
      {
        q: "«Ieri ho lavorato per tre ore.» ¿Por qué no el imperfetto?",
        opts: ["Porque es una costumbre", "Porque la duración tiene límites claros", "Porque es una descripción"]
      },
      {
        q: "¿Qué expresiones suelen ir con el imperfetto?",
        opts: ["ogni giorno", "ieri", "di solito", "all'improvviso", "da bambino"]
      },
      { q: "«No sabía que vivías aquí.»" },
      {
        q: "Completa la historia.",
        tr: "Era un día frío. Llovía y yo no tenía paraguas. De repente llegó el autobús."
      },
      { tr: "Mientras volvía a casa a pie, me encontré con un viejo amigo." },
      { tr: "De pequeño iba a la playa cada verano, pero el año pasado fui a la montaña." }
    ]
  },
  "lesson:a2-u01-l3": {
    theme: "Recuerdos",
    title: "Describir un cambio",
    objectives: [
      "comparar el pasado con el presente",
      "usar expresiones como non c'era più, adesso invece",
      "decir cómo ha cambiado algo"
    ],
    theory: [
      {
        h: "El contraste prima / adesso",
        p: "Poner dos tiempos uno al lado del otro es la manera de mostrar un cambio: <em><b>Prima</b> qui c'era un cinema, <b>adesso</b> c'è un supermercato.</em> La estructura es simple, pero exige alternar a conciencia entre el imperfetto (entonces) y el presente (hoy)."
      },
      {
        h: "C'era y c'erano",
        p: "El imperfetto de <em>c'è / ci sono</em> es <strong>c'era / c'erano</strong>: «había». Fíjate en que el italiano sí distingue singular y plural donde tu «había» sirve para los dos: <em>c'erano meno macchine</em>, no «c'era meno macchine»."
      },
      {
        h: "Expresiones de contraste",
        list: [
          "<em>prima… adesso / oggi</em> — antes… ahora",
          "<em>invece</em> — en cambio",
          "<em>non… più</em> — ya no: <em>non c'è più il mercato</em>",
          "<em>è cambiato molto</em> — ha cambiado mucho"
        ]
      },
      {
        tip: "<em>Non… più</em> abraza al verbo como <em>non… mai</em>: <em>non abito <b>più</b> qui</em>. En el passato prossimo <em>più</em> va entre auxiliar y participio: <em>non ho più visto</em>."
      }
    ],
    grammar: {
      title: "Pasado frente a presente",
      table: {
        head: ["entonces (imperfetto)", "hoy (presente)"],
        rows: [
          ["C'era un cinema.", "Adesso c'è un supermercato."],
          ["C'erano pochi turisti.", "Oggi ce ne sono troppi."],
          ["La gente si conosceva.", "Adesso nessuno saluta."],
          ["Non esisteva internet.", "Oggi tutti sono online."],
          ["Si viveva più lentamente.", "Adesso si corre sempre."]
        ]
      },
      examples: [
        { tr: "Antes aquí había un mercado, ahora es un aparcamiento." },
        { tr: "La ciudad ha cambiado mucho." },
        { tr: "Las tiendas de siempre ya no están." },
        { tr: "El barrio, en cambio, se ha animado." },
        { tr: "Cuando era pequeño, la gente jugaba en la calle." },
        { tr: "Ahora todo es distinto." }
      ]
    },
    vocab: [
      "había (sing. / pl.)",
      "cambiar",
      "ha cambiado mucho",
      "en cambio",
      "ya no",
      "en aquella época",
      "barrio",
      "tráfico",
      "abarrotado",
      "tranquilo",
      "volverse, convertirse en",
      "mejor / peor"
    ],
    exercises: [
      { q: "El imperfetto de «c'è»: ___" },
      { q: "El imperfetto de «ci sono»: ___" },
      { q: "Completa: «Non abito ___ qui.» (ya no vivo aquí)" },
      {
        q: "¿Dónde va «più» en el passato prossimo?",
        opts: ["Delante de non", "Entre el auxiliar y el participio", "Al final"],
        why: "Non ho più visto, igual que già y mai."
      },
      {
        q: "Completa la descripción del cambio.",
        tr: "Antes aquí había un cine, ahora hay un supermercado. El barrio ha cambiado mucho."
      },
      { q: "«Las tiendas de siempre ya no están.»" },
      { tr: "Cuando era pequeño, la gente jugaba en la calle." },
      { q: "Relaciona.", pairs: ["en cambio", "abarrotado", "volverse", "tráfico"] },
      { tr: "Hace veinte años había menos coches y más tiendas de barrio." },
      { tr: "Mi ciudad ha cambiado mucho en los últimos diez años." }
    ]
  },
  "lesson:a2-u01-l4": {
    theme: "Recuerdos",
    title: "Hablar del pasado",
    objectives: [
      "mantener una conversación sobre recuerdos",
      "reaccionar al relato de otra persona",
      "usar el trapassato prossimo en casos sencillos"
    ],
    theory: [
      {
        h: "Reaccionar es obligatorio",
        p: "La conversación italiana no tolera al oyente mudo. Mientras alguien cuenta algo, se sueltan <em>davvero?</em>, <em>ma dai!</em>, <em>e poi?</em>, <em>che bello!</em>, <em>mamma mia</em>. Callarse se lee como falta de interés, no como educación. Aquí tu cultura conversacional ayuda: el español hace lo mismo con «¿en serio?», «¡anda ya!», «¿y qué pasó?»."
      },
      {
        h: "Trapassato prossimo: el pasado antes del pasado",
        p: "Imperfetto de <em>avere/essere</em> + participio: <em>avevo mangiato</em>, <em>ero uscito</em>. Es tu pluscuamperfecto, construido igual: se usa cuando un hecho precede a otro: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em>"
      },
      {
        h: "Cuándo hace falta",
        p: "Sin él el orden de los hechos queda turbio. <em>Quando sono arrivato, il treno è partito</em> significa que el tren salió <b>después</b> de que yo llegara. <em>Era già partito</em> significa que salió <b>antes</b>."
      },
      {
        tip: "<em>Ti ricordi quando…?</em> es la apertura estándar de una conversación de recuerdos. La respuesta: <em>Certo che me lo ricordo!</em>"
      }
    ],
    grammar: {
      title: "Trapassato prossimo y reacciones",
      table: {
        head: ["construcción", "ejemplo", "en español"],
        rows: [
          ["avevo + participio", "Avevo già mangiato.", "Ya había comido."],
          ["ero + participio", "Ero appena uscito.", "Acababa de salir."],
          ["reacción", "Davvero? / Ma dai!", "¿En serio? / ¡Anda ya!"],
          ["reacción", "E poi? Che è successo?", "¿Y luego? ¿Qué pasó?"],
          ["reacción", "Mamma mia! / Che bello!", "¡Madre mía! / ¡Qué bien!"],
          ["pregunta", "Ti ricordi quando…?", "¿Te acuerdas de cuando…?"]
        ]
      },
      examples: [
        { tr: "Cuando llegué, la fiesta ya había terminado." },
        { tr: "No salí porque había prometido trabajar un poco." },
        { tr: "¿Te acuerdas de cuando fuimos a Sicilia?" },
        { tr: "¡Claro que me acuerdo!" },
        { tr: "¡Anda ya, no me lo creo!" },
        { tr: "¿Y qué pasó después?" }
      ]
    },
    vocab: [
      "¿te acuerdas?",
      "me acuerdo",
      "olvidar",
      "¿en serio?",
      "¡anda ya!",
      "¡qué bien!",
      "¡madre mía!",
      "¿y luego?",
      "¿qué pasó?",
      "ya había…",
      "hace un momento",
      "un momento embarazoso"
    ],
    exercises: [
      {
        q: "«Quando sono arrivato, il treno era già partito.» ¿Qué ocurrió primero?",
        opts: ["Mi llegada", "La salida del tren", "Las dos a la vez"]
      },
      { q: "Completa: «Quando sono arrivata, la festa ___ già finita.»" },
      { q: "Completa: «Non avevo fame perché ___ già mangiato.»" },
      { q: "Relaciona las reacciones.", pairs: ["¡anda ya!", "¿en serio?", "¿y luego?", "¡qué bien!"] },
      { q: "Completa.", tr: "Cuando salimos ya había dejado de llover, pero la calle seguía mojada." },
      { q: "«¿Te acuerdas de cuando fuimos a Sicilia?»" },
      {
        q: "Una amiga te cuenta sus vacaciones.",
        setting: "Un café después del trabajo, en septiembre.",
        lines: [
          { tr: "En agosto fui a Apulia con mi familia." },
          { tr: "Reacciona con interés y pregunta qué tal.", answerTr: "¡Qué bien! ¿Qué tal fue?" },
          { tr: "Genial, pero el primer día perdimos las maletas." },
          { tr: "Reacciona con empatía y pregunta qué pasó luego.", answerTr: "¡Vaya! ¿Y luego?" },
          { tr: "Las encontraron dos días después. ¡Por suerte!" }
        ]
      },
      { tr: "No salí porque había prometido trabajar un poco." },
      { tr: "Cuando volví, mi hermana ya se había ido." },
      { tr: "¿Te acuerdas de cuando íbamos a la misma clase?" }
    ]
  },
  "lesson:a2-u01-test": {
    theme: "Test",
    title: "Test de la unidad 1",
    objectives: ["comprobar el imperfetto, su contraste con el passato prossimo y el trapassato"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      {  },
      { q: "Pon el tiempo correcto.", tr: "Mientras salía, sonó el teléfono." },
      { q: "Pon el tiempo correcto.", tr: "Ayer trabajé cuatro horas." },
      { q: "«Ho conosciuto Anna» significa:", opts: ["Conocía a Anna", "Conocí a Anna", "Conozco a Anna"] },
      { q: "«Prima qui ___ un cinema.» (había)" },
      { q: "«Non abito ___ qui.» (ya no)" },
      { q: "«Quando sono arrivato, il treno ___ già partito.»" },
      { tr: "De pequeño pasaba todos los veranos en el mar con mis abuelos." },
      { tr: "Mientras volvía a casa a pie, me encontré con un viejo amigo." }
    ]
  },
  "unit:a2-u02": { title: "Viajar", grammarNote: "futuro semplice · reservas · estación y hotel" },
  "lesson:a2-u02-l1": {
    theme: "Viajes",
    title: "Trenes y billetes",
    objectives: [
      "comprar un billete y entender los anuncios de la estación",
      "manejar un cambio de vía y un retraso",
      "conocer la diferencia entre los tipos de tren"
    ],
    theory: [
      {
        h: "Tipos de tren",
        p: "El <strong>regionale</strong> para en todas partes, es barato y no lleva plaza reservada. El <strong>Intercity</strong> es el escalón intermedio. El <strong>Frecciarossa / Italo</strong> son los rápidos con reserva obligatoria: el billete vale para ese tren concreto a esa hora concreta."
      },
      {
        h: "Validar el billete",
        p: "Un billete <em>regionale</em> comprado sin hora concreta hay que <strong>validarlo</strong> (<em>convalidare</em>) en la máquina amarilla o verde antes de llegar al andén. No validarlo es multa, y los revisores no aceptan explicaciones. Los billetes comprados en la app ya están activos. Si vienes de Renfe, donde el control se hace al acceder, este paso es fácil de olvidar."
      },
      {
        h: "Anuncios que hay que entender",
        list: [
          "<em>Il treno viaggia con un ritardo di venti minuti</em> — el tren lleva veinte minutos de retraso",
          "<em>Cambio binario: il treno partirà dal binario 8</em> — cambio de vía",
          "<em>È in arrivo al binario 3</em> — está llegando a la vía 3",
          "<em>Il treno è soppresso</em> — el tren está suprimido"
        ]
      },
      {
        tip: "<em>Binario</em> significa a la vez el andén y la vía. El número solo aparece en el panel diez o quince minutos antes de la salida, algo que descoloca a quien está acostumbrado a andenes fijos."
      }
    ],
    grammar: {
      title: "Frases en la estación",
      table: {
        head: ["situación", "en italiano", "en español"],
        rows: [
          ["billete", "Un biglietto per Firenze, andata e ritorno.", "Un billete de ida y vuelta a Florencia."],
          ["solo ida", "Solo andata.", "Solo ida."],
          ["vía", "Da quale binario parte?", "¿De qué vía sale?"],
          [
            "retraso",
            "Il treno è in ritardo di venti minuti.",
            "El tren lleva veinte minutos de retraso."
          ],
          ["transbordo", "Devo cambiare treno?", "¿Tengo que cambiar de tren?"],
          ["validar", "Devo convalidare il biglietto?", "¿Tengo que validar el billete?"]
        ]
      },
      examples: [
        { tr: "Un billete a Nápoles para mañana por la mañana, por favor." },
        { tr: "¿Primera o segunda clase?" },
        { tr: "¿Es directo o tengo que hacer transbordo?" },
        { tr: "El tren de las 14:35 está suprimido." },
        { tr: "¿Está ocupado este asiento?" },
        { tr: "Perdone, ¿este es el vagón 5?" }
      ]
    },
    vocab: [
      "billete",
      "ida y vuelta",
      "solo ida",
      "vía, andén",
      "vagón",
      "asiento",
      "cambiar de tren",
      "transbordo",
      "retraso",
      "suprimido",
      "validar un billete",
      "revisor"
    ],
    exercises: [
      {
        q: "¿Qué significa «il treno è soppresso»?",
        opts: ["El tren lleva retraso", "El tren está suprimido", "El tren va lleno"]
      },
      {
        q: "¿Qué billete hay que validar antes de subir?",
        opts: ["Un Frecciarossa con reserva", "Un regionale sin hora concreta", "Todos los billetes"]
      },
      { q: "Completa: «Da quale ___ parte il treno?»" },
      { q: "Completa: «Un biglietto ___ e ritorno.»" },
      { q: "Relaciona.", pairs: ["vagón", "transbordo", "retraso", "validar un billete"] },
      { q: "«¿Tengo que cambiar de tren?»" },
      {
        q: "Estás comprando un billete en la ventanilla.",
        setting: "La taquilla, con cola detrás de ti.",
        lines: [
          { tr: "Buenos días, ¿qué desea?" },
          {
            tr: "Pide un billete a Florencia para esta tarde.",
            answerTr: "Un billete a Florencia para esta tarde."
          },
          { tr: "¿Regional o Frecciarossa?" },
          { tr: "Pregunta cuánto más tarda el regional.", answerTr: "¿Cuánto más tarda el regional?" },
          { tr: "Una hora y media más. El Freccia son cuarenta y dos euros." },
          {
            tr: "Elige el Frecciarossa y pregunta por la vía.",
            answerTr: "Cojo el Frecciarossa. ¿De qué vía sale?"
          }
        ]
      },
      {
        q: "Completa el anuncio de la estación.",
        tr: "El tren regional a Bolonia lleva veinte minutos de retraso. Cambio de vía: saldrá de la vía 8."
      },
      { tr: "El tren a Roma sale de la vía doce, con diez minutos de retraso." },
      { tr: "Perdone, ¿tengo que validar este billete?" }
    ]
  },
  "lesson:a2-u02-l2": {
    theme: "Viajes",
    title: "Futuro semplice",
    objectives: [
      "formar el futuro simple",
      "conocer las raíces irregulares",
      "usar el futuro para expresar una suposición"
    ],
    theory: [
      {
        h: "Cómo se forma",
        p: "Coges el infinitivo, quitas la <em>-e</em> final y añades <em>-ò, -ai, -à, -emo, -ete, -anno</em>. Los verbos en <b>-are</b> además cambian esa <em>a</em> por una <em>e</em>: <em>parlare → parler-ò</em>. Es tu futuro: infinitivo más terminación, sin auxiliar."
      },
      {
        h: "Las raíces irregulares: hay que sabérselas",
        p: "<em>essere → sar-</em>, <em>avere → avr-</em>, <em>andare → andr-</em>, <em>venire → verr-</em>, <em>volere → vorr-</em>, <em>potere → potr-</em>, <em>dovere → dovr-</em>, <em>sapere → sapr-</em>, <em>vedere → vedr-</em>, <em>bere → berr-</em>, <em>rimanere → rimarr-</em>, <em>fare → far-</em>. Casi todas tienen gemela en español (habré, podré, sabré, vendré, querré), así que la lista se aprende sola. La excepción es <em>andr-</em>, porque tu «iré» viene de otro verbo."
      },
      {
        h: "El futuro no habla solo del futuro",
        p: "Un uso muy frecuente es la <b>suposición sobre el presente</b>: <em>Che ore sono? — <b>Saranno</b> le tre.</em> O <em>Dov'è Marco? — Sarà a casa.</em> El español hace exactamente lo mismo con «serán las tres» y «estará en casa»: no hay nada que aprender, solo que reconocerlo."
      },
      {
        trap: "Para un futuro cercano y seguro los italianos usan más el <b>presente</b>: <em>domani parto alle sette</em>. Ahí el futuro suena rígido, o menos seguro. Resérvalo para predicciones y planes lejanos."
      }
    ],
    grammar: {
      title: "Futuro semplice",
      table: {
        head: ["persona", "parlare", "prendere", "partire", "essere"],
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
        { tr: "El año que viene viviré en Italia." },
        { tr: "Te llamo en cuanto llegue." },
        { tr: "Mañana salimos a las siete.", note: "futuro cercano: presente" },
        { tr: "¿Qué hora es? — Serán las tres.", note: "una suposición" },
        { tr: "¿Dónde estará mi billete?" },
        { tr: "No habrá tiempo para todo." }
      ]
    },
    vocab: [
      "mañana",
      "pasado mañana",
      "la semana que viene",
      "dentro de tres días",
      "en cuanto",
      "quizá",
      "seguro",
      "probablemente",
      "un plan",
      "mudarse",
      "reservar con antelación",
      "ya veremos"
    ],
    exercises: [
      {  },
      {  },
      {  },
      {
        q: "¿Qué les pasa a los verbos en -are en el futuro?",
        opts: ["Nada", "La a se convierte en e antes de la terminación", "Se dobla la consonante"]
      },
      { q: "El futuro de «avere», forma io: ___" },
      { q: "El futuro de «venire», forma loro: ___" },
      {
        q: "«Saranno le tre» significa:",
        opts: ["Serán las tres (en el futuro)", "Serán las tres (suposición)", "Eran las tres"]
      },
      { q: "Completa los planes.", tr: "El año que viene me mudaré a Bolonia y buscaré trabajo allí." },
      { tr: "Te llamo en cuanto llegue a la estación." },
      { tr: "El año que viene viviré en Italia." }
    ]
  },
  "lesson:a2-u02-l3": {
    theme: "Viajes",
    title: "Hoteles y alojamiento",
    objectives: ["hacer el check-in en un hotel", "avisar de un problema en la habitación", "preguntar por los servicios y el check-out"],
    theory: [
      {
        h: "El check-in a la italiana",
        p: "En recepción te pedirán el documento: <em>Un documento, per favore</em>. La ley obliga a registrar a los huéspedes ante la policía, así que el pasaporte o el DNI es obligatorio, también en los alquileres turísticos. El procedimiento es el mismo que conoces."
      },
      {
        h: "Tassa di soggiorno",
        p: "Casi todas las ciudades italianas cobran una <strong>tasa turística</strong> (de 1 a 7 euros por persona y noche), que se paga in situ y normalmente en efectivo, sea cual sea el precio pagado online. No es un timo: es un impuesto municipal, y las plataformas de reserva rara vez lo mencionan."
      },
      {
        h: "Avisar de un problema",
        p: "La construcción es sencilla: <em>non funziona</em> + la cosa. <em>L'aria condizionata non funziona.</em> Y <em>manca</em> («falta»): <em>Mancano gli asciugamani.</em> Ojo con este último: como en tu «faltan las toallas», el sujeto es la cosa, así que el verbo va en plural."
      },
      {
        tip: "<em>Camera doppia</em> es una habitación para dos, con una cama grande (<em>matrimoniale</em>) o con dos (<em>due letti singoli</em>). Conviene precisarlo al reservar, porque lo que viene por defecto varía."
      }
    ],
    grammar: {
      title: "Frases de hotel",
      table: {
        head: ["situación", "en italiano", "en español"],
        rows: [
          ["check-in", "Ho una prenotazione a nome Smith.", "Tengo una reserva a nombre de Smith."],
          ["tipo de habitación", "Una camera doppia con bagno privato.", "Una habitación doble con baño privado."],
          ["desayuno", "La colazione è inclusa?", "¿El desayuno está incluido?"],
          ["un problema", "L'aria condizionata non funziona.", "El aire acondicionado no funciona."],
          ["algo que falta", "Mancano gli asciugamani.", "Faltan las toallas."],
          ["check-out", "A che ora è il check-out?", "¿A qué hora es el check-out?"]
        ]
      },
      examples: [
        { tr: "Buenas noches, tengo una reserva para tres noches." },
        { tr: "Su documento, por favor." },
        { tr: "La tasa turística son dos euros por persona y noche." },
        { tr: "¿Hay wifi en la habitación?" },
        { tr: "¿Puedo dejar las maletas después del check-out?" },
        { tr: "La habitación está en la tercera planta, el ascensor está ahí." }
      ]
    },
    vocab: [
      "reserva",
      "habitación individual / doble",
      "con cama de matrimonio",
      "llave / tarjeta",
      "planta",
      "ascensor",
      "toalla",
      "sábana",
      "tasa turística",
      "no funciona",
      "falta",
      "check-out"
    ],
    exercises: [
      {
        q: "¿Qué es la «tassa di soggiorno»?",
        opts: ["Una fianza", "Una tasa turística que se paga in situ", "Un suplemento de limpieza"]
      },
      { q: "Completa: «Ho una ___ a nome Smith.»" },
      { q: "Completa: «L'aria condizionata non ___.»" },
      { q: "Completa: «___ gli asciugamani.» (faltan las toallas)" },
      { q: "Relaciona.", pairs: ["ascensor", "sábana", "planta", "llave"] },
      { q: "«¿El desayuno está incluido?»" },
      {
        q: "Estás haciendo el check-in en un hotel.",
        setting: "La recepción, de noche, después de un viaje largo.",
        lines: [
          { tr: "¡Buenas noches! ¿Tiene reserva?" },
          {
            tr: "Confirma, di tu nombre y cuántas noches te quedas.",
            answerTr: "Sí, a nombre de Smith, para tres noches."
          },
          { tr: "Perfecto. Su documento, por favor. La tasa turística son dos euros por noche." },
          { tr: "Pregunta si el desayuno está incluido.", answerTr: "¿El desayuno está incluido?" },
          { tr: "Sí, de siete a diez, en la primera planta." }
        ]
      },
      {
        q: "Avisa de un problema.",
        tr: "Hola, llamo de la habitación 204: el wifi no funciona y faltan toallas limpias."
      },
      { tr: "La habitación está en la tercera planta, el desayuno es de siete a diez." },
      { tr: "¿Puedo dejar las maletas después del check-out?" }
    ]
  },
  "lesson:a2-u02-l4": {
    theme: "Viajes",
    title: "Futuro anteriore y planificación",
    objectives: [
      "formar el futuro anteriore",
      "ordenar dos acciones futuras",
      "expresar una suposición sobre el pasado"
    ],
    theory: [
      {
        h: "El futuro anterior al futuro",
        p: "<strong>Futuro anteriore</strong> = el futuro de <em>avere/essere</em> + participio: <em>avrò finito</em>, <em>sarò arrivato</em>. Describe una acción terminada <b>antes</b> de otra futura: <em>Quando <b>avrò finito</b> il lavoro, ti chiamerò.</em> Es tu futuro compuesto: «cuando haya terminado»."
      },
      {
        h: "Al hablar se acorta",
        p: "En vez de <em>quando avrò finito, ti chiamerò</em>, los italianos dicen <em>quando finisco, ti chiamo</em>. El futuro anteriore se queda en el registro cuidado y en la escritura, pero hay que saber entenderlo."
      },
      {
        h: "Una suposición sobre el pasado",
        p: "Este uso está vivo y es frecuente: <em>Non risponde… <b>avrà perso</b> il treno.</em> («habrá perdido el tren»). Es el gemelo en pasado de la suposición con el futuro simple, y el español lo calca."
      },
      {
        tip: "Señales que suelen preceder al futuro anteriore: <em>quando, appena, dopo che, una volta che</em>."
      }
    ],
    grammar: {
      title: "Futuro anteriore",
      table: {
        head: ["persona", "avere + participio", "essere + participio"],
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
        { tr: "Cuando haya terminado, te llamo." },
        { tr: "En cuanto lleguemos, te escribimos." },
        { tr: "No contesta, habrá perdido el tren." },
        { tr: "¿Dónde habrá ido a parar mi billete?" },
        { tr: "Para el viernes lo habremos reservado todo." },
        { tr: "Habrá sido un malentendido." }
      ]
    },
    vocab: [
      "en cuanto",
      "una vez que",
      "para (una fecha límite)",
      "malentendido",
      "un imprevisto",
      "itinerario",
      "salida / llegada",
      "equipaje de mano",
      "embarque",
      "vuelo",
      "escala",
      "cancelar"
    ],
    exercises: [
      { q: "El futuro anteriore de «finire», forma io: ___" },
      { q: "El futuro anteriore de «partire», forma noi (grupo mixto): ___" },
      {
        q: "«Avrà perso il treno» suele significar:",
        opts: ["Perderá el tren", "Habrá perdido el tren", "Seguro que perdió el tren"]
      },
      { q: "Completa.", tr: "Cuando lleguemos al hotel, te escribimos." },
      { q: "«Cuando haya terminado de trabajar, te llamo.»" },
      {
        q: "¿Qué frase es más coloquial?",
        opts: ["Quando avrò finito, ti chiamerò.", "Quando finisco, ti chiamo.", "Las dos igual."]
      },
      { q: "Relaciona.", pairs: ["embarque", "vuelo", "para (fecha límite)", "cancelar"] },
      { tr: "Para el viernes lo habremos reservado todo." },
      { tr: "En cuanto lleguemos al aeropuerto, te mandamos un mensaje." },
      { tr: "No coge el teléfono, habrá perdido la conexión." }
    ]
  },
  "lesson:a2-u02-test": {
    theme: "Test",
    title: "Test de la unidad 2",
    objectives: ["comprobar los futuros y el vocabulario de estación y hotel"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      {  },
      { q: "El futuro de «andare», forma io: ___" },
      { q: "El futuro de «potere», forma noi: ___" },
      { q: "«Il treno è soppresso»:", opts: ["con retraso", "suprimido", "lleno"] },
      { q: "«Da quale ___ parte?»" },
      { q: "«L'aria condizionata non ___.»" },
      { q: "El futuro anteriore de «finire», io: ___" },
      { q: "«Tengo una reserva para tres noches.»" },
      { tr: "El vuelo a Varsovia sale de la puerta B12, con veinte minutos de retraso." },
      { tr: "Un billete solo ida a Bolonia, por favor." }
    ]
  },
  "unit:a2-u03": {
    title: "Los pronombres de complemento",
    grammarNote: "pronombres directos e indirectos · concordancia del participio"
  },
  "lesson:a2-u03-l1": {
    theme: "Gramática",
    title: "Los pronombres de complemento directo",
    objectives: [
      "sustituir un sustantivo por un pronombre",
      "colocar el pronombre en su sitio",
      "dejar de repetir la misma palabra"
    ],
    theory: [
      {
        h: "Para qué sirven",
        p: "Repetir el sustantivo suena pesado en italiano. <em>Compri il giornale? — Sì, <b>lo</b> compro.</em> El pronombre ocupa el lugar de lo ya sabido. Sin él pareces un ejercicio de libro, no una conversación."
      },
      {
        h: "Las formas",
        p: "<em>mi</em> (me), <em>ti</em> (te), <strong>lo</strong> (lo, masculino), <strong>la</strong> (la, femenino), <em>ci</em> (nos), <em>vi</em> (os), <strong>li</strong> (los), <strong>le</strong> (las)."
      },
      {
        contrast: "El sistema es el tuyo, casi forma por forma: lo/la/li/le frente a lo/la/los/las, y la colocación delante del verbo conjugado (<em>lo vedo</em> = «lo veo») o pegada al infinitivo (<em>voglio vederlo</em> = «quiero verlo», y también <em>lo voglio vedere</em>). Aprovecha la coincidencia, pero evita el leísmo: en italiano <em>lo vedo</em> es lo único correcto, no existe «gli vedo»."
      },
      {
        trap: "<b>Lo</b> y <b>la</b> se apocopan delante de vocal: <em>l'ho visto</em>, <em>l'ho vista</em>. <b>Li</b> y <b>le</b> no se apocopan nunca."
      }
    ],
    grammar: {
      title: "Pronombres de complemento directo",
      table: {
        head: ["pronombre", "sustituye a", "ejemplo"],
        rows: [
          ["mi", "me", "Mi chiami stasera?"],
          ["ti", "te", "Ti vedo domani."],
          ["lo", "una cosa/persona masculina", "Il libro? Lo leggo stasera."],
          ["la", "una cosa/persona femenina", "La pizza? La prendo io."],
          ["ci", "nos", "Ci aspetti?"],
          ["vi", "os", "Vi chiamo dopo."],
          ["li", "los (m)", "I biglietti? Li ho comprati."],
          ["le", "las (f)", "Le chiavi? Le ho perse."]
        ]
      },
      examples: [
        { tr: "¿Conoces a Marco? — Sí, lo conozco bien." },
        { tr: "¿Coges el coche? — No, no lo cojo." },
        { tr: "¿Dónde están las llaves? No las encuentro." },
        { tr: "Quiero verlo enseguida." },
        { tr: "¿Me esperas cinco minutos?" },
        { tr: "Nos vemos mañana." }
      ]
    },
    vocab: [
      "conocer (a una persona, un sitio)",
      "saber (un dato), saber hacer",
      "encontrar",
      "perder",
      "esperar a",
      "llamar",
      "invitar",
      "acompañar a alguien",
      "periódico",
      "llaves",
      "enseguida",
      "más tarde"
    ],
    exercises: [
      {
        q: "«Conosci Anna?»: ¿cómo respondes que sí, con pronombre?",
        opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."]
      },
      { q: "Completa: «I biglietti? ___ ho comprati ieri.»" },
      { q: "Completa: «La pizza? ___ prendo io.»" },
      {
        q: "¿Qué frases son correctas?",
        opts: ["Lo voglio vedere.", "Voglio vederlo.", "Las dos formas son correctas."]
      },
      {
        q: "Sustituye las repeticiones por pronombres.",
        tr: "— ¿Compras el periódico? — Sí, lo compro. — ¿Y las revistas? — No, no las compro."
      },
      { q: "«No lo conozco.»" },
      {
        q: "¿Qué pronombres directos pueden apocoparse delante de vocal?",
        opts: ["lo", "la", "li", "le"]
      },
      { tr: "¿Me esperas cinco minutos?" },
      { tr: "No encuentro las llaves, quizá las he dejado en la oficina." },
      { tr: "¿Conoces ese restaurante? — Sí, lo conozco bien." }
    ]
  },
  "lesson:a2-u03-l2": {
    theme: "Gramática",
    title: "La concordancia del participio con el pronombre",
    objectives: [
      "concordar el participio con el pronombre directo",
      "distinguir los casos en que la concordancia es obligatoria",
      "escribir bien l'ho visto / l'ho vista"
    ],
    theory: [
      {
        h: "La regla en una frase",
        p: "En los tiempos compuestos con <em>avere</em>, el participio <b>concuerda con el pronombre de complemento directo</b> que va delante del verbo. <em>Ho visto Anna</em> → <em><b>L'ho vista</b></em>. Sin pronombre el participio no cambia."
      },
      {
        contrast: "Aquí el español no ayuda: tú dices «la he visto», nunca «la he vista». La concordancia del participio con el complemento directo se perdió en español y se conserva en italiano, así que es una regla que hay que instalar de cero, sin intuición que la sostenga."
      },
      {
        h: "Cuatro formas",
        list: [
          "<em>lo</em> → <em>l'ho vist<b>o</b></em>",
          "<em>la</em> → <em>l'ho vist<b>a</b></em>",
          "<em>li</em> → <em>li ho vist<b>i</b></em>",
          "<em>le</em> → <em>le ho vist<b>e</b></em>"
        ]
      },
      {
        trap: "La apócope <em>l'</em> esconde el género, así que la <b>terminación del participio</b> es lo único que dice de quién se habla. <em>L'ho visto</em> (a él) y <em>l'ho vista</em> (a ella) se diferencian en una letra y significan cosas distintas."
      },
      {
        h: "Dónde NO hay concordancia",
        p: "Con un pronombre <b>indirecto</b> el participio no cambia: <em>Le ho parlato</em> (le hablé a ella), nunca «parlata». Es el error más común de esta fase: hay que saber si el pronombre es directo o indirecto."
      }
    ],
    grammar: {
      title: "Concordancia del participio",
      table: {
        head: ["frase completa", "con pronombre", "nota"],
        rows: [
          ["Ho visto Marco.", "L'ho visto.", "lo → -o"],
          ["Ho visto Anna.", "L'ho vista.", "la → -a"],
          ["Ho comprato i libri.", "Li ho comprati.", "li → -i"],
          ["Ho perso le chiavi.", "Le ho perse.", "le → -e"],
          ["Ho parlato a Anna.", "Le ho parlato.", "indirecto → sin concordancia"],
          ["Ho mangiato la pizza.", "L'ho mangiata.", "las cosas también cuentan"]
        ]
      },
      examples: [
        { tr: "¿Has visto a Giulia? — Sí, la vi ayer." },
        { tr: "¿Los documentos? Ya los he enviado." },
        { tr: "¿Las fotos? Todavía no las he mirado." },
        { tr: "Le escribí un correo.", note: "indirecto: sin concordancia" },
        { tr: "La conocí en Roma." },
        { tr: "Nos invitaron a la fiesta." }
      ]
    },
    vocab: [
      "enviar",
      "mirar",
      "recibir",
      "devolver",
      "prestar",
      "documento",
      "foto",
      "mensaje",
      "correo electrónico",
      "todavía",
      "ya",
      "por casualidad"
    ],
    exercises: [
      {
        q: "«Hai visto Anna?»: la respuesta correcta es:",
        opts: ["Sì, l'ho visto.", "Sì, l'ho vista.", "Sì, le ho vista."]
      },
      {
        q: "Completa: «I libri? ___ ho comprat___.» Escribe las dos partes separadas por un espacio",
        hint: "pronombre + terminación del participio",
        why: "Li ho comprati: el pronombre li impone la terminación -i."
      },
      { q: "Completa la terminación: «Le chiavi? Le ho pers___.»" },
      {
        q: "«Le ho parlato»: ¿por qué no «parlata»?",
        opts: ["Es un error", "Porque «le» aquí es indirecto (a ella)", "Porque parlare es irregular"]
      },
      { q: "Completa las terminaciones.", tr: "¿El correo? Ya lo he enviado. ¿Las fotos? Todavía no las he mirado." },
      { q: "«La conocí en Roma.»" },
      {
        q: "¿En qué frases tiene que concordar el participio?",
        opts: ["L'ho vista.", "Le ho parlato.", "Li ho invitati.", "Gli ho scritto."]
      },
      { tr: "Ya he enviado los documentos." },
      { tr: "Todavía no he mirado las fotos del viaje." },
      { tr: "¿Has visto a Giulia? — Sí, la vi anoche." }
    ]
  },
  "lesson:a2-u03-l3": {
    theme: "Gramática",
    title: "Los pronombres de complemento indirecto",
    objectives: [
      "distinguir el complemento directo del indirecto",
      "usar bien gli y le",
      "conocer los verbos que piden complemento indirecto"
    ],
    theory: [
      {
        h: "A quién, no a quién ves",
        p: "Un pronombre <b>indirecto</b> sustituye a <em>a + persona</em>: <em>Telefono a Marco → <b>Gli</b> telefono.</em> Un pronombre <b>directo</b> sustituye a un sustantivo sin preposición: <em>Vedo Marco → <b>Lo</b> vedo.</em>"
      },
      {
        h: "Las formas",
        p: "<em>mi, ti, <b>gli</b> (a él), <b>le</b> (a ella), ci, vi, <b>gli</b> (a ellos)</em>. En registro formal «a ellos» es <em>loro</em>, colocado detrás del verbo: <em>Telefono loro</em>, pero al hablar es casi siempre <em>gli</em>. Fíjate en que el italiano distingue por género donde tu «le» sirve para él y para ella."
      },
      {
        h: "Verbos que te pillan",
        p: "Varios verbos italianos piden complemento indirecto donde el español usa uno directo: <em>telefonare a</em> (llamar a alguien), <em>rispondere a</em>, <em>chiedere a</em>, <em>credere a</em>, <em>piacere a</em>, <em>dispiacere a</em>. «Lo telefono» está mal: es <em>gli telefono</em>, literalmente «le telefoneo». Con <em>rispondere</em> y <em>credere</em> tu intuición sí acierta, porque también dices «le respondo» y «le creo»."
      },
      {
        trap: "<b>Gli</b> hace dos trabajos completamente distintos: es artículo (<em>gli amici</em>) y pronombre (<em>gli parlo</em>). Lo decide la posición: el artículo va delante de un sustantivo, el pronombre delante de un verbo."
      }
    ],
    grammar: {
      title: "Directo frente a indirecto",
      table: {
        head: ["verbo", "tipo", "ejemplo"],
        rows: [
          ["vedere qualcuno", "directo", "Lo vedo domani."],
          ["telefonare a qualcuno", "indirecto", "Gli telefono domani."],
          ["conoscere qualcuno", "directo", "La conosco bene."],
          ["scrivere a qualcuno", "indirecto", "Le scrivo una mail."],
          ["aspettare qualcuno", "directo", "Ti aspetto."],
          ["rispondere a qualcuno", "indirecto", "Gli rispondo subito."]
        ]
      },
      examples: [
        { tr: "¿Llamaste a Marco? — Sí, lo llamé ayer." },
        { tr: "¿Qué le dijiste?" },
        { tr: "No le creo en absoluto." },
        { tr: "Nos respondieron enseguida." },
        { tr: "A ella le gusta mucho viajar." },
        { tr: "Quiero hablar con él hoy." }
      ]
    },
    vocab: [
      "llamar por teléfono (a alguien)",
      "responder (a alguien)",
      "escribir a",
      "preguntar a alguien",
      "decir a alguien",
      "creer a alguien",
      "regalar",
      "prestar a alguien",
      "enviar a alguien",
      "explicar a alguien",
      "aconsejar a alguien",
      "en absoluto"
    ],
    exercises: [
      { q: "«Telefono a Marco» → con pronombre:", opts: ["Lo telefono.", "Gli telefono.", "Le telefono."] },
      { q: "«Vedo Marco» → con pronombre:", opts: ["Lo vedo.", "Gli vedo.", "Le vedo."] },
      { q: "Completa: «Che cosa ___ hai detto?» (a ella)" },
      { q: "Completa: «Non ___ credo.» (a él)" },
      {
        q: "¿Qué verbos piden complemento indirecto (a qualcuno)?",
        opts: ["telefonare", "vedere", "rispondere", "aspettare", "credere"]
      },
      {
        q: "Completa los pronombres.",
        tr: "Le escribí a Giulia: le mandé un correo. Marco no contesta, lo llamo mañana."
      },
      { q: "«Quiero hablar con él hoy.»" },
      { q: "Relaciona.", pairs: ["regalar", "prestar a alguien", "explicar a alguien", "aconsejar a alguien"] },
      { tr: "Le escribí ayer, pero todavía no me ha contestado." },
      { tr: "Lo llamo esta noche y se lo explico todo." }
    ]
  },
  "lesson:a2-u03-l4": {
    theme: "Gramática",
    title: "El imperativo con pronombres",
    objectives: [
      "formar el imperativo en todas las personas",
      "pegar un pronombre al imperativo",
      "formar el negativo de la forma tu"
    ],
    theory: [
      {
        h: "Las formas básicas",
        p: "<b>tu</b>: <em>-are → -a</em> (parla), <em>-ere/-ire → -i</em> (prendi, senti). <b>Lei</b>: al revés, <em>-are → -i</em> (parli), <em>-ere/-ire → -a</em> (prenda, senta). <b>noi</b>: igual que el presente (parliamo). <b>voi</b>: igual que el presente (parlate). La forma de cortesía sale del subjuntivo, exactamente como tu «hable usted»."
      },
      {
        h: "El negativo de la forma tu",
        p: "En lugar del imperativo se usa el <b>infinitivo</b>: <em>non parlare!</em>, <em>non andare!</em>, <em>non ti preoccupare!</em>. Vale solo para <em>tu</em>. Aquí el español va por otro camino, con el subjuntivo («no hables»), así que es un punto que hay que memorizar."
      },
      {
        h: "Los pronombres se pegan al final",
        p: "<em>Dimmi!</em>, <em>Chiamami!</em>, <em>Aspettalo!</em>, <em>Andiamoci!</em>, igual que tu «dime», «llámame». Pero en la forma <b>Lei</b> el pronombre va delante: <em>Mi dica</em>, <em>Lo aspetti</em>, mientras que tú dices «dígame» con el pronombre pegado."
      },
      {
        trap: "Detrás de las formas cortas <em>fa', da', sta', va', di'</em> la consonante del pronombre se <b>duplica</b>: <em>dimmi, fammi, dammi, vattene, stammi bene</em>. Tu «dime» y «dame» llevan una sola letra: la doble italiana hay que oírla y escribirla. La excepción es <em>gli</em>: <em>digli</em>, sin duplicar."
      }
    ],
    grammar: {
      title: "El imperativo",
      table: {
        head: ["persona", "parlare", "prendere", "sentire", "con pronombre"],
        rows: [
          ["tu", "parla", "prendi", "senti", "dimmi, chiamami"],
          ["Lei", "parli", "prenda", "senta", "mi dica, lo prenda"],
          ["noi", "parliamo", "prendiamo", "sentiamo", "andiamoci"],
          ["voi", "parlate", "prendete", "sentite", "ascoltatemi"],
          ["tu (negativo)", "non parlare", "non prendere", "non sentire", "non dirmi"]
        ]
      },
      examples: [
        { tr: "¡Cuéntamelo todo!" },
        { tr: "Avísame de cómo va." },
        { tr: "No te preocupes, yo me encargo." },
        { tr: "Dígame, señora." },
        { tr: "¡Vamos allí juntos!" },
        { tr: "Perdóname, no lo hice a propósito." }
      ]
    },
    vocab: [
      "dime",
      "avísame",
      "dame",
      "perdóname",
      "espérame",
      "no te preocupes",
      "mira",
      "oye, escucha",
      "cuídate",
      "ven aquí",
      "para ya",
      "a propósito"
    ],
    exercises: [
      {
        q: "«non parlare!» como negativo corresponde a qué persona:",
        opts: ["tu", "Lei", "voi"],
        why: "Solo la forma tu usa el infinitivo en negativo."
      },
      { q: "Forma el imperativo (tu) de «prendere»: ___" },
      { q: "Forma el imperativo (Lei) de «parlare»: ___" },
      { q: "«Dime» es: ___" },
      {
        q: "¿Por qué «dammi» y no «dami»?",
        opts: [
          "Es una errata",
          "Detrás de la forma corta da' se duplica la consonante del pronombre",
          "Porque dare es irregular en todo"
        ]
      },
      { q: "«No te preocupes.»" },
      {
        q: "Completa el mensaje a un amigo.",
        tr: "¡Hola! Avísame a qué hora llegas, y escríbeme cuando salgas."
      },
      { tr: "Dígame, señora, la escucho." },
      { tr: "Avísame cuando llegues, voy a buscarte." },
      { tr: "Cuéntamelo todo, no te preocupes." }
    ]
  },
  "lesson:a2-u03-test": {
    theme: "Test",
    title: "Test de la unidad 3",
    objectives: ["comprobar los pronombres directos e indirectos, la concordancia del participio y el imperativo"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Conosci Anna?» →", opts: ["Sì, lo conosco.", "Sì, la conosco.", "Sì, le conosco."] },
      { q: "«I biglietti? ___ ho comprati.»" },
      { q: "«Le chiavi? Le ho pers___.»" },
      { q: "«Telefono a Marco» →", opts: ["Lo telefono", "Gli telefono", "Le telefono"] },
      { q: "«Che cosa ___ hai detto?» (a ella)" },
      { q: "El imperativo (tu) de «sentire»: ___" },
      { q: "«Dime»: ___" },
      { q: "«No te preocupes, yo me encargo.»" },
      { tr: "La vi ayer y le hablé del proyecto." },
      { tr: "Avísame cuando llegues, te espero." }
    ]
  },
  "unit:a2-u04": { title: "La salud", grammarNote: "mi fa male · el imperativo formal · dar consejos" },
  "lesson:a2-u04-l1": {
    theme: "Salud",
    title: "Dolor y síntomas",
    objectives: [
      "decir qué te duele",
      "nombrar los síntomas básicos",
      "usar mi fa / mi fanno male"
    ],
    theory: [
      {
        h: "Una construcción invertida, como piacere",
        p: "<em>Mi fa male la testa</em> es literalmente «la cabeza me hace mal». El sujeto es la <b>parte del cuerpo</b>, y por eso el verbo tiene dos formas: <em>mi <b>fa</b> male il piede</em> (una cosa) y <em>mi <b>fanno</b> male i piedi</em> (varias)."
      },
      {
        contrast: "Es exactamente tu «me duele la cabeza» / «me duelen los pies»: mismo sujeto, mismo pronombre, misma alternancia de número. Solo cambia el verbo, que en italiano es <em>fare male</em> en lugar de uno propio. Este punto lo tienes hecho."
      },
      {
        h: "Dos caminos paralelos",
        p: "Junto a <em>mi fa male la gola</em> existe <em>ho mal di gola</em>. El segundo funciona como fórmula fija: <em>mal di testa, mal di stomaco, mal di schiena, mal di denti</em>. Los dos son igual de naturales."
      },
      {
        h: "El artículo con las partes del cuerpo",
        p: "El italiano dice <em>mi fa male <b>la</b> testa</em>, no «mia testa», porque el pronombre <em>mi</em> ya dice de quién es la cabeza. Igual que en español, donde «me duele mi cabeza» suena raro. Lo mismo en <em>mi lavo <b>i</b> denti</em>."
      },
      {
        tip: "<em>Da quanto tempo?</em> («¿desde cuándo?») es la primera pregunta que oirás en la consulta. La respuesta: <em>da tre giorni</em>, <em>da una settimana</em>."
      }
    ],
    grammar: {
      title: "Dolor y síntomas",
      table: {
        head: ["construcción", "ejemplo", "en español"],
        rows: [
          ["mi fa male + sing.", "Mi fa male la schiena.", "Me duele la espalda."],
          ["mi fanno male + pl.", "Mi fanno male i denti.", "Me duelen las muelas."],
          ["ho mal di…", "Ho mal di testa.", "Tengo dolor de cabeza."],
          ["ho la febbre", "Ho trentotto di febbre.", "Tengo 38 de fiebre."],
          ["mi sento…", "Mi sento debole.", "Me siento débil."],
          ["da quanto?", "Da tre giorni.", "Desde hace tres días."]
        ]
      },
      examples: [
        { tr: "Me duele la garganta desde hace dos días." },
        { tr: "Me duele el estómago y tengo náuseas." },
        { tr: "Tengo tos y mocos." },
        { tr: "Me siento cansado y no tengo apetito." },
        { tr: "Soy alérgico a la penicilina." },
        { tr: "¿Debería tomar algo para el dolor de cabeza?" }
      ]
    },
    vocab: [
      "cabeza",
      "garganta",
      "estómago",
      "espalda",
      "dientes, muelas",
      "fiebre",
      "tos",
      "un resfriado",
      "náuseas",
      "no me encuentro bien",
      "alergia",
      "¿desde cuándo?"
    ],
    exercises: [
      {
        q: "«___ male i denti.» (me duelen las muelas)",
        opts: ["Mi fa", "Mi fanno", "Mi faccio"],
        why: "El sujeto son las muelas, plural, así que fanno."
      },
      { q: "Completa: «Mi ___ male la schiena.»" },
      { q: "Completa: «Ho mal ___ testa.»" },
      {
        q: "¿Qué frase suena natural en italiano?",
        opts: ["Mi fa male la mia testa.", "Mi fa male la testa.", "Fa male mia testa."],
        why: "El pronombre mi ya dice de quién es; el posesivo sobra."
      },
      { q: "Relaciona.", pairs: ["tos", "un resfriado", "náuseas", "fiebre"] },
      { q: "«Me duele la garganta desde hace tres días.»" },
      { q: "Describe tus síntomas.", tr: "Me duele la garganta, tengo fiebre y me siento débil." },
      { tr: "Llevo una semana con tos y mocos." },
      { tr: "Me duelen las piernas después de correr." },
      { tr: "Tengo dolor de cabeza y fiebre." }
    ]
  },
  "lesson:a2-u04-l2": {
    theme: "Salud",
    title: "En la consulta",
    objectives: ["describir una dolencia al médico", "entender las instrucciones", "preguntar por la posología"],
    theory: [
      {
        h: "Cómo funciona la sanidad italiana",
        p: "La base del sistema es el <strong>medico di base</strong>, tu médico de cabecera, con el que hay que darse de alta. El volante es <em>l'impegnativa</em> o <em>la ricetta</em>. Para las urgencias se va al <strong>pronto soccorso</strong>, donde el triaje funciona por colores: blanco (menos urgente) → rojo. Si vienes de la sanidad pública española, el esquema te resultará familiar, incluida la gratuidad de la atención."
      },
      {
        h: "El imperativo formal en las instrucciones",
        p: "El médico te habla de <em>Lei</em>: <em>Prenda questo tre volte al giorno</em>, <em>Riposi</em>, <em>Beva molta acqua</em>, <em>Non si preoccupi</em>. Es tu «tome», «descanse», «beba»: conviene reconocer estas formas incluso antes de saber producirlas."
      },
      {
        h: "La farmacia hace más de lo que esperas",
        p: "El <em>farmacista</em> italiano tiene bastante autoridad para aconsejar y suele ser la primera parada para dolencias menores. Muchas cosas siguen necesitando receta, pero el consejo es gratis y concreto."
      },
      {
        tip: "La frase que te salva en cualquier situación médica: <em>Sono allergico/a a…</em> Vale la pena saberla sin tener que pensarla."
      }
    ],
    grammar: {
      title: "En la consulta y en la farmacia",
      table: {
        head: ["quién habla", "en italiano", "en español"],
        rows: [
          ["médico", "Cosa c'è che non va?", "¿Qué le pasa?"],
          ["médico", "Da quanto tempo ha questi sintomi?", "¿Desde cuándo tiene estos síntomas?"],
          ["paciente", "Mi fa male qui.", "Me duele aquí."],
          ["médico", "Le prescrivo un antibiotico.", "Le receto un antibiótico."],
          ["paciente", "Quante volte al giorno?", "¿Cuántas veces al día?"],
          ["médico", "Due volte al giorno, dopo i pasti.", "Dos veces al día, después de las comidas."]
        ]
      },
      examples: [
        { tr: "Buenos días, no me encuentro bien." },
        { tr: "¿Es alérgico a algún medicamento?" },
        { tr: "Le hago una receta." },
        { tr: "Descanse y beba mucha agua." },
        { tr: "Si no se le pasa en tres días, vuelva." },
        { tr: "Necesito un justificante médico." }
      ]
    },
    vocab: [
      "médico de cabecera",
      "urgencias",
      "receta",
      "antibiótico",
      "pastilla",
      "jarabe",
      "inyección",
      "análisis de sangre",
      "justificante médico",
      "después de las comidas",
      "en ayunas",
      "mejorar"
    ],
    exercises: [
      {
        q: "¿Adónde vas con un problema repentino y grave?",
        opts: ["Dal medico di base", "Al pronto soccorso", "In farmacia"]
      },
      { q: "Completa: «Sono ___ alla penicillina.» (alérgica, habla una mujer)" },
      { q: "Completa: «Quante ___ al giorno?» (cuántas veces)" },
      { q: "Relaciona.", pairs: ["receta", "pastilla", "en ayunas", "mejorar"] },
      { q: "«¿Desde cuándo tiene estos síntomas?»" },
      {
        q: "Una visita al médico.",
        setting: "La consulta, un lunes por la mañana.",
        lines: [
          { tr: "Buenos días, siéntese. ¿Qué le pasa?" },
          {
            tr: "Di que te duele la garganta y que tienes fiebre.",
            answerTr: "Me duele la garganta y tengo fiebre."
          },
          { tr: "¿Desde cuándo?" },
          { tr: "Di que desde hace tres días.", answerTr: "Desde hace tres días." },
          { tr: "Le receto un antibiótico. ¿Alguna alergia?" },
          {
            tr: "Di que no y pregunta por la posología.",
            answerTr: "No, ninguna. ¿Cuántas veces al día lo tomo?"
          }
        ]
      },
      {
        q: "Completa las instrucciones del médico.",
        tr: "Tome una pastilla dos veces al día, después de las comidas. Y beba mucha agua."
      },
      { tr: "Necesito un justificante médico." },
      { tr: "Tome el antibiótico durante seis días, aunque empiece a encontrarse mejor." },
      { tr: "Soy alérgico a la penicilina, ¿hay alguna alternativa?" }
    ]
  },
  "lesson:a2-u04-l3": {
    theme: "Salud",
    title: "Dar consejos",
    objectives: [
      "aconsejar a alguien qué hacer",
      "usar el condicional en dovresti / potresti",
      "reaccionar al problema de otra persona"
    ],
    theory: [
      {
        h: "El condicional: primer encuentro",
        p: "El condicional se construye sobre la misma raíz que el futuro, con las terminaciones <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>. Ya conoces <em>vorrei</em>; añade <em>dovrei</em> (debería), <em>potrei</em> (podría), <em>sarebbe</em> (sería). El mecanismo es el de tu condicional: misma raíz que el futuro, otras terminaciones."
      },
      {
        h: "Aconsejar sin ordenar",
        p: "<em>Devi riposare</em> («tienes que descansar») suena a instrucción. <em>Dovresti riposare</em> («deberías descansar») es un consejo. La distinción es la misma que haces tú entre «tienes que» y «deberías», y los italianos la oyen igual de nítida."
      },
      {
        h: "Otras maneras de aconsejar",
        list: [
          "<em>Perché non…?</em> — «¿por qué no…?»: <em>Perché non vai dal medico?</em>",
          "<em>Se fossi in te…</em> — «yo que tú…» (se explica entero en B2)",
          "<em>Ti conviene…</em> — «te conviene…»: <em>Ti conviene riposare.</em>"
        ]
      },
      {
        tip: "Reaccionar al problema de alguien: <em>Mi dispiace</em> (lo siento), <em>Che peccato</em> (qué pena), <em>Rimettiti presto</em> (que te mejores)."
      }
    ],
    grammar: {
      title: "Condizionale presente: las formas básicas",
      table: {
        head: ["persona", "dovere", "potere", "volere", "essere"],
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
        { tr: "Deberías descansar unos días." },
        { tr: "Podrías preguntarle al farmacéutico." },
        { tr: "Sería mejor ir al médico." },
        { tr: "¿Por qué no te coges un día libre?" },
        { tr: "Te conviene descansar hoy." },
        { tr: "¡Que te mejores!" }
      ]
    },
    vocab: [
      "deberías",
      "podrías",
      "sería mejor",
      "te conviene",
      "¿por qué no…?",
      "consejo",
      "descansar",
      "dejar, parar",
      "moverse, estar activo",
      "lo siento",
      "qué pena",
      "que te mejores"
    ],
    exercises: [
      {  },
      {  },
      {
        q: "¿Qué versión suena a consejo y no a orden?",
        opts: ["Devi riposare.", "Dovresti riposare.", "Riposa!"]
      },
      { q: "Completa: «___ meglio andare dal medico.» (sería mejor)" },
      { q: "Completa: «___ chiedere al farmacista?» (podrías)" },
      { q: "«Deberías descansar unos días.»" },
      { q: "Relaciona las reacciones.", pairs: ["lo siento", "qué pena", "que te mejores", "te conviene"] },
      { q: "Dale un consejo a un amigo.", tr: "Deberías descansar hoy. ¿Y por qué no llamas al médico?" },
      { tr: "Sería mejor que te cogieras un día libre." },
      { tr: "Deberías descansar y beber mucha agua." }
    ]
  },
  "lesson:a2-u04-l4": {
    theme: "Salud",
    title: "Estilo de vida y ejercicio",
    objectives: [
      "hablar de hábitos saludables",
      "decir con qué frecuencia haces algo",
      "expresar la intención de cambiar"
    ],
    theory: [
      {
        h: "La dieta mediterránea no es una dieta",
        p: "En italiano <em>dieta</em> significa sobre todo «la manera de comer», no «adelgazar», exactamente como en tu «dieta mediterránea». <em>La dieta mediterranea</em> es un patrón alimentario reconocido por la Unesco, no un plan para perder peso: <em>sono a dieta</em> es lo que sí significa estar adelgazando."
      },
      {
        h: "Expresar una intención",
        p: "<em>Ho intenzione di…</em> (tengo intención de), <em>vorrei iniziare a…</em> (querría empezar a), <em>sto cercando di…</em> (estoy intentando). Las tres llevan infinitivo, pero cada una con su preposición, cosa muy italiana que hay que memorizar verbo por verbo. Tu lengua acierta en dos de las tres: «intención de», «empezar a»."
      },
      {
        h: "Frecuencia precisa",
        p: "<em>Tre volte alla settimana</em>, <em>una volta al mese</em>, <em>tutti i giorni</em>, <em>a giorni alterni</em> (un día sí y otro no). La preposición <em>a</em> con artículo: <em>alla settimana, al mese, all'anno</em>."
      },
      {
        tip: "<em>Fare movimento</em> suena más natural que <em>fare sport</em> para la actividad corriente: andar, ir en bici, subir escaleras."
      }
    ],
    grammar: {
      title: "Hábitos e intenciones",
      table: {
        head: ["construcción", "ejemplo", "en español"],
        rows: [
          ["ho intenzione di", "Ho intenzione di smettere di fumare.", "Tengo intención de dejar de fumar."],
          ["sto cercando di", "Sto cercando di mangiare meglio.", "Estoy intentando comer mejor."],
          ["vorrei iniziare a", "Vorrei iniziare a correre.", "Querría empezar a correr."],
          ["frecuencia", "Tre volte alla settimana.", "Tres veces por semana."],
          ["días alternos", "A giorni alterni.", "Un día sí y otro no."],
          ["dejarlo", "Ho smesso di bere caffè.", "He dejado de tomar café."]
        ]
      },
      examples: [
        { tr: "Me muevo todos los días, aunque sea andando." },
        { tr: "Intento dormir al menos siete horas." },
        { tr: "He reducido el azúcar y me encuentro mejor." },
        { tr: "Voy al gimnasio dos veces por semana." },
        { tr: "Tengo intención de apuntarme a la piscina." },
        { tr: "La dieta mediterránea es muy variada." }
      ]
    },
    vocab: [
      "un estilo de vida sano",
      "moverse, estar activo",
      "entrenar",
      "correr",
      "andar, caminar",
      "apuntarse",
      "reducir",
      "dejar de fumar",
      "tengo intención de",
      "estoy intentando",
      "un día sí y otro no",
      "al menos"
    ],
    exercises: [
      { q: "Completa: «Ho intenzione ___ smettere di fumare.»" },
      { q: "Completa: «Vorrei iniziare ___ correre.»" },
      { q: "Completa: «Vado in palestra tre volte ___ settimana.»" },
      { q: "¿Qué significa «a giorni alterni»?", opts: ["Todos los días", "Un día sí y otro no", "Una vez por semana"] },
      {
        q: "En italiano «dieta» significa sobre todo:",
        opts: ["adelgazar", "la manera de comer", "ayunar"]
      },
      { q: "«Intento dormir al menos siete horas.»" },
      { q: "Habla de tus hábitos.", tr: "Me muevo un día sí y otro no e intento reducir el azúcar." },
      { q: "Relaciona.", pairs: ["entrenar", "apuntarse", "reducir", "al menos"] },
      { tr: "Dejé de fumar hace tres meses y me encuentro mucho mejor." },
      { tr: "Corro tres veces por semana, temprano por la mañana." }
    ]
  },
  "lesson:a2-u04-test": {
    theme: "Test",
    title: "Test de la unidad 4",
    objectives: ["comprobar mi fa male, el vocabulario médico y el condicional"],
    theory: [{ p: "Diez preguntas. Se aprueba con un 70 %." }],
    exercises: [
      { q: "«Mi ___ male i denti.»" },
      { q: "«Ho mal ___ testa.»" },
      { q: "Un problema repentino y grave →", opts: ["medico di base", "pronto soccorso", "farmacia"] },
      {  },
      { q: "«___ meglio riposare.» (sería mejor)" },
      { q: "«Ho intenzione ___ smettere.»" },
      { q: "Relaciona.", pairs: ["receta", "tos", "mejorar", "en ayunas"] },
      { q: "«Me duele la garganta desde hace dos días.»" },
      { tr: "Tome una pastilla dos veces al día después de las comidas." },
      { tr: "No me encuentro bien, debería ir al médico." }
    ]
  }
});
