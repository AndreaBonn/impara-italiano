#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["edge-tts>=7.0"]
# ///
"""Generates the MP3 files for every Italian string in the course.

Input : scripts/audio-strings.json  (produced by scripts/extract_strings.mjs)
Output: audio/<xx>/<hash>.mp3  and  data/audio-index.js

The file name is a 64-bit FNV-1a hash of the string's content, the same one
used on the browser side (assets/js/audio.js). Thanks to that, a rerun after
adding a lesson creates only new files: the existing ones change neither name
nor content, so the git history does not swell.

Usage:
    node scripts/extract_strings.mjs && uv run --script scripts/build_audio.py
    uv run --script scripts/build_audio.py --dry-run     # a summary only
    uv run --script scripts/build_audio.py --force       # overwrite existing ones
"""

from __future__ import annotations

import argparse
import asyncio
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "audio"
INDEX_FILE = ROOT / "data" / "audio-index.js"
STRINGS_FILE = ROOT / "scripts" / "audio-strings.json"

VOICE_PRIMARY = "it-IT-IsabellaNeural"
VOICE_OTHER = "it-IT-GiuseppeMultilingualNeural"

# Words the voice stresses on the wrong syllable, with the written accent that
# puts it back. The student keeps reading "figurati": this spelling goes to the
# synthesiser ONLY, and the file name stays the hash of the original sentence,
# so a word added here re-records that sentence without moving its address.
#
# Every entry was heard, one word at a time, against the real course voice at
# the real bitrate, and every occurrence was read in context before being added.
# "seguito" is the entry that shows what "in context" has to mean: as a noun it
# is "seguito", so the fix is only safe because both places the course uses the
# word are the participle ("mi ha seguito" in cils.js, "chi ha seguito" in a
# reading passage that is not voiced). A word whose two readings both occur does
# NOT belong in this table: it needs splitting by sentence instead. Count the
# occurrences in data/core/, not only in audio-strings.json — a word can enter
# the spoken set later, and a table checked against the spoken half alone would
# then be wrong without anyone touching it.
STRESS_FIXES = {
    "costano": "còstano",
    "dormono": "dòrmono",
    "falliscono": "fallìscono",
    "figurati": "figùrati",
    "imparano": "impàrano",
    "ingannano": "ingànnano",
    "seguito": "seguìto",
}

BITRATE = "32k"
SAMPLE_RATE = "24000"
CONCURRENCY = 4
RETRIES = 3

STRESS_RE = re.compile(
    r"\b(" + "|".join(sorted(STRESS_FIXES, key=len, reverse=True)) + r")\b",
    re.IGNORECASE,
) if STRESS_FIXES else None

FNV_OFFSET = 0xCBF29CE484222325
FNV_PRIME = 0x100000001B3
MASK64 = 0xFFFFFFFFFFFFFFFF


def audio_hash(text: str) -> str:
    """FNV-1a 64-bit over UTF-8 bytes. The counterpart of hashText() in audio.js."""
    h = FNV_OFFSET
    for byte in text.encode("utf-8"):
        h = ((h ^ byte) * FNV_PRIME) & MASK64
    return f"{h:016x}"


def target_path(digest: str) -> Path:
    return AUDIO_DIR / digest[:2] / f"{digest}.mp3"


def voiced_text(text: str) -> str:
    """Applies STRESS_FIXES to the text going to the synthesiser.

    The hash, and therefore the file name, is computed on the ORIGINAL text by
    audio_hash(): this rewriting must never reach it.

    Parameters
    ----------
    text
        The sentence as it appears in the course.

    Returns
    -------
    str
        The same sentence with the accented spelling of any word in
        STRESS_FIXES, keeping an initial capital where the original had one.
    """
    def one(m: re.Match[str]) -> str:
        fixed = STRESS_FIXES[m.group(0).lower()]
        return fixed[0].upper() + fixed[1:] if m.group(0)[0].isupper() else fixed

    return STRESS_RE.sub(one, text) if STRESS_FIXES else text


async def synth(text: str, voice: str, dest: Path) -> None:
    """Synthesises and transcodes to a low-bitrate mono MP3."""
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".mp3", delete=False) as tmp:
        raw = Path(tmp.name)
    try:
        spoken = voiced_text(text)
        last: Exception | None = None
        for attempt in range(RETRIES):
            try:
                await edge_tts.Communicate(spoken, voice).save(str(raw))
                if raw.stat().st_size > 0:
                    last = None
                    break
                last = RuntimeError("pusty plik")
            except Exception as exc:  # noqa: BLE001 - retry on network errors
                last = exc
            await asyncio.sleep(1.5 * (attempt + 1))
        if last is not None:
            raise last

        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(raw),
             "-ac", "1", "-ar", SAMPLE_RATE, "-b:a", BITRATE, str(dest)],
            check=True,
        )
    finally:
        raw.unlink(missing_ok=True)


def write_index(digests: list[str]) -> None:
    """Writes the set of hashes as a single string — smaller than an array of strings."""
    blob = "".join(sorted(digests))
    INDEX_FILE.write_text(
        "/* audio-index.js — wygenerowane przez scripts/build_audio.py.\n"
        "   Sklejone 16-znakowe skróty napisów, dla których istnieje plik MP3.\n"
        "   Nie edytować ręcznie. */\n"
        f"window.AUDIO_INDEX = \"{blob}\";\n",
        encoding="utf-8",
    )


async def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--dry-run", action="store_true", help="policz, nie syntezuj")
    ap.add_argument("--force", action="store_true", help="nadpisz istniejące pliki")
    ap.add_argument("--limit", type=int, default=0, help="ogranicz liczbę napisów (test)")
    args = ap.parse_args()

    if not shutil.which("ffmpeg"):
        print("BŁĄD: brak ffmpeg (wymagany do przekodowania).", file=sys.stderr)
        return 1
    if not STRINGS_FILE.exists():
        print(f"BŁĄD: brak {STRINGS_FILE.name}. Uruchom najpierw:\n"
              "  node scripts/extract_strings.mjs", file=sys.stderr)
        return 1

    data = json.loads(STRINGS_FILE.read_text(encoding="utf-8"))
    jobs: list[tuple[str, str, str]] = []  # (text, voice, hash)
    seen: set[str] = set()
    for text in data["primary"]:
        d = audio_hash(text)
        if d not in seen:
            seen.add(d)
            jobs.append((text, VOICE_PRIMARY, d))
    for text in data["other"]:
        d = audio_hash(text)
        if d not in seen:
            seen.add(d)
            jobs.append((text, VOICE_OTHER, d))

    if len(seen) != len(jobs):
        print("BŁĄD: kolizja skrótów.", file=sys.stderr)
        return 1

    # A key that matches nothing is a typo in the table, and without this it is
    # the quietest failure this script has: the run says "generated", the file
    # is rewritten byte for byte the same, and the wrong stress stays in the
    # course with nothing anywhere saying so.
    martwe = sorted(
        w for w in STRESS_FIXES
        if not any(re.search(rf"\b{re.escape(w)}\b", t, re.IGNORECASE) for t, _, _ in jobs)
    )
    if martwe:
        print("BŁĄD: te wpisy STRESS_FIXES nie pasują do żadnego napisu "
              f"(literówka?): {', '.join(martwe)}", file=sys.stderr)
        return 1

    todo = [j for j in jobs if args.force or not target_path(j[2]).exists()]
    if args.limit:
        todo = todo[: args.limit]

    print(f"napisów ogółem : {len(jobs)}")
    print(f"już wygenerowane: {len(jobs) - len([j for j in jobs if not target_path(j[2]).exists()])}")
    print(f"do wygenerowania: {len(todo)}")
    if args.dry_run:
        return 0

    sem = asyncio.Semaphore(CONCURRENCY)
    done = 0
    failed: list[str] = []

    async def worker(text: str, voice: str, digest: str) -> None:
        nonlocal done
        async with sem:
            try:
                await synth(text, voice, target_path(digest))
            except Exception as exc:  # noqa: BLE001
                failed.append(f"{digest} {text[:40]!r}: {exc}")
            done += 1
            if done % 50 == 0 or done == len(todo):
                print(f"  {done}/{len(todo)}", flush=True)

    await asyncio.gather(*(worker(*j) for j in todo))

    present = [d for (_, _, d) in jobs if target_path(d).exists()]
    write_index(present)

    total = sum(p.stat().st_size for p in AUDIO_DIR.rglob("*.mp3")) if AUDIO_DIR.exists() else 0
    print(f"\nplików audio: {len(present)}/{len(jobs)}   rozmiar: {total/1024/1024:.1f} MB")
    print(f"indeks: {INDEX_FILE.relative_to(ROOT)} ({INDEX_FILE.stat().st_size/1024:.0f} KB)")

    if failed:
        print(f"\nNIEUDANE ({len(failed)}):", file=sys.stderr)
        for f in failed[:20]:
            print("  " + f, file=sys.stderr)
        print("Uruchom skrypt ponownie — pobierze tylko brakujące.", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(asyncio.run(main()))
