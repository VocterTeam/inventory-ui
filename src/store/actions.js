import api from '../api'

// GET orders
export const getOrders = ({ commit }, payload) => {
  const urlEnd = '/orders'
  const type = 'post'
  api.requestOrders(urlEnd, type, payload)
    .then((res) => {
      commit('setOrders', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// GET statuses
export const getStatuses = ({ commit }, payload) => {
  const urlEnd = '/statuses'
  const type = 'post'
  api.requestStatuses(urlEnd, type, payload)
    .then((res) => {
      commit('setStatuses', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// GET currencies
export const getCurrencies = ({ commit }, payload) => {
  const urlEnd = '/currencies'
  const type = 'post'
  api.requestCurrencies(urlEnd, type, payload)
    .then((res) => {
      commit('setCurrencies', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// POST date to server
export const saveOrder = ({ commit }, payload) => {
  const urlEnd = '/orders/add'
  const type = 'post'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      commit('addOrder', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

// DELETE order by id
export const deleteOrder = ({ commit }, payload) => {
  const urlEnd = '/orders/delete'
  const type = 'post'
  api.requestToServer(urlEnd, type, payload)
    .then((res) => {
      commit('deleteOrderById', res.id)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getUsers = ({ commit }, payload) => {
  const urlEnd = '/users'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestUsers(urlEnd, type, payload)
    .then((res) => {
      commit('setUsers', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getGroups = ({ commit }, payload) => {
  const urlEnd = '/groups'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestGroups(urlEnd, type, payload)
    .then((res) => {
      commit('setGroups', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getProducts = ({ commit }, payload) => {
  const urlEnd = '/products'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestProducts(urlEnd, type, payload)
    .then((res) => {
      commit('setProducts', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getSpecifications = ({ commit }, payload) => {
  const urlEnd = '/specifications'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestSpecifications(urlEnd, type, payload)
    .then((res) => {
      commit('setSpecifications', res)
    })
    .catch((err) => {
      console.error(err)
    })
}

export const getCategories = ({ commit }, payload) => {
  const urlEnd = '/categories'
  const type = 'post'
  // replace below method to "requestToServer"
  api.requestCategories(urlEnd, type, payload)
    .then((res) => {
      commit('setCategories', res)
    })
    .catch((err) => {
      console.error(err)
    })
}
