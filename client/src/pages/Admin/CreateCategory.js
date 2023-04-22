import React from 'react'
import WithLayout from '../../component/Layout/Layout';
import AdminMenu from '../../component/Layout/AdminMenu';

const CreateCategory = () => {
  return (
    <div className="container-fluid m-3 p-3">
    <div className='row'>
        <div className='col-md-3'><AdminMenu/></div>
        <div className='col-md-9'>
          <h1>Create Category</h1> 
        </div>
    </div>
    </div>
  )
}

export default WithLayout(CreateCategory);