# Quick Reference for Future Sessions

**Last Updated:** 12 April 2026, 17:00 WIB

---

## 🚀 Essential Info

| Item | Value |
|------|-------|
| **Project Root** | `C:\Users\THINKPAD\Sembada.xyz` |
| **App Directory** | `C:\Users\THINKPAD\Sembada.xyz\sembada-app` |
| **Dev Server** | `npm run dev` (runs on http://localhost:5173) |
| **Build Command** | `npm run build` |
| **GitHub** | https://github.com/cfpages-syamsulalam-net/Sembada.xyz |
| **Deployment** | Cloudflare Pages (auto-deploy on push to main) |
| **Domain** | sembada.xyz |
| **SEO Score** | 61/100 🟠 Fair |

---

## 📁 Key Files to Read FIRST

1. `/QWEN.md` - AI rules, MUST-read before any work (includes SEO requirements)
2. `/CHANGELOG.md` - What's been done
3. `/SEO_SCORECARD.md` - Current SEO status and pending items
4. `/SEO_PLAN.md` - Complete SEO strategy (8 phases)
5. `/DESIGN.md` - Design specifications

---

## 🔍 SEO Quick Reference

### Every Page MUST Have
- `<SEO>` component with unique title (50-60 chars) and description (150-160 chars)
- Breadcrumb component (except Home page)
- JSON-LD schema (Product schema for product pages)
- Proper heading hierarchy (ONE H1 per page)

### SEO Files That Must Exist
- `public/robots.txt` ✅
- `public/sitemap.xml` ✅
- `public/_redirects` ✅

### SEO Components
- `src/components/ui/SEO.tsx` - Enhanced with canonical, Twitter Cards, robots, theme-color
- `src/components/navigation/Breadcrumb.tsx` - With BreadcrumbList JSON-LD

### Code Splitting
- All routes use `React.lazy` + `Suspense` (App.tsx)
- Custom `PageLoading` fallback component

---

## 🎨 Design Quick Reference

### Colors
```
Background: #0B0C10
Surface: #111216
Gold: #D4AF37 / #f2ca50
Silver: #C0C0C0
Text: #E2E8F0 (primary), #94A3B8 (secondary)
```

### Typography
- **ONLY Inter** (sans-serif)
- Exception: Dancing Script for tagline
- Headlines: `font-black uppercase tracking-tighter`
- Labels: `text-[10px] uppercase tracking-[0.25em]`

### Site Title Format
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#f2ca50] to-[#AA771C]">Sembada Batu </span>
<span className="text-[#C0C0C0]">Beling</span>
```

### Hexagon Borders
```tsx
{/* ALWAYS use wrapper class */}
<div className="hexagon-border-5">
  <div style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
    {/* content */}
  </div>
</div>
```
- `.hexagon-border` = 3px
- `.hexagon-border-5` = 5px (standard)
- `.hexagon-border-8` = 8px (prominent)

### Starry Background
```tsx
import { StarryBackground } from '@/components/ui/StarryBackground'

<section className="relative overflow-hidden">
  <StarryBackground variant="subtle" />
  <div className="relative z-10">
    {/* content */}
  </div>
</section>
```

---

## ⚠️ Common Pitfalls

### DON'T
- ❌ Use "PT. Batu Beling" → Use "Sembada BatuBeling"
- ❌ Use serif fonts (Cinzel, Playfair) → Use Inter only
- ❌ Put borders on clipped elements → Use wrapper classes
- ❌ Import FontAwesome CDN → Use inline SVGs from `productIcons.tsx`
- ❌ Use `baseUrl` in tsconfig → Use `"./src/*"` paths
- ❌ Import types without `import type` → TypeScript error
- ❌ Leave unused imports → Build fails

### DO
- ✅ Run `npm run build` before pushing to GitHub
- ✅ Use responsive breakpoints: `text-3xl md:text-4xl lg:text-5xl`
- ✅ Add `StarryBackground` to all sections
- ✅ Use `text-center` on page headers
- ✅ Follow unified page header pattern (Eyebrow + H1 + P)

---

## 📦 Data Files

| File | Purpose |
|------|---------|
| `/src/data/products.ts` | Product data with icons |
| `/src/data/productIcons.tsx` | Inline SVG icons |
| `/src/data/portfolios.ts` | Portfolio projects per product |

---

## 🔧 Component Locations

### Layout
- `Navbar` → `/src/components/layout/Navbar.tsx`
- `Footer` → `/src/components/layout/Footer.tsx`

### Sections
- `Hero` → `/src/components/sections/Hero.tsx`
- `AboutSection` → `/src/components/sections/AboutSection.tsx`
- `ProductGrid` → `/src/components/sections/ProductGrid.tsx`
- `ValueProposition` → `/src/components/sections/ValueProposition.tsx`
- `PortfolioSection` → `/src/components/sections/PortfolioSection.tsx`

### UI
- `Button` → `/src/components/ui/Button.tsx`
- `Heading` → `/src/components/ui/Heading.tsx`
- `Card` → `/src/components/ui/Card.tsx`
- `FloatingWhatsApp` → `/src/components/ui/FloatingWhatsApp.tsx`
- `StarryBackground` → `/src/components/ui/StarryBackground.tsx`
- `SEO` → `/src/components/ui/SEO.tsx`

### Navigation
- `Breadcrumb` → `/src/components/navigation/Breadcrumb.tsx`

### SEO / Structured Data
- `OrganizationSchema` → `/src/App.tsx` (site-wide)
- `Product` schema → Each product page
- `LocalBusiness` schema → `/src/pages/ContactPage.tsx`
- `WebSite` schema → HomePage in `/src/App.tsx`

---

## 📄 Pages

| Page | Route | File |
|------|-------|------|
| Home | `/` | `pages/HomePage.tsx` |
| About | `/tentang-kami` | `pages/AboutPage.tsx` |
| Products | `/produk` | `pages/ProductKnowledgePage.tsx` |
| Portable Toilet | `/produk/portable-toilet` | `pages/products/PortableToiletPage.tsx` |
| Cubicle Toilet | `/produk/cubicle-toilet` | `pages/products/CubicleToiletPage.tsx` |
| Office Cubicle | `/produk/office-cubicle` | `pages/products/OfficeCubiclePage.tsx` |
| Movable Door | `/produk/movable-door` | `pages/products/MovableDoorPage.tsx` |
| CNC Ornament | `/produk/cnc-ornament` | `pages/products/CNCOrnamentPage.tsx` |
| Cellustone | `/produk/cellustone-ornament` | `pages/products/CellustonePage.tsx` |
| Lab Cabinet | `/produk/laboratorium-cabinet` | `pages/products/LaboratoriumCabinetPage.tsx` |
| Portfolio | `/portofolio` | `pages/PortfolioPage.tsx` |
| Contact | `/hubungi-kami` | `pages/ContactPage.tsx` |

---

## 🚨 Deployment Checklist

Before pushing to GitHub:
1. `npm run build` → Must succeed
2. No TypeScript errors
3. No unused imports
4. All type imports use `import type`
5. Test locally: `npm run dev`

Cloudflare Pages Settings:
- Framework: React (Vite)
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: `sembada-app`

---

## 💡 Tips for Next Session

1. **ALWAYS read QWEN.md first** - Contains all rules including SEO requirements
2. **Check SEO_SCORECARD.md** - See pending SEO items
3. **Check CHANGELOG.md** - See what's been done
4. **Read .context/2026-04-12-SEO_PHASE_1.md** - SEO implementation details
5. **Run `npm run build`** before committing
6. **Use existing patterns** - Don't reinvent components
7. **Follow unified header pattern** for new pages
8. **Add StarryBackground** to new sections
9. **Use inline SVGs** for icons
10. **Add SEO + Breadcrumb** to any new page created

### Pending SEO Items (Priority Order)
1. Image optimization - alt text, width/height, lazy loading (61+ images)
2. Custom 404 page
3. FAQ sections with FAQPage schema
4. Google Search Console (after deployment)
5. Google Analytics 4 (after deployment)

---

*Quick reference created: 8 April 2026, 03:00 WIB*
*Last updated: 12 April 2026, 17:00 WIB*
*Update this file as project evolves.*
