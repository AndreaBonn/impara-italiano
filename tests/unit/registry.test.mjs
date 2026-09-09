/* ============================================================
   Struktura kursu i dociąganie danych (assets/js/registry.js).

   Ten moduł nie miał do tej pory ani jednego testu jednostkowego, choć
   decyduje o tym, czy uczeń w ogóle zobaczy lekcje. Powód był techniczny:
   pliki wchodzą przez <script>, a atrapa DOM nie miała head ani sposobu
   na rozstrzygnięcie onload/onerror. Ma je teraz (box.settleScripts).

   Trzy zachowania, które widać tylko stąd:
   - kolejność: warstwa neutralna PRZED nakładką z tekstami, inaczej
     applyStrings nakłada tłumaczenia na obiekty, których jeszcze nie ma;
   - częściowe niepowodzenie: poziom, z którego wczytała się część, jest
     używalny, a nie zablokowany — ale nieudane pliki mają być ponowione
     przy następnym podejściu, nie zapamiętane jako wczytane;
   - całkowite niepowodzenie: poziom idzie w stan „error", bo widok ma
     pokazać powód, a nie kręcić się w nieskończoność na „ładuję".
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  /* applyStrings daje i18n.js, którego tu nie ma: rejestr tylko go woła. */
  box.sandbox.LINGUAI.applyStrings = () => {};
  return box;
}

const R = box => box.sandbox.Registry;

function poziom(over) {
  return Object.assign({
    code: "A1", name: "Podstawy", cefrLabel: "A1", dataFiles: ["a1-01.js"], units: []
  }, over || {});
}

function jednostka(idPrefix, vocab) {
  return {
    titleIt: "Unità", title: "Jednostka",
    lessons: [{ id: idPrefix + "-l1", titleIt: "Lezione", title: "Lekcja", vocab: vocab || [] }],
    test: { id: idPrefix + "-test", titleIt: "Test", title: "Test" }
  };
}

describe("rejestracja poziomów", () => {
  test("nowy poziom trafia na listę i pod swój kod", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    assert.equal(R(box).registry.levels.length, 1);
    assert.equal(R(box).registry.byCode.A1.name, "Podstawy");
  });

  test("ponowne wczytanie tego samego kodu podmienia jednostki, nie dubluje poziomu", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    R(box).registerLevel(poziom({ units: [jednostka("a1-u02")] }));
    assert.equal(R(box).registry.levels.length, 1, "jeden poziom, nie dwa");
    assert.equal(R(box).registry.byCode.A1.units.length, 1);
    assert.ok(R(box).getLesson("a1-u02-l1"), "widoczne są nowe jednostki");
    assert.equal(R(box).getLesson("a1-u01-l1"), null, "stare zniknęły razem z podmianą");
  });

  test("addUnits dokłada, a nie podmienia: dane poziomu bywają w kilku plikach", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    R(box).addUnits("A1", [jednostka("a1-u02")]);
    assert.equal(R(box).registry.byCode.A1.units.length, 2);
    assert.ok(R(box).getLesson("a1-u01-l1"));
    assert.ok(R(box).getLesson("a1-u02-l1"));
  });

  test("addUnits na nieznany poziom nie zakłada go po cichu", () => {
    const box = swiezy();
    R(box).addUnits("C2", [jednostka("c2-u01")]);
    assert.equal(R(box).registry.levels.length, 0);
    assert.equal(R(box).getLesson("c2-u01-l1"), null);
  });
});

describe("indeksy", () => {
  test("test jednostki jest w indeksie lekcji tak samo jak zwykła lekcja", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    const znaleziona = R(box).getLesson("a1-u01-test");
    assert.ok(znaleziona, "test jednostki musi dać się otworzyć z adresu");
    assert.equal(znaleziona.level.code, "A1");
    assert.equal(znaleziona.unit.title, "Jednostka");
  });

  test("nieznane id daje null, a nie undefined ani wyjątek", () => {
    const box = swiezy();
    assert.equal(R(box).getLesson("nie-ma-takiej"), null);
  });

  test("słownik indeksuje się po znormalizowanym włoskim", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "L'Autore", tr: "autor" }])] }));
    assert.equal(R(box).registry.vocabIndex["l'autore"], "autor");
  });

  test("pozycja bez tłumaczenia nie trafia do słownika", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "casa" }, { it: "cane", tr: "pies" }])] }));
    assert.equal(R(box).registry.vocabIndex["casa"], undefined, "bez glosy nie ma czego pokazać");
    assert.equal(R(box).registry.vocabIndex["cane"], "pies");
  });

  test("cardTr sięga po glosę z kursu, gdy fiszka jej nie ma w tym języku", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "cane", tr: "pies" }])] }));
    assert.equal(box.Core.cardTr({ it: "cane", tr: {} }), "pies",
      "Core.cardTr czyta TEN SAM indeks, który zbudował rejestr");
  });
});

describe("dociąganie danych poziomu", () => {
  test("warstwa neutralna idzie przed nakładką z tekstami", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: ["a1-01.js", "a1-02.js"] }));
    R(box).loadLevelData("A1", () => {});
    box.settleScripts();
    assert.deepEqual(box.scripts, [
      "data/core/a1-01.js", "data/core/a1-02.js",
      "data/i18n/pl/a1-01.js", "data/i18n/pl/a1-02.js"
    ]);
  });

  test("nakładka idzie w języku ucznia, nie w domyślnym", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    R(box).registerLevel(poziom());
    R(box).loadLevelData("A1", () => {});
    box.settleScripts();
    assert.ok(box.scripts.indexOf("data/i18n/en/a1-01.js") >= 0);
  });

  test("wczytany poziom melduje sukces i nie dociąga się drugi raz", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    /* Plik danych zwykle woła addUnits; tutaj robi to test. */
    R(box).addUnits("A1", [jednostka("a1-u01")]);
    box.settleScripts();

    assert.equal(wynik, true);
    assert.equal(R(box).registry.loaded.A1, true);

    const ile = box.scripts.length;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    assert.equal(box.scripts.length, ile, "drugie wejście nie wstrzykuje niczego");
    assert.equal(wynik, true);
  });

  test("nieznany kod poziomu kończy się odmową, nie ładowaniem w próżnię", () => {
    const box = swiezy();
    let wynik = "nietknięte";
    R(box).loadLevelData("C2", ok => { wynik = ok; });
    assert.equal(wynik, false);
    assert.equal(box.scripts.length, 0);
  });

  test("poziom bez plików danych melduje sukces bez wstrzykiwania", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: [] }));
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    assert.equal(wynik, true, "poziom istnieje, choć nie ma czego dociągać");
    assert.equal(box.scripts.length, 0);
  });

  test("częściowe niepowodzenie zostawia poziom używalnym i zgłasza to w konsoli", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: ["a1-01.js", "a1-02.js"] }));
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    R(box).addUnits("A1", [jednostka("a1-u01")]);
    box.settleScripts(["data/core/a1-02.js"]);

    assert.equal(wynik, true, "to, co się wczytało, ma być do przerobienia");
    assert.equal(R(box).registry.loaded.A1, true);
    assert.match(box.warnings.join(" "), /a1-02\.js/, "nazwa brakującego pliku musi być do znalezienia");
  });

  test("gdy nie wczytało się nic, poziom idzie w stan error zamiast wisieć na „ładuję”", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    box.settleScripts(["data/core/a1-01.js", "data/i18n/pl/a1-01.js"]);

    assert.equal(wynik, false);
    assert.equal(R(box).registry.loaded.A1, "error");
  });
});

describe("pamięć wczytanych nakładek", () => {
  test("plik wczytany raz nie jest dociągany drugi raz dla tego samego języka", () => {
    const box = swiezy();
    const sciezki = R(box).i18nPaths("pl", ["conversations.js"]);
    assert.deepEqual(sciezki, ["data/i18n/pl/conversations.js"]);

    R(box).markI18n(sciezki, []);
    assert.deepEqual(R(box).i18nPaths("pl", ["conversations.js"]), [], "drugi raz nie ma czego brać");
  });

  test("ten sam plik w innym języku to inny plik", () => {
    const box = swiezy();
    R(box).markI18n(R(box).i18nPaths("pl", ["conversations.js"]), []);
    assert.deepEqual(R(box).i18nPaths("en", ["conversations.js"]), ["data/i18n/en/conversations.js"]);
  });

  /* To jest cały powód istnienia markI18n: zapamiętanie nieudanego pliku
     zostawiłoby ucznia z dziurą w kursie do końca sesji, bez sposobu na
     ponowienie inaczej niż przeładowaniem strony. */
  test("plik, który się NIE wczytał, ma zostać ponowiony", () => {
    const box = swiezy();
    const sciezki = R(box).i18nPaths("pl", ["conversations.js", "readings.js"]);
    R(box).markI18n(sciezki, ["data/i18n/pl/readings.js"]);
    assert.deepEqual(R(box).i18nPaths("pl", ["conversations.js", "readings.js"]),
      ["data/i18n/pl/readings.js"], "wraca tylko ten nieudany");
  });

  test("ścieżka spoza katalogu nakładek nie zaśmieca tej pamięci", () => {
    const box = swiezy();
    R(box).markI18n(["data/core/a1-01.js"], []);
    assert.deepEqual(R(box).i18nPaths("pl", ["a1-01.js"]), ["data/i18n/pl/a1-01.js"]);
  });
});

describe("zmiana języka wyjaśnień", () => {
  test("zapisuje wybór i dociąga nakładki wczytanych już poziomów", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    R(box).loadLevelData("A1", () => {});
    R(box).addUnits("A1", [jednostka("a1-u01")]);
    box.settleScripts();
    const przed = box.scripts.length;

    let brakujace = null;
    R(box).setLanguage("en", failed => { brakujace = failed; });
    box.settleScripts();

    assert.equal(box.Core.state.settings.lang, "en");
    box.flush();
    assert.equal(box.stored().settings.lang, "en", "wybór przeżywa zamknięcie karty");
    assert.deepEqual(Array.from(brakujace), [], "nic nie zginęło po drodze");
    const nowe = box.scripts.slice(przed);
    assert.ok(nowe.indexOf("data/i18n/en/a1-01.js") >= 0, "nakładka poziomu");
    assert.ok(nowe.indexOf("data/i18n/en/conversations.js") >= 0, "i pliki wczytywane od razu");
    assert.equal(nowe.filter(p => p.indexOf("data/core/") === 0).length, 0,
      "warstwa neutralna zostaje w pamięci, nie jest wczytywana ponownie");
  });

  test("poziom, którego uczeń nie otworzył, nie ciągnie za sobą swojej nakładki", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    R(box).setLanguage("en", () => {});
    box.settleScripts();
    assert.equal(box.scripts.indexOf("data/i18n/en/a1-01.js"), -1);
  });

  test("nieudane pliki wracają do wywołującego, żeby miał co pokazać", () => {
    const box = swiezy();
    let brakujace = null;
    R(box).setLanguage("de", failed => { brakujace = failed; });
    box.settleScripts(["data/i18n/de/phonetics.js"]);
    assert.deepEqual(Array.from(brakujace), ["data/i18n/de/phonetics.js"]);
  });
});

describe("wystawienie w Core", () => {
  test("Core oddaje ten sam rejestr i te same funkcje, nie kopie", () => {
    const box = loadEngine({ files: CORE });
    assert.equal(box.Core.registry, box.sandbox.Registry.registry);
    ["registerLevel", "addUnits", "getLesson", "loadLevelData", "setLanguage"].forEach(nazwa => {
      assert.equal(box.Core[nazwa], box.sandbox.Registry[nazwa], `Core.${nazwa} to inna funkcja`);
    });
  });

  test("pliki danych kursu wołają LINGUAI.registerLevel i to działa", () => {
    const box = swiezy();
    box.sandbox.LINGUAI.registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    assert.ok(box.Core.getLesson("a1-u01-l1"));
  });
});
