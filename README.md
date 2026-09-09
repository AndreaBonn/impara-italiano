# Impara l'Italiano 🇮🇹

Kurs języka włoskiego dla osób mówiących po polsku. Od zera (A1) do poziomu biegłości (C2).
Działa w przeglądarce, nie wymaga konta ani internetu po pierwszym wczytaniu, a postępy zapisują się na Twoim urządzeniu.

## Co jest w środku

- **150 lekcji** ułożonych w 32 tematyczne jednostki, od powitania w barze po język prawniczy i ironię
- **1500 ćwiczeń** w trzynastu formatach: wybór, prawda/fałsz, uzupełnianie luk, tłumaczenie, układanie zdań, łączenie w pary, odmiana czasowników, dyktando ze słuchu i wymowa do mikrofonu
- **14 rozmów na głos**: aplikacja mówi po włosku, Ty odpowiadasz — bar, przedstawianie się, targ, restauracja, dworzec, lekarz, wynajem mieszkania, rozmowa o pracę, urząd, dyskusja przy stole. W czterech z nich rozmowa się rozwidla: to, co powiesz, zmienia jej dalszy ciąg, a po dojściu do końca możesz wrócić do wyboru i zobaczyć drugą gałąź
- **1400 słówek** z wymową i systemem powtórek, który przypomina o nich dokładnie wtedy, kiedy zaczynasz zapominać
- **Głos lektorski**, nie robot: każde włoskie zdanie kursu jest nagrane głosem neuronowym (Isabella), a rozmówca w dialogach mówi drugim głosem (Giuseppe)
- **Gramatyka od A do Z**: 42 hasła obejmujące pełny program CEFR
- **Odmiana czasowników**: wpisujesz dowolny bezokolicznik, dostajesz czternaście czasów i trybów

Wyjaśnienia są po polsku i wprost mówią, gdzie włoski działa inaczej niż polski — bo tam właśnie robi się błędy.

## Jak zacząć

**Najprościej:** otwórz plik `index.html` podwójnym kliknięciem.

**Zalecane** (pełna funkcjonalność, bez ograniczeń przeglądarki):

```bash
cd versione-statica
python3 -m http.server 8080
```

Potem wejdź na `http://localhost:8080`.

### Mówienie i słuchanie

**Czytanie na głos** działa wszędzie i brzmi tak samo na każdym systemie, bo to nagrania,
a nie synteza w przeglądarce. Nic nie musisz instalować.

**Rozpoznawanie mowy** (ćwiczenia, w których mówisz do mikrofonu) wymaga Chrome, Edge albo
Safari 16+ oraz połączenia szyfrowanego: działa na `localhost` i po opublikowaniu na HTTPS,
ale nie po otwarciu pliku z dysku. W pozostałych przypadkach te ćwiczenia zamieniają się
w pisane — kurs działa dalej, tylko bez oceny wymowy.

**To jedyne miejsce, w którym coś opuszcza Twoje urządzenie.** Rozpoznawanie mowy nie liczy
się w przeglądarce: przeglądarki, które je udostępniają, wysyłają nagranie Twojego głosu na
serwer swojego dostawcy i odsyłają tekst. Nie mamy nad tym kontroli i nie da się tego zrobić
inaczej bez własnego serwera, którego kurs celowo nie ma. Dotyczy to ćwiczeń z mikrofonem
i rozmów na głos; **nie** dotyczy niczego innego — teoria, ćwiczenia pisane, słuchanie,
fiszki i postępy zostają u Ciebie. Jeśli Ci to nie odpowiada, nie dotykaj mikrofonu: te
ćwiczenia same zamieniają się w pisane i kurs działa w całości.

Jedyne miejsce z głosem systemowym to **odmiana czasowników**: generuje dowolne formy,
więc nie da się ich nagrać z góry.

## Postępy

Wszystko zapisuje się lokalnie w przeglądarce. Nie ma serwera, konta ani śledzenia, a kurs
nie wysyła Twoich postępów nigdzie — jedynym wyjątkiem jest rozpoznawanie mowy opisane wyżej,
i tylko wtedy, gdy sam włączysz mikrofon. W zakładce **Ustawienia** możesz wyeksportować
postępy do pliku i wczytać je na innym komputerze.

Wyczyszczenie danych przeglądarki kasuje postępy. Warto co jakiś czas zrobić eksport.

## Jak jest zbudowany kurs

Program gramatyczny odpowiada sylabusowi referencyjnemu dla języka włoskiego jako obcego
(CLIQ / uniwersytety dla obcokrajowców w Sienie i Perugii), poziom po poziomie:

| Poziom | Nazwa | Główna gramatyka |
|---|---|---|
| A1 | Pierwszy kontakt | czas teraźniejszy, rodzajniki, rodzaj i liczba, czasowniki zwrotne |
| A2 | Radzę sobie sam | imperfetto, futuro, zaimki dopełnienia, tryb rozkazujący |
| B1 | Próg samodzielności | congiuntivo, zaimki połączone, zdania względne, mowa zależna |
| B2 | Swoboda | congiuntivo imperfetto, okresy warunkowe, strona bierna, passato remoto |
| C1 | Skuteczność | wartości *si*, czasowniki z zaimkami, rejestry, spójność tekstu |
| C2 | Biegłość | imiesłowy, peryfrazy, trudna liczba mnoga, ironia, latynizmy |

Każda jednostka kończy się sprawdzianem, każdy poziom egzaminem. Próg zaliczenia to 70%.

## Struktura plików

```
index.html              powłoka aplikacji
assets/css/app.css      cały wygląd
assets/fonts/           Fraunces i Inter, u siebie (kurs nie odpytuje cudzych domen)
assets/js/
  core.js               stan, zapis postępów, harmonogram powtórek
  fsrs.js               harmonogram fiszek (FSRS; quaderno błędów został na SM-2)
  i18n.js               nakładanie języka wyjaśnień na dane kursu
  audio.js              nagrania lektorskie, synteza i rozpoznawanie mowy
  verbs.js              silnik odmiany czasowników
  exercises.js          trzynaście typów ćwiczeń
  views.js              ekrany aplikacji
  views-*.js            pojedyncze ekrany wyjęte z views.js (rozmowy, trening, czytanki…)
  app.js                router i start
data/
  core/                 warstwa neutralna: struktura, włoski, klucze odpowiedzi
    curriculum-index.js   mapa poziomów
    a1-*.js … c2-*.js     treść lekcji
    conversations.js      scenariusze rozmów
    grammar-reference.js  encyklopedia gramatyczna
  i18n/<lang>/          wyjaśnienia w języku ucznia (pl, en, es, fr, de)
  audio-index.js        skróty zdań, które mają nagranie (generowany)
audio/<xx>/<hash>.mp3   nagrania lektorskie (generowane)
sw.js                   praca bez sieci
scripts/
  validate.mjs          kontrola spójności danych
  parity.mjs            czy każdy język ma ten sam kształt co polski
  check_precache.mjs    czy guska wczyta wszystko, co ładuje index.html
  extract_strings.mjs   lista zdań do nagrania
  build_audio.py        generowanie nagrań (uv + edge-tts + ffmpeg)
```

## Dodawanie własnych lekcji

Treść jest oddzielona od silnika, a od kiedy kurs mówi w pięciu językach — także od
wyjaśnień. Jednostka mieszka więc w dwóch plikach o tej samej nazwie.

W `data/core/` idzie to, co jest włoskie, sprawdza odpowiedź albo trzyma strukturę:

```js
LINGUAI.addUnits("A1", [{
  id: "a1-u11", icon: "🚲", titleIt: "In bicicletta",
  lessons: [ /* … */ ],
  test: { /* … */ }
}]);
```

W `data/i18n/<lang>/` idzie to, co uczeń czyta po swojemu — same napisy, ta sama kolejność:

```js
LINGUAI.addStrings("pl", {
  "unit:a1-u11": { title: "Rowerem po mieście", grammarNote: "przyimki ruchu" },
  "lesson:a1-u11-l1": { title: "…", theme: "…", objectives: [ /* … */ ] }
});
```

Tablice łączą się **po indeksie**, więc po obu stronach muszą mieć tyle samo elementów.
Uwaga kontrastywna („w twoim języku jest inaczej") pisze się dla każdego języka od nowa,
nie tłumaczy: to, co dla Polaka jest pułapką, dla Amerykanina bywa nieistotne.

Po dopisaniu uruchom kontrolę:

```bash
node scripts/validate.mjs      # duplikaty id, kompletność ćwiczeń, statystyki
node scripts/parity.mjs        # czy każdy język ma ten sam kształt co polski
```

Pierwszy sprawdza duplikaty identyfikatorów, kompletność ćwiczeń i zgodność liczby luk z
liczbą odpowiedzi. Drugi pilnuje, żeby nakładka krótsza o jeden element nie zostawiła po
cichu jednego ćwiczenia w poprzednim języku. Oba zwracają kod błędu, jeśli coś się nie zgadza.

Nowe zdania włoskie nie mają jeszcze nagrania i odezwą się głosem systemowym. Żeby je dograć:

```bash
node scripts/extract_strings.mjs
uv run --script scripts/build_audio.py
```

Potrzebne są `ffmpeg` i dostęp do sieci (skrypt korzysta z Edge TTS). Nazwy plików pochodzą
z treści zdania, więc powtórne uruchomienie dogrywa **tylko** to, czego brakuje — istniejące
nagrania zostają nietknięte.

## Licencja i źródła

Treść dydaktyczna napisana od zera. Program gramatyczny oparty na publicznie dostępnych sylabusach
referencyjnych dla włoskiego jako języka obcego. Fonty: Fraunces i Inter (SIL Open Font License).
