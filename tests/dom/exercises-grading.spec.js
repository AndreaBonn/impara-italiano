/* ============================================================
   Grading an answer: a correct one counts as correct, a wrong one as wrong.

   This is the promise the whole course rests on, and until now not one test
   checked it. exercises.spec.js makes sure onDone is called once — but
   called with `false` on a correct answer is "once" too. The rest of the
   suite builds exercises and never answers
   na nie poprawnie.

   The consequence of such a hole is silent: the student gets "wrong" for a
   correct answer, the lesson score is too low, the card returns to the
   mistake notebook, and nothing falls over in the code. No linter sees it.

   Every type goes through here twice: once with a correct answer, once with
   a wrong one. Two runs in one test, because what is checked is the
   DIFFERENCE between them: a test that only confirms "a wrong answer is
   wrong" would also pass on a builder that always says "wrong".
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* Synthetic exercises, not from the course: a description of the engine's
   contract must not fall over when somebody fixes a sentence in a lesson.

   `gender` deliberately has the same answer in both positions: the options
   are shuffled with a seed, so a test assuming their order would be checking
   the shuffling instead of the grading. */
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
  speak: { t: "speak", it: "Buongiorno a tutti", tr: "good morning" },
  dialogue: { t: "dialogue", lines: [{ sp: "A", it: "Ciao" }, { sp: "TY", choices: ["Ciao", "No"], a: 0 }] },
  minpair: { t: "minpair", a: "nonno", b: "nono", heard: "a" }
};

const TYPES = Object.keys(FIXTURES);

/**
 * Builds an exercise, answers it and returns the engine's verdict.
 *
 * @param {boolean} poprawnie whether to answer correctly
 * @returns {{ok: boolean, wywolan: number, klasa: string}}
 */
async function odpowiedz(page, type, fixture, poprawnie) {
  return page.evaluate(async ([type, ex, dobrze]) => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    window.Audio2.speak = () => {};
    window.Audio2.speakSequence = () => ({ cancel() {} });
    window.Core.state.settings.autoplay = false;
    window.Core.state.settings.strictAccents = false;
    /* Without a microphone "speak" takes the written branch — the only one
       that can be graded without a real voice. */
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
        /* Right = exactly that set. Wrong = a subset: that is the case a naive
           "every ticked one is correct" comparison lets through. */
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
        /* The same tokens in both runs, a different order: in the wrong run
           the sentence has to be reversed, not incomplete. */
        const kolejnosc = dobrze ? ex.tokens : ex.tokens.slice().reverse();
        kolejnosc.forEach(slowo => {
          qq(".js-bank .tok").find(b => b.textContent === slowo).click();
        });
        check();
        break;
      }

      case "match":
        /* The wrong run: one bad pair at the start, then the full set of good
           ones. The exercise only finishes once everything is matched, so
           "wrong" here means "with a mistake on the way", not "unfinished". */
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
          root.querySelector('.js-ch[data-k="1"]').click();   // the wrong line: it counts as a mistake
          await sleep(200);
        }
        root.querySelector('.js-ch[data-k="0"]').click();
        await sleep(1200);
        break;

      case "minpair":
        root.querySelector(".js-play").click();               // without listening it refuses to check
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

test.describe("the exercise verdict", () => {
  for (const type of TYPES) {
    test(`${type}: a correct answer passes, a wrong one does not`, async ({ page }) => {
      await page.goto("/index.html");
      await page.waitForFunction(() => window.Ex && window.Core && window.I18n && window.Verbs);

      const dobra = await odpowiedz(page, type, FIXTURES[type], true);
      expect(dobra.wywolan, `${type}: the correct answer did not finish the exercise`).toBe(1);
      expect(dobra.ok, `${type}: the correct answer was judged wrong`).toBe(true);
      expect(dobra.klasa, `${type}: brak zielonego oznaczenia na ekranie`).toContain("exq--ok");

      const zla = await odpowiedz(page, type, FIXTURES[type], false);
      expect(zla.wywolan, `${type}: the wrong answer did not finish the exercise`).toBe(1);
      expect(zla.ok, `${type}: the wrong answer was judged correct`).toBe(false);
      expect(zla.klasa, `${type}: brak czerwonego oznaczenia na ekranie`).toContain("exq--ko");
    });
  }
});

test("a typo gets a second chance, but only one", async ({ page }) => {
  /* Behaviour visible only when typing: an "almost correct" answer
     (similarity >= 0.85) does not finish the exercise straight away, so the
     student can fix a typo. The second time it does finish — otherwise you
     could keep trying for ever. */
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

    root.querySelector(".js-check").click();                 // the same typo a second time
    await sleep(50);
    host.remove();
    return { poPierwszej, wywolan, ok };
  });

  expect(wynik.poPierwszej.wywolan, "the first attempt must not finish the exercise").toBe(0);
  expect(wynik.poPierwszej.tekst.length, "the student should see that they were close").toBeGreaterThan(0);
  expect(wynik.wywolan, "the second attempt has to close the matter").toBe(1);
  expect(wynik.ok, "a typo is still a wrong answer").toBe(false);
});
