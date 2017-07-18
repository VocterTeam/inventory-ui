<template>
  <!-- entity-add -->
  <div class="entity-add entity-add__forms">
    <!-- .entity-add__content -->
    <div class="entity-add__content">
      <product-form v-if="activeFormName === 'product'" @switchForm="openNewForm" />
      <specification-form v-if="activeFormName === 'specification'" @switchForm="openNewForm" />
      <category-form v-if="activeFormName === 'category'" @switchForm="openNewForm" />
    </div>
    <!-- END:.entity-add__content -->
    
    <!-- form-steps-nav -->
    <div class="form-steps">
      <ul class="form-steps-nav">
        <!-- /* add class success if all forms is valid completed ===========================*/ -->
        <li class="form-steps-nav__item" :class="{success: activeFormName === 'product'}">
          <div class="form-steps-point">
            <input type="radio" value="product" v-model="activeFormName" id="product">
            <label for="product">product</label>
            <div class="form-steps-dot">
              <span class="form-steps-dot__inner"></span>
            </div>
          </div>
        </li>
        <!-- /* add class success if all forms is valid completed ===========================*/ -->
        <li class="form-steps-nav__item form-steps-nav__item--waypoints success" tabindex="-1">
          <div class="form-steps-waypoints">
            <span class="form-steps-waypoints__inner"></span>
          </div>
        </li>
        <li class="form-steps-nav__item" :class="{success: activeFormName === 'specification'}">
          <div class="form-steps-point form-steps-point--spec">
            <input type="radio" value="specification" v-model="activeFormName" id="specification">
            <label for="specification">specification</label>
            <div class="form-steps-dot">
              <span class="form-steps-dot__inner"></span>
            </div>
          </div>
        </li>
        <li class="form-steps-nav__item form-steps-nav__item--waypoints">
          <div class="form-steps-waypoints">
            <span class="form-steps-waypoints__inner"></span>
          </div>
          <div class="form-steps-waypoints__tooltip">
            <span class="form-steps-waypoints__tooltip-text">Чтобы добавить спецификацию, выберите категорию</span>
          </div>
          <!-- add class success if specification add correct -->
          <div class="form-steps-waypoints__tooltip form-steps-waypoints__tooltip--success">
            <span class="form-steps-waypoints__tooltip-text">Спецификация успешно добавлена</span>
          </div>
        </li>
        <li class="form-steps-nav__item" :class="{success: activeFormName === 'category'}">
          <div class="form-steps-point">
            <input type="radio" value="category" v-model="activeFormName" id="category">
            <label for="category">category</label>
            <div class="form-steps-dot">
              <span class="form-steps-dot__inner"></span>
            </div>
          </div>
        </li>
        <li class="form-steps-nav__item form-steps-nav__item--waypoints">
          <div class="form-steps-waypoints">
            <span class="form-steps-waypoints__inner"></span>
          </div>
          <div class="form-steps-waypoints__tooltip">
            <span class="form-steps-waypoints__tooltip-text">Чтобы добавить продукт, нужно выбрать его спецификацию, написать цену</span>
          </div>
        </li>
        <li class="form-steps-nav__item form-steps-nav__item--check">
          <div class="form-steps-waypoints form-steps-waypoints--check">
            <icon name="check" class="check-icon-form" />
          </div>
        </li>
      </ul>
    </div>
    <!-- END:form-steps-nav -->
  </div>
  <!-- END:entity-add -->
</template>

<script>
import 'vue-awesome/icons/check'
import ProductForm from '@/components/productAdd/ProductForm'
import CategoryForm from '@/components/productAdd/CategoryForm'
import SpecificationForm from '@/components/productAdd/SpecificationForm'
import forms from '@/mixins/forms'

export default {
  name: 'add',
  mixins: [forms],
  data () {
    return {
    }
  },
  components: {
    ProductForm,
    CategoryForm,
    SpecificationForm
  }
}
</script>

<style src="@/assets/scss/components/form-left-side.scss" lang="scss" />
