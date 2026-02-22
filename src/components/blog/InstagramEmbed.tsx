"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

interface InstagramEmbedProps {
  url: string
  className?: string
}

export function InstagramEmbed({ url, className = "" }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        return
      }

      const existingScript = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      )
      if (existingScript) return

      const script = document.createElement("script")
      script.src = "https://www.instagram.com/embed.js"
      script.async = true
      document.body.appendChild(script)
    }

    // Small delay to ensure the blockquote is in the DOM
    const timer = setTimeout(loadEmbed, 100)
    return () => clearTimeout(timer)
  }, [url])

  // Extract clean URL (remove query params and trailing slash variations)
  const cleanUrl = url.split("?")[0].replace(/\/$/, "")

  return (
    <div ref={containerRef} className={`flex justify-center ${className}`}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={`${cleanUrl}/`}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      />
    </div>
  )
}
