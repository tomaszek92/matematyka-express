import { TITLE } from './data/general'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'pl-PL',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'description',
        content:
          'Jeśli szukasz kursu lub korepetycji, które skutecznie przygotują Cię do egzaminu ósmych klas, matury lub po prostu kogoś, kto pomoże Ci w bieżącej nauce, to dobrze trafiłeś.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/fonts.css', '@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/v-click-outside.js', '~/plugins/filters.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  generate: {
    fallback: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop - 104,
          behavior: 'smooth',
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
