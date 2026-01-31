import { client } from "./client"
import {
  allBlogPostsQuery,
  blogPostBySlugQuery,
  recentBlogPostsQuery,
  allGalleryItemsQuery,
  allTestimonialsQuery,
  featuredTestimonialsQuery,
} from "./queries"

// Import local data as fallbacks
import { blogPosts, getRecentPosts, type BlogPost } from "@/data/blog-posts"
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

// Transform functions to convert Sanity data to local format
function transformSanityBlogPost(sanityPost: any): BlogPost {
  return {
    slug: sanityPost.slug?.current || sanityPost.slug,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt || "",
    category: sanityPost.category || "tips",
    author: sanityPost.author || "Atlas Mitigation Team",
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

function transformSanityGalleryItem(sanityItem: any): GalleryProject {
  return {
    id: sanityItem._id,
    slug: sanityItem.slug?.current || sanityItem._id,
    title: sanityItem.title,
    serviceType: sanityItem.service?.slug?.current || "water-damage",
    propertyType: sanityItem.propertyType || "residential",
    location: sanityItem.location?.city
      ? `${sanityItem.location.city}, GA`
      : "Atlanta, GA",
    description: sanityItem.description || "",
    completionDate: sanityItem.completionDate
      ? new Date(sanityItem.completionDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    duration: sanityItem.duration || "3-5 days",
    stats: sanityItem.stats || [
      { label: "Area", value: "N/A" },
      { label: "Duration", value: "N/A" },
      { label: "Rating", value: "5.0" },
    ],
    beforeImage: sanityItem.beforeImage || "/gallery/before-placeholder.jpg",
    afterImage: sanityItem.afterImage || "/gallery/after-placeholder.jpg",
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
