import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, FileText, RefreshCw, User, Layout, Code, Search, Settings, ArrowRight 
} from "lucide-react";

// Modern Digital Microservice Network & Code Grid (Isometric Tech Lattice)
function TechGridBg({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M 100,20 L 170,60 L 170,140 L 100,180 L 30,140 L 30,60 Z" />
      <path d="M 100,20 L 100,180" />
      <path d="M 30,60 L 170,140" />
      <path d="M 170,60 L 30,140" />
      <circle cx="100" cy="20" r="3.5" fill="currentColor" />
      <circle cx="170" cy="60" r="3.5" fill="currentColor" />
      <circle cx="170" cy="140" r="3.5" fill="currentColor" />
      <circle cx="100" cy="180" r="3.5" fill="currentColor" />
      <circle cx="30" cy="140" r="3.5" fill="currentColor" />
      <circle cx="30" cy="60" r="3.5" fill="currentColor" />
      <circle cx="100" cy="100" r="5.5" fill="currentColor" />
      <circle cx="100" cy="100" r="40" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="65" strokeDasharray="4 4" />
      <line x1="100" y1="60" x2="140" y2="100" />
      <line x1="140" y1="100" x2="100" y2="140" />
      <line x1="100" y1="140" x2="60" y2="100" />
      <line x1="60" y1="100" x2="100" y2="60" />
    </svg>
  );
}

// Microservice Node architecture blocks representing clean cloud infrastructure
function TechNodesBg({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="25" y="25" width="40" height="40" rx="6" />
      <rect x="135" y="25" width="40" height="40" rx="6" />
      <rect x="80" y="80" width="40" height="40" rx="6" />
      <rect x="25" y="135" width="40" height="40" rx="6" />
      <rect x="135" y="135" width="40" height="40" rx="6" />
      <path d="M 65,45 L 80,100" />
      <path d="M 135,45 L 120,100" />
      <path d="M 100,120 L 65,155" />
      <path d="M 100,120 L 135,155" />
      <path d="M 45,65 L 45,135" strokeDasharray="2 2" />
      <path d="M 155,65 L 155,135" strokeDasharray="2 2" />
      <circle cx="45" cy="45" r="3" fill="currentColor" />
      <circle cx="155" cy="45" r="3" fill="currentColor" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <circle cx="45" cy="155" r="3" fill="currentColor" />
      <circle cx="155" cy="155" r="3" fill="currentColor" />
    </svg>
  );
}

interface ServicesProps {
  id: string;
  onNavigateToContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  id,
  onNavigateToContact
}) => {

  const servicesDetails = [
    {
      title: "Business Website Development",
      description: "A professional portal for your enterprise, startup, or logistics company. Built with clean layouts, search-optimized structure, and intuitive booking channels.",
      features: ["Custom corporate home structure", "Executive & profile layouts", "Functional service modules", "High-conversion customer channels"]
    },
    {
      title: "Landing Page Development",
      description: "A high-performance single page tuned for specific digital marketing campaigns, target offers, or software product launches.",
      features: ["Polished system value statements", "Optimized speed load latency", "Call-to-action button placements", "Lead integration forms"]
    },
    {
      title: "Website Redesign & Tech-Lift",
      description: "For active enterprises that need to replace legacy layouts with mobile-first architectures, reducing payload sizes for quick rendering.",
      features: ["Modern component replacements", "Structured layout hierarchy", "Clean API action form replacement", "Responsive styling correction"]
    },
    {
      title: "Template-Based Website Development",
      description: "A fast-track development track leveraging preset professional layouts designed with strict spacing, clear menus, and high-readability.",
      features: ["Pre-built business selection", "Custom corporate color schemes", "Fast-track integration process", "Responsive browser compatibility"]
    },
    {
      title: "Digital Marketing Solutions & SEO",
      description: "High-impact search optimization strategy, local business presence mapping, and targeted organic social footprints to connect with enterprise clients.",
      features: ["Systems meta-tags configuration", "Local maps indexing setup", "High-relevance search strategy", "Corporate content mapping"]
    },
    {
      title: "Illustration Creations & Custom Vectors",
      description: "Custom system diagrams, scalable business icons, and high-quality product illustrations to visualize complex API integrations or operational workflows.",
      features: ["Modern workspace vector graphics", "Scalable responsive SVG elements", "Corporate visual diagrams", "High-contrast geometric system art"]
    },
    {
      title: "Basic Search Optimization Strategy",
      description: "We configure the raw source code of your website so search crawlers can index your pages accurately and efficiently.",
      features: ["SEO semantic tags configuration", "Clear visual header outlines", "Alt desc optimizations on media", "Metadata submission advice"]
    },
    {
      title: "Website & Servers Maintenance",
      description: "Maintaining system stability, managing active cloud deployments, and verifying that all client forms are working properly.",
      features: ["Deploying minor text refinements", "Testing contact backend systems", "Cloud-hosting consultation", "Core backups configuration"]
    }
  ];

  return (
    <div id={id} className="bg-[#FAF9F6] text-slate-900 min-h-screen transition-colors duration-300 relative overflow-hidden">
      
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200/50 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        {/* Floating Tech Grid Motif with motion */}
        <motion.div 
          className="absolute right-[-40px] -bottom-10 lg:right-12 lg:bottom-4 text-blue-600/[0.04] pointer-events-none scale-100 lg:scale-125"
          animate={{ rotate: [12, 16, 8, 12], y: [0, -8, 8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechNodesBg />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="inline-flex gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            What We Deliver
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-serif">
            Digital Engineering Services
          </h1>
          
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto leading-relaxed font-normal">
            YalaByte engineers modern, high-performance web systems and digital marketing campaigns that support corporate workflows and streamline client contact.
          </p>
        </div>
      </section>

      {/* Services Grid with Custom Tech watermark */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        
        {/* Floating custom Tech watermarks for digital atmosphere */}
        <motion.div 
          className="absolute left-[-100px] top-[20%] text-blue-600/[0.03] pointer-events-none scale-110 lg:scale-150 hidden lg:block"
          animate={{ rotate: [-12, -8, -16, -12], y: [0, 10, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg className="w-80 h-80" />
        </motion.div>

        <motion.div 
          className="absolute right-[-100px] bottom-[15%] text-blue-600/[0.03] pointer-events-none scale-115 lg:scale-140 hidden lg:block"
          animate={{ rotate: [6, 10, 2, 6], y: [0, -10, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg className="w-80 h-80" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {servicesDetails.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-left space-y-6 hover:shadow-3xs hover:border-blue-500/35 transition-all duration-300 cursor-default"
            >
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900 font-serif">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-655 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Bullet list */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Includes</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-705">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex gap-2 items-center">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Disclaimer Notice */}
      <section className="bg-slate-100/60 border-t border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 transition-colors relative overflow-hidden">
        
        {/* Absolute micro grid watermark for details context */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600/[0.015] pointer-events-none scale-75">
          <TechNodesBg />
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-8 items-start md:items-center text-left relative z-10 hover:shadow-3xs transition-shadow"
        >
          <div className="p-3 bg-blue-50 text-blue-700 rounded-xl border border-blue-100 flex-shrink-0">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-955 text-base sm:text-lg font-serif">
              Our Honest Approach to SEO Setup
            </h3>
            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
              We do not guarantee Google rank positions. We engineer websites with clean clean code, optimized tags, meta descriptions, image alt text, high mobile page speed, and simple hierarchies to support organic crawling over time.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Bottom Final conversion strip */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white relative overflow-hidden">
        {/* subtle floating design element */}
        <motion.div 
          className="absolute left-10 bottom-10 text-blue-600/[0.02] pointer-events-none scale-90"
          animate={{ rotate: [45, 55, 35, 45], y: [0, -5, 5, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-serif">
            Let's Talk About Your System Setup
          </h2>
          <p className="text-sm text-slate-600">
            We'll help you pick the cloud configurations or template presentation slides that best match your timeline.
          </p>
          <div className="pt-2">
            <button 
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
