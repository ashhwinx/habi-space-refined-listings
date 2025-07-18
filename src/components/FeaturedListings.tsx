import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import luxuryHome1 from "@/assets/luxury-home-1.jpg";
import luxuryInterior1 from "@/assets/luxury-interior-1.jpg";
import luxuryPenthouse1 from "@/assets/luxury-penthouse-1.jpg";

const featuredProperties = [
  {
    id: 1,
    image: luxuryHome1,
    price: "$2,450,000",
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    type: "For Sale",
  },
  {
    id: 2,
    image: luxuryInterior1,
    price: "$8,500/month",
    title: "Downtown Penthouse",
    location: "Manhattan, NY",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    type: "For Rent",
  },
  {
    id: 3,
    image: luxuryPenthouse1,
    price: "$3,200,000",
    title: "Skyline Penthouse",
    location: "Miami Beach, FL",
    beds: 4,
    baths: 3,
    sqft: "3,500",
    type: "For Sale",
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
            Featured <span className="font-medium text-primary">Properties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked luxury properties that exemplify exceptional quality and prime locations.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group cursor-pointer border-border hover:shadow-elegant transition-all duration-500 ease-elegant hover:-translate-y-1 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeIn 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={property.type === "For Sale" ? "default" : "secondary"}
                    className="text-xs font-medium"
                  >
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <div className="text-2xl font-semibold text-primary mb-1">{property.price}</div>
                  <h3 className="text-lg font-medium text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {property.location}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-1" />
                    {property.beds} beds
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-1" />
                    {property.baths} baths
                  </div>
                  <div className="flex items-center">
                    <Maximize className="w-4 h-4 mr-1" />
                    {property.sqft} sqft
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="elegant" size="lg">
            View All Properties
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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

export default FeaturedListings;