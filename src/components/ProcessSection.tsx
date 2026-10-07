import React, { useState, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { ScrollReveal } from "./ScrollReveal";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Sparkles, Phone, ChevronLeft, ChevronRight } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const { ref: lineRef, isVisible: lineVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    once: true,
  });

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setActiveStepIndex(Math.min(Math.max(index, 0), siteConfig.process.length - 1));
    }
  };

  const scrollToStep = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveStepIndex(index);
    }
  };

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              The Expedited 80/20 Process
            </div>
            <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              SEE THE DIRECTION BEFORE YOU COMMIT TO WEEKS OF BACK-AND-FORTH.
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              <p>
                We don’t start your first design call with a blank page.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400">
                Before the meeting, we research your business, services, reviews, competitors, and existing online presence and build the majority of the website direction in advance.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal 80 / 20 Visual Element */}
        <ScrollReveal direction="up" delay={80} duration={700}>
          <div className="mb-8 sm:mb-14 p-4 sm:p-6 bg-[#131518] border border-white/10 rounded-sm relative overflow-hidden">
            {/* Subtle Top Accent Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                The 80 / 20 Advantage
              </span>
              <span className="text-[11px] sm:text-xs text-neutral-400 font-medium">
                Most of the heavy lifting happens before the call.
              </span>
            </div>

            {/* Split Visual Progress Indicator */}
            <div className="space-y-2">
              <div className="h-2.5 sm:h-3 w-full bg-[#1b1e22] rounded-xs flex overflow-hidden border border-white/5">
                <div
                  style={{
                    transition: "width 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className={`bg-[#c5a059] h-full ${
                    lineVisible ? "w-[80%]" : "w-0"
                  }`}
                />
                <div
                  style={{
                    transition: "width 1000ms cubic-bezier(0.22, 1, 0.36, 1) 300ms",
                  }}
                  className={`bg-white/30 h-full ${
                    lineVisible ? "w-[20%]" : "w-0"
                  }`}
                />
              </div>

              {/* Proportional Descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-3">
                <div className="flex items-start gap-3 p-2.5 sm:p-3 bg-[#181a1d] border border-[#c5a059]/30 rounded-xs">
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#c5a059] shrink-0 leading-none">
                    80%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Prepared before the design review
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                      Architecture, layout, mobile design & initial copy crafted in advance.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2.5 sm:p-3 bg-[#181a1d] border border-white/10 rounded-xs">
                  <div className="font-display text-xl sm:text-2xl font-bold text-white shrink-0 leading-none">
                    20%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Refined with your feedback
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">
                      Tailored to your voice, custom project photos & exact operational preferences.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile Swipe Notice & Navigation Counter */}
        <div className="sm:hidden flex items-center justify-between mb-3 text-xs">
          <span className="font-mono text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
            {`Step ${siteConfig.process[activeStepIndex]?.step}: ${siteConfig.process[activeStepIndex]?.name}`}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToStep(Math.max(activeStepIndex - 1, 0))}
              disabled={activeStepIndex === 0}
              className={`p-1 rounded-xs border border-white/10 ${
                activeStepIndex === 0 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToStep(Math.min(activeStepIndex + 1, siteConfig.process.length - 1))}
              disabled={activeStepIndex === siteConfig.process.length - 1}
              className={`p-1 rounded-xs border border-white/10 ${
                activeStepIndex === siteConfig.process.length - 1 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Next step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sequential 4-Step Process (Swipeable on Mobile, 4-Column on Desktop) */}
        <div ref={lineRef} className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/[0.06] -z-0">
            <div
              style={{
                transition: "transform 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
                transformOrigin: "left",
              }}
              className={`h-full bg-gradient-to-r from-[#c5a059]/40 via-[#c5a059]/60 to-[#c5a059]/10 ${
                lineVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 sm:pb-0 px-4 sm:px-0 -mx-4 sm:mx-auto relative z-10 items-stretch"
          >
            {siteConfig.process.map((step) => (
              <div
                key={step.step}
                className="w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-auto sm:shrink sm:max-w-none flex flex-col h-full"
              >
                <div className="h-full bg-[#131518] border border-white/[0.08] p-5 sm:p-6 rounded-sm flex flex-col justify-between group hover:border-[#c5a059]/40 hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <div className="space-y-2.5 sm:space-y-3">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-[#c5a059] block border-b border-white/[0.06] pb-2 transition-transform duration-300 group-hover:translate-x-0.5">
                      {step.step}
                    </span>

                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                      {step.name}
                    </h3>

                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {step.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 mt-4">
          {siteConfig.process.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToStep(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeStepIndex === i ? "w-5 bg-[#c5a059]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`View step ${i + 1}`}
            />
          ))}
        </div>

        {/* Process Supporting Message */}
        <ScrollReveal direction="up" delay={160} duration={700}>
          <div className="mt-8 sm:mt-14 p-5 sm:p-7 bg-[#141619] border border-white/10 rounded-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 max-w-3xl">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                MOST AGENCIES START DESIGNING AFTER THE FIRST MEETING.
              </div>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-snug">
                WE PREFER TO SHOW YOU SOMETHING FIRST.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                Because we intentionally keep our client volume controlled, we can put more work into each project upfront. That means your first design conversation is about refining something real instead of spending an hour talking about what a future website might look like.
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <a
                href="tel:2034445273"
                className="btn-secondary-interaction group inline-flex items-center justify-center gap-2 w-full lg:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#c5a059]/40 text-neutral-200 hover:text-white rounded-xs text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#c5a059]" />
                <span>CALL NOW: 203-444-5273</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
