<template>
  <div class="popup-body">
    <!-- popup-header -->
    <div class="popup-header">
      <form action="#">
        <label for="name-order" class="form-label">Название:</label>
        <input type="text" v-model.trim="title" id="name-order" name="orderTitle" data-vv-as='"Название"' v-validate="veeValidateTitleRules" required class="form-field form-field--fullwidth" v-focus>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
          <span v-if="errors.has('orderTitle')" class="form-errors">{{ errors.first('orderTitle') }}</span>
        </transition>
        <!-- .date-picker -->
        <div class="date-picker">
          <icon name="calendar" />
          <datepicker class="form-date-picker" placeholder="дд.мм.гггг"/>
        </div>
        <!-- END:.date-picker -->
      </form>
    </div>
    <!-- popup-header -->
    <div class="popup-footer text-center">
      <button type="submit" @click="add" class="action-btn action-btn--shadow">Добавить</button>
      <button type="button" @click="close" class="close-btn close-btn--popup">
        <icon name="times" class="close-btn__sign" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/calendar'

export default {
  name: 'add-order',
  data () {
    return {
      order: {
        title: '',
        date: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getOrderTitles'
    ]),
    veeValidateTitleRules () {
      return {
        required: true,
        min: 3,
        not_in: this.getOrderTitles
      }
    },
    title: {
      get () {
        return this.order.title
      },
      set (val) {
        this.order.title = val
      }
    }
  },
  methods: {
    add () {
      this.$emit('addOrder')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style src="@/assets/scss/components/popup-scoped.scss" lang="scss" scoped />
