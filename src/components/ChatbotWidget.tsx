import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, ArrowRight, Sparkles, Heart } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

// Beautifully crafted custom vector components of a Nepalese Buddhist Stupa (of Patan/Yala)
function StupaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Gajur Pinnacle / Spire */}
      <path d="M50 4 L50 18" />
      <path d="M48 8 H52" />
      <path d="M46 12 H54" />
      <path d="M44 16 H56" />
      
      {/* Spire triangles */}
      <path d="M42 20 L50 4 L58 20" />
      
      {/* Harmika - Square Cap */}
      <rect x="38" y="20" width="24" height="15" rx="1" fill="currentColor" fillOpacity="0.1" />
      
      {/* Wisdom Eyes of humanity */}
      <path d="M43 27 C44 29 46 29 47 27" strokeWidth="2.2" /> {/* left eye */}
      <circle cx="45" cy="26" r="0.7" fill="currentColor" />
      <path d="M53 27 C54 29 56 29 57 27" strokeWidth="2.2" /> {/* right eye */}
      <circle cx="55" cy="26" r="0.7" fill="currentColor" />
      {/* Curly Nose (Urna / golden '1' symbol of unity) */}
      <path d="M50 27 C50 29 49.5 31 50 32 C50.5 32 50.5 30 50 29.2" strokeWidth="2.2" />

      {/* Main Dome (Semicircular mound) */}
      <path d="M22 55 C22 40 78 40 78 55" fill="currentColor" fillOpacity="0.15" />
      <path d="M22 55 C22 40 78 40 78 55" />
      
      {/* Steps of the Stupa Base */}
      <rect x="20" y="55" width="60" height="5" rx="1" />
      <rect x="16" y="60" width="68" height="6" rx="1.5" />
      <rect x="10" y="66" width="80" height="7" rx="2" fill="currentColor" fillOpacity="0.2" />
      
      {/* Dynamic Nepalese Prayer Flag streamers */}
      <path d="M22 55 L38 20" strokeWidth="1.2" strokeDasharray="3 3.5" opacity="0.65" />
      <path d="M78 55 L62 20" strokeWidth="1.2" strokeDasharray="3 3.5" opacity="0.65" />
    </svg>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPromoPopup, setShowPromoPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Namaste! 🙏 I'm YalaBot. Ask me about building responsive websites, custom menus, portfolios, or logistics configurations at YalaByte! 💻✨",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Trigger speech balloon pop up after 4 seconds, and auto-close it after 8 seconds total (shown for just 4 seconds)
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setShowPromoPopup(true);
    }, 4000);

    const closeTimer = setTimeout(() => {
      setShowPromoPopup(false);
    }, 8000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  // Scroll to bottom helper
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const chatbotResponses: { keywords: string[]; reply: string }[] = [
    {
      keywords: ["price", "cost", "money", "expensive", "rate", "npr", "rupees"],
      reply: "We have straightforward pricing with no hidden fees. Basic static layouts start around NPR 15,000, while complete business websites range from NPR 25,000 to 45,000, depending on features and custom pages. 💻",
    },
    {
      keywords: ["process", "time", "days", "long", "fast", "speed", "duration"],
      reply: "We work efficiently to get your site online quickly. Usually, a website takes about 4 to 7 business days from the initial discussion to being fully up and running on your custom domain. ✈️",
    },
    {
      keywords: ["where", "kathmandu", "location", "office", "nepal", "address", "studio", "yala", "patan", "lalitpur", "durbar"],
      reply: "We are based in Yala (Patan), Lalitpur, Nepal. 🇳🇵 Inspired by the symmetry of local architecture, we try to bring the same balance and attention to detail into our websites.",
    },
    {
      keywords: ["template", "templates", "design", "layout", "restaurants", "portfolio", "theme"],
      reply: "We have 6 pre-crafted templates including Corporate Business, Logistics, Gourmet Restaurants, Consultants, Aesthetic Portfolios, and Local Services! Click the 'Templates' tab in our header to browse them instantly! 📂",
    },
    {
      keywords: ["group", "logistics", "yalalogistics", "venture", "cargo", "freight", "ventures"],
      reply: "Yes, we are part of the Yala Group. 🏔️ In addition to our web development division (YalaByte), our sister company is Yala Logistics P. Ltd., which provides transport, shipping, and cargo carrier services across Nepal. You can visit their site at yalalogistics.com.np. 🚚",
    },
    {
      keywords: ["seo", "google", "search", "rank", "ranking"],
      reply: "Yes, we configure basic on-page SEO for all of our projects. We use clean code structures to help Google find and crawl your website easily.",
    },
    {
      keywords: ["contact", "hire", "start", "order", "book", "meeting"],
      reply: "To begin, simple click 'Start a Website' on our main header, or fill out the Contact inquiry form on this screen! We'll reply in less than one business day! 📩",
    },
  ];

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const newMessage: Message = {
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setIsTyping(true);
    setShowPromoPopup(false);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let matchedReply = "Thanks for asking! 😊 We build clean, responsive websites in Patan (Yala). Feel free to send us a message through our contact form so we can discuss the details of your project.";

      for (const group of chatbotResponses) {
        if (group.keywords.some((kw) => lowerText.includes(kw))) {
          matchedReply = group.reply;
          break;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: matchedReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 950);
  };

  const presetQuestions = [
    { label: "💰 Pricing Guide", query: "How much does a website cost?" },
    { label: "⚡ Deliver Speed", query: "What is your project process and timeline?" },
    { label: "🏔️ YalaByte HQ", query: "Where in Yala, Lalitpur is YalaByte?" },
    { label: "📂 Web Templates", query: "What website templates do you offer?" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-55 font-handwritten select-none">
      
      {/* Animated Welcome Speech Balloon Pop Up */}
      <AnimatePresence>
        {!isOpen && showPromoPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 265, damping: 21 }}
            className="absolute bottom-16 right-0 w-68 bg-slate-900 border border-slate-800 text-slate-100 p-3 rounded-2xl shadow-xl text-left pointer-events-auto"
          >
            {/* Balloon Tail */}
            <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-900"></div>

            <div className="flex gap-2 items-start">
              <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center flex-shrink-0 border border-slate-700">
                <StupaIcon className="w-4.5 h-4.5 text-slate-300" />
              </div>

              <div className="flex-grow space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Need any guidance? ✨
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPromoPopup(false);
                    }}
                    className="text-slate-400 hover:text-white transition-all p-0.5 rounded focus:outline-none cursor-pointer"
                    aria-label="Dismiss helpful guidance"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-base text-slate-200 font-bold leading-tight tracking-wide">
                  Ask me about custom web templates or pricing in Yala! 🙏💬
                </p>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setShowPromoPopup(false);
                  }}
                  className="text-[11px] font-bold uppercase tracking-wider text-amber-500 hover:text-amber-400 inline-flex items-center gap-1 mt-0.5 transition-colors group cursor-pointer"
                >
                  Start Chat 💬 <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tiny Notification Badge */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-0.5 -right-0.5 bg-amber-750 text-white rounded-full w-3.5 h-3.5 flex items-center justify-center text-[10px] font-bold z-10 animate-pulse font-sans"
          >
            !
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button (SMALL size with custom Buddhist Stupa icon) */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPromoPopup(false);
        }}
        className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer border border-amber-600/10 focus:outline-none relative group w-9.5 h-9.5"
        aria-label="Toggle YalaBot support companion"
      >
        <span className="absolute inset-0 rounded-full bg-amber-600/10 group-hover:animate-ping opacity-70 pointer-events-none"></span>
        {isOpen ? (
          <X className="w-4.5 h-4.5 z-10" />
        ) : (
          <StupaIcon className="w-5.5 h-5.5 z-10 text-white fill-none" />
        )}
      </button>

      {/* Main Interactive Dialog Screen - Configured completely in Patrick Hand font */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute bottom-12 right-0 w-[280px] sm:w-[310px] bg-[#FAF8F5] border border-slate-250 rounded-2xl shadow-xl flex flex-col overflow-hidden text-slate-800 border-b-4 border-b-amber-800 z-50 mr-[-6px] sm:mr-0 font-handwritten"
          >
            {/* Header branding band with crimson stone & golden stupa features */}
            <div className="bg-slate-900 text-white p-2.5 flex items-center justify-between border-b border-amber-950/20">
              <div className="flex items-center gap-2">
                <div className="w-7.5 h-7.5 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700">
                  <StupaIcon className="w-4.5 h-4.5 animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold tracking-wide text-amber-400">YalaBot Messenger</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="text-[10px] text-slate-400">Patan Royal Office Online 🏔️</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Minimize support interface"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation list viewport - Styled completely in neat Patrick Hand handwritten text */}
            <div className="flex-grow p-2.5 space-y-2.5 h-[220px] overflow-y-auto bg-[#FDFBF7]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-2.5 py-1 text-slate-900 leading-snug text-left shadow-3xs ${
                      msg.sender === "user"
                        ? "bg-amber-700 text-white rounded-br-none font-bold text-[12.5px]"
                        : "bg-white border border-slate-200/80 text-slate-900 font-bold tracking-wide rounded-bl-none text-[13.5px]"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold mt-0.5 px-0.5 uppercase tracking-wider block">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start">
                  <div className="bg-white border border-slate-200 rounded-lg rounded-bl-none px-2.5 py-1 shadow-3xs">
                    <div className="flex gap-1 items-center">
                      <span className="w-1 h-1 bg-amber-700 rounded-full animate-bounce"></span>
                      <span className="w-1 h-1 bg-amber-700 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1 h-1 bg-amber-700 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Quick FAQ Match buttons */}
            <div className="p-2 bg-[#FAF8F5] border-t border-slate-100 space-y-1 text-left">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest pl-0.5">
                💡 FAQ Quick Matches (Try Me! 👇)
              </span>
              <div className="flex flex-wrap gap-1">
                {presetQuestions.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-[10px] font-bold text-slate-700 bg-white hover:bg-amber-50 hover:text-amber-800 border border-slate-200 rounded py-0.5 px-1.5 transition-all text-left cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Keyboard input box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-1.5 border-t border-slate-200 bg-white flex gap-1"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type a message or ask rates..."
                className="flex-grow bg-slate-50 border border-slate-200/80 rounded-md text-xs py-1 px-2 focus:outline-none focus:border-amber-700 focus:bg-white text-slate-850 font-sans"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-800 text-white rounded-md p-1 transition-colors flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
