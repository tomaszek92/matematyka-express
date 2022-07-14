<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-4 lg:gap-16 lg:px-16">
    <kursy-course
      title="egzamin"
      font-color="#734F19"
      background-color="#eda840"
      start="26.09.2022"
      hours="17:30-19:30"
      weekday="Poniedziałek"
      hours-count="56"
      subtitle="ósmoklasisty"
      url=""/>
    <kursy-course
      title="matura"
      font-color="#8A0D49"
      background-color="#e05c9c"
      start="28.09.2022"
      hours="18:30-20:30"
      weekday="Środa"
      hours-count="56"
      subtitle="podstawowy"
      url=""/>
    <kursy-course
      title="matura"
      font-color="#121153"
      background-color="#6f6edb"
      start="29.09.2022"
      hours="17:30-20:30"
      weekday="Czwartek"
      hours-count="84"
      subtitle="rozszerzony"
      url=""/>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressKursyPage'
}
</script>
