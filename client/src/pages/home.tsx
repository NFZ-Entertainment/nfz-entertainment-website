import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceShowcase from "@/components/experience-showcase";
import TechnologySection from "@/components/technology-section";
import PartnershipSection from "@/components/partnership-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple transform-gpu origin-left z-50';
    scrollProgress.style.transform = 'scaleX(0)';
    scrollProgress.style.transformOrigin = 'left';
    document.body.appendChild(scrollProgress);

    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const scrollPercentage = scrollTop / scrollHeight;
      scrollProgress.style.transform = `scaleX(${scrollPercentage})`;
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (document.body.contains(scrollProgress)) {
        document.body.removeChild(scrollProgress);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <ExperienceShowcase />
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
