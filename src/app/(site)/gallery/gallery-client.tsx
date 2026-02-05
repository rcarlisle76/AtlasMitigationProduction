"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BeforeAfterSlider } from "@/components/gallery/BeforeAfterSlider"
import { type GalleryProject } from "@/data/gallery"

const serviceTypeLabels: Record<string, string> = {
  all: "All Projects",
  "water-damage": "Water Damage",
  "fire-damage": "Fire Damage",
  mold: "Mold Remediation",
  "smoke-damage": "Smoke Damage",
  "storm-damage": "Storm Damage",
}

const serviceTypeColors: Record<
  string,
  "default" | "secondary" | "destructive" | "outline" | "emergency" | "success"
> = {
  "water-damage": "default",
  "fire-damage": "destructive",
  mold: "secondary",
  "smoke-damage": "outline",
  "storm-damage": "emergency",
}

interface GalleryPageClientProps {
  projects: GalleryProject[]
}

export default function GalleryPageClient({ projects }: GalleryPageClientProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(
    null
  )
  const galleryRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.serviceType === selectedFilter)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Restoration Project Gallery
            </h1>
            <p className="mt-6 text-lg text-white/80">
              See real before and after results from our restoration projects
              throughout metro Atlanta. Every project showcases our commitment
              to quality workmanship and complete property restoration.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="emergency" size="lg" asChild>
                <a href="tel:+14048083677" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  (404) 808-3677
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-secondary"
                asChild
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
              className="rounded-full"
            >
              All Projects
            </Button>
            <Button
              variant={
                selectedFilter === "water-damage" ? "default" : "outline"
              }
              onClick={() => setSelectedFilter("water-damage")}
              className="rounded-full"
            >
              Water Damage
            </Button>
            <Button
              variant={selectedFilter === "fire-damage" ? "default" : "outline"}
              onClick={() => setSelectedFilter("fire-damage")}
              className="rounded-full"
            >
              Fire Damage
            </Button>
            <Button
              variant={selectedFilter === "mold" ? "default" : "outline"}
              onClick={() => setSelectedFilter("mold")}
              className="rounded-full"
            >
              Mold
            </Button>
            <Button
              variant={
                selectedFilter === "smoke-damage" ? "default" : "outline"
              }
              onClick={() => setSelectedFilter("smoke-damage")}
              className="rounded-full"
            >
              Smoke Damage
            </Button>
            <Button
              variant={
                selectedFilter === "storm-damage" ? "default" : "outline"
              }
              onClick={() => setSelectedFilter("storm-damage")}
              className="rounded-full"
            >
              Storm Damage
            </Button>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24" ref={galleryRef}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden transition-shadow hover:shadow-xl"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Before/After Preview */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <div className="absolute inset-0 grid grid-cols-2">
                      {/* Before */}
                      <div className="relative">
                        {project.beforeImage ? (
                          <Image
                            src={project.beforeImage}
                            alt={`${project.title} - Before`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-100 to-red-200">
                            <span className="text-2xl font-bold text-red-600">
                              Before
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                          Before
                        </div>
                      </div>
                      {/* After */}
                      <div className="relative">
                        {project.afterImage ? (
                          <Image
                            src={project.afterImage}
                            alt={`${project.title} - After`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
                            <span className="text-2xl font-bold text-green-600">
                              After
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
                          After
                        </div>
                      </div>
                    </div>
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="text-center text-white">
                        <div className="text-sm font-semibold">
                          Click to view slider
                        </div>
                        <ArrowRight className="mx-auto mt-2 h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <Badge variant={serviceTypeColors[project.serviceType]}>
                      {serviceTypeLabels[project.serviceType]}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {project.propertyType}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Completed in {project.duration}</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3 border-t pt-4">
                    {project.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-atlas-primary">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Restore Your Property?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Let us bring your property back to its pre-loss condition. Contact
            us today for a free estimate or 24/7 emergency service.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="emergency"
              size="xl"
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
              size="xl"
              className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary"
              asChild
            >
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <p className="mt-1 text-sm text-white/80">
                  {selectedProject.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-2 hover:bg-white/10"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            <BeforeAfterSlider
              beforeImage={selectedProject.beforeImage}
              afterImage={selectedProject.afterImage}
              beforeAlt={`${selectedProject.title} - Before restoration`}
              afterAlt={`${selectedProject.title} - After restoration`}
              className="rounded-lg"
            />

            <div className="mt-4 rounded-lg bg-white p-6">
              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {selectedProject.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-lg font-bold text-atlas-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
