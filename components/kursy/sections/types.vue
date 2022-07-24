<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-16 mt-10">
    <kursy-course
      title="egzamin"
      start="26.09.2022"
      hours="17:30-19:30"
      weekday="Poniedziałki"
      :hours-count="48"
      :duration-in-min="90"
      subtitle="ósmoklasisty"
      url="#egzamin-osmoklasisty"
    />
    <kursy-course
      title="matura"
      start="28.09.2022"
      hours="18:30-20:30"
      weekday="Środy"
      :hours-count="56"
      :duration-in-min="120"
      subtitle="podstawowa"
      url="#matura-poziom-podstawowy"
    />
    <kursy-course
      title="matura"
      start="29.09.2022"
      hours="17:30-20:30"
      weekday="Czwartki"
      :hours-count="84"
      :duration-in-min="180"
      subtitle="rozszerzona"
      url="#matura-poziom-rozszerzony"
    />
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressKursyTypes',
}
</script>
