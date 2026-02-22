import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PanoramaViewer } from "@/components/gallery/PanoramaViewer"
import { getPanoramaImageById, getAllPanoramaImages } from "@/lib/sanity/fetch-with-fallback"

interface PanoramaPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PanoramaPageProps): Promise<Metadata> {
  const { id } = await params
  const panorama = await getPanoramaImageById(id)

  if (!panorama) {
    return { title: "360° Tour Not Found" }
  }

  return {
    title: `${panorama.title} — 360° Virtual Tour`,
    description:
      panorama.description ||
      `Explore this ${panorama.serviceTitle || "restoration"} project in immersive 360°. Atlas Mitigation — Call (404) 808-3677.`,
  }
}

export async function generateStaticParams() {
  const panoramas = await getAllPanoramaImages()
  return panoramas.map((p) => ({ id: p.id }))
}

export default async function PanoramaPage({ params }: PanoramaPageProps) {
  const { id } = await params
  const panorama = await getPanoramaImageById(id)

  if (!panorama) {
    notFound()
  }

  return (
    <>
      {/* Header bar */}
      <section className="border-b bg-white py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/gallery" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Gallery
              </Link>
            </Button>
          </div>
          <Button variant="emergency" size="sm" asChild>
            <a href="tel:+14048083677" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (404) 808-3677
            </a>
          </Button>
        </div>
      </section>

      {/* Title section */}
      <section className="bg-atlas-secondary py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-white/20 text-white">360° Tour</Badge>
            {panorama.serviceTitle && (
              <Badge variant="secondary">{panorama.serviceTitle}</Badge>
            )}
            {panorama.locationCity && (
              <span className="text-sm text-white/70">
                {panorama.locationCity}, GA
              </span>
            )}
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {panorama.title}
          </h1>
          {panorama.description && (
            <p className="mt-2 max-w-3xl text-white/80">
              {panorama.description}
            </p>
          )}
        </div>
      </section>

      {/* 360° Viewer */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PanoramaViewer
            src={panorama.panoramaImageUrl}
            caption={panorama.caption}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-atlas-primary py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need Restoration Services?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Contact us for a free estimate or 24/7 emergency service.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="emergency"
              size="lg"
              className="bg-white text-atlas-primary hover:bg-white/90"
              asChild
            >
              <a href="tel:+14048083677" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (404) 808-3677
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary"
              asChild
            >
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
