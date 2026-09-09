/* ============================================================
   writing.js — co da się sprawdzić w tekście bez sprawdzającego.

   Kurs nie ma backendu, więc nikt nie oceni wypracowania. Kusi wtedy
   rozwiązanie pozorne: lista pytań do samooceny („czy użyłeś czasu
   przeszłego?"). Uczeń odpowiada sobie „tak", nikt tego nie widzi i
   ćwiczenie nie zostawia po sobie ani jednej informacji — ani jemu,
   ani quaderno błędów.

   Dlatego to, co DA SIĘ zmierzyć, jest mierzone mechanicznie:
   zadanie deklaruje konstrukcje, których wymaga, a Verbs.conjugate
   generuje ich formy i szuka ich w tekście. Wynik nie jest oceną
   („dobrze napisane"), tylko faktem: tego użyłeś, tego nie.

   Samoocena zostaje wyłącznie dla tego, czego żaden automat tu nie
   zmierzy — sensu, spójności, brzmienia.

   Skrypt klasyczny. Wymaga core.js i verbs.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Writing = {};

  /** Znak w znak: małe litery i zdjęte akcenty, bez ruszania odstępów. */
  function fold(s) {
    return Core.stripAccents(String(s == null ? "" : s).toLowerCase());
  }

  /**
   * Formy, których szukamy dla jednego wymagania.
   *
   * `{verb, tense}` rozwija się przez koniugator, więc zadanie deklaruje
   * konstrukcję, a nie listę form — dopisanie czasownika nieregularnego
   * do verbs.js poprawia od razu wszystkie zadania.
   */
  function formyDla(req) {
    if (req.word) return [req.word];
    if (req.any) return req.any.slice();
    if (!req.verb) return [];
    var f = (global.Verbs && global.Verbs.conjugate(req.verb, req.tense || "pres")) || [];
    return f.filter(Boolean);
  }

  /**
   * Wzorzec jednej formy.
   *
   * Koniugator daje uzgodnienie MĘSKIE („sono andato"). Uczennica, która
   * pisze o sobie, napisze „sono andata" i będzie miała rację — więc w
   * formach złożonych ostatnia samogłoska jest dowolna z o/a/i/e.
   * W formach prostych („parlavo") nic nie zmieniamy: tam końcówka niesie
   * osobę i podmiana byłaby zgodą na błąd.
   */
  function wzorzec(forma) {
    var f = fold(forma).trim().replace(/\s+/g, " ");
    var uciekniete = f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (f.indexOf(" ") >= 0) uciekniete = uciekniete.replace(/[oaie]$/, "[oaie]");
    return new RegExp("(^|[^a-zà-ù])" + uciekniete + "([^a-zà-ù]|$)");
  }

  /**
   * Sprawdza tekst wobec listy wymagań.
   *
   * Zwraca po jednym wpisie na wymaganie: co było szukane, czy się
   * znalazło i która forma. Bez ocen i bez procentów — to jest odczyt,
   * nie werdykt.
   */
  function analyse(text, requires) {
    var hay = fold(text || "");
    return (requires || []).map(function (req) {
      var formy = formyDla(req);
      var trafiona = null;
      for (var i = 0; i < formy.length && !trafiona; i++) {
        if (wzorzec(formy[i]).test(hay)) trafiona = formy[i];
      }
      return {
        key: req.key || req.verb || req.word || (req.any || [])[0] || "?",
        verb: req.verb || null,
        tense: req.tense || null,
        word: req.word || null,
        any: req.any || null,
        found: !!trafiona,
        hit: trafiona
      };
    });
  }

  /** Ile słów napisał uczeń — jedyna liczba, którą warto mu pokazać. */
  function wordCount(text) {
    var t = String(text || "").trim();
    return t ? t.split(/\s+/).length : 0;
  }

  /* ---------------- Zapis ---------------- */

  /**
   * Zapisuje wypracowanie.
   *
   * Wypracowania NIE podlegają potarciu przy pełnej pamięci (core.js
   * § pruneCandidates): to jedyna treść w stanie, której uczeń nie
   * odtworzy dalszą nauką.
   */
  function save(id, text, wynik) {
    Core.state.writing[id] = {
      text: String(text || ""),
      ts: Date.now(),
      words: wordCount(text),
      found: (wynik || []).filter(function (r) { return r.found; }).length,
      total: (wynik || []).length
    };
    Core.save();
    return Core.state.writing[id];
  }

  function load(id) { return Core.state.writing[id] || null; }

  Writing.analyse = analyse;
  Writing.wordCount = wordCount;
  Writing.save = save;
  Writing.load = load;
  Writing.formyDla = formyDla;

  global.Writing = Writing;

})(window);
