/* ============================================================
   ui-pl.js — napisy interfejsu po polsku.

   Klucz ma postać obszar.element. Wartość to napis albo obiekt
   z formami liczby mnogiej — polski ma cztery kategorie i wybiera
   je Intl.PluralRules, nie warunek na n === 1.

   Terminy gramatyczne włoskie (passato prossimo, congiuntivo)
   i nazwy własne zostają bez zmian we wszystkich językach.
   ============================================================ */
LINGUAI.addUI("pl", {

  /* ---------------- Powłoka ---------------- */
  "app.title": "Impara l'Italiano 🇮🇹 — kurs włoskiego od A1 do C2",
  "app.description": "Kompletny kurs języka włoskiego po polsku: gramatyka, teoria, ćwiczenia, słuchanie i mówienie. Od A1 do poziomu native.",
  "app.skipToContent": "Przejdź do treści",
  "app.openMenu": "Otwórz menu",
  "app.mainNav": "Nawigacja główna",
  "app.tagline": "Włoski po polsku · A1 → C2",

  /* ---------------- Nawigacja ---------------- */
  "nav.path": "Ścieżka nauki",
  "nav.review": "Powtórki",
  "nav.talk": "Rozmowy na głos",
  "nav.grammar": "Gramatyka",
  "nav.verbs": "Odmiana czasowników",
  "nav.lexicon": "Mój słownik",
  "nav.progress": "Postępy",
  "nav.settings": "Ustawienia",

  /* ---------------- Motyw ---------------- */
  "theme.toggle": "Przełącz motyw",
  "theme.dark": "🌙 Tryb nocny",
  "theme.light": "☀️ Tryb dzienny",

  /* ---------------- Licznik w pasku ---------------- */
  "stats.days": { one: "dzień", few: "dni", many: "dni", other: "dni" },
  "stats.lessons": { one: "lekcja", few: "lekcje", many: "lekcji", other: "lekcji" },
  /* skrót, bo kafelek jest wąski — nie odmienia się przez liczbę */
  "stats.points": "pkt",

  /* ---------------- Dostępność ---------------- */
  "a11y.listen": "Posłuchaj",
  "a11y.listenTo": "Posłuchaj {what}",

  /* ---------------- Ścieżka nauki ---------------- */
  "path.noData": "Brak danych kursu",
  "path.noDataHint": "Nie udało się wczytać plików w katalogu <code>data/</code>.",
  "path.levelsGroup": "Poziomy CEFR",
  "path.loading": "Wczytuję materiał…",
  "path.loadError": "Nie udało się wczytać poziomu {code}",
  "path.loadErrorHint": "Sprawdź pliki: <code>{files}</code>.",
  "path.levelKicker": "Poziom {code} · {cefr}",
  "path.levelDone": "Poziom {code} ukończony 🌿",
  "path.levelDoneHint": "Przejdź do kolejnego poziomu albo wróć do powtórek, żeby utrwalić materiał.",
  "path.continue": "Kontynuuj",
  "path.start": "Zaczynamy →",

  /* ---------------- Lekcja ---------------- */
  "lesson.back": "← Ścieżka",
  "lesson.notFound": "Nie znaleziono lekcji",
  "lesson.notFoundHint": "Wróć do ścieżki nauki.",
  "lesson.objectives": "Po tej lekcji będziesz umieć:",
  "lesson.theory": "Teoria",
  "lesson.trapLabel": "Uwaga, pułapka:",
  "lesson.contrastLabel": "Dla Polaków:",
  "lesson.tipLabel": "Wskazówka:",
  "lesson.grammar": "Gramatyka",
  "lesson.vocab": "Słownictwo",
  "lesson.playAll": "🔊 Odsłuchaj całą listę",
  "lesson.saveAll": "⭐ Dodaj wszystko do powtórek",
  "lesson.addToReview": "Dodaj do powtórek",
  "lesson.savedVocab": {
    one: "Dodano {n} słówko do powtórek.",
    few: "Dodano {n} słówka do powtórek.",
    many: "Dodano {n} słówek do powtórek.",
    other: "Dodano {n} słówek do powtórek."
  },
  "lesson.dialogue": "Dialog: {title}",
  "lesson.playDialogue": "▶️ Odtwórz cały dialog",
  "lesson.culture": "Okiem Włocha",
  "lesson.exercises": "Ćwiczenia",
  "lesson.end.perfect": "Bezbłędnie. Perfetto!",
  "lesson.end.great": "Bardzo dobrze — materiał opanowany.",
  "lesson.end.pass": "Zaliczone. Kilka rzeczy warto powtórzyć.",
  "lesson.end.fail": "Jeszcze nie zaliczone (potrzeba 70%). Wróć do teorii i spróbuj ponownie.",
  "lesson.again": "Powtórz lekcję",
  "lesson.next": "Dalej: {title} →",

  /* ---------------- Ćwiczenia: nazwy typów ---------------- */
  "ex.type.mcq": "wybór",
  "ex.type.multi": "wybór wielokrotny",
  "ex.type.fill": "uzupełnij lukę",
  "ex.type.cloze": "uzupełnij tekst",
  "ex.type.trans": "tłumaczenie",
  "ex.type.order": "ułóż zdanie",
  "ex.type.match": "połącz w pary",
  "ex.type.conj": "odmiana",
  "ex.type.gender": "rodzajnik",
  "ex.type.listen": "ze słuchu",
  "ex.type.speak": "wymowa",
  "ex.type.dialogue": "rozmowa",
  "ex.type.truefalse": "prawda / fałsz",

  /* ---------------- Ćwiczenia: wspólne ---------------- */
  "ex.num": "Ćwiczenie {n} · {type}",
  "ex.check": "Sprawdź",
  "ex.done.ok": "Dobrze ✓",
  "ex.done.checked": "Sprawdzone",
  "ex.bravo": "Brawo! 🎉",
  "ex.correctIs": "Poprawnie: „{answer}”",
  "ex.notYet": "Jeszcze nie.",
  "ex.answersGroup": "Odpowiedzi",
  "ex.pickOne": "Wybierz odpowiedź.",
  "ex.pickAtLeastOne": "Zaznacz przynajmniej jedną odpowiedź.",
  "ex.multiHint": "Zaznacz wszystkie poprawne odpowiedzi.",
  "ex.hintLabel": "Podpowiedź: {hint}",
  "ex.almost": "Prawie! Sprawdź pisownię (literówka lub akcent).",
  "ex.ph.toIt": "Napisz po włosku",
  "ex.ph.toBase": "Napisz po polsku",
  "ex.ph.answer": "Wpisz odpowiedź",
  "ex.unknownType": "Nieznany typ ćwiczenia: {t}",

  /* ---------------- Ćwiczenia: poszczególne typy ---------------- */
  "ex.cloze.prompt": "Uzupełnij luki.",
  "ex.order.prompt": "Ułóż zdanie po włosku:",
  "ex.order.yourSentence": "Twoje zdanie",
  "ex.order.clear": "Wyczyść",
  "ex.order.empty": "Ułóż zdanie z klocków.",
  "ex.match.prompt": "Połącz włoskie wyrażenia z polskimi odpowiednikami.",
  "ex.match.mistakes": "Liczba pomyłek: {n}.",
  "ex.conj.prompt": "Odmień: {verb} — {tense}",
  "ex.gender.prompt": "Dopasuj właściwy rodzajnik.",
  "ex.listen.prompt": "Posłuchaj i zapisz, co słyszysz.",
  "ex.listen.play": "🔊 Odtwórz",
  "ex.listen.slow": "🐢 Wolniej",
  "ex.listen.ph": "Zapisz po włosku",
  "ex.speak.prompt": "Powiedz na głos po włosku:",
  "ex.speak.mic": "Nagraj wypowiedź",
  "ex.speak.hint": "Kliknij mikrofon i przeczytaj zdanie.",
  "ex.speak.noStt": "Twoja przeglądarka nie obsługuje rozpoznawania mowy. Posłuchaj wzoru, powtórz na głos, a potem przepisz zdanie z pamięci.",
  "ex.speak.ph": "Przepisz zdanie",
  "ex.speak.pass": "Zalicz",
  "ex.speak.recordFirst": "Najpierw nagraj wypowiedź.",
  "ex.speak.ok": "Wymowa rozpoznana poprawnie.",
  "ex.speak.retry": "Rozpoznanie mowy bywa surowe dla obcego akcentu — posłuchaj wzoru i spróbuj jeszcze raz w spokojnym tempie.",
  "ex.dialogue.prompt": "Posłuchaj i odpowiedz.",
  "ex.dialogue.yourTurn": "Twoja kolej — {task}",
  "ex.dialogue.pickAnswer": "wybierz odpowiedź",
  "ex.dialogue.mistakes": "Pomyłki: {n}. Przeczytaj dialog jeszcze raz na głos.",
  "ex.dialogue.allOk": "Cała rozmowa poprawna.",
  "ex.truefalse.true": "Prawda (vero)",
  "ex.truefalse.false": "Fałsz (falso)",

  /* ---------------- Rozpoznawanie mowy ---------------- */
  "ex.stt.listening": "Słucham…",
  "ex.stt.denied": "Brak zgody na mikrofon. Zezwól w ustawieniach przeglądarki.",
  "ex.stt.failed": "Nie udało się nagrać. Spróbuj ponownie.",
  "ex.stt.nothing": "Nic nie usłyszałam. Spróbuj jeszcze raz.",
  "ex.stt.heard": "Usłyszałam: {text}"

});
