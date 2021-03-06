<template>
  <div>
    <div class="rounded-xl shadow-xl bg-white text-center p-8 pt-12">
      <div v-show="isBadgeVisible" class="badge text-white xl:text-lg font-extrabold h-16 rounded-xl flex items-center justify-center">
        <slot name="badge"/>
      </div>
      <div v-show="isHeaderVisible" class="mb-4">
        <slot name="header"/>
      </div>
      <div class="price color-me font-extrabold text-5xl mb-2">
        {{ price }} zł
      </div>
      <div class="promo-price font-extrabold text-5xl mb-4">
        {{ promoPrice }} zł<span style="vertical-align: super; font-size: 24px;">&#42;</span>
      </div>
      <div v-show="isPriceDescriptionVisible">
        <slot name="price-description"/>
      </div>
      <div class="color-me mb-2 flex items-center justify-center">
        <img src="/img/shared/duration.png" alt="czas trwania" class="mr-2"/>
        <span>{{ durationInMin }} min</span>
      </div>
      <div class="color-me mb-4 flex items-center justify-center">
        <img src="/img/shared/people_count.png" alt="czas trwania" class="mr-2"/>
        <span>{{ peopleCount }}</span>
      </div>
      <div class="saving font-extrabold text-2xl">
        Oszczędzasz {{ saving | percent }}
      </div>
      <div v-if="btnOpt" class="flex justify-center">
        <nuxt-link :to="btnOpt.to" class="button block text-white uppercase font-extrabold px-8 py-3 rounded-xl mt-6">
          {{ btnOpt.text }}
        </nuxt-link>
      </div>
    </div>

    <div v-show="isAsteriskVisible" class="color-asterisk mt-2 text-center text-sm">
      <slot name="asterisk"/>
    </div>
    <div v-show="isCaptionVisible" class="mt-2 text-center text-sm">
      <slot name="caption"/>
    </div>
  </div>

</template>

<script>
export default {
  name: "MatematykaExpressCard",
  filters: {
    percent(dec) {
      if (dec <= 1) {
        return `${Math.round(dec * 100)}%`;
      }
      return 'Please enter number less than or equal to 1'
    }
  },
  props: {
    price: {
      type: Number,
      required: true
    },
    promoPrice: {
      type: Number,
      required: true
    },
    durationInMin: {
      type: Number,
      required: true
    },
    peopleCount: {
      type: String,
      required: true
    },
    btnOpt: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    isBadgeVisible() {
      return this.isSlotVisible('badge');
    },
    isHeaderVisible() {
      return this.isSlotVisible('header');
    },
    isPriceDescriptionVisible() {
      return this.isSlotVisible('price-description');
    },
    isAsteriskVisible() {
      return this.isSlotVisible('asterisk');
    },
    isCaptionVisible() {
      return this.isSlotVisible('caption');
    },
    saving() {
      return (this.price - this.promoPrice) / this.price;
    }
  },
  methods: {
    isSlotVisible(slotName) {
      return !!this.$slots[slotName];
    }
  }
}
</script>

<style scoped>
.badge {
  background: linear-gradient(270deg, #ED428B -4.56%, #8A1848 115.09%);
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);

  position: relative;
  top: -72px;
  margin-bottom: -64px;
}

.price {
  text-decoration-line: line-through;
  text-decoration-color: #ED428B;
  text-decoration-thickness: 4px;
}

.promo-price {
  background: linear-gradient(90deg, #8A1848 24.8%, #ED428B 76.09%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.saving {
  background: linear-gradient(90deg, #8A1848 16.95%, #ED6FA5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.button {
  background: linear-gradient(270deg, #ED428B -4.56%, #8A1848 115.09%);
  max-width: 200px;
}
</style>
