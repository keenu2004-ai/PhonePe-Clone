# PhonePe — High-Fidelity Responsive Website Recreation

## Description
This repository contains a production-quality, high-fidelity frontend recreation of the official PhonePe website built for educational and portfolio presentation purposes. It accurately reproduces PhonePe's visual design system, navigation hierarchy, desktop mega-menus, dedicated mobile drawer navigation, responsive card layouts, smooth CSS micro-animations, and interactive UI simulations.

## Disclaimer
> **UNOFFICIAL EDUCATIONAL RECREATION:** This project is an independent educational demonstration and is **not affiliated with, endorsed by, or representing PhonePe Internet Private Limited**. No real payment processing, financial data collection, OTP verification, or bank credential access occurs within this application. All interactions are safe, client-side UI simulations.

---

## Technologies Used
- **React 18** — Component-based architecture & hooks state management
- **Vite** — High-performance frontend build tooling & hot module replacement (HMR)
- **React Router DOM v6** — Client-side multi-page routing
- **Vanilla CSS3** — Centralized design tokens, CSS variables, `clamp()` responsive typography, Flexbox & CSS Grid layouts
- **Lucide React** — Modern lightweight icon suite
- **Web Speech API** — Safe browser speech synthesis for PhonePe Merchant Soundbox audio alert demonstration

---

## Key Features & Highlights

1. **Brand Design System & Tokens (`variables.css` & `global.css`)**
   - Official PhonePe Deep Purple (`#5f259f`), Emerald Green accents (`#00c853`), Gold highlights, and dark mode neutrals.
   - Fluid typography with `clamp()` scaling smoothly across mobile (320px) up to ultra-wide displays (1920px).

2. **Dual-Tier Navigation System (`Navbar.jsx`)**
   - **Desktop Mega-Menu**: Dropdown menus for Business Solutions, Wealth & Investments, Insurance, and Company links with smooth hover transitions and backdrop blur on scroll.
   - **Dedicated Mobile Drawer**: Touch-friendly slide-in menu with expandable accordions for sub-categories and close controls.

3. **Interactive Hero & Phone Mockup (`Hero.jsx`)**
   - Headline: *"India's Payments App — Makes Progress Happen"*
   - Live Phone Mockup screen switcher showcasing:
     - **UPI Scan & Pay Screen**: Real-time QR scanner visual & instant transfer status badge.
     - **Recharge & Utilities Screen**: Mobile pack selector & payment CTA.
     - **24K Digital Gold Screen**: Live gold rate ticker & vault storage guarantee.
     - **Merchant Soundbox Screen**: Browser audio voice notification alert demo ("PhonePe par ₹1,250 praapt hue").

4. **Comprehensive Homepage Sections**
   - **Everyday Payment Services**: Money Transfer, Mobile Recharge, Electricity Bills, Rent Payment, Credit Card Bills, and FASTag.
   - **PhonePe for Business**: Soundbox simulator, Payment Gateway checkout demo, and Smart POS machine.
   - **Wealth & Investments**: 24K Digital Gold, Mutual Fund cards, and an **Interactive SIP Return Calculator** with live slider math calculations.
   - **Insurance Hub**: Two-Wheeler, Car, Health, and Term Life insurance cards with instant dummy quote simulation modals.
   - **PhonePe Switch**: Integrated mini-apps for IRCTC Train Tickets, Swiggy, MakeMyTrip, and PVR Movies.
   - **Trust & Scale Metrics**: Counter metrics (500M+ Registered Users, 35M+ Merchants, 45%+ UPI share) and 256-bit encryption safety badge.
   - **Press & Media Highlights**: Latest newsroom stories and technological milestones.
   - **App Download Banner**: Responsive QR code & Google Play / App Store buttons.

5. **Accessibility & SEO Compliance**
   - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Accessible touch targets, focus outlines, ARIA labels, and `prefers-reduced-motion` CSS support.
   - Open Graph metadata, title tag, and meta description.

---

## Project Architecture

```text
phonepe/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Business/
│   │   │   ├── BusinessSection.jsx
│   │   │   └── Business.css
│   │   ├── DownloadApp/
│   │   │   ├── DownloadAppSection.jsx
│   │   │   └── DownloadApp.css
│   │   ├── Features/
│   │   │   ├── ServicesGrid.jsx
│   │   │   └── ServicesGrid.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Insurance/
│   │   │   ├── InsuranceSection.jsx
│   │   │   └── Insurance.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Press/
│   │   │   ├── PressSection.jsx
│   │   │   └── Press.css
│   │   ├── Stats/
│   │   │   ├── StatsSection.jsx
│   │   │   └── Stats.css
│   │   ├── Switch/
│   │   │   ├── SwitchSection.jsx
│   │   │   └── Switch.css
│   │   ├── UI/
│   │   │   ├── DisclaimerBanner.jsx
│   │   │   ├── DisclaimerBanner.css
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.css
│   │   └── Wealth/
│   │       ├── WealthSection.jsx
│   │       └── Wealth.css
│   ├── data/
│   │   └── content.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── BusinessPage.jsx
│   │   ├── CareersPage.jsx
│   │   ├── Home.jsx
│   │   ├── InsurancePage.jsx
│   │   ├── PressPage.jsx
│   │   └── WealthPage.jsx
│   ├── styles/
│   │   ├── animations.css
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Installation & Setup

1. **Clone or Navigate to Project Directory:**
   ```bash
   cd C:\Users\Vaibhav\OneDrive\Music\phonepe
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Verify Production Build:**
   ```bash
   npm run build
   ```
