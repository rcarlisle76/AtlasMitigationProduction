import Script from "next/script"

interface ServiceSchemaProps {
  name: string
  description: string
  slug: string
  image?: string
  areaServed?: string[]
  provider?: {
    name: string
    url: string
    telephone: string
  }
}

const defaultProvider = {
  name: "Atlas Mitigation",
  url: "https://atlasmitigation.com",
  telephone: "+1-404-808-3677",
}

export function ServiceSchema({
  name,
  description,
  slug,
  image,
  areaServed = [
    "Acworth",
    "Marietta",
    "Kennesaw",
    "Woodstock",
    "Canton",
    "Roswell",
  ],
  provider = defaultProvider,
}: ServiceSchemaProps) {
  const serviceUrl = `${provider.url}/services/${slug}`

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}/#service`,
    name,
    description,
    url: serviceUrl,
    image: image || `${provider.url}/images/services/${slug}.jpg`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${provider.url}/#organization`,
      name: provider.name,
      url: provider.url,
      telephone: provider.telephone,
    },
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: name,
    termsOfService: `${provider.url}/terms`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: serviceUrl,
      servicePhone: provider.telephone,
      availableLanguage: {
        "@type": "Language",
        name: "English",
      },
    },
    hoursAvailable: {
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
  }

  // Note: dangerouslySetInnerHTML is safe here because JSON.stringify
  // produces valid JSON output, not arbitrary HTML
  return (
    <Script
      id={`service-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
