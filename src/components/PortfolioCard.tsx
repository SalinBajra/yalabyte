import React from "react";
import { MoveRight, Globe } from "lucide-react";
import { motion } from "motion/react";
import { PortfolioConcept } from "../data/portfolio";

interface PortfolioCardProps {
  id: string;
  concept: PortfolioConcept;
  onViewTemplate: (route: string) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  concept,
  onViewTemplate
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white rounded-md border border-slate-200 overflow-hidden hover:border-amber-600/40 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col h-full"
    >
      {/* Top conceptual schematic block representing client/work */}
      <div className="bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100 min-h-24">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-slate-200 shadow-3xs">
          <Globe className="w-4 h-4 text-[#1E40AF]" />
          <span className="text-xs font-bold text-slate-700">Interactive Prototype Ready</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-wider mb-2 font-sans">
          {concept.category}
        </span>
        <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-serif">
          {concept.title}
        </h3>
        <p className="text-sm text-slate-650 leading-relaxed mb-4 flex-grow">
          {concept.description}
        </p>

        {concept.tags && concept.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {concept.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center text-xs bg-slate-100/60 border border-slate-200/60 text-slate-600 px-2.5 py-0.5 rounded-md font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => onViewTemplate(concept.templateRoute)}
          className="mt-auto w-full inline-flex items-center justify-center py-2.5 px-4 rounded-md bg-[#0F172A] text-white hover:bg-[#1E293B] text-xs font-bold transition-all cursor-pointer group"
        >
          <span>Explore Demo Template</span>
          <MoveRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};
export default PortfolioCard;
