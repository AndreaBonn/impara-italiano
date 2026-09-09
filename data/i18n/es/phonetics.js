/* ============================================================
   Pares mínimos — textos en español.

   Las notas contrastivas están escritas para quien habla español,
   no traducidas: el problema es distinto en cada lengua. El español
   no distingue consonantes largas, pero sí mueve el acento, así que
   esa sección es más fácil aquí que para un francés.
   ============================================================ */
LINGUAI.addStrings("es", {

  "ph:ph-doppie": {
    title: "Consonantes dobles",
    note: "Una consonante doble es un solo sonido sostenido más tiempo, no dos sonidos seguidos. En nonno la lengua se queda contra los alvéolos casi el doble que en nono.",
    contrast: "El español solo dobla la r y la l, y ninguna de las dos por duración: <i>perro</i> frente a <i>pero</i> cambia el tipo de vibración, no el tiempo. Así que tu oído nunca ha tenido que medir cuánto dura una consonante, y ahí está el problema: <i>nonno</i> es abuelo y <i>nono</i> es noveno. Primero hay que oírlo; mientras el oído no lo distinga, la boca no lo hará.",
    pairs: [
      { glossA: "abuelo", glossB: "noveno" },
      { glossA: "siete", glossB: "sed" },
      { glossA: "caja", glossB: "casa" },
      { glossA: "bolígrafo", glossB: "pena, castigo" },
      { glossA: "pelota", glossB: "pala" },
      { glossA: "sueño", glossB: "soy" },
      { glossA: "noche", glossB: "notas" },
      { glossA: "roja", glossB: "rosa" }
    ]
  },

  "ph:ph-accento": {
    title: "Dónde cae el acento",
    note: "En italiano el acento puede caer en la antepenúltima sílaba, en la penúltima o en la última, y es él quien decide qué palabra has dicho. La tilde escrita (àncora) es una ayuda para aprender: el italiano corriente no la marca.",
    contrast: "Aquí juegas en casa: el español hace lo mismo con <i>ánimo</i>, <i>animo</i> y <i>animó</i>. La diferencia es que el español te avisa por escrito y el italiano no, así que lees rápido y colocas el acento en la penúltima, que acierta casi siempre y falla justo donde importa. <i>Àncora</i> es ancla, <i>ancòra</i> es todavía.",
    pairs: [
      { glossA: "ancla", glossB: "todavía, otra vez" },
      { glossA: "príncipes", glossB: "principios" },
      { glossA: "enseguida", glossB: "sufrido, padecido" },
      { glossA: "aparezco, me ocurre", glossB: "entendido" },
      { glossA: "leer", glossB: "ligeras (f. pl.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "E abierta y cerrada",
    note: "La è abierta se pronuncia con la boca más abierta que la é cerrada. La distinción varía por regiones y los propios italianos no se ponen de acuerdo, pero en estos dos pares cambia la palabra.",
    contrast: "El español tiene una sola e y cae más o menos entre las dos italianas, así que oyes ambas como la misma. Es el punto más difícil de esta sección y el menos costoso al fallar: una e equivocada suele salvarla el contexto, una consonante de duración equivocada no.",
    pairs: [
      { glossA: "melocotón", glossB: "pesca" },
      { glossA: "hacha", glossB: "acepta" }
    ]
  },

  "ph:ph-gli": {
    title: "El sonido GL",
    note: "gl ante i es un solo sonido: el centro de la lengua toca el paladar y el aire sale por los lados. No es una l ni una l seguida de i.",
    contrast: "Si distingues <i>calló</i> de <i>cayó</i>, ya tienes casi el sonido: la ll castellana tradicional está muy cerca del gl italiano. Si eres yeísta, el atajo no te sirve y el reflejo será decir <i>li</i>, con lo que <i>figli</i> (hijos) suena como <i>fili</i> (hilos).",
    pairs: [
      { glossA: "artículo: los; le", glossB: "los (pronombre)" },
      { glossA: "hijos", glossB: "hilos, cables" },
      { glossA: "esposa", glossB: "blandas (pl.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "C y G suaves o duras",
    note: "c y g se ablandan ante e e i: ci suena como <i>chi</i>, gi como la j inglesa de <i>jam</i>. Una h en medio las vuelve duras: chi es <i>qui</i>, ghi es <i>gui</i>.",
    contrast: "La regla es idéntica a la del español, con dos cambios que hay que rehacer: la c italiana ante e/i no es zeta ni ese, es <i>ch</i>; y donde el español escribe <i>qu</i> o <i>gu</i>, el italiano escribe <i>ch</i> y <i>gh</i>. Así <i>pesche</i> no es <i>pesche</i> a la española, sino <i>peske</i>: melocotones.",
    pairs: [
      { glossA: "besos", glossB: "gusanos, larvas" },
      { glossA: "pez, pescado", glossB: "melocotones" },
      { glossA: "vuelta, paseo", glossB: "lirón" }
    ]
  }

});
