/* ============================================================
   consent.js — zgoda przed pierwszym wysłaniem głosu na zewnątrz.

   README kursu obiecywał, że nic nie opuszcza przeglądarki. To nie było
   prawdą i nie jest: rozpoznawanie mowy (`SpeechRecognition`) w
   przeglądarkach, które je udostępniają, wysyła nagranie głosu na serwer
   dostawcy i odsyła tekst. Dotyczy 150 ćwiczeń typu `speak` i dziesięciu
   rozmów, czyli działa od dawna i bez pytania nikogo.

   Zdanie w README zostało poprawione. Ten moduł zamyka drugą połowę: uczeń
   ma się DOWIEDZIEĆ, zanim jego głos pierwszy raz wyjdzie, a nie potem.

   BRAMKA STOI W JEDNYM MIEJSCU, w `Audio2.listen`, a nie w trzech widokach,
   które dziś go wołają. Obrona rozsypana po miejscach wywołania działa do
   pierwszego nowego miejsca wywołania, a takie właśnie dokładamy przy
   shadowingu i przy egzaminie. Jedno przejście, którego nie da się ominąć,
   jest tańsze niż trzy, o których trzeba pamiętać.

   Zgoda jest zapamiętana w ustawieniach i odwoływalna. Kontener jest
   DOKŁADANY, więc starszy profil dostaje go pustego sam z siebie i numer
   schematu się nie rusza.

   Skrypt klasyczny. Wymaga core.js; widok podaje własną funkcję pytającą.
   ============================================================ */
(function (global) {
  "use strict";

  var Consent = {};

  /* Funkcja pytająca, podstawiana przez warstwę widoku. Domyślnie odmawiamy:
     moduł bez interfejsu nie ma jak zapytać, a milcząca zgoda jest właśnie
     tym, czego ten plik ma nie dopuścić. */
  var pytaj = null;

  function ustawienia() {
    return (global.Core && global.Core.state && global.Core.state.settings) || {};
  }

  /** Czy uczeń zgodził się już na wysyłanie głosu do rozpoznawania. */
  function udzielona() { return ustawienia().sttConsent === true; }

  /** Zapisuje decyzję. `false` cofa zgodę udzieloną wcześniej. */
  function ustaw(wartosc) {
    var s = ustawienia();
    s.sttConsent = !!wartosc;
    if (global.Core && global.Core.save) global.Core.save();
  }

  /**
   * Podstawia sposób zadania pytania.
   * @param {function(function(boolean))} fn dostaje callback z decyzją
   */
  function uzyjPytania(fn) { pytaj = fn; }

  /**
   * Uruchamia `akcja()` tylko wtedy, gdy zgoda jest albo zostanie udzielona.
   *
   * @param {function} akcja  co zrobić po zgodzie
   * @param {function} [odmowa]  co zrobić przy odmowie albo braku pytania
   */
  function zZgoda(akcja, odmowa) {
    if (udzielona()) { akcja(); return; }
    if (!pytaj) { odmowa && odmowa(); return; }
    pytaj(function (tak) {
      if (!tak) { odmowa && odmowa(); return; }
      ustaw(true);
      akcja();
    });
  }

  Consent.udzielona = udzielona;
  Consent.ustaw = ustaw;
  Consent.uzyjPytania = uzyjPytania;
  Consent.zZgoda = zZgoda;
  global.Consent = Consent;

})(window);
