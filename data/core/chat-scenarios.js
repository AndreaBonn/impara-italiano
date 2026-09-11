/* ============================================================
   Warstwa neutralna językowo — sceny do swobodnej rozmowy.

   Nie ma tu ani jednego napisu w języku ucznia: `ruolo` i `situazione`
   trafiają do instrukcji dla modelu, a `apertura` jest pierwszą kwestią,
   którą uczeń czyta na ekranie. Wszystko po włosku, bo wszystko to mówi
   rozmówca.

   PIERWSZA KWESTIA JEST NAPISANA, NIE WYGENEROWANA, i to jest decyzja: bez
   niej pierwszy ruch należałby do ucznia, który stoi przed pustym polem i
   nie wie, o czym ma mówić. Kosztuje to jedno zdanie na scenę i oszczędza
   pytanie, które zabija rozmowę, zanim się zacznie.

   NIE MA TU NAGRAŃ i nie może być. `extract_strings.mjs` czyta ten katalog,
   ale odpowiedzi rozmówcy powstają w czasie rozmowy i nie istnieją w
   repozytorium, więc czyta je synteza systemowa albo nikt. Gdyby pierwsza
   kwestia była nagrana, a reszta nie, scena zmieniałaby głos po jednym
   zdaniu — dlatego ten plik zostaje poza indeksem nagrań.
   ============================================================ */
window.CHAT_SCENARIOS = [
  {
    id: "bar",
    cefr: "A1",
    icon: "☕",
    ruolo: "un barista in un bar di quartiere, la mattina presto",
    situazione: "Lo studente è appena entrato e deve ordinare la colazione.",
    apertura: "Buongiorno! Cosa le porto?"
  },
  {
    id: "vicino",
    cefr: "A2",
    icon: "🏠",
    ruolo: "un vicino di casa italiano, cordiale e un po' curioso",
    situazione: "Vi incontrate sulle scale del palazzo per la prima volta.",
    apertura: "Buonasera! Lei è nuovo qui, vero? Io abito al secondo piano."
  },
  {
    id: "mercato",
    cefr: "A2",
    icon: "🍅",
    ruolo: "un venditore al mercato rionale, spiccio ma gentile",
    situazione: "Lo studente sta facendo la spesa e vuole sapere che cosa è di stagione.",
    apertura: "Dica pure! Oggi ho pomodori buonissimi, guardi."
  },
  {
    id: "ufficio",
    cefr: "B1",
    icon: "🗂️",
    ruolo: "un impiegato allo sportello del Comune, paziente ma preciso",
    situazione: "Lo studente deve capire quali documenti servono per il cambio di residenza.",
    apertura: "Prego, si accomodi. Mi dica di che cosa ha bisogno."
  },
  {
    id: "colloquio",
    cefr: "B1",
    icon: "💼",
    ruolo: "chi conduce un colloquio di lavoro in un'azienda piccola",
    situazione: "È un primo colloquio per un posto di lavoro. Fai domande, una alla volta.",
    apertura: "Si accomodi. Allora, mi racconti un po' di lei: che cosa ha fatto finora?"
  },
  {
    id: "medico",
    cefr: "B1",
    icon: "🩺",
    ruolo: "un medico di base, calmo, che fa domande concrete",
    situazione: "Lo studente non sta bene da qualche giorno e deve spiegare i sintomi.",
    apertura: "Si sieda pure. Allora, che disturbo ha?"
  }
];
