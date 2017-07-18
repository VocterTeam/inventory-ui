<template>
  <div class="form-select" v-on-clickaway="closeSelectDropDown" @keyup.esc="closeSelectDropDown" tabindex="0" @keyup.enter.space="toggleSelectDropdown">
    <!-- form-select-heading -->
    <div class="form-select-heading" @click="toggleSelectDropdown">
      <span class="form-select-heading__val">{{selectedComputed}}</span>
      <icon name="sort-desc" />
    </div>
    <!-- END:form-select-heading -->
    <ul v-show="opened" class="form-field form-field--fullwidth form-select-datalist">
      <li click="openAddForm form-select__add-item" tabindex="0">Добавить <span class="form-select__cross">+</span></li>
      <li v-for="(item, index) in options" @click="select(item)" @keyup.enter.space="select(item)" class="form-select-datalist__item" tabindex="0">
        <span class="form-select-datalist__text">{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import 'vue-awesome/icons/sort-desc'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'select',
  mixins: [clickaway],
  data () {
    return {
      selected: this.selectedOption,
      opened: false
    }
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    selectedOption: null,
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    selectedComputed () {
      return this.selected
    }
  },
  methods: {
    select (value) {
      this.selected = value
      this.closeSelectDropDown()
      this.$emit('selected', value)
    },
    toggleSelectDropdown () {
      this.opened = !this.opened
    },
    closeSelectDropDown () {
      this.opened = false
    },
    openAddForm () {
      this.$emit('addNew')
    }
  },
  mounted () {
    // this.selected = this.options[0]
    this.select(this.selected)
  }
}
</script>

<style scoped>
</style>
