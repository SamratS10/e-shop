//import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Button } from "../ui/button";
import { logout } from "@/store/auth-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AdminHeader = ({setOpen}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate('/'); // Redirect to login page after logout
};
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-gradient-accent border-b sticky top-0 z-50">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <GiHamburgerMenu fontSize={30} />  
      </Button>
      
      <div className="flex flex-1 justify-end">
      <Button className="font-medium text-sm" onClick={handleLogout}>
        <IoLogOut/>
        Logout
      </Button>
      </div>
    </header>
  )
}

export default AdminHeader
