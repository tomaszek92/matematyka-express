<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative inline-block text-left" v-click-outside="hide">
    <div>
      <button @click="toggleMenu" type="button" class="inline-flex items-center font-extrabold text-white text-xl mt-4 lg:mt-0">
        {{ text }}
        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div ref="menu" class="hidden absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10" @click="hide">
      <div class="py-1" role="none">
        <nuxt-link to="/kursy" class="text-gray-700 block px-4 py-2">Ogólnie</nuxt-link>
        <nuxt-link to="/kursy/egzamin-osmoklasisty" class="text-gray-700 block px-4 py-2 text-lg">Egzamin ósmoklasisty</nuxt-link>
        <nuxt-link to="/kursy/matura-poziom-podstawowy" class="text-gray-700 block px-4 py-2 text-lg">Matura poziom podstawowy</nuxt-link>
        <nuxt-link to="/kursy/matura-poziom-rozszerzony" class="text-gray-700 block px-4 py-2 text-lg">Matura poziom rozszerzony</nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'MatematykaExpressHeaderDropdown',
  props: {
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    hide() {
      this.$refs.menu.classList.add('hidden');
    },
    toggleMenu() {
      this.$refs.menu.classList.toggle('hidden');
    }
  },
  directives: {
    ClickOutside
  }
}
</script>
