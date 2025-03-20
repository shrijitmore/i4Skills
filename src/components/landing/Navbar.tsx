import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

interface NavbarProps {
  onSectionClick?: (section: string) => void;
}

const Navbar = ({ onSectionClick = () => {} }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onSectionClick(section);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.div
              className="text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>
                <img src="/logo.png" alt="Logo"/>
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", section: "hero" },
              { name: "Courses", section: "courses" },
              { name: "Virtual Lab", section: "features" },
              { name: "Platform Features", section: "assistant" },
              { name: "Testimonials", section: "testimonials" },
              { name: "About", section: "about" },
              { name: "Contact", section: "contact" },
            ].map((item) => (
              <motion.button
                key={item.section}
                className={`text-sm font-medium hover:text-indigo-500 transition-colors ${isScrolled ? "text-slate-700" : "text-white"}`}
                onClick={() => handleNavClick(item.section)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className={`${isScrolled ? "bg-indigo-600 hover:bg-indigo-700 text-white" : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"}`}
              onClick={() => window.location.href = "http://localhost/login/signup.php"}
            >
              Sign Up Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-slate-900" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-3">
            {[
              { name: "Home", section: "hero" },
              { name: "Courses", section: "courses" },
              { name: "Features", section: "features" },
              { name: "AI Assistant", section: "assistant" },
              { name: "Testimonials", section: "testimonials" },
              { name: "About", section: "about" },
              { name: "Contact", section: "contact" },
            ].map((item) => (
              <button
                key={item.section}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
                onClick={() => handleNavClick(item.section)}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  console.log("Button clicked!");
                  window.location.href = "http://localhost/login/signup.php";
                }}
              >
                Sign Up Free
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
