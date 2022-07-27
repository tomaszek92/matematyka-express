<template>
  <div class="font-BeVietnamPro">
    <header>
      <header-navbar />
    </header>
    <main>
      <div class="container mx-auto p-4 md:p-8">
        <nuxt></nuxt>
        <cookies-consent />
      </div>
    </main>
    <footer-navbar />
  </div>
</template>
<script>
export default {
  name: 'MatematykaExpressDefaultLayout',
}
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 1;
}

main {
  padding-top: 6.5rem;
  min-height: 100vh;
}
</style>
