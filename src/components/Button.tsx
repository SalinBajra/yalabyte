import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  id: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  id,
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E40AF] cursor-pointer text-center";
  
  const variantClasses = {
    primary: "bg-[#1E40AF] text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 border border-slate-200/50",
    outline: "border border-slate-300 text-slate-700 hover:bg-[#FDFDFB] hover:border-slate-400 active:bg-slate-50",
    white: "bg-white text-slate-900 border border-slate-200 hover:bg-[#FDFDFB] active:bg-slate-50 shadow-sm"
  };

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-bold",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-7 py-3.5 text-base font-bold"
  };

  return (
    <button
      id={id}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
