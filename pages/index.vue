<template>
  <div class="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="self-center justify-self-center lg:ml-8">
      <page-title>
        <span>Skuteczne<br>korepetycje<br>i kursy</span>
      </page-title>
      <div class="flex justify-center">
        <img class="h-24 lg:h-36 xl:h-56" src="img/index/main_2.png" alt="z matematyki"/>
      </div>
    </div>
    <div class="self-center justify-self-center mx-8 lg:ml-0">
      <img src="img/index/main.png" alt="index"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressIndexPage'
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    height: calc(100vh - 6.5rem);
  }
}
</style>
