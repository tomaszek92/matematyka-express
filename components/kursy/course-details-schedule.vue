<template>
  <div class="grid justify-center">
    <v-calendar
      :attributes="attributes"
      locale="pl"
      :min-page="{ month: 9, year: 2023 }"
      :max-page="{ month: 5, year: 2024 }"
    >
    </v-calendar>
    <div class="grid justify-center text-sm">
      <div class="flex">
        <div
          class="legend-square mr-1 my-auto"
          style="background-color: red"
        ></div>
        zajęcia stacjonarne
      </div>
      <div class="flex">
        <div
          class="legend-square mr-1 my-auto"
          style="background-color: blue"
        ></div>
        zajęcia online
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressCourseDetailsSchedule',
  props: {
    name: {
      type: String,
      required: true,
    },
    scheduleStationary: {
      type: Object,
      required: true,
    },
    scheduleOnline: {
      type: Object,
      required: true,
    },
  },
  computed: {
    attributes() {
      return [
        {
          key: 'stationary',
          dot: 'red',
          dates: this.scheduleStationary.dates,
          popover: {
            label: `Zajęcia stacjonarne ${this.scheduleStationary.hours}`,
          },
        },
        {
          key: 'online',
          dot: 'blue',
          dates: this.scheduleOnline.dates,
          popover: {
            label: `Zajęcia online ${this.scheduleOnline.hours}`,
          },
        },
      ]
    },
  },
}
</script>

<style scoped>
.legend-square {
  height: 15px;
  width: 15px;
}
</style>
