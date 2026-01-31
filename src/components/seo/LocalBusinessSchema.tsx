import Script from "next/script"

interface LocalBusinessSchemaProps {
  name?: string
  description?: string
  telephone?: string
  email?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  areaServed?: string[]
  image?: string
  url?: string
}

const defaultBusinessInfo: LocalBusinessSchemaProps = {
  name: "Atlas Mitigation",
  description:
    "Premium fire and water damage restoration services for high-end homes and commercial properties in the Atlanta metro area. 24/7 emergency response available.",
  telephone: "+1-404-808-3677",
  email: "info@atlasmitigation.com",
  address: {
    streetAddress: "1720 Mars Hill Rd",
    addressLocality: "Acworth",
    addressRegion: "GA",
    postalCode: "30101",
    addressCountry: "US",
  },
  geo: {
    latitude: 34.0668,
    longitude: -84.6769,
  },
  openingHours: ["Mo-Su 00:00-23:59"],
  priceRange: "$$$",
  areaServed: [
    "Acworth",
    "Marietta",
    "Kennesaw",
    "Woodstock",
    "Canton",
    "Roswell",
    "Alpharetta",
    "Sandy Springs",
    "Atlanta",
  ],
  url: "https://atlasmitigation.com",
}

export function LocalBusinessSchema(props: LocalBusinessSchemaProps = {}) {
  const data = { ...defaultBusinessInfo, ...props }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${data.url}/#organization`,
    name: data.name,
    description: data.description,
    telephone: data.telephone,
    email: data.email,
    url: data.url,
    image: data.image || `${data.url}/images/atlas-mitigation-logo.png`,
    priceRange: data.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address?.streetAddress,
      addressLocality: data.address?.addressLocality,
      addressRegion: data.address?.addressRegion,
      postalCode: data.address?.postalCode,
      addressCountry: data.address?.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo?.latitude,
      longitude: data.geo?.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: data.areaServed?.map((area) => ({
      "@type": "City",
      name: area,
      "@id": `${data.url}/locations/${area.toLowerCase().replace(/\s+/g, "-")}`,
    })),
    sameAs: [
      "https://www.facebook.com/atlasmitigation",
      "https://www.instagram.com/atlasmitigation",
      "https://www.linkedin.com/company/atlasmitigation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Restoration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fire Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mold Remediation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smoke Damage Cleanup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Storm Damage Restoration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Restoration",
          },
        },
      ],
    },
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
