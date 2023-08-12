<template>
  <div class="flex items-center ml-4 md:ml-6 mb-4">
    <div>
      <img
        class="h-8 max-w-none mr-4"
        src="/img/kursy/effect.png"
        alt="effect"
      />
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
