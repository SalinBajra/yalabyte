import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  HelpCircle, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Monitor, 
  Sparkles, 
  Truck, 
  Utensils, 
  Briefcase, 
  User, 
  Settings,
  ArrowUpRight,
  Shield
} from "lucide-react";
import { templates } from "../data/templates";

interface TemplatesProps {
  id: string;
  onNavigateToTemplate: (route: string) => void;
  onRequestTemplate: (templateName: string) => void;
}

// Visual metadata specifically describing layout tone, accent palettes, and highlights
const SLIDE_FEATURES: Record<string, {
  icon: React.ComponentType<any>;
  themeTag: string;
  visualStyle: string;
  accentColors: { name: string; hex: string }[];
  sellingPoints: string[];
}> = {
  business: {
    icon: Briefcase,
    themeTag: "Corporate & Agency",
    visualStyle: "Premium slate blue, structured layouts, and robust lead capture blocks.",
    accentColors: [
      { name: "Navy Slate", hex: "#0F172A" },
      { name: "Sky Cobalt", hex: "#3B82F6" }
    ],
    sellingPoints: [
      "Dynamic lead generation submission widget",
      "Interactive service selection cards",
      "SEO-optimized semantic layout sections",
      "Responsive trust credentials list"
    ]
  },
  logistics: {
    icon: Truck,
    themeTag: "Transport & Courier Run",
    visualStyle: "Industrial safety orange tones, sharp contrast gridlines, and helpful quote tools.",
    accentColors: [
      { name: "Gunmetal Black", hex: "#111827" },
      { name: "Safety Orange", hex: "#EA580C" }
    ],
    sellingPoints: [
      "Shipment reference tracker panel",
      "Weight/volume freight quote calculator",
      "Service sector route layout card",
      "Secure delivery assurance highlights"
    ]
  },
  restaurant: {
    icon: Utensils,
    themeTag: "Hospitality & Dining Menu",
    visualStyle: "Warm editorial cream backgrounds, organic spacing, and serif-font details.",
    accentColors: [
      { name: "Oatmeal Cream", hex: "#FDFBF7" },
      { name: "Warm Rust", hex: "#9E2A2B" }
    ],
    sellingPoints: [
      "Custom digital restaurant menus with category tabs",
      "Direct reservation callback query slot",
      "Featured Chef seasonal spotlight card",
      "Clean organic ingredient highlights"
    ]
  },
  consulting: {
    icon: Shield,
    themeTag: "Advisory & Strategy",
    visualStyle: "Prestige forest green notes, clear diagnostic sections, and professional credential columns.",
    accentColors: [
      { name: "Prestige Emerald", hex: "#1B4332" },
      { name: "Warm Alabaster", hex: "#FAF8F5" }
    ],
    sellingPoints: [
      "4-step diagnostic consulting timeline",
      "Consultant biographical education highlights",
      "Instant advisory assessment card",
      "Call session timing request booker"
    ]
  },
  portfolio: {
    icon: User,
    themeTag: "Creative & Freelance Portfolio",
    visualStyle: "Stark minimalist layout, bold typography weight, and modern dark accents.",
    accentColors: [
      { name: "Pitch Black", hex: "#09090B" },
      { name: "Sleek Zinc", hex: "#71717A" }
    ],
    sellingPoints: [
      "Custom work overview expansion panels",
      "Monospaced high-trust career timeline",
      "Clean technical skill pill layout",
      "Sleek client project briefing board"
    ]
  },
  "service-provider": {
    icon: Settings,
    themeTag: "Home & Business Services",
    visualStyle: "High-trust friendly mint green layout with rapid booking call-to-actions.",
    accentColors: [
      { name: "High-Trust Mint", hex: "#0D9488" },
      { name: "Slate Charcoal", hex: "#334155" }
    ],
    sellingPoints: [
      "Local team neighborhood coverage checker",
      "Clear upfront packages breakdown cards",
      "Standard client service check-off guides",
      "Urgent service callback form triggers"
    ]
  }
};

export const Templates: React.FC<TemplatesProps> = ({
  id,
  onNavigateToTemplate,
  onRequestTemplate,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"slideshow" | "grid">("slideshow");

  // Manual carousel navigation helpers
  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % templates.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + templates.length) % templates.length);
  };

  // Keyboard controls for natural accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "slideshow") return;
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  // Autoplay timer to switch layouts every 6 seconds automatically
  useEffect(() => {
    if (viewMode !== "slideshow") return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [viewMode, activeIdx]);

  const activeTemplate = templates[activeIdx];
  const activeFeatures = SLIDE_FEATURES[activeTemplate.id] || {
    icon: Briefcase,
    themeTag: "Business Theme",
    visualStyle: "Clean, professional corporate layout.",
    accentColors: [{ name: "Neutral Slate", hex: "#475569" }],
    sellingPoints: ["Optimized for fast-loading performance", "Widescreen grid layout"]
  };

  const handleLaunchLiveTemplate = (idStr: string) => {
    onNavigateToTemplate(`/templates/${idStr}`);
  };

  return (
    <div 
      id={id} 
      className="bg-[#FAF9F6] text-slate-900 min-h-screen transition-colors duration-300 pb-16"
    >
      {/* Header Banner */}
      <section className="bg-white border-b border-slate-200/50 py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_75%,transparent_100%)] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" />
            Website Templates
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight font-serif">
            Business Website Designs
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Browse our carefully structured design layouts optimized for page speed, search visibility, and responsive layouts on mobile networks.
          </p>

          {/* Clean View Switcher */}
          <div className="flex justify-center pt-3">
            <div className="bg-slate-100 p-1.5 rounded-full inline-flex border border-slate-200">
              <button 
                onClick={() => setViewMode("slideshow")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "slideshow" 
                    ? "bg-slate-900 text-white shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Slideshow Showroom
              </button>
              <button 
                onClick={() => setViewMode("grid")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === "grid" 
                    ? "bg-slate-900 text-white shadow-xs" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Directory Grid
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE SIMPLIFIED SLIDESHOW THEATER */}
      {viewMode === "slideshow" && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 pb-16 relative">
          
          {/* Quick Navigator Tabs (Shows all options at a glance) */}
          <div className="hidden md:flex justify-center flex-wrap gap-2 mb-8 pb-2 border-b border-slate-200/60 font-sans">
            {templates.map((tmpl, index) => {
              const isActive = index === activeIdx;
              const SpecIcon = (SLIDE_FEATURES[tmpl.id] || SLIDE_FEATURES["business"]).icon;
              return (
                <button
                  key={tmpl.id}
                  onClick={() => setActiveIdx(index)}
                  className={`flex items-center gap-2 py-2 px-3 border-b-2 text-xs uppercase tracking-wider font-extrabold transition-all cursor-pointer ${
                    isActive 
                      ? "border-blue-600 text-blue-650 bg-white shadow-3xs" 
                      : "border-transparent text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <SpecIcon className="w-3.5 h-3.5" />
                  <span>{tmpl.id === "service-provider" ? "Services" : tmpl.id}</span>
                </button>
              );
            })}
          </div>

          {/* Active slide outer wrap */}
          <div className="relative px-1 sm:px-6">
            
            {/* Main Interactive Slide Content Frame */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden max-w-2xl mx-auto relative group/mockup">
              
              {/* Safari browser clean top bar mockup (Decorative) */}
              <div className="bg-slate-50 border-b border-slate-200/60 px-4 py-2.5 flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-450 opacity-80 animate-pulse"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-450 opacity-80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-450 opacity-80"></span>
                </div>
                <div className="bg-white border border-slate-200/65 px-3 py-0.5 rounded-md text-[10px] font-mono text-slate-400 w-1/2 text-center truncate">
                  yalabyte.com/templates/{activeTemplate.id}
                </div>
                <div className="w-10"></div>
              </div>

              {/* Template Image Showcase */}
              <div className="relative overflow-hidden group/image select-none h-[280px] sm:h-[450px] bg-white flex items-center justify-center">
                
                {/* Left navigation arrow - Visible only on hover of the image */}
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-xs text-slate-800 p-2.5 rounded-full shadow-md border border-slate-200/60 hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-200"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5 stroke-[2.5px] text-slate-700" />
                </button>

                {/* Right navigation arrow - Visible only on hover of the image */}
                <button
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/85 backdrop-blur-xs text-slate-800 p-2.5 rounded-full shadow-md border border-slate-200/60 hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer z-20 flex items-center justify-center opacity-0 group-hover/image:opacity-100 duration-200"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5 stroke-[2.5px] text-slate-700" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTemplate.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={activeTemplate.imageUrl} 
                      alt={activeTemplate.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Quick Micro Timeline Bullets below the Slide container */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {templates.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === activeIdx 
                      ? "bg-blue-600 scale-125 border border-blue-200 shadow-3xs" 
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Simple centered layout metadata details and View Template actions below the slideshow */}
            <div className="mt-8 text-center space-y-4 max-w-xl mx-auto">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                  LAYOUT 0{activeIdx + 1} / 0{templates.length} — {activeFeatures.themeTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-serif text-slate-950 leading-tight">
                  {activeTemplate.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 italic font-medium px-4">
                  Best for: {activeTemplate.bestFor}
                </p>
                <p className="text-xs sm:text-sm text-slate-655 leading-relaxed max-w-md mx-auto pt-1 font-normal px-4">
                  {activeTemplate.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4 max-w-md sm:max-w-xl mx-auto px-4">
                <button
                  onClick={() => handleLaunchLiveTemplate(activeTemplate.id)}
                  className="w-full sm:w-64 h-12 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold uppercase px-6 rounded-xl text-xs tracking-wider transition-all cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Monitor className="w-4 h-4" />
                  <span>View Template Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onRequestTemplate(activeTemplate.name)}
                  className="w-full sm:w-64 h-12 inline-flex items-center justify-center gap-1.5 border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-bold uppercase px-6 rounded-xl text-xs tracking-wide transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Request Customization</span>
                </button>
              </div>
            </div>

          </div>

        </section>
      )}

      {/* 3. ALL DIRECTORY GRID OVERVIEW */}
      {viewMode === "grid" && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-fadeIn">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((tmpl) => {
              const SpecIcon = (SLIDE_FEATURES[tmpl.id] || SLIDE_FEATURES["business"]).icon;
              return (
                <div 
                  key={tmpl.id} 
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div className="relative h-44 overflow-hidden border-b border-slate-100">
                    <img
                      src={tmpl.imageUrl}
                      alt={tmpl.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 p-1.5 rounded-lg flex items-center justify-center w-8 h-8 text-blue-600">
                      <SpecIcon className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3 text-left">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {tmpl.id.toUpperCase()}
                      </span>
                      
                      <h3 className="text-lg font-bold text-slate-900 font-serif">
                        {tmpl.name}
                      </h3>
                      
                      <div className="text-xs text-slate-500">
                        <strong className="text-slate-705">Best for:</strong> {tmpl.bestFor}
                      </div>
                      
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {tmpl.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                      <button 
                        onClick={() => handleLaunchLiveTemplate(tmpl.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase text-blue-600 hover:text-blue-700 tracking-wider cursor-pointer"
                      >
                        <span>View Template</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      
                      <button 
                        onClick={() => onRequestTemplate(tmpl.name)}
                        className="text-[10px] font-bold uppercase py-1.5 px-3 bg-slate-900 text-white rounded hover:bg-slate-800 tracking-wider cursor-pointer transition-colors"
                      >
                        Request Design
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Support note text area */}
      <section className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8 text-center transition-colors">
        <div className="max-w-3xl mx-auto bg-slate-50 p-6 sm:p-10 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-8 items-start md:items-center text-left">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 flex-shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-slate-950 text-base sm:text-lg font-serif">
              Looking for a custom bespoke design?
            </h3>
            <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-normal">
              Beyond these pre-designed layout blueprints, we specialize in constructing bespoke, custom layouts from scratch. Tell us your clear target demographic, service catalog, and desired outcomes, and we will build a unique digital solution for your brand.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Templates;
