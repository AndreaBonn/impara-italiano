# Report attività — Impara l'Italiano

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
