# Quick Start - Deploy to Vercel in 5 Minutes

## 1. Create GitHub Repository
```bash
# Go to https://github.com/new
# Name: fahrschule-ostendplatz
# Make it Public
# Don't initialize with README
# Copy the repository URL
```

## 2. Push Code to GitHub
```bash
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/YOUR-USERNAME/fahrschule-ostendplatz.git
git branch -M main
git push -u origin main
```

## 3. Deploy to Vercel
```
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "fahrschule-ostendplatz" 
4. Click "Deploy"
5. Wait 2-5 minutes
6. Your website is live at: [vercel-assigned-url].vercel.app
```

## 4. Connect Your Domain (Optional)
```
1. In Vercel: Settings → Domains
2. Add: fahrschule-am-ostendplatz.de
3. Follow DNS instructions from Vercel
4. Wait 24-48 hours for DNS to propagate
```

## 5. Auto-Deploy Future Changes
```bash
# Make changes locally
git add .
git commit -m "Update website"
git push

# Vercel automatically deploys within 1 minute!
```

---

**That's it! Your site is now live and auto-updating! 🎉**

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
