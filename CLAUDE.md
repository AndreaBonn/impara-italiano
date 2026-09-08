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
| `id`, `cefr`, `icon`, `titleIt` | `title`, `theme`, `objectives[]`, całe `theory[]`, całe `culture` |
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
- **W warstwie neutralnej nie ma ani jednego słowa w języku ucznia.** Etykieta konstrukcji pisze
  się po włosku (`dopo aver + participio`, nie `+ imiesłów`), a prompt ćwiczenia po włosku
  (`Colloquiale:`, nie `Potocznie:`). Dopóki polski był jedynym językiem bazowym, taki wyciek był
  niewidoczny: wyglądał jak poprawny tekst. Sprawdzenie to grep po `[ąęłżźćńś]` w `data/core/`
  — jedyne trafienia to nagłówki plików.

Tablice łączą się **po indeksie**, więc ich długość musi być identyczna po obu stronach.
`LINGUAI.applyStrings(lang)` (`assets/js/i18n.js`) jest idempotentne i nigdy nie nadpisuje pól
neutralnych — dlatego drugi język można nałożyć na te same obiekty bez przeładowania strony.

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
node scripts/validate.mjs           # duplikaty id, kompletność ćwiczeń, statystyki (domyślnie pl)
node scripts/validate.mjs en        # to samo dla nakładki angielskiej
node scripts/parity.mjs             # czy każdy język ma ten sam kształt co polski
node scripts/extract_strings.mjs    # lista zdań do nagrania
uv run --script scripts/build_audio.py --dry-run   # ile plików brakuje
python3 -m http.server 8080         # serwer do testów w przeglądarce
```

`parity.mjs` jest bramką dla nowego języka. Nakładki łączą się z warstwą neutralną **po indeksie**,
więc tablica krótsza o jeden element niczego nie wywraca: jedno ćwiczenie po cichu zostaje w
poprzednim języku. Skrypt porównuje kształt (klucze i długości, nie treść) każdej nakładki z polską
i kończy się kodem 1 przy różnicy.

Do testów w przeglądarce lepszy jest serwer bez cache. Zwykły `http.server` trzyma stare skrypty
mimo zmian na dysku i strona pokazuje nieprawdę:

```python
class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()
```

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
