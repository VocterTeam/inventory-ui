<template>
  <transition 
  enter-active-class="animated bounceIn"
  leave-active-class="animated zoomOut">
  <div class="entity-info">
    <button type="button" @click="close" class="close-btn close-btn--popup">
      <icon name="times" class="close-btn__sign" />
    </button>
    <div class="tabs-title">
      <span>{{title}}</span>
    </div>
    <div class="product-tab product-tab--order">

      <router-link :to="{ name: 'orders-add', params: {orderId: orderId}}" class="entity-add-btn">
        <span class="entity-add-btn__plus">+</span>
        <span class="entity-add-btn__text">Добавить продукт</span>
      </router-link>

      <ul class="entity-infolist">
        <li v-for="(product, index) of products" class="entity-infolist__item entity-infolist__item--tabs">
          <span class="entity-infolist__status-indicator" :style="{backgroundColor: $getBiggestValInArr(product.statuses, 'date', 'color')}"></span>
          <div class="entity-infolist__icon">
            <img :src="product.photo" alt="icon" />
          </div>
          <div class="entity-infolist-spec">
            <h4 class="entity-infolist-spec__title">{{product.specification}}</h4>
            <div class="entity-infolist-spec__type">{{product.type}}</div>
          </div>

          <status-history-tooltip :statuses="product.statuses">
             <span class="entity-infolist__status" :style="{color: $getBiggestValInArr(product.statuses, 'date', 'color')}">{{$getBiggestValInArr(product.statuses, 'date', 'title')}}</span>
          </status-history-tooltip>

          <button type="button" class="entity-list__delete-btn" @click="deleteProduct(product.id)">
            <icon name="trash-o" />
          </button>
        </li>
      </ul>
    </div>
  </div>
  </transition>  
</template>

<script>
import { mapGetters } from 'vuex'
import 'vue-awesome/icons/trash-o'
import 'vue-awesome/icons/times'

export default {
  name: 'order-info',
  props: ['orderId'],
  computed: {
    ...mapGetters([
      'getProductsInOrder',
      'getOrderTitle'
    ]),
    title () {
      return this.getOrderTitle(this.orderId)
    },
    products () {
      return this.getProductsInOrder(this.orderId)
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    deleteProduct (id) {
      this.$emit('deleteProduct', id)
    }
  },
  mounted () {
    // console.log(this.$store)
  }
}
</script>

<style scoped />
