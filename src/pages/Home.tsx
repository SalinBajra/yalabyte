import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, Briefcase, Layout, Search, ChevronRight
} from "lucide-react";
import Button from "../components/Button";

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
      {/* Dynamic isometric data lines representing server-side performance & APIs */}
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
      
      {/* Grid rings */}
      <circle cx="100" cy="100" r="40" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="65" strokeDasharray="4 4" />
      
      {/* Connected tech links */}
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
      {/* Systems integration lines */}
      <rect x="25" y="25" width="40" height="40" rx="6" />
      <rect x="135" y="25" width="40" height="40" rx="6" />
      <rect x="80" y="80" width="40" height="40" rx="6" />
      <rect x="25" y="135" width="40" height="40" rx="6" />
      <rect x="135" y="135" width="40" height="40" rx="6" />
      
      {/* Connection pipeline cables */}
      <path d="M 65,45 L 80,100" />
      <path d="M 135,45 L 120,100" />
      <path d="M 100,120 L 65,155" />
      <path d="M 100,120 L 135,155" />
      <path d="M 45,65 L 45,135" strokeDasharray="2 2" />
      <path d="M 155,65 L 155,135" strokeDasharray="2 2" />
      
      {/* Node centers */}
      <circle cx="45" cy="45" r="3" fill="currentColor" />
      <circle cx="155" cy="45" r="3" fill="currentColor" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <circle cx="45" cy="155" r="3" fill="currentColor" />
      <circle cx="155" cy="155" r="3" fill="currentColor" />
    </svg>
  );
}

interface HomeProps {
  id: string;
  onNavigate: (page: string) => void;
  onNavigateToTemplate: (route: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  id,
  onNavigate
}) => {

  return (
    <div 
      id={id} 
      className="bg-[#FAF9F6] text-slate-900 overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white pb-2"
    >
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white border-b border-slate-200/60 pt-20 pb-20 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Lattice blueprint bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        {/* Floating Custom Tech Grid Background Motif with smooth motion */}
        <motion.div 
          className="absolute left-[-40px] -top-12 lg:left-14 lg:top-4 text-blue-600/[0.045] pointer-events-none scale-100 lg:scale-130 origin-center"
          animate={{ rotate: [-12, -9, -15, -12], y: [0, 8, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechGridBg />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Copy */}
            <motion.div 
              className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-serif">
                  Custom Web Applications and Responsive Websites.
                </h1>
                
                <p className="text-base sm:text-lg text-slate-655 max-w-2xl leading-relaxed font-normal">
                  Our organization is based in <strong>Yala</strong> (the historic heart of Lalitpur, Nepal). At <strong>YalaByte</strong>, we construct reliable website architectures, API workflows, and optimized fast-loading pages. We also consult and build technical tools for our logistics wing, <a href="https://yalalogistics.com.np" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Yala Logistics</a>.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  id="hero-start-project-btn" 
                  variant="primary" 
                  size="lg" 
                  onClick={() => onNavigate("contact")}
                  className="group shadow-sm bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
                
                <Button 
                  id="hero-view-services-btn" 
                  variant="outline" 
                  size="lg" 
                  onClick={() => onNavigate("services")}
                  className="border-slate-250 text-slate-750 bg-white hover:bg-slate-50 font-semibold transition-all hover:shadow-3xs"
                >
                  Explore Services
                </Button>
              </div>

              {/* Trust line */}
              <div className="pt-6 border-t border-slate-100 text-xs sm:text-sm text-slate-500 font-medium col-span-1">
                Websites · Web Applications · API Integrations · Search Optimization
              </div>
            </motion.div>

            {/* Right Column - Beautiful Premium Pure CSS Mockup */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-2xl blur-xl opacity-60"></div>
              
              {/* Desktop Browser Frame */}
              <div className="relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                
                {/* Header mock */}
                <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                  </div>
                  <div className="bg-white border border-slate-200 rounded text-[10px] text-slate-400 px-6 py-0.5 text-center min-w-44 select-none">
                    yalabyte.com/preview
                  </div>
                  <div>
                    <span className="w-3.5 h-3.5 rounded bg-slate-200 inline-block"></span>
                  </div>
                </div>

                {/* Simulated Homepage Mockup */}
                <div className="relative bg-[#FAF9F6] h-[280px] overflow-hidden select-none group/hero">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                    alt="Software Engineering Office Design"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent p-5 flex flex-col justify-end text-left">
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-blue-400 bg-blue-950/70 px-2 py-0.5 rounded border border-blue-900/20 w-fit block tracking-wider uppercase">
                        YalaByte Web Development
                      </span>
                      <h4 className="text-sm font-bold text-white font-serif tracking-tight">
                        Custom Business Websites
                      </h4>
                      <p className="text-[10px] text-slate-300 leading-normal max-w-xs">
                        We build fast, secure websites and databases to support your day-to-day operations.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: VALUES STRIP / MISSION INTRO */}
      <section className="bg-[#FAF9F6] border-b border-slate-200/40 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight font-serif">
            Functional Designs, Clean Code
          </h2>
          <p className="text-sm sm:text-base text-slate-655 leading-relaxed font-normal">
            We believe websites should be simple to navigate, fast to load, and easy to maintain. We build each layout with clean spacing, responsive styles, and reliable backend connections.
          </p>
        </div>
      </section>

      {/* SECTION 3: SIMPLIFIED NAVIGATION HUB FOR CLIENTS */}
      <section className="bg-white border-b border-slate-200/60 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Custom Tech Nodes Background Motif with smooth waving/rotation motion */}
        <motion.div 
          className="absolute right-[-40px] -bottom-12 lg:right-12 lg:bottom-4 text-blue-600/[0.035] pointer-events-none scale-100 lg:scale-125"
          animate={{ rotate: [12, 16, 8, 12], y: [0, -10, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <TechNodesBg />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase bg-blue-50 text-blue-700 px-3.5 py-1 rounded-full font-bold tracking-wider border border-blue-600/15">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-serif">
              How We Can Help Your Business
            </h2>
            <p className="text-sm text-slate-600">
              Explore our layout templates, check our core services, or get in touch for custom web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Hub Card 1: Web & Digital Marketing Services */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 flex flex-col justify-between space-y-6 transition-all shadow-3xs hover:border-blue-500/20"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 text-blue-700 border border-blue-200/40 rounded-xl w-fit">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Development Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  We offer front-end web design, API setups, localized search engine optimization, and custom technical layouts suitable for heavy industry.
                </p>
              </div>
              <button 
                onClick={() => onNavigate("services")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-blue-600 hover:text-blue-700 tracking-wider cursor-pointer"
              >
                <span>View Tech Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Hub Card 2: Interactive Templates */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 flex flex-col justify-between space-y-6 transition-all shadow-3xs hover:border-blue-500/20"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 text-blue-700 border border-blue-200/40 rounded-xl w-fit">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Interactive Previews
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Browse interactive mockups built for various fields, including corporate offices, logistics trackers, restaurant menus, and consulting services.
                </p>
              </div>
              <button 
                onClick={() => onNavigate("templates")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-blue-600 hover:text-blue-700 tracking-wider cursor-pointer"
              >
                <span>Browse Live Blueprints</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Hub Card 3: Our Showcase & Heritage */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-slate-50 border border-slate-200/60 rounded-xl p-8 flex flex-col justify-between space-y-6 transition-all shadow-3xs hover:border-blue-500/20"
            >
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 text-blue-700 border border-blue-200/40 rounded-xl w-fit">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Concepts & Logistcs Connection
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Check out our code repository samples and find details about how our parent division manages shipping operations on the ground.
                </p>
              </div>
              <button 
                onClick={() => onNavigate("work")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-blue-600 hover:text-blue-700 tracking-wider cursor-pointer"
              >
                <span>See Software Concepts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 4: INTEGRATED PREMIER CARGO VERIF */}
      <section className="bg-[#FAF9F6] border-b border-slate-200/45 py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">Yala Group Ventures</span>
          <h2 className="text-2xl font-bold text-slate-900 font-serif">Yala Logistics</h2>
          <p className="text-sm text-slate-655 max-w-2xl mx-auto leading-relaxed font-normal">
            Active and operating since 2021, Yala Logistics P. Ltd. is our sister holding company powering container networks, shipping sectors, and warehouse workflows. Together, we build modern technology systems integrating physical and digital operations seamlessly.
          </p>
          <div className="pt-2">
            <a 
              href="https://yalalogistics.com.np" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-605 text-blue-600 hover:underline"
            >
              <span>Visit yalalogistics.com.np</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-8 bg-blue-50/50 border border-blue-500/20 p-8 sm:p-14 rounded-2xl shadow-3xs"
        >
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight leading-tight">
              Let's Discuss Your Website
            </h2>
            <p className="text-sm sm:text-base text-slate-655 max-w-xl mx-auto leading-relaxed">
              Whether you need a custom landing page, localized SEO package, or custom database configuration, we are here to support your business.
            </p>
          </div>
          
          <div className="pt-2">
            <Button 
              id="cta-contact-btn" 
              variant="primary" 
              size="lg" 
              onClick={() => onNavigate("contact")}
              className="bg-blue-600 hover:bg-blue-750 text-white font-bold inline-flex items-center hover:bg-blue-700"
            >
              <span>Contact YalaByte Tech Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
