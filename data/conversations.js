/* ============================================================
   conversations.js — scenariusze rozmów na głos
   Aplikacja czyta kwestie po włosku, uczeń odpowiada
   do mikrofonu (albo pisemnie, gdy przeglądarka nie wspiera STT).
   „accept" to lista akceptowanych wariantów odpowiedzi.
   ============================================================ */
window.CONVERSATIONS = [

{
  id: "bar-mattina",
  cefr: "A1",
  icon: "☕",
  titleIt: "Colazione al bar",
  titlePl: "Śniadanie w barze",
  settingPl: "Poniedziałek, 8:15. Wchodzisz do baru na rogu. Barman zna Cię z widzenia.",
  closingPl: "Trzy minuty, jedna kawa, żadnej straconej sekundy. Tak wygląda włoskie śniadanie.",
  turns: [
    { sp: "A", it: "Buongiorno! Dica pure.", pl: "Dzień dobry! Słucham." },
    { sp: "TY", taskPl: "Przywitaj się i zamów kawę oraz rogalika.", hintIt: "Buongiorno, un caffè e un cornetto per favore",
      accept: ["buongiorno, un caffè e un cornetto per favore", "un caffè e un cornetto per favore", "buongiorno un caffè e un cornetto"],
      pl: "Dzień dobry, kawę i rogalika poproszę." },
    { sp: "A", it: "Il cornetto lo vuole vuoto o alla crema?", pl: "Rogalik pusty czy z kremem?" },
    { sp: "TY", taskPl: "Powiedz, że wolisz pusty.", hintIt: "Vuoto, grazie",
      accept: ["vuoto grazie", "vuoto", "lo preferisco vuoto"], pl: "Pusty, dziękuję." },
    { sp: "A", it: "Perfetto. Sono due euro e trenta.", pl: "Świetnie. Dwa euro trzydzieści." },
    { sp: "TY", taskPl: "Powiedz, że płacisz kartą.", hintIt: "Posso pagare con la carta?",
      accept: ["posso pagare con la carta", "pago con la carta", "con la carta grazie"], pl: "Mogę zapłacić kartą?" },
    { sp: "A", it: "Certo, il POS è qui. Buona giornata!", pl: "Oczywiście, terminal jest tutaj. Miłego dnia!" },
    { sp: "TY", taskPl: "Podziękuj i pożegnaj się.", hintIt: "Grazie, buona giornata!",
      accept: ["grazie buona giornata", "grazie arrivederci", "grazie altrettanto"], pl: "Dziękuję, miłego dnia!" }
  ]
},

{
  id: "presentarsi",
  cefr: "A1",
  icon: "🙋",
  titleIt: "Il primo giorno di corso",
  titlePl: "Pierwszy dzień kursu",
  settingPl: "Szkoła językowa we Florencji. Ktoś siada obok Ciebie przed zajęciami.",
  closingPl: "Cztery zdania i masz pierwszą włoską znajomość. Tyle wystarczy na start.",
  turns: [
    { sp: "A", it: "Ciao! Posso sedermi qui?", pl: "Cześć! Mogę tu usiąść?" },
    { sp: "TY", taskPl: "Zgódź się uprzejmie.", hintIt: "Certo, prego!",
      accept: ["certo prego", "sì certo", "prego", "certo"], pl: "Jasne, proszę!" },
    { sp: "A", it: "Grazie. Io sono Matteo, e tu come ti chiami?", pl: "Dzięki. Jestem Matteo, a ty jak masz na imię?" },
    { sp: "TY", taskPl: "Przedstaw się imieniem.", hintIt: "Mi chiamo Anna",
      accept: ["mi chiamo anna", "sono anna", "io sono anna", "mi chiamo"], pl: "Nazywam się Anna." },
    { sp: "A", it: "Piacere! Di dove sei?", pl: "Miło mi! Skąd jesteś?" },
    { sp: "TY", taskPl: "Powiedz, że jesteś z Polski.", hintIt: "Sono dalla Polonia",
      accept: ["sono dalla polonia", "vengo dalla polonia", "sono polacca", "sono polacco"], pl: "Jestem z Polski." },
    { sp: "A", it: "Che bello! E che lavoro fai?", pl: "Super! A czym się zajmujesz?" },
    { sp: "TY", taskPl: "Powiedz, jaki masz zawód (np. nauczycielka).", hintIt: "Faccio l'insegnante",
      accept: ["faccio l'insegnante", "sono insegnante", "faccio la giornalista", "sono studente", "sono studentessa", "faccio l'ingegnere"], pl: "Jestem nauczycielką." }
  ]
},

{
  id: "mercato",
  cefr: "A1",
  icon: "🍅",
  titleIt: "Al mercato rionale",
  titlePl: "Na targu osiedlowym",
  settingPl: "Sobota rano, targ pod chmurką. Sprzedawca krzyczy ceny na cały głos.",
  closingPl: "Na targu liczy się tempo i konkret. Etti, chili, basta così.",
  turns: [
    { sp: "A", it: "Signora, mi dica! Abbiamo pomodori bellissimi oggi.", pl: "Proszę pani, słucham! Mamy dziś przepiękne pomidory." },
    { sp: "TY", taskPl: "Poproś o kilogram pomidorów.", hintIt: "Un chilo di pomodori, per favore",
      accept: ["un chilo di pomodori per favore", "un chilo di pomodori", "vorrei un chilo di pomodori"], pl: "Kilogram pomidorów poproszę." },
    { sp: "A", it: "Ecco qua. Altro? Le mele oggi costano poco.", pl: "Proszę bardzo. Coś jeszcze? Jabłka są dziś tanie." },
    { sp: "TY", taskPl: "Zapytaj, ile kosztują jabłka.", hintIt: "Quanto costano le mele?",
      accept: ["quanto costano le mele", "quanto costano", "e quanto costano le mele"], pl: "Ile kosztują jabłka?" },
    { sp: "A", it: "Due euro al chilo. Sono dolcissime.", pl: "Dwa euro za kilo. Są przesłodkie." },
    { sp: "TY", taskPl: "Powiedz, że wystarczy, i zapytaj o rachunek.", hintIt: "Basta così, quanto è in tutto?",
      accept: ["basta così quanto è in tutto", "basta così quant'è", "quanto è in tutto", "basta così grazie"], pl: "Wystarczy, ile razem?" },
    { sp: "A", it: "Sono quattro e cinquanta. Grazie a lei!", pl: "Cztery pięćdziesiąt. Dziękuję pani!" }
  ]
},

{
  id: "ristorante",
  cefr: "A2",
  icon: "🍝",
  titleIt: "Cena al ristorante",
  titlePl: "Kolacja w restauracji",
  settingPl: "Wieczór, restauracja bez rezerwacji. Kelner podchodzi z menu.",
  closingPl: "Zamawianie po włosku ma stały rytm: primo, secondo, contorno, dolce, caffè.",
  turns: [
    { sp: "A", it: "Buonasera! Avete prenotato?", pl: "Dobry wieczór! Mają państwo rezerwację?" },
    { sp: "TY", taskPl: "Powiedz, że nie, i zapytaj o stolik dla dwóch osób.", hintIt: "No, c'è un tavolo per due?",
      accept: ["no c'è un tavolo per due", "no, avete un tavolo per due", "c'è un tavolo per due persone"], pl: "Nie, jest stolik dla dwóch osób?" },
    { sp: "A", it: "Certo, si accomodi. Ecco il menù. Da bere?", pl: "Oczywiście, proszę siadać. Oto menu. Do picia?" },
    { sp: "TY", taskPl: "Poproś butelkę wody gazowanej i lampkę czerwonego wina.", hintIt: "Una bottiglia d'acqua frizzante e un calice di vino rosso",
      accept: ["una bottiglia d'acqua frizzante e un calice di vino rosso", "acqua frizzante e vino rosso", "una bottiglia di acqua frizzante e un bicchiere di vino rosso"], pl: "Butelkę wody gazowanej i kieliszek czerwonego wina." },
    { sp: "A", it: "Benissimo. E per primo?", pl: "Świetnie. A na pierwsze danie?" },
    { sp: "TY", taskPl: "Zamów cacio e pepe i zapytaj, czy danie jest ostre.", hintIt: "Prendo la cacio e pepe. È piccante?",
      accept: ["prendo la cacio e pepe è piccante", "vorrei la cacio e pepe, è piccante", "la cacio e pepe per favore è piccante"], pl: "Wezmę cacio e pepe. Czy jest ostre?" },
    { sp: "A", it: "Solo un pochino, il pepe si sente. Vuole anche un secondo?", pl: "Tylko troszkę, pieprz czuć. Chcą państwo drugie danie?" },
    { sp: "TY", taskPl: "Odmów uprzejmie i poproś o rachunek na koniec.", hintIt: "No grazie, poi il conto per favore",
      accept: ["no grazie poi il conto per favore", "no grazie, il conto per favore", "no grazie basta così poi il conto"], pl: "Nie, dziękuję, później rachunek poproszę." }
  ]
},

{
  id: "treno",
  cefr: "A2",
  icon: "🚆",
  titleIt: "Alla biglietteria",
  titlePl: "W kasie biletowej",
  settingPl: "Dworzec Roma Termini, kolejka do okienka, tablica odjazdów miga nad głową.",
  closingPl: "Regionale czy Frecciarossa — różnica to godzina jazdy i trzydzieści euro.",
  turns: [
    { sp: "A", it: "Prego, mi dica.", pl: "Proszę, słucham." },
    { sp: "TY", taskPl: "Poproś o bilet do Florencji na dziś po południu.", hintIt: "Un biglietto per Firenze per oggi pomeriggio",
      accept: ["un biglietto per firenze per oggi pomeriggio", "vorrei un biglietto per firenze oggi pomeriggio", "un biglietto per firenze per favore"], pl: "Bilet do Florencji na dziś po południu." },
    { sp: "A", it: "Regionale o Frecciarossa? Il Freccia ci mette un'ora e mezza.", pl: "Regionalny czy Frecciarossa? Freccia jedzie półtorej godziny." },
    { sp: "TY", taskPl: "Zapytaj, ile kosztuje Frecciarossa.", hintIt: "Quanto costa il Frecciarossa?",
      accept: ["quanto costa il frecciarossa", "quanto costa il freccia", "quanto costa"], pl: "Ile kosztuje Frecciarossa?" },
    { sp: "A", it: "Quarantadue euro in seconda classe.", pl: "Czterdzieści dwa euro w drugiej klasie." },
    { sp: "TY", taskPl: "Zgódź się i zapytaj, z którego peronu odjeżdża.", hintIt: "Va bene, da quale binario parte?",
      accept: ["va bene da quale binario parte", "va bene, che binario", "da quale binario parte"], pl: "Dobrze, z którego peronu odjeżdża?" },
    { sp: "A", it: "Binario 9, tra venti minuti. Ricordi di convalidare se prende il regionale.", pl: "Peron 9, za dwadzieścia minut. Proszę pamiętać o skasowaniu, jeśli weźmie pan regionalny." }
  ]
},

{
  id: "medico",
  cefr: "A2",
  icon: "🩺",
  titleIt: "Dal medico",
  titlePl: "U lekarza",
  settingPl: "Przychodnia, wizyta bez zapisu. Lekarka pyta, co Ci dolega.",
  closingPl: "Trzy zwroty ratują życie u lekarza: mi fa male, da quanto tempo, ho la febbre.",
  turns: [
    { sp: "A", it: "Buongiorno, si accomodi. Cosa c'è che non va?", pl: "Dzień dobry, proszę siadać. Co się dzieje?" },
    { sp: "TY", taskPl: "Powiedz, że boli Cię gardło i masz gorączkę.", hintIt: "Mi fa male la gola e ho la febbre",
      accept: ["mi fa male la gola e ho la febbre", "ho mal di gola e la febbre", "mi fa male la gola, ho la febbre"], pl: "Boli mnie gardło i mam gorączkę." },
    { sp: "A", it: "Da quanto tempo?", pl: "Od jak dawna?" },
    { sp: "TY", taskPl: "Powiedz, że od trzech dni.", hintIt: "Da tre giorni",
      accept: ["da tre giorni", "tre giorni", "sono tre giorni"], pl: "Od trzech dni." },
    { sp: "A", it: "Ha allergie a qualche farmaco?", pl: "Ma pan/pani alergie na jakieś leki?" },
    { sp: "TY", taskPl: "Powiedz, że nie masz żadnych alergii.", hintIt: "No, non ho allergie",
      accept: ["no non ho allergie", "no nessuna allergia", "non ho allergie"], pl: "Nie, nie mam alergii." },
    { sp: "A", it: "Le prescrivo un antibiotico. Riposo e molta acqua.", pl: "Przepiszę antybiotyk. Odpoczynek i dużo wody." },
    { sp: "TY", taskPl: "Zapytaj, ile razy dziennie brać lek.", hintIt: "Quante volte al giorno lo devo prendere?",
      accept: ["quante volte al giorno lo devo prendere", "quante volte al giorno", "ogni quanto lo prendo"], pl: "Ile razy dziennie mam go brać?" }
  ]
},

{
  id: "affitto",
  cefr: "B1",
  icon: "🔑",
  titleIt: "Visita all'appartamento",
  titlePl: "Oglądanie mieszkania",
  settingPl: "Pośredniczka pokazuje dwupokojowe mieszkanie w Bolonii. Masz dziesięć minut i sto pytań.",
  closingPl: "Trzy rzeczy, o które trzeba zapytać zawsze: spese condominiali, cauzione, tipo di contratto.",
  turns: [
    { sp: "A", it: "Ecco il bilocale. Come vede, è luminoso e appena ristrutturato.", pl: "Oto dwupokojowe. Jak pani widzi, jasne i świeżo po remoncie." },
    { sp: "TY", taskPl: "Zapytaj, ile wynosi czynsz miesięczny.", hintIt: "Qual è l'affitto mensile?",
      accept: ["qual è l'affitto mensile", "quanto è l'affitto al mese", "quanto costa al mese"], pl: "Ile wynosi czynsz miesięczny?" },
    { sp: "A", it: "Settecento euro al mese, spese escluse.", pl: "Siedemset euro miesięcznie, bez opłat." },
    { sp: "TY", taskPl: "Zapytaj, ile wynoszą opłaty administracyjne.", hintIt: "A quanto ammontano le spese condominiali?",
      accept: ["a quanto ammontano le spese condominiali", "quanto sono le spese condominiali", "e le spese quanto sono"], pl: "Ile wynoszą opłaty administracyjne?" },
    { sp: "A", it: "Circa novanta euro al mese, riscaldamento incluso.", pl: "Około dziewięćdziesięciu euro, z ogrzewaniem." },
    { sp: "TY", taskPl: "Zapytaj o rodzaj umowy i wysokość kaucji.", hintIt: "Che tipo di contratto è? E quant'è la cauzione?",
      accept: ["che tipo di contratto è e quant'è la cauzione", "che contratto è e quanto è la cauzione", "che tipo di contratto e la cauzione"], pl: "Jaki to typ umowy? I ile wynosi kaucja?" },
    { sp: "A", it: "Un 4+4, cauzione di tre mensilità.", pl: "Umowa 4+4, kaucja trzy czynsze." },
    { sp: "TY", taskPl: "Powiedz, że zastanowisz się i odezwiesz jutro.", hintIt: "Ci penso e le faccio sapere domani",
      accept: ["ci penso e le faccio sapere domani", "ci penso su e le rispondo domani", "le faccio sapere domani"], pl: "Zastanowię się i dam znać jutro." }
  ]
},

{
  id: "colloquio",
  cefr: "B1",
  icon: "💼",
  titleIt: "Colloquio di lavoro",
  titlePl: "Rozmowa o pracę",
  settingPl: "Agencja marketingowa w Mediolanie. HR-owiec zaczyna od klasyka.",
  closingPl: "Po włosku na rozmowie o pracę mówi się konkretnie i bez przesadnej skromności.",
  turns: [
    { sp: "A", it: "Allora, mi parli un po' di lei.", pl: "No dobrze, proszę opowiedzieć coś o sobie." },
    { sp: "TY", taskPl: "Powiedz, jak się nazywasz, ile masz doświadczenia i w czym.", hintIt: "Mi chiamo Anna, ho cinque anni di esperienza nel marketing digitale",
      accept: ["mi chiamo anna ho cinque anni di esperienza nel marketing digitale", "sono anna e ho cinque anni di esperienza nel marketing", "ho cinque anni di esperienza nel marketing digitale"],
      pl: "Nazywam się Anna, mam pięć lat doświadczenia w marketingu cyfrowym." },
    { sp: "A", it: "Perché ha deciso di candidarsi da noi?", pl: "Dlaczego zdecydowała się pani aplikować u nas?" },
    { sp: "TY", taskPl: "Powiedz, że interesuje Cię ich podejście do projektów międzynarodowych.", hintIt: "Perché mi interessa il vostro approccio ai progetti internazionali",
      accept: ["perché mi interessa il vostro approccio ai progetti internazionali", "mi interessa il vostro approccio ai progetti internazionali", "perché seguo i vostri progetti internazionali"],
      pl: "Bo interesuje mnie wasze podejście do projektów międzynarodowych." },
    { sp: "A", it: "Qual è secondo lei il suo punto debole?", pl: "Jaka jest, pani zdaniem, pani słaba strona?" },
    { sp: "TY", taskPl: "Przyznaj się do wady i powiedz, jak nad nią pracujesz.", hintIt: "Tendo a voler controllare tutto, ma sto imparando a delegare",
      accept: ["tendo a voler controllare tutto ma sto imparando a delegare", "sono troppo perfezionista ma sto imparando a delegare", "tendo a controllare tutto, sto imparando a delegare"],
      pl: "Mam skłonność do kontrolowania wszystkiego, ale uczę się delegować." },
    { sp: "A", it: "Bene. Ha domande per noi?", pl: "Dobrze. Ma pani do nas pytania?" },
    { sp: "TY", taskPl: "Zapytaj o skład zespołu i najbliższe kroki rekrutacji.", hintIt: "Sì: com'è composto il team e quali sono i prossimi passi?",
      accept: ["com'è composto il team e quali sono i prossimi passi", "sì com'è composto il team e quali sono i prossimi passi", "vorrei sapere com'è composto il team e i prossimi passi"],
      pl: "Tak: jak wygląda zespół i jakie są kolejne kroki?" }
  ]
},

{
  id: "burocrazia",
  cefr: "B1",
  icon: "🗂️",
  titleIt: "All'Agenzia delle Entrate",
  titlePl: "W urzędzie skarbowym",
  settingPl: "Kolejka po codice fiscale. Numerek 87, na wyświetlaczu 61.",
  closingPl: "Codice fiscale to klucz do wszystkiego we Włoszech: konta, umowy, lekarza, karty SIM.",
  turns: [
    { sp: "A", it: "Numero ottantasette, sportello tre. Buongiorno, di cosa ha bisogno?", pl: "Numer osiemdziesiąt siedem, okienko trzy. Dzień dobry, czego pani potrzebuje?" },
    { sp: "TY", taskPl: "Powiedz, że potrzebujesz wyrobić codice fiscale.", hintIt: "Ho bisogno di richiedere il codice fiscale",
      accept: ["ho bisogno di richiedere il codice fiscale", "vorrei richiedere il codice fiscale", "devo fare il codice fiscale"], pl: "Potrzebuję wyrobić codice fiscale." },
    { sp: "A", it: "Ha un documento d'identità valido e il modulo compilato?", pl: "Ma pani ważny dokument tożsamości i wypełniony formularz?" },
    { sp: "TY", taskPl: "Powiedz, że masz paszport, ale nie masz formularza.", hintIt: "Ho il passaporto, ma non ho il modulo",
      accept: ["ho il passaporto ma non ho il modulo", "ho il passaporto, il modulo no", "ho solo il passaporto"], pl: "Mam paszport, ale nie mam formularza." },
    { sp: "A", it: "Nessun problema, glielo do io. Lo compili in stampatello.", pl: "Nie ma problemu, dam pani. Proszę wypełnić drukowanymi literami." },
    { sp: "TY", taskPl: "Zapytaj, ile trzeba czekać na dokument.", hintIt: "Quanto tempo ci vuole?",
      accept: ["quanto tempo ci vuole", "quanto ci vuole", "quanto tempo serve"], pl: "Ile to potrwa?" },
    { sp: "A", it: "Glielo rilascio subito, è immediato.", pl: "Wydam pani od razu, to natychmiastowe." }
  ]
},

{
  id: "dibattito",
  cefr: "B2",
  icon: "🗣️",
  titleIt: "Discussione tra amici",
  titlePl: "Dyskusja przy stole",
  settingPl: "Kolacja u znajomych. Rozmowa schodzi na pracę zdalną i nikt nie zamierza odpuścić.",
  closingPl: "We włoskiej dyskusji przerywa się sobie nawzajem — to nie brak kultury, tylko zaangażowanie.",
  turns: [
    { sp: "A", it: "Secondo me lo smart working ha distrutto il senso di squadra. Tu che ne pensi?", pl: "Moim zdaniem praca zdalna zniszczyła poczucie zespołu. Co ty na to?" },
    { sp: "TY", taskPl: "Zgódź się częściowo, ale wskaż kontrargument.", hintIt: "In parte sono d'accordo, però ha anche ridotto lo stress dei pendolari",
      accept: ["in parte sono d'accordo però ha anche ridotto lo stress dei pendolari", "sono parzialmente d'accordo ma ha ridotto lo stress dei pendolari", "in parte sì, però ha ridotto lo stress"],
      pl: "Częściowo się zgadzam, ale zmniejszyła też stres dojeżdżających." },
    { sp: "A", it: "Sì, ma non credi che i giovani imparino meno se non stanno in ufficio?", pl: "Tak, ale nie sądzisz, że młodzi uczą się mniej, jeśli nie są w biurze?" },
    { sp: "TY", taskPl: "Odpowiedz, że zależy to od tego, jak firma organizuje mentoring.", hintIt: "Dipende da come l'azienda organizza il mentoring",
      accept: ["dipende da come l'azienda organizza il mentoring", "dipende da come viene organizzato il mentoring", "dipende dall'organizzazione del mentoring"],
      pl: "To zależy od tego, jak firma organizuje mentoring." },
    { sp: "A", it: "Su questo ti do ragione. Però il modello ibrido secondo me è il peggiore dei due mondi.", pl: "Tu przyznaję ci rację. Ale model hybrydowy to moim zdaniem najgorsze z dwóch światów." },
    { sp: "TY", taskPl: "Nie zgódź się stanowczo i uzasadnij jednym argumentem.", hintIt: "Non sono affatto d'accordo: l'ibrido permette di scegliere in base al tipo di lavoro",
      accept: ["non sono affatto d'accordo l'ibrido permette di scegliere in base al tipo di lavoro", "non sono d'accordo, l'ibrido permette di scegliere in base al lavoro", "dissento: l'ibrido permette di scegliere in base al tipo di lavoro"],
      pl: "Zupełnie się nie zgadzam: hybryda pozwala wybierać zależnie od typu pracy." }
  ]
}

];
