//import React from 'react'
import { Outlet } from "react-router-dom"
import AdminHeader from "./header"
import AdminSidebar from "./sidebar"
import { useState } from "react"

const AdminLayout = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
  return (
    <div className="flex min-h-screen w-full relative">
        <AdminSidebar open={openSidebar} setOpen={setOpenSidebar}/>
        <div className="flex flex-1 flex-col relative">
          <AdminHeader setOpen={setOpenSidebar}/>
          <main className="flex flex-1 bg-muted/2">
            <Outlet/>
        </main>
        </div>
    </div>
  )
}

export default AdminLayout