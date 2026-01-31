import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Award,
  Shield,
  Users,
  Heart,
  Target,
  CheckCircle,
  MapPin,
  Clock,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Atlas Mitigation - metro Atlanta's trusted fire and water damage restoration experts. IICRC certified, 15+ years experience, specializing in high-end homes and commercial properties.",
  openGraph: {
    title: "About Us | Atlas Mitigation",
    description:
      "Metro Atlanta's trusted fire and water damage restoration experts since 2010.",
  },
}

const values = [
  {
    icon: Clock,
    title: "Rapid Response",
    description:
      "When disaster strikes, every minute counts. We respond within 60 minutes to minimize damage and start the recovery process immediately.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every project. Our IICRC-certified technicians deliver exceptional results every time.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We understand that dealing with property damage is stressful. Our team provides supportive, caring service throughout the restoration process.",
  },
  {
    icon: Target,
    title: "Integrity",
    description:
      "Honest assessments, transparent pricing, and ethical practices. We treat your property and your trust with the respect they deserve.",
  },
]

const certifications = [
  "IICRC Certified Firm",
  "IICRC Water Restoration Technician (WRT)",
  "IICRC Fire & Smoke Restoration Technician (FSRT)",
  "IICRC Applied Microbial Remediation Technician (AMRT)",
  "EPA Lead-Safe Certified",
  "OSHA 30-Hour Certified",
  "Georgia Licensed Contractor",
  "Fully Bonded & Insured",
]

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "60min", label: "Avg Response Time" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                About Atlas Mitigation
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Atlas Mitigation is metro Atlanta&apos;s premier fire and water
                damage restoration company. Since 2010, we&apos;ve helped
                hundreds of homeowners and businesses recover from disasters
                with professional, compassionate service.
              </p>
              <p className="mt-4 text-lg text-white/80">
                We specialize in high-end residential properties and commercial
                restoration, bringing meticulous attention to detail and
                industry-leading techniques to every project.
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
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-white/10 border-white/20">
                  <CardContent className="p-6 text-center text-white">
                    <div className="text-4xl font-bold text-atlas-primary">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Atlas Mitigation was founded with a simple mission: to provide
                exceptional restoration services with the care and attention
                that property owners deserve during their most stressful moments.
              </p>
              <p>
                What started as a small team responding to water damage
                emergencies has grown into a comprehensive restoration company
                serving the entire Atlanta metropolitan area. Through the years,
                we&apos;ve restored everything from historic Marietta homes to
                modern commercial facilities, always maintaining our commitment
                to quality and customer care.
              </p>
              <p>
                Today, Atlas Mitigation is recognized as one of the leading
                restoration companies in Georgia. We&apos;ve earned this
                reputation through consistent excellence, rapid response times,
                and the trust of hundreds of satisfied customers.
              </p>
              <p>
                Our specialization in high-end properties sets us apart.
                We understand that restoring a luxury home requires different
                skills and attention than standard restoration work. Our
                technicians are trained to handle custom finishes, antiques,
                and specialty materials with the care they demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              These core values guide everything we do at Atlas Mitigation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-atlas-primary/10 text-atlas-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experienced, certified professionals dedicated to restoring your
              property.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team member placeholders */}
            {[
              {
                name: "Team Member",
                role: "Owner / Lead Technician",
                description:
                  "15+ years experience in restoration. IICRC Master Certified.",
              },
              {
                name: "Team Member",
                role: "Operations Manager",
                description:
                  "Coordinates projects and ensures exceptional customer service.",
              },
              {
                name: "Team Member",
                role: "Senior Technician",
                description:
                  "Specializes in fire damage and smoke restoration.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  {/* Photo placeholder */}
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-atlas-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-atlas-secondary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Certifications & Credentials
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Our team maintains the highest industry certifications to ensure
                we provide the best possible service. We invest heavily in
                ongoing training and education.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10">
                  <Shield className="h-8 w-8 text-atlas-primary" />
                </div>
                <div>
                  <div className="font-semibold">IICRC Certified Firm</div>
                  <div className="text-sm text-white/60">
                    Institute of Inspection Cleaning and Restoration Certification
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-4"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-atlas-primary" />
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Serving Metro Atlanta
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our central Acworth location allows us to respond quickly to
                emergencies throughout the Atlanta metropolitan area. We serve
                Cobb County, Cherokee County, Fulton County, and surrounding
                areas.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { area: "Cobb County", cities: "Acworth, Marietta, Kennesaw, Smyrna" },
                  { area: "Cherokee County", cities: "Woodstock, Canton" },
                  { area: "Fulton County", cities: "Roswell, Alpharetta" },
                ].map((region) => (
                  <div key={region.area} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-atlas-primary" />
                    <div>
                      <div className="font-medium">{region.area}</div>
                      <div className="text-sm text-muted-foreground">
                        {region.cities}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/locations">View All Service Areas</Link>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative aspect-square rounded-lg bg-muted lg:aspect-auto">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="mx-auto h-16 w-16" />
                  <div className="mt-4 text-lg font-medium">Service Area Map</div>
                  <div className="text-sm">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 fill-atlas-accent text-atlas-accent"
                />
              ))}
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by Hundreds of Customers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our 4.9/5 star rating reflects our commitment to exceptional
              service and customer satisfaction.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>500+ 5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>Google Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-atlas-primary" />
                <span>BBB A+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-atlas-primary py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Whether you&apos;re dealing with an emergency or planning ahead,
            our team is here to help. Contact us for a free consultation and
            estimate.
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
