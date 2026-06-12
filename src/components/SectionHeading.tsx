import React from "react";

interface SectionHeadingProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  title,
  subtitle,
  align = "center"
}) => {
  const isCenter = align === "center";

  return (
    <div id={id} className={`max-w-3xl mb-12 md:mb-16 ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span className="inline-flex items-center px-3.5 py-1 rounded-md text-xs font-bold tracking-wider bg-[#EFF6FF] text-[#1E40AF] border border-blue-150 uppercase mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-editorial-ink mb-4 sm:mb-5 font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-editorial-slate leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeading;
