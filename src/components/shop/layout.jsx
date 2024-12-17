import React from 'react'
import { Outlet } from 'react-router-dom'
import ShopHeader from './shopHeader'

const ShopLayout = () => {
  return (
    <div>
      <div>
        <ShopHeader/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default ShopLayout
