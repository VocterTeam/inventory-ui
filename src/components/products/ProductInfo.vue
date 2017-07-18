<template>
  <transition 
  enter-active-class="animated bounceIn"
  leave-active-class="animated zoomOut">
  <div class="product-info">
     <button type="button" @click="close" class="close-btn close-btn--popup">
      <icon name="times" class="close-btn__sign" />
    </button>
    <product-form :productId="id" />
  </div>
  </transition>
</template>

<script>
import 'vue-awesome/icons/times'
import ProductForm from '@/components/productAdd/ProductForm'
export default {
  name: 'product-info',
  props: ['id'],
  computed: {
    product () {
      let product = this.$store.getters.getProduct(this.id)
      console.log('selected', product)
      return product
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  components: {
    ProductForm
  }
}
</script>

<style src="@/assets/scss/components/product-form-scoped.scss" lang="scss" scoped></style>

