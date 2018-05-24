import {
  ADD_TO_CART,
} from '../actions'

const initialState = {
  products: [],
  total: 0,
  discount: 0,
  step_discount: 0,
  normal_discount: 0,
}

export default ((state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART: {
      return ({
        products: [...state.products, action.product]
      })
    }
    default:
      return state
  }

})