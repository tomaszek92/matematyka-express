<template>
  <nav class="flex flex-wrap gradient-background text-white p-6">
    <div class="flex col-1 pt-1">
      <nuxt-link to="/" class="flex lg:block items-center">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo" />
        <div class="ml-4 lg:ml-0 lg:mt-4 pr-8">
          Skuteczne korepetycje i&nbsp;kursy z&nbsp;matematyki
        </div>
      </nuxt-link>
    </div>
    <div class="col-2">
      <div class="text-xl font-extrabold mb-4">Dane kontaktowe</div>
      <div class="grid grid-rows-4 gap-2">
        <div>
          <a
            class="flex items-center"
            href="https://goo.gl/maps/vE3sBfgzyVXKzjFj8"
            target="_blank"
          >
            <img class="h-4 mr-2" src="/img/o-mnie/map.png" alt="telefon" />
            <span>ul. Patriotów 303, Warszawa</span>
          </a>
        </div>
        <div>
          <a class="flex items-center" :href="`tel:${telephone}`">
            <img
              class="h-4 mr-2"
              src="/img/o-mnie/telephone.png"
              alt="telefon"
            />
            <span>{{ telephone | telephone }}</span>
          </a>
        </div>
        <div>
          <a
            class="flex items-center"
            href="https://www.facebook.com/Matematyka-Express-108904580797830/"
            target="_blank"
          >
            <img class="h-4 mr-2" src="/facebook_logo.png" alt="facebook" />
            <span>Facebook</span>
          </a>
        </div>
        <div>
          <a
            class="flex items-center"
            href="https://www.instagram.com/matematyka_express/"
            target="_blank"
          >
            <img class="h-4 mr-2" src="/instagram_logo.png" alt="instagram" />
            <span>Instagram</span>
          </a>
        </div>
        <div>
          <a class="flex items-center" :href="`mailto:${email}`">
            <img class="h-4 mr-2" src="/img/o-mnie/mail.png" alt="e-mail" />
            <span>{{ email }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="text-xl font-extrabold mb-4">Dodatkowe informacje</div>
      <div class="grid grid-rows-3 gap-2">
        <div>
          <a
            href="/statues/Polityka prywatności- Matematyka Express.pdf"
            target="_blank"
          >
            Polityka prywatności
          </a>
        </div>
        <div>
          <a
            href="/statues/Regulamin kursów- Matematyka Express.pdf"
            target="_blank"
          >
            Regulamin kursów
          </a>
        </div>
        <div>
          <a
            href="/statues/Regulamin korepetycji- Matematyka Express.pdf"
            target="_blank"
          >
            Regulamin korepetycji
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { EMAIL, TELEPHONE } from '@/data/general'

export default {
  name: 'MatematykaExpressFooterNav',
  data() {
    return {
      email: EMAIL,
      telephone: TELEPHONE,
    }
  },
}
</script>

<style scoped>
.col-1 {
  flex-basis: 100%;
  margin-bottom: 1.5rem;
}

.col-2 {
  flex-basis: 100%;
  margin-bottom: 2rem;
}

.col-3 {
  flex-basis: 100%;
}

@media (min-width: 1024px) {
  .col-1,
  .col-2,
  .col-3 {
    flex-basis: 33%;
    margin-bottom: 0;
  }
}
</style>
