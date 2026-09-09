/* ============================================================
   Ocena odpowiedzi: dobra jest uznawana za dobrą, zła za złą.

   To jest obietnica, na której stoi cały kurs, i do tej pory nie
   sprawdzał jej ani jeden test. exercises.spec.js pilnuje, że
   onDone woła się raz — ale zawołane z `false` na poprawnej odpowiedzi
   też jest „raz". Reszta suity buduje ćwiczenia i nigdy nie odpowiada
   na nie poprawnie.

   Konsekwencja takiej dziury jest cicha: uczeń dostaje „źle" na dobrą
   odpowiedź, wynik lekcji jest zaniżony, karta wraca do quaderno
   błędów, a w kodzie nic się nie wywraca. Żaden lint tego nie widzi.

   Każdy typ przechodzi tędy dwa razy: raz z odpowiedzią poprawną, raz
   z błędną. Dwa przebiegi w jednym teście, bo sprawdzana jest RÓŻNICA
   między nimi: test, który tylko potwierdza „zła odpowiedź jest zła",
   przeszedłby też na builderze, który zawsze mówi „źle".
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* Ćwiczenia syntetyczne, nie z kursu: opis kontraktu silnika nie ma
   przewracać się, gdy ktoś poprawi zdanie w lekcji.

   `gender` ma celowo tę samą odpowiedź w obu pozycjach: opcje są
   tasowane ziarnem, więc test, który zakładałby ich kolejność,
   sprawdzałby tasowanie zamiast oceny. */
const FIXTURES = {
  mcq: { t: "mcq", q: "Domanda", opts: ["giusto", "sbagliato"], a: 0 },
  truefalse: { t: "truefalse", q: "Vero o falso", a: 0 },
  multi: { t: "multi", q: "Scegli", opts: ["a", "b", "c"], a: [0, 1] },
  fill: { t: "fill", q: "Completa", a: "casa" },
  trans: { t: "trans", q: "Traduci", a: "casa", dir: "toIt" },
  cloze: { t: "cloze", text: "Ieri {{1}} al mercato.", gaps: [["sono andato"]] },
  order: { t: "order", tokens: ["io", "mangio"], a: "io mangio" },
  match: { t: "match", pairs: [{ it: "pane", tr: "chleb" }, { it: "vino", tr: "wino" }] },
  conj: { t: "conj", verb: "parlare", tense: "pres", persons: [0, 1] },
  gender: { t: "gender", items: [{ it: "pane", a: "il" }, { it: "vino", a: "il" }], opts: ["il", "la"] },
  listen: { t: "listen", it: "Buongiorno a tutti", alt: [] },
  speak: { t: "speak", it: "Buongiorno a tutti", tr: "dzień dobry" },
  dialogue: { t: "dialogue", lines: [{ sp: "A", it: "Ciao" }, { sp: "TY", choices: ["Ciao", "No"], a: 0 }] },
  minpair: { t: "minpair", a: "nonno", b: "nono", heard: "a" }
};

const TYPES = Object.keys(FIXTURES);

/**
 * Buduje ćwiczenie, odpowiada na nie i oddaje werdykt silnika.
 *
 * @param {boolean} poprawnie czy odpowiedzieć dobrze
 * @returns {{ok: boolean, wywolan: number, klasa: string}}
 */
async function odpowiedz(page, type, fixture, poprawnie) {
  return page.evaluate(async ([type, ex, dobrze]) => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    window.Audio2.speak = () => {};
    window.Audio2.speakSequence = () => ({ cancel() {} });
    window.Core.state.settings.autoplay = false;
    window.Core.state.settings.strictAccents = false;
    /* Bez mikrofonu „speak" idzie gałęzią pisaną — jedyną, którą da się
       ocenić bez prawdziwego głosu. */
    window.Audio2.sttSupported = false;

    const host = document.createElement("div");
    document.getElementById("main").appendChild(host);
    const built = window.Ex.build(ex, 0, "grade-" + type);
    host.innerHTML = built.html;
    const root = host.firstElementChild;

    let wywolan = 0, ok = null;
    built.wire(root, v => { wywolan++; ok = v; });

    const q = s => root.querySelector(s);
    const qq = s => Array.from(root.querySelectorAll(s));
    const check = () => { const b = q(".js-check"); if (b) b.click(); };
    const wpisz = (sel, v) => { q(sel).value = v; };
    const ZLE = "qwertyuiop";

    switch (type) {
      case "mcq":
      case "truefalse":
        q(`input[value="${dobrze ? ex.a : 1 - ex.a}"]`).checked = true;
        check();
        break;

      case "multi":
        /* Dobrze = dokładnie ten zbiór. Źle = podzbiór: to jest przypadek,
           który naiwne porównanie „każdy zaznaczony jest poprawny" przepuszcza. */
        (dobrze ? ex.a : [ex.a[0]]).forEach(i => { q(`input[value="${i}"]`).checked = true; });
        check();
        break;

      case "fill":
      case "trans":
      case "listen":
      case "speak":
        wpisz(".js-in", dobrze ? (ex.a || ex.it) : ZLE);
        check();
        break;

      case "cloze":
        wpisz(".js-gap", dobrze ? ex.gaps[0][0] : ZLE);
        check();
        break;

      case "order": {
        /* Te same żetony w obu przebiegach, inna kolejność: przy błędnym
           przebiegu zdanie ma być odwrócone, a nie niepełne. */
        const kolejnosc = dobrze ? ex.tokens : ex.tokens.slice().reverse();
        kolejnosc.forEach(slowo => {
          qq(".js-bank .tok").find(b => b.textContent === slowo).click();
        });
        check();
        break;
      }

      case "match":
        /* Błędny przebieg: jedna zła para na starcie, potem komplet dobrych.
           Ćwiczenie kończy się dopiero po dopasowaniu wszystkiego, więc
           „źle" znaczy tu „z pomyłką po drodze", nie „nieukończone". */
        if (!dobrze) {
          root.querySelector('[data-side="l"][data-i="0"]').click();
          root.querySelector('[data-side="r"][data-i="1"]').click();
          await sleep(700);
        }
        for (let i = 0; i < ex.pairs.length; i++) {
          root.querySelector(`[data-side="l"][data-i="${i}"]`).click();
          root.querySelector(`[data-side="r"][data-i="${i}"]`).click();
        }
        break;

      case "conj": {
        const formy = window.Verbs.conjugate(ex.verb, ex.tense);
        qq(".js-cell").forEach(inp => {
          const p = parseInt(inp.getAttribute("data-p"), 10);
          inp.value = dobrze ? formy[p] : ZLE;
        });
        check();
        break;
      }

      case "gender":
        qq(".js-sel").forEach(sel => { sel.value = dobrze ? "il" : "la"; });
        check();
        break;

      case "dialogue":
        await sleep(1200);
        if (!dobrze) {
          root.querySelector('.js-ch[data-k="1"]').click();   // zła kwestia: liczy się jako pomyłka
          await sleep(200);
        }
        root.querySelector('.js-ch[data-k="0"]').click();
        await sleep(1200);
        break;

      case "minpair":
        root.querySelector(".js-play").click();               // bez odsłuchania odmawia sprawdzenia
        q(`input[value="${dobrze ? ex.heard : "b"}"]`).checked = true;
        check();
        break;
    }

    await sleep(120);
    const klasa = root.className;
    host.remove();
    return { ok, wywolan, klasa };
  }, [type, fixture, poprawnie]);
}

test.describe("werdykt ćwiczenia", () => {
  for (const type of TYPES) {
    test(`${type}: dobra odpowiedź przechodzi, zła nie`, async ({ page }) => {
      await page.goto("/index.html");
      await page.waitForFunction(() => window.Ex && window.Core && window.I18n && window.Verbs);

      const dobra = await odpowiedz(page, type, FIXTURES[type], true);
      expect(dobra.wywolan, `${type}: dobra odpowiedź nie zakończyła ćwiczenia`).toBe(1);
      expect(dobra.ok, `${type}: dobra odpowiedź uznana za złą`).toBe(true);
      expect(dobra.klasa, `${type}: brak zielonego oznaczenia na ekranie`).toContain("exq--ok");

      const zla = await odpowiedz(page, type, FIXTURES[type], false);
      expect(zla.wywolan, `${type}: zła odpowiedź nie zakończyła ćwiczenia`).toBe(1);
      expect(zla.ok, `${type}: zła odpowiedź uznana za dobrą`).toBe(false);
      expect(zla.klasa, `${type}: brak czerwonego oznaczenia na ekranie`).toContain("exq--ko");
    });
  }
});

test("literówka dostaje drugą szansę, ale tylko jedną", async ({ page }) => {
  /* Zachowanie widoczne tylko przy wpisywaniu: odpowiedź „prawie dobra"
     (podobieństwo ≥ 0.85) nie kończy ćwiczenia od razu, żeby uczeń mógł
     poprawić literówkę. Za drugim razem kończy — inaczej dałoby się
     dobierać w nieskończoność. */
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Ex && window.Core);

  const wynik = await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    window.Core.state.settings.strictAccents = false;
    const host = document.createElement("div");
    document.getElementById("main").appendChild(host);
    const built = window.Ex.build({ t: "fill", q: "Completa", a: "sono andato" }, 0, "near");
    host.innerHTML = built.html;
    const root = host.firstElementChild;

    let wywolan = 0, ok = null;
    built.wire(root, v => { wywolan++; ok = v; });

    root.querySelector(".js-in").value = "sono andaro";     // jedna litera obok
    root.querySelector(".js-check").click();
    await sleep(50);
    const poPierwszej = { wywolan, tekst: root.querySelector(".fb").textContent };

    root.querySelector(".js-check").click();                 // ta sama literówka drugi raz
    await sleep(50);
    host.remove();
    return { poPierwszej, wywolan, ok };
  });

  expect(wynik.poPierwszej.wywolan, "pierwsza próba nie ma kończyć ćwiczenia").toBe(0);
  expect(wynik.poPierwszej.tekst.length, "uczeń ma zobaczyć, że był blisko").toBeGreaterThan(0);
  expect(wynik.wywolan, "druga próba ma zamknąć sprawę").toBe(1);
  expect(wynik.ok, "literówka to nadal zła odpowiedź").toBe(false);
});
