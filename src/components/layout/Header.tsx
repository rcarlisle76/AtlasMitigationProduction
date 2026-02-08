"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, Clock, MapPin, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SiteSearch } from "@/components/search/SiteSearch"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Water Damage Restoration", href: "/services/water-damage-restoration" },
      { name: "Fire Damage Restoration", href: "/services/fire-damage-restoration" },
      { name: "Mold Remediation", href: "/services/mold-remediation" },
      { name: "Smoke Damage Cleanup", href: "/services/smoke-damage-cleanup" },
      { name: "Storm Damage", href: "/services/storm-damage" },
      { name: "Emergency Services", href: "/services/emergency-services" },
      { name: "Commercial Restoration", href: "/services/commercial-restoration" },
    ],
  },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Keyboard shortcut: Cmd+K or Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar - Emergency Info */}
      <div className="bg-atlas-secondary text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between text-sm sm:h-10">
            <div className="hidden items-center gap-6 sm:flex">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-atlas-accent" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving Acworth, Marietta, Kennesaw & Metro Atlanta</span>
              </div>
            </div>
            <a
              href="tel:+14048083677"
              className="flex items-center gap-2 font-semibold hover:text-atlas-accent transition-colors min-h-[44px]"
            >
              <Phone className="h-5 w-5 sm:h-4 sm:w-4" />
              <span className="text-base sm:text-sm">(404) 808-3677</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Atlas Mitigation"
                width={50}
                height={60}
                className="h-12 w-auto lg:h-14"
                priority
              />
              <div className="ml-2 flex flex-col leading-tight">
                <span className="text-lg font-bold text-atlas-secondary lg:text-xl">Atlas</span>
                <span className="text-sm font-semibold text-atlas-primary lg:text-base">Mitigation</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="group"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-atlas-primary transition-colors"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </Link>
                      {/* Dropdown */}
                      <div
                        className={cn(
                          "absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                          servicesOpen && "opacity-100 visible"
                        )}
                      >
                        <div className="w-64 rounded-lg border bg-white p-2 shadow-lg">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-md px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-atlas-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-atlas-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="relative"
              >
                <Search className="h-5 w-5" />
                <kbd className="absolute -bottom-1 -right-1 pointer-events-none hidden xl:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                  ⌘K
                </kbd>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="emergency" asChild>
                <a href="tel:+14048083677" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="h-11 w-11"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="emergency" size="lg" className="h-11" asChild>
                <a href="tel:+14048083677" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span className="hidden xs:inline">Call</span>
                </a>
              </Button>
              <button
                type="button"
                className="text-foreground p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Toggle menu</span>
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-secondary min-h-[44px] flex items-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground min-h-[44px] flex items-center"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-secondary min-h-[44px] flex items-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Dialog */}
      <SiteSearch open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  )
}
