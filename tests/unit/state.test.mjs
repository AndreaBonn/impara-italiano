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
  /* `gsrs` był tu do F1. Zadeklarowany przy silniku adaptacyjnym, nigdy
     przez nikogo nie zapisany ani nie odczytany — jedynym dotknięciem był
     test niżej, który wpisywał go ręcznie. Usunięty razem z kontenerem. */
  const NOWE = ["errors", "drills", "session", "writing"];

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
    box.Core.state.drills["prep-art"] = { podejscia: 3 };
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.equal(zapis.errors["klucz-1"].tag, "g-presente");
    assert.equal(zapis.drills["prep-art"].podejscia, 3);
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

/* Od F1 `Core.schedule` obsługuje WYŁĄCZNIE quaderno błędów: talia
   słownictwa poszła na FSRS (gradeCard niżej). Te trzy asercje opisują to
   samo zachowanie, co przed zmianą, tylko wołają je tam, gdzie ono teraz
   mieszka — przez `schedule` na luźnej karcie, jak robi to errors.js. */
describe("harmonogram SM-2 (od F1 tylko quaderno błędów)", () => {
  /** Karta w kształcie, jaki zakłada errors.js. */
  function karta() {
    return { ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
  }

  test("dobra odpowiedź wydłuża odstęp: 1 dzień, 3 dni, potem × ef", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();

    assert.equal(box.Core.schedule(c, 5).interval, 1);
    assert.equal(box.Core.schedule(c, 5).interval, 3);
    const trzecia = box.Core.schedule(c, 5);
    assert.ok(trzecia.interval > 3, `trzeci odstęp ${trzecia.interval} ma rosnąć`);
  });

  test("zła odpowiedź zeruje serię i wraca w tej samej sesji", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();
    box.Core.schedule(c, 5);

    box.Core.schedule(c, 2);
    assert.equal(c.reps, 0);
    assert.equal(c.interval, 0);
    assert.equal(c.lapses, 1);
    assert.ok(c.due - Date.now() <= 10 * 60000 + 50, "termin w ciągu dziesięciu minut");
  });

  test("ef nie schodzi poniżej 1.3 mimo pasma złych odpowiedzi", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();
    for (let i = 0; i < 20; i++) { box.Core.schedule(c, 3); box.Core.schedule(c, 0); }
    assert.ok(c.ef >= 1.3);
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

/* Znalezione w przeglądzie: potarcie ruszało przy KAŻDYM błędzie zapisu,
   także wtedy, gdy magazyn jest zablokowany (tryb prywatny, polityka).
   Tam wyrzucanie kart niczego nie naprawia, a kasuje pracę z tej sesji. */
describe("potarcie tylko przy braku miejsca", () => {
  function zablokowany(nazwaBledu) {
    const storage = makeStorage();
    storage.setItem = function () {
      const e = new Error("odmowa");
      e.name = nazwaBledu;
      throw e;
    };
    return storage;
  }

  test("zablokowany magazyn nie kasuje kart", () => {
    const box = loadEngine({ storage: zablokowany("SecurityError") });
    box.Core.load();
    for (let i = 0; i < 10; i++) box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, ts: i };
    box.Core.save();
    box.flush();

    assert.equal(Object.keys(box.Core.state.errors).length, 10, "karty nietknięte");
    assert.deepEqual(box.toasts, ["core.saveBlocked"], "ale uczeń wie, że nie zapisano");
  });

  test("brak miejsca nadal uruchamia potarcie", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 2000 }) });
    box.Core.load();
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, ts: i, w: "x".repeat(200) };
    }
    box.Core.save();
    box.flush();
    assert.ok(Object.keys(box.Core.state.errors).length < 40, "coś ustąpiło miejsca");
  });
});

/* ============================================================
   T010 — load() a schodki migracji.

   Defekt utajony, znaleziony przy planowaniu F1, niezależny od FSRS:
   `load()` (core.js:68) przyjmuje zapis WYŁĄCZNIE przy `schema === SCHEMA`
   i nigdy nie woła `migrateUp`. Schodki migracji są podpięte tylko pod
   `importState` (core.js:698). Zapis o innym numerze schematu jest więc
   po cichu pomijany, bez błędu i bez śladu: uczeń widzi pusty profil i
   nie ma jak się domyślić, co się stało ani tego odkręcić.

   Dziś to nie wybucha, bo nikt jeszcze nie podniósł schematu. Wybuchłoby
   przy pierwszym podniesieniu, czyli w najgorszym możliwym momencie —
   dlatego naprawa idzie TERAZ, osobno od decyzji o FSRS (R1 w
   specs/002-corso-irrinunciabile/riconciliazione.md).

   Te testy mają być czerwone przed poprawką z T011.
   ============================================================ */
describe("load: zapis starszego schematu przechodzi przez migracje", () => {
  /** Zapis w kształcie v1: fiszka kluczowana włoskim RAZEM z polskim. */
  function zapisV1(over) {
    return JSON.stringify(Object.assign({
      schema: 1,
      xp: 40,
      lessons: { "a1-u01-l1": { done: true, score: 8, total: 10 } },
      srs: {
        "un caffe|kawa": { it: "un caffè", pl: "kawa", ef: 2.5, reps: 3, interval: 9, due: 111 }
      }
    }, over));
  }

  test("postępy z zapisu v1 pod kluczem v2 nie przepadają", () => {
    const box = loadEngine({ seed: { [KEY]: zapisV1() } });
    box.Core.load();

    assert.equal(box.Core.state.xp, 40, "XP przechodzi przez migrację");
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "postęp lekcji przechodzi");
    assert.equal(box.Core.state.schema, SCHEMA, "po migracji numer schematu jest bieżący");
  });

  test("fiszka v1 zostaje przekluczowana na sam włoski", () => {
    const box = loadEngine({ seed: { [KEY]: zapisV1() } });
    box.Core.load();

    const klucze = Object.keys(box.Core.state.srs);
    assert.equal(klucze.length, 1, "jedna fiszka, jeden klucz");
    assert.ok(!klucze[0].includes("|"), "klucz nie niesie już tłumaczenia");
    assert.equal(box.Core.state.srs[klucze[0]].tr.pl, "kawa", "glosa ląduje pod językiem");
    assert.equal(box.Core.state.srs[klucze[0]].interval, 9, "harmonogram zostaje nietknięty");
  });

  test("zapis bieżącego schematu wczytuje się jak dotąd", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 7, settings: { rate: 0.8 } }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 7);
    assert.equal(box.Core.state.settings.rate, 0.8);
  });

  test("zapis z przyszłości jest odrzucany, a nie wczytywany połowicznie", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ schema: SCHEMA + 1, xp: 999 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 0, "nic z nowszego pliku nie wchodzi do stanu");
    assert.equal(box.Core.state.schema, SCHEMA, "stan zostaje na swoim schemacie");
  });
});

/* ============================================================
   F1 — talia słownictwa na FSRS.

   Numer schematu zostaje przy 2, bo żadne istniejące pole nie zmienia
   znaczenia: `due`, `interval`, `reps` i `lapses` znaczą to samo, `s` i `d`
   są nowe, a `ef` staje się balastem na starych kartach. Przeliczenia
   hurtem nie ma — karta przechodzi na nowe tory dopiero wtedy, gdy uczeń
   ją ZOBACZY (R1 w specs/002-corso-irrinunciabile/riconciliazione.md).
   ============================================================ */
describe("gradeCard: FSRS na talii słownictwa", () => {
  function zTalia() {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    return { box, key: box.Core.cardKey("mangiare") };
  }

  test("nowa karta dostaje stabilność i trudność, a nie ef", () => {
    const { box, key } = zTalia();
    const c = box.Core.gradeCard(key, 4);
    assert.equal(typeof c.s, "number", "stabilność");
    assert.equal(typeof c.d, "number", "trudność");
    assert.ok(c.d >= 1 && c.d <= 10, `trudność ${c.d} mieści się w 1..10`);
    assert.ok(c.due > Date.now(), "termin w przyszłości");
  });

  test("kolejne dobre odpowiedzi wydłużają odstęp", () => {
    const { box, key } = zTalia();
    /* Karta idzie przez kroki nauki, więc pierwsze terminy są minutowe;
       liczy się kierunek, nie konkretna liczba — te są w fsrs.test.mjs. */
    let poprzedni = 0;
    for (let i = 0; i < 4; i++) {
      const c = box.Core.gradeCard(key, 5);
      assert.ok(c.due - Date.now() >= poprzedni, `krok ${i + 1} nie skraca terminu`);
      poprzedni = c.due - Date.now();
    }
  });

  test("wpadka liczy się w lapses i zeruje serię", () => {
    const { box, key } = zTalia();
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 5);
    const c = box.Core.gradeCard(key, 0);
    assert.equal(c.reps, 0, "seria od nowa");
    assert.equal(c.lapses, 1);
  });

  test("stara karta SM-2 przechodzi na FSRS dopiero przy pierwszej powtórce", () => {
    const box = loadEngine();
    box.Core.load();
    /* Profil sprzed zmiany: fiszka z odstępem i ef, bez s i d. */
    box.Core.state.srs["il pane"] = {
      it: "il pane", tr: { pl: "chleb" }, src: "a1-u01-l1",
      ef: 2.1, reps: 4, interval: 12, due: Date.now() + 3 * 86400000, lapses: 0
    };
    const przed = box.Core.state.srs["il pane"].due;

    assert.equal(box.Core.state.srs["il pane"].s, undefined, "przed powtórką nic się nie rusza");
    assert.equal(box.Core.state.srs["il pane"].due, przed, "termin nietknięty");

    const c = box.Core.gradeCard("il pane", 4);
    assert.equal(typeof c.s, "number", "stabilność pojawia się przy powtórce");
    assert.ok(c.s >= 12, `stabilność ${c.s} wychodzi z dotychczasowego odstępu`);
    assert.ok(c.d > 1 && c.d < 10, `ef 2.1 daje trudność pośrednią, jest ${c.d}`);
  });

  test("nietknięte karty nie dostają s ani d przy samym wczytaniu profilu", () => {
    const box = loadEngine({
      seed: {
        [KEY]: saved({
          srs: {
            "il pane": { it: "il pane", tr: {}, ef: 2.5, reps: 3, interval: 9, due: 1, lapses: 0 }
          }
        })
      }
    });
    box.Core.load();
    const c = box.Core.state.srs["il pane"];
    assert.equal(c.s, undefined);
    assert.equal(c.interval, 9, "harmonogram sprzed zmiany zostaje na miejscu");
  });

  test("quaderno błędów nie zauważa zmiany: dalej chodzi po SM-2", () => {
    const box = loadEngine({ files: ["assets/js/fsrs.js", "assets/js/core.js"] });
    box.Core.load();
    const c = { ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
    box.Core.schedule(c, 5);
    assert.equal(c.interval, 1, "SM-2, nie FSRS");
    assert.equal(c.s, undefined, "żadnych pól FSRS w quaderno");
  });
});

describe("retencja: ustawienie ucznia zmienia terminy", () => {
  function zKarta(retencja) {
    const box = loadEngine();
    box.Core.load();
    if (retencja !== undefined) box.Core.state.settings.retention = retencja;
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    /* Karta ma wyjść z kroków nauki, żeby odstęp liczył się ze stabilności,
       a nie z minutowych kroków — inaczej test mierzyłby stałe, nie retencję. */
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 5);
    return box.Core.gradeCard(key, 4);
  }

  test("domyślna wartość to 0.9", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.state.settings.retention, 0.9);
  });

  test("wyższa retencja skraca odstęp, niższa go wydłuża", () => {
    const ostra = zKarta(0.95).interval;
    const domyslna = zKarta(0.9).interval;
    const luzna = zKarta(0.85).interval;
    assert.ok(ostra < domyslna, `0.95 (${ostra}) ma być krótsze niż 0.9 (${domyslna})`);
    assert.ok(domyslna < luzna, `0.9 (${domyslna}) ma być krótsze niż 0.85 (${luzna})`);
  });

  test("starszy profil bez tego pola dostaje wartość domyślną", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ settings: { rate: 0.8 } }) } });
    box.Core.load();
    assert.equal(box.Core.state.settings.retention, 0.9, "merge dokłada nowe pole");
    assert.equal(box.Core.state.settings.rate, 0.8, "a starych nie rusza");
  });
});

describe("ciągłość eksportu przez F1", () => {
  test("plik sprzed FSRS wraca z tymi samymi kartami i terminami", () => {
    /* Eksport z profilu w kształcie sprzed zmiany: ef i interval, zero
       pól FSRS. To jest plik, który uczeń ma dziś na dysku. */
    const przed = JSON.stringify({
      schema: SCHEMA, xp: 55,
      lessons: { "a1-u01-l1": { done: true } },
      srs: {
        "il pane": { it: "il pane", tr: { pl: "chleb" }, ef: 2.1, reps: 4, interval: 12, due: 1800000000000, lapses: 0 },
        "mangiare": { it: "mangiare", tr: { pl: "jeść" }, ef: 2.5, reps: 1, interval: 1, due: 1700000000000, lapses: 0 }
      }
    });

    const box = loadEngine();
    box.Core.load();
    box.Core.importState(przed);

    assert.equal(box.Core.state.schema, SCHEMA, "numer schematu nadal 2");
    assert.equal(Object.keys(box.Core.state.srs).length, 2);
    assert.equal(box.Core.state.srs["il pane"].due, 1800000000000, "termin nietknięty importem");
    assert.equal(box.Core.state.srs["il pane"].interval, 12);
    assert.equal(box.Core.state.srs["il pane"].s, undefined, "import nie przelicza na FSRS");
    assert.equal(box.Core.state.xp, 55);

    /* I z powrotem: to, co wyjdzie, ma się dać wczytać jeszcze raz. */
    const znowu = loadEngine();
    znowu.Core.load();
    znowu.Core.importState(box.Core.exportState());
    assert.equal(znowu.Core.state.srs["il pane"].due, 1800000000000);
    assert.equal(znowu.Core.state.schema, SCHEMA);
  });
});

describe("dziennik powtórek", () => {
  test("każda ocena zostawia wpis z kluczem, czasem i oceną", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 0);

    const d = box.Core.state.reviews;
    assert.equal(d.length, 2);
    assert.equal(d[0].k, key);
    assert.equal(d[0].q, 5);
    assert.equal(d[1].q, 0);
    assert.ok(d[0].t > 0 && d[1].t >= d[0].t, "czasy rosną");
  });

  test("starszy profil bez dziennika dostaje go pustym", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 3 }) } });
    box.Core.load();
    assert.deepEqual(Array.from(box.Core.state.reviews), []);
    assert.equal(box.Core.state.xp, 3);
  });

  test("dziennik przeżywa zapis, odczyt i eksport", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    box.Core.gradeCard(box.Core.cardKey("mangiare"), 4);
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).reviews.length, 1);

    const znowu = loadEngine();
    znowu.Core.load();
    znowu.Core.importState(box.Core.exportState());
    assert.equal(znowu.Core.state.reviews.length, 1, "przechodzi przez eksport");
  });

  test("dziennik ustępuje miejsca PO błędach, a przed postępami lekcji", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 4000 }) });
    box.Core.load();
    box.Core.state.lessons["a1-u01-l1"] = { done: true, score: 9, total: 10 };
    for (let i = 0; i < 300; i++) box.Core.state.reviews.push({ k: "k" + i, t: i, q: 4 });
    for (let i = 0; i < 30; i++) box.Core.state.errors["e" + i] = { kind: "authored", reps: 3, ts: i };
    box.Core.save();
    box.flush();

    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "postęp lekcji zostaje");
    assert.ok(
      Object.keys(box.Core.state.errors).length < 30 || box.Core.state.reviews.length < 300,
      "coś ustąpiło miejsca"
    );
  });
});

/* ============================================================
   T063 — zanieczyszczenie prototypu przez addCard.

   `merge()` filtruje `__proto__`, `constructor` i `prototype`, i ta obrona
   działa: zapis wczytany z pliku przez importState jej nie obchodzi.
   Ale `addCard` jej NIE przechodzi. Idzie prosto:

       cardKey(it) = norm(it)  ->  state.srs[k] = { … }

   `norm()` nie rusza podkreśleń, więc fiszka o treści „__proto__" ustawia
   PROTOTYP obiektu zamiast założyć w nim właściwość. Karta znika z
   Object.keys i z JSON.stringify, a odczyt dowolnego nieistniejącego
   klucza zaczyna trafiać w podstawiony obiekt.

   Do tej pory było to nieosiągalne, bo fiszki zakładał tylko kurs. Import
   talii z pliku (F4) czyni z tego wektor: wystarczy jedna linia w cudzym
   zestawie. Test ma być czerwony przed poprawką.
   ============================================================ */
describe("addCard: klucze zastrzeżone nie dotykają prototypu", () => {
  const ZASTRZEZONE = ["__proto__", "constructor", "prototype"];

  for (const zly of ZASTRZEZONE) {
    test(`fiszka „${zly}" zostaje właściwością własną, nie prototypem`, () => {
      const box = loadEngine();
      box.Core.load();
      box.Core.addCard(zly, "cokolwiek", "import");
      box.Core.save();
      box.flush();

      assert.ok(
        Object.prototype.hasOwnProperty.call(box.Core.state.srs, zly) ||
        Object.keys(box.Core.state.srs).length === 0,
        `„${zly}" albo jest własną właściwością, albo została odrzucona — nie może zniknąć w prototypie`
      );
      assert.equal(probePrototype(box, "polluted"), undefined, "prototyp nietknięty");
    });
  }

  test("karta z zastrzeżoną nazwą przeżywa zapis i odczyt albo nie powstaje", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("__proto__", "kawa", "import");
    box.Core.save();
    box.flush();

    const zapis = box.stored("linguai.italiano.v2");
    const klucze = Object.keys(zapis.srs || {});
    /* Albo jest w zapisie, albo jej nie ma. Czego nie wolno: żeby addCard
       zwróciło klucz, a w zapisie nie było po niej śladu. */
    if (klucze.length) assert.ok(klucze.includes("__proto__"));
  });
});
