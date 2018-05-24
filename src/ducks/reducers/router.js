import { GO_TO } from '../actions'

const initialState = {
  route: '/customer',
}

export default ((state = initialState, action) => {

  switch (action.type) {
    case GO_TO: {
      return (
        {
          route: action.route,
        }
      )
    }
    default:
      return state
  }

})