<template>
  <div class="popup-body popup-body--delete">
    <div class="popup-header">
      <div class="caution-title">Вы уверенны, что хотите удалить этот приход?</div>
      <div class="entity-list__main">
        <h3 class="entity-title">{{title}}</h3>
      </div>
    </div>
    <div class="popup-footer text-right">
      <button type="button" @click="close" class="action-btn action-btn--transparent">Отменить</button>
      <button type="submit" @click="confirm" class="action-btn action-btn--shadow action-btn--delete" v-focus>
        <icon name="trash" class="backet-btn__sign" />
        <span class="action-btn__title">Удалить</span>
      </button>
      
      <button type="button" @click="close" class="close-btn close-btn--popup ">
        <icon name="times" class="close-btn__sign" />
      </button>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/trash'

export default {
  name: 'delete-order',
  props: ['order'],
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    close () {
      this.$emit('close')
    }
  },
  computed: {
    title () {
      return this.order.title
    }
  }
}
</script>

<style src="@/assets/scss/components/popup-scoped.scss" lang="scss" scoped></style>
