<template>
  <li class="entity-list__item entity-list__item--left-side" tabindex="0" @click="selected" @keyup.enter.space="selected">
    <!-- START:.entity-list__main -->
    <div class="entity-list__main">
      <span class="entity-infolist__order-name">{{title}}</span>
      <!-- entity-count -->
      <div class="entity-infolist-count">
        <div class="entity-infolist-count__icon-holder">
          <icon name="list-ul" class="entity-infolist-count__icon"/>
        </div>
        <!-- .entity-counter -->
        <div class="entity-infolist-count__title">
          <span class="entity-infolist-count__title--amount">{{count}}</span>
          <span class="entity-infolist-count__title--desc">Продукты</span>
        </div>
        <!-- END:.entity-counter -->
      </div>
      <!-- END:entity-count -->
      <div class="entity-infolist-date">
        <span class="entity-infolist-date__short">{{shortDate}}</span>
        <span class="entity-infolist-date__сomplete">{{fullDate}}</span>
      </div>
       <!-- .entity-pricesum -->
      <div class="entity-infolist-price">
        <span class="entity-infolist-price__default"><pre>{{orderBasePrice}} $</pre></span>
        <span class="entity-infolist-price__chosen"><pre>{{orderDefaultPrice}} {{orderDefaultPriceSymbol}}</pre></span>
      </div>
      <!-- END:.entity-pricesum -->
    </div>
    <!-- END:.entity-list__main -->
    <button type="button" class="entity-list__delete-btn entity-list__delete-btn--disabled" @click.stop="deleteOrder" @keyup.stop>
        <icon name="trash-o" />
    </button>
    <span class="entity-list__active-state">
      <icon name="chevron-right" />
    </span>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import 'vue-awesome/icons/chevron-right'
import 'vue-awesome/icons/trash-o'

export default {
  props: ['orderInfo'],
  data () {
    return {
      orderDefaultPriceSymbol: ''
    }
  },
  methods: {
    selected () {
      this.$emit('selected', this.orderInfo.id)
    },
    deleteOrder () {
      this.$emit('deleteOrder')
    }
  },
  computed: {
    ...mapGetters([
      'getEntityFullDate',
      'getEntityShortDate',
      'getProductsInOrder',
      'getOrderPrice',
      'getOrderDefaultPriceSymbol'
    ]),
    title () {
      return this.orderInfo.title
    },
    count () {
      return this.getProductsInOrder(this.orderInfo.id).length
    },
    orderBasePrice () {
      let price = this.getOrderPrice(this.orderInfo.id, true)
      if (price) {
        return price.reduce((prev, current) => (prev += current.value), 0)
      }
    },
    orderDefaultPrice () {
      let price = this.getOrderPrice(this.orderInfo.id)
      if (price.find(priceItem => priceItem.isDefault === 1)) {
        this.orderDefaultPriceSymbol = price.find(priceItem => priceItem).symbol
        return price.reduce((prev, current) => (prev += current.value), 0)
      }
    },
    getDate () {
      return new Date(this.orderInfo.date)
    },
    fullDate () {
      return this.getEntityFullDate(this.getDate, 'ru', ' / ')
    },
    shortDate () {
      return this.getEntityShortDate(this.getDate, ' / ')
    }
  }
}
</script>

<style scoped>
</style>
