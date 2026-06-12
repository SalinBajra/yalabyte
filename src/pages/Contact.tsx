import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Clock, MessageSquare, ChevronDown, HelpCircle } from "lucide-react";

interface ContactProps {
  id: string;
  initialWebsiteType?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const Contact: React.FC<ContactProps> = ({
  id,
  initialWebsiteType = "",
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What kind of deliverables do I receive upon project completion?",
      answer: "You receive the full robust source files, lightweight static assets, complete custom on-page SEO configuration, domain alignment, and live production server deployment. We also offer 1 hour of standard walkthrough training so your team can confidently make minor content updates.",
    },
    {
      question: "Can YalaByte convert or redesign my existing, heavy Wordpress/builder site?",
      answer: "Yes, we specialize in high-performance rebuilds. We refactor slow, outdated, or bloated drag-and-drop sites into modern, clean React architectures. This helps businesses in Kathmandu achieve faster loading times over mobile data networks and rank significantly higher on search engines.",
    },
    {
      question: "Are there any high monthly subscription lock-ins or hidden fees?",
      answer: "None at all. Unlike standard drag-and-drop builders that lock your brand into expensive monthly subscriptions, YalaByte stands for complete digital independence. Once your website is built, you own 100% of the custom compiled code and can host it freely.",
    },
    {
      question: "Where is your team based and can we schedule an alignment session?",
      answer: "Our core team is based in Yala (Patan), the historic heart of Lalitpur, Nepal, near the iconic Durbar Square. We schedule alignment calls digitally to preserve agility, but we are always open to coordinating sessions in Yala for comprehensive product strategy.",
    },
    {
      question: "What happens if I need to update my services, prices, or team photos later?",
      answer: "We structure all our source code with modular layout parameters and clear structural sections. This guarantees that making content edits, changing text paragraphs, or swapping image files remains completely straightforward. We also offer flexible maintenance hours when you need layout adjustments.",
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div 
      id={id} 
      className="bg-[#FAF9F6] text-slate-900 min-h-screen transition-colors duration-300"
    >
      
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200/50 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <span className="inline-flex gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
            Let's Collaborate
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-serif">
            Start Your Website Project
          </h1>
          
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us what kind of website you need. We’ll help you choose the right structure, template, or custom design approach.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 text-left">
            <div className="space-y-3 font-sans">
              <span className="text-xs uppercase bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold tracking-wider">Contact Details</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight font-serif">
                Get in Touch Directly
              </h2>
              <p className="text-sm text-slate-650 leading-relaxed font-normal">
                Have questions before starting? Fill out our inquiry form or reach out directly to our Yala (Patan) team in Lalitpur. We respond to all inquiries within one business day.
              </p>
            </div>

            {/* Structured Card Items */}
            <div className="space-y-4 pt-2 font-sans">
              
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-3xs">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email Addresses</h4>
                  <p className="text-sm text-slate-800 font-bold">info@yalabyte.com</p>
                  <p className="text-xs text-slate-500">info@yalabyte.com.np</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-3xs hover:border-amber-200 transition-colors">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Instant Support Chat</h4>
                  <p className="text-sm text-slate-800 font-bold">YalaBot Messenger</p>
                  <p className="text-xs text-slate-500">Chat with us instantly on the bottom-right of your screen!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-3xs">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Location</h4>
                  <p className="text-sm text-slate-800 font-bold font-sans">Yala (Patan), Lalitpur, Nepal</p>
                  <p className="text-xs text-slate-500">Heart of Lalitpur, near Patan Durbar Square</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200 shadow-3xs">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Business Hours</h4>
                  <p className="text-xs text-slate-750 font-medium">Sunday - Friday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-12 xl:col-span-7">
            <ContactForm 
              id="active-contact-form-block" 
              initialWebsiteType={initialWebsiteType}
            />
          </div>

        </div>
      </section>

      {/* 3. Deep In-depth Frequently Asked Questions (FAQs) Accordion Block with high polish */}
      <section className="bg-white border-t border-slate-200/70 py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 tracking-wider uppercase border border-blue-100">
              <HelpCircle className="w-3.5 h-3.5 animate-pulse" />
              Frequently Asked FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-serif tracking-tight">
              Answering Your Design Questions
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              We focus on absolute transparency. Learn how we operate, deliver files, and build your custom digital layout.
            </p>
          </div>

          {/* Collapsible Accordion Grid */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-xl transition-all duration-300 overflow-hidden text-left ${
                    isOpen 
                      ? "border-blue-400/75 bg-blue-50/10 shadow-3xs" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full h-full p-5 flex items-center justify-between text-left focus:outline-none transition-colors group cursor-pointer"
                  >
                    <span className="font-serif font-bold text-slate-950 text-sm sm:text-base pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full transition-transform duration-300 ${
                      isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 bg-white/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
