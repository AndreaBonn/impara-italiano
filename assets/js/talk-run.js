/* ============================================================
   talk-run.js — przebieg rozmowy: gdzie jesteśmy, co się liczy, dokąd dalej.

   Wyjęte z views-talk.js, gdzie ta logika mieszkała wewnątrz funkcji
   rysującej dymki. Nie chodzi o długość pliku: chodzi o to, że rozmowa
   ma rozwidlenia, powrót na ostatni wybór i wynik, a każda z tych rzeczy
   psuje się po cichu. Zła gałąź wygląda jak inna scena, zgubiony punkt
   wygląda jak surowsza ocena, a powrót na złe miejsce wygląda jak dialog
   napisany od nowa. Żadnej z nich nie widać w przeglądarce bez przejścia
   całej sceny do końca — i dlatego przez cały czas nie miały testu.

   Ten plik nie wie nic o DOM-ie i nic nie zapisuje. Oddaje opis przejścia
   („idź dalej z tym tekstem", „stój, to pierwsza pomyłka"), a widok
   zamienia go na dymek, komunikat i wpis w quaderno błędów.

   TRZY DECYZJE, które ten kod trzyma i które łatwo cofnąć przez pomyłkę:

   - Zła odpowiedź ZATRZYMUJE scenę. Wcześniej rozmowa szła dalej, tyle że
     w dymku stawał wzór zamiast tego, co uczeń powiedział: z ekranu
     wyglądało to na zaliczone, więc pomyłka nie miała konsekwencji.
   - Przy rozwidleniu wygrywa gałąź NAJBLIŻSZA wypowiedzi, nie pierwsza
     pasująca: dwie repliki w tej samej scenie bywają podobne („tylko kawa"
     / „kawa i deser") i pierwsza z brzegu wysyłałaby ucznia tam, gdzie
     nie prosił.
   - Do quaderno błędów pomyłka trafia RAZ NA TURĘ, nie raz na próbę:
     dziesięć podejść do jednego zdania to jedna pomyłka, nie dziesięć.

   Skrypt klasyczny. Wymaga Core (similarity).
   ============================================================ */
(function (global) {
  "use strict";

  /* Próg podobieństwa, powyżej którego wypowiedź uchodzi za tę replikę.
     Niżej niż w ćwiczeniach pisanych, bo rozpoznawanie mowy gubi końcówki
     i interpunkcję, a rozmowa ma iść dalej, nie egzaminować ortografii. */
  var PROG = 0.72;

  function create(conv) {
    var tury = (conv && conv.turns) || [];

    var i = 0;
    var punkty = 0;
    var przejsteTury = 0;
    var bledny = false;

    /* Punkty wyboru odwiedzone w tym przejściu. `znak` jest nieprzezroczysty:
       widok wkłada tam swoją miarę transkryptu, żeby po powrocie uciąć go
       dokładnie w miejscu wyboru. Ten plik go nie czyta. */
    var wybory = [];

    /** Nieznany cel skoku = koniec rozmowy; validate.mjs tego nie przepuści. */
    function indeksTury(id) {
      for (var n = 0; n < tury.length; n++) if (tury[n].id === id) return n;
      return tury.length;
    }

    /** Tura z polem `go` mówi, dokąd iść; bez niego idziemy o jeden dalej. */
    function dalej(skad, teraz) {
      return skad && skad.go ? indeksTury(skad.go) : teraz + 1;
    }

    function biezaca() { return i < tury.length ? tury[i] : null; }

    /** Repliki ucznia mają `sp: "TY"`; reszta należy do rozmówcy. */
    function mojaTura() {
      var t = biezaca();
      return !!t && t.sp === "TY";
    }

    /** Przejście przez replikę rozmówcy: nic się nie liczy, idziemy dalej. */
    function advance() {
      var t = biezaca();
      if (t) i = dalej(t, i);
      return biezaca();
    }

    /** Wzory przyjmowane w tej turze: z pierwszej gałęzi albo z samej tury. */
    function przyjmowane(t) {
      if (t.opts) return t.opts[0].accept || [];
      return t.accept || [t.it];
    }

    /**
     * Początek repliki ucznia. Liczy turę do wyniku i — przy rozwidleniu —
     * zapisuje punkt powrotu ZANIM cokolwiek się wydarzy.
     */
    function beginTurn(znak) {
      var t = biezaca();
      przejsteTury++;
      bledny = false;
      if (t && t.opts) {
        wybory.push({ i: i, znak: znak, punkty: punkty, tury: przejsteTury - 1 });
      }
      return t;
    }

    /** Gałąź najbliższa temu, co uczeń powiedział, razem z jej podobieństwem. */
    function dopasuj(text) {
      var t = biezaca();
      var kandydaci = (t && t.opts) || [{ accept: przyjmowane(t || {}) }];
      var naj = { wynik: -1, opcja: null };
      kandydaci.forEach(function (o) {
        var b = 0;
        (o.accept || []).forEach(function (a) {
          b = Math.max(b, global.Core.similarity(text, a));
        });
        if (b > naj.wynik) naj = { wynik: b, opcja: o };
      });
      return naj;
    }

    /** Odnotowuje pomyłkę. `true` znaczy „pierwsza w tej turze". */
    function pomylka() {
      if (bledny) return false;
      bledny = true;
      return true;
    }

    /** Przejście dalej z podanym tekstem w dymku. */
    function idzDalej(tekst, gal, tr) {
      var t = biezaca();
      i = dalej(t && t.opts ? gal : t, i);
      return { ok: true, tekst: tekst, tr: tr || "", punkt: false };
    }

    /**
     * Odpowiedź ucznia — z klawiatury albo z mikrofonu.
     * @returns {{ok:boolean, tekst?:string, tr?:string, punkt?:boolean, pierwszaPomylka?:boolean}}
     */
    function answer(text) {
      var t = biezaca();
      var naj = dopasuj(text);
      if (naj.wynik < PROG) return { ok: false, pierwszaPomylka: pomylka() };

      var punkt = !bledny;
      if (punkt) punkty++;
      var wynik = idzDalej(text, naj.opcja, (naj.opcja && naj.opcja.tr) || (t && t.tr));
      wynik.punkt = punkt;
      return wynik;
    }

    /**
     * Klik w gałąź. NIE przechodzi przez próg podobieństwa: uczeń wybrał
     * replikę z listy, więc nie ma czego oceniać — a od kiedy zła odpowiedź
     * zatrzymuje scenę, porównywanie mogłoby zablokować wybór na własnej
     * podpowiedzi.
     */
    function choose(n) {
      var t = biezaca();
      var gal = (t.opts || [])[n];
      if (!gal) return { ok: false, pierwszaPomylka: false };

      var punkt = !bledny;
      if (punkt) punkty++;
      var tekst = gal.hintIt || (gal.accept || [])[0] || "";
      var wynik = idzDalej(tekst, gal, gal.tr);
      wynik.punkt = punkt;
      return wynik;
    }

    /**
     * Rezygnacja: wzór wchodzi do transkryptu i scena idzie dalej, bez punktu.
     *
     * Wzór bierzemy z podpowiedzi, nie z `accept[0]`: klucze są pisane pod
     * porównywanie, małą literą i bez interpunkcji, i w dymku wyglądałyby
     * jak zdanie napisane byle jak. Przy rozwidleniu bierzemy pierwszą gałąź
     * — kierunku nie da się zgadnąć, skoro uczeń nic nie wybrał.
     */
    function reveal() {
      var t = biezaca();
      var gal = t.opts ? t.opts[0] : null;
      var wzor = (gal ? (gal.hintIt || (gal.accept || [])[0]) : t.hintIt) || przyjmowane(t)[0] || "";
      var pierwsza = pomylka();
      var wynik = idzDalej(wzor, gal, (gal && gal.tr) || t.tr);
      wynik.pierwszaPomylka = pierwsza;
      return wynik;
    }

    /**
     * Powrót na ostatnie rozwidlenie, nie na początek. Gałąź, której się nie
     * wybrało, jest tym, po co w ogóle są rozwidlenia; kazać przechodzić od
     * nowa cały dialog, żeby ją zobaczyć, znaczy nie pokazać jej nikomu.
     */
    function rewind() {
      var w = wybory.pop();
      if (!w) return null;
      i = w.i;
      punkty = w.punkty;
      przejsteTury = w.tury;
      bledny = false;
      return w;
    }

    return {
      current: biezaca,
      mine: mojaTura,
      advance: advance,
      beginTurn: beginTurn,
      answer: answer,
      choose: choose,
      reveal: reveal,
      rewind: rewind,
      accepted: function () { return przyjmowane(biezaca() || {}); },
      get done() { return i >= tury.length; },
      get score() { return punkty; },
      get turns() { return przejsteTury; },
      get canRewind() { return wybory.length > 0; },
      get index() { return i; }
    };
  }

  global.Talk = { create: create, PROG: PROG };

})(window);
