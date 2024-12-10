import { 
    ShoppingCart, 
    BarChart3, 
    Smartphone, 
    CreditCard,
    Box,
    Users
  } from "lucide-react";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
  
  const features = [
    {
      icon: ShoppingCart,
      title: "Easy Store Setup",
      description: "Launch your store quickly with our intuitive setup wizard and customizable templates."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Get real-time insights into your sales, customers, and inventory with advanced analytics."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Reach customers on any device with our responsive and mobile-optimized storefronts."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Accept payments globally with our secure payment gateway integration and fraud protection."
    },
    {
      icon: Box,
      title: "Inventory Management",
      description: "Track and manage your inventory in real-time across multiple locations and channels."
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build lasting relationships with customer profiles, segmentation, and marketing tools."
    }
  ];
  
const Features=()=> {
    return (
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-background to-cyan-950/20"></div>
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground">
              Powerful features to help you manage and grow your online business effectively.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group relative bg-secondary/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative">
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default Features