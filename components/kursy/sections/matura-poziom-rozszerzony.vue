<template>
  <kursy-course-details
    name="matura-poziom-rozszerzony"
    main-img-src="/img/kursy/matura_rozszerzona_main.png"
    :effects="effects"
    :schedule-stationary="schedule.stationary"
    :schedule-online="schedule.online"
    :single-lesson-duration-in-min="90"
    :single-lesson-price="75"
    :all-lessons-duration-in-hours="56"
    :all-lessons-price="4350"
  >
    <template #title>
      <span>
        Kurs MATURA POZIOM ROZSZERZONY to intensywna powtórka materiału. Jest
        dla osób, które&nbsp;chcą przygotować się do&nbsp;egzaminu maturalnego.
        Potrzebują odświeżenia wiedzy zdobytej w&nbsp;poprzednich latach
        i&nbsp;nadrobienia ewentualnych braków.
      </span>
    </template>
    <template #subtitle>
      Zajęcia odbywają sie dwa razy w tygodniu. Jedno spotkanie trwa 1,5h.
    </template>
  </kursy-course-details>
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
