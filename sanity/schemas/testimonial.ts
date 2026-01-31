import { defineType, defineField } from "sanity"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      description: 'E.g., "John D." or "Sarah M." (can use initials for privacy)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company/Property",
      type: "string",
      description: "Optional - for commercial clients",
    }),
    defineField({
      name: "service",
      title: "Service Used",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "reference",
      to: [{ type: "location" }],
      description: "City where service was provided",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
      description: "1-5 stars",
    }),
    defineField({
      name: "quote",
      title: "Testimonial Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
      description: "The customer testimonial (keep under 200 words)",
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Show on homepage",
      initialValue: false,
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description: "When the review was given",
    }),
    defineField({
      name: "verified",
      title: "Verified Review",
      type: "boolean",
      description: "From Google Reviews or verified source",
      initialValue: false,
    }),
    defineField({
      name: "source",
      title: "Review Source",
      type: "string",
      options: {
        list: [
          { title: "Google Reviews", value: "google" },
          { title: "Direct Testimonial", value: "direct" },
          { title: "Email", value: "email" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Customer Photo (Optional)",
      type: "image",
      description: "Optional photo with permission",
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      rating: "rating",
      featured: "featured",
      media: "image",
    },
    prepare({ name, rating, featured, media }) {
      const stars = "★".repeat(rating || 0) + "☆".repeat(5 - (rating || 0))
      return {
        title: name,
        subtitle: `${stars}${featured ? " - Featured" : ""}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: "Rating (Highest First)",
      name: "ratingDesc",
      by: [
        { field: "rating", direction: "desc" },
        { field: "date", direction: "desc" },
      ],
    },
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [
        { field: "featured", direction: "desc" },
        { field: "date", direction: "desc" },
      ],
    },
  ],
})
