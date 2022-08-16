<template>
  <div>
    <two-column img-src="/img/korepetycje/korepetycje_index_1.png">
      <template #title>
        <span class="title text-5xl xl:text-7xl">Korepetycje</span>
      </template>
      <template #subtitle>
        Jeśli szukasz kogoś, kto skutecznie przygotuje Cię do&nbsp;egzaminu
        ósmych klas, matury lub&nbsp;po&nbsp;prostu pomoże w&nbsp;bieżącej
        nauce, to&nbsp;dobrze trafiłeś &#128578;
      </template>
      <template #description>
        Korepetycjami zajmuję się już <strong>od ponad sześciu lat</strong>.
        Przez te sześć lat pomagałam wielu osobom, a&nbsp;nasza współpraca
        zawsze kończyła&nbsp;się sukcesem. Uczniowie wracają do mnie
        w&nbsp;kolejnym roku szkolnym, a&nbsp;także zaczynam uczyć również ich
        rodzeństwo i&nbsp;znajomych.<br />
        <br />
        Na lekcjach ze mną <strong>nie musisz się stresować</strong>,
        że&nbsp;czegoś nie umiesz.
        <strong>Ja jestem tu po to, aby&nbsp;wytłumaczyć Ci</strong>
        i&nbsp;powtórzyć dane zagadnienie tyle razy, ile będzie trzeba.<br />
        <br />
        Do nauki do matury mam opracowane materiały, które w&nbsp;szybki sposób
        pozwolą nam powtórzyć wszystkie potrzebne zagadnienia.
        <strong>Wiem też, jakie są tak zwane pewniaki</strong>, które na pewno
        na maturze się pojawią &#128578;<br />
        <br />
        Zajęcia prowadzę zarówno w formie <strong>stacjonarnej</strong>, jak
        i&nbsp;<strong>online</strong>.
      </template>
    </two-column>

    <div class="mb-4 md:mb-6 xl:mb-8"></div>

    <two-column img-src="/img/korepetycje/korepetycje_index_2.png">
      <template #title>
        <span class="title text-3xl xl:text-5xl">
          Jak wygląda współpraca ze&nbsp;mną?
        </span>
      </template>
      <template #subtitle>
        Zanim podejmiesz współpracę ze mną, warto abyś dowiedział się, czego
        wymagam od swoich uczniów i&nbsp;co sama daje od siebie &#128578;
      </template>
      <template #description>
        <div class="mb-3">
          <strong>Od swoich uczniów wymagam:</strong>
        </div>
        <ul>
          <li>
            <strong>Chęci do pracy.</strong> Bez tego ani rusz. Daj od siebie
            chęci, a&nbsp;gwarantuję Ci, że ja podczas naszej współpracy
            przekażę Ci całą moją wiedzę z&nbsp;danego tematu
            i&nbsp;w&nbsp;pełni zaangażuje się w&nbsp;powierzone mi zadanie.
          </li>
          <li>
            <strong>Prowadzenia notatek.</strong> Niby banał, ale bez notatek
            samodzielne rozwiązanie prac domowych jest praktycznie niemożliwe!
          </li>
          <li>
            <strong>Odrabiania prac domowych.</strong> To najważniejsza część
            naszej umowy. Godzinna lekcja ze mną to za mało. Musisz sam robić
            zadania, bo tylko wtedy okaże się, czy naprawdę zrozumiałeś dany
            temat.
          </li>
        </ul>
        <br />
      </template>
    </two-column>

    <div class="mb-4 md:mb-6 xl:mb-8"></div>

    <div class="text-center">
      <strong>WAŻNE!</strong> Jeśli czegoś nie wiesz, napotkałeś na jakiś
      problem przy rozwiązywaniu zadania podczas pracy domowej, nie musisz
      czekać do kolejnych zajęć. Możesz napisać mi SMS, wysłać mi wiadomość na
      Facebook'u lub po prostu zadzwonić, a ja zawsze chętnie Ci pomogę. <br />
      <br />
      <strong>PAMIĘTAJ. TY i JA działamy w jednym teamie &#128578;</strong>
    </div>

    <div class="mb-4 md:mb-6 xl:mb-8"></div>

    <div>
      <two-column
        img-src="/img/korepetycje/korepetycje_index_3.png"
        :md-cols="1"
      >
        <template #title>
          <span class="title text-3xl xl:text-5xl">
            Terminy lekcji oraz cena
          </span>
        </template>
        <template #subtitle>
          <span>
            Zajęcia indywidualne prowadzę
            <strong>od&nbsp;poniedziałku do&nbsp;soboty.</strong> Termin zajęć
            ustalany jest <strong>indywidualnie</strong> po&nbsp;kontakcie
            telefonicznym.
          </span>
        </template>
        <template #description>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
            <card
              :promo-price="130"
              :price="140"
              :duration-in-min="60"
              people-count="1 osoba"
            >
              <template #header>
                <div class="text-xl color-me font-extrabold">1 lekcja</div>
                <div class="uppercase">tygodniowo</div>
              </template>
              <template #price-description>
                <div class="mb-2 color-me">ZA LEKCJĘ</div>
              </template>
            </card>
            <card
              :promo-price="120"
              :price="130"
              :duration-in-min="60"
              people-count="1 osoba"
            >
              <template #badge>Najczęściej wybierane</template>
              <template #header>
                <div class="text-xl color-me font-extrabold">2 lekcje</div>
                <div class="uppercase">tygodniowo</div>
              </template>
              <template #price-description>
                <div class="mb-2 color-me">ZA LEKCJĘ</div>
              </template>
            </card>
          </div>
          <div class="color-asterisk my-2 text-sm">
            &#42;Cena promocyjna obowiązuje przy zapisie na zajęcia do
            29.08.2022 r.
          </div>
          <div class="text-sm">
            Przed zapisaniem się na zajęcia zapoznaj się z
            <a
              href="/statues/Regulamin korepetycji- Matematyka Express.pdf"
              target="_blank"
              class="underline"
            >
              regulaminem korepetycji
            </a>
            .
          </div>
        </template>
      </two-column>
    </div>
  </div>
</template>

<script>
import { getTitle } from '@/data/general'

export default {
  name: 'MatematykaExpressKorepetycjePage',
  head() {
    return {
      title: getTitle('Korepetycje'),
    }
  },
}
</script>

<style scoped>
li {
  list-style-position: inside;
  list-style-type: disclosure-closed;
  padding: 0.75rem 0;
}
</style>
