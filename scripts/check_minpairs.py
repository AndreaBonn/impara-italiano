#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["edge-tts>=7.0"]
# ///
"""Czy pary minimalne naprawdę brzmią różnie?

Ćwiczenie „posłuchaj i wybierz" ma sens wyłącznie wtedy, gdy dwa nagrania
się różnią. Głos honoruje akcenty nierówno: „pèsca" i „pésca" dostają
różne pliki, ale „vènti" i „vénti" dają nagranie bajt w bajt takie samo.
Para, której nikt nie odróżni ze słuchu, uczy tylko zgadywania — i nie
widać tego ani w kodzie, ani w testach, ani na ekranie.

Ten skrypt syntetyzuje obie strony każdej pary z data/core/phonetics.js
i porównuje bajty. Wymaga sieci (edge-tts).

Uruchomienie:
    uv run --script scripts/check_minpairs.py
    uv run --script scripts/check_minpairs.py --set ph-doppie

Kod wyjścia 1 przy choćby jednej parze nie do odróżnienia.
"""

from __future__ import annotations

import argparse
import asyncio
import hashlib
import json
import re
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
PHONETICS = ROOT / "data" / "core" / "phonetics.js"
VOICE = "it-IT-IsabellaNeural"


def czytaj_zbiory() -> list[dict]:
    """Wyciąga window.PHONETICS z pliku JS bez uruchamiania go."""
    src = PHONETICS.read_text(encoding="utf-8")
    start = src.index("[", src.index("window.PHONETICS"))
    # zdejmujemy komentarze blokowe i zamieniamy klucze na cytowane: to nie
    # jest pełny parser JS, tylko tyle, ile trzeba dla tego jednego pliku
    body = src[start : src.rindex("]") + 1]
    body = re.sub(r"/\*.*?\*/", "", body, flags=re.S)
    body = re.sub(r"(\w+):", r'"\1":', body)
    body = re.sub(r",(\s*[\]}])", r"\1", body)
    return json.loads(body)


async def mowa(tekst: str) -> bytes:
    buf = b""
    async for chunk in edge_tts.Communicate(tekst, VOICE).stream():
        if chunk["type"] == "audio":
            buf += chunk["data"]
    return buf


async def sprawdz(zbiory: list[dict], tylko: str | None) -> int:
    zle: list[str] = []
    razem = 0

    for zbior in zbiory:
        if tylko and zbior["id"] != tylko:
            continue
        print(f"\n=== {zbior['id']} ===")
        for para in zbior["pairs"]:
            a, b = para["a"], para["b"]
            da, db = await mowa(a), await mowa(b)
            razem += 1
            ha = hashlib.sha256(da).hexdigest()
            hb = hashlib.sha256(db).hexdigest()
            rozne = ha != hb
            znak = "ok " if rozne else "BLAD"
            print(f"  {znak} {a:12} / {b:12} {len(da):6} {len(db):6}")
            if not rozne:
                zle.append(f"{zbior['id']}: {a} / {b}")

    print(f"\nsprawdzono par: {razem}")
    if zle:
        print(f"NIE DO ODRÓŻNIENIA ({len(zle)}):")
        for z in zle:
            print("  x " + z)
        print("\nTaka para uczy zgadywania. Usuń ją albo zmień na inną.")
        return 1
    print("OK — każda para brzmi inaczej.")
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--set", dest="tylko", help="sprawdź tylko jeden zbiór")
    args = ap.parse_args()
    return asyncio.run(sprawdz(czytaj_zbiory(), args.tylko))


if __name__ == "__main__":
    sys.exit(main())
