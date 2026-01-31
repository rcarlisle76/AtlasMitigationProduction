"use client"

import { Star, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { type Testimonial } from "@/data/testimonials"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
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
  )
}
