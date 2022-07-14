<template>
  <div class="title font-extrabold text-6xl md:text-7xl 2xl:text-9xl">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressPageTitle'
}
</script>

<style scoped>
.title {
  background: linear-gradient(90.08deg, #360C71 0.11%, #8444DF 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
