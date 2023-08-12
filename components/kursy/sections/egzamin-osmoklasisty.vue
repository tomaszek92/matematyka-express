<template>
  <KursyCourseDetails
    name="egzamin-osmoklasisty"
    main-img-src="/img/kursy/egzamin_osmoklasisty_main.png"
    :effects="effects"
    :schedule="schedule"
  >
    <template #title>
      <span>
        Kurs EGZAMIN ÓSMOKLASISTY przeznaczony jest dla osób, które&nbsp;chcą
        sobie przypomnieć i&nbsp;usystematyzować zagadnienia z&nbsp;klas
        4&nbsp;-&nbsp;8.
      </span>
    </template>
    <template #subtitle> Jedne zajęcia trwają 1,5 godziny. </template>
  </KursyCourseDetails>
</template>

<script setup lang="ts">
import { effects, schedule } from '~/data/egzamin-osmoklasisty-data'
</script>
