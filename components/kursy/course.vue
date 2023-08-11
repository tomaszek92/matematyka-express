<template>
  <div
    class="rounded-xl shadow-xl bg-white text-center pb-8 pt-12 px-4 grid"
    style="grid-template-rows: 0 3rem 2rem 2rem min-content 1fr"
  >
    <div
      :class="`badge text-white font-extrabold h-16 rounded-xl flex flex-col items-center justify-center ${title}-${subtitle}`"
    >
      <div class="uppercase text-xl">{{ title }}</div>
      <div>{{ subtitle }}</div>
    </div>
    <div class="font-extrabold text-5xl">
      <span :class="textColorClass">{{ hoursCount }}h</span>
    </div>
    <div class="flex items-center justify-center" :class="textColorClass">
      <img src="/img/shared/duration.png" alt="czas trwania" class="mr-2 h-4" />
      <span>{{ durationInMin }} min</span>
    </div>
    <div class="flex items-center justify-center mb-2" :class="textColorClass">
      <img
        src="/img/shared/people_count.png"
        alt="czas trwania"
        class="mr-2 h-4"
      />
      <span>4-5 osób</span>
    </div>

    <div class="grid grid-flow-col grid-locations items-center">
      <div class="font-extrabold text-lg" :class="textColorClass">
        Stacjonarnie
      </div>
      <div>
        <div class="color-me font-extrabold">
          <span v-html="stationary.daysOfWeek" />
        </div>
        <div class="color-me">{{ stationary.hours }}</div>
      </div>
      <div>
        <div class="color-me font-extrabold">Rozpoczęcie</div>
        <div class="color-me">
          {{ stationary.startDate | dateFormat }}
        </div>
      </div>
      <div class="font-extrabold" :class="textColorClass">Online</div>
      <div>
        <div class="color-me font-extrabold">
          <span v-html="online.daysOfWeek" />
        </div>
        <div class="color-me">{{ online.hours }}</div>
      </div>
      <div>
        <div class="color-me font-extrabold">Rozpoczęcie</div>
        <div class="color-me">
          {{ online.startDate | dateFormat }}
        </div>
      </div>
    </div>

    <div class="flex justify-center items-end">
      <nuxt-link
        :to="{ hash: url }"
        :class="`button text-white uppercase font-extrabold px-8 flex items-center rounded-xl ${title}-${subtitle}`"
        style="height: 3rem"
      >
        więcej
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'MatematykaExpressCourse',
  filters: {
    dateFormat(date) {
      return format(date, 'dd.MM.yyy')
    },
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    hoursCount: {
      type: Number,
      required: true,
    },
    durationInMin: {
      type: String,
      required: true,
    },
    stationary: {
      type: Object,
      required: true,
    },
    online: {
      type: Object,
      required: true,
    },
  },
  computed: {
    textColorClass() {
      return `${this.title}-${this.subtitle}-text`
    },
  },
}
</script>

<style scoped>
.badge {
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  top: -72px;
  margin-bottom: -64px;
}

.egzamin-ósmoklasisty {
  background: linear-gradient(270deg, #6ecc00 -4.56%, #192406 115.09%);
}

.matura-podstawowa {
  background: linear-gradient(270deg, #ffb002 -4.56%, #af6010 115.09%);
}

.matura-rozszerzona {
  background: linear-gradient(270deg, #ed428b -4.56%, #8a1848 115.09%);
}

.egzamin-ósmoklasisty-text {
  background: linear-gradient(270deg, #6ecc00 -4.56%, #192406 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.matura-podstawowa-text {
  background: linear-gradient(270deg, #ffb002 -4.56%, #af6010 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.matura-rozszerzona-text {
  background: linear-gradient(270deg, #ed428b -4.56%, #8a1848 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.grid-locations {
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2px;
}
</style>
