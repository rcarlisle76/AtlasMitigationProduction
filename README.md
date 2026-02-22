# Atlas Mitigation

Professional property restoration website for Atlas Mitigation, serving metro Atlanta (Acworth, Marietta, Kennesaw, Roswell, and surrounding areas). Features before/after project galleries, 360° virtual tours, blog, testimonials, and a Sanity CMS for content management.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity v5 (embedded Studio at `/studio`)
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI, Lucide icons, class-variance-authority
- **360° Viewer:** react-photo-sphere-viewer
- **Language:** TypeScript
- **Deployment:** Vercel

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
├── public/                    # Static assets (images, gallery photos)
├── sanity/
│   └── schemas/               # Sanity document type schemas
│       ├── service.ts         # Restoration service types
│       ├── location.ts        # Service area locations
│       ├── galleryItem.ts     # Before/after gallery projects
│       ├── panoramaImage.ts   # 360° panorama images
│       ├── blogPost.ts        # Blog articles
│       ├── testimonial.ts     # Customer reviews
│       ├── siteSettings.ts    # Global site settings (singleton)
│       └── index.ts           # Schema registry
├── scripts/
│   ├── seed-sanity.mjs        # Seed blog, testimonials, gallery
│   └── seed-panoramas.mjs     # Seed 360° panorama images
├── src/
│   ├── app/(site)/            # All public page routes
│   ├── components/            # Reusable UI components
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
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/testimonials` | Customer testimonials |
| `/contact` | Contact form |
| `/studio` | Sanity CMS Studio (admin) |

## Sanity CMS

### Studio Sidebar

The Sanity Studio at `/studio` is organized into:

- **Site Settings** — Global site configuration (singleton document)
- **Services** — Restoration service types (water damage, fire damage, mold, etc.)
- **Service Locations** — Metro Atlanta service areas
- **Before/After Gallery** — Before/after image pairs with project details
- **360° Tours** — Equirectangular 360° panorama images from Encircle
- **Blog Posts** — Articles and guides
- **Testimonials** — Customer reviews and ratings

### Schemas

| Schema | Type | Description |
|--------|------|-------------|
| `service` | Document | Restoration services with process steps and benefits |
| `location` | Document | Service areas with neighborhoods and zip codes |
| `galleryItem` | Document | Before/after image pairs with stats |
| `panoramaImage` | Document | 360° panorama images with service/location refs |
| `blogPost` | Document | Blog articles with portable text content |
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

### Key files

- `src/components/gallery/PanoramaViewer.tsx` — Viewer component
- `sanity/schemas/panoramaImage.ts` — Sanity schema
- `src/app/(site)/gallery/360/[id]/page.tsx` — Dedicated viewer page
- `src/data/gallery.ts` — `PanoramaImage` type and fallback data

## Key Components

| Component | Path | Description |
|-----------|------|-------------|
| `Header` | `src/components/layout/Header.tsx` | Site header with navigation |
| `Footer` | `src/components/layout/Footer.tsx` | Site footer |
| `MobileCallButton` | `src/components/layout/MobileCallButton.tsx` | Sticky call button on mobile |
| `BeforeAfterSlider` | `src/components/gallery/BeforeAfterSlider.tsx` | Interactive before/after comparison slider |
| `PanoramaViewer` | `src/components/gallery/PanoramaViewer.tsx` | 360° photo sphere viewer |

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

The project is configured for deployment on Vercel:

```bash
npm run build
```

Static pages are pre-rendered at build time. Dynamic routes (`/blog`, `/studio`) are server-rendered on demand. The Sanity Studio is embedded and accessible at `/studio` in production.
