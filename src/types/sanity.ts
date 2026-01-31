import type { PortableTextBlock } from "@portabletext/types"

// Base types
export interface SanityImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanitySlug {
  _type: "slug"
  current: string
}

export interface SanityReference {
  _ref: string
  _type: "reference"
}

// Service
export interface Service {
  _id: string
  title: string
  slug: SanitySlug
  excerpt: string
  description?: PortableTextBlock[]
  icon?: string
  featured: boolean
  emergency: boolean
  processSteps?: ProcessStep[]
  benefits?: string[]
  image?: SanityImage
  targetMarket?: string[]
  seo?: SEOSettings
  relatedGalleryItems?: GalleryItem[]
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

// Location
export interface Location {
  _id: string
  city: string
  slug: SanitySlug
  state: string
  county?: string
  zipCodes?: string[]
  neighborhoods?: string[]
  description?: PortableTextBlock[]
  services?: Service[]
  responseTime?: string
  projectsCompleted?: number
  featured: boolean
  image?: SanityImage
  seo?: SEOSettings
  testimonials?: Testimonial[]
  galleryItems?: GalleryItem[]
}

// Gallery Item
export interface GalleryItem {
  _id: string
  title: string
  service?: {
    _id: string
    title: string
    slug: SanitySlug
  }
  location?: {
    _id: string
    city: string
  }
  beforeImage: SanityImage
  afterImage: SanityImage
  description?: string
  featured: boolean
  completionDate?: string
  stats?: {
    duration?: string
    area?: string
    timeToComplete?: string
  }
  propertyType?: string
}

// Blog Post
export interface BlogPost {
  _id: string
  title: string
  slug: SanitySlug
  author: string
  publishedAt: string
  excerpt?: string
  content?: PortableTextBlock[]
  featuredImage?: SanityImage
  category?: string
  relatedServices?: Service[]
  featured: boolean
  seo?: SEOSettings
  relatedPosts?: BlogPost[]
}

// Testimonial
export interface Testimonial {
  _id: string
  customerName: string
  company?: string
  service?: {
    title: string
  }
  location?: {
    city: string
  }
  rating: number
  quote: string
  featured: boolean
  date?: string
  verified: boolean
  source?: string
  image?: SanityImage
}

// Site Settings
export interface SiteSettings {
  siteName: string
  tagline?: string
  logo?: SanityImage
  contactInfo: {
    phone: string
    email?: string
    address: string
    city: string
    state: string
    zipCode: string
  }
  businessHours: {
    emergency: string
    office: string
  }
  socialMedia?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    google?: string
  }
  seo?: SEOSettings
  trustBadges?: TrustBadge[]
  emergencyCTA?: {
    headline: string
    subheadline: string
    buttonText: string
  }
}

export interface TrustBadge {
  name: string
  image: SanityImage
}

// SEO
export interface SEOSettings {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  focusKeyword?: string
}
