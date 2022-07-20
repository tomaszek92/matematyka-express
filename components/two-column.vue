<template>
  <div :class="`grid grid-cols-1 md:grid-cols-2 gap-${gap} md:gap-${mdGap}`">
    <div class="grid grid-cols-1 gap-6 justify-items-center content-start">
      <div class="title text-center font-extrabold">
        <slot name="title"/>
      </div>
      <div class="text-center">
        <slot name="subtitle"/>
      </div>
      <div>
        <img class="max-h-80" :src="imgSrc" :alt="imgSrc"/>
      </div>
    </div>
    <div class="text-center">
      <slot name="description"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematykaExpressTwoColumn",
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    gap: {
      type: Number,
      default: 4
    },
    mdGap: {
      type: Number,
      default: 6
    }
  }
}
</script>
