/* ============================================================
   Persistent state (assets/js/store.js) — the branches Core does not show
   from the outside.

   The broad net over merge, migrations, pruning and import belongs to
   state.test.mjs and stays there: those tests describe the student's
   learning and have no reason to move along with a file split. What is here
   is what splitting store.js out adds:

   - the facade (Store.state is THE SAME object as Core.state, not a copy),
   - recognising a lack of space by ALL four signatures, not only by the one
     the storage double throws,
   - every reason for rejecting a file separately, because a student
     restoring a copy gets that key on the screen and it is all the
     information they have.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, makeStorage, CORE } from "./_harness.mjs";

const KEY = "linguai.italiano.v2";

function swiezy(opts) {
  const box = loadEngine(opts);
  box.Core.load();
  return box;
}

/** Storage that refuses to write with a given error. */
function magazynOdmawiajacy(blad) {
  const bazowy = makeStorage();
  return Object.assign({}, bazowy, {
    getItem: bazowy.getItem,
    removeItem: bazowy.removeItem,
    setItem() { throw blad; }
  });
}

function bladKwoty(pola) {
  const e = new Error("nie ma miejsca");
  Object.assign(e, pola);
  return e;
}

describe("fasada Store", () => {
  test("Core.state i Store.state to ten sam obiekt, nie dwie kopie", () => {
    const box = swiezy();
    assert.equal(box.Core.state, box.sandbox.Store.state);
    box.Core.state.xp = 11;
    assert.equal(box.sandbox.Store.state.xp, 11, "a write through Core is visible in Store");
  });

  test("podmiana stanu w Store jest widoczna przez Core: getter, nie kopia z chwili startu", () => {
    const box = swiezy();
    box.Core.state.xp = 5;
    box.Core.resetState();
    assert.equal(box.Core.state.xp, 0, "Core widzi NOWY obiekt stanu");
    assert.equal(box.Core.state, box.sandbox.Store.state);
  });

  test("the storage key and the schema number are exposed and agree with the save", () => {
    const box = swiezy();
    assert.equal(box.sandbox.Store.KEY, KEY);
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).schema, box.sandbox.Store.SCHEMA);
  });

  test("cardKey is one function, the same in Store and in Core", () => {
    const box = swiezy();
    assert.equal(box.Core.cardKey, box.sandbox.Store.cardKey);
    assert.equal(box.Core.cardKey("  L'Autore  "), "l'autore");
  });
});

describe("rozpoznanie braku miejsca", () => {
  /* Four signatures, because browsers do not agree on one: Chrome throws a
     name, Firefox code 1014, older engines code 22. Pruning MUST start in
     every one of those four cases — otherwise on one browser the course
     simply stops saving. */
  const KWOTA = [
    { name: "QuotaExceededError" },
    { name: "NS_ERROR_DOM_QUOTA_REACHED" },
    { code: 22 },
    { code: 1014 }
  ];

  KWOTA.forEach(pola => {
    const opis = pola.name || ("kod " + pola.code);
    test(`"${opis}" starts the pruning and ends with a message about the loss`, () => {
      const box = swiezy({ storage: magazynOdmawiajacy(bladKwoty(pola)) });
      box.Core.state.errors["k1"] = { reps: 1 };
      box.Core.save();
      box.flush();
      assert.deepEqual(box.toasts, ["core.saveBlocked"], "the student finds out that the save did not go through");
      assert.equal(Object.keys(box.Core.state.errors).length, 0, "the mistake card gave way");
    });
  });

  test("odmowa z innego powodu NIE kasuje danych: tam wyrzucanie niczego nie naprawia", () => {
    const box = swiezy({ storage: magazynOdmawiajacy(bladKwoty({ name: "SecurityError" })) });
    box.Core.state.errors["k1"] = { reps: 1 };
    box.Core.save();
    box.flush();
    assert.deepEqual(box.toasts, ["core.saveBlocked"]);
    assert.equal(Object.keys(box.Core.state.errors).length, 1, "the mistake card stayed where it was");
  });
});

describe("debounce zapisu", () => {
  test("after a save the next call schedules a save again", () => {
    const box = swiezy();
    box.Core.state.xp = 1;
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).xp, 1);

    box.Core.state.xp = 2;
    box.Core.save();
    assert.equal(box.clock.size, 1, "a new timer, not one blocked for good");
    box.flush();
    assert.equal(box.stored(KEY).xp, 2);
  });
});

describe("the reasons a backup file is rejected", () => {
  /* A string key, not a ready-made sentence: the course speaks five
     languages, and this message is read by somebody who is trying to recover
     their progress. */
  function odrzucenie(json) {
    try { loadEngine().Core.importState(json); }
    catch (e) { return e; }
    return null;
  }

  test("a file that is not an object", () => {
    assert.equal(odrzucenie("[1,2,3]").key, "set.errNotSave");
    assert.equal(odrzucenie('"napis"').key, "set.errNotSave");
  });

  test("plik bez numeru wersji", () => {
    assert.equal(odrzucenie('{"xp":10}').key, "set.errNoVersion");
    assert.equal(odrzucenie('{"schema":"2"}').key, "set.errNoVersion", "the number has to be a number");
  });

  test("a version number below the first is not a save of this course", () => {
    assert.equal(odrzucenie('{"schema":0}').key, "set.errNoVersion");
  });

  test("a file from the future", () => {
    assert.equal(odrzucenie('{"schema":99}').key, "set.errFromFuture");
  });

  test("a field present with the wrong type, with the field name in the message", () => {
    const e = odrzucenie('{"schema":2,"lessons":[]}');
    assert.equal(e.key, "set.errBadField");
    assert.equal(e.vars.field, "lessons");
  });

  test("placement may be an object or null, but not a number", () => {
    assert.equal(odrzucenie('{"schema":2,"placement":null}'), null, "null przechodzi");
    assert.equal(odrzucenie('{"schema":2,"placement":{"cefr":"A2"}}'), null, "obiekt przechodzi");
    assert.equal(odrzucenie('{"schema":2,"placement":3}').key, "set.errBadField");
  });

  test("plik ponad rozmiar sensownego zapisu odpada przed parsowaniem", () => {
    const e = odrzucenie('{"schema":2,"pad":"' + "x".repeat(9 * 1024 * 1024) + '"}');
    assert.equal(e.key, "set.errTooBig");
  });

  test("input that is not a string at all", () => {
    assert.equal(odrzucenie(null).key, "set.errTooBig");
    assert.equal(odrzucenie({ schema: 2 }).key, "set.errTooBig");
  });

  test("a correct file passes: the rejections above are not \"everything is rejected\"", () => {
    assert.equal(odrzucenie('{"schema":2,"xp":42}'), null);
  });
});

describe("the loading order", () => {
  test("store.js stoi przed core.js, bo core czyta Store przy starcie", () => {
    const zle = CORE.filter(f => f !== "assets/js/store.js");
    /* Objects from the sandbox have a prototype from another realm, so
       instanceof TypeError will not work here: we ask about the content, not
       about the identity of the class. */
    assert.throws(() => loadEngine({ files: zle }), e => /save/.test(String(e)),
      "without store.js, core.js has to fail at once rather than more quietly and later");
    assert.doesNotThrow(() => loadEngine({ files: CORE }), "z nim wstaje normalnie");
  });
});
