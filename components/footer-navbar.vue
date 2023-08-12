<template>
  <nav class="flex flex-wrap gradient-background text-white p-6">
    <div class="flex col-1 pt-1">
      <NuxtLink to="/" class="flex lg:block items-center">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo" />
        <div class="ml-4 lg:ml-0 lg:mt-4 pr-8">
          Skuteczne korepetycje i&nbsp;kursy z&nbsp;matematyki
        </div>
      </NuxtLink>
    </div>
    <div class="col-2">
      <div class="text-xl font-extrabold mb-4">Dane kontaktowe</div>
      <div class="grid grid-rows-4 gap-2">
        <div>
          <a
            class="flex items-center"
            href="https://goo.gl/maps/kUW2nDvZwcuRqN9i7"
            target="_blank"
          >
            <img class="h-4 mr-2" src="/img/o-mnie/map.png" alt="telefon" />
            <span>ul. Wilcza 56/6, Warszawa</span>
          </a>
        </div>
        <div>
          <a class="flex items-center" :href="`tel:${TELEPHONE}`">
            <img
              class="h-4 mr-2"
              src="/img/o-mnie/telephone.png"
              alt="telefon"
            />
            <span>{{ formattedTelephone }}</span>
          </a>
        </div>
        <div>
          <FooterNavbarSocialLink
            name="TikTok"
            img-src="/tik_tok_logo.png"
            link="https://www.tiktok.com/@matematykaexpress"
          />
        </div>
        <div>
          <FooterNavbarSocialLink
            name="Instagram"
            img-src="/instagram_logo.png"
            link="https://www.instagram.com/matematyka_express/"
          />
        </div>
        <div>
          <FooterNavbarSocialLink
            name="Facebook"
            img-src="/facebook_logo.png"
            link="https://www.facebook.com/Matematyka-Express-108904580797830/"
          />
        </div>
        <div>
          <a class="flex items-center" :href="`mailto:${EMAIL}`">
            <img class="h-4 mr-2" src="/img/o-mnie/mail.png" alt="e-mail" />
            <span>{{ EMAIL }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="text-xl font-extrabold mb-4">Dodatkowe informacje</div>
      <div class="grid grid-rows-3 gap-2">
        <div>
          <a
            href="/statues/Polityka%20prywatności-%20Matematyka%20Express.pdf"
            target="_blank"
          >
            Polityka prywatności
          </a>
        </div>
        <div>
          <a
            href="/statues/Regulamin%20kursów-%20Matematyka%20Express.pdf"
            target="_blank"
          >
            Regulamin kursów
          </a>
        </div>
        <div>
          <a
            href="/statues/Regulamin%20korepetycji-%20Matematyka%20Express.pdf"
            target="_blank"
          >
            Regulamin korepetycji
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EMAIL, TELEPHONE } from '@/data/general'
import { formatTelephone } from '~/helpers/formatters'

const formattedTelephone = computed(() => {
  return formatTelephone(TELEPHONE)
})
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
