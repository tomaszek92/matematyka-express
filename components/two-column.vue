<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="grid grid-cols-1 gap-6 justify-items-center">
      <div class="title text-center font-extrabold">
        <slot name="title"/>
      </div>
      <div class="text-center">
        <slot name="subtitle"/>
      </div>
      <div>
        <img :src="imgSrc" :alt="imgSrc"/>
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
    }
  }
}
</script>
