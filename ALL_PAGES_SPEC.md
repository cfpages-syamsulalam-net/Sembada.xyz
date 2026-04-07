# All Pages Specification: Sembada Batu Beling

## Complete Page Documentation from /stitch Folder

This document consolidates all 14 HTML files found in the `/stitch` folder into organized page specifications.

---

## File Inventory (14 HTML Files)

### Home Pages (2 versions)
1. `sembada_batu_beling_beranda_synced_gold_effect/code.html`
2. `sembada_batu_beling_beranda_final_polished/code.html`

**→ See `/HOMEPAGE_SPEC.md` for complete documentation**

### About Pages (2 versions)
3. `sembada_batu_beling_tentang_kami_synced_navbar/code.html`
4. `sembada_batu_beling_tentang_kami_final_style/code.html`

### Other Pages (1 each)
5. `sembada_batu_beling_portofolio/code.html` - Portfolio Page
6. `sembada_batu_beling_pengetahuan_produk/code.html` - Product Knowledge Page
7. `sembada_batu_beling_hubungi_kami/code.html` - Contact Us Page

### Product Detail Pages (7 total)
8. `produk_cellustone/code.html` - Cellustone Product Page
9. `produk_cnc_ornament/code.html` - CNC Ornament Product Page
10. `produk_cubicle_toilet/code.html` - Cubicle Toilet Product Page
11. `produk_laboratorium_cabinet/code.html` - Laboratorium Cabinet Product Page
12. `produk_movable_door/code.html` - Movable Door Product Page
13. `produk_office_cubicle/code.html` - Office Cubicle Product Page
14. `produk_portable_toilet/code.html` - Portable Toilet Product Page

---

## PAGE 2: ABOUT (Tentang Kami)

### Page Type
About / Company Profile - "Identitas Kami"

### Unique Styling
- **Star field**: Uses `radial-gradient` repeating pattern with `rgba(242,202,80,0.05)` circles
- **Gold gradient text**: `linear-gradient(to right, #BF953F, #f2ca50, #AA771C)`
- **Glass-premium**: Border uses `rgba(242,202,80,0.2)` (lighter than home)
- **Hex clip**: Same hexagonal clip-path

### Sections

**1. Star Field Background**
- Fixed position, repeating radial gradient pattern

**2. Navbar**
- Glass-premium `px-10 py-5`
- Active link: "Tentang Kami"

**3. Hero Section**
- Padding: `pt-32`, centered
- Eyebrow: "Tentang Kami" (`tracking-[0.5em] text-xs text-primary`)
- H1: "IDENTITAS KAMI" (`text-6xl md:text-8xl gold-gradient-text`)
- Subtitle: Italic quote paragraph

**4. Legacy Section**
- Margin: `mb-40`, grid `grid-cols-1 lg:grid-cols-2 gap-16`

**Left Column:**
- Image with `opacity-40 mix-blend-luminosity`
- Gradient overlay

**Right Column:**
- H2: "WARISAN & KEUNGGULAN" with "KEUNGGULAN" in primary color
- Two paragraphs
- 2 stat cards in glass-premium boxes (`border-l-4 border-primary`):
  - "25+ Tahun Pengalaman"
  - "500+ Proyek Selesai"

**5. Visi & Misi Bento Grid**
- Margin: `mb-40`, grid `grid-cols-1 md:grid-cols-3 gap-6`
- Card 1 (span 2): "Visi Kami" with visibility icon, `min-h-[400px]`
- Card 2: "Misi I" with architecture icon, centered
- Card 3: "Misi II" with groups icon, centered
- Card 4 (span 2): "Misi III" with precision_manufacturing icon
- Hex icon containers: `w-16 h-16 hex-clip bg-primary/20 border border-primary/40`

**6. Nilai Utama Section**
- Background: `bg-surface-container-low py-32 mb-40 border-y border-primary/10`
- Eyebrow: "Pilar Utama Kami"
- H2: "INTEGRITAS UNTUK SUKSES DAN BAROKAH" with gold-gradient highlights
- Divider: `w-24 h-1 bg-primary mx-auto mb-12`
- Description paragraph

**7. CTA Section**
- Margin: `mb-40`
- Glass-premium card with `p-16 md:p-24`
- Two blurred glow circles
- Text: "SIAP UNTUK MEWUJUDKAN VISI ARSITEKTUR ANDA?"
- Gold CTA button with `shadow-[0_0_20px_rgba(242,202,80,0.3)]`

**8. Footer**
- Background: `bg-slate-950 border-t border-yellow-500/20 px-12 py-16`
- 3-column grid
- Hover effects: `hover:text-yellow-400 hover:tracking-[0.5em] transition-all`

---

## PAGE 3: PORTFOLIO (Portofolio)

### Page Type
Portfolio / Projects Gallery

### Global Styling
- `.hexagon-mask`: Hex clip-path
- `.star-field`: Repeating radial gradient, `opacity: 0.15`, `200px 200px` tiles
- `.glass-card`: `rgba(11,12,16,0.7) backdrop-blur-2xl`

### Navbar
- Logo: `bg-gradient-to-r from-[#BF953F] via-[#f2ca50] to-[#AA771C]`
- Links: "Gallery, Projects (active), Architecture, Interior, Links"
- Button: "Inquire"

### Sections

**1. Hero Section**
- Padding: `px-8 md:px-24 mb-24`
- H1: "PORTOFOLIO & PROYEK" (`text-5xl md:text-8xl gold-gradient-text`)
- Descriptive paragraph

**2. Project Gallery Hex Grid**
- Padding: `px-8 md:px-12 pb-32`
- Grid: `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8`
- 4 project cards with staggered offsets:

**Each Project Card:**
- Hexagon-mask image container, aspect-square
- Images: `grayscale` → color on hover: `group-hover:grayscale-0 transition-all duration-700`
- Images pre-scaled: `scale-110` → hover to `scale-100`
- Gradient overlay: `bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60`
- Glass-card info overlay at bottom: `absolute bottom-4 left-4 right-4 p-6 border border-primary/20`
- Hover lifts card: `group-hover:-translate-y-4 transition-all duration-500`

**Projects:**
1. **Politeknik Surabaya** (Pendidikan)
2. **Mushola Kereta Makan KAI** (Transportasi), offset `md:mt-24`
3. **Gedung DPRD Surabaya** (Pemerintahan)
4. **Villa Obsidian** (Residensial), offset `md:mt-24`

**3. CTA Section**
- Padding: `py-32 bg-surface-container-low border-t border-primary/10`
- Centered, two buttons:
  - Primary: "Mulai Proyek"
  - Outlined: "Lihat Katalog"
- Hover glow effect

**4. Footer**
- Border: `border-t border-[#f2ca50]/20`
- Brand + links + copyright

**5. FAB (Floating Action Button)**
- Position: `fixed bottom-8 right-8 z-50`
- Hexagon-mask `w-16 h-16 bg-primary` with chat_bubble icon
- Hover: `scale-110`, glow shadow

---

## PAGE 4: PRODUCT KNOWLEDGE (Pengetahuan Produk)

### Page Type
Product Overview / Knowledge Hub

### Custom CSS
- Gold gradient text, star field, hex clip
- Body: `selection:bg-primary selection:text-on-primary`

### Navbar
- Active link: "Produk"
- Button: "Inquiry"

### Sections

**1. Hero Header**
- Centered
- H1: "PENGETAHUAN PRODUK" (`text-[50px] md:text-[80px]`)
- Subtitle: "Solusi Arsitektur & Interior Berstandar Internasional"
- Divider: `w-24 h-1 bg-primary/40`

**2. Product Hex Grid**
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16`
- 7 product cards with staggered offsets

**Each Product Card:**
- Background: `bg-[#111216]/70 backdrop-blur-2xl border border-primary/20 p-8`
- Hover: `border-primary/60 shadow-[0_0_20px_rgba(242,202,80,0.1)]`
- Hex icon at top: `absolute -top-12 w-24 h-24 hex-clip bg-surface-container border border-primary/40`
- Icon hover: `group-hover:bg-primary` with color change
- Staggered: Some cards have `lg:translate-y-8` offset

**Products:**
1. **Portable Toilet** (wash icon) - Tags: Low Price, Standard/Deluxe, Emergency
2. **Cubicle Toilet** (door_front icon, `lg:translate-y-8`) - Tags: Premium, Standard, PVC Board, Full Height
3. **Office Cubicle** (work icon) - Material: Phenolic Resin
4. **Movable Door** (unfold_more icon) - Fitur: Sound Insulation
5. **CNC Ornament** (architecture icon, `lg:translate-y-8`) - Teknologi: Computerized Precision
6. **Cellustone** (grid_view icon) - Eco-Friendly Wall Panel
7. **Lab Cabinet** (biotech icon, `lg:col-start-2` centered) - Material: Chemical Resistant Phenolic

**3. Featured Quality Section**
- Margin: `mt-40`, grid `grid-cols-1 md:grid-cols-2 gap-12`

**Left Column:**
- H2: "Kualitas Material Unggulan"
- Paragraph
- Two feature rows with hex icons (verified + precision_manufacturing)

**Right Column:**
- Hex-clip image with `bg-primary/10` hex offset behind it
- `aspect-square grayscale hover:grayscale-0 transition-all duration-700`

**4. Footer**
- 3-column grid with brand, links, office info + email
- Copyright bar

---

## PAGE 5: CONTACT US (Hubungi Kami)

### Page Type
Contact Form + Information

### Custom CSS
- Star field: 4-point radial gradient, `opacity: 0.3`, `200px 200px`
- Hex mask: Hexagonal clip-path
- Metallic text: 5-stop gradient
- **Input focus**: `border-bottom-color: #f2ca50 !important; box-shadow: 0 4px 12px -6px rgba(242,202,80,0.4)`

### Navbar
- Active: "Kontak"
- Button: "Inquiry"

### Sections

**1. Hero Section**
- Centered
- H1: "HUBUNGI KAMI" (`text-5xl md:text-8xl metallic-text`)
- Eyebrow: "Arsitektur Masa Depan Dimulai Dengan Satu Percakapan"

**2. Main Content Grid**
- Grid: `grid grid-cols-1 lg:grid-cols-12 gap-16`

**Left Column (7 cols) - Contact Form:**
- Glassmorphism card: `bg-[#111216]/70 backdrop-blur-3xl border border-[#f2ca50]/30 p-8 md:p-12`
- Decorative corners:
  ```css
  absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#f2ca50]
  absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#f2ca50]
  ```
- Form fields in grid:
  - Nama Lengkap
  - Email
  - No. WhatsApp
  - Perusahaan
  - Pesan (textarea)
- All inputs: `bg-transparent border-b border-[#f2ca50]/20 py-2`, rounded-none
- Submit button: "KIRIM PERMINTAAN"
  - `bg-[#f2ca50] text-[#0B0C10] px-12 py-4`
  - Hover: `bg-white`, `hover:-translate-y-1`, glow shadow

**Right Column (5 cols) - Contact Info:**
- 3 info blocks with hex-mask icon containers:
  1. **Location**: "Jl. Bogorami No. 05, Surabaya, Jawa Timur 60123"
  2. **Phone**: "0852 5746 0869"
  3. **Email**: "info@sembadabatubeling.com"
- Map placeholder: `w-full h-80 grayscale hover:grayscale-0 transition-all duration-700`
- Overlay button: "Lihat di Google Maps"
- Quote: italic, `font-light text-white/40 text-sm`

**3. Footer**
- Brand + social links (Instagram, LinkedIn, Office Location)

---

## PRODUCT DETAIL PAGES (7 Products)

### Common Pattern Across ALL Product Pages

**Structure:**
1. **Hero Section** - Full height (819px or min-h-screen)
2. **Features/Variants Section** - Grid with offsets
3. **Applications/Showcase Section** - Image gallery
4. **CTA Section** - Call-to-action buttons
5. **Footer** - Standard layout

**Shared Elements:**
- Starry background (CSS-only)
- Hexagonal masks for images
- Gold gradient headings
- Glass-premium cards
- Grayscale images → color on hover
- Staggered grid layouts with translate-y offsets

---

### Product 1: CELLUSTONE

**Hero:**
- Height: `h-[819px]`
- Eyebrow: "Arsitektur Masa Depan"
- H1: "CELLUSTONE" (`text-6xl md:text-9xl gold-gradient-text tracking-[-0.05em] leading-[0.85]`)
- Description paragraph
- Vertical gold line: `w-px h-24 bg-gradient-to-b from-primary to-transparent`

**Features Bento Grid:**
- Grid: `grid grid-cols-1 md:grid-cols-12 gap-8`
- Text (col 5): H2 "Keunggulan Struktural" with "Struktural" in primary
- Image grid (col 7): 2x2 hexagon-mask images with offsets (`translate-y-12`, `-translate-y-6`, `translate-y-6`)

**Applications Section:**
- Background: `bg-surface-container-low py-32`
- H3: "Aplikasi Produk", H2: "Variasi Sempurna"
- Two large cards in `grid-cols-2`:
  - **Cellustone Fasad**: `aspect-[4/5]`, offset
  - **Cellustone Wall Panel**: Same treatment, `md:mt-24` offset

---

### Product 2: CNC ORNAMENT

**Hero:**
- Height: `h-[819px]`
- Eyebrow: "Inovasi Arsitektur Premium"
- H1: "CNC ORNAMENT" (`text-6xl md:text-8xl lg:text-[100px] metallic-text`)
- Button: "Lihat Katalog"

**Feature Grid:**
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-12`
- 3 features:
  1. Presisi Tinggi (precision_manufacturing, 0.1mm tolerance)
  2. Kustom Desain (architecture, center card `mt-12 md:mt-0` offset)
  3. Multi Material (layers)
- Icon containers: `w-32 h-32 hex-mask glass-premium border border-primary/40`

**Showcase Section (Asymmetric Grid):**
- Background: `bg-surface-container-low py-32`
- H2: "Implementasi Portofolio" with `w-24 h-1 bg-primary` divider
- 3 showcase images in `grid-cols-12`:
  1. **Fasad Politeknik**: `col-span-8 h-[500px]`
  2. **Mushola KAI**: `col-span-4 h-[500px] md:translate-y-12`
  3. **Masjid Baitul Fadli**: `col-span-12 h-[600px] mt-12 md:mt-24` (largest)

---

### Product 3: CUBICLE TOILET

**Hero:**
- Centered
- Eyebrow: "ARCHITECTURAL EXCELLENCE"
- H1: "CUBICLE TOILET" (`text-6xl md:text-8xl gold-text-gradient`)
- Subtitle

**Variants Section:**
- Background: `bg-surface-container-low py-20`
- H2: "Pilihan Varian" with `h-1 w-24 bg-primary` divider
- 5 variant cards in `grid-cols-1 md:grid-cols-3 lg:grid-cols-5`:
  1. **Premium**: Phenolic Resin for high-traffic
  2. **Standard**: Office/public facilities (`md:translate-y-8`)
  3. **Two Tone**: Contrasting colors
  4. **PVC Board**: Waterproof economical (`md:translate-y-8`)
  5. **Full Height**: Floor-to-ceiling privacy
- Each: glass-premium, `p-8`, `h-48` image, grayscale hover

---

### Product 4: LABORATORIUM CABINET

**Hero:**
- Height: `min-h-screen`
- Eyebrow: "Premium Laboratory Solutions"
- H1: "LABORATORIUM CABINET" (`text-[3.75rem] md:text-[5.5rem] metallic-gold-text`)
- Italic description with left border accent
- Hero image: `aspect-[21/9]` wide banner

**Specifications Section:**
- Border: `border-y border-primary/10`, grid `grid-cols-2`
- Left: H2 "Material Keunggulan", 3 features
- Right: 2x2 image grid with `translate-y-12` offset, grayscale hover

**Variants Bento Grid:**
- Padding: `py-32 starry-background`
- H2: "Koleksi Varian" with "Varian Sistem Modul" eyebrow
- 3 cards in `grid-cols-12`:
  1. **Cabinet Pulau (Island)**: col-span-4, "Pusat Kolaborasi Riset"
  2. **Cabinet Lemari Asam**: col-span-5, "Keamanan Zat Volatil"
  3. **Cabinet Dinding**: col-span-3, "Optimasi Ruang Vertikal"

---

### Product 5: MOVABLE DOOR

**Hero:**
- Height: `min-h-screen`
- Eyebrow: "Sembada Architectural Solutions"
- H1: "MOVABLE DOOR" (`text-6xl md:text-[8rem] bg-gradient-to-b from-[#BF953F] via-[#f2ca50] to-[#AA771C]`)
- Italic subtitle
- Hero image: `aspect-video` with centered hexagon icon overlay

**Variants Section:**
- Background: `bg-surface-container-low py-24`
- H2: "Varian Produk" with `h-1 w-24 bg-primary`
- 4 variant cards in `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`:
  1. **Rubi**: "Eksklusif"
  2. **Kalimaya**: "Akustik" (`translate-y-8 md:translate-y-12`)
  3. **Batu Beling**: "Signature"
  4. **Emerald**: "Premium" (`translate-y-8 md:translate-y-12`)
- Each card: `bg-[#111216]/70 backdrop-blur-xl border border-primary/40 p-8`
- Large background number watermark: `text-8xl font-black opacity-5`

---

### Product 6: OFFICE CUBICLE

**Hero:**
- Height: `h-[819px]`
- Full-bleed background image (grayscale office interior)
- Gradient overlay
- Eyebrow: "Architectural Solution"
- H1: "OFFICE CUBICLE"
- Button: "Lihat Katalog Teknis"

**Variants Section:**
- Padding: `py-24 px-8 max-w-7xl`
- 3 variants in `grid-cols-1 md:grid-cols-3 gap-12`:
  1. **Advance Staff**: `1200mm x 600mm`, offset
  2. **Leader Staff**: `1500mm x 750mm`, `md:mt-12` offset
  3. **Supervisor**: `1800mm x 900mm`, `md:-mt-8` offset
- Each: glass-premium `p-10`, `h-64` image, grayscale hover

---

### Product 7: PORTABLE TOILET

**Hero:**
- Height: `min-h-screen`
- Eyebrow: "Premium Sanitation Solutions"
- H1: "PORTABLE TOILET" (`text-6xl md:text-[120px] gold-gradient-text` - **LARGEST H1**)
- Two buttons
- 4 stat boxes below: `grid grid-cols-2 md:grid-cols-4 gap-8`
  - 01 Durabilitas Tinggi, 02 Instalasi Cepat (`mt-8`), 03 Desain Elegan, 04 Eco-Friendly (`mt-8`)
  - Each: `bg-surface-container-low p-6 border-l-4 border-primary`

**Variants Section:**
- Background: `py-24 px-6 bg-surface-container-low`
- H2: "Variants Selection"
- 3 variant cards in `grid-cols-1 md:grid-cols-3`:
  1. **Low Price**: Savings icon
  2. **Standard/Deluxe**: **HIGHLIGHTED "Most Popular"** - `bg-primary/10 border-primary scale-105 relative z-10 shadow-[0_0_50px_rgba(242,202,80,0.15)]`, absolute badge
  3. **Emergency**: Emergency icon

---

## Cross-Page Consistency Patterns

### Shared Design System
- **Colors**: Gold `#f2ca50` primary, black `#0B0C10` background, light gray `#e3e2e8` text
- **Typography**: Inter font ONLY (sans-serif), heavy use of `font-black`, `uppercase`, `tracking-[0.25em]` to `tracking-[0.5em]`
- **Hexagonal Masking**: `clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`
- **Glassmorphism**: `rgba(11,12,16,0.7) + backdrop-filter: blur(24px) + border: 1px solid rgba(gold, 0.2-0.4)`
- **Gold Metallic Text**: Gradient from `#BF953F` through `#f2ca50` to `#AA771C`
- **Star Fields**: CSS-only using repeating radial gradients
- **Border Radius**: ALL `0px` (sharp corners) except `9999px` for circles
- **Image Treatment**: Default `grayscale` with `hover:grayscale-0`, slow transitions (500ms-1000ms)
- **Staggered Grids**: Alternating `translate-y-8` or `translate-y-12` offsets

### Navbar Pattern (Consistent)
- Fixed top, z-50, `bg-[#0B0C10]/70 backdrop-blur-xl`
- `border-b border-[#f2ca50]/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]`
- Logo: gradient text `from-[#BF953F] via-[#f2ca50] to-[#AA771C]`
- Links: `font-black uppercase tracking-[0.25em] text-[10px] md:text-[12px] text-white/80 hover:text-[#f2ca50]`
- Active link: `text-[#f2ca50] border-b-2 border-[#f2ca50] pb-1`
- CTA button: "Hubungi Kami", "Inquiry", or "Konsultasi Sekarang"

### Footer Pattern (Consistent)
- `bg-[#111216] py-12 px-8 flex flex-col md:flex-row justify-between`
- Brand name in `#f2ca50`
- Links: "Kebijakan Privasi, Syarat & Ketentuan, Lokasi Proyek, Karir"
- Icon buttons (hex-mask or bordered squares)
- Copyright: "2024 Sembada Batu Beling. Hak Cipta Dilindungi."

### Button Patterns
- **Primary (filled)**: `bg-primary text-surface (#0B0C10) px-12 py-5 font-black uppercase tracking-widest text-xs`
- **Outlined**: `border border-primary/40 text-primary px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-primary/10`
- **Hover effects**: Scale changes, color swaps, glow shadows

---

## Implementation Priority

### Phase 1: Core Components (Current)
- ✅ Navbar (responsive, glass-premium)
- ✅ Hero section structure
- ✅ Footer structure
- ✅ Button variants
- ✅ Heading with gold gradient

### Phase 2: Homepage Completion (Next)
- [ ] About section with hexagonal image
- [ ] Product grid with staggered offsets
- [ ] Value proposition section
- [ ] Star animation implementation
- [ ] Complete all styling details

### Phase 3: Inner Pages
- [ ] About page (Tentang Kami)
- [ ] Portfolio page with gallery
- [ ] Product knowledge hub
- [ ] Contact page with form

### Phase 4: Product Detail Pages
- [ ] Create product detail template
- [ ] Implement 7 product pages
- [ ] Variant cards with offsets
- [ ] Image galleries with hex masks

---

*This document serves as the complete reference for all pages in the /stitch folder. Use it alongside `/HOMEPAGE_SPEC.md` to rebuild the entire site with React + TailwindCSS.*
