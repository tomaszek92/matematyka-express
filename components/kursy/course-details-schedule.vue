<template>
  <div class="grid">
    <div>Miesiąc</div>
    <div>Data zajęć</div>
    <div>Cena za<br />miesiąc zajęć</div>
    <template v-for="item in schedule">
      <div :key="name + item.month">
        <span class="month">{{ item.month }}</span>
      </div>
      <div :key="name + item.dates.toString()">
        {{ item.dates | dates }}
      </div>
      <div :key="name + item.month + item.price">
        <span class="price">{{ item.price }} zł</span>
        <span class="promo-price">{{ item.promoPrice }} zł</span>
      </div>
    </template>
    <div></div>
    <div class="text-right"><span class="total">Razem</span></div>
    <div>
      <span class="price">{{ price }} zł</span>
      <span class="promo-price">{{ promoPrice }} zł</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatematykaExpressCourseDetailsSchedule',
  filters: {
    dates(value) {
      return !value ? '' : value.join(', ')
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    schedule: {
      type: Array,
      required: true,
    },
  },
  computed: {
    price() {
      return this.schedule.reduce((current, item) => current + item.price, 0)
    },
    promoPrice() {
      return this.schedule.reduce(
        (current, item) => current + item.promoPrice,
        0
      )
    },
  },
}
</script>

<style scoped>
div.grid {
  grid-template-columns: 110px 1fr 150px;
}

div.grid > div {
  padding: 0.5rem;
}

div.grid > div:nth-child(-n + 3) {
  background: linear-gradient(180deg, #360c71 0%, #8444df 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  border-bottom: 3px #360c71 solid;
  font-weight: 800;
  align-items: flex-end;
  display: flex;
}

div.grid > div:nth-last-child(-n + 3) {
  border-top: 3px #360c71 solid;
}

div.grid > div:nth-child(3n) {
  border-left: 3px #360c71 solid;
}

div.grid span.month,
div.grid span.total,
div.grid span.price {
  color: #360c71;
  font-weight: 500;
}

div.grid span.price {
  text-decoration-line: line-through;
  text-decoration-color: #ef2a2a;
  text-decoration-thickness: 3px;
}

div.grid span.promo-price {
  color: #ef2a2a;
  font-weight: 500;
}
</style>
