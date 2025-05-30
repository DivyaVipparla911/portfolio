
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  sections: { id: string; title: string }[];
}

const Navbar = ({ sections }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(scrollPosition > 50);
      
      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          offsetTop: element?.offsetTop || 0,
          height: element?.offsetHeight || 0,
        };
      });

      const currentSection = sectionElements.find((section) => {
        return (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.height
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : ""}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-gold font-bold text-xl">
          <span className="gold-gradient-text">Divya Vipparla</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              className={`${
                activeSection === section.id
                  ? "text-gold border-b-2 border-gold"
                  : "text-foreground/80 hover:text-gold"
              } transition-colors`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </Button>
          ))}
        </div>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="text-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md p-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className={`${
                  activeSection === section.id
                    ? "text-gold bg-gold/10"
                    : "text-foreground/80 hover:text-gold"
                } transition-colors w-full text-left justify-start`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
