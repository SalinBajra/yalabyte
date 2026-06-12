import React from "react";
import * as Icons from "lucide-react";
import { motion } from "motion/react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  includes?: string[];
  note?: string;
  iconName: string;
  detailed?: boolean;
  onSelect?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  includes,
  note,
  iconName,
  detailed = false,
  onSelect
}) => {
  // Dynamically resolve icon or fallback to Code
  const IconComponent = (Icons as any)[iconName] || Icons.Code;

  if (detailed) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-md border border-slate-200 p-6 sm:p-8 hover:border-[#1E40AF]/40 transition-all duration-200 flex flex-col h-full"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="p-3 bg-[#EFF6FF] text-[#1E40AF] rounded-md">
            <IconComponent className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-tight font-serif">
            {title}
          </h3>
        </div>
        
        <p className="text-slate-655 mb-6 flex-grow leading-relaxed text-sm font-normal">
          {description}
        </p>

        {includes && includes.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold tracking-wider text-slate-800 uppercase mb-3 font-sans">
              What's Included:
            </h4>
            <ul className="space-y-2">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 leading-normal">
                  <Icons.Check className="w-4 h-4 text-[#1E40AF] mr-2 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {note && (
          <p className="text-xs text-slate-500 bg-[#FDFDFB] rounded-md p-3 border border-slate-150 italic mb-6 leading-normal">
            {note}
          </p>
        )}

        {onSelect && (
          <button
            onClick={onSelect}
            className="mt-auto inline-flex items-center text-sm font-bold text-[#1E40AF] hover:text-[#0F172A] hover:underline cursor-pointer group animate-none"
          >
            <span>Learn more about this</span>
            <Icons.ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        )}
      </motion.div>
    );
  }

  // Showcase layout
  return (
    <motion.div 
      id={id} 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white rounded-md border border-slate-200 p-6 hover:shadow-xs hover:border-[#1E40AF]/30 transition-all duration-200 flex flex-col h-full"
    >
      <div className="p-2.5 bg-[#EFF6FF] text-[#1E40AF] rounded-md w-fit mb-4">
        <IconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-serif">
        {title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};
export default ServiceCard;
