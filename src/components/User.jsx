import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {
    const {userId} = useParams()
  return (
    <div className='p-4 bg-gray-700 text-center font-bold text-white text-3xl'>User:{userId}</div>
  )
}
