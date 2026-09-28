# Sembada.xyz

Company-profile + product-catalog SPA for **Sembada BatuBeling** — "Integritas untuk Sukses dan Barokah". React 19 + Vite 8 + TypeScript, TailwindCSS v3.4, React Router 7. Live at https://sembada.xyz (Cloudflare Pages).

## App

```
sembada-app/          # the Vite app (npm; NOT pnpm — only package-lock.json exists)
  npm run dev         # local dev
  npm run build       # tsc -b && vite build → dist/
  src/                # pages, components, data (see CODEBASE.md)
  public/images/      # served images (mirror of /images/)
images/               # source-of-truth image library (7 categories)
```

## Docs (read before changing code)

- `CODEBASE.md` — full code/logic/intent inventory
- `PRD.md` — requirements, scope, known gaps
- `INFRASTRUCTURE.md` — confirmed hosting/build/git evidence
- `QWEN.md` — assistant rules (read first) · `PAGES.md` — routes
- `DESIGN.md` / `COMPONENTS.md` / `DEVELOPMENT.md` — design & workflow
- `SEO_PLAN.md` / `SEO_SCORECARD.md` — SEO · `CLOUDFLARE_DEPLOY.md` — hosting
- `CHANGELOG.md` — history (log every significant change)