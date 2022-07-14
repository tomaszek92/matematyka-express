<template>
  <div class="flex flex-col items-center">
    <div class="mb-4">
      <img :src="imgSrc" :alt="imgSrc"/>
    </div>
    <div class="text-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressReason',
  props: {
    imgSrc: {
      type: String,
      required: true
    },
  }
}
</script>
