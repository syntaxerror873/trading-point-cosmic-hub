import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-futuristic font-bold text-gradient">
            TRADING POINT
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('trades')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              W Trades
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Videos
            </button>
            <button 
              onClick={() => scrollToSection('courses')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Courses
            </button>
            <button 
              onClick={() => scrollToSection('merchandise')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Merch
            </button>
            <button 
              onClick={() => scrollToSection('community')}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              Community
            </button>
          </div>

          <Button className="btn-secondary hidden md:block">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};