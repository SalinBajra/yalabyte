import React, { useState } from "react";
import { ArrowLeft, MapPin, Clock, Calendar, Check, ChevronDown, Award } from "lucide-react";

interface RestaurantTemplateProps {
  id: string;
  onBackToTemplates: () => void;
  onRequestTemplate: (templateName: string) => void;
}

type TabType = "home" | "menu" | "about" | "reserve";
type MenuCat = "all" | "breakfast" | "mains" | "bakery";

export const RestaurantTemplate: React.FC<RestaurantTemplateProps> = ({
  id,
  onBackToTemplates,
  onRequestTemplate
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("home");
  const [menuCat, setMenuCat] = useState<MenuCat>("all");
  
  const [resForm, setResForm] = useState({ date: "", time: "", guests: "2", name: "", phone: "" });
  const [resSuccess, setResSuccess] = useState(false);

  const handleRequest = () => {
    onRequestTemplate("Restaurant Website Template");
  };

  const navLinks: { id: TabType; label: string }[] = [
    { id: "home", label: "Welcome" },
    { id: "menu", label: "Our Menu" },
    { id: "about", label: "Our Story" },
    { id: "reserve", label: "Table Reservation" }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResSuccess(true);
  };

  // Full menu database with realistic layout with images
  const menuItems = [
    { 
      name: "Sourdough Breakfast Plate", 
      price: "Rs. 450", 
      desc: "Warm baked wheat sourdough slices served with organic eggs, raw mountain honey oil glaze, and fresh garden sage leaves.", 
      cat: "breakfast",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Oatmeal Porridge Bowl", 
      price: "Rs. 320", 
      desc: "Creamy stone-cut oat porridge sweetened with orchard apple reduction and ground spice bark.", 
      cat: "breakfast",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Wild Wood-Fired Pasta", 
      price: "Rs. 680", 
      desc: "Rustic kitchen-cut ribbons tossed with hand-foraged local pine mushrooms, pure pasture butter, and ground mountain greens.", 
      cat: "mains",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Fire-Grilled Chicken Skillet", 
      price: "Rs. 750", 
      desc: "Tender herb-rubbed slow-cooked chicken roasted skin-on, with lemon potato bulbs and thyme butter juice.", 
      cat: "mains",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Fermented Potato Sourdough", 
      price: "Rs. 240", 
      desc: "Daily whole loaf of slow-fermented bakery bread using wild Patan valley yeasts.", 
      cat: "bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Spiced Sweet Cardamom Bun", 
      price: "Rs. 180", 
      desc: "Twisted light buttery pastry baked daily, dusted sweet with crushed green cardamom seeds.", 
      cat: "bakery",
      image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const filteredMenu = menuCat === "all" ? menuItems : menuItems.filter(item => item.cat === menuCat);

  return (
    <div id={id} className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-amber-800 selection:text-white flex flex-col">
      
      {/* 2026 Interactive Global Banner */}
      <div className="bg-stone-900 text-[#FAF6F0] px-4 py-3 sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-stone-800 shadow-sm font-sans font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse"></span>
          <span className="font-semibold text-stone-200">Template Live Preview</span>
          <span className="text-stone-600">|</span>
          <span className="font-mono text-stone-350 bg-stone-850 px-2 py-0.5 rounded">Restaurant Website Template</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onBackToTemplates}
            className="inline-flex items-center gap-1.5 hover:text-white text-stone-400 bg-stone-800 hover:bg-stone-750 px-3 py-1.5 rounded transition-all cursor-pointer font-semibold border border-stone-750"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Templates Menu</span>
          </button>
          <button 
            onClick={handleRequest}
            className="bg-amber-700 hover:bg-amber-850 text-white font-semibold px-3 py-1.5 rounded transition-all cursor-pointer"
          >
            Request This Design
          </button>
        </div>
      </div>

      {/* 1. Elegant Serif Header */}
      <header className="border-b border-stone-220/60 bg-white py-6 px-6 sm:px-8 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setActiveTab("home"); window.scrollTo(0,0); }}>
          <img 
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=120&h=120"
            alt="Hearth & Table Logo" 
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-800/30 shadow-xs"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-2xl font-serif font-black tracking-tight text-stone-900">Hearth & Table</span>
            <span className="text-[10px] uppercase tracking-widest text-[#9e2a2b] font-bold block pt-0.5">Family Bakery & Dining</span>
          </div>
        </div>
        
        {/* Navigation Link State triggers */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs font-bold uppercase tracking-widest text-stone-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => { setActiveTab(link.id); window.scrollTo(0,0); }}
              className={`pb-1 border-b transition-all cursor-pointer ${
                activeTab === link.id
                  ? "border-[#9e2a2b] text-[#9e2a2b]"
                  : "border-transparent hover:text-amber-800"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </header>
 
      {/* Main Container */}
      <main className="flex-grow max-w-7xl mx-auto w-full bg-[#FCFAF5] border-x border-stone-200/50 flex flex-col">
 
        {/* ================= tab: HOME ================= */}
        {activeTab === "home" && (
          <div className="animate-fadeIn">
            {/* Hero display */}
            <div className="bg-white border-b border-stone-150 py-12 px-6 sm:px-8 text-center space-y-6">
              <span className="text-xs uppercase bg-[#FAF6F0] text-amber-850 border border-amber-800/10 px-3.5 py-1 rounded inline-block font-bold tracking-widest">
                Kitchen Collective Patan
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-stone-950 tracking-tight leading-tight max-w-3xl mx-auto">
                Simple, Fresh Meals Crafted Daily by Hand
              </h1>
              <p className="text-sm sm:text-base text-stone-600 max-w-lg mx-auto leading-relaxed font-normal">
                An elegant website layout built for neighborhood bistros, farm-to-table bakeries, and simple cafes.
              </p>

              <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-stone-200 shadow-xs aspect-21/9 my-8">
                <img 
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1200"
                  alt="Hearth & Table Dining Atmosphere"
                  className="w-full h-full object-cover max-h-72 sm:max-h-96"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={() => { setActiveTab("menu"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center bg-amber-800 hover:bg-amber-900 text-white font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-widest cursor-pointer"
                >
                  View Food Menu
                </button>
                <button 
                  onClick={() => { setActiveTab("reserve"); window.scrollTo(0,0); }}
                  className="inline-flex items-center justify-center border border-stone-300 text-stone-750 hover:bg-stone-50 font-bold h-11 px-6 rounded transition-colors text-xs uppercase tracking-widest bg-white cursor-pointer"
                >
                  Book Table
                </button>
              </div>
            </div>
 
            {/* Chef Highlights or special boxes with pictures */}
            <div className="py-20 px-6 sm:px-8 max-w-5xl mx-auto space-y-12 text-left">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Specials</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">Featured On Our Counters</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400" 
                    alt="Wood-Fired Roast Potato" 
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 pt-2 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Chef Choice</span>
                    <h3 className="font-bold font-serif text-stone-900 text-base">Wood-Fired Roast Potato</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">Crisped seasonal baby gold skins baked with local oil, whole mountain garlic cloves, and freshly plucked rosemary tips.</p>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" 
                    alt="Mountain Honey Tea Cake" 
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 pt-2 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Pastry</span>
                    <h3 className="font-bold font-serif text-stone-900 text-base">Mountain Honey Tea Cake</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">Spongy almond meal batter baked together with forest-harvested sweet honey syrup and light orange zest slices.</p>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400" 
                    alt="Whipped Cottage Cheese" 
                    className="w-full h-44 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6 pt-2 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded">Chef Specialty</span>
                    <h3 className="font-bold font-serif text-stone-900 text-base">Whipped Cottage Cheese</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">Chilled milk whips served over wild sweet berries, hand-ground peppermint bark, and a sweet drop of local honey glaze.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
 
        {/* ================= tab: OUR MENU ================= */}
        {activeTab === "menu" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#9e2a2b] block">Freshly Harvested</span>
              <h1 className="text-3xl font-bold text-stone-950 font-serif">Kitchen & Bakery Board</h1>
              <p className="text-xs sm:text-sm text-stone-505 max-w-sm mx-auto">Made in small batches using local ingredients from Patan Valley farmers.</p>
            </div>
 
            {/* Menu inner category Switcher */}
            <div className="flex flex-wrap justify-center gap-3 border-b border-stone-200 pb-6">
              {[
                { id: "all", label: "Full Board" },
                { id: "breakfast", label: "Breakfast Plates" },
                { id: "mains", label: "Wild Mains" },
                { id: "bakery", label: "Scratch Bakery" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setMenuCat(cat.id as MenuCat)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer border ${
                    menuCat === cat.id
                      ? "bg-amber-800 text-white border-amber-800"
                      : "bg-white text-stone-605 border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
 
            {/* Menu Grid with high quality pictures */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {filteredMenu.map((item, idx) => (
                <div key={idx} className="bg-white border border-stone-200/70 rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col sm:flex-row">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full sm:w-32 h-32 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-4 flex-grow flex flex-col justify-between gap-1">
                    <div>
                      <div className="flex justify-between items-baseline font-serif gap-2">
                        <h3 className="font-bold text-stone-900 text-sm sm:text-base leading-tight">{item.name}</h3>
                        <span className="text-xs font-bold font-mono text-amber-800 shrink-0">{item.price}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed mt-1.5">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= tab: OUR STORY ================= */}
        {activeTab === "about" && (
          <div className="py-16 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 animate-fadeIn text-left">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800">Our Story</span>
              <h1 className="text-3xl font-bold text-stone-955 font-serif">Warm Dining, Gentle Conversations</h1>
              <p className="text-sm text-stone-600 leading-relaxed">
                Located on a quiet heights lane in Patan, Hearth & Table represents a gentle space where companions can pause, talk, and share healthy pasture plates under warm light.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200 pt-8">
              <div className="space-y-4 font-normal">
                <p>
                  Our oven operates at sunrise daily to ferments wild, whole-wheat potato sourdough loaves using pure Himalayan natural yeasts. We make a strict pledge to exclude commercial processing aids, chemical sweeteners, and heavy oils. 
                </p>
                <p>
                  Our milk travels directly from organic mountain cows, and our wild pine mushrooms are wood-foraged on mountain ranges surrounding the capital valley.
                </p>
              </div>
              <div className="bg-white border border-stone-200 p-8 rounded-lg text-center space-y-2">
                <span className="text-3xl font-serif text-[#9e2a2b] block mb-2">“</span>
                <p className="text-stone-600 font-serif italic text-xs leading-relaxed">
                  "Wholesome dining is not about complicated techniques. It is an honest celebration of seasonal ingredients, clean butter, and unhurried company."
                </p>
                <span className="text-[10px] font-bold uppercase text-stone-500 tracking-wider block pt-2">- Bakery Founder Cook</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= tab: RESERVATIONS ================= */}
        {activeTab === "reserve" && (
          <div className="py-16 px-4 animate-fadeIn">
            <div className="max-w-md mx-auto bg-white border border-stone-200 p-6 sm:p-8 rounded-lg text-left space-y-6 shadow-3xs">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-amber-800 px-2 py-0.5 rounded">
                  Table Reservation Demo
                </span>
                <h2 className="text-xl font-bold text-stone-950 font-serif">Schedule Your Seat</h2>
                <p className="text-xs text-stone-505 leading-relaxed">
                  Enter your info to request an ambient dinner table. We hold requested seats for exact 15 minutes past the reserved hour.
                </p>
              </div>

              {resSuccess ? (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded text-xs leading-relaxed">
                  <strong>Reservation Requested Successfully!</strong> We have registered a mock diner booking for <strong>{resForm.name}</strong> on {resForm.date} at {resForm.time} for {resForm.guests} guests.
                  <button onClick={() => { setResSuccess(false); setResForm({ date: "", time: "", guests: "2", name: "", phone: "" }); }} className="block mt-3 underline font-extrabold uppercase text-[9px] cursor-pointer">Request Another Slot</button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1">Your Full Name</label>
                    <input required type="text" value={resForm.name} onChange={(e) => setResForm({ ...resForm, name: e.target.value })} placeholder="Diner name" className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-amber-800" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-stone-505 mb-1">Date</label>
                      <input required type="date" value={resForm.date} onChange={(e) => setResForm({ ...resForm, date: e.target.value })} className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-amber-800" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-stone-505 mb-1">Preferred Hour</label>
                      <input required type="time" value={resForm.time} onChange={(e) => setResForm({ ...resForm, time: e.target.value })} className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-amber-800" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase text-stone-505 mb-1">Count of Guests</label>
                    <select value={resForm.guests} onChange={(e) => setResForm({ ...resForm, guests: e.target.value })} className="w-full px-3 py-1.5 border border-stone-250 rounded bg-stone-50 focus:outline-none focus:border-amber-800">
                      <option value="1">1 Person</option>
                      <option value="2">2 Diners</option>
                      <option value="4">4 Diners</option>
                      <option value="6">6 Diners</option>
                      <option value="8">8+ People Special</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-extrabold rounded uppercase tracking-wider transition-colors cursor-pointer text-xs">
                    Submit Dining Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 px-6 sm:px-8 text-center text-xs border-t border-stone-900">
        <p className="mb-2">© Hearth & Table Bakery Restaurant. All rights reserved.</p>
        <p className="text-stone-605">Kupondole Lane, Opposite Heights Public Park, Lalitpur</p>
      </footer>

    </div>
  );
};

export default RestaurantTemplate;
