<template>
  <div>
    <KursySectionsFeatures />
    <hr />
    <KursySectionsTypes />
    <hr />
    <KursySectionsEgzaminOsmoklasisty id="egzamin-osmoklasisty" />
    <hr />
    <KursySectionsMaturaPoziomPodstawowy id="matura-poziom-podstawowy" />
    <hr />
    <KursySectionsMaturaPoziomRozszerzony id="matura-poziom-rozszerzony" />
    <hr />
    <div id="zapisz-sie" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div class="title text-center text-4xl font-extrabold mb-4">
          Lokalizacja
        </div>
        <div class="grid grid-cols-1 justify-items-center">
          <div class="mt-2 mb-8">
            <div class="flex justify-center mb-2">
              <img
                src="/img/kursy/vector.png"
                alt="mapa"
                style="height: 3rem"
              />
            </div>
            <div class="text-center">
              Kursy w formie stacjonarnej odbywają się na ul. Wilczej 56/6 w
              Warszawie.
            </div>
          </div>
          <div class="mb-4 md:mb-0">
            <div class="flex justify-center mb-2">
              <img src="/img/kursy/skype.png" alt="mapa" style="height: 3rem" />
            </div>
            <div class="text-center">
              Kursy w formie online odbywają się za pośrednictwem Skype.
            </div>
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
            Cały kurs opłacony przed rozpoczęciem kursu
          </div>
          <div class="mb-4">
            <strong>Opłata w 2 ratach</strong><br />
            1 rata- za miesiące (wrzesień- grudzień)-płatne przed rozpoczęciem
            kursu 2 rata- za miesiące (styczeń-maj/kwiecień)-płatne do
            31.12.2023r.
          </div>
          <div class="mb-4">
            <strong>Opłata miesięczna (w 8/9 ratach)</strong><br />
            Każdy miesiąc opłacony z góry do ostatniego dnia miesiąca
            poprzedniego
          </div>
          <div>
            <strong>Numer konta</strong><br />
            33 1160 2202 0000 0002 6713 6076
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
          Liczba dostępnych miejsc na kursie, jest ograniczona, ponieważ zajęcia
          prowadzone są w&nbsp;małych, 4-5cio osobowych grupach. Jeśli chcesz
          wziąć udział w kursie, zadzwoń.
        </div>
        <div>
          <a
            class="button flex items-center justify-center text-white text-xl font-extrabold px-8 py-4 rounded-xl max-w-md mx-auto"
            :href="`tel:${telephone}`"
          >
            <img
              class="h-4 mr-2"
              src="/img/o-mnie/telephone.png"
              alt="telefon"
            />
            <span>{{ formattedTelephone }}</span>
          </a>
        </div>
      </div>
      <div>
        <img class="max-h-72" src="/img/kursy/zapisy.png" alt="zapisy" />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Kursy',
})
</script>

<script>
import { TELEPHONE } from '@/data/general'
import { formatTelephone } from '~/helpers/formatters'

export default {
  data() {
    return {
      telephone: TELEPHONE,
    }
  },
  computed: {
    formattedTelephone() {
      return formatTelephone(TELEPHONE)
    },
  },
}
</script>

<style scoped>
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
