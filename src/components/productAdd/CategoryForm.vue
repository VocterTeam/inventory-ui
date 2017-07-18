<template>
  <div class="form-wrapper">
    <div class="category-wrapper">
      <div class="form-title">
        <span class="form-title__text">Категория</span>
      </div>
      <form name="category" class="form-wrapper__form">
        <div class="category-add-form">
          <div class="category-add-form__add">
            <label for="category-select" class="form-label">Добавьте категорию:</label>
            <input class="form-field form-field--fullwidth" type="text" id="category-select" name="categoryTitle" data-vv-as='"Категория"' v-validate="veeValidateCategoryTitleRules" v-model="name" v-focus>
          </div>
          <div type="button" class="category-add-form__icon">
            <icon name="check" class="category-add-form__icon-check" />
          </div>
        </div>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
          <span v-if="errors.has('categoryTitle')" class="form-errors">{{ errors.first('categoryTitle') }}</span>
        </transition>
        <ul class="category-add-list">
          <li class="category-add-list__item" v-for="category in categories">{{category}}</li>
        </ul>
      </form>
    </div>
    <button type="button" class="action-btn action-btn--shadow action-btn--success" @click="switchForm">К спецификации</button>
  </div>
</template>

<script>
  import 'vue-awesome/icons/check'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'category-form',
    data () {
      return {
        name: ''
      }
    },
    computed: {
      ...mapGetters([
        'categories',
        'getCategoriesTitles'
      ]),
      veeValidateCategoryTitleRules () {
        return {
          required: true,
          not_in: this.getCategoriesTitles
        }
      }
    },
    methods: {
      ...mapActions([
        'getCategories'
      ]),
      switchForm () {
        return this.$emit('switchForm', 'specification')
      }
    },
    mounted () {
      this.getCategories()
    }
  }
</script>

<style scoped>
</style>
