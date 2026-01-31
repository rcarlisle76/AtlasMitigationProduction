export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  service: string
  datePublished?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Thompson",
    location: "Acworth, GA",
    rating: 5,
    text: "Atlas Mitigation responded within an hour of my call. A burst pipe flooded my basement, and they had it dried out and restored in just a few days. Incredible service!",
    service: "Water Damage",
    datePublished: "2025-01-15",
  },
  {
    name: "Sarah Johnson",
    location: "Marietta, GA",
    rating: 5,
    text: "After a kitchen fire, I thought we'd lose everything. The Atlas team was professional, compassionate, and thorough. Our home looks better than before the fire.",
    service: "Fire Damage",
    datePublished: "2025-01-10",
  },
  {
    name: "David Chen",
    location: "Kennesaw, GA",
    rating: 5,
    text: "Found mold in our crawl space and panicked. Atlas came out same day, explained everything clearly, and handled the remediation perfectly. Highly recommend!",
    service: "Mold Remediation",
    datePublished: "2025-01-05",
  },
]
