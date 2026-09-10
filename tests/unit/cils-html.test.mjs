/* ============================================================
   cils-html.js — siatka odpowiedzi symulacji egzaminu.

   To są funkcje dane -> napis, więc sprawdzają się tutaj, a nie
   Playwrightem: żeby zobaczyć sekcję słuchania w przeglądarce, trzeba
   zacząć podejście i mieć zegar na karku.

   Co dokładnie jest tu pilnowane — bo nie chodzi o to, że napis powstał:

   - `name` radia jest WSPÓLNY dla jednego pytania i RÓŻNY dla dwóch.
     Wspólny dla dwóch pytań znaczy, że odpowiedź na drugie wymazuje
     pierwszą, a uczeń widzi to dopiero na wyniku;
   - `data-p` i `data-i` zgadzają się z siatką, po której cils-run.js
     zapisuje odpowiedzi. Przestawione o jeden = wszystkie odpowiedzi
     zapisane pod nie swoim pytaniem;
   - liczba luk w cloze zgadza się z liczbą zadań, a numery idą od 1;
   - sekcja z brakującym mikrofonem nie pokazuje przycisku nagrywania
     (bo kliknięcie w niego kończyłoby się wyjątkiem);
   - zegar nie ma treści w regionie live, dopóki timer jej nie wpisze.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS } from "./_harness.mjs";

const PLIKI = [
  ...CORE, ...VERBS,
  "data/core/cils.js",
  "assets/js/cils.js",
  "assets/js/writing.js",
  "assets/js/cils-html.js"
];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

function html() { return silnik().sandbox.CilsHtml; }

/** Ile razy wzorzec wystąpił w napisie. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/* Dane sekcji budowane tutaj, nie brane z kursu: test ma się czytać bez
   otwierania data/core/cils.js, a kształt i tak jest kontraktem. */
const LETTURA = {
  id: "lettura", minuti: 30,
  prove: [{
    consegna: "Leggi il testo e rispondi.",
    titolo: "Vacanze",
    t: "vf",
    testo: ["Marco va al mare.", "Parte domenica."],
    items: [{ q: "Marco va al mare", a: 0 }, { q: "Marco parte lunedì", a: 1 }]
  }]
};

const ASCOLTO = {
  id: "ascolto", minuti: 30,
  prove: [{
    consegna: "Ascolta e scegli.",
    t: "mcq",
    brani: [[{ it: "Ciao" }], [{ it: "Buongiorno" }]],
    items: [{ q: "Che cosa dice?", opts: ["Ciao", "Addio"], a: 0 }]
  }]
};

const CLOZE = {
  id: "lettura", minuti: 20,
  prove: [{
    consegna: "Completa il testo.",
    t: "cloze",
    testo: ["Vado", "scuola", "piedi."],
    items: [{ opts: ["a", "in"], a: 1 }, { opts: ["a", "con"], a: 0 }]
  }]
};

const SCRITTA = {
  id: "scritta", minuti: 60,
  consegna: "Scrivi una mail.",
  tracce: [{ it: "Una mail al direttore" }, { it: "Un messaggio a un amico" }]
};

const ORALE = {
  id: "orale", minuti: 15,
  presentazione: ["Come ti chiami?"],
  argomenti: ["Il lavoro", "La famiglia"],
  controllo: ["Ho parlato due minuti", "Ho usato il passato"]
};

describe("lista symulacji", () => {
  const SYMULACJE = [{ id: "sim-1", titoloIt: "Simulazione 1" }, { id: "sim-2", titoloIt: "Simulazione 2" }];

  test("po jednym wierszu na symulację, z id w przycisku", () => {
    const out = html().lista(SYMULACJE);
    assert.equal(ile(out, "list-row"), 2 * 2, "wiersz i jego __main");
    assert.equal(ile(out, "js-start"), 2);
    assert.match(out, /data-id="sim-1"/);
    assert.match(out, /data-id="sim-2"/);
    assert.ok(out.includes("Simulazione 2"));
  });

  test("granica symulatora stoi PRZED listą, nie w podsumowaniu", () => {
    /* Dwie sprawności z czterech. Kto dowiaduje się o tym na końcu, przeszedł
       całą sesję z fałszywym oczekiwaniem — dlatego ostrzeżenie ma wyjść
       przed pierwszym przyciskiem startu, a nie gdziekolwiek na stronie.

       Szukamy „cils.limit</div>", nie „cils.limit": sam podciąg siedzi też
       w „cils.limitLabel", więc asercja na nim przechodziła nawet po
       wycięciu całej treści ostrzeżenia. Wyszło z mutacji. */
    const out = html().lista(SYMULACJE);
    const granica = out.indexOf("cils.limit</div>");
    assert.ok(granica >= 0, `treść ostrzeżenia ma być w wyniku: ${out.slice(0, 120)}`);
    assert.ok(granica < out.indexOf("js-start"),
      "ostrzeżenie o granicy ma poprzedzać przyciski startu");
    assert.ok(out.includes("cils.thresholdSource"), "źródło progu zadeklarowane");
  });

  test("brak symulacji nie zostawia wiersza-widma", () => {
    const out = html().lista([]);
    assert.equal(ile(out, "js-start"), 0);
    assert.ok(out.includes("cils.limit"), "preambuł zostaje");
  });
});

describe("barra z zegarem", () => {
  test("krok i liczba sekcji idą do napisu", () => {
    const out = html().barra(2, 4);
    assert.match(out, /cils\.stepOf\(i=2,n=4\)/);
  });

  test("zegar jest ukryty przed czytnikiem, a region live startuje PUSTY", () => {
    const out = html().barra(1, 4);
    assert.match(out, /class="cils-clock js-clock" aria-hidden="true"/);
    /* Treść wpisuje timer, i tylko trzy razy na sekcję. Gdyby startowała tu,
       czytnik ekranu odczytywałby ją przy każdym przerysowaniu. */
    assert.match(out, /js-clock-live"[^>]*><\/span>/);
  });
});

describe("stopka sekcji", () => {
  test("etykieta przycisku bierze się z klucza, ostrzeżenie startuje schowane", () => {
    const H = html();
    assert.match(H.coda("cils.closeSection"), /js-next">cils\.closeSection</);
    assert.match(H.coda("cils.finish"), /js-next">cils\.finish</);
    assert.match(H.coda("cils.finish"), /js-expired" hidden/);
  });
});

describe("sekcja zamknięta: vero/falso", () => {
  test("każde pytanie ma własną grupę radia", () => {
    const out = html().corpoChiuso(LETTURA);
    /* Dwa pytania, po dwie odpowiedzi: cztery radia w dwóch grupach.
       Jedna grupa na oba pytania = druga odpowiedź kasuje pierwszą. */
    assert.equal(ile(out, 'name="p0i0"'), 2);
    assert.equal(ile(out, 'name="p0i1"'), 2);
  });

  test("V i F niosą wartości 0 i 1, w tej kolejności", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.match(out, /value="0"> V<\/label>/);
    assert.match(out, /value="1"> F<\/label>/);
  });

  test("V i F zostają po włosku: to treść egzaminu, nie napis interfejsu", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.ok(!out.includes("cils.true"), "nie ma klucza tłumaczenia dla V");
  });

  test("siatka data-p/data-i zgadza się z numerem próby i zadania", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.equal(ile(out, 'data-p="0" data-i="0"'), 2);
    assert.equal(ile(out, 'data-p="0" data-i="1"'), 2);
  });

  test("tekst próby i treść pytań są w wyniku", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.ok(out.includes("Marco va al mare."), "akapit tekstu");
    assert.ok(out.includes("Marco parte lunedì"), "treść pytania");
    assert.ok(out.includes("Vacanze"), "tytuł próby");
  });

  test("korpus jest opakowany w js-body, po jednej karcie na próbę", () => {
    const out = html().corpoChiuso(LETTURA);
    assert.match(out, /^<div class="js-body">/);
    assert.equal(ile(out, "card cils-prova"), 1);
  });
});

describe("sekcja zamknięta: wybór wielokrotny", () => {
  test("jedno radio na opcję, wartość = numer opcji", () => {
    const out = html().corpoChiuso(ASCOLTO);
    assert.equal(ile(out, 'name="p0i0"'), 2);
    assert.match(out, /value="0"> Ciao<\/label>/);
    assert.match(out, /value="1"> Addio<\/label>/);
  });

  test("HTML w opcji jest uciekany, nie wstawiany", () => {
    const zHtml = {
      id: "lettura", minuti: 10,
      prove: [{ consegna: "x", t: "mcq", items: [{ q: "y", opts: ["<b>sì</b>"], a: 0 }] }]
    };
    const out = html().corpoChiuso(zHtml);
    assert.ok(!out.includes("<b>sì</b>"), "znacznik nie może wejść surowy");
    assert.ok(out.includes("&lt;b&gt;"), "ma być uciekany");
  });
});

describe("sekcja zamknięta: odsłuch", () => {
  test("jeden przycisk na nagranie, z numerem próby i nagrania", () => {
    const out = html().corpoChiuso(ASCOLTO);
    assert.equal(ile(out, "js-play"), 2);
    assert.match(out, /data-p="0" data-b="0"/);
    assert.match(out, /data-p="0" data-b="1"/);
    assert.ok(out.includes("cils.twice"), "uwaga o dwóch odtworzeniach");
  });

  test("sekcja czytania nie dostaje ANI bloku audio, ani uwagi o odtwarzaniu", () => {
    /* Liczenie samych „js-play" tu nie wystarcza, i to wyszło z mutacji:
       zdjęcie warunku `sez.id === "ascolto"` nie dodaje w czytaniu żadnego
       przycisku, bo próba nie ma nagrań — dodaje PUSTY blok z napisem
       „tekst usłyszysz dwa razy" pod tekstem, którego się nie słucha.
       Asercja na samych przyciskach przechodziła przez tę usterkę. */
    const out = html().corpoChiuso(LETTURA);
    assert.equal(ile(out, "js-play"), 0);
    assert.equal(ile(out, "cils-audio"), 0, "pusty blok audio też jest usterką");
    assert.ok(!out.includes("cils.twice"), "uwaga o dwóch odtworzeniach nie dotyczy czytania");
  });
});

describe("sekcja zamknięta: cloze", () => {
  test("tyle numerowanych luk, ile zadań — nie tyle, ile kawałków tekstu", () => {
    const out = html().corpoChiuso(CLOZE);
    assert.equal(ile(out, "cils-gap"), 2, "trzy kawałki, dwa zadania");
    assert.ok(out.includes("(1)"), "numeracja od 1");
    assert.ok(out.includes("(2)"));
    assert.ok(!out.includes("(3)"), "po ostatnim kawałku nie ma luki");
  });

  test("cloze nie wchodzi do próby innego typu", () => {
    assert.equal(ile(html().corpoChiuso(LETTURA), "cils-gap"), 0);
  });
});

describe("produkcja pisemna", () => {
  test("pierwsza traccia jest wybrana, pozostałe nie", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.equal(ile(out, 'name="traccia"'), 2);
    assert.equal(ile(out, "checked"), 1, "dokładnie jedna domyślnie wybrana");
    assert.match(out, /value="0" checked/);
  });

  test("pole tekstowe i licznik są na miejscu, licznik jako region live", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.match(out, /class="field cils-ta js-text"/);
    assert.match(out, /js-count" role="status" aria-live="polite"/);
  });

  test("polecenie i tytuły tracce są w wyniku", () => {
    const out = html().corpoScritto(SCRITTA);
    assert.ok(out.includes("Scrivi una mail."));
    assert.ok(out.includes("Una mail al direttore"));
  });
});

describe("produkcja ustna", () => {
  test("z mikrofonem jest przycisk nagrywania", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.match(out, /js-rec" aria-pressed="false"/);
    assert.ok(out.includes("js-play-mine"), "odsłuch własnego nagrania");
  });

  test("bez mikrofonu przycisku NIE ma, jest powód", () => {
    /* Przycisk, którego kliknięcie kończy się wyjątkiem, jest gorszy od
       jego braku: uczeń pod zegarem klika go i traci sekundy na nic. */
    const out = html().corpoOrale(ORALE, "rec.errNoMic");
    assert.equal(ile(out, "js-rec"), 0);
    assert.ok(out.includes("rec.errNoMic"), "powód braku na ekranie");
  });

  test("argomenti jako radio, pierwszy wybrany; autokontrola jako checkboxy", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.equal(ile(out, 'name="arg"'), 2);
    assert.match(out, /name="arg" value="0" checked/);
    assert.equal(ile(out, 'type="checkbox"'), 2);
    assert.match(out, /data-c="0"/);
  });

  test("sekcja jest oznaczona jako nieoceniana", () => {
    const out = html().corpoOrale(ORALE, "");
    assert.ok(out.includes("cils.oralNotScored"));
  });
});

describe("tabela abilità w podsumowaniu", () => {
  function esito(box, punti) {
    return box.sandbox.Cils.esito(punti);
  }

  test("sprawność nad progiem dostaje ✓, pod progiem ✗", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9, lettura: 3 }), () => false);
    assert.ok(out.includes("9 / 12 ✓"), `nad progiem: ${out}`);
    assert.ok(out.includes("3 / 12 ✗"), `pod progiem: ${out}`);
  });

  test("sprawność niemierzona mówi to wprost, zamiast pokazywać zero", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9, lettura: 9 }), () => false);
    assert.ok(out.includes("cils.notMeasured"), "pisemna i ustna nie są punktowane");
    assert.ok(!out.includes("0 / 12"), "zero wyglądałoby na zmierzony wynik");
  });

  test("sekcja z wyczerpanym czasem jest oznaczona", () => {
    const box = silnik();
    const H = box.sandbox.CilsHtml;
    const e = esito(box, { ascolto: 9, lettura: 3 });
    const zeScadla = H.abilita(e, (a) => a === "lettura");
    const bez = H.abilita(e, () => false);
    assert.ok(zeScadla.includes("cils.expiredMark"), "marchio na sekcji, której czas minął");
    assert.ok(!bez.includes("cils.expiredMark"), "bez wyczerpania czasu marchio nie ma");
  });

  test("próg i maksimum pochodzą z cils.js, nie z napisu w markupie", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.abilita(esito(box, { ascolto: 9 }), () => false);
    assert.match(out, /cils\.threshold\(max=12,n=7\)/);
  });
});

describe("karty produkcji w podsumowaniu", () => {
  const PISEMNA = {
    traccia: { it: "Una mail", richiede: [{ word: "cordiali saluti", etichetta: "formula di chiusura" }] },
    testo: "Buongiorno, le scrivo per informazione. Cordiali saluti."
  };

  test("nietknięta sekcja nie zostawia pustej karty", () => {
    const H = html();
    assert.equal(H.scritta(null), "");
    assert.equal(H.orale(undefined), "");
  });

  test("napisany tekst daje liczbę słów i etykietę wymagania PO WŁOSKU", () => {
    const out = html().scritta(PISEMNA);
    assert.ok(out.includes("formula di chiusura"), "etykieta z danych, nie klucz");
    assert.ok(out.includes("✓"), "wymaganie spełnione");
    assert.match(out, /cils\.wordsOf\(max=120,min=80,n=7\)/);
  });

  test("tekst poza limitem jest oznaczony, w limicie nie", () => {
    const H = html();
    const krotki = H.scritta(PISEMNA);
    const dlugi = H.scritta({ traccia: PISEMNA.traccia, testo: Array(95).fill("parola").join(" ") });
    assert.ok(krotki.includes("cils.outOfRange"), "siedem słów to za mało");
    assert.ok(!dlugi.includes("cils.outOfRange"), "95 słów mieści się w 80-120");
  });

  test("niespełnione wymaganie dostaje ✗", () => {
    const out = html().scritta({ traccia: PISEMNA.traccia, testo: "Ciao, tutto bene." });
    assert.ok(out.includes("✗"), `brak formuły: ${out}`);
  });

  test("karta ustna pokazuje wybrany temat i liczbę odhaczonych punktów", () => {
    const out = html().orale({ argomento: "Il lavoro", spuntate: 2 });
    assert.ok(out.includes("Il lavoro"));
    assert.match(out, /cils\.selfChecked\(n=2\)/);
  });
});

describe("całe podsumowanie", () => {
  const PISEMNA = {
    traccia: { it: "Una mail", richiede: [{ word: "cordiali saluti", etichetta: "formula di chiusura" }] },
    testo: "Buongiorno. Cordiali saluti."
  };

  test("sprawność pod progiem daje werdykt odmowny", () => {
    const box = silnik();
    const e = box.sandbox.Cils.esito({ ascolto: 9, lettura: 3 });
    const out = box.sandbox.CilsHtml.podsumowanie(e, () => false, null, null);
    assert.equal(e.verdetto, "sotto-soglia");
    assert.ok(out.includes("cils.verdictBelow"), "werdykt odmowny");
    assert.ok(!out.includes("cils.verdictUnknown"));
    /* Werdykt bez podanego źródła progu jest liczbą wziętą z powietrza:
       uczeń nie ma jak sprawdzić, skąd 7 z 12. Wyszło z mutacji — żaden
       test podsumowania tego nie pilnował, choć lista owszem. */
    assert.ok(out.includes("cils.thresholdSource"), "źródło progu przy werdykcie");
  });

  test("wszystko nad progiem NIE daje werdyktu „zdane”, tylko nierozstrzygnięty", () => {
    /* Asymetria jest treścią, nie niedokończeniem: symulator mierzy dwie
       sprawności z czterech, więc nie ma prawa powiedzieć „zdasz". */
    const box = silnik();
    const e = box.sandbox.Cils.esito({ ascolto: 11, lettura: 10 });
    const out = box.sandbox.CilsHtml.podsumowanie(e, () => false, null, null);
    assert.ok(out.includes("cils.verdictUnknown"), `werdykt: ${out}`);
    assert.ok(!out.includes("cils.verdictBelow"));
  });

  test("obie drogi wyjścia są na ekranie", () => {
    const box = silnik();
    const out = box.sandbox.CilsHtml.podsumowanie(
      box.sandbox.Cils.esito({ ascolto: 9, lettura: 9 }), () => false, null, null);
    assert.ok(out.includes("js-again"), "podejście od nowa");
    assert.ok(out.includes("js-list"), "powrót do listy");
  });

  test("karty produkcji wchodzą tylko wtedy, gdy uczeń do nich doszedł", () => {
    const box = silnik();
    const H = box.sandbox.CilsHtml;
    const e = box.sandbox.Cils.esito({ ascolto: 9, lettura: 9 });
    const zProdukcja = H.podsumowanie(e, () => false, PISEMNA, { argomento: "Il lavoro", spuntate: 2 });
    const bez = H.podsumowanie(e, () => false, null, null);
    assert.ok(zProdukcja.includes("formula di chiusura"), "wymaganie pisemnej");
    assert.ok(zProdukcja.includes("Il lavoro"), "temat ustnej");
    /* Nie „cils.sec.scritta": ten klucz stoi też w wierszu tabeli sprawności,
       więc asercja na nim przechodziłaby zawsze. Karta ma własne napisy. */
    assert.ok(!bez.includes("cils.writingNotScored"), "bez pisemnej nie ma jej karty");
    assert.ok(!bez.includes("cils.selfChecked"), "bez ustnej nie ma jej karty");
    /* Pełna nazwa klasy z cudzysłowem: „cils-h" jako podciąg łapie też
       „cils-hint", którego w podsumowaniu jest troje. */
    assert.equal(ile(zProdukcja, 'class="cils-h"'), 2, "dwa nagłówki kart produkcji");
    assert.equal(ile(bez, 'class="cils-h"'), 0);
  });
});
