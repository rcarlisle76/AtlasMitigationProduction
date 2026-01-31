import Script from "next/script"

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  author?: string
  image?: string
  baseUrl?: string
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author = "Atlas Mitigation",
  image,
  baseUrl = "https://atlasmitigation.com",
}: ArticleSchemaProps) {
  const articleUrl = `${baseUrl}/blog/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}/#article`,
    headline: title,
    description,
    url: articleUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Atlas Mitigation",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/atlas-mitigation-logo.png`,
      },
    },
    image: image || `${baseUrl}/images/blog/${slug}.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
