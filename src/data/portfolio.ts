export interface PortfolioConcept {
  id: string;
  title: string;
  category: string;
  description: string;
  templateRoute: string;
  tags: string[];
}

export const portfolioConcepts: PortfolioConcept[] = [
  {
    id: "business-concept",
    title: "Business Website Concept",
    category: "Corporate & Agency",
    description: "A clean, multi-section business presentation that helps corporate services highlight their brand, outline services, and collect customer leads.",
    templateRoute: "/templates/business",
    tags: ["Responsive Layout", "Contact forms", "SEO Foundation"]
  },
  {
    id: "logistics-concept",
    title: "Logistics Website Concept",
    category: "Logistics & Transport",
    description: "A functional structure tailored for heavy transport, courier, or delivery companies, featuring service area guides and price request modules.",
    templateRoute: "/templates/logistics",
    tags: ["Service Areas", "Quote Requests", "Shipment Status UI"]
  },
  {
    id: "restaurant-concept",
    title: "Restaurant Website Concept",
    category: "Food & Hospitality",
    description: "An elegant, sensory design for cafes and restaurants, with custom styled menus, location maps, and interactive reservation systems.",
    templateRoute: "/templates/restaurant",
    tags: ["Digital Menu", "Location Guide", "Reservation Form"]
  },
  {
    id: "consulting-concept",
    title: "Consulting Website Concept",
    category: "Professional Services",
    description: "A clear and direct structure for specialized consultants or expert advisors to showcase core advisory areas and book discovery meetings.",
    templateRoute: "/templates/consulting",
    tags: ["Expert Profile", "Booking Form", "Step-by-Step Process"]
  },
  {
    id: "portfolio-concept",
    title: "Personal Portfolio Concept",
    category: "Personal & Freelance",
    description: "A sleek, highly readable, personal website structure for independent experts, designers, or creators wanting to list historical work and land contracts.",
    templateRoute: "/templates/portfolio",
    tags: ["Skill Grid", "Project Gallery", "Personal Intro"]
  },
  {
    id: "service-provider-concept",
    title: "Local Service Website Concept",
    category: "Local Businesses",
    description: "A high-conversion landing structure designed specifically for plumbing, electrical, cleaning, styling, or local contractors needing active phone/form bookings.",
    templateRoute: "/templates/service-provider",
    tags: ["Local SEO", "High Legibility", "Quick Inquiry Form"]
  }
];
