import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colgroup: [
        '1%',
        '5%',
        '23%',
        '10%',
        '10%',
        '4%',
        '5%',
        '7%',
        '5%',
        '5%',
        '10%',
      ],
      head: [
        'ลำดับ', 'ชื่อย่อสินค้า', 'ชื่อสินค้า', 'รหัสสินค้า', 'Plant', 'จำนวน', 'หน่วย', 'ราคาต่อหน่วย', 'มูลค่ารวม', 'รายการแถม', '',
      ],
    }
  }

  render() {
    return (
      <table className="table table-bordered table-striped">
        <colgroup>
          {
            this.state.colgroup.map((size, i) => (
              <col key={ i } style={{
                width: size,
              }}/>
            ))
          }
        </colgroup>
        <thead>
          <tr>
            {
              this.state.head.map((col, i) => (
                <th key={i}>{ col }</th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            this.props.body.map((row, i) => (
              <tr key={i}>
                {
                  Object.keys(row).map((key, j) => (
                    <td key={j}>{ row[key] }</td>
                  ))
                }
              </tr>
            ))
          }

        </tbody>
      </table>
    )
  }

}

Table.defaultProps = {
  body: [],
}

// Discount Table

const DiscountTable = (props) => (
  <table className="table table-bordered">
    <tbody>

      <tr className="text-center">
        <td>Normal Discount</td>
        <td>10.00%</td>
      </tr>

      <tr className="text-center">
        <td>Step Discount</td>
        <td>5.00%</td>
      </tr>

      <tr className="text-center">
        <td>Special Discount</td>
        <td>2.00%</td>
      </tr>

      <tr className="text-center">
        <td>ค่าจัดส่ง (บาท)</td>
        <td>2.00%</td>
      </tr>

      <tr className="text-center">
        <td>ส่วนลด Coupon (บาท)</td>
        <td>2.00%</td>
      </tr>

      <tr className="text-center">
        <td>ราคารวมค่าจัดส่ง (บาท)</td>
        <td>2.00%</td>
      </tr>

      <tr className="text-center">
        <td>ภาษีมูลค่าเพิ่ม  (บาท)</td>
        <td>{ props.heading.tax.str }</td>
      </tr>

      <tr className="text-center">
        <td>รวมสุทธิ  (บาท)</td>
        <td>{ 0 }</td>
      </tr>

    </tbody>
  </table>
)

DiscountTable.defaultProps = {
  heading: {
    tax: {
      value: 0.07,
      str: '7%',
    }
  }

}

// Cart Page
class CartPage extends Component {
  constructor() {
    super()
    this.state = {
      tableProducts: [],
    }
  }

  formatData() {
    const cart = []
    this.props.cart.products.forEach(({
      name,
      product_id,
      option,
      price,
      total,
      quantity,
      model,
      free = false,
    }, index) => {
      let prod_options = {
        value: '',
      }

      if (!option === false &&
        option.length > 0 &&
        !(option[0].value) === false) {
        prod_options.value = option[0].value
      }

      const normalized = {
        index: index + 1,
        prod_id: model,
        name,
        product_id,
        plant: '-',
        quantity,
        option: prod_options.value,
        price,
        total,
        free: !free ? '-' : 'แภม',
        operation: '',
      }

      cart.push(normalized)
    })

    this.setState({
      tableProducts: cart,
    })
  }

  componentDidMount() {
    this.formatData()
  }

  render() {
    return (
      <div className="tab-content">
        <div className="tab-pane active">

          <Table body={ this.state.tableProducts } />

          <div className="col-xs-6 col-xs-offset-6 col-sm-3 col-sm-offset-9">
            <div className="row">
              <DiscountTable/>
            </div>
          </div>

          <div className="col-xs-12">

          </div>

          <div className="text-right">
            <button className="btn btn-primary">
              <i className="fa fa-arrow-right"></i> ดำเนินการต่อ
            </button>
          </div>

        </div>

      </div>
    )
  }
}

CartPage.defaultProps = {
  cart: {
    products: [
      JSON.parse('{"cart_id":"216","product_id":"53","name":"กล่องกระดาษเฟสท์ 600 มล.","model":"PB004","option":[{"product_option_id":"249","product_option_value_id":"61","name":"หน่วย","value":"แพ็ค","type":"select"}],"quantity":"1","stock":true,"shipping":"1","price":"85.00 บาท","total":"85.00 บาท","reward":0}'),
    ],
  },
}

export default CartPage

/*
"{"cart_id":"216","product_id":"53","name":"กล่องกระดาษเฟสท์ 600 มล.","model":"PB004","option":[{"product_option_id":"249","product_option_value_id":"61","name":"หน่วย","value":"แพ็ค","type":"select"}],"quantity":"1","stock":true,"shipping":"1","price":"85.00 บาท","total":"85.00 บาท","reward":0}"
*/