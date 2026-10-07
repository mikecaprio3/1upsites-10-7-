export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  pricePeriod?: string;
  headline: string;
  description: string;
  tagline: string;
  badge?: string;
  supportingLine: string;
  ctaText: string;
  secondaryCtaText: string;
  features: string[];
  recommended?: boolean;
}

export interface PortfolioProject {
  id: string;
  name: string;
  title: string; // for backward compatibility
  industry: string;
  category: string;
  projectType: string;
  location?: string;
  badge: string; // "REAL PROJECT"
  description: string;
  desktopHero: string;
  desktopSecondary: string;
  mobileImage: string;
  heroImage: string; // for backward compatibility
  url?: string;
  status: "real" | "concept";
  designObjective: string;
  challenge: string;
  solution: string;
  scope: string[];
}

export interface CoreServiceItem {
  id: string;
  title: string;
  description: string;
}

export const siteConfig = {
  // Brand & Legal Identity
  brandName: "1UpSites",
  brandWordmark: "1UpSites",
  legalCompanyName: "Call Master LLC",
  dbaText: "Call Master LLC d/b/a 1UpSites",
  primaryTagline: "Level up your online presence.",
  tagline: "BETTER WEBSITES. STRONGER FIRST IMPRESSIONS. BUILT AROUND WHAT YOUR BUSINESS ACTUALLY NEEDS.",
  subTagline: "We don't sell extra pages just to make the project bigger. We build the website structure that makes sense for your business.",
  heroHeadline: "Your business deserves a website that’s a level above.",
  trustLine: "Premium websites for contractors, service businesses, and growing local companies.",

  // Real Contact Information
  contact: {
    phoneDisplay: "203-444-5273",
    phoneTel: "+12034445273",
    email: "mike@1upsites.com",
    serviceArea: "Connecticut + Remote / Nationwide",
    businessHours: "Mon – Fri: 8:00 AM – 6:00 PM EST",
    locationDetail: "Based in Connecticut · Serving clients nationwide.",
  },

  // Color Palette Constants
  colors: {
    accent: "#c5a059", // Warm burnished brass / gold
    accentHover: "#b8934b",
    accentLight: "rgba(197, 160, 89, 0.12)",
    surfaceDark: "#0c0d0e",
    surfaceCard: "#141618",
    surfaceElevated: "#1a1c1f",
    textMuted: "#8e9196",
  },

  // Direct Phone Call URL (Direct conversion path)
  phoneCallUrl: "tel:2034445273",

  // Calls to Action
  cta: {
    primary: {
      label: "GET A FREE WEBSITE REVIEW",
      href: "/review",
    },
    secondary: {
      label: "CALL NOW",
      href: "tel:2034445273",
      displayPhone: "203-444-5273",
    },
    callMicrocopy: "Prefer to talk now? Call Michael directly at 203-444-5273.",
  },

  // Founder Information (Real owner)
  founder: {
    name: "Michael Caprio",
    role: "Founder & Lead Designer",
    image: "/images/owner.jpg",
    statement: "Your work is already good. Your website should prove it.",
    bio: "1UpSites was built around a simple idea: a strong business deserves an online presence that reflects the quality of the work behind it. I created 1UpSites to help local business owners upgrade that first impression without dealing with bloated agency processes, confusing tech jargon, or overpriced retainers. You work directly with me to build a clean, high-performing website that earns trust and wins customers.",
  },

  // Social Links
  socials: {
    linkedin: "https://linkedin.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
  },

  // Analytics & Tracking Placeholders
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    googleTagManagerId: "GTM-XXXXXXX",
  },

  // Honest 4-Step Process (Expedited Build-First Philosophy)
  process: [
    {
      step: "01",
      name: "RESEARCH",
      summary: "We study your business, services, reviews, competitors, customers, and existing online presence.",
    },
    {
      step: "02",
      name: "BUILD FIRST",
      summary: "We create a highly developed website direction before asking you to sit through endless planning meetings.",
    },
    {
      step: "03",
      name: "REVIEW & REFINE",
      summary: "We walk through the work together. You tell us what you love, what needs adjusting, and what needs to feel more like your business.",
    },
    {
      step: "04",
      name: "COMPLETE & LAUNCH",
      summary: "We make the final refinements, test everything, connect your domain, and launch.",
    },
  ],

  // 6 Concise Core Services for Homepage
  coreServices: [
    {
      id: "custom-design",
      title: "CUSTOM WEBSITE DESIGN",
      description: "Premium, custom-designed websites built around your company, customers, and services. No generic templates or clunky page builders.",
    },
    {
      id: "mobile-optimization",
      title: "MOBILE OPTIMIZATION",
      description: "Fast, intuitive experiences designed for customers browsing and calling from their phones. Tap-to-call headers and effortless navigation.",
    },
    {
      id: "lead-systems",
      title: "LEAD & ESTIMATE SYSTEMS",
      description: "Simple forms and clear calls to action that make reaching your company effortless, without overwhelming prospective clients.",
    },
    {
      id: "local-seo",
      title: "LOCAL SEO FOUNDATIONS",
      description: "Clean technical structure, service architecture, metadata, and local search fundamentals to help customers find you in your service area.",
    },
    {
      id: "copy-content",
      title: "COPY & CONTENT",
      description: "Clear messaging that communicates what you do, why customers should trust you, and what they should do next.",
    },
    {
      id: "hosting-support",
      title: "HOSTING & SUPPORT",
      description: "Reliable cloud hosting, maintenance, updates, and ongoing website support after launch so you never worry about downtime.",
    },
  ],

  // Compact Strip Industries
  compactIndustries: [
    "Landscaping & Hardscaping",
    "Home Improvement & Remodeling",
    "HVAC & Plumbing",
    "Electrical Contracting",
    "Tree & Outdoor Services",
    "Auto Services & Detailing",
    "Masonry & Concrete",
    "Roofing & Siding",
  ],

  // Real Work Projects Portfolio
  portfolio: [
    {
      id: "tradegram",
      name: "TradeGram",
      title: "TradeGram",
      industry: "Digital Platform / Fintech",
      category: "Digital Platform / Fintech",
      projectType: "Fintech Platform & Interactive Web Experience",
      location: "Interactive Platform",
      badge: "REAL PROJECT",
      description: "A modern digital platform designed around a clean, premium interface and a clear user experience.",
      desktopHero: "/images/portfolio/tradegram-desktop-hero.png",
      desktopSecondary: "/images/portfolio/tradegram-desktop-secondary.png",
      mobileImage: "/images/portfolio/tradegram-mobile.jpg",
      heroImage: "/images/portfolio/tradegram-desktop-hero.png",
      status: "real" as const,
      designObjective: "Build a high-trust, intuitive financial technology interface that combines sophisticated visual density with immediate user clarity.",
      challenge: "Financial platforms frequently suffer from visual clutter, confusing navigation, and overwhelming technical data that intimidate users and erode trust.",
      solution: "Engineered a refined dark interface with meticulous spacing, deliberate data hierarchy, and responsive interaction design that makes complex workflows feel calm, intuitive, and authoritative.",
      scope: [
        "High-density dashboard architecture",
        "Interactive component design system",
        "Mobile-first responsive workflows",
        "Real-time data visualization layout",
        "Typography & contrast optimization",
        "Subtle micro-interaction polish",
      ],
    },
    {
      id: "condor-coffee",
      name: "Condor Coffee",
      title: "Condor Coffee",
      industry: "Restaurant / Hospitality",
      category: "Restaurant / Hospitality",
      projectType: "Hospitality Brand Experience & Local Storefront",
      location: "Specialty Roastery & Cafe",
      badge: "REAL PROJECT",
      description: "A warm, modern hospitality website designed to showcase the brand, menu experience, and local identity.",
      desktopHero: "/images/portfolio/ecuadorian-coffee-desktop-hero.png",
      desktopSecondary: "/images/portfolio/ecuadorian-coffee-desktop-secondary.png",
      mobileImage: "/images/portfolio/ecuadorian-coffee-mobile.jpg",
      heroImage: "/images/portfolio/ecuadorian-coffee-desktop-hero.png",
      status: "real" as const,
      designObjective: "Translate specialty coffee heritage into a warm, appetizing online presence with effortless menu browsing and visit planning.",
      challenge: "Independent hospitality and specialty roastery brands often lose online customers because mobile visitors cannot quickly find menus, store hours, location directions, or what makes their product unique.",
      solution: "Created an inviting editorial layout featuring Ecuadorian coffee origin stories, prominent mobile tap-to-directions, structured menu browsing, and a warm visual palette.",
      scope: [
        "Brand storytelling & origin narrative",
        "Mobile tap-to-directions & hours header",
        "Structured food & beverage menu showcase",
        "High-fidelity product photography grid",
        "Local business schema & Google map integration",
        "Fast-loading mobile asset optimization",
      ],
    },
  ],

  // Two Primary Website Packages (Simplified, Honest Architecture)
  pricing: [
    {
      id: "launch",
      name: "1Up Launch",
      price: "$999",
      pricePeriod: "one-time investment",
      headline: "A premium website without unnecessary complexity.",
      description: "Built for businesses that need a polished, professional, conversion-focused online presence without paying for pages they do not need.",
      tagline: "One focused digital experience designed to build trust and generate inquiries.",
      badge: "ONE-TIME BUILD",
      supportingLine: "Ideal for businesses that need a stronger online presence, better credibility, and a clear path for customers to contact them. Includes 7-day post-launch revision window.",
      ctaText: "START WITH LAUNCH",
      secondaryCtaText: "CALL NOW",
      features: [
        "One-time project investment — zero required monthly commitment",
        "Includes 7-day post-launch revision window for final tweaks",
        "Custom responsive design & mobile-first optimization",
        "Premium homepage experience with services & reviews",
        "Project / image gallery & about trust section",
        "Contact / estimate form with mobile click-to-call",
        "SEO foundations (titles, metadata, structured headings, alt text)",
        "Local Business schema, sitemap & indexability setup",
        "Google Search Console & analytics setup",
        "Domain connection & full launch support",
      ],
      recommended: false,
    },
    {
      id: "growth",
      name: "1Up Growth",
      price: "Starting at $1,999",
      pricePeriod: "one-time investment",
      headline: "Built for businesses that need more room to grow.",
      description: "For businesses with multiple important services, stronger organic-search goals, or the need for dedicated pages targeting different customer searches.",
      tagline: "Dedicated pages built around the services your customers are actually searching for.",
      badge: "ONE-TIME BUILD",
      supportingLine: "Best for businesses competing across multiple services, search terms, or service areas. Includes 7-day post-launch revision window.",
      ctaText: "BUILD FOR GROWTH",
      secondaryCtaText: "CALL NOW",
      features: [
        "One-time project investment — zero required monthly commitment",
        "Includes 7-day post-launch revision window for final tweaks",
        "Includes everything in 1Up Launch",
        "Strategic multi-page website architecture (approx. 6–8 pages)",
        "Dedicated service pages built around customer search intent",
        "Search-focused site structure & internal linking",
        "Individual page titles, metadata & service-specific copy",
        "Expanded gallery & project architecture",
        "Service-area expansion capability & advanced navigation",
      ],
      recommended: true,
    },
  ],

  // Clear Post-Launch Structure: No Forced Retainers
  postLaunch: {
    eyebrow: "AFTER YOUR SITE GOES LIVE",
    headline: "YOU’RE NOT LOCKED INTO A MONTHLY PLAN.",
    body: "Every website includes a 7-day post-launch revision window for final tweaks. After that, you can simply reach out whenever you need an update, with one-off changes starting at $49 — or choose 1Up Care if you'd rather have us manage everything for you.",
    steps: [
      {
        number: "01",
        title: "7 DAYS OF FINAL TWEAKS",
        description: "After launch, you’ll have one week to send over reasonable final adjustments at no additional cost.",
        badge: "Included Free",
      },
      {
        number: "02",
        title: "NEED SOMETHING LATER?",
        description: "No subscription required. Reach out whenever you need something changed. One-off website updates start at $49.",
        badge: "Pay As You Go",
      },
      {
        number: "03",
        title: "WANT US TO HANDLE IT?",
        description: "Choose 1Up Care for ongoing hosting, maintenance, updates, and support starting at $129/month.",
        badge: "Optional Care",
      },
    ],
  },

  // One-Off Updates (Option 1: Pay-as-you-go)
  oneOffUpdates: {
    headline: "Need a change here & there?",
    subheadline: "No problem. You don't need a monthly plan just to make occasional updates. After your included 7-day revision window, simply reach out whenever you need something changed.",
    price: "Starting at $49",
    priceDetail: "per request · zero monthly commitment",
    disclaimer: "Pricing varies based on the scope of the requested update.",
    points: [
      "No monthly subscription required",
      "Pay only when you need something",
      "Price confirmed upfront before any work begins",
      "Great for wording changes, new photos, or updating business details",
    ],
  },

  // Recurring Service: 1Up Care (Option 2: Repositioned as Optional Ongoing Website Management)
  siteCare: {
    name: "1Up Care",
    badge: "OPTIONAL ONGOING MANAGEMENT",
    price: "Starting at $129",
    period: "per month",
    headline: "Website ownership without the upkeep.",
    tagline: "Website ownership without the upkeep.",
    description: "For business owners who would rather not worry about hosting, maintenance, updates, or the technical side of their website, 1Up Care keeps everything handled in one place.",
    features: [
      "Managed website hosting with automated SSL certificates",
      "Routine website maintenance & security updates",
      "Content updates included (text and image changes)",
      "Website health oversight & form deliverability monitoring",
      "Daily encrypted cloud backups",
      "Priority direct phone & email support from Michael",
    ],
    modalBenefits: [
      "Managed hosting with automated SSL certificates",
      "Website maintenance & dependency security updates",
      "Small content, text, and photo updates included",
      "Form deliverability monitoring & technical health oversight",
      "Daily encrypted backups",
      "Priority direct phone & email support",
      "Basic performance oversight",
    ],
  },

  // 16 Targeted Industries List (for modal, footer & dropdowns)
  industries: [
    { id: "landscaping", title: "Landscaping & Lawn Care" },
    { id: "hardscaping", title: "Hardscaping & Outdoor Living" },
    { id: "tree-services", title: "Tree Services & Arborists" },
    { id: "concrete", title: "Concrete Contractors" },
    { id: "masonry", title: "Masonry & Stone Work" },
    { id: "fencing", title: "Fencing & Deck Builders" },
    { id: "painting", title: "Painting Contractors" },
    { id: "plumbing", title: "Plumbing Contractors" },
    { id: "hvac", title: "HVAC Specialists" },
    { id: "electrical", title: "Electrical Contractors" },
    { id: "roofing", title: "Roofing Companies" },
    { id: "paving", title: "Paving & Asphalt" },
    { id: "auto-services", title: "Auto Detailing & Specialty" },
    { id: "gyms", title: "Private Gyms & Studios" },
    { id: "cleaning", title: "Cleaning Companies" },
    { id: "general", title: "General Contractors & Remodelers" },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "How much does a website cost?",
      a: "Our website packages are one-time investments: $999 for 1Up Launch (a focused, high-converting website experience) and starting at $1,999 for 1Up Growth (multi-page strategic architecture with dedicated service pages). Every website includes a 7-day post-launch revision window for final tweaks. There is zero requirement to purchase ongoing monthly maintenance. Future one-off updates start at $49 whenever you need something changed, or you can choose optional 1Up Care ($129/mo) if you prefer us to manage everything for you.",
    },
    {
      q: "Am I required to pay a monthly fee after my website is built?",
      a: "No, absolutely not. Your website build is a one-time purchase. You receive a 7-day revision window after launch for final tweaks. After that, you are never locked into any monthly bill. If you occasionally need an update down the road, one-off updates start at just $49 with no monthly commitment. 1Up Care ($129/mo) is completely optional for owners who simply prefer hands-off management.",
    },
    {
      q: "How does the process work?",
      a: "We start with a quick discovery session to understand your services, target customers, and goals. Next, we build your custom design, review it with you to fine-tune the details, and launch your upgraded site on your domain.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. Many of our clients have an outdated WordPress, Wix, or GoDaddy site. We rebuild your online presence with clean modern code while preserving your domain name and search rankings.",
    },
    {
      q: "Will my website work well on phones?",
      a: "Yes. Mobile-first usability is our core benchmark. Every website features clean navigation, tap-to-call headers, and fast loading on smartphones.",
    },
    {
      q: "What is 1UP Care?",
      a: "1Up Care ($129/mo) is an optional ongoing management service for business owners who want website ownership without the upkeep. It handles managed hosting, automatic SSL security certificates, encrypted daily backups, form monitoring, and routine text or photo updates. You can sign up or cancel whenever you choose.",
    },
    {
      q: "How do we get started?",
      a: "Request a Free Website Review or reach out directly by phone at 203-444-5273 or email at mike@1upsites.com. We will review your current site and show you what we'd improve.",
    },
  ],

  // Regional SEO Landing Pages
  seoLandingPages: [
    {
      slug: "web-design-connecticut",
      title: "1UpSites | Website Design in Connecticut for Local Contractors",
      metaDescription: "Premium custom web design for local service companies across Connecticut. Level up your online presence.",
      headline: "Connecticut's Premier Web Design for Trade & Service Businesses",
      region: "Connecticut",
      focusTrades: ["Landscaping", "Hardscaping", "Tree Service", "HVAC", "Plumbing", "Masonry"],
    },
    {
      slug: "web-design-fairfield-county",
      title: "1UpSites | Web Design Fairfield County CT – Contractor Websites",
      metaDescription: "High-converting web design for local service businesses in Fairfield County, CT.",
      headline: "Position Your Business for Fairfield County's High-Value Clients",
      region: "Fairfield County, CT",
      focusTrades: ["Luxury Hardscapes", "High-End Painting", "Custom Decks", "Architectural Concrete"],
    },
    {
      slug: "web-design-new-haven",
      title: "1UpSites | Web Design New Haven CT – Local Business Websites",
      metaDescription: "Bespoke websites for contractors across the greater New Haven area and shoreline.",
      headline: "Outshine Competitors in the Greater New Haven & Shoreline Market",
      region: "New Haven County, CT",
      focusTrades: ["Tree Care", "Roofing", "Electrical", "Paving", "Plumbing"],
    },
    {
      slug: "contractor-web-design",
      title: "1UpSites | Contractor Website Design – Built to Level Up Inquiries",
      metaDescription: "We build websites for general contractors and specialty trades that command higher prices.",
      headline: "Websites That Prove Your Craftsmanship Before You Pick Up the Phone",
      region: "National & Regional",
      focusTrades: ["General Contractors", "Remodelers", "Commercial Trades", "Home Services"],
    },
  ],
};
