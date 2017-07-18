<template>
  <transition 
    appear
    appear-active-class="animated bounceInLeft">
    <aside class="navigation-menu">
      <div class="user-nav-settings">
        <!-- .user-nav-avatar -->
        <div class="user-nav-avatar">
          <img src="../../assets/img/user-avatar.png" alt="user-avatar" class="user-nav__img" />
          <router-link :to="{name: 'settings'}" class="user-nav-btn" tabindex="0">
            <icon name="gear" class="user-settings-icon"/>
          </router-link>
        </div>
        <!-- END:.user-nav-avatar -->
      </div>
    
      <nav class="app-nav">
        <!-- app-navlist -->
        <ul class="app-navlist">
          <li class="app-navlist__item">
            <router-link class="app-navlist__link" :to="{ name: 'orders'}">Orders</router-link>
          </li>
          <li class="app-navlist__item">
            <router-link class="app-navlist__link" :to="{ name: 'groups'}">Groups</router-link>
          </li>
          <li class="app-navlist__item">
            <router-link class="app-navlist__link" :to="{ name: 'products'}">Products</router-link>
          </li>
          <li class="app-navlist__item">
            <router-link class="app-navlist__link" :to="{ name: 'users'}">Users</router-link>
          </li>
          <li class="app-navlist__item">
            <router-link class="app-navlist__link" :to="{ name: 'settings'}">Settings</router-link>
          </li>
        </ul>
        <!-- END:app-navlist -->
      </nav>
    </aside>
  </transition>
</template>

<script>
import 'vue-awesome/icons/gear'

export default {
  data () {
    return {
    }
  }
}
</script>

<style src="@/assets/scss/components/navigation-menu.scss" lang="scss" scoped />
