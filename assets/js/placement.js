/* ============================================================
   placement.js — where to start.

   An adult who has already had a taste of Italian does not want to start
   from "ciao". Without this screen they have two roads and both are bad:
   click through a hundred lessons, or jump into the middle and land in a
   gap they do not know about.

   The method: a binary search over the levels, not a test from A1 upwards.
   Six levels fit into three rounds, so ~18 tasks instead of a hundred — and
   a longer test would not be more accurate anyway, only finished less often.

   The tasks come from the unit tests that already exist: not one new
   sentence and not one new recording. Questions written separately for the
   placement test would drift away from the course at the first lesson fix.

   Classic script. Requires core.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Placement = {};

  /** How many tasks per round and how many must be right for a level to count as passed. */
  var NA_RUNDE = 6;
  var PROG = 0.7;

  /* The types suitable for a quick test: no microphone, no long dialogues,
     decidable in a dozen seconds. */
  var TYPY = ["mcq", "truefalse", "fill", "trans", "cloze", "gender", "conj"];

  /** The tasks from a given level's unit tests, shuffled deterministically. */
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
   * The state of the binary search over the levels.
   *
   * lo is the highest level PASSED, hi is the highest still possible. The
   * test ends when the interval closes: two adjacent levels are then
   * settled and further questions would add nothing.
   */
  function nowyPrzebieg(seed) {
    var kody = Core.registry.levels.map(function (l) { return l.code; });
    return {
      seed: seed,
      kody: kody,
      lo: -1,                 // nothing passed yet
      hi: kody.length - 1,
      zadane: 0,
      trafione: 0,
      historia: []            // [{code, right, outOf}]
    };
  }

  /** Which level this round probes, or null when it is over. */
  function nastepnyPoziom(p) {
    if (p.lo >= p.hi) return null;
    return p.kody[Math.ceil((p.lo + p.hi) / 2)];
  }

  /** Records a round's result and narrows the interval. */
  function zapiszRunde(p, kod, dobre, z) {
    var i = p.kody.indexOf(kod);
    p.historia.push({ kod: kod, dobre: dobre, z: z });
    p.zadane += z;
    p.trafione += dobre;
    if (z && dobre / z >= PROG) p.lo = i;
    else p.hi = i - 1;
    return p;
  }

  /** The level the student should start from. */
  function wynik(p) {
    var idx = Math.max(p.lo, 0);
    return { code: p.kody[idx], index: idx, asked: p.zadane, hit: p.trafione };
  }

  /**
   * Stores the result and marks the lessons of the LOWER levels as passed.
   *
   * The level the student landed on stays open: the test says "you know
   * roughly this much", not "you have done every lesson". There are no
   * points for those lessons and they do not count towards the finished
   * statistics — the student did not do them, and a counter claiming
   * otherwise lies about their learning.
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
