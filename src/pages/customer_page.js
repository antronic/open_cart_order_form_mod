import React from 'react'

const forms = [
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
]

const page = () => (
  <div className="tab-content">
    <div className="tab-pane active">

      <div className="form-group required">
        <label htmlFor="order-no" className="col-sm-2 control-label">Order Number</label>
        <div className="col-sm-10">
          <input type="text" id="order-no" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="po-no" className="col-sm-2 control-label">PO Number</label>
        <div className="col-sm-10">
          <input type="text" id="po-no" className="form-control" value="FEST20180812000001" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="cus-name" className="col-sm-2 control-label">ชื่อลูกค้า</label>
        <div className="col-sm-10">
          <input type="text" id="cus-name" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="cus-id" className="col-sm-2 control-label">รหัสลูกค้า</label>
        <div className="col-sm-10">
          <input type="text" id="cus-id" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="address" className="col-sm-2 control-label">ที่อยู่</label>
        <div className="col-sm-10">
          <textarea id="adress" className="form-control">
          </textarea>
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="phone-no" className="col-sm-2 control-label">เบอร์โทรศัพท์</label>
        <div className="col-sm-10">
          <input type="text" id="phone-no" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="fax-no" className="col-sm-2 control-label">Fax</label>
        <div className="col-sm-10">
          <input type="text" id="fax-no" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="mobile-no" className="col-sm-2 control-label">มือถือ</label>
        <div className="col-sm-10">
          <input type="text" id="mobile-no" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="tax-no" className="col-sm-2 control-label">เลขประจำตัวผู้เสียภาษี / สาขา</label>
        <div className="col-sm-10">
          <input type="text" id="tax-no" className="form-control" value="01000000000123 / 00001" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="sale-man" className="col-sm-2 control-label">พนักงานขาย</label>
        <div className="col-sm-10">
          <input type="text" id="sale-man" className="form-control" value="2272 สมชาย รักสงบ" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="sale-section" className="col-sm-2 control-label">แผนกขาย</label>
        <div className="col-sm-10">
          <input type="text" id="sale-section" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="price-group" className="col-sm-2 control-label">Price Group</label>
        <div className="col-sm-10">
          <input type="text" id="price-group" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="tax-paper" className="col-sm-2 control-label">ใบกำกับภาษี</label>
        <div className="col-sm-10">
          <input type="text" id="tax-paper" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="order-type" className="col-sm-2 control-label">Order Type</label>
        <div className="col-sm-10">
          <input type="text" id="order-type" className="form-control" />
        </div>
      </div>

      <div className="form-group required">
        <label htmlFor="create-date" className="col-sm-2 control-label">Create Date</label>
        <div className="col-sm-10">
          <input type="date" id="create-date" className="form-control" />
        </div>
      </div>

      <div className="text-right">
        <button className="btn btn-primary">
          <i className="fa fa-arrow-right"></i> ดำเนินการต่อ
        </button>
      </div>

    </div>

  </div>
)

export default page