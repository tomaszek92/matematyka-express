<template>
  <div class="font-BeVietnamPro">
    <matematyka-express-header></matematyka-express-header>
    <div class="container mx-auto px-8">
      <nuxt></nuxt>
    </div>
  </div>
</template>
<script>
import MatematykaExpressHeader from "~/components/header";

export default {
  name: 'MatematykaExpressDefaultLayout',
  components: {MatematykaExpressHeader},
}
</script>
