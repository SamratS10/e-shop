import React from 'react'
import { Outlet } from 'react-router-dom'

const ShopLayout = () => {
  return (
    <div>
      <h1>shop layout</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default ShopLayout
