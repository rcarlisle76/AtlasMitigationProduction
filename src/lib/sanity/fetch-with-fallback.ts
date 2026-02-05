import { client, urlFor } from "./client"
import {
  allBlogPostsQuery,
  blogPostBySlugQuery,
  recentBlogPostsQuery,
  allGalleryItemsQuery,
  allTestimonialsQuery,
  featuredTestimonialsQuery,
} from "./queries"

// Import local data as fallbacks
import { blogPosts, getRecentPosts, defaultAuthor, type BlogPost, type BlogAuthor } from "@/data/blog-posts"
import { galleryProjects, type GalleryProject } from "@/data/gallery"
import { testimonials, type Testimonial } from "@/data/testimonials"

// Check if Sanity is configured
const isSanityConfigured = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return projectId && projectId !== "your-project-id"
}

// Blog Posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured()) {
    return blogPosts
  }

  try {
    const sanityPosts = await client.fetch(allBlogPostsQuery)
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.map(transformSanityBlogPost)
    }
    return blogPosts
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return blogPosts
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // First check local data
  const localPost = blogPosts.find((post) => post.slug === slug)

  if (!isSanityConfigured()) {
    return localPost || null
  }

  try {
    const sanityPost = await client.fetch(blogPostBySlugQuery, { slug })
    if (sanityPost) {
      return transformSanityBlogPost(sanityPost)
    }
    return localPost || null
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return localPost || null
  }
}

export async function getRecentBlogPosts(count: number = 5): Promise<BlogPost[]> {
  if (!isSanityConfigured()) {
    return getRecentPosts(count)
  }

  try {
    const sanityPosts = await client.fetch(recentBlogPostsQuery)
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.slice(0, count).map(transformSanityBlogPost)
    }
    return getRecentPosts(count)
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return getRecentPosts(count)
  }
}

// Gallery Items
export async function getAllGalleryItems(): Promise<GalleryProject[]> {
  if (!isSanityConfigured()) {
    return galleryProjects
  }

  try {
    const sanityItems = await client.fetch(allGalleryItemsQuery)
    if (sanityItems && sanityItems.length > 0) {
      return sanityItems.map(transformSanityGalleryItem)
    }
    return galleryProjects
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return galleryProjects
  }
}

// Testimonials
export async function getAllTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) {
    return testimonials
  }

  try {
    const sanityTestimonials = await client.fetch(allTestimonialsQuery)
    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map(transformSanityTestimonial)
    }
    return testimonials
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return testimonials
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) {
    return testimonials.slice(0, 6)
  }

  try {
    const sanityTestimonials = await client.fetch(featuredTestimonialsQuery)
    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map(transformSanityTestimonial)
    }
    return testimonials.slice(0, 6)
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local data:", error)
    return testimonials.slice(0, 6)
  }
}

// Map Sanity categories to local BlogCategory types
const sanityCategoryMap: Record<string, BlogPost["category"]> = {
  "water-damage": "water-damage",
  "fire-damage": "fire-damage",
  "mold": "mold",
  "insurance": "insurance",
  "prevention": "prevention",
  "restoration-tips": "restoration-tips",
  // Map Sanity-only categories to appropriate local categories
  "tips": "restoration-tips",
  "emergency": "prevention",
  "news": "restoration-tips",
  "case-studies": "restoration-tips",
}

// Transform functions to convert Sanity data to local format
function transformSanityBlogPost(sanityPost: any): BlogPost {
  // Map Sanity category to valid local category, defaulting to "restoration-tips"
  const mappedCategory = sanityPost.category
    ? sanityCategoryMap[sanityPost.category] || "restoration-tips"
    : "restoration-tips"

  // Transform author to BlogAuthor object
  const author: BlogAuthor = sanityPost.author
    ? typeof sanityPost.author === "string"
      ? { name: sanityPost.author, role: "Restoration Expert" }
      : {
          name: sanityPost.author.name || defaultAuthor.name,
          role: sanityPost.author.role || defaultAuthor.role,
          image: sanityPost.author.image,
        }
    : defaultAuthor

  return {
    slug: sanityPost.slug?.current || sanityPost.slug,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt || "",
    category: mappedCategory,
    author,
    datePublished: sanityPost.publishedAt
      ? new Date(sanityPost.publishedAt).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    readTime: estimateReadTime(sanityPost.content),
    content: sanityPost.content || [],
    metaDescription:
      sanityPost.seo?.metaDescription || sanityPost.excerpt || "",
    metaTitle: sanityPost.seo?.metaTitle || sanityPost.title,
  }
}

// Map service types to sample image numbers
const serviceTypeImageMap: Record<string, number> = {
  "water-damage": 1,
  "fire-damage": 2,
  "mold": 3,
  "storm-damage": 4,
  "smoke-damage": 2,
}

// Detect service type from title if not explicitly set
function detectServiceTypeFromTitle(title: string): string {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("water") || lowerTitle.includes("flood")) return "water-damage"
  if (lowerTitle.includes("fire")) return "fire-damage"
  if (lowerTitle.includes("mold")) return "mold"
  if (lowerTitle.includes("storm") || lowerTitle.includes("wind") || lowerTitle.includes("roof")) return "storm-damage"
  if (lowerTitle.includes("smoke")) return "smoke-damage"
  return "water-damage"
}

function transformSanityGalleryItem(sanityItem: any): GalleryProject {
  // Try to get service from reference, otherwise detect from title
  const serviceSlug = sanityItem.service?.slug?.current || detectServiceTypeFromTitle(sanityItem.title || "")
  const imageNum = serviceTypeImageMap[serviceSlug] || 1

  // Determine fallback images based on service type
  const serviceFallbackMap: Record<string, string> = {
    "water-damage": "water-damage",
    "fire-damage": "fire-damage",
    "mold": "mold",
    "storm-damage": "storm-damage",
    "smoke-damage": "fire-damage",
  }
  const fallbackType = serviceFallbackMap[serviceSlug] || "water-damage"

  // Convert Sanity image references to URLs
  const beforeImageUrl = sanityItem.beforeImage?.asset
    ? urlFor(sanityItem.beforeImage).width(800).height(600).url()
    : `/gallery/before-${fallbackType}-${imageNum}.jpg`

  const afterImageUrl = sanityItem.afterImage?.asset
    ? urlFor(sanityItem.afterImage).width(800).height(600).url()
    : `/gallery/after-${fallbackType}-${imageNum}.jpg`

  return {
    id: sanityItem._id,
    slug: sanityItem.slug?.current || sanityItem._id,
    title: sanityItem.title,
    serviceType: serviceSlug,
    propertyType: sanityItem.propertyType || "residential",
    location: sanityItem.location?.city
      ? `${sanityItem.location.city}, GA`
      : "Atlanta, GA",
    description: sanityItem.description || "",
    completionDate: sanityItem.completionDate
      ? new Date(sanityItem.completionDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    duration: sanityItem.stats?.duration || "3-5 days",
    stats: [
      { label: "Area", value: sanityItem.stats?.area || "N/A" },
      { label: "Duration", value: sanityItem.stats?.duration || "N/A" },
      { label: "Completion", value: sanityItem.stats?.timeToComplete || "N/A" },
    ],
    beforeImage: beforeImageUrl,
    afterImage: afterImageUrl,
  }
}

function transformSanityTestimonial(sanityTestimonial: any): Testimonial {
  return {
    name: sanityTestimonial.customerName,
    location: sanityTestimonial.location?.city
      ? `${sanityTestimonial.location.city}, GA`
      : "Atlanta, GA",
    service: sanityTestimonial.service?.title || "Restoration",
    rating: sanityTestimonial.rating || 5,
    text: sanityTestimonial.quote,
    datePublished: sanityTestimonial.date
      ? new Date(sanityTestimonial.date).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  }
}

function estimateReadTime(content: any[]): number {
  if (!content || !Array.isArray(content)) return 5

  // Estimate based on portable text blocks
  const text = content
    .filter((block) => block._type === "block")
    .map((block) => block.children?.map((c: any) => c.text).join(" ") || "")
    .join(" ")

  const wordCount = text.split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / 200))
}
