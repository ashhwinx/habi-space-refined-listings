import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Maximize, Filter, Search } from "lucide-react";
import luxuryHome1 from "@/assets/luxury-home-1.jpg";
import luxuryInterior1 from "@/assets/luxury-interior-1.jpg";
import luxuryPenthouse1 from "@/assets/luxury-penthouse-1.jpg";

// Extended property data for listings page
const allProperties = [
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
    featured: true,
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
    featured: true,
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
    featured: true,
  },
  {
    id: 4,
    image: luxuryHome1,
    price: "$1,850,000",
    title: "Contemporary Estate",
    location: "Malibu, CA",
    beds: 4,
    baths: 3,
    sqft: "3,800",
    type: "For Sale",
    featured: false,
  },
  {
    id: 5,
    image: luxuryInterior1,
    price: "$6,200/month",
    title: "Luxury Apartment",
    location: "San Francisco, CA",
    beds: 2,
    baths: 2,
    sqft: "1,900",
    type: "For Rent",
    featured: false,
  },
  {
    id: 6,
    image: luxuryPenthouse1,
    price: "$4,100,000",
    title: "Ocean View Villa",
    location: "Newport Beach, CA",
    beds: 6,
    baths: 5,
    sqft: "5,200",
    type: "For Sale",
    featured: false,
  },
];

const Listings = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [filteredProperties, setFilteredProperties] = useState(allProperties);

  const handleFilter = () => {
    let filtered = allProperties;

    if (searchLocation) {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase()),
      );
    }

    if (propertyType !== "all") {
      filtered = filtered.filter((property) =>
        property.type.toLowerCase().includes(propertyType),
      );
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

            <main className="pt-20">
        {/* Header Section */}
        <AnimatedSection animation="fadeIn">
          <section className="py-16 px-6 sm:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
                Luxury{" "}
                <span className="font-medium text-primary">Properties</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our curated collection of exceptional homes in the
                world's most prestigious locations.
              </p>
            </div>

            {/* Filters */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Enter location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Type
                  </label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Price Range
                  </label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-1000000">Under $1M</SelectItem>
                      <SelectItem value="1000000-3000000">$1M - $3M</SelectItem>
                      <SelectItem value="3000000+">Above $3M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleFilter}
                  variant="premium"
                  className="w-full"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 px-6 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground">
                {filteredProperties.length} Properties Found
              </h2>
              <Button variant="elegant" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <Card
                  key={property.id}
                  className="group cursor-pointer border-border hover:shadow-elegant transition-all duration-500 ease-elegant hover:-translate-y-1 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
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
                        variant={
                          property.type === "For Sale" ? "default" : "secondary"
                        }
                        className="text-xs font-medium"
                      >
                        {property.type}
                      </Badge>
                    </div>
                    {property.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <div className="text-2xl font-semibold text-primary mb-1">
                        {property.price}
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {property.title}
                      </h3>
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

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="elegant" size="lg">
                Load More Properties
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

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
    </div>
  );
};

export default Listings;