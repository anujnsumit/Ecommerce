import React from 'react'
import WithLayout from '../../component/Layout/Layout'
import Usermenu from '../../component/Layout/Usermenu'

const Orders = () => {
  return (
    <div className="container-fluid m-3 p-3">
    <div className='row'>
        <div className='col-md-3'><Usermenu/></div>
        <div className='col-md-9'>
          <h1>Order</h1> 
        </div>
    </div>
    </div>
  )
}

export default WithLayout(Orders)