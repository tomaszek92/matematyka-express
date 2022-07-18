<template>
  <div>
    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div class="slide fade">
        <img src="/img/opinie/1.png" style="width:100%">
      </div>

      <div class="slide fade">
        <img src="/img/opinie/2.png" style="width:100%">
      </div>

      <div class="slide fade">
        <img src="/img/opinie/3.png" style="width:100%">
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>

    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
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
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");
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
    }
  }
}
</script>

<style scoped>
/* Slideshow container */
.slideshow-container {
  width: 300px;
  position: relative;
  margin: auto;
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

.prev {
  left: -1rem;
}

.next {
  right: -1rem;
}

.prev:hover,
.next:hover {
  color: #5B2AA0;
}

.dot {
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  margin: 0 2px;
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
