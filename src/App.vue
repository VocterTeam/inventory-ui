<template>
  <div id="app" class="app">
    <top-menu />
    <main class="app-main">
      <navigation-menu />
    	<div class="app-content">
        <transition 
          appear
          appear-active-class="animated bounceIn"
          enter-active-class="animated bounceInRight">
          <router-view />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationMenu from '@/components/common/NavigationMenu'
import TopMenu from '@/components/common/TopMenu'

export default {
  name: 'app',
  components: {
    NavigationMenu,
    TopMenu
  }
}
</script>

<style src="./assets/scss/app.scss" lang="scss"></style>
<style src="../node_modules/animate.css/animate.min.css" />
