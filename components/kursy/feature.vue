<template>
  <div class="flex flex-col items-center">
    <div class="mb-2">
      <img :src="imgSrc" :alt="imgSrc" />
    </div>
    <div class="text-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },
}
</script>
