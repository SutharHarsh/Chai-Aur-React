import React, { useId } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center p-10 bg-gray-700 text-white'>
      User: {userid}
    </div>
  )
}

export default User
