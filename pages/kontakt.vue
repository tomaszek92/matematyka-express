<template>
  <div>
    <div class="title text-center text-4xl md:text-7xl font-extrabold mb-4">
      Skontaktuj się
    </div>
    <div class="text-center text-lg font-medium mb-4">JESTEM TU DLA CIEBIE</div>
    <div class="color-me text-center text-xl font-extrabold mb-4">
      Matematyka Express
    </div>
    <div class="text-center">
      ul. Wilcza 56/6<br />
      00-679 Warszawa<br />
      Piętro I<br />
      <a class="" :href="`tel:${TELEPHONE}`">
        <span>{{ formattedTelephone }}</span>
      </a>
      <br />
      <a class="" :href="`mailto:${EMAIL}`">
        <span>{{ EMAIL }}</span>
      </a>
      <br />
      33 1160 2202 0000 0002 6713 6076
    </div>
    <div class="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9776.273335187107!2d21.0107336!3d52.2239763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed397781dd219%3A0x4c4d6399d282872!2sMatematyka%20Express!5e0!3m2!1spl!2spl!4v1691607007430!5m2!1spl!2spl"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatTelephone } from '~/helpers/formatters'
import { EMAIL, TELEPHONE } from '~/data/general'

useHead({
  title: 'Kontakt',
})

const formattedTelephone = computed(() => {
  return formatTelephone(TELEPHONE)
})
</script>
