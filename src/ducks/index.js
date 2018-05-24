import {
  applyMiddleware,
  compose,
  createStore,
  combineReducers,
} from 'redux'
import createSagaMiddleware from 'redux-saga'

import { saga } from './reducers/saga'

import router from './reducers/router'
import cart from './reducers/cart'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  router,
  cart,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create Redux Store
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

// run Saga
sagaMiddleware.run(saga)

export default store

