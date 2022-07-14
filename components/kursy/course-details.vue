<template>
  <div>
    <div class="color text-center text-2xl my-6 font-extrabold">
      <slot name="title"/>
    </div>
    <div class="color text-center text-xl mb-6 font-semibold">
      <slot name="subtitle"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center">
      <div>
        <img :src="mainImgSrc" :alt="mainImgSrc"/>
      </div>
      <div>
        <div>
          <div class="text-xl mb-4">
            Jakich efektów możesz oczekiwać po ukończeniu kursu?
          </div>
          <template v-for="effect in effects">
            <kursy-course-details-effect :key="effect" :text="effect"/>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematykaExpressCourseDetails",
  props: {
    mainImgSrc: {
      type: String,
      required: true
    },
    effects: {
      type: Array,
      required: true
    },
    scheduleImgSrc: {
      type: String,
      required: true
    },
    schedule: {
      type: Array,
      required: true
    },
    priceImgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.color {
  color: #360C71;
}
</style>
