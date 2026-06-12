import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Layout, Monitor, Coffee, HelpCircle, Briefcase, Truck, ArrowUpRight, Shield, Globe } from "lucide-react";
import { portfolioConcepts } from "../data/portfolio";
import { templates } from "../data/templates";

interface WorkProps {
  id: string;
  onNavigateToTemplate: (route: string) => void;
  onNavigateToContact: () => void;
}

export const Work: React.FC<WorkProps> = ({
  id,
  onNavigateToTemplate,
  onNavigateToContact
}) => {

  const concepts = [
    {
      title: "Business Website Concept",
      category: "Corporate & Agency",
      desc: "A clean, content-rich corporate layout designed to showcase services, introduce the business team, compile client references, and capture leads.",
      route: "/templates/business",
      details: ["Corporate style", "Inquiry Form ready", "Client introduction blocks"]
    },
    {
      title: "Logistics Website Concept",
      category: "Transport & Courier",
      desc: "A direct, structural focus for transport, delivery, and logistics providers. Displays service areas, shipping terms, and holds shipping inquiry inputs.",
      route: "/templates/logistics",
      details: ["Courier optimized", "Service area tables", "Quote request UI"]
    },
    {
      title: "Restaurant Website Concept",
      category: "Food & Hospitality",
      desc: "An organic, sensory layout designed for local dining rooms, cafes, and bakeries. Showcases dynamic food menus, chef stories, and a reservation inquiry box.",
      route: "/templates/restaurant",
      details: ["Digital food menu", "Local hours indicator", "Reservation inquiry"]
    },
    {
      title: "Consulting Website Concept",
      category: "Expert Advice & Coaching",
      desc: "A focus on content and typography tailored for expert advisors, consultants, or single service professionals who need to outline process blocks and schedule consults.",
      route: "/templates/consulting",
      details: ["Trustworthy tone", "Formatted credentials", "Booking Inquiry form"]
    },
    {
      title: "Personal Portfolio Concept",
      category: "Creators & Freelance",
      desc: "A minimal, visual framework optimized for job seekers, designers, engineers, and creators to detail chronological experience and portfolio work.",
      route: "/templates/portfolio",
      details: ["Chronological experience", "Minimal aesthetic", "Skill grids"]
    },
    {
      title: "Local Service Website Concept",
      category: "Home & Business Services",
      desc: "A practical, conversion-optimized outline built for plumbers, technicians, cleaning agencies, and repair operations requesting active client inquiries.",
      route: "/templates/service-provider",
      details: ["Conversion oriented", "Local services outline", "Quick book form"]
    }
  ];

  return (
    <div id={id} className="bg-[#FAF9F6] text-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200/50 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="inline-flex gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
            Interactive Demonstrations
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-serif">
            Website Concepts
          </h1>
          
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto leading-relaxed font-normal">
            A small collection of demo website concepts showing the types of websites YalaByte can customize for different businesses.
          </p>
        </div>
      </section>

      {/* Grid of Concept Cards */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, idx) => {
            const matchingTemplate = templates.find((t) => t.route === concept.route);
            const imageUrl = matchingTemplate?.imageUrl || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80";
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-3xs group/card hover:shadow-2xs transition-all duration-350 cursor-default"
              >
                {/* Concept visual cover */}
                <div className="relative h-44 border-b border-slate-200/50 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={concept.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-slate-950/30 p-5 flex flex-col justify-between">
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider block font-sans">
                      {concept.category}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded shadow-3xs w-fit">
                      LIVE CONCEPT
                    </span>
                  </div>
                </div>

              {/* Card Main text */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-950 font-serif">
                    {concept.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {concept.desc}
                  </p>
                  
                  {/* Category check tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {concept.details.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 rounded border border-slate-205/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button 
                    onClick={() => onNavigateToTemplate(concept.route)}
                    className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-md transition-all cursor-pointer"
                  >
                    <span>View Website Concept</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-450 group-hover:text-blue-600 transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Honest Scope Clarification Callout */}
      <section className="bg-white border-t border-b border-slate-200 py-16 px-4 sm:px-6 lg:px-8 text-center transition-colors">
        <div className="max-w-2xl mx-auto space-y-4">
          <HelpCircle className="w-8 h-8 text-blue-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-950 font-serif">
            Honest Demonstration Notice
          </h3>
          <p className="text-sm text-slate-655 leading-relaxed max-w-xl mx-auto font-normal">
            YalaByte presents these interactive structures as custom reference layouts to demonstrate our web design capabilities. They represent structural templates rather than claimed active, live client operations.
          </p>
        </div>
      </section>

      {/* Bottom final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-serif">
            Ready to Build?
          </h2>
          <p className="text-sm text-slate-600">
            Tell us about your organization and the website sections you need. We'll help you start from one of these concepts.
          </p>
          <div className="pt-2">
            <button 
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer group"
            >
              <span>Start a Website</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Work;
