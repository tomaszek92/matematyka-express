<template>
  <nuxt-link :to="url" class="navbar-link block mt-4 lg:inline-block lg:mt-0 font-extrabold text-white text-xl" @click.native="onClick">
    {{ text }}
  </nuxt-link>
</template>

<script>
import {ON_LINK_CLICK} from "@/events";

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
  },
  methods: {
    onClick() {
      this.$nuxt.$emit(ON_LINK_CLICK);
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
