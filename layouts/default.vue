<template>
  <div class="font-BeVietnamPro">
    <header>
      <header-navbar />
    </header>
    <main>
      <div class="container mx-auto p-4 md:p-8">
        <slot/>
        <cookies-consent />
      </div>
    </main>
    <footer-navbar />
  </div>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  z-index: 2;
}

main {
  padding-top: 6.5rem;
  min-height: 100vh;
}
</style>
