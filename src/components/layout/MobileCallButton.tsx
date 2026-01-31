"use client"

import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function MobileCallButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="tel:+14048083677"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-atlas-accent text-white shadow-lg transition-all duration-300 hover:bg-atlas-accent-dark md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Call Atlas Mitigation"
    >
      <Phone className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-accent opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-atlas-accent"></span>
      </span>
    </a>
  )
}
