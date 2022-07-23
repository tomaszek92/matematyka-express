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
        <img class="max-h-80" :src="mainImgSrc" :alt="mainImgSrc"/>
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
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center justify-items-center">
      <div class="mb-4 lg:mb-0">
        <kursy-course-details-schedule :name="name" :schedule="schedule"/>
      </div>
      <div class="lg:ml-16 lg:mt-12">
        <card
          people-count="4-5 osób"
          :duration-in-min="durationInMin"
          :promo-price="promoPrice"
          :price="price"
          :btn-opt="{ to: '#zapisz-sie', text: 'zapisz się' }">
          <template #badge>
            Cena za jedne zajęcia
          </template>
          <template #asterisk>
            &#42;Cena promocyjna obowiązuje przy zapisie na zajęcia do 29.08.2022 r.
          </template>
          <template #caption>
            Przed zapisaniem się na zajęcia zapoznaj się z regulaminem kursów.
          </template>
        </card>
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
    price: {
      type: Number,
      required: true
    },
    promoPrice: {
      type: Number,
      required: true
    },
    durationInMin: {
      type: Number,
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
