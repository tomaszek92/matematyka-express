<template>
  <div class="font-BeVietnamPro">
    <matematyka-express-header></matematyka-express-header>
    <nuxt></nuxt>
  </div>
</template>
<script>
import MatematykaExpressHeader from "~/components/header";

export default {
  name: 'MatematykaExpressDefaultLayout',
  components: {MatematykaExpressHeader},
}
</script>
