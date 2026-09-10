/* ============================================================
   lemma-morf.js — reguły formy, bez słownika i bez koniugatora.

   lemma.test.mjs sprawdza WERDYKT: czy „bevono" rozstrzyga się na „bere"
   przy podstawionym słowniku. Tutaj chodzi o warstwę niżej: o kandydatów,
   których reguła wypuszcza patrząc na sam napis. Te dwie rzeczy psują się
   osobno, a objaw mają ten sam — ciszę na dotknięte słowo — więc dopóki
   miały jeden test, każda awaria wskazywała na oba pliki naraz.

   Każda reguła ma tu przypadek, który MA wejść, i przypadek z tym samym
   zakończeniem, który wejść NIE MA: reguła, której nikt nie próbował
   przestrzelić, przechodzi też wtedy, gdy łapie pół słownika.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** Sam plik reguł: nie ładuje ani Verbs, ani Core. O tym jest ten test. */
function morf() {
  return loadEngine({ files: ["assets/js/lemma-morf.js"] }).sandbox.LemmaMorf;
}

const zZewnatrz = xs => Array.from(xs);

describe("forma złożona traci posiłkownik", () => {
  test("czas przeszły zostawia sam imiesłów", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.slowa("sono andato")), ["andato"]);
    assert.deepEqual(zZewnatrz(M.slowa("era entrato")), ["entrato"]);
    assert.deepEqual(zZewnatrz(M.slowa("hanno mangiato")), ["mangiato"]);
  });

  test("posiłkownik stojący SAM zostaje, bo to własna forma „essere”", () => {
    const M = morf();
    /* Dokładnie ta para trzyma w miejscu decyzję z komentarza w lemma-morf.js:
       „era" w „era entrato" jest szumem, „era" samo w sobie jest formą
       czasownika, którego kurs uczy. Bez drugiego assertu filtr mógłby
       wyrzucać posiłkowniki zawsze i test dalej by przechodził. */
    assert.deepEqual(zZewnatrz(M.slowa("era")), ["era"]);
    assert.deepEqual(zZewnatrz(M.slowa("è")), ["è"]);
  });

  test("wielkość liter i nadmiarowe spacje nie zmieniają wyniku", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.slowa("  SONO   ANDATO ")), ["andato"]);
  });

  test("posilkowy rozpoznaje tylko posiłkowniki", () => {
    const M = morf();
    assert.equal(M.posilkowy("hanno"), true);
    assert.equal(M.posilkowy("Era"), true);
    assert.equal(M.posilkowy("mangiano"), false);
    assert.equal(M.posilkowy("essere"), false, "bezokolicznik nie jest formą posiłkową");
  });
});

describe("co wygląda na bezokolicznik", () => {
  test("trzy koniugacje i formy zwrotne wchodzą", () => {
    const M = morf();
    ["parlare", "vendere", "dormire", "alzarsi", "mettersi", "vestirsi"]
      .forEach(w => assert.equal(M.czasownikowe(w), true, w));
  });

  test("fraza i rzeczownik nie wchodzą", () => {
    const M = morf();
    /* „a che ora" ma w środku spację, „mare" kończy się na -are i NIE jest
       czasownikiem — ale reguła nie umie tego rozstrzygnąć i ma nie umieć:
       fałszywy kandydat kosztuje jedno sprawdzenie w słowniku, fałszywa
       cisza kosztuje uczniowi objaśnienie. Test pinnuje ten wybór. */
    assert.equal(M.czasownikowe("a che ora"), false);
    assert.equal(M.czasownikowe("casa"), false);
    assert.equal(M.czasownikowe("mare"), true, "świadomy fałszywy trafiony");
  });
});

describe("liczba mnoga i rodzaj schodzą do formy słownikowej", () => {
  const przypadki = [
    ["amiche", "amica"],        // -che z twardym k
    ["colleghe", "collega"],
    ["fuochi", "fuoco"],
    ["laghi", "lago"],
    ["amici", "amico"],
    ["uffici", "ufficio"],
    ["orologi", "orologio"],
    ["proprietari", "proprietario"],
    ["libri", "libro"],
    ["cani", "cane"],
    ["problemi", "problema"],
    ["case", "casa"],
    ["bella", "bello"],
    ["antichissimo", "antico"], // stopień najwyższy z odbudowanym k
    ["lunghissima", "lungo"],
    ["bellissimi", "bello"]
  ];

  przypadki.forEach(([forma, oczekiwane]) => {
    test(`${forma} -> ${oczekiwane}`, () => {
      const M = morf();
      assert.ok(M.odmienne(forma).includes(oczekiwane),
        `${oczekiwane} brakuje w [${M.odmienne(forma).join(", ")}]`);
    });
  });

  test("forma z tekstu jest pierwszym kandydatem", () => {
    const M = morf();
    assert.equal(M.odmienne("amiche")[0], "amiche");
  });

  test("reguła szczegółowa wyprzedza ogólną", () => {
    const M = morf();
    const out = zZewnatrz(M.odmienne("amiche"));
    /* Gdyby „-e -> -a" szło przed „-che -> -ca", pierwszym kandydatem po
       formie z tekstu byłoby „amicha", którego nie ma w żadnym słowniku, a
       „amica" rozstrzygałoby się dopiero po nim. Kolejność JEST treścią. */
    assert.ok(out.indexOf("amica") < out.indexOf("amicha"),
      `amica ma wyprzedzać amicha: [${out.join(", ")}]`);
  });

  test("słowo, którego żadna reguła nie dotyczy, wraca samo", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.odmienne("bar")), ["bar"]);
  });
});

describe("wyrazy funkcyjne i liczebniki", () => {
  test("rodzajniki, przyimki ściągnięte i cząstki są znane", () => {
    const M = morf();
    ["il", "dello", "nelle", "c'è", "però", "quei", "mal"]
      .forEach(w => assert.equal(M.funkcyjny(w), true, w));
  });

  test("liczebniki też, razem z członem przed apostrofem", () => {
    const M = morf();
    ["quattro", "quaranta", "mille", "primo", "vent", "trent"]
      .forEach(w => assert.equal(M.funkcyjny(w), true, w));
  });

  test("zwykły wyraz nie jest funkcyjny", () => {
    const M = morf();
    ["casa", "mangiare", "bellissimo", "pesca"]
      .forEach(w => assert.equal(M.funkcyjny(w), false, w));
  });

  test("wielkie litery z początku zdania nie gubią trafienia", () => {
    const M = morf();
    assert.equal(M.funkcyjny("Dello"), true);
  });
});

describe("akcent toniczny", () => {
  test("zdejmowany, żeby forma z tekstu trafiła w hasło słownika", () => {
    const M = morf();
    assert.equal(M.bezAkcentow("pèsca"), "pesca");
    assert.equal(M.bezAkcentow("pésca"), "pesca");
    assert.equal(M.bezAkcentow("così"), "cosi");
    assert.equal(M.bezAkcentow("perché"), "perche");
  });

  test("wyraz bez akcentu wraca bez zmiany", () => {
    const M = morf();
    assert.equal(M.bezAkcentow("pesca"), "pesca");
  });
});

describe("zaimki doklejone do czasownika", () => {
  test("bezokolicznik odbudowuje końcowe -e", () => {
    const M = morf();
    const out = zZewnatrz(M.bezEnklityk("mandarli"));
    assert.ok(out.includes("mandar"), `rdzeń: [${out.join(", ")}]`);
    assert.ok(out.includes("mandare"), `bezokolicznik: [${out.join(", ")}]`);
  });

  test("forma zwrotna wraca jako -rsi", () => {
    const M = morf();
    assert.ok(zZewnatrz(M.bezEnklityk("preoccuparti")).includes("preoccupare"));
    assert.ok(zZewnatrz(M.bezEnklityk("alzati")).includes("alzarsi"));
  });

  test("zaimek podwójny odkleja się w obu cięciach", () => {
    const M = morf();
    const out = zZewnatrz(M.bezEnklityk("dammelo"));
    assert.ok(out.includes("dam"), `całe „melo": [${out.join(", ")}]`);
    assert.ok(out.includes("damme"), `samo „lo": [${out.join(", ")}]`);
  });

  test("krótki wyraz kończący się jak zaimek zostaje nietknięty", () => {
    const M = morf();
    /* „solo" kończy się na „lo", a nie jest czasownikiem z zaimkiem.
       Bez progu długości zostawałoby „so" i dotknięcie „solo" pokazywałoby
       formę „sapere". To jest ten sam przypadek co „era" wyżej: reguła bez
       przypadku negatywnego łapie za dużo i nikt tego nie widzi. */
    assert.deepEqual(zZewnatrz(M.bezEnklityk("solo")), []);
    assert.deepEqual(zZewnatrz(M.bezEnklityk("lo")), []);
  });
});
