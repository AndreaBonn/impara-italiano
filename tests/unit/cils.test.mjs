/* ============================================================
   Symulacja egzaminu: punktacja i werdykt.

   Dwie rzeczy, które ten plik pilnuje mocniej niż inne testy w kursie.

   Pierwsza: sekcja, w której skończył się czas, ma dać punkty za to, co
   uczeń zdążył zaznaczyć, a nie zero i nie komplet. Zero byłoby karą za
   działanie zegara, komplet byłby prezentem.

   Druga: werdykt jest ASYMETRYCZNY i to nie jest przeoczenie. Jedna
   sprawność poniżej progu wystarczy, żeby powiedzieć „nie zdane";
   wszystkie powyżej progu NIE wystarczą, żeby powiedzieć „zdane", bo
   dwie sprawności z czterech w ogóle nie są tu oceniane. Test na tę
   drugą stronę jest ważniejszy: to jedyne miejsce, w którym symulator
   mógłby zacząć obiecywać wynik egzaminu.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function silnik() {
  const box = loadEngine({ files: ["data/core/cils.js", "assets/js/cils.js"] });
  return box.sandbox.Cils;
}

describe("punktacja prób zamkniętych", () => {
  test("komplet trafień daje maksimum sekcji", () => {
    const C = silnik();
    const sez = C.sezione(C.sim("sim-1"), "ascolto");
    const risp = sez.prove.map(p => p.items.map(i => i.a));
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 12);
    assert.equal(w.max, 12);
  });

  test("odpowiedź pominięta waży tyle co zła, czyli zero", () => {
    const C = silnik();
    const prova = C.sezione(C.sim("sim-1"), "ascolto").prove[0];
    const zle = prova.items.map(i => (i.a + 1) % 3);
    const puste = prova.items.map(() => null);
    assert.equal(C.punteggioProva(prova, zle).punti, 0);
    assert.equal(C.punteggioProva(prova, puste).punti, 0);
  });

  test("prova da dwanaście itemów waży pół punktu za item", () => {
    const C = silnik();
    const prova = C.sezione(C.sim("sim-1"), "ascolto").prove[1];
    const polowa = prova.items.map((it, i) => (i < 6 ? it.a : null));
    assert.equal(C.punteggioProva(prova, polowa).punti, 3);
  });

  test("czas, który minął w połowie, zostawia punkty za zaznaczone", () => {
    const C = silnik();
    const sez = C.sezione(C.sim("sim-1"), "lettura");
    /* Uczeń zdążył pierwszą próbę i ani jednego itemu z drugiej. */
    const risp = [sez.prove[0].items.map(i => i.a), []];
    const w = C.punteggioSezione(sez, risp);
    assert.equal(w.punti, 6);
    assert.equal(w.date, 12);
    assert.equal(w.totali, 18);
  });
});

describe("werdykt", () => {
  test("jedna sprawność poniżej progu przesądza o niezdaniu", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 12, lettura: 6 });
    assert.equal(e.verdetto, "sotto-soglia");
    assert.equal(e.abilita.lettura.sopraSoglia, false);
  });

  test("wszystko powyżej progu NIE daje werdyktu „zdane”", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 12, lettura: 12 });
    assert.equal(e.verdetto, "indeterminato");
    assert.notEqual(e.verdetto, "superato");
  });

  test("pisanie i mówienie zostają poza liczeniem", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 9, lettura: 9 });
    assert.deepEqual(Array.from(e.nonContate), ["scritta", "orale"]);
    assert.equal(e.abilita.scritta.misurata, false);
    assert.equal(e.abilita.orale.misurata, false);
  });

  test("brak wyniku sprawności liczy się jak zero, nie jak jej nieobecność", () => {
    const C = silnik();
    const e = C.esito({ ascolto: 10 });
    assert.equal(e.abilita.lettura.punti, 0);
    assert.equal(e.verdetto, "sotto-soglia");
  });
});

describe("kontrola wypowiedzi pisemnej", () => {
  test("liczy słowa i sprawdza limit, bez wystawiania oceny", () => {
    const C = silnik();
    const traccia = C.sim("sim-1").sezioni[2].tracce[0];
    const krotki = C.controlloScritta(traccia, "Gentile ufficio, buongiorno.");
    assert.equal(krotki.parole, 3);
    assert.equal(krotki.dentroLimite, false);
    /* Żadnego pola z punktami: siatkę oceny prowadzi człowiek. */
    assert.equal(krotki.punti, undefined);
  });
});

describe("dane symulacji", () => {
  test("obie symulacje mają cztery sekcje w tej samej kolejności", () => {
    const C = silnik();
    C.simulazioni().forEach(s => {
      assert.deepEqual(Array.from(s.sezioni.map(x => x.id)),
        ["ascolto", "lettura", "scritta", "orale"]);
    });
  });

  test("druga symulacja nie powtarza tekstów pierwszej", () => {
    const C = silnik();
    const zdania = (sim) => {
      const out = [];
      sim.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
        (p.brani || []).forEach(b => b.forEach(r => out.push(r.it)));
        (p.testo || []).forEach(x => out.push(x));
      }));
      return out;
    };
    const a = new Set(zdania(C.sim("sim-1")));
    const wspolne = zdania(C.sim("sim-2")).filter(x => a.has(x));
    assert.deepEqual(Array.from(wspolne), []);
  });

  test("ogni item ha una risposta valida fra le opzioni", () => {
    const C = silnik();
    C.simulazioni().forEach(s => s.sezioni.forEach(sez => (sez.prove || []).forEach(p => {
      p.items.forEach((it, i) => {
        const n = p.t === "vf" ? 2 : (it.opts || []).length;
        assert.ok(it.a >= 0 && it.a < n, `${s.id}/${sez.id}: item ${i} punta fuori dalle opzioni`);
      });
    })));
  });
});

describe("czego w danych nie ma", () => {
  test("nieznana symulacja nie wraca pierwszą lepszą", () => {
    /* Adres z zakładki może wskazywać symulację, której już nie ma:
       podstawienie innej pokazałoby uczniowi cudzy egzamin bez słowa. */
    const C = silnik();
    assert.equal(C.sim("nie-ma-takiej"), null);
    assert.equal(C.sim(), C.simulazioni()[0], "bez id wolno wziąć pierwszą");
  });

  test("nieznana sekcja to null, nie pusta sekcja", () => {
    const C = silnik();
    assert.equal(C.sezione(C.sim("sim-1"), "nie-ma"), null);
    assert.equal(C.sezione(null, "ascolto"), null);
  });
});
