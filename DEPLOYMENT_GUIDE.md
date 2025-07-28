# NFZ Entertainment Website - GoDaddy Deployment Guide

## Overview
This guide will help you replace your GoDaddy Website Builder with your custom NFZ Entertainment website.

## What You'll Get
- Your stunning custom NFZ website with dark theme and neon effects
- Working contact form for partnership inquiries
- Mobile-responsive design
- Fast loading times

## Prerequisites
- GoDaddy account with your domain (nfz.world)
- Access to GoDaddy's hosting control panel
- FTP client (like FileZilla) or use GoDaddy's file manager

## Step 1: Switch to GoDaddy Web Hosting

1. **Log into your GoDaddy account**
   - Go to godaddy.com and sign in
   - Navigate to "My Products"

2. **Cancel Website Builder (if needed)**
   - Find your Website Builder subscription
   - Cancel or downgrade it (you can keep it temporarily during transition)

3. **Purchase/Activate Web Hosting**
   - Look for "Web Hosting" in your products
   - If you don't have it, purchase a basic hosting plan
   - Linux hosting with PHP support is recommended

## Step 2: Access Your Hosting Control Panel

1. **Find your hosting account**
   - In "My Products", click on your Web Hosting
   - Click "Manage" or "cPanel" to access the control panel

2. **Note your hosting details**
   - FTP server address (usually your domain or ftp.yourdomain.com)
   - FTP username and password
   - Document root folder (usually public_html)

## Step 3: Prepare Your Website Files

Your website has been built and is ready for deployment. You have two main files:

1. **Frontend files** (`dist/public/` folder):
   - `index.html` - Your main website page
   - `assets/` folder - CSS, JavaScript, and other assets

2. **Backend server** (`dist/index.js`):
   - Handles the contact form submissions
   - Needs Node.js hosting (see alternative below)

## Step 4: Upload Website Files

### Option A: Using GoDaddy File Manager (Easier)

1. **Access File Manager**
   - In cPanel, find "File Manager"
   - Navigate to `public_html` folder

2. **Upload files**
   - Delete any existing files in public_html
   - Upload all files from `dist/public/` folder
   - Make sure `index.html` is in the root of public_html

### Option B: Using FTP Client (More Control)

1. **Download FileZilla** (free FTP client)
   - Go to filezilla-project.org
   - Download and install

2. **Connect to your hosting**
   - Host: ftp.nfz.world (or your FTP server from Step 2)
   - Username: [from your hosting details]
   - Password: [from your hosting details]
   - Port: 21

3. **Upload files**
   - Navigate to public_html on the server side
   - Upload all contents of `dist/public/` to public_html

## Step 5: Contact Form Setup

Since GoDaddy's basic hosting may not support Node.js, here are your options:

### Option A: Use a Third-Party Form Service (Recommended)
1. **Sign up for Netlify Forms** (free):
   - Create account at netlify.com
   - They provide form handling without backend code

2. **Update your contact form**:
   - Replace the form action with Netlify's endpoint
   - Add `netlify` attribute to your form
   - Form submissions will be sent to your email

### Option B: PHP Contact Form (If you prefer server-side)
I can create a simple PHP version of your contact form that works on GoDaddy's hosting.

## Step 6: Test Your Website

1. **Visit your domain**
   - Go to nfz.world in your browser
   - Check that all sections load properly
   - Test the navigation and animations

2. **Test contact form**
   - Fill out and submit the partnership inquiry form
   - Verify you receive the email notification

3. **Check mobile responsiveness**
   - Test on phone and tablet
   - Ensure all animations and interactions work

## Step 7: DNS and Final Setup

1. **Verify DNS settings**
   - Your domain should already point to GoDaddy hosting
   - If you moved from Website Builder, this should be automatic

2. **SSL Certificate**
   - Enable free SSL in your hosting control panel
   - This makes your site https://nfz.world

## Troubleshooting

### Common Issues:
- **404 errors**: Make sure index.html is in the public_html root
- **Broken images**: Check that assets folder uploaded properly
- **Contact form not working**: Set up the form service (Option A above)
- **Slow loading**: Enable compression in cPanel

### Need Help?
- GoDaddy Support: Available 24/7 for hosting questions
- Contact me if you need the PHP form version or have technical issues

## Alternative Quick Deploy Option

If GoDaddy hosting seems complex, I can also help you deploy to:
- **Netlify** (free, very easy, handles forms automatically)
- **Vercel** (free, excellent performance)

These would still work with your nfz.world domain - you'd just change your DNS settings to point there instead.

---

**Your website is ready to go live! Let me know which approach you'd like to take and if you need help with any of these steps.**