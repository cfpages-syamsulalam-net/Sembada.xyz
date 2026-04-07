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

## 🎨 Design System Rules

### CSS Architecture
- **Global style.css** is the source of truth for all design tokens
- Use CSS custom properties (variables) exclusively, no hardcoded values
- 0px border radius for all structural elements (sharp, architectural)
- Gold color `#D4AF37` is primary accent, used sparingly
- Dark mode ONLY (`#0B0C10` base background)
- Hexagonal geometry as signature brand element
- Glassmorphism for floating/overlay elements

### Component Development
- Follow atomic design: Atoms → Molecules → Organisms → Layouts
- Use design tokens from style.css exclusively
- Test responsive behavior (mobile-first)
- Ensure accessibility (WCAG AA minimum)
- No rounded corners on cards, buttons, or containers

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

- ❌ Don't use TailwindCSS (conflicts with custom design system)
- ❌ Don't use Bootstrap (too generic, can't achieve our aesthetic)
- ❌ Don't use CSS-in-JS runtime libraries (adds bundle size)
- ❌ Don't add rounded corners anywhere
- ❌ Don't use standard web colors (blue links, green buttons)
- ❌ Don't overcrowd layouts (embrace whitespace)
- ❌ Don't use heavy animation libraries unless necessary
- ❌ Don't replace entire files without checking with user
- ❌ Don't lose existing implementations
- ❌ Don't add features without documenting them

---

## ✅ Best Practices

- ✅ Read before writing
- ✅ Make minimal changes
- ✅ Preserve existing working code
- ✅ Document everything in CHANGELOG.md
- ✅ Use design tokens exclusively
- ✅ Test responsive behavior
- ✅ Check accessibility
- ✅ Optimize for performance
- ✅ Keep CSS effects pure (no JS when CSS works)
- ✅ Maintain dark mode as default/only theme
- ✅ Update documentation when things change

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

Always consult these files for context:
- `/DESIGN.md` - Design system specifications
- `/COMPONENTS.md` - Component architecture
- `/PAGES.md` - Page structure & routing
- `/DEVELOPMENT.md` - Development workflow
- `/CHANGELOG.md` - Project progress
- `/style.css` - Global CSS implementation

---

*Last updated: 7 April 2026*  
*This file should be updated if project direction changes or new rules are established.*
