/* ============================================================
   cils-run.js — przebieg symulacji egzaminu: kolejność, odpowiedzi, wynik.

   Wyjęte z views-cils.js. Podział idzie po tym, co da się sprawdzić bez
   przeglądarki: `cils.js` liczy punkty jednej sekcji, ten plik prowadzi
   CAŁE podejście (cztery sekcje po kolei, siatka odpowiedzi, sekcje
   z wyczerpanym czasem, wpis do historii), a views-cils.js rysuje zegar,
   przyciski i podsumowanie.

   Dlaczego to nie jest podział kosmetyczny: przejście symulacji trwa
   godzinę i ma cztery odliczania. Test w przeglądarce, który by przez nią
   przeszedł, musiałby albo naprawdę odczekać ten czas, albo podmienić
   zegar — więc go nie było, i cały rachunek punktów wraz z zapisem do
   historii chodził bez ani jednego sprawdzenia.

   NA EGZAMINIE SEKCJA ZAMKNIĘTA JEST ZAMKNIĘTA. Nie ma drogi powrotnej,
   bo symulator, w którym można wrócić i poprawić, mierzy wiedzę bez presji
   czasu, czyli tę, której uczeń nie ma w sali.

   Skrypt klasyczny. Wymaga cils.js (punktacja) i core.js (stan) — obu
   dopiero w chwili wywołania, nie przy wczytaniu.
   ============================================================ */
(function (global) {
  "use strict";

  /* Kolejność sekcji jest kolejnością egzaminu, nie kolejnością pliku. */
  var ORDINE = ["ascolto", "lettura", "scritta", "orale"];

  /* Ile podejść trzymamy w historii. Wpis waży kilkadziesiąt bajtów, a
     localStorage jest wspólne dla całego kursu: bez tego sufitu historia
     rosłaby jako jedyny kontener bez końca. */
  var MAX_HISTORII = 50;

  function create(s) {
    var run = {
      sim: s,
      i: 0,
      risposte: {},     // id sekcji -> lista prób -> lista odpowiedzi
      scaduta: {},      // id sekcji -> true, gdy skończył się czas
      punti: {},        // id sekcji -> punkty
      szczegoly: {},    // id sekcji -> pełny rachunek z Cils.punteggioSezione
      scritta: null,
      orale: null
    };

    function sekcja() {
      var id = ORDINE[run.i];
      return id ? global.Cils.sezione(run.sim, id) : null;
    }

    /**
     * Pusta siatka odpowiedzi: jedna lista na próbę, o długości jej items.
     * Powstaje PRZED pierwszym kliknięciem, bo punktacja chodzi po indeksach
     * i lista krótsza o jeden przesunęłaby odpowiedzi na cudze pytania.
     */
    function przygotuj(sez) {
      run.risposte[sez.id] = (sez.prove || []).map(function (p) {
        return new Array((p.items || []).length);
      });
      return run.risposte[sez.id];
    }

    function odpowiedz(sezId, prova, item, wartosc) {
      var siatka = run.risposte[sezId];
      if (!siatka || !siatka[prova]) return false;
      siatka[prova][item] = wartosc;
      return true;
    }

    /** Zamyka sekcję zamkniętą: liczy punkty i zapamiętuje rachunek. */
    function zamknij(sez) {
      var w = global.Cils.punteggioSezione(sez, run.risposte[sez.id]);
      run.punti[sez.id] = w.punti;
      run.szczegoly[sez.id] = w;
      return w;
    }

    function scadla(id) { run.scaduta[id] = true; }

    function dalej() { run.i++; return sekcja(); }

    return {
      dane: run,
      sekcja: sekcja,
      przygotuj: przygotuj,
      odpowiedz: odpowiedz,
      zamknij: zamknij,
      scadla: scadla,
      dalej: dalej,
      /** Odpowiedzi sekcji — do podglądu w teście i do punktacji. */
      odpowiedzi: function (id) { return run.risposte[id]; },
      czyScadla: function (id) { return !!run.scaduta[id]; },
      zapiszScritta: function (traccia, testo) { run.scritta = { traccia: traccia, testo: testo }; },
      zapiszOrale: function (argomento, spuntate) { run.orale = { argomento: argomento, spuntate: spuntate }; },
      esito: function () { return global.Cils.esito(run.punti); },
      get krok() { return run.i + 1; },
      get ile() { return ORDINE.length; },
      get skonczone() { return run.i >= ORDINE.length; }
    };
  }

  /**
   * Wpis do historii. Trzymamy punkty dwóch sprawności, które symulator umie
   * policzyć, listę sekcji z wyczerpanym czasem i werdykt — nie odpowiedzi:
   * te są ćwiczeniem, nie historią.
   */
  function wpis(run, e, teraz) {
    var d = run.dane;
    return {
      sim: d.sim.id,
      ts: teraz,
      punti: { ascolto: d.punti.ascolto || 0, lettura: d.punti.lettura || 0 },
      scadute: Object.keys(d.scaduta),
      verdetto: e.verdetto
    };
  }

  /**
   * Dopisuje podejście do historii ucznia.
   *
   * Kontener jest DOKŁADANY w store.js, więc starszy profil dostaje go pustym
   * i numer schematu się nie rusza. Array.isArray, nie truthy: import z
   * `cils.runs` innego typu przechodzi walidację (sprawdza tylko pole
   * najwyższego poziomu), a `push` na napisie rzuciłby wyjątkiem w środku
   * rysowania podsumowania — czyli po godzinie egzaminu.
   *
   * @returns {boolean} czy wpis wszedł
   */
  function zapisz(run, e, teraz) {
    var st = global.Core.state.cils;
    if (!st || !Array.isArray(st.runs)) return false;
    st.runs.push(wpis(run, e, teraz));
    if (st.runs.length > MAX_HISTORII) st.runs = st.runs.slice(-MAX_HISTORII);
    global.Core.save();
    return true;
  }

  global.CilsRun = {
    create: create,
    zapisz: zapisz,
    wpis: wpis,
    ORDINE: ORDINE,
    MAX_HISTORII: MAX_HISTORII
  };

})(window);
