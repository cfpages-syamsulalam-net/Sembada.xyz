# Page Architecture & Routing: Sembada Batu Beling

## Overview

This document defines the complete page structure, routing hierarchy, and content specifications for the Sembada Batu Beling company profile website. The site is built as a **static site** with React, optimized for performance, SEO, and user experience.

---

## 1. Site Map

```
/
├── / (Home)
├── /tentang-kami (About Us)
├── /produk (Product Index)
│   ├── /produk/portable-toilet
│   ├── /produk/cubicle-toilet
│   ├── /produk/office-cubicle
│   ├── /produk/movable-door
│   ├── /produk/cnc-ornament
│   ├── /produk/cellustone-ornament
│   └── /produk/laboratorium-cabinet
├── /portofolio (Portfolio)
│   └── /portofolio/[project-slug] (Project Detail - optional)
└── /hubungi-kami (Contact)
```

**Total Pages:** 15-16 pages (including 7 product detail pages)

---

## 2. Routing Strategy

### 2.1 Recommended Router

**Option A: React Router DOM (SPA)**
```bash
npm install react-router-dom
```
- Client-side routing
- Smooth transitions
- Requires server configuration for direct URL access

**Option B: Vite + Static Pages (Recommended)**
```bash
# Use file-based routing
src/pages/index.tsx          → /
src/pages/tentang-kami.tsx   → /tentang-kami
src/pages/produk/index.tsx   → /produk
src/pages/produk/[slug].tsx  → /produk/portable-toilet
```
- Pre-rendered static pages
- Better SEO
- Faster initial load

**Recommendation:** Use **Vite with file-based routing** or **Next.js** for static site generation.

### 2.2 Route Configuration

```typescript
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/tentang-kami', element: <AboutPage /> },
  { path: '/produk', element: <ProductIndexPage /> },
  { path: '/produk/:slug', element: <ProductDetailPage /> },
  { path: '/portofolio', element: <PortfolioPage /> },
  { path: '/portofolio/:slug', element: <ProjectDetailPage /> },
  { path: '/hubungi-kami', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];
```

---

## 3. Page Specifications

### 3.1 Home Page (`/`)

**URL:** `/`  
**Title:** Sembada Batu Beling - Integritas untuk Sukses dan Barokah  
**Description:** Penyedia produk arsitektur dan interior premium: toilet portable, cubicle, ornamen CNC, dan solusi furnitur berkualitas dari PT. Batu Beling.

#### Content Sections:

```
┌─────────────────────────────────────┐
│ 1. HERO SECTION                     │
│    - Full viewport height           │
│    - Starry night background        │
│    - Company logo (centered)        │
│    - Tagline: "Integritas untuk     │
│      Sukses dan Barokah"            │
│    - CTA: "Eksplorasi Produk Kami"  │
│    - CTA: "Tentang Kami"            │
│    - Animated scroll indicator      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. ABOUT PREVIEW                    │
│    - SectionHeader (eyebrow + title)│
│    - 2-3 paragraph intro           │
│    - "Selengkapnya →" link          │
│    - Optional: company stats        │
│      (years, projects, clients)     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. PRODUCT HIGHLIGHTS               │
│    - SectionHeader                  │
│    - Hexagonal grid (7 items)       │
│    - Product categories:            │
│      • Portable Toilet              │
│      • Cubicle Toilet               │
│      • Office Cubicle               │
│      • Movable Door                 │
│      • CNC Ornament                 │
│      • Cellustone Ornament          │
│      • Laboratorium Cabinet         │
│    - Each: icon + name + brief      │
│    - CTA: "Lihat Semua Produk"      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. WHY CHOOSE US                    │
│    - SectionHeader                  │
│    - 4 FeatureCards (2x2 grid):     │
│      • Presisi (CNC precision)      │
│      • Tepat Waktu (on-time)        │
│      • Elegan (premium quality)     │
│      • Ramah Lingkungan (eco)       │
│    - Each: hexagon icon + text      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 5. CLIENT LOGOS                     │
│    - SectionHeader (optional)       │
│    - Logo grid (6-8 logos)          │
│    - BUMN, instansi, swasta         │
│    - Grayscale → color hover        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 6. FINAL CTA                        │
│    - Glass card with gold gradient  │
│    - "Siap Memulai Proyek Anda?"    │
│    - CTA: "Hubungi Kami"            │
│    - WhatsApp quick link            │
└─────────────────────────────────────┘
```

---

### 3.2 About Page (`/tentang-kami`)

**URL:** `/tentang-kami`  
**Title:** Tentang Kami - Sembada Batu Beling  
**Description:** Mengenal lebih dekat Sembada Batu Beling, anak perusahaan PT. Batu Beling yang berpengalaman dalam proyek arsitektur skala nasional.

#### Content Sections:

```
┌─────────────────────────────────────┐
│ 1. PAGE HERO                        │
│    - Title: "Tentang Kami"          │
│    - Breadcrumb: Home > Tentang     │
│    - Reduced height (50vh)          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. COMPANY OVERVIEW                 │
│    - SectionHeader                  │
│    - Full-width content             │
│    - 3-4 paragraphs:                │
│      • History of PT. Batu Beling   │
│      • Sembada's role as subsidiary │
│      • Market positioning           │
│      • Core values & tagline        │
│    - Optional: company photo        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. VISION & MISSION                 │
│    - 2-column layout (cards)        │
│    - Left: Vision statement         │
│    - Right: Mission bullets         │
│    - Gold accent icons              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. COMPANY TIMELINE                 │
│    - Vertical timeline component    │
│    - Key milestones:                │
│      • PT. Batu Beling founding     │
│      • Major projects completed     │
│      • Sembada launch               │
│      • Recent achievements          │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 5. CREDENTIALS & TRUST            │
│    - SectionHeader                  │
│    - Grid of certifications:        │
│      • Business licenses            │
│      • ISO certifications (if any)  │
│      • Partner badges               │
│    - Stats counter:                 │
│      • X+ tahun pengalaman          │
│      • X+ proyek selesai            │
│      • X+ klien puas                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 6. CTA SECTION                      │
│    - "Tertarik Bekerja Sama?"       │
│    - CTA: "Lihat Portofolio"        │
│    - CTA: "Hubungi Kami"            │
└─────────────────────────────────────┘
```

---

### 3.3 Product Index Page (`/produk`)

**URL:** `/produk`  
**Title:** Pengetahuan Produk - Sembada Batu Beling  
**Description:** Jelajahi katalog lengkap produk arsitektur dan interior Sembada Batu Beling: toilet portable, cubicle, ornamen CNC, dan lainnya.

#### Content Sections:

```
┌─────────────────────────────────────┐
│ 1. PAGE HERO                        │
│    - Title: "Pengetahuan Produk"    │
│    - Subtitle: overview text        │
│    - Breadcrumb: Home > Produk      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. PRODUCT CATEGORIES               │
│    - Full-width section             │
│    - Hexagonal grid (7 items)       │
│    - Each card contains:            │
│      • HexIcon (category icon)      │
│      • Product category name        │
│      • 2-3 sentence description     │
│      • "Pelajari Lebih Lanjut →"    │
│    - Links to individual pages      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. PRODUCT COMPARISON (optional)     │
│    - Quick comparison table         │
│    - Features vs product matrix     │
│    - Helps users choose             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. CUSTOM SOLUTIONS                 │
│    - Glass card CTA                 │
│    - "Butuh Solusi Custom?"         │
│    - Description of custom service  │
│    - CTA: "Konsultasi Gratis"       │
└─────────────────────────────────────┘
```

---

### 3.4 Product Detail Pages (`/produk/:slug`)

**URL Pattern:** `/produk/[product-slug]`  
**Example:** `/produk/portable-toilet`

**Slugs:**
- `portable-toilet`
- `cubicle-toilet`
- `office-cubicle`
- `movable-door`
- `cnc-ornament`
- `cellustone-ornament`
- `laboratorium-cabinet`

#### Content Sections (Template):

```
┌─────────────────────────────────────┐
│ 1. PAGE HERO                        │
│    - Product category name          │
│    - Breadcrumb:                    │
│      Home > Produk > [Category]     │
│    - Background: product image      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. PRODUCT OVERVIEW                 │
│    - 2-column layout:               │
│      Left: Large product image      │
│      Right: Description text        │
│    - Key benefits (bullet list)     │
│    - Use cases                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. PRODUCT VARIANTS                 │
│    - Tabs or accordion              │
│    - Each variant includes:         │
│      • Name                         │
│      • Description                  │
│      • Image                        │
│      • Key features                 │
│                                    │
│    Example (Portable Toilet):       │
│      • Low Price                    │
│      • Standard/Deluxe              │
│      • Emergency                    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. SPECIFICATIONS                   │
│    - Data table                     │
│    - Rows:                          │
│      • Material                     │
│      • Dimensions                   │
│      • Weight                       │
│      • Features                     │
│      • Warranty                     │
│    - Alternating row colors         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 5. APPLICATION GALLERY              │
│    - SectionHeader                  │
│    - Image grid (masonry)           │
│    - Real project photos            │
│    - Captions with locations        │
│    - Lightbox on click              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 6. RELATED PRODUCTS                 │
│    - "Produk Terkait"               │
│    - 3-4 ProductCards (grid)        │
│    - Cross-linking                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 7. CTA SECTION                      │
│    - "Tertarik dengan [Product]?"   │
│    - CTA: "Minta Penawaran"         │
│    - CTA: "Hubungi via WhatsApp"    │
└─────────────────────────────────────┘
```

---

### 3.5 Portfolio Page (`/portofolio`)

**URL:** `/portofolio`  
**Title:** Portofolio Proyek - Sembada Batu Beling  
**Description:** Lihat hasil proyek kami di seluruh Indonesia: pemasangan toilet, cubicle, ornamen CNC, dan solusi interior premium.

#### Content Sections:

```
┌─────────────────────────────────────┐
│ 1. PAGE HERO                        │
│    - Title: "Portofolio"            │
│    - Subtitle: project overview     │
│    - Breadcrumb: Home > Portofolio  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. FILTER BAR                       │
│    - Category filters (chips):      │
│      • Semua                        │
│      • Portable Toilet              │
│      • Cubicle                      │
│      • CNC Ornament                 │
│      • Cellustone                   │
│      • Laboratorium                 │
│    - Active filter indicator        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. PROJECT GRID                     │
│    - Masonry or grid layout         │
│    - ProjectCard components:        │
│      • Image (with gold overlay)    │
│      • Project title                │
│      • Category badge               │
│      • Location                     │
│    - Infinite scroll or pagination  │
│    - "Load More" button             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. PROJECT MODAL (on click)         │
│    - Opens when card clicked        │
│    - Full project details:          │
│      • Image gallery (carousel)     │
│      • Description                  │
│      • Location                     │
│      • Products used                │
│      • Completion date              │
│    - Close button                   │
└─────────────────────────────────────┘
```

**Note:** If project detail pages are needed, create `/portofolio/:slug` route with full page instead of modal.

---

### 3.6 Contact Page (`/hubungi-kami`)

**URL:** `/hubungi-kami`  
**Title:** Hubungi Kami - Sembada Batu Beling  
**Description:** Hubungi Sembada Batu Beling untuk penawaran produk arsitektur premium. Alamat: Jl. Bogorami No. 05, Surabaya. WhatsApp: 0852 5746 0869.

#### Content Sections:

```
┌─────────────────────────────────────┐
│ 1. PAGE HERO                        │
│    - Title: "Hubungi Kami"          │
│    - Breadcrumb: Home > Kontak      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 2. CONTACT INFORMATION              │
│    - 2-column layout                │
│    - Left column:                   │
│      • 📍 Alamat kantor             │
│        Jl. Bogorami No. 05,         │
│        Surabaya                     │
│      • 📞 Hotline/WhatsApp          │
│        0852 5746 0869               │
│      • 📧 Email (if available)      │
│      • 🕐 Jam operasional           │
│        Senin-Jumat: 08:00-17:00     │
│        Sabtu: 08:00-14:00           │
│                                    │
│    - Right column:                  │
│      • Google Maps embed            │
│      • Interactive map              │
│      • Marker on office location    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 3. CONTACT FORM                     │
│    - Glass card container           │
│    - Fields:                        │
│      • Nama Lengkap*                │
│      • Email*                       │
│      • Nomor Telepon                │
│      • Perusahaan/Instansi          │
│      • Produk yang Diminati         │
│        (dropdown)                   │
│      • Pesan*                       │
│        (textarea)                   │
│    - Submit button                  │
│    - Success/error states           │
│    - Form validation                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 4. QUICK CONTACT OPTIONS            │
│    - 3 FeatureCards (horizontal):   │
│      • WhatsApp (quick chat)        │
│      • Telepon (click to call)      │
│      • Kunjungi Kantor (directions) │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ 5. FAQ SECTION (optional)           │
│    - Accordion component            │
│    - Common questions:              │
│      • Apakah bisa custom order?    │
│      • Berapa lama waktu pengerjaan?│
│      • Apakah ada garansi?          │
│      • Area pengiriman mana saja?   │
│      • Bagaimana cara pemesanan?    │
└─────────────────────────────────────┘
```

---

## 4. Navigation Structure

### 4.1 Primary Navigation (Navbar)

```
Logo          Tentang    Produk ▼    Portofolio    Hubungi Kami
[Sembada]              ┌─────────────┐
                       │ Portable    │
                       │ Cubicle     │
                       │ Office      │
                       │ Movable     │
                       │ CNC         │
                       │ Cellustone  │
                       │ Lab Cabinet │
                       └─────────────┘
```

**Menu Items:**
1. **Beranda** (Home) - `/`
2. **Tentang Kami** - `/tentang-kami`
3. **Produk** (dropdown) - `/produk`
   - Portable Toilet
   - Cubicle Toilet
   - Office Cubicle
   - Movable Door
   - CNC Ornament
   - Cellustone Ornament
   - Laboratorium Cabinet
4. **Portofolio** - `/portofolio`
5. **Hubungi Kami** - `/hubungi-kami`

### 4.2 Footer Navigation

```
┌─────────────────────────────────────────────────────┐
│  Sembada Batu Beling                                │
│  Integritas untuk Sukses dan Barokah               │
│                                                     │
│  PT. Batu Beling Subsidiary                         │
│  [Social Icons]                                     │
├─────────────────┬─────────────────┬─────────────────┤
│  Produk         │  Perusahaan     │  Kontak         │
│  - Portable     │  - Tentang      │  - Alamat       │
│  - Cubicle      │  - Portofolio   │  - WhatsApp     │
│  - Office       │                 │  - Email        │
│  - Movable      │                 │                 │
│  - CNC          │                 │                 │
│  - Cellustone   │                 │                 │
│  - Lab          │                 │                 │
├─────────────────┴─────────────────┴─────────────────┤
│  © 2026 Sembada Batu Beling. All rights reserved.   │
└─────────────────────────────────────────────────────┘
```

---

## 5. Breadcrumb Strategy

All pages (except Home) include breadcrumbs:

```
Home > Tentang Kami
Home > Produk
Home > Produk > Portable Toilet
Home > Portofolio
Home > Portofolio > [Project Name]
Home > Hubungi Kami
```

**Implementation:**
```typescript
interface BreadcrumbItem {
  label: string;
  href?: string; // undefined for current page
}

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Produk', href: '/produk' },
  { label: 'Portable Toilet' },
];
```

---

## 6. SEO Strategy

### 6.1 Meta Tags (Per Page)

Each page should have unique:
- `<title>` (50-60 characters)
- `<meta name="description">` (150-160 characters)
- `<link rel="canonical">`
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags
- Structured data (JSON-LD)

### 6.2 Structured Data

**Organization Schema (Site-wide):**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sembada Batu Beling",
  "parentOrganization": "PT. Batu Beling",
  "url": "https://sembada.xyz",
  "logo": "https://sembada.xyz/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-852-5746-0869",
    "contactType": "sales",
    "areaServed": "ID"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Bogorami No. 05",
    "addressLocality": "Surabaya",
    "addressCountry": "ID"
  }
}
```

**Product Schema (Product pages):**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Portable Toilet",
  "description": "...",
  "brand": {
    "@type": "Brand",
    "name": "Sembada Batu Beling"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock"
  }
}
```

---

## 7. Performance Targets

| Metric | Target |
|--------|--------|
| **LCP (Largest Contentful Paint)** | < 2.5s |
| **FID (First Input Delay)** | < 100ms |
| **CLS (Cumulative Layout Shift)** | < 0.1 |
| **First Contentful Paint** | < 1.8s |
| **Time to Interactive** | < 3.8s |
| **Total Page Weight** | < 2MB |
| **Lighthouse Score** | 90+ |

### Optimization Strategies:
- ✅ Image optimization (WebP format, lazy loading)
- ✅ Code splitting (route-based)
- ✅ Font preloading
- ✅ Critical CSS inlining
- ✅ Minimize JavaScript bundle
- ✅ CDN for static assets
- ✅ Browser caching headers

---

## 8. 404 Page

**URL:** Any unmatched route  
**Title:** Halaman Tidak Ditemukan

```
┌─────────────────────────────────────┐
│                                     │
│         404                         │
│    (Large, gold gradient)           │
│                                     │
│  Halaman Tidak Ditemukan            │
│                                     │
│  Maaf, halaman yang Anda cari       │
│  tidak ada atau telah dipindahkan.  │
│                                     │
│  [Kembali ke Beranda]               │
│  [Lihat Produk Kami]                │
│                                     │
└─────────────────────────────────────┘
```

---

## 9. Content Management

### 9.1 Static Content Strategy

**Option A: Hardcoded in Components**
- Simple, but harder to update
- Good for initial launch

**Option B: External JSON Files** (Recommended)
```
data/
  products.json
  projects.json
  testimonials.json
  company-info.json
```
- Easy to update without code changes
- Can be loaded at build time

**Option C: MDX Files**
```
content/
  products/
    portable-toilet.mdx
    cubicle-toilet.mdx
  about.mdx
  contact.mdx
```
- Rich text with components
- Markdown + JSX

**Recommendation:** Start with **JSON files**, migrate to headless CMS (Contentful, Strapi) if client needs frequent updates.

### 9.2 Image Assets

```
public/
  images/
    products/
      portable-toilet-1.jpg
      portable-toilet-2.jpg
    projects/
      project-1.jpg
      project-2.jpg
    icons/
      hexagon-precision.svg
      hexagon-quality.svg
    logo.png
    og-image.jpg
```

**Image Requirements:**
- Product images: 1200x800px minimum, WebP format
- Project images: 1600x1200px, optimized WebP
- Thumbnails: 400x300px
- OG Image: 1200x630px

---

## 10. Internationalization (Future)

While the current site is **Bahasa Indonesia only**, structure code to support future i18n:

```typescript
// Use translation keys instead of hardcoded text
<Heading>{t('home.hero.tagline')}</Heading>

// Folder structure for future translations
locales/
  id/
    common.json
    home.json
    about.json
  en/
    common.json
    home.json
    about.json
```

**Recommendation:** Not needed for initial launch, but keep text content separate from components for easy future translation.

---

## 11. Analytics & Tracking

### 11.1 Recommended Setup

- **Google Analytics 4** (page views, events)
- **Google Tag Manager** (tag management)
- **WhatsApp Click Tracking** (custom event)
- **Form Submission Tracking** (custom event)
- **Scroll Depth Tracking** (engagement)

### 11.2 Key Events to Track

```typescript
// Event tracking
track('cta_click', { label: 'Eksplorasi Produk', page: 'home' });
track('whatsapp_click', { source: 'floating_button' });
track('form_submit', { product: 'portable-toilet' });
track('product_view', { product: 'cnc-ornament' });
track('filter_apply', { category: 'cubicle' });
```

---

*This page architecture document serves as the blueprint for development. All pages should follow these specifications for consistency and optimal user experience.*
