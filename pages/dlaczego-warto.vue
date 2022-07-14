<template>
  <div class="wrapper">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="self-center justify-self-center">
        <div class="title font-extrabold text-6xl md:text-7xl xl:text-9xl">
          <span>Dlaczego<br>warto?</span>
        </div>
      </div>
      <div class="self-center justify-self-center">
        <img class="h-24 lg:h-36 xl:h-56" src="img/dlaczego-warto/main.png" alt="main"/>
      </div>
      <div class="self-center justify-self-center text-black text-center mx-8 lg:mr-8">
        Jeśli szukasz kursu lub korepetycji, które skutecznie przygotują Cię do egzaminu ósmych klas, matury lub po
        prostu
        kogoś, kto pomoże Ci w bieżącej nauce, to dobrze trafiłeś :)
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <dlaczego-warto-reason img-src="img/dlaczego-warto/doswiadczenie.png">
        <span>Ponad <strong>6 lat doświadczenia</strong> w nauczaniu matematyki</span>
      </dlaczego-warto-reason>

      <dlaczego-warto-reason img-src="img/dlaczego-warto/male_grupy.png">
        <span>Kursy prowadzone w <strong>małych</strong> grupach 4-5 osobowych</span>
      </dlaczego-warto-reason>

      <dlaczego-warto-reason img-src="img/dlaczego-warto/lokalizacja.png">
        <span><strong>Doskonała lokalizacja</strong> zajęć stacjonarnych</span>
      </dlaczego-warto-reason>

      <dlaczego-warto-reason img-src="img/dlaczego-warto/online.png">
        <span>Możliwość wyboru zajęć w formie <strong>online</strong></span>
      </dlaczego-warto-reason>

      <dlaczego-warto-reason img-src="img/dlaczego-warto/atmosfera.png">
        <span><strong>Przyjazna i bezstresowa</strong> atmosfera podczas zajęć</span>
      </dlaczego-warto-reason>

      <dlaczego-warto-reason img-src="img/dlaczego-warto/konsultacje.png">
        <span>Możliwość <strong>bezpłatnych konsultacji</strong> po zajęciach</span>
      </dlaczego-warto-reason>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressDlaczegoWartoPage'
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    min-height: calc(100vh - 6.5rem);
  }
}

.title {
  background: linear-gradient(90.08deg, #360C71 0.11%, #8444DF 69.58%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
