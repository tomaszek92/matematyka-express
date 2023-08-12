<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16">
    <div class="grid grid-cols-1 gap-6 justify-items-center content-start">
      <div class="text-center font-extrabold text-6xl xl:text-8xl">
        <span class="title">Opinie</span>
      </div>
      <div class="text-center">
        Wielokrotnie dostaję od moich uczniów i&nbsp;ich
        <strong>
          rodziców wiadomości, w&nbsp;których informują mnie o&nbsp;rezultatach
          naszej wspólnej pracy.
        </strong>
        Takie wiadomości zawsze mnie cieszą i&nbsp;powodują, że&nbsp;widzę
        ogromny sens swojej pracy &#128578;<br />
        <br />
        <strong>Zapraszam Cię do zapoznania się z częścią z nich.</strong>
      </div>
      <div>
        <img class="max-h-80" src="/img/opinie/opinie_index.png" alt="opinie" />
      </div>
    </div>
    <div class="text-center">
      <div class="slideshow-container">
        <div v-for="n in count" :key="n" ref="slides" class="slide fade">
          <img
            :src="`/img/opinie/${n}.png`"
            class="w-100"
            :loading="n === 1 ? 'eager' : 'lazy'"
            alt="opinia"
          />
        </div>
        <a class="prev left-0 md:-left-4" @click="plusSlides(-1)">&#10094;</a>
        <a class="next right-0 md:-right-4" @click="plusSlides(1)">&#10095;</a>
      </div>
      <div class="text-center">
        <span
          v-for="n in count"
          :key="n"
          ref="dots"
          class="dot"
          @click="currentSlide(n)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

useHead({
  title: 'Opinie',
})

const slides = ref()
const dots = ref()

let slideIndex = 1
const count = 21

onMounted(() => {
  showSlides(1)
})

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  if (n > slides.value.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.value.length
  }
  for (i = 0; i < slides.value.length; i++) {
    slides.value[i].style.display = 'none'
  }
  for (i = 0; i < dots.value.length; i++) {
    dots.value[i].className = dots.value[i].className.replace(' active', '')
  }
  slides.value[slideIndex - 1].style.display = 'block'
  dots.value[slideIndex - 1].className += ' active'
}
</script>

<style scoped>
.slideshow-container {
  position: relative;
  margin: auto;
  max-width: 28rem;
}

.slide {
  display: none;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -1.5rem;
  padding: -2rem;
  font-weight: bold;
  font-size: 2rem;
  transition: 0.3s;
  user-select: none;
  color: #360c71;
}

.prev:hover,
.next:hover {
  color: #5b2aa0;
}

.dot {
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin: 0 0.25rem;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s;
}

.active,
.dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 0.3s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
