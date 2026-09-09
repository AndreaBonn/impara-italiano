#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.10"
# dependencies = ["edge-tts>=7.0", "numpy>=1.26"]
# ///
"""Czy głos kursu naprawdę mówi po włosku, a nie czyta liter?

Zanim napiszemy sześćdziesiąt wypowiedzi o mowie łączonej, trzeba wiedzieć,
czy lektor w ogóle te zjawiska realizuje. Precedens jest w tym repozytorium:
zbioru par minimalnych dla „o" otwartego i zamkniętego NIE MA, bo żadna z
trzech prób nie dała dwóch różnych plików, i wykrył to `check_minpairs.py`,
a nie przegląd kodu.

Tam pytanie brzmiało „czy głos ROZRÓŻNIA dwie pisownie". Tutaj brzmi
odwrotnie: „czy głos SKLEJA to, co pisownia rozdziela". Dlatego bajty nie
wystarczą — dwa pliki i tak będą różne. Porównujemy dźwięk:

  1. syntetyzujemy formę PISANĄ („a casa") i formę wymawianą, zapisaną tak,
     jak brzmi, gdy zjawisko zachodzi („accasa");
  2. dekodujemy oba do PCM 16 kHz mono przez ffmpeg;
  3. liczymy różnicę czasu trwania i odległość obwiedni energii.

Jeśli obie wersje wychodzą BLISKO — głos realizuje zjawisko i ćwiczenie ma
czego uczyć. Jeśli DALEKO — lektor czyta litery, a wtedy zadanie „posłuchaj
i powiedz, czy usłyszałeś podwojenie" nie ma poprawnej odpowiedzi.

Głos jest ten sam, którym mówi kurs: `it-IT-IsabellaNeural`. Testowanie
syntezy systemowej nie odpowiedziałoby na żadne pytanie, bo kurs jej nie
używa poza awaryjnym zejściem.

    uv run --script scripts/check_connected.py
    uv run --script scripts/check_connected.py --gate

STAN NA DZIŚ: NIEROZSTRZYGNIĘTY, i to jest wynik, nie brak wyniku.

Miara przeszła cztery wersje i żadna nie oddziela wiarygodnie „zjawisko
zrealizowane" od „inna treść":

  1. obwiednia energii — kontrola negatywna 0,105 przy progu 0,35: nie
     odróżniała nawet dwóch niepodobnych zdań;
  2. widmo w pasmach — kontrola negatywna zaczęła działać (0,51), ale
     kontrola POZYTYWNA, ten sam napis dwa razy, dała 0,450: podłoga równa
     sufitowi;
  3. normalizacja czasu przed ramkowaniem — bez zmiany, więc to nie było
     wyrównanie;
  4. wykluczenie ciszy — `dist(x, x)` spadło do zera (przyczyna: 27 ramek
     z 60 wypadało na ciszę, a pusty wektor dawał odległość 1), ale wtedy
     kontrola negatywna spadła do 0,060, poniżej progu 0,08.

Wniosek metodologiczny: porównywanie CAŁEGO widma dwóch RÓŻNYCH napisów
prawdopodobnie w ogóle nie jest tym eksperymentem. Pytanie „czy głos
podwaja spółgłoskę" dotyczy DŁUGOŚCI JEDNEJ GŁOSKI, a nie globalnego
podobieństwa wypowiedzi; mierzy się je segmentacją, nie odległością widm.

Progu nie ruszamy po zobaczeniu wyniku — to jest dokładnie ta rzecz, przed
którą ten gate ma chronić. Dopóki miara nie rozstrzyga, treść F7 o mowie
łączonej NIE POWSTAJE: napisanie jej byłoby powtórzeniem błędu z „o"
otwartym i zamkniętym, tylko bez skryptu, który go wtedy złapał.
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

# (zjawisko, forma pisana, forma „jak brzmi", co miałoby uczyć ćwiczenie)
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

# KONTROLA NEGATYWNA. Pary, które MUSZĄ wyjść daleko: dwa różne zdania i
# to samo zdanie powiedziane w innym tempie. Bez nich „wszystko jest blisko"
# nie odróżnia się od „moja miara niczego nie rozróżnia" — a pierwszy
# przebieg dał 11/11, co jest dokładnie takim wynikiem, któremu trzeba
# najpierw nie uwierzyć.
KONTROLE: list[tuple[str, str]] = [
    ("a casa", "in bocca"),
    ("non lo so", "tre giorni"),
    ("un bel giorno", "che cos'è"),
]

# KONTROLA POZYTYWNA: ten sam napis zsyntetyzowany dwa razy. Wyznacza
# PODŁOGĘ — odległość, która bierze się z samej syntezy, a nie z treści.
# Bez niej „0,47" nie odróżnia się od „każde dwa nagrania tyle mają".
KONTROLE_POZ: list[str] = ["a casa", "non lo so", "un bel giorno"]

# Progi. Dobrane PRZED pierwszym pomiarem, jak przy check_lookup: próg
# dobrany po zobaczeniu wyniku opisuje wynik, a nie stawia wymagania.
MAX_ROZNICA_CZASU = 0.18      # sekundy
# Próg dla NOWEJ miary (widmo). Stary próg 0,35 dotyczył obwiedni energii i
# przepuszczał wszystko; kalibrujemy go na kontroli negatywnej, czyli na
# parach, o których z góry WIADOMO, że mają wyjść daleko — a nie na
# wynikach badanych par, bo wtedy opisywałby wynik zamiast go sprawdzać.
MAX_ODLEGLOSC = 0.08


async def syntetyzuj(tekst: str, cel: Path) -> None:
    with cel.open("wb") as f:
        async for chunk in edge_tts.Communicate(tekst, VOICE).stream():
            if chunk["type"] == "audio":
                f.write(chunk["data"])


def pcm(mp3: Path) -> np.ndarray:
    """Dekoduje do mono 16 kHz. ffmpeg jest już wymagany przez build_audio.py."""
    out = subprocess.run(
        ["ffmpeg", "-v", "quiet", "-i", str(mp3), "-ac", "1", "-ar", "16000",
         "-f", "s16le", "-"],
        capture_output=True, check=True,
    ).stdout
    return np.frombuffer(out, dtype=np.int16).astype(np.float32) / 32768.0


def spektrogram(x: np.ndarray, ramek: int = 60, pasm: int = 24) -> np.ndarray:
    """Log-spektrogram w pasmach, znormalizowany w czasie do stałej liczby ramek.

    DLACZEGO NIE OBWIEDNIA ENERGII, którą ta funkcja zastąpiła: obwiednia
    mówi tylko KIEDY jest głośno. Kontrola negatywna pokazała, że „a casa"
    i „in bocca" — dwa zupełnie różne zdania — wychodzą wtedy na 0,105,
    czyli głęboko poniżej progu. Miara, która nie odróżnia zdań o innej
    treści, nie odróżni też podwojenia spółgłoski, a pierwszy przebieg dał
    przez to 11/11 i wyglądał na sukces.

    Widmo mówi CO brzmi, nie tylko kiedy. Normalizacja czasu jest po to, by
    porównywać kształt wypowiedzi, a nie jej długość — długość mierzymy
    osobno.
    """
    if x.size < 512:
        return np.zeros((ramek, pasm))
    okno = 512
    # Najpierw ROZCIĄGAMY oba nagrania do tej samej długości, dopiero potem
    # tniemy na ramki. Bez tego kroku ramki dwóch nagrań o różnej długości
    # trafiają w różne miejsca wypowiedzi i identyczna treść wychodzi
    # daleko: ten sam napis dwa razy dawał 0,450, a dwa różne zdania 0,514.
    # To był artefakt wyrównania, nie różnica akustyczna.
    dl = 32000                              # dwie sekundy przy 16 kHz
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
    """Średnia odległość kosinusowa ramka po ramce, 0..1.

    CISZA NIE JEST RÓŻNICĄ. Nagrania z edge-tts mają ciszę na początku i na
    końcu; po rozciągnięciu do stałej długości wypadało na nią 27 ramek z 60,
    a ramka o zerowej energii ma zerowy wektor i dawała odległość 1. Stąd
    „ten sam napis vs ten sam napis = 0,450": miara meldowała, że cisza nie
    pasuje do ciszy. Sprawdzone wprost — `dist(x, x)` też wychodziło 0,45,
    czego żadna interpretacja akustyczna nie tłumaczy.

    Teraz: obie ramki ciche = zgodne; jedna cicha, druga nie = pełna
    różnica; obie z energią = kosinus.
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

        # Najpierw kontrola: gdyby i ona wyszła „blisko", cały pomiar niżej
        # nic nie znaczy i trzeba by zmienić miarę, a nie wyciągać wnioski.
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
