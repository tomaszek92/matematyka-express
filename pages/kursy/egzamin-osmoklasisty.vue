<template>
  <kursy-course-details
    main-img-src="/img/kursy/egzamin_osmoklasisty_main.png"
    :effects="effects"
    :schedule="schedule"
    schedule-img-src="/img/kursy/egzamin_osmoklasisty_schedule.png"
    price-img-src="/img/kursy/egzamin_osmoklasisty_price.png">
    <template #title>
      <span>
        Kurs EGZAMIN ósmoklasisty przeznaczony jest dla osób, które&nbsp;chcą sobie przypomnieć i&nbsp;usystematyzować
        zagadnienia z&nbsp;klas 4-5-6-7-8.
      </span>
    </template>
    <template #subtitle>
      Jedna zajęcia trwają 1,5 godziny.
    </template>
  </kursy-course-details>
</template>

<script>
import { effects, schedule } from './egzamin-osmoklasisty-data';

export default {
  name: "MatematykaExpressEgzaminOsmoklasisty",
  data() {
    return {
      effects,
      schedule
    }
  }
}
</script>
