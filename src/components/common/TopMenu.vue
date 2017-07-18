<template>
  <transition
    appear
    appear-active-class="animated bounceInDown">
    <header class="app-header top-menu">
        <!-- .top-menu__container -->
        <div class="top-menu__container">
          <a href="/" class="app-logo">
            <img src="../../assets/img/app-logo.png" alt="app-logo" class="app-logo__img" />
            <span class="app-logo__text">{{$appTitle}}</span>
          </a>
          <app-date />
        </div>
        <!-- END:.top-menu__container -->
    </header>
  </transition>
</template>

<script>
import 'vue-awesome/icons/clock-o'

export default {
  data () {
    return {
    }
  }
}
</script>

<style src="@/assets/scss/components/top-menu.scss" lang="scss" scoped />
