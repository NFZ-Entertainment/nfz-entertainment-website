import { Facebook, Instagram, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="https://img1.wsimg.com/isteam/ip/ad83c887-fe1e-4e1b-b1cf-a87a930779a0/blob-8cb464e.png/:/rs=h:100,cg:true,m/qt=q:95" 
                alt="NFZ Entertainment Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-neon-cyan neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
                NFZ Entertainment
              </span>
            </div>
            <p className="text-gray-400 text-sm">Step Into the Story</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.facebook.com/nfz.world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
            >
              <Facebook className="text-2xl" />
            </a>
            <a 
              href="https://www.instagram.com/nfz_zoos/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-magenta transition-colors duration-300"
            >
              <Instagram className="text-2xl" />
            </a>
            <a 
              href="https://www.tiktok.com/@nfz.world" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
            >
              <SiTiktok className="text-2xl" />
            </a>
            <a 
              href="https://www.x.com/NFZNFTS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-cyan transition-colors duration-300"
            >
              <Twitter className="text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 NFZ Inc - All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Powered by NFZ Entertainment
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
