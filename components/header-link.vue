<template>
  <nuxt-link :to="url" class="block mt-4 lg:inline-block lg:mt-0 font-extrabold text-white text-xl">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'MatematykaExpressHeaderLink',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  }
}
</script>
