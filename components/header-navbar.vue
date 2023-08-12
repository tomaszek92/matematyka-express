<template>
  <nav
    class="flex items-center justify-between flex-wrap p-6 gradient-background"
  >
    <div class="flex items-center flex-shrink-0 mr-6">
      <NuxtLink to="/">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <div ref="menu" class="block lg:hidden">
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
          <HeaderNavbarSocialLink
            name="TikTok"
            img-src="/tik_tok_logo.png"
            link="https://www.tiktok.com/@matematykaexpress"
          />
        </div>
        <div class="mr-4">
          <HeaderNavbarSocialLink
            name="Instagram"
            img-src="/instagram_logo.png"
            link="https://www.instagram.com/matematyka_express/"
          />
        </div>
        <div>
          <HeaderNavbarSocialLink
            name="Facebook"
            img-src="/facebook_logo.png"
            link="https://www.facebook.com/Matematyka-Express-108904580797830/"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ON_LINK_CLICK } from '~/events'

const { $bus } = useNuxtApp()

const links = ref()
const menu = ref()

onClickOutside(menu, (e) => {
  if (!e.target.classList.contains('navbar-link')) {
    links.value.classList.add('hidden')
  }
})

onBeforeMount(() => {
  $bus.on(ON_LINK_CLICK, onMenuToggle)
})

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

function onMenuToggle() {
  links.value.classList.toggle('hidden')
}

function onResize() {
  links.value.classList.add('hidden')
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
