/* ============================================================
   Textos en la lengua del alumno (es) para data/core/conversations.js
   Las claves remiten a los id de la capa neutra; los arrays se unen
   por índice, así que su longitud debe coincidir con core.
   Lo comprueba scripts/parity.mjs.

   Nota: las respuestas modelo en italiano viven en core y están
   grabadas en audio, así que una consigna que lleva a «Sono dalla
   Polonia» sigue diciendo Polonia aquí. Cambiar el país obligaría a
   regenerar los mp3.
   ============================================================ */
LINGUAI.addStrings("es", {
  "conv:bar-mattina": {
    title: "Desayuno en el bar",
    setting: "Lunes, 8:15. Entras en el bar de la esquina. El camarero ya te conoce de vista.",
    closing: "Tres minutos, un café, ni un segundo de más. Así es el desayuno italiano.",
    turns: [
      { tr: "¡Buenos días! ¿Qué le pongo?" },
      { task: "Saluda y pide un café y un cornetto.", tr: "Buenos días, un café y un cornetto, por favor." },
      { tr: "¿El cornetto vacío o relleno de crema?" },
      { task: "Di que lo prefieres vacío.", tr: "Vacío, gracias." },
      { tr: "Perfecto. Son dos treinta." },
      { task: "Di que pagas con tarjeta.", tr: "¿Puedo pagar con tarjeta?" },
      { tr: "Claro, el datáfono está aquí mismo. ¡Que vaya bien!" },
      { task: "Da las gracias y despídete.", tr: "Gracias, ¡buen día!" }
    ]
  },
  "conv:presentarsi": {
    title: "Primer día de clase",
    setting: "Una escuela de idiomas en Florencia. Alguien se sienta a tu lado antes de empezar.",
    closing: "Cuatro frases y ya tienes tu primera amistad italiana. No hace falta más.",
    turns: [
      { tr: "¡Hola! ¿Puedo sentarme aquí?" },
      { task: "Di que sí, con amabilidad.", tr: "¡Claro, adelante!" },
      { tr: "Gracias. Soy Matteo, ¿tú cómo te llamas?" },
      { task: "Preséntate con tu nombre.", tr: "Me llamo Anna." },
      { tr: "¡Encantado! ¿De dónde eres?" },
      { task: "Di que eres de Polonia: es la respuesta modelo grabada.", tr: "Soy de Polonia." },
      { tr: "¡Qué bien! ¿Y a qué te dedicas?" },
      { task: "Di cuál es tu trabajo (profesora, por ejemplo).", tr: "Soy profesora." }
    ]
  },
  "conv:mercato": {
    title: "En el mercado del barrio",
    setting: "Sábado por la mañana, mercado al aire libre. El vendedor canta los precios de acera a acera.",
    closing: "En el mercado cuentan el ritmo y la precisión. Etti, chili, basta così.",
    turns: [
      { tr: "¡Dígame, señora! Hoy tengo unos tomates preciosos." },
      { task: "Pide un kilo de tomates.", tr: "Un kilo de tomates, por favor." },
      { tr: "Aquí tiene. ¿Algo más? Hoy las manzanas están baratas." },
      { task: "Pregunta cuánto cuestan las manzanas.", tr: "¿A cuánto están las manzanas?" },
      { tr: "Dos euros el kilo. Dulcísimas." },
      { task: "Di que ya está y pregunta cuánto es en total.", tr: "Ya está, ¿cuánto es en total?" },
      { tr: "Cuatro cincuenta. ¡Gracias!" }
    ]
  },
  "conv:ristorante": {
    title: "Cena en el restaurante",
    setting: "De noche, un restaurante, sin reserva. El camarero se acerca con las cartas.",
    closing: "Pedir en italiano sigue un orden fijo: primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "¡Buenas noches! ¿Tienen reserva?" },
      {
        task: "Di que no y pregunta si hay mesa para dos.",
        tr: "No, ¿hay mesa para dos?"
      },
      { tr: "Por supuesto, siéntense. Aquí tienen las cartas. ¿Algo de beber?" },
      {
        task: "Pide una botella de agua con gas y una copa de vino tinto.",
        tr: "Una botella de agua con gas y una copa de vino tinto."
      },
      { tr: "Muy bien. ¿Y de primero?" },
      {
        task: "Pide los cacio e pepe y pregunta si pican.",
        tr: "Tomo los cacio e pepe. ¿Pican?"
      },
      { tr: "Solo un poco, se nota la pimienta. ¿Van a querer segundo?" },
      {
        task: "Rechaza con educación y pide la cuenta para después.",
        tr: "No, gracias, solo la cuenta luego, por favor."
      }
    ]
  },
  "conv:treno": {
    title: "En la taquilla",
    setting: "Roma Termini, cola en la taquilla, el panel de salidas parpadeando arriba.",
    closing: "Regionale o Frecciarossa: la diferencia son una hora de viaje y treinta euros.",
    turns: [
      { tr: "El siguiente, por favor." },
      {
        task: "Pide un billete a Florencia para esta tarde.",
        tr: "Un billete a Florencia para esta tarde."
      },
      { tr: "¿Regional o Frecciarossa? El Freccia tarda hora y media." },
      { task: "Pregunta cuánto cuesta el Frecciarossa.", tr: "¿Cuánto cuesta el Frecciarossa?" },
      { tr: "Cuarenta y dos euros en segunda clase." },
      { task: "Acepta y pregunta de qué andén sale.", tr: "Vale, ¿de qué andén sale?" },
      { tr: "Andén 9, dentro de veinte minutos. Acuérdese de validarlo si coge el regional." }
    ]
  },
  "conv:medico": {
    title: "En el médico",
    setting: "Un centro de salud, consulta sin cita. El médico pregunta qué te pasa.",
    closing: "Tres frases te salvan en el médico: mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Buenos días, siéntese. ¿Qué le ocurre?" },
      { task: "Di que te duele la garganta y que tienes fiebre.", tr: "Me duele la garganta y tengo fiebre." },
      { tr: "¿Desde cuándo?" },
      { task: "Di que desde hace tres días.", tr: "Desde hace tres días." },
      { tr: "¿Es alérgico a algún medicamento?" },
      { task: "Di que no tienes alergias.", tr: "No, no tengo alergias." },
      { tr: "Le receto un antibiótico. Reposo y beba mucha agua." },
      { task: "Pregunta cuántas veces al día hay que tomarlo.", tr: "¿Cuántas veces al día tengo que tomarlo?" }
    ]
  },
  "conv:affitto": {
    title: "Visita a un piso",
    setting: "Un agente te enseña un piso de un dormitorio en Bolonia. Tienes diez minutos y cien preguntas.",
    closing: "Tres cosas que hay que preguntar siempre: spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "Bueno, aquí tiene el piso. Como ve, luminoso y recién reformado." },
      { task: "Pregunta cuánto es el alquiler al mes.", tr: "¿Cuánto es el alquiler al mes?" },
      { tr: "Setecientos al mes, sin los gastos." },
      { task: "Pregunta a cuánto ascienden los gastos de comunidad.", tr: "¿A cuánto ascienden los gastos de comunidad?" },
      { tr: "Unos noventa euros, calefacción incluida." },
      { task: "Pregunta por el tipo de contrato y por la fianza.", tr: "¿Qué tipo de contrato es? ¿Y de cuánto es la fianza?" },
      { tr: "Contrato 4+4, fianza de tres mensualidades." },
      { task: "Di que te lo piensas y que respondes mañana.", tr: "Me lo pienso y le digo algo mañana." }
    ]
  },
  "conv:colloquio": {
    title: "Entrevista de trabajo",
    setting: "Una agencia de marketing en Milán. Recursos humanos abre con la pregunta de siempre.",
    closing: "En una entrevista italiana se habla en concreto, y no se rebaja uno solo.",
    turns: [
      { tr: "Bien, cuénteme algo sobre usted." },
      {
        task: "Di tu nombre, cuántos años de experiencia tienes y en qué.",
        tr: "Me llamo Anna, tengo cinco años de experiencia en marketing digital."
      },
      { tr: "¿Por qué ha decidido presentarse aquí?" },
      {
        task: "Di que te interesa su enfoque de los proyectos internacionales.",
        tr: "Porque me interesa su enfoque de los proyectos internacionales."
      },
      { tr: "¿Cuál diría que es su punto débil?" },
      {
        task: "Reconoce un punto débil y di cómo estás trabajándolo.",
        tr: "Tiendo a querer controlarlo todo, pero estoy aprendiendo a delegar."
      },
      { tr: "Bien. ¿Tiene alguna pregunta para nosotros?" },
      {
        task: "Pregunta por el equipo y por los siguientes pasos del proceso.",
        tr: "Sí: ¿cómo es el equipo y cuáles son los siguientes pasos?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "En la Agencia Tributaria",
    setting: "Haciendo cola para el codice fiscale. Tienes el número 87 y el panel marca el 61.",
    closing: "El codice fiscale es la llave de todo en Italia: cuenta bancaria, contratos, médico, tarjeta SIM.",
    turns: [
      { tr: "Número ochenta y siete, ventanilla tres. Buenos días, ¿qué necesita?" },
      { task: "Di que necesitas solicitar el codice fiscale.", tr: "Necesito solicitar el codice fiscale." },
      { tr: "¿Tiene un documento en vigor y el impreso relleno?" },
      {
        task: "Di que tienes el pasaporte pero no el impreso.",
        tr: "Tengo el pasaporte, pero no tengo el impreso."
      },
      { tr: "No pasa nada, le doy uno. Escriba en mayúsculas, por favor." },
      { task: "Pregunta cuánto tarda.", tr: "¿Cuánto tarda?" },
      { tr: "Se lo expido ahora mismo, es inmediato." }
    ]
  },
  "conv:dibattito": {
    title: "Discusión durante la cena",
    setting: "Cena en casa de unos amigos. Sale el tema del teletrabajo y nadie piensa ceder.",
    closing: "Los italianos se interrumpen al discutir: no es mala educación, es interés.",
    turns: [
      { tr: "Para mí el teletrabajo ha destruido el sentido de equipo. ¿Tú qué opinas?" },
      {
        task: "Dale la razón en parte y añade un contraargumento.",
        tr: "En parte estoy de acuerdo, pero también ha reducido el estrés de quien se pasa el día en el coche."
      },
      { tr: "Ya, pero ¿no crees que los jóvenes aprenden menos si no están en la oficina?" },
      {
        task: "Responde que depende de cómo organice la empresa el acompañamiento.",
        tr: "Eso depende de cómo organice la empresa el acompañamiento."
      },
      { tr: "En eso te doy la razón. Pero el híbrido es lo peor de los dos mundos, para mí." },
      {
        task: "Muéstrate en desacuerdo con firmeza y apóyalo en un argumento.",
        tr: "No estoy nada de acuerdo: el híbrido permite elegir según el tipo de trabajo."
      }
    ]
  },
  "conv:ristorante-scelte": {
    title: "En la mesa, con algunas decisiones",
    setting: "Viernes por la noche, la trattoria de la esquina. Esta vez la conversación sigue lo que dices: en tres momentos eliges entre dos respuestas.",
    closing: "La cuenta final coincidía con lo que se pidió en la mesa. Esa es la diferencia entre una elección y un adorno.",
    turns: [
      { tr: "Buenas noches. ¿Tienen reserva?" },
      { task: "Di si tenéis reserva.", opts: [
        { tr: "Sí, tengo una reserva a nombre de Rossi." },
        { tr: "No, somos dos. ¿Hay sitio?" }
      ] },
      { tr: "Perfecto. La mesa junto a la ventana. Por aquí, por favor." },
      { tr: "Hay una mesa para dos al fondo de la sala. Adelante." },
      { tr: "Aquí tienen el menú. Mientras tanto, ¿para beber?" },
      { task: "Pide una botella de agua sin gas.", tr: "Una botella de agua sin gas, por favor." },
      { tr: "Sin gas, enseguida. ¿Y de primero?" },
      { task: "Elige el primer plato.", opts: [
        { tr: "Para mí, carbonara." },
        { tr: "Pasta con tomate: soy vegetariana." }
      ] },
      { tr: "Esta noche la carbonara está buenísima, el guanciale está crujiente." },
      { tr: "Entonces le recomiendo tomate y albahaca: la albahaca es de nuestro huerto." },
      { tr: "¿Un postre para terminar? El tiramisú lo hacemos nosotros." },
      { task: "Decide si quieres postre.", opts: [
        { tr: "Sí, el tiramisú, gracias." },
        { tr: "No, gracias, solo un café." }
      ] },
      { tr: "Excelente elección, enseguida se lo traigo." },
      { tr: "Un café, muy bien." },
      { tr: "Aquí tiene la cuenta: primer plato, agua y tiramisú. Veintidós euros." },
      { tr: "Aquí tiene la cuenta: primer plato, agua y café. Dieciséis euros." },
      { task: "Pregunta si puedes pagar con tarjeta.", tr: "¿Puedo pagar con tarjeta?" },
      { tr: "Claro, el datáfono está aquí. Gracias y buenas noches." }
    ]
  }
});
