<template>
  <div class="flex flex-col items-center">
    <div class="mb-4">
      <img class="max-h-24" :src="imgSrc" :alt="imgSrc" />
    </div>
    <div class="text-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
})
</script>
