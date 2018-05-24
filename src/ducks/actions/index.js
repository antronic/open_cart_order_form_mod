// Router Actions
export const GO_TO = 'ROUTER/GO_TO'

// Cart Actions
export const ADD_TO_CART = 'CART/ADD_TO_CART'

// Router
export const goTo = (route) => ({
  type: GO_TO,
  route,
})

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
})