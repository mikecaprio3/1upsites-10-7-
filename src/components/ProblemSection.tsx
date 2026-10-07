import React, { useState, useRef, useEffect } from "react";
import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const COMMON_PROBLEMS = [
  "Looks outdated or generic",
  "Weak mobile experience",
  "Hard to contact on the go",
  "No clear path to inquire",
  "Weak trust signals",
  "Doesn’t reflect the quality of the business",
];

const WHAT_1UP_IMPROVES = [
  "Premium first impression",
  "Mobile-first usability",
  "Clear calls to action",
  "Better trust presentation",
  "Cleaner service structure",
  "Stronger inquiry flow",
];

export const ProblemSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveCard(Math.min(Math.max(index, 0), 1));
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth * 0.88;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveCard(index);
    }
  };

  return (
    <section id="problem" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              The First Impression Gap
            </div>
            <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Your business may be great. Your website should look like it.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Your website is often a customer's first impression of your business. If it feels outdated, confusing, or difficult to use on a phone, the quality of your actual work may never get a chance to speak for itself.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile Swipe Notice & Navigation Indicator */}
        <div className="md:hidden flex items-center justify-between mb-3 text-xs">
          <span className="font-mono text-[11px] text-[#c5a059] uppercase tracking-wider font-semibold">
            {activeCard === 0 ? "1 / 2: Outdated Reality" : "2 / 2: The 1Up Standard"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => scrollToCard(0)}
              disabled={activeCard === 0}
              className={`p-1 rounded-xs border border-white/10 ${
                activeCard === 0 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToCard(1)}
              disabled={activeCard === 1}
              className={`p-1 rounded-xs border border-white/10 ${
                activeCard === 1 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Two-Column Value Comparison (Swipeable on Mobile, 2-Column Grid on Desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto max-w-5xl items-stretch"
        >
          {/* LEFT COLUMN: Common Problems with Outdated Websites */}
          <div className="w-[86vw] max-w-[360px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full">
            <div className="h-full bg-[#121417] border border-white/10 hover:border-red-500/30 rounded-sm p-5 sm:p-8 flex flex-col justify-between transition-colors duration-300">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b border-white/[0.08]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xs bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold">
                      Outdated Reality
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                      Common problems with outdated websites
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5">
                  {COMMON_PROBLEMS.map((problem, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-300">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-xs bg-red-950/40 border border-red-500/25 flex items-center justify-center text-red-400 text-[10px] sm:text-xs shrink-0 mt-0.5 font-mono">
                        ✕
                      </span>
                      <span className="leading-snug">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-white/[0.06] text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                <span className="text-neutral-300 font-medium">The Result:</span> When prospective clients can't immediately verify your quality, they hesitate or look for someone else.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: What 1UpSites Improves */}
          <div className="w-[86vw] max-w-[360px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full">
            <div className="h-full bg-[#15181b] border-2 border-[#c5a059] shadow-[0_0_35px_rgba(197,160,89,0.15)] rounded-sm p-5 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2.5 pb-3 sm:pb-4 border-b border-white/[0.08]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xs bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                      The 1Up Standard
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                      What 1UpSites improves
                    </h3>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5">
                  {WHAT_1UP_IMPROVES.map((improvement, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-neutral-200">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-xs bg-[#c5a059]/20 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] text-[10px] sm:text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-snug font-medium text-white">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-white/[0.06] text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                <span className="text-[#c5a059] font-semibold">The Standard:</span> Built cleanly around your actual business so your first impression reflects your actual craft.
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => scrollToCard(0)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              activeCard === 0 ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
            }`}
            aria-label="View Outdated Reality card"
          />
          <button
            onClick={() => scrollToCard(1)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              activeCard === 1 ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
            }`}
            aria-label="View The 1Up Standard card"
          />
        </div>

        {/* Bottom Summary Line */}
        <ScrollReveal direction="up" delay={160} duration={650}>
          <div className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto px-4">
            <p className="font-display text-base sm:text-xl font-semibold text-white tracking-tight">
              “A strong business deserves an online presence that builds trust immediately.”
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
