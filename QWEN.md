# Qwen Code - Project Rules & Guidelines

## Project: Sembada Batu Beling Website
**Type:** Company Profile & Product Catalog  
**Framework:** React + Vite + TypeScript  
**Design System:** Midnight Obsidian (Dark mode, gold accents, architectural luxury)  
**Tagline:** "Integritas untuk Sukses dan Barokah"

---

## 🚨 CRITICAL RULES FOR AI ASSISTANCE

### 1. File Editing Protocol

**NEVER perform total file replacements on existing files unless explicitly requested.**

#### Why?
- Large files contain complex logic and configurations
- Total replacements risk losing important implementations
- AI may forget edge cases, custom configurations, or recent additions
- Incremental changes preserve project integrity

#### Required Approach:
```
✅ DO: Use search-and-replace (edit tool) to inject/modify specific sections
✅ DO: Add new code at precise locations with context
✅ DO: Append to files when adding features
❌ DON'T: Rewrite entire files from scratch
❌ DON'T: Overwrite files without explicit user approval
```

#### Exception Cases:
- New files (never existed before) → OK to create fresh
- User explicitly says "rewrite this file completely" → OK
- User says "start over" or "from scratch" → OK

### 2. Context Preservation

**Always maintain awareness of:**
- Current project state (what's been built, what's pending)
- Existing implementations (don't duplicate or break working code)
- User's previous decisions and preferences
- File relationships and dependencies

**Before making changes:**
1. Read the file first to understand current implementation
2. Check related files for context
3. Identify what needs to change vs. what must stay
4. Make minimal, surgical edits

### 3. Documentation Updates

**When updating documentation (.md files):**
- Use injection/edit tool for specific sections
- Preserve existing content that's still valid
- Add new information, don't replace everything
- Mark sections as "Updated: [date]" when significant changes made

---

## 📁 Project Structure Overview

```
sembada.xyz/
├── DESIGN.md                  # Complete design system
├── COMPONENTS.md              # React component architecture
├── PAGES.md                   # Page structure & routing
├── DEVELOPMENT.md             # Development workflow guide
├── CHANGELOG.md              # Project progress tracking
├── QWEN.md                   # This file (AI rules)
├── style.css                 # Global CSS with design tokens
├── .MD/                      # Legacy documentation
│   ├── sembada-design-system.md
│   └── sembada-sitemap-dan-struktur.md.txt
└── stitch/                   # Design inspiration (Google Stitch)
```

---

## 🔧 Development Workflow

### CRITICAL: Always Read Context Files First

### Running the Dev Server
**When the user asks to run/preview the site:**
```bash
cd C:\Users\THINKPAD\Sembada.xyz\sembada-app && npm run dev -- --port 5173
```
This starts the dev server at `http://localhost:5173`. Use `is_background: true` so it keeps running.
The user can then simply refresh their browser to see changes.

**To stop the dev server:**
```bash
taskkill /F /PID <pid>
```

**When installing packages (lucide-react etc), always kill existing dev server first:**
```bash
taskkill /F /PID <pid>  # kill dev server
npm install <package>    # install package
cd C:\Users\THINKPAD\Sembada.xyz\sembada-app && npm run dev -- --port 5173  # restart
```

### Version Awareness

**BEFORE starting any work, ALWAYS read these files:**
1. `/QWEN.md` - This file (rules and guidelines)
2. `/CHANGELOG.md` - Current project status and progress
3. `/DESIGN.md` - Design system specifications
4. `/HOMEPAGE_SPEC.md` - Homepage detailed specifications
5. `/ALL_PAGES_SPEC.md` - All other pages specifications
6. `/BEGINNER_GUIDE.md` - React/Vite context (if needed)
7. `/CLOUDFLARE_DEPLOY.md` - Deployment guide (if needed)

**Why this is critical:**
- Provides complete context of what's been done
- Shows current project state
- Prevents repeating work or making outdated changes
- Ensures consistency with design decisions already made
- Prevents mistakes like using wrong TailwindCSS version

### Version Awareness
- **Always check versions** in package.json before installing packages
- **Never upgrade major versions** without checking compatibility first
- **TailwindCSS:** v3.x is stable and correct (NOT v4)
- **React:** v18+ is correct
- **Vite:** Latest is fine
- **React Router:** v6+ is correct

---

## 🎨 Design System Rules

### CSS Architecture
- **Primary Approach:** shadcn/ui + TailwindCSS v3 (NOT v4)
- **NO global style.css** for components (use TailwindCSS utility classes)
- Custom CSS ONLY for: starry sky animation, gold gradient text, hexagonal clip-paths, glassmorphism
- **CRITICAL:** Use TailwindCSS v3.x, NOT v4 (v4 has breaking changes and different PostCSS setup)

### TailwindCSS Configuration Rules
- **Version:** Always use `tailwindcss@^3.4.0` (stable, well-documented)
- **PostCSS Config:** Must use `tailwindcss: {}` plugin (not `@tailwindcss/postcss`)
- **CSS Directives:** Use `@tailwind base; @tailwind components; @tailwind utilities;` (NOT `@import "tailwindcss"`)
- **Content paths:** Must include `"./index.html"` and `"./src/**/*.{js,ts,jsx,tsx}"`

### Typography
- **ALL fonts must be sans-serif**
- Primary font: Inter (ONLY font, no Cinzel, no Playfair Display, no serif fonts anywhere)
- Use font weights for hierarchy (light, regular, semibold, bold, black)
- Headlines: `font-black`, `uppercase`, `tracking-tight` to `tracking-tighter`
- Labels: `text-[10px]` to `text-[11px]`, `font-black`, `uppercase`, `tracking-[0.25em]` to `tracking-[0.6em]`

### Site Title Styling
- **Format:** "Sembada Batu Beling"
- **"Sembada Batu"** = Gold gradient (`text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#f2ca50] to-[#AA771C]`)
- **"Beling"** = Silver (`text-[#C0C0C0]`)
- Applied to: Navbar logo, Footer logo

### Company Name
- **NEVER use:** "PT. Batu Beling"
- **ALWAYS use:** "Sembada BatuBeling" (note: no space between Batu and Beling, capital B)

### Hexagonal Geometry - Border Rules
- **CRITICAL:** `clip-path` cuts through CSS borders, so borders won't show on all sides
- **NEVER use `border` property on clipped elements**
- **ALWAYS use wrapper classes for hexagon borders:**
  - `.hexagon-border` - 3px border (small icons)
  - `.hexagon-border-5` - 5px border (standard, most common)
  - `.hexagon-border-8` - 8px border (prominent hexagons)
- **Border style:** Gold gradient (`rgba(212, 175, 55, 0.8)` to `rgba(212, 175, 55, 0.4)`)
- **Minimum thickness:** 5px for all hexagonal elements

### Component Development
- Study ALL HTML files in `/stitch` folder before building components
- Read `/HOMEPAGE_SPEC.md` and `/ALL_PAGES_SPEC.md` for complete specifications
- Use TailwindCSS utility classes exclusively (no custom CSS in components)
- Follow exact styling patterns from stitch designs:
  - Glass-premium: `bg-[#0B0C10]/70 backdrop-blur-xl border border-[#f2ca50]/40`
  - Gold gradient text: Custom CSS class (not Tailwind utility)
  - Hexagonal shapes: `clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`
  - Image treatment: `grayscale hover:grayscale-0 transition-all duration-700`
  - Staggered grids: `translate-y-8` or `translate-y-12` offsets

### Critical Styling Patterns (from /stitch)
```css
/* Gold Metallic Text */
.gold-metallic-text {
  background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

/* Glass Premium */
.glass-premium {
  background: rgba(11, 12, 16, 0.7);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
}

/* Hexagon Clip Path */
.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Star Animation */
@keyframes twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}
```

### Responsive Design Rules (CRITICAL)

**Target Screen:** 1366px × 768px (common laptop) + all other screens

**Rules:**
1. **ALWAYS use responsive breakpoints** for ALL text sizes, padding, margins
2. **Text sizes:** Use range notation `text-sm md:text-base lg:text-lg`
3. **Spacing:** Use range notation `px-4 md:px-6 lg:px-8`
4. **NEVER use fixed large sizes** without responsive variants
5. **Test breakpoints:** 
   - Mobile: 320px - 640px
   - Tablet: 640px - 1024px
   - Desktop: 1024px - 1366px
   - Large: 1366px+

**ICONS: ALWAYS USE INLINE SVGs, NOT CDN/EXTERNAL LIBRARIES**
- FontAwesome CDN can be blocked by ad blockers, CORS, or network issues
- Use inline SVG components that are bundled with the code
- Store SVGs in `/src/data/productIcons.tsx` as React components
- Never add external icon CDN links to index.html unless absolutely necessary
- If icons are needed, create inline SVG files or use React icon libraries

**UNIFIED PAGE HEADER PATTERN (MANDATORY):**
Every page MUST use this exact structure:
```tsx
<section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 text-center bg-[#0B0C10]">
  <div className="container mx-auto text-center">
    <span className="text-[#94A3B8] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-black mb-4 md:mb-6 block">
      Eyebrow Label
    </span>
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gold-gradient uppercase mb-4 md:mb-6 leading-tight mx-auto max-w-4xl">
      Page Title
    </h1>
    <p className="text-lg md:text-xl text-[#e3e2e8]/80 max-w-3xl mx-auto leading-relaxed font-light">
      Description paragraph.
    </p>
  </div>
</section>
```
**NEVER forget:**
- `px-4 md:px-6` for container padding (prevents overflow)
- `text-center` on container div
- `text-gold-gradient` for H1
- `max-w-3xl mx-auto` for paragraph
- `mb-4 md:mb-6` spacing between elements

**Example:**
```tsx
// ❌ WRONG - Fixed size, will overflow
<h1 className="text-6xl">Title</h1>

// ✅ CORRECT - Responsive sizing
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Title</h1>
```

**Container Width:**
- Use `container mx-auto` with responsive padding
- Add `overflow-hidden` to sections if needed
- Use `max-w-full` on images and containers

**Common Issues to Avoid:**
- ❌ Large tracking values on small screens: `tracking-[0.5em]` → use `tracking-[0.2em] md:tracking-[0.4em]`
- ❌ Fixed padding on small screens: `px-10` → use `px-4 md:px-8 lg:px-10`
- ❌ Large font sizes without breakpoints: `text-8xl` → use `text-5xl md:text-7xl lg:text-8xl`
- ❌ Long text without break-words: add `break-words` or `leading-tight`

### Placeholder Images

**Use Unsplash for placeholders (FREE, no API key needed):**
```
Format: https://images.unsplash.com/[photo-id]?w=[width]&h=[height]&fit=crop
Example: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop
```

**Why Unsplash:**
- ✅ Free for commercial use
- ✅ No attribution required (but appreciated)
- ✅ Direct URL access (no signup)
- ✅ Resize parameters in URL
- ✅ High quality photos

**Common Image Sizes:**
- Square (products, avatars): `?w=600&h=600&fit=crop`
- Landscape (hero, banners): `?w=1200&h=600&fit=crop`
- Portrait (team, about): `?w=600&h=800&fit=crop`

**Always add placeholder images** during development so we can see the design properly. Replace with real images later.

### Component Development Process
1. **READ** all `/stitch` HTML files first
2. **STUDY** `/HOMEPAGE_SPEC.md` and `/ALL_PAGES_SPEC.md`
3. **DOCUMENT** component requirements before building
4. **BUILD** components with TailwindCSS classes
5. **TEST** against stitch designs for accuracy
6. **ITERATE** until pixel-perfect

### Typography
- Headings: Cinzel / Playfair Display
- Body: Inter / Montserrat
- Gold gradient for premium headlines
- Extreme letter-spacing for labels/navigation

---

## 📝 CHANGELOG.md Protocol

**Every significant change MUST be logged.**

### Format:
```markdown
## [Version/Phase] - [Date]

### Added
- New features or components

### Changed
- Modifications to existing features

### Fixed
- Bug fixes

### Notes
- Important context or decisions made
```

### When to Log:
- ✅ New component created
- ✅ New page implemented
- ✅ Design system updated
- ✅ Bug fixed
- ✅ Major decision made
- ✅ CSS/ styling changes
- ✅ Dependencies added/removed

### Why Important:
- Provides complete project history
- Helps resume context after breaks
- Tracks progress for client updates
- Identifies what's been completed

---

## 🔧 Development Workflow

### CSS Approach
- **Vanilla CSS with Custom Properties** as foundation
- **CSS libraries can be added** if they provide unique value (e.g., animation utilities)
- **100% CSS effects preferred** over JS animations when possible
- Starry sky, glows, transitions → Pure CSS
- Complex interactions → Framer Motion or similar (if needed)

### File Changes
1. Read file first
2. Understand current implementation
3. Make minimal surgical edit
4. Verify change doesn't break existing code
5. Log change in CHANGELOG.md

### Commit Messages
Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation update
- `style:` CSS/styling changes
- `refactor:` Code restructuring
- `perf:` Performance improvement
- `chore:` Build/tooling changes

---

## 🎯 Project Goals

### Primary Objectives
1. Create luxury company profile website for Sembada Batu Beling
2. Showcase 7 product categories with detailed information
3. Display portfolio/projects with photo gallery
4. Provide easy contact methods (WhatsApp, form, map)
5. Achieve 90+ Lighthouse score on all metrics
6. Full accessibility compliance (WCAG AA)
7. Mobile-first responsive design

### Design Philosophy
- "The Obsidian Monolith" - Architectural precision & luxury
- Less is more - embrace negative space
- Every element has purpose
- Crisp, intentional, authoritative
- No playful or bouncy animations
- Dark mode as the only theme

---

## 🚫 Things to Avoid

- ❌ Don't use global CSS for components (use TailwindCSS)
- ❌ Don't use Bootstrap (conflicts with our design)
- ❌ Don't use MUI, Chakra, or other UI frameworks (we use shadcn/ui)
- ❌ Don't use serif fonts (Cinzel, Playfair Display, etc.)
- ❌ Don't add rounded corners unless specifically needed
- ❌ Don't use standard web colors (blue links, green buttons)
- ❌ Don't overcrowd layouts (embrace whitespace)
- ❌ Don't add features without documenting them
- ❌ Don't replace entire files without checking with user
- ❌ Don't lose existing implementations

---

## ✅ Best Practices

- ✅ Read before writing
- ✅ Make minimal changes
- ✅ Preserve existing working code
- ✅ Document everything in CHANGELOG.md
- ✅ Use TailwindCSS exclusively
- ✅ Use shadcn/ui for base components
- ✅ Test responsive behavior
- ✅ Check accessibility
- ✅ Optimize for performance
- ✅ Keep CSS effects pure (no JS when CSS works)
- ✅ Maintain dark mode as default/only theme
- ✅ Update documentation when things change
- ✅ Use sans-serif fonts only (Inter, Manroge)
- ✅ Follow conventional commits

---

## 💬 Communication Guidelines

### When Asking User:
- Be specific and concise
- Provide context for why decision is needed
- Offer recommendations with pros/cons
- Don't overwhelm with options
- Respect user's time

### When Reporting Progress:
- Summarize what was done
- Highlight any issues or decisions made
- Reference CHANGELOG.md for details
- Ask for feedback if uncertain
- Don't provide unnecessary technical details

---

## 📚 Reference Documents

**ALWAYS read these files before starting work:**
1. `/QWEN.md` - This file (AI rules and guidelines) ⭐ READ FIRST
2. `/CHANGELOG.md` - Project progress tracking
3. `/DESIGN.md` - Design system (shadcn/ui + TailwindCSS v3)
4. `/HOMEPAGE_SPEC.md` - ⭐ NEW - Detailed homepage specification from /stitch
5. `/ALL_PAGES_SPEC.md` - ⭐ NEW - All pages specification from /stitch
6. `/BEGINNER_GUIDE.md` - React/Vite guide for beginners
7. `/CLOUDFLARE_DEPLOY.md` - Deployment guide
8. `/SEO_PLAN.md` - ⭐ NEW - Complete SEO strategy and implementation guide
9. `/SEO_SCORECARD.md` - ⭐ NEW - Current SEO status and scoring tracker

**/stitch folder:**
- Contains 14 HTML files (complete design references)
- 2 Home page versions
- 2 About page versions
- 1 Portfolio page
- 1 Product Knowledge page
- 1 Contact page
- 7 Product detail pages
- ALL follow consistent design system

**Deployment Documentation:**
- `/CLOUDFLARE_DEPLOY.md` - Step-by-step deployment guide
- `/CLOUDFLARE_FIXES.md` - Common deployment errors and fixes

---

## 🔍 SEO Implementation Requirements

**CRITICAL: Every new page MUST include SEO implementation.**

### SEO Implementation Checklist for NEW Pages

**BEFORE deploying any new page, ensure ALL of the following are present:**

#### 1. SEO Component (MANDATORY)

Every page MUST include the `<SEO>` component with UNIQUE props:

```tsx
import { SEO } from '@/components/ui/SEO';

function NewPage() {
  return (
    <>
      <SEO
        title="Unique Page Title - Sembada Batu Beling"
        description="Unique meta description (150-160 characters)"
        type="website"
      />
      {/* Rest of page content */}
    </>
  );
}
```

**Title Format (50-60 characters):**
- Home: `Sembada Batu Beling - Solusi Konstruksi Premium`
- About: `Tentang Kami - Sembada Batu Beling`
- Products: `[Product Name] - [Benefit] - Sembada Batu Beling`
- Portfolio: `Portofolio Proyek - Sembada Batu Beling`
- Contact: `Hubungi Kami - Sembada Batu Beling`

**Description Format (150-160 characters):**
- Must be unique per page
- Include target keywords naturally
- End with call-to-action or contact info
- Example: `Toilet portable premium untuk proyek konstruksi, event, dan darurat. Material phenolic resin, mudah dipindah. Hubungi 0852 5746 0869.`

#### 2. Heading Structure (MANDATORY)

- **ONE `<h1>` per page** - Never multiple H1s
- Use unified page header pattern (see "UNIFIED PAGE HEADER PATTERN" section above)
- Proper hierarchy: H1 → H2 → H3 (no skipped levels)
- Include target keywords in H1 naturally

#### 3. Image Optimization (MANDATORY)

**Every `<img>` tag MUST have:**

```tsx
<img
  src="/images/product.jpg"
  alt="Descriptive text with product name and details"
  width="800"
  height="600"
  loading="lazy"  // Use "eager" for hero images only
  decoding="async"
/>
```

**Rules:**
- ✅ `alt` attribute: Descriptive, keyword-rich but natural (NOT empty)
- ✅ `width` and `height`: Exact dimensions to prevent CLS
- ✅ `loading="lazy"`: For all below-fold images
- ✅ `loading="eager"`: For hero/above-fold images ONLY
- ✅ `decoding="async"`: For better rendering performance

#### 4. Internal Linking (RECOMMENDED)

- Link back to Home page
- Link to related products (if product page)
- Include in navigation menu if important page
- Add breadcrumb navigation (if inner page)

#### 5. Structured Data (JSON-LD) - For Specific Page Types

**Product Pages - MUST include Product schema:**

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Product Name",
  "description": "Product description",
  "brand": {
    "@type": "Brand",
    "name": "Sembada Batu Beling"
  },
  "image": [
    "https://sembada.xyz/images/product-1.jpg"
  ],
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock"
  }
})}
</script>
```

**Contact Page - MUST include LocalBusiness schema:**

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sembada Batu Beling",
  "telephone": "+62-852-5746-0869",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Bogorami No. 05",
    "addressLocality": "Surabaya",
    "addressRegion": "Jawa Timur",
    "postalCode": "60123",
    "addressCountry": "ID"
  }
})}
</script>
```

### SEO Files That Must Exist (Site-Wide)

**BEFORE deployment, verify these files exist in `public/` folder:**

1. ✅ `public/robots.txt` - Controls crawler access
2. ✅ `public/sitemap.xml` - Lists all URLs for search engines
3. ✅ `public/_redirects` - SPA routing for Cloudflare Pages
4. ✅ `public/og-image.jpg` - Social media preview (1200x630px)

### SEO Verification Steps

**After creating a new page:**

1. Run `npm run build` - Ensure no errors
2. Check page source (browser) - Verify meta tags present
3. Check `<head>` section - Verify title, description, OG tags
4. View page source - Verify JSON-LD script present (if applicable)
5. Test with Lighthouse - Run SEO audit
6. Update `/SEO_SCORECARD.md` - Mark item as complete

### SEO Documentation References

**ALWAYS read these files before implementing SEO:**
1. `/SEO_PLAN.md` - Complete SEO strategy and implementation guide
2. `/SEO_SCORECARD.md` - Current SEO status and tracking
3. `/PAGES.md` - Page structure with SEO specifications

### Common SEO Mistakes to Avoid

- ❌ Multiple H1 tags on same page
- ❌ Duplicate meta descriptions across pages
- ❌ Missing alt text on images
- ❌ Images without width/height (causes CLS)
- ❌ Lazy-loading hero images
- ❌ Keyword stuffing in meta tags
- ❌ Empty or generic meta descriptions
- ❌ Missing canonical URLs
- ❌ Broken internal links
- ❌ No JSON-LD on product pages

### SEO Best Practices

- ✅ Unique, descriptive titles (50-60 chars)
- ✅ Unique meta descriptions (150-160 chars)
- ✅ Proper heading hierarchy (H1→H2→H3)
- ✅ Descriptive alt text on all images
- ✅ Explicit width/height on images
- ✅ Lazy loading for below-fold images
- ✅ JSON-LD structured data where applicable
- ✅ Internal linking to related pages
- ✅ Canonical URLs to prevent duplicates
- ✅ Mobile-friendly responsive design

---

*Last updated: 12 April 2026*  
*This file should be updated if project direction changes or new rules are established.*
