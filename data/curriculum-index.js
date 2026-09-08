/* ============================================================
   curriculum-index.js — mapa całego kursu
   Rejestruje sześć poziomów CEFR. Treść każdego poziomu leży
   w osobnych plikach i wczytuje się dopiero, gdy uczeń tam wejdzie.

   Sylabus gramatyczny oparty na dokumentach referencyjnych dla
   języka włoskiego jako obcego (CLIQ / Uniwersytety dla Obcokrajowców
   w Sienie i Perugii — sillabo A1–C2).
   ============================================================ */
(function () {
  "use strict";

  LINGUAI.registerLevel({
    code: "A1",
    cefrLabel: "Contatto",
    namePl: "Pierwszy kontakt",
    descPl: "Przedstawiasz się, zamawiasz, kupujesz, mówisz o sobie i swoim dniu. " +
            "Czas teraźniejszy, rodzajniki, rodzaj i liczba, pierwsze czasowniki nieregularne.",
    dataFiles: ["data/a1-01.js", "data/a1-02.js", "data/a1-03.js"]
  });

  LINGUAI.registerLevel({
    code: "A2",
    cefrLabel: "Sopravvivenza",
    namePl: "Radzę sobie sam",
    descPl: "Opowiadasz o przeszłości i planach, załatwiasz sprawy w podróży, u lekarza, w hotelu. " +
            "Passato prossimo, imperfetto, futuro, zaimki dopełnienia, tryb rozkazujący.",
    dataFiles: ["data/a2-01.js", "data/a2-02.js"]
  });

  LINGUAI.registerLevel({
    code: "B1",
    cefrLabel: "Soglia",
    namePl: "Próg samodzielności",
    descPl: "Wyrażasz opinie, argumentujesz, radzisz sobie z włoską biurokracją i rozmową o pracę. " +
            "Congiuntivo presente, zaimki złożone, ci/ne, zdania względne, mowa zależna.",
    dataFiles: ["data/b1-01.js"]
  });

  LINGUAI.registerLevel({
    code: "B2",
    cefrLabel: "Progresso",
    namePl: "Swoboda",
    descPl: "Dyskutujesz o polityce, ekonomii, kulturze i technologii. Rozumiesz prasę i filmy bez napisów. " +
            "Congiuntivo imperfetto i trapassato, okresy warunkowe, strona bierna, passato remoto.",
    dataFiles: ["data/b2-01.js"]
  });

  LINGUAI.registerLevel({
    code: "C1",
    cefrLabel: "Efficacia",
    namePl: "Skuteczność",
    descPl: "Piszesz i mówisz w rejestrze formalnym i nieformalnym, panujesz nad spójnością tekstu. " +
            "Wartości si, czasowniki z zaimkami (farcela, cavarsela), strona bierna z andare/venire, mowa zależna.",
    dataFiles: ["data/c1-01.js"]
  });

  LINGUAI.registerLevel({
    code: "C2",
    cefrLabel: "Padronanza",
    namePl: "Biegłość",
    descPl: "Idiomatyka, ironia, regionalizmy, język prasy i eseju, niuanse znaczeniowe. " +
            "Peryfrazy czasownikowe, imiesłowy, liczba mnoga nazw złożonych, pełna zgodność czasów.",
    dataFiles: ["data/c2-01.js"]
  });

})();
