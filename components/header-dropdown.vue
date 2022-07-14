<template>
  <div v-click-outside="hide" class="relative inline-block text-left">
    <div>
      <button type="button" class="inline-flex items-center font-extrabold text-white text-xl mt-4 lg:mt-0" @click="toggleMenu">
        {{ text }}
        <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div ref="menu" class="hidden absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10" @click="hide">
      <div class="py-1" role="none">
        <template v-for="link in links">
          <header-dropdown-link :key="link.to" :text="link.text" :url="link.to"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'MatematykaExpressHeaderDropdown',
  directives: {
    ClickOutside
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    hide() {
      this.$refs.menu.classList.add('hidden');
    },
    toggleMenu() {
      this.$refs.menu.classList.toggle('hidden');
    }
  }
}
</script>
