import Hero from "@/components/Hero";
import FeaturedListings from "@/components/FeaturedListings";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <AnimatedSection delay={0}>
          <FeaturedListings />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <WhyChooseUs />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Testimonials />
        </AnimatedSection>
      </main>
      <AnimatedSection delay={300}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
