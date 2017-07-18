<template>
  <li class="entity-list__item entity-list__item--left-side" @click="selected" @keyup.enter.space="selected" tabindex="0">
    <!-- START:.entity-list__main -->
    <div class="entity-list__main entity-list__main--user"> 
      <div class="entity-infolist__icon">
        <img src="../../assets/img/desktop-icon.png" alt="icon" />
      </div>
      <span class="entity-infolist__user-name">{{name}}</span>
      <div class="entity-infolist-count">
        <div class="entity-infolist-count__icon-holder">
          <icon name="asterisk" class="entity-infolist-count__icon" />
        </div>
        <div class="entity-infolist-count__title">
          <span class="entity-infolist-count__title--amount">{{groupsCount}}</span>
          <span class="entity-infolist-count__title--desc">Группы</span>
        </div>
      </div>
      <div class="entity-infolist-count">
        <div class="entity-infolist-count__icon-holder">
          <icon name="list-ul" class="entity-infolist-count__icon"/>
        </div>
        <div class="entity-infolist-count__title">
          <span class="entity-infolist-count__title--amount">{{productsCount}}</span>
          <span class="entity-infolist-count__title--desc">Продукты</span>
        </div>
      </div>
      <div class="entity-infolist-date">
        <span class="entity-infolist-date__short">{{shortDate}}</span>
        <span class="entity-infolist-date__сomplete">{{fulldate}}</span>
      </div>
    </div>
    <!-- END:.entity-list__main -->
    <button type="button" class="entity-list__delete-btn entity-list__delete-btn--disabled" @click.stop>
      <icon name="trash-o" />
    </button>
    <span class="entity-list__active-state">
      <icon name="chevron-right" />
    </span>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
import 'vue-awesome/icons/chevron-right'
import 'vue-awesome/icons/list-ul'
import 'vue-awesome/icons/asterisk'

export default {
  props: ['userInfo'],
  methods: {
    selected () {
      this.$emit('selected', this.userInfo.id)
    }
  },
  computed: {
    ...mapGetters([
      'getUserProducts',
      'getEntityFullDate',
      'getEntityShortDate'
    ]),
    name () {
      return this.userInfo.name
    },
    groupsCount () {
      return this.userInfo.groups.length
    },
    productsCount () {
      return this.userInfo.products.length
    },
    getDate () {
      return new Date(this.userInfo.date)
    },
    fulldate () {
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
