import React, { useState } from "react";
import { ArrowLeft, Check, Compass, Phone, Mail, MapPin, Award, Shield } from "lucide-react";
import Button from "../components/Button";

interface BusinessTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "about" | "services" | "why-us" | "contact";

export const BusinessTemplate: React.FC<BusinessTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRequest = () => {
    onRequestTemplate("Business Website Template");
  };

  const navLinks: { id: TabType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Choose Us" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div id={id} className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner for Parent Applet */}
      <div className="bg-slate-900 text-white px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/10 shadow-sm font-sans">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="font-semibold text-slate-200">Interactive Preview</span>
          <span className="text-slate-500">|</span>
          <span className="font-mono text-slate-350 bg-slate-800 px-2 py-0.5 rounded">Business Template (Brightline Services)</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:text-white text-slate-400 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded transition-all cursor-pointer font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Templates</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3 py-1.5 rounded transition-all cursor-pointer"
          >
            Request This Template
          </button>
        </div>
      </div>

      {/* 1. Mockup Standard Header */}
      <header className="border-b border-slate-200/80 bg-white py-5 px-6 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between shadow-3xs">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=120&h=120"
            alt="Brightline Services Logo" 
            className="w-9 h-9 rounded-lg object-cover border border-slate-200 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg font-bold text-slate-900 tracking-tight font-serif">Brightline Services</span>
        </div>
        
        {/* Navigation Mock Link State triggers */}
        <nav className="flex items-center gap-1.5 sm:gap-4 md:gap-7 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b-2 transition-all cursor-pointer ${
                activeTab === link.id
                  ? "border-blue-600 text-blue-650 font-semibold"
                  : "border-transparent text-slate-600 hover:text-blue-500"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Body - Renders Specific Page templates dynamically */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-white border-x border-slate-105 shadow-3xs">

        {/* ================= tab: HOME ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Sub-section */}
            <div className="bg-slate-50 border-b border-slate-100 py-12 px-6 sm:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-6">
                <span className="text-xs uppercase bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded border border-blue-105/15 w-fit mx-auto block">
                  Support For Your Organization
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-905 tracking-tight leading-tight font-serif">
                  Professional Support for Growing Businesses
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
                  We help businesses organize their services, communicate clearly, and make it easier for customers to get in touch.
                </p>

                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 shadow-xs aspect-16/9 my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
                    alt="Brightline Modern Team Workspace Collaboration"
                    className="w-full h-auto max-h-72 sm:max-h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button 
                    onClick={() => { setActiveTab("services"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider cursor-pointer"
                  >
                    View Services
                  </button>
                  <button 
                    onClick={() => { setActiveTab("contact"); window.scrollTo(0,0); }}
                    className="inline-flex items-center justify-center border border-slate-305 text-slate-700 hover:bg-slate-100 font-semibold h-11 px-6 rounded transition-colors text-xs uppercase tracking-wider bg-white cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Brief Introduction Grid */}
            <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600">Company Overview</h2>
                <h3 className="text-2xl font-bold text-slate-900 font-serif leading-tight">Welcome to Brightline Services</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We focus on simple, sensible operational assistance. Our team is trained to step in, learn your existing business workflows, and coordinate customer communications on a regular timetable.
                </p>
                <button 
                  onClick={() => { setActiveTab("about"); window.scrollTo(0,0); }}
                  className="text-xs font-bold text-blue-605 inline-flex items-center gap-1.5 hover:underline"
                >
                  <span>Learn more about who we are</span>
                  <Compass className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200/60 text-left space-y-4">
                <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">Our Weekly Commitment</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We maintain regular office hours to handle inbound client messages, follow up on pending inquiries, and generate straightforward reports on progress.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Clear metrics</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Daily schedules</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Deliverables Banner */}
            <div className="bg-slate-50 border-t border-slate-100 py-16 px-6 sm:px-8 text-center space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-serif">Ready to organize your small business operations?</h2>
              <button 
                onClick={() => { setActiveTab("contact"); window.scrollTo(0,0); }}
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 px-6 rounded text-xs uppercase tracking-wider cursor-pointer"
              >
                Start an Inquiry
              </button>
            </div>
          </div>
        )}

        {/* ================= tab: ABOUT ================= */}
        {activeTab === "about" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn">
            <div className="space-y-3 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">About The Company</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Solid Backing for Your Everyday Business Operations</h1>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Brightline Services was founded with a straightforward goal: to provide practical operations support to local businesses and small organizations that want to grow sustainably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xs sm:text-sm text-slate-600 leading-relaxed text-left border-t border-slate-100 pt-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 font-serif text-base">Our Philosophy</h3>
                <p>
                  At Brightline Services, we believe that running a business should be straightforward. Our mission is to handle the practical details of organization and communications so you have more space to focus on your core strengths. Whether you are a sole proprietor or a growing team, we customize our operational workflows to suit your specific daily goals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 font-serif text-base">Transparent Support</h3>
                <p>
                  We operate transparently without unnecessary jargon or complex processes. Our team provides responsive client care, reliable task execution, and clear reports on progress. We look forward to partnering with your local business to help build sustainable, organized momentum.
                </p>
              </div>
            </div>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div className="border border-slate-200 p-5 rounded-lg space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Honest Standards</h3>
                <p className="text-xs text-slate-500">We outline exactly what we will do and stick to our agreed timelines and flat budgets.</p>
              </div>
              <div className="border border-slate-200 p-5 rounded-lg space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Shield className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Client Confidentiality</h3>
                <p className="text-xs text-slate-500">Your communications, client databases, and strategy sheets remain completely secure with us.</p>
              </div>
              <div className="border border-slate-200 p-5 rounded-lg space-y-2">
                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Active Adaptation</h3>
                <p className="text-xs text-slate-500">We adjust to your preferred communication tools (Email, Slack, WhatsApp) for continuous support.</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: SERVICES ================= */}
        {activeTab === "services" && (
          <div className="py-16 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 animate-fadeIn">
            <div className="text-left space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Services</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Clear Solutions for Your Business Needs</h1>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl">We target our assistance to keep your operations functioning smoothly every single day.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Service Card 1 */}
              <div className="bg-slate-50 border border-slate-200/85 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400" 
                  alt="Business Planning" 
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded w-fit block mb-2">
                      01 - Planning
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-serif">Business Planning</h4>
                    <p className="text-xs text-slate-650 leading-relaxed mt-1">
                      Professional planning and analysis to help you set clear goals and outline practical paths forward.
                    </p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-650 flex-shrink-0" />
                      <span>Goal definition worksheets</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-650 flex-shrink-0" />
                      <span>Resource planning support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-slate-50 border border-slate-200/85 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400" 
                  alt="Customer Support" 
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded w-fit block mb-2">
                      02 - Relations
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-serif">Customer Support</h4>
                    <p className="text-xs text-slate-650 leading-relaxed mt-1">
                      Reliable processes to help you manage customer responses, inquiries, and follow-ups.
                    </p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-655 flex-shrink-0" />
                      <span>Responsive email channels</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-655 flex-shrink-0" />
                      <span>Inquiry response checklists</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-slate-50 border border-slate-200/85 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" 
                  alt="Operations Support" 
                  className="w-full h-44 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded w-fit block mb-2">
                      03 - Delivery
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 font-serif">Operations Support</h4>
                    <p className="text-xs text-slate-650 leading-relaxed mt-1">
                      Practical assistance to streamline daily activities, improve work schedules, and organize content.
                    </p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-655 flex-shrink-0" />
                      <span>Daily team shift scheduling</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-705">
                      <Check className="w-4 h-4 text-blue-655 flex-shrink-0" />
                      <span>Document sorting coordination</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================= tab: WHY CHOOSE US ================= */}
        {activeTab === "why-us" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Why Choose Us</span>
              <h1 className="text-3xl font-bold text-slate-950 font-serif">Practical Support You Can Count On</h1>
              <p className="text-slate-600 text-sm max-w-xl">We keep operations standard, simple, and honest.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-3">
                <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 font-serif text-base">Clear communication</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  We speak in standard terms without technical code words. We respond to emails within one business day of receipt.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 font-serif text-base">Practical support</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  We match our workflow to what you actually need. We set up simple calendar grids or response templates that save you hours.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-9 h-9 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 font-serif text-base">Reliable follow-up</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  We complete each assigned task completely and share weekly updates on accomplishments and incoming issues.
                </p>
              </div>

            </div>

            {/* Our Process steps */}
            <div className="border-t border-slate-100 pt-10 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-serif">How We Work Together</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  { num: "1", title: "Initial call", desc: "We discuss your goals, current bottlenecks, and how our support aligns." },
                  { num: "2", title: "Custom scope", desc: "We provide a practical outline showing what we will do and flat timetables." },
                  { num: "3", title: "Setup", desc: "Our team implements the processes and establishes channels." },
                  { num: "4", title: "Support", desc: "We work directly and keep you updated at regular weekly check-ins." }
                ].map((s, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded border border-slate-150 space-y-2">
                    <span className="font-mono text-xs font-bold text-blue-600">0{s.num}.</span>
                    <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{s.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: CONTACT ================= */}
        {activeTab === "contact" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-left animate-fadeIn">
            
            {/* Contact Copy & Info */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Get In Touch</span>
                <h1 className="text-3xl font-bold text-slate-950 font-serif">Contact Our Team</h1>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Send us a message or ask a question. We will respond within one business day.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Brightline Office Crossing, Lalitpur, Nepal</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>+977-1-5500000</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>info@brightlineservices.com</span>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Form */}
            <div className="md:col-span-7 bg-slate-50 border border-slate-200/80 p-6 rounded-lg shadow-3xs">
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded text-xs leading-relaxed font-medium">
                  <strong>Thank You for Your Interest!</strong> We have recorded this demo inquiry for <strong>Brightline Services</strong>. This interactive form showcases active lead response structures built of pure React.
                  <button onClick={() => setFormSubmitted(false)} className="block mt-4 text-blue-600 hover:underline font-bold uppercase text-[10px]">Submit Another</button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                  className="space-y-4 text-xs font-medium"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-550 mb-1.5 uppercase font-bold tracking-wider">Business Name</label>
                      <input required type="text" placeholder="Your business name" className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500 bg-white" />
                    </div>
                    <div>
                      <label className="block text-slate-550 mb-1.5 uppercase font-bold tracking-wider">Contact Person</label>
                      <input required type="text" placeholder="Your full name" className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-500 bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-550 mb-1.5 uppercase font-bold tracking-wider">Your Email</label>
                    <input required type="email" placeholder="email@address.com" className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-505 bg-white" />
                  </div>
                  <div>
                    <label className="block text-slate-550 mb-1.5 uppercase font-bold tracking-wider">What can we help you with?</label>
                    <textarea placeholder="Tell us briefly about your team operations or project requirements..." rows={3} className="w-full px-3 py-2 border border-slate-300 rounded focus:outline-none focus:border-blue-505 bg-white"></textarea>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded uppercase tracking-wider cursor-pointer">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

          </div>
        )}

      </main>

      {/* Footer Mockup */}
      <footer className="bg-slate-905 bg-slate-900 text-slate-400 py-12 px-6 sm:px-8 border-t border-slate-800 text-center text-xs mt-auto w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="font-serif font-bold text-sm text-white">Brightline Services</span>
            <span className="text-slate-600 text-[10px]">| Kathmandu Office Support</span>
          </div>
          <p>© Brightline Services. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default BusinessTemplate;
