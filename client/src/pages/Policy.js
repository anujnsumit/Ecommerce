import React from 'react'
// Component
import WithLayout from '../component/Layout/Layout'

const Policy = () => {
  return (
    <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="privacypolicy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
  )
}

export default WithLayout(Policy,"Policy")