# Midnight Obsidian Design System

### 1. Overview & Creative North Star
**Creative North Star: "The Obsidian Monolith"**
Midnight Obsidian is a high-end architectural design system that prioritizes structural integrity, luxury, and mathematical precision. It breaks away from the "friendly SaaS" aesthetic by embracing sharp angles (0px radius), deep obsidian voids, and metallic accents. The experience is designed to feel like a private gallery or a premium architectural blueprint—stark, intentional, and authoritative.

The system uses a rigid underlying grid but breaks it through **asymmetric vertical offsets** (e.g., product tiles that shift vertically) and **geometric masking** (hexagons) to create a sense of bespoke engineering rather than templated layout.

### 2. Colors
The palette is built on a foundation of deep carbon blacks and rich, metallic golds.

*   **Primary (Gold #f2ca50):** Used for critical calls to action and branding.
*   **Neutral (Obsidian #0B0C10):** The primary void. 
*   **The "No-Line" Rule:** Sectioning must be achieved through background shifts (e.g., transitioning from `surface` to `surface-container-low`) rather than borders. Visible borders are reserved exclusively for interactive elements like buttons and "Glass" cards, where they must be semi-transparent (40% opacity).
*   **Surface Hierarchy:** 
    *   **Level 0:** Base Background (#0B0C10)
    *   **Level 1:** Containers (#111216)
    *   **Level 2:** Floating elements with Glassmorphism.
*   **The "Glass & Gradient" Rule:** Use `rgba(11, 12, 16, 0.7)` with a 24px backdrop blur for floating navigation and hero cards. Apply a 5-stop metallic gold gradient (`#BF953F` to `#AA771C`) for primary headlines to simulate physical gold leaf.

### 3. Typography
Midnight Obsidian utilizes a single, highly-versatile typeface (Inter) but manipulates weight, tracking, and leading to create a diverse hierarchy.

*   **Typography Scale:**
    *   **Display / Hero:** 3.75rem (60px) to 5rem (80px), Black weight, leading-tight (0.85), -5% tracking.
    *   **Section Headlines:** 3rem (48px), Black weight, uppercase.
    *   **Subtitles / Pull-quotes:** 1.5rem to 1.875rem, Extra Light or Black Italic.
    *   **Nav & Labels:** 10px to 12px, Black weight, extreme tracking (0.25em to 0.5em) for an editorial feel.
*   **Rhythm:** Large-scale headings contrast sharply against micro-text labels, creating a "Luxury Magazine" layout style.
*   **Fonts:** Use sans-serif fonts with extra-bold and tight letters for headings.

### 4. Elevation & Depth
Depth is not communicated through shadows on every element, but through **Tonal Layering** and specific **Light Emission**.

*   **The Layering Principle:** Stack containers using `surface-container-low` for large sections and `glass-premium` for interactive overlays.
*   **Ambient Shadows:** For floating glass cards, use an extra-diffused shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.8)`. 
*   **Light Emission (The Glow):** For gold elements, use a subtle gold glow `0 0 4px #f2ca50` instead of a dark shadow to simulate luminosity in a dark space.
*   **Hexagonal Geometry:** Use a 25/75/100/50 clip-path for secondary imagery and icons to reinforce the "engineered" brand identity.

### 5. Components
*   **Buttons:** Rectangular (0px radius). Ghost style with `border: 1px solid primary/40`. Hover state triggers a vertical fill animation.
*   **Glass Cards:** Semi-transparent background with backdrop-filter. No rounded corners.
*   **Inputs:** Minimalist bottom-border only, with 12px micro-labels in all caps.
*   **Hex-Icons:** Icons must be housed within a hexagonal glass container.
*   **Navigation:** Fixed, glass-morphic top bar that shrinks on scroll.

### 6. Do's and Don'ts
*   **Do:** Use 0px border radius for all structural elements.
*   **Do:** Use extreme letter-spacing for labels and navigation.
*   **Do:** Use "Starry Night" background effects for large empty voids.
*   **Don't:** Use standard blue or vibrant "web" colors. 
*   **Don't:** Use 1px solid white or grey borders; if a line is needed, use `primary/40` or a gradient.
*   **Don't:** Mix font families. Stay within the varied weights of Inter to maintain architectural purity.