/* ============================================================
   Warstwa neutralna językowo — biblioteka, poziom A1.

   Ta sama budowa co `readings.js`; różnica jest w długości, nie w typie.
   Wchodzi z poziomem A1, nie przy starcie (zob. `curriculum-index.js`).

   Na A1 zdania są krótkie i w czasie teraźniejszym, ale tekst jest długi:
   o to właśnie chodzi. Uczeń, który rozumie trzydzieści prostych zdań pod
   rząd, rozumie coś innego niż uczeń, który rozumie trzy.
   ============================================================ */
LINGUAI.addReadings([

  {
    id: "lib-a1-giornata",
    cefr: "A1",
    tag: "g-presente",
    titleIt: "La giornata di Amina",
    sentences: [
      "Amina abita a Torino da otto mesi.",
      "La mattina si sveglia alle sei e mezza.",
      "Non usa la sveglia del telefono: usa la radio.",
      "Dice che la radio italiana è la sua seconda scuola.",
      "Fa colazione in piedi, in cucina, con un caffè e due biscotti.",
      "Alle sette e venti esce di casa.",
      "L'autobus numero 4 passa davanti al portone.",
      "Se piove, l'autobus arriva sempre in ritardo.",
      "Amina lavora in una lavanderia vicino a Porta Palazzo.",
      "Apre alle otto e accende le macchine grandi.",
      "I primi clienti arrivano verso le nove.",
      "Una signora anziana viene ogni martedì con le tende della cucina.",
      "Parla molto e parla veloce.",
      "All'inizio Amina capiva solo «buongiorno» e «grazie».",
      "Adesso capisce quasi tutto, anche le storie dei nipoti.",
      "A mezzogiorno Amina chiude per un'ora.",
      "Mangia un panino nel parco, se c'è il sole.",
      "Se fa freddo resta dentro e guarda le persone dalla vetrina.",
      "Il pomeriggio è più tranquillo.",
      "Tra un cliente e l'altro studia l'italiano sul telefono.",
      "Ha un quaderno piccolo per le parole nuove.",
      "Oggi ha scritto tre parole: «piega», «macchia» e «ritiro».",
      "Sono parole del suo lavoro, quindi le usa ogni giorno.",
      "Il giovedì arriva il ragazzo del bar con le tovaglie.",
      "Ha sempre fretta e non dice mai il suo nome.",
      "Amina lo chiama «il ragazzo delle tovaglie» e lui ride.",
      "Verso le cinque entra il padrone della lavanderia.",
      "Si chiama Renzo e ha settant'anni.",
      "Conta i soldi, beve un caffè e parla del tempo.",
      "Dice sempre la stessa frase: «Oggi fa un caldo terribile».",
      "Lo dice anche a novembre.",
      "Amina risponde «eh sì» e continua a lavorare.",
      "Renzo è contento perché la lavanderia è pulita e i clienti tornano.",
      "Una volta le ha detto: «Tu parli meglio di mio figlio».",
      "Non è vero, ma Amina quel giorno torna a casa felice.",
      "Il venerdì la lavanderia chiude più tardi.",
      "C'è sempre molta gente prima del fine settimana.",
      "Alle sette chiude la lavanderia e va a lezione.",
      "Il corso è in una scuola pubblica, due sere alla settimana.",
      "In classe ci sono persone di undici paesi diversi.",
      "Tutti parlano italiano, perché è l'unica lingua comune.",
      "Alle nove Amina torna a casa a piedi.",
      "La strada è lunga venti minuti e a lei piace.",
      "Legge i nomi dei negozi e dei ristoranti.",
      "Dice che è il modo più economico per imparare una città.",
      "Prima di dormire scrive un messaggio a sua madre.",
      "Scrive in arabo, ma qualche volta mette una parola italiana.",
      "Sua madre non capisce, e ride."
    ],
    glossIt: ["la sveglia", "la lavanderia", "la tenda", "la vetrina", "la piega", "il ritiro", "la tovaglia"],
    lexIt: ["svegliarsi", "colazione", "biscotto", "portone", "ritardo", "cliente", "anziana", "nipote", "quaderno", "macchia", "lezione", "paese", "economico", "padrone", "contare"],
    questions: [
      { t: "mcq", q: "Come si sveglia Amina?", opts: ["Con la radio", "Con il telefono", "Con sua madre"], a: 0 },
      { t: "truefalse", q: "Amina lavora in una scuola.", a: 1 },
      { t: "mcq", q: "Che cosa scrive nel quaderno piccolo?", opts: ["I nomi dei clienti", "Le parole nuove", "Gli orari dell'autobus"], a: 1 },
      { t: "mcq", q: "Perché in classe tutti parlano italiano?", opts: ["Perché è obbligatorio", "Perché è l'unica lingua comune", "Perché nessuno conosce l'inglese"], a: 1 },
      { t: "truefalse", q: "Torna a casa in autobus.", a: 1 },
      { t: "mcq", q: "Chi è Renzo?", opts: ["Il padrone della lavanderia", "Il ragazzo del bar", "Il figlio della signora anziana"], a: 0 }
    ]
  }

]);
