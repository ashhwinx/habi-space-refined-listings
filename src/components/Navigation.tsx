import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to top on navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-out z-[100] ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/60 shadow-elegant"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
      style={{ position: "fixed" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
            onClick={closeMobileMenu}
          >
            HabiSpace
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/listings"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Properties
            </Link>
            <Link
              to="/agents"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Agents
            </Link>
            <Button variant="premium" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 absolute top-16 left-0 right-0 shadow-elegant transition-all duration-300 ease-elegant z-[101] ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-all duration-300 font-medium py-2 hover:bg-muted/50 rounded-md px-2 -mx-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/listings"
              className="block text-foreground hover:text-primary transition-all duration-300 font-medium py-2 hover:bg-muted/50 rounded-md px-2 -mx-2"
              onClick={closeMobileMenu}
            >
              Properties
            </Link>
            <Link
              to="/agents"
              className="block text-foreground hover:text-primary transition-all duration-300 font-medium py-2 hover:bg-muted/50 rounded-md px-2 -mx-2"
              onClick={closeMobileMenu}
            >
              Agents
            </Link>
            <Button
              variant="premium"
              size="sm"
              className="w-full mt-4"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
