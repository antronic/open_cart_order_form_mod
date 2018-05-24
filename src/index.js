import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './ducks'

import Header from './components/Header'
import Router from './containers/router_container'

const AppComp = () => (
  <Provider store={store}>
    <div className="row">
      <Header/>
      <Router/>
    </div>
  </Provider>
)

const func = () => {
  'use strict'

  const app = document.getElementById('order-form-mod-app')

  ReactDOM.render(<AppComp />, app)
}

window.addEventListener('load', func)