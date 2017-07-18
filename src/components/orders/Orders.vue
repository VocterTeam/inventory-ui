<template>
  <div class="orders">
    <!-- .entity-heading -->
    <div class="entity-heading">
      <entity-popup-btn @add="openAddPopup"/>
      <h2 class="entity-group-title">Orders / {{orders.length}}</h2>
    </div>
    <!-- END:.entity-heading -->

    <!-- .entity-body -->
      <div class="entity-body myRow" :class="{active: orderId}">
        <ul class="entity-list">
          <order-list-item :orderInfo="order" v-for="(order, index) of orders" :key="order.id" @selected="select" @addOrder="addOrder(order)" @deleteOrder="deleteOrder(order)" :class="{active: order.id == orderId}"/>
        </ul>
        <order-info :orderId="orderId" v-if="orderId" @close="unselect" />
      </div>
      <!-- END:.entity-body -->
      <popup v-if="isPopupOpened" class="popup" @clickOutside="closeAllPopup">
        <add-order-popup v-if="isAddPopup" @close="closeAllPopup" />
        <delete-order-popup v-if="isDeletePopup" :order="orderForDeleting" @confirm="confirmDeleteOrder" @close="closeAllPopup" />
        <success-popup v-if="isSuccessPopup" :message="'Длинное название прихода успешно создан'" />
      </popup>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OrderListItem from '@/components/orders/OrderListItem'
import OrderInfo from '@/components/orders/OrderInfo'
import AddOrderPopup from '@/components/orders/AddOrderPopup'
import DeleteOrderPopup from '@/components/orders/DeleteOrderPopup'
import popups from '@/mixins/popups'

export default {
  name: 'order',
  mixins: [ popups ],
  data () {
    return {
      orderId: null,
      orderForDeleting: {}
    }
  },
  computed: {
    ...mapGetters([
      'orders'
    ])
  },
  components: {
    OrderListItem,
    OrderInfo,
    AddOrderPopup,
    DeleteOrderPopup
  },
  methods: {
    ...mapActions([
      'getOrders'
    ]),
    select (orderId) {
      this.orderId = orderId
    },
    unselect () {
      this.orderId = null
    },
    addOrder () {
      this.$validator.validateAll()
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<style src="@/assets/scss/components/orders.scss" lang="scss" scoped />
