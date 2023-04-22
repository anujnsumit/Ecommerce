import React from 'react'
import WithLayout from '../../component/Layout/Layout';
import Usermenu from '../../component/Layout/Usermenu';

const Profile = () => {
  return (
    <div className="container-fluid m-3 p-3">
    <div className='row'>
        <div className='col-md-3'><Usermenu/></div>
        <div className='col-md-9'>
          <h1>Profile</h1> 
        </div>
    </div>
    </div>
  )
}

export default WithLayout(Profile);