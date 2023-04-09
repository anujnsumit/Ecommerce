import React from 'react'
import Header from './Header'
import Footer from './Footer'


const WithLayout = (Component,title) => {
    return(props)=>{
  return (
    <div>
       <Header/>
       <Component {...props}/>
       <Footer/>
    </div>
  )
    }
}

export default WithLayout;