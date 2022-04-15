import React from 'react'
import { RiEmotionSadLine } from 'react-icons/ri'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <RiEmotionSadLine  size={202}  />
        <h1 className='text-6xl font-thin'>404 NotFound</h1>
    </div>
  )
}

export default NotFoundPage