<template>
  <div class="form-wrapper">
    <div class="form-title">
      <span class="form-title__text">Cпецификация</span>
    </div>
    <form name="specification" class="form-wrapper__form">
      <div class="category-add-form__add">
         <label class="form-label">Выберите категорию:</label>
         <form-select :options="allCategories" @selected="productName = $event" @addNew="" class="form-field form-field--fullwidth" v-focus/>
      </div>
      <div class="spec-add-form__add">
        <div class="spec-add-form__wrapper">
          <label for="spec-add" class="form-label required">Добавьте Спецификацию</label>
          <input type="text" v-model="specification" name="specificationTitle" data-vv-as='"Спецификация"' id="spec-add" class="form-field form-field--fullwidth" v-validate="veeValidateSpecificationTitleRules">
        </div>
        <button type="button" class="spec-add-btn">
          <icon name="floppy-o" class="spec-add-btn__icon"></icon>
        </button>
      </div>
      <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
        <span v-if="errors.has('specificationTitle')" class="form-errors">{{ errors.first('specificationTitle') }}</span>
      </transition>
      
      <file-upload class="specification-upload" />  
    
      <!-- form-element -->
      <div class="form-element form-button">
        <button type="button" class="action-btn action-btn--info" @click="switchForm('category')">К категории</button>
        <button type="button" class="action-btn action-btn--shadow action-btn--success" @click="switchForm('product')">К продукту</button>
      </div>
      <!-- END:form-element -->
    </form>
  </div>
</template>

<script>
import FileUpload from '../common/FileUpload'
import FormSelect from '@/components/productAdd/FormSelect'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'specification-form',
  data () {
    return {
      selectedCategory: '',
      specification: ''
    }
  },
  computed: {
    ...mapGetters([
      'specifications',
      'categories',
      'getSpecificationTitles'
    ]),
    allCategories () {
      return this.categories
    },
    veeValidateSpecificationTitleRules () {
      return {
        required: true,
        min: 3,
        not_in: this.getSpecificationTitles
      }
    }
  },
  methods: {
    ...mapActions([
      'getSpecifications',
      'getCategories'
    ]),
    switchForm (form) {
      this.$emit('switchForm', form)
    }
  },
  mounted () {
    this.getSpecifications()
    this.getCategories()
  },
  components: {
    FileUpload,
    FormSelect
  }
}
</script>

<style scoped>
</style>
