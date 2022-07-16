<template>
  <div>
    <kursy-sections-features/>
    <hr/>
    <kursy-sections-types/>
    <hr/>
    <kursy-sections-egzamin-osmoklasisty id="egzamin-osmoklasisty"/>
    <hr/>
    <kursy-sections-matura-poziom-podstawowy id="matura-poziom-podstawowy"/>
    <hr/>
    <kursy-sections-matura-poziom-rozszerzony id="matura-poziom-rozszerzony"/>
  </div>

</template>

<script>
export default {
  name: 'MatematykaExpressKursyPage'
}
</script>

<style scoped>
hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
