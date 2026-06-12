import React, { useState } from "react";
import { ArrowLeft, Check, Truck, Timer, MapPin, Package, Search, ChevronRight } from "lucide-react";

interface LogisticsTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "services" | "tracker" | "quote";

export const LogisticsTemplate: React.FC<LogisticsTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [trackingId, setTrackingId] = useState("");
  const [trackedStatus, setTrackedStatus] = useState<any>(null);
  
  // Quote form state
  const [weight, setWeight] = useState("2");
  const [destination, setDestination] = useState("Lalitpur Block A");
  const [quotePrice, setQuotePrice] = useState<number | null>(null);

  const handleRequest = () => {
    onRequestTemplate("Logistics & Courier Template");
  };

  const menuLinks: { id: TabType; label: string }[] = [
    { id: "home", label: "Home Base" },
    { id: "services", label: "Delivery Solutions" },
    { id: "tracker", label: "Track Package" },
    { id: "quote", label: "Rates Calculator" }
  ];

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    // Simulate real courier transit status checks
    setTrackedStatus({
      id: trackingId.toUpperCase(),
      sender: "Kathmandu Central Warehouse",
      receiver: "Patan Resident Office",
      status: "In Transit",
      milestones: [
        { time: "08:30 AM", label: "Assigned to carrier courier dispatch" },
        { time: "11:15 AM", label: "Package scanned at central sorting station" },
        { time: "01:00 PM", label: "Out for final delivery segment" }
      ]
    });
  };

  const handleCalculateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedWeight = parseFloat(weight) || 1;
    let baseRate = 120;
    if (destination.includes("Lalitpur")) baseRate = 150;
    if (parsedWeight > 50) baseRate = 350;
    setQuotePrice(baseRate + Math.round(parsedWeight * 18));
  };

  return (
    <div id={id} className="min-h-screen bg-[#111827] text-gray-100 font-sans selection:bg-orange-600 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner */}
      <div className="bg-orange-600 text-white px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-orange-500 shadow-sm font-sans font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-white">Active Website Simulation</span>
          <span className="text-orange-300">|</span>
          <span className="font-mono text-orange-100 bg-orange-700 px-2 py-0.5 rounded">Logistics Template (SwiftRoute Courier)</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:bg-orange-500 bg-orange-700 px-3 py-1.5 rounded transition-all cursor-pointer font-semibold text-white border border-orange-500"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Go Back</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-3 py-1.5 rounded transition-all cursor-pointer shadow-sm"
          >
            Request This Design
          </button>
        </div>
      </div>

      {/* 1. Header with Industrial Theme */}
      <header className="border-b border-gray-800 bg-gray-950 py-5 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=120&h=120"
            alt="SwiftRoute Logo" 
            className="w-10 h-10 rounded-full object-cover border-2 border-orange-500/40 shade-md shadow-xs"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg font-extrabold text-white tracking-wider uppercase font-sans">SwiftRoute Courier</span>
        </div>
        
        {/* Navigation Mock Link State triggers */}
        <nav className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400">
          {menuLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === link.id
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Container - Keeps it tight and premium, styled in dark industrial mode */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-gray-900 border-x border-gray-800 shadow-2xl flex flex-col">

        {/* ================= tab: HOME ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            
            {/* Hero Split Layout */}
            <div className="py-16 sm:py-24 px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left border-b border-gray-800">
              <div className="space-y-6">
                <span className="text-xs uppercase bg-orange-950 text-orange-400 border border-orange-850 px-3 py-1 rounded inline-block font-extrabold tracking-widest">
                  On-Time Logistics Delivery
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold py-1 tracking-tight leading-tight text-white uppercase font-sans">
                  Deliver Fast, Track Instantly.
                </h1>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  A high-performing website layout designed specifically for logistics, cargo handlers, and independent local delivery services.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => { setActiveTab("tracker"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-extrabold h-11 px-6 rounded text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Track Package Now
                  </button>
                  <button 
                    onClick={() => { setActiveTab("quote"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center border border-gray-750 hover:bg-gray-800 text-gray-200 font-extrabold h-11 px-6 rounded text-xs uppercase tracking-widest bg-gray-950 cursor-pointer"
                  >
                    RATES CALCULATOR
                  </button>
                </div>
              </div>

              {/* Package Snapshot Info widget with high quality image */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-gray-800 shadow-lg aspect-16/10">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                    alt="SwiftRoute Delivery Fleet Freight Trucks"
                    className="w-full h-full object-cover max-h-56"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="bg-gray-950 border border-gray-800 p-6 rounded-xl text-left space-y-4 shadow-sm">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-gray-850 pb-2">Active Service Overview</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    We specialize in citywide courier transfers, fast cargo loading, and reliable courier runs for offices and individuals.
                  </p>
                  <div className="grid grid-cols-1 gap-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-405 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Same-day couriers between Kathmandu & Lalitpur</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-orange-405 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>Real-time SMS tracking updates on departure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Operation stats section */}
            <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-8">
              <h3 className="text-lg font-bold text-center uppercase tracking-widest text-orange-400">Our Commitments</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-950 border border-gray-800 p-5 rounded space-y-2 text-left">
                  <Timer className="w-8 h-8 text-orange-500 mb-1" />
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">Within 3 Hours</h4>
                  <p className="text-xs text-gray-400">Our same-day courier solutions ensure documents travel from door to door in central areas quickly.</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 p-5 rounded space-y-2 text-left">
                  <Package className="w-8 h-8 text-orange-500 mb-1" />
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">Secure Cargo</h4>
                  <p className="text-xs text-gray-400">All transport boxes are sealed with trackable tamper-evident tags, maintaining strict privacy.</p>
                </div>
                <div className="bg-gray-950 border border-gray-800 p-5 rounded space-y-2 text-left">
                  <MapPin className="w-8 h-8 text-orange-500 mb-1" />
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">Broad Service Area</h4>
                  <p className="text-xs text-gray-400">We maintain dedicated drivers operating in major residential, office, and market quarters.</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= tab: SERVICES ================= */}
        {activeTab === "services" && (
          <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Operational Areas</span>
              <h1 className="text-3xl font-extrabold py-1 text-white uppercase tracking-tight">Delivery Services</h1>
              <p className="text-xs sm:text-sm text-gray-450 max-w-md leading-relaxed">
                Reliable logistics solutions designed to handle document packages and wholesale items.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-orange-500/20 transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400" 
                  alt="Daily Courier Deliveries" 
                  className="w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg uppercase">Daily Courier Run</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Scheduled courier transfer of envelopes, corporate binders, and individual packages throughout inner Lalitpur.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-[10px] text-orange-400 font-mono font-bold uppercase">
                    <Package className="w-4 h-4 shrink-0" />
                    <span>Envelope & parcel routes</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-orange-500/20 transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400" 
                  alt="Bulk Cargo Moves Freight" 
                  className="w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg uppercase">Bulk cargo moves</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Van assistance for bulk trade shipments, store inventories, and warehouse redistributions.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-[10px] text-orange-400 font-mono font-bold uppercase">
                    <Truck className="w-4 h-4 shrink-0" />
                    <span>Van & multi-axle freight</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-orange-500/20 transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400" 
                  alt="Express cargo airplane priority dispatch" 
                  className="w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg uppercase">Express priority</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mt-1">
                      Next-flight or instant cycle dispatch for medical items, signed papers, and critical parts.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 pt-2 text-[10px] text-orange-400 font-mono font-bold uppercase">
                    <Timer className="w-4 h-4 shrink-0" />
                    <span>Instant flight dispatch</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: TRACKER ================= */}
        {activeTab === "tracker" && (
          <div className="py-16 px-6 sm:px-8 max-w-3xl mx-auto space-y-8 text-left animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Live Package Status</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">Cargo Tracker Simulator</h1>
              <p className="text-xs sm:text-sm text-gray-405">
                Test the interactive package tracker below. Enter any test code (e.g. <code>SR-709</code>) to see mock transit checkpoints in action.
              </p>
            </div>

            <form onSubmit={handleTrackSearch} className="bg-gray-950 border border-gray-800 p-6 rounded-lg space-y-4 shadow-xl">
              <div>
                <label className="block text-[10px] font-extrabold uppercase text-gray-400 tracking-wider mb-2">Tracking reference number</label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      required 
                      type="text" 
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)} 
                      placeholder="e.g. SR-850" 
                      className="w-full pl-9 pr-3 py-2 border border-gray-800 rounded text-xs bg-gray-900 focus:outline-none focus:border-orange-500 text-white" 
                    />
                  </div>
                  <button type="submit" className="px-5 py-2 bg-orange-550 hover:bg-orange-600 bg-orange-500 text-white font-extrabold rounded text-xs uppercase tracking-widest transition-colors">
                    Find Cargo
                  </button>
                </div>
              </div>

              {trackedStatus && (
                <div className="border-t border-gray-850 pt-5 space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap justify-between items-center bg-gray-900 p-3.5 rounded border border-gray-800 gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Shipment ID</span>
                      <span className="text-xs font-bold text-white">{trackedStatus.id}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Primary Route</span>
                      <span className="text-xs font-semibold text-gray-300">{trackedStatus.sender} → {trackedStatus.receiver}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Transit state</span>
                      <span className="text-xs font-extrabold text-orange-450 text-orange-400">{trackedStatus.status}</span>
                    </div>
                  </div>

                  {/* Milestones timeline check */}
                  <div className="space-y-4 pl-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Activity logs</span>
                    <div className="space-y-4 border-l-2 border-gray-800 pl-4 relative">
                      {trackedStatus.milestones.map((m: any, idx: number) => (
                        <div key={idx} className="relative py-1">
                          <div className="absolute -left-[21px] top-2 w-2.5 h-2.5 rounded-full bg-orange-550 bg-orange-500"></div>
                          <span className="text-[10px] font-mono text-gray-500 block">{m.time}</span>
                          <p className="text-xs text-gray-350">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* ================= tab: RATES CALCULATOR ================= */}
        {activeTab === "quote" && (
          <div className="py-16 px-6 sm:px-8 max-w-lg mx-auto space-y-8 text-left animate-fadeIn">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">Quote Assistant</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">Inter-Quarter Rates</h1>
              <p className="text-xs sm:text-sm text-gray-405">
                Calculate an estimate for the delivery based on the estimated weight and the target sector.
              </p>
            </div>

            <form onSubmit={handleCalculateQuote} className="bg-gray-950 border border-gray-800 p-6 rounded-lg space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Package estimated weight (Kg)</label>
                <input 
                  required 
                  type="number" 
                  step="0.1"
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 5" 
                  className="w-full px-3 py-2 border border-gray-800 rounded text-xs bg-gray-900 focus:outline-none focus:border-orange-500 text-white" 
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Package Delivery Destination</label>
                <select 
                  required 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-800 rounded text-xs bg-gray-900 focus:outline-none focus:border-orange-500 text-white"
                >
                  <option value="Kathmandu Main Town">Kathmandu Core Quarter</option>
                  <option value="Lalitpur Block A">Lalitpur Heights Sector</option>
                  <option value="Jhamsikhel Circle">Jhamsikhel Outer Block</option>
                  <option value="Baneshwor Heights">Baneshwor Residential Crossing</option>
                </select>
              </div>

              <button type="submit" className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-extrabold uppercase text-xs tracking-wider rounded transition-colors cursor-pointer">
                Confirm Quote Price
              </button>

              {quotePrice !== null && (
                <div className="bg-orange-950/40 border border-orange-900/60 p-4 rounded text-xs leading-relaxed animate-fadeIn">
                  <span className="text-[10px] uppercase font-bold text-orange-400 block mb-1">Calculated Estimate</span>
                  <div className="text-lg font-extrabold text-white font-mono">Rs. {quotePrice} /-</div>
                  <p className="text-[10px] text-gray-500 mt-2">
                    This is a mock calculation demo for model presentation. Standard VAT or regional clearances may apply.
                  </p>
                </div>
              )}
            </form>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-500 py-10 px-6 sm:px-8 border-t border-gray-850 text-center text-xs mt-auto">
        <p className="mb-2 uppercase tracking-widest font-extrabold text-[10px] text-gray-400">© SwiftRoute Courier Services</p>
        <p className="text-gray-600">Transit Terminal Hub: Ringroad South Sector, Kathmandu</p>
      </footer>

    </div>
  );
};

export default LogisticsTemplate;
