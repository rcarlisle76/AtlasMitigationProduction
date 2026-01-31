import { groq } from "next-sanity"

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    logo,
    contactInfo,
    businessHours,
    socialMedia,
    seo,
    trustBadges,
    emergencyCTA
  }
`

// Services
export const allServicesQuery = groq`
  *[_type == "service"] | order(featured desc, title asc) {
    _id,
    title,
    slug,
    excerpt,
    icon,
    featured,
    emergency,
    image,
    targetMarket
  }
`

export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(title asc) {
    _id,
    title,
    slug,
    excerpt,
    icon,
    emergency,
    image
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    description,
    icon,
    featured,
    emergency,
    processSteps,
    benefits,
    image,
    targetMarket,
    seo,
    "relatedGalleryItems": *[_type == "galleryItem" && references(^._id)] | order(featured desc) [0...4] {
      _id,
      title,
      beforeImage,
      afterImage,
      description
    }
  }
`

// Locations
export const allLocationsQuery = groq`
  *[_type == "location"] | order(featured desc, city asc) {
    _id,
    city,
    slug,
    state,
    county,
    featured,
    responseTime,
    projectsCompleted,
    image
  }
`

export const featuredLocationsQuery = groq`
  *[_type == "location" && featured == true] | order(city asc) {
    _id,
    city,
    slug,
    state,
    county,
    responseTime,
    image
  }
`

export const locationBySlugQuery = groq`
  *[_type == "location" && slug.current == $slug][0] {
    _id,
    city,
    slug,
    state,
    county,
    zipCodes,
    neighborhoods,
    description,
    services[]-> {
      _id,
      title,
      slug,
      excerpt,
      icon
    },
    responseTime,
    projectsCompleted,
    featured,
    image,
    seo,
    "testimonials": *[_type == "testimonial" && references(^._id)] | order(rating desc) [0...3] {
      _id,
      customerName,
      rating,
      quote
    },
    "galleryItems": *[_type == "galleryItem" && references(^._id)] | order(featured desc) [0...4] {
      _id,
      title,
      beforeImage,
      afterImage
    }
  }
`

// Gallery Items
export const allGalleryItemsQuery = groq`
  *[_type == "galleryItem"] | order(featured desc, completionDate desc) {
    _id,
    title,
    service-> {
      _id,
      title,
      slug
    },
    location-> {
      _id,
      city
    },
    beforeImage,
    afterImage,
    description,
    featured,
    completionDate,
    stats,
    propertyType
  }
`

export const featuredGalleryItemsQuery = groq`
  *[_type == "galleryItem" && featured == true] | order(completionDate desc) [0...6] {
    _id,
    title,
    service-> {
      title,
      slug
    },
    beforeImage,
    afterImage,
    description,
    propertyType
  }
`

// Blog Posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    featuredImage,
    category,
    featured
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    content,
    featuredImage,
    category,
    relatedServices[]-> {
      _id,
      title,
      slug
    },
    seo,
    "relatedPosts": *[_type == "blogPost" && slug.current != $slug && category == ^.category] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      publishedAt,
      featuredImage
    }
  }
`

export const recentBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    featuredImage,
    category
  }
`

// Testimonials
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] | order(featured desc, rating desc) {
    _id,
    customerName,
    company,
    service-> {
      title
    },
    location-> {
      city
    },
    rating,
    quote,
    featured,
    date,
    verified,
    source,
    image
  }
`

export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] | order(rating desc) [0...6] {
    _id,
    customerName,
    company,
    service-> {
      title
    },
    location-> {
      city
    },
    rating,
    quote,
    verified,
    source
  }
`
