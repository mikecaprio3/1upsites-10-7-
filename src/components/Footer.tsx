import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Logo } from "./Logo";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenReview: () => void;
  onSelectSeoPage: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenReview,
  onSelectSeoPage,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#08090a] border-t border-white/[0.08] text-neutral-400 text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <ScrollReveal direction="up" duration={700}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <button
                onClick={() => onNavigate("hero")}
                className="text-left group cursor-pointer inline-block"
                aria-label={`${siteConfig.brandName} Home`}
              >
                <Logo size="footer" />
              </button>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {siteConfig.tagline}
            </p>

            <div className="pt-2 text-[11px] text-neutral-400 space-y-1">
              <div>{siteConfig.contact.locationDetail}</div>
              <div>Direct: <a href={`tel:${siteConfig.contact.phoneTel}`} className="text-neutral-300 hover:text-[#c5a059]">{siteConfig.contact.phoneDisplay}</a></div>
              <div>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-neutral-300 hover:text-[#c5a059]">{siteConfig.contact.email}</a></div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenReview}
                className="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs cursor-pointer transition-colors"
              >
                {siteConfig.cta.primary.label}
              </button>
              <a
                href="tel:2034445273"
                className="px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-300 hover:text-white border border-white/10 hover:border-[#c5a059]/40 rounded-xs transition-colors"
              >
                CALL 203-444-5273
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: "Selected Work", target: "work" },
                { label: "Core Services", target: "services" },
                { label: "Our Process", target: "process" },
                { label: "Target Industries", target: "industries" },
                { label: "Pricing & Packages", target: "pricing" },
                { label: "Site Care Maintenance", target: "site-care" },
                { label: "About Agency", target: "about" },
                { label: "Frequently Asked", target: "faq" },
              ].map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => onNavigate(item.target)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Trades */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Industries Served
            </div>
            <ul className="space-y-2">
              {siteConfig.industries.slice(0, 8).map((ind) => (
                <li key={ind.id}>
                  <button
                    onClick={() => onNavigate("industries")}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas & SEO Architecture */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Regional & Trade Hubs
            </div>
            <ul className="space-y-2">
              {siteConfig.seoLandingPages.map((page) => (
                <li key={page.slug}>
                  <button
                    onClick={() => onSelectSeoPage(page.slug)}
                    className="hover:text-[#c5a059] transition-colors cursor-pointer text-left truncate block max-w-[200px]"
                  >
                    {page.region}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-1 text-[11px] text-neutral-300">
              <div className="font-mono uppercase text-neutral-300 font-semibold">Hours</div>
              <div>{siteConfig.contact.businessHours}</div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Bottom Bar: Legal & Attribution */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-[11px] text-neutral-300">
              © {new Date().getFullYear()} {siteConfig.dbaText}. All rights reserved.
            </div>
            <div className="text-[10px] text-neutral-300">
              100% real client work and custom architecture. Verified digital craftsmanship.
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-white/5 rounded-xs transition-colors cursor-pointer flex items-center gap-1"
              aria-label="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
