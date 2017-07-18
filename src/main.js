// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Icon from 'vue-awesome/components/Icon'
import Datepicker from 'vuejs-datepicker'
import VueResource from 'vue-resource'
import VeeValidateMessagesRu from 'vee-validate/dist/locale/ru'
import VeeValidate from 'vee-validate'
import VueDefaultValue from 'vue-default-value'
import AppDate from '@/components/common/AppDate'
import Popup from '@/components/common/Popup'
import SuccessPopup from '@/components/common/SuccessPopup'
import EntityPopupBtn from '@/components/common/EntityPopupBtn'
import StatusHistoryTooltip from '@/components/common/StatusHistoryTooltip'

Vue.config.productionTip = false

// directives
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
// END:directives

// config data
Vue.prototype.$appTitle = 'Inventory'
Vue.prototype.$getBiggestValInArr = (arr, propToCompare, propToFind) => arr.reduce((prev, current) => prev[propToCompare] > current[propToCompare] ? prev : current, 0)[propToFind]
// END:config data

Vue.component('datepicker', Datepicker)
Vue.component('icon', Icon)
Vue.component('app-date', AppDate)
Vue.component('popup', Popup)
Vue.component('success-popup', SuccessPopup)
Vue.component('entity-popup-btn', EntityPopupBtn)
Vue.component('status-history-tooltip', StatusHistoryTooltip)

VeeValidate.Validator.addLocale(VeeValidateMessagesRu)
Vue.use(VueResource)
Vue.use(VeeValidate, {
  locale: 'ru'
})
Vue.use(VueDefaultValue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    // console.log('App mounted', this)
  }
})
