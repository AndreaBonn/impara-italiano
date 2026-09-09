/* ============================================================
   Generatory ćwiczeń.

   Są funkcjami czystymi ziarna, więc sprawdzalne w całości bez
   przeglądarki. Trzy rzeczy naraz: czy to samo ziarno daje to samo
   zadanie, czy klucz odpowiedzi jest poprawny po włosku, i czy nic
   nie wyciekło w stronę nagrań, których dla wygenerowanego zdania
   nie ma i nie będzie.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const PLIKI = ["assets/js/drills-lex.js", "assets/js/drills.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  return box.sandbox;
}

describe("liczebniki", () => {
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

describe("powtarzalność", () => {
  test("to samo ziarno daje dokładnie to samo zadanie", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const a = S.Drills.make(topic.id, "ziarno-7");
      const b = S.Drills.make(topic.id, "ziarno-7");
      assert.deepEqual(JSON.parse(JSON.stringify(a)), JSON.parse(JSON.stringify(b)), topic.id);
    });
  });

  test("inne ziarno daje inne zadanie", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const seria = [];
      for (let i = 0; i < 12; i++) seria.push(JSON.stringify(S.Drills.make(topic.id, "z" + i).ex));
      assert.ok(new Set(seria).size > 1, `${topic.id} produkuje wciąż to samo`);
    });
  });

  /* Leksykon jest zamknięty, więc przy 200 losowaniach powtórki MUSZĄ
     się zdarzyć — to nie jest usterka, tylko rozmiar zbioru. Próg pilnuje
     tego, co naprawdę psułoby ćwiczenie: generatora, który utknął na
     kilku wariantach.

     Próg to 30, nie 40, bo „ausiliare" ma przestrzeń dokładnie tak dużą,
     jak lista czasowników — i pokrywa ją w całości. Wyższy próg mierzyłby
     rozmiar leksykonu, a nie jakość generatora. */
  test("200 ziaren daje szeroki rozrzut zadań", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      const widziane = new Set();
      for (let i = 0; i < 200; i++) widziane.add(JSON.stringify(S.Drills.make(topic.id, "s" + i).ex));
      assert.ok(widziane.size >= 30, `${topic.id}: tylko ${widziane.size} różnych na 200`);
    });
  });

  test("ausiliare sięga po KAŻDY czasownik z leksykonu, nie po garstkę", () => {
    const S = silnik();
    const trafione = new Set();
    for (let i = 0; i < 400; i++) {
      const { ex } = S.Drills.make("ausiliare", "cov" + i);
      S.Lex.VERBS.forEach(v => { if (ex.q.indexOf(v.inf) >= 0) trafione.add(v.inf); });
    }
    assert.equal(trafione.size, S.Lex.VERBS.length,
      `pokryto ${trafione.size} z ${S.Lex.VERBS.length} czasowników`);
  });
});

describe("nic, co prowadzi do nagrania", () => {
  test("żadne wygenerowane zadanie nie ma pola say ani typu listen/speak", () => {
    const S = silnik();
    S.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 60; i++) {
        const { ex } = S.Drills.make(topic.id, "n" + i);
        assert.equal(ex.say, undefined, `${topic.id} emituje say`);
        assert.ok(["listen", "speak"].indexOf(ex.t) < 0, `${topic.id} emituje typ ${ex.t}`);
      }
    });
  });

  test("każdy typ jest jednym z tych, które silnik już umie zbudować", () => {
    const S = silnik();
    const ZNANE = ["mcq", "multi", "truefalse", "fill", "trans", "cloze", "order",
      "match", "conj", "gender", "dialogue"];
    S.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 20; i++) {
        const { ex } = S.Drills.make(topic.id, "t" + i);
        assert.ok(ZNANE.indexOf(ex.t) >= 0, `${topic.id}: nieznany typ ${ex.t}`);
      }
    });
  });
});

describe("klucz odpowiedzi: przyimki ściągnięte", () => {
  test("odpowiedź zgadza się z tabelą leksykonu", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("prep-art", "p" + i);
      /* hint niesie składniki („di + la"), odpowiedź ma być ich ściągnięciem */
      const [prep, art] = ex.hint.split(" + ");
      assert.equal(ex.a[0], S.Lex.articulate(prep, art), `${prep} + ${art}`);
    }
  });
});

describe("klucz odpowiedzi: zgodność przymiotnika", () => {
  test("forma jest jedną z czterech możliwych i pasuje do liczby", () => {
    const S = silnik();
    for (let i = 0; i < 80; i++) {
      const { ex } = S.Drills.make("accordo", "a" + i);
      const odp = ex.a[0];
      assert.ok(/^[a-zàèéìòù]+$/.test(odp), `dziwna forma: ${odp}`);
      assert.ok(odp.length > 2);
    }
  });
});

describe("klucz odpowiedzi: posiłkowe", () => {
  test("czasownik o dwóch posiłkowych przyjmuje obie odpowiedzi", () => {
    const S = silnik();
    const dwa = S.Lex.VERBS.filter(v => v.aux === "both").map(v => v.inf);
    let znalezione = 0;
    for (let i = 0; i < 300 && znalezione < 3; i++) {
      const { ex } = S.Drills.make("ausiliare", "x" + i);
      const inf = dwa.filter(v => ex.q.indexOf(v) >= 0)[0];
      if (!inf) continue;
      znalezione++;
      assert.equal(ex.t, "multi", `${inf} powinien przyjmować obie formy`);
      /* Tablica pochodzi z piaskownicy: deepEqual porównałby prototypy
         z dwóch realm i odrzucił nawet identyczną treść. */
      assert.equal(JSON.stringify(ex.a), "[0,1]");
    }
    assert.ok(znalezione >= 1, "nie trafiono ani razu w czasownik o dwóch posiłkowych");
  });

  test("czasownik ruchu dostaje essere, przechodni avere", () => {
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

describe("klucz odpowiedzi: daty i godziny", () => {
  test("pierwszy dzień miesiąca jest porządkowy, ósmy bierze apostrof", () => {
    const S = silnik();
    let widzianyPierwszy = false, widzianyOsmy = false;
    for (let i = 0; i < 400 && !(widzianyPierwszy && widzianyOsmy); i++) {
      const { ex } = S.Drills.make("date", "d" + i);
      if (/\bil primo\b/.test(ex.a[0])) widzianyPierwszy = true;
      if (/l'otto\b/.test(ex.a[0])) widzianyOsmy = true;
    }
    assert.ok(widzianyPierwszy, "nie trafił się „il primo”");
    assert.ok(widzianyOsmy, "nie trafił się „l'otto”");
  });

  test("każda data zaczyna się od rodzajnika i kończy nazwą miesiąca", () => {
    const S = silnik();
    for (let i = 0; i < 100; i++) {
      const { ex } = S.Drills.make("date", "dd" + i);
      const odp = ex.a[0];
      assert.ok(/^(il |l')/.test(odp), `brak rodzajnika: ${odp}`);
      assert.ok(S.Drills.MESI.some(m => odp.endsWith(m)), `brak miesiąca: ${odp}`);
    }
  });

  test("godzina pierwsza jest w liczbie pojedynczej, południe ma własne słowo", () => {
    const S = silnik();
    const odpowiedzi = [];
    for (let i = 0; i < 400; i++) odpowiedzi.push(S.Drills.make("ore", "o" + i).ex.a[0]);
    assert.ok(odpowiedzi.some(o => /^l'una/.test(o)), "nie trafiła się „l'una”");
    assert.ok(odpowiedzi.every(o => !/^le una/.test(o)), "gdzieś wyszło „le una”");
    assert.ok(odpowiedzi.some(o => o === "mezzogiorno" || o === "mezzanotte"), "brak południa i północy");
  });

  test("kwadrans przed pełną godziną jest przyjmowany jako druga odpowiedź", () => {
    const S = silnik();
    let znalezione = 0;
    for (let i = 0; i < 400 && !znalezione; i++) {
      const { ex } = S.Drills.make("ore", "q" + i);
      if (ex.a.length > 1) { znalezione++; assert.ok(/meno un quarto$/.test(ex.a[1]), ex.a[1]); }
    }
    assert.ok(znalezione, "nie trafiła się godzina z minutą 45");
  });
});

describe("rejestr zagadnień", () => {
  test("każdy generator ma tag istniejący w haśle gramatycznym", () => {
    const S = silnik();
    /* Lista id z data/core/grammar-reference.js — tu sprawdzamy tylko kształt
       i to, że tag jest jednym ze znanych; pełną zgodność pilnuje validate.mjs. */
    const ZNANE = ["g-preposizioni", "g-agg-accordo", "g-passato-prossimo",
      "g-pron-diretti", "g-frase", "g-articolo-det"];
    S.Drills.TOPICS.forEach(topic => {
      assert.ok(ZNANE.indexOf(topic.tag) >= 0, `${topic.id}: tag ${topic.tag}`);
    });
  });

  test("seria zwraca tyle zadań, ile zamówiono", () => {
    const S = silnik();
    assert.equal(S.Drills.session("numeri", 15, "sesja").length, 15);
  });

  test("nieznane zagadnienie zwraca null, nie wywraca się", () => {
    assert.equal(silnik().Drills.make("nie-ma-takiego", "x"), null);
  });
});
