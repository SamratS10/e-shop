//import React from 'react'
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <MdOutlineProductionQuantityLimits />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/orders",
    icon: <SiTicktick />,
  },
];

function MenuItems({ setOpen,setActive,active }) {
  const navigate = useNavigate();
  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
            setActive(menuItem.label)
          }}
          className={`flex cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground ${menuItem.label===active ? "bg-slate-300" : ""}`}
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();
  const[active,setActive] = useState("Dashboard")
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <SiGoogleanalytics size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => {
            navigate("/admin/dashboard")
            setActive("Dashboard")
          }}
          className="flex cursor-pointer items-center gap-2"
        >
          <SiGoogleanalytics size={30} />
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems active={active} setActive={setActive} />
      </aside>
    </Fragment>
  );
}

export default AdminSideBar;
// const AdminSidebar = () => {
//   return (
//     <div className="hidden lg:block flex flex-col gap-2 border-r-2 p-3">
//       <h1>Admin side bar</h1>
//       <p>hello</p>
//       <p>Dashbaord</p>
//       <p>Product</p>
//       <p>Orders</p>
//     </div>
//   )
// }

// export default AdminSidebar