import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <AnimatedSection delay={100}>
          <FeaturedListings />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <Testimonials />
        </AnimatedSection>
      </main>
      <AnimatedSection delay={400}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
