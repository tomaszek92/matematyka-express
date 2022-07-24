<template>
  <span>error</span>
</template>

<script>
export default {
  name: 'MatematykaExpressError',
  props: {
    error: {
      type: Object,
      required: false,
      default: null,
    },
  },
  created() {
    if (this.error?.statusCode === 404) {
      this.$router.push('/')
    }
  },
}
</script>
