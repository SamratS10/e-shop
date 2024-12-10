import { Button } from "@/components/ui/button";
import  Logo  from "./Logo";
import { Navigation } from "./Navigation";
import { loggedUser } from "@/store/auth-slice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LandingHeader() {
  const user = useSelector(loggedUser)
  console.log(user)
  const navigate = useNavigate()

  const handleBtn = ()=>{
    navigate('/auth/login',{replace:true})
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-2">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-4">
          <Button onClick = {handleBtn}  size="sm" className={`${user ? "hidden" : ""}hover:bg-primary/90`}>Log in</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}