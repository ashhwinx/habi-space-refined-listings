import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  const [searchType, setSearchType] = useState("buy");
  const [location, setLocation] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
          Find Your Perfect
          <span className="block font-medium text-primary">Luxury Home</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
          Discover exceptional properties in the world's most desirable locations with our curated collection of premium real estate.
        </p>

        {/* Search Bar */}
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-elegant border border-border/50 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
            {/* Buy/Rent Toggle */}
            <div className="w-full sm:flex-shrink-0 sm:w-auto">
              <label className="text-sm font-medium text-foreground mb-2 block">Type</label>
              <Select value={searchType} onValueChange={setSearchType}>
                <SelectTrigger className="w-full sm:w-[120px] h-11 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">Buy</SelectItem>
                  <SelectItem value="rent">Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Input */}
            <div className="flex-1 w-full">
              <label className="text-sm font-medium text-foreground mb-2 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Enter city, neighborhood, or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-11 border-border w-full"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-auto">
              <Button variant="premium" size="xl" className="w-full sm:w-auto">
                <Search className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Search Properties</span>
                <span className="sm:hidden">Search</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-primary mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Premium Properties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Expert Agents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-semibold text-primary mb-1 sm:mb-2">15</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;