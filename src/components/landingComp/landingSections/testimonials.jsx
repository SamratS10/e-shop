import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Founder, Beauty Co.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    content: "E-shop transformed our business. The platform is incredibly easy to use and the support team is amazing. We've seen a 300% increase in sales since switching."
  },
  {
    name: "Michael Chen",
    role: "CEO, Tech Gadgets",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    content: "The analytics and inventory management features are game-changing. It's like having a whole team of experts working for you 24/7."
  },
  {
    name: "Emma Davis",
    role: "Owner, Fashion Boutique",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    content: "I was able to launch my store in just one day. The templates are beautiful and the customization options are endless. Highly recommended!"
  }
];

const Testimonials=()=> {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-background to-cyan-950/20" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Loved by Businesses Worldwide</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-secondary/50 backdrop-blur-sm border-2 border-muted hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20 group-hover:ring-primary transition-all">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <Quote className="absolute top-0 left-0 h-6 w-6 text-primary/20 -translate-x-2 -translate-y-2" />
                <p className="text-muted-foreground relative z-10 pt-4">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials