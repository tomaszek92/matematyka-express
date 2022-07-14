<template>
  <nuxt-link :to="url" class="text-gray-700 block px-4 py-2">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: "MatematykaExpressHeaderDropdownLink",
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
