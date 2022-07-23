<template>
  <div>
    <div class="text-center font-extrabold mb-4 md:mb-6">
      <slot name="title"/>
    </div>
    <div :class="`grid grid-cols-1 md:grid-cols-${mdCols} lg:grid-cols-${lgCols} gap-4 md:gap-6`">
      <div class="grid grid-cols-1 gap-6 justify-items-center content-start">
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
    mdCols: {
      type: Number,
      default: 2
    },
    lgCols: {
      type: Number,
      default: 2
    }
  }
}
</script>
