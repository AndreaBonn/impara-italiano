# Report attività — Impara l'Italiano

## 2026-09-09 — Promemoria di backup ogni dieci lezioni

**Tag:** `feat` `stato` `a11y`

### Punto di partenza: account e sincronizzazione, valutati e scartati

La richiesta iniziale era un login con progressi sincronizzati fra dispositivi, restando su
GitHub Pages. Il vincolo è netto: GitHub Pages serve file statici in sola lettura, quindi non
esiste un punto in cui il browser possa depositare byte. Scrivere in un repo o in un Gist via
API richiede un token con permesso di scrittura, e quel token finirebbe nel JavaScript che
chiunque può leggere.

Le vie praticabili passavano tutte per un servizio terzo:

| Opzione | Costo reale |
|---|---|
| Firebase Auth + Firestore | gratis, nessuna sospensione per inattività, regole al posto di codice server |
| Supabase | il progetto free va in pausa dopo 7 giorni di inattività, cioè proprio lo scenario di un corso personale |
| Codice di sincronizzazione senza account (Firestore o Cloudflare KV) | nessuna email né password, ma il codice perso non si recupera |

Decisione dell'utente: niente account e niente servizi esterni, i progressi restano in
`localStorage` su un solo dispositivo.

### Conseguenza: l'unica copia è quella che lo studente salva a mano

Con quella scelta, l'export in Impostazioni smette di essere una comodità e diventa la sola
rete di sicurezza. Safari cancella lo storage dopo sette giorni in cui il sito non viene
aperto (l'eccezione è il corso installato sulla schermata home), e una pulizia dei dati di
navigazione basta ovunque. Da qui il promemoria.

### Implementazione

Contenitore `backup` aggiunto allo stato, con `SCHEMA` fermo a 2 perché nessun campo esistente
cambia significato. Due campi, non uno:

- `at`: lezioni completate al momento dell'ultima copia salvata. Lo muove solo un export.
- `snoozed`: lezioni completate quando lo studente ha chiuso l'avviso. Vale come "non ora".

Tenerli separati serve a non far passare una chiusura dell'avviso per una copia fatta. Il
controllo sta in `recordLesson`, non nella schermata di fine lezione, perché anche le
conversazioni la chiamano: un solo passaggio obbligato invece di due punti da ricordare, come
già fa il consenso al microfono in `Audio2.listen`.

`notice()` accetta ora un'azione e un gestore di chiusura, quindi l'avviso porta il bottone che
scarica il file invece di rimandare a Impostazioni. Il download vive in `Core.downloadBackup()`
e lo usano entrambi i punti; imposta il marcatore prima di serializzare, altrimenti il file
uscirebbe con un valore vecchio e chiederebbe una copia nuova appena reimportato.

### Due difetti trovati dai test, non a mente

| Difetto | Come è emerso |
|---|---|
| Chiuso l'avviso, tornava alla lezione successiva e poi a ogni lezione | test DOM sulla chiusura: `notice()` azzera il flag di deduplica, e con la soglia ancora superata l'avviso rientrava subito. Da qui il campo `snoozed` |
| Il bottone si sovrapponeva all'ultima riga di testo a 1280 px | screenshot: `.btn` è `inline-flex`, quindi restava nel flusso del paragrafo e `margin-top` lo spingeva sopra il testo invece di staccarlo |

Il gate di contrasto ha bocciato anche la prima versione del bottone: `btn--ghost` dentro
l'avviso dava un bordo a 1.58:1 in tema chiaro e 1.80:1 in scuro, contro una soglia di 3:1.
Sostituito con `btn--primary`, che si distingue per riempimento. Il misuratore in
`tests/dom/contrast.spec.js` ha ora anche il campo `wypelnienie`, cioè il contrasto fra lo
sfondo di un controllo e quello che gli sta sotto: una superficie piena non si valuta sul bordo.

### Verifiche

| Gate | Esito |
|---|---|
| `npm test` | 371 verdi |
| `npm run test:dom` | 158 verdi, inclusi 4 nuovi sul promemoria e 2 di contrasto sull'avviso |
| `node scripts/parity.mjs` | forma identica nelle cinque lingue |
| `node scripts/validate.mjs` | nessun errore |
| Render a 375 e 1280 px, temi chiaro e scuro | osservato, nessuna sovrapposizione dopo il fix |
| Click sul bottone dell'avviso | scarica `impara-italiano-<lang>-<data>.json` e riporta la soglia a zero |

Le stringhe nuove (`core.backupDue`, `core.backupSave`) sono scritte nelle cinque lingue con le
forme plurali richieste da ciascuna, non tradotte da una sola.

## 2026-09-08 — Sostituzione della voce: da espeak-ng a lettore neurale

**Tag:** `feat` `audio`

### Problema

La voce del corso suonava meccanica. Diagnosi misurata, non ipotizzata:

| Verifica | Esito |
|---|---|
| Moduli speech-dispatcher installati | solo `sd_espeak-ng` — sintesi a formanti |
| Voci italiane esposte al browser (`getVoices()`) | **0** |
| Voci italiane neurali disponibili su Edge TTS | 4 |

Non era una selezione sbagliata dentro l'app: sul sistema il Web Speech API non ha accesso
a nulla di meglio. Cambiare la logica di `pickVoice()` non avrebbe cambiato il suono.

### Vincolo

Il progetto di riferimento (`text-to-speech`) usa `edge-tts`, ma è un'API non ufficiale
Microsoft che richiede un token firmato: chiamarla dal browser di un sito statico è fragile
e fuori dai termini d'uso, e un backend proxy avrebbe distrutto il requisito portante
(sito statico, `file://` e GitHub Pages).

### Soluzione: sintesi spostata dal runtime al build

L'insieme delle frasi italiane del corso è finito, quindi si può registrare in anticipo.

| | |
|---|---|
| Frasi distinte estratte | **2530** (2439 voce principale + 91 interlocutore) |
| Voci | `it-IT-IsabellaNeural` (principale), `it-IT-GiuseppeMultilingualNeural` (interlocutore) |
| Formato | MP3 mono 24 kHz, 32 kbps |
| Peso totale | **26,2 MB** (media 10,6 KB per frase) |
| Indice | 40 KB, caricato una volta |
| Download per l'utente | solo il file premuto, ~11 KB |

**Estrazione dalle strutture reali, non da regex.** `scripts/extract_strings.mjs` carica i file
dati in una sandbox `node:vm` e cammina sul grafo di oggetti: nessun campo che finisce in un
pulsante 🔊 può sfuggire per una regex imprecisa.

**Nomi da hash del contenuto.** FNV-1a 64-bit, stessa funzione in Python (`audio_hash`) e in JS
(`hashText`). Conseguenza pratica: rigenerare dopo aver aggiunto lezioni crea solo i file nuovi,
quindi la storia git non si gonfia a ogni build.

**Ricaduta sul coniugatore.** Genera forme arbitrarie, non registrabili in anticipo: resta sulla
sintesi di sistema. Coprirlo per i 70 verbi comuni costerebbe 2694 forme nei tempi semplici
(~16 MB) o 4996 su tutti i 14 tempi (~32 MB). Rimandato, non dimenticato.

### Verifica

| Gate | Esito |
|---|---|
| Hash Python vs JS, 12 stringhe con accenti ed em-dash | 12/12 identici |
| Riproduzione reale (log del server) | `GET /audio/dc/…mp3 200`, nessun 404 su MP3 |
| **Sweep di verità**: ogni `[data-say]` renderizzato in 17 lezioni + 10 conversazioni | 269 pulsanti, **0 senza registrazione** |
| Parametri di codifica (`ffprobe`) | 24000 Hz, mono, 32 kb/s — come richiesto |
| Console su 12 rotte | 0 errori, 0 warning |
| axe-core WCAG 2.2 A/AA (impostazioni, lezione, coniugatore × 2 temi) | 0 violazioni |
| `verify_responsive` 320/375/414/768 px | nessun overflow |
| `scripts/validate.mjs` | 0 errori |
| Generazione | 2530/2530, exit 0, nessun fallimento |

### Dettagli di implementazione da non perdere

- **Blocco autoplay ≠ file mancante.** Se `play()` viene rifiutato con `NotAllowedError`
  (nessun gesto utente precedente) il codice **non** ripiega sulla sintesi di sistema: sarebbe
  la voce robotica al posto del lettore. Resta in silenzio, il pulsante dell'utente è il gesto.
- **Ordine degli script.** `data/audio-index.js` deve precedere `assets/js/audio.js`.
- **Ricerca binaria sull'indice**, non `indexOf`: record a lunghezza fissa, niente falsi positivi
  a cavallo di due skrót.
- **Tempo di lettura** ora è `playbackRate`, non `SpeechSynthesisUtterance.rate`: Chrome conserva
  l'altezza, quindi il rallentamento resta naturale.

### Limiti

- Rigenerare con una voce diversa richiede `--force` e riscarica tutto (~26 MB).
- `edge-tts` è un'API non ufficiale: se Microsoft la chiude, i file già generati restano validi,
  ma non se ne potranno aggiungere di nuovi con quelle voci.
- Il coniugatore resta sulla voce di sistema.

## 2026-09-08 — Budowa platformy od bozzy do kursu A1–C2

**Tag:** `feat` `content` `a11y`

### Punkt wyjścia

Jeden plik `impara-italiano-pl.html` (1026 linii): 20 poziomów A1–A2, dwa typy ćwiczeń
(wybór, uzupełnianie luki), dane i silnik zmieszane w jednym `<script>`, brak dźwięku,
brak powtórek, brak nawigacji poza listą poziomów.

### Co powstało

Statyczna platforma bez backendu i bez build stepu, działająca także z `file://`.

| Obszar | Stan |
|---|---|
| Lekcje | 150 w 32 jednostkach, A1 → C2 |
| Ćwiczenia | 1514 w 12 typach |
| Słownictwo | 1410 pozycji z wymową i powtórkami SM-2 |
| Rozmowy głosowe | 10 scenariuszy (bar, targ, restauracja, dworzec, lekarz, wynajem, rekrutacja, urząd, debata) |
| Encyklopedia gramatyki | 42 hasła, pełny sylabus CEFR |
| Koniugator | 14 czasów i trybów, regularne + 45 nieregularnych + zmiany ortograficzne |

Rozkład treści: A1 10 jednostek / 50 lekcji, A2 8/40, B1 4/20, B2 4/16, C1 3/12, C2 3/12.

### Decyzje architektoniczne

1. **Skrypty klasyczne zamiast modułów ES.** Wymóg działania z `file://` wyklucza `fetch()`
   i `import` (CORS). Dane są plikami `.js` rejestrującymi się przez `LINGUAI.addUnits()`.
2. **Leniwe ładowanie poziomów.** Start pobiera tylko A1 (50 lekcji); pozostałe poziomy
   dociągają się przez wstrzyknięcie `<script>` przy pierwszym wejściu.
3. **Dane oddzielone od silnika.** `assets/js/` nie wie nic o konkretnych lekcjach;
   dodanie jednostki nie wymaga dotykania kodu.
4. **Silnik odmiany zamiast tabel w treści.** `Verbs.conjugate()` wyprowadza formy regułami,
   więc ćwiczenie typu `conj` podaje tylko czasownik i czas — nie ma szansy na rozjazd
   między treścią a poprawną odpowiedzią.

### Program nauczania

Sylabus gramatyczny oparty na dokumentach referencyjnych dla włoskiego jako języka obcego
(CLIQ, uniwersytety dla obcokrajowców w Sienie i Perugii), pobranych i przepisanych na
strukturę jednostek. Każda lekcja zawiera blok kontrastywny PL–IT w miejscach, gdzie języki
się rozjeżdżają (rodzajniki, `piacere`, `stare`, congiuntivo, przyszłość w przeszłości).

Tematy dobrane pod dorosłego uczącego się: aperitivo, moda i rozmiary, wynajem mieszkania,
codice fiscale, rozmowa kwalifikacyjna, prasa, ekonomia, biurokracja, ironia, latynizmy.

### Weryfikacja

| Gate | Wynik |
|---|---|
| `node scripts/validate.mjs` | OK — 0 błędów, 0 ostrzeżeń |
| `node --check` na 18 plikach JS | OK |
| axe-core WCAG 2.2 A/AA, 6 widoków × 2 motywy | 0 naruszeń |
| `verify_responsive` 320/375/414/768 px, 6 widoków | brak przewijania poziomego |
| Silnik odmiany, 49 par czasownik/czas | wszystkie formy poprawne |
| Przebieg lekcji end-to-end w przeglądarce | 10/10, podsumowanie, zapis postępu |
| SM-2: ocena fiszki | ef 2.5→2.6, interwał 1 dzień, licznik spadł |
| Rozmowa głosowa, tura pisana | odpowiedź przyjęta, dialog przeszedł dalej |
| Konsola przeglądarki, 13 tras | 0 błędów, 0 ostrzeżeń |

**Nie zweryfikowane:** `verify_states` z pakietu a11y-gate nie potrafi odczytać wartości
zapisanych w OKLCH (traktuje `oklch(0.44 0.15 14)` jako trójkę RGB), więc jego 240 „porażek”
to artefakt narzędzia, nie defekt. Kontrast stanów hover i focus zmierzono osobno, przez
konwersję OKLCH → sRGB w silniku przeglądarki: 17 par, wszystkie ≥ 4.5:1 po poprawkach.

### Naprawione w trakcie weryfikacji

- **Kontrast palety.** Siedem tokenów nie przechodziło 4.5:1 (m.in. `--rosa-deep` 4.19,
  `--oro-deep` 2.92, `--lavanda-deep` 3.79). Przyciemnione o 0.05–0.18 w osi L.
- **Gradient panelu bocznego.** Biały tekst dawał 3.05:1 na jasnym końcu gradientu.
  Wszystkie stopy sprowadzone do L ≤ 0.55.
- **Nakładki na panelu.** Białe overlaye (hover, kafelek statystyk, przełącznik motywu)
  rozjaśniały tło i psuły kontrast; zamienione na ciemne.
- **`aria-prohibited-attr`.** `div.tok-target` miał `aria-label` bez roli → dodane `role="group"`.
- **`aria-allowed-attr`.** Przełączniki poziomów miały `role="tab"` razem z `aria-pressed`
  (kombinacja niedozwolona) → zamienione na grupę przycisków przełączających.
- **Przewijanie poziome w koniugatorze.** Tabele odmiany były poza `.table-wrap`:
  +97 px przy 320 px. Owinięte.
- **Głęboki link do lekcji z niewczytanego poziomu** kończył się komunikatem
  „nie znaleziono”. Widok dociąga teraz dane poziomu wywiedzionego z identyfikatora.

### Ograniczenia

- Rozpoznawanie mowy działa w Chrome, Edge i Safari 16+; gdzie indziej ćwiczenia mówione
  przechodzą w tryb pisany (zachowanie zaprojektowane, nie awaria).
- Jakość syntezy zależy od głosów zainstalowanych w systemie użytkownika.
- Postępy żyją w `localStorage` jednej przeglądarki; przenoszenie przez eksport/import.

## 2026-09-09 — Motor adaptacyjny: dziewięć funkcji, które uczą się z błędów ucznia

### Punkt wyjścia

Kurs był liniowy: ta sama ścieżka dla każdego, żadnej pamięci o tym, co uczeń pomylił,
żadnego sposobu na wejście w środku poziomu ani na wypełnienie dziesięciu wolnych minut
bez decyzji. Plan, podział na zadania i ADR spisane w `specs/001-motore-adattivo/` przed
napisaniem pierwszej linii kodu produkcyjnego, żeby pracę dało się wznowić i skontrolować
bez odtwarzania rozmowy, która ją zaplanowała. Fazy: FT (fundament testowy), F0–F8.

### Co umie teraz aplikacja

| Funkcja | Zachowanie dla ucznia |
|---|---|
| Zeszyt błędów | Zła odpowiedź zapisuje kartę z tematem gramatycznym lekcji; dobra odpowiedź na coś, czego jeszcze nie ma w zeszycie, nie zapisuje niczego |
| Powtórki błędów | Zakładka w widoku powtórek odtwarza prawdziwe ćwiczenie, nie kartę do samooceny; dwie poprawne odpowiedzi z rzędu zamykają kartę (SM-2, 1 i 3 dni) |
| Trening generowany | 7 generatorów (rodzajniki, przyimki, liczby, daty, godziny, czasowniki z dwoma pomocniczymi…) tworzy nieograniczoną liczbę ćwiczeń z reguł, bez pisania i tłumaczenia każdego zdania osobno |
| „Dziś" | Jeden przycisk: 6 kart błędów, 3 zadania generowane z najsłabszego tematu, 8 fiszek, potem kolejna lekcja — sesja nigdy nie jest pusta |
| Plazowanie poziomu | Wyszukiwanie binarne po 6 poziomach zamiast klikania przez sto lekcji; wynik nie zapisuje się sam, tylko pokazuje ile lekcji zostałoby odznaczonych i czeka na decyzję |
| Minimalne pary | 21 par (nonno/nono, podwojone spółgłoski, akcent, gl, c/g miękkie-twarde) uczy rozróżniania dźwięków przed poprawianiem wymowy |
| Rozszerzone czytanie/słuchanie | 12 tekstów A1→C2 w trzech trybach: czytanie z audio zdanie po zdaniu, słuchanie z ukrytym tekstem, dyktando |
| Produkcja pisemna | 6 zadań (kompozycje i tłumaczenia); to, co da się sprawdzić maszynowo (wymagane konstrukcje), sprawdza się naprawdę, reszta jest nazwana wprost jako niemierzalna, a nie udawana checklistą samooceny |
| PWA offline | Obietnica z README staje się prawdziwa: nagrania w cache raz na zawsze (nazwa pliku to hash treści), kod i dane network-first, żeby zapomniany bump wersji nie zamroził ucznia na starej wersji |

### Decyzje architektoniczne i ich powód

- **Stan rośnie przez dodawanie, nie przez podbicie schematu.** Sześć nowych kontenerów
  weszło do `defaultState`, `SCHEMA` zostało na 2. `load()` już scala zapis z domyślnym
  stanem, więc profil zapisany wcześniej dostaje nowe pola puste, za darmo. Podbicie
  numeru odrzuciłoby każdy plik JSON, który uczeń kiedykolwiek wyeksportował, w zamian za
  migrację, która nie miałaby nic do zrobienia.
- **Klucz karty błędu w trzech częściach**: `lessonId#sygnatura#bliźniak`. Sam hash treści
  nie wystarcza: na warstwie neutralnej całe `mcq` to `{ t: "mcq", a: 1 }`, bo pytanie i
  opcje żyją w nakładce językowej, a `a1-u01-l1` ma dwa identyczne takie ćwiczenia obok
  siebie. Id lekcji broni przed kolizją między setkami ćwiczeń, sygnatura liczona tylko z
  pól neutralnych broni przed osieroceniem karty przy zmianie języka, licznik bliźniaka
  rozróżnia dwa identyczne ćwiczenia w tej samej lekcji. Zweryfikowane na prawdziwym
  kursie: 1514 kluczy, 0 kolizji, każdy wraca do własnego ćwiczenia, bez zmian po
  przełączeniu na niemiecki.
- **Drille generowane z reguł, nie pisane.** Uczeń mylący `del` z `dello` potrzebuje
  dwustu powtórzeń, kurs miał cztery, bo każde trzeba było napisać i przetłumaczyć na
  pięć języków. Generator jest czystą funkcją ziarna: to samo ziarno zawsze daje to samo
  zadanie, więc karta błędu wskazuje na (generator, ziarno) zamiast przechowywać treść.
  Drille są tekstowe z założenia — wygenerowane zdanie nie ma wpisu w indeksie audio,
  więc przycisk głośnika spadłby na syntezę systemową, czyli dokładnie ten mechaniczny
  głos, którego projekt unika.
- **Pytania o zrozumienie tekstu po włosku w warstwie neutralnej.** Sprawdzanie po
  polsku zrozumienia włoskiego tekstu sprawdzałoby tłumaczenie, nie zrozumienie. Efekt
  uboczny: dodanie nowego języka kosztuje zero nowych pytań.
- **Service worker network-first** dla powłoki aplikacji i danych, cache-first tylko dla
  nagrań (nazwa pliku = hash treści, więc bajty pod danym adresem nigdy się nie
  zmieniają). Bez build stepu pliki nie noszą hashu w nazwie, a jedyna wersja to stała
  ustawiana ręcznie — zapomniany bump pod cache-first zamroziłby ucznia na starym
  kodzie bezpowrotnie i bez śladu w logu.

### Błędy znalezione i naprawione

- **Zanieczyszczenie prototypu sprzed tej pracy.** `JSON.parse` zamienia `"__proto__"` w
  zwykłą własną właściwość, a odczyt `base["__proto__"]` na zwykłym obiekcie zwraca
  `Object.prototype`. `merge()` wchodził w nią i przypisywał, więc plik postępu
  `{"schema":2,"__proto__":{"polluted":"yes"}}` ustawiał widoczną dla każdego obiektu na
  stronie właściwość do przeładowania. Osiągalne z przycisku importu w ustawieniach —
  dokładnie tam, gdzie trafia plik od kogoś innego. Poprawka w `merge()`, nie w
  `importState()`, bo `load()` dochodzi do tej samej funkcji z `localStorage`.
- **Przy pełnym limicie miejsca nie zapisywało się nic**, łącznie z postępem lekcji.
  Cały stan żył pod jednym kluczem `localStorage`, więc nieudany zapis tracił wszystko
  naraz: passę, XP, statystyki i fiszki razem. Teraz `save()` odrzuca to, co uczeń
  odrobi sam (karty błędów od najlepiej opanowanych, liczniki drilli), a zostawia to,
  czego nie odrobi. Kompozycje pisemne celowo nie są na tej liście, mimo że są
  największym elementem pliku — to własne zdania ucznia.
- **`[hidden]` przegrywało z `display` klasy.** Przycisk „dalej" pokazywał się przed
  odpowiedzią, bo klasa z własnym `display` bije regułę `[hidden]` specyficznością. Błąd
  poprawiany już raz punktowo (scrim szuflady), teraz jedna globalna reguła plus test
  przechodzący po każdym elemencie `[hidden]` na stronie.
- **Minimalne pary usunięte po pomiarze, nie na oko.** Głos wymawia akcenty
  niekonsekwentnie: `pèsca`/`pésca` dają różne pliki, ale `vènti`/`vénti` wracają
  bajt w bajt identyczne. Cała para i cały zestaw otwarte/zamknięte `o` usunięte, bo
  żadna z jego trzech par nie przetrwała pomiaru (`scripts/check_minpairs.py`,
  zostawiony jako bramka).
- **Przewijanie poziome od wykresu postępu.** Czternaście kolumn dni z etykietami dni
  tygodnia miało własną minimalną szerokość i przy 375px spychało całą stronę 24px poza
  ekran. Znalezione przemiataniem wszystkich tras w dwóch szerokościach i dwóch
  motywach, nie przez lekturę widoków, które ta praca dotykała — akurat tego wykresu nie
  dotknęła. Test regresji chodzi teraz po wszystkich czternastu trasach zamiast nazywać
  wykres z imienia.

### Bramki końcowe

| Bramka | Wynik |
|---|---|
| `npm test` | 204 testy jednostkowe, zielone |
| `npm run test:dom` | 111 testów DOM, zielone |
| `validate.mjs` × 5 języków | OK |
| `parity.mjs` | OK, 4 nakładki |
| `build_audio.py --dry-run` | 0 brakujących, 2654 pliki, 34 MB (+2 MB) |
| axe-core, 7 nowych widoków × 2 motywy | 0 naruszeń |
| 16 tras × 375/1280px × jasny/ciemny | 0 błędów w konsoli |
| Przewijanie poziome 320/375/414 | brak |
| Otwarcie z `file://` | działa |

### Ograniczenia i rzeczy niezweryfikowane

- `verify_states` z pakietu a11y-gate nadal nie czyta OKLCH poprawnie (znany artefakt
  narzędzia); kontrast mierzony osobno przez konwersję w przeglądarce (`tests/dom/contrast.spec.js`).
  Znalazło dwa prawdziwe defekty tą drogą: badge zakładki błędów przy 2,58:1/1,59:1
  (poprawione do 8,43:1/6,40:1) i obramowanie nieaktywnej zakładki przy 1,58:1
  (poprawione na `--ink-faint`).
- Zadanie T003 (osobny skrypt bramkujący migrację) świadomie pominięte: te same cztery
  fakty pokrywają już testy jednostkowe uruchamiane w `npm test`, drugi skrypt byłby
  drugim źródłem prawdy rozjeżdżającym się przy pierwszej zmianie.
- Koniugator pozostaje na syntezie systemowej — generuje formy dowolne, nie da się ich
  nagrać z wyprzedzeniem (już odnotowane w poprzedniej sesji).
- Rozpoznawanie mowy działa w Chrome, Edge i Safari 16+; gdzie indziej ćwiczenia mówione
  przechodzą w tryb pisany (zachowanie zaprojektowane, nie awaria).
- `edge-tts`, na którym opiera się cała warstwa audio, jest nieoficjalnym API Microsoftu.
