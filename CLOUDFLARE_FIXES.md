# Cloudflare Pages Deployment Issues & Fixes

## Problem: Build Failed with TypeScript Errors

### Error Message 1: `baseUrl` deprecated
```
tsconfig.app.json(19,5): error TS5101: Option 'baseUrl' is deprecated and will stop functioning in TypeScript 7.0.
```

**Cause:** TypeScript deprecated `baseUrl` compiler option. Cloudflare uses newer TypeScript version that throws errors on deprecated options.

**Fix:**
```json
// BEFORE (broken):
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}

// AFTER (fixed):
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Explanation:** Removed `"baseUrl": "."` and changed path mapping from `"src/*"` to `"./src/*"` (added relative path prefix).

---

### Error Message 2: `verbatimModuleSyntax` type imports
```
src/components/ui/Heading.tsx:1:10 - error TS1484: 'HTMLAttributes' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.
```

**Cause:** TypeScript's `verbatimModuleSyntax: true` requires type-only imports to use `import type` syntax.

**Fix:**
```tsx
// BEFORE (broken):
import { HTMLAttributes } from 'react'
import { ButtonHTMLAttributes } from 'react'

// AFTER (fixed):
import type { HTMLAttributes } from 'react'
import type { ButtonHTMLAttributes } from 'react'
```

**Files affected:**
- `src/components/layout/Section.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Heading.tsx`

---

### Error Message 3: `JSX.IntrinsicElements` namespace
```
src/components/ui/Heading.tsx:29:36 - error TS2503: Cannot find namespace 'JSX'.
```

**Cause:** `JSX.IntrinsicElements` is not available in newer React type definitions.

**Fix:**
```tsx
// BEFORE (broken):
const Tag = `h${level}` as keyof JSX.IntrinsicElements

// AFTER (fixed):
const Tag = `h${level}` as React.ElementType
```

---

### Error Message 4: Unused imports
```
src/pages/AboutPage.tsx:1:1 - error TS6133: 'Heading' is declared but its value is never read.
```

**Cause:** TypeScript `noUnusedLocals: true` flags imported but unused variables.

**Fix:** Removed unused imports from `AboutPage.tsx`:
```tsx
// REMOVED:
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/layout/Section'
```

---

## Deployment Checklist

### Before Pushing to GitHub:
1. ✅ Run `npm run build` locally and verify it succeeds
2. ✅ Check for TypeScript errors: `npx tsc --noEmit`
3. ✅ Ensure all imports use `import type` for type-only imports
4. ✅ No unused imports or variables
5. ✅ `tsconfig.app.json` uses modern path syntax (`"./src/*"` not `"src/*"`)
6. ✅ No `baseUrl` in tsconfig

### Cloudflare Pages Settings:
| Setting | Value |
|---------|-------|
| **Framework preset** | React (Vite) |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `sembada-app` |

### Environment Variables:
| Variable | Value |
|----------|-------|
| `VITE_SITE_URL` | `https://sembada.xyz` |
| `VITE_WHATSAPP_NUMBER` | `6285257460869` |

---

## Useful Commands

```bash
# Test build locally
npm run build

# Check TypeScript errors only
npx tsc --noEmit

# Watch for errors in real-time
npx tsc --watch

# Deploy to Cloudflare (if using Wrangler CLI)
npx wrangler pages deploy dist
```

---

## Common Issues & Solutions

### Issue: Icons not showing
**Cause:** FontAwesome CDN blocked by ad blockers.
**Solution:** Use inline SVG components instead (stored in `/src/data/productIcons.tsx`).

### Issue: Fonts not loading
**Cause:** Google Fonts blocked in some regions.
**Solution:** Preconnect to Google Fonts in `index.html` and use `font-display: swap`.

### Issue: Build succeeds locally but fails on Cloudflare
**Cause:** Cloudflare uses stricter TypeScript settings or different Node version.
**Solution:** Always run `npm run build` locally before pushing. Match Cloudflare's Node version locally if possible.

### Issue: Blank page after deployment
**Cause:** Incorrect root directory setting or build output path.
**Solution:** Verify Root directory is `sembada-app` and output directory is `dist`.

---

*Last updated: 7 April 2026*
*Reference this file when encountering Cloudflare Pages deployment errors.*
