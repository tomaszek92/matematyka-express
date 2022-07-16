<template>
  <div class="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="self-center justify-self-center">
      <div class="title font-extrabold text-6xl mt-8 lg:mt-0 md:text-7xl xl:text-8xl text-center lg:text-left">
        <span>Skuteczne<br>korepetycje<br>i kursy</span>
      </div>
      <div class="flex justify-center">
        <img class="h-32 lg:h-36 xl:h-52 mt-8 lg:mt-0" src="img/index/main_2.png" alt="z matematyki"/>
      </div>
    </div>
    <div class="self-center justify-self-center">
      <img class="max-h-80 md:max-h-96" src="img/index/main.png" alt="index"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressIndexPage'
}
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 10.5rem);
}
</style>
