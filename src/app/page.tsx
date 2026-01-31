import Link from "next/link"
import {
  Phone,
  Droplets,
  Flame,
  Wind,
  Building2,
  AlertTriangle,
  CloudRain,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ReviewSchema } from "@/components/seo"
import { getFeaturedTestimonials } from "@/lib/sanity/fetch-with-fallback"

// Services data
const services = [
  {
    title: "Water Damage Restoration",
    description:
      "Fast water extraction, drying, and restoration for flooded basements, burst pipes, and storm damage.",
    icon: Droplets,
    href: "/services/water-damage-restoration",
  },
  {
    title: "Fire Damage Restoration",
    description:
      "Complete fire and smoke damage repair, from structural repairs to content cleaning and restoration.",
    icon: Flame,
    href: "/services/fire-damage-restoration",
  },
  {
    title: "Mold Remediation",
    description:
      "Professional mold inspection, removal, and prevention to protect your property and health.",
    icon: Wind,
    href: "/services/mold-remediation",
  },
  {
    title: "Storm Damage",
    description:
      "Emergency response for storm, wind, and flood damage to get your property secured and restored.",
    icon: CloudRain,
    href: "/services/storm-damage",
  },
  {
    title: "Commercial Restoration",
    description:
      "Large-scale restoration services for businesses, minimizing downtime and protecting your investment.",
    icon: Building2,
    href: "/services/commercial-restoration",
  },
  {
    title: "Emergency Services",
    description:
      "24/7 emergency response with rapid deployment to minimize damage and start restoration immediately.",
    icon: AlertTriangle,
    href: "/services/emergency-services",
  },
]

// Why Choose Us data
const benefits = [
  {
    title: "24/7 Emergency Response",
    description:
      "Disaster doesn't wait, and neither do we. Our team is available around the clock for immediate response.",
    icon: Clock,
  },
  {
    title: "Certified Professionals",
    description:
      "IICRC certified technicians with years of experience in fire, water, and mold restoration.",
    icon: Award,
  },
  {
    title: "Insurance Assistance",
    description:
      "We work directly with your insurance company to streamline claims and reduce your stress.",
    icon: Shield,
  },
  {
    title: "High-End Specialization",
    description:
      "Expertise in restoring luxury homes and commercial properties with meticulous attention to detail.",
    icon: Users,
  },
]


// Service areas
const serviceAreas = [
  { city: "Acworth", featured: true },
  { city: "Marietta", featured: true },
  { city: "Kennesaw", featured: true },
  { city: "Woodstock", featured: false },
  { city: "Canton", featured: false },
  { city: "Roswell", featured: false },
  { city: "Alpharetta", featured: false },
  { city: "Smyrna", featured: false },
]

// Trust badges/certifications
const certifications = [
  "IICRC Certified",
  "Licensed & Insured",
  "EPA Lead-Safe Certified",
  "BBB Accredited",
  "5-Star Google Rating",
]

export default async function HomePage() {
  const testimonials = await getFeaturedTestimonials()
  return (
    <>
      <ReviewSchema
        reviews={testimonials.map((t) => ({
          author: t.name,
          reviewBody: t.text,
          reviewRating: t.rating,
          datePublished: t.datePublished,
        }))}
        itemReviewed={{
          name: "Atlas Mitigation",
          type: "LocalBusiness",
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-atlas-secondary text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-atlas-primary to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            {/* Emergency badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-atlas-accent px-4 py-2 text-sm font-semibold animate-pulse-emergency">
              <Clock className="h-4 w-4" />
              24/7 Emergency Service Available
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Restoring Your Property
              <span className="block text-atlas-primary">After Disaster Strikes</span>
            </h1>

            <p className="mt-6 text-base text-white/80 sm:text-lg lg:text-xl">
              Specializing in high-end homes and commercial properties. Expert fire,
              water, and mold damage restoration in Acworth, Marietta, Kennesaw, and
              the greater Atlanta metro area.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="emergency" size="xl" className="min-h-[56px]" asChild>
                <a href="tel:+14048083677" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (404) 808-3677
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-secondary min-h-[56px]"
                asChild
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>IICRC Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>Free Estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Restoration Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Comprehensive restoration solutions for residential and commercial
              properties. Fast response, professional service, exceptional results.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-atlas-primary/10 text-atlas-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-atlas-primary hover:underline min-h-[44px] py-2"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Atlas Mitigation?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                When disaster strikes, you need a restoration partner you can trust.
                Atlas Mitigation combines rapid response with meticulous attention to
                detail, specializing in high-end residential and commercial properties.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-atlas-primary">500+</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-atlas-primary">15+</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-atlas-primary">1 Hour</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Average Response Time
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-atlas-primary">4.9/5</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Customer Rating
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Preview */}
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
            {[
              { title: "Water Damage Restoration", location: "Acworth, GA" },
              { title: "Fire Damage Restoration", location: "Marietta, GA" },
              { title: "Mold Remediation", location: "Kennesaw, GA" },
            ].map((project, index) => (
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

      {/* Testimonials Section */}
      <section className="bg-atlas-secondary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Don&apos;t just take our word for it. Hear from homeowners and
              businesses we&apos;ve helped restore.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-atlas-accent text-atlas-accent"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-white/90">&quot;{testimonial.text}&quot;</p>
                  <div className="mt-6 border-t border-white/20 pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <MapPin className="h-4 w-4" />
                      {testimonial.location} &bull; {testimonial.service}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Serving Metro Atlanta
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Atlas Mitigation proudly serves Cobb County, Cherokee County, and the
                greater Atlanta metropolitan area. Our rapid response team can reach
                most locations within 60 minutes.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.city}
                    href={`/locations/${area.city.toLowerCase()}`}
                    className="flex items-center gap-2 text-foreground hover:text-atlas-primary transition-colors"
                  >
                    <MapPin
                      className={`h-4 w-4 ${area.featured ? "text-atlas-primary" : "text-muted-foreground"}`}
                    />
                    <span className={area.featured ? "font-medium" : ""}>
                      {area.city}, GA
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/locations">View All Service Areas</Link>
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square rounded-lg bg-muted lg:aspect-auto">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12" />
                  <div className="mt-2 text-sm font-medium">Service Area Map</div>
                  <div className="text-xs">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="border-y bg-secondary py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-atlas-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-atlas-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need Emergency Restoration?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Don&apos;t wait. Water damage, fire damage, and mold spread quickly. Call
            now for immediate 24/7 emergency response in the Atlanta metro area.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="emergency"
              size="xl"
              className="bg-white text-atlas-primary hover:bg-white/90 min-h-[56px] w-full sm:w-auto"
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
              className="border-white bg-transparent text-white hover:bg-white hover:text-atlas-primary min-h-[56px] w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Request Free Quote</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Average response time: Under 60 minutes &bull; Available 24/7/365
          </p>
        </div>
      </section>
    </>
  )
}
