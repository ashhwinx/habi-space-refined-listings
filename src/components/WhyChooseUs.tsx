import { Card, CardContent } from "@/components/ui/card";
import { Shield, Star, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "15+ years of experience in luxury real estate with a proven track record of successful transactions.",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "White-glove service with dedicated agents who understand the nuances of luxury property markets.",
  },
  {
    icon: Users,
    title: "Exclusive Network",
    description: "Access to off-market properties and exclusive listings through our extensive network of partners.",
  },
  {
    icon: Clock,
    title: "Concierge Support",
    description: "24/7 support throughout your property journey, from initial search to final closing.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Why Choose <span className="font-medium text-primary">HabiSpace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled service in luxury real estate with our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-border hover:shadow-soft transition-all duration-500 ease-elegant group hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "slideUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;