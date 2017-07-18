<template>
	<button type="button" class="entity-popup-btn" @click="clicked">+</button>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    clicked () {
      this.$emit('add')
    }
  }
}
</script>

<style src="@/assets/scss/components/entity-popup-btn.scss" lang="scss" scoped />
