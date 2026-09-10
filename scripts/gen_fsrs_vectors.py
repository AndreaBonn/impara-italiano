#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["fsrs>=6"]
# ///
"""Generates the reference vectors for FSRS from the reference implementation.

Why a separate script instead of transcribing the formulas from the
documentation: a mistake in transcribing the FSRS equations is INVISIBLE. A
wrong exponent yields a schedule that still looks reasonable — the cards come
back, the intervals grow — and only goes wrong by a few days after a month of
study, which nobody notices and nobody reports. That is why
`assets/js/fsrs.js` is not checked by eye but against the output of
`py-fsrs` on the same inputs.

The result lands in `tests/unit/fsrs-vectors.json` and is version-controlled:
it is a contract, not a build artefact. When the FSRS version is raised, this
script is run again, the difference is inspected in git, and only then is the
engine changed.

Interval fuzzing (`enable_fuzzing`) is DISABLED. Enabled, it adds a few per
cent of noise, so the same vector would give two results in two runs and the
test would stop meaning anything.

    uv run --script scripts/gen_fsrs_vectors.py
"""

from __future__ import annotations

import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

from fsrs import Card, Rating, Scheduler, State

WYNIK = Path(__file__).resolve().parent.parent / "tests" / "unit" / "fsrs-vectors.json"

# The zero moment is fixed: the vectors must be identical on every run.
POCZATEK = datetime(2026, 1, 1, 12, 0, 0, tzinfo=timezone.utc)

OCENY = {"again": Rating.Again, "hard": Rating.Hard, "good": Rating.Good, "easy": Rating.Easy}

# Every scenario is a sequence of pairs (grade, hours after the previous review).
# Chosen so as to walk all three states and both step paths.
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
    """Six decimal places: beyond that it is floating-point noise."""
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
            # How many hours after the PREVIOUS review the student came back.
            # It goes out here rather than staying in this file, because the JS
            # test has to reproduce the same moment: rewritten on the other side
            # it would be a second source of that
            # same truth and would drift apart silently at the first change.
            "godzinOdPoprzedniej": godziny,
            # The interval in seconds from the moment of the review: the JS
            # engine computes it the same way, while an absolute date would tie
            # the vectors to the calendar.
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
