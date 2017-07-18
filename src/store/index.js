/**
 * App state storage
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
Vue.use(Vuex)
const state = {
  orders: [],
  groups: [],
  products: [],
  statuses: [],
  currencies: [],
  users: [],
  categories: [],
  specifications: [],
  statusHistoriTooltipStatus: {
    isHiden: true,
    left: 0,
    top: 0
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
