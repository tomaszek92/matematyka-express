<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 mr-6">
      <nuxt-link to="/">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo">
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer lg:hidden block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="onMenuToggle()">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
    <div ref="links" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden">
      <div class="lg:flex lg:justify-around lg:flex-grow">
        <matematyka-express-header-link text="Dlaczego warto" url="/dlaczego-warto"/>
        <matematyka-express-header-dropdown text="Kursy" :links="coursedNestedLinks"/>
        <matematyka-express-header-link text="Korepetycje" url="/korepetycje"/>
        <matematyka-express-header-link text="Opinie" url="/opinie"/>
        <matematyka-express-header-link text="O mnie" url="/o-mnie"/>
        <matematyka-express-header-link text="Gdzie uczę" url="/gdzie-ucze"/>
        <matematyka-express-header-link text="Kontakt" url="/kontakt"/>
      </div>
      <div class="flex mt-4 lg:mt-0 lg:ml-6">
        <div class="mr-4">
          <a href="https://www.instagram.com/matematyka_express/" target="_blank">
            <img class="h-8" src="/instagram_logo.png" alt="instagram logo">
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Matematyka-Express-108904580797830/" target="_blank">
            <img class="h-8" src="/facebook_logo.png" alt="facebook logo"/>
          </a>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import MatematykaExpressHeaderLink from "~/components/header-link";
import MatematykaExpressHeaderDropdown from "~/components/header-dropdown";

export default {
  name: 'MatematykaExpressHeader',
  components: {MatematykaExpressHeaderDropdown, MatematykaExpressHeaderLink},
  data() {
    return  {
      coursedNestedLinks: [{
        to: '/kursy',
        text: 'Charakterystyka'
      }, {
        to: '/kursy/egzamin-osmoklasisty',
        text: 'Egzamin ósmoklasisty'
      }, {
        to: '/kursy/matura-poziom-podstawowy',
        text: 'Matura poziom podstawowy'
      }, {
        to: '/kursy/matura-poziom-rozszerzony',
        text: 'Matura poziom rozszerzony'
      }]
    }
  },
  methods: {
    onMenuToggle() {
      this.$refs.links.classList.toggle('hidden');
    }
  }
}
</script>

<style scoped>
nav {
  background: linear-gradient(270deg, #A06CEA 0%, #6431AB 58.85%, #360C71 100%);
}
</style>
