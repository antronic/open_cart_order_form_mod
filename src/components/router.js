import React from 'react'

import CustomerPage from '../pages/customer_page'
import CartPage from '../pages/cart_page'

class RouterPresenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              สร้างคำสั่งซื้อ {this.props.route}
            </h3>
          </div>

          <div className="panel-body">
            <form className="form-horizontal">
              <ul id="order" className="nav nav-tabs nav-justified">
                <li className="disabled active">
                  <a onClick={() => this.props.onTabClick('/')} href="#tab-customer" data-toggle="tab">1. รายละเอียดลูกค้า</a>
                </li>
                <li className="disabled">
                  <a onClick={() => this.props.onTabClick('/cart')} href="#tab-cart" data-toggle="tab">2. สินค้า</a>
                </li>
                <li className="disabled">
                  <a onClick={() => this.props.onTabClick('/shipping')} href="#tab-shipping" data-toggle="tab">3. รายละเอียดการจัดส่ง</a>
                </li>
                <li className="disabled">
                  <a onClick={() => this.props.onTabClick('/total')} href="#tab-total" data-toggle="tab">4. ยอดรวม</a>
                </li>
              </ul>

              <Router
                route={this.props.route}
                routes={{
                  '/customer': <CustomerPage />,
                  '/cart': <CartPage />,
                  '/shipping': <h1>Shipping</h1>,
                  '/total': <h1>Total</h1>,
                }} />

            </form>
          </div>
        </div>
      </div>
    )
  }
}

const Router = ({ route, routes }) => {
  if (Object.keys(routes).indexOf(route) >= 0) {
    return (routes[route])
  } else {
    return (
      <h1>404 Not found</h1>
    )
  }
}

export default RouterPresenter