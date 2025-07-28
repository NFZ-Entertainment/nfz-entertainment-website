import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Mountain, Zap, Rocket, Car, TreePine } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Ocean Depths",
    description: "Dive alongside great white sharks and feel the cool rush of ocean currents.",
    image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Haptic Feedback • Atmospheric Effects",
    icon: Waves,
  },
  {
    id: 2,
    title: "Peak Conquest",
    description: "Scale impossible heights and feel the mountain wind on your skin.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Wind Effects • Temperature Control",
    icon: Mountain,
  },
  {
    id: 3,
    title: "Safari Trek",
    description: "Track lions through the Serengeti with realistic heat and scent effects.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Scent Systems • Heat Simulation",
    icon: Zap,
  },
  {
    id: 4,
    title: "Space Walk",
    description: "Float in zero gravity and witness Earth from the International Space Station.",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Zero-G Simulation • Cosmic Audio",
    icon: Rocket,
  },
  {
    id: 5,
    title: "Speed Rush",
    description: "Experience championship racing with realistic G-force feedback.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Motion Platform • Vibration Effects",
    icon: Car,
  },
  {
    id: 6,
    title: "Forest Journey",
    description: "Explore ancient forests with realistic mist and forest sounds.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: "Mist Effects • Nature Audio",
    icon: TreePine,
  },
];

export default function ExperienceShowcase() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-6xl mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-neon-magenta neon-text">IMMERSIVE</span>{" "}
            <span className="text-white">EXPERIENCES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from 10 different adventures inside our immersive booth. Each experience is crafted to transport you to extraordinary worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group gradient-border transition-all duration-500"
            >
              <Card className="gradient-border-content h-full bg-dark-card border-0">
                <CardContent className="p-6 h-full">
                  <img 
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-bold text-xl text-neon-cyan mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{experience.description}</p>
                  <div className="flex items-center text-sm text-neon-magenta">
                    <experience.icon className="w-4 h-4 mr-2" />
                    <span>{experience.features}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
