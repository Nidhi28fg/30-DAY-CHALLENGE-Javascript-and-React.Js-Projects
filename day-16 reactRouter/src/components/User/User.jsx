import React from 'react'
import { useParams } from 'react-router-dom' 
// The useParams function is used to get the value of the userid parameter. This parameter is passed in the URL.
//It helps to get dynamic data
function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User
