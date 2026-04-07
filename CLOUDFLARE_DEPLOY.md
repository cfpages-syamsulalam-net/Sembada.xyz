# Cloudflare Pages Deployment Guide: Sembada.xyz

## 📋 Overview

This guide will walk you through deploying your React website to Cloudflare Pages with a custom domain (`sembada.xyz`).

**What you'll get:**
- ✅ Free hosting with generous limits
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast everywhere)
- ✅ Custom domain: `sembada.xyz`
- ✅ Automatic deployments on every push to GitHub

---

## 🎯 Part 1: Prerequisites

Before starting, make sure you have:

1. ✅ **GitHub account** - You already have this
2. ✅ **Repository pushed to GitHub** - `https://github.com/cfpages-syamsulalam-net/Sembada.xyz`
3. ✅ **Cloudflare account** - Sign up at https://www.cloudflare.com/ (free tier is enough)
4. ✅ **Domain `sembada.xyz`** - You own this domain
5. ✅ **Node.js installed** - For building locally if needed

---

## 🚀 Part 2: Step-by-Step Deployment

### Step 1: Prepare Your React Project

Make sure your project builds correctly:

```bash
# In your project folder (sembada-app)
npm run build
```

This should create a `dist/` folder with optimized files.

**If it works:** Great! Continue to Step 2.  
**If it fails:** Fix the errors first (check error messages).

---

### Step 2: Push Code to GitHub

Your code should be in the repository. Make sure the React app is in a subfolder or root.

**Recommended structure:**
```
Sembada.xyz/           # Repository root
└── sembada-app/       # React application
    ├── src/
    ├── public/
    ├── package.json
    └── vite.config.ts
```

**Push your code:**
```bash
cd C:\Users\THINKPAD\Sembada.xyz\sembada-app
git init
git add .
git commit -m "Initial commit: Sembada React app"
git remote add origin https://github.com/cfpages-syamsulalam-net/Sembada.xyz.git
git branch -M main
git push -u origin main
```

**Or if already pushed:** Just make sure latest code is pushed:
```bash
git add .
git commit -m "Update: latest changes"
git push
```

---

### Step 3: Connect GitHub to Cloudflare Pages

1. **Go to Cloudflare Pages:**
   - Visit: https://dash.cloudflare.com/
   - Sign in or create account
   - Click **"Workers & Pages"** in left sidebar
   - Click **"Create application"** → **"Pages"**

2. **Connect to GitHub:**
   - Click **"Connect to Git"**
   - Authorize Cloudflare to access GitHub (if prompted)
   - Select repository: `cfpages-syamsulalam-net/Sembada.xyz`
   - Click **"Begin setup"**

3. **Configure Build Settings:**

   Fill in these settings:

   | Setting | Value |
   |---------|-------|
   | **Project name** | `sembada-xyz` (or your choice) |
   | **Production branch** | `main` |
   | **Framework preset** | `React (Vite)` |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Root directory (Advanced)** | `sembada-app` (if React app is in subfolder) |

   **Important:** If your React app is in a subfolder (`sembada-app/`), you MUST set the root directory!

4. **Environment Variables (Optional):**

   Add these if you have a `.env` file:

   | Variable | Value |
   |----------|-------|
   | `VITE_SITE_URL` | `https://sembada.xyz` |
   | `VITE_WHATSAPP_NUMBER` | `6285257460869` |
   | `VITE_GA_MEASUREMENT_ID` | Your Google Analytics ID (optional) |

5. **Click "Save and Deploy"**

---

### Step 4: First Deployment

Cloudflare will now:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run build command (`npm run build`)
4. Deploy to a `*.pages.dev` URL

**Wait 2-5 minutes** for the build to complete.

**You'll get a URL like:**
```
https://sembada-xyz.pages.dev
```

**Test this URL** - your site should be live!

---

### Step 5: Add Custom Domain (sembada.xyz)

1. **Go to your Pages project:**
   - Cloudflare Dashboard → Workers & Pages
   - Click on `sembada-xyz`

2. **Go to Custom Domains:**
   - Click **"Custom domains"** tab
   - Click **"Set up a custom domain"**

3. **Enter your domain:**
   - Type: `sembada.xyz`
   - Click **"Continue"**

4. **Configure DNS:**
   
   Cloudflare will ask you to add DNS records. You have two options:

   **Option A: Domain is already on Cloudflare (Easiest)**
   - If `sembada.xyz` uses Cloudflare nameservers
   - Cloudflare will auto-configure everything
   - Just confirm and proceed

   **Option B: Domain uses different nameservers**
   - You'll need to add CNAME record manually
   - Go to your domain registrar (where you bought the domain)
   - Add CNAME record:
     ```
     Type: CNAME
     Name: @
     Target: sembada-xyz.pages.dev
     Proxy status: Proxied (orange cloud)
     ```

5. **Activate SSL:**
   - Cloudflare will automatically provision SSL certificate
   - Wait 5-15 minutes for SSL to activate

6. **Test your domain:**
   - Visit: `https://sembada.xyz`
   - Should show your site with HTTPS

---

## ⚙️ Part 3: Automatic Deployments

### How It Works

Every time you push to the `main` branch, Cloudflare automatically:
1. Detects the change
2. Builds your project
3. Deploys the new version
4. Keeps previous deployment (can rollback!)

### Deployment Workflow

```bash
# Make changes to your code
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: added homepage"
git push

# Cloudflare automatically deploys!
# Check deployment status at:
# https://dash.cloudflare.com/ → Workers & Pages → sembada-xyz → Deployments
```

### Deployment Previews

Cloudflare creates **preview deployments** for other branches:

```bash
# Create a new branch
git checkout -b feature/new-page

# Push branch
git push -u origin feature/new-page

# Cloudflare creates a preview URL:
# https://sembada-xyz-abc123.pages.dev
```

---

## 🔧 Part 4: Troubleshooting

### Build Fails

**Problem:** Build command fails or errors

**Solutions:**
1. Check build logs in Cloudflare dashboard
2. Test build locally: `npm run build`
3. Make sure all dependencies are in `package.json`
4. Check if root directory is set correctly (if React app is in subfolder)

### Site Not Showing Changes

**Problem:** Pushed code but site not updated

**Solutions:**
1. Check if push was to `main` branch
2. Go to Cloudflare dashboard → Deployments → Check latest deployment status
3. Wait 2-5 minutes for build to complete
4. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Custom Domain Not Working

**Problem:** `sembada.xyz` not loading site

**Solutions:**
1. Wait up to 24 hours for DNS propagation
2. Check DNS records in Cloudflare dashboard
3. Verify domain is using Cloudflare nameservers
4. Test `*.pages.dev` URL - if it works, issue is DNS-related

### 404 on Routes

**Problem:** Homepage works but `/about`, `/products` show 404

**Solution:** Add redirects for SPA routing

1. Create `public/_redirects` file in your React app:
   ```
   /*    /index.html   200
   ```

2. Push code - Cloudflare will redeploy

### SSL Certificate Issues

**Problem:** Browser shows "Not Secure" or SSL error

**Solutions:**
1. Wait 15-30 minutes for SSL to provision
2. Check SSL/TLS tab in Cloudflare dashboard
3. Make sure SSL mode is set to "Flexible" or "Full"

---

## 📊 Part 5: Monitoring & Analytics

### Cloudflare Analytics

Free analytics in Cloudflare dashboard:
- Visitors
- Bandwidth
- Requests
- Cache hit ratio

**Access:**
Workers & Pages → `sembada-xyz` → Analytics

### Google Analytics (Optional)

1. Create Google Analytics account: https://analytics.google.com/
2. Get Measurement ID (starts with `G-`)
3. Add to environment variables in Cloudflare:
   - Project Settings → Environment Variables
   - Add: `VITE_GA_MEASUREMENT_ID = G-XXXXXXXXXX`
4. Redeploy

---

## 💰 Part 6: Pricing & Limits

### Cloudflare Pages (Free Tier)

**Generous limits:**
- ✅ Unlimited sites
- ✅ Unlimited requests
- ✅ Unlimited bandwidth
- ✅ 500 builds per month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments

**More than enough for company profile website!**

### When to Upgrade

You'd only need paid plan if:
- 500+ builds per month (unlikely for this site)
- Need advanced analytics
- Need team collaboration features

---

## 🔄 Part 7: Updating Your Site

### Make Changes

```bash
# 1. Edit your code
# ... make changes ...

# 2. Test locally
npm run dev

# 3. Build and test
npm run build
npm run preview

# 4. Commit and push
git add .
git commit -m "feat: added product page"
git push

# 5. Cloudflare auto-deploys!
# Check status at: https://dash.cloudflare.com/
```

### Rollback (If Something Breaks)

1. Go to Cloudflare dashboard
2. Workers & Pages → `sembada-xyz` → Deployments
3. Find previous successful deployment
4. Click **"Retry"** to redeploy that version

---

## 📱 Part 8: Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images load properly
- [ ] Site is responsive on mobile
- [ ] HTTPS works (https://sembada.xyz)
- [ ] Forms submit correctly (if implemented)
- [ ] WhatsApp link works
- [ ] No console errors (F12 → Console)
- [ ] Page speed is good (use https://pagespeed.web.dev/)
- [ ] Custom domain works (not just *.pages.dev)

---

## 🎯 Quick Reference

### Important URLs

| What | URL |
|------|-----|
| **Cloudflare Dashboard** | https://dash.cloudflare.com/ |
| **Your Site (deployed)** | https://sembada-xyz.pages.dev |
| **Custom Domain** | https://sembada.xyz |
| **GitHub Repository** | https://github.com/cfpages-syamsulalam-net/Sembada.xyz |

### Build Settings Summary

| Setting | Value |
|---------|-------|
| **Framework** | React (Vite) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Root Directory** | `sembada-app` (if in subfolder) |
| **Branch** | `main` |

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Site URL for SEO |
| `VITE_WHATSAPP_NUMBER` | WhatsApp contact |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics (optional) |

---

## 💡 Tips

1. **Always test locally first:** `npm run dev` then `npm run build && npm run preview`
2. **Commit often:** Small commits make it easier to find issues
3. **Use branches:** Test features before merging to main
4. **Check deployment logs:** If something breaks, logs tell you why
5. **Keep `.env` out of git:** Use Cloudflare's environment variables instead

---

## 📞 Need Help?

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Common Issues:** Check troubleshooting section above

---

*Ready to deploy? Start from Step 1 and follow along!*
