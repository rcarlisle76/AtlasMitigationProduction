import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

// Type for Sanity image source
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0]

export const projectId = "prkqtff7"
export const dataset = "production"
export const apiVersion = "2024-01-01"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper to fetch data with caching
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === "production" ? 60 : 0,
      tags,
    },
  })
}
