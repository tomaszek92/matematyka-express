<template>
  <nav class="flex flex-wrap gradient-background text-white p-6">
    <div class="flex col-1 pt-1">
      <nuxt-link to="/" class="flex lg:block items-center">
        <img class="h-14 cursor-pointer" src="/logo.png" alt="logo">
        <div class="ml-4 lg:ml-0 lg:mt-4">
          Skuteczne korepetycje i&nbsp;kursy z&nbsp;matematyki
        </div>
      </nuxt-link>
    </div>
    <div class="col-2">
      <div class="text-xl font-extrabold mb-4">
        Dane kontaktowe
      </div>
      <div class="grid grid-rows-4 gap-2">
        <div class="flex items-center">
          <img class="h-4 mr-2" src="/img/o-mnie/map.png" alt="telefon"/>
          <a href="https://goo.gl/maps/vE3sBfgzyVXKzjFj8" target="_blank">ul. Patriotów 303, Warszawa</a>
        </div>
        <div class="flex items-center">
          <img class="h-4 mr-2" src="/img/o-mnie/telephone.png" alt="telefon"/>
          <a href="tel:+4866206360">+48 662 063 460</a>
        </div>
        <div class="flex items-center">
          <img class="h-4 mr-2" src="/img/o-mnie/mail.png" alt="e-mail"/>
          <a href="mailto:kursymatematykaexpress@gmail.com">kursymatematykaexpress@gmail.com</a>
        </div>
        <div class="flex items-center">
          <img class="h-4 mr-2" src="/facebook_logo.png" alt="facebook"/>
          <a href="https://www.facebook.com/Matematyka-Express-108904580797830/" target="_blank">Facebook</a>
        </div>
        <div class="flex items-center">
          <img class="h-4 mr-2" src="/instagram_logo.png" alt="instagram"/>
          <a href="https://www.instagram.com/matematyka_express/" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="text-xl font-extrabold mb-4">
        Dodatkowe informacje
      </div>
      <div class="grid grid-rows-3 gap-2">
        <div>
          Polityka prywatności
        </div>
        <div>
          Regulamin kursów
        </div>
        <div>
          Regulamin korepetycji
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MatematykaExpressFooterNav"
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
  .col-1 {
    flex-basis: 20%;
    margin-bottom: 0;
  }

  .col-2 {
    flex-basis: 40%;
    margin-bottom: 0;
  }

  .col-3 {
    flex-basis: 40%;
  }
}
</style>
