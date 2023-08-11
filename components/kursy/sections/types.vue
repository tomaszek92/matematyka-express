<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 mt-10">
    <kursy-course
      url="#egzamin-osmoklasisty"
      title="egzamin"
      subtitle="ósmoklasisty"
      :hours-count="egzaminOsmoklasistySchedule.allLessonsDurationInHours"
      :single-lesson-duration-in-min="
        egzaminOsmoklasistySchedule.singleLessonDurationInMinutes
      "
      :stationary="{
        daysOfWeek: 'Wtorki',
        hours: egzaminOsmoklasistySchedule.stationary.hours,
        startDate: new Date(2023, 8, 19),
      }"
      :online="{
        daysOfWeek: 'Soboty',
        hours: egzaminOsmoklasistySchedule.online.hours,
        startDate: new Date(2023, 8, 16),
      }"
    />
    <kursy-course
      url="#matura-poziom-podstawowy"
      title="matura"
      subtitle="podstawowa"
      :hours-count="maturaPodstawowaSchedule.allLessonsDurationInHours"
      :single-lesson-duration-in-min="
        maturaPodstawowaSchedule.singleLessonDurationInMinutes
      "
      :stationary="{
        daysOfWeek: 'Czwartki',
        hours: maturaPodstawowaSchedule.stationary.hours,
        startDate: new Date(2023, 8, 21),
      }"
      :online="{
        daysOfWeek: 'Soboty',
        hours: maturaPodstawowaSchedule.online.hours,
        startDate: new Date(2023, 8, 16),
      }"
    />
    <kursy-course
      url="#matura-poziom-rozszerzony"
      title="matura"
      subtitle="rozszerzona"
      :hours-count="maturaRozszerzonaSchedule.allLessonsDurationInHours"
      :single-lesson-duration-in-min="
        maturaRozszerzonaSchedule.singleLessonDurationInMinutes
      "
      :stationary="{
        daysOfWeek: 'Poniedziałki i&nbsp;środy',
        hours: maturaRozszerzonaSchedule.stationary.hours,
        startDate: new Date(2023, 8, 18),
      }"
      :online="{
        daysOfWeek: 'Poniedziałki i&nbsp;środy',
        hours: maturaRozszerzonaSchedule.online.hours,
        startDate: new Date(2023, 8, 18),
      }"
    />
  </div>
</template>

<script>
import { schedule as egzaminOsmoklasistySchedule } from '@/data/egzamin-osmoklasisty-data'
import { schedule as maturaPodstawowaSchedule } from '@/data/matura-poziom-podstawowy-data'
import { schedule as maturaRozszerzonaSchedule } from '@/data/matura-poziom-rozszerzony-data'

export default {
  name: 'MatematykaExpressKursyTypes',
  data() {
    return {
      egzaminOsmoklasistySchedule,
      maturaPodstawowaSchedule,
      maturaRozszerzonaSchedule,
    }
  },
}
</script>
