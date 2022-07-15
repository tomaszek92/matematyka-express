<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 justify-items-center items-center">
      <div class="title font-extrabold text-6xl xl:text-8xl">
        Kursy
      </div>
      <div>
        <img src="/img/kursy/kursy_index.png" alt="kursy"/>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/lokalizacja.png">
          Zajęcia grupowe prowadzone są w&nbsp;formie stacjonarnej przy ulicy Patriotów 303, Warszawa Wawer
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/grupa.png">
          Kursy, które prowadzę, odbywają się w&nbsp;małych 4-5cio osobowych grupach, dzięki czemu każdy
          z&nbsp;uczestników może brać czynny udział w&nbsp;zajęciach i&nbsp;w&nbsp;razie potrzeby od&nbsp;razu
          konsultować swoje wątpliwości.
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/cke.png">
          Kursy prowadzone są zgodnie&nbsp;z obecnymi wytycznymi CKE. Na zajęciach omawiane są typowe zadania
          maturalne&nbsp;/&nbsp;egzaminacyjne, dzięki czemu kursanci doskonale wiedzą, czego&nbsp;mogą oczekiwać
          na&nbsp;zbliżającym się egzaminie.
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/konwersacja.png">
          Dla każdej z grup stworzona jest oddzielna konwersacja grupowa na messengerze, dzięki temu
          na&nbsp;bieżąco można konsultować swoje rozwiązania podczas samodzielnej pracy w&nbsp;domu.
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/book.png">
          Każdy z kursantów otrzymuje plik zadań w&nbsp;formie drukowanej oraz&nbsp;karty wzorów dostępne podczas
          matury.
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/trial.png">
          Podczas trwania kursu przeprowadzam dwa próbne egzamin&nbsp;/&nbsp;matury.
        </kursy-course-feature>
      </div>
      <div>
        <kursy-course-feature img-src="/img/kursy/smile.png">
          Bardzo mi zależy, aby zajęcia odbywały się w&nbsp;miłej i&nbsp;komfortowej atmosferze, zachęcającej
          do&nbsp;aktywnego uczestnictwa.
        </kursy-course-feature>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16 mt-10">
      <kursy-course
        title="egzamin"
        font-color="#734F19"
        background-color="#eda840"
        start="26.09.2022"
        hours="17:30-19:30"
        weekday="Poniedziałek"
        hours-count="56"
        subtitle="ósmoklasisty"
        url="/kursy/egzamin-osmoklasisty"/>
      <kursy-course
        title="matura"
        font-color="#8A0D49"
        background-color="#e05c9c"
        start="28.09.2022"
        hours="18:30-20:30"
        weekday="Środa"
        hours-count="56"
        subtitle="podstawowy"
        url="/kursy/matura-poziom-podstawowy"/>
      <kursy-course
        title="matura"
        font-color="#121153"
        background-color="#6f6edb"
        start="29.09.2022"
        hours="17:30-20:30"
        weekday="Czwartek"
        hours-count="84"
        subtitle="rozszerzony"
        url="/kursy/matura-poziom-rozszerzony"/>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MatematykaExpressKursyPage'
}
</script>
