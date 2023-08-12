<template>
  <div
    class="rounded-xl shadow-xl bg-white text-center p-6 gap-4 grid grid-cols-2"
  >
    <div>
      <span class="font-bold text-2xl">Cena kursu</span>
      <br />
      <span class="text-xl">({{ durationInHours }} h zajęć)</span>
    </div>
    <div class="flex items-center justify-center price text-4xl font-extrabold">
      {{ price }} zł
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: Number,
    required: true,
  },
  durationInHours: {
    type: Number,
    required: true,
  },
})
</script>

<style scoped>
.price {
  background: linear-gradient(90deg, #8a1848 10.47%, #ed428b 58.95%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
