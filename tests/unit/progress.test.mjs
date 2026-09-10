/* ============================================================
   Postępy ucznia: passa, licznik odpowiedzi, gdzie jestem w kursie
   (assets/js/core.js).

   Wszystko tutaj to liczby, które uczeń widzi w pasku bocznym i na
   ekranie postępów. Żadna z nich nie wywraca kursu, kiedy się zepsuje:
   passa zerująca się bez powodu wygląda jak zapomniany dzień, licznik
   punktów liczący dwa razy wygląda jak hojna ocena, a „gdzie jestem"
   wskazujące złą lekcję wygląda jak decyzja kursu. Dlatego mają test.

   Data jest podstawiona przez piaskownicę (`now`), nie brana z zegara:
   passa liczy się po DNIACH, więc test na prawdziwej dacie przechodziłby
   zawsze poza jedną minutą na dobę — a o północy zgłaszałby usterkę,
   której nie ma.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** Południe, żeby strefa czasowa nie przesuwała dnia. */
function dzien(iso) { return new Date(iso + "T12:00:00").getTime(); }

function silnik(iso) {
  const box = loadEngine({ now: dzien(iso || "2026-03-10") });
  box.Core.load();
  return box;
}

describe("passa", () => {
  test("pierwszy dzień nauki zaczyna serię od jednego", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 1);
    assert.equal(s.best, 1);
    assert.equal(s.lastDay, "2026-03-10");
  });

  test("drugie wejście tego samego dnia niczego nie dokłada", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    box.Core.touchDay();
    assert.equal(box.Core.state.streak.count, 1);
  });

  test("dzień po dniu wydłuża serię", () => {
    const box = silnik("2026-03-11");
    box.Core.state.streak = { count: 4, lastDay: "2026-03-10", best: 4 };
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 5);
    assert.equal(s.best, 5);
  });

  test("opuszczony dzień zaczyna serię od nowa, ale rekord zostaje", () => {
    /* Rekord jest tym, co uczeń już osiągnął: zerowanie go razem z serią
       kasowałoby dowód pracy, której nikt mu nie odbierze. */
    const box = silnik("2026-03-13");
    box.Core.state.streak = { count: 9, lastDay: "2026-03-10", best: 9 };
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 1, "trzy dni przerwy to nie jest ciąg dalszy");
    assert.equal(s.best, 9);
  });

  test("granica miesiąca to nadal kolejny dzień, nie przerwa", () => {
    /* Odstęp liczy się na datach, nie na numerze dnia w miesiącu:
       „1" po „31" wyglądałoby jak trzydzieści dni wstecz. */
    const box = silnik("2026-04-01");
    box.Core.state.streak = { count: 2, lastDay: "2026-03-31", best: 2 };
    box.Core.touchDay();
    assert.equal(box.Core.state.streak.count, 3);
  });

  test("dzień nauki zakłada swój licznik, nawet zanim padnie odpowiedź", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    assert.equal(box.Core.state.stats.days["2026-03-10"], 0);
  });
});

describe("licznik odpowiedzi", () => {
  test("dobra odpowiedź daje punkt doświadczenia, zła nie odbiera", () => {
    const box = silnik();
    box.Core.recordAnswer(true);
    box.Core.recordAnswer(false);
    const st = box.Core.state;

    assert.equal(st.stats.correct, 1);
    assert.equal(st.stats.wrong, 1);
    assert.equal(st.xp, 1, "za pomyłkę nie odejmujemy: kurs nie karze za próbowanie");
  });

  test("licznik trafia do magazynu, nie tylko do pamięci", () => {
    const box = silnik();
    box.Core.recordAnswer(true);
    box.flush();
    assert.equal(box.stored().stats.correct, 1);
  });
});

describe("stan lekcji", () => {
  test("nieznana lekcja nie ma stanu i nie jest zdana", () => {
    const box = silnik();
    assert.equal(box.Core.lessonState("a1-u01-l1"), null);
    assert.equal(box.Core.isLessonDone("a1-u01-l1"), false);
  });

  test("wynik poniżej progu zapisuje podejście, ale nie zalicza", () => {
    /* Próg 70% jest decyzją produktową opisaną w treści lekcji: zmiana
       tutaj ma być widoczna jako zmiana testu, nie po cichu. */
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 6, 10, 0);

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), false);
    assert.equal(box.Core.lessonState("a1-u01-l1").attempts, 1);
  });

  test("wynik od progu w górę zalicza lekcję i daje dwadzieścia punktów", () => {
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 7, 10, 0);
    const st = box.Core.state;

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), true);
    assert.equal(st.stats.lessonsDone, 1);
    assert.equal(st.xp, 20 + 7 * 2, "premia za zaliczenie plus dwa punkty za odpowiedź");
  });

  test("słabsze powtórzenie nie odbiera zaliczenia ani nie liczy go drugi raz", () => {
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 0);
    box.Core.recordLesson("a1-u01-l1", 2, 10, 0);
    const st = box.Core.state;

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), true, "zdane zostaje zdane");
    assert.equal(st.stats.lessonsDone, 1, "policzone raz, mimo dwóch podejść");
    assert.equal(box.Core.lessonState("a1-u01-l1").best, 1, "najlepszy wynik zostaje najlepszy");
  });
});

describe("gdzie jestem w kursie", () => {
  const POZIOM = {
    code: "A1",
    units: [
      { id: "u1", lessons: [{ id: "l1" }, { id: "l2" }], test: { id: "t1" } },
      { id: "u2", lessons: [{ id: "l3" }] }
    ]
  };

  function zdane(box, ids) {
    ids.forEach((id) => box.Core.recordLesson(id, 10, 10, 0));
  }

  test("postęp jednostki liczy też jej sprawdzian", () => {
    const box = silnik();
    zdane(box, ["l1"]);
    const p = box.Core.unitProgress(POZIOM.units[0]);

    assert.equal(p.total, 3, "dwie lekcje i sprawdzian");
    assert.equal(p.done, 1);
    assert.equal(Math.round(p.pct * 100), 33);
  });

  test("postęp poziomu sumuje jednostki, nie uśrednia ich procentów", () => {
    /* Uśrednianie procentów dałoby jednostce z jedną lekcją tę samą wagę,
       co jednostce z dziesięcioma. */
    const box = silnik();
    zdane(box, ["l1", "l2", "t1"]);
    const p = box.Core.levelProgress(POZIOM);

    assert.equal(p.done, 3);
    assert.equal(p.total, 4);
  });

  test("pusta jednostka nie dzieli przez zero", () => {
    const box = silnik();
    assert.equal(box.Core.unitProgress({ id: "x" }).pct, 0);
    assert.equal(box.Core.levelProgress({ code: "X" }).pct, 0);
  });

  test("następna lekcja to pierwsza niezdana, licząc po kolei", () => {
    const box = silnik();
    zdane(box, ["l1"]);
    assert.equal(box.Core.nextLesson(POZIOM).lesson.id, "l2");
  });

  test("po lekcjach jednostki przychodzi jej sprawdzian, nie następna jednostka", () => {
    const box = silnik();
    zdane(box, ["l1", "l2"]);
    assert.equal(box.Core.nextLesson(POZIOM).lesson.id, "t1");
  });

  test("poziom przerobiony w całości nie ma następnej lekcji", () => {
    const box = silnik();
    zdane(box, ["l1", "l2", "t1", "l3"]);
    assert.equal(box.Core.nextLesson(POZIOM), null);
  });
});

describe("plik z kopią zapasową", () => {
  test("wypuszczony plik niesie już nowy znacznik kopii", () => {
    /* Znacznik stawiamy PRZED serializacją. Inaczej odzyskana kopia mówi
       „ostatni zapis: przed dziesięcioma lekcjami" i prosi o następną
       natychmiast po odtworzeniu. */
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 0);
    box.Core.downloadBackup();

    const plik = JSON.parse(box.pobrania.blobs[0].tresc);
    assert.equal(plik.backup.at, box.Core.state.stats.lessonsDone);
    assert.ok(plik.backup.ts > 0, "czas zapisania kopii jest w pliku, nie tylko w pamięci");
  });

  test("nazwa pliku niesie język wyjaśnień i datę, żeby dwie kopie się nie zlały", () => {
    const box = silnik("2026-03-10");
    box.Core.downloadBackup();
    const a = box.utworzone[box.utworzone.length - 1];

    assert.equal(a.download, "impara-italiano-pl-2026-03-10.json");
    assert.equal(a.klikniecia, 1, "link musi zostać kliknięty, inaczej nic się nie pobiera");
    assert.equal(box.pobrania.blobs[0].type, "application/json");
  });

  test("uchwyt pliku jest zwalniany, a nie zostawiany w pamięci przeglądarki", () => {
    const box = silnik();
    box.Core.downloadBackup();
    assert.equal(box.pobrania.zwolnione.length, 0, "nie od razu: link musi zdążyć zadziałać");

    box.flush();
    assert.equal(box.pobrania.zwolnione.length, 1);
  });
});
