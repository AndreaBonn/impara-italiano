# /// script
# requires-python = ">=3.10"
# dependencies = ["anki"]
# ///
"""check_anki.py — does our export go into a real Anki.

Not a double: `anki.collection.Collection.import_csv` is the same code that
runs in the desktop program. We check the contract of the FILE — the
separator, the quoting, the encoding, the mapping of columns onto fields —
that is, whatever can be broken silently in this format.

What we do NOT check: the graphical wizard (which separator it guesses, which
deck it proposes). That needs a human at the window.

Found by this gate the first time it ran: the column names
"Italiano/Traduzione" do not map onto the note type's fields, so the import
went through without an error and left the SECOND FIELD EMPTY. You only see
it in an imported note.

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
    # get_csv_metadata reads the file directives (#separator, #columns,
    # #tags column) exactly as the desktop does: if our header is wrong, it
    # shows here and not downstream.
    meta = col.get_csv_metadata(str(TSV), None)
    print("separatore riconosciuto:", meta.delimiter, "| colonne:", len(meta.column_labels),
          "| html:", meta.is_html, "| colonna tag:", meta.tags_column)
    req = ImportCsvRequest(path=str(TSV), metadata=meta)
    log = col.import_csv(req)
    note_ids = col.find_notes("")
    print(f"note importate: {len(note_ids)} (attese {ATTESE})")

    def leggibile(v):
        """With #html:false Anki ESCAPES in order to preserve the literal: the
        apostrophe becomes &#x27; and the line break <br>. On screen they come
        back identical, so the right comparison is after unescaping, not on the
        raw field."""
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
