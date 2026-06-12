import React from "react";
import { Mail, MapPin, Heart } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./Logo";

interface FooterProps {
  id: string;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ id, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id={id} 
      className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4 text-left">
            <motion.div 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => handleLinkClick("home", e)}
              className="cursor-pointer inline-block"
            >
              <Logo isDark={true} showText={true} />
            </motion.div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xs">
              Yala Group integrates software engineering services (YalaByte) with local transportation and shipping networks (Yala Logistics).
            </p>
          </div>

          {/* Column 1: Company & Ventures */}
          <div className="md:col-span-2 text-left space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Yala Group
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick("about", e)} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <span className="text-slate-500 font-normal block pt-1">Ventures:</span>
              </li>
              <li className="pl-1 border-l border-blue-600/30">
                <a href="#home" onClick={(e) => handleLinkClick("home", e)} className="text-blue-400 hover:text-blue-300 transition-colors">
                  YalaByte
                </a>
              </li>
              <li className="pl-1 border-l border-blue-600/30">
                <a 
                  href="https://yalalogistics.com.np" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-all text-slate-350"
                >
                  Yala Logistics ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="md:col-span-2 text-left space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick("services", e)} className="hover:text-white transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick("services", e)} className="hover:text-white transition-colors">
                  Website Redesign
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick("services", e)} className="hover:text-white transition-colors">
                  Basic SEO Setup
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Templates */}
          <div className="md:col-span-2 text-left space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Templates
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#templates" onClick={(e) => handleLinkClick("templates", e)} className="hover:text-white transition-colors">
                  Browse Templates
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleLinkClick("work", e)} className="hover:text-white transition-colors">
                  Website Concepts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="md:col-span-2 text-left space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold font-sans">
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick("contact", e)} className="hover:text-white transition-colors">
                  Start a Website
                </a>
              </li>
              <li className="text-slate-500 font-normal">info@yalabyte.com</li>
            </ul>
          </div>

        </div>

        {/* Tech Architecture Motif */}
        <div className="flex items-center justify-center gap-4 pt-10 opacity-30 select-none">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
          <svg className="w-6 h-6 text-blue-500/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M 50,15 L 85,35 L 85,75 L 50,95 L 15,75 L 15,35 Z" />
            <path d="M 50,15 L 50,95" />
            <path d="M 15,35 L 85,75" />
            <path d="M 85,35 L 15,75" />
            <circle cx="50" cy="55" r="8" fill="currentColor" />
          </svg>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        {/* Bottom copyright block */}
        <div className="pt-8 mt-10 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Yala Group. All rights reserved.</p>
          <div className="flex items-center gap-1.5 hover:text-white transition-colors font-sans text-xs tracking-wider uppercase font-semibold text-slate-500 sm:pr-16 lg:pr-20">
            <span>designed and built in yala</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
