/* ============================================================
   The course structure and data fetching (assets/js/registry.js).

   This module had not a single unit test until now, even though it decides
   whether the student sees any lessons at all. The reason was technical:
   files come in through <script>, and the DOM stub had neither a head nor a
   way to settle onload/onerror. It has them now (box.settleScripts).

   Three behaviours visible only from here:
   - order: the neutral layer BEFORE the text overlay, otherwise applyStrings
     lays translations onto objects that do not exist yet;
   - partial failure: a level of which part loaded is usable rather than
     blocked - but the files that failed must be retried on the next attempt,
     not remembered as loaded;
   - total failure: the level goes into the "error" state, because the view
     has to show a reason rather than spin forever on "loading".
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  /* applyStrings comes from i18n.js, which is not here: the registry only calls it. */
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

describe("registering levels", () => {
  test("a new level lands on the list and under its own code", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    assert.equal(R(box).registry.levels.length, 1);
    assert.equal(R(box).registry.byCode.A1.name, "Podstawy");
  });

  test("reloading the same code replaces the units, it does not duplicate the level", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    R(box).registerLevel(poziom({ units: [jednostka("a1-u02")] }));
    assert.equal(R(box).registry.levels.length, 1, "one level, not two");
    assert.equal(R(box).registry.byCode.A1.units.length, 1);
    assert.ok(R(box).getLesson("a1-u02-l1"), "the new units are visible");
    assert.equal(R(box).getLesson("a1-u01-l1"), null, "the old ones went away with the replacement");
  });

  test("addUnits appends rather than replaces: a level's data can span several files", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    R(box).addUnits("A1", [jednostka("a1-u02")]);
    assert.equal(R(box).registry.byCode.A1.units.length, 2);
    assert.ok(R(box).getLesson("a1-u01-l1"));
    assert.ok(R(box).getLesson("a1-u02-l1"));
  });

  test("addUnits on an unknown level does not create it quietly", () => {
    const box = swiezy();
    R(box).addUnits("C2", [jednostka("c2-u01")]);
    assert.equal(R(box).registry.levels.length, 0);
    assert.equal(R(box).getLesson("c2-u01-l1"), null);
  });
});

describe("the indexes", () => {
  test("a unit test is in the lesson index just like an ordinary lesson", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    const znaleziona = R(box).getLesson("a1-u01-test");
    assert.ok(znaleziona, "a unit test has to be openable from the address");
    assert.equal(znaleziona.level.code, "A1");
    assert.equal(znaleziona.unit.title, "Jednostka");
  });

  test("an unknown id gives null, not undefined and not an exception", () => {
    const box = swiezy();
    assert.equal(R(box).getLesson("no-such-lesson"), null);
  });

  test("the dictionary is indexed by normalised Italian", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "L'Autore", tr: "autor" }])] }));
    assert.equal(R(box).registry.vocabIndex["l'autore"], "autor");
  });

  test("an entry with no translation does not enter the dictionary", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "casa" }, { it: "cane", tr: "pies" }])] }));
    assert.equal(R(box).registry.vocabIndex["casa"], undefined, "with no gloss there is nothing to show");
    assert.equal(R(box).registry.vocabIndex["cane"], "pies");
  });

  test("cardTr reaches for the course gloss when the card has none in this language", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ units: [jednostka("a1-u01", [{ it: "cane", tr: "pies" }])] }));
    assert.equal(box.Core.cardTr({ it: "cane", tr: {} }), "pies",
      "Core.cardTr reads THE SAME index the registry built");
  });
});

describe("fetching a level's data", () => {
  test("the neutral layer goes before the text overlay", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: ["a1-01.js", "a1-02.js"] }));
    R(box).loadLevelData("A1", () => {});
    box.settleScripts();
    assert.deepEqual(box.scripts, [
      "data/core/a1-01.js", "data/core/a1-02.js",
      "data/i18n/pl/a1-01.js", "data/i18n/pl/a1-02.js"
    ]);
  });

  test("the overlay comes in the student's language, not the default one", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    R(box).registerLevel(poziom());
    R(box).loadLevelData("A1", () => {});
    box.settleScripts();
    assert.ok(box.scripts.indexOf("data/i18n/en/a1-01.js") >= 0);
  });

  test("a loaded level reports success and is not fetched a second time", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    /* A data file normally calls addUnits; here the test does it. */
    R(box).addUnits("A1", [jednostka("a1-u01")]);
    box.settleScripts();

    assert.equal(wynik, true);
    assert.equal(R(box).registry.loaded.A1, true);

    const ile = box.scripts.length;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    assert.equal(box.scripts.length, ile, "the second call injects nothing");
    assert.equal(wynik, true);
  });

  test("an unknown level code ends in a refusal, not in loading into the void", () => {
    const box = swiezy();
    let wynik = "untouched";
    R(box).loadLevelData("C2", ok => { wynik = ok; });
    assert.equal(wynik, false);
    assert.equal(box.scripts.length, 0);
  });

  test("a level with no data files reports success without injecting anything", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: [] }));
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    assert.equal(wynik, true, "the level exists even though there is nothing to fetch");
    assert.equal(box.scripts.length, 0);
  });

  test("a partial failure leaves the level usable and reports it in the console", () => {
    const box = swiezy();
    R(box).registerLevel(poziom({ dataFiles: ["a1-01.js", "a1-02.js"] }));
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    R(box).addUnits("A1", [jednostka("a1-u01")]);
    box.settleScripts(["data/core/a1-02.js"]);

    assert.equal(wynik, true, "whatever did load must be workable");
    assert.equal(R(box).registry.loaded.A1, true);
    assert.match(box.warnings.join(" "), /a1-02\.js/, "the name of the missing file has to be findable");
  });

  test("when nothing loaded the level goes into the error state instead of hanging on \"loading\"", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    let wynik = null;
    R(box).loadLevelData("A1", ok => { wynik = ok; });
    box.settleScripts(["data/core/a1-01.js", "data/i18n/pl/a1-01.js"]);

    assert.equal(wynik, false);
    assert.equal(R(box).registry.loaded.A1, "error");
  });
});

describe("the memory of loaded overlays", () => {
  test("a file loaded once is not fetched again for the same language", () => {
    const box = swiezy();
    const sciezki = R(box).i18nPaths("pl", ["conversations.js"]);
    assert.deepEqual(sciezki, ["data/i18n/pl/conversations.js"]);

    R(box).markI18n(sciezki, []);
    assert.deepEqual(R(box).i18nPaths("pl", ["conversations.js"]), [], "the second time there is nothing to take");
  });

  test("the same file in another language is a different file", () => {
    const box = swiezy();
    R(box).markI18n(R(box).i18nPaths("pl", ["conversations.js"]), []);
    assert.deepEqual(R(box).i18nPaths("en", ["conversations.js"]), ["data/i18n/en/conversations.js"]);
  });

  /* This is the whole reason markI18n exists: remembering a failed file would
     leave the student with a hole in the course for the rest of the session,
     with no way to retry short of reloading the page. */
  test("a file that did NOT load has to be retried", () => {
    const box = swiezy();
    const sciezki = R(box).i18nPaths("pl", ["conversations.js", "readings.js"]);
    R(box).markI18n(sciezki, ["data/i18n/pl/readings.js"]);
    assert.deepEqual(R(box).i18nPaths("pl", ["conversations.js", "readings.js"]),
      ["data/i18n/pl/readings.js"], "only the failed one comes back");
  });

  test("a path outside the overlay directory does not pollute that memory", () => {
    const box = swiezy();
    R(box).markI18n(["data/core/a1-01.js"], []);
    assert.deepEqual(R(box).i18nPaths("pl", ["a1-01.js"]), ["data/i18n/pl/a1-01.js"]);
  });
});

describe("changing the explanation language", () => {
  test("it saves the choice and fetches the overlays of the levels already loaded", () => {
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
    assert.equal(box.stored().settings.lang, "en", "the choice survives closing the tab");
    assert.deepEqual(Array.from(brakujace), [], "nothing was lost on the way");
    const nowe = box.scripts.slice(przed);
    assert.ok(nowe.indexOf("data/i18n/en/a1-01.js") >= 0, "the level overlay");
    assert.ok(nowe.indexOf("data/i18n/en/conversations.js") >= 0, "and the files loaded up front");
    assert.equal(nowe.filter(p => p.indexOf("data/core/") === 0).length, 0,
      "the neutral layer stays in memory, it is not loaded again");
  });

  test("a level the student never opened does not drag its overlay along", () => {
    const box = swiezy();
    R(box).registerLevel(poziom());
    R(box).setLanguage("en", () => {});
    box.settleScripts();
    assert.equal(box.scripts.indexOf("data/i18n/en/a1-01.js"), -1);
  });

  test("the files that failed come back to the caller, so it has something to show", () => {
    const box = swiezy();
    let brakujace = null;
    R(box).setLanguage("de", failed => { brakujace = failed; });
    box.settleScripts(["data/i18n/de/phonetics.js"]);
    assert.deepEqual(Array.from(brakujace), ["data/i18n/de/phonetics.js"]);
  });
});

describe("what Core exposes", () => {
  test("Core hands out the same registry and the same functions, not copies", () => {
    const box = loadEngine({ files: CORE });
    assert.equal(box.Core.registry, box.sandbox.Registry.registry);
    ["registerLevel", "addUnits", "getLesson", "loadLevelData", "setLanguage"].forEach(nazwa => {
      assert.equal(box.Core[nazwa], box.sandbox.Registry[nazwa], `Core.${nazwa} is a different function`);
    });
  });

  test("the course data files call LINGUAI.registerLevel and it works", () => {
    const box = swiezy();
    box.sandbox.LINGUAI.registerLevel(poziom({ units: [jednostka("a1-u01")] }));
    assert.ok(box.Core.getLesson("a1-u01-l1"));
  });
});
