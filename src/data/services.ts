export interface Service {
  id: string;
  title: string;
  description: string;
  includes: string[];
  note?: string;
  iconName: string; // Used to pick icons from Lucide
}

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Website Development",
    description: "A professional website for your company, service, or business. Built with clear pages, responsive design, and a structure that helps visitors understand what you offer.",
    includes: [
      "Home page",
      "About page",
      "Services page",
      "Contact page",
      "Responsive design",
      "Contact form",
      "Basic SEO setup"
    ],
    iconName: "Briefcase"
  },
  {
    id: "landing-pages",
    title: "Landing Page Development",
    description: "A focused page for a specific service, campaign, product, offer, or lead generation purpose.",
    includes: [
      "Clear headline",
      "Service or offer section",
      "Benefits and features layout",
      "Inquiry or lead generation form",
      "Call-to-action buttons",
      "Mobile-friendly layout"
    ],
    iconName: "FileText"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "For businesses that already have a website but need a cleaner, more modern, and better-organized version.",
    includes: [
      "Layout improvement",
      "Content structure improvement",
      "Mobile responsiveness enhancement",
      "Visual cleanup",
      "Contact form improvement",
      "Basic SEO cleanup"
    ],
    iconName: "RefreshCw"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Website Development",
    description: "A professional website for individuals, freelancers, consultants, creators, and professionals who want to present their work and experience.",
    includes: [
      "Personal introduction",
      "Skills or services lists",
      "Project and work showcase",
      "Experience and career section",
      "Contact form",
      "Resume or profile link placeholder"
    ],
    iconName: "User"
  },
  {
    id: "template-based",
    title: "Template-Based Website Development",
    description: "A faster website option using ready-to-customize templates. Suitable for businesses that want a clean website with a quicker launch timeline.",
    includes: [
      "Template selection",
      "Brand color adjustments",
      "Content and text replacement",
      "Page hierarchy customization",
      "Contact form setup",
      "Launch support"
    ],
    iconName: "Layout"
  },
  {
    id: "custom-websites",
    title: "Custom Website Development",
    description: "A more tailored website approach for businesses that need unique layouts, custom sections, or a more detailed brand presentation.",
    includes: [
      "Custom page structures",
      "Unique layout planning",
      "Custom designed sections",
      "Fully responsive responsive design",
      "Contact forms & lead capture",
      "Basic SEO setup"
    ],
    iconName: "Code"
  },
  {
    id: "basic-seo",
    title: "Basic SEO Setup",
    description: "We build websites with basic SEO structure so search engines can understand the pages better.",
    includes: [
      "Optimized page titles",
      "Meta descriptions",
      "Correct heading hierarchy (H1-H4)",
      "Image alt text guidelines",
      "Clean URLs structure",
      "Sitemap guidance",
      "Google Search Console submission guidance"
    ],
    note: "We do not guarantee Google rankings, but we build websites with SEO-friendly foundations that support long-term visibility.",
    iconName: "Search"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Optional support to keep your website updated and working properly.",
    includes: [
      "Content and text updates",
      "Minor layout updates and tweaks",
      "Form submission testing",
      "Speed and performance checks",
      "Security update guidance",
      "Backup guidance and schedule setup"
    ],
    iconName: "Settings"
  }
];

export const coreServicesPreview = [
  {
    id: "business-websites",
    title: "Business Websites",
    description: "Professional websites for businesses that need a clear online presence.",
    iconName: "Briefcase"
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Focused pages designed for campaigns, offers, services, or lead generation.",
    iconName: "FileText"
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "Clean redesigns for outdated websites that need better structure and presentation.",
    iconName: "RefreshCw"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description: "Personal and professional websites for freelancers, consultants, and creators.",
    iconName: "User"
  },
  {
    id: "basic-seo",
    title: "Basic SEO Setup",
    description: "SEO-friendly page titles, headings, meta descriptions, image alt text, and clean structure.",
    iconName: "Search"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    description: "Support for updates, small changes, form testing, and website improvements.",
    iconName: "Settings"
  }
];
