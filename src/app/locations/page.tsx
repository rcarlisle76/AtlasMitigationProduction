import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { locations } from "@/data/locations"

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Atlas Mitigation serves Acworth, Marietta, Kennesaw, Woodstock, and the greater Atlanta metro area. 24/7 emergency fire and water damage restoration. Call (404) 808-3677.",
  openGraph: {
    title: "Service Areas | Atlas Mitigation",
    description:
      "Professional restoration services throughout metro Atlanta. 24/7 emergency response.",
  },
}

export default function LocationsPage() {
  const featuredLocations = locations.filter((l) => l.featured)
  const otherLocations = locations.filter((l) => !l.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Serving Metro Atlanta
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Atlas Mitigation provides 24/7 emergency restoration services
              throughout Cobb County, Cherokee County, Fulton County, and the
              greater Atlanta metropolitan area. Our rapid response teams can reach
              most locations within 60 minutes.
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

      {/* Featured Locations */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Primary Service Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our primary service areas receive the fastest response times and have
              dedicated local teams.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {featuredLocations.map((location) => (
              <Card
                key={location.slug}
                className="group flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
              >
                {/* Map placeholder */}
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <MapPin className="h-12 w-12" />
                  </div>
                  <Badge className="absolute right-4 top-4 bg-atlas-primary">
                    Featured
                  </Badge>
                </div>
                <CardContent className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold">
                    {location.city}, {location.state}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {location.county}
                  </p>

                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-atlas-primary" />
                      <span>Response: {location.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-atlas-primary" />
                      <span>{location.projectsCompleted}+ projects completed</span>
                    </div>
                  </div>

                  <div className="mt-4 flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {location.description.slice(0, 150)}...
                    </p>
                  </div>

                  <Link
                    href={`/locations/${location.slug}`}
                    className="mt-4 inline-flex items-center gap-2 font-medium text-atlas-primary hover:underline"
                  >
                    View Service Area
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Additional Service Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We also provide complete restoration services throughout these
              communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherLocations.map((location) => (
              <Card key={location.slug} className="group hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {location.city}, {location.state}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {location.county}
                      </p>
                    </div>
                    <MapPin className="h-5 w-5 text-atlas-primary" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{location.responseTime} response</span>
                  </div>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-atlas-primary hover:underline"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Served */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Counties We Serve
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Atlas Mitigation provides restoration services across multiple
                counties in the Atlanta metropolitan area. Our central location
                allows us to respond quickly to emergencies throughout the region.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { county: "Cobb County", cities: "Acworth, Marietta, Kennesaw, Smyrna" },
                  { county: "Cherokee County", cities: "Woodstock, Canton" },
                  { county: "Fulton County", cities: "Roswell, Alpharetta" },
                  { county: "Paulding County", cities: "Dallas, Hiram" },
                ].map((area) => (
                  <div
                    key={area.county}
                    className="rounded-lg border bg-card p-4"
                  >
                    <div className="font-semibold">{area.county}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {area.cities}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square rounded-lg bg-muted lg:aspect-auto">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16" />
                  <div className="mt-4 text-lg font-medium">Service Area Map</div>
                  <div className="text-sm">Interactive map coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Restoration in Your Area?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            If you don&apos;t see your location listed, contact us anyway. We may
            still be able to help, and we&apos;re always expanding our service area.
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
