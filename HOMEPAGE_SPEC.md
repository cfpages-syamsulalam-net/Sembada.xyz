# Homepage Specification: Sembada Batu Beling

## Page Type
**Landing Page / Home** - "Sembada Batu Beling | Integritas untuk Sukses dan Barokah"

---

## Global Styling System

### Colors
- **Background**: `#0B0C10` (surface-dim, deep black)
- **Primary Gold**: `#f2ca50` (also `#D4AF37` as primary-container)
- **Text**: `#e3e2e8` (light gray, on-surface)
- **Surface Low**: `#111216` (containers)
- **Surface Container Low/30**: Used for alternating sections

### Typography
- **Font**: Inter (weights 300-900)
- **All text**: Sans-serif only
- **Headlines**: `font-black`, `uppercase`, `tracking-tighter` to `tracking-tight`
- **Labels**: `text-[10px]` to `text-[11px]`, `font-black`, `uppercase`, `tracking-[0.25em]` to `tracking-[0.6em]`
- **Body**: `text-lg`, `font-light` to `font-normal`, `leading-relaxed`

### Border Radius
- **ALL corners**: `0px` (sharp, architectural)
- **Exception**: `full` = `9999px` for circles only

### Key CSS Classes

#### `.hexagon`
```css
clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
```
Used for: icons, image containers, decorative elements

#### `.gold-metallic-text`
```css
background: linear-gradient(
  to right,
  #BF953F 0%,
  #FCF6BA 25%,
  #B38728 50%,
  #FBF5B7 75%,
  #AA771C 100%
);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
```

#### `.glass-premium`
```css
background: rgba(11, 12, 16, 0.7);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
border: 1px solid rgba(212, 175, 55, 0.4);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
```

#### Star Animation
```css
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
```
Stars: 14 manually placed divs, sizes 1px-3px, durations 3s-7s, mix of white and gold

---

## Page Sections (Top to Bottom)

### 1. Starry Night Background Layer
- **Implementation**: 14 star divs with inline styles
- **Position**: Fixed, full viewport, z-index 0, pointer-events none
- **Mix**: White and gold stars
- **Sizes**: 1px to 3px
- **Animation**: Twinkle keyframe, varying durations (3s-7s)

### 2. Top Navigation Bar (Fixed)
- **Position**: `fixed top-0`, z-50
- **Background**: Glass-premium
- **Padding**: `px-10 py-5`

**Logo:**
- Text: "Sembada Batu Beling"
- Styling: `gold-metallic-text`, `text-xl`, `font-black`, `tracking-tight`, `uppercase`

**Nav Links:**
- Spacing: `gap-10`
- Styling: `uppercase`, `tracking-[0.25em]`, `text-[10px]`, `font-extrabold`
- Items:
  - "Beranda" (active): `text-primary border-b-2 border-primary/50 pb-1`
  - "Tentang Kami", "Produk", "Portofolio", "Kontak": `text-on-surface/60 hover:text-primary transition-colors`

**CTA Button:**
- Text: "Konsultasi Sekarang"
- Styling: `border border-primary/50 text-primary px-6 py-2 uppercase text-[10px] font-black tracking-[0.2em]`
- Background: Glass-premium
- Hover: Fills with primary color

### 3. Hero Section
- **Height**: `min-h-[80vh]`, `pt-24`
- **Alignment**: Centered
- **Background**: Absolute gradient overlay `from-transparent via-background/20 to-background`

**Headline (H1):**
- Text: "Solusi Konstruksi<br/>Premium"
- Styling: `text-6xl md:text-8xl`, `gold-metallic-text`, `font-black`, `tracking-tighter`, `leading-[0.85]`, `uppercase`

**Tagline:**
- Text: "Integritas untuk Sukses dan Barokah"
- Container: Glass-premium box
- Styling: `text-2xl md:text-3xl`, `font-black`, `tracking-tight`, `italic`

**CTA Button:**
- Text: "Jelajahi Layanan Kami"
- Size: `px-16 py-6`
- Styling: Border + glass-premium
- Hover effect: Slide-up fill (`absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300`)

### 4. About Section
- **Padding**: `py-24 px-10`
- **Layout**: Flex row (column on mobile), `gap-24`

**Left Side (Image):**
- Background effect: `w-48 h-48 bg-primary/10 blur-[120px]` at `-top-10 -left-10`
- Container: Hexagonal with glass-premium overlay
- Image: `grayscale`, `brightness-75`, hover to `grayscale-0 brightness-100`, `transition-all duration-1000`, `border-2 border-primary/30`

**Right Side (Content):**
- Eyebrow: "Warisan Keunggulan"
  - Styling: `text-secondary uppercase tracking-[0.5em] text-[11px] font-black mb-6 block`
  
- H2: "Identitas Kami"
  - Styling: `text-5xl md:text-6xl`, `gold-metallic-text`, `font-black`, `mb-10`, `uppercase`, `tracking-tight`

- Two paragraphs:
  - Styling: `text-on-surface/80`, `text-lg`, `leading-relaxed`, `font-light`
  - Highlight: `PT. Batu Beling` in `text-primary font-bold`

- Stats row: `mt-14 flex gap-16`
  - **Stat 1**: "15+" / "Tahun Pengalaman"
  - **Stat 2**: "500+" / "Proyek Selesai"
  - Numbers: `text-5xl`, `font-black`, `text-primary`, `tracking-tighter`
  - Labels: `text-[10px]`, `uppercase`, `tracking-[0.3em]`, `text-secondary`, `font-black`

### 5. Product Grid Section
- **Background**: `py-24 bg-surface-container-low/30`
- **Border**: `border-y border-white/5`

**Header:**
- Eyebrow: "Ekosistem Produk"
  - Styling: `text-secondary`, `uppercase`, `tracking-[0.6em]`, `text-[11px]`, `font-black`, `mb-4 block`
  
- H2: "Solusi Eksklusif"
  - Styling: `text-5xl md:text-6xl`, `gold-metallic-text`, `font-black`, `uppercase`, `tracking-tight`

- Divider: `h-1 w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto mt-8`

**Product Grid:**
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-12`
- 6 products with staggered offsets:

1. **Cubicle Toilet** (row 1, col 1)
2. **Office Cubicle** (row 1, col 2, offset `translate-y-12`)
3. **Ornamen CNC** (row 1, col 3)
4. **Toilet Portable** (row 2, col 1)
5. **Kabinet Lab** (row 2, col 2, offset `translate-y-12`)
6. **Cellustone** (row 2, col 3)

**Each Product Item:**
- Hexagon container: `hexagon w-full aspect-square glass-premium relative overflow-hidden mb-8`
- Hover: `group-hover:scale-[1.02] transition-all duration-500`
- Image: `opacity-40`, hover: `group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000`
- Icon overlay: `material-symbols-outlined text-6xl text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100`
- Product name below: `text-xl text-primary text-center font-black uppercase tracking-[0.4em]`

### 6. Value Proposition Section
- **Padding**: `py-24 px-10`
- **Layout**: `grid grid-cols-1 lg:grid-cols-2 gap-24`

**Left Side:**
- Eyebrow: "Filosofi Kami"
  - Styling: `text-secondary uppercase tracking-[0.5em] text-[11px] font-black mb-6 block`
  
- H2: "Pilar Utama"
  - Styling: `text-5xl md:text-6xl gold-metallic-text font-black mb-10 uppercase tracking-tight`

- Description paragraph

- 4 pillars in `grid grid-cols-1 sm:grid-cols-2 gap-10`:
  1. **Presisi** (target icon)
  2. **Efisiensi** (schedule icon)
  3. **Elegan** (diamond icon)
  4. **Berkelanjutan** (eco icon)

- Each pillar:
  - Icon: `hexagon w-16 h-16 glass-premium`
  - Label: `text-sm text-primary font-black uppercase tracking-widest`
  - Description: `text-xs text-on-surface/60 leading-relaxed`

**Right Side:**
- Blurred glow: `bg-primary/10 rounded-full blur-[140px]`
- Glass-premium card with `p-12`
- Blueprint image: `grayscale opacity-20 mb-10`
- Blockquote: `text-2xl font-black italic text-on-surface/90 leading-relaxed`
- Quote attribution: `text-[10px] uppercase tracking-[0.4em] text-primary font-black` with `w-16 h-[2px]` gold line

### 7. Footer
- **Background**: `bg-background border-t border-white/5 pt-24 pb-12`
- **Layout**: `grid grid-cols-1 md:grid-cols-4 gap-16 px-12 pb-24`

**Column 1 (Brand):**
- Logo: `gold-metallic-text`
- Description paragraph

**Column 2 "Hubungi Kami":**
- Surabaya, Indonesia
- +62-811-330-061

**Column 3 "Tautan":**
- Google Maps
- Dokumentasi Legal

**Column 4 "Buletin":**
- Email input with arrow button
- Styling: `border-b border-primary/30`

**Copyright:**
- `text-on-surface/40 text-[10px] uppercase tracking-[0.5em] font-black`, centered
- `border-t border-white/5`

---

## Tailwind Classes Used (Reference)

### Spacing
- `px-10`, `py-5`, `py-24`, `gap-10`, `gap-16`, `gap-24`, `mb-4`, `mb-6`, `mb-8`, `mb-10`, `mb-12`, `mt-8`, `mt-14`

### Typography
- `text-[10px]`, `text-[11px]`, `text-xl`, `text-2xl`, `text-3xl`, `text-5xl`, `text-6xl`, `text-8xl`
- `font-black`, `font-extrabold`, `font-bold`, `font-light`
- `uppercase`, `italic`
- `tracking-tighter`, `tracking-tight`, `tracking-[0.25em]`, `tracking-[0.3em]`, `tracking-[0.4em]`, `tracking-[0.5em]`, `tracking-[0.6em]`
- `leading-[0.85]`, `leading-relaxed`

### Layout
- `flex`, `flex-row`, `flex-col`, `grid`, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`
- `md:grid-cols-3`, `lg:grid-cols-2`
- `gap-y-24`, `gap-x-12`
- `translate-y-12`, `-top-10`, `-left-10`

### Effects
- `grayscale`, `brightness-75`, `hover:grayscale-0`, `hover:brightness-100`
- `blur-[120px]`, `blur-[140px]`
- `opacity-20`, `opacity-40`, `opacity-60`, `opacity-80`
- `hover:opacity-100`
- `scale-50`, `scale-100`, `scale-110`, `group-hover:scale-[1.02]`
- `transition-all duration-300`, `duration-500`, `duration-700`, `duration-1000`

### Borders
- `border-2`, `border-b-2`
- `border-primary/30`, `border-primary/40`, `border-primary/50`, `border-primary/60`
- `border-white/5`
- `rounded-none` (all corners sharp)

---

## Implementation Notes for React + TailwindCSS

### Component Structure Needed:
1. **Navbar** - Fixed, glass-premium, responsive
2. **Hero** - Full viewport, animated stars, gradient text
3. **AboutSection** - Two-column with hexagonal image
4. **ProductGrid** - 6 products with staggered offsets
5. **ValueProposition** - Two-column with pillars and quote
6. **Footer** - Four-column with newsletter

### Custom CSS Required:
1. Star animations (already have)
2. Gold gradient text (already have)
3. Hexagonal clip-path (already have)
4. Glassmorphism effect (already have)
5. Staggered grid offsets

### Images Needed:
1. Hero background (architectural/construction)
2. About section image (company/team)
3. 6 product images (hexagonal containers)
4. Blueprint image (value proposition)

### Icons Needed (Material Symbols):
1. target - Presisi
2. schedule - Efisiensi
3. diamond - Elegan
4. eco - Berkelanjutan
5. Product-specific icons for each product card

---

*This document serves as the complete specification for rebuilding the homepage with React + TailwindCSS using shadcn/ui components where applicable.*
