import Vue from 'vue'
import Users from '@/components/pages/Users'

describe('Users.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Users)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.users h1').textContent)
      .to.equal('Welcome to users list')
  })
})
