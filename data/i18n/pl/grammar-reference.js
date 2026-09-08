/* ============================================================
   Teksty w języku ucznia (pl) do data/core/grammar-reference.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "refsec:titles": [
    "Rzeczownik i rodzajnik",
    "Przymiotnik",
    "Zaimki",
    "Czasownik — tryb oznajmujący",
    "Czasownik — tryb łączący i warunkowy",
    "Tryb rozkazujący, formy nieosobowe, strona bierna",
    "Przyimki, przysłówki, spójniki",
    "Składnia i tekst"
  ],
  "ref:g-nome-genere": {
    title: "Rodzaj rzeczownika",
    sub: "męski i żeński, końcówki -o / -a / -e",
    body: "<p>Włoski nie ma rodzaju nijakiego. Każdy rzeczownik jest męski albo żeński, także wtedy, gdy oznacza przedmiot.</p><h4>Trzy wzorce</h4><ul><li><b>-o</b> → męski: <em>il libro, il tavolo</em>. Wyjątki: <em>la mano, la radio, la foto, la moto</em>.</li><li><b>-a</b> → żeński: <em>la casa, la porta</em>. Wyjątki greckiego pochodzenia: <em>il problema, il programma, il tema, il sistema, il clima</em>.</li><li><b>-e</b> → męski albo żeński: <em>il fiore</em> ale <em>la chiave</em>. Rodzaju trzeba się nauczyć razem ze słowem.</li></ul><h4>Wskazówki, które działają</h4><ul><li>Zakończenia <b>-zione, -sione, -tà, -tù, -ice</b> są zawsze żeńskie: <em>la stazione, la città, la virtù, l'attrice</em>.</li><li>Zakończenia <b>-ore, -ame, -ume</b> są zwykle męskie: <em>il colore, il bestiame, il costume</em>.</li><li>Zapożyczenia biorą rodzaj słowa, które zastępują: <em>il computer</em> (calcolatore), <em>la mail</em> (posta).</li></ul>"
  },
  "ref:g-nome-plurale": {
    title: "Liczba mnoga",
    sub: "-i, -e i rzeczowniki nieodmienne",
    body: "<p>Liczba mnoga zmienia końcówkę, nie dodaje sylaby.</p><div class='table-wrap'><table class='gt'><thead><tr><th>l. poj.</th><th>l. mn.</th><th>przykład</th></tr></thead><tbody><tr><td>-o (m)</td><td class='it'>-i</td><td>il libro → i libri</td></tr><tr><td>-a (ż)</td><td class='it'>-e</td><td>la casa → le case</td></tr><tr><td>-a (m)</td><td class='it'>-i</td><td>il problema → i problemi</td></tr><tr><td>-e (m/ż)</td><td class='it'>-i</td><td>il fiore → i fiori; la chiave → le chiavi</td></tr></tbody></table></div><h4>Bez zmiany</h4><p>Słowa z akcentem na końcu (<em>la città, il caffè</em>), zapożyczenia (<em>il bar, lo sport</em>), skróty (<em>la foto, il cinema</em>) i jednosylabowce (<em>il re</em>).</p><h4>Pisownia</h4><ul><li><b>-co / -go</b>: akcent na przedostatniej sylabie → <em>-chi / -ghi</em> (<em>il fuoco → i fuochi</em>); akcent wcześniej → <em>-ci / -gi</em> (<em>il medico → i medici</em>).</li><li><b>-ca / -ga</b>: zawsze <em>-che / -ghe</em> (<em>l'amica → le amiche</em>).</li><li><b>-cia / -gia</b>: po samogłosce zostaje i (<em>la camicia → le camicie</em>), po spółgłosce znika (<em>l'arancia → le arance</em>).</li></ul>"
  },
  "ref:g-articolo-det": {
    title: "Rodzajnik określony",
    sub: "il, lo, la, l', i, gli, le",
    body: "<p>Forma zależy od rodzaju, liczby i <b>pierwszej głoski</b> następnego słowa.</p><div class='table-wrap'><table class='gt'><thead><tr><th>kontekst</th><th>poj.</th><th>mn.</th></tr></thead><tbody><tr><td>m. + spółgłoska</td><td class='it'>il</td><td>i</td></tr><tr><td>m. + s+sp., z, gn, ps, x, y</td><td class='it'>lo</td><td>gli</td></tr><tr><td>m. + samogłoska</td><td class='it'>l'</td><td>gli</td></tr><tr><td>ż. + spółgłoska</td><td class='it'>la</td><td>le</td></tr><tr><td>ż. + samogłoska</td><td class='it'>l'</td><td>le</td></tr></tbody></table></div><p>Rodzajnik dostosowuje się do słowa, które stoi <b>bezpośrednio po nim</b>, nie do rzeczownika: <em>lo studente</em>, ale <em>il bravo studente</em>.</p><h4>Kiedy jest obowiązkowy, choć polski go nie ma</h4><ul><li>przed nazwami krajów, regionów, rzek, gór: <em>l'Italia, la Toscana, il Po</em> (ale nie przed miastami)</li><li>przy godzinach i datach: <em>sono le tre, il 5 maggio</em></li><li>przy rzeczownikach ogólnych: <em>mi piace il caffè</em> (kawa jako taka)</li><li>przed dniami tygodnia w znaczeniu powtarzalnym: <em>il lunedì</em> = w poniedziałki</li></ul>"
  },
  "ref:g-articolo-indet": {
    title: "Rodzajnik nieokreślony i cząstkowy",
    sub: "un, uno, una, un' oraz del, della, dei…",
    body: "<p><b>Nieokreślony</b>: <em>un</em> (m + spółgłoska i samogłoska), <em>uno</em> (m + s+sp., z), <em>una</em> (ż + spółgłoska), <em>un'</em> (ż + samogłoska).</p><p class='callout callout--trap'><b>un amico</b> bez apostrofu (mężczyzna) kontra <b>un'amica</b> z apostrofem (kobieta). Apostrof niesie tu rodzaj.</p><p><b>Cząstkowy</b> (di + rodzajnik określony) wyraża nieokreśloną ilość, jak polski dopełniacz: <em>del pane</em> („chleba”), <em>dell'acqua</em>, <em>delle mele</em>. W przeczeniu zwykle znika: <em>non ho pane</em>.</p><p>Liczba mnoga rodzajnika nieokreślonego nie istnieje — jej rolę pełni właśnie cząstkowy: <em>un libro → dei libri</em>.</p>"
  },
  "ref:g-articolo-omissione": {
    title: "Kiedy rodzajnika NIE ma",
    sub: "opuszczenia i wyrażenia stałe",
    body: "<ul><li>po <em>essere</em> przy zawodzie i narodowości: <em>sono medico, sono polacca</em></li><li>przed nazwami miast i małych wysp: <em>vado a Roma, a Capri</em></li><li>przed zaimkami wskazującymi i pytającymi: <em>questo libro, quanti anni hai?</em></li><li>przed pojedynczym członkiem rodziny z zaimkiem dzierżawczym: <em>mia madre</em>, ale <em>le mie sorelle</em></li><li>w wyrażeniach stałych: <em>andare in vacanza, cercare lavoro, avere fame, a casa, in ufficio</em></li><li>po <em>di</em> w określeniach materiału i przynależności: <em>un tavolo di legno, la casa di Marco</em></li></ul><p>Na poziomie <b>C1</b> dochodzą wyrażenia z pominięciem rodzajnika przed dzierżawczym: <em>a mio parere, a sua insaputa, a mio nome</em>.</p>"
  },
  "ref:g-nome-avanzato": {
    title: "Liczba mnoga trudnych rzeczowników",
    sub: "podwójne formy i wyrazy złożone",
    body: "<h4>Podwójna liczba mnoga</h4><p>Kilkanaście rzeczowników ma dwie formy o różnym znaczeniu: <em>l'osso → gli ossi</em> (pojedyncze kości, np. dla psa) i <em>le ossa</em> (szkielet); <em>il filo → i fili</em> (nitki) i <em>le fila</em> (wątki, powiązania); <em>il frutto → i frutti</em> (owoce w sensie efektów) i <em>la frutta</em> (owoce jako jedzenie); <em>il braccio → le braccia</em> (ramiona ciała) i <em>i bracci</em> (ramiona dźwigu).</p><h4>Wyrazy złożone</h4><ul><li>bez zmiany: <em>il doposcuola → i doposcuola</em></li><li>zmienia się końcówka drugiego członu: <em>il cavolfiore → i cavolfiori</em>, <em>il capolavoro → i capolavori</em>, <em>l'asciugamano → gli asciugamani</em></li><li>zmienia się pierwszy człon: <em>il capofamiglia → i capifamiglia</em>, <em>il fico d'India → i fichi d'India</em></li><li>zmieniają się oba: <em>la cassaforte → le casseforti</em>, <em>il bassofondo → i bassifondi</em></li></ul>"
  },
  "ref:g-agg-accordo": {
    title: "Zgodność przymiotnika",
    sub: "cztery i dwie końcówki",
    body: "<p>Przymiotnik zgadza się z rzeczownikiem w rodzaju i liczbie i stoi zwykle <b>po</b> nim.</p><div class='table-wrap'><table class='gt'><thead><tr><th>typ</th><th>m. poj.</th><th>ż. poj.</th><th>m. mn.</th><th>ż. mn.</th></tr></thead><tbody><tr><td>4 końcówki</td><td class='it'>rosso</td><td>rossa</td><td>rossi</td><td>rosse</td></tr><tr><td>2 końcówki</td><td class='it'>verde</td><td>verde</td><td>verdi</td><td>verdi</td></tr><tr><td>nieodmienne</td><td class='it'>blu</td><td>blu</td><td>blu</td><td>blu</td></tr></tbody></table></div><p>Nieodmienne są m.in. <em>blu, rosa, viola, beige, marrone</em> (potocznie też odmieniane) oraz zapożyczenia: <em>chic, snob, super</em>.</p><p>Przy grupie mieszanej rodzajowo wygrywa rodzaj męski: <em>Marco e Anna sono italiani</em>.</p>"
  },
  "ref:g-agg-posizione": {
    title: "Pozycja przymiotnika",
    sub: "przed rzeczownikiem czy po nim",
    body: "<p>Domyślnie <b>po</b> rzeczowniku. Przed rzeczownikiem stają przymiotniki częste i „nieodróżniające”: <em>bello, buono, grande, piccolo, giovane, vecchio, nuovo, bravo</em>.</p><p>Przesunięcie zmienia znaczenie. To zjawisko rozwija się w pełni na poziomie <b>C1</b>:</p><div class='table-wrap'><table class='gt'><thead><tr><th>przed</th><th>po</th></tr></thead><tbody><tr><td class='it'>un vecchio amico (dawny)</td><td>un amico vecchio (stary wiekiem)</td></tr><tr><td class='it'>un grande uomo (wielki)</td><td>un uomo grande (duży)</td></tr><tr><td class='it'>un buon medico (dobry fachowiec)</td><td>un medico buono (dobry człowiek)</td></tr><tr><td class='it'>una certa informazione (pewna, jakaś)</td><td>un'informazione certa (pewna, sprawdzona)</td></tr><tr><td class='it'>un alto magistrato (wysoko postawiony)</td><td>un magistrato alto (wysoki wzrostem)</td></tr></tbody></table></div><p><b>Bello</b> i <b>quello</b> przed rzeczownikiem zachowują się jak rodzajnik: <em>bel libro, bello studente, begli amici, bella casa</em>.</p>"
  },
  "ref:g-agg-gradi": {
    title: "Stopniowanie",
    sub: "comparativo i superlativo",
    body: "<h4>Stopień wyższy</h4><ul><li>wyższości: <em>Anna è <b>più</b> alta <b>di</b> Marco</em>; przed czasownikiem, przymiotnikiem lub przyimkiem: <b>che</b> — <em>è più facile parlare che scrivere</em></li><li>niższości: <em><b>meno</b> caro <b>di</b>…</em></li><li>równości: <em>tanto… quanto</em>, <em>così… come</em></li></ul><h4>Stopień najwyższy</h4><ul><li>względny: <em>il <b>più</b> bello <b>della</b> città</em></li><li>bezwzględny: <em>bell<b>issimo</b></em>, albo <em>molto bello</em></li></ul><h4>Formy nieregularne</h4><div class='table-wrap'><table class='gt'><thead><tr><th>podstawa</th><th>wyższy</th><th>najwyższy</th></tr></thead><tbody><tr><td>buono</td><td class='it'>migliore</td><td>ottimo / il migliore</td></tr><tr><td>cattivo</td><td class='it'>peggiore</td><td>pessimo / il peggiore</td></tr><tr><td>grande</td><td class='it'>maggiore</td><td>massimo</td></tr><tr><td>piccolo</td><td class='it'>minore</td><td>minimo</td></tr></tbody></table></div><p>Na <b>C1</b> dochodzą wzmocnienia potoczne (<em>magra magra</em>), prefiksy (<em>arcicontento, straricco, iperattivo</em>) i idiomy (<em>stanco morto, ubriaco fradicio, buono come il pane</em>) oraz formy <em>-errimo</em> (<em>acerrimo, celeberrimo</em>)."
  },
  "ref:g-possessivi": {
    title: "Zaimki i przymiotniki dzierżawcze",
    sub: "mio, tuo, suo… i pułapka rodziny",
    body: "<p>Dzierżawczy zgadza się z <b>rzeczą posiadaną</b>, nie z posiadaczem — inaczej niż w angielskim.</p><div class='table-wrap'><table class='gt'><thead><tr><th>osoba</th><th>m. poj.</th><th>ż. poj.</th><th>m. mn.</th><th>ż. mn.</th></tr></thead><tbody><tr><td>io</td><td class='it'>mio</td><td>mia</td><td>miei</td><td>mie</td></tr><tr><td>tu</td><td class='it'>tuo</td><td>tua</td><td>tuoi</td><td>tue</td></tr><tr><td>lui/lei</td><td class='it'>suo</td><td>sua</td><td>suoi</td><td>sue</td></tr><tr><td>noi</td><td class='it'>nostro</td><td>nostra</td><td>nostri</td><td>nostre</td></tr><tr><td>voi</td><td class='it'>vostro</td><td>vostra</td><td>vostri</td><td>vostre</td></tr><tr><td>loro</td><td class='it'>loro</td><td>loro</td><td>loro</td><td>loro</td></tr></tbody></table></div><p>Zwykle stoi z rodzajnikiem: <em>il mio libro</em>. <b>Bez rodzajnika</b> przy pojedynczym, nieokreślonym członku rodziny: <em>mia madre, tuo fratello</em>. Rodzajnik wraca, gdy: liczba mnoga (<em>i miei genitori</em>), zdrobnienie (<em>la mia sorellina</em>), określenie (<em>la mia sorella maggiore</em>), forma <em>loro</em> (<em>la loro madre</em>).</p><p><em>Suo</em> znaczy zarówno „jego”, jak i „jej” — rozstrzyga kontekst. Dla jasności używa się <em>di lui / di lei</em>.</p>"
  },
  "ref:g-pron-soggetto": {
    title: "Zaimki osobowe w funkcji podmiotu",
    sub: "io, tu, lui… i dlaczego się je pomija",
    body: "<p><em>io, tu, lui/lei, noi, voi, loro</em>. Zwykle się je pomija, bo końcówka czasownika już wskazuje osobę. Używa się ich dla <b>kontrastu</b> (<em>io lavoro, tu dormi</em>), po <em>anche</em>, <em>neanche</em>, <em>nemmeno</em> oraz w krótkich odpowiedziach (<em>Chi è? — Io.</em>).</p><p><b>Lei</b> pisane wielką literą to forma grzecznościowa (i dla mężczyzn, i dla kobiet), z czasownikiem w 3. osobie l. poj. W liczbie mnogiej formalnie używa się dziś <em>voi</em>; <em>Loro</em> zostało w bardzo oficjalnym rejestrze.</p><p>Formy <em>egli, ella, esso, essi</em> należą do języka pisanego i literackiego.</p>"
  },
  "ref:g-pron-diretti": {
    title: "Zaimki dopełnienia bliższego",
    sub: "mi, ti, lo, la, ci, vi, li, le",
    body: "<p>Zastępują dopełnienie bez przyimka („kogo? co?”) i stoją <b>przed</b> odmienionym czasownikiem.</p><div class='table-wrap'><table class='gt'><thead><tr><th>osoba</th><th>nieakcentowane</th><th>akcentowane</th></tr></thead><tbody><tr><td>mnie</td><td class='it'>mi</td><td>me</td></tr><tr><td>ciebie</td><td class='it'>ti</td><td>te</td></tr><tr><td>jego / to</td><td class='it'>lo</td><td>lui</td></tr><tr><td>ją / to</td><td class='it'>la</td><td>lei</td></tr><tr><td>nas</td><td class='it'>ci</td><td>noi</td></tr><tr><td>was</td><td class='it'>vi</td><td>voi</td></tr><tr><td>ich (m)</td><td class='it'>li</td><td>loro</td></tr><tr><td>je (ż)</td><td class='it'>le</td><td>loro</td></tr></tbody></table></div><p><b>Zgodność imiesłowu.</b> W czasach złożonych z <em>avere</em> imiesłów zgadza się z zaimkiem bliższym: <em>L'ho vista</em> (ją), <em>Li ho comprati</em>, <em>Le ho salutate</em>.</p><p>Z bezokolicznikiem po czasowniku modalnym możliwe są dwie pozycje: <em>ti posso aiutare</em> = <em>posso aiutarti</em>.</p>"
  },
  "ref:g-pron-indiretti": {
    title: "Zaimki dopełnienia dalszego",
    sub: "mi, ti, gli, le, ci, vi, gli",
    body: "<p>Odpowiadają na „komu?”, zastępują <em>a + osoba</em>: <em>Telefono a Marco → Gli telefono</em>.</p><p>Formy: <em>mi, ti, <b>gli</b> (jemu), <b>le</b> (jej), ci, vi, <b>gli</b> (im)</em>. W rejestrze formalnym „im” to <em>loro</em>, po czasowniku: <em>Telefono loro</em>.</p><p class='callout callout--trap'><b>Gli</b> to jednocześnie rodzajnik („gli amici”) i zaimek („gli parlo”). Rozstrzyga pozycja w zdaniu.</p><p>Imiesłów <b>nie</b> zgadza się z zaimkiem dalszym: <em>Le ho parlato</em> (nie „parlata”).</p><p>Czasowniki wymagające dopełnienia dalszego, których polski odpowiednik ma biernik: <em>telefonare a, rispondere a, chiedere a, credere a, piacere a, dispiacere a</em>.</p>"
  },
  "ref:g-pron-combinati": {
    title: "Zaimki połączone",
    sub: "me lo, te la, glielo, ce ne…",
    body: "<p>Gdy spotykają się dwa zaimki, dalszy stoi pierwszy i zmienia <em>-i</em> na <em>-e</em>.</p><div class='table-wrap'><table class='gt'><thead><tr><th></th><th>lo</th><th>la</th><th>li</th><th>le</th><th>ne</th></tr></thead><tbody><tr><td>mi</td><td class='it'>me lo</td><td>me la</td><td>me li</td><td>me le</td><td>me ne</td></tr><tr><td>ti</td><td class='it'>te lo</td><td>te la</td><td>te li</td><td>te le</td><td>te ne</td></tr><tr><td>gli / le</td><td class='it'>glielo</td><td>gliela</td><td>glieli</td><td>gliele</td><td>gliene</td></tr><tr><td>ci</td><td class='it'>ce lo</td><td>ce la</td><td>ce li</td><td>ce le</td><td>ce ne</td></tr><tr><td>vi</td><td class='it'>ve lo</td><td>ve la</td><td>ve li</td><td>ve le</td><td>ve ne</td></tr></tbody></table></div><p><b>Glielo</b> obsługuje jednocześnie „jemu”, „jej” i „im” — pisze się łącznie. <em>Do il libro a Maria → Glielo do.</em></p>"
  },
  "ref:g-ci-ne": {
    title: "Ci i ne",
    sub: "dwie cząstki, które robią pół języka",
    body: "<h4>CI</h4><ul><li>miejsce: <em>Vai a Roma? — Sì, ci vado domani.</em></li><li>zastępuje <em>a + rzecz</em>: <em>Pensi all'esame? — Ci penso sempre.</em></li><li>w <em>c'è / ci sono</em></li><li>w czasownikach zrośniętych: <em>farcela</em> (dać radę), <em>volerci</em> (być potrzebnym), <em>metterci</em> (zajmować czas), <em>entrarci</em> (mieć związek)</li></ul><h4>NE</h4><ul><li>część całości: <em>Quante mele vuoi? — Ne voglio tre.</em></li><li>zastępuje <em>di + rzecz/osoba</em>: <em>Parliamo del film? — Ne parliamo domani.</em></li><li>pochodzenie: <em>Vieni dal lavoro? — Sì, ne vengo adesso.</em></li><li>w czasownikach: <em>andarsene</em> (iść sobie), <em>fregarsene</em> (mieć gdzieś), <em>accorgersene</em></li></ul><p>Przy <em>ne</em> w czasach złożonych imiesłów zgadza się z liczbą: <em>Ne ho comprate tre.</em></p>"
  },
  "ref:g-relativi": {
    title: "Zaimki względne",
    sub: "che, cui, il quale, chi",
    body: "<ul><li><b>che</b> — nieodmienne, jako podmiot i dopełnienie bliższe: <em>il libro che leggo</em></li><li><b>cui</b> — po przyimku: <em>la persona <b>a cui</b> penso</em>, <em>la città <b>in cui</b> vivo</em>; z rodzajnikiem oznacza przynależność: <em>il ragazzo <b>la cui</b> madre è medico</em></li><li><b>il quale / la quale / i quali / le quali</b> — wariant formalny, przydatny do usunięcia dwuznaczności</li><li><b>chi</b> — „ten, kto”, tylko o osobach, zawsze w liczbie pojedynczej: <em>Chi dorme non piglia pesci.</em></li></ul><p>Na poziomie <b>C1</b> dochodzi zaimek względny nijaki: <em><b>il che</b> mi sembra strano</em>, <em>la ragione <b>per cui</b>…</em></p>"
  },
  "ref:g-si": {
    title: "Wszystkie wartości SI",
    sub: "zwrotne, wzajemne, bezosobowe, bierne",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>wartość</th><th>przykład</th><th>uwaga</th></tr></thead><tbody><tr><td>zwrotne</td><td class='it'>Marco si lava.</td><td>robi coś sobie</td></tr><tr><td>wzajemne</td><td class='it'>Si salutano ogni giorno.</td><td>nawzajem</td></tr><tr><td>bezosobowe</td><td class='it'>In Italia si mangia bene.</td><td>„się”, ogólnie</td></tr><tr><td>bierne (passivante)</td><td class='it'>Qui si vendono panini.</td><td>czasownik zgadza się z rzeczą</td></tr><tr><td>rozkaz / rada</td><td class='it'>Il volante si tiene così.</td><td>instrukcja</td></tr><tr><td>toskańskie „my”</td><td class='it'>Stasera noi si va al cinema.</td><td>regionalne</td></tr></tbody></table></div><p>Bezosobowe <em>si</em> z czasownikiem zwrotnym daje <b>ci si</b>: <em>ci si alza presto</em>. W czasach złożonych bezosobowe <em>si</em> zawsze bierze <em>essere</em>, a imiesłów kończy się na <em>-i</em>: <em>si è mangiato bene</em>, ale <em>si è stati contenti</em>.</p>"
  },
  "ref:g-verbi-pronominali": {
    title: "Czasowniki z zaimkami zrośniętymi",
    sub: "farcela, cavarsela, prendersela",
    body: "<p>Grupa czasowników, których znaczenia nie da się wyprowadzić z części składowych. Bardzo częste w mowie.</p><div class='table-wrap'><table class='gt'><thead><tr><th>forma</th><th>znaczenie</th><th>przykład</th></tr></thead><tbody><tr><td class='it'>farcela</td><td>dać radę</td><td>Non ce la faccio più.</td></tr><tr><td class='it'>cavarsela</td><td>radzić sobie</td><td>Me la cavo con l'italiano.</td></tr><tr><td class='it'>prendersela</td><td>obrazić się</td><td>Non te la prendere.</td></tr><tr><td class='it'>andarsene</td><td>iść sobie</td><td>Me ne vado.</td></tr><tr><td class='it'>fregarsene</td><td>mieć w nosie</td><td>Se ne frega di tutto.</td></tr><tr><td class='it'>volerci</td><td>być potrzebnym</td><td>Ci vogliono due ore.</td></tr><tr><td class='it'>metterci</td><td>zajmować (czas)</td><td>Ci metto un'ora.</td></tr><tr><td class='it'>avercela con</td><td>mieć pretensje do</td><td>Ce l'ha con me.</td></tr></tbody></table></div><p>W czasach złożonych biorą <em>essere</em>, a imiesłów zgadza się z <em>la</em>: <em>me la sono cavata</em>, <em>ce l'ho fatta</em>.</p>"
  },
  "ref:g-presente": {
    title: "Czas teraźniejszy",
    sub: "trzy koniugacje i wzorzec -isc-",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>osoba</th><th>-are</th><th>-ere</th><th>-ire</th><th>-ire (-isc-)</th></tr></thead><tbody><tr><td>io</td><td class='it'>parlo</td><td>leggo</td><td>dormo</td><td>capisco</td></tr><tr><td>tu</td><td class='it'>parli</td><td>leggi</td><td>dormi</td><td>capisci</td></tr><tr><td>lui/lei</td><td class='it'>parla</td><td>legge</td><td>dorme</td><td>capisce</td></tr><tr><td>noi</td><td class='it'>parliamo</td><td>leggiamo</td><td>dormiamo</td><td>capiamo</td></tr><tr><td>voi</td><td class='it'>parlate</td><td>leggete</td><td>dormite</td><td>capite</td></tr><tr><td>loro</td><td class='it'>parlano</td><td>leggono</td><td>dormono</td><td>capiscono</td></tr></tbody></table></div><h4>Funkcje</h4><ul><li>teraźniejszość i czynność w toku: <em>lavoro adesso</em></li><li>zwyczaj: <em>ogni giorno prendo il bus</em></li><li>przyszłość bliska z określeniem czasu: <em>domani parto</em></li><li>prawdy ogólne i teraźniejszość historyczna</li></ul><p>Zmiany pisowni: <em>-care/-gare</em> dokładają h (<em>cerchi, paghi</em>), <em>-ciare/-giare/-iare</em> gubią i (<em>mangi, studi</em>).</p>"
  },
  "ref:g-passato-prossimo": {
    title: "Passato prossimo",
    sub: "avere czy essere, imiesłów, zgodność",
    body: "<p>Czas przeszły codziennej rozmowy: <b>avere lub essere w czasie teraźniejszym + imiesłów przeszły</b>.</p><h4>Imiesłów regularny</h4><p><em>-are → -ato</em> (parlato), <em>-ere → -uto</em> (creduto), <em>-ire → -ito</em> (finito).</p><h4>Wybór posiłkowego</h4><ul><li><b>avere</b>: czasowniki przechodnie (mają dopełnienie bliższe) — <em>ho mangiato la pizza</em></li><li><b>essere</b>: ruch i zmiana stanu (<em>andare, venire, arrivare, partire, uscire, entrare, salire, scendere, tornare, nascere, morire, diventare, restare, rimanere, stare, essere, piacere, succedere, costare</em>) oraz wszystkie zwrotne</li></ul><p>Z <em>essere</em> imiesłów zgadza się z podmiotem: <em>sono andato / sono andata / siamo andati / sono andate</em>.</p><h4>Częste imiesłowy nieregularne</h4><p><em>fare→fatto, dire→detto, vedere→visto, prendere→preso, mettere→messo, leggere→letto, scrivere→scritto, aprire→aperto, chiudere→chiuso, chiedere→chiesto, rispondere→risposto, essere→stato, nascere→nato, morire→morto, venire→venuto, rimanere→rimasto, vivere→vissuto, perdere→perso, offrire→offerto, scegliere→scelto, decidere→deciso, vincere→vinto, bere→bevuto</em>.</p>"
  },
  "ref:g-imperfetto": {
    title: "Imperfetto",
    sub: "opis, zwyczaj, tło zdarzeń",
    body: "<p>Regularny w praktyce dla wszystkich czasowników: temat + <em>-vo, -vi, -va, -vamo, -vate, -vano</em>. Wyjątki: <em>essere</em> (ero, eri, era…), <em>fare</em> (facevo), <em>dire</em> (dicevo), <em>bere</em> (bevevo).</p><h4>Kiedy imperfetto, a kiedy passato prossimo</h4><div class='table-wrap'><table class='gt'><thead><tr><th>imperfetto</th><th>passato prossimo</th></tr></thead><tbody><tr><td class='it'>opis, tło</td><td>zdarzenie, punkt</td></tr><tr><td class='it'>Pioveva e faceva freddo.</td><td>Ha smesso di piovere alle sei.</td></tr><tr><td class='it'>czynność powtarzalna: da bambino andavo</td><td>czynność zamknięta: ieri sono andato</td></tr><tr><td class='it'>czas trwania bez granic</td><td>czas trwania z granicami: ho lavorato per tre ore</td></tr></tbody></table></div><p>Dalsze użycia (B1): grzeczna prośba (<em>volevo un caffè</em>), relacja ze snu, styl dziennikarski, warunek niezrealizowany w mowie potocznej (<em>se lo sapevo, venivo</em>).</p>"
  },
  "ref:g-futuro": {
    title: "Futuro semplice i anteriore",
    sub: "plan, przypuszczenie, uprzedniość",
    body: "<p>Temat bezokolicznika bez końcowego <em>-e</em> (w -are: a → e) + <em>-ò, -ai, -à, -emo, -ete, -anno</em>: <em>parlerò, prenderò, partirò</em>.</p><p>Nieregularne tematy: <em>essere→sar-, avere→avr-, andare→andr-, venire→verr-, volere→vorr-, potere→potr-, dovere→dovr-, sapere→sapr-, vedere→vedr-, bere→berr-, rimanere→rimarr-, tenere→terr-</em>.</p><h4>Funkcje</h4><ul><li>przyszłość: <em>l'anno prossimo andrò in Italia</em></li><li><b>przypuszczenie o teraźniejszości</b>: <em>Che ore sono? — Saranno le tre.</em> („będzie z trzecia”)</li><li>ustępstwo: <em>Sarà anche bravo, ma non mi piace.</em></li></ul><p><b>Futuro anteriore</b> (avrò fatto / sarò andato) wyraża czynność wcześniejszą od innej przyszłej: <em>Quando avrò finito, ti chiamo</em> — oraz przypuszczenie o przeszłości: <em>Avrà perso il treno.</em></p>"
  },
  "ref:g-trapassato": {
    title: "Trapassato prossimo",
    sub: "przeszłość przed przeszłością",
    body: "<p>Imperfetto od <em>avere/essere</em> + imiesłów: <em>avevo mangiato, ero andato</em>.</p><p>Oznacza czynność wcześniejszą od innej przeszłej: <em>Quando sono arrivato, il treno <b>era già partito</b>.</em></p><p>W mowie potocznej bywa zastępowany przez passato prossimo, ale w narracji pisanej jest niezastąpiony, bo porządkuje chronologię.</p>"
  },
  "ref:g-passato-remoto": {
    title: "Passato remoto",
    sub: "narracja, historia, południe Włoch",
    body: "<p>Regularnie: <em>-are</em>: ai, asti, ò, ammo, aste, arono; <em>-ere</em>: ei/etti, esti, é/ette, emmo, este, erono/ettero; <em>-ire</em>: ii, isti, ì, immo, iste, irono.</p><p>Bardzo wiele czasowników na -ere ma tzw. <b>wzorzec 1-3-3</b>: nieregularne są tylko formy io, lui/lei i loro, reszta regularna. <em>prendere → presi, prendesti, prese, prendemmo, prendeste, presero</em>.</p><h4>Kiedy się go używa</h4><ul><li>w narracji literackiej i historycznej: <em>Dante nacque nel 1265</em></li><li>o zdarzeniach odległych i zamkniętych, bez związku z teraźniejszością</li><li>w mowie potocznej na południu Włoch także o wczorajszych zdarzeniach — na północy prawie nie występuje</li></ul><p><b>Trapassato remoto</b> (<em>ebbi fatto</em>) występuje wyłącznie po spójnikach czasowych w tekstach literackich: <em>Appena ebbe finito, uscì.</em></p>"
  },
  "ref:g-condizionale": {
    title: "Tryb warunkowy",
    sub: "vorrei, potrei, avrei voluto",
    body: "<p>Ten sam temat co futuro + <em>-ei, -esti, -ebbe, -emmo, -este, -ebbero</em>: <em>parlerei, sarei, avrei, vorrei, potrei</em>.</p><h4>Funkcje</h4><ul><li>grzeczna prośba: <em>Vorrei un caffè.</em> — najczęstsze zastosowanie</li><li>rada: <em>Dovresti riposare.</em></li><li>życzenie: <em>Mi piacerebbe vederti.</em></li><li>informacja niepotwierdzona (prasa): <em>Il ministro sarebbe pronto a dimettersi.</em></li></ul><p><b>Condizionale passato</b> (<em>avrei fatto, sarei andato</em>) wyraża: niezrealizowaną możliwość (<em>sarei venuto, ma…</em>) oraz <b>przyszłość widzianą z przeszłości</b> — tu włoski różni się od polskiego: <em>Ha detto che <b>sarebbe venuto</b></em> = „powiedział, że przyjdzie”.</p>"
  },
  "ref:g-congiuntivo-pres": {
    title: "Congiuntivo presente i passato",
    sub: "kiedy trzeba, a kiedy nie",
    body: "<p>Końcówki: <em>-are</em> → i, i, i, iamo, iate, ino; <em>-ere/-ire</em> → a, a, a, iamo, iate, ano; <em>-isc-</em> → isca, isca, isca, iamo, iate, iscano.</p><p>Trzy pierwsze osoby są identyczne, dlatego przy congiuntivo <b>nie pomija się zaimka</b>: <em>penso che <b>tu</b> abbia ragione</em>.</p><h4>Wymagają congiuntivo</h4><ul><li>opinia i przypuszczenie: <em>penso che, credo che, mi sembra che, immagino che</em></li><li>wola i uczucie: <em>voglio che, spero che, temo che, mi dispiace che, sono contento che</em></li><li>wyrażenia bezosobowe: <em>è necessario che, bisogna che, è possibile che, è strano che</em></li><li>spójniki: <em>benché, sebbene, nonostante, affinché, perché (=aby), purché, a meno che, prima che, senza che, come se</em></li><li>zdania względne z zaprzeczeniem lub nieokreślonością: <em>cerco una persona che parli polacco</em></li></ul><h4>Nie wymagają</h4><p>Pewność: <em>so che, è certo che, è vero che, siccome, perché (=bo)</em>. Gdy podmiot jest ten sam, zamiast congiuntivo używa się <em>di</em> + bezokolicznik: <em>penso <b>di</b> avere ragione</em>.</p><p><b>Congiuntivo passato</b>: <em>abbia fatto / sia andato</em> — czynność wcześniejsza od zdania nadrzędnego w czasie teraźniejszym.</p>"
  },
  "ref:g-congiuntivo-imp": {
    title: "Congiuntivo imperfetto i trapassato",
    sub: "zgodność czasów i życzenia",
    body: "<p>Imperfetto: temat + <em>-ssi, -ssi, -sse, -ssimo, -ste, -ssero</em> (<em>parlassi, prendessi, dormissi</em>). Nieregularne: <em>essere → fossi</em>, <em>fare → facessi</em>, <em>dare → dessi</em>, <em>stare → stessi</em>, <em>bere → bevessi</em>, <em>dire → dicessi</em>.</p><h4>Zgodność czasów</h4><div class='table-wrap'><table class='gt'><thead><tr><th>zdanie główne</th><th>równoczesność</th><th>uprzedniość</th></tr></thead><tbody><tr><td>teraźniejsze</td><td class='it'>congiuntivo presente</td><td>congiuntivo passato</td></tr><tr><td>przeszłe</td><td class='it'>congiuntivo imperfetto</td><td>congiuntivo trapassato</td></tr></tbody></table></div><p><em>Penso che <b>sia</b> partito</em> → <em>Pensavo che <b>fosse</b> partito.</em></p><h4>Congiuntivo życzeniowy</h4><p>Samodzielnie, bez zdania nadrzędnego: <em>Piovesse almeno!</em>, <em>Magari venisse!</em>, <em>Non l'avessi mai detto!</em>, <em>Volesse il cielo!</em></p><p>Na poziomie <b>C1</b> dochodzi congiuntivo w zdaniu podrzędnym poprzedzającym nadrzędne (<em>Che gli italiani fossero un popolo creativo, lo sapevano tutti</em>) oraz po rzeczownikach wyrażających opinię i uczucie (<em>il dubbio che, la speranza che, l'ipotesi che</em>).</p>"
  },
  "ref:g-periodo-ipotetico": {
    title: "Okresy warunkowe",
    sub: "trzy typy z se",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>typ</th><th>zdanie z se</th><th>zdanie główne</th></tr></thead><tbody><tr><td>1. realny</td><td class='it'>se + indicativo</td><td>indicativo / imperativo</td></tr><tr><td>2. możliwy</td><td class='it'>se + cong. imperfetto</td><td>condizionale presente</td></tr><tr><td>3. nierealny</td><td class='it'>se + cong. trapassato</td><td>condizionale passato</td></tr></tbody></table></div><ul><li><em>Se piove, resto a casa.</em></li><li><em>Se avessi tempo, verrei con te.</em></li><li><em>Se avessi studiato, avrei passato l'esame.</em></li></ul><p class='callout callout--trap'>Po <b>se</b> nigdy nie stawia się condizionale ani futuro. „Se avrei” to błąd, który Włosi wychwytują natychmiast.</p><p>Typ mieszany jest częsty: <em>Se avessi studiato, adesso lavorerei qui.</em> W mowie potocznej zdarza się podwójny imperfetto: <em>Se lo sapevo, non venivo</em> — akceptowalne w rozmowie, nie w piśmie.</p>"
  },
  "ref:g-imperativo": {
    title: "Tryb rozkazujący",
    sub: "tu, Lei, noi, voi i przeczenie",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>osoba</th><th>-are</th><th>-ere</th><th>-ire</th></tr></thead><tbody><tr><td>tu</td><td class='it'>parla</td><td>prendi</td><td>senti</td></tr><tr><td>Lei</td><td class='it'>parli</td><td>prenda</td><td>senta</td></tr><tr><td>noi</td><td class='it'>parliamo</td><td>prendiamo</td><td>sentiamo</td></tr><tr><td>voi</td><td class='it'>parlate</td><td>prendete</td><td>sentite</td></tr></tbody></table></div><p><b>Przeczenie w formie tu</b> używa bezokolicznika: <em>non parlare!</em>, <em>non andare!</em>. W pozostałych osobach zwykłe non + forma.</p><p>Nieregularne krótkie formy tu: <em>fa' (fai), da' (dai), sta' (stai), va' (vai), di' (dici)</em>. Zaimek po nich podwaja spółgłoskę: <em>dammi, fallo, dimmi, vattene</em> (wyjątek: <em>gli</em> — <em>digli</em>).</p><p>Zaimki doklejają się do form tu/noi/voi (<em>prendilo, andiamoci, ascoltatemi</em>), ale stoją przed formą Lei (<em>lo prenda, mi ascolti</em>).</p>"
  },
  "ref:g-gerundio": {
    title: "Gerundio i konstrukcje z stare",
    sub: "stare + gerundio, zdania nieosobowe",
    body: "<p>Gerundio: <em>-are → -ando</em>, <em>-ere/-ire → -endo</em>. Nieregularne: <em>facendo, dicendo, bevendo, traducendo, ponendo</em>.</p><ul><li><b>stare + gerundio</b> — czynność w toku: <em>Sto lavorando.</em> Nie używa się o przyszłości (odwrotnie niż w angielskim).</li><li>okoliczności: <em>Camminando, ho incontrato Marco.</em></li><li>sposób: <em>Ho imparato l'italiano guardando film.</em></li><li>przyczyna: <em>Essendo stanco, sono rimasto a casa.</em></li><li>warunek: <em>Studiando di più, passeresti l'esame.</em></li></ul><p class='callout callout--trap'>Gerundio wymaga <b>tego samego podmiotu</b> co zdanie główne. Inaczej trzeba zbudować pełne zdanie podrzędne.</p><p><b>Gerundio passato</b> (<em>avendo finito</em>) wyraża uprzedniość: <em>Avendo finito il lavoro, sono uscito.</em></p>"
  },
  "ref:g-infinito": {
    title: "Bezokolicznik w zdaniach podrzędnych",
    sub: "di, a, per + infinito",
    body: "<p>Gdy podmiot obu zdań jest ten sam, zamiast zdania z <em>che</em> używa się bezokolicznika.</p><ul><li><b>di</b>: <em>penso di partire, spero di vederti, ho paura di sbagliare, finire di, smettere di, cercare di</em></li><li><b>a</b>: <em>comincio a capire, imparo a nuotare, riesco a farlo, aiutare a, provare a, continuare a</em></li><li><b>per</b> (cel): <em>studio per imparare</em></li><li>bez przyimka po modalnych i po <em>preferire, desiderare, sapere, far fare, lasciare</em></li></ul><p><b>Infinito passato</b>: <em>dopo aver mangiato</em>, <em>dopo essere uscito</em> — zawsze po <em>dopo</em>.</p>"
  },
  "ref:g-passivo": {
    title: "Strona bierna",
    sub: "essere, venire, andare, si passivante",
    body: "<ul><li><b>essere</b> + imiesłów — najogólniejsza: <em>La lettera è stata scritta da Marco.</em></li><li><b>venire</b> + imiesłów — tylko w czasach prostych, podkreśla proces: <em>La legge viene approvata ogni anno.</em></li><li><b>andare</b> + imiesłów — wyraża <b>konieczność</b>: <em>Il modulo va compilato in stampatello</em> = trzeba wypełnić. Uwaga: to nie zwykła bierność.</li><li><b>si passivante</b> — najczęstsza w mowie: <em>Qui si vendono panini.</em> Czasownik zgadza się z rzeczą.</li></ul><p>Wykonawcę wprowadza <em>da</em>: <em>è stato fatto <b>da</b> loro</em>. Bierność tworzą tylko czasowniki przechodnie.</p>"
  },
  "ref:g-participio": {
    title: "Imiesłów czynny i bierny",
    sub: "użycia przymiotnikowe, rzeczownikowe i czasownikowe",
    body: "<p><b>Participio presente</b> (<em>-ante, -ente</em>) rzadko działa jak czasownik, za to często jako przymiotnik lub rzeczownik: <em>brillante, insegnante, cantante, dirigente</em>. Użycie czasownikowe zostało w rejestrze prawniczym i urzędowym: <em>il denaro <b>derivante</b> dalle offerte sarà investito</em>.</p><p><b>Participio passato</b> w zdaniach skróconych zastępuje zdanie czasowe lub przyczynowe: <em><b>Prenotato</b> il viaggio, puoi partire tranquillo.</em> <em><b>Finita</b> la riunione, sono uscito.</em> Imiesłów zgadza się wtedy z rzeczownikiem, do którego się odnosi.</p><p>Jako przymiotnik i rzeczownik: <em>apprezzato, pentito, il ferito, i laureati</em>.</p>"
  },
  "ref:g-perifrasi": {
    title: "Peryfrazy czasownikowe",
    sub: "sto per, va rivisto, ho da fare",
    body: "<ul><li><b>aspektowe</b>: <em>sto per partire</em> (zaraz), <em>mi accingo a</em>, <em>sono sul punto di</em>, <em>comincio a</em>, <em>continuo a</em>, <em>smetto di</em>, <em>finisco di</em></li><li><b>modalne</b>: <em>il compito <b>va</b> rivisto</em> (trzeba poprawić), <em><b>ho da</b> studiare</em> (mam do zrobienia), <em>c'è da fare</em></li><li><b>gerundialne</b>: <em>sta cadendo</em> (w toku), <em>va crescendo</em> (stopniowo, styl pisany)</li><li><b>przyczynowe</b>: <em>far fare qualcosa a qualcuno</em>, <em>lasciar fare</em></li></ul>"
  },
  "ref:g-preposizioni": {
    title: "Przyimki proste i ściągnięte",
    sub: "di, a, da, in, su, con, per, tra/fra",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th></th><th>il</th><th>lo</th><th>la</th><th>l'</th><th>i</th><th>gli</th><th>le</th></tr></thead><tbody><tr><td>di</td><td class='it'>del</td><td>dello</td><td>della</td><td>dell'</td><td>dei</td><td>degli</td><td>delle</td></tr><tr><td>a</td><td class='it'>al</td><td>allo</td><td>alla</td><td>all'</td><td>ai</td><td>agli</td><td>alle</td></tr><tr><td>da</td><td class='it'>dal</td><td>dallo</td><td>dalla</td><td>dall'</td><td>dai</td><td>dagli</td><td>dalle</td></tr><tr><td>in</td><td class='it'>nel</td><td>nello</td><td>nella</td><td>nell'</td><td>nei</td><td>negli</td><td>nelle</td></tr><tr><td>su</td><td class='it'>sul</td><td>sullo</td><td>sulla</td><td>sull'</td><td>sui</td><td>sugli</td><td>sulle</td></tr></tbody></table></div><p><em>con</em>, <em>per</em>, <em>tra/fra</em> nie ściągają się (poza rzadkim <em>col</em>).</p><h4>Miejsce: a czy in</h4><ul><li><b>a</b>: miasta (<em>a Roma</em>), <em>a casa, a scuola, a letto, al mare, al cinema, al lavoro</em></li><li><b>in</b>: kraje i regiony (<em>in Italia, in Toscana</em>), <em>in centro, in ufficio, in banca, in montagna, in vacanza</em>, środki transportu (<em>in treno, in macchina</em>)</li><li><b>da</b>: „u kogoś” i „od kogoś” (<em>vado dal medico, vengo da Marco</em>)</li></ul>"
  },
  "ref:g-prep-verbi": {
    title: "Przyimki wymagane przez czasowniki",
    sub: "lista, której trzeba się nauczyć",
    body: "<p>Przyimek po czasowniku nie jest logiczny — jest leksykalny. Ucz się go razem z czasownikiem.</p><h4>+ di</h4><p><em>finire di, smettere di, cercare di, decidere di, dimenticare di, ricordarsi di, accorgersi di, avere bisogno di, avere paura di, pensare di, sperare di, accettare di, promettere di, evitare di</em></p><h4>+ a</h4><p><em>cominciare a, iniziare a, continuare a, imparare a, riuscire a, provare a, aiutare a, insegnare a, abituarsi a, rinunciare a, pensare a (myśleć o), servire a</em></p><h4>bez przyimka</h4><p><em>potere, volere, dovere, sapere, preferire, desiderare, amare, osare, far fare, lasciare, vedere, sentire</em></p><p class='callout callout--trap'><b>pensare a</b> (myśleć o czymś) kontra <b>pensare di</b> (zamierzać / sądzić). <em>Penso a te</em> ≠ <em>Penso di partire</em>.</p>"
  },
  "ref:g-avverbi": {
    title: "Przysłówki",
    sub: "tworzenie, pozycja, przysłówki skupiające",
    body: "<p>Od przymiotnika: forma żeńska + <em>-mente</em> (<em>lenta → lentamente</em>). Przymiotniki na <em>-le/-re</em> gubią e: <em>facile → facilmente</em>, <em>regolare → regolarmente</em>.</p><p><b>Pozycja</b>: przysłówki częstotliwości stoją zaraz po odmienionym czasowniku (<em>vado <b>spesso</b> al cinema</em>); w czasach złożonych <em>già, mai, ancora, sempre, appena</em> wchodzą <b>między posiłkowy a imiesłów</b>: <em>ho <b>già</b> mangiato</em>, <em>non sono <b>mai</b> stato</em>.</p><p><b>Przysłówki skupiające</b> (B2): <em>anche, pure, solo, soltanto, perfino, addirittura, soprattutto, specialmente, proprio, neanche, nemmeno, neppure</em> — zmieniają sens zależnie od tego, przed czym stoją.</p><p><b>Buono/bene</b>: <em>buono</em> to przymiotnik (jaki?), <em>bene</em> przysłówek (jak?). <em>Un caffè buono</em> kontra <em>parla bene</em>.</p>"
  },
  "ref:g-connettivi": {
    title: "Konektory tekstowe",
    sub: "spójność wypowiedzi i eseju",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>funkcja</th><th>konektory</th></tr></thead><tbody><tr><td>dodawanie</td><td class='it'>inoltre, in più, anche, per di più, oltre a ciò</td></tr><tr><td>przeciwstawienie</td><td class='it'>però, tuttavia, invece, al contrario, anzi, d'altra parte, nondimeno</td></tr><tr><td>przyczyna</td><td class='it'>perché, poiché, siccome, dato che, visto che, in quanto</td></tr><tr><td>skutek</td><td class='it'>quindi, perciò, dunque, di conseguenza, pertanto</td></tr><tr><td>wyjaśnienie</td><td class='it'>cioè, ovvero, vale a dire, in altre parole, in effetti</td></tr><tr><td>porządkowanie</td><td class='it'>anzitutto, in primo luogo, in secondo luogo, infine, per concludere</td></tr><tr><td>podsumowanie</td><td class='it'>insomma, in conclusione, tutto sommato</td></tr></tbody></table></div><p><b>Sygnały dyskursywne</b> w mowie: <em>ecco, allora, niente, insomma, no?, vedi, capirai, guarda, senti, dai</em>. Nie wnoszą treści, ale bez nich wypowiedź brzmi jak czytana z kartki.</p>"
  },
  "ref:g-frase": {
    title: "Szyk zdania, pytanie, przeczenie",
    sub: "podstawy budowy zdania",
    body: "<p>Podstawowy szyk: <b>podmiot – orzeczenie – dopełnienie</b>. Podmiot zwykle się pomija.</p><p><b>Pytanie</b> nie zmienia szyku — wystarczy intonacja albo słowo pytające: <em>Parli italiano?</em>, <em>Dove abiti?</em> Włoski nie ma odpowiednika angielskiego „do”.</p><p><b>Przeczenie</b>: <em>non</em> przed czasownikiem. Podwójne przeczenie jest poprawne i obowiązkowe: <em>Non ho <b>mai</b> visto <b>niente</b> di simile.</em> Gdy słowo przeczące stoi przed czasownikiem, <em>non</em> znika: <em><b>Nessuno</b> è venuto.</em></p><p>Słowa pytające: <em>chi, che cosa, dove, quando, come, perché, quale, quanto</em>. Uwaga na <em>dov'è</em>, <em>com'è</em>, <em>qual è</em> (bez apostrofu!).</p>"
  },
  "ref:g-discorso-indiretto": {
    title: "Mowa zależna",
    sub: "przesunięcie czasów i wyrażeń",
    body: "<div class='table-wrap'><table class='gt'><thead><tr><th>mowa niezależna</th><th>mowa zależna (po czasie przeszłym)</th></tr></thead><tbody><tr><td>presente</td><td class='it'>imperfetto</td></tr><tr><td>passato prossimo / remoto</td><td class='it'>trapassato prossimo</td></tr><tr><td>futuro</td><td class='it'>condizionale passato</td></tr><tr><td>imperativo</td><td class='it'>di + infinito</td></tr><tr><td>congiuntivo presente</td><td class='it'>congiuntivo imperfetto</td></tr></tbody></table></div><p>Zmieniają się też określenia: <em>oggi → quel giorno, domani → il giorno dopo, ieri → il giorno prima, qui → lì, questo → quello, adesso → allora</em>.</p><p><em>„Verrò domani” → Disse che <b>sarebbe venuto il giorno dopo</b>.</em> To najczęstsza pułapka: przyszłość w przeszłości to <b>condizionale passato</b>, nie condizionale presente.</p>"
  },
  "ref:g-registri": {
    title: "Rejestry i styl",
    sub: "formalny, potoczny, urzędowy",
    body: "<p><b>Italiano formale</b>: strona bierna, nominalizacje (<em>l'approvazione della legge</em>), <em>Lei</em>, słownictwo łacińskie (<em>effettuare</em> zamiast <em>fare</em>), unikanie zaimków zrośniętych.</p><p><b>Italiano parlato / neostandard</b>: <em>lui/lei</em> jako podmiot, <em>gli</em> zamiast <em>loro</em>, <em>che</em> polivalente (<em>il giorno che sono arrivato</em>), dislokacja (<em>il libro, l'ho letto</em>), imperfetto zamiast congiuntivo w okresie warunkowym.</p><p><b>Burocratese</b>: <em>di cui sopra, ai sensi di, in ottemperanza a, si comunica che, il sottoscritto</em>. Umiejętność jego <i>czytania</i> jest na C1 potrzebniejsza niż umiejętność pisania w nim.</p><p><b>Dislokacja</b> jako narzędzie: <em>A Roma non ci sono mai stato</em> — przesuwa akcent informacyjny na początek zdania. To nie błąd, tylko cecha żywego włoskiego.</p>"
  },
  "ref:g-fonologia": {
    title: "Wymowa i pisownia",
    sub: "c, g, gl, gn, podwójne spółgłoski, akcent",
    body: "<h4>C i G</h4><p>Przed <em>a, o, u</em> twarde: <em>casa, gatto</em>. Przed <em>e, i</em> miękkie: <em>cena</em> (czena), <em>gelato</em> (dżelato). Litera <b>h</b> przywraca twardość: <em>chiesa</em> (kjeza), <em>ghiaccio</em>. Litera <b>i</b> zmiękcza bez własnego brzmienia: <em>ciao</em> (czao), <em>giorno</em> (dżorno).</p><h4>Grupy szczególne</h4><ul><li><b>gn</b> = polskie ń: <em>gnocchi, bagno, signore</em></li><li><b>gl</b> + i = miękkie l (jak polskie „lj”): <em>famiglia, figlio, aglio</em>; ale <em>glicine, negligente</em> czyta się g+l</li><li><b>sc</b> przed e/i = polskie sz: <em>pesce, sciare</em>; przed a/o/u = sk: <em>scala, scuola</em></li><li><b>z</b> = c lub dz: <em>pizza</em> (pica), <em>zero</em> (dzero)</li></ul><h4>Podwójne spółgłoski</h4><p>Słychać je i zmieniają znaczenie: <em>casa</em> (dom) / <em>cassa</em> (kasa), <em>pala</em> (łopata) / <em>palla</em> (piłka), <em>nono</em> (dziewiąty) / <em>nonno</em> (dziadek). Dla Polaka to jedno z najtrudniejszych rozróżnień — wymaga przytrzymania spółgłoski.</p><h4>Akcent</h4><p>Zwykle na przedostatniej sylabie. Akcent graficzny na końcu jest obowiązkowy: <em>città, perché, caffè, così, più</em>. Uwaga na słowa z akcentem na trzeciej sylabie od końca: <em><b>abi</b>tano, <b>tele</b>fono, <b>por</b>tami</em>.</p>"
  }
});
