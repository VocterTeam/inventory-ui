import Vue from 'vue'
// import Vuex from 'vuex'
import Orders from '@/components/pages/Orders'
// import getters from '@/store/getters'
// import actions from '@/store/actions'
import store from '@/store/'

describe('Orders.vue', () => {
  it('should have orders', (done) => {
    // const options = {
    //   state: {
    //     orders: []
    //   },
    //   // mutations,
    //   actions,
    //   getters
    // }
    // const mockStore = new Vuex.Store(options)

    const vm = new Vue({
      template: '<div><test></test></div>',
      store,
      components: {
        'test': Orders
      }
    }).$mount()
    Vue.nextTick()
      .then(() => {
        expect(vm.$children[0].orders).to.be.a('array')
        done()
      })
      .catch(done)
  })
})
