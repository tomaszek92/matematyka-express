<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 gradient-background"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <NuxtLink to="/">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo" />
      </NuxtLink>
    </div>
<!--    <div v-click-outside="vcoConfig" class="block lg:hidden">-->
    <div class="block lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 cursor-pointer lg:hidden block text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="onMenuToggle()"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
    <div
      ref="links"
      class="links w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"
    >
      <div class="lg:flex lg:justify-around lg:flex-grow">
        <HeaderNavbarLink text="Dlaczego warto" url="/dlaczego-warto" />
        <HeaderNavbarLink text="Kursy" url="/kursy" />
        <HeaderNavbarLink text="Korepetycje" url="/korepetycje" />
        <HeaderNavbarLink text="Opinie" url="/opinie" />
        <HeaderNavbarLink text="O mnie" url="/o-mnie" />
        <HeaderNavbarLink text="Kontakt" url="/kontakt" />
      </div>
      <div class="flex mt-4 lg:mt-0 lg:ml-6">
        <div class="mr-4">
          <a
            href="https://www.instagram.com/matematyka_express/"
            target="_blank"
          >
            <img class="h-8" src="/instagram_logo.png" alt="instagram logo" />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/Matematyka-Express-108904580797830/"
            target="_blank"
          >
            <img class="h-8" src="/facebook_logo.png" alt="facebook logo" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ON_LINK_CLICK } from '@/events'

export default {
  data() {
    return {
      vcoConfig: {
        handler: this.onClickOutside,
        middleware: this.canPropagateEvent,
      },
    }
  },
  created() {
    // this.$nuxt.$on(ON_LINK_CLICK, this.onMenuToggle)
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onMenuToggle() {
      this.$refs.links.classList.toggle('hidden')
    },
    onResize() {
      this.$refs.links.classList.add('hidden')
    },
    onClickOutside(e) {
      this.$refs.links.classList.add('hidden')
    },
    canPropagateEvent(e) {
      return !e.target.classList.contains('navbar-link')
    },
  },
}
</script>

<style scoped>
@media (max-width: 1023px) {
  .links {
    height: 312px;
    transition: height 1s;
  }
  .links.hidden {
    height: 0;
    display: block;
    overflow: hidden;
  }
}
</style>
