# Deployment Guide - Fahrschule am Ostendplatz Website

This guide walks you through deploying the Fahrschule website to GitHub and Vercel.

## Prerequisites

- GitHub account (https://github.com)
- Vercel account (https://vercel.com) - you can sign up using your GitHub account
- Git installed on your local machine

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `fahrschule-ostendplatz`
   - **Description**: Modern website for Fahrschule am Ostendplatz
   - **Visibility**: Public (so it can be deployed to Vercel easily)
   - Do NOT initialize with README (we already have one)
3. Click **Create repository**
4. Copy the repository URL (e.g., `https://github.com/YOUR-USERNAME/fahrschule-ostendplatz.git`)

### Option B: Using GitHub CLI

```bash
gh repo create fahrschule-ostendplatz --public --remote=origin --source=. --remote-name=origin --push
```

---

## Step 2: Push Code to GitHub

Execute these commands in your project directory:

```bash
# Add the remote repository (replace YOUR-USERNAME and/or use the URL from Step 1)
git remote remove origin 2>/dev/null || true  # Remove existing origin if any
git remote add origin https://github.com/YOUR-USERNAME/fahrschule-ostendplatz.git

# Rename branch to main if necessary
git branch -M main

# Push all commits to GitHub
git push -u origin main
```

**Expected Output:**
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Writing objects: 100% (15/15), ...
To https://github.com/YOUR-USERNAME/fahrschule-ostendplatz.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Log in with your GitHub account
3. Click **Add New...** → **Project**
4. Authorize Vercel to access your GitHub account (if prompted)
5. Select `fahrschule-ostendplatz` from your repositories
6. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
7. Click **Deploy**

Wait a few minutes for the deployment to complete. Once done, Vercel will provide you with a live URL.

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy the project:
```bash
vercel --prod
```

3. Follow the prompts:
   - Link to existing project or create new one
   - Select the project (fahrschule-ostendplatz)
   - Confirm deployment to production

---

## Step 4: Connect Your Domain

Once your website is live on Vercel, you can connect it to your existing domain (`fahrschule-am-ostendplatz.de`):

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Click **Add** and enter your domain: `fahrschule-am-ostendplatz.de`
3. Vercel will show you DNS records to add
4. Add these DNS records to your domain provider:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the CNAME or A records Vercel provides
   - Wait 24-48 hours for DNS to propagate

### Alternative: Use Vercel's Nameservers

For easier setup, you can point your domain's nameservers to Vercel:
1. In Vercel: Domain Settings → Change Nameservers
2. Update your domain registrar to use Vercel's nameservers
3. This gives Vercel full control over your domain DNS

---

## Step 5: Continuous Deployment (Auto-Deploy)

Once connected to GitHub, Vercel automatically deploys your site whenever you push changes:

```bash
# Make changes to your website
git add .
git commit -m "Update website content"
git push

# Vercel will automatically deploy the changes within minutes
```

---

## Manual Redeploy

To redeploy from Vercel dashboard:
1. Go to your project on Vercel
2. Click **Deployments**
3. Find any previous deployment
4. Click the **...** menu → **Redeploy**

---

## Environment Variables (if needed)

If your site needs environment variables (like API keys):

1. In Vercel Dashboard: Project Settings → **Environment Variables**
2. Add your variables
3. Redeploy the project

Example `.env.local` file (for local development):
```
# Never commit this file to GitHub!
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Troubleshooting

### Build Fails on Vercel

**Error**: "Node.js version error"

**Solution**: 
- Specify Node.js version in `package.json`:
  ```json
  {
    "engines": {
      "node": ">=20.9.0"
    }
  }
  ```
- Or override in Vercel Project Settings → Function size

### Domain Points to Wrong Project

**Solution**:
- Verify Vercel is the default domain in Settings → Domains
- Check DNS records are correctly configured
- Clear browser cache (Ctrl+Shift+Delete)

### Changes Not Showing Live

**Solution**:
1. Verify push was successful: `git push -v`
2. Wait for Vercel build to complete (check Deployments tab)
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### SSL Certificate Issues

**Solution**:
- Vercel auto-generates SSL certificates for connected domains
- Wait 24-48 hours if using custom domain
- Check Vercel project Settings → SSL/TLS status

---

## Monitoring Deployments

### View Build Logs

1. Vercel Dashboard → Project → **Deployments**
2. Click on any deployment
3. View build output and logs
4. Check for errors or warnings

### Set Up Notifications

1. Vercel Settings → **Notifications**
2. Enable email alerts for deployment failures

---

## Updating Website Content

Update your website by editing the main page file:

**File**: `src/app/page.tsx`

Common updates:
- **Contact Info**: Change phone numbers, email, hours
- **Services**: Edit course descriptions
- **Reviews**: Add new customer testimonials
- **Social Links**: Update Facebook/Instagram URLs

After making changes:
```bash
git add src/app/page.tsx
git commit -m "Update website content"
git push
```

Vercel will automatically redeploy.

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Help**: https://docs.github.com

---

## Quick Reference Commands

```bash
# Clone the project locally
git clone https://github.com/YOUR-USERNAME/fahrschule-ostendplatz.git
cd fahrschule-ostendplatz

# Install dependencies
npm install

# Run locally
npm run dev
# Visit http://localhost:3000

# Make changes and push
git add .
git commit -m "Your message"
git push

# Vercel automatically deploys!
```

---

**Good luck with your new website! 🚀**
