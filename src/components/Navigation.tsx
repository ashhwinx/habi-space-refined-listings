import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/listings" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Properties
            </Link>
            <Link to="/agents" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
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
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 absolute top-16 left-0 right-0 shadow-elegant">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/listings" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Properties
              </Link>
              <Link 
                to="/agents" 
                className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={closeMobileMenu}
              >
                Agents
              </Link>
              <Button variant="premium" size="sm" className="w-full mt-4" onClick={closeMobileMenu}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;