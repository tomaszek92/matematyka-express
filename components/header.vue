<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 mr-6">
      <img class="h-14" src="logo.png" alt="logo">
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="lg:flex lg:justify-around lg:flex-grow">
        <matematyka-express-header-link text="Dlaczego warto" url="/dlaczego-warto"/>
        <matematyka-express-header-link text="Kursy" url="kursy"/>
        <matematyka-express-header-link text="Korepetycje" url="korepetycje"/>
        <matematyka-express-header-link text="Opinie" url="opinie"/>
        <matematyka-express-header-link text="O mnie" url="o-mnie"/>
        <matematyka-express-header-link text="Gdzie uczę" url="gdzie-ucze"/>
        <matematyka-express-header-link text="Kontakt" url="kontakt"/>
      </div>
      <div class="flex mt-4 lg:mt-0">
        <div class="mr-4">
          <a href="https://www.instagram.com/matematyka_express/" target="_blank">
            <img class="h-8" src="instagram_log.png" alt="instagram logo">
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Matematyka-Express-108904580797830/" target="_blank">
            <img class="h-8" src="facebook_logo.png" alt="facebook logo"/>
          </a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import MatematykaExpressHeaderLink from "~/components/header-link";

export default {
  name: "MatematykaExpressHeader",
  components: {MatematykaExpressHeaderLink},
}
</script>

<style scoped>
nav {
  background: linear-gradient(270deg, #A06CEA 0%, #6431AB 58.85%, #360C71 100%);
}
</style>
