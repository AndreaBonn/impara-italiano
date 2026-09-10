#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["edge-tts>=7.0", "numpy>=1.26"]
# ///
"""Does the course voice really speak Italian, or does it read letters?

Before writing sixty utterances about connected speech, we have to know
whether the narrator realises those phenomena at all. There is a precedent in
this repository: there is NO minimal-pair set for the open and closed "o",
because none of the three attempts produced two different files, and it was
`check_minpairs.py` that caught it, not a code review.

There the question was "does the voice DISTINGUISH two spellings". Here it is
the opposite: "does the voice JOIN what the spelling separates". That is why
bytes are not enough — the two files will differ anyway. We compare the sound:

  1. we synthesise the WRITTEN form ("a casa") and the spoken form, written
     the way it sounds when the phenomenon occurs ("accasa");
  2. we decode both to 16 kHz mono PCM through ffmpeg;
  3. we compute the difference in duration and the distance between the
     energy envelopes.

If the two versions come out CLOSE — the voice realises the phenomenon and
the exercise has something to teach. If FAR — the narrator reads letters, and
then the task "listen and say whether you heard a doubling" has no correct
answer.

The voice is the same one the course speaks with: `it-IT-IsabellaNeural`.
Testing system synthesis would answer no question at all, because the course
does not use it outside the emergency fallback.

    uv run --script scripts/check_connected.py
    uv run --script scripts/check_connected.py --gate

THE STATE TODAY: UNDETERMINED, and that is a result, not the absence of one.

The measure went through four versions and none of them reliably separates
"the phenomenon was realised" from "different content":

  1. the energy envelope — the negative control at 0.105 against a threshold
     of 0.35: it did not even tell two dissimilar sentences apart;
  2. a banded spectrum — the negative control started working (0.51), but the
     POSITIVE control, the same string twice, gave 0.450: the floor equal to
     the ceiling;
  3. time normalisation before framing — no change, so it was not the
     alignment;
  4. excluding silence — `dist(x, x)` dropped to zero (the cause: 27 frames
     out of 60 fell on silence, and an empty vector gave a distance of 1), but
     then the negative control dropped to 0.060, below the 0.08 threshold.

The methodological conclusion: comparing the WHOLE spectrum of two DIFFERENT
strings is probably not this experiment at all. The question "does the voice
double the consonant" is about the LENGTH OF ONE SOUND, not about the global
similarity of an utterance; that is measured by segmentation, not by spectral
distance.

We do not move the threshold after seeing the result — that is exactly what
this gate is there to prevent. As long as the measure does not decide, the F7
content about connected speech DOES NOT GET WRITTEN: writing it would repeat
the mistake with the open and closed "o", only without the script that caught
it back then.
"""

from __future__ import annotations

import argparse
import asyncio
import subprocess
import sys
import tempfile
from pathlib import Path

import edge_tts
import numpy as np

VOICE = "it-IT-IsabellaNeural"

# (phenomenon, written form, "as it sounds" form, what the exercise would teach)
PROBY: list[tuple[str, str, str, str]] = [
    ("raddoppiamento", "a casa", "accasa", "a + spółgłoska podwaja ją w mowie"),
    ("raddoppiamento", "e come", "eccome", "e + spółgłoska: to samo"),
    ("raddoppiamento", "è vero", "èvvero", "è + spółgłoska: to samo"),
    ("raddoppiamento", "tre giorni", "treggiorni", "tre + spółgłoska"),
    ("elisione", "non lo so", "nonloso", "trzy słowa wychodzą jako jedno"),
    ("elisione", "che cosa è", "che cos'è", "elizja w pytaniu"),
    ("elisione", "lo amico", "l'amico", "rodzajnik przed samogłoską"),
    ("troncamento", "un bello giorno", "un bel giorno", "utrata końcówki"),
    ("troncamento", "signore Rossi", "signor Rossi", "utrata -e przed nazwiskiem"),
    ("assimilazione", "in bocca", "imbocca", "n przed b staje się m"),
    ("assimilazione", "con me", "comme", "n przed m"),
]

# THE NEGATIVE CONTROL. Pairs that MUST come out far apart: two different sentences and
# the same sentence said at a different speed. Without them "everything is
# close" cannot be told apart from "my measure distinguishes nothing" — and the
# first run gave 11/11, which is exactly the kind of result you have to
# disbelieve first.
KONTROLE: list[tuple[str, str]] = [
    ("a casa", "in bocca"),
    ("non lo so", "tre giorni"),
    ("un bel giorno", "che cos'è"),
]

# THE POSITIVE CONTROL: the same string synthesised twice. It establishes the
# FLOOR — the distance that comes from the synthesis itself rather than from
# the content. Without it "0.47" cannot be told apart from "every two
# recordings are that far apart".
KONTROLE_POZ: list[str] = ["a casa", "non lo so", "un bel giorno"]

# The thresholds. Chosen BEFORE the first measurement, as with check_lookup: a
# threshold chosen after seeing the result describes the result instead of
# demanding anything.
MAX_ROZNICA_CZASU = 0.18      # seconds
# The threshold for the NEW measure (the spectrum). The old threshold of 0.35
# applied to the energy envelope and let everything through; we calibrate it on
# the negative control, that is on pairs KNOWN in advance to come out far
# apart — and not on the results of the pairs under study, because then it
# would describe the result instead of checking it.
MAX_ODLEGLOSC = 0.08


async def syntetyzuj(tekst: str, cel: Path) -> None:
    with cel.open("wb") as f:
        async for chunk in edge_tts.Communicate(tekst, VOICE).stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])


def pcm(mp3: Path) -> np.ndarray:
    """Decodes to 16 kHz mono. ffmpeg is already required by build_audio.py."""
    out = subprocess.run(
        ["ffmpeg", "-v", "quiet", "-i", str(mp3), "-ac", "1", "-ar", "16000",
         "-f", "s16le", "-"],
        capture_output=True, check=True,
    ).stdout
    return np.frombuffer(out, dtype=np.int16).astype(np.float32) / 32768.0


def spektrogram(x: np.ndarray, ramek: int = 60, pasm: int = 24) -> np.ndarray:
    """A banded log spectrogram, normalised in time to a fixed number of frames.

    WHY NOT THE ENERGY ENVELOPE this function replaced: the envelope only says
    WHEN it is loud. The negative control showed that "a casa" and "in bocca" —
    two completely different sentences — then come out at 0.105, that is deep
    below the threshold. A measure that does not tell apart sentences with
    different content will not tell apart a doubled consonant either, and
    because of that the first run gave 11/11 and looked like a success.

    A spectrum says WHAT sounds, not only when. The time normalisation is there
    so as to compare the shape of an utterance rather than its length — the
    length is measured separately.
    """
    if x.size < 512:
        return np.zeros((ramek, pasm))
    okno = 512
    # First we STRETCH both recordings to the same length, and only then cut
    # them into frames. Without that step the frames of two recordings of
    # different lengths fall on different places in the utterance and identical
    # content comes out far apart: the same string twice gave 0.450, and two
    # different sentences 0.514. That was an alignment artefact, not an
    # acoustic difference.
    dl = 32000                              # two seconds at 16 kHz
    x = np.interp(np.linspace(0, x.size - 1, dl), np.arange(x.size), x)
    skok = max(1, (x.size - okno) // ramek)
    krawedzie = np.geomspace(1, okno // 2, pasm + 1).astype(int)
    out = np.zeros((ramek, pasm))
    for i in range(ramek):
        p0 = i * skok
        seg = x[p0:p0 + okno]
        if seg.size < okno:
            seg = np.pad(seg, (0, okno - seg.size))
        widmo = np.abs(np.fft.rfft(seg * np.hanning(okno)))
        for b in range(pasm):
            a0, a1 = krawedzie[b], max(krawedzie[b] + 1, krawedzie[b + 1])
            out[i, b] = widmo[a0:a1].mean()
    out = np.log1p(out * 100.0)
    n = np.linalg.norm(out, axis=1, keepdims=True)
    return out / np.where(n > 0, n, 1)


def odleglosc(a: np.ndarray, b: np.ndarray) -> float:
    """The mean cosine distance frame by frame, 0..1.

    SILENCE IS NOT A DIFFERENCE. Recordings from edge-tts have silence at the
    beginning and at the end; after stretching to a fixed length 27 frames out
    of 60 fell on it, and a frame with zero energy has a zero vector and gave a
    distance of 1. Hence "the same string vs the same string = 0.450": the
    measure was reporting that silence does not match silence. Checked
    directly — `dist(x, x)` also came out at 0.45, which no acoustic
    interpretation explains.

    Now: both frames silent = a match; one silent, the other not = a full
    difference; both carrying energy = the cosine.
    """
    A, B = spektrogram(a), spektrogram(b)
    ea = np.linalg.norm(A, axis=1) > 1e-9
    eb = np.linalg.norm(B, axis=1) > 1e-9
    kos = np.clip(1.0 - np.sum(A * B, axis=1), 0.0, 1.0)
    d = np.where(ea & eb, kos, np.where(ea | eb, 1.0, 0.0))
    return float(d.mean())


async def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--gate", action="store_true", help="kod 1, gdy zjawisko nie jest realizowane")
    args = ap.parse_args()

    print("check_connected — czy lektor realizuje mowę łączoną\n")
    print(f"  głos: {VOICE}")
    print(f"  progi (wpisane przed pomiarem): czas {MAX_ROZNICA_CZASU}s, obwiednia {MAX_ODLEGLOSC}\n")

    zle: list[str] = []
    with tempfile.TemporaryDirectory() as d:
        tmp = Path(d)

        # The control first: if it too came out "close", the whole measurement
        # below means nothing and the measure would have to change rather than
        # conclusions be drawn.
        print("  kontrola negatywna (te MAJĄ wyjść daleko):")
        kontrola_ok = True
        for j, (x, y) in enumerate(KONTROLE):
            a, b = tmp / f"k{j}a.mp3", tmp / f"k{j}b.mp3"
            await syntetyzuj(x, a)
            await syntetyzuj(y, b)
            xa, xb = pcm(a), pcm(b)
            dt = abs(len(xa) - len(xb)) / 16000.0
            d_env = odleglosc(xa, xb)
            daleko = dt > MAX_ROZNICA_CZASU or d_env > MAX_ODLEGLOSC
            if not daleko:
                kontrola_ok = False
            print(f"    {'OK  ' if daleko else 'ZŁE '} {x!r} vs {y!r}: Δt={dt:.3f}s  obwiednia={d_env:.3f}")
        if not kontrola_ok:
            print("\n  MIARA NIE ROZRÓŻNIA nawet zdań niepodobnych.")
            print("  Wynik poniżej nie znaczy nic i nie wolno na nim oprzeć decyzji o treści.")
            return 2

        print("\n  kontrola pozytywna (ten sam napis dwa razy — to jest podłoga):")
        podlogi = []
        for j, x in enumerate(KONTROLE_POZ):
            a, b = tmp / f"p{j}a.mp3", tmp / f"p{j}b.mp3"
            await syntetyzuj(x, a)
            await syntetyzuj(x, b)
            d_env = odleglosc(pcm(a), pcm(b))
            podlogi.append(d_env)
            print(f"    {x!r} vs to samo: obwiednia={d_env:.3f}")
        podloga = max(podlogi)
        print(f"    podłoga = {podloga:.3f}\n")
        for i, (zjawisko, pisana, brzmi, po_co) in enumerate(PROBY):
            a, b = tmp / f"{i}a.mp3", tmp / f"{i}b.mp3"
            await syntetyzuj(pisana, a)
            await syntetyzuj(brzmi, b)
            xa, xb = pcm(a), pcm(b)
            dt = abs(len(xa) - len(xb)) / 16000.0
            d_env = odleglosc(xa, xb)
            ok = dt <= MAX_ROZNICA_CZASU and d_env <= MAX_ODLEGLOSC
            print(f"  {'OK  ' if ok else 'NIE '} {zjawisko:16} {pisana!r} vs {brzmi!r}")
            print(f"       Δt={dt:.3f}s  obwiednia={d_env:.3f}   ({po_co})")
            if not ok:
                zle.append(f"{zjawisko}: {pisana!r} / {brzmi!r} — Δt={dt:.3f}s, obwiednia={d_env:.3f}")

    print(f"\n  realizowane: {len(PROBY) - len(zle)}/{len(PROBY)}")
    if zle:
        print("\n  NIE realizowane przez głos — ćwiczenie na tym nie miałoby poprawnej odpowiedzi:")
        for z in zle:
            print("  x " + z)
        print("\n  Wniosek: te zjawiska WYPADAJĄ z F7. Pisanie o nich wypowiedzi")
        print("  nauczyłoby zgadywania, dokładnie jak przy „o\" otwartym i zamkniętym.")
        if args.gate:
            return 1
    else:
        print("\n  OK — wszystkie badane zjawiska są słyszalne w nagraniu.")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
