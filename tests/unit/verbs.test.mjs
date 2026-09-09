/* ============================================================
   Silnik odmiany (assets/js/verbs.js).

   Do tej pory miał jeden plik testów i dotyczył on WYŁĄCZNIE
   dziedziczenia po przedrostkach (verbs-prefix.test.mjs). Sama odmiana
   — czternaście czasów, cztery wzorce regularne, zmiany ortograficzne,
   zwrotne, ausiliare, uzgodnienie imiesłowu — nie miała żadnego.

   Konsekwencja jest dotkliwsza niż zwykły błąd w kodzie: silnik nie
   tylko rysuje tabelę w „Odmianie czasowników", ale WYZNACZA POPRAWNĄ
   ODPOWIEDŹ w ćwiczeniach typu `conj`. Zła forma nie wygląda na usterkę:
   wygląda na to, że uczeń się pomylił.

   Formy są tu wpisane wprost, jako włoszczyzna, a nie policzone drugi
   raz tym samym kodem. Test, który liczy oczekiwanie tą samą regułą co
   implementacja, potwierdza regułę zamiast ją sprawdzać.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const V = loadEngine({ files: ["assets/js/verbs.js"] }).sandbox.Verbs;

/** Odmiana jako zwykła tablica z tego realmu — vm ma własny Array. */
function formy(inf, tense, gender) {
  const out = V.conjugate(inf, tense, gender);
  return out === null ? null : Array.from(out);
}

describe("wzorce regularne", () => {
  test("-are przez wszystkie czasy proste", () => {
    assert.deepEqual(formy("parlare", "pres"), ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"]);
    assert.deepEqual(formy("parlare", "imperf"), ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"]);
    assert.deepEqual(formy("parlare", "remoto"), ["parlai", "parlasti", "parlò", "parlammo", "parlaste", "parlarono"]);
    assert.deepEqual(formy("parlare", "futuro"), ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"]);
    assert.deepEqual(formy("parlare", "condizionale"), ["parlerei", "parleresti", "parlerebbe", "parleremmo", "parlereste", "parlerebbero"]);
    assert.deepEqual(formy("parlare", "cong"), ["parli", "parli", "parli", "parliamo", "parliate", "parlino"]);
    assert.deepEqual(formy("parlare", "congImp"), ["parlassi", "parlassi", "parlasse", "parlassimo", "parlaste", "parlassero"]);
  });

  test("-ere i -ire różnią się w trzeciej osobie i w drugiej mnogiej", () => {
    assert.deepEqual(formy("credere", "pres"), ["credo", "credi", "crede", "crediamo", "credete", "credono"]);
    assert.deepEqual(formy("dormire", "pres"), ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"]);
  });

  test("wzorzec -isc- wchodzi w liczbie pojedynczej i w trzeciej mnogiej, ale nie w noi/voi", () => {
    assert.deepEqual(formy("capire", "pres"), ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"]);
    assert.deepEqual(formy("finire", "cong"), ["finisca", "finisca", "finisca", "finiamo", "finiate", "finiscano"]);
  });

  test("czasownik -ire spoza listy -isc- odmienia się bez tej wstawki", () => {
    assert.equal(formy("dormire", "pres")[0], "dormo", "„dormisco” byłoby błędem");
    assert.equal(V.groupOf("dormire"), "ire");
    assert.equal(V.groupOf("capire"), "isc");
  });
});

describe("zmiany ortograficzne", () => {
  /* Bez nich kurs uczyłby form, które po włosku brzmią inaczej niż
     wyglądają: „cerci" czyta się „czerczi", a chodzi o twarde „k". */
  test("-care i -gare dokładają h przed i oraz e", () => {
    assert.deepEqual(formy("cercare", "pres"), ["cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano"]);
    assert.deepEqual(formy("pagare", "pres"), ["pago", "paghi", "paga", "paghiamo", "pagate", "pagano"]);
    assert.equal(formy("cercare", "futuro")[0], "cercherò");
    assert.equal(formy("pagare", "condizionale")[0], "pagherei");
  });

  test("-ciare i -giare gubią i przed końcówką na i albo e", () => {
    assert.equal(formy("cominciare", "pres")[1], "cominci", "nie „comincii”");
    assert.equal(formy("mangiare", "pres")[1], "mangi", "nie „mangii”");
    assert.equal(formy("mangiare", "futuro")[0], "mangerò", "nie „mangierò”");
  });

  test("-iare z niemym i też nie podwaja go w drugiej osobie", () => {
    assert.equal(formy("studiare", "pres")[1], "studi", "nie „studii”");
  });
});

describe("czasowniki nieregularne", () => {
  test("cztery najczęstsze mają swoje formy, nie wyprowadzone regułą", () => {
    assert.deepEqual(formy("essere", "pres"), ["sono", "sei", "è", "siamo", "siete", "sono"]);
    assert.deepEqual(formy("avere", "pres"), ["ho", "hai", "ha", "abbiamo", "avete", "hanno"]);
    assert.deepEqual(formy("andare", "pres"), ["vado", "vai", "va", "andiamo", "andate", "vanno"]);
    assert.deepEqual(formy("fare", "pres"), ["faccio", "fai", "fa", "facciamo", "fate", "fanno"]);
  });

  test("temat czasu przyszłego bywa własny, nie z bezokolicznika", () => {
    assert.equal(formy("essere", "futuro")[0], "sarò");
    assert.equal(formy("avere", "futuro")[0], "avrò");
    assert.equal(formy("andare", "futuro")[0], "andrò");
    assert.equal(formy("fare", "futuro")[0], "farò");
  });

  test("czasowniki na -urre chodzą po wzorcu -ducere, nie -ere", () => {
    assert.deepEqual(formy("tradurre", "pres"), ["traduco", "traduci", "traduce", "traduciamo", "traducete", "traducono"]);
    assert.equal(formy("tradurre", "futuro")[0], "tradurrò");
    assert.equal(V.gerund("tradurre"), "traducendo");
  });

  test("imiesłów nieregularny wygrywa z regularnym", () => {
    assert.equal(V.participle("fare"), "fatto");
    assert.equal(V.participle("parlare"), "parlato", "regularny zostaje regularny");
  });
});

describe("czasy złożone", () => {
  test("avere dla przechodnich, essere dla ruchu i zmiany stanu", () => {
    assert.equal(V.auxOf("mangiare"), "avere");
    assert.equal(V.auxOf("andare"), "essere");
    assert.equal(V.auxOf("svegliarsi"), "essere", "zwrotne zawsze z essere");
  });

  test("imiesłów uzgadnia się z podmiotem tylko przy essere", () => {
    assert.deepEqual(formy("andare", "passPross"),
      ["sono andato", "sei andato", "è andato", "siamo andati", "siete andati", "sono andati"]);
    assert.deepEqual(formy("mangiare", "passPross"),
      ["ho mangiato", "hai mangiato", "ha mangiato", "abbiamo mangiato", "avete mangiato", "hanno mangiato"]);
  });

  test("rodzaj żeński zmienia końcówkę imiesłowu, ale nie posiłkowego", () => {
    assert.deepEqual(formy("andare", "passPross", "f"),
      ["sono andata", "sei andata", "è andata", "siamo andate", "siete andate", "sono andate"]);
    assert.equal(formy("mangiare", "passPross", "f")[0], "ho mangiato", "przy avere nic się nie uzgadnia");
  });

  test("każdy czas złożony bierze swój czas posiłkowego", () => {
    assert.equal(formy("andare", "trapPross")[0], "ero andato");
    assert.equal(formy("andare", "futAnt")[0], "sarò andato");
    assert.equal(formy("andare", "condPass")[0], "sarei andato");
    assert.equal(formy("andare", "congPass")[0], "sia andato");
    assert.equal(formy("andare", "congTrap")[0], "fossi andato");
  });
});

describe("czasowniki zwrotne", () => {
  test("zaimek stoi przed formą w czasach oznajmujących", () => {
    assert.deepEqual(formy("svegliarsi", "pres"),
      ["mi sveglio", "ti svegli", "si sveglia", "ci svegliamo", "vi svegliate", "si svegliano"]);
  });

  test("w czasie złożonym zaimek stoi przed posiłkowym, nie przed imiesłowem", () => {
    assert.equal(formy("svegliarsi", "passPross")[0], "mi sono svegliato");
    assert.equal(formy("svegliarsi", "passPross", "f")[3], "ci siamo svegliate");
  });

  /* Reguła jest wypisana w samym kursie, w haśle „ref:g-imperativo”:
     „Zaimki doklejają się do form tu/noi/voi (prendilo, andiamoci,
     ascoltatemi), ale stoją przed formą Lei (lo prenda, mi ascolti)”.
     Silnik stawiał zaimek przed formą we wszystkich osobach, więc kurs
     uczył czegoś, czemu sam zaprzeczał trzy ekrany dalej. */
  test("w trybie rozkazującym zaimek dokleja się do form tu, noi i voi", () => {
    assert.deepEqual(formy("alzarsi", "imper"),
      [null, "alzati", "si alzi", "alziamoci", "alzatevi", "si alzino"]);
  });

  test("to samo w -ere i -ire, bo to reguła składni, nie wzorca odmiany", () => {
    assert.deepEqual(formy("mettersi", "imper"),
      [null, "mettiti", "si metta", "mettiamoci", "mettetevi", "si mettano"]);
    assert.deepEqual(formy("vestirsi", "imper"),
      [null, "vestiti", "si vesta", "vestiamoci", "vestitevi", "si vestano"]);
  });

  test("krótka forma tu gubi apostrof i podwaja spółgłoskę zaimka", () => {
    assert.equal(formy("farsi", "imper")[1], "fatti", "nie „fa' ti” ani „fa'ti”");
  });

  test("forma grzecznościowa zostaje przy zaimku z przodu", () => {
    const imper = formy("alzarsi", "imper");
    assert.equal(imper[2], "si alzi", "Lei");
    assert.equal(imper[5], "si alzino", "Loro");
  });
});

describe("tryb rozkazujący bez zwrotności", () => {
  test("pierwsza osoba nie istnieje i jest nullem, nie pustym napisem", () => {
    assert.equal(formy("parlare", "imper")[0], null);
    assert.equal(formy("essere", "imper")[0], null);
  });

  test("regularne formy zgadzają się z tabelą z kursu", () => {
    assert.deepEqual(formy("parlare", "imper"), [null, "parla", "parli", "parliamo", "parlate", "parlino"]);
    assert.deepEqual(formy("credere", "imper"), [null, "credi", "creda", "crediamo", "credete", "credano"]);
    assert.deepEqual(formy("dormire", "imper"), [null, "dormi", "dorma", "dormiamo", "dormite", "dormano"]);
  });

  test("nieregularne krótkie formy tu zostają krótkie", () => {
    assert.equal(formy("andare", "imper")[1], "va'");
    assert.equal(formy("fare", "imper")[1], "fa'");
  });
});

describe("pełna tabela i metryczka", () => {
  test("opisuje czasownik tym, czego nie widać z samej formy", () => {
    const meta = V.fullTable("svegliarsi")._meta;
    assert.equal(meta.infinito, "svegliarsi");
    assert.equal(meta.gruppo, "-are");
    assert.equal(meta.ausiliare, "essere");
    assert.equal(meta.participio, "svegliato");
    assert.equal(meta.gerundio, "svegliando");
    assert.equal(meta.riflessivo, true);
    assert.equal(meta.irregolare, false, "zwrotny to nie to samo co nieregularny");
  });

  test("nieregularność jest zaznaczona tam, gdzie jest", () => {
    assert.equal(V.fullTable("andare")._meta.irregolare, true);
    assert.equal(V.fullTable("parlare")._meta.irregolare, false);
  });

  test("tabela ma wszystkie czasy z listy TENSES", () => {
    const tabela = V.fullTable("parlare");
    Array.from(V.TENSES).forEach(tn => {
      assert.ok(Array.isArray(tabela[tn.key]), `brak czasu ${tn.key}`);
      assert.equal(tabela[tn.key].length, 6, `czas ${tn.key} nie ma sześciu pozycji`);
    });
  });
});

describe("wejścia spoza kontraktu", () => {
  test("nieznany czas daje null, a nie wymyśloną tabelę", () => {
    assert.equal(V.conjugate("parlare", "nieMaTakiegoCzasu"), null);
  });

  /* Silnik NIE sprawdza, czy dostał czasownik: robi to widok, regexem na
     końcówkę bezokolicznika (views-conjugator.js). Test pinuje podział
     odpowiedzialności, żeby nikt nie dołożył drugiej walidacji tutaj i
     nie zaczął zwracać null tam, gdzie ćwiczenia oczekują form. */
  test("wygląd bezokolicznika nie jest tu sprawdzany", () => {
    assert.deepEqual(formy("xyzare", "pres"), ["xyzo", "xyzi", "xyza", "xyziamo", "xyzate", "xyzano"]);
  });
});
