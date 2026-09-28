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

## 3. Scope — routes (13, all built)

`/`, `/tentang-kami`, `/produk`, `/produk/{portable-toilet, cubicle-toilet, office-cubicle, movable-door, cnc-ornament, cellustone-ornament, laboratorium-cabinet}`, `/brosur`, `/portofolio`, `/hubungi-kami`. No auth, no CMS, no checkout — static catalog + contact; the only server-side piece is the Pages Function behind the contact form.

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
- FR10 (2026-09-28): Every gallery image is clickable → opens a full-screen viewer at **100% natural size** (as requested) inside a pan/zoom container: drag to pan (mouse/touch), wheel or pinch to zoom at the pointer, zoom-in/out buttons, **Fit** (zoom out to fill the browser) and **100%** buttons, double-click toggles Fit ⇄ 100%, Esc/X closes, ←/→ moves within the same gallery set (counter `n / m`). Zoom bounded [fit … 8×]; dependency-free (pointer events + CSS transforms).
- FR11 (2026-09-28): New route `/brosur` — reader for all 23 `sembada-*` pages as one ordered brochure (Katalog cover → Lab 11 → Cubicle 8 → Portable → Office → Movable): one page fit-to-frame, **Sebelumnya/Berikutnya** buttons, `Halaman n / 23` + current label, thumbnail strip (jump-to-page), group chips with counts, ←/→ keys + swipe, click page → FR10 viewer over the same 23-page set. Linked from Navbar, Footer, `/produk`, and the sitemap.
- FR12 (2026-09-28): `/brosur` download button assembles **one PDF client-side** — 23 pages, one image per page, each page sized to its image scaled to fit A4 (≤ 595×842 pt), JPEG passthrough via dynamically-imported `pdf-lib`; progress `n / 23`, states idle/running/done/error, saves `sembada-brosur-katalog.pdf`; no server, no upload.

## 6. Non-functional requirements

- Performance: Lighthouse 90+, LCP < 2.5s, page weight < 2MB (PAGES.md targets).
- Responsive 320px → 1366px+; touch targets ≥ 44px; keyboard + screen-reader friendly.
- Inter-only typography; no rounded-corner drift; hexagon geometry per design system.
- Viewer & PDF constraints (2026-09-28): the lightbox adds no runtime dependency (pointer events + transforms only, GPU-composited); `pdf-lib` is dynamically imported on first download so the main bundle is unchanged; all image fetches are same-origin (no CORS/CSP changes).

## 7. Known gaps (accepted, not in scope until requested)

1. **Contact form needs its secret + live test (BLOCKED on Syamsul, no expiry)** — code done (`POST /api/contact` → Resend → `admin@alampintar.org`), but delivery is unproven until Syamsul provides the Resend API key when he has time, then: key → dashboard `RESEND_API_KEY` + redeploy, FROM-domain verification, live test mail + Function log check. Frame as staged, not delivered, until then. Never store the key in repo/memory — dashboard secret only.
2. **`og-image.jpg` missing** — all social shares fall back to a 404 image.
3. Dead code present but unreferenced: `pages/HomePage.tsx`, `molecules/Navbar`, `organisms/Footer`, `App.css`, `styles/style.css`.
4. `imagePaths.ts` catalog exists but pages hardcode image URLs (single-source not enforced) — exception: `data/brochure.ts` consumes it for the 23-page brochure set.
5. SEO scorecard at 61/100 (April) — phases 2+ not executed.

## 8. Acceptance (2026-09-28 state, after brosur viewer)

`npm run build` (tsc + vite) green; 13/13 routes render; sitemap lists 13 URLs; commits `8dde89c`…`923752a` plus this operation on `main`, pushed, remote in sync. Verified this operation: preview server — all 23 brochure image URLs HTTP 200, `/brosur` HTTP 200; PDF probe (A4-ratio + square pages) → valid PDF, 3 pages, JPEG passthrough (~671 KB output for 653 KB source, so the full 23-page brochure lands ≈ 6 MB); eslint 0 new errors (2 pre-existing in untouched code). Self-review (OCR delegate workflow, read-only, 16/16 files covered) found 2 medium + 4 low, 0 critical/high — all six fixed in `5d5f343` (build + lint re-verified). Next verification when gaps close: Lighthouse run, form-backend wiring, og-image creation.
