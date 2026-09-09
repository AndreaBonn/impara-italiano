#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["fsrs>=6"]
# ///
"""Generuje wektory odniesienia dla FSRS z implementacji referencyjnej.

Po co osobny skrypt zamiast przepisania wzorów z dokumentacji: pomyłka w
transkrypcji równań FSRS jest NIEWIDOCZNA. Zły wykładnik daje harmonogram,
który nadal wygląda rozsądnie — karty wracają, odstępy rosną — i pomyli się
dopiero o kilka dni po miesiącu nauki, czego nikt nie zauważy ani nie zgłosi.
Dlatego `assets/js/fsrs.js` nie jest sprawdzany „na oko", tylko przeciwko
wyjściu `py-fsrs` na tych samych wejściach.

Wynik ląduje w `tests/unit/fsrs-vectors.json` i jest wersjonowany: to jest
kontrakt, nie artefakt budowania. Przy podniesieniu wersji FSRS uruchamia się
ten skrypt ponownie, ogląda różnicę w gicie i dopiero potem zmienia silnik.

Losowanie odstępu (`enable_fuzzing`) jest WYŁĄCZONE. Włączone dodaje szum
+/- kilka procent, przez co ten sam wektor przy dwóch uruchomieniach dałby
dwa wyniki i test przestałby cokolwiek znaczyć.

    uv run --script scripts/gen_fsrs_vectors.py
"""

from __future__ import annotations

import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

from fsrs import Card, Rating, Scheduler, State

WYNIK = Path(__file__).resolve().parent.parent / "tests" / "unit" / "fsrs-vectors.json"

# Chwila zerowa jest stała: wektory mają być identyczne przy każdym uruchomieniu.
POCZATEK = datetime(2026, 1, 1, 12, 0, 0, tzinfo=timezone.utc)

OCENY = {"again": Rating.Again, "hard": Rating.Hard, "good": Rating.Good, "easy": Rating.Easy}

# Każdy scenariusz to ciąg par (ocena, ile godzin po poprzedniej powtórce).
# Dobrane tak, by przejść wszystkie trzy stany i obie ścieżki kroków.
SCENARIUSZE: dict[str, list[tuple[str, float]]] = {
    "nowa-good-przez-kroki": [("good", 0), ("good", 0.2), ("good", 24), ("good", 24 * 4)],
    "nowa-easy-od-razu": [("easy", 0), ("good", 24 * 5), ("easy", 24 * 20)],
    "nowa-again-uporczywe": [("again", 0), ("again", 0.02), ("good", 0.02), ("good", 24)],
    "nowa-hard-powolna": [("hard", 0), ("hard", 0.1), ("good", 0.2), ("hard", 24 * 2)],
    "wpadka-po-dojrzalosci": [
        ("good", 0), ("good", 0.2), ("good", 24), ("good", 24 * 6),
        ("again", 24 * 15), ("good", 0.2), ("good", 24 * 3),
    ],
    "dlugie-zapomnienie": [("good", 0), ("good", 0.2), ("good", 24), ("good", 24 * 200)],
    "mieszany-dlugi": [
        ("good", 0), ("hard", 0.2), ("good", 24), ("easy", 24 * 5),
        ("hard", 24 * 12), ("again", 24 * 30), ("good", 0.2), ("easy", 24 * 8),
    ],
}


def zaokragl(x: float | None) -> float | None:
    """Sześć cyfr po przecinku: dalej to już szum arytmetyki zmiennoprzecinkowej."""
    return None if x is None else round(x, 6)


def przebieg(kroki: list[tuple[str, float]]) -> list[dict]:
    scheduler = Scheduler(enable_fuzzing=False)
    card = Card()
    chwila = POCZATEK
    wynik = []

    for ocena, godziny in kroki:
        chwila = chwila + timedelta(hours=godziny)
        przed = {
            "state": State(card.state).name.lower(),
            "step": card.step,
            "stability": zaokragl(card.stability),
            "difficulty": zaokragl(card.difficulty),
        }
        card, _ = scheduler.review_card(card, OCENY[ocena], chwila)
        wynik.append({
            "przed": przed,
            "ocena": ocena,
            # Ile godzin po POPRZEDNIEJ powtórce uczeń wrócił. Wychodzi tutaj,
            # a nie zostaje w tym pliku, bo test w JS musi odtworzyć tę samą
            # chwilę: przepisany po drugiej stronie byłby drugim źródłem tej
            # samej prawdy i rozjechałby się po cichu przy pierwszej zmianie.
            "godzinOdPoprzedniej": godziny,
            # Odstęp w sekundach od chwili powtórki: silnik w JS liczy tak samo,
            # a data bezwzględna wiązałaby wektory z kalendarzem.
            "odstepSekund": round((card.due - chwila).total_seconds()),
            "po": {
                "state": State(card.state).name.lower(),
                "step": card.step,
                "stability": zaokragl(card.stability),
                "difficulty": zaokragl(card.difficulty),
            },
        })
    return wynik


def main() -> None:
    scheduler = Scheduler(enable_fuzzing=False)
    dane = {
        "zrodlo": "py-fsrs, Scheduler(enable_fuzzing=False)",
        "parametry": [round(p, 6) for p in scheduler.parameters],
        "desiredRetention": scheduler.desired_retention,
        "learningStepsSekund": [int(s.total_seconds()) for s in scheduler.learning_steps],
        "relearningStepsSekund": [int(s.total_seconds()) for s in scheduler.relearning_steps],
        "maximumInterval": scheduler.maximum_interval,
        "scenariusze": {nazwa: przebieg(kroki) for nazwa, kroki in SCENARIUSZE.items()},
    }
    WYNIK.parent.mkdir(parents=True, exist_ok=True)
    WYNIK.write_text(json.dumps(dane, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    ile = sum(len(v) for v in dane["scenariusze"].values())
    print(f"zapisano {WYNIK.relative_to(Path.cwd())}: "
          f"{len(dane['scenariusze'])} scenariuszy, {ile} powtórek")


if __name__ == "__main__":
    main()
