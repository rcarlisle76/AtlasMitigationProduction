import Script from "next/script"

interface Review {
  author: string
  reviewBody: string
  reviewRating: number
  datePublished?: string
}

interface ReviewSchemaProps {
  reviews: Review[]
  itemReviewed?: {
    name: string
    type?: string
  }
}

export function ReviewSchema({
  reviews,
  itemReviewed = { name: "Atlas Mitigation", type: "LocalBusiness" },
}: ReviewSchemaProps) {
  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, r) => sum + r.reviewRating, 0)
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0

  const schema = {
    "@context": "https://schema.org",
    "@type": itemReviewed.type || "LocalBusiness",
    name: itemReviewed.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.reviewRating,
        bestRating: "5",
        worstRating: "1",
      },
      ...(review.datePublished && { datePublished: review.datePublished }),
    })),
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
