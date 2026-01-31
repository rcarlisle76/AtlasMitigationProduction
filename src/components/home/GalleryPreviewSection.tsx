"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  { title: "Water Damage Restoration", location: "Acworth, GA" },
  { title: "Fire Damage Restoration", location: "Marietta, GA" },
  { title: "Mold Remediation", location: "Kennesaw, GA" },
]

export function GalleryPreviewSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Work Speaks for Itself
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See the dramatic transformations we&apos;ve achieved for our clients.
            From devastating damage to complete restoration.
          </p>
        </div>

        {/* Gallery placeholders - will be replaced with actual before/after images */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              {/* Placeholder for before/after slider */}
              <div className="relative aspect-[4/3] bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="text-sm font-medium">Before / After</div>
                    <div className="text-xs">Image Placeholder</div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
