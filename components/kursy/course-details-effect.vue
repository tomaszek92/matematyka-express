<template>
  <div class="flex items-center ml-10 mb-4">
    <div>
      <img class="h-8 mr-2" src="/img/kursy/effect.png" alt="effect"/>
    </div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematykaExpressCourseDetailsEffect",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
