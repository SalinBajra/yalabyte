import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Templates from "./pages/Templates";
import Contact from "./pages/Contact";

// Templates
import BusinessTemplate from "./templates/BusinessTemplate";
import LogisticsTemplate from "./templates/LogisticsTemplate";
import RestaurantTemplate from "./templates/RestaurantTemplate";
import ConsultingTemplate from "./templates/ConsultingTemplate";
import PortfolioTemplate from "./templates/PortfolioTemplate";
import ServiceProviderTemplate from "./templates/ServiceProviderTemplate";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [requestedTemplatePreset, setRequestedTemplatePreset] = useState<string>("business");

  // Map of static SEO titles requested by the user
  const SEO_TITLES: Record<string, string> = {
    home: "YalaByte | Professional Website Development Company",
    services: "Website Development Services | YalaByte",
    work: "Website Concepts & Work Demo | YalaByte",
    about: "About YalaByte | Website Development Yala (Patan, Lalitpur)",
    templates: "Website Templates for Businesses | YalaByte",
    contact: "Contact YalaByte | Start Your Website Project",
    "template-business": "Business Website Design Template | YalaByte Demo",
    "template-logistics": "Logistics & Courier Website Design Template | YalaByte Demo",
    "template-restaurant": "Restaurant & Cafe Website Design Template | YalaByte Demo",
    "template-consulting": "Consulting Firm Website Design Template | YalaByte Demo",
    "template-portfolio": "Personal Portfolio Website Design Template | YalaByte Demo",
    "template-service-provider": "Local Service Provider Website Design Template | YalaByte Demo"
  };

  // Map of dynamic SEO meta descriptions focusing on key services, professional website development, and YalaByte
  const SEO_DESCRIPTIONS: Record<string, string> = {
    home: "YalaByte provides high-performance professional website development, dynamic custom web applications, and responsive layouts tailored for modern businesses in Lalitpur, Nepal.",
    services: "Explore professional website development services from YalaByte. We build custom React architectures, speed-optimized corporate profiles, on-page SEO, and responsive design systems.",
    work: "View the YalaByte directory of custom layouts, live wireframe previews, and professional website development projects crafted with care for local and global enterprises.",
    about: "Discover YalaByte, a premier digital agency in Patan (Yala), Lalitpur. Learn about our commitment to clean code, responsive designs, and professional website development.",
    templates: "Choose from YalaByte's custom website templates designed for key sectors (restaurants, logistics, consulting, and creative portfolios). Fast, clean layouts focused on growth.",
    contact: "Contact YalaByte today for highly optimized, professional website development, transparent package pricing, and tailor-made database or digital strategy solutions.",
    "template-business": "Experience the modern business landing page layout by YalaByte. Excellent for commercial businesses, featuring premium styling and professional website development guidelines.",
    "template-logistics": "Demonstrating the high-speed logistics and shipping cargo page layout template from YalaByte, highlighting active tracker boxes and pricing estimation calculators.",
    "template-restaurant": "Test drive YalaByte's warm cafe and restaurant menu layout template, featuring clear category tabs, elegant seasonal headers, and easy reservation triggers.",
    "template-consulting": "Review the advisory and consulting website design layout template by YalaByte. Includes clean visual hierarchies, credential cards, and interactive diagnostic steps.",
    "template-portfolio": "Look through YalaByte's creative personal portfolio workspace template, customized with monospaced timeline details and minimal modern dark design grids.",
    "template-service-provider": "Try out the professional service provider layout design engineered by YalaByte. Fully optimized for high-conversion local directory and client service requests."
  };

  // Dynamically synchronize document.title and meta description with the active state route
  useEffect(() => {
    const title = SEO_TITLES[currentPage] || "YalaByte | Professional Website Development";
    document.title = title;

    const descriptionText = SEO_DESCRIPTIONS[currentPage] || "YalaByte provides professional website development, fast React architectures, and custom digital layouts optimized for speed and search visibility.";
    
    // Update or insert the meta description element in index.html head dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptionText);
  }, [currentPage]);

  // Synchronize browser history / URL pathnames where appropriate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/templates/business") setCurrentPage("template-business");
      else if (path === "/templates/logistics") setCurrentPage("template-logistics");
      else if (path === "/templates/restaurant") setCurrentPage("template-restaurant");
      else if (path === "/templates/consulting") setCurrentPage("template-consulting");
      else if (path === "/templates/portfolio") setCurrentPage("template-portfolio");
      else if (path === "/templates/service-provider") setCurrentPage("template-service-provider");
      else if (path === "/templates") setCurrentPage("templates");
      else if (path === "/services") setCurrentPage("services");
      else if (path === "/work") setCurrentPage("work");
      else if (path === "/about") setCurrentPage("about");
      else if (path === "/contact") setCurrentPage("contact");
      else setCurrentPage("home");
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState(); // Sync initial mount

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Custom router navigator that preserves pretty paths inside the browser
  const navigateTo = (page: string) => {
    let prettyPath = "/";
    if (page === "templates") prettyPath = "/templates";
    else if (page === "services") prettyPath = "/services";
    else if (page === "work") prettyPath = "/work";
    else if (page === "about") prettyPath = "/about";
    else if (page === "contact") prettyPath = "/contact";
    else if (page === "template-business") prettyPath = "/templates/business";
    else if (page === "template-logistics") prettyPath = "/templates/logistics";
    else if (page === "template-restaurant") prettyPath = "/templates/restaurant";
    else if (page === "template-consulting") prettyPath = "/templates/consulting";
    else if (page === "template-portfolio") prettyPath = "/templates/portfolio";
    else if (page === "template-service-provider") prettyPath = "/templates/service-provider";

    window.history.pushState(null, "", prettyPath);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Map beautiful template names back to the Contact option values
  const handleRequestTemplatePreset = (templateName: string) => {
    let formOptionValue = "";
    if (templateName.includes("Business")) formOptionValue = "business";
    else if (templateName.includes("Logistics")) formOptionValue = "logistics";
    else if (templateName.includes("Restaurant")) formOptionValue = "restaurant";
    else if (templateName.includes("Consulting")) formOptionValue = "consulting";
    else if (templateName.includes("Portfolio")) formOptionValue = "portfolio";
    else if (templateName.includes("Local") || templateName.includes("Service")) formOptionValue = "service-provider";
    else formOptionValue = "template";

    setRequestedTemplatePreset(formOptionValue);
    navigateTo("contact");
  };

  // Route components dispatcher
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            id="page-block-home"
            onNavigate={navigateTo}
            onNavigateToTemplate={(route) => {
              if (route.endsWith("/business")) navigateTo("template-business");
              else if (route.endsWith("/logistics")) navigateTo("template-logistics");
              else if (route.endsWith("/restaurant")) navigateTo("template-restaurant");
              else if (route.endsWith("/consulting")) navigateTo("template-consulting");
              else if (route.endsWith("/portfolio")) navigateTo("template-portfolio");
              else if (route.endsWith("/service-provider")) navigateTo("template-service-provider");
            }}
          />
        );
      case "services":
        return (
          <Services
            id="page-block-services"
            onNavigateToContact={() => navigateTo("contact")}
          />
        );
      case "work":
        return (
          <Work
            id="page-block-work"
            onNavigateToTemplate={(route) => {
              if (route.endsWith("/business")) navigateTo("template-business");
              else if (route.endsWith("/logistics")) navigateTo("template-logistics");
              else if (route.endsWith("/restaurant")) navigateTo("template-restaurant");
              else if (route.endsWith("/consulting")) navigateTo("template-consulting");
              else if (route.endsWith("/portfolio")) navigateTo("template-portfolio");
              else if (route.endsWith("/service-provider")) navigateTo("template-service-provider");
            }}
            onNavigateToContact={() => navigateTo("contact")}
          />
        );
      case "about":
        return (
          <About
            id="page-block-about"
          />
        );
      case "templates":
        return (
          <Templates
            id="page-block-templates"
            onNavigateToTemplate={(route) => {
              if (route.endsWith("/business")) navigateTo("template-business");
              else if (route.endsWith("/logistics")) navigateTo("template-logistics");
              else if (route.endsWith("/restaurant")) navigateTo("template-restaurant");
              else if (route.endsWith("/consulting")) navigateTo("template-consulting");
              else if (route.endsWith("/portfolio")) navigateTo("template-portfolio");
              else if (route.endsWith("/service-provider")) navigateTo("template-service-provider");
            }}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "contact":
        return (
          <Contact
            id="page-block-contact"
            initialWebsiteType={requestedTemplatePreset}
          />
        );

      // Interactive Web Templates (Self-contained standalone viewports)
      case "template-business":
        return (
          <BusinessTemplate
            id="live-template-business"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "template-logistics":
        return (
          <LogisticsTemplate
            id="live-template-logistics"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "template-restaurant":
        return (
          <RestaurantTemplate
            id="live-template-restaurant"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "template-consulting":
        return (
          <ConsultingTemplate
            id="live-template-consulting"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "template-portfolio":
        return (
          <PortfolioTemplate
            id="live-template-portfolio"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );
      case "template-service-provider":
        return (
          <ServiceProviderTemplate
            id="live-template-service-provider"
            onBackToTemplates={() => navigateTo("templates")}
            onRequestTemplate={handleRequestTemplatePreset}
          />
        );

      default:
        return (
          <div className="py-24 text-center">
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            <button onClick={() => navigateTo("home")} className="mt-4 text-blue-600 underline">
              Return Home
            </button>
          </div>
        );
    }
  };

  // Check if current route is a standalone preview template page
  const isStandaloneTemplate = currentPage.startsWith("template-");

  if (isStandaloneTemplate) {
    return <main className="flex-grow font-sans">{renderPageContent()}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] transition-colors">
      <Header
        id="yalabyte-primary-header"
        currentPage={currentPage}
        onNavigate={navigateTo}
      />
      
      <main className="flex-grow">
        {renderPageContent()}
      </main>

      <Footer
        id="yalabyte-primary-footer"
        onNavigate={navigateTo}
      />

      {/* Interactive Support Chatbot Assistant */}
      <ChatbotWidget />
    </div>
  );
}
