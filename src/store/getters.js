export const orders = state => state.orders
export const users = state => state.users
export const groups = state => state.groups
export const products = state => state.products
export const categories = state => state.categories
export const specifications = state => state.specifications
export const currencies = state => state.currencies
export const statuses = state => state.statuses

export const entityFullDateConfig = {
  day: 'numeric',
  month: 'long'
}

// date
export const getEntityFullDate = (state, getters) => (date, local, separator) => date.toLocaleString(local, entityFullDateConfig).replace(' ', separator) + separator + date.getFullYear()
export const getEntityShortDate = (state, getters) => (date, separator) => date.getMonth() + 1 + separator + date.getDate()
// END:date

// products
export const getProductsInOrder = (state, getters) => (id) => state.orders.find(order => order.id === id).products.filter(product => product.order === id)
export const getProductsInSpecification = (state, getters) => (title) => state.products.filter(product => product.type === title)
export const getProductsSerialNumbers = (state, getters) => (id) => state.products.filter(product => product.id !== id).map(product => product.serialNumber)
export const getProduct = (state, getters) => (id) => state.products.find(product => product.id === id)
export const getProductPrice = (state, getters) => (id, isUSD) => getters.getProduct(id).price.find(priceItem => isUSD === true ? priceItem.symbol === 'USD' : priceItem.symbol !== 'USD')
export const getProductStatuses = (state, getters) => (id) => getters.getProduct(id).statuses
export const getProductTitles = (state, getters) => state.products.map(product => product.specification)
// export const getProductCurrentStatus = (state, getters) => (id) => getters.getProduct(id).statuses.reduce((prev, current) => prev.date > current.date ? prev : current, 0)
export const getProductOrder = (state, getters) => (id) => state.orders.filter(order => order.id === id).find(orderItem => orderItem)
export const getProductGroup = (state, getters) => (id) => state.groups.filter(group => group.id === id).find(groupItem => groupItem)
export const getProductUser = (state, getters) => (id) => state.users.filter(user => user.id === id).find(userItem => userItem)
// END:products

// orders
export const getOrderTitles = (state, getters) => state.orders.map(order => order.title)
export const getOrderTitle = (state, getters) => (id) => state.orders.find(order => order.id === id).title
export const getOrderPrice = (state, getters) => (id, isUSD) => getters.getProductsInOrder(id).map(product => product.price.find(priceItem => isUSD === true ? priceItem.symbol === 'USD' : priceItem.symbol !== 'USD'))
export const getOrderDefaultPriceSymbol = (state, getters) => (id) => state.orders.find(order => order.id === id).products.find(product => product).price.find(priceItem => priceItem.symbol !== 'USD').symbol
// END:orders

// groups
export const getGroup = (state, getters) => (id) => state.groups.find(group => group.id === id)
export const getGroupTitles = (state, getters) => state.groups.map(group => group.title)
export const getGroupTitle = (state, getters) => (id) => getters.getGroup(id).title
export const getGroupProducts = (state, getters) => (id) => state.groups.find(group => group.id === id).products.filter(product => product.group === id)
export const getGroupUsers = (state, getters) => (id) => state.groups.find(group => group.id === id).users
export const getGroupPrice = (state, getters) => (id, isUSD) => getters.getGroupProducts(id).map(product => product.price.find(priceItem => isUSD === true ? priceItem.symbol === 'USD' : priceItem.symbol !== 'USD'))
// END:groups

// statuses
export const getAllStatuses = (state, getters) => (isDefault) => state.statuses.filter(status => status.isDefault === isDefault)
export const getStatusesTitles = (state, getters) => state.statuses.map(status => status.title)
// END:statuses

// currencies
export const getCurrenciesSymbols = (state, getters) => state.currencies.map(currency => currency.symbol)
// END:currencies

// categories
export const getCategorySpecifications = (state, getters) => (title) => state.specifications.filter(specification => specification.title === title)
export const getCategoriesTitles = (state, getters) => state.categories.map(category => category)
export const getCategorySpecificationsTitles = (state, getters) => (title) => getters.getCategorySpecifications(title).map(specification => specification.type)
// END:categories

// specifications
export const getSpecificationTitles = (state, getters) => state.specifications.map(specification => specification.type)
// END:specifications

// users
export const getUser = (state, getters) => (id) => state.users.find(user => user.id === id)
export const getUserTitle = (state, getters) => (id) => getters.getUser(id).name
export const getUserGroups = (state, getters) => (id) => getters.getUser(id).groups.filter(group => group.id === id)
export const getUserProducts = (state, getters) => (id) => state.users.find(user => user.id === id).products
// END:users
