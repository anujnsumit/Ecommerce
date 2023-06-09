import React from 'react'
import WithLayout from '../../component/Layout/Layout';
import AdminMenu from '../../component/Layout/AdminMenu';

const Users = () => {
  return (
    <div className="container-fluid m-3 p-3">
    <div className='row'>
        <div className='col-md-3'><AdminMenu/></div>
        <div className='col-md-9'>
            All users
        </div>
    </div>
    </div>
  )
}

export default WithLayout(Users);