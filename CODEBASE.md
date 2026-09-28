# CODEBASE.md — Sembada.xyz

Inventory of all code, logic, intent, and reasons. Generated 2026-09-28 (Asia/Jakarta) from current `main` (`8dde89c`). Read this before changing anything; see also `QWEN.md` (rules), `PAGES.md` (routes), `TECHNICAL_DECISIONS.md` (`.context/`, April 2026 rationale).

## 1. What this repo is

Company-profile + product-catalog SPA for Sembada BatuBeling (tagline "Integritas untuk Sukses dan Barokah"). React 19 + Vite 8 + TypeScript 6, React Router 7 SPA routing, TailwindCSS v3.4 + custom CSS effects, lucide-react icons. 12 routes: home, about, product index, 7 product pages, portfolio, contact. Deployed to Cloudflare Pages (root dir `sembada-app`, build `npm run build`, output `dist`), custom domain `sembada.xyz`. See `CLOUDFLARE_DEPLOY.md`.

## 2. Layout

```
Sembada.xyz/
├── CHANGELOG.md, CODEBASE.md (this file), PRD.md, INFRASTRUCTURE.md
├── PAGES.md / ALL_PAGES_SPEC.md / HOMEPAGE_SPEC.md (route + page specs)
├── DESIGN.md / COMPONENTS.md / DEVELOPMENT.md (design, components, workflow)
├── SEO_PLAN.md / SEO_SCORECARD.md (SEO strategy + score tracking)
├── CLOUDFLARE_DEPLOY.md / CLOUDFLARE_FIXES.md (hosting)
├── QWEN.md / BEGINNER_GUIDE.md / README.md (assistant rules, onboarding)
├── style.css (legacy global reference, NOT imported by app)
├── images/ (source-of-truth image library, 7 category dirs + katalog file)
│   └── {cellustone, cnc-ornament, cubicle-toilet, laboratorium-cabinet,
│        office-cubicle, partisi-ruangan, toilet-portable}/
├── stitch/ (14 Google-Stitch HTML design references, read-only)
├── .context/ (April session history: SESSION_SUMMARY, QUICK_REFERENCE,
│   COMPONENT_INVENTORY, TECHNICAL_DECISIONS, dated notes)
├── .MD/ .PDF/ (legacy docs)
└── sembada-app/ (the actual Vite app)
    ├── package.json (npm; scripts dev/build/lint/preview/glob)
    ├── vite.config.ts (@ → ./src alias), tsconfig.app.json (strict,
    │   noUnusedLocals/Parameters, erasableSyntaxOnly), eslint.config.js
    ├── tailwind.config.js (obsidian/gold/text theme), postcss.config.js
    ├── index.html (id lang, fonts, title), .env (VITE_*; gitignored)
    ├── scripts/glob.mjs (local `npm run glob` file-search helper)
    ├── functions/api/contact.js (Pages Function `POST /api/contact`: validates
    │   JSON, honeypot + per-IP throttle, sends via Resend `fetch` using
    │   `RESEND_API_KEY` secret; `CONTACT_TO` default `admin@alampintar.org`)
    ├── public/ (served as-is: images/ mirror, robots.txt, sitemap.xml,
    │   _redirects SPA fallback, favicon.svg, icons.svg, OG-IMAGE-NEEDED.md)
    └── src/
        ├── main.tsx (StrictMode + BrowserRouter) → App.tsx (12 lazy routes,
        │   Navbar/Footer/FloatingWhatsApp/ScrollToTop + Organization + WebSite JSON-LD)
        ├── pages/ (HomePage inline in App; About, ProductKnowledge,
        │   Portfolio, Contact, products/ ×7)
        ├── components/{layout/Navbar,Footer,Section,
        │   sections/Hero,AboutSection,ProductGrid,ValueProposition,PortfolioSection,
        │   ui/Button,Card,Heading,SEO,StarryBackground,FloatingWhatsApp,ScrollToTop,
        │   cards/FeatureCard,ProductCard, molecules/Navbar (legacy?),
        │   organisms/Footer (unused legacy)}
        └── data/{products.ts (nav labels), productIcons.tsx (inline SVG),
            portfolios.ts (26 projects), imagePaths.ts (typed image catalog)}
```

Known dead/legacy code (do NOT wire new code to these): `src/pages/HomePage.tsx` (unused; home is inline `HomePage()` in App.tsx), `src/components/molecules/Navbar.tsx`, `src/components/organisms/Footer.tsx`, `src/App.css`, `src/styles/style.css`, root `style.css`. Verified 2026-09-28: no imports reference them.

## 3. Routing & pages (intent per route)

Router: `BrowserRouter` in main.tsx; lazy-loaded routes in App.tsx. `_redirects` (`/* /index.html 200`) makes deep links work on Cloudflare.

| Route | Component | Intent |
|---|---|---|
| `/` | inline `HomePage()` (App.tsx) | Hero + AboutSection + ProductGrid + ValueProposition + WebSite JSON-LD |
| `/tentang-kami` | AboutPage | Identity: mission, legacy/stats, visi-misi, values, CTA |
| `/produk` | ProductKnowledgePage | 7 hex cards + katalog poster + quality + custom CTA |
| `/produk/portable-toilet` | PortableToiletPage | 3 variants (Low/Deluxe/Emergency), use-cases, gallery |
| `/produk/cubicle-toilet` | CubicleToiletPage | 5 variants, phenolic benefits, brosur/chart gallery |
| `/produk/office-cubicle` | OfficeCubiclePage | Advance/Leader/Supervisor tiers, phenolic benefits |
| `/produk/movable-door` | MovableDoorPage | Rubi/Kalimaya/Batu Beling/Emerald, acoustic features |
| `/produk/cnc-ornament` | CNCOrnamentPage | Showcase grid, 0.1mm precision story |
| `/produk/cellustone-ornament` | CellustonePage | Fasad/wall-panel applications, eco story |
| `/produk/laboratorium-cabinet` | LaboratoriumCabinetPage | Island/Asam/Dinding variants + brosur/spec gallery |
| `/portofolio` | PortfolioPage | Sticky filter tabs ×7 categories, hex project grid |
| `/hubungi-kami` | ContactPage | Info + form + map + LocalBusiness JSON-LD |

Page template (product pages): SEO + Product JSON-LD → hero → breadcrumb → "Apa itu" → "Mengapa" → variants/showcase → features → gallery → PortfolioSection → CTA. QWEN.md mandates: SEO component, one H1, alt text, lazy below-fold images, JSON-LD on product/contact pages.

## 4. Components (logic & why)

- **Navbar** (`layout/Navbar.tsx`): fixed glass bar, Gem logo, active-route highlight, hover megamenu built from `productData` (closes on route change), mobile hamburger + accordion. Only navbar in use.
- **Footer** (`layout/Footer.tsx`): brand + Navigasi + Produk (from `productData`) + contact/newsletter columns. Only footer in use.
- **Hero / AboutSection / ProductGrid / ValueProposition**: home sections; ProductGrid links 6 hex cards to product routes (Movable Door intentionally absent from grid).
- **PortfolioSection**: reusable hex project grid driven by `portfolioData[category]`; "view all" links to `/portofolio`.
- **SEO**: useEffect-driven document head writer (title, description, canonical, robots, theme-color, OG ×7, Twitter ×4); falls back to `/og-image.jpg` (which does NOT exist yet — see OG-IMAGE-NEEDED.md).
- **StarryBackground**: deterministic twinkle stars (subtle 15 / normal 25 / dense 40 + gold accents); why deterministic: no re-randomize per render.
- **FloatingWhatsApp**: two pill buttons (Admin 1 `0823 2588 6660`, Admin 2 `0852 5746 0869`) → `wa.me/62…`; pill style (NOT hexagonal despite inventory note).
- **Breadcrumb**: nav + BreadcrumbList JSON-LD.
- **ScrollToTop**: resets scroll on route change. **Button/Card/Heading/Section/FeatureCard/ProductCard/productIcons**: atom primitives + inline SVG icon set (inline SVG chosen because FontAwesome CDN gets ad-blocked).
- **ContactPage form**: posts JSON to `/api/contact` (loading/success/error states, honeypot `website` field). Backend is the Pages Function above — requires `RESEND_API_KEY` secret in dashboard + redeploy; without it the Function returns 500. Manual step outstanding: Resend key + FROM-domain verification + live test mail.

## 5. Data layer

- `products.ts`: 7 nav entries (label/path/description/icon key). Single source for Navbar + Footer.
- `portfolios.ts`: 26 projects keyed by category slug; consumed by PortfolioSection + PortfolioPage filters.
- `imagePaths.ts`: typed catalog (`images.<category>.<key>`) over `/images/…`; extended 2026-09-28 with all 23 `sembada-*` brochures + `katalog.semua-produk`. Note: pages mostly hardcode `/images/…` strings; imagePaths is available but unused by pages.
- Images: dual-tree by convention — `images/` (library) mirrored 1:1 into `sembada-app/public/images/` (served). New images MUST go in both. Filenames with spaces need `%20` in URLs; new `sembada-*` names use hyphens (no encoding needed).

## 6. Styling system (why)

TailwindCSS v3.4 utilities for layout + custom CSS for what utilities can't do: starry sky, gold-gradient text/shimmer, hexagon clip-paths + wrapper borders (clip-path eats real borders, hence `.hexagon-border[-5/-8]` pseudo-element wrappers), glassmorphism, custom scrollbar. Theme: obsidian `#0B0C10/#111216/#1A1B21`, gold `#D4AF37/#f2ca50/#AA771C`, text `#E2E8F0/#94A3B8/#64748B`. Fonts: Inter only (+ Dancing Script tagline). Dark-only theme. `prefers-reduced-motion` respected.

## 7. SEO & site files

Per-page `<SEO>` + JSON-LD (Organization site-wide in App; Product ×7; LocalBusiness on contact; WebSite+SearchAction on home; BreadcrumbList per page). `public/robots.txt` (allow all + sitemap ref), `public/sitemap.xml` (12 URLs; touched pages bumped 2026-09-28), `public/_redirects` SPA fallback. Missing: `public/og-image.jpg` (all OG tags fall back to a 404 — highest-value SEO gap). SEO_SCORECARD tracks 61/100 (April).

## 8. 2026-09-28 change (images operation)

23 UUID-named posters from `Downloads/sembada-gambar-baru` → visually audited → renamed `sembada-<deskriptif-singkat>.jpg` (lab 11, cubicle 8, portable/office/movable 1 each, full-catalog 1) → both image trees → wired into the 6 matching existing pages (no new product line found, so NO new route). Build `tsc -b && vite build` passes; commit `8dde89c` on `main`, pushed, remote in sync. Details in CHANGELOG entry `[New Brochure Images] - 28 September 2026`.
