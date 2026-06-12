export interface Template {
  id: string;
  name: string;
  bestFor: string;
  description: string;
  route: string;
  style: string;
  placeholderName: string;
  imageUrl: string;
}

export const templates: Template[] = [
  {
    id: "business",
    name: "Business Website Template",
    bestFor: "Small businesses, startups, agencies, and service companies.",
    description: "A clean, professional, and content-rich layout to outline your business history, list core services, and capture inquiries.",
    route: "/templates/business",
    style: "Clean, professional corporate layout with elegant typography and deep navy tones.",
    placeholderName: "Your Business Name",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "logistics",
    name: "Logistics & Courier Website Template",
    bestFor: "Courier companies, delivery services, logistics providers, and transport companies.",
    description: "A practical, service-focused design featuring service area listings, quick quote forms, and shipment status UI placeholders.",
    route: "/templates/logistics",
    style: "Clear, industrial layout with modern slate-grey and high-contrast accents.",
    placeholderName: "Your Logistics Company",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "restaurant",
    name: "Restaurant Website Template",
    bestFor: "Restaurants, cafes, bakeries, cloud kitchens, and food businesses.",
    description: "A warm, visual layout featuring menu previews, featured chef specials, contact details, and dynamic reservation inquiries.",
    route: "/templates/restaurant",
    style: "Warm, ambient editorial style with soft cream backgrounds and elegant serif accents.",
    placeholderName: "Your Restaurant Name",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "consulting",
    name: "Consulting Website Template",
    bestFor: "Consultants, advisors, coaches, agencies, and professional service providers.",
    description: "A professional, trustworthy, text-focused design that presents advisor credentials, structured process blocks, and booking forms.",
    route: "/templates/consulting",
    style: "Trustworthy theme in calm charcoal, warm accents, and clean borders.",
    placeholderName: "Your Consulting Firm",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "portfolio",
    name: "Personal Portfolio Template",
    bestFor: "Freelancers, professionals, creators, consultants, designers, developers, and job seekers.",
    description: "A sleek, clean layout to highlight skills, project galleries, professional logs/experience, and client-facing inquiry buttons.",
    route: "/templates/portfolio",
    style: "Minimalist layout with bold typographic weight and spacious white areas.",
    placeholderName: "Your Name",
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "service-provider",
    name: "Local Service Provider Template",
    bestFor: "Repair services, cleaning companies, salons, training centers, home services, and local businesses.",
    description: "A trustworthy, conversion-focused design optimized for service listings, service area guides, and client book-ins.",
    route: "/templates/service-provider",
    style: "Direct, high-readability design with action-oriented sections.",
    placeholderName: "Your Service Business",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  }
];
