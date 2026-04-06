# Portfolio Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Create a `.env.local` file with the following variables:

```env
# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if using external service)
# NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
```

### 2. Update Personal Information
- [ ] Update domain in `app/layout.tsx` metadata
- [ ] Verify all contact information in `components/sections/contact.tsx`
- [ ] Check GitHub links in `lib/projects.ts`
- [ ] Update social media links in `components/layout/footer.tsx`

### 3. SEO Optimization
- [ ] Create OpenGraph image at `public/og-image.png` (1200x630px)
- [ ] Add Google Search Console verification code
- [ ] Create `robots.txt` in public folder
- [ ] Create `sitemap.xml` in public folder

### 4. Performance Optimization
- [ ] Optimize all images in `public/project_images/`
- [ ] Test build: `npm run build`
- [ ] Check bundle size: `npm run build -- --analyze` (if configured)
- [ ] Test production build locally: `npm run start`

### 5. Testing
- [ ] Test on mobile devices (responsive design)
- [ ] Test dark/light theme switching
- [ ] Test all navigation links
- [ ] Test smooth scrolling
- [ ] Test contact form submission
- [ ] Test external links (GitHub, LinkedIn, etc.)
- [ ] Test project case study pages

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Custom Server
```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Post-Deployment

### 1. Analytics Setup
- Add Google Analytics tracking ID to environment variables
- Verify analytics is working

### 2. SEO
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Verify OpenGraph tags using [OpenGraph.xyz](https://www.opengraph.xyz/)
- Test Twitter Card using [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 3. Performance Monitoring
- Check Lighthouse scores (aim for 90+)
- Monitor Core Web Vitals
- Test loading speed on different networks

### 4. Domain Setup
- Point domain to deployment platform
- Configure SSL certificate
- Update metadata base URL in `app/layout.tsx`

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Update project information as you complete new work
- Add new projects to `lib/projects.ts`
- Update experience section with new roles

### Monitoring
- Check analytics monthly
- Monitor error logs
- Test contact form regularly
- Verify all external links work

## Support

For issues or questions:
- Email: aashisacharya60@gmail.com
- GitHub: github.com/aashis06

---

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
