<template>
  <div>
    <div class="color text-center text-2xl mb-6 font-extrabold">
      <slot name="title"/>
    </div>
    <div class="color text-center text-xl mb-6 font-semibold">
      <slot name="subtitle"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center">
      <div>
        <img :src="mainImgSrc" :alt="mainImgSrc"/>
      </div>
      <div>
        <div>
          <div class="text-xl text-center lg:text-left mb-4 mt-4 lg:mt-0">
            Jakich efektów możesz oczekiwać po ukończeniu kursu?
          </div>
          <template v-for="effect in effects">
            <kursy-course-details-effect :key="effect" :text="effect"/>
          </template>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center">
      <div class="mb-4 lg:mb-0">
        <kursy-course-details-schedule :name="name" :schedule="schedule"/>
      </div>
      <div class="flex flex-col items-center">
        <div class="mb-8">
          <img :src="priceImgSrc" :alt="priceImgSrc"/>
        </div>
        <div>
          <nuxt-link to="#zapisz-sie" class="button block text-white text-xl font-extrabold px-8 py-4 rounded-xl">
            ZAPISZ SIĘ
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematykaExpressCourseDetails",
  props: {
    name: {
      type: String,
      required: true
    },
    mainImgSrc: {
      type: String,
      required: true
    },
    effects: {
      type: Array,
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
