# INFRASTRUCTURE.md — Sembada.xyz

Only infrastructure confirmed by direct evidence during the 2026-09-28 operation. No inference beyond what was read or executed.

## 1. Source control (confirmed)

- Local repo: `C:\Users\THINKPAD\Sembada.xyz`, branch `main`, clean tree.
- Remote: `https://github.com/cfpages-syamsulalam-net/Sembada.xyz.git` (fetch + push identical).
- Verified: `git status --porcelain=v1 --untracked-files=all` clean; `git rev-parse HEAD` = `git ls-remote origin main` = `8dde89c` after push (2026-09-28 image operation); later same-day commits through the brosur operation re-verified the same clean + HEAD=origin invariant.
- No `.github/` workflows exist in repo — **no CI/CD in git**; deployment is external (Cloudflare dashboard git integration).

## 2. Hosting & deploy (confirmed from repo docs + build output)

- **Cloudflare Pages**, per `CLOUDFLARE_DEPLOY.md` / `CLOUDFLARE_FIXES.md`: project connected to the GitHub repo above, production branch `main`, root directory `sembada-app`, build `npm run build`, output `dist`, custom domain `sembada.xyz` with auto HTTPS + global CDN. Auto-deploy on every `main` push (including `8dde89c`).
- SPA fallback: `sembada-app/public/_redirects` contains `/* /index.html 200` (copied to `dist/` on build).
- I did NOT open the Cloudflare dashboard; live deployment status of `8dde89c` is unverified from here — check dashboard Deployments if needed.

## 3. Build toolchain (confirmed by execution)

- `node v24.18.0`, `npm 12.0.2` on this machine; `pnpm` shim present but **repo uses npm**: only lockfile is `sembada-app/package-lock.json` (no pnpm-lock/yaml). AGENTS.md + CLOUDFLARE_DEPLOY.md use `npm` commands throughout.
- ⚠️ Machine npm config has `omit=dev`: a plain `npm install <pkg>` PRUNES devDependencies (vite/tsc/tailwind disappear; `npm run build` fails with `'tsc' is not recognized`). Always install with `npm install <pkg> --include=dev`; `npm install --include=dev` restores the dev tree.
- `npm run build` = `tsc -b && vite build`; ran green 2026-09-28 (~29s, 1755 modules, per-route code-split chunks). `npm run lint` (eslint), `preview` (vite preview), `glob` (scripts/glob.mjs helper) also defined.
- Stack: React 19.2, Vite 8, TypeScript ~6.0 (strict + noUnusedLocals/Parameters + erasableSyntaxOnly), React Router 7, TailwindCSS 3.4 + PostCSS/autoprefixer, lucide-react, pdf-lib 1.17.1 (client-side PDF only — dynamically imported so it never loads until the first brochure download), Google Fonts (Inter + Dancing Script via index.html CDN link).
- `dist/` and `node_modules/` are gitignored; nothing built is committed.

## 4. Runtime & DNS (from repo files; live state NOT rechecked)

- Domain `sembada.xyz`; `public/robots.txt` allows all + points to `/sitemap.xml`; `public/sitemap.xml` lists 13 URLs (added `/brosur`).
- Env: `sembada-app/.env` exists locally (VITE_SITE_URL / WHATSAPP / GA per docs) but is gitignored — contents never read (permission rule). Cloudflare env vars per deploy doc.
- Contact surface: WhatsApp pills `wa.me/6282325886660` + `wa.me/6285257460869`; footer `tel:` + `info@sembadabatubeling.com`. Form posts to Pages Function `/api/contact` → Resend API → `admin@alampintar.org`; secret `RESEND_API_KEY` (+ optional `CONTACT_TO`/`CONTACT_FROM`) lives in Pages dashboard Variables and Secrets, never in repo. Learning: `KNOWLEDGE-CLOUDFLARE-PAGES-CONTACT-FORM.md` in the OneDrive MD hub.
- No database, no server functions, no analytics keys in repo, no secrets committed (never print/store any).

## 5. Asset pipeline (confirmed by operation)

- Dual image trees kept in sync manually: `images/<kategori>/` (library, committed) ↔ `sembada-app/public/images/` (served, committed). 23 `sembada-*` files added to both 2026-09-28.
- Gap: `public/og-image.jpg` referenced by SEO fallback does not exist (OG-IMAGE-NEEDED.md still pending).
