import Script from "next/script"

interface AggregateRatingSchemaProps {
  itemReviewed: {
    name: string
    type?: string
    url?: string
  }
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}

export function AggregateRatingSchema({
  itemReviewed,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": itemReviewed.type || "LocalBusiness",
    name: itemReviewed.name,
    ...(itemReviewed.url && { url: itemReviewed.url }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: reviewCount,
      bestRating: bestRating.toString(),
      worstRating: worstRating.toString(),
    },
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id="aggregate-rating-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
