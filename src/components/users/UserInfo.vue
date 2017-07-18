<template>
  <transition 
  enter-active-class="animated bounceIn"
  leave-active-class="animated zoomOut">
  <div class="entity-info">
    <button type="button" @click="close" class="close-btn close-btn--popup">
      <icon name="times" class="close-btn__sign" />
    </button>
    <div class="tabs-title">
      <span>{{name}}</span>
    </div>
    <div class="tabs-list">
      <span class="tabs-list__title" @click="activate('products')" @keyup.enter.space="activate('products')" :class="{ active: activated == 'products'}" tabindex="0">Продукты</span>
      <span class="tabs-list__title" @click="activate('groups')" @keyup.enter.space="activate('groups')" :class="{ active: activated == 'groups'}" tabindex="0">Группы</span>
    </div>
    
    <transition enter-active-class="animated bounceIn">
    <div class="product-tab product-tab--user" v-show="activated == 'products'">
      <button class="tabs-info-btn">
        <span class="entity-add-btn__plus">+</span>
        <span class="entity-add-btn__text">Добавить продукт</span>
      </button>
      <ul class="entity-infolist entity-infolist--tabs">
        <li class="entity-infolist__item entity-infolist__item--tabs" v-for="product in products">
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
          <div class="entity-infolist__warranty">
            <span>
              c   {{getEntityFullDate(new Date(product.guarantee.start), 'ru', ' / ')}}
            </span>
            <span>
              по {{getEntityFullDate(new Date(product.guarantee.end), 'ru', ' / ')}}
            </span>
          </div>
          <span class="entity-infolist__condition">
            <template v-if="product.isNew">Новый</template>
            <template v-else>Старый</template>
          </span>
          <div class="entity-infolist-price">
            <span class="entity-infolist-price__default">{{product.price.find(priceItem => priceItem.symbol === 'USD').value}} $</span>
            <span class="entity-infolist-price__chosen" v-if="product.price.find(priceItem => priceItem.symbol !== 'USD').isDefault === 1">{{product.price.find(priceItem => priceItem.symbol !== 'USD').value}} {{product.price.find(priceItem => priceItem.symbol !== 'USD').symbol}}</span>
          </div>
          <a href="#" class="entity-infolist__group-name" v-if="getProductGroup(product.group)">{{getProductGroup(product.group).title}}</a>
          <a href="#" class="entity-infolist__user-name">{{name}}</a>
          <a href="#" class="entity-infolist__order-name" v-if="getProductOrder(product.order)">{{getProductOrder(product.order).title}}</a>
          <div class="entity-infolist-date">
            <span class="entity-infolist-date__short">{{getEntityShortDate(new Date(product.date), ' / ')}}</span>
            <span class="entity-infolist-date__сomplete">{{getEntityFullDate(new Date(product.date), 'ru', ' / ')}}</span>
          </div>
          <button type="button" class="entity-list__delete-btn">
            <icon name="trash-o" />
          </button>
        </li>
      </ul>
    </div>
    </transition>
    <transition enter-active-class="animated bounceIn">
    <div class="product-tab" v-show="activated == 'groups'">
      <button class="tabs-info-btn">
        <span class="entity-add-btn__plus">+</span>
        <span class="entity-add-btn__text">Добавить группу</span>
      </button>
      <ul class="entity-infolist">
        <li class="entity-infolist__item entity-infolist__item--tabs" v-for="group in groups" :key="group.id">
          <div class="entity-infolist__icon">
            <img :src="group.photo" alt="icon">
          </div>
          <div class="entity-infolist-spec">
            <h4 class="entity-infolist-spec__title">{{group.title}}</h4>
            <!-- <div class="entity-infolist-spec__type">Gigabyte Technology X58-USB3</div> -->
          </div>
          <div class="entity-infolist-count">
            <div class="entity-infolist-count__icon-holder">
              <icon name="list-ul" class="entity-infolist-count__icon" />
            </div>
            <div class="entity-infolist-count__title">
              <span class="entity-infolist-count__title--amount">{{products.length}}</span>
              <span class="entity-infolist-count__title--desc">Продукты</span>
            </div>
          </div>
          <div class="entity-infolist-count">
            <div class="entity-infolist-count__icon-holder">
              <icon name="user" class="entity-infolist-count__icon"/>
            </div>
            <div class="entity-infolist-count__title">
              <span class="entity-infolist-count__title--amount">{{group.users.length}}</span>
              <span class="entity-infolist-count__title--desc">Пользователи</span>
            </div>
          </div>
          <button type="button" class="entity-list__delete-btn">
            <icon name="trash-o" />
          </button>
        </li>
      </ul>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/list-ul'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/user'

export default {
  name: 'order-info',
  data () {
    return {
      activated: 'products'
    }
  },
  props: ['id'],
  computed: {
    ...mapGetters([
      'getEntityFullDate',
      'getEntityShortDate',
      'getUserTitle',
      'getUserProducts',
      'getProductOrder',
      'getProductGroup',
      'getUserGroups'
    ]),
    name () {
      return this.getUserTitle(this.id)
    },
    products () {
      return this.getUserProducts(this.id)
    },
    groups () {
      return this.getUserGroups(this.id)
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    activate (tabName) {
      this.activated = tabName
    }
  }
}
</script>

<style src="@/assets/scss/components/tabs.scss" lang="scss" />
