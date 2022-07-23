<template>
  <div class="rounded-xl shadow-xl bg-white text-center p-8 pt-12">
    <div
      :class="`badge text-white font-extrabold h-16 rounded-xl flex flex-col items-center justify-center ${title}-${subtitle}`">
      <div class="uppercase text-xl">{{ title }}</div>
      <div>{{ subtitle }}</div>
    </div>
    <div class="font-extrabold text-5xl mb-2">
      <span :class="`${title}-${subtitle}-text`">{{ hoursCount }}h</span>
    </div>
    <div class="font-extrabold text-lg mb-1">
      {{ weekday }}
    </div>
    <div class="mb-1">
      {{ hours }}
    </div>
    <div class="font-extrabold text-lg mb-1">
      Rozpoczęcie
    </div>
    <div class="mb-1">
      {{ start }}
    </div>
    <div class="mb-1 flex items-center justify-center mb-1">
      <img src="/img/shared/duration.png" alt="czas trwania" class="mr-2 h-4"/>
      <span>{{ durationInMin }} min</span>
    </div>
    <div class="mb-2 flex items-center justify-center mb-1">
      <img src="/img/shared/people_count.png" alt="czas trwania" class="mr-2 h-4"/>
      <span>4-5 osób</span>
    </div>

    <div class="flex justify-center">
      <nuxt-link
        :to="{ hash: url }"
        :class="`button block text-white uppercase font-extrabold px-8 py-3 rounded-xl mt-4 ${title}-${subtitle}`">
        więcej
      </nuxt-link>
    </div>
  </div>
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
      type: Number,
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
    durationInMin: {
      type: Number,
      required: true
    },
  }
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
  background: linear-gradient(270deg, #6ECC00 -4.56%, #192406 115.09%);;
}

.matura-podstawowa {
  background: linear-gradient(270deg, #FFB002 -4.56%, #AF6010 115.09%);
}

.matura-rozszerzona {
  background: linear-gradient(270deg, #ED428B -4.56%, #8A1848 115.09%);
}

.egzamin-ósmoklasisty-text {
  background: linear-gradient(270deg, #6ECC00 -4.56%, #192406 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.matura-podstawowa-text {
  background: linear-gradient(270deg, #FFB002 -4.56%, #AF6010 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.matura-rozszerzona-text {
  background: linear-gradient(270deg, #ED428B -4.56%, #8A1848 115.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
