/* ============================================================
   Porównywanie tekstu (assets/js/text.js).

   Te funkcje decydują o tym, czy odpowiedź ucznia zostanie uznana za
   dobrą. Pomyłka tutaj nie wywraca niczego na ekranie: po prostu kurs
   zaczyna odrzucać poprawne zdania albo przyjmować błędne, a jedynym
   objawem jest uczeń, który przestaje ufać ocenom.

   Trzy niezmienniki, które trzeba czytać razem z kodem, bo z samego
   podpisu funkcji nie widać ani jednego:
   - fold() zachowuje DŁUGOŚĆ (search.js tnie oryginał po indeksach
     policzonych na tekście złożonym),
   - norm() zwęża białe znaki i dlatego długości NIE zachowuje,
   - similarity() liczy zawsze bez akcentów, także wtedy, gdy checkOpen
     porównuje z akcentami — stąd „źle, ale prawie” na samym akcencie.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const T = loadEngine({ files: ["assets/js/text.js"] }).sandbox.Txt;

describe("detypo", () => {
  test("apostrof z klawiatury telefonu staje się maszynowym", () => {
    assert.equal(T.detypo("l’autore"), "l'autore");
  });

  test("wszystkie cztery warianty apostrofu schodzą do jednego", () => {
    assert.equal(T.detypo("a’b‘c`d´e"), "a'b'c'd'e");
  });

  test("cudzysłowy drukarskie, w tym polski otwierający, schodzą do prostego", () => {
    assert.equal(T.detypo("„cytat” “inny”"), '"cytat" "inny"');
  });

  test("zamiana jest znak w znak, więc długość zostaje ta sama", () => {
    const przed = "„l’autore” ‘x’";
    assert.equal(T.detypo(przed).length, przed.length);
  });

  test("brak wejścia daje pusty napis, nie wyjątek", () => {
    assert.equal(T.detypo(null), "");
    assert.equal(T.detypo(undefined), "");
    assert.equal(T.detypo(""), "");
  });

  test("liczba przechodzi przez napis, a nie wywraca się na replace", () => {
    assert.equal(T.detypo(42), "42");
  });
});

describe("fold", () => {
  test("zdejmuje akcenty i wielkość liter", () => {
    assert.equal(T.fold("Perché È Così"), "perche e cosi");
  });

  test("ujednolica apostrof, tak jak detypo", () => {
    assert.equal(T.fold("L’Autore"), "l'autore");
  });

  test("NIE zwęża białych znaków: search.js tnie oryginał po tych indeksach", () => {
    assert.equal(T.fold("  due   spazi  "), "  due   spazi  ");
  });

  test("długość wyniku równa się długości wejścia dla każdego akcentu", () => {
    ["caffè", "città", "perché", "così", "più", "à á è é ì í ò ó ù ú"].forEach(s => {
      assert.equal(T.fold(s).length, s.length, `zmiana długości na „${s}”`);
    });
  });

  test("litery spoza włoskiego alfabetu zostają nietknięte", () => {
    assert.equal(T.fold("ñ ç ł"), "ñ ç ł");
  });
});

describe("norm", () => {
  test("zwęża białe znaki i przycina brzegi", () => {
    assert.equal(T.norm("  io   mangio  "), "io mangio");
  });

  test("znaki przestankowe zamieniają się w spację, nie znikają bez śladu", () => {
    assert.equal(T.norm("io,mangio"), "io mangio");
    assert.equal(T.norm("Sì! Certo… (davvero?)"), "si certo davvero");
  });

  test("spacje wokół apostrofu są ściągane: „l ' autore” to „l'autore”", () => {
    assert.equal(T.norm("l ' autore"), "l'autore");
    assert.equal(T.norm("l'autore"), "l'autore");
  });

  test("domyślnie zdejmuje akcenty", () => {
    assert.equal(T.norm("Perché"), "perche");
  });

  test("keepAccents zostawia je na miejscu", () => {
    assert.equal(T.norm("Perché sì", { keepAccents: true }), "perché sì");
  });

  test("pusty napis i sam odstęp dają pusty wynik", () => {
    assert.equal(T.norm(""), "");
    assert.equal(T.norm("   "), "");
    assert.equal(T.norm(null), "");
  });
});

describe("levenshtein", () => {
  test("ten sam napis ma odległość zero", () => {
    assert.equal(T.levenshtein("parlare", "parlare"), 0);
  });

  test("klasyczny przypadek kitten → sitting to trzy operacje", () => {
    assert.equal(T.levenshtein("kitten", "sitting"), 3);
  });

  test("wobec pustego napisu odległość to długość drugiego, z obu stron", () => {
    assert.equal(T.levenshtein("", "abc"), 3);
    assert.equal(T.levenshtein("abc", ""), 3);
    assert.equal(T.levenshtein("", ""), 0);
  });

  test("jest symetryczna", () => {
    assert.equal(T.levenshtein("mangio", "mangi"), T.levenshtein("mangi", "mangio"));
  });

  test("jedna litera różnicy to jeden, nie zero", () => {
    assert.equal(T.levenshtein("mangio", "mangia"), 1);
  });
});

describe("similarity", () => {
  test("identyczne napisy dają 1", () => {
    assert.equal(T.similarity("parlare", "parlare"), 1);
  });

  test("dwa puste napisy dają 1, a nie dzielenie przez zero", () => {
    assert.equal(T.similarity("", ""), 1);
    assert.ok(Number.isFinite(T.similarity("", "abc")));
  });

  test("nic wspólnego daje 0, a nie liczbę ujemną", () => {
    assert.equal(T.similarity("xyz", "abcdefgh"), 0);
  });

  test("literówka daje wynik wysoki, ale nie równy 1", () => {
    const s = T.similarity("parlare", "parlere");
    assert.ok(s > 0.8 && s < 1, `oczekiwane 0.8 < s < 1, było ${s}`);
  });

  test("różnica na samym akcencie znika, bo porównanie idzie po norm()", () => {
    assert.equal(T.similarity("perché", "perche"), 1);
  });

  test("wynik nigdy nie wychodzi poza przedział 0..1", () => {
    [["", "a"], ["a", ""], ["abc", "xyz"], ["ciao", "ciao ciao ciao"]].forEach(([a, b]) => {
      const s = T.similarity(a, b);
      assert.ok(s >= 0 && s <= 1, `poza przedziałem: ${a}/${b} = ${s}`);
    });
  });
});

describe("checkOpen", () => {
  test("trafiona odpowiedź jest dobra i nie jest „prawie”", () => {
    const r = T.checkOpen("io mangio", ["io mangio"]);
    assert.equal(r.ok, true);
    assert.equal(r.near, false);
    assert.equal(r.sim, 1);
  });

  test("wystarczy trafić w którykolwiek z wariantów", () => {
    assert.equal(T.checkOpen("tu mangi", ["io mangio", "tu mangi"]).ok, true);
  });

  test("odpowiedź niechlujna, ale trafiona co do treści, przechodzi", () => {
    assert.equal(T.checkOpen("  IO   MANGIO! ", ["io mangio"]).ok, true);
  });

  test("literówka nie jest dobra, ale jest „prawie” i wskazuje wzorzec", () => {
    const r = T.checkOpen("io mangiu", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, true);
    assert.equal(r.best, "io mangio");
  });

  test("odpowiedź kompletnie inna nie jest ani dobra, ani „prawie”", () => {
    const r = T.checkOpen("xyz", ["io mangio", "tu mangi"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, false);
    assert.equal(r.sim, 0);
  });

  /* Bez tego progu „ho” wobec „io” wychodzi 0.5 podobieństwa na dwóch
     literach i kurs zachęcałby ucznia, że był blisko, przy strzale. */
  test("napis do dwóch znaków nigdy nie jest „prawie”", () => {
    assert.equal(T.checkOpen("ho", ["io"]).near, false);
  });

  test("pojedynczy wariant można podać bez tablicy", () => {
    assert.equal(T.checkOpen("ciao", "ciao").ok, true);
  });

  test("bez trybu ścisłego brak akcentu przechodzi", () => {
    assert.equal(T.checkOpen("perche", ["perché"], false).ok, true);
  });

  test("w trybie ścisłym brak akcentu jest błędem, ale zgłoszonym jako „prawie”", () => {
    const r = T.checkOpen("perche", ["perché"], true);
    assert.equal(r.ok, false, "akcent ma znaczenie");
    assert.equal(r.near, true, "uczeń ma zobaczyć, że chodzi o drobiazg");
  });

  test("w trybie ścisłym trafiony akcent nadal przechodzi", () => {
    assert.equal(T.checkOpen("perché", ["perché"], true).ok, true);
  });

  test("pusta odpowiedź nie przechodzi, ale oddaje wzorzec do pokazania", () => {
    const r = T.checkOpen("", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.best, "io mangio");
  });
});

describe("esc", () => {
  test("zamyka wszystkie pięć znaków, którymi da się wyjść ze znacznika", () => {
    assert.equal(T.esc(`<b>"a" & 'b'</b>`), "&lt;b&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/b&gt;");
  });

  test("ampersand idzie pierwszy, więc encje nie są podwójnie kodowane w kółko", () => {
    assert.equal(T.esc("&lt;"), "&amp;lt;");
  });

  test("zwykły tekst przechodzi bez zmian", () => {
    assert.equal(T.esc("caffè macchiato"), "caffè macchiato");
  });

  test("brak wejścia daje pusty napis", () => {
    assert.equal(T.esc(null), "");
    assert.equal(T.esc(undefined), "");
  });
});

describe("wystawienie w Core", () => {
  /* Wydzielenie do text.js miało nie ruszyć ani jednego z dwudziestu
     modułów, które wołają Core.norm i Core.esc. To jest ten warunek,
     sprawdzony na tożsamości funkcji, a nie na podobnym wyniku. */
  test("Core oddaje DOKŁADNIE te funkcje, nie własne kopie", () => {
    const Core = loadEngine({ files: CORE }).sandbox.Core;
    ["norm", "fold", "stripAccents", "levenshtein", "similarity", "checkOpen", "esc"]
      .forEach(nazwa => {
        assert.equal(typeof Core[nazwa], "function", `Core.${nazwa} zniknęło`);
        assert.equal(Core[nazwa].toString(), T[nazwa].toString(), `Core.${nazwa} to inna funkcja niż Txt.${nazwa}`);
      });
  });
});
