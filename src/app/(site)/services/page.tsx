import type { Metadata } from "next"
import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/data/services"

export const metadata: Metadata = {
  title: "Restoration Services",
  description:
    "Complete fire, water, mold, and storm damage restoration services in Acworth, Marietta, Kennesaw and metro Atlanta. 24/7 emergency response. IICRC certified. Call (404) 808-3677.",
  openGraph: {
    title: "Restoration Services | Atlas Mitigation",
    description:
      "Complete fire, water, mold, and storm damage restoration services in metro Atlanta. 24/7 emergency response.",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Professional Restoration Services
            </h1>
            <p className="mt-6 text-lg text-white/80">
              From water damage to fire restoration, mold remediation to storm
              recovery—Atlas Mitigation provides comprehensive restoration services
              for homes and businesses throughout metro Atlanta.
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

      {/* Services Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.slug}
                className="group relative flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-atlas-primary/10 text-atlas-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="mt-3 flex-1 text-muted-foreground">
                    {service.excerpt}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 font-medium text-atlas-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Atlas Mitigation?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              When disaster strikes, you need a restoration partner who combines
              rapid response with attention to detail.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                stat: "60 Min",
                label: "Average Response Time",
              },
              {
                stat: "24/7",
                label: "Emergency Availability",
              },
              {
                stat: "500+",
                label: "Projects Completed",
              },
              {
                stat: "4.9/5",
                label: "Customer Rating",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl font-bold text-atlas-primary">
                  {item.stat}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Restoration Services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Contact us for a free estimate or call now for 24/7 emergency response.
            We&apos;re here to help you recover from any disaster.
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
