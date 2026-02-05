import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services, getServiceBySlug, getRelatedServices } from "@/data/services"
import { ServiceSchema, FAQSchema } from "@/components/seo"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = getRelatedServices(service.relatedServices)

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.excerpt}
        slug={service.slug}
        areaServed={["Acworth", "Marietta", "Kennesaw", "Woodstock", "Roswell"]}
      />
      <FAQSchema
        faqs={service.faqs}
        pageUrl={`https://atlasmitigation.com/services/${service.slug}`}
      />

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
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
                <span>/</span>
                <span className="text-white">{service.shortTitle}</span>
              </nav>

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-atlas-primary text-white">
                <service.icon className="h-8 w-8" />
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-6 text-lg text-white/80">{service.excerpt}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="emergency" size="lg" asChild>
                  <a href="tel:+14048083677" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now: (404) 808-3677
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

            {/* Image placeholder */}
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-lg bg-white/10 lg:block">
              <div className="absolute inset-0 flex items-center justify-center text-white/40">
                <div className="text-center">
                  <service.icon className="mx-auto h-16 w-16" />
                  <div className="mt-4 text-sm">Service Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">
              About Our {service.shortTitle} Services
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              {service.description.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our {service.shortTitle} Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A proven, systematic approach to restore your property quickly and
              completely.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {service.processSteps.map((step) => (
              <Card key={step.step} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-atlas-primary text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Atlas Mitigation for {service.shortTitle}?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine industry expertise with personalized service to deliver
                exceptional restoration results.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-atlas-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free Estimate</Link>
                </Button>
              </div>
            </div>

            {/* Before/After Placeholder */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted">
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-sm font-medium">Before / After</div>
                      <div className="text-xs">Project Example</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="font-medium">{service.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Acworth, GA
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Common questions about our {service.shortTitle.toLowerCase()}{" "}
              services.
            </p>

            <div className="mt-12 space-y-4">
              {service.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border bg-card p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-medium">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Related Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Explore other restoration services that may help with your
              situation.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Card
                  key={related.slug}
                  className="group transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-atlas-primary/10 text-atlas-primary">
                      <related.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{related.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/services/${related.slug}`}
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
      )}

      {/* Service Area */}
      <section className="border-t py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {service.shortTitle} Service Areas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Providing {service.shortTitle.toLowerCase()} services throughout
              metro Atlanta
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {[
                "Acworth",
                "Marietta",
                "Kennesaw",
                "Woodstock",
                "Canton",
                "Roswell",
                "Alpharetta",
                "Smyrna",
              ].map((city) => (
                <Link
                  key={city}
                  href={`/locations/${city.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-atlas-primary"
                >
                  <MapPin className="h-4 w-4" />
                  {city}, GA
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need {service.shortTitle} Services?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Contact us for a free estimate or call now for 24/7 emergency
            response. Our certified technicians are ready to help.
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
