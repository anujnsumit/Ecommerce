import React from 'react'

const Loading = ({ error }) => {
   if(error){
    return <>Error</>;
   }
  return (
    <div>Loading....</div>
  )
}

export default Loading;