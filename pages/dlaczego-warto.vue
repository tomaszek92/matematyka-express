<template>
  <div class="wrapper grid grid-cols-1 gap-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="self-center justify-self-center">
        <div class="title font-extrabold text-6xl xl:text-8xl text-center">
          <span>Dlaczego<br>warto?</span>
          <slot></slot>
        </div>
      </div>
      <div class="self-center justify-self-center">
        <img class="h-36" src="img/dlaczego-warto/main.png" alt="main"/>
      </div>
      <div class="self-center text-center text-xl">
        Jeśli szukasz kursu lub korepetycji, które&nbsp;skutecznie przygotują Cię do&nbsp;egzaminu ósmych klas,
        matury&nbsp;lub&nbsp;po prostu kogoś, kto&nbsp;pomoże Ci&nbsp;w&nbsp;bieżącej nauce, to&nbsp;dobrze trafiłeś :)
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
      <dlaczego-warto-reason img-src="img/dlaczego-warto/doswiadczenie.png">
        <span>
          Ponad <strong>6 lat<br>
          doświadczenia</strong><br>
          w nauczaniu matematyki
        </span>
      </dlaczego-warto-reason>
      <dlaczego-warto-reason img-src="img/dlaczego-warto/male_grupy.png">
        <span>
          Kursy prowadzone<br>
          w <strong>małych</strong><br>
          grupach<br>
          4-5 osobowych
        </span>
      </dlaczego-warto-reason>
      <dlaczego-warto-reason img-src="img/dlaczego-warto/lokalizacja.png">
        <span>
          <strong>Doskonała</strong><br>
          <strong>lokalizacja</strong><br>
          zajęć<br>
          stacjonarnych
        </span>
      </dlaczego-warto-reason>
      <dlaczego-warto-reason img-src="img/dlaczego-warto/online.png">
        <span>
          Możliwość<br>
          wyboru zajęć<br>
          w formie<br>
          <strong>online</strong>
        </span>
      </dlaczego-warto-reason>
      <dlaczego-warto-reason img-src="img/dlaczego-warto/atmosfera.png">
        <span>
          <strong>Przyjazna</strong><br>
          i <strong>bezstresowa</strong><br>
          atmosfera<br>
          podczas zajęć
        </span>
      </dlaczego-warto-reason>
      <dlaczego-warto-reason img-src="img/dlaczego-warto/konsultacje.png">
        <span>
          Możliwość<br>
          <strong>bezpłatnych</strong><br>
          <strong>konsultacji</strong><br>
          po zajęciach
        </span>
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
</style>
