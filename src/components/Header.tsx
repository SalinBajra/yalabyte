import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Logo from "./Logo";

interface HeaderProps {
  id: string;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  id,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services" },
    { label: "Templates", page: "templates" },
    { label: "Work", page: "work" },
    { label: "About", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const isActive = (itemPage: string) => {
    if (currentPage === itemPage) return true;
    if (itemPage === "templates" && currentPage.startsWith("/templates/")) return true;
    return false;
  };

  return (
    <header
      id={id}
      className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with spring entrance and interactive micro-scaling */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            onClick={() => handleLinkClick("home")}
            className="cursor-pointer flex items-center"
          >
            <Logo isDark={false} showText={true} />
          </motion.div>

          {/* Desktop Controls Group */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <nav className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive(item.page)
                      ? "text-blue-800 bg-blue-50 border border-blue-200 font-extrabold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="h-5 w-px bg-slate-200"></div>

            {/* Action button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLinkClick("contact")}
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-md transition-all duration-200 cursor-pointer shadow-3xs group"
              >
                <span>Start a Website</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Mobile Hamburguer Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-950 rounded-md bg-white border border-slate-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-slate-200 bg-[#FAF9F6]/95 backdrop-blur-md animate-fadeIn">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wider cursor-pointer ${
                  isActive(item.page)
                    ? "text-blue-800 bg-blue-50"
                    : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-md transition-all text-center cursor-pointer shadow-xs"
              >
                Start a Website
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
