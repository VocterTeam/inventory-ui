<template>
  <li class="entity-list__item entity-list__item--left-side" @click="selected" @keyup.enter.space="selected" tabindex="0">
    <!-- START:.entity-list__main -->
    <div class="entity-list__main">
      <div class="entity-infolist__icon">
        <img src="../../assets/img/desktop-icon.png" alt="icon">
      </div>
      <span class="entity-infolist__group-name">{{title}}</span>
      <!-- entity-infolist-count -->
      <div class="entity-infolist-count">
        <div class="entity-infolist-count__icon-holder">
          <icon name="user" class="entity-infolist-count__icon" />
        </div>
        <div class="entity-infolist-count__title">
          <span class="entity-infolist-count__title--amount">{{usersCount}}</span>
          <span class="entity-infolist-count__title--desc">Пользователи</span>
        </div>
      </div>
      <!-- END:entity-infolist-count -->

      <!-- entity-infolist-count -->
      <div class="entity-infolist-count">
        <div class="entity-infolist-count__icon-holder">
          <icon name="list-ul" class="entity-infolist-count__icon"/>
        </div>
        <div class="entity-infolist-count__title">
          <span class="entity-infolist-count__title--amount">{{productsCount}}</span>
          <span class="entity-infolist-count__title--desc">Продукты</span>
        </div>
      </div>
      <!-- END:entity-infolist-count -->

      <!-- entity-infolist-price -->
      <div class="entity-infolist-price">
        <span class="entity-infolist-price__default">{{groupBasePrice}} $</span>
        <span class="entity-infolist-price__chosen">{{groupDefaultPrice}} {{groupDefaultPriceSymbol}}</span>
      </div>
      <!-- END:entity-infolist-price -->

      <!-- entity-infolist-date -->
      <div class="entity-infolist-date">
        <span class="entity-infolist-date__short">{{shortDate}}</span>
        <span class="entity-infolist-date__сomplete">{{fullDate}}</span>
      </div>
      <!-- END:entity-infolist-date -->
      
    </div>
    <!-- END:.entity-list__main -->
    <button type="button" class="entity-list__delete-btn entity-list__delete-btn--disabled" @click.stop @keyup.stop>
      <icon name="trash-o" />
    </button>
    <span class="entity-list__active-state">
      <icon name="chevron-right" />
    </span>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
import 'vue-awesome/icons/user'
import 'vue-awesome/icons/chevron-right'

export default {
  props: ['groupInfo'],
  data () {
    return {
      groupDefaultPriceSymbol: ''
    }
  },
  methods: {
    selected () {
      this.$emit('selected', this.groupInfo.id)
    }
  },
  computed: {
    ...mapGetters([
      'getEntityFullDate',
      'getEntityShortDate',
      'getGroupProducts',
      'getGroupPrice'
    ]),
    title () {
      return this.groupInfo.title
    },
    usersCount () {
      return this.groupInfo.users.length
    },
    productsCount () {
      return this.getGroupProducts(this.groupInfo.id).length
    },
    productsSum () {
      return this.groupInfo.products.reduce((sum, product) => (sum += product.price), 0)
    },
    groupBasePrice () {
      let price = this.getGroupPrice(this.groupInfo.id, true)
      return price.reduce((prev, current) => (prev += current.value), 0)
    },
    groupDefaultPrice () {
      let price = this.getGroupPrice(this.groupInfo.id)
      if (price.find(priceItem => priceItem.isDefault === 1)) {
        this.groupDefaultPriceSymbol = price.find(priceItem => priceItem).symbol
        return price.reduce((prev, current) => (prev += current.value), 0)
      }
    },
    fullDate () {
      return this.getEntityFullDate(new Date(this.groupInfo.date), 'ru', ' / ')
    },
    shortDate () {
      return this.getEntityShortDate(new Date(this.groupInfo.date), ' / ')
    }
  }
}
</script>

<style scoped>
</style>
