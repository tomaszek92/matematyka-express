<template>
  <span>todo</span>
  <!--  <kursy-course-details-->
  <!--    name="matura-poziom-rozszerzony"-->
  <!--    main-img-src="/img/kursy/matura_rozszerzona_main.png"-->
  <!--    :effects="effects"-->
  <!--    :schedule="schedule"-->
  <!--    :price="149"-->
  <!--    :promo-price="119"-->
  <!--    :duration-in-min="180"-->
  <!--  >-->
  <!--    <template #title>-->
  <!--      <span>-->
  <!--        Kurs MATURA POZIOM ROZSZERZONY to intensywna powtórka materiału. Jest-->
  <!--        dla osób, które&nbsp;chcą przygotować się do&nbsp;egzaminu maturalnego.-->
  <!--        Potrzebują odświeżenia wiedzy zdobytej w&nbsp;poprzednich latach-->
  <!--        i&nbsp;nadrobienia ewentualnych braków.-->
  <!--      </span>-->
  <!--    </template>-->
  <!--    <template #subtitle> Jedne zajęcia trwają 3 godziny. </template>-->
  <!--  </kursy-course-details>-->
</template>

<script>
import { effects, schedule } from '@/data/matura-poziom-rozszerzony-data'

export default {
  name: 'MatematykaExpressMaturaPoziomRozszerzony',
  data() {
    return {
      effects,
      schedule,
    }
  },
}
</script>
