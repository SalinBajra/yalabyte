import React from "react";
import { ArrowRight, LayoutTemplate } from "lucide-react";
import { motion } from "motion/react";
import { Template } from "../data/templates";

interface TemplateCardProps {
  id: string;
  template: Template;
  onView: (route: string) => void;
  onRequest?: (templateName: string) => void;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({
  id,
  template,
  onView,
  onRequest,
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white dark:bg-[#0F111E] rounded-xl border border-slate-200 dark:border-slate-850 overflow-hidden hover:border-amber-600/55 dark:hover:border-amber-500/50 shadow-3xs hover:shadow-xs transition-all duration-300 flex flex-col h-full transform hover:-translate-y-0.5"
    >
      {/* Visual Header Mockup */}
      <div className="relative group/mockup overflow-hidden border-b border-slate-100 dark:border-slate-850 flex flex-col justify-between h-44 select-none bg-slate-50 dark:bg-slate-900">
        <img
          src={
            template.id === "business"
              ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
              : template.id === "logistics"
              ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
              : template.id === "restaurant"
              ? "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop"
              : template.id === "consulting"
              ? "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
              : template.id === "portfolio"
              ? "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
              : "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop"
          }
          alt={template.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-15 group-hover/mockup:scale-104 group-hover/mockup:grayscale-0 transition-transform duration-500 opacity-90"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent"></div>

        {/* Browser Top Bar controls */}
        <div className="relative z-10 p-4 flex items-center justify-between font-sans">
          <div className="flex space-x-1.5 bg-slate-950/50 p-1.5 rounded-full backdrop-blur-md border border-slate-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-450"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-450"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-450"></span>
          </div>
          <span className="text-[9px] font-sans leading-none font-extrabold uppercase tracking-wider bg-blue-650/90 text-white px-2 py-1 rounded-sm shadow-sm border border-blue-400/20">
            {template.id} MODULE
          </span>
        </div>

        {/* Browser Location Bar url indicator */}
        <div className="relative z-10 p-4 mt-auto flex items-center gap-2">
          <div className="bg-slate-950/80 border border-slate-800/80 backdrop-blur-md rounded-md px-2.5 py-1 flex items-center gap-2 max-w-full overflow-hidden">
            <LayoutTemplate className="w-3 h-3 text-blue-400 flex-shrink-0" />
            <span className="text-[9px] font-mono text-slate-350 tracking-wider select-none truncate">
              yalabyte.com/cores/{template.id}
            </span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow text-left">
        <span className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-[#1E40AF] dark:text-blue-400 mb-2.5">
          {template.bestFor.split(",")[0]}
        </span>
        <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-2 font-serif transition-colors duration-200">
          {template.name}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-grow font-normal transition-colors duration-200">
          {template.description}
        </p>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-850 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => onView(template.route)}
            className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-slate-950 dark:bg-blue-600 text-white hover:bg-[#1E293B] dark:hover:bg-blue-500 text-xs font-bold transition-colors cursor-pointer"
          >
            <span>Preview Theme</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
          
          {onRequest && (
            <button
              onClick={() => onRequest(template.name)}
              className="flex-1 inline-flex items-center justify-center py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-[#1E40AF] dark:hover:border-blue-400 bg-transparent text-slate-700 dark:text-slate-300 hover:bg-[#FAF9F6]/20 dark:hover:bg-slate-900/40 text-xs font-bold transition-all cursor-pointer"
            >
              Request Layout
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
export default TemplateCard;
