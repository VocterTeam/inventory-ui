<template>
  <div class="settings-colorpicker__сolor-choice" v-on-clickaway="closeColorPicker">
    <div @click="toggleColorPicker" class="colorpicker-indicator">
      <span class="entity-infolist__status-indicator used" :style="{backgroundColor: colors.hex}"></span>
      <icon name="angle-down" class="open-colorpicker__icon" />
    </div>
    <color-picker v-show="showPicker" v-model="colors"/>
  </div>
</template>

<script>
import 'vue-awesome/icons/angle-down'
import vueColor from 'vue-color'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  data () {
    return {
      showPicker: false,
      colors: {
        hex: '#bd4e3c',
        a: 1
      }
    }
  },
  watch: {
    colors (newValue) {
      this.$emit('color-selected', newValue)
    }
  },
  methods: {
    toggleColorPicker () {
      this.showPicker = !this.showPicker
    },
    closeColorPicker () {
      this.showPicker = false
    }
  },
  components: {
    'color-picker': vueColor.Chrome
  }
}
</script>

<style src="@/assets/scss/components/entity-popup-btn.scss" lang="scss" scoped></style>
<style src="@/assets/scss/components/settings-scoped.scss" lang="scss" scoped></style>
