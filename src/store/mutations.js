// Order mutators
export const setOrders = (state, orders) => { state.orders = orders }
export const addOrder = (state, newOrder) => { state.orders.push(newOrder) }
export const deleteOrderById = (state, id) => { state.orders = state.orders.filters(order => order.id === id) }

// Product mutators
export const setProducts = (state, products) => { state.products = products }

// Users mutators
export const setUsers = (state, users) => { state.users = users }

// Statuses mutators
export const setStatuses = (state, statuses) => { state.statuses = statuses }

// Currencies mutators
export const setCurrencies = (state, currencies) => { state.currencies = currencies }

// Groups mutators
export const setGroups = (state, groups) => { state.groups = groups }

// Categories mutators
export const setCategories = (state, categories) => { state.categories = categories }

// Specifications mutators
export const setSpecifications = (state, specifications) => { state.specifications = specifications }
