<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 mt-10">
    <KursyCourseTile
      url="#egzamin-osmoklasisty"
      title="egzamin"
      subtitle="ósmoklasisty"
      :schedule="egzaminOsmoklasistySchedule"
    />
    <KursyCourseTile
      url="#matura-poziom-podstawowy"
      title="matura"
      subtitle="podstawowa"
      :schedule="maturaPodstawowaSchedule"
    />
    <KursyCourseTile
      url="#matura-poziom-rozszerzony"
      title="matura"
      subtitle="rozszerzona"
      :schedule="maturaRozszerzonaSchedule"
    />
  </div>
</template>

<script setup lang="ts">
import { schedule as egzaminOsmoklasistySchedule } from '~/data/egzamin-osmoklasisty-data'
import { schedule as maturaPodstawowaSchedule } from '~/data/matura-poziom-podstawowy-data'
import { schedule as maturaRozszerzonaSchedule } from '~/data/matura-poziom-rozszerzony-data'
</script>
