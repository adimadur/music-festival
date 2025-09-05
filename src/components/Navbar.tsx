import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Music } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Lineup", path: "/lineup" },
    { name: "Schedule", path: "/schedule" },
    { name: "Tickets", path: "/tickets" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-primary"
            >
              <Music className="h-8 w-8" />
              <span className="hidden sm:inline">Music Festival</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary text-white hover:bg-primary-600">
              <Link to="/tickets">Get Tickets</Link>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-lg font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-primary text-white hover:bg-primary-600"
            >
              <Link to="/tickets" onClick={() => setIsOpen(false)}>
                Get Tickets
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;