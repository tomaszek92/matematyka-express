<template>
  <div class="wrapper grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="self-center justify-self-center">
      <div
        class="font-extrabold text-6xl mt-8 lg:mt-0 md:text-7xl xl:text-8xl text-center lg:text-left"
      >
        <span class="title">Skuteczne<br />korepetycje<br />i kursy</span>
      </div>
      <div class="flex justify-center">
        <img
          class="h-32 lg:h-40 xl:h-48 mt-4 md:mt-8 lg:mt-0"
          src="/img/index/main_2.png"
          alt="z matematyki"
        />
      </div>
    </div>
    <div class="self-center justify-self-center">
      <img class="max-h-80 lg:max-h-96" src="/img/index/main.png" alt="index" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  min-height: calc(100vh - 8.25rem);
}

@media (min-width: 768px) {
  .wrapper {
    min-height: calc(100vh - 10.5rem);
  }
}
</style>
