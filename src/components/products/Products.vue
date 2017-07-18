<template>
  <div class="products">
    <!-- .entity-heading -->
    <div class="entity-heading entity-heading--filter-product">
      <div class="entity-heading--product">
        <h2 class="entity-group-title">Products / {{allProducts.length}}</h2>
      </div>
      <form class="form-filter-product">
        <div class="form-element form-element--filter">
          <label class="form-label form-label--filter">Категория:</label>
          <form-select :options="allCategories" @selected="selectCategory" @addNew="" class="form-field form-field--filter" />
        </div>
        <div class="form-element form-element--filter">
          <label class="form-label form-label--filter">Спецификация:</label>
          <form-select :options="allSpecificationTitles" @selected="selectSpecification" @addNew="" class="form-field form-field--filter" />
        </div>
      </form>
    </div>
    <!-- END:.entity-heading -->
    <div class="entity-body entity-body--products myRow" :class="{active: selectedProductId}">
      <div class="entity-list__holder">
        <ul v-if="allProducts.length" class="entity-list entity-list--products">
          <transition-group name="list" mode="out-in">
              <product-list-item :productInfo="product" v-for="(product, index) of allProducts" :key="product.id" @selected="select" :class="{active: product.id == selectedProductId}"/>
          </transition-group>
        </ul>
        <product-info :id="selectedProductId" v-if="selectedProductId" @close="unselect"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormSelect from '@/components/productAdd/FormSelect'
import ProductListItem from './ProductListItem'
import ProductInfo from './ProductInfo'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'products',
  data () {
    return {
      selectedCategory: null,
      selectedSpecification: null,
      selectedProductId: null
    }
  },
  computed: {
    ...mapGetters([
      'products',
      'categories',
      'getProductsInSpecification',
      'getSpecificationTitles',
      'getCategorySpecifications',
      'getCategorySpecificationsTitles'
    ]),
    allProducts () {
      let sortedProducts = this.products
      this.unselect()
      if (this.selectedCategory) {
        sortedProducts = sortedProducts.filter(product => this.allSpecificationTitles.indexOf(product.type) !== -1)
      }
      if (this.selectedSpecification) {
        sortedProducts = sortedProducts.filter(product => product.type === this.selectedSpecification)
      }
      return sortedProducts
    },
    allCategories () {
      return this.categories
    },
    allSpecificationTitles () {
      let sortedSpecifications = this.getSpecificationTitles
      if (this.selectedCategory) {
        sortedSpecifications = this.getCategorySpecificationsTitles(this.selectedCategory)
      }
      return sortedSpecifications
    }
  },
  methods: {
    ...mapActions([
      'getCategories',
      'getSpecifications',
      'getProducts'
    ]),
    select (id) {
      this.selectedProductId = id
    },
    unselect () {
      this.selectedProductId = null
    },
    selectCategory (title) {
      this.selectedSpecification = null
      this.selectedCategory = title
    },
    selectSpecification (title) {
      this.selectedSpecification = title
    }
  },
  mounted () {
    this.getCategories()
    this.getSpecifications()
    this.getProducts()
  },
  components: {
    ProductListItem,
    ProductInfo,
    FormSelect
  }
}
</script>

<style scoped>
</style>
