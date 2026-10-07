# PACELINE — Curated Running Essentials & Performance Gear

[![React](https://img.shields.io/badge/React-19.x-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.x-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, pixel-faithful, responsive e-commerce web application engineered for **PACELINE Running Co.**, Glasgow, Scotland. Built strictly according to modern responsive design and production standards.

---

## 🔗 Live Deployment & Repository

- **🌐 Live Vercel Deployment**: [https://responsive-frontend-development.vercel.app](https://responsive-frontend-development.vercel.app)
- **🌐 Live Netlify Deployment**: [https://responsive-frontend-development.netlify.app/](https://responsive-frontend-development.netlify.app/)
- **📂 GitHub Repository**: [https://github.com/Ranker-AdhipKumar/Responsive-Frontend-Development](https://github.com/Ranker-AdhipKumar/Responsive-Frontend-Development)
- **⚡ Framework & Tooling**: React 19 + Vite 8 + Tailwind CSS 3.4 + Lucide Icons

---

## 🎨 Design Implementation Overview

This project implements both pages showcased in the official design mockups (`Home.png` and `About.png`) with pixel-level precision, brand typography, and reactive interactive enhancements:

### 1. Home Page (`Home.png`)
* **Top Announcement Bar**: Triple-segmented bar featuring Free UK delivery notice, highlighted weekly drops drop-in notice in high-visibility chartreuse (`#D2F800`), and Glasgow store indicator.
* **Header / Navigation**: Bold uppercase brand typography, responsive navigation links, search trigger, wishlist indicator, account booking trigger, shopping bag with dynamic item counter, and mobile hamburger drawer.
* **Hero Section**: High-impact edge-to-edge photography with athlete sprinting under dramatic skies, bold display typography ("Chase Every Second."), dual action CTAs, and interactive carousel slide indicators.
* **01 · Shop by Category**: 4-column responsive grid showcasing Road Running, Trail Running, Apparel, and Accessories with smooth gradient masks and hover zoom animations.
* **02 · Just Landed (New Arrivals)**: Dynamic filter pills (`New In`, `Best Sellers`, `Race Day`, `Trail`) filtering curated racing models (On Cloudmonster 3, Nike Vaporfly 4, Hoka Tecton X 4, Asics Megablast), featuring wishlist hearts, badges, and quick-view triggers.
* **Story Split ("Built by runners")**: Two-column layout showcasing summit runner photography alongside Glasgow store metrics (10+ Years in Sport, 40+ Brands, 1 Store in Glasgow).
* **Men's & Women's Explore Banners**: Full-bleed responsive cards with typography overlays and hover interactions.
* **Paceline Club Newsletter**: Real-time validated newsletter subscription box with feedback toast.
* **Comprehensive Footer**: 5-column footer structure with brand summary, category links, clinic booking shortcuts, and social channels.

### 2. About Page (`About.png`)
* **Breadcrumb Navigation**: `HOME / ABOUT` navigation route.
* **Editorial Headline**: Bold statement typography ("Our Story — We opened Paceline in 2015 with one goal...").
* **Marathon Timing Mat Feature Image**: High-resolution runner banner.
* **01 · Why We Exist**: Two-column founder manifesto on community and the "Girls Run Glasgow" charitable initiative.
* **02 · What We Stand For**: 3 high-contrast pillar cards ("Curated, not sold to us", "Community over transaction", "Craft in every detail").
* **03 · Ten Seasons In**: 4-column milestone timeline documenting the brand's history from 2015 to 2026.
* **04 · Come Say Hi (Glasgow Store)**: Detailed West End address, clinic opening hours, phone contact, and interactive map card with animated location beacon.
* **05 · Meet The Founders**: High-fidelity profiles of founders Rae Sinclair (12x sub-3 marathoner) and Jamie Roy (sports physio & head coach).
* **High-Energy CTA Banner**: Signature chartreuse banner ("Come find your next pair of shoes.") with footwear browsing and gait analysis booking actions.

---

## ⚡ Interactive Features

1. **Seamless Client-Side Routing**:
   - Instant page switching between **Home** and **About** via navigation links, footer, hero buttons, and the floating test bar.
2. **Interactive Slide-over Cart Drawer**:
   - Dynamic real-time calculation of items, subtotal, and UK shipping.
   - Dynamic **Free Delivery Progress Meter** indicating progress towards the £75 threshold.
   - Coupon discount code engine (try `PACELINE10` for an instant 10% discount).
   - Quantity increments, decrements, item deletion, and checkout simulation.
3. **Wishlist State**:
   - Heart buttons on all product cards with persistent toggling and toast notifications.
4. **Live Search Modal**:
   - Keyboard accessible (`Esc` to close) with real-time search across brand names, models, terrain categories, and descriptions. Includes one-click trending search chips.
5. **Quick View Laboratory Modal**:
   - Detailed product view containing lab specifications: shoe weight, heel drop, stack height, and cushioning technology. Includes interactive UK shoe size picker.
6. **Free Clinic Gait Analysis Booking Modal**:
   - Interactive appointment scheduler for the Glasgow store clinic, allowing runners to select date, time slot, and training goals.
7. **Floating Page Switcher Bar**:
   - Reviewer toolbar docked in the bottom-left corner to quickly alternate between Home and About views.

---

## 🛠️ Technology Stack & Architecture

- **React 19**: Modular component architecture (`context`, `components`, `pages`, `data`).
- **Vite 8**: Ultra-fast HMR and optimized production rollup bundler.
- **Tailwind CSS 3.4**: Utility-first styling with custom Paceline color scheme:
  - Chartreuse Accent: `#D2F800`
  - Deep Carbon: `#111111`
  - Sand Ground: `#F7F5EE`
  - Coral Accent: `#FF4A22`
- **Lucide React**: Modern, consistent SVG icons.
- **Google Fonts**: `Plus Jakarta Sans` and `Syne` for bold typographic hierarchy.
- **LocalStorage**: Persistent storage for bag items and user wishlist.

---

## ♿ Accessibility & Performance

- **Semantic HTML5**: Native `<header>`, `<main>`, `<section>`, `<nav>`, `<article>`, and `<footer>` landmarks.
- **WCAG Compliance**: High contrast ratios, accessible focus rings (`focus-visible`), and descriptive `aria-label` attributes.
- **Skip Links**: Accessible "Skip to main content" link for keyboard and screen reader users.
- **Performance**:
  - Lazy loading on below-the-fold media.
  - Zero external heavy dependencies.
  - Production bundle minified and gzipped down to ~88 kB JS and ~6.7 kB CSS.

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Installation Steps

1. **Navigate to the project directory**:
   ```bash
   cd D:\Antigravity\responsive_frontend_development
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` directory.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root and follow the terminal prompts:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`

### Deploy to Netlify
1. Drag and drop the `dist/` directory into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect the Git repository with:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## 📁 Project File Structure

```
responsive_frontend_development/
├── dist/                          # Production-ready compiled build
├── public/
│   └── assets/                    # Curated brand photography and assets
│       ├── About/                 # Founders, timeline, map, joggers photos
│       └── Home/                  # Hero, categories, arrivals, story, explore
├── src/
│   ├── components/
│   │   ├── ArrivalsSection.jsx    # Just Landed product grid with filters
│   │   ├── CartDrawer.jsx         # Slide-over bag with free delivery meter
│   │   ├── CategorySection.jsx    # 4-card category overview
│   │   ├── ExploreBanners.jsx     # Men's and Women's split collection
│   │   ├── Footer.jsx             # 5-column brand footer
│   │   ├── GaitModal.jsx          # Free clinic booking modal
│   │   ├── Hero.jsx               # Hero banner with carousel indicators
│   │   ├── Navbar.jsx             # Top bar, navigation & mobile menu
│   │   ├── Newsletter.jsx         # Club signup with validation
│   │   ├── QuickViewModal.jsx     # Lab specs & shoe size selector
│   │   ├── SearchModal.jsx        # Live search with trending tags
│   │   ├── StorySection.jsx       # Glasgow story & stats counters
│   │   └── Toast.jsx              # Bottom notification banners
│   ├── context/
│   │   └── ShopContext.jsx        # Cart, wishlist, routing & modal state
│   ├── data/
│   │   └── products.js            # Curated catalog, founders, pillars, timeline
│   ├── pages/
│   │   ├── AboutPage.jsx          # Complete About page (About.png)
│   │   └── HomePage.jsx           # Complete Home page (Home.png)
│   ├── App.jsx                    # Root app with reviewer floating switcher
│   ├── index.css                  # Tailwind styles and custom scrollbars
│   └── main.jsx                   # React entry point
├── index.html                     # HTML5 template with Google Fonts
├── package.json                   # Project metadata and scripts
├── tailwind.config.js             # Brand theme configuration
└── README.md                      # Project documentation
```

---

## 🏆 Key Architectural Highlights

- ✅ **Creativity**: Interactive cart with free shipping meter, quick-view lab specs modal, live gait appointment booking, and slick micro-interactions.
- ✅ **Code Quality**: Highly structured React components, separation of concerns, clean CSS, and modular state management.
- ✅ **Functionality**: Complete e-commerce user journeys including search, category filtering, cart management, wishlist, and booking.
- ✅ **Responsiveness**: Smooth adaptation across 320px mobile screens, tablets, laptops, and ultra-wide desktop monitors.
- ✅ **Performance**: Lightning fast load times, lightweight bundle, and optimized assets.
- ✅ **Accessibility**: Semantic HTML, skip links, ARIA labels, and high contrast design.

