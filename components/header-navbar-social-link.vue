<template>
  <a :href="link" target="_blank">
    <img class="h-8" :src="imgSrc" :alt="name" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
@media (max-width: 1023px) {
  .links {
    height: 312px;
    transition: height 1s;
  }
  .links.hidden {
    height: 0;
    display: block;
    overflow: hidden;
  }
}
</style>
