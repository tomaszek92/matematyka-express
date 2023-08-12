// https://nuxt.com/docs/api/configuration/nuxt-config
import { TITLE } from "./data/general";

export default defineNuxtConfig({
  app: {
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
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/css/fonts.css', '~/assets/css/main.css'],
})
