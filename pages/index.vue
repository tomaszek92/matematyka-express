<template>
  <div class="wrapper grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div class="self-center justify-self-center lg:ml-8">
      <div class="title font-extrabold text-5xl mt-6 lg:mt-0 md:text-7xl xl:text-9xl">
        <span>Skuteczne<br>korepetycje<br>i kursy</span>
      </div>
      <div class="flex justify-center">
        <img class="h-24 lg:h-36 xl:h-56" src="index_2.png" alt="z matematyki"/>
      </div>
    </div>
    <div class="self-center justify-self-center mx-8 lg:ml-0">
      <img src="index.png" alt="index"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped>
.wrapper {
  height: calc(100vh - 6.5rem);
}

.title {
  background: linear-gradient(90.08deg, #360C71 0.11%, #8444DF 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
