import React, { useState } from "react";
import { ArrowLeft, Check, Code, Award, MessageSquare, ChevronDown, Sparkles } from "lucide-react";

interface PortfolioTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "works" | "philosophy" | "experience" | "contact";

export const PortfolioTemplate: React.FC<PortfolioTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [msgForm, setMsgForm] = useState({ name: "", text: "" });
  const [success, setSuccess] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleRequest = () => {
    onRequestTemplate("Personal Portfolio Template");
  };

  const tabs: { id: TabType; label: string }[] = [
    { id: "home", label: "Intro" },
    { id: "works", label: "Selected Works" },
    { id: "philosophy", label: "Philosophy" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Inquire" }
  ];

  const projectsList = [
    { 
      name: "Hearth & Table Restaurant", 
      label: "Creative Food Design", 
      year: "2025", 
      desc: "Designed a clean, rustic local cafe blueprint prioritizing beautiful food list menus, and reservation triggers.", 
      fullDetails: "This project focused on establishing safe restaurant branding. Built using custom styled HTML layout grids and CSS structures, keeping asset payloads below 200kb total.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Northline Advisor Deck", 
      label: "Prestige Consult Theme", 
      year: "2024", 
      desc: "Crafted a minimalist landing layout for investment professionals, centering editorial font treatments.", 
      fullDetails: "We prioritized dark green border outlines and strict reading grids. Tested across 15 responsive viewpoints to guarantee a perfect experience on older smartphones.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "SwiftRoute tracking grid", 
      label: "Logistics Interface", 
      year: "2025", 
      desc: "Constructed an operational package transit lookup dashboard for local delivery dispatch centers.", 
      fullDetails: "Engineered clean React state handlers that map parcel status responses seamlessly. This highlights high-performing tracking interfaces without bloated dependencies.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div id={id} className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner */}
      <div className="bg-zinc-900 text-zinc-200 px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-zinc-800 shadow-sm font-mono font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>portfolio_builder_engine v1.0</span>
          <span className="text-zinc-700">|</span>
          <span className="text-zinc-400 font-mono">Personal Portfolio (Aarav Sharma)</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:text-white text-zinc-450 bg-zinc-800 hover:bg-zinc-750 px-3 py-1.5 rounded transition-all cursor-pointer font-sans"
          >
            <ArrowLeft className="w-3.5 h-3.5 animate-pulse" />
            <span>Go Back</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-white text-zinc-900 hover:bg-zinc-100 font-bold px-3 py-1.5 rounded transition-all cursor-pointer font-sans"
          >
            Request This Design
          </button>
        </div>
      </div>

      {/* 1. Monospaced Header */}
      <header className="border-b border-zinc-100 bg-white py-6 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=120&h=120"
            alt="Aarav Sharma Profile" 
            className="w-10 h-10 rounded-full object-cover border border-zinc-200 grayscale shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col items-center sm:items-start text-left">
            <span className="text-lg font-bold tracking-tight font-serif">Aarav Sharma</span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 block pt-0.5">Freelance Web Architect</span>
          </div>
        </div>
        
        {/* Navigation Link State triggers */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "border-zinc-900 text-zinc-900 font-extrabold"
                  : "border-transparent hover:text-zinc-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-white border-x border-zinc-100 flex flex-col">

        {/* ================= tab: INTRO ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Split layout hero */}
            <div className="py-20 px-6 sm:px-8 max-w-4xl mx-auto items-center text-left space-y-8">
              <div className="space-y-6">
                <span className="text-[10px] font-mono uppercase bg-zinc-100 text-zinc-600 border border-zinc-200 px-3 py-1 rounded inline-block tracking-widest">
                  [patanhq_station]
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 font-serif leading-none">
                  Building Simple, Honest Websites for Neighborhood Operations.
                </h1>
                <p className="text-sm sm:text-base text-zinc-650 max-w-2xl leading-relaxed font-normal">
                  An ultra-tidy portfolio layout designed for designers, developers, and writers who want to lay out their works and experience in a stark, focused visual outline.
                </p>

                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 shadow-xs aspect-16/9 my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
                    alt="Aarav Sharma Minimalist Web Workspace Design"
                    className="w-full h-auto max-h-72 sm:max-h-96 object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => { setActiveTab("works"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center bg-zinc-900 hover:bg-black text-white font-mono font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider cursor-pointer"
                  >
                    view_case_studies
                  </button>
                  <button 
                    onClick={() => { setActiveTab("contact"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center border border-zinc-300 hover:bg-zinc-50 text-zinc-800 font-mono font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider bg-white cursor-pointer"
                  >
                    inquire_project
                  </button>
                </div>
              </div>
            </div>

            {/* Core credentials highlights */}
            <div className="bg-zinc-50 border-y border-zinc-100 py-12 px-6 sm:px-8 text-left">
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="space-y-1">
                  <span className="font-mono text-zinc-400 text-xs">// 01_minimalist</span>
                  <h4 className="font-bold text-zinc-900 text-sm font-serif">Direct Information</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">No bloated software modules, complex scroll delays, or decorative layout jargon.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-zinc-400 text-xs">// 02_independent</span>
                  <h4 className="font-bold text-zinc-900 text-sm font-serif font-serif">Independent Code</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Clean, legible markup frameworks configured manually for fast, responsive rendering.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-zinc-400 text-xs">// 03_responsive</span>
                  <h4 className="font-bold text-zinc-900 text-sm font-serif font-serif">Responsive Design</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Tested layouts across key desktop margins and entry-level cell phone screens.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: SELECTED WORKS ================= */}
        {activeTab === "works" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">// project_chronicles</span>
              <h1 className="text-3xl font-bold text-zinc-950 font-serif">Working Case Designs</h1>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-md">Click on any project to expand detailed case notes and design decisions.</p>
            </div>

            {/* Works List with Expand details state */}
            <div className="space-y-6">
              {projectsList.map((project, idx) => {
                const isOpen = expandedProject === idx;
                return (
                  <div key={idx} className="border border-zinc-200 rounded-2xl p-6 bg-white space-y-4 shadow-3xs hover:shadow-sm transition-all text-left">
                    <div className="flex flex-wrap justify-between items-baseline gap-2">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">{project.label}</span>
                      <span className="text-xs font-mono text-zinc-400 font-semibold">{project.year}</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full md:w-36 h-24 object-cover rounded-lg border border-zinc-200 grayscale hover:grayscale-0 transition-all"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-grow space-y-2">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => setExpandedProject(isOpen ? null : idx)}>
                          <h3 className="font-bold font-serif text-zinc-905 text-base sm:text-lg hover:underline">{project.name}</h3>
                          <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </div>
                        <p className="text-xs text-zinc-600 font-normal leading-relaxed">{project.desc}</p>
                      </div>
                    </div>
                    
                    {isOpen && (
                      <div className="border-t border-zinc-100 pt-4 mt-3 bg-zinc-50 p-4 rounded-xl text-xs text-zinc-500 animate-fadeIn space-y-2">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block">// dynamic_case_details</span>
                        <p className="leading-relaxed font-normal">{project.fullDetails}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= tab: PHILOSOPHY ================= */}
        {activeTab === "philosophy" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left animate-fadeIn">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase text-zinc-400 block">// builder_statement</span>
              <h1 className="text-3xl font-bold text-zinc-950 font-serif">No Complicated Packages, Just Honest Code</h1>
              <p className="text-sm text-zinc-650 leading-relaxed font-normal">
                Hello, I am Aarav. I skip complicated tech lingo and overly complex animation suites, utilizing standard grids, legible typography pairings, and clean forms instead.
              </p>
            </div>

            <div className="border-t border-zinc-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              <div className="space-y-4">
                <h3 className="font-bold text-zinc-900 font-serif text-base">Simple Layout Principles</h3>
                <p>
                  I focus on small businesses and independent advisors. I ensure your phone number, service pricing, maps pin, and booking forms are exactly where users expect to see them.
                </p>
                <p>
                  Each template I make is hand-coded to load instantly on any mobile device. My ultimate target is readability and unhurried design that builds local trust.
                </p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-6 rounded space-y-3">
                <span className="font-mono text-[10px] text-zinc-400 block">// coding_stack_priorities</span>
                <ul className="space-y-2 text-xs font-semibold">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                    <span>Pure responsive utility classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                    <span>Readable layouts without scroll blocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-zinc-900 flex-shrink-0" />
                    <span>Zero third-party tracking frameworks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: EXPERIENCE ================= */}
        {activeTab === "experience" && (
          <div className="py-16 px-6 sm:px-8 max-w-3xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase text-zinc-450 block">// history_timeline</span>
              <h1 className="text-3xl font-bold text-zinc-950 font-serif font-serif">Work Experience</h1>
            </div>

            <div className="space-y-10">
              
              <div className="border-l-2 border-zinc-300 pl-6 space-y-1.5 relative">
                <div className="absolute w-3.5 h-3.5 bg-zinc-900 rounded-full -left-[8px] top-1"></div>
                <span className="text-xs font-bold font-mono text-zinc-400">2023 - PRESENT</span>
                <h3 className="font-bold text-zinc-900 text-sm sm:text-base font-serif">Independent Web Architect</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Designing responsive online menus, consult calendars, and local service forms for family businesses and independent teams in Patan.
                </p>
              </div>

              <div className="border-l-2 border-zinc-300 pl-6 space-y-1.5 relative">
                <div className="absolute w-3.5 h-3.5 bg-zinc-400 rounded-full -left-[8px] top-1"></div>
                <span className="text-xs font-bold font-mono text-zinc-400">2021 - 2023</span>
                <h3 className="font-bold text-zinc-900 text-sm sm:text-base font-serif">Junior Layout Specialist</h3>
                <p className="text-xs sm:text-sm text-zinc-650 leading-relaxed font-normal">
                  Configured styled email cards, optimized forms, and verified responsive breakpoints for safe visual rendering across regional agencies.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: CONTACT ================= */}
        {activeTab === "contact" && (
          <div className="py-16 px-4 animate-fadeIn">
            <div className="max-w-md mx-auto bg-white border border-zinc-200 p-6 sm:p-8 rounded-lg text-left space-y-4 shadow-3xs">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-white bg-zinc-900 px-2 py-0.5 rounded tracking-widest">
                  [dispatch_inquiry]
                </span>
                <h2 className="text-xl font-bold text-zinc-950 font-serif">Start a Conversation</h2>
                <p className="text-xs text-zinc-505 leading-relaxed">
                  Have a specific web layout or local business launch in mind? Send an inquiry and let's map standard milestones.
                </p>
              </div>

              {success ? (
                <div className="bg-zinc-50 border border-zinc-200 text-zinc-805 p-4 rounded text-xs leading-relaxed font-mono">
                  <strong>Message Dispatched!</strong> This simulates real-time inbox routing capabilities developed using local React state vectors. 
                  <button onClick={() => { setSuccess(false); setMsgForm({ name: "", text: "" }); }} className="block mt-3 underline font-extrabold uppercase text-[9px] cursor-pointer">send_another_transmission</button>
                </div>
              ) : (
                <form onSubmit={handleForm} className="space-y-4 text-xs font-mono font-semibold">
                  <div>
                    <label className="block text-[10px] uppercase text-zinc-400 mb-1">// your_name_reference</label>
                    <input required type="text" value={msgForm.name} onChange={(e) => setMsgForm({ ...msgForm, name: e.target.value })} placeholder="Diner or Owner name" className="w-full px-3 py-1.5 border border-zinc-250 rounded bg-zinc-50 focus:outline-none focus:border-zinc-900" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase text-zinc-400 mb-1">// brief_project_scope</label>
                    <textarea required value={msgForm.text} onChange={(e) => setMsgForm({ ...msgForm, text: e.target.value })} placeholder="Operational needs..." rows={3} className="w-full px-3 py-1.5 border border-zinc-255 rounded bg-zinc-50 focus:outline-none focus:border-zinc-905"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-zinc-900 hover:bg-black text-white font-extrabold rounded uppercase tracking-wider transition-colors cursor-pointer text-xs">
                    send_project_brief
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 px-6 sm:px-8 text-center text-xs border-t border-zinc-900">
        <p className="mb-1 font-mono uppercase text-[10px] text-zinc-405">© Aarav Sharma Architecture Portfolio</p>
        <p className="text-zinc-600 font-mono">Station Code: Patan Core, Lalitpur, Nepal</p>
      </footer>

    </div>
  );
};

export default PortfolioTemplate;
