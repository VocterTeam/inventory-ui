/**
 * Mixins for forms
 */

export default {
  data () {
    return {
      activeFormName: 'product'
    }
  },
  methods: {
    openNewForm (form) {
      this.activeFormName = form
    }
  }
}
