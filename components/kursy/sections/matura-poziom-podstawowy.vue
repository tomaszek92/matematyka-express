<template>
  <kursy-course-details
    name="matura-poziom-podstawowy"
    main-img-src="/img/kursy/matura_podstawowa_main.png"
    :effects="effects"
    :schedule="schedule"
    :price="99"
    :promo-price="79"
    :duration-in-min="120">
    <template #title>
      <span>
        Kurs MATURA poziom podstawowy przeznaczony jest dla osób,
        które&nbsp;chcą przygotować się do egzaminu maturalnego. Potrzebują odświeżenia wiedzy zdobytej
        w&nbsp;poprzednich latach i&nbsp;nadrobienia ewentualnych braków.
      </span>
    </template>
    <template #subtitle>
      Jedne zajęcia trwają 2 godziny.
    </template>
  </kursy-course-details>
</template>

<script>
import {effects, schedule} from '@/data/matura-poziom-podstawowy-data';

export default {
  name: "MatematykaExpressMaturaPoziomPodstawowy",
  data() {
    return {
      effects,
      schedule
    }
  }
}
</script>
