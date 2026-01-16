\\# Deployment Guide

## Step-by-Step Instructions for Hosting Your Timeline Website

### Option 1: Vercel (Recommended - Easiest)

#### Step 1: Sign up for Vercel
1. Go to https://vercel.com
2. Click "Sign Up" and sign up with your GitHub account (SCR3AMo9)
3. This will automatically connect your GitHub account to Vercel

#### Step 2: Deploy Your Project
1. After signing in, click "Add New..." → "Project"
2. You'll see your GitHub repositories listed
3. Find and select `300kyears` (or `timeline-of-meaning`)
4. Vercel will auto-detect it's a SvelteKit project
5. Leave all settings as def\ault (Framework Preset: SvelteKit, Build Command: `npm run build`, Output Directory: `.svelte-kit`)
6. Click "Deploy"
7. Wait 1-2 minutes for the build to complete
8. Vercel will give you a temporary URL like: `https://300kyears-xyz.vercel.app`

#### Step 3: Configure Custom Domain in Vercel
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Enter your domain name (e.g., `yourdomain.com` or `www.yourdomain.com`)
3. Click "Add"
4. Vercel will show you the DNS records you need to configure

#### Step 4: Configure DNS in Squarespace
1. Log into your Squarespace account
2. Go to Settings → Domains → [Your Domain] → DNS Settings
3. You need to add/update these DNS records:

   **For Root Domain (yourdomain.com):**
   - Type: `A` Record
   - Host: `@` (or leave blank)
   - Points to: `76.76.21.21` (Vercel's IP - this may change, check Vercel dashboard)

   **OR use CNAME (recommended):**
   - Type: `CNAME` Record
   - Host: `@` (some providers allow this, Squarespace might require `www`)
   - Points to: `cname.vercel-dns.com`

   **For WWW Subdomain (www.yourdomain.com):**
   - Type: `CNAME` Record
   - Host: `www`
   - Points to: `cname.vercel-dns.com`

   **Note:** Check Vercel's domain settings page for the exact records - they will provide you with the specific values!

4. Save the DNS changes
5. DNS propagation can take 24-48 hours, but usually works within 1-2 hours

#### Step 5: Verify Domain in Vercel
1. After adding DNS records, go back to Vercel
2. Click "Refresh" or wait a few minutes
3. Vercel will automatically verify and configure SSL (HTTPS) for your domain
4. Once verified, your site will be live at your custom domain!

---

### Option 2: Netlify (Alternative)

#### Step 1: Sign up for Netlify
1. Go to https://netlify.com
2. Click "Sign up" and sign up with your GitHub account

#### Step 2: Deploy Your Project
1. Click "Add new site" → "Import an existing project"
2. Choose "Deploy with GitHub"
3. Select your `300kyears` repository
4. Netlify will auto-detect SvelteKit settings:
   - Build command: `npm run build`
   - Publish directory: `.svelte-kit`
5. Click "Deploy site"
6. You'll get a URL like: `https://random-name-123.netlify.app`

#### Step 3: Configure Custom Domain in Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow Netlify's DNS configuration instructions

#### Step 4: Configure DNS in Squarespace
- Add CNAME record pointing to your Netlify site URL
- Or use Netlify's nameservers (requires changing nameservers in Squarespace)

---

## Important Notes:

1. **DNS Propagation**: DNS changes can take up to 48 hours, but usually work within 1-2 hours
2. **SSL/HTTPS**: Both Vercel and Netlify automatically provide free SSL certificates
3. **Continuous Deployment**: Once connected, every push to your GitHub `main` branch will automatically deploy
4. **Environment Variables**: If you need any (like API keys), add them in your hosting platform's settings

## Quick Start Commands:

```bash
# Test your build locally before deploying
npm run build
npm run preview

# Make changes, commit, and push (auto-deploys if connected to Vercel/Netlify)
git add .
git commit -m "Your changes"
git push origin main
```

