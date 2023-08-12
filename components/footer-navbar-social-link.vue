<template>
  <a class="flex items-center" :href="link" target="_blank">
    <img class="h-4 mr-2" :src="imgSrc" :alt="name" />
    <span>{{ name }}</span>
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
.col-1 {
  flex-basis: 100%;
  margin-bottom: 1.5rem;
}

.col-2 {
  flex-basis: 100%;
  margin-bottom: 2rem;
}

.col-3 {
  flex-basis: 100%;
}

@media (min-width: 1024px) {
  .col-1,
  .col-2,
  .col-3 {
    flex-basis: 33%;
    margin-bottom: 0;
  }
}
</style>
