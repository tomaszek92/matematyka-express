<template>
  <kursy-course-details
    name="egzamin-osmoklasisty"
    main-img-src="/img/kursy/egzamin_osmoklasisty_main.png"
    :effects="effects"
    :schedule="schedule"
    :duration-in-min="90"
    :price="79"
    :promo-price="59">
    <template #title>
      <span>
        Kurs EGZAMIN ósmoklasisty przeznaczony jest dla osób, które&nbsp;chcą sobie przypomnieć i&nbsp;usystematyzować
        zagadnienia z&nbsp;klas 4&nbsp;-&nbsp;8.
      </span>
    </template>
    <template #subtitle>
      Jedne zajęcia trwają 1,5 godziny.
    </template>
  </kursy-course-details>
</template>

<script>
import {effects, schedule} from '@/data/egzamin-osmoklasisty-data';

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
