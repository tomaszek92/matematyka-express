<template>
  <nuxt-link :to="url">
    <div class="course text-center p-2" :style="{'background': backgroundColor}">
      <div class="text-white my-4">
        <div class="text-3xl uppercase font-extrabold mb-2">
          {{ title }}
        </div>
        <div class="text-2xl font-semibold">
          {{ subtitle }}
        </div>
      </div>
      <div class="content pb-2" :style="{'color': fontColor}">
        <kursy-course-value :value="hoursCount" text="Liczba godzin zajęć"/>
        <kursy-course-value :value="weekday" text="Dzień zajęć"/>
        <kursy-course-value :value="hours" text="Godziny"/>
        <kursy-course-value :value="start" text="Rozpoczęcie"/>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'MatematykaExpressCourse',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    hoursCount: {
      type: String,
      required: true
    },
    weekday: {
      type: String,
      required: true
    },
    hours: {
      type: String,
      required: true
    },
    start: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      required: true
    },
    fontColor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.course {
  border-radius: 24px;
  -webkit-box-shadow: 0 11px 28px 0 rgba(0,0,0,0.31);
  box-shadow: 0 11px 28px 0 rgba(0,0,0,0.31);
}

.content {
  background: linear-gradient(180deg, #FFFFFF 0%, #E1E0E0 100%);
  border-radius: 0 0 24px 24px;
}
</style>
