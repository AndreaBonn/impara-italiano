/* ============================================================
   Siatka bezpieczeństwa pod stan.

   Te testy opisują zachowanie, które JEST, nie to, które ma być.
   F0 zmienia merge(), importState() i save() — czyli trzy funkcje,
   przez które przechodzą postępy każdego, kto już używa aplikacji.
   Zmiana, która przewróci coś tutaj, przewróci cudzy zapis.

   Czego tu celowo nie ma: zanieczyszczenia prototypu przez merge().
   To jest defekt, nie zachowanie do utrwalenia; jego test powstaje
   razem z poprawką w F0 (T005) i ma być najpierw czerwony.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, makeStorage, probePrototype } from "./_harness.mjs";

/**
 * Obiekty z piaskownicy mają prototyp z innego realm, więc deepEqual
 * w trybie strict odrzuca nawet {} wobec {}. Tam, gdzie chodzi o samą
 * zawartość, pytamy o klucze zamiast porównywać tożsamość prototypu.
 */
function pusty(o, opis) {
  assert.equal(Object.keys(o).length, 0, opis);
}

const KEY = "linguai.italiano.v2";
const KEY_V1 = "linguai.italiano.pl.v1";
const SCHEMA = 2;

/** Zapis w kształcie, jaki naprawdę leży w localStorage. */
function saved(over) {
  return JSON.stringify(Object.assign({ schema: SCHEMA }, over));
}

describe("merge", () => {
  test("schodzi w głąb obiektów zamiast podmieniać całe gałęzie", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ settings: { rate: 0.8 } }) } });
    box.Core.load();
    const s = box.Core.state;
    assert.equal(s.settings.rate, 0.8, "wartość z zapisu");
    assert.equal(s.settings.lang, "pl", "reszta gałęzi z domyślnych");
    assert.equal(s.settings.autoplay, true);
  });

  test("tablica z zapisu zastępuje domyślną, nie dokleja się do niej", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ srs: {}, lessons: {}, tagList: ["a"] }) } });
    box.Core.load();
    assert.deepEqual(box.Core.state.tagList, ["a"]);
  });

  test("pole nieobecne w zapisie przychodzi z domyślnych", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 40 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 40);
    assert.equal(box.Core.state.minutes, 0, "brakujące pole dostaje wartość domyślną");
    pusty(box.Core.state.stats.days, "statystyki dzienne startują puste");
  });
});

describe("load", () => {
  test("pusty magazyn zostawia stan domyślny", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.state.schema, SCHEMA);
    assert.equal(box.Core.state.xp, 0);
  });

  test("inna wersja schematu jest ignorowana, stan zostaje domyślny", () => {
    const box = loadEngine({ seed: { [KEY]: JSON.stringify({ schema: 99, xp: 999 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 0, "zapis z przyszłości nie wchodzi");
  });

  test("uszkodzony JSON nie wywraca startu", () => {
    const box = loadEngine({ seed: { [KEY]: "{ to nie jest json" } });
    assert.doesNotThrow(() => box.Core.load());
    assert.equal(box.Core.state.xp, 0);
  });
});

describe("migracja v1 → v2", () => {
  test("fiszka przeklucza się na sam włoski, tłumaczenie schodzi do tr.pl", () => {
    const v1 = {
      schema: 1,
      srs: { "andare|iść": { it: "andare", pl: "iść", ef: 2.5, reps: 3, interval: 8, due: 111, lapses: 0 } },
      xp: 120
    };
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify(v1) } });
    box.Core.load();
    const srs = box.Core.state.srs;
    assert.deepEqual(Object.keys(srs), ["andare"]);
    assert.equal(srs.andare.tr.pl, "iść");
    assert.equal(srs.andare.interval, 8);
    assert.equal(box.Core.state.xp, 120, "postępy przechodzą bez zerowania");
    assert.equal(box.Core.state.schema, SCHEMA);
  });

  test("dwie fiszki v1 o tym samym włoskim schodzą się w pilniejszą", () => {
    const v1 = {
      schema: 1,
      srs: {
        "stare|być": { it: "stare", pl: "być", ef: 2.5, reps: 1, interval: 1, due: 500, lapses: 0 },
        "stare|stać": { it: "stare", pl: "stać", ef: 2.5, reps: 4, interval: 9, due: 100, lapses: 2 }
      }
    };
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify(v1) } });
    box.Core.load();
    assert.equal(Object.keys(box.Core.state.srs).length, 1);
    assert.equal(box.Core.state.srs.stare.due, 100, "zostaje ta z bliższym terminem");
    assert.equal(box.Core.state.srs.stare.lapses, 2);
  });

  test("v1 istniał tylko po polsku, więc język wyjaśnień wraca na pl", () => {
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify({ schema: 1, srs: {}, settings: { lang: "de" } }) } });
    box.Core.load();
    assert.equal(box.Core.state.settings.lang, "pl");
  });
});

describe("save", () => {
  test("jest zdebouncowane: bez upływu czasu nic nie leży w magazynie", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.xp = 7;
    box.Core.save();
    assert.equal(box.storage.getItem(KEY), null, "zapis nie poszedł natychmiast");
    box.flush();
    assert.equal(box.stored(KEY).xp, 7);
  });

  test("wielokrotne wywołanie w jednym oknie zapisuje raz", () => {
    const box = loadEngine();
    box.Core.load();
    for (let i = 0; i < 5; i++) { box.Core.state.xp = i; box.Core.save(); }
    assert.equal(box.clock.size, 1, "jeden timer, nie pięć");
    box.flush();
    assert.equal(box.stored(KEY).xp, 4);
  });

  test("pełna kwota nie wyrzuca wyjątku, tylko komunikat", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 50 }) });
    box.Core.load();
    box.Core.state.xp = 1;
    box.Core.save();
    assert.doesNotThrow(() => box.flush());
    assert.deepEqual(box.toasts, ["core.saveFailed"]);
  });

  /* To jest defekt opisany jako R6, nie cel projektowy: przy pełnej kwocie
     nie zapisuje się NIC, więc postępy lekcji też przepadają. F0 to zmienia;
     tutaj zostaje zapisane, jak jest dzisiaj, żeby zmiana była widoczna. */
  test("przy pełnej kwocie nie zapisuje się nic, łącznie z postępami lekcji", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 50 }) });
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 9, 10, 60);
    box.flush();
    assert.equal(box.storage.getItem(KEY), null, "stan siedzi w jednym kluczu i przepada w całości");
  });
});

describe("importState / exportState", () => {
  test("obieg tam i z powrotem zachowuje postępy", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 8, 10, 30);
    const dump = box.Core.exportState();

    const drugi = loadEngine();
    drugi.Core.load();
    drugi.Core.importState(dump);
    assert.equal(drugi.Core.state.lessons["a1-u01-l1"].done, true);
    assert.equal(drugi.Core.state.stats.lessonsDone, 1);
  });

  test("plik z inną wersją schematu jest odrzucany", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: 99, xp: 1 })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: 1, xp: 1 })));
  });

  test("plik bez pola schema jest odrzucany", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ xp: 1 })));
  });
});

describe("reset", () => {
  test("kasuje postępy, zostawia ustawienia", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.settings.lang = "de";
    box.Core.state.settings.theme = "dark";
    box.Core.recordLesson("a1-u01-l1", 10, 10, 20);
    box.Core.resetState();
    pusty(box.Core.state.lessons, "postępy lekcji wyczyszczone");
    assert.equal(box.Core.state.settings.lang, "de", "język wyjaśnień przeżywa czyszczenie");
    assert.equal(box.Core.state.settings.theme, "dark");
  });
});

describe("harmonogram SM-2 (przenoszony w F1 do quaderno errori)", () => {
  test("dobra odpowiedź wydłuża odstęp: 1 dzień, 3 dni, potem × ef", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");

    assert.equal(box.Core.gradeCard(key, 5).interval, 1);
    assert.equal(box.Core.gradeCard(key, 5).interval, 3);
    const trzecia = box.Core.gradeCard(key, 5);
    assert.ok(trzecia.interval > 3, `trzeci odstęp ${trzecia.interval} ma rosnąć`);
  });

  test("zła odpowiedź zeruje serię i wraca w tej samej sesji", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    box.Core.gradeCard(key, 5);

    const c = box.Core.gradeCard(key, 2);
    assert.equal(c.reps, 0);
    assert.equal(c.interval, 0);
    assert.equal(c.lapses, 1);
    assert.ok(c.due - Date.now() <= 10 * 60000 + 50, "termin w ciągu dziesięciu minut");
  });

  test("ef nie schodzi poniżej 1.3 mimo pasma złych odpowiedzi", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    for (let i = 0; i < 20; i++) { box.Core.gradeCard(key, 3); box.Core.gradeCard(key, 0); }
    assert.ok(box.Core.state.srs[key].ef >= 1.3);
  });

  test("kluczem fiszki jest sam włoski, bez tłumaczenia", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("il pane", "chleb", "a1-u01-l1");
    assert.deepEqual(Object.keys(box.Core.state.srs), ["il pane"]);
  });
});

describe("postęp lekcji", () => {
  test("próg zaliczenia to 70 procent", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.recordLesson("l-a", 7, 10, 60).done, true);
    assert.equal(box.Core.recordLesson("l-b", 6, 10, 60).done, false);
  });

  test("raz zaliczona lekcja nie odzalicza się gorszym podejściem", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("l-a", 10, 10, 60);
    const drugie = box.Core.recordLesson("l-a", 2, 10, 60);
    assert.equal(drugie.done, true);
    assert.equal(drugie.best, 1, "najlepszy wynik zostaje");
    assert.equal(box.Core.state.stats.lessonsDone, 1, "liczy się raz");
  });
});
