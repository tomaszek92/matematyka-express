<template>
  <div>
    <kursy-sections-features />
    <hr />
    <kursy-sections-types />
    <hr />
    <kursy-sections-egzamin-osmoklasisty id="egzamin-osmoklasisty" />
    <hr />
    <kursy-sections-matura-poziom-podstawowy id="matura-poziom-podstawowy" />
    <hr />
    <kursy-sections-matura-poziom-rozszerzony id="matura-poziom-rozszerzony" />
    <hr />
    <div id="zapisz-sie" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div class="title text-center text-4xl font-extrabold mb-4">
          Lokalizacja
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div class="grid content-center">
            <img src="/img/kursy/lokalizacja_mapa.png" alt="mapa" />
          </div>
          <div class="text-center">
            <div class="my-4">
              Kursy odbywają się WYŁĄCZNIE w&nbsp;formie stacjonarnej,
              w&nbsp;budynku (nad Cafe Peron) przy ulicy Patriotów 303, Warszawa
              Wawer na II piętrze.
            </div>
            <div class="mb-4">
              <strong>Doskonały dojazd komunikacją miejską.</strong>
            </div>
            <div class="mb-4">
              <strong>Autobusy:</strong> 115, 119, 147, 213, 305, 319, 521
            </div>
            <div><strong>PKP:</strong> R1, R3, R7, R8, S1</div>
          </div>
        </div>
      </div>
      <div>
        <div class="title text-center text-4xl font-extrabold mb-4">
          Płatności
        </div>
        <div class="text-center">
          <div class="mb-4 md:mt-8">Istnieją trzy możliwości opłaty kursu</div>
          <div class="mb-4">
            <strong>Opłata jednorazowa</strong><br />
            Cały kurs opłacony przed rozpoczęcziem kursu
          </div>
          <div class="mb-4">
            <strong>Opłata w 2 ratach</strong><br />
            1 rata- za miesiące (wrzesień- grudzień)-płatne przed rozpoczęcziem
            kursu 2 rata- za miesiące (styczeń-maj/kwiecień)-platne do
            31.12.2022r.
          </div>
          <div>
            <strong>Opłata miesięczna (w 8/9 ratach)</strong><br />
            Każdy miesiąc opłacony z góry do ostatniego dnia miesiąca
            poprzedniego
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center"
    >
      <div>
        <div class="title text-center text-4xl font-extrabold mb-4">Zapisy</div>
        <div class="text-center mb-4 md:mb-8">
          Licza dostępnych miejsc na kursie, jest ograniczona, ponieważ zajcia
          prowadzone się w&nbsp;małych, 4-5cio osobowych grupach. Jeśli chcesz
          wziąć udział w kursie, zadzwoń.
        </div>
        <div>
          <a
            class="button flex items-center justify-center text-white text-xl font-extrabold px-8 py-4 rounded-xl max-w-md mx-auto"
            href="tel:+4866206360"
          >
            <img
              class="h-4 mr-2"
              src="/img/o-mnie/telephone.png"
              alt="telefon"
            />
            <span>+48 662 063 460</span>
          </a>
        </div>
      </div>
      <div>
        <img class="max-h-72" src="/img/kursy/zapisy.png" alt="zapisy" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressKursyPage',
}
</script>

<style scoped>
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
