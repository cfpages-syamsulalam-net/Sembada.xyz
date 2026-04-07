# Sembada Batu Beling - Design System

## Project Overview
**Company:** Sembada Batu Beling (Subsidiary of PT. Batu Beling)  
**Project Type:** Company Profile & Product Catalog Website  
**Framework:** React (planned)  
**Tagline:** "Integritas untuk Sukses dan Barokah"

---

## 1. Creative Vision & Design Philosophy

### 1.1 Design North Star: "The Obsidian Monolith"
Sembada Batu Beling's digital presence embodies **architectural precision, luxury, and structural integrity**. The design language breaks away from conventional corporate websites by embracing:

- **Sharp Geometry**: 0px border radius, hexagonal elements, angular compositions
- **Deep Obsidian Voids**: Rich, dark backgrounds that create dramatic contrast
- **Metallic Gold Accents**: Precious metal gradients for premium positioning
- **Asymmetric Layouts**: Breaking rigid grids through vertical offsets and geometric masking
- **Glass & Light**: Transparency, backdrop blur, and luminous elements

### 1.2 Brand Positioning
The experience should feel like entering a **private architectural gallery**—stark, intentional, and authoritative. Every element communicates:
- ✅ Premium quality & craftsmanship
- ✅ Engineering precision (CNC, phenolic resin expertise)
- ✅ Trust & integrity (backed by PT. Batu Beling's national track record)
- ✅ Modern innovation with traditional values

### 1.3 Core Design Principles
1. **Luxury through Restraint**: Less is more. Use negative space intentionally.
2. **Engineered Aesthetics**: Every shape, every angle has purpose.
3. **Depth through Layering**: Communicate hierarchy through tonal shifts, not borders.
4. **Motion with Meaning**: Animations serve functional purposes, not decoration.

---

## 2. Color System

### 2.1 Primary Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary Gold** | Obsidian Gold | `#D4AF37` | Brand accents, headlines, premium highlights |
| **Bright Gold CTA** | Luminous Gold | `#FDE047` | Primary CTAs, hover states, critical actions |
| **Metallic Bronze** | Bronze Accent | `#B8860B` | Gradient stops, secondary accents |
| **Primary Background** | Deep Obsidian | `#0B0C10` | Main canvas, base background |
| **Surface Container** | Carbon Surface | `#111216` | Cards, containers, elevated elements |
| **Primary Text** | Moonlight Silver | `#E2E8F0` | Body text, primary content |
| **Secondary Text** | Muted Graphite | `#94A3B8` | Captions, labels, meta information |
| **Success** | Emerald Glow | `#10B981` | Positive confirmations, success states |
| **Error** | Crimson Alert | `#EF4444` | Errors, warnings, destructive actions |

### 2.2 Surface Hierarchy (Tonal Layering)

The design uses **background color shifts** instead of borders to create depth:

```
Level 0 - Base Canvas:        #0B0C10 (Deep Obsidian)
Level 1 - Surface Containers: #111216 (Carbon Surface)
Level 2 - Elevated Elements:   #1A1B21 (Raised Surface)
Level 3 - Glassmorphism:      rgba(17, 18, 22, 0.7) + backdrop-blur(24px)
```

### 2.3 Gold Gradient System

For premium headlines and hero elements, use a **5-stop metallic gradient**:

```css
background: linear-gradient(
  135deg,
  #BF953F 0%,
  #D4AF37 25%,
  #FDE047 50%,
  #D4AF37 75%,
  #B8860B 100%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 2.4 Color Rules

- **NO standard web colors** (no blue links, no vibrant primaries)
- **NO visible section borders** - use background transitions
- **Interactive borders**: Only on buttons/inputs, 40% opacity gold
- **Dark mode only** - this is the default and only theme

---

## 3. Typography System

### 3.1 Font Families

| Role | Font | Purpose |
|------|------|---------|
| **Headlines** | Inter / Manroge | Clean, modern, highly legible |
| **Body & UI** | Inter / Plus Jakarta Sans | Sans-serif, professional, accessible |

**IMPORTANT:** Use SANS-SERIF fonts ONLY. No serif fonts anywhere in the design.

### 3.2 Type Scale

| Level | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| **Display Hero** | 80px / 5rem | 900 (Black) | 0.85 | -0.05em | Hero headlines, landing statements |
| **Display XL** | 60px / 3.75rem | 900 (Black) | 0.9 | -0.03em | Section hero titles |
| **H1** | 48px / 3rem | 900 (Black) | 1.1 | 0.05em | Page titles, major sections |
| **H2** | 36px / 2.25rem | 800 (ExtraBold) | 1.2 | 0.02em | Section headlines |
| **H3** | 28px / 1.75rem | 700 (Bold) | 1.3 | 0 | Subsections |
| **H4** | 22px / 1.375rem | 600 (SemiBold) | 1.4 | 0 | Card titles |
| **Subtitle** | 24px / 1.5rem | 200 (Light) / Italic | 1.4 | 0 | Pull quotes, taglines |
| **Body LG** | 18px / 1.125rem | 400 (Regular) | 1.6 | 0 | Large body text, intros |
| **Body** | 16px / 1rem | 400 (Regular) | 1.6 | 0 | Standard body content |
| **Small** | 14px / 0.875rem | 400 (Regular) | 1.5 | 0 | Captions, helper text |
| **Label XS** | 12px / 0.75rem | 900 (Black) | 1.2 | 0.25em | Nav, tags, micro-labels |
| **Label XXS** | 10px / 0.625rem | 900 (Black) | 1.2 | 0.5em | Ultra-small labels |

### 3.3 Typography Rules

- **Never mix font families** - stick to Inter or chosen sans-serif
- **Use weight contrast** to create hierarchy, not different fonts
- **Extreme letter-spacing** for labels/navigation creates editorial luxury
- **Large headlines in uppercase** for monumental effect
- **Italic light weights** for elegant subtitles
- **ALL fonts are sans-serif** - no serif fonts anywhere

### 3.4 Unified Page Header Pattern (MANDATORY)

**Every page MUST follow this exact structure:**

```tsx
<section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
  <div className="container mx-auto text-center">
    {/* Eyebrow Span */}
    <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
      Eyebrow Label Here
    </span>
    
    {/* H1 Headline */}
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight mx-auto max-w-4xl">
      Page Title Here
    </h1>
    
    {/* Description Paragraph */}
    <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
      Brief description of the page content.
    </p>
  </div>
</section>
```

**Rules:**
1. **Container padding:** `px-4 md:px-6` (NOT larger values to prevent overflow)
2. **Eyebrow:** `text-[#94A3B8]` or `text-[#f2ca50]`, uppercase, tracking wide, small text, `block mb-4 md:mb-6`
3. **H1:** Gold gradient, uppercase, responsive sizing, `mb-4 md:mb-6`, `leading-tight`
4. **Paragraph:** `max-w-3xl mx-auto`, `font-light`, `leading-relaxed`
5. **Text alignment:** ALWAYS `text-center` on container div
6. **Responsive:** ALWAYS use breakpoint ranges (e.g., `mb-4 md:mb-6`)

**Exceptions:**
- Product detail pages may use full-height hero sections with background images instead of flat sections
- Contact page eyebrow can use `text-[#f2ca50]` for emphasis
- All other pages MUST follow this exact pattern

---

## 4. Geometry & Spatial System

### 4.1 Hexagonal Geometry

The hexagon is the **signature shape** representing precision engineering:

```css
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
```

**Usage:**
- Image frames for products
- Icon containers
- Decorative background elements
- Feature highlights

### 4.2 Border Radius

**RULE: 0px for all structural elements**

- ✅ Cards, buttons, containers: `border-radius: 0`
- ✅ Glass elements maintain sharp edges
- ❌ NO rounded corners on any architectural element

**Exception:** Only decorative background ornaments may use subtle rounding.

### 4.3 Spacing System

Based on **8px grid** for mathematical precision:

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 192px, 256px
```

### 4.4 Layout Grid

- **Desktop**: 12-column grid, 1200px max-width, 24px gutters
- **Tablet**: 8-column grid, 768px max-width, 16px gutters
- **Mobile**: 4-column grid, 100% width, 16px gutters

---

## 5. Elevation & Depth

### 5.1 Tonal Layering

Depth is achieved through **background color shifts**, not shadows:

```css
/* Section transitions */
background: #0B0C10; /* Base */
background: #111216; /* Container */
background: #1A1B21; /* Elevated */
```

### 5.2 Shadow System

**Minimal shadows** - used only for floating elements:

```css
/* Glass Card Float */
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);

/* Subtle Lift */
box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.6);

/* Gold Glow (for gold elements) */
box-shadow: 0 0 4px #D4AF37, 0 0 12px rgba(212, 175, 55, 0.3);
```

### 5.3 Glassmorphism

For floating/navigation elements:

```css
background: rgba(11, 12, 16, 0.7);
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);
border: 1px solid rgba(212, 175, 55, 0.4);
```

### 5.4 Light Emission

Gold elements emit light rather than cast shadows:

```css
.gold-glow {
  box-shadow: 0 0 8px rgba(212, 175, 55, 0.6),
              0 0 24px rgba(212, 175, 55, 0.3);
}
```

---

## 6. Component Design System

### 6.1 Buttons

**Primary Button:**
```css
border-radius: 0;
border: 2px solid #D4AF37;
background: transparent;
color: #D4AF37;
padding: 12px 32px;
text-transform: uppercase;
letter-spacing: 0.15em;
transition: all 0.3s ease;

/* Hover */
&:hover {
  background: #D4AF37;
  color: #0B0C10;
  box-shadow: 0 0 16px rgba(212, 175, 55, 0.5);
}
```

**Secondary (Ghost) Button:**
```css
border: 1px solid rgba(212, 175, 55, 0.4);
background: transparent;
color: #E2E8F0;

/* Hover - vertical fill animation */
&:hover {
  background: linear-gradient(to top, rgba(212, 175, 55, 0.1), transparent);
}
```

### 6.2 Cards

**Glass Card:**
```css
background: rgba(17, 18, 22, 0.6);
backdrop-filter: blur(20px);
border: 1px solid rgba(212, 175, 55, 0.2);
border-radius: 0;
padding: 24px;
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Hover */
&:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8);
  border-color: rgba(212, 175, 55, 0.4);
}
```

**Hexagonal Card:**
```css
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
background: rgba(17, 18, 22, 0.8);
/* Content must be padded to avoid clip-path edges */
padding: 48px 32px;
```

### 6.3 Forms & Inputs

**Input Field:**
```css
background: transparent;
border: none;
border-bottom: 1px solid rgba(212, 175, 55, 0.3);
color: #E2E8F0;
padding: 12px 0;
font-size: 16px;

/* Label */
label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: #94A3B8;
}

/* Focus */
&:focus {
  outline: none;
  border-bottom-color: #D4AF37;
  box-shadow: 0 2px 0 0 rgba(212, 175, 55, 0.3);
}
```

### 6.4 Navigation

**Desktop Navigation:**
- Fixed top bar, glass-morphic background
- Shrinks on scroll (reduced padding)
- Logo left, menu items right
- Active state: gold underline
- Menu items: 12px, uppercase, 0.25em letter-spacing

**Mobile Navigation:**
- Hamburger menu with hexagonal icon
- Full-screen overlay navigation
- Animated menu items with staggered entrance

### 6.5 Hero Section

**Structure:**
```
┌─────────────────────────────────────┐
│   Starry Night Background           │
│   (subtle particles/stars)          │
│                                     │
│   [COMPANY LOGO]                    │
│                                     │
│   DISPLAY HERO TEXT                 │
│   (Gold gradient headline)          │
│                                     │
│   Subtitle (light italic)           │
│                                     │
│   [PRIMARY CTA] [SECONDARY CTA]     │
│                                     │
│   Scroll indicator (animated)       │
└─────────────────────────────────────┘
```

### 6.6 Product Cards

**Grid Layout with Asymmetric Offsets:**
- Hexagonal image containers
- Product name (H4)
- Brief description (2-3 lines)
- "Learn More" link with arrow
- Staggered vertical positioning (not uniform grid)

---

## 7. Background Effects

### 7.1 Starry Night Effect

For hero sections and large voids:

```css
/* CSS-only approach: multiple radial gradients */
background: 
  radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.3), transparent),
  radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.2), transparent),
  radial-gradient(2px 2px at 60% 20%, rgba(212, 175, 55, 0.4), transparent),
  radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.3), transparent),
  #0B0C10;
```

**Alternative:** Use subtle animated particles (canvas-based) for premium feel.

### 7.2 Geometric Background Patterns

Subtle hexagonal grid overlays for texture:

```css
background-image: url("data:image/svg+xml,..."); /* Hex pattern */
background-size: 60px 60px;
opacity: 0.03;
```

### 7.3 Gradient Overlays

For imagery and photo treatments:

```css
/* Gold tint overlay on images */
background: linear-gradient(
  135deg,
  rgba(11, 12, 16, 0.9) 0%,
  rgba(212, 175, 55, 0.1) 50%,
  rgba(11, 12, 16, 0.9) 100%
);
```

---

## 8. Animation & Motion

### 8.1 Principles

- **Purposeful**: Every animation serve a functional role
- **Crisp**: Ease-out curves, no bouncy/playful animations
- **Fast**: 200-400ms for UI, 600-800ms for page transitions
- **Respectful**: Honor `prefers-reduced-motion`

### 8.2 Standard Transitions

```css
/* Hover states */
transition: all 0.3s ease;

/* Page sections (scroll reveal) */
transition: opacity 0.6s ease, transform 0.6s ease;

/* Navigation */
transition: all 0.2s ease;
```

### 8.3 Scroll Reveal

Sections animate in on scroll:

```css
/* Initial state */
opacity: 0;
transform: translateY(32px);

/* Visible state */
opacity: 1;
transform: translateY(0);
```

### 8.4 Hover Micro-interactions

- **Buttons**: Background fill, glow emission
- **Cards**: Lift effect (translateY + shadow)
- **Links**: Underline expand from center
- **Images**: Subtle zoom (scale 1.02-1.05)

---

## 9. Imagery & Photography

### 9.1 Photo Treatment

All product/project photos receive:
- Dark overlay gradient (see 7.3)
- Slight desaturation (-10%)
- Hexagonal or rectangular frames (0px radius)
- Gold accent border on hover

### 9.2 Icon Style

- **Line icons** with 1.5px stroke
- Housed in hexagonal containers
- Gold color on dark background
- Minimal detail, geometric shapes

### 9.3 Logo Usage

- Primary logo: Top-left in navigation
- Can be used as watermark in hero (low opacity)
- Always maintain aspect ratio
- Minimum size: 40px height

---

## 10. Responsive Strategy

### 10.1 Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### 10.2 Responsive Behavior

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navigation | Hamburger overlay | Hamburger or condensed | Full horizontal nav |
| Hero Text | 40px / 2.5rem | 56px / 3.5rem | 80px / 5rem |
| Grid Columns | 1-2 columns | 2-3 columns | 4 columns |
| Cards | Full width, stacked | 2 per row | 3-4 per row |
| Spacing | 16px base | 24px base | 32px base |

### 10.3 Mobile Considerations

- Touch targets minimum 44x44px
- Reduce particle effects for performance
- Simplify glassmorphism (some devices struggle with backdrop-filter)
- Ensure adequate contrast (gold on dark passes WCAG AA)

---

## 11. Accessibility

### 11.1 Contrast Ratios

All text must meet minimum:
- **Normal text (< 18px)**: 4.5:1
- **Large text (≥ 18px)**: 3:1

**Our palette passes:**
- Silver (#E2E8F0) on Obsidian (#0B0C10): **13.5:1** ✅
- Gold (#D4AF37) on Obsidian (#0B0C10): **8.2:1** ✅

### 11.2 Focus States

All interactive elements must have visible focus:

```css
&:focus-visible {
  outline: 2px solid #FDE047;
  outline-offset: 2px;
}
```

### 11.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 12. Do's and Don'ts

### ✅ DO

- Use 0px border radius for all structural elements
- Create depth through tonal layering (background shifts)
- Use extreme letter-spacing for labels and navigation
- Apply gold gradients for headlines and premium elements
- Include hexagonal geometry as signature brand element
- Use glassmorphism for floating/overlay elements
- Animate with purpose and intention
- Maintain dark mode as the only theme

### ❌ DON'T

- Use rounded corners on cards, buttons, or containers
- Use standard web colors (blue links, green buttons, etc.)
- Add visible borders unless absolutely necessary
- Use 1px solid white/grey borders (use gold 40% opacity instead)
- Mix multiple font families (stick to Cinzel/Inter)
- Create bouncy, playful animations (keep it crisp and intentional)
- Use shadows on every element (reserve for floating elements only)
- Overcrowd layouts (embrace negative space)

---

## 13. Implementation Notes

### 13.1 CSS Architecture

**Approach: shadcn/ui + TailwindCSS**

For the React implementation:
- **Primary:** shadcn/ui components (copy-paste, you own the code)
- **Styling:** TailwindCSS for utility classes
- **Customization:** Override shadcn/ui theme to match Midnight Obsidian design
- **Global styles:** Minimal custom CSS only for unique effects (starry sky, gold gradients)

**Why shadcn/ui?**
- Not a library - you copy components into your project
- Fully customizable TypeScript + React
- Built on TailwindCSS (industry standard)
- Accessible by default (WAI-ARIA compliant)
- Perfect for beginners - readable, documented code
- You can modify every aspect

**TailwindCSS Configuration:**
- Extend Tailwind theme with our design tokens
- Custom colors (obsidian, gold palette)
- Custom spacing (8px grid)
- Custom fonts (Inter, sans-serif only)
- Keep dark mode as default

**What We Keep in Custom CSS:**
- Animated starry sky effect (pure CSS, ~15KB)
- Gold gradient text effect (not in Tailwind by default)
- Hexagonal clip-paths
- Any unique animations not in Tailwind

### 13.2 shadcn/ui Setup Strategy

1. Install TailwindCSS + shadcn/ui
2. Configure tailwind.config.js with our design tokens
3. Run `npx shadcn@latest init`
4. Add components as needed: `npx shadcn@latest add button`
5. Customize each component to match Midnight Obsidian style
6. Build custom components (HexIcon, StarryBackground, etc.)

### 13.3 Animated Starry Sky Effect

**100% CSS Implementation - No JavaScript Required!**

The starry night background includes multiple animated layers:

1. **Static Stars Layer** (`::before` pseudo-element)
   - 15 strategically placed stars (white + gold)
   - Twinkling animation (3-5s pulse)
   - Opacity oscillation for natural feel

2. **Shooting Stars** (`::after` pseudo-element)
   - 3 shooting stars with different trajectories
   - Staggered timing (5s, 10s delays)
   - Varying angles (30°, 35°, 45°)
   - 12-18s animation cycles

3. **Enhanced Multi-Layer System** (`.bg-starry-enhanced`)
   - Layer 1: Dense small stars (20 stars, 3s twinkle)
   - Layer 2: Gold accent stars (6 stars, 5s twinkle, delayed)
   - Layer 3: Falling stars (additional div, 10-14s cycles)
   - Layer 4: Fading/pulsing stars (6-8s cycles)

**Performance:**
- All animations use `transform` and `opacity` (GPU-accelerated)
- No layout thrashing or expensive properties
- Respects `prefers-reduced-motion` media query
- Total CSS size: ~15KB (vs 50-100KB+ JS libraries)

**Usage:**
```html
<!-- Basic starry background -->
<div class="bg-starry">
  Content here
</div>

<!-- Enhanced multi-layer stars -->
<div class="bg-starry-enhanced">
  <div class="falling-stars"></div>
  <div class="fading-stars"></div>
  Content here
</div>
```

### 13.3 Performance

- Optimize particle/star effects (use CSS gradients over canvas when possible) ✅ **DONE**
- Lazy load images and heavy components
- Use `transform` and `opacity` for animations (GPU-accelerated) ✅ **DONE**
- Minimize backdrop-filter usage on mobile
- All starry animations are pure CSS (zero JS overhead)
- Consider `will-change` for critical animations (use sparingly)

### 13.4 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- Graceful degradation for backdrop-filter (provide solid background fallback)
- Test glassmorphism on Safari (requires `-webkit-` prefix) ✅ **DONE**
- CSS animations supported in all modern browsers
- Shooting stars degrade gracefully (static stars still visible)

### 13.5 When to Consider CSS Libraries

**Evaluate on case-by-case basis:**
1. Does it provide something difficult to replicate in custom CSS?
2. Will it conflict with our design tokens?
3. Is the bundle size justified?
4. Can we tree-shake to include only what we need?

**Decision process:**
- Try custom CSS first (we have comprehensive system)
- Only add library if custom solution is significantly worse
- Document any library additions in CHANGELOG.md
- Ensure library uses CSS custom properties where possible

---

## 14. Design Inspiration & References

- **Luxury Architectural Firms**: Foster + Partners, Zaha Hadid Architects
- **Premium Automotive**: Lamborghini, Rolls-Royce digital experiences
- **High-End Fashion**: Balenciaga, Saint Laurent web experiences
- **Editorial Design**: Wallpaper*, Monocle magazine layouts
- **Google Stitch**: For layout inspiration and content structure

---

*This design system is a living document. As the React implementation progresses, this guide will be updated with component specifications and interaction patterns.*
