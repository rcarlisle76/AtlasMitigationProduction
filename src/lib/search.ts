import { services, type Service } from "@/data/services"
import { locations, type Location } from "@/data/locations"
import { blogPosts, type BlogPost } from "@/data/blog-posts"

export type SearchResultType = "service" | "location" | "blog"

export interface SearchResult {
  type: SearchResultType
  title: string
  excerpt: string
  url: string
  matchedText?: string
}

function truncateText(text: string, query: string, maxLength: number = 150): string {
  const lowerText = text.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const index = lowerText.indexOf(lowerQuery)

  if (index === -1 || text.length <= maxLength) {
    return text.substring(0, maxLength)
  }

  // Try to center the match
  const start = Math.max(0, index - Math.floor(maxLength / 2))
  const end = Math.min(text.length, start + maxLength)

  let excerpt = text.substring(start, end)
  if (start > 0) excerpt = "..." + excerpt
  if (end < text.length) excerpt = excerpt + "..."

  return excerpt
}

function searchServices(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase()

  return services
    .filter((service) => {
      return (
        service.title.toLowerCase().includes(lowerQuery) ||
        service.excerpt.toLowerCase().includes(lowerQuery) ||
        service.description.toLowerCase().includes(lowerQuery)
      )
    })
    .map((service) => {
      // Find which field matched
      let matchedText = ""
      if (service.title.toLowerCase().includes(lowerQuery)) {
        matchedText = service.title
      } else if (service.excerpt.toLowerCase().includes(lowerQuery)) {
        matchedText = truncateText(service.excerpt, query)
      } else {
        matchedText = truncateText(service.description, query)
      }

      return {
        type: "service" as const,
        title: service.title,
        excerpt: service.excerpt,
        url: `/services/${service.slug}`,
        matchedText,
      }
    })
}

function searchLocations(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase()

  return locations
    .filter((location) => {
      return (
        location.city.toLowerCase().includes(lowerQuery) ||
        location.county.toLowerCase().includes(lowerQuery) ||
        location.neighborhoods.some((n) => n.toLowerCase().includes(lowerQuery)) ||
        location.description.toLowerCase().includes(lowerQuery) ||
        location.zipCodes.some((z) => z.includes(query))
      )
    })
    .map((location) => {
      // Find which field matched
      let matchedText = ""
      if (location.city.toLowerCase().includes(lowerQuery)) {
        matchedText = `${location.city}, ${location.state} - ${location.county}`
      } else if (location.neighborhoods.some((n) => n.toLowerCase().includes(lowerQuery))) {
        const matchedNeighborhood = location.neighborhoods.find((n) =>
          n.toLowerCase().includes(lowerQuery)
        )
        matchedText = `Serving ${matchedNeighborhood} in ${location.city}`
      } else {
        matchedText = truncateText(location.description, query)
      }

      return {
        type: "location" as const,
        title: `${location.city}, ${location.state}`,
        excerpt: location.description.substring(0, 150),
        url: `/locations/${location.slug}`,
        matchedText,
      }
    })
}

function searchBlogPosts(query: string): SearchResult[] {
  const lowerQuery = query.toLowerCase()

  // Helper to get content as string for searching
  const getContentAsString = (content: string | any[]): string => {
    if (typeof content === "string") return content
    // For portable text, extract text from blocks
    return content
      .filter((block: any) => block._type === "block")
      .map((block: any) => block.children?.map((c: any) => c.text).join(" ") || "")
      .join(" ")
  }

  return blogPosts
    .filter((post) => {
      const contentStr = getContentAsString(post.content)
      return (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        contentStr.toLowerCase().includes(lowerQuery)
      )
    })
    .map((post) => {
      const contentStr = getContentAsString(post.content)
      // Find which field matched
      let matchedText = ""
      if (post.title.toLowerCase().includes(lowerQuery)) {
        matchedText = post.title
      } else if (post.excerpt.toLowerCase().includes(lowerQuery)) {
        matchedText = truncateText(post.excerpt, query)
      } else {
        matchedText = truncateText(contentStr, query, 200)
      }

      return {
        type: "blog" as const,
        title: post.title,
        excerpt: post.excerpt,
        url: `/blog/${post.slug}`,
        matchedText,
      }
    })
}

export interface GroupedSearchResults {
  services: SearchResult[]
  locations: SearchResult[]
  blog: SearchResult[]
  total: number
}

export function searchSite(query: string): GroupedSearchResults {
  if (!query || query.trim().length < 2) {
    return {
      services: [],
      locations: [],
      blog: [],
      total: 0,
    }
  }

  const trimmedQuery = query.trim()

  const services = searchServices(trimmedQuery)
  const locations = searchLocations(trimmedQuery)
  const blog = searchBlogPosts(trimmedQuery)

  return {
    services,
    locations,
    blog,
    total: services.length + locations.length + blog.length,
  }
}
