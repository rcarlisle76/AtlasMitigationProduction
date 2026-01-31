"use client"

import { PortableText as PortableTextComponent } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import { urlFor } from "@/lib/sanity/client"

// Custom components for rendering portable text
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={urlFor(value).width(1200).height(675).url()}
              alt={value.alt || "Blog image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: any }) => {
      if (!value?.href) return <>{children}</>
      const rel = !value.href?.startsWith("/")
        ? "noopener noreferrer"
        : undefined
      const target = !value.href?.startsWith("/") ? "_blank" : undefined
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="text-atlas-primary underline hover:no-underline"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="mb-4 mt-8 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="mb-3 mt-6 text-xl font-bold">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="mb-3 mt-6 text-lg font-semibold">{children}</h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-atlas-primary pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
}

interface PortableTextProps {
  value: any[]
}

export function PortableText({ value }: PortableTextProps) {
  if (!value || !Array.isArray(value)) {
    return null
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableTextComponent value={value} components={components as any} />
    </div>
  )
}
