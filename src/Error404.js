import React from 'react'

const Error404 = () => {
  return (
    <div className='pt-[100px] flex max-w-2xl mx-auto justify-around items-center'>
       
        <img className='w-[300px] mx-auto' src="./images/404.png" alt="" />
        <div className='w-[10px] bg-[#FFAD00] h-[150px] mx-4 ' ></div>
        <h1 className='text-[#333333] font-bold text-2xl'>The page you are trying to request doesn't exist.</h1>
    </div>
  )
}

export default Error404