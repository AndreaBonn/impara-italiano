# /// script
# requires-python = ">=3.10"
# dependencies = ["anki"]
# ///
"""check_anki.py — czy nasz eksport wchodzi do prawdziwego Anki.

Nie atrapa: `anki.collection.Collection.import_csv` to ten sam kod, który
chodzi w programie na biurku. Sprawdzamy kontrakt PLIKU — separator,
cytowanie, kodowanie, mapowanie kolumn na pola — czyli to, co da się w tym
formacie zepsuć po cichu.

Czego NIE sprawdzamy: kreatora graficznego (jaki separator zgadnie, jaką
talię zaproponuje). To wymaga człowieka przy oknie.

Znalezione tym gate'em za pierwszym razem: nazwy kolumn „Italiano/Traduzione"
nie mapują się na pola typu notatki, więc import przechodził bez błędu i
zostawiał DRUGIE POLE PUSTE. Widać to dopiero w zaimportowanej notatce.

    node scripts/gen_anki_sample.mjs /tmp/mazzo.tsv
    uv run --script scripts/check_anki.py /tmp/mazzo.tsv
"""
import sys, tempfile, html, re
from pathlib import Path
from anki.collection import Collection
from anki.import_export_pb2 import ImportCsvRequest

TSV = Path(sys.argv[1])
ATTESE = 40

with tempfile.TemporaryDirectory() as d:
    col = Collection(str(Path(d) / "prova.anki2"))
    prima = col.card_count()
    # get_csv_metadata legge le direttive del file (#separator, #columns,
    # #tags column) esattamente come fa il desktop: se il nostro intestazione
    # è sbagliata, si vede qui e non a valle.
    meta = col.get_csv_metadata(str(TSV), None)
    print("separatore riconosciuto:", meta.delimiter, "| colonne:", len(meta.column_labels),
          "| html:", meta.is_html, "| colonna tag:", meta.tags_column)
    req = ImportCsvRequest(path=str(TSV), metadata=meta)
    log = col.import_csv(req)
    note_ids = col.find_notes("")
    print(f"note importate: {len(note_ids)} (attese {ATTESE})")

    def leggibile(v):
        """Con #html:false Anki ESCAPA per preservare il letterale: l'apostrofo
        diventa &#x27; e il ritorno a capo <br>. A schermo tornano identici,
        quindi il confronto giusto è dopo l'unescape, non sul campo grezzo."""
        return html.unescape(re.sub(r"<br\s*/?>", "\n", v))

    campi = {}
    for nid in note_ids:
        n = col.get_note(nid)
        campi[leggibile(n.fields[0])] = (leggibile(n.fields[1]) if len(n.fields) > 1 else "", n.tags)

    def controlla(fronte, retro_atteso, nota=""):
        if fronte not in campi:
            print(f"  MANCA  {fronte!r} {nota}")
            return False
        retro, tags = campi[fronte]
        ok = retro == retro_atteso
        print(f"  {'ok  ' if ok else 'NO  '} {fronte!r} -> {retro!r}" + ("" if ok else f"  (atteso {retro_atteso!r})"))
        return ok

    print("\naccenti, apostrofi, virgole, virgolette:")
    esiti = [
        controlla("un caffè", "kawa"),
        controlla("perché", "dlaczego / bo"),
        controlla("l'acqua", "woda"),
        controlla("città", "miasto"),
        controlla("sì, però", "tak, ale"),
        controlla('dice "no"', "mówi „nie”"),
        controlla("uno, due, tre", "raz, dwa, trzy"),
        controlla("pèsca", "brzoskwinia"),
        controlla("qual è", "jaki jest"),
    ]

    print("\nprefissi di formula (devono arrivare neutralizzati con l'apostrofo):")
    for f in ["'=SOMMA(A1:A9)", "'+39 06 1234", "'-cento", "'@casa"]:
        print(f"  {'ok  ' if f in campi else 'NO  '} {f!r}")
        esiti.append(f in campi)

    print("\ntag arrivati sulla nota:")
    _, tg = campi.get("un caffè", ("", []))
    print(f"  {'ok  ' if tg == ['a1'] else 'NO  '} {tg}")
    esiti.append(tg == ["a1"])

    print("\nnewline dentro un campo:")
    multi = [k for k in campi if "riga uno" in k]
    print(f"  {'ok  ' if multi else 'NO  '} {multi[0]!r}" if multi else "  NO   campo multilinea perso")
    esiti.append(bool(multi))

    print(f"\nseparatore non spezzato: {len(note_ids)} note, nessun campo tagliato")
    esiti.append(len(note_ids) == ATTESE)

    col.close()
    print("\nESITO:", "tutte le verifiche passate" if all(esiti) else "ALMENO UNA FALLITA")
    sys.exit(0 if all(esiti) else 1)
