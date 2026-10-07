import React, { useState, useRef } from "react";
import { siteConfig, PortfolioProject } from "../config/siteConfig";
import { ArrowUpRight, ArrowRight, Smartphone, Layers, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenReview: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenReview,
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveProjectIndex(Math.min(Math.max(index, 0), siteConfig.portfolio.length - 1));
    }
  };

  const scrollToProject = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.88;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveProjectIndex(index);
    }
  };

  return (
    <section id="work" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="max-w-2xl space-y-2.5 sm:space-y-3">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
                Featured Client Work
              </div>
              <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                Websites built to put your business a level above.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Real digital platforms and business websites engineered to establish authority, earn customer trust, and drive meaningful inquiries.
              </p>
            </div>

            <div className="text-[11px] sm:text-xs font-mono text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/20 px-3 py-1.5 rounded-xs self-start md:self-end">
              100% Real Client Work · Verified Delivery
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Swipe Notice & Navigation Counter */}
        <div className="lg:hidden flex items-center justify-between mb-3 text-xs">
          <span className="font-mono text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
            {`Project ${activeProjectIndex + 1} of ${siteConfig.portfolio.length}: ${siteConfig.portfolio[activeProjectIndex]?.name}`}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToProject(Math.max(activeProjectIndex - 1, 0))}
              disabled={activeProjectIndex === 0}
              className={`p-1 rounded-xs border border-white/10 ${
                activeProjectIndex === 0 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToProject(Math.min(activeProjectIndex + 1, siteConfig.portfolio.length - 1))}
              disabled={activeProjectIndex === siteConfig.portfolio.length - 1}
              className={`p-1 rounded-xs border border-white/10 ${
                activeProjectIndex === siteConfig.portfolio.length - 1 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2 Core Real Work Projects Grid (Swipeable on Mobile, 2-Column on Desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-auto max-w-6xl items-stretch"
        >
          {siteConfig.portfolio.map((project) => (
            <div
              key={project.id}
              className="w-[88vw] max-w-[400px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none flex flex-col h-full"
            >
              <div className="card-premium-hover h-full bg-[#131518] border border-white/[0.08] hover:border-[#c5a059]/40 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl">
                <div>
                  {/* Top Bar with Real Project Badge & Metadata */}
                  <div className="p-3.5 sm:p-5 pb-2.5 sm:pb-3 border-b border-white/[0.06] flex items-center justify-between bg-[#15181b]">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider text-black bg-[#c5a059] px-2 sm:px-2.5 py-0.5 rounded-xs">
                        {project.badge}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-[#c5a059] font-medium">
                        {project.industry}
                      </span>
                    </div>

                    <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400">
                      {project.location || project.projectType}
                    </div>
                  </div>

                  {/* Primary Desktop Screenshot Presentation */}
                  <div className="p-3 sm:p-4 bg-[#0d0e10]">
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative aspect-[16/9] w-full bg-[#08090a] rounded border border-white/10 overflow-hidden cursor-pointer group/screen transition-all duration-300 hover:border-[#c5a059]/50 flex items-center justify-center p-1 sm:p-2"
                      title="Click to view full case study and all screens"
                    >
                      {/* Browser Chrome Bar */}
                      <div className="absolute top-0 left-0 right-0 h-5 sm:h-6 bg-[#16181b] border-b border-white/[0.08] px-2 sm:px-2.5 flex items-center justify-between z-10">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
                        </div>
                        <div className="text-[8px] sm:text-[9px] font-mono text-neutral-400 truncate max-w-[150px]">
                          {project.id === "tradegram" ? "tradegram.app" : "condorcoffee.com"}
                        </div>
                        <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400">LIVE</span>
                      </div>

                      {/* Primary Desktop Image */}
                      <div className="w-full h-full pt-4 sm:pt-5 flex items-center justify-center">
                        <img
                          src={project.desktopHero}
                          alt={`${project.name} primary desktop interface`}
                          className="w-full h-full object-contain rounded-xs transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/screen:scale-[1.01]"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Hover overlay prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                        <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#c5a059] text-black text-[11px] sm:text-xs font-bold font-mono uppercase tracking-wider rounded-xs shadow-lg flex items-center gap-1.5">
                          <span>Inspect Screens</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Previews Row (Secondary Desktop Preview & Mobile Phone Mockup) */}
                  <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-1 bg-[#0d0e10] border-b border-white/[0.06]">
                    <div className="grid grid-cols-12 gap-2 sm:gap-3 items-center">
                      {/* Secondary Desktop Thumbnail */}
                      <div
                        onClick={() => onSelectProject(project)}
                        className="col-span-7 bg-[#15181b] border border-white/10 hover:border-[#c5a059]/40 rounded-xs p-1.5 sm:p-2 cursor-pointer transition-all flex items-center gap-2 sm:gap-2.5"
                      >
                        <div className="w-12 sm:w-16 h-8 sm:h-10 bg-[#090a0c] rounded-xs border border-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                          <img
                            src={project.desktopSecondary}
                            alt={`${project.name} secondary screen preview`}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] sm:text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span>Secondary</span>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-neutral-300 truncate">
                            Dashboard View
                          </div>
                        </div>
                      </div>

                      {/* Mobile Phone Mockup Thumbnail */}
                      <div
                        onClick={() => onSelectProject(project)}
                        className="col-span-5 bg-[#15181b] border border-white/10 hover:border-[#c5a059]/40 rounded-xs p-1.5 sm:p-2 cursor-pointer transition-all flex items-center gap-1.5 sm:gap-2"
                      >
                        <div className="w-6 sm:w-7 h-8 sm:h-10 bg-[#090a0c] rounded-xs border border-white/20 overflow-hidden shrink-0 flex items-center justify-center p-0.5">
                          <img
                            src={project.mobileImage}
                            alt={`${project.name} mobile phone preview`}
                            className="w-full h-full object-cover rounded-xs"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] sm:text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-semibold flex items-center gap-1">
                            <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span>Mobile</span>
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-neutral-300 truncate">
                            Responsive
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card Body */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#c5a059] transition-colors duration-200 leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-normal mt-1 sm:mt-1.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Design Objective Block */}
                    <div className="p-2.5 sm:p-3.5 bg-[#171a1d] border border-white/[0.06] rounded-xs space-y-0.5 sm:space-y-1">
                      <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                        Design Objective
                      </div>
                      <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-normal">
                        {project.designObjective}
                      </p>
                    </div>

                    {/* Scope Deliverable Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5 sm:pt-1">
                      {project.scope.slice(0, 3).map((item, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] sm:text-[10px] font-mono bg-white/5 border border-white/10 text-neutral-300 px-2 py-0.5 rounded-xs flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#c5a059]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="p-4 sm:p-6 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-white/[0.04] hover:bg-[#c5a059] hover:!text-black group-hover:border-[#c5a059]/40 border border-white/10 transition-all duration-200 rounded-xs text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-200 flex items-center justify-between cursor-pointer active:scale-[0.98]"
                  >
                    <span>Inspect Project Breakdown & Screens</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-arrow-hover" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
          {siteConfig.portfolio.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToProject(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeProjectIndex === i ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`View project ${i + 1}`}
            />
          ))}
        </div>

        {/* Supporting Bottom Row */}
        <ScrollReveal direction="up" delay={160} duration={650}>
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto p-4 sm:p-6 bg-[#131518] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono uppercase tracking-wider text-[#c5a059] font-semibold">
                Tailored To Your Business Needs
              </div>
              <p className="text-xs text-neutral-300">
                Whether you need a focused one-page Launch experience or an expanded Growth site with dedicated service pages, we build what fits your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenReview}
                className="btn-primary-interaction group w-full sm:w-auto px-5 py-2.5 bg-[#c5a059] hover:bg-[#d8b268] text-black text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <span>GET A FREE WEBSITE REVIEW</span>
                <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
              </button>

              <a
                href="tel:2034445273"
                className="btn-secondary-interaction group w-full sm:w-auto px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
