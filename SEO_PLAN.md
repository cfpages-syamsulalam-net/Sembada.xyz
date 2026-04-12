# Technical SEO Plan: Sembada Batu Beling

## 📋 Overview

**Website:** Sembada Batu Beling (sembada.xyz)  
**Type:** Company Profile & Product Catalog (React + Vite + TypeScript)  
**Target Market:** Indonesian businesses (B2B) - Construction, Architecture, Interior Design  
**Primary Keywords:** Toilet portable, cubicle toilet, partisi ruangan, ornamen CNC, cellustone, kabinet laboratorium  
**Deployment:** Cloudflare Pages with custom domain (sembada.xyz)  
**Language:** Bahasa Indonesia  

---

## 🎯 SEO Goals

1. **Achieve 90+ Lighthouse SEO score** across all pages
2. **Index all 15-16 pages** in Google Search Console within 30 days
3. **Rank on page 1** for primary product keywords in Indonesia within 6 months
4. **Zero crawl errors** or broken links
5. **Core Web Vitals compliance** (LCP < 2.5s, CLS < 0.1, INP < 200ms)
6. **Rich snippets** for products, organization, and breadcrumbs in search results
7. **Mobile-first optimization** (majority of Indonesian B2B searches are mobile)

---

## 🏗️ Phase 1: Technical Foundation (Priority: CRITICAL)

### 1.1 Meta Tags Implementation

**Status:** ⚠️ Need implementation  
**Impact:** HIGH - Foundation of all SEO

**Required Meta Tags Per Page:**

| Tag | Specification | Example |
|-----|---------------|---------|
| `title` | 50-60 chars, unique per page | `Toilet Portable - Sembada Batu Beling` |
| `meta description` | 150-160 chars, unique | `Toilet portable premium untuk proyek konstruksi, event, dan darurat. Mudah dipindah, tahan lama. Hubungi 0852 5746 0869.` |
| `link rel="canonical"` | Prevents duplicate content | `https://sembada.xyz/produk/portable-toilet` |
| `meta robots` | Allow indexing | `index, follow` |

**Implementation Plan:**

Create `SEO.tsx` component that accepts props and injects all meta tags:

```tsx
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
}
```

**Action Items:**
- [ ] Create `src/components/seo/SEO.tsx` component
- [ ] Create page-specific SEO data for all 15-16 pages
- [ ] Add SEO component to every page route
- [ ] Test meta tags with browser DevTools
- [ ] Verify with Google Search Console after deployment

---

### 1.2 Open Graph Tags (Social Media)

**Status:** ⚠️ Need implementation  
**Impact:** MEDIUM - Social sharing optimization

**Required OG Tags:**

| Tag | Purpose | Example |
|-----|---------|---------|
| `og:title` | Title when shared on social media | `Sembada Batu Beling - Integritas untuk Sukses dan Barokah` |
| `og:description` | Description for social sharing | `Penyedia produk arsitektur premium: toilet portable, cubicle, ornamen CNC, dan solusi furnitur.` |
| `og:image` | Preview image (1200x630px) | `https://sembada.xyz/og-image.jpg` |
| `og:url` | Canonical URL | `https://sembada.xyz/produk/portable-toilet` |
| `og:type` | Content type | `website`, `article`, `product` |
| `og:locale` | Language/locale | `id_ID` |
| `og:site_name` | Website name | `Sembada Batu Beling` |

**Facebook-Specific:**
- `og:image:width` = 1200
- `og:image:height` = 630

**Action Items:**
- [ ] Create OG image (1200x630px) with Sembada branding
- [ ] Add OG tags to SEO component
- [ ] Test with Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- [ ] Test with LinkedIn Post Inspector

---

### 1.3 Twitter Card Tags

**Status:** ⚠️ Need implementation  
**Impact:** LOW-MEDIUM - Twitter/X sharing

**Required Tags:**

| Tag | Value |
|-----|-------|
| `twitter:card` | `summary_large_image` |
| `twitter:title` | Same as og:title |
| `twitter:description` | Same as og:description |
| `twitter:image` | Same as og:image |

**Action Items:**
- [ ] Add Twitter Card tags to SEO component
- [ ] Test with Twitter Card Validator

---

### 1.4 Structured Data (JSON-LD)

**Status:** ⚠️ Need implementation  
**Impact:** HIGH - Rich snippets in search results

**Required Schema Types:**

#### 1.4.1 Organization Schema (Site-wide)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sembada Batu Beling",
  "url": "https://sembada.xyz",
  "logo": "https://sembada.xyz/logo.png",
  "parentOrganization": {
    "@type": "Organization",
    "name": "PT. Batu Beling"
  },
  "description": "Penyedia produk arsitektur dan interior premium: toilet portable, cubicle, ornamen CNC, dan solusi furnitur dari PT. Batu Beling.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Bogorami No. 05",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60123",
    "addressCountry": "ID"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-852-5746-0869",
    "contactType": "sales",
    "areaServed": "ID",
    "availableLanguage": "Indonesian"
  },
  "sameAs": [
    "https://www.instagram.com/sembadabatubeling",
    "https://www.facebook.com/sembadabatubeling"
  ]
}
```

**Placement:** Add to site footer or in `App.tsx` (applies to all pages)

#### 1.4.2 Product Schema (Each Product Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Portable Toilet",
  "description": "Unit sanitasi movable yang fleksibel untuk berbagai kebutuhan. Material premium, desain modern, mudah dipindahkan.",
  "brand": {
    "@type": "Brand",
    "name": "Sembada Batu Beling"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "PT. Batu Beling"
  },
  "category": "Sanitasi Portable",
  "image": [
    "https://sembada.xyz/images/toilet-portable/portable-toilet-1.jpg",
    "https://sembada.xyz/images/toilet-portable/portable-toilet-2.jpg"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Portable Toilet Low Price",
        "description": "Varian ekonomis untuk proyek dengan budget terbatas"
      },
      {
        "@type": "Offer",
        "name": "Portable Toilet Standard/Deluxe",
        "description": "Varian paling populer untuk berbagai kebutuhan"
      },
      {
        "@type": "Offer",
        "name": "Portable Toilet Emergency",
        "description": "Solusi cepat untuk tanggap darurat"
      }
    ]
  }
}
```

**Required for ALL 7 product pages:**
- [ ] Portable Toilet
- [ ] Cubicle Toilet
- [ ] Office Cubicle
- [ ] Movable Door
- [ ] CNC Ornament
- [ ] Cellustone Ornament
- [ ] Laboratorium Cabinet

#### 1.4.3 BreadcrumbList Schema (All Pages Except Home)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Beranda",
      "item": "https://sembada.xyz"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Produk",
      "item": "https://sembada.xyz/produk"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Portable Toilet",
      "item": "https://sembada.xyz/produk/portable-toilet"
    }
  ]
}
```

#### 1.4.4 WebSite Schema (Home Page Only)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sembada Batu Beling",
  "url": "https://sembada.xyz",
  "description": "Penyedia produk arsitektur dan interior premium dari PT. Batu Beling",
  "inLanguage": "id-ID",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sembada.xyz/produk?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

#### 1.4.5 LocalBusiness Schema (Contact Page)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sembada Batu Beling",
  "image": "https://sembada.xyz/og-image.jpg",
  "telephone": "+62-852-5746-0869",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Bogorami No. 05",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60123",
    "addressCountry": "ID"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$"
}
```

**Action Items:**
- [ ] Create `src/components/seo/StructuredData.tsx` component
- [ ] Implement Organization schema (site-wide)
- [ ] Implement Product schema (7 product pages)
- [ ] Implement BreadcrumbList schema (all pages except home)
- [ ] Implement WebSite schema (home page)
- [ ] Implement LocalBusiness schema (contact page)
- [ ] Validate with Google Rich Results Test: https://search.google.com/test/rich-results
- [ ] Validate with Schema Markup Validator: https://validator.schema.org/

---

### 1.5 Robots.txt

**Status:** ⚠️ Need creation  
**Impact:** HIGH - Controls crawler access

**Content for `public/robots.txt`:**

```
User-agent: *
Allow: /

# Disallow admin or private areas (if any)
# Disallow: /admin/

# Sitemap location
Sitemap: https://sembada.xyz/sitemap.xml
```

**Action Items:**
- [ ] Create `public/robots.txt` file
- [ ] Verify accessibility at `https://sembada.xyz/robots.txt`
- [ ] Test with Google Search Console after deployment

---

### 1.6 XML Sitemap

**Status:** ⚠️ Need generation  
**Impact:** HIGH - Helps search engines discover all pages

**Required Sitemap Structure:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sembada.xyz/</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://sembada.xyz/tentang-kami</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://sembada.xyz/produk</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://sembada.xyz/produk/portable-toilet</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Add all other product pages -->
  <url>
    <loc>https://sembada.xyz/portofolio</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://sembada.xyz/hubungi-kami</loc>
    <lastmod>2026-04-12</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

**All URLs to Include (15-16 total):**

1. `/` - Home (priority: 1.0)
2. `/tentang-kami` - About (priority: 0.8)
3. `/produk` - Product Index (priority: 0.9)
4. `/produk/portable-toilet` (priority: 0.7)
5. `/produk/cubicle-toilet` (priority: 0.7)
6. `/produk/office-cubicle` (priority: 0.7)
7. `/produk/movable-door` (priority: 0.7)
8. `/produk/cnc-ornament` (priority: 0.7)
9. `/produk/cellustone-ornament` (priority: 0.7)
10. `/produk/laboratorium-cabinet` (priority: 0.7)
11. `/portofolio` - Portfolio (priority: 0.7)
12. `/hubungi-kami` - Contact (priority: 0.6)

**Generation Options:**

**Option A: Static File (Simplest)**
- Create `public/sitemap.xml` manually
- Update manually when adding/removing pages
- Good for static sites with infrequent changes

**Option B: Vite Plugin (Recommended)**
- Use `vite-plugin-sitemap` to auto-generate
- Updates automatically on build
- Less maintenance overhead

**Option C: Post-Build Script**
- Create script that generates sitemap after build
- More control than plugin
- Requires maintenance

**Action Items:**
- [ ] Choose generation method (recommend Option B)
- [ ] Generate sitemap with all 15-16 URLs
- [ ] Verify accessibility at `https://sembada.xyz/sitemap.xml`
- [ ] Submit to Google Search Console
- [ ] Reference in robots.txt

---

### 1.7 SPA Routing (Client-Side)

**Status:** ⚠️ Critical for Cloudflare Pages deployment  
**Impact:** HIGH - Prevents 404 errors on direct URL access

**Problem:**  
React SPA uses client-side routing. When users access `/produk/portable-toilet` directly, Cloudflare Pages will return 404 because the file doesn't exist.

**Solution:**  
Create `_redirects` file in `public/` folder:

```
/*    /index.html   200
```

This tells Cloudflare to serve `index.html` for all routes, allowing React Router to handle routing.

**Action Items:**
- [ ] Create `public/_redirects` file with SPA fallback
- [ ] Test direct URL access to all routes after deployment
- [ ] Verify no 404 errors in Google Search Console

---

## 🏗️ Phase 2: On-Page SEO (Priority: HIGH)

### 2.1 Heading Hierarchy (H1-H6)

**Status:** ⚠️ Need audit and fixes  
**Impact:** HIGH - Search engines use headings to understand content structure

**Rules:**

1. **ONE H1 per page** - Never multiple H1s
2. **Hierarchical order** - Don't skip levels (H1 → H2 → H3, not H1 → H4)
3. **Descriptive headings** - Include target keywords naturally
4. **Unique H1 text** - Each page must have different H1

**Current Issues:**
- Some pages may have missing or duplicate H1s
- Product pages need keyword-optimized headings

**Heading Plan Per Page:**

| Page | H1 | H2 Examples | H3 Examples |
|------|-----|-------------|-------------|
| **Home** | `Sembada Batu Beling - Solusi Konstruksi Premium` | `Tentang Kami`, `Produk Unggulan`, `Mengapa Memilih Kami` | Product names |
| **About** | `Tentang Sembada Batu Beling` | `Sejarah Perusahaan`, `Visi & Misi`, `Nilai-Nilai Kami` | - |
| **Product Index** | `Katalog Produk Sembada Batu Beling` | Product category names | - |
| **Portable Toilet** | `Toilet Portable - Solusi Sanitasi Movable` | `Apa itu Toilet Portable`, `Varian Produk`, `Spesifikasi`, `Aplikasi` | Variant names |
| **Cubicle Toilet** | `Cubicle Toilet - Partisi Toilet Premium` | Similar structure | Variant names |
| **Other Products** | `[Product Name] - [Benefit/Description]` | Similar structure | Variant names |
| **Portfolio** | `Portofolio Proyek Sembada Batu Beling` | Filter categories | Project names |
| **Contact** | `Hubungi Sembada Batu Beling` | `Informasi Kontak`, `Lokasi`, `Formulir` | - |

**Action Items:**
- [ ] Audit all pages for H1 presence and uniqueness
- [ ] Ensure proper heading hierarchy (no skipped levels)
- [ ] Optimize H1 text with target keywords
- [ ] Add missing H2/H3 headings for content sections
- [ ] Test with heading checker tools

---

### 2.2 Image Optimization

**Status:** ⚠️ Need implementation  
**Impact:** HIGH - Page speed + Image search visibility

#### 2.2.1 Alt Text (Alternative Text)

**Rules:**
- EVERY image MUST have `alt` attribute
- Descriptive, keyword-rich but natural
- Don't stuff keywords unnaturally
- Empty alt (`alt=""`) only for decorative images

**Alt Text Examples:**

| Image | Good Alt Text | Bad Alt Text |
|-------|---------------|--------------|
| Portable toilet product photo | `Toilet portable deluxe dengan desain modern dan material phenolic resin` | `toilet portable` (too short) |
| CNC ornament project | `Ornamen CNC fasad gedung Politeknik Surabaya dengan presisi tinggi` | `ornament` (too vague) |
| Team photo (if any) | `Tim manajemen Sembada Batu Beling di kantor pusat Surabaya` | `team` (too generic) |

**Action Items:**
- [ ] Add descriptive alt text to ALL 61+ images
- [ ] Include product names, locations, materials in alt text
- [ ] Review for keyword stuffing (keep it natural)
- [ ] Test with screen reader

#### 2.2.2 Image Format & Compression

**Current Status:** Images are in JPG/PNG format

**Recommended Format:**
- **WebP** for all photos (30-50% smaller than JPG)
- **SVG** for icons/logos (infinitely scalable, tiny file size)
- **AVIF** for hero images (even smaller than WebP, but less support)

**Image Optimization Steps:**

1. **Convert to WebP:**
   ```bash
   # Use Sharp library or online tools
   # Target: 80% quality for product images
   # Target: 60% quality for background/hero images
   ```

2. **Resize images:**
   - Product images: Max 1200px width
   - Thumbnails: 400x400px
   - Hero images: 1920px width max
   - Portfolio images: 800-1200px width

3. **Implement lazy loading:**
   ```tsx
   <img
     src="/images/portable-toilet.webp"
     alt="Toilet portable deluxe"
     loading="lazy"
     decoding="async"
     width="800"
     height="600"
   />
   ```

4. **Add width/height attributes:**
   - Prevents Cumulative Layout Shift (CLS)
   - Use exact dimensions or aspect ratio

**Action Items:**
- [ ] Convert all 61+ images to WebP format
- [ ] Resize images to appropriate dimensions
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Add explicit `width` and `height` attributes
- [ ] Add `decoding="async"` for better performance
- [ ] Test with Google PageSpeed Insights

#### 2.2.3 Responsive Images (srcset)

**For hero images and large product photos:**

```tsx
<img
  src="/images/portable-toilet-800.webp"
  srcSet="
    /images/portable-toilet-400.webp 400w,
    /images/portable-toilet-800.webp 800w,
    /images/portable-toilet-1200.webp 1200w
  "
  sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
  alt="Toilet portable deluxe dengan material phenolic resin"
  width="1200"
  height="900"
  loading="lazy"
/>
```

**Action Items:**
- [ ] Create multiple sizes for hero images (400px, 800px, 1200px)
- [ ] Implement srcset for large images
- [ ] Test responsive image loading on different screen sizes

---

### 2.3 Internal Linking Structure

**Status:** ⚠️ Need optimization  
**Impact:** MEDIUM-HIGH - Helps search engines discover and understand page relationships

**Internal Linking Strategy:**

#### 2.3.1 Navigation Links

Ensure all main navigation links are present and use descriptive anchor text:

| Navigation | Anchor Text | URL |
|------------|-------------|-----|
| Home | `Beranda` | `/` |
| About | `Tentang Kami` | `/tentang-kami` |
| Products | `Produk` (dropdown) | `/produk` |
| Product sub-items | `Toilet Portable`, `Cubicle Toilet`, etc. | `/produk/[slug]` |
| Portfolio | `Portofolio` | `/portofolio` |
| Contact | `Hubungi Kami` | `/hubungi-kami` |

#### 2.3.2 Contextual Links

Add contextual links within content:

| From Page | Link To | Anchor Text | Location |
|-----------|---------|-------------|----------|
| Home | `/tentang-kami` | `Selengkapnya tentang kami` | About preview section |
| Home | `/produk` | `Lihat Semua Produk` | Product grid section |
| Home | `/portofolio` | `Lihat Proyek Kami` | Portfolio preview |
| About | `/produk` | `Produk Kami` | CTA section |
| About | `/portofolio` | `Lihat Portofolio` | CTA section |
| Product Index | Each product page | `Pelajari Lebih Lanjut →` | Each product card |
| Each Product Page | `/hubungi-kami` | `Minta Penawaran` | CTA section |
| Each Product Page | `/portofolio` | `Lihat Proyek Terkait` | Portfolio section |
| Portfolio | Each product page | `Lihat Produk [Name]` | Project detail |
| Contact | `/tentang-kami` | `Tentang Kami` | Footer or sidebar |

#### 2.3.3 Breadcrumbs

Implement breadcrumb navigation on all pages except Home:

```tsx
// Example: /produk/portable-toilet
Beranda > Produk > Toilet Portable
```

**Benefits:**
- Helps users navigate
- Shows site structure to search engines
- Can appear in search results as rich snippets
- Distributes link equity throughout site

**Action Items:**
- [ ] Audit existing internal links
- [ ] Add contextual links within content sections
- [ ] Implement breadcrumb component
- [ ] Ensure all pages link back to Home
- [ ] Add "Related Products" section on product pages
- [ ] Add "Related Projects" on portfolio page
- [ ] Use descriptive anchor text (not "klik di sini")

---

### 2.4 URL Structure Optimization

**Status:** ✅ Already good  
**Impact:** MEDIUM - User experience + search engine understanding

**Current URL Structure:**
```
/                              ✅ Clean, short
/tentang-kami                  ✅ Descriptive, Bahasa Indonesia
/produk                        ✅ Clear hierarchy
/produk/portable-toilet        ✅ Logical, keyword-rich
/produk/cubicle-toilet         ✅ Consistent pattern
/portofolio                    ✅ Descriptive
/hubungi-kami                  ✅ Clear intent
```

**Rules to Maintain:**
- ✅ Use hyphens (`-`) not underscores (`_`)
- ✅ Use lowercase only
- ✅ Keep URLs short and descriptive
- ✅ Include target keywords naturally
- ✅ Maintain logical hierarchy (`/produk/[product-name]`)
- ✅ Avoid special characters, numbers, dates

**Action Items:**
- [ ] No changes needed - current structure is excellent
- [ ] Ensure consistency when adding new pages in future

---

### 2.5 Content Optimization

**Status:** ⚠️ Need review  
**Impact:** HIGH - Content is king for SEO

#### 2.5.1 Keyword Strategy

**Primary Keywords (High Priority):**

| Keyword | Target Page | Search Intent |
|---------|-------------|---------------|
| `toilet portable Surabaya` | `/produk/portable-toilet` | Commercial |
| `cubicle toilet` | `/produk/cubicle-toilet` | Commercial |
| `partisi ruangan movable` | `/produk/movable-door` | Commercial |
| `ornamen CNC` | `/produk/cnc-ornament` | Commercial |
| `cellustone panel` | `/produk/cellustone-ornament` | Commercial |
| `kabinet laboratorium` | `/produk/laboratorium-cabinet` | Commercial |
| `office cubicle phenolic` | `/produk/office-cubicle` | Commercial |

**Secondary Keywords (Medium Priority):**

| Keyword | Target Page |
|---------|-------------|
| `produk arsitektur Surabaya` | Home, About |
| `kontraktor phenolic resin` | About, Product pages |
| `toilet portable murah` | `/produk/portable-toilet` |
| `cubicle toilet premium` | `/produk/cubicle-toilet` |
| `portofolio proyek arsitektur` | `/portofolio` |

**Long-Tail Keywords (Low Competition, High Intent):**

| Keyword | Target Page |
|---------|-------------|
| `toilet portable untuk proyek konstruksi Surabaya` | `/produk/portable-toilet` |
| `cubicle toilet phenolic resin harga` | `/produk/cubicle-toilet` |
| `ornamen CNC custom desain masjid` | `/produk/cnc-ornament` |
| `cellustone fasad tahan air` | `/produk/cellustone-ornament` |
| `kabinet laboratorium tahan kimia` | `/produk/laboratorium-cabinet` |

#### 2.5.2 Content Requirements Per Page Type

**Home Page:**
- Minimum 300-500 words of content
- Include primary brand keywords
- Mention all 7 product categories
- Include tagline and value proposition
- Add client/partner names for trust signals

**Product Pages (Each):**
- Minimum 500-800 words per product
- Include:
  - Product description (what it is)
  - Benefits and features (why choose it)
  - Specifications (technical details)
  - Applications/use cases
  - Variants available
  - Related projects (portfolio)
  - FAQ section (optional but recommended)
- Target keyword density: 1-2% (natural usage)

**About Page:**
- Minimum 400-600 words
- Company history and background
- Relationship with PT. Batu Beling
- Vision, mission, values
- Credentials and certifications
- Stats (years, projects, clients)

**Portfolio Page:**
- Minimum 200-300 words intro
- Each project: 50-100 words description
- Include locations, products used, completion dates

**Contact Page:**
- Minimum 150-250 words
- Full address, phone, email
- Operating hours
- Map integration
- Contact form

#### 2.5.3 FAQ Sections (Recommended)

**Add FAQ sections to product pages with Schema markup:**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu toilet portable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Toilet portable adalah unit sanitasi movable yang dapat dipindahkan sesuai kebutuhan. Cocok untuk proyek konstruksi, event, tempat wisata, dan tanggap darurat. Dibuat dengan material phenolic resin premium yang tahan air dan mudah dibersihkan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa harga toilet portable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Harga toilet portable bervariasi tergantung varian yang dipilih. Kami menyediakan 3 varian: Low Price (ekonomis), Standard/Deluxe (paling populer), dan Emergency (untuk tanggap darurat). Hubungi kami di 0852 5746 0869 untuk penawaran terbaik."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah bisa kirim ke luar Surabaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, kami melayani pengiriman ke seluruh Indonesia. PT. Batu Beling telah berpengalaman menangani proyek nasional di berbagai kota besar termasuk Jakarta, Bandung, Semarang, Papua, dan lainnya."
      }
    }
  ]
}
```

**Recommended FAQ Questions Per Product:**

**Portable Toilet:**
- Apa itu toilet portable?
- Berapa harga toilet portable?
- Apa saja varian yang tersedia?
- Apakah bisa dikirim ke luar kota?
- Bagaimana cara pemasangan?

**Cubicle Toilet:**
- Apa keunggulan cubicle toilet phenolic?
- Berapa lama waktu pemasangan?
- Apakah tahan air dan mudah dibersihkan?

**CNC Ornament:**
- Apa itu ornamen CNC?
- Material apa yang bisa di-CNC?
- Berapa lama proses pengerjaan?

**Action Items:**
- [ ] Review content length on all pages
- [ ] Ensure minimum word count per page type
- [ ] Add target keywords naturally throughout content
- [ ] Create FAQ sections for product pages
- [ ] Add FAQPage schema markup
- [ ] Avoid keyword stuffing (keep it natural)
- [ ] Use keywords in first 100 words of each page

---

## 🏗️ Phase 3: Performance & Core Web Vitals (Priority: HIGH)

### 3.1 Page Speed Optimization

**Status:** ⚠️ Need optimization  
**Target:** LCP < 2.5s, FCP < 1.8s

#### 3.1.1 JavaScript Bundle Size

**Current Issue:** React apps can have large JS bundles

**Optimization Steps:**

1. **Code Splitting by Route:**
   ```tsx
   // Lazy load pages
   const HomePage = lazy(() => import('@/pages/HomePage'));
   const AboutPage = lazy(() => import('@/pages/AboutPage'));
   const PortableToiletPage = lazy(() => import('@/pages/products/PortableToiletPage'));
   ```

2. **Analyze Bundle:**
   ```bash
   # Install bundle analyzer
   npm install -D rollup-plugin-visualizer

   # Add to vite.config.ts
   import { visualizer } from 'rollup-plugin-visualizer';

   export default defineConfig({
     plugins: [
       react(),
       visualizer({ open: true })
     ]
   });

   # Run build and analyze
   npm run build
   ```

3. **Remove Unused Dependencies:**
   ```bash
   # Check for unused packages
   npx depcheck
   ```

4. **Tree Shaking:**
   - Use named imports instead of default
   - Import only what you need from libraries

**Action Items:**
- [ ] Implement lazy loading for all page routes
- [ ] Analyze bundle with rollup-plugin-visualizer
- [ ] Remove unused dependencies
- [ ] Optimize large dependencies
- [ ] Target: Total JS bundle < 200KB (gzipped)

#### 3.1.2 CSS Optimization

**Optimization Steps:**

1. **Minify CSS** (Vite does this automatically)
2. **Remove unused CSS:**
   - Use PurgeCSS or similar tool
   - Remove deprecated/unused classes
3. **Inline critical CSS** for above-the-fold content

**Action Items:**
- [ ] Verify CSS minification in production build
- [ ] Remove unused CSS classes
- [ ] Optimize large CSS files

#### 3.1.3 Font Loading

**Current Fonts:** Inter (Google Fonts)

**Optimization:**

1. **Preconnect to Google Fonts:**
   ```html
   <!-- In index.html -->
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
   ```

2. **Use font-display: swap:**
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
   ```

3. **Self-host fonts (Optional but recommended):**
   - Download font files
   - Host in `/public/fonts/`
   - Eliminates external dependency
   - Faster loading

**Action Items:**
- [ ] Add preconnect links to index.html
- [ ] Verify font-display: swap is enabled
- [ ] Consider self-hosting Inter font
- [ ] Remove unused font weights

---

### 3.2 Cumulative Layout Shift (CLS)

**Status:** ⚠️ Need fixes  
**Target:** CLS < 0.1

**Common CLS Causes:**

1. **Images without dimensions:**
   ```tsx
   // ❌ BAD - No dimensions
   <img src="/image.jpg" alt="Description" />

   // ✅ GOOD - Explicit dimensions
   <img
     src="/image.jpg"
     alt="Description"
     width="800"
     height="600"
   />
   ```

2. **Lazy-loaded images shifting:**
   - Reserve space with aspect-ratio or explicit dimensions
   - Use placeholder/skeleton while loading

3. **Web fonts loading:**
   - Use `font-display: swap`
   - Preload critical fonts

4. **Dynamic content insertion:**
   - Don't insert ads or banners above existing content
   - Reserve space for dynamically loaded content

**Action Items:**
- [ ] Add width/height to ALL images
- [ ] Use aspect-ratio CSS property for containers
- [ ] Implement skeleton loaders for async content
- [ ] Test CLS with Lighthouse
- [ ] Monitor in production with Real User Monitoring (RUM)

---

### 3.3 Largest Contentful Paint (LCP)

**Status:** ⚠️ Need optimization  
**Target:** LCP < 2.5s

**LCP Elements on Sembada:**

1. **Home page:** Hero section text or image
2. **Product pages:** Product images or H1 text
3. **Portfolio page:** Hero image or first project card

**Optimization Strategies:**

1. **Preload hero images:**
   ```html
   <!-- In index.html or page head -->
   <link
     rel="preload"
     as="image"
     href="/images/hero-home.webp"
   />
   ```

2. **Don't lazy-load hero images:**
   ```tsx
   // ❌ BAD - Hero image lazy-loaded
   <HeroSection>
     <img src="/hero.jpg" loading="lazy" />
   </HeroSection>

   // ✅ GOOD - Hero image loads immediately
   <HeroSection>
     <img src="/hero.jpg" loading="eager" />
   </HeroSection>
   ```

3. **Optimize hero images:**
   - Use WebP format
   - Compress to 60-70% quality
   - Resize to max 1920px width
   - Consider using AVIF format

4. **Server push critical resources:**
   - Cloudflare Pages handles this automatically
   - CDN serves from edge locations

**Action Items:**
- [ ] Identify LCP element on each page
- [ ] Preload hero images
- [ ] Remove lazy-loading from hero images
- [ ] Compress hero images aggressively
- [ ] Test LCP with WebPageTest.org
- [ ] Monitor in Google Search Console

---

### 3.4 Interaction to Next Paint (INP)

**Status:** ⚠️ Need monitoring  
**Target:** INP < 200ms

**INP Optimization:**

1. **Minimize long tasks (>50ms):**
   - Break up large JavaScript executions
   - Use web workers for heavy computations
   - Defer non-critical scripts

2. **Optimize event handlers:**
   - Debounce scroll/resize handlers
   - Avoid synchronous operations in handlers

3. **Reduce main thread work:**
   - Code splitting (already planned)
   - Remove unused JavaScript

**Action Items:**
- [ ] Test INP with Chrome DevTools
- [ ] Identify and break up long tasks
- [ ] Debounce expensive event handlers
- [ ] Monitor in production

---

## 🏗️ Phase 4: Mobile Optimization (Priority: HIGH)

### 4.1 Mobile-First Indexing

**Status:** ⚠️ Need verification  
**Impact:** CRITICAL - Google uses mobile version for indexing

**Mobile Requirements:**

1. **Responsive design:**
   - Test on 320px, 375px, 414px widths
   - Ensure content doesn't overflow
   - Verify touch targets are 44x44px minimum

2. **Viewport meta tag:**
   ```html
   <!-- In index.html -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

3. **Mobile-friendly navigation:**
   - Hamburger menu works correctly
   - All links are tappable
   - No hover-only interactions

4. **Readable text:**
   - Minimum 16px body text
   - Adequate line height (1.5+)
   - No horizontal scrolling

**Action Items:**
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] Test with Chrome DevTools mobile emulation
- [ ] Verify mobile-friendly with Google Mobile-Friendly Test
- [ ] Fix any overflow or layout issues
- [ ] Ensure all interactive elements are tappable

---

### 4.2 Touch Targets

**Rules:**
- Minimum 44x44px for all clickable elements
- Adequate spacing between touch targets (8px minimum)
- No overlapping clickable areas

**Common Issues:**
- Navigation links too close together
- Small buttons in product grids
- Form inputs too small

**Action Items:**
- [ ] Audit all interactive elements on mobile
- [ ] Increase size of small buttons/links
- [ ] Add adequate spacing between elements
- [ ] Test on actual mobile devices

---

## 🏗️ Phase 5: Indexation & Crawling (Priority: MEDIUM)

### 5.1 Google Search Console Setup

**Status:** ⚠️ Need setup  
**Impact:** CRITICAL - Monitor and improve search performance

**Setup Steps:**

1. **Add property:**
   - Go to https://search.google.com/search-console
   - Add `sembada.xyz` (Domain property preferred)
   - Verify ownership (DNS record via Cloudflare)

2. **Submit sitemap:**
   - Go to Sitemaps section
   - Submit `https://sembada.xyz/sitemap.xml`
   - Monitor for errors

3. **Request indexing:**
   - Use URL Inspection tool
   - Submit all important pages for indexing
   - Monitor indexing status

4. **Monitor regularly:**
   - Check for crawl errors weekly
   - Review search queries and clicks
   - Identify pages with poor performance
   - Monitor Core Web Vitals

**Action Items:**
- [ ] Create Google Search Console account
- [ ] Add and verify sembada.xyz property
- [ ] Submit sitemap
- [ ] Request indexing for all 15-16 pages
- [ ] Set up email alerts for critical errors
- [ ] Review performance data monthly

---

### 5.2 Bing Webmaster Tools

**Status:** ⚠️ Optional but recommended  
**Impact:** MEDIUM - Bing still has market share

**Setup Steps:**
1. Go to https://www.bing.com/webmasters
2. Add `sembada.xyz`
3. Verify ownership
4. Submit sitemap
5. Request indexing

**Action Items:**
- [ ] Create Bing Webmaster Tools account (optional)
- [ ] Submit sitemap to Bing

---

### 5.3 Crawl Error Prevention

**Common Crawl Errors:**

1. **404 Not Found:**
   - All internal links must work
   - Set up custom 404 page
   - Monitor in Search Console

2. **500 Server Error:**
   - Cloudflare Pages handles this
   - Monitor in Search Console

3. **Redirect Errors:**
   - Avoid redirect chains
   - Ensure canonical URLs are correct
   - Use 301 redirects for moved pages

4. **robots.txt Blocked:**
   - Don't block important pages
   - Test robots.txt with Google tool

**Action Items:**
- [ ] Create custom 404 page (if not already done)
- [ ] Test all internal links
- [ ] Monitor crawl errors in Search Console
- [ ] Fix any 404 errors immediately
- [ ] Set up redirects for any URL changes

---

## 🏗️ Phase 6: Local SEO (Priority: MEDIUM)

### 6.1 Google Business Profile

**Status:** ⚠️ Need setup  
**Impact:** HIGH - Local search visibility

**Setup Steps:**

1. **Create/claim profile:**
   - Go to https://business.google.com/
   - Create profile for "Sembada Batu Beling"
   - Add parent company: "PT. Batu Beling"

2. **Add business details:**
   - Business name: `Sembada Batu Beling`
   - Address: `Jl. Bogorami No. 05, Surabaya, Jawa Timur 60123`
   - Phone: `0852 5746 0869`
   - Category: `Construction Company` or `Building Materials Supplier`
   - Hours: Mon-Fri 08:00-17:00, Sat 08:00-14:00
   - Website: `https://sembada.xyz`

3. **Add photos:**
   - Office exterior
   - Product photos
   - Project photos
   - Team photos (optional)

4. **Optimize description:**
   - Include primary keywords
   - Mention service area (Surabaya, Indonesia)
   - Highlight relationship with PT. Batu Beling

5. **Manage reviews:**
   - Encourage clients to leave reviews
   - Respond to all reviews
   - Maintain 4+ star rating

**Action Items:**
- [ ] Create Google Business Profile
- [ ] Fill out all business details
- [ ] Upload high-quality photos
- [ ] Write optimized business description
- [ ] Request reviews from clients
- [ ] Monitor and respond to reviews

---

### 6.2 Local Citations

**List business on Indonesian directories:**

1. **General Directories:**
   - Yellow Pages Indonesia (yellowpages.co.id)
   - IndoTrade (indotrading.com)
   - Direktori Bisnis Indonesia

2. **Construction/Architecture:**
   - Asosiasi Kontraktor Indonesia
   - Himpunan Ahli Konstruksi Indonesia

3. **B2B Platforms:**
   - Ralali.com
   - MBizMark.com
   - IndonesiaB2B.com

**Action Items:**
- [ ] Research top 10 Indonesian business directories
- [ ] Create consistent listings (same NAP: Name, Address, Phone)
- [ ] Include website link in all listings
- [ ] Monitor listings for accuracy

---

## 🏗️ Phase 7: Analytics & Monitoring (Priority: MEDIUM)

### 7.1 Google Analytics 4

**Status:** ⚠️ Need setup  
**Impact:** HIGH - Track performance and user behavior

**Setup Steps:**

1. **Create GA4 property:**
   - Go to https://analytics.google.com/
   - Create new property: "Sembada Batu Beling"
   - Get Measurement ID (starts with `G-`)

2. **Add to website:**
   ```tsx
   // In index.html or via component
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

   **Or use React library:**
   ```bash
   npm install react-ga4
   ```

3. **Track key events:**
   - Page views (automatic)
   - WhatsApp clicks
   - Contact form submissions
   - Phone number clicks
   - Product page views
   - Filter usage on portfolio

4. **Set up goals:**
   - Contact form submission
   - WhatsApp click
   - Time on page > 2 minutes
   - Scroll depth > 75%

**Action Items:**
- [ ] Create GA4 property
- [ ] Add tracking code to website
- [ ] Set up custom event tracking
- [ ] Test tracking with Real-Time report
- [ ] Set up monthly performance reports

---

### 7.2 Performance Monitoring

**Tools:**

1. **Lighthouse CI:**
   - Run Lighthouse on every deployment
   - Track performance trends
   - Set performance budgets

2. **WebPageTest:**
   - Test from multiple locations
   - Detailed waterfall charts
   - Video of page loading

3. **Google PageSpeed Insights:**
   - Test mobile and desktop
   - Get optimization suggestions
   - Monitor Core Web Vitals

4. **Cloudflare Analytics:**
   - Built-in analytics in Cloudflare Pages
   - Track visitors, bandwidth, cache hit ratio

**Action Items:**
- [ ] Run baseline Lighthouse audit
- [ ] Set up WebPageTest monitoring
- [ ] Test with PageSpeed Insights
- [ ] Monitor Cloudflare Analytics
- [ ] Create monthly performance reports

---

## 🏗️ Phase 8: Advanced SEO (Priority: LOW-MEDIUM)

### 8.1 International SEO

**Status:** ⚠️ Not needed now, plan for future  
**Impact:** LOW currently, HIGH if expanding internationally

**Current Situation:**
- Site is Bahasa Indonesia only
- Target market: Indonesia

**Future-Proofing:**

1. **Add hreflang tags (if adding English version):**
   ```html
   <link rel="alternate" hreflang="id" href="https://sembada.xyz/" />
   <link rel="alternate" hreflang="en" href="https://sembada.xyz/en/" />
   ```

2. **Set language attribute:**
   ```html
   <!-- In index.html -->
   <html lang="id">
   ```

**Action Items:**
- [ ] Add `lang="id"` to `<html>` tag
- [ ] Plan i18n structure if expanding to English in future

---

### 8.2 Social Media Integration

**Status:** ⚠️ Need setup  
**Impact:** MEDIUM - Brand building + referral traffic

**Recommended Social Profiles:**

1. **Instagram:**
   - @sembadabatubeling
   - Post project photos, behind-the-scenes
   - Link to website in bio

2. **Facebook:**
   - Facebook Page: Sembada Batu Beling
   - Share projects, product updates
   - Link to website

3. **LinkedIn (B2B):**
   - Company Page: Sembada Batu Beling
   - Target business clients
   - Share industry insights

**Action Items:**
- [ ] Create/optimize Instagram profile
- [ ] Create/optimize Facebook Page
- [ ] Create LinkedIn Company Page (recommended for B2B)
- [ ] Add social media links to website footer
- [ ] Add social sharing buttons to portfolio projects (optional)

---

### 8.3 Content Marketing (Long-Term)

**Status:** ⚠️ Future enhancement  
**Impact:** HIGH for long-term SEO growth

**Recommended Content Strategy:**

1. **Blog/Articles:**
   - "Panduan Memilih Toilet Portable untuk Proyek Konstruksi"
   - "Keuntungan Phenolic Resin untuk Cubicle Toilet"
   - "Cara Merawat Ornamen CNC Agar Tahan Lama"
   - "Perbandingan Cellustone vs GRC Board untuk Fasad"

2. **Case Studies:**
   - Detailed project write-ups
   - Challenges and solutions
   - Client testimonials
   - Before/after photos

3. **Video Content:**
   - Product demonstrations
   - Installation process
   - Factory tour
   - Upload to YouTube, embed on website

**Action Items:**
- [ ] Plan content calendar (optional, post-launch)
- [ ] Create 3-5 foundational blog posts
- [ ] Add blog section to website
- [ ] Optimize blog posts for SEO
- [ ] Promote content on social media

---

## 📊 Implementation Priority Matrix

### 🔴 CRITICAL (Do First - Week 1-2)

| Task | Effort | Impact | Priority |
|------|--------|--------|----------|
| Meta tags for all pages | Medium | HIGH | 🔴 |
| Open Graph tags | Low | MEDIUM | 🔴 |
| Robots.txt | Low | HIGH | 🔴 |
| XML Sitemap | Medium | HIGH | 🔴 |
| SPA routing (_redirects) | Low | HIGH | 🔴 |
| Structured Data (Organization + Products) | High | HIGH | 🔴 |
| Heading hierarchy audit | Medium | HIGH | 🔴 |
| Image alt text for all images | High | HIGH | 🔴 |

### 🟡 HIGH (Do Second - Week 3-4)

| Task | Effort | Impact | Priority |
|------|--------|--------|----------|
| Image optimization (WebP conversion) | High | HIGH | 🟡 |
| Lazy loading implementation | Medium | HIGH | 🟡 |
| Code splitting by route | Medium | HIGH | 🟡 |
| Internal linking optimization | Medium | MEDIUM | 🟡 |
| Content optimization (keywords) | High | HIGH | 🟡 |
| Google Search Console setup | Low | HIGH | 🟡 |
| Google Analytics 4 setup | Low | HIGH | 🟡 |
| Mobile responsiveness testing | Medium | HIGH | 🟡 |

### 🟢 MEDIUM (Do Third - Month 2)

| Task | Effort | Impact | Priority |
|------|--------|--------|----------|
| FAQ sections + schema | High | MEDIUM | 🟢 |
| Performance optimization (LCP, CLS) | High | HIGH | 🟢 |
| Breadcrumb implementation | Low | MEDIUM | 🟢 |
| Google Business Profile | Medium | HIGH | 🟢 |
| Local citations | High | MEDIUM | 🟢 |
| Responsive images (srcset) | Medium | MEDIUM | 🟢 |

### 🔵 LOW (Do Later - Ongoing)

| Task | Effort | Impact | Priority |
|------|--------|--------|----------|
| International SEO (hreflang) | Low | LOW | 🔵 |
| Social media profiles | Medium | MEDIUM | 🔵 |
| Content marketing (blog) | High | HIGH | 🔵 |
| Video content | High | MEDIUM | 🔵 |
| Bing Webmaster Tools | Low | LOW | 🔵 |

---

## ✅ SEO Checklist Summary

### Pre-Launch Checklist

- [ ] All pages have unique title tags (50-60 chars)
- [ ] All pages have unique meta descriptions (150-160 chars)
- [ ] All pages have canonical URLs
- [ ] All pages have ONE H1 tag
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] All images have alt text
- [ ] All images have width/height attributes
- [ ] Open Graph tags implemented
- [ ] Twitter Card tags implemented
- [ ] Structured data (JSON-LD) added
- [ ] robots.txt created and accessible
- [ ] sitemap.xml generated and accessible
- [ ] SPA routing configured (_redirects file)
- [ ] Internal links working
- [ ] No broken links (404s)
- [ ] Mobile responsive tested
- [ ] Page speed optimized (LCP < 2.5s)
- [ ] Core Web Vitals passing
- [ ] Google Search Console submitted
- [ ] Google Analytics tracking
- [ ] Custom 404 page created

### Post-Launch Checklist

- [ ] Sitemap submitted to Google Search Console
- [ ] All pages indexed in Google
- [ ] No crawl errors in Search Console
- [ ] Core Web Vitals monitored
- [ ] Monthly performance tracking set up
- [ ] Google Business Profile created
- [ ] Social media profiles linked
- [ ] Regular content updates planned

---

## 📈 Success Metrics

### 30 Days Post-Launch

- [ ] All 15-16 pages indexed by Google
- [ ] Zero crawl errors in Search Console
- [ ] Lighthouse SEO score: 90+ on all pages
- [ ] Core Web Vitals: All passing (Good)
- [ ] Structured data validated (no errors)
- [ ] Mobile-friendly test: Pass

### 90 Days Post-Launch

- [ ] Impressions in Search Console: 1,000+
- [ ] Clicks from organic search: 50+
- [ ] Ranking for brand name: #1
- [ ] Ranking for 3+ product keywords: Page 1
- [ ] Average position: < 20 for all queries
- [ ] Monthly unique visitors: 500+

### 6 Months Post-Launch

- [ ] Ranking for primary keywords: Page 1
- [ ] Monthly unique visitors: 1,000+
- [ ] Bounce rate: < 60%
- [ ] Average session duration: > 2 minutes
- [ ] Contact form submissions: 10+ per month
- [ ] WhatsApp clicks: 50+ per month

---

## 🔧 Tools & Resources

### Essential Tools (Free)

| Tool | Purpose | URL |
|------|---------|-----|
| Google Search Console | Monitor indexing, errors, performance | https://search.google.com/search-console |
| Google Analytics 4 | Track visitors, behavior, conversions | https://analytics.google.com |
| Google PageSpeed Insights | Test page speed and CWV | https://pagespeed.web.dev |
| Google Rich Results Test | Validate structured data | https://search.google.com/test/rich-results |
| Google Mobile-Friendly Test | Test mobile optimization | https://search.google.com/test/mobile-friendly |
| Bing Webmaster Tools | Bing search monitoring | https://www.bing.com/webmasters |
| Schema Markup Validator | Validate JSON-LD schema | https://validator.schema.org |
| WebPageTest | Detailed performance testing | https://www.webpagetest.org |

### Essential Tools (Freemium)

| Tool | Purpose | URL |
|------|---------|-----|
| Ahrefs Webmaster Tools | Backlinks, keywords, site audit | https://ahrefs.com/webmaster-tools |
| Screaming Frog SEO Spider | Crawl analysis (up to 500 URLs free) | https://www.screamingfrog.co.uk |
| Ubersuggest | Keyword research, site audit | https://neilpatel.com/ubersuggest |

### Browser Extensions

| Extension | Purpose |
|-----------|---------|
| Meta SEO Inspector | View meta tags of any page |
| Lighthouse | Run audits directly in browser |
| Web Developer | Various web dev tools |
| JSON Viewer | View structured data nicely |

---

## 📝 Maintenance Schedule

### Weekly
- Check Google Search Console for errors
- Monitor crawl errors
- Review indexing status

### Monthly
- Review Search Console performance report
- Analyze Google Analytics traffic
- Run Lighthouse audit on key pages
- Check for broken links
- Review Core Web Vitals

### Quarterly
- Update sitemap if pages changed
- Review and update meta tags
- Add new content
- Review keyword rankings
- Update structured data if needed
- Submit updated sitemap

### Annually
- Full SEO audit
- Competitor analysis
- Keyword strategy review
- Content gap analysis
- Technical SEO review

---

## 🎯 Next Steps

1. **Review this plan** with stakeholders
2. **Prioritize Phase 1** (Critical items)
3. **Implement step by step** (don't rush)
4. **Test each implementation** before moving to next
5. **Monitor results** in Google Search Console
6. **Iterate and improve** based on data

---

**Document Created:** 12 April 2026  
**Last Updated:** 12 April 2026  
**Status:** Ready for implementation  
**Owner:** Development Team  

---

*This is a living document. Update it as SEO implementations are completed or strategy changes.*