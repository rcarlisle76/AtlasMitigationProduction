# Quick Reference Guide - Performance Optimizations

## Using Optimized Components

### OptimizedImage Component

```tsx
// Import
import { OptimizedImage } from "@/components/ui/optimized-image"

// Above-fold image (loads immediately)
<OptimizedImage
  src="/hero-image.jpg"
  alt="Emergency restoration services"
  width={1920}
  height={1080}
  priority={true}
/>

// Below-fold image (lazy loaded)
<OptimizedImage
  src="/gallery-item.jpg"
  alt="Water damage restoration"
  width={800}
  height={600}
  priority={false}
/>

// Responsive fill image
<div className="relative aspect-video">
  <OptimizedImage
    src="/project-banner.jpg"
    alt="Completed restoration project"
    fill={true}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

### Skeleton Loaders

```tsx
// Import
import { GalleryItemSkeleton, BlogPostSkeleton, CardSkeleton } from "@/components/ui/skeleton"

// Gallery loading state
{isLoading ? (
  <GalleryItemSkeleton />
) : (
  <GalleryItem {...project} />
)}

// Blog loading state
{isLoading ? (
  <BlogPostSkeleton />
) : (
  <BlogPost {...post} />
)}

// Generic card loading
{isLoading ? (
  <CardSkeleton />
) : (
  <ServiceCard {...service} />
)}

// Multiple skeleton items
{isLoading && (
  <>
    {[...Array(6)].map((_, idx) => (
      <GalleryItemSkeleton key={idx} />
    ))}
  </>
)}
```

### Lazy Loading Sections

```tsx
// Import dynamic
import dynamic from "next/dynamic"

// Create lazy-loaded component
const HeavySection = dynamic(
  () => import("@/components/HeavySection").then(mod => ({
    default: mod.HeavySection
  })),
  { ssr: false } // Disable server-side rendering
)

// Use in component
export default function Page() {
  return (
    <>
      <AboveFoldContent />
      <HeavySection /> {/* Loads only when needed */}
    </>
  )
}
```

## Common Patterns

### Image in Card with Loading State

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Card, CardContent } from "@/components/ui/card"

<Card>
  <OptimizedImage
    src="/project.jpg"
    alt="Restoration project"
    width={600}
    height={400}
    className="rounded-t-lg"
  />
  <CardContent>
    <h3>Project Title</h3>
    <p>Description</p>
  </CardContent>
</Card>
```

### Gallery Grid with Skeletons

```tsx
const [isLoading, setIsLoading] = useState(true)

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {isLoading ? (
    <>
      {[...Array(6)].map((_, i) => (
        <GalleryItemSkeleton key={i} />
      ))}
    </>
  ) : (
    projects.map(project => (
      <GalleryCard key={project.id} {...project} />
    ))
  )}
</div>
```

### Hero Image (Priority Loading)

```tsx
<section className="relative h-[600px]">
  <OptimizedImage
    src="/hero-background.jpg"
    alt="Atlas Mitigation hero"
    fill={true}
    priority={true}
    className="object-cover"
    sizes="100vw"
  />
  <div className="relative z-10">
    {/* Hero content */}
  </div>
</section>
```

## Performance Checklist

### When Adding New Images:
- [ ] Use OptimizedImage component
- [ ] Set priority={true} for above-fold images
- [ ] Set priority={false} for below-fold images
- [ ] Provide explicit width/height or use fill
- [ ] Use descriptive alt text
- [ ] Choose appropriate sizes prop

### When Adding New Sections:
- [ ] Consider lazy loading if below-fold
- [ ] Add skeleton loader if content loads dynamically
- [ ] Test on mobile and desktop
- [ ] Verify no layout shift occurs

### Before Deployment:
- [ ] Run `npm run build` successfully
- [ ] Test Lighthouse score (aim for 90+)
- [ ] Check Core Web Vitals
- [ ] Verify mobile performance
- [ ] Test on slow 3G connection
- [ ] Check bundle size

## Component Import Paths

```tsx
// UI Components
import { OptimizedImage } from "@/components/ui/optimized-image"
import { Skeleton, CardSkeleton, BlogPostSkeleton, GalleryItemSkeleton } from "@/components/ui/skeleton"
import { Button, Card, Badge } from "@/components/ui"

// Home Sections
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection"
```

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Performance Testing

```bash
# 1. Build for production
npm run build

# 2. Start production server
npm start

# 3. Open http://localhost:3000 in Chrome
# 4. Open DevTools (F12)
# 5. Go to Lighthouse tab
# 6. Run audit
```

## Key Metrics to Monitor

- **LCP (Largest Contentful Paint)**: < 2.5s ✅
- **FID (First Input Delay)**: < 100ms ✅
- **CLS (Cumulative Layout Shift)**: < 0.1 ✅
- **FCP (First Contentful Paint)**: < 1.8s ✅
- **TTI (Time to Interactive)**: < 3.8s ✅

## Tips

1. **Always use OptimizedImage** instead of `<img>` or raw Next.js Image
2. **Set priority={true} only for above-fold images** to avoid wasting bandwidth
3. **Use skeleton loaders** for any content that might take time to load
4. **Lazy load heavy sections** that appear below the fold
5. **Test on mobile** - mobile performance is often the bottleneck
6. **Monitor bundle size** - keep initial JS bundle under 200KB

## Troubleshooting

### Image not loading?
- Check file path is correct
- Verify image exists in public folder
- Check console for errors
- Ensure width/height or fill is specified

### Section not lazy loading?
- Verify dynamic import syntax
- Check component is exported correctly
- Ensure ssr: false is set if needed

### Build failing?
- Check for TypeScript errors
- Verify all imports are correct
- Run `npm run lint` to find issues

## Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)
- [next/font Documentation](https://nextjs.org/docs/app/api-reference/components/font)
- [Dynamic Imports](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- [Web.dev Performance Guide](https://web.dev/performance/)
