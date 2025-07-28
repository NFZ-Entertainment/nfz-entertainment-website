import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-float"
        >
          <h1 className="font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-neon-cyan neon-text animate-neon-pulse">STEP INTO</span><br />
            <span className="text-white">THE STORY</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Step into our revolutionary <span className="text-neon-magenta font-semibold">4D VR kiosks</span> - self-contained booths that 
            transport you to extraordinary worlds with heat, cool, breeze, mist, scent, and haptic feedback.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              onClick={() => scrollToSection('partnership')}
              className="group relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-magenta text-black px-8 py-4 text-lg font-bold hover:scale-105 transition-all duration-300 animate-pulse-glow"
              style={{ background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta))' }}
            >
              <span className="relative z-10">Become a Partner</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
            
            <Button 
              onClick={() => scrollToSection('technology')}
              variant="outline"
              className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 text-lg font-semibold hover:bg-neon-cyan hover:text-black transition-all duration-300"
            >
              See Technology
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-ping"></div>
        </div>
      </motion.div>
    </section>
  );
}
