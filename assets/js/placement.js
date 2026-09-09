/* ============================================================
   placement.js — od czego zacząć.

   Dorosły, który już liznął włoskiego, nie chce zaczynać od „ciao".
   Bez tego widoku ma dwie drogi i obie złe: przeklikać sto lekcji
   albo skoczyć w środek i trafić w lukę, o której nie wie.

   Metoda: wyszukiwanie binarne po poziomach, nie test od A1 w górę.
   Sześć poziomów mieści się w trzech rundach, więc ~18 zadań zamiast
   stu — a dłuższy test i tak nie byłby dokładniejszy, tylko rzadziej
   dokończony.

   Zadania pochodzą ze sprawdzianów jednostek, które już istnieją:
   ani jednego nowego zdania i ani jednego nowego nagrania. Pytania
   pisane osobno pod test poziomujący rozjechałyby się z kursem przy
   pierwszej poprawce lekcji.

   Skrypt klasyczny. Wymaga core.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Placement = {};

  /** Ile zadań na rundę i ile trzeba trafić, żeby poziom uznać za zdany. */
  var NA_RUNDE = 6;
  var PROG = 0.7;

  /* Typy, które nadają się na szybki test: bez mikrofonu, bez długich
     dialogów, rozstrzygalne w kilkanaście sekund. */
  var TYPY = ["mcq", "truefalse", "fill", "trans", "cloze", "gender", "conj"];

  /** Zadania ze sprawdzianów danego poziomu, wymieszane deterministycznie. */
  function pulaDla(kod, seed) {
    var lv = Core.registry.byCode[kod];
    if (!lv) return [];
    var out = [];
    (lv.units || []).forEach(function (u) {
      var t = u.test;
      if (!t) return;
      (t.exercises || []).forEach(function (ex, i) {
        if (TYPY.indexOf(ex.t) >= 0) out.push({ ex: ex, lessonId: t.id, index: i });
      });
    });
    return Core.seededShuffle(out, seed + kod);
  }

  /**
   * Stan wyszukiwania binarnego po poziomach.
   *
   * lo to najwyższy poziom ZDANY, hi to najwyższy jeszcze możliwy.
   * Test kończy się, gdy przedział się domyka: wtedy dwa sąsiednie
   * poziomy są rozstrzygnięte i dalsze pytania niczego nie dodadzą.
   */
  function nowyPrzebieg(seed) {
    var kody = Core.registry.levels.map(function (l) { return l.code; });
    return {
      seed: seed,
      kody: kody,
      lo: -1,                 // nic jeszcze nie zdane
      hi: kody.length - 1,
      zadane: 0,
      trafione: 0,
      historia: []            // [{kod, dobre, z}]
    };
  }

  /** Który poziom badamy w tej rundzie, albo null gdy koniec. */
  function nastepnyPoziom(p) {
    if (p.lo >= p.hi) return null;
    return p.kody[Math.ceil((p.lo + p.hi) / 2)];
  }

  /** Zapisuje wynik rundy i zawęża przedział. */
  function zapiszRunde(p, kod, dobre, z) {
    var i = p.kody.indexOf(kod);
    p.historia.push({ kod: kod, dobre: dobre, z: z });
    p.zadane += z;
    p.trafione += dobre;
    if (z && dobre / z >= PROG) p.lo = i;
    else p.hi = i - 1;
    return p;
  }

  /** Poziom, od którego uczeń ma zacząć. */
  function wynik(p) {
    var idx = Math.max(p.lo, 0);
    return { code: p.kody[idx], index: idx, asked: p.zadane, hit: p.trafione };
  }

  /**
   * Zapisuje wynik i oznacza jako zaliczone lekcje poziomów NIŻSZYCH.
   *
   * Poziom, na który uczeń trafił, zostaje otwarty: test mówi „umiesz
   * mniej więcej tyle", a nie „przerobiłeś każdą lekcję". Punktów za te
   * lekcje nie ma i nie wliczają się do statystyki ukończonych — uczeń
   * ich nie zrobił, a licznik, który twierdzi inaczej, kłamie o nauce.
   */
  function zastosuj(p) {
    var w = wynik(p);
    var oznaczone = 0;
    Core.registry.levels.forEach(function (lv, i) {
      if (i >= w.index) return;
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).concat(u.test ? [u.test] : []).forEach(function (l) {
          if (Core.state.lessons[l.id]) return;
          Core.state.lessons[l.id] = { placed: true, done: true, attempts: 0, score: 0, total: 0, best: 0, ts: Date.now() };
          oznaczone++;
        });
      });
    });
    Core.state.placement = {
      level: w.code, ts: Date.now(),
      asked: w.asked, hit: w.hit, marked: oznaczone,
      history: p.historia
    };
    Core.save();
    return { placement: Core.state.placement, marked: oznaczone };
  }

  Placement.NA_RUNDE = NA_RUNDE;
  Placement.PROG = PROG;
  Placement.pulaDla = pulaDla;
  Placement.nowyPrzebieg = nowyPrzebieg;
  Placement.nastepnyPoziom = nastepnyPoziom;
  Placement.zapiszRunde = zapiszRunde;
  Placement.wynik = wynik;
  Placement.zastosuj = zastosuj;

  global.Placement = Placement;

})(window);
