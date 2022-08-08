<template>
  <div>
    <div class="title text-center text-4xl md:text-7xl font-extrabold mb-4">
      Skontaktuj się
    </div>
    <div class="text-center text-lg font-medium mb-4">JESTEM TU DLA CIEBIE</div>
    <div class="subtitle text-center text-xl font-extrabold mb-4">
      Matematyka Express
    </div>
    <div class="text-center">
      ul. Patriotów 303<br />
      04-767 Warszawa<br />
      Lokal nad Cafe Peron<br />
      Piętro II<br />
      <a class="" :href="`tel:${telephone}`">
        <span>{{ telephone | telephone }}</span>
      </a>
      <br />
      <a class="" :href="`mailto:${email}`">
        <span>{{ email }}</span>
      </a>
      <br />
      33 1160 2202 0000 0002 6713 6076
    </div>
    <div class="mt-8">
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pl&amp;q=patriot%C3%B3w%20303+(Nazwa%20mojej%20firmy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import { EMAIL, TELEPHONE } from '@/data/general'

export default {
  name: 'MatematykaExpressKontaktPage',
  data() {
    return {
      email: EMAIL,
      telephone: TELEPHONE,
    }
  },
}
</script>

<style scoped>
.subtitle {
  color: #360c71;
}
</style>
