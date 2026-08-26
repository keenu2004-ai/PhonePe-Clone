export const SITE_METADATA = {
  title: "PhonePe — Educational Website Recreation",
  description: "Unofficial high-fidelity educational recreation of the PhonePe website interface created with React & Vite.",
  disclaimer: "Unofficial educational recreation. Not affiliated with PhonePe. Safe UI simulation only."
};

export const NAVIGATION_DATA = {
  links: [
    {
      id: "home",
      label: "HOME",
      path: "/"
    },
    {
      id: "business",
      label: "BUSINESS SOLUTIONS",
      path: "/business",
      megaMenu: [
        { title: "Soundbox", desc: "Instant audio payment alerts for merchants", icon: "Volume2" },
        { title: "Payment Gateway", desc: "100+ payment modes for websites & apps", icon: "CreditCard" },
        { title: "Smart POS", desc: "Android POS for card & QR acceptance", icon: "Smartphone" },
        { title: "Merchant QR", desc: "All-in-one UPI QR code for shop counters", icon: "QrCode" }
      ]
    },
    {
      id: "wealth",
      label: "WEALTH & INVESTMENTS",
      path: "/wealth",
      megaMenu: [
        { title: "24K Digital Gold", desc: "99.99% pure gold starting at ₹1", icon: "Coins" },
        { title: "Mutual Funds", desc: "SIP & lump-sum investment solutions", icon: "TrendingUp" },
        { title: "Tax Saving ELSS", desc: "Save tax under Section 80C", icon: "Percent" }
      ]
    },
    {
      id: "insurance",
      label: "INSURANCE",
      path: "/insurance",
      megaMenu: [
        { title: "Motor Insurance", desc: "Car & Two-Wheeler instant cover", icon: "Car" },
        { title: "Health Insurance", desc: "Cashless treatment across India", icon: "Activity" },
        { title: "Term Life Insurance", desc: "Financial protection for your family", icon: "Shield" }
      ]
    },
    {
      id: "press",
      label: "PRESS",
      path: "/press"
    },
    {
      id: "careers",
      label: "CAREERS",
      path: "/careers"
    },
    {
      id: "about",
      label: "ABOUT US",
      path: "/about"
    }
  ]
};

export const SERVICES_DATA = [
  {
    id: "upi",
    title: "Instant UPI Money Transfer",
    subtitle: "Send money to any bank account or UPI ID instantly 24x7.",
    icon: "Send",
    tag: "POPULAR",
    color: "#5f259f",
    bgColor: "#f5f0f9"
  },
  {
    id: "recharge",
    title: "Mobile & DTH Recharge",
    subtitle: "Jio, Airtel, Vi recharges with exclusive cashback offers.",
    icon: "Smartphone",
    color: "#00b0ff",
    bgColor: "#e1f5fe"
  },
  {
    id: "bills",
    title: "Utility Bills Payment",
    subtitle: "Pay Electricity, Water, Gas, Landline & Broadband bills effortlessly.",
    icon: "Zap",
    color: "#ff9800",
    bgColor: "#fff3e0"
  },
  {
    id: "rent",
    title: "Rent & Tuition Payment",
    subtitle: "Pay house rent & fees via Credit Card and get reward points.",
    icon: "Home",
    color: "#00c853",
    bgColor: "#e8f5e9"
  },
  {
    id: "creditcard",
    title: "Credit Card Bill Payment",
    subtitle: "Instant credit settlement across Visa, Mastercard, RuPay & Amex.",
    icon: "CreditCard",
    color: "#9c27b0",
    bgColor: "#f3e5f5"
  },
  {
    id: "fastag",
    title: "FASTag Recharge",
    subtitle: "Hassle-free toll payments for all major vehicle FASTag issuers.",
    icon: "Navigation",
    color: "#ff5722",
    bgColor: "#fbe9e7"
  }
];

export const BUSINESS_PRODUCTS = [
  {
    id: "soundbox",
    title: "PhonePe Soundbox",
    tagline: "Voice alerts in 11+ Indian languages for every payment received.",
    features: [
      "Crystal clear audio speaker with high volume",
      "4G SIM connectivity with instant real-time alerts",
      "Long battery backup lasting up to 4 days",
      "Zero zero-md fees and easy daily settlements"
    ],
    badge: "MOST POPULAR FOR STORES",
    accentColor: "#5f259f"
  },
  {
    id: "gateway",
    title: "PhonePe Payment Gateway",
    tagline: "Empowering businesses with 100+ payment modes & 99.99% uptime.",
    features: [
      "Flat low pricing with zero setup fee",
      "Seamless checkout SDKs for Web, iOS & Android",
      "Instant refunds & automated reconciliation dashboard",
      "Tokenization compliant for high transaction approval"
    ],
    badge: "ENTERPRISE READY",
    accentColor: "#00c853"
  },
  {
    id: "pos",
    title: "Smart POS Device",
    tagline: "Accept Cards, UPI QR, and Contactless Tap & Pay on one device.",
    features: [
      "Built-in thermal receipt printer",
      "Android OS with intuitive merchant app",
      "Accepts Visa, Mastercard, RuPay & Sodexo cards",
      "Detailed end-of-day sales reporting"
    ],
    badge: "ALL-IN-ONE DEVICE",
    accentColor: "#00b0ff"
  }
];

export const WEALTH_DATA = {
  gold: {
    title: "24K 99.99% Pure Digital Gold",
    description: "Buy, sell, or store certified gold safely backed by MMTC-PAMP starting at just ₹1.",
    highlights: [
      "100% Guaranteed 24K 99.99% Pure Gold",
      "Stored securely in insured bank-grade vaults",
      "Convert to gold coins & delivered to your doorstep"
    ]
  },
  mutualFunds: [
    { title: "Top Rated Equity Funds", return: "18.5% p.a.", risk: "High Growth", category: "Wealth Creation" },
    { title: "Tax Saver ELSS Fund", return: "16.2% p.a.", risk: "Tax Savings", category: "Section 80C" },
    { title: "Liquid & Debt Funds", return: "7.4% p.a.", risk: "Low Risk", category: "Better than Savings" }
  ]
};

export const INSURANCE_ITEMS = [
  {
    id: "bike",
    title: "Two-Wheeler Insurance",
    price: "Starts @ ₹1.5/day",
    desc: "Instant policy issuance without paperwork. Cashless claims across 5,000+ garages.",
    icon: "Bike"
  },
  {
    id: "car",
    title: "Car Insurance",
    price: "Up to 85% discount",
    desc: "Comprehensive & Third-party coverages with 24x7 roadside assistance support.",
    icon: "Car"
  },
  {
    id: "health",
    title: "Health Insurance",
    price: "Cover up to ₹1 Crore",
    desc: "Cashless hospital admission in 10,000+ hospitals with no pre-medical checkup.",
    icon: "HeartPulse"
  },
  {
    id: "term",
    title: "Term Life Insurance",
    price: "Cover up to ₹50 Lakhs",
    desc: "Protect your family's future with tax benefits under Section 80C.",
    icon: "ShieldCheck"
  }
];

export const SWITCH_APPS = [
  { name: "IRCTC Train Tickets", category: "Travel", desc: "Zero convenience fee on train bookings", icon: "Train" },
  { name: "Swiggy & Domino's", category: "Food", desc: "Order food & get instant UPI discounts", icon: "Utensils" },
  { name: "MakeMyTrip & Yatra", category: "Flights & Hotels", desc: "Exclusive hotel deals & flight offers", icon: "Plane" },
  { name: "PVR & BookMyShow", category: "Entertainment", desc: "Book movie tickets seamlessly", icon: "Film" }
];

export const STATS_DATA = [
  { value: "500M+", label: "Registered Users Across India", detail: "Over 1 in 3 Indians use PhonePe" },
  { value: "35M+", label: "Merchant Partners", detail: "Accepted in kirana stores to shopping malls" },
  { value: "45%+", label: "Market Share in UPI", detail: "India's #1 digital payments platform" },
  { value: "250M+", label: "Daily Transactions", detail: "Processing transactions seamlessly 24x7" }
];

export const PRESS_ARTICLES = [
  {
    id: 1,
    date: "August 2026",
    category: "Corporate",
    title: "PhonePe achieves record 7.5 Billion monthly UPI transactions",
    summary: "Reinforcing its market leadership in digital financial inclusion across Tier 2 and Tier 3 cities in India.",
    readTime: "3 min read"
  },
  {
    id: 2,
    date: "July 2026",
    category: "Product Launch",
    title: "PhonePe introduces AI-powered Soundbox 2.0 with multilingual support",
    summary: "Enhanced audio clarity and battery life designed for high-density retail counters.",
    readTime: "4 min read"
  },
  {
    id: 3,
    date: "June 2026",
    category: "Wealth & Gold",
    title: "Over 10 Million users invest in 24K Digital Gold on PhonePe",
    summary: "Democratizing gold investments with micro-savings starting at just ₹1.",
    readTime: "5 min read"
  }
];

export const FOOTER_LINKS = {
  general: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Press & Media", path: "/press" },
    { label: "Ethics & Compliance", path: "/about" },
    { label: "Contact Us", path: "/about" }
  ],
  business: [
    { label: "PhonePe for Business", path: "/business" },
    { label: "Merchant Soundbox", path: "/business" },
    { label: "Payment Gateway", path: "/business" },
    { label: "Smart POS Machine", path: "/business" },
    { label: "Advertise on PhonePe", path: "/business" }
  ],
  services: [
    { label: "UPI Money Transfer", path: "/" },
    { label: "Recharge & Utilities", path: "/" },
    { label: "24K Digital Gold", path: "/wealth" },
    { label: "Mutual Funds", path: "/wealth" },
    { label: "Motor & Health Insurance", path: "/insurance" }
  ],
  legal: [
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
    { label: "Grievance Policy", path: "#" },
    { label: "Trust & Security", path: "#" },
    { label: "Bug Bounty Program", path: "#" }
  ]
};
