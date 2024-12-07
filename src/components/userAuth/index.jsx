//import React from 'react'

import { Outlet } from "react-router-dom"

const UserAuthentication = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen w-full'>
      <div className='flex items-center justify-center h-[50%] md:h-screen bg-black w-full md:w-[50%]'>
        <h1 className=" text-white text-4xl font-medium text-center">Welcome to ECOMM SHOPPING </h1>
      </div>
      <div className="flex flex-row items-center justify-center h-[50%] md:h-full w-full md:w-[50%]">
        <Outlet/>
      </div>
    </div>
  )
}

export default UserAuthentication
