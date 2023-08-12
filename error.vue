<template>
  <span>error </span>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo } from '#app'

onMounted(() => {
  navigateTo('/')
})
</script>
