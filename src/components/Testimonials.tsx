import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CEO, TechVentures",
    content: "HabiSpace made finding our dream home effortless. Their attention to detail and understanding of our needs was exceptional. The entire process was smooth and professional.",
    rating: 5,
    location: "Beverly Hills, CA",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Investment Banker",
    content: "Outstanding service from start to finish. The team's expertise in luxury properties and market knowledge helped us secure an incredible penthouse in Manhattan.",
    rating: 5,
    location: "Manhattan, NY",
  },
  {
    id: 3,
    name: "Emily Thompson",
    title: "Art Collector",
    content: "The personalized service and exclusive access to off-market properties set HabiSpace apart. They truly understand what luxury living means.",
    rating: 5,
    location: "Miami Beach, FL",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-6 sm:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Client <span className="font-medium text-primary">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from our satisfied clients about their HabiSpace experience.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Card className="border-border shadow-soft">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-foreground mb-8 leading-relaxed font-light italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <div className="font-semibold text-foreground text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-muted-foreground">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="elegant"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="elegant"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;