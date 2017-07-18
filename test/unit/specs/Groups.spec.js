import Vue from 'vue'
import Groups from '@/components/pages/Groups'

describe('Groups.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Groups)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.groups h1').textContent)
      .to.equal('Welcome to groups list')
  })
})
