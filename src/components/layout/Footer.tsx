import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

const services = [
  { name: "Water Damage Restoration", href: "/services/water-damage-restoration" },
  { name: "Fire Damage Restoration", href: "/services/fire-damage-restoration" },
  { name: "Mold Remediation", href: "/services/mold-remediation" },
  { name: "Smoke Damage Cleanup", href: "/services/smoke-damage-cleanup" },
  { name: "Storm Damage", href: "/services/storm-damage" },
  { name: "Emergency Services", href: "/services/emergency-services" },
  { name: "Commercial Restoration", href: "/services/commercial-restoration" },
]

const locations = [
  { name: "Acworth, GA", href: "/locations/acworth" },
  { name: "Marietta, GA", href: "/locations/marietta" },
  { name: "Kennesaw, GA", href: "/locations/kennesaw" },
  { name: "Woodstock, GA", href: "/locations/woodstock" },
  { name: "Canton, GA", href: "/locations/canton" },
  { name: "Roswell, GA", href: "/locations/roswell" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-atlas-secondary text-white">
      {/* Emergency CTA Bar */}
      <div className="bg-atlas-accent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 sm:py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold">24/7 Emergency Service Available</p>
              <p className="text-sm opacity-90">Fast response when disaster strikes</p>
            </div>
            <a
              href="tel:+14048083677"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-4 font-bold text-atlas-accent transition-colors hover:bg-gray-100 min-h-[56px] w-full sm:w-auto text-lg sm:text-base"
            >
              <Phone className="h-6 w-6 sm:h-5 sm:w-5" />
              Call (404) 808-3677
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.webp"
                alt="Atlas Mitigation"
                width={40}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="ml-2 flex flex-col leading-tight">
                <span className="text-lg font-bold">Atlas</span>
                <span className="text-sm font-semibold text-atlas-primary">Mitigation</span>
              </div>
            </Link>
            <p className="mb-4 text-gray-300">
              Premium fire and water damage restoration for high-end homes and commercial
              properties in the Atlanta metro area.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+14048083677"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors min-h-[44px] py-2"
              >
                <Phone className="h-5 w-5 text-atlas-accent" />
                (404) 808-3677
              </a>
              <a
                href="mailto:info@atlasmitigation.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors min-h-[44px] py-2"
              >
                <Mail className="h-5 w-5 text-atlas-accent" />
                info@atlasmitigation.com
              </a>
              <div className="flex items-start gap-3 text-gray-300 py-2">
                <MapPin className="h-5 w-5 text-atlas-accent shrink-0 mt-0.5" />
                <span>
                  1720 Mars Hill Rd
                  <br />
                  Acworth, GA 30101
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 py-2">
                <Clock className="h-5 w-5 text-atlas-accent" />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block min-h-[44px] py-2"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block min-h-[44px] py-2"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-atlas-primary hover:text-atlas-primary/80 font-medium transition-colors inline-block min-h-[44px] py-2"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors inline-block min-h-[44px] py-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-400 md:flex-row md:text-left">
            <p suppressHydrationWarning>© {currentYear} Atlas Mitigation. All rights reserved.</p>
            <p>
              Serving Acworth, Marietta, Kennesaw, and the greater Atlanta metro area.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
