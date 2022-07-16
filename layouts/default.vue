<template>
  <div class="font-BeVietnamPro">
    <header>
      <header-navbar/>
    </header>
    <main>
      <div class="container mx-auto p-4 md:p-8">
        <nuxt></nuxt>
      </div>
    </main>
    <footer-navbar/>
  </div>
</template>
<script>
export default {
  name: 'MatematykaExpressDefaultLayout',
}
</script>

<style scoped>
main {
  min-height: calc(100vh - 11rem);
}
</style>
