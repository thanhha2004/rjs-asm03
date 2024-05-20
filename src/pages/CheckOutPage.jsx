import React from 'react'

function CheckOutPage() {
  return (
    <div className='container mt-3 mb-3'>
      <label className='text-uppercase fs-1 text-start w-100'>Billing Details</label>
      <div className='d-flex gap-3'>
        <div className='d-flex flex-column w-100 text-start'>
          <div className='d-flex flex-column'>
            <label>Full Name</label>
            <input type="text" class="form-control" id="Name" placeholder="Enter your coupon" />
          </div>
          <div className='d-flex flex-column'>
            <label>Email</label>
            <input type="text" class="form-control" id="Email" placeholder="Enter your coupon" />
          </div>
          <div className='d-flex flex-column'>
            <label>Phone Number</label>
            <input type="text" class="form-control" id="Phone" placeholder="Enter your coupon" />
          </div>
          <div className='d-flex flex-column'>
            <label>Address</label>
            <input type="text" class="form-control" id="Address" placeholder="Enter your coupon" />
          </div>
          <button class="btn btn-secondary w-25 w-40 mt-3">Place Order</button>
        </div>
        <div className='bg-light col-4 p-4'>
          <label className='text-uppercase fs-3 text-start w-100'>Your Order</label>
          <div className='d-flex flex-column gap-3 mt-3 border-bottom pb-3'>
          <div className='d-flex justify-content-between'>
            <label>Apple Iphone 11 64GB</label>
            <span>19.779.000 VND</span>
          </div>
          <div className='d-flex justify-content-between'>
            <label>Apple AirPods 3rd gen</label>
            <span>19.779.000 VND</span>
          </div>
          </div>
          <div className='d-flex justify-content-between mt-5'>
            <label>Total</label>
            <span>19.779.000 VND</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutPage