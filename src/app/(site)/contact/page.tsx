import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Atlas Mitigation for 24/7 emergency restoration services in Acworth, Marietta, Kennesaw and metro Atlanta. Call (770) 588-1119 or request a free quote online.",
  openGraph: {
    title: "Contact Us | Atlas Mitigation",
    description:
      "24/7 emergency restoration. Contact us for fire, water, and mold damage restoration.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Atlas Mitigation",
    description:
      "24/7 emergency restoration. Contact us for fire, water, and mold damage restoration.",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Atlas Mitigation
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Have questions or need immediate assistance? Our team is available
              24/7 for emergency restoration services. Fill out the form below or
              call us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-atlas-accent py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3 text-white">
              <AlertTriangle className="h-6 w-6 animate-pulse" />
              <span className="font-semibold">
                Emergency? Don&apos;t wait - call us now for immediate response!
              </span>
            </div>
            <a
              href="tel:+17705881119"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 font-bold text-atlas-accent hover:bg-white/90 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (770) 588-1119
            </a>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">Request a Free Quote</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 2
                  hours during business hours, or immediately for emergencies.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <a
                        href="tel:+17705881119"
                        className="mt-1 text-lg font-bold text-atlas-primary hover:underline"
                      >
                        (770) 588-1119
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a
                        href="mailto:jonathan@atlasmitigation.com"
                        className="mt-1 text-atlas-primary hover:underline"
                      >
                        jonathan@atlasmitigation.com
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">
                        We respond within 2 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="mt-1">
                        5437 Due West Rd
                        <br />
                        Powder Springs, GA 30127
                      </p>
                      <Link
                        href="https://maps.google.com/?q=5437+Due+West+Rd+Powder+Springs+GA+30127"
                        target="_blank"
                        className="mt-2 inline-block text-sm text-atlas-primary hover:underline"
                      >
                        Get Directions
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mailing Address */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mailing Address</h3>
                      <p className="mt-1">
                        1720 Mars Hill Rd, Suites 8-142
                        <br />
                        Acworth, GA 30101
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-atlas-primary text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Emergency Service:</span>{" "}
                          24/7/365
                        </p>
                        <p>
                          <span className="font-medium">Office Hours:</span>
                        </p>
                        <p className="text-muted-foreground">
                          Mon-Fri: 8:00 AM - 6:00 PM
                        </p>
                        <p className="text-muted-foreground">
                          Sat: 9:00 AM - 2:00 PM
                        </p>
                        <p className="text-muted-foreground">Sun: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-atlas-primary text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="mt-2 text-sm text-white/80">
                        <strong>Emergency calls:</strong> Response within 60
                        minutes
                      </p>
                      <p className="mt-1 text-sm text-white/80">
                        <strong>Quote requests:</strong> Response within 2 hours
                        during business hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">Our Location</h2>
            <p className="mt-2 text-muted-foreground">
              Centrally located to serve all of metro Atlanta
            </p>
          </div>

          <div className="mt-8 aspect-[21/9] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps?q=5437+Due+West+Rd,+Powder+Springs,+GA+30127&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atlas Mitigation - 5437 Due West Rd, Powder Springs, GA 30127"
            />
          </div>
        </div>
      </section>
    </>
  )
}
