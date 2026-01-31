import { defineType, defineField } from "sanity"

export const location = defineType({
  name: "location",
  title: "Service Locations",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "City Name",
      type: "string",
      description: 'E.g., "Acworth", "Marietta", "Kennesaw"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "city",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      initialValue: "Georgia",
    }),
    defineField({
      name: "county",
      title: "County",
      type: "string",
      description: 'E.g., "Cobb County", "Cherokee County"',
    }),
    defineField({
      name: "zipCodes",
      title: "ZIP Codes Served",
      type: "array",
      of: [{ type: "string" }],
      description: "List of ZIP codes in this service area",
    }),
    defineField({
      name: "neighborhoods",
      title: "Neighborhoods",
      type: "array",
      of: [{ type: "string" }],
      description: "Notable neighborhoods in this area",
    }),
    defineField({
      name: "description",
      title: "Location Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Why choose Atlas Mitigation in this area",
    }),
    defineField({
      name: "services",
      title: "Available Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      description: "Services offered in this location",
    }),
    defineField({
      name: "responseTime",
      title: "Average Response Time",
      type: "string",
      description: 'E.g., "60 minutes or less", "Under 2 hours"',
    }),
    defineField({
      name: "projectsCompleted",
      title: "Projects Completed",
      type: "number",
      description: "Number of successful projects in this area",
    }),
    defineField({
      name: "featured",
      title: "Featured Location",
      type: "boolean",
      description: "Primary service area",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Location Image",
      type: "image",
      description: "Photo representing this area (optional)",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          type: "string",
          title: "Meta Title",
          validation: (Rule) => Rule.max(60),
        },
        {
          name: "metaDescription",
          type: "text",
          title: "Meta Description",
          validation: (Rule) => Rule.max(160),
        },
        {
          name: "keywords",
          type: "array",
          of: [{ type: "string" }],
          title: "Keywords",
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      city: "city",
      state: "state",
      featured: "featured",
      media: "image",
    },
    prepare({ city, state, featured, media }) {
      return {
        title: city,
        subtitle: `${state}${featured ? " - Featured" : ""}`,
        media: media,
      }
    },
  },
})
