# Font Rendering Fix - Vercel vs Localhost

## Problem Statement
Portfolio looked perfect on localhost (correct font size, weight, spacing) but on Vercel everything appeared LARGER and HEAVIER — fonts were bigger and bolder, layout felt blown up.

**Root Cause**: The Inter font from `next/font/google` was not loading properly on Vercel, causing the browser to fall back to system fonts (San Francisco on Mac, Segoe UI on Windows) which render larger and heavier than Inter.

## Diagnosis Results

### Issue #1: Missing Font Weight Configuration
The Inter font was configured without explicit weights, causing Next.js to load only the default weight and potentially fail in production.

### Issue #2: Font Fallback Metrics Inflation
Next.js's `adjustFontFallback` feature (enabled by default) was inflating text size when the primary font failed to load, making fallback fonts appear larger.

### Issue #3: No Explicit Font-Weight Declaration
Without explicit `font-weight: 400` on html/body, browsers were defaulting to their own font-weight values, which vary by system font.

### Issue #4: Missing Font Smoothing
Lack of `-webkit-font-smoothing` and `-moz-osx-font-smoothing` caused inconsistent rendering across browsers.

## Solutions Applied

### 1. Enhanced Inter Font Configuration (app/layout.tsx)

```typescript
// BEFORE
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
});

// AFTER
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],           // ✅ Explicit weights
  fallback: ["system-ui", "-apple-system", "sans-serif"], // ✅ Explicit fallbacks
  adjustFontFallback: false,                      // ✅ Disable size inflation
  preload: true,                                  // ✅ Faster loading
});
```

**Why this works:**
- `weight: ["400", "500", "600", "700"]` - Ensures all needed weights are loaded
- `adjustFontFallback: false` - Prevents Next.js from inflating fallback font sizes
- `fallback: [...]` - Explicit fallback chain prevents unpredictable system fonts
- `preload: true` - Loads font files earlier in the page lifecycle

### 2. Explicit Font-Weight & Smoothing (app/globals.css)

```css
html {
  font-size: 16px;
  font-weight: 400;                              /* ✅ Explicit weight */
  -webkit-font-smoothing: antialiased;           /* ✅ Smooth rendering */
  -moz-osx-font-smoothing: grayscale;            /* ✅ Smooth rendering */
}

body {
  font-size: 1rem;
  font-weight: 400;                              /* ✅ Explicit weight */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Prevent headings from inheriting bold from fallback fonts */
h1, h2, h3, h4, h5, h6 {
  font-weight: inherit;                          /* ✅ Use component weights */
}
```

**Why this works:**
- `font-weight: 400` - Prevents browsers from defaulting to bold (500-600) on system fonts
- Font smoothing properties - Ensures consistent rendering across browsers
- `h1-h6 font-weight: inherit` - Prevents headings from being auto-bolded by browser defaults

## Verification Steps

### 1. Test Production Build Locally
```bash
npm run build
npm run start
```
Open http://localhost:3000 and compare with `npm run dev`. They should look identical.

### 2. Check Font Loading on Vercel
After deployment:
1. Open Vercel URL in browser
2. Open DevTools → Network tab
3. Filter by "Font"
4. Verify Inter font files (woff2) load with 200 status
5. Check that font-family in Computed styles shows "Inter"

### 3. Compare Screenshots
- Take screenshot of localhost (npm run dev)
- Take screenshot of Vercel production
- Font size, weight, and spacing should be identical

## Expected Results

✅ Vercel renders with same font size as localhost
✅ Font weight is 400 (regular), not bold/heavy
✅ Inter font loads successfully (check Network tab)
✅ No fallback to system fonts
✅ Consistent rendering across Chrome, Firefox, Safari
✅ Text appears crisp with proper font smoothing

## Technical Details

### Font Loading Priority
1. Inter (from Google Fonts CDN) - Primary
2. system-ui - First fallback
3. -apple-system - macOS fallback
4. sans-serif - Generic fallback

### Font Weights Used
- 400 (Regular) - Body text, paragraphs
- 500 (Medium) - Subtle emphasis
- 600 (Semibold) - Subheadings, buttons
- 700 (Bold) - Main headings

### Browser Compatibility
- Chrome/Edge: Uses -webkit-font-smoothing
- Firefox: Uses -moz-osx-font-smoothing
- Safari: Uses -webkit-font-smoothing
- All browsers: Respect explicit font-weight

## Files Modified

1. **app/layout.tsx**
   - Enhanced Inter font configuration
   - Added weight array, fallback chain, adjustFontFallback: false

2. **app/globals.css**
   - Added explicit font-weight: 400
   - Added font smoothing properties
   - Added heading font-weight inheritance

## Troubleshooting

### If fonts still look heavy on Vercel:

1. **Clear Vercel Cache**
   - Go to Vercel Dashboard → Project → Settings
   - Trigger a new deployment
   - Wait 3-5 minutes for full propagation

2. **Hard Refresh Browser**
   - Chrome/Edge: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or use Incognito/Private mode

3. **Check Font Loading**
   - DevTools → Network → Filter "Font"
   - Verify Inter-*.woff2 files load successfully
   - Check for 404 errors

4. **Verify Font in Computed Styles**
   - DevTools → Elements → Select body element
   - Computed tab → font-family should show "Inter"
   - If it shows "system-ui" or "San Francisco", font didn't load

5. **Check for CSS Conflicts**
   - Search codebase for any `font-weight: bold` or `font-weight: 600+`
   - Ensure no global styles override the base font-weight

### If localhost and production build differ:

Run production build locally:
```bash
npm run build
npm run start
```

If they look different, the issue is in the build process. Check:
- Is globals.css being imported in layout.tsx?
- Are there any build warnings about fonts?
- Is the Inter font variable being applied to html/body?

## Prevention

To prevent this issue in future projects:

1. **Always configure next/font with:**
   - Explicit weight array
   - `adjustFontFallback: false`
   - Explicit fallback chain
   - `preload: true`

2. **Always set in globals.css:**
   - `font-weight: 400` on html and body
   - Font smoothing properties
   - Heading font-weight inheritance

3. **Test production builds locally:**
   - Run `npm run build && npm run start` before deploying
   - Compare with dev mode visually

4. **Verify font loading:**
   - Check Network tab for font files
   - Verify Computed styles show correct font-family

## References

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts Inter](https://fonts.google.com/specimen/Inter)
- [CSS Font Smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth)

---

**Last Updated**: 2026-04-07
**Status**: ✅ Fixed and Deployed
**Vercel URL**: https://portfolio-theta-six-84.vercel.app/
