import Script from "next/script"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
  baseUrl?: string
}

export function BreadcrumbSchema({
  items,
  baseUrl = "https://atlasmitigation.com",
}: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${baseUrl}${item.href}`,
    })),
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
