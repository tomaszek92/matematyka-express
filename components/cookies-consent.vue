<template>
  <div
    v-if="!areCookiesAccepted"
    class="cookie-consent fixed bottom-8 left-4 right-4 md:left-12 md:right-12 lg:left-auto flex rounded-2xl shadow-xl p-8 bg-white items-center"
  >
    <div class="text-sm">
      Korzystając ze strony internetowej Matematyka Express, zgadzasz się na
      <a
        href="/statues/Polityka prywatności- Matematyka Express.pdf"
        target="_blank"
        class="underline"
      >
        politykę prywatności
      </a>
    </div>
    <div>
      <button
        class="button text-xs text-white uppercase font-extrabold px-4 py-2 rounded-xl ml-4 md:whitespace-nowrap"
        @click="onAccept"
      >
        zgadzam się
      </button>
    </div>
  </div>
</template>

<script>
const KEY_ARE_COOKIES_ACCEPTED = 'ARE_COOKIES_ACCEPTED'

export default {
  name: 'MatematykaExpressCookiesConsent',
  data() {
    return {
      areCookiesAccepted: false,
    }
  },
  created() {
    if (process.client) {
      const areCookiesAccepted = localStorage.getItem(KEY_ARE_COOKIES_ACCEPTED)
      this.areCookiesAccepted = !!areCookiesAccepted
    }
  },
  methods: {
    onAccept() {
      this.areCookiesAccepted = true
      if (process.client) {
        localStorage.setItem(KEY_ARE_COOKIES_ACCEPTED, true.toString())
      }
    },
  },
}
</script>
