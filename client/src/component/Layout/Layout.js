import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";

const WithLayout = (Component, title) => (props) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="A one stop online store" />
        <meta name="keywords" content="shoping,online,best phone" />
        <meta name="author" content="Sumit Singh" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Component {...props} />
      <Footer />
    </div>
  )
}

export default WithLayout;