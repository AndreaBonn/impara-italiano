/* ============================================================
   Przebieg symulacji egzaminu (assets/js/cils-run.js).

   cils.test.mjs sprawdza punktację JEDNEJ sekcji. Tu chodzi o całe
   podejście: cztery sekcje po kolei, siatka odpowiedzi, sekcje z
   wyczerpanym czasem i wpis do historii ucznia.

   Dlaczego to nie miało testu przez cały czas: przejście symulacji trwa
   godzinę i ma cztery odliczania, więc test w przeglądarce musiałby albo
   odczekać ten czas, albo podmienić zegar. Odkąd przebieg nie dotyka
   DOM-u, przechodzi się go tutaj w milisekundach — razem z gałęziami,
   których nikt nigdy ręcznie nie wyklikał: import z popsutym polem
   `cils.runs` i pięćdziesiąte pierwsze podejście.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "data/core/cils.js", "assets/js/cils.js", "assets/js/cils-run.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

/** Podejście do gotowej symulacji z danych kursu. */
function podejscie(box) {
  const s = box.sandbox.Cils.sim("sim-1");
  return box.sandbox.CilsRun.create(s);
}

/** Wypełnia sekcję zamkniętą kompletem poprawnych odpowiedzi. */
function wypelnijPoprawnie(run, sez) {
  run.przygotuj(sez);
  sez.prove.forEach((p, n) => {
    p.items.forEach((it, i) => run.odpowiedz(sez.id, n, i, it.a));
  });
}

describe("kolejność sekcji", () => {
  test("zaczyna od słuchania i idzie porządkiem egzaminu", () => {
    const run = podejscie(silnik());
    const kolejnosc = [];
    for (let n = 0; n < 4; n++) {
      kolejnosc.push(run.sekcja().id);
      run.dalej();
    }
    assert.deepEqual(kolejnosc, ["ascolto", "lettura", "scritta", "orale"]);
  });

  test("krok jest numerowany od jednego, bo tak go czyta uczeń", () => {
    const run = podejscie(silnik());
    assert.equal(run.krok, 1);
    assert.equal(run.ile, 4);
    run.dalej();
    assert.equal(run.krok, 2);
  });

  test("po ostatniej sekcji nie ma następnej, jest podsumowanie", () => {
    const run = podejscie(silnik());
    for (let n = 0; n < 4; n++) run.dalej();
    assert.equal(run.sekcja(), null);
    assert.equal(run.skonczone, true);
  });
});

describe("siatka odpowiedzi", () => {
  test("powstaje pusta i o rozmiarze prób, zanim uczeń kliknie cokolwiek", () => {
    /* Punktacja chodzi po indeksach: lista krótsza o jeden przesunęłaby
       odpowiedzi na cudze pytania i dałaby wynik, którego nikt nie zgłosi. */
    const box = silnik();
    const run = podejscie(box);
    const sez = run.sekcja();
    const siatka = run.przygotuj(sez);

    assert.equal(siatka.length, sez.prove.length);
    sez.prove.forEach((p, n) => assert.equal(siatka[n].length, p.items.length));
    assert.equal(siatka[0][0], undefined, "brak odpowiedzi to nie jest zero punktów wpisane z góry");
  });

  test("odpowiedź ląduje pod swoim numerem próby i itemu", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    run.odpowiedz(sez.id, 1, 2, 3);

    assert.equal(run.odpowiedzi(sez.id)[1][2], 3);
    assert.equal(run.odpowiedzi(sez.id)[0][2], undefined, "sąsiednia próba zostaje nietknięta");
  });

  test("odpowiedź do nieprzygotowanej sekcji nie wywraca podejścia", () => {
    const run = podejscie(silnik());
    assert.equal(run.odpowiedz("lettura", 0, 0, 1), false);
  });
});

describe("punkty sekcji", () => {
  test("komplet trafień daje maksimum i zapamiętuje rachunek", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    wypelnijPoprawnie(run, sez);
    const w = run.zamknij(sez);

    assert.equal(w.punti, 12);
    assert.equal(run.dane.punti.ascolto, 12);
    assert.equal(run.dane.szczegoly.ascolto.esatte, w.esatte);
  });

  test("sekcja zamknięta bez ani jednej odpowiedzi daje zero, nie undefined", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    assert.equal(run.zamknij(sez).punti, 0);
    assert.equal(run.dane.punti.ascolto, 0);
  });
});

describe("czas, który się skończył", () => {
  test("sekcja jest oznaczona jako scaduta i widać to w podsumowaniu", () => {
    const run = podejscie(silnik());
    assert.equal(run.czyScadla("ascolto"), false);
    run.scadla("ascolto");
    assert.equal(run.czyScadla("ascolto"), true);
    assert.equal(run.czyScadla("lettura"), false);
  });

  test("wyczerpany czas nie kasuje tego, co uczeń zdążył zaznaczyć", () => {
    /* Zero byłoby karą za działanie zegara, komplet byłby prezentem. */
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    sez.prove[0].items.forEach((it, i) => run.odpowiedz(sez.id, 0, i, it.a));
    run.scadla(sez.id);

    assert.ok(run.zamknij(sez).punti > 0);
  });
});

describe("werdykt całego podejścia", () => {
  test("dwie sprawności policzone, dwie zadeklarowane jako niemierzone", () => {
    const run = podejscie(silnik());
    ["ascolto", "lettura"].forEach(() => {
      const sez = run.sekcja();
      wypelnijPoprawnie(run, sez);
      run.zamknij(sez);
      run.dalej();
    });
    const e = run.esito();

    assert.equal(e.abilita.ascolto.misurata, true);
    assert.equal(e.abilita.scritta.misurata, false);
    assert.equal(e.verdetto, "indeterminato", "komplet punktów nie obiecuje zdania egzaminu");
  });

  test("jedna sprawność pod progiem wystarczy, żeby powiedzieć „nie zdane”", () => {
    const run = podejscie(silnik());
    const sez = run.sekcja();
    run.przygotuj(sez);
    run.zamknij(sez);          // zero punktów ze słuchania
    assert.equal(run.esito().verdetto, "sotto-soglia");
  });
});

describe("wpis do historii", () => {
  function poPodejsciu(box) {
    const run = podejscie(box);
    const sez = run.sekcja();
    wypelnijPoprawnie(run, sez);
    run.zamknij(sez);
    run.scadla("lettura");
    return run;
  }

  test("wpis niesie punkty, sekcje bez czasu i werdykt, a nie odpowiedzi", () => {
    /* Odpowiedzi są ćwiczeniem, nie historią: trzymanie ich rozdmuchałoby
       jedyny klucz w localStorage, który dzieli cały kurs. */
    const box = silnik();
    const run = poPodejsciu(box);
    const w = box.sandbox.CilsRun.wpis(run, run.esito(), 1700000000000);

    assert.equal(w.sim, "sim-1");
    assert.equal(w.ts, 1700000000000);
    assert.equal(w.punti.ascolto, 12);
    assert.equal(w.punti.lettura, 0, "sekcja nierozegrana liczy się jako zero, nie znika");
    assert.deepEqual(Array.from(w.scadute), ["lettura"]);
    assert.equal(w.verdetto, "sotto-soglia");
    assert.equal(w.risposte, undefined);
  });

  test("wpis trafia do stanu i przeżywa zapis", () => {
    const box = silnik();
    const run = poPodejsciu(box);

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1700000000000), true);
    box.flush();
    assert.equal(box.stored().cils.runs.length, 1);
    assert.equal(box.stored().cils.runs[0].sim, "sim-1");
  });

  test("historia ma sufit: pięćdziesiąte pierwsze podejście wypycha pierwsze", () => {
    const box = silnik();
    const run = poPodejsciu(box);
    const CR = box.sandbox.CilsRun;

    for (let n = 0; n < CR.MAX_HISTORII + 5; n++) CR.zapisz(run, run.esito(), n);
    const runs = box.Core.state.cils.runs;

    assert.equal(runs.length, CR.MAX_HISTORII);
    assert.equal(runs[0].ts, 5, "wypadają najstarsze, zostaje ogon");
    assert.equal(runs[runs.length - 1].ts, CR.MAX_HISTORII + 4);
  });

  test("popsute pole `cils.runs` z importu nie wywraca podsumowania", () => {
    /* Walidacja importu sprawdza tylko typ pola najwyższego poziomu, więc
       `cils` może przyjść jako obiekt z `runs` typu napis. `push` na napisie
       rzuciłby wyjątkiem po godzinie egzaminu, w chwili pokazywania wyniku. */
    const box = silnik();
    const run = poPodejsciu(box);
    box.Core.state.cils = { runs: "nie tablica" };

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1), false);
    assert.equal(box.Core.state.cils.runs, "nie tablica", "i nic nie nadpisuje");
  });

  test("brak kontenera w starszym profilu też nie jest awarią", () => {
    const box = silnik();
    const run = poPodejsciu(box);
    delete box.Core.state.cils;

    assert.equal(box.sandbox.CilsRun.zapisz(run, run.esito(), 1), false);
  });
});

describe("odpowiedzi sekcji otwartych", () => {
  test("wypracowanie i część ustna zostają przy podejściu, nie w punktach", () => {
    /* Symulator ich nie ocenia i ma tego nie udawać: w podsumowaniu stoją
       jako materiał do samodzielnego sprawdzenia. */
    const run = podejscie(silnik());
    run.zapiszScritta({ it: "Scrivi una cartolina" }, "Ciao, sono a Roma.");
    run.zapiszOrale("La mia città", 3);

    assert.equal(run.dane.scritta.testo, "Ciao, sono a Roma.");
    assert.equal(run.dane.orale.spuntate, 3);
    assert.equal(run.dane.punti.scritta, undefined, "brak punktów to nie zero punktów");
    assert.equal(run.esito().abilita.scritta.misurata, false);
  });
});
