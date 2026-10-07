import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import { Logo } from "./Logo";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenReview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenReview }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", target: "work" },
    { label: "Services", target: "services" },
    { label: "Process", target: "process" },
    { label: "Industries", target: "industries" },
    { label: "Pricing", target: "pricing" },
    { label: "About", target: "about" },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? "bg-[#0c0d0e]/94 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-[#0c0d0e]/30 backdrop-blur-xs border-b border-white/[0.04] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Official Brand Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-left group cursor-pointer flex items-center"
            aria-label={`${siteConfig.brandName} Home`}
          >
            <Logo size="header" />
          </button>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="hover:text-white transition-colors duration-200 relative py-1 cursor-pointer whitespace-nowrap text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Direct Call link */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2034445273"
              className="text-xs font-semibold uppercase tracking-wider text-neutral-200 hover:text-[#c5a059] transition-colors py-2 px-1 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>CALL NOW</span>
            </a>

            <span className="text-white/20 select-none">·</span>

            <button
              onClick={onOpenReview}
              className="btn-primary-interaction group px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-sm cursor-pointer whitespace-nowrap shadow-sm hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] flex items-center gap-1.5"
            >
              <span>{siteConfig.cta.primary.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-arrow-hover" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneTel}`}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Call direct"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1012] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-left text-base font-medium text-neutral-200 hover:text-[#c5a059] py-2 border-b border-white/[0.04]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReview();
              }}
              className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-sm text-center cursor-pointer shadow-md"
            >
              {siteConfig.cta.primary.label}
            </button>

            <a
              href="tel:2034445273"
              className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider text-neutral-200 hover:text-white border border-white/15 hover:border-[#c5a059]/40 rounded-sm text-center bg-white/5"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>CALL NOW: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
