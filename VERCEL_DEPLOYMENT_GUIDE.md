# NFZ Entertainment - Vercel Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel will automatically handle your website deployment, contact forms, and custom domain setup.

### Step 1: Prepare Your Files

Your website is ready to deploy! Here's what you need:

✅ **All source code** (already prepared)  
✅ **vercel.json** configuration file (created)  
✅ **Built assets** in the `dist` folder  
✅ **Contact form** will work automatically with Vercel  

### Step 2: Deploy to Vercel via GitHub (Required)

Vercel requires Git integration, so we'll use GitHub (free and easy):

#### Step A: Create GitHub Repository

1. **Sign up for GitHub** (if you don't have an account)
   - Go to [github.com](https://github.com)
   - Create free account

2. **Create New Repository**
   - Click the "+" button in top right
   - Select "New repository"
   - Name: `nfz-entertainment-website`
   - Set to "Public" (required for free Vercel)
   - Check "Add a README file"
   - Click "Create repository"

#### Step B: Upload Your Files to GitHub

**Method 1: Web Upload (Easiest)**
1. **Download your project from Replit**
   - In Replit, use the download option to get ZIP file
   - Extract on your computer

2. **Upload to GitHub**

**IMPORTANT:** Your repository must not be empty. If you see an error about "repository does not contain the requested branch", follow these steps:

   a) **First, create initial README**:
      - In your empty GitHub repository, click "creating a new file"
      - Name it `README.md`
      - Add content: `# NFZ Entertainment Website`
      - Click "Commit new file"

   b) **Then upload your project files**:
      
   **CRITICAL: The `client` folder is missing from your GitHub upload!**
   
   You MUST upload the `client/` folder which contains your entire website. Here's how:
   
   1. **Download project from Replit**: 
      - Right-click in Replit file panel → "Download as ZIP"
      - Extract the ZIP on your computer
   
   2. **Upload to GitHub**:
      - In GitHub, click "uploading an existing file" 
      - Drag the ENTIRE extracted folder contents, especially:
        - **`client/` folder** (REQUIRED - contains your website!)
        - `server/` folder  
        - `shared/` folder
        - `build.sh`
        - `vercel.json`
        - `package.json`
        - All other files
      
   3. **Verify Upload**:
      - Make sure you see `client/` folder in your GitHub repository
      - It should contain: `index.html`, `src/` folder, `public/` folder
      
   **Without the `client/` folder, your website cannot build!**

**Method 2: GitHub Desktop (User-friendly)**
1. **Download GitHub Desktop** from [desktop.github.com](https://desktop.github.com)
2. **Clone your repository** to your computer
3. **Copy your project files** into the cloned folder
4. **Commit and push** using GitHub Desktop

#### Step C: Connect to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up using your GitHub account (this connects them automatically)

2. **Import Your Project**
   - Click "Add New Project"
   - You'll see your `nfz-entertainment-website` repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
   - Click "Deploy"

**New Files Created to Fix Build Issues:**
✅ `vercel.json` - Updated with custom build command  
✅ `vercel-build.js` - Custom build script for Vercel  
✅ `vite.config.vercel.ts` - Production-optimized Vite config  

**Upload These Files to GitHub:**
Make sure to upload these new files:
- `vercel.json` (updated version)
- `vercel-build.js` (new custom build script)
- `vite.config.vercel.ts` (new Vite config for production)

**Vercel Settings:**
- Framework Preset: `Other`
- Build Command: `node vercel-build.js`
- Output Directory: `dist/public`
- Install Command: `npm install`

**If Build Still Fails:**
1. Check the build logs in Vercel dashboard
2. Ensure all files (especially `client/` folder) are uploaded to GitHub
3. Try redeploying from scratch

### Step 3: Custom Domain Setup

1. **Add Your Domain**
   - In Vercel dashboard, go to your project
   - Click "Domains" tab
   - Add `nfz.world`

2. **Update DNS at GoDaddy**
   - Go to your GoDaddy domain management
   - Update DNS records to point to Vercel:
     - Add CNAME record: `www` → `cname.vercel-dns.com`
     - Add A record: `@` → `76.76.19.19`
   - Or use Vercel's nameservers (recommended)

### Step 4: Contact Form Setup

Your contact form will work automatically! Vercel provides several options:

#### Option A: Vercel Forms (Recommended)
- Forms automatically work with Vercel
- Submissions sent to your email
- No additional setup needed

#### Option B: External Form Service
If you prefer, I can help you set up:
- Netlify Forms
- Formspree
- EmailJS

### Step 5: Environment Variables (If Needed)

If you want to add analytics or other services:

1. **In Vercel Dashboard**
   - Go to your project settings
   - Click "Environment Variables"
   - Add any needed variables

Common variables you might add later:
- `GOOGLE_ANALYTICS_ID` (for website analytics)
- `SENDGRID_API_KEY` (for email notifications)

### Step 6: SSL & Security

✅ **Automatic SSL** - Vercel provides free SSL certificates  
✅ **Global CDN** - Your site loads fast worldwide  
✅ **DDoS Protection** - Built-in security  
✅ **Auto-scaling** - Handles traffic spikes automatically  

## File Structure for Upload

Make sure you upload these key files/folders:

```
nfz-entertainment-website/
├── client/                 # Frontend source code
├── server/                 # Backend API code
├── shared/                 # Shared TypeScript schemas
├── dist/                   # Built production files
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Styling config
├── vite.config.ts         # Build configuration
└── README.md              # Project documentation
```

## Deployment Checklist

- [ ] Sign up for Vercel account
- [ ] Upload project files or connect GitHub
- [ ] Verify build completes successfully
- [ ] Test website functionality on Vercel URL
- [ ] Add custom domain (nfz.world)
- [ ] Update DNS settings at GoDaddy
- [ ] Test contact form submissions
- [ ] Verify all images and assets load
- [ ] Check mobile responsiveness

## Expected Results

After deployment you'll have:

✅ **Live Website**: `https://nfz-entertainment.vercel.app`  
✅ **Custom Domain**: `https://nfz.world` (after DNS setup)  
✅ **Working Contact Form**: Partnership inquiries delivered to your email  
✅ **Lightning Fast**: Global CDN with instant loading  
✅ **Mobile Optimized**: Perfect on all devices  
✅ **SEO Ready**: Optimized for search engines  

## Troubleshooting

### Common Issues:
- **Build fails**: Check that all dependencies are included
- **Images not loading**: Ensure assets are in `client/public/assets/`
- **Domain not working**: DNS changes can take 24-48 hours
- **Form not working**: Check Vercel form settings in dashboard

### Get Help:
- Vercel has excellent documentation and support
- Their dashboard shows detailed build logs
- Contact me if you need assistance with any step

## Next Steps After Deployment

1. **Test Everything**: Check all sections, forms, and navigation
2. **Analytics**: Add Google Analytics for visitor tracking
3. **SEO**: Submit your sitemap to Google Search Console
4. **Social**: Update your social media links to the new site
5. **Monitor**: Use Vercel's analytics to track performance

---

**Your stunning NFZ Entertainment website is ready to go live and attract partnerships worldwide!**

## Quick Start Commands

If you're comfortable with command line:

```bash
# Build the project
npm run build

# Deploy to Vercel (after installing Vercel CLI)
npx vercel --prod
```

**Need help with any step? Let me know and I'll walk you through it!**