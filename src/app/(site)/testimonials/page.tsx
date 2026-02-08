import { Metadata } from "next"
import { Star, MapPin, Quote, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllTestimonials } from "@/lib/sanity/fetch-with-fallback"
import { ReviewSchema } from "@/components/seo"

export const metadata: Metadata = {
  title: "Customer Testimonials | Atlas Mitigation",
  description:
    "Read what our customers say about Atlas Mitigation's water damage, fire damage, and mold remediation services in metro Atlanta. 5-star rated restoration company.",
  openGraph: {
    title: "Customer Testimonials | Atlas Mitigation",
    description:
      "Read what our customers say about Atlas Mitigation's restoration services. 5-star rated in metro Atlanta.",
  },
}

export default async function TestimonialsPage() {
  const testimonials = await getAllTestimonials()

  // Calculate stats
  const totalReviews = testimonials.length
  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews
  const fiveStarCount = testimonials.filter((t) => t.rating === 5).length

  return (
    <>
      <ReviewSchema
        reviews={testimonials.map((t) => ({
          author: t.name,
          reviewBody: t.text,
          reviewRating: t.rating,
          datePublished: t.datePublished,
        }))}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-atlas-secondary to-atlas-secondary/90 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Customer Testimonials
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Don&apos;t just take our word for it. See what our customers have
              to say about their experience with Atlas Mitigation.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-16">
              <div>
                <div className="text-4xl font-bold text-atlas-accent">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-atlas-accent text-atlas-accent"
                    />
                  ))}
                </div>
                <div className="text-sm text-white/60 mt-1">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-atlas-accent">
                  {totalReviews}+
                </div>
                <div className="text-sm text-white/60 mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-atlas-accent">
                  {Math.round((fiveStarCount / totalReviews) * 100)}%
                </div>
                <div className="text-sm text-white/60 mt-1">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-atlas-primary/10" />

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-atlas-accent text-atlas-accent"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Customer Info */}
                  <div className="mt-6 border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-4 w-4" />
                      {testimonial.location}
                    </div>
                    <div className="mt-2">
                      <span className="inline-flex items-center rounded-full bg-atlas-primary/10 px-3 py-1 text-xs font-medium text-atlas-primary">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Ready to Experience Our 5-Star Service?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Join hundreds of satisfied customers who trust Atlas Mitigation
              for their restoration needs. We&apos;re available 24/7 for
              emergencies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="emergency" asChild>
                <a href="tel:+14048083677" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (404) 808-3677
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
