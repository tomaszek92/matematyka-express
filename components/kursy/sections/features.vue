<template>
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
</template>

<script>
export default {
  name: "MatematykaExpressKursyFeatures"
}
</script>
