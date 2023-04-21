import React from 'react'
import WithLayout from '../component/Layout/Layout';
import {useAuth} from '../context/auth';

const Home = () => {
  const [auth,setAuth]=useAuth();
  return (
    <main style={{minHeight:"70vh"}}>Home</main>
  )
}

export default WithLayout(Home,"Home");