# Atlas Mitigation

Professional property restoration website for Atlas Mitigation, serving metro Atlanta (Acworth, Marietta, Kennesaw, Roswell, Decatur, Buckhead, Downtown Atlanta, Conyers, and surrounding areas). Features before/after project galleries, 360° virtual tours, blog with vlog support, testimonials, and a Sanity CMS for content management.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity v5 (embedded Studio at `/studio`)
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI, Lucide icons, class-variance-authority
- **360° Viewer:** react-photo-sphere-viewer
- **Language:** TypeScript
- **Deployment:** Vercel
- **Domain:** atlasmitigation.com

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID (found at sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Dataset name, typically `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Yes | API version date, e.g. `2024-01-01` |
| `SANITY_API_TOKEN` | For seeding | Editor-level token for write operations |
| `NEXT_PUBLIC_SITE_URL` | Optional | Production URL for SEO |

**To get a Sanity API token:**

1. Go to https://www.sanity.io/manage/project/prkqtff7/settings/api
2. Click **Add API token**
3. Name it (e.g. "Seed Script"), set permissions to **Editor**
4. Copy the token into your `.env.local`

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 for the site and http://localhost:3000/studio for Sanity Studio.

### 4. Seed sample content (optional)

The site works without Sanity data — fallback content is built in. To populate Sanity with sample content:

```bash
# Seed blog posts, testimonials, and gallery items
node scripts/seed-sanity.mjs

# Seed 360° panorama images
node scripts/seed-panoramas.mjs
```

Both scripts require `SANITY_API_TOKEN` in `.env.local`.

## Project Structure

```
atlas-mitigation/
├── public/                    # Static assets (images, gallery photos, logo)
├── sanity/
│   └── schemas/               # Sanity document type schemas
│       ├── service.ts         # Restoration service types
│       ├── location.ts        # Service area locations
│       ├── galleryItem.ts     # Before/after gallery projects
│       ├── panoramaImage.ts   # 360° panorama images
│       ├── blogPost.ts        # Blog articles and vlogs
│       ├── testimonial.ts     # Customer reviews
│       ├── siteSettings.ts    # Global site settings (singleton)
│       └── index.ts           # Schema registry
├── scripts/
│   ├── seed-sanity.mjs        # Seed blog, testimonials, gallery
│   └── seed-panoramas.mjs     # Seed 360° panorama images
├── src/
│   ├── app/
│   │   ├── (site)/            # All public page routes
│   │   ├── icon.png           # Favicon (32x32)
│   │   ├── apple-icon.png     # Apple touch icon (180x180)
│   │   ├── opengraph-image.tsx # Auto-generated OG image with logo
│   │   ├── sitemap.ts         # Dynamic XML sitemap
│   │   ├── robots.ts          # Robots.txt configuration
│   │   └── layout.tsx         # Root layout with metadata
│   ├── components/
│   │   ├── seo/               # Structured data (JSON-LD) components
│   │   ├── gallery/           # Gallery and 360° viewer components
│   │   ├── blog/              # Blog-specific components
│   │   ├── layout/            # Header, Footer, MobileCallButton
│   │   └── ui/                # Shared UI primitives
│   ├── data/                  # Fallback data (used when Sanity isn't configured)
│   └── lib/sanity/            # Sanity client, queries, fetch functions
├── sanity.config.ts           # Sanity Studio configuration
└── .env.local                 # Environment variables (not committed)
```

## Page Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About Atlas Mitigation |
| `/services` | All restoration services |
| `/services/[slug]` | Individual service detail page |
| `/locations` | Service area locations |
| `/locations/[city]` | Individual location page |
| `/gallery` | Before/after gallery + 360° tour thumbnails |
| `/gallery/360/[id]` | Individual 360° panorama viewer page |
| `/blog` | Blog listing with article/vlog filtering |
| `/blog/[slug]` | Individual blog post or vlog |
| `/testimonials` | Customer testimonials |
| `/contact` | Contact form |
| `/studio` | Sanity CMS Studio (admin) |

## SEO

### Metadata & Social Sharing

Every page has complete metadata including:

- **Title** — Unique per-page with template pattern `%s | Atlas Mitigation`
- **Description** — Custom per-page meta descriptions
- **OpenGraph** — Title, description, type, and auto-generated OG image with company logo
- **Twitter Cards** — `summary_large_image` cards on all pages
- **Canonical URLs** — Set on every page to prevent duplicate content
- **Favicon** — Company logo served as `icon.png` (32x32) and `apple-icon.png` (180x180)

### Structured Data (JSON-LD)

| Schema | Component | Deployed On |
|--------|-----------|-------------|
| `LocalBusiness` | `LocalBusinessSchema` | All pages (via site layout) — 15 service areas, 6 services, 24/7 hours |
| `Service` | `ServiceSchema` | Service detail pages |
| `HowTo` | `HowToSchema` | Service detail pages — process steps as rich snippets |
| `FAQ` | `FAQSchema` | Service detail pages |
| `Article` | `ArticleSchema` | Blog post pages |
| `VideoObject` | Inline | Vlog blog posts |
| `BreadcrumbList` | `BreadcrumbSchema` | Service, location, and blog detail pages |
| `Review` / `AggregateRating` | `ReviewSchema` | Homepage, testimonials page |

### Technical SEO

- **Sitemap** — Dynamic `sitemap.ts` generating 40+ URLs (static pages, services, locations, blog posts, panoramas)
- **Robots.txt** — Allows all crawlers, disallows `/studio` and `/api/`, references sitemap
- **ISR** — Blog, gallery, and testimonials pages revalidate every 60 seconds for fresh CMS content
- **Preconnect** — Links for Sanity CDN, Google Maps API, and Google Maps static assets
- **Image optimization** — Next.js Image with AVIF/WebP, quality 85%, responsive sizes

### Local SEO

- **NAP consistency** — Name, Address, Phone consistent across all pages
- **15 service area pages** — Acworth, Marietta, Kennesaw, Woodstock, Canton, Roswell, Alpharetta, Smyrna, Dallas, Decatur, Buckhead, Downtown Atlanta, Conyers (+ Sandy Springs, Atlanta in schema)
- **Google Maps embeds** — Pinned to exact business address (1720 Mars Hill Rd, Acworth, GA 30101)
- **Social profiles** — Facebook, Nextdoor, Yelp linked in schema `sameAs` and site footer

### SEO Files

| File | Description |
|------|-------------|
| `src/app/sitemap.ts` | Dynamic XML sitemap |
| `src/app/robots.ts` | Robots.txt |
| `src/app/opengraph-image.tsx` | Auto-generated OG image (1200x630) with company logo |
| `src/app/icon.png` | Favicon (32x32) |
| `src/app/apple-icon.png` | Apple touch icon (180x180) |
| `src/components/seo/` | All structured data components |

## Sanity CMS

### Studio Sidebar

The Sanity Studio at `/studio` is organized into:

- **Site Settings** — Global site configuration (singleton document)
- **Services** — Restoration service types (water damage, fire damage, mold, etc.)
- **Service Locations** — Metro Atlanta service areas
- **Before/After Gallery** — Before/after image pairs with project details
- **360° Tours** — Equirectangular 360° panorama images from Encircle
- **Blog Posts** — Articles and vlogs (supports Instagram Reel embeds)
- **Testimonials** — Customer reviews and ratings

### Schemas

| Schema | Type | Description |
|--------|------|-------------|
| `service` | Document | Restoration services with process steps and benefits |
| `location` | Document | Service areas with neighborhoods and zip codes |
| `galleryItem` | Document | Before/after image pairs with stats |
| `panoramaImage` | Document | 360° panorama images with service/location refs |
| `blogPost` | Document | Blog articles and vlogs with portable text content and optional Instagram embeds |
| `testimonial` | Document | Customer reviews with ratings and sources |
| `siteSettings` | Document | Singleton for global config (contact, hours, SEO) |

### Data Flow

1. **Sanity configured** — Data is fetched from Sanity CMS via GROQ queries
2. **Sanity not configured** — Fallback data from `src/data/` is used automatically
3. **Sanity fetch fails** — Falls back to local data with a console warning

This is handled by `src/lib/sanity/fetch-with-fallback.ts`.

## 360° Panorama Feature

The 360° virtual tour feature allows clients to explore restoration projects interactively.

### How it works

- **Capture:** 360° equirectangular JPEGs are captured using Encircle (or similar tools)
- **Upload:** Images are uploaded to Sanity via the "360° Tours" section in Studio
- **Display:** The gallery page shows clickable thumbnails; clicking navigates to `/gallery/360/[id]`
- **Viewer:** `PanoramaViewer` component uses `react-photo-sphere-viewer` for pan/zoom interaction
- **Fullscreen:** Built-in fullscreen toggle for immersive viewing
- **Error handling:** React error boundary catches load failures and shows a friendly retry UI

### Key files

- `src/components/gallery/PanoramaViewer.tsx` — Viewer component with error boundary
- `sanity/schemas/panoramaImage.ts` — Sanity schema
- `src/app/(site)/gallery/360/[id]/page.tsx` — Dedicated viewer page
- `src/data/gallery.ts` — `PanoramaImage` type and fallback data

## Vlog Feature

Blog posts support a "Vlog" post type that embeds Instagram Reels directly into the page.

### How it works

- **Create:** In Sanity Studio, create a new Blog Post and set Post Type to "Vlog"
- **Embed:** Paste the Instagram Reel URL (e.g., `https://www.instagram.com/reel/ABC123/`)
- **Content:** Add written content below the embed for SEO (summaries, descriptions, transcripts)
- **Display:** The blog listing page shows vlogs with a "Vlog" badge; the post page renders the Instagram embed above the body text
- **SEO:** VideoObject structured data is automatically added for vlog posts
- **Filtering:** The blog listing page has "All / Articles / Vlogs" tabs for filtering

### Key files

- `src/components/blog/InstagramEmbed.tsx` — Client-side Instagram embed component
- `sanity/schemas/blogPost.ts` — Schema with `postType` and `instagramUrl` fields
- `src/app/(site)/blog/blog-list-client.tsx` — Client component for post type and category filtering
- `src/app/(site)/blog/[slug]/page.tsx` — Vlog post page with embed and VideoObject schema

## Key Components

| Component | Path | Description |
|-----------|------|-------------|
| `InstagramEmbed` | `src/components/blog/InstagramEmbed.tsx` | Responsive Instagram Reel/Post embed for vlogs |
| `Header` | `src/components/layout/Header.tsx` | Site header with navigation |
| `Footer` | `src/components/layout/Footer.tsx` | Site footer with social links (Facebook, Nextdoor, Yelp) |
| `MobileCallButton` | `src/components/layout/MobileCallButton.tsx` | Sticky call button on mobile |
| `BeforeAfterSlider` | `src/components/gallery/BeforeAfterSlider.tsx` | Interactive before/after comparison slider |
| `PanoramaViewer` | `src/components/gallery/PanoramaViewer.tsx` | 360° photo sphere viewer with error boundary and retry |
| `YelpIcon` | `src/components/ui/yelp-icon.tsx` | Yelp brand icon |
| `NextdoorIcon` | `src/components/ui/nextdoor-icon.tsx` | Nextdoor brand icon |

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Start development server |
| Build | `npm run build` | Production build |
| Start | `npm start` | Start production server |
| Lint | `npm run lint` | Run ESLint |
| Validate schemas | `npm run validate-schemas` | Validate Sanity schemas |
| Seed content | `node scripts/seed-sanity.mjs` | Seed blog posts, testimonials, gallery items |
| Seed panoramas | `node scripts/seed-panoramas.mjs` | Seed 360° panorama images |

## Deployment

The project is deployed on Vercel at `atlasmitigation.com`:

```bash
npm run build
```

Static pages are pre-rendered at build time. Dynamic routes (`/blog`, `/gallery`, `/testimonials`) use ISR with 60-second revalidation. The Sanity Studio is embedded and accessible at `/studio` in production.

### Google Maps

All embedded Google Maps iframes use the exact business address (`1720 Mars Hill Rd, Acworth, GA 30101`) to avoid displaying competitor businesses in search results.

### Google Business Profile

To appear in Google's local business results (map pack), set up a Google Business Profile at https://business.google.com with matching NAP data. Once verified, add the Google Search Console verification code to `src/app/layout.tsx` under `verification.google`.
