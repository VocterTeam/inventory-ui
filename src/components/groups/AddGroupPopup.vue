<template>
  <div class="popup-body">
    <div class="popup-header">
      <div class="input-field">
        <label for="name-group" class="form-label">Название группы:</label>
        <input type="text" v-model="title" id="name-group" name="groupTitle" data-vv-as='"Название"' v-validate="veeValidateGroupTitleRules" class="form-field form-field--fullwidth" v-focus>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
          <span v-if="errors.has('groupTitle')" class="form-errors">{{ errors.first('groupTitle') }}</span>
        </transition>
      </div>

      <file-upload />
      
    </div>
    <div class="popup-footer text-center">
      <button @click="add" class="action-btn action-btn--shadow">Добавить</button>
      <button type="button" @click="close" class="close-btn close-btn--popup ">
        <icon name="times" class="close-btn__sign" />
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FileUpload from '../common/FileUpload'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/cloud-upload'

export default {
  name: 'add-group',
  data () {
    return {
      group: {
        title: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'getGroupTitles'
    ]),
    veeValidateGroupTitleRules () {
      return {
        required: true,
        not_in: this.getGroupTitles
      }
    },
    title: {
      get () {
        return this.group.title
      },
      set (val) {
        this.group.title = val
      }
    }
  },
  methods: {
    add () {},
    close () {
      this.$emit('close')
    }
  },
  components: {
    FileUpload
  }
}
</script>

<style src="@/assets/scss/components/popup-scoped.scss" lang="scss" scoped></style>
