import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { locations, getLocationBySlug } from "@/data/locations"
import { services } from "@/data/services"

interface LocationPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }))
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    return {
      title: "Location Not Found",
    }
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
    },
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
                <span>/</span>
                <Link href="/locations" className="hover:text-white">
                  Locations
                </Link>
                <span>/</span>
                <span className="text-white">{location.city}</span>
              </nav>

              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-8 w-8 text-atlas-primary" />
                {location.featured && (
                  <Badge className="bg-atlas-accent">Featured Area</Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Restoration Services in {location.city}, {location.state}
              </h1>

              <p className="mt-4 text-lg text-white/60">{location.county}</p>

              <p className="mt-6 text-lg text-white/80">
                24/7 emergency fire and water damage restoration serving{" "}
                {location.city} and surrounding areas. Our certified technicians
                respond in {location.responseTime} on average.
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

            {/* Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center text-white">
                  <Clock className="mx-auto h-8 w-8 text-atlas-primary" />
                  <div className="mt-4 text-3xl font-bold">
                    {location.responseTime}
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Average Response Time
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center text-white">
                  <CheckCircle className="mx-auto h-8 w-8 text-atlas-primary" />
                  <div className="mt-4 text-3xl font-bold">
                    {location.projectsCompleted}+
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center text-white">
                  <MapPin className="mx-auto h-8 w-8 text-atlas-primary" />
                  <div className="mt-4 text-3xl font-bold">
                    {location.neighborhoods.length}
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Neighborhoods Served
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6 text-center text-white">
                  <Building2 className="mx-auto h-8 w-8 text-atlas-primary" />
                  <div className="mt-4 text-3xl font-bold">24/7</div>
                  <div className="mt-1 text-sm text-white/70">
                    Emergency Availability
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About This Location */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              About Our {location.city} Services
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Services Available in {location.city}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Complete restoration services for residential and commercial
              properties.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Card key={service.slug} className="group hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-atlas-primary/10 text-atlas-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {service.excerpt}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-atlas-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods & ZIP Codes */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Neighborhoods */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Neighborhoods We Serve
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fast response to all {location.city} neighborhoods
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {location.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-atlas-primary" />
                    <span>{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ZIP Codes */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                ZIP Codes Covered
              </h2>
              <p className="mt-2 text-muted-foreground">
                Service available throughout these postal codes
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {location.zipCodes.map((zip) => (
                  <Badge key={zip} variant="outline" className="text-base px-4 py-2">
                    {zip}
                  </Badge>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-lg bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12" />
                    <div className="mt-2 text-sm">Service Area Map</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What {location.city} Customers Say
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="h-5 w-5 fill-atlas-accent text-atlas-accent"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-white/80">
                    &quot;Excellent service! They responded quickly and did an
                    amazing job restoring our home after water damage.&quot;
                  </p>
                  <div className="mt-4 border-t border-white/20 pt-4">
                    <div className="font-medium">Customer Name</div>
                    <div className="text-sm text-white/60">
                      {location.city}, {location.state}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              Nearby Service Areas
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {locations
              .filter((l) => l.slug !== location.slug)
              .slice(0, 6)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:border-atlas-primary hover:text-atlas-primary transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  {loc.city}, {loc.state}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Restoration in {location.city}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Contact us for a free estimate or call now for 24/7 emergency
            response. Average response time: {location.responseTime}.
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
    </>
  )
}
