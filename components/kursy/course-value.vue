<template>
  <div>
    <div class="text-xl pt-4 pb-2">
      {{ text }}
    </div>
    <div class="font-extrabold text-3xl">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematykaExpressCourseValue",
  props: {
    text: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>
