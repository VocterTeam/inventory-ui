/**
 * Mixins for common popups
 */

export default {
  data () {
    return {
      isPopupOpened: false,
      isAddPopup: false,
      isDeletePopup: false,
      isSuccessPopup: false
    }
  },
  methods: {
    openAddPopup () {
      this.closeAllPopup()
      this.isPopupOpened = true
      this.isAddPopup = true
    },
    deleteOrder (order) {
      this.closeAllPopup()
      this.isPopupOpened = true
      this.isDeletePopup = true
      this.orderForDeleting = order
    },
    confirmDeleteOrder () {
      this.closeAllPopup()
      this.isPopupOpened = true
      this.isSuccessPopup = true
    },
    closeAllPopup () {
      this.isPopupOpened = false
      this.isAddPopup = false
      this.isDeletePopup = false
      this.isSuccessPopup = false
    }
  }
}
