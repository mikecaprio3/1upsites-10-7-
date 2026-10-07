import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Quote, Shield, User, Phone } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutSectionProps {
  onOpenReview: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#0c0d0e] relative border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Founder Photo Frame (Compact on Mobile) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="scale" delay={0} duration={800}>
              <div className="relative mx-auto max-w-[200px] sm:max-w-xs lg:max-w-none">
                <div className="relative bg-[#141619] border border-white/10 rounded-sm overflow-hidden p-1.5 sm:p-2 shadow-2xl">
                  <div className="aspect-square relative overflow-hidden rounded-xs bg-[#1a1c1e] flex items-center justify-center">
                    {!imageError ? (
                      <img
                        src={siteConfig.founder.image}
                        alt={siteConfig.founder.name}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{ objectPosition: "center 30%" }}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#15171a] border border-white/5 space-y-1.5">
                        <div className="w-10 h-10 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                          <User className="w-5 h-5" />
                        </div>
                        <div className="font-mono text-xs font-bold text-white tracking-wider">
                          MICHAEL CAPRIO
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          Founder & Lead Designer
                        </div>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-3 sm:p-4">
                      <div>
                        <div className="font-display text-sm sm:text-base font-bold text-white">
                          {siteConfig.founder.name}
                        </div>
                        <div className="text-[11px] sm:text-xs text-[#c5a059] font-mono">
                          {siteConfig.founder.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote card */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-4 bg-[#181a1e] border border-[#c5a059]/30 p-2.5 sm:p-3 rounded-sm shadow-xl max-w-[220px] hidden sm:block">
                  <div className="flex items-start gap-2">
                    <Quote className="w-3.5 h-3.5 text-[#c5a059] shrink-0 opacity-80 mt-0.5" />
                    <p className="text-[10px] sm:text-[11px] text-neutral-300 italic leading-snug">
                      "{siteConfig.founder.statement}"
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Founder Story & Philosophy */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={110} duration={800} className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
                  Direct Founder Craftsmanship
                </div>
                <h2 className="font-display text-2.5xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
                  You work directly with the founder and lead designer.
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                <p>
                  {siteConfig.founder.bio}
                </p>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  We maintain a deliberately compact client roster so every project receives focused architectural design, custom typography, responsive code, and ongoing performance care.
                </p>
              </div>

              {/* Direct Accountability Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2 text-xs">
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-[#131518] border border-white/5 rounded-xs">
                  <Shield className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="text-white font-medium">Direct phone & email access</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 sm:p-3 bg-[#131518] border border-white/5 rounded-xs">
                  <Shield className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="text-white font-medium">Zero junior account handoffs</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href="tel:2034445273"
                  className="btn-primary-interaction group inline-flex w-full sm:w-auto justify-center items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#c5a059] hover:bg-[#d8b268] text-black rounded-xs text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>TALK TO MICHAEL: 203-444-5273</span>
                </a>

                <p className="text-xs text-neutral-400">
                  No sales team. No handoff. You’ll work directly with Michael from the first conversation through launch.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
