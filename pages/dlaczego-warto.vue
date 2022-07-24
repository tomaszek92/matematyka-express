<template>
  <div>
    <div class="grid grid-cols-1 gap-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="self-center justify-self-center">
          <div class="title font-extrabold text-6xl xl:text-8xl text-center">
            <span>Dlaczego<br>warto?</span>
            <slot></slot>
          </div>
        </div>
        <div class="self-center justify-self-center">
          <img class="h-36" src="/img/dlaczego-warto/main.png" alt="main"/>
        </div>
        <div class="self-center text-center text-xl">
          Jeśli szukasz kursu lub korepetycji, które&nbsp;skutecznie przygotują Cię do&nbsp;egzaminu ósmych klas,
          matury&nbsp;lub&nbsp;po prostu kogoś, kto&nbsp;pomoże Ci&nbsp;w&nbsp;bieżącej nauce, to&nbsp;dobrze trafiłeś
          &#128578;
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/doswiadczenie.png">
        <span>
          Ponad <strong>6 lat<br>
          doświadczenia</strong><br>
          w nauczaniu matematyki
        </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/male_grupy.png">
        <span>
          Kursy prowadzone<br>
          w <strong>małych</strong><br>
          grupach<br>
          4-5 osobowych
        </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/lokalizacja.png">
        <span>
          <strong>Doskonała</strong><br>
          <strong>lokalizacja</strong><br>
          zajęć<br>
          stacjonarnych
        </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/online.png">
        <span>
          Możliwość<br>
          wyboru zajęć<br>
          w formie<br>
          <strong>online</strong>
        </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/atmosfera.png">
        <span>
          <strong>Przyjazna</strong><br>
          i <strong>bezstresowa</strong><br>
          atmosfera<br>
          podczas zajęć
        </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/konsultacje.png">
        <span>
          Możliwość<br>
          <strong>bezpłatnych</strong><br>
          <strong>konsultacji</strong><br>
          po zajęciach
        </span>
        </dlaczego-warto-reason>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
      <dlaczego-warto-lesson-form>
        <template #header>
          <iframe
            width="100%" height="321" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=pl&amp;q=patriot%C3%B3w%20303+(Nazwa%20mojej%20firmy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
        </template>
        <template #title>
          Stacjonarnie
        </template>
        <template #content>
          <div>
            W tej formie odbywają się zarówno zajęcia indywidualne i&nbsp;grupowe. Jest to budynek (nad Cafe Peron) przy
            ulicy Patriotów 303, Warszawa Wawer, II piętro.
          </div>
          <br/>
          <div class="font-medium">
            Doskonały dojazd komunikacją miejską.
          </div>
          <div>
            <span class="font-medium">Autobusy:</span> 115, 119, 147, 213, 305, 319, 521
          </div>
          <div>
            <span class="font-medium">PKP:</span> R1, R3, R7, R8, S1
          </div>
        </template>
      </dlaczego-warto-lesson-form>
      <dlaczego-warto-lesson-form>
        <template #header>
          <div class="flex justify-center">
            <img class="h-50" src="/img/dlaczego-warto/online_big.png" alt="online"/>
          </div>
        </template>
        <template #title>
          Online
        </template>
        <template #content>
          Jeśli wolisz zajęcia w formie online, również mam taką możliwość. Łączymy się przez Skype, Messengera
          lub&nbsp;Face Time i&nbsp;pracujemy na tablicy współdzielonej w&nbsp;wersji online, tak abyśmy oboje mogli
          pisać. Tablica nie znika i&nbsp;po zajęciach zawsze masz możliwość, aby&nbsp;do niej wrócić i&nbsp;zobaczyć,
          jak&nbsp;wykonywaliśmy dane zadanie &#128578;
        </template>
      </dlaczego-warto-lesson-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressDlaczegoWartoPage'
}
</script>
