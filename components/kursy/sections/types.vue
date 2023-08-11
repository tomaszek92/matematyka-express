<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-8 mt-10">
    <kursy-course
      url="#egzamin-osmoklasisty"
      title="egzamin"
      subtitle="ósmoklasisty"
      :hours-count="46.5"
      duration-in-min="90"
      :stationary="{
        daysOfWeek: 'Wtorki',
        hours: '16:00-17:30',
        startDate: new Date(2023, 8, 19),
      }"
      :online="{
        daysOfWeek: 'Soboty',
        hours: '10:00-11:30',
        startDate: new Date(2023, 8, 16),
      }"
    />
    <kursy-course
      url="#matura-poziom-podstawowy"
      title="matura"
      subtitle="podstawowa"
      :hours-count="56"
      duration-in-min="120"
      :stationary="{
        daysOfWeek: 'Czwartki',
        hours: '16:30-18:30',
        startDate: new Date(2023, 8, 21),
      }"
      :online="{
        daysOfWeek: 'Soboty',
        hours: '13:30-15:30',
        startDate: new Date(2023, 8, 16),
      }"
    />
    <kursy-course
      url="#matura-poziom-rozszerzony"
      title="matura"
      subtitle="rozszerzona"
      :hours-count="87"
      duration-in-min="2 x 90"
      :stationary="{
        daysOfWeek: 'Poniedziałki i&nbsp;środy',
        hours: '16:00-17:30',
        startDate: new Date(2023, 8, 18),
      }"
      :online="{
        daysOfWeek: 'Poniedziałki i&nbsp;środy',
        hours: '19:00-20:30',
        startDate: new Date(2023, 8, 18),
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressKursyTypes',
}
</script>
