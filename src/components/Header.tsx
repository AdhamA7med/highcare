import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "hero", label: "الرئيسية" },
    { id: "services", label: "خدماتنا" },
    { id: "about", label: "عن المؤسسة" },
    { id: "testimonials", label: "آراء العملاء" },
    { id: "contact", label: "تواصل معنا" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              High Care
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-semibold"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={() =>
                window.open("https://wa.me/201000211522", "_blank")
              }
              className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <Phone className="ml-2 h-4 w-4" />
              اتصل بنا
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-right text-foreground hover:text-primary transition-colors duration-300 font-semibold py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() =>
                  window.open("https://wa.me/201000211522", "_blank")
                }
                className="bg-primary hover:bg-primary-dark text-primary-foreground mt-2"
              >
                <Phone className="ml-2 h-4 w-4" />
                اتصل بنا
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
