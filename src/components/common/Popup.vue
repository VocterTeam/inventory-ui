<template>
  <transition 
  name="custom-classes-transition"
  enter-active-class="animated bounceIn"
  leave-active-class="animated zoomOut">
  <div @keyup.esc="clickOutside">
    <div class="popup-inner" v-on-clickaway="clickOutside">
    	<slot></slot>
    </div>
  </div>
  </transition>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'popup',
  mixins: [clickaway],
  methods: {
    clickOutside () {
      this.$emit('clickOutside')
    }
  }
}
</script>

<style src="@/assets/scss/components/popup.scss" lang="scss" />
