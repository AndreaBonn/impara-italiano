# CLAUDE.md — Impara l'Italiano

Statyczna platforma do nauki włoskiego z wyjaśnieniami w języku ucznia. Bez backendu,
bez build stepu, bez zależności zewnętrznych poza fontami Google.

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
`LINGUAI.applyStrings(lang)` (`assets/js/i18n.js`) jest idempotentne i nigdy nie nadpisuje pól
neutralnych — dlatego drugi język można nałożyć na te same obiekty bez przeładowania strony.

### Ćwiczenie
Typ w polu `t`. Czternaście typów obsługiwanych w `assets/js/exercises.js`:
`mcq`, `multi`, `truefalse`, `fill`, `trans`, `cloze`, `order`, `match`, `conj`, `gender`,
`listen`, `speak`, `dialogue`, `minpair`. Każdy builder zwraca `{html, wire(root, onDone)}`.
`onDone(ok)` wywoływane **dokładnie raz** — na tym opiera się licznik postępu lekcji oraz
przechwytywanie błędów, które owija `wire` (`assets/js/errors.js`).

`minpair` nie stoi w żadnej lekcji: powstaje w czasie działania z `data/core/phonetics.js`.
`truefalse` też nie występuje w danych, choć silnik go zna.

### Odmiana czasowników
`Verbs.conjugate(infinito, tenseKey)` zwraca sześć form albo `null` na pozycjach bez formy
(np. `io` w trybie rozkazującym). Klucze czasów: `pres, passPross, imperf, trapPross, futuro,
futAnt, remoto, condizionale, condPass, cong, congPass, congImp, congTrap, imper`.
Nieregularne siedzą w tablicy `IRR`; reszta jest wyprowadzana regułami, łącznie ze zmianami
ortograficznymi (`-care/-gare/-ciare/-giare/-iare`).

## Dźwięk

Głos kursu to **nagrania**, nie synteza w przeglądarce. Powód: na Linuksie Web Speech API
sięga zwykle po espeak-ng (synteza formantowa, brzmi mechanicznie), a jakość na pozostałych
systemach jest nieprzewidywalna. Backend odpadał, bo zabiłby statyczność.

- **Głosy**: `it-IT-IsabellaNeural` (główny), `it-IT-GiuseppeMultilingualNeural` (rozmówca
  w dialogach i konwersacjach). Zmiana głosu = zmiana stałej w `scripts/build_audio.py`
  i pełny przebieg z `--force`.
- **Nazwa pliku** = FNV-1a 64-bit treści napisu, `audio/<xx>/<hash>.mp3`. Ta sama funkcja
  po obu stronach: `audio_hash()` w Pythonie i `hashText()` w `assets/js/audio.js`.
  **Zmiana jednej wymaga zmiany drugiej** — inaczej wszystkie nagrania stają się nieosiągalne.
- **Indeks**: `data/audio-index.js` to sklejone, posortowane skróty. `audio.js` szuka w nim
  binarnie, więc rozstrzygnięcie „jest nagranie czy nie" jest synchroniczne i nie generuje 404.
  Plik musi być wczytany **przed** `audio.js` — kolejność w `index.html` jest istotna.
- **Normalizacja**: `norm()` (zwężenie białych znaków + trim) musi być identyczna
  w `extract_strings.mjs` i w `audio.js`. Rozjazd = cicha ucieczka do syntezy systemowej.
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
  jedyną wersją jest `SW_VERSION` podnoszone ręcznie. Zapomniane podniesienie przy
  cache-first zamraża ucznia na starym kodzie: on tego nie zauważy ani nie odkręci,
  a my nie zobaczymy tego w żadnym logu.

Rejestracja idzie **tylko po http(s)** (`registerWorker()` w `app.js`). Z `file://`
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
node scripts/extract_strings.mjs    # lista zdań do nagrania
uv run --script scripts/build_audio.py --dry-run   # ile plików brakuje
node scripts/serve.mjs 8080         # serwer do testów, zawsze no-store
npm test                            # logika silnika, node:test w piaskownicy node:vm
npm run test:dom                    # zachowanie w przeglądarce, Playwright
npm run test:all                    # obie suity; warunek zamknięcia każdej fazy
```

Wszystkie te bramki chodzą też same, przy każdym `push`, z
`.github/workflows/ci.yml` — od najtańszej do najdroższej, żeby błąd w danych
zgłosił się w sekundach, a nie po minucie testów w przeglądarce.

**`npm run lint` nie pilnuje stylu, tylko poprawności.** Reguł kosmetycznych nie
ma i nie należy ich dodawać: formatowanie tego repozytorium jest spójne bez
automatu, a lista zakazów zamieniłaby bramkę w szum. Konfiguracja ma cztery
bloki, bo pliki mają cztery natury (skrypty przeglądarki łączone globalami,
guska z `self`, moduły Node w `scripts/`, CommonJS Playwrighta, którego wnętrze
`page.evaluate` wykonuje się w przeglądarce). Uwaga na środowisko: jeśli wynik
mówi `ESLint: 6.4.0`, to odezwał się eslint systemowy, a nie ten z projektu —
wtedy `./node_modules/.bin/eslint .`.

**Zależności są wyłącznie deweloperskie.** `package.json` istnieje dla testów;
`index.html` nie wczytuje z niego niczego, aplikacja nadal startuje z `file://`
bez żadnego pakietu. `npm install` jest potrzebny do uruchomienia testów, nie kursu.

Baseline (do porównania, gdy coś zacznie znikać). Zmierzona, nie zapamiętana: liczby niżej
pochodzą z uruchomienia `node scripts/validate.mjs`, `npm test` i `npm run test:dom`, a nie
z poprzedniej wersji tego pliku.

| Co | Ile |
|---|---|
| Jednostki / lekcje / ćwiczenia | 32 / 150 / 1514 |
| Pozycje słownika / rozmowy / hasła gramatyczne | 1412 / 14 / 42 |
| Czytanki / zadania pisane / zbiory par minimalnych | 12 / 6 / 5 |
| Kroje pisma | 4 pliki woff2 w `assets/fonts/`, 254 KB, OFL |
| Typy ćwiczeń obecnych w danych | **13** (`truefalse` 27 wystąpień, wszystkie w `readings.js`) |
| Nagrania | 2657 plików mp3, 34 MB |
| Klucze interfejsu na język | 671 × 5 języków |
| Testy jednostkowe | 371 przebiegów, zielone |
| Testy DOM | 141 deklaracji, 160 przebiegów, zielone |

Poprzednia wersja tej sekcji mówiła „12 typów, `truefalse` nie występuje w kursie" oraz
„29 testów jednostkowych, 17 DOM". Były prawdziwe w dniu wprowadzenia suity i przestały być
prawdziwe bez niczyjej decyzji — dlatego liczby stoją teraz w tabeli z podanym poleceniem,
które je odtwarza.

`parity.mjs` jest bramką dla nowego języka. Nakładki łączą się z warstwą neutralną **po indeksie**,
więc tablica krótsza o jeden element niczego nie wywraca: jedno ćwiczenie po cichu zostaje w
poprzednim języku. Skrypt porównuje kształt (klucze i długości, nie treść) każdej nakładki z polską
i kończy się kodem 1 przy różnicy.

Do testów w przeglądarce służy `scripts/serve.mjs`, nie `python3 -m http.server`.
Ten drugi trzyma stare skrypty mimo zmian na dysku, więc strona pokazuje nieprawdę,
a błędu szuka się w kodzie, który już jest poprawiony. `serve.mjs` odpowiada zawsze
z `Cache-Control: no-store` i nie wychodzi poza katalog projektu.

Suity testowe pilnują dwóch rzeczy, których żaden z powyższych skryptów nie widzi:

- `tests/unit/` — stan. `merge`, `load`, `save`, `importState`, harmonogram SM-2
  i próg zaliczenia lekcji. Silnik wjeżdża do `node:vm` tym samym wzorcem, co
  w `validate.mjs`; czas i `localStorage` są podstawione, bo `save()` jest
  zdebouncowane na 180 ms, a pełnej kwoty nie da się wywołać inaczej.
- `tests/dom/` — kontrakt ćwiczeń. `onDone(ok)` woła się **dokładnie raz** dla
  każdego z 13 typów. Na tym opiera się licznik postępu: drugie wywołanie niczego
  nie wywraca, tylko po cichu zawyża wynik.
- `tests/dom/contrast.spec.js` — kontrast liczony **przez przeglądarkę**, w obu
  motywach. Paleta jest w OKLCH, a zewnętrzne narzędzia a11y czytają
  `oklch(0.31 0.035 350)` jako trójkę RGB i wypisują kanał „350": ich wynik jest
  artefaktem parsera, nie pomiarem. Tutaj kolor idzie na canvas 1×1 i wraca jako
  sRGB, więc konwersję robi silnik i próg jest prawdziwy. Ten gate złapał
  obramowanie zakładki przy 1.58:1 i licznik przy 2.58:1.

`validate.mjs` uruchamia prawdziwe pliki danych w piaskownicy `node:vm` i scala je **tym samym**
`assets/js/i18n.js`, którego używa przeglądarka — sprawdza więc dane po scaleniu, nie ich kopię.
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
