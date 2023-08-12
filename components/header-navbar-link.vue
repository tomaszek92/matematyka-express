<template>
  <NuxtLink
    :to="url"
    class="navbar-link block mt-4 lg:inline-block lg:mt-0 font-extrabold text-white text-xl"
    @click="onClick"
  >
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
import { ON_LINK_CLICK } from '@/events'

const { $bus } = useNuxtApp()

defineProps({
  url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

function onClick() {
  $bus.emit(ON_LINK_CLICK)
}
</script>

<style scoped>
@media (hover: hover) and (pointer: fine) and (max-width: 1023px) {
  .navbar-link:hover {
    font-size: 1.5rem;
    transition: 0.3s;
  }
}

@media (hover: hover) and (pointer: fine) and (min-width: 1024px) {
  .navbar-link:hover {
    transform: scale(120%);
    transition: 0.3s;
  }
}

a.nuxt-link-active {
  text-decoration: underline;
}
</style>
