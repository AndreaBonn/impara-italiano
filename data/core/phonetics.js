/* ============================================================
   Warstwa neutralna językowo — pary minimalne.

   Wyłącznie włoski: same wyrazy i to, czym się różnią. Glosy („nonno
   to dziadek, nono to dziewiąty") i uwagi kontrastywne siedzą w
   data/i18n/<lang>/phonetics.js i pisze się je pod konkretny język,
   nie tłumaczy — bo problem jest inny dla każdego. Polak nie słyszy
   długości spółgłoski, Amerykanin nie słyszy różnicy między „e"
   otwartym a zamkniętym, a Hiszpan nie ma w ogóle dźwięku „gl".

   Kolejność wewnątrz pary NIE jest kolejnością pokazywania: ćwiczenie
   losuje, którego wyrazu posłuchać i w jakiej kolejności ustawić
   przyciski. „a" i „b" to tylko nazwy pól.

   Każdy wyraz z tej listy dostaje własne nagranie: bez tego ćwiczenie
   nie ma czego odtworzyć, bo synteza systemowa myli dokładnie te
   różnice, których tu się słucha.

   CZEGO TU NIE MA I DLACZEGO. Ćwiczenie ma sens tylko wtedy, gdy dwa
   nagrania NAPRAWDĘ się różnią, a głos honoruje akcenty nierówno.
   „pèsca" i „pésca" dostają różne pliki, ale „vènti" i „vénti" dają
   nagranie bajt w bajt takie samo — więc tej pary tu nie ma. Zbioru dla
   „o" otwartego i zamkniętego nie ma w całości: żadna z trzech
   sprawdzonych par (bòtte/bótte, fòro/fóro, vòlto/vólto) nie dała
   różnych nagrań. Sprawdza to scripts/check_minpairs.py i tam trzeba
   wrócić, gdy zmieni się głos.
   ============================================================ */
window.PHONETICS = [
  {
    id: "ph-doppie",
    cefr: "A1",
    tag: "g-fonologia",
    pairs: [
      { a: "nonno", b: "nono" },
      { a: "sette", b: "sete" },
      { a: "cassa", b: "casa" },
      { a: "penna", b: "pena" },
      { a: "palla", b: "pala" },
      { a: "sonno", b: "sono" },
      { a: "notte", b: "note" },
      { a: "rossa", b: "rosa" }
    ]
  },
  {
    id: "ph-accento",
    cefr: "A2",
    tag: "g-fonologia",
    pairs: [
      { a: "àncora", b: "ancòra" },
      { a: "prìncipi", b: "princìpi" },
      { a: "sùbito", b: "subìto" },
      { a: "càpito", b: "capìto" },
      { a: "lèggere", b: "leggère" }
    ]
  },
  {
    id: "ph-e-aperta",
    cefr: "B1",
    tag: "g-fonologia",
    pairs: [
      { a: "pèsca", b: "pésca" },
      { a: "accètta", b: "accétta" }
    ]
  },
  {
    id: "ph-gli",
    cefr: "A2",
    tag: "g-fonologia",
    pairs: [
      { a: "gli", b: "li" },
      { a: "figli", b: "fili" },
      { a: "moglie", b: "molle" }
    ]
  },
  {
    id: "ph-dolci-dure",
    cefr: "A1",
    tag: "g-fonologia",
    pairs: [
      { a: "baci", b: "bachi" },
      { a: "pesce", b: "pesche" },
      { a: "giro", b: "ghiro" }
    ]
  }
];
