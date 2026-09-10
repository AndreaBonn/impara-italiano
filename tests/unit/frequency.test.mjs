/* ============================================================
   Pokrycie listy częstości — funkcje czyste.

   Listy są budowane ręcznie i mają po kilka pozycji: chodzi o to, żeby
   przy zerwaniu było widać, KTÓRA reguła się zmieniła, a nie żeby test
   powtórzył obliczenie na dwa tysiące form.

   Rzecz, której ten test pilnuje przede wszystkim: forma odmieniona ma
   się zaliczać. Lista częstości jest listą FORM, a talia jest talią
   HASEŁ, więc bez przejścia przez resolver licznik pokazywałby braki
   dokładnie tam, gdzie uczeń słowo umie — i to systematycznie.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS } from "./_harness.mjs";

function silnik(czytanki) {
  const box = loadEngine({
    files: [...VERBS, "assets/js/lemma.js", "assets/js/frequency.js"]
  });
  box.sandbox.READINGS = czytanki || [];
  box.sandbox.Lemma.uzyjSlownika(null);
  box.sandbox.Lemma.odswiez();
  return box.sandbox;
}

/* [forma, ile razy] — jak w data/core/frequenza.js */
const LISTA = [
  ["che", 100], ["bevo", 50], ["casa", 40], ["libri", 30],
  ["mangiato", 20], ["turisti", 10], ["xyzzy", 5]
];
const TOKENOW = 255;

describe("frequency: pokrycie zbioru haseł", () => {
  test("puste hasła dają zero, ale nie wywracają liczenia", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, {}, TOKENOW);
    assert.equal(p.znane, 0);
    assert.equal(p.wszystkie, 7);
    assert.equal(p.udzialTokenow, 0);
  });

  test("trafienie dosłowne liczy się razem ze swoją częstością", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { casa: true }, TOKENOW);
    assert.equal(p.znane, 1);
    assert.ok(Math.abs(p.udzialTokenow - 40 / 255) < 1e-9, "udział to 40 z 255 tokenów");
  });

  test("forma odmieniona zalicza się do hasła podstawowego", () => {
    const s = silnik();
    /* „bere” w talii ma pokryć „bevo” na liście, „libro” ma pokryć
       „libri”, a „mangiare” ma pokryć imiesłów „mangiato”. */
    const p = s.Frequency.pokrycie(LISTA, { bere: true, libro: true, mangiare: true }, TOKENOW);
    assert.equal(p.znane, 3, "trzy formy zaliczone przez odmianę, nie przez zbieżność napisów");
  });

  test("słowo spoza zbioru zostaje niepokryte", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { casa: true }, TOKENOW);
    assert.ok(p.znane < p.wszystkie, "xyzzy nie ma prawa się zaliczyć");
  });

  test("lista pusta nie dzieli przez zero", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie([], { casa: true }, 0);
    assert.equal(p.znane, 0);
    assert.equal(p.udzialTokenow, 0);
  });
});

describe("frequency: najbliższe braki", () => {
  test("wychodzą tylko te, których kurs uczy, a uczeń nie ma", () => {
    const s = silnik();
    const kurs = { casa: true, libro: true, bere: true };
    const uczen = { bere: true };
    const hasla = Array.from(s.Frequency.brakujace(LISTA, kurs, uczen, 10)).map(b => b.haslo);
    assert.ok(hasla.includes("casa"), "kurs zna, uczeń nie ma");
    assert.ok(hasla.includes("libro"), "wychodzi HASŁO, nie forma „libri” z listy");
    assert.ok(!hasla.includes("bere"), "uczeń ma bere, więc bevo nie jest brakiem");
    assert.ok(!hasla.includes("xyzzy"), "kurs tego nie uczy: podsuwanie byłoby przerzuceniem roboty");
  });

  test("formy tego samego hasła zwijają się w jeden wiersz", () => {
    const s = silnik();
    /* Lista częstości ma osobno „ho”, „ha”, „hai”: bez zwinięcia pierwsza
       piątka braków to cztery razy to samo słowo. */
    const lista = [["ho", 90], ["ha", 80], ["hai", 70], ["casa", 10]];
    const braki = Array.from(s.Frequency.brakujace(lista, { avere: true, casa: true }, {}, 10));
    const hasla = braki.map(b => b.haslo);
    assert.equal(hasla.filter(h => h === "avere").length, 1, "jeden wiersz na hasło");
    const avere = braki.filter(b => b.haslo === "avere")[0];
    assert.equal(avere.ile, 240, "częstość to suma form");
    assert.equal(avere.ranga, 1, "ranga to najlepsza z rang jego form");
    assert.ok(Array.from(avere.formy).length >= 3, "formy zachowane jako kontekst");
  });

  test("wyrazy funkcyjne nie trafiają na listę do klikania", () => {
    const s = silnik();
    const hasla = Array.from(s.Frequency.brakujace(LISTA, { che: true, casa: true }, {}, 10)).map(b => b.haslo);
    assert.ok(!hasla.includes("che"), "„che” jest rodzajem gramatyki, nie fiszką");
    assert.ok(hasla.includes("casa"));
  });

  test("kolejność idzie za częstością i niesie rangę", () => {
    const s = silnik();
    const braki = Array.from(s.Frequency.brakujace(LISTA, { casa: true, libro: true }, {}, 10));
    assert.equal(braki[0].haslo, "casa", "częstsze pierwsze");
    assert.equal(braki[0].ranga, 3, "ranga to pozycja na liście, nie w wyniku");
    assert.ok(braki[0].ile > braki[1].ile);
  });

  test("limit jest przestrzegany", () => {
    const s = silnik();
    const braki = s.Frequency.brakujace(LISTA, { casa: true, libro: true, mangiare: true }, {}, 2);
    assert.equal(Array.from(braki).length, 2);
  });
});

describe("frequency: skąd biorą się dwa zbiory", () => {
  /* Widok pokrycia porównuje dwa zbiory: czego uczy kurs i co uczeń ma
     w talii. Oba są budowane tu, i oba mogą po cichu wyjść puste — wtedy
     ekran mówi „0% pokrycia" i wygląda to na wynik nauki, nie na usterkę. */
  function zSilnikiem() {
    const box = loadEngine({
      files: [...CORE, ...VERBS, "assets/js/lemma.js", "assets/js/frequency.js"]
    });
    box.Core.load();
    box.sandbox.READINGS = [];
    box.sandbox.Lemma.uzyjSlownika(null);
    box.sandbox.Lemma.odswiez();
    return box;
  }

  test("zbiór ucznia to klucze talii, czyli sam włoski", () => {
    const box = zSilnikiem();
    box.Core.addCard("il caffè", "kawa", "a1-u01-l1");
    const uczen = box.sandbox.Frequency.slownikUcznia();

    /* Klucz jest znormalizowany (bez akcentów i wielkich liter), bo lista
       częstości też podaje formy w tej postaci: gdyby zbiory były w dwóch
       zapisach, uczeń widziałby braki dokładnie tam, gdzie słowo umie. */
    assert.deepEqual(Object.keys(uczen), ["il caffe"],
      "klucz fiszki to znormalizowany włoski, bez tłumaczenia: to on jest tożsamością");
  });

  test("pusta talia daje pusty zbiór, a nie wyjątek", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikUcznia()), []);
  });

  test("zbiór kursu bierze się z leksykonu wczytanych lekcji", () => {
    const box = zSilnikiem();
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{
        id: "u1",
        lessons: [{ id: "l1", vocab: [{ it: "il caffè" }, { it: "la casa" }], exercises: [] }]
      }]
    });
    const kurs = box.sandbox.Frequency.slownikKursu();

    assert.ok(kurs["caffè"], "zwroty wielowyrazowe wchodzą rozłożone na słowa");
    assert.ok(kurs["casa"]);
    assert.ok(!kurs["xyzzy"]);
  });

  test("kurs bez wczytanego poziomu daje zbiór pusty, nie wywraca widoku", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});

describe("frequency bez lematyzatora", () => {
  test("bez Lemma zbiór kursu jest pusty, zamiast wywracać ekran pokrycia", () => {
    /* lemma.js jest wczytywany osobnym <script>; zapomniany znacznik zabiera
       cały słownik kursu. Ekran ma wtedy pokazać zero pokrycia, a nie paść —
       usterkę widać po liczbie, a nie po pustej stronie. */
    const box = loadEngine({ files: [...CORE, "assets/js/frequency.js"] });
    box.Core.load();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});
