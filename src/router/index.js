/**
 * Router configuration
 */

import Vue from 'vue'
import Router from 'vue-router'
import Orders from '@/components/orders//Orders'
import Groups from '@/components/groups/Groups'
import Products from '@/components/products/Products'
import Users from '@/components/users/Users'
import Settings from '@/components/settings/Settings'
import ProductAdd from '@/components/ProductAdd/ProductAdd'
import Error from '@/components/pages/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'orders',
      component: Orders
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/error',
      component: Error
    },
    {
      path: '/orders/:orderId/products/add',
      props: true,
      name: 'orders-add',
      component: ProductAdd
    },
    {path: '*', redirect: '/error'}
  ]
})
