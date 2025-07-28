import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Settings, Rocket } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Generate new revenue streams with cutting-edge entertainment that attracts visitors.",
    color: "neon-cyan",
  },
  {
    icon: Users,
    title: "Visitor Engagement",
    description: "Increase dwell time and visitor satisfaction with unforgettable experiences.",
    color: "neon-magenta",
  },
  {
    icon: Settings,
    title: "Turn-Key Solution",
    description: "Complete installation, maintenance, and content updates handled by our team.",
    color: "neon-purple",
  },
];

export default function PartnershipSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-6xl mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-neon-cyan neon-text">ACCELERATING</span><br />
            <span className="text-white">GROWTH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            NFZ has recently been accepted into the acceleration program of FasterCapital and is seeking partnerships 
            for our upcoming 2026 launch of immersive VR experiences worldwide.
          </p>
          
          {/* FasterCapital Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-dark-card border border-neon-purple px-6 py-3 rounded-full mb-12"
          >
            <Rocket className="text-neon-purple mr-3 h-5 w-5" />
            <span className="text-neon-purple font-semibold">Backed by FasterCapital</span>
          </motion.div>
        </motion.div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className={`text-center p-8 border border-gray-700 bg-dark-card hover:border-${benefit.color} transition-colors duration-300 h-full`}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="text-black text-2xl" />
                  </div>
                  <h3 className={`font-bold text-xl text-${benefit.color} mb-4`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-bold text-2xl md:text-3xl text-white mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Ready to bring the future to your venue?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our growing network of partners and offer your visitors experiences they'll never forget.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-neon-cyan to-neon-magenta text-black px-10 py-4 text-xl font-bold hover:scale-105 transition-all duration-300 animate-pulse-glow"
            style={{ background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-magenta))' }}
          >
            Become a Partner Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
