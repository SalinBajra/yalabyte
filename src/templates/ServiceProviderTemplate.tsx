import React, { useState } from "react";
import { ArrowLeft, Check, Compass, Shield, Phone, Clock, MapPin, Truck } from "lucide-react";

interface ServiceProviderTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "services" | "coverage" | "rates" | "booking";

export const ServiceProviderTemplate: React.FC<ServiceProviderTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [postalCheck, setPostalCheck] = useState("");
  const [coverageMsg, setCoverageMsg] = useState("");
  const [sessionForm, setSessionForm] = useState({ name: "", phone: "", service: "Residential Sparkle" });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleRequest = () => {
    onRequestTemplate("Local Service Provider Template");
  };

  const navTabs: { id: TabType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "services", label: "Cleaning Packages" },
    { id: "coverage", label: "Service Areas" },
    { id: "rates", label: "Pricing List" },
    { id: "booking", label: "Book Callback" }
  ];

  const handlePostalCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const query = postalCheck.trim().toLowerCase();
    if (!query) return;

    const availableAreas = ["kupondole", "patan", "jhamsikhel", "jawalakhel", "kathmandu", "baneshwor", "lazimpat"];
    const matches = availableAreas.some(area => query.includes(area) || area.includes(query));

    if (matches) {
      setCoverageMsg(`Affirmative! We have active cleaning specialist crews serving "${postalCheck}".`);
    } else {
      setCoverageMsg(`We are currently expanding! We don't have recurrent scheduled crews in "${postalCheck}" yet, but you can book a custom crew via callback.`);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div id={id} className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-700 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner */}
      <div className="bg-teal-800 text-teal-100 px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-teal-700 shadow-sm font-sans font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-teal-55">Active Home Service Template</span>
          <span className="text-teal-900">|</span>
          <span className="font-mono text-teal-200 bg-teal-900 px-2 py-0.5 rounded">Service Provider (EverClean Services)</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:text-white text-teal-300 bg-teal-900 hover:bg-teal-850 px-3 py-1.5 rounded transition-all cursor-pointer font-semibold border border-teal-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Templates Menu</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-white text-teal-900 hover:bg-teal-50 font-bold px-3 py-1.5 rounded transition-all cursor-pointer"
          >
            Request This Design
          </button>
        </div>
      </div>

      {/* 1. Header with Approaches */}
      <header className="border-b border-slate-200/50 bg-white py-5 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=120&h=120"
            alt="EverClean Services Logo" 
            className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg font-bold text-slate-900 tracking-tight">EverClean Services</span>
        </div>
        
        {/* Navigation Mock Link State triggers */}
        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-bold uppercase tracking-wider text-slate-600">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "border-teal-600 text-teal-650"
                  : "border-transparent hover:text-teal-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-white border-x border-slate-100 flex flex-col">

        {/* ================= tab: HOME ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero display */}
            <div className="bg-teal-50/45 border-b border-teal-100/40 py-12 px-6 sm:px-8 text-center space-y-6">
              <span className="text-xs uppercase bg-teal-50 text-teal-800 border border-teal-200/20 px-3.5 py-1 rounded inline-block font-bold tracking-widest">
                Reliable Cleaners & Crews
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-905 tracking-tight leading-tight max-w-3xl mx-auto">
                No-Hassle Household & Office Cleaning Services
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
                An approachable website layout designed specifically for local home utility providers, painters, plumbers, and independent cleaners.
              </p>

              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-teal-100 shadow-xs aspect-16/9 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200"
                  alt="Friendly Professional Sanitary Cleaning Staff Group"
                  className="w-full h-auto max-h-72 sm:max-h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => { setActiveTab("booking"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-widest cursor-pointer"
                >
                  Book Callback Now
                </button>
                <button 
                  onClick={() => { setActiveTab("coverage"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center border border-slate-300 text-slate-705 hover:bg-slate-50 font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-widest bg-white cursor-pointer"
                >
                  Check coverage areas
                </button>
              </div>
            </div>

            {/* Quick trust metrics */}
            <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left items-center">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-teal-650">Our Pledge</h3>
                <h2 className="text-2xl font-bold text-slate-900 font-serif leading-tight">Vetted crews, prompt timings, and zero toxic supplies</h2>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  We bring our own safe, non-toxic detergents, industrial vacuum cleaners, and detailing equipment. Every session includes supervisor support to ensure clean, thorough completions.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4 shadow-3xs text-left">
                <h4 className="font-bold text-slate-905 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">Active Service Guarantees</h4>
                <div className="space-y-3 font-medium text-xs">
                  <div className="flex items-start gap-2 text-slate-650">
                    <Check className="text-emerald-600 w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                    <span>Background verified, fully trained local helpers.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-650">
                    <Check className="text-emerald-600 w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                    <span>Non-toxic child-safe and pet-safe products.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-650">
                    <Check className="text-emerald-600 w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                    <span>Regular scheduled sessions with exact arrival.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: PACKAGES ================= */}
        {activeTab === "services" && (
          <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">Cleaning Packages</span>
              <h1 className="text-3xl font-bold font-serif text-slate-905">Detailing Packages Offered</h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md">Our teams are equipped with non-toxic chemical bars and advanced water vacuums.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=400" 
                  alt="Deep Home Detailing" 
                  className="w-full md:w-36 h-48 md:h-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Deep Home Detailing</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Scrubbing and disinfection of bathroom quarters, inner tile grids, cupboards, microwave ovens, baseboard dust, and bedroom carpets.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-teal-700 font-bold">
                    <Check className="w-4 h-4" />
                    <span>Bathroom & kitchen deep scrubs</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row">
                <img 
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400" 
                  alt="Regular Office Detailing" 
                  className="w-full md:w-36 h-48 md:h-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Regular Office Detailing</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Trash emptying, keyboard sanitation, carpet sweeps, window glass polishing, and meeting seat alignments on weekly timetables.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-teal-700 font-bold">
                    <Check className="w-4 h-4" />
                    <span>Disinfected desk areas</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-205 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400" 
                  alt="Move-Out End Scrub" 
                  className="w-full md:w-36 h-48 md:h-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Move-Out End Scrub</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Detailed deep dust and stain erasure across empty flats, ensuring neat clearances for new lease handovers.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-teal-700 font-bold">
                    <Check className="w-4 h-4" />
                    <span>Empty apartment clearances</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-205 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row">
                <img 
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400" 
                  alt="Glass Screen Wash" 
                  className="w-full md:w-36 h-48 md:h-full object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">Glass Screen Wash</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1">
                      Shine and scratch dust-blocking treatment for exterior storefronts, offices, and residential terrace panels.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-teal-700 font-bold">
                    <Check className="w-4 h-4" />
                    <span>Interior / exterior windows</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: COVERAGE AREAS ================= */}
        {activeTab === "coverage" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-8 animate-fadeIn text-left animate-fadeIn">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">Crew Operations Map</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Neighborhood Coverage Area</h1>
              <p className="text-xs sm:text-sm text-slate-505 max-w-md mx-auto">We operate active scheduled crews in central quarters on a daily basis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-4">
                <h3 className="font-bold text-slate-900 text-sm">Instant Service Locator</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Type your neighborhood or sector (e.g. <code>Kupondole</code>, <code>Patan</code>) to check current roster availability.
                </p>
                <form onSubmit={handlePostalCheck} className="flex gap-2">
                  <input 
                    required 
                    type="text" 
                    value={postalCheck} 
                    onChange={(e) => setPostalCheck(e.target.value)} 
                    placeholder="e.g. Jhamsikhel" 
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs bg-white focus:outline-none focus:border-teal-650 bg-slate-50" 
                  />
                  <button type="submit" className="px-4 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded text-xs uppercase font-bold tracking-wider cursor-pointer">
                    Check
                  </button>
                </form>

                {coverageMsg && (
                  <p className="text-xs text-teal-850 bg-teal-50 border border-teal-200 p-3 rounded animate-fadeIn leading-relaxed font-medium">
                    {coverageMsg}
                  </p>
                )}
              </div>

              {/* Major Sectors Checklist */}
              <div className="grid grid-cols-2 gap-4">
                {["Kupondole Segment", "Jawalakhel Circle", "Patan Heights", "Jhamsikhel Block", "Thamel Centre", "Baneshwor Heights"].map((sector, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-5 h-5 text-[#0d9488] stroke-[2.5px] flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: PRICING PLANS ================= */}
        {activeTab === "rates" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">RATES BOARD</span>
              <h1 className="text-3xl font-bold text-slate-905 font-serif">Transparent Estimation Estimates</h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm">We maintain straightforward hourly estimates without hidden processing overhead.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base">Standard Flat Sparkle</h3>
                  <p className="text-xs text-slate-650 leading-relaxed font-normal">
                    Perfect for basic floor sweeping, simple kitchen wipe downs, and bathroom checks.
                  </p>
                </div>
                <div className="bg-white border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-xs font-mono font-bold text-teal-700">Flat Rates / Sizable Estimates</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-900 text-base font-serif">Comprehensive Deep Detailing</h3>
                  <p className="text-xs text-slate-655 leading-relaxed font-normal">
                    Deep carpet spot scrubbing, kitchen soot extraction, and tile lime removal.
                  </p>
                </div>
                <div className="bg-white border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-xs font-mono font-bold text-teal-700">Package Rates (Estimator-First)</span>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-205 p-6 rounded-lg space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-slate-905 text-base">Office Retainer Session</h3>
                  <p className="text-xs text-slate-655 leading-relaxed font-normal">
                    Retainer schedules customized for retail stores, warehouses, and local business headquarters.
                  </p>
                </div>
                <div className="bg-white border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-xs font-mono font-bold text-teal-700">Monthly Plans Available</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: CALLBACK REQUEST ================= */}
        {activeTab === "booking" && (
          <div className="py-16 px-4 animate-fadeIn">
            <div className="max-w-md mx-auto bg-white border border-slate-200 p-6 sm:p-8 rounded-lg text-left space-y-4 shadow-3xs">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0d9488] px-2 py-0.5 rounded">
                  Interactive Callback Form
                </span>
                <h2 className="text-xl font-bold text-slate-950 font-serif">Request a Priority Callback</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Enter your contact details. A neighborhood dispatch supervisor will telephone you within two business hours to verify package sizing.
                </p>
              </div>

              {bookingSuccess ? (
                <div className="bg-teal-50/70 border border-teal-200 text-teal-900 p-4 rounded text-xs leading-relaxed font-medium">
                  <strong>Verification Callback Scheduled!</strong> We recorded a mock clean request under <strong>{sessionForm.service}</strong> for phone <strong>{sessionForm.phone}</strong> (Name: {sessionForm.name}).
                  <button onClick={() => { setBookingSuccess(false); setSessionForm({ name: "", phone: "", service: "Residential Sparkle" }); }} className="block mt-3 underline font-extrabold uppercase text-[9px] cursor-pointer text-teal-800">Submit New Callback</button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-505 mb-1">Your Full Name</label>
                    <input required type="text" value={sessionForm.name} onChange={(e) => setSessionForm({ ...sessionForm, name: e.target.value })} placeholder="Contact name" className="w-full px-3 py-1.5 border border-slate-250 rounded bg-slate-50 focus:outline-none focus:border-teal-600" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-505 mb-1">Callback Phone Number</label>
                    <input required type="tel" value={sessionForm.phone} onChange={(e) => setSessionForm({ ...sessionForm, phone: e.target.value })} placeholder="+977-98..." className="w-full px-3 py-1.5 border border-slate-250 rounded bg-slate-50 focus:outline-none focus:border-teal-650" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-505 mb-1">Requested Care Package</label>
                    <select value={sessionForm.service} onChange={(e) => setSessionForm({ ...sessionForm, service: e.target.value })} className="w-full px-3 py-1.5 border border-slate-250 rounded bg-slate-50 focus:outline-none focus:border-teal-650">
                      <option value="Residential Sparkle">Residential Deep Sparkle</option>
                      <option value="Office Roster Clean">Scheduled Office detaling</option>
                      <option value="Storefront Hand Wash">Outermost store glass wash</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-teal-650 bg-teal-600 hover:bg-teal-700 text-white font-extrabold rounded uppercase tracking-wider transition-colors cursor-pointer text-xs">
                    Confirm Priority Callback
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 px-6 sm:px-8 text-center text-xs border-t border-slate-950 mt-auto">
        <p className="mb-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">© EverClean Services Nepal</p>
        <p className="text-slate-600">Central Depot: Jhamsikhel Heights Lane, Lalitpur</p>
      </footer>

    </div>
  );
};

export default ServiceProviderTemplate;
