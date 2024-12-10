import { ShoppingBag } from "lucide-react";

const Logo = ()=> {
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold gradient-text">e-shop</span>
    </div>
  );
}

export default Logo 
