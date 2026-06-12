import React, { useState } from "react";
import { ArrowLeft, Check, Compass, BookOpen, Clock, Calendar, Mail, MapPin } from "lucide-react";

interface ConsultingTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "services" | "advisor" | "approach" | "booking";

export const ConsultingTemplate: React.FC<ConsultingTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [sessionForm, setSessionForm] = useState({ name: "", email: "", duration: "20-min", focus: "Strategy Overview" });
  const [success, setSuccess] = useState(false);

  const handleRequest = () => {
    onRequestTemplate("Consulting Website Template");
  };

  const menuLinks: { id: TabType; label: string }[] = [
    { id: "home", label: "Overview" },
    { id: "services", label: "Consulting Areas" },
    { id: "advisor", label: "Principal Bio" },
    { id: "approach", label: "Our Approach" },
    { id: "booking", label: "Book Consultation" }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div id={id} className="min-h-screen bg-[#FBF9F6] text-slate-900 font-sans selection:bg-emerald-850 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner */}
      <div className="bg-[#1b4332] text-[#d8f3dc] px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/10 shadow-sm font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-slate-105">Active Consultation Template</span>
          <span className="text-emerald-700">|</span>
          <span className="font-mono text-emerald-200 bg-emerald-900 px-2 py-0.5 rounded">Consulting Template (Northline Advisory)</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:text-white text-emerald-300 bg-emerald-950 hover:bg-emerald-900 px-3 py-1.5 rounded transition-all cursor-pointer font-semibold border border-emerald-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Templates Menu</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-3 py-1.5 rounded transition-all cursor-pointer"
          >
            Request This Design
          </button>
        </div>
      </div>

      {/* 1. Header with Editorial Prestige */}
      <header className="border-b border-stone-200/50 bg-white py-5 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=120&h=120"
            alt="Northline Advisory logo" 
            className="w-10 h-10 rounded-lg object-cover border border-emerald-900/20 shadow-2xs"
            referrerPolicy="no-referrer"
          />
          <span className="text-xl font-bold font-serif text-[#1b4332] tracking-tight">Northline Advisory</span>
        </div>
        
        {/* Navigation Mock Link State triggers */}
        <nav className="flex items-center gap-4 sm:gap-6 text-xs font-bold uppercase tracking-widest text-slate-650">
          {menuLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === link.id
                  ? "border-[#1b4332] text-[#1b4332]"
                  : "border-transparent hover:text-[#1b4332]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-[#FAF8F5] border-x border-stone-200/40 flex flex-col">

        {/* ================= tab: HOME ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <div className="bg-white border-b border-stone-150 py-16 sm:py-24 px-6 sm:px-8 text-center space-y-6">
              <span className="text-[10px] uppercase bg-emerald-50 text-[#1b4332] px-3.5 py-1 rounded inline-block font-extrabold tracking-wider border border-emerald-500/10">
                Independent Strategic Advisor
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-serif max-w-3xl mx-auto">
                Practical, Logical Advice for Small Business Decisions
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
                An executive website model for corporate advisors, trade consultants, and business coaches who need to detail their experience and services clearly.
              </p>

              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-xs aspect-16/9 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200"
                  alt="Northline Advisory Meeting Atmosphere"
                  className="w-full h-auto max-h-72 sm:max-h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => { setActiveTab("booking"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center bg-[#1b4332] hover:bg-emerald-900 text-white font-semibold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider cursor-pointer"
                >
                  Book advisory call
                </button>
                <button 
                  onClick={() => { setActiveTab("services"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider bg-white cursor-pointer"
                >
                  Inspect services
                </button>
              </div>
            </div>

            {/* Quick summary points */}
            <div className="py-20 px-6 sm:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1b4332]">Primary Goal</h3>
                <h2 className="text-2xl font-bold text-slate-900 font-serif">Solid strategic direction with zero consulting fluff</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  We look at actual daily operational figures, check customer communications pipelines, and construct straightforward roadmaps that can be handled easily without active overhead.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-6 rounded-lg space-y-3 shadow-3xs">
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Standard Consultation Scope</h4>
                <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>20-minute strategy overview assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Plain-language workflow optimization reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Assistance with management group coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: SERVICES ================= */}
        {activeTab === "services" && (
          <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b4332] block">Advisory Focus</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Avenue of Business Consultation</h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">We focus on realistic business operations to build clear avenues for management.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="bg-white border border-stone-200 rounded p-6 space-y-3 shadow-3xs">
                <Compass className="w-8 h-8 text-[#1b4332]" />
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">Organization Strategy</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Detailed review of current target markets and goals to map straightforward operational pathways and establish realistic metrics.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded p-6 space-y-3 shadow-3xs">
                <Check className="w-8 h-8 text-[#1b4332]" />
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">Process Improvement</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Pinpointing persistent daily workflow bottlenecks, cleaning coordination friction, and writing clean step-by-step handbooks.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded p-6 space-y-3 shadow-3xs">
                <BookOpen className="w-8 h-8 text-[#1b4332]" />
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">Management Coaching</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Practical executive mentoring for business founders, department coordinators, and group heads trying to resolve conflict.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded p-6 space-y-3 shadow-3xs">
                <Clock className="w-8 h-8 text-[#1b4332]" />
                <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900">Growth Projection</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Conducting straightforward business audits to create safe projection budgets and analyze healthy marketing segments.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: BIO ================= */}
        {activeTab === "advisor" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left animate-fadeIn">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b4332]">Biographical Profile</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Clear Advice Built on Practical Lessons</h1>
              <p className="text-sm text-slate-650 font-normal">
                At Northline Advisory, we believe in real expertise. We bypass high-gloss marketing deck templates and focus purely on solid operational processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-t border-stone-200 pt-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div className="space-y-4 font-normal">
                <p>
                  As business partners, we help startup founders and regional managers translate complicated strategies into straightforward checklists. Our background spans independent operations, shipping companies, service providers, and business cooperatives.
                </p>
                <p>
                  We keep communications straightforward. Our advisory pledge ensures that we never propose complicated software suites when simple spreadsheets or checklists will do.
                </p>
              </div>
              <div className="p-6 bg-white border border-stone-200 rounded shadow-2xs space-y-3">
                <h4 className="font-bold font-serif text-[#1b4332] text-sm sm:text-base">Principal Advisor Standards</h4>
                <p className="text-xs text-slate-500 italic">
                  "I construct consulting services that prioritize flat business outcomes. My advisory contracts are flat, fair, and based strictly on target objectives."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: APPROACH ================= */}
        {activeTab === "approach" && (
          <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1b4332] block">Our Practice</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-905">Our 4-Step Approach</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Business Audit", desc: "We review your company’s current workflows and operational hurdles in a focused initial discussion." },
                { step: "2", title: "Target Bottlenecks", desc: "We identify the core communication or process delays holding back your local teams." },
                { step: "3", title: "Action Plan", desc: "We write a plain-English handbook showing exactly who does what, the concrete milestones, and flat timetables." },
                { step: "4", title: "Regular Support", desc: "We support you with bi-weekly check-in calls to solve questions and keep processes moving forward." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg border border-stone-200 space-y-2 text-left shadow-3xs">
                  <span className="font-mono text-xs font-extrabold text-[#1b4332]">STAGE 0{item.step}.</span>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= tab: BOOKING ================= */}
        {activeTab === "booking" && (
          <div className="py-16 px-4 animate-fadeIn">
            <div className="max-w-md mx-auto bg-white border border-stone-200 p-6 sm:p-8 rounded-lg text-left space-y-4 shadow-3xs">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#1b4332] px-2 py-0.5 rounded">
                  Interactive Appointment Demo
                </span>
                <h2 className="text-xl font-bold text-slate-950 font-serif">Book an Advisory Discussion</h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Schedule an introductory advisory session below. We will reach out within one business day.
                </p>
              </div>

              {success ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded text-xs leading-relaxed font-medium">
                  <strong>Consult Slot Reserved!</strong> We registered a simulated booking under <strong>{sessionForm.focus}</strong> ({sessionForm.duration}) for {sessionForm.name}.
                  <button onClick={() => { setSuccess(false); setSessionForm({ name: "", email: "", duration: "20-min", focus: "Strategy Overview" }); }} className="block mt-3 underline font-extrabold text-[#1b4332] uppercase text-[9px] cursor-pointer">Request Another Slot</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Your Full Name</label>
                    <input required type="text" value={sessionForm.name} onChange={(e) => setSessionForm({ ...sessionForm, name: e.target.value })} placeholder="Founder or Director name" className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-[#1b4332]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Your Email</label>
                    <input required type="email" value={sessionForm.email} onChange={(e) => setSessionForm({ ...sessionForm, email: e.target.value })} placeholder="office@company.com" className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-[#1b4332]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-505 mb-1">Session Duration</label>
                      <select value={sessionForm.duration} onChange={(e) => setSessionForm({ ...sessionForm, duration: e.target.value })} className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-[#1b4332]">
                        <option value="20-min">20-Minute Intro</option>
                        <option value="50-min">50-Minute Audit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-slate-505 mb-1">Session Focus</label>
                      <select value={sessionForm.focus} onChange={(e) => setSessionForm({ ...sessionForm, focus: e.target.value })} className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-[#1b4332]">
                        <option value="Strategy Overview">Strategy Overview</option>
                        <option value="Process Optimization">Process Optimization</option>
                        <option value="Leadership Coaching">Leadership Coaching</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-[#1b4332] hover:bg-emerald-900 text-white font-extrabold rounded uppercase tracking-wider transition-colors cursor-pointer text-xs">
                    Confirm Consultation Slot
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#112219] text-emerald-600/70 py-10 px-6 sm:px-8 text-center text-xs border-t border-[#112219]">
        <p className="mb-1">© Northline Advisory Services. All rights reserved.</p>
        <p className="font-mono text-[10px] text-emerald-700">Kathmandu Gateway Plaza, Lalitpur, Nepal</p>
      </footer>

    </div>
  );
};

export default ConsultingTemplate;
