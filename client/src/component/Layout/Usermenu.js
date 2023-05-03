import React from 'react'
import { NavLink } from 'react-router-dom'

const Usermenu = () => {
  return (
    <div className="text-center">
    <h4>Dashboard</h4>
      <div className="list-group">
        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</NavLink>
        <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</NavLink>
      </div>
    </div>  
  )
}

export default Usermenu;