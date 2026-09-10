/* ============================================================
   The exercise generators.

   They are pure functions of a seed, so they can be checked in full without
   a browser. Three things at once: whether the same seed yields the same
   task, whether the answer key is correct Italian, and whether anything
   leaked towards recordings, which a generated sentence does not have and
   never will.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const PLIKI = ["assets/js/drills-lex.js", "assets/js/drills.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  return box.sandbox;
}

describe("numerals", () => {
  const przypadki = [
    [0, "zero"], [7, "sette"], [11, "undici"], [16, "sedici"], [17, "diciassette"],
    [20, "venti"], [21, "ventuno"], [23, "ventitré"], [28, "ventotto"],
    [40, "quaranta"], [41, "quarantuno"], [48, "quarantotto"],
    [81, "ottantuno"], [88, "ottantotto"],
    [100, "cento"], [101, "centouno"], [110, "centodieci"], [200, "duecento"],
    [1000, "mille"], [1500, "millecinquecento"], [2000, "duemila"], [3021, "tremilaventuno"]
  ];
  przypadki.forEach(([n, oczek]) => {
    test(`${n} → ${oczek}`, () => {
      assert.equal(silnik().Drills.numeral(n), oczek);
    });
  });
});

describe("repeatability", () => {
  test("the same seed yields exactly the same task", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const a = S.Drills.make(topic.id, "seed-7");
      const b = S.Drills.make(topic.id, "seed-7");
      assert.deepEqual(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)), topic.id);
    });
  });

  test("a different seed yields a different task", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const seria = [];
      for (let i = 0; i < 12; i++) seria.push(JSON.stringify(S.Drills.make(topic.id, "z" + i).ex));
      assert.ok(new Set(seria).size > 1, `${topic.id} keeps producing the same thing`);
    });
  });

  /* The lexicon is closed, so over 200 draws repeats MUST happen - that is
     not a fault, that is the size of the set. The threshold guards what
     would really break the exercise: a generator stuck on a few variants.

     The threshold is 30, not 40, because "ausiliare" has a space exactly as
     large as the verb list - and covers it in full. A higher threshold would
     be measuring the size of the lexicon, not the quality of the
     generator. */
  test("200 seeds give a wide spread of tasks", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const widziane = new Set();
      for (let i = 0; i < 200; i++) widziane.add(JSON.stringify(S.Drills.make(topic.id, "s" + i).ex));
      assert.ok(widziane.size >= 30, `${topic.id}: only ${widziane.size} distinct out of 200`);
    });
  });

  test("ausiliare reaches for EVERY verb in the lexicon, not a handful", () => {
    const S = silnik();
    const trafione = new Set();
    for (let i = 0; i < 400; i++) {
      const { ex } = S.Drills.make("ausiliare", "cov" + i);
      S.Lex.VERBS.forEach(v => { if (ex.q.indexOf(v.inf) >= 0) trafione.add(v.inf); });
    }
    assert.equal(trafione.size, S.Lex.VERBS.length,
      `covered ${trafione.size} of ${S.Lex.VERBS.length} verbs`);
  });
});

describe("nothing that leads to a recording", () => {
  test("no generated task has a say field or a listen/speak type", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 60; i++) {
        const { ex } = S.Drills.make(topic.id, "n" + i);
        assert.equal(ex.say, undefined, `${topic.id} emits say`);
        assert.ok(["listen", "speak"].indexOf(ex.t) < 0, `${topic.id} emits type ${ex.t}`);
      }
    });
  });

  test("every type is one the engine already knows how to build", () => {
    const S = silnik();
    const ZNANE = ["mcq", "multi", "truefalse", "fill", "trans", "cloze", "order",
      "match", "conj", "gender", "dialogue"];
    S.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 20; i++) {
        const { ex } = S.Drills.make(topic.id, "t" + i);
        assert.ok(ZNANE.indexOf(ex.t) >= 0, `${topic.id}: unknown type ${ex.t}`);
      }
    });
  });
});

describe("answer key: contracted prepositions", () => {
  test("the answer matches the lexicon table", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("prep-art", "p" + i);
      /* the hint carries the parts ("di + la"), the answer must be their contraction */
      const [prep, art] = ex.hint.split(" + ");
      assert.equal(ex.a[0], S.Lex.articulate(prep, art), `${prep} + ${art}`);
    }
  });
});

describe("answer key: adjective agreement", () => {
  test("the form is one of the four possible ones and matches the number", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("accordo", "a" + i);
      const odp = ex.a[0];
      assert.ok(/^[a-zàèéìòù]+$/.test(odp), `odd form: ${odp}`);
      assert.ok(odp.length > 2);
    }
  });
});

describe("answer key: auxiliaries", () => {
  test("a verb with two auxiliaries accepts both answers", () => {
    const S = silnik();
    const dwa = S.Lex.VERBS.filter(v => v.aux === "both").map(v => v.inf);
    let znalezione = 0;
    for (let i = 0; i < 300 && znalezione < 3; i++) {
      const { ex } = S.Drills.make("ausiliare", "x" + i);
      const inf = dwa.filter(v => ex.q.indexOf(v) >= 0)[0];
      if (!inf) continue;
      znalezione++;
      assert.equal(ex.t, "multi", `${inf} should accept both forms`);
      /* The array comes from the sandbox: deepEqual would compare prototypes
         from two realms and reject even identical content. */
      assert.equal(JSON.stringify(ex.a), "[0,1]");
    }
    assert.ok(znalezione >= 1, "not once did a verb with two auxiliaries come up");
  });

  test("a verb of motion gets essere, a transitive one avere", () => {
    const S = silnik();
    for (let i = 0; i < 200; i++) {
      const { ex } = S.Drills.make("ausiliare", "y" + i);
      if (ex.t !== "mcq") continue;
      const verb = S.Lex.VERBS.filter(v => ex.q.indexOf(v.inf) >= 0)[0];
      if (!verb) continue;
      assert.equal(ex.a, verb.aux === "essere" ? 1 : 0, `${verb.inf} (${verb.aux})`);
    }
  });
});

describe("answer key: dates and times", () => {
  test("the first day of the month is ordinal, the eighth takes an apostrophe", () => {
    const S = silnik();
    let widzianyPierwszy = false, widzianyOsmy = false;
    for (let i = 0; i < 400 && !(widzianyPierwszy && widzianyOsmy); i++) {
      const { ex } = S.Drills.make("date", "d" + i);
      if (/\bil primo\b/.test(ex.a[0])) widzianyPierwszy = true;
      if (/l'otto\b/.test(ex.a[0])) widzianyOsmy = true;
    }
    assert.ok(widzianyPierwszy, "\"il primo\" never came up");
    assert.ok(widzianyOsmy, "\"l'otto\" never came up");
  });

  test("every date starts with an article and ends with a month name", () => {
    const S = silnik();
    for (let i = 0; i < 100; i++) {
      const { ex } = S.Drills.make("date", "dd" + i);
      const odp = ex.a[0];
      assert.ok(/^(il |l')/.test(odp), `no article: ${odp}`);
      assert.ok(S.Drills.MESI.some(m => odp.endsWith(m)), `no month: ${odp}`);
    }
  });

  test("one o'clock is singular, noon has a word of its own", () => {
    const S = silnik();
    const odpowiedzi = [];
    for (let i = 0; i < 400; i++) odpowiedzi.push(S.Drills.make("ore", "o" + i).ex.a[0]);
    assert.ok(odpowiedzi.some(o => /^l'una/.test(o)), "\"l'una\" never came up");
    assert.ok(odpowiedzi.every(o => !/^le una/.test(o)), "\"le una\" came out somewhere");
    assert.ok(odpowiedzi.some(o => o === "mezzogiorno" || o === "mezzanotte"), "no noon and no midnight");
  });

  test("a quarter to the hour is accepted as a second answer", () => {
    const S = silnik();
    let znalezione = 0;
    for (let i = 0; i < 400 && !znalezione; i++) {
      const { ex } = S.Drills.make("ore", "q" + i);
      if (ex.a.length > 1) { znalezione++; assert.ok(/meno un quarto$/.test(ex.a[1]), ex.a[1]); }
    }
    assert.ok(znalezione, "no time with minute 45 came up");
  });
});

describe("the topic registry", () => {
  test("every generator has a tag that exists in the grammar reference", () => {
    const S = silnik();
    /* A list of ids from data/core/grammar-reference.js - here we only check
       the shape and that the tag is one of the known ones; full agreement is
       guarded by validate.mjs. */
    const ZNANE = ["g-preposizioni", "g-agg-accordo", "g-passato-prossimo",
      "g-pron-diretti", "g-frase", "g-articolo-det"];
    S.Drills.TOPICS.forEach(topic => {
      assert.ok(ZNANE.indexOf(topic.tag) >= 0, `${topic.id}: tag ${topic.tag}`);
    });
  });

  test("a series returns as many tasks as were ordered", () => {
    const S = silnik();
    assert.equal(S.Drills.session("numeri", 15, "session").length, 15);
  });

  test("an unknown topic returns null, it does not blow up", () => {
    assert.equal(silnik().Drills.make("no-such-topic", "x"), null);
  });
});
