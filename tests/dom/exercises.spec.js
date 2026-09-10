/* ============================================================
   The exercise contract: onDone(ok) is called EXACTLY ONCE.

   The lesson progress counter rests on it (views.js:316) and so will the
   mistake capture in F1 (T019), which wraps wire(). A double call inflates
   the progress silently — nothing falls over, the numbers simply stop being
   true.

   The exercises here are synthetic rather than taken from the course: the
   test is meant to describe the engine's contract, not to fall over when
   somebody fixes a sentence in a lesson. A separate test below checks that
   every type present in the real data can be built.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* One per builder. `truefalse` runs through buildMcq but has a path of its
   own in Ex.build (it adds the options), so it sits separately. */
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
  speak: { t: "speak", it: "Buongiorno a tutti", tr: "good morning" },
  dialogue: { t: "dialogue", lines: [{ sp: "A", it: "Ciao" }, { sp: "TY", choices: ["Ciao", "No"], a: 0 }] },
  minpair: { t: "minpair", a: "nonno", b: "nono", heard: "a" }
};

const TYPES = Object.keys(FIXTURES);

/**
 * Drives an exercise to the end in the page context and returns how many
 * times onDone was called. Every type has a different road to the finish:
 * match ends with the last pair and has no check button, dialogue advances
 * on a setTimeout, and order refuses on an empty field.
 */
async function runExercise(page, type, fixture) {
  return page.evaluate(async ([type, ex]) => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    /* There is nothing to examine about the audio here, and attempting
       playback in headless litters the console and slows things down. We
       switch autoplay off for the same reason. */
    window.Audio2.speak = () => {};
    window.Audio2.speakSequence = () => ({ cancel() {} });
    window.Core.state.settings.autoplay = false;
    /* Without a microphone a "speak" exercise demands a recording before
       checking and never finishes — in headless we take the written branch. */
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
        q(".js-in").value = "casa";        // the exact answer: no "almost" on the first attempt
        check();
        break;
      case "cloze":
        q(".js-gap").value = "sono andato";
        check();
        break;
      case "order":
        q(".js-bank .tok").click();        // an empty field gives a toast, not a finish
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
        check();                            // empty fields count as a wrong answer, but they do finish
        break;
      case "minpair": {
        /* Without listening the exercise refuses to check: that is not an
           oversight but a guard against a coin toss. */
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

    /* A second attempt: the button is disabled and matched pairs return
       early. Clicking again has no right to add a call. */
    check();
    root.querySelectorAll(".match-btn, .js-ch, .opt").forEach(b => b.click && b.click());
    await sleep(80);

    host.remove();
    return { afterFirst, afterSecond: calls };
  }, [type, fixture]);
}

test.describe("kontrakt onDone", () => {
  for (const type of TYPES) {
    test(`${type}: onDone is called once and only once`, async ({ page }) => {
      await page.goto("/index.html");
      await page.waitForFunction(() => window.Ex && window.Core && window.I18n);

      const r = await runExercise(page, type, FIXTURES[type]);
      expect(r.afterFirst, `${type}: after finishing`).toBe(1);
      expect(r.afterSecond, `${type}: after clicking again`).toBe(1);
    });
  }
});

test("every type present in the course data can be built", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  /* The A1 level is loaded at startup; the rest is pulled lazily, so we ask
     about what is really in memory. */
  const result = await page.evaluate(() => {
    const seen = {}, broken = [];
    window.Core.registry.levels.forEach(lv => (lv.units || []).forEach(u => {
      const lekcje = (u.lessons || []).concat(u.test ? [u.test] : []);
      lekcje.forEach(l => (l.exercises || []).forEach((ex, i) => {
        seen[ex.t] = (seen[ex.t] || 0) + 1;
        try {
          const b = window.Ex.build(ex, i, l.id);
          if (!b || typeof b.html !== "string" || typeof b.wire !== "function") {
            broken.push(`${l.id}#${i} (${ex.t}): wrong shape`);
          } else if (!/class="exq"[^>]*data-idx=/.test(b.html)) {
            /* An unknown type ALSO returns the correct {html, wire} shape — the
               dispatcher does not bring a lesson down over one exercise.
               Without this check a missing family <script>
               (exercises-choice/text/voice) passes this test, because the
               shape matches, while "unknown type" stands on the screen. */
            broken.push(`${l.id}#${i} (${ex.t}): dyspozytor nie zna tego typu`);
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
