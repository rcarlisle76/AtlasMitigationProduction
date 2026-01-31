import type { Metadata } from "next"
import GalleryPageClient from "./gallery-client"
import { getAllGalleryItems } from "@/lib/sanity/fetch-with-fallback"

export const metadata: Metadata = {
  title: "Restoration Project Gallery",
  description:
    "View before and after photos of our restoration projects in Acworth, Marietta, Kennesaw and metro Atlanta. Water damage, fire damage, mold remediation results. Call (404) 808-3677.",
  openGraph: {
    title: "Restoration Project Gallery | Atlas Mitigation",
    description:
      "See real before and after results from our restoration projects throughout metro Atlanta. Quality workmanship and complete property restoration.",
  },
}

export default async function GalleryPage() {
  const galleryProjects = await getAllGalleryItems()
  return <GalleryPageClient projects={galleryProjects} />
}
