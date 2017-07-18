<template>
  <div>
    <input type="text" v-model="name">
    <button @click="add">Add</button>
    <button @click="close">x</button>
  </div>
</template>

<script>

export default {
  name: 'add-user',
  data () {
    return {
      user: {
        name: ''
      }
    }
  },
  computed: {
    name: {
      get () {
        return this.user.title
      },
      set (val) {
        this.user.title = val
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    add () {}
  }
}
</script>

<style scoped>
</style>
