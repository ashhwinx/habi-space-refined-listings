import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import agentSarah from "@/assets/agent-sarah.jpg";
import agentMichael from "@/assets/agent-michael.jpg";
import agentElena from "@/assets/agent-elena.jpg";
import agentDavid from "@/assets/agent-david.jpg";
import agentAmanda from "@/assets/agent-amanda.jpg";
import agentRobert from "@/assets/agent-robert.jpg";

const agents = [
  {
    id: 1,
    name: "Sarah Mitchell",
    title: "Senior Luxury Specialist",
    location: "Beverly Hills, CA",
    phone: "+1 (555) 123-4567",
    email: "sarah.mitchell@habispace.com",
    experience: "12 years",
    specialties: ["Luxury Homes", "Investment Properties", "Waterfront"],
    rating: 4.9,
    reviews: 127,
    image: agentSarah,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Executive Real Estate Advisor",
    location: "Manhattan, NY",
    phone: "+1 (555) 234-5678",
    email: "michael.chen@habispace.com",
    experience: "15 years",
    specialties: ["Penthouses", "Commercial", "International"],
    rating: 5.0,
    reviews: 89,
    image: agentMichael,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Luxury Property Consultant",
    location: "Miami Beach, FL",
    phone: "+1 (555) 345-6789",
    email: "elena.rodriguez@habispace.com",
    experience: "9 years",
    specialties: ["Beachfront", "Condominiums", "New Development"],
    rating: 4.8,
    reviews: 156,
    image: agentElena,
  },
  {
    id: 4,
    name: "David Thompson",
    title: "Premium Estate Specialist",
    location: "San Francisco, CA",
    phone: "+1 (555) 456-7890",
    email: "david.thompson@habispace.com",
    experience: "18 years",
    specialties: ["Historic Properties", "Estates", "Tech Executive Homes"],
    rating: 4.9,
    reviews: 203,
    image: agentDavid,
  },
  {
    id: 5,
    name: "Amanda Foster",
    title: "International Luxury Advisor",
    location: "Los Angeles, CA",
    phone: "+1 (555) 567-8901",
    email: "amanda.foster@habispace.com",
    experience: "11 years",
    specialties: ["Celebrity Homes", "Architectural", "Privacy Estates"],
    rating: 4.9,
    reviews: 92,
    image: agentAmanda,
  },
  {
    id: 6,
    name: "Robert Kim",
    title: "Luxury Market Specialist",
    location: "Seattle, WA",
    phone: "+1 (555) 678-9012",
    email: "robert.kim@habispace.com",
    experience: "14 years",
    specialties: ["Waterfront", "Modern Architecture", "Tech Professionals"],
    rating: 4.8,
    reviews: 174,
    image: agentRobert,
  },
];

const Agents = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Header Section */}
        <AnimatedSection animation="fadeIn">
          <section className="py-16 px-6 sm:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-light text-foreground mb-4">
                Meet Our{" "}
                <span className="font-medium text-primary">Expert Agents</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team of experienced luxury real estate professionals is
                dedicated to providing exceptional service and expertise in the
                finest properties.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Agents Grid */}
        <AnimatedSection delay={100}>
          <section className="py-16 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agents.map((agent, index) => (
                  <AnimatedSection
                    key={agent.id}
                    delay={index * 100}
                    className="h-full"
                  >
                    <Card className="group cursor-pointer border-border hover:shadow-elegant transition-all duration-500 ease-elegant hover:-translate-y-1 overflow-hidden h-full">
                      <CardContent className="p-0">
                        {/* Agent Photo */}
                        <div className="relative overflow-hidden">
                          <img
                            src={agent.image}
                            alt={agent.name}
                            className="w-full h-64 object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-6">
                          {/* Agent Info */}
                          <div className="mb-4">
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {agent.name}
                            </h3>
                            <p className="text-primary font-medium mb-2">
                              {agent.title}
                            </p>
                            <div className="flex items-center text-muted-foreground text-sm mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              {agent.location}
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                              <div className="flex items-center mr-2">
                                <Star className="w-4 h-4 text-secondary fill-current" />
                                <span className="text-foreground font-medium ml-1">
                                  {agent.rating}
                                </span>
                              </div>
                              <span className="text-muted-foreground text-sm">
                                ({agent.reviews} reviews)
                              </span>
                            </div>
                          </div>

                          {/* Experience */}
                          <div className="mb-4">
                            <div className="text-sm text-muted-foreground mb-2">
                              <strong className="text-foreground">
                                {agent.experience}
                              </strong>{" "}
                              of experience
                            </div>
                          </div>

                          {/* Specialties */}
                          <div className="mb-6">
                            <div className="text-sm font-medium text-foreground mb-2">
                              Specialties:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {agent.specialties.map((specialty, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {specialty}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Contact Actions */}
                          <div className="space-y-2">
                            <Button variant="premium" className="w-full">
                              <Phone className="w-4 h-4 mr-2" />
                              Call Now
                            </Button>
                            <Button variant="elegant" className="w-full">
                              <Mail className="w-4 h-4 mr-2" />
                              Send Message
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={200}>
          <section className="py-16 px-6 sm:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-light text-foreground mb-4">
                Ready to Start Your{" "}
                <span className="font-medium text-primary">
                  Property Journey?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with one of our expert agents today and discover how we
                can help you find the perfect luxury property.
              </p>
              <Button variant="premium" size="xl">
                Schedule a Consultation
              </Button>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <AnimatedSection delay={300}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Agents;
