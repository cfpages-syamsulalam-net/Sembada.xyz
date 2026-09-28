# PRD.md — Sembada.xyz

Product Requirements Document. Status: live site, in production (Cloudflare Pages + `sembada.xyz`). Updated 2026-09-28.

## 1. Product & owner

Company-profile + product-catalog website for **Sembada BatuBeling** ("Sembada Batu" gold + "Beling" silver; never "PT. Batu Beling" per QWEN.md). Owner: Syamsul Alam. Tagline: "Integritas untuk Sukses dan Barokah". Language: Bahasa Indonesia. Dark-only "Midnight Obsidian" luxury theme.

## 2. Goals (from QWEN.md)

1. Luxury company profile for Sembada Batu Beling.
2. Showcase 7 product categories with detail pages.
3. Portfolio gallery with project photos.
4. Easy contact (WhatsApp, form, map).
5. 90+ Lighthouse on all metrics.
6. WCAG AA accessibility.
7. Mobile-first responsive.

## 3. Scope — routes (12, all built)

`/`, `/tentang-kami`, `/produk`, `/produk/{portable-toilet, cubicle-toilet, office-cubicle, movable-door, cnc-ornament, cellustone-ornament, laboratorium-cabinet}`, `/portofolio`, `/hubungi-kami`. No auth, no CMS, no backend, no checkout — static catalog + contact.

## 4. Users & journeys

- **Project owner / procurement** (kantor, hotel, RS, sekolah, instansi): land → browse produk → variant/spec gallery → WhatsApp/penawaran.
- **Contractor/event organizer**: portable toilet → deluxe/emergency variants → fast contact.
- **Lab manager/researcher**: laboratorium cabinet → island/asam/dinding + spec brochures → konsultasi.
- All journeys end at `/hubungi-kami` or the floating WhatsApp pills (Admin 1/2).

## 5. Functional requirements

- FR1: 12 routes render with unique SEO (title/desc/canonical/OG/Twitter) + correct JSON-LD per page type.
- FR2: Product pages follow template: hero → breadcrumb → apa-itu → mengapa → variants → features → gallery → portfolio → CTA.
- FR3: Portfolio filters across 7 categories; empty state message when none.
- FR4: Navbar megamenu + mobile accordion list all 7 products; footer mirrors them.
- FR5: Floating WhatsApp always visible (2 admins).
- FR6: Contact form POSTs to `/api/contact` Function → Resend → `CONTACT_TO` (default `admin@alampintar.org`); server validates, honeypot + throttles, returns JSON.
- FR7: Images served from `/images/`, lazy below fold, descriptive alt.
- FR8: SPA fallback so deep links never 404.
- FR9 (2026-09-28): 23 `sembada-*` brochures visible on their product pages + catalog poster on `/produk`.

## 6. Non-functional requirements

- Performance: Lighthouse 90+, LCP < 2.5s, page weight < 2MB (PAGES.md targets).
- Responsive 320px → 1366px+; touch targets ≥ 44px; keyboard + screen-reader friendly.
- Inter-only typography; no rounded-corner drift; hexagon geometry per design system.

## 7. Known gaps (accepted, not in scope until requested)

1. **Contact form needs its secret + live test** — code done (`POST /api/contact` → Resend → `admin@alampintar.org`), but delivery is unproven until `RESEND_API_KEY` is set in dashboard, FROM domain verified, and a real test mail lands. Frame this as staged, not delivered, until then.
2. **`og-image.jpg` missing** — all social shares fall back to a 404 image.
3. Dead code present but unreferenced: `pages/HomePage.tsx`, `molecules/Navbar`, `organisms/Footer`, `App.css`, `styles/style.css`.
4. `imagePaths.ts` catalog exists but pages hardcode image URLs (single-source not enforced).
5. SEO scorecard at 61/100 (April) — phases 2+ not executed.

## 8. Acceptance (2026-09-28 state)

`npm run build` (tsc + vite) green; 12/12 routes render; sitemap lists 12 URLs; commit `8dde89c` on `main`, pushed, remote in sync. Next verification when gaps close: Lighthouse run, form-backend wiring, og-image creation.
