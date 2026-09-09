/* ============================================================
   frequency.js — ile prawdziwego włoskiego uczeń już posiada.

   XP i passa mierzą wierność aplikacji: rosną, bo się wraca. Ten moduł
   mierzy JĘZYK. „Znasz 847 z 2000 najczęstszych form, czyli mniej więcej
   58% tego, co pada w zdaniu" to zdanie, które da się sprawdzić poza
   kursem, i dlatego znaczy coś, czego licznik punktów nie znaczy.

   DWIE LICZBY, NIE JEDNA, i to jest sedno:

   - POKRYCIE KURSU — ile z tych form kurs w ogóle uczy. To sufit: wyżej
     uczeń nie wejdzie, choćby przerobił wszystko. Jest własnością KURSU
     i mierzy nas, nie jego.
   - POKRYCIE UCZNIA — ile ma w swojej talii. To jego stan.

   Zlanie ich w jeden procent byłoby wygodne i nieuczciwe: uczeń w 100%
   „gotowy" nadal nie znałby form, których nikt mu nie pokazał, a różnica
   między tymi dwiema liczbami jest właśnie tym, co kursowi zostaje do
   zrobienia.

   Moduł jest CZYSTY: dostaje dane, zwraca liczby. Bez DOM, bez stanu.
   Skrypt klasyczny.
   ============================================================ */
(function (global) {
  "use strict";

  var Frequency = {};

  /**
   * Czy ta forma jest „posiadana" według podanego zbioru haseł.
   *
   * Przechodzi przez resolver, więc talia z „bere" zalicza formę „bevo",
   * a nie tylko dosłowne trafienie. Bez tego kroku licznik pokazywałby
   * uczniowi braki tam, gdzie słowo umie — i to systematycznie, bo lista
   * częstości jest listą FORM, a talia jest talią HASEŁ.
   */
  function posiadana(forma, zbior) {
    if (Object.prototype.hasOwnProperty.call(zbior, forma)) return true;
    var L = global.Lemma;
    if (!L) return false;
    var k = L.kandydaci(forma);
    for (var i = 0; i < k.length; i++) {
      if (Object.prototype.hasOwnProperty.call(zbior, k[i])) return true;
    }
    return false;
  }

  /**
   * Pokrycie listy częstości przez zbiór haseł.
   *
   * @param {Array} words  [[forma, ile], …] z data/core/frequenza.js
   * @param {object} zbior mapa hasło -> cokolwiek (liczy się klucz)
   * @param {number} tokenow całkowita liczba tokenów korpusu
   * @returns {{znane:number, wszystkie:number, udzialTokenow:number}}
   */
  function pokrycie(words, zbior, tokenow) {
    var znane = 0, trafione = 0;
    (words || []).forEach(function (para) {
      if (posiadana(para[0], zbior)) { znane++; trafione += para[1]; }
    });
    return {
      znane: znane,
      wszystkie: (words || []).length,
      /* Udział w tekście, nie w liście: 200 słów funkcyjnych waży więcej
         niż 1800 rzeczowników, i uczeń ma to widzieć. */
      udzialTokenow: tokenow ? trafione / tokenow : 0
    };
  }

  /** Zbiór haseł, których uczy kurs: leksykon lekcji plus słowa czytanek. */
  function slownikKursu() {
    var L = global.Lemma;
    var reg = (global.Core && global.Core.registry) || {};
    if (L && L.zbudujSlownik) return L.zbudujSlownik(reg.levels, global.READINGS);
    return {};
  }

  /** Zbiór haseł, które uczeń ma w talii. Klucz fiszki to sam włoski. */
  function slownikUcznia() {
    var out = {};
    var srs = (global.Core && global.Core.state && global.Core.state.srs) || {};
    Object.keys(srs).forEach(function (k) { out[k] = true; });
    return out;
  }

  /**
   * Najczęstsze formy, których uczeń NIE ma, a kurs ich uczy.
   *
   * Warunek „kurs ich uczy" jest istotny: podsuwanie słowa, do którego nie
   * ma glosy ani nagrania, przenosi na ucznia pracę, której nie umie
   * wykonać. Braki spoza kursu są widoczne w różnicy dwóch liczb, nie na
   * liście do klikania.
   */
  /**
   * Hasło kursu, do którego sprowadza się ta forma. Puste = kurs go nie zna.
   *
   * Wynik jest tym, co trafi na fiszkę, więc widok ma pokazywać TO, a nie
   * formę z listy. Pierwsza wersja pokazywała formę i dodawała hasło:
   * uczeń widział „ha", słyszał „ha" (bez nagrania, bo nagrany jest
   * bezokolicznik) i dostawał kartę „avere".
   */
  function hasloKursu(forma, kurs) {
    var L = global.Lemma;
    if (!L) return Object.prototype.hasOwnProperty.call(kurs, forma) ? forma : "";

    /* Najpierw bezokolicznik, jeśli to forma czasownika. Ta kolejność jest
       całą poprawką: „ha" i „ho" SĄ w słowniku kursu jako osobne wyrazy,
       bo zwroty wielowyrazowe rozkładamy na słowa — więc sprawdzenie
       dosłowne wygrywało i lista braków pokazywała cztery razy „avere"
       pod czterema różnymi formami. */
    var inf = L.lemat(forma);
    if (inf && Object.prototype.hasOwnProperty.call(kurs, inf)) return inf;

    if (Object.prototype.hasOwnProperty.call(kurs, forma)) return forma;

    /* Reguły liczby mnogiej są heurystyką, więc idą na końcu: „casa" nie
       ma się zwinąć do „caso" tylko dlatego, że kurs zna oba. */
    var k = L.kandydaci(forma);
    for (var i = 0; i < k.length; i++) {
      if (Object.prototype.hasOwnProperty.call(kurs, k[i])) return k[i];
    }
    return "";
  }

  /**
   * Najczęstsze HASŁA, których uczeń nie ma, a kurs ich uczy.
   *
   * Zwijane po haśle, nie po formie. Lista częstości ma osobno „ho", „ha",
   * „hai", „hanno" — bez zwinięcia pierwsza piątka braków to cztery razy
   * to samo słowo, co wygląda jak usterka i marnuje jedyne miejsce, w
   * którym podsuwamy uczniowi coś do zrobienia.
   *
   * Ranga to najlepsza (najniższa) z rang jego form, częstość — suma.
   */
  function brakujace(words, kurs, uczen, limit) {
    var wg = {};
    var kolejnosc = [];
    (words || []).forEach(function (para, i) {
      var forma = para[0];
      if (global.Lemma && global.Lemma.funkcyjne(forma)) return;
      if (posiadana(forma, uczen)) return;
      var haslo = hasloKursu(forma, kurs);
      if (!haslo) return;
      if (!wg[haslo]) {
        wg[haslo] = { haslo: haslo, ranga: i + 1, ile: 0, formy: [] };
        kolejnosc.push(haslo);
      }
      wg[haslo].ile += para[1];
      if (wg[haslo].formy.indexOf(forma) < 0) wg[haslo].formy.push(forma);
    });
    return kolejnosc.slice(0, limit || 20).map(function (h) { return wg[h]; });
  }

  Frequency.posiadana = posiadana;
  Frequency.pokrycie = pokrycie;
  Frequency.slownikKursu = slownikKursu;
  Frequency.slownikUcznia = slownikUcznia;
  Frequency.brakujace = brakujace;
  global.Frequency = Frequency;

})(window);
