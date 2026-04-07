# Component Architecture: Sembada Batu Beling

## Overview

This document outlines the React component hierarchy for the Sembada Batu Beling company profile website. Components are organized from foundational atoms to complex organisms, following atomic design principles adapted for our architectural design system.

---

## Component Hierarchy

```
📁 src/
  📁 components/
    📁 atoms/           # Basic building blocks
    📁 molecules/       # Simple component combinations
    📁 organisms/       # Complex UI sections
    📁 layouts/         # Page-level layouts
    📁 ui/              # Reusable UI primitives
    📁 icons/           # SVG icon components
  📁 pages/             # Page components (routes)
```

---

## 1. Atom Components

*The smallest building blocks that can't be broken down further.*

### 1.1 Typography

```tsx
<Heading level={1 | 2 | 3 | 4} variant="default | gold-gradient">
  Children
</Heading>
```
- Renders H1-H4 with appropriate styling
- Gold gradient variant for headlines
- Auto-applies design system type scale

```tsx
<BodyText size="sm | md | lg" muted={boolean}>
  Children
</BodyText>
```
- Body text with semantic sizing
- Muted variant for secondary content

```tsx
<Label uppercase={boolean} tracking="normal | wide | wider">
  Children
</Label>
```
- Micro-labels for navigation, tags, categories
- Extreme letter-spacing by default

### 1.2 Buttons

```tsx
<Button 
  variant="primary | secondary | ghost"
  size="sm | md | lg"
  fullWidth={boolean}
  disabled={boolean}
  onClick={function}
>
  Children
</Button>
```
- **Primary**: Gold border, transparent bg → gold fill on hover
- **Secondary**: Subtle gold border, minimal styling
- **Ghost**: No border, text-only with hover underline

### 1.3 Icons

```tsx
<HexIcon size={number} glow={boolean}>
  {/* SVG content */}
</HexIcon>
```
- Hexagonal container for icons
- Gold glow effect when enabled
- Standard sizes: 24, 32, 48, 64

```tsx
<Icon name="icon-name" size={number} />
```
- Icon library component
- Available icons: arrow-right, menu, close, phone, email, location,
  whatsapp, instagram, facebook, chevron-down, star, check, external-link

### 1.4 Badges & Tags

```tsx
<Badge variant="gold | outline">
  Children
</Badge>
```
- Small labels for product categories
- Gold background with dark text (gold variant)
- Gold border with transparent bg (outline variant)

---

## 2. Molecule Components

*Combinations of atoms that form functional UI elements.*

### 2.1 Navigation

```tsx
<Navbar 
  transparent={boolean} 
  scrolled={boolean}
  onMenuToggle={function}
/>
```
- Fixed top navigation bar
- Glass-morphic background
- Logo + navigation links
- Mobile: hamburger menu
- Shrinks on scroll

```tsx
<NavItem href="/path" active={boolean} />
```
- Individual navigation link
- Active state with gold underline
- Hover animation

```tsx
<MobileMenu isOpen={boolean} onClose={function} />
```
- Full-screen overlay menu
- Staggered animation for items
- Hexagonal close button

### 2.2 Cards

```tsx
<ProductCard
  image={string}
  title={string}
  description={string}
  href="/product-path"
  variant="rectangular | hexagonal"
/>
```
- Product showcase card
- Hexagonal or rectangular image container
- Hover lift effect
- "Learn More" CTA

```tsx
<FeatureCard
  icon={ReactNode}
  title={string}
  description={string}
/>
```
- Feature/benefit card
- Icon in hexagonal container
- Used in "Why Choose Us" sections

```tsx
<ProjectCard
  image={string}
  title={string}
  category={string}
  location={string}
/>
```
- Portfolio project card
- Image with gold gradient overlay
- Category badge
- Location metadata

### 2.3 Forms

```tsx
<InputField
  label={string}
  type="text | email | tel | textarea"
  value={string}
  onChange={function}
  error={string}
  required={boolean}
  placeholder={string}
/>
```
- Bottom-border only input
- 12px uppercase label
- Gold focus state
- Error message display

```tsx
<ContactForm onSubmit={function} />
```
- Pre-built contact form
- Fields: Name, Email, Phone, Message
- Submit button with loading state
- Form validation

### 2.4 Media

```tsx
<HexImage
  src={string}
  alt={string}
  aspectRatio="square | portrait | landscape"
/>
```
- Image with hexagonal clip-path
- Hover zoom effect
- Gold gradient overlay

```tsx
<ImageGallery images={Array<ImageObject} /> />
```
- Grid of images
- Lightbox functionality
- Masonry-style layout

---

## 3. Organism Components

*Complex sections composed of molecules and atoms.*

### 3.1 Hero Sections

```tsx
<HeroSection
  title={string}
  subtitle={string}
  backgroundImage={string}
  primaryCTA={{ label: string, href: string }}
  secondaryCTA={{ label: string, href: string }}
  showScrollIndicator={boolean}
/>
```
- Full-viewport hero section
- Starry night background
- Gold gradient headline
- Animated scroll indicator
- Dual CTA buttons

```tsx
<PageHero title={string} breadcrumb={Array<BreadcrumbItem} /> />
```
- Smaller hero for inner pages
- Breadcrumb navigation
- Reduced height (50vh)

### 3.2 Content Sections

```tsx
<Section
  id={string}
  variant="default | alt-bg | glass"
  padding="sm | md | lg | xl"
>
  {children}
</Section>
```
- Page section wrapper
- Alternating background variants
- Consistent padding scale

```tsx
<SectionHeader
  eyebrow={string}
  title={string}
  subtitle={string}
  alignment="left | center"
/>
```
- Section heading group
- Eyebrow label (small, uppercase)
- Main title (H2)
- Optional subtitle

### 3.3 Product Grids

```tsx
<ProductGrid
  products={Array<ProductObject>}
  columns={2 | 3 | 4}
  staggered={boolean}
/>
```
- Responsive grid of product cards
- Asymmetric vertical offsets (staggered)
- Hexagonal or rectangular variants

```tsx
<ProductShowcase
  product={ProductObject}
  layout="image-left | image-right"
/>
```
- Full-width product feature
- Large image + detailed description
- Alternating layout

### 3.4 Testimonials & Trust

```tsx
<TestimonialCard
  quote={string}
  author={string}
  company={string}
  logo={string}
/>
```
- Client testimonial
- Quote in italic
- Author attribution
- Company logo

```tsx
<ClientLogos logos={Array<LogoObject} /> />
```
- Grid of client/partner logos
- Grayscale → color on hover
- Responsive carousel on mobile

### 3.5 Footer

```tsx
<Footer />
```
- Multi-column footer
- Company info, quick links, product categories
- Contact details
- Social media links
- Copyright & legal

---

## 4. Layout Components

*Page-level structural components.*

### 4.1 Page Layouts

```tsx
<PageLayout>
  <Navbar />
  <main>{children}</main>
  <Footer />
</PageLayout>
```
- Standard page wrapper
- Consistent header/footer
- Main content area

```tsx
<Container size="sm | md | lg | xl | full">
  {children}
</Container>
```
- Max-width container
- Centers content
- Responsive padding

```tsx
<Grid columns={number} gap={number}>
  {children}
</Grid>
```
- CSS Grid layout
- Responsive breakpoints
- Consistent gutters

```tsx
<Flex direction="row | column" gap={number} align={string} justify={string}>
  {children}
</Flex>
```
- Flexbox utility
- Alignment helpers

### 4.2 SEO & Meta

```tsx
<SEO
  title={string}
  description={string}
  image={string}
  url={string}
  type="website | article"
/>
```
- Meta tags
- Open Graph tags
- Twitter cards
- Structured data (JSON-LD)

---

## 5. Page Components

*Route-level components.*

### 5.1 Home Page

```tsx
<HomePage />
```
**Sections:**
1. HeroSection (starry night, tagline, CTA)
2. AboutPreview (brief intro)
3. ProductGrid (highlighted products)
4. WhyChooseUs (feature cards)
5. Testimonials (client quotes)
6. ClientLogos (partners)
7. CTASection (final call-to-action)

### 5.2 About Page (Tentang Kami)

```tsx
<AboutPage />
```
**Sections:**
1. PageHero (title, breadcrumb)
2. CompanyHistory (timeline/story)
3. VisionMission (dual cards)
4. LegalCredentials (certifications, experience)
5. TeamSection (optional)
6. CTASection

### 5.3 Product Knowledge Pages

```tsx
<ProductIndexPage />
```
- Overview of all product categories
- Hexagonal grid of categories
- Brief descriptions

```tsx
<ProductDetailPage product={ProductObject} />
```
**Sections:**
1. PageHero (product name)
2. ProductOverview (description, benefits)
3. ProductVariants (tabs/accordion)
4. Specifications (table)
5. Applications (gallery)
6. RelatedProducts

**Product Category Pages:**
- Portable Toilet
- Cubicle Toilet
- Office Cubicle
- Movable Door
- CNC Ornament
- Cellustone Ornament
- Laboratorium Cabinet

### 5.4 Portfolio Page

```tsx
<PortfolioPage />
```
**Sections:**
1. PageHero
2. FilterBar (by category)
3. ProjectGrid (masonry)
4. ProjectModal (detailed view)

### 5.5 Contact Page

```tsx
<ContactPage />
```
**Sections:**
1. PageHero
2. ContactInfo (address, phone, email, map)
3. ContactForm
4. WhatsApp CTA (floating button)
5. OfficeHours

---

## 6. Utility Components

*Helper components for common patterns.*

### 6.1 Animations

```tsx
<FadeIn direction="up | down | left | right" delay={number}>
  {children}
</FadeIn>
```
- Scroll-triggered fade animation
- IntersectionObserver-based
- Respects prefers-reduced-motion

```tsx
<Stagger children={[...]} delay={number} />
```
- Staggered entrance for lists
- Cascading animation delays

### 6.2 Loading States

```tsx
<Skeleton variant="text | card | image" />
```
- Loading placeholder
- Pulsing animation
- Matches content shape

```tsx
<LoadingSpinner size="sm | md | lg" />
```
- Gold spinning loader
- Used during async operations

### 6.3 Modals & Overlays

```tsx
<Modal isOpen={boolean} onClose={function}>
  {children}
</Modal>
```
- Centered modal dialog
- Backdrop click to close
- Focus trap

```tsx
<Lightbox images={Array<ImageObject} /> currentIndex={number} />
```
- Image gallery lightbox
- Navigation arrows
- Keyboard controls

### 6.4 WhatsApp Integration

```tsx
<WhatsAppButton phoneNumber={string} message={string} />
```
- Floating action button
- Opens WhatsApp with pre-filled message
- Bottom-right corner (desktop), bottom-center (mobile)

---

## 7. Component Props Patterns

### 7.1 Common Prop Types

```typescript
// Standard button link
interface LinkProps {
  href: string;
  label: string;
  external?: boolean;
}

// Product data structure
interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  images: string[];
  variants?: string[];
  features: string[];
  specifications: Record<string, string>;
}

// Project/portfolio item
interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  year: number;
}
```

### 7.2 Composition Patterns

**Compound Components:**
```tsx
<Card>
  <Card.Image src="..." />
  <Card.Header>
    <Card.Title>...</Card.Title>
    <Card.Badge>New</Card.Badge>
  </Card.Header>
  <Card.Body>...</Card.Body>
  <Card.Footer>
    <Button>Learn More</Button>
  </Card.Footer>
</Card>
```

**Render Props:**
```tsx
<FadeIn>
  {(isVisible) => (
    <div style={{ opacity: isVisible ? 1 : 0 }}>
      Content
    </div>
  )}
</FadeIn>
```

---

## 8. State Management

### 8.1 Local State
- Form inputs: `useState`
- UI toggles (mobile menu, modals): `useState`
- Scroll position: `useState` + event listener

### 8.2 Global State (if needed)
- Theme context (dark mode default, no toggle)
- Navigation state (mobile menu open/close)
- Form data (multi-step forms)

**Recommendation:** Start with Context API, add Zustand/Redux only if complexity demands.

### 8.3 Data Fetching
- Static content: hardcoded or MDX files
- Product data: JSON files or headless CMS
- Forms: API endpoints (POST requests)

---

## 9. Component Development Order

**Phase 1: Foundation (Week 1)**
1. Typography components (Heading, BodyText, Label)
2. Button component
3. Container & Grid layouts
4. Icon system

**Phase 2: Core UI (Week 2)**
1. Navbar (desktop + mobile)
2. Card variants
3. Form inputs
4. Footer

**Phase 3: Sections (Week 3)**
1. HeroSection
2. Section wrappers
3. ProductGrid
4. FeatureCard grid

**Phase 4: Pages (Week 4-5)**
1. HomePage
2. AboutPage
3. Product pages
4. Portfolio page
5. Contact page

**Phase 5: Polish (Week 6)**
1. Animations (FadeIn, Stagger)
2. Loading states
3. Modals & lightbox
4. WhatsApp integration
5. Responsive testing

---

## 10. File Naming Conventions

```
components/
  atoms/
    Button/
      Button.tsx          # Component
      Button.module.css   # Styles (if using CSS Modules)
      Button.test.tsx     # Tests
      index.ts            # Barrel export
    Heading/
      Heading.tsx
      Heading.module.css
      index.ts
```

**Or (if using single files):**
```
components/
  atoms/
    Button.tsx
    Heading.tsx
    Label.tsx
```

---

## 11. Accessibility Checklist for Components

- ✅ All interactive elements have focus states
- ✅ Buttons have aria-labels when icon-only
- ✅ Images have alt text
- ✅ Forms have associated labels
- ✅ Navigation has aria-current for active page
- ✅ Modals trap focus and have aria-modal
- ✅ Color contrast meets WCAG AA
- ✅ Reduced motion media query respected

---

*This component architecture will evolve during development. Update this document as new patterns emerge or requirements change.*
