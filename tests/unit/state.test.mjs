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

describe("kontenery silnika adaptacyjnego", () => {
  const NOWE = ["errors", "gsrs", "drills", "session", "writing"];

  test("profil zapisany przed zmianą dostaje je puste, bez migracji", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 40, lessons: { "a1-u01-l1": { done: true } } }) } });
    box.Core.load();

    assert.equal(box.Core.state.schema, SCHEMA, "numer schematu się nie rusza");
    assert.equal(box.Core.state.xp, 40, "postępy przechodzą nietknięte");
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true);
    NOWE.forEach(k => pusty(box.Core.state[k], `${k} startuje pusty`));
    assert.equal(box.Core.state.placement, null, "brak testu poziomującego to null, nie obiekt");
  });

  test("zawartość kontenerów przeżywa zapis i odczyt", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.errors["klucz-1"] = { kind: "authored", tag: "g-presente", lapses: 1 };
    box.Core.state.gsrs["g-presente"] = { ef: 2.5, reps: 1, interval: 1, due: 123 };
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.equal(zapis.errors["klucz-1"].tag, "g-presente");
    assert.equal(zapis.gsrs["g-presente"].interval, 1);
  });

  test("czyszczenie postępów opróżnia je razem z resztą", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.errors["klucz-1"] = { kind: "authored" };
    box.Core.resetState();
    pusty(box.Core.state.errors, "quaderno errori znika razem z postępami");
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
    assert.deepEqual(box.toasts, ["core.saveBlocked"]);
  });

  test("zwykły toast znika sam", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.toast("wiadomość");
    box.flush();
    assert.deepEqual(box.visible(), [], "toast nie zostaje na ekranie");
  });
});

/* R6. Przed F0 przy pełnej pamięci nie zapisywało się NIC: cały stan
   siedzi pod jednym kluczem, więc razem z fiszkami przepadały postępy
   lekcji, czyli jedyna rzecz, której uczeń nie odtworzy. */
describe("pełna pamięć: co ustępuje miejsca", () => {
  /** Zapis, w którym karty błędów zajmują dużo, a postępy mało. */
  function zapchany(limit) {
    const box = loadEngine({ storage: makeStorage({ limit: limit }) });
    box.Core.load();
    box.Core.state.lessons["a1-u01-l1"] = { done: true, best: 1, score: 10, total: 10, attempts: 1, ts: 1 };
    box.Core.state.stats.lessonsDone = 1;
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["klucz-" + i] = {
        kind: "authored", tag: "g-presente", srcId: "a1-u01-l1",
        ef: 2.5, reps: i % 5, interval: i, due: 1000 + i, lapses: 1, ts: 1000 + i,
        wypelniacz: "x".repeat(200)
      };
    }
    return box;
  }

  test("postępy lekcji zostają zapisane, karty błędów ustępują", () => {
    const box = zapchany(4000);
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.notEqual(zapis, null, "zapis doszedł do skutku mimo braku miejsca");
    assert.equal(zapis.lessons["a1-u01-l1"].done, true, "postęp lekcji przetrwał");
    assert.equal(zapis.stats.lessonsDone, 1);
    assert.ok(Object.keys(zapis.errors).length < 40, "część kart błędów wyrzucona");
  });

  test("wyrzucane są najpierw karty najlepiej opanowane", () => {
    const box = zapchany(4000);
    box.Core.state.errors["swieza"] = {
      kind: "authored", tag: "g-presente", ef: 2.5, reps: 0, interval: 0,
      due: 1, lapses: 3, ts: 9999, wypelniacz: "x".repeat(200)
    };
    box.Core.save();
    box.flush();

    const zostale = box.stored(KEY).errors;
    assert.ok(zostale["swieza"], "karta z trzema pomyłkami i bez serii zostaje");
  });

  test("komunikat o utracie danych zostaje na ekranie, nie znika po chwili", () => {
    const box = zapchany(4000);
    box.Core.save();
    box.flush();
    assert.ok(box.visible().length > 0, "ostrzeżenie nadal widoczne po upływie czasu");
  });

  test("gdy nie ma już czego wyrzucić, uczeń dowiaduje się o tym wprost", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 20 }) });
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 9, 10, 60);
    box.flush();

    assert.equal(box.storage.getItem(KEY), null, "naprawdę się nie zmieściło");
    assert.ok(box.visible().length > 0, "i jest o tym trwały komunikat, nie znikający toast");
  });

  test("czyszczenie i tak nie rusza ustawień ani passy", () => {
    const box = zapchany(4000);
    box.Core.state.streak = { count: 12, lastDay: "2026-09-09", best: 12 };
    box.Core.state.settings.lang = "de";
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.equal(zapis.streak.count, 12);
    assert.equal(zapis.settings.lang, "de");
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

  test("plik z przyszłości jest odrzucany", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: 99, xp: 1 })));
  });

  test("plik bez pola schema jest odrzucany", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ xp: 1 })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: "2", xp: 1 })));
  });

  /* Zmiana wobec stanu sprzed F0: wcześniej odrzucany był KAŻDY plik
     o innym numerze, także starszy. To zamykało drogę powrotu z kopii
     zapasowej zrobionej przed migracją i sprawiało, że polityka „nie
     podnosimy schematu" była odroczeniem, a nie polityką. */
  test("starszy plik wchodzi i migruje po drodze", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.importState(JSON.stringify({
      schema: 1,
      xp: 55,
      srs: { "andare|iść": { it: "andare", pl: "iść", ef: 2.5, reps: 2, interval: 3, due: 42, lapses: 0 } }
    }));
    assert.equal(box.Core.state.xp, 55);
    assert.deepEqual(Object.keys(box.Core.state.srs), ["andare"], "fiszka przekluczona na sam włoski");
    assert.equal(box.Core.state.srs.andare.tr.pl, "iść");
    assert.equal(box.Core.state.schema, SCHEMA);
  });

  test("plik o złym kształcie odpada na wejściu, nie trzy ekrany dalej", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, lessons: "ciao" })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, srs: [1, 2, 3] })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, xp: "dużo" })));
    assert.throws(() => box.Core.importState(JSON.stringify([1, 2, 3])));
    assert.throws(() => box.Core.importState('"tekst"'));
  });

  test("odrzucony plik nie zostawia po sobie połowy stanu", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 20);
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, xp: 999, lessons: "ciao" })));
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "poprzedni stan nietknięty");
    assert.notEqual(box.Core.state.xp, 999);
  });

  test("plik ponad rozmiar sensownego zapisu odpada przed parsowaniem", () => {
    const box = loadEngine();
    box.Core.load();
    const ogromny = '{"schema":2,"note":"' + "x".repeat(9 * 1024 * 1024) + '"}';
    assert.throws(() => box.Core.importState(ogromny));
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
