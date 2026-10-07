import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-[#0c0d0e] relative border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#c5a059]">
              Direct Contact & Scheduling
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Let's talk about your next web project.
            </h2>

            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              Whether you want to explore a full redesign, call Michael directly, or ask a question about our packages, reach out anytime.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-4 p-4 bg-[#141619] border border-white/[0.08] hover:border-[#c5a059]/40 rounded-sm transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#1c1f24] border border-white/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Direct Phone Line
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#c5a059] transition-colors">
                    {siteConfig.contact.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 p-4 bg-[#141619] border border-white/[0.08] hover:border-[#c5a059]/40 rounded-sm transition-colors group"
              >
                <div className="w-10 h-10 rounded-sm bg-[#1c1f24] border border-white/10 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-black transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    General & Project Inquiries
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#c5a059] transition-colors">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              {/* Service Area */}
              <div className="flex items-center gap-4 p-4 bg-[#141619] border border-white/[0.08] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#1c1f24] border border-white/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Service Area
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.serviceArea}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {siteConfig.contact.locationDetail}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 bg-[#141619] border border-white/[0.08] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#1c1f24] border border-white/10 flex items-center justify-center text-[#c5a059] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Business Hours
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {siteConfig.contact.businessHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-7 bg-[#141619] border border-white/10 rounded-sm p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Leave your details below and we will be in touch promptly to discuss your project.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#c5a059] mx-auto" />
                <h4 className="font-display text-lg font-bold text-white">
                  Message Sent
                </h4>
                <p className="text-xs text-neutral-300">
                  Thank you for reaching out. We have received your message and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#c5a059] underline cursor-pointer mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-300">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="203-444-5273"
                      className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-300">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business, current website, or target timeline..."
                    className="w-full bg-[#1b1e22] border border-white/10 focus:border-[#c5a059] focus:outline-none rounded-xs px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c5a059] hover:bg-[#d8b268] rounded-xs transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
