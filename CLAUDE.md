# CLAUDE.md — Impara l'Italiano

Statyczna platforma do nauki włoskiego z wyjaśnieniami w języku ucznia. Bez backendu,
bez build stepu, bez ani jednej zależności w czasie działania — kroje pisma też leżą
w repozytorium (`assets/fonts/`), więc strona nie odpytuje żadnej cudzej domeny.

Włoski jest zawsze językiem **uczonym**. Językiem **wyjaśnień** jest polski albo angielski
(`en` = odmiana amerykańska, locale `en-US`) i uczeń go wybiera; `settings.lang` trzyma wybór.

## Zasady techniczne projektu

- **Skrypty klasyczne, nie moduły ES.** Cała aplikacja musi działać także z `file://`. Moduły ES
  i `fetch()` są tam blokowane przez CORS — dlatego dane są plikami `.js` przypisującymi do globali,
  a nie JSON-em pobieranym przez `fetch`.
- **Zero zależności runtime.** Żadnego frameworka, bundlera ani polyfilli. Wszystko w czystym ES5+
  zgodnym z przeglądarkami od 2020.
- **Dane oddzielone od silnika.** Pliki w `data/` zawierają wyłącznie treść. Logika renderowania
  siedzi w `assets/js/` i nie wie nic o konkretnych lekcjach.
- **Dane w dwóch warstwach.** `data/core/<plik>.js` to warstwa neutralna językowo, a
  `data/i18n/<lang>/<plik>.js` to teksty w języku ucznia. Ta sama nazwa pliku po obu stronach.
  Włoskie zdanie istnieje **w jednym miejscu**, więc nazwy nagrań (liczone z jego treści)
  nie mogą się rozjechać między językami. Nowy język = jeden katalog `data/i18n/<lang>/`,
  bez kopiowania kursu.
- **Leniwe ładowanie poziomów.** `Core.loadLevelData(code, cb)` wstrzykuje `<script>` najpierw
  dla warstwy neutralnej, potem dla tekstów, i dopiero wtedy woła `LINGUAI.applyStrings(lang)`.
  Nowy poziom = wpis w `data/core/curriculum-index.js` z tablicą `dataFiles` (same nazwy plików,
  bez katalogu).
- **Jeden plik, jedna odpowiedzialność, jeden globalny.** Każdy plik w `assets/js/` przypisuje
  jeden obiekt do `window` i czyta cudze przez `global.<Nazwa>`. Kolejność w `index.html` JEST
  deklaracją zależności: plik czytający cudzy globalny przy wykonaniu modułu (a nie dopiero
  w środku funkcji) musi stać po nim. Ta sama kolejność jest powtórzona w `sw.js` (PRECACHE)
  i w stałych `CORE` / `VERBS` / `LEMMA` / `LLM` w `tests/unit/_harness.mjs` — trzy miejsca, jedna prawda.

### Mapa silnika

Kto od kogo zależy, w kolejności wczytywania. Strzałka idzie w jedną stronę: `store` nie wie
nic o `srs`, `srs` nie wie nic o postępach lekcji.

| Plik | Globalny | Co trzyma |
|---|---|---|
| `text.js` | `Txt` | porównywanie tekstu: normalizacja, Levenshtein, ocena odpowiedzi otwartej |
| `notice.js` | `Notice` | komunikaty na ekranie: znikające i te, które zostają do zamknięcia |
| `store.js` | `Store` | `state`, zapis do localStorage, potarcie przy pełnej pamięci, migracje, import |
| `registry.js` | `Registry` | struktura kursu i dociąganie plików poziomu przez `<script>` |
| `srs.js` | `Srs` | talia powtórek: FSRS na słownictwie, SM-2 dla quaderno błędów |
| `core.js` | `Core` | postępy ucznia (lekcje, passa, XP, kopia zapasowa) **oraz fasada całego silnika** |

`Core` wystawia dalej wszystko z tabeli pod dotychczasowymi nazwami (`Core.norm`, `Core.save`,
`Core.addCard`, `Core.getLesson`…), bo woła je kilkanaście widoków. Nowy kod może iść wprost do
modułu; stary nie musi się zmieniać. To jest fasada, nie warstwa: nie ma tam logiki.

Ta sama zasada niżej: `verbs-data.js` (tabele włoskiego) przed `verbs.js` (algorytm);
`recordings.js` (który plik mp3 dla którego zdania) przed `audio.js` (kaskada nagranie →
synteza → cisza); `i18n.js` (napisy interfejsu) obok `i18n-merge.js` (doklejanie tekstów
ucznia do treści kursu); `router.js` (adres, wybór widoku, `Views.onLeave`) przed `app.js`
(pasek, motyw, przełącznik języka, start); `exercises.js` (dyspozytor + wspólne kawałki)
przed `exercises-choice/text/voice.js` (czternaście typów, wołają `Ex.register`);
`views.js` (skorupa i `Views.shell`) przed kilkunastoma `views-*.js`, po jednym na ekran;
`pwa-rules.js` (trzy decyzje o zapowiedzi nowej wersji, czyste funkcje) przed `pwa.js`
(rejestracja, nasłuchy, komunikat, przeładowanie); `retention-rules.js` (trzy decyzje
o powrotach: kiedy pytać o trwałą pamięć, kiedy proponować instalację, jaka liczba na
ikonie) i `ics.js` (plik dla kalendarza, czysta funkcja napisu) przed `retention.js`
(zgoda przeglądarki, licznik, `beforeinstallprompt`, pobranie).

Tą samą granicą idzie drugi sędzia odpowiedzi otwartych: `llm-providers.js` (tabela
czterech dostawców, cztery czyste funkcje na każdego), `llm-prompts.js` (o co pytamy model)
i `llm-rules.js` (kolejka, odczyt werdyktu, **clamp**) przed `llm-net.js` (żądanie, zegar
na nim i przechodzenie do następnego dostawcy) i `llm.js` (trzy wejścia: `judge`, `review`,
`test`, oraz bramki, które ich pilnują) —
plus `llm-keys.js`, który trzyma klucze API w **osobnym** pojemniku `linguai.llm.v1`, poza
stanem: `Store.exportState()` serializuje cały stan do pliku kopii zapasowej, a poświadczenie
płatne przez ucznia nie ma prawa tam trafić. Nazwa `Keys` jest zajęta przez `keys.js`.

Podział na `llm-prompts.js` i `llm-rules.js` idzie za **tempem zmian**, nie za wielkością:
to, o co pytamy, zmienia się z powodów dydaktycznych (opinia jest zbyt ogólna, model za
często odmawia, jeden język brzmi źle), a to, jak traktujemy odpowiedź — z inżynierskich.
Dwa tempa w jednym pliku to sposób, w jaki plik rośnie poza granicę, za którą nikt go już
nie czyta przed edycją.

W `llm-prompts.js` siedzą **dwie instrukcje ułożone w przeciwne strony**, i to jest treść
tego pliku. Sędzia odpowiada na pytanie zamknięte i ma odmawiać w razie wątpliwości, bo
zdanie błędne przyjęte za dobre uczeń potem ćwiczy. Czytelnik wypracowania nie zmienia
żadnego wyniku, więc ostrożność nic tam nie kupuje: ma być konkretny i cytować, bo
grzeczny ogólnik („uważaj na czasy") to opinia, która kosztuje pieniądze i nie uczy niczego.

`clamp` w `llm-rules.js` jest tu rzeczą, której nie wolno rozluźnić: model pytany jest
**wyłącznie** o odpowiedź już odrzuconą lokalnie, a jego zdanie wchodzi przez `ok || promote`.
Nie istnieje ścieżka, w której model zamienia zaakceptowaną odpowiedź na odrzuconą — i jest to
własność kodu, nie promptu, więc przeżywa model, który kłamie, i podmianę dostawcy. Bez klucza,
bez zgody albo z `file://` kurs zachowuje się dokładnie tak jak wcześniej: `Llm.available()`
milczy, a `judge()` oddaje `null`.

Ta sama zasada dotyczy dwóch ekranów, na których przebieg jest czymś więcej niż rysowaniem:
`talk-run.js` (rozmowa: rozwidlenia, wynik, powrót na ostatni wybór) przed `views-talk.js`,
a `cils-run.js` (podejście do egzaminu: kolejność sekcji, siatka odpowiedzi, wpis do
historii) przed `views-cils.js`. Widok w obu wypadkach rysuje i podpina zdarzenia; nie
trzyma stanu.

Egzamin ma jeszcze trzecią warstwę, bo jego markup jest decyzją, a nie ozdobą:
`cils-html.js` (globalna `CilsHtml`, same funkcje dane -> napis) przed `views-cils.js`.
Tam siedzi siatka odpowiedzi: `name` radia wspólny dla jednego pytania i różny dla dwóch,
`data-p`/`data-i` zgodne z siatką `cils-run.js`, numerowanie luk w cloze, brak przycisku
nagrywania bez mikrofonu. Każda z tych rzeczy psuje się cicho (uczeń widzi skutek na
wyniku, nie na ekranie) i każda sprawdza się jednym assertem w `node:test`.

Tą samą granicą przechodzi lematyzacja: `lemma-morf.js` (globalna `LemmaMorf`: rozcięcie
formy złożonej, liczba mnoga, rodzaj, stopień najwyższy, akcent toniczny, enklityki,
zamknięta lista wyrazów funkcyjnych) przed `lemma.js` (indeks odwrotny z koniugatora,
słownik kursu, werdykt). To jest podział na KANDYDATÓW i WERDYKT: reguła formy jest czystą
funkcją napisu, werdykt wymaga zbudowanego słownika całego kursu.

Kryterium podziału jest wszędzie to samo i nie jest nim długość pliku: **czysta funkcja
osobno od tego, co dotyka przeglądarki**. Pierwsza połowa daje się sprawdzić w `node:test`
za grosze, druga wymaga Playwrighta — i dopóki mieszkają w jednym pliku, cały plik kosztuje
tyle, co ta droższa połowa. Odwrotnie też: nie dzielimy dlatego, że plik jest długi.
`store.js` i `verbs-data.js` zostają w całości, bo rozbicie ich rozdzieliłoby rzeczy, które
muszą się zgadzać (tożsamość rekordu w stanie, tabele jednego języka). `views-cils.js`
(306 linii) też zostaje: po wyprowadzeniu przebiegu i markupu każda jego linia dotyka
zegara, DOM-u albo mikrofonu, więc dalszy podział szedłby już za liczbą linii, a nie za
granicą czystości.

## Kontrakty

### Lekcja — kształt po scaleniu
```js
{ id, cefr, titleIt, title, theme, objectives[],
  theory[], grammar{title,note,table{head,rows},examples[{it,tr,note}]},
  vocab[{it,tr,ex}], dialogue{titleIt,lines[{who,it,tr}]}, culture{title,text},
  exercises[] }
```
Pola `theory[]` przyjmują stringi albo obiekty: `{h,p}`, `{list}`, `{trap}`, `{contrast}`, `{tip}`.
`{contrast}` to uwaga „w twoim języku jest inaczej” — pisze się ją **od nowa** dla każdego języka,
nie tłumaczy: dla Polaka chodzi o rodzaj nijaki i deklinację, dla Amerykanina o to, że angielski
nie ma rodzaju gramatycznego w ogóle. Zawartość `p`, `trap`, `contrast`, `tip` jest wstawiana jako
HTML (celowo, dla wyróżnień) — nie wolno tam wstawiać treści pochodzącej od użytkownika.

### Podział pola na warstwy

Reguła: w `core` siedzi to, co jest włoskie, sprawdza odpowiedź albo trzyma strukturę.
W nakładce siedzi to, co uczeń czyta po swojemu.

| `data/core/` | `data/i18n/<lang>/` |
|---|---|
| `id`, `cefr`, `icon`, `titleIt`, `tags[]` | `title`, `theme`, `objectives[]`, całe `theory[]`, całe `culture` |
| `grammar.examples[].it` | `grammar.title`, `note`, **cała** `table` (head i rows), `examples[].tr` i `.note` |
| `vocab[].it`, `.ex` | `vocab[]` → `tr` |
| `dialogue.lines[].who`, `.it` | `dialogue.lines[]` → `tr` |
| `t`, `a`, `dir`, `verb`, `tense`, `persons`, `tokens`, `text`, `gaps`, `it`, `alt`, `say` | `q`, `why`, `hint`, `tr`, `setting`, **całe** `opts[]` |
| `pairs[].it`, `items[].it` i `.a`, `lines[].it`, `.sp`, `.choices`, `.a` | `pairs[].tr`, `items[].gloss`, `lines[].tr` i `.answerTr` |

Dwa miejsca wymagają uwagi:

- **`grammar.table` i `ex.opts` idą w całości do nakładki**, razem z włoskimi komórkami. Nie ma
  w nich znacznika, która kolumna jest po włosku, a która po polsku — zależy to od tabeli.
  Decyzję „to tłumaczę, tego nie ruszam” podejmuje więc tłumacz, nie skrypt. Te napisy nigdy
  nie są wypowiadane, więc powielenie ich w każdym języku nic nie kosztuje po stronie nagrań.
- **`gender.opts` zostaje w `core`**, mimo że to też `opts`. To zamknięty zbiór form włoskich,
  który musi się zgadzać z `items[].a`; wystawienie go na tłumaczenie psuje sprawdzanie.
- **`tags` zostaje w `core`**, choć wygląda na etykietę do czytania. To tablica **id** z
  `GRAMMAR_REF` (`g-presente`, `g-pron-diretti`, …), a nie napisów: tytuły tych haseł są już
  przetłumaczone na pięć języków pod kluczem `ref:<id>`, więc quaderno błędów nazywa zagadnienia
  ich słowami, nie dopisując ani jednego napisu. Każda lekcja ma co najmniej jeden tag;
  pojedyncze ćwiczenie może dopisać `tag:` i nadpisać dziedziczenie z lekcji.
  `validate.mjs` odrzuca lekcję bez tagów i tag, którego nie ma w `GRAMMAR_REF`.
- **W warstwie neutralnej nie ma ani jednego słowa w języku ucznia.** Etykieta konstrukcji pisze
  się po włosku (`dopo aver + participio`, nie `+ imiesłów`), a prompt ćwiczenia po włosku
  (`Colloquiale:`, nie `Potocznie:`). Dopóki polski był jedynym językiem bazowym, taki wyciek był
  niewidoczny: wyglądał jak poprawny tekst. Pilnuje tego `validate.mjs`, i to na **danych**, a nie
  na tekście pliku: skanuje wartości warstwy neutralnej ZANIM nałoży się nakładka, więc komentarz
  po polsku go nie myli w żadną stronę. **Granica tego gate:** łapie tylko litery spoza włoskiego
  alfabetu (`ą ę ł ż ź ć ń ś ñ ç ä ö ü ß` …). Angielskie „house" ani polskie „dziadek" przez niego
  nie przejdą, bo nie mają czego — na to nie ma automatu i zostaje czytanie danych oczami.

Tablice łączą się **po indeksie**, więc ich długość musi być identyczna po obu stronach.
`LINGUAI.applyStrings(lang)` (`assets/js/i18n-merge.js`) jest idempotentne i nigdy nie nadpisuje pól
neutralnych — dlatego drugi język można nałożyć na te same obiekty bez przeładowania strony.

### Ćwiczenie
Typ w polu `t`. Czternaście typów, po trzech plikach, wg tego CO ROBI UCZEŃ:

- `exercises-choice.js` — wybiera: `mcq`, `truefalse`, `multi`, `match`, `gender`, `minpair`
- `exercises-text.js` — pisze: `fill`, `trans`, `cloze`, `order`, `conj`
- `exercises-voice.js` — słucha i mówi: `listen`, `speak`, `dialogue`

Każdy woła `Ex.register(typ, builder)`, a `Ex.build` pyta o rejestr dopiero przy budowaniu
ćwiczenia. Builder zwraca `{html, wire(root, onDone)}`, `onDone(ok)` wywoływane **dokładnie
raz** — na tym opiera się licznik postępu lekcji oraz przechwytywanie błędów, które owija
`wire` (`assets/js/errors.js`).

**Nieznany typ nie wywraca lekcji**: dyspozytor oddaje kafelek „nieznany typ" o poprawnym
kształcie. To znaczy, że zapomniany `<script>` rodziny wygląda jak działający kurs z jednym
zepsutym ćwiczeniem — dlatego `tests/dom/exercises.spec.js` sprawdza nie tylko kształt, ale
i to, że zbudowany kafelek ma `data-idx`, czego zastępnik nie ma.

`minpair` nie stoi w żadnej lekcji: powstaje w czasie działania z `data/core/phonetics.js`.
`truefalse` też nie występuje w lekcjach, ale jest w czytankach.

### Odmiana czasowników
`Verbs.conjugate(infinito, tenseKey)` zwraca sześć form albo `null` na pozycjach bez formy
(np. `io` w trybie rozkazującym). Klucze czasów: `pres, passPross, imperf, trapPross, futuro,
futAnt, remoto, condizionale, condPass, cong, congPass, congImp, congTrap, imper`.
Nieregularne siedzą w tablicy `IRR`; reszta jest wyprowadzana regułami, łącznie ze zmianami
ortograficznymi (`-care/-gare/-ciare/-giare/-iare`). Tabele (`IRR`, końcówki, listy `ISC`
i `ESSERE_VERBS`, `TENSES`, `COMMON`) leżą w `verbs-data.js`: dopisanie czasownika nie dotyka
pliku z algorytmem. W `verbs.js` została lista przedrostków i jej dwa wyjątki, bo to strojenie
heurystyki `irrOf`, a nie włoszczyzna do przeglądania.

**Zwrotne w trybie rozkazującym**: zaimek dokleja się do form tu/noi/voi (`alzati`,
`alziamoci`, `alzatevi`) i stoi przed formą grzecznościową (`si alzi`). Krótka forma tu gubi
apostrof i podwaja spółgłoskę (`fa'` + `ti` → `fatti`). Przeczenia silnik NIE zna: włoskie
„non alzarti" bierze bezokolicznik, więc `"non " + forma` byłoby błędem.

## Dźwięk

Głos kursu to **nagrania**, nie synteza w przeglądarce. Powód: na Linuksie Web Speech API
sięga zwykle po espeak-ng (synteza formantowa, brzmi mechanicznie), a jakość na pozostałych
systemach jest nieprzewidywalna. Backend odpadał, bo zabiłby statyczność.

- **Głosy**: `it-IT-IsabellaNeural` (główny), `it-IT-GiuseppeMultilingualNeural` (rozmówca
  w dialogach i konwersacjach). Zmiana głosu = zmiana stałej w `scripts/build_audio.py`
  i pełny przebieg z `--force`.
- **Kto co robi**: `assets/js/recordings.js` (globalna `Recordings`) odpowiada wyłącznie na
  pytanie „czy to zdanie ma nagranie i pod jakim adresem" — jest czystą funkcją napisu i to
  jedyna część dźwięku, która ma bliźniaka po stronie budowania. `assets/js/audio.js` to
  kaskada nad nim: nagranie → synteza systemowa → cisza, plus rozpoznawanie mowy.
- **Nazwa pliku** = FNV-1a 64-bit treści napisu, `audio/<xx>/<hash>.mp3`. Ta sama funkcja
  po obu stronach: `audio_hash()` w Pythonie i `Recordings.hash()` w `assets/js/recordings.js`.
  **Zmiana jednej wymaga zmiany drugiej** — inaczej wszystkie nagrania stają się nieosiągalne.
- **Indeks**: `data/audio-index.js` to sklejone, posortowane skróty. `recordings.js` szuka w nim
  binarnie, więc rozstrzygnięcie „jest nagranie czy nie" jest synchroniczne i nie generuje 404.
  Plik musi być wczytany **przed** `recordings.js`, a ten przed `audio.js` — kolejność
  w `index.html` jest istotna i powtórzona w `PRECACHE` oraz w stałej `AUDIO` w harnessie.
- **Normalizacja**: `norm()` (zwężenie białych znaków + trim) musi być identyczna
  w `extract_strings.mjs` i w `recordings.js`. Rozjazd = cicha ucieczka do syntezy systemowej.
- **Tempo**: w trybie nagrań to `playbackRate`, nie `SpeechSynthesisUtterance.rate`.
  Chrome zachowuje wysokość dźwięku, więc spowolnienie nadal brzmi naturalnie.

Rebuild po dopisaniu lekcji:

```bash
node scripts/extract_strings.mjs
uv run --script scripts/build_audio.py          # tworzy tylko brakujące pliki
```

Nazwy oparte na skrócie treści oznaczają, że niezmienione zdania zachowują swój plik:
kolejne przebiegi nie generują ruchu w gicie.

## Pary minimalne

`data/core/phonetics.js` (same wyrazy włoskie) plus nakładki z glosami i uwagą kontrastywną.
Ćwiczenie `minpair` odtwarza jeden z dwóch wyrazów i pyta który.

**Nagranie jest warunkiem istnienia tego ćwiczenia.** Synteza systemowa myli dokładnie te
dźwięki, o które w nim chodzi, więc zejście do niej nie byłoby gorszą jakością, tylko
zadaniem bez odpowiedzi. Widok pomija pary, dla których nagrania brakuje.

**Dopisując parę, uruchom `uv run --script scripts/check_minpairs.py`.** Głos honoruje
akcenty nierówno: „pèsca" i „pésca" dostają różne pliki, ale „vènti" i „vénti" dają nagranie
bajt w bajt takie samo. Para nie do odróżnienia ze słuchu uczy tylko zgadywania i nie widać
tego ani w kodzie, ani w testach, ani na ekranie. Z tego powodu w kursie nie ma zbioru dla
„o" otwartego i zamkniętego: żadna z trzech par nie przeszła.

## Praca bez sieci

`sw.js` (w katalogu głównym, bo tam sięga scope) plus `manifest.webmanifest`.
Dwie strategie i obie mają powód:

- **Nagrania** — cache-first, bez unieważniania. Nazwa pliku jest skrótem treści zdania,
  więc plik pod danym adresem nigdy nie zmienia zawartości; poprawione zdanie dostaje
  po prostu inny adres. Sierotę po starym zdaniu sprząta `sweepAudio()` przy aktywacji,
  porównując pamięć z `data/audio-index.js`.
- **Kod i dane** — network-first, pamięć jako siatka pod spodem. **Nie zamieniaj tego na
  cache-first.** Projekt nie ma kroku budowania, więc pliki nie mają skrótu w nazwie i
  jedyną wersją jest `SW_VERSION`. Zapomniane podniesienie przy cache-first zamraża
  ucznia na starym kodzie: on tego nie zauważy ani nie odkręci, a my nie zobaczymy
  tego w żadnym logu.

Rejestracja idzie **tylko po http(s)** (`PWA.register()` w `assets/js/pwa.js`). Z `file://`
rejestracja rzuca wyjątkiem, a otwieranie kursu z dysku jest wymogiem projektu:
strażnik stoi na protokole, nie w `try/catch`, i żadna ścieżka kodu nie zakłada, że
worker istnieje. Zakładka Ustawienia pokazuje, w którym z trzech stanów jest kurs.

Cudzych domen worker nie dotyka w ogóle: nieprzejrzysta odpowiedź w pamięci to rozmiar bez
możliwości sprawdzenia treści. Do niedawna kosztowało to wygląd kursu bez sieci, bo Fraunces
i Inter szły z `fonts.googleapis.com` i przez tę właśnie regułę nie trafiały do pamięci.
**Oba kroje leżą teraz w `assets/fonts/`** (cztery pliki: `latin` i `latin-ext` na rodzinę,
bo polskie znaki diakrytyczne siedzą w `latin-ext`), są w `PRECACHE`, a `index.html` nie
odpytuje już żadnej cudzej domeny. Zmierzone, nie założone: wszystkie cztery pliki ładują się
**także z `file://`** — obawa, że CORS je tam zablokuje, okazała się nietrafiona, natomiast
`<link rel="preload" crossorigin>` faktycznie tam pada i dlatego go nie ma.

**Po dopisaniu pliku do `assets/js/` albo `data/core/` dopisz go do `PRECACHE` w `sw.js`
i podnieś `SW_VERSION`.** Inaczej pierwszy start bez sieci padnie na brakującym skrypcie.

Tej prośby nie trzeba już pamiętać: `node scripts/check_precache.mjs` porównuje to,
co ładuje `index.html`, z `PRECACHE` i kończy się kodem 1, wypisując brakujące pliki.
Chodzi w CI. Porównanie idzie w jedną stronę, bo `PRECACHE` z założenia trzyma też
pliki dociągane w czasie działania (nakładki `ui-*.js`, kroje, ikony).
Gdyby mimo wszystko czegoś zabrakło, guska nie milczy: nazwa pliku, który nie
wszedł do pamięci, ląduje w konsoli (DevTools → Application → Service Workers).

### Nowa wersja się ogłasza, a nie wchodzi sama

`pwa-rules.js` (globalna `PwaRules`, trzy czyste decyzje) przed `pwa.js` (rejestracja,
nasłuchy, komunikat, przeładowanie). Podział jak przy `lemma-morf.js` / `lemma.js`:
reguła osobno od tego, co dotyka przeglądarki.

- **Nowa wersja czeka w kolejce.** W `install` NIE MA `skipWaiting()`: jedyna droga
  z „waiting" do „active" prowadzi przez `postMessage({typ:"przejmij"})` ze strony.
  Przejęcie w tle zostawiłoby otwartą kartę ze starym kodem nad nowymi plikami, a bez
  kroku budowania nazwy plików się nie zmieniają, więc stary kod sięgałby po adresy,
  których nowe wydanie już nie zna.
- **Zapowiedź przy otwarciu kursu**: przy wczytaniu strony i przy powrocie na pierwszy
  plan (na zainstalowanej aplikacji to jest prawdziwe otwarcie). Pytanie do serwera ma
  próg 15 minut, żeby przełączanie okien nie zamieniło się w serię żądań.
- **„Zaktualizuj" działa w dwóch krokach**: prośba do workera, przeładowanie dopiero po
  `controllerchange`. Przeładowanie w uchwycie kliknięcia otworzyłoby jeszcze raz starą
  wersję. Krzyżyk zostawia wersję w kolejce i komunikat wraca przy następnym otwarciu.
- **Pierwsza wizyta milczy.** Pierwszy worker też przechodzi przez „installed", więc bez
  warunku „strona miała kontrolera w chwili wczytania" uczeń dostawałby prośbę
  o odświeżenie strony, którą właśnie otworzył. Ten sam warunek trzyma przeładowanie
  po `clients.claim()`, żeby pierwsze wejście nie migało ekranem.
- **`updatefound` przychodzi za wcześnie**: worker jest wtedy w „installing", a
  `registration.waiting` jest puste. Przejście do „installed" widać wyłącznie przez
  `statechange` NA WORKERZE. Kod czytający `waiting` w tamtym uchwycie wygląda poprawnie
  i nie pokazuje komunikatu ani razu — pilnuje tego mutacja w `scripts/mutations.mjs`.

**Wersja ma odcisk treści: `v35.<12 hex>`.** Przeglądarka rozpoznaje wydanie po BAJTACH
`sw.js` i po niczym innym, a poprawka w `core.js` tego pliku nie rusza: dopóki wersja
była samą liczbą przepisywaną ręcznie, wydanie wychodziło bez szans na ogłoszenie się.
Odcisk to skrót treści wszystkich plików z `PRECACHE`; dopisuje go
`node scripts/check_swversion.mjs --napraw`, a bramka w CI (bez flagi) nie pozwala mu
zwietrzeć. Granica jest świadoma: liczy się powłoka, bo pliki poziomów dociągane są
w czasie działania i odświeżają się same strategią „najpierw sieć".

### Powroty: co kurs może zrobić bez serwera

Kurs nie ma jak przypomnieć o sobie: powiadomienia z zegarem (`TimestampTrigger`)
zniknęły z jedynej przeglądarki, która je miała, a push wymaga serwera, z którego
miałby wyjść. Zostają cztery rzeczy i żadna z nich nie jest powiadomieniem.

- **Trwała pamięć** (`navigator.storage.persist()`). Profil siedzi w `localStorage`,
  nie ma konta ani synchronizacji, więc to, co przeglądarka sprzątnie, przepada.
  Pytamy **raz na profil**, i to dopiero po pierwszej skończonej lekcji: odmowę pamięta
  przeglądarka, nie my, więc jedno podejście wydane na kogoś, kto jeszcze niczego nie
  zrobił, jest wydane na obcego. Pytanie pada przy starcie, nie na końcu lekcji, bo
  prośba o uprawnienie nad podsumowaniem przerywa coś, a przy otwarciu — nic.
- **Licznik na ikonie** (`navigator.setAppBadge`). **Domyślnie wyłączony**, i to jest
  decyzja o prywatności, nie preferencja: to jedyna rzecz, którą ten kurs rysuje poza
  własną stroną, i widzi ją każdy, kto spojrzy na telefon. Liczy karty wymagalne
  **w ciągu doby**, nie w tej sekundzie — licznik zapisuje się przy wyjściu i nikt go
  potem nie rusza, więc liczba „na teraz" dawałaby zero każdemu, kto właśnie skończył
  powtórki. Horyzont jest zadeklarowany w Ustawieniach i myli się w bezpieczną stronę:
  im dłużej ucznia nie ma, tym bardziej zaniża.
- **Zaproszenie do instalacji**. Nie marketing: instalacja jest tym, co czyni zgodę na
  trwałą pamięć prawdopodobną, a licznik w ogóle widocznym. Raz, po kilku lekcjach,
  a odmowa jest ostateczna. Gdzie `beforeinstallprompt` nie istnieje (Firefox, iOS),
  w miejscu przycisku stoi zdanie z instrukcją — martwy przycisk wygląda jak zepsuty
  kurs, a nie jak brakująca funkcja przeglądarki.
- **Plik `.ics`**. Jedyne przypomnienie, które naprawdę działa bez serwera, bo wykonuje
  je program, który uczeń i tak ma otwarty. Odwołuje się je w kalendarzu, nie tutaj.

`ics.js` jest czystą funkcją napisu i to nie jest kosmetyka: **tu psuje się cicho i
w cudzym programie**. Przecinek albo nowa linia w wartości nie psują wiersza, tylko go
KOŃCZĄ, a reszta czyta się jako następna właściwość; limit 75 **oktetów** (nie znaków)
przy polskich i włoskich literach wypada w innym miejscu, niż podpowiada oko; a
rozcięcie pary zastępczej odbiera plikowi status UTF-8. `DTSTART` celowo nie ma ani `Z`,
ani `TZID`: RFC 5545 nazywa to czasem pływającym i o to chodzi, bo „siódma rano" ma
znaczyć siódmą tam, gdzie uczeń jest.

## Podgląd linku

Obrazek, który widać po wysłaniu komuś adresu kursu, powstaje ze skryptu, nie z ręki.
`scripts/og-template.html` maluje kartę arkuszem stylów samego kursu (stamtąd bierze kroje,
paletę OKLCH i papierowe tło z dwoma poświatami), a `node scripts/build_og.mjs` fotografuje
ją Chromium, tym samym, którego potrzebują testy DOM. Nowa zależność nie jest potrzebna.
Ponowne uruchomienie nie rusza gita: ten sam szablon daje ten sam plik co do bajtu, i to
właśnie czyni `assets/og/cover.png` wynikiem repozytorium, a nie doczepionym do niego
załącznikiem. Skrypt czeka na `document.fonts.ready` przed zdjęciem: bez tego zdjęcie ściga
się z czterema plikami woff2 i Chromium maluje zastępczą szeryfową, co nadal wygląda jak
poprawna karta.

**Adres serwisu stoi w jednym miejscu**: w polu `homepage` w `package.json`. Czytają go
oba skrypty, więc zmiana domeny to zmiana tej jednej linii plus przebieg `build_og.mjs`.

**Znaczniki `og:*` i `twitter:*` w `index.html` są statyczne i po angielsku**, jako jedyne
napisy na tej stronie. Robot czytający link nie wykonuje ani jednej linii naszego kodu, więc
`data-i18n` nigdy by się na nich nie odpaliło: wyglądałoby poprawnie i nie robiło nic.
Angielski jest tu tym, czego można się spodziewać po kimś, kto kursu jeszcze nie otworzył,
tą samą decyzją co `"lang": "en-US"` w `manifest.webmanifest`. Nazwa kursu zostaje włoska,
jak w szynie i w każdym języku interfejsu.

Pilnuje tego `node scripts/check_ogtags.mjs`: czy prefiks znaczników zgadza się z `homepage`,
czy plik obrazka leży na dysku i czy ma dokładnie 1200×630. Bramka chodzi w CI, bo zepsuty
podgląd widać wyłącznie w cudzym oknie rozmowy - żaden test nie robi się od tego czerwony,
a kurs działa dalej.

## Zabłąkany adres

`404.html` leży w katalogu głównym, bo stamtąd bierze go GitHub Pages. Dwie rzeczy w tym
pliku wyglądają na przeoczenie i są decyzją.

**Ani jednej ścieżki względnej.** Pages odpowiada tym plikiem na KAŻDY nieznany adres,
zachowując głębokość, o którą poprosił odwiedzający: `/impara-italiano/a/b/c/nic` dostaje
te bajty, a przeglądarka nadal uważa, że stoi w `/a/b/c/`. Względny `href` rozwiązałby się
więc względem katalogu, którego nie ma. Wszystko idzie od korzenia, spod prefiksu z pola
`homepage` w `package.json`, i tego pilnuje `node scripts/check_404.mjs`.

Cena jest realna: **otwarty przez `scripts/serve.mjs` ten plik przychodzi bez arkusza
stylów**, bo `/impara-italiano/` nie jest ścieżką w drzewie roboczym. To nie jest usterka.
Bramka czyta atrybuty zamiast ładować stronę, a `tests/dom/notfound.spec.js` przepisuje
prefiks przed otwarciem - i dopiero dzięki temu może sprawdzić rzecz najważniejszą:
że po przepisaniu arkusz NAPRAWDĘ się wczytuje, czyli że ścieżki wskazują na pliki,
a nie na prawdopodobnie wyglądające napisy.

**Pięć zdań wpisanych w plik, nie w słowniki.** Kurs wybiera język z `localStorage`, a do
tego potrzebny jest skrypt; ten projekt nie ma ani jednego wbudowanego i to jest własność
zadeklarowana w komentarzu nad CSP, nie preferencja. Nagłówek stoi po włosku, bo to jedyny
język, który mają wspólny wszyscy uczniowie. Te pięć wierszy jest poza `parity.mjs`
i nic nie powie, że rozjechały się z kursem - poza przeczytaniem ich.

## Informacja o prywatności

Trasa `#/privacy` (`assets/js/views-privacy.js`), nie okienko i nie sekcja w przewodniku:
dokument bez adresu nie da się podlinkować, a ten musi być osiągalny ze stopki każdego
ekranu, z Ustawień i z wklejonego komuś linku.

**Zdanie bez pokrycia nie wchodzi do tekstu.** Tekst źródłowy to `docs/PRIVACY.it.md`
(po włosku, bo w tym języku administrator podpisuje to, co dokument twierdzi), a każde
jego twierdzenie ma swój wiersz w `specs/004-lancio-pubblico/riscontri.md` razem
z poleceniem, które sprawdziło je na kodzie. Twierdzenia bez wiersza się nie łagodzi
i nie pisze w trybie przypuszczającym - się je usuwa. Działa to też w drugą stronę:
tam, gdzie pokrycie mówi rzecz niewygodną, informacja ją mówi. Trzy takie są: głos
wychodzący do producenta przeglądarki, kopie w pamięci guski i adres IP widziany przez
hosting.

**Adres i nazwisko stoją w jednym miejscu**, w `views-privacy.js`, i wchodzą do zdań jako
`{mail}` i `{name}`. Gdyby siedziały w słownikach, jeden z pięciu języków prędzej czy
później zostałby z nieaktualnym adresem i nikt by tego nie zobaczył. Tą samą drogą idą
nazwy przycisków (`{export}`, `{import}`, `{reset}`): pochodzą z kluczy `set.*`, więc nie
mogą rozjechać się z tym, co uczeń widzi w Ustawieniach.

**Wycofanie zgody na rozpoznawanie mowy jest częścią tej informacji, nie dodatkiem.**
`Consent.ustaw(false)` istniało w `consent.js` od początku i żaden widok go nie wołał:
jedynym sposobem na wycofanie było skasowanie całego profilu. Zdanie „możesz wycofać, kiedy
zechcesz" byłoby fałszywe w dniu, w którym je napisano, więc przełącznik w Ustawieniach
powstał razem z tekstem. Stoi przy pozostałych ustawieniach głosu, a nie na stronie
z informacją: informacja tłumaczy, Ustawienia działają.

## Silnik adaptacyjny

Dopisany w całości po pierwszym wydaniu kursu. Sedno: kurs zapamiętuje, co uczeń
pomylił, i sam mu to podsuwa.

- **Quaderno błędów** (`errors-key.js` + `errors.js`). Każda zła odpowiedź zakłada
  kartę z tagiem zagadnienia. Klucz karty to `id lekcji # firma treści # numer bliźniaka`
  — trzy części, bo w warstwie neutralnej całe `mcq` to `{ t: "mcq", a: 1 }` i sam skrót
  treści zderzyłby setki ćwiczeń, a numer porządkowy przesunąłby się przy pierwszej
  wstawce w środku lekcji. Firma liczy się WYŁĄCZNIE z pól neutralnych: cokolwiek z
  nakładki osierociłoby cały zbiór przy zmianie języka.
  Przechwytywanie idzie przez owinięcie `Ex.build` (`Errors.install`), nie przez
  trzynaście builderów: przy czternastym typie nie ma czego zapomnieć.
- **Drille z reguł** (`drills-lex.js` + `drills.js`). Siedem generatorów, funkcje czyste
  ziarna. Zadania są **wyłącznie pisane**: wygenerowanego zdania nie ma w indeksie
  nagrań, więc `say` i typy `listen`/`speak` są zabronione i pilnowane testem.
- **Sesja dnia** (`views-today.js`), **test poziomujący** (`placement.js`),
  **pary minimalne** (`views-phonetics.js`), **czytanki** (`views-reading.js`),
  **pisanie** (`writing.js` + `views-writing.js`).

**Stan rośnie przez DOKŁADANIE, nie przez migrację.** `load()` nakłada zapis na
`defaultState()`, więc nowy kontener starszy profil dostaje pusty sam z siebie.
`SCHEMA` zostaje przy 2 i podnosi się **wyłącznie**, gdy zmienia się ZNACZENIE
istniejącego pola (tak było przy v1 → v2). Bump „na wszelki wypadek" odrzuciłby każdy
plik wyeksportowany przez ucznia do tej pory; `importState` przyjmuje `schema <= SCHEMA`
i dokłada migracje po drodze.

**Przy pełnej pamięci potarcie wyrzuca to, co wraca samo**: najpierw karty najlepiej
opanowane, potem liczniki drilli. Nigdy postępów lekcji ani wypracowań — tych uczeń nie
odtworzy dalszą nauką.

**Kopia zapasowa: dwa pola, nie jedno.** Kurs nie ma konta ani synchronizacji, więc jedyną
kopią postępów jest plik, który uczeń sam zapisze. Co `BACKUP_EVERY` (10) UKOŃCZONYCH lekcji
`recordLesson` wystawia trwały komunikat z przyciskiem pobrania. Stan trzymają dwa pola
kontenera `backup`: `at` przesuwa **wyłącznie** zapisana kopia i znaczy „tyle postępów leży na
dysku ucznia", a `snoozed` przesuwa zamknięcie komunikatu i znaczy „nie teraz". Zlanie ich w
jedno pole sprawia, że zamknięcie komunikatu wygląda dla kursu jak zrobiona kopia i drugie
przypomnienie nie przychodzi nigdy. Bramka stoi w `recordLesson`, a nie w widoku końca lekcji,
bo `recordLesson` woła też ekran rozmów — ten sam powód, dla którego zgoda na mikrofon stoi
w `Audio2.listen`. `downloadBackup()` stawia znacznik PRZED serializacją, żeby wypuszczony
plik niósł już nową wartość i po odzyskaniu nie prosił od razu o następną kopię.

## Kontrola jakości

```bash
npm run lint                        # poprawność kodu (eslint, flat config, cztery bloki)
node scripts/validate.mjs           # duplikaty id, kompletność ćwiczeń, statystyki (domyślnie pl)
node scripts/validate.mjs en        # to samo dla nakładki angielskiej
node scripts/parity.mjs             # czy każdy język ma ten sam kształt co polski
node scripts/check_precache.mjs     # czy guska wczyta wszystko, co ładuje index.html
node scripts/check_swversion.mjs [--napraw]   # czy nowe wydanie ma jak się ogłosić
node scripts/check_ogtags.mjs       # czy wysłany komuś link pokaże podgląd
node scripts/build_og.mjs           # przerysowuje obrazek podglądu (Chromium z testów DOM)
node scripts/check_404.mjs          # czy strona 404 działa tam, gdzie jest serwowana
node scripts/baseline.mjs           # liczby tego repozytorium, do tabeli Baseline niżej
node scripts/extract_strings.mjs    # lista zdań do nagrania
uv run --script scripts/build_audio.py --dry-run   # ile plików brakuje
node scripts/serve.mjs 8080         # serwer do testów, zawsze no-store
npm test                            # logika silnika, node:test w piaskownicy node:vm
npm run test:mutations              # czy testy widzą czerwone (66 mutacji, 9 plików)
npm run test:dom                    # zachowanie w przeglądarce, Playwright
npm run test:all                    # obie suity; warunek zamknięcia każdej fazy
node scripts/coverage.mjs [--pelne] [--min 99]   # ile silnika wykonują testy jednostkowe
node scripts/badges.mjs --unit … --dom … --coverage …   # odznaki dla strony profilu
```

Wszystkie te bramki chodzą też same, przy każdym `push`, z
`.github/workflows/ci.yml` — od najtańszej do najdroższej, żeby błąd w danych
zgłosił się w sekundach, a nie po minucie testów w przeglądarce.

`badges.mjs` bramką nie jest i niczego nie sprawdza: czyta raporty trzech
przebiegów powyżej (`reports/`, poza repozytorium) i zapisuje z nich
`badges/test-badge.json` oraz `badges/coverage-badge.json`, które strona
profilu (github.com/AndreaBonn) czyta jako endpointy shields.io. W CI stoi
po testach, a commit z odznakami idzie wyłącznie przy `push` na `main`.
Liczba na odznace to testy jednostkowe RAZEM z DOM, bo dwie suity
odpowiadają za dwie połowy jednego silnika; pokrycie zostaje tym, co mierzy
`coverage.mjs`, czyli pokryciem jednostkowym. Raport, którego nie da się
sparsować, kończy się kodem 1: szara odznaka „N/A" na zielonym buildzie to
awaria, po którą nikt nie sięgnie.

**`npm run lint` nie pilnuje stylu, tylko poprawności.** Reguł kosmetycznych nie
ma i nie należy ich dodawać: formatowanie tego repozytorium jest spójne bez
automatu, a lista zakazów zamieniłaby bramkę w szum. Konfiguracja ma pięć
bloków, bo pliki mają pięć natur (skrypty przeglądarki łączone globalami,
guska z `self`, moduły Node w `scripts/`, CommonJS Playwrighta, którego wnętrze
`page.evaluate` wykonuje się w przeglądarce, i sam `scripts/build_og.mjs`, który
ma tę samą naturę co poprzedni, a inną składnię: moduł z await na górnym
poziomie, więc do tamtego bloku nie wchodzi). Piąty blok wymienia jeden plik,
nie `scripts/**`: pozostałe dziewiętnaście skryptów nigdy nie dotyka
przeglądarki i rozdanie im `document` zamieniłoby tam literówkę w kod, który
wygląda na działający. Uwaga na środowisko: jeśli wynik
mówi `ESLint: 6.4.0`, to odezwał się eslint systemowy, a nie ten z projektu —
wtedy `./node_modules/.bin/eslint .`.

**Zależności są wyłącznie deweloperskie.** `package.json` istnieje dla testów;
`index.html` nie wczytuje z niego niczego, aplikacja nadal startuje z `file://`
bez żadnego pakietu. `npm install` jest potrzebny do uruchomienia testów, nie kursu.

Baseline (do porównania, gdy coś zacznie znikać). **Pierwsze osiem wierszy wypisuje
`node scripts/baseline.mjs`**: przepisanie tej sekcji to skopiowanie jego wyniku, a
zauważenie, że zwietrzała, to `diff`. Cztery ostatnie wiersze liczy się przez
uruchomienie suity, bo przebieg testu to nie to samo co wywołanie `test(` policzone
w pliku, i dlatego każdy z nich niesie swoje własne polecenie.

| Co | Ile | Polecenie |
|---|---|---|
| Jednostki / lekcje / ćwiczenia | 32 / 150 / 1514 | `node scripts/baseline.mjs` |
| Pozycje słownika / rozmowy / hasła gramatyczne | 1412 / 14 / 42 | `node scripts/baseline.mjs` |
| Czytanki / zadania pisane / zbiory par minimalnych | 24 / 6 / 5 | `node scripts/baseline.mjs` |
| Typy ćwiczeń obecnych w danych | 13 | `node scripts/baseline.mjs` |
| Nagrania | 3494 plików mp3, 37 MiB bajtów; 3493 skrótów w indeksie | `node scripts/baseline.mjs` |
| Klucze interfejsu na język | 842 × 5 języków | `node scripts/baseline.mjs` |
| Kroje pisma | 4 plików woff2 w assets/fonts/, 254 KB | `node scripts/baseline.mjs` |
| Pliki silnika | 73 w assets/js/, 14674 linii | `node scripts/baseline.mjs` |
| Testy jednostkowe | 979 przebiegów w 42 plikach, zielone | `npm test` |
| Testy DOM | 271 przebiegów w 36 plikach, zielone | `npm run test:dom` |
| Mutacje | 66 w 9 plikach silnika | `npm run test:mutations` |
| Pokrycie silnika testami jednostkowymi | 99,3%, próg w CI: 99 | `node scripts/coverage.mjs` |

Trzy rzeczy, których tabela nie mieści, a które trzeba przeczytać razem z nią.
Wszystkie trzynaście typów ćwiczeń stoi w danych, ale `truefalse` (27 wystąpień) wyłącznie
w `readings.js`. Kroje są na licencji OFL. **Nagrania liczą się w BAJTACH, nie w zajętości
dysku**: `du` mówi 45 MB, bo pliki mają średnio 11 KB przy blokach po 4 KB, a progi
ADR-010 są postawione na bajtach i tak trzeba je czytać.

Poprzednia wersja tej sekcji mówiła „12 typów, `truefalse` nie występuje w kursie" oraz
„29 testów jednostkowych, 17 DOM". Potem, już po poprawce, mówiła „12 czytanek", kiedy
było ich 24. Za każdym razem zdanie było prawdziwe w dniu, w którym je napisano, i
przestawało być bez niczyjej decyzji. Ręczna poprawka tego nie leczy, bo następna wersja
zwietrzeje tak samo — dlatego liczby wypisuje teraz skrypt, a nie pamięć.

`coverage.mjs` mierzy, ile silnika naprawdę wykonują testy jednostkowe — wbudowane
`--experimental-test-coverage` pokazuje tu 100% i jest to liczba bez treści, bo pliki
silnika wchodzą przez `node:vm` i licznik ich nie widzi. Próg w CI (99) jest po to, żeby
refaktor, który po cichu wypina przetestowaną gałąź z suity, zatrzymał się tam, a nie
przeszedł na zielono. Osiem linii, których nie pokrywa i nie ma pokryć: `apply(root)`
w `i18n.js` (przepisywanie napisów w gotowym HTML — sprawdzają je testy DOM na każdym
ekranie), gałąź obiektowa w serializatorze `errors-key.js` (żadne pole ćwiczenia nie
niesie dziś obiektu) i awaryjny imperfekt w `verbs.js` dla wpisu `IRR` bez własnej
tabeli. Trzy deklaracje, nie trzy przeoczenia.

`mutations.mjs` odpowiada na pytanie, na które pokrycie nie odpowiada: **czy ktoś tę linię
sprawdza**. Pokrycie mówi, że linia się wykonała, a wykonanie nie jest sprawdzeniem —
`assert.ok(!out.includes("js-play"))` przechodzi przez cały generator także wtedy, gdy
generator nie produkuje niczego, i ma przy tym 100% pokrycia. Bramka psuje po jednej
decyzji w silniku (66 mutacji w `cils-html.js`, `lemma-morf.js`, `pwa-rules.js`, `pwa.js`,
`llm-rules.js`, `llm-providers.js`, `llm-prompts.js`, `retention-rules.js` i `ics.js`)
i wymaga, żeby wskazany
plik testów stał się czerwony. Trzy asercje napisane w dniu jej powstania okazały się
puste właśnie tak: pusty blok audio wchodzący do sekcji czytania, `cils-h` łapiące
`cils-hint`, `cils.limit` łapiące `cils.limitLabel`.

Trzy rzeczy, które trzeba o niej wiedzieć:

- **Zasięg jest wąski i zadeklarowany.** Dziewięć plików z siedemdziesięciu trzech. „66/66"
  nie znaczy „silnik sprawdzony", znaczy „te 66 decyzji sprawdzone". Nowy plik z czystymi funkcjami
  to dobry moment na dopisanie wiersza; obowiązku pokrycia całego silnika nie ma.
- **Fragment `z` musi występować w pliku dokładnie raz.** Zero wystąpień (tabela zgniła po
  refaktorze) i wiele wystąpień kończą się błędem, nie ostrzeżeniem: mutacja, która po
  cichu trafia w pierwsze z trzech miejsc, mierzy co innego, niż mówi jej opis.
- **Nie dotyka plików w drzewie roboczym.** Zmutowana kopia leży w katalogu tymczasowym,
  a piaskownica czyta ją przez `LINGUAI_PODMIANA` (`_harness.mjs`). Pierwsza wersja
  mutowała plik w miejscu i przywracała go w `finally` z uchwytem na SIGINT — uchwyt był
  bezużyteczny, bo bramka jest w całości synchroniczna i pętla zdarzeń nie dochodzi do
  głosu przed jej końcem, a samo jego zarejestrowanie wyłączyło domyślne ubicie procesu,
  więc Ctrl+C przestawał ją zatrzymywać.

`parity.mjs` jest bramką dla nowego języka. Nakładki łączą się z warstwą neutralną **po indeksie**,
więc tablica krótsza o jeden element niczego nie wywraca: jedno ćwiczenie po cichu zostaje w
poprzednim języku. Skrypt porównuje kształt (klucze i długości, nie treść) każdej nakładki z polską
i kończy się kodem 1 przy różnicy.

Do testów w przeglądarce służy `scripts/serve.mjs`, nie `python3 -m http.server`.
Ten drugi trzyma stare skrypty mimo zmian na dysku, więc strona pokazuje nieprawdę,
a błędu szuka się w kodzie, który już jest poprawiony. `serve.mjs` odpowiada zawsze
z `Cache-Control: no-store` i nie wychodzi poza katalog projektu.

Suity testowe pilnują rzeczy, których żaden z powyższych skryptów nie widzi. Wspólny
mianownik: każda z nich broni przed awarią, która NIE wywraca kursu — bo te, które go
wywracają, widać bez testu.

- `tests/unit/` — stan i cała logika, która nie dotyka DOM-u. Silnik wjeżdża do
  `node:vm` tym samym wzorcem, co w `validate.mjs`; czas i `localStorage` są
  podstawione, bo `save()` jest zdebouncowane na 180 ms, a pełnej kwoty nie da
  się wywołać inaczej.
  Piaskownica (`tests/unit/_harness.mjs`) udaje dokładnie tyle przeglądarki, ile
  trzeba, żeby przejść gałąź, której inaczej nie da się przejść: uchwyty zdarzeń
  (`el.fire("click")`), kolejkę wstrzykiwanych skryptów (`box.settleScripts`),
  syntezator i odtwarzacz (`voices`, `zachowaniePlay`, `brakSyntezy`),
  rozpoznawanie mowy (`brakRozpoznawania`, `startRzuca`), adres z `hashchange`,
  ustaloną datę (`now` — passa liczy się po dniach) oraz pobieranie pliku
  (`box.pobrania`). Każda z tych atrap ma powód wypisany przy niej.
- `tests/unit/recordings.test.mjs` — zgodność skrótów z Pythonem. Nazwa nagrania
  liczy się dwa razy, w dwóch językach; rozjazd nie daje błędu, tylko cichy zjazd
  na syntezę systemową. Test sprawdza wszystkie zdania z
  `scripts/audio-strings.json` wobec **plików na dysku**, a nie wobec drugiej
  implementacji skrótu.
- `tests/unit/audio.test.mjs` — kaskada nagranie → synteza → cisza i bramka zgody
  przed rozpoznawaniem mowy. To jedyne miejsce, z którego coś opuszcza
  przeglądarkę ucznia, więc odmowa i brak zgody mają tu swoje testy.
- `tests/dom/exercises.spec.js` — kontrakt: `onDone(ok)` woła się **dokładnie raz** dla
  każdego z 14 typów. Na tym opiera się licznik postępu: drugie wywołanie niczego
  nie wywraca, tylko po cichu zawyża wynik.
- `tests/dom/exercises-grading.spec.js` — WERDYKT: każdy typ przechodzi dwa razy, raz
  z odpowiedzią dobrą, raz ze złą. Kontrakt wyżej przepuszcza builder, który każdą
  odpowiedź uznaje za błędną: to nadal „dokładnie raz".
- `tests/dom/routes.spec.js` — każda trasa ma zarejestrowany widok. Router przy braku
  widoku pokazuje ścieżkę nauki zamiast paść (`router.js`), więc zapomniany `<script>`
  wygląda jak działający kurs z jedną pozycją menu prowadzącą gdzie indziej.
- `tests/dom/contrast.spec.js` — kontrast liczony **przez przeglądarkę**, w obu
  motywach. Paleta jest w OKLCH, a zewnętrzne narzędzia a11y czytają
  `oklch(0.31 0.035 350)` jako trójkę RGB i wypisują kanał „350": ich wynik jest
  artefaktem parsera, nie pomiarem. Tutaj kolor idzie na canvas 1×1 i wraca jako
  sRGB, więc konwersję robi silnik i próg jest prawdziwy. Ten gate złapał
  obramowanie zakładki przy 1.58:1 i licznik przy 2.58:1.

`validate.mjs` uruchamia prawdziwe pliki danych w piaskownicy `node:vm` i scala je **tym samym**
`assets/js/i18n-merge.js`, którego używa przeglądarka — sprawdza więc dane po scaleniu, nie ich kopię.
Kończy się kodem 1 przy błędzie, nadaje się do CI.

`extract_strings.mjs` czyta **wyłącznie `data/core/`**. To nie oszczędność, tylko dowód: gdyby
wypowiadany napis mógł mieszkać w nakładce, ten skrypt by go tam nie znalazł. Nagrania nie zależą
od języka wyjaśnień i dopisanie języka nie wymaga generowania ani jednego mp3.

## Czego nie zmieniać bez powodu

- **Kontrastywność wyjaśnień.** Uwagi „w twoim języku jest inaczej” to główna wartość kursu wobec
  Duolingo. Bloki `{contrast:...}` i `{trap:...}` istnieją właśnie po to i są **pisane pod konkretny
  język**, nie tłumaczone z polskiego. Przetłumaczona dosłownie uwaga o polskiej deklinacji jest dla
  Amerykanina poprawna i bezużyteczna naraz.
- **Próg 70%** zaliczenia lekcji (`Core.recordLesson`). Zmiana rozjeżdża opisy w treści lekcji.
- **Kolejność jednostek.** Gramatyka jest kumulatywna: A2 zakłada opanowanie A1, B1 zakłada A2.
- **Klucz `localStorage`** (`linguai.italiano.v2`) i pole `schema`. Zmiana schematu wymaga
  podniesienia numeru **i napisania migracji** w `core.js`, inaczej stare zapisy wczytają się
  w niespójnym stanie. Migracja v1 → v2 (przekluczowanie fiszek na sam włoski) jest tam wzorem.
- **Klucz fiszki to sam włoski.** Gdyby wchodziło w niego tłumaczenie, zmiana języka wyjaśnień
  osierociłaby całą talię: to samo słowo, inny klucz, harmonogram powtórek do wyrzucenia.
