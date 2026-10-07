import React, { useState } from "react";
import { siteConfig, PortfolioProject } from "./config/siteConfig";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { CaseStudyModal } from "./components/CaseStudyModal";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { PricingSection } from "./components/PricingSection";
import { AboutSection } from "./components/AboutSection";
import { FreeReviewSection } from "./components/FreeReviewSection";
import { Footer } from "./components/Footer";
import { LegalModal } from "./components/LegalModal";
import { SeoLandingModal } from "./components/SeoLandingModal";
import { ArrowUpRight, Phone } from "lucide-react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);
  const [selectedSeoSlug, setSelectedSeoSlug] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenReview = () => {
    scrollToSection("review");
  };

  const handleViewWork = () => {
    scrollToSection("work");
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#e8e8ea] flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        onOpenReview={handleOpenReview}
      />

      {/* Main Content Sections (Optimized with responsive mobile carousels and spacing) */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onOpenReview={handleOpenReview}
          onViewWork={handleViewWork}
        />

        {/* 2. Credibility / Problem + Before & After */}
        <ProblemSection />

        {/* 3. Selected Work (3 Core Projects with Expandable View) */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenReview={handleOpenReview}
        />

        {/* 4. Core Services (6 Concise Cards) */}
        <ServicesSection
          onOpenReview={handleOpenReview}
        />

        {/* 5. Simple Process */}
        <ProcessSection />

        {/* Compact Strip: Built for Local Service Businesses */}
        <IndustriesSection
          onOpenReview={handleOpenReview}
        />

        {/* 6. Pricing & Compact 1UP Care */}
        <PricingSection
          onOpenReview={handleOpenReview}
        />

        {/* 7. Founder / About (Michael Caprio) */}
        <AboutSection
          onOpenReview={handleOpenReview}
        />

        {/* 8. Free Website Review (Primary Conversion Funnel) */}
        <FreeReviewSection />
      </main>

      {/* 9. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenPrivacy={() => setLegalModalType("privacy")}
        onOpenTerms={() => setLegalModalType("terms")}
        onOpenReview={handleOpenReview}
        onSelectSeoPage={(slug) => setSelectedSeoSlug(slug)}
      />

      {/* Mobile Sticky Quick-Action Bar with Direct Call and Free Review */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1012]/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 flex items-center justify-between gap-2.5 shadow-2xl">
        <a
          href="tel:2034445273"
          className="flex-1 py-2.5 px-2 bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white border border-white/15 text-[11px] font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>CALL NOW</span>
        </a>

        <button
          onClick={handleOpenReview}
          className="flex-[1.4] py-2.5 px-3 bg-[#c5a059] hover:bg-[#d8b268] text-black text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap shadow-md active:scale-[0.98]"
        >
          <span>FREE WEBSITE REVIEW</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Interactive Case Study Modal (Shows Design Objectives & Scope) */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenReview={handleOpenReview}
      />

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Regional & Trade SEO Architecture Modal */}
      <SeoLandingModal
        slug={selectedSeoSlug}
        onClose={() => setSelectedSeoSlug(null)}
        onOpenReview={handleOpenReview}
      />
    </div>
  );
}
