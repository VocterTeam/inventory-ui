import Vue from 'vue'
import Home from '@/components/pages/Home'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('sets the correct default data', () => {
    expect(Home.data).to.be.a('function')
    const defaultData = Home.data()
    expect(defaultData.msg).to.equal('Welcome to Your Vue.js App')
  })
})
