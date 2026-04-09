# Technical Decisions Log

**Date:** 7 April 2026  
**Timezone:** WIB (UTC+7)

---

## 1. Technology Stack Selection

### 1.1 Framework Choice
**Time:** 07:00 WIB  
**Decision:** React + Vite + TypeScript  
**Alternatives Considered:**
- Next.js → Overkill for static company profile
- Plain HTML/CSS/JS → Harder to maintain, no component reusability
- Vue/Nuxt → Less ecosystem maturity

**Rationale:** 
- Vite provides fast HMR and optimized builds
- TypeScript catches errors early
- React has largest ecosystem and community
- Static site can be deployed anywhere

### 1.2 Styling Approach
**Time:** 13:30 WIB (CHANGED from initial decision)  
**Initial Decision:** Global CSS (style.css with custom properties)  
**Final Decision:** TailwindCSS v3.4 + shadcn/ui approach + minimal custom CSS

**Why Changed:**
- User wanted industry-standard approach
- TailwindCSS faster for development
- shadcn/ui provides copy-paste components (own the code)
- Easier for beginners to understand utility classes
- Better for team collaboration

**What We Kept in Custom CSS:**
- Animated starry backgrounds
- Gold gradient text effect
- Hexagonal clip-paths
- Custom scrollbar styling

### 1.3 TailwindCSS Version
**Time:** 14:00 WIB  
**Decision:** TailwindCSS v3.4.0 (NOT v4)  
**Rationale:**
- v4 has breaking changes
- v4 requires `@tailwindcss/postcss` package
- v4 uses `@import "tailwindcss"` instead of `@tailwind` directives
- v4 less documented, fewer tutorials available
- Cloudflare build environment may not support v4 yet

---

## 2. Design System Decisions

### 2.1 Typography
**Time:** 09:45 WIB (CHANGED)  
**Initial:** Cinzel (headings) + Inter (body) - serif + sans-serif mix  
**Final:** Inter ONLY (sans-serif exclusively)

**Rationale:**
- User explicitly requested sans-serif only
- More modern, cleaner look
- Matches PDF brochure aesthetic
- Easier to maintain consistency

**Exception:** Dancing Script (cursive) for tagline "Integritas untuk Sukses dan Barokah"

### 2.2 Company Name
**Time:** 02:00 WIB+1 (Next day)  
**Decision:** "Sembada BatuBeling" (NOT "PT. Batu Beling")  
**Format:** 
- Full: "Sembada BatuBeling" (no space between Batu and Beling, capital B)
- Site title: "Sembada Batu" (gold) + "Beling" (silver)

**Rationale:**
- PDF brochure uses "Sembada BatuBeling"
- "PT. Batu Beling" is parent company, outdated for this site
- Silver "Beling" creates visual distinction

### 2.3 Hexagonal Border Approach
**Time:** 02:30 WIB+1  
**Problem:** `clip-path` cuts through CSS borders, borders don't show on all sides  
**Solution:** Wrapper classes with pseudo-elements

```css
.hexagon-border-5::before {
  content: '';
  position: absolute;
  inset: -5px;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.8), rgba(212, 175, 55, 0.4));
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  z-index: -1;
}
```

**Alternative Considered:** SVG borders  
**Rejected Because:** More complex, harder to maintain, performance impact

---

## 3. Component Architecture Decisions

### 3.1 Icon Strategy
**Time:** 20:00 WIB  
**Initial:** FontAwesome CDN  
**Problem:** Blocked by ad blockers (uBlock Origin, Adblock Plus)  
**Final:** Inline SVG components

**File:** `/src/data/productIcons.tsx`  
**Rationale:**
- Zero network requests
- Never blocked by ad blockers
- Works offline
- Easily customizable with CSS
- Bundled with code

### 3.2 Portfolio Data Structure
**Time:** 21:30 WIB  
**Decision:** Single data file (`portfolios.ts`) with all products  
**Structure:**
```typescript
export const portfolioData = {
  'cnc-ornament': [...],
  'portable-toilet': [...],
  // etc.
}
```

**Alternative Considered:** Individual JSON files per product  
**Rejected Because:** Harder to maintain, more imports

### 3.3 StarryBackground Component
**Time:** 00:00 WIB+1  
**Decision:** Reusable React component with deterministic star positions  
**Why Component:** 
- Need stars on ALL sections, not just hero
- Consistent star distribution
- Variants: subtle, normal, dense
- Performance: Deterministic positions (no random generation on every render)

---

## 4. Deployment Decisions

### 4.1 Platform
**Time:** 08:00 WIB  
**Decision:** Cloudflare Pages  
**Alternatives:**
- Vercel → Great but more expensive for team features
- Netlify → Good but Cloudflare has better CDN
- GitHub Pages → Limited features, no custom domain SSL auto

**Rationale:**
- Free tier very generous
- Automatic HTTPS
- Global CDN
- Custom domain support
- Auto-deployment from Git

### 4.2 TypeScript Configuration
**Time:** 06:24 WIB+1  
**Issue:** Cloudflare uses stricter TypeScript  
**Fixes Applied:**
1. Removed deprecated `baseUrl`
2. Changed to `"./src/*"` path syntax
3. All type-only imports use `import type`
4. No unused imports or variables

---

## 5. User Experience Decisions

### 5.1 Navbar Megamenu
**Time:** 19:30 WIB  
**Decision:** Hover-activated megamenu for "Produk"  
**Features:**
- 2-column grid of products
- Each product has icon + name + description
- Invisible bridge prevents hover gap
- Mobile: Accordion submenu

### 5.2 Portfolio Filtering
**Time:** 21:45 WIB  
**Decision:** Sticky horizontal filter tabs  
**Features:**
- Filter by product category
- "Semua Proyek" shows all
- Sticky position stays visible on scroll
- Custom scrollbar (gold gradient)
- Horizontal scroll on mobile (scrollbar hidden but functional)

### 5.3 Floating WhatsApp
**Time:** 20:15 WIB  
**Decision:** Hexagonal green button on all pages  
**Position:** Bottom-right, fixed  
**Rationale:** 
- Indonesian market prefers WhatsApp contact
- Always accessible
- Matches hexagonal theme
- Green stands out from gold theme

---

*Decisions logged: 8 April 2026, 03:00 WIB*  
*Review and update as project evolves.*
