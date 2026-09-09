/* ============================================================
   Kontrakt ćwiczeń: onDone(ok) woła się DOKŁADNIE RAZ.

   Na tym opiera się licznik postępu lekcji (views.js:316) i na tym
   oprze się przechwytywanie błędów w F1 (T019), które owinie wire().
   Podwójne wywołanie zawyża postęp po cichu — nic się nie wywraca,
   tylko liczby przestają być prawdziwe.

   Ćwiczenia są tu syntetyczne, nie brane z kursu: test ma opisywać
   kontrakt silnika, a nie przewracać się, gdy ktoś poprawi zdanie
   w lekcji. Osobny test niżej sprawdza, że każdy typ obecny w
   prawdziwych danych daje się zbudować.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* Po jednym na builder. `truefalse` jedzie przez buildMcq, ale ma
   własną ścieżkę w Ex.build (dokłada opcje), więc siedzi osobno. */
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
  gender: { t: "gender", items: [{ it: "pane", a: "il" }, { it: "acqua", a: "l'" }], opts: ["il", "la", "l'"] },
  listen: { t: "listen", it: "Buongiorno a tutti", alt: [] },
  speak: { t: "speak", it: "Buongiorno a tutti", tr: "dzień dobry" },
  dialogue: { t: "dialogue", lines: [{ sp: "A", it: "Ciao" }, { sp: "TY", choices: ["Ciao", "No"], a: 0 }] },
  minpair: { t: "minpair", a: "nonno", b: "nono", heard: "a" }
};

const TYPES = Object.keys(FIXTURES);

/**
 * Doprowadza ćwiczenie do końca w kontekście strony i zwraca,
 * ile razy zawołano onDone. Każdy typ ma inną drogę do mety:
 * match kończy się ostatnią parą i nie ma przycisku sprawdzania,
 * dialogue przesuwa się na setTimeout, a order odmawia na pustym polu.
 */
async function runExercise(page, type, fixture) {
  return page.evaluate(async ([type, ex]) => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    /* Dźwięk nie ma tu nic do zbadania, a próba odtwarzania w headless
       zaśmieca konsolę i spowalnia. Autoplay wyłączamy z tego samego powodu. */
    window.Audio2.speak = () => {};
    window.Audio2.speakSequence = () => ({ cancel() {} });
    window.Core.state.settings.autoplay = false;
    /* Bez mikrofonu ćwiczenie „speak" żąda nagrania przed sprawdzeniem
       i nigdy nie kończy — w headless wybieramy gałąź pisaną. */
    window.Audio2.sttSupported = false;

    const host = document.createElement("div");
    host.id = "probe-" + type;
    document.getElementById("main").appendChild(host);

    const built = window.Ex.build(ex, 0, "seed-" + type);
    host.innerHTML = built.html;
    const root = host.firstElementChild;

    let calls = 0;
    built.wire(root, () => { calls++; });

    const q = s => root.querySelector(s);
    const check = () => { const b = q(".js-check"); if (b) b.click(); };

    switch (type) {
      case "mcq":
      case "truefalse": {
        const first = q('input[type="radio"]');
        first.checked = true;
        check();
        break;
      }
      case "multi": {
        const boxes = root.querySelectorAll('input[type="checkbox"]');
        boxes[0].checked = true;
        check();
        break;
      }
      case "fill":
      case "trans":
        q(".js-in").value = "casa";        // dokładna odpowiedź: bez „prawie" na pierwszej próbie
        check();
        break;
      case "cloze":
        q(".js-gap").value = "sono andato";
        check();
        break;
      case "order":
        q(".js-bank .tok").click();        // puste pole daje toast, nie zakończenie
        check();
        break;
      case "match":
        for (let i = 0; i < ex.pairs.length; i++) {
          root.querySelector(`[data-side="l"][data-i="${i}"]`).click();
          root.querySelector(`[data-side="r"][data-i="${i}"]`).click();
        }
        break;
      case "conj":
      case "gender":
      case "listen":
      case "speak":
        check();                            // puste pola liczą się jako zła odpowiedź, ale kończą
        break;
      case "minpair": {
        /* Bez odsłuchania ćwiczenie odmawia sprawdzenia: to nie jest
           przeoczenie, tylko zabezpieczenie przed rzutem monetą. */
        root.querySelector(".js-play").click();
        root.querySelector('input[type="radio"]').checked = true;
        check();
        break;
      }
      case "dialogue":
        await sleep(1200);                  // pierwsza kwestia leci na timerze
        root.querySelector('.js-ch[data-k="0"]').click();
        await sleep(1200);
        break;
    }

    await sleep(80);
    const afterFirst = calls;

    /* Druga próba: przycisk jest wyłączony, a dopasowane pary wracają
       wcześnie. Kliknięcie jeszcze raz nie ma prawa dołożyć wywołania. */
    check();
    root.querySelectorAll(".match-btn, .js-ch, .opt").forEach(b => b.click && b.click());
    await sleep(80);

    host.remove();
    return { afterFirst, afterSecond: calls };
  }, [type, fixture]);
}

test.describe("kontrakt onDone", () => {
  for (const type of TYPES) {
    test(`${type}: onDone woła się raz i tylko raz`, async ({ page }) => {
      await page.goto("/index.html");
      await page.waitForFunction(() => window.Ex && window.Core && window.I18n);

      const r = await runExercise(page, type, FIXTURES[type]);
      expect(r.afterFirst, `${type}: po ukończeniu`).toBe(1);
      expect(r.afterSecond, `${type}: po ponownym kliknięciu`).toBe(1);
    });
  }
});

test("każdy typ obecny w danych kursu daje się zbudować", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  /* Poziom A1 jest wczytany na starcie; reszta dociąga się leniwie,
     więc pytamy o to, co naprawdę jest w pamięci. */
  const result = await page.evaluate(() => {
    const seen = {}, broken = [];
    window.Core.registry.levels.forEach(lv => (lv.units || []).forEach(u => {
      const lekcje = (u.lessons || []).concat(u.test ? [u.test] : []);
      lekcje.forEach(l => (l.exercises || []).forEach((ex, i) => {
        seen[ex.t] = (seen[ex.t] || 0) + 1;
        try {
          const b = window.Ex.build(ex, i, l.id);
          if (!b || typeof b.html !== "string" || typeof b.wire !== "function") {
            broken.push(`${l.id}#${i} (${ex.t}): zły kształt`);
          }
        } catch (e) {
          broken.push(`${l.id}#${i} (${ex.t}): ${e.message}`);
        }
      }));
    }));
    return { seen, broken };
  });

  expect(result.broken, result.broken.join(" | ")).toEqual([]);
  expect(Object.keys(result.seen).length, "typy spotkane w danych").toBeGreaterThan(0);
});
