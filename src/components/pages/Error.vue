<template>
  <div class="error">
    <div class="error-wrapper">
      <h1>{{msg}}</h1>
      <router-link class="app-navlist__link" :to="{name: 'orders'}">go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      msg: 'Sorry, The Page is not exists'
    }
  }
}
</script>

<style src="@/assets/scss/components/error-scoped.scss" lang="scss" scoped>
</style>
