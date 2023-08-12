<template>
  <div>
    <div class="grid grid-cols-1 gap-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="self-center justify-self-center">
          <div class="title font-extrabold text-6xl xl:text-8xl text-center">
            <span>Dlaczego<br />warto?</span>
            <slot></slot>
          </div>
        </div>
        <div class="self-center justify-self-center">
          <img class="h-36" src="/img/dlaczego-warto/main.png" alt="main" />
        </div>
        <div class="self-center text-center text-xl">
          Jeśli szukasz kursu lub korepetycji, które&nbsp;skutecznie przygotują
          Cię do&nbsp;egzaminu ósmych klas, matury&nbsp;lub&nbsp;po prostu
          kogoś, kto&nbsp;pomoże Ci&nbsp;w&nbsp;bieżącej nauce, to&nbsp;dobrze
          trafiłeś &#128578;
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/doswiadczenie.png">
          <span>
            Ponad <strong>7 lat<br />doświadczenia</strong>
            <br />
            w&nbsp;nauczaniu matematyki
          </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/male_grupy.png">
          <span>
            Kursy prowadzone<br />
            w <strong>małych</strong><br />
            grupach<br />
            4-5 osobowych
          </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/lokalizacja.png">
          <span>
            <strong>Doskonała</strong><br />
            <strong>lokalizacja</strong><br />
            zajęć<br />
            stacjonarnych
          </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/online.png">
          <span>
            Możliwość<br />
            wyboru zajęć<br />
            w formie<br />
            <strong>online</strong>
          </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/atmosfera.png">
          <span>
            <strong>Przyjazna</strong><br />
            i <strong>bezstresowa</strong><br />
            atmosfera<br />
            podczas zajęć
          </span>
        </dlaczego-warto-reason>
        <dlaczego-warto-reason img-src="/img/dlaczego-warto/konsultacje.png">
          <span>
            Możliwość<br />
            <strong>bezpłatnych</strong><br />
            <strong>konsultacji</strong><br />
            po zajęciach
          </span>
        </dlaczego-warto-reason>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
      <dlaczego-warto-lesson-form>
        <template #header>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9776.273335187107!2d21.0107336!3d52.2239763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed397781dd219%3A0x4c4d6399d282872!2sMatematyka%20Express!5e0!3m2!1spl!2spl!4v1691607007430!5m2!1spl!2spl"
            width="100%"
            height="321"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </template>
        <template #title> Stacjonarnie </template>
        <template #content>
          <div>
            Zajęcia odbywają się w samym <strong>centrum Warszawy</strong> na
            Wilczej 56/6 (I piętro).
            <br />
            <br />
            <strong>Doskonały dojazd komunikacją miejską.</strong>
            <br />
            <br />
            <strong>Plac Konstytucji</strong>- 5 min pieszo
            <br />
            <strong>Koszykowa</strong>- 6 min pieszo Metro
            <br />
            <strong>Centrum/Politechnika</strong>- 10 min pieszo
          </div>
        </template>
      </dlaczego-warto-lesson-form>
      <dlaczego-warto-lesson-form>
        <template #header>
          <div class="flex justify-center">
            <img
              class="h-50"
              src="/img/dlaczego-warto/online_big.png"
              alt="online"
            />
          </div>
        </template>
        <template #title> Online </template>
        <template #content>
          Jeśli wolisz zajęcia w formie online, również mam taką możliwość.
          Łączymy się przez Skype'a, Messengera lub&nbsp;Face Time'a. Pracujemy
          na tablicy współdzielonej w&nbsp;wersji online, tak abyśmy oboje mogli
          pisać. Tablica nie znika i&nbsp;po zajęciach zawsze masz możliwość,
          aby&nbsp;do niej wrócić i&nbsp;zobaczyć, jak&nbsp;wykonywaliśmy dane
          zadanie &#128578;
        </template>
      </dlaczego-warto-lesson-form>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Dlaczego warto'
})
</script>
