import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Reset animations when navigating to homepage
    if (location.pathname === "/") {
      setAnimationKey((prev) => prev + 1);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <AnimatedSection key={`featured-${animationKey}`} delay={0}>
          <FeaturedListings />
        </AnimatedSection>
        <AnimatedSection key={`why-choose-${animationKey}`} delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection key={`testimonials-${animationKey}`} delay={200}>
          <Testimonials />
        </AnimatedSection>
      </main>
      <AnimatedSection key={`footer-${animationKey}`} delay={300}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
