import { Button } from "@/components/ui/button";
import  Logo  from "./Logo";
import { Navigation } from "./Navigation";

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hover:text-primary">Log in</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}