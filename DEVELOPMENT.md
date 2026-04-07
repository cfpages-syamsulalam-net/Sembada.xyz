# Development Workflow & Setup: Sembada Batu Beling

## Overview

This document provides a complete development guide for building the Sembada Batu Beling company profile website, from initial setup to deployment.

---

## 1. Technology Stack

### 1.1 Core Technologies

| Category | Technology | Version | Purpose |
|----------|-----------|---------|---------|
| **Framework** | React | 18+ | UI library |
| **Build Tool** | Vite | 5+ | Fast development & build |
| **Language** | TypeScript | 5+ | Type safety |
| **Routing** | React Router DOM | 6+ | Client-side routing |
| **Styling** | CSS + Custom Properties | - | Design system implementation |
| **Animation** | Framer Motion (optional) | 10+ | Scroll animations |
| **Forms** | React Hook Form | 7+ | Form handling |
| **Icons** | Lucide React / Custom SVG | - | Icon library |

### 1.2 Why This Stack?

- **Vite + React**: Lightning-fast HMR, excellent DX, mature ecosystem
- **TypeScript**: Catch errors early, better IDE support
- **Vanilla CSS with Custom Properties**: Full control, no abstraction overhead, matches design system perfectly
- **React Router**: Industry standard for SPA routing
- **Minimal dependencies**: Keeps bundle size small, easier maintenance

### 1.3 Alternative Stacks (Not Recommended for This Project)

❌ **Next.js**: Overkill for static company profile, adds complexity  
❌ **Tailwind CSS**: Conflicts with custom design system, harder to maintain unique aesthetic  
❌ **Styled Components/Emotion**: Runtime CSS-in-JS adds bundle size unnecessarily  
❌ **Redux/Zustand**: Not needed for this scale of application

---

## 2. Project Setup

### 2.1 Initial Setup

```bash
# Create Vite project
npm create vite@latest sembada-website -- --template react-ts

# Navigate to project
cd sembada-website

# Install dependencies
npm install

# Install additional packages
npm install react-router-dom
npm install -D typescript @types/react @types/react-dom

# Optional: Install animation library
npm install framer-motion

# Optional: Install form handling
npm install react-hook-form @hookform/resolvers zod
```

### 2.2 Project Structure

```
sembada-website/
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── projects/
│   │   ├── icons/
│   │   └── og-image.jpg
│   ├── fonts/
│   │   ├── cinzel-regular.woff2
│   │   └── inter-variable.woff2
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Label.tsx
│   │   │   └── BodyText.tsx
│   │   ├── molecules/
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   └── InputField.tsx
│   │   ├── organisms/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── Footer.tsx
│   │   ├── layouts/
│   │   │   ├── PageLayout.tsx
│   │   │   └── Container.tsx
│   │   └── ui/
│   │       ├── FadeIn.tsx
│   │       ├── Modal.tsx
│   │       └── Lightbox.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ProductIndexPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   ├── products.json
│   │   ├── projects.json
│   │   └── company-info.json
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useIntersectionObserver.ts
│   ├── utils/
│   │   ├── analytics.ts
│   │   └── formatters.ts
│   ├── styles/
│   │   ├── style.css          # Global design system styles
│   │   ├── reset.css          # CSS reset
│   │   └── animations.css     # Keyframe animations
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── DESIGN.md
├── COMPONENTS.md
├── PAGES.md
└── README.md
```

### 2.3 Environment Configuration

```bash
# Create .env file
VITE_SITE_URL=https://sembada.xyz
VITE_WHATSAPP_NUMBER=6285257460869
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 3. TypeScript Configuration

### 3.1 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 3.2 Type Definitions

```typescript
// src/types/index.ts

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  images: string[];
  variants: ProductVariant[];
  specifications: Record<string, string>;
  features: string[];
}

export interface ProductVariant {
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  year: number;
  productsUsed: string[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  parentCompany: string;
  address: string;
  phone: string;
  email: string;
  operatingHours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
  };
}
```

---

## 4. CSS Architecture

### 4.1 Design Philosophy: Hybrid Approach

**Primary Strategy: Custom CSS + Selective Library Usage**

We use a **hybrid CSS approach** that maximizes control while allowing strategic library additions:

✅ **What We Use:**
- Custom `style.css` (1,678 lines) with ALL design tokens
- 100% CSS animated effects (starry sky, glows, transitions)
- CSS custom properties exclusively
- CSS Modules for component-scoped styles

✅ **When to Add Libraries:**
- Animation utilities (if they provide complex choreography)
- Layout helpers (if they simplify responsive significantly)
- Specialized effects (if they outperform custom CSS)

❌ **What We Avoid:**
- TailwindCSS (can't maintain our unique aesthetic)
- Bootstrap (conflicts with 0px radius rule)
- CSS-in-JS runtime libraries (unnecessary bundle size)
- Framework UI libraries (too opinionated)

**See Also:** `/DESIGN.md` Section 13 for complete CSS library integration strategy

### 4.2 Design Tokens as CSS Custom Properties

**PRODUCTION-READY:** Complete `style.css` already created at project root with:
- All design tokens as CSS custom properties
- Animated starry sky effects (100% pure CSS)
- Complete component styles (buttons, cards, forms, navigation)
- Layout utilities (container, grid, flexbox)
- Accessibility features
- Print styles

```css
/* src/styles/style.css */
/* Complete design tokens - see /style.css for full implementation */

:root {
  /* Colors */
  --color-gold-primary: #D4AF37;
  --color-gold-bright: #FDE047;
  --color-gold-bronze: #B8860B;
  --color-bg-obsidian: #0B0C10;
  --color-surface-container: #111216;
  --color-surface-elevated: #1A1B21;
  --color-text-primary: #E2E8F0;
  --color-text-secondary: #94A3B8;
  --color-success: #10B981;
  --color-error: #EF4444;

  /* Typography */
  --font-heading: 'Cinzel', serif;
  --font-body: 'Inter', sans-serif;
  
  /* Spacing (8px grid) */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;
  --space-96: 96px;
  --space-128: 128px;

  /* Borders */
  --radius-none: 0px;
  --border-gold: 1px solid rgba(212, 175, 55, 0.4);

  /* Shadows */
  --shadow-glass: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
  --shadow-gold-glow: 0 0 8px rgba(212, 175, 55, 0.6);
  
  /* Transitions */
  --transition-fast: 200ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 600ms ease;

  /* Z-index */
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

### 4.3 Animated Starry Sky Effect (100% Pure CSS)

**No JavaScript Required!** The starry night background is fully implemented in CSS with multiple animation layers:

**Features:**
- ✨ Twinkling stars (opacity pulse animation)
- 🌠 Shooting stars (3 different trajectories, staggered timing)
- ⭐ Multi-layer system (dense stars + gold accents + falling + fading)
- 🎨 GPU-accelerated (transform + opacity only)
- ♿ Respects `prefers-reduced-motion`
- 📦 ~15KB CSS (vs 50-100KB+ JS libraries)

**Usage in React:**
```tsx
// Basic starry background
<div className="bg-starry">
  <HeroSection />
</div>

// Enhanced multi-layer stars
<div className="bg-starry-enhanced">
  <div className="falling-stars" />
  <div className="fading-stars" />
  <HeroSection />
</div>
```

**Animation Details:**
- Basic stars: 15 stars, 4s twinkle, 3 shooting stars (12-18s cycles)
- Enhanced: 20+ dense stars, 6 gold stars, falling stars, fading stars
- All use `transform` and `opacity` (GPU-accelerated)
- Zero JavaScript overhead

### 4.4 Global Style Structure

```
src/styles/
├── style.css          # Complete design system (from /style.css)
│   ├── CSS custom properties (design tokens)
│   ├── CSS reset
│   ├── Typography system
│   ├── Layout utilities
│   ├── Background effects (including animated stars)
│   ├── Glassmorphism components
│   ├── Button variants
│   ├── Card components
│   ├── Form elements
│   ├── Navigation
│   ├── Animations
│   └── Utility classes
```

**Note:** The global `style.css` at project root is complete and production-ready. It will be imported into the React app as the foundation.

### 4.5 Component Styling Approach

**Option A: CSS Modules** (Recommended)
```tsx
// Button.module.css
.button { /* styles */ }

// Button.tsx
import styles from './Button.module.css';
<Button className={styles.button} />
```

**Option B: BEM Methodology**
```css
.button { }
.button--primary { }
.button--secondary { }
.button__icon { }
```

**Recommendation:** Use **CSS Modules** for component-scoped styles + **global style.css** for design tokens.

---

## 5. Development Workflow

### 5.1 Development Phases

#### Phase 1: Foundation (Days 1-3)

**Tasks:**
1. ✅ Set up Vite + TypeScript project
2. ✅ Install dependencies
3. ✅ Configure tsconfig.json
4. ✅ Create project structure
5. ✅ Implement global style.css with design tokens
6. ✅ Add font files (Cinzel, Inter)
7. ✅ Set up routing (React Router)
8. ✅ Create basic layout shell (Navbar + Footer)

**Deliverables:**
- Working development server
- Basic page shell with navigation
- Design tokens in CSS
- TypeScript configured

#### Phase 2: Component Development (Days 4-10)

**Tasks:**
1. ✅ Build atom components (Button, Heading, Label, BodyText)
2. ✅ Build molecule components (Navbar, ProductCard, FeatureCard)
3. ✅ Build organism components (HeroSection, Section, Footer)
4. ✅ Implement glassmorphism effects
5. ✅ Create hexagonal geometry components
6. ✅ Build form components
7. ✅ Add scroll animations (FadeIn, Stagger)

**Testing:**
- Test each component in Storybook or isolated page
- Verify responsive behavior (mobile, tablet, desktop)
- Check accessibility (contrast, focus states)

**Deliverables:**
- Complete component library
- All components documented
- Responsive tested

#### Phase 3: Page Implementation (Days 11-20)

**Tasks:**
1. ✅ Build HomePage
2. ✅ Build AboutPage
3. ✅ Build ProductIndexPage
4. ✅ Build ProductDetailPage (template)
5. ✅ Populate 7 product pages with data
6. ✅ Build PortfolioPage
7. ✅ Build ContactPage
8. ✅ Build NotFoundPage
9. ✅ Implement breadcrumb navigation
10. ✅ Add SEO meta tags

**Data:**
- Create JSON data files (products, projects, company info)
- Load data into components
- Test with real content

**Deliverables:**
- All pages built and functional
- Real content populated
- Navigation working

#### Phase 4: Polish & Optimization (Days 21-25)

**Tasks:**
1. ✅ Add scroll-triggered animations
2. ✅ Implement WhatsApp floating button
3. ✅ Add form validation & submission
4. ✅ Optimize images (WebP, lazy loading)
5. ✅ Code splitting & route-based lazy loading
6. ✅ Performance optimization (Lighthouse audit)
7. ✅ Cross-browser testing
8. ✅ Mobile testing (iOS Safari, Android Chrome)
9. ✅ Accessibility audit
10. ✅ Fix bugs & edge cases

**Testing Checklist:**
- [ ] Lighthouse score: 90+ on all metrics
- [ ] Works on Chrome, Firefox, Safari, Edge
- [ ] Works on iOS Safari, Android Chrome
- [ ] All links and routes work
- [ ] Forms submit correctly
- [ ] WhatsApp integration works
- [ ] Mobile menu works
- [ ] All images load properly
- [ ] No console errors
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

#### Phase 5: Deployment Preparation (Days 26-28)

**Tasks:**
1. ✅ Build for production (`npm run build`)
2. ✅ Test production build locally
3. ✅ Configure deployment platform
4. ✅ Set up custom domain (sembada.xyz)
5. ✅ Configure SSL/HTTPS
6. ✅ Set up analytics (Google Analytics)
7. ✅ Submit sitemap to Google Search Console
8. ✅ Configure robots.txt
9. ✅ Create final documentation
10. ✅ Handoff to client

### 5.2 Daily Development Routine

```bash
# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linter (if configured)
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### 5.3 Git Workflow

```bash
# Create feature branch
git checkout -b feature/navbar-component

# Commit changes (follow conventional commits)
git commit -m "feat: add responsive navbar component"
git commit -m "fix: navbar scroll state not updating"
git commit -m "docs: update COMPONENTS.md with new specs"

# Push to remote
git push origin feature/navbar-component

# Create pull request (if using GitHub)
# Merge to main after review

# Update main branch
git checkout main
git pull origin main
```

**Commit Message Convention:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation updates
- `style:` CSS/style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test-related changes
- `chore:` Build/tooling changes

---

## 6. Data Management

### 6.1 JSON Data Structure

```json
// src/data/products.json
{
  "products": [
    {
      "id": "portable-toilet",
      "slug": "portable-toilet",
      "name": "Portable Toilet",
      "category": "Sanitasi",
      "description": "Unit sanitasi movable yang fleksibel untuk berbagai kebutuhan.",
      "longDescription": "Lorem ipsum...",
      "images": [
        "/images/products/portable-toilet-1.webp",
        "/images/products/portable-toilet-2.webp"
      ],
      "variants": [
        {
          "name": "Low Price",
          "description": "Varian ekonomis",
          "image": "/images/products/portable-toilet-low.webp",
          "features": ["Harga terjangkau", "Mudah dipindah", "Cocok untuk proyek"]
        }
      ],
      "specifications": {
        "Material": "Phenolic Resin",
        "Dimensions": "120cm x 120cm x 220cm",
        "Weight": "85 kg"
      },
      "features": [
        "Material premium tahan air",
        "Desain modern elegan",
        "Mudah dipindahkan",
        "Cocok untuk indoor/outdoor"
      ]
    }
  ]
}
```

### 6.2 Loading Data

```typescript
// src/hooks/useProducts.ts
import productsData from '@/data/products.json';

export function useProducts() {
  return productsData.products;
}

export function useProduct(slug: string) {
  const products = useProducts();
  return products.find(p => p.slug === slug);
}
```

---

## 7. Image Optimization

### 7.1 Image Format Strategy

| Image Type | Format | Compression |
|------------|--------|-------------|
| Photos (products, projects) | WebP | 80% quality |
| Icons, logos | SVG | Optimized |
| Backgrounds | WebP or CSS gradients | 70% quality |
| OG/Social sharing | WebP | 90% quality |

### 7.2 Image Conversion

```bash
# Install sharp for image processing
npm install -D sharp

# Create conversion script
// scripts/convert-images.ts
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './raw-images';
const outputDir = './public/images';

// Convert all images to WebP
fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputName = file.replace(/\.[^.]+$/, '.webp');
  const outputPath = path.join(outputDir, outputName);
  
  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);
});
```

### 7.3 Lazy Loading

```tsx
<img 
  src="/images/products/portable-toilet.webp"
  alt="Portable Toilet"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
/>
```

---

## 8. Animation Implementation

### 8.1 CSS Animations (Simple)

```css
/* src/styles/animations.css */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes goldGlow {
  0%, 100% {
    box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
  }
  50% {
    box-shadow: 0 0 16px rgba(212, 175, 55, 0.8);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
```

### 8.2 Framer Motion (Advanced)

```tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeIn({ children, delay = 0 }: FadeInProps) {
  const [ref, inView] = useInView({ triggerOnce: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
```

### 8.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Form Handling

### 9.1 Contact Form with React Hook Form

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string().min(10, 'Pesan minimal 10 karakter'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Submit to API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      // Show success message
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Nama Lengkap"
        {...register('name')}
        error={errors.name?.message}
      />
      {/* Other fields */}
      <Button type="submit">Kirim Pesan</Button>
    </form>
  );
}
```

### 9.2 Form Submission Backend

**Option A: Formspree (Easiest)**
```tsx
const response = await fetch('https://formspree.io/f/your-form-id', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

**Option B: EmailJS**
```tsx
import emailjs from '@emailjs/browser';

emailjs.send(
  'service_id',
  'template_id',
  { from_name: data.name, message: data.message },
  'public_key'
);
```

**Option C: Custom API Endpoint**
- Build simple Express.js endpoint
- Use Nodemailer to send emails
- Deploy on Vercel/Netlify serverless functions

---

## 10. SEO Implementation

### 10.1 SEO Component

```tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ title, description, image, url, type = 'website' }: SEOProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url || siteUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
```

### 10.2 Structured Data

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sembada Batu Beling",
  "url": "https://sembada.xyz",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-852-5746-0869",
    "contactType": "sales"
  }
})}
</script>
```

---

## 11. Testing

### 11.1 Manual Testing Checklist

**Desktop (Chrome, Firefox, Safari, Edge):**
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] All links functional
- [ ] Images load properly
- [ ] Forms submit successfully
- [ ] Animations smooth
- [ ] No console errors

**Mobile (iOS Safari, Android Chrome):**
- [ ] Responsive layout works
- [ ] Touch targets large enough (44x44px)
- [ ] Mobile menu works
- [ ] Forms usable
- [ ] Images optimized
- [ ] Performance acceptable

**Accessibility:**
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Alt text on images
- [ ] Form labels associated
- [ ] Color contrast sufficient
- [ ] Screen reader tested

### 11.2 Performance Testing

```bash
# Run Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:5173 --view

# Or use Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Run audit
```

---

## 12. Deployment

### 12.1 Deployment Options

**Option A: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Option B: Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

**Option C: GitHub Pages**
```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}

# Deploy
npm run deploy
```

### 12.2 Custom Domain Setup

**Vercel:**
1. Go to Project Settings → Domains
2. Add `sembada.xyz`
3. Update DNS records at domain registrar
4. Add CNAME/A records as instructed

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS at registrar
4. Wait for SSL certificate provisioning

### 12.3 DNS Configuration

```
Type: A
Name: @
Value: [Vercel/Netlify IP]

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 13. Post-Launch

### 13.1 Monitoring

- **Uptime:** UptimeRobot or Pingdom (free tier)
- **Analytics:** Google Analytics 4
- **Errors:** Sentry (optional)
- **Performance:** Lighthouse CI (monthly audits)

### 13.2 Maintenance

**Monthly:**
- [ ] Check all links work
- [ ] Test contact form
- [ ] Review analytics
- [ ] Check for broken images
- [ ] Run Lighthouse audit

**Quarterly:**
- [ ] Update dependencies
- [ ] Review and update content
- [ ] Check browser compatibility
- [ ] Test on new devices
- [ ] Backup site

### 13.3 Content Updates

**For non-technical users:**
- Option 1: Edit JSON files directly (simple)
- Option 2: Build simple admin interface
- Option 3: Migrate to headless CMS (Strapi, Contentful)

---

## 14. Troubleshooting

### 14.1 Common Issues

**Issue: Backdrop-filter not working on Safari**
```css
/* Add prefix */
backdrop-filter: blur(24px);
-webkit-backdrop-filter: blur(24px);

/* Provide fallback */
background: rgba(11, 12, 16, 0.85);
@supports (backdrop-filter: blur(24px)) {
  background: rgba(11, 12, 16, 0.7);
  backdrop-filter: blur(24px);
}
```

**Issue: Gold gradient not working on text**
```css
/* Check browser support */
/* Safari requires -webkit- prefix */
background: linear-gradient(135deg, #BF953F, #D4AF37, #FDE047);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

**Issue: Routes not working on direct access**
```
# For SPA routing, add _redirects file (Netlify)
/*    /index.html   200

# Or configure server to fallback to index.html
```

### 14.2 Debug Mode

```tsx
// Add to main.tsx
if (import.meta.env.DEV) {
  // Enable additional logging
  console.log('Development mode');
}
```

---

## 15. Resources

### 15.1 Documentation Links

- React: https://react.dev
- Vite: https://vitejs.dev
- React Router: https://reactrouter.com
- TypeScript: https://www.typescriptlang.org
- Framer Motion: https://www.framer.com/motion
- React Hook Form: https://react-hook-form.com

### 15.2 Design Inspiration

- Google Stitch designs in `/stitch` folder
- Awwwards: https://www.awwwards.com
- Godly Website: https://godly.website
- Dark Mode Design: https://www.darkmodedesign.com

### 15.3 Tools

- Image optimization: https://squoosh.app
- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Can I Use: https://caniuse.com
- WebPageTest: https://www.webpagetest.org

---

*This development guide should be referenced throughout the project lifecycle. Update as needed based on project requirements and learnings during development.*
