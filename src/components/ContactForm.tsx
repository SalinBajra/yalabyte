import React, { useState } from "react";
import Button from "./Button";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  id: string;
  initialWebsiteType?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ id, initialWebsiteType = "" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    websiteType: initialWebsiteType,
    budgetRange: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const websiteTypes = [
    { value: "business", label: "Business Website" },
    { value: "landing", label: "Landing Page" },
    { value: "redesign", label: "Website Redesign" },
    { value: "portfolio", label: "Portfolio Website" },
    { value: "restaurant", label: "Restaurant Website" },
    { value: "logistics", label: "Logistics Website" },
    { value: "consulting", label: "Consulting Website" },
    { value: "service-provider", label: "Local Service Website" },
    { value: "template", label: "Template-Based Website" },
    { value: "custom", label: "Custom Website" },
    { value: "unsure", label: "Not Sure Yet" }
  ];

  const budgetRanges = [
    { value: "basic", label: "Basic Website" },
    { value: "business", label: "Business Website" },
    { value: "custom", label: "Custom Website" },
    { value: "unsure", label: "Not Sure Yet" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      websiteType: "",
      budgetRange: "",
      message: ""
    });
    setSubmitSuccess(false);
  };

  if (submitSuccess) {
    return (
      <div 
        id={`${id}-success`} 
        className="bg-white border border-slate-200 rounded-xl p-8 max-w-lg mx-auto shadow-sm animate-fadeIn font-sans transition-colors text-left"
      >
        <div className="flex justify-center mb-5">
          <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif text-center">
          Inquiry Sent Successfully
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center">
          Thank you, <strong>{formData.fullName}</strong>. We have received your inquiry. Our team will review your website details and get back to you soon.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-xs text-slate-700 space-y-2">
          <div className="font-bold text-slate-800 tracking-wider uppercase text-[10px] border-b border-slate-200 pb-1.5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Recorded Information</span>
          </div>
          <div><span className="font-semibold text-slate-400">Business Name:</span> {formData.companyName || "N/A"}</div>
          <div><span className="font-semibold text-slate-400">Phone Number:</span> {formData.phone || "N/A"}</div>
          <div><span className="font-semibold text-slate-400">Website Type:</span> {websiteTypes.find(t => t.value === formData.websiteType)?.label || formData.websiteType}</div>
          <div><span className="font-semibold text-slate-400">Budget Range:</span> {budgetRanges.find(b => b.value === formData.budgetRange)?.label || formData.budgetRange}</div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleReset}
            className="text-xs font-semibold uppercase tracking-wider text-blue-600 hover:text-blue-700 cursor-pointer transition-colors"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      id={id} 
      onSubmit={handleSubmit} 
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 max-w-2xl mx-auto shadow-3xs hover:border-blue-600/30 transition-all duration-300 font-sans text-left"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Salin Man"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-transparent text-slate-905 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-medium transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@domain.com"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-transparent text-slate-905 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-medium transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
            Phone Number *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +977 98XXXXXXXX"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-transparent text-slate-905 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-medium transition-all"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-xs font-bold text-slate-700 mb-1.5">
            Business Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Cafe, Logistics Company"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-transparent text-slate-905 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-medium transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="websiteType" className="block text-xs font-bold text-slate-700 mb-1.5">
            Website Type *
          </label>
          <select
            id="websiteType"
            name="websiteType"
            required
            value={formData.websiteType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
          >
            <option value="">-- Select Option --</option>
            {websiteTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-white font-semibold">
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-bold text-slate-700 mb-1.5">
            Budget Range *
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            required
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm font-semibold cursor-pointer transition-colors"
          >
            <option value="">-- Select Option --</option>
            {budgetRanges.map((budget) => (
              <option key={budget.value} value={budget.value} className="bg-white font-semibold">
                {budget.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly share who your audience is, required pages, and ideal launch timeline..."
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-transparent text-slate-905 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm leading-relaxed"
        ></textarea>
      </div>

      <div className="pt-2">
        <Button
          id="submit-form-button"
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto font-bold uppercase text-xs tracking-wider py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-3xs cursor-pointer transition-colors"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
              <span>Sending inquiry...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-3.5 h-3.5" />
              <span>Send Inquiry</span>
            </span>
          )}
        </Button>
      </div>
    </form>
  );
};
export default ContactForm;
