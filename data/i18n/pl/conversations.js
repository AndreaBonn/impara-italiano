/* ============================================================
   Teksty w języku ucznia (pl) do data/core/conversations.js
   Klucze odsyłają do id z warstwy neutralnej; tablice łączą się
   po indeksie, więc ich długość musi się zgadzać z core.
   Sprawdza to gate parzystości w scripts/validate.mjs.
   ============================================================ */
LINGUAI.addStrings("pl", {
  "conv:bar-mattina": {
    title: "Śniadanie w barze",
    setting: "Poniedziałek, 8:15. Wchodzisz do baru na rogu. Barman zna Cię z widzenia.",
    closing: "Trzy minuty, jedna kawa, żadnej straconej sekundy. Tak wygląda włoskie śniadanie.",
    turns: [
      { tr: "Dzień dobry! Słucham." },
      { task: "Przywitaj się i zamów kawę oraz rogalika.", tr: "Dzień dobry, kawę i rogalika poproszę." },
      { tr: "Rogalik pusty czy z kremem?" },
      { task: "Powiedz, że wolisz pusty.", tr: "Pusty, dziękuję." },
      { tr: "Świetnie. Dwa euro trzydzieści." },
      { task: "Powiedz, że płacisz kartą.", tr: "Mogę zapłacić kartą?" },
      { tr: "Oczywiście, terminal jest tutaj. Miłego dnia!" },
      { task: "Podziękuj i pożegnaj się.", tr: "Dziękuję, miłego dnia!" }
    ]
  },
  "conv:presentarsi": {
    title: "Pierwszy dzień kursu",
    setting: "Szkoła językowa we Florencji. Ktoś siada obok Ciebie przed zajęciami.",
    closing: "Cztery zdania i masz pierwszą włoską znajomość. Tyle wystarczy na start.",
    turns: [
      { tr: "Cześć! Mogę tu usiąść?" },
      { task: "Zgódź się uprzejmie.", tr: "Jasne, proszę!" },
      { tr: "Dzięki. Jestem Matteo, a ty jak masz na imię?" },
      { task: "Przedstaw się imieniem.", tr: "Nazywam się Anna." },
      { tr: "Miło mi! Skąd jesteś?" },
      { task: "Powiedz, że jesteś z Polski.", tr: "Jestem z Polski." },
      { tr: "Super! A czym się zajmujesz?" },
      { task: "Powiedz, jaki masz zawód (np. nauczycielka).", tr: "Jestem nauczycielką." }
    ]
  },
  "conv:mercato": {
    title: "Na targu osiedlowym",
    setting: "Sobota rano, targ pod chmurką. Sprzedawca krzyczy ceny na cały głos.",
    closing: "Na targu liczy się tempo i konkret. Etti, chili, basta così.",
    turns: [
      { tr: "Proszę pani, słucham! Mamy dziś przepiękne pomidory." },
      { task: "Poproś o kilogram pomidorów.", tr: "Kilogram pomidorów poproszę." },
      { tr: "Proszę bardzo. Coś jeszcze? Jabłka są dziś tanie." },
      { task: "Zapytaj, ile kosztują jabłka.", tr: "Ile kosztują jabłka?" },
      { tr: "Dwa euro za kilo. Są przesłodkie." },
      { task: "Powiedz, że wystarczy, i zapytaj o rachunek.", tr: "Wystarczy, ile razem?" },
      { tr: "Cztery pięćdziesiąt. Dziękuję pani!" }
    ]
  },
  "conv:ristorante": {
    title: "Kolacja w restauracji",
    setting: "Wieczór, restauracja bez rezerwacji. Kelner podchodzi z menu.",
    closing: "Zamawianie po włosku ma stały rytm: primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "Dobry wieczór! Mają państwo rezerwację?" },
      {
        task: "Powiedz, że nie, i zapytaj o stolik dla dwóch osób.",
        tr: "Nie, jest stolik dla dwóch osób?"
      },
      { tr: "Oczywiście, proszę siadać. Oto menu. Do picia?" },
      {
        task: "Poproś butelkę wody gazowanej i lampkę czerwonego wina.",
        tr: "Butelkę wody gazowanej i kieliszek czerwonego wina."
      },
      { tr: "Świetnie. A na pierwsze danie?" },
      {
        task: "Zamów cacio e pepe i zapytaj, czy danie jest ostre.",
        tr: "Wezmę cacio e pepe. Czy jest ostre?"
      },
      { tr: "Tylko troszkę, pieprz czuć. Chcą państwo drugie danie?" },
      {
        task: "Odmów uprzejmie i poproś o rachunek na koniec.",
        tr: "Nie, dziękuję, później rachunek poproszę."
      }
    ]
  },
  "conv:treno": {
    title: "W kasie biletowej",
    setting: "Dworzec Roma Termini, kolejka do okienka, tablica odjazdów miga nad głową.",
    closing: "Regionale czy Frecciarossa — różnica to godzina jazdy i trzydzieści euro.",
    turns: [
      { tr: "Proszę, słucham." },
      {
        task: "Poproś o bilet do Florencji na dziś po południu.",
        tr: "Bilet do Florencji na dziś po południu."
      },
      { tr: "Regionalny czy Frecciarossa? Freccia jedzie półtorej godziny." },
      { task: "Zapytaj, ile kosztuje Frecciarossa.", tr: "Ile kosztuje Frecciarossa?" },
      { tr: "Czterdzieści dwa euro w drugiej klasie." },
      { task: "Zgódź się i zapytaj, z którego peronu odjeżdża.", tr: "Dobrze, z którego peronu odjeżdża?" },
      { tr: "Peron 9, za dwadzieścia minut. Proszę pamiętać o skasowaniu, jeśli weźmie pan regionalny." }
    ]
  },
  "conv:medico": {
    title: "U lekarza",
    setting: "Przychodnia, wizyta bez zapisu. Lekarka pyta, co Ci dolega.",
    closing: "Trzy zwroty ratują życie u lekarza: mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Dzień dobry, proszę siadać. Co się dzieje?" },
      { task: "Powiedz, że boli Cię gardło i masz gorączkę.", tr: "Boli mnie gardło i mam gorączkę." },
      { tr: "Od jak dawna?" },
      { task: "Powiedz, że od trzech dni.", tr: "Od trzech dni." },
      { tr: "Ma pan/pani alergie na jakieś leki?" },
      { task: "Powiedz, że nie masz żadnych alergii.", tr: "Nie, nie mam alergii." },
      { tr: "Przepiszę antybiotyk. Odpoczynek i dużo wody." },
      { task: "Zapytaj, ile razy dziennie brać lek.", tr: "Ile razy dziennie mam go brać?" }
    ]
  },
  "conv:affitto": {
    title: "Oglądanie mieszkania",
    setting: "Pośredniczka pokazuje dwupokojowe mieszkanie w Bolonii. Masz dziesięć minut i sto pytań.",
    closing: "Trzy rzeczy, o które trzeba zapytać zawsze: spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "Oto dwupokojowe. Jak pani widzi, jasne i świeżo po remoncie." },
      { task: "Zapytaj, ile wynosi czynsz miesięczny.", tr: "Ile wynosi czynsz miesięczny?" },
      { tr: "Siedemset euro miesięcznie, bez opłat." },
      { task: "Zapytaj, ile wynoszą opłaty administracyjne.", tr: "Ile wynoszą opłaty administracyjne?" },
      { tr: "Około dziewięćdziesięciu euro, z ogrzewaniem." },
      { task: "Zapytaj o rodzaj umowy i wysokość kaucji.", tr: "Jaki to typ umowy? I ile wynosi kaucja?" },
      { tr: "Umowa 4+4, kaucja trzy czynsze." },
      { task: "Powiedz, że zastanowisz się i odezwiesz jutro.", tr: "Zastanowię się i dam znać jutro." }
    ]
  },
  "conv:colloquio": {
    title: "Rozmowa o pracę",
    setting: "Agencja marketingowa w Mediolanie. HR-owiec zaczyna od klasyka.",
    closing: "Po włosku na rozmowie o pracę mówi się konkretnie i bez przesadnej skromności.",
    turns: [
      { tr: "No dobrze, proszę opowiedzieć coś o sobie." },
      {
        task: "Powiedz, jak się nazywasz, ile masz doświadczenia i w czym.",
        tr: "Nazywam się Anna, mam pięć lat doświadczenia w marketingu cyfrowym."
      },
      { tr: "Dlaczego zdecydowała się pani aplikować u nas?" },
      {
        task: "Powiedz, że interesuje Cię ich podejście do projektów międzynarodowych.",
        tr: "Bo interesuje mnie wasze podejście do projektów międzynarodowych."
      },
      { tr: "Jaka jest, pani zdaniem, pani słaba strona?" },
      {
        task: "Przyznaj się do wady i powiedz, jak nad nią pracujesz.",
        tr: "Mam skłonność do kontrolowania wszystkiego, ale uczę się delegować."
      },
      { tr: "Dobrze. Ma pani do nas pytania?" },
      {
        task: "Zapytaj o skład zespołu i najbliższe kroki rekrutacji.",
        tr: "Tak: jak wygląda zespół i jakie są kolejne kroki?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "W urzędzie skarbowym",
    setting: "Kolejka po codice fiscale. Numerek 87, na wyświetlaczu 61.",
    closing: "Codice fiscale to klucz do wszystkiego we Włoszech: konta, umowy, lekarza, karty SIM.",
    turns: [
      { tr: "Numer osiemdziesiąt siedem, okienko trzy. Dzień dobry, czego pani potrzebuje?" },
      { task: "Powiedz, że potrzebujesz wyrobić codice fiscale.", tr: "Potrzebuję wyrobić codice fiscale." },
      { tr: "Ma pani ważny dokument tożsamości i wypełniony formularz?" },
      {
        task: "Powiedz, że masz paszport, ale nie masz formularza.",
        tr: "Mam paszport, ale nie mam formularza."
      },
      { tr: "Nie ma problemu, dam pani. Proszę wypełnić drukowanymi literami." },
      { task: "Zapytaj, ile trzeba czekać na dokument.", tr: "Ile to potrwa?" },
      { tr: "Wydam pani od razu, to natychmiastowe." }
    ]
  },
  "conv:dibattito": {
    title: "Dyskusja przy stole",
    setting: "Kolacja u znajomych. Rozmowa schodzi na pracę zdalną i nikt nie zamierza odpuścić.",
    closing: "We włoskiej dyskusji przerywa się sobie nawzajem — to nie brak kultury, tylko zaangażowanie.",
    turns: [
      { tr: "Moim zdaniem praca zdalna zniszczyła poczucie zespołu. Co ty na to?" },
      {
        task: "Zgódź się częściowo, ale wskaż kontrargument.",
        tr: "Częściowo się zgadzam, ale zmniejszyła też stres dojeżdżających."
      },
      { tr: "Tak, ale nie sądzisz, że młodzi uczą się mniej, jeśli nie są w biurze?" },
      {
        task: "Odpowiedz, że zależy to od tego, jak firma organizuje mentoring.",
        tr: "To zależy od tego, jak firma organizuje mentoring."
      },
      { tr: "Tu przyznaję ci rację. Ale model hybrydowy to moim zdaniem najgorsze z dwóch światów." },
      {
        task: "Nie zgódź się stanowczo i uzasadnij jednym argumentem.",
        tr: "Zupełnie się nie zgadzam: hybryda pozwala wybierać zależnie od typu pracy."
      }
    ]
  }
});
