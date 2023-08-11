<template>
  <kursy-course-details
    name="matura-poziom-podstawowy"
    main-img-src="/img/kursy/matura_podstawowa_main.png"
    :effects="effects"
    :schedule-stationary="schedule.stationary"
    :schedule-online="schedule.online"
    :single-lesson-duration-in-min="120"
    :single-lesson-price="100"
    :all-lessons-duration-in-hours="56"
    :all-lessons-price="2800"
  >
    <template #title>
      <span>
        Kurs MATURA POZIOM PODSTAWOWY przeznaczony jest dla osób,
        które&nbsp;chcą przygotować się do egzaminu maturalnego. Potrzebują
        odświeżenia wiedzy zdobytej w&nbsp;poprzednich latach i&nbsp;nadrobienia
        ewentualnych braków.
      </span>
    </template>
    <template #subtitle> Jedne zajęcia trwają 2 godziny. </template>
  </kursy-course-details>
</template>

<script>
import { effects, schedule } from '@/data/matura-poziom-podstawowy-data'

export default {
  name: 'MatematykaExpressMaturaPoziomPodstawowy',
  data() {
    return {
      effects,
      schedule,
    }
  },
}
</script>
