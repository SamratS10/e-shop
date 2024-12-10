import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = ()=> {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="hero-gradient" />
      <div className="container relative">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-accent border border-accent/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">New Feature: AI-Powered Analytics</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Transform Your Business with Our{" "}
            <span className="gradient-text">E-commerce Solution</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Launch your online store in minutes with our powerful e-commerce platform. 
            Get everything you need to sell online and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="glow-effect gap-2 bg-primary hover:bg-primary/90">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary/50">
              Book a Demo
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">10k+</span>
              <span className="text-sm text-muted-foreground">Products</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">99.9%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold gradient-text">24/7</span>
              <span className="text-sm text-muted-foreground">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero