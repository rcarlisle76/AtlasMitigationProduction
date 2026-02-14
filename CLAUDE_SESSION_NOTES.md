# Atlas Mitigation Project - Session Notes

**Last Updated:** February 14, 2026
**Repository:** https://github.com/rcarlisle76/AtlasMitigationProduction.git
**Live Site:** https://atlas-mitigation-testing.vercel.app
**Sanity Studio:** https://atlas-mitigation-testing.vercel.app/studio

---

## Project Overview

Atlas Mitigation is a restoration company website built with:
- **Next.js 16** (App Router)
- **Sanity CMS** (headless CMS for content management)
- **Tailwind CSS** (styling)
- **Vercel** (hosting)

---

## Current Status: ✅ WORKING

### What's Working
- ✅ Main website deployed and functional
- ✅ Sanity Studio at `/studio` (with basePath fix)
- ✅ Gallery page with images from Sanity CMS
- ✅ Blog pages with posts from Sanity CMS
- ✅ Testimonials page (newly created)
- ✅ All service pages
- ✅ All location pages
- ✅ Contact page
- ✅ Site search functionality

### Recent Changes (This Session)
1. **Fixed gallery images** - Set `NEXT_PUBLIC_SANITY_PROJECT_ID` env var on Vercel
2. **Fixed Sanity Studio routing** - Added `basePath: "/studio"` to sanity.config.ts
3. **Created testimonials page** - New page at `/testimonials` with all reviews
4. **Added testimonials to navigation** - Link between Gallery and Blog

---

## Important Configuration

### Sanity CMS
- **Project ID:** `prkqtff7`
- **Dataset:** `production`
- **API Version:** `2024-01-01`

### Key Files
| File | Purpose |
|------|---------|
| `sanity.config.ts` | Sanity Studio configuration (includes basePath) |
| `src/lib/sanity/client.ts` | Sanity client for fetching data |
| `src/lib/sanity/fetch-with-fallback.ts` | Fetches from Sanity with local fallback |
| `sanity/schemas/` | Content type definitions |

### Environment Variables (Vercel)
These MUST be set in Vercel dashboard for production:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=prkqtff7
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### CORS Origins (Sanity Dashboard)
Configured at: https://www.sanity.io/manage/project/prkqtff7/settings/api
- `http://localhost:3000`
- `https://atlas-mitigation-testing.vercel.app`

---

## Content in Sanity CMS

Seeded with test data:
- **5 Blog Posts** - Various restoration topics
- **8 Testimonials** - Customer reviews
- **4 Gallery Items** - Before/after photos with uploaded images

---

## File Structure

```
atlas-mitigation/
├── src/
│   ├── app/
│   │   ├── (site)/           # Main site pages (with Header/Footer)
│   │   │   ├── page.tsx      # Homepage
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   ├── contact/
│   │   │   ├── gallery/
│   │   │   ├── locations/
│   │   │   ├── services/
│   │   │   └── testimonials/ # NEW - testimonials page
│   │   └── (studio)/         # Sanity Studio (no Header/Footer)
│   │       └── studio/[[...tool]]/page.tsx
│   ├── components/
│   ├── data/                 # Local fallback data
│   └── lib/
│       └── sanity/           # Sanity client and queries
├── sanity/
│   └── schemas/              # CMS content type schemas
├── sanity.config.ts          # Sanity Studio config
├── sanity.cli.ts             # Sanity CLI config
└── next.config.ts            # Next.js config
```

---

## Known Issues / Notes

1. **Sanity Studio URL:** Use `/studio` - it will redirect to `/studio/structure`
2. **Hosted Sanity Studio:** `atlas-mitigation.sanity.studio` has old config - use Vercel-hosted studio instead
3. **Images:** Gallery images load from Sanity CDN when env var is set, falls back to local placeholders otherwise

---

## Common Tasks

### Access CMS
Go to: https://atlas-mitigation-testing.vercel.app/studio

### Run Locally
```bash
cd /Users/bobbycarlisle/Desktop/atlas-mitigation-project/atlas-mitigation
npm run dev
# Site: http://localhost:3000
# Studio: http://localhost:3000/studio
```

### Deploy Changes
```bash
git add -A
git commit -m "Your message"
git push origin main
# Vercel auto-deploys from main branch
```

### Seed CMS Data
```bash
SANITY_API_TOKEN=your_token node scripts/seed-sanity.mjs
```

---

## Next Steps / TODO

- [ ] Add real customer testimonials to replace seed data
- [ ] Add real before/after photos to gallery
- [ ] Write additional blog posts
- [ ] Configure custom domain when ready
- [ ] Set up Sanity webhooks for on-demand revalidation (optional)

---

## Contact / Support

If issues arise:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify environment variables are set in Vercel
4. Verify CORS origins in Sanity dashboard
