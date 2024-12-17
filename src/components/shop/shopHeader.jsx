import { HousePlug, Menu, ShoppingCart, UserCog } from "lucide-react"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { menuItems } from "../common"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { useSelector } from "react-redux"
import { loggedUser } from "@/store/auth-slice"


const MenuItems = ()=>{
    return(
        <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            {
                menuItems.map((each)=><Link key={each.id} to={each.path} className="text-sm font-medium">{each.label}</Link>)
            }
        </nav>
    )
}

const HeaderRightContent = ()=>{
    const user = useSelector(loggedUser)
    console.log(user,"user in header")
    return(
        <div className="flex lg:items-center lg:flex-row flex-col gap-4">
            <Button variant="outline" size="icon" >
            <ShoppingCart className="h-6 w-6"/>
            <span className=" sr-only">User Cart</span>
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar>
                        <AvatarFallback className="bg-black text-white font-extralight">
                            {user?.name[0].toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" className="w-56">
                    <DropdownMenuLabel>
                        Logged in as {user.name}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <UserCog className="mr-2 h-4 w-4"/>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}


const ShopHeader = ()=>{
    return(
        <header className="sticky top-0 z-40 w-full border-b bg-background ">
            <div className=" flex h-16  items-center justify-between px-4 md:px-6">
                <Link to="/shop/home">
                <div className=" flex items-center gap-1">
                <HousePlug className="h-6 w-6" size={35}/>
                <span className=" font-extrabold text-primary text-2xl">E-SHOP</span>
                </div>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">toggle header menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs">
                        <MenuItems/>
                    </SheetContent>
                </Sheet>
                <div className="hidden lg:block">
                    <MenuItems/>
                </div>
                <HeaderRightContent/>
            </div>
        </header>
    )
}

export default ShopHeader