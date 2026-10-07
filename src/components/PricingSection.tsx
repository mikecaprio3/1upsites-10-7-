import React, { useState, useRef } from "react";
import { siteConfig } from "../config/siteConfig";
import { Check, ArrowRight, ShieldCheck, HelpCircle, Phone, ChevronLeft, ChevronRight, Clock, RefreshCw, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface PricingSectionProps {
  onOpenReview: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenReview }) => {
  const [showCareModal, setShowCareModal] = useState(false);
  const [activePackageIndex, setActivePackageIndex] = useState(0);
  const [activePostLaunchIndex, setActivePostLaunchIndex] = useState(0);
  const [activeChoiceIndex, setActiveChoiceIndex] = useState(0);

  const scrollPackageRef = useRef<HTMLDivElement>(null);
  const scrollPostLaunchRef = useRef<HTMLDivElement>(null);
  const scrollChoiceRef = useRef<HTMLDivElement>(null);

  // Package Carousel Scroll
  const handlePackageScroll = () => {
    if (scrollPackageRef.current) {
      const { scrollLeft, clientWidth } = scrollPackageRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActivePackageIndex(Math.min(Math.max(index, 0), siteConfig.pricing.length - 1));
    }
  };

  const scrollToPackage = (index: number) => {
    if (scrollPackageRef.current) {
      const cardWidth = scrollPackageRef.current.clientWidth * 0.88;
      scrollPackageRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActivePackageIndex(index);
    }
  };

  // Post-Launch Steps Scroll
  const handlePostLaunchScroll = () => {
    if (scrollPostLaunchRef.current) {
      const { scrollLeft, clientWidth } = scrollPostLaunchRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.78));
      setActivePostLaunchIndex(Math.min(Math.max(index, 0), siteConfig.postLaunch.steps.length - 1));
    }
  };

  const scrollToPostLaunch = (index: number) => {
    if (scrollPostLaunchRef.current) {
      const cardWidth = scrollPostLaunchRef.current.clientWidth * 0.8;
      scrollPostLaunchRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActivePostLaunchIndex(index);
    }
  };

  // Choice Cards Scroll
  const handleChoiceScroll = () => {
    if (scrollChoiceRef.current) {
      const { scrollLeft, clientWidth } = scrollChoiceRef.current;
      const index = Math.round(scrollLeft / (clientWidth * 0.85));
      setActiveChoiceIndex(Math.min(Math.max(index, 0), 1));
    }
  };

  const scrollToChoice = (index: number) => {
    if (scrollChoiceRef.current) {
      const cardWidth = scrollChoiceRef.current.clientWidth * 0.88;
      scrollChoiceRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveChoiceIndex(index);
    }
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="max-w-3xl space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              One-Time Website Investment
            </div>
            <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
              Two clear options. Built around what you actually need.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              A website build is a one-time purchase with no required monthly subscription. We build the simplest website structure that accomplishes your goals, builds trust, and generates customer inquiries.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile Quick Selector Switcher */}
        <div className="lg:hidden flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-1.5 p-1 bg-[#141619] border border-white/10 rounded-xs flex-1">
            {siteConfig.pricing.map((pkg, i) => (
              <button
                key={pkg.id}
                onClick={() => scrollToPackage(i)}
                className={`flex-1 py-1.5 px-2 text-[11px] font-bold uppercase tracking-wider rounded-xs transition-all text-center truncate ${
                  activePackageIndex === i
                    ? "bg-[#c5a059] text-black shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {pkg.name} ({pkg.price})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={() => scrollToPackage(Math.max(activePackageIndex - 1, 0))}
              disabled={activePackageIndex === 0}
              className={`p-1.5 rounded-xs border border-white/10 ${
                activePackageIndex === 0 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Previous package"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToPackage(Math.min(activePackageIndex + 1, siteConfig.pricing.length - 1))}
              disabled={activePackageIndex === siteConfig.pricing.length - 1}
              className={`p-1.5 rounded-xs border border-white/10 ${
                activePackageIndex === siteConfig.pricing.length - 1 ? "text-neutral-600 opacity-40 cursor-default" : "text-neutral-300 active:scale-95"
              }`}
              aria-label="Next package"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2 Core Website Packages (Swipeable on Mobile, 2-Column on Desktop) */}
        <div
          ref={scrollPackageRef}
          onScroll={handlePackageScroll}
          className="flex lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 lg:pb-0 px-4 lg:px-0 -mx-4 lg:mx-auto"
        >
          {siteConfig.pricing.map((pkg) => {
            const isGrowth = pkg.id === "growth";

            return (
              <div
                key={pkg.id}
                className="w-[88vw] max-w-[390px] shrink-0 snap-center lg:w-auto lg:shrink lg:max-w-none flex flex-col h-full"
              >
                <div
                  className={`h-full p-5 sm:p-8 bg-[#131518] rounded-sm flex flex-col justify-between relative transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 ${
                    isGrowth
                      ? "border-2 border-[#c5a059] shadow-[0_0_35px_rgba(197,160,89,0.22)] bg-[#15181c]"
                      : "border border-white/10 hover:border-[#c5a059]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Top Badge & Package Identification */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                      <span
                        className={`text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2 sm:px-2.5 py-0.5 rounded-xs uppercase ${
                          isGrowth
                            ? "bg-[#c5a059] text-black"
                            : "bg-white/10 text-neutral-300 border border-white/10"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                      <span className="text-[10px] font-mono text-[#c5a059] font-medium">
                        {pkg.pricePeriod}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-0.5 sm:mb-1">
                      {pkg.name}
                    </h3>

                    <p className="text-xs text-[#c5a059] font-medium mb-2 sm:mb-3">
                      {pkg.headline}
                    </p>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4 sm:mb-6 font-normal">
                      {pkg.description}
                    </p>

                    {/* Price Header */}
                    <div className="my-3 sm:my-4 pb-4 sm:pb-5 border-b border-white/[0.08]">
                      <div className="text-2.5xl sm:text-4xl font-bold text-white font-display">
                        {pkg.price}
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5 sm:mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                        <span>One-time website build · 100% client code ownership</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 sm:space-y-2.5 text-xs mb-6 sm:mb-8">
                      <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold pb-1">
                        {isGrowth ? "Includes everything in 1Up Launch plus:" : "What's included:"}
                      </div>
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-2.5 text-neutral-200">
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a059] shrink-0 mt-0.5" />
                          <span className="leading-snug text-[11px] sm:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Supporting Line */}
                  <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/[0.06]">
                    <p className="text-[10px] sm:text-[11px] text-neutral-400 italic">
                      {pkg.supportingLine}
                    </p>

                    <div className="space-y-2">
                      <button
                        onClick={onOpenReview}
                        className={`btn-primary-interaction group w-full py-3 sm:py-3.5 px-4 rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                          isGrowth
                            ? "bg-[#c5a059] text-black hover:bg-[#d8b268]"
                            : "bg-white/10 text-white hover:bg-[#c5a059] hover:!text-black border border-white/10"
                        }`}
                      >
                        <span>{pkg.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
                      </button>

                      <a
                        href="tel:2034445273"
                        className="btn-secondary-interaction group w-full py-2 sm:py-2.5 px-3 bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white rounded-xs text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{pkg.secondaryCtaText}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots for Packages */}
        <div className="lg:hidden flex items-center justify-center gap-2 mt-4">
          {siteConfig.pricing.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPackage(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activePackageIndex === i ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`View package ${i + 1}`}
            />
          ))}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* POST-LAUNCH EXPLANATION SECTION: No Forced Retainers              */}
        {/* ------------------------------------------------------------------ */}
        <ScrollReveal direction="up" delay={120} duration={700}>
          <div className="mt-10 sm:mt-14 max-w-5xl mx-auto p-5 sm:p-8 bg-[#121417] border border-white/10 rounded-sm relative overflow-hidden">
            {/* Header */}
            <div className="max-w-2xl mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>{siteConfig.postLaunch.eyebrow}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                {siteConfig.postLaunch.headline}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                {siteConfig.postLaunch.body}
              </p>
            </div>

            {/* 3 Steps / Cards (Swipeable on Mobile, 3-Column on Desktop) */}
            <div
              ref={scrollPostLaunchRef}
              onScroll={handlePostLaunchScroll}
              className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 px-2 sm:px-0 -mx-2 sm:mx-0 items-stretch"
            >
              {siteConfig.postLaunch.steps.map((step) => (
                <div
                  key={step.number}
                  className="w-[78vw] max-w-[290px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full"
                >
                  <div className="h-full p-4 sm:p-5 bg-[#171a1e] border border-white/[0.08] hover:border-[#c5a059]/30 rounded-xs flex flex-col justify-between space-y-3 transition-colors duration-200">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xl sm:text-2xl font-bold text-[#c5a059]">
                          {step.number}
                        </span>
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-neutral-300">
                          {step.badge}
                        </span>
                      </div>

                      <h4 className="font-display text-sm sm:text-base font-bold text-white tracking-wide leading-snug">
                        {step.title}
                      </h4>

                      <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 text-[10px] text-neutral-400 font-mono">
                      {step.number === "01" && "Minor tweaks & text edits"}
                      {step.number === "02" && "Starting at $49 · Zero retainers"}
                      {step.number === "03" && "Starting at $129/mo · Fully optional"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Pagination Dots for Post-Launch */}
            <div className="md:hidden flex items-center justify-center gap-1.5 mt-3">
              {siteConfig.postLaunch.steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPostLaunch(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activePostLaunchIndex === i ? "w-5 bg-[#c5a059]" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`View step ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ------------------------------------------------------------------ */}
        {/* REPOSITIONED: ONE-OFF UPDATES VS 1UP CARE (Clean 2-Column Choice) */}
        {/* ------------------------------------------------------------------ */}
        <ScrollReveal direction="up" delay={160} duration={700}>
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto">
            <div className="mb-4 sm:mb-6 text-center sm:text-left space-y-1">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                AFTER YOUR 7-DAY REVISION WINDOW
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Choose the support model that fits your business.
              </h3>
            </div>

            {/* 2 Choice Cards (Swipeable on Mobile, 2-Column on Desktop) */}
            <div
              ref={scrollChoiceRef}
              onScroll={handleChoiceScroll}
              className="flex md:grid md:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 px-4 md:px-0 -mx-4 md:mx-auto items-stretch"
            >
              {/* OPTION 1: One-Off Updates (Pay As You Go) */}
              <div className="w-[88vw] max-w-[390px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full">
                <div className="h-full p-5 sm:p-7 bg-[#131518] border border-white/10 hover:border-[#c5a059]/40 rounded-sm flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-xs uppercase bg-white/10 text-neutral-200 border border-white/10">
                        OPTION 1 · PAY AS YOU GO
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-medium">
                        NO MONTHLY BILL
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                        One-Off Updates
                      </h4>
                      <p className="text-xs text-[#c5a059] font-medium mt-0.5">
                        Best for businesses that rarely need changes.
                      </p>
                      <p className="text-xs text-neutral-300 leading-relaxed mt-2 font-normal">
                        {siteConfig.oneOffUpdates.subheadline}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="py-3 border-y border-white/[0.06]">
                      <div className="text-2.5xl sm:text-3xl font-bold text-white font-display">
                        {siteConfig.oneOffUpdates.price}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {siteConfig.oneOffUpdates.priceDetail}
                      </div>
                    </div>

                    {/* Key Bullets */}
                    <div className="space-y-2 text-xs text-neutral-200">
                      {siteConfig.oneOffUpdates.points.map((pt, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/[0.06] space-y-2.5">
                    <p className="text-[10px] text-neutral-400 italic">
                      * {siteConfig.oneOffUpdates.disclaimer}
                    </p>

                    <button
                      onClick={onOpenReview}
                      className="btn-secondary-interaction group w-full py-2.5 sm:py-3 px-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#c5a059]/40 text-neutral-200 hover:text-white rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>REQUEST AN UPDATE</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* OPTION 2: 1Up Care (Optional Ongoing Management) */}
              <div className="w-[88vw] max-w-[390px] shrink-0 snap-center md:w-auto md:shrink md:max-w-none flex flex-col h-full">
                <div className="h-full p-5 sm:p-7 bg-[#15181c] border-2 border-[#c5a059] shadow-[0_0_35px_rgba(197,160,89,0.18)] rounded-sm flex flex-col justify-between transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-xs uppercase bg-[#c5a059] text-black">
                        {siteConfig.siteCare.badge}
                      </span>
                      <span className="text-[10px] font-mono text-[#c5a059] font-medium">
                        HANDS-OFF CARE
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {siteConfig.siteCare.name}
                      </h4>
                      <p className="text-xs text-[#c5a059] font-medium mt-0.5">
                        {siteConfig.siteCare.headline}
                      </p>
                      <p className="text-xs text-neutral-300 leading-relaxed mt-2 font-normal">
                        {siteConfig.siteCare.description}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="py-3 border-y border-white/[0.06]">
                      <div className="text-2.5xl sm:text-3xl font-bold text-white font-display">
                        {siteConfig.siteCare.price}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        per month · optional service with zero lock-in
                      </div>
                    </div>

                    {/* Key Bullets */}
                    <div className="space-y-2 text-xs text-neutral-200">
                      {siteConfig.siteCare.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/[0.06] space-y-2.5">
                    <p className="text-[10px] text-neutral-400 italic">
                      Cancel or pause anytime. Not required to buy or launch a website.
                    </p>

                    <button
                      onClick={() => setShowCareModal(true)}
                      className="btn-primary-interaction group w-full py-2.5 sm:py-3 px-4 bg-[#c5a059] hover:bg-[#d8b268] text-black rounded-xs text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <span>LEARN ABOUT 1UP CARE</span>
                      <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Pagination Dots for Choice Cards */}
            <div className="md:hidden flex items-center justify-center gap-2 mt-4">
              <button
                onClick={() => scrollToChoice(0)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeChoiceIndex === 0 ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
                }`}
                aria-label="View One-Off Updates option"
              />
              <button
                onClick={() => scrollToChoice(1)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  activeChoiceIndex === 1 ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/20"
                }`}
                aria-label="View 1Up Care option"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ------------------------------------------------------------------ */}
        {/* Reassuring Founder Recommendation Box                              */}
        {/* ------------------------------------------------------------------ */}
        <ScrollReveal direction="up" delay={180} duration={700}>
          <div className="mt-8 sm:mt-12 max-w-5xl mx-auto p-4 sm:p-7 bg-[#121417] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2 text-center md:text-left max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a059] font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>NOT SURE WHICH ONE YOU NEED?</span>
              </div>
              <h4 className="font-display text-base sm:text-xl font-bold text-white">
                We'll recommend the simplest website that accomplishes your goal.
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                If one focused website can do the job, we won't sell you eight pages you don't need. If dedicated service pages would meaningfully improve your customer experience or search visibility, we'll explain why. And you will never be pushed into a monthly retainer.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-2 sm:gap-2.5">
              <button
                onClick={onOpenReview}
                className="btn-primary-interaction group w-full px-5 sm:px-6 py-2.5 sm:py-3 bg-[#c5a059] hover:bg-[#d8b268] text-black text-xs font-bold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <span>GET A FREE WEBSITE REVIEW</span>
                <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
              </button>

              <a
                href="tel:2034445273"
                className="btn-secondary-interaction group w-full px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>CALL NOW: 203-444-5273</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ------------------------------------------------------------------ */}
        {/* 1Up Care Modal (Detailed Technical Breakdown)                      */}
        {/* ------------------------------------------------------------------ */}
        {showCareModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#121417] border border-white/15 rounded-md max-w-lg w-full p-5 sm:p-6 text-neutral-200 shadow-2xl space-y-4 sm:space-y-5 animate-modalEnter">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white">
                    1Up Care — Optional Ongoing Management
                  </h3>
                  <div className="text-[11px] sm:text-xs text-[#c5a059] font-mono">
                    Starting at $129/month · Website ownership without the upkeep
                  </div>
                </div>
                <button
                  onClick={() => setShowCareModal(false)}
                  className="text-neutral-400 hover:text-white p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                For business owners who would rather not worry about hosting, maintenance, updates, or the technical side of their website, 1Up Care keeps everything handled in one place. No long-term lock-in, and never required to buy or launch your site.
              </p>

              <div className="space-y-2 text-xs bg-[#17191d] p-3.5 sm:p-4 rounded-sm border border-white/5">
                {siteConfig.siteCare.modalBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-neutral-200">
                    <Check className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span className="text-[11px] sm:text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#15171a] border border-white/5 rounded-xs text-[11px] text-neutral-400 leading-relaxed">
                <span className="text-white font-medium">Clear Scope:</span> Covers routine text & photo updates, hosting, maintenance, and technical oversight. Large scale redesigns or major new development features are quoted separately.
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setShowCareModal(false)}
                  className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowCareModal(false);
                    onOpenReview();
                  }}
                  className="btn-primary-interaction group px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs cursor-pointer flex items-center gap-1.5"
                >
                  <span>Inquire About 1Up Care</span>
                  <ArrowRight className="w-3.5 h-3.5 group-arrow-hover" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
