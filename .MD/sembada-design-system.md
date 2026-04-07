# Design System: Sembada Batu Beling (React Implementation)

> **Note:** This is the legacy design system document. For the complete, implementation-ready design system with React component specifications, see `/DESIGN.md` in the project root.

---

## 1. Tema Utama (Theme Identity)
- **Konsep:** Dark Mode, Cosmic/Starry Night, Glassmorphism, Elegant.
- **Vibe:** Mewah, Profesional, Presisi, Futuristik namun tetap membumi (sesuai *tagline* "Integritas untuk Sukses dan Barokah").
- **Design North Star:** "The Obsidian Monolith" - Architectural precision and luxury.

## 2. Palet Warna (Color Palette)
- **Background Utama:** `#0B0C10` (Deep Space Black / Deep Obsidian)
- **Background Sekunder:** `#111216` (Carbon Surface)
- **Background Tersier:** `#1A1B21` (Raised Surface)
- **Glassmorphism:** `rgba(11, 12, 16, 0.7)` dengan `backdrop-filter: blur(24px)`
- **Teks Utama:** `#E2E8F0` (Moonlight Silver)
- **Teks Sekunder:** `#94A3B8` (Muted Graphite)
- **Warna Aksen (Emas):**
  - *Primary Gold:* `#D4AF37` (Mewah dan elegan)
  - *Bright Gold CTA:* `#FDE047` (Untuk tombol dan highlight)
  - *Metallic Bronze:* `#B8860B` (Untuk gradasi)
  - *Gold Gradient:* 5-stop metallic gradient untuk headline premium

## 3. Tipografi (Typography)
- **Heading:** Cinzel / Playfair Display (arkitektural, monumental, elegan)
- **Body Text:** Inter / Montserrat (clean, modern, mudah dibaca)
- **Type Scale:**
  - Hero Display: 80px/5rem, Black weight, tight leading
  - H1: 48px/3rem, uppercase
  - H2: 36px/2.25rem
  - Body: 16px/1rem, Regular
  - Labels: 12px, Black weight, ultra-wide letter spacing

## 4. Gaya UI / Komponen (UI Components)
- **Border Radius:** 0px untuk semua elemen struktural (sharp, architectural)
- **Glassmorphism:**
  - `background: rgba(17, 18, 22, 0.6);`
  - `backdrop-filter: blur(20px);`
  - `border: 1px solid rgba(212, 175, 55, 0.2);`
- **Hexagonal Geometry:** Clip-path untuk frame foto produk dan icon container
  - `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);`
- **Buttons:**
  - *Primary:* Border emas 2px, background transparan → hover: background emas, teks hitam
  - *Secondary:* Border emas tipis, hover: gradient fill animation
  - *Shadow:* `box-shadow: 0 0 16px rgba(212, 175, 55, 0.5);` (gold glow)
- **Inputs:** Minimalist bottom-border only, 12px uppercase labels

## 5. Dokumentasi Lengkap

Untuk dokumentasi lengkap termasuk:
- Component architecture (React)
- Page structure & routing
- Development workflow
- Global CSS implementation

Lihat file berikut di root project:
- `/DESIGN.md` - Complete design system with React specs
- `/COMPONENTS.md` - Component hierarchy and API documentation
- `/PAGES.md` - Page structure, routing, and content specs
- `/DEVELOPMENT.md` - Development workflow and setup guide
- `/style.css` - Global CSS with all design tokens implemented
