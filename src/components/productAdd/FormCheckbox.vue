<template>
	<div class="form-element form-checkgroup-wrap" :class="{active: value}">
      <input v-model="isChecked" :id="id" type="checkbox" class="form-checkgroup-wrap__input" @change="onChange" />
      <label :for="id" class="form-label form-label--checkgroup">
        {{label}}:
        <!-- form-checkgroup -->
        <span class="form-checkgroup form-field">
          <span class="form-checkgroup__val" v-for="(option, index) in options">{{option}}</span>
        </span>
        <!-- END:form-checkgroup -->
      </label>
    </div>
</template>

<script>
export default {
  name: 'form-checkbox',
  data () {
    return {
      isChecked: true
    }
  },
  props: {
    id: String,
    value: null,
    label: String,
    options: {
      type: Array,
      default: []
    }
  },
  methods: {
    onChange () {
      this.$emit('checkboxChanged', this.isChecked)
    }
  }
}
</script>
