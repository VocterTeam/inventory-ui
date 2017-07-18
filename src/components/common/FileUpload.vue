<template>
  <div class="file-upload">
    <input type="file" id="input-file" name="fileUpload" @change="onFileChange" data-vv-as='"Изображение"' v-validate.reject="veeValidateFileUploadRules" class="input-upload"/>
    <label v-if="!isFileUploaded" for="input-file" class="upload-label">
      <div class="icon-upload">
        <icon name="cloud-upload" />
      </div>
      <span class="upload-label__text">загрузите фото</span>
    </label>
    <button v-if="isFileUploaded" type="button" @click.stop="close" class="close-btn close-btn--popup">
      <icon name="times" class="close-btn__sign" />
    </button>
    <img v-if="isFileUploaded" src="#" alt="file-preview" id="file-preview" class="file-preview" />
    <div v-if="!isFileUploaded" class="upload-description">
      <p>Можете добавлять фото <br /> размером до 20 Мб, <br /> форматы <br /> png, jpeg</p>
    </div>
    <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
      <span v-if="errors.has('fileUpload')" class="form-errors">{{ errors.first('fileUpload') }}</span>
    </transition>
  </div>
</template>

<script>
import 'vue-awesome/icons/cloud-upload'

export default {
  data () {
    return {
      isFileUploaded: false
    }
  },
  computed: {
    veeValidateFileUploadRules () {
      return {
        required: true,
        mimes: 'image/*'
      }
    }
  },
  methods: {
    onFileChange: function () {
      var input = document.getElementById('input-file')
      if (input.files && input.files[0] && input.files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
        this.isFileUploaded = true
        var reader = new FileReader()
        reader.onload = function (e) {
          document.getElementById('file-preview').setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    close: function () {
      this.isFileUploaded = false
    }
  }
}
</script>

