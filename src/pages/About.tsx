import React from "react";
import { Landmark, Compass, Award, Heart } from "lucide-react";
import { motion } from "motion/react";

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

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <div id={id} className="bg-[#FAF9F6] text-slate-900 min-h-screen transition-colors duration-300 relative overflow-hidden">
      
      {/* 1. Page Header */}
      <section className="bg-white border-b border-slate-200/50 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Lattice blueprint bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        {/* Intricate floating watermark with motion */}
        <motion.div 
          className="absolute left-[-20px] -top-12 lg:left-14 lg:top-4 text-blue-600/[0.045] pointer-events-none scale-100 lg:scale-130"
          animate={{ rotate: [-12, -8, -16, -12], y: [0, -6, 6, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10 text-center">
          <span className="inline-flex gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-750 border border-blue-100">
            About Us
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-serif">
            About Yala Group
          </h1>
          
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto leading-relaxed font-normal">
            Yala Group is a multi-sector enterprise based in Yala (Patan), Lalitpur, Nepal. Our digital engineering arm, YalaByte, builds clean web applications, API endpoints, and cloud database configurations for local and international clients.
          </p>
        </div>
      </section>

      {/* 2. Content Sections - Bento Grid with Office Imagery */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        
        {/* Double-heritage structural watermarks for aesthetic balance with smooth animation */}
        <motion.div 
          className="absolute right-[-110px] top-[15%] text-blue-600/[0.035] pointer-events-none scale-110 lg:scale-150 hidden lg:block"
          animate={{ rotate: [12, 16, 8, 12], y: [0, -10, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechNodesBg className="w-80 h-80" />
        </motion.div>

        <motion.div 
          className="absolute left-[-110px] bottom-[10%] text-blue-600/[0.035] pointer-events-none scale-115 lg:scale-140 hidden lg:block"
          animate={{ rotate: [-6, -2, -10, -6], y: [0, 8, -8, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg className="w-80 h-80" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          
          {/* Left Column: Stunning Workspace Creative Cover */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[350px] lg:min-h-0 border border-slate-200 shadow-3xs group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="YalaByte Yala Office"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-slate-950/25 p-8 flex flex-col justify-end text-left">
                <span className="text-[9px] font-bold text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded border border-blue-900/15 w-fit block tracking-widest uppercase mb-1">
                  Yala (Patan) HQ
                </span>
                <h3 className="text-lg font-bold text-white font-serif tracking-tight">
                  Software & Systems Engineering
                </h3>
                <p className="text-xs text-slate-305 mt-1">
                  We build secure systems, optimized APIs, and modern responsive website frontends.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Grid of Info Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            
            {/* Who We Are */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-xl p-6.5 space-y-4 shadow-3xs hover:shadow-2xs transition-all duration-300 hover:border-blue-600/35 cursor-default"
            >
              <div className="p-2 bg-blue-50 text-blue-700 rounded-lg w-fit">
                <Landmark className="w-4.5 h-4.5" />
              </div>
              <h2 className="text-lg font-bold text-slate-955 font-serif">Who We Are</h2>
              <p className="text-xs text-slate-655 leading-relaxed font-normal">
                We are <strong>Yala Group</strong>, a collaborative team based in Patan, Lalitpur. We integrate two main operations: <strong>YalaByte</strong>, our software development division that builds fast web layouts and API integrations, and <a href="https://yalalogistics.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-605 font-bold hover:underline">Yala Logistics P. Ltd.</a>, which provides local transportation and logistics network services across Nepal.
              </p>
            </motion.div>

            {/* What We Build */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-xl p-6.5 space-y-4 shadow-3xs hover:shadow-2xs transition-all duration-300 hover:border-blue-600/35 cursor-default"
            >
              <div className="p-2 bg-blue-50 text-blue-700 rounded-lg w-fit">
                <Compass className="w-4.5 h-4.5" />
              </div>
              <h2 className="text-lg font-bold text-slate-955 font-serif">What We Build</h2>
              <p className="text-xs text-slate-655 leading-relaxed font-normal">
                We build responsive websites, database setups, and custom web applications. We also support digital marketing campaigns and secure API integrations to connect third-party platforms for your business.
              </p>
            </motion.div>

            {/* Our Approach */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-xl p-6.5 space-y-4 shadow-3xs hover:shadow-2xs transition-all duration-300 hover:border-blue-600/35 cursor-default"
            >
              <div className="p-2 bg-blue-50 text-blue-700 rounded-lg w-fit">
                <Award className="w-4.5 h-4.5" />
              </div>
              <h2 className="text-lg font-bold text-slate-955 font-serif">Our Approach</h2>
              <p className="text-xs text-slate-655 leading-relaxed font-normal">
                We design lightweight, high-performance systems. We don't use bloated drag-and-drop engines that slow down page speed. Instead, we write modern, clean, and decoupled code optimized for mobile network speeds.
              </p>
            </motion.div>

            {/* Our Values */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-xl p-6.5 space-y-4 shadow-3xs hover:shadow-2xs transition-all duration-300 hover:border-blue-600/35 cursor-default"
            >
              <div className="p-2 bg-blue-50 text-blue-700 rounded-lg w-fit">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <h2 className="text-lg font-bold text-slate-955 font-serif">Our Values</h2>
              <p className="text-xs text-slate-655 leading-relaxed font-normal">
                Honesty and clean execution are at our core. We offer robust system configurations, simple user guides, objective service targets, and reliable post-deployment developer support.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
