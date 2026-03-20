import type { MetadataRoute } from "next"
import { getAllBlogPosts, getAllPanoramaImages } from "@/lib/sanity/fetch-with-fallback"
import { services } from "@/data/services"
import { locations } from "@/data/locations"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://atlasmitigation.com"

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/locations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ]

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Location pages
  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Blog posts (from Sanity with fallback)
  const blogPosts = await getAllBlogPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.slug !== "test")
    .map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.datePublished ? new Date(post.datePublished) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Panorama pages
  const panoramas = await getAllPanoramaImages()
  const panoramaPages: MetadataRoute.Sitemap = panoramas.map((pano) => ({
    url: `${baseUrl}/gallery/360/${pano.id}`,
    lastModified: pano.captureDate ? new Date(pano.captureDate) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...staticPages, ...servicePages, ...locationPages, ...blogPages, ...panoramaPages]
}
