import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { ArrowUpRight, Phone, ShieldCheck, Smartphone, CheckCircle } from "lucide-react";

interface HeroProps {
  onOpenReview: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReview }) => {
  const [mounted, setMounted] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    // Trigger initial staggered entrance
    const timer = setTimeout(() => {
      setMounted(true);
    }, 40);

    // Subtle scroll-linked movement on desktop only (15–20px max)
    const handleScroll = () => {
      if (
        window.innerWidth >= 1024 &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        const offset = Math.min(window.scrollY * 0.06, 18);
        setParallaxY(offset);
      } else {
        setParallaxY(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-20 pb-8 sm:pt-28 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background Architectural Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none opacity-20">
        <div className="absolute top-6 left-1/4 w-[420px] h-[280px] bg-[#c5a059]/15 blur-[120px] rounded-full" />
        <div className="absolute top-14 right-1/4 w-[320px] h-[220px] bg-white/[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Column: Core Positioning Copy with tightened, immediate spacing */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* 1. Subtle editorial kicker - moved closer to top and main headline */}
            <div
              style={{
                transition: "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "40ms",
              }}
              className={`flex flex-wrap items-center gap-1.5 sm:gap-3 text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-[#c5a059] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span>{siteConfig.contact.serviceArea}</span>
              <span className="text-white/30" aria-hidden="true">/</span>
              <span>Level Up Your Online Presence</span>
            </div>

            {/* 2. Oversized Major Headline */}
            <h1
              style={{
                transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "120ms",
              }}
              className={`font-display text-2.5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] sm:leading-[1.1] text-balance ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              Your business deserves a website that’s a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#c5a059]">
                level above.
              </span>
            </h1>

            {/* 3. Supporting Copy */}
            <p
              style={{
                transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "200ms",
              }}
              className={`text-sm sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-normal ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              {siteConfig.subTagline}
            </p>

            {/* 4. CTAs - Primary Review & Direct Call Now */}
            <div
              style={{
                transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "280ms",
              }}
              className={`pt-0.5 sm:pt-1 space-y-2.5 sm:space-y-3 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
                <button
                  onClick={onOpenReview}
                  className="btn-primary-interaction group px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-sm shadow-lg hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <span>{siteConfig.cta.primary.label}</span>
                  <ArrowUpRight className="w-4 h-4 group-arrow-hover" />
                </button>

                <a
                  href="tel:2034445273"
                  className="btn-secondary-interaction group px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#c5a059]/40 rounded-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>CALL NOW</span>
                </a>
              </div>

              {/* Supporting microcopy under CTAs */}
              <p className="text-[11px] sm:text-xs text-neutral-400 font-normal">
                Prefer to talk now? Call Michael directly at{" "}
                <a
                  href="tel:2034445273"
                  className="text-neutral-300 hover:text-[#c5a059] font-medium underline underline-offset-2 transition-colors"
                >
                  203-444-5273
                </a>
                .
              </p>
            </div>

            {/* 5. Subtle Trust Line */}
            <div
              style={{
                transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "360ms",
              }}
              className={`pt-2 border-t border-white/[0.06] flex items-center gap-2 text-xs sm:text-sm text-neutral-400 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
              <span>{siteConfig.trustLine}</span>
            </div>
          </div>

          {/* Right Column: Real Project Showcase Frame (TradeGram / Condor Coffee) */}
          <div
            className="lg:col-span-5 relative mt-2 sm:mt-0"
            style={{
              transform: `translate3d(0, ${parallaxY}px, 0)`,
              transition: "transform 150ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <div
              style={{
                transition: "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: "320ms",
              }}
              className={`relative mx-auto max-w-sm sm:max-w-md lg:max-w-none will-change-[opacity,transform] ${
                mounted
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-[0.985]"
              }`}
            >
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c5a059]/20 to-white/5 rounded-lg blur-xl opacity-40" />

              {/* Main Desktop Mockup Frame with Real Project Screenshot */}
              <div className="relative bg-[#141618] border border-white/10 rounded-md shadow-2xl overflow-hidden p-2.5 sm:p-4">
                <div className="relative aspect-[16/9] w-full bg-[#08090a] rounded border border-white/10 overflow-hidden flex items-center justify-center p-1 sm:p-2">
                  {/* Browser Chrome Header */}
                  <div className="absolute top-0 left-0 right-0 h-5 sm:h-6 bg-[#16181b] border-b border-white/[0.08] px-2 sm:px-2.5 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f56]" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffbd2e]" />
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-neutral-300 bg-[#121416] px-1.5 sm:px-2 py-0.5 rounded border border-white/5 truncate max-w-[150px] sm:max-w-[180px] flex items-center gap-1">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400"></span>
                      <span>tradegram.app</span>
                    </div>
                    <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 font-semibold">LIVE</span>
                  </div>

                  {/* Primary Desktop Image with object-contain to avoid any cropping */}
                  <div className="w-full h-full pt-4 sm:pt-5 flex items-center justify-center">
                    <img
                      src="/images/portfolio/tradegram-desktop-hero.png"
                      alt="TradeGram digital platform interactive web experience"
                      className="w-full h-full object-contain rounded-xs transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Overlaid UI Highlights - Honest labeling underneath image */}
                <div className="mt-2 sm:mt-3 pt-2 sm:pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-semibold tracking-wide text-white text-[11px] sm:text-xs">
                      TradeGram Platform
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-neutral-400 font-mono">
                      Fintech & Interactive Web Experience
                    </div>
                  </div>
                  <span className="text-black bg-[#c5a059] font-mono text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-xs uppercase tracking-wider">
                    FEATURED REAL PROJECT
                  </span>
                </div>
              </div>

              {/* Floating Element 1: Non-quantitative Value Indicator (MOBILE OPTIMIZED) */}
              <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-[#181a1d] border border-white/15 px-3 py-2 rounded shadow-2xl hidden sm:block z-20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-xs bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center shrink-0">
                    <Smartphone className="w-3.5 h-3.5 text-[#c5a059]" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-medium">Standard</div>
                    <div className="text-[11px] font-semibold text-white">MOBILE OPTIMIZED</div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Non-quantitative Value Indicator (BUILT TO CONVERT) */}
              <div className="absolute -top-3 -right-2 sm:-right-3 bg-[#181a1d] border border-white/15 px-3 py-1.5 rounded shadow-2xl hidden sm:block z-20">
                <div className="flex items-center gap-1.5 text-xs">
                  <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span className="text-white font-semibold tracking-wide text-[10px] uppercase">
                    BUILT TO CONVERT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
