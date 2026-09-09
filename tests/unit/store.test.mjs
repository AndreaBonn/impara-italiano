/* ============================================================
   Stan trwały (assets/js/store.js) — gałęzie, których nie widać
   z zewnątrz przez Core.

   Grubą siatkę na merge, migracje, potarcie i import ma state.test.mjs
   i tam zostaje: te testy opisują naukę ucznia i nie mają powodu
   przenosić się razem z podziałem plików. Tutaj jest to, co dokłada
   wydzielenie store.js:

   - fasada (Store.state to TEN SAM obiekt co Core.state, nie kopia),
   - rozpoznanie braku miejsca po WSZYSTKICH czterech sygnaturach, nie
     tylko po tej, którą rzuca atrapa magazynu,
   - każdy powód odrzucenia pliku z osobna, bo uczeń odzyskujący kopię
     dostaje ten klucz na ekranie i to jest cała informacja, jaką ma.
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

/** Magazyn, który odmawia zapisu podanym błędem. */
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
    assert.equal(box.sandbox.Store.state.xp, 11, "zapis przez Core widać w Store");
  });

  test("podmiana stanu w Store jest widoczna przez Core: getter, nie kopia z chwili startu", () => {
    const box = swiezy();
    box.Core.state.xp = 5;
    box.Core.resetState();
    assert.equal(box.Core.state.xp, 0, "Core widzi NOWY obiekt stanu");
    assert.equal(box.Core.state, box.sandbox.Store.state);
  });

  test("klucz magazynu i numer schematu są wystawione i zgodne z zapisem", () => {
    const box = swiezy();
    assert.equal(box.sandbox.Store.KEY, KEY);
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).schema, box.sandbox.Store.SCHEMA);
  });

  test("cardKey jest jedną funkcją, tą samą w Store i w Core", () => {
    const box = swiezy();
    assert.equal(box.Core.cardKey, box.sandbox.Store.cardKey);
    assert.equal(box.Core.cardKey("  L'Autore  "), "l'autore");
  });
});

describe("rozpoznanie braku miejsca", () => {
  /* Cztery sygnatury, bo przeglądarki nie zgadzają się co do jednej:
     Chrome rzuca nazwą, Firefox kodem 1014, starsze silniki kodem 22.
     Potarcie MA ruszyć w każdym z tych czterech przypadków — inaczej
     na jednej przeglądarce kurs po prostu przestaje zapisywać. */
  const KWOTA = [
    { name: "QuotaExceededError" },
    { name: "NS_ERROR_DOM_QUOTA_REACHED" },
    { code: 22 },
    { code: 1014 }
  ];

  KWOTA.forEach(pola => {
    const opis = pola.name || ("kod " + pola.code);
    test(`„${opis}" uruchamia potarcie i kończy się komunikatem o utracie`, () => {
      const box = swiezy({ storage: magazynOdmawiajacy(bladKwoty(pola)) });
      box.Core.state.errors["k1"] = { reps: 1 };
      box.Core.save();
      box.flush();
      assert.deepEqual(box.toasts, ["core.saveBlocked"], "uczeń dowiaduje się, że zapis nie przeszedł");
      assert.equal(Object.keys(box.Core.state.errors).length, 0, "karta błędu ustąpiła miejsca");
    });
  });

  test("odmowa z innego powodu NIE kasuje danych: tam wyrzucanie niczego nie naprawia", () => {
    const box = swiezy({ storage: magazynOdmawiajacy(bladKwoty({ name: "SecurityError" })) });
    box.Core.state.errors["k1"] = { reps: 1 };
    box.Core.save();
    box.flush();
    assert.deepEqual(box.toasts, ["core.saveBlocked"]);
    assert.equal(Object.keys(box.Core.state.errors).length, 1, "karta błędu została na miejscu");
  });
});

describe("debounce zapisu", () => {
  test("po zapisaniu kolejne wywołanie znów planuje zapis", () => {
    const box = swiezy();
    box.Core.state.xp = 1;
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).xp, 1);

    box.Core.state.xp = 2;
    box.Core.save();
    assert.equal(box.clock.size, 1, "nowy timer, a nie zablokowany na stałe");
    box.flush();
    assert.equal(box.stored(KEY).xp, 2);
  });
});

describe("powody odrzucenia pliku z kopią", () => {
  /* Klucz napisu, nie gotowe zdanie: kurs mówi pięcioma językami, a ten
     komunikat czyta ktoś, kto właśnie próbuje odzyskać swoje postępy. */
  function odrzucenie(json) {
    try { loadEngine().Core.importState(json); }
    catch (e) { return e; }
    return null;
  }

  test("plik, który nie jest obiektem", () => {
    assert.equal(odrzucenie("[1,2,3]").key, "set.errNotSave");
    assert.equal(odrzucenie('"napis"').key, "set.errNotSave");
  });

  test("plik bez numeru wersji", () => {
    assert.equal(odrzucenie('{"xp":10}').key, "set.errNoVersion");
    assert.equal(odrzucenie('{"schema":"2"}').key, "set.errNoVersion", "numer musi być liczbą");
  });

  test("numer wersji poniżej pierwszej to nie jest zapis tego kursu", () => {
    assert.equal(odrzucenie('{"schema":0}').key, "set.errNoVersion");
  });

  test("plik z przyszłości", () => {
    assert.equal(odrzucenie('{"schema":99}').key, "set.errFromFuture");
  });

  test("pole obecne w złym typie, z nazwą pola w komunikacie", () => {
    const e = odrzucenie('{"schema":2,"lessons":[]}');
    assert.equal(e.key, "set.errBadField");
    assert.equal(e.vars.field, "lessons");
  });

  test("placement wolno mieć jako obiekt albo null, ale nie jako liczbę", () => {
    assert.equal(odrzucenie('{"schema":2,"placement":null}'), null, "null przechodzi");
    assert.equal(odrzucenie('{"schema":2,"placement":{"cefr":"A2"}}'), null, "obiekt przechodzi");
    assert.equal(odrzucenie('{"schema":2,"placement":3}').key, "set.errBadField");
  });

  test("plik ponad rozmiar sensownego zapisu odpada przed parsowaniem", () => {
    const e = odrzucenie('{"schema":2,"pad":"' + "x".repeat(9 * 1024 * 1024) + '"}');
    assert.equal(e.key, "set.errTooBig");
  });

  test("wejście, które w ogóle nie jest napisem", () => {
    assert.equal(odrzucenie(null).key, "set.errTooBig");
    assert.equal(odrzucenie({ schema: 2 }).key, "set.errTooBig");
  });

  test("poprawny plik przechodzi: powyższe odrzucenia to nie „wszystko odpada”", () => {
    assert.equal(odrzucenie('{"schema":2,"xp":42}'), null);
  });
});

describe("kolejność ładowania", () => {
  test("store.js stoi przed core.js, bo core czyta Store przy starcie", () => {
    const zle = CORE.filter(f => f !== "assets/js/store.js");
    /* Obiekty z piaskownicy mają prototyp z innego realm, więc instanceof
       TypeError tu nie zadziała: pytamy o treść, nie o tożsamość klasy. */
    assert.throws(() => loadEngine({ files: zle }), e => /save/.test(String(e)),
      "bez store.js core.js ma paść od razu, a nie ciszej i później");
    assert.doesNotThrow(() => loadEngine({ files: CORE }), "z nim wstaje normalnie");
  });
});
