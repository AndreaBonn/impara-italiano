/* ============================================================
   pwa-rules.js — reguły ogłaszania nowej wersji kursu.

   Trzy pytania i wszystkie trzy są decyzjami, nie skutkami: czy nowa
   wersja ma być zapowiedziana, czy wolno znów zapytać serwer, czy
   przejęcie kontroli ma przeładować stronę. Żadne z nich nie dotyka
   ani DOM-u, ani service workera, ani zegara — biorą stan i oddają
   „tak" albo „nie".

   Podział jest ten sam, którym chodzą już lemma-morf.js i cils-html.js:
   czysta funkcja osobno od tego, co dotyka przeglądarki. Powód jest tu
   ostrzejszy niż zwykle. Cała ta funkcja żyje w stanach workera, których
   atrapy odtwarzają źle: test na prawdziwej sekwencji potrzebuje dwóch
   wydań i dwóch kart, czyli Playwrighta i kilkunastu sekund. To, co da
   się rozstrzygnąć bez przeglądarki, ma się rozstrzygać bez niej.

   Skrypt klasyczny.
   ============================================================ */
(function (global) {
  "use strict";

  /**
   * Najkrótszy odstęp między dwoma pytaniami serwera o nową wersję.
   *
   * Sprawdzenie idzie przy każdym powrocie na pierwszy plan, a to na
   * zainstalowanej aplikacji zdarza się przy każdym przełączeniu okna:
   * bez progu przejście tam i z powrotem między dwoma aplikacjami
   * zamienia się w serię żądań. Kwadrans jest kompromisem — uczeń, który
   * wraca do kursu po przerwie, i tak dostaje sprawdzenie od razu, bo
   * wchodzi przez wczytanie strony, nie przez powrót na pierwszy plan.
   */
  var PRZERWA = 15 * 60 * 1000;

  /**
   * Czy zapowiedzieć nową wersję.
   *
   * Dwa warunki, nie jeden. `czeka` mówi, że nowa wersja jest gotowa i
   * stoi w kolejce. `kontrolowana` mówi, że stronę obsługiwał JUŻ
   * poprzedni worker w chwili jej wczytania — i bez tego drugiego
   * warunku pierwsza wizyta wyglądałaby dokładnie jak aktualizacja,
   * bo pierwszy worker też przechodzi przez stan „installed". Uczeń
   * dostawałby prośbę o odświeżenie strony, którą właśnie otworzył.
   *
   * @param {{czeka: boolean, kontrolowana: boolean}} stan
   * @returns {boolean}
   */
  function ogloszenie(stan) {
    if (!stan) return false;
    return !!stan.czeka && !!stan.kontrolowana;
  }

  /**
   * Czy wolno znów zapytać serwer o nową wersję.
   *
   * Zegar cofnięty (zmiana strefy, poprawka czasu) daje ujemny odstęp.
   * Bez osobnej gałęzi wyszłoby z tego „jeszcze nie teraz" na tak długo,
   * jak duże było cofnięcie — czyli cisza aż do przeładowania strony.
   *
   * @param {number} ostatnie moment ostatniego sprawdzenia (ms); 0 = nigdy
   * @param {number} teraz    moment bieżący (ms)
   * @param {number} [przerwa] próg w ms; domyślnie PRZERWA
   * @returns {boolean}
   */
  function sprawdzac(ostatnie, teraz, przerwa) {
    var prog = przerwa === undefined ? PRZERWA : przerwa;
    if (!ostatnie) return true;
    if (teraz < ostatnie) return true;
    return teraz - ostatnie >= prog;
  }

  /**
   * Czy przejęcie kontroli przez nowego workera ma przeładować stronę.
   *
   * `kontrolowana` odsiewa pierwszą wizytę: tam kontrolę przejmuje
   * pierwszy worker (clients.claim w activate) i przeładowanie byłoby
   * mignięciem ekranu bez powodu. `juzPrzeladowana` odsiewa pętlę:
   * zdarzenie potrafi przyjść więcej niż raz, a druga próba trafiałaby
   * już w stronę, która się właśnie wczytuje.
   *
   * @param {{kontrolowana: boolean, juzPrzeladowana: boolean}} stan
   * @returns {boolean}
   */
  function przeladowanie(stan) {
    if (!stan) return false;
    return !!stan.kontrolowana && !stan.juzPrzeladowana;
  }

  global.PwaRules = {
    ogloszenie: ogloszenie,
    sprawdzac: sprawdzac,
    przeladowanie: przeladowanie,
    PRZERWA: PRZERWA
  };

})(window);
