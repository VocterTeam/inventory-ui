<template>
  <li class="entity-list__item entity-list__item--left-side" @click="selected" @keyup.enter.space="selected" tabindex="0">
    <!-- START:.entity-list__main -->
    <div class="entity-list__main">
      <span class="entity-infolist__status-indicator" :style="{backgroundColor: $getBiggestValInArr(productInfo.statuses, 'date', 'color')}"></span>
      <div class="entity-infolist__icon">
        <img :src="photo" alt="icon">
      </div>
      <div class="entity-infolist-spec">
        <h4 class="entity-infolist-spec__title">{{specification}}</h4>
        <div class="entity-infolist-spec__type">{{type}}</div>
      </div>
      <status-history-tooltip :statuses="productInfo.statuses">
        <span class="entity-infolist__status" :style="{color: $getBiggestValInArr(productInfo.statuses, 'date', 'color')}">{{$getBiggestValInArr(productInfo.statuses, 'date', 'title')}}</span>
      </status-history-tooltip>
      <div class="entity-infolist__warranty">
        <span>
          c {{guaranteeStart}}
        </span>
        <span>
          по {{guaranteeEnd}}
        </span>
      </div>

      <!-- entity-infolist__condition -->
      <span class="entity-infolist__condition">
        <template v-if="productInfo.isNew">Новый</template>
        <template v-else>Старый</template>
      </span>
      <!-- END:entity-infolist__condition -->

      <div class="entity-infolist-price">
        <span class="entity-infolist-price__default">{{basePrice}} $</span>
        <span class="entity-infolist-price__chosen">{{defaultPrice}} {{productDefaultPriceSymbol}}</span>
      </div>
      <a href="#" class="entity-infolist__group-name" tabindex="-1" v-if="productGroup">{{productGroup.title}}</a>
      <a href="#" class="entity-infolist__user-name" tabindex="-1" v-if="productUser">{{productUser.name}}</a>
      <a href="#" class="entity-infolist__order-name" tabindex="-1" v-if="productOrder">{{productOrder.title}}</a>
      <div class="entity-infolist-date">
        <span class="entity-infolist-date__short">{{shortDate}}</span>
        <span class="entity-infolist-date__сomplete">{{fullDate}}</span>
      </div>
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
import { mapGetters, mapActions } from 'vuex'
import 'vue-awesome/icons/trash-o'
import 'vue-awesome/icons/chevron-right'

export default {
  props: ['productInfo'],
  data () {
    return {
      productDefaultPriceSymbol: ''
    }
  },
  methods: {
    ...mapActions([
      'getOrders',
      'getGroups',
      'getUsers'
    ]),
    selected () {
      this.$emit('selected', this.productInfo.id)
    }
  },
  computed: {
    ...mapGetters([
      'getEntityFullDate',
      'getEntityShortDate',
      'getProductGroup',
      'getProductUser',
      'getProductOrder',
      'getProductPrice'
    ]),
    specification () {
      return this.productInfo.specification
    },
    photo () {
      return this.productInfo.photo
    },
    type () {
      return this.productInfo.type
    },
    status () {
      return this.productInfo.status
    },
    guaranteeStart () {
      return this.getEntityFullDate(new Date(this.productInfo.guarantee.start), 'ru', ' / ')
    },
    guaranteeEnd () {
      return this.getEntityFullDate(new Date(this.productInfo.guarantee.end), 'ru', ' / ')
    },
    getDate () {
      return new Date(this.productInfo.date)
    },
    fullDate () {
      return this.getEntityFullDate(this.getDate, 'ru', ' / ')
    },
    shortDate () {
      return this.getEntityShortDate(this.getDate, ' / ')
    },
    basePrice () {
      return this.getProductPrice(this.productInfo.id, true).value
    },
    defaultPrice () {
      let price = this.getProductPrice(this.productInfo.id)
      if (price.isDefault === 1) {
        this.productDefaultPriceSymbol = price.symbol
        return price.value
      }
    },
    productGroup () {
      return this.getProductGroup(this.productInfo.group)
    },
    productUser () {
      return this.getProductUser(this.productInfo.user)
    },
    productOrder () {
      return this.getProductOrder(this.productInfo.order)
    }
  },
  mounted () {
    this.getOrders()
    this.getGroups()
    this.getUsers()
  }
}
</script>

<style scoped>
</style>
