<template>
  <KursyCourseDetails
    name="matura-poziom-podstawowy"
    main-img-src="/img/kursy/matura_podstawowa_main.png"
    :effects="effects"
    :schedule="schedule"
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
  </KursyCourseDetails>
</template>

<script setup lang="ts">
import { effects, schedule } from '~/data/matura-poziom-podstawowy-data'
</script>
