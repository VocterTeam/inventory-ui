import Vue from 'vue'
import Error from '@/components/pages/Error'

describe('Error.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Error)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.error h1').textContent)
      .to.equal('Error')
  })
})
