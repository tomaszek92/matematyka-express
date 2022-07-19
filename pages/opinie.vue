<template>
  <div>
    <div class="slideshow-container">
      <div v-for="n in 23" :key="n" :ref="`slide-${n}`" class="slide fade">
        <img :src="`/img/opinie/${n}.png`" class="w-100" :loading="n === 1 ? 'eager' : 'lazy'"/>
      </div>
      <a class="prev left-0 md:-left-4" @click="plusSlides(-1)">&#10094;</a>
      <a class="next right-0 md:-right-4" @click="plusSlides(1)">&#10095;</a>
    </div>

    <div class="text-center">
      <span v-for="n in 23" :key="n" :ref="`dot-${n}`" class="dot" @click="currentSlide(n)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressOpiniePage',
  data() {
    return {
      slideIndex: 1
    }
  },
  mounted() {
    this.showSlides(1);
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      let i;
      const slides = this.getRefs('slide');
      const dots = this.getRefs('dot');
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    getRefs(pattern) {
      return Object.keys(this.$refs)
        .filter(name => name.startsWith(pattern))
        .map(name => this.$refs[name][0]);
    }
  }
}
</script>

<style scoped>
.slideshow-container {
  position: relative;
  margin: auto;
}

@media (orientation: portrait) {
  .slideshow-container {
    max-width: 300px;
  }
}

@media (orientation: landscape) {
  .slideshow-container {
    max-width: 400px;
  }
}

@media (min-width: 768px) and (orientation: portrait) {
  .slideshow-container {
    max-width: 400px;
  }
}


@media (min-width: 768px) and (orientation: landscape) {
  .slideshow-container {
    max-width: 500px;
  }
}

.slide {
  display: none;
}

.prev, .next {
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
  color: #360C71;
}

.prev:hover,
.next:hover {
  color: #5B2AA0;
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

.active, .dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 0.3s;
}

@keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}
</style>
