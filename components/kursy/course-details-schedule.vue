<template>
  <div class="grid justify-center">
    <ClientOnly>
      <v-calendar
        :attributes="attributes"
        locale="pl"
        :min-page="{ month: 9, year: 2023 }"
        :max-page="{ month: 5, year: 2024 }"
      />
    </ClientOnly>
    <div class="grid justify-center text-sm mt-1">
      <div class="flex">
        <div
          class="legend-square mr-1 my-auto"
          style="background-color: #805ad5"
        ></div>
        zajęcia stacjonarne
      </div>
      <div class="flex">
        <div
          class="legend-square mr-1 my-auto"
          style="background-color: #d53f8c"
        ></div>
        zajęcia online
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
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
})

const attributes = computed(() => {
  return [
    {
      key: 'stationary',
      bar: 'purple',
      dates: props.scheduleStationary.dates,
      popover: {
        label: `Zajęcia stacjonarne ${props.scheduleStationary.hours}`,
      },
    },
    {
      key: 'online',
      bar: 'pink',
      dates: props.scheduleOnline.dates,
      popover: {
        label: `Zajęcia online ${props.scheduleOnline.hours}`,
      },
    },
  ]
})
</script>

<style scoped>
.legend-square {
  height: 15px;
  width: 15px;
}
</style>
