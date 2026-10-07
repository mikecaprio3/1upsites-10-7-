import React, { useState, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { Layers, Smartphone, FileText, Search, Sparkles, Cloud, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServicesSectionProps {
  onOpenReview: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenReview }) => {
  const [showFullDetailsModal, setShowFullDetailsModal] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const serviceIcons: Record<string, React.ReactNode> = {
    "custom-design": <Layers className="w-5 h-5 text-[#c5a059]" />,
    "mobile-optimization": <Smartphone className="w-5 h-5 text-[#c5a059]" />,
    "lead-systems": <FileText className="w-5 h-5 text-[#c5a059]" />,
    "local-seo": <Search className="w-5 h-5 text-[#c5a059]" />,
    "copy-content": <Sparkles className="w-5 h-5 text-[#c5a059]" />,
    "hosting-support": <Cloud className="w-5 h-5 text-[#c5a059]" />,
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.8));
      setActiveServiceIndex(Math.min(Math.max(index, 0), siteConfig.coreServices.length - 1));
    }
  };

  const scrollToService = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.82;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveServiceIndex(index);
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#0e1012] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Full-Spectrum Digital Infrastructure
            </div>
            <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Everything you need to level up your online presence.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              We build websites tailored specifically to how customers research, evaluate, and choose local businesses.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile Swipe Notice & Navigation Counter */}
        <div className="md:hidden flex items-center justify-between mb-3 text-xs">
          <span className="font-mono text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
            {`0${activeServiceIndex + 1} / 0${siteConfig.coreServices.length}: ${siteConfig.coreServices[activeServiceIndex]?.title}`}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToService(Math.max(activeServiceIndex - 1, 0))}
              disabled={activeServiceIndex === 0}
              className={`p-1 rounded-xs border border-white/10 ${
                activeServiceIndex === 0 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToService(Math.min(activeServiceIndex + 1, siteConfig.coreServices.length - 1))}
              disabled={activeServiceIndex === siteConfig.coreServices.length - 1}
              className={`p-1 rounded-xs border border-white/10 ${
                activeServiceIndex === siteConfig.coreServices.length - 1 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Concise Services (Swipeable on Mobile, 3-Column on Desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto items-stretch"
        >
          {siteConfig.coreServices.map((service, idx) => (
            <div
              key={service.id}
              className="w-[82vw] max-w-[310px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full"
            >
              <div className="h-full p-5 sm:p-6 bg-[#131518] border border-white/[0.08] hover:border-[#c5a059]/40 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-sm flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-sm bg-[#1a1d20] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-[#c5a059] transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#c5a059]">Standard deliverable</span>
                  <button
                    onClick={() => setShowFullDetailsModal(true)}
                    className="text-[10px] sm:text-[11px] text-neutral-400 group-hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer"
                  >
                    Details <ArrowRight className="w-3 h-3 group-arrow-hover" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="md:hidden flex items-center justify-center gap-1.5 mt-4">
          {siteConfig.coreServices.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToService(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeServiceIndex === i ? "w-5 bg-[#c5a059]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`View service ${i + 1}`}
            />
          ))}
        </div>

        {/* Services Bottom Strip */}
        <ScrollReveal direction="up" delay={160} duration={650}>
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-[#141619] border border-white/10 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="font-display text-sm sm:text-base font-bold text-white">
                Not sure what your site needs?
              </div>
              <p className="text-xs text-neutral-400">
                We'll review your current website and give you an honest appraisal with actionable recommendations.
              </p>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto justify-center">
              <button
                onClick={() => setShowFullDetailsModal(true)}
                className="btn-secondary-interaction px-3.5 sm:px-4 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xs text-xs font-semibold text-neutral-300 hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                View Full Specs
              </button>
              <button
                onClick={onOpenReview}
                className="btn-primary-interaction group px-4 sm:px-5 py-2 sm:py-2.5 bg-[#c5a059] hover:bg-[#d8b268] text-black rounded-xs text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>Free Website Review</span>
                <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full Specs Modal */}
      {showFullDetailsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#121417] border border-white/15 rounded-md max-w-2xl w-full max-h-[85vh] flex flex-col text-neutral-200 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#16181b]">
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  1UpSites Core Deliverables & Technical Specs
                </h3>
                <p className="text-xs text-[#c5a059] font-mono">
                  Engineered for local business authority & customer conversion
                </p>
              </div>
              <button
                onClick={() => setShowFullDetailsModal(false)}
                className="text-neutral-400 hover:text-white p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs text-neutral-300">
              {siteConfig.coreServices.map((service, i) => (
                <div key={i} className="p-4 bg-[#17191d] border border-white/10 rounded-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-white">{service.title}</span>
                    <span className="text-[10px] font-mono text-[#c5a059] bg-[#c5a059]/10 px-2 py-0.5 rounded">Core Spec</span>
                  </div>
                  <p className="text-neutral-400 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] text-neutral-300 border-t border-white/5">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#c5a059]" />
                      <span>Zero template lock-in</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-[#c5a059]" />
                      <span>Speed benchmarked &gt; 90+ mobile</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/10 bg-[#16181b] flex justify-end gap-3">
              <button
                onClick={() => setShowFullDetailsModal(false)}
                className="px-4 py-2 text-xs text-neutral-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowFullDetailsModal(false);
                  onOpenReview();
                }}
                className="btn-primary-interaction px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
