# Component Inventory

**Date:** 8 April 2026, 03:00 WIB

---

## Layout Components

### Navbar (`/src/components/layout/Navbar.tsx`)
**Status:** ✅ Complete  
**Features:**
- Fixed top navigation
- Glass-premium background
- Logo: "Sembada Batu" (gold) + "Beling" (silver)
- Desktop: Horizontal links + Produk megamenu
- Produk megamenu: 2-column grid with icons, hover bridge
- Mobile: Hamburger menu with product submenu
- Scroll detection (shrinks on scroll)
- Active route highlighting

### Footer (`/src/components/layout/Footer.tsx`)
**Status:** ✅ Complete  
**Features:**
- 4-column layout (Brand, Navigation, Products, Contact)
- Logo with cursive tagline
- Social media icons (Instagram, WhatsApp, Facebook)
- All product links with FontAwesome icons + descriptions
- Newsletter email input
- Copyright bar

### Section (`/src/components/layout/Section.tsx`)
**Status:** ✅ Created (minimal usage)  
**Props:** `variant`, `padding`

---

## Section Components

### Hero (`/src/components/sections/Hero.tsx`)
**Status:** ✅ Complete  
**Features:**
- Full viewport height
- Animated starry background (14 manual stars)
- Sparkling stars overlay
- Falling stars layer
- Gold gradient headline
- Cursive tagline (Dancing Script)
- Dual CTA buttons
- Scroll indicator

### AboutSection (`/src/components/sections/AboutSection.tsx`)
**Status:** ✅ Complete  
**Features:**
- Two-column layout (image + content)
- Hexagonal image container
- Stats row (15+ years, 500+ projects)
- Blurred glow effect

### ProductGrid (`/src/components/sections/ProductGrid.tsx`)
**Status:** ✅ Complete  
**Features:**
- 6 product cards
- Hexagonal containers with 8px gold borders
- Staggered layout (translate-y offsets)
- Hover: scale + image reveal
- Icon overlay on hover

### ValueProposition (`/src/components/sections/ValueProposition.tsx`)
**Status:** ✅ Complete  
**Features:**
- Two-column layout
- 4 pillars with hexagonal icons
- Quote card with glass effect
- Blueprint image

### PortfolioSection (`/src/components/sections/PortfolioSection.tsx`)
**Status:** ✅ Complete  
**Features:**
- Reusable portfolio grid
- Hexagonal image containers with 5px borders
- Category badge centered on hexagon
- Hover: grayscale → color + scale
- "View All" link

---

## UI Components

### Button (`/src/components/ui/Button.tsx`)
**Status:** ✅ Complete  
**Variants:** `primary`, `secondary`, `ghost`  
**Sizes:** `sm`, `md`, `lg`

### Heading (`/src/components/ui/Heading.tsx`)
**Status:** ✅ Complete  
**Levels:** 1-4 (H1-H4)  
**Variants:** `default`, `gold`

### Card (`/src/components/ui/Card.tsx`)
**Status:** ✅ Complete  
**Variants:** `default`, `glass`, `hexagon`

### SEO (`/src/components/ui/SEO.tsx`)
**Status:** ✅ Complete  
**Features:**
- Dynamic meta tags
- Open Graph tags
- Twitter cards

### FloatingWhatsApp (`/src/components/ui/FloatingWhatsApp.tsx`)
**Status:** ✅ Complete  
**Features:**
- Fixed bottom-right position
- Hexagonal shape
- Green color (#25D366)
- WhatsApp icon (inline SVG)
- Hover: scale + glow

### StarryBackground (`/src/components/ui/StarryBackground.tsx`)
**Status:** ✅ Complete  
**Variants:** `subtle`, `normal`, `dense`  
**Features:**
- Deterministic star positions
- 25+ small stars + 5 gold accent stars
- Twinkling animations
- Used on ALL sections

---

## Page Components

### HomePage (`/src/pages/HomePage.tsx`)
**Sections:** Hero → AboutSection → ProductGrid → ValueProposition

### AboutPage (`/src/pages/AboutPage.tsx`)
**Sections:** Hero → Legacy (image + stats) → Visi & Misi (bento grid) → Nilai Utama → CTA

### ProductKnowledgePage (`/src/pages/ProductKnowledgePage.tsx`)
**Sections:** Hero → 7 Product Hex Cards → Featured Quality → Custom Solutions CTA

### PortfolioPage (`/src/pages/PortfolioPage.tsx`)
**Sections:** Hero → Filter Tabs (sticky) → Portfolio Grid (hexagonal) → CTA

### ContactPage (`/src/pages/ContactPage.tsx`)
**Sections:** Hero → Contact Form + Info Grid → Map Placeholder

### Product Detail Pages (7 total)
**Pattern:** Hero → Variants → Features → Portfolio → CTA

1. **PortableToiletPage** - 3 variants, 5 portfolios
2. **CubicleToiletPage** - 5 variants, 4 portfolios
3. **OfficeCubiclePage** - 3 variants, 3 portfolios
4. **MovableDoorPage** - 4 variants, 3 portfolios
5. **CNCOrnamentPage** - Showcase grid, 5 portfolios
6. **CellustonePage** - 2 applications, 3 portfolios
7. **LaboratoriumCabinetPage** - 3 variants (bento), 3 portfolios

---

## Data Files

### products.ts
**Location:** `/src/data/products.ts`  
**Contents:** Product data with names, paths, descriptions, icons

### productIcons.tsx
**Location:** `/src/data/productIcons.tsx`  
**Contents:** Inline SVG icons for 7 products
- fa-toilet, fa-door-open, fa-desktop, fa-door-closed, fa-gear, fa-layer-group, fa-flask

### portfolios.ts
**Location:** `/src/data/portfolios.ts`  
**Contents:** 26 portfolio projects across 7 categories
- CNC Ornament: 5 projects
- Portable Toilet: 5 projects
- Cubicle Toilet: 4 projects
- Lab Cabinet: 3 projects
- Movable Door: 3 models
- Office Cubicle: 3 models
- Cellustone: 3 projects

---

## CSS Architecture

### index.css
**Location:** `/src/index.css`  
**Contains:**
- Tailwind directives
- Starry night animations (4 keyframes)
- Gold gradient text class
- Glassmorphism class
- Hexagon clip-path
- Hexagon border wrappers (3 sizes)
- Custom scrollbar styling
- Cursive font class
- Reduced motion support

### tailwind.config.js
**Theme Extensions:**
- Colors: obsidian (3 levels), gold (5 shades), text (3 levels)
- Fonts: heading, body (both Inter)
- Shadows: glass, gold glow (3 sizes)
- Animations: twinkle, shooting stars

---

## Unused/Legacy Files

### style.css (root)
**Status:** ⚠️ Legacy, not used in app  
**Location:** `/style.css`  
**Note:** Kept for reference only

### style.css (in src/styles)
**Status:** ⚠️ Imported but mostly overridden  
**Location:** `/src/styles/style.css`

### organisms/Footer.tsx
**Status:** ⚠️ Unused  
**Location:** `/src/components/organisms/Footer.tsx`  
**Note:** Use `/src/components/layout/Footer.tsx` instead

---

*Inventory created: 8 April 2026, 03:00 WIB*  
*Update when adding/removing components.*
