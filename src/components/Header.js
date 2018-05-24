import React from 'react'

const Header = () => (
  <div className="page-header">
    <div className="container-fluid">
      <div className="pull-right">
        <a href="#" className="btn btn-danger">
          <i className="fa fa-reply"></i> ยกเลิก
        </a>
      </div>

      <h1>คำสั่งซื้อ</h1>
      <ul className="breadcrumb">
        <li>
          <a href="#">หน้าแรก</a>
        </li>
        <li>
          <a href="#">คำสั่งซื้อ</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Header