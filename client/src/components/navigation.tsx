import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect border-b border-gray-800/50' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://img1.wsimg.com/isteam/ip/ad83c887-fe1e-4e1b-b1cf-a87a930779a0/blob-8cb464e.png/:/rs=h:100,cg:true,m/qt=q:95" 
              alt="NFZ Entertainment Logo" 
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-neon-cyan neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
              NFZ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('partnership')}
              className="hover:text-neon-cyan transition-colors duration-300"
            >
              Partnership
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-semibold hover:scale-105 transition-transform duration-300"
              style={{ background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta))' }}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-neon-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-gray-800/50">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left hover:text-neon-cyan transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="block w-full text-left hover:text-neon-cyan transition-colors duration-300"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left hover:text-neon-cyan transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('partnership')}
              className="block w-full text-left hover:text-neon-cyan transition-colors duration-300"
            >
              Partnership
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta text-black font-semibold"
              style={{ background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta))' }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
