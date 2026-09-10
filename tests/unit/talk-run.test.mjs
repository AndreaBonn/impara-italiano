/* ============================================================
   Przebieg rozmowy (assets/js/talk-run.js).

   Scena z rozwidleniem ma cztery rzeczy, które psują się bez śladu na
   ekranie: wybór gałęzi, wynik, powrót na ostatni wybór i liczenie pomyłek.
   Zła gałąź wygląda jak inna scena, zgubiony punkt jak surowsza ocena,
   powrót na złe miejsce jak dialog napisany od nowa. Żadnej z nich nie
   widać bez przejścia całej sceny — a dopóki ta logika siedziała w środku
   funkcji rysującej dymki, jedynym sposobem przejścia był Playwright.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/talk-run.js"];

function Talk() {
  return loadEngine({ files: PLIKI }).sandbox.Talk;
}

/** Scena prosta: rozmówca, replika ucznia, rozmówca. */
function prosta() {
  return {
    id: "c1",
    turns: [
      { sp: "A", it: "Cosa prende?" },
      { sp: "TY", accept: ["un caffè", "vorrei un caffè"], hintIt: "Vorrei un caffè", tr: "Poproszę kawę" },
      { sp: "A", it: "Subito." }
    ]
  };
}

/** Scena z rozwidleniem: dwie repliki, jedna skacze na koniec. */
function zRozwidleniem() {
  return {
    id: "c2",
    turns: [
      { sp: "A", it: "Prende altro?" },
      { sp: "TY", opts: [
        { accept: ["solo un caffè"], hintIt: "Solo un caffè", tr: "Tylko kawa", go: "koniec" },
        { accept: ["un caffè e un dolce"], hintIt: "Un caffè e un dolce", tr: "Kawa i deser" }
      ] },
      { sp: "A", it: "Ecco il dolce." },
      { id: "koniec", sp: "A", it: "Ecco." }
    ]
  };
}

describe("przechodzenie przez scenę", () => {
  test("replika rozmówcy nie jest turą ucznia i nie liczy się do wyniku", () => {
    const run = Talk().create(prosta());
    assert.equal(run.mine(), false);
    assert.equal(run.current().it, "Cosa prende?");

    run.advance();
    assert.equal(run.mine(), true, "druga tura należy do ucznia");
    assert.equal(run.turns, 0, "sama zmiana tury niczego nie liczy");
  });

  test("scena kończy się po ostatniej turze, nie na niej", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("un caffè");
    assert.equal(run.done, false, "została jeszcze replika rozmówcy");
    run.advance();
    assert.equal(run.done, true);
  });

  test("pusta rozmowa jest od razu skończona, zamiast czekać na turę", () => {
    const run = Talk().create({ id: "x", turns: [] });
    assert.equal(run.done, true);
    assert.equal(run.current(), null);
  });
});

describe("odpowiedź ucznia", () => {
  function naTurzeUcznia(conv) {
    const run = Talk().create(conv || prosta());
    run.advance();
    run.beginTurn(0);
    return run;
  }

  test("trafiona odpowiedź daje punkt i przesuwa scenę", () => {
    const run = naTurzeUcznia();
    const w = run.answer("un caffè");

    assert.equal(w.ok, true);
    assert.equal(w.punkt, true);
    assert.equal(w.tekst, "un caffè", "w dymku staje to, co powiedział uczeń");
    assert.equal(w.tr, "Poproszę kawę");
    assert.equal(run.score, 1);
    assert.equal(run.index, 2);
  });

  test("drobna pomyłka nadal przechodzi: to rozmowa, nie dyktando", () => {
    const run = naTurzeUcznia();
    assert.equal(run.answer("un cafe").ok, true, "brak akcentu nie ma zatrzymywać sceny");
  });

  test("zła odpowiedź ZATRZYMUJE scenę zamiast wpisać wzór do dymka", () => {
    const run = naTurzeUcznia();
    const w = run.answer("completamente diverso");

    assert.equal(w.ok, false);
    assert.equal(run.index, 1, "stoimy na tej samej turze");
    assert.equal(run.score, 0);
  });

  test("pomyłka liczy się raz na turę, nie raz na próbę", () => {
    /* Dziesięć podejść do jednego zdania to jedna pomyłka w quaderno
       błędów, a nie dziesięć: inaczej jedno trudne zdanie zalewa talię. */
    const run = naTurzeUcznia();
    assert.equal(run.answer("nie to").pierwszaPomylka, true);
    assert.equal(run.answer("też nie").pierwszaPomylka, false);
    assert.equal(run.answer("dalej nie").pierwszaPomylka, false);
  });

  test("poprawka po pomyłce przechodzi, ale bez punktu", () => {
    const run = naTurzeUcznia();
    run.answer("completamente diverso");
    const w = run.answer("un caffè");

    assert.equal(w.ok, true);
    assert.equal(w.punkt, false, "punkt należy się za odpowiedź od razu");
    assert.equal(run.score, 0);
    assert.equal(run.turns, 1, "tura policzona mimo pomyłki");
  });
});

describe("rozwidlenia", () => {
  function naWyborze() {
    const run = Talk().create(zRozwidleniem());
    run.advance();
    run.beginTurn(7);
    return run;
  }

  test("wygrywa gałąź NAJBLIŻSZA wypowiedzi, nie pierwsza pasująca", () => {
    /* „tylko kawa" i „kawa i deser" są do siebie podobne; pierwsza z brzegu
       wysyłałaby ucznia w scenę, o którą nie prosił. */
    const run = naWyborze();
    const w = run.answer("un caffè e un dolce");

    assert.equal(w.ok, true);
    assert.equal(w.tr, "Kawa i deser");
    assert.equal(run.current().it, "Ecco il dolce.", "druga gałąź idzie o jeden dalej");
  });

  test("gałąź z `go` skacze na turę o tym id, nie o jeden dalej", () => {
    const run = naWyborze();
    run.answer("solo un caffè");
    assert.equal(run.current().it, "Ecco.", "skok po id, nie po numerze");
  });

  test("klik w gałąź nie przechodzi przez próg podobieństwa", () => {
    /* Uczeń wybrał replikę z listy: nie ma czego oceniać. Gdyby klik szedł
       przez porównywanie, wybór mógłby się zablokować na własnej podpowiedzi. */
    const run = naWyborze();
    const w = run.choose(1);

    assert.equal(w.ok, true);
    assert.equal(w.tekst, "Un caffè e un dolce", "do dymka idzie podpowiedź, nie klucz odpowiedzi");
    assert.equal(w.punkt, true);
    assert.equal(run.current().it, "Ecco il dolce.");
  });

  test("nieznany cel skoku kończy scenę zamiast wywracać przebieg", () => {
    const conv = zRozwidleniem();
    conv.turns[1].opts[0].go = "tejturyniema";
    const run = Talk().create(conv);
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");

    assert.equal(run.done, true);
    assert.equal(run.current(), null);
  });
});

describe("pokaż odpowiedź", () => {
  test("wzór wchodzi do transkryptu, scena idzie dalej, punktu nie ma", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    const w = run.reveal();

    assert.equal(w.tekst, "Vorrei un caffè", "wzór z podpowiedzi, nie klucz do porównywania");
    assert.equal(w.pierwszaPomylka, true);
    assert.equal(run.score, 0);
    assert.equal(run.index, 2);
  });

  test("po wcześniejszej pomyłce nie dokłada drugiej", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("zupełnie nie to");
    assert.equal(run.reveal().pierwszaPomylka, false);
  });

  test("przy rozwidleniu bierze pierwszą gałąź: kierunku nie da się zgadnąć", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    const w = run.reveal();

    assert.equal(w.tekst, "Solo un caffè");
    assert.equal(run.current().it, "Ecco.", "pierwsza gałąź ma `go`, więc skacze");
  });

  test("bez podpowiedzi wzorem zostaje przyjmowana wersja włoska", () => {
    const conv = prosta();
    delete conv.turns[1].hintIt;
    const run = Talk().create(conv);
    run.advance(); run.beginTurn(0);

    assert.equal(run.reveal().tekst, "un caffè");
  });
});

describe("powrót na ostatni wybór", () => {
  test("wraca na rozwidlenie ze stanem sprzed wyboru", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance();
    run.beginTurn(7);            // 7 = długość transkryptu w chwili wyboru
    run.answer("solo un caffè");
    assert.equal(run.score, 1);

    const w = run.rewind();
    assert.equal(w.znak, 7, "widok ucina dymki dokładnie tam, gdzie uczeń wybierał");
    assert.equal(run.index, 1, "stoimy znowu na turze z wyborem");
    assert.equal(run.score, 0, "punkt za tamtą gałąź nie zostaje");
    assert.equal(run.turns, 0, "ani policzona tura");
  });

  test("druga gałąź daje własny punkt, nie dokłada do poprzedniego", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");
    run.rewind();
    run.beginTurn(0);
    run.answer("un caffè e un dolce");

    assert.equal(run.score, 1);
    assert.equal(run.turns, 1);
  });

  test("scena bez rozwidlenia nie ma dokąd wracać", () => {
    const run = Talk().create(prosta());
    run.advance(); run.beginTurn(0);
    run.answer("un caffè");

    assert.equal(run.canRewind, false, "przycisk „inna gałąź” nie ma się pokazać");
    assert.equal(run.rewind(), null);
  });

  test("po powrocie punkt wyboru jest zużyty", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("solo un caffè");

    assert.equal(run.canRewind, true);
    run.rewind();
    assert.equal(run.canRewind, false, "wracamy raz na wybór, nie w kółko na ten sam");
  });

  test("pomyłka sprzed powrotu nie ciągnie się za nową gałęzią", () => {
    const run = Talk().create(zRozwidleniem());
    run.advance(); run.beginTurn(0);
    run.answer("zupełnie nie to");
    run.rewind();
    run.beginTurn(0);

    assert.equal(run.answer("solo un caffè").punkt, true,
      "nowe przejście gałęzi zaczyna się bez cudzej pomyłki");
  });
});
