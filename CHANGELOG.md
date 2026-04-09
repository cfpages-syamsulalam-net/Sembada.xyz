# Changelog: Sembada BatuBeling Website

All notable changes to this project will be documented in this file with **specific WIB (UTC+7) timestamps** for complete chronological context.

**Format:** [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)  
**Project Type:** Company Profile Website (React + Vite + TypeScript)  
**Design System:** Midnight Obsidian  
**Timezone:** WIB (Western Indonesian Time, UTC+7)

---

## [Planning & Documentation Phase] - 7 April 2026

### 07:00 - 09:30 WIB - Initial Setup & Documentation

#### Added
- **DESIGN.md** - Complete design system with React specifications
  - Creative vision: "The Obsidian Monolith"
  - Color system with surface hierarchy
  - Typography system with exact type scales
  - Component design specs
  - Animation & motion guidelines
  - Accessibility standards
  
- **COMPONENTS.md** - React component architecture documentation
  - Atomic design hierarchy (Atoms → Molecules → Organisms → Layouts)
  - 40+ component specifications with props API
  - State management strategy
  - Component development phases
  
- **PAGES.md** - Page structure and routing guide
  - Complete sitemap (15-16 pages)
  - React Router configuration
  - Content specifications for each page
  - SEO strategy (meta tags, structured data)
  
- **DEVELOPMENT.md** - Development workflow guide
  - Technology stack: React + Vite + TypeScript
  - Project setup instructions
  - 5-phase development timeline (28 days)
  - Deployment options (Vercel, Netlify, GitHub Pages)
  
- **QWEN.md** - AI assistance rules and project guidelines
  - File editing protocol (no total replacements)
  - Context preservation requirements
  - CHANGELOG.md protocol
  - Design system rules
  
- **style.css** - Production-ready global CSS (1,678 lines)
  - Complete design tokens as CSS custom properties
  - Modern CSS reset
  - Typography system
  - Layout utilities (container, grid, flexbox)
  - Glassmorphism components
  - Button variants (primary, secondary, ghost)
  - Card components (product cards, feature cards)
  - Form elements (inputs, checkboxes, radios)
  - Navigation components
  - Hero section
  - Utility classes
  
- **CHANGELOG.md** - This file (project progress tracking)

#### Changed
- **`.MD/sembada-design-system.md`** (07:30 WIB) - Updated with references to new comprehensive documentation
- **`.MD/sembada-sitemap-dan-struktur.md.txt`** (07:35 WIB) - Updated with final URL structure and documentation references

---

## [Strategy Update] - 7 April 2026

### 09:30 - 11:00 WIB - Major Pivot Discussion

#### Major Changes
- **Switched from global CSS to shadcn/ui + TailwindCSS** (10:00 WIB)
  - Reason: Industry standard, faster development, better for beginners
  - shadcn/ui provides copy-paste components (you own the code)
  - TailwindCSS for utility-first styling
  - Easier to maintain and customize
  
- **Changed fonts to sans-serif only** (10:15 WIB)
  - Removed: Cinzel, Playfair Display (serif fonts)
  - Using: Inter, Manroge, Plus Jakarta Sans (sans-serif)
  - Reason: Modern, clean, more professional look per user request
  
- **Added comprehensive beginner documentation** (10:30 WIB)
  - `/BEGINNER_GUIDE.md` - Complete React/Vite guide for beginners
  - `/CLOUDFLARE_DEPLOY.md` - Step-by-step deployment guide
  
- **Project pushed to GitHub** (10:45 WIB)
  - Repository: https://github.com/cfpages-syamsulalam-net/Sembada.xyz
  - Ready for Cloudflare Pages deployment
  
- **Deployment strategy defined** (10:50 WIB)
  - Target: Cloudflare Pages (free tier)
  - Custom domain: sembada.xyz
  - Automatic deployments on push to main branch

#### Files Updated
- **DESIGN.md** (10:05 WIB) - Updated typography (sans-serif only), CSS architecture (shadcn/ui + TailwindCSS)
- **QWEN.md** (10:10 WIB) - Updated design rules (no global CSS, use TailwindCSS, sans-serif fonts only)
- **CHANGELOG.md** (10:55 WIB) - This entry

#### Files Created
- **BEGINNER_GUIDE.md** (10:30 WIB) - Comprehensive guide for React/Vite beginners
- **CLOUDFLARE_DEPLOY.md** (10:40 WIB) - Complete deployment guide with Cloudflare Pages

#### Deprecated
- **style.css** (global CSS approach) (10:00 WIB) - Kept for reference but will not be used in React app

---

## [Phase 1: Foundation - FIRST ATTEMPT] - 7 April 2026

### 11:00 - 13:30 WIB - Initial React Setup

#### Added
- **Vite + React + TypeScript project** (11:05 WIB) - `sembada-app` folder created
  - Vite 9.0.4 with React template
  - TypeScript 5+ configuration
  - Path aliases (`@/*` → `src/*`)
  
- **Dependencies installed** (11:15 WIB)
  - `react` + `react-dom` (18+)
  - `react-router-dom` (6+) - Client-side routing
  - `@types/node` - Node type definitions for Vite config
  
- **Project folder structure** (11:20 WIB)
  ```
  src/
  ├── components/
  │   ├── atoms/
  │   ├── molecules/
  │   ├── organisms/
  │   ├── layouts/
  │   └── ui/
  ├── pages/
  ├── data/
  ├── hooks/
  ├── utils/
  ├── styles/
  └── public/
  ```

- **Configuration files** (11:30 WIB)
  - `tsconfig.app.json` - With path aliases
  - `vite.config.ts` - With React plugin and alias resolution
  - `index.html` - With Google Fonts (Inter + Material Symbols)
  
- **Initial components created** (12:00 - 13:00 WIB)
  - `Navbar.tsx` - Basic navigation
  - `Footer.tsx` - Simple footer
  - `Hero.tsx` - Hero section
  - `HomePage.tsx` - Landing page
  - `AboutPage.tsx` - About page (placeholder)

#### Issues & Fixes
- **Navbar alignment issue** (12:45 WIB)
  - Problem: "Produk" nav link higher than others
  - Fix: Wrapped button in `flex items-center h-full` container
  
- **Duplicate AboutPage error** (13:00 WIB)
  - Problem: `Identifier 'AboutPage' has already been declared`
  - Fix: Removed local AboutPage function from App.tsx (using imported one)
  - Timestamp: 13:05 WIB

#### Testing
- ✅ Development server runs without errors
- ✅ Hot Module Replacement (HMR) working
- ✅ TypeScript compilation successful
- ✅ CSS imports working
- ✅ Routing functional
- ✅ Components rendering correctly

---

## [Phase 1: Foundation - RESTARTED WITH TAILWINDCSS] - 7 April 2026

### 13:30 - 15:00 WIB - Complete Rebuild

#### Added
- **TailwindCSS installed** (13:35 WIB)
  - `npm install -D tailwindcss@^3.4.0 postcss autoprefixer`
  - Chose v3.4 over v4 due to breaking changes
  
- **tailwind.config.js** (13:40 WIB)
  - Custom colors: obsidian (3 levels), gold (5 shades), text (3 levels)
  - Custom fonts: heading, body (both Inter)
  - Custom shadows: glass, gold glow (3 sizes)
  - Custom animations: twinkle, shooting stars
  
- **postcss.config.js** (13:42 WIB)
- **index.css with Tailwind directives** (13:45 WIB)

- **Components rebuilt with TailwindCSS** (14:00 - 15:00 WIB)
  - `Navbar.tsx` - Glass-premium, gold gradient logo, responsive
  - `Hero.tsx` - Starry background, gold gradient text
  - `AboutSection.tsx` - Hexagonal image, stats
  - `ProductGrid.tsx` - 6 products with staggered offsets
  - `ValueProposition.tsx` - 4 pillars with hex icons
  - `Footer.tsx` - Multi-column layout

#### Changed
- **Typography changed to sans-serif only** (14:10 WIB)
  - Removed Cinzel from index.html
  - Updated all components to use Inter only
  - Added `font-cursive` class for Dancing Script (tagline only)

- **App.tsx updated** (14:30 WIB)
  - All routes configured
  - Components imported and used

#### Issues & Fixes
- **TailwindCSS v4 compatibility** (13:50 WIB)
  - Problem: v4 requires `@tailwindcss/postcss` and different syntax
  - Fix: Downgraded to v3.4.0 (stable, well-documented)
  - Decision logged in TECHNICAL_DECISIONS.md

---

## [Phase 2: Component Development] - 7 April 2026

### 15:00 - 17:30 WIB - Building All Main Pages

#### Added - Pages
- **HomePage** (15:05 WIB)
  - Hero with animated stars
  - AboutSection
  - ProductGrid
  - ValueProposition
  
- **AboutPage** (15:20 WIB)
  - Hero with eyebrow + H1 + paragraph pattern
  - Legacy section with stats
  - Visi & Misi bento grid
  - Nilai Utama section
  - CTA section
  
- **ProductKnowledgePage** (15:40 WIB)
  - Hero header
  - 7 product hex cards
  - Featured quality section
  - Custom solutions CTA
  
- **PortfolioPage** (16:00 WIB)
  - Hero header
  - Project gallery (rectangular cards initially)
  - CTA section
  - FAB WhatsApp button
  
- **ContactPage** (16:20 WIB)
  - Hero header
  - Contact form with decorative corners
  - Contact info blocks
  - Map placeholder

#### Added - Components
- **StarryBackground.tsx** (16:30 WIB)
  - Reusable star animation component
  - 3 variants: subtle, normal, dense
  - Deterministic star positions
  - Added to ALL sections across all pages

#### Design Decisions
- **Unified page header pattern** (16:45 WIB)
  - Every page must use: Eyebrow span + H1 + Paragraph
  - `text-center` on container
  - `max-w-3xl mx-auto` for paragraph
  - Responsive sizing throughout

---

## [Phase 3: Product Detail Pages] - 7 April 2026

### 17:30 - 19:30 WIB - 7 Product Pages

#### Added - Product Pages
- **PortableToiletPage.tsx** (17:35 WIB)
  - Hero with full-height background
  - 3 variants (Low Price, Standard/Deluxe, Emergency)
  - 4 stats grid
  - Core features with hex images
  - Portfolio section (5 projects)
  - CTA section
  
- **CubicleToiletPage.tsx** (18:00 WIB)
  - 5 variants with staggered offsets
  - Features with hex icons
  - Portfolio section (4 projects)
  
- **OfficeCubiclePage.tsx** (18:15 WIB)
  - 3 modular variants with specs
  - Numbered features
  - Portfolio section (3 projects)
  
- **MovableDoorPage.tsx** (18:30 WIB)
  - 4 variants with watermark numbers
  - Acoustic features
  - Portfolio section (3 models)
  
- **CNCOrnamentPage.tsx** (18:45 WIB)
  - Asymmetric showcase grid (8/4/12 cols)
  - Portfolio section (5 projects)
  
- **CellustonePage.tsx** (19:00 WIB)
  - 2-column bento features
  - Application cards (Fasad & Wall Panel)
  - Portfolio section (3 projects)
  
- **LaboratoriumCabinetPage.tsx** (19:15 WIB)
  - 3-col bento grid variants
  - Chemical resistance features
  - Portfolio section (3 projects)

#### Added - Data & Components
- **portfolios.ts** (19:20 WIB)
  - 26 portfolio projects across 7 categories
  - CNC Ornament: 5 projects
  - Portable Toilet: 5 projects
  - Cubicle Toilet: 4 projects
  - Lab Cabinet: 3 projects
  - Movable Door: 3 models
  - Office Cubicle: 3 models
  - Cellustone: 3 projects
  
- **PortfolioSection.tsx** (19:25 WIB)
  - Reusable component for all product pages
  - Grid layout
  - Grayscale → color hover
  - "View All" link

#### All Pages Updated
- Added `StarryBackground` to multiple sections (19:30 WIB)
- Added `PortfolioSection` to all 7 product pages

---

## [Phase 4: Navbar Megamenu & Footer] - 7 April 2026

### 19:30 - 21:00 WIB

#### Added
- **Navbar megamenu for "Produk"** (19:35 WIB)
  - 2-column grid of products
  - Each product: icon + name + description
  - "Lihat Semua Produk →" link at bottom
  - Hover-activated with invisible bridge
  
- **Product icons** (19:50 WIB)
  - **INITIAL:** FontAwesome CDN (BROKEN - blocked by ad blockers)
  - **FIXED (20:00 WIB):** Inline SVG components in `productIcons.tsx`
  - 7 product icons: toilet, door-open, desktop, door-closed, gear, layer-group, flask
  
- **Footer enriched** (20:15 WIB)
  - 4 columns: Brand, Navigation, Products, Contact
  - All product links with icons + descriptions
  - Social media links (Instagram, WhatsApp, Facebook)
  - Newsletter email input
  
- **FloatingWhatsApp.tsx** (20:20 WIB)
  - Fixed bottom-right position
  - Hexagonal green button
  - Added to App.tsx (appears on ALL pages)
  - Removed inline FAB from PortfolioPage

#### Fixed
- **Navbar "Produk" alignment** (19:40 WIB)
  - Problem: Text higher than other nav links
  - Fix: Wrapped in `flex items-center h-full` container
  
- **Megamenu hover gap** (19:45 WIB)
  - Problem: Hover lost when moving cursor to dropdown
  - Fix: Added invisible bridge `div` (h-3) between trigger and menu
  - Removed `mt-2` gap

---

## [Phase 5: Content & Portfolio System] - 7 April 2026

### 21:00 - 23:00 WIB

#### Added
- **Portfolio data from PDF** (21:15 WIB)
  - User provided PDF content summary
  - Created portfolios.ts with real project names:
    - Mushola Kereta Makan KAI
    - Lab. Ketahanan Papua
    - Gedung DPRD Surabaya
    - Politeknik Surabaya
    - Masjid Baitul Fadli
    - PON (Pekan Olahraga Nasional)
    - etc.

- **PortfolioPage updated** (21:30 WIB)
  - Sticky filter tabs
  - Filter by product category
  - "Semua Proyek" shows all 26 projects
  - Category badges on cards

#### All Product Pages Updated
- Added `PortfolioSection` to each (22:00 - 23:00 WIB)
- Each page shows 3-5 relevant projects
- Link to `/portofolio` for full gallery

---

## [Phase 6: Design Refinements] - 7-8 April 2026

### 23:00 - 01:30 WIB

#### Changed
- **Portfolio cards to hexagonal** (23:15 WIB)
  - Was: Rectangular cards with 4:3 aspect ratio
  - Now: Hexagonal containers with clip-path
  - Category badge centered on hexagon
  - 5px gold gradient border using wrapper class
  
- **Custom scrollbar** (23:30 WIB)
  - Chrome/Edge/Safari: `-webkit-scrollbar` with gold gradient
  - Firefox: `scrollbar-color` property
  - Filter tabs: Hidden horizontal scrollbar but still scrollable

- **StarryBackground added everywhere** (00:00 WIB)
  - Added to AboutPage sections
  - Added to ProductKnowledgePage sections
  - Added to PortfolioPage grid
  - Added to ContactPage content
  - Added to ALL product page sections
  - No more plain black backgrounds!

#### Files Updated
- `index.css` - Added scrollbar styles
- `PortfolioSection.tsx` - Hexagonal layout
- `PortfolioPage.tsx` - Hexagonal grid
- All page files - Added StarryBackground

---

## [Phase 7: Deployment Fix & Final Updates] - 8 April 2026

### 01:30 - 03:00 WIB

#### Fixed - Cloudflare Build Errors
- **`baseUrl` deprecated** (01:35 WIB)
  - Error: `TS5101: Option 'baseUrl' is deprecated`
  - Fix: Removed `baseUrl`, changed to `"./src/*"` paths
  
- **Type imports** (01:40 WIB)
  - Error: `TS1484: must be imported using type-only import`
  - Fix: Changed `import { HTMLAttributes }` to `import type { HTMLAttributes }`
  - Files: Section.tsx, Button.tsx, Card.tsx, Heading.tsx
  
- **JSX namespace** (01:45 WIB)
  - Error: `TS2503: Cannot find namespace 'JSX'`
  - Fix: Changed to `React.ElementType` in Heading.tsx
  
- **Unused imports** (01:50 WIB)
  - Error: `TS6133: declared but its value is never read`
  - Fix: Removed unused Heading, Section from AboutPage.tsx

- **ProductGrid syntax error** (02:45 WIB)
  - Error: `TS1381: Unexpected token`
  - Fix: Fixed missing closing div tag in hexagon container

#### Changed
- **"PT. Batu Beling" → "Sembada BatuBeling"** (02:00 WIB)
  - Footer: "Sembada BatuBeling Subsidiary"
  - AboutSection: `<span>Sembada BatuBeling</span>`
  - AboutPage: Alt text and content
  - HomePage: SEO description
  - Total: 6 occurrences updated
  
- **Site title: "BELING" now silver** (02:15 WIB)
  - Navbar: "Sembada Batu" (gold) + "Beling" (#C0C0C0 silver)
  - Footer: Same treatment
  - Created with split spans and different styling

- **Hexagon borders fixed** (02:30 WIB)
  - Problem: `clip-path` cuts through CSS borders
  - Solution: Created wrapper classes in index.css:
    - `.hexagon-border` - 3px border
    - `.hexagon-border-5` - 5px border (standard)
    - `.hexagon-border-8` - 8px border (prominent)
  - Uses `::before` pseudo-element with same clip-path
  - Updated PortfolioSection, PortfolioPage, ProductGrid

#### Documentation Created
- **CLOUDFLARE_FIXES.md** (02:50 WIB)
  - All deployment errors with solutions
  - TypeScript fixes documented
  - Deployment checklist
  - Common issues & solutions

- **QWEN.md updated** (02:55 WIB)
  - Added site title styling rules
  - Added company name rules (NEVER "PT. Batu Beling")
  - Added hexagonal border rules
  - Added ICONS rule (ALWAYS use inline SVGs)
  - Added reference to deployment docs

- **DESIGN.md updated** (02:55 WIB)
  - Added hexagon border wrapper documentation
  - Added usage examples
  - Added minimum border thickness (5px)

#### Final Build
- **03:00 WIB** - Build successful!
  ```
  dist/index.html                   1.27 kB │ gzip:  0.58 kB
  dist/assets/index-CRbrWlD0.css   43.44 kB │ gzip:  7.67 kB
  dist/assets/index-Ut3egADX.js   354.43 kB │ gzip: 93.61 kB
  ✓ built in 4.87s
  ```

---

## [Context Documentation] - 8 April 2026

### 03:00 - 03:30 WIB

#### Added
- **/.context/ folder** (03:05 WIB)
  - `SESSION_SUMMARY.md` - Complete chronological timeline
  - `TECHNICAL_DECISIONS.md` - All decisions with rationale
  - `QUICK_REFERENCE.md` - Cheat sheet for quick access
  - `COMPONENT_INVENTORY.md` - Complete component list
  - `DEPLOYMENT_NEXT_STEPS.md` - Deployment guide
  - `README.md` - Index explaining how to use

- **CHANGELOG.md updated** (03:15 WIB)
  - Added specific WIB timestamps to ALL entries
  - Complete chronological order
  - Every issue and fix documented with time

---

## Summary

**Total Development Time:** ~20 hours (07:00 WIB Apr 7 - 03:00 WIB Apr 8)  
**Files Created:** 30+  
**Components Built:** 20+  
**Pages Completed:** 12  
**Portfolio Projects:** 26  
**Documentation Files:** 15+  
**Build Status:** ✅ SUCCESSFUL  

**Current Status:** ✅ Ready for Deployment  
**Next Step:** Push to GitHub → Deploy to Cloudflare Pages

---

*Changelog last updated: 8 April 2026, 03:15 WIB*  
*All timestamps in WIB (UTC+7) timezone.*
