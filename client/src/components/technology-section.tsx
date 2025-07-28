import { motion } from "framer-motion";
import { Hand, Wind, Eye, Box } from "lucide-react";

const features = [
  {
    icon: Hand,
    title: "Haptic Feedback",
    description: "Feel every touch, impact, and texture with our advanced haptic feedback system.",
  },
  {
    icon: Wind,
    title: "Atmospheric Effects",
    description: "Experience heat, cold, wind, mist, and scent that match your virtual environment.",
  },
  {
    icon: Eye,
    title: "Ultra-High Fidelity VR",
    description: "Crystal-clear visuals with 4K resolution and 120Hz refresh rates for seamless immersion.",
  },
  {
    icon: Box,
    title: "Portable Kiosks",
    description: "Self-contained booths that can be deployed at zoos, stadiums, malls, and entertainment venues.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Technology Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bold text-4xl md:text-5xl mb-8" style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-neon-purple neon-text">4D VR</span><br />
              <span className="text-white">TECHNOLOGY</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our revolutionary 4D VR kiosks are complete entertainment experiences in a single booth. 
              Step inside and let our environmental controls transport you with real heat, cool air, gentle breezes, refreshing mist, and immersive scents.
            </p>

            {/* Technology Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg flex items-center justify-center">
                    <feature.icon className="text-black text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neon-cyan mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technology Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/assets/nfz-kiosk.webp"
              alt="NFZ 4D VR Kiosk showing the booth interior with chair and environmental control panel" 
              className="w-full rounded-2xl shadow-2xl"
            />
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-dark-card border border-neon-cyan p-4 rounded-lg animate-float"
            >
              <div className="text-neon-cyan font-bold text-2xl" style={{ fontFamily: 'Orbitron, monospace' }}>2026</div>
              <div className="text-gray-300 text-sm">Launch Year</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-dark-card border border-neon-magenta p-4 rounded-lg animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="text-neon-magenta font-bold text-2xl" style={{ fontFamily: 'Orbitron, monospace' }}>10</div>
              <div className="text-gray-300 text-sm">Experiences</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
