# CLAUDE.md — Impara l'Italiano

Statyczna platforma do nauki włoskiego z wyjaśnieniami po polsku. Bez backendu, bez build stepu,
bez zależności zewnętrznych poza fontami Google.

## Zasady techniczne projektu

- **Skrypty klasyczne, nie moduły ES.** Cała aplikacja musi działać także z `file://`. Moduły ES
  i `fetch()` są tam blokowane przez CORS — dlatego dane są plikami `.js` przypisującymi do globali,
  a nie JSON-em pobieranym przez `fetch`.
- **Zero zależności runtime.** Żadnego frameworka, bundlera ani polyfilli. Wszystko w czystym ES5+
  zgodnym z przeglądarkami od 2020.
- **Dane oddzielone od silnika.** Pliki w `data/` zawierają wyłącznie treść. Logika renderowania
  siedzi w `assets/js/` i nie wie nic o konkretnych lekcjach.
- **Leniwe ładowanie poziomów.** `Core.loadLevelData(code, cb)` wstrzykuje `<script>` dla plików
  danego poziomu. Nowy poziom = wpis w `data/curriculum-index.js` z tablicą `dataFiles`.

## Kontrakty

### Lekcja
```js
{ id, cefr, themePl, titleIt, titlePl, objectivesPl[],
  theory[], grammar{title,note,table{head,rows},examples[]},
  vocab[{it,pl,ex}], dialogue{titleIt,lines[]}, culture{titlePl,textPl},
  exercises[] }
```
Pola `theory[]` przyjmują stringi albo obiekty: `{h,p}`, `{list}`, `{trap}`, `{pl}`, `{tip}`.
Zawartość `p`, `trap`, `pl`, `tip` jest wstawiana jako HTML (celowo, dla wyróżnień) — nie wolno tam
wstawiać treści pochodzącej od użytkownika.

### Ćwiczenie
Typ w polu `t`. Dwanaście typów obsługiwanych w `assets/js/exercises.js`:
`mcq`, `multi`, `truefalse`, `fill`, `trans`, `cloze`, `order`, `match`, `conj`, `gender`,
`listen`, `speak`, `dialogue`. Każdy builder zwraca `{html, wire(root, onDone)}`.
`onDone(ok)` wywoływane **dokładnie raz** — na tym opiera się licznik postępu lekcji.

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

## Kontrola jakości

```bash
node scripts/validate.mjs           # duplikaty id, kompletność ćwiczeń, statystyki
node scripts/extract_strings.mjs    # lista zdań do nagrania
uv run --script scripts/build_audio.py --dry-run   # ile plików brakuje
python3 -m http.server 8080         # serwer do testów w przeglądarce
```

`validate.mjs` uruchamia pliki danych w piaskownicy `node:vm` ze stubem `LINGUAI`, więc sprawdza
prawdziwe dane, nie ich kopię. Kończy się kodem 1 przy błędzie — nadaje się do CI.

## Czego nie zmieniać bez powodu

- **Wyjaśnienia po polsku.** Kurs jest adresowany do Polaków; kontrastywne uwagi „po polsku jest
  inaczej” to jego główna wartość wobec Duolingo. Bloki `{pl:...}` w teorii istnieją właśnie po to.
- **Próg 70%** zaliczenia lekcji (`Core.recordLesson`). Zmiana rozjeżdża opisy w treści lekcji.
- **Kolejność jednostek.** Gramatyka jest kumulatywna: A2 zakłada opanowanie A1, B1 zakłada A2.
- **Klucz `localStorage`** (`linguai.italiano.pl.v1`) i pole `schema`. Zmiana schematu wymaga
  podniesienia numeru, inaczej stare zapisy wczytają się w niespójnym stanie.
