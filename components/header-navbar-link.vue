<template>
  <nuxt-link :to="url" class="navbar-link block mt-4 lg:inline-block lg:mt-0 font-extrabold text-white text-xl">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'MatematykaExpressHeaderNavbarLink',
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

<style scoped>
@media (hover: hover) and (pointer: fine) {
  .navbar-link:hover {
    transform: scale(120%);
    transition: 0.3s;
  }
}

a.nuxt-link-active {
  text-decoration: underline;
}
</style>
